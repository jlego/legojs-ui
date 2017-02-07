/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _home = __webpack_require__(2);

	var _home2 = _interopRequireDefault(_home);

	var _list = __webpack_require__(3);

	var _list2 = _interopRequireDefault(_list);

	var _table = __webpack_require__(4);

	var _table2 = _interopRequireDefault(_table);

	var _list3 = __webpack_require__(5);

	var _list4 = _interopRequireDefault(_list3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var alertRouter = function () {
	    function alertRouter() {
	        _classCallCheck(this, alertRouter);

	        return {
	            '/alert': [this.index, this.tabs],
	            '/alert/:tabs': [this.index, this.tabs]
	        };
	    }

	    _createClass(alertRouter, [{
	        key: 'index',
	        value: function index() {
	            this.viewObj = HBY.create(_index2.default, {
	                el: HBY.config.pageEl,
	                scrollbar: {},
	                currentTab: 0
	            });
	        }
	    }, {
	        key: 'tabs',
	        value: function tabs() {
	            var _tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            this.viewObj.options.currentTab = _tabs || 0;
	            var appArray = [_home2.default, _list2.default, _table2.default];
	            HBY.create(appArray[_tabs], { el: '#pageContent' });
	        }
	    }]);

	    return alertRouter;
	}();

	HBY.router(new alertRouter());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert\u8B66\u544A\u63D0\u793A</a>\n                <a href="#/alert/1" class="', '">Button\u6309\u94AE</a>\n                <a href="#/alert/2" class="', '">Table\u8868\u683C</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert\u8B66\u544A\u63D0\u793A</a>\n                <a href="#/alert/1" class="', '">Button\u6309\u94AE</a>\n                <a href="#/alert/2" class="', '">Table\u8868\u683C</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

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
	            events: {
	                // 'click .alert': 'theClick'
	            },
	            currentTab: 0
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (IndexView.__proto__ || Object.getPrototypeOf(IndexView)).call(this, options));
	    }

	    _createClass(IndexView, [{
	        key: 'render',
	        value: function render() {
	            var options = this.options;
	            var vDom = hx(_templateObject, options.currentTab == 0 ? 'active' : '', options.currentTab == 1 ? 'active' : '', options.currentTab == 2 ? 'active' : '');
	            return vDom;
	        }
	    }]);

	    return IndexView;
	}(Lego.UI.Baseview);

	exports.default = IndexView;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	            var theView = HBY.getView(targetEl);
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

	exports.default = HomeView;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	                // className: 'btn-sm',
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
	                onClick: function onClick() {
	                    console.warn('点击了此按钮button5');
	                },

	                style: {
	                    marginRight: 10
	                }
	            }, {
	                el: '#button6',
	                type: 'warning',
	                onClick: function onClick() {
	                    console.warn('点击了此按钮button6');
	                },

	                style: {
	                    marginRight: 10
	                }
	            }, {
	                el: '#button7',
	                type: 'danger',
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

	exports.default = ListView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        '], ['\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Tables from '../../../../dist/tables';

	var TableView = function (_Lego$UI$Baseview) {
	    _inherits(TableView, _Lego$UI$Baseview);

	    function TableView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, TableView);

	        function getData() {
	            var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

	            var theData = [];
	            for (var i = (currentPage - 1) * 20; i < currentPage * 20; i++) {
	                theData.push({
	                    key: i,
	                    name: '胡彦斌' + i,
	                    age: 32 + i,
	                    // disabled: true,
	                    address: '西湖区湖底公园1号'
	                });
	            }
	            return theData;
	        }
	        var options = {
	            components: [{
	                el: '#theTable',
	                className: 'table-striped',
	                rowSelection: {
	                    type: 'checkbox'
	                },
	                pagination: {
	                    total: 300,
	                    pageRang: 5,
	                    pageSize: 20,
	                    showSizeChanger: true,
	                    showQuickJumper: true,
	                    onChange: function onChange(self, num) {
	                        var theView = Lego.getView('#theTable');
	                        theView.options.data = getData(num);
	                        theView.refresh();
	                        // Lego.getView('#table1').fetch();
	                    }
	                },
	                // bordered: true,
	                showHeader: true, //是否显示表头
	                colSetting: function colSetting() {
	                    console.warn('点击了列设置');
	                },

	                // showFooter: true, //是否显示表尾
	                title: function title() {
	                    return '表格标题';
	                },

	                // footer(){
	                //     return '表格尾部';
	                // },
	                style: {
	                    height: '100%'
	                },
	                data: getData(),
	                columns: [{
	                    title: '姓名',
	                    dataIndex: 'name',
	                    key: 'name',
	                    width: '200px',
	                    filter: function filter(col) {
	                        console.warn('点击了筛选', col);
	                    }
	                }, {
	                    title: '年龄',
	                    dataIndex: 'age',
	                    key: 'age',
	                    width: '200px',
	                    onCellClick: function onCellClick(row, col) {
	                        console.warn(row, col);
	                    },
	                    filter: function filter(col) {
	                        console.warn('点击了筛选', col);
	                    },
	                    sorter: function sorter(col) {
	                        console.warn('点击了排序', col);
	                    }
	                }, {
	                    title: '住址',
	                    dataIndex: 'address',
	                    key: 'address',
	                    width: '200px'
	                }]
	            }]
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (TableView.__proto__ || Object.getPrototypeOf(TableView)).call(this, options));
	    }

	    _createClass(TableView, [{
	        key: 'render',
	        value: function render() {
	            var vDom = hx(_templateObject);
	            return vDom;
	        }
	    }]);

	    return TableView;
	}(Lego.UI.Baseview);

	exports.default = TableView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListData = function (_HBY$Data) {
	    _inherits(ListData, _HBY$Data);

	    function ListData() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ListData);

	        var options = {
	            'gg': {
	                url: './content2.json',
	                listTarget: 'data',
	                model: {
	                    first: '',
	                    last: '',
	                    id: 0
	                }
	            },
	            'ff': {
	                url: './content2.json'
	            }
	        };
	        $.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (ListData.__proto__ || Object.getPrototypeOf(ListData)).call(this, options));
	    }

	    _createClass(ListData, [{
	        key: 'parse',
	        value: function parse(datas) {
	            // console.warn(datas);
	            return datas[0].data;
	        }
	    }]);

	    return ListData;
	}(HBY.Data);

	exports.default = new ListData();

/***/ }
/******/ ]);