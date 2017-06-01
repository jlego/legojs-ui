var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div class="markdown scrollbar">\n                    <h6>\u6548\u679C\u56FE:</h6>\n                    <img src="', 'img/example/tables.png" style="margin-bottom:30px;">\n                    <h6>\u53C2\u6570:</h6>\n                    ', '\n                    </div>'], ['<div class="markdown scrollbar">\n                    <h6>\u6548\u679C\u56FE:</h6>\n                    <img src="', 'img/example/tables.png" style="margin-bottom:30px;">\n                    <h6>\u53C2\u6570:</h6>\n                    ', '\n                    </div>']),
    _templateObject2 = _taggedTemplateLiteral(['<div class="example scrollbar"><tables id="exampleCom"></tables></div>'], ['<div class="example scrollbar"><tables id="exampleCom"></tables></div>']),
    _templateObject3 = _taggedTemplateLiteral(['<div class="code scrollbar" id="md"></div>'], ['<div class="code scrollbar" id="md"></div>']),
    _templateObject4 = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Form from './form';

var table = '\n| \u5C5E\u6027    |    \u8BF4\u660E   |      \u7C7B\u578B |      \u9ED8\u8BA4\u503C |\n|:------|:-------:|--------:|--------:|\n| isNowrap | \u8868\u683C\u5185\u5BB9\u4E0D\u6362\u884C | boolean | true |\n| rowSelection   | \u5217\u8868\u884C\u662F\u5426\u53EF\u9009\u62E9  | Object | null |\n| pagination   | \u5206\u9875\u5668\uFF0C\u914D\u7F6E\u9879\u53C2\u8003 pagination\uFF0C\u8BBE\u4E3A false \u65F6\u4E0D\u5C55\u793A\u548C\u8FDB\u884C\u5206\u9875  | Object | null |\n| size   | \u6B63\u5E38\u6216\u8FF7\u4F60\u7C7B\u578B\uFF0Csm lg  | Boolean |  |\n| columns   | \u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5177\u4F53\u9879\u89C1\u4E0B\u8868  | Array/Function | [] |\n| rowClassName   | \u8868\u683C\u884C\u7684\u7C7B\u540D  | String |  |\n| expandedRowKeys   | \u9ED8\u8BA4\u5C55\u5F00\u7684\u884C  | Array | [] |\n| expandAllRows   | \u662F\u5426\u5C55\u5F00\u6240\u6709\u884C  | Boolean | false |\n| loading   | \u9875\u9762\u662F\u5426\u52A0\u8F7D\u4E2D  | Boolean | false |\n| locale   | \u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E  | Object |  |\n| bordered   | \u662F\u5426\u5C55\u793A\u5916\u8FB9\u6846\u548C\u5217\u8FB9\u6846  | Boolean | false |\n| fixedHeader   | \u662F\u5426\u56FA\u5B9A\u8868\u5934  | Boolean | true |\n| showHeader   | \u662F\u5426\u663E\u793A\u8868\u5934  | Boolean | false |\n| showBodyer   | \u662F\u5426\u663E\u793A\u8868\u4F53  | Boolean | true |\n| showFooter   | \u662F\u5426\u663E\u793A\u8868\u5C3E  | Boolean | false |\n| showSetting   | \u662F\u5426\u663E\u793A\u8BBE\u7F6E  | Boolean | false |\n| footer   | \u8FD4\u56DE\u8868\u683C\u5C3E\u90E8  | String/Function |  |\n| title   | \u8868\u683C\u6807\u9898  | String/Function |  |\n| scroll   | \u6A2A\u5411\u6216\u7EB5\u5411\u652F\u6301\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u9AD8\u5EA6\uFF1A{ x: true, y: 300 }  | Object |  |\n| onExpandRow   | \u70B9\u51FB\u5C55\u5F00\u56FE\u6807\u65F6\u89E6\u53D1  | Function |  |\n| onChange   | \u5206\u9875\u3001\u6392\u5E8F\u3001\u7B5B\u9009\u53D8\u5316\u65F6\u89E6\u53D1  | Function |  |\n| onSelect   | \u70B9\u51FB\u9009\u4E2D\u884C\u65F6\u56DE\u8C03  | Function |  |\n| onSetting   | \u70B9\u51FB\u8868\u683C\u8BBE\u7F6E\u6309\u94AE\u65F6\u56DE\u8C03  | Function |  |\n| onRowClick   | \u5904\u7406\u884C\u70B9\u51FB\u4E8B\u4EF6  | Function |  |\n';

function getData() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var theData = [];
    for (var i = (currentPage - 1) * 20; i < currentPage * 20; i++) {
        theData.push({
            key: i,
            name: '胡彦斌' + i,
            age: 32 + i,
            address: '西湖区湖底公园1号'
        });
    }
    return theData;
}

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
                    style: {
                        height: '100%'
                    },
                    className: 'table-striped',
                    pagination: {
                        totalCount: 300,
                        pageRang: 5,
                        pageSize: 20,
                        onChange: function onChange(self, num) {
                            var view = Lego.getView('#exampleCom');
                            view.options.data = getData(num);
                            view.refresh();
                        }
                    },
                    showHeader: true,
                    data: getData(),
                    columns: [{
                        title: '姓名',
                        dataIndex: 'name',
                        key: 'name',
                        width: '400px',
                        filter: function filter(self, col) {
                            console.warn('点击了筛选', col);
                        }
                    }, {
                        title: '年龄',
                        dataIndex: 'age',
                        key: 'age',
                        width: '300px',
                        onCellClick: function onCellClick(self, row, col) {
                            console.warn(row, col);
                        },
                        filter: function filter(self, col, event) {
                            console.warn('ffffffffff');
                        },
                        sorter: function sorter(self, col) {
                            console.warn('点击了排序', col);
                        }
                    }, {
                        title: '住址',
                        dataIndex: 'address',
                        key: 'address',
                        width: '300px'
                    }]
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