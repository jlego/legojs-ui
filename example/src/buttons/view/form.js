class View extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            components: [{
                el: '#form1',
                layout: 'inline',
                data: [{
                    label: '名称1',
                    help: '注意事项',
                    component: {
                        comName: 'inputs',
                        name: 'name',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        }
                    }
                }, {
                    label: '名称2',
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
                    component: {
                        comName: 'selects',
                        name: 'book',
                        placeholder: '请选择',
                        onChange(self, result) {
                            console.warn('点击了搜索框', result);
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
                    }
                }, {
                    label: '名称4',
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
                    }
                }],
                onSubmit(self, data){
                    console.warn('点击了提交', data);
                    return false;
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        return hx`
        <div class="col-right">
            <h5>配置项</h5>
            <forms id="form1"></forms>
        </div>
        `;
    }
}
Lego.components('formcom', View);
export default View;
