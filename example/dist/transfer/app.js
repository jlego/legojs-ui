(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            exports: {},
            id: r,
            loaded: false
        };
        e[r].call(o.exports, o, o.exports, n);
        o.loaded = true;
        return o.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})({
    0: function(e, t, n) {
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
        var o = n(250);
        var a = l(o);
        var i = n(251);
        var s = l(i);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function d(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var c = function() {
            function e() {
                d(this, e);
                return {
                    "/transfer": [ this.index, this.tabs ],
                    "/transfer/:tabs": [ this.index, this.tabs ]
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
                    var n = [ s.default ];
                    HBY.create(n[t], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return e;
        }();
        HBY.router(new c());
    },
    250: function(e, t) {
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
        var r = o([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/transfer/0" class="', '">Transfer 穿梭框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/transfer/0" class="', '">Transfer 穿梭框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function o(e, t) {
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
        function i(e, t) {
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
                a(this, t);
                var n = {
                    currentTab: 0
                };
                Object.assign(n, e);
                return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            n(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = hx(r, t.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    251: function(e, t, n) {
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
        var o = l([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <transfer id="transfer1"></transfer>\n            </div>\n            <div class="col-sm-6">\n              <transfer id="transfer2"></transfer>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <transfer id="transfer1"></transfer>\n            </div>\n            <div class="col-sm-6">\n              <transfer id="transfer2"></transfer>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var a = n(252);
        var i = s(a);
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
        function d(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function u(e, t) {
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
        var f = function(e) {
            u(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                d(this, t);
                var n = {
                    components: [ {
                        el: "#transfer1",
                        titles: [ "左边标题", "右边标题" ],
                        onChange: function e(t, n) {
                            console.warn("穿梭框的值", n);
                        },
                        data: [ {
                            id: "t1",
                            name: "test1",
                            checked: true,
                            open: true,
                            children: [ {
                                id: "t1_1",
                                name: "test1_1",
                                checked: true
                            }, {
                                id: "t1_2",
                                name: "test1_2",
                                checked: true
                            } ]
                        }, {
                            id: "t2",
                            name: "test2",
                            open: true,
                            children: [ {
                                id: "t2_1",
                                name: "test2_1"
                            }, {
                                id: "t2_2",
                                name: "test2_2"
                            } ]
                        }, {
                            id: "t3",
                            name: "test3",
                            open: true,
                            children: [ {
                                id: "t2_1",
                                name: "test2_1"
                            }, {
                                id: "t2_2",
                                name: "test2_2"
                            } ]
                        }, {
                            id: "t4",
                            name: "test4",
                            open: true,
                            children: [ {
                                id: "t2_1",
                                name: "test2_1"
                            }, {
                                id: "t2_2",
                                name: "test2_2"
                            } ]
                        } ]
                    }, {
                        el: "#transfer2",
                        titles: [ "左边标题", "右边标题" ],
                        showSearch: true,
                        onChange: function e(t, n) {
                            console.warn("穿梭框的值2", n);
                        },
                        data: [ {
                            id: "t1",
                            name: "test1",
                            checked: true
                        }, {
                            id: "t1_1",
                            name: "test1_1",
                            checked: true
                        }, {
                            id: "t1_2",
                            name: "test1_2",
                            checked: true
                        }, {
                            id: "t2",
                            name: "test2"
                        }, {
                            id: "t2_1",
                            name: "test2_1"
                        }, {
                            id: "t2_2",
                            name: "test2_2"
                        }, {
                            id: "t3",
                            name: "test3"
                        }, {
                            id: "t3_1",
                            name: "test3_1"
                        }, {
                            id: "t3_2",
                            name: "test3_2"
                        }, {
                            id: "t4",
                            name: "test4"
                        }, {
                            id: "t4_1",
                            name: "test4_1"
                        }, {
                            id: "t4_2",
                            name: "test4_2"
                        } ]
                    } ]
                };
                Object.assign(n, e);
                return c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            r(t, [ {
                key: "render",
                value: function e() {
                    var t = hx(o);
                    return t;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = f;
    },
    252: function(e, t, n) {
        "use strict";
        var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var o = n(253);
        var a = function() {
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
        var i = d([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);
        var s = d([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);
        var l = d([ '<i class="anticon anticon-cross float-xs-right close"></i>' ], [ '<i class="anticon anticon-cross float-xs-right close"></i>' ]);
        function d(e, t) {
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
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function f(e, t) {
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
        var p = function(e) {
            f(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                c(this, t);
                var n = {
                    events: {
                        "click li.list-group-item": "onClick",
                        "click i.close": "onClose"
                    },
                    activeKey: "",
                    template: "",
                    removeAble: false,
                    data: [],
                    onClick: function e() {},
                    onClose: function e() {}
                };
                Object.assign(n, e);
                return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            a(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(i, t.data.map(function(e, n) {
                        if (e.template) {
                            return e.template;
                        } else {
                            return hx(s, e.disabled ? "disabled" : "", t.activeKey == e.key ? "active" : "", val(e.className), val(e.key), t.removeAble ? hx(l) : "", val(e.value));
                        }
                    }));
                    return n;
                }
            }, {
                key: "onClick",
                value: function e(t) {
                    t.stopPropagation();
                    var n = $(t.currentTarget), r = n.attr("id");
                    if (typeof this.options.onClick === "function") this.options.onClick(this, r, t);
                    this.options.activeKey = this.options.activeKey != r ? r : "";
                    this.refresh();
                }
            }, {
                key: "onClose",
                value: function e(t) {
                    t.stopPropagation();
                    var n = $(t.currentTarget), r = n.parent().attr("id");
                    if (typeof this.options.onClose === "function") this.options.onClose(this, r, t);
                    this.options.data = this.options.data.filter(function(e) {
                        return e.key !== r;
                    });
                    this.refresh();
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("listgroup", p);
        var h = function() {
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
        var v = g([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);
        function g(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function N(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function b(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function k(e, t) {
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
            k(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                N(this, t);
                var n = {
                    disSelect: "",
                    onlySelect: "",
                    setting: {
                        data: {
                            simpleData: {
                                enable: true
                            }
                        },
                        callback: {}
                    },
                    keyNames: [ "id", "name", "type" ],
                    value: [],
                    onChecked: function e() {},
                    onClick: function e() {}
                };
                Object.assign(n, e);
                return b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            h(t, [ {
                key: "render",
                value: function e() {
                    return hx(v);
                }
            }, {
                key: "renderBefore",
                value: function e() {
                    var t = this.options, n = this;
                    function r(e) {
                        if (t.disSelect) {
                            if (Object.keys(e).includes(t.disSelect)) return false;
                        }
                        if (t.onlySelect) {
                            if (!Object.keys(e).includes(t.onlySelect)) return false;
                        }
                        return true;
                    }
                    if (t.setting.check) {
                        t.setting.check = $.extend(true, {
                            enable: true,
                            chkboxType: {
                                Y: "",
                                N: ""
                            }
                        }, t.setting.check || {});
                        t.setting.callback = Object.assign(t.setting.callback || {}, {
                            onCheck: function e(o, a, i) {
                                var s = $.fn.zTree.getZTreeObj(a), l = s.getCheckedNodes(true), d = t.keyNames, c = l.filter(function(e) {
                                    return r(e);
                                });
                                var u = [];
                                c.forEach(function(e, t) {
                                    u.push({
                                        key: e[d[0]],
                                        value: e[d[1]],
                                        type: e[d[2]]
                                    });
                                });
                                if (typeof t.onChecked == "function") t.onChecked(n, u);
                            }
                        });
                    } else {
                        t.setting.callback = Object.assign(t.setting.callback || {}, {
                            onClick: function e(o, a, i) {
                                if (!r(i)) return false;
                                if (typeof t.onClick == "function") t.onClick(n, {
                                    key: i[t.keyNames[0]],
                                    value: i[t.keyNames[1]],
                                    type: i[t.keyNames[2]]
                                });
                            }
                        });
                    }
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.options;
                    if (t.data) $.fn.zTree.init(this.$el, t.setting, t.data);
                }
            }, {
                key: "clearChecked",
                value: function e(t, n) {
                    var r = $.fn.zTree.getZTreeObj(this.options.id);
                    var o = r.getNodeByParam(t, n, null);
                    if (o) {
                        r.checkNode(o, false, false);
                    }
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("tree", y);
        var m = function() {
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
        var C = _([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);
        var T = _([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);
        var E = _([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);
        var w = _([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);
        var I = _([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);
        function _(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function O(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function S(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function P(e, t) {
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
        var R = function(e) {
            P(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                O(this, t);
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
                    clickAndClose: true,
                    onChange: function e() {},
                    onVisibleChange: function e() {}
                };
                Object.assign(n, e);
                var r = S(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                var o = r;
                r.options.trigger = e.trigger instanceof $ ? e.trigger : $(e.trigger);
                if (!r.options.disabled) {
                    var a = function e(t) {
                        $("body, .modal-body").trigger("click");
                        t.stopPropagation();
                        var r = Lego.UI.Util.getDirection(o.options.trigger, o.$el);
                        o.options.direction = r._y || "bottom";
                        o.show();
                        if (n.eventName == "hover") {
                            o.options.trigger.mouseleave(function() {
                                o.close();
                            });
                        }
                    };
                    if (n.eventName == "click") {
                        var i = "click.dropdown_" + e.vid;
                        $("body, .modal-body").off(i).on(i, function() {
                            o.close();
                        });
                        r.options.trigger.off(i).on(i, a);
                    } else {
                        r.options.trigger[n.eventName](a);
                    }
                }
                return r;
            }
            m(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    function n(e) {
                        if (e.divider) {
                            return hx(C);
                        } else {
                            if (!e.children) {
                                return hx(T, e.key, e.disabled || e.selected ? "disabled" : "", e.href ? e.href : "javascript:;", e.value);
                            } else {
                                return r(e);
                            }
                        }
                    }
                    function r(e) {
                        return hx(E, e.value, e.children ? hx(w, e.children.map(function(e) {
                            n(e);
                        })) : "");
                    }
                    var o = hx(I, t.direction ? "drop" + t.direction : "", t.data.map(function(e) {
                        return n(e);
                    }));
                    return o;
                }
            }, {
                key: "_getAlign",
                value: function e(t, n) {
                    var r = t.offset().left, o = t.offset().top - n.height(), a = $(window).width() - 20, i = n.width();
                    if (a > r + i) {
                        return "left";
                    } else {
                        return "right";
                    }
                }
            }, {
                key: "show",
                value: function e(t) {
                    this.options.trigger.addClass("dropdown open");
                    this.options.onVisibleChange(this, true);
                }
            }, {
                key: "close",
                value: function e(t) {
                    this.options.trigger.removeClass("dropdown open");
                    this.options.onVisibleChange(this, false);
                }
            }, {
                key: "clickItem",
                value: function e(t) {
                    t.stopPropagation();
                    var n = $(t.currentTarget);
                    var r = this.options.data.find(function(e) {
                        return e.key == n.attr("id");
                    });
                    if (r) {
                        this.options.onChange(this, r);
                        this.options.activeKey = r.key;
                        this.options.activeValue = r.value;
                    }
                    if (this.options.clickAndClose) this.close();
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("dropdown", R);
        var D = function() {
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
        var x = A([ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);
        var L = A([ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ]);
        function A(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function j(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function M(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function z(e, t) {
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
        var U = function(e) {
            z(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                j(this, t);
                var n = {
                    events: {
                        "click .search-button": "onSearch",
                        "keydown .search-input": "_enterSearch"
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
                return M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            D(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(x, t.hasSelect ? hx(L, t.vid, t.activeValue || "请选择", t.vid) : "", t.placeholder);
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
                    var n = this.$(".search-input").val();
                    if (typeof this.options.onSearch === "function") this.options.onSearch(this, {
                        key: this.options.activeKey,
                        value: this.options.activeValue,
                        keyword: n
                    });
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("search", U);
        var B = function() {
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
        var F = H([ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', "</span></h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-double-right"></i>\n            <i class="anticon anticon-double-left"></i>\n        </div>\n        ' ], [ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', "</span></h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-double-right"></i>\n            <i class="anticon anticon-double-left"></i>\n        </div>\n        ' ]);
        var Y = H([ '<search id="', '"></search>' ], [ '<search id="', '"></search>' ]);
        function H(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function K(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function V(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function q(e, t) {
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
        var W = function(e) {
            q(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                K(this, t);
                var n = {
                    titles: [],
                    value: [],
                    data: [],
                    width: 560,
                    height: 400,
                    treeSetting: {},
                    keyNames: [ "id", "name", "type" ],
                    scrollbar: {},
                    showSearch: false,
                    searchPlaceholder: "请输入搜索内容",
                    notFoundContent: "列表为空",
                    onChange: function e() {},
                    components: []
                };
                Object.assign(n, e);
                function r(e) {
                    e.map(function(e) {
                        if (e.checked) {
                            n.value.push({
                                key: e[n.keyNames[0]],
                                value: e[n.keyNames[1]],
                                type: e[n.keyNames[2]]
                            });
                            if (e.children) {
                                r(e.children);
                            }
                        }
                    });
                }
                r(n.data);
                n.components.push({
                    el: "#transfer_" + n.vid + "_tree",
                    setting: $.extend(true, {
                        check: {
                            enable: true,
                            chkboxType: {
                                Y: "ps",
                                N: "ps"
                            }
                        }
                    }, n.treeSetting || {}),
                    onChecked: function e(t, r) {
                        var o = this.context;
                        var a = Lego.getView("#transfer_" + n.vid + "_list");
                        if (a) {
                            a.options.data = r;
                            a.refresh();
                        }
                        if (typeof n.onChange === "function") n.onChange(o, r);
                    },
                    dataSource: n.dataSource,
                    data: n.data
                }, {
                    el: "#transfer_" + n.vid + "_list",
                    removeAble: true,
                    onClose: function e(t, r) {
                        var o = this.context;
                        var a = $.fn.zTree.getZTreeObj("transfer_" + n.vid + "_tree");
                        if (a) {
                            var i = a.getNodeByParam("id", r, null);
                            a.checkNode(i, !i.checked, null, true);
                        }
                    },
                    data: n.value
                });
                if (n.showSearch) {
                    n.components.push({
                        el: "#transfer_" + n.vid + "_search",
                        onSearch: function e(t, n) {
                            console.warn("点击了搜索框2", n);
                        }
                    });
                }
                return V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            B(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {}, n = "transfer_" + t.vid;
                    var r = hx(F, val(t.titles[0]), t.showSearch ? hx(Y, n + "_search") : "", n + "_tree", val(t.titles[1]), n + "_list");
                    return r;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.options || {};
                    this.$el.css({
                        width: t.width,
                        height: t.height
                    });
                }
            }, {
                key: "getValue",
                value: function e() {
                    var t = Lego.getView("#transfer_" + this.options.vid + "_list");
                    if (t) {
                        return t.options.data;
                    }
                    return null;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("transfer", W);
        e.exports = W;
    },
    253: function(module, exports) {
        (function($) {
            var settings = {}, roots = {}, caches = {}, _consts = {
                className: {
                    BUTTON: "button",
                    LEVEL: "level",
                    ICO_LOADING: "ico_loading",
                    SWITCH: "switch",
                    NAME: "node_name"
                },
                event: {
                    NODECREATED: "ztree_nodeCreated",
                    CLICK: "ztree_click",
                    EXPAND: "ztree_expand",
                    COLLAPSE: "ztree_collapse",
                    ASYNC_SUCCESS: "ztree_async_success",
                    ASYNC_ERROR: "ztree_async_error",
                    REMOVE: "ztree_remove",
                    SELECTED: "ztree_selected",
                    UNSELECTED: "ztree_unselected"
                },
                id: {
                    A: "_a",
                    ICON: "_ico",
                    SPAN: "_span",
                    SWITCH: "_switch",
                    UL: "_ul"
                },
                line: {
                    ROOT: "root",
                    ROOTS: "roots",
                    CENTER: "center",
                    BOTTOM: "bottom",
                    NOLINE: "noline",
                    LINE: "line"
                },
                folder: {
                    OPEN: "open",
                    CLOSE: "close",
                    DOCU: "docu"
                },
                node: {
                    CURSELECTED: "curSelectedNode"
                }
            }, _setting = {
                treeId: "",
                treeObj: null,
                view: {
                    addDiyDom: null,
                    autoCancelSelected: true,
                    dblClickExpand: true,
                    expandSpeed: "fast",
                    fontCss: {},
                    nameIsHTML: false,
                    selectedMulti: true,
                    showIcon: true,
                    showLine: true,
                    showTitle: true,
                    txtSelectedEnable: false
                },
                data: {
                    key: {
                        children: "children",
                        name: "name",
                        title: "",
                        url: "url",
                        icon: "icon"
                    },
                    simpleData: {
                        enable: false,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: null
                    },
                    keep: {
                        parent: false,
                        leaf: false
                    }
                },
                async: {
                    enable: false,
                    contentType: "application/x-www-form-urlencoded",
                    type: "post",
                    dataType: "text",
                    url: "",
                    autoParam: [],
                    otherParam: [],
                    dataFilter: null
                },
                callback: {
                    beforeAsync: null,
                    beforeClick: null,
                    beforeDblClick: null,
                    beforeRightClick: null,
                    beforeMouseDown: null,
                    beforeMouseUp: null,
                    beforeExpand: null,
                    beforeCollapse: null,
                    beforeRemove: null,
                    onAsyncError: null,
                    onAsyncSuccess: null,
                    onNodeCreated: null,
                    onClick: null,
                    onDblClick: null,
                    onRightClick: null,
                    onMouseDown: null,
                    onMouseUp: null,
                    onExpand: null,
                    onCollapse: null,
                    onRemove: null
                }
            }, _initRoot = function(e) {
                var t = data.getRoot(e);
                if (!t) {
                    t = {};
                    data.setRoot(e, t);
                }
                t[e.data.key.children] = [];
                t.expandTriggerFlag = false;
                t.curSelectedList = [];
                t.noSelection = true;
                t.createdNodes = [];
                t.zId = 0;
                t._ver = new Date().getTime();
            }, _initCache = function(e) {
                var t = data.getCache(e);
                if (!t) {
                    t = {};
                    data.setCache(e, t);
                }
                t.nodes = [];
                t.doms = [];
            }, _bindEvent = function(e) {
                var t = e.treeObj, n = consts.event;
                t.bind(n.NODECREATED, function(t, n, r) {
                    tools.apply(e.callback.onNodeCreated, [ t, n, r ]);
                });
                t.bind(n.CLICK, function(t, n, r, o, a) {
                    tools.apply(e.callback.onClick, [ n, r, o, a ]);
                });
                t.bind(n.EXPAND, function(t, n, r) {
                    tools.apply(e.callback.onExpand, [ t, n, r ]);
                });
                t.bind(n.COLLAPSE, function(t, n, r) {
                    tools.apply(e.callback.onCollapse, [ t, n, r ]);
                });
                t.bind(n.ASYNC_SUCCESS, function(t, n, r, o) {
                    tools.apply(e.callback.onAsyncSuccess, [ t, n, r, o ]);
                });
                t.bind(n.ASYNC_ERROR, function(t, n, r, o, a, i) {
                    tools.apply(e.callback.onAsyncError, [ t, n, r, o, a, i ]);
                });
                t.bind(n.REMOVE, function(t, n, r) {
                    tools.apply(e.callback.onRemove, [ t, n, r ]);
                });
                t.bind(n.SELECTED, function(t, n, r) {
                    tools.apply(e.callback.onSelected, [ n, r ]);
                });
                t.bind(n.UNSELECTED, function(t, n, r) {
                    tools.apply(e.callback.onUnSelected, [ n, r ]);
                });
            }, _unbindEvent = function(e) {
                var t = e.treeObj, n = consts.event;
                t.unbind(n.NODECREATED).unbind(n.CLICK).unbind(n.EXPAND).unbind(n.COLLAPSE).unbind(n.ASYNC_SUCCESS).unbind(n.ASYNC_ERROR).unbind(n.REMOVE).unbind(n.SELECTED).unbind(n.UNSELECTED);
            }, _eventProxy = function(e) {
                var t = e.target, n = data.getSetting(e.data.treeId), r = "", o = null, a = "", i = "", s = null, l = null, d = null;
                if (tools.eqs(e.type, "mousedown")) {
                    i = "mousedown";
                } else if (tools.eqs(e.type, "mouseup")) {
                    i = "mouseup";
                } else if (tools.eqs(e.type, "contextmenu")) {
                    i = "contextmenu";
                } else if (tools.eqs(e.type, "click")) {
                    if (tools.eqs(t.tagName, "span") && t.getAttribute("treeNode" + consts.id.SWITCH) !== null) {
                        r = tools.getNodeMainDom(t).id;
                        a = "switchNode";
                    } else {
                        d = tools.getMDom(n, t, [ {
                            tagName: "a",
                            attrName: "treeNode" + consts.id.A
                        } ]);
                        if (d) {
                            r = tools.getNodeMainDom(d).id;
                            a = "clickNode";
                        }
                    }
                } else if (tools.eqs(e.type, "dblclick")) {
                    i = "dblclick";
                    d = tools.getMDom(n, t, [ {
                        tagName: "a",
                        attrName: "treeNode" + consts.id.A
                    } ]);
                    if (d) {
                        r = tools.getNodeMainDom(d).id;
                        a = "switchNode";
                    }
                }
                if (i.length > 0 && r.length == 0) {
                    d = tools.getMDom(n, t, [ {
                        tagName: "a",
                        attrName: "treeNode" + consts.id.A
                    } ]);
                    if (d) {
                        r = tools.getNodeMainDom(d).id;
                    }
                }
                if (r.length > 0) {
                    o = data.getNodeCache(n, r);
                    switch (a) {
                      case "switchNode":
                        if (!o.isParent) {
                            a = "";
                        } else if (tools.eqs(e.type, "click") || tools.eqs(e.type, "dblclick") && tools.apply(n.view.dblClickExpand, [ n.treeId, o ], n.view.dblClickExpand)) {
                            s = handler.onSwitchNode;
                        } else {
                            a = "";
                        }
                        break;

                      case "clickNode":
                        s = handler.onClickNode;
                        break;
                    }
                }
                switch (i) {
                  case "mousedown":
                    l = handler.onZTreeMousedown;
                    break;

                  case "mouseup":
                    l = handler.onZTreeMouseup;
                    break;

                  case "dblclick":
                    l = handler.onZTreeDblclick;
                    break;

                  case "contextmenu":
                    l = handler.onZTreeContextmenu;
                    break;
                }
                var c = {
                    stop: false,
                    node: o,
                    nodeEventType: a,
                    nodeEventCallback: s,
                    treeEventType: i,
                    treeEventCallback: l
                };
                return c;
            }, _initNode = function(e, t, n, r, o, a, i) {
                if (!n) return;
                var s = data.getRoot(e), l = e.data.key.children;
                n.level = t;
                n.tId = e.treeId + "_" + ++s.zId;
                n.parentTId = r ? r.tId : null;
                n.open = typeof n.open == "string" ? tools.eqs(n.open, "true") : !!n.open;
                if (n[l] && n[l].length > 0) {
                    n.isParent = true;
                    n.zAsync = true;
                } else {
                    n.isParent = typeof n.isParent == "string" ? tools.eqs(n.isParent, "true") : !!n.isParent;
                    n.open = n.isParent && !e.async.enable ? n.open : false;
                    n.zAsync = !n.isParent;
                }
                n.isFirstNode = o;
                n.isLastNode = a;
                n.getParentNode = function() {
                    return data.getNodeCache(e, n.parentTId);
                };
                n.getPreNode = function() {
                    return data.getPreNode(e, n);
                };
                n.getNextNode = function() {
                    return data.getNextNode(e, n);
                };
                n.getIndex = function() {
                    return data.getNodeIndex(e, n);
                };
                n.getPath = function() {
                    return data.getNodePath(e, n);
                };
                n.isAjaxing = false;
                data.fixPIdKeyValue(e, n);
            }, _init = {
                bind: [ _bindEvent ],
                unbind: [ _unbindEvent ],
                caches: [ _initCache ],
                nodes: [ _initNode ],
                proxys: [ _eventProxy ],
                roots: [ _initRoot ],
                beforeA: [],
                afterA: [],
                innerBeforeA: [],
                innerAfterA: [],
                zTreeTools: []
            }, data = {
                addNodeCache: function(e, t) {
                    data.getCache(e).nodes[data.getNodeCacheId(t.tId)] = t;
                },
                getNodeCacheId: function(e) {
                    return e.substring(e.lastIndexOf("_") + 1);
                },
                addAfterA: function(e) {
                    _init.afterA.push(e);
                },
                addBeforeA: function(e) {
                    _init.beforeA.push(e);
                },
                addInnerAfterA: function(e) {
                    _init.innerAfterA.push(e);
                },
                addInnerBeforeA: function(e) {
                    _init.innerBeforeA.push(e);
                },
                addInitBind: function(e) {
                    _init.bind.push(e);
                },
                addInitUnBind: function(e) {
                    _init.unbind.push(e);
                },
                addInitCache: function(e) {
                    _init.caches.push(e);
                },
                addInitNode: function(e) {
                    _init.nodes.push(e);
                },
                addInitProxy: function(e, t) {
                    if (!!t) {
                        _init.proxys.splice(0, 0, e);
                    } else {
                        _init.proxys.push(e);
                    }
                },
                addInitRoot: function(e) {
                    _init.roots.push(e);
                },
                addNodesData: function(e, t, n, r) {
                    var o = e.data.key.children, a;
                    if (!t[o]) {
                        t[o] = [];
                        n = -1;
                    } else if (n >= t[o].length) {
                        n = -1;
                    }
                    if (t[o].length > 0 && n === 0) {
                        t[o][0].isFirstNode = false;
                        view.setNodeLineIcos(e, t[o][0]);
                    } else if (t[o].length > 0 && n < 0) {
                        t[o][t[o].length - 1].isLastNode = false;
                        view.setNodeLineIcos(e, t[o][t[o].length - 1]);
                    }
                    t.isParent = true;
                    if (n < 0) {
                        t[o] = t[o].concat(r);
                    } else {
                        a = [ n, 0 ].concat(r);
                        t[o].splice.apply(t[o], a);
                    }
                },
                addSelectedNode: function(e, t) {
                    var n = data.getRoot(e);
                    if (!data.isSelectedNode(e, t)) {
                        n.curSelectedList.push(t);
                    }
                },
                addCreatedNode: function(e, t) {
                    if (!!e.callback.onNodeCreated || !!e.view.addDiyDom) {
                        var n = data.getRoot(e);
                        n.createdNodes.push(t);
                    }
                },
                addZTreeTools: function(e) {
                    _init.zTreeTools.push(e);
                },
                exSetting: function(e) {
                    $.extend(true, _setting, e);
                },
                fixPIdKeyValue: function(e, t) {
                    if (e.data.simpleData.enable) {
                        t[e.data.simpleData.pIdKey] = t.parentTId ? t.getParentNode()[e.data.simpleData.idKey] : e.data.simpleData.rootPId;
                    }
                },
                getAfterA: function(e, t, n) {
                    for (var r = 0, o = _init.afterA.length; r < o; r++) {
                        _init.afterA[r].apply(this, arguments);
                    }
                },
                getBeforeA: function(e, t, n) {
                    for (var r = 0, o = _init.beforeA.length; r < o; r++) {
                        _init.beforeA[r].apply(this, arguments);
                    }
                },
                getInnerAfterA: function(e, t, n) {
                    for (var r = 0, o = _init.innerAfterA.length; r < o; r++) {
                        _init.innerAfterA[r].apply(this, arguments);
                    }
                },
                getInnerBeforeA: function(e, t, n) {
                    for (var r = 0, o = _init.innerBeforeA.length; r < o; r++) {
                        _init.innerBeforeA[r].apply(this, arguments);
                    }
                },
                getCache: function(e) {
                    return caches[e.treeId];
                },
                getNodeIndex: function(e, t) {
                    if (!t) return null;
                    var n = e.data.key.children, r = t.parentTId ? t.getParentNode() : data.getRoot(e);
                    for (var o = 0, a = r[n].length - 1; o <= a; o++) {
                        if (r[n][o] === t) {
                            return o;
                        }
                    }
                    return -1;
                },
                getNextNode: function(e, t) {
                    if (!t) return null;
                    var n = e.data.key.children, r = t.parentTId ? t.getParentNode() : data.getRoot(e);
                    for (var o = 0, a = r[n].length - 1; o <= a; o++) {
                        if (r[n][o] === t) {
                            return o == a ? null : r[n][o + 1];
                        }
                    }
                    return null;
                },
                getNodeByParam: function(e, t, n, r) {
                    if (!t || !n) return null;
                    var o = e.data.key.children;
                    for (var a = 0, i = t.length; a < i; a++) {
                        if (t[a][n] == r) {
                            return t[a];
                        }
                        var s = data.getNodeByParam(e, t[a][o], n, r);
                        if (s) return s;
                    }
                    return null;
                },
                getNodeCache: function(e, t) {
                    if (!t) return null;
                    var n = caches[e.treeId].nodes[data.getNodeCacheId(t)];
                    return n ? n : null;
                },
                getNodeName: function(e, t) {
                    var n = e.data.key.name;
                    return "" + t[n];
                },
                getNodePath: function(e, t) {
                    if (!t) return null;
                    var n;
                    if (t.parentTId) {
                        n = t.getParentNode().getPath();
                    } else {
                        n = [];
                    }
                    if (n) {
                        n.push(t);
                    }
                    return n;
                },
                getNodeTitle: function(e, t) {
                    var n = e.data.key.title === "" ? e.data.key.name : e.data.key.title;
                    return "" + t[n];
                },
                getNodes: function(e) {
                    return data.getRoot(e)[e.data.key.children];
                },
                getNodesByParam: function(e, t, n, r) {
                    if (!t || !n) return [];
                    var o = e.data.key.children, a = [];
                    for (var i = 0, s = t.length; i < s; i++) {
                        if (t[i][n] == r) {
                            a.push(t[i]);
                        }
                        a = a.concat(data.getNodesByParam(e, t[i][o], n, r));
                    }
                    return a;
                },
                getNodesByParamFuzzy: function(e, t, n, r) {
                    if (!t || !n) return [];
                    var o = e.data.key.children, a = [];
                    r = r.toLowerCase();
                    for (var i = 0, s = t.length; i < s; i++) {
                        if (typeof t[i][n] == "string" && t[i][n].toLowerCase().indexOf(r) > -1) {
                            a.push(t[i]);
                        }
                        a = a.concat(data.getNodesByParamFuzzy(e, t[i][o], n, r));
                    }
                    return a;
                },
                getNodesByFilter: function(e, t, n, r, o) {
                    if (!t) return r ? null : [];
                    var a = e.data.key.children, i = r ? null : [];
                    for (var s = 0, l = t.length; s < l; s++) {
                        if (tools.apply(n, [ t[s], o ], false)) {
                            if (r) {
                                return t[s];
                            }
                            i.push(t[s]);
                        }
                        var d = data.getNodesByFilter(e, t[s][a], n, r, o);
                        if (r && !!d) {
                            return d;
                        }
                        i = r ? d : i.concat(d);
                    }
                    return i;
                },
                getPreNode: function(e, t) {
                    if (!t) return null;
                    var n = e.data.key.children, r = t.parentTId ? t.getParentNode() : data.getRoot(e);
                    for (var o = 0, a = r[n].length; o < a; o++) {
                        if (r[n][o] === t) {
                            return o == 0 ? null : r[n][o - 1];
                        }
                    }
                    return null;
                },
                getRoot: function(e) {
                    return e ? roots[e.treeId] : null;
                },
                getRoots: function() {
                    return roots;
                },
                getSetting: function(e) {
                    return settings[e];
                },
                getSettings: function() {
                    return settings;
                },
                getZTreeTools: function(e) {
                    var t = this.getRoot(this.getSetting(e));
                    return t ? t.treeTools : null;
                },
                initCache: function(e) {
                    for (var t = 0, n = _init.caches.length; t < n; t++) {
                        _init.caches[t].apply(this, arguments);
                    }
                },
                initNode: function(e, t, n, r, o, a) {
                    for (var i = 0, s = _init.nodes.length; i < s; i++) {
                        _init.nodes[i].apply(this, arguments);
                    }
                },
                initRoot: function(e) {
                    for (var t = 0, n = _init.roots.length; t < n; t++) {
                        _init.roots[t].apply(this, arguments);
                    }
                },
                isSelectedNode: function(e, t) {
                    var n = data.getRoot(e);
                    for (var r = 0, o = n.curSelectedList.length; r < o; r++) {
                        if (t === n.curSelectedList[r]) return true;
                    }
                    return false;
                },
                removeNodeCache: function(e, t) {
                    var n = e.data.key.children;
                    if (t[n]) {
                        for (var r = 0, o = t[n].length; r < o; r++) {
                            data.removeNodeCache(e, t[n][r]);
                        }
                    }
                    data.getCache(e).nodes[data.getNodeCacheId(t.tId)] = null;
                },
                removeSelectedNode: function(e, t) {
                    var n = data.getRoot(e);
                    for (var r = 0, o = n.curSelectedList.length; r < o; r++) {
                        if (t === n.curSelectedList[r] || !data.getNodeCache(e, n.curSelectedList[r].tId)) {
                            n.curSelectedList.splice(r, 1);
                            e.treeObj.trigger(consts.event.UNSELECTED, [ e.treeId, t ]);
                            r--;
                            o--;
                        }
                    }
                },
                setCache: function(e, t) {
                    caches[e.treeId] = t;
                },
                setRoot: function(e, t) {
                    roots[e.treeId] = t;
                },
                setZTreeTools: function(e, t) {
                    for (var n = 0, r = _init.zTreeTools.length; n < r; n++) {
                        _init.zTreeTools[n].apply(this, arguments);
                    }
                },
                transformToArrayFormat: function(e, t) {
                    if (!t) return [];
                    var n = e.data.key.children, r = [];
                    if (tools.isArray(t)) {
                        for (var o = 0, a = t.length; o < a; o++) {
                            r.push(t[o]);
                            if (t[o][n]) r = r.concat(data.transformToArrayFormat(e, t[o][n]));
                        }
                    } else {
                        r.push(t);
                        if (t[n]) r = r.concat(data.transformToArrayFormat(e, t[n]));
                    }
                    return r;
                },
                transformTozTreeFormat: function(e, t) {
                    var n, r, o = e.data.simpleData.idKey, a = e.data.simpleData.pIdKey, i = e.data.key.children;
                    if (!o || o == "" || !t) return [];
                    if (tools.isArray(t)) {
                        var s = [];
                        var l = [];
                        for (n = 0, r = t.length; n < r; n++) {
                            l[t[n][o]] = t[n];
                        }
                        for (n = 0, r = t.length; n < r; n++) {
                            if (l[t[n][a]] && t[n][o] != t[n][a]) {
                                if (!l[t[n][a]][i]) l[t[n][a]][i] = [];
                                l[t[n][a]][i].push(t[n]);
                            } else {
                                s.push(t[n]);
                            }
                        }
                        return s;
                    } else {
                        return [ t ];
                    }
                }
            }, event = {
                bindEvent: function(e) {
                    for (var t = 0, n = _init.bind.length; t < n; t++) {
                        _init.bind[t].apply(this, arguments);
                    }
                },
                unbindEvent: function(e) {
                    for (var t = 0, n = _init.unbind.length; t < n; t++) {
                        _init.unbind[t].apply(this, arguments);
                    }
                },
                bindTree: function(e) {
                    var t = {
                        treeId: e.treeId
                    }, n = e.treeObj;
                    if (!e.view.txtSelectedEnable) {
                        n.bind("selectstart", handler.onSelectStart).css({
                            "-moz-user-select": "-moz-none"
                        });
                    }
                    n.bind("click", t, event.proxy);
                    n.bind("dblclick", t, event.proxy);
                    n.bind("mouseover", t, event.proxy);
                    n.bind("mouseout", t, event.proxy);
                    n.bind("mousedown", t, event.proxy);
                    n.bind("mouseup", t, event.proxy);
                    n.bind("contextmenu", t, event.proxy);
                },
                unbindTree: function(e) {
                    var t = e.treeObj;
                    t.unbind("selectstart", handler.onSelectStart).unbind("click", event.proxy).unbind("dblclick", event.proxy).unbind("mouseover", event.proxy).unbind("mouseout", event.proxy).unbind("mousedown", event.proxy).unbind("mouseup", event.proxy).unbind("contextmenu", event.proxy);
                },
                doProxy: function(e) {
                    var t = [];
                    for (var n = 0, r = _init.proxys.length; n < r; n++) {
                        var o = _init.proxys[n].apply(this, arguments);
                        t.push(o);
                        if (o.stop) {
                            break;
                        }
                    }
                    return t;
                },
                proxy: function(e) {
                    var t = data.getSetting(e.data.treeId);
                    if (!tools.uCanDo(t, e)) return true;
                    var n = event.doProxy(e), r = true, o = false;
                    for (var a = 0, i = n.length; a < i; a++) {
                        var s = n[a];
                        if (s.nodeEventCallback) {
                            o = true;
                            r = s.nodeEventCallback.apply(s, [ e, s.node ]) && r;
                        }
                        if (s.treeEventCallback) {
                            o = true;
                            r = s.treeEventCallback.apply(s, [ e, s.node ]) && r;
                        }
                    }
                    return r;
                }
            }, handler = {
                onSwitchNode: function(e, t) {
                    var n = data.getSetting(e.data.treeId);
                    if (t.open) {
                        if (tools.apply(n.callback.beforeCollapse, [ n.treeId, t ], true) == false) return true;
                        data.getRoot(n).expandTriggerFlag = true;
                        view.switchNode(n, t);
                    } else {
                        if (tools.apply(n.callback.beforeExpand, [ n.treeId, t ], true) == false) return true;
                        data.getRoot(n).expandTriggerFlag = true;
                        view.switchNode(n, t);
                    }
                    return true;
                },
                onClickNode: function(e, t) {
                    var n = data.getSetting(e.data.treeId), r = n.view.autoCancelSelected && (e.ctrlKey || e.metaKey) && data.isSelectedNode(n, t) ? 0 : n.view.autoCancelSelected && (e.ctrlKey || e.metaKey) && n.view.selectedMulti ? 2 : 1;
                    if (tools.apply(n.callback.beforeClick, [ n.treeId, t, r ], true) == false) return true;
                    if (r === 0) {
                        view.cancelPreSelectedNode(n, t);
                    } else {
                        view.selectNode(n, t, r === 2);
                    }
                    n.treeObj.trigger(consts.event.CLICK, [ e, n.treeId, t, r ]);
                    return true;
                },
                onZTreeMousedown: function(e, t) {
                    var n = data.getSetting(e.data.treeId);
                    if (tools.apply(n.callback.beforeMouseDown, [ n.treeId, t ], true)) {
                        tools.apply(n.callback.onMouseDown, [ e, n.treeId, t ]);
                    }
                    return true;
                },
                onZTreeMouseup: function(e, t) {
                    var n = data.getSetting(e.data.treeId);
                    if (tools.apply(n.callback.beforeMouseUp, [ n.treeId, t ], true)) {
                        tools.apply(n.callback.onMouseUp, [ e, n.treeId, t ]);
                    }
                    return true;
                },
                onZTreeDblclick: function(e, t) {
                    var n = data.getSetting(e.data.treeId);
                    if (tools.apply(n.callback.beforeDblClick, [ n.treeId, t ], true)) {
                        tools.apply(n.callback.onDblClick, [ e, n.treeId, t ]);
                    }
                    return true;
                },
                onZTreeContextmenu: function(e, t) {
                    var n = data.getSetting(e.data.treeId);
                    if (tools.apply(n.callback.beforeRightClick, [ n.treeId, t ], true)) {
                        tools.apply(n.callback.onRightClick, [ e, n.treeId, t ]);
                    }
                    return typeof n.callback.onRightClick != "function";
                },
                onSelectStart: function(e) {
                    var t = e.originalEvent.srcElement.nodeName.toLowerCase();
                    return t === "input" || t === "textarea";
                }
            }, tools = {
                apply: function(e, t, n) {
                    if (typeof e == "function") {
                        return e.apply(zt, t ? t : []);
                    }
                    return n;
                },
                canAsync: function(e, t) {
                    var n = e.data.key.children;
                    return e.async.enable && t && t.isParent && !(t.zAsync || t[n] && t[n].length > 0);
                },
                clone: function(e) {
                    if (e === null) return null;
                    var t = tools.isArray(e) ? [] : {};
                    for (var n in e) {
                        t[n] = e[n] instanceof Date ? new Date(e[n].getTime()) : typeof e[n] === "object" ? tools.clone(e[n]) : e[n];
                    }
                    return t;
                },
                eqs: function(e, t) {
                    return e.toLowerCase() === t.toLowerCase();
                },
                isArray: function(e) {
                    return Object.prototype.toString.apply(e) === "[object Array]";
                },
                $: function(e, t, n) {
                    if (!!t && typeof t != "string") {
                        n = t;
                        t = "";
                    }
                    if (typeof e == "string") {
                        return $(e, n ? n.treeObj.get(0).ownerDocument : null);
                    } else {
                        return $("#" + e.tId + t, n ? n.treeObj : null);
                    }
                },
                getMDom: function(e, t, n) {
                    if (!t) return null;
                    while (t && t.id !== e.treeId) {
                        for (var r = 0, o = n.length; t.tagName && r < o; r++) {
                            if (tools.eqs(t.tagName, n[r].tagName) && t.getAttribute(n[r].attrName) !== null) {
                                return t;
                            }
                        }
                        t = t.parentNode;
                    }
                    return null;
                },
                getNodeMainDom: function(e) {
                    return $(e).parent("li").get(0) || $(e).parentsUntil("li").parent().get(0);
                },
                isChildOrSelf: function(e, t) {
                    return $(e).closest("#" + t).length > 0;
                },
                uCanDo: function(e, t) {
                    return true;
                }
            }, view = {
                addNodes: function(e, t, n, r, o) {
                    if (e.data.keep.leaf && t && !t.isParent) {
                        return;
                    }
                    if (!tools.isArray(r)) {
                        r = [ r ];
                    }
                    if (e.data.simpleData.enable) {
                        r = data.transformTozTreeFormat(e, r);
                    }
                    if (t) {
                        var a = $$(t, consts.id.SWITCH, e), i = $$(t, consts.id.ICON, e), s = $$(t, consts.id.UL, e);
                        if (!t.open) {
                            view.replaceSwitchClass(t, a, consts.folder.CLOSE);
                            view.replaceIcoClass(t, i, consts.folder.CLOSE);
                            t.open = false;
                            s.css({
                                display: "none"
                            });
                        }
                        data.addNodesData(e, t, n, r);
                        view.createNodes(e, t.level + 1, r, t, n);
                        if (!o) {
                            view.expandCollapseParentNode(e, t, true);
                        }
                    } else {
                        data.addNodesData(e, data.getRoot(e), n, r);
                        view.createNodes(e, 0, r, null, n);
                    }
                },
                appendNodes: function(e, t, n, r, o, a, i) {
                    if (!n) return [];
                    var s = [], l = e.data.key.children;
                    var d = r ? r : data.getRoot(e), c = d[l], u, f;
                    if (!c || o >= c.length) {
                        o = -1;
                    }
                    for (var p = 0, h = n.length; p < h; p++) {
                        var v = n[p];
                        if (a) {
                            u = (o === 0 || c.length == n.length) && p == 0;
                            f = o < 0 && p == n.length - 1;
                            data.initNode(e, t, v, r, u, f, i);
                            data.addNodeCache(e, v);
                        }
                        var g = [];
                        if (v[l] && v[l].length > 0) {
                            g = view.appendNodes(e, t + 1, v[l], v, -1, a, i && v.open);
                        }
                        if (i) {
                            view.makeDOMNodeMainBefore(s, e, v);
                            view.makeDOMNodeLine(s, e, v);
                            data.getBeforeA(e, v, s);
                            view.makeDOMNodeNameBefore(s, e, v);
                            data.getInnerBeforeA(e, v, s);
                            view.makeDOMNodeIcon(s, e, v);
                            data.getInnerAfterA(e, v, s);
                            view.makeDOMNodeNameAfter(s, e, v);
                            data.getAfterA(e, v, s);
                            if (v.isParent && v.open) {
                                view.makeUlHtml(e, v, s, g.join(""));
                            }
                            view.makeDOMNodeMainAfter(s, e, v);
                            data.addCreatedNode(e, v);
                        }
                    }
                    return s;
                },
                appendParentULDom: function(e, t) {
                    var n = [], r = $$(t, e);
                    if (!r.get(0) && !!t.parentTId) {
                        view.appendParentULDom(e, t.getParentNode());
                        r = $$(t, e);
                    }
                    var o = $$(t, consts.id.UL, e);
                    if (o.get(0)) {
                        o.remove();
                    }
                    var a = e.data.key.children, i = view.appendNodes(e, t.level + 1, t[a], t, -1, false, true);
                    view.makeUlHtml(e, t, n, i.join(""));
                    r.append(n.join(""));
                },
                asyncNode: function(setting, node, isSilent, callback) {
                    var i, l;
                    if (node && !node.isParent) {
                        tools.apply(callback);
                        return false;
                    } else if (node && node.isAjaxing) {
                        return false;
                    } else if (tools.apply(setting.callback.beforeAsync, [ setting.treeId, node ], true) == false) {
                        tools.apply(callback);
                        return false;
                    }
                    if (node) {
                        node.isAjaxing = true;
                        var icoObj = $$(node, consts.id.ICON, setting);
                        icoObj.attr({
                            style: "",
                            class: consts.className.BUTTON + " " + consts.className.ICO_LOADING
                        });
                    }
                    var tmpParam = {};
                    for (i = 0, l = setting.async.autoParam.length; node && i < l; i++) {
                        var pKey = setting.async.autoParam[i].split("="), spKey = pKey;
                        if (pKey.length > 1) {
                            spKey = pKey[1];
                            pKey = pKey[0];
                        }
                        tmpParam[spKey] = node[pKey];
                    }
                    if (tools.isArray(setting.async.otherParam)) {
                        for (i = 0, l = setting.async.otherParam.length; i < l; i += 2) {
                            tmpParam[setting.async.otherParam[i]] = setting.async.otherParam[i + 1];
                        }
                    } else {
                        for (var p in setting.async.otherParam) {
                            tmpParam[p] = setting.async.otherParam[p];
                        }
                    }
                    var _tmpV = data.getRoot(setting)._ver;
                    $.ajax({
                        contentType: setting.async.contentType,
                        cache: false,
                        type: setting.async.type,
                        url: tools.apply(setting.async.url, [ setting.treeId, node ], setting.async.url),
                        data: tmpParam,
                        dataType: setting.async.dataType,
                        success: function(msg) {
                            if (_tmpV != data.getRoot(setting)._ver) {
                                return;
                            }
                            var newNodes = [];
                            try {
                                if (!msg || msg.length == 0) {
                                    newNodes = [];
                                } else if (typeof msg == "string") {
                                    newNodes = eval("(" + msg + ")");
                                } else {
                                    newNodes = msg;
                                }
                            } catch (e) {
                                newNodes = msg;
                            }
                            if (node) {
                                node.isAjaxing = null;
                                node.zAsync = true;
                            }
                            view.setNodeLineIcos(setting, node);
                            if (newNodes && newNodes !== "") {
                                newNodes = tools.apply(setting.async.dataFilter, [ setting.treeId, node, newNodes ], newNodes);
                                view.addNodes(setting, node, -1, !!newNodes ? tools.clone(newNodes) : [], !!isSilent);
                            } else {
                                view.addNodes(setting, node, -1, [], !!isSilent);
                            }
                            setting.treeObj.trigger(consts.event.ASYNC_SUCCESS, [ setting.treeId, node, msg ]);
                            tools.apply(callback);
                        },
                        error: function(e, t, n) {
                            if (_tmpV != data.getRoot(setting)._ver) {
                                return;
                            }
                            if (node) node.isAjaxing = null;
                            view.setNodeLineIcos(setting, node);
                            setting.treeObj.trigger(consts.event.ASYNC_ERROR, [ setting.treeId, node, e, t, n ]);
                        }
                    });
                    return true;
                },
                cancelPreSelectedNode: function(e, t, n) {
                    var r = data.getRoot(e).curSelectedList, o, a;
                    for (o = r.length - 1; o >= 0; o--) {
                        a = r[o];
                        if (t === a || !t && (!n || n !== a)) {
                            $$(a, consts.id.A, e).removeClass(consts.node.CURSELECTED);
                            if (t) {
                                data.removeSelectedNode(e, t);
                                break;
                            } else {
                                r.splice(o, 1);
                                e.treeObj.trigger(consts.event.UNSELECTED, [ e.treeId, a ]);
                            }
                        }
                    }
                },
                createNodeCallback: function(e) {
                    if (!!e.callback.onNodeCreated || !!e.view.addDiyDom) {
                        var t = data.getRoot(e);
                        while (t.createdNodes.length > 0) {
                            var n = t.createdNodes.shift();
                            tools.apply(e.view.addDiyDom, [ e.treeId, n ]);
                            if (!!e.callback.onNodeCreated) {
                                e.treeObj.trigger(consts.event.NODECREATED, [ e.treeId, n ]);
                            }
                        }
                    }
                },
                createNodes: function(e, t, n, r, o) {
                    if (!n || n.length == 0) return;
                    var a = data.getRoot(e), i = e.data.key.children, s = !r || r.open || !!$$(r[i][0], e).get(0);
                    a.createdNodes = [];
                    var l = view.appendNodes(e, t, n, r, o, true, s), d, c;
                    if (!r) {
                        d = e.treeObj;
                    } else {
                        var u = $$(r, consts.id.UL, e);
                        if (u.get(0)) {
                            d = u;
                        }
                    }
                    if (d) {
                        if (o >= 0) {
                            c = d.children()[o];
                        }
                        if (o >= 0 && c) {
                            $(c).before(l.join(""));
                        } else {
                            d.append(l.join(""));
                        }
                    }
                    view.createNodeCallback(e);
                },
                destroy: function(e) {
                    if (!e) return;
                    data.initCache(e);
                    data.initRoot(e);
                    event.unbindTree(e);
                    event.unbindEvent(e);
                    e.treeObj.empty();
                    delete settings[e.treeId];
                },
                expandCollapseNode: function(e, t, n, r, o) {
                    var a = data.getRoot(e), i = e.data.key.children;
                    var s, l;
                    if (!t) {
                        tools.apply(o, []);
                        return;
                    }
                    if (a.expandTriggerFlag) {
                        l = o;
                        s = function() {
                            if (l) l();
                            if (t.open) {
                                e.treeObj.trigger(consts.event.EXPAND, [ e.treeId, t ]);
                            } else {
                                e.treeObj.trigger(consts.event.COLLAPSE, [ e.treeId, t ]);
                            }
                        };
                        o = s;
                        a.expandTriggerFlag = false;
                    }
                    if (!t.open && t.isParent && (!$$(t, consts.id.UL, e).get(0) || t[i] && t[i].length > 0 && !$$(t[i][0], e).get(0))) {
                        view.appendParentULDom(e, t);
                        view.createNodeCallback(e);
                    }
                    if (t.open == n) {
                        tools.apply(o, []);
                        return;
                    }
                    var d = $$(t, consts.id.UL, e), c = $$(t, consts.id.SWITCH, e), u = $$(t, consts.id.ICON, e);
                    if (t.isParent) {
                        t.open = !t.open;
                        if (t.iconOpen && t.iconClose) {
                            u.attr("style", view.makeNodeIcoStyle(e, t));
                        }
                        if (t.open) {
                            view.replaceSwitchClass(t, c, consts.folder.OPEN);
                            view.replaceIcoClass(t, u, consts.folder.OPEN);
                            if (r == false || e.view.expandSpeed == "") {
                                d.show();
                                tools.apply(o, []);
                            } else {
                                if (t[i] && t[i].length > 0) {
                                    d.slideDown(e.view.expandSpeed, o);
                                } else {
                                    d.show();
                                    tools.apply(o, []);
                                }
                            }
                        } else {
                            view.replaceSwitchClass(t, c, consts.folder.CLOSE);
                            view.replaceIcoClass(t, u, consts.folder.CLOSE);
                            if (r == false || e.view.expandSpeed == "" || !(t[i] && t[i].length > 0)) {
                                d.hide();
                                tools.apply(o, []);
                            } else {
                                d.slideUp(e.view.expandSpeed, o);
                            }
                        }
                    } else {
                        tools.apply(o, []);
                    }
                },
                expandCollapseParentNode: function(e, t, n, r, o) {
                    if (!t) return;
                    if (!t.parentTId) {
                        view.expandCollapseNode(e, t, n, r, o);
                        return;
                    } else {
                        view.expandCollapseNode(e, t, n, r);
                    }
                    if (t.parentTId) {
                        view.expandCollapseParentNode(e, t.getParentNode(), n, r, o);
                    }
                },
                expandCollapseSonNode: function(e, t, n, r, o) {
                    var a = data.getRoot(e), i = e.data.key.children, s = t ? t[i] : a[i], l = t ? false : r, d = data.getRoot(e).expandTriggerFlag;
                    data.getRoot(e).expandTriggerFlag = false;
                    if (s) {
                        for (var c = 0, u = s.length; c < u; c++) {
                            if (s[c]) view.expandCollapseSonNode(e, s[c], n, l);
                        }
                    }
                    data.getRoot(e).expandTriggerFlag = d;
                    view.expandCollapseNode(e, t, n, r, o);
                },
                isSelectedNode: function(e, t) {
                    if (!t) {
                        return false;
                    }
                    var n = data.getRoot(e).curSelectedList, r;
                    for (r = n.length - 1; r >= 0; r--) {
                        if (t === n[r]) {
                            return true;
                        }
                    }
                    return false;
                },
                makeDOMNodeIcon: function(e, t, n) {
                    var r = data.getNodeName(t, n), o = t.view.nameIsHTML ? r : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    e.push("<span id='", n.tId, consts.id.ICON, "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(t, n), "' style='", view.makeNodeIcoStyle(t, n), "'></span><span id='", n.tId, consts.id.SPAN, "' class='", consts.className.NAME, "'>", o, "</span>");
                },
                makeDOMNodeLine: function(e, t, n) {
                    e.push("<span id='", n.tId, consts.id.SWITCH, "' title='' class='", view.makeNodeLineClass(t, n), "' treeNode", consts.id.SWITCH, "></span>");
                },
                makeDOMNodeMainAfter: function(e, t, n) {
                    e.push("</li>");
                },
                makeDOMNodeMainBefore: function(e, t, n) {
                    e.push("<li id='", n.tId, "' class='", consts.className.LEVEL, n.level, "' tabindex='0' hidefocus='true' treenode>");
                },
                makeDOMNodeNameAfter: function(e, t, n) {
                    e.push("</a>");
                },
                makeDOMNodeNameBefore: function(e, t, n) {
                    var r = data.getNodeTitle(t, n), o = view.makeNodeUrl(t, n), a = view.makeNodeFontCss(t, n), i = [];
                    for (var s in a) {
                        i.push(s, ":", a[s], ";");
                    }
                    e.push("<a id='", n.tId, consts.id.A, "' class='", consts.className.LEVEL, n.level, "' treeNode", consts.id.A, ' onclick="', n.click || "", '" ', o != null && o.length > 0 ? "href='" + o + "'" : "", " target='", view.makeNodeTarget(n), "' style='", i.join(""), "'");
                    if (tools.apply(t.view.showTitle, [ t.treeId, n ], t.view.showTitle) && r) {
                        e.push("title='", r.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'");
                    }
                    e.push(">");
                },
                makeNodeFontCss: function(e, t) {
                    var n = tools.apply(e.view.fontCss, [ e.treeId, t ], e.view.fontCss);
                    return n && typeof n != "function" ? n : {};
                },
                makeNodeIcoClass: function(e, t) {
                    var n = [ "ico" ];
                    if (!t.isAjaxing) {
                        n[0] = (t.iconSkin ? t.iconSkin + "_" : "") + n[0];
                        if (t.isParent) {
                            n.push(t.open ? consts.folder.OPEN : consts.folder.CLOSE);
                        } else {
                            n.push(consts.folder.DOCU);
                        }
                    }
                    return consts.className.BUTTON + " " + n.join("_");
                },
                makeNodeIcoStyle: function(e, t) {
                    var n = [];
                    if (!t.isAjaxing) {
                        var r = t.isParent && t.iconOpen && t.iconClose ? t.open ? t.iconOpen : t.iconClose : t[e.data.key.icon];
                        if (r) n.push("background:url(", r, ") 0 0 no-repeat;");
                        if (e.view.showIcon == false || !tools.apply(e.view.showIcon, [ e.treeId, t ], true)) {
                            n.push("width:0px;height:0px;");
                        }
                    }
                    return n.join("");
                },
                makeNodeLineClass: function(e, t) {
                    var n = [];
                    if (e.view.showLine) {
                        if (t.level == 0 && t.isFirstNode && t.isLastNode) {
                            n.push(consts.line.ROOT);
                        } else if (t.level == 0 && t.isFirstNode) {
                            n.push(consts.line.ROOTS);
                        } else if (t.isLastNode) {
                            n.push(consts.line.BOTTOM);
                        } else {
                            n.push(consts.line.CENTER);
                        }
                    } else {
                        n.push(consts.line.NOLINE);
                    }
                    if (t.isParent) {
                        n.push(t.open ? consts.folder.OPEN : consts.folder.CLOSE);
                    } else {
                        n.push(consts.folder.DOCU);
                    }
                    return view.makeNodeLineClassEx(t) + n.join("_");
                },
                makeNodeLineClassEx: function(e) {
                    return consts.className.BUTTON + " " + consts.className.LEVEL + e.level + " " + consts.className.SWITCH + " ";
                },
                makeNodeTarget: function(e) {
                    return e.target || "_blank";
                },
                makeNodeUrl: function(e, t) {
                    var n = e.data.key.url;
                    return t[n] ? t[n] : null;
                },
                makeUlHtml: function(e, t, n, r) {
                    n.push("<ul id='", t.tId, consts.id.UL, "' class='", consts.className.LEVEL, t.level, " ", view.makeUlLineClass(e, t), "' style='display:", t.open ? "block" : "none", "'>");
                    n.push(r);
                    n.push("</ul>");
                },
                makeUlLineClass: function(e, t) {
                    return e.view.showLine && !t.isLastNode ? consts.line.LINE : "";
                },
                removeChildNodes: function(e, t) {
                    if (!t) return;
                    var n = e.data.key.children, r = t[n];
                    if (!r) return;
                    for (var o = 0, a = r.length; o < a; o++) {
                        data.removeNodeCache(e, r[o]);
                    }
                    data.removeSelectedNode(e);
                    delete t[n];
                    if (!e.data.keep.parent) {
                        t.isParent = false;
                        t.open = false;
                        var i = $$(t, consts.id.SWITCH, e), s = $$(t, consts.id.ICON, e);
                        view.replaceSwitchClass(t, i, consts.folder.DOCU);
                        view.replaceIcoClass(t, s, consts.folder.DOCU);
                        $$(t, consts.id.UL, e).remove();
                    } else {
                        $$(t, consts.id.UL, e).empty();
                    }
                },
                scrollIntoView: function(e) {
                    if (!e) {
                        return;
                    }
                    if (e.scrollIntoViewIfNeeded) {
                        e.scrollIntoViewIfNeeded();
                    } else if (e.scrollIntoView) {
                        e.scrollIntoView(false);
                    } else {
                        try {
                            e.focus().blur();
                        } catch (e) {}
                    }
                },
                setFirstNode: function(e, t) {
                    var n = e.data.key.children, r = t[n].length;
                    if (r > 0) {
                        t[n][0].isFirstNode = true;
                    }
                },
                setLastNode: function(e, t) {
                    var n = e.data.key.children, r = t[n].length;
                    if (r > 0) {
                        t[n][r - 1].isLastNode = true;
                    }
                },
                removeNode: function(e, t) {
                    var n = data.getRoot(e), r = e.data.key.children, o = t.parentTId ? t.getParentNode() : n;
                    t.isFirstNode = false;
                    t.isLastNode = false;
                    t.getPreNode = function() {
                        return null;
                    };
                    t.getNextNode = function() {
                        return null;
                    };
                    if (!data.getNodeCache(e, t.tId)) {
                        return;
                    }
                    $$(t, e).remove();
                    data.removeNodeCache(e, t);
                    data.removeSelectedNode(e, t);
                    for (var a = 0, i = o[r].length; a < i; a++) {
                        if (o[r][a].tId == t.tId) {
                            o[r].splice(a, 1);
                            break;
                        }
                    }
                    view.setFirstNode(e, o);
                    view.setLastNode(e, o);
                    var s, l, d, c = o[r].length;
                    if (!e.data.keep.parent && c == 0) {
                        o.isParent = false;
                        o.open = false;
                        s = $$(o, consts.id.UL, e);
                        l = $$(o, consts.id.SWITCH, e);
                        d = $$(o, consts.id.ICON, e);
                        view.replaceSwitchClass(o, l, consts.folder.DOCU);
                        view.replaceIcoClass(o, d, consts.folder.DOCU);
                        s.css("display", "none");
                    } else if (e.view.showLine && c > 0) {
                        var u = o[r][c - 1];
                        s = $$(u, consts.id.UL, e);
                        l = $$(u, consts.id.SWITCH, e);
                        d = $$(u, consts.id.ICON, e);
                        if (o == n) {
                            if (o[r].length == 1) {
                                view.replaceSwitchClass(u, l, consts.line.ROOT);
                            } else {
                                var f = $$(o[r][0], consts.id.SWITCH, e);
                                view.replaceSwitchClass(o[r][0], f, consts.line.ROOTS);
                                view.replaceSwitchClass(u, l, consts.line.BOTTOM);
                            }
                        } else {
                            view.replaceSwitchClass(u, l, consts.line.BOTTOM);
                        }
                        s.removeClass(consts.line.LINE);
                    }
                },
                replaceIcoClass: function(e, t, n) {
                    if (!t || e.isAjaxing) return;
                    var r = t.attr("class");
                    if (r == undefined) return;
                    var o = r.split("_");
                    switch (n) {
                      case consts.folder.OPEN:
                      case consts.folder.CLOSE:
                      case consts.folder.DOCU:
                        o[o.length - 1] = n;
                        break;
                    }
                    t.attr("class", o.join("_"));
                },
                replaceSwitchClass: function(e, t, n) {
                    if (!t) return;
                    var r = t.attr("class");
                    if (r == undefined) return;
                    var o = r.split("_");
                    switch (n) {
                      case consts.line.ROOT:
                      case consts.line.ROOTS:
                      case consts.line.CENTER:
                      case consts.line.BOTTOM:
                      case consts.line.NOLINE:
                        o[0] = view.makeNodeLineClassEx(e) + n;
                        break;

                      case consts.folder.OPEN:
                      case consts.folder.CLOSE:
                      case consts.folder.DOCU:
                        o[1] = n;
                        break;
                    }
                    t.attr("class", o.join("_"));
                    if (n !== consts.folder.DOCU) {
                        t.removeAttr("disabled");
                    } else {
                        t.attr("disabled", "disabled");
                    }
                },
                selectNode: function(e, t, n) {
                    if (!n) {
                        view.cancelPreSelectedNode(e, null, t);
                    }
                    $$(t, consts.id.A, e).addClass(consts.node.CURSELECTED);
                    data.addSelectedNode(e, t);
                    e.treeObj.trigger(consts.event.SELECTED, [ e.treeId, t ]);
                },
                setNodeFontCss: function(e, t) {
                    var n = $$(t, consts.id.A, e), r = view.makeNodeFontCss(e, t);
                    if (r) {
                        n.css(r);
                    }
                },
                setNodeLineIcos: function(e, t) {
                    if (!t) return;
                    var n = $$(t, consts.id.SWITCH, e), r = $$(t, consts.id.UL, e), o = $$(t, consts.id.ICON, e), a = view.makeUlLineClass(e, t);
                    if (a.length == 0) {
                        r.removeClass(consts.line.LINE);
                    } else {
                        r.addClass(a);
                    }
                    n.attr("class", view.makeNodeLineClass(e, t));
                    if (t.isParent) {
                        n.removeAttr("disabled");
                    } else {
                        n.attr("disabled", "disabled");
                    }
                    o.removeAttr("style");
                    o.attr("style", view.makeNodeIcoStyle(e, t));
                    o.attr("class", view.makeNodeIcoClass(e, t));
                },
                setNodeName: function(e, t) {
                    var n = data.getNodeTitle(e, t), r = $$(t, consts.id.SPAN, e);
                    r.empty();
                    if (e.view.nameIsHTML) {
                        r.html(data.getNodeName(e, t));
                    } else {
                        r.text(data.getNodeName(e, t));
                    }
                    if (tools.apply(e.view.showTitle, [ e.treeId, t ], e.view.showTitle)) {
                        var o = $$(t, consts.id.A, e);
                        o.attr("title", !n ? "" : n);
                    }
                },
                setNodeTarget: function(e, t) {
                    var n = $$(t, consts.id.A, e);
                    n.attr("target", view.makeNodeTarget(t));
                },
                setNodeUrl: function(e, t) {
                    var n = $$(t, consts.id.A, e), r = view.makeNodeUrl(e, t);
                    if (r == null || r.length == 0) {
                        n.removeAttr("href");
                    } else {
                        n.attr("href", r);
                    }
                },
                switchNode: function(e, t) {
                    if (t.open || !tools.canAsync(e, t)) {
                        view.expandCollapseNode(e, t, !t.open);
                    } else if (e.async.enable) {
                        if (!view.asyncNode(e, t)) {
                            view.expandCollapseNode(e, t, !t.open);
                            return;
                        }
                    } else if (t) {
                        view.expandCollapseNode(e, t, !t.open);
                    }
                }
            };
            $.fn.zTree = {
                consts: _consts,
                _z: {
                    tools: tools,
                    view: view,
                    event: event,
                    data: data
                },
                getZTreeObj: function(e) {
                    var t = data.getZTreeTools(e);
                    return t ? t : null;
                },
                destroy: function(e) {
                    if (!!e && e.length > 0) {
                        view.destroy(data.getSetting(e));
                    } else {
                        for (var t in settings) {
                            view.destroy(settings[t]);
                        }
                    }
                },
                init: function(e, t, n) {
                    var r = tools.clone(_setting);
                    $.extend(true, r, t);
                    r.treeId = e.attr("id");
                    r.treeObj = e;
                    r.treeObj.empty();
                    settings[r.treeId] = r;
                    if (typeof document.body.style.maxHeight === "undefined") {
                        r.view.expandSpeed = "";
                    }
                    data.initRoot(r);
                    var o = data.getRoot(r), a = r.data.key.children;
                    n = n ? tools.clone(tools.isArray(n) ? n : [ n ]) : [];
                    if (r.data.simpleData.enable) {
                        o[a] = data.transformTozTreeFormat(r, n);
                    } else {
                        o[a] = n;
                    }
                    data.initCache(r);
                    event.unbindTree(r);
                    event.bindTree(r);
                    event.unbindEvent(r);
                    event.bindEvent(r);
                    var i = {
                        setting: r,
                        addNodes: function(e, t, n, o) {
                            if (!e) e = null;
                            if (e && !e.isParent && r.data.keep.leaf) return null;
                            var a = parseInt(t, 10);
                            if (isNaN(a)) {
                                o = !!n;
                                n = t;
                                t = -1;
                            } else {
                                t = a;
                            }
                            if (!n) return null;
                            var i = tools.clone(tools.isArray(n) ? n : [ n ]);
                            function s() {
                                view.addNodes(r, e, t, i, o == true);
                            }
                            if (tools.canAsync(r, e)) {
                                view.asyncNode(r, e, o, s);
                            } else {
                                s();
                            }
                            return i;
                        },
                        cancelSelectedNode: function(e) {
                            view.cancelPreSelectedNode(r, e);
                        },
                        destroy: function() {
                            view.destroy(r);
                        },
                        expandAll: function(e) {
                            e = !!e;
                            view.expandCollapseSonNode(r, null, e, true);
                            return e;
                        },
                        expandNode: function(e, t, n, o, a) {
                            if (!e || !e.isParent) return null;
                            if (t !== true && t !== false) {
                                t = !e.open;
                            }
                            a = !!a;
                            if (a && t && tools.apply(r.callback.beforeExpand, [ r.treeId, e ], true) == false) {
                                return null;
                            } else if (a && !t && tools.apply(r.callback.beforeCollapse, [ r.treeId, e ], true) == false) {
                                return null;
                            }
                            if (t && e.parentTId) {
                                view.expandCollapseParentNode(r, e.getParentNode(), t, false);
                            }
                            if (t === e.open && !n) {
                                return null;
                            }
                            data.getRoot(r).expandTriggerFlag = a;
                            if (!tools.canAsync(r, e) && n) {
                                view.expandCollapseSonNode(r, e, t, true, i);
                            } else {
                                e.open = !t;
                                view.switchNode(this.setting, e);
                                i();
                            }
                            return t;
                            function i() {
                                var t = $$(e, r).get(0);
                                if (t && o !== false) {
                                    view.scrollIntoView(t);
                                }
                            }
                        },
                        getNodes: function() {
                            return data.getNodes(r);
                        },
                        getNodeByParam: function(e, t, n) {
                            if (!e) return null;
                            return data.getNodeByParam(r, n ? n[r.data.key.children] : data.getNodes(r), e, t);
                        },
                        getNodeByTId: function(e) {
                            return data.getNodeCache(r, e);
                        },
                        getNodesByParam: function(e, t, n) {
                            if (!e) return null;
                            return data.getNodesByParam(r, n ? n[r.data.key.children] : data.getNodes(r), e, t);
                        },
                        getNodesByParamFuzzy: function(e, t, n) {
                            if (!e) return null;
                            return data.getNodesByParamFuzzy(r, n ? n[r.data.key.children] : data.getNodes(r), e, t);
                        },
                        getNodesByFilter: function(e, t, n, o) {
                            t = !!t;
                            if (!e || typeof e != "function") return t ? null : [];
                            return data.getNodesByFilter(r, n ? n[r.data.key.children] : data.getNodes(r), e, t, o);
                        },
                        getNodeIndex: function(e) {
                            if (!e) return null;
                            var t = r.data.key.children, n = e.parentTId ? e.getParentNode() : data.getRoot(r);
                            for (var o = 0, a = n[t].length; o < a; o++) {
                                if (n[t][o] == e) return o;
                            }
                            return -1;
                        },
                        getSelectedNodes: function() {
                            var e = [], t = data.getRoot(r).curSelectedList;
                            for (var n = 0, o = t.length; n < o; n++) {
                                e.push(t[n]);
                            }
                            return e;
                        },
                        isSelectedNode: function(e) {
                            return data.isSelectedNode(r, e);
                        },
                        reAsyncChildNodes: function(e, t, n) {
                            if (!this.setting.async.enable) return;
                            var o = !e;
                            if (o) {
                                e = data.getRoot(r);
                            }
                            if (t == "refresh") {
                                var a = this.setting.data.key.children;
                                for (var i = 0, s = e[a] ? e[a].length : 0; i < s; i++) {
                                    data.removeNodeCache(r, e[a][i]);
                                }
                                data.removeSelectedNode(r);
                                e[a] = [];
                                if (o) {
                                    this.setting.treeObj.empty();
                                } else {
                                    var l = $$(e, consts.id.UL, r);
                                    l.empty();
                                }
                            }
                            view.asyncNode(this.setting, o ? null : e, !!n);
                        },
                        refresh: function() {
                            this.setting.treeObj.empty();
                            var e = data.getRoot(r), t = e[r.data.key.children];
                            data.initRoot(r);
                            e[r.data.key.children] = t;
                            data.initCache(r);
                            view.createNodes(r, 0, e[r.data.key.children], null, -1);
                        },
                        removeChildNodes: function(e) {
                            if (!e) return null;
                            var t = r.data.key.children, n = e[t];
                            view.removeChildNodes(r, e);
                            return n ? n : null;
                        },
                        removeNode: function(e, t) {
                            if (!e) return;
                            t = !!t;
                            if (t && tools.apply(r.callback.beforeRemove, [ r.treeId, e ], true) == false) return;
                            view.removeNode(r, e);
                            if (t) {
                                this.setting.treeObj.trigger(consts.event.REMOVE, [ r.treeId, e ]);
                            }
                        },
                        selectNode: function(e, t, n) {
                            if (!e) return;
                            if (tools.uCanDo(r)) {
                                t = r.view.selectedMulti && t;
                                if (e.parentTId) {
                                    view.expandCollapseParentNode(r, e.getParentNode(), true, false, o);
                                } else {
                                    try {
                                        $$(e, r).focus().blur();
                                    } catch (e) {}
                                }
                                view.selectNode(r, e, t);
                            }
                            function o() {
                                if (n) {
                                    return;
                                }
                                var t = $$(e, r).get(0);
                                view.scrollIntoView(t);
                            }
                        },
                        transformTozTreeNodes: function(e) {
                            return data.transformTozTreeFormat(r, e);
                        },
                        transformToArray: function(e) {
                            return data.transformToArrayFormat(r, e);
                        },
                        updateNode: function(e, t) {
                            if (!e) return;
                            var n = $$(e, r);
                            if (n.get(0) && tools.uCanDo(r)) {
                                view.setNodeName(r, e);
                                view.setNodeTarget(r, e);
                                view.setNodeUrl(r, e);
                                view.setNodeLineIcos(r, e);
                                view.setNodeFontCss(r, e);
                            }
                        }
                    };
                    o.treeTools = i;
                    data.setZTreeTools(r, i);
                    if (o[a] && o[a].length > 0) {
                        view.createNodes(r, 0, o[a], null, -1);
                    } else if (r.async.enable && r.async.url && r.async.url !== "") {
                        view.asyncNode(r);
                    }
                    return i;
                }
            };
            var zt = $.fn.zTree, $$ = tools.$, consts = zt.consts;
        })(jQuery);
        (function(e) {
            var t = {
                event: {
                    CHECK: "ztree_check"
                },
                id: {
                    CHECK: "_check"
                },
                checkbox: {
                    STYLE: "checkbox",
                    DEFAULT: "chk",
                    DISABLED: "disable",
                    FALSE: "false",
                    TRUE: "true",
                    FULL: "full",
                    PART: "part",
                    FOCUS: "focus"
                },
                radio: {
                    STYLE: "radio",
                    TYPE_ALL: "all",
                    TYPE_LEVEL: "level"
                }
            }, n = {
                check: {
                    enable: false,
                    autoCheckTrigger: false,
                    chkStyle: t.checkbox.STYLE,
                    nocheckInherit: false,
                    chkDisabledInherit: false,
                    radioType: t.radio.TYPE_LEVEL,
                    chkboxType: {
                        Y: "ps",
                        N: "ps"
                    }
                },
                data: {
                    key: {
                        checked: "checked"
                    }
                },
                callback: {
                    beforeCheck: null,
                    onCheck: null
                }
            }, r = function(e) {
                var t = m.getRoot(e);
                t.radioCheckedList = [];
            }, o = function(e) {}, a = function(e) {
                var t = e.treeObj, n = k.event;
                t.bind(n.CHECK, function(t, n, r, o) {
                    t.srcEvent = n;
                    b.apply(e.callback.onCheck, [ t, r, o ]);
                });
            }, i = function(e) {
                var t = e.treeObj, n = k.event;
                t.unbind(n.CHECK);
            }, s = function(e) {
                var t = e.target, n = m.getSetting(e.data.treeId), r = "", o = null, a = "", i = "", s = null, l = null;
                if (b.eqs(e.type, "mouseover")) {
                    if (n.check.enable && b.eqs(t.tagName, "span") && t.getAttribute("treeNode" + k.id.CHECK) !== null) {
                        r = b.getNodeMainDom(t).id;
                        a = "mouseoverCheck";
                    }
                } else if (b.eqs(e.type, "mouseout")) {
                    if (n.check.enable && b.eqs(t.tagName, "span") && t.getAttribute("treeNode" + k.id.CHECK) !== null) {
                        r = b.getNodeMainDom(t).id;
                        a = "mouseoutCheck";
                    }
                } else if (b.eqs(e.type, "click")) {
                    if (n.check.enable && b.eqs(t.tagName, "span") && t.getAttribute("treeNode" + k.id.CHECK) !== null) {
                        r = b.getNodeMainDom(t).id;
                        a = "checkNode";
                    }
                }
                if (r.length > 0) {
                    o = m.getNodeCache(n, r);
                    switch (a) {
                      case "checkNode":
                        s = p.onCheckNode;
                        break;

                      case "mouseoverCheck":
                        s = p.onMouseoverCheck;
                        break;

                      case "mouseoutCheck":
                        s = p.onMouseoutCheck;
                        break;
                    }
                }
                var d = {
                    stop: a === "checkNode",
                    node: o,
                    nodeEventType: a,
                    nodeEventCallback: s,
                    treeEventType: i,
                    treeEventCallback: l
                };
                return d;
            }, l = function(e, t, n, r, o, a, i) {
                if (!n) return;
                var s = e.data.key.checked;
                if (typeof n[s] == "string") n[s] = b.eqs(n[s], "true");
                n[s] = !!n[s];
                n.checkedOld = n[s];
                if (typeof n.nocheck == "string") n.nocheck = b.eqs(n.nocheck, "true");
                n.nocheck = !!n.nocheck || e.check.nocheckInherit && r && !!r.nocheck;
                if (typeof n.chkDisabled == "string") n.chkDisabled = b.eqs(n.chkDisabled, "true");
                n.chkDisabled = !!n.chkDisabled || e.check.chkDisabledInherit && r && !!r.chkDisabled;
                if (typeof n.halfCheck == "string") n.halfCheck = b.eqs(n.halfCheck, "true");
                n.halfCheck = !!n.halfCheck;
                n.check_Child_State = -1;
                n.check_Focus = false;
                n.getCheckStatus = function() {
                    return m.getCheckStatus(e, n);
                };
                if (e.check.chkStyle == k.radio.STYLE && e.check.radioType == k.radio.TYPE_ALL && n[s]) {
                    var l = m.getRoot(e);
                    l.radioCheckedList.push(n);
                }
            }, d = function(e, t, n) {
                var r = e.data.key.checked;
                if (e.check.enable) {
                    m.makeChkFlag(e, t);
                    n.push("<span ID='", t.tId, k.id.CHECK, "' class='", y.makeChkClass(e, t), "' treeNode", k.id.CHECK, t.nocheck === true ? " style='display:none;'" : "", "></span>");
                }
            }, c = function(e, t) {
                t.checkNode = function(e, t, n, r) {
                    var o = this.setting.data.key.checked;
                    if (e.chkDisabled === true) return;
                    if (t !== true && t !== false) {
                        t = !e[o];
                    }
                    r = !!r;
                    if (e[o] === t && !n) {
                        return;
                    } else if (r && b.apply(this.setting.callback.beforeCheck, [ this.setting.treeId, e ], true) == false) {
                        return;
                    }
                    if (b.uCanDo(this.setting) && this.setting.check.enable && e.nocheck !== true) {
                        e[o] = t;
                        var a = T(e, k.id.CHECK, this.setting);
                        if (n || this.setting.check.chkStyle === k.radio.STYLE) y.checkNodeRelation(this.setting, e);
                        y.setChkClass(this.setting, a, e);
                        y.repairParentChkClassWithSelf(this.setting, e);
                        if (r) {
                            this.setting.treeObj.trigger(k.event.CHECK, [ null, this.setting.treeId, e ]);
                        }
                    }
                };
                t.checkAllNodes = function(e) {
                    y.repairAllChk(this.setting, !!e);
                };
                t.getCheckedNodes = function(e) {
                    var t = this.setting.data.key.children;
                    e = e !== false;
                    return m.getTreeCheckedNodes(this.setting, m.getRoot(this.setting)[t], e);
                };
                t.getChangeCheckedNodes = function() {
                    var e = this.setting.data.key.children;
                    return m.getTreeChangeCheckedNodes(this.setting, m.getRoot(this.setting)[e]);
                };
                t.setChkDisabled = function(e, t, n, r) {
                    t = !!t;
                    n = !!n;
                    r = !!r;
                    y.repairSonChkDisabled(this.setting, e, t, r);
                    y.repairParentChkDisabled(this.setting, e.getParentNode(), t, n);
                };
                var n = t.updateNode;
                t.updateNode = function(e, r) {
                    if (n) n.apply(t, arguments);
                    if (!e || !this.setting.check.enable) return;
                    var o = T(e, this.setting);
                    if (o.get(0) && b.uCanDo(this.setting)) {
                        var a = T(e, k.id.CHECK, this.setting);
                        if (r == true || this.setting.check.chkStyle === k.radio.STYLE) y.checkNodeRelation(this.setting, e);
                        y.setChkClass(this.setting, a, e);
                        y.repairParentChkClassWithSelf(this.setting, e);
                    }
                };
            }, u = {
                getRadioCheckedList: function(e) {
                    var t = m.getRoot(e).radioCheckedList;
                    for (var n = 0, r = t.length; n < r; n++) {
                        if (!m.getNodeCache(e, t[n].tId)) {
                            t.splice(n, 1);
                            n--;
                            r--;
                        }
                    }
                    return t;
                },
                getCheckStatus: function(e, t) {
                    if (!e.check.enable || t.nocheck || t.chkDisabled) return null;
                    var n = e.data.key.checked, r = {
                        checked: t[n],
                        half: t.halfCheck ? t.halfCheck : e.check.chkStyle == k.radio.STYLE ? t.check_Child_State === 2 : t[n] ? t.check_Child_State > -1 && t.check_Child_State < 2 : t.check_Child_State > 0
                    };
                    return r;
                },
                getTreeCheckedNodes: function(e, t, n, r) {
                    if (!t) return [];
                    var o = e.data.key.children, a = e.data.key.checked, i = n && e.check.chkStyle == k.radio.STYLE && e.check.radioType == k.radio.TYPE_ALL;
                    r = !r ? [] : r;
                    for (var s = 0, l = t.length; s < l; s++) {
                        if (t[s].nocheck !== true && t[s].chkDisabled !== true && t[s][a] == n) {
                            r.push(t[s]);
                            if (i) {
                                break;
                            }
                        }
                        m.getTreeCheckedNodes(e, t[s][o], n, r);
                        if (i && r.length > 0) {
                            break;
                        }
                    }
                    return r;
                },
                getTreeChangeCheckedNodes: function(e, t, n) {
                    if (!t) return [];
                    var r = e.data.key.children, o = e.data.key.checked;
                    n = !n ? [] : n;
                    for (var a = 0, i = t.length; a < i; a++) {
                        if (t[a].nocheck !== true && t[a].chkDisabled !== true && t[a][o] != t[a].checkedOld) {
                            n.push(t[a]);
                        }
                        m.getTreeChangeCheckedNodes(e, t[a][r], n);
                    }
                    return n;
                },
                makeChkFlag: function(e, t) {
                    if (!t) return;
                    var n = e.data.key.children, r = e.data.key.checked, o = -1;
                    if (t[n]) {
                        for (var a = 0, i = t[n].length; a < i; a++) {
                            var s = t[n][a];
                            var l = -1;
                            if (e.check.chkStyle == k.radio.STYLE) {
                                if (s.nocheck === true || s.chkDisabled === true) {
                                    l = s.check_Child_State;
                                } else if (s.halfCheck === true) {
                                    l = 2;
                                } else if (s[r]) {
                                    l = 2;
                                } else {
                                    l = s.check_Child_State > 0 ? 2 : 0;
                                }
                                if (l == 2) {
                                    o = 2;
                                    break;
                                } else if (l == 0) {
                                    o = 0;
                                }
                            } else if (e.check.chkStyle == k.checkbox.STYLE) {
                                if (s.nocheck === true || s.chkDisabled === true) {
                                    l = s.check_Child_State;
                                } else if (s.halfCheck === true) {
                                    l = 1;
                                } else if (s[r]) {
                                    l = s.check_Child_State === -1 || s.check_Child_State === 2 ? 2 : 1;
                                } else {
                                    l = s.check_Child_State > 0 ? 1 : 0;
                                }
                                if (l === 1) {
                                    o = 1;
                                    break;
                                } else if (l === 2 && o > -1 && a > 0 && l !== o) {
                                    o = 1;
                                    break;
                                } else if (o === 2 && l > -1 && l < 2) {
                                    o = 1;
                                    break;
                                } else if (l > -1) {
                                    o = l;
                                }
                            }
                        }
                    }
                    t.check_Child_State = o;
                }
            }, f = {}, p = {
                onCheckNode: function(e, t) {
                    if (t.chkDisabled === true) return false;
                    var n = m.getSetting(e.data.treeId), r = n.data.key.checked;
                    if (b.apply(n.callback.beforeCheck, [ n.treeId, t ], true) == false) return true;
                    t[r] = !t[r];
                    y.checkNodeRelation(n, t);
                    var o = T(t, k.id.CHECK, n);
                    y.setChkClass(n, o, t);
                    y.repairParentChkClassWithSelf(n, t);
                    n.treeObj.trigger(k.event.CHECK, [ e, n.treeId, t ]);
                    return true;
                },
                onMouseoverCheck: function(e, t) {
                    if (t.chkDisabled === true) return false;
                    var n = m.getSetting(e.data.treeId), r = T(t, k.id.CHECK, n);
                    t.check_Focus = true;
                    y.setChkClass(n, r, t);
                    return true;
                },
                onMouseoutCheck: function(e, t) {
                    if (t.chkDisabled === true) return false;
                    var n = m.getSetting(e.data.treeId), r = T(t, k.id.CHECK, n);
                    t.check_Focus = false;
                    y.setChkClass(n, r, t);
                    return true;
                }
            }, h = {}, v = {
                checkNodeRelation: function(e, t) {
                    var n, r, o, a = e.data.key.children, i = e.data.key.checked, s = k.radio;
                    if (e.check.chkStyle == s.STYLE) {
                        var l = m.getRadioCheckedList(e);
                        if (t[i]) {
                            if (e.check.radioType == s.TYPE_ALL) {
                                for (r = l.length - 1; r >= 0; r--) {
                                    n = l[r];
                                    if (n[i] && n != t) {
                                        n[i] = false;
                                        l.splice(r, 1);
                                        y.setChkClass(e, T(n, k.id.CHECK, e), n);
                                        if (n.parentTId != t.parentTId) {
                                            y.repairParentChkClassWithSelf(e, n);
                                        }
                                    }
                                }
                                l.push(t);
                            } else {
                                var d = t.parentTId ? t.getParentNode() : m.getRoot(e);
                                for (r = 0, o = d[a].length; r < o; r++) {
                                    n = d[a][r];
                                    if (n[i] && n != t) {
                                        n[i] = false;
                                        y.setChkClass(e, T(n, k.id.CHECK, e), n);
                                    }
                                }
                            }
                        } else if (e.check.radioType == s.TYPE_ALL) {
                            for (r = 0, o = l.length; r < o; r++) {
                                if (t == l[r]) {
                                    l.splice(r, 1);
                                    break;
                                }
                            }
                        }
                    } else {
                        if (t[i] && (!t[a] || t[a].length == 0 || e.check.chkboxType.Y.indexOf("s") > -1)) {
                            y.setSonNodeCheckBox(e, t, true);
                        }
                        if (!t[i] && (!t[a] || t[a].length == 0 || e.check.chkboxType.N.indexOf("s") > -1)) {
                            y.setSonNodeCheckBox(e, t, false);
                        }
                        if (t[i] && e.check.chkboxType.Y.indexOf("p") > -1) {
                            y.setParentNodeCheckBox(e, t, true);
                        }
                        if (!t[i] && e.check.chkboxType.N.indexOf("p") > -1) {
                            y.setParentNodeCheckBox(e, t, false);
                        }
                    }
                },
                makeChkClass: function(e, t) {
                    var n = e.data.key.checked, r = k.checkbox, o = k.radio, a = "";
                    if (t.chkDisabled === true) {
                        a = r.DISABLED;
                    } else if (t.halfCheck) {
                        a = r.PART;
                    } else if (e.check.chkStyle == o.STYLE) {
                        a = t.check_Child_State < 1 ? r.FULL : r.PART;
                    } else {
                        a = t[n] ? t.check_Child_State === 2 || t.check_Child_State === -1 ? r.FULL : r.PART : t.check_Child_State < 1 ? r.FULL : r.PART;
                    }
                    var i = e.check.chkStyle + "_" + (t[n] ? r.TRUE : r.FALSE) + "_" + a;
                    i = t.check_Focus && t.chkDisabled !== true ? i + "_" + r.FOCUS : i;
                    return k.className.BUTTON + " " + r.DEFAULT + " " + i;
                },
                repairAllChk: function(e, t) {
                    if (e.check.enable && e.check.chkStyle === k.checkbox.STYLE) {
                        var n = e.data.key.checked, r = e.data.key.children, o = m.getRoot(e);
                        for (var a = 0, i = o[r].length; a < i; a++) {
                            var s = o[r][a];
                            if (s.nocheck !== true && s.chkDisabled !== true) {
                                s[n] = t;
                            }
                            y.setSonNodeCheckBox(e, s, t);
                        }
                    }
                },
                repairChkClass: function(e, t) {
                    if (!t) return;
                    m.makeChkFlag(e, t);
                    if (t.nocheck !== true) {
                        var n = T(t, k.id.CHECK, e);
                        y.setChkClass(e, n, t);
                    }
                },
                repairParentChkClass: function(e, t) {
                    if (!t || !t.parentTId) return;
                    var n = t.getParentNode();
                    y.repairChkClass(e, n);
                    y.repairParentChkClass(e, n);
                },
                repairParentChkClassWithSelf: function(e, t) {
                    if (!t) return;
                    var n = e.data.key.children;
                    if (t[n] && t[n].length > 0) {
                        y.repairParentChkClass(e, t[n][0]);
                    } else {
                        y.repairParentChkClass(e, t);
                    }
                },
                repairSonChkDisabled: function(e, t, n, r) {
                    if (!t) return;
                    var o = e.data.key.children;
                    if (t.chkDisabled != n) {
                        t.chkDisabled = n;
                    }
                    y.repairChkClass(e, t);
                    if (t[o] && r) {
                        for (var a = 0, i = t[o].length; a < i; a++) {
                            var s = t[o][a];
                            y.repairSonChkDisabled(e, s, n, r);
                        }
                    }
                },
                repairParentChkDisabled: function(e, t, n, r) {
                    if (!t) return;
                    if (t.chkDisabled != n && r) {
                        t.chkDisabled = n;
                    }
                    y.repairChkClass(e, t);
                    y.repairParentChkDisabled(e, t.getParentNode(), n, r);
                },
                setChkClass: function(e, t, n) {
                    if (!t) return;
                    if (n.nocheck === true) {
                        t.hide();
                    } else {
                        t.show();
                    }
                    t.attr("class", y.makeChkClass(e, n));
                },
                setParentNodeCheckBox: function(e, t, n, r) {
                    var o = e.data.key.children, a = e.data.key.checked, i = T(t, k.id.CHECK, e);
                    if (!r) r = t;
                    m.makeChkFlag(e, t);
                    if (t.nocheck !== true && t.chkDisabled !== true) {
                        t[a] = n;
                        y.setChkClass(e, i, t);
                        if (e.check.autoCheckTrigger && t != r) {
                            e.treeObj.trigger(k.event.CHECK, [ null, e.treeId, t ]);
                        }
                    }
                    if (t.parentTId) {
                        var s = true;
                        if (!n) {
                            var l = t.getParentNode()[o];
                            for (var d = 0, c = l.length; d < c; d++) {
                                if (l[d].nocheck !== true && l[d].chkDisabled !== true && l[d][a] || (l[d].nocheck === true || l[d].chkDisabled === true) && l[d].check_Child_State > 0) {
                                    s = false;
                                    break;
                                }
                            }
                        }
                        if (s) {
                            y.setParentNodeCheckBox(e, t.getParentNode(), n, r);
                        }
                    }
                },
                setSonNodeCheckBox: function(e, t, n, r) {
                    if (!t) return;
                    var o = e.data.key.children, a = e.data.key.checked, i = T(t, k.id.CHECK, e);
                    if (!r) r = t;
                    var s = false;
                    if (t[o]) {
                        for (var l = 0, d = t[o].length; l < d; l++) {
                            var c = t[o][l];
                            y.setSonNodeCheckBox(e, c, n, r);
                            if (c.chkDisabled === true) s = true;
                        }
                    }
                    if (t != m.getRoot(e) && t.chkDisabled !== true) {
                        if (s && t.nocheck !== true) {
                            m.makeChkFlag(e, t);
                        }
                        if (t.nocheck !== true && t.chkDisabled !== true) {
                            t[a] = n;
                            if (!s) t.check_Child_State = t[o] && t[o].length > 0 ? n ? 2 : 0 : -1;
                        } else {
                            t.check_Child_State = -1;
                        }
                        y.setChkClass(e, i, t);
                        if (e.check.autoCheckTrigger && t != r && t.nocheck !== true && t.chkDisabled !== true) {
                            e.treeObj.trigger(k.event.CHECK, [ null, e.treeId, t ]);
                        }
                    }
                }
            }, g = {
                tools: h,
                view: v,
                event: f,
                data: u
            };
            e.extend(true, e.fn.zTree.consts, t);
            e.extend(true, e.fn.zTree._z, g);
            var N = e.fn.zTree, b = N._z.tools, k = N.consts, y = N._z.view, m = N._z.data, C = N._z.event, T = b.$;
            m.exSetting(n);
            m.addInitBind(a);
            m.addInitUnBind(i);
            m.addInitCache(o);
            m.addInitNode(l);
            m.addInitProxy(s, true);
            m.addInitRoot(r);
            m.addBeforeA(d);
            m.addZTreeTools(c);
            var E = y.createNodes;
            y.createNodes = function(e, t, n, r, o) {
                if (E) E.apply(y, arguments);
                if (!n) return;
                y.repairParentChkClassWithSelf(e, r);
            };
            var w = y.removeNode;
            y.removeNode = function(e, t) {
                var n = t.getParentNode();
                if (w) w.apply(y, arguments);
                if (!t || !n) return;
                y.repairChkClass(e, n);
                y.repairParentChkClass(e, n);
            };
            var I = y.appendNodes;
            y.appendNodes = function(e, t, n, r, o, a, i) {
                var s = "";
                if (I) {
                    s = I.apply(y, arguments);
                }
                if (r) {
                    m.makeChkFlag(e, r);
                }
                return s;
            };
        })(jQuery);
        (function(e) {
            var t = {
                event: {
                    DRAG: "ztree_drag",
                    DROP: "ztree_drop",
                    RENAME: "ztree_rename",
                    DRAGMOVE: "ztree_dragmove"
                },
                id: {
                    EDIT: "_edit",
                    INPUT: "_input",
                    REMOVE: "_remove"
                },
                move: {
                    TYPE_INNER: "inner",
                    TYPE_PREV: "prev",
                    TYPE_NEXT: "next"
                },
                node: {
                    CURSELECTED_EDIT: "curSelectedNode_Edit",
                    TMPTARGET_TREE: "tmpTargetzTree",
                    TMPTARGET_NODE: "tmpTargetNode"
                }
            }, n = {
                edit: {
                    enable: false,
                    editNameSelectAll: false,
                    showRemoveBtn: true,
                    showRenameBtn: true,
                    removeTitle: "remove",
                    renameTitle: "rename",
                    drag: {
                        autoExpandTrigger: false,
                        isCopy: true,
                        isMove: true,
                        prev: true,
                        next: true,
                        inner: true,
                        minMoveSize: 5,
                        borderMax: 10,
                        borderMin: -5,
                        maxShowNodeNum: 5,
                        autoOpenTime: 500
                    }
                },
                view: {
                    addHoverDom: null,
                    removeHoverDom: null
                },
                callback: {
                    beforeDrag: null,
                    beforeDragOpen: null,
                    beforeDrop: null,
                    beforeEditName: null,
                    beforeRename: null,
                    onDrag: null,
                    onDragMove: null,
                    onDrop: null,
                    onRename: null
                }
            }, r = function(e) {
                var t = y.getRoot(e), n = y.getRoots();
                t.curEditNode = null;
                t.curEditInput = null;
                t.curHoverNode = null;
                t.dragFlag = 0;
                t.dragNodeShowBefore = [];
                t.dragMaskList = new Array();
                n.showHoverDom = true;
            }, o = function(e) {}, a = function(e) {
                var t = e.treeObj;
                var n = b.event;
                t.bind(n.RENAME, function(t, n, r, o) {
                    N.apply(e.callback.onRename, [ t, n, r, o ]);
                });
                t.bind(n.DRAG, function(t, n, r, o) {
                    N.apply(e.callback.onDrag, [ n, r, o ]);
                });
                t.bind(n.DRAGMOVE, function(t, n, r, o) {
                    N.apply(e.callback.onDragMove, [ n, r, o ]);
                });
                t.bind(n.DROP, function(t, n, r, o, a, i, s) {
                    N.apply(e.callback.onDrop, [ n, r, o, a, i, s ]);
                });
            }, i = function(e) {
                var t = e.treeObj;
                var n = b.event;
                t.unbind(n.RENAME);
                t.unbind(n.DRAG);
                t.unbind(n.DRAGMOVE);
                t.unbind(n.DROP);
            }, s = function(e) {
                var t = e.target, n = y.getSetting(e.data.treeId), r = e.relatedTarget, o = "", a = null, i = "", s = "", l = null, d = null, c = null;
                if (N.eqs(e.type, "mouseover")) {
                    c = N.getMDom(n, t, [ {
                        tagName: "a",
                        attrName: "treeNode" + b.id.A
                    } ]);
                    if (c) {
                        o = N.getNodeMainDom(c).id;
                        i = "hoverOverNode";
                    }
                } else if (N.eqs(e.type, "mouseout")) {
                    c = N.getMDom(n, r, [ {
                        tagName: "a",
                        attrName: "treeNode" + b.id.A
                    } ]);
                    if (!c) {
                        o = "remove";
                        i = "hoverOutNode";
                    }
                } else if (N.eqs(e.type, "mousedown")) {
                    c = N.getMDom(n, t, [ {
                        tagName: "a",
                        attrName: "treeNode" + b.id.A
                    } ]);
                    if (c) {
                        o = N.getNodeMainDom(c).id;
                        i = "mousedownNode";
                    }
                }
                if (o.length > 0) {
                    a = y.getNodeCache(n, o);
                    switch (i) {
                      case "mousedownNode":
                        l = f.onMousedownNode;
                        break;

                      case "hoverOverNode":
                        l = f.onHoverOverNode;
                        break;

                      case "hoverOutNode":
                        l = f.onHoverOutNode;
                        break;
                    }
                }
                var u = {
                    stop: false,
                    node: a,
                    nodeEventType: i,
                    nodeEventCallback: l,
                    treeEventType: s,
                    treeEventCallback: d
                };
                return u;
            }, l = function(e, t, n, r, o, a, i) {
                if (!n) return;
                n.isHover = false;
                n.editNameFlag = false;
            }, d = function(e, t) {
                t.cancelEditName = function(e) {
                    var t = y.getRoot(this.setting);
                    if (!t.curEditNode) return;
                    k.cancelCurEditNode(this.setting, e ? e : null, true);
                };
                t.copyNode = function(e, t, n, r) {
                    if (!t) return null;
                    if (e && !e.isParent && this.setting.data.keep.leaf && n === b.move.TYPE_INNER) return null;
                    var o = this, a = N.clone(t);
                    if (!e) {
                        e = null;
                        n = b.move.TYPE_INNER;
                    }
                    if (n == b.move.TYPE_INNER) {
                        function i() {
                            k.addNodes(o.setting, e, -1, [ a ], r);
                        }
                        if (N.canAsync(this.setting, e)) {
                            k.asyncNode(this.setting, e, r, i);
                        } else {
                            i();
                        }
                    } else {
                        k.addNodes(this.setting, e.parentNode, -1, [ a ], r);
                        k.moveNode(this.setting, e, a, n, false, r);
                    }
                    return a;
                };
                t.editName = function(e) {
                    if (!e || !e.tId || e !== y.getNodeCache(this.setting, e.tId)) return;
                    if (e.parentTId) k.expandCollapseParentNode(this.setting, e.getParentNode(), true);
                    k.editNode(this.setting, e);
                };
                t.moveNode = function(e, t, n, r) {
                    if (!t) return t;
                    if (e && !e.isParent && this.setting.data.keep.leaf && n === b.move.TYPE_INNER) {
                        return null;
                    } else if (e && (t.parentTId == e.tId && n == b.move.TYPE_INNER || C(t, this.setting).find("#" + e.tId).length > 0)) {
                        return null;
                    } else if (!e) {
                        e = null;
                    }
                    var o = this;
                    function a() {
                        k.moveNode(o.setting, e, t, n, false, r);
                    }
                    if (N.canAsync(this.setting, e) && n === b.move.TYPE_INNER) {
                        k.asyncNode(this.setting, e, r, a);
                    } else {
                        a();
                    }
                    return t;
                };
                t.setEditable = function(e) {
                    this.setting.edit.enable = e;
                    return this.refresh();
                };
            }, c = {
                setSonNodeLevel: function(e, t, n) {
                    if (!n) return;
                    var r = e.data.key.children;
                    n.level = t ? t.level + 1 : 0;
                    if (!n[r]) return;
                    for (var o = 0, a = n[r].length; o < a; o++) {
                        if (n[r][o]) y.setSonNodeLevel(e, n, n[r][o]);
                    }
                }
            }, u = {}, f = {
                onHoverOverNode: function(e, t) {
                    var n = y.getSetting(e.data.treeId), r = y.getRoot(n);
                    if (r.curHoverNode != t) {
                        f.onHoverOutNode(e);
                    }
                    r.curHoverNode = t;
                    k.addHoverDom(n, t);
                },
                onHoverOutNode: function(e, t) {
                    var n = y.getSetting(e.data.treeId), r = y.getRoot(n);
                    if (r.curHoverNode && !y.isSelectedNode(n, r.curHoverNode)) {
                        k.removeTreeDom(n, r.curHoverNode);
                        r.curHoverNode = null;
                    }
                },
                onMousedownNode: function(n, r) {
                    var o, a, i = y.getSetting(n.data.treeId), s = y.getRoot(i), l = y.getRoots();
                    if (n.button == 2 || !i.edit.enable || !i.edit.drag.isCopy && !i.edit.drag.isMove) return true;
                    var d = n.target, c = y.getRoot(i).curSelectedList, u = [];
                    if (!y.isSelectedNode(i, r)) {
                        u = [ r ];
                    } else {
                        for (o = 0, a = c.length; o < a; o++) {
                            if (c[o].editNameFlag && N.eqs(d.tagName, "input") && d.getAttribute("treeNode" + b.id.INPUT) !== null) {
                                return true;
                            }
                            u.push(c[o]);
                            if (u[0].parentTId !== c[o].parentTId) {
                                u = [ r ];
                                break;
                            }
                        }
                    }
                    k.editNodeBlur = true;
                    k.cancelCurEditNode(i);
                    var f = e(i.treeObj.get(0).ownerDocument), p = e(i.treeObj.get(0).ownerDocument.body), h, v, g, m = false, T = i, E = i, w, I, _ = null, O = null, S = null, P = b.move.TYPE_INNER, R = n.clientX, D = n.clientY, x = new Date().getTime();
                    if (N.uCanDo(i)) {
                        f.bind("mousemove", L);
                    }
                    function L(n) {
                        if (s.dragFlag == 0 && Math.abs(R - n.clientX) < i.edit.drag.minMoveSize && Math.abs(D - n.clientY) < i.edit.drag.minMoveSize) {
                            return true;
                        }
                        var r, o, a, d, c, E = i.data.key.children;
                        p.css("cursor", "pointer");
                        if (s.dragFlag == 0) {
                            if (N.apply(i.callback.beforeDrag, [ i.treeId, u ], true) == false) {
                                A(n);
                                return true;
                            }
                            for (r = 0, o = u.length; r < o; r++) {
                                if (r == 0) {
                                    s.dragNodeShowBefore = [];
                                }
                                a = u[r];
                                if (a.isParent && a.open) {
                                    k.expandCollapseNode(i, a, !a.open);
                                    s.dragNodeShowBefore[a.tId] = true;
                                } else {
                                    s.dragNodeShowBefore[a.tId] = false;
                                }
                            }
                            s.dragFlag = 1;
                            l.showHoverDom = false;
                            N.showIfameMask(i, true);
                            var L = true, j = -1;
                            if (u.length > 1) {
                                var M = u[0].parentTId ? u[0].getParentNode()[E] : y.getNodes(i);
                                c = [];
                                for (r = 0, o = M.length; r < o; r++) {
                                    if (s.dragNodeShowBefore[M[r].tId] !== undefined) {
                                        if (L && j > -1 && j + 1 !== r) {
                                            L = false;
                                        }
                                        c.push(M[r]);
                                        j = r;
                                    }
                                    if (u.length === c.length) {
                                        u = c;
                                        break;
                                    }
                                }
                            }
                            if (L) {
                                w = u[0].getPreNode();
                                I = u[u.length - 1].getNextNode();
                            }
                            h = C("<ul class='zTreeDragUL'></ul>", i);
                            for (r = 0, o = u.length; r < o; r++) {
                                a = u[r];
                                a.editNameFlag = false;
                                k.selectNode(i, a, r > 0);
                                k.removeTreeDom(i, a);
                                if (r > i.edit.drag.maxShowNodeNum - 1) {
                                    continue;
                                }
                                d = C("<li id='" + a.tId + "_tmp'></li>", i);
                                d.append(C(a, b.id.A, i).clone());
                                d.css("padding", "0");
                                d.children("#" + a.tId + b.id.A).removeClass(b.node.CURSELECTED);
                                h.append(d);
                                if (r == i.edit.drag.maxShowNodeNum - 1) {
                                    d = C("<li id='" + a.tId + "_moretmp'><a>  ...  </a></li>", i);
                                    h.append(d);
                                }
                            }
                            h.attr("id", u[0].tId + b.id.UL + "_tmp");
                            h.addClass(i.treeObj.attr("class"));
                            h.appendTo(p);
                            v = C("<span class='tmpzTreeMove_arrow'></span>", i);
                            v.attr("id", "zTreeMove_arrow_tmp");
                            v.appendTo(p);
                            i.treeObj.trigger(b.event.DRAG, [ n, i.treeId, u ]);
                        }
                        if (s.dragFlag == 1) {
                            if (g && v.attr("id") == n.target.id && S && n.clientX + f.scrollLeft() + 2 > e("#" + S + b.id.A, g).offset().left) {
                                var $ = e("#" + S + b.id.A, g);
                                n.target = $.length > 0 ? $.get(0) : n.target;
                            } else if (g) {
                                g.removeClass(b.node.TMPTARGET_TREE);
                                if (S) e("#" + S + b.id.A, g).removeClass(b.node.TMPTARGET_NODE + "_" + b.move.TYPE_PREV).removeClass(b.node.TMPTARGET_NODE + "_" + t.move.TYPE_NEXT).removeClass(b.node.TMPTARGET_NODE + "_" + t.move.TYPE_INNER);
                            }
                            g = null;
                            S = null;
                            m = false;
                            T = i;
                            var z = y.getSettings();
                            for (var U in z) {
                                if (z[U].treeId && z[U].edit.enable && z[U].treeId != i.treeId && (n.target.id == z[U].treeId || e(n.target).parents("#" + z[U].treeId).length > 0)) {
                                    m = true;
                                    T = z[U];
                                }
                            }
                            var B = f.scrollTop(), F = f.scrollLeft(), Y = T.treeObj.offset(), H = T.treeObj.get(0).scrollHeight, K = T.treeObj.get(0).scrollWidth, V = n.clientY + B - Y.top, q = T.treeObj.height() + Y.top - n.clientY - B, W = n.clientX + F - Y.left, G = T.treeObj.width() + Y.left - n.clientX - F, X = V < i.edit.drag.borderMax && V > i.edit.drag.borderMin, Z = q < i.edit.drag.borderMax && q > i.edit.drag.borderMin, Q = W < i.edit.drag.borderMax && W > i.edit.drag.borderMin, J = G < i.edit.drag.borderMax && G > i.edit.drag.borderMin, ee = V > i.edit.drag.borderMin && q > i.edit.drag.borderMin && W > i.edit.drag.borderMin && G > i.edit.drag.borderMin, te = X && T.treeObj.scrollTop() <= 0, ne = Z && T.treeObj.scrollTop() + T.treeObj.height() + 10 >= H, re = Q && T.treeObj.scrollLeft() <= 0, oe = J && T.treeObj.scrollLeft() + T.treeObj.width() + 10 >= K;
                            if (n.target && N.isChildOrSelf(n.target, T.treeId)) {
                                var ae = n.target;
                                while (ae && ae.tagName && !N.eqs(ae.tagName, "li") && ae.id != T.treeId) {
                                    ae = ae.parentNode;
                                }
                                var ie = true;
                                for (r = 0, o = u.length; r < o; r++) {
                                    a = u[r];
                                    if (ae.id === a.tId) {
                                        ie = false;
                                        break;
                                    } else if (C(a, i).find("#" + ae.id).length > 0) {
                                        ie = false;
                                        break;
                                    }
                                }
                                if (ie && n.target && N.isChildOrSelf(n.target, ae.id + b.id.A)) {
                                    g = e(ae);
                                    S = ae.id;
                                }
                            }
                            a = u[0];
                            if (ee && N.isChildOrSelf(n.target, T.treeId)) {
                                if (!g && (n.target.id == T.treeId || te || ne || re || oe) && (m || !m && a.parentTId)) {
                                    g = T.treeObj;
                                }
                                if (X) {
                                    T.treeObj.scrollTop(T.treeObj.scrollTop() - 10);
                                } else if (Z) {
                                    T.treeObj.scrollTop(T.treeObj.scrollTop() + 10);
                                }
                                if (Q) {
                                    T.treeObj.scrollLeft(T.treeObj.scrollLeft() - 10);
                                } else if (J) {
                                    T.treeObj.scrollLeft(T.treeObj.scrollLeft() + 10);
                                }
                                if (g && g != T.treeObj && g.offset().left < T.treeObj.offset().left) {
                                    T.treeObj.scrollLeft(T.treeObj.scrollLeft() + g.offset().left - T.treeObj.offset().left);
                                }
                            }
                            h.css({
                                top: n.clientY + B + 3 + "px",
                                left: n.clientX + F + 3 + "px"
                            });
                            var se = 0;
                            var le = 0;
                            if (g && g.attr("id") != T.treeId) {
                                var de = S == null ? null : y.getNodeCache(T, S), ce = (n.ctrlKey || n.metaKey) && i.edit.drag.isMove && i.edit.drag.isCopy || !i.edit.drag.isMove && i.edit.drag.isCopy, ue = !!(w && S === w.tId), fe = !!(I && S === I.tId), pe = a.parentTId && a.parentTId == S, he = (ce || !fe) && N.apply(T.edit.drag.prev, [ T.treeId, u, de ], !!T.edit.drag.prev), ve = (ce || !ue) && N.apply(T.edit.drag.next, [ T.treeId, u, de ], !!T.edit.drag.next), ge = (ce || !pe) && !(T.data.keep.leaf && !de.isParent) && N.apply(T.edit.drag.inner, [ T.treeId, u, de ], !!T.edit.drag.inner);
                                function Ne() {
                                    g = null;
                                    S = "";
                                    P = b.move.TYPE_INNER;
                                    v.css({
                                        display: "none"
                                    });
                                    if (window.zTreeMoveTimer) {
                                        clearTimeout(window.zTreeMoveTimer);
                                        window.zTreeMoveTargetNodeTId = null;
                                    }
                                }
                                if (!he && !ve && !ge) {
                                    Ne();
                                } else {
                                    var be = e("#" + S + b.id.A, g), ke = de.isLastNode ? null : e("#" + de.getNextNode().tId + b.id.A, g.next()), ye = be.offset().top, me = be.offset().left, Ce = he ? ge ? .25 : ve ? .5 : 1 : -1, Te = ve ? ge ? .75 : he ? .5 : 0 : -1, Ee = (n.clientY + B - ye) / be.height();
                                    if ((Ce == 1 || Ee <= Ce && Ee >= -.2) && he) {
                                        se = 1 - v.width();
                                        le = ye - v.height() / 2;
                                        P = b.move.TYPE_PREV;
                                    } else if ((Te == 0 || Ee >= Te && Ee <= 1.2) && ve) {
                                        se = 1 - v.width();
                                        le = ke == null || de.isParent && de.open ? ye + be.height() - v.height() / 2 : ke.offset().top - v.height() / 2;
                                        P = b.move.TYPE_NEXT;
                                    } else if (ge) {
                                        se = 5 - v.width();
                                        le = ye;
                                        P = b.move.TYPE_INNER;
                                    } else {
                                        Ne();
                                    }
                                    if (g) {
                                        v.css({
                                            display: "block",
                                            top: le + "px",
                                            left: me + se + "px"
                                        });
                                        be.addClass(b.node.TMPTARGET_NODE + "_" + P);
                                        if (_ != S || O != P) {
                                            x = new Date().getTime();
                                        }
                                        if (de && de.isParent && P == b.move.TYPE_INNER) {
                                            var we = true;
                                            if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== de.tId) {
                                                clearTimeout(window.zTreeMoveTimer);
                                                window.zTreeMoveTargetNodeTId = null;
                                            } else if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === de.tId) {
                                                we = false;
                                            }
                                            if (we) {
                                                window.zTreeMoveTimer = setTimeout(function() {
                                                    if (P != b.move.TYPE_INNER) return;
                                                    if (de && de.isParent && !de.open && new Date().getTime() - x > T.edit.drag.autoOpenTime && N.apply(T.callback.beforeDragOpen, [ T.treeId, de ], true)) {
                                                        k.switchNode(T, de);
                                                        if (T.edit.drag.autoExpandTrigger) {
                                                            T.treeObj.trigger(b.event.EXPAND, [ T.treeId, de ]);
                                                        }
                                                    }
                                                }, T.edit.drag.autoOpenTime + 50);
                                                window.zTreeMoveTargetNodeTId = de.tId;
                                            }
                                        }
                                    }
                                }
                            } else {
                                P = b.move.TYPE_INNER;
                                if (g && N.apply(T.edit.drag.inner, [ T.treeId, u, null ], !!T.edit.drag.inner)) {
                                    g.addClass(b.node.TMPTARGET_TREE);
                                } else {
                                    g = null;
                                }
                                v.css({
                                    display: "none"
                                });
                                if (window.zTreeMoveTimer) {
                                    clearTimeout(window.zTreeMoveTimer);
                                    window.zTreeMoveTargetNodeTId = null;
                                }
                            }
                            _ = S;
                            O = P;
                            i.treeObj.trigger(b.event.DRAGMOVE, [ n, i.treeId, u ]);
                        }
                        return false;
                    }
                    f.bind("mouseup", A);
                    function A(n) {
                        if (window.zTreeMoveTimer) {
                            clearTimeout(window.zTreeMoveTimer);
                            window.zTreeMoveTargetNodeTId = null;
                        }
                        _ = null;
                        O = null;
                        f.unbind("mousemove", L);
                        f.unbind("mouseup", A);
                        f.unbind("selectstart", j);
                        p.css("cursor", "auto");
                        if (g) {
                            g.removeClass(b.node.TMPTARGET_TREE);
                            if (S) e("#" + S + b.id.A, g).removeClass(b.node.TMPTARGET_NODE + "_" + b.move.TYPE_PREV).removeClass(b.node.TMPTARGET_NODE + "_" + t.move.TYPE_NEXT).removeClass(b.node.TMPTARGET_NODE + "_" + t.move.TYPE_INNER);
                        }
                        N.showIfameMask(i, false);
                        l.showHoverDom = true;
                        if (s.dragFlag == 0) return;
                        s.dragFlag = 0;
                        var r, o, a;
                        for (r = 0, o = u.length; r < o; r++) {
                            a = u[r];
                            if (a.isParent && s.dragNodeShowBefore[a.tId] && !a.open) {
                                k.expandCollapseNode(i, a, !a.open);
                                delete s.dragNodeShowBefore[a.tId];
                            }
                        }
                        if (h) h.remove();
                        if (v) v.remove();
                        var d = (n.ctrlKey || n.metaKey) && i.edit.drag.isMove && i.edit.drag.isCopy || !i.edit.drag.isMove && i.edit.drag.isCopy;
                        if (!d && g && S && u[0].parentTId && S == u[0].parentTId && P == b.move.TYPE_INNER) {
                            g = null;
                        }
                        if (g) {
                            var c = S == null ? null : y.getNodeCache(T, S);
                            if (N.apply(i.callback.beforeDrop, [ T.treeId, u, c, P, d ], true) == false) {
                                k.selectNodes(E, u);
                                return;
                            }
                            var w = d ? N.clone(u) : u;
                            function I() {
                                if (m) {
                                    if (!d) {
                                        for (var e = 0, t = u.length; e < t; e++) {
                                            k.removeNode(i, u[e]);
                                        }
                                    }
                                    if (P == b.move.TYPE_INNER) {
                                        k.addNodes(T, c, -1, w);
                                    } else {
                                        k.addNodes(T, c.getParentNode(), P == b.move.TYPE_PREV ? c.getIndex() : c.getIndex() + 1, w);
                                    }
                                } else {
                                    if (d && P == b.move.TYPE_INNER) {
                                        k.addNodes(T, c, -1, w);
                                    } else if (d) {
                                        k.addNodes(T, c.getParentNode(), P == b.move.TYPE_PREV ? c.getIndex() : c.getIndex() + 1, w);
                                    } else {
                                        if (P != b.move.TYPE_NEXT) {
                                            for (e = 0, t = w.length; e < t; e++) {
                                                k.moveNode(T, c, w[e], P, false);
                                            }
                                        } else {
                                            for (e = -1, t = w.length - 1; e < t; t--) {
                                                k.moveNode(T, c, w[t], P, false);
                                            }
                                        }
                                    }
                                }
                                k.selectNodes(T, w);
                                var r = C(w[0], i).get(0);
                                k.scrollIntoView(r);
                                i.treeObj.trigger(b.event.DROP, [ n, T.treeId, w, c, P, d ]);
                            }
                            if (P == b.move.TYPE_INNER && N.canAsync(T, c)) {
                                k.asyncNode(T, c, false, I);
                            } else {
                                I();
                            }
                        } else {
                            k.selectNodes(E, u);
                            i.treeObj.trigger(b.event.DROP, [ n, i.treeId, u, null, null, null ]);
                        }
                    }
                    f.bind("selectstart", j);
                    function j() {
                        return false;
                    }
                    if (n.preventDefault) {
                        n.preventDefault();
                    }
                    return true;
                }
            }, p = {
                getAbs: function(e) {
                    var t = e.getBoundingClientRect(), n = document.body.scrollTop + document.documentElement.scrollTop, r = document.body.scrollLeft + document.documentElement.scrollLeft;
                    return [ t.left + r, t.top + n ];
                },
                inputFocus: function(e) {
                    if (e.get(0)) {
                        e.focus();
                        N.setCursorPosition(e.get(0), e.val().length);
                    }
                },
                inputSelect: function(e) {
                    if (e.get(0)) {
                        e.focus();
                        e.select();
                    }
                },
                setCursorPosition: function(e, t) {
                    if (e.setSelectionRange) {
                        e.focus();
                        e.setSelectionRange(t, t);
                    } else if (e.createTextRange) {
                        var n = e.createTextRange();
                        n.collapse(true);
                        n.moveEnd("character", t);
                        n.moveStart("character", t);
                        n.select();
                    }
                },
                showIfameMask: function(e, t) {
                    var n = y.getRoot(e);
                    while (n.dragMaskList.length > 0) {
                        n.dragMaskList[0].remove();
                        n.dragMaskList.shift();
                    }
                    if (t) {
                        var r = C("iframe", e);
                        for (var o = 0, a = r.length; o < a; o++) {
                            var i = r.get(o), s = N.getAbs(i), l = C("<div id='zTreeMask_" + o + "' class='zTreeMask' style='top:" + s[1] + "px; left:" + s[0] + "px; width:" + i.offsetWidth + "px; height:" + i.offsetHeight + "px;'></div>", e);
                            l.appendTo(C("body", e));
                            n.dragMaskList.push(l);
                        }
                    }
                }
            }, h = {
                addEditBtn: function(e, t) {
                    if (t.editNameFlag || C(t, b.id.EDIT, e).length > 0) {
                        return;
                    }
                    if (!N.apply(e.edit.showRenameBtn, [ e.treeId, t ], e.edit.showRenameBtn)) {
                        return;
                    }
                    var n = C(t, b.id.A, e), r = "<span class='" + b.className.BUTTON + " edit' id='" + t.tId + b.id.EDIT + "' title='" + N.apply(e.edit.renameTitle, [ e.treeId, t ], e.edit.renameTitle) + "' treeNode" + b.id.EDIT + " style='display:none;'></span>";
                    n.append(r);
                    C(t, b.id.EDIT, e).bind("click", function() {
                        if (!N.uCanDo(e) || N.apply(e.callback.beforeEditName, [ e.treeId, t ], true) == false) return false;
                        k.editNode(e, t);
                        return false;
                    }).show();
                },
                addRemoveBtn: function(e, t) {
                    if (t.editNameFlag || C(t, b.id.REMOVE, e).length > 0) {
                        return;
                    }
                    if (!N.apply(e.edit.showRemoveBtn, [ e.treeId, t ], e.edit.showRemoveBtn)) {
                        return;
                    }
                    var n = C(t, b.id.A, e), r = "<span class='" + b.className.BUTTON + " remove' id='" + t.tId + b.id.REMOVE + "' title='" + N.apply(e.edit.removeTitle, [ e.treeId, t ], e.edit.removeTitle) + "' treeNode" + b.id.REMOVE + " style='display:none;'></span>";
                    n.append(r);
                    C(t, b.id.REMOVE, e).bind("click", function() {
                        if (!N.uCanDo(e) || N.apply(e.callback.beforeRemove, [ e.treeId, t ], true) == false) return false;
                        k.removeNode(e, t);
                        e.treeObj.trigger(b.event.REMOVE, [ e.treeId, t ]);
                        return false;
                    }).bind("mousedown", function(e) {
                        return true;
                    }).show();
                },
                addHoverDom: function(e, t) {
                    if (y.getRoots().showHoverDom) {
                        t.isHover = true;
                        if (e.edit.enable) {
                            k.addEditBtn(e, t);
                            k.addRemoveBtn(e, t);
                        }
                        N.apply(e.view.addHoverDom, [ e.treeId, t ]);
                    }
                },
                cancelCurEditNode: function(e, t, n) {
                    var r = y.getRoot(e), o = e.data.key.name, a = r.curEditNode;
                    if (a) {
                        var i = r.curEditInput, s = t ? t : n ? a[o] : i.val();
                        if (N.apply(e.callback.beforeRename, [ e.treeId, a, s, n ], true) === false) {
                            return false;
                        }
                        a[o] = s;
                        var l = C(a, b.id.A, e);
                        l.removeClass(b.node.CURSELECTED_EDIT);
                        i.unbind();
                        k.setNodeName(e, a);
                        a.editNameFlag = false;
                        r.curEditNode = null;
                        r.curEditInput = null;
                        k.selectNode(e, a, false);
                        e.treeObj.trigger(b.event.RENAME, [ e.treeId, a, n ]);
                    }
                    r.noSelection = true;
                    return true;
                },
                editNode: function(e, t) {
                    var n = y.getRoot(e);
                    k.editNodeBlur = false;
                    if (y.isSelectedNode(e, t) && n.curEditNode == t && t.editNameFlag) {
                        setTimeout(function() {
                            N.inputFocus(n.curEditInput);
                        }, 0);
                        return;
                    }
                    var r = e.data.key.name;
                    t.editNameFlag = true;
                    k.removeTreeDom(e, t);
                    k.cancelCurEditNode(e);
                    k.selectNode(e, t, false);
                    C(t, b.id.SPAN, e).html("<input type=text class='rename' id='" + t.tId + b.id.INPUT + "' treeNode" + b.id.INPUT + " >");
                    var o = C(t, b.id.INPUT, e);
                    o.attr("value", t[r]);
                    if (e.edit.editNameSelectAll) {
                        N.inputSelect(o);
                    } else {
                        N.inputFocus(o);
                    }
                    o.bind("blur", function(t) {
                        if (!k.editNodeBlur) {
                            k.cancelCurEditNode(e);
                        }
                    }).bind("keydown", function(t) {
                        if (t.keyCode == "13") {
                            k.editNodeBlur = true;
                            k.cancelCurEditNode(e);
                        } else if (t.keyCode == "27") {
                            k.cancelCurEditNode(e, null, true);
                        }
                    }).bind("click", function(e) {
                        return false;
                    }).bind("dblclick", function(e) {
                        return false;
                    });
                    C(t, b.id.A, e).addClass(b.node.CURSELECTED_EDIT);
                    n.curEditInput = o;
                    n.noSelection = false;
                    n.curEditNode = t;
                },
                moveNode: function(e, t, n, r, o, a) {
                    var i = y.getRoot(e), s = e.data.key.children;
                    if (t == n) return;
                    if (e.data.keep.leaf && t && !t.isParent && r == b.move.TYPE_INNER) return;
                    var l = n.parentTId ? n.getParentNode() : i, d = t === null || t == i;
                    if (d && t === null) t = i;
                    if (d) r = b.move.TYPE_INNER;
                    var c = t.parentTId ? t.getParentNode() : i;
                    if (r != b.move.TYPE_PREV && r != b.move.TYPE_NEXT) {
                        r = b.move.TYPE_INNER;
                    }
                    if (r == b.move.TYPE_INNER) {
                        if (d) {
                            n.parentTId = null;
                        } else {
                            if (!t.isParent) {
                                t.isParent = true;
                                t.open = !!t.open;
                                k.setNodeLineIcos(e, t);
                            }
                            n.parentTId = t.tId;
                        }
                    }
                    var u, f;
                    if (d) {
                        u = e.treeObj;
                        f = u;
                    } else {
                        if (!a && r == b.move.TYPE_INNER) {
                            k.expandCollapseNode(e, t, true, false);
                        } else if (!a) {
                            k.expandCollapseNode(e, t.getParentNode(), true, false);
                        }
                        u = C(t, e);
                        f = C(t, b.id.UL, e);
                        if (!!u.get(0) && !f.get(0)) {
                            var p = [];
                            k.makeUlHtml(e, t, p, "");
                            u.append(p.join(""));
                        }
                        f = C(t, b.id.UL, e);
                    }
                    var h = C(n, e);
                    if (!h.get(0)) {
                        h = k.appendNodes(e, n.level, [ n ], null, -1, false, true).join("");
                    } else if (!u.get(0)) {
                        h.remove();
                    }
                    if (f.get(0) && r == b.move.TYPE_INNER) {
                        f.append(h);
                    } else if (u.get(0) && r == b.move.TYPE_PREV) {
                        u.before(h);
                    } else if (u.get(0) && r == b.move.TYPE_NEXT) {
                        u.after(h);
                    }
                    var v, g, N = -1, m = 0, T = null, E = null, w = n.level;
                    if (n.isFirstNode) {
                        N = 0;
                        if (l[s].length > 1) {
                            T = l[s][1];
                            T.isFirstNode = true;
                        }
                    } else if (n.isLastNode) {
                        N = l[s].length - 1;
                        T = l[s][N - 1];
                        T.isLastNode = true;
                    } else {
                        for (v = 0, g = l[s].length; v < g; v++) {
                            if (l[s][v].tId == n.tId) {
                                N = v;
                                break;
                            }
                        }
                    }
                    if (N >= 0) {
                        l[s].splice(N, 1);
                    }
                    if (r != b.move.TYPE_INNER) {
                        for (v = 0, g = c[s].length; v < g; v++) {
                            if (c[s][v].tId == t.tId) m = v;
                        }
                    }
                    if (r == b.move.TYPE_INNER) {
                        if (!t[s]) t[s] = new Array();
                        if (t[s].length > 0) {
                            E = t[s][t[s].length - 1];
                            E.isLastNode = false;
                        }
                        t[s].splice(t[s].length, 0, n);
                        n.isLastNode = true;
                        n.isFirstNode = t[s].length == 1;
                    } else if (t.isFirstNode && r == b.move.TYPE_PREV) {
                        c[s].splice(m, 0, n);
                        E = t;
                        E.isFirstNode = false;
                        n.parentTId = t.parentTId;
                        n.isFirstNode = true;
                        n.isLastNode = false;
                    } else if (t.isLastNode && r == b.move.TYPE_NEXT) {
                        c[s].splice(m + 1, 0, n);
                        E = t;
                        E.isLastNode = false;
                        n.parentTId = t.parentTId;
                        n.isFirstNode = false;
                        n.isLastNode = true;
                    } else {
                        if (r == b.move.TYPE_PREV) {
                            c[s].splice(m, 0, n);
                        } else {
                            c[s].splice(m + 1, 0, n);
                        }
                        n.parentTId = t.parentTId;
                        n.isFirstNode = false;
                        n.isLastNode = false;
                    }
                    y.fixPIdKeyValue(e, n);
                    y.setSonNodeLevel(e, n.getParentNode(), n);
                    k.setNodeLineIcos(e, n);
                    k.repairNodeLevelClass(e, n, w);
                    if (!e.data.keep.parent && l[s].length < 1) {
                        l.isParent = false;
                        l.open = false;
                        var I = C(l, b.id.UL, e), _ = C(l, b.id.SWITCH, e), O = C(l, b.id.ICON, e);
                        k.replaceSwitchClass(l, _, b.folder.DOCU);
                        k.replaceIcoClass(l, O, b.folder.DOCU);
                        I.css("display", "none");
                    } else if (T) {
                        k.setNodeLineIcos(e, T);
                    }
                    if (E) {
                        k.setNodeLineIcos(e, E);
                    }
                    if (!!e.check && e.check.enable && k.repairChkClass) {
                        k.repairChkClass(e, l);
                        k.repairParentChkClassWithSelf(e, l);
                        if (l != n.parent) k.repairParentChkClassWithSelf(e, n);
                    }
                    if (!a) {
                        k.expandCollapseParentNode(e, n.getParentNode(), true, o);
                    }
                },
                removeEditBtn: function(e, t) {
                    C(t, b.id.EDIT, e).unbind().remove();
                },
                removeRemoveBtn: function(e, t) {
                    C(t, b.id.REMOVE, e).unbind().remove();
                },
                removeTreeDom: function(e, t) {
                    t.isHover = false;
                    k.removeEditBtn(e, t);
                    k.removeRemoveBtn(e, t);
                    N.apply(e.view.removeHoverDom, [ e.treeId, t ]);
                },
                repairNodeLevelClass: function(e, t, n) {
                    if (n === t.level) return;
                    var r = C(t, e), o = C(t, b.id.A, e), a = C(t, b.id.UL, e), i = b.className.LEVEL + n, s = b.className.LEVEL + t.level;
                    r.removeClass(i);
                    r.addClass(s);
                    o.removeClass(i);
                    o.addClass(s);
                    a.removeClass(i);
                    a.addClass(s);
                },
                selectNodes: function(e, t) {
                    for (var n = 0, r = t.length; n < r; n++) {
                        k.selectNode(e, t[n], n > 0);
                    }
                }
            }, v = {
                tools: p,
                view: h,
                event: u,
                data: c
            };
            e.extend(true, e.fn.zTree.consts, t);
            e.extend(true, e.fn.zTree._z, v);
            var g = e.fn.zTree, N = g._z.tools, b = g.consts, k = g._z.view, y = g._z.data, m = g._z.event, C = N.$;
            y.exSetting(n);
            y.addInitBind(a);
            y.addInitUnBind(i);
            y.addInitCache(o);
            y.addInitNode(l);
            y.addInitProxy(s);
            y.addInitRoot(r);
            y.addZTreeTools(d);
            var T = k.cancelPreSelectedNode;
            k.cancelPreSelectedNode = function(e, t) {
                var n = y.getRoot(e).curSelectedList;
                for (var r = 0, o = n.length; r < o; r++) {
                    if (!t || t === n[r]) {
                        k.removeTreeDom(e, n[r]);
                        if (t) break;
                    }
                }
                if (T) T.apply(k, arguments);
            };
            var E = k.createNodes;
            k.createNodes = function(e, t, n, r, o) {
                if (E) {
                    E.apply(k, arguments);
                }
                if (!n) return;
                if (k.repairParentChkClassWithSelf) {
                    k.repairParentChkClassWithSelf(e, r);
                }
            };
            var w = k.makeNodeUrl;
            k.makeNodeUrl = function(e, t) {
                return e.edit.enable ? null : w.apply(k, arguments);
            };
            var I = k.removeNode;
            k.removeNode = function(e, t) {
                var n = y.getRoot(e);
                if (n.curEditNode === t) n.curEditNode = null;
                if (I) {
                    I.apply(k, arguments);
                }
            };
            var _ = k.selectNode;
            k.selectNode = function(e, t, n) {
                var r = y.getRoot(e);
                if (y.isSelectedNode(e, t) && r.curEditNode == t && t.editNameFlag) {
                    return false;
                }
                if (_) _.apply(k, arguments);
                k.addHoverDom(e, t);
                return true;
            };
            var O = N.uCanDo;
            N.uCanDo = function(e, t) {
                var n = y.getRoot(e);
                if (t && (N.eqs(t.type, "mouseover") || N.eqs(t.type, "mouseout") || N.eqs(t.type, "mousedown") || N.eqs(t.type, "mouseup"))) {
                    return true;
                }
                if (n.curEditNode) {
                    k.editNodeBlur = false;
                    n.curEditInput.focus();
                }
                return !n.curEditNode && (O ? O.apply(k, arguments) : true);
            };
        })(jQuery);
    }
});