(function(e) {
    var a = {};
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        e[n].call(r.exports, r, r.exports, t);
        r.loaded = true;
        return r.exports;
    }
    t.m = e;
    t.c = a;
    t.p = "./dist/";
    return t(0);
})([ function(e, a, t) {
    "use strict";
    var n = function() {
        function e(e, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(a, t, n) {
            if (t) e(a.prototype, t);
            if (n) e(a, n);
            return a;
        };
    }();
    var r = t(6);
    var i = u(r);
    var o = t(7);
    var s = u(o);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function l(e, a) {
        if (!(e instanceof a)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var c = function() {
        function e() {
            l(this, e);
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
                var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                this.viewObj.options.currentTab = a || 0;
                var t = [ s.default ];
                HBY.create(t[a], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new c());
}, , , , , , function(e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: true
    });
    var t = function() {
        function e(e, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(a, t, n) {
            if (t) e(a.prototype, t);
            if (n) e(a, n);
            return a;
        };
    }();
    var n = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/avatar/0" class="', '">Avatar 头像</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function r(e, a) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(a)
            }
        }));
    }
    function i(e, a) {
        if (!(e instanceof a)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function o(e, a) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return a && (typeof a === "object" || typeof a === "function") ? a : e;
    }
    function s(e, a) {
        if (typeof a !== "function" && a !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof a);
        }
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (a) Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a;
    }
    var u = function(e) {
        s(a, e);
        function a() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, a);
            var t = {
                currentTab: 0
            };
            Object.assign(t, e);
            return o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
        }
        t(a, [ {
            key: "render",
            value: function e() {
                var a = this.options;
                var t = hx(n, a.currentTab == 0 ? "active" : "");
                return t;
            }
        } ]);
        return a;
    }(Lego.UI.Baseview);
    a.default = u;
}, function(e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: true
    });
    var t = function() {
        function e(e, a) {
            for (var t = 0; t < a.length; t++) {
                var n = a[t];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) n.writable = true;
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(a, t, n) {
            if (t) e(a.prototype, t);
            if (n) e(a, n);
            return a;
        };
    }();
    var n = r([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar1"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar2"></avatar>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <avatar id="avatar3"></avatar>\n            </div>\n            <div class="col-sm-6">\n              <avatar id="avatar4"></avatar>\n            </div>\n          </div>\n        </div>\n        ' ]);
    function r(e, a) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(a)
            }
        }));
    }
    function i(e, a) {
        if (!(e instanceof a)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function o(e, a) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return a && (typeof a === "object" || typeof a === "function") ? a : e;
    }
    function s(e, a) {
        if (typeof a !== "function" && a !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof a);
        }
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (a) Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a;
    }
    var u = function(e) {
        s(a, e);
        function a() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            i(this, a);
            var t = {
                components: [ {
                    el: "#avatar1",
                    name: "user",
                    multiple: false,
                    value: [ {
                        key: "userId",
                        value: "./asset/demo/avatar-4.jpg",
                        name: "张三"
                    } ],
                    onAdd: function e(a, t) {
                        console.warn("添加人员", t);
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
                    onAdd: function e(a, t) {
                        console.warn("添加人员2", t);
                    }
                }, {
                    el: "#avatar3",
                    name: "user",
                    multiple: false,
                    readonly: true,
                    value: [ {
                        key: "userId",
                        value: "./asset/demo/avatar-4.jpg",
                        name: "张三"
                    } ],
                    onAdd: function e(a, t) {
                        console.warn("添加人员", t);
                    }
                }, {
                    el: "#avatar4",
                    name: "users",
                    multiple: true,
                    readonly: true,
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
                    onAdd: function e(a, t) {
                        console.warn("添加人员2", t);
                    }
                } ]
            };
            Object.assign(t, e);
            return o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
        }
        t(a, [ {
            key: "render",
            value: function e() {
                var a = hx(n);
                return a;
            }
        } ]);
        return a;
    }(Lego.UI.Baseview);
    a.default = u;
} ]);