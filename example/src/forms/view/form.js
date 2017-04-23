// import Forms from '../../../../dist/forms';
// import Search from '../../../../dist/search';
// import Selects from '../../../../dist/selects';
// import Datepicker from '../../../../dist/datepicker';
// import Inputs from '../../../../dist/inputs';

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
                    text: '静态内容'
                }, {
                    label: '名称1',
                    help: '注意事项',
                    required: true,
                    rule: {
                        // required: true
                    },
                    message: {
                        required: '请先填写名称'
                    },
                    component: {
                        comName: 'inputs',
                        name: 'name',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        }
                    }
                }, {
                    label: '名称2',
                    required: true,
                    rule: {
                        // required: true
                    },
                    message: {
                        required: '请先填写名称2'
                    },
                    component: {
                        comName: 'inputs',
                        name: 'old',
                        placeholder: '输入关键字',
                        onChange(self, result) {
                            console.warn('点击了搜索框2', result);
                        }
                    }
                }, {
                    label: '名称3',
                    required: true,
                    rule: {
                        // required: true
                    },
                    message: {
                        required: '请先填写名称3'
                    },
                    component: {
                        comName: 'selects',
                        name: 'book',
                        placeholder: '请选择',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        },
                        data: $.extend(true, [], data)
                    }
                }, {
                    label: '名称4',
                    required: true,
                    rule: {
                        // required: true
                    },
                    message: {
                        required: '请先填写名称4'
                    },
                    component: {
                        comName: 'selects',
                        name: 'time',
                        placeholder: '请选择',
                        onChange(self, result) {
                            console.warn('点击了选项框2', result);
                        },
                        value: {
                            key: 'so2',
                            value: '选项二选项二选项二'
                        },
                        data: $.extend(true, [], data)
                    }
                }],
                onSubmit(self, data){
                    console.warn('点击了提交', data);
                    return false;
                }
            }, {
                el: '#form2',
                data: [{
                    label: '名称',
                    help: '注意事项',
                    required: false,
                    component: {
                        comName: 'inputs',
                        name: 'name',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        }
                    }
                }, {
                    label: '名称2',
                    required: false,
                    component: {
                        comName: 'inputs',
                        name: 'old',
                        placeholder: '输入关键字',
                        onChange(self, result) {
                            console.warn('点击了搜索框2', result);
                        }
                    }
                }, {
                    label: '名称2',
                    required: false,
                    component: {
                        comName: 'selects',
                        name: 'book',
                        placeholder: '请选择',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        },
                        data: $.extend(true, [], data)
                    }
                }, {
                    label: '名称3',
                    required: false,
                    component: {
                        comName: 'selects',
                        name: 'time',
                        placeholder: '请选择',
                        onChange(self, result) {
                            console.warn('点击了选项框2', result);
                        },
                        value: {
                            key: 'so2',
                            value: '选项二选项二选项二'
                        },
                        data: $.extend(true, [], data)
                    }
                }],
                onSubmit(self, data){
                    console.warn('点击了提交2', data);
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
              <forms id="form2"></forms>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
