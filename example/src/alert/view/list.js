// import { Alert } from 'lego-ui';
import Button from '../../../../dist/Button';

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            scrollbar: true,
            components: [{
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'default',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'primary',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'dashed',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'ghost',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'success',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'warning',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#buttonDiv',
                view: Button,
                insert: 'append',
                data: {
                    type: 'danger',
                    onClick(){
                        console.warn('点击了此按钮');
                    }
                },
                style: {
                    marginRight: 10
                }
            }]
        };
        $.extend(true, options, opts);
        super(options);
        const text = `
    var ihubo = {   
        nickName: "自由鱼",    
        site: "https://github.com/jlego/legojs"
    }`;
        const table = `
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
        `;
        this.$('#md').html(markdown.makeHtml( text ));
        this.$('#tableDiv').html(markdown.makeHtml( table ));
        this.$('pre').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
    render() {
        const vDom = hx`
        <div class="page-content page-panel-bg perfect-scrollbar">
            <div id="buttonDiv"></div>
            <div id="md" style="margin-top: 20px;"></div>
            sdfasd<code>img</code>fa
            <div id="tableDiv" class="markdown"></div>
        </div>
        `;
        return vDom;
    }
}
export default ListView;
