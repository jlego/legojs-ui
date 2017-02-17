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
            onEdit(){},   //编辑回调
            onCancel(){},
            onFinish(){},
            components: []
        };
        Object.assign(options, opts);
        super(options);
    }
    renderBefore(){
        let options = this.options;
        if(options.components.length){
            options.components.forEach(item => {
                item.key = item.key + options.vid;
                item.el = '#' + item.key;
                item.size = options.size;
                if(options.width){
                    item.style = item.style || {};
                    item.style.width = options.width;
                }
                item.value = options.value || options.text;
            });
        }
    }
    render() {
        let options = this.options;
        let vDom = hx`
        <div class="lego-editcom clearfix ${options.size}">
            <span>${options.clicked ?
                (options.template ? val(options.template) : options.components.map(item => {
                        return hx(`<${item.comName} id=${item.key}></${item.comName}>`);
                    }
                )) : val(options.html || options.text)}
            </span>
            ${!options.readonly && !options.clicked ?
                hx`<i class="anticon anticon-${val(options.icon)} edit" title="编辑"></i>` : ''}
            ${!options.readonly && options.clicked ?
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
    close(){
        this.options.clicked = false;
        if(typeof this.options.onFinish == 'function') this.options.onFinish(this);
    }
}
Lego.components('editcom', Editcom);
export default Editcom;
