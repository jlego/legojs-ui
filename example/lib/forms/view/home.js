var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<i class="anticon anticon-setting"></i>'], ['<i class="anticon anticon-setting"></i>']),
    _templateObject2 = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Search from '../../../../dist/search';
// import Selects from '../../../../dist/selects';
// import Datepicker from '../../../../dist/datepicker';
// import Inputs from '../../../../dist/inputs';

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
        }];
        var options = {
            components: [{
                el: '#search1',
                showSelect: true,
                onSearch: function onSearch(self, result) {
                    console.warn('点击了搜索框', result, this);
                },

                data: $.extend(true, [], data)
            }, {
                el: '#search2',
                placeholder: '输入关键字',
                onSearch: function onSearch(self, result) {
                    console.warn('点击了搜索框2', result);
                }
            }, {
                el: '#select3',
                placeholder: '请选择',
                showSearch: true,
                dropdownHeight: 120,
                onChange: function onChange(self, result) {
                    console.warn('点击了选项框1', result);
                },

                data: $.extend(true, [], data)
            }, {
                el: '#select4',
                placeholder: '请选择',
                eventName: 'click',
                onChange: function onChange(self, result) {
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
                onChange: function onChange(self, result) {
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
                onChange: function onChange(self, result) {
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
                showClose: true,
                showClear: true,
                onChange: function onChange(self, result) {
                    console.warn('点击了时间选项框5', result);
                }
            }, {
                el: '#datepicker8',
                type: 'range',
                startName: 'datepicker2',
                endName: 'datepicker3',
                onChange: function onChange(self, result) {
                    console.warn('点击了时间选项框6', result);
                }
            }, {
                el: '#datepicker9',
                inline: true,
                onChange: function onChange(self, result) {
                    console.warn('点击了时间选项框7', result);
                }
            }, {
                el: '#input10',
                placeholder: '这是输入框',
                onChange: function onChange(self, result) {
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
                suffix: hx(_templateObject),
                onChange: function onChange(self, result) {
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
                onChange: function onChange(self, result) {
                    console.warn('点击了文本框2', result);
                }
            }]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
    }

    _createClass(HomeView, [{
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject2);
            return vDom;
        }
    }]);

    return HomeView;
}(Lego.UI.Baseview);

export default HomeView;