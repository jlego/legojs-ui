(function(e) {
    var t = {};
    function a(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        e[n].call(r.exports, r, r.exports, a);
        r.loaded = true;
        return r.exports;
    }
    a.m = e;
    a.c = t;
    a.p = "./dist/";
    return a(0);
})([ function(e, t, a) {
    "use strict";
    var n = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            if (a) e(t.prototype, a);
            if (n) e(t, n);
            return t;
        };
    }();
    var r = a(6);
    var i = c(r);
    var o = a(7);
    var s = c(o);
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var l = function() {
        function e() {
            u(this, e);
            return {
                "/avatar": [ this.index, this.tabs ],
                "/avatar/:tabs": [ this.index, this.tabs ]
            };
        }
        n(e, [ {
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
                var a = [ s.default ];
                HBY.create(a[t], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new l());
}, , , , , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            if (a) e(t.prototype, a);
            if (n) e(t, n);
            return t;
        };
    }();
    var n = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
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
    var c = function(e) {
        s(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, t);
            var a = {
                currentTab: 0
            };
            Object.assign(a, e);
            return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var a = hx(n, t.currentTab == 0 ? "active" : "");
                return a;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = c;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            if (a) e(t.prototype, a);
            if (n) e(t, n);
            return t;
        };
    }();
    var n = r([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ]);
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
    var c = function(e) {
        s(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, t);
            var a = {
                components: [ {
                    el: "#avatar1",
                    name: "user",
                    multiple: false,
                    value: [ {
                        key: "userId",
                        value: "./asset/demo/avatar-4.jpg",
                        name: "张三"
                    } ],
                    onAdd: function e(t, a) {
                        console.warn("添加人员", a);
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
                    onAdd: function e(t, a) {
                        console.warn("添加人员2", a);
                    }
                } ]
            };
            Object.assign(a, e);
            return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a));
        }
        a(t, [ {
            key: "render",
            value: function e() {
                var t = hx(n);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = c;
} ]);