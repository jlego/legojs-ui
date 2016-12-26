// import { Alert } from 'lego-ui';
import Button from '../../../../dist/Button';

Lego.components('button', Button);

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .alert': 'theClick'
            },
            components: [{
                el: '#button1',
                type: 'default',
                onClick(){
                    console.warn('点击了此按钮button1');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button2',
                type: 'primary',
                onClick(){
                    console.warn('点击了此按钮button2');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button3',
                type: 'dashed',
                onClick(){
                    console.warn('点击了此按钮button3');
                },
                style: {
                    marginRight: 10
                }
            }, {
                el: '#button4',
                type: 'ghost',
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
                <button id="button1"></button>
                <button id="button2"></button>
                <button id="button3"></button>
                <button id="button4"></button>
                <button id="button5"></button>
                <button id="button6"></button>
                <button id="button7"></button>
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
