// import Alert from '../../../../dist/alert';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .alert': 'theClick'
            },
            components: [{
                el: '#alert1',
                type: 'success',
                closable: true,
                showIcon: false,
                message: '警告提示内容',
            }, {
                el: '#alert2',
                type: 'info',
                closable: true,
                showIcon: true,
                message: '警告提示内容',
            }, {
                el: '#alert3',
                type: 'warning',
                closable: true,
                showIcon: false,
                message: '警告提示内容',
                description: '警告提示的辅助性文字介绍',
            }, {
                el: '#alert4',
                type: 'error',
                closable: true,
                showIcon: true,
                message: '警告提示内容',
                description: '警告提示的辅助性文字介绍',
            }]
        };
        Object.assign(options, opts);
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
        switch(theView.options.type){
            case 'success':
                theView.options.type = 'info'
                break;
            case 'info':
                theView.options.type = 'warning'
                break;
            case 'warning':
                theView.options.type = 'error'
                break;
            case 'error':
                theView.options.type = 'success'
                break;
        }
    }
}
export default HomeView;
