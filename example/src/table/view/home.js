import Tables from '../../../../dist/Tables';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            scrollbar: true,
            components: [{
                el: '#comsDiv',
                data: {
                    type: 'success',
                    closable: true,
                    showIcon: false,
                    message: '警告提示内容',
                    // description: '警告提示的辅助性文字介绍',
                }
            }]
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        const vDom = hx`
        <div class="page-content page-panel-bg perfect-scrollbar">
            <tables id="comsDiv"></tables>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
