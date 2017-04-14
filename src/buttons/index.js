/**
 * 按钮
 * ronghui Yu
 * 2017/1/7
 */
import './asset/index.scss';

class Buttons extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click': 'onClick'
            },
            text: 'button', //text/html
            type: 'secondary',   //设置按钮类型，可选值为 primary dashed 或者不设
            htmlType: 'button', //设置 button 原生的 type 值
            disabled: false,
            icon: '',  //设置按钮的图标类型
            afterIcon: '',
            shape: '',    //设置按钮形状，可选值为 circle, capsule 或者不设
            size: '',    //设置按钮大小，可选值为 sm lg 或者不设
            loading: false,    //设置按钮载入状态
            onClick(){}   //click 事件的 handler
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <button type="${options.htmlType}" class="btn btn-${options.type == 'dashed' ? 'secondary lego-btn-dashed' : options.type}
        ${options.size ? ('btn-' + options.size) : ''} ${options.shape ? ('lego-btn-' + options.shape) : 'default'}" ${options.disabled ? 'disabled' : ''}>
            ${options.icon ? hx`<i class="${options.icon}"></i>` : ''}
            ${options.html || options.text ? hx`<span>${options.html || options.text}</span>` : ''}
            ${options.afterIcon ? hx`<i class="${options.afterIcon}"></i>` : ''}
        </button>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        if(typeof this.options.onClick == 'function') this.options.onClick(this, event);
    }
}
Lego.components('buttons', Buttons);
export default Buttons;
