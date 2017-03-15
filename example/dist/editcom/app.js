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

	var _index = __webpack_require__(8);

	var _index2 = _interopRequireDefault(_index);

	var _home = __webpack_require__(9);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	    function Router() {
	        _classCallCheck(this, Router);

	        return {
	            '/editcom': [this.index, this.tabs],
	            '/editcom/:tabs': [this.index, this.tabs]
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

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/editcom/0" class="', '">Editcom \u7F16\u8F91\u7EC4\u4EF6</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/editcom/0" class="', '">Editcom \u7F16\u8F91\u7EC4\u4EF6</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

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

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<a href="#">\u70B9\u51FB\u4E86\u7F16\u8F91\u7EC4\u4EF62</a>'], ['<a href="#">\u70B9\u51FB\u4E86\u7F16\u8F91\u7EC4\u4EF62</a>']),
	    _templateObject2 = _taggedTemplateLiteral(['<a href="#">', '</a>'], ['<a href="#">', '</a>']),
	    _templateObject3 = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <editcom id="editcom1"></editcom>\n            </div>\n            <div class="col-sm-6">\n              <editcom id="editcom2"></editcom>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <editcom id="editcom3"></editcom>\n            </div>\n            <div class="col-sm-6">\n              <editcom id="editcom4"></editcom>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <button class="btn btn-primary" onclick=', '>\u70B9\u6211\u5427</button>\n            </div>\n            <div class="col-sm-6">\n\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <editcom id="editcom1"></editcom>\n            </div>\n            <div class="col-sm-6">\n              <editcom id="editcom2"></editcom>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <editcom id="editcom3"></editcom>\n            </div>\n            <div class="col-sm-6">\n              <editcom id="editcom4"></editcom>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <button class="btn btn-primary" onclick=', '>\u70B9\u6211\u5427</button>\n            </div>\n            <div class="col-sm-6">\n\n            </div>\n          </div>\n        </div>\n        ']);

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
	                el: '#editcom1',
	                name: 'editcomname',
	                size: 'sm',
	                text: '点击了编辑组件',
	                components: [{
	                    key: 'inputs1',
	                    comName: 'inputs',
	                    onChange: function onChange(self, value) {
	                        console.warn(self, value);
	                        this.context.options.value = value;
	                        this.context.options.text = value;
	                        this.context.close();
	                    }
	                }],
	                onEdit: function onEdit(self) {
	                    console.warn('点击了编辑组件', self);
	                },
	                //编辑回调
	                onFinish: function onFinish(self) {
	                    console.warn('完成了编辑', self);
	                }
	            }, {
	                el: '#editcom2',
	                name: 'editcomname2',
	                size: 'sm',
	                html: hx(_templateObject),
	                value: '点击了编辑组件2',
	                components: [{
	                    key: 'inputs1',
	                    comName: 'inputs',
	                    onChange: function onChange(self, value) {
	                        console.warn(self, value);
	                        this.context.options.value = value;
	                        this.context.options.html = hx(_templateObject2, value);
	                        this.context.close();
	                    }
	                }],
	                onEdit: function onEdit(self) {
	                    console.warn('点击了编辑组件2', self);
	                },
	                //编辑回调
	                onFinish: function onFinish(self) {
	                    console.warn('完成了编辑2', self);
	                }
	            }, {
	                el: '#editcom3',
	                name: 'editcomname3',
	                // size: 'sm',
	                text: '点击了编辑组件3',
	                width: 200,
	                components: [{
	                    key: 'search1',
	                    comName: 'search',
	                    onChange: function onChange(self, value) {
	                        console.warn(self, value);
	                        this.context.options.keyword = value;
	                        this.context.close();
	                    }
	                }]
	            }, {
	                el: '#editcom4',
	                name: 'editcomname4',
	                text: '选择项一',
	                size: 'sm',
	                width: 200,
	                value: {
	                    key: 'key1',
	                    value: 'title1'
	                },
	                components: [{
	                    key: 'selects',
	                    comName: 'selects',
	                    data: [{
	                        key: 'key1',
	                        value: 'title1'
	                    }, {
	                        key: 'key2',
	                        value: 'title2'
	                    }, {
	                        key: 'key3',
	                        value: 'title3'
	                    }],
	                    onChange: function onChange(self, value) {
	                        console.warn(self, value);
	                        this.context.options.value = value;
	                        this.context.close();
	                    }
	                }]
	            }]
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
	    }

	    _createClass(HomeView, [{
	        key: 'render',
	        value: function render() {
	            var vDom = hx(_templateObject3, this.onclick);
	            return vDom;
	        }
	    }, {
	        key: 'onclick',
	        value: function onclick(event) {
	            console.warn('你点击了我', event);
	        }
	    }]);

	    return HomeView;
	}(Lego.UI.Baseview);

	exports.default = HomeView;

/***/ }

/******/ });