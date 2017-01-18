import Steps from '../../../../dist/Steps';
import Buttons from '../../../../dist/Buttons';
import Facial from '../../../../dist/Facial';
import Collapse from '../../../../dist/Collapse';
import Reply from '../../../../dist/Reply';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #collapseBtn': function(event){
                    Lego.UI.collapse('#collapseExample', function(result, target){
                        console.warn(result, target);
                    });
                },
                'click #collapseBtn2': function(event){
                    Lego.UI.collapse({
                        target: '#collapseExample2',
                        restHeight: 20,
                        onChange(result, target){
                            console.warn(result, target);
                        }
                    });
                }
            },
            components: [{
                el: '#steps1',
                // name: 'user',
                data: [{
                    title: '步骤一',
                    description: '这是描述内容这是描述内容',
                }, {
                    title: '步骤二',
                    description: '这是描述内容这是描述内容',
                }, {
                    title: '步骤三',
                    description: '这是描述内容这是描述内容',
                }],
                onNext(self, result) {
                    console.warn('下一步', result);
                },
                onPrevious(self, result) {
                    console.warn('上一步', result);
                }
            }, {
                el: '#steps2',
                titleWidth: 40,    //标题宽度
                showDescription: false,  //显示描述
                showIcon: false, //是否显示图标
                showNum: false, //是否显示序号
                data: [{
                    title: '步骤一',
                    description: '这是描述内容这是描述内容',
                }, {
                    title: '步骤二',
                    description: '这是描述内容这是描述内容',
                }, {
                    title: '步骤三',
                    description: '这是描述内容这是描述内容',
                }],
                onNext(self, result) {
                    console.warn('下一步', result);
                },
                onPrevious(self, result) {
                    console.warn('上一步', result);
                }
            }, {
                el: '#button1',
                text: '上一步',
                onClick(self){
                    const view = Lego.getView('#steps1');
                    if(view) view.previous();
                }
            }, {
                el: '#button2',
                text: '下一步',
                onClick(self){
                    const view = Lego.getView('#steps1');
                    if(view) view.next();
                }
            }, {
                el: '#button3',
                text: '上一步',
                onClick(self){
                    const view = Lego.getView('#steps2');
                    if(view) view.previous();
                }
            }, {
                el: '#button4',
                text: '下一步',
                onClick(self){
                    const view = Lego.getView('#steps2');
                    if(view) view.next();
                }
            }, {
                el: '#reply1',
                iconsUrl: '/example/dist/img/face_icons/',
                onSubmit(self, result){
                    console.warn('回复框', self, result);
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
        this.$('#content').attr('contenteditable', true);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <steps id="steps1"></steps>
            </div>
            <div class="col-sm-6">
              <buttons id="button1"></buttons>
              <buttons id="button2"></buttons>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <steps id="steps2"></steps>
            </div>
            <div class="col-sm-6">
              <buttons id="button3"></buttons>
              <buttons id="button4"></buttons>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <reply id="reply1"></reply>
            </div>
            <div class="col-sm-6">
                <p>
                  <button class="btn btn-primary" type="button" id="collapseBtn">
                    展开/折叠
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-block">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </div>
                <p>
                  <button class="btn btn-primary" type="button" id="collapseBtn2">
                    展开/折叠
                  </button>
                </p>
                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">
                  <div class="">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </div>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
