import Form from './form';

let table = `
| 属性    |    说明   |      类型 |      默认值 |
|:------|:-------:|--------:|--------:|
| text   | 按钮文本, text/html  | string | button |
| type | 按钮风格，可选值为 primary dashed 或者不设 | string | secondary |
| disabled   | 是否禁用  | boolean | false |
| icon(未发布)   | 图标  | string |  |
| shape(未发布)   | 按钮形状，可选值为 circle 或者不设  | string |  |
| size   | 按钮大小，可选值为 sm lg 或者不设  | string |  |
| loading(未发布)   | 按钮载入状态  | boolean | false |
| onClick   | 点击事件回调  | function |  |
`;
class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            scrollbar: {},
            listener: {
                'updateView': (data = {})=>{
                    let view = Lego.getView('#exampleCom'),
                        tView = Lego.getView('#tabs'),
                        pView = Lego.getView('#pageContent');
                    if(view){
                        Object.assign(view.options, data);
                    }
                    if(tView){
                        if(tView.options.activeKey == 'tab_3') pView.showTab();
                    }
                }
            }
        };
        Object.assign(options, opts);
        super(options);
        let that = this;
        setTimeout(function(){
            that.renderScroll();
        }, 0);
        let view = Lego.getView('#exampleCom');
        this.oldOpts = view ? $.extend(true, {}, view.options) : {};
    }
    components(){
        let that = this;
        this.addCom([{
            el: '#tabs',
            type: 'tabs',
            activeKey: 'tab_1',
            navClassName: 'nav-fill',
            data: [{
                key: 'tab_1',
                value: '参数说明',
                content: hx`<div class="markdown scrollbar">
                    <h6>效果图:</h6>
                    <img src="${Lego.config.rootUri}img/example/buttons.png" style="margin-bottom:30px;">
                    <h6>参数:</h6>
                    ${hx(markdown.makeHtml(table))}
                    </div>`
            }, {
                key: 'tab_2',
                value: '实例效果',
                content: hx`<div class="example scrollbar"><buttons id="exampleCom"></buttons></div>`
            }, {
                key: 'tab_3',
                value: '生成代码',
                content: hx`<div class="code scrollbar" id="md"></div>`
            }],
            onChange(self, result){
                if(result.key == 'tab_3'){
                    that.showTab();
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
    showTab(){
        let theComView = Lego.getView('#exampleCom');
        if(theComView){
            this.$('#md').html(markdown.makeHtml(Lego.Ux.Util.getObjStr(theComView.options, this.oldOpts)));
            setTimeout(function(){
                this.$('pre').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            }, 0);
        }
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="height:100%">
            <div class="col-sm-8" style="height:100%">
                <div class="page-panel-bg col-left">
                    <tabs id="tabs"></tabs>
                </div>
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
