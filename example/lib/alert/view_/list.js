var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div><buttons id="btnId"></buttons></div>'], ['<div><buttons id="btnId"></buttons></div>']),
    _templateObject2 = _taggedTemplateLiteral(['<div><buttons id="btnId2"></buttons></div>'], ['<div><buttons id="btnId2"></buttons></div>']),
    _templateObject3 = _taggedTemplateLiteral(['\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        '], ['\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Buttons from '../../../../dist/buttons';
// import Modal from '../../../../dist/modal';

var ListView = function (_Lego$UI$Baseview) {
    _inherits(ListView, _Lego$UI$Baseview);

    function ListView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ListView);

        var options = {
            events: {
                // 'click .alert': 'theClick'
            },
            components: [{
                el: '#button1',
                type: 'info',
                size: 'sm',
                text: '模态框',
                onClick: function onClick(self) {
                    console.warn('点击了此按钮button1');
                    Lego.UI.modal({
                        type: 'layer',
                        content: '这是内容啊',
                        confirm: {
                            msgType: 'error',
                            content: '你确定要退出吗？'
                        },
                        onOk: function onOk(event) {
                            console.warn('是真的');
                        }
                    });
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button2',
                type: 'primary',
                text: '对话框',
                onClick: function onClick(self) {
                    console.warn('点击了此按钮button2');
                    Lego.UI.modal({
                        msgType: 'success',
                        title: '对话框',
                        content: '成功了！',
                        confirm: {
                            msgType: 'error',
                            content: '你确定要退出吗？'
                        },
                        onOk: function onOk(event) {
                            console.warn('是真的');
                        }
                    });
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button3',
                type: 'secondary',
                size: 'lg',
                onClick: function onClick(self) {
                    console.warn('点击了此按钮button3');
                    Lego.UI.modal({
                        type: 'modal',
                        title: '内容模态框',
                        content: hx(_templateObject),
                        isMiddle: true,
                        width: 500,
                        components: [{
                            el: '#btnId',
                            text: '点击我吧',
                            onClick: function onClick() {
                                Lego.UI.modal({
                                    type: 'modal',
                                    title: '子内容模态框',
                                    content: hx(_templateObject2),
                                    isMiddle: true,
                                    backdrop: false,
                                    width: 500,
                                    height: 300,
                                    components: [{
                                        el: '#btnId2',
                                        text: '点击我吧',
                                        type: 'danger',
                                        onClick: function onClick() {
                                            console.warn('ooooooo');
                                        }
                                    }]
                                });
                            }
                        }]
                    });
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button4',
                type: 'link',
                onClick: function onClick() {
                    console.warn('点击了此按钮button4');
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button5',
                type: 'success',
                text: 'success',
                onClick: function onClick() {
                    console.warn('点击了此按钮button5');
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button6',
                type: 'warning',
                text: 'warning',
                onClick: function onClick() {
                    console.warn('点击了此按钮button6');
                },

                style: {
                    marginRight: 10
                }
            }, {
                el: '#button7',
                type: 'danger',
                text: 'danger',
                onClick: function onClick() {
                    console.warn('点击了此按钮button7');
                },

                style: {
                    marginRight: 10
                }
            }]
        };
        Object.assign(options, opts);

        var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, options));

        var text = '\n    var legojs = {\n        nickName: "freefish",\n        site: "https://github.com/jlego/legojs"\n    }';
        var table = '\n| h1    |    h2   |      h3 |\n|:------|:-------:|--------:|\n| 100   | [a][1]  | ![b][2] |\n| *foo* | **bar** | ~~baz~~ |\n';

        _this.$('#md').html(markdown.makeHtml(text));
        _this.$('#tableDiv').html(markdown.makeHtml(table));
        _this.$('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        return _this;
    }

    _createClass(ListView, [{
        key: 'render',
        value: function render() {
            var vDom = hx(_templateObject3);
            return vDom;
        }
    }]);

    return ListView;
}(Lego.UI.Baseview);

export default ListView;