import Navs from '../../../../dist/Navs';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const data = [{
            key: 'mav1',
            title: '菜单一'
        },{
            key: 'mav2',
            title: '菜单二'
        },{
            key: 'mav3',
            title: '菜单三'
        },{
            key: 'mav4',
            title: '菜单四',
            disabled: true
        }];
        const options = {
            components: [{
                el: '#navs1',
                type: 'base',
                defaultActiveKey: 'mav1',
                onClick(e, item){
                    console.warn('点击了菜单1', item);
                },
                data: data
            }, {
                el: '#navs2',
                type: 'inline',
                defaultActiveKey: 'mav2',
                onClick(e, item){
                    console.warn('点击了菜单2', item);
                },
                data: data
            }, {
                el: '#navs3',
                type: 'tabs',
                defaultActiveKey: 'mav2',
                onClick(e, item){
                    console.warn('点击了菜单3', item);
                },
                data: data
            }, {
                el: '#navs4',
                type: 'pills',
                defaultActiveKey: 'mav3',
                onClick(e, item){
                    console.warn('点击了菜单4', item);
                },
                data: data
            }, {
                el: '#navs5',
                type: 'pills-stacked',
                defaultActiveKey: 'mav2',
                onClick(e, item){
                    console.warn('点击了菜单5', item);
                },
                data: data
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
              <navs id="navs1"></navs>
            </div>
            <div class="col-sm-6">
              <navs id="navs2"></navs>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <navs id="navs3"></navs>
            </div>
            <div class="col-sm-6">
              <navs id="navs4"></navs>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <navs id="navs5"></navs>
            </div>
            <div class="col-sm-6">
              <navs id="navs6"></navs>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
