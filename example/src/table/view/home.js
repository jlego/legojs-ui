import Table from '../../../../dist/Table';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            scrollbar: true,
            components: [{
                el: '#comsDiv',
                view: Table,
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
            <div id="comsDiv"></div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
