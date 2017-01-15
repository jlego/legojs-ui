(function(n) {
    var i = {};
    function e(a) {
        if (i[a]) return i[a].exports;
        var s = i[a] = {
            exports: {},
            id: a,
            loaded: false
        };
        n[a].call(s.exports, s, s.exports, e);
        s.loaded = true;
        return s.exports;
    }
    e.m = n;
    e.c = i;
    e.p = "./dist/";
    return e(0);
})({
    0: function(n, i, e) {
        "use strict";
        var a = e(138);
        var s = t(a);
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        HBY.create(s.default, {
            el: "body",
            scrollbar: {},
            logoUrl: "dist/img/logo.png"
        });
        HBY.startApp();
    },
    138: function(n, i) {
        "use strict";
        var e = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol === "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        };
        var a = function() {
            function n(n, i) {
                for (var e = 0; e < i.length; e++) {
                    var a = i[e];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    if ("value" in a) a.writable = true;
                    Object.defineProperty(n, a.key, a);
                }
            }
            return function(i, e, a) {
                if (e) n(i.prototype, e);
                if (a) n(i, a);
                return i;
            };
        }();
        var s = t([ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'forms\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 表单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="javascript:Lego.startApp(\'navs\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 导航菜单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="javascript:Lego.startApp(\'tips\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 提示框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="javascript:Lego.startApp(\'tree\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 树型 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="javascript:Lego.startApp(\'transfer\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 穿梭框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="javascript:Lego.startApp(\'upload\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 上传文件 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ], [ '\n        <div class="sidebar app-aside" id="sidebar">\n        <div class="sidebar-container scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'alert\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-account-info"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 警告框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="javascript:Lego.startApp(\'forms\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-teamwork"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 表单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="javascript:Lego.startApp(\'navs\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-purchase"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 导航菜单 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="javascript:Lego.startApp(\'tips\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-clues"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 提示框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="javascript:Lego.startApp(\'tree\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-biz"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 树型 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="javascript:Lego.startApp(\'transfer\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-expenses"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 穿梭框 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="javascript:Lego.startApp(\'upload\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-products"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 上传文件 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="icon iconfont icon-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        </div>\n        ' ]);
        function t(n, i) {
            return Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(i)
                }
            }));
        }
        function r(n, i) {
            if (!(n instanceof i)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function o(n, i) {
            if (!n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return i && ((typeof i === "undefined" ? "undefined" : e(i)) === "object" || typeof i === "function") ? i : n;
        }
        function c(n, i) {
            if (typeof i !== "function" && i !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof i === "undefined" ? "undefined" : e(i)));
            }
            n.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: n,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (i) Object.setPrototypeOf ? Object.setPrototypeOf(n, i) : n.__proto__ = i;
        }
        var l = function(n) {
            c(i, n);
            function i() {
                var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, i);
                var e = {
                    events: {}
                };
                Object.assign(e, n);
                return o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
            }
            a(i, [ {
                key: "render",
                value: function n() {
                    var i = hx(s);
                    return i;
                }
            } ]);
            return i;
        }(Lego.UI.Baseview);
        var d = function() {
            function n(n, i) {
                for (var e = 0; e < i.length; e++) {
                    var a = i[e];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    if ("value" in a) a.writable = true;
                    Object.defineProperty(n, a.key, a);
                }
            }
            return function(i, e, a) {
                if (e) n(i.prototype, e);
                if (a) n(i, a);
                return i;
            };
        }();
        var p = v([ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ], [ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ]);
        function v(n, i) {
            return Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(i)
                }
            }));
        }
        function u(n, i) {
            if (!(n instanceof i)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function f(n, i) {
            if (!n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return i && ((typeof i === "undefined" ? "undefined" : e(i)) === "object" || typeof i === "function") ? i : n;
        }
        function m(n, i) {
            if (typeof i !== "function" && i !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof i === "undefined" ? "undefined" : e(i)));
            }
            n.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: n,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (i) Object.setPrototypeOf ? Object.setPrototypeOf(n, i) : n.__proto__ = i;
        }
        Lego.components("menu", l);
        var h = function(n) {
            m(i, n);
            function i() {
                var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                u(this, i);
                var e = {
                    events: {},
                    logoUrl: "asset/img/logo.png",
                    menu: [],
                    components: [ {
                        el: "#sidebar"
                    } ]
                };
                Object.assign(e, n);
                return f(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
            }
            d(i, [ {
                key: "render",
                value: function n() {
                    var i = hx(p, this.options.logoUrl);
                    return i;
                }
            }, {
                key: "clickNav",
                value: function n(i) {
                    var e = HBY.$(i.currentTarget), a = e.data("app");
                    HBY.startApp(a);
                }
            } ]);
            return i;
        }(Lego.UI.Baseview);
        n.exports = h;
    }
});