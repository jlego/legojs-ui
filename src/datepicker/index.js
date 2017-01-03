// import './asset/index.scss';

class Datepicker extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click': 'onClick'
            },
            text: 'button', //text/html
            type: 'default',   //设置按钮类型，可选值为 primary ghost dashed 或者不设
            htmlType: 'button', //设置 button 原生的 type 值
            icon: '',  //设置按钮的图标类型
            shape: '',    //设置按钮形状，可选值为 circle 或者不设
            size: 'default',    //设置按钮大小，可选值为 small large 或者不设
            loading: false,    //设置按钮载入状态
            onClick(){}   //click 事件的 handler
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <button type="${options.htmlType}" class="btn btn-${options.type}">
            <span>${options.html || options.text}</span>
        </button>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        if(typeof this.options.onClick === 'function') this.options.onClick(event);
    }
}
Lego.components('datepicker', Datepicker);
export default Datepicker;
