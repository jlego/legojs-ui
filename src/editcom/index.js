/**
 * 编辑元组件
 * ronghui Yu
 * 2017/2/16
 * item: {
 *     comName: '',
 *     key: ''
 * }
 */
import './asset/index.scss';
import { regObj } from '../forms/index';

class Editcom extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click i.edit': 'onClick',
                'click i.cancel': 'onClose',
            },
            text: '',
            html: '',
            template: '',
            width: 'auto',
            clicked: false,
            readonly: false,
            data: [],
            icon: 'edit',  //设置按钮的图标
            size: '',    //设置按钮大小，可选值为 sm lg 或者不设
            validation: '', //验证输入内容  function或string, 'mobile/email'
            onEdit(){},   //编辑回调
            onCancel(){},
            onFinish(){},
            components: []
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let opts = this.options;
        if(opts.components.length){
            opts.components.forEach((item, index) => {
                item.key = 'editcom_' + opts.vid;
                item.el = '#' + item.key;
                item.size = opts.size;
                if(opts.width){
                    item.style = item.style || {};
                    item.style.width = opts.width;
                }
                item.value = opts.value || opts.text;
            });
        }
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="lego-editcom clearfix ${opts.size}">
            <span>${opts.clicked ?
                (opts.template ? val(opts.template) : opts.components.map(item => {
                        return hx(`<${item.comName} id=${item.key}></${item.comName}>`);
                    }
                )) : val(opts.html || opts.text)}
            </span>
            ${!opts.readonly && !opts.clicked ?
                hx`<i class="anticon anticon-${val(opts.icon)} edit" title="编辑"></i>` : ''}
            ${!opts.readonly && opts.clicked ?
                hx`<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>` : ''}
        </div>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        this.options.clicked = true;
        if(typeof this.options.onEdit == 'function') this.options.onEdit(this, event);
    }
    onClose(event){
        event.stopPropagation();
        this.close();
        if(typeof this.options.onCancel == 'function') this.options.onCancel(this, event);
    }
    close(value, htmlStr){
        let options = {clicked: false},
            opts = this.options;
        if(value){
            // 验证输入的内容
            if(typeof opts.validation == 'function') {
                let result = opts.validation(this, value);
                if(!result) return false;
            }else if(typeof opts.validation == 'string'){
                if(!regObj[opts.validation].test(value)){
                    return false;
                }
            }
            // 更改输入的内容
            if(typeof value == 'object'){
                if(value.value) options.value = options.text = value.value;
            }else{
                options.value = options.text = value;
            }
            if(htmlStr) options.html = htmlStr;
        }
        Object.assign(this.options, options);
        if(typeof opts.onFinish == 'function') opts.onFinish(this);
        return true;
    }
}
Lego.components('editcom', Editcom);
export default Editcom;
