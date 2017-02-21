/**
 * 表单
 * ronghui Yu
 * 2017/1/9
 */
import validate from 'jquery-validation-cjs';
$.fn.validate = validate;
import './asset/index.scss';
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
                    element.after(error);
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
                    <label for="${id}">${val(item.label)}${item.required ? hx`<span class="symbol required">*</span>` : ''}</label>
                    ${comTag}
                    ${item.help ? hx`<small class="form-text text-muted">${val(item.help)}</small>` : ''}
                </div>
                `;
            }else{
                vDom = hx`
                <div class="form-group row">
                  <label for="${id}" class="col-sm-${that.options.labelCols} col-form-label">${val(item.label)}${item.required ? hx`<span class="symbol required">*</span>` : ''}</label>
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
        const that = this;
        this.rules = null;
        this.messages = null;
        let components = this.options.data;
        components = typeof components == 'function' ? components(this.options) : (Array.isArray(components) ? components : [components]);
        components.map((item, index) => {
            if(!item.text){
                const comId = ['component', that.options.vid, index];
                if(item.items){
                    item.items.map((subItem, i) => {
                        if(subItem.component){
                            if(subItem.rule && subItem.message){
                                that.rules = that.options.rules || {};
                                that.messages = that.options.messages || {};
                                if(subItem.required) subItem.rule.required = true;
                                that.options.setDefaults.rules[subItem.component.name] = subItem.rule;
                                that.options.setDefaults.messages[subItem.component.name] = subItem.message;
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
                            this.rules = this.options.rules || {};
                            this.messages = this.options.messages || {};
                            if(item.required) item.rule.required = true;
                            this.options.setDefaults.rules[item.component.name] = item.rule;
                            this.options.setDefaults.messages[item.component.name] = item.message;
                        }
                        item.component.el = '#' + comId.join('_');
                        item.component.context = this;
                        if(item.component.comName) Lego.create(Lego.UI[item.component.comName], item.component);
                    }
                }
            }
        });
        const clickName = 'click.form_' + this.options.vid,
            submitEl = this.options.submitEl,
            $submitEl = submitEl instanceof $ ? submitEl : $((typeof submitEl == 'string' ? submitEl : '') || '[type="submit"]');
        if (this.rules && this.messages) {
            this.$el.validate(this.options.setDefaults);
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
            if (item.value) {
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
            $submitEl = submitEl instanceof $ ? submitEl : this.$el.find((typeof submitEl == 'string' ? submitEl : '') || '[type="submit"]'),
            that = this;
        let data = this.serializeJson();
        if(typeof format == 'function') data = format(data);
        if (Lego.isEmptyObject(data)) return false;
        if (!$submitEl.hasClass('disabled')) {
            $submitEl.text('提交中...').addClass('disabled');
        }
        return this.options.onSubmit(this, data);
    }
    reset(){
        this.$el.reset();
    }
}
Lego.components('forms', Forms);
export default Forms;
