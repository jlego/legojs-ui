var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div class="markdown scrollbar">\n                    <h6>\u6548\u679C\u56FE:</h6>\n                    <img src="', 'img/example/buttons.png" style="margin-bottom:30px;">\n                    <h6>\u53C2\u6570:</h6>\n                    ', '\n                    </div>'], ['<div class="markdown scrollbar">\n                    <h6>\u6548\u679C\u56FE:</h6>\n                    <img src="', 'img/example/buttons.png" style="margin-bottom:30px;">\n                    <h6>\u53C2\u6570:</h6>\n                    ', '\n                    </div>']),
    _templateObject2 = _taggedTemplateLiteral(['<div class="example scrollbar"><buttons id="exampleCom"></buttons></div>'], ['<div class="example scrollbar"><buttons id="exampleCom"></buttons></div>']),
    _templateObject3 = _taggedTemplateLiteral(['<div class="code scrollbar" id="md"></div>'], ['<div class="code scrollbar" id="md"></div>']),
    _templateObject4 = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Form from './form';

var table = '\n| \u5C5E\u6027    |    \u8BF4\u660E   |      \u7C7B\u578B |      \u9ED8\u8BA4\u503C |\n|:------|:-------:|--------:|--------:|\n| text   | \u6309\u94AE\u6587\u672C, text/html  | string | button |\n| type | \u6309\u94AE\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A primary dashed \u6216\u8005\u4E0D\u8BBE | string | secondary |\n| disabled   | \u662F\u5426\u7981\u7528  | boolean | false |\n| icon(\u672A\u53D1\u5E03)   | \u56FE\u6807  | string |  |\n| shape(\u672A\u53D1\u5E03)   | \u6309\u94AE\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A circle \u6216\u8005\u4E0D\u8BBE  | string |  |\n| size   | \u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A sm lg \u6216\u8005\u4E0D\u8BBE  | string |  |\n| loading(\u672A\u53D1\u5E03)   | \u6309\u94AE\u8F7D\u5165\u72B6\u6001  | boolean | false |\n| onClick   | \u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03  | function |  |\n';

var HomeView = function (_Lego$UI$Baseview) {
    _inherits(HomeView, _Lego$UI$Baseview);

    function HomeView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HomeView);

        var options = {
            scrollbar: {},
            listener: {
                'updateView': function updateView() {
                    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    var view = Lego.getView('#exampleCom'),
                        tView = Lego.getView('#tabs'),
                        pView = Lego.getView('#pageContent');
                    if (view) {
                        Object.assign(view.options, data);
                    }
                    if (tView) {
                        if (tView.options.activeKey == 'tab_3') pView.showTab();
                    }
                }
            }
        };
        Object.assign(options, opts);

        var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));

        var that = _this;
        setTimeout(function () {
            that.renderScroll();
        }, 0);
        var view = Lego.getView('#exampleCom');
        _this.oldOpts = view ? $.extend(true, {}, view.options) : {};
        return _this;
    }

    _createClass(HomeView, [{
        key: 'components',
        value: function components() {
            var that = this;
            this.addCom([{
                el: '#tabs',
                type: 'tabs',
                activeKey: 'tab_1',
                navClassName: 'nav-fill',
                data: [{
                    key: 'tab_1',
                    value: '参数说明',
                    content: hx(_templateObject, Lego.config.rootUri, hx(markdown.makeHtml(table)))
                }, {
                    key: 'tab_2',
                    value: '实例效果',
                    content: hx(_templateObject2)
                }, {
                    key: 'tab_3',
                    value: '生成代码',
                    content: hx(_templateObject3)
                }],
                onChange: function onChange(self, result) {
                    if (result.key == 'tab_3') {
                        that.showTab();
                    }
                },

                components: [{
                    el: '#exampleCom',
                    text: 'button'
                }]
            }, {
                el: '#formcom'
            }]);
        }
    }, {
        key: 'showTab',
        value: function showTab() {
            var theComView = Lego.getView('#exampleCom');
            if (theComView) {
                this.$('#md').html(markdown.makeHtml(Lego.Ux.Util.getObjStr(theComView.options, this.oldOpts)));
                setTimeout(function () {
                    this.$('pre').each(function (i, block) {
                        hljs.highlightBlock(block);
                    });
                }, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject4);
            return vDom;
        }
    }]);

    return HomeView;
}(Lego.UI.Baseview);

export default HomeView;