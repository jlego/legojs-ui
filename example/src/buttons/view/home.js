import Form from './form';

let code = `
    var legojs = {
        nickName: "freefish",
        site: "https://github.com/jlego/legojs"
    }
`;
let table = `
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
`;
class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            listener: {
                'updateView': (data = {})=>{
                    let view = Lego.getView('#exampleCom'),
                        pView = Lego.getView('#pageContent');
                    if(view){
                        Object.assign(view.options, data);
                    }
                    if(pView){
                        pView.oldOpts = $.extend(true, {}, view.options);
                    }
                }
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let that = this;
        this.addCom([{
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
                content: hx`<div class="code">${hx(markdown.makeHtml(code))}</div>`
            },{
                key: 'tab_3',
                value: '参数说明',
                content: hx`<div class="markdown">${hx(markdown.makeHtml(table))}</div>`
            }],
            onChange(self, result){
                let pView = this.context;
                if(result.key == 'tab_1'){
                    self.oldOpts
                }
                if(result.key == 'tab_2'){
                    setTimeout(function(){
                        that.$('pre').each(function(i, block) {
                            hljs.highlightBlock(block);
                        });
                    }, 200);
                }
            },
            components: [{
                el: '#exampleCom',
                text: 'button'
            }]
        }, {
            el: '#formcom'
        }]);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="height:100%">
            <div class="col-sm-8 left-col" style="height:100%">
                <tabs id="tabs"></tabs>
            </div>
            <div class="col-sm-4" style="height:100%">
              <formcom id="formcom"></formcom>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
