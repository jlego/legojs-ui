class IndexView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
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
                <a href="#/avatar/0" class="${options.currentTab == 0 ? 'active' : ''}">Avatar 头像</a>
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
