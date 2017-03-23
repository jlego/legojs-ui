class IndexView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            currentTab: 0
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="page-container" id="page-container">
            <h1 class="page-title">
                <a href="#/alert/0" class="${options.currentTab == 0 ? 'active' : ''}">Alert警告提示</a>
                <a href="#/alert/1" class="${options.currentTab == 1 ? 'active' : ''}">Button按钮</a>
                <a href="#/alert/2" class="${options.currentTab == 2 ? 'active' : ''}">Table表格</a>
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
