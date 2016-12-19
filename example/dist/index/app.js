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

	var _main = __webpack_require__(4);

	var _main2 = _interopRequireDefault(_main);

	var _menu = __webpack_require__(5);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 界面框架入口
	HBY.create({
	    el: 'body',
	    view: _main2.default,
	    components: [{
	        el: '#sidebar',
	        view: _menu2.default
	    }]
	});
	HBY.startApp();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <div class="sidebar app-aside" id="sidebar"></div>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="asset/img/logo.png" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="glyphicon glyphicon-qrcode"></i> \u9080\u8BF7\u7801 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">\u590D\u5236\u94FE\u63A5</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="hby-staff"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="glyphicon glyphicon-lock"></i> \u4FEE\u6539\u5BC6\u7801</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> \u9000\u51FA\u767B\u5F55</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="\u641C\u7D22">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        '], ['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <div class="sidebar app-aside" id="sidebar"></div>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="asset/img/logo.png" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="glyphicon glyphicon-qrcode"></i> \u9080\u8BF7\u7801 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">\u590D\u5236\u94FE\u63A5</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="hby-staff"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="glyphicon glyphicon-lock"></i> \u4FEE\u6539\u5BC6\u7801</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> \u9000\u51FA\u767B\u5F55</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="\u641C\u7D22">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainView = function (_HBY$View) {
	    _inherits(MainView, _HBY$View);

	    function MainView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, MainView);

	        var options = {
	            events: {
	                // 'click nav a': 'clickNav'
	            }
	        };
	        HBY.$.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, options));
	    }

	    _createClass(MainView, [{
	        key: 'render',
	        value: function render() {
	            var tmpl = hx(_templateObject);
	            return tmpl;
	        }
	    }, {
	        key: 'clickNav',
	        value: function clickNav(event) {
	            var target = HBY.$(event.currentTarget),
	                app = target.data('app');
	            HBY.startApp(app);
	        }
	    }]);

	    return MainView;
	}(HBY.View);

	exports.default = MainView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(["\n        <div class=\"sidebar-container perfect-scrollbar ps-container ps-active-y\">\n            <nav>\n                <ul class=\"main-navigation-menu\">\n                    <li data-permis='{\"module\":\"Home\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_home\">\n                        <a href=\"javascript:HBY.startApp('home');\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u9996\u9875 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Register\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_register\">\n                        <a href=\"javascript:HBY.startApp('test');\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-list-alt\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6CE8\u518C\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Customer\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_customer\">\n                        <a href=\"#customer/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-customer\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u5BA2\u6237\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Order\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_order\">\n                        <a href=\"#order/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-order\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8BA2\u5355\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Channel\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_channel\">\n                        <a href=\"#channel/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-channel\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6E20\u9053\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Finance\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_finance\">\n                        <a href=\"#finance/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-finance\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8D22\u52A1\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Consumption\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_expenses\">\n                        <a href=\"#expenses/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-usd\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6D88\u8D39\u8BB0\u5F55 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Product\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_product\">\n                        <a href=\"#product/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-product\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u4EA7\u54C1\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Operation\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_operation\">\n                        <a href=\"#operation/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-dashboard\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8FD0\u8425\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Organization\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_organization\">\n                        <a href=\"#admin/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-admin\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u540E\u53F0\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        "], ["\n        <div class=\"sidebar-container perfect-scrollbar ps-container ps-active-y\">\n            <nav>\n                <ul class=\"main-navigation-menu\">\n                    <li data-permis='{\"module\":\"Home\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_home\">\n                        <a href=\"javascript:HBY.startApp('home');\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u9996\u9875 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Register\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_register\">\n                        <a href=\"javascript:HBY.startApp('test');\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-list-alt\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6CE8\u518C\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Customer\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_customer\">\n                        <a href=\"#customer/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-customer\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u5BA2\u6237\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Order\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_order\">\n                        <a href=\"#order/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-order\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8BA2\u5355\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Channel\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_channel\">\n                        <a href=\"#channel/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-channel\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6E20\u9053\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Finance\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_finance\">\n                        <a href=\"#finance/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-finance\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8D22\u52A1\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Consumption\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_expenses\">\n                        <a href=\"#expenses/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-usd\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u6D88\u8D39\u8BB0\u5F55 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Product\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_product\">\n                        <a href=\"#product/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-product\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u4EA7\u54C1\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Operation\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_operation\">\n                        <a href=\"#operation/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"glyphicon glyphicon-dashboard\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u8FD0\u8425\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis='{\"module\":\"Organization\", \"operate\":\"Query\", \"hide\":1}' id=\"nav_organization\">\n                        <a href=\"#admin/\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                    <i class=\"hby-admin\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                    <span class=\"title\"> \u540E\u53F0\u7BA1\u7406 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        "]);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuView = function (_HBY$View) {
	    _inherits(MenuView, _HBY$View);

	    function MenuView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, MenuView);

	        var options = {
	            events: {
	                // 'click nav a': 'clickNav'
	            }
	        };
	        HBY.$.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, options));
	    }

	    _createClass(MenuView, [{
	        key: "render",
	        value: function render() {
	            var tmpl = hx(_templateObject);
	            return tmpl;
	        }
	        // clickNav(event){
	        //     const target = HBY.$(event.currentTarget),
	        //         app = target.data('app');
	        //     HBY.startApp(app);
	        // }

	    }]);

	    return MenuView;
	}(HBY.View);

	exports.default = MenuView;

/***/ }
/******/ ]);