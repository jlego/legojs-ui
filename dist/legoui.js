/**
 * legoui.js v0.1.2
 * (c) 2016 Ronghui Yu
 * @license MIT
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var perfectScrollbar_dist_css_perfectScrollbar_css = require("perfect-scrollbar/dist/css/perfect-scrollbar.css");

var perfectScrollbar = _interopDefault(require("perfect-scrollbar"));

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Baseview = function(_Lego$View) {
    _inherits(Baseview, _Lego$View);
    function Baseview() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Baseview);
        var options = {};
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Baseview.__proto__ || Object.getPrototypeOf(Baseview)).call(this, options));
        _this.renderScroll();
        return _this;
    }
    _createClass(Baseview, [ {
        key: "renderScroll",
        value: function renderScroll() {
            var _this2 = this;
            if (this.options.scrollbar) {
                (function() {
                    var scrollbarEl = _this2.$(".scrollbar");
                    var container = scrollbarEl[0];
                    var posi = scrollbarEl.parent().css("position");
                    if (!posi || posi !== "fixed") scrollbarEl.parent().css("position", "relative");
                    if (scrollbarEl.length) {
                        Ps.initialize(container, _this2.options.scrollbar);
                        _this2.$el.off("mousemove.ps").on("mousemove.ps", function() {
                            Ps.update(container);
                        });
                    }
                })();
            }
        }
    } ]);
    return Baseview;
}(Lego.View);

window.Ps = perfectScrollbar;

var _createClass$2 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'button\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 按钮 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="#order/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 订单管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ], [ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'button\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 按钮 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="#order/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 订单管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$2(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Menu = function(_Lego$UI$Baseview) {
    _inherits$2(Menu, _Lego$UI$Baseview);
    function Menu() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Menu);
        var options = {
            events: {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$2(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, options));
    }
    _createClass$2(Menu, [ {
        key: "render",
        value: function render() {
            var tmpl = hx(_templateObject$1);
            return tmpl;
        }
    } ]);
    return Menu;
}(Lego.UI.Baseview);

var _createClass$1 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject = _taggedTemplateLiteral([ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ], [ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

Lego.components("menu", Menu);

var Viewport = function(_Lego$UI$Baseview) {
    _inherits$1(Viewport, _Lego$UI$Baseview);
    function Viewport() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Viewport);
        var options = {
            events: {},
            logoUrl: "asset/img/logo.png",
            menu: [],
            components: [ {
                el: "#sidebar"
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).call(this, options));
    }
    _createClass$1(Viewport, [ {
        key: "render",
        value: function render() {
            var tmpl = hx(_templateObject, this.options.logoUrl);
            return tmpl;
        }
    }, {
        key: "clickNav",
        value: function clickNav(event) {
            var target = HBY.$(event.currentTarget), app = target.data("app");
            HBY.startApp(app);
        }
    } ]);
    return Viewport;
}(Lego.UI.Baseview);

var _createClass$3 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$2 = _taggedTemplateLiteral$2([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral$2([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);

var _templateObject3 = _taggedTemplateLiteral$2([ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ], [ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ]);

function _taggedTemplateLiteral$2(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$3(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Alert = function(_Lego$UI$Baseview) {
    _inherits$3(Alert, _Lego$UI$Baseview);
    function Alert() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$3(this, Alert);
        var options = {
            events: {
                "click .lego-alert-close-icon": "onClose"
            },
            type: "info",
            closable: false,
            closeText: "",
            message: "",
            description: "",
            onClose: function onClose() {},
            showIcon: false,
            banner: false
        };
        $.extend(true, options, opts);
        return _possibleConstructorReturn$3(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, options));
    }
    _createClass$3(Alert, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var iconName = "";
            switch (options.type) {
              case "success":
                iconName = "check";
                break;

              case "info":
                iconName = "info";
                break;

              case "warning":
                iconName = "exclamation";
                break;

              case "error":
                iconName = "cross";
                break;
            }
            var vDom = hx(_templateObject$2, options.type, options.description ? "lego-alert-with-description" : "", options.showIcon ? "" : "lego-alert-no-icon", options.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", options.showIcon ? "" : "-no", options.showIcon ? "" : "none", options.message, options.description ? hx(_templateObject2, options.description) : "", options.closable ? hx(_templateObject3) : "");
            return vDom;
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            var _this2 = this;
            event.stopPropagation();
            this.$el.slideUp("normal", function() {
                _this2.remove();
            });
            if (typeof this.options.onClose === "function") this.options.onClose(event);
        }
    } ]);
    return Alert;
}(Lego.UI.Baseview);

var _createClass$4 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$3 = _taggedTemplateLiteral$3([ "<div>\n          ", "\n        </div>" ], [ "<div>\n          ", "\n        </div>" ]);

var _templateObject2$1 = _taggedTemplateLiteral$3([ '<a id="', '" href="#/home" style="display:block;">', "</a>\n" ], [ '<a id="', '" href="#/home" style="display:block;">', "</a>\\n" ]);

function _taggedTemplateLiteral$3(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$4(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Badge = function(_Lego$UI$Baseview) {
    _inherits$4(Badge, _Lego$UI$Baseview);
    function Badge() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$4(this, Badge);
        var options = {
            events: {
                "click #400": "theClick"
            }
        };
        $.extend(true, options, opts);
        return _possibleConstructorReturn$4(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, options));
    }
    _createClass$4(Badge, [ {
        key: "render",
        value: function render() {
            var options = this.options || [];
            var vDom = hx(_templateObject$3, options.map(function(model, i) {
                return hx(_templateObject2$1, model.first, model.first);
            }));
            return vDom;
        }
    }, {
        key: "theClick",
        value: function theClick(event) {
            event.stopPropagation();
            Lego.trigger("data_update", {
                aa: 1
            });
        }
    } ]);
    return Badge;
}(Lego.UI.Baseview);

var _createClass$5 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$4 = _taggedTemplateLiteral$4([ '\n        <button type="', '" class="btn btn-', " lego-btn lego-btn-", '">\n            <span>', "</span>\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', " lego-btn lego-btn-", '">\n            <span>', "</span>\n        </button>\n        " ]);

function _taggedTemplateLiteral$4(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$5(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Button = function(_Lego$UI$Baseview) {
    _inherits$5(Button, _Lego$UI$Baseview);
    function Button() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$5(this, Button);
        var options = {
            events: {
                click: "onClick"
            },
            text: "button",
            type: "default",
            htmlType: "button",
            icon: "",
            shape: "",
            size: "default",
            loading: false,
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$5(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, options));
    }
    _createClass$5(Button, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$4, options.htmlType, options.type, options.type, options.html || options.text);
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick === "function") this.options.onClick(event);
        }
    } ]);
    return Button;
}(Lego.UI.Baseview);

var _createClass$7 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$6 = _taggedTemplateLiteral$6([ '\n        <ul class="lego-pagination lego-table-pagination">\n            <li title="Previous Page" class="lego-pagination-disabled lego-pagination-prev">\n                <a></a>\n            </li>\n            <li title="1" class="lego-pagination-item lego-pagination-item-1 lego-pagination-item-active"><a>1</a></li>\n            <li title="2" class="lego-pagination-item lego-pagination-item-2"><a>2</a></li>\n            <li title="3" class="lego-pagination-item lego-pagination-item-3"><a>3</a></li>\n            <li title="4" class="lego-pagination-item lego-pagination-item-4"><a>4</a></li>\n            <li title="5" class="lego-pagination-item lego-pagination-item-5"><a>5</a></li>\n            <li title="Next Page" class=" lego-pagination-next">\n                <a></a>\n            </li>\n            <div class="lego-pagination-options">\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled">\n                    <div class="lego-select-selection lego-select-selection--single" tabindex="0">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="10 / page" style="display: block; opacity: 1;">10 / 页</div>\n                        </div><span class="lego-select-arrow" style="user-select: none;"><b></b></span></div>\n                </div>\n            </div>\n        </ul>\n        ' ], [ '\n        <ul class="lego-pagination lego-table-pagination">\n            <li title="Previous Page" class="lego-pagination-disabled lego-pagination-prev">\n                <a></a>\n            </li>\n            <li title="1" class="lego-pagination-item lego-pagination-item-1 lego-pagination-item-active"><a>1</a></li>\n            <li title="2" class="lego-pagination-item lego-pagination-item-2"><a>2</a></li>\n            <li title="3" class="lego-pagination-item lego-pagination-item-3"><a>3</a></li>\n            <li title="4" class="lego-pagination-item lego-pagination-item-4"><a>4</a></li>\n            <li title="5" class="lego-pagination-item lego-pagination-item-5"><a>5</a></li>\n            <li title="Next Page" class=" lego-pagination-next">\n                <a></a>\n            </li>\n            <div class="lego-pagination-options">\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled">\n                    <div class="lego-select-selection lego-select-selection--single" tabindex="0">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="10 / page" style="display: block; opacity: 1;">10 / 页</div>\n                        </div><span class="lego-select-arrow" style="user-select: none;"><b></b></span></div>\n                </div>\n            </div>\n        </ul>\n        ' ]);

function _taggedTemplateLiteral$6(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$7(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Pagination = function(_Lego$UI$Baseview) {
    _inherits$7(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$7(this, Pagination);
        var options = {
            current: 0,
            defaultCurrent: 1,
            total: 0,
            defaultPageSize: 10,
            pageSize: 0,
            onChange: function onChange(page) {},
            showSizeChanger: false,
            pageSizeOptions: [],
            onShowSizeChange: function onShowSizeChange(current, size) {},
            showQuickJumper: false,
            size: "",
            simple: null,
            showTotal: function showTotal(total, range) {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$7(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
    }
    _createClass$7(Pagination, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$6);
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick === "function") this.options.onClick(event);
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var _createClass$6 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$5 = _taggedTemplateLiteral$5([ '\n        <div class="clearfix">\n            <div class="lego-spin-nested-loading">\n                <div class="lego-spin-container">\n                    <div class="lego-table lego-table-', " ", ' lego-table-scroll-position-left">\n                        ', '\n                        <div class="lego-table-content">\n                            <div class="', '">\n                                <span>\n                                ', '\n                                <div class="lego-table-body">\n                                    <table class="', '">\n                                        ', "\n                                        ", "\n                                        ", "\n                                    </table>\n                                </div>\n                                </span>\n                                ", "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ", "\n        </div>\n        " ], [ '\n        <div class="clearfix">\n            <div class="lego-spin-nested-loading">\n                <div class="lego-spin-container">\n                    <div class="lego-table lego-table-', " ", ' lego-table-scroll-position-left">\n                        ', '\n                        <div class="lego-table-content">\n                            <div class="', '">\n                                <span>\n                                ', '\n                                <div class="lego-table-body">\n                                    <table class="', '">\n                                        ', "\n                                        ", "\n                                        ", "\n                                    </table>\n                                </div>\n                                </span>\n                                ", "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ", "\n        </div>\n        " ]);

var _templateObject2$2 = _taggedTemplateLiteral$5([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$5([ '\n                                <div class="lego-table-header" style="margin-bottom: -17px; padding-bottom: 0px;">\n                                    <table class="">\n                                        ', "\n                                    </table>\n                                </div>\n                                " ], [ '\n                                <div class="lego-table-header" style="margin-bottom: -17px; padding-bottom: 0px;">\n                                    <table class="">\n                                        ', "\n                                    </table>\n                                </div>\n                                " ]);

var _templateObject4 = _taggedTemplateLiteral$5([ '<div class="lego-table-footer">', "</div>" ], [ '<div class="lego-table-footer">', "</div>" ]);

var _templateObject5 = _taggedTemplateLiteral$5([ '<pagination id="paginationId"></pagination>' ], [ '<pagination id="paginationId"></pagination>' ]);

var _templateObject6 = _taggedTemplateLiteral$5([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ]);

var _templateObject7 = _taggedTemplateLiteral$5([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject8 = _taggedTemplateLiteral$5([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject9 = _taggedTemplateLiteral$5([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject10 = _taggedTemplateLiteral$5([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject11 = _taggedTemplateLiteral$5([ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ], [ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ]);

var _templateObject12 = _taggedTemplateLiteral$5([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject13 = _taggedTemplateLiteral$5([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject14 = _taggedTemplateLiteral$5([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject15 = _taggedTemplateLiteral$5([ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ], [ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ]);

var _templateObject16 = _taggedTemplateLiteral$5([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject17 = _taggedTemplateLiteral$5([ '<i title="Filter Menu" class="anticon anticon-filter lego-dropdown-trigger"></i>' ], [ '<i title="Filter Menu" class="anticon anticon-filter lego-dropdown-trigger"></i>' ]);

function _taggedTemplateLiteral$5(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$6(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Table = function(_Lego$UI$Baseview) {
    _inherits$6(Table, _Lego$UI$Baseview);
    function Table() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$6(this, Table);
        var options = {
            events: {
                "click tbody .lego-checkbox": "selectOne",
                "click thead .lego-checkbox > input": "selectAll",
                "click .lego-table-column-sorter": "clickSorter",
                "click .anticon-filter": "clickFilter",
                "click .lego-table-tbody td": "clickTd"
            },
            className: "",
            rowSelection: null,
            pagination: null,
            size: "default",
            dataSource: {},
            columns: [],
            rowKey: "",
            rowClassName: "",
            expandedRowRender: function expandedRowRender() {},
            defaultExpandedRowKeys: [],
            expandedRowKeys: [],
            defaultExpandAllRows: false,
            onExpandedRowsChange: function onExpandedRowsChange() {},
            onExpand: function onExpand() {},
            onChange: function onChange() {},
            loading: false,
            locale: {
                filterConfirm: "确定",
                filterReset: "重置",
                emptyText: "暂无数据"
            },
            indentSize: 0,
            onRowClick: function onRowClick() {},
            bordered: false,
            showHeader: true,
            showBodyer: true,
            showFooter: false,
            footer: function footer() {},
            scroll: {}
        };
        Object.assign(options, opts);
        options.columns.map(function(col) {
            col = Object.assign({
                title: "",
                key: Lego.randomKey(32),
                isHide: false,
                dataIndex: "",
                colSpan: 0,
                width: "",
                className: "",
                fixed: false,
                sortOrder: ""
            }, col);
        });
        var _this = _possibleConstructorReturn$6(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, options));
        _this.selectedAll = 0;
        if (options.pagination) {
            var theOpt = _extends({}, options.pagination, {
                el: "#paginationId"
            });
            Lego.create(Pagination, theOpt);
        }
        return _this;
    }
    _createClass$6(Table, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$5, options.size, options.bordered ? "lego-table-bordered" : "", options.title ? hx(_templateObject2$2, options.title()) : "", options.showHeader ? "lego-table-scroll" : "", options.showHeader ? hx(_templateObject3$1, this._renderHeader()) : "", options.className, !options.showHeader ? this._renderHeader() : "", this._renderBodyer(), this._renderFooter(), options.showFooter ? hx(_templateObject4, options.footer()) : "", options.pagination ? hx(_templateObject5) : "");
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var options = this.options, theType = options.type || "checkbox", that = this;
            var isChecked = row.selected || tagName === "th" && this.selectedAll === 1, isHarf = tagName === "th" && that.selectedAll === 2 ? true : false;
            function getHx() {
                return hx(_templateObject6, theType, row.disabled ? "lego-checkbox-disabled" : "", isChecked ? "lego-checkbox-checked lego-checkbox-checked-1" : isHarf ? "lego-checkbox-indeterminate" : "", theType, row.disabled ? "disabled" : "", isChecked ? "on" : "");
            }
            var vDom = hx(_templateObject7, tagName == "th" ? hx(_templateObject8, getHx()) : hx(_templateObject9, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this2 = this;
            var options = this.options;
            var vDom = hx(_templateObject10, options.rowSelection ? this._renderSelection({}, "th") : "", options.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject11, col.sortOrder ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this2._renderSorter(col) : "", _this2._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this3 = this;
            var options = this.options;
            var vDom = hx(_templateObject12, options.data.map(function(row, i) {
                row.key = Lego.randomKey(32);
                return hx(_templateObject13, options.rowClassName, row.key, options.rowSelection ? _this3._renderSelection(row, "td") : "", options.columns.map(function(col) {
                    return !col.isHide ? hx(_templateObject14, typeof col.render === "function" ? col.render(row[col.dataIndex], row, col) : row[col.dataIndex]) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var options = this.options;
            var vDom = hx(_templateObject15);
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = this.options;
            var vDom = hx(_templateObject16, col.sortOrder === "asc" ? "on" : "off", col.sortOrder === "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject17) : "";
        }
    }, {
        key: "clickSorter",
        value: function clickSorter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.closest("th").attr("id"), col = this.options.columns.find(function(val) {
                return val.key === key;
            });
            if (col) {
                col.sortOrder = col.sortOrder || "";
                switch (col.sortOrder) {
                  case "asc":
                    col.sortOrder = "desc";
                    break;

                  case "desc":
                    col.sortOrder = "";
                    break;

                  case "":
                    col.sortOrder = "asc";
                    break;
                }
                this.refresh();
                if (typeof col.sorter === "function") col.sorter(col);
            }
        }
    }, {
        key: "clickTd",
        value: function clickTd(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = target.closest("tbody").prev("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key === rowKey;
            });
            var col = this.options.columns.find(function(val) {
                return val.key === colKey;
            });
            if (row && col) {
                if (typeof col.onCellClick === "function") col.onCellClick(row, col);
            }
        }
    }, {
        key: "clickFilter",
        value: function clickFilter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), colKey = target.closest("th").attr("id"), col = this.options.columns.find(function(val) {
                return val.key == colKey;
            });
            if (col) {
                if (typeof col.filter === "function") col.filter(col);
            }
        }
    }, {
        key: "selectOne",
        value: function selectOne(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), trEl = target.closest("tr"), id = trEl.attr("id"), that = this;
            if (this.options.rowSelection) {
                var row = this.options.data.find(function(value, index, arr) {
                    return value.key === id;
                });
                if (row) row.selected = !row.selected;
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value.selected === true;
                });
                this.selectedAll = hasSelectedArr.length == this.options.data.length ? 1 : hasSelectedArr.length ? 2 : 0;
                this.refresh();
            }
        }
    }, {
        key: "selectAll",
        value: function selectAll(event) {
            var _this4 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? 1 : 0;
                    _this4.selectedAll = isSelected;
                    _this4.options.data.map(function(row, index) {
                        row.selected = !!isSelected;
                    });
                    _this4.refresh();
                })();
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            var rows = [];
            if (Array.isArray(this.options.data)) {
                this.options.data.map(function(row) {
                    if (row.selected) rows.push(row);
                });
            }
            return rows;
        }
    } ]);
    return Table;
}(Lego.UI.Baseview);

exports.Baseview = Baseview;

exports.Viewport = Viewport;

exports.Alert = Alert;

exports.Badge = Badge;

exports.Button = Button;

exports.Table = Table;

exports.Pagination = Pagination;
