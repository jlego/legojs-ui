import Tooltip from '../../../../dist/Tooltip';
import Popover from '../../../../dist/Popover';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
        Lego.UI.tooltip({
            el: '#tooltip1',
            title: '提示1',
            placement: 'top',
            onHidden() {
                console.warn('隐藏提示1');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip2',
            title: '提示2',
            placement: 'bottom',
            onHidden() {
                console.warn('隐藏提示2');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip3',
            title: '提示3',
            placement: 'left',
            onHidden() {
                console.warn('隐藏提示3');
            }
        });
        Lego.UI.tooltip({
            el: '#tooltip4',
            title: '提示4',
            placement: 'right',
            onHidden() {
                console.warn('隐藏提示4');
            }
        });
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
