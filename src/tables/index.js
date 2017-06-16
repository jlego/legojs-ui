import './asset/index.scss';
import Pagination from '../pagination/index';
import Nodata from '../nodata/index';
/**
 * rowSelection
 * type = '' 多选/单选，checkbox or radio
 * selectedRowKeys = []  指定选中项的 key 数组，需要和 onChange 进行配合
 * onChange(){}  选中项发生变化的时的回调
 * getCheckboxProps(){}  选择框的默认属性配置
 * onSelect(){}  用户手动选择/取消选择某列的回调
 * onSelectAll(){}  用户手动选择/取消选择所有列的回调
 */
class Tables extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click tbody .lego-checkbox > input,.lego-radio > input': 'selectOne',
                'click thead .lego-checkbox > input': 'selectAll',
                'click th>span': 'clickSorter',
                'click .anticon-filter': 'clickFilter',
                'click .lego-table-tbody td': 'clickItem',
                'click .lego-table-scroll > button': 'clickSetting'
            },
            scrollbar: {},
            className: '',
            tableWidth: 0,
            loading: true,
            isNodata: false,
            isNowrap: true, //表格内容是否不换行
            rowSelection: null, //列表行是否可选择
            pagination: null,   //分页器，配置项参考 pagination，设为 false 时不展示和进行分页
            size: 'default', //正常或迷你类型，default or small middle
            columns: [],    //表格列的配置描述，具体项见下表
            rowClassName: '',    //表格行的类名
            expandedRowKeys: [], //展开的行，控制属性
            expandAllRows: false, //初始时，是否展开所有行
            locale: { //默认文案设置，目前包括排序、过滤、空数据文案
                filterConfirm: '确定',
                filterReset: '重置',
                emptyText: '暂无数据'
            },
            // indentSize: 0, //展示树形数据时，每层缩进的宽度，以 px 为单位
            bordered: false, //是否展示外边框和列边框
            showHeader: false, //是否显示表头
            showBodyer: true, //是否显示表体
            showFooter: false, //是否显示表尾
            showSetting: false, //是否显示设置
            fixedHeader: true, //是否固定表头
            // footer(){}, //表格尾部
            // title(){}, //表格标题
            // scroll: {}, //横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }}
            data: [],
            nodataOption: {}, //暂无数据配置
            onExpandRow(){}, //点击展开图标时触发
            onChange(){}, //分页、排序、筛选变化时触发
            onSelect(){},
            onSetting(){},
            onRowClick(){}, //处理行点击事件
            components: []
        };
        Object.assign(options, opts);
        super(options);
        let that = this;
        // 同步横向滚动
        const header = this.$('.lego-table-header');
        this.$('.lego-table-body > .scrollbar').scroll(function() {
            header.scrollLeft($(this).scrollLeft());
        });

        if(this.options.showFooter && this.columns.length){
            this.$('.lego-table-tfoot > tr > td').attr('colspan', this.columns.length);
        }
        $(window).resize(function(){
            that.resizeWidth();
        });
        this.resizeWidth();
        // selectedAll 1为全选，2为半选，0为没选
    }
    // 列宽更新
    getColumns(){
        this.columns = [];
        let options = this.options,
            oldWidth = this.tableRealWidth;
        this.columnsObj = this.columnsObj || {};
        if(options.columns){
            this.allColumns = typeof options.columns == 'function' ? options.columns(this) : options.columns;
            this.columns = Array.from(this.allColumns);
        }
        this.tableRealWidth = this.options.rowSelection ? 30 : 0;    //表格实宽
        this.columns.forEach((col, index) => {
            col.key = col.key || index;
            if(this.columnsObj[col.key]){
                Object.assign(col, this.columnsObj[col.key]);
            }else{
                this.columnsObj[col.key] = col;
            }
            if(!col.isHide) this.tableRealWidth += parseInt(col.width || 200);
            // {
            //     title: '',  //列头显示文字
            //     key: index,
            //     isHide: false, //是否隐藏
            //     dataIndex: '',  //列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
            //     // format(value, row, col){ return value; },  //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并
            //     // filter(){},  //表头的筛选项
            //     // sorter(){},  //排序函数，本地排序使用一个函数，需要服务端排序可设为 true
            //     colSpan: 0,  //表头列合并,设置为 0 时，不渲染
            //     width: '',  //列宽度
            //     className: '',  //列的 className
            //     fixed: false,  //列是否固定，可选 true(等效于 left) 'left' 'right'
            //     sortOrder: '',  //排序的受控属性，外界可用此控制列的排序，可设置为 'asc' 'desc' false
            //     // onCellClick(){}  //单元格点击回调
            // }
        });
        this.columns = this.columns.filter(col => !col.isHide);
        if(this.tableRealWidth !== oldWidth) this.resizeWidth();
        return this.columns;
    }
    components(){
        let opts = this.options;
        // 暂无数据
        if(!opts.data.length){
            this.addCom(Object.assign({
                el: '#nodata_' + opts.vid
            }), Lego.config.nodataOption || {}, opts.nodataOption);
        }
        if(opts.pagination){
            opts.pagination.el = '#pagination_' + opts.vid;
            if(this.oldTotalCount !== undefined && this.oldCurrent !== undefined && Lego.getView(opts.pagination.el)){
                if(this.oldTotalCount !== opts.pagination.totalCount || this.oldCurrent !== opts.pagination.current){
                    opts.pagination.context = this;
                    Lego.create(Pagination, opts.pagination);
                }
            }else{
                this.addCom(opts.pagination);
            }
            this.oldTotalCount = opts.pagination.totalCount || 0;
            this.oldCurrent = opts.pagination.current || 1;
        }
    }
    resizeWidth(){
        let tableWidth = $(this.options.el).parent().width();
        this.options.tableWidth = this.tableRealWidth > tableWidth ? this.tableRealWidth : 0;
    }
    render() {
        this.getColumns();
        let opts = this.options;
        const vDom = hx`
        <div class="lego-table clearfix lego-table-${opts.size} ${opts.bordered ? 'lego-table-bordered' : ''}
        ${opts.showHeader && opts.fixedHeader ? 'lego-table-fixed-header' : ''} ${opts.isNowrap ? 'lego-nr' : ''} lego-table-scroll-position-left">
            <loading id="lego-loading-${opts.vid}"></loading>
            ${opts.title ? hx`<div class="lego-table-title">${typeof opts.title == 'function' ? opts.title() : opts.title}</div>` : ''}
            <div class="lego-table-content" style="${!opts.title ? 'padding-bottom:0' : ''}">
                <div class="lego-table-scroll">
                ${opts.showHeader && opts.fixedHeader ? hx`
                <div class="lego-table-header">
                    <table class="" style="${opts.tableWidth ? ('width:' + opts.tableWidth + 'px') : 'width:1px'}">
                        ${this._renderColgroup()}
                        ${this._renderHeader()}
                    </table>
                </div>
                ` : ''}
                <div class="lego-table-body" style="bottom: ${opts.pagination ? '48px' : '0'}">
                    ${opts.isNodata ? hx`<nodata id="nodata_${opts.vid}"></nodata>` : hx`<div style="display:none;"></div>`}
                    <div class="${opts.showHeader && opts.fixedHeader ? 'scrollbar' : ''}">
                        <table class="${opts.className}" style="${opts.tableWidth ? ('width:' + opts.tableWidth + 'px') : 'width:1px'}">
                            ${this._renderColgroup()}
                            ${!(opts.showHeader && opts.fixedHeader) && opts.showHeader ? this._renderHeader() : ''}
                            ${opts.showBodyer ? this._renderBodyer() : ''}
                            ${opts.showFooter ? this._renderFooter() : ''}
                        </table>
                    </div>
                </div>
                <div class="lego-table-footer">${opts.pagination && !opts.isNodata ? hx`<pagination id="pagination_${opts.vid}"></pagination>` : ''}</div>
                ${opts.showSetting ? hx`<button type="button" class="btn btn-default noborder" title="表格设置"><i class="anticon anticon-ellipsis"></i></button>` : ''}
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
    _getRowKey(str = ''){
        this.rowKey = this.rowKey || 0;
        this.rowKey++;
        return str + this.rowKey;
    }
    _renderColgroup(){
        const vDom = hx`
        <colgroup>
            ${this.options.rowSelection ? hx`<col style="width: 30px;">` : ''}
            ${this.columns.map((col, index) => {
                let w = index !== this.columns.length - 1 || this.options.tableWidth ?
                    ('width:' + (typeof col.width == 'number' ? (col.width + 'px') : col.width.toString())) : '';
                return hx`<col style="${w}">`
            })}
        </colgroup>
        `;
        return vDom;
    }
    // 渲染选择框
    _renderSelection(row = {}, tagName = 'td', isHarf){
        const opts = this.options,
            theType = opts.rowSelection.type || 'checkbox',
            isCheckbox = theType == 'checkbox',
            that = this;
        const isChecked = row._selected || (tagName === 'th' && this.getSelectedStatus() === 1);
        function getHx(){
            return hx`
            <span>
                <label class="lego-${theType}-wrapper">
                    ${tagName !== 'th' || isCheckbox ? hx`<span class="lego-${theType} ${row.disabled ? ('lego-' + theType + '-disabled') : ''}
                    ${isChecked ? ('lego-' + theType + '-checked lego-' + theType + '-checked-1') : (isHarf ? ('lego-' + theType + '-indeterminate') : '')}">
                        <span class="lego-${theType}-inner"></span>
                        <input type="${theType}" ${row.disabled ? 'disabled' : ''} name="selectedrows" class="lego-${theType}-input" value="${isChecked ? 'on' : ''}">
                    </span>` : ''}
                </label>
            </span>
            `;
        }
        const vDom = hx`
        ${tagName == 'th' ? hx`<th class="lego-table-selection-column">${getHx()}</th>` : hx`<td class="lego-table-selection-column">${getHx()}</td>`}
        `;
        return vDom;
    }
    // 渲染表头
    _renderHeader(){
        const opts = this.options;
        const vDom = hx`
        <thead class="lego-table-thead">
            <tr>
            ${opts.rowSelection ? this._renderSelection({}, 'th', this.getSelectedStatus() === 2 ? true : false) : ''}
            ${this.columns.map(col => {
                return !col.isHide ? hx`<th class="${col.sorter ? 'lego-table-column-sort' : ''}" id="${col.key}"><span title="点击排序">${col.title}
                ${col.sorter ? this._renderSorter(col) : ''}</span>${this._renderFilter(col)}</th>` : '';
            })}
            </tr>
        </thead>
        `;
        return vDom;
    }
    // 渲染表主体
    _renderBodyer(){
        const opts = this.options;
        if(!opts.data) return;
        const vDom = hx`
        <tbody class="lego-table-tbody">
            ${opts.data.map((row, i) => {
                row.key = row.id || this._getRowKey('row_');
                return hx`<tr class="${row.className || opts.rowClassName}" id="${row.key}">
                ${opts.rowSelection ? this._renderSelection(row, 'td') : ''}
                ${this.columns.map(col => {
                    return !col.isHide ? hx`<td>${typeof col.format === 'function' ? col.format(row[col.dataIndex], row, col) : row[col.dataIndex]}</td>` : '';
                })}
                </tr>`;
            })}
        </tbody>
        `;
        return vDom;
    }
    // 渲染表尾
    _renderFooter(){
        const opts = this.options;
        const vDom = hx`
        <tfoot class="lego-table-tfoot"><tr><td>${opts.footer ? options.footer() : ''}</td></tr></tfoot>
        `;
        return vDom;
    }
    // 渲染排序
    _renderSorter(col = {}){
        const opts = this.options;
        const vDom = hx`
        <div class="lego-table-column-sorter">
            <span class="lego-table-column-sorter-up ${col.sortOrder == 'asc' ? 'on' : 'off'}" title="↑">
                <i class="anticon anticon-caret-up"></i>
            </span>
            <span class="lego-table-column-sorter-down ${col.sortOrder == 'desc' ? 'on' : 'off'}" title="↓">
                <i class="anticon anticon-caret-down"></i>
            </span>
        </div>
        `;
        return vDom;
    }
    _renderFilter(col = {}){
        return col.filter ? hx`<i class="anticon anticon-filter"></i>` : '';
    }
    clickSorter(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.closest('th').attr('id'),
            col = this.columnsObj[key],
            oldCol = this.columns.find(item => item.key == key);
        if(col){
            col.sortOrder = col.sortOrder || '';
            switch(col.sortOrder){
                case 'asc':
                    col.sortOrder = 'desc';
                    break;
                case 'desc':
                    col.sortOrder = '';
                    break;
                case '':
                    col.sortOrder = 'asc';
                    break;
            }
            this.refresh();
            if(oldCol){
                if(typeof oldCol.sorter === 'function') oldCol.sorter(this, col, event);
            }
        }
    }
    clickItem(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            rowKey = target.parent().attr('id'),
            colKey = this.$el.find('thead').find('th').eq(event.currentTarget.cellIndex).attr('id');
        const row = this.options.data.find(val => val.key == rowKey);
        const col = this.columns.find(val => val.key == colKey);
        if(row && col){
            if(this.options.onRowClick){
                if(typeof col.onRowClick == 'function') col.onRowClick(this, row, event);
            }
            if(col.onCellClick){
                if(typeof col.onCellClick == 'function') col.onCellClick(this, row, col, event);
            }
        }
    }
    clickFilter(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            colKey = target.closest('th').attr('id'),
            col = this.columns.find(val => val.key == colKey);
        if(col){
            if(typeof col.filter == 'function') col.filter(this, col, event);
        }
    }
    clickSetting(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            theId = 'setting-' + this.options.vid;
        if(typeof this.options.onSetting == 'function') this.options.onSetting(this, event);
    }
    // 选中一条
    selectOne(event) {
        const target = $(event.currentTarget),
            trEl = target.closest('tr'),
            id = trEl.attr('id'),
            options = this.options,
            that = this;
        if (options.rowSelection) {
            if(options.rowSelection.type == 'radio'){
                options.data.forEach(item => {
                    item._selected = item.key == id ? true : false;
                });
            }else{
                const row = options.data.find(function(value, index, arr) {
                    return value.key == id;
                });
                if(row) row._selected = !row._selected;
            }
            let hasSelectedArr = this.options.data.filter((value) => {
                    return value._selected === true;
                });
            if(typeof options.onSelect == 'function') options.onSelect(this, this.getSelectedStatus() ? Array.from(hasSelectedArr) : []);
            this.refresh();
        }
    }
    // 取是否全选
    getSelectedStatus(){
        if(Array.isArray(this.options.data)){
            let hasSelectedArr = this.options.data.filter((value) => {
                    return value._selected === true;
                });
            this.selectedAll = hasSelectedArr.length ? (hasSelectedArr.length == this.options.data.length ? 1 : (hasSelectedArr.length ? 2 : 0)) : 0;
            return this.selectedAll;
        }else{
            return [];
        }
    }
    // 选择全部
    selectAll(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        if (this.options.rowSelection) {
            const isChecked = target.is(':checked');
            const isSelected = isChecked ? 1 : 0;
            this.selectedAll = isSelected;
            this.options.data.map((row, index) => {
                row._selected = !!isSelected;
            });
            if(typeof this.options.onSelect == 'function') this.options.onSelect(this, isSelected ? Array.from(this.options.data) : []);
            this.refresh();
        }
    }
    // 获取选中行
    getSelected() {
        if (Array.isArray(this.options.data)) {
            return this.options.data.filter((row) => row._selected == true);
        }
        return [];
    }
}
Lego.components('tables', Tables);
export default Tables;
