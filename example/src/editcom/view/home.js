class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#editcom1',
                name: 'editcomname',
                size: 'sm',
                text: '点击了编辑组件',
                components: [{
                    key: 'inputs1',
                    comName: 'inputs',
                    onChange(self, value){
                        console.warn(self, value);
                        this.context.options.value = value;
                        this.context.options.text = value;
                        this.context.close();
                    }
                }],
                onEdit(self){
                    console.warn('点击了编辑组件', self);
                },   //编辑回调
                onFinish(self) {
                    console.warn('完成了编辑', self);
                }
            }, {
                el: '#editcom2',
                name: 'editcomname2',
                size: 'sm',
                html: hx`<a href="#">点击了编辑组件2</a>`,
                value: '点击了编辑组件2',
                components: [{
                    key: 'inputs1',
                    comName: 'inputs',
                    onChange(self, value){
                        console.warn(self, value);
                        this.context.options.value = value;
                        this.context.options.html = hx`<a href="#">${value}</a>`;
                        this.context.close();
                    }
                }],
                onEdit(self){
                    console.warn('点击了编辑组件2', self);
                },   //编辑回调
                onFinish(self) {
                    console.warn('完成了编辑2', self);
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <editcom id="editcom1"></editcom>
            </div>
            <div class="col-sm-6">
              <editcom id="editcom2"></editcom>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <editcom id="editcom3"></editcom>
            </div>
            <div class="col-sm-6">
              <editcom id="editcom4"></editcom>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
