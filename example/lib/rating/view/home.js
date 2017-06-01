var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <rating id="rating1"></rating>\n            </div>\n            <div class="col-sm-6">\n              <rating id="rating2"></rating>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <rating id="rating3"></rating>\n            </div>\n            <div class="col-sm-6">\n              <rating id="rating4"></rating>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <rating id="rating1"></rating>\n            </div>\n            <div class="col-sm-6">\n              <rating id="rating2"></rating>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <rating id="rating3"></rating>\n            </div>\n            <div class="col-sm-6">\n              <rating id="rating4"></rating>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            components: [{
                el: '#rating1',
                name: 'ratingname',
                value: 2,
                showLabel: true,
                size: 'sm',
                onChange: function onChange(self, result) {
                    console.warn('点击了评分组件', result);
                }
            }, {
                el: '#rating2',
                name: 'ratingname2',
                value: 5,
                fractions: 2,
                onChange: function onChange(self, result) {
                    console.warn('点击了评分组件2', result);
                }
            }, {
                el: '#rating3',
                name: 'ratingname3',
                value: 2,
                showLabel: true,
                readonly: true,
                onChange: function onChange(self, result) {
                    console.warn('点击了评分组件3', result);
                }
            }, {
                el: '#rating4',
                name: 'ratingname3',
                size: 'lg',
                value: 3,
                showLabel: true,
                fractions: 2,
                onChange: function onChange(self, result) {
                    console.warn('点击了评分组件4', result);
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