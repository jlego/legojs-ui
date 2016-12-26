import './asset/index.scss';

class Table extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            rowSelection: null, //列表项是否可选择
            pagination: null,   //分页器，配置项参考 pagination，设为 false 时不展示和进行分页
            size: 'default', //正常或迷你类型，default or small
            dataSource: '',  //设置按钮的图标类型
            shape: '',    //设置按钮形状，可选值为 circle 或者不设
            size: 'default',    //正常或迷你类型，default or small
            loading: false,    //设置按钮载入状态
            onClick(){}   //click 事件的 handler
        };
        $.extend(true, options, opts);
        if(typeof options.onClick == 'function'){
            options.events = options.events || {};
            options.events['click'] = 'onClick';
        }
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <button type="${options.htmlType}" class="btn btn-${options.type} lego-btn lego-btn-${options.type}">
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
export default Table;
