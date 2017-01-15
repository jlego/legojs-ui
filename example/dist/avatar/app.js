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
    var r = n(10);
    var i = u(r);
    var o = n(11);
    var s = u(o);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var l = function() {
        function e() {
            c(this, e);
            return {
                "/avatar": [ this.index, this.tabs ],
                "/avatar/:tabs": [ this.index, this.tabs ]
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
                var n = [ s.default ];
                HBY.create(n[t], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new l());
}, , , , , , , , , , function(e, t) {
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
    var a = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
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
    function o(e, t) {
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
    var u = function(e) {
        s(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, t);
            var n = {
                currentTab: 0
            };
            Object.assign(n, e);
            return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var n = hx(a, t.currentTab == 0 ? "active" : "");
                return n;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = u;
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
    var r = u([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ]);
    var i = n(12);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e, t) {
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
    function l(e, t) {
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
    var f = function(e) {
        v(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            c(this, t);
            var n = {
                components: [ {
                    el: "#avatar1",
                    name: "user",
                    multiple: false,
                    value: [ {
                        key: "userId",
                        value: "./asset/demo/avatar-4.jpg",
                        name: "张三"
                    } ],
                    onAdd: function e(t, n) {
                        console.warn("添加人员", n);
                    }
                }, {
                    el: "#avatar2",
                    name: "users",
                    multiple: true,
                    value: [ {
                        key: "user1",
                        value: "./asset/demo/avatar-5.jpg",
                        name: "张小三"
                    }, {
                        key: "user2",
                        value: "./asset/demo/avatar-6.jpg",
                        name: "李四李四"
                    }, {
                        key: "user3",
                        value: "./asset/demo/avatar-7.jpg",
                        name: "老五"
                    } ],
                    onAdd: function e(t, n) {
                        console.warn("添加人员2", n);
                    }
                } ]
            };
            Object.assign(n, e);
            return l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
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
    t.default = f;
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
    var r = v([ '\n            <div class="avatar-item">\n                <div class="avatar-img" style="background-image:url(', ');" id="', '">\n                    ', "\n                </div>\n                ", "\n            </div>\n            " ], [ '\n            <div class="avatar-item">\n                <div class="avatar-img" style="background-image:url(', ');" id="', '">\n                    ', "\n                </div>\n                ", "\n            </div>\n            " ]);
    var i = v([ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ], [ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ]);
    var o = v([ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ], [ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ]);
    var s = v([ "<label>", "</label>" ], [ "<label>", "</label>" ]);
    var u = v([ '\n        <div class="avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ], [ '\n        <div class="avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ]);
    var c = v([ "\n            ", "\n        " ], [ "\n            ", "\n        " ]);
    var l = v([ '\n            <div class="avatar-item addbtn">\n                <div class="avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="avatar-item addbtn">\n                <div class="avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ]);
    function v(e, t) {
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
    function d(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e;
    }
    function p(e, t) {
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
    var h = function(e) {
        p(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            f(this, t);
            var n = {
                events: {
                    "click .add": "onAdd",
                    "click .remove": "onRemove",
                    "click .change": "onChange"
                },
                size: "",
                name: "",
                multiple: false,
                radius: "50%",
                showName: true,
                width: "",
                height: "",
                value: [],
                onAdd: function e() {},
                onRemove: function e() {},
                onChange: function e() {}
            };
            Object.assign(n, e);
            return d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                function n(e) {
                    return hx(r, val(e.value), e.key, t.multiple ? hx(i, val(e.name)) : hx(o, val(e.name)), t.showName ? hx(s, val(e.name)) : "");
                }
                var a = hx(u, t.size, t.value.length ? hx(c, t.multiple ? t.value.map(function(e) {
                    return n(e);
                }) : n(t.value[0])) : "", !t.value.length || t.multiple ? hx(l) : "", t.value.map(function(e) {
                    return e.key;
                }).join(","), t.name);
                return a;
            }
        }, {
            key: "renderAfter",
            value: function e() {
                if (this.options.width) this.$(".avatar-img").width(this.options.width);
                if (this.options.height) this.$(".avatar-img").height(this.options.height);
                this.$(".avatar-img, .avatar-img i").css("border-radius", this.options.radius);
            }
        }, {
            key: "onAdd",
            value: function e(t) {
                t.stopPropagation();
                if (typeof this.options.onAdd == "function") this.options.onAdd(this, t);
            }
        }, {
            key: "onRemove",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), a = n.parent(), r = a.attr("id");
                this.options.value = this.options.value.filter(function(e) {
                    return e.key !== r;
                });
                this.refresh();
                if (typeof this.options.onRemove == "function") this.options.onRemove(this, r);
            }
        }, {
            key: "onChange",
            value: function e(t) {
                t.stopPropagation();
                var n = $(t.currentTarget), a = n.parent(), r = a.attr("id");
                if (typeof this.options.onChange == "function") this.options.onChange(this, r);
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    Lego.components("avatar", h);
    e.exports = h;
} ]);