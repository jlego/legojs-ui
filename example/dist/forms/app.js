(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {},
            id: r,
            loaded: false
        };
        e[r].call(i.exports, i, i.exports, n);
        i.loaded = true;
        return i.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})([ function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = n(10);
    var a = l(i);
    var s = n(11);
    var o = l(s);
    var d = n(132);
    var u = l(d);
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function f(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var c = function() {
        function e() {
            f(this, e);
            return {
                "/forms": [ this.index, this.tabs ],
                "/forms/:tabs": [ this.index, this.tabs ]
            };
        }
        r(e, [ {
            key: "index",
            value: function e() {
                this.viewObj = HBY.create(a.default, {
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
                var n = [ o.default, u.default ];
                HBY.create(n[t], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new c());
}, , , , , , , , , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var r = i([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function i(e, t) {
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
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function o(e, t) {
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
        o(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            a(this, t);
            var n = {
                currentTab: 0
            };
            Object.assign(n, e);
            return s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var n = hx(r, t.currentTab == 0 ? "active" : "", t.currentTab == 1 ? "active" : "");
                return n;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = d;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = h([ '<i class="anticon anticon-setting"></i>' ], [ '<i class="anticon anticon-setting"></i>' ]), a = h([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ]);
    var s = n(12);
    var o = _(s);
    var d = n(13);
    var u = _(d);
    var l = n(14);
    var f = _(l);
    var c = n(131);
    var m = _(c);
    function _(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function h(e, t) {
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
    function y(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function g(e, t) {
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
        g(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            p(this, t);
            var n = [ {
                key: "0",
                value: "不限"
            }, {
                key: "so1",
                value: "选项一"
            }, {
                key: "so2",
                value: "选项二选项二选项二fffdf"
            }, {
                key: "so3",
                value: "选项三"
            } ];
            var r = {
                components: [ {
                    el: "#search1",
                    hasSelect: true,
                    onClick: function e(t) {
                        console.warn("点击了搜索框", t);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#search2",
                    placeholder: "输入关键字",
                    onClick: function e(t) {
                        console.warn("点击了搜索框2", t);
                    }
                }, {
                    el: "#select3",
                    placeholder: "请选择",
                    onChange: function e(t) {
                        console.warn("点击了选项框1", t);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#select4",
                    placeholder: "请选择",
                    eventName: "click",
                    onChange: function e(t) {
                        console.warn("点击了选项框2", t);
                    },
                    value: {
                        key: "so2",
                        value: "选项二选项二选项二"
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#select5",
                    placeholder: "请选择",
                    multiple: true,
                    onChange: function e(t) {
                        console.warn("点击了选项框3", t);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#select6",
                    placeholder: "请选择",
                    multiple: true,
                    onChange: function e(t) {
                        console.warn("点击了选项框4", t);
                    },
                    value: [ {
                        key: "so2",
                        value: "选项二选项二选项二"
                    }, {
                        key: "so3",
                        value: "选项三"
                    } ],
                    data: $.extend(true, [], n)
                }, {
                    el: "#datepicker7",
                    type: "date",
                    name: "datepicker1",
                    onChange: function e(t) {
                        console.warn("点击了时间选项框5", t);
                    }
                }, {
                    el: "#datepicker8",
                    type: "range",
                    startName: "datepicker2",
                    endName: "datepicker3",
                    onChange: function e(t) {
                        console.warn("点击了时间选项框6", t);
                    }
                }, {
                    el: "#datepicker9",
                    inline: true,
                    onChange: function e(t) {
                        console.warn("点击了时间选项框7", t);
                    }
                }, {
                    el: "#input10",
                    placeholder: "这是输入框",
                    onChange: function e(t) {
                        console.warn("点击了输入框1", t);
                    },
                    style: {
                        marginBottom: 20
                    }
                }, {
                    el: "#input11",
                    placeholder: "这是输入框",
                    addonBefore: true,
                    addonAfter: true,
                    prefix: "Http://",
                    suffix: hx(i),
                    onChange: function e(t) {
                        console.warn("点击了输入框2", t);
                    },
                    style: {
                        marginBottom: 20
                    }
                }, {
                    el: "#input12",
                    type: "textarea",
                    placeholder: "这是文本框",
                    rows: 10,
                    onChange: function e(t) {
                        console.warn("点击了文本框2", t);
                    }
                } ]
            };
            Object.assign(r, e);
            return y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        }
        r(t, [ {
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
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = u([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
    var a = u([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
    var s = u([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);
    var o = u([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);
    var d = u([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);
    function u(e, t) {
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
    function f(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function c(e, t) {
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
    var m = function(e) {
        c(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
            var n = {
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
                onChange: function e() {},
                onVisibleChange: function e() {}
            };
            Object.assign(n, e);
            var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var i = r;
            r.options.trigger = e.trigger instanceof $ ? e.trigger : $(e.trigger);
            if (!r.options.disabled) {
                var a = function e(t) {
                    t.stopPropagation();
                    var r = Lego.UI.Util.getDirection(i.options.trigger, i.$el);
                    i.options.direction = r._y || "bottom";
                    i.show();
                    if (n.eventName == "hover") {
                        i.options.trigger.mouseleave(function() {
                            i.close();
                        });
                    }
                };
                if (n.eventName == "click") {
                    var s = "click.dropdown_" + e.vid;
                    $("body").off(s).on(s, function() {
                        i.close();
                    });
                    r.options.trigger.off(s).on(s, a);
                } else {
                    r.options.trigger[n.eventName](a);
                }
            }
            return r;
        }
        r(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                function n(e) {
                    if (e.divider) {
                        return hx(i);
                    } else {
                        if (!e.children) {
                            return hx(a, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                        } else {
                            return r(e);
                        }
                    }
                }
                function r(e) {
                    return hx(s, e.value, e.children ? hx(o, e.children.map(function(e) {
                        n(e);
                    })) : "");
                }
                var u = hx(d, t.direction ? "drop" + t.direction : "", t.data.map(function(e) {
                    return n(e);
                }));
                return u;
            }
        }, {
            key: "_getAlign",
            value: function e(t, n) {
                var r = t.offset().left, i = t.offset().top - n.height(), a = $(window).width() - 20, s = n.width();
                if (a > r + s) {
                    return "left";
                } else {
                    return "right";
                }
            }
        }, {
            key: "show",
            value: function e(t) {
                this.options.trigger.addClass("dropdown open");
                this.options.onVisibleChange(true);
            }
        }, {
            key: "close",
            value: function e(t) {
                this.options.trigger.removeClass("dropdown open");
                this.options.onVisibleChange(false);
            }
        }, {
            key: "clickItem",
            value: function e(t) {
                var n = $(t.currentTarget);
                var r = this.options.data.find(function(e) {
                    return e.key == n.attr("id");
                });
                if (r) {
                    this.options.onChange(r);
                    this.options.activeKey = r.key;
                    this.options.activeValue = r.value;
                }
                this.close();
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("dropdown", m);
    var _ = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var h = y([ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);
    var p = y([ '\n          <div class="input-group-btn dropdown" id="', '-select">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="', '-dropdown"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="', '-select">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="', '-dropdown"></dropdown>\n          </div>\n        ' ]);
    function y(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function g(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function v(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function M(e, t) {
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
    var L = function(e) {
        M(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            g(this, t);
            var n = {
                events: {
                    "click .search-button": "clickSearch",
                    "keydown .search-input": "_enterSearch"
                },
                placeholder: "输入关键字搜索",
                activeKey: "",
                activeValue: "",
                hasSelect: false,
                onClick: function e() {},
                components: [ {
                    el: "#" + e.vid + "-dropdown",
                    trigger: "#" + e.vid + "-select",
                    data: e.data,
                    onChange: function t(n) {
                        var r = Lego.getView(e.el);
                        if (r) {
                            r.options.activeKey = n.key;
                            r.options.activeValue = n.value;
                        }
                    }
                } ]
            };
            Object.assign(n, e);
            return v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        _(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = hx(h, t.hasSelect ? hx(p, t.vid, t.activeValue || "请选择", t.vid) : "", t.placeholder);
                return n;
            }
        }, {
            key: "_enterSearch",
            value: function e(t) {
                if (t.keyCode == 13) {
                    this.clickSearch(t);
                }
            }
        }, {
            key: "clickSearch",
            value: function e(t) {
                t.stopPropagation();
                var n = this.$(".search-input").val();
                if (typeof this.options.onClick === "function") this.options.onClick({
                    key: this.options.activeKey,
                    value: this.options.activeValue,
                    keyword: n
                });
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("search", L);
    e.exports = L;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = u([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
    var a = u([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
    var s = u([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);
    var o = u([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);
    var d = u([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);
    function u(e, t) {
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
    function f(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function c(e, t) {
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
    var m = function(e) {
        c(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
            var n = {
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
                onChange: function e() {},
                onVisibleChange: function e() {}
            };
            Object.assign(n, e);
            var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var i = r;
            r.options.trigger = e.trigger instanceof $ ? e.trigger : $(e.trigger);
            if (!r.options.disabled) {
                var a = function e(t) {
                    t.stopPropagation();
                    var r = Lego.UI.Util.getDirection(i.options.trigger, i.$el);
                    i.options.direction = r._y || "bottom";
                    i.show();
                    if (n.eventName == "hover") {
                        i.options.trigger.mouseleave(function() {
                            i.close();
                        });
                    }
                };
                if (n.eventName == "click") {
                    var s = "click.dropdown_" + e.vid;
                    $("body").off(s).on(s, function() {
                        i.close();
                    });
                    r.options.trigger.off(s).on(s, a);
                } else {
                    r.options.trigger[n.eventName](a);
                }
            }
            return r;
        }
        r(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                function n(e) {
                    if (e.divider) {
                        return hx(i);
                    } else {
                        if (!e.children) {
                            return hx(a, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                        } else {
                            return r(e);
                        }
                    }
                }
                function r(e) {
                    return hx(s, e.value, e.children ? hx(o, e.children.map(function(e) {
                        n(e);
                    })) : "");
                }
                var u = hx(d, t.direction ? "drop" + t.direction : "", t.data.map(function(e) {
                    return n(e);
                }));
                return u;
            }
        }, {
            key: "_getAlign",
            value: function e(t, n) {
                var r = t.offset().left, i = t.offset().top - n.height(), a = $(window).width() - 20, s = n.width();
                if (a > r + s) {
                    return "left";
                } else {
                    return "right";
                }
            }
        }, {
            key: "show",
            value: function e(t) {
                this.options.trigger.addClass("dropdown open");
                this.options.onVisibleChange(true);
            }
        }, {
            key: "close",
            value: function e(t) {
                this.options.trigger.removeClass("dropdown open");
                this.options.onVisibleChange(false);
            }
        }, {
            key: "clickItem",
            value: function e(t) {
                var n = $(t.currentTarget);
                var r = this.options.data.find(function(e) {
                    return e.key == n.attr("id");
                });
                if (r) {
                    this.options.onChange(r);
                    this.options.activeKey = r.key;
                    this.options.activeValue = r.value;
                }
                this.close();
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("dropdown", m);
    var _ = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var h = v([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);
    var p = v([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);
    var y = v([ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ]);
    var g = v([ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ]);
    function v(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function M(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function L(e, t) {
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
    var w = function(e) {
        b(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            M(this, t);
            var n = {
                name: "",
                value: [],
                multiple: false,
                eventName: "click",
                filterOption: true,
                tags: false,
                onSelect: function e() {},
                onDeselect: function e() {},
                onChange: function e() {},
                onSearch: function e() {},
                placeholder: "",
                notFoundContent: "",
                dropdownWidth: "100%",
                dropdownHeight: "auto",
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
                    el: "#" + e.vid + "-dropdown",
                    trigger: "#" + e.vid + "-select",
                    eventName: e.eventName || "click",
                    disabled: e.disabled || false,
                    style: Object.assign({
                        width: e.dropdownWidth || "100%",
                        height: e.dropdownHeight || "auto"
                    }, e.dropdownStyle || {}),
                    className: e.dropdownClassName,
                    data: e.data,
                    onChange: function t(n) {
                        var r = Lego.getView(e.el);
                        if (r) {
                            if (n.key !== "0" && e.multiple) {
                                r.getValue();
                                if (!r.options.value.includes(n)) {
                                    n.selected = true;
                                    r.options.value.push(n);
                                }
                            } else {
                                r.options.data.forEach(function(e) {
                                    return e.selected = false;
                                });
                                r.options.value = [ n ];
                            }
                            r.options.onSelect(n);
                            r.options.onChange(n);
                            r.refresh();
                        }
                    }
                } ]
            };
            Object.assign(n, e);
            if (n.value.length) {
                n.value.forEach(function(e) {
                    var t = n.data.find(function(t) {
                        return t.key === e.key;
                    });
                    if (t) t.selected = true;
                });
            }
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var i = "click.select_" + e.vid, a = r.clickItemClose.bind(r);
            r.$(".select-tags-div").off(i).on(i, ".select-tag-close", a);
            return r;
        }
        _(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = "";
                function r(e) {
                    if (e.length) {
                        return hx(h, e.map(function(e) {
                            return hx(p, e.key, e.value, e.value);
                        }));
                    } else {
                        return "";
                    }
                }
                var i = Array.isArray(t.value) ? t.value.length ? t.value.map(function(e) {
                    return e.value;
                }) : [] : [ t.value.value ];
                if (!t.multiple) {
                    n = hx(y, t.vid, t.disabled ? "disabled" : "", t.placeholder, i.join(","), t.name, t.vid);
                } else {
                    n = hx(g, t.vid, i.length ? "select-hasValue" : "", i.length ? "" : t.placeholder, i.join(","), t.name, i.length ? "select-tags-div-border" : "", r(t.value), t.vid);
                }
                return n;
            }
        }, {
            key: "clickItemClose",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget).parent(), r = n.attr("id"), i = n.attr("title");
                this.options.data.forEach(function(e) {
                    if (e.key === r) e.selected = false;
                });
                this.getValue();
                this.refresh();
                Lego.getView("#" + this.options.vid + "-dropdown").refresh();
                if (typeof this.options.onDeselect === "function") this.options.onDeselect({
                    key: r,
                    value: i
                });
            }
        }, {
            key: "setValue",
            value: function e(t) {
                var n = this.options.data;
                if (t.length) {
                    t.forEach(function(e) {
                        var t = n.find(function(t) {
                            return t.key === e.key;
                        });
                        if (t) {
                            Object.assign(t, e);
                        } else {
                            n.push(e);
                        }
                    });
                }
            }
        }, {
            key: "getValue",
            value: function e() {
                this.options.value = this.options.data.filter(function(e) {
                    return e.selected === true && e.key !== "0";
                });
                return this.options.value;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("selects", w);
    e.exports = w;
}, function(e, t, n) {
    "use strict";
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var i = n(15);
    var a = n(123);
    var s = n(126);
    var o = n(127);
    var d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) {
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    e[r] = n[r];
                }
            }
        }
        return e;
    };
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var l = m([ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ], [ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ]);
    var f = m([ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ]);
    var c = m([ "<div></div>" ], [ "<div></div>" ]);
    function m(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function _(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
    }
    function p(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : r(t)));
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
    var y = function(e) {
        p(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _(this, t);
            var n = {
                type: "date",
                name: "",
                placeholder: "选择时间",
                disabled: false,
                inline: false,
                size: "default",
                format: e.type == "time" ? "LT" : "",
                value: null,
                startInputEl: "",
                startName: e.name,
                startPlaceholder: "开始时间",
                endInputEl: "",
                endName: "",
                endPlaceholder: "结束时间",
                useCurrent: false,
                setting: {},
                onChange: function e() {}
            };
            Object.assign(n, e);
            if (n.value) n.value = typeof n.value == "function" ? n.value() : n.value;
            var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            r.initDatepicker();
            return r;
        }
        u(t, [ {
            key: "initDatepicker",
            value: function e() {
                var t = this;
                var n = this.options;
                Object.assign(n.setting, {
                    format: n.format,
                    inline: n.inline
                });
                var r = this, i = n.inline ? n.el : ".input-group input";
                if (n.type !== "range") {
                    var a = this.$(i);
                    if (n.inline) a = this.$el;
                    a.datetimepicker(n.setting);
                    a.on("dp.change", function(e) {
                        if (typeof n.onChange == "function") n.onChange($(this).val());
                    });
                } else {
                    (function() {
                        var e = ".startDate", a = ".endDate";
                        if (!n.startInputEl && !n.endInputEl) {
                            var s = Object.assign({}, n.setting);
                            var o = Object.assign({}, d({}, n.setting, {
                                useCurrent: n.useCurrent
                            }));
                            var u = t.$(e).datetimepicker(s);
                            var l = t.$(a).datetimepicker(o);
                            t.$(e).on("dp.change", function(e) {
                                r.$(a).data("DateTimePicker").minDate(e.date);
                                if (typeof n.onChange == "function") n.onChange($(this).val());
                            });
                            t.$(a).on("dp.change", function(t) {
                                r.$(e).data("DateTimePicker").maxDate(t.date);
                                if (typeof n.onChange == "function") n.onChange($(this).val());
                            });
                        } else if (n.startInputEl || n.endInputEl) {
                            (function() {
                                var e = n.startInputEl || n.endInputEl;
                                if (n.startInputEl) n.setting.useCurrent = false;
                                t.$(i).datetimepicker(n.setting);
                                if (n.endInputEl) {
                                    t.$(i).on("dp.change", function(t) {
                                        var r = e instanceof $ ? e : $(e).find(i);
                                        r.data("DateTimePicker").maxDate(t.date);
                                        if (typeof n.onChange == "function") n.onChange($(this).val());
                                    });
                                } else if (n.startInputEl) {
                                    t.$(i).on("dp.change", function(t) {
                                        var r = e instanceof $ ? e : $(e).find(i);
                                        r.data("DateTimePicker").minDate(t.date);
                                        if (typeof n.onChange == "function") n.onChange($(this).val());
                                    });
                                }
                            })();
                        }
                    })();
                }
            }
        }, {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = "";
                if (t.type == "range" && !t.startInputEl && !t.endInputEl) {
                    n = hx(l, t.disabled ? "disabled" : "", t.startName, t.startPlaceholder, t.disabled ? "disabled" : "", t.endName, t.endPlaceholder);
                }
                if (t.type !== "range" || t.type == "range" && t.startInputEl && t.endInputEl) {
                    n = hx(f, t.disabled ? "disabled" : "", t.name, t.placeholder, t.type == "time" ? "clock-circle-o" : "calendar");
                }
                if (t.inline) n = hx(c);
                return n;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("datepicker", y);
    e.exports = y;
}, function(e, t, n) {
    (function(e) {
        (function(t, n) {
            true ? e.exports = n() : typeof define === "function" && define.amd ? define(n) : t.moment = n();
        })(this, function() {
            "use strict";
            var t;
            function r() {
                return t.apply(null, arguments);
            }
            function i(e) {
                t = e;
            }
            function a(e) {
                return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
            }
            function s(e) {
                return e != null && Object.prototype.toString.call(e) === "[object Object]";
            }
            function o(e) {
                var t;
                for (t in e) {
                    return false;
                }
                return true;
            }
            function d(e) {
                return typeof e === "number" || Object.prototype.toString.call(e) === "[object Number]";
            }
            function u(e) {
                return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
            }
            function l(e, t) {
                var n = [], r;
                for (r = 0; r < e.length; ++r) {
                    n.push(t(e[r], r));
                }
                return n;
            }
            function f(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            function c(e, t) {
                for (var n in t) {
                    if (f(t, n)) {
                        e[n] = t[n];
                    }
                }
                if (f(t, "toString")) {
                    e.toString = t.toString;
                }
                if (f(t, "valueOf")) {
                    e.valueOf = t.valueOf;
                }
                return e;
            }
            function m(e, t, n, r) {
                return $n(e, t, n, r, true).utc();
            }
            function _() {
                return {
                    empty: false,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: false,
                    invalidMonth: null,
                    invalidFormat: false,
                    userInvalidated: false,
                    iso: false,
                    parsedDateParts: [],
                    meridiem: null
                };
            }
            function h(e) {
                if (e._pf == null) {
                    e._pf = _();
                }
                return e._pf;
            }
            var p;
            if (Array.prototype.some) {
                p = Array.prototype.some;
            } else {
                p = function(e) {
                    var t = Object(this);
                    var n = t.length >>> 0;
                    for (var r = 0; r < n; r++) {
                        if (r in t && e.call(this, t[r], r, t)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            var y = p;
            function g(e) {
                if (e._isValid == null) {
                    var t = h(e);
                    var n = y.call(t.parsedDateParts, function(e) {
                        return e != null;
                    });
                    var r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict) {
                        r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined;
                    }
                    if (Object.isFrozen == null || !Object.isFrozen(e)) {
                        e._isValid = r;
                    } else {
                        return r;
                    }
                }
                return e._isValid;
            }
            function v(e) {
                var t = m(NaN);
                if (e != null) {
                    c(h(t), e);
                } else {
                    h(t).userInvalidated = true;
                }
                return t;
            }
            function M(e) {
                return e === void 0;
            }
            var L = r.momentProperties = [];
            function b(e, t) {
                var n, r, i;
                if (!M(t._isAMomentObject)) {
                    e._isAMomentObject = t._isAMomentObject;
                }
                if (!M(t._i)) {
                    e._i = t._i;
                }
                if (!M(t._f)) {
                    e._f = t._f;
                }
                if (!M(t._l)) {
                    e._l = t._l;
                }
                if (!M(t._strict)) {
                    e._strict = t._strict;
                }
                if (!M(t._tzm)) {
                    e._tzm = t._tzm;
                }
                if (!M(t._isUTC)) {
                    e._isUTC = t._isUTC;
                }
                if (!M(t._offset)) {
                    e._offset = t._offset;
                }
                if (!M(t._pf)) {
                    e._pf = h(t);
                }
                if (!M(t._locale)) {
                    e._locale = t._locale;
                }
                if (L.length > 0) {
                    for (n in L) {
                        r = L[n];
                        i = t[r];
                        if (!M(i)) {
                            e[r] = i;
                        }
                    }
                }
                return e;
            }
            var w = false;
            function Y(e) {
                b(this, e);
                this._d = new Date(e._d != null ? e._d.getTime() : NaN);
                if (!this.isValid()) {
                    this._d = new Date(NaN);
                }
                if (w === false) {
                    w = true;
                    r.updateOffset(this);
                    w = false;
                }
            }
            function k(e) {
                return e instanceof Y || e != null && e._isAMomentObject != null;
            }
            function D(e) {
                if (e < 0) {
                    return Math.ceil(e) || 0;
                } else {
                    return Math.floor(e);
                }
            }
            function T(e) {
                var t = +e, n = 0;
                if (t !== 0 && isFinite(t)) {
                    n = D(t);
                }
                return n;
            }
            function x(e, t, n) {
                var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, s;
                for (s = 0; s < r; s++) {
                    if (n && e[s] !== t[s] || !n && T(e[s]) !== T(t[s])) {
                        a++;
                    }
                }
                return a + i;
            }
            function S(e) {
                if (r.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                    console.warn("Deprecation warning: " + e);
                }
            }
            function j(e, t) {
                var n = true;
                return c(function() {
                    if (r.deprecationHandler != null) {
                        r.deprecationHandler(null, e);
                    }
                    if (n) {
                        var i = [];
                        var a;
                        for (var s = 0; s < arguments.length; s++) {
                            a = "";
                            if (typeof arguments[s] === "object") {
                                a += "\n[" + s + "] ";
                                for (var o in arguments[0]) {
                                    a += o + ": " + arguments[0][o] + ", ";
                                }
                                a = a.slice(0, -2);
                            } else {
                                a = arguments[s];
                            }
                            i.push(a);
                        }
                        S(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + new Error().stack);
                        n = false;
                    }
                    return t.apply(this, arguments);
                }, t);
            }
            var H = {};
            function C(e, t) {
                if (r.deprecationHandler != null) {
                    r.deprecationHandler(e, t);
                }
                if (!H[e]) {
                    S(t);
                    H[e] = true;
                }
            }
            r.suppressDeprecationWarnings = false;
            r.deprecationHandler = null;
            function P(e) {
                return e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
            }
            function E(e) {
                var t, n;
                for (n in e) {
                    t = e[n];
                    if (P(t)) {
                        this[n] = t;
                    } else {
                        this["_" + n] = t;
                    }
                }
                this._config = e;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
            }
            function O(e, t) {
                var n = c({}, e), r;
                for (r in t) {
                    if (f(t, r)) {
                        if (s(e[r]) && s(t[r])) {
                            n[r] = {};
                            c(n[r], e[r]);
                            c(n[r], t[r]);
                        } else if (t[r] != null) {
                            n[r] = t[r];
                        } else {
                            delete n[r];
                        }
                    }
                }
                for (r in e) {
                    if (f(e, r) && !f(t, r) && s(e[r])) {
                        n[r] = c({}, n[r]);
                    }
                }
                return n;
            }
            function A(e) {
                if (e != null) {
                    this.set(e);
                }
            }
            var W;
            if (Object.keys) {
                W = Object.keys;
            } else {
                W = function(e) {
                    var t, n = [];
                    for (t in e) {
                        if (f(e, t)) {
                            n.push(t);
                        }
                    }
                    return n;
                };
            }
            var F = W;
            var N = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };
            function z(e, t, n) {
                var r = this._calendar[e] || this._calendar["sameElse"];
                return P(r) ? r.call(t, n) : r;
            }
            var $ = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            function I(e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                if (t || !n) {
                    return t;
                }
                this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1);
                });
                return this._longDateFormat[e];
            }
            var R = "Invalid date";
            function q() {
                return this._invalidDate;
            }
            var J = "%d";
            var B = /\d{1,2}/;
            function U(e) {
                return this._ordinal.replace("%d", e);
            }
            var V = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function G(e, t, n, r) {
                var i = this._relativeTime[n];
                return P(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
            }
            function Z(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return P(n) ? n(t) : n.replace(/%s/i, t);
            }
            var K = {};
            function X(e, t) {
                var n = e.toLowerCase();
                K[n] = K[n + "s"] = K[t] = e;
            }
            function Q(e) {
                return typeof e === "string" ? K[e] || K[e.toLowerCase()] : undefined;
            }
            function ee(e) {
                var t = {}, n, r;
                for (r in e) {
                    if (f(e, r)) {
                        n = Q(r);
                        if (n) {
                            t[n] = e[r];
                        }
                    }
                }
                return t;
            }
            var te = {};
            function ne(e, t) {
                te[e] = t;
            }
            function re(e) {
                var t = [];
                for (var n in e) {
                    t.push({
                        unit: n,
                        priority: te[n]
                    });
                }
                t.sort(function(e, t) {
                    return e.priority - t.priority;
                });
                return t;
            }
            function ie(e, t) {
                return function(n) {
                    if (n != null) {
                        se(this, e, n);
                        r.updateOffset(this, t);
                        return this;
                    } else {
                        return ae(this, e);
                    }
                };
            }
            function ae(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
            }
            function se(e, t, n) {
                if (e.isValid()) {
                    e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
                }
            }
            function oe(e) {
                e = Q(e);
                if (P(this[e])) {
                    return this[e]();
                }
                return this;
            }
            function de(e, t) {
                if (typeof e === "object") {
                    e = ee(e);
                    var n = re(e);
                    for (var r = 0; r < n.length; r++) {
                        this[n[r].unit](e[n[r].unit]);
                    }
                } else {
                    e = Q(e);
                    if (P(this[e])) {
                        return this[e](t);
                    }
                }
                return this;
            }
            function ue(e, t, n) {
                var r = "" + Math.abs(e), i = t - r.length, a = e >= 0;
                return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
            }
            var le = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
            var fe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
            var ce = {};
            var me = {};
            function _e(e, t, n, r) {
                var i = r;
                if (typeof r === "string") {
                    i = function() {
                        return this[r]();
                    };
                }
                if (e) {
                    me[e] = i;
                }
                if (t) {
                    me[t[0]] = function() {
                        return ue(i.apply(this, arguments), t[1], t[2]);
                    };
                }
                if (n) {
                    me[n] = function() {
                        return this.localeData().ordinal(i.apply(this, arguments), e);
                    };
                }
            }
            function he(e) {
                if (e.match(/\[[\s\S]/)) {
                    return e.replace(/^\[|\]$/g, "");
                }
                return e.replace(/\\/g, "");
            }
            function pe(e) {
                var t = e.match(le), n, r;
                for (n = 0, r = t.length; n < r; n++) {
                    if (me[t[n]]) {
                        t[n] = me[t[n]];
                    } else {
                        t[n] = he(t[n]);
                    }
                }
                return function(n) {
                    var i = "", a;
                    for (a = 0; a < r; a++) {
                        i += t[a] instanceof Function ? t[a].call(n, e) : t[a];
                    }
                    return i;
                };
            }
            function ye(e, t) {
                if (!e.isValid()) {
                    return e.localeData().invalidDate();
                }
                t = ge(t, e.localeData());
                ce[t] = ce[t] || pe(t);
                return ce[t](e);
            }
            function ge(e, t) {
                var n = 5;
                function r(e) {
                    return t.longDateFormat(e) || e;
                }
                fe.lastIndex = 0;
                while (n >= 0 && fe.test(e)) {
                    e = e.replace(fe, r);
                    fe.lastIndex = 0;
                    n -= 1;
                }
                return e;
            }
            var ve = /\d/;
            var Me = /\d\d/;
            var Le = /\d{3}/;
            var be = /\d{4}/;
            var we = /[+-]?\d{6}/;
            var Ye = /\d\d?/;
            var ke = /\d\d\d\d?/;
            var De = /\d\d\d\d\d\d?/;
            var Te = /\d{1,3}/;
            var xe = /\d{1,4}/;
            var Se = /[+-]?\d{1,6}/;
            var je = /\d+/;
            var He = /[+-]?\d+/;
            var Ce = /Z|[+-]\d\d:?\d\d/gi;
            var Pe = /Z|[+-]\d\d(?::?\d\d)?/gi;
            var Ee = /[+-]?\d+(\.\d{1,3})?/;
            var Oe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
            var Ae = {};
            function We(e, t, n) {
                Ae[e] = P(t) ? t : function(e, r) {
                    return e && n ? n : t;
                };
            }
            function Fe(e, t) {
                if (!f(Ae, e)) {
                    return new RegExp(Ne(e));
                }
                return Ae[e](t._strict, t._locale);
            }
            function Ne(e) {
                return ze(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                    return t || n || r || i;
                }));
            }
            function ze(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            var $e = {};
            function Ie(e, t) {
                var n, r = t;
                if (typeof e === "string") {
                    e = [ e ];
                }
                if (d(t)) {
                    r = function(e, n) {
                        n[t] = T(e);
                    };
                }
                for (n = 0; n < e.length; n++) {
                    $e[e[n]] = r;
                }
            }
            function Re(e, t) {
                Ie(e, function(e, n, r, i) {
                    r._w = r._w || {};
                    t(e, r._w, r, i);
                });
            }
            function qe(e, t, n) {
                if (t != null && f($e, e)) {
                    $e[e](t, n._a, n, e);
                }
            }
            var Je = 0;
            var Be = 1;
            var Ue = 2;
            var Ve = 3;
            var Ge = 4;
            var Ze = 5;
            var Ke = 6;
            var Xe = 7;
            var Qe = 8;
            var et;
            if (Array.prototype.indexOf) {
                et = Array.prototype.indexOf;
            } else {
                et = function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t) {
                        if (this[t] === e) {
                            return t;
                        }
                    }
                    return -1;
                };
            }
            var tt = et;
            function nt(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
            }
            _e("M", [ "MM", 2 ], "Mo", function() {
                return this.month() + 1;
            });
            _e("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e);
            });
            _e("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e);
            });
            X("month", "M");
            ne("month", 8);
            We("M", Ye);
            We("MM", Ye, Me);
            We("MMM", function(e, t) {
                return t.monthsShortRegex(e);
            });
            We("MMMM", function(e, t) {
                return t.monthsRegex(e);
            });
            Ie([ "M", "MM" ], function(e, t) {
                t[Be] = T(e) - 1;
            });
            Ie([ "MMM", "MMMM" ], function(e, t, n, r) {
                var i = n._locale.monthsParse(e, r, n._strict);
                if (i != null) {
                    t[Be] = i;
                } else {
                    h(n).invalidMonth = e;
                }
            });
            var rt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
            var it = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
            function at(e, t) {
                if (!e) {
                    return this._months;
                }
                return a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || rt).test(t) ? "format" : "standalone"][e.month()];
            }
            var st = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
            function ot(e, t) {
                if (!e) {
                    return this._monthsShort;
                }
                return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[rt.test(t) ? "format" : "standalone"][e.month()];
            }
            function dt(e, t, n) {
                var r, i, a, s = e.toLocaleLowerCase();
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (r = 0; r < 12; ++r) {
                        a = m([ 2e3, r ]);
                        this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase();
                        this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "MMM") {
                        i = tt.call(this._shortMonthsParse, s);
                        return i !== -1 ? i : null;
                    } else {
                        i = tt.call(this._longMonthsParse, s);
                        return i !== -1 ? i : null;
                    }
                } else {
                    if (t === "MMM") {
                        i = tt.call(this._shortMonthsParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._longMonthsParse, s);
                        return i !== -1 ? i : null;
                    } else {
                        i = tt.call(this._longMonthsParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._shortMonthsParse, s);
                        return i !== -1 ? i : null;
                    }
                }
            }
            function ut(e, t, n) {
                var r, i, a;
                if (this._monthsParseExact) {
                    return dt.call(this, e, t, n);
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                }
                for (r = 0; r < 12; r++) {
                    i = m([ 2e3, r ]);
                    if (n && !this._longMonthsParse[r]) {
                        this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i");
                        this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i");
                    }
                    if (!n && !this._monthsParse[r]) {
                        a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "");
                        this._monthsParse[r] = new RegExp(a.replace(".", ""), "i");
                    }
                    if (n && t === "MMMM" && this._longMonthsParse[r].test(e)) {
                        return r;
                    } else if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) {
                        return r;
                    } else if (!n && this._monthsParse[r].test(e)) {
                        return r;
                    }
                }
            }
            function lt(e, t) {
                var n;
                if (!e.isValid()) {
                    return e;
                }
                if (typeof t === "string") {
                    if (/^\d+$/.test(t)) {
                        t = T(t);
                    } else {
                        t = e.localeData().monthsParse(t);
                        if (!d(t)) {
                            return e;
                        }
                    }
                }
                n = Math.min(e.date(), nt(e.year(), t));
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
                return e;
            }
            function ft(e) {
                if (e != null) {
                    lt(this, e);
                    r.updateOffset(this, true);
                    return this;
                } else {
                    return ae(this, "Month");
                }
            }
            function ct() {
                return nt(this.year(), this.month());
            }
            var mt = Oe;
            function _t(e) {
                if (this._monthsParseExact) {
                    if (!f(this, "_monthsRegex")) {
                        yt.call(this);
                    }
                    if (e) {
                        return this._monthsShortStrictRegex;
                    } else {
                        return this._monthsShortRegex;
                    }
                } else {
                    if (!f(this, "_monthsShortRegex")) {
                        this._monthsShortRegex = mt;
                    }
                    return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex;
                }
            }
            var ht = Oe;
            function pt(e) {
                if (this._monthsParseExact) {
                    if (!f(this, "_monthsRegex")) {
                        yt.call(this);
                    }
                    if (e) {
                        return this._monthsStrictRegex;
                    } else {
                        return this._monthsRegex;
                    }
                } else {
                    if (!f(this, "_monthsRegex")) {
                        this._monthsRegex = ht;
                    }
                    return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex;
                }
            }
            function yt() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t = [], n = [], r = [], i, a;
                for (i = 0; i < 12; i++) {
                    a = m([ 2e3, i ]);
                    t.push(this.monthsShort(a, ""));
                    n.push(this.months(a, ""));
                    r.push(this.months(a, ""));
                    r.push(this.monthsShort(a, ""));
                }
                t.sort(e);
                n.sort(e);
                r.sort(e);
                for (i = 0; i < 12; i++) {
                    t[i] = ze(t[i]);
                    n[i] = ze(n[i]);
                }
                for (i = 0; i < 24; i++) {
                    r[i] = ze(r[i]);
                }
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i");
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
            }
            _e("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e;
            });
            _e(0, [ "YY", 2 ], 0, function() {
                return this.year() % 100;
            });
            _e(0, [ "YYYY", 4 ], 0, "year");
            _e(0, [ "YYYYY", 5 ], 0, "year");
            _e(0, [ "YYYYYY", 6, true ], 0, "year");
            X("year", "y");
            ne("year", 1);
            We("Y", He);
            We("YY", Ye, Me);
            We("YYYY", xe, be);
            We("YYYYY", Se, we);
            We("YYYYYY", Se, we);
            Ie([ "YYYYY", "YYYYYY" ], Je);
            Ie("YYYY", function(e, t) {
                t[Je] = e.length === 2 ? r.parseTwoDigitYear(e) : T(e);
            });
            Ie("YY", function(e, t) {
                t[Je] = r.parseTwoDigitYear(e);
            });
            Ie("Y", function(e, t) {
                t[Je] = parseInt(e, 10);
            });
            function gt(e) {
                return vt(e) ? 366 : 365;
            }
            function vt(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
            }
            r.parseTwoDigitYear = function(e) {
                return T(e) + (T(e) > 68 ? 1900 : 2e3);
            };
            var Mt = ie("FullYear", true);
            function Lt() {
                return vt(this.year());
            }
            function bt(e, t, n, r, i, a, s) {
                var o = new Date(e, t, n, r, i, a, s);
                if (e < 100 && e >= 0 && isFinite(o.getFullYear())) {
                    o.setFullYear(e);
                }
                return o;
            }
            function wt(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                if (e < 100 && e >= 0 && isFinite(t.getUTCFullYear())) {
                    t.setUTCFullYear(e);
                }
                return t;
            }
            function Yt(e, t, n) {
                var r = 7 + t - n, i = (7 + wt(e, 0, r).getUTCDay() - t) % 7;
                return -i + r - 1;
            }
            function kt(e, t, n, r, i) {
                var a = (7 + n - r) % 7, s = Yt(e, r, i), o = 1 + 7 * (t - 1) + a + s, d, u;
                if (o <= 0) {
                    d = e - 1;
                    u = gt(d) + o;
                } else if (o > gt(e)) {
                    d = e + 1;
                    u = o - gt(e);
                } else {
                    d = e;
                    u = o;
                }
                return {
                    year: d,
                    dayOfYear: u
                };
            }
            function Dt(e, t, n) {
                var r = Yt(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, s;
                if (i < 1) {
                    s = e.year() - 1;
                    a = i + Tt(s, t, n);
                } else if (i > Tt(e.year(), t, n)) {
                    a = i - Tt(e.year(), t, n);
                    s = e.year() + 1;
                } else {
                    s = e.year();
                    a = i;
                }
                return {
                    week: a,
                    year: s
                };
            }
            function Tt(e, t, n) {
                var r = Yt(e, t, n), i = Yt(e + 1, t, n);
                return (gt(e) - r + i) / 7;
            }
            _e("w", [ "ww", 2 ], "wo", "week");
            _e("W", [ "WW", 2 ], "Wo", "isoWeek");
            X("week", "w");
            X("isoWeek", "W");
            ne("week", 5);
            ne("isoWeek", 5);
            We("w", Ye);
            We("ww", Ye, Me);
            We("W", Ye);
            We("WW", Ye, Me);
            Re([ "w", "ww", "W", "WW" ], function(e, t, n, r) {
                t[r.substr(0, 1)] = T(e);
            });
            function xt(e) {
                return Dt(e, this._week.dow, this._week.doy).week;
            }
            var St = {
                dow: 0,
                doy: 6
            };
            function jt() {
                return this._week.dow;
            }
            function Ht() {
                return this._week.doy;
            }
            function Ct(e) {
                var t = this.localeData().week(this);
                return e == null ? t : this.add((e - t) * 7, "d");
            }
            function Pt(e) {
                var t = Dt(this, 1, 4).week;
                return e == null ? t : this.add((e - t) * 7, "d");
            }
            _e("d", 0, "do", "day");
            _e("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e);
            });
            _e("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e);
            });
            _e("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e);
            });
            _e("e", 0, 0, "weekday");
            _e("E", 0, 0, "isoWeekday");
            X("day", "d");
            X("weekday", "e");
            X("isoWeekday", "E");
            ne("day", 11);
            ne("weekday", 11);
            ne("isoWeekday", 11);
            We("d", Ye);
            We("e", Ye);
            We("E", Ye);
            We("dd", function(e, t) {
                return t.weekdaysMinRegex(e);
            });
            We("ddd", function(e, t) {
                return t.weekdaysShortRegex(e);
            });
            We("dddd", function(e, t) {
                return t.weekdaysRegex(e);
            });
            Re([ "dd", "ddd", "dddd" ], function(e, t, n, r) {
                var i = n._locale.weekdaysParse(e, r, n._strict);
                if (i != null) {
                    t.d = i;
                } else {
                    h(n).invalidWeekday = e;
                }
            });
            Re([ "d", "e", "E" ], function(e, t, n, r) {
                t[r] = T(e);
            });
            function Et(e, t) {
                if (typeof e !== "string") {
                    return e;
                }
                if (!isNaN(e)) {
                    return parseInt(e, 10);
                }
                e = t.weekdaysParse(e);
                if (typeof e === "number") {
                    return e;
                }
                return null;
            }
            function Ot(e, t) {
                if (typeof e === "string") {
                    return t.weekdaysParse(e) % 7 || 7;
                }
                return isNaN(e) ? null : e;
            }
            var At = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
            function Wt(e, t) {
                if (!e) {
                    return this._weekdays;
                }
                return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()];
            }
            var Ft = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
            function Nt(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
            }
            var zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            function $t(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
            }
            function It(e, t, n) {
                var r, i, a, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    for (r = 0; r < 7; ++r) {
                        a = m([ 2e3, 1 ]).day(r);
                        this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase();
                        this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase();
                        this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "dddd") {
                        i = tt.call(this._weekdaysParse, s);
                        return i !== -1 ? i : null;
                    } else if (t === "ddd") {
                        i = tt.call(this._shortWeekdaysParse, s);
                        return i !== -1 ? i : null;
                    } else {
                        i = tt.call(this._minWeekdaysParse, s);
                        return i !== -1 ? i : null;
                    }
                } else {
                    if (t === "dddd") {
                        i = tt.call(this._weekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._shortWeekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._minWeekdaysParse, s);
                        return i !== -1 ? i : null;
                    } else if (t === "ddd") {
                        i = tt.call(this._shortWeekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._weekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._minWeekdaysParse, s);
                        return i !== -1 ? i : null;
                    } else {
                        i = tt.call(this._minWeekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._weekdaysParse, s);
                        if (i !== -1) {
                            return i;
                        }
                        i = tt.call(this._shortWeekdaysParse, s);
                        return i !== -1 ? i : null;
                    }
                }
            }
            function Rt(e, t, n) {
                var r, i, a;
                if (this._weekdaysParseExact) {
                    return It.call(this, e, t, n);
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = [];
                }
                for (r = 0; r < 7; r++) {
                    i = m([ 2e3, 1 ]).day(r);
                    if (n && !this._fullWeekdaysParse[r]) {
                        this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i");
                        this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i");
                        this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i");
                    }
                    if (!this._weekdaysParse[r]) {
                        a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "");
                        this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i");
                    }
                    if (n && t === "dddd" && this._fullWeekdaysParse[r].test(e)) {
                        return r;
                    } else if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) {
                        return r;
                    } else if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) {
                        return r;
                    } else if (!n && this._weekdaysParse[r].test(e)) {
                        return r;
                    }
                }
            }
            function qt(e) {
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (e != null) {
                    e = Et(e, this.localeData());
                    return this.add(e - t, "d");
                } else {
                    return t;
                }
            }
            function Jt(e) {
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return e == null ? t : this.add(e - t, "d");
            }
            function Bt(e) {
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                if (e != null) {
                    var t = Ot(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7);
                } else {
                    return this.day() || 7;
                }
            }
            var Ut = Oe;
            function Vt(e) {
                if (this._weekdaysParseExact) {
                    if (!f(this, "_weekdaysRegex")) {
                        Qt.call(this);
                    }
                    if (e) {
                        return this._weekdaysStrictRegex;
                    } else {
                        return this._weekdaysRegex;
                    }
                } else {
                    if (!f(this, "_weekdaysRegex")) {
                        this._weekdaysRegex = Ut;
                    }
                    return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex;
                }
            }
            var Gt = Oe;
            function Zt(e) {
                if (this._weekdaysParseExact) {
                    if (!f(this, "_weekdaysRegex")) {
                        Qt.call(this);
                    }
                    if (e) {
                        return this._weekdaysShortStrictRegex;
                    } else {
                        return this._weekdaysShortRegex;
                    }
                } else {
                    if (!f(this, "_weekdaysShortRegex")) {
                        this._weekdaysShortRegex = Gt;
                    }
                    return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                }
            }
            var Kt = Oe;
            function Xt(e) {
                if (this._weekdaysParseExact) {
                    if (!f(this, "_weekdaysRegex")) {
                        Qt.call(this);
                    }
                    if (e) {
                        return this._weekdaysMinStrictRegex;
                    } else {
                        return this._weekdaysMinRegex;
                    }
                } else {
                    if (!f(this, "_weekdaysMinRegex")) {
                        this._weekdaysMinRegex = Kt;
                    }
                    return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                }
            }
            function Qt() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t = [], n = [], r = [], i = [], a, s, o, d, u;
                for (a = 0; a < 7; a++) {
                    s = m([ 2e3, 1 ]).day(a);
                    o = this.weekdaysMin(s, "");
                    d = this.weekdaysShort(s, "");
                    u = this.weekdays(s, "");
                    t.push(o);
                    n.push(d);
                    r.push(u);
                    i.push(o);
                    i.push(d);
                    i.push(u);
                }
                t.sort(e);
                n.sort(e);
                r.sort(e);
                i.sort(e);
                for (a = 0; a < 7; a++) {
                    n[a] = ze(n[a]);
                    r[a] = ze(r[a]);
                    i[a] = ze(i[a]);
                }
                this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i");
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
                this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
            }
            function en() {
                return this.hours() % 12 || 12;
            }
            function tn() {
                return this.hours() || 24;
            }
            _e("H", [ "HH", 2 ], 0, "hour");
            _e("h", [ "hh", 2 ], 0, en);
            _e("k", [ "kk", 2 ], 0, tn);
            _e("hmm", 0, 0, function() {
                return "" + en.apply(this) + ue(this.minutes(), 2);
            });
            _e("hmmss", 0, 0, function() {
                return "" + en.apply(this) + ue(this.minutes(), 2) + ue(this.seconds(), 2);
            });
            _e("Hmm", 0, 0, function() {
                return "" + this.hours() + ue(this.minutes(), 2);
            });
            _e("Hmmss", 0, 0, function() {
                return "" + this.hours() + ue(this.minutes(), 2) + ue(this.seconds(), 2);
            });
            function nn(e, t) {
                _e(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t);
                });
            }
            nn("a", true);
            nn("A", false);
            X("hour", "h");
            ne("hour", 13);
            function rn(e, t) {
                return t._meridiemParse;
            }
            We("a", rn);
            We("A", rn);
            We("H", Ye);
            We("h", Ye);
            We("HH", Ye, Me);
            We("hh", Ye, Me);
            We("hmm", ke);
            We("hmmss", De);
            We("Hmm", ke);
            We("Hmmss", De);
            Ie([ "H", "HH" ], Ve);
            Ie([ "a", "A" ], function(e, t, n) {
                n._isPm = n._locale.isPM(e);
                n._meridiem = e;
            });
            Ie([ "h", "hh" ], function(e, t, n) {
                t[Ve] = T(e);
                h(n).bigHour = true;
            });
            Ie("hmm", function(e, t, n) {
                var r = e.length - 2;
                t[Ve] = T(e.substr(0, r));
                t[Ge] = T(e.substr(r));
                h(n).bigHour = true;
            });
            Ie("hmmss", function(e, t, n) {
                var r = e.length - 4;
                var i = e.length - 2;
                t[Ve] = T(e.substr(0, r));
                t[Ge] = T(e.substr(r, 2));
                t[Ze] = T(e.substr(i));
                h(n).bigHour = true;
            });
            Ie("Hmm", function(e, t, n) {
                var r = e.length - 2;
                t[Ve] = T(e.substr(0, r));
                t[Ge] = T(e.substr(r));
            });
            Ie("Hmmss", function(e, t, n) {
                var r = e.length - 4;
                var i = e.length - 2;
                t[Ve] = T(e.substr(0, r));
                t[Ge] = T(e.substr(r, 2));
                t[Ze] = T(e.substr(i));
            });
            function an(e) {
                return (e + "").toLowerCase().charAt(0) === "p";
            }
            var sn = /[ap]\.?m?\.?/i;
            function on(e, t, n) {
                if (e > 11) {
                    return n ? "pm" : "PM";
                } else {
                    return n ? "am" : "AM";
                }
            }
            var dn = ie("Hours", true);
            var un = {
                calendar: N,
                longDateFormat: $,
                invalidDate: R,
                ordinal: J,
                ordinalParse: B,
                relativeTime: V,
                months: it,
                monthsShort: st,
                week: St,
                weekdays: At,
                weekdaysMin: zt,
                weekdaysShort: Ft,
                meridiemParse: sn
            };
            var ln = {};
            var fn = {};
            var cn;
            function mn(e) {
                return e ? e.toLowerCase().replace("_", "-") : e;
            }
            function _n(e) {
                var t = 0, n, r, i, a;
                while (t < e.length) {
                    a = mn(e[t]).split("-");
                    n = a.length;
                    r = mn(e[t + 1]);
                    r = r ? r.split("-") : null;
                    while (n > 0) {
                        i = hn(a.slice(0, n).join("-"));
                        if (i) {
                            return i;
                        }
                        if (r && r.length >= n && x(a, r, true) >= n - 1) {
                            break;
                        }
                        n--;
                    }
                    t++;
                }
                return null;
            }
            function hn(t) {
                var r = null;
                if (!ln[t] && typeof e !== "undefined" && e && e.exports) {
                    try {
                        r = cn._abbr;
                        n(17)("./" + t);
                        pn(r);
                    } catch (e) {}
                }
                return ln[t];
            }
            function pn(e, t) {
                var n;
                if (e) {
                    if (M(t)) {
                        n = vn(e);
                    } else {
                        n = yn(e, t);
                    }
                    if (n) {
                        cn = n;
                    }
                }
                return cn._abbr;
            }
            function yn(e, t) {
                if (t !== null) {
                    var n = un;
                    t.abbr = e;
                    if (ln[e] != null) {
                        C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                        n = ln[e]._config;
                    } else if (t.parentLocale != null) {
                        if (ln[t.parentLocale] != null) {
                            n = ln[t.parentLocale]._config;
                        } else {
                            if (!fn[t.parentLocale]) {
                                fn[t.parentLocale] = [];
                            }
                            fn[t.parentLocale].push({
                                name: e,
                                config: t
                            });
                            return null;
                        }
                    }
                    ln[e] = new A(O(n, t));
                    if (fn[e]) {
                        fn[e].forEach(function(e) {
                            yn(e.name, e.config);
                        });
                    }
                    pn(e);
                    return ln[e];
                } else {
                    delete ln[e];
                    return null;
                }
            }
            function gn(e, t) {
                if (t != null) {
                    var n, r = un;
                    if (ln[e] != null) {
                        r = ln[e]._config;
                    }
                    t = O(r, t);
                    n = new A(t);
                    n.parentLocale = ln[e];
                    ln[e] = n;
                    pn(e);
                } else {
                    if (ln[e] != null) {
                        if (ln[e].parentLocale != null) {
                            ln[e] = ln[e].parentLocale;
                        } else if (ln[e] != null) {
                            delete ln[e];
                        }
                    }
                }
                return ln[e];
            }
            function vn(e) {
                var t;
                if (e && e._locale && e._locale._abbr) {
                    e = e._locale._abbr;
                }
                if (!e) {
                    return cn;
                }
                if (!a(e)) {
                    t = hn(e);
                    if (t) {
                        return t;
                    }
                    e = [ e ];
                }
                return _n(e);
            }
            function Mn() {
                return F(ln);
            }
            function Ln(e) {
                var t;
                var n = e._a;
                if (n && h(e).overflow === -2) {
                    t = n[Be] < 0 || n[Be] > 11 ? Be : n[Ue] < 1 || n[Ue] > nt(n[Je], n[Be]) ? Ue : n[Ve] < 0 || n[Ve] > 24 || n[Ve] === 24 && (n[Ge] !== 0 || n[Ze] !== 0 || n[Ke] !== 0) ? Ve : n[Ge] < 0 || n[Ge] > 59 ? Ge : n[Ze] < 0 || n[Ze] > 59 ? Ze : n[Ke] < 0 || n[Ke] > 999 ? Ke : -1;
                    if (h(e)._overflowDayOfYear && (t < Je || t > Ue)) {
                        t = Ue;
                    }
                    if (h(e)._overflowWeeks && t === -1) {
                        t = Xe;
                    }
                    if (h(e)._overflowWeekday && t === -1) {
                        t = Qe;
                    }
                    h(e).overflow = t;
                }
                return e;
            }
            var bn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var wn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var Yn = /Z|[+-]\d\d(?::?\d\d)?/;
            var kn = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, false ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, false ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, false ], [ "YYYYDDD", /\d{7}/ ] ];
            var Dn = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ];
            var Tn = /^\/?Date\((\-?\d+)/i;
            function xn(e) {
                var t, n, r = e._i, i = bn.exec(r) || wn.exec(r), a, s, o, d;
                if (i) {
                    h(e).iso = true;
                    for (t = 0, n = kn.length; t < n; t++) {
                        if (kn[t][1].exec(i[1])) {
                            s = kn[t][0];
                            a = kn[t][2] !== false;
                            break;
                        }
                    }
                    if (s == null) {
                        e._isValid = false;
                        return;
                    }
                    if (i[3]) {
                        for (t = 0, n = Dn.length; t < n; t++) {
                            if (Dn[t][1].exec(i[3])) {
                                o = (i[2] || " ") + Dn[t][0];
                                break;
                            }
                        }
                        if (o == null) {
                            e._isValid = false;
                            return;
                        }
                    }
                    if (!a && o != null) {
                        e._isValid = false;
                        return;
                    }
                    if (i[4]) {
                        if (Yn.exec(i[4])) {
                            d = "Z";
                        } else {
                            e._isValid = false;
                            return;
                        }
                    }
                    e._f = s + (o || "") + (d || "");
                    En(e);
                } else {
                    e._isValid = false;
                }
            }
            function Sn(e) {
                var t = Tn.exec(e._i);
                if (t !== null) {
                    e._d = new Date(+t[1]);
                    return;
                }
                xn(e);
                if (e._isValid === false) {
                    delete e._isValid;
                    r.createFromInputFallback(e);
                }
            }
            r.createFromInputFallback = j("value provided is not in a recognized ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            });
            function jn(e, t, n) {
                if (e != null) {
                    return e;
                }
                if (t != null) {
                    return t;
                }
                return n;
            }
            function Hn(e) {
                var t = new Date(r.now());
                if (e._useUTC) {
                    return [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ];
                }
                return [ t.getFullYear(), t.getMonth(), t.getDate() ];
            }
            function Cn(e) {
                var t, n, r = [], i, a;
                if (e._d) {
                    return;
                }
                i = Hn(e);
                if (e._w && e._a[Ue] == null && e._a[Be] == null) {
                    Pn(e);
                }
                if (e._dayOfYear) {
                    a = jn(e._a[Je], i[Je]);
                    if (e._dayOfYear > gt(a)) {
                        h(e)._overflowDayOfYear = true;
                    }
                    n = wt(a, 0, e._dayOfYear);
                    e._a[Be] = n.getUTCMonth();
                    e._a[Ue] = n.getUTCDate();
                }
                for (t = 0; t < 3 && e._a[t] == null; ++t) {
                    e._a[t] = r[t] = i[t];
                }
                for (;t < 7; t++) {
                    e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
                }
                if (e._a[Ve] === 24 && e._a[Ge] === 0 && e._a[Ze] === 0 && e._a[Ke] === 0) {
                    e._nextDay = true;
                    e._a[Ve] = 0;
                }
                e._d = (e._useUTC ? wt : bt).apply(null, r);
                if (e._tzm != null) {
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
                }
                if (e._nextDay) {
                    e._a[Ve] = 24;
                }
            }
            function Pn(e) {
                var t, n, r, i, a, s, o, d;
                t = e._w;
                if (t.GG != null || t.W != null || t.E != null) {
                    a = 1;
                    s = 4;
                    n = jn(t.GG, e._a[Je], Dt(In(), 1, 4).year);
                    r = jn(t.W, 1);
                    i = jn(t.E, 1);
                    if (i < 1 || i > 7) {
                        d = true;
                    }
                } else {
                    a = e._locale._week.dow;
                    s = e._locale._week.doy;
                    var u = Dt(In(), a, s);
                    n = jn(t.gg, e._a[Je], u.year);
                    r = jn(t.w, u.week);
                    if (t.d != null) {
                        i = t.d;
                        if (i < 0 || i > 6) {
                            d = true;
                        }
                    } else if (t.e != null) {
                        i = t.e + a;
                        if (t.e < 0 || t.e > 6) {
                            d = true;
                        }
                    } else {
                        i = a;
                    }
                }
                if (r < 1 || r > Tt(n, a, s)) {
                    h(e)._overflowWeeks = true;
                } else if (d != null) {
                    h(e)._overflowWeekday = true;
                } else {
                    o = kt(n, r, i, a, s);
                    e._a[Je] = o.year;
                    e._dayOfYear = o.dayOfYear;
                }
            }
            r.ISO_8601 = function() {};
            function En(e) {
                if (e._f === r.ISO_8601) {
                    xn(e);
                    return;
                }
                e._a = [];
                h(e).empty = true;
                var t = "" + e._i, n, i, a, s, o, d = t.length, u = 0;
                a = ge(e._f, e._locale).match(le) || [];
                for (n = 0; n < a.length; n++) {
                    s = a[n];
                    i = (t.match(Fe(s, e)) || [])[0];
                    if (i) {
                        o = t.substr(0, t.indexOf(i));
                        if (o.length > 0) {
                            h(e).unusedInput.push(o);
                        }
                        t = t.slice(t.indexOf(i) + i.length);
                        u += i.length;
                    }
                    if (me[s]) {
                        if (i) {
                            h(e).empty = false;
                        } else {
                            h(e).unusedTokens.push(s);
                        }
                        qe(s, i, e);
                    } else if (e._strict && !i) {
                        h(e).unusedTokens.push(s);
                    }
                }
                h(e).charsLeftOver = d - u;
                if (t.length > 0) {
                    h(e).unusedInput.push(t);
                }
                if (e._a[Ve] <= 12 && h(e).bigHour === true && e._a[Ve] > 0) {
                    h(e).bigHour = undefined;
                }
                h(e).parsedDateParts = e._a.slice(0);
                h(e).meridiem = e._meridiem;
                e._a[Ve] = On(e._locale, e._a[Ve], e._meridiem);
                Cn(e);
                Ln(e);
            }
            function On(e, t, n) {
                var r;
                if (n == null) {
                    return t;
                }
                if (e.meridiemHour != null) {
                    return e.meridiemHour(t, n);
                } else if (e.isPM != null) {
                    r = e.isPM(n);
                    if (r && t < 12) {
                        t += 12;
                    }
                    if (!r && t === 12) {
                        t = 0;
                    }
                    return t;
                } else {
                    return t;
                }
            }
            function An(e) {
                var t, n, r, i, a;
                if (e._f.length === 0) {
                    h(e).invalidFormat = true;
                    e._d = new Date(NaN);
                    return;
                }
                for (i = 0; i < e._f.length; i++) {
                    a = 0;
                    t = b({}, e);
                    if (e._useUTC != null) {
                        t._useUTC = e._useUTC;
                    }
                    t._f = e._f[i];
                    En(t);
                    if (!g(t)) {
                        continue;
                    }
                    a += h(t).charsLeftOver;
                    a += h(t).unusedTokens.length * 10;
                    h(t).score = a;
                    if (r == null || a < r) {
                        r = a;
                        n = t;
                    }
                }
                c(e, n || t);
            }
            function Wn(e) {
                if (e._d) {
                    return;
                }
                var t = ee(e._i);
                e._a = l([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], function(e) {
                    return e && parseInt(e, 10);
                });
                Cn(e);
            }
            function Fn(e) {
                var t = new Y(Ln(Nn(e)));
                if (t._nextDay) {
                    t.add(1, "d");
                    t._nextDay = undefined;
                }
                return t;
            }
            function Nn(e) {
                var t = e._i, n = e._f;
                e._locale = e._locale || vn(e._l);
                if (t === null || n === undefined && t === "") {
                    return v({
                        nullInput: true
                    });
                }
                if (typeof t === "string") {
                    e._i = t = e._locale.preparse(t);
                }
                if (k(t)) {
                    return new Y(Ln(t));
                } else if (u(t)) {
                    e._d = t;
                } else if (a(n)) {
                    An(e);
                } else if (n) {
                    En(e);
                } else {
                    zn(e);
                }
                if (!g(e)) {
                    e._d = null;
                }
                return e;
            }
            function zn(e) {
                var t = e._i;
                if (t === undefined) {
                    e._d = new Date(r.now());
                } else if (u(t)) {
                    e._d = new Date(t.valueOf());
                } else if (typeof t === "string") {
                    Sn(e);
                } else if (a(t)) {
                    e._a = l(t.slice(0), function(e) {
                        return parseInt(e, 10);
                    });
                    Cn(e);
                } else if (typeof t === "object") {
                    Wn(e);
                } else if (d(t)) {
                    e._d = new Date(t);
                } else {
                    r.createFromInputFallback(e);
                }
            }
            function $n(e, t, n, r, i) {
                var d = {};
                if (n === true || n === false) {
                    r = n;
                    n = undefined;
                }
                if (s(e) && o(e) || a(e) && e.length === 0) {
                    e = undefined;
                }
                d._isAMomentObject = true;
                d._useUTC = d._isUTC = i;
                d._l = n;
                d._i = e;
                d._f = t;
                d._strict = r;
                return Fn(d);
            }
            function In(e, t, n, r) {
                return $n(e, t, n, r, false);
            }
            var Rn = j("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = In.apply(null, arguments);
                if (this.isValid() && e.isValid()) {
                    return e < this ? this : e;
                } else {
                    return v();
                }
            });
            var qn = j("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = In.apply(null, arguments);
                if (this.isValid() && e.isValid()) {
                    return e > this ? this : e;
                } else {
                    return v();
                }
            });
            function Jn(e, t) {
                var n, r;
                if (t.length === 1 && a(t[0])) {
                    t = t[0];
                }
                if (!t.length) {
                    return In();
                }
                n = t[0];
                for (r = 1; r < t.length; ++r) {
                    if (!t[r].isValid() || t[r][e](n)) {
                        n = t[r];
                    }
                }
                return n;
            }
            function Bn() {
                var e = [].slice.call(arguments, 0);
                return Jn("isBefore", e);
            }
            function Un() {
                var e = [].slice.call(arguments, 0);
                return Jn("isAfter", e);
            }
            var Vn = function() {
                return Date.now ? Date.now() : +new Date();
            };
            function Gn(e) {
                var t = ee(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, a = t.week || 0, s = t.day || 0, o = t.hour || 0, d = t.minute || 0, u = t.second || 0, l = t.millisecond || 0;
                this._milliseconds = +l + u * 1e3 + d * 6e4 + o * 1e3 * 60 * 60;
                this._days = +s + a * 7;
                this._months = +i + r * 3 + n * 12;
                this._data = {};
                this._locale = vn();
                this._bubble();
            }
            function Zn(e) {
                return e instanceof Gn;
            }
            function Kn(e) {
                if (e < 0) {
                    return Math.round(-1 * e) * -1;
                } else {
                    return Math.round(e);
                }
            }
            function Xn(e, t) {
                _e(e, 0, 0, function() {
                    var e = this.utcOffset();
                    var n = "+";
                    if (e < 0) {
                        e = -e;
                        n = "-";
                    }
                    return n + ue(~~(e / 60), 2) + t + ue(~~e % 60, 2);
                });
            }
            Xn("Z", ":");
            Xn("ZZ", "");
            We("Z", Pe);
            We("ZZ", Pe);
            Ie([ "Z", "ZZ" ], function(e, t, n) {
                n._useUTC = true;
                n._tzm = er(Pe, e);
            });
            var Qn = /([\+\-]|\d\d)/gi;
            function er(e, t) {
                var n = (t || "").match(e);
                if (n === null) {
                    return null;
                }
                var r = n[n.length - 1] || [];
                var i = (r + "").match(Qn) || [ "-", 0, 0 ];
                var a = +(i[1] * 60) + T(i[2]);
                return a === 0 ? 0 : i[0] === "+" ? a : -a;
            }
            function tr(e, t) {
                var n, i;
                if (t._isUTC) {
                    n = t.clone();
                    i = (k(e) || u(e) ? e.valueOf() : In(e).valueOf()) - n.valueOf();
                    n._d.setTime(n._d.valueOf() + i);
                    r.updateOffset(n, false);
                    return n;
                } else {
                    return In(e).local();
                }
            }
            function nr(e) {
                return -Math.round(e._d.getTimezoneOffset() / 15) * 15;
            }
            r.updateOffset = function() {};
            function rr(e, t) {
                var n = this._offset || 0, i;
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                if (e != null) {
                    if (typeof e === "string") {
                        e = er(Pe, e);
                        if (e === null) {
                            return this;
                        }
                    } else if (Math.abs(e) < 16) {
                        e = e * 60;
                    }
                    if (!this._isUTC && t) {
                        i = nr(this);
                    }
                    this._offset = e;
                    this._isUTC = true;
                    if (i != null) {
                        this.add(i, "m");
                    }
                    if (n !== e) {
                        if (!t || this._changeInProgress) {
                            Lr(this, pr(e - n, "m"), 1, false);
                        } else if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            r.updateOffset(this, true);
                            this._changeInProgress = null;
                        }
                    }
                    return this;
                } else {
                    return this._isUTC ? n : nr(this);
                }
            }
            function ir(e, t) {
                if (e != null) {
                    if (typeof e !== "string") {
                        e = -e;
                    }
                    this.utcOffset(e, t);
                    return this;
                } else {
                    return -this.utcOffset();
                }
            }
            function ar(e) {
                return this.utcOffset(0, e);
            }
            function sr(e) {
                if (this._isUTC) {
                    this.utcOffset(0, e);
                    this._isUTC = false;
                    if (e) {
                        this.subtract(nr(this), "m");
                    }
                }
                return this;
            }
            function or() {
                if (this._tzm != null) {
                    this.utcOffset(this._tzm);
                } else if (typeof this._i === "string") {
                    var e = er(Ce, this._i);
                    if (e != null) {
                        this.utcOffset(e);
                    } else {
                        this.utcOffset(0, true);
                    }
                }
                return this;
            }
            function dr(e) {
                if (!this.isValid()) {
                    return false;
                }
                e = e ? In(e).utcOffset() : 0;
                return (this.utcOffset() - e) % 60 === 0;
            }
            function ur() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
            }
            function lr() {
                if (!M(this._isDSTShifted)) {
                    return this._isDSTShifted;
                }
                var e = {};
                b(e, this);
                e = Nn(e);
                if (e._a) {
                    var t = e._isUTC ? m(e._a) : In(e._a);
                    this._isDSTShifted = this.isValid() && x(e._a, t.toArray()) > 0;
                } else {
                    this._isDSTShifted = false;
                }
                return this._isDSTShifted;
            }
            function fr() {
                return this.isValid() ? !this._isUTC : false;
            }
            function cr() {
                return this.isValid() ? this._isUTC : false;
            }
            function mr() {
                return this.isValid() ? this._isUTC && this._offset === 0 : false;
            }
            var _r = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
            var hr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            function pr(e, t) {
                var n = e, r = null, i, a, s;
                if (Zn(e)) {
                    n = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    };
                } else if (d(e)) {
                    n = {};
                    if (t) {
                        n[t] = e;
                    } else {
                        n.milliseconds = e;
                    }
                } else if (!!(r = _r.exec(e))) {
                    i = r[1] === "-" ? -1 : 1;
                    n = {
                        y: 0,
                        d: T(r[Ue]) * i,
                        h: T(r[Ve]) * i,
                        m: T(r[Ge]) * i,
                        s: T(r[Ze]) * i,
                        ms: T(Kn(r[Ke] * 1e3)) * i
                    };
                } else if (!!(r = hr.exec(e))) {
                    i = r[1] === "-" ? -1 : 1;
                    n = {
                        y: yr(r[2], i),
                        M: yr(r[3], i),
                        w: yr(r[4], i),
                        d: yr(r[5], i),
                        h: yr(r[6], i),
                        m: yr(r[7], i),
                        s: yr(r[8], i)
                    };
                } else if (n == null) {
                    n = {};
                } else if (typeof n === "object" && ("from" in n || "to" in n)) {
                    s = vr(In(n.from), In(n.to));
                    n = {};
                    n.ms = s.milliseconds;
                    n.M = s.months;
                }
                a = new Gn(n);
                if (Zn(e) && f(e, "_locale")) {
                    a._locale = e._locale;
                }
                return a;
            }
            pr.fn = Gn.prototype;
            function yr(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t;
            }
            function gr(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                n.months = t.month() - e.month() + (t.year() - e.year()) * 12;
                if (e.clone().add(n.months, "M").isAfter(t)) {
                    --n.months;
                }
                n.milliseconds = +t - +e.clone().add(n.months, "M");
                return n;
            }
            function vr(e, t) {
                var n;
                if (!(e.isValid() && t.isValid())) {
                    return {
                        milliseconds: 0,
                        months: 0
                    };
                }
                t = tr(t, e);
                if (e.isBefore(t)) {
                    n = gr(e, t);
                } else {
                    n = gr(t, e);
                    n.milliseconds = -n.milliseconds;
                    n.months = -n.months;
                }
                return n;
            }
            function Mr(e, t) {
                return function(n, r) {
                    var i, a;
                    if (r !== null && !isNaN(+r)) {
                        C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                        a = n;
                        n = r;
                        r = a;
                    }
                    n = typeof n === "string" ? +n : n;
                    i = pr(n, r);
                    Lr(this, i, e);
                    return this;
                };
            }
            function Lr(e, t, n, i) {
                var a = t._milliseconds, s = Kn(t._days), o = Kn(t._months);
                if (!e.isValid()) {
                    return;
                }
                i = i == null ? true : i;
                if (a) {
                    e._d.setTime(e._d.valueOf() + a * n);
                }
                if (s) {
                    se(e, "Date", ae(e, "Date") + s * n);
                }
                if (o) {
                    lt(e, ae(e, "Month") + o * n);
                }
                if (i) {
                    r.updateOffset(e, s || o);
                }
            }
            var br = Mr(1, "add");
            var wr = Mr(-1, "subtract");
            function Yr(e, t) {
                var n = e.diff(t, "days", true);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
            }
            function kr(e, t) {
                var n = e || In(), i = tr(n, this).startOf("day"), a = r.calendarFormat(this, i) || "sameElse";
                var s = t && (P(t[a]) ? t[a].call(this, n) : t[a]);
                return this.format(s || this.localeData().calendar(a, this, In(n)));
            }
            function Dr() {
                return new Y(this);
            }
            function Tr(e, t) {
                var n = k(e) ? e : In(e);
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = Q(!M(t) ? t : "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() > n.valueOf();
                } else {
                    return n.valueOf() < this.clone().startOf(t).valueOf();
                }
            }
            function xr(e, t) {
                var n = k(e) ? e : In(e);
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = Q(!M(t) ? t : "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() < n.valueOf();
                } else {
                    return this.clone().endOf(t).valueOf() < n.valueOf();
                }
            }
            function Sr(e, t, n, r) {
                r = r || "()";
                return (r[0] === "(" ? this.isAfter(e, n) : !this.isBefore(e, n)) && (r[1] === ")" ? this.isBefore(t, n) : !this.isAfter(t, n));
            }
            function jr(e, t) {
                var n = k(e) ? e : In(e), r;
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = Q(t || "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() === n.valueOf();
                } else {
                    r = n.valueOf();
                    return this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf();
                }
            }
            function Hr(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t);
            }
            function Cr(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t);
            }
            function Pr(e, t, n) {
                var r, i, a, s;
                if (!this.isValid()) {
                    return NaN;
                }
                r = tr(e, this);
                if (!r.isValid()) {
                    return NaN;
                }
                i = (r.utcOffset() - this.utcOffset()) * 6e4;
                t = Q(t);
                if (t === "year" || t === "month" || t === "quarter") {
                    s = Er(this, r);
                    if (t === "quarter") {
                        s = s / 3;
                    } else if (t === "year") {
                        s = s / 12;
                    }
                } else {
                    a = this - r;
                    s = t === "second" ? a / 1e3 : t === "minute" ? a / 6e4 : t === "hour" ? a / 36e5 : t === "day" ? (a - i) / 864e5 : t === "week" ? (a - i) / 6048e5 : a;
                }
                return n ? s : D(s);
            }
            function Er(e, t) {
                var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), i, a;
                if (t - r < 0) {
                    i = e.clone().add(n - 1, "months");
                    a = (t - r) / (r - i);
                } else {
                    i = e.clone().add(n + 1, "months");
                    a = (t - r) / (i - r);
                }
                return -(n + a) || 0;
            }
            r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            function Or() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }
            function Ar() {
                var e = this.clone().utc();
                if (0 < e.year() && e.year() <= 9999) {
                    if (P(Date.prototype.toISOString)) {
                        return this.toDate().toISOString();
                    } else {
                        return ye(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                    }
                } else {
                    return ye(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                }
            }
            function Wr() {
                if (!this.isValid()) {
                    return "moment.invalid(/* " + this._i + " */)";
                }
                var e = "moment";
                var t = "";
                if (!this.isLocal()) {
                    e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
                    t = "Z";
                }
                var n = "[" + e + '("]';
                var r = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                var i = "-MM-DD[T]HH:mm:ss.SSS";
                var a = t + '[")]';
                return this.format(n + r + i + a);
            }
            function Fr(e) {
                if (!e) {
                    e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat;
                }
                var t = ye(this, e);
                return this.localeData().postformat(t);
            }
            function Nr(e, t) {
                if (this.isValid() && (k(e) && e.isValid() || In(e).isValid())) {
                    return pr({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t);
                } else {
                    return this.localeData().invalidDate();
                }
            }
            function zr(e) {
                return this.from(In(), e);
            }
            function $r(e, t) {
                if (this.isValid() && (k(e) && e.isValid() || In(e).isValid())) {
                    return pr({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t);
                } else {
                    return this.localeData().invalidDate();
                }
            }
            function Ir(e) {
                return this.to(In(), e);
            }
            function Rr(e) {
                var t;
                if (e === undefined) {
                    return this._locale._abbr;
                } else {
                    t = vn(e);
                    if (t != null) {
                        this._locale = t;
                    }
                    return this;
                }
            }
            var qr = j("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                if (e === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(e);
                }
            });
            function Jr() {
                return this._locale;
            }
            function Br(e) {
                e = Q(e);
                switch (e) {
                  case "year":
                    this.month(0);

                  case "quarter":
                  case "month":
                    this.date(1);

                  case "week":
                  case "isoWeek":
                  case "day":
                  case "date":
                    this.hours(0);

                  case "hour":
                    this.minutes(0);

                  case "minute":
                    this.seconds(0);

                  case "second":
                    this.milliseconds(0);
                }
                if (e === "week") {
                    this.weekday(0);
                }
                if (e === "isoWeek") {
                    this.isoWeekday(1);
                }
                if (e === "quarter") {
                    this.month(Math.floor(this.month() / 3) * 3);
                }
                return this;
            }
            function Ur(e) {
                e = Q(e);
                if (e === undefined || e === "millisecond") {
                    return this;
                }
                if (e === "date") {
                    e = "day";
                }
                return this.startOf(e).add(1, e === "isoWeek" ? "week" : e).subtract(1, "ms");
            }
            function Vr() {
                return this._d.valueOf() - (this._offset || 0) * 6e4;
            }
            function Gr() {
                return Math.floor(this.valueOf() / 1e3);
            }
            function Zr() {
                return new Date(this.valueOf());
            }
            function Kr() {
                var e = this;
                return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
            }
            function Xr() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                };
            }
            function Qr() {
                return this.isValid() ? this.toISOString() : null;
            }
            function ei() {
                return g(this);
            }
            function ti() {
                return c({}, h(this));
            }
            function ni() {
                return h(this).overflow;
            }
            function ri() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                };
            }
            _e(0, [ "gg", 2 ], 0, function() {
                return this.weekYear() % 100;
            });
            _e(0, [ "GG", 2 ], 0, function() {
                return this.isoWeekYear() % 100;
            });
            function ii(e, t) {
                _e(0, [ e, e.length ], 0, t);
            }
            ii("gggg", "weekYear");
            ii("ggggg", "weekYear");
            ii("GGGG", "isoWeekYear");
            ii("GGGGG", "isoWeekYear");
            X("weekYear", "gg");
            X("isoWeekYear", "GG");
            ne("weekYear", 1);
            ne("isoWeekYear", 1);
            We("G", He);
            We("g", He);
            We("GG", Ye, Me);
            We("gg", Ye, Me);
            We("GGGG", xe, be);
            We("gggg", xe, be);
            We("GGGGG", Se, we);
            We("ggggg", Se, we);
            Re([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, r) {
                t[r.substr(0, 2)] = T(e);
            });
            Re([ "gg", "GG" ], function(e, t, n, i) {
                t[i] = r.parseTwoDigitYear(e);
            });
            function ai(e) {
                return ui.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
            }
            function si(e) {
                return ui.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }
            function oi() {
                return Tt(this.year(), 1, 4);
            }
            function di() {
                var e = this.localeData()._week;
                return Tt(this.year(), e.dow, e.doy);
            }
            function ui(e, t, n, r, i) {
                var a;
                if (e == null) {
                    return Dt(this, r, i).year;
                } else {
                    a = Tt(e, r, i);
                    if (t > a) {
                        t = a;
                    }
                    return li.call(this, e, t, n, r, i);
                }
            }
            function li(e, t, n, r, i) {
                var a = kt(e, t, n, r, i), s = wt(a.year, 0, a.dayOfYear);
                this.year(s.getUTCFullYear());
                this.month(s.getUTCMonth());
                this.date(s.getUTCDate());
                return this;
            }
            _e("Q", 0, "Qo", "quarter");
            X("quarter", "Q");
            ne("quarter", 7);
            We("Q", ve);
            Ie("Q", function(e, t) {
                t[Be] = (T(e) - 1) * 3;
            });
            function fi(e) {
                return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
            }
            _e("D", [ "DD", 2 ], "Do", "date");
            X("date", "D");
            ne("date", 9);
            We("D", Ye);
            We("DD", Ye, Me);
            We("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient;
            });
            Ie([ "D", "DD" ], Ue);
            Ie("Do", function(e, t) {
                t[Ue] = T(e.match(Ye)[0], 10);
            });
            var ci = ie("Date", true);
            _e("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
            X("dayOfYear", "DDD");
            ne("dayOfYear", 4);
            We("DDD", Te);
            We("DDDD", Le);
            Ie([ "DDD", "DDDD" ], function(e, t, n) {
                n._dayOfYear = T(e);
            });
            function mi(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return e == null ? t : this.add(e - t, "d");
            }
            _e("m", [ "mm", 2 ], 0, "minute");
            X("minute", "m");
            ne("minute", 14);
            We("m", Ye);
            We("mm", Ye, Me);
            Ie([ "m", "mm" ], Ge);
            var _i = ie("Minutes", false);
            _e("s", [ "ss", 2 ], 0, "second");
            X("second", "s");
            ne("second", 15);
            We("s", Ye);
            We("ss", Ye, Me);
            Ie([ "s", "ss" ], Ze);
            var hi = ie("Seconds", false);
            _e("S", 0, 0, function() {
                return ~~(this.millisecond() / 100);
            });
            _e(0, [ "SS", 2 ], 0, function() {
                return ~~(this.millisecond() / 10);
            });
            _e(0, [ "SSS", 3 ], 0, "millisecond");
            _e(0, [ "SSSS", 4 ], 0, function() {
                return this.millisecond() * 10;
            });
            _e(0, [ "SSSSS", 5 ], 0, function() {
                return this.millisecond() * 100;
            });
            _e(0, [ "SSSSSS", 6 ], 0, function() {
                return this.millisecond() * 1e3;
            });
            _e(0, [ "SSSSSSS", 7 ], 0, function() {
                return this.millisecond() * 1e4;
            });
            _e(0, [ "SSSSSSSS", 8 ], 0, function() {
                return this.millisecond() * 1e5;
            });
            _e(0, [ "SSSSSSSSS", 9 ], 0, function() {
                return this.millisecond() * 1e6;
            });
            X("millisecond", "ms");
            ne("millisecond", 16);
            We("S", Te, ve);
            We("SS", Te, Me);
            We("SSS", Te, Le);
            var pi;
            for (pi = "SSSS"; pi.length <= 9; pi += "S") {
                We(pi, je);
            }
            function yi(e, t) {
                t[Ke] = T(("0." + e) * 1e3);
            }
            for (pi = "S"; pi.length <= 9; pi += "S") {
                Ie(pi, yi);
            }
            var gi = ie("Milliseconds", false);
            _e("z", 0, 0, "zoneAbbr");
            _e("zz", 0, 0, "zoneName");
            function vi() {
                return this._isUTC ? "UTC" : "";
            }
            function Mi() {
                return this._isUTC ? "Coordinated Universal Time" : "";
            }
            var Li = Y.prototype;
            Li.add = br;
            Li.calendar = kr;
            Li.clone = Dr;
            Li.diff = Pr;
            Li.endOf = Ur;
            Li.format = Fr;
            Li.from = Nr;
            Li.fromNow = zr;
            Li.to = $r;
            Li.toNow = Ir;
            Li.get = oe;
            Li.invalidAt = ni;
            Li.isAfter = Tr;
            Li.isBefore = xr;
            Li.isBetween = Sr;
            Li.isSame = jr;
            Li.isSameOrAfter = Hr;
            Li.isSameOrBefore = Cr;
            Li.isValid = ei;
            Li.lang = qr;
            Li.locale = Rr;
            Li.localeData = Jr;
            Li.max = qn;
            Li.min = Rn;
            Li.parsingFlags = ti;
            Li.set = de;
            Li.startOf = Br;
            Li.subtract = wr;
            Li.toArray = Kr;
            Li.toObject = Xr;
            Li.toDate = Zr;
            Li.toISOString = Ar;
            Li.inspect = Wr;
            Li.toJSON = Qr;
            Li.toString = Or;
            Li.unix = Gr;
            Li.valueOf = Vr;
            Li.creationData = ri;
            Li.year = Mt;
            Li.isLeapYear = Lt;
            Li.weekYear = ai;
            Li.isoWeekYear = si;
            Li.quarter = Li.quarters = fi;
            Li.month = ft;
            Li.daysInMonth = ct;
            Li.week = Li.weeks = Ct;
            Li.isoWeek = Li.isoWeeks = Pt;
            Li.weeksInYear = di;
            Li.isoWeeksInYear = oi;
            Li.date = ci;
            Li.day = Li.days = qt;
            Li.weekday = Jt;
            Li.isoWeekday = Bt;
            Li.dayOfYear = mi;
            Li.hour = Li.hours = dn;
            Li.minute = Li.minutes = _i;
            Li.second = Li.seconds = hi;
            Li.millisecond = Li.milliseconds = gi;
            Li.utcOffset = rr;
            Li.utc = ar;
            Li.local = sr;
            Li.parseZone = or;
            Li.hasAlignedHourOffset = dr;
            Li.isDST = ur;
            Li.isLocal = fr;
            Li.isUtcOffset = cr;
            Li.isUtc = mr;
            Li.isUTC = mr;
            Li.zoneAbbr = vi;
            Li.zoneName = Mi;
            Li.dates = j("dates accessor is deprecated. Use date instead.", ci);
            Li.months = j("months accessor is deprecated. Use month instead", ft);
            Li.years = j("years accessor is deprecated. Use year instead", Mt);
            Li.zone = j("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", ir);
            Li.isDSTShifted = j("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", lr);
            function bi(e) {
                return In(e * 1e3);
            }
            function wi() {
                return In.apply(null, arguments).parseZone();
            }
            function Yi(e) {
                return e;
            }
            var ki = A.prototype;
            ki.calendar = z;
            ki.longDateFormat = I;
            ki.invalidDate = q;
            ki.ordinal = U;
            ki.preparse = Yi;
            ki.postformat = Yi;
            ki.relativeTime = G;
            ki.pastFuture = Z;
            ki.set = E;
            ki.months = at;
            ki.monthsShort = ot;
            ki.monthsParse = ut;
            ki.monthsRegex = pt;
            ki.monthsShortRegex = _t;
            ki.week = xt;
            ki.firstDayOfYear = Ht;
            ki.firstDayOfWeek = jt;
            ki.weekdays = Wt;
            ki.weekdaysMin = $t;
            ki.weekdaysShort = Nt;
            ki.weekdaysParse = Rt;
            ki.weekdaysRegex = Vt;
            ki.weekdaysShortRegex = Zt;
            ki.weekdaysMinRegex = Xt;
            ki.isPM = an;
            ki.meridiem = on;
            function Di(e, t, n, r) {
                var i = vn();
                var a = m().set(r, t);
                return i[n](a, e);
            }
            function Ti(e, t, n) {
                if (d(e)) {
                    t = e;
                    e = undefined;
                }
                e = e || "";
                if (t != null) {
                    return Di(e, t, n, "month");
                }
                var r;
                var i = [];
                for (r = 0; r < 12; r++) {
                    i[r] = Di(e, r, n, "month");
                }
                return i;
            }
            function xi(e, t, n, r) {
                if (typeof e === "boolean") {
                    if (d(t)) {
                        n = t;
                        t = undefined;
                    }
                    t = t || "";
                } else {
                    t = e;
                    n = t;
                    e = false;
                    if (d(t)) {
                        n = t;
                        t = undefined;
                    }
                    t = t || "";
                }
                var i = vn(), a = e ? i._week.dow : 0;
                if (n != null) {
                    return Di(t, (n + a) % 7, r, "day");
                }
                var s;
                var o = [];
                for (s = 0; s < 7; s++) {
                    o[s] = Di(t, (s + a) % 7, r, "day");
                }
                return o;
            }
            function Si(e, t) {
                return Ti(e, t, "months");
            }
            function ji(e, t) {
                return Ti(e, t, "monthsShort");
            }
            function Hi(e, t, n) {
                return xi(e, t, n, "weekdays");
            }
            function Ci(e, t, n) {
                return xi(e, t, n, "weekdaysShort");
            }
            function Pi(e, t, n) {
                return xi(e, t, n, "weekdaysMin");
            }
            pn("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10, n = T(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n;
                }
            });
            r.lang = j("moment.lang is deprecated. Use moment.locale instead.", pn);
            r.langData = j("moment.langData is deprecated. Use moment.localeData instead.", vn);
            var Ei = Math.abs;
            function Oi() {
                var e = this._data;
                this._milliseconds = Ei(this._milliseconds);
                this._days = Ei(this._days);
                this._months = Ei(this._months);
                e.milliseconds = Ei(e.milliseconds);
                e.seconds = Ei(e.seconds);
                e.minutes = Ei(e.minutes);
                e.hours = Ei(e.hours);
                e.months = Ei(e.months);
                e.years = Ei(e.years);
                return this;
            }
            function Ai(e, t, n, r) {
                var i = pr(t, n);
                e._milliseconds += r * i._milliseconds;
                e._days += r * i._days;
                e._months += r * i._months;
                return e._bubble();
            }
            function Wi(e, t) {
                return Ai(this, e, t, 1);
            }
            function Fi(e, t) {
                return Ai(this, e, t, -1);
            }
            function Ni(e) {
                if (e < 0) {
                    return Math.floor(e);
                } else {
                    return Math.ceil(e);
                }
            }
            function zi() {
                var e = this._milliseconds;
                var t = this._days;
                var n = this._months;
                var r = this._data;
                var i, a, s, o, d;
                if (!(e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0)) {
                    e += Ni(Ii(n) + t) * 864e5;
                    t = 0;
                    n = 0;
                }
                r.milliseconds = e % 1e3;
                i = D(e / 1e3);
                r.seconds = i % 60;
                a = D(i / 60);
                r.minutes = a % 60;
                s = D(a / 60);
                r.hours = s % 24;
                t += D(s / 24);
                d = D($i(t));
                n += d;
                t -= Ni(Ii(d));
                o = D(n / 12);
                n %= 12;
                r.days = t;
                r.months = n;
                r.years = o;
                return this;
            }
            function $i(e) {
                return e * 4800 / 146097;
            }
            function Ii(e) {
                return e * 146097 / 4800;
            }
            function Ri(e) {
                var t;
                var n;
                var r = this._milliseconds;
                e = Q(e);
                if (e === "month" || e === "year") {
                    t = this._days + r / 864e5;
                    n = this._months + $i(t);
                    return e === "month" ? n : n / 12;
                } else {
                    t = this._days + Math.round(Ii(this._months));
                    switch (e) {
                      case "week":
                        return t / 7 + r / 6048e5;

                      case "day":
                        return t + r / 864e5;

                      case "hour":
                        return t * 24 + r / 36e5;

                      case "minute":
                        return t * 1440 + r / 6e4;

                      case "second":
                        return t * 86400 + r / 1e3;

                      case "millisecond":
                        return Math.floor(t * 864e5) + r;

                      default:
                        throw new Error("Unknown unit " + e);
                    }
                }
            }
            function qi() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + T(this._months / 12) * 31536e6;
            }
            function Ji(e) {
                return function() {
                    return this.as(e);
                };
            }
            var Bi = Ji("ms");
            var Ui = Ji("s");
            var Vi = Ji("m");
            var Gi = Ji("h");
            var Zi = Ji("d");
            var Ki = Ji("w");
            var Xi = Ji("M");
            var Qi = Ji("y");
            function ea(e) {
                e = Q(e);
                return this[e + "s"]();
            }
            function ta(e) {
                return function() {
                    return this._data[e];
                };
            }
            var na = ta("milliseconds");
            var ra = ta("seconds");
            var ia = ta("minutes");
            var aa = ta("hours");
            var sa = ta("days");
            var oa = ta("months");
            var da = ta("years");
            function ua() {
                return D(this.days() / 7);
            }
            var la = Math.round;
            var fa = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };
            function ca(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r);
            }
            function ma(e, t, n) {
                var r = pr(e).abs();
                var i = la(r.as("s"));
                var a = la(r.as("m"));
                var s = la(r.as("h"));
                var o = la(r.as("d"));
                var d = la(r.as("M"));
                var u = la(r.as("y"));
                var l = i < fa.s && [ "s", i ] || a <= 1 && [ "m" ] || a < fa.m && [ "mm", a ] || s <= 1 && [ "h" ] || s < fa.h && [ "hh", s ] || o <= 1 && [ "d" ] || o < fa.d && [ "dd", o ] || d <= 1 && [ "M" ] || d < fa.M && [ "MM", d ] || u <= 1 && [ "y" ] || [ "yy", u ];
                l[2] = t;
                l[3] = +e > 0;
                l[4] = n;
                return ca.apply(null, l);
            }
            function _a(e) {
                if (e === undefined) {
                    return la;
                }
                if (typeof e === "function") {
                    la = e;
                    return true;
                }
                return false;
            }
            function ha(e, t) {
                if (fa[e] === undefined) {
                    return false;
                }
                if (t === undefined) {
                    return fa[e];
                }
                fa[e] = t;
                return true;
            }
            function pa(e) {
                var t = this.localeData();
                var n = ma(this, !e, t);
                if (e) {
                    n = t.pastFuture(+this, n);
                }
                return t.postformat(n);
            }
            var ya = Math.abs;
            function ga() {
                var e = ya(this._milliseconds) / 1e3;
                var t = ya(this._days);
                var n = ya(this._months);
                var r, i, a;
                r = D(e / 60);
                i = D(r / 60);
                e %= 60;
                r %= 60;
                a = D(n / 12);
                n %= 12;
                var s = a;
                var o = n;
                var d = t;
                var u = i;
                var l = r;
                var f = e;
                var c = this.asSeconds();
                if (!c) {
                    return "P0D";
                }
                return (c < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (u || l || f ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (f ? f + "S" : "");
            }
            var va = Gn.prototype;
            va.abs = Oi;
            va.add = Wi;
            va.subtract = Fi;
            va.as = Ri;
            va.asMilliseconds = Bi;
            va.asSeconds = Ui;
            va.asMinutes = Vi;
            va.asHours = Gi;
            va.asDays = Zi;
            va.asWeeks = Ki;
            va.asMonths = Xi;
            va.asYears = Qi;
            va.valueOf = qi;
            va._bubble = zi;
            va.get = ea;
            va.milliseconds = na;
            va.seconds = ra;
            va.minutes = ia;
            va.hours = aa;
            va.days = sa;
            va.weeks = ua;
            va.months = oa;
            va.years = da;
            va.humanize = pa;
            va.toISOString = ga;
            va.toString = ga;
            va.toJSON = ga;
            va.locale = Rr;
            va.localeData = Jr;
            va.toIsoString = j("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ga);
            va.lang = qr;
            _e("X", 0, 0, "unix");
            _e("x", 0, 0, "valueOf");
            We("x", He);
            We("X", Ee);
            Ie("X", function(e, t, n) {
                n._d = new Date(parseFloat(e, 10) * 1e3);
            });
            Ie("x", function(e, t, n) {
                n._d = new Date(T(e));
            });
            r.version = "2.17.1";
            i(In);
            r.fn = Li;
            r.min = Bn;
            r.max = Un;
            r.now = Vn;
            r.utc = m;
            r.unix = bi;
            r.months = Si;
            r.isDate = u;
            r.locale = pn;
            r.invalid = v;
            r.duration = pr;
            r.isMoment = k;
            r.weekdays = Hi;
            r.parseZone = wi;
            r.localeData = vn;
            r.isDuration = Zn;
            r.monthsShort = ji;
            r.weekdaysMin = Pi;
            r.defineLocale = yn;
            r.updateLocale = gn;
            r.locales = Mn;
            r.weekdaysShort = Ci;
            r.normalizeUnits = Q;
            r.relativeTimeRounding = _a;
            r.relativeTimeThreshold = ha;
            r.calendarFormat = Yr;
            r.prototype = Li;
            return r;
        });
    }).call(t, n(16)(e));
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            e.deprecate = function() {};
            e.paths = [];
            e.children = [];
            e.webpackPolyfill = 1;
        }
        return e;
    };
}, function(e, t, n) {
    var r = {
        "./af": 18,
        "./af.js": 18,
        "./ar": 19,
        "./ar-dz": 20,
        "./ar-dz.js": 20,
        "./ar-ly": 21,
        "./ar-ly.js": 21,
        "./ar-ma": 22,
        "./ar-ma.js": 22,
        "./ar-sa": 23,
        "./ar-sa.js": 23,
        "./ar-tn": 24,
        "./ar-tn.js": 24,
        "./ar.js": 19,
        "./az": 25,
        "./az.js": 25,
        "./be": 26,
        "./be.js": 26,
        "./bg": 27,
        "./bg.js": 27,
        "./bn": 28,
        "./bn.js": 28,
        "./bo": 29,
        "./bo.js": 29,
        "./br": 30,
        "./br.js": 30,
        "./bs": 31,
        "./bs.js": 31,
        "./ca": 32,
        "./ca.js": 32,
        "./cs": 33,
        "./cs.js": 33,
        "./cv": 34,
        "./cv.js": 34,
        "./cy": 35,
        "./cy.js": 35,
        "./da": 36,
        "./da.js": 36,
        "./de": 37,
        "./de-at": 38,
        "./de-at.js": 38,
        "./de.js": 37,
        "./dv": 39,
        "./dv.js": 39,
        "./el": 40,
        "./el.js": 40,
        "./en-au": 41,
        "./en-au.js": 41,
        "./en-ca": 42,
        "./en-ca.js": 42,
        "./en-gb": 43,
        "./en-gb.js": 43,
        "./en-ie": 44,
        "./en-ie.js": 44,
        "./en-nz": 45,
        "./en-nz.js": 45,
        "./eo": 46,
        "./eo.js": 46,
        "./es": 47,
        "./es-do": 48,
        "./es-do.js": 48,
        "./es.js": 47,
        "./et": 49,
        "./et.js": 49,
        "./eu": 50,
        "./eu.js": 50,
        "./fa": 51,
        "./fa.js": 51,
        "./fi": 52,
        "./fi.js": 52,
        "./fo": 53,
        "./fo.js": 53,
        "./fr": 54,
        "./fr-ca": 55,
        "./fr-ca.js": 55,
        "./fr-ch": 56,
        "./fr-ch.js": 56,
        "./fr.js": 54,
        "./fy": 57,
        "./fy.js": 57,
        "./gd": 58,
        "./gd.js": 58,
        "./gl": 59,
        "./gl.js": 59,
        "./he": 60,
        "./he.js": 60,
        "./hi": 61,
        "./hi.js": 61,
        "./hr": 62,
        "./hr.js": 62,
        "./hu": 63,
        "./hu.js": 63,
        "./hy-am": 64,
        "./hy-am.js": 64,
        "./id": 65,
        "./id.js": 65,
        "./is": 66,
        "./is.js": 66,
        "./it": 67,
        "./it.js": 67,
        "./ja": 68,
        "./ja.js": 68,
        "./jv": 69,
        "./jv.js": 69,
        "./ka": 70,
        "./ka.js": 70,
        "./kk": 71,
        "./kk.js": 71,
        "./km": 72,
        "./km.js": 72,
        "./ko": 73,
        "./ko.js": 73,
        "./ky": 74,
        "./ky.js": 74,
        "./lb": 75,
        "./lb.js": 75,
        "./lo": 76,
        "./lo.js": 76,
        "./lt": 77,
        "./lt.js": 77,
        "./lv": 78,
        "./lv.js": 78,
        "./me": 79,
        "./me.js": 79,
        "./mi": 80,
        "./mi.js": 80,
        "./mk": 81,
        "./mk.js": 81,
        "./ml": 82,
        "./ml.js": 82,
        "./mr": 83,
        "./mr.js": 83,
        "./ms": 84,
        "./ms-my": 85,
        "./ms-my.js": 85,
        "./ms.js": 84,
        "./my": 86,
        "./my.js": 86,
        "./nb": 87,
        "./nb.js": 87,
        "./ne": 88,
        "./ne.js": 88,
        "./nl": 89,
        "./nl-be": 90,
        "./nl-be.js": 90,
        "./nl.js": 89,
        "./nn": 91,
        "./nn.js": 91,
        "./pa-in": 92,
        "./pa-in.js": 92,
        "./pl": 93,
        "./pl.js": 93,
        "./pt": 94,
        "./pt-br": 95,
        "./pt-br.js": 95,
        "./pt.js": 94,
        "./ro": 96,
        "./ro.js": 96,
        "./ru": 97,
        "./ru.js": 97,
        "./se": 98,
        "./se.js": 98,
        "./si": 99,
        "./si.js": 99,
        "./sk": 100,
        "./sk.js": 100,
        "./sl": 101,
        "./sl.js": 101,
        "./sq": 102,
        "./sq.js": 102,
        "./sr": 103,
        "./sr-cyrl": 104,
        "./sr-cyrl.js": 104,
        "./sr.js": 103,
        "./ss": 105,
        "./ss.js": 105,
        "./sv": 106,
        "./sv.js": 106,
        "./sw": 107,
        "./sw.js": 107,
        "./ta": 108,
        "./ta.js": 108,
        "./te": 109,
        "./te.js": 109,
        "./tet": 110,
        "./tet.js": 110,
        "./th": 111,
        "./th.js": 111,
        "./tl-ph": 112,
        "./tl-ph.js": 112,
        "./tlh": 113,
        "./tlh.js": 113,
        "./tr": 114,
        "./tr.js": 114,
        "./tzl": 115,
        "./tzl.js": 115,
        "./tzm": 116,
        "./tzm-latn": 117,
        "./tzm-latn.js": 117,
        "./tzm.js": 116,
        "./uk": 118,
        "./uk.js": 118,
        "./uz": 119,
        "./uz.js": 119,
        "./vi": 120,
        "./vi.js": 120,
        "./x-pseudo": 121,
        "./x-pseudo.js": 121,
        "./yo": 122,
        "./yo.js": 122,
        "./zh-cn": 123,
        "./zh-cn.js": 123,
        "./zh-hk": 124,
        "./zh-hk.js": 124,
        "./zh-tw": 125,
        "./zh-tw.js": 125
    };
    function i(e) {
        return n(a(e));
    }
    function a(e) {
        return r[e] || function() {
            throw new Error("Cannot find module '" + e + "'.");
        }();
    }
    i.keys = function e() {
        return Object.keys(r);
    };
    i.resolve = a;
    e.exports = i;
    i.id = 17;
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return n ? "vm" : "VM";
                } else {
                    return n ? "nm" : "NM";
                }
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
            "0": "٠"
        };
        var n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        var r = function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        };
        var i = {
            s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
            m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
            h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
            d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
            M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
            y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
        };
        var a = function(e) {
            return function(t, n, a, s) {
                var o = r(t), d = i[e][r(t)];
                if (o === 2) {
                    d = d[n ? 0 : 1];
                }
                return d.replace(/%d/i, t);
            };
        };
        var s = [ "كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر" ];
        var o = e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e;
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "ص";
                } else {
                    return "م";
                }
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            preparse: function(e) {
                return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e];
                }).replace(/،/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                }).replace(/,/g, "،");
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return o;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
        var n = function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        };
        var r = {
            s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
            m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
            h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
            d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
            M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
            y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
        };
        var i = function(e) {
            return function(t, i, a, s) {
                var o = n(t), d = r[e][n(t)];
                if (o === 2) {
                    d = d[i ? 0 : 1];
                }
                return d.replace(/%d/i, t);
            };
        };
        var a = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
        var s = e.defineLocale("ar-ly", {
            months: a,
            monthsShort: a,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e;
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "ص";
                } else {
                    return "م";
                }
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/\u200f/g, "").replace(/،/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                }).replace(/,/g, "،");
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return s;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
            "0": "٠"
        };
        var n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        var r = e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e;
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "ص";
                } else {
                    return "م";
                }
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e];
                }).replace(/،/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                }).replace(/,/g, "،");
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        var n = e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "gecə";
                } else if (e < 12) {
                    return "səhər";
                } else if (e < 17) {
                    return "gündüz";
                } else {
                    return "axşam";
                }
            },
            ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (e === 0) {
                    return e + "-ıncı";
                }
                var n = e % 10, r = e % 100 - n, i = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[i]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, r) {
            var i = {
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            if (r === "m") {
                return n ? "хвіліна" : "хвіліну";
            } else if (r === "h") {
                return n ? "гадзіна" : "гадзіну";
            } else {
                return e + " " + t(i[r], +e);
            }
        }
        var r = e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT";
                },
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                        return "[У мінулую] dddd [ў] LT";

                      case 1:
                      case 2:
                      case 4:
                        return "[У мінулы] dddd [ў] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "ночы";
                } else if (e < 12) {
                    return "раніцы";
                } else if (e < 17) {
                    return "дня";
                } else {
                    return "вечара";
                }
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                    return (e % 10 === 2 || e % 10 === 3) && (e % 100 !== 12 && e % 100 !== 13) ? e + "-і" : e + "-ы";

                  case "D":
                    return e + "-га";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                        return "[В изминалата] dddd [в] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[В изминалия] dddd [в] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10, n = e % 100;
                if (e === 0) {
                    return e + "-ев";
                } else if (n === 0) {
                    return e + "-ен";
                } else if (n > 10 && n < 20) {
                    return e + "-ти";
                } else if (t === 1) {
                    return e + "-ви";
                } else if (t === 2) {
                    return e + "-ри";
                } else if (t === 7 || t === 8) {
                    return e + "-ми";
                } else {
                    return e + "-ти";
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "৪",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯",
            "0": "০"
        };
        var n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
        var r = e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "রাত" && e >= 4 || t === "দুপুর" && e < 5 || t === "বিকাল") {
                    return e + 12;
                } else {
                    return e;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "রাত";
                } else if (e < 10) {
                    return "সকাল";
                } else if (e < 17) {
                    return "দুপুর";
                } else if (e < 20) {
                    return "বিকাল";
                } else {
                    return "রাত";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "༡",
            "2": "༢",
            "3": "༣",
            "4": "༤",
            "5": "༥",
            "6": "༦",
            "7": "༧",
            "8": "༨",
            "9": "༩",
            "0": "༠"
        };
        var n = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        };
        var r = e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "མཚན་མོ" && e >= 4 || t === "ཉིན་གུང" && e < 5 || t === "དགོང་དག") {
                    return e + 12;
                } else {
                    return e;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "མཚན་མོ";
                } else if (e < 10) {
                    return "ཞོགས་ཀས";
                } else if (e < 17) {
                    return "ཉིན་གུང";
                } else if (e < 20) {
                    return "དགོང་དག";
                } else {
                    return "མཚན་མོ";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var r = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return e + " " + i(r[n], e);
        }
        function n(e) {
            switch (r(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";

              default:
                return e + " vloaz";
            }
        }
        function r(e) {
            if (e > 9) {
                return r(e % 10);
            }
            return e;
        }
        function i(e, t) {
            if (t === 2) {
                return a(e);
            }
            return e;
        }
        function a(e) {
            var t = {
                m: "v",
                b: "v",
                d: "z"
            };
            if (t[e.charAt(0)] === undefined) {
                return e;
            }
            return t[e.charAt(0)] + e.substring(1);
        }
        var s = e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: n
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                var t = e === 1 ? "añ" : "vet";
                return e + t;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return s;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                if (e === 1) {
                    r += "minuta";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "minute";
                } else {
                    r += "minuta";
                }
                return r;

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                if (e === 1) {
                    r += "sat";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "sata";
                } else {
                    r += "sati";
                }
                return r;

              case "dd":
                if (e === 1) {
                    r += "dan";
                } else {
                    r += "dana";
                }
                return r;

              case "MM":
                if (e === 1) {
                    r += "mjesec";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "mjeseca";
                } else {
                    r += "mjeseci";
                }
                return r;

              case "yy":
                if (e === 1) {
                    r += "godina";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "godine";
                } else {
                    r += "godina";
                }
                return r;
            }
        }
        var n = e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                        return "[prošlu] dddd [u] LT";

                      case 6:
                        return "[prošle] [subote] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[prošli] dddd [u] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: true,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
                },
                nextDay: function() {
                    return "[demà a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
                },
                lastDay: function() {
                    return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = e === 1 ? "r" : e === 2 ? "n" : e === 3 ? "r" : e === 4 ? "t" : "è";
                if (t === "w" || t === "W") {
                    n = "a";
                }
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_");
        var n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        function r(e) {
            return e > 1 && e < 5 && ~~(e / 10) !== 1;
        }
        function i(e, t, n, i) {
            var a = e + " ";
            switch (n) {
              case "s":
                return t || i ? "pár sekund" : "pár sekundami";

              case "m":
                return t ? "minuta" : i ? "minutu" : "minutou";

              case "mm":
                if (t || i) {
                    return a + (r(e) ? "minuty" : "minut");
                } else {
                    return a + "minutami";
                }
                break;

              case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";

              case "hh":
                if (t || i) {
                    return a + (r(e) ? "hodiny" : "hodin");
                } else {
                    return a + "hodinami";
                }
                break;

              case "d":
                return t || i ? "den" : "dnem";

              case "dd":
                if (t || i) {
                    return a + (r(e) ? "dny" : "dní");
                } else {
                    return a + "dny";
                }
                break;

              case "M":
                return t || i ? "měsíc" : "měsícem";

              case "MM":
                if (t || i) {
                    return a + (r(e) ? "měsíce" : "měsíců");
                } else {
                    return a + "měsíci";
                }
                break;

              case "y":
                return t || i ? "rok" : "rokem";

              case "yy":
                if (t || i) {
                    return a + (r(e) ? "roky" : "let");
                } else {
                    return a + "lety";
                }
                break;
            }
        }
        var a = e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: function(e, t) {
                var n, r = [];
                for (n = 0; n < 12; n++) {
                    r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                }
                return r;
            }(t, n),
            shortMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) {
                    n[t] = new RegExp("^" + e[t] + "$", "i");
                }
                return n;
            }(n),
            longMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) {
                    n[t] = new RegExp("^" + e[t] + "$", "i");
                }
                return n;
            }(t),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v neděli v] LT";

                      case 1:
                      case 2:
                        return "[v] dddd [v] LT";

                      case 3:
                        return "[ve středu v] LT";

                      case 4:
                        return "[ve čtvrtek v] LT";

                      case 5:
                        return "[v pátek v] LT";

                      case 6:
                        return "[v sobotu v] LT";
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[minulou neděli v] LT";

                      case 1:
                      case 2:
                        return "[minulé] dddd [v] LT";

                      case 3:
                        return "[minulou středu v] LT";

                      case 4:
                      case 5:
                        return "[minulý] dddd [v] LT";

                      case 6:
                        return "[minulou sobotu v] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                    return e + t;
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e, n = "", r = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ];
                if (t > 20) {
                    if (t === 40 || t === 50 || t === 60 || t === 80 || t === 100) {
                        n = "fed";
                    } else {
                        n = "ain";
                    }
                } else if (t > 0) {
                    n = r[t];
                }
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, r) {
            var i = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? i[n][0] : i[n][1];
        }
        var n = e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: true,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, r) {
            var i = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? i[n][0] : i[n][1];
        }
        var n = e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: true,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = [ "ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު" ];
        var n = [ "އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު" ];
        var r = e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e;
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "މކ";
                } else {
                    return "މފ";
                }
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",");
            },
            postformat: function(e) {
                return e.replace(/,/g, "،");
            },
            week: {
                dow: 7,
                doy: 12
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e) {
            return e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
        }
        var n = e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                if (/D/.test(t.substring(0, t.indexOf("MMMM")))) {
                    return this._monthsGenitiveEl[e.month()];
                } else {
                    return this._monthsNominativeEl[e.month()];
                }
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                if (e > 11) {
                    return n ? "μμ" : "ΜΜ";
                } else {
                    return n ? "πμ" : "ΠΜ";
                }
            },
            isPM: function(e) {
                return (e + "").toLowerCase()[0] === "μ";
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 6:
                        return "[το προηγούμενο] dddd [{}] LT";

                      default:
                        return "[την προηγούμενη] dddd [{}] LT";
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, n) {
                var r = this._calendarEl[e], i = n && n.hours();
                if (t(r)) {
                    r = r.apply(n);
                }
                return r.replace("{}", i % 12 === 1 ? "στη" : "στις");
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return e.charAt(0).toLowerCase() === "p";
            },
            meridiem: function(e, t, n) {
                if (e > 11) {
                    return n ? "p.t.m." : "P.T.M.";
                } else {
                    return n ? "a.t.m." : "A.T.M.";
                }
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
        var n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        var r = e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                if (/-MMM-/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsParseExact: true,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                nextDay: function() {
                    return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                lastDay: function() {
                    return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
        var n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        var r = e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                if (/-MMM-/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsParseExact: true,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                nextDay: function() {
                    return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                lastDay: function() {
                    return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, r) {
            var i = {
                s: [ "mõne sekundi", "mõni sekund", "paar sekundit" ],
                m: [ "ühe minuti", "üks minut" ],
                mm: [ e + " minuti", e + " minutit" ],
                h: [ "ühe tunni", "tund aega", "üks tund" ],
                hh: [ e + " tunni", e + " tundi" ],
                d: [ "ühe päeva", "üks päev" ],
                M: [ "kuu aja", "kuu aega", "üks kuu" ],
                MM: [ e + " kuu", e + " kuud" ],
                y: [ "ühe aasta", "aasta", "üks aasta" ],
                yy: [ e + " aasta", e + " aastat" ]
            };
            if (t) {
                return i[n][2] ? i[n][2] : i[n][1];
            }
            return r ? i[n][0] : i[n][1];
        }
        var n = e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: true,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "۱",
            "2": "۲",
            "3": "۳",
            "4": "۴",
            "5": "۵",
            "6": "۶",
            "7": "۷",
            "8": "۸",
            "9": "۹",
            "0": "۰"
        };
        var n = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
        var r = e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "قبل از ظهر";
                } else {
                    return "بعد از ظهر";
                }
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, function(e) {
                    return n[e];
                }).replace(/،/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                }).replace(/,/g, "،");
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ");
        var n = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9] ];
        function r(e, t, n, r) {
            var a = "";
            switch (n) {
              case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";

              case "m":
                return r ? "minuutin" : "minuutti";

              case "mm":
                a = r ? "minuutin" : "minuuttia";
                break;

              case "h":
                return r ? "tunnin" : "tunti";

              case "hh":
                a = r ? "tunnin" : "tuntia";
                break;

              case "d":
                return r ? "päivän" : "päivä";

              case "dd":
                a = r ? "päivän" : "päivää";
                break;

              case "M":
                return r ? "kuukauden" : "kuukausi";

              case "MM":
                a = r ? "kuukauden" : "kuukautta";
                break;

              case "y":
                return r ? "vuoden" : "vuosi";

              case "yy":
                a = r ? "vuoden" : "vuotta";
                break;
            }
            a = i(e, r) + " " + a;
            return a;
        }
        function i(e, r) {
            return e < 10 ? r ? n[e] : t[e] : e;
        }
        var a = e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: true,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function(e) {
                return e + (e === 1 ? "er" : "");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: true,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e) {
                return e + (e === 1 ? "er" : "e");
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: true,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e) {
                return e + (e === 1 ? "er" : "e");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_");
        var n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        var r = e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, r) {
                if (/-MMM-/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsParseExact: true,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = [ "Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd" ];
        var n = [ "Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh" ];
        var r = [ "Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ];
        var i = [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ];
        var a = [ "Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa" ];
        var s = e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: true,
            weekdays: r,
            weekdaysShort: i,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            ordinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                var t = e === 1 ? "d" : e % 10 === 2 ? "na" : "mh";
                return e + t;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return s;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (this.hours() !== 1 ? "ás" : "á") + "] LT";
                },
                nextDay: function() {
                    return "[mañá " + (this.hours() !== 1 ? "ás" : "á") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [" + (this.hours() !== 1 ? "ás" : "a") + "] LT";
                },
                lastDay: function() {
                    return "[onte " + (this.hours() !== 1 ? "á" : "a") + "] LT";
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (this.hours() !== 1 ? "ás" : "a") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    if (e.indexOf("un") === 0) {
                        return "n" + e;
                    }
                    return "en " + e;
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    if (e === 2) {
                        return "שעתיים";
                    }
                    return e + " שעות";
                },
                d: "יום",
                dd: function(e) {
                    if (e === 2) {
                        return "יומיים";
                    }
                    return e + " ימים";
                },
                M: "חודש",
                MM: function(e) {
                    if (e === 2) {
                        return "חודשיים";
                    }
                    return e + " חודשים";
                },
                y: "שנה",
                yy: function(e) {
                    if (e === 2) {
                        return "שנתיים";
                    } else if (e % 10 === 0 && e !== 10) {
                        return e + " שנה";
                    }
                    return e + " שנים";
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 5) {
                    return "לפנות בוקר";
                } else if (e < 10) {
                    return "בבוקר";
                } else if (e < 12) {
                    return n ? 'לפנה"צ' : "לפני הצהריים";
                } else if (e < 18) {
                    return n ? 'אחה"צ' : "אחרי הצהריים";
                } else {
                    return "בערב";
                }
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        };
        var n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        var r = e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: true,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "रात") {
                    return e < 4 ? e : e + 12;
                } else if (t === "सुबह") {
                    return e;
                } else if (t === "दोपहर") {
                    return e >= 10 ? e : e + 12;
                } else if (t === "शाम") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "रात";
                } else if (e < 10) {
                    return "सुबह";
                } else if (e < 17) {
                    return "दोपहर";
                } else if (e < 20) {
                    return "शाम";
                } else {
                    return "रात";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                if (e === 1) {
                    r += "minuta";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "minute";
                } else {
                    r += "minuta";
                }
                return r;

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                if (e === 1) {
                    r += "sat";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "sata";
                } else {
                    r += "sati";
                }
                return r;

              case "dd":
                if (e === 1) {
                    r += "dan";
                } else {
                    r += "dana";
                }
                return r;

              case "MM":
                if (e === 1) {
                    r += "mjesec";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "mjeseca";
                } else {
                    r += "mjeseci";
                }
                return r;

              case "yy":
                if (e === 1) {
                    r += "godina";
                } else if (e === 2 || e === 3 || e === 4) {
                    r += "godine";
                } else {
                    r += "godina";
                }
                return r;
            }
        }
        var n = e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: true,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                        return "[prošlu] dddd [u] LT";

                      case 6:
                        return "[prošle] [subote] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[prošli] dddd [u] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        function n(e, t, n, r) {
            var i = e, a;
            switch (n) {
              case "s":
                return r || t ? "néhány másodperc" : "néhány másodperce";

              case "m":
                return "egy" + (r || t ? " perc" : " perce");

              case "mm":
                return i + (r || t ? " perc" : " perce");

              case "h":
                return "egy" + (r || t ? " óra" : " órája");

              case "hh":
                return i + (r || t ? " óra" : " órája");

              case "d":
                return "egy" + (r || t ? " nap" : " napja");

              case "dd":
                return i + (r || t ? " nap" : " napja");

              case "M":
                return "egy" + (r || t ? " hónap" : " hónapja");

              case "MM":
                return i + (r || t ? " hónap" : " hónapja");

              case "y":
                return "egy" + (r || t ? " év" : " éve");

              case "yy":
                return i + (r || t ? " év" : " éve");
            }
            return "";
        }
        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
        }
        var i = e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return e.charAt(1).toLowerCase() === "u";
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return n === true ? "de" : "DE";
                } else {
                    return n === true ? "du" : "DU";
                }
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return r.call(this, true);
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return r.call(this, false);
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT";
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e);
            },
            meridiem: function(e) {
                if (e < 4) {
                    return "գիշերվա";
                } else if (e < 12) {
                    return "առավոտվա";
                } else if (e < 17) {
                    return "ցերեկվա";
                } else {
                    return "երեկոյան";
                }
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "DDD":
                  case "w":
                  case "W":
                  case "DDDo":
                    if (e === 1) {
                        return e + "-ին";
                    }
                    return e + "-րդ";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "pagi") {
                    return e;
                } else if (t === "siang") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "sore" || t === "malam") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 11) {
                    return "pagi";
                } else if (e < 15) {
                    return "siang";
                } else if (e < 19) {
                    return "sore";
                } else {
                    return "malam";
                }
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e) {
            if (e % 100 === 11) {
                return true;
            } else if (e % 10 === 1) {
                return false;
            }
            return true;
        }
        function n(e, n, r, i) {
            var a = e + " ";
            switch (r) {
              case "s":
                return n || i ? "nokkrar sekúndur" : "nokkrum sekúndum";

              case "m":
                return n ? "mínúta" : "mínútu";

              case "mm":
                if (t(e)) {
                    return a + (n || i ? "mínútur" : "mínútum");
                } else if (n) {
                    return a + "mínúta";
                }
                return a + "mínútu";

              case "hh":
                if (t(e)) {
                    return a + (n || i ? "klukkustundir" : "klukkustundum");
                }
                return a + "klukkustund";

              case "d":
                if (n) {
                    return "dagur";
                }
                return i ? "dag" : "degi";

              case "dd":
                if (t(e)) {
                    if (n) {
                        return a + "dagar";
                    }
                    return a + (i ? "daga" : "dögum");
                } else if (n) {
                    return a + "dagur";
                }
                return a + (i ? "dag" : "degi");

              case "M":
                if (n) {
                    return "mánuður";
                }
                return i ? "mánuð" : "mánuði";

              case "MM":
                if (t(e)) {
                    if (n) {
                        return a + "mánuðir";
                    }
                    return a + (i ? "mánuði" : "mánuðum");
                } else if (n) {
                    return a + "mánuður";
                }
                return a + (i ? "mánuð" : "mánuði");

              case "y":
                return n || i ? "ár" : "ári";

              case "yy":
                if (t(e)) {
                    return a + (n || i ? "ár" : "árum");
                }
                return a + (n || i ? "ár" : "ári");
            }
        }
        var r = e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[la scorsa] dddd [alle] LT";

                      default:
                        return "[lo scorso] dddd [alle] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "Ah時m分s秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah時m分",
                LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return e === "午後";
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "午前";
                } else {
                    return "午後";
                }
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "日";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "enjing") {
                    return e;
                } else if (t === "siyang") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "sonten" || t === "ndalu") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 11) {
                    return "enjing";
                } else if (e < 15) {
                    return "siyang";
                } else if (e < 19) {
                    return "sonten";
                } else {
                    return "ndalu";
                }
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში";
                },
                past: function(e) {
                    if (/(წამი|წუთი|საათი|დღე|თვე)/.test(e)) {
                        return e.replace(/(ი|ე)$/, "ის წინ");
                    }
                    if (/წელი/.test(e)) {
                        return e.replace(/წელი$/, "წლის წინ");
                    }
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                if (e === 0) {
                    return e;
                }
                if (e === 1) {
                    return e + "-ლი";
                }
                if (e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0) {
                    return "მე-" + e;
                }
                return e + "-ე";
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        var n = e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                var n = e % 10, r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h시 m분",
                LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return e === "오후";
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후";
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        var n = e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                var n = e % 10, r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, r) {
            var i = {
                m: [ "eng Minutt", "enger Minutt" ],
                h: [ "eng Stonn", "enger Stonn" ],
                d: [ "een Dag", "engem Dag" ],
                M: [ "ee Mount", "engem Mount" ],
                y: [ "ee Joer", "engem Joer" ]
            };
            return t ? i[n][0] : i[n][1];
        }
        function n(e) {
            var t = e.substr(0, e.indexOf(" "));
            if (i(t)) {
                return "a " + e;
            }
            return "an " + e;
        }
        function r(e) {
            var t = e.substr(0, e.indexOf(" "));
            if (i(t)) {
                return "viru " + e;
            }
            return "virun " + e;
        }
        function i(e) {
            e = parseInt(e, 10);
            if (isNaN(e)) {
                return false;
            }
            if (e < 0) {
                return true;
            } else if (e < 10) {
                if (4 <= e && e <= 7) {
                    return true;
                }
                return false;
            } else if (e < 100) {
                var t = e % 10, n = e / 10;
                if (t === 0) {
                    return i(n);
                }
                return i(t);
            } else if (e < 1e4) {
                while (e >= 10) {
                    e = e / 10;
                }
                return i(e);
            } else {
                e = e / 1e3;
                return i(e);
            }
        }
        var a = e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: true,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 2:
                      case 4:
                        return "[Leschten] dddd [um] LT";

                      default:
                        return "[Leschte] dddd [um] LT";
                    }
                }
            },
            relativeTime: {
                future: n,
                past: r,
                s: "e puer Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return e === "ຕອນແລງ";
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "ຕອນເຊົ້າ";
                } else {
                    return "ຕອນແລງ";
                }
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            ordinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e;
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        function n(e, t, n, r) {
            if (t) {
                return "kelios sekundės";
            } else {
                return r ? "kelių sekundžių" : "kelias sekundes";
            }
        }
        function r(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2];
        }
        function i(e) {
            return e % 10 === 0 || e > 10 && e < 20;
        }
        function a(e) {
            return t[e].split("_");
        }
        function s(e, t, n, s) {
            var o = e + " ";
            if (e === 1) {
                return o + r(e, t, n[0], s);
            } else if (t) {
                return o + (i(e) ? a(n)[1] : a(n)[0]);
            } else {
                if (s) {
                    return o + a(n)[1];
                } else {
                    return o + (i(e) ? a(n)[1] : a(n)[2]);
                }
            }
        }
        var o = e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: n,
                m: r,
                mm: s,
                h: r,
                hh: s,
                d: r,
                dd: s,
                M: r,
                MM: s,
                y: r,
                yy: s
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji";
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return o;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        function n(e, t, n) {
            if (n) {
                return t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3];
            } else {
                return t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1];
            }
        }
        function r(e, r, i) {
            return e + " " + n(t[i], e, r);
        }
        function i(e, r, i) {
            return n(t[i], e, r);
        }
        function a(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
        }
        var s = e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: a,
                m: i,
                mm: r,
                h: i,
                hh: r,
                d: i,
                dd: r,
                M: i,
                MM: r,
                y: i,
                yy: r
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return s;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            words: {
                m: [ "jedan minut", "jednog minuta" ],
                mm: [ "minut", "minuta", "minuta" ],
                h: [ "jedan sat", "jednog sata" ],
                hh: [ "sat", "sata", "sati" ],
                dd: [ "dan", "dana", "dana" ],
                MM: [ "mjesec", "mjeseca", "mjeseci" ],
                yy: [ "godina", "godine", "godina" ]
            },
            correctGrammaticalCase: function(e, t) {
                return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, r) {
                var i = t.words[r];
                if (r.length === 1) {
                    return n ? i[0] : i[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, i);
                }
            }
        };
        var n = e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    var e = [ "[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ];
                    return e[this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                        return "[Изминатата] dddd [во] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[Изминатиот] dddd [во] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10, n = e % 100;
                if (e === 0) {
                    return e + "-ев";
                } else if (n === 0) {
                    return e + "-ен";
                } else if (n > 10 && n < 20) {
                    return e + "-ти";
                } else if (t === 1) {
                    return e + "-ви";
                } else if (t === 2) {
                    return e + "-ри";
                } else if (t === 7 || t === 8) {
                    return e + "-ми";
                } else {
                    return e + "-ти";
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: true,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "രാത്രി" && e >= 4 || t === "ഉച്ച കഴിഞ്ഞ്" || t === "വൈകുന്നേരം") {
                    return e + 12;
                } else {
                    return e;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "രാത്രി";
                } else if (e < 12) {
                    return "രാവിലെ";
                } else if (e < 17) {
                    return "ഉച്ച കഴിഞ്ഞ്";
                } else if (e < 20) {
                    return "വൈകുന്നേരം";
                } else {
                    return "രാത്രി";
                }
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        };
        var n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        function r(e, t, n, r) {
            var i = "";
            if (t) {
                switch (n) {
                  case "s":
                    i = "काही सेकंद";
                    break;

                  case "m":
                    i = "एक मिनिट";
                    break;

                  case "mm":
                    i = "%d मिनिटे";
                    break;

                  case "h":
                    i = "एक तास";
                    break;

                  case "hh":
                    i = "%d तास";
                    break;

                  case "d":
                    i = "एक दिवस";
                    break;

                  case "dd":
                    i = "%d दिवस";
                    break;

                  case "M":
                    i = "एक महिना";
                    break;

                  case "MM":
                    i = "%d महिने";
                    break;

                  case "y":
                    i = "एक वर्ष";
                    break;

                  case "yy":
                    i = "%d वर्षे";
                    break;
                }
            } else {
                switch (n) {
                  case "s":
                    i = "काही सेकंदां";
                    break;

                  case "m":
                    i = "एका मिनिटा";
                    break;

                  case "mm":
                    i = "%d मिनिटां";
                    break;

                  case "h":
                    i = "एका तासा";
                    break;

                  case "hh":
                    i = "%d तासां";
                    break;

                  case "d":
                    i = "एका दिवसा";
                    break;

                  case "dd":
                    i = "%d दिवसां";
                    break;

                  case "M":
                    i = "एका महिन्या";
                    break;

                  case "MM":
                    i = "%d महिन्यां";
                    break;

                  case "y":
                    i = "एका वर्षा";
                    break;

                  case "yy":
                    i = "%d वर्षां";
                    break;
                }
            }
            return i.replace(/%d/i, e);
        }
        var i = e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: true,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "रात्री") {
                    return e < 4 ? e : e + 12;
                } else if (t === "सकाळी") {
                    return e;
                } else if (t === "दुपारी") {
                    return e >= 10 ? e : e + 12;
                } else if (t === "सायंकाळी") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "रात्री";
                } else if (e < 10) {
                    return "सकाळी";
                } else if (e < 17) {
                    return "दुपारी";
                } else if (e < 20) {
                    return "सायंकाळी";
                } else {
                    return "रात्री";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "pagi") {
                    return e;
                } else if (t === "tengahari") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "petang" || t === "malam") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 11) {
                    return "pagi";
                } else if (e < 15) {
                    return "tengahari";
                } else if (e < 19) {
                    return "petang";
                } else {
                    return "malam";
                }
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "pagi") {
                    return e;
                } else if (t === "tengahari") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "petang" || t === "malam") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 11) {
                    return "pagi";
                } else if (e < 15) {
                    return "tengahari";
                } else if (e < 19) {
                    return "petang";
                } else {
                    return "malam";
                }
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "၁",
            "2": "၂",
            "3": "၃",
            "4": "၄",
            "5": "၅",
            "6": "၆",
            "7": "၇",
            "8": "၈",
            "9": "၉",
            "0": "၀"
        };
        var n = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        };
        var r = e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: true,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "१",
            "2": "२",
            "3": "३",
            "4": "४",
            "5": "५",
            "6": "६",
            "7": "७",
            "8": "८",
            "9": "९",
            "0": "०"
        };
        var n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        var r = e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: true,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "राति") {
                    return e < 4 ? e : e + 12;
                } else if (t === "बिहान") {
                    return e;
                } else if (t === "दिउँसो") {
                    return e >= 10 ? e : e + 12;
                } else if (t === "साँझ") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 3) {
                    return "राति";
                } else if (e < 12) {
                    return "बिहान";
                } else if (e < 16) {
                    return "दिउँसो";
                } else if (e < 20) {
                    return "साँझ";
                } else {
                    return "राति";
                }
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        var r = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ];
        var i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var a = e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                if (/-MMM-/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        var r = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ];
        var i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var a = e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                if (/-MMM-/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "੧",
            "2": "੨",
            "3": "੩",
            "4": "੪",
            "5": "੫",
            "6": "੬",
            "7": "੭",
            "8": "੮",
            "9": "੯",
            "0": "੦"
        };
        var n = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        };
        var r = e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "ਰਾਤ") {
                    return e < 4 ? e : e + 12;
                } else if (t === "ਸਵੇਰ") {
                    return e;
                } else if (t === "ਦੁਪਹਿਰ") {
                    return e >= 10 ? e : e + 12;
                } else if (t === "ਸ਼ਾਮ") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "ਰਾਤ";
                } else if (e < 10) {
                    return "ਸਵੇਰ";
                } else if (e < 17) {
                    return "ਦੁਪਹਿਰ";
                } else if (e < 20) {
                    return "ਸ਼ਾਮ";
                } else {
                    return "ਰਾਤ";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
        var n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1;
        }
        function i(e, t, n) {
            var i = e + " ";
            switch (n) {
              case "m":
                return t ? "minuta" : "minutę";

              case "mm":
                return i + (r(e) ? "minuty" : "minut");

              case "h":
                return t ? "godzina" : "godzinę";

              case "hh":
                return i + (r(e) ? "godziny" : "godzin");

              case "MM":
                return i + (r(e) ? "miesiące" : "miesięcy");

              case "yy":
                return i + (r(e) ? "lata" : "lat");
            }
        }
        var a = e.defineLocale("pl", {
            months: function(e, r) {
                if (r === "") {
                    return "(" + n[e.month()] + "|" + t[e.month()] + ")";
                } else if (/D MMMM/.test(r)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[W zeszłą niedzielę o] LT";

                      case 3:
                        return "[W zeszłą środę o] LT";

                      case 6:
                        return "[W zeszłą sobotę o] LT";

                      default:
                        return "[W zeszły] dddd [o] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: i,
                y: "rok",
                yy: i
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var r = {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }, i = " ";
            if (e % 100 >= 20 || e >= 100 && e % 100 === 0) {
                i = " de ";
            }
            return e + i + r[n];
        }
        var n = e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, r) {
            var i = {
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            if (r === "m") {
                return n ? "минута" : "минуту";
            } else {
                return e + " " + t(i[r], +e);
            }
        }
        var r = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
        var i = e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function(e) {
                    if (e.week() !== this.week()) {
                        switch (this.day()) {
                          case 0:
                            return "[В следующее] dddd [в] LT";

                          case 1:
                          case 2:
                          case 4:
                            return "[В следующий] dddd [в] LT";

                          case 3:
                          case 5:
                          case 6:
                            return "[В следующую] dddd [в] LT";
                        }
                    } else {
                        if (this.day() === 2) {
                            return "[Во] dddd [в] LT";
                        } else {
                            return "[В] dddd [в] LT";
                        }
                    }
                },
                lastWeek: function(e) {
                    if (e.week() !== this.week()) {
                        switch (this.day()) {
                          case 0:
                            return "[В прошлое] dddd [в] LT";

                          case 1:
                          case 2:
                          case 4:
                            return "[В прошлый] dddd [в] LT";

                          case 3:
                          case 5:
                          case 6:
                            return "[В прошлую] dddd [в] LT";
                        }
                    } else {
                        if (this.day() === 2) {
                            return "[Во] dddd [в] LT";
                        } else {
                            return "[В] dddd [в] LT";
                        }
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "ночи";
                } else if (e < 12) {
                    return "утра";
                } else if (e < 17) {
                    return "дня";
                } else {
                    return "вечера";
                }
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                    return e + "-й";

                  case "D":
                    return e + "-го";

                  case "w":
                  case "W":
                    return e + "-я";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි";
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return e === "ප.ව." || e === "පස් වරු";
            },
            meridiem: function(e, t, n) {
                if (e > 11) {
                    return n ? "ප.ව." : "පස් වරු";
                } else {
                    return n ? "පෙ.ව." : "පෙර වරු";
                }
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_");
        var n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function r(e) {
            return e > 1 && e < 5;
        }
        function i(e, t, n, i) {
            var a = e + " ";
            switch (n) {
              case "s":
                return t || i ? "pár sekúnd" : "pár sekundami";

              case "m":
                return t ? "minúta" : i ? "minútu" : "minútou";

              case "mm":
                if (t || i) {
                    return a + (r(e) ? "minúty" : "minút");
                } else {
                    return a + "minútami";
                }
                break;

              case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";

              case "hh":
                if (t || i) {
                    return a + (r(e) ? "hodiny" : "hodín");
                } else {
                    return a + "hodinami";
                }
                break;

              case "d":
                return t || i ? "deň" : "dňom";

              case "dd":
                if (t || i) {
                    return a + (r(e) ? "dni" : "dní");
                } else {
                    return a + "dňami";
                }
                break;

              case "M":
                return t || i ? "mesiac" : "mesiacom";

              case "MM":
                if (t || i) {
                    return a + (r(e) ? "mesiace" : "mesiacov");
                } else {
                    return a + "mesiacmi";
                }
                break;

              case "y":
                return t || i ? "rok" : "rokom";

              case "yy":
                if (t || i) {
                    return a + (r(e) ? "roky" : "rokov");
                } else {
                    return a + "rokmi";
                }
                break;
            }
        }
        var a = e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v nedeľu o] LT";

                      case 1:
                      case 2:
                        return "[v] dddd [o] LT";

                      case 3:
                        return "[v stredu o] LT";

                      case 4:
                        return "[vo štvrtok o] LT";

                      case 5:
                        return "[v piatok o] LT";

                      case 6:
                        return "[v sobotu o] LT";
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[minulú nedeľu o] LT";

                      case 1:
                      case 2:
                        return "[minulý] dddd [o] LT";

                      case 3:
                        return "[minulú stredu o] LT";

                      case 4:
                      case 5:
                        return "[minulý] dddd [o] LT";

                      case 6:
                        return "[minulú sobotu o] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, r) {
            var i = e + " ";
            switch (n) {
              case "s":
                return t || r ? "nekaj sekund" : "nekaj sekundami";

              case "m":
                return t ? "ena minuta" : "eno minuto";

              case "mm":
                if (e === 1) {
                    i += t ? "minuta" : "minuto";
                } else if (e === 2) {
                    i += t || r ? "minuti" : "minutama";
                } else if (e < 5) {
                    i += t || r ? "minute" : "minutami";
                } else {
                    i += t || r ? "minut" : "minutami";
                }
                return i;

              case "h":
                return t ? "ena ura" : "eno uro";

              case "hh":
                if (e === 1) {
                    i += t ? "ura" : "uro";
                } else if (e === 2) {
                    i += t || r ? "uri" : "urama";
                } else if (e < 5) {
                    i += t || r ? "ure" : "urami";
                } else {
                    i += t || r ? "ur" : "urami";
                }
                return i;

              case "d":
                return t || r ? "en dan" : "enim dnem";

              case "dd":
                if (e === 1) {
                    i += t || r ? "dan" : "dnem";
                } else if (e === 2) {
                    i += t || r ? "dni" : "dnevoma";
                } else {
                    i += t || r ? "dni" : "dnevi";
                }
                return i;

              case "M":
                return t || r ? "en mesec" : "enim mesecem";

              case "MM":
                if (e === 1) {
                    i += t || r ? "mesec" : "mesecem";
                } else if (e === 2) {
                    i += t || r ? "meseca" : "mesecema";
                } else if (e < 5) {
                    i += t || r ? "mesece" : "meseci";
                } else {
                    i += t || r ? "mesecev" : "meseci";
                }
                return i;

              case "y":
                return t || r ? "eno leto" : "enim letom";

              case "yy":
                if (e === 1) {
                    i += t || r ? "leto" : "letom";
                } else if (e === 2) {
                    i += t || r ? "leti" : "letoma";
                } else if (e < 5) {
                    i += t || r ? "leta" : "leti";
                } else {
                    i += t || r ? "let" : "leti";
                }
                return i;
            }
        }
        var n = e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v] [nedeljo] [ob] LT";

                      case 3:
                        return "[v] [sredo] [ob] LT";

                      case 6:
                        return "[v] [soboto] [ob] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[v] dddd [ob] LT";
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";

                      case 3:
                        return "[prejšnjo] [sredo] [ob] LT";

                      case 6:
                        return "[prejšnjo] [soboto] [ob] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[prejšnji] dddd [ob] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: true,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return e.charAt(0) === "M";
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            words: {
                m: [ "jedan minut", "jedne minute" ],
                mm: [ "minut", "minute", "minuta" ],
                h: [ "jedan sat", "jednog sata" ],
                hh: [ "sat", "sata", "sati" ],
                dd: [ "dan", "dana", "dana" ],
                MM: [ "mesec", "meseca", "meseci" ],
                yy: [ "godina", "godine", "godina" ]
            },
            correctGrammaticalCase: function(e, t) {
                return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, r) {
                var i = t.words[r];
                if (r.length === 1) {
                    return n ? i[0] : i[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, i);
                }
            }
        };
        var n = e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: true,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedelju] [u] LT";

                      case 3:
                        return "[u] [sredu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    var e = [ "[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ];
                    return e[this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            words: {
                m: [ "један минут", "једне минуте" ],
                mm: [ "минут", "минуте", "минута" ],
                h: [ "један сат", "једног сата" ],
                hh: [ "сат", "сата", "сати" ],
                dd: [ "дан", "дана", "дана" ],
                MM: [ "месец", "месеца", "месеци" ],
                yy: [ "година", "године", "година" ]
            },
            correctGrammaticalCase: function(e, t) {
                return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, r) {
                var i = t.words[r];
                if (r.length === 1) {
                    return n ? i[0] : i[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, i);
                }
            }
        };
        var n = e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: true,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[у] [недељу] [у] LT";

                      case 3:
                        return "[у] [среду] [у] LT";

                      case 6:
                        return "[у] [суботу] [у] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[у] dddd [у] LT";
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    var e = [ "[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT" ];
                    return e[this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                if (e < 11) {
                    return "ekuseni";
                } else if (e < 15) {
                    return "emini";
                } else if (e < 19) {
                    return "entsambama";
                } else {
                    return "ebusuku";
                }
            },
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "ekuseni") {
                    return e;
                } else if (t === "emini") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "entsambama" || t === "ebusuku") {
                    if (e === 0) {
                        return 0;
                    }
                    return e + 12;
                }
            },
            ordinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "e" : t === 1 ? "a" : t === 2 ? "a" : t === 3 ? "e" : "e";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            "1": "௧",
            "2": "௨",
            "3": "௩",
            "4": "௪",
            "5": "௫",
            "6": "௬",
            "7": "௭",
            "8": "௮",
            "9": "௯",
            "0": "௦"
        };
        var n = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        };
        var r = e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            ordinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது";
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                    return n[e];
                });
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e];
                });
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                if (e < 2) {
                    return " யாமம்";
                } else if (e < 6) {
                    return " வைகறை";
                } else if (e < 10) {
                    return " காலை";
                } else if (e < 14) {
                    return " நண்பகல்";
                } else if (e < 18) {
                    return " எற்பாடு";
                } else if (e < 22) {
                    return " மாலை";
                } else {
                    return " யாமம்";
                }
            },
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "யாமம்") {
                    return e < 2 ? e : e + 12;
                } else if (t === "வைகறை" || t === "காலை") {
                    return e;
                } else if (t === "நண்பகல்") {
                    return e >= 10 ? e : e + 12;
                } else {
                    return e + 12;
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: true,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            ordinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "రాత్రి") {
                    return e < 4 ? e : e + 12;
                } else if (t === "ఉదయం") {
                    return e;
                } else if (t === "మధ్యాహ్నం") {
                    return e >= 10 ? e : e + 12;
                } else if (t === "సాయంత్రం") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "రాత్రి";
                } else if (e < 10) {
                    return "ఉదయం";
                } else if (e < 17) {
                    return "మధ్యాహ్నం";
                } else if (e < 20) {
                    return "సాయంత్రం";
                } else {
                    return "రాత్రి";
                }
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: true,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return e === "หลังเที่ยง";
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return "ก่อนเที่ยง";
                } else {
                    return "หลังเที่ยง";
                }
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function n(e) {
            var t = e;
            t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq";
            return t;
        }
        function r(e) {
            var t = e;
            t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret";
            return t;
        }
        function i(e, t, n, r) {
            var i = a(e);
            switch (n) {
              case "mm":
                return i + " tup";

              case "hh":
                return i + " rep";

              case "dd":
                return i + " jaj";

              case "MM":
                return i + " jar";

              case "yy":
                return i + " DIS";
            }
        }
        function a(e) {
            var n = Math.floor(e % 1e3 / 100), r = Math.floor(e % 100 / 10), i = e % 10, a = "";
            if (n > 0) {
                a += t[n] + "vatlh";
            }
            if (r > 0) {
                a += (a !== "" ? " " : "") + t[r] + "maH";
            }
            if (i > 0) {
                a += (a !== "" ? " " : "") + t[i];
            }
            return a === "" ? "pagh" : a;
        }
        var s = e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: true,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: n,
                past: r,
                s: "puS lup",
                m: "wa’ tup",
                mm: i,
                h: "wa’ rep",
                hh: i,
                d: "wa’ jaj",
                dd: i,
                M: "wa’ jar",
                MM: i,
                y: "wa’ DIS",
                yy: i
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return s;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        var n = e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function(e) {
                if (e === 0) {
                    return e + "'ıncı";
                }
                var n = e % 10, r = e % 100 - n, i = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[i]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase();
            },
            meridiem: function(e, t, n) {
                if (e > 11) {
                    return n ? "d'o" : "D'O";
                } else {
                    return n ? "d'a" : "D'A";
                }
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        function n(e, t, n, r) {
            var i = {
                s: [ "viensas secunds", "'iensas secunds" ],
                m: [ "'n míut", "'iens míut" ],
                mm: [ e + " míuts", "" + e + " míuts" ],
                h: [ "'n þora", "'iensa þora" ],
                hh: [ e + " þoras", "" + e + " þoras" ],
                d: [ "'n ziua", "'iensa ziua" ],
                dd: [ e + " ziuas", "" + e + " ziuas" ],
                M: [ "'n mes", "'iens mes" ],
                MM: [ e + " mesen", "" + e + " mesen" ],
                y: [ "'n ar", "'iens ar" ],
                yy: [ e + " ars", "" + e + " ars" ]
            };
            return r ? i[n][0] : t ? i[n][0] : i[n][1];
        }
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, r) {
            var i = {
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            if (r === "m") {
                return n ? "хвилина" : "хвилину";
            } else if (r === "h") {
                return n ? "година" : "годину";
            } else {
                return e + " " + t(i[r], +e);
            }
        }
        function r(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }, r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
            return n[r][e.day()];
        }
        function i(e) {
            return function() {
                return e + "о" + (this.hours() === 11 ? "б" : "") + "] LT";
            };
        }
        var a = e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: r,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: i("[Сьогодні "),
                nextDay: i("[Завтра "),
                lastDay: i("[Вчора "),
                nextWeek: i("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                        return i("[Минулої] dddd [").call(this);

                      case 1:
                      case 2:
                      case 4:
                        return i("[Минулого] dddd [").call(this);
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 4) {
                    return "ночі";
                } else if (e < 12) {
                    return "ранку";
                } else if (e < 17) {
                    return "дня";
                } else {
                    return "вечора";
                }
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                    return e + "-й";

                  case "D":
                    return e + "-го";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: true,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: true,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e);
            },
            meridiem: function(e, t, n) {
                if (e < 12) {
                    return n ? "sa" : "SA";
                } else {
                    return n ? "ch" : "CH";
                }
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: true,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: true,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            ordinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm分",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah点mm分",
                LLLL: "YYYY年MMMD日ddddAh点mm分",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah点mm分",
                llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "凌晨" || t === "早上" || t === "上午") {
                    return e;
                } else if (t === "下午" || t === "晚上") {
                    return e + 12;
                } else {
                    return e >= 11 ? e : e + 12;
                }
            },
            meridiem: function(e, t, n) {
                var r = e * 100 + t;
                if (r < 600) {
                    return "凌晨";
                } else if (r < 900) {
                    return "早上";
                } else if (r < 1130) {
                    return "上午";
                } else if (r < 1230) {
                    return "中午";
                } else if (r < 1800) {
                    return "下午";
                } else {
                    return "晚上";
                }
            },
            calendar: {
                sameDay: function() {
                    return this.minutes() === 0 ? "[今天]Ah[点整]" : "[今天]LT";
                },
                nextDay: function() {
                    return this.minutes() === 0 ? "[明天]Ah[点整]" : "[明天]LT";
                },
                lastDay: function() {
                    return this.minutes() === 0 ? "[昨天]Ah[点整]" : "[昨天]LT";
                },
                nextWeek: function() {
                    var t, n;
                    t = e().startOf("week");
                    n = this.diff(t, "days") >= 7 ? "[下]" : "[本]";
                    return this.minutes() === 0 ? n + "dddAh点整" : n + "dddAh点mm";
                },
                lastWeek: function() {
                    var t, n;
                    t = e().startOf("week");
                    n = this.unix() < t.unix() ? "[上]" : "[本]";
                    return this.minutes() === 0 ? n + "dddAh点整" : n + "dddAh点mm";
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "日";

                  case "M":
                    return e + "月";

                  case "w":
                  case "W":
                    return e + "周";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "凌晨" || t === "早上" || t === "上午") {
                    return e;
                } else if (t === "中午") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "下午" || t === "晚上") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                var r = e * 100 + t;
                if (r < 600) {
                    return "凌晨";
                } else if (r < 900) {
                    return "早上";
                } else if (r < 1130) {
                    return "上午";
                } else if (r < 1230) {
                    return "中午";
                } else if (r < 1800) {
                    return "下午";
                } else {
                    return "晚上";
                }
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "日";

                  case "M":
                    return e + "月";

                  case "w":
                  case "W":
                    return e + "週";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        });
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(15)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                if (e === 12) {
                    e = 0;
                }
                if (t === "凌晨" || t === "早上" || t === "上午") {
                    return e;
                } else if (t === "中午") {
                    return e >= 11 ? e : e + 12;
                } else if (t === "下午" || t === "晚上") {
                    return e + 12;
                }
            },
            meridiem: function(e, t, n) {
                var r = e * 100 + t;
                if (r < 600) {
                    return "凌晨";
                } else if (r < 900) {
                    return "早上";
                } else if (r < 1130) {
                    return "上午";
                } else if (r < 1230) {
                    return "中午";
                } else if (r < 1800) {
                    return "下午";
                } else {
                    return "晚上";
                }
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "日";

                  case "M":
                    return e + "月";

                  case "w":
                  case "W":
                    return e + "週";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        });
        return t;
    });
}, function(e, t, n) {
    var r = n(15);
    "use strict";
    if (!r) {
        throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    }
    var i = function(e, t) {
        var n = {}, i, a, s = true, o, d = false, u = false, l, f = 0, c, m, _, h = [ {
            clsName: "days",
            navFnc: "M",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "y",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "y",
            navStep: 10
        }, {
            clsName: "decades",
            navFnc: "y",
            navStep: 100
        } ], p = [ "days", "months", "years", "decades" ], y = [ "top", "bottom", "auto" ], g = [ "left", "right", "auto" ], v = [ "default", "top", "bottom" ], M = {
            up: 38,
            38: "up",
            down: 40,
            40: "down",
            left: 37,
            37: "left",
            right: 39,
            39: "right",
            tab: 9,
            9: "tab",
            escape: 27,
            27: "escape",
            enter: 13,
            13: "enter",
            pageUp: 33,
            33: "pageUp",
            pageDown: 34,
            34: "pageDown",
            shift: 16,
            16: "shift",
            control: 17,
            17: "control",
            space: 32,
            32: "space",
            t: 84,
            84: "t",
            delete: 46,
            46: "delete"
        }, L = {}, b = function() {
            return r.tz !== undefined && t.timeZone !== undefined && t.timeZone !== null && t.timeZone !== "";
        }, w = function(e) {
            var n;
            if (e === undefined || e === null) {
                n = r();
            } else if (b()) {
                n = r.tz(e, m, t.useStrict, t.timeZone);
            } else {
                n = r(e, m, t.useStrict);
            }
            if (b()) {
                n.tz(t.timeZone);
            }
            return n;
        }, Y = function(e) {
            if (typeof e !== "string" || e.length > 1) {
                throw new TypeError("isEnabled expects a single character string parameter");
            }
            switch (e) {
              case "y":
                return c.indexOf("Y") !== -1;

              case "M":
                return c.indexOf("M") !== -1;

              case "d":
                return c.toLowerCase().indexOf("d") !== -1;

              case "h":
              case "H":
                return c.toLowerCase().indexOf("h") !== -1;

              case "m":
                return c.indexOf("m") !== -1;

              case "s":
                return c.indexOf("s") !== -1;

              default:
                return false;
            }
        }, k = function() {
            return Y("h") || Y("m") || Y("s");
        }, D = function() {
            return Y("y") || Y("M") || Y("d");
        }, T = function() {
            var e = $("<thead>").append($("<tr>").append($("<th>").addClass("prev").attr("data-action", "previous").append($("<span>").addClass(t.icons.previous))).append($("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", t.calendarWeeks ? "6" : "5")).append($("<th>").addClass("next").attr("data-action", "next").append($("<span>").addClass(t.icons.next)))), n = $("<tbody>").append($("<tr>").append($("<td>").attr("colspan", t.calendarWeeks ? "8" : "7")));
            return [ $("<div>").addClass("datepicker-days").append($("<table>").addClass("table-condensed").append(e).append($("<tbody>"))), $("<div>").addClass("datepicker-months").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), $("<div>").addClass("datepicker-years").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), $("<div>").addClass("datepicker-decades").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())) ];
        }, x = function() {
            var e = $("<tr>"), n = $("<tr>"), r = $("<tr>");
            if (Y("h")) {
                e.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append($("<span>").addClass(t.icons.up))));
                n.append($("<td>").append($("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: t.tooltips.pickHour
                }).attr("data-action", "showHours")));
                r.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append($("<span>").addClass(t.icons.down))));
            }
            if (Y("m")) {
                if (Y("h")) {
                    e.append($("<td>").addClass("separator"));
                    n.append($("<td>").addClass("separator").html(":"));
                    r.append($("<td>").addClass("separator"));
                }
                e.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.incrementMinute
                }).addClass("btn").attr("data-action", "incrementMinutes").append($("<span>").addClass(t.icons.up))));
                n.append($("<td>").append($("<span>").addClass("timepicker-minute").attr({
                    "data-time-component": "minutes",
                    title: t.tooltips.pickMinute
                }).attr("data-action", "showMinutes")));
                r.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append($("<span>").addClass(t.icons.down))));
            }
            if (Y("s")) {
                if (Y("m")) {
                    e.append($("<td>").addClass("separator"));
                    n.append($("<td>").addClass("separator").html(":"));
                    r.append($("<td>").addClass("separator"));
                }
                e.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.incrementSecond
                }).addClass("btn").attr("data-action", "incrementSeconds").append($("<span>").addClass(t.icons.up))));
                n.append($("<td>").append($("<span>").addClass("timepicker-second").attr({
                    "data-time-component": "seconds",
                    title: t.tooltips.pickSecond
                }).attr("data-action", "showSeconds")));
                r.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.decrementSecond
                }).addClass("btn").attr("data-action", "decrementSeconds").append($("<span>").addClass(t.icons.down))));
            }
            if (!l) {
                e.append($("<td>").addClass("separator"));
                n.append($("<td>").append($("<button>").addClass("btn btn-primary").attr({
                    "data-action": "togglePeriod",
                    tabindex: "-1",
                    title: t.tooltips.togglePeriod
                })));
                r.append($("<td>").addClass("separator"));
            }
            return $("<div>").addClass("timepicker-picker").append($("<table>").addClass("table-condensed").append([ e, n, r ]));
        }, S = function() {
            var e = $("<div>").addClass("timepicker-hours").append($("<table>").addClass("table-condensed")), t = $("<div>").addClass("timepicker-minutes").append($("<table>").addClass("table-condensed")), n = $("<div>").addClass("timepicker-seconds").append($("<table>").addClass("table-condensed")), r = [ x() ];
            if (Y("h")) {
                r.push(e);
            }
            if (Y("m")) {
                r.push(t);
            }
            if (Y("s")) {
                r.push(n);
            }
            return r;
        }, j = function() {
            var e = [];
            if (t.showTodayButton) {
                e.push($("<td>").append($("<a>").attr({
                    "data-action": "today",
                    title: t.tooltips.today
                }).append($("<span>").addClass(t.icons.today))));
            }
            if (!t.sideBySide && D() && k()) {
                e.push($("<td>").append($("<a>").attr({
                    "data-action": "togglePicker",
                    title: t.tooltips.selectTime
                }).append($("<span>").addClass(t.icons.time))));
            }
            if (t.showClear) {
                e.push($("<td>").append($("<a>").attr({
                    "data-action": "clear",
                    title: t.tooltips.clear
                }).append($("<span>").addClass(t.icons.clear))));
            }
            if (t.showClose) {
                e.push($("<td>").append($("<a>").attr({
                    "data-action": "close",
                    title: t.tooltips.close
                }).append($("<span>").addClass(t.icons.close))));
            }
            return $("<table>").addClass("table-condensed").append($("<tbody>").append($("<tr>").append(e)));
        }, H = function() {
            var e = $("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"), n = $("<div>").addClass("datepicker").append(T()), r = $("<div>").addClass("timepicker").append(S()), i = $("<ul>").addClass("list-unstyled"), a = $("<li>").addClass("picker-switch" + (t.collapse ? " accordion-toggle" : "")).append(j());
            if (t.inline) {
                e.removeClass("dropdown-menu");
            }
            if (l) {
                e.addClass("usetwentyfour");
            }
            if (Y("s") && !l) {
                e.addClass("wider");
            }
            if (t.sideBySide && D() && k()) {
                e.addClass("timepicker-sbs");
                if (t.toolbarPlacement === "top") {
                    e.append(a);
                }
                e.append($("<div>").addClass("row").append(n.addClass("col-md-6")).append(r.addClass("col-md-6")));
                if (t.toolbarPlacement === "bottom") {
                    e.append(a);
                }
                return e;
            }
            if (t.toolbarPlacement === "top") {
                i.append(a);
            }
            if (D()) {
                i.append($("<li>").addClass(t.collapse && k() ? "collapse in" : "").append(n));
            }
            if (t.toolbarPlacement === "default") {
                i.append(a);
            }
            if (k()) {
                i.append($("<li>").addClass(t.collapse && D() ? "collapse" : "").append(r));
            }
            if (t.toolbarPlacement === "bottom") {
                i.append(a);
            }
            return e.append(i);
        }, C = function() {
            var n, r = {};
            if (e.is("input") || t.inline) {
                n = e.data();
            } else {
                n = e.find("input").data();
            }
            if (n.dateOptions && n.dateOptions instanceof Object) {
                r = $.extend(true, r, n.dateOptions);
            }
            $.each(t, function(e) {
                var t = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                if (n[t] !== undefined) {
                    r[e] = n[t];
                }
            });
            return r;
        }, P = function() {
            var n = (d || e).position(), r = (d || e).offset(), i = t.widgetPositioning.vertical, a = t.widgetPositioning.horizontal, s;
            if (t.widgetParent) {
                s = t.widgetParent.append(u);
            } else if (e.is("input")) {
                s = e.after(u).parent();
            } else if (t.inline) {
                s = e.append(u);
                return;
            } else {
                s = e;
                e.children().first().after(u);
            }
            if (i === "auto") {
                if (r.top + u.height() * 1.5 >= $(window).height() + $(window).scrollTop() && u.height() + e.outerHeight() < r.top) {
                    i = "top";
                } else {
                    i = "bottom";
                }
            }
            if (a === "auto") {
                if (s.width() < r.left + u.outerWidth() / 2 && r.left + u.outerWidth() > $(window).width()) {
                    a = "right";
                } else {
                    a = "left";
                }
            }
            if (i === "top") {
                u.addClass("top").removeClass("bottom");
            } else {
                u.addClass("bottom").removeClass("top");
            }
            if (a === "right") {
                u.addClass("pull-right");
            } else {
                u.removeClass("pull-right");
            }
            if (s.css("position") !== "relative") {
                s = s.parents().filter(function() {
                    return $(this).css("position") === "relative";
                }).first();
            }
            if (s.length === 0) {
                throw new Error("datetimepicker component should be placed within a relative positioned container");
            }
            u.css({
                top: i === "top" ? "auto" : n.top + e.outerHeight(),
                bottom: i === "top" ? s.outerHeight() - (s === e ? 0 : n.top) : "auto",
                left: a === "left" ? s === e ? 0 : n.left : "auto",
                right: a === "left" ? "auto" : s.outerWidth() - e.outerWidth() - (s === e ? 0 : n.left)
            });
        }, E = function(t) {
            if (t.type === "dp.change" && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate)) {
                return;
            }
            e.trigger(t);
        }, O = function(e) {
            if (e === "y") {
                e = "YYYY";
            }
            E({
                type: "dp.update",
                change: e,
                viewDate: a.clone()
            });
        }, A = function(e) {
            if (!u) {
                return;
            }
            if (e) {
                _ = Math.max(f, Math.min(3, _ + e));
            }
            u.find(".datepicker > div").hide().filter(".datepicker-" + h[_].clsName).show();
        }, W = function() {
            var e = $("<tr>"), n = a.clone().startOf("w").startOf("d");
            if (t.calendarWeeks === true) {
                e.append($("<th>").addClass("cw").text("#"));
            }
            while (n.isBefore(a.clone().endOf("w"))) {
                e.append($("<th>").addClass("dow").text(n.format("dd")));
                n.add(1, "d");
            }
            u.find(".datepicker-days thead").append(e);
        }, F = function(e) {
            return t.disabledDates[e.format("YYYY-MM-DD")] === true;
        }, N = function(e) {
            return t.enabledDates[e.format("YYYY-MM-DD")] === true;
        }, z = function(e) {
            return t.disabledHours[e.format("H")] === true;
        }, I = function(e) {
            return t.enabledHours[e.format("H")] === true;
        }, R = function(e, n) {
            if (!e.isValid()) {
                return false;
            }
            if (t.disabledDates && n === "d" && F(e)) {
                return false;
            }
            if (t.enabledDates && n === "d" && !N(e)) {
                return false;
            }
            if (t.minDate && e.isBefore(t.minDate, n)) {
                return false;
            }
            if (t.maxDate && e.isAfter(t.maxDate, n)) {
                return false;
            }
            if (t.daysOfWeekDisabled && n === "d" && t.daysOfWeekDisabled.indexOf(e.day()) !== -1) {
                return false;
            }
            if (t.disabledHours && (n === "h" || n === "m" || n === "s") && z(e)) {
                return false;
            }
            if (t.enabledHours && (n === "h" || n === "m" || n === "s") && !I(e)) {
                return false;
            }
            if (t.disabledTimeIntervals && (n === "h" || n === "m" || n === "s")) {
                var r = false;
                $.each(t.disabledTimeIntervals, function() {
                    if (e.isBetween(this[0], this[1])) {
                        r = true;
                        return false;
                    }
                });
                if (r) {
                    return false;
                }
            }
            return true;
        }, q = function() {
            var e = [], t = a.clone().startOf("y").startOf("d");
            while (t.isSame(a, "y")) {
                e.push($("<span>").attr("data-action", "selectMonth").addClass("month").text(t.format("MMM")));
                t.add(1, "M");
            }
            u.find(".datepicker-months td").empty().append(e);
        }, J = function() {
            var e = u.find(".datepicker-months"), n = e.find("th"), r = e.find("tbody").find("span");
            n.eq(0).find("span").attr("title", t.tooltips.prevYear);
            n.eq(1).attr("title", t.tooltips.selectYear);
            n.eq(2).find("span").attr("title", t.tooltips.nextYear);
            e.find(".disabled").removeClass("disabled");
            if (!R(a.clone().subtract(1, "y"), "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(a.year());
            if (!R(a.clone().add(1, "y"), "y")) {
                n.eq(2).addClass("disabled");
            }
            r.removeClass("active");
            if (i.isSame(a, "y") && !s) {
                r.eq(i.month()).addClass("active");
            }
            r.each(function(e) {
                if (!R(a.clone().month(e), "M")) {
                    $(this).addClass("disabled");
                }
            });
        }, B = function() {
            var e = u.find(".datepicker-years"), n = e.find("th"), r = a.clone().subtract(5, "y"), o = a.clone().add(6, "y"), d = "";
            n.eq(0).find("span").attr("title", t.tooltips.prevDecade);
            n.eq(1).attr("title", t.tooltips.selectDecade);
            n.eq(2).find("span").attr("title", t.tooltips.nextDecade);
            e.find(".disabled").removeClass("disabled");
            if (t.minDate && t.minDate.isAfter(r, "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(r.year() + "-" + o.year());
            if (t.maxDate && t.maxDate.isBefore(o, "y")) {
                n.eq(2).addClass("disabled");
            }
            while (!r.isAfter(o, "y")) {
                d += '<span data-action="selectYear" class="year' + (r.isSame(i, "y") && !s ? " active" : "") + (!R(r, "y") ? " disabled" : "") + '">' + r.year() + "</span>";
                r.add(1, "y");
            }
            e.find("td").html(d);
        }, U = function() {
            var e = u.find(".datepicker-decades"), n = e.find("th"), s = r({
                y: a.year() - a.year() % 100 - 1
            }), o = s.clone().add(100, "y"), d = s.clone(), l = false, f = false, c, m = "";
            n.eq(0).find("span").attr("title", t.tooltips.prevCentury);
            n.eq(2).find("span").attr("title", t.tooltips.nextCentury);
            e.find(".disabled").removeClass("disabled");
            if (s.isSame(r({
                y: 1900
            })) || t.minDate && t.minDate.isAfter(s, "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(s.year() + "-" + o.year());
            if (s.isSame(r({
                y: 2e3
            })) || t.maxDate && t.maxDate.isBefore(o, "y")) {
                n.eq(2).addClass("disabled");
            }
            while (!s.isAfter(o, "y")) {
                c = s.year() + 12;
                l = t.minDate && t.minDate.isAfter(s, "y") && t.minDate.year() <= c;
                f = t.maxDate && t.maxDate.isAfter(s, "y") && t.maxDate.year() <= c;
                m += '<span data-action="selectDecade" class="decade' + (i.isAfter(s) && i.year() <= c ? " active" : "") + (!R(s, "y") && !l && !f ? " disabled" : "") + '" data-selection="' + (s.year() + 6) + '">' + (s.year() + 1) + " - " + (s.year() + 12) + "</span>";
                s.add(12, "y");
            }
            m += "<span></span><span></span><span></span>";
            e.find("td").html(m);
            n.eq(1).text(d.year() + 1 + "-" + s.year());
        }, V = function() {
            var e = u.find(".datepicker-days"), n = e.find("th"), r, o = [], d, l, f;
            if (!D()) {
                return;
            }
            n.eq(0).find("span").attr("title", t.tooltips.prevMonth);
            n.eq(1).attr("title", t.tooltips.selectMonth);
            n.eq(2).find("span").attr("title", t.tooltips.nextMonth);
            e.find(".disabled").removeClass("disabled");
            n.eq(1).text(a.format(t.dayViewHeaderFormat));
            if (!R(a.clone().subtract(1, "M"), "M")) {
                n.eq(0).addClass("disabled");
            }
            if (!R(a.clone().add(1, "M"), "M")) {
                n.eq(2).addClass("disabled");
            }
            r = a.clone().startOf("M").startOf("w").startOf("d");
            for (f = 0; f < 42; f++) {
                if (r.weekday() === 0) {
                    d = $("<tr>");
                    if (t.calendarWeeks) {
                        d.append('<td class="cw">' + r.week() + "</td>");
                    }
                    o.push(d);
                }
                l = "";
                if (r.isBefore(a, "M")) {
                    l += " old";
                }
                if (r.isAfter(a, "M")) {
                    l += " new";
                }
                if (r.isSame(i, "d") && !s) {
                    l += " active";
                }
                if (!R(r, "d")) {
                    l += " disabled";
                }
                if (r.isSame(w(), "d")) {
                    l += " today";
                }
                if (r.day() === 0 || r.day() === 6) {
                    l += " weekend";
                }
                d.append('<td data-action="selectDay" data-day="' + r.format("L") + '" class="day' + l + '">' + r.date() + "</td>");
                r.add(1, "d");
            }
            e.find("tbody").empty().append(o);
            J();
            B();
            U();
        }, G = function() {
            var e = u.find(".timepicker-hours table"), t = a.clone().startOf("d"), n = [], r = $("<tr>");
            if (a.hour() > 11 && !l) {
                t.hour(12);
            }
            while (t.isSame(a, "d") && (l || a.hour() < 12 && t.hour() < 12 || a.hour() > 11)) {
                if (t.hour() % 4 === 0) {
                    r = $("<tr>");
                    n.push(r);
                }
                r.append('<td data-action="selectHour" class="hour' + (!R(t, "h") ? " disabled" : "") + '">' + t.format(l ? "HH" : "hh") + "</td>");
                t.add(1, "h");
            }
            e.empty().append(n);
        }, Z = function() {
            var e = u.find(".timepicker-minutes table"), n = a.clone().startOf("h"), r = [], i = $("<tr>"), s = t.stepping === 1 ? 5 : t.stepping;
            while (a.isSame(n, "h")) {
                if (n.minute() % (s * 4) === 0) {
                    i = $("<tr>");
                    r.push(i);
                }
                i.append('<td data-action="selectMinute" class="minute' + (!R(n, "m") ? " disabled" : "") + '">' + n.format("mm") + "</td>");
                n.add(s, "m");
            }
            e.empty().append(r);
        }, K = function() {
            var e = u.find(".timepicker-seconds table"), t = a.clone().startOf("m"), n = [], r = $("<tr>");
            while (a.isSame(t, "m")) {
                if (t.second() % 20 === 0) {
                    r = $("<tr>");
                    n.push(r);
                }
                r.append('<td data-action="selectSecond" class="second' + (!R(t, "s") ? " disabled" : "") + '">' + t.format("ss") + "</td>");
                t.add(5, "s");
            }
            e.empty().append(n);
        }, X = function() {
            var e, t, n = u.find(".timepicker span[data-time-component]");
            if (!l) {
                e = u.find(".timepicker [data-action=togglePeriod]");
                t = i.clone().add(i.hours() >= 12 ? -12 : 12, "h");
                e.text(i.format("A"));
                if (R(t, "h")) {
                    e.removeClass("disabled");
                } else {
                    e.addClass("disabled");
                }
            }
            n.filter("[data-time-component=hours]").text(i.format(l ? "HH" : "hh"));
            n.filter("[data-time-component=minutes]").text(i.format("mm"));
            n.filter("[data-time-component=seconds]").text(i.format("ss"));
            G();
            Z();
            K();
        }, Q = function() {
            if (!u) {
                return;
            }
            V();
            X();
        }, ee = function(n) {
            var r = s ? null : i;
            if (!n) {
                s = true;
                o.val("");
                e.data("date", "");
                E({
                    type: "dp.change",
                    date: false,
                    oldDate: r
                });
                Q();
                return;
            }
            n = n.clone().locale(t.locale);
            if (b()) {
                n.tz(t.timeZone);
            }
            if (t.stepping !== 1) {
                n.minutes(Math.round(n.minutes() / t.stepping) * t.stepping).seconds(0);
            }
            if (R(n)) {
                i = n;
                o.val(i.format(c));
                e.data("date", i.format(c));
                s = false;
                Q();
                E({
                    type: "dp.change",
                    date: i.clone(),
                    oldDate: r
                });
            } else {
                if (!t.keepInvalid) {
                    o.val(s ? "" : i.format(c));
                } else {
                    E({
                        type: "dp.change",
                        date: n,
                        oldDate: r
                    });
                }
                E({
                    type: "dp.error",
                    date: n,
                    oldDate: r
                });
            }
        }, te = function() {
            var e = false;
            if (!u) {
                return n;
            }
            u.find(".collapse").each(function() {
                var t = $(this).data("collapse");
                if (t && t.transitioning) {
                    e = true;
                    return false;
                }
                return true;
            });
            if (e) {
                return n;
            }
            if (d && d.hasClass("btn")) {
                d.toggleClass("active");
            }
            u.hide();
            $(window).off("resize", P);
            u.off("click", "[data-action]");
            u.off("mousedown", false);
            u.remove();
            u = false;
            E({
                type: "dp.hide",
                date: i.clone()
            });
            o.blur();
            _ = 0;
            a = i.clone();
            return n;
        }, ne = function() {
            ee(null);
        }, re = function(e) {
            if (t.parseInputDate === undefined) {
                if (!r.isMoment(e)) {
                    e = w(e);
                }
            } else {
                e = t.parseInputDate(e);
            }
            return e;
        }, ie = {
            next: function() {
                var e = h[_].navFnc;
                a.add(h[_].navStep, e);
                V();
                O(e);
            },
            previous: function() {
                var e = h[_].navFnc;
                a.subtract(h[_].navStep, e);
                V();
                O(e);
            },
            pickerSwitch: function() {
                A(1);
            },
            selectMonth: function(e) {
                var n = $(e.target).closest("tbody").find("span").index($(e.target));
                a.month(n);
                if (_ === f) {
                    ee(i.clone().year(a.year()).month(a.month()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    A(-1);
                    V();
                }
                O("M");
            },
            selectYear: function(e) {
                var n = parseInt($(e.target).text(), 10) || 0;
                a.year(n);
                if (_ === f) {
                    ee(i.clone().year(a.year()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    A(-1);
                    V();
                }
                O("YYYY");
            },
            selectDecade: function(e) {
                var n = parseInt($(e.target).data("selection"), 10) || 0;
                a.year(n);
                if (_ === f) {
                    ee(i.clone().year(a.year()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    A(-1);
                    V();
                }
                O("YYYY");
            },
            selectDay: function(e) {
                var n = a.clone();
                if ($(e.target).is(".old")) {
                    n.subtract(1, "M");
                }
                if ($(e.target).is(".new")) {
                    n.add(1, "M");
                }
                ee(n.date(parseInt($(e.target).text(), 10)));
                if (!k() && !t.keepOpen && !t.inline) {
                    te();
                }
            },
            incrementHours: function() {
                var e = i.clone().add(1, "h");
                if (R(e, "h")) {
                    ee(e);
                }
            },
            incrementMinutes: function() {
                var e = i.clone().add(t.stepping, "m");
                if (R(e, "m")) {
                    ee(e);
                }
            },
            incrementSeconds: function() {
                var e = i.clone().add(1, "s");
                if (R(e, "s")) {
                    ee(e);
                }
            },
            decrementHours: function() {
                var e = i.clone().subtract(1, "h");
                if (R(e, "h")) {
                    ee(e);
                }
            },
            decrementMinutes: function() {
                var e = i.clone().subtract(t.stepping, "m");
                if (R(e, "m")) {
                    ee(e);
                }
            },
            decrementSeconds: function() {
                var e = i.clone().subtract(1, "s");
                if (R(e, "s")) {
                    ee(e);
                }
            },
            togglePeriod: function() {
                ee(i.clone().add(i.hours() >= 12 ? -12 : 12, "h"));
            },
            togglePicker: function(e) {
                var n = $(e.target), r = n.closest("ul"), i = r.find(".in"), a = r.find(".collapse:not(.in)"), s;
                if (i && i.length) {
                    s = i.data("collapse");
                    if (s && s.transitioning) {
                        return;
                    }
                    if (i.collapse) {
                        i.collapse("hide");
                        a.collapse("show");
                    } else {
                        i.removeClass("in");
                        a.addClass("in");
                    }
                    if (n.is("span")) {
                        n.toggleClass(t.icons.time + " " + t.icons.date);
                    } else {
                        n.find("span").toggleClass(t.icons.time + " " + t.icons.date);
                    }
                }
            },
            showPicker: function() {
                u.find(".timepicker > div:not(.timepicker-picker)").hide();
                u.find(".timepicker .timepicker-picker").show();
            },
            showHours: function() {
                u.find(".timepicker .timepicker-picker").hide();
                u.find(".timepicker .timepicker-hours").show();
            },
            showMinutes: function() {
                u.find(".timepicker .timepicker-picker").hide();
                u.find(".timepicker .timepicker-minutes").show();
            },
            showSeconds: function() {
                u.find(".timepicker .timepicker-picker").hide();
                u.find(".timepicker .timepicker-seconds").show();
            },
            selectHour: function(e) {
                var t = parseInt($(e.target).text(), 10);
                if (!l) {
                    if (i.hours() >= 12) {
                        if (t !== 12) {
                            t += 12;
                        }
                    } else {
                        if (t === 12) {
                            t = 0;
                        }
                    }
                }
                ee(i.clone().hours(t));
                ie.showPicker.call(n);
            },
            selectMinute: function(e) {
                ee(i.clone().minutes(parseInt($(e.target).text(), 10)));
                ie.showPicker.call(n);
            },
            selectSecond: function(e) {
                ee(i.clone().seconds(parseInt($(e.target).text(), 10)));
                ie.showPicker.call(n);
            },
            clear: ne,
            today: function() {
                var e = w();
                if (R(e, "d")) {
                    ee(e);
                }
            },
            close: te
        }, ae = function(e) {
            if ($(e.currentTarget).is(".disabled")) {
                return false;
            }
            ie[$(e.currentTarget).data("action")].apply(n, arguments);
            return false;
        }, se = function() {
            var e, r = {
                year: function(e) {
                    return e.month(0).date(1).hours(0).seconds(0).minutes(0);
                },
                month: function(e) {
                    return e.date(1).hours(0).seconds(0).minutes(0);
                },
                day: function(e) {
                    return e.hours(0).seconds(0).minutes(0);
                },
                hour: function(e) {
                    return e.seconds(0).minutes(0);
                },
                minute: function(e) {
                    return e.seconds(0);
                }
            };
            if (o.prop("disabled") || !t.ignoreReadonly && o.prop("readonly") || u) {
                return n;
            }
            if (o.val() !== undefined && o.val().trim().length !== 0) {
                ee(re(o.val().trim()));
            } else if (s && t.useCurrent && (t.inline || o.is("input") && o.val().trim().length === 0)) {
                e = w();
                if (typeof t.useCurrent === "string") {
                    e = r[t.useCurrent](e);
                }
                ee(e);
            }
            u = H();
            W();
            q();
            u.find(".timepicker-hours").hide();
            u.find(".timepicker-minutes").hide();
            u.find(".timepicker-seconds").hide();
            Q();
            A();
            $(window).on("resize", P);
            u.on("click", "[data-action]", ae);
            u.on("mousedown", false);
            if (d && d.hasClass("btn")) {
                d.toggleClass("active");
            }
            P();
            u.show();
            if (t.focusOnShow && !o.is(":focus")) {
                o.focus();
            }
            E({
                type: "dp.show"
            });
            return n;
        }, oe = function() {
            return u ? te() : se();
        }, de = function(e) {
            var r = null, i, a, s = [], o = {}, d = e.which, l, f, c = "p";
            L[d] = c;
            for (i in L) {
                if (L.hasOwnProperty(i) && L[i] === c) {
                    s.push(i);
                    if (parseInt(i, 10) !== d) {
                        o[i] = true;
                    }
                }
            }
            for (i in t.keyBinds) {
                if (t.keyBinds.hasOwnProperty(i) && typeof t.keyBinds[i] === "function") {
                    l = i.split(" ");
                    if (l.length === s.length && M[d] === l[l.length - 1]) {
                        f = true;
                        for (a = l.length - 2; a >= 0; a--) {
                            if (!(M[l[a]] in o)) {
                                f = false;
                                break;
                            }
                        }
                        if (f) {
                            r = t.keyBinds[i];
                            break;
                        }
                    }
                }
            }
            if (r) {
                r.call(n, u);
                e.stopPropagation();
                e.preventDefault();
            }
        }, ue = function(e) {
            L[e.which] = "r";
            e.stopPropagation();
            e.preventDefault();
        }, le = function(e) {
            var t = $(e.target).val().trim(), n = t ? re(t) : null;
            ee(n);
            e.stopImmediatePropagation();
            return false;
        }, fe = function() {
            o.on({
                change: le,
                blur: t.debug ? "" : te,
                keydown: de,
                keyup: ue,
                focus: t.allowInputToggle ? se : ""
            });
            if (e.is("input")) {
                o.on({
                    focus: se
                });
            } else if (d) {
                d.on("click", oe);
                d.on("mousedown", false);
            }
        }, ce = function() {
            o.off({
                change: le,
                blur: blur,
                keydown: de,
                keyup: ue,
                focus: t.allowInputToggle ? te : ""
            });
            if (e.is("input")) {
                o.off({
                    focus: se
                });
            } else if (d) {
                d.off("click", oe);
                d.off("mousedown", false);
            }
        }, me = function(e) {
            var t = {};
            $.each(e, function() {
                var e = re(this);
                if (e.isValid()) {
                    t[e.format("YYYY-MM-DD")] = true;
                }
            });
            return Object.keys(t).length ? t : false;
        }, _e = function(e) {
            var t = {};
            $.each(e, function() {
                t[this] = true;
            });
            return Object.keys(t).length ? t : false;
        }, he = function() {
            var e = t.format || "L LT";
            c = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                var t = i.localeData().longDateFormat(e) || e;
                return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                    return i.localeData().longDateFormat(e) || e;
                });
            });
            m = t.extraFormats ? t.extraFormats.slice() : [];
            if (m.indexOf(e) < 0 && m.indexOf(c) < 0) {
                m.push(c);
            }
            l = c.toLowerCase().indexOf("a") < 1 && c.replace(/\[.*?\]/g, "").indexOf("h") < 1;
            if (Y("y")) {
                f = 2;
            }
            if (Y("M")) {
                f = 1;
            }
            if (Y("d")) {
                f = 0;
            }
            _ = Math.max(f, _);
            if (!s) {
                ee(i);
            }
        };
        n.destroy = function() {
            te();
            ce();
            e.removeData("DateTimePicker");
            e.removeData("date");
        };
        n.toggle = oe;
        n.show = se;
        n.hide = te;
        n.disable = function() {
            te();
            if (d && d.hasClass("btn")) {
                d.addClass("disabled");
            }
            o.prop("disabled", true);
            return n;
        };
        n.enable = function() {
            if (d && d.hasClass("btn")) {
                d.removeClass("disabled");
            }
            o.prop("disabled", false);
            return n;
        };
        n.ignoreReadonly = function(e) {
            if (arguments.length === 0) {
                return t.ignoreReadonly;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("ignoreReadonly () expects a boolean parameter");
            }
            t.ignoreReadonly = e;
            return n;
        };
        n.options = function(e) {
            if (arguments.length === 0) {
                return $.extend(true, {}, t);
            }
            if (!(e instanceof Object)) {
                throw new TypeError("options() options parameter should be an object");
            }
            $.extend(true, t, e);
            $.each(t, function(e, t) {
                if (n[e] !== undefined) {
                    n[e](t);
                } else {
                    throw new TypeError("option " + e + " is not recognized!");
                }
            });
            return n;
        };
        n.date = function(e) {
            if (arguments.length === 0) {
                if (s) {
                    return null;
                }
                return i.clone();
            }
            if (e !== null && typeof e !== "string" && !r.isMoment(e) && !(e instanceof Date)) {
                throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
            }
            ee(e === null ? null : re(e));
            return n;
        };
        n.format = function(e) {
            if (arguments.length === 0) {
                return t.format;
            }
            if (typeof e !== "string" && (typeof e !== "boolean" || e !== false)) {
                throw new TypeError("format() expects a string or boolean:false parameter " + e);
            }
            t.format = e;
            if (c) {
                he();
            }
            return n;
        };
        n.timeZone = function(e) {
            if (arguments.length === 0) {
                return t.timeZone;
            }
            if (typeof e !== "string") {
                throw new TypeError("newZone() expects a string parameter");
            }
            t.timeZone = e;
            return n;
        };
        n.dayViewHeaderFormat = function(e) {
            if (arguments.length === 0) {
                return t.dayViewHeaderFormat;
            }
            if (typeof e !== "string") {
                throw new TypeError("dayViewHeaderFormat() expects a string parameter");
            }
            t.dayViewHeaderFormat = e;
            return n;
        };
        n.extraFormats = function(e) {
            if (arguments.length === 0) {
                return t.extraFormats;
            }
            if (e !== false && !(e instanceof Array)) {
                throw new TypeError("extraFormats() expects an array or false parameter");
            }
            t.extraFormats = e;
            if (m) {
                he();
            }
            return n;
        };
        n.disabledDates = function(e) {
            if (arguments.length === 0) {
                return t.disabledDates ? $.extend({}, t.disabledDates) : t.disabledDates;
            }
            if (!e) {
                t.disabledDates = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledDates() expects an array parameter");
            }
            t.disabledDates = me(e);
            t.enabledDates = false;
            Q();
            return n;
        };
        n.enabledDates = function(e) {
            if (arguments.length === 0) {
                return t.enabledDates ? $.extend({}, t.enabledDates) : t.enabledDates;
            }
            if (!e) {
                t.enabledDates = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("enabledDates() expects an array parameter");
            }
            t.enabledDates = me(e);
            t.disabledDates = false;
            Q();
            return n;
        };
        n.daysOfWeekDisabled = function(e) {
            if (arguments.length === 0) {
                return t.daysOfWeekDisabled.splice(0);
            }
            if (typeof e === "boolean" && !e) {
                t.daysOfWeekDisabled = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("daysOfWeekDisabled() expects an array parameter");
            }
            t.daysOfWeekDisabled = e.reduce(function(e, t) {
                t = parseInt(t, 10);
                if (t > 6 || t < 0 || isNaN(t)) {
                    return e;
                }
                if (e.indexOf(t) === -1) {
                    e.push(t);
                }
                return e;
            }, []).sort();
            if (t.useCurrent && !t.keepInvalid) {
                var r = 0;
                while (!R(i, "d")) {
                    i.add(1, "d");
                    if (r === 31) {
                        throw "Tried 31 times to find a valid date";
                    }
                    r++;
                }
                ee(i);
            }
            Q();
            return n;
        };
        n.maxDate = function(e) {
            if (arguments.length === 0) {
                return t.maxDate ? t.maxDate.clone() : t.maxDate;
            }
            if (typeof e === "boolean" && e === false) {
                t.maxDate = false;
                Q();
                return n;
            }
            if (typeof e === "string") {
                if (e === "now" || e === "moment") {
                    e = w();
                }
            }
            var r = re(e);
            if (!r.isValid()) {
                throw new TypeError("maxDate() Could not parse date parameter: " + e);
            }
            if (t.minDate && r.isBefore(t.minDate)) {
                throw new TypeError("maxDate() date parameter is before options.minDate: " + r.format(c));
            }
            t.maxDate = r;
            if (t.useCurrent && !t.keepInvalid && i.isAfter(e)) {
                ee(t.maxDate);
            }
            if (a.isAfter(r)) {
                a = r.clone().subtract(t.stepping, "m");
            }
            Q();
            return n;
        };
        n.minDate = function(e) {
            if (arguments.length === 0) {
                return t.minDate ? t.minDate.clone() : t.minDate;
            }
            if (typeof e === "boolean" && e === false) {
                t.minDate = false;
                Q();
                return n;
            }
            if (typeof e === "string") {
                if (e === "now" || e === "moment") {
                    e = w();
                }
            }
            var r = re(e);
            if (!r.isValid()) {
                throw new TypeError("minDate() Could not parse date parameter: " + e);
            }
            if (t.maxDate && r.isAfter(t.maxDate)) {
                throw new TypeError("minDate() date parameter is after options.maxDate: " + r.format(c));
            }
            t.minDate = r;
            if (t.useCurrent && !t.keepInvalid && i.isBefore(e)) {
                ee(t.minDate);
            }
            if (a.isBefore(r)) {
                a = r.clone().add(t.stepping, "m");
            }
            Q();
            return n;
        };
        n.defaultDate = function(e) {
            if (arguments.length === 0) {
                return t.defaultDate ? t.defaultDate.clone() : t.defaultDate;
            }
            if (!e) {
                t.defaultDate = false;
                return n;
            }
            if (typeof e === "string") {
                if (e === "now" || e === "moment") {
                    e = w();
                } else {
                    e = w(e);
                }
            }
            var r = re(e);
            if (!r.isValid()) {
                throw new TypeError("defaultDate() Could not parse date parameter: " + e);
            }
            if (!R(r)) {
                throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
            }
            t.defaultDate = r;
            if (t.defaultDate && t.inline || o.val().trim() === "") {
                ee(t.defaultDate);
            }
            return n;
        };
        n.locale = function(e) {
            if (arguments.length === 0) {
                return t.locale;
            }
            if (!r.localeData(e)) {
                throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
            }
            t.locale = e;
            i.locale(t.locale);
            a.locale(t.locale);
            if (c) {
                he();
            }
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.stepping = function(e) {
            if (arguments.length === 0) {
                return t.stepping;
            }
            e = parseInt(e, 10);
            if (isNaN(e) || e < 1) {
                e = 1;
            }
            t.stepping = e;
            return n;
        };
        n.useCurrent = function(e) {
            var r = [ "year", "month", "day", "hour", "minute" ];
            if (arguments.length === 0) {
                return t.useCurrent;
            }
            if (typeof e !== "boolean" && typeof e !== "string") {
                throw new TypeError("useCurrent() expects a boolean or string parameter");
            }
            if (typeof e === "string" && r.indexOf(e.toLowerCase()) === -1) {
                throw new TypeError("useCurrent() expects a string parameter of " + r.join(", "));
            }
            t.useCurrent = e;
            return n;
        };
        n.collapse = function(e) {
            if (arguments.length === 0) {
                return t.collapse;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("collapse() expects a boolean parameter");
            }
            if (t.collapse === e) {
                return n;
            }
            t.collapse = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.icons = function(e) {
            if (arguments.length === 0) {
                return $.extend({}, t.icons);
            }
            if (!(e instanceof Object)) {
                throw new TypeError("icons() expects parameter to be an Object");
            }
            $.extend(t.icons, e);
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.tooltips = function(e) {
            if (arguments.length === 0) {
                return $.extend({}, t.tooltips);
            }
            if (!(e instanceof Object)) {
                throw new TypeError("tooltips() expects parameter to be an Object");
            }
            $.extend(t.tooltips, e);
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.useStrict = function(e) {
            if (arguments.length === 0) {
                return t.useStrict;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("useStrict() expects a boolean parameter");
            }
            t.useStrict = e;
            return n;
        };
        n.sideBySide = function(e) {
            if (arguments.length === 0) {
                return t.sideBySide;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("sideBySide() expects a boolean parameter");
            }
            t.sideBySide = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.viewMode = function(e) {
            if (arguments.length === 0) {
                return t.viewMode;
            }
            if (typeof e !== "string") {
                throw new TypeError("viewMode() expects a string parameter");
            }
            if (p.indexOf(e) === -1) {
                throw new TypeError("viewMode() parameter must be one of (" + p.join(", ") + ") value");
            }
            t.viewMode = e;
            _ = Math.max(p.indexOf(e), f);
            A();
            return n;
        };
        n.toolbarPlacement = function(e) {
            if (arguments.length === 0) {
                return t.toolbarPlacement;
            }
            if (typeof e !== "string") {
                throw new TypeError("toolbarPlacement() expects a string parameter");
            }
            if (v.indexOf(e) === -1) {
                throw new TypeError("toolbarPlacement() parameter must be one of (" + v.join(", ") + ") value");
            }
            t.toolbarPlacement = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.widgetPositioning = function(e) {
            if (arguments.length === 0) {
                return $.extend({}, t.widgetPositioning);
            }
            if ({}.toString.call(e) !== "[object Object]") {
                throw new TypeError("widgetPositioning() expects an object variable");
            }
            if (e.horizontal) {
                if (typeof e.horizontal !== "string") {
                    throw new TypeError("widgetPositioning() horizontal variable must be a string");
                }
                e.horizontal = e.horizontal.toLowerCase();
                if (g.indexOf(e.horizontal) === -1) {
                    throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + g.join(", ") + ")");
                }
                t.widgetPositioning.horizontal = e.horizontal;
            }
            if (e.vertical) {
                if (typeof e.vertical !== "string") {
                    throw new TypeError("widgetPositioning() vertical variable must be a string");
                }
                e.vertical = e.vertical.toLowerCase();
                if (y.indexOf(e.vertical) === -1) {
                    throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                }
                t.widgetPositioning.vertical = e.vertical;
            }
            Q();
            return n;
        };
        n.calendarWeeks = function(e) {
            if (arguments.length === 0) {
                return t.calendarWeeks;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
            }
            t.calendarWeeks = e;
            Q();
            return n;
        };
        n.showTodayButton = function(e) {
            if (arguments.length === 0) {
                return t.showTodayButton;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("showTodayButton() expects a boolean parameter");
            }
            t.showTodayButton = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.showClear = function(e) {
            if (arguments.length === 0) {
                return t.showClear;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("showClear() expects a boolean parameter");
            }
            t.showClear = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.widgetParent = function(e) {
            if (arguments.length === 0) {
                return t.widgetParent;
            }
            if (typeof e === "string") {
                e = $(e);
            }
            if (e !== null && (typeof e !== "string" && !(e instanceof $))) {
                throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
            }
            t.widgetParent = e;
            if (u) {
                te();
                se();
            }
            return n;
        };
        n.keepOpen = function(e) {
            if (arguments.length === 0) {
                return t.keepOpen;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("keepOpen() expects a boolean parameter");
            }
            t.keepOpen = e;
            return n;
        };
        n.focusOnShow = function(e) {
            if (arguments.length === 0) {
                return t.focusOnShow;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("focusOnShow() expects a boolean parameter");
            }
            t.focusOnShow = e;
            return n;
        };
        n.inline = function(e) {
            if (arguments.length === 0) {
                return t.inline;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("inline() expects a boolean parameter");
            }
            t.inline = e;
            return n;
        };
        n.clear = function() {
            ne();
            return n;
        };
        n.keyBinds = function(e) {
            if (arguments.length === 0) {
                return t.keyBinds;
            }
            t.keyBinds = e;
            return n;
        };
        n.getMoment = function(e) {
            return w(e);
        };
        n.debug = function(e) {
            if (typeof e !== "boolean") {
                throw new TypeError("debug() expects a boolean parameter");
            }
            t.debug = e;
            return n;
        };
        n.allowInputToggle = function(e) {
            if (arguments.length === 0) {
                return t.allowInputToggle;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("allowInputToggle() expects a boolean parameter");
            }
            t.allowInputToggle = e;
            return n;
        };
        n.showClose = function(e) {
            if (arguments.length === 0) {
                return t.showClose;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("showClose() expects a boolean parameter");
            }
            t.showClose = e;
            return n;
        };
        n.keepInvalid = function(e) {
            if (arguments.length === 0) {
                return t.keepInvalid;
            }
            if (typeof e !== "boolean") {
                throw new TypeError("keepInvalid() expects a boolean parameter");
            }
            t.keepInvalid = e;
            return n;
        };
        n.datepickerInput = function(e) {
            if (arguments.length === 0) {
                return t.datepickerInput;
            }
            if (typeof e !== "string") {
                throw new TypeError("datepickerInput() expects a string parameter");
            }
            t.datepickerInput = e;
            return n;
        };
        n.parseInputDate = function(e) {
            if (arguments.length === 0) {
                return t.parseInputDate;
            }
            if (typeof e !== "function") {
                throw new TypeError("parseInputDate() sholud be as function");
            }
            t.parseInputDate = e;
            return n;
        };
        n.disabledTimeIntervals = function(e) {
            if (arguments.length === 0) {
                return t.disabledTimeIntervals ? $.extend({}, t.disabledTimeIntervals) : t.disabledTimeIntervals;
            }
            if (!e) {
                t.disabledTimeIntervals = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledTimeIntervals() expects an array parameter");
            }
            t.disabledTimeIntervals = e;
            Q();
            return n;
        };
        n.disabledHours = function(e) {
            if (arguments.length === 0) {
                return t.disabledHours ? $.extend({}, t.disabledHours) : t.disabledHours;
            }
            if (!e) {
                t.disabledHours = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledHours() expects an array parameter");
            }
            t.disabledHours = _e(e);
            t.enabledHours = false;
            if (t.useCurrent && !t.keepInvalid) {
                var r = 0;
                while (!R(i, "h")) {
                    i.add(1, "h");
                    if (r === 24) {
                        throw "Tried 24 times to find a valid date";
                    }
                    r++;
                }
                ee(i);
            }
            Q();
            return n;
        };
        n.enabledHours = function(e) {
            if (arguments.length === 0) {
                return t.enabledHours ? $.extend({}, t.enabledHours) : t.enabledHours;
            }
            if (!e) {
                t.enabledHours = false;
                Q();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("enabledHours() expects an array parameter");
            }
            t.enabledHours = _e(e);
            t.disabledHours = false;
            if (t.useCurrent && !t.keepInvalid) {
                var r = 0;
                while (!R(i, "h")) {
                    i.add(1, "h");
                    if (r === 24) {
                        throw "Tried 24 times to find a valid date";
                    }
                    r++;
                }
                ee(i);
            }
            Q();
            return n;
        };
        n.viewDate = function(e) {
            if (arguments.length === 0) {
                return a.clone();
            }
            if (!e) {
                a = i.clone();
                return n;
            }
            if (typeof e !== "string" && !r.isMoment(e) && !(e instanceof Date)) {
                throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
            }
            a = re(e);
            O();
            return n;
        };
        if (e.is("input")) {
            o = e;
        } else {
            o = e.find(t.datepickerInput);
            if (o.length === 0) {
                o = e.find("input");
            } else if (!o.is("input")) {
                throw new Error('CSS class "' + t.datepickerInput + '" cannot be applied to non input element');
            }
        }
        if (e.hasClass("input-group")) {
            if (e.find(".datepickerbutton").length === 0) {
                d = e.find(".input-group-addon");
            } else {
                d = e.find(".datepickerbutton");
            }
        }
        if (!t.inline && !o.is("input")) {
            throw new Error("Could not initialize DateTimePicker without an input element");
        }
        i = w();
        a = i.clone();
        $.extend(true, t, C());
        n.options(t);
        he();
        fe();
        if (o.prop("disabled")) {
            n.disable();
        }
        if (o.is("input") && o.val().trim().length !== 0) {
            ee(re(o.val().trim()));
        } else if (t.defaultDate && o.attr("placeholder") === undefined) {
            ee(t.defaultDate);
        }
        if (t.inline) {
            se();
        }
        return n;
    };
    $.fn.datetimepicker = function(e) {
        e = e || {};
        var t = Array.prototype.slice.call(arguments, 1), n = true, r = [ "destroy", "hide", "show", "toggle" ], a;
        if (typeof e === "object") {
            return this.each(function() {
                var t = $(this);
                if (!t.data("DateTimePicker")) {
                    e = $.extend(true, {}, $.fn.datetimepicker.defaults, e);
                    t.data("DateTimePicker", i(t, e));
                }
            });
        } else if (typeof e === "string") {
            this.each(function() {
                var r = $(this), i = r.data("DateTimePicker");
                if (!i) {
                    throw new Error('bootstrap-datetimepicker("' + e + '") method was called on an element that is not using DateTimePicker');
                }
                a = i[e].apply(i, t);
                n = a === i;
            });
            if (n || $.inArray(e, r) > -1) {
                return this;
            }
            return a;
        }
        throw new TypeError("Invalid arguments for DateTimePicker: " + e);
    };
    $.fn.datetimepicker.defaults = {
        timeZone: "",
        format: false,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: r.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: "auto",
            vertical: "auto"
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().subtract(7, "d"));
                } else {
                    this.date(t.clone().add(this.stepping(), "m"));
                }
            },
            down: function(e) {
                if (!e) {
                    this.show();
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().add(7, "d"));
                } else {
                    this.date(t.clone().subtract(this.stepping(), "m"));
                }
            },
            "control up": function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().subtract(1, "y"));
                } else {
                    this.date(t.clone().add(1, "h"));
                }
            },
            "control down": function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().add(1, "y"));
                } else {
                    this.date(t.clone().subtract(1, "h"));
                }
            },
            left: function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().subtract(1, "d"));
                }
            },
            right: function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().add(1, "d"));
                }
            },
            pageUp: function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().subtract(1, "M"));
                }
            },
            pageDown: function(e) {
                if (!e) {
                    return;
                }
                var t = this.date() || this.getMoment();
                if (e.find(".datepicker").is(":visible")) {
                    this.date(t.clone().add(1, "M"));
                }
            },
            enter: function() {
                this.hide();
            },
            escape: function() {
                this.hide();
            },
            "control space": function(e) {
                if (!e) {
                    return;
                }
                if (e.find(".timepicker").is(":visible")) {
                    e.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function() {
                this.date(this.getMoment());
            },
            delete: function() {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };
    e.exports = $.fn.datetimepicker;
}, function(e, t, n) {
    var r = n(128);
    if (typeof r === "string") r = [ [ e.id, r, "" ] ];
    var i = n(130)(r, {});
    if (r.locals) e.exports = r.locals;
    if (false) {
        if (!r.locals) {
            e.hot.accept("!!./../../css-loader/index.js!./bootstrap-datetimepicker.css", function() {
                var t = require("!!./../../css-loader/index.js!./bootstrap-datetimepicker.css");
                if (typeof t === "string") t = [ [ e.id, t, "" ] ];
                i(t);
            });
        }
        e.hot.dispose(function() {
            i();
        });
    }
}, function(e, t, n) {
    t = e.exports = n(129)();
    t.push([ e.id, '/*!\n * Datetimepicker for Bootstrap 3\n * version : 4.17.43\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\n */.bootstrap-datetimepicker-widget{list-style:none}.bootstrap-datetimepicker-widget.dropdown-menu{margin:2px 0;padding:4px;width:19em}@media (min-width:768px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:992px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:1200px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}.bootstrap-datetimepicker-widget.dropdown-menu:after,.bootstrap-datetimepicker-widget.dropdown-menu:before{content:"";display:inline-block;position:absolute}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-bottom-color:rgba(0,0,0,.2);top:-7px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:8px}.bootstrap-datetimepicker-widget.dropdown-menu.top:before{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #ccc;border-top-color:rgba(0,0,0,.2);bottom:-7px;left:6px}.bootstrap-datetimepicker-widget.dropdown-menu.top:after{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before{left:auto;right:6px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after{left:auto;right:7px}.bootstrap-datetimepicker-widget .list-unstyled{margin:0}.bootstrap-datetimepicker-widget a[data-action]{padding:6px 0}.bootstrap-datetimepicker-widget a[data-action]:active{box-shadow:none}.bootstrap-datetimepicker-widget .timepicker-hour,.bootstrap-datetimepicker-widget .timepicker-minute,.bootstrap-datetimepicker-widget .timepicker-second{width:54px;font-weight:700;font-size:1.2em;margin:0}.bootstrap-datetimepicker-widget button[data-action]{padding:6px}.bootstrap-datetimepicker-widget .btn[data-action=incrementHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Increment Hours"}.bootstrap-datetimepicker-widget .btn[data-action=incrementMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Increment Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=decrementHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Decrement Hours"}.bootstrap-datetimepicker-widget .btn[data-action=decrementMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Decrement Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=showHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Show Hours"}.bootstrap-datetimepicker-widget .btn[data-action=showMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Show Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=togglePeriod]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Toggle AM/PM"}.bootstrap-datetimepicker-widget .btn[data-action=clear]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Clear the picker"}.bootstrap-datetimepicker-widget .btn[data-action=today]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Set the date to today"}.bootstrap-datetimepicker-widget .picker-switch{text-align:center}.bootstrap-datetimepicker-widget .picker-switch:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Toggle Date and Time Screens"}.bootstrap-datetimepicker-widget .picker-switch td{padding:0;margin:0;height:auto;width:auto;line-height:inherit}.bootstrap-datetimepicker-widget .picker-switch td span{line-height:2.5;height:2.5em;width:100%}.bootstrap-datetimepicker-widget table{width:100%;margin:0}.bootstrap-datetimepicker-widget table td,.bootstrap-datetimepicker-widget table th{text-align:center;border-radius:4px}.bootstrap-datetimepicker-widget table th{height:20px;line-height:20px;width:20px}.bootstrap-datetimepicker-widget table th.picker-switch{width:145px}.bootstrap-datetimepicker-widget table th.disabled,.bootstrap-datetimepicker-widget table th.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget table th.prev:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Previous Month"}.bootstrap-datetimepicker-widget table th.next:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Next Month"}.bootstrap-datetimepicker-widget table thead tr:first-child th{cursor:pointer}.bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#eee}.bootstrap-datetimepicker-widget table td{height:54px;line-height:54px;width:54px}.bootstrap-datetimepicker-widget table td.cw{font-size:.8em;height:20px;line-height:20px;color:#777}.bootstrap-datetimepicker-widget table td.day{height:25px;line-height:25px;width:20px}.bootstrap-datetimepicker-widget table td.day:hover,.bootstrap-datetimepicker-widget table td.hour:hover,.bootstrap-datetimepicker-widget table td.minute:hover,.bootstrap-datetimepicker-widget table td.second:hover{background:#eee;cursor:pointer}.bootstrap-datetimepicker-widget table td.new,.bootstrap-datetimepicker-widget table td.old{color:#777}.bootstrap-datetimepicker-widget table td.today{position:relative}.bootstrap-datetimepicker-widget table td.today:before{content:"";display:inline-block;border:solid transparent;border-width:0 0 7px 7px;border-bottom-color:#3399fe;border-top-color:rgba(0,0,0,.2);position:absolute;bottom:4px;right:4px}.bootstrap-datetimepicker-widget table td.active,.bootstrap-datetimepicker-widget table td.active:hover{background-color:#3399fe;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.bootstrap-datetimepicker-widget table td.active.today:before{border-bottom-color:#fff}.bootstrap-datetimepicker-widget table td.disabled,.bootstrap-datetimepicker-widget table td.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget table td span{display:inline-block;width:54px;height:54px;line-height:54px;margin:2px 1.5px;cursor:pointer;border-radius:4px}.bootstrap-datetimepicker-widget table td span:hover{background:#eee}.bootstrap-datetimepicker-widget table td span.active{background-color:#3399fe;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.bootstrap-datetimepicker-widget table td span.old{color:#777}.bootstrap-datetimepicker-widget table td span.disabled,.bootstrap-datetimepicker-widget table td span.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget.usetwentyfour td.hour{height:27px;line-height:27px}.bootstrap-datetimepicker-widget.wider{width:21em}.bootstrap-datetimepicker-widget .datepicker-decades .decade{line-height:1.8em!important}.input-group.date .input-group-addon{cursor:pointer}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}', "" ]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        e.toString = function e() {
            var t = [];
            for (var n = 0; n < this.length; n++) {
                var r = this[n];
                if (r[2]) {
                    t.push("@media " + r[2] + "{" + r[1] + "}");
                } else {
                    t.push(r[1]);
                }
            }
            return t.join("");
        };
        e.i = function(t, n) {
            if (typeof t === "string") t = [ [ null, t, "" ] ];
            var r = {};
            for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                if (typeof a === "number") r[a] = true;
            }
            for (i = 0; i < t.length; i++) {
                var s = t[i];
                if (typeof s[0] !== "number" || !r[s[0]]) {
                    if (n && !s[2]) {
                        s[2] = n;
                    } else if (n) {
                        s[2] = "(" + s[2] + ") and (" + n + ")";
                    }
                    e.push(s);
                }
            }
        };
        return e;
    };
}, function(e, t, n) {
    var r = {}, i = function(e) {
        var t;
        return function() {
            if (typeof t === "undefined") t = e.apply(this, arguments);
            return t;
        };
    }, a = i(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), s = i(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), o = null, d = 0, u = [];
    e.exports = function(e, t) {
        if (false) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
        t = t || {};
        if (typeof t.singleton === "undefined") t.singleton = a();
        if (typeof t.insertAt === "undefined") t.insertAt = "bottom";
        var n = f(e);
        l(n, t);
        return function e(i) {
            var a = [];
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                var d = r[o.id];
                d.refs--;
                a.push(d);
            }
            if (i) {
                var u = f(i);
                l(u, t);
            }
            for (var s = 0; s < a.length; s++) {
                var d = a[s];
                if (d.refs === 0) {
                    for (var c = 0; c < d.parts.length; c++) d.parts[c]();
                    delete r[d.id];
                }
            }
        };
    };
    function l(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            var a = r[i.id];
            if (a) {
                a.refs++;
                for (var s = 0; s < a.parts.length; s++) {
                    a.parts[s](i.parts[s]);
                }
                for (;s < i.parts.length; s++) {
                    a.parts.push(p(i.parts[s], t));
                }
            } else {
                var o = [];
                for (var s = 0; s < i.parts.length; s++) {
                    o.push(p(i.parts[s], t));
                }
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: o
                };
            }
        }
    }
    function f(e) {
        var t = [];
        var n = {};
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            var a = i[0];
            var s = i[1];
            var o = i[2];
            var d = i[3];
            var u = {
                css: s,
                media: o,
                sourceMap: d
            };
            if (!n[a]) t.push(n[a] = {
                id: a,
                parts: [ u ]
            }); else n[a].parts.push(u);
        }
        return t;
    }
    function c(e, t) {
        var n = s();
        var r = u[u.length - 1];
        if (e.insertAt === "top") {
            if (!r) {
                n.insertBefore(t, n.firstChild);
            } else if (r.nextSibling) {
                n.insertBefore(t, r.nextSibling);
            } else {
                n.appendChild(t);
            }
            u.push(t);
        } else if (e.insertAt === "bottom") {
            n.appendChild(t);
        } else {
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
    }
    function m(e) {
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        if (t >= 0) {
            u.splice(t, 1);
        }
    }
    function _(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        c(e, t);
        return t;
    }
    function h(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet";
        c(e, t);
        return t;
    }
    function p(e, t) {
        var n, r, i;
        if (t.singleton) {
            var a = d++;
            n = o || (o = _(t));
            r = g.bind(null, n, a, false);
            i = g.bind(null, n, a, true);
        } else if (e.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
            n = h(t);
            r = M.bind(null, n);
            i = function() {
                m(n);
                if (n.href) URL.revokeObjectURL(n.href);
            };
        } else {
            n = _(t);
            r = v.bind(null, n);
            i = function() {
                m(n);
            };
        }
        r(e);
        return function t(n) {
            if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                r(e = n);
            } else {
                i();
            }
        };
    }
    var y = function() {
        var e = [];
        return function(t, n) {
            e[t] = n;
            return e.filter(Boolean).join("\n");
        };
    }();
    function g(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) {
            e.styleSheet.cssText = y(t, i);
        } else {
            var a = document.createTextNode(i);
            var s = e.childNodes;
            if (s[t]) e.removeChild(s[t]);
            if (s.length) {
                e.insertBefore(a, s[t]);
            } else {
                e.appendChild(a);
            }
        }
    }
    function v(e, t) {
        var n = t.css;
        var r = t.media;
        if (r) {
            e.setAttribute("media", r);
        }
        if (e.styleSheet) {
            e.styleSheet.cssText = n;
        } else {
            while (e.firstChild) {
                e.removeChild(e.firstChild);
            }
            e.appendChild(document.createTextNode(n));
        }
    }
    function M(e, t) {
        var n = t.css;
        var r = t.sourceMap;
        if (r) {
            n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */";
        }
        var i = new Blob([ n ], {
            type: "text/css"
        });
        var a = e.href;
        e.href = URL.createObjectURL(i);
        if (a) URL.revokeObjectURL(a);
    }
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = u([ "<div></div>" ], [ "<div></div>" ]);
    var a = u([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ]);
    var s = u([ '<span class="input-group-addon">', "</span>" ], [ '<span class="input-group-addon">', "</span>" ]);
    var o = u([ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', " ", ">", "</textarea>\n                " ], [ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', " ", ">", "</textarea>\n                " ]);
    var d = u([ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', " ", "/>\n                " ], [ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', " ", "/>\n                " ]);
    function u(e, t) {
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
    function f(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function c(e, t) {
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
    var m = function(e) {
        c(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
            var n = {
                events: {
                    keydown: "onEnter",
                    change: "onChange"
                },
                type: "text",
                value: "",
                placeholder: "",
                name: "",
                disabled: false,
                readonly: false,
                addonBefore: "",
                addonAfter: "",
                prefix: "",
                suffix: "",
                size: "",
                onChange: function e() {},
                onEnter: function e() {}
            };
            Object.assign(n, e);
            var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var i = r;
            if (n.addonBefore || n.addonAfter) {
                var a = r.onEnter.bind(r);
                var s = r.onChange.bind(r);
                r.$("input").keydown(a);
                r.$("input").change(s);
            }
            return r;
        }
        r(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = hx(i);
                if (t.addonBefore || t.addonAfter) {
                    n = hx(a, t.size ? "input-group-" + t.size : "", t.addonBefore ? hx(s, t.prefix) : "", t.type, t.placeholder, t.value, t.name, t.disabled ? "disabled" : "", t.readonly ? "readonly" : "", t.addonAfter ? hx(s, t.suffix) : "");
                } else {
                    if (t.type == "textarea") {
                        n = hx(o, t.size ? "form-control-" + t.size : "", t.placeholder, t.name, t.disabled ? "disabled" : "", t.readonly ? "readonly" : "", t.value);
                    } else {
                        n = hx(d, t.type, t.size ? "form-control-" + t.size : "", t.placeholder, t.value, t.name, t.disabled ? "disabled" : "", t.readonly ? "readonly" : "");
                    }
                }
                return n;
            }
        }, {
            key: "onEnter",
            value: function e(t) {
                var n = $(t.currentTarget), r = n.val();
                if (t.keyCode == 13) {
                    if (typeof this.options.onEnter === "function") this.options.onEnter(r, t);
                }
            }
        }, {
            key: "onChange",
            value: function e(t) {
                var n = $(t.currentTarget), r = n.val();
                if (typeof this.options.onChange === "function") this.options.onChange(r, t);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("inputs", m);
    e.exports = m;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var i = p([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ]);
    var a = n(133);
    var s = h(a);
    var o = n(12);
    var d = h(o);
    var u = n(13);
    var l = h(u);
    var f = n(14);
    var c = h(f);
    var m = n(131);
    var _ = h(m);
    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function p(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function y(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function g(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function v(e, t) {
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
    var M = function(e) {
        v(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            y(this, t);
            var n = [ {
                key: "0",
                value: "不限"
            }, {
                key: "so1",
                value: "选项一"
            }, {
                key: "so2",
                value: "选项二选项二选项二fffdf"
            }, {
                key: "so3",
                value: "选项三"
            } ];
            var r = {
                components: [ {
                    el: "#form1",
                    layout: "inline",
                    data: [ {
                        label: "名称",
                        help: "注意事项",
                        required: true,
                        rule: {
                            required: true
                        },
                        message: {
                            required: "请先填写名称"
                        },
                        component: {
                            comName: "inputs",
                            name: "name",
                            onChange: function e(t) {
                                console.warn("点击了搜索框", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(t) {
                                console.warn("点击了搜索框2", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(t) {
                                console.warn("点击了搜索框", t);
                            },
                            data: $.extend(true, [], n)
                        }
                    }, {
                        label: "名称3",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "time",
                            placeholder: "请选择",
                            onChange: function e(t) {
                                console.warn("点击了选项框2", t);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], n)
                        }
                    } ],
                    onSubmit: function e(t) {
                        console.warn("点击了提交", t);
                        return false;
                    }
                }, {
                    el: "#form2",
                    data: [ {
                        label: "名称",
                        help: "注意事项",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "name",
                            onChange: function e(t) {
                                console.warn("点击了搜索框", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(t) {
                                console.warn("点击了搜索框2", t);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(t) {
                                console.warn("点击了搜索框", t);
                            },
                            data: $.extend(true, [], n)
                        }
                    }, {
                        label: "名称3",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "time",
                            placeholder: "请选择",
                            onChange: function e(t) {
                                console.warn("点击了选项框2", t);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], n)
                        }
                    } ],
                    onSubmit: function e(t) {
                        console.warn("点击了提交2", t);
                        return false;
                    }
                } ]
            };
            Object.assign(r, e);
            return g(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        }
        r(t, [ {
            key: "render",
            value: function e() {
                var t = hx(i);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = M;
}, function(e, t, n) {
    "use strict";
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    function i(e) {
        return e && (typeof e === "undefined" ? "undefined" : r(e)) === "object" && "default" in e ? e["default"] : e;
    }
    var a = i(n(134));
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var o = _([ '<button type="submit" class="btn btn-primary">', "</button>" ], [ '<button type="submit" class="btn btn-primary">', "</button>" ]);
    var d = _([ '\n                    <div class="form-group row">\n                      <div class="offset-sm-2 col-sm-10">\n                        <button type="submit" class="btn btn-primary">', "</button>\n                      </div>\n                    </div>\n                    " ], [ '\n                    <div class="form-group row">\n                      <div class="offset-sm-2 col-sm-10">\n                        <button type="submit" class="btn btn-primary">', "</button>\n                      </div>\n                    </div>\n                    " ]);
    var u = _([ '\n                <div class="form-group">\n                    <label for="', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);
    var l = _([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);
    var f = _([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 col-form-label">', '</label>\n                  <div class="col-sm-10">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 col-form-label">', '</label>\n                  <div class="col-sm-10">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);
    var c = _([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);
    var m = _([ "<form>\n            ", "\n            ", "</form>" ], [ "<form>\n            ", "\n            ", "</form>" ]);
    function _(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function h(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function p(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
    }
    function y(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : r(t)));
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
    $.fn.validate = a;
    var g = function(e) {
        y(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            h(this, t);
            var n = {
                layout: "vertical",
                setDefaults: {
                    errorClass: "form-control-feedback",
                    errorElement: "div",
                    errorPlacement: function e(t, n) {
                        n.after(t);
                    },
                    highlight: function e(t, n) {
                        $(t).closest(".form-group").addClass("has-danger");
                    },
                    success: function e(t) {
                        t.closest(".form-group").removeClass("has-danger");
                        t.closest("div.form-control-feedback").remove();
                    },
                    submitHandler: function t(n) {
                        console.warn("ddddddddd");
                        var r = Lego.getView(e.el);
                        if (r) r.submitForm();
                    },
                    rules: {},
                    messages: {}
                },
                submitEl: "",
                submitText: "提 交",
                data: [],
                format: function e(t) {
                    return t;
                },
                onSubmit: function e() {}
            };
            Object.assign(n, e);
            return p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        s(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {}, n = this;
                function r() {
                    var e = "";
                    if (!t.submitEl) {
                        if (t.layout == "vertical") {
                            e = hx(o, t.submitText);
                        } else {
                            e = hx(d, t.submitText);
                        }
                    }
                    return e;
                }
                function i(e, t, n) {
                    var r = "";
                    var i = "<" + val(e.component.comName) + " id=" + n + "></" + val(e.component.comName) + ">";
                    if (t == "vertical") {
                        r = hx(u, n, val(e.label), hx(i), e.help ? hx(l, val(e.help)) : "");
                    } else {
                        r = hx(f, n, val(e.label), hx(i), e.help ? hx(l, val(e.help)) : "");
                    }
                    return r;
                }
                function a(e, n, r) {
                    var a = "", s = [ "component", t.vid, n ];
                    if (e.items) {
                        a = hx(c, val(e.labelClass), val(e.label), e.items.map(function(e, t) {
                            s.push(t);
                            return i(e, r, s.join("_"));
                        }));
                    } else {
                        a = i(e, r, s.join("_"));
                    }
                    return a;
                }
                var s = hx(m, t.data.map(function(e, n) {
                    return a(e, n, t.layout);
                }), r());
                return s;
            }
        }, {
            key: "renderAfter",
            value: function e() {
                var t = this;
                var n = this;
                this.rules = null;
                this.messages = null;
                this.options.data.map(function(e, r) {
                    var i = [ "component", n.options.vid, r ];
                    if (e.items) {
                        e.items.map(function(e, t) {
                            if (e.rule && e.message) {
                                n.rules = n.options.rules || {};
                                n.messages = n.options.messages || {};
                                if (e.required) e.rule.required = true;
                                n.options.setDefaults.rules[e.component.name] = e.rule;
                                n.options.setDefaults.messages[e.component.name] = e.message;
                            }
                            i.push(t);
                            e.component.el = "#" + i.join("_");
                            Lego.create(Lego.UI[e.component.comName], e.component);
                        });
                    } else {
                        if (e.rule && e.message) {
                            t.rules = t.options.rules || {};
                            t.messages = t.options.messages || {};
                            if (e.required) e.rule.required = true;
                            t.options.setDefaults.rules[e.component.name] = e.rule;
                            t.options.setDefaults.messages[e.component.name] = e.message;
                        }
                        e.component.el = "#" + i.join("_");
                        Lego.create(Lego.UI[e.component.comName], e.component);
                    }
                });
                console.warn("yyyyyyy");
                var r = "click.form_" + this.options.vid, i = this.options.submitEl, a = i instanceof $ ? i : this.$((typeof i == "string" ? i : "") || '[type="submit"]');
                if (this.rules && this.messages) {
                    this.$el.validate(this.options.setDefaults);
                    a.off(r);
                } else {
                    a.off(r).on(r, function(e) {
                        n.submitForm();
                    });
                }
                this.$el.attr("onSubmit", "javascript:return false;");
            }
        }, {
            key: "serializeJson",
            value: function e() {
                var t = {};
                var n = this.$el.serializeArray();
                n.forEach(function(e, n) {
                    if (e.value) {
                        if (t[e.name]) {
                            if (!Array.isArray(t[e.name])) {
                                t[e.name] = [ t[e.name] ];
                            }
                            if (t.indexOf(e.value) < 0) t[e.name].push(e.value);
                        } else {
                            t[e.name] = e.value;
                        }
                    }
                });
                return t;
            }
        }, {
            key: "submitForm",
            value: function e() {
                var t = this.options.format, n = this.options.submitEl, r = n instanceof $ ? n : this.$((typeof n == "string" ? n : "") || '[type="submit"]'), i = this;
                var a = this.serializeJson();
                if (typeof t == "function") a = t(a);
                if (!Object.values(a).length) return false;
                if (!r.hasClass("disabled")) {
                    r.text("提交中...").addClass("disabled");
                }
                return this.options.onSubmit(a);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("forms", g);
    e.exports = g;
}, function(e, t, n) {
    var r, i, a;
    (function(s) {
        if (true) {
            !(i = [ n(135) ], r = s, a = typeof r === "function" ? r.apply(t, i) : r, a !== undefined && (e.exports = a));
        } else if (typeof e === "object" && e.exports) {
            e.exports = s(require("jquery"));
        } else {
            s(jQuery);
        }
    })(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) {
                    if (t && t.debug && window.console) {
                        console.warn("Nothing selected, can't validate, returning nothing.");
                    }
                    return;
                }
                var n = e.data(this[0], "validator");
                if (n) {
                    return n;
                }
                this.attr("novalidate", "novalidate");
                n = new e.validator(t, this[0]);
                e.data(this[0], "validator", n);
                if (n.settings.onsubmit) {
                    this.on("click.validate", ":submit", function(t) {
                        if (n.settings.submitHandler) {
                            n.submitButton = t.target;
                        }
                        if (e(this).hasClass("cancel")) {
                            n.cancelSubmit = true;
                        }
                        if (e(this).attr("formnovalidate") !== undefined) {
                            n.cancelSubmit = true;
                        }
                    });
                    this.on("submit.validate", function(t) {
                        if (n.settings.debug) {
                            t.preventDefault();
                        }
                        function r() {
                            var r, i;
                            if (n.settings.submitHandler) {
                                if (n.submitButton) {
                                    r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm);
                                }
                                i = n.settings.submitHandler.call(n, n.currentForm, t);
                                if (n.submitButton) {
                                    r.remove();
                                }
                                if (i !== undefined) {
                                    return i;
                                }
                                return false;
                            }
                            return true;
                        }
                        if (n.cancelSubmit) {
                            n.cancelSubmit = false;
                            return r();
                        }
                        if (n.form()) {
                            if (n.pendingRequest) {
                                n.formSubmitted = true;
                                return false;
                            }
                            return r();
                        } else {
                            n.focusInvalid();
                            return false;
                        }
                    });
                }
                return n;
            },
            valid: function() {
                var t, n, r;
                if (e(this[0]).is("form")) {
                    t = this.validate().form();
                } else {
                    r = [];
                    t = true;
                    n = e(this[0].form).validate();
                    this.each(function() {
                        t = n.element(this) && t;
                        if (!t) {
                            r = r.concat(n.errorList);
                        }
                    });
                    n.errorList = r;
                }
                return t;
            },
            rules: function(t, n) {
                var r = this[0], i, a, s, o, d, u;
                if (r == null || r.form == null) {
                    return;
                }
                if (t) {
                    i = e.data(r.form, "validator").settings;
                    a = i.rules;
                    s = e.validator.staticRules(r);
                    switch (t) {
                      case "add":
                        e.extend(s, e.validator.normalizeRule(n));
                        delete s.messages;
                        a[r.name] = s;
                        if (n.messages) {
                            i.messages[r.name] = e.extend(i.messages[r.name], n.messages);
                        }
                        break;

                      case "remove":
                        if (!n) {
                            delete a[r.name];
                            return s;
                        }
                        u = {};
                        e.each(n.split(/\s/), function(t, n) {
                            u[n] = s[n];
                            delete s[n];
                            if (n === "required") {
                                e(r).removeAttr("aria-required");
                            }
                        });
                        return u;
                    }
                }
                o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(r), e.validator.attributeRules(r), e.validator.dataRules(r), e.validator.staticRules(r)), r);
                if (o.required) {
                    d = o.required;
                    delete o.required;
                    o = e.extend({
                        required: d
                    }, o);
                    e(r).attr("aria-required", "true");
                }
                if (o.remote) {
                    d = o.remote;
                    delete o.remote;
                    o = e.extend(o, {
                        remote: d
                    });
                }
                return o;
            }
        });
        e.extend(e.expr.pseudos || e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val());
            },
            filled: function(t) {
                var n = e(t).val();
                return n !== null && !!e.trim("" + n);
            },
            unchecked: function(t) {
                return !e(t).prop("checked");
            }
        });
        e.validator = function(t, n) {
            this.settings = e.extend(true, {}, e.validator.defaults, t);
            this.currentForm = n;
            this.init();
        };
        e.validator.format = function(t, n) {
            if (arguments.length === 1) {
                return function() {
                    var n = e.makeArray(arguments);
                    n.unshift(t);
                    return e.validator.format.apply(this, n);
                };
            }
            if (n === undefined) {
                return t;
            }
            if (arguments.length > 2 && n.constructor !== Array) {
                n = e.makeArray(arguments).slice(1);
            }
            if (n.constructor !== Array) {
                n = [ n ];
            }
            e.each(n, function(e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return n;
                });
            });
            return t;
        };
        e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: false,
                focusInvalid: true,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: true,
                ignore: ":hidden",
                ignoreTitle: false,
                onfocusin: function(e) {
                    this.lastActive = e;
                    if (this.settings.focusCleanup) {
                        if (this.settings.unhighlight) {
                            this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass);
                        }
                        this.hideThese(this.errorsFor(e));
                    }
                },
                onfocusout: function(e) {
                    if (!this.checkable(e) && (e.name in this.submitted || !this.optional(e))) {
                        this.element(e);
                    }
                },
                onkeyup: function(t, n) {
                    var r = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                    if (n.which === 9 && this.elementValue(t) === "" || e.inArray(n.keyCode, r) !== -1) {
                        return;
                    } else if (t.name in this.submitted || t.name in this.invalid) {
                        this.element(t);
                    }
                },
                onclick: function(e) {
                    if (e.name in this.submitted) {
                        this.element(e);
                    } else if (e.parentNode.name in this.submitted) {
                        this.element(e.parentNode);
                    }
                },
                highlight: function(t, n, r) {
                    if (t.type === "radio") {
                        this.findByName(t.name).addClass(n).removeClass(r);
                    } else {
                        e(t).addClass(n).removeClass(r);
                    }
                },
                unhighlight: function(t, n, r) {
                    if (t.type === "radio") {
                        this.findByName(t.name).removeClass(n).addClass(r);
                    } else {
                        e(t).removeClass(n).addClass(r);
                    }
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}."),
                step: e.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: false,
            prototype: {
                init: function() {
                    this.labelContainer = e(this.settings.errorLabelContainer);
                    this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm);
                    this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var t = this.groups = {}, n;
                    e.each(this.settings.groups, function(n, r) {
                        if (typeof r === "string") {
                            r = r.split(/\s/);
                        }
                        e.each(r, function(e, r) {
                            t[r] = n;
                        });
                    });
                    n = this.settings.rules;
                    e.each(n, function(t, r) {
                        n[t] = e.validator.normalizeRule(r);
                    });
                    function r(t) {
                        if (!this.form && this.hasAttribute("contenteditable")) {
                            this.form = e(this).closest("form")[0];
                        }
                        var n = e.data(this.form, "validator"), r = "on" + t.type.replace(/^validate/, ""), i = n.settings;
                        if (i[r] && !e(this).is(i.ignore)) {
                            i[r].call(n, this, t);
                        }
                    }
                    e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", r).on("click.validate", "select, option, [type='radio'], [type='checkbox']", r);
                    if (this.settings.invalidHandler) {
                        e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    }
                    e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
                },
                form: function() {
                    this.checkForm();
                    e.extend(this.submitted, this.errorMap);
                    this.invalid = e.extend({}, this.errorMap);
                    if (!this.valid()) {
                        e(this.currentForm).triggerHandler("invalid-form", [ this ]);
                    }
                    this.showErrors();
                    return this.valid();
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
                        this.check(t[e]);
                    }
                    return this.valid();
                },
                element: function(t) {
                    var n = this.clean(t), r = this.validationTargetFor(n), i = this, a = true, s, o;
                    if (r === undefined) {
                        delete this.invalid[n.name];
                    } else {
                        this.prepareElement(r);
                        this.currentElements = e(r);
                        o = this.groups[r.name];
                        if (o) {
                            e.each(this.groups, function(e, t) {
                                if (t === o && e !== r.name) {
                                    n = i.validationTargetFor(i.clean(i.findByName(e)));
                                    if (n && n.name in i.invalid) {
                                        i.currentElements.push(n);
                                        a = i.check(n) && a;
                                    }
                                }
                            });
                        }
                        s = this.check(r) !== false;
                        a = a && s;
                        if (s) {
                            this.invalid[r.name] = false;
                        } else {
                            this.invalid[r.name] = true;
                        }
                        if (!this.numberOfInvalids()) {
                            this.toHide = this.toHide.add(this.containers);
                        }
                        this.showErrors();
                        e(t).attr("aria-invalid", !s);
                    }
                    return a;
                },
                showErrors: function(t) {
                    if (t) {
                        var n = this;
                        e.extend(this.errorMap, t);
                        this.errorList = e.map(this.errorMap, function(e, t) {
                            return {
                                message: e,
                                element: n.findByName(t)[0]
                            };
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t);
                        });
                    }
                    if (this.settings.showErrors) {
                        this.settings.showErrors.call(this, this.errorMap, this.errorList);
                    } else {
                        this.defaultShowErrors();
                    }
                },
                resetForm: function() {
                    if (e.fn.resetForm) {
                        e(this.currentForm).resetForm();
                    }
                    this.invalid = {};
                    this.submitted = {};
                    this.prepareForm();
                    this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t);
                },
                resetElements: function(e) {
                    var t;
                    if (this.settings.unhighlight) {
                        for (t = 0; e[t]; t++) {
                            this.settings.unhighlight.call(this, e[t], this.settings.errorClass, "");
                            this.findByName(e[t].name).removeClass(this.settings.validClass);
                        }
                    } else {
                        e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                    }
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid);
                },
                objectLength: function(e) {
                    var t = 0, n;
                    for (n in e) {
                        if (e[n]) {
                            t++;
                        }
                    }
                    return t;
                },
                hideErrors: function() {
                    this.hideThese(this.toHide);
                },
                hideThese: function(e) {
                    e.not(this.containers).text("");
                    this.addWrapper(e).hide();
                },
                valid: function() {
                    return this.size() === 0;
                },
                size: function() {
                    return this.errorList.length;
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) {
                        try {
                            e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                        } catch (e) {}
                    }
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && e.grep(this.errorList, function(e) {
                        return e.element.name === t.name;
                    }).length === 1 && t;
                },
                elements: function() {
                    var t = this, n = {};
                    return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var r = this.name || e(this).attr("name");
                        if (!r && t.settings.debug && window.console) {
                            console.error("%o has no name assigned", this);
                        }
                        if (this.hasAttribute("contenteditable")) {
                            this.form = e(this).closest("form")[0];
                        }
                        if (r in n || !t.objectLength(e(this).rules())) {
                            return false;
                        }
                        n[r] = true;
                        return true;
                    });
                },
                clean: function(t) {
                    return e(t)[0];
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext);
                },
                resetInternals: function() {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = e([]);
                    this.toHide = e([]);
                },
                reset: function() {
                    this.resetInternals();
                    this.currentElements = e([]);
                },
                prepareForm: function() {
                    this.reset();
                    this.toHide = this.errors().add(this.containers);
                },
                prepareElement: function(e) {
                    this.reset();
                    this.toHide = this.errorsFor(e);
                },
                elementValue: function(t) {
                    var n = e(t), r = t.type, i, a;
                    if (r === "radio" || r === "checkbox") {
                        return this.findByName(t.name).filter(":checked").val();
                    } else if (r === "number" && typeof t.validity !== "undefined") {
                        return t.validity.badInput ? "NaN" : n.val();
                    }
                    if (t.hasAttribute("contenteditable")) {
                        i = n.text();
                    } else {
                        i = n.val();
                    }
                    if (r === "file") {
                        if (i.substr(0, 12) === "C:\\fakepath\\") {
                            return i.substr(12);
                        }
                        a = i.lastIndexOf("/");
                        if (a >= 0) {
                            return i.substr(a + 1);
                        }
                        a = i.lastIndexOf("\\");
                        if (a >= 0) {
                            return i.substr(a + 1);
                        }
                        return i;
                    }
                    if (typeof i === "string") {
                        return i.replace(/\r/g, "");
                    }
                    return i;
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n = e(t).rules(), r = e.map(n, function(e, t) {
                        return t;
                    }).length, i = false, a = this.elementValue(t), s, o, d;
                    if (typeof n.normalizer === "function") {
                        a = n.normalizer.call(t, a);
                        if (typeof a !== "string") {
                            throw new TypeError("The normalizer should return a string value.");
                        }
                        delete n.normalizer;
                    }
                    for (o in n) {
                        d = {
                            method: o,
                            parameters: n[o]
                        };
                        try {
                            s = e.validator.methods[o].call(this, a, t, d.parameters);
                            if (s === "dependency-mismatch" && r === 1) {
                                i = true;
                                continue;
                            }
                            i = false;
                            if (s === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return;
                            }
                            if (!s) {
                                this.formatAndAdd(t, d);
                                return false;
                            }
                        } catch (e) {
                            if (this.settings.debug && window.console) {
                                console.log("Exception occurred when checking element " + t.id + ", check the '" + d.method + "' method.", e);
                            }
                            if (e instanceof TypeError) {
                                e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + d.method + "' method.";
                            }
                            throw e;
                        }
                    }
                    if (i) {
                        return;
                    }
                    if (this.objectLength(n)) {
                        this.successList.push(t);
                    }
                    return true;
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t]);
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++) {
                        if (arguments[e] !== undefined) {
                            return arguments[e];
                        }
                    }
                    return undefined;
                },
                defaultMessage: function(t, n) {
                    if (typeof n === "string") {
                        n = {
                            method: n
                        };
                    }
                    var r = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || undefined, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"), i = /\$?\{(\d+)\}/g;
                    if (typeof r === "function") {
                        r = r.call(this, n.parameters, t);
                    } else if (i.test(r)) {
                        r = e.validator.format(r.replace(i, "{$1}"), n.parameters);
                    }
                    return r;
                },
                formatAndAdd: function(e, t) {
                    var n = this.defaultMessage(e, t);
                    this.errorList.push({
                        message: n,
                        element: e,
                        method: t.method
                    });
                    this.errorMap[e.name] = n;
                    this.submitted[e.name] = n;
                },
                addWrapper: function(e) {
                    if (this.settings.wrapper) {
                        e = e.add(e.parent(this.settings.wrapper));
                    }
                    return e;
                },
                defaultShowErrors: function() {
                    var e, t, n;
                    for (e = 0; this.errorList[e]; e++) {
                        n = this.errorList[e];
                        if (this.settings.highlight) {
                            this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass);
                        }
                        this.showLabel(n.element, n.message);
                    }
                    if (this.errorList.length) {
                        this.toShow = this.toShow.add(this.containers);
                    }
                    if (this.settings.success) {
                        for (e = 0; this.successList[e]; e++) {
                            this.showLabel(this.successList[e]);
                        }
                    }
                    if (this.settings.unhighlight) {
                        for (e = 0, t = this.validElements(); t[e]; e++) {
                            this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        }
                    }
                    this.toHide = this.toHide.not(this.toShow);
                    this.hideErrors();
                    this.addWrapper(this.toShow).show();
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element;
                    });
                },
                showLabel: function(t, n) {
                    var r, i, a, s, o = this.errorsFor(t), d = this.idOrName(t), u = e(t).attr("aria-describedby");
                    if (o.length) {
                        o.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                        o.html(n);
                    } else {
                        o = e("<" + this.settings.errorElement + ">").attr("id", d + "-error").addClass(this.settings.errorClass).html(n || "");
                        r = o;
                        if (this.settings.wrapper) {
                            r = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                        }
                        if (this.labelContainer.length) {
                            this.labelContainer.append(r);
                        } else if (this.settings.errorPlacement) {
                            this.settings.errorPlacement.call(this, r, e(t));
                        } else {
                            r.insertAfter(t);
                        }
                        if (o.is("label")) {
                            o.attr("for", d);
                        } else if (o.parents("label[for='" + this.escapeCssMeta(d) + "']").length === 0) {
                            a = o.attr("id");
                            if (!u) {
                                u = a;
                            } else if (!u.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b"))) {
                                u += " " + a;
                            }
                            e(t).attr("aria-describedby", u);
                            i = this.groups[t.name];
                            if (i) {
                                s = this;
                                e.each(s.groups, function(t, n) {
                                    if (n === i) {
                                        e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", o.attr("id"));
                                    }
                                });
                            }
                        }
                    }
                    if (!n && this.settings.success) {
                        o.text("");
                        if (typeof this.settings.success === "string") {
                            o.addClass(this.settings.success);
                        } else {
                            this.settings.success(o, t);
                        }
                    }
                    this.toShow = this.toShow.add(o);
                },
                errorsFor: function(t) {
                    var n = this.escapeCssMeta(this.idOrName(t)), r = e(t).attr("aria-describedby"), i = "label[for='" + n + "'], label[for='" + n + "'] *";
                    if (r) {
                        i = i + ", #" + this.escapeCssMeta(r).replace(/\s+/g, ", #");
                    }
                    return this.errors().filter(i);
                },
                escapeCssMeta: function(e) {
                    return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
                },
                validationTargetFor: function(t) {
                    if (this.checkable(t)) {
                        t = this.findByName(t.name);
                    }
                    return e(t).not(this.settings.ignore)[0];
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type);
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                      case "select":
                        return e("option:selected", n).length;

                      case "input":
                        if (this.checkable(n)) {
                            return this.findByName(n.name).filter(":checked").length;
                        }
                    }
                    return t.length;
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : true;
                },
                dependTypes: {
                    boolean: function(e) {
                        return e;
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length;
                    },
                    function: function(e, t) {
                        return e(t);
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
                },
                startRequest: function(t) {
                    if (!this.pending[t.name]) {
                        this.pendingRequest++;
                        e(t).addClass(this.settings.pendingClass);
                        this.pending[t.name] = true;
                    }
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--;
                    if (this.pendingRequest < 0) {
                        this.pendingRequest = 0;
                    }
                    delete this.pending[t.name];
                    e(t).removeClass(this.settings.pendingClass);
                    if (n && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                        e(this.currentForm).submit();
                        this.formSubmitted = false;
                    } else if (!n && this.pendingRequest === 0 && this.formSubmitted) {
                        e(this.currentForm).triggerHandler("invalid-form", [ this ]);
                        this.formSubmitted = false;
                    }
                },
                previousValue: function(t, n) {
                    n = typeof n === "string" && n || "remote";
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: true,
                        message: this.defaultMessage(t, {
                            method: n
                        })
                    });
                },
                destroy: function() {
                    this.resetForm();
                    e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
                }
            },
            classRuleSettings: {
                required: {
                    required: true
                },
                email: {
                    email: true
                },
                url: {
                    url: true
                },
                date: {
                    date: true
                },
                dateISO: {
                    dateISO: true
                },
                number: {
                    number: true
                },
                digits: {
                    digits: true
                },
                creditcard: {
                    creditcard: true
                }
            },
            addClassRules: function(t, n) {
                if (t.constructor === String) {
                    this.classRuleSettings[t] = n;
                } else {
                    e.extend(this.classRuleSettings, t);
                }
            },
            classRules: function(t) {
                var n = {}, r = e(t).attr("class");
                if (r) {
                    e.each(r.split(" "), function() {
                        if (this in e.validator.classRuleSettings) {
                            e.extend(n, e.validator.classRuleSettings[this]);
                        }
                    });
                }
                return n;
            },
            normalizeAttributeRule: function(e, t, n, r) {
                if (/min|max|step/.test(n) && (t === null || /number|range|text/.test(t))) {
                    r = Number(r);
                    if (isNaN(r)) {
                        r = undefined;
                    }
                }
                if (r || r === 0) {
                    e[n] = r;
                } else if (t === n && t !== "range") {
                    e[n] = true;
                }
            },
            attributeRules: function(t) {
                var n = {}, r = e(t), i = t.getAttribute("type"), a, s;
                for (a in e.validator.methods) {
                    if (a === "required") {
                        s = t.getAttribute(a);
                        if (s === "") {
                            s = true;
                        }
                        s = !!s;
                    } else {
                        s = r.attr(a);
                    }
                    this.normalizeAttributeRule(n, i, a, s);
                }
                if (n.maxlength && /-1|2147483647|524288/.test(n.maxlength)) {
                    delete n.maxlength;
                }
                return n;
            },
            dataRules: function(t) {
                var n = {}, r = e(t), i = t.getAttribute("type"), a, s;
                for (a in e.validator.methods) {
                    s = r.data("rule" + a.charAt(0).toUpperCase() + a.substring(1).toLowerCase());
                    this.normalizeAttributeRule(n, i, a, s);
                }
                return n;
            },
            staticRules: function(t) {
                var n = {}, r = e.data(t.form, "validator");
                if (r.settings.rules) {
                    n = e.validator.normalizeRule(r.settings.rules[t.name]) || {};
                }
                return n;
            },
            normalizeRules: function(t, n) {
                e.each(t, function(r, i) {
                    if (i === false) {
                        delete t[r];
                        return;
                    }
                    if (i.param || i.depends) {
                        var a = true;
                        switch (typeof i.depends) {
                          case "string":
                            a = !!e(i.depends, n.form).length;
                            break;

                          case "function":
                            a = i.depends.call(n, n);
                            break;
                        }
                        if (a) {
                            t[r] = i.param !== undefined ? i.param : true;
                        } else {
                            e.data(n.form, "validator").resetElements(e(n));
                            delete t[r];
                        }
                    }
                });
                e.each(t, function(r, i) {
                    t[r] = e.isFunction(i) && r !== "normalizer" ? i(n) : i;
                });
                e.each([ "minlength", "maxlength" ], function() {
                    if (t[this]) {
                        t[this] = Number(t[this]);
                    }
                });
                e.each([ "rangelength", "range" ], function() {
                    var n;
                    if (t[this]) {
                        if (e.isArray(t[this])) {
                            t[this] = [ Number(t[this][0]), Number(t[this][1]) ];
                        } else if (typeof t[this] === "string") {
                            n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            t[this] = [ Number(n[0]), Number(n[1]) ];
                        }
                    }
                });
                if (e.validator.autoCreateRanges) {
                    if (t.min != null && t.max != null) {
                        t.range = [ t.min, t.max ];
                        delete t.min;
                        delete t.max;
                    }
                    if (t.minlength != null && t.maxlength != null) {
                        t.rangelength = [ t.minlength, t.maxlength ];
                        delete t.minlength;
                        delete t.maxlength;
                    }
                }
                return t;
            },
            normalizeRule: function(t) {
                if (typeof t === "string") {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = true;
                    });
                    t = n;
                }
                return t;
            },
            addMethod: function(t, n, r) {
                e.validator.methods[t] = n;
                e.validator.messages[t] = r !== undefined ? r : e.validator.messages[t];
                if (n.length < 3) {
                    e.validator.addClassRules(t, e.validator.normalizeRule(t));
                }
            },
            methods: {
                required: function(t, n, r) {
                    if (!this.depend(r, n)) {
                        return "dependency-mismatch";
                    }
                    if (n.nodeName.toLowerCase() === "select") {
                        var i = e(n).val();
                        return i && i.length > 0;
                    }
                    if (this.checkable(n)) {
                        return this.getLength(t, n) > 0;
                    }
                    return t.length > 0;
                },
                email: function(e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
                },
                url: function(e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
                },
                number: function(e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e);
                },
                minlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || i >= r;
                },
                maxlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || i <= r;
                },
                rangelength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || i >= r[0] && i <= r[1];
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n;
                },
                max: function(e, t, n) {
                    return this.optional(t) || e <= n;
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1];
                },
                step: function(t, n, r) {
                    var i = e(n).attr("type"), a = "Step attribute on input type " + i + " is not supported.", s = [ "text", "number", "range" ], o = new RegExp("\\b" + i + "\\b"), d = i && !o.test(s.join()), u = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        if (!t) {
                            return 0;
                        }
                        return t[1] ? t[1].length : 0;
                    }, l = function(e) {
                        return Math.round(e * Math.pow(10, c));
                    }, f = true, c;
                    if (d) {
                        throw new Error(a);
                    }
                    c = u(r);
                    if (u(t) > c || l(t) % l(r) !== 0) {
                        f = false;
                    }
                    return this.optional(n) || f;
                },
                equalTo: function(t, n, r) {
                    var i = e(r);
                    if (this.settings.onfocusout && i.not(".validate-equalTo-blur").length) {
                        i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                            e(n).valid();
                        });
                    }
                    return t === i.val();
                },
                remote: function(t, n, r, i) {
                    if (this.optional(n)) {
                        return "dependency-mismatch";
                    }
                    i = typeof i === "string" && i || "remote";
                    var a = this.previousValue(n, i), s, o, d;
                    if (!this.settings.messages[n.name]) {
                        this.settings.messages[n.name] = {};
                    }
                    a.originalMessage = a.originalMessage || this.settings.messages[n.name][i];
                    this.settings.messages[n.name][i] = a.message;
                    r = typeof r === "string" && {
                        url: r
                    } || r;
                    d = e.param(e.extend({
                        data: t
                    }, r.data));
                    if (a.old === d) {
                        return a.valid;
                    }
                    a.old = d;
                    s = this;
                    this.startRequest(n);
                    o = {};
                    o[n.name] = t;
                    e.ajax(e.extend(true, {
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: s.currentForm,
                        success: function(e) {
                            var r = e === true || e === "true", o, d, u;
                            s.settings.messages[n.name][i] = a.originalMessage;
                            if (r) {
                                u = s.formSubmitted;
                                s.resetInternals();
                                s.toHide = s.errorsFor(n);
                                s.formSubmitted = u;
                                s.successList.push(n);
                                s.invalid[n.name] = false;
                                s.showErrors();
                            } else {
                                o = {};
                                d = e || s.defaultMessage(n, {
                                    method: i,
                                    parameters: t
                                });
                                o[n.name] = a.message = d;
                                s.invalid[n.name] = true;
                                s.showErrors(o);
                            }
                            a.valid = r;
                            s.stopRequest(n, r);
                        }
                    }, r));
                    return "pending";
                }
            }
        });
        var t = {}, n;
        if (e.ajaxPrefilter) {
            e.ajaxPrefilter(function(e, n, r) {
                var i = e.port;
                if (e.mode === "abort") {
                    if (t[i]) {
                        t[i].abort();
                    }
                    t[i] = r;
                }
            });
        } else {
            n = e.ajax;
            e.ajax = function(r) {
                var i = ("mode" in r ? r : e.ajaxSettings).mode, a = ("port" in r ? r : e.ajaxSettings).port;
                if (i === "abort") {
                    if (t[a]) {
                        t[a].abort();
                    }
                    t[a] = n.apply(this, arguments);
                    return t[a];
                }
                return n.apply(this, arguments);
            };
        }
        return e;
    });
}, function(e, t, n) {
    var r, i;
    (function(t, n) {
        "use strict";
        if (typeof e === "object" && typeof e.exports === "object") {
            e.exports = t.document ? n(t, true) : function(e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return n(e);
            };
        } else {
            n(t);
        }
    })(typeof window !== "undefined" ? window : this, function(n, a) {
        "use strict";
        var s = [];
        var o = n.document;
        var d = Object.getPrototypeOf;
        var u = s.slice;
        var l = s.concat;
        var f = s.push;
        var c = s.indexOf;
        var m = {};
        var _ = m.toString;
        var h = m.hasOwnProperty;
        var p = h.toString;
        var y = p.call(Object);
        var g = {};
        function v(e, t) {
            t = t || o;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n);
        }
        var M = "3.1.1", L = function(e, t) {
            return new L.fn.init(e, t);
        }, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^-ms-/, Y = /-([a-z])/g, k = function(e, t) {
            return t.toUpperCase();
        };
        L.fn = L.prototype = {
            jquery: M,
            constructor: L,
            length: 0,
            toArray: function() {
                return u.call(this);
            },
            get: function(e) {
                if (e == null) {
                    return u.call(this);
                }
                return e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function(e) {
                var t = L.merge(this.constructor(), e);
                t.prevObject = this;
                return t;
            },
            each: function(e) {
                return L.each(this, e);
            },
            map: function(e) {
                return this.pushStack(L.map(this, function(t, n) {
                    return e.call(t, n, t);
                }));
            },
            slice: function() {
                return this.pushStack(u.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: f,
            sort: s.sort,
            splice: s.splice
        };
        L.extend = L.fn.extend = function() {
            var e, t, n, r, i, a, s = arguments[0] || {}, o = 1, d = arguments.length, u = false;
            if (typeof s === "boolean") {
                u = s;
                s = arguments[o] || {};
                o++;
            }
            if (typeof s !== "object" && !L.isFunction(s)) {
                s = {};
            }
            if (o === d) {
                s = this;
                o--;
            }
            for (;o < d; o++) {
                if ((e = arguments[o]) != null) {
                    for (t in e) {
                        n = s[t];
                        r = e[t];
                        if (s === r) {
                            continue;
                        }
                        if (u && r && (L.isPlainObject(r) || (i = L.isArray(r)))) {
                            if (i) {
                                i = false;
                                a = n && L.isArray(n) ? n : [];
                            } else {
                                a = n && L.isPlainObject(n) ? n : {};
                            }
                            s[t] = L.extend(u, a, r);
                        } else if (r !== undefined) {
                            s[t] = r;
                        }
                    }
                }
            }
            return s;
        };
        L.extend({
            expando: "jQuery" + (M + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isFunction: function(e) {
                return L.type(e) === "function";
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window;
            },
            isNumeric: function(e) {
                var t = L.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || _.call(e) !== "[object Object]") {
                    return false;
                }
                t = d(e);
                if (!t) {
                    return true;
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && p.call(n) === y;
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) {
                    return false;
                }
                return true;
            },
            type: function(e) {
                if (e == null) {
                    return e + "";
                }
                return typeof e === "object" || typeof e === "function" ? m[_.call(e)] || "object" : typeof e;
            },
            globalEval: function(e) {
                v(e);
            },
            camelCase: function(e) {
                return e.replace(w, "ms-").replace(Y, k);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function(e, t) {
                var n, r = 0;
                if (D(e)) {
                    n = e.length;
                    for (;r < n; r++) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break;
                        }
                    }
                } else {
                    for (r in e) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break;
                        }
                    }
                }
                return e;
            },
            trim: function(e) {
                return e == null ? "" : (e + "").replace(b, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (D(Object(e))) {
                        L.merge(n, typeof e === "string" ? [ e ] : e);
                    } else {
                        f.call(n, e);
                    }
                }
                return n;
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : c.call(t, e, n);
            },
            merge: function(e, t) {
                var n = +t.length, r = 0, i = e.length;
                for (;r < n; r++) {
                    e[i++] = t[r];
                }
                e.length = i;
                return e;
            },
            grep: function(e, t, n) {
                var r, i = [], a = 0, s = e.length, o = !n;
                for (;a < s; a++) {
                    r = !t(e[a], a);
                    if (r !== o) {
                        i.push(e[a]);
                    }
                }
                return i;
            },
            map: function(e, t, n) {
                var r, i, a = 0, s = [];
                if (D(e)) {
                    r = e.length;
                    for (;a < r; a++) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            s.push(i);
                        }
                    }
                } else {
                    for (a in e) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            s.push(i);
                        }
                    }
                }
                return l.apply([], s);
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n;
                }
                if (!L.isFunction(e)) {
                    return undefined;
                }
                r = u.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)));
                };
                i.guid = e.guid = e.guid || L.guid++;
                return i;
            },
            now: Date.now,
            support: g
        });
        if (typeof Symbol === "function") {
            L.fn[Symbol.iterator] = s[Symbol.iterator];
        }
        L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            m["[object " + t + "]"] = t.toLowerCase();
        });
        function D(e) {
            var t = !!e && "length" in e && e.length, n = L.type(e);
            if (n === "function" || L.isWindow(e)) {
                return false;
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e;
        }
        var T = function(e) {
            var t, n, r, i, a, s, o, d, u, l, f, c, m, _, h, p, y, g, v, M = "sizzle" + 1 * new Date(), L = e.document, b = 0, w = 0, Y = se(), k = se(), D = se(), T = function(e, t) {
                if (e === t) {
                    f = true;
                }
                return 0;
            }, x = {}.hasOwnProperty, S = [], j = S.pop, H = S.push, C = S.push, P = S.slice, E = function(e, t) {
                var n = 0, r = e.length;
                for (;n < r; n++) {
                    if (e[n] === t) {
                        return n;
                    }
                }
                return -1;
            }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", A = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", F = "\\[" + A + "*(" + W + ")(?:" + A + "*([*^$|!~]?=)" + A + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + A + "*\\]", N = ":(" + W + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|" + ".*" + ")\\)|)", z = new RegExp(A + "+", "g"), $ = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g"), I = new RegExp("^" + A + "*," + A + "*"), R = new RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*"), q = new RegExp("=" + A + "*([^\\]'\"]*?)" + A + "*\\]", "g"), J = new RegExp(N), B = new RegExp("^" + W + "$"), U = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + A + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)", "i")
            }, V = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/, Q = new RegExp("\\\\([\\da-f]{1,6}" + A + "?|(" + A + ")|.)", "ig"), ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320);
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                if (t) {
                    if (e === "\0") {
                        return "�";
                    }
                    return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ";
                }
                return "\\" + e;
            }, re = function() {
                c();
            }, ie = ge(function(e) {
                return e.disabled === true && ("form" in e || "label" in e);
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                C.apply(S = P.call(L.childNodes), L.childNodes);
                S[L.childNodes.length].nodeType;
            } catch (e) {
                C = {
                    apply: S.length ? function(e, t) {
                        H.apply(e, P.call(t));
                    } : function(e, t) {
                        var n = e.length, r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1;
                    }
                };
            }
            function ae(e, t, r, i) {
                var a, o, u, l, f, _, y, g = t && t.ownerDocument, b = t ? t.nodeType : 9;
                r = r || [];
                if (typeof e !== "string" || !e || b !== 1 && b !== 9 && b !== 11) {
                    return r;
                }
                if (!i) {
                    if ((t ? t.ownerDocument || t : L) !== m) {
                        c(t);
                    }
                    t = t || m;
                    if (h) {
                        if (b !== 11 && (f = K.exec(e))) {
                            if (a = f[1]) {
                                if (b === 9) {
                                    if (u = t.getElementById(a)) {
                                        if (u.id === a) {
                                            r.push(u);
                                            return r;
                                        }
                                    } else {
                                        return r;
                                    }
                                } else {
                                    if (g && (u = g.getElementById(a)) && v(t, u) && u.id === a) {
                                        r.push(u);
                                        return r;
                                    }
                                }
                            } else if (f[2]) {
                                C.apply(r, t.getElementsByTagName(e));
                                return r;
                            } else if ((a = f[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                                C.apply(r, t.getElementsByClassName(a));
                                return r;
                            }
                        }
                        if (n.qsa && !D[e + " "] && (!p || !p.test(e))) {
                            if (b !== 1) {
                                g = t;
                                y = e;
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (l = t.getAttribute("id")) {
                                    l = l.replace(te, ne);
                                } else {
                                    t.setAttribute("id", l = M);
                                }
                                _ = s(e);
                                o = _.length;
                                while (o--) {
                                    _[o] = "#" + l + " " + ye(_[o]);
                                }
                                y = _.join(",");
                                g = X.test(e) && he(t.parentNode) || t;
                            }
                            if (y) {
                                try {
                                    C.apply(r, g.querySelectorAll(y));
                                    return r;
                                } catch (e) {} finally {
                                    if (l === M) {
                                        t.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }
                return d(e.replace($, "$1"), t, r, i);
            }
            function se() {
                var e = [];
                function t(n, i) {
                    if (e.push(n + " ") > r.cacheLength) {
                        delete t[e.shift()];
                    }
                    return t[n + " "] = i;
                }
                return t;
            }
            function oe(e) {
                e[M] = true;
                return e;
            }
            function de(e) {
                var t = m.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return false;
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t);
                    }
                    t = null;
                }
            }
            function ue(e, t) {
                var n = e.split("|"), i = n.length;
                while (i--) {
                    r.attrHandle[n[i]] = t;
                }
            }
            function le(e, t) {
                var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (r) {
                    return r;
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1;
                        }
                    }
                }
                return e ? 1 : -1;
            }
            function fe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e;
                };
            }
            function ce(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e;
                };
            }
            function me(e) {
                return function(t) {
                    if ("form" in t) {
                        if (t.parentNode && t.disabled === false) {
                            if ("label" in t) {
                                if ("label" in t.parentNode) {
                                    return t.parentNode.disabled === e;
                                } else {
                                    return t.disabled === e;
                                }
                            }
                            return t.isDisabled === e || t.isDisabled !== !e && ie(t) === e;
                        }
                        return t.disabled === e;
                    } else if ("label" in t) {
                        return t.disabled === e;
                    }
                    return false;
                };
            }
            function _e(e) {
                return oe(function(t) {
                    t = +t;
                    return oe(function(n, r) {
                        var i, a = e([], n.length, t), s = a.length;
                        while (s--) {
                            if (n[i = a[s]]) {
                                n[i] = !(r[i] = n[i]);
                            }
                        }
                    });
                });
            }
            function he(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e;
            }
            n = ae.support = {};
            a = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false;
            };
            c = ae.setDocument = function(e) {
                var t, i, s = e ? e.ownerDocument || e : L;
                if (s === m || s.nodeType !== 9 || !s.documentElement) {
                    return m;
                }
                m = s;
                _ = m.documentElement;
                h = !a(m);
                if (L !== m && (i = m.defaultView) && i.top !== i) {
                    if (i.addEventListener) {
                        i.addEventListener("unload", re, false);
                    } else if (i.attachEvent) {
                        i.attachEvent("onunload", re);
                    }
                }
                n.attributes = de(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className");
                });
                n.getElementsByTagName = de(function(e) {
                    e.appendChild(m.createComment(""));
                    return !e.getElementsByTagName("*").length;
                });
                n.getElementsByClassName = Z.test(m.getElementsByClassName);
                n.getById = de(function(e) {
                    _.appendChild(e).id = M;
                    return !m.getElementsByName || !m.getElementsByName(M).length;
                });
                if (n.getById) {
                    r.filter["ID"] = function(e) {
                        var t = e.replace(Q, ee);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    };
                    r.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && h) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    };
                } else {
                    r.filter["ID"] = function(e) {
                        var t = e.replace(Q, ee);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    };
                    r.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && h) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                n = a.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [ a ];
                                }
                                i = t.getElementsByName(e);
                                r = 0;
                                while (a = i[r++]) {
                                    n = a.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [ a ];
                                    }
                                }
                            }
                            return [];
                        }
                    };
                }
                r.find["TAG"] = n.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e);
                    } else if (n.qsa) {
                        return t.querySelectorAll(e);
                    }
                } : function(e, t) {
                    var n, r = [], i = 0, a = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = a[i++]) {
                            if (n.nodeType === 1) {
                                r.push(n);
                            }
                        }
                        return r;
                    }
                    return a;
                };
                r.find["CLASS"] = n.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && h) {
                        return t.getElementsByClassName(e);
                    }
                };
                y = [];
                p = [];
                if (n.qsa = Z.test(m.querySelectorAll)) {
                    de(function(e) {
                        _.appendChild(e).innerHTML = "<a id='" + M + "'></a>" + "<select id='" + M + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            p.push("[*^$]=" + A + "*(?:''|\"\")");
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            p.push("\\[" + A + "*(?:value|" + O + ")");
                        }
                        if (!e.querySelectorAll("[id~=" + M + "-]").length) {
                            p.push("~=");
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            p.push(":checked");
                        }
                        if (!e.querySelectorAll("a#" + M + "+*").length) {
                            p.push(".#.+[+~]");
                        }
                    });
                    de(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = m.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            p.push("name" + A + "*[*^$|!~]?=");
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            p.push(":enabled", ":disabled");
                        }
                        _.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            p.push(":enabled", ":disabled");
                        }
                        e.querySelectorAll("*,:x");
                        p.push(",.*:");
                    });
                }
                if (n.matchesSelector = Z.test(g = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) {
                    de(function(e) {
                        n.disconnectedMatch = g.call(e, "*");
                        g.call(e, "[s!='']:x");
                        y.push("!=", N);
                    });
                }
                p = p.length && new RegExp(p.join("|"));
                y = y.length && new RegExp(y.join("|"));
                t = Z.test(_.compareDocumentPosition);
                v = t || Z.test(_.contains) ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                T = t ? function(e, t) {
                    if (e === t) {
                        f = true;
                        return 0;
                    }
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (r) {
                        return r;
                    }
                    r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r) {
                        if (e === m || e.ownerDocument === L && v(L, e)) {
                            return -1;
                        }
                        if (t === m || t.ownerDocument === L && v(L, t)) {
                            return 1;
                        }
                        return l ? E(l, e) - E(l, t) : 0;
                    }
                    return r & 4 ? -1 : 1;
                } : function(e, t) {
                    if (e === t) {
                        f = true;
                        return 0;
                    }
                    var n, r = 0, i = e.parentNode, a = t.parentNode, s = [ e ], o = [ t ];
                    if (!i || !a) {
                        return e === m ? -1 : t === m ? 1 : i ? -1 : a ? 1 : l ? E(l, e) - E(l, t) : 0;
                    } else if (i === a) {
                        return le(e, t);
                    }
                    n = e;
                    while (n = n.parentNode) {
                        s.unshift(n);
                    }
                    n = t;
                    while (n = n.parentNode) {
                        o.unshift(n);
                    }
                    while (s[r] === o[r]) {
                        r++;
                    }
                    return r ? le(s[r], o[r]) : s[r] === L ? -1 : o[r] === L ? 1 : 0;
                };
                return m;
            };
            ae.matches = function(e, t) {
                return ae(e, null, null, t);
            };
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== m) {
                    c(e);
                }
                t = t.replace(q, "='$1']");
                if (n.matchesSelector && h && !D[t + " "] && (!y || !y.test(t)) && (!p || !p.test(t))) {
                    try {
                        var r = g.call(e, t);
                        if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return r;
                        }
                    } catch (e) {}
                }
                return ae(t, m, null, [ e ]).length > 0;
            };
            ae.contains = function(e, t) {
                if ((e.ownerDocument || e) !== m) {
                    c(e);
                }
                return v(e, t);
            };
            ae.attr = function(e, t) {
                if ((e.ownerDocument || e) !== m) {
                    c(e);
                }
                var i = r.attrHandle[t.toLowerCase()], a = i && x.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !h) : undefined;
                return a !== undefined ? a : n.attributes || !h ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
            };
            ae.escape = function(e) {
                return (e + "").replace(te, ne);
            };
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            };
            ae.uniqueSort = function(e) {
                var t, r = [], i = 0, a = 0;
                f = !n.detectDuplicates;
                l = !n.sortStable && e.slice(0);
                e.sort(T);
                if (f) {
                    while (t = e[a++]) {
                        if (t === e[a]) {
                            i = r.push(a);
                        }
                    }
                    while (i--) {
                        e.splice(r[i], 1);
                    }
                }
                l = null;
                return e;
            };
            i = ae.getText = function(e) {
                var t, n = "", r = 0, a = e.nodeType;
                if (!a) {
                    while (t = e[r++]) {
                        n += i(t);
                    }
                } else if (a === 1 || a === 9 || a === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent;
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += i(e);
                        }
                    }
                } else if (a === 3 || a === 4) {
                    return e.nodeValue;
                }
                return n;
            };
            r = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(Q, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " ";
                        }
                        return e.slice(0, 4);
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ae.error(e[0]);
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd");
                        } else if (e[3]) {
                            ae.error(e[0]);
                        }
                        return e;
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        if (U["CHILD"].test(e[0])) {
                            return null;
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || "";
                        } else if (n && J.test(n) && (t = s(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t);
                        }
                        return e.slice(0, 3);
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Q, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true;
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                    },
                    CLASS: function(e) {
                        var t = Y[e + " "];
                        return t || (t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) && Y(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ae.attr(r, e);
                            if (i == null) {
                                return t === "!=";
                            }
                            if (!t) {
                                return true;
                            }
                            i += "";
                            return t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : false;
                        };
                    },
                    CHILD: function(e, t, n, r, i) {
                        var a = e.slice(0, 3) !== "nth", s = e.slice(-4) !== "last", o = t === "of-type";
                        return r === 1 && i === 0 ? function(e) {
                            return !!e.parentNode;
                        } : function(t, n, d) {
                            var u, l, f, c, m, _, h = a !== s ? "nextSibling" : "previousSibling", p = t.parentNode, y = o && t.nodeName.toLowerCase(), g = !d && !o, v = false;
                            if (p) {
                                if (a) {
                                    while (h) {
                                        c = t;
                                        while (c = c[h]) {
                                            if (o ? c.nodeName.toLowerCase() === y : c.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        _ = h = e === "only" && !_ && "nextSibling";
                                    }
                                    return true;
                                }
                                _ = [ s ? p.firstChild : p.lastChild ];
                                if (s && g) {
                                    c = p;
                                    f = c[M] || (c[M] = {});
                                    l = f[c.uniqueID] || (f[c.uniqueID] = {});
                                    u = l[e] || [];
                                    m = u[0] === b && u[1];
                                    v = m && u[2];
                                    c = m && p.childNodes[m];
                                    while (c = ++m && c && c[h] || (v = m = 0) || _.pop()) {
                                        if (c.nodeType === 1 && ++v && c === t) {
                                            l[e] = [ b, m, v ];
                                            break;
                                        }
                                    }
                                } else {
                                    if (g) {
                                        c = t;
                                        f = c[M] || (c[M] = {});
                                        l = f[c.uniqueID] || (f[c.uniqueID] = {});
                                        u = l[e] || [];
                                        m = u[0] === b && u[1];
                                        v = m;
                                    }
                                    if (v === false) {
                                        while (c = ++m && c && c[h] || (v = m = 0) || _.pop()) {
                                            if ((o ? c.nodeName.toLowerCase() === y : c.nodeType === 1) && ++v) {
                                                if (g) {
                                                    f = c[M] || (c[M] = {});
                                                    l = f[c.uniqueID] || (f[c.uniqueID] = {});
                                                    l[e] = [ b, v ];
                                                }
                                                if (c === t) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                v -= i;
                                return v === r || v % r === 0 && v / r >= 0;
                            }
                        };
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (i[M]) {
                            return i(t);
                        }
                        if (i.length > 1) {
                            n = [ e, e, "", t ];
                            return r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, n) {
                                var r, a = i(e, t), s = a.length;
                                while (s--) {
                                    r = E(e, a[s]);
                                    e[r] = !(n[r] = a[s]);
                                }
                            }) : function(e) {
                                return i(e, 0, n);
                            };
                        }
                        return i;
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var t = [], n = [], r = o(e.replace($, "$1"));
                        return r[M] ? oe(function(e, t, n, i) {
                            var a, s = r(e, null, i, []), o = e.length;
                            while (o--) {
                                if (a = s[o]) {
                                    e[o] = !(t[o] = a);
                                }
                            }
                        }) : function(e, i, a) {
                            t[0] = e;
                            r(t, null, a, n);
                            t[0] = null;
                            return !n.pop();
                        };
                    }),
                    has: oe(function(e) {
                        return function(t) {
                            return ae(e, t).length > 0;
                        };
                    }),
                    contains: oe(function(e) {
                        e = e.replace(Q, ee);
                        return function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                        };
                    }),
                    lang: oe(function(e) {
                        if (!B.test(e || "")) {
                            ae.error("unsupported lang: " + e);
                        }
                        e = e.replace(Q, ee).toLowerCase();
                        return function(t) {
                            var n;
                            do {
                                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                    n = n.toLowerCase();
                                    return n === e || n.indexOf(e + "-") === 0;
                                }
                            } while ((t = t.parentNode) && t.nodeType === 1);
                            return false;
                        };
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function(e) {
                        return e === _;
                    },
                    focus: function(e) {
                        return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: me(false),
                    disabled: me(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected;
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex;
                        }
                        return e.selected === true;
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    parent: function(e) {
                        return !r.pseudos["empty"](e);
                    },
                    header: function(e) {
                        return G.test(e.nodeName);
                    },
                    input: function(e) {
                        return V.test(e.nodeName);
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button";
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
                    },
                    first: _e(function() {
                        return [ 0 ];
                    }),
                    last: _e(function(e, t) {
                        return [ t - 1 ];
                    }),
                    eq: _e(function(e, t, n) {
                        return [ n < 0 ? n + t : n ];
                    }),
                    even: _e(function(e, t) {
                        var n = 0;
                        for (;n < t; n += 2) {
                            e.push(n);
                        }
                        return e;
                    }),
                    odd: _e(function(e, t) {
                        var n = 1;
                        for (;n < t; n += 2) {
                            e.push(n);
                        }
                        return e;
                    }),
                    lt: _e(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (;--r >= 0; ) {
                            e.push(r);
                        }
                        return e;
                    }),
                    gt: _e(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (;++r < t; ) {
                            e.push(r);
                        }
                        return e;
                    })
                }
            };
            r.pseudos["nth"] = r.pseudos["eq"];
            for (t in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                r.pseudos[t] = fe(t);
            }
            for (t in {
                submit: true,
                reset: true
            }) {
                r.pseudos[t] = ce(t);
            }
            function pe() {}
            pe.prototype = r.filters = r.pseudos;
            r.setFilters = new pe();
            s = ae.tokenize = function(e, t) {
                var n, i, a, s, o, d, u, l = k[e + " "];
                if (l) {
                    return t ? 0 : l.slice(0);
                }
                o = e;
                d = [];
                u = r.preFilter;
                while (o) {
                    if (!n || (i = I.exec(o))) {
                        if (i) {
                            o = o.slice(i[0].length) || o;
                        }
                        d.push(a = []);
                    }
                    n = false;
                    if (i = R.exec(o)) {
                        n = i.shift();
                        a.push({
                            value: n,
                            type: i[0].replace($, " ")
                        });
                        o = o.slice(n.length);
                    }
                    for (s in r.filter) {
                        if ((i = U[s].exec(o)) && (!u[s] || (i = u[s](i)))) {
                            n = i.shift();
                            a.push({
                                value: n,
                                type: s,
                                matches: i
                            });
                            o = o.slice(n.length);
                        }
                    }
                    if (!n) {
                        break;
                    }
                }
                return t ? o.length : o ? ae.error(e) : k(e, d).slice(0);
            };
            function ye(e) {
                var t = 0, n = e.length, r = "";
                for (;t < n; t++) {
                    r += e[t].value;
                }
                return r;
            }
            function ge(e, t, n) {
                var r = t.dir, i = t.next, a = i || r, s = n && a === "parentNode", o = w++;
                return t.first ? function(t, n, i) {
                    while (t = t[r]) {
                        if (t.nodeType === 1 || s) {
                            return e(t, n, i);
                        }
                    }
                    return false;
                } : function(t, n, d) {
                    var u, l, f, c = [ b, o ];
                    if (d) {
                        while (t = t[r]) {
                            if (t.nodeType === 1 || s) {
                                if (e(t, n, d)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while (t = t[r]) {
                            if (t.nodeType === 1 || s) {
                                f = t[M] || (t[M] = {});
                                l = f[t.uniqueID] || (f[t.uniqueID] = {});
                                if (i && i === t.nodeName.toLowerCase()) {
                                    t = t[r] || t;
                                } else if ((u = l[a]) && u[0] === b && u[1] === o) {
                                    return c[2] = u[2];
                                } else {
                                    l[a] = c;
                                    if (c[2] = e(t, n, d)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                };
            }
            function ve(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--) {
                        if (!e[i](t, n, r)) {
                            return false;
                        }
                    }
                    return true;
                } : e[0];
            }
            function Me(e, t, n) {
                var r = 0, i = t.length;
                for (;r < i; r++) {
                    ae(e, t[r], n);
                }
                return n;
            }
            function Le(e, t, n, r, i) {
                var a, s = [], o = 0, d = e.length, u = t != null;
                for (;o < d; o++) {
                    if (a = e[o]) {
                        if (!n || n(a, r, i)) {
                            s.push(a);
                            if (u) {
                                t.push(o);
                            }
                        }
                    }
                }
                return s;
            }
            function be(e, t, n, r, i, a) {
                if (r && !r[M]) {
                    r = be(r);
                }
                if (i && !i[M]) {
                    i = be(i, a);
                }
                return oe(function(a, s, o, d) {
                    var u, l, f, c = [], m = [], _ = s.length, h = a || Me(t || "*", o.nodeType ? [ o ] : o, []), p = e && (a || !t) ? Le(h, c, e, o, d) : h, y = n ? i || (a ? e : _ || r) ? [] : s : p;
                    if (n) {
                        n(p, y, o, d);
                    }
                    if (r) {
                        u = Le(y, m);
                        r(u, [], o, d);
                        l = u.length;
                        while (l--) {
                            if (f = u[l]) {
                                y[m[l]] = !(p[m[l]] = f);
                            }
                        }
                    }
                    if (a) {
                        if (i || e) {
                            if (i) {
                                u = [];
                                l = y.length;
                                while (l--) {
                                    if (f = y[l]) {
                                        u.push(p[l] = f);
                                    }
                                }
                                i(null, y = [], u, d);
                            }
                            l = y.length;
                            while (l--) {
                                if ((f = y[l]) && (u = i ? E(a, f) : c[l]) > -1) {
                                    a[u] = !(s[u] = f);
                                }
                            }
                        }
                    } else {
                        y = Le(y === s ? y.splice(_, y.length) : y);
                        if (i) {
                            i(null, s, y, d);
                        } else {
                            C.apply(s, y);
                        }
                    }
                });
            }
            function we(e) {
                var t, n, i, a = e.length, s = r.relative[e[0].type], o = s || r.relative[" "], d = s ? 1 : 0, l = ge(function(e) {
                    return e === t;
                }, o, true), f = ge(function(e) {
                    return E(t, e) > -1;
                }, o, true), c = [ function(e, n, r) {
                    var i = !s && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    t = null;
                    return i;
                } ];
                for (;d < a; d++) {
                    if (n = r.relative[e[d].type]) {
                        c = [ ge(ve(c), n) ];
                    } else {
                        n = r.filter[e[d].type].apply(null, e[d].matches);
                        if (n[M]) {
                            i = ++d;
                            for (;i < a; i++) {
                                if (r.relative[e[i].type]) {
                                    break;
                                }
                            }
                            return be(d > 1 && ve(c), d > 1 && ye(e.slice(0, d - 1).concat({
                                value: e[d - 2].type === " " ? "*" : ""
                            })).replace($, "$1"), n, d < i && we(e.slice(d, i)), i < a && we(e = e.slice(i)), i < a && ye(e));
                        }
                        c.push(n);
                    }
                }
                return ve(c);
            }
            function Ye(e, t) {
                var n = t.length > 0, i = e.length > 0, a = function(a, s, o, d, l) {
                    var f, _, p, y = 0, g = "0", v = a && [], M = [], L = u, w = a || i && r.find["TAG"]("*", l), Y = b += L == null ? 1 : Math.random() || .1, k = w.length;
                    if (l) {
                        u = s === m || s || l;
                    }
                    for (;g !== k && (f = w[g]) != null; g++) {
                        if (i && f) {
                            _ = 0;
                            if (!s && f.ownerDocument !== m) {
                                c(f);
                                o = !h;
                            }
                            while (p = e[_++]) {
                                if (p(f, s || m, o)) {
                                    d.push(f);
                                    break;
                                }
                            }
                            if (l) {
                                b = Y;
                            }
                        }
                        if (n) {
                            if (f = !p && f) {
                                y--;
                            }
                            if (a) {
                                v.push(f);
                            }
                        }
                    }
                    y += g;
                    if (n && g !== y) {
                        _ = 0;
                        while (p = t[_++]) {
                            p(v, M, s, o);
                        }
                        if (a) {
                            if (y > 0) {
                                while (g--) {
                                    if (!(v[g] || M[g])) {
                                        M[g] = j.call(d);
                                    }
                                }
                            }
                            M = Le(M);
                        }
                        C.apply(d, M);
                        if (l && !a && M.length > 0 && y + t.length > 1) {
                            ae.uniqueSort(d);
                        }
                    }
                    if (l) {
                        b = Y;
                        u = L;
                    }
                    return v;
                };
                return n ? oe(a) : a;
            }
            o = ae.compile = function(e, t) {
                var n, r = [], i = [], a = D[e + " "];
                if (!a) {
                    if (!t) {
                        t = s(e);
                    }
                    n = t.length;
                    while (n--) {
                        a = we(t[n]);
                        if (a[M]) {
                            r.push(a);
                        } else {
                            i.push(a);
                        }
                    }
                    a = D(e, Ye(i, r));
                    a.selector = e;
                }
                return a;
            };
            d = ae.select = function(e, t, n, i) {
                var a, d, u, l, f, c = typeof e === "function" && e, m = !i && s(e = c.selector || e);
                n = n || [];
                if (m.length === 1) {
                    d = m[0] = m[0].slice(0);
                    if (d.length > 2 && (u = d[0]).type === "ID" && t.nodeType === 9 && h && r.relative[d[1].type]) {
                        t = (r.find["ID"](u.matches[0].replace(Q, ee), t) || [])[0];
                        if (!t) {
                            return n;
                        } else if (c) {
                            t = t.parentNode;
                        }
                        e = e.slice(d.shift().value.length);
                    }
                    a = U["needsContext"].test(e) ? 0 : d.length;
                    while (a--) {
                        u = d[a];
                        if (r.relative[l = u.type]) {
                            break;
                        }
                        if (f = r.find[l]) {
                            if (i = f(u.matches[0].replace(Q, ee), X.test(d[0].type) && he(t.parentNode) || t)) {
                                d.splice(a, 1);
                                e = i.length && ye(d);
                                if (!e) {
                                    C.apply(n, i);
                                    return n;
                                }
                                break;
                            }
                        }
                    }
                }
                (c || o(e, m))(i, t, !h, n, !t || X.test(e) && he(t.parentNode) || t);
                return n;
            };
            n.sortStable = M.split("").sort(T).join("") === M;
            n.detectDuplicates = !!f;
            c();
            n.sortDetached = de(function(e) {
                return e.compareDocumentPosition(m.createElement("fieldset")) & 1;
            });
            if (!de(function(e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild.getAttribute("href") === "#";
            })) {
                ue("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!n.attributes || !de(function(e) {
                e.innerHTML = "<input/>";
                e.firstChild.setAttribute("value", "");
                return e.firstChild.getAttribute("value") === "";
            })) {
                ue("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue;
                    }
                });
            }
            if (!de(function(e) {
                return e.getAttribute("disabled") == null;
            })) {
                ue(O, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                    }
                });
            }
            return ae;
        }(n);
        L.find = T;
        L.expr = T.selectors;
        L.expr[":"] = L.expr.pseudos;
        L.uniqueSort = L.unique = T.uniqueSort;
        L.text = T.getText;
        L.isXMLDoc = T.isXML;
        L.contains = T.contains;
        L.escapeSelector = T.escape;
        var x = function(e, t, n) {
            var r = [], i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && L(e).is(n)) {
                        break;
                    }
                    r.push(e);
                }
            }
            return r;
        };
        var S = function(e, t) {
            var n = [];
            for (;e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e);
                }
            }
            return n;
        };
        var j = L.expr.match.needsContext;
        var H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var C = /^.[^:#\[\.,]*$/;
        function P(e, t, n) {
            if (L.isFunction(t)) {
                return L.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n;
                });
            }
            if (t.nodeType) {
                return L.grep(e, function(e) {
                    return e === t !== n;
                });
            }
            if (typeof t !== "string") {
                return L.grep(e, function(e) {
                    return c.call(t, e) > -1 !== n;
                });
            }
            if (C.test(t)) {
                return L.filter(t, e, n);
            }
            t = L.filter(t, e);
            return L.grep(e, function(e) {
                return c.call(t, e) > -1 !== n && e.nodeType === 1;
            });
        }
        L.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")";
            }
            if (t.length === 1 && r.nodeType === 1) {
                return L.find.matchesSelector(r, e) ? [ r ] : [];
            }
            return L.find.matches(e, L.grep(t, function(e) {
                return e.nodeType === 1;
            }));
        };
        L.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if (typeof e !== "string") {
                    return this.pushStack(L(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (L.contains(i[t], this)) {
                                return true;
                            }
                        }
                    }));
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    L.find(e, i[t], n);
                }
                return r > 1 ? L.uniqueSort(n) : n;
            },
            filter: function(e) {
                return this.pushStack(P(this, e || [], false));
            },
            not: function(e) {
                return this.pushStack(P(this, e || [], true));
            },
            is: function(e) {
                return !!P(this, typeof e === "string" && j.test(e) ? L(e) : e || [], false).length;
            }
        });
        var E, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, A = L.fn.init = function(e, t, n) {
            var r, i;
            if (!e) {
                return this;
            }
            n = n || E;
            if (typeof e === "string") {
                if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                    r = [ null, e, null ];
                } else {
                    r = O.exec(e);
                }
                if (r && (r[1] || !t)) {
                    if (r[1]) {
                        t = t instanceof L ? t[0] : t;
                        L.merge(this, L.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, true));
                        if (H.test(r[1]) && L.isPlainObject(t)) {
                            for (r in t) {
                                if (L.isFunction(this[r])) {
                                    this[r](t[r]);
                                } else {
                                    this.attr(r, t[r]);
                                }
                            }
                        }
                        return this;
                    } else {
                        i = o.getElementById(r[2]);
                        if (i) {
                            this[0] = i;
                            this.length = 1;
                        }
                        return this;
                    }
                } else if (!t || t.jquery) {
                    return (t || n).find(e);
                } else {
                    return this.constructor(t).find(e);
                }
            } else if (e.nodeType) {
                this[0] = e;
                this.length = 1;
                return this;
            } else if (L.isFunction(e)) {
                return n.ready !== undefined ? n.ready(e) : e(L);
            }
            return L.makeArray(e, this);
        };
        A.prototype = L.fn;
        E = L(o);
        var W = /^(?:parents|prev(?:Until|All))/, F = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        L.fn.extend({
            has: function(e) {
                var t = L(e, this), n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (;e < n; e++) {
                        if (L.contains(this, t[e])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, a = [], s = typeof e !== "string" && L(e);
                if (!j.test(e)) {
                    for (;r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && L.find.matchesSelector(n, e))) {
                                a.push(n);
                                break;
                            }
                        }
                    }
                }
                return this.pushStack(a.length > 1 ? L.uniqueSort(a) : a);
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                }
                if (typeof e === "string") {
                    return c.call(L(e), this[0]);
                }
                return c.call(this, e.jquery ? e[0] : e);
            },
            add: function(e, t) {
                return this.pushStack(L.uniqueSort(L.merge(this.get(), L(e, t))));
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
            }
        });
        function N(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e;
        }
        L.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null;
            },
            parents: function(e) {
                return x(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
                return x(e, "parentNode", n);
            },
            next: function(e) {
                return N(e, "nextSibling");
            },
            prev: function(e) {
                return N(e, "previousSibling");
            },
            nextAll: function(e) {
                return x(e, "nextSibling");
            },
            prevAll: function(e) {
                return x(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
                return x(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
                return x(e, "previousSibling", n);
            },
            siblings: function(e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
                return S(e.firstChild);
            },
            contents: function(e) {
                return e.contentDocument || L.merge([], e.childNodes);
            }
        }, function(e, t) {
            L.fn[e] = function(n, r) {
                var i = L.map(this, t, n);
                if (e.slice(-5) !== "Until") {
                    r = n;
                }
                if (r && typeof r === "string") {
                    i = L.filter(r, i);
                }
                if (this.length > 1) {
                    if (!F[e]) {
                        L.uniqueSort(i);
                    }
                    if (W.test(e)) {
                        i.reverse();
                    }
                }
                return this.pushStack(i);
            };
        });
        var z = /[^\x20\t\r\n\f]+/g;
        function $(e) {
            var t = {};
            L.each(e.match(z) || [], function(e, n) {
                t[n] = true;
            });
            return t;
        }
        L.Callbacks = function(e) {
            e = typeof e === "string" ? $(e) : L.extend({}, e);
            var t, n, r, i, a = [], s = [], o = -1, d = function() {
                i = e.once;
                r = t = true;
                for (;s.length; o = -1) {
                    n = s.shift();
                    while (++o < a.length) {
                        if (a[o].apply(n[0], n[1]) === false && e.stopOnFalse) {
                            o = a.length;
                            n = false;
                        }
                    }
                }
                if (!e.memory) {
                    n = false;
                }
                t = false;
                if (i) {
                    if (n) {
                        a = [];
                    } else {
                        a = "";
                    }
                }
            }, u = {
                add: function() {
                    if (a) {
                        if (n && !t) {
                            o = a.length - 1;
                            s.push(n);
                        }
                        (function t(n) {
                            L.each(n, function(n, r) {
                                if (L.isFunction(r)) {
                                    if (!e.unique || !u.has(r)) {
                                        a.push(r);
                                    }
                                } else if (r && r.length && L.type(r) !== "string") {
                                    t(r);
                                }
                            });
                        })(arguments);
                        if (n && !t) {
                            d();
                        }
                    }
                    return this;
                },
                remove: function() {
                    L.each(arguments, function(e, t) {
                        var n;
                        while ((n = L.inArray(t, a, n)) > -1) {
                            a.splice(n, 1);
                            if (n <= o) {
                                o--;
                            }
                        }
                    });
                    return this;
                },
                has: function(e) {
                    return e ? L.inArray(e, a) > -1 : a.length > 0;
                },
                empty: function() {
                    if (a) {
                        a = [];
                    }
                    return this;
                },
                disable: function() {
                    i = s = [];
                    a = n = "";
                    return this;
                },
                disabled: function() {
                    return !a;
                },
                lock: function() {
                    i = s = [];
                    if (!n && !t) {
                        a = n = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!i;
                },
                fireWith: function(e, n) {
                    if (!i) {
                        n = n || [];
                        n = [ e, n.slice ? n.slice() : n ];
                        s.push(n);
                        if (!t) {
                            d();
                        }
                    }
                    return this;
                },
                fire: function() {
                    u.fireWith(this, arguments);
                    return this;
                },
                fired: function() {
                    return !!r;
                }
            };
            return u;
        };
        function I(e) {
            return e;
        }
        function R(e) {
            throw e;
        }
        function q(e, t, n) {
            var r;
            try {
                if (e && L.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n);
                } else if (e && L.isFunction(r = e.then)) {
                    r.call(e, t, n);
                } else {
                    t.call(undefined, e);
                }
            } catch (e) {
                n.call(undefined, e);
            }
        }
        L.extend({
            Deferred: function(e) {
                var t = [ [ "notify", "progress", L.Callbacks("memory"), L.Callbacks("memory"), 2 ], [ "resolve", "done", L.Callbacks("once memory"), L.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", L.Callbacks("once memory"), L.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                    state: function() {
                        return r;
                    },
                    always: function() {
                        a.done(arguments).fail(arguments);
                        return this;
                    },
                    catch: function(e) {
                        return i.then(null, e);
                    },
                    pipe: function() {
                        var e = arguments;
                        return L.Deferred(function(n) {
                            L.each(t, function(t, r) {
                                var i = L.isFunction(e[r[4]]) && e[r[4]];
                                a[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    if (e && L.isFunction(e.promise)) {
                                        e.promise().progress(n.notify).done(n.resolve).fail(n.reject);
                                    } else {
                                        n[r[0] + "With"](this, i ? [ e ] : arguments);
                                    }
                                });
                            });
                            e = null;
                        }).promise();
                    },
                    then: function(e, r, i) {
                        var a = 0;
                        function s(e, t, r, i) {
                            return function() {
                                var o = this, d = arguments, u = function() {
                                    var n, u;
                                    if (e < a) {
                                        return;
                                    }
                                    n = r.apply(o, d);
                                    if (n === t.promise()) {
                                        throw new TypeError("Thenable self-resolution");
                                    }
                                    u = n && (typeof n === "object" || typeof n === "function") && n.then;
                                    if (L.isFunction(u)) {
                                        if (i) {
                                            u.call(n, s(a, t, I, i), s(a, t, R, i));
                                        } else {
                                            a++;
                                            u.call(n, s(a, t, I, i), s(a, t, R, i), s(a, t, I, t.notifyWith));
                                        }
                                    } else {
                                        if (r !== I) {
                                            o = undefined;
                                            d = [ n ];
                                        }
                                        (i || t.resolveWith)(o, d);
                                    }
                                }, l = i ? u : function() {
                                    try {
                                        u();
                                    } catch (n) {
                                        if (L.Deferred.exceptionHook) {
                                            L.Deferred.exceptionHook(n, l.stackTrace);
                                        }
                                        if (e + 1 >= a) {
                                            if (r !== R) {
                                                o = undefined;
                                                d = [ n ];
                                            }
                                            t.rejectWith(o, d);
                                        }
                                    }
                                };
                                if (e) {
                                    l();
                                } else {
                                    if (L.Deferred.getStackHook) {
                                        l.stackTrace = L.Deferred.getStackHook();
                                    }
                                    n.setTimeout(l);
                                }
                            };
                        }
                        return L.Deferred(function(n) {
                            t[0][3].add(s(0, n, L.isFunction(i) ? i : I, n.notifyWith));
                            t[1][3].add(s(0, n, L.isFunction(e) ? e : I));
                            t[2][3].add(s(0, n, L.isFunction(r) ? r : R));
                        }).promise();
                    },
                    promise: function(e) {
                        return e != null ? L.extend(e, i) : i;
                    }
                }, a = {};
                L.each(t, function(e, n) {
                    var s = n[2], o = n[5];
                    i[n[1]] = s.add;
                    if (o) {
                        s.add(function() {
                            r = o;
                        }, t[3 - e][2].disable, t[0][2].lock);
                    }
                    s.add(n[3].fire);
                    a[n[0]] = function() {
                        a[n[0] + "With"](this === a ? undefined : this, arguments);
                        return this;
                    };
                    a[n[0] + "With"] = s.fireWith;
                });
                i.promise(a);
                if (e) {
                    e.call(a, a);
                }
                return a;
            },
            when: function(e) {
                var t = arguments.length, n = t, r = Array(n), i = u.call(arguments), a = L.Deferred(), s = function(e) {
                    return function(n) {
                        r[e] = this;
                        i[e] = arguments.length > 1 ? u.call(arguments) : n;
                        if (!--t) {
                            a.resolveWith(r, i);
                        }
                    };
                };
                if (t <= 1) {
                    q(e, a.done(s(n)).resolve, a.reject);
                    if (a.state() === "pending" || L.isFunction(i[n] && i[n].then)) {
                        return a.then();
                    }
                }
                while (n--) {
                    q(i[n], s(n), a.reject);
                }
                return a.promise();
            }
        });
        var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        L.Deferred.exceptionHook = function(e, t) {
            if (n.console && n.console.warn && e && J.test(e.name)) {
                n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }
        };
        L.readyException = function(e) {
            n.setTimeout(function() {
                throw e;
            });
        };
        var B = L.Deferred();
        L.fn.ready = function(e) {
            B.then(e).catch(function(e) {
                L.readyException(e);
            });
            return this;
        };
        L.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    L.readyWait++;
                } else {
                    L.ready(true);
                }
            },
            ready: function(e) {
                if (e === true ? --L.readyWait : L.isReady) {
                    return;
                }
                L.isReady = true;
                if (e !== true && --L.readyWait > 0) {
                    return;
                }
                B.resolveWith(o, [ L ]);
            }
        });
        L.ready.then = B.then;
        function U() {
            o.removeEventListener("DOMContentLoaded", U);
            n.removeEventListener("load", U);
            L.ready();
        }
        if (o.readyState === "complete" || o.readyState !== "loading" && !o.documentElement.doScroll) {
            n.setTimeout(L.ready);
        } else {
            o.addEventListener("DOMContentLoaded", U);
            n.addEventListener("load", U);
        }
        var V = function(e, t, n, r, i, a, s) {
            var o = 0, d = e.length, u = n == null;
            if (L.type(n) === "object") {
                i = true;
                for (o in n) {
                    V(e, t, o, n[o], true, a, s);
                }
            } else if (r !== undefined) {
                i = true;
                if (!L.isFunction(r)) {
                    s = true;
                }
                if (u) {
                    if (s) {
                        t.call(e, r);
                        t = null;
                    } else {
                        u = t;
                        t = function(e, t, n) {
                            return u.call(L(e), n);
                        };
                    }
                }
                if (t) {
                    for (;o < d; o++) {
                        t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
                    }
                }
            }
            if (i) {
                return e;
            }
            if (u) {
                return t.call(e);
            }
            return d ? t(e[0], n) : a;
        };
        var G = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
        };
        function Z() {
            this.expando = L.expando + Z.uid++;
        }
        Z.uid = 1;
        Z.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (G(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t;
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            });
                        }
                    }
                }
                return t;
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if (typeof t === "string") {
                    i[L.camelCase(t)] = n;
                } else {
                    for (r in t) {
                        i[L.camelCase(r)] = t[r];
                    }
                }
                return i;
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][L.camelCase(t)];
            },
            access: function(e, t, n) {
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    return this.get(e, t);
                }
                this.set(e, t, n);
                return n !== undefined ? n : t;
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r === undefined) {
                    return;
                }
                if (t !== undefined) {
                    if (L.isArray(t)) {
                        t = t.map(L.camelCase);
                    } else {
                        t = L.camelCase(t);
                        t = t in r ? [ t ] : t.match(z) || [];
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]];
                    }
                }
                if (t === undefined || L.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined;
                    } else {
                        delete e[this.expando];
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !L.isEmptyObject(t);
            }
        };
        var K = new Z();
        var X = new Z();
        var Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
        function te(e) {
            if (e === "true") {
                return true;
            }
            if (e === "false") {
                return false;
            }
            if (e === "null") {
                return null;
            }
            if (e === +e + "") {
                return +e;
            }
            if (Q.test(e)) {
                return JSON.parse(e);
            }
            return e;
        }
        function ne(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                r = "data-" + t.replace(ee, "-$&").toLowerCase();
                n = e.getAttribute(r);
                if (typeof n === "string") {
                    try {
                        n = te(n);
                    } catch (e) {}
                    X.set(e, t, n);
                } else {
                    n = undefined;
                }
            }
            return n;
        }
        L.extend({
            hasData: function(e) {
                return X.hasData(e) || K.hasData(e);
            },
            data: function(e, t, n) {
                return X.access(e, t, n);
            },
            removeData: function(e, t) {
                X.remove(e, t);
            },
            _data: function(e, t, n) {
                return K.access(e, t, n);
            },
            _removeData: function(e, t) {
                K.remove(e, t);
            }
        });
        L.fn.extend({
            data: function(e, t) {
                var n, r, i, a = this[0], s = a && a.attributes;
                if (e === undefined) {
                    if (this.length) {
                        i = X.get(a);
                        if (a.nodeType === 1 && !K.get(a, "hasDataAttrs")) {
                            n = s.length;
                            while (n--) {
                                if (s[n]) {
                                    r = s[n].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = L.camelCase(r.slice(5));
                                        ne(a, r, i[r]);
                                    }
                                }
                            }
                            K.set(a, "hasDataAttrs", true);
                        }
                    }
                    return i;
                }
                if (typeof e === "object") {
                    return this.each(function() {
                        X.set(this, e);
                    });
                }
                return V(this, function(t) {
                    var n;
                    if (a && t === undefined) {
                        n = X.get(a, e);
                        if (n !== undefined) {
                            return n;
                        }
                        n = ne(a, e);
                        if (n !== undefined) {
                            return n;
                        }
                        return;
                    }
                    this.each(function() {
                        X.set(this, e, t);
                    });
                }, null, t, arguments.length > 1, null, true);
            },
            removeData: function(e) {
                return this.each(function() {
                    X.remove(this, e);
                });
            }
        });
        L.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = K.get(e, t);
                    if (n) {
                        if (!r || L.isArray(n)) {
                            r = K.access(e, t, L.makeArray(n));
                        } else {
                            r.push(n);
                        }
                    }
                    return r || [];
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = L.queue(e, t), r = n.length, i = n.shift(), a = L._queueHooks(e, t), s = function() {
                    L.dequeue(e, t);
                };
                if (i === "inprogress") {
                    i = n.shift();
                    r--;
                }
                if (i) {
                    if (t === "fx") {
                        n.unshift("inprogress");
                    }
                    delete a.stop;
                    i.call(e, s, a);
                }
                if (!r && a) {
                    a.empty.fire();
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: L.Callbacks("once memory").add(function() {
                        K.remove(e, [ t + "queue", n ]);
                    })
                });
            }
        });
        L.fn.extend({
            queue: function(e, t) {
                var n = 2;
                if (typeof e !== "string") {
                    t = e;
                    e = "fx";
                    n--;
                }
                if (arguments.length < n) {
                    return L.queue(this[0], e);
                }
                return t === undefined ? this : this.each(function() {
                    var n = L.queue(this, e, t);
                    L._queueHooks(this, e);
                    if (e === "fx" && n[0] !== "inprogress") {
                        L.dequeue(this, e);
                    }
                });
            },
            dequeue: function(e) {
                return this.each(function() {
                    L.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n, r = 1, i = L.Deferred(), a = this, s = this.length, o = function() {
                    if (!--r) {
                        i.resolveWith(a, [ a ]);
                    }
                };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined;
                }
                e = e || "fx";
                while (s--) {
                    n = K.get(a[s], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(o);
                    }
                }
                o();
                return i.promise(t);
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i");
        var ae = [ "Top", "Right", "Bottom", "Left" ];
        var se = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && L.contains(e.ownerDocument, e) && L.css(e, "display") === "none";
        };
        var oe = function(e, t, n, r) {
            var i, a, s = {};
            for (a in t) {
                s[a] = e.style[a];
                e.style[a] = t[a];
            }
            i = n.apply(e, r || []);
            for (a in t) {
                e.style[a] = s[a];
            }
            return i;
        };
        function de(e, t, n, r) {
            var i, a = 1, s = 20, o = r ? function() {
                return r.cur();
            } : function() {
                return L.css(e, t, "");
            }, d = o(), u = n && n[3] || (L.cssNumber[t] ? "" : "px"), l = (L.cssNumber[t] || u !== "px" && +d) && ie.exec(L.css(e, t));
            if (l && l[3] !== u) {
                u = u || l[3];
                n = n || [];
                l = +d || 1;
                do {
                    a = a || ".5";
                    l = l / a;
                    L.style(e, t, l + u);
                } while (a !== (a = o() / d) && a !== 1 && --s);
            }
            if (n) {
                l = +l || +d || 0;
                i = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = u;
                    r.start = l;
                    r.end = i;
                }
            }
            return i;
        }
        var ue = {};
        function le(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ue[r];
            if (i) {
                return i;
            }
            t = n.body.appendChild(n.createElement(r));
            i = L.css(t, "display");
            t.parentNode.removeChild(t);
            if (i === "none") {
                i = "block";
            }
            ue[r] = i;
            return i;
        }
        function fe(e, t) {
            var n, r, i = [], a = 0, s = e.length;
            for (;a < s; a++) {
                r = e[a];
                if (!r.style) {
                    continue;
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        i[a] = K.get(r, "display") || null;
                        if (!i[a]) {
                            r.style.display = "";
                        }
                    }
                    if (r.style.display === "" && se(r)) {
                        i[a] = le(r);
                    }
                } else {
                    if (n !== "none") {
                        i[a] = "none";
                        K.set(r, "display", n);
                    }
                }
            }
            for (a = 0; a < s; a++) {
                if (i[a] != null) {
                    e[a].style.display = i[a];
                }
            }
            return e;
        }
        L.fn.extend({
            show: function() {
                return fe(this, true);
            },
            hide: function() {
                return fe(this);
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (se(this)) {
                        L(this).show();
                    } else {
                        L(this).hide();
                    }
                });
            }
        });
        var ce = /^(?:checkbox|radio)$/i;
        var me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var _e = /^$|\/(?:java|ecma)script/i;
        var he = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        he.optgroup = he.option;
        he.tbody = he.tfoot = he.colgroup = he.caption = he.thead;
        he.th = he.td;
        function pe(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*");
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*");
            } else {
                n = [];
            }
            if (t === undefined || t && L.nodeName(e, t)) {
                return L.merge([ e ], n);
            }
            return n;
        }
        function ye(e, t) {
            var n = 0, r = e.length;
            for (;n < r; n++) {
                K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
            }
        }
        var ge = /<|&#?\w+;/;
        function ve(e, t, n, r, i) {
            var a, s, o, d, u, l, f = t.createDocumentFragment(), c = [], m = 0, _ = e.length;
            for (;m < _; m++) {
                a = e[m];
                if (a || a === 0) {
                    if (L.type(a) === "object") {
                        L.merge(c, a.nodeType ? [ a ] : a);
                    } else if (!ge.test(a)) {
                        c.push(t.createTextNode(a));
                    } else {
                        s = s || f.appendChild(t.createElement("div"));
                        o = (me.exec(a) || [ "", "" ])[1].toLowerCase();
                        d = he[o] || he._default;
                        s.innerHTML = d[1] + L.htmlPrefilter(a) + d[2];
                        l = d[0];
                        while (l--) {
                            s = s.lastChild;
                        }
                        L.merge(c, s.childNodes);
                        s = f.firstChild;
                        s.textContent = "";
                    }
                }
            }
            f.textContent = "";
            m = 0;
            while (a = c[m++]) {
                if (r && L.inArray(a, r) > -1) {
                    if (i) {
                        i.push(a);
                    }
                    continue;
                }
                u = L.contains(a.ownerDocument, a);
                s = pe(f.appendChild(a), "script");
                if (u) {
                    ye(s);
                }
                if (n) {
                    l = 0;
                    while (a = s[l++]) {
                        if (_e.test(a.type || "")) {
                            n.push(a);
                        }
                    }
                }
            }
            return f;
        }
        (function() {
            var e = o.createDocumentFragment(), t = e.appendChild(o.createElement("div")), n = o.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            g.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            g.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
        })();
        var Me = o.documentElement;
        var Le = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, we = /^([^.]*)(?:\.(.+)|)/;
        function Ye() {
            return true;
        }
        function ke() {
            return false;
        }
        function De() {
            try {
                return o.activeElement;
            } catch (e) {}
        }
        function Te(e, t, n, r, i, a) {
            var s, o;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined;
                }
                for (o in t) {
                    Te(e, o, n, r, t[o], a);
                }
                return e;
            }
            if (r == null && i == null) {
                i = n;
                r = n = undefined;
            } else if (i == null) {
                if (typeof n === "string") {
                    i = r;
                    r = undefined;
                } else {
                    i = r;
                    r = n;
                    n = undefined;
                }
            }
            if (i === false) {
                i = ke;
            } else if (!i) {
                return e;
            }
            if (a === 1) {
                s = i;
                i = function(e) {
                    L().off(e);
                    return s.apply(this, arguments);
                };
                i.guid = s.guid || (s.guid = L.guid++);
            }
            return e.each(function() {
                L.event.add(this, t, i, r, n);
            });
        }
        L.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var a, s, o, d, u, l, f, c, m, _, h, p = K.get(e);
                if (!p) {
                    return;
                }
                if (n.handler) {
                    a = n;
                    n = a.handler;
                    i = a.selector;
                }
                if (i) {
                    L.find.matchesSelector(Me, i);
                }
                if (!n.guid) {
                    n.guid = L.guid++;
                }
                if (!(d = p.events)) {
                    d = p.events = {};
                }
                if (!(s = p.handle)) {
                    s = p.handle = function(t) {
                        return typeof L !== "undefined" && L.event.triggered !== t.type ? L.event.dispatch.apply(e, arguments) : undefined;
                    };
                }
                t = (t || "").match(z) || [ "" ];
                u = t.length;
                while (u--) {
                    o = we.exec(t[u]) || [];
                    m = h = o[1];
                    _ = (o[2] || "").split(".").sort();
                    if (!m) {
                        continue;
                    }
                    f = L.event.special[m] || {};
                    m = (i ? f.delegateType : f.bindType) || m;
                    f = L.event.special[m] || {};
                    l = L.extend({
                        type: m,
                        origType: h,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && L.expr.match.needsContext.test(i),
                        namespace: _.join(".")
                    }, a);
                    if (!(c = d[m])) {
                        c = d[m] = [];
                        c.delegateCount = 0;
                        if (!f.setup || f.setup.call(e, r, _, s) === false) {
                            if (e.addEventListener) {
                                e.addEventListener(m, s);
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(e, l);
                        if (!l.handler.guid) {
                            l.handler.guid = n.guid;
                        }
                    }
                    if (i) {
                        c.splice(c.delegateCount++, 0, l);
                    } else {
                        c.push(l);
                    }
                    L.event.global[m] = true;
                }
            },
            remove: function(e, t, n, r, i) {
                var a, s, o, d, u, l, f, c, m, _, h, p = K.hasData(e) && K.get(e);
                if (!p || !(d = p.events)) {
                    return;
                }
                t = (t || "").match(z) || [ "" ];
                u = t.length;
                while (u--) {
                    o = we.exec(t[u]) || [];
                    m = h = o[1];
                    _ = (o[2] || "").split(".").sort();
                    if (!m) {
                        for (m in d) {
                            L.event.remove(e, m + t[u], n, r, true);
                        }
                        continue;
                    }
                    f = L.event.special[m] || {};
                    m = (r ? f.delegateType : f.bindType) || m;
                    c = d[m] || [];
                    o = o[2] && new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    s = a = c.length;
                    while (a--) {
                        l = c[a];
                        if ((i || h === l.origType) && (!n || n.guid === l.guid) && (!o || o.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
                            c.splice(a, 1);
                            if (l.selector) {
                                c.delegateCount--;
                            }
                            if (f.remove) {
                                f.remove.call(e, l);
                            }
                        }
                    }
                    if (s && !c.length) {
                        if (!f.teardown || f.teardown.call(e, _, p.handle) === false) {
                            L.removeEvent(e, m, p.handle);
                        }
                        delete d[m];
                    }
                }
                if (L.isEmptyObject(d)) {
                    K.remove(e, "handle events");
                }
            },
            dispatch: function(e) {
                var t = L.event.fix(e);
                var n, r, i, a, s, o, d = new Array(arguments.length), u = (K.get(this, "events") || {})[t.type] || [], l = L.event.special[t.type] || {};
                d[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    d[n] = arguments[n];
                }
                t.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, t) === false) {
                    return;
                }
                o = L.event.handlers.call(this, t, u);
                n = 0;
                while ((a = o[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = a.elem;
                    r = 0;
                    while ((s = a.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(s.namespace)) {
                            t.handleObj = s;
                            t.data = s.data;
                            i = ((L.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, d);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (l.postDispatch) {
                    l.postDispatch.call(this, t);
                }
                return t.result;
            },
            handlers: function(e, t) {
                var n, r, i, a, s, o = [], d = t.delegateCount, u = e.target;
                if (d && u.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (;u !== this; u = u.parentNode || this) {
                        if (u.nodeType === 1 && !(e.type === "click" && u.disabled === true)) {
                            a = [];
                            s = {};
                            for (n = 0; n < d; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (s[i] === undefined) {
                                    s[i] = r.needsContext ? L(i, this).index(u) > -1 : L.find(i, this, null, [ u ]).length;
                                }
                                if (s[i]) {
                                    a.push(r);
                                }
                            }
                            if (a.length) {
                                o.push({
                                    elem: u,
                                    handlers: a
                                });
                            }
                        }
                    }
                }
                u = this;
                if (d < t.length) {
                    o.push({
                        elem: u,
                        handlers: t.slice(d)
                    });
                }
                return o;
            },
            addProp: function(e, t) {
                Object.defineProperty(L.Event.prototype, e, {
                    enumerable: true,
                    configurable: true,
                    get: L.isFunction(t) ? function() {
                        if (this.originalEvent) {
                            return t(this.originalEvent);
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[e];
                        }
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: t
                        });
                    }
                });
            },
            fix: function(e) {
                return e[L.expando] ? e : new L.Event(e);
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== De() && this.focus) {
                            this.focus();
                            return false;
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === De() && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && L.nodeName(this, "input")) {
                            this.click();
                            return false;
                        }
                    },
                    _default: function(e) {
                        return L.nodeName(e.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result;
                        }
                    }
                }
            }
        };
        L.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n);
            }
        };
        L.Event = function(e, t) {
            if (!(this instanceof L.Event)) {
                return new L.Event(e, t);
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? Ye : ke;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget;
            } else {
                this.type = e;
            }
            if (t) {
                L.extend(this, t);
            }
            this.timeStamp = e && e.timeStamp || L.now();
            this[L.expando] = true;
        };
        L.Event.prototype = {
            constructor: L.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ye;
                if (e && !this.isSimulated) {
                    e.preventDefault();
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ye;
                if (e && !this.isSimulated) {
                    e.stopPropagation();
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ye;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation();
                }
                this.stopPropagation();
            }
        };
        L.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(e) {
                var t = e.button;
                if (e.which == null && Le.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode;
                }
                if (!e.which && t !== undefined && be.test(e.type)) {
                    if (t & 1) {
                        return 1;
                    }
                    if (t & 2) {
                        return 3;
                    }
                    if (t & 4) {
                        return 2;
                    }
                    return 0;
                }
                return e.which;
            }
        }, L.event.addProp);
        L.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            L.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, a = e.handleObj;
                    if (!i || i !== r && !L.contains(r, i)) {
                        e.type = a.origType;
                        n = a.handler.apply(this, arguments);
                        e.type = t;
                    }
                    return n;
                }
            };
        });
        L.fn.extend({
            on: function(e, t, n, r) {
                return Te(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
                return Te(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    L(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this;
                }
                if (typeof e === "object") {
                    for (i in e) {
                        this.off(i, t, e[i]);
                    }
                    return this;
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined;
                }
                if (n === false) {
                    n = ke;
                }
                return this.each(function() {
                    L.event.remove(this, e, n, t);
                });
            }
        });
        var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Se = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^true\/(.*)/, Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Pe(e, t) {
            if (L.nodeName(e, "table") && L.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e;
            }
            return e;
        }
        function Ee(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e;
        }
        function Oe(e) {
            var t = He.exec(e.type);
            if (t) {
                e.type = t[1];
            } else {
                e.removeAttribute("type");
            }
            return e;
        }
        function Ae(e, t) {
            var n, r, i, a, s, o, d, u;
            if (t.nodeType !== 1) {
                return;
            }
            if (K.hasData(e)) {
                a = K.access(e);
                s = K.set(t, a);
                u = a.events;
                if (u) {
                    delete s.handle;
                    s.events = {};
                    for (i in u) {
                        for (n = 0, r = u[i].length; n < r; n++) {
                            L.event.add(t, i, u[i][n]);
                        }
                    }
                }
            }
            if (X.hasData(e)) {
                o = X.access(e);
                d = L.extend({}, o);
                X.set(t, d);
            }
        }
        function We(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && ce.test(e.type)) {
                t.checked = e.checked;
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue;
            }
        }
        function Fe(e, t, n, r) {
            t = l.apply([], t);
            var i, a, s, o, d, u, f = 0, c = e.length, m = c - 1, _ = t[0], h = L.isFunction(_);
            if (h || c > 1 && typeof _ === "string" && !g.checkClone && je.test(_)) {
                return e.each(function(i) {
                    var a = e.eq(i);
                    if (h) {
                        t[0] = _.call(this, i, a.html());
                    }
                    Fe(a, t, n, r);
                });
            }
            if (c) {
                i = ve(t, e[0].ownerDocument, false, e, r);
                a = i.firstChild;
                if (i.childNodes.length === 1) {
                    i = a;
                }
                if (a || r) {
                    s = L.map(pe(i, "script"), Ee);
                    o = s.length;
                    for (;f < c; f++) {
                        d = i;
                        if (f !== m) {
                            d = L.clone(d, true, true);
                            if (o) {
                                L.merge(s, pe(d, "script"));
                            }
                        }
                        n.call(e[f], d, f);
                    }
                    if (o) {
                        u = s[s.length - 1].ownerDocument;
                        L.map(s, Oe);
                        for (f = 0; f < o; f++) {
                            d = s[f];
                            if (_e.test(d.type || "") && !K.access(d, "globalEval") && L.contains(u, d)) {
                                if (d.src) {
                                    if (L._evalUrl) {
                                        L._evalUrl(d.src);
                                    }
                                } else {
                                    v(d.textContent.replace(Ce, ""), u);
                                }
                            }
                        }
                    }
                }
            }
            return e;
        }
        function Ne(e, t, n) {
            var r, i = t ? L.filter(t, e) : e, a = 0;
            for (;(r = i[a]) != null; a++) {
                if (!n && r.nodeType === 1) {
                    L.cleanData(pe(r));
                }
                if (r.parentNode) {
                    if (n && L.contains(r.ownerDocument, r)) {
                        ye(pe(r, "script"));
                    }
                    r.parentNode.removeChild(r);
                }
            }
            return e;
        }
        L.extend({
            htmlPrefilter: function(e) {
                return e.replace(xe, "<$1></$2>");
            },
            clone: function(e, t, n) {
                var r, i, a, s, o = e.cloneNode(true), d = L.contains(e.ownerDocument, e);
                if (!g.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !L.isXMLDoc(e)) {
                    s = pe(o);
                    a = pe(e);
                    for (r = 0, i = a.length; r < i; r++) {
                        We(a[r], s[r]);
                    }
                }
                if (t) {
                    if (n) {
                        a = a || pe(e);
                        s = s || pe(o);
                        for (r = 0, i = a.length; r < i; r++) {
                            Ae(a[r], s[r]);
                        }
                    } else {
                        Ae(e, o);
                    }
                }
                s = pe(o, "script");
                if (s.length > 0) {
                    ye(s, !d && pe(e, "script"));
                }
                return o;
            },
            cleanData: function(e) {
                var t, n, r, i = L.event.special, a = 0;
                for (;(n = e[a]) !== undefined; a++) {
                    if (G(n)) {
                        if (t = n[K.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        L.event.remove(n, r);
                                    } else {
                                        L.removeEvent(n, r, t.handle);
                                    }
                                }
                            }
                            n[K.expando] = undefined;
                        }
                        if (n[X.expando]) {
                            n[X.expando] = undefined;
                        }
                    }
                }
            }
        });
        L.fn.extend({
            detach: function(e) {
                return Ne(this, e, true);
            },
            remove: function(e) {
                return Ne(this, e);
            },
            text: function(e) {
                return V(this, function(e) {
                    return e === undefined ? L.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e;
                        }
                    });
                }, null, e, arguments.length);
            },
            append: function() {
                return Fe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Pe(this, e);
                        t.appendChild(e);
                    }
                });
            },
            prepend: function() {
                return Fe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return Fe(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this);
                    }
                });
            },
            after: function() {
                return Fe(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling);
                    }
                });
            },
            empty: function() {
                var e, t = 0;
                for (;(e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        L.cleanData(pe(e, false));
                        e.textContent = "";
                    }
                }
                return this;
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return L.clone(this, e, t);
                });
            },
            html: function(e) {
                return V(this, function(e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML;
                    }
                    if (typeof e === "string" && !Se.test(e) && !he[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                        e = L.htmlPrefilter(e);
                        try {
                            for (;n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    L.cleanData(pe(t, false));
                                    t.innerHTML = e;
                                }
                            }
                            t = 0;
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e);
                    }
                }, null, e, arguments.length);
            },
            replaceWith: function() {
                var e = [];
                return Fe(this, arguments, function(t) {
                    var n = this.parentNode;
                    if (L.inArray(this, e) < 0) {
                        L.cleanData(pe(this));
                        if (n) {
                            n.replaceChild(t, this);
                        }
                    }
                }, e);
            }
        });
        L.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            L.fn[e] = function(e) {
                var n, r = [], i = L(e), a = i.length - 1, s = 0;
                for (;s <= a; s++) {
                    n = s === a ? this : this.clone(true);
                    L(i[s])[t](n);
                    f.apply(r, n.get());
                }
                return this.pushStack(r);
            };
        });
        var ze = /^margin/;
        var $e = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i");
        var Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = n;
            }
            return t.getComputedStyle(e);
        };
        (function() {
            function e() {
                if (!d) {
                    return;
                }
                d.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                d.innerHTML = "";
                Me.appendChild(s);
                var e = n.getComputedStyle(d);
                t = e.top !== "1%";
                a = e.marginLeft === "2px";
                r = e.width === "4px";
                d.style.marginRight = "50%";
                i = e.marginRight === "4px";
                Me.removeChild(s);
                d = null;
            }
            var t, r, i, a, s = o.createElement("div"), d = o.createElement("div");
            if (!d.style) {
                return;
            }
            d.style.backgroundClip = "content-box";
            d.cloneNode(true).style.backgroundClip = "";
            g.clearCloneStyle = d.style.backgroundClip === "content-box";
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            s.appendChild(d);
            L.extend(g, {
                pixelPosition: function() {
                    e();
                    return t;
                },
                boxSizingReliable: function() {
                    e();
                    return r;
                },
                pixelMarginRight: function() {
                    e();
                    return i;
                },
                reliableMarginLeft: function() {
                    e();
                    return a;
                }
            });
        })();
        function Re(e, t, n) {
            var r, i, a, s, o = e.style;
            n = n || Ie(e);
            if (n) {
                s = n.getPropertyValue(t) || n[t];
                if (s === "" && !L.contains(e.ownerDocument, e)) {
                    s = L.style(e, t);
                }
                if (!g.pixelMarginRight() && $e.test(s) && ze.test(t)) {
                    r = o.width;
                    i = o.minWidth;
                    a = o.maxWidth;
                    o.minWidth = o.maxWidth = o.width = s;
                    s = n.width;
                    o.width = r;
                    o.minWidth = i;
                    o.maxWidth = a;
                }
            }
            return s !== undefined ? s + "" : s;
        }
        function qe(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = t).apply(this, arguments);
                }
            };
        }
        var Je = /^(none|table(?!-c[ea]).+)/, Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ue = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Ve = [ "Webkit", "Moz", "ms" ], Ge = o.createElement("div").style;
        function Ze(e) {
            if (e in Ge) {
                return e;
            }
            var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
            while (n--) {
                e = Ve[n] + t;
                if (e in Ge) {
                    return e;
                }
            }
        }
        function Ke(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function Xe(e, t, n, r, i) {
            var a, s = 0;
            if (n === (r ? "border" : "content")) {
                a = 4;
            } else {
                a = t === "width" ? 1 : 0;
            }
            for (;a < 4; a += 2) {
                if (n === "margin") {
                    s += L.css(e, n + ae[a], true, i);
                }
                if (r) {
                    if (n === "content") {
                        s -= L.css(e, "padding" + ae[a], true, i);
                    }
                    if (n !== "margin") {
                        s -= L.css(e, "border" + ae[a] + "Width", true, i);
                    }
                } else {
                    s += L.css(e, "padding" + ae[a], true, i);
                    if (n !== "padding") {
                        s += L.css(e, "border" + ae[a] + "Width", true, i);
                    }
                }
            }
            return s;
        }
        function Qe(e, t, n) {
            var r, i = true, a = Ie(e), s = L.css(e, "boxSizing", false, a) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t];
            }
            if (r <= 0 || r == null) {
                r = Re(e, t, a);
                if (r < 0 || r == null) {
                    r = e.style[t];
                }
                if ($e.test(r)) {
                    return r;
                }
                i = s && (g.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0;
            }
            return r + Xe(e, t, n || (s ? "border" : "content"), i, a) + "px";
        }
        L.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Re(e, "opacity");
                            return n === "" ? "1" : n;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return;
                }
                var i, a, s, o = L.camelCase(t), d = e.style;
                t = L.cssProps[o] || (L.cssProps[o] = Ze(o) || o);
                s = L.cssHooks[t] || L.cssHooks[o];
                if (n !== undefined) {
                    a = typeof n;
                    if (a === "string" && (i = ie.exec(n)) && i[1]) {
                        n = de(e, t, i);
                        a = "number";
                    }
                    if (n == null || n !== n) {
                        return;
                    }
                    if (a === "number") {
                        n += i && i[3] || (L.cssNumber[o] ? "" : "px");
                    }
                    if (!g.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        d[t] = "inherit";
                    }
                    if (!s || !("set" in s) || (n = s.set(e, n, r)) !== undefined) {
                        d[t] = n;
                    }
                } else {
                    if (s && "get" in s && (i = s.get(e, false, r)) !== undefined) {
                        return i;
                    }
                    return d[t];
                }
            },
            css: function(e, t, n, r) {
                var i, a, s, o = L.camelCase(t);
                t = L.cssProps[o] || (L.cssProps[o] = Ze(o) || o);
                s = L.cssHooks[t] || L.cssHooks[o];
                if (s && "get" in s) {
                    i = s.get(e, true, n);
                }
                if (i === undefined) {
                    i = Re(e, t, r);
                }
                if (i === "normal" && t in Ue) {
                    i = Ue[t];
                }
                if (n === "" || n) {
                    a = parseFloat(i);
                    return n === true || isFinite(a) ? a || 0 : i;
                }
                return i;
            }
        });
        L.each([ "height", "width" ], function(e, t) {
            L.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) {
                        return Je.test(L.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? oe(e, Be, function() {
                            return Qe(e, t, r);
                        }) : Qe(e, t, r);
                    }
                },
                set: function(e, n, r) {
                    var i, a = r && Ie(e), s = r && Xe(e, t, r, L.css(e, "boxSizing", false, a) === "border-box", a);
                    if (s && (i = ie.exec(n)) && (i[3] || "px") !== "px") {
                        e.style[t] = n;
                        n = L.css(e, t);
                    }
                    return Ke(e, n, s);
                }
            };
        });
        L.cssHooks.marginLeft = qe(g.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left;
                })) + "px";
            }
        });
        L.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            L.cssHooks[e + t] = {
                expand: function(n) {
                    var r = 0, i = {}, a = typeof n === "string" ? n.split(" ") : [ n ];
                    for (;r < 4; r++) {
                        i[e + ae[r] + t] = a[r] || a[r - 2] || a[0];
                    }
                    return i;
                }
            };
            if (!ze.test(e)) {
                L.cssHooks[e + t].set = Ke;
            }
        });
        L.fn.extend({
            css: function(e, t) {
                return V(this, function(e, t, n) {
                    var r, i, a = {}, s = 0;
                    if (L.isArray(t)) {
                        r = Ie(e);
                        i = t.length;
                        for (;s < i; s++) {
                            a[t[s]] = L.css(e, t[s], false, r);
                        }
                        return a;
                    }
                    return n !== undefined ? L.style(e, t, n) : L.css(e, t);
                }, e, t, arguments.length > 1);
            }
        });
        function et(e, t, n, r, i) {
            return new et.prototype.init(e, t, n, r, i);
        }
        L.Tween = et;
        et.prototype = {
            constructor: et,
            init: function(e, t, n, r, i, a) {
                this.elem = e;
                this.prop = n;
                this.easing = i || L.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = a || (L.cssNumber[n] ? "" : "px");
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = L.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
                } else {
                    this.pos = t = e;
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (n && n.set) {
                    n.set(this);
                } else {
                    et.propHooks._default.set(this);
                }
                return this;
            }
        };
        et.prototype.init.prototype = et.prototype;
        et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop];
                    }
                    t = L.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t;
                },
                set: function(e) {
                    if (L.fx.step[e.prop]) {
                        L.fx.step[e.prop](e);
                    } else if (e.elem.nodeType === 1 && (e.elem.style[L.cssProps[e.prop]] != null || L.cssHooks[e.prop])) {
                        L.style(e.elem, e.prop, e.now + e.unit);
                    } else {
                        e.elem[e.prop] = e.now;
                    }
                }
            }
        };
        et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now;
                }
            }
        };
        L.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
        };
        L.fx = et.prototype.init;
        L.fx.step = {};
        var tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
        function at() {
            if (nt) {
                n.requestAnimationFrame(at);
                L.fx.tick();
            }
        }
        function st() {
            n.setTimeout(function() {
                tt = undefined;
            });
            return tt = L.now();
        }
        function ot(e, t) {
            var n, r = 0, i = {
                height: e
            };
            t = t ? 1 : 0;
            for (;r < 4; r += 2 - t) {
                n = ae[r];
                i["margin" + n] = i["padding" + n] = e;
            }
            if (t) {
                i.opacity = i.width = e;
            }
            return i;
        }
        function dt(e, t, n) {
            var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), a = 0, s = i.length;
            for (;a < s; a++) {
                if (r = i[a].call(n, t, e)) {
                    return r;
                }
            }
        }
        function ut(e, t, n) {
            var r, i, a, s, o, d, u, l, f = "width" in t || "height" in t, c = this, m = {}, _ = e.style, h = e.nodeType && se(e), p = K.get(e, "fxshow");
            if (!n.queue) {
                s = L._queueHooks(e, "fx");
                if (s.unqueued == null) {
                    s.unqueued = 0;
                    o = s.empty.fire;
                    s.empty.fire = function() {
                        if (!s.unqueued) {
                            o();
                        }
                    };
                }
                s.unqueued++;
                c.always(function() {
                    c.always(function() {
                        s.unqueued--;
                        if (!L.queue(e, "fx").length) {
                            s.empty.fire();
                        }
                    });
                });
            }
            for (r in t) {
                i = t[r];
                if (rt.test(i)) {
                    delete t[r];
                    a = a || i === "toggle";
                    if (i === (h ? "hide" : "show")) {
                        if (i === "show" && p && p[r] !== undefined) {
                            h = true;
                        } else {
                            continue;
                        }
                    }
                    m[r] = p && p[r] || L.style(e, r);
                }
            }
            d = !L.isEmptyObject(t);
            if (!d && L.isEmptyObject(m)) {
                return;
            }
            if (f && e.nodeType === 1) {
                n.overflow = [ _.overflow, _.overflowX, _.overflowY ];
                u = p && p.display;
                if (u == null) {
                    u = K.get(e, "display");
                }
                l = L.css(e, "display");
                if (l === "none") {
                    if (u) {
                        l = u;
                    } else {
                        fe([ e ], true);
                        u = e.style.display || u;
                        l = L.css(e, "display");
                        fe([ e ]);
                    }
                }
                if (l === "inline" || l === "inline-block" && u != null) {
                    if (L.css(e, "float") === "none") {
                        if (!d) {
                            c.done(function() {
                                _.display = u;
                            });
                            if (u == null) {
                                l = _.display;
                                u = l === "none" ? "" : l;
                            }
                        }
                        _.display = "inline-block";
                    }
                }
            }
            if (n.overflow) {
                _.overflow = "hidden";
                c.always(function() {
                    _.overflow = n.overflow[0];
                    _.overflowX = n.overflow[1];
                    _.overflowY = n.overflow[2];
                });
            }
            d = false;
            for (r in m) {
                if (!d) {
                    if (p) {
                        if ("hidden" in p) {
                            h = p.hidden;
                        }
                    } else {
                        p = K.access(e, "fxshow", {
                            display: u
                        });
                    }
                    if (a) {
                        p.hidden = !h;
                    }
                    if (h) {
                        fe([ e ], true);
                    }
                    c.done(function() {
                        if (!h) {
                            fe([ e ]);
                        }
                        K.remove(e, "fxshow");
                        for (r in m) {
                            L.style(e, r, m[r]);
                        }
                    });
                }
                d = dt(h ? p[r] : 0, r, c);
                if (!(r in p)) {
                    p[r] = d.start;
                    if (h) {
                        d.end = d.start;
                        d.start = 0;
                    }
                }
            }
        }
        function lt(e, t) {
            var n, r, i, a, s;
            for (n in e) {
                r = L.camelCase(n);
                i = t[r];
                a = e[n];
                if (L.isArray(a)) {
                    i = a[1];
                    a = e[n] = a[0];
                }
                if (n !== r) {
                    e[r] = a;
                    delete e[n];
                }
                s = L.cssHooks[r];
                if (s && "expand" in s) {
                    a = s.expand(a);
                    delete e[r];
                    for (n in a) {
                        if (!(n in e)) {
                            e[n] = a[n];
                            t[n] = i;
                        }
                    }
                } else {
                    t[r] = i;
                }
            }
        }
        function ft(e, t, n) {
            var r, i, a = 0, s = ft.prefilters.length, o = L.Deferred().always(function() {
                delete d.elem;
            }), d = function() {
                if (i) {
                    return false;
                }
                var t = tt || st(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, s = 0, d = u.tweens.length;
                for (;s < d; s++) {
                    u.tweens[s].run(a);
                }
                o.notifyWith(e, [ u, a, n ]);
                if (a < 1 && d) {
                    return n;
                } else {
                    o.resolveWith(e, [ u ]);
                    return false;
                }
            }, u = o.promise({
                elem: e,
                props: L.extend({}, t),
                opts: L.extend(true, {
                    specialEasing: {},
                    easing: L.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = L.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    u.tweens.push(r);
                    return r;
                },
                stop: function(t) {
                    var n = 0, r = t ? u.tweens.length : 0;
                    if (i) {
                        return this;
                    }
                    i = true;
                    for (;n < r; n++) {
                        u.tweens[n].run(1);
                    }
                    if (t) {
                        o.notifyWith(e, [ u, 1, 0 ]);
                        o.resolveWith(e, [ u, t ]);
                    } else {
                        o.rejectWith(e, [ u, t ]);
                    }
                    return this;
                }
            }), l = u.props;
            lt(l, u.opts.specialEasing);
            for (;a < s; a++) {
                r = ft.prefilters[a].call(u, e, l, u.opts);
                if (r) {
                    if (L.isFunction(r.stop)) {
                        L._queueHooks(u.elem, u.opts.queue).stop = L.proxy(r.stop, r);
                    }
                    return r;
                }
            }
            L.map(l, dt, u);
            if (L.isFunction(u.opts.start)) {
                u.opts.start.call(e, u);
            }
            L.fx.timer(L.extend(d, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            }));
            return u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
        }
        L.Animation = L.extend(ft, {
            tweeners: {
                "*": [ function(e, t) {
                    var n = this.createTween(e, t);
                    de(n.elem, e, ie.exec(t), n);
                    return n;
                } ]
            },
            tweener: function(e, t) {
                if (L.isFunction(e)) {
                    t = e;
                    e = [ "*" ];
                } else {
                    e = e.match(z);
                }
                var n, r = 0, i = e.length;
                for (;r < i; r++) {
                    n = e[r];
                    ft.tweeners[n] = ft.tweeners[n] || [];
                    ft.tweeners[n].unshift(t);
                }
            },
            prefilters: [ ut ],
            prefilter: function(e, t) {
                if (t) {
                    ft.prefilters.unshift(e);
                } else {
                    ft.prefilters.push(e);
                }
            }
        });
        L.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? L.extend({}, e) : {
                complete: n || !n && t || L.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !L.isFunction(t) && t
            };
            if (L.fx.off || o.hidden) {
                r.duration = 0;
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in L.fx.speeds) {
                        r.duration = L.fx.speeds[r.duration];
                    } else {
                        r.duration = L.fx.speeds._default;
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx";
            }
            r.old = r.complete;
            r.complete = function() {
                if (L.isFunction(r.old)) {
                    r.old.call(this);
                }
                if (r.queue) {
                    L.dequeue(this, r.queue);
                }
            };
            return r;
        };
        L.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r);
            },
            animate: function(e, t, n, r) {
                var i = L.isEmptyObject(e), a = L.speed(t, n, r), s = function() {
                    var t = ft(this, L.extend({}, e), a);
                    if (i || K.get(this, "finish")) {
                        t.stop(true);
                    }
                };
                s.finish = s;
                return i || a.queue === false ? this.each(s) : this.queue(a.queue, s);
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(n);
                };
                if (typeof e !== "string") {
                    n = t;
                    t = e;
                    e = undefined;
                }
                if (t && e !== false) {
                    this.queue(e || "fx", []);
                }
                return this.each(function() {
                    var t = true, i = e != null && e + "queueHooks", a = L.timers, s = K.get(this);
                    if (i) {
                        if (s[i] && s[i].stop) {
                            r(s[i]);
                        }
                    } else {
                        for (i in s) {
                            if (s[i] && s[i].stop && it.test(i)) {
                                r(s[i]);
                            }
                        }
                    }
                    for (i = a.length; i--; ) {
                        if (a[i].elem === this && (e == null || a[i].queue === e)) {
                            a[i].anim.stop(n);
                            t = false;
                            a.splice(i, 1);
                        }
                    }
                    if (t || !n) {
                        L.dequeue(this, e);
                    }
                });
            },
            finish: function(e) {
                if (e !== false) {
                    e = e || "fx";
                }
                return this.each(function() {
                    var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = L.timers, s = r ? r.length : 0;
                    n.finish = true;
                    L.queue(this, e, []);
                    if (i && i.stop) {
                        i.stop.call(this, true);
                    }
                    for (t = a.length; t--; ) {
                        if (a[t].elem === this && a[t].queue === e) {
                            a[t].anim.stop(true);
                            a.splice(t, 1);
                        }
                    }
                    for (t = 0; t < s; t++) {
                        if (r[t] && r[t].finish) {
                            r[t].finish.call(this);
                        }
                    }
                    delete n.finish;
                });
            }
        });
        L.each([ "toggle", "show", "hide" ], function(e, t) {
            var n = L.fn[t];
            L.fn[t] = function(e, r, i) {
                return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(ot(t, true), e, r, i);
            };
        });
        L.each({
            slideDown: ot("show"),
            slideUp: ot("hide"),
            slideToggle: ot("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            L.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r);
            };
        });
        L.timers = [];
        L.fx.tick = function() {
            var e, t = 0, n = L.timers;
            tt = L.now();
            for (;t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1);
                }
            }
            if (!n.length) {
                L.fx.stop();
            }
            tt = undefined;
        };
        L.fx.timer = function(e) {
            L.timers.push(e);
            if (e()) {
                L.fx.start();
            } else {
                L.timers.pop();
            }
        };
        L.fx.interval = 13;
        L.fx.start = function() {
            if (!nt) {
                nt = n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setInterval(L.fx.tick, L.fx.interval);
            }
        };
        L.fx.stop = function() {
            if (n.cancelAnimationFrame) {
                n.cancelAnimationFrame(nt);
            } else {
                n.clearInterval(nt);
            }
            nt = null;
        };
        L.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        L.fn.delay = function(e, t) {
            e = L.fx ? L.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i);
                };
            });
        };
        (function() {
            var e = o.createElement("input"), t = o.createElement("select"), n = t.appendChild(o.createElement("option"));
            e.type = "checkbox";
            g.checkOn = e.value !== "";
            g.optSelected = n.selected;
            e = o.createElement("input");
            e.value = "t";
            e.type = "radio";
            g.radioValue = e.value === "t";
        })();
        var ct, mt = L.expr.attrHandle;
        L.fn.extend({
            attr: function(e, t) {
                return V(this, L.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    L.removeAttr(this, e);
                });
            }
        });
        L.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return;
                }
                if (typeof e.getAttribute === "undefined") {
                    return L.prop(e, t, n);
                }
                if (a !== 1 || !L.isXMLDoc(e)) {
                    i = L.attrHooks[t.toLowerCase()] || (L.expr.match.bool.test(t) ? ct : undefined);
                }
                if (n !== undefined) {
                    if (n === null) {
                        L.removeAttr(e, t);
                        return;
                    }
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r;
                    }
                    e.setAttribute(t, n + "");
                    return n;
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r;
                }
                r = L.find.attr(e, t);
                return r == null ? undefined : r;
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && t === "radio" && L.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n;
                            }
                            return t;
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(z);
                if (i && e.nodeType === 1) {
                    while (n = i[r++]) {
                        e.removeAttribute(n);
                    }
                }
            }
        });
        ct = {
            set: function(e, t, n) {
                if (t === false) {
                    L.removeAttr(e, n);
                } else {
                    e.setAttribute(n, n);
                }
                return n;
            }
        };
        L.each(L.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = mt[t] || L.find.attr;
            mt[t] = function(e, t, r) {
                var i, a, s = t.toLowerCase();
                if (!r) {
                    a = mt[s];
                    mt[s] = i;
                    i = n(e, t, r) != null ? s : null;
                    mt[s] = a;
                }
                return i;
            };
        });
        var _t = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;
        L.fn.extend({
            prop: function(e, t) {
                return V(this, L.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[L.propFix[e] || e];
                });
            }
        });
        L.extend({
            prop: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return;
                }
                if (a !== 1 || !L.isXMLDoc(e)) {
                    t = L.propFix[t] || t;
                    i = L.propHooks[t];
                }
                if (n !== undefined) {
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r;
                    }
                    return e[t] = n;
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r;
                }
                return e[t];
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = L.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10);
                        }
                        if (_t.test(e.nodeName) || ht.test(e.nodeName) && e.href) {
                            return 0;
                        }
                        return -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!g.optSelected) {
            L.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex;
                    }
                    return null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex;
                        }
                    }
                }
            };
        }
        L.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            L.propFix[this.toLowerCase()] = this;
        });
        function pt(e) {
            var t = e.match(z) || [];
            return t.join(" ");
        }
        function yt(e) {
            return e.getAttribute && e.getAttribute("class") || "";
        }
        L.fn.extend({
            addClass: function(e) {
                var t, n, r, i, a, s, o, d = 0;
                if (L.isFunction(e)) {
                    return this.each(function(t) {
                        L(this).addClass(e.call(this, t, yt(this)));
                    });
                }
                if (typeof e === "string" && e) {
                    t = e.match(z) || [];
                    while (n = this[d++]) {
                        i = yt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            s = 0;
                            while (a = t[s++]) {
                                if (r.indexOf(" " + a + " ") < 0) {
                                    r += a + " ";
                                }
                            }
                            o = pt(r);
                            if (i !== o) {
                                n.setAttribute("class", o);
                            }
                        }
                    }
                }
                return this;
            },
            removeClass: function(e) {
                var t, n, r, i, a, s, o, d = 0;
                if (L.isFunction(e)) {
                    return this.each(function(t) {
                        L(this).removeClass(e.call(this, t, yt(this)));
                    });
                }
                if (!arguments.length) {
                    return this.attr("class", "");
                }
                if (typeof e === "string" && e) {
                    t = e.match(z) || [];
                    while (n = this[d++]) {
                        i = yt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            s = 0;
                            while (a = t[s++]) {
                                while (r.indexOf(" " + a + " ") > -1) {
                                    r = r.replace(" " + a + " ", " ");
                                }
                            }
                            o = pt(r);
                            if (i !== o) {
                                n.setAttribute("class", o);
                            }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                if (typeof t === "boolean" && n === "string") {
                    return t ? this.addClass(e) : this.removeClass(e);
                }
                if (L.isFunction(e)) {
                    return this.each(function(n) {
                        L(this).toggleClass(e.call(this, n, yt(this), t), t);
                    });
                }
                return this.each(function() {
                    var t, r, i, a;
                    if (n === "string") {
                        r = 0;
                        i = L(this);
                        a = e.match(z) || [];
                        while (t = a[r++]) {
                            if (i.hasClass(t)) {
                                i.removeClass(t);
                            } else {
                                i.addClass(t);
                            }
                        }
                    } else if (e === undefined || n === "boolean") {
                        t = yt(this);
                        if (t) {
                            K.set(this, "__className__", t);
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", t || e === false ? "" : K.get(this, "__className__") || "");
                        }
                    }
                });
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) {
                    if (n.nodeType === 1 && (" " + pt(yt(n)) + " ").indexOf(t) > -1) {
                        return true;
                    }
                }
                return false;
            }
        });
        var gt = /\r/g;
        L.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                if (!arguments.length) {
                    if (i) {
                        t = L.valHooks[i.type] || L.valHooks[i.nodeName.toLowerCase()];
                        if (t && "get" in t && (n = t.get(i, "value")) !== undefined) {
                            return n;
                        }
                        n = i.value;
                        if (typeof n === "string") {
                            return n.replace(gt, "");
                        }
                        return n == null ? "" : n;
                    }
                    return;
                }
                r = L.isFunction(e);
                return this.each(function(n) {
                    var i;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (r) {
                        i = e.call(this, n, L(this).val());
                    } else {
                        i = e;
                    }
                    if (i == null) {
                        i = "";
                    } else if (typeof i === "number") {
                        i += "";
                    } else if (L.isArray(i)) {
                        i = L.map(i, function(e) {
                            return e == null ? "" : e + "";
                        });
                    }
                    t = L.valHooks[this.type] || L.valHooks[this.nodeName.toLowerCase()];
                    if (!t || !("set" in t) || t.set(this, i, "value") === undefined) {
                        this.value = i;
                    }
                });
            }
        });
        L.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = L.find.attr(e, "value");
                        return t != null ? t : pt(L.text(e));
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, a = e.selectedIndex, s = e.type === "select-one", o = s ? null : [], d = s ? a + 1 : i.length;
                        if (a < 0) {
                            r = d;
                        } else {
                            r = s ? a : 0;
                        }
                        for (;r < d; r++) {
                            n = i[r];
                            if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !L.nodeName(n.parentNode, "optgroup"))) {
                                t = L(n).val();
                                if (s) {
                                    return t;
                                }
                                o.push(t);
                            }
                        }
                        return o;
                    },
                    set: function(e, t) {
                        var n, r, i = e.options, a = L.makeArray(t), s = i.length;
                        while (s--) {
                            r = i[s];
                            if (r.selected = L.inArray(L.valHooks.option.get(r), a) > -1) {
                                n = true;
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1;
                        }
                        return a;
                    }
                }
            }
        });
        L.each([ "radio", "checkbox" ], function() {
            L.valHooks[this] = {
                set: function(e, t) {
                    if (L.isArray(t)) {
                        return e.checked = L.inArray(L(e).val(), t) > -1;
                    }
                }
            };
            if (!g.checkOn) {
                L.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                };
            }
        });
        var vt = /^(?:focusinfocus|focusoutblur)$/;
        L.extend(L.event, {
            trigger: function(e, t, r, i) {
                var a, s, d, u, l, f, c, m = [ r || o ], _ = h.call(e, "type") ? e.type : e, p = h.call(e, "namespace") ? e.namespace.split(".") : [];
                s = d = r = r || o;
                if (r.nodeType === 3 || r.nodeType === 8) {
                    return;
                }
                if (vt.test(_ + L.event.triggered)) {
                    return;
                }
                if (_.indexOf(".") > -1) {
                    p = _.split(".");
                    _ = p.shift();
                    p.sort();
                }
                l = _.indexOf(":") < 0 && "on" + _;
                e = e[L.expando] ? e : new L.Event(_, typeof e === "object" && e);
                e.isTrigger = i ? 2 : 3;
                e.namespace = p.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = r;
                }
                t = t == null ? [ e ] : L.makeArray(t, [ e ]);
                c = L.event.special[_] || {};
                if (!i && c.trigger && c.trigger.apply(r, t) === false) {
                    return;
                }
                if (!i && !c.noBubble && !L.isWindow(r)) {
                    u = c.delegateType || _;
                    if (!vt.test(u + _)) {
                        s = s.parentNode;
                    }
                    for (;s; s = s.parentNode) {
                        m.push(s);
                        d = s;
                    }
                    if (d === (r.ownerDocument || o)) {
                        m.push(d.defaultView || d.parentWindow || n);
                    }
                }
                a = 0;
                while ((s = m[a++]) && !e.isPropagationStopped()) {
                    e.type = a > 1 ? u : c.bindType || _;
                    f = (K.get(s, "events") || {})[e.type] && K.get(s, "handle");
                    if (f) {
                        f.apply(s, t);
                    }
                    f = l && s[l];
                    if (f && f.apply && G(s)) {
                        e.result = f.apply(s, t);
                        if (e.result === false) {
                            e.preventDefault();
                        }
                    }
                }
                e.type = _;
                if (!i && !e.isDefaultPrevented()) {
                    if ((!c._default || c._default.apply(m.pop(), t) === false) && G(r)) {
                        if (l && L.isFunction(r[_]) && !L.isWindow(r)) {
                            d = r[l];
                            if (d) {
                                r[l] = null;
                            }
                            L.event.triggered = _;
                            r[_]();
                            L.event.triggered = undefined;
                            if (d) {
                                r[l] = d;
                            }
                        }
                    }
                }
                return e.result;
            },
            simulate: function(e, t, n) {
                var r = L.extend(new L.Event(), n, {
                    type: e,
                    isSimulated: true
                });
                L.event.trigger(r, null, t);
            }
        });
        L.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    L.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return L.event.trigger(e, t, n, true);
                }
            }
        });
        L.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, t) {
            L.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        });
        L.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            }
        });
        g.focusin = "onfocusin" in n;
        if (!g.focusin) {
            L.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    L.event.simulate(t, e.target, L.event.fix(e));
                };
                L.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this, i = K.access(r, t);
                        if (!i) {
                            r.addEventListener(e, n, true);
                        }
                        K.access(r, t, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this, i = K.access(r, t) - 1;
                        if (!i) {
                            r.removeEventListener(e, n, true);
                            K.remove(r, t);
                        } else {
                            K.access(r, t, i);
                        }
                    }
                };
            });
        }
        var Mt = n.location;
        var Lt = L.now();
        var bt = /\?/;
        L.parseXML = function(e) {
            var t;
            if (!e || typeof e !== "string") {
                return null;
            }
            try {
                t = new n.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
                t = undefined;
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                L.error("Invalid XML: " + e);
            }
            return t;
        };
        var wt = /\[\]$/, Yt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
        function Tt(e, t, n, r) {
            var i;
            if (L.isArray(t)) {
                L.each(t, function(t, i) {
                    if (n || wt.test(e)) {
                        r(e, i);
                    } else {
                        Tt(e + "[" + (typeof i === "object" && i != null ? t : "") + "]", i, n, r);
                    }
                });
            } else if (!n && L.type(t) === "object") {
                for (i in t) {
                    Tt(e + "[" + i + "]", t[i], n, r);
                }
            } else {
                r(e, t);
            }
        }
        L.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = L.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n);
            };
            if (L.isArray(e) || e.jquery && !L.isPlainObject(e)) {
                L.each(e, function() {
                    i(this.name, this.value);
                });
            } else {
                for (n in e) {
                    Tt(n, e[n], t, i);
                }
            }
            return r.join("&");
        };
        L.fn.extend({
            serialize: function() {
                return L.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = L.prop(this, "elements");
                    return e ? L.makeArray(e) : this;
                }).filter(function() {
                    var e = this.type;
                    return this.name && !L(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !ce.test(e));
                }).map(function(e, t) {
                    var n = L(this).val();
                    if (n == null) {
                        return null;
                    }
                    if (L.isArray(n)) {
                        return L.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Yt, "\r\n")
                            };
                        });
                    }
                    return {
                        name: t.name,
                        value: n.replace(Yt, "\r\n")
                    };
                }).get();
            }
        });
        var xt = /%20/g, St = /#.*$/, jt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, Et = /^\/\//, Ot = {}, At = {}, Wt = "*/".concat("*"), Ft = o.createElement("a");
        Ft.href = Mt.href;
        function Nt(e) {
            return function(t, n) {
                if (typeof t !== "string") {
                    n = t;
                    t = "*";
                }
                var r, i = 0, a = t.toLowerCase().match(z) || [];
                if (L.isFunction(n)) {
                    while (r = a[i++]) {
                        if (r[0] === "+") {
                            r = r.slice(1) || "*";
                            (e[r] = e[r] || []).unshift(n);
                        } else {
                            (e[r] = e[r] || []).push(n);
                        }
                    }
                }
            };
        }
        function zt(e, t, n, r) {
            var i = {}, a = e === At;
            function s(o) {
                var d;
                i[o] = true;
                L.each(e[o] || [], function(e, o) {
                    var u = o(t, n, r);
                    if (typeof u === "string" && !a && !i[u]) {
                        t.dataTypes.unshift(u);
                        s(u);
                        return false;
                    } else if (a) {
                        return !(d = u);
                    }
                });
                return d;
            }
            return s(t.dataTypes[0]) || !i["*"] && s("*");
        }
        function $t(e, t) {
            var n, r, i = L.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n];
                }
            }
            if (r) {
                L.extend(true, e, r);
            }
            return e;
        }
        function It(e, t, n) {
            var r, i, a, s, o = e.contents, d = e.dataTypes;
            while (d[0] === "*") {
                d.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type");
                }
            }
            if (r) {
                for (i in o) {
                    if (o[i] && o[i].test(r)) {
                        d.unshift(i);
                        break;
                    }
                }
            }
            if (d[0] in n) {
                a = d[0];
            } else {
                for (i in n) {
                    if (!d[0] || e.converters[i + " " + d[0]]) {
                        a = i;
                        break;
                    }
                    if (!s) {
                        s = i;
                    }
                }
                a = a || s;
            }
            if (a) {
                if (a !== d[0]) {
                    d.unshift(a);
                }
                return n[a];
            }
        }
        function Rt(e, t, n, r) {
            var i, a, s, o, d, u = {}, l = e.dataTypes.slice();
            if (l[1]) {
                for (s in e.converters) {
                    u[s.toLowerCase()] = e.converters[s];
                }
            }
            a = l.shift();
            while (a) {
                if (e.responseFields[a]) {
                    n[e.responseFields[a]] = t;
                }
                if (!d && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType);
                }
                d = a;
                a = l.shift();
                if (a) {
                    if (a === "*") {
                        a = d;
                    } else if (d !== "*" && d !== a) {
                        s = u[d + " " + a] || u["* " + a];
                        if (!s) {
                            for (i in u) {
                                o = i.split(" ");
                                if (o[1] === a) {
                                    s = u[d + " " + o[0]] || u["* " + o[0]];
                                    if (s) {
                                        if (s === true) {
                                            s = u[i];
                                        } else if (u[i] !== true) {
                                            a = o[0];
                                            l.unshift(o[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (s !== true) {
                            if (s && e.throws) {
                                t = s(t);
                            } else {
                                try {
                                    t = s(t);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + d + " to " + a
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            };
        }
        L.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Mt.href,
                type: "GET",
                isLocal: Ct.test(Mt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": L.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, L.ajaxSettings), t) : $t(L.ajaxSettings, e);
            },
            ajaxPrefilter: Nt(Ot),
            ajaxTransport: Nt(At),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined;
                }
                t = t || {};
                var r, i, a, s, d, u, l, f, c, m, _ = L.ajaxSetup({}, t), h = _.context || _, p = _.context && (h.nodeType || h.jquery) ? L(h) : L.event, y = L.Deferred(), g = L.Callbacks("once memory"), v = _.statusCode || {}, M = {}, b = {}, w = "canceled", Y = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!s) {
                                s = {};
                                while (t = Ht.exec(a)) {
                                    s[t[1].toLowerCase()] = t[2];
                                }
                            }
                            t = s[e.toLowerCase()];
                        }
                        return t == null ? null : t;
                    },
                    getAllResponseHeaders: function() {
                        return l ? a : null;
                    },
                    setRequestHeader: function(e, t) {
                        if (l == null) {
                            e = b[e.toLowerCase()] = b[e.toLowerCase()] || e;
                            M[e] = t;
                        }
                        return this;
                    },
                    overrideMimeType: function(e) {
                        if (l == null) {
                            _.mimeType = e;
                        }
                        return this;
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (l) {
                                Y.always(e[Y.status]);
                            } else {
                                for (t in e) {
                                    v[t] = [ v[t], e[t] ];
                                }
                            }
                        }
                        return this;
                    },
                    abort: function(e) {
                        var t = e || w;
                        if (r) {
                            r.abort(t);
                        }
                        k(0, t);
                        return this;
                    }
                };
                y.promise(Y);
                _.url = ((e || _.url || Mt.href) + "").replace(Et, Mt.protocol + "//");
                _.type = t.method || t.type || _.method || _.type;
                _.dataTypes = (_.dataType || "*").toLowerCase().match(z) || [ "" ];
                if (_.crossDomain == null) {
                    u = o.createElement("a");
                    try {
                        u.href = _.url;
                        u.href = u.href;
                        _.crossDomain = Ft.protocol + "//" + Ft.host !== u.protocol + "//" + u.host;
                    } catch (e) {
                        _.crossDomain = true;
                    }
                }
                if (_.data && _.processData && typeof _.data !== "string") {
                    _.data = L.param(_.data, _.traditional);
                }
                zt(Ot, _, t, Y);
                if (l) {
                    return Y;
                }
                f = L.event && _.global;
                if (f && L.active++ === 0) {
                    L.event.trigger("ajaxStart");
                }
                _.type = _.type.toUpperCase();
                _.hasContent = !Pt.test(_.type);
                i = _.url.replace(St, "");
                if (!_.hasContent) {
                    m = _.url.slice(i.length);
                    if (_.data) {
                        i += (bt.test(i) ? "&" : "?") + _.data;
                        delete _.data;
                    }
                    if (_.cache === false) {
                        i = i.replace(jt, "$1");
                        m = (bt.test(i) ? "&" : "?") + "_=" + Lt++ + m;
                    }
                    _.url = i + m;
                } else if (_.data && _.processData && (_.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    _.data = _.data.replace(xt, "+");
                }
                if (_.ifModified) {
                    if (L.lastModified[i]) {
                        Y.setRequestHeader("If-Modified-Since", L.lastModified[i]);
                    }
                    if (L.etag[i]) {
                        Y.setRequestHeader("If-None-Match", L.etag[i]);
                    }
                }
                if (_.data && _.hasContent && _.contentType !== false || t.contentType) {
                    Y.setRequestHeader("Content-Type", _.contentType);
                }
                Y.setRequestHeader("Accept", _.dataTypes[0] && _.accepts[_.dataTypes[0]] ? _.accepts[_.dataTypes[0]] + (_.dataTypes[0] !== "*" ? ", " + Wt + "; q=0.01" : "") : _.accepts["*"]);
                for (c in _.headers) {
                    Y.setRequestHeader(c, _.headers[c]);
                }
                if (_.beforeSend && (_.beforeSend.call(h, Y, _) === false || l)) {
                    return Y.abort();
                }
                w = "abort";
                g.add(_.complete);
                Y.done(_.success);
                Y.fail(_.error);
                r = zt(At, _, t, Y);
                if (!r) {
                    k(-1, "No Transport");
                } else {
                    Y.readyState = 1;
                    if (f) {
                        p.trigger("ajaxSend", [ Y, _ ]);
                    }
                    if (l) {
                        return Y;
                    }
                    if (_.async && _.timeout > 0) {
                        d = n.setTimeout(function() {
                            Y.abort("timeout");
                        }, _.timeout);
                    }
                    try {
                        l = false;
                        r.send(M, k);
                    } catch (e) {
                        if (l) {
                            throw e;
                        }
                        k(-1, e);
                    }
                }
                function k(e, t, s, o) {
                    var u, c, m, M, b, w = t;
                    if (l) {
                        return;
                    }
                    l = true;
                    if (d) {
                        n.clearTimeout(d);
                    }
                    r = undefined;
                    a = o || "";
                    Y.readyState = e > 0 ? 4 : 0;
                    u = e >= 200 && e < 300 || e === 304;
                    if (s) {
                        M = It(_, Y, s);
                    }
                    M = Rt(_, M, Y, u);
                    if (u) {
                        if (_.ifModified) {
                            b = Y.getResponseHeader("Last-Modified");
                            if (b) {
                                L.lastModified[i] = b;
                            }
                            b = Y.getResponseHeader("etag");
                            if (b) {
                                L.etag[i] = b;
                            }
                        }
                        if (e === 204 || _.type === "HEAD") {
                            w = "nocontent";
                        } else if (e === 304) {
                            w = "notmodified";
                        } else {
                            w = M.state;
                            c = M.data;
                            m = M.error;
                            u = !m;
                        }
                    } else {
                        m = w;
                        if (e || !w) {
                            w = "error";
                            if (e < 0) {
                                e = 0;
                            }
                        }
                    }
                    Y.status = e;
                    Y.statusText = (t || w) + "";
                    if (u) {
                        y.resolveWith(h, [ c, w, Y ]);
                    } else {
                        y.rejectWith(h, [ Y, w, m ]);
                    }
                    Y.statusCode(v);
                    v = undefined;
                    if (f) {
                        p.trigger(u ? "ajaxSuccess" : "ajaxError", [ Y, _, u ? c : m ]);
                    }
                    g.fireWith(h, [ Y, w ]);
                    if (f) {
                        p.trigger("ajaxComplete", [ Y, _ ]);
                        if (!--L.active) {
                            L.event.trigger("ajaxStop");
                        }
                    }
                }
                return Y;
            },
            getJSON: function(e, t, n) {
                return L.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return L.get(e, undefined, t, "script");
            }
        });
        L.each([ "get", "post" ], function(e, t) {
            L[t] = function(e, n, r, i) {
                if (L.isFunction(n)) {
                    i = i || r;
                    r = n;
                    n = undefined;
                }
                return L.ajax(L.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, L.isPlainObject(e) && e));
            };
        });
        L._evalUrl = function(e) {
            return L.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            });
        };
        L.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (L.isFunction(e)) {
                        e = e.call(this[0]);
                    }
                    t = L(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0]);
                    }
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild;
                        }
                        return e;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(e) {
                if (L.isFunction(e)) {
                    return this.each(function(t) {
                        L(this).wrapInner(e.call(this, t));
                    });
                }
                return this.each(function() {
                    var t = L(this), n = t.contents();
                    if (n.length) {
                        n.wrapAll(e);
                    } else {
                        t.append(e);
                    }
                });
            },
            wrap: function(e) {
                var t = L.isFunction(e);
                return this.each(function(n) {
                    L(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    L(this).replaceWith(this.childNodes);
                });
                return this;
            }
        });
        L.expr.pseudos.hidden = function(e) {
            return !L.expr.pseudos.visible(e);
        };
        L.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        };
        L.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest();
            } catch (e) {}
        };
        var qt = {
            0: 200,
            1223: 204
        }, Jt = L.ajaxSettings.xhr();
        g.cors = !!Jt && "withCredentials" in Jt;
        g.ajax = Jt = !!Jt;
        L.ajaxTransport(function(e) {
            var t, r;
            if (g.cors || Jt && !e.crossDomain) {
                return {
                    send: function(i, a) {
                        var s, o = e.xhr();
                        o.open(e.type, e.url, e.async, e.username, e.password);
                        if (e.xhrFields) {
                            for (s in e.xhrFields) {
                                o[s] = e.xhrFields[s];
                            }
                        }
                        if (e.mimeType && o.overrideMimeType) {
                            o.overrideMimeType(e.mimeType);
                        }
                        if (!e.crossDomain && !i["X-Requested-With"]) {
                            i["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (s in i) {
                            o.setRequestHeader(s, i[s]);
                        }
                        t = function(e) {
                            return function() {
                                if (t) {
                                    t = r = o.onload = o.onerror = o.onabort = o.onreadystatechange = null;
                                    if (e === "abort") {
                                        o.abort();
                                    } else if (e === "error") {
                                        if (typeof o.status !== "number") {
                                            a(0, "error");
                                        } else {
                                            a(o.status, o.statusText);
                                        }
                                    } else {
                                        a(qt[o.status] || o.status, o.statusText, (o.responseType || "text") !== "text" || typeof o.responseText !== "string" ? {
                                            binary: o.response
                                        } : {
                                            text: o.responseText
                                        }, o.getAllResponseHeaders());
                                    }
                                }
                            };
                        };
                        o.onload = t();
                        r = o.onerror = t("error");
                        if (o.onabort !== undefined) {
                            o.onabort = r;
                        } else {
                            o.onreadystatechange = function() {
                                if (o.readyState === 4) {
                                    n.setTimeout(function() {
                                        if (t) {
                                            r();
                                        }
                                    });
                                }
                            };
                        }
                        t = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null);
                        } catch (e) {
                            if (t) {
                                throw e;
                            }
                        }
                    },
                    abort: function() {
                        if (t) {
                            t();
                        }
                    }
                };
            }
        });
        L.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false;
            }
        });
        L.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    L.globalEval(e);
                    return e;
                }
            }
        });
        L.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false;
            }
            if (e.crossDomain) {
                e.type = "GET";
            }
        });
        L.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = L("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove();
                            n = null;
                            if (e) {
                                i(e.type === "error" ? 404 : 200, e.type);
                            }
                        });
                        o.head.appendChild(t[0]);
                    },
                    abort: function() {
                        if (n) {
                            n();
                        }
                    }
                };
            }
        });
        var Bt = [], Ut = /(=)\?(?=&|$)|\?\?/;
        L.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Bt.pop() || L.expando + "_" + Lt++;
                this[e] = true;
                return e;
            }
        });
        L.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, a, s, o = e.jsonp !== false && (Ut.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ut.test(e.data) && "data");
            if (o || e.dataTypes[0] === "jsonp") {
                i = e.jsonpCallback = L.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (o) {
                    e[o] = e[o].replace(Ut, "$1" + i);
                } else if (e.jsonp !== false) {
                    e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i;
                }
                e.converters["script json"] = function() {
                    if (!s) {
                        L.error(i + " was not called");
                    }
                    return s[0];
                };
                e.dataTypes[0] = "json";
                a = n[i];
                n[i] = function() {
                    s = arguments;
                };
                r.always(function() {
                    if (a === undefined) {
                        L(n).removeProp(i);
                    } else {
                        n[i] = a;
                    }
                    if (e[i]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Bt.push(i);
                    }
                    if (s && L.isFunction(a)) {
                        a(s[0]);
                    }
                    s = a = undefined;
                });
                return "script";
            }
        });
        g.createHTMLDocument = function() {
            var e = o.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2;
        }();
        L.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return [];
            }
            if (typeof t === "boolean") {
                n = t;
                t = false;
            }
            var r, i, a;
            if (!t) {
                if (g.createHTMLDocument) {
                    t = o.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = o.location.href;
                    t.head.appendChild(r);
                } else {
                    t = o;
                }
            }
            i = H.exec(e);
            a = !n && [];
            if (i) {
                return [ t.createElement(i[1]) ];
            }
            i = ve([ e ], t, a);
            if (a && a.length) {
                L(a).remove();
            }
            return L.merge([], i.childNodes);
        };
        L.fn.load = function(e, t, n) {
            var r, i, a, s = this, o = e.indexOf(" ");
            if (o > -1) {
                r = pt(e.slice(o));
                e = e.slice(0, o);
            }
            if (L.isFunction(t)) {
                n = t;
                t = undefined;
            } else if (t && typeof t === "object") {
                i = "POST";
            }
            if (s.length > 0) {
                L.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments;
                    s.html(r ? L("<div>").append(L.parseHTML(e)).find(r) : e);
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, a || [ e.responseText, t, e ]);
                    });
                });
            }
            return this;
        };
        L.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
            L.fn[t] = function(e) {
                return this.on(t, e);
            };
        });
        L.expr.pseudos.animated = function(e) {
            return L.grep(L.timers, function(t) {
                return e === t.elem;
            }).length;
        };
        function Vt(e) {
            return L.isWindow(e) ? e : e.nodeType === 9 && e.defaultView;
        }
        L.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, s, o, d, u, l = L.css(e, "position"), f = L(e), c = {};
                if (l === "static") {
                    e.style.position = "relative";
                }
                o = f.offset();
                a = L.css(e, "top");
                d = L.css(e, "left");
                u = (l === "absolute" || l === "fixed") && (a + d).indexOf("auto") > -1;
                if (u) {
                    r = f.position();
                    s = r.top;
                    i = r.left;
                } else {
                    s = parseFloat(a) || 0;
                    i = parseFloat(d) || 0;
                }
                if (L.isFunction(t)) {
                    t = t.call(e, n, L.extend({}, o));
                }
                if (t.top != null) {
                    c.top = t.top - o.top + s;
                }
                if (t.left != null) {
                    c.left = t.left - o.left + i;
                }
                if ("using" in t) {
                    t.using.call(e, c);
                } else {
                    f.css(c);
                }
            }
        };
        L.fn.extend({
            offset: function(e) {
                if (arguments.length) {
                    return e === undefined ? this : this.each(function(t) {
                        L.offset.setOffset(this, e, t);
                    });
                }
                var t, n, r, i, a = this[0];
                if (!a) {
                    return;
                }
                if (!a.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    };
                }
                r = a.getBoundingClientRect();
                if (r.width || r.height) {
                    i = a.ownerDocument;
                    n = Vt(i);
                    t = i.documentElement;
                    return {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    };
                }
                return r;
            },
            position: function() {
                if (!this[0]) {
                    return;
                }
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                if (L.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect();
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!L.nodeName(e[0], "html")) {
                        r = e.offset();
                    }
                    r = {
                        top: r.top + L.css(e[0], "borderTopWidth", true),
                        left: r.left + L.css(e[0], "borderLeftWidth", true)
                    };
                }
                return {
                    top: t.top - r.top - L.css(n, "marginTop", true),
                    left: t.left - r.left - L.css(n, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && L.css(e, "position") === "static") {
                        e = e.offsetParent;
                    }
                    return e || Me;
                });
            }
        });
        L.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            L.fn[e] = function(r) {
                return V(this, function(e, r, i) {
                    var a = Vt(e);
                    if (i === undefined) {
                        return a ? a[t] : e[r];
                    }
                    if (a) {
                        a.scrollTo(!n ? i : a.pageXOffset, n ? i : a.pageYOffset);
                    } else {
                        e[r] = i;
                    }
                }, e, r, arguments.length);
            };
        });
        L.each([ "top", "left" ], function(e, t) {
            L.cssHooks[t] = qe(g.pixelPosition, function(e, n) {
                if (n) {
                    n = Re(e, t);
                    return $e.test(n) ? L(e).position()[t] + "px" : n;
                }
            });
        });
        L.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            L.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                L.fn[r] = function(i, a) {
                    var s = arguments.length && (n || typeof i !== "boolean"), o = n || (i === true || a === true ? "margin" : "border");
                    return V(this, function(t, n, i) {
                        var a;
                        if (L.isWindow(t)) {
                            return r.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e];
                        }
                        if (t.nodeType === 9) {
                            a = t.documentElement;
                            return Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]);
                        }
                        return i === undefined ? L.css(t, n, o) : L.style(t, n, i, o);
                    }, t, s ? i : undefined, s);
                };
            });
        });
        L.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
            }
        });
        L.parseJSON = JSON.parse;
        if (true) {
            !(r = [], i = function() {
                return L;
            }.apply(t, r), i !== undefined && (e.exports = i));
        }
        var Gt = n.jQuery, Zt = n.$;
        L.noConflict = function(e) {
            if (n.$ === L) {
                n.$ = Zt;
            }
            if (e && n.jQuery === L) {
                n.jQuery = Gt;
            }
            return L;
        };
        if (!a) {
            n.jQuery = n.$ = L;
        }
        return L;
    });
} ]);