// import Transfer from '../../../../dist/transfer';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#transfer1',
                titles: ['左边标题', '右边标题'],
                // showSearch: true,
                onChange(self, result) {
                    console.warn('穿梭框的值', result);
                },
                filterParentNode: true,
                data: [{
                    id: 't1',
                    name: "test1",
                    checked: true,
                    open: true,
                    children: [{
                        id: 't1_1',
                        name: "test1_1",
                        checked: true
                    }, {
                        id: 't1_2',
                        name: "test1_2",
                        checked: true
                    }]
                }, {
                    id: 't2',
                    name: "test2",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }, {
                    id: 't3',
                    name: "test3",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }, {
                    id: 't4',
                    name: "test4",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }]
            }, {
                el: '#transfer2',
                titles: ['左边标题', '右边标题'],
                showSearch: true,
                onChange(self, result) {
                    console.warn('穿梭框的值2', result);
                },
                data: [{
                    id: 't1',
                    name: "test1",
                    checked: true,
                }, {
                    id: 't1_1',
                    name: "test1_1",
                    checked: true
                }, {
                    id: 't1_2',
                    name: "test1_2",
                    checked: true
                }, {
                    id: 't2',
                    name: "test2"
                }, {
                    id: 't2_1',
                    name: "test2_1"
                }, {
                    id: 't2_2',
                    name: "test2_2"
                }, {
                    id: 't3',
                    name: "test3"
                }, {
                    id: 't3_1',
                    name: "test3_1"
                }, {
                    id: 't3_2',
                    name: "test3_2"
                }, {
                    id: 't4',
                    name: "test4"
                }, {
                    id: 't4_1',
                    name: "test4_1"
                }, {
                    id: 't4_2',
                    name: "test4_2"
                }]
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
              <transfer id="transfer1"></transfer>
            </div>
            <div class="col-sm-6">
              <transfer id="transfer2"></transfer>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
