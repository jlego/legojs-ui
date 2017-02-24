/**
 * 输入框
 * ronghui Yu
 * 2017/1/6
 */
// import './asset/index.scss';

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
            addonBefore: '',    //带标签的 input，设置前置标签
            addonAfter: '',    //带标签的 input，设置后置标签
            prefix: '',      //带有前缀图标的 input
            suffix: '',      // 带有后缀图标的 input
            size: '',    //设置按钮大小，可选值为 sm lg 或者不设
            onChange(){},
            onEnter(){}   //   按下回车的回调
        };
        Object.assign(options, opts);
        super(options);
        if(options.addonBefore || options.addonAfter){
            const onEnterFun = this.onEnter.bind(this);
            const onChangeFun = this.onChange.bind(this);
            this.$('input').keydown(onEnterFun);
            this.$('input').change(onChangeFun);
        }

    }
    render() {
        const options = this.options || {};
        let vDom = hx`<div></div>`,
            value = options.value ? Lego.UI.Util.unFilterTag(options.value.toString()) : '';
        if(options.addonBefore || options.addonAfter){
            vDom = hx`
            <div class="input-group ${options.size ? ('input-group-' + options.size) : ''}">
              ${options.addonBefore ? hx`<span class="input-group-addon">${options.prefix}</span>` : ''}
              <input type="${options.type}" class="form-control" placeholder="${options.placeholder}"
              value="${val(value)}" name="${options.name}" ${options.disabled ? 'disabled' : ''} ${options.readonly ? 'readonly' : ''}/>
              ${options.addonAfter ? hx`<span class="input-group-addon">${options.suffix}</span>` : ''}
            </div>
            `;
        }else{
            if(options.type == 'textarea'){
                vDom = hx`
                  <textarea type="textarea" class="form-control ${options.size ? ('form-control-' + options.size) : ''}" placeholder="${options.placeholder}" name="${options.name}"
                  ${options.disabled ? 'disabled' : ''} ${options.readonly ? 'readonly' : ''}>${val(value)}</textarea>
                `;
            }else{
                vDom = hx`
                  <input type="${options.type}" class="form-control ${options.size ? ('form-control-' + options.size) : ''}" placeholder="${options.placeholder}"
                  value="${val(options.value)}" name="${options.name}" ${options.disabled ? 'disabled' : ''} ${options.readonly ? 'readonly' : ''}/>
                `;
            }
        }
        return vDom;
    }
    // 过滤特殊字符
    filterStr(str){
        return str;
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
