import './asset/index.scss';

class Button extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            data: {
                text: 'button', //text/html
                type: 'default',   //设置按钮类型，可选值为 primary ghost dashed 或者不设
                htmlType: 'button', //设置 button 原生的 type 值
                icon: '',  //设置按钮的图标类型
                shape: '',    //设置按钮形状，可选值为 circle 或者不设
                size: 'default',    //正常或迷你类型，default or small
                loading: false,    //设置按钮载入状态
                onClick(){}   //click 事件的 handler
            }
        };
        $.extend(true, options, opts);
        if(typeof options.data.onClick == 'function'){
            options.events = options.events || {};
            options.events['click'] = 'onClick';
        }
        super(options);
    }
    render() {
        const data = this.data || {};
        const vDom = hx`
        <button type="${data.htmlType}" class="btn btn-${data.type} lego-btn lego-btn-${data.type}">
            <span>${data.html || data.text}</span>
        </button>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        if(typeof this.data.onClick === 'function') this.data.onClick(event);
    }
}
export default Button;
