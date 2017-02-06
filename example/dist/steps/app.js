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

	var _index = __webpack_require__(239);

	var _index2 = _interopRequireDefault(_index);

	var _home = __webpack_require__(240);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	    function Router() {
	        _classCallCheck(this, Router);

	        return {
	            '/steps': [this.index, this.tabs],
	            '/steps/:tabs': [this.index, this.tabs]
	        };
	    }

	    _createClass(Router, [{
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
	            var appArray = [_home2.default];
	            HBY.create(appArray[_tabs], { el: '#pageContent' });
	        }
	    }]);

	    return Router;
	}();

	HBY.router(new Router());

/***/ },

/***/ 239:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps \u6B65\u9AA4\u6761</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps \u6B65\u9AA4\u6761</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

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

/***/ 240:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    \u5C55\u5F00/\u6298\u53E0\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    \u5C55\u5F00/\u6298\u53E0\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    \u5C55\u5F00/\u6298\u53E0\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    \u5C55\u5F00/\u6298\u53E0\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Steps from '../../../../dist/steps';
	// import Buttons from '../../../../dist/buttons';
	// import Facial from '../../../../dist/facial';
	// import Collapse from '../../../../dist/collapse';
	// import Reply from '../../../../dist/reply';

	var HomeView = function (_Lego$UI$Baseview) {
	    _inherits(HomeView, _Lego$UI$Baseview);

	    function HomeView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, HomeView);

	        var options = {
	            events: {
	                'click #collapseBtn': function clickCollapseBtn(event) {
	                    Lego.UI.collapse('#collapseExample', function (result, target) {
	                        console.warn(result, target);
	                    });
	                },
	                'click #collapseBtn2': function clickCollapseBtn2(event) {
	                    Lego.UI.collapse({
	                        target: '#collapseExample2',
	                        restHeight: 20,
	                        onChange: function onChange(result, target) {
	                            console.warn(result, target);
	                        }
	                    });
	                }
	            },
	            components: [{
	                el: '#steps1',
	                // name: 'user',
	                data: [{
	                    title: '步骤一',
	                    description: '这是描述内容这是描述内容'
	                }, {
	                    title: '步骤二',
	                    description: '这是描述内容这是描述内容'
	                }, {
	                    title: '步骤三',
	                    description: '这是描述内容这是描述内容'
	                }],
	                onNext: function onNext(self, result) {
	                    console.warn('下一步', result);
	                },
	                onPrevious: function onPrevious(self, result) {
	                    console.warn('上一步', result);
	                }
	            }, {
	                el: '#steps2',
	                titleWidth: 40, //标题宽度
	                showDescription: false, //显示描述
	                showIcon: false, //是否显示图标
	                showNum: false, //是否显示序号
	                data: [{
	                    title: '步骤一',
	                    description: '这是描述内容这是描述内容'
	                }, {
	                    title: '步骤二',
	                    description: '这是描述内容这是描述内容'
	                }, {
	                    title: '步骤三',
	                    description: '这是描述内容这是描述内容'
	                }],
	                onNext: function onNext(self, result) {
	                    console.warn('下一步', result);
	                },
	                onPrevious: function onPrevious(self, result) {
	                    console.warn('上一步', result);
	                }
	            }, {
	                el: '#button1',
	                text: '上一步',
	                onClick: function onClick(self) {
	                    var view = Lego.getView('#steps1');
	                    if (view) view.previous();
	                }
	            }, {
	                el: '#button2',
	                text: '下一步',
	                onClick: function onClick(self) {
	                    var view = Lego.getView('#steps1');
	                    if (view) view.next();
	                }
	            }, {
	                el: '#button3',
	                text: '上一步',
	                onClick: function onClick(self) {
	                    var view = Lego.getView('#steps2');
	                    if (view) view.previous();
	                }
	            }, {
	                el: '#button4',
	                text: '下一步',
	                onClick: function onClick(self) {
	                    var view = Lego.getView('#steps2');
	                    if (view) view.next();
	                }
	            }, {
	                el: '#reply1',
	                onSubmit: function onSubmit(self, result) {
	                    console.warn('回复框', self, result);
	                }
	            }]
	        };
	        Object.assign(options, opts);

	        var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));

	        _this.$('#content').attr('contenteditable', true);
	        return _this;
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