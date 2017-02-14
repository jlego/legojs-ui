import './asset/index.scss';
import Dropdown from '../dropdown/index';
/**
 * item {key: '', value: '', selected: false}
 */

class Selects extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            name: '',
            value: [],   //指定当前选中的条目object/Array
            multiple: false,  //支持多选
            eventName: 'click',
            filterOption: true,  //是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
            tags: false,  //可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配
            onDeselect(){},  //取消选中时调用，参数为选中项的 option value 值，仅在 multiple 或 tags 模式下生效
            onChange(){},  //选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
            onBlur(){},
            onSearch(){},   //文本框值变化时回调
            placeholder: '',  //选择框默认文字
            notFoundContent: '',  //当下拉列表为空时显示的内容
            dropdownWidth: '100%', //下拉菜单和选择器同宽
            dropdownHeight: 'auto', //下拉菜单高度
            optionFilterProp: '',  //搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索的子元素。比如在子元素需要高亮效果时，此值可以设为 value。
            combobox: false,  //输入框自动提示模式
            size: '',  //支持多选
            showSearch: false,  //在选择框中显示搜索框
            disabled: false,  //是否禁用
            defaultActiveFirstOption: false,  //是否默认高亮第一个选项
            dropdownStyle: null,  //下拉菜单的 style 属性
            dropdownClassName: '',  //下拉菜单的 className 属性上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。
            splitString: '',    //自动分词分隔符
            dataSource: null,
            components(opts = {}, self){
                return [{
                    el: '#dropdown-' + opts.vid,
                    container: '#select-' + opts.vid,
                    eventName: opts.eventName || 'click',
                    disabled: opts.disabled || false,
                    style: Object.assign({
                        width: opts.dropdownWidth || '100%'
                    }, opts.dropdownStyle || {}),
                    className: opts.dropdownClassName,
                    clickAndClose: opts.multiple ? false : true,
                    data: opts.data || [],
                    dataSource: opts.dataSource,
                    onChange(self, model){
                        const pView = this.context;
                        pView.$('.select-input').focus();
                        if(model.key !== '0' && opts.multiple){
                            pView.options.data.forEach(item => {
                                if(item.key == '0') item.selected = false;
                            });
                            pView.getValue();
                            if(!pView.options.value.includes(model)){
                                model.selected = true;
                                pView.options.value.push(model);
                            }
                        }else{
                            pView.options.data.forEach(item => item.selected = false);
                            pView.options.value = [model];
                            pView.refresh();
                        }
                        pView.options.onChange(pView, model);
                    }
                }];
            }
        };
        Object.assign(options, opts);
        super(options);
        this.oldValue = '';
        let that = this;
        this.$('.select-input').blur(function(event){
            if(typeof options.onBlur == 'function') options.onBlur(that, $(this).val(), event);
        });
        this.$('.select-tags-div').on('click', '.select-tag-close', this.clickItemClose.bind(this));
    }
    render() {
        const options = this.options || {};
        let vDom = '';
        function getTags(data){
            if(data.length){
                return hx`
                <ul>${data.map(item => hx`
                    <li class="select-tag" id="${item.key}" title="${item.value}">
                        <div class="select-tag-content">${item.value}</div>
                        <span class="select-tag-close"></span>
                    </li>
                    `)}
                </ul>
                `;
            }else{
                return '';
            }
        }
        const theValueArr = Array.isArray(options.value) ? (options.value.length ? options.value.map(item => item.value) : []) : [options.value.value];
        if(!options.multiple){
            vDom = hx`
            <div class="select dropdown">
                <div id="select-${options.vid}">
                    <input type="text" class="form-control select-input ${options.disabled ? 'disabled' : ''}" placeholder="${options.placeholder}" value="${theValueArr.join(',')}" name="${options.name}">
                    <dropdown id="dropdown-${options.vid}"></dropdown>
                </div>
            </div>
            `;
        }else{
            vDom = hx`
            <div class="select dropdown multiple">
                <div id="select-${options.vid}">
                    <input type="text" class="form-control select-input ${theValueArr.length ? 'select-hasValue' : ''}" placeholder="${theValueArr.length ? '' : options.placeholder}" value="${theValueArr.join(',')}" name="${options.name}">
                    <div class="select-tags-div clearfix ${theValueArr.length ? 'select-tags-div-border' : ''}">
                        ${getTags(options.value)}
                    </div>
                    <dropdown id="dropdown-${options.vid}"></dropdown>
                </div>
            </div>
            `;
        }
        return vDom;
    }
    renderAfter(){
        if(this.options.value.length && this.options.multiple){
            this.options.value.forEach(item => {
                if(item){
                    const model = this.options.data.find(model => model.key === item.key);
                    if(model) model.selected = true;
                }
            });
        }
    }
    clickItemClose(event){
        event.stopPropagation();
        const target = $(event.target).parent(),
            key = target.attr('id'),
            value = target.attr('title');
        this.options.data.forEach(item => {
            if(item.key == key) item.selected = false;
        });
        this.getValue();
        this.refresh();
        Lego.getView('#dropdown-' + this.options.vid).refresh();
        if(typeof this.options.onDeselect === 'function') this.options.onDeselect(this, {
            key: key,
            value: value
        });
    }
    setValue(value) {
        const data = this.options.data;
        if(value.length){
            value.forEach(item => {
                const model = data.find(model => model.key === item.key);
                if(model){
                    Object.assign(model, item);
                }else{
                    data.push(item);
                }
            });
        }
    }
    getValue(){
        this.options.value = this.options.data.filter(item => {
            return item.selected == true && item.key !== '0';
        });
        return this.options.value;
    }
}
Lego.components('selects', Selects);
export default Selects;
