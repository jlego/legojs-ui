(function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            exports: {},
            id: o,
            loaded: false
        };
        e[o].call(i.exports, i, i.exports, n);
        i.loaded = true;
        return i.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})([ function(e, t, n) {
    "use strict";
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = n(1);
    var r = h(i);
    var a = n(2);
    var s = h(a);
    var l = n(4);
    var c = h(l);
    var u = n(7);
    var f = h(u);
    var d = n(9);
    var p = h(d);
    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function b(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var v = function() {
        function e() {
            b(this, e);
            return {
                "/alert": [ this.index, this.tabs ],
                "/alert/:tabs": [ this.index, this.tabs ]
            };
        }
        o(e, [ {
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
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                this.viewObj.options.currentTab = t || 0;
                var n = [ s.default, c.default, f.default ];
                HBY.create(n[t], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new v());
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var o = i([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert警告提示</a>\n                <a href="#/alert/1" class="', '">Button按钮</a>\n                <a href="#/alert/2" class="', '">Table表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert警告提示</a>\n                <a href="#/alert/1" class="', '">Button按钮</a>\n                <a href="#/alert/2" class="', '">Table表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function i(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function r(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function a(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function s(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var l = function(e) {
        s(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            r(this, t);
            var n = {
                events: {},
                currentTab: 0
            };
            Object.assign(n, e);
            return a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var n = hx(o, t.currentTab == 0 ? "active" : "", t.currentTab == 1 ? "active" : "", t.currentTab == 2 ? "active" : "");
                return n;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = l;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = l([ '\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        ' ], [ '\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        ' ]);
    var r = n(3);
    var a = s(r);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function l(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function c(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function u(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function f(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var d = function(e) {
        f(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            c(this, t);
            var n = {
                events: {
                    "click .alert": "theClick"
                },
                components: [ {
                    el: "#alert1",
                    type: "success",
                    closable: true,
                    showIcon: false,
                    message: "警告提示内容"
                }, {
                    el: "#alert2",
                    type: "info",
                    closable: true,
                    showIcon: true,
                    message: "警告提示内容"
                }, {
                    el: "#alert3",
                    type: "warning",
                    closable: true,
                    showIcon: false,
                    message: "警告提示内容",
                    description: "警告提示的辅助性文字介绍"
                }, {
                    el: "#alert4",
                    type: "error",
                    closable: true,
                    showIcon: true,
                    message: "警告提示内容",
                    description: "警告提示的辅助性文字介绍"
                } ]
            };
            Object.assign(n, e);
            return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = hx(i);
                return t;
            }
        }, {
            key: "theClick",
            value: function e(t) {
                var n = $(t.currentTarget), o = HBY.getView(n);
                switch (o.options.type) {
                  case "success":
                    o.options.type = "info";
                    break;

                  case "info":
                    o.options.type = "warning";
                    break;

                  case "warning":
                    o.options.type = "error";
                    break;

                  case "error":
                    o.options.type = "success";
                    break;
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = d;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = s([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);
    var r = s([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);
    var a = s([ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ], [ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ]);
    function s(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function l(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function c(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function u(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var f = function(e) {
        u(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
            var n = {
                events: {
                    "click .lego-alert-close-icon": "close"
                },
                type: "info",
                closable: false,
                closeText: "",
                message: "",
                description: "",
                onClose: function e() {},
                showIcon: true,
                banner: false
            };
            Object.assign(n, e);
            return c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = "";
                switch (t.type) {
                  case "success":
                    n = "check";
                    break;

                  case "info":
                    n = "info";
                    break;

                  case "warning":
                    n = "exclamation";
                    break;

                  case "error":
                    n = "cross";
                    break;
                }
                var o = hx(i, t.type, t.description ? "lego-alert-with-description" : "", t.showIcon ? "" : "lego-alert-no-icon", t.description ? "anticon-" + n + "-circle-o" : "anticon-" + n + "-circle", t.showIcon ? "" : "-no", t.showIcon ? "" : "none", t.message, t.description ? hx(r, typeof t.description == "string" ? t.description : "") : "", t.closable ? hx(a) : "");
                return o;
            }
        }, {
            key: "close",
            value: function e(t) {
                var n = this;
                t.stopPropagation();
                this.$el.slideUp("normal", function() {
                    n.remove();
                });
                if (typeof this.options.onClose === "function") this.options.onClose(this, t);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("alert", f);
    e.exports = f;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = d([ '<div><buttons id="btnId"></buttons></div>' ], [ '<div><buttons id="btnId"></buttons></div>' ]), r = d([ '<div><buttons id="btnId2"></buttons></div>' ], [ '<div><buttons id="btnId2"></buttons></div>' ]), a = d([ '\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ' ], [ '\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ' ]);
    var s = n(5);
    var l = f(s);
    var c = n(6);
    var u = f(c);
    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function d(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function p(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function b(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var v = function(e) {
        b(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            p(this, t);
            var n = {
                events: {},
                components: [ {
                    el: "#button1",
                    type: "info",
                    text: "模态框",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button1");
                        Lego.UI.modal({
                            type: "layer",
                            content: "这是内容啊",
                            confirm: {
                                msgType: "error",
                                content: "你确定要退出吗？"
                            },
                            onOk: function e(t) {
                                console.warn("是真的");
                            }
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button2",
                    type: "primary",
                    text: "对话框",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button2");
                        Lego.UI.modal({
                            msgType: "success",
                            title: "对话框",
                            content: "成功了！",
                            confirm: {
                                msgType: "error",
                                content: "你确定要退出吗？"
                            },
                            onOk: function e(t) {
                                console.warn("是真的");
                            }
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button3",
                    type: "secondary",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button3");
                        Lego.UI.modal({
                            type: "modal",
                            title: "内容模态框",
                            content: hx(i),
                            isMiddle: true,
                            width: 500,
                            components: [ {
                                el: "#btnId",
                                text: "点击我吧",
                                onClick: function e() {
                                    Lego.UI.modal({
                                        type: "modal",
                                        title: "子内容模态框",
                                        content: hx(r),
                                        isMiddle: true,
                                        backdrop: false,
                                        width: 500,
                                        height: 300,
                                        components: [ {
                                            el: "#btnId2",
                                            text: "点击我吧",
                                            type: "danger",
                                            onClick: function e() {
                                                console.warn("ooooooo");
                                            }
                                        } ]
                                    });
                                }
                            } ]
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button4",
                    type: "link",
                    onClick: function e() {
                        console.warn("点击了此按钮button4");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button5",
                    type: "success",
                    onClick: function e() {
                        console.warn("点击了此按钮button5");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button6",
                    type: "warning",
                    onClick: function e() {
                        console.warn("点击了此按钮button6");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button7",
                    type: "danger",
                    onClick: function e() {
                        console.warn("点击了此按钮button7");
                    },
                    style: {
                        marginRight: 10
                    }
                } ]
            };
            Object.assign(n, e);
            var o = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var a = '\n    var legojs = {\n        nickName: "freefish",\n        site: "https://github.com/jlego/legojs"\n    }';
            var s = "\n| h1    |    h2   |      h3 |\n|:------|:-------:|--------:|\n| 100   | [a][1]  | ![b][2] |\n| *foo* | **bar** | ~~baz~~ |\n";
            o.$("#md").html(markdown.makeHtml(a));
            o.$("#tableDiv").html(markdown.makeHtml(s));
            o.$("pre").each(function(e, t) {
                hljs.highlightBlock(t);
            });
            return o;
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = hx(a);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = v;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = r([ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ]);
    function r(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function a(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function l(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var c = function(e) {
        l(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            a(this, t);
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
                onClick: function e() {}
            };
            Object.assign(n, e);
            return s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = hx(i, t.htmlType, t.type, t.html || t.text);
                return n;
            }
        }, {
            key: "onClick",
            value: function e(t) {
                t.stopPropagation();
                if (typeof this.options.onClick == "function") this.options.onClick(this, t);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("buttons", c);
    e.exports = c;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var o = function(e) {
        var t = false;
        var n = 1e6;
        var o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        function i(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }
        function r(e) {
            return (e[0] || e).nodeType;
        }
        function a() {
            return {
                bindType: t.end,
                delegateType: t.end,
                handle: function t(n) {
                    if (e(n.target).is(this)) {
                        return n.handleObj.handler.apply(this, arguments);
                    }
                    return undefined;
                }
            };
        }
        function s() {
            if (window.QUnit) {
                return false;
            }
            var e = document.createElement("bootstrap");
            for (var t in o) {
                if (e.style[t] !== undefined) {
                    return {
                        end: o[t]
                    };
                }
            }
            return false;
        }
        function l(t) {
            var n = this;
            var o = false;
            e(this).one(u.TRANSITION_END, function() {
                o = true;
            });
            setTimeout(function() {
                if (!o) {
                    u.triggerTransitionEnd(n);
                }
            }, t);
            return this;
        }
        function c() {
            t = s();
            e.fn.emulateTransitionEnd = l;
            if (u.supportsTransitionEnd()) {
                e.event.special[u.TRANSITION_END] = a();
            }
        }
        var u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function e(t) {
                do {
                    t += ~~(Math.random() * n);
                } while (document.getElementById(t));
                return t;
            },
            getSelectorFromElement: function e(t) {
                var n = t.getAttribute("data-target");
                if (!n) {
                    n = t.getAttribute("href") || "";
                    n = /^#[a-z]/i.test(n) ? n : null;
                }
                return n;
            },
            reflow: function e(t) {
                new Function("bs", "return bs")(t.offsetHeight);
            },
            triggerTransitionEnd: function n(o) {
                e(o).trigger(t.end);
            },
            supportsTransitionEnd: function e() {
                return Boolean(t);
            },
            typeCheckConfig: function e(t, n, o) {
                for (var a in o) {
                    if (o.hasOwnProperty(a)) {
                        var s = o[a];
                        var l = n[a];
                        var c = void 0;
                        if (l && r(l)) {
                            c = "element";
                        } else {
                            c = i(l);
                        }
                        if (!new RegExp(s).test(c)) {
                            throw new Error(t.toUpperCase() + ": " + ('Option "' + a + '" provided type "' + c + '" ') + ('but expected type "' + s + '".'));
                        }
                    }
                }
            }
        };
        c();
        return u;
    }(jQuery);
    var i = typeof Symbol === "function" && n(Symbol.iterator) === "symbol" ? function(e) {
        return typeof e === "undefined" ? "undefined" : n(e);
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : n(e);
    };
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    function a(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var s = function(e) {
        var t = "modal";
        var n = "4.0.0-alpha.5";
        var s = "bs.modal";
        var l = "." + s;
        var c = ".data-api";
        var u = e.fn[t];
        var f = 300;
        var d = 150;
        var p = 27;
        var h = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        };
        var b = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        };
        var v = {
            HIDE: "hide" + l,
            HIDDEN: "hidden" + l,
            SHOW: "show" + l,
            SHOWN: "shown" + l,
            FOCUSIN: "focusin" + l,
            RESIZE: "resize" + l,
            CLICK_DISMISS: "click.dismiss" + l,
            KEYDOWN_DISMISS: "keydown.dismiss" + l,
            MOUSEUP_DISMISS: "mouseup.dismiss" + l,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
            CLICK_DATA_API: "click" + l + c
        };
        var g = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        };
        var y = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
        };
        var m = function() {
            function c(t, n) {
                a(this, c);
                this._config = this._getConfig(n);
                this._element = t;
                this._dialog = e(t).find(y.DIALOG)[0];
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._originalBodyPadding = 0;
                this._scrollbarWidth = 0;
            }
            r(c, [ {
                key: "toggle",
                value: function e(t) {
                    return this._isShown ? this.hide() : this.show(t);
                }
            }, {
                key: "show",
                value: function t(n) {
                    var o = this;
                    var i = e.Event(v.SHOW, {
                        relatedTarget: n
                    });
                    e(this._element).trigger(i);
                    if (this._isShown || i.isDefaultPrevented()) {
                        return;
                    }
                    this._isShown = true;
                    this._checkScrollbar();
                    this._setScrollbar();
                    e(document.body).addClass(g.OPEN);
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    e(this._element).on(v.CLICK_DISMISS, y.DATA_DISMISS, e.proxy(this.hide, this));
                    e(this._dialog).on(v.MOUSEDOWN_DISMISS, function() {
                        e(o._element).one(v.MOUSEUP_DISMISS, function(t) {
                            if (e(t.target).is(o._element)) {
                                o._ignoreBackdropClick = true;
                            }
                        });
                    });
                    this._showBackdrop(e.proxy(this._showElement, this, n));
                }
            }, {
                key: "hide",
                value: function t(n) {
                    if (n) {
                        n.preventDefault();
                    }
                    var i = e.Event(v.HIDE);
                    e(this._element).trigger(i);
                    if (!this._isShown || i.isDefaultPrevented()) {
                        return;
                    }
                    this._isShown = false;
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    e(document).off(v.FOCUSIN);
                    e(this._element).removeClass(g.IN);
                    e(this._element).off(v.CLICK_DISMISS);
                    e(this._dialog).off(v.MOUSEDOWN_DISMISS);
                    if (o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE)) {
                        e(this._element).one(o.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(f);
                    } else {
                        this._hideModal();
                    }
                }
            }, {
                key: "dispose",
                value: function t() {
                    e.removeData(this._element, s);
                    e(window).off(l);
                    e(document).off(l);
                    e(this._element).off(l);
                    e(this._backdrop).off(l);
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
                value: function n(i) {
                    i = e.extend({}, h, i);
                    o.typeCheckConfig(t, i, b);
                    return i;
                }
            }, {
                key: "_showElement",
                value: function t(n) {
                    var i = this;
                    var r = o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE);
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                        document.body.appendChild(this._element);
                    }
                    this._element.style.display = "block";
                    this._element.removeAttribute("aria-hidden");
                    this._element.scrollTop = 0;
                    if (r) {
                        o.reflow(this._element);
                    }
                    e(this._element).addClass(g.IN);
                    if (this._config.focus) {
                        this._enforceFocus();
                    }
                    var a = e.Event(v.SHOWN, {
                        relatedTarget: n
                    });
                    var s = function t() {
                        if (i._config.focus) {
                            i._element.focus();
                        }
                        e(i._element).trigger(a);
                    };
                    if (r) {
                        e(this._dialog).one(o.TRANSITION_END, s).emulateTransitionEnd(f);
                    } else {
                        s();
                    }
                }
            }, {
                key: "_enforceFocus",
                value: function t() {
                    var n = this;
                    e(document).off(v.FOCUSIN).on(v.FOCUSIN, function(t) {
                        if (document !== t.target && n._element !== t.target && !e(n._element).has(t.target).length) {
                            n._element.focus();
                        }
                    });
                }
            }, {
                key: "_setEscapeEvent",
                value: function t() {
                    var n = this;
                    if (this._isShown && this._config.keyboard) {
                        e(this._element).on(v.KEYDOWN_DISMISS, function(e) {
                            if (e.which === p) {
                                n.hide();
                            }
                        });
                    } else if (!this._isShown) {
                        e(this._element).off(v.KEYDOWN_DISMISS);
                    }
                }
            }, {
                key: "_setResizeEvent",
                value: function t() {
                    if (this._isShown) {
                        e(window).on(v.RESIZE, e.proxy(this._handleUpdate, this));
                    } else {
                        e(window).off(v.RESIZE);
                    }
                }
            }, {
                key: "_hideModal",
                value: function t() {
                    var n = this;
                    this._element.style.display = "none";
                    this._element.setAttribute("aria-hidden", "true");
                    this._showBackdrop(function() {
                        e(document.body).removeClass(g.OPEN);
                        n._resetAdjustments();
                        n._resetScrollbar();
                        e(n._element).trigger(v.HIDDEN);
                    });
                }
            }, {
                key: "_removeBackdrop",
                value: function t() {
                    if (this._backdrop) {
                        e(this._backdrop).remove();
                        this._backdrop = null;
                    }
                }
            }, {
                key: "_showBackdrop",
                value: function t(n) {
                    var i = this;
                    var r = e(this._element).hasClass(g.FADE) ? g.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var a = o.supportsTransitionEnd() && r;
                        this._backdrop = document.createElement("div");
                        this._backdrop.className = g.BACKDROP;
                        if (r) {
                            e(this._backdrop).addClass(r);
                        }
                        e(this._backdrop).appendTo(document.body);
                        e(this._element).on(v.CLICK_DISMISS, function(e) {
                            if (i._ignoreBackdropClick) {
                                i._ignoreBackdropClick = false;
                                return;
                            }
                            if (e.target !== e.currentTarget) {
                                return;
                            }
                            if (i._config.backdrop === "static") {
                                i._element.focus();
                            } else {
                                i.hide();
                            }
                        });
                        if (a) {
                            o.reflow(this._backdrop);
                        }
                        e(this._backdrop).addClass(g.IN);
                        if (!n) {
                            return;
                        }
                        if (!a) {
                            n();
                            return;
                        }
                        e(this._backdrop).one(o.TRANSITION_END, n).emulateTransitionEnd(d);
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(g.IN);
                        var s = function e() {
                            i._removeBackdrop();
                            if (n) {
                                n();
                            }
                        };
                        if (o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE)) {
                            e(this._backdrop).one(o.TRANSITION_END, s).emulateTransitionEnd(d);
                        } else {
                            s();
                        }
                    } else if (n) {
                        n();
                    }
                }
            }, {
                key: "_handleUpdate",
                value: function e() {
                    this._adjustDialog();
                }
            }, {
                key: "_adjustDialog",
                value: function e() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    if (!this._isBodyOverflowing && t) {
                        this._element.style.paddingLeft = this._scrollbarWidth + "px";
                    }
                    if (this._isBodyOverflowing && !t) {
                        this._element.style.paddingRight = this._scrollbarWidth + "px";
                    }
                }
            }, {
                key: "_resetAdjustments",
                value: function e() {
                    this._element.style.paddingLeft = "";
                    this._element.style.paddingRight = "";
                }
            }, {
                key: "_checkScrollbar",
                value: function e() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                    this._scrollbarWidth = this._getScrollbarWidth();
                }
            }, {
                key: "_setScrollbar",
                value: function t() {
                    var n = parseInt(e(y.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "";
                    if (this._isBodyOverflowing) {
                        document.body.style.paddingRight = n + this._scrollbarWidth + "px";
                    }
                }
            }, {
                key: "_resetScrollbar",
                value: function e() {
                    document.body.style.paddingRight = this._originalBodyPadding;
                }
            }, {
                key: "_getScrollbarWidth",
                value: function e() {
                    var t = document.createElement("div");
                    t.className = g.SCROLLBAR_MEASURER;
                    document.body.appendChild(t);
                    var n = t.offsetWidth - t.clientWidth;
                    document.body.removeChild(t);
                    return n;
                }
            } ], [ {
                key: "_jQueryInterface",
                value: function t(n, o) {
                    return this.each(function() {
                        var t = e(this).data(s);
                        var r = e.extend({}, c.Default, e(this).data(), (typeof n === "undefined" ? "undefined" : i(n)) === "object" && n);
                        if (!t) {
                            t = new c(this, r);
                            e(this).data(s, t);
                        }
                        if (typeof n === "string") {
                            if (t[n] === undefined) {
                                throw new Error('No method named "' + n + '"');
                            }
                            t[n](o);
                        } else if (r.show) {
                            t.show(o);
                        }
                    });
                }
            }, {
                key: "VERSION",
                get: function e() {
                    return n;
                }
            }, {
                key: "Default",
                get: function e() {
                    return h;
                }
            } ]);
            return c;
        }();
        e(document).on(v.CLICK_DATA_API, y.DATA_TOGGLE, function(t) {
            var n = this;
            var i = void 0;
            var r = o.getSelectorFromElement(this);
            if (r) {
                i = e(r)[0];
            }
            var a = e(i).data(s) ? "toggle" : e.extend({}, e(i).data(), e(this).data());
            if (this.tagName === "A") {
                t.preventDefault();
            }
            var l = e(i).one(v.SHOW, function(t) {
                if (t.isDefaultPrevented()) {
                    return;
                }
                l.one(v.HIDDEN, function() {
                    if (e(n).is(":visible")) {
                        n.focus();
                    }
                });
            });
            m._jQueryInterface.call(e(i), a, this);
        });
        e.fn[t] = m._jQueryInterface;
        e.fn[t].Constructor = m;
        e.fn[t].noConflict = function() {
            e.fn[t] = u;
            return m._jQueryInterface;
        };
        return m;
    }(jQuery);
    var l = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var c = d([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);
    var u = d([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);
    var f = d([ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ], [ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ]);
    function d(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function p(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function b(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var v = function(e) {
        b(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            p(this, t);
            var n = {
                events: {
                    "click .lego-alert-close-icon": "close"
                },
                type: "info",
                closable: false,
                closeText: "",
                message: "",
                description: "",
                onClose: function e() {},
                showIcon: true,
                banner: false
            };
            Object.assign(n, e);
            return h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        l(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = "";
                switch (t.type) {
                  case "success":
                    n = "check";
                    break;

                  case "info":
                    n = "info";
                    break;

                  case "warning":
                    n = "exclamation";
                    break;

                  case "error":
                    n = "cross";
                    break;
                }
                var o = hx(c, t.type, t.description ? "lego-alert-with-description" : "", t.showIcon ? "" : "lego-alert-no-icon", t.description ? "anticon-" + n + "-circle-o" : "anticon-" + n + "-circle", t.showIcon ? "" : "-no", t.showIcon ? "" : "none", t.message, t.description ? hx(u, typeof t.description == "string" ? t.description : "") : "", t.closable ? hx(f) : "");
                return o;
            }
        }, {
            key: "close",
            value: function e(t) {
                var n = this;
                t.stopPropagation();
                this.$el.slideUp("normal", function() {
                    n.remove();
                });
                if (typeof this.options.onClose === "function") this.options.onClose(this, t);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("alert", v);
    var g = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var y = O([ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ], [ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ]);
    var m = O([ '<div class="modal-header">\n              ', '\n                <h4 class="modal-title">', "</h4>\n              </div>" ], [ '<div class="modal-header">\n              ', '\n                <h4 class="modal-title">', "</h4>\n              </div>" ]);
    var w = O([ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ], [ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ]);
    var _ = O([ '<div class="modal-footer">\n              ', "\n              </div>" ], [ '<div class="modal-footer">\n              ', "\n              </div>" ]);
    var k = O([ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ], [ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ]);
    function O(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function S(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function x(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function j(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var C = function(e) {
        j(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            S(this, t);
            var n = {
                success: "anticon anticon-check-circle-o ",
                info: "anticon anticon-info-circle-o",
                warning: "anticon anticon-exclamation-circle-o",
                error: "anticon anticon-cross-circle-o",
                alert: "anticon anticon-question-circle-o"
            };
            var o = {
                events: {
                    "click .modal-footer button.ok": "clickOk",
                    "click .modal-footer button.cancel": "clickCancel",
                    "click .close": "close",
                    "click .modal-dialog": function e(t) {
                        t.stopPropagation();
                    },
                    click: "close"
                },
                msgType: "",
                title: "提示",
                size: "",
                type: "modal",
                animate: "fadeIn",
                width: "",
                isMiddle: false,
                closable: true,
                showHeader: true,
                showFooter: true,
                backdrop: true,
                keyboard: true,
                content: "",
                footer: null,
                confirm: null,
                scrollbar: {},
                scrollAble: true,
                okText: "确定",
                cancelText: "取消",
                onHidden: function e() {},
                animates: {
                    fadeIn: "fadeOut",
                    slideInRight: "slideOutRight"
                }
            };
            Object.assign(o, e);
            if (o.msgType) o.type = "dialog";
            var i = "#lego-layer";
            if (n[o.msgType] && typeof o.content == "string") {
                var r = Lego.create(v, {
                    type: o.msgType,
                    closable: false,
                    message: o.content,
                    description: true
                });
                o.content = r.render();
            }
            if (!o.el) {
                if (o.type == "modal" || o.type == "dialog") {
                    var a = "lego-" + o.type + "-" + o.vid;
                    $("body").append("<" + o.type + ' id="' + a + '"></' + o.type + ">");
                    o.el = "#" + a;
                } else {
                    o.el = i;
                }
            }
            if (o.type == "layer") o.animate = "slideInRight";
            return x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o));
        }
        g(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = hx(y, t.type == "layer" ? "right-modal" : "", t.msgType ? "dialog-modal" : "", t.size ? "modal-size-" + t.size : "", t.isMiddle ? "middle" : "", t.el.replace(/#/, ""), t.showHeader ? hx(m, t.closable ? hx(w) : "", t.title) : "", !t.msgType && t.scrollAble ? "scrollbar" : "", !t.showHeader && t.type == "layer" ? "top:0;" : "", !t.showFooter && t.type == "layer" ? "bottom:0;" : "", t.content, t.showFooter ? hx(_, t.footer ? t.footer : hx(k, t.cancelText, t.okText)) : "");
                return n;
            }
        }, {
            key: "renderAfter",
            value: function e() {
                var t = this, n = this.options;
                this.$el.modal({
                    backdrop: n.type !== "layer" ? n.backdrop : false,
                    keyboard: n.keyboard,
                    show: true
                });
                if (n.width) this.$(".modal-dialog").width(n.width);
                if (n.height) this.$(".modal-body").height(n.height);
                this.$el.on("hidden.bs.modal", function(e) {
                    if (n.type == "layer") {
                        t.$el.replaceWith('<layer id="lego-layer"></layer>');
                    } else {
                        t.$el.remove();
                    }
                    if (typeof n.onHidden === "function") n.onHidden(t);
                });
                if (n.animate) {
                    this.$el.data("animate", n.animate);
                    Lego.UI.Util.animateCss(this.$el, "animated " + n.animate);
                }
            }
        }, {
            key: "close",
            value: function e() {
                var t = this.options.animate, n = this;
                if (t) {
                    Lego.UI.Util.animateCss(n.$el, "animated " + n.options.animates[t], function() {
                        n.$el.modal("hide");
                    });
                    if (this.options.backdrop) $(".modal-backdrop").fadeOut();
                } else {
                    this.$el.modal("hide");
                }
            }
        }, {
            key: "_showDialog",
            value: function e() {
                var n = this;
                Lego.create(t, {
                    msgType: this.options.confirm.msgType || "warning",
                    content: this.options.confirm.content || "",
                    backdrop: false,
                    onOk: function e(t) {
                        n.close();
                        t.close();
                    }
                });
            }
        }, {
            key: "_onConfirm",
            value: function e(t) {
                if (this.options.confirm && this.options[t]) {
                    this._showDialog();
                } else {
                    if (t !== "onOk") this.close();
                }
                if (typeof this.options[t] === "function") this.options[t](this);
            }
        }, {
            key: "clickOk",
            value: function e(t) {
                t.stopPropagation();
                this._onConfirm("onOk");
            }
        }, {
            key: "clickCancel",
            value: function e(t) {
                t.stopPropagation();
                this._onConfirm("onCancel");
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    var I = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = arguments[1];
        if (typeof t == "string") {
            var o = null;
            switch (t) {
              case "close":
                o = Lego.getView("#lego-layer");
                break;

              case "close.modal":
                o = Lego.getView("#lego-modal-" + n);
                break;

              case "close.dialog":
                o = Lego.getView("#lego-dialog-" + n);
                break;
            }
            if (o) o.close();
        } else {
            Lego.create(C, t);
        }
    };
    Lego.components("modal", I);
    e.exports = I;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = l([ '\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ' ], [ '\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ' ]);
    var r = n(8);
    var a = s(r);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function l(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function c(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function u(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function f(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var d = function(e) {
        f(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            c(this, t);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var t = [];
                for (var n = (e - 1) * 20; n < e * 20; n++) {
                    t.push({
                        key: n,
                        name: "胡彦斌" + n,
                        age: 32 + n,
                        address: "西湖区湖底公园1号"
                    });
                }
                return t;
            }
            var o = {
                components: [ {
                    el: "#theTable",
                    className: "table-striped",
                    rowSelection: {
                        type: "checkbox"
                    },
                    pagination: {
                        total: 300,
                        pageRang: 5,
                        pageSize: 20,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        onChange: function e(t, o) {
                            var i = Lego.getView("#theTable");
                            i.options.data = n(o);
                            i.refresh();
                        }
                    },
                    showHeader: true,
                    colSetting: function e() {
                        console.warn("点击了列设置");
                    },
                    title: function e() {
                        return "表格标题";
                    },
                    style: {
                        height: "100%"
                    },
                    data: n(),
                    columns: [ {
                        title: "姓名",
                        dataIndex: "name",
                        key: "name",
                        width: "200px",
                        filter: function e(t) {
                            console.warn("点击了筛选", t);
                        }
                    }, {
                        title: "年龄",
                        dataIndex: "age",
                        key: "age",
                        width: "200px",
                        onCellClick: function e(t, n) {
                            console.warn(t, n);
                        },
                        filter: function e(t) {
                            console.warn("点击了筛选", t);
                        },
                        sorter: function e(t) {
                            console.warn("点击了排序", t);
                        }
                    }, {
                        title: "住址",
                        dataIndex: "address",
                        key: "address",
                        width: "200px"
                    } ]
                } ]
            };
            Object.assign(o, e);
            return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o));
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = hx(i);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = d;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var i = c([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
    var r = c([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
    var a = c([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);
    var s = c([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);
    var l = c([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);
    function c(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function u(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function f(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function d(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var p = function(e) {
        d(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            u(this, t);
            var n = {
                events: {
                    "click li": "clickItem"
                },
                disabled: false,
                eventName: "hover",
                trigger: "",
                direction: "",
                clickAndClose: true,
                onChange: function e() {},
                data: []
            };
            Object.assign(n, e);
            return f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        o(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                function n(e) {
                    if (e.divider) {
                        return hx(i);
                    } else {
                        if (!e.children) {
                            return hx(r, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                        } else {
                            return o(e);
                        }
                    }
                }
                function o(e) {
                    return hx(a, e.value, e.children ? hx(s, e.children.map(function(e) {
                        n(e);
                    })) : "");
                }
                var c = hx(l, t.direction ? "drop" + t.direction : "", t.data.map(function(e) {
                    return n(e);
                }));
                return c;
            }
        }, {
            key: "renderAfter",
            value: function e() {
                var t = this;
                this.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
                if (!this.options.disabled) {
                    var n = function e(n) {
                        $("body, .modal-body").trigger("click");
                        n.stopPropagation();
                        var o = Lego.UI.Util.getDirection(t.trigger, t.$el);
                        t.options.direction = o._y || "bottom";
                        t.show();
                        if (t.options.eventName == "hover") {
                            t.trigger.mouseleave(function() {
                                t.close();
                            });
                        }
                    };
                    if (this.options.eventName == "click") {
                        var o = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(o).on(o, function() {
                            t.close();
                        });
                        this.trigger.off(o).on(o, n);
                    } else {
                        this.trigger[this.options.eventName](n);
                    }
                }
            }
        }, {
            key: "_getAlign",
            value: function e(t, n) {
                var o = t.offset().left, i = t.offset().top - n.height(), r = $(window).width() - 20, a = n.width();
                if (r > o + a) {
                    return "left";
                } else {
                    return "right";
                }
            }
        }, {
            key: "show",
            value: function e(t) {
                this.trigger.addClass("dropdown open");
            }
        }, {
            key: "close",
            value: function e(t) {
                this.trigger.removeClass("dropdown open");
            }
        }, {
            key: "clickItem",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget);
                var o = this.options.data.find(function(e) {
                    return e.key == n.attr("id");
                });
                if (o) this.options.onChange(this, o);
                if (this.options.clickAndClose) {
                    this.close();
                } else {
                    this.refresh();
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("dropdown", p);
    var h = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var b = S([ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);
    var v = S([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);
    var g = S([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);
    var y = S([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ]);
    var m = S([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);
    var w = S([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ]);
    var _ = S([ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ]);
    var k = S([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);
    var O = S([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);
    function S(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function x(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function j(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function C(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var I = function(e) {
        C(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            x(this, t);
            var n = {
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
                onChange: function e() {},
                showSizeChanger: false,
                pageSizeOptions: [ 10, 20, 30, 40, 50 ],
                onPageSizeChange: function e() {},
                showQuickJumper: false,
                size: "",
                simple: null,
                isShowTotal: true,
                data: {}
            };
            Object.assign(n, e);
            if (!n.simple && n.showSizeChanger) {
                var o = n.pageSizeOptions.map(function(e) {
                    return {
                        key: e,
                        value: e + " / 页"
                    };
                });
                n.components = [ {
                    el: "#" + e.vid + "-dropdown",
                    trigger: "#" + e.vid + "-select",
                    data: o,
                    onChange: function e(t, n) {
                        var o = parseInt(n.key);
                        this.context.options.current = 1;
                        this.context.options.pageSize = o;
                        this.context.options.onPageSizeChange(t, o);
                    }
                } ];
            }
            var i = j(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            i.jumped = false;
            return i;
        }
        h(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {}, n = parseInt(t.current);
                t.pageSize = t.pageSize;
                var o = parseInt(t.pageRang);
                var i = t.data.total || (typeof t.total === "function" ? t.total() : t.total);
                t.totalPages = t.data.totalPages || Math.ceil(i / t.pageSize);
                o = o >= t.totalPages ? t.totalPages : o;
                var r = o ? Math.floor((n - 1) / o) : 0, a = r * o + 1, s = a + o - 1, l = t.totalPages - n > o ? true : false, c = [];
                s = s >= t.totalPages ? t.totalPages : s;
                for (var u = a; u <= s; u++) {
                    c.push(u);
                }
                var f = hx(b, t.simple ? "pagination-simple" : "", t.size == "small" ? "mini" : "", n <= 1 ? "disabled" : "", t.simple ? hx(v, n, t.endPage, n) : "", !t.simple ? c.map(function(e) {
                    return hx(g, e, e == n ? "active" : "", e);
                }) : "", l ? hx(y, t.pageSize) : "", !t.simple && l ? hx(m, t.totalPages, t.totalPages) : "", !t.simple ? hx(w, n >= t.totalPages ? "disabled" : "") : "", !t.simple && t.showSizeChanger ? hx(_, t.vid, t.pageSize, t.vid) : "", !t.simple && t.showQuickJumper ? hx(k, this.jumped ? n : "1", t.isShowTotal ? hx(O, typeof t.showTotal === "function" ? t.showTotal(i) : "总数 " + i) : "") : "");
                this.jumped = false;
                return f;
            }
        }, {
            key: "clickPrevPage",
            value: function e(t) {
                t.stopPropagation();
                var n = this.options;
                console.warn("点击了上一页");
                n.current--;
                n.onChange(this, n.current, n.pageSize);
            }
        }, {
            key: "clickItemPage",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), o = n.attr("title");
                var i = this.options;
                console.warn("点击了" + o + "页");
                i.current = o;
                i.onChange(this, o, i.pageSize);
            }
        }, {
            key: "clickNextPage",
            value: function e(t) {
                t.stopPropagation();
                var n = this.options;
                console.warn("点击了下一页");
                n.current++;
                n.onChange(this, n.current, n.pageSize);
            }
        }, {
            key: "clickMorePage",
            value: function e(t) {
                t.stopPropagation();
                var n = this.options;
                var o = parseInt(n.current), i = parseInt(n.pageRang), r = o % i ? o % i : i;
                console.warn("点击了更多页");
                n.current = o + (i - r + 1);
                if (n.current > n.totalPages) n.current = n.totalPages;
                n.onChange(this, n.current, n.pageSize);
            }
        }, {
            key: "_enterSearch",
            value: function e(t) {
                var n = $(t.currentTarget);
                var o = this.options;
                var i = n.val();
                if (t.keyCode == 13) {
                    if (i > o.totalPages) i = o.totalPages;
                    this.jumped = true;
                    o.current = i;
                    o.onChange(this, i, o.pageSize);
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("pagination", I);
    var E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) {
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                    e[o] = n[o];
                }
            }
        }
        return e;
    };
    var P = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    var T = ee([ '\n        <div class="clearfix lego-table lego-table-', " ", "\n        ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    <div class="', '">\n                        <table class="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                </div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="clearfix lego-table lego-table-', " ", "\n        ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    <div class="', '">\n                        <table class="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                </div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ]);
    var D = ee([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);
    var N = ee([ '\n                <div class="lego-table-header">\n                    <table class="">\n                        ', "\n                        ", "\n                    </table>\n                    ", "\n                </div>\n                " ], [ '\n                <div class="lego-table-header">\n                    <table class="">\n                        ', "\n                        ", "\n                    </table>\n                    ", "\n                </div>\n                " ]);
    var R = ee([ '\n                        <button type="button" class="btn btn-default noborder">\n                        <i class="anticon anticon-ellipsis"></i></button>' ], [ '\n                        <button type="button" class="btn btn-default noborder">\n                        <i class="anticon anticon-ellipsis"></i></button>' ]);
    var z = ee([ '\n                    <div class="lego-table-footer">\n                    <pagination id="pagination_', '"></pagination>\n                    </div>\n                ' ], [ '\n                    <div class="lego-table-footer">\n                    <pagination id="pagination_', '"></pagination>\n                    </div>\n                ' ]);
    var A = ee([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);
    var L = ee([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);
    var B = ee([ "\n                ", "\n            " ], [ "\n                ", "\n            " ]);
    var M = ee([ "<col>" ], [ "<col>" ]);
    var U = ee([ '<col style="width: ', ';">' ], [ '<col style="width: ', ';">' ]);
    var H = ee([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ]);
    var F = ee([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);
    var W = ee([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);
    var K = ee([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);
    var Q = ee([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);
    var Y = ee([ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ], [ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ]);
    var V = ee([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);
    var G = ee([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);
    var J = ee([ "<td>", "</td>" ], [ "<td>", "</td>" ]);
    var Z = ee([ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ], [ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ]);
    var q = ee([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);
    var X = ee([ '<i title="filter" class="anticon anticon-filter"></i>' ], [ '<i title="filter" class="anticon anticon-filter"></i>' ]);
    function ee(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function te(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function ne(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function oe(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t)));
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var ie = function(e) {
        oe(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            te(this, t);
            var n = {
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
                expandedRowRender: function e() {},
                defaultExpandedRowKeys: [],
                expandedRowKeys: [],
                defaultExpandAllRows: false,
                onExpandedRowsChange: function e() {},
                onExpand: function e() {},
                onChange: function e() {},
                loading: false,
                locale: {
                    filterConfirm: "确定",
                    filterReset: "重置",
                    emptyText: "暂无数据"
                },
                indentSize: 0,
                onRowClick: function e() {},
                bordered: false,
                showHeader: false,
                showBodyer: true,
                showFooter: false,
                components: []
            };
            Object.assign(n, e);
            n.components.push(E({}, n.pagination, {
                el: "#pagination_" + n.vid
            }));
            n.columns.map(function(e) {
                e = Object.assign({
                    title: "",
                    key: Lego.randomKey(32),
                    isHide: false,
                    dataIndex: "",
                    colSpan: 0,
                    width: "",
                    className: "",
                    fixed: false,
                    sortOrder: ""
                }, e);
            });
            var o = ne(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            o.selectedAll = 0;
            var i = o.$(".lego-table-header");
            o.$(".lego-table-body").scroll(function() {
                i.scrollLeft($(this).scrollLeft());
            });
            o.$(".lego-table-tfoot>tr>td").attr("colspan", o.options.columns.length);
            return o;
        }
        P(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var n = hx(T, t.size, t.bordered ? "lego-table-bordered" : "", t.showHeader ? "lego-table-fixed-header" : "", t.title ? hx(D, typeof t.title == "function" ? t.title() : t.title) : "", t.showHeader ? hx(N, this._renderColgroup(), this._renderHeader(), t.colSetting ? hx(R) : "") : "", t.pagination ? "48px" : "0", t.showHeader ? "scrollbar" : "", t.className, this._renderColgroup(), !t.showHeader ? this._renderHeader() : "", this._renderBodyer(), this._renderFooter(), t.pagination && t.data ? hx(z, t.vid) : "");
                return n;
            }
        }, {
            key: "renderAfter",
            value: function e() {
                var t = Lego.getView("#pagination_" + this.options.vid);
                if (t) t.refresh();
            }
        }, {
            key: "_getRowKey",
            value: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                this.rowKey = this.rowKey || 0;
                this.rowKey++;
                return t + this.rowKey;
            }
        }, {
            key: "_renderColgroup",
            value: function e() {
                var t = this;
                var n = hx(A, this.options.rowSelection ? hx(L) : "", this.options.columns.map(function(e, n) {
                    return hx(B, n === t.options.columns.length - 1 ? hx(M) : hx(U, e.width));
                }));
                return n;
            }
        }, {
            key: "_renderSelection",
            value: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
                var o = this.options, i = o.type || "checkbox", r = this;
                var a = t.selected || n === "th" && this.selectedAll === 1, s = n === "th" && r.selectedAll === 2 ? true : false;
                function l() {
                    return hx(H, i, t.disabled ? "lego-checkbox-disabled" : "", a ? "lego-checkbox-checked lego-checkbox-checked-1" : s ? "lego-checkbox-indeterminate" : "", i, t.disabled ? "disabled" : "", a ? "on" : "");
                }
                var c = hx(F, n == "th" ? hx(W, l()) : hx(K, l()));
                return c;
            }
        }, {
            key: "_renderHeader",
            value: function e() {
                var t = this;
                var n = this.options;
                var o = hx(Q, n.rowSelection ? this._renderSelection({}, "th") : "", n.columns.map(function(e) {
                    return !e.isHide ? hx(Y, e.sortOrder ? "lego-table-column-sort" : "", e.key, e.title, e.sorter ? t._renderSorter(e) : "", t._renderFilter(e)) : "";
                }));
                return o;
            }
        }, {
            key: "_renderBodyer",
            value: function e() {
                var t = this;
                var n = this.options;
                if (!n.data) return;
                var o = hx(V, n.data.map(function(e, o) {
                    e.key = e.id || t._getRowKey("row_");
                    return hx(G, n.rowClassName, e.key, n.rowSelection ? t._renderSelection(e, "td") : "", n.columns.map(function(t) {
                        return !t.isHide ? hx(J, typeof t.format === "function" ? t.format(e[t.dataIndex], e, t) : e[t.dataIndex]) : "";
                    }));
                }));
                return o;
            }
        }, {
            key: "_renderFooter",
            value: function e() {
                var t = this.options;
                var n = hx(Z, t.footer ? t.footer() : "");
                return n;
            }
        }, {
            key: "_renderSorter",
            value: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var n = this.options;
                var o = hx(q, t.sortOrder === "asc" ? "on" : "off", t.sortOrder === "desc" ? "on" : "off");
                return o;
            }
        }, {
            key: "_renderFilter",
            value: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return t.filter ? hx(X) : "";
            }
        }, {
            key: "clickSorter",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), o = n.closest("th").attr("id"), i = this.options.columns.find(function(e) {
                    return e.key == o;
                });
                if (i) {
                    i.sortOrder = i.sortOrder || "";
                    switch (i.sortOrder) {
                      case "asc":
                        i.sortOrder = "desc";
                        break;

                      case "desc":
                        i.sortOrder = "";
                        break;

                      case "":
                        i.sortOrder = "asc";
                        break;
                    }
                    this.refresh();
                    if (typeof i.sorter === "function") i.sorter(i);
                }
            }
        }, {
            key: "clickItem",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), o = n.parent().attr("id"), i = this.$("thead").find("th").eq(t.currentTarget.cellIndex).attr("id");
                var r = this.options.data.find(function(e) {
                    return e.key == o;
                });
                var a = this.options.columns.find(function(e) {
                    return e.key == i;
                });
                if (r && a) {
                    if (this.options.onRowClick) {
                        if (typeof a.onRowClick === "function") a.onRowClick(r);
                    }
                    if (a.onCellClick) {
                        if (typeof a.onCellClick === "function") a.onCellClick(r, a);
                    }
                }
            }
        }, {
            key: "clickFilter",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), o = n.closest("th").attr("id"), i = this.options.columns.find(function(e) {
                    return e.key == o;
                });
                if (i) {
                    if (typeof i.filter === "function") i.filter(i);
                }
            }
        }, {
            key: "clickSetting",
            value: function e(t) {
                t.stopPropagation();
                if (typeof this.options.colSetting === "function") this.options.colSetting(this);
            }
        }, {
            key: "selectOne",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), o = n.closest("tr"), i = o.attr("id"), r = this;
                if (this.options.rowSelection) {
                    var a = this.options.data.find(function(e, t, n) {
                        return e.key == i;
                    });
                    if (a) a.selected = !a.selected;
                    var s = this.options.data.filter(function(e) {
                        return e.selected === true;
                    });
                    this.selectedAll = s.length == this.options.data.length ? 1 : s.length ? 2 : 0;
                    this.refresh();
                }
            }
        }, {
            key: "selectAll",
            value: function e(t) {
                var n = this;
                t.stopPropagation();
                var o = $(t.currentTarget);
                if (this.options.rowSelection) {
                    (function() {
                        var e = o.is(":checked");
                        var t = e ? 1 : 0;
                        n.selectedAll = t;
                        n.options.data.map(function(e, n) {
                            e.selected = !!t;
                        });
                        n.refresh();
                    })();
                }
            }
        }, {
            key: "getSelected",
            value: function e() {
                if (Array.isArray(this.options.data)) {
                    return this.options.data.filter(function(e) {
                        return e.selected == true;
                    });
                }
                return [];
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("tables", ie);
    e.exports = ie;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || false;
                o.configurable = true;
                if ("value" in o) o.writable = true;
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            if (n) e(t.prototype, n);
            if (o) e(t, o);
            return t;
        };
    }();
    function o(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function i(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function r(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var a = function(e) {
        r(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            o(this, t);
            var n = {
                gg: {
                    url: "./content2.json",
                    listTarget: "data",
                    model: {
                        first: "",
                        last: "",
                        id: 0
                    }
                },
                ff: {
                    url: "./content2.json"
                }
            };
            $.extend(true, n, e);
            return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "parse",
            value: function e(t) {
                return t[0].data;
            }
        } ]);
        return t;
    }(HBY.Data);
    t.default = new a();
} ]);