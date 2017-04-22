// import tags from '../../../../dist/tags';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#tags1',
                name: 'user',
                value: [{
                    key: 't1',
                    value: 'tag1'
                }, {
                    key: 't2',
                    value: 'tag2'
                }, {
                    key: 't3',
                    value: 'tag3'
                }, {
                    key: 't4',
                    value: 'tag4'
                }],
                onClickBtn(self, event) {
                    console.warn('添加人员', event);
                },
                onChange(self, item){
                    item.color = 'red';
                    console.warn('999999999', item);
                    self.refresh();
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
              <tags id="tags1"></tags>
            </div>
            <div class="col-sm-6">
              <tags id="tags2"></tags>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <tags id="tags3"></tags>
            </div>
            <div class="col-sm-6">
              <tags id="tags4"></tags>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
