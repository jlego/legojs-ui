var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <transfer id="transfer1"></transfer>\n            </div>\n            <div class="col-sm-6">\n              <transfer id="transfer2"></transfer>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <transfer id="transfer1"></transfer>\n            </div>\n            <div class="col-sm-6">\n              <transfer id="transfer2"></transfer>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Transfer from '../../../../dist/transfer';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            components: [{
                el: '#transfer1',
                titles: ['左边标题', '右边标题'],
                // showSearch: true,
                onChange: function onChange(self, result) {
                    console.warn('穿梭框的值', result);
                },

                filterParentNode: true,
                data: [{
                    id: 't1',
                    name: "test1",
                    checked: true,
                    open: true,
                    isParent: true,
                    children: [{
                        id: 't1_1',
                        name: "test1_1",
                        checked: true
                    }, {
                        id: 't1_2',
                        name: "test1_2",
                        checked: true
                    }]
                }, {
                    id: 't2',
                    name: "test2",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }, {
                    id: 't3',
                    name: "test3",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }, {
                    id: 't4',
                    name: "test4",
                    open: true,
                    children: [{
                        id: 't2_1',
                        name: "test2_1"
                    }, {
                        id: 't2_2',
                        name: "test2_2"
                    }]
                }]
            }, {
                el: '#transfer2',
                titles: ['左边标题', '右边标题'],
                showSearch: true,
                onChange: function onChange(self, result) {
                    console.warn('穿梭框的值2', result);
                },

                data: [{
                    id: 't1',
                    name: "test1",
                    checked: true
                }, {
                    id: 't1_1',
                    name: "test1_1",
                    checked: true
                }, {
                    id: 't1_2',
                    name: "test1_2",
                    checked: true
                }, {
                    id: 't2',
                    name: "test2"
                }, {
                    id: 't2_1',
                    name: "test2_1"
                }, {
                    id: 't2_2',
                    name: "test2_2"
                }, {
                    id: 't3',
                    name: "test3"
                }, {
                    id: 't3_1',
                    name: "test3_1"
                }, {
                    id: 't3_2',
                    name: "test3_2"
                }, {
                    id: 't4',
                    name: "test4"
                }, {
                    id: 't4_1',
                    name: "test4_1"
                }, {
                    id: 't4_2',
                    name: "test4_2"
                }]
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