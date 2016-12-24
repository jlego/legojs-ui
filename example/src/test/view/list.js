// import { Alert } from 'lego-ui';
import Alert from '../../../../dist/Alert';

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .alert': 'theClick'
            },
            listen: {
                'data_update': (data) => {
                    debug.warn('pppppppppp', data);
                }
            },
            scrollbar: true,
            components: [{
                el: '#alertDiv',
                view: Alert,
                data: {
                    type: 'success',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
                data: {
                    type: 'info',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
                data: {
                    type: 'warning',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
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
        <div class="page-container">
            <h1 class="page-title">工单管理</h1>
            <div class="page-panel">
                <div class="page-content page-panel-bg perfect-scrollbar">
                    <div id="alertDiv"></div>
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
    theClick(event){
        const target = $(event.currentTarget),
            theView = HBY.getView(target[0]);
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
export default ListView;
