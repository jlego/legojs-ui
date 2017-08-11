// import tags from '../../../../dist/tags';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let data = [{
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
        }, {
            key: 't5',
            value: 'tag2'
        }, {
            key: 't6',
            value: 'tag3'
        }, {
            key: 't7',
            value: 'tag4'
        }, {
            key: 't8',
            value: 'tag2'
        }, {
            key: 't9',
            value: 'tag3'
        }, {
            key: 't10',
            value: 'tag4'
        }];
        const options = {
            components: [{
                el: '#tags1',
                name: 'user',
                data: Array.from(data),
                // addBtnOption: {
                //     size: ''
                // },
                onAdd(self, event) {
                    console.warn('添加人员', event);
                },
                onSelected(self, item){
                    item.selected = true;
                    console.warn('999999999', item);
                    self.refresh();
                }
            }, {
                el: '#tags2',
                name: 'user2',
                showMoreBtn: true,
                showAddBtn: false,
                showCleanBtn: true,
                // readonly: true,
                data: [{
                    key: 'name',
                    value: '运营商: 花生电商'
                }, {
                    key: 'status',
                    value: '状态: 正常'
                }, {
                    key: 'createDate',
                    value: '创建日期: 2017-06-20 09:30:00'
                }, {
                    key: 'name1',
                    value: '运营商: 花生电商'
                }, {
                    key: 'createDate1',
                    value: '创建日期: 2017-06-20 09:30:00'
                }, {
                    key: 'status1',
                    value: '状态: 正常'
                }, {
                    key: 'name2',
                    value: '运营商: 花生电商花生电商花生电商'
                }, {
                    key: 'status2',
                    value: '状态: 正常'
                }, {
                    key: 'createDate2',
                    value: '创建日期: 2017-06-20 09:30:00'
                }],
                onClean(self, event) {
                    console.warn('清空条件', event);
                    self.cleanAll();
                },
                onSelected(self, item){
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
          <div class="row" style="margin-bottom: 0px;">
            <div class="col-sm-6">
              <tags id="tags1"></tags>
            </div>
            <div class="col-sm-6">
              <tags id="tags2"></tags>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;background-color: #ccc;min-height: 100px;">
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
