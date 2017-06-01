var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div class="col-right page-panel-bg scrollbar">\n            <h6>\u914D\u7F6E\u53C2\u6570</h6>\n            <forms id="form1"></forms>\n        </div>\n        '], ['\n        <div class="col-right page-panel-bg scrollbar">\n            <h6>\u914D\u7F6E\u53C2\u6570</h6>\n            <forms id="form1"></forms>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Lego$UI$Baseview) {
    _inherits(View, _Lego$UI$Baseview);

    function View() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, View);

        var options = {
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
                        onChange: function onChange(self, result) {
                            if (result.indexOf('function') == 0) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                                //    columns: result
                            });
                        }
                    }
                }, {
                    label: '行类名',
                    component: {
                        comName: 'inputs',
                        onChange: function onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                                rowClassName: result
                            });
                        }
                    }
                }, {
                    label: '默认展开的行key',
                    component: {
                        comName: 'inputs',
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
                            Lego.Eventer.trigger('updateView', {
                                onClose: result.key ? function (self, event) {} : undefined
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
                onSubmit: function onSubmit(self, data) {
                    console.warn('点击了提交', data);
                    return false;
                }
            }]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, options));
    }

    _createClass(View, [{
        key: 'render',
        value: function render() {
            return hx(_templateObject);
        }
    }]);

    return View;
}(Lego.UI.Baseview);

Lego.components('formcom', View);
export default View;