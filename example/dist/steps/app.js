(function(t) {
    var e = {};
    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            exports: {},
            id: o,
            loaded: false
        };
        t[o].call(i.exports, i, i.exports, n);
        i.loaded = true;
        return i.exports;
    }
    n.m = t;
    n.c = e;
    n.p = "./dist/";
    return n(0);
})({
    0: function(t, e, n) {
        "use strict";
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var i = n(246);
        var r = c(i);
        var s = n(247);
        var a = c(s);
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = function() {
            function t() {
                l(this, t);
                return {
                    "/steps": [ this.index, this.tabs ],
                    "/steps/:tabs": [ this.index, this.tabs ]
                };
            }
            o(t, [ {
                key: "index",
                value: function t() {
                    this.viewObj = HBY.create(r.default, {
                        el: HBY.config.pageEl,
                        scrollbar: {},
                        currentTab: 0
                    });
                }
            }, {
                key: "tabs",
                value: function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.viewObj.options.currentTab = e || 0;
                    var n = [ a.default ];
                    HBY.create(n[e], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return t;
        }();
        HBY.router(new u());
    },
    5: function(t, e) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var i = r([ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ]);
        function r(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function s(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function a(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && ((typeof e === "undefined" ? "undefined" : n(e)) === "object" || typeof e === "function") ? e : t;
        }
        function c(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : n(e)));
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
        }
        var l = function(t) {
            c(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                s(this, e);
                var n = {
                    events: {
                        click: "onClick"
                    },
                    text: "button",
                    type: "secondary",
                    htmlType: "button",
                    icon: "",
                    shape: "",
                    size: "default",
                    loading: false,
                    onClick: function t() {}
                };
                Object.assign(n, t);
                return a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
            }
            o(e, [ {
                key: "render",
                value: function t() {
                    var e = this.options || {};
                    var n = hx(i, e.htmlType, e.type, e.html || e.text);
                    return n;
                }
            }, {
                key: "onClick",
                value: function t(e) {
                    e.stopPropagation();
                    if (typeof this.options.onClick == "function") this.options.onClick(this, e);
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        Lego.components("buttons", l);
        t.exports = l;
    },
    246: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var n = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var o = i([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function i(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function r(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function s(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && (typeof e === "object" || typeof e === "function") ? e : t;
        }
        function a(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
        }
        var c = function(t) {
            a(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                r(this, e);
                var n = {
                    currentTab: 0
                };
                Object.assign(n, t);
                return s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
            }
            n(e, [ {
                key: "render",
                value: function t() {
                    var e = this.options;
                    var n = hx(o, e.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        e.default = c;
    },
    247: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var i = p([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n            <div class="textarea_content_text" id="content" style="width:284px; height: 100px; border: 1px #ccc solid; margin-bottom:10px;"></div>\n              <facial id="facial1"></facial>\n              <style>.lego-facial{width: 30px;height:30px;}</style>\n            </div>\n            <div class="col-sm-6">\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n            <div class="textarea_content_text" id="content" style="width:284px; height: 100px; border: 1px #ccc solid; margin-bottom:10px;"></div>\n              <facial id="facial1"></facial>\n              <style>.lego-facial{width: 30px;height:30px;}</style>\n            </div>\n            <div class="col-sm-6">\n            </div>\n          </div>\n        </div>\n        ' ]);
        var r = n(267);
        var s = f(r);
        var a = n(5);
        var c = f(a);
        var l = n(269);
        var u = f(l);
        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function p(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function d(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function v(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && (typeof e === "object" || typeof e === "function") ? e : t;
        }
        function b(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
        }
        var h = function(t) {
            b(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                d(this, e);
                var n = {
                    components: [ {
                        el: "#steps1",
                        data: [ {
                            title: "步骤一",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤二",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤三",
                            description: "这是描述内容这是描述内容"
                        } ],
                        onNext: function t(e, n) {
                            console.warn("下一步", n);
                        },
                        onPrevious: function t(e, n) {
                            console.warn("上一步", n);
                        }
                    }, {
                        el: "#steps2",
                        titleWidth: 40,
                        showDescription: false,
                        showIcon: false,
                        showNum: false,
                        data: [ {
                            title: "步骤一",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤二",
                            description: "这是描述内容这是描述内容"
                        }, {
                            title: "步骤三",
                            description: "这是描述内容这是描述内容"
                        } ],
                        onNext: function t(e, n) {
                            console.warn("下一步", n);
                        },
                        onPrevious: function t(e, n) {
                            console.warn("上一步", n);
                        }
                    }, {
                        el: "#button1",
                        text: "上一步",
                        onClick: function t(e) {
                            var n = Lego.getView("#steps1");
                            if (n) n.previous();
                        }
                    }, {
                        el: "#button2",
                        text: "下一步",
                        onClick: function t(e) {
                            var n = Lego.getView("#steps1");
                            if (n) n.next();
                        }
                    }, {
                        el: "#button3",
                        text: "上一步",
                        onClick: function t(e) {
                            var n = Lego.getView("#steps2");
                            if (n) n.previous();
                        }
                    }, {
                        el: "#button4",
                        text: "下一步",
                        onClick: function t(e) {
                            var n = Lego.getView("#steps2");
                            if (n) n.next();
                        }
                    }, {
                        el: "#facial1",
                        target: "#content",
                        iconsUrl: "/example/dist/img/face_icons/",
                        onClick: function t(e) {
                            var n = Lego.getView("#steps2");
                            if (n) n.next();
                        }
                    } ]
                };
                Object.assign(n, t);
                var o = v(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
                o.$("#content").attr("contenteditable", true);
                return o;
            }
            o(e, [ {
                key: "render",
                value: function t() {
                    var e = hx(i);
                    return e;
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        e.default = h;
    },
    267: function(t, e) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var i = u([ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ]);
        var r = u([ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);
        var s = u([ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ], [ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ]);
        var a = u([ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ], [ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ]);
        var c = u([ '<span class="lego-steps-icon">', "</span>" ], [ '<span class="lego-steps-icon">', "</span>" ]);
        var l = u([ '<div class="lego-steps-description">', "</div>" ], [ '<div class="lego-steps-description">', "</div>" ]);
        function u(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function f(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function p(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && ((typeof e === "undefined" ? "undefined" : n(e)) === "object" || typeof e === "function") ? e : t;
        }
        function d(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : n(e)));
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
        }
        var v = function(t) {
            d(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                f(this, e);
                var n = {
                    current: 0,
                    status: "process",
                    size: "default",
                    direction: "horizontal",
                    titleWidth: 120,
                    showDescription: true,
                    showIcon: true,
                    showNum: true,
                    data: [],
                    onNext: function t() {},
                    onPrevious: function t() {}
                };
                Object.assign(n, t);
                return p(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
            }
            o(e, [ {
                key: "render",
                value: function t() {
                    var e = this.options, n = e.data.length, o = 10 / (n - 1) * 10;
                    var u = hx(i, e.direction, e.direction, !e.showNum ? "lego-steps-sm" : "", e.data.map(function(t, i) {
                        return hx(r, e.current == i ? e.status : t.status ? t.status : "wait", i == n - 1 ? "" : "width:" + o + "%;", e.titleWidth / 2, i < n ? hx(s, i == n - 1 ? "padding-right:" + e.titleWidth + "px" : "padding-right:" + e.titleWidth / 2 + "px") : "", e.showIcon ? hx(a, t.icon ? t.icon : t.status == "finish" ? "anticon-check" : "", t.status !== "finish" ? t.icon ? t.icon : e.showNum ? i + 1 : "" : "") : hx(c, e.showNum ? i + 1 : ""), val(t.title), e.showDescription ? hx(l, val(t.description)) : "");
                    }));
                    return u;
                }
            }, {
                key: "changeStatus",
                value: function t() {
                    var e = this.options;
                    if (e.current > e.data.length) e.current = e.data.length;
                    e.data.forEach(function(t, n) {
                        t.status = "wait";
                        if (n < e.current) t.status = "finish";
                        if (e.current == n) t.status = e.status;
                    });
                    this.refresh();
                }
            }, {
                key: "next",
                value: function t(e) {
                    var n = this.options;
                    n.current++;
                    this.changeStatus();
                    if (typeof n.onNext == "function") n.onNext(this, n.current);
                }
            }, {
                key: "previous",
                value: function t(e) {
                    var n = this.options;
                    n.current--;
                    this.changeStatus();
                    if (typeof n.onPrevious == "function") n.onPrevious(this, n.current);
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        Lego.components("steps", v);
        t.exports = v;
    },
    269: function(t, e) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                if (n) t(e.prototype, n);
                if (o) t(e, o);
                return e;
            };
        }();
        var i = c([ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ]);
        var r = c([ '<i class="lego-facial-trigger">', "</i>" ], [ '<i class="lego-facial-trigger">', "</i>" ]);
        var s = c([ '<i class="lego-facial-trigger ', '"></i>' ], [ '<i class="lego-facial-trigger ', '"></i>' ]);
        var a = c([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ]);
        function c(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function u(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && ((typeof e === "undefined" ? "undefined" : n(e)) === "object" || typeof e === "function") ? e : t;
        }
        function f(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : n(e)));
            }
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
        }
        var p = function(t) {
            f(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                l(this, e);
                var n = {
                    events: {
                        "click .lego-facial-item a": "clickItem"
                    },
                    target: "",
                    icon: "anticon anticon-smile-o",
                    text: "",
                    eventName: "hover",
                    iconsUrl: "",
                    itemClassPrefix: "f0",
                    direction: "",
                    data: [ "[微笑]", "[撇嘴]", "[色]", "[发呆]", "[得意]", "[流泪]", "[害羞]", "[闭嘴]", "[睡]", "[大哭]", "[尴尬]", "[发怒]", "[调皮]", "[呲牙]", "[惊讶]", "[酷]", "[冷汗]", "[抓狂]", "[吐]", "[偷笑]", "[白眼]", "[傲慢]", "[饥饿]", "[困]", "[惊恐]", "[流汗]", "[憨笑]", "[大兵]", "[奋斗]", "[疑问]", "[嘘]", "[晕]", "[敲打]", "[再见]", "[擦汗]", "[抠鼻]", "[鼓掌]", "[糗大了]", "[坏笑]", "[左哼哼]", "[右哼哼]", "[哈欠]", "[鄙视]", "[委屈]", "[快哭了]", "[阴脸]", "[亲亲]", "[吓]", "[可怜]", "[菜刀]", "[啤酒]", "[篮球]", "[乒乓球]", "[咖啡]", "[示爱]", "[爱心]", "[心碎]", "[刀]", "[足球]", "[瓢虫]", "[便便]", "[拥抱]", "[强]", "[弱]", "[握手]", "[胜利]", "[抱拳]", "[勾引]", "[拳头]", "[差劲]", "[爱你]", "[NO]", "[OK]", "[可爱]", "[咒骂]", "[折磨]", "[玫瑰]", "[凋谢]", "[衰]", "[骷髅]", "[猪头]", "[闪电]", "[炸弹]", "[饭]", "[西瓜]", "[蛋糕]", "[礼物]", "[太阳]", "[月亮]", "[鞭炮]" ]
                };
                Object.assign(n, t);
                var o = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
                o.cursorPos = null;
                o.cursorContainer = null;
                return o;
            }
            o(e, [ {
                key: "render",
                value: function t() {
                    var e = this.options, n = e.data.length, o = 10 / (n - 1) * 10;
                    var c = hx(i, e.text ? hx(r, val(e.text)) : hx(s, e.icon), e.direction ? "drop" + e.direction : "", e.data.map(function(t, n) {
                        return hx(a, e.itemClassPrefix, n, t, e.iconsUrl, e.itemClassPrefix, n);
                    }));
                    return c;
                }
            }, {
                key: "renderAfter",
                value: function t() {
                    var e = this.$el, n = this, o = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    function i(t) {
                        $("body, .modal-body").trigger("click");
                        t.stopPropagation();
                        var o = Lego.UI.Util.getDirection($("body"), n.$el);
                        n.options.direction = o._y || "bottom";
                        n.show();
                        if (n.options.eventName == "hover") {
                            e.mouseleave(function() {
                                n.close();
                            });
                        }
                    }
                    if (this.options.eventName == "click") {
                        var r = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(r).on(r, function() {
                            n.close();
                        });
                        e.off(r).on(r, i);
                    } else {
                        e[this.options.eventName](i);
                    }
                    o.off("click keyup").on("click keyup", function(t) {
                        var e = $(t.currentTarget);
                        n.getCursorPos(e);
                    });
                }
            }, {
                key: "clickItem",
                value: function t(e) {
                    var n = $(e.currentTarget), o = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    this.addComma(o, n.attr("title"));
                    this.close();
                }
            }, {
                key: "show",
                value: function t(e) {
                    this.$el.addClass("dropdown open");
                }
            }, {
                key: "close",
                value: function t(e) {
                    this.$el.removeClass("dropdown open");
                }
            }, {
                key: "getCursorPos",
                value: function t(e) {
                    var n = void 0, o = void 0, i = this;
                    setTimeout(function() {
                        if (window.getSelection) {
                            n = window.getSelection();
                            o = n.getRangeAt(0);
                            i.cursorPos = o.startOffset;
                            i.cursorContainer = o.startContainer;
                        } else if (document.selection) {
                            n = document.selection;
                            o = n.createRange();
                            o.moveStart("character", -1);
                            i.cursorPos = o.text.length;
                        } else if (e.selectionStart || e.selectionStart == "0") {
                            i.cursorPos = e.selectionStart;
                        }
                    }, 0);
                }
            }, {
                key: "addComma",
                value: function t(e, n) {
                    var o = void 0, i = void 0, r = e[0], s = this;
                    r.focus();
                    if (!e.html().length) this.cursorPos = 0;
                    n = Lego.UI.Util.textToFace(n, this.options.data, this.options.iconsUrl + this.options.itemClassPrefix);
                    if (window.getSelection) {
                        o = window.getSelection();
                        i = o.getRangeAt(0);
                        i.collapse(false);
                        if (this.cursorPos) {
                            i.collapse(true);
                            i.setStart(this.cursorContainer, this.cursorPos);
                            i.setEnd(this.cursorContainer, this.cursorPos);
                        }
                        var a = i.createContextualFragment(n);
                        var c = a.lastChild;
                        i.insertNode(a);
                        if (c) {
                            i.setEndAfter(c);
                            i.setStartAfter(c);
                        }
                        this.cursorPos = i.startOffset;
                        this.cursorContainer = i.startContainer;
                        o.removeAllRanges();
                        o.addRange(i);
                    } else if (document.selection) {
                        o = document.selection;
                        i = o.createRange();
                        i.collapse(true);
                        i.setEnd(r, pos);
                        i.setStart(r, pos);
                        i.pasteHTML(n);
                        i.select();
                    }
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        Lego.components("facial", p);
        t.exports = p;
    }
});