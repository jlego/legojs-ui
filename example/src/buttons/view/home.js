import Form from './form';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            listener: {
                'updateView': (data = {})=>{
                    let view = Lego.getView('#exampleCom');
                    if(view){
                        Object.assign(view.options, data);
                    }
                }
            },
            components: [{
                el: '#tabs',
                type: 'tabs',
                activeKey: 'tab_1',
                navClassName: 'nav-fill',
                animate: 'fade',
                data: [{
                    key: 'tab_1',
                    value: '组件效果',
                    content: hx`<div><buttons id="exampleCom"></buttons></div>`
                },{
                    key: 'tab_2',
                    value: '生成代码',
                    content: hx`<div>接口</div>`
                },{
                    key: 'tab_3',
                    value: '参数说明',
                    content: hx`<div>代码</div>`
                }],
                components: [{
                    el: '#exampleCom',
                    text: 'button'
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
