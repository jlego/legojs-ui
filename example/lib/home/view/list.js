var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div>\n          <h1>hello world!</h1>\n          ', '\n          <home id="test"></home>\n        </div>'], ['<div>\n          <h1>hello world!</h1>\n          ', '\n          <home id="test"></home>\n        </div>']),
    _templateObject2 = _taggedTemplateLiteral(['<a href="#/home/list" style="display:block;">', '</a>\n'], ['<a href="#/home/list" style="display:block;">', '</a>\\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_Lego$UI$Baseview) {
    _inherits(ListView, _Lego$UI$Baseview);

    function ListView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ListView);

        var options = {
            events: {
                'click #test': 'theClick'
            },
            listen: {
                'data_update': function data_update(data) {
                    debug.warn('ttttttttttt', data);
                }
            }
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, options));
    }

    _createClass(ListView, [{
        key: 'render',
        value: function render() {
            var options = this.options.data || [];
            debug.warn('更新了视图', options);
            var vDom = hx(_templateObject, options.map(function (model, i) {
                return hx(_templateObject2, model.last);
            }));
            return vDom;
        }
    }, {
        key: 'theClick',
        value: function theClick(event) {
            event.stopPropagation();
            debug.warn('66666666666');
        }
    }]);

    return ListView;
}(Lego.UI.Baseview);

export default ListView;