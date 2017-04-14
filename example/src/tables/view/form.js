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
                    label: '标题',
                    component: {
                        comName: 'inputs',
                        type: 'textarea',
                        value: '',
                        onChange(self, result) {
                            if(result.indexOf('function') == 0){
                                result = result.replace(/\n/gi, "");
                                eval("result = " + result);
                            }
                            Lego.Eventer.trigger('updateView', {
                               title: result
                            });
                        }
                    }
                }, {
                    label: '内容不换行',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               isNowrap: !!result.key
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
                    label: '可选择行',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               rowSelection: !!result.key
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
                    label: '尺寸大小',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               size: result.key
                            });
                        },
                        data: [{
                            key: 'sm',
                            value: '小'
                        }, {
                            key: '',
                            value: '中'
                        }, {
                            key: 'lg',
                            value: '大'
                        }]
                    }
                }, {
                    label: '列数据',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                            //    columns: result
                            });
                        }
                    }
                }, {
                    label: '行类名',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               rowClassName: result
                            });
                        }
                    }
                }, {
                    label: '默认展开的行key',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               expandedRowKeys: result ? result.split(',') : []
                            });
                        }
                    }
                }, {
                    label: '展开所有行',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               expandAllRows: !!result.key
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
                    label: '加载中',
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
                            value: '否'
                        }, {
                            key: 1,
                            value: '是'
                        }]
                    }
                }, {
                    label: '默认展开的行key',
                    component: {
                        comName: 'inputs',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               expandedRowKeys: result ? result.split(',') : []
                            });
                        }
                    }
                }, {
                    label: '显示边框',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               bordered: !!result.key
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
                    label: '固定表头',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               fixedHeader: !!result.key
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
                    label: '显示表头',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               showHeader: !!result.key
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
                    label: '显示表体',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               showBodyer: !!result.key
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
                    label: '显示表尾',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               showFooter: !!result.key
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
                    label: '显示设置',
                    component: {
                        comName: 'selects',
                        placeholder: '请选择',
                        onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                               showSetting: !!result.key
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
