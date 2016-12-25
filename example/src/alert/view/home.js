// import { Alert } from 'lego-ui';
import Alert from '../../../../dist/Alert';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .alert': 'theClick'
            },
            components: [{
                el: '#alert1',
                view: Alert,
                data: {
                    type: 'success',
                    closable: true,
                    showIcon: false,
                    message: '警告提示内容',
                    // description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alert2',
                view: Alert,
                data: {
                    type: 'info',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    // description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alert3',
                view: Alert,
                data: {
                    type: 'warning',
                    closable: true,
                    showIcon: false,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alert4',
                view: Alert,
                data: {
                    type: 'error',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }]
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        const vDom = hx`
        <div id="pageContent">
            <alert id="alert1"></alert>
            <alert id="alert2"></alert>
            <alert id="alert3"></alert>
            <alert id="alert4"></alert>
        </div>
        `;
        return vDom;
    }
    theClick(event){
        const target = $(event.currentTarget),
            theView = HBY.getView(target);
        switch(theView.data.type){
            case 'success':
                theView.data.type = 'info'
                break;
            case 'info':
                theView.data.type = 'warning'
                break;
            case 'warning':
                theView.data.type = 'error'
                break;
            case 'error':
                theView.data.type = 'success'
                break;
        }
    }
}
export default HomeView;
