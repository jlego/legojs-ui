var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        '], ['\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Alert from '../../../../dist/alert';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            events: {
                'click .alert': 'theClick'
            },
            components: [{
                el: '#alert1',
                type: 'success',
                closable: true,
                showIcon: false,
                message: '警告提示内容'
            }, {
                el: '#alert2',
                type: 'info',
                closable: true,
                showIcon: true,
                message: '警告提示内容'
            }, {
                el: '#alert3',
                type: 'warning',
                closable: true,
                showIcon: false,
                message: '警告提示内容',
                description: '警告提示的辅助性文字介绍'
            }, {
                el: '#alert4',
                type: 'error',
                closable: true,
                showIcon: true,
                message: '警告提示内容',
                description: '警告提示的辅助性文字介绍'
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
    }, {
        key: 'theClick',
        value: function theClick(event, target) {
            var targetEl = $(event.currentTarget);
            var theView = Lego.getView(targetEl);
            switch (theView.options.type) {
                case 'success':
                    theView.options.type = 'info';
                    break;
                case 'info':
                    theView.options.type = 'warning';
                    break;
                case 'warning':
                    theView.options.type = 'error';
                    break;
                case 'error':
                    theView.options.type = 'success';
                    break;
            }
        }
    }]);

    return HomeView;
}(Lego.UI.Baseview);

export default HomeView;