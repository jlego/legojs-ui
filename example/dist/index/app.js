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

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Lego.create(_index2.default, {
	    el: 'body',
	    scrollbar: {},
	    logoUrl: 'dist/img/logo.png'
	}); // 界面框架入口


	Lego.startApp();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> \u9080\u8BF7\u7801 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">\u590D\u5236\u94FE\u63A5</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> \u4FEE\u6539\u5BC6\u7801</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> \u9000\u51FA\u767B\u5F55</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="\u641C\u7D22">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">Lego</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        '], ['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> \u9080\u8BF7\u7801 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">\u590D\u5236\u94FE\u63A5</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> \u4FEE\u6539\u5BC6\u7801</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> \u9000\u51FA\u767B\u5F55</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="\u641C\u7D22">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">Lego</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ']);

	__webpack_require__(15);

	var _menu = __webpack_require__(19);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Lego.components('menu', _menu2.default);

	var Viewport = function (_Lego$UI$Baseview) {
	    _inherits(Viewport, _Lego$UI$Baseview);

	    function Viewport() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, Viewport);

	        var options = {
	            events: {
	                // 'click nav a': 'clickNav'
	            },
	            logoUrl: 'asset/img/logo.png',
	            components: [{
	                el: '#sidebar'
	            }]
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).call(this, options));
	    }

	    _createClass(Viewport, [{
	        key: 'render',
	        value: function render() {
	            var tmpl = hx(_templateObject, this.options.logoUrl);
	            return tmpl;
	        }
	    }, {
	        key: 'clickNav',
	        value: function clickNav(event) {
	            var target = Lego.$(event.currentTarget),
	                app = target.data('app');
	            Lego.startApp(app);
	        }
	    }]);

	    return Viewport;
	}(Lego.UI.Baseview);

	exports.default = Viewport;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n  background: #fff;\n  color: #666; }\n\n:focus {\n  outline: none; }\n\n@media (min-width: 992px) {\n  .app-navbar-fixed {\n    padding-top: 60px; } }\n\n#app {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n#app .app-content {\n  height: 100%; }\n\n#app .app-content:before,\n#app .app-content:after {\n  content: \" \";\n  display: table; }\n\n#app .app-content:after {\n  clear: both; }\n\n/* ---------------------------------------------------------------------- */\n/*  Top Navbar\n/* ---------------------------------------------------------------------- */\n.navbar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1089;\n  border: none;\n  margin-bottom: 0;\n  height: 60px;\n  background: #01a8fe; }\n\n.navbar .navbar-header {\n  z-index: 10;\n  float: left;\n  border-bottom: none;\n  position: relative;\n  width: 200px;\n  height: 60px; }\n\n.navbar .navbar-header a {\n  line-height: 60px;\n  height: 60px; }\n\n.navbar .navbar-header .navbar-brand {\n  padding: 0px 15px; }\n\n.navbar .navbar-header .navbar-brand img {\n  display: inline-block; }\n\n.navbar .navbar-collapse {\n  background: #01a8fe; }\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table; }\n\n.navbar-collapse:after {\n  clear: both; }\n\n.navbar .navbar-right {\n  position: relative;\n  margin-right: 0;\n  margin-bottom: 0;\n  float: right !important; }\n\n.navbar .navbar-right > li {\n  display: inline-block; }\n\n.navbar .navbar-right .nav {\n  margin: 0; }\n\n.navbar .navbar-right > li > a:focus {\n  background: transparent; }\n\n.navbar .navbar-right > li > a:hover,\n.navbar .navbar-right > li:hover {\n  background-color: #168ee4; }\n\n.navbar .navbar-right .badge {\n  background-color: #C82E29;\n  color: #ffffff;\n  padding: 4px 6px;\n  position: absolute;\n  top: 3px;\n  font-size: 10px;\n  left: 50%;\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  right: auto;\n  margin-left: 13px; }\n\n.navbar .navbar-right .dot-badge {\n  background-color: red;\n  border-radius: 100%;\n  width: 8px;\n  height: 8px;\n  margin: 2px;\n  position: absolute !important;\n  top: 10px;\n  left: 20px;\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  right: auto;\n  margin-left: 10px; }\n\n.navbar .navbar-right > li > a {\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 60px;\n  text-transform: uppercase;\n  opacity: 0.9;\n  padding: 0 15px;\n  position: relative;\n  text-align: center;\n  display: block; }\n\n.navbar .navbar-right > li > a:hover {\n  background: none; }\n\n.navbar .navbar-right > li.dropdown:hover ul {\n  display: block; }\n\n.navbar .navbar-right > li > a i {\n  margin-right: 5px;\n  margin-top: 7px;\n  color: #fff;\n  font-size: 14px; }\n\n.navbar .navbar-right .dropdown-menu {\n  margin: 0;\n  border-radius: 0;\n  border-top: none; }\n\n.navbar .navbar-right .dropdown-menu > li > a {\n  padding: 8px 20px; }\n\n.navbar .navbar-right .dropdown-menu > li > a i {\n  width: 20px; }\n\n.navbar .navbar-right .dropdown .caret {\n  margin-left: 0; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n/* ---------------------------------------------------------------------- */\n/*  Sidebar\n/* ---------------------------------------------------------------------- */\n.sidebar {\n  width: 200px;\n  float: left;\n  left: 0;\n  bottom: 0;\n  background: #1d252e;\n  overflow: visible;\n  z-index: 1051;\n  -webkit-box-shadow: 0 6px 5px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.05); }\n\n.sidebar > div,\n.sidebar .sidebar-container {\n  height: 100%; }\n\n.app-sidebar-fixed .sidebar > .sidebar-container {\n  overflow-y: hidden;\n  overflow-x: visible;\n  position: relative; }\n\n.app-mobile .sidebar {\n  overflow: auto; }\n\n.sidebar .wrapper {\n  padding: 20px 15px; }\n\n.app-navbar-fixed.app-sidebar-fixed .sidebar {\n  top: 0; }\n\n.sidebar nav {\n  min-height: 100%; }\n\n.sidebar:before {\n  background-color: inherit;\n  border: inherit;\n  bottom: 0;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: inherit;\n  z-index: -1; }\n\n.app-navbar-fixed .sidebar {\n  margin-top: 0; }\n\n.app-sidebar-fixed .sidebar {\n  position: fixed;\n  top: 60px !important;\n  margin-top: 0; }\n\n/* ---------------------------------------------------------------------- */\n/*  Nav\n/* ---------------------------------------------------------------------- */\n.sidebar nav > ul > li a {\n  color: #9aa7af;\n  border-bottom: none;\n  display: block;\n  border-radius: 0 !important;\n  padding: .8em 1.5em !important; }\n\n.sidebar nav > ul > li.open > a,\n.sidebar nav > ul > li.open a:focus {\n  color: #9aa7af !important;\n  cursor: pointer !important;\n  background-color: transparent !important; }\n\n.sidebar nav > ul > li .dropdown-menu {\n  position: relative;\n  border-radius: 0;\n  width: 100%;\n  border: none;\n  background-color: #242e39;\n  box-shadow: none;\n  z-index: 0;\n  float: none; }\n\n.sidebar nav > ul > li > a.active {\n  color: #9aa7af !important;\n  background-color: transparent !important; }\n\n.sidebar nav > ul > li a.active + .dropdown-menu {\n  display: block; }\n\n.sidebar nav .dropdown-menu > li > a {\n  padding: .5em 1.5em .5em 3em !important; }\n\n.sidebar nav .dropdown-menu > li > a.active,\n.sidebar nav .dropdown-menu > li > a.active:focus,\n.sidebar nav .dropdown-menu > li > a.active:hover {\n  color: #fff !important;\n  background-color: #01a8fe !important; }\n\n.sidebar nav > ul > li:hover {\n  color: #01a8fe; }\n\n.sidebar nav .dropdown-menu > li:not(.active) > a:hover {\n  color: #01a8fe;\n  background: #242e39; }\n\n.sidebar nav .dropdown-toggle:after {\n  float: right;\n  margin-top: 8px; }\n\n.sidebar nav .dropdown.open > a.dropdown-toggle:after {\n  border-top: .3em solid;\n  border-bottom: none;\n  border-right: .3em solid transparent;\n  border-left: .3em solid transparent; }\n\n.sidebar nav .dropdown:not(.open) > a.dropdown-toggle:after {\n  margin-top: 4px;\n  border-top: .3em solid transparent;\n  border-bottom: .3em solid transparent;\n  border-right: none;\n  border-left: .3em solid; }\n\n/* ---------------------------------------------------------------------- */\n/*  Main Content\n/* ---------------------------------------------------------------------- */\n.main-content {\n  min-height: 100%;\n  position: relative;\n  margin-top: 60px;\n  margin-left: 200px;\n  background-color: #f0f5f7; }\n\n.main-content .container-fluid,\n.main-content .container {\n  max-width: none !important;\n  width: 100% !important;\n  display: inline-block; }\n\n.main-content > .container-fluid,\n.main-content > .container {\n  /*padding-bottom: 50px;*/\n  height: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute; }\n\n.app-navbar-fixed .main-content {\n  margin-top: 0; }\n\n.app-navbar-fixed .main-content:before,\n.app-navbar-fixed .main-content:after {\n  content: \" \";\n  display: table; }\n\n.app-navbar-fixed .main-content:after {\n  clear: both; }\n\n.app-sidebar-closed .main-content {\n  margin-left: 70px; }\n\n.container-fluid {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n/* ---------------------------------------------------------------------- */\n/*  page\n/* ---------------------------------------------------------------------- */\n.page-container {\n  height: 100%;\n  overflow: hidden; }\n\n.page-title {\n  font-size: 18px;\n  padding: 10px 0px;\n  margin: 10px 0; }\n\n.page-title a {\n  color: #999;\n  margin-right: 15px;\n  display: inline-block; }\n\n.page-title .active {\n  color: #34495e; }\n\n.page-panel {\n  height: 100%;\n  padding-bottom: 75px;\n  overflow: hidden; }\n\n.page-content {\n  height: 100%;\n  padding: 15px; }\n\n.page-panel-bg {\n  border-radius: 5px;\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<span><i class="icon iconfont ', '"></i> ', '</span>'], ['<span><i class="icon iconfont ', '"></i> ', '</span>']),
	    _templateObject2 = _taggedTemplateLiteral(['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        '], ['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = function (_Lego$UI$Baseview) {
	    _inherits(Menu, _Lego$UI$Baseview);

	    function Menu() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, Menu);

	        var data = [{
	            key: 'nav1',
	            value: '基本',
	            icon: 'icon-home',
	            open: true,
	            children: [{
	                key: 'nav_home',
	                value: 'Button 按钮',
	                children: [{
	                    key: 'nav_home_1',
	                    value: 'Button 按钮'
	                }, {
	                    key: 'nav1_2_2',
	                    value: 'Icon 图标'
	                }]
	            }, {
	                key: 'nav1_2',
	                value: 'Icon 图标'
	            }]
	        }, {
	            key: 'nav2',
	            value: '导航',
	            icon: 'icon-account-info',
	            open: true,
	            children: [{
	                key: 'nav_dropdown',
	                value: 'Dropdown 下拉菜单'
	            }, {
	                key: 'nav_navs',
	                value: 'Nav 导航菜单'
	            }, {
	                key: 'nav_steps',
	                value: 'Steps 步骤条'
	            }]
	        }, {
	            key: 'nav3',
	            value: '数据输入',
	            icon: 'icon-teamwork',
	            open: true,
	            children: [{
	                key: 'nav_forms',
	                value: 'Form 表单'
	            }, {
	                key: 'nav_transfer',
	                value: 'Transfer 穿梭框'
	            }, {
	                key: 'nav_upload',
	                value: 'Upload 上传文件'
	            }, {
	                key: 'nav_avatar',
	                value: 'Avatar 头像'
	            }]
	        }, {
	            key: 'nav4',
	            value: '数据展示',
	            icon: 'icon-purchase',
	            open: true,
	            children: [{
	                key: 'nav_tips',
	                value: 'Tips 提示框'
	            }, {
	                key: 'nav_tree',
	                value: 'Tree 树型'
	            }]
	        }, {
	            key: 'nav5',
	            value: '反馈',
	            icon: 'icon-clues',
	            open: true,
	            children: [{
	                key: 'nav_alert',
	                value: 'Alert 警告框'
	            }, {
	                key: 'nav5_2',
	                value: 'Form 表单'
	            }]
	        }];
	        data.forEach(function (item) {
	            item.value = hx(_templateObject, val(item.icon), val(item.value));
	            if (item.children) {
	                item.children.forEach(function (subItem) {
	                    if (subItem.key == 'nav_' + Lego.getAppName()) {
	                        subItem.active = true;
	                    }
	                });
	            }
	        });
	        var options = {
	            components: [{
	                el: '#menu',
	                type: 'pills-stacked',
	                closeAllAble: false,
	                activeKey: 'nav1',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单5', item);
	                    if (item.key) {
	                        if (item.key.indexOf('_') > 0) {
	                            Lego.startApp(item.key.split('_')[1]);
	                        }
	                    }
	                },

	                data: data
	            }]
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, options));
	    }

	    _createClass(Menu, [{
	        key: 'render',
	        value: function render() {
	            var tmpl = hx(_templateObject2);
	            return tmpl;
	        }
	    }]);

	    return Menu;
	}(Lego.UI.Baseview);

	exports.default = Menu;

/***/ }
/******/ ]);