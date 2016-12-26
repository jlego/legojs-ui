import './asset/index.scss';
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
                'click thead .lego-checkbox > input': 'selectAll'
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
            showHeader: false, //是否显示表头
            showBodyer: true, //是否显示表体
            showFooter: false, //是否显示表尾
            footer(){}, //表格尾部
            title(){}, //表格标题
            scroll: {} //横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }}
        };
        Object.assign(options, opts);
        // options.columns.map((col) => {
        //     col = Object.assign({
        //         title: '',  //列头显示文字
        //         isHide: false, //是否隐藏
        //         dataIndex: '',  //列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
        //         render(){},  //生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并
        //         filters: [],  //表头的筛选菜单项
        //         onFilter(){},  //本地模式下，确定筛选的运行函数
        //         filterMultiple: false,  //是否多选
        //         filterDropdown: null,  //可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互
        //         filterDropdownVisible: false,  //用于控制自定义筛选菜单是否可见
        //         onFilterDropdownVisibleChange(){},  //自定义筛选菜单可见变化时调用
        //         filteredValue: [],  //筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组
        //         sorter(){},  //排序函数，本地排序使用一个函数，需要服务端排序可设为 true
        //         colSpan: 0,  //表头列合并,设置为 0 时，不渲染
        //         width: '',  //列宽度
        //         className: '',  //列的 className
        //         fixed: false,  //列是否固定，可选 true(等效于 left) 'left' 'right'
        //         sortOrder: '',  //排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false
        //         onCellClick(){}  //单元格点击回调
        //     }, col);
        // });
        super(options);
        this.selectedAll = false;
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="lego-table lego-table-${options.size} ${options.bordered ? 'lego-table-bordered' : ''} lego-table-scroll-position-left ${options.className}">
            ${options.showHeader ? hx`<div class="lego-table-title">${options.title()}</div>` : ''}
            <div class="lego-table-content">
                <div class="">
                    <span>
                    <div class="lego-table-body">
                        <table class="">
                            ${this._renderHeader()}
                            ${this._renderBodyer()}
                            ${this._renderFooter()}
                        </table>
                    </div>
                    </span>
                    ${options.showFooter ? hx`<div class="lego-table-footer">${options.footer()}</div>` : ''}
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
    _renderSelection(row = {}, tagName = 'td'){
        const options = this.options,
            theType = options.type || 'checkbox',
            that = this;
        function getHx(){
            return hx`
            <span>
                <label class="lego-${theType}-wrapper">
                    <span class="lego-checkbox ${(row.selected || (tagName === 'th' && that.selectedAll)) ? 'lego-checkbox-checked lego-checkbox-checked-1' : ''}">
                        <span class="lego-checkbox-inner"></span>
                        <input type="${theType}" class="lego-checkbox-input" value="on">
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
    _renderHeader(){
        const options = this.options;
        const vDom = hx`
        <thead class="lego-table-thead">
            <tr>
            ${options.rowSelection ? this._renderSelection({}, 'th') : ''}
            ${options.columns.map(col => hx`
                <th><span>${col.title}</span></th>
            `)}
            </tr>
        </thead>
        `;
        return vDom;
    }
    _renderBodyer(){
        const options = this.options;
        const vDom = hx`
        <tbody class="lego-table-tbody">
            ${options.data.map((row, i) => {
                row.key = Lego.randomKey(16);
                return hx`<tr class="${options.rowClassName}" id="${row.key}">
                ${options.rowSelection ? this._renderSelection(row, 'td') : ''}
                ${options.columns.map(col => hx`
                    <td>${typeof col.render === 'function' ? col.render(row[col.dataIndex], row, row.key) : row[col.dataIndex]}</td>
                `)}
                </tr>`;
            })}
        </tbody>
        `;
        return vDom;
    }
    _renderFooter(){
        const options = this.options;
        const vDom = hx`
        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>
        `;
        return vDom;
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
            const hasSelected = this.options.data.find(function(value, index, arr) {
                    return value.selected;
                });
            this.selectedAll = !!hasSelected;
            this.refresh();
        }
    }
    selectAll(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        if (this.options.rowSelection) {
            const isChecked = target.is(':checked');
            const isSelected = isChecked ? true : false;
            this.selectedAll = isSelected;
            this.options.data.map((row, index) => {
                row.selected = isSelected;
            });
            this.refresh();
        }
    }
    // 获取
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
