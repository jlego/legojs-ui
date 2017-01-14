import './asset/index.scss';

class Alert extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-alert-close-icon': 'close'
            },
            type: 'info',   //指定警告提示的样式，有四种选择 success、info、warning、error
            closable: false, //默认不显示关闭按钮
            closeText: '',  //自定义关闭按钮
            message: '',    //警告提示内容
            description: '',    //警告提示的辅助性文字介绍
            onClose(){},    //关闭时触发的回调函数
            showIcon: true,    //是否显示辅助图标
            banner: false   //是否用作顶部公告
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        let iconName = '';
        switch(options.type){
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
        <div class="alert alert-${options.type} ${options.description ? 'lego-alert-with-description' : ''} ${options.showIcon ? '' : 'lego-alert-no-icon'}">
            <i class="anticon ${options.description ? ('anticon-' + iconName + '-circle-o') : ('anticon-' + iconName + '-circle')} lego-alert${options.showIcon ? '' : '-no'}-icon" style="display:${options.showIcon ? '' : 'none'};"></i>
            <span class="lego-alert-message">${options.message}</span>
            ${options.description ? hx`<span class="lego-alert-description">${typeof options.description == 'string' ? options.description : ''}</span>` : ''}
            ${options.closable ? hx`<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>` : ''}
        </div>
        `;
        return vDom;
    }
    close(event){
        event.stopPropagation();
        this.$el.slideUp("normal", () => {
            this.remove();
        });
        if(typeof this.options.onClose === 'function') this.options.onClose(event);
    }
}

Lego.components('alert', Alert);
export default Alert;
