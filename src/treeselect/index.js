/**
 * 选择树下拉框
 * ronghui Yu
 * 2017/1/10
 */
import './asset/index.scss';
import Selects from '../selects/index';
import Tree from '../tree/index';

class Treeselect extends Selects {
    constructor(opts = {}) {
        const options = {
            name: '',
            value: [], //指定当前选中的条目object/Array
            multiple: false, //支持多选
            eventName: 'click',
            scrollbar: {},
            disSelect: '', //禁止选择含有该属性节点, 可以是对象
            onlySelect: '', //只选择含有该属性节点, 可以是对象
            treeDataSource: null,   //树型动态数据源
            // showResultType: 'tag', //text, tag 多选时有效
            // allowClear: false,  //支持清除, 单选模式有效
            filterOption: true, //是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
            tags: false, //可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配
            onSelect() {}, //被选中时调用，参数为选中项的 value 值
            onDeselect() {}, //取消选中时调用，参数为选中项的 option value 值，仅在 multiple 或 tags 模式下生效
            onChange() {}, //选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
            onSearch() {}, //文本框值变化时回调
            placeholder: '', //选择框默认文字
            notFoundContent: '', //当下拉列表为空时显示的内容
            dropdownWidth: '100%', //下拉菜单和选择器同宽
            dropdownHeight: 'auto', //下拉菜单高度
            optionFilterProp: '', //搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索的子元素。比如在子元素需要高亮效果时，此值可以设为 value。
            combobox: false, //输入框自动提示模式
            size: '', //支持多选
            showSearch: false, //在选择框中显示搜索框
            disabled: false, //是否禁用
            defaultActiveFirstOption: false, //是否默认高亮第一个选项
            dropdownStyle: null, //下拉菜单的 style 属性
            dropdownClassName: '', //下拉菜单的 className 属性上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。
            splitString: '', //自动分词分隔符
            keyNames: ['id', 'name', 'type'],
            clickAndClose: opts.multiple ? false : true,
            components: [{
                el: '#tree-' + opts.vid,
                disSelect: opts.disSelect, //禁止选择含有该属性节点, 可以是对象
                onlySelect: opts.onlySelect, //只选择含有该属性节点, 可以是对象
                setting: Object.assign({}, opts.setting),
                keyNames: opts.keyNames || ['id', 'name', 'type'],
                value: opts.value,
                data: opts.data,
                dataSource: opts.treeDataSource,
                onChecked(self, result) {
                    const parentView = this.context;
                    if (result.key !== '0' && opts.setting.check) {
                        parentView.getValue();
                        if (result.length) {
                            parentView.options.value = [];
                            result.forEach((val) => {
                                parentView.options.value.push({
                                    key: val.key,
                                    value: val.value,
                                    type: val.type,
                                    selected: true
                                });
                            });
                        }else{
                            parentView.options.value = [];
                        }
                    }
                    parentView.options.onSelect(parentView, result);
                    parentView.options.onChange(parentView, result);
                    parentView.refresh();
                },
                onClick(self, result) {
                    const parentView = this.context;
                    parentView.options.value.forEach(item => item.selected = false);
                    parentView.options.value = [{
                        key: result.key,
                        value: result.value,
                        type: result.type,
                        selected: true
                    }];
                    parentView.options.onSelect(parentView, result);
                    parentView.options.onChange(parentView, result);
                    parentView.refresh();
                    // if(theView.options.clickAndClose) theView.close();
                },
                disabled: opts.disabled || false,
                className: opts.dropdownClassName
            }]
        };
        Object.assign(options, opts);
        if (options.value) {
            if (!Array.isArray(options.value)) options.value = [options.value];
            options.value.forEach(item => {
                item.selected = true;
            });
        }
        super(options);
        const eventName = 'click.select_' + opts.vid,
            callback = this.clickItemClose.bind(this);
        this.$('.select-tags-div').off(eventName).on(eventName, '.select-tag-close', callback);
    }
    render() {
        const options = this.options || {};
        let vDom = '';

        function getTags(data) {
            if (data.length) {
                return hx `
                <ul>${data.map(item => hx`
                    <li class="select-tag" id="${item.key}" title="${item.value}">
                        <div class="select-tag-content">${item.value}</div>
                        <span class="select-tag-close"></span>
                    </li>
                    `)}
                    <li class="select-search">
                        <input value="" class="select-search-input">
                    </li>
                </ul>
                `;
            }else{
                return '';
            }
        }
        const theValueArr = Array.isArray(options.value) ? (options.value.length ? options.value.map(item => item.value) : []) : [options.value.value];
        if(!options.multiple){
            vDom = hx`
            <div class="select dropdown treeselect">
                <div id="select-${options.vid}">
                    <input type="text" class="form-control select-input ${options.disabled ? 'disabled' : ''}" placeholder="${options.placeholder}" value="${theValueArr.join(',')}" name="${options.name}">
                    <div class="dropdown-menu ${options.direction ? ('drop' + options.direction) : ''}">
                        <div class="scrollbar">
                            <tree id="tree-${options.vid}"></tree>
                        </div>
                    </div>
                </div>

            </div>
            `;
        }else{
            vDom = hx`
            <div class="select dropdown treeselect multiple">
                <div id="select-${options.vid}">
                    <input type="text" class="form-control select-input ${theValueArr.length ? 'select-hasValue' : ''}" placeholder="${theValueArr.length ? '' : options.placeholder}" value="${theValueArr.join(',')}" name="${options.name}">
                    <div class="select-tags-div clearfix ${theValueArr.length ? 'select-tags-div-border' : ''}">
                        ${getTags(options.value)}
                    </div>
                    <div class="dropdown-menu ${options.direction ? ('drop' + options.direction) : ''}">
                        <div class="scrollbar">
                            <tree id="tree-${options.vid}"></tree>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        return vDom;
    }
    renderAfter(){
        const options = this.options,
            that = this;
        if(!options.disabled){
            const trigger = this.$('#select-' + options.vid);
            const treeEl = this.$('#tree-' + options.vid);
            const _eventName = 'click.dropdown_' + options.vid;
            function handler(event){
                $('body, .modal-body').trigger('click');
                event.stopPropagation();
                const directionResp = Lego.UI.Util.getDirection(trigger, treeEl);
                options.direction = directionResp._y || 'bottom';
                that.show();
                if(options.eventName == 'hover'){
                    trigger.mouseleave(function(){
                        that.close();
                    });
                }
            }
            if(options.eventName == 'click'){
                $('body, .modal-body').off(_eventName).on(_eventName, function(){
                    that.close();
                });
                trigger.off(_eventName).on(_eventName, handler);
            }else{
                trigger[options.eventName](handler);
            }
        }
        this.$('.dropdown-menu').css({
            width: options.dropdownWidth || '100%',
            height: options.dropdownHeight || 'auto'
        });
    }
    show(event){
        this.$('#select-' + this.options.vid).addClass('dropdown open');
    }
    close(event){
        this.$('#select-' + this.options.vid).removeClass('dropdown open');
    }
    clickItemClose(event){
        event.stopPropagation();
        const target = $(event.currentTarget).parent(),
            key = target.attr('id'),
            value = target.attr('title'),
            treeView = $.fn.zTree.getZTreeObj('tree-' + this.options.vid);
            // treeView = Lego.getView(this.$('#tree-' + this.options.vid))
        this.options.value.forEach(item => {
            if(item.key === key) item.selected = false;
        });
        this.getValue();
        this.refresh();
        // if(treeView) treeView.clearChecked(this.options.keyNames[0], key);
        if(treeView){
            const treeNode = treeView.getNodeByParam(this.options.keyNames[0], key, null);
            treeView.checkNode(treeNode, !treeNode.checked, null, true);
        }
        if(typeof this.options.onDeselect === 'function') this.options.onDeselect(this, {
            key: key,
            value: value
        });
    }
    getValue(){
        this.options.value = this.options.value.filter(item => {
            return item.selected === true && item.key !== '0';
        });
        return this.options.value;
    }
}
Lego.components('treeselect', Treeselect);
export default Treeselect;