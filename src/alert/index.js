import './asset/index.scss';

class Alert extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-alert-close-icon': 'onClose'
            },
            data: {
                type: 'info',   //指定警告提示的样式，有四种选择 success、info、warning、error
                closable: false, //默认不显示关闭按钮
                closeText: '',  //自定义关闭按钮
                message: '',    //警告提示内容
                description: '',    //警告提示的辅助性文字介绍
                onClose(){},    //关闭时触发的回调函数
                showIcon: false,    //是否显示辅助图标
                banner: false   //是否用作顶部公告
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        const data = this.data || {};
        let iconName = '';
        switch(data.type){
            case 'success':
                iconName = 'check';
                break;
            case 'info':
                iconName = 'info';
                break;
            case 'warning':
                iconName = 'exclamation';
                break;
            case 'error':
                iconName = 'cross';
                break;
        }
        const vDom = hx`
        <div class="alert alert-${data.type} ${data.description ? 'ant-alert-with-description' : ''}">
            <i class="anticon ${data.description ? ('anticon-' + iconName + '-circle-o') : ('anticon-' + iconName + '-circle')} lego-alert-icon"></i>
            <span class="lego-alert-message">${data.message}</span>
            ${data.description ? hx`<span class="lego-alert-description">${data.description}</span>` : ''}
            ${data.closable ? hx`<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>` : ''}
        </div>
        `;
        return vDom;
    }
    onClose(event){
        event.stopPropagation();
        this.remove();
        if(typeof this.data.onClose === 'function') this.data.onClose();
    }
}
export default Alert;
