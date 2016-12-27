import './asset/index.scss';
import Pagination from '../pagination/index';
/**
 * rowSelection
 * type = '' 多选/单选，checkbox or radio
 * selectedRowKeys = []  指定选中项的 key 数组，需要和 onChange 进行配合
 * onChange(){}  选中项发生变化的时的回调
 * getCheckboxProps(){}  选择框的默认属性配置
 * onSelect(){}  用户手动选择/取消选择某列的回调
 * onSelectAll(){}  用户手动选择/取消选择所有列的回调
 */
class Table extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click tbody .lego-checkbox': 'selectOne',
                'click thead .lego-checkbox > input': 'selectAll',
                'click .lego-table-column-sorter': 'clickSorter',
                'click .anticon-filter': 'clickFilter',
                'click .lego-table-tbody td': 'clickTd'
            },
            className: '',
            rowSelection: null, //列表项是否可选择
            pagination: null,   //分页器，配置项参考 pagination，设为 false 时不展示和进行分页
            size: 'default', //正常或迷你类型，default or small middle
            dataSource: {},  //数据源
            columns: [],    //表格列的配置描述，具体项见下表
            rowKey: '',    //表格行 key 的取值，可以是字符串或一个函数
            rowClassName: '',    //表格行的类名
            expandedRowRender(){},   //额外的展开行
            defaultExpandedRowKeys: [], //默认展开的行
            expandedRowKeys: [], //展开的行，控制属性
            defaultExpandAllRows: false, //初始时，是否展开所有行
            onExpandedRowsChange(){}, //展开的行变化时触发
            onExpand(){}, //点击展开图标时触发
            onChange(){}, //分页、排序、筛选变化时触发
            loading: false, //页面是否加载中
            locale: { //默认文案设置，目前包括排序、过滤、空数据文案
                filterConfirm: '确定',
                filterReset: '重置',
                emptyText: '暂无数据'
            },
            indentSize: 0, //展示树形数据时，每层缩进的宽度，以 px 为单位
            onRowClick(){}, //处理行点击事件
            bordered: false, //是否展示外边框和列边框
            showHeader: true, //是否显示表头
            showBodyer: true, //是否显示表体
            showFooter: false, //是否显示表尾
            footer(){}, //表格尾部
            // title(){}, //表格标题
            scroll: {}, //横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }}
            // components: []
        };
        Object.assign(options, opts);
        options.columns.map((col) => {
            col = Object.assign({
                title: '',  //列头显示文字
                key: Lego.randomKey(32),
                isHide: false, //是否隐藏
                dataIndex: '',  //列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
                // render(value, row, col){ return value; },  //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并
                // filter(){},  //表头的筛选项
                // sorter(){},  //排序函数，本地排序使用一个函数，需要服务端排序可设为 true
                colSpan: 0,  //表头列合并,设置为 0 时，不渲染
                width: '',  //列宽度
                className: '',  //列的 className
                fixed: false,  //列是否固定，可选 true(等效于 left) 'left' 'right'
                sortOrder: '',  //排序的受控属性，外界可用此控制列的排序，可设置为 'asc' 'desc' false
                // onCellClick(){}  //单元格点击回调
            }, col);
        });
        super(options);
        this.selectedAll = 0;
        // 分页
        if(options.pagination){
            const theOpt = {...options.pagination, el: '#paginationId'};
            Lego.create(Pagination, theOpt);
        }
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="clearfix">
            <div class="lego-spin-nested-loading">
                <div class="lego-spin-container">
                    <div class="lego-table lego-table-${options.size} ${options.bordered ? 'lego-table-bordered' : ''} lego-table-scroll-position-left">
                        ${options.title ? hx`<div class="lego-table-title">${options.title()}</div>` : ''}
                        <div class="lego-table-content">
                            <div class="${options.showHeader ? 'lego-table-scroll' : ''}">
                                <span>
                                ${options.showHeader ? hx`
                                <div class="lego-table-header" style="margin-bottom: -17px; padding-bottom: 0px;">
                                    <table class="">
                                        ${this._renderHeader()}
                                    </table>
                                </div>
                                `
                                 : ''}
                                <div class="lego-table-body">
                                    <table class="${options.className}">
                                        ${!options.showHeader ? this._renderHeader() : ''}
                                        ${this._renderBodyer()}
                                        ${this._renderFooter()}
                                    </table>
                                </div>
                                </span>
                                ${options.showFooter ? hx`<div class="lego-table-footer">${options.footer()}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${options.pagination ? hx`<pagination id="paginationId"></pagination>` : ''}
        </div>
        `;
        return vDom;
    }
    // 渲染选择框
    _renderSelection(row = {}, tagName = 'td'){
        const options = this.options,
            theType = options.type || 'checkbox',
            that = this;
        const isChecked = row.selected || (tagName === 'th' && this.selectedAll === 1),
            isHarf = tagName === 'th' && that.selectedAll === 2 ? true : false;
        function getHx(){
            return hx`
            <span>
                <label class="lego-${theType}-wrapper">
                    <span class="lego-checkbox ${row.disabled ? 'lego-checkbox-disabled' : ''} ${isChecked ? 'lego-checkbox-checked lego-checkbox-checked-1' : (isHarf ? 'lego-checkbox-indeterminate' : '')}">
                        <span class="lego-checkbox-inner"></span>
                        <input type="${theType}" ${row.disabled ? 'disabled' : ''} class="lego-checkbox-input" value="${isChecked ? 'on' : ''}">
                    </span>
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
        const options = this.options;
        const vDom = hx`
        <thead class="lego-table-thead">
            <tr>
            ${options.rowSelection ? this._renderSelection({}, 'th') : ''}
            ${options.columns.map(col => {
                return !col.isHide ? hx`<th class="${col.sortOrder ? 'lego-table-column-sort' : ''}" id="${col.key}"><span>${col.title}
                ${col.sorter ? this._renderSorter(col) : ''}${this._renderFilter(col)}</span></th>` : '';
            })}
            </tr>
        </thead>
        `;
        return vDom;
    }
    // 渲染表主体
    _renderBodyer(){
        const options = this.options;
        const vDom = hx`
        <tbody class="lego-table-tbody">
            ${options.data.map((row, i) => {
                row.key = Lego.randomKey(32);
                return hx`<tr class="${options.rowClassName}" id="${row.key}">
                ${options.rowSelection ? this._renderSelection(row, 'td') : ''}
                ${options.columns.map(col => {
                    return !col.isHide ? hx`<td>${typeof col.render === 'function' ? col.render(row[col.dataIndex], row, col) : row[col.dataIndex]}</td>` : '';
                })}
                </tr>`;
            })}
        </tbody>
        `;
        return vDom;
    }
    // 渲染表尾
    _renderFooter(){
        const options = this.options;
        const vDom = hx`
        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>
        `;
        return vDom;
    }
    // 渲染排序
    _renderSorter(col = {}){
        const options = this.options;
        const vDom = hx`
        <div class="lego-table-column-sorter">
            <span class="lego-table-column-sorter-up ${col.sortOrder === 'asc' ? 'on' : 'off'}" title="↑">
                <i class="anticon anticon-caret-up"></i>
            </span>
            <span class="lego-table-column-sorter-down ${col.sortOrder === 'desc' ? 'on' : 'off'}" title="↓">
                <i class="anticon anticon-caret-down"></i>
            </span>
        </div>
        `;
        return vDom;
    }
    _renderFilter(col = {}){
        return col.filter ? hx`<i title="Filter Menu" class="anticon anticon-filter lego-dropdown-trigger"></i>` : '';
    }
    clickSorter(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.closest('th').attr('id'),
            col = this.options.columns.find((val) => val.key === key);
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
            if(typeof col.sorter === 'function') col.sorter(col);
        }
    }
    clickTd(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            rowKey = target.parent().attr('id'),
            colKey = target.closest('tbody').prev('thead').find('th').eq(event.currentTarget.cellIndex).attr('id');
        const row = this.options.data.find(val => val.key === rowKey);
        const col = this.options.columns.find(val => val.key === colKey);
        if(row && col){
            if(typeof col.onCellClick === 'function') col.onCellClick(row, col);
        }
    }
    clickFilter(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            colKey = target.closest('th').attr('id'),
            col = this.options.columns.find(val => val.key == colKey);
        if(col){
            if(typeof col.filter === 'function') col.filter(col);
        }
    }
    // 选中一条
    selectOne(event) {
        event.stopPropagation();
        const target = $(event.currentTarget),
            trEl = target.closest('tr'),
            id = trEl.attr('id'),
            that = this;
        if (this.options.rowSelection) {
            const row = this.options.data.find(function(value, index, arr) {
                    return value.key === id;
                });
            if(row) row.selected = !row.selected;
            const hasSelectedArr = this.options.data.filter((value) => {
                return value.selected === true;
            });
            this.selectedAll = hasSelectedArr.length == this.options.data.length ? 1 : (hasSelectedArr.length ? 2 : 0);
            this.refresh();
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
                row.selected = !!isSelected;
            });
            this.refresh();
        }
    }
    // 获取先中行
    getSelected() {
        let rows = [];
        if (Array.isArray(this.options.data)) {
            this.options.data.map((row) => {
                if(row.selected) rows.push(row);
            });
        }
        return rows;
    }
}
export default Table;
