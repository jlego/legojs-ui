import Forms from '../../../../dist/Forms';

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
                el: '#form1',
                layout: 'inline',
                data: [{
                    label: '名称',
                    help: '注意事项',
                    required: false,
                    componentName: 'inputs',
                    // items: []
                }, {
                    label: '名称2',
                    required: false,
                    componentName: 'inputs',
                    // items: []
                }, {
                    label: '名称2',
                    required: false,
                    componentName: 'selects',
                    // items: []
                }, {
                    label: '名称3',
                    required: false,
                    componentName: 'selects',
                    // items: []
                }],
                components: [{
                    el: '#component_0',
                    name: 'name',
                    hasSelect: true,
                    onClick(result) {
                        console.warn('点击了搜索框', result);
                    }
                }, {
                    el: '#component_1',
                    name: 'old',
                    placeholder: '输入关键字',
                    onClick(result) {
                        console.warn('点击了搜索框2', result);
                    }
                }, {
                    el: '#component_2',
                    name: 'book',
                    placeholder: '请选择',
                    onChange(result) {
                        console.warn('点击了选项框1', result);
                    },
                    data: $.extend(true, [], data)
                }, {
                    el: '#component_3',
                    name: 'time',
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
                }],
                onSubmit(data){
                    console.warn('点击了提交', data);
                    return false;
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
              <forms id="form1"></forms>
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
