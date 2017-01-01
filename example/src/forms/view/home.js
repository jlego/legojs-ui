import Search from '../../../../dist/Search';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#search1',
                hasSelect: true,
                onClick(result){
                    console.warn('点击了搜索框', result);
                },
                data: [{
                    key: 'so1',
                    title: '选项一'
                }, {
                    key: 'so2',
                    title: '选项二选项二选项二'
                }, {
                    key: 'so3',
                    title: '选项三'
                }]
            }, {
                el: '#search2',
                placeholder: '输入关键字',
                onClick(result){
                    console.warn('点击了搜索框2', result);
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx`
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <search id="search1"></search>
            </div>
            <div class="col-sm-6">
              <search id="search2"></search>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
