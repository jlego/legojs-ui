var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert \u63D0\u793A\u6846</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert \u63D0\u793A\u6846</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexView = function (_Lego$UI$Baseview) {
    _inherits(IndexView, _Lego$UI$Baseview);

    function IndexView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, IndexView);

        var options = {
            currentTab: 0
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (IndexView.__proto__ || Object.getPrototypeOf(IndexView)).call(this, options));
    }

    _createClass(IndexView, [{
        key: 'render',
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.currentTab == 0 ? 'active' : '');
            return vDom;
        }
    }]);

    return IndexView;
}(Lego.UI.Baseview);

export default IndexView;