import Search from '../../../../dist/Search';
import Selects from '../../../../dist/Selects';
import Datepicker from '../../../../dist/Datepicker';
import Inputs from '../../../../dist/Inputs';

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
                data: $.extend(true, [], data)
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
                data: $.extend(true, [], data)
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
                data: $.extend(true, [], data)
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
                data: $.extend(true, [], data)
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
                }, {
                    key: 'so3',
                    value: '选项三'
                }],
                data: $.extend(true, [], data)
            }, {
                el: '#datepicker7',
                type: 'date',
                name: 'datepicker1',
                onChange(result) {
                    console.warn('点击了时间选项框5', result);
                }
            }, {
                el: '#datepicker8',
                type: 'range',
                startName: 'datepicker2',
                endName: 'datepicker3',
                onChange(result) {
                    console.warn('点击了时间选项框6', result);
                }
            }, {
                el: '#datepicker9',
                inline: true,
                onChange(result) {
                    console.warn('点击了时间选项框7', result);
                }
            }, {
                el: '#input10',
                placeholder: '这是输入框',
                onChange(result) {
                    console.warn('点击了输入框1', result);
                },
                style: {
                    marginBottom: 20
                }
            }, {
                el: '#input11',
                placeholder: '这是输入框',
                addonBefore: true,
                addonAfter: true,
                prefix: 'Http://',
                suffix: hx`<i class="anticon anticon-setting"></i>`,
                onChange(result) {
                    console.warn('点击了输入框2', result);
                },
                style: {
                    marginBottom: 20
                }
            }, {
                el: '#input12',
                type: 'textarea',
                placeholder: '这是文本框',
                rows: 10,
                onChange(result) {
                    console.warn('点击了文本框2', result);
                }
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
              <selects id="select3"></selects>
            </div>
            <div class="col-sm-6">
              <selects id="select4"></selects>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <selects id="select5"></selects>
            </div>
            <div class="col-sm-6">
              <selects id="select6"></selects>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
              <datepicker id="datepicker7"></datepicker>
            </div>
            <div class="col-sm-6">
              <datepicker id="datepicker8"></datepicker>
            </div>
          </div>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-sm-6">
                <datepicker id="datepicker9"></datepicker>
            </div>
            <div class="col-sm-6">
                <inputs id="input10"></inputs>
                <inputs id="input11"></inputs>
                <inputs id="input12"></inputs>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
