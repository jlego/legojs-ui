// import Button from 'lego-ui/dist/Button';
// import Modal from 'lego-ui/dist/Modal';
import Buttons from '../../../../dist/Buttons';
import Modal from '../../../../dist/Modal';

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            components: [{
                el: '#button1',
                type: 'info',
                text: '模态框',
                onClick(){
                    console.warn('点击了此按钮button1');
                    Lego.create(Lego.UI.modal, {
                        position: 'right',
                        content: '这是内容啊',
                        confirm: {
                            msgType: 'error',
                            content: '你确定要退出吗？'
                        },
                        onOk(event){
                            console.warn('是真的');
                        }
                    });
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button2',
                type: 'primary',
                // className: 'btn-sm',
                text: '对话框',
                onClick(){
                    console.warn('点击了此按钮button2');
                    Lego.create(Lego.UI.modal, {
                        msgType: 'success',
                        content: '成功了！',
                        confirm: {
                            msgType: 'error',
                            content: '你确定要退出吗？'
                        },
                        onOk(event){
                            console.warn('是真的');
                        }
                    });
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button3',
                type: 'secondary',
                onClick(){
                    console.warn('点击了此按钮button3');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button4',
                type: 'link',
                onClick(){
                    console.warn('点击了此按钮button4');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button5',
                type: 'success',
                onClick(){
                    console.warn('点击了此按钮button5');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button6',
                type: 'warning',
                onClick(){
                    console.warn('点击了此按钮button6');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button7',
                type: 'danger',
                onClick(){
                    console.warn('点击了此按钮button7');
                },
                style: {
                    marginRight: 10
                }
            }]
        };
        Object.assign(options, opts);
        super(options);

const text = `
    var legojs = {
        nickName: "freefish",
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
        <div id="pageContent">
            <div>
                <buttons id="button1"></buttons>
                <buttons id="button2"></buttons>
                <buttons id="button3"></buttons>
                <buttons id="button4"></buttons>
                <buttons id="button5"></buttons>
                <buttons id="button6"></buttons>
                <buttons id="button7"></buttons>
            </div>
            <div id="md" style="margin-top: 20px;"></div>
            sdfasd<code>img</code>fa
            <div id="tableDiv" class="markdown"></div>
        </div>
        `;
        return vDom;
    }
}
export default ListView;
