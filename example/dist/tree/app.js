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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(247);

	var _index2 = _interopRequireDefault(_index);

	var _home = __webpack_require__(248);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	    function Router() {
	        _classCallCheck(this, Router);

	        return {
	            '/tree': [this.index, this.tabs],
	            '/tree/:tabs': [this.index, this.tabs]
	        };
	    }

	    _createClass(Router, [{
	        key: 'index',
	        value: function index() {
	            this.viewObj = Lego.create(_index2.default, {
	                el: Lego.config.pageEl,
	                scrollbar: {},
	                currentTab: 0
	            });
	        }
	    }, {
	        key: 'tabs',
	        value: function tabs() {
	            var _tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            this.viewObj.options.currentTab = _tabs || 0;
	            var appArray = [_home2.default];
	            Lego.create(appArray[_tabs], { el: '#pageContent' });
	        }
	    }]);

	    return Router;
	}();

	Lego.router(new Router());

/***/ },

/***/ 247:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tree/0" class="', '">Tree \u6811\u578B</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tree/0" class="', '">Tree \u6811\u578B</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

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

	exports.default = IndexView;

/***/ },

/***/ 248:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <tree id="tree1"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree2"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree3"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree4"></tree>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <treeselect id="treeselect1"></treeselect>\n            </div>\n            <div class="col-sm-6">\n              <treeselect id="treeselect2"></treeselect>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <treeselect id="treeselect3"></treeselect>\n            </div>\n            <div class="col-sm-6">\n              <treeselect id="treeselect4"></treeselect>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-3">\n              <tree id="tree1"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree2"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree3"></tree>\n            </div>\n            <div class="col-sm-3">\n              <tree id="tree4"></tree>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <treeselect id="treeselect1"></treeselect>\n            </div>\n            <div class="col-sm-6">\n              <treeselect id="treeselect2"></treeselect>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <treeselect id="treeselect3"></treeselect>\n            </div>\n            <div class="col-sm-6">\n              <treeselect id="treeselect4"></treeselect>\n            </div>\n          </div>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Tree from '../../../../dist/tree';
	// import Treeselect from '../../../../dist/treeselect';

	var HomeView = function (_Lego$UI$Baseview) {
	    _inherits(HomeView, _Lego$UI$Baseview);

	    function HomeView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, HomeView);

	        var options = {
	            components: [{
	                el: '#tree1',
	                onChecked: function onChecked(self, result) {
	                    console.warn('选中了节点', result);
	                },
	                onClick: function onClick(self, result) {
	                    console.warn('点击了节点', result);
	                },

	                data: [{
	                    name: "test1",
	                    open: true,
	                    children: [{ name: "test1_1" }, { name: "test1_2" }]
	                }, {
	                    name: "test2",
	                    open: true,
	                    children: [{ name: "test2_1" }, { name: "test2_2" }]
	                }]
	            }, {
	                el: '#tree2',
	                setting: {
	                    check: {
	                        enable: true
	                    }
	                },
	                onChecked: function onChecked(self, result) {
	                    console.warn('选中了节点', result);
	                },
	                onClick: function onClick(self, result) {
	                    console.warn('点击了节点', result);
	                },

	                data: [{
	                    name: "test1",
	                    checked: true,
	                    open: true,
	                    children: [{
	                        name: "test1_1",
	                        checked: true
	                    }, {
	                        name: "test1_2",
	                        checked: true
	                    }]
	                }, {
	                    name: "test2",
	                    open: true,
	                    checked: true,
	                    children: [{ name: "test2_1" }, { name: "test2_2" }]
	                }]
	            }, {
	                el: '#tree3',
	                setting: {
	                    check: {
	                        enable: true,
	                        chkStyle: "radio"
	                    }
	                },
	                onChecked: function onChecked(self, result) {
	                    console.warn('选中了节点', result);
	                },
	                onClick: function onClick(self, result) {
	                    console.warn('点击了节点', result);
	                },

	                data: [{
	                    name: "test1",
	                    open: true,
	                    children: [{
	                        name: "test1_1",
	                        checked: true
	                    }, {
	                        name: "test1_2"
	                    }]
	                }, {
	                    name: "test2",
	                    open: true,
	                    checked: true,
	                    children: [{ name: "test2_1" }, { name: "test2_2" }]
	                }]
	            }, _defineProperty({
	                el: '#tree4',
	                view: {
	                    showIcon: false
	                },
	                data: {
	                    simpleData: {
	                        enable: true
	                    }
	                },
	                onChecked: function onChecked(self, result) {
	                    console.warn('选中了节点', result);
	                },
	                onClick: function onClick(self, result) {
	                    console.warn('点击了节点', result);
	                }
	            }, 'data', [{
	                name: "test1",
	                open: true,
	                iconSkin: "folder",
	                children: [{
	                    name: "test1_1",
	                    iconSkin: "folder"
	                }, {
	                    name: "test1_2",
	                    iconSkin: "folder"
	                }]
	            }, {
	                name: "test2",
	                open: true,
	                iconSkin: "folder",
	                children: [{ name: "test2_1" }, { name: "test2_2" }]
	            }]), {
	                el: '#treeselect1',
	                placeholder: '请选择',
	                multiple: true,
	                // dropdownHeight: 80,
	                setting: {
	                    check: {
	                        enable: true
	                    }
	                },
	                onChange: function onChange(self, result) {
	                    console.warn('点击了树型选项框1', result, self);
	                },

	                // value: {
	                //     key: 'so2',
	                //     value: '选项二选项二选项二'
	                // },
	                data: [{
	                    id: 'tree1',
	                    name: "test1",
	                    open: true,
	                    children: [{
	                        id: 'tree1_1',
	                        name: "test1_1",
	                        checked: true
	                    }, {
	                        id: 'tree1_2',
	                        name: "test1_2"
	                    }]
	                }, {
	                    id: 'tree2',
	                    name: "test2",
	                    open: true,
	                    checked: true,
	                    children: [{ id: 'tree2_1', name: "test2_1" }, { id: 'tree3_1', name: "test3_2" }]
	                }]
	            }, {
	                el: '#treeselect2',
	                placeholder: '请选择',
	                multiple: true,
	                setting: {
	                    check: {
	                        enable: true,
	                        chkStyle: "radio"
	                    }
	                },
	                onChange: function onChange(self, result) {
	                    console.warn('点击了树型选项框2', result);
	                },

	                value: {
	                    key: 'tree1_1',
	                    value: 'test1_1'
	                },
	                data: [{
	                    id: 'tree1',
	                    name: "test1",
	                    open: true,
	                    children: [{
	                        id: 'tree1_1',
	                        name: "test1_1",
	                        checked: true
	                    }, {
	                        id: 'tree1_2',
	                        name: "test1_2"
	                    }]
	                }, {
	                    id: 'tree2',
	                    name: "test2",
	                    open: true,
	                    checked: true,
	                    children: [{ id: 'tree2_1', name: "test2_1" }, { id: 'tree3_1', name: "test3_2" }]
	                }]
	            }, {
	                el: '#treeselect3',
	                placeholder: '请选择',
	                setting: {
	                    check: {
	                        enable: true
	                    }
	                },
	                onChange: function onChange(self, result) {
	                    console.warn('点击了树型选项框3', result);
	                },

	                data: [{
	                    id: 'tree1',
	                    name: "test1",
	                    open: true,
	                    children: [{
	                        id: 'tree1_1',
	                        name: "test1_1"
	                    }, {
	                        id: 'tree1_2',
	                        name: "test1_2"
	                    }]
	                }, {
	                    id: 'tree2',
	                    name: "test2",
	                    open: true,
	                    children: [{ id: 'tree2_1', name: "test2_1" }, { id: 'tree3_1', name: "test3_2" }]
	                }]
	            }, {
	                el: '#treeselect4',
	                placeholder: '请选择',
	                onChange: function onChange(self, result) {
	                    console.warn('点击了树型选项框3', result);
	                },

	                data: [{
	                    id: 'tree1',
	                    name: "test1",
	                    open: true,
	                    children: [{
	                        id: 'tree1_1',
	                        name: "test1_1"
	                    }, {
	                        id: 'tree1_2',
	                        name: "test1_2"
	                    }]
	                }, {
	                    id: 'tree2',
	                    name: "test2",
	                    open: true,
	                    children: [{ id: 'tree2_1', name: "test2_1" }, { id: 'tree3_1', name: "test3_2" }]
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

	exports.default = HomeView;

/***/ }

/******/ });