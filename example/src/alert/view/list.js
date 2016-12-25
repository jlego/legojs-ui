// import { Alert } from 'lego-ui';
import Alert from '../../../../dist/Alert';
import Button from '../../../../dist/Button';

class ListView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .alert': 'theClick'
            },
            listen: {
                'data_update': (data) => {
                    debug.warn('pppppppppp', data);
                }
            },
            scrollbar: true,
            components: [{
                el: '#alertDiv',
                view: Alert,
                data: {
                    type: 'success',
                    closable: true,
                    showIcon: false,
                    message: '警告提示内容',
                    // description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
                data: {
                    type: 'info',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    // description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
                data: {
                    type: 'warning',
                    closable: true,
                    showIcon: false,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
                view: Alert,
                insert: 'append',
                data: {
                    type: 'error',
                    closable: true,
                    showIcon: true,
                    message: '警告提示内容',
                    description: '警告提示的辅助性文字介绍',
                }
            }, {
                el: '#alertDiv',
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
                el: '#alertDiv',
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
                el: '#alertDiv',
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
                el: '#alertDiv',
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
                el: '#alertDiv',
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
                el: '#alertDiv',
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
                el: '#alertDiv',
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
        this.$('#md').html(markdown.makeHtml( text ));
        this.$('pre').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
    render() {
        const vDom = hx`
        <div class="page-container">
            <h1 class="page-title">
                <a href="">Alert警告提示</a>
            </h1>
            <div class="page-panel">
                <div class="page-content page-panel-bg perfect-scrollbar">
                    <div id="alertDiv"></div>
                    <div id="md" style="margin-top: 20px;"></div>
                    sdfasd<code>img</code>fa
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
    theClick(event){
        const target = $(event.currentTarget),
            theView = HBY.getView(target);
        switch(theView.data.type){
            case 'success':
                theView.data.type = 'info'
                break;
            case 'info':
                theView.data.type = 'warning'
                break;
            case 'warning':
                theView.data.type = 'error'
                break;
            case 'error':
                theView.data.type = 'success'
                break;
        }
    }
}
export default ListView;
