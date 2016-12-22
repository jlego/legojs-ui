// import { Alert } from 'lego-ui';

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #test': 'theClick'
            },
            listen: {
                'data_update': (data) => {
                    debug.warn('pppppppppp', data);
                }
            },
            components: [{
                el: '#button',
                view: Lego.UI.Alert,
                data: {
                    closable: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }]
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        let data = this.data.list || [];
        let vDom = hx`<div><div id="button"></div></div>`;
        return vDom;
    }
    theClick(event){
        debug.warn('66666666666');
    }
}
export default ListView;
