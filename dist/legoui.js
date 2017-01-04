/**
 * legoui.js v0.1.6
 * (c) 2017 Ronghui Yu
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

Lego.components("Baseview", Baseview);

var Util = {
    getDirection: function getDirection(el, dropEl) {
        el = el instanceof $ ? el : $(el);
        var windowW = $(window).width(), windowH = $(window).height(), _X = el.offset().left, _Y = el.offset().top, elW = el.width(), elH = el.height(), dropW = dropEl.width(), dropH = dropEl.height(), upDown = dropH > windowH - _Y - elH ? "top" : "bottom", leftRight = dropW > windowW - _X - elW ? "Right" : "Left";
        return {
            _x: leftRight,
            _y: upDown
        };
    },
    animateCss: function animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        el.addClass(animationName).one(animationEnd, function() {
            el.removeClass(animationName);
            if (typeof callback == "function") callback();
        });
    }
};

window.val = function(value) {
    return value ? value : "";
};

window.Ps = perfectScrollbar;

Lego.components({
    Util: Util
});

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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'forms\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 表单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="javascript:Lego.startApp(\'navs\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 导航菜单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ], [ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'forms\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 表单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="javascript:Lego.startApp(\'navs\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 导航菜单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ]);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <submodal id="lego-submodal"></submodal>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n            <modal id="lego-modal"></modal>\n        </div>\n        ' ], [ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <submodal id="lego-submodal"></submodal>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n            <modal id="lego-modal"></modal>\n        </div>\n        ' ]);

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
                "click .lego-alert-close-icon": "close"
            },
            type: "info",
            closable: false,
            closeText: "",
            message: "",
            description: "",
            onClose: function onClose() {},
            showIcon: true,
            banner: false
        };
        Object.assign(options, opts);
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
            var vDom = hx(_templateObject$2, options.type, options.description ? "lego-alert-with-description" : "", options.showIcon ? "" : "lego-alert-no-icon", options.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", options.showIcon ? "" : "-no", options.showIcon ? "" : "none", options.message, options.description ? hx(_templateObject2, typeof options.description == "string" ? options.description : "") : "", options.closable ? hx(_templateObject3) : "");
            return vDom;
        }
    }, {
        key: "close",
        value: function close(event) {
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

Lego.components("alert", Alert);

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
        Object.assign(options, opts);
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

var _templateObject$4 = _taggedTemplateLiteral$4([ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ]);

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
            var vDom = hx(_templateObject$4, options.htmlType, options.type, options.html || options.text);
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

Lego.components("button", Button);

var _createClass$8 = function() {
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

var _templateObject$7 = _taggedTemplateLiteral$7([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$4 = _taggedTemplateLiteral$7([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);

var _templateObject3$3 = _taggedTemplateLiteral$7([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = _taggedTemplateLiteral$7([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$2 = _taggedTemplateLiteral$7([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral$7(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$8(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$8(subClass, superClass) {
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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$8(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$8(this, Dropdown);
        var options = {
            events: {
                "click li": "clickItem"
            },
            disabled: false,
            eventName: "hover",
            activeKey: "",
            activeValue: "",
            trigger: "",
            visible: false,
            direction: "",
            onChange: function onChange() {},
            onVisibleChange: function onVisibleChange() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$8(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
        var that = _this;
        _this.options.trigger = opts.trigger instanceof $ ? opts.trigger : $(opts.trigger);
        if (!_this.options.disabled) {
            var handler = function handler(event) {
                event.stopPropagation();
                var directionResp = Lego.UI.Util.getDirection(that.options.trigger, that.$el);
                that.options.direction = directionResp._y || "bottom";
                that.show();
                if (options.eventName == "hover") {
                    that.options.trigger.mouseleave(function() {
                        that.close();
                    });
                }
            };
            if (options.eventName == "click") {
                var _eventName = "click.dropdown_" + opts.vid;
                $("body").off(_eventName).on(_eventName, function() {
                    that.close();
                });
                _this.options.trigger.off(_eventName).on(_eventName, handler);
            } else {
                _this.options.trigger[options.eventName](handler);
            }
        }
        return _this;
    }
    _createClass$8(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$7);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$4, item.key, item.disabled || item.selected ? "disabled" : "", item.href ? item.href : "javascript:;", item.value);
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(data) {
                return hx(_templateObject3$3, data.value, data.children ? hx(_templateObject4$2, data.children.map(function(item) {
                    itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5$2, options.direction ? "drop" + options.direction : "", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "_getAlign",
        value: function _getAlign(parent, el) {
            var _X = parent.offset().left, _Y = parent.offset().top - el.height(), windowWidth = $(window).width() - 20, elWidth = el.width();
            if (windowWidth > _X + elWidth) {
                return "left";
            } else {
                return "right";
            }
        }
    }, {
        key: "show",
        value: function show(event) {
            this.options.trigger.addClass("dropdown open");
            this.options.onVisibleChange(true);
        }
    }, {
        key: "close",
        value: function close(event) {
            this.options.trigger.removeClass("dropdown open");
            this.options.onVisibleChange(false);
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.attr("id");
            });
            if (model) {
                this.options.onChange(model);
                this.options.activeKey = model.key;
                this.options.activeValue = model.value;
            }
            this.close();
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

Lego.components("dropdown", Dropdown);

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

var _templateObject$6 = _taggedTemplateLiteral$6([ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject2$3 = _taggedTemplateLiteral$6([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject3$2 = _taggedTemplateLiteral$6([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject4$1 = _taggedTemplateLiteral$6([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ]);

var _templateObject5$1 = _taggedTemplateLiteral$6([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject6$1 = _taggedTemplateLiteral$6([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ]);

var _templateObject7$1 = _taggedTemplateLiteral$6([ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject8$1 = _taggedTemplateLiteral$6([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject9$1 = _taggedTemplateLiteral$6([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

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
            events: {
                "click .prev:not(.disabled)": "clickPrevPage",
                "click .page-item": "clickItemPage",
                "click .next:not(.disabled)": "clickNextPage",
                "click .morepage": "clickMorePage",
                'keydown .info>input[type="text"]': "_enterSearch"
            },
            current: 1,
            total: 0,
            totalPages: 0,
            pageSize: 10,
            pageRang: 10,
            onChange: function onChange() {},
            showSizeChanger: false,
            pageSizeOptions: [ 10, 20, 30, 40, 50 ],
            onPageSizeChange: function onPageSizeChange() {},
            showQuickJumper: false,
            size: "",
            simple: null,
            isShowTotal: true
        };
        Object.assign(options, opts);
        if (!options.simple && options.showSizeChanger) {
            var theData = options.pageSizeOptions.map(function(val) {
                return {
                    key: val,
                    value: val + " / 页"
                };
            });
            options.components = [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                data: theData,
                onChange: function onChange(result) {
                    var theView = Lego.getView(opts.el);
                    var num = parseInt(result.key);
                    if (theView) {
                        theView.options.current = 1;
                        theView.options.pageSize = num;
                        theView.options.onPageSizeChange(num);
                    }
                }
            } ];
        }
        var _this = _possibleConstructorReturn$7(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    _createClass$7(Pagination, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var totalCount = typeof options.total === "function" ? options.total() : options.total;
            options.totalPages = Math.ceil(totalCount / options.pageSize);
            options.pageRang = options.pageRang > options.totalPages ? options.totalPages : options.pageRang;
            var baseTimes = options.pageRang ? Math.floor((options.current - 1) / options.pageRang) : 0, startPage = baseTimes * options.pageRang + 1, endPage = startPage + options.pageRang - 1, showEllipsis = options.totalPages - options.current >= options.pageRang ? true : false, pagesArr = [];
            endPage = endPage <= 0 ? 1 : endPage;
            endPage = endPage > options.totalPages ? options.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            var vDom = hx(_templateObject$6, options.simple ? "pagination-simple" : "", options.size == "small" ? "mini" : "", options.current <= 1 ? "disabled" : "", options.simple ? hx(_templateObject2$3, options.current, options.endPage, options.current) : "", !options.simple ? pagesArr.map(function(x) {
                return hx(_templateObject3$2, x, x == options.current ? "active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject4$1, options.pageSize) : "", !options.simple && showEllipsis ? hx(_templateObject5$1, options.totalPages, options.totalPages) : "", !options.simple ? hx(_templateObject6$1, options.current >= options.totalPages ? "disabled" : "") : "", !options.simple && options.showSizeChanger ? hx(_templateObject7$1, options.vid, options.pageSize, options.vid) : "", !options.simple && options.showQuickJumper ? hx(_templateObject8$1, this.jumped ? options.current : "1", options.isShowTotal ? hx(_templateObject9$1, typeof options.showTotal === "function" ? options.showTotal(totalCount) : "总数 " + totalCount) : "") : "");
            this.jumped = false;
            return vDom;
        }
    }, {
        key: "clickPrevPage",
        value: function clickPrevPage(event) {
            event.stopPropagation();
            var options = this.options;
            console.warn("点击了上一页");
            options.current--;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "clickItemPage",
        value: function clickItemPage(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), num = target.attr("title");
            var options = this.options;
            console.warn("点击了" + num + "页");
            options.current = num;
            options.onChange(num, options.pageSize);
        }
    }, {
        key: "clickNextPage",
        value: function clickNextPage(event) {
            event.stopPropagation();
            var options = this.options;
            console.warn("点击了下一页");
            options.current++;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "clickMorePage",
        value: function clickMorePage(event) {
            event.stopPropagation();
            var options = this.options;
            var current = parseInt(options.current), pageRang = parseInt(options.pageRang), currentMod = current % pageRang ? current % pageRang : pageRang;
            console.warn("点击了更多页");
            options.current = current + (pageRang - currentMod + 1);
            if (options.current > options.totalPages) options.current = options.totalPages;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget);
            var options = this.options;
            var num = target.val();
            if (event.keyCode == 13) {
                if (num > options.totalPages) num = options.totalPages;
                this.jumped = true;
                options.current = num;
                options.onChange(num, options.pageSize);
            }
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

Lego.components("pagination", Pagination);

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

var _templateObject$5 = _taggedTemplateLiteral$5([ '\n        <div class="clearfix lego-table lego-table-', " ", "\n        ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body ', '">\n                    <table class="', '">\n                        ', "\n                        ", "\n                        ", "\n                        ", "\n                    </table>\n                </div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="clearfix lego-table lego-table-', " ", "\n        ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body ', '">\n                    <table class="', '">\n                        ', "\n                        ", "\n                        ", "\n                        ", "\n                    </table>\n                </div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2$2 = _taggedTemplateLiteral$5([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$5([ '\n                <div class="lego-table-header">\n                    <table class="">\n                        ', "\n                        ", "\n                    </table>\n                    ", "\n                </div>\n                " ], [ '\n                <div class="lego-table-header">\n                    <table class="">\n                        ', "\n                        ", "\n                    </table>\n                    ", "\n                </div>\n                " ]);

var _templateObject4 = _taggedTemplateLiteral$5([ '\n                        <button type="button" class="btn btn-default noborder">\n                        <i class="anticon anticon-ellipsis"></i></button>' ], [ '\n                        <button type="button" class="btn btn-default noborder">\n                        <i class="anticon anticon-ellipsis"></i></button>' ]);

var _templateObject5 = _taggedTemplateLiteral$5([ '\n                    <div class="lego-table-footer">\n                    <pagination id="', '-paginationId"></pagination>\n                    </div>\n                ' ], [ '\n                    <div class="lego-table-footer">\n                    <pagination id="', '-paginationId"></pagination>\n                    </div>\n                ' ]);

var _templateObject6 = _taggedTemplateLiteral$5([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);

var _templateObject7 = _taggedTemplateLiteral$5([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);

var _templateObject8 = _taggedTemplateLiteral$5([ "\n                ", "\n            " ], [ "\n                ", "\n            " ]);

var _templateObject9 = _taggedTemplateLiteral$5([ "<col>" ], [ "<col>" ]);

var _templateObject10 = _taggedTemplateLiteral$5([ '<col style="width: ', ';">' ], [ '<col style="width: ', ';">' ]);

var _templateObject11 = _taggedTemplateLiteral$5([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ]);

var _templateObject12 = _taggedTemplateLiteral$5([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject13 = _taggedTemplateLiteral$5([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject14 = _taggedTemplateLiteral$5([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject15 = _taggedTemplateLiteral$5([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject16 = _taggedTemplateLiteral$5([ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ], [ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ]);

var _templateObject17 = _taggedTemplateLiteral$5([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject18 = _taggedTemplateLiteral$5([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject19 = _taggedTemplateLiteral$5([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject20 = _taggedTemplateLiteral$5([ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ], [ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ]);

var _templateObject21 = _taggedTemplateLiteral$5([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject22 = _taggedTemplateLiteral$5([ '<i title="filter" class="anticon anticon-filter"></i>' ], [ '<i title="filter" class="anticon anticon-filter"></i>' ]);

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
                "click .lego-table-tbody td": "clickItem",
                "click .lego-table-header .lego-btn-circle": "clickSetting"
            },
            scrollbar: {},
            className: "",
            rowSelection: null,
            pagination: null,
            size: "default",
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
            showHeader: false,
            showBodyer: true,
            showFooter: false,
            components: [ _extends({}, opts.pagination, {
                el: "#" + opts.vid + "-paginationId"
            }) ]
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
        var header = _this.$(".lego-table-header");
        _this.$(".lego-table-body").scroll(function() {
            header.scrollLeft($(this).scrollLeft());
        });
        _this.$(".lego-table-tfoot>tr>td").attr("colspan", _this.options.columns.length);
        return _this;
    }
    _createClass$6(Table, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$5, options.size, options.bordered ? "lego-table-bordered" : "", options.showHeader ? "lego-table-fixed-header" : "", options.title ? hx(_templateObject2$2, options.title()) : "", options.showHeader ? hx(_templateObject3$1, this._renderColgroup(), this._renderHeader(), options.colSetting ? hx(_templateObject4) : "") : "", options.showHeader ? "scrollbar" : "", options.className, this._renderColgroup(), !options.showHeader ? this._renderHeader() : "", this._renderBodyer(), this._renderFooter(), options.pagination && options.data ? hx(_templateObject5, options.vid) : "");
            return vDom;
        }
    }, {
        key: "_getRowKey",
        value: function _getRowKey() {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.rowKey = this.rowKey || 0;
            this.rowKey++;
            return str + this.rowKey;
        }
    }, {
        key: "_renderColgroup",
        value: function _renderColgroup() {
            var _this2 = this;
            var vDom = hx(_templateObject6, this.options.rowSelection ? hx(_templateObject7) : "", this.options.columns.map(function(col, index) {
                return hx(_templateObject8, index === _this2.options.columns.length - 1 ? hx(_templateObject9) : hx(_templateObject10, col.width));
            }));
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
                return hx(_templateObject11, theType, row.disabled ? "lego-checkbox-disabled" : "", isChecked ? "lego-checkbox-checked lego-checkbox-checked-1" : isHarf ? "lego-checkbox-indeterminate" : "", theType, row.disabled ? "disabled" : "", isChecked ? "on" : "");
            }
            var vDom = hx(_templateObject12, tagName == "th" ? hx(_templateObject13, getHx()) : hx(_templateObject14, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this3 = this;
            var options = this.options;
            var vDom = hx(_templateObject15, options.rowSelection ? this._renderSelection({}, "th") : "", options.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject16, col.sortOrder ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this3._renderSorter(col) : "", _this3._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this4 = this;
            var options = this.options;
            if (!options.data) return;
            var vDom = hx(_templateObject17, options.data.map(function(row, i) {
                row.key = row.id || _this4._getRowKey("row_");
                return hx(_templateObject18, options.rowClassName, row.key, options.rowSelection ? _this4._renderSelection(row, "td") : "", options.columns.map(function(col) {
                    return !col.isHide ? hx(_templateObject19, typeof col.render === "function" ? col.render(row[col.dataIndex], row, col) : row[col.dataIndex]) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var options = this.options;
            var vDom = hx(_templateObject20, options.footer ? options.footer() : "");
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = this.options;
            var vDom = hx(_templateObject21, col.sortOrder === "asc" ? "on" : "off", col.sortOrder === "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject22) : "";
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
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = this.$("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key === rowKey;
            });
            var col = this.options.columns.find(function(val) {
                return val.key === colKey;
            });
            if (row && col) {
                if (this.options.onRowClick) {
                    if (typeof col.onRowClick === "function") col.onRowClick(row);
                }
                if (col.onCellClick) {
                    if (typeof col.onCellClick === "function") col.onCellClick(row, col);
                }
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
        key: "clickSetting",
        value: function clickSetting(event) {
            event.stopPropagation();
            if (typeof this.options.colSetting === "function") this.options.colSetting();
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
            var _this5 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? 1 : 0;
                    _this5.selectedAll = isSelected;
                    _this5.options.data.map(function(row, index) {
                        row.selected = !!isSelected;
                    });
                    _this5.refresh();
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

Lego.components("table", Table);

var Util$2 = function($) {
    var transition = false;
    var MAX_UID = 1e6;
    var TransitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    };
    function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function isElement(obj) {
        return (obj[0] || obj).nodeType;
    }
    function getSpecialTransitionEndEvent() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments);
                }
                return undefined;
            }
        };
    }
    function transitionEndTest() {
        if (window.QUnit) {
            return false;
        }
        var el = document.createElement("bootstrap");
        for (var name in TransitionEndEvent) {
            if (el.style[name] !== undefined) {
                return {
                    end: TransitionEndEvent[name]
                };
            }
        }
        return false;
    }
    function transitionEndEmulator(duration) {
        var _this = this;
        var called = false;
        $(this).one(Util.TRANSITION_END, function() {
            called = true;
        });
        setTimeout(function() {
            if (!called) {
                Util.triggerTransitionEnd(_this);
            }
        }, duration);
        return this;
    }
    function setTransitionEndSupport() {
        transition = transitionEndTest();
        $.fn.emulateTransitionEnd = transitionEndEmulator;
        if (Util.supportsTransitionEnd()) {
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
        }
    }
    var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
            do {
                prefix += ~~(Math.random() * MAX_UID);
            } while (document.getElementById(prefix));
            return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute("data-target");
            if (!selector) {
                selector = element.getAttribute("href") || "";
                selector = /^#[a-z]/i.test(selector) ? selector : null;
            }
            return selector;
        },
        reflow: function reflow(element) {
            new Function("bs", "return bs")(element.offsetHeight);
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
            for (var property in configTypes) {
                if (configTypes.hasOwnProperty(property)) {
                    var expectedTypes = configTypes[property];
                    var value = config[property];
                    var valueType = void 0;
                    if (value && isElement(value)) {
                        valueType = "element";
                    } else {
                        valueType = toType(value);
                    }
                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                    }
                }
            }
        }
    };
    setTransitionEndSupport();
    return Util;
}(jQuery);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass$10 = function() {
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

function _classCallCheck$10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Modal$2 = function($) {
    var NAME = "modal";
    var VERSION = "4.0.0-alpha.5";
    var DATA_KEY = "bs.modal";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27;
    var Default = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    };
    var DefaultType = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        RESIZE: "resize" + EVENT_KEY,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        IN: "in"
    };
    var Selector = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
    };
    var Modal = function() {
        function Modal(element, config) {
            _classCallCheck$10(this, Modal);
            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = $(element).find(Selector.DIALOG)[0];
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._originalBodyPadding = 0;
            this._scrollbarWidth = 0;
        }
        _createClass$10(Modal, [ {
            key: "toggle",
            value: function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
        }, {
            key: "show",
            value: function show(relatedTarget) {
                var _this = this;
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });
                $(this._element).trigger(showEvent);
                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                $(document.body).addClass(ClassName.OPEN);
                this._setEscapeEvent();
                this._setResizeEvent();
                $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));
                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                    $(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
                        if ($(event.target).is(_this._element)) {
                            _this._ignoreBackdropClick = true;
                        }
                    });
                });
                this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
            }
        }, {
            key: "hide",
            value: function hide(event) {
                if (event) {
                    event.preventDefault();
                }
                var hideEvent = $.Event(Event.HIDE);
                $(this._element).trigger(hideEvent);
                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = false;
                this._setEscapeEvent();
                this._setResizeEvent();
                $(document).off(Event.FOCUSIN);
                $(this._element).removeClass(ClassName.IN);
                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                if (Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    $(this._element).one(Util$2.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    this._hideModal();
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(window).off(EVENT_KEY);
                $(document).off(EVENT_KEY);
                $(this._element).off(EVENT_KEY);
                $(this._backdrop).off(EVENT_KEY);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._originalBodyPadding = null;
                this._scrollbarWidth = null;
            }
        }, {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util$2.typeCheckConfig(NAME, config, DefaultType);
                return config;
            }
        }, {
            key: "_showElement",
            value: function _showElement(relatedTarget) {
                var _this2 = this;
                var transition = Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    document.body.appendChild(this._element);
                }
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.scrollTop = 0;
                if (transition) {
                    Util$2.reflow(this._element);
                }
                $(this._element).addClass(ClassName.IN);
                if (this._config.focus) {
                    this._enforceFocus();
                }
                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });
                var transitionComplete = function transitionComplete() {
                    if (_this2._config.focus) {
                        _this2._element.focus();
                    }
                    $(_this2._element).trigger(shownEvent);
                };
                if (transition) {
                    $(this._dialog).one(Util$2.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    transitionComplete();
                }
            }
        }, {
            key: "_enforceFocus",
            value: function _enforceFocus() {
                var _this3 = this;
                $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function(event) {
                    if (document !== event.target && _this3._element !== event.target && !$(_this3._element).has(event.target).length) {
                        _this3._element.focus();
                    }
                });
            }
        }, {
            key: "_setEscapeEvent",
            value: function _setEscapeEvent() {
                var _this4 = this;
                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            _this4.hide();
                        }
                    });
                } else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            }
        }, {
            key: "_setResizeEvent",
            value: function _setResizeEvent() {
                if (this._isShown) {
                    $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
                } else {
                    $(window).off(Event.RESIZE);
                }
            }
        }, {
            key: "_hideModal",
            value: function _hideModal() {
                var _this5 = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", "true");
                this._showBackdrop(function() {
                    $(document.body).removeClass(ClassName.OPEN);
                    _this5._resetAdjustments();
                    _this5._resetScrollbar();
                    $(_this5._element).trigger(Event.HIDDEN);
                });
            }
        }, {
            key: "_removeBackdrop",
            value: function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            }
        }, {
            key: "_showBackdrop",
            value: function _showBackdrop(callback) {
                var _this6 = this;
                var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util$2.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = ClassName.BACKDROP;
                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }
                    $(this._backdrop).appendTo(document.body);
                    $(this._element).on(Event.CLICK_DISMISS, function(event) {
                        if (_this6._ignoreBackdropClick) {
                            _this6._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) {
                            return;
                        }
                        if (_this6._config.backdrop === "static") {
                            _this6._element.focus();
                        } else {
                            _this6.hide();
                        }
                    });
                    if (doAnimate) {
                        Util$2.reflow(this._backdrop);
                    }
                    $(this._backdrop).addClass(ClassName.IN);
                    if (!callback) {
                        return;
                    }
                    if (!doAnimate) {
                        callback();
                        return;
                    }
                    $(this._backdrop).one(Util$2.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.IN);
                    var callbackRemove = function callbackRemove() {
                        _this6._removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };
                    if (Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        $(this._backdrop).one(Util$2.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else {
                        callbackRemove();
                    }
                } else if (callback) {
                    callback();
                }
            }
        }, {
            key: "_handleUpdate",
            value: function _handleUpdate() {
                this._adjustDialog();
            }
        }, {
            key: "_adjustDialog",
            value: function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + "px";
                }
                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetAdjustments",
            value: function _resetAdjustments() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            }
        }, {
            key: "_checkScrollbar",
            value: function _checkScrollbar() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            }
        }, {
            key: "_setScrollbar",
            value: function _setScrollbar() {
                var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "";
                if (this._isBodyOverflowing) {
                    document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetScrollbar",
            value: function _resetScrollbar() {
                document.body.style.paddingRight = this._originalBodyPadding;
            }
        }, {
            key: "_getScrollbarWidth",
            value: function _getScrollbarWidth() {
                var scrollDiv = document.createElement("div");
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }
        } ], [ {
            key: "_jQueryInterface",
            value: function _jQueryInterface(config, relatedTarget) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === "object" && config);
                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === "string") {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config](relatedTarget);
                    } else if (_config.show) {
                        data.show(relatedTarget);
                    }
                });
            }
        }, {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        } ]);
        return Modal;
    }();
    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        var _this7 = this;
        var target = void 0;
        var selector = Util$2.getSelectorFromElement(this);
        if (selector) {
            target = $(selector)[0];
        }
        var config = $(target).data(DATA_KEY) ? "toggle" : $.extend({}, $(target).data(), $(this).data());
        if (this.tagName === "A") {
            event.preventDefault();
        }
        var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                return;
            }
            $target.one(Event.HIDDEN, function() {
                if ($(_this7).is(":visible")) {
                    _this7.focus();
                }
            });
        });
        Modal._jQueryInterface.call($(target), config, this);
    });
    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Modal._jQueryInterface;
    };
    return Modal;
}(jQuery);

var _createClass$9 = function() {
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

var _templateObject$8 = _taggedTemplateLiteral$8([ '\n        <div class="modal ', " ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              <div class="modal-header">\n              ', '\n                <h4 class="modal-title">', '</h4>\n              </div>\n              <div class="modal-body ', '">\n                ', '\n              </div>\n              <div class="modal-footer">\n              ', "\n              </div>\n            </div>\n          </div>\n        </div>\n        " ], [ '\n        <div class="modal ', " ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              <div class="modal-header">\n              ', '\n                <h4 class="modal-title">', '</h4>\n              </div>\n              <div class="modal-body ', '">\n                ', '\n              </div>\n              <div class="modal-footer">\n              ', "\n              </div>\n            </div>\n          </div>\n        </div>\n        " ]);

var _templateObject2$5 = _taggedTemplateLiteral$8([ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ], [ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ]);

var _templateObject3$4 = _taggedTemplateLiteral$8([ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ], [ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ]);

function _taggedTemplateLiteral$8(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$9(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$9(subClass, superClass) {
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

var Modal = function(_Lego$UI$Baseview) {
    _inherits$9(Modal, _Lego$UI$Baseview);
    function Modal() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$9(this, Modal);
        var typeArr = {
            success: "anticon anticon-check-circle-o ",
            info: "anticon anticon-info-circle-o",
            warning: "anticon anticon-exclamation-circle-o",
            error: "anticon anticon-cross-circle-o",
            alert: "anticon anticon-question-circle-o"
        };
        var options = {
            events: {
                "click .modal-footer button.ok": "clickOk",
                "click .modal-footer button.cancel": "clickCancel",
                "click .close": "close",
                "click .modal-dialog": function clickModalDialog(event) {
                    event.stopPropagation();
                },
                click: "close"
            },
            msgType: "",
            title: "这是标题",
            size: "",
            type: "modal",
            position: "",
            animate: "fadeIn",
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: "",
            footer: null,
            confirm: null,
            okText: "确定",
            cancelText: "取消",
            onHidden: function onHidden() {},
            animates: {
                fadeIn: "fadeOut",
                slideInRight: "slideOutRight"
            }
        };
        Object.assign(options, opts);
        var modalEl = options.position ? "#lego-submodal" : "#lego-modal";
        if (typeArr[options.msgType] && typeof options.content == "string") {
            var alertObj = Lego.create(Alert, {
                type: options.msgType,
                closable: false,
                message: options.content,
                description: true
            });
            options.content = alertObj.render();
        }
        if (!options.el) options.el = modalEl;
        if (options.position) options.animate = "slideInRight";
        var _this = _possibleConstructorReturn$9(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, options));
        var that = _this;
        _this.$el.modal({
            backdrop: options.position ? !options.backdrop : options.backdrop,
            keyboard: options.keyboard,
            show: true
        });
        _this.$el.on("hidden.bs.modal", function(e) {
            var container = options.position ? '<submodal id="lego-submodal"></submodal>' : '<modal id="lego-modal"></modal>';
            that.$el.replaceWith(container);
            if (typeof options.onHidden === "function") options.onHidden();
        });
        if (options.animate) {
            _this.$el.data("animate", options.animate);
            Lego.UI.Util.animateCss(_this.$el, "animated " + options.animate);
        }
        return _this;
    }
    _createClass$9(Modal, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$8, options.position == "right" ? "right-modal" : "", options.msgType ? "dialog-modal" : "", options.size ? "modal-size-" + options.size : "", options.el.replace(/#/, ""), options.closable ? hx(_templateObject2$5) : "", options.title, !options.msgType ? "scrollbar" : "", options.content, options.footer ? options.footer : hx(_templateObject3$4, options.cancelText, options.okText));
            return vDom;
        }
    }, {
        key: "close",
        value: function close() {
            var animateName = this.options.animate, that = this;
            if (animateName) {
                Lego.UI.Util.animateCss(that.$el, "animated " + that.options.animates[animateName], function() {
                    that.$el.modal("hide");
                });
                $(".modal-backdrop").fadeOut();
            } else {
                this.$el.modal("hide");
            }
        }
    }, {
        key: "_showDialog",
        value: function _showDialog() {
            var that = this;
            Lego.create(Modal, {
                msgType: this.options.confirm.msgType || "warning",
                content: this.options.confirm.content || "",
                backdrop: false,
                onOk: function onOk(e) {
                    that.close();
                    if (Lego.getView($("#lego-modal"))) Lego.getView($("#lego-modal")).close();
                }
            });
        }
    }, {
        key: "_onConfirm",
        value: function _onConfirm(funName) {
            if (this.options.confirm && this.options[funName]) {
                this._showDialog();
            } else {
                this.close();
            }
            if (typeof this.options[funName] === "function") this.options[funName](event);
        }
    }, {
        key: "clickOk",
        value: function clickOk(event) {
            event.stopPropagation();
            this._onConfirm("onOk");
        }
    }, {
        key: "clickCancel",
        value: function clickCancel(event) {
            event.stopPropagation();
            this._onConfirm("onCancel");
        }
    } ]);
    return Modal;
}(Lego.UI.Baseview);

Lego.components("modal", Modal);

var _createClass$11 = function() {
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

var _templateObject$9 = _taggedTemplateLiteral$9([ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2$6 = _taggedTemplateLiteral$9([ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ], [ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ]);

var _templateObject3$5 = _taggedTemplateLiteral$9([ "\n                    ", "\n                " ], [ "\n                    ", "\n                " ]);

var _templateObject4$3 = _taggedTemplateLiteral$9([ '<div class="dropdown-divider"></div>' ], [ '<div class="dropdown-divider"></div>' ]);

var _templateObject5$3 = _taggedTemplateLiteral$9([ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "/a>" ], [ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "/a>" ]);

var _templateObject6$2 = _taggedTemplateLiteral$9([ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral$9(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$10(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$10(subClass, superClass) {
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

var Navs = function(_Lego$UI$Baseview) {
    _inherits$10(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$11(this, Navs);
        var options = {
            events: {
                "click .nav-link:not(.disabled)": "clickItem",
                "click .dropdown-item:not(.disabled)": "clickSubItem"
            },
            eventName: "click",
            type: "base",
            activeKey: "",
            activeValue: "",
            direction: "",
            onClick: function onClick() {},
            data: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$10(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
        var that = _this;
        _this.$(".dropdown")[options.eventName](function() {
            var directionResp = Lego.UI.Util.getDirection($(this), $(this).children(".dropdown-menu"));
            that.options.direction = directionResp._y || "bottom";
            $(this).addClass("open");
            $(this).mouseleave(function() {
                $(this).removeClass("open");
            });
        });
        return _this;
    }
    _createClass$11(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function makeItem(data, i) {
                var itemDom = hx(_templateObject$9, data.children ? "dropdown" : "", data.key === options.activeKey ? "active" : "", data.disabled ? "disabled" : "", data.children ? "dropdown-toggle" : "", data.href ? data.href : "javascript:;", data.key ? data.key : "nav-item-" + i, data.value ? data.value : "", Array.isArray(data.children) ? hx(_templateObject2$6, options.direction ? "drop" + options.direction : "", data.children.map(function(subItem, x) {
                    return hx(_templateObject3$5, subItem.divider ? hx(_templateObject4$3) : hx(_templateObject5$3, subItem.active ? "active" : "", subItem.disabled ? "disabled" : "", subItem.href ? subItem.href : "javascript:;", subItem.key ? subItem.key : "nav-sub-item-" + x, subItem.value ? subItem.value : ""));
                })) : "");
                return itemDom;
            }
            var vDom = hx(_templateObject6$2, options.type === "inline" ? "nav-inline" : options.type === "tabs" ? "nav-tabs" : options.type === "pills" ? "nav-pills" : "", options.type === "pills-stacked" ? "nav-pills nav-stacked" : "", options.data.map(function(item, i) {
                return makeItem(item, i);
            }));
            return vDom;
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            this.options.activeKey = key;
            var model = this.options.data.find(function(item) {
                return item.key === key;
            });
            if (typeof this.options.onClick === "function") this.options.onClick(model);
        }
    }, {
        key: "clickSubItem",
        value: function clickSubItem(event) {
            var _this2 = this;
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            var model = this.options.data.find(function(item) {
                return item.key === _this2.options.activeKey;
            });
            if (model) {
                model.children.forEach(function(subItem, i) {
                    subItem.active = subItem.key === key ? true : false;
                });
                this.refresh();
            }
            if (typeof this.options.onClick === "function") this.options.onClick(model);
        }
    } ]);
    return Navs;
}(Lego.UI.Baseview);

Lego.components("navs", Navs);

var _createClass$12 = function() {
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

var _templateObject$10 = _taggedTemplateLiteral$10([ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ], [ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ]);

var _templateObject2$7 = _taggedTemplateLiteral$10([ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ], [ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ]);

function _taggedTemplateLiteral$10(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$11(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$11(subClass, superClass) {
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

var Tabs = function(_Lego$UI$Baseview) {
    _inherits$11(Tabs, _Lego$UI$Baseview);
    function Tabs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$12(this, Tabs);
        var options = {
            events: {},
            eventName: "click",
            type: "line",
            size: "default",
            closable: false,
            activeKey: "",
            onClose: function onClose() {},
            tabPosition: "top",
            onEdit: function onEdit() {},
            hideAdd: false,
            animate: "",
            data: [],
            components: [ {
                el: "#" + opts.vid + "-navs",
                eventName: opts.eventName || "click",
                type: "tabs",
                activeKey: opts.activeKey,
                onClick: function onClick(item) {
                    var view = Lego.getView(opts.el);
                    if (view) {
                        if (!item.children) {
                            view.options.activeKey = item.key;
                        } else {
                            (function() {
                                var theModel = item.children.find(function(subItem) {
                                    return subItem.active == true;
                                });
                                if (theModel) {
                                    view.options.data.forEach(function(model) {
                                        if (model.key == item.key) {
                                            if (theModel.content) {
                                                model.content = theModel.content;
                                                view.options.activeKey = item.key;
                                            }
                                        }
                                    });
                                }
                            })();
                        }
                    }
                },
                data: opts.data
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$11(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, options));
    }
    _createClass$12(Tabs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$10, options.vid + "-navs", options.data.map(function(item) {
                if (!item.disabled && item.content) {
                    return hx(_templateObject2$7, options.animate ? options.animate : "", item.key === options.activeKey ? "active in" : "", item.key, item.content ? item.content : "");
                }
            }));
            return vDom;
        }
    }, {
        key: "close",
        value: function close(event) {
            var _this2 = this;
            event.stopPropagation();
            this.$el.slideUp("normal", function() {
                _this2.remove();
            });
            if (typeof this.options.onClose === "function") this.options.onClose(event);
        }
    } ]);
    return Tabs;
}(Lego.UI.Baseview);

Lego.components("tabs", Tabs);

var _createClass$13 = function() {
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

var _templateObject$11 = _taggedTemplateLiteral$11([ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);

var _templateObject2$8 = _taggedTemplateLiteral$11([ '\n          <div class="input-group-btn dropdown" id="', '-select">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="', '-dropdown"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="', '-select">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="', '-dropdown"></dropdown>\n          </div>\n        ' ]);

function _taggedTemplateLiteral$11(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$12(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$12(subClass, superClass) {
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

var Search = function(_Lego$UI$Baseview) {
    _inherits$12(Search, _Lego$UI$Baseview);
    function Search() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$13(this, Search);
        var options = {
            events: {
                "click .search-button": "clickSearch"
            },
            placeholder: "输入关键字搜索",
            activeKey: "",
            activeValue: "",
            hasSelect: false,
            onClick: function onClick() {},
            components: [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                data: opts.data,
                onChange: function onChange(model) {
                    var theView = Lego.getView(opts.el);
                    if (theView) {
                        theView.options.activeKey = model.key;
                        theView.options.activeValue = model.value;
                    }
                }
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$12(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    _createClass$13(Search, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$11, options.hasSelect ? hx(_templateObject2$8, options.vid, options.activeValue || "请选择", options.vid) : "", options.placeholder);
            return vDom;
        }
    }, {
        key: "clickSearch",
        value: function clickSearch(event) {
            event.stopPropagation();
            var keyword = this.$(".search-input").val();
            if (typeof this.options.onClick === "function") this.options.onClick({
                key: this.options.activeKey,
                value: this.options.activeValue,
                keyword: keyword
            });
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

var _createClass$14 = function() {
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

var _templateObject$12 = _taggedTemplateLiteral$12([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2$9 = _taggedTemplateLiteral$12([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3$6 = _taggedTemplateLiteral$12([ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4$4 = _taggedTemplateLiteral$12([ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ]);

function _taggedTemplateLiteral$12(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$13(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$13(subClass, superClass) {
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

var Select = function(_Lego$UI$Baseview) {
    _inherits$13(Select, _Lego$UI$Baseview);
    function Select() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$14(this, Select);
        var options = {
            events: {},
            value: [],
            multiple: false,
            eventName: "click",
            filterOption: true,
            tags: false,
            onSelect: function onSelect() {},
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "",
            notFoundContent: "",
            dropdownMatchSelectWidth: true,
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownStyle: null,
            dropdownClassName: "",
            splitString: "",
            components: [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                eventName: opts.eventName || "click",
                disabled: opts.disabled || false,
                style: Object.assign({
                    width: opts.dropdownMatchSelectWidth === false ? "auto" : "100%"
                }, opts.dropdownStyle || {}),
                className: opts.dropdownClassName,
                data: opts.data,
                onChange: function onChange(model) {
                    var theView = Lego.getView(opts.el);
                    if (theView) {
                        if (model.key !== "0" && opts.multiple) {
                            theView.getValue();
                            if (!theView.options.value.includes(model)) {
                                model.selected = true;
                                theView.options.value.push(model);
                            }
                        } else {
                            theView.options.data.forEach(function(item) {
                                return item.selected = false;
                            });
                            theView.options.value = [ model ];
                        }
                        theView.options.onSelect(model);
                        theView.options.onChange(model);
                        theView.refresh();
                    }
                }
            } ]
        };
        Object.assign(options, opts);
        if (options.value.length) {
            options.value.forEach(function(item) {
                var model = options.data.find(function(model) {
                    return model.key === item.key;
                });
                if (model) model.selected = true;
            });
        }
        var _this = _possibleConstructorReturn$13(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, options));
        var eventName = "click.select_" + opts.vid, callback = _this.clickItemClose.bind(_this);
        _this.$(".select-tags-div").off(eventName).on(eventName, ".select-tag-close", callback);
        return _this;
    }
    _createClass$14(Select, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = "";
            function getTags(data) {
                if (data.length) {
                    return hx(_templateObject$12, data.map(function(item) {
                        return hx(_templateObject2$9, item.key, item.value, item.value);
                    }));
                } else {
                    return "";
                }
            }
            var theValueArr = Array.isArray(options.value) ? options.value.length ? options.value.map(function(item) {
                return item.value;
            }) : [] : [ options.value.value ];
            if (!options.multiple) {
                vDom = hx(_templateObject3$6, options.vid, options.disabled ? "disabled" : "", options.placeholder, theValueArr.join(","), options.vid);
            } else {
                vDom = hx(_templateObject4$4, options.vid, theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : options.placeholder, theValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(options.value), options.vid);
            }
            return vDom;
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title");
            this.options.data.forEach(function(item) {
                if (item.key === key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            Lego.getView("#" + this.options.vid + "-dropdown").refresh();
            if (typeof this.options.onDeselect === "function") this.options.onDeselect({
                key: key,
                value: value
            });
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var data = this.options.data;
            if (value.length) {
                value.forEach(function(item) {
                    var model = data.find(function(model) {
                        return model.key === item.key;
                    });
                    if (model) {
                        Object.assign(model, item);
                    } else {
                        data.push(item);
                    }
                });
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            this.options.value = this.options.data.filter(function(item) {
                return item.selected === true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Select;
}(Lego.UI.Baseview);

Lego.components("select", Select);

exports.Viewport = Viewport;

exports.Alert = Alert;

exports.Badge = Badge;

exports.Button = Button;

exports.Table = Table;

exports.Pagination = Pagination;

exports.Dropdown = Dropdown;

exports.Modal = Modal;

exports.Navs = Navs;

exports.Tabs = Tabs;

exports.Search = Search;

exports.Select = Select;

exports.Baseview = Baseview;
