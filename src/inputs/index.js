/**
 * 输入框
 * ronghui Yu
 * 2017/1/6
 */
import './asset/index.scss';

class Inputs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'keyup': 'onEnter',
                'change': 'onChange'
            },
            type: 'text',   //声明 input 类型，同原生 input 标签的 type 属性。另外提供 type="textarea"
            value: '', //输入框内容
            placeholder: '',
            name: '',
            filterReg: '',  //过滤正则
            disabled: false,  //是否禁用状态，默认为 false
            readonly: false,
            preAddon: '',    //带标签的 input，设置前置标签
            nextAddon: '',    //带标签的 input，设置后置标签
            size: '',    //设置按钮大小，可选值为 sm lg 或者不设
            onChange(){},
            onEnter(){}   //   按下回车的回调
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options;
        let vDom = hx`<div></div>`,
            value = opts.value ? Lego.UI.Util.unFilterTag(opts.value.toString()) : '';
        if(opts.preAddon || opts.nextAddon){
            vDom = hx`
            <div class="input-group ${opts.size ? ('input-group-' + opts.size) : ''}">
              ${opts.preAddon ? hx`<span class="input-group-addon">${opts.preAddon}</span>` : ''}
              <input type="${opts.type}" class="form-control" placeholder="${opts.placeholder}"
              value="${value !== 0 ? val(value) : value}" name="${opts.name}" ${opts.disabled ? 'disabled' : ''}/>
              ${opts.nextAddon ? hx`<span class="input-group-addon">${opts.nextAddon}</span>` : ''}
            </div>
            `;
        }else{
            if(opts.type == 'textarea'){
                vDom = hx`
                  <textarea type="textarea" class="form-control ${opts.size ? ('form-control-' + opts.size) : ''}" placeholder="${opts.placeholder}" name="${opts.name}"
                  ${opts.disabled ? 'disabled' : ''}>${val(value)}</textarea>
                `;
            }else{
                vDom = hx`
                  <input type="${opts.type}" class="form-control ${opts.size ? ('form-control-' + opts.size) : ''}" placeholder="${opts.placeholder}"
                  value="${val(opts.value)}" name="${opts.name}" ${opts.disabled ? 'disabled' : ''}/>
                `;
            }
        }
        return vDom;
    }
    renderAfter(){
        let opts = this.options,
            inputEl = opts.preAddon || opts.nextAddon ? this.$('input') : this.$el;
        if(opts.preAddon || opts.nextAddon){
            const onEnterFun = this.onEnter.bind(this);
            const onChangeFun = this.onChange.bind(this);
            inputEl.keyup(onEnterFun);
            inputEl.change(onChangeFun);
        }
        if(opts.readonly) inputEl.attr('readonly', 'readonly');
    }
    // 过滤特殊字符
    filterStr(str){
        let opts = this.options,
            reg = new RegExp(opts.filterReg);
        return opts.filterReg ? str.replace(reg, '') : str;
    }
    onEnter(event) {
        const target = $(event.currentTarget),
            value = this.filterStr(target.val());
        this.options.value = value;
        if(this.options.type == 'textarea') target.val(value);
        if (event.keyCode == 13) {
            if(typeof this.options.onEnter === 'function') this.options.onEnter(this, value, event);
        }
    }
    onChange(event) {
        const target = $(event.currentTarget),
            value = this.filterStr(target.val());
        this.options.value = value;
        this.refresh();
        if(typeof this.options.onChange === 'function') this.options.onChange(this, value, event);
    }
}
Lego.components('inputs', Inputs);
export default Inputs;
