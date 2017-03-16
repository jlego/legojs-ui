import Form from './form';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            events: {
            },
            components: [{
                el: '#tabs',
                type: 'tabs',
                activeKey: 'tab_1',
                animate: 'fade',
                data: [{
                    key: 'tab_1',
                    value: '效果',
                    content: hx`<div>效果</div>`
                },{
                    key: 'tab_2',
                    value: '接口',
                    content: hx`<div>接口</div>`
                },{
                    key: 'tab_3',
                    value: '代码',
                    content: hx`<div>代码</div>`
                }]
            }, {
                el: '#formcom'
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="height:100%">
            <div class="col-sm-6" style="height:100%">
                <tabs id="tabs"></tabs>
            </div>
            <div class="col-sm-6" style="height:100%">
              <formcom id="formcom"></formcom>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
