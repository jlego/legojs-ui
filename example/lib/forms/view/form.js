var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Forms from '../../../../dist/forms';
// import Search from '../../../../dist/search';
// import Selects from '../../../../dist/selects';
// import Datepicker from '../../../../dist/datepicker';
import Areapicker from '../../../ux/areapicker/index';
import '../../../ux/areapicker/index.css';
import Data from '../../../ux/areapicker/data_static';
import Geolocation from '../../../ux/geolocation/index';
import '../../../ux/geolocation/index.css';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var data = [{
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
        }, {
            key: 'so4',
            value: '选项四'
        }, {
            key: 'so5',
            value: '选项二选项二选项二fffdf五'
        }, {
            key: 'so6',
            value: '选项三六'
        }, {
            key: 'so7',
            value: '选项一'
        }, {
            key: 'so8',
            value: '选项二选项二选项二fffdf'
        }];
        var options = {
            components: [{
                el: '#form1',
                layout: 'inline',
                data: [{
                    label: '名称',
                    text: '静态内容'
                }, {
                    label: '名称1',
                    help: '注意事项',
                    rule: {
                        required: true
                    },
                    message: {
                        required: '请先填写名称'
                    },
                    component: {
                        comName: 'inputs',
                        name: 'name',
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
                            console.warn('点击了搜索框2', result);
                        }
                    }
                }, {
                    label: '名称3',
                    rule: {
                        required: true
                    },
                    message: {
                        required: '请先填写名称3'
                    },
                    component: {
                        comName: 'selects',
                        name: 'book',
                        placeholder: '请选择',
                        onChange: function onChange(self, result) {
                            console.warn('点击了搜索框', result);
                        },

                        data: $.extend(true, [], data)
                    }
                }, {
                    label: '名称4',
                    rule: {
                        required: true
                    },
                    message: {
                        required: '请先填写名称4'
                    },
                    component: {
                        comName: 'selects',
                        name: 'time',
                        placeholder: '请选择',
                        onChange: function onChange(self, result) {
                            console.warn('点击了选项框2', result);
                        },

                        value: {
                            key: 'so2',
                            value: '选项二选项二选项二'
                        },
                        data: $.extend(true, [], data)
                    }
                }, {
                    label: '名称5',
                    rule: {
                        required: true
                    },
                    message: {
                        required: '请先选择'
                    },
                    component: {
                        comName: 'chkgroup',
                        type: 'radio',
                        layout: 'inline',
                        name: 'dddd',
                        data: [{
                            label: 'sadfa',
                            value: '1',
                            checked: true
                        }, {
                            label: 'sadfa2',
                            value: '2'
                        }]
                    }
                }, {
                    label: '名称6',
                    rule: {
                        required: true
                    },
                    message: {
                        required: '请先选择'
                    },
                    component: {
                        comName: 'switchs',
                        name: 'ssss',
                        checked: true,
                        onChange: function onChange(self, result) {
                            console.warn(self, result);
                        }
                    }
                }, {
                    label: '名称7',
                    component: {
                        comName: 'slider',
                        name: 'sss2',
                        range: true,
                        value: [2, 6],
                        // enabled: false,
                        // orientation: 'vertical',
                        // ticks: '[1,2,3]',
                        // ticks_positions: '["short", "medium", "long"]',
                        // ticks_labels: '["short", "medium", "long"]',
                        onChange: function onChange(self, result) {
                            console.warn(self, result);
                        }
                    }
                }, {
                    label: '名称8',
                    component: {
                        comName: 'areapicker',
                        rootId: '86',
                        data: Data,
                        onChange: function onChange(self, result) {
                            // console.warn(self, result);
                        }
                    }
                }, {
                    label: '名称9',
                    component: {
                        comName: 'geolocation',
                        name: 'sdfasd',
                        mapApi: 'https://webapi.amap.com/maps?v=1.3&key=acc8b6f1622ec84e5eb7ad4765b14998',
                        // data: {},
                        onChange: function onChange(self, result) {
                            console.warn(self, result);
                        }
                    }
                }],
                onSubmit: function onSubmit(self, data) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
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
                        onChange: function onChange(self, result) {
                            console.warn('点击了选项框2', result);
                        },

                        value: {
                            key: 'so2',
                            value: '选项二选项二选项二'
                        },
                        data: $.extend(true, [], data)
                    }
                }, {
                    label: '名称4',
                    component: {
                        comName: 'chkgroup',
                        type: 'radio',
                        name: 'dddd',
                        data: [{
                            label: 'sadfa',
                            value: '1',
                            checked: true
                        }, {
                            label: 'sadfa2',
                            value: '2'
                        }]
                    }
                }],
                onSubmit: function onSubmit(self, data) {
                    console.warn('点击了提交2', data);
                    return false;
                }
            }]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
    }

    _createClass(HomeView, [{
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject);
            return vDom;
        }
    }]);

    return HomeView;
}(Lego.UI.Baseview);

export default HomeView;