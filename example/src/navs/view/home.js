// import Navs from '../../../../dist/navs';
// import Tabs from '../../../../dist/tabs';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const data = [{
            key: 'nav1',
            value: '菜单一',
            content: 'Raw denim you probably haven heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.'
        },{
            key: 'nav2',
            value: '菜单二',
            content: 'ood truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scen'
        },{
            key: 'nav3',
            value: '菜单三',
            children: [{
                key: 'subnav1',
                value: '子菜单一',
                content: 'ccccccc'
            }, {
                key: 'subnav2',
                value: '子菜单二'
            }, {
                divider: true
            }, {
                key: 'subnav3',
                value: '子菜单三'
            }]
        },{
            key: 'nav4',
            value: '菜单四',
            disabled: true
        }];
        const options = {
            components: [{
                el: '#navs1',
                type: 'base',
                activeKey: 'nav1',
                onClick(self, item){
                    console.warn('点击了菜单1', item);
                },
                data: data
            }, {
                el: '#navs2',
                type: 'inline',
                activeKey: 'nav2',
                onClick(self, item){
                    console.warn('点击了菜单2', item);
                },
                data: data
            }, {
                el: '#navs3',
                type: 'tabs',
                activeKey: 'nav2',
                onClick(self, item){
                    console.warn('点击了菜单3', item);
                },
                data: data
            }, {
                el: '#navs4',
                type: 'pills',
                activeKey: 'nav1',
                onClick(self, item){
                    console.warn('点击了菜单4', item);
                },
                data: data
            }, {
                el: '#navs5',
                type: 'pills-stacked',
                activeKey: 'nav2',
                onClick(self, item){
                    console.warn('点击了菜单5', item);
                },
                data: data
            }, {
                el: '#tabs6',
                type: 'tabs',
                activeKey: 'nav2',
                animate: 'fade',
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
              <tabs id="tabs6"></tabs>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
