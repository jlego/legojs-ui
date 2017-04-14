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
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               disabled: !!result.key
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
                    label: '图标(未发布)',
                    component: {
                        comName: 'inputs',
                        value: '',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               icon: result
                            });
                        }
                    }
                }, {
                    label: '形状(未发布)',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               shape: result.key ? 'circle' : ''
                            });
                        },
                        data: [{
                            key: 0,
                            value: '默认'
                        }, {
                            key: 1,
                            value: 'circle'
                        }]
                    }
                }, {
                    label: '尺寸大小',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               size: result.key ? result.key : ''
                            });
                        },
                        data: [{
                            key: 0,
                            value: '默认'
                        }, {
                            key: 'sm',
                            value: '小'
                        }, {
                            key: 'lg',
                            value: '大'
                        }]
                    }
                }, {
                    label: '加载状态(未发布)',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               loading: !!result.key
                            });
                        },
                        data: [{
                            key: 0,
                            value: '完成'
                        }, {
                            key: 1,
                            value: '加载中'
                        }]
                    }
                }, {
                    label: '点击回调',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                                onClick: result.key ? function(self, event){} : undefined
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
