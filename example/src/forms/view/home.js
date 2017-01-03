import Search from '../../../../dist/Search';
import Select from '../../../../dist/Select';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const data = [{
            key: '0',
            value: '不限'
        }, {
            key: 'so1',
            value: '选项一'
        }, {
            key: 'so2',
            value: '选项二选项二选项二fffdf'
        }, {
            key: 'so3',
            value: '选项三'
        }];
        const options = {
            components: [{
                el: '#search1',
                hasSelect: true,
                onClick(result) {
                    console.warn('点击了搜索框', result);
                },
                data: data
            }, {
                el: '#search2',
                placeholder: '输入关键字',
                onClick(result) {
                    console.warn('点击了搜索框2', result);
                }
            }, {
                el: '#select3',
                placeholder: '请选择',
                onChange(result) {
                    console.warn('点击了选项框1', result);
                },
                data: data
            }, {
                el: '#select4',
                placeholder: '请选择',
                eventName: 'click',
                onChange(result) {
                    console.warn('点击了选项框2', result);
                },
                value: {
                    key: 'so2',
                    value: '选项二选项二选项二'
                },
                data: data
            }, {
                el: '#select5',
                placeholder: '请选择',
                multiple: true,
                // eventName: 'click',
                onChange(result) {
                    console.warn('点击了选项框3', result);
                },
                // value: {
                //     key: 'so2',
                //     value: '选项二选项二选项二'
                // },
                data: [{
                    key: '0',
                    value: '不限'
                }, {
                    key: 'so1',
                    value: '选项一'
                }, {
                    key: 'so2',
                    value: '选项二选项二选项二fffdf'
                }, {
                    key: 'so3',
                    value: '选项三'
                }]
            }, {
                el: '#select6',
                placeholder: '请选择',
                multiple: true,
                // eventName: 'click',
                onChange(result) {
                    console.warn('点击了选项框4', result);
                },
                value: [{
                    key: 'so2',
                    value: '选项二选项二选项二'
                },{
                    key: 'so3',
                    value: '选项三'
                }],
                data: [{
                    key: '0',
                    value: '不限'
                }, {
                    key: 'so1',
                    value: '选项一'
                }, {
                    key: 'so2',
                    value: '选项二选项二选项二fffdf'
                }, {
                    key: 'so3',
                    value: '选项三'
                }]
            }, {
                el: '#select7',
                placeholder: '请选择',
                multiple: true,
                showResultType: 'text',
                onChange(result) {
                    console.warn('点击了选项框5', result);
                },
                data: [{
                    key: '0',
                    value: '不限'
                }, {
                    key: 'so1',
                    value: '选项一'
                }, {
                    key: 'so2',
                    value: '选项二选项二选项二fffdf'
                }, {
                    key: 'so3',
                    value: '选项三'
                }]
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
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
              <select id="select3"></select>
            </div>
            <div class="col-sm-6">
              <select id="select4"></select>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <select id="select5"></select>
            </div>
            <div class="col-sm-6">
              <select id="select6"></select>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <select id="select7"></select>
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