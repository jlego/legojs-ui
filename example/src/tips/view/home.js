import Tooltip from '../../../../dist/Tooltip';
import Popover from '../../../../dist/Popover';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #notification1': function(){
                    Lego.UI.message('success', '系统提示1');
                },
                'click #notification2': function(){
                    Lego.UI.message('info', '系统提示2');
                },
                'click #notification3': function(){
                    Lego.UI.message('warning', '系统提示3');
                },
                'click #notification4': function(){
                    Lego.UI.message('error', '系统提示4');
                }
            }
        };
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
        Lego.UI.popover({
            el: '#popover1',
            title: '提示1',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'top',
            onHidden() {
                console.warn('隐藏提示1');
            }
        });
        Lego.UI.popover({
            el: '#popover2',
            title: '提示2',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'bottom',
            onHidden() {
                console.warn('隐藏提示2');
            }
        });
        Lego.UI.popover({
            el: '#popover3',
            title: '提示3',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'left',
            onHidden() {
                console.warn('隐藏提示3');
            }
        });
        Lego.UI.popover({
            el: '#popover4',
            title: '提示4',
            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
            placement: 'right',
            container: 'body',
            onHidden() {
                console.warn('隐藏提示4');
            }
        });
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
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
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="popover1">Top</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="popover2">Bottom</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="popover3">Left</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-secondary" id="popover4">Right</button>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-3">
              <button type="button" class="btn btn-primary" id="notification1">系统提示1</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-primary" id="notification2">系统提示2</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-primary" id="notification3">系统提示3</button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-primary" id="notification4">系统提示4</button>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
