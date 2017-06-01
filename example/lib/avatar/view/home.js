var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Avatar from '../../../../dist/avatar';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            components: [{
                el: '#avatar1',
                name: 'user',
                multiple: false,
                value: [{
                    key: 'userId',
                    value: './asset/demo/avatar-4.jpg',
                    name: '张三'
                }],
                onAdd: function onAdd(self, result) {
                    console.warn('添加人员', result);
                }
            }, {
                el: '#avatar2',
                name: 'users',
                multiple: true,
                value: [{
                    key: 'user1',
                    value: './asset/demo/avatar-5.jpg',
                    name: '张小三'
                }, {
                    key: 'user2',
                    value: './asset/demo/avatar-6.jpg',
                    name: '李四李四'
                }, {
                    key: 'user3',
                    value: './asset/demo/avatar-7.jpg',
                    name: '老五'
                }],
                onAdd: function onAdd(self, result) {
                    console.warn('添加人员2', result);
                }
            }, {
                el: '#avatar3',
                name: 'user',
                multiple: false,
                readonly: true,
                value: [{
                    key: 'userId',
                    value: './asset/demo/avatar-4.jpg',
                    name: '张三'
                }],
                onAdd: function onAdd(self, result) {
                    console.warn('添加人员', result);
                }
            }, {
                el: '#avatar4',
                name: 'users',
                multiple: true,
                readonly: true,
                value: [{
                    key: 'user1',
                    value: './asset/demo/avatar-5.jpg',
                    name: '张小三'
                }, {
                    key: 'user2',
                    value: './asset/demo/avatar-6.jpg',
                    name: '李四李四'
                }, {
                    key: 'user3',
                    value: './asset/demo/avatar-7.jpg',
                    name: '老五'
                }],
                onAdd: function onAdd(self, result) {
                    console.warn('添加人员2', result);
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