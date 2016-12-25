class IndexView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            scrollbar: {},
            data: {
                currentTab: 0
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        const data = this.data;
        const vDom = hx`
        <div class="page-container">
            <h1 class="page-title">
                <a href="#/alert/0" class="${data.currentTab == 0 ? 'active' : ''}">Alert警告提示</a>
                <a href="#/alert/1" class="${data.currentTab == 1 ? 'active' : ''}">Button按钮</a>
            </h1>
            <div class="page-panel">
                <div class="page-content page-panel-bg scrollbar">
                    <div id="pageContent"></div>
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
}
export default IndexView;
