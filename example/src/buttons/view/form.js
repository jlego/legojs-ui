class View extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            components: [{
                el: '#form1',
                layout: 'inline',
                labelCols: 4,
                comCols: 8,
                showSubmit: false,
                data: [{
                    label: '文本',
                    // help: '注意事项',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            debug.warn('修改了按钮文本为:', result);
                            Lego.Eventer.trigger('updateView', {
                               text: result
                            });
                        }
                    }
                }, {
                    label: '类型',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            console.warn('点击了搜索框2', result);
                        }
                    }
                }, {
                    label: '风格',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            debug.warn('修改了按钮风格为:', result);
                            Lego.Eventer.trigger('updateView', {
                               type: result.value
                            });
                        },
                        data: [{
                            key: 'secondary',
                            value: '默认'
                        }, {
                            key: 'info',
                            value: 'info'
                        }, {
                            key: 'primary',
                            value: 'primary'
                        }, {
                            key: 'link',
                            value: 'link'
                        }, {
                            key: 'success',
                            value: 'success'
                        }, {
                            key: 'warning',
                            value: 'warning'
                        }, {
                            key: 'danger',
                            value: 'danger'
                        }]
                    }
                }, {
                    label: '是否禁用',
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
            <h5>配置参数</h5>
            <forms id="form1"></forms>
        </div>
        `;
    }
}
Lego.components('formcom', View);
export default View;
