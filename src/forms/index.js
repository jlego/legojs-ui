/**
 * 表单
 * ronghui Yu
 * 2017/1/9
 */
import validate from 'jquery-validation-cjs';
$.fn.validate = validate;
import './asset/index.scss';
// 手机号码验证
$.validator.addMethod("mobile", function(value, element) {
    let length = value.length,
        mobile = /^1(3|4|5|7|8)\d{9}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写手机号");
// 手机号码验证
$.validator.addMethod("email", function(value, element) {
    let length = value.length,
        email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    return this.optional(element) || email.test(value);
}, "请正确填写邮箱");
// 密码
$.validator.addMethod("password", function(value, element) {
    let passwordReg = /^[\w]+$/;
    return this.optional(element) || passwordReg.test(value);
}, "请正确填写密码");
// data: [{
//     label: '',
//     text: '', //静态文本
//     help: '',
//     required: false,
//     component: {},
//     rule: {},
//     message: {},
//     items: []
// }]

class Forms extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            layout: 'vertical', //布局 row或inline
            setDefaults: { //表单验证
                // debug: true,
                errorClass: 'form-control-feedback',
                errorElement: 'div',
                errorPlacement(error, element) {
                    element.closest('.form-group').children('div').append(error);
                },
                highlight(element, errorClass) {
                    $(element).closest('.form-group').addClass('has-danger');
                },
                success(el) {
                    el.closest('.form-group').removeClass('has-danger');
                    el.closest('div.form-control-feedback').remove();
                },
                submitHandler(form) {
                    // form.submit();
                    const view = Lego.getView(opts.el);
                    if(view) view.submitForm();
                },
                onkeyup: true,
                // onkeyup(element) {
                //     $(element).valid();
                // },
                ignore: "",
                rules: {},
                messages: {},
            },
            // rules: null,
            // messages: null,
            labelCols: 2,
            comCols: 10,
            submitEl: '',    //按钮
            submitText: '提 交',    //按钮内容
            showSubmit: true,
            resetText: '重 置',    //按钮内容
            data: [], //
            format(result){ return result }, //格式化数据
            onSubmit(){}   //数据验证成功后回调事件
        };
        Object.assign(options, opts);
        super(options);
        this.renderCom();
    }
    render() {
        const options = this.options || {},
            that = this;
        function submitBtn(){
            let submit = '';
            if(!options.submitEl && options.showSubmit){
                if(options.layout == 'vertical'){
                    submit = hx`<div>
                    <button type="submit" class="btn btn-primary">${options.submitText}</button>
                    <button type="reset" class="btn btn-secondary">${options.resetText}</button>
                    </div>`;
                }else{
                    submit = hx`
                    <div class="form-group row">
                      <div class="offset-sm-${options.labelCols} col-sm-${options.comCols}">
                        <button type="submit" class="btn btn-primary">${options.submitText}</button>
                        <button type="reset" class="btn btn-secondary">${options.resetText}</button>
                      </div>
                    </div>
                    `;
                }
            }
            return submit;
        }
        function layoutItem(item, layout, id){
            let vDom = '', comTag = '';
            if(item.text){
                comTag = hx`<p class="form-control-static mb-0">${val(item.text)}</p>`;
            }else{
                if(item.component){
                    comTag = item.component.comName ? hx(`<${val(item.component.comName)} id=${id}></${val(item.component.comName)}>`) : '';
                }else{
                    comTag = '';
                }
            }
            if(layout == 'vertical'){
                vDom = hx`
                <div class="form-group">
                    <label for="${id}">${val(item.label)}${item.rule || item.required ? (item.rule.required || item.required ? hx`<span class="symbol required">*</span>` : '') : ''}</label>
                    ${comTag}
                    ${item.help ? hx`<small class="form-text text-muted">${val(item.help)}</small>` : ''}
                </div>
                `;
            }else{
                vDom = hx`
                <div class="form-group row">
                  <label for="${id}" class="col-sm-${that.options.labelCols} col-form-label">${val(item.label)}${item.rule || item.required ? (item.rule.required || item.required ? hx`<span class="symbol required">*</span>` : '') : ''}</label>
                  <div class="col-sm-${that.options.comCols}">
                    ${comTag}
                    ${item.help ? hx`<small class="form-text text-muted">${val(item.help)}</small>` : ''}
                  </div>
                </div>
                `;
            }
            return vDom;
        }
        function loopItem(data, index, layout){
            let vDom = '',
                comId = ['component', options.vid, index];
            if(data.items){
                vDom = hx`
                <fieldset class="${val(data.labelClass)}">
                    <legend>${val(data.label)}</legend>
                    ${data.items.map((item, i) => {
                        comId.push(i);
                        return layoutItem(item, layout, comId.join('_'));
                    })}
                </fieldset>
                `;
            }else{
                vDom = layoutItem(data, layout, comId.join('_'));
            }
            return vDom;
        }
        let vDom = hx`<form>
            ${options.data.map((item, i) => {
                return loopItem(item, i, options.layout);
            })}
            ${submitBtn()}</form>`;
        return vDom;
    }
    renderCom(){
        let that = this,
            opts = this.options;
        this.rules = null;
        this.messages = null;
        let components = opts.data,
            comArr = ['selects', 'treeselect'];
        components = typeof components == 'function' ? components(opts) : (Array.isArray(components) ? components : [components]);
        components.map((item, index) => {
            if(!item.text){
                const comId = ['component', opts.vid, index];
                if(item.items){
                    item.items.map((subItem, i) => {
                        if(subItem.component){
                            if(subItem.rule && subItem.message){
                                that.rules = opts.rules || {};
                                that.messages = opts.messages || {};
                                if(subItem.required) subItem.rule.required = true;
                                let theName = comArr.includes(subItem.component.comName) ? ('hidden_' + subItem.component.name) : subItem.component.name;
                                opts.setDefaults.rules[theName] = subItem.rule;
                                opts.setDefaults.messages[theName] = subItem.message;
                            }
                            comId.push(i);
                            subItem.component.el = '#' + comId.join('_');
                            subItem.component.context = that;
                            if(subItem.component.comName) Lego.create(Lego.UI[subItem.component.comName], subItem.component);
                        }
                    });
                }else{
                    if(item.component){
                        if(item.rule && item.message){
                            this.rules = opts.rules || {};
                            this.messages = opts.messages || {};
                            if(item.required) item.rule.required = true;
                            let theName = comArr.includes(item.component.comName) ? ('hidden_' + item.component.name) : item.component.name;
                            opts.setDefaults.rules[theName] = item.rule;
                            opts.setDefaults.messages[theName] = item.message;
                        }
                        item.component.el = '#' + comId.join('_');
                        item.component.context = this;
                        if(item.component.comName) Lego.create(Lego.UI[item.component.comName], item.component);
                    }
                }
            }
        });
        const clickName = 'click.form_' + opts.vid,
            submitEl = opts.submitEl,
            $submitEl = submitEl instanceof $ ? submitEl : $((typeof submitEl == 'string' ? submitEl : '') || '[type="submit"]');
        if (this.rules && this.messages) {
            this.$el.validate(opts.setDefaults);
            if($submitEl.length){
                $submitEl.off(clickName).on(clickName, function(event) {
                    that.$el.submit();
                });
            }
        } else {
            $submitEl.off(clickName).on(clickName, function(event) {
                that.submitForm();
            });
        }
        this.$el.attr('onSubmit', 'javascript:return false;');
    }
    //序列化表单
    serializeJson() {
        const data = {};
        const formData = this.$el.serializeArray();
        formData.forEach((item, index) => {
            if (item.value && item.name.indexOf('hidden_') < 0) {
                if (data[item.name]) {
                    if (!Array.isArray(data[item.name])) {
                        data[item.name] = [data[item.name]];
                    }
                    if (data.indexOf(item.value) < 0) data[item.name].push(item.value);
                } else {
                    data[item.name] = item.value;
                }
            }
        });
        return data;
    }
    //提交表单
    submitForm() {
        const format = this.options.format,
            submitEl = this.options.submitEl,
            $submitEl = submitEl instanceof $ ? submitEl : this.$((typeof submitEl == 'string' ? submitEl : '') || '[type="submit"]'),
            that = this;
        let data = this.serializeJson();
        if(typeof format == 'function') data = format(data);
        if (Lego.isEmptyObject(data)) return false;
        if (!$submitEl.hasClass('disabled')) {
            $submitEl.text('提交中...').addClass('disabled');
            setTimeout(function(){
                $submitEl.text(that.options.submitText).removeClass('disabled');
            }, 3000);
        }
        return this.options.onSubmit(this, data);
    }
    reset(){
        this.el.reset();
    }
}
Lego.components('forms', Forms);
export default Forms;
