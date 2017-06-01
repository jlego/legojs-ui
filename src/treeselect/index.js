/**
 * 下拉选择树
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
            data: [],
            multiple: false, //支持多选
            eventName: 'click',
            scrollbar: {},
            fieldName: 'key',  //表单域名称
            disSelect: '', //禁止选择含有该属性节点, 可以是对象
            onlySelect: '', //只选择含有该属性节点, 可以是对象
            treeDataSource: null,   //树型动态数据源
            tags: false, //可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配
            placeholder: '', //选择框默认文字
            searchPlaceholder: '搜索',
            inputAble: false, //可否输入
            notFoundContent: '', //当下拉列表为空时显示的内容
            dropdownWidth: '100%', //下拉菜单和选择器同宽
            dropdownHeight: 'auto', //下拉菜单高度
            combobox: false, //输入框自动提示模式
            treeSetting: {},
            treeChkStyle: '',  //checkbox或radio
            size: '', //支持多选
            showSearch: false, //在选择框中显示搜索框
            disabled: false, //是否禁用
            splitString: '', //自动分词分隔符
            // keyNames: ['id', 'name', 'type'],
            clickAndClose: opts.multiple ? false : true,
            onDeselect() {}, //取消选中时调用，参数为选中项的 option value 值，仅在 multiple 或 tags 模式下生效
            onChange() {}, //选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
            onSearch() {}, //文本框值变化时回调
        };
        Object.assign(options, opts);
        if (options.value) {
            if (!Array.isArray(options.value)) options.value = [options.value];
            options.value.forEach(item => {
                item.selected = true;
            });
        }
        super(options);
    }
    components(){
        let opts = this.options,
            that = this,
            treeSetting = {
                simpleData: {
                    enable: true
                }
            };
        if(opts.multiple){
            treeSetting = $.extend(true, {
                check: {
                    enable: true,
                    chkboxType: { "Y": "ps", "N": "ps" }
                }
            }, opts.treeSetting);
            if(opts.treeChkStyle) treeSetting.check.chkStyle = opts.treeChkStyle;
        }
        if(opts.data.length){
            this.addCom({
                el: '#tree_' + opts.vid,
                disSelect: opts.disSelect, //禁止选择含有该属性节点, 可以是对象
                onlySelect: opts.onlySelect, //只选择含有该属性节点, 可以是对象
                setting: treeSetting,
                value: opts.value || [],
                data: opts.data || [],
                onChecked(self, result, treeNode) {
                    const _that = this.context;
                    if (treeSetting.check) {
                        if (result.length) {
                            that.options.value = [];
                            result.forEach((val, index) => {
                                if(val.key !== '0'){
                                    val.selected = true;
                                    that.options.value.push(Object.assign({}, val));
                                }
                            });
                        }else{
                            that.options.value = [];
                        }
                    }
                    that.options.onChange(that, result);
                    that.refresh();
                },
                onClick(self, result) {
                    const that = this.context;
                    that.options.value.forEach(item => item.selected = false);
                    that.options.value = [Object.assign({
                        key: result.key,
                        value: result.value,
                        type: result.type,
                        selected: true
                    }, result)];
                    that.options.onChange(that, result);
                    if(that.options.clickAndClose) that.close();
                },
                disabled: opts.disabled || false
            });
            if(opts.showSearch){
                function searchFun(self, result){
                    let treeView = Lego.getView("#tree_" + opts.vid);
                    if(treeView) treeView.search(result.keyword);
                }
                this.addCom({
                    el: '#search_' + opts.vid,
                    placeholder: opts.searchPlaceholder,
                    size: 'sm',
                    onKeyup(self, result){
                        searchFun(self, result);
                    },
                    onSearch(self, result) {
                        searchFun(self, result);
                    }
                });
            }
        }
    }
    render() {
        const opts = this.options;
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
        let theValueArr, realValueArr;
        if(Array.isArray(opts.value)){
            theValueArr = opts.value.length ? opts.value.map(item => item.value) : [];
            realValueArr = opts.value.length ? opts.value.map(item => item[opts.fieldName]) : [];
        }else{
            theValueArr = realValueArr = [typeof opts.value == 'object' ? opts.value.value : opts.value];
        }
        if(!opts.multiple){
            vDom = hx`
            <div class="select dropdown treeselect">
                <div id="select-${opts.vid}">
                    <input type="text" class="form-control select-input ${opts.disabled ? 'disabled' : ''}" placeholder="${opts.placeholder}" value="${theValueArr.join(',')}" name="hidden_${opts.name}">
                    <input type="hidden" name="${opts.name}" value="${realValueArr.join(',')}">
                    <div class="dropdown-menu" style="width:100%;">
                        ${opts.showSearch ? hx`<div class="lego-search-container"><search id="search_${opts.vid}"></search></div>` : ''}
                        <div class="scrollbar">
                            <tree id="tree_${opts.vid}"></tree>
                        </div>
                    </div>
                </div>

            </div>
            `;
        }else{
            vDom = hx`
            <div class="select dropdown treeselect multiple">
                <div id="select-${opts.vid}">
                    <input type="text" class="form-control select-input ${theValueArr.length ? 'select-hasValue' : ''}" placeholder="${theValueArr.length ? '' : opts.placeholder}" value="${theValueArr.join(',')}" name="hidden_${opts.name}">
                    <input type="hidden" name="${opts.name}" value="${realValueArr.join(',')}">
                    <div class="select-tags-div clearfix ${theValueArr.length ? 'select-tags-div-border' : ''}">
                        ${getTags(opts.value)}
                    </div>
                    <div class="dropdown-menu" style="width:100%;">
                        ${opts.showSearch ? hx`<div class="lego-search-container"><search id="search_${opts.vid}"></search></div>` : ''}
                        <div class="scrollbar">
                            <tree id="tree_${opts.vid}"></tree>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        return vDom;
    }
    renderAfter(){
        let opts = this.options,
            trigger = this.$('#select-' + opts.vid),
            tagsDivEl = this.$('.select-tags-div'),
            treeEl = this.$('#tree_' + opts.vid),
            _eventName = 'click.dropdown_' + opts.vid,
            that = this;
        if(!opts.inputAble) this.$('.select-input').attr('readonly', 'readonly');
        if(!opts.disabled){
            function handler(event){
                that.$('.dropdown-menu').slideToggle('fast');
            }
            if(opts.eventName == 'click'){
                $('body, .modal-body').off(_eventName).on(_eventName, function(event){
                    if(event.originalEvent){
                        let index_a = event.originalEvent.path.indexOf(event.target),
                            index_b = event.originalEvent.path.indexOf(trigger[0]);
                        if(index_a <= index_b){
                        }else{
                            that.close();
                        }
                    }
                });
                trigger.off(_eventName).on(_eventName, handler);
            }else{
                trigger.mouseenter(handler).mouseleave(function(){
                    that.close();
                });
            }
            this.$('.select-tag-close').off(_eventName).on(_eventName, this.clickItemClose.bind(this));
            this.$('.dropdown-menu').off(_eventName).on(_eventName, function(event){
                event.stopPropagation();
            });
            if(opts.dropdownHeight){
                this.$('.dropdown-menu > .scrollbar').css({
                    maxHeight: opts.dropdownHeight,
                    overflow: 'auto'
                });
            }
        }
    }
    show(event){
        this.$('.dropdown-menu').slideDown('fast');
    }
    close(event){
        this.$('.dropdown-menu').slideUp('fast');
    }
    clickItemClose(event){
        event.stopPropagation();
        let target = $(event.currentTarget).parent(),
            key = target.attr('id'),
            value = target.attr('title'),
            treeView = $.fn.zTree.getZTreeObj('tree_' + this.options.vid);
        this.options.value.forEach(item => {
            if(item.key === key) item.selected = false;
        });
        this.getValue();
        this.refresh();
        if(treeView){
            let treeNode = treeView.getNodeByParam('id', key, null);
            if(treeNode) treeView.checkNode(treeNode, false, null, true);
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
