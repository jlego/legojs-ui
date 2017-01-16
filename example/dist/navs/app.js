(function(e) {
    var n = {};
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        e[i].call(a.exports, a, a.exports, t);
        a.loaded = true;
        return a.exports;
    }
    t.m = e;
    t.c = n;
    t.p = "./dist/";
    return t(0);
})({
    0: function(e, n, t) {
        "use strict";
        var i = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var a = t(242);
        var r = c(a);
        var o = t(243);
        var s = c(o);
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function l(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = function() {
            function e() {
                l(this, e);
                return {
                    "/navs": [ this.index, this.tabs ],
                    "/navs/:tabs": [ this.index, this.tabs ]
                };
            }
            i(e, [ {
                key: "index",
                value: function e() {
                    this.viewObj = HBY.create(r.default, {
                        el: HBY.config.pageEl,
                        scrollbar: {},
                        currentTab: 0
                    });
                }
            }, {
                key: "tabs",
                value: function e() {
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.viewObj.options.currentTab = n || 0;
                    var t = [ s.default ];
                    HBY.create(t[n], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return e;
        }();
        HBY.router(new u());
    },
    242: function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var t = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var i = a([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/navs/0" class="', '">Navs 导航菜单</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/navs/0" class="', '">Navs 导航菜单</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function a(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function r(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function o(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function s(e, n) {
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
        var c = function(e) {
            s(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, n);
                var t = {
                    currentTab: 0
                };
                Object.assign(t, e);
                return o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            t(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options;
                    var t = hx(i, n.currentTab == 0 ? "active" : "");
                    return t;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = c;
    },
    243: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var i = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var a = u([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs1"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs2"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs3"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs4"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs5"></navs>\n            </div>\n            <div class="col-sm-6">\n              <tabs id="tabs6"></tabs>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs1"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs2"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs3"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs4"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs5"></navs>\n            </div>\n            <div class="col-sm-6">\n              <tabs id="tabs6"></tabs>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var r = t(244);
        var o = l(r);
        var s = t(245);
        var c = l(s);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function v(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function d(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && (typeof n === "object" || typeof n === "function") ? n : e;
        }
        function f(e, n) {
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
        var p = function(e) {
            f(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                v(this, n);
                var t = [ {
                    key: "nav1",
                    value: "菜单一",
                    content: "Raw denim you probably haven heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
                }, {
                    key: "nav2",
                    value: "菜单二",
                    content: "ood truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scen"
                }, {
                    key: "nav3",
                    value: "菜单三",
                    children: [ {
                        key: "subnav1",
                        value: "子菜单一",
                        content: "ccccccc"
                    }, {
                        key: "subnav2",
                        value: "子菜单二"
                    }, {
                        divider: true
                    }, {
                        key: "subnav3",
                        value: "子菜单三"
                    } ]
                }, {
                    key: "nav4",
                    value: "菜单四",
                    disabled: true
                } ];
                var i = {
                    components: [ {
                        el: "#navs1",
                        type: "base",
                        activeKey: "nav1",
                        onClick: function e(n, t) {
                            console.warn("点击了菜单1", t);
                        },
                        data: t
                    }, {
                        el: "#navs2",
                        type: "inline",
                        activeKey: "nav2",
                        onClick: function e(n, t) {
                            console.warn("点击了菜单2", t);
                        },
                        data: t
                    }, {
                        el: "#navs3",
                        type: "tabs",
                        activeKey: "nav2",
                        onClick: function e(n, t) {
                            console.warn("点击了菜单3", t);
                        },
                        data: t
                    }, {
                        el: "#navs4",
                        type: "pills",
                        activeKey: "nav1",
                        onClick: function e(n, t) {
                            console.warn("点击了菜单4", t);
                        },
                        data: t
                    }, {
                        el: "#navs5",
                        type: "pills-stacked",
                        activeKey: "nav2",
                        onClick: function e(n, t) {
                            console.warn("点击了菜单5", t);
                        },
                        data: t
                    }, {
                        el: "#tabs6",
                        type: "tabs",
                        activeKey: "nav2",
                        animate: "fade",
                        data: t
                    } ]
                };
                Object.assign(i, e);
                return d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, i));
            }
            i(n, [ {
                key: "render",
                value: function e() {
                    var n = hx(a);
                    return n;
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        n.default = p;
    },
    244: function(e, n) {
        "use strict";
        var t = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var a = u([ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);
        var r = u([ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ], [ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ]);
        var o = u([ "\n                    ", "\n                " ], [ "\n                    ", "\n                " ]);
        var s = u([ '<div class="dropdown-divider"></div>' ], [ '<div class="dropdown-divider"></div>' ]);
        var c = u([ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ], [ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ]);
        var l = u([ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);
        function u(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function v(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function d(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && ((typeof n === "undefined" ? "undefined" : t(n)) === "object" || typeof n === "function") ? n : e;
        }
        function f(e, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : t(n)));
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
        var p = function(e) {
            f(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                v(this, n);
                var t = {
                    events: {
                        "click .nav-link:not(.disabled)": "clickItem",
                        "click .dropdown-item:not(.disabled)": "clickSubItem"
                    },
                    eventName: "click",
                    type: "base",
                    activeKey: "",
                    activeValue: "",
                    direction: "",
                    onClick: function e() {},
                    data: []
                };
                Object.assign(t, e);
                var i = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
                var a = i;
                i.$(".dropdown")[t.eventName](function() {
                    var e = Lego.UI.Util.getDirection($(this), $(this).children(".dropdown-menu"));
                    a.options.direction = e._y || "bottom";
                    $(this).addClass("open");
                    $(this).mouseleave(function() {
                        $(this).removeClass("open");
                    });
                });
                return i;
            }
            i(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options || {};
                    function t(e, t) {
                        var i = hx(a, e.children ? "dropdown" : "", e.key === n.activeKey ? "active" : "", e.disabled ? "disabled" : "", e.children ? "dropdown-toggle" : "", e.href ? e.href : "javascript:;", e.key ? e.key : "nav-item-" + t, val(e.value), Array.isArray(e.children) ? hx(r, n.direction ? "drop" + n.direction : "", e.children.map(function(e, n) {
                            return hx(o, e.divider ? hx(s) : hx(c, e.active ? "active" : "", e.disabled ? "disabled" : "", e.href ? e.href : "javascript:;", e.key ? e.key : "nav-sub-item-" + n, val(e.value)));
                        })) : "");
                        return i;
                    }
                    var i = hx(l, n.type === "inline" ? "nav-inline" : n.type === "tabs" ? "nav-tabs" : n.type === "pills" ? "nav-pills" : "", n.type === "pills-stacked" ? "nav-pills nav-stacked" : "", n.data.map(function(e, n) {
                        return t(e, n);
                    }));
                    return i;
                }
            }, {
                key: "clickItem",
                value: function e(n) {
                    n.stopPropagation();
                    var t = $(n.currentTarget), i = t.attr("id");
                    this.options.activeKey = i;
                    var a = this.options.data.find(function(e) {
                        return e.key === i;
                    });
                    if (typeof this.options.onClick === "function") this.options.onClick(this, a);
                }
            }, {
                key: "clickSubItem",
                value: function e(n) {
                    var t = this;
                    n.stopPropagation();
                    var i = $(n.currentTarget), a = i.attr("id");
                    var r = this.options.data.find(function(e) {
                        return e.key === t.options.activeKey;
                    });
                    if (r) {
                        r.children.forEach(function(e, n) {
                            e.active = e.key === a ? true : false;
                        });
                        this.refresh();
                    }
                    if (typeof this.options.onClick === "function") this.options.onClick(this, r);
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        Lego.components("navs", p);
        e.exports = p;
    },
    245: function(e, n) {
        "use strict";
        var t = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var a = u([ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);
        var r = u([ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ], [ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ]);
        var o = u([ "\n                    ", "\n                " ], [ "\n                    ", "\n                " ]);
        var s = u([ '<div class="dropdown-divider"></div>' ], [ '<div class="dropdown-divider"></div>' ]);
        var c = u([ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ], [ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ]);
        var l = u([ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);
        function u(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function v(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function d(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && ((typeof n === "undefined" ? "undefined" : t(n)) === "object" || typeof n === "function") ? n : e;
        }
        function f(e, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : t(n)));
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
        var p = function(e) {
            f(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                v(this, n);
                var t = {
                    events: {
                        "click .nav-link:not(.disabled)": "clickItem",
                        "click .dropdown-item:not(.disabled)": "clickSubItem"
                    },
                    eventName: "click",
                    type: "base",
                    activeKey: "",
                    activeValue: "",
                    direction: "",
                    onClick: function e() {},
                    data: []
                };
                Object.assign(t, e);
                var i = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
                var a = i;
                i.$(".dropdown")[t.eventName](function() {
                    var e = Lego.UI.Util.getDirection($(this), $(this).children(".dropdown-menu"));
                    a.options.direction = e._y || "bottom";
                    $(this).addClass("open");
                    $(this).mouseleave(function() {
                        $(this).removeClass("open");
                    });
                });
                return i;
            }
            i(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options || {};
                    function t(e, t) {
                        var i = hx(a, e.children ? "dropdown" : "", e.key === n.activeKey ? "active" : "", e.disabled ? "disabled" : "", e.children ? "dropdown-toggle" : "", e.href ? e.href : "javascript:;", e.key ? e.key : "nav-item-" + t, val(e.value), Array.isArray(e.children) ? hx(r, n.direction ? "drop" + n.direction : "", e.children.map(function(e, n) {
                            return hx(o, e.divider ? hx(s) : hx(c, e.active ? "active" : "", e.disabled ? "disabled" : "", e.href ? e.href : "javascript:;", e.key ? e.key : "nav-sub-item-" + n, val(e.value)));
                        })) : "");
                        return i;
                    }
                    var i = hx(l, n.type === "inline" ? "nav-inline" : n.type === "tabs" ? "nav-tabs" : n.type === "pills" ? "nav-pills" : "", n.type === "pills-stacked" ? "nav-pills nav-stacked" : "", n.data.map(function(e, n) {
                        return t(e, n);
                    }));
                    return i;
                }
            }, {
                key: "clickItem",
                value: function e(n) {
                    n.stopPropagation();
                    var t = $(n.currentTarget), i = t.attr("id");
                    this.options.activeKey = i;
                    var a = this.options.data.find(function(e) {
                        return e.key === i;
                    });
                    if (typeof this.options.onClick === "function") this.options.onClick(this, a);
                }
            }, {
                key: "clickSubItem",
                value: function e(n) {
                    var t = this;
                    n.stopPropagation();
                    var i = $(n.currentTarget), a = i.attr("id");
                    var r = this.options.data.find(function(e) {
                        return e.key === t.options.activeKey;
                    });
                    if (r) {
                        r.children.forEach(function(e, n) {
                            e.active = e.key === a ? true : false;
                        });
                        this.refresh();
                    }
                    if (typeof this.options.onClick === "function") this.options.onClick(this, r);
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        Lego.components("navs", p);
        var b = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n;
            };
        }();
        var y = m([ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ], [ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ]);
        var h = m([ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ], [ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ]);
        function m(e, n) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }));
        }
        function g(e, n) {
            if (!(e instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function w(e, n) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return n && ((typeof n === "undefined" ? "undefined" : t(n)) === "object" || typeof n === "function") ? n : e;
        }
        function k(e, n) {
            if (typeof n !== "function" && n !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : t(n)));
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
        var O = function(e) {
            k(n, e);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                g(this, n);
                var t = {
                    events: {},
                    eventName: "click",
                    type: "line",
                    size: "default",
                    closable: false,
                    activeKey: "",
                    onClose: function e() {},
                    tabPosition: "top",
                    onEdit: function e() {},
                    hideAdd: false,
                    animate: "",
                    data: [],
                    components: [ {
                        el: "#" + e.vid + "-navs",
                        eventName: e.eventName || "click",
                        type: "tabs",
                        activeKey: e.activeKey,
                        onClick: function e(n, t) {
                            var i = this.context;
                            if (!t.children) {
                                i.options.activeKey = t.key;
                            } else {
                                (function() {
                                    var e = t.children.find(function(e) {
                                        return e.active == true;
                                    });
                                    if (e) {
                                        i.options.data.forEach(function(n) {
                                            if (n.key == t.key) {
                                                if (e.content) {
                                                    n.content = e.content;
                                                    i.options.activeKey = t.key;
                                                }
                                            }
                                        });
                                    }
                                })();
                            }
                        },
                        data: e.data
                    } ]
                };
                Object.assign(t, e);
                return w(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            }
            b(n, [ {
                key: "render",
                value: function e() {
                    var n = this.options || {};
                    var t = hx(y, n.vid + "-navs", n.data.map(function(e) {
                        if (!e.disabled && e.content) {
                            return hx(h, n.animate ? n.animate : "", e.key === n.activeKey ? "active in" : "", e.key, e.content ? e.content : "");
                        }
                    }));
                    return t;
                }
            }, {
                key: "close",
                value: function e(n) {
                    var t = this;
                    n.stopPropagation();
                    this.$el.slideUp("normal", function() {
                        t.remove();
                    });
                    if (typeof this.options.onClose === "function") this.options.onClose(this, n);
                }
            } ]);
            return n;
        }(Lego.UI.Baseview);
        Lego.components("tabs", O);
        e.exports = O;
    }
});