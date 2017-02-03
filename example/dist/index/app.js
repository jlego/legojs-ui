(function(e) {
    var n = {};
    function a(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
            exports: {},
            id: r,
            loaded: false
        };
        e[r].call(t.exports, t, t.exports, a);
        t.loaded = true;
        return t.exports;
    }
    a.m = e;
    a.c = n;
    a.p = "./dist/";
    return a(0);
})([ function(e, n, a) {
    "use strict";
    var r = a(14);
    var t = i(r);
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    HBY.create(t.default, {
        el: "body",
        scrollbar: {},
        logoUrl: "dist/img/logo.png"
    });
    HBY.startApp();
}, , , , , , , , , , , , , , function(e, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, a, r) {
            if (a) e(n.prototype, a);
            if (r) e(n, r);
            return n;
        };
    }();
    var t = l([ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ], [ '\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ' ]);
    a(15);
    var i = a(19);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function l(e, n) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function d(e, n) {
        if (!(e instanceof n)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function c(e, n) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return n && (typeof n === "object" || typeof n === "function") ? n : e;
    }
    function p(e, n) {
        if (typeof n !== "function" && n !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        }
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n;
    }
    Lego.components("menu", o.default);
    var f = function(e) {
        p(n, e);
        function n() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            d(this, n);
            var a = {
                events: {},
                logoUrl: "asset/img/logo.png",
                components: [ {
                    el: "#sidebar"
                } ]
            };
            Object.assign(a, e);
            return c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
        }
        r(n, [ {
            key: "render",
            value: function e() {
                var n = hx(t, this.options.logoUrl);
                return n;
            }
        }, {
            key: "clickNav",
            value: function e(n) {
                var a = HBY.$(n.currentTarget), r = a.data("app");
                HBY.startApp(r);
            }
        } ]);
        return n;
    }(Lego.UI.Baseview);
    n.default = f;
}, function(e, n, a) {
    var r = a(16);
    if (typeof r === "string") r = [ [ e.id, r, "" ] ];
    var t = a(18)(r, {});
    if (r.locals) e.exports = r.locals;
    if (false) {
        if (!r.locals) {
            e.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss", function() {
                var n = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss");
                if (typeof n === "string") n = [ [ e.id, n, "" ] ];
                t(n);
            });
        }
        e.hot.dispose(function() {
            t();
        });
    }
}, function(e, n, a) {
    n = e.exports = a(17)();
    n.push([ e.id, 'body,html{height:100%;width:100%;line-height:normal;background:#fff;color:#666}:focus{outline:none}@media (min-width:992px){.app-navbar-fixed{padding-top:60px}}#app{min-height:100%;position:relative;width:100%;overflow:hidden}#app,#app .app-content{height:100%}#app .app-content:after,#app .app-content:before{content:" ";display:table}#app .app-content:after{clear:both}.navbar{position:absolute;top:0;width:100%;z-index:1089;border:none;margin-bottom:0;height:60px;background:#01a8fe}.navbar .navbar-header{z-index:10;float:left;border-bottom:none;position:relative;width:200px;height:60px}.navbar .navbar-header a{line-height:60px;height:60px}.navbar .navbar-header .navbar-brand{padding:0 15px}.navbar .navbar-header .navbar-brand img{display:inline-block}.navbar .navbar-collapse{background:#01a8fe}.navbar-collapse:after,.navbar-collapse:before{content:" ";display:table}.navbar-collapse:after{clear:both}.navbar .navbar-right{position:relative;margin-right:0;margin-bottom:0;float:right!important}.navbar .navbar-right>li{display:inline-block}.navbar .navbar-right .nav{margin:0}.navbar .navbar-right>li>a:focus{background:transparent}.navbar .navbar-right>li:hover,.navbar .navbar-right>li>a:hover{background-color:#168ee4}.navbar .navbar-right .badge{background-color:#c82e29;color:#fff;padding:4px 6px;position:absolute;top:3px;font-size:10px;left:50%;margin-left:13px}.navbar .navbar-right .badge,.navbar .navbar-right .dot-badge{-webkit-transform:translateX(-50%);transform:translateX(-50%);right:auto}.navbar .navbar-right .dot-badge{background-color:red;border-radius:100%;width:8px;height:8px;margin:2px;position:absolute!important;top:10px;left:20px;margin-left:10px}.navbar .navbar-right>li>a{border-radius:3px;color:#fff;font-size:14px;font-weight:600;letter-spacing:0;line-height:60px;text-transform:uppercase;opacity:.9;padding:0 15px;position:relative;text-align:center;display:block}.navbar .navbar-right>li>a:hover{background:none}.navbar .navbar-right>li.dropdown:hover ul{display:block}.navbar .navbar-right>li>a i{margin-right:5px;margin-top:7px;color:#fff;font-size:14px}.navbar .navbar-right .dropdown-menu{margin:0;border-radius:0;border-top:none}.navbar .navbar-right .dropdown-menu>li>a{padding:8px 20px}.navbar .navbar-right .dropdown-menu>li>a i{width:20px}.navbar .navbar-right .dropdown .caret{margin-left:0}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{left:0;right:auto}}.sidebar{width:200px;float:left;left:0;bottom:0;background:#1d252e;overflow:visible;z-index:1051;box-shadow:0 6px 5px rgba(0,0,0,.05)}.sidebar .sidebar-container,.sidebar>div{height:100%}.app-sidebar-fixed .sidebar>.sidebar-container{overflow-y:hidden;overflow-x:visible;position:relative}.app-mobile .sidebar{overflow:auto}.sidebar .wrapper{padding:20px 15px}.app-navbar-fixed.app-sidebar-fixed .sidebar{top:0}.sidebar nav{min-height:100%}.sidebar:before{background-color:inherit;border:inherit;bottom:0;content:"";position:absolute;top:0;width:inherit;z-index:-1}.app-navbar-fixed .sidebar{margin-top:0}.app-sidebar-fixed .sidebar{position:fixed;top:60px!important;margin-top:0}.sidebar nav>ul>li a{color:#9aa7af;border-bottom:none;display:block;border-radius:0!important;padding:.8em 1.5em!important}.sidebar nav>ul>li.open>a,.sidebar nav>ul>li.open a:focus{color:#9aa7af!important;cursor:pointer!important;background-color:transparent!important}.sidebar nav>ul>li .dropdown-menu{position:relative;border-radius:0;width:100%;border:none;background-color:#242e39;box-shadow:none;z-index:0;float:none}.sidebar nav>ul>li>a.active{color:#9aa7af!important;background-color:transparent!important}.sidebar nav>ul>li a.active+.dropdown-menu{display:block}.sidebar nav .dropdown-menu>li>a{padding:.5em 1.5em .5em 3em!important}.sidebar nav .dropdown-menu>li>a.active,.sidebar nav .dropdown-menu>li>a.active:focus,.sidebar nav .dropdown-menu>li>a.active:hover{color:#fff!important;background-color:#01a8fe!important}.sidebar nav>ul>li:hover{color:#01a8fe}.sidebar nav .dropdown-menu>li:not(.active)>a:hover{color:#01a8fe;background:#242e39}.sidebar nav .dropdown-toggle:after{float:right;margin-top:8px}.sidebar nav .dropdown.open>a.dropdown-toggle:after{border-top:.3em solid;border-bottom:none;border-right:.3em solid transparent;border-left:.3em solid transparent}.sidebar nav .dropdown:not(.open)>a.dropdown-toggle:after{margin-top:4px;border-top:.3em solid transparent;border-bottom:.3em solid transparent;border-right:none;border-left:.3em solid}.main-content{min-height:100%;position:relative;margin-top:60px;margin-left:200px;background-color:#f0f5f7}.main-content .container,.main-content .container-fluid{max-width:none!important;width:100%!important;display:inline-block}.main-content>.container,.main-content>.container-fluid{height:100%;overflow:hidden;bottom:0;position:absolute}.app-navbar-fixed .main-content{margin-top:0}.app-navbar-fixed .main-content:after,.app-navbar-fixed .main-content:before{content:" ";display:table}.app-navbar-fixed .main-content:after{clear:both}.app-sidebar-closed .main-content{margin-left:70px}.container-fluid{padding-left:20px;padding-right:20px}.page-container{height:100%;overflow:hidden}.page-title{font-size:18px;padding:10px 0;margin:10px 0}.page-title a{color:#999;margin-right:15px;display:inline-block}.page-title .active{color:#34495e}.page-panel{height:100%;padding-bottom:75px;overflow:hidden}.page-content{height:100%;padding:15px}.page-panel-bg{border-radius:5px;background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,.05)}', "" ]);
}, function(e, n) {
    e.exports = function() {
        var e = [];
        e.toString = function e() {
            var n = [];
            for (var a = 0; a < this.length; a++) {
                var r = this[a];
                if (r[2]) {
                    n.push("@media " + r[2] + "{" + r[1] + "}");
                } else {
                    n.push(r[1]);
                }
            }
            return n.join("");
        };
        e.i = function(n, a) {
            if (typeof n === "string") n = [ [ null, n, "" ] ];
            var r = {};
            for (var t = 0; t < this.length; t++) {
                var i = this[t][0];
                if (typeof i === "number") r[i] = true;
            }
            for (t = 0; t < n.length; t++) {
                var o = n[t];
                if (typeof o[0] !== "number" || !r[o[0]]) {
                    if (a && !o[2]) {
                        o[2] = a;
                    } else if (a) {
                        o[2] = "(" + o[2] + ") and (" + a + ")";
                    }
                    e.push(o);
                }
            }
        };
        return e;
    };
}, function(e, n, a) {
    var r = {}, t = function(e) {
        var n;
        return function() {
            if (typeof n === "undefined") n = e.apply(this, arguments);
            return n;
        };
    }, i = t(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), o = t(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), s = null, l = 0, d = [];
    e.exports = function(e, n) {
        if (false) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
        n = n || {};
        if (typeof n.singleton === "undefined") n.singleton = i();
        if (typeof n.insertAt === "undefined") n.insertAt = "bottom";
        var a = p(e);
        c(a, n);
        return function e(t) {
            var i = [];
            for (var o = 0; o < a.length; o++) {
                var s = a[o];
                var l = r[s.id];
                l.refs--;
                i.push(l);
            }
            if (t) {
                var d = p(t);
                c(d, n);
            }
            for (var o = 0; o < i.length; o++) {
                var l = i[o];
                if (l.refs === 0) {
                    for (var f = 0; f < l.parts.length; f++) l.parts[f]();
                    delete r[l.id];
                }
            }
        };
    };
    function c(e, n) {
        for (var a = 0; a < e.length; a++) {
            var t = e[a];
            var i = r[t.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) {
                    i.parts[o](t.parts[o]);
                }
                for (;o < t.parts.length; o++) {
                    i.parts.push(h(t.parts[o], n));
                }
            } else {
                var s = [];
                for (var o = 0; o < t.parts.length; o++) {
                    s.push(h(t.parts[o], n));
                }
                r[t.id] = {
                    id: t.id,
                    refs: 1,
                    parts: s
                };
            }
        }
    }
    function p(e) {
        var n = [];
        var a = {};
        for (var r = 0; r < e.length; r++) {
            var t = e[r];
            var i = t[0];
            var o = t[1];
            var s = t[2];
            var l = t[3];
            var d = {
                css: o,
                media: s,
                sourceMap: l
            };
            if (!a[i]) n.push(a[i] = {
                id: i,
                parts: [ d ]
            }); else a[i].parts.push(d);
        }
        return n;
    }
    function f(e, n) {
        var a = o();
        var r = d[d.length - 1];
        if (e.insertAt === "top") {
            if (!r) {
                a.insertBefore(n, a.firstChild);
            } else if (r.nextSibling) {
                a.insertBefore(n, r.nextSibling);
            } else {
                a.appendChild(n);
            }
            d.push(n);
        } else if (e.insertAt === "bottom") {
            a.appendChild(n);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }
    function v(e) {
        e.parentNode.removeChild(e);
        var n = d.indexOf(e);
        if (n >= 0) {
            d.splice(n, 1);
        }
    }
    function u(e) {
        var n = document.createElement("style");
        n.type = "text/css";
        f(e, n);
        return n;
    }
    function b(e) {
        var n = document.createElement("link");
        n.rel = "stylesheet";
        f(e, n);
        return n;
    }
    function h(e, n) {
        var a, r, t;
        if (n.singleton) {
            var i = l++;
            a = s || (s = u(n));
            r = m.bind(null, a, i, false);
            t = m.bind(null, a, i, true);
        } else if (e.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
            a = b(n);
            r = x.bind(null, a);
            t = function() {
                v(a);
                if (a.href) URL.revokeObjectURL(a.href);
            };
        } else {
            a = u(n);
            r = y.bind(null, a);
            t = function() {
                v(a);
            };
        }
        r(e);
        return function n(a) {
            if (a) {
                if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap) return;
                r(e = a);
            } else {
                t();
            }
        };
    }
    var g = function() {
        var e = [];
        return function(n, a) {
            e[n] = a;
            return e.filter(Boolean).join("\n");
        };
    }();
    function m(e, n, a, r) {
        var t = a ? "" : r.css;
        if (e.styleSheet) {
            e.styleSheet.cssText = g(n, t);
        } else {
            var i = document.createTextNode(t);
            var o = e.childNodes;
            if (o[n]) e.removeChild(o[n]);
            if (o.length) {
                e.insertBefore(i, o[n]);
            } else {
                e.appendChild(i);
            }
        }
    }
    function y(e, n) {
        var a = n.css;
        var r = n.media;
        if (r) {
            e.setAttribute("media", r);
        }
        if (e.styleSheet) {
            e.styleSheet.cssText = a;
        } else {
            while (e.firstChild) {
                e.removeChild(e.firstChild);
            }
            e.appendChild(document.createTextNode(a));
        }
    }
    function x(e, n) {
        var a = n.css;
        var r = n.sourceMap;
        if (r) {
            a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */";
        }
        var t = new Blob([ a ], {
            type: "text/css"
        });
        var i = e.href;
        e.href = URL.createObjectURL(t);
        if (i) URL.revokeObjectURL(i);
    }
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(n, a, r) {
            if (a) e(n.prototype, a);
            if (r) e(n, r);
            return n;
        };
    }();
    var r = i([ '<span><i class="icon iconfont ', '"></i> ', "</span>" ], [ '<span><i class="icon iconfont ', '"></i> ', "</span>" ]), t = i([ '\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        ' ]);
    function i(e, n) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(n)
            }
        }));
    }
    function o(e, n) {
        if (!(e instanceof n)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(e, n) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return n && (typeof n === "object" || typeof n === "function") ? n : e;
    }
    function l(e, n) {
        if (typeof n !== "function" && n !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        }
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n;
    }
    var d = function(e) {
        l(n, e);
        function n() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            o(this, n);
            var a = [ {
                key: "nav1",
                value: "基本",
                icon: "icon-home",
                open: true,
                children: [ {
                    key: "nav_home",
                    value: "Button 按钮",
                    children: [ {
                        key: "nav_home_1",
                        value: "Button 按钮"
                    }, {
                        key: "nav1_2_2",
                        value: "Icon 图标"
                    } ]
                }, {
                    key: "nav1_2",
                    value: "Icon 图标"
                } ]
            }, {
                key: "nav2",
                value: "导航",
                icon: "icon-account-info",
                open: true,
                children: [ {
                    key: "nav_navs",
                    value: "Nav 导航菜单"
                }, {
                    key: "nav_forms",
                    value: "Form 表单"
                } ]
            }, {
                key: "nav3",
                value: "数据输入",
                icon: "icon-teamwork",
                open: true,
                children: [ {
                    key: "nav_alert",
                    value: "Alert 警告框"
                }, {
                    key: "nav_forms",
                    value: "Form 表单"
                }, {
                    key: "nav_tips",
                    value: "Tips 提示框"
                }, {
                    key: "nav_tree",
                    value: "Tree 树型"
                }, {
                    key: "nav_transfer",
                    value: "Transfer 穿梭框"
                }, {
                    key: "nav_upload",
                    value: "Upload 上传文件"
                }, {
                    key: "nav_avatar",
                    value: "Avatar 头像"
                }, {
                    key: "nav_steps",
                    value: "Steps 步骤条"
                } ]
            }, {
                key: "nav4",
                value: "数据展示",
                icon: "icon-purchase",
                open: true,
                children: [ {
                    key: "nav4_1",
                    value: "Alert 警告框"
                }, {
                    key: "nav4_2",
                    value: "Form 表单"
                } ]
            }, {
                key: "nav5",
                value: "反馈",
                icon: "icon-clues",
                open: true,
                children: [ {
                    key: "nav5_1",
                    value: "Alert 警告框"
                }, {
                    key: "nav5_2",
                    value: "Form 表单"
                } ]
            } ];
            a.forEach(function(e) {
                e.value = hx(r, val(e.icon), val(e.value));
                if (e.children) {
                    e.children.forEach(function(e) {
                        if (e.key == "nav_" + Lego.getAppName()) {
                            e.active = true;
                        }
                    });
                }
            });
            var t = {
                components: [ {
                    el: "#menu",
                    type: "pills-stacked",
                    closeAllAble: false,
                    activeKey: "nav1",
                    onClick: function e(n, a) {
                        console.warn("点击了菜单5", a);
                        if (a.key) {
                            if (a.key.indexOf("_") > 0) {
                                Lego.startApp(a.key.split("_")[1]);
                            }
                        }
                    },
                    data: a
                } ]
            };
            Object.assign(t, e);
            return s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
        }
        a(n, [ {
            key: "render",
            value: function e() {
                var n = hx(t);
                return n;
            }
        } ]);
        return n;
    }(Lego.UI.Baseview);
    n.default = d;
} ]);