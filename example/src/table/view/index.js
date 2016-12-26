class IndexView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
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
                <a href="#/table/0" class="${data.currentTab == 0 ? 'active' : ''}">Table 表格</a>
            </h1>
            <div class="page-panel" id="pageContent">
            </div>
        </div>
        `;
        return vDom;
    }
}
export default IndexView;
