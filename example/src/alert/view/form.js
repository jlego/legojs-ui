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
                    label: '内容',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               message: result
                            });
                        }
                    }
                }, {
                    label: '辅助内容',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               description: result
                            });
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
                               type: result.key
                            });
                        },
                        data: [{
                            key: 'info',
                            value: 'info'
                        }, {
                            key: 'success',
                            value: 'success'
                        }, {
                            key: 'warning',
                            value: 'warning'
                        }, {
                            key: 'error',
                            value: 'error'
                        }]
                    }
                }, {
                    label: '显示关闭按钮',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               closable: !!result.key
                            });
                        },
                        data: [{
                            key: 0,
                            value: '否'
                        }, {
                            key: 1,
                            value: '是'
                        }]
                    }
                }, {
                    label: '自定义关闭按钮',
                    component: {
                        comName: 'inputs',
                        value: '',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               closeText: result
                            });
                        }
                    }
                }, {
                    label: '显示图标',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               showIcon: result.key ? 'circle' : ''
                            });
                        },
                        data: [{
                            key: 0,
                            value: '否'
                        }, {
                            key: 1,
                            value: '是'
                        }]
                    }
                }, {
                    label: '关闭回调',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                                onClose: result.key ? function(self, event){} : undefined
                            });
                        },
                        data: [{
                            key: 0,
                            value: '否'
                        }, {
                            key: 1,
                            value: '是'
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
        <div class="col-right page-panel-bg scrollbar">
            <h6>配置参数</h6>
            <forms id="form1"></forms>
        </div>
        `;
    }
}
Lego.components('formcom', View);
export default View;
