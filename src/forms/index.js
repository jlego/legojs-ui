/**
 * 表单
 * ronghui Yu
 * 2017/1/9
 */
import 'jquery-validation';
// import './asset/index.scss';
// data: [{
//     label: '',
//     labelClass: '',
//     style: {},
//     help: '',
//     required: false,
//     component: '',
//     componentClass: '',
//     items: []
// }]

class Forms extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            layout: 'vertical', //布局 row或inline
            labelClass: '',
            componentClass: '',
            setDefaults: { //表单验证
                // debug: true,
                errorClass: 'help-block',
                errorElement: 'div',
                errorPlacement: function(error, element) {
                    element.parents('.form-group > div').append(error);
                },
                highlight: function(element, errorClass) {
                    $(element).closest('.form-group').addClass('has-danger');
                },
                success: function(el) {
                    el.closest('.form-group').removeClass('has-danger');
                    el.closest('div.help-block').remove();
                },
                submitHandler: function(form) {
                    const view = Lego.getView(opts.el);
                    if(view) view.submitForm();
                }
            },
            rules: null,
            messages: null,
            submitEl: '',    //按钮
            submitText: '提 交',    //按钮内容
            submitClass: '', //提交表单按钮样式
            data: [], //
            format(result){ return result }, //格式化数据
            onSubmit(){}   //数据验证成功后回调事件
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {},
            that = this;
        let submit = '';
        if(!options.submitEl){
            if(options.layout == 'vertical'){
                submit = hx`<button type="submit" class="btn btn-primary ${val(options.submitClass, '')}">${options.submitText}</button>`;
            }else{
                submit = hx`
                <div class="form-group row">
                  <div class="offset-sm-2 col-sm-10">
                    <button type="submit" class="btn btn-primary ${val(options.submitClass, '')}">${options.submitText}</button>
                  </div>
                </div>
                `;
            }
        }
        function layoutItem(item, layout, id){
            let vDom = '';
            let comTag = `<${val(item.componentName)} id=${id}></${val(item.componentName)}>`;
            if(layout == 'vertical'){
                vDom = hx`
                <div class="form-group">
                    <label for="${id}" class=" ${val(that.options.labelClass || item.labelClass, '')}">${val(item.label)}</label>
                    ${hx(comTag)}
                    ${item.help ? hx`<small class="form-text text-muted">${val(item.help)}</small>` : ''}
                </div>
                `;
            }else{
                vDom = hx`
                <div class="form-group row">
                  <label for="${id}" class="col-sm-2 ${val(that.options.labelClass || item.labelClass, '')} col-form-label">${val(item.label)}</label>
                  <div class="col-sm-10 ${val(that.options.componentClass || item.componentClass, '')}">
                    ${hx(comTag)}
                    ${item.help ? hx`<small class="form-text text-muted">${val(item.help)}</small>` : ''}
                  </div>
                </div>
                `;
            }
            return vDom;
        }
        function loopItem(data, index, layout){
            let vDom = '';
            if(data.items){
                vDom = hx`
                <fieldset class="${val(data.labelClass)}">
                    <legend>${val(data.label)}</legend>
                    ${data.items.map((item, i) => {
                        return layoutItem(item, layout, 'component_' + index + '_' + i);
                    })}
                </fieldset>
                `;
            }else{
                vDom = layoutItem(data, layout, 'component_' + index);
            }
            return vDom;
        }
        let vDom;
        if(options.layout == 'vertical'){
            vDom = hx`
            <form>
            ${options.data.map((item, i) => {
                return loopItem(item, i, 'vertical');
            })}
            ${submit}
            </form>`;
        }else{
            vDom = hx`
            <form>
            ${options.data.map((item, i) => {
                return loopItem(item, i, 'inline');
            })}
            ${submit}
            </form>`;
        }
        return vDom;
    }
    renderAfter(){
        if (this.options.rules && this.options.messages) {
            $.validator.setDefaults(this.options.setDefaults);
            this.validator = this.$el.validate({
                rules: this.options.rules,
                messages: this.options.messages
            });
        } else {
            const that = this,
                eventName = 'submit.form_' + this.options.vid,
                submitEl = this.options.submitEl;
            this.$el.off(eventName).on(eventName, function(event) {
                that.submitForm();
            });
        }
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
            $submitEl = submitEl instanceof $ ? submitEl : $((typeof submitEl == 'string' ? submitEl : '') || '[type="submit"]'),
            that = this;
        let data = this.serializeJson();
        if(typeof format == 'function') data = format(data);
        if (!Object.values(data).length) return false;
        if (!$submitEl.hasClass('disabled')) {
            $submitEl.text('提交中...').addClass('disabled');
        }
        return this.options.onSubmit(data);
    }
}
Lego.components('forms', Forms);
export default Forms;
