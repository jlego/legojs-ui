(function(e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            exports: {},
            id: a,
            loaded: false
        };
        e[a].call(r.exports, r, r.exports, n);
        r.loaded = true;
        return r.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})([ function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = n(13);
    var i = l(r);
    var s = n(14);
    var o = l(s);
    var d = n(135);
    var u = l(d);
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function m(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var _ = function() {
        function e() {
            m(this, e);
            return {
                "/forms": [ this.index, this.tabs ],
                "/forms/:tabs": [ this.index, this.tabs ]
            };
        }
        a(e, [ {
            key: "index",
            value: function e() {
                this.viewObj = HBY.create(i.default, {
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
    HBY.router(new _());
}, , , , , , , , , , , , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var a = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="', '">Forms 表单</a>\n                <a href="#/forms/1" class="', '">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function r(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function i(e, t) {
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
            i(this, t);
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
                var n = hx(a, t.currentTab == 0 ? "active" : "", t.currentTab == 1 ? "active" : "");
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
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = h([ '<i class="anticon anticon-setting"></i>' ], [ '<i class="anticon anticon-setting"></i>' ]), i = h([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ' ]);
    var s = n(15);
    var o = f(s);
    var d = n(16);
    var u = f(d);
    var l = n(17);
    var m = f(l);
    var _ = n(134);
    var c = f(_);
    function f(e) {
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
    function M(e, t) {
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
    var L = function(e) {
        M(t, e);
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
            var a = {
                components: [ {
                    el: "#search1",
                    hasSelect: true,
                    onSearch: function e(t, n) {
                        console.warn("点击了搜索框", n, this);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#search2",
                    placeholder: "输入关键字",
                    onSearch: function e(t, n) {
                        console.warn("点击了搜索框2", n);
                    }
                }, {
                    el: "#select3",
                    placeholder: "请选择",
                    onChange: function e(t, n) {
                        console.warn("点击了选项框1", n);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#select4",
                    placeholder: "请选择",
                    eventName: "click",
                    onChange: function e(t, n) {
                        console.warn("点击了选项框2", n);
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
                    onChange: function e(t, n) {
                        console.warn("点击了选项框3", n);
                    },
                    data: $.extend(true, [], n)
                }, {
                    el: "#select6",
                    placeholder: "请选择",
                    multiple: true,
                    onChange: function e(t, n) {
                        console.warn("点击了选项框4", n);
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
                    onChange: function e(t, n) {
                        console.warn("点击了时间选项框5", n);
                    }
                }, {
                    el: "#datepicker8",
                    type: "range",
                    startName: "datepicker2",
                    endName: "datepicker3",
                    onChange: function e(t, n) {
                        console.warn("点击了时间选项框6", n);
                    }
                }, {
                    el: "#datepicker9",
                    inline: true,
                    onChange: function e(t, n) {
                        console.warn("点击了时间选项框7", n);
                    }
                }, {
                    el: "#input10",
                    placeholder: "这是输入框",
                    onChange: function e(t, n) {
                        console.warn("点击了输入框1", n);
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
                    suffix: hx(r),
                    onChange: function e(t, n) {
                        console.warn("点击了输入框2", n);
                    },
                    style: {
                        marginBottom: 20
                    }
                }, {
                    el: "#input12",
                    type: "textarea",
                    placeholder: "这是文本框",
                    rows: 10,
                    onChange: function e(t, n) {
                        console.warn("点击了文本框2", n);
                    }
                } ]
            };
            Object.assign(a, e);
            return y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = hx(i);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = L;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = u([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
    var i = u([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
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
    function m(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function _(e, t) {
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
        _(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
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
            return m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                function n(e) {
                    if (e.divider) {
                        return hx(r);
                    } else {
                        if (!e.children) {
                            return hx(i, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                        } else {
                            return a(e);
                        }
                    }
                }
                function a(e) {
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
            key: "renderAfter",
            value: function e() {
                var t = this;
                this.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
                if (!this.options.disabled) {
                    var n = function e(n) {
                        $("body, .modal-body").trigger("click");
                        n.stopPropagation();
                        var a = Lego.UI.Util.getDirection(t.trigger, t.$el);
                        t.options.direction = a._y || "bottom";
                        t.show();
                        if (t.options.eventName == "hover") {
                            t.trigger.mouseleave(function() {
                                t.close();
                            });
                        }
                    };
                    if (this.options.eventName == "click") {
                        var a = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(a).on(a, function() {
                            t.close();
                        });
                        this.trigger.off(a).on(a, n);
                    } else {
                        this.trigger[this.options.eventName](n);
                    }
                }
            }
        }, {
            key: "_getAlign",
            value: function e(t, n) {
                var a = t.offset().left, r = t.offset().top - n.height(), i = $(window).width() - 20, s = n.width();
                if (i > a + s) {
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
                var a = this.options.data.find(function(e) {
                    return e.key == n.attr("id");
                });
                if (a) this.options.onChange(this, a);
                if (this.options.clickAndClose) {
                    this.close();
                } else {
                    this.refresh();
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("dropdown", c);
    var f = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var h = y([ '\n        <div class="input-group lego-search">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group lego-search">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);
    var p = y([ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ]);
    function y(e, t) {
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
    function v(e, t) {
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
    var g = function(e) {
        v(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            M(this, t);
            var n = {
                events: {
                    "click .lego-search-button": "onSearch",
                    "keydown .lego-search-input": "_enterSearch"
                },
                placeholder: "输入关键字搜索",
                activeKey: "",
                activeValue: "",
                hasSelect: false,
                onSearch: function e() {},
                components: [ {
                    el: "#dropdown-" + e.vid,
                    trigger: "#select-" + e.vid,
                    data: e.data,
                    onChange: function e(t, n) {
                        this.context.options.activeKey = n.key;
                        this.context.options.activeValue = n.value;
                    }
                } ]
            };
            Object.assign(n, e);
            return L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        f(t, [ {
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
                    this.onSearch(t);
                }
            }
        }, {
            key: "onSearch",
            value: function e(t) {
                t.stopPropagation();
                var n = this.$(".lego-search-input").val();
                if (typeof this.options.onSearch === "function") this.options.onSearch(this, {
                    key: this.options.activeKey,
                    value: this.options.activeValue,
                    keyword: n
                });
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("search", g);
    e.exports = g;
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = u([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
    var i = u([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
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
    function m(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function _(e, t) {
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
        _(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            l(this, t);
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
            return m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                function n(e) {
                    if (e.divider) {
                        return hx(r);
                    } else {
                        if (!e.children) {
                            return hx(i, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                        } else {
                            return a(e);
                        }
                    }
                }
                function a(e) {
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
            key: "renderAfter",
            value: function e() {
                var t = this;
                this.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
                if (!this.options.disabled) {
                    var n = function e(n) {
                        $("body, .modal-body").trigger("click");
                        n.stopPropagation();
                        var a = Lego.UI.Util.getDirection(t.trigger, t.$el);
                        t.options.direction = a._y || "bottom";
                        t.show();
                        if (t.options.eventName == "hover") {
                            t.trigger.mouseleave(function() {
                                t.close();
                            });
                        }
                    };
                    if (this.options.eventName == "click") {
                        var a = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(a).on(a, function() {
                            t.close();
                        });
                        this.trigger.off(a).on(a, n);
                    } else {
                        this.trigger[this.options.eventName](n);
                    }
                }
            }
        }, {
            key: "_getAlign",
            value: function e(t, n) {
                var a = t.offset().left, r = t.offset().top - n.height(), i = $(window).width() - 20, s = n.width();
                if (i > a + s) {
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
                var a = this.options.data.find(function(e) {
                    return e.key == n.attr("id");
                });
                if (a) this.options.onChange(this, a);
                if (this.options.clickAndClose) {
                    this.close();
                } else {
                    this.refresh();
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("dropdown", c);
    var f = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var h = L([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);
    var p = L([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);
    var y = L([ '\n            <div class="select dropdown">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);
    var M = L([ '\n            <div class="select dropdown multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);
    function L(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function v(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function g(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function Y(e, t) {
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
    var k = function(e) {
        Y(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            v(this, t);
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
                dataSource: null,
                components: [ {
                    el: "#dropdown-" + e.vid,
                    trigger: "#select-" + e.vid,
                    eventName: e.eventName || "click",
                    disabled: e.disabled || false,
                    style: Object.assign({
                        width: e.dropdownWidth || "100%",
                        height: e.dropdownHeight || "auto"
                    }, e.dropdownStyle || {}),
                    className: e.dropdownClassName,
                    clickAndClose: e.multiple ? false : true,
                    data: e.data || [],
                    dataSource: e.dataSource,
                    onChange: function t(n, a) {
                        var r = this.context;
                        r.$(".select-input").focus();
                        if (a.key !== "0" && e.multiple) {
                            r.getValue();
                            if (!r.options.value.includes(a)) {
                                a.selected = true;
                                r.options.value.push(a);
                            }
                        } else {
                            r.options.data.forEach(function(e) {
                                return e.selected = false;
                            });
                            r.options.value = [ a ];
                        }
                        r.options.onSelect(r, a);
                        r.options.onChange(r, a);
                        r.refresh();
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
            var a = g(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var r = "click.select_" + e.vid, i = a.clickItemClose.bind(a);
            a.$(".select-tags-div").off(r).on(r, ".select-tag-close", i);
            return a;
        }
        f(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = "";
                function a(e) {
                    if (e.length) {
                        return hx(h, e.map(function(e) {
                            return hx(p, e.key, e.value, e.value);
                        }));
                    } else {
                        return "";
                    }
                }
                var r = Array.isArray(t.value) ? t.value.length ? t.value.map(function(e) {
                    return e.value;
                }) : [] : [ t.value.value ];
                if (!t.multiple) {
                    n = hx(y, t.vid, t.disabled ? "disabled" : "", t.placeholder, r.join(","), t.name, t.vid);
                } else {
                    n = hx(M, t.vid, r.length ? "select-hasValue" : "", r.length ? "" : t.placeholder, r.join(","), t.name, r.length ? "select-tags-div-border" : "", a(t.value), t.vid);
                }
                return n;
            }
        }, {
            key: "clickItemClose",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget).parent(), a = n.attr("id"), r = n.attr("title");
                this.options.data.forEach(function(e) {
                    if (e.key == a) e.selected = false;
                });
                this.getValue();
                this.refresh();
                Lego.getView("#dropdown-" + this.options.vid).refresh();
                if (typeof this.options.onDeselect === "function") this.options.onDeselect(this, {
                    key: a,
                    value: r
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
                    return e.selected == true && e.key !== "0";
                });
                return this.options.value;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("selects", k);
    e.exports = k;
}, function(e, t, n) {
    "use strict";
    var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var r = n(18);
    var i = n(126);
    var s = n(129);
    var o = n(130);
    var d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) {
                if (Object.prototype.hasOwnProperty.call(n, a)) {
                    e[a] = n[a];
                }
            }
        }
        return e;
    };
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var l = c([ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ], [ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ]);
    var m = c([ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="bootstrap-datetimepicker-widget">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ]);
    var _ = c([ "<div></div>" ], [ "<div></div>" ]);
    function c(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function f(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : a(t)) === "object" || typeof t === "function") ? t : e;
    }
    function p(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : a(t)));
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
            f(this, t);
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
            var a = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            a.initDatepicker();
            return a;
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
                var a = this, r = n.inline ? n.el : ".input-group input";
                if (n.type !== "range") {
                    var i = this.$(r);
                    if (n.inline) i = this.$el;
                    i.datetimepicker(n.setting);
                    i.on("dp.change", function(e) {
                        if (typeof n.onChange == "function") n.onChange(a, $(this).val());
                    });
                } else {
                    (function() {
                        var e = ".startDate", i = ".endDate";
                        if (!n.startInputEl && !n.endInputEl) {
                            var s = Object.assign({}, n.setting);
                            var o = Object.assign({}, d({}, n.setting, {
                                useCurrent: n.useCurrent
                            }));
                            var u = t.$(e).datetimepicker(s);
                            var l = t.$(i).datetimepicker(o);
                            t.$(e).on("dp.change", function(e) {
                                a.$(i).data("DateTimePicker").minDate(e.date);
                                if (typeof n.onChange == "function") n.onChange(a, $(this).val());
                            });
                            t.$(i).on("dp.change", function(t) {
                                a.$(e).data("DateTimePicker").maxDate(t.date);
                                if (typeof n.onChange == "function") n.onChange(a, $(this).val());
                            });
                        } else if (n.startInputEl || n.endInputEl) {
                            (function() {
                                var e = n.startInputEl || n.endInputEl;
                                if (n.startInputEl) n.setting.useCurrent = false;
                                t.$(r).datetimepicker(n.setting);
                                if (n.endInputEl) {
                                    t.$(r).on("dp.change", function(t) {
                                        var i = e instanceof $ ? e : $(e).find(r);
                                        i.data("DateTimePicker").maxDate(t.date);
                                        if (typeof n.onChange == "function") n.onChange(a, $(this).val());
                                    });
                                } else if (n.startInputEl) {
                                    t.$(r).on("dp.change", function(t) {
                                        var i = e instanceof $ ? e : $(e).find(r);
                                        i.data("DateTimePicker").minDate(t.date);
                                        if (typeof n.onChange == "function") n.onChange(a, $(this).val());
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
                    n = hx(m, t.disabled ? "disabled" : "", t.name, t.placeholder, t.type == "time" ? "clock-circle-o" : "calendar");
                }
                if (t.inline) n = hx(_);
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
            function a() {
                return t.apply(null, arguments);
            }
            function r(e) {
                t = e;
            }
            function i(e) {
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
                var n = [], a;
                for (a = 0; a < e.length; ++a) {
                    n.push(t(e[a], a));
                }
                return n;
            }
            function m(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            function _(e, t) {
                for (var n in t) {
                    if (m(t, n)) {
                        e[n] = t[n];
                    }
                }
                if (m(t, "toString")) {
                    e.toString = t.toString;
                }
                if (m(t, "valueOf")) {
                    e.valueOf = t.valueOf;
                }
                return e;
            }
            function c(e, t, n, a) {
                return In(e, t, n, a, true).utc();
            }
            function f() {
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
                    e._pf = f();
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
                    for (var a = 0; a < n; a++) {
                        if (a in t && e.call(this, t[a], a, t)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            var y = p;
            function M(e) {
                if (e._isValid == null) {
                    var t = h(e);
                    var n = y.call(t.parsedDateParts, function(e) {
                        return e != null;
                    });
                    var a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict) {
                        a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined;
                    }
                    if (Object.isFrozen == null || !Object.isFrozen(e)) {
                        e._isValid = a;
                    } else {
                        return a;
                    }
                }
                return e._isValid;
            }
            function L(e) {
                var t = c(NaN);
                if (e != null) {
                    _(h(t), e);
                } else {
                    h(t).userInvalidated = true;
                }
                return t;
            }
            function v(e) {
                return e === void 0;
            }
            var g = a.momentProperties = [];
            function Y(e, t) {
                var n, a, r;
                if (!v(t._isAMomentObject)) {
                    e._isAMomentObject = t._isAMomentObject;
                }
                if (!v(t._i)) {
                    e._i = t._i;
                }
                if (!v(t._f)) {
                    e._f = t._f;
                }
                if (!v(t._l)) {
                    e._l = t._l;
                }
                if (!v(t._strict)) {
                    e._strict = t._strict;
                }
                if (!v(t._tzm)) {
                    e._tzm = t._tzm;
                }
                if (!v(t._isUTC)) {
                    e._isUTC = t._isUTC;
                }
                if (!v(t._offset)) {
                    e._offset = t._offset;
                }
                if (!v(t._pf)) {
                    e._pf = h(t);
                }
                if (!v(t._locale)) {
                    e._locale = t._locale;
                }
                if (g.length > 0) {
                    for (n in g) {
                        a = g[n];
                        r = t[a];
                        if (!v(r)) {
                            e[a] = r;
                        }
                    }
                }
                return e;
            }
            var k = false;
            function b(e) {
                Y(this, e);
                this._d = new Date(e._d != null ? e._d.getTime() : NaN);
                if (!this.isValid()) {
                    this._d = new Date(NaN);
                }
                if (k === false) {
                    k = true;
                    a.updateOffset(this);
                    k = false;
                }
            }
            function w(e) {
                return e instanceof b || e != null && e._isAMomentObject != null;
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
            function S(e, t, n) {
                var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
                for (s = 0; s < a; s++) {
                    if (n && e[s] !== t[s] || !n && T(e[s]) !== T(t[s])) {
                        i++;
                    }
                }
                return i + r;
            }
            function x(e) {
                if (a.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                    console.warn("Deprecation warning: " + e);
                }
            }
            function j(e, t) {
                var n = true;
                return _(function() {
                    if (a.deprecationHandler != null) {
                        a.deprecationHandler(null, e);
                    }
                    if (n) {
                        var r = [];
                        var i;
                        for (var s = 0; s < arguments.length; s++) {
                            i = "";
                            if (typeof arguments[s] === "object") {
                                i += "\n[" + s + "] ";
                                for (var o in arguments[0]) {
                                    i += o + ": " + arguments[0][o] + ", ";
                                }
                                i = i.slice(0, -2);
                            } else {
                                i = arguments[s];
                            }
                            r.push(i);
                        }
                        x(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack);
                        n = false;
                    }
                    return t.apply(this, arguments);
                }, t);
            }
            var H = {};
            function P(e, t) {
                if (a.deprecationHandler != null) {
                    a.deprecationHandler(e, t);
                }
                if (!H[e]) {
                    x(t);
                    H[e] = true;
                }
            }
            a.suppressDeprecationWarnings = false;
            a.deprecationHandler = null;
            function E(e) {
                return e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
            }
            function C(e) {
                var t, n;
                for (n in e) {
                    t = e[n];
                    if (E(t)) {
                        this[n] = t;
                    } else {
                        this["_" + n] = t;
                    }
                }
                this._config = e;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
            }
            function O(e, t) {
                var n = _({}, e), a;
                for (a in t) {
                    if (m(t, a)) {
                        if (s(e[a]) && s(t[a])) {
                            n[a] = {};
                            _(n[a], e[a]);
                            _(n[a], t[a]);
                        } else if (t[a] != null) {
                            n[a] = t[a];
                        } else {
                            delete n[a];
                        }
                    }
                }
                for (a in e) {
                    if (m(e, a) && !m(t, a) && s(e[a])) {
                        n[a] = _({}, n[a]);
                    }
                }
                return n;
            }
            function W(e) {
                if (e != null) {
                    this.set(e);
                }
            }
            var A;
            if (Object.keys) {
                A = Object.keys;
            } else {
                A = function(e) {
                    var t, n = [];
                    for (t in e) {
                        if (m(e, t)) {
                            n.push(t);
                        }
                    }
                    return n;
                };
            }
            var F = A;
            var z = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };
            function $(e, t, n) {
                var a = this._calendar[e] || this._calendar["sameElse"];
                return E(a) ? a.call(t, n) : a;
            }
            var I = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            function R(e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                if (t || !n) {
                    return t;
                }
                this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1);
                });
                return this._longDateFormat[e];
            }
            var N = "Invalid date";
            function J() {
                return this._invalidDate;
            }
            var U = "%d";
            var q = /\d{1,2}/;
            function V(e) {
                return this._ordinal.replace("%d", e);
            }
            var B = {
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
            function G(e, t, n, a) {
                var r = this._relativeTime[n];
                return E(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
            }
            function Z(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return E(n) ? n(t) : n.replace(/%s/i, t);
            }
            var K = {};
            function Q(e, t) {
                var n = e.toLowerCase();
                K[n] = K[n + "s"] = K[t] = e;
            }
            function X(e) {
                return typeof e === "string" ? K[e] || K[e.toLowerCase()] : undefined;
            }
            function ee(e) {
                var t = {}, n, a;
                for (a in e) {
                    if (m(e, a)) {
                        n = X(a);
                        if (n) {
                            t[n] = e[a];
                        }
                    }
                }
                return t;
            }
            var te = {};
            function ne(e, t) {
                te[e] = t;
            }
            function ae(e) {
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
            function re(e, t) {
                return function(n) {
                    if (n != null) {
                        se(this, e, n);
                        a.updateOffset(this, t);
                        return this;
                    } else {
                        return ie(this, e);
                    }
                };
            }
            function ie(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
            }
            function se(e, t, n) {
                if (e.isValid()) {
                    e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
                }
            }
            function oe(e) {
                e = X(e);
                if (E(this[e])) {
                    return this[e]();
                }
                return this;
            }
            function de(e, t) {
                if (typeof e === "object") {
                    e = ee(e);
                    var n = ae(e);
                    for (var a = 0; a < n.length; a++) {
                        this[n[a].unit](e[n[a].unit]);
                    }
                } else {
                    e = X(e);
                    if (E(this[e])) {
                        return this[e](t);
                    }
                }
                return this;
            }
            function ue(e, t, n) {
                var a = "" + Math.abs(e), r = t - a.length, i = e >= 0;
                return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
            }
            var le = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
            var me = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
            var _e = {};
            var ce = {};
            function fe(e, t, n, a) {
                var r = a;
                if (typeof a === "string") {
                    r = function() {
                        return this[a]();
                    };
                }
                if (e) {
                    ce[e] = r;
                }
                if (t) {
                    ce[t[0]] = function() {
                        return ue(r.apply(this, arguments), t[1], t[2]);
                    };
                }
                if (n) {
                    ce[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e);
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
                var t = e.match(le), n, a;
                for (n = 0, a = t.length; n < a; n++) {
                    if (ce[t[n]]) {
                        t[n] = ce[t[n]];
                    } else {
                        t[n] = he(t[n]);
                    }
                }
                return function(n) {
                    var r = "", i;
                    for (i = 0; i < a; i++) {
                        r += t[i] instanceof Function ? t[i].call(n, e) : t[i];
                    }
                    return r;
                };
            }
            function ye(e, t) {
                if (!e.isValid()) {
                    return e.localeData().invalidDate();
                }
                t = Me(t, e.localeData());
                _e[t] = _e[t] || pe(t);
                return _e[t](e);
            }
            function Me(e, t) {
                var n = 5;
                function a(e) {
                    return t.longDateFormat(e) || e;
                }
                me.lastIndex = 0;
                while (n >= 0 && me.test(e)) {
                    e = e.replace(me, a);
                    me.lastIndex = 0;
                    n -= 1;
                }
                return e;
            }
            var Le = /\d/;
            var ve = /\d\d/;
            var ge = /\d{3}/;
            var Ye = /\d{4}/;
            var ke = /[+-]?\d{6}/;
            var be = /\d\d?/;
            var we = /\d\d\d\d?/;
            var De = /\d\d\d\d\d\d?/;
            var Te = /\d{1,3}/;
            var Se = /\d{1,4}/;
            var xe = /[+-]?\d{1,6}/;
            var je = /\d+/;
            var He = /[+-]?\d+/;
            var Pe = /Z|[+-]\d\d:?\d\d/gi;
            var Ee = /Z|[+-]\d\d(?::?\d\d)?/gi;
            var Ce = /[+-]?\d+(\.\d{1,3})?/;
            var Oe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
            var We = {};
            function Ae(e, t, n) {
                We[e] = E(t) ? t : function(e, a) {
                    return e && n ? n : t;
                };
            }
            function Fe(e, t) {
                if (!m(We, e)) {
                    return new RegExp(ze(e));
                }
                return We[e](t._strict, t._locale);
            }
            function ze(e) {
                return $e(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                    return t || n || a || r;
                }));
            }
            function $e(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            var Ie = {};
            function Re(e, t) {
                var n, a = t;
                if (typeof e === "string") {
                    e = [ e ];
                }
                if (d(t)) {
                    a = function(e, n) {
                        n[t] = T(e);
                    };
                }
                for (n = 0; n < e.length; n++) {
                    Ie[e[n]] = a;
                }
            }
            function Ne(e, t) {
                Re(e, function(e, n, a, r) {
                    a._w = a._w || {};
                    t(e, a._w, a, r);
                });
            }
            function Je(e, t, n) {
                if (t != null && m(Ie, e)) {
                    Ie[e](t, n._a, n, e);
                }
            }
            var Ue = 0;
            var qe = 1;
            var Ve = 2;
            var Be = 3;
            var Ge = 4;
            var Ze = 5;
            var Ke = 6;
            var Qe = 7;
            var Xe = 8;
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
            fe("M", [ "MM", 2 ], "Mo", function() {
                return this.month() + 1;
            });
            fe("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e);
            });
            fe("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e);
            });
            Q("month", "M");
            ne("month", 8);
            Ae("M", be);
            Ae("MM", be, ve);
            Ae("MMM", function(e, t) {
                return t.monthsShortRegex(e);
            });
            Ae("MMMM", function(e, t) {
                return t.monthsRegex(e);
            });
            Re([ "M", "MM" ], function(e, t) {
                t[qe] = T(e) - 1;
            });
            Re([ "MMM", "MMMM" ], function(e, t, n, a) {
                var r = n._locale.monthsParse(e, a, n._strict);
                if (r != null) {
                    t[qe] = r;
                } else {
                    h(n).invalidMonth = e;
                }
            });
            var at = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
            var rt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
            function it(e, t) {
                if (!e) {
                    return this._months;
                }
                return i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || at).test(t) ? "format" : "standalone"][e.month()];
            }
            var st = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
            function ot(e, t) {
                if (!e) {
                    return this._monthsShort;
                }
                return i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[at.test(t) ? "format" : "standalone"][e.month()];
            }
            function dt(e, t, n) {
                var a, r, i, s = e.toLocaleLowerCase();
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (a = 0; a < 12; ++a) {
                        i = c([ 2e3, a ]);
                        this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase();
                        this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "MMM") {
                        r = tt.call(this._shortMonthsParse, s);
                        return r !== -1 ? r : null;
                    } else {
                        r = tt.call(this._longMonthsParse, s);
                        return r !== -1 ? r : null;
                    }
                } else {
                    if (t === "MMM") {
                        r = tt.call(this._shortMonthsParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._longMonthsParse, s);
                        return r !== -1 ? r : null;
                    } else {
                        r = tt.call(this._longMonthsParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._shortMonthsParse, s);
                        return r !== -1 ? r : null;
                    }
                }
            }
            function ut(e, t, n) {
                var a, r, i;
                if (this._monthsParseExact) {
                    return dt.call(this, e, t, n);
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                }
                for (a = 0; a < 12; a++) {
                    r = c([ 2e3, a ]);
                    if (n && !this._longMonthsParse[a]) {
                        this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i");
                        this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i");
                    }
                    if (!n && !this._monthsParse[a]) {
                        i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "");
                        this._monthsParse[a] = new RegExp(i.replace(".", ""), "i");
                    }
                    if (n && t === "MMMM" && this._longMonthsParse[a].test(e)) {
                        return a;
                    } else if (n && t === "MMM" && this._shortMonthsParse[a].test(e)) {
                        return a;
                    } else if (!n && this._monthsParse[a].test(e)) {
                        return a;
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
            function mt(e) {
                if (e != null) {
                    lt(this, e);
                    a.updateOffset(this, true);
                    return this;
                } else {
                    return ie(this, "Month");
                }
            }
            function _t() {
                return nt(this.year(), this.month());
            }
            var ct = Oe;
            function ft(e) {
                if (this._monthsParseExact) {
                    if (!m(this, "_monthsRegex")) {
                        yt.call(this);
                    }
                    if (e) {
                        return this._monthsShortStrictRegex;
                    } else {
                        return this._monthsShortRegex;
                    }
                } else {
                    if (!m(this, "_monthsShortRegex")) {
                        this._monthsShortRegex = ct;
                    }
                    return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex;
                }
            }
            var ht = Oe;
            function pt(e) {
                if (this._monthsParseExact) {
                    if (!m(this, "_monthsRegex")) {
                        yt.call(this);
                    }
                    if (e) {
                        return this._monthsStrictRegex;
                    } else {
                        return this._monthsRegex;
                    }
                } else {
                    if (!m(this, "_monthsRegex")) {
                        this._monthsRegex = ht;
                    }
                    return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex;
                }
            }
            function yt() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t = [], n = [], a = [], r, i;
                for (r = 0; r < 12; r++) {
                    i = c([ 2e3, r ]);
                    t.push(this.monthsShort(i, ""));
                    n.push(this.months(i, ""));
                    a.push(this.months(i, ""));
                    a.push(this.monthsShort(i, ""));
                }
                t.sort(e);
                n.sort(e);
                a.sort(e);
                for (r = 0; r < 12; r++) {
                    t[r] = $e(t[r]);
                    n[r] = $e(n[r]);
                }
                for (r = 0; r < 24; r++) {
                    a[r] = $e(a[r]);
                }
                this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i");
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
            }
            fe("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e;
            });
            fe(0, [ "YY", 2 ], 0, function() {
                return this.year() % 100;
            });
            fe(0, [ "YYYY", 4 ], 0, "year");
            fe(0, [ "YYYYY", 5 ], 0, "year");
            fe(0, [ "YYYYYY", 6, true ], 0, "year");
            Q("year", "y");
            ne("year", 1);
            Ae("Y", He);
            Ae("YY", be, ve);
            Ae("YYYY", Se, Ye);
            Ae("YYYYY", xe, ke);
            Ae("YYYYYY", xe, ke);
            Re([ "YYYYY", "YYYYYY" ], Ue);
            Re("YYYY", function(e, t) {
                t[Ue] = e.length === 2 ? a.parseTwoDigitYear(e) : T(e);
            });
            Re("YY", function(e, t) {
                t[Ue] = a.parseTwoDigitYear(e);
            });
            Re("Y", function(e, t) {
                t[Ue] = parseInt(e, 10);
            });
            function Mt(e) {
                return Lt(e) ? 366 : 365;
            }
            function Lt(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
            }
            a.parseTwoDigitYear = function(e) {
                return T(e) + (T(e) > 68 ? 1900 : 2e3);
            };
            var vt = re("FullYear", true);
            function gt() {
                return Lt(this.year());
            }
            function Yt(e, t, n, a, r, i, s) {
                var o = new Date(e, t, n, a, r, i, s);
                if (e < 100 && e >= 0 && isFinite(o.getFullYear())) {
                    o.setFullYear(e);
                }
                return o;
            }
            function kt(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                if (e < 100 && e >= 0 && isFinite(t.getUTCFullYear())) {
                    t.setUTCFullYear(e);
                }
                return t;
            }
            function bt(e, t, n) {
                var a = 7 + t - n, r = (7 + kt(e, 0, a).getUTCDay() - t) % 7;
                return -r + a - 1;
            }
            function wt(e, t, n, a, r) {
                var i = (7 + n - a) % 7, s = bt(e, a, r), o = 1 + 7 * (t - 1) + i + s, d, u;
                if (o <= 0) {
                    d = e - 1;
                    u = Mt(d) + o;
                } else if (o > Mt(e)) {
                    d = e + 1;
                    u = o - Mt(e);
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
                var a = bt(e.year(), t, n), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, i, s;
                if (r < 1) {
                    s = e.year() - 1;
                    i = r + Tt(s, t, n);
                } else if (r > Tt(e.year(), t, n)) {
                    i = r - Tt(e.year(), t, n);
                    s = e.year() + 1;
                } else {
                    s = e.year();
                    i = r;
                }
                return {
                    week: i,
                    year: s
                };
            }
            function Tt(e, t, n) {
                var a = bt(e, t, n), r = bt(e + 1, t, n);
                return (Mt(e) - a + r) / 7;
            }
            fe("w", [ "ww", 2 ], "wo", "week");
            fe("W", [ "WW", 2 ], "Wo", "isoWeek");
            Q("week", "w");
            Q("isoWeek", "W");
            ne("week", 5);
            ne("isoWeek", 5);
            Ae("w", be);
            Ae("ww", be, ve);
            Ae("W", be);
            Ae("WW", be, ve);
            Ne([ "w", "ww", "W", "WW" ], function(e, t, n, a) {
                t[a.substr(0, 1)] = T(e);
            });
            function St(e) {
                return Dt(e, this._week.dow, this._week.doy).week;
            }
            var xt = {
                dow: 0,
                doy: 6
            };
            function jt() {
                return this._week.dow;
            }
            function Ht() {
                return this._week.doy;
            }
            function Pt(e) {
                var t = this.localeData().week(this);
                return e == null ? t : this.add((e - t) * 7, "d");
            }
            function Et(e) {
                var t = Dt(this, 1, 4).week;
                return e == null ? t : this.add((e - t) * 7, "d");
            }
            fe("d", 0, "do", "day");
            fe("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e);
            });
            fe("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e);
            });
            fe("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e);
            });
            fe("e", 0, 0, "weekday");
            fe("E", 0, 0, "isoWeekday");
            Q("day", "d");
            Q("weekday", "e");
            Q("isoWeekday", "E");
            ne("day", 11);
            ne("weekday", 11);
            ne("isoWeekday", 11);
            Ae("d", be);
            Ae("e", be);
            Ae("E", be);
            Ae("dd", function(e, t) {
                return t.weekdaysMinRegex(e);
            });
            Ae("ddd", function(e, t) {
                return t.weekdaysShortRegex(e);
            });
            Ae("dddd", function(e, t) {
                return t.weekdaysRegex(e);
            });
            Ne([ "dd", "ddd", "dddd" ], function(e, t, n, a) {
                var r = n._locale.weekdaysParse(e, a, n._strict);
                if (r != null) {
                    t.d = r;
                } else {
                    h(n).invalidWeekday = e;
                }
            });
            Ne([ "d", "e", "E" ], function(e, t, n, a) {
                t[a] = T(e);
            });
            function Ct(e, t) {
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
            var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
            function At(e, t) {
                if (!e) {
                    return this._weekdays;
                }
                return i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()];
            }
            var Ft = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
            function zt(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
            }
            var $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            function It(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
            }
            function Rt(e, t, n) {
                var a, r, i, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    for (a = 0; a < 7; ++a) {
                        i = c([ 2e3, 1 ]).day(a);
                        this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase();
                        this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase();
                        this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
                    }
                }
                if (n) {
                    if (t === "dddd") {
                        r = tt.call(this._weekdaysParse, s);
                        return r !== -1 ? r : null;
                    } else if (t === "ddd") {
                        r = tt.call(this._shortWeekdaysParse, s);
                        return r !== -1 ? r : null;
                    } else {
                        r = tt.call(this._minWeekdaysParse, s);
                        return r !== -1 ? r : null;
                    }
                } else {
                    if (t === "dddd") {
                        r = tt.call(this._weekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._shortWeekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._minWeekdaysParse, s);
                        return r !== -1 ? r : null;
                    } else if (t === "ddd") {
                        r = tt.call(this._shortWeekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._weekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._minWeekdaysParse, s);
                        return r !== -1 ? r : null;
                    } else {
                        r = tt.call(this._minWeekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._weekdaysParse, s);
                        if (r !== -1) {
                            return r;
                        }
                        r = tt.call(this._shortWeekdaysParse, s);
                        return r !== -1 ? r : null;
                    }
                }
            }
            function Nt(e, t, n) {
                var a, r, i;
                if (this._weekdaysParseExact) {
                    return Rt.call(this, e, t, n);
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = [];
                }
                for (a = 0; a < 7; a++) {
                    r = c([ 2e3, 1 ]).day(a);
                    if (n && !this._fullWeekdaysParse[a]) {
                        this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i");
                        this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i");
                        this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i");
                    }
                    if (!this._weekdaysParse[a]) {
                        i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, "");
                        this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i");
                    }
                    if (n && t === "dddd" && this._fullWeekdaysParse[a].test(e)) {
                        return a;
                    } else if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e)) {
                        return a;
                    } else if (n && t === "dd" && this._minWeekdaysParse[a].test(e)) {
                        return a;
                    } else if (!n && this._weekdaysParse[a].test(e)) {
                        return a;
                    }
                }
            }
            function Jt(e) {
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (e != null) {
                    e = Ct(e, this.localeData());
                    return this.add(e - t, "d");
                } else {
                    return t;
                }
            }
            function Ut(e) {
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return e == null ? t : this.add(e - t, "d");
            }
            function qt(e) {
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
            var Vt = Oe;
            function Bt(e) {
                if (this._weekdaysParseExact) {
                    if (!m(this, "_weekdaysRegex")) {
                        Xt.call(this);
                    }
                    if (e) {
                        return this._weekdaysStrictRegex;
                    } else {
                        return this._weekdaysRegex;
                    }
                } else {
                    if (!m(this, "_weekdaysRegex")) {
                        this._weekdaysRegex = Vt;
                    }
                    return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex;
                }
            }
            var Gt = Oe;
            function Zt(e) {
                if (this._weekdaysParseExact) {
                    if (!m(this, "_weekdaysRegex")) {
                        Xt.call(this);
                    }
                    if (e) {
                        return this._weekdaysShortStrictRegex;
                    } else {
                        return this._weekdaysShortRegex;
                    }
                } else {
                    if (!m(this, "_weekdaysShortRegex")) {
                        this._weekdaysShortRegex = Gt;
                    }
                    return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                }
            }
            var Kt = Oe;
            function Qt(e) {
                if (this._weekdaysParseExact) {
                    if (!m(this, "_weekdaysRegex")) {
                        Xt.call(this);
                    }
                    if (e) {
                        return this._weekdaysMinStrictRegex;
                    } else {
                        return this._weekdaysMinRegex;
                    }
                } else {
                    if (!m(this, "_weekdaysMinRegex")) {
                        this._weekdaysMinRegex = Kt;
                    }
                    return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                }
            }
            function Xt() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t = [], n = [], a = [], r = [], i, s, o, d, u;
                for (i = 0; i < 7; i++) {
                    s = c([ 2e3, 1 ]).day(i);
                    o = this.weekdaysMin(s, "");
                    d = this.weekdaysShort(s, "");
                    u = this.weekdays(s, "");
                    t.push(o);
                    n.push(d);
                    a.push(u);
                    r.push(o);
                    r.push(d);
                    r.push(u);
                }
                t.sort(e);
                n.sort(e);
                a.sort(e);
                r.sort(e);
                for (i = 0; i < 7; i++) {
                    n[i] = $e(n[i]);
                    a[i] = $e(a[i]);
                    r[i] = $e(r[i]);
                }
                this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i");
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
                this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i");
            }
            function en() {
                return this.hours() % 12 || 12;
            }
            function tn() {
                return this.hours() || 24;
            }
            fe("H", [ "HH", 2 ], 0, "hour");
            fe("h", [ "hh", 2 ], 0, en);
            fe("k", [ "kk", 2 ], 0, tn);
            fe("hmm", 0, 0, function() {
                return "" + en.apply(this) + ue(this.minutes(), 2);
            });
            fe("hmmss", 0, 0, function() {
                return "" + en.apply(this) + ue(this.minutes(), 2) + ue(this.seconds(), 2);
            });
            fe("Hmm", 0, 0, function() {
                return "" + this.hours() + ue(this.minutes(), 2);
            });
            fe("Hmmss", 0, 0, function() {
                return "" + this.hours() + ue(this.minutes(), 2) + ue(this.seconds(), 2);
            });
            function nn(e, t) {
                fe(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t);
                });
            }
            nn("a", true);
            nn("A", false);
            Q("hour", "h");
            ne("hour", 13);
            function an(e, t) {
                return t._meridiemParse;
            }
            Ae("a", an);
            Ae("A", an);
            Ae("H", be);
            Ae("h", be);
            Ae("HH", be, ve);
            Ae("hh", be, ve);
            Ae("hmm", we);
            Ae("hmmss", De);
            Ae("Hmm", we);
            Ae("Hmmss", De);
            Re([ "H", "HH" ], Be);
            Re([ "a", "A" ], function(e, t, n) {
                n._isPm = n._locale.isPM(e);
                n._meridiem = e;
            });
            Re([ "h", "hh" ], function(e, t, n) {
                t[Be] = T(e);
                h(n).bigHour = true;
            });
            Re("hmm", function(e, t, n) {
                var a = e.length - 2;
                t[Be] = T(e.substr(0, a));
                t[Ge] = T(e.substr(a));
                h(n).bigHour = true;
            });
            Re("hmmss", function(e, t, n) {
                var a = e.length - 4;
                var r = e.length - 2;
                t[Be] = T(e.substr(0, a));
                t[Ge] = T(e.substr(a, 2));
                t[Ze] = T(e.substr(r));
                h(n).bigHour = true;
            });
            Re("Hmm", function(e, t, n) {
                var a = e.length - 2;
                t[Be] = T(e.substr(0, a));
                t[Ge] = T(e.substr(a));
            });
            Re("Hmmss", function(e, t, n) {
                var a = e.length - 4;
                var r = e.length - 2;
                t[Be] = T(e.substr(0, a));
                t[Ge] = T(e.substr(a, 2));
                t[Ze] = T(e.substr(r));
            });
            function rn(e) {
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
            var dn = re("Hours", true);
            var un = {
                calendar: z,
                longDateFormat: I,
                invalidDate: N,
                ordinal: U,
                ordinalParse: q,
                relativeTime: B,
                months: rt,
                monthsShort: st,
                week: xt,
                weekdays: Wt,
                weekdaysMin: $t,
                weekdaysShort: Ft,
                meridiemParse: sn
            };
            var ln = {};
            var mn = {};
            var _n;
            function cn(e) {
                return e ? e.toLowerCase().replace("_", "-") : e;
            }
            function fn(e) {
                var t = 0, n, a, r, i;
                while (t < e.length) {
                    i = cn(e[t]).split("-");
                    n = i.length;
                    a = cn(e[t + 1]);
                    a = a ? a.split("-") : null;
                    while (n > 0) {
                        r = hn(i.slice(0, n).join("-"));
                        if (r) {
                            return r;
                        }
                        if (a && a.length >= n && S(i, a, true) >= n - 1) {
                            break;
                        }
                        n--;
                    }
                    t++;
                }
                return null;
            }
            function hn(t) {
                var a = null;
                if (!ln[t] && typeof e !== "undefined" && e && e.exports) {
                    try {
                        a = _n._abbr;
                        n(20)("./" + t);
                        pn(a);
                    } catch (e) {}
                }
                return ln[t];
            }
            function pn(e, t) {
                var n;
                if (e) {
                    if (v(t)) {
                        n = Ln(e);
                    } else {
                        n = yn(e, t);
                    }
                    if (n) {
                        _n = n;
                    }
                }
                return _n._abbr;
            }
            function yn(e, t) {
                if (t !== null) {
                    var n = un;
                    t.abbr = e;
                    if (ln[e] != null) {
                        P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                        n = ln[e]._config;
                    } else if (t.parentLocale != null) {
                        if (ln[t.parentLocale] != null) {
                            n = ln[t.parentLocale]._config;
                        } else {
                            if (!mn[t.parentLocale]) {
                                mn[t.parentLocale] = [];
                            }
                            mn[t.parentLocale].push({
                                name: e,
                                config: t
                            });
                            return null;
                        }
                    }
                    ln[e] = new W(O(n, t));
                    if (mn[e]) {
                        mn[e].forEach(function(e) {
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
            function Mn(e, t) {
                if (t != null) {
                    var n, a = un;
                    if (ln[e] != null) {
                        a = ln[e]._config;
                    }
                    t = O(a, t);
                    n = new W(t);
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
            function Ln(e) {
                var t;
                if (e && e._locale && e._locale._abbr) {
                    e = e._locale._abbr;
                }
                if (!e) {
                    return _n;
                }
                if (!i(e)) {
                    t = hn(e);
                    if (t) {
                        return t;
                    }
                    e = [ e ];
                }
                return fn(e);
            }
            function vn() {
                return F(ln);
            }
            function gn(e) {
                var t;
                var n = e._a;
                if (n && h(e).overflow === -2) {
                    t = n[qe] < 0 || n[qe] > 11 ? qe : n[Ve] < 1 || n[Ve] > nt(n[Ue], n[qe]) ? Ve : n[Be] < 0 || n[Be] > 24 || n[Be] === 24 && (n[Ge] !== 0 || n[Ze] !== 0 || n[Ke] !== 0) ? Be : n[Ge] < 0 || n[Ge] > 59 ? Ge : n[Ze] < 0 || n[Ze] > 59 ? Ze : n[Ke] < 0 || n[Ke] > 999 ? Ke : -1;
                    if (h(e)._overflowDayOfYear && (t < Ue || t > Ve)) {
                        t = Ve;
                    }
                    if (h(e)._overflowWeeks && t === -1) {
                        t = Qe;
                    }
                    if (h(e)._overflowWeekday && t === -1) {
                        t = Xe;
                    }
                    h(e).overflow = t;
                }
                return e;
            }
            var Yn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var kn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
            var bn = /Z|[+-]\d\d(?::?\d\d)?/;
            var wn = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, false ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, false ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, false ], [ "YYYYDDD", /\d{7}/ ] ];
            var Dn = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ];
            var Tn = /^\/?Date\((\-?\d+)/i;
            function Sn(e) {
                var t, n, a = e._i, r = Yn.exec(a) || kn.exec(a), i, s, o, d;
                if (r) {
                    h(e).iso = true;
                    for (t = 0, n = wn.length; t < n; t++) {
                        if (wn[t][1].exec(r[1])) {
                            s = wn[t][0];
                            i = wn[t][2] !== false;
                            break;
                        }
                    }
                    if (s == null) {
                        e._isValid = false;
                        return;
                    }
                    if (r[3]) {
                        for (t = 0, n = Dn.length; t < n; t++) {
                            if (Dn[t][1].exec(r[3])) {
                                o = (r[2] || " ") + Dn[t][0];
                                break;
                            }
                        }
                        if (o == null) {
                            e._isValid = false;
                            return;
                        }
                    }
                    if (!i && o != null) {
                        e._isValid = false;
                        return;
                    }
                    if (r[4]) {
                        if (bn.exec(r[4])) {
                            d = "Z";
                        } else {
                            e._isValid = false;
                            return;
                        }
                    }
                    e._f = s + (o || "") + (d || "");
                    Cn(e);
                } else {
                    e._isValid = false;
                }
            }
            function xn(e) {
                var t = Tn.exec(e._i);
                if (t !== null) {
                    e._d = new Date(+t[1]);
                    return;
                }
                Sn(e);
                if (e._isValid === false) {
                    delete e._isValid;
                    a.createFromInputFallback(e);
                }
            }
            a.createFromInputFallback = j("value provided is not in a recognized ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
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
                var t = new Date(a.now());
                if (e._useUTC) {
                    return [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ];
                }
                return [ t.getFullYear(), t.getMonth(), t.getDate() ];
            }
            function Pn(e) {
                var t, n, a = [], r, i;
                if (e._d) {
                    return;
                }
                r = Hn(e);
                if (e._w && e._a[Ve] == null && e._a[qe] == null) {
                    En(e);
                }
                if (e._dayOfYear) {
                    i = jn(e._a[Ue], r[Ue]);
                    if (e._dayOfYear > Mt(i)) {
                        h(e)._overflowDayOfYear = true;
                    }
                    n = kt(i, 0, e._dayOfYear);
                    e._a[qe] = n.getUTCMonth();
                    e._a[Ve] = n.getUTCDate();
                }
                for (t = 0; t < 3 && e._a[t] == null; ++t) {
                    e._a[t] = a[t] = r[t];
                }
                for (;t < 7; t++) {
                    e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
                }
                if (e._a[Be] === 24 && e._a[Ge] === 0 && e._a[Ze] === 0 && e._a[Ke] === 0) {
                    e._nextDay = true;
                    e._a[Be] = 0;
                }
                e._d = (e._useUTC ? kt : Yt).apply(null, a);
                if (e._tzm != null) {
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
                }
                if (e._nextDay) {
                    e._a[Be] = 24;
                }
            }
            function En(e) {
                var t, n, a, r, i, s, o, d;
                t = e._w;
                if (t.GG != null || t.W != null || t.E != null) {
                    i = 1;
                    s = 4;
                    n = jn(t.GG, e._a[Ue], Dt(Rn(), 1, 4).year);
                    a = jn(t.W, 1);
                    r = jn(t.E, 1);
                    if (r < 1 || r > 7) {
                        d = true;
                    }
                } else {
                    i = e._locale._week.dow;
                    s = e._locale._week.doy;
                    var u = Dt(Rn(), i, s);
                    n = jn(t.gg, e._a[Ue], u.year);
                    a = jn(t.w, u.week);
                    if (t.d != null) {
                        r = t.d;
                        if (r < 0 || r > 6) {
                            d = true;
                        }
                    } else if (t.e != null) {
                        r = t.e + i;
                        if (t.e < 0 || t.e > 6) {
                            d = true;
                        }
                    } else {
                        r = i;
                    }
                }
                if (a < 1 || a > Tt(n, i, s)) {
                    h(e)._overflowWeeks = true;
                } else if (d != null) {
                    h(e)._overflowWeekday = true;
                } else {
                    o = wt(n, a, r, i, s);
                    e._a[Ue] = o.year;
                    e._dayOfYear = o.dayOfYear;
                }
            }
            a.ISO_8601 = function() {};
            function Cn(e) {
                if (e._f === a.ISO_8601) {
                    Sn(e);
                    return;
                }
                e._a = [];
                h(e).empty = true;
                var t = "" + e._i, n, r, i, s, o, d = t.length, u = 0;
                i = Me(e._f, e._locale).match(le) || [];
                for (n = 0; n < i.length; n++) {
                    s = i[n];
                    r = (t.match(Fe(s, e)) || [])[0];
                    if (r) {
                        o = t.substr(0, t.indexOf(r));
                        if (o.length > 0) {
                            h(e).unusedInput.push(o);
                        }
                        t = t.slice(t.indexOf(r) + r.length);
                        u += r.length;
                    }
                    if (ce[s]) {
                        if (r) {
                            h(e).empty = false;
                        } else {
                            h(e).unusedTokens.push(s);
                        }
                        Je(s, r, e);
                    } else if (e._strict && !r) {
                        h(e).unusedTokens.push(s);
                    }
                }
                h(e).charsLeftOver = d - u;
                if (t.length > 0) {
                    h(e).unusedInput.push(t);
                }
                if (e._a[Be] <= 12 && h(e).bigHour === true && e._a[Be] > 0) {
                    h(e).bigHour = undefined;
                }
                h(e).parsedDateParts = e._a.slice(0);
                h(e).meridiem = e._meridiem;
                e._a[Be] = On(e._locale, e._a[Be], e._meridiem);
                Pn(e);
                gn(e);
            }
            function On(e, t, n) {
                var a;
                if (n == null) {
                    return t;
                }
                if (e.meridiemHour != null) {
                    return e.meridiemHour(t, n);
                } else if (e.isPM != null) {
                    a = e.isPM(n);
                    if (a && t < 12) {
                        t += 12;
                    }
                    if (!a && t === 12) {
                        t = 0;
                    }
                    return t;
                } else {
                    return t;
                }
            }
            function Wn(e) {
                var t, n, a, r, i;
                if (e._f.length === 0) {
                    h(e).invalidFormat = true;
                    e._d = new Date(NaN);
                    return;
                }
                for (r = 0; r < e._f.length; r++) {
                    i = 0;
                    t = Y({}, e);
                    if (e._useUTC != null) {
                        t._useUTC = e._useUTC;
                    }
                    t._f = e._f[r];
                    Cn(t);
                    if (!M(t)) {
                        continue;
                    }
                    i += h(t).charsLeftOver;
                    i += h(t).unusedTokens.length * 10;
                    h(t).score = i;
                    if (a == null || i < a) {
                        a = i;
                        n = t;
                    }
                }
                _(e, n || t);
            }
            function An(e) {
                if (e._d) {
                    return;
                }
                var t = ee(e._i);
                e._a = l([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], function(e) {
                    return e && parseInt(e, 10);
                });
                Pn(e);
            }
            function Fn(e) {
                var t = new b(gn(zn(e)));
                if (t._nextDay) {
                    t.add(1, "d");
                    t._nextDay = undefined;
                }
                return t;
            }
            function zn(e) {
                var t = e._i, n = e._f;
                e._locale = e._locale || Ln(e._l);
                if (t === null || n === undefined && t === "") {
                    return L({
                        nullInput: true
                    });
                }
                if (typeof t === "string") {
                    e._i = t = e._locale.preparse(t);
                }
                if (w(t)) {
                    return new b(gn(t));
                } else if (u(t)) {
                    e._d = t;
                } else if (i(n)) {
                    Wn(e);
                } else if (n) {
                    Cn(e);
                } else {
                    $n(e);
                }
                if (!M(e)) {
                    e._d = null;
                }
                return e;
            }
            function $n(e) {
                var t = e._i;
                if (t === undefined) {
                    e._d = new Date(a.now());
                } else if (u(t)) {
                    e._d = new Date(t.valueOf());
                } else if (typeof t === "string") {
                    xn(e);
                } else if (i(t)) {
                    e._a = l(t.slice(0), function(e) {
                        return parseInt(e, 10);
                    });
                    Pn(e);
                } else if (typeof t === "object") {
                    An(e);
                } else if (d(t)) {
                    e._d = new Date(t);
                } else {
                    a.createFromInputFallback(e);
                }
            }
            function In(e, t, n, a, r) {
                var d = {};
                if (n === true || n === false) {
                    a = n;
                    n = undefined;
                }
                if (s(e) && o(e) || i(e) && e.length === 0) {
                    e = undefined;
                }
                d._isAMomentObject = true;
                d._useUTC = d._isUTC = r;
                d._l = n;
                d._i = e;
                d._f = t;
                d._strict = a;
                return Fn(d);
            }
            function Rn(e, t, n, a) {
                return In(e, t, n, a, false);
            }
            var Nn = j("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Rn.apply(null, arguments);
                if (this.isValid() && e.isValid()) {
                    return e < this ? this : e;
                } else {
                    return L();
                }
            });
            var Jn = j("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Rn.apply(null, arguments);
                if (this.isValid() && e.isValid()) {
                    return e > this ? this : e;
                } else {
                    return L();
                }
            });
            function Un(e, t) {
                var n, a;
                if (t.length === 1 && i(t[0])) {
                    t = t[0];
                }
                if (!t.length) {
                    return Rn();
                }
                n = t[0];
                for (a = 1; a < t.length; ++a) {
                    if (!t[a].isValid() || t[a][e](n)) {
                        n = t[a];
                    }
                }
                return n;
            }
            function qn() {
                var e = [].slice.call(arguments, 0);
                return Un("isBefore", e);
            }
            function Vn() {
                var e = [].slice.call(arguments, 0);
                return Un("isAfter", e);
            }
            var Bn = function() {
                return Date.now ? Date.now() : +new Date();
            };
            function Gn(e) {
                var t = ee(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, i = t.week || 0, s = t.day || 0, o = t.hour || 0, d = t.minute || 0, u = t.second || 0, l = t.millisecond || 0;
                this._milliseconds = +l + u * 1e3 + d * 6e4 + o * 1e3 * 60 * 60;
                this._days = +s + i * 7;
                this._months = +r + a * 3 + n * 12;
                this._data = {};
                this._locale = Ln();
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
            function Qn(e, t) {
                fe(e, 0, 0, function() {
                    var e = this.utcOffset();
                    var n = "+";
                    if (e < 0) {
                        e = -e;
                        n = "-";
                    }
                    return n + ue(~~(e / 60), 2) + t + ue(~~e % 60, 2);
                });
            }
            Qn("Z", ":");
            Qn("ZZ", "");
            Ae("Z", Ee);
            Ae("ZZ", Ee);
            Re([ "Z", "ZZ" ], function(e, t, n) {
                n._useUTC = true;
                n._tzm = ea(Ee, e);
            });
            var Xn = /([\+\-]|\d\d)/gi;
            function ea(e, t) {
                var n = (t || "").match(e);
                if (n === null) {
                    return null;
                }
                var a = n[n.length - 1] || [];
                var r = (a + "").match(Xn) || [ "-", 0, 0 ];
                var i = +(r[1] * 60) + T(r[2]);
                return i === 0 ? 0 : r[0] === "+" ? i : -i;
            }
            function ta(e, t) {
                var n, r;
                if (t._isUTC) {
                    n = t.clone();
                    r = (w(e) || u(e) ? e.valueOf() : Rn(e).valueOf()) - n.valueOf();
                    n._d.setTime(n._d.valueOf() + r);
                    a.updateOffset(n, false);
                    return n;
                } else {
                    return Rn(e).local();
                }
            }
            function na(e) {
                return -Math.round(e._d.getTimezoneOffset() / 15) * 15;
            }
            a.updateOffset = function() {};
            function aa(e, t) {
                var n = this._offset || 0, r;
                if (!this.isValid()) {
                    return e != null ? this : NaN;
                }
                if (e != null) {
                    if (typeof e === "string") {
                        e = ea(Ee, e);
                        if (e === null) {
                            return this;
                        }
                    } else if (Math.abs(e) < 16) {
                        e = e * 60;
                    }
                    if (!this._isUTC && t) {
                        r = na(this);
                    }
                    this._offset = e;
                    this._isUTC = true;
                    if (r != null) {
                        this.add(r, "m");
                    }
                    if (n !== e) {
                        if (!t || this._changeInProgress) {
                            ga(this, pa(e - n, "m"), 1, false);
                        } else if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            a.updateOffset(this, true);
                            this._changeInProgress = null;
                        }
                    }
                    return this;
                } else {
                    return this._isUTC ? n : na(this);
                }
            }
            function ra(e, t) {
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
            function ia(e) {
                return this.utcOffset(0, e);
            }
            function sa(e) {
                if (this._isUTC) {
                    this.utcOffset(0, e);
                    this._isUTC = false;
                    if (e) {
                        this.subtract(na(this), "m");
                    }
                }
                return this;
            }
            function oa() {
                if (this._tzm != null) {
                    this.utcOffset(this._tzm);
                } else if (typeof this._i === "string") {
                    var e = ea(Pe, this._i);
                    if (e != null) {
                        this.utcOffset(e);
                    } else {
                        this.utcOffset(0, true);
                    }
                }
                return this;
            }
            function da(e) {
                if (!this.isValid()) {
                    return false;
                }
                e = e ? Rn(e).utcOffset() : 0;
                return (this.utcOffset() - e) % 60 === 0;
            }
            function ua() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
            }
            function la() {
                if (!v(this._isDSTShifted)) {
                    return this._isDSTShifted;
                }
                var e = {};
                Y(e, this);
                e = zn(e);
                if (e._a) {
                    var t = e._isUTC ? c(e._a) : Rn(e._a);
                    this._isDSTShifted = this.isValid() && S(e._a, t.toArray()) > 0;
                } else {
                    this._isDSTShifted = false;
                }
                return this._isDSTShifted;
            }
            function ma() {
                return this.isValid() ? !this._isUTC : false;
            }
            function _a() {
                return this.isValid() ? this._isUTC : false;
            }
            function ca() {
                return this.isValid() ? this._isUTC && this._offset === 0 : false;
            }
            var fa = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
            var ha = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            function pa(e, t) {
                var n = e, a = null, r, i, s;
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
                } else if (!!(a = fa.exec(e))) {
                    r = a[1] === "-" ? -1 : 1;
                    n = {
                        y: 0,
                        d: T(a[Ve]) * r,
                        h: T(a[Be]) * r,
                        m: T(a[Ge]) * r,
                        s: T(a[Ze]) * r,
                        ms: T(Kn(a[Ke] * 1e3)) * r
                    };
                } else if (!!(a = ha.exec(e))) {
                    r = a[1] === "-" ? -1 : 1;
                    n = {
                        y: ya(a[2], r),
                        M: ya(a[3], r),
                        w: ya(a[4], r),
                        d: ya(a[5], r),
                        h: ya(a[6], r),
                        m: ya(a[7], r),
                        s: ya(a[8], r)
                    };
                } else if (n == null) {
                    n = {};
                } else if (typeof n === "object" && ("from" in n || "to" in n)) {
                    s = La(Rn(n.from), Rn(n.to));
                    n = {};
                    n.ms = s.milliseconds;
                    n.M = s.months;
                }
                i = new Gn(n);
                if (Zn(e) && m(e, "_locale")) {
                    i._locale = e._locale;
                }
                return i;
            }
            pa.fn = Gn.prototype;
            function ya(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t;
            }
            function Ma(e, t) {
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
            function La(e, t) {
                var n;
                if (!(e.isValid() && t.isValid())) {
                    return {
                        milliseconds: 0,
                        months: 0
                    };
                }
                t = ta(t, e);
                if (e.isBefore(t)) {
                    n = Ma(e, t);
                } else {
                    n = Ma(t, e);
                    n.milliseconds = -n.milliseconds;
                    n.months = -n.months;
                }
                return n;
            }
            function va(e, t) {
                return function(n, a) {
                    var r, i;
                    if (a !== null && !isNaN(+a)) {
                        P(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                        i = n;
                        n = a;
                        a = i;
                    }
                    n = typeof n === "string" ? +n : n;
                    r = pa(n, a);
                    ga(this, r, e);
                    return this;
                };
            }
            function ga(e, t, n, r) {
                var i = t._milliseconds, s = Kn(t._days), o = Kn(t._months);
                if (!e.isValid()) {
                    return;
                }
                r = r == null ? true : r;
                if (i) {
                    e._d.setTime(e._d.valueOf() + i * n);
                }
                if (s) {
                    se(e, "Date", ie(e, "Date") + s * n);
                }
                if (o) {
                    lt(e, ie(e, "Month") + o * n);
                }
                if (r) {
                    a.updateOffset(e, s || o);
                }
            }
            var Ya = va(1, "add");
            var ka = va(-1, "subtract");
            function ba(e, t) {
                var n = e.diff(t, "days", true);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
            }
            function wa(e, t) {
                var n = e || Rn(), r = ta(n, this).startOf("day"), i = a.calendarFormat(this, r) || "sameElse";
                var s = t && (E(t[i]) ? t[i].call(this, n) : t[i]);
                return this.format(s || this.localeData().calendar(i, this, Rn(n)));
            }
            function Da() {
                return new b(this);
            }
            function Ta(e, t) {
                var n = w(e) ? e : Rn(e);
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = X(!v(t) ? t : "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() > n.valueOf();
                } else {
                    return n.valueOf() < this.clone().startOf(t).valueOf();
                }
            }
            function Sa(e, t) {
                var n = w(e) ? e : Rn(e);
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = X(!v(t) ? t : "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() < n.valueOf();
                } else {
                    return this.clone().endOf(t).valueOf() < n.valueOf();
                }
            }
            function xa(e, t, n, a) {
                a = a || "()";
                return (a[0] === "(" ? this.isAfter(e, n) : !this.isBefore(e, n)) && (a[1] === ")" ? this.isBefore(t, n) : !this.isAfter(t, n));
            }
            function ja(e, t) {
                var n = w(e) ? e : Rn(e), a;
                if (!(this.isValid() && n.isValid())) {
                    return false;
                }
                t = X(t || "millisecond");
                if (t === "millisecond") {
                    return this.valueOf() === n.valueOf();
                } else {
                    a = n.valueOf();
                    return this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf();
                }
            }
            function Ha(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t);
            }
            function Pa(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t);
            }
            function Ea(e, t, n) {
                var a, r, i, s;
                if (!this.isValid()) {
                    return NaN;
                }
                a = ta(e, this);
                if (!a.isValid()) {
                    return NaN;
                }
                r = (a.utcOffset() - this.utcOffset()) * 6e4;
                t = X(t);
                if (t === "year" || t === "month" || t === "quarter") {
                    s = Ca(this, a);
                    if (t === "quarter") {
                        s = s / 3;
                    } else if (t === "year") {
                        s = s / 12;
                    }
                } else {
                    i = this - a;
                    s = t === "second" ? i / 1e3 : t === "minute" ? i / 6e4 : t === "hour" ? i / 36e5 : t === "day" ? (i - r) / 864e5 : t === "week" ? (i - r) / 6048e5 : i;
                }
                return n ? s : D(s);
            }
            function Ca(e, t) {
                var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), r, i;
                if (t - a < 0) {
                    r = e.clone().add(n - 1, "months");
                    i = (t - a) / (a - r);
                } else {
                    r = e.clone().add(n + 1, "months");
                    i = (t - a) / (r - a);
                }
                return -(n + i) || 0;
            }
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            function Oa() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }
            function Wa() {
                var e = this.clone().utc();
                if (0 < e.year() && e.year() <= 9999) {
                    if (E(Date.prototype.toISOString)) {
                        return this.toDate().toISOString();
                    } else {
                        return ye(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                    }
                } else {
                    return ye(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                }
            }
            function Aa() {
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
                var a = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                var r = "-MM-DD[T]HH:mm:ss.SSS";
                var i = t + '[")]';
                return this.format(n + a + r + i);
            }
            function Fa(e) {
                if (!e) {
                    e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat;
                }
                var t = ye(this, e);
                return this.localeData().postformat(t);
            }
            function za(e, t) {
                if (this.isValid() && (w(e) && e.isValid() || Rn(e).isValid())) {
                    return pa({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t);
                } else {
                    return this.localeData().invalidDate();
                }
            }
            function $a(e) {
                return this.from(Rn(), e);
            }
            function Ia(e, t) {
                if (this.isValid() && (w(e) && e.isValid() || Rn(e).isValid())) {
                    return pa({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t);
                } else {
                    return this.localeData().invalidDate();
                }
            }
            function Ra(e) {
                return this.to(Rn(), e);
            }
            function Na(e) {
                var t;
                if (e === undefined) {
                    return this._locale._abbr;
                } else {
                    t = Ln(e);
                    if (t != null) {
                        this._locale = t;
                    }
                    return this;
                }
            }
            var Ja = j("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                if (e === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(e);
                }
            });
            function Ua() {
                return this._locale;
            }
            function qa(e) {
                e = X(e);
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
            function Va(e) {
                e = X(e);
                if (e === undefined || e === "millisecond") {
                    return this;
                }
                if (e === "date") {
                    e = "day";
                }
                return this.startOf(e).add(1, e === "isoWeek" ? "week" : e).subtract(1, "ms");
            }
            function Ba() {
                return this._d.valueOf() - (this._offset || 0) * 6e4;
            }
            function Ga() {
                return Math.floor(this.valueOf() / 1e3);
            }
            function Za() {
                return new Date(this.valueOf());
            }
            function Ka() {
                var e = this;
                return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
            }
            function Qa() {
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
            function Xa() {
                return this.isValid() ? this.toISOString() : null;
            }
            function er() {
                return M(this);
            }
            function tr() {
                return _({}, h(this));
            }
            function nr() {
                return h(this).overflow;
            }
            function ar() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                };
            }
            fe(0, [ "gg", 2 ], 0, function() {
                return this.weekYear() % 100;
            });
            fe(0, [ "GG", 2 ], 0, function() {
                return this.isoWeekYear() % 100;
            });
            function rr(e, t) {
                fe(0, [ e, e.length ], 0, t);
            }
            rr("gggg", "weekYear");
            rr("ggggg", "weekYear");
            rr("GGGG", "isoWeekYear");
            rr("GGGGG", "isoWeekYear");
            Q("weekYear", "gg");
            Q("isoWeekYear", "GG");
            ne("weekYear", 1);
            ne("isoWeekYear", 1);
            Ae("G", He);
            Ae("g", He);
            Ae("GG", be, ve);
            Ae("gg", be, ve);
            Ae("GGGG", Se, Ye);
            Ae("gggg", Se, Ye);
            Ae("GGGGG", xe, ke);
            Ae("ggggg", xe, ke);
            Ne([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, a) {
                t[a.substr(0, 2)] = T(e);
            });
            Ne([ "gg", "GG" ], function(e, t, n, r) {
                t[r] = a.parseTwoDigitYear(e);
            });
            function ir(e) {
                return ur.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
            }
            function sr(e) {
                return ur.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }
            function or() {
                return Tt(this.year(), 1, 4);
            }
            function dr() {
                var e = this.localeData()._week;
                return Tt(this.year(), e.dow, e.doy);
            }
            function ur(e, t, n, a, r) {
                var i;
                if (e == null) {
                    return Dt(this, a, r).year;
                } else {
                    i = Tt(e, a, r);
                    if (t > i) {
                        t = i;
                    }
                    return lr.call(this, e, t, n, a, r);
                }
            }
            function lr(e, t, n, a, r) {
                var i = wt(e, t, n, a, r), s = kt(i.year, 0, i.dayOfYear);
                this.year(s.getUTCFullYear());
                this.month(s.getUTCMonth());
                this.date(s.getUTCDate());
                return this;
            }
            fe("Q", 0, "Qo", "quarter");
            Q("quarter", "Q");
            ne("quarter", 7);
            Ae("Q", Le);
            Re("Q", function(e, t) {
                t[qe] = (T(e) - 1) * 3;
            });
            function mr(e) {
                return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
            }
            fe("D", [ "DD", 2 ], "Do", "date");
            Q("date", "D");
            ne("date", 9);
            Ae("D", be);
            Ae("DD", be, ve);
            Ae("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient;
            });
            Re([ "D", "DD" ], Ve);
            Re("Do", function(e, t) {
                t[Ve] = T(e.match(be)[0], 10);
            });
            var _r = re("Date", true);
            fe("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
            Q("dayOfYear", "DDD");
            ne("dayOfYear", 4);
            Ae("DDD", Te);
            Ae("DDDD", ge);
            Re([ "DDD", "DDDD" ], function(e, t, n) {
                n._dayOfYear = T(e);
            });
            function cr(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return e == null ? t : this.add(e - t, "d");
            }
            fe("m", [ "mm", 2 ], 0, "minute");
            Q("minute", "m");
            ne("minute", 14);
            Ae("m", be);
            Ae("mm", be, ve);
            Re([ "m", "mm" ], Ge);
            var fr = re("Minutes", false);
            fe("s", [ "ss", 2 ], 0, "second");
            Q("second", "s");
            ne("second", 15);
            Ae("s", be);
            Ae("ss", be, ve);
            Re([ "s", "ss" ], Ze);
            var hr = re("Seconds", false);
            fe("S", 0, 0, function() {
                return ~~(this.millisecond() / 100);
            });
            fe(0, [ "SS", 2 ], 0, function() {
                return ~~(this.millisecond() / 10);
            });
            fe(0, [ "SSS", 3 ], 0, "millisecond");
            fe(0, [ "SSSS", 4 ], 0, function() {
                return this.millisecond() * 10;
            });
            fe(0, [ "SSSSS", 5 ], 0, function() {
                return this.millisecond() * 100;
            });
            fe(0, [ "SSSSSS", 6 ], 0, function() {
                return this.millisecond() * 1e3;
            });
            fe(0, [ "SSSSSSS", 7 ], 0, function() {
                return this.millisecond() * 1e4;
            });
            fe(0, [ "SSSSSSSS", 8 ], 0, function() {
                return this.millisecond() * 1e5;
            });
            fe(0, [ "SSSSSSSSS", 9 ], 0, function() {
                return this.millisecond() * 1e6;
            });
            Q("millisecond", "ms");
            ne("millisecond", 16);
            Ae("S", Te, Le);
            Ae("SS", Te, ve);
            Ae("SSS", Te, ge);
            var pr;
            for (pr = "SSSS"; pr.length <= 9; pr += "S") {
                Ae(pr, je);
            }
            function yr(e, t) {
                t[Ke] = T(("0." + e) * 1e3);
            }
            for (pr = "S"; pr.length <= 9; pr += "S") {
                Re(pr, yr);
            }
            var Mr = re("Milliseconds", false);
            fe("z", 0, 0, "zoneAbbr");
            fe("zz", 0, 0, "zoneName");
            function Lr() {
                return this._isUTC ? "UTC" : "";
            }
            function vr() {
                return this._isUTC ? "Coordinated Universal Time" : "";
            }
            var gr = b.prototype;
            gr.add = Ya;
            gr.calendar = wa;
            gr.clone = Da;
            gr.diff = Ea;
            gr.endOf = Va;
            gr.format = Fa;
            gr.from = za;
            gr.fromNow = $a;
            gr.to = Ia;
            gr.toNow = Ra;
            gr.get = oe;
            gr.invalidAt = nr;
            gr.isAfter = Ta;
            gr.isBefore = Sa;
            gr.isBetween = xa;
            gr.isSame = ja;
            gr.isSameOrAfter = Ha;
            gr.isSameOrBefore = Pa;
            gr.isValid = er;
            gr.lang = Ja;
            gr.locale = Na;
            gr.localeData = Ua;
            gr.max = Jn;
            gr.min = Nn;
            gr.parsingFlags = tr;
            gr.set = de;
            gr.startOf = qa;
            gr.subtract = ka;
            gr.toArray = Ka;
            gr.toObject = Qa;
            gr.toDate = Za;
            gr.toISOString = Wa;
            gr.inspect = Aa;
            gr.toJSON = Xa;
            gr.toString = Oa;
            gr.unix = Ga;
            gr.valueOf = Ba;
            gr.creationData = ar;
            gr.year = vt;
            gr.isLeapYear = gt;
            gr.weekYear = ir;
            gr.isoWeekYear = sr;
            gr.quarter = gr.quarters = mr;
            gr.month = mt;
            gr.daysInMonth = _t;
            gr.week = gr.weeks = Pt;
            gr.isoWeek = gr.isoWeeks = Et;
            gr.weeksInYear = dr;
            gr.isoWeeksInYear = or;
            gr.date = _r;
            gr.day = gr.days = Jt;
            gr.weekday = Ut;
            gr.isoWeekday = qt;
            gr.dayOfYear = cr;
            gr.hour = gr.hours = dn;
            gr.minute = gr.minutes = fr;
            gr.second = gr.seconds = hr;
            gr.millisecond = gr.milliseconds = Mr;
            gr.utcOffset = aa;
            gr.utc = ia;
            gr.local = sa;
            gr.parseZone = oa;
            gr.hasAlignedHourOffset = da;
            gr.isDST = ua;
            gr.isLocal = ma;
            gr.isUtcOffset = _a;
            gr.isUtc = ca;
            gr.isUTC = ca;
            gr.zoneAbbr = Lr;
            gr.zoneName = vr;
            gr.dates = j("dates accessor is deprecated. Use date instead.", _r);
            gr.months = j("months accessor is deprecated. Use month instead", mt);
            gr.years = j("years accessor is deprecated. Use year instead", vt);
            gr.zone = j("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", ra);
            gr.isDSTShifted = j("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", la);
            function Yr(e) {
                return Rn(e * 1e3);
            }
            function kr() {
                return Rn.apply(null, arguments).parseZone();
            }
            function br(e) {
                return e;
            }
            var wr = W.prototype;
            wr.calendar = $;
            wr.longDateFormat = R;
            wr.invalidDate = J;
            wr.ordinal = V;
            wr.preparse = br;
            wr.postformat = br;
            wr.relativeTime = G;
            wr.pastFuture = Z;
            wr.set = C;
            wr.months = it;
            wr.monthsShort = ot;
            wr.monthsParse = ut;
            wr.monthsRegex = pt;
            wr.monthsShortRegex = ft;
            wr.week = St;
            wr.firstDayOfYear = Ht;
            wr.firstDayOfWeek = jt;
            wr.weekdays = At;
            wr.weekdaysMin = It;
            wr.weekdaysShort = zt;
            wr.weekdaysParse = Nt;
            wr.weekdaysRegex = Bt;
            wr.weekdaysShortRegex = Zt;
            wr.weekdaysMinRegex = Qt;
            wr.isPM = rn;
            wr.meridiem = on;
            function Dr(e, t, n, a) {
                var r = Ln();
                var i = c().set(a, t);
                return r[n](i, e);
            }
            function Tr(e, t, n) {
                if (d(e)) {
                    t = e;
                    e = undefined;
                }
                e = e || "";
                if (t != null) {
                    return Dr(e, t, n, "month");
                }
                var a;
                var r = [];
                for (a = 0; a < 12; a++) {
                    r[a] = Dr(e, a, n, "month");
                }
                return r;
            }
            function Sr(e, t, n, a) {
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
                var r = Ln(), i = e ? r._week.dow : 0;
                if (n != null) {
                    return Dr(t, (n + i) % 7, a, "day");
                }
                var s;
                var o = [];
                for (s = 0; s < 7; s++) {
                    o[s] = Dr(t, (s + i) % 7, a, "day");
                }
                return o;
            }
            function xr(e, t) {
                return Tr(e, t, "months");
            }
            function jr(e, t) {
                return Tr(e, t, "monthsShort");
            }
            function Hr(e, t, n) {
                return Sr(e, t, n, "weekdays");
            }
            function Pr(e, t, n) {
                return Sr(e, t, n, "weekdaysShort");
            }
            function Er(e, t, n) {
                return Sr(e, t, n, "weekdaysMin");
            }
            pn("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10, n = T(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n;
                }
            });
            a.lang = j("moment.lang is deprecated. Use moment.locale instead.", pn);
            a.langData = j("moment.langData is deprecated. Use moment.localeData instead.", Ln);
            var Cr = Math.abs;
            function Or() {
                var e = this._data;
                this._milliseconds = Cr(this._milliseconds);
                this._days = Cr(this._days);
                this._months = Cr(this._months);
                e.milliseconds = Cr(e.milliseconds);
                e.seconds = Cr(e.seconds);
                e.minutes = Cr(e.minutes);
                e.hours = Cr(e.hours);
                e.months = Cr(e.months);
                e.years = Cr(e.years);
                return this;
            }
            function Wr(e, t, n, a) {
                var r = pa(t, n);
                e._milliseconds += a * r._milliseconds;
                e._days += a * r._days;
                e._months += a * r._months;
                return e._bubble();
            }
            function Ar(e, t) {
                return Wr(this, e, t, 1);
            }
            function Fr(e, t) {
                return Wr(this, e, t, -1);
            }
            function zr(e) {
                if (e < 0) {
                    return Math.floor(e);
                } else {
                    return Math.ceil(e);
                }
            }
            function $r() {
                var e = this._milliseconds;
                var t = this._days;
                var n = this._months;
                var a = this._data;
                var r, i, s, o, d;
                if (!(e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0)) {
                    e += zr(Rr(n) + t) * 864e5;
                    t = 0;
                    n = 0;
                }
                a.milliseconds = e % 1e3;
                r = D(e / 1e3);
                a.seconds = r % 60;
                i = D(r / 60);
                a.minutes = i % 60;
                s = D(i / 60);
                a.hours = s % 24;
                t += D(s / 24);
                d = D(Ir(t));
                n += d;
                t -= zr(Rr(d));
                o = D(n / 12);
                n %= 12;
                a.days = t;
                a.months = n;
                a.years = o;
                return this;
            }
            function Ir(e) {
                return e * 4800 / 146097;
            }
            function Rr(e) {
                return e * 146097 / 4800;
            }
            function Nr(e) {
                var t;
                var n;
                var a = this._milliseconds;
                e = X(e);
                if (e === "month" || e === "year") {
                    t = this._days + a / 864e5;
                    n = this._months + Ir(t);
                    return e === "month" ? n : n / 12;
                } else {
                    t = this._days + Math.round(Rr(this._months));
                    switch (e) {
                      case "week":
                        return t / 7 + a / 6048e5;

                      case "day":
                        return t + a / 864e5;

                      case "hour":
                        return t * 24 + a / 36e5;

                      case "minute":
                        return t * 1440 + a / 6e4;

                      case "second":
                        return t * 86400 + a / 1e3;

                      case "millisecond":
                        return Math.floor(t * 864e5) + a;

                      default:
                        throw new Error("Unknown unit " + e);
                    }
                }
            }
            function Jr() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + T(this._months / 12) * 31536e6;
            }
            function Ur(e) {
                return function() {
                    return this.as(e);
                };
            }
            var qr = Ur("ms");
            var Vr = Ur("s");
            var Br = Ur("m");
            var Gr = Ur("h");
            var Zr = Ur("d");
            var Kr = Ur("w");
            var Qr = Ur("M");
            var Xr = Ur("y");
            function ei(e) {
                e = X(e);
                return this[e + "s"]();
            }
            function ti(e) {
                return function() {
                    return this._data[e];
                };
            }
            var ni = ti("milliseconds");
            var ai = ti("seconds");
            var ri = ti("minutes");
            var ii = ti("hours");
            var si = ti("days");
            var oi = ti("months");
            var di = ti("years");
            function ui() {
                return D(this.days() / 7);
            }
            var li = Math.round;
            var mi = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };
            function _i(e, t, n, a, r) {
                return r.relativeTime(t || 1, !!n, e, a);
            }
            function ci(e, t, n) {
                var a = pa(e).abs();
                var r = li(a.as("s"));
                var i = li(a.as("m"));
                var s = li(a.as("h"));
                var o = li(a.as("d"));
                var d = li(a.as("M"));
                var u = li(a.as("y"));
                var l = r < mi.s && [ "s", r ] || i <= 1 && [ "m" ] || i < mi.m && [ "mm", i ] || s <= 1 && [ "h" ] || s < mi.h && [ "hh", s ] || o <= 1 && [ "d" ] || o < mi.d && [ "dd", o ] || d <= 1 && [ "M" ] || d < mi.M && [ "MM", d ] || u <= 1 && [ "y" ] || [ "yy", u ];
                l[2] = t;
                l[3] = +e > 0;
                l[4] = n;
                return _i.apply(null, l);
            }
            function fi(e) {
                if (e === undefined) {
                    return li;
                }
                if (typeof e === "function") {
                    li = e;
                    return true;
                }
                return false;
            }
            function hi(e, t) {
                if (mi[e] === undefined) {
                    return false;
                }
                if (t === undefined) {
                    return mi[e];
                }
                mi[e] = t;
                return true;
            }
            function pi(e) {
                var t = this.localeData();
                var n = ci(this, !e, t);
                if (e) {
                    n = t.pastFuture(+this, n);
                }
                return t.postformat(n);
            }
            var yi = Math.abs;
            function Mi() {
                var e = yi(this._milliseconds) / 1e3;
                var t = yi(this._days);
                var n = yi(this._months);
                var a, r, i;
                a = D(e / 60);
                r = D(a / 60);
                e %= 60;
                a %= 60;
                i = D(n / 12);
                n %= 12;
                var s = i;
                var o = n;
                var d = t;
                var u = r;
                var l = a;
                var m = e;
                var _ = this.asSeconds();
                if (!_) {
                    return "P0D";
                }
                return (_ < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (u || l || m ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (m ? m + "S" : "");
            }
            var Li = Gn.prototype;
            Li.abs = Or;
            Li.add = Ar;
            Li.subtract = Fr;
            Li.as = Nr;
            Li.asMilliseconds = qr;
            Li.asSeconds = Vr;
            Li.asMinutes = Br;
            Li.asHours = Gr;
            Li.asDays = Zr;
            Li.asWeeks = Kr;
            Li.asMonths = Qr;
            Li.asYears = Xr;
            Li.valueOf = Jr;
            Li._bubble = $r;
            Li.get = ei;
            Li.milliseconds = ni;
            Li.seconds = ai;
            Li.minutes = ri;
            Li.hours = ii;
            Li.days = si;
            Li.weeks = ui;
            Li.months = oi;
            Li.years = di;
            Li.humanize = pi;
            Li.toISOString = Mi;
            Li.toString = Mi;
            Li.toJSON = Mi;
            Li.locale = Na;
            Li.localeData = Ua;
            Li.toIsoString = j("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mi);
            Li.lang = Ja;
            fe("X", 0, 0, "unix");
            fe("x", 0, 0, "valueOf");
            Ae("x", He);
            Ae("X", Ce);
            Re("X", function(e, t, n) {
                n._d = new Date(parseFloat(e, 10) * 1e3);
            });
            Re("x", function(e, t, n) {
                n._d = new Date(T(e));
            });
            a.version = "2.17.1";
            r(Rn);
            a.fn = gr;
            a.min = qn;
            a.max = Vn;
            a.now = Bn;
            a.utc = c;
            a.unix = Yr;
            a.months = xr;
            a.isDate = u;
            a.locale = pn;
            a.invalid = L;
            a.duration = pa;
            a.isMoment = w;
            a.weekdays = Hr;
            a.parseZone = kr;
            a.localeData = Ln;
            a.isDuration = Zn;
            a.monthsShort = jr;
            a.weekdaysMin = Er;
            a.defineLocale = yn;
            a.updateLocale = Mn;
            a.locales = vn;
            a.weekdaysShort = Pr;
            a.normalizeUnits = X;
            a.relativeTimeRounding = fi;
            a.relativeTimeThreshold = hi;
            a.calendarFormat = ba;
            a.prototype = gr;
            return a;
        });
    }).call(t, n(19)(e));
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
    var a = {
        "./af": 21,
        "./af.js": 21,
        "./ar": 22,
        "./ar-dz": 23,
        "./ar-dz.js": 23,
        "./ar-ly": 24,
        "./ar-ly.js": 24,
        "./ar-ma": 25,
        "./ar-ma.js": 25,
        "./ar-sa": 26,
        "./ar-sa.js": 26,
        "./ar-tn": 27,
        "./ar-tn.js": 27,
        "./ar.js": 22,
        "./az": 28,
        "./az.js": 28,
        "./be": 29,
        "./be.js": 29,
        "./bg": 30,
        "./bg.js": 30,
        "./bn": 31,
        "./bn.js": 31,
        "./bo": 32,
        "./bo.js": 32,
        "./br": 33,
        "./br.js": 33,
        "./bs": 34,
        "./bs.js": 34,
        "./ca": 35,
        "./ca.js": 35,
        "./cs": 36,
        "./cs.js": 36,
        "./cv": 37,
        "./cv.js": 37,
        "./cy": 38,
        "./cy.js": 38,
        "./da": 39,
        "./da.js": 39,
        "./de": 40,
        "./de-at": 41,
        "./de-at.js": 41,
        "./de.js": 40,
        "./dv": 42,
        "./dv.js": 42,
        "./el": 43,
        "./el.js": 43,
        "./en-au": 44,
        "./en-au.js": 44,
        "./en-ca": 45,
        "./en-ca.js": 45,
        "./en-gb": 46,
        "./en-gb.js": 46,
        "./en-ie": 47,
        "./en-ie.js": 47,
        "./en-nz": 48,
        "./en-nz.js": 48,
        "./eo": 49,
        "./eo.js": 49,
        "./es": 50,
        "./es-do": 51,
        "./es-do.js": 51,
        "./es.js": 50,
        "./et": 52,
        "./et.js": 52,
        "./eu": 53,
        "./eu.js": 53,
        "./fa": 54,
        "./fa.js": 54,
        "./fi": 55,
        "./fi.js": 55,
        "./fo": 56,
        "./fo.js": 56,
        "./fr": 57,
        "./fr-ca": 58,
        "./fr-ca.js": 58,
        "./fr-ch": 59,
        "./fr-ch.js": 59,
        "./fr.js": 57,
        "./fy": 60,
        "./fy.js": 60,
        "./gd": 61,
        "./gd.js": 61,
        "./gl": 62,
        "./gl.js": 62,
        "./he": 63,
        "./he.js": 63,
        "./hi": 64,
        "./hi.js": 64,
        "./hr": 65,
        "./hr.js": 65,
        "./hu": 66,
        "./hu.js": 66,
        "./hy-am": 67,
        "./hy-am.js": 67,
        "./id": 68,
        "./id.js": 68,
        "./is": 69,
        "./is.js": 69,
        "./it": 70,
        "./it.js": 70,
        "./ja": 71,
        "./ja.js": 71,
        "./jv": 72,
        "./jv.js": 72,
        "./ka": 73,
        "./ka.js": 73,
        "./kk": 74,
        "./kk.js": 74,
        "./km": 75,
        "./km.js": 75,
        "./ko": 76,
        "./ko.js": 76,
        "./ky": 77,
        "./ky.js": 77,
        "./lb": 78,
        "./lb.js": 78,
        "./lo": 79,
        "./lo.js": 79,
        "./lt": 80,
        "./lt.js": 80,
        "./lv": 81,
        "./lv.js": 81,
        "./me": 82,
        "./me.js": 82,
        "./mi": 83,
        "./mi.js": 83,
        "./mk": 84,
        "./mk.js": 84,
        "./ml": 85,
        "./ml.js": 85,
        "./mr": 86,
        "./mr.js": 86,
        "./ms": 87,
        "./ms-my": 88,
        "./ms-my.js": 88,
        "./ms.js": 87,
        "./my": 89,
        "./my.js": 89,
        "./nb": 90,
        "./nb.js": 90,
        "./ne": 91,
        "./ne.js": 91,
        "./nl": 92,
        "./nl-be": 93,
        "./nl-be.js": 93,
        "./nl.js": 92,
        "./nn": 94,
        "./nn.js": 94,
        "./pa-in": 95,
        "./pa-in.js": 95,
        "./pl": 96,
        "./pl.js": 96,
        "./pt": 97,
        "./pt-br": 98,
        "./pt-br.js": 98,
        "./pt.js": 97,
        "./ro": 99,
        "./ro.js": 99,
        "./ru": 100,
        "./ru.js": 100,
        "./se": 101,
        "./se.js": 101,
        "./si": 102,
        "./si.js": 102,
        "./sk": 103,
        "./sk.js": 103,
        "./sl": 104,
        "./sl.js": 104,
        "./sq": 105,
        "./sq.js": 105,
        "./sr": 106,
        "./sr-cyrl": 107,
        "./sr-cyrl.js": 107,
        "./sr.js": 106,
        "./ss": 108,
        "./ss.js": 108,
        "./sv": 109,
        "./sv.js": 109,
        "./sw": 110,
        "./sw.js": 110,
        "./ta": 111,
        "./ta.js": 111,
        "./te": 112,
        "./te.js": 112,
        "./tet": 113,
        "./tet.js": 113,
        "./th": 114,
        "./th.js": 114,
        "./tl-ph": 115,
        "./tl-ph.js": 115,
        "./tlh": 116,
        "./tlh.js": 116,
        "./tr": 117,
        "./tr.js": 117,
        "./tzl": 118,
        "./tzl.js": 118,
        "./tzm": 119,
        "./tzm-latn": 120,
        "./tzm-latn.js": 120,
        "./tzm.js": 119,
        "./uk": 121,
        "./uk.js": 121,
        "./uz": 122,
        "./uz.js": 122,
        "./vi": 123,
        "./vi.js": 123,
        "./x-pseudo": 124,
        "./x-pseudo.js": 124,
        "./yo": 125,
        "./yo.js": 125,
        "./zh-cn": 126,
        "./zh-cn.js": 126,
        "./zh-hk": 127,
        "./zh-hk.js": 127,
        "./zh-tw": 128,
        "./zh-tw.js": 128
    };
    function r(e) {
        return n(i(e));
    }
    function i(e) {
        return a[e] || function() {
            throw new Error("Cannot find module '" + e + "'.");
        }();
    }
    r.keys = function e() {
        return Object.keys(a);
    };
    r.resolve = i;
    e.exports = r;
    r.id = 20;
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = function(e) {
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
            return function(t, n, i, s) {
                var o = a(t), d = r[e][a(t)];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = {
            s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
            m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
            h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
            d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
            M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
            y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
        };
        var r = function(e) {
            return function(t, r, i, s) {
                var o = n(t), d = a[e][n(t)];
                if (o === 2) {
                    d = d[r ? 0 : 1];
                }
                return d.replace(/%d/i, t);
            };
        };
        var i = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
        var s = e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
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
                s: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("ar-sa", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var n = e % 10, a = e % 100 - n, r = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[r]);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, a) {
            var r = {
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            if (a === "m") {
                return n ? "хвіліна" : "хвіліну";
            } else if (a === "h") {
                return n ? "гадзіна" : "гадзіну";
            } else {
                return e + " " + t(r[a], +e);
            }
        }
        var a = e.defineLocale("be", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("bn", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("bo", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return e + " " + r(a[n], e);
        }
        function n(e) {
            switch (a(e)) {
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
        function a(e) {
            if (e > 9) {
                return a(e % 10);
            }
            return e;
        }
        function r(e, t) {
            if (t === 2) {
                return i(e);
            }
            return e;
        }
        function i(e) {
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                if (e === 1) {
                    a += "minuta";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "minute";
                } else {
                    a += "minuta";
                }
                return a;

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                if (e === 1) {
                    a += "sat";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "sata";
                } else {
                    a += "sati";
                }
                return a;

              case "dd":
                if (e === 1) {
                    a += "dan";
                } else {
                    a += "dana";
                }
                return a;

              case "MM":
                if (e === 1) {
                    a += "mjesec";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "mjeseca";
                } else {
                    a += "mjeseci";
                }
                return a;

              case "yy":
                if (e === 1) {
                    a += "godina";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "godine";
                } else {
                    a += "godina";
                }
                return a;
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_");
        var n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        function a(e) {
            return e > 1 && e < 5 && ~~(e / 10) !== 1;
        }
        function r(e, t, n, r) {
            var i = e + " ";
            switch (n) {
              case "s":
                return t || r ? "pár sekund" : "pár sekundami";

              case "m":
                return t ? "minuta" : r ? "minutu" : "minutou";

              case "mm":
                if (t || r) {
                    return i + (a(e) ? "minuty" : "minut");
                } else {
                    return i + "minutami";
                }
                break;

              case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";

              case "hh":
                if (t || r) {
                    return i + (a(e) ? "hodiny" : "hodin");
                } else {
                    return i + "hodinami";
                }
                break;

              case "d":
                return t || r ? "den" : "dnem";

              case "dd":
                if (t || r) {
                    return i + (a(e) ? "dny" : "dní");
                } else {
                    return i + "dny";
                }
                break;

              case "M":
                return t || r ? "měsíc" : "měsícem";

              case "MM":
                if (t || r) {
                    return i + (a(e) ? "měsíce" : "měsíců");
                } else {
                    return i + "měsíci";
                }
                break;

              case "y":
                return t || r ? "rok" : "rokem";

              case "yy":
                if (t || r) {
                    return i + (a(e) ? "roky" : "let");
                } else {
                    return i + "lety";
                }
                break;
            }
        }
        var i = e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: function(e, t) {
                var n, a = [];
                for (n = 0; n < 12; n++) {
                    a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                }
                return a;
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var t = e, n = "", a = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ];
                if (t > 20) {
                    if (t === 40 || t === 50 || t === 60 || t === 80 || t === 100) {
                        n = "fed";
                    } else {
                        n = "ain";
                    }
                } else if (t > 0) {
                    n = a[t];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? r[n][0] : r[n][1];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? r[n][0] : r[n][1];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = [ "ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު" ];
        var n = [ "އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު" ];
        var a = e.defineLocale("dv", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var a = this._calendarEl[e], r = n && n.hours();
                if (t(a)) {
                    a = a.apply(n);
                }
                return a.replace("{}", r % 12 === 1 ? "στη" : "στις");
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
        var n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        var a = e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                if (/-MMM-/.test(a)) {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
        var n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        var a = e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                if (/-MMM-/.test(a)) {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
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
                return r[n][2] ? r[n][2] : r[n][1];
            }
            return a ? r[n][0] : r[n][1];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("fa", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ");
        var n = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9] ];
        function a(e, t, n, a) {
            var i = "";
            switch (n) {
              case "s":
                return a ? "muutaman sekunnin" : "muutama sekunti";

              case "m":
                return a ? "minuutin" : "minuutti";

              case "mm":
                i = a ? "minuutin" : "minuuttia";
                break;

              case "h":
                return a ? "tunnin" : "tunti";

              case "hh":
                i = a ? "tunnin" : "tuntia";
                break;

              case "d":
                return a ? "päivän" : "päivä";

              case "dd":
                i = a ? "päivän" : "päivää";
                break;

              case "M":
                return a ? "kuukauden" : "kuukausi";

              case "MM":
                i = a ? "kuukauden" : "kuukautta";
                break;

              case "y":
                return a ? "vuoden" : "vuosi";

              case "yy":
                i = a ? "vuoden" : "vuotta";
                break;
            }
            i = r(e, a) + " " + i;
            return i;
        }
        function r(e, a) {
            return e < 10 ? a ? n[e] : t[e] : e;
        }
        var i = e.defineLocale("fi", {
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
                s: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_");
        var n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        var a = e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, a) {
                if (/-MMM-/.test(a)) {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = [ "Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd" ];
        var n = [ "Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh" ];
        var a = [ "Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ];
        var r = [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ];
        var i = [ "Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa" ];
        var s = e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: true,
            weekdays: a,
            weekdaysShort: r,
            weekdaysMin: i,
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("hi", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                if (e === 1) {
                    a += "minuta";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "minute";
                } else {
                    a += "minuta";
                }
                return a;

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                if (e === 1) {
                    a += "sat";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "sata";
                } else {
                    a += "sati";
                }
                return a;

              case "dd":
                if (e === 1) {
                    a += "dan";
                } else {
                    a += "dana";
                }
                return a;

              case "MM":
                if (e === 1) {
                    a += "mjesec";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "mjeseca";
                } else {
                    a += "mjeseci";
                }
                return a;

              case "yy":
                if (e === 1) {
                    a += "godina";
                } else if (e === 2 || e === 3 || e === 4) {
                    a += "godine";
                } else {
                    a += "godina";
                }
                return a;
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        function n(e, t, n, a) {
            var r = e, i;
            switch (n) {
              case "s":
                return a || t ? "néhány másodperc" : "néhány másodperce";

              case "m":
                return "egy" + (a || t ? " perc" : " perce");

              case "mm":
                return r + (a || t ? " perc" : " perce");

              case "h":
                return "egy" + (a || t ? " óra" : " órája");

              case "hh":
                return r + (a || t ? " óra" : " órája");

              case "d":
                return "egy" + (a || t ? " nap" : " napja");

              case "dd":
                return r + (a || t ? " nap" : " napja");

              case "M":
                return "egy" + (a || t ? " hónap" : " hónapja");

              case "MM":
                return r + (a || t ? " hónap" : " hónapja");

              case "y":
                return "egy" + (a || t ? " év" : " éve");

              case "yy":
                return r + (a || t ? " év" : " éve");
            }
            return "";
        }
        function a(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
        }
        var r = e.defineLocale("hu", {
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
                    return a.call(this, true);
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return a.call(this, false);
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
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        function n(e, n, a, r) {
            var i = e + " ";
            switch (a) {
              case "s":
                return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";

              case "m":
                return n ? "mínúta" : "mínútu";

              case "mm":
                if (t(e)) {
                    return i + (n || r ? "mínútur" : "mínútum");
                } else if (n) {
                    return i + "mínúta";
                }
                return i + "mínútu";

              case "hh":
                if (t(e)) {
                    return i + (n || r ? "klukkustundir" : "klukkustundum");
                }
                return i + "klukkustund";

              case "d":
                if (n) {
                    return "dagur";
                }
                return r ? "dag" : "degi";

              case "dd":
                if (t(e)) {
                    if (n) {
                        return i + "dagar";
                    }
                    return i + (r ? "daga" : "dögum");
                } else if (n) {
                    return i + "dagur";
                }
                return i + (r ? "dag" : "degi");

              case "M":
                if (n) {
                    return "mánuður";
                }
                return r ? "mánuð" : "mánuði";

              case "MM":
                if (t(e)) {
                    if (n) {
                        return i + "mánuðir";
                    }
                    return i + (r ? "mánuði" : "mánuðum");
                } else if (n) {
                    return i + "mánuður";
                }
                return i + (r ? "mánuð" : "mánuði");

              case "y":
                return n || r ? "ár" : "ári";

              case "yy":
                if (t(e)) {
                    return i + (n || r ? "ár" : "árum");
                }
                return i + (n || r ? "ár" : "ári");
            }
        }
        var a = e.defineLocale("is", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var n = e % 10, a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a]);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var n = e % 10, a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a]);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eng Minutt", "enger Minutt" ],
                h: [ "eng Stonn", "enger Stonn" ],
                d: [ "een Dag", "engem Dag" ],
                M: [ "ee Mount", "engem Mount" ],
                y: [ "ee Joer", "engem Joer" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        function n(e) {
            var t = e.substr(0, e.indexOf(" "));
            if (r(t)) {
                return "a " + e;
            }
            return "an " + e;
        }
        function a(e) {
            var t = e.substr(0, e.indexOf(" "));
            if (r(t)) {
                return "viru " + e;
            }
            return "virun " + e;
        }
        function r(e) {
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
                    return r(n);
                }
                return r(t);
            } else if (e < 1e4) {
                while (e >= 10) {
                    e = e / 10;
                }
                return r(e);
            } else {
                e = e / 1e3;
                return r(e);
            }
        }
        var i = e.defineLocale("lb", {
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
                past: a,
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        function n(e, t, n, a) {
            if (t) {
                return "kelios sekundės";
            } else {
                return a ? "kelių sekundžių" : "kelias sekundes";
            }
        }
        function a(e, t, n, a) {
            return t ? i(n)[0] : a ? i(n)[1] : i(n)[2];
        }
        function r(e) {
            return e % 10 === 0 || e > 10 && e < 20;
        }
        function i(e) {
            return t[e].split("_");
        }
        function s(e, t, n, s) {
            var o = e + " ";
            if (e === 1) {
                return o + a(e, t, n[0], s);
            } else if (t) {
                return o + (r(e) ? i(n)[1] : i(n)[0]);
            } else {
                if (s) {
                    return o + i(n)[1];
                } else {
                    return o + (r(e) ? i(n)[1] : i(n)[2]);
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
                m: a,
                mm: s,
                h: a,
                hh: s,
                d: a,
                dd: s,
                M: a,
                MM: s,
                y: a,
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        function a(e, a, r) {
            return e + " " + n(t[r], e, a);
        }
        function r(e, a, r) {
            return n(t[r], e, a);
        }
        function i(e, t) {
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
                s: i,
                m: r,
                mm: a,
                h: r,
                hh: a,
                d: r,
                dd: a,
                M: r,
                MM: a,
                y: r,
                yy: a
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
            translate: function(e, n, a) {
                var r = t.words[a];
                if (a.length === 1) {
                    return n ? r[0] : r[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, r);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        function a(e, t, n, a) {
            var r = "";
            if (t) {
                switch (n) {
                  case "s":
                    r = "काही सेकंद";
                    break;

                  case "m":
                    r = "एक मिनिट";
                    break;

                  case "mm":
                    r = "%d मिनिटे";
                    break;

                  case "h":
                    r = "एक तास";
                    break;

                  case "hh":
                    r = "%d तास";
                    break;

                  case "d":
                    r = "एक दिवस";
                    break;

                  case "dd":
                    r = "%d दिवस";
                    break;

                  case "M":
                    r = "एक महिना";
                    break;

                  case "MM":
                    r = "%d महिने";
                    break;

                  case "y":
                    r = "एक वर्ष";
                    break;

                  case "yy":
                    r = "%d वर्षे";
                    break;
                }
            } else {
                switch (n) {
                  case "s":
                    r = "काही सेकंदां";
                    break;

                  case "m":
                    r = "एका मिनिटा";
                    break;

                  case "mm":
                    r = "%d मिनिटां";
                    break;

                  case "h":
                    r = "एका तासा";
                    break;

                  case "hh":
                    r = "%d तासां";
                    break;

                  case "d":
                    r = "एका दिवसा";
                    break;

                  case "dd":
                    r = "%d दिवसां";
                    break;

                  case "M":
                    r = "एका महिन्या";
                    break;

                  case "MM":
                    r = "%d महिन्यां";
                    break;

                  case "y":
                    r = "एका वर्षा";
                    break;

                  case "yy":
                    r = "%d वर्षां";
                    break;
                }
            }
            return r.replace(/%d/i, e);
        }
        var r = e.defineLocale("mr", {
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
                s: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
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
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("my", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("ne", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        var a = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ];
        var r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var i = e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                if (/-MMM-/.test(a)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        var a = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ];
        var r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var i = e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                if (/-MMM-/.test(a)) {
                    return n[e.month()];
                } else {
                    return t[e.month()];
                }
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("pa-in", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
        var n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        function a(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1;
        }
        function r(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "minuta" : "minutę";

              case "mm":
                return r + (a(e) ? "minuty" : "minut");

              case "h":
                return t ? "godzina" : "godzinę";

              case "hh":
                return r + (a(e) ? "godziny" : "godzin");

              case "MM":
                return r + (a(e) ? "miesiące" : "miesięcy");

              case "yy":
                return r + (a(e) ? "lata" : "lat");
            }
        }
        var i = e.defineLocale("pl", {
            months: function(e, a) {
                if (a === "") {
                    return "(" + n[e.month()] + "|" + t[e.month()] + ")";
                } else if (/D MMMM/.test(a)) {
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
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: r,
                y: "rok",
                yy: r
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }, r = " ";
            if (e % 100 >= 20 || e >= 100 && e % 100 === 0) {
                r = " de ";
            }
            return e + r + a[n];
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, a) {
            var r = {
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            if (a === "m") {
                return n ? "минута" : "минуту";
            } else {
                return e + " " + t(r[a], +e);
            }
        }
        var a = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
        var r = e.defineLocale("ru", {
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
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
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
        return r;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_");
        var n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function a(e) {
            return e > 1 && e < 5;
        }
        function r(e, t, n, r) {
            var i = e + " ";
            switch (n) {
              case "s":
                return t || r ? "pár sekúnd" : "pár sekundami";

              case "m":
                return t ? "minúta" : r ? "minútu" : "minútou";

              case "mm":
                if (t || r) {
                    return i + (a(e) ? "minúty" : "minút");
                } else {
                    return i + "minútami";
                }
                break;

              case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";

              case "hh":
                if (t || r) {
                    return i + (a(e) ? "hodiny" : "hodín");
                } else {
                    return i + "hodinami";
                }
                break;

              case "d":
                return t || r ? "deň" : "dňom";

              case "dd":
                if (t || r) {
                    return i + (a(e) ? "dni" : "dní");
                } else {
                    return i + "dňami";
                }
                break;

              case "M":
                return t || r ? "mesiac" : "mesiacom";

              case "MM":
                if (t || r) {
                    return i + (a(e) ? "mesiace" : "mesiacov");
                } else {
                    return i + "mesiacmi";
                }
                break;

              case "y":
                return t || r ? "rok" : "rokom";

              case "yy":
                if (t || r) {
                    return i + (a(e) ? "roky" : "rokov");
                } else {
                    return i + "rokmi";
                }
                break;
            }
        }
        var i = e.defineLocale("sk", {
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";

              case "m":
                return t ? "ena minuta" : "eno minuto";

              case "mm":
                if (e === 1) {
                    r += t ? "minuta" : "minuto";
                } else if (e === 2) {
                    r += t || a ? "minuti" : "minutama";
                } else if (e < 5) {
                    r += t || a ? "minute" : "minutami";
                } else {
                    r += t || a ? "minut" : "minutami";
                }
                return r;

              case "h":
                return t ? "ena ura" : "eno uro";

              case "hh":
                if (e === 1) {
                    r += t ? "ura" : "uro";
                } else if (e === 2) {
                    r += t || a ? "uri" : "urama";
                } else if (e < 5) {
                    r += t || a ? "ure" : "urami";
                } else {
                    r += t || a ? "ur" : "urami";
                }
                return r;

              case "d":
                return t || a ? "en dan" : "enim dnem";

              case "dd":
                if (e === 1) {
                    r += t || a ? "dan" : "dnem";
                } else if (e === 2) {
                    r += t || a ? "dni" : "dnevoma";
                } else {
                    r += t || a ? "dni" : "dnevi";
                }
                return r;

              case "M":
                return t || a ? "en mesec" : "enim mesecem";

              case "MM":
                if (e === 1) {
                    r += t || a ? "mesec" : "mesecem";
                } else if (e === 2) {
                    r += t || a ? "meseca" : "mesecema";
                } else if (e < 5) {
                    r += t || a ? "mesece" : "meseci";
                } else {
                    r += t || a ? "mesecev" : "meseci";
                }
                return r;

              case "y":
                return t || a ? "eno leto" : "enim letom";

              case "yy":
                if (e === 1) {
                    r += t || a ? "leto" : "letom";
                } else if (e === 2) {
                    r += t || a ? "leti" : "letoma";
                } else if (e < 5) {
                    r += t || a ? "leta" : "leti";
                } else {
                    r += t || a ? "let" : "leti";
                }
                return r;
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
            translate: function(e, n, a) {
                var r = t.words[a];
                if (a.length === 1) {
                    return n ? r[0] : r[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, r);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
            translate: function(e, n, a) {
                var r = t.words[a];
                if (a.length === 1) {
                    return n ? r[0] : r[1];
                } else {
                    return e + " " + t.correctGrammaticalCase(e, r);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        var a = e.defineLocale("ta", {
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
        return a;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function n(e) {
            var t = e;
            t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq";
            return t;
        }
        function a(e) {
            var t = e;
            t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret";
            return t;
        }
        function r(e, t, n, a) {
            var r = i(e);
            switch (n) {
              case "mm":
                return r + " tup";

              case "hh":
                return r + " rep";

              case "dd":
                return r + " jaj";

              case "MM":
                return r + " jar";

              case "yy":
                return r + " DIS";
            }
        }
        function i(e) {
            var n = Math.floor(e % 1e3 / 100), a = Math.floor(e % 100 / 10), r = e % 10, i = "";
            if (n > 0) {
                i += t[n] + "vatlh";
            }
            if (a > 0) {
                i += (i !== "" ? " " : "") + t[a] + "maH";
            }
            if (r > 0) {
                i += (i !== "" ? " " : "") + t[r];
            }
            return i === "" ? "pagh" : i;
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
                past: a,
                s: "puS lup",
                m: "wa’ tup",
                mm: r,
                h: "wa’ rep",
                hh: r,
                d: "wa’ jaj",
                dd: r,
                M: "wa’ jar",
                MM: r,
                y: "wa’ DIS",
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var n = e % 10, a = e % 100 - n, r = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[r]);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        function n(e, t, n, a) {
            var r = {
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
            return a ? r[n][0] : t ? r[n][0] : r[n][1];
        }
        return t;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
    })(this, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
        }
        function n(e, n, a) {
            var r = {
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            if (a === "m") {
                return n ? "хвилина" : "хвилину";
            } else if (a === "h") {
                return n ? "година" : "годину";
            } else {
                return e + " " + t(r[a], +e);
            }
        }
        function a(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }, a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
            return n[a][e.day()];
        }
        function r(e) {
            return function() {
                return e + "о" + (this.hours() === 11 ? "б" : "") + "] LT";
            };
        }
        var i = e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: a,
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
                sameDay: r("[Сьогодні "),
                nextDay: r("[Завтра "),
                lastDay: r("[Вчора "),
                nextWeek: r("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                        return r("[Минулої] dddd [").call(this);

                      case 1:
                      case 2:
                      case 4:
                        return r("[Минулого] dddd [").call(this);
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
        return i;
    });
}, function(e, t, n) {
    (function(e, t) {
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var a = e * 100 + t;
                if (a < 600) {
                    return "凌晨";
                } else if (a < 900) {
                    return "早上";
                } else if (a < 1130) {
                    return "上午";
                } else if (a < 1230) {
                    return "中午";
                } else if (a < 1800) {
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var a = e * 100 + t;
                if (a < 600) {
                    return "凌晨";
                } else if (a < 900) {
                    return "早上";
                } else if (a < 1130) {
                    return "上午";
                } else if (a < 1230) {
                    return "中午";
                } else if (a < 1800) {
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
        true ? t(n(18)) : typeof define === "function" && define.amd ? define([ "../moment" ], t) : t(e.moment);
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
                var a = e * 100 + t;
                if (a < 600) {
                    return "凌晨";
                } else if (a < 900) {
                    return "早上";
                } else if (a < 1130) {
                    return "上午";
                } else if (a < 1230) {
                    return "中午";
                } else if (a < 1800) {
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
    var a = n(18);
    "use strict";
    if (!a) {
        throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    }
    var r = function(e, t) {
        var n = {}, r, i, s = true, o, d = false, u = false, l, m = 0, _, c, f, h = [ {
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
        } ], p = [ "days", "months", "years", "decades" ], y = [ "top", "bottom", "auto" ], M = [ "left", "right", "auto" ], L = [ "default", "top", "bottom" ], v = {
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
        }, g = {}, Y = function() {
            return a.tz !== undefined && t.timeZone !== undefined && t.timeZone !== null && t.timeZone !== "";
        }, k = function(e) {
            var n;
            if (e === undefined || e === null) {
                n = a();
            } else if (Y()) {
                n = a.tz(e, c, t.useStrict, t.timeZone);
            } else {
                n = a(e, c, t.useStrict);
            }
            if (Y()) {
                n.tz(t.timeZone);
            }
            return n;
        }, b = function(e) {
            if (typeof e !== "string" || e.length > 1) {
                throw new TypeError("isEnabled expects a single character string parameter");
            }
            switch (e) {
              case "y":
                return _.indexOf("Y") !== -1;

              case "M":
                return _.indexOf("M") !== -1;

              case "d":
                return _.toLowerCase().indexOf("d") !== -1;

              case "h":
              case "H":
                return _.toLowerCase().indexOf("h") !== -1;

              case "m":
                return _.indexOf("m") !== -1;

              case "s":
                return _.indexOf("s") !== -1;

              default:
                return false;
            }
        }, w = function() {
            return b("h") || b("m") || b("s");
        }, D = function() {
            return b("y") || b("M") || b("d");
        }, T = function() {
            var e = $("<thead>").append($("<tr>").append($("<th>").addClass("prev").attr("data-action", "previous").append($("<span>").addClass(t.icons.previous))).append($("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", t.calendarWeeks ? "6" : "5")).append($("<th>").addClass("next").attr("data-action", "next").append($("<span>").addClass(t.icons.next)))), n = $("<tbody>").append($("<tr>").append($("<td>").attr("colspan", t.calendarWeeks ? "8" : "7")));
            return [ $("<div>").addClass("datepicker-days").append($("<table>").addClass("table-condensed").append(e).append($("<tbody>"))), $("<div>").addClass("datepicker-months").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), $("<div>").addClass("datepicker-years").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), $("<div>").addClass("datepicker-decades").append($("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())) ];
        }, S = function() {
            var e = $("<tr>"), n = $("<tr>"), a = $("<tr>");
            if (b("h")) {
                e.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append($("<span>").addClass(t.icons.up))));
                n.append($("<td>").append($("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: t.tooltips.pickHour
                }).attr("data-action", "showHours")));
                a.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append($("<span>").addClass(t.icons.down))));
            }
            if (b("m")) {
                if (b("h")) {
                    e.append($("<td>").addClass("separator"));
                    n.append($("<td>").addClass("separator").html(":"));
                    a.append($("<td>").addClass("separator"));
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
                a.append($("<td>").append($("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: t.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append($("<span>").addClass(t.icons.down))));
            }
            if (b("s")) {
                if (b("m")) {
                    e.append($("<td>").addClass("separator"));
                    n.append($("<td>").addClass("separator").html(":"));
                    a.append($("<td>").addClass("separator"));
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
                a.append($("<td>").append($("<a>").attr({
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
                a.append($("<td>").addClass("separator"));
            }
            return $("<div>").addClass("timepicker-picker").append($("<table>").addClass("table-condensed").append([ e, n, a ]));
        }, x = function() {
            var e = $("<div>").addClass("timepicker-hours").append($("<table>").addClass("table-condensed")), t = $("<div>").addClass("timepicker-minutes").append($("<table>").addClass("table-condensed")), n = $("<div>").addClass("timepicker-seconds").append($("<table>").addClass("table-condensed")), a = [ S() ];
            if (b("h")) {
                a.push(e);
            }
            if (b("m")) {
                a.push(t);
            }
            if (b("s")) {
                a.push(n);
            }
            return a;
        }, j = function() {
            var e = [];
            if (t.showTodayButton) {
                e.push($("<td>").append($("<a>").attr({
                    "data-action": "today",
                    title: t.tooltips.today
                }).append($("<span>").addClass(t.icons.today))));
            }
            if (!t.sideBySide && D() && w()) {
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
            var e = $("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"), n = $("<div>").addClass("datepicker").append(T()), a = $("<div>").addClass("timepicker").append(x()), r = $("<ul>").addClass("list-unstyled"), i = $("<li>").addClass("picker-switch" + (t.collapse ? " accordion-toggle" : "")).append(j());
            if (t.inline) {
                e.removeClass("dropdown-menu");
            }
            if (l) {
                e.addClass("usetwentyfour");
            }
            if (b("s") && !l) {
                e.addClass("wider");
            }
            if (t.sideBySide && D() && w()) {
                e.addClass("timepicker-sbs");
                if (t.toolbarPlacement === "top") {
                    e.append(i);
                }
                e.append($("<div>").addClass("row").append(n.addClass("col-md-6")).append(a.addClass("col-md-6")));
                if (t.toolbarPlacement === "bottom") {
                    e.append(i);
                }
                return e;
            }
            if (t.toolbarPlacement === "top") {
                r.append(i);
            }
            if (D()) {
                r.append($("<li>").addClass(t.collapse && w() ? "collapse in" : "").append(n));
            }
            if (t.toolbarPlacement === "default") {
                r.append(i);
            }
            if (w()) {
                r.append($("<li>").addClass(t.collapse && D() ? "collapse" : "").append(a));
            }
            if (t.toolbarPlacement === "bottom") {
                r.append(i);
            }
            return e.append(r);
        }, P = function() {
            var n, a = {};
            if (e.is("input") || t.inline) {
                n = e.data();
            } else {
                n = e.find("input").data();
            }
            if (n.dateOptions && n.dateOptions instanceof Object) {
                a = $.extend(true, a, n.dateOptions);
            }
            $.each(t, function(e) {
                var t = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                if (n[t] !== undefined) {
                    a[e] = n[t];
                }
            });
            return a;
        }, E = function() {
            var n = (d || e).position(), a = (d || e).offset(), r = t.widgetPositioning.vertical, i = t.widgetPositioning.horizontal, s;
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
            if (r === "auto") {
                if (a.top + u.height() * 1.5 >= $(window).height() + $(window).scrollTop() && u.height() + e.outerHeight() < a.top) {
                    r = "top";
                } else {
                    r = "bottom";
                }
            }
            if (i === "auto") {
                if (s.width() < a.left + u.outerWidth() / 2 && a.left + u.outerWidth() > $(window).width()) {
                    i = "right";
                } else {
                    i = "left";
                }
            }
            if (r === "top") {
                u.addClass("top").removeClass("bottom");
            } else {
                u.addClass("bottom").removeClass("top");
            }
            if (i === "right") {
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
                top: r === "top" ? "auto" : n.top + e.outerHeight(),
                bottom: r === "top" ? s.outerHeight() - (s === e ? 0 : n.top) : "auto",
                left: i === "left" ? s === e ? 0 : n.left : "auto",
                right: i === "left" ? "auto" : s.outerWidth() - e.outerWidth() - (s === e ? 0 : n.left)
            });
        }, C = function(t) {
            if (t.type === "dp.change" && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate)) {
                return;
            }
            e.trigger(t);
        }, O = function(e) {
            if (e === "y") {
                e = "YYYY";
            }
            C({
                type: "dp.update",
                change: e,
                viewDate: i.clone()
            });
        }, W = function(e) {
            if (!u) {
                return;
            }
            if (e) {
                f = Math.max(m, Math.min(3, f + e));
            }
            u.find(".datepicker > div").hide().filter(".datepicker-" + h[f].clsName).show();
        }, A = function() {
            var e = $("<tr>"), n = i.clone().startOf("w").startOf("d");
            if (t.calendarWeeks === true) {
                e.append($("<th>").addClass("cw").text("#"));
            }
            while (n.isBefore(i.clone().endOf("w"))) {
                e.append($("<th>").addClass("dow").text(n.format("dd")));
                n.add(1, "d");
            }
            u.find(".datepicker-days thead").append(e);
        }, F = function(e) {
            return t.disabledDates[e.format("YYYY-MM-DD")] === true;
        }, z = function(e) {
            return t.enabledDates[e.format("YYYY-MM-DD")] === true;
        }, I = function(e) {
            return t.disabledHours[e.format("H")] === true;
        }, R = function(e) {
            return t.enabledHours[e.format("H")] === true;
        }, N = function(e, n) {
            if (!e.isValid()) {
                return false;
            }
            if (t.disabledDates && n === "d" && F(e)) {
                return false;
            }
            if (t.enabledDates && n === "d" && !z(e)) {
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
            if (t.disabledHours && (n === "h" || n === "m" || n === "s") && I(e)) {
                return false;
            }
            if (t.enabledHours && (n === "h" || n === "m" || n === "s") && !R(e)) {
                return false;
            }
            if (t.disabledTimeIntervals && (n === "h" || n === "m" || n === "s")) {
                var a = false;
                $.each(t.disabledTimeIntervals, function() {
                    if (e.isBetween(this[0], this[1])) {
                        a = true;
                        return false;
                    }
                });
                if (a) {
                    return false;
                }
            }
            return true;
        }, J = function() {
            var e = [], t = i.clone().startOf("y").startOf("d");
            while (t.isSame(i, "y")) {
                e.push($("<span>").attr("data-action", "selectMonth").addClass("month").text(t.format("MMM")));
                t.add(1, "M");
            }
            u.find(".datepicker-months td").empty().append(e);
        }, U = function() {
            var e = u.find(".datepicker-months"), n = e.find("th"), a = e.find("tbody").find("span");
            n.eq(0).find("span").attr("title", t.tooltips.prevYear);
            n.eq(1).attr("title", t.tooltips.selectYear);
            n.eq(2).find("span").attr("title", t.tooltips.nextYear);
            e.find(".disabled").removeClass("disabled");
            if (!N(i.clone().subtract(1, "y"), "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(i.year());
            if (!N(i.clone().add(1, "y"), "y")) {
                n.eq(2).addClass("disabled");
            }
            a.removeClass("active");
            if (r.isSame(i, "y") && !s) {
                a.eq(r.month()).addClass("active");
            }
            a.each(function(e) {
                if (!N(i.clone().month(e), "M")) {
                    $(this).addClass("disabled");
                }
            });
        }, q = function() {
            var e = u.find(".datepicker-years"), n = e.find("th"), a = i.clone().subtract(5, "y"), o = i.clone().add(6, "y"), d = "";
            n.eq(0).find("span").attr("title", t.tooltips.prevDecade);
            n.eq(1).attr("title", t.tooltips.selectDecade);
            n.eq(2).find("span").attr("title", t.tooltips.nextDecade);
            e.find(".disabled").removeClass("disabled");
            if (t.minDate && t.minDate.isAfter(a, "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(a.year() + "-" + o.year());
            if (t.maxDate && t.maxDate.isBefore(o, "y")) {
                n.eq(2).addClass("disabled");
            }
            while (!a.isAfter(o, "y")) {
                d += '<span data-action="selectYear" class="year' + (a.isSame(r, "y") && !s ? " active" : "") + (!N(a, "y") ? " disabled" : "") + '">' + a.year() + "</span>";
                a.add(1, "y");
            }
            e.find("td").html(d);
        }, V = function() {
            var e = u.find(".datepicker-decades"), n = e.find("th"), s = a({
                y: i.year() - i.year() % 100 - 1
            }), o = s.clone().add(100, "y"), d = s.clone(), l = false, m = false, _, c = "";
            n.eq(0).find("span").attr("title", t.tooltips.prevCentury);
            n.eq(2).find("span").attr("title", t.tooltips.nextCentury);
            e.find(".disabled").removeClass("disabled");
            if (s.isSame(a({
                y: 1900
            })) || t.minDate && t.minDate.isAfter(s, "y")) {
                n.eq(0).addClass("disabled");
            }
            n.eq(1).text(s.year() + "-" + o.year());
            if (s.isSame(a({
                y: 2e3
            })) || t.maxDate && t.maxDate.isBefore(o, "y")) {
                n.eq(2).addClass("disabled");
            }
            while (!s.isAfter(o, "y")) {
                _ = s.year() + 12;
                l = t.minDate && t.minDate.isAfter(s, "y") && t.minDate.year() <= _;
                m = t.maxDate && t.maxDate.isAfter(s, "y") && t.maxDate.year() <= _;
                c += '<span data-action="selectDecade" class="decade' + (r.isAfter(s) && r.year() <= _ ? " active" : "") + (!N(s, "y") && !l && !m ? " disabled" : "") + '" data-selection="' + (s.year() + 6) + '">' + (s.year() + 1) + " - " + (s.year() + 12) + "</span>";
                s.add(12, "y");
            }
            c += "<span></span><span></span><span></span>";
            e.find("td").html(c);
            n.eq(1).text(d.year() + 1 + "-" + s.year());
        }, B = function() {
            var e = u.find(".datepicker-days"), n = e.find("th"), a, o = [], d, l, m;
            if (!D()) {
                return;
            }
            n.eq(0).find("span").attr("title", t.tooltips.prevMonth);
            n.eq(1).attr("title", t.tooltips.selectMonth);
            n.eq(2).find("span").attr("title", t.tooltips.nextMonth);
            e.find(".disabled").removeClass("disabled");
            n.eq(1).text(i.format(t.dayViewHeaderFormat));
            if (!N(i.clone().subtract(1, "M"), "M")) {
                n.eq(0).addClass("disabled");
            }
            if (!N(i.clone().add(1, "M"), "M")) {
                n.eq(2).addClass("disabled");
            }
            a = i.clone().startOf("M").startOf("w").startOf("d");
            for (m = 0; m < 42; m++) {
                if (a.weekday() === 0) {
                    d = $("<tr>");
                    if (t.calendarWeeks) {
                        d.append('<td class="cw">' + a.week() + "</td>");
                    }
                    o.push(d);
                }
                l = "";
                if (a.isBefore(i, "M")) {
                    l += " old";
                }
                if (a.isAfter(i, "M")) {
                    l += " new";
                }
                if (a.isSame(r, "d") && !s) {
                    l += " active";
                }
                if (!N(a, "d")) {
                    l += " disabled";
                }
                if (a.isSame(k(), "d")) {
                    l += " today";
                }
                if (a.day() === 0 || a.day() === 6) {
                    l += " weekend";
                }
                d.append('<td data-action="selectDay" data-day="' + a.format("L") + '" class="day' + l + '">' + a.date() + "</td>");
                a.add(1, "d");
            }
            e.find("tbody").empty().append(o);
            U();
            q();
            V();
        }, G = function() {
            var e = u.find(".timepicker-hours table"), t = i.clone().startOf("d"), n = [], a = $("<tr>");
            if (i.hour() > 11 && !l) {
                t.hour(12);
            }
            while (t.isSame(i, "d") && (l || i.hour() < 12 && t.hour() < 12 || i.hour() > 11)) {
                if (t.hour() % 4 === 0) {
                    a = $("<tr>");
                    n.push(a);
                }
                a.append('<td data-action="selectHour" class="hour' + (!N(t, "h") ? " disabled" : "") + '">' + t.format(l ? "HH" : "hh") + "</td>");
                t.add(1, "h");
            }
            e.empty().append(n);
        }, Z = function() {
            var e = u.find(".timepicker-minutes table"), n = i.clone().startOf("h"), a = [], r = $("<tr>"), s = t.stepping === 1 ? 5 : t.stepping;
            while (i.isSame(n, "h")) {
                if (n.minute() % (s * 4) === 0) {
                    r = $("<tr>");
                    a.push(r);
                }
                r.append('<td data-action="selectMinute" class="minute' + (!N(n, "m") ? " disabled" : "") + '">' + n.format("mm") + "</td>");
                n.add(s, "m");
            }
            e.empty().append(a);
        }, K = function() {
            var e = u.find(".timepicker-seconds table"), t = i.clone().startOf("m"), n = [], a = $("<tr>");
            while (i.isSame(t, "m")) {
                if (t.second() % 20 === 0) {
                    a = $("<tr>");
                    n.push(a);
                }
                a.append('<td data-action="selectSecond" class="second' + (!N(t, "s") ? " disabled" : "") + '">' + t.format("ss") + "</td>");
                t.add(5, "s");
            }
            e.empty().append(n);
        }, Q = function() {
            var e, t, n = u.find(".timepicker span[data-time-component]");
            if (!l) {
                e = u.find(".timepicker [data-action=togglePeriod]");
                t = r.clone().add(r.hours() >= 12 ? -12 : 12, "h");
                e.text(r.format("A"));
                if (N(t, "h")) {
                    e.removeClass("disabled");
                } else {
                    e.addClass("disabled");
                }
            }
            n.filter("[data-time-component=hours]").text(r.format(l ? "HH" : "hh"));
            n.filter("[data-time-component=minutes]").text(r.format("mm"));
            n.filter("[data-time-component=seconds]").text(r.format("ss"));
            G();
            Z();
            K();
        }, X = function() {
            if (!u) {
                return;
            }
            B();
            Q();
        }, ee = function(n) {
            var a = s ? null : r;
            if (!n) {
                s = true;
                o.val("");
                e.data("date", "");
                C({
                    type: "dp.change",
                    date: false,
                    oldDate: a
                });
                X();
                return;
            }
            n = n.clone().locale(t.locale);
            if (Y()) {
                n.tz(t.timeZone);
            }
            if (t.stepping !== 1) {
                n.minutes(Math.round(n.minutes() / t.stepping) * t.stepping).seconds(0);
            }
            if (N(n)) {
                r = n;
                o.val(r.format(_));
                e.data("date", r.format(_));
                s = false;
                X();
                C({
                    type: "dp.change",
                    date: r.clone(),
                    oldDate: a
                });
            } else {
                if (!t.keepInvalid) {
                    o.val(s ? "" : r.format(_));
                } else {
                    C({
                        type: "dp.change",
                        date: n,
                        oldDate: a
                    });
                }
                C({
                    type: "dp.error",
                    date: n,
                    oldDate: a
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
            $(window).off("resize", E);
            u.off("click", "[data-action]");
            u.off("mousedown", false);
            u.remove();
            u = false;
            C({
                type: "dp.hide",
                date: r.clone()
            });
            o.blur();
            f = 0;
            i = r.clone();
            return n;
        }, ne = function() {
            ee(null);
        }, ae = function(e) {
            if (t.parseInputDate === undefined) {
                if (!a.isMoment(e)) {
                    e = k(e);
                }
            } else {
                e = t.parseInputDate(e);
            }
            return e;
        }, re = {
            next: function() {
                var e = h[f].navFnc;
                i.add(h[f].navStep, e);
                B();
                O(e);
            },
            previous: function() {
                var e = h[f].navFnc;
                i.subtract(h[f].navStep, e);
                B();
                O(e);
            },
            pickerSwitch: function() {
                W(1);
            },
            selectMonth: function(e) {
                var n = $(e.target).closest("tbody").find("span").index($(e.target));
                i.month(n);
                if (f === m) {
                    ee(r.clone().year(i.year()).month(i.month()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    W(-1);
                    B();
                }
                O("M");
            },
            selectYear: function(e) {
                var n = parseInt($(e.target).text(), 10) || 0;
                i.year(n);
                if (f === m) {
                    ee(r.clone().year(i.year()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    W(-1);
                    B();
                }
                O("YYYY");
            },
            selectDecade: function(e) {
                var n = parseInt($(e.target).data("selection"), 10) || 0;
                i.year(n);
                if (f === m) {
                    ee(r.clone().year(i.year()));
                    if (!t.inline) {
                        te();
                    }
                } else {
                    W(-1);
                    B();
                }
                O("YYYY");
            },
            selectDay: function(e) {
                var n = i.clone();
                if ($(e.target).is(".old")) {
                    n.subtract(1, "M");
                }
                if ($(e.target).is(".new")) {
                    n.add(1, "M");
                }
                ee(n.date(parseInt($(e.target).text(), 10)));
                if (!w() && !t.keepOpen && !t.inline) {
                    te();
                }
            },
            incrementHours: function() {
                var e = r.clone().add(1, "h");
                if (N(e, "h")) {
                    ee(e);
                }
            },
            incrementMinutes: function() {
                var e = r.clone().add(t.stepping, "m");
                if (N(e, "m")) {
                    ee(e);
                }
            },
            incrementSeconds: function() {
                var e = r.clone().add(1, "s");
                if (N(e, "s")) {
                    ee(e);
                }
            },
            decrementHours: function() {
                var e = r.clone().subtract(1, "h");
                if (N(e, "h")) {
                    ee(e);
                }
            },
            decrementMinutes: function() {
                var e = r.clone().subtract(t.stepping, "m");
                if (N(e, "m")) {
                    ee(e);
                }
            },
            decrementSeconds: function() {
                var e = r.clone().subtract(1, "s");
                if (N(e, "s")) {
                    ee(e);
                }
            },
            togglePeriod: function() {
                ee(r.clone().add(r.hours() >= 12 ? -12 : 12, "h"));
            },
            togglePicker: function(e) {
                var n = $(e.target), a = n.closest("ul"), r = a.find(".in"), i = a.find(".collapse:not(.in)"), s;
                if (r && r.length) {
                    s = r.data("collapse");
                    if (s && s.transitioning) {
                        return;
                    }
                    if (r.collapse) {
                        r.collapse("hide");
                        i.collapse("show");
                    } else {
                        r.removeClass("in");
                        i.addClass("in");
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
                    if (r.hours() >= 12) {
                        if (t !== 12) {
                            t += 12;
                        }
                    } else {
                        if (t === 12) {
                            t = 0;
                        }
                    }
                }
                ee(r.clone().hours(t));
                re.showPicker.call(n);
            },
            selectMinute: function(e) {
                ee(r.clone().minutes(parseInt($(e.target).text(), 10)));
                re.showPicker.call(n);
            },
            selectSecond: function(e) {
                ee(r.clone().seconds(parseInt($(e.target).text(), 10)));
                re.showPicker.call(n);
            },
            clear: ne,
            today: function() {
                var e = k();
                if (N(e, "d")) {
                    ee(e);
                }
            },
            close: te
        }, ie = function(e) {
            if ($(e.currentTarget).is(".disabled")) {
                return false;
            }
            re[$(e.currentTarget).data("action")].apply(n, arguments);
            return false;
        }, se = function() {
            var e, a = {
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
                ee(ae(o.val().trim()));
            } else if (s && t.useCurrent && (t.inline || o.is("input") && o.val().trim().length === 0)) {
                e = k();
                if (typeof t.useCurrent === "string") {
                    e = a[t.useCurrent](e);
                }
                ee(e);
            }
            u = H();
            A();
            J();
            u.find(".timepicker-hours").hide();
            u.find(".timepicker-minutes").hide();
            u.find(".timepicker-seconds").hide();
            X();
            W();
            $(window).on("resize", E);
            u.on("click", "[data-action]", ie);
            u.on("mousedown", false);
            if (d && d.hasClass("btn")) {
                d.toggleClass("active");
            }
            E();
            u.show();
            if (t.focusOnShow && !o.is(":focus")) {
                o.focus();
            }
            C({
                type: "dp.show"
            });
            return n;
        }, oe = function() {
            return u ? te() : se();
        }, de = function(e) {
            var a = null, r, i, s = [], o = {}, d = e.which, l, m, _ = "p";
            g[d] = _;
            for (r in g) {
                if (g.hasOwnProperty(r) && g[r] === _) {
                    s.push(r);
                    if (parseInt(r, 10) !== d) {
                        o[r] = true;
                    }
                }
            }
            for (r in t.keyBinds) {
                if (t.keyBinds.hasOwnProperty(r) && typeof t.keyBinds[r] === "function") {
                    l = r.split(" ");
                    if (l.length === s.length && v[d] === l[l.length - 1]) {
                        m = true;
                        for (i = l.length - 2; i >= 0; i--) {
                            if (!(v[l[i]] in o)) {
                                m = false;
                                break;
                            }
                        }
                        if (m) {
                            a = t.keyBinds[r];
                            break;
                        }
                    }
                }
            }
            if (a) {
                a.call(n, u);
                e.stopPropagation();
                e.preventDefault();
            }
        }, ue = function(e) {
            g[e.which] = "r";
            e.stopPropagation();
            e.preventDefault();
        }, le = function(e) {
            var t = $(e.target).val().trim(), n = t ? ae(t) : null;
            ee(n);
            e.stopImmediatePropagation();
            return false;
        }, me = function() {
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
        }, _e = function() {
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
        }, ce = function(e) {
            var t = {};
            $.each(e, function() {
                var e = ae(this);
                if (e.isValid()) {
                    t[e.format("YYYY-MM-DD")] = true;
                }
            });
            return Object.keys(t).length ? t : false;
        }, fe = function(e) {
            var t = {};
            $.each(e, function() {
                t[this] = true;
            });
            return Object.keys(t).length ? t : false;
        }, he = function() {
            var e = t.format || "L LT";
            _ = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                var t = r.localeData().longDateFormat(e) || e;
                return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                    return r.localeData().longDateFormat(e) || e;
                });
            });
            c = t.extraFormats ? t.extraFormats.slice() : [];
            if (c.indexOf(e) < 0 && c.indexOf(_) < 0) {
                c.push(_);
            }
            l = _.toLowerCase().indexOf("a") < 1 && _.replace(/\[.*?\]/g, "").indexOf("h") < 1;
            if (b("y")) {
                m = 2;
            }
            if (b("M")) {
                m = 1;
            }
            if (b("d")) {
                m = 0;
            }
            f = Math.max(m, f);
            if (!s) {
                ee(r);
            }
        };
        n.destroy = function() {
            te();
            _e();
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
                return r.clone();
            }
            if (e !== null && typeof e !== "string" && !a.isMoment(e) && !(e instanceof Date)) {
                throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
            }
            ee(e === null ? null : ae(e));
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
            if (_) {
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
            if (c) {
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
                X();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledDates() expects an array parameter");
            }
            t.disabledDates = ce(e);
            t.enabledDates = false;
            X();
            return n;
        };
        n.enabledDates = function(e) {
            if (arguments.length === 0) {
                return t.enabledDates ? $.extend({}, t.enabledDates) : t.enabledDates;
            }
            if (!e) {
                t.enabledDates = false;
                X();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("enabledDates() expects an array parameter");
            }
            t.enabledDates = ce(e);
            t.disabledDates = false;
            X();
            return n;
        };
        n.daysOfWeekDisabled = function(e) {
            if (arguments.length === 0) {
                return t.daysOfWeekDisabled.splice(0);
            }
            if (typeof e === "boolean" && !e) {
                t.daysOfWeekDisabled = false;
                X();
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
                var a = 0;
                while (!N(r, "d")) {
                    r.add(1, "d");
                    if (a === 31) {
                        throw "Tried 31 times to find a valid date";
                    }
                    a++;
                }
                ee(r);
            }
            X();
            return n;
        };
        n.maxDate = function(e) {
            if (arguments.length === 0) {
                return t.maxDate ? t.maxDate.clone() : t.maxDate;
            }
            if (typeof e === "boolean" && e === false) {
                t.maxDate = false;
                X();
                return n;
            }
            if (typeof e === "string") {
                if (e === "now" || e === "moment") {
                    e = k();
                }
            }
            var a = ae(e);
            if (!a.isValid()) {
                throw new TypeError("maxDate() Could not parse date parameter: " + e);
            }
            if (t.minDate && a.isBefore(t.minDate)) {
                throw new TypeError("maxDate() date parameter is before options.minDate: " + a.format(_));
            }
            t.maxDate = a;
            if (t.useCurrent && !t.keepInvalid && r.isAfter(e)) {
                ee(t.maxDate);
            }
            if (i.isAfter(a)) {
                i = a.clone().subtract(t.stepping, "m");
            }
            X();
            return n;
        };
        n.minDate = function(e) {
            if (arguments.length === 0) {
                return t.minDate ? t.minDate.clone() : t.minDate;
            }
            if (typeof e === "boolean" && e === false) {
                t.minDate = false;
                X();
                return n;
            }
            if (typeof e === "string") {
                if (e === "now" || e === "moment") {
                    e = k();
                }
            }
            var a = ae(e);
            if (!a.isValid()) {
                throw new TypeError("minDate() Could not parse date parameter: " + e);
            }
            if (t.maxDate && a.isAfter(t.maxDate)) {
                throw new TypeError("minDate() date parameter is after options.maxDate: " + a.format(_));
            }
            t.minDate = a;
            if (t.useCurrent && !t.keepInvalid && r.isBefore(e)) {
                ee(t.minDate);
            }
            if (i.isBefore(a)) {
                i = a.clone().add(t.stepping, "m");
            }
            X();
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
                    e = k();
                } else {
                    e = k(e);
                }
            }
            var a = ae(e);
            if (!a.isValid()) {
                throw new TypeError("defaultDate() Could not parse date parameter: " + e);
            }
            if (!N(a)) {
                throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
            }
            t.defaultDate = a;
            if (t.defaultDate && t.inline || o.val().trim() === "") {
                ee(t.defaultDate);
            }
            return n;
        };
        n.locale = function(e) {
            if (arguments.length === 0) {
                return t.locale;
            }
            if (!a.localeData(e)) {
                throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
            }
            t.locale = e;
            r.locale(t.locale);
            i.locale(t.locale);
            if (_) {
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
            var a = [ "year", "month", "day", "hour", "minute" ];
            if (arguments.length === 0) {
                return t.useCurrent;
            }
            if (typeof e !== "boolean" && typeof e !== "string") {
                throw new TypeError("useCurrent() expects a boolean or string parameter");
            }
            if (typeof e === "string" && a.indexOf(e.toLowerCase()) === -1) {
                throw new TypeError("useCurrent() expects a string parameter of " + a.join(", "));
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
            f = Math.max(p.indexOf(e), m);
            W();
            return n;
        };
        n.toolbarPlacement = function(e) {
            if (arguments.length === 0) {
                return t.toolbarPlacement;
            }
            if (typeof e !== "string") {
                throw new TypeError("toolbarPlacement() expects a string parameter");
            }
            if (L.indexOf(e) === -1) {
                throw new TypeError("toolbarPlacement() parameter must be one of (" + L.join(", ") + ") value");
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
                if (M.indexOf(e.horizontal) === -1) {
                    throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + M.join(", ") + ")");
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
            X();
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
            X();
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
            return k(e);
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
                X();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledTimeIntervals() expects an array parameter");
            }
            t.disabledTimeIntervals = e;
            X();
            return n;
        };
        n.disabledHours = function(e) {
            if (arguments.length === 0) {
                return t.disabledHours ? $.extend({}, t.disabledHours) : t.disabledHours;
            }
            if (!e) {
                t.disabledHours = false;
                X();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("disabledHours() expects an array parameter");
            }
            t.disabledHours = fe(e);
            t.enabledHours = false;
            if (t.useCurrent && !t.keepInvalid) {
                var a = 0;
                while (!N(r, "h")) {
                    r.add(1, "h");
                    if (a === 24) {
                        throw "Tried 24 times to find a valid date";
                    }
                    a++;
                }
                ee(r);
            }
            X();
            return n;
        };
        n.enabledHours = function(e) {
            if (arguments.length === 0) {
                return t.enabledHours ? $.extend({}, t.enabledHours) : t.enabledHours;
            }
            if (!e) {
                t.enabledHours = false;
                X();
                return n;
            }
            if (!(e instanceof Array)) {
                throw new TypeError("enabledHours() expects an array parameter");
            }
            t.enabledHours = fe(e);
            t.disabledHours = false;
            if (t.useCurrent && !t.keepInvalid) {
                var a = 0;
                while (!N(r, "h")) {
                    r.add(1, "h");
                    if (a === 24) {
                        throw "Tried 24 times to find a valid date";
                    }
                    a++;
                }
                ee(r);
            }
            X();
            return n;
        };
        n.viewDate = function(e) {
            if (arguments.length === 0) {
                return i.clone();
            }
            if (!e) {
                i = r.clone();
                return n;
            }
            if (typeof e !== "string" && !a.isMoment(e) && !(e instanceof Date)) {
                throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
            }
            i = ae(e);
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
        r = k();
        i = r.clone();
        $.extend(true, t, P());
        n.options(t);
        he();
        me();
        if (o.prop("disabled")) {
            n.disable();
        }
        if (o.is("input") && o.val().trim().length !== 0) {
            ee(ae(o.val().trim()));
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
        var t = Array.prototype.slice.call(arguments, 1), n = true, a = [ "destroy", "hide", "show", "toggle" ], i;
        if (typeof e === "object") {
            return this.each(function() {
                var t = $(this);
                if (!t.data("DateTimePicker")) {
                    e = $.extend(true, {}, $.fn.datetimepicker.defaults, e);
                    t.data("DateTimePicker", r(t, e));
                }
            });
        } else if (typeof e === "string") {
            this.each(function() {
                var a = $(this), r = a.data("DateTimePicker");
                if (!r) {
                    throw new Error('bootstrap-datetimepicker("' + e + '") method was called on an element that is not using DateTimePicker');
                }
                i = r[e].apply(r, t);
                n = i === r;
            });
            if (n || $.inArray(e, a) > -1) {
                return this;
            }
            return i;
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
        locale: a.locale(),
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
    var a = n(131);
    if (typeof a === "string") a = [ [ e.id, a, "" ] ];
    var r = n(133)(a, {});
    if (a.locals) e.exports = a.locals;
    if (false) {
        if (!a.locals) {
            e.hot.accept("!!./../../css-loader/index.js!./bootstrap-datetimepicker.css", function() {
                var t = require("!!./../../css-loader/index.js!./bootstrap-datetimepicker.css");
                if (typeof t === "string") t = [ [ e.id, t, "" ] ];
                r(t);
            });
        }
        e.hot.dispose(function() {
            r();
        });
    }
}, function(e, t, n) {
    t = e.exports = n(132)();
    t.push([ e.id, '/*!\n * Datetimepicker for Bootstrap 3\n * version : 4.17.43\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\n */.bootstrap-datetimepicker-widget{list-style:none}.bootstrap-datetimepicker-widget.dropdown-menu{margin:2px 0;padding:4px;width:19em}@media (min-width:768px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:992px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:1200px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}.bootstrap-datetimepicker-widget.dropdown-menu:after,.bootstrap-datetimepicker-widget.dropdown-menu:before{content:"";display:inline-block;position:absolute}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-bottom-color:rgba(0,0,0,.2);top:-7px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:8px}.bootstrap-datetimepicker-widget.dropdown-menu.top:before{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #ccc;border-top-color:rgba(0,0,0,.2);bottom:-7px;left:6px}.bootstrap-datetimepicker-widget.dropdown-menu.top:after{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:7px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before{left:auto;right:6px}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after{left:auto;right:7px}.bootstrap-datetimepicker-widget .list-unstyled{margin:0}.bootstrap-datetimepicker-widget a[data-action]{padding:6px 0}.bootstrap-datetimepicker-widget a[data-action]:active{box-shadow:none}.bootstrap-datetimepicker-widget .timepicker-hour,.bootstrap-datetimepicker-widget .timepicker-minute,.bootstrap-datetimepicker-widget .timepicker-second{width:54px;font-weight:700;font-size:1.2em;margin:0}.bootstrap-datetimepicker-widget button[data-action]{padding:6px}.bootstrap-datetimepicker-widget .btn[data-action=incrementHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Increment Hours"}.bootstrap-datetimepicker-widget .btn[data-action=incrementMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Increment Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=decrementHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Decrement Hours"}.bootstrap-datetimepicker-widget .btn[data-action=decrementMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Decrement Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=showHours]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Show Hours"}.bootstrap-datetimepicker-widget .btn[data-action=showMinutes]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Show Minutes"}.bootstrap-datetimepicker-widget .btn[data-action=togglePeriod]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Toggle AM/PM"}.bootstrap-datetimepicker-widget .btn[data-action=clear]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Clear the picker"}.bootstrap-datetimepicker-widget .btn[data-action=today]:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Set the date to today"}.bootstrap-datetimepicker-widget .picker-switch{text-align:center}.bootstrap-datetimepicker-widget .picker-switch:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Toggle Date and Time Screens"}.bootstrap-datetimepicker-widget .picker-switch td{padding:0;margin:0;height:auto;width:auto;line-height:inherit}.bootstrap-datetimepicker-widget .picker-switch td span{line-height:2.5;height:2.5em;width:100%}.bootstrap-datetimepicker-widget table{width:100%;margin:0}.bootstrap-datetimepicker-widget table td,.bootstrap-datetimepicker-widget table th{text-align:center;border-radius:4px}.bootstrap-datetimepicker-widget table th{height:20px;line-height:20px;width:20px}.bootstrap-datetimepicker-widget table th.picker-switch{width:145px}.bootstrap-datetimepicker-widget table th.disabled,.bootstrap-datetimepicker-widget table th.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget table th.prev:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Previous Month"}.bootstrap-datetimepicker-widget table th.next:after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;content:"Next Month"}.bootstrap-datetimepicker-widget table thead tr:first-child th{cursor:pointer}.bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#eee}.bootstrap-datetimepicker-widget table td{height:54px;line-height:54px;width:54px}.bootstrap-datetimepicker-widget table td.cw{font-size:.8em;height:20px;line-height:20px;color:#777}.bootstrap-datetimepicker-widget table td.day{height:25px;line-height:25px;width:20px}.bootstrap-datetimepicker-widget table td.day:hover,.bootstrap-datetimepicker-widget table td.hour:hover,.bootstrap-datetimepicker-widget table td.minute:hover,.bootstrap-datetimepicker-widget table td.second:hover{background:#eee;cursor:pointer}.bootstrap-datetimepicker-widget table td.new,.bootstrap-datetimepicker-widget table td.old{color:#777}.bootstrap-datetimepicker-widget table td.today{position:relative}.bootstrap-datetimepicker-widget table td.today:before{content:"";display:inline-block;border:solid transparent;border-width:0 0 7px 7px;border-bottom-color:#3399fe;border-top-color:rgba(0,0,0,.2);position:absolute;bottom:4px;right:4px}.bootstrap-datetimepicker-widget table td.active,.bootstrap-datetimepicker-widget table td.active:hover{background-color:#3399fe;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.bootstrap-datetimepicker-widget table td.active.today:before{border-bottom-color:#fff}.bootstrap-datetimepicker-widget table td.disabled,.bootstrap-datetimepicker-widget table td.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget table td span{display:inline-block;width:54px;height:54px;line-height:54px;margin:2px 1.5px;cursor:pointer;border-radius:4px}.bootstrap-datetimepicker-widget table td span:hover{background:#eee}.bootstrap-datetimepicker-widget table td span.active{background-color:#3399fe;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.bootstrap-datetimepicker-widget table td span.old{color:#777}.bootstrap-datetimepicker-widget table td span.disabled,.bootstrap-datetimepicker-widget table td span.disabled:hover{background:none;color:#ccc;cursor:not-allowed}.bootstrap-datetimepicker-widget.usetwentyfour td.hour{height:27px;line-height:27px}.bootstrap-datetimepicker-widget.wider{width:21em}.bootstrap-datetimepicker-widget .datepicker-decades .decade{line-height:1.8em!important}.input-group.date .input-group-addon{cursor:pointer}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}', "" ]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        e.toString = function e() {
            var t = [];
            for (var n = 0; n < this.length; n++) {
                var a = this[n];
                if (a[2]) {
                    t.push("@media " + a[2] + "{" + a[1] + "}");
                } else {
                    t.push(a[1]);
                }
            }
            return t.join("");
        };
        e.i = function(t, n) {
            if (typeof t === "string") t = [ [ null, t, "" ] ];
            var a = {};
            for (var r = 0; r < this.length; r++) {
                var i = this[r][0];
                if (typeof i === "number") a[i] = true;
            }
            for (r = 0; r < t.length; r++) {
                var s = t[r];
                if (typeof s[0] !== "number" || !a[s[0]]) {
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
    var a = {}, r = function(e) {
        var t;
        return function() {
            if (typeof t === "undefined") t = e.apply(this, arguments);
            return t;
        };
    }, i = r(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), s = r(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), o = null, d = 0, u = [];
    e.exports = function(e, t) {
        if (false) {
            if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }
        t = t || {};
        if (typeof t.singleton === "undefined") t.singleton = i();
        if (typeof t.insertAt === "undefined") t.insertAt = "bottom";
        var n = m(e);
        l(n, t);
        return function e(r) {
            var i = [];
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                var d = a[o.id];
                d.refs--;
                i.push(d);
            }
            if (r) {
                var u = m(r);
                l(u, t);
            }
            for (var s = 0; s < i.length; s++) {
                var d = i[s];
                if (d.refs === 0) {
                    for (var _ = 0; _ < d.parts.length; _++) d.parts[_]();
                    delete a[d.id];
                }
            }
        };
    };
    function l(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            var i = a[r.id];
            if (i) {
                i.refs++;
                for (var s = 0; s < i.parts.length; s++) {
                    i.parts[s](r.parts[s]);
                }
                for (;s < r.parts.length; s++) {
                    i.parts.push(p(r.parts[s], t));
                }
            } else {
                var o = [];
                for (var s = 0; s < r.parts.length; s++) {
                    o.push(p(r.parts[s], t));
                }
                a[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: o
                };
            }
        }
    }
    function m(e) {
        var t = [];
        var n = {};
        for (var a = 0; a < e.length; a++) {
            var r = e[a];
            var i = r[0];
            var s = r[1];
            var o = r[2];
            var d = r[3];
            var u = {
                css: s,
                media: o,
                sourceMap: d
            };
            if (!n[i]) t.push(n[i] = {
                id: i,
                parts: [ u ]
            }); else n[i].parts.push(u);
        }
        return t;
    }
    function _(e, t) {
        var n = s();
        var a = u[u.length - 1];
        if (e.insertAt === "top") {
            if (!a) {
                n.insertBefore(t, n.firstChild);
            } else if (a.nextSibling) {
                n.insertBefore(t, a.nextSibling);
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
    function c(e) {
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        if (t >= 0) {
            u.splice(t, 1);
        }
    }
    function f(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        _(e, t);
        return t;
    }
    function h(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet";
        _(e, t);
        return t;
    }
    function p(e, t) {
        var n, a, r;
        if (t.singleton) {
            var i = d++;
            n = o || (o = f(t));
            a = M.bind(null, n, i, false);
            r = M.bind(null, n, i, true);
        } else if (e.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
            n = h(t);
            a = v.bind(null, n);
            r = function() {
                c(n);
                if (n.href) URL.revokeObjectURL(n.href);
            };
        } else {
            n = f(t);
            a = L.bind(null, n);
            r = function() {
                c(n);
            };
        }
        a(e);
        return function t(n) {
            if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                a(e = n);
            } else {
                r();
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
    function M(e, t, n, a) {
        var r = n ? "" : a.css;
        if (e.styleSheet) {
            e.styleSheet.cssText = y(t, r);
        } else {
            var i = document.createTextNode(r);
            var s = e.childNodes;
            if (s[t]) e.removeChild(s[t]);
            if (s.length) {
                e.insertBefore(i, s[t]);
            } else {
                e.appendChild(i);
            }
        }
    }
    function L(e, t) {
        var n = t.css;
        var a = t.media;
        if (a) {
            e.setAttribute("media", a);
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
    function v(e, t) {
        var n = t.css;
        var a = t.sourceMap;
        if (a) {
            n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */";
        }
        var r = new Blob([ n ], {
            type: "text/css"
        });
        var i = e.href;
        e.href = URL.createObjectURL(r);
        if (i) URL.revokeObjectURL(i);
    }
}, function(e, t) {
    "use strict";
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = u([ "<div></div>" ], [ "<div></div>" ]);
    var i = u([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ]);
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
    function m(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function _(e, t) {
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
        _(t, e);
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
            var a = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var r = a;
            if (n.addonBefore || n.addonAfter) {
                var i = a.onEnter.bind(a);
                var s = a.onChange.bind(a);
                a.$("input").keydown(i);
                a.$("input").change(s);
            }
            return a;
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {};
                var n = hx(r);
                if (t.addonBefore || t.addonAfter) {
                    n = hx(i, t.size ? "input-group-" + t.size : "", t.addonBefore ? hx(s, t.prefix) : "", t.type, t.placeholder, t.value, t.name, t.disabled ? "disabled" : "", t.readonly ? "readonly" : "", t.addonAfter ? hx(s, t.suffix) : "");
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
                var n = $(t.currentTarget), a = n.val();
                if (t.keyCode == 13) {
                    if (typeof this.options.onEnter === "function") this.options.onEnter(this, a, t);
                }
            }
        }, {
            key: "onChange",
            value: function e(t) {
                var n = $(t.currentTarget), a = n.val();
                if (typeof this.options.onChange === "function") this.options.onChange(this, a, t);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("inputs", c);
    e.exports = c;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var r = p([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ' ]);
    var i = n(136);
    var s = h(i);
    var o = n(15);
    var d = h(o);
    var u = n(16);
    var l = h(u);
    var m = n(17);
    var _ = h(m);
    var c = n(134);
    var f = h(c);
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
    function M(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function L(e, t) {
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
        L(t, e);
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
            var a = {
                components: [ {
                    el: "#form1",
                    layout: "inline",
                    data: [ {
                        label: "名称",
                        text: "静态内容"
                    }, {
                        label: "名称1",
                        help: "注意事项",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称"
                        },
                        component: {
                            comName: "inputs",
                            name: "name",
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框", n);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称2"
                        },
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框2", n);
                            }
                        }
                    }, {
                        label: "名称3",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称3"
                        },
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框", n);
                            },
                            data: $.extend(true, [], n)
                        }
                    }, {
                        label: "名称4",
                        required: true,
                        rule: {},
                        message: {
                            required: "请先填写名称4"
                        },
                        component: {
                            comName: "selects",
                            name: "time",
                            placeholder: "请选择",
                            onChange: function e(t, n) {
                                console.warn("点击了选项框2", n);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], n)
                        }
                    } ],
                    onSubmit: function e(t, n) {
                        console.warn("点击了提交", n);
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
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框", n);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "inputs",
                            name: "old",
                            placeholder: "输入关键字",
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框2", n);
                            }
                        }
                    }, {
                        label: "名称2",
                        required: false,
                        component: {
                            comName: "selects",
                            name: "book",
                            placeholder: "请选择",
                            onChange: function e(t, n) {
                                console.warn("点击了搜索框", n);
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
                            onChange: function e(t, n) {
                                console.warn("点击了选项框2", n);
                            },
                            value: {
                                key: "so2",
                                value: "选项二选项二选项二"
                            },
                            data: $.extend(true, [], n)
                        }
                    } ],
                    onSubmit: function e(t, n) {
                        console.warn("点击了提交2", n);
                        return false;
                    }
                } ]
            };
            Object.assign(a, e);
            return M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = hx(r);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = v;
}, function(e, t, n) {
    "use strict";
    var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    function r(e) {
        return e && (typeof e === "undefined" ? "undefined" : a(e)) === "object" && "default" in e ? e["default"] : e;
    }
    var i = r(n(137));
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || false;
                a.configurable = true;
                if ("value" in a) a.writable = true;
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            if (n) e(t.prototype, n);
            if (a) e(t, a);
            return t;
        };
    }();
    var o = p([ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ], [ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ]);
    var d = p([ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ], [ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ]);
    var u = p([ '<p class="form-control-static mb-0">', "</p>" ], [ '<p class="form-control-static mb-0">', "</p>" ]);
    var l = p([ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);
    var m = p([ '<span class="symbol required">*</span>' ], [ '<span class="symbol required">*</span>' ]);
    var _ = p([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);
    var c = p([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);
    var f = p([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);
    var h = p([ "<form>\n            ", "\n            ", "</form>" ], [ "<form>\n            ", "\n            ", "</form>" ]);
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
    function M(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : a(t)) === "object" || typeof t === "function") ? t : e;
    }
    function L(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : a(t)));
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
    $.fn.validate = i;
    var v = function(e) {
        L(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            y(this, t);
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
                        var a = Lego.getView(e.el);
                        if (a) a.submitForm();
                    },
                    rules: {},
                    messages: {}
                },
                labelCols: 2,
                comCols: 10,
                submitEl: "",
                submitText: "提 交",
                showSubmit: true,
                resetText: "重 置",
                data: [],
                format: function e(t) {
                    return t;
                },
                onSubmit: function e() {}
            };
            Object.assign(n, e);
            var a = M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            a.renderCom();
            return a;
        }
        s(t, [ {
            key: "render",
            value: function e() {
                var t = this.options || {}, n = this;
                function a() {
                    var e = "";
                    if (!t.submitEl && t.showSubmit) {
                        if (t.layout == "vertical") {
                            e = hx(o, t.submitText, t.resetText);
                        } else {
                            e = hx(d, t.labelCols, t.comCols, t.submitText, t.resetText);
                        }
                    }
                    return e;
                }
                function r(e, t, a) {
                    var r = "", i = "";
                    if (e.text) {
                        i = hx(u, val(e.text));
                    } else {
                        i = hx("<" + val(e.component.comName) + " id=" + a + "></" + val(e.component.comName) + ">");
                    }
                    if (t == "vertical") {
                        r = hx(l, a, val(e.label), e.required ? hx(m) : "", i, e.help ? hx(_, val(e.help)) : "");
                    } else {
                        r = hx(c, a, n.options.labelCols, val(e.label), e.required ? hx(m) : "", n.options.comCols, i, e.help ? hx(_, val(e.help)) : "");
                    }
                    return r;
                }
                function i(e, n, a) {
                    var i = "", s = [ "component", t.vid, n ];
                    if (e.items) {
                        i = hx(f, val(e.labelClass), val(e.label), e.items.map(function(e, t) {
                            s.push(t);
                            return r(e, a, s.join("_"));
                        }));
                    } else {
                        i = r(e, a, s.join("_"));
                    }
                    return i;
                }
                var s = hx(h, t.data.map(function(e, n) {
                    return i(e, n, t.layout);
                }), a());
                return s;
            }
        }, {
            key: "renderCom",
            value: function e() {
                var t = this;
                var n = this;
                this.rules = null;
                this.messages = null;
                this.options.data.map(function(e, a) {
                    if (!e.text) {
                        (function() {
                            var r = [ "component", n.options.vid, a ];
                            if (e.items) {
                                e.items.map(function(e, t) {
                                    if (e.rule && e.message) {
                                        n.rules = n.options.rules || {};
                                        n.messages = n.options.messages || {};
                                        if (e.required) e.rule.required = true;
                                        n.options.setDefaults.rules[e.component.name] = e.rule;
                                        n.options.setDefaults.messages[e.component.name] = e.message;
                                    }
                                    r.push(t);
                                    e.component.el = "#" + r.join("_");
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
                                e.component.el = "#" + r.join("_");
                                Lego.create(Lego.UI[e.component.comName], e.component);
                            }
                        })();
                    }
                });
                var a = "click.form_" + this.options.vid, r = this.options.submitEl, i = r instanceof $ ? r : $((typeof r == "string" ? r : "") || '[type="submit"]');
                if (this.rules && this.messages) {
                    this.$el.validate(this.options.setDefaults);
                    if (i.length) {
                        i.off(a).on(a, function(e) {
                            n.$el.submit();
                        });
                    }
                } else {
                    i.off(a).on(a, function(e) {
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
                var t = this.options.format, n = this.options.submitEl, a = n instanceof $ ? n : this.$((typeof n == "string" ? n : "") || '[type="submit"]'), r = this;
                var i = this.serializeJson();
                if (typeof t == "function") i = t(i);
                if (!Object.values(i).length) return false;
                if (!a.hasClass("disabled")) {
                    a.text("提交中...").addClass("disabled");
                }
                return this.options.onSubmit(this, i);
            }
        }, {
            key: "reset",
            value: function e() {
                this.$el.reset();
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("forms", v);
    e.exports = v;
}, function(e, t) {
    (function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) {
                    if (e && e.debug && window.console) {
                        console.warn("Nothing selected, can't validate, returning nothing.");
                    }
                    return;
                }
                var n = t.data(this[0], "validator");
                if (n) {
                    return n;
                }
                this.attr("novalidate", "novalidate");
                n = new t.validator(e, this[0]);
                t.data(this[0], "validator", n);
                if (n.settings.onsubmit) {
                    this.on("click.validate", ":submit", function(e) {
                        if (n.settings.submitHandler) {
                            n.submitButton = e.target;
                        }
                        if (t(this).hasClass("cancel")) {
                            n.cancelSubmit = true;
                        }
                        if (t(this).attr("formnovalidate") !== undefined) {
                            n.cancelSubmit = true;
                        }
                    });
                    this.on("submit.validate", function(e) {
                        if (n.settings.debug) {
                            e.preventDefault();
                        }
                        function a() {
                            var a, r;
                            if (n.settings.submitHandler) {
                                if (n.submitButton) {
                                    a = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm);
                                }
                                r = n.settings.submitHandler.call(n, n.currentForm, e);
                                if (n.submitButton) {
                                    a.remove();
                                }
                                if (r !== undefined) {
                                    return r;
                                }
                                return false;
                            }
                            return true;
                        }
                        if (n.cancelSubmit) {
                            n.cancelSubmit = false;
                            return a();
                        }
                        if (n.form()) {
                            if (n.pendingRequest) {
                                n.formSubmitted = true;
                                return false;
                            }
                            return a();
                        } else {
                            n.focusInvalid();
                            return false;
                        }
                    });
                }
                return n;
            },
            valid: function() {
                var e, n, a;
                if (t(this[0]).is("form")) {
                    e = this.validate().form();
                } else {
                    a = [];
                    e = true;
                    n = t(this[0].form).validate();
                    this.each(function() {
                        e = n.element(this) && e;
                        if (!e) {
                            a = a.concat(n.errorList);
                        }
                    });
                    n.errorList = a;
                }
                return e;
            },
            rules: function(e, n) {
                var a = this[0], r, i, s, o, d, u;
                if (a == null || a.form == null) {
                    return;
                }
                if (e) {
                    r = t.data(a.form, "validator").settings;
                    i = r.rules;
                    s = t.validator.staticRules(a);
                    switch (e) {
                      case "add":
                        t.extend(s, t.validator.normalizeRule(n));
                        delete s.messages;
                        i[a.name] = s;
                        if (n.messages) {
                            r.messages[a.name] = t.extend(r.messages[a.name], n.messages);
                        }
                        break;

                      case "remove":
                        if (!n) {
                            delete i[a.name];
                            return s;
                        }
                        u = {};
                        t.each(n.split(/\s/), function(e, n) {
                            u[n] = s[n];
                            delete s[n];
                            if (n === "required") {
                                t(a).removeAttr("aria-required");
                            }
                        });
                        return u;
                    }
                }
                o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(a), t.validator.attributeRules(a), t.validator.dataRules(a), t.validator.staticRules(a)), a);
                if (o.required) {
                    d = o.required;
                    delete o.required;
                    o = t.extend({
                        required: d
                    }, o);
                    t(a).attr("aria-required", "true");
                }
                if (o.remote) {
                    d = o.remote;
                    delete o.remote;
                    o = t.extend(o, {
                        remote: d
                    });
                }
                return o;
            }
        });
        t.extend(t.expr.pseudos || t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val());
            },
            filled: function(e) {
                var n = t(e).val();
                return n !== null && !!t.trim("" + n);
            },
            unchecked: function(e) {
                return !t(e).prop("checked");
            }
        });
        t.validator = function(e, n) {
            this.settings = t.extend(true, {}, t.validator.defaults, e);
            this.currentForm = n;
            this.init();
        };
        t.validator.format = function(e, n) {
            if (arguments.length === 1) {
                return function() {
                    var n = t.makeArray(arguments);
                    n.unshift(e);
                    return t.validator.format.apply(this, n);
                };
            }
            if (n === undefined) {
                return e;
            }
            if (arguments.length > 2 && n.constructor !== Array) {
                n = t.makeArray(arguments).slice(1);
            }
            if (n.constructor !== Array) {
                n = [ n ];
            }
            t.each(n, function(t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return n;
                });
            });
            return e;
        };
        t.extend(t.validator, {
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
                errorContainer: t([]),
                errorLabelContainer: t([]),
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
                onkeyup: function(e, n) {
                    var a = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                    if (n.which === 9 && this.elementValue(e) === "" || t.inArray(n.keyCode, a) !== -1) {
                        return;
                    } else if (e.name in this.submitted || e.name in this.invalid) {
                        this.element(e);
                    }
                },
                onclick: function(e) {
                    if (e.name in this.submitted) {
                        this.element(e);
                    } else if (e.parentNode.name in this.submitted) {
                        this.element(e.parentNode);
                    }
                },
                highlight: function(e, n, a) {
                    if (e.type === "radio") {
                        this.findByName(e.name).addClass(n).removeClass(a);
                    } else {
                        t(e).addClass(n).removeClass(a);
                    }
                },
                unhighlight: function(e, n, a) {
                    if (e.type === "radio") {
                        this.findByName(e.name).removeClass(n).addClass(a);
                    } else {
                        t(e).removeClass(n).addClass(a);
                    }
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e);
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
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}."),
                step: t.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: false,
            prototype: {
                init: function() {
                    this.labelContainer = t(this.settings.errorLabelContainer);
                    this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm);
                    this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var e = this.groups = {}, n;
                    t.each(this.settings.groups, function(n, a) {
                        if (typeof a === "string") {
                            a = a.split(/\s/);
                        }
                        t.each(a, function(t, a) {
                            e[a] = n;
                        });
                    });
                    n = this.settings.rules;
                    t.each(n, function(e, a) {
                        n[e] = t.validator.normalizeRule(a);
                    });
                    function a(e) {
                        if (!this.form && this.hasAttribute("contenteditable")) {
                            this.form = t(this).closest("form")[0];
                        }
                        var n = t.data(this.form, "validator"), a = "on" + e.type.replace(/^validate/, ""), r = n.settings;
                        if (r[a] && !t(this).is(r.ignore)) {
                            r[a].call(n, this, e);
                        }
                    }
                    t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", a).on("click.validate", "select, option, [type='radio'], [type='checkbox']", a);
                    if (this.settings.invalidHandler) {
                        t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    }
                    t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
                },
                form: function() {
                    this.checkForm();
                    t.extend(this.submitted, this.errorMap);
                    this.invalid = t.extend({}, this.errorMap);
                    if (!this.valid()) {
                        t(this.currentForm).triggerHandler("invalid-form", [ this ]);
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
                element: function(e) {
                    var n = this.clean(e), a = this.validationTargetFor(n), r = this, i = true, s, o;
                    if (a === undefined) {
                        delete this.invalid[n.name];
                    } else {
                        this.prepareElement(a);
                        this.currentElements = t(a);
                        o = this.groups[a.name];
                        if (o) {
                            t.each(this.groups, function(e, t) {
                                if (t === o && e !== a.name) {
                                    n = r.validationTargetFor(r.clean(r.findByName(e)));
                                    if (n && n.name in r.invalid) {
                                        r.currentElements.push(n);
                                        i = r.check(n) && i;
                                    }
                                }
                            });
                        }
                        s = this.check(a) !== false;
                        i = i && s;
                        if (s) {
                            this.invalid[a.name] = false;
                        } else {
                            this.invalid[a.name] = true;
                        }
                        if (!this.numberOfInvalids()) {
                            this.toHide = this.toHide.add(this.containers);
                        }
                        this.showErrors();
                        t(e).attr("aria-invalid", !s);
                    }
                    return i;
                },
                showErrors: function(e) {
                    if (e) {
                        var n = this;
                        t.extend(this.errorMap, e);
                        this.errorList = t.map(this.errorMap, function(e, t) {
                            return {
                                message: e,
                                element: n.findByName(t)[0]
                            };
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e);
                        });
                    }
                    if (this.settings.showErrors) {
                        this.settings.showErrors.call(this, this.errorMap, this.errorList);
                    } else {
                        this.defaultShowErrors();
                    }
                },
                resetForm: function() {
                    if (t.fn.resetForm) {
                        t(this.currentForm).resetForm();
                    }
                    this.invalid = {};
                    this.submitted = {};
                    this.prepareForm();
                    this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e);
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
                            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                        } catch (e) {}
                    }
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && t.grep(this.errorList, function(t) {
                        return t.element.name === e.name;
                    }).length === 1 && e;
                },
                elements: function() {
                    var e = this, n = {};
                    return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var a = this.name || t(this).attr("name");
                        if (!a && e.settings.debug && window.console) {
                            console.error("%o has no name assigned", this);
                        }
                        if (this.hasAttribute("contenteditable")) {
                            this.form = t(this).closest("form")[0];
                        }
                        if (a in n || !e.objectLength(t(this).rules())) {
                            return false;
                        }
                        n[a] = true;
                        return true;
                    });
                },
                clean: function(e) {
                    return t(e)[0];
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext);
                },
                resetInternals: function() {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = t([]);
                    this.toHide = t([]);
                },
                reset: function() {
                    this.resetInternals();
                    this.currentElements = t([]);
                },
                prepareForm: function() {
                    this.reset();
                    this.toHide = this.errors().add(this.containers);
                },
                prepareElement: function(e) {
                    this.reset();
                    this.toHide = this.errorsFor(e);
                },
                elementValue: function(e) {
                    var n = t(e), a = e.type, r, i;
                    if (a === "radio" || a === "checkbox") {
                        return this.findByName(e.name).filter(":checked").val();
                    } else if (a === "number" && typeof e.validity !== "undefined") {
                        return e.validity.badInput ? "NaN" : n.val();
                    }
                    if (e.hasAttribute("contenteditable")) {
                        r = n.text();
                    } else {
                        r = n.val();
                    }
                    if (a === "file") {
                        if (r.substr(0, 12) === "C:\\fakepath\\") {
                            return r.substr(12);
                        }
                        i = r.lastIndexOf("/");
                        if (i >= 0) {
                            return r.substr(i + 1);
                        }
                        i = r.lastIndexOf("\\");
                        if (i >= 0) {
                            return r.substr(i + 1);
                        }
                        return r;
                    }
                    if (typeof r === "string") {
                        return r.replace(/\r/g, "");
                    }
                    return r;
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n = t(e).rules(), a = t.map(n, function(e, t) {
                        return t;
                    }).length, r = false, i = this.elementValue(e), s, o, d;
                    if (typeof n.normalizer === "function") {
                        i = n.normalizer.call(e, i);
                        if (typeof i !== "string") {
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
                            s = t.validator.methods[o].call(this, i, e, d.parameters);
                            if (s === "dependency-mismatch" && a === 1) {
                                r = true;
                                continue;
                            }
                            r = false;
                            if (s === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(e));
                                return;
                            }
                            if (!s) {
                                this.formatAndAdd(e, d);
                                return false;
                            }
                        } catch (t) {
                            if (this.settings.debug && window.console) {
                                console.log("Exception occurred when checking element " + e.id + ", check the '" + d.method + "' method.", t);
                            }
                            if (t instanceof TypeError) {
                                t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + d.method + "' method.";
                            }
                            throw t;
                        }
                    }
                    if (r) {
                        return;
                    }
                    if (this.objectLength(n)) {
                        this.successList.push(e);
                    }
                    return true;
                },
                customDataMessage: function(e, n) {
                    return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg");
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
                defaultMessage: function(e, n) {
                    if (typeof n === "string") {
                        n = {
                            method: n
                        };
                    }
                    var a = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || undefined, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>"), r = /\$?\{(\d+)\}/g;
                    if (typeof a === "function") {
                        a = a.call(this, n.parameters, e);
                    } else if (r.test(a)) {
                        a = t.validator.format(a.replace(r, "{$1}"), n.parameters);
                    }
                    return a;
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
                    return t(this.errorList).map(function() {
                        return this.element;
                    });
                },
                showLabel: function(e, n) {
                    var a, r, i, s, o = this.errorsFor(e), d = this.idOrName(e), u = t(e).attr("aria-describedby");
                    if (o.length) {
                        o.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                        o.html(n);
                    } else {
                        o = t("<" + this.settings.errorElement + ">").attr("id", d + "-error").addClass(this.settings.errorClass).html(n || "");
                        a = o;
                        if (this.settings.wrapper) {
                            a = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                        }
                        if (this.labelContainer.length) {
                            this.labelContainer.append(a);
                        } else if (this.settings.errorPlacement) {
                            this.settings.errorPlacement.call(this, a, t(e));
                        } else {
                            a.insertAfter(e);
                        }
                        if (o.is("label")) {
                            o.attr("for", d);
                        } else if (o.parents("label[for='" + this.escapeCssMeta(d) + "']").length === 0) {
                            i = o.attr("id");
                            if (!u) {
                                u = i;
                            } else if (!u.match(new RegExp("\\b" + this.escapeCssMeta(i) + "\\b"))) {
                                u += " " + i;
                            }
                            t(e).attr("aria-describedby", u);
                            r = this.groups[e.name];
                            if (r) {
                                s = this;
                                t.each(s.groups, function(e, n) {
                                    if (n === r) {
                                        t("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", o.attr("id"));
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
                            this.settings.success(o, e);
                        }
                    }
                    this.toShow = this.toShow.add(o);
                },
                errorsFor: function(e) {
                    var n = this.escapeCssMeta(this.idOrName(e)), a = t(e).attr("aria-describedby"), r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    if (a) {
                        r = r + ", #" + this.escapeCssMeta(a).replace(/\s+/g, ", #");
                    }
                    return this.errors().filter(r);
                },
                escapeCssMeta: function(e) {
                    return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
                },
                validationTargetFor: function(e) {
                    if (this.checkable(e)) {
                        e = this.findByName(e.name);
                    }
                    return t(e).not(this.settings.ignore)[0];
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type);
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
                },
                getLength: function(e, n) {
                    switch (n.nodeName.toLowerCase()) {
                      case "select":
                        return t("option:selected", n).length;

                      case "input":
                        if (this.checkable(n)) {
                            return this.findByName(n.name).filter(":checked").length;
                        }
                    }
                    return e.length;
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : true;
                },
                dependTypes: {
                    boolean: function(e) {
                        return e;
                    },
                    string: function(e, n) {
                        return !!t(e, n.form).length;
                    },
                    function: function(e, t) {
                        return e(t);
                    }
                },
                optional: function(e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch";
                },
                startRequest: function(e) {
                    if (!this.pending[e.name]) {
                        this.pendingRequest++;
                        t(e).addClass(this.settings.pendingClass);
                        this.pending[e.name] = true;
                    }
                },
                stopRequest: function(e, n) {
                    this.pendingRequest--;
                    if (this.pendingRequest < 0) {
                        this.pendingRequest = 0;
                    }
                    delete this.pending[e.name];
                    t(e).removeClass(this.settings.pendingClass);
                    if (n && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                        t(this.currentForm).submit();
                        this.formSubmitted = false;
                    } else if (!n && this.pendingRequest === 0 && this.formSubmitted) {
                        t(this.currentForm).triggerHandler("invalid-form", [ this ]);
                        this.formSubmitted = false;
                    }
                },
                previousValue: function(e, n) {
                    n = typeof n === "string" && n || "remote";
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: true,
                        message: this.defaultMessage(e, {
                            method: n
                        })
                    });
                },
                destroy: function() {
                    this.resetForm();
                    t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
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
            addClassRules: function(e, n) {
                if (e.constructor === String) {
                    this.classRuleSettings[e] = n;
                } else {
                    t.extend(this.classRuleSettings, e);
                }
            },
            classRules: function(e) {
                var n = {}, a = t(e).attr("class");
                if (a) {
                    t.each(a.split(" "), function() {
                        if (this in t.validator.classRuleSettings) {
                            t.extend(n, t.validator.classRuleSettings[this]);
                        }
                    });
                }
                return n;
            },
            normalizeAttributeRule: function(e, t, n, a) {
                if (/min|max|step/.test(n) && (t === null || /number|range|text/.test(t))) {
                    a = Number(a);
                    if (isNaN(a)) {
                        a = undefined;
                    }
                }
                if (a || a === 0) {
                    e[n] = a;
                } else if (t === n && t !== "range") {
                    e[n] = true;
                }
            },
            attributeRules: function(e) {
                var n = {}, a = t(e), r = e.getAttribute("type"), i, s;
                for (i in t.validator.methods) {
                    if (i === "required") {
                        s = e.getAttribute(i);
                        if (s === "") {
                            s = true;
                        }
                        s = !!s;
                    } else {
                        s = a.attr(i);
                    }
                    this.normalizeAttributeRule(n, r, i, s);
                }
                if (n.maxlength && /-1|2147483647|524288/.test(n.maxlength)) {
                    delete n.maxlength;
                }
                return n;
            },
            dataRules: function(e) {
                var n = {}, a = t(e), r = e.getAttribute("type"), i, s;
                for (i in t.validator.methods) {
                    s = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase());
                    this.normalizeAttributeRule(n, r, i, s);
                }
                return n;
            },
            staticRules: function(e) {
                var n = {}, a = t.data(e.form, "validator");
                if (a.settings.rules) {
                    n = t.validator.normalizeRule(a.settings.rules[e.name]) || {};
                }
                return n;
            },
            normalizeRules: function(e, n) {
                t.each(e, function(a, r) {
                    if (r === false) {
                        delete e[a];
                        return;
                    }
                    if (r.param || r.depends) {
                        var i = true;
                        switch (typeof r.depends) {
                          case "string":
                            i = !!t(r.depends, n.form).length;
                            break;

                          case "function":
                            i = r.depends.call(n, n);
                            break;
                        }
                        if (i) {
                            e[a] = r.param !== undefined ? r.param : true;
                        } else {
                            t.data(n.form, "validator").resetElements(t(n));
                            delete e[a];
                        }
                    }
                });
                t.each(e, function(a, r) {
                    e[a] = t.isFunction(r) && a !== "normalizer" ? r(n) : r;
                });
                t.each([ "minlength", "maxlength" ], function() {
                    if (e[this]) {
                        e[this] = Number(e[this]);
                    }
                });
                t.each([ "rangelength", "range" ], function() {
                    var n;
                    if (e[this]) {
                        if (t.isArray(e[this])) {
                            e[this] = [ Number(e[this][0]), Number(e[this][1]) ];
                        } else if (typeof e[this] === "string") {
                            n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            e[this] = [ Number(n[0]), Number(n[1]) ];
                        }
                    }
                });
                if (t.validator.autoCreateRanges) {
                    if (e.min != null && e.max != null) {
                        e.range = [ e.min, e.max ];
                        delete e.min;
                        delete e.max;
                    }
                    if (e.minlength != null && e.maxlength != null) {
                        e.rangelength = [ e.minlength, e.maxlength ];
                        delete e.minlength;
                        delete e.maxlength;
                    }
                }
                return e;
            },
            normalizeRule: function(e) {
                if (typeof e === "string") {
                    var n = {};
                    t.each(e.split(/\s/), function() {
                        n[this] = true;
                    });
                    e = n;
                }
                return e;
            },
            addMethod: function(e, n, a) {
                t.validator.methods[e] = n;
                t.validator.messages[e] = a !== undefined ? a : t.validator.messages[e];
                if (n.length < 3) {
                    t.validator.addClassRules(e, t.validator.normalizeRule(e));
                }
            },
            methods: {
                required: function(e, n, a) {
                    if (!this.depend(a, n)) {
                        return "dependency-mismatch";
                    }
                    if (n.nodeName.toLowerCase() === "select") {
                        var r = t(n).val();
                        return r && r.length > 0;
                    }
                    if (this.checkable(n)) {
                        return this.getLength(e, n) > 0;
                    }
                    return e.length > 0;
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
                minlength: function(e, n, a) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= a;
                },
                maxlength: function(e, n, a) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r <= a;
                },
                rangelength: function(e, n, a) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= a[0] && r <= a[1];
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
                step: function(e, n, a) {
                    var r = t(n).attr("type"), i = "Step attribute on input type " + r + " is not supported.", s = [ "text", "number", "range" ], o = new RegExp("\\b" + r + "\\b"), d = r && !o.test(s.join()), u = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        if (!t) {
                            return 0;
                        }
                        return t[1] ? t[1].length : 0;
                    }, l = function(e) {
                        return Math.round(e * Math.pow(10, _));
                    }, m = true, _;
                    if (d) {
                        throw new Error(i);
                    }
                    _ = u(a);
                    if (u(e) > _ || l(e) % l(a) !== 0) {
                        m = false;
                    }
                    return this.optional(n) || m;
                },
                equalTo: function(e, n, a) {
                    var r = t(a);
                    if (this.settings.onfocusout && r.not(".validate-equalTo-blur").length) {
                        r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                            t(n).valid();
                        });
                    }
                    return e === r.val();
                },
                remote: function(e, n, a, r) {
                    if (this.optional(n)) {
                        return "dependency-mismatch";
                    }
                    r = typeof r === "string" && r || "remote";
                    var i = this.previousValue(n, r), s, o, d;
                    if (!this.settings.messages[n.name]) {
                        this.settings.messages[n.name] = {};
                    }
                    i.originalMessage = i.originalMessage || this.settings.messages[n.name][r];
                    this.settings.messages[n.name][r] = i.message;
                    a = typeof a === "string" && {
                        url: a
                    } || a;
                    d = t.param(t.extend({
                        data: e
                    }, a.data));
                    if (i.old === d) {
                        return i.valid;
                    }
                    i.old = d;
                    s = this;
                    this.startRequest(n);
                    o = {};
                    o[n.name] = e;
                    t.ajax(t.extend(true, {
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: s.currentForm,
                        success: function(t) {
                            var a = t === true || t === "true", o, d, u;
                            s.settings.messages[n.name][r] = i.originalMessage;
                            if (a) {
                                u = s.formSubmitted;
                                s.resetInternals();
                                s.toHide = s.errorsFor(n);
                                s.formSubmitted = u;
                                s.successList.push(n);
                                s.invalid[n.name] = false;
                                s.showErrors();
                            } else {
                                o = {};
                                d = t || s.defaultMessage(n, {
                                    method: r,
                                    parameters: e
                                });
                                o[n.name] = i.message = d;
                                s.invalid[n.name] = true;
                                s.showErrors(o);
                            }
                            i.valid = a;
                            s.stopRequest(n, a);
                        }
                    }, a));
                    return "pending";
                }
            }
        });
        var n = {}, a;
        if (t.ajaxPrefilter) {
            t.ajaxPrefilter(function(e, t, a) {
                var r = e.port;
                if (e.mode === "abort") {
                    if (n[r]) {
                        n[r].abort();
                    }
                    n[r] = a;
                }
            });
        } else {
            a = t.ajax;
            t.ajax = function(e) {
                var r = ("mode" in e ? e : t.ajaxSettings).mode, i = ("port" in e ? e : t.ajaxSettings).port;
                if (r === "abort") {
                    if (n[i]) {
                        n[i].abort();
                    }
                    n[i] = a.apply(this, arguments);
                    return n[i];
                }
                return a.apply(this, arguments);
            };
        }
        e.exports = t.fn.validate;
    })(jQuery);
} ]);