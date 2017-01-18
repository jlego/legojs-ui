(function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        e[i].call(o.exports, o, o.exports, n);
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
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var o = n(247);
        var r = l(o);
        var a = n(248);
        var s = l(a);
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
                    "/steps": [ this.index, this.tabs ],
                    "/steps/:tabs": [ this.index, this.tabs ]
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
    5: function(e, t) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var o = r([ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', '">\n            <span>', "</span>\n        </button>\n        " ]);
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
        var f = function(e) {
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
            i(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(o, t.htmlType, t.type, t.html || t.text);
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
        Lego.components("buttons", f);
        e.exports = f;
    },
    247: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var i = o([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/steps/0" class="', '">Steps 步骤条</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function o(e, t) {
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
                    currentTab: 0
                };
                Object.assign(n, e);
                return a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            n(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = hx(i, t.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    248: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var o = g([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps1"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button1"></buttons>\n              <buttons id="button2"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <steps id="steps2"></steps>\n            </div>\n            <div class="col-sm-6">\n              <buttons id="button3"></buttons>\n              <buttons id="button4"></buttons>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <reply id="reply1"></reply>\n            </div>\n            <div class="col-sm-6">\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample">\n                  <div class="card card-block">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n                <p>\n                  <button class="btn btn-primary" type="button" id="collapseBtn2">\n                    展开/折叠\n                  </button>\n                </p>\n                <div class="collapse" id="collapseExample2" style="display:block;overflow:hidden; height: 20px;">\n                  <div class="">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var r = n(249);
        var a = v(r);
        var s = n(5);
        var l = v(s);
        var f = n(250);
        var c = v(f);
        var u = n(251);
        var d = v(u);
        var p = n(252);
        var h = v(p);
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function g(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function m(e, t) {
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
        var w = function(e) {
            b(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                m(this, t);
                var n = {
                    events: {
                        "click #collapseBtn": function e(t) {
                            Lego.UI.collapse("#collapseExample", function(e, t) {
                                console.warn(e, t);
                            });
                        },
                        "click #collapseBtn2": function e(t) {
                            Lego.UI.collapse({
                                target: "#collapseExample2",
                                restHeight: 20,
                                onChange: function e(t, n) {
                                    console.warn(t, n);
                                }
                            });
                        }
                    },
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
                        onNext: function e(t, n) {
                            console.warn("下一步", n);
                        },
                        onPrevious: function e(t, n) {
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
                        onNext: function e(t, n) {
                            console.warn("下一步", n);
                        },
                        onPrevious: function e(t, n) {
                            console.warn("上一步", n);
                        }
                    }, {
                        el: "#button1",
                        text: "上一步",
                        onClick: function e(t) {
                            var n = Lego.getView("#steps1");
                            if (n) n.previous();
                        }
                    }, {
                        el: "#button2",
                        text: "下一步",
                        onClick: function e(t) {
                            var n = Lego.getView("#steps1");
                            if (n) n.next();
                        }
                    }, {
                        el: "#button3",
                        text: "上一步",
                        onClick: function e(t) {
                            var n = Lego.getView("#steps2");
                            if (n) n.previous();
                        }
                    }, {
                        el: "#button4",
                        text: "下一步",
                        onClick: function e(t) {
                            var n = Lego.getView("#steps2");
                            if (n) n.next();
                        }
                    }, {
                        el: "#reply1",
                        iconsUrl: "/example/dist/img/face_icons/",
                        onSubmit: function e(t, n) {
                            console.warn("回复框", t, n);
                        }
                    } ]
                };
                Object.assign(n, e);
                var i = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.$("#content").attr("contenteditable", true);
                return i;
            }
            i(t, [ {
                key: "render",
                value: function e() {
                    var t = hx(o);
                    return t;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = w;
    },
    249: function(e, t) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var o = c([ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ]);
        var r = c([ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);
        var a = c([ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ], [ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ]);
        var s = c([ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ], [ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ]);
        var l = c([ '<span class="lego-steps-icon">', "</span>" ], [ '<span class="lego-steps-icon">', "</span>" ]);
        var f = c([ '<div class="lego-steps-description">', "</div>" ], [ '<div class="lego-steps-description">', "</div>" ]);
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
                u(this, t);
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
                    onNext: function e() {},
                    onPrevious: function e() {}
                };
                Object.assign(n, e);
                return d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            i(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options, n = t.data.length, i = 10 / (n - 1) * 10;
                    var c = hx(o, t.direction, t.direction, !t.showNum ? "lego-steps-sm" : "", t.data.map(function(e, o) {
                        return hx(r, t.current == o ? t.status : e.status ? e.status : "wait", o == n - 1 ? "" : "width:" + i + "%;", t.titleWidth / 2, o < n ? hx(a, o == n - 1 ? "padding-right:" + t.titleWidth + "px" : "padding-right:" + t.titleWidth / 2 + "px") : "", t.showIcon ? hx(s, e.icon ? e.icon : e.status == "finish" ? "anticon-check" : "", e.status !== "finish" ? e.icon ? e.icon : t.showNum ? o + 1 : "" : "") : hx(l, t.showNum ? o + 1 : ""), val(e.title), t.showDescription ? hx(f, val(e.description)) : "");
                    }));
                    return c;
                }
            }, {
                key: "changeStatus",
                value: function e() {
                    var t = this.options;
                    if (t.current > t.data.length) t.current = t.data.length;
                    t.data.forEach(function(e, n) {
                        e.status = "wait";
                        if (n < t.current) e.status = "finish";
                        if (t.current == n) e.status = t.status;
                    });
                    this.refresh();
                }
            }, {
                key: "next",
                value: function e(t) {
                    var n = this.options;
                    n.current++;
                    this.changeStatus();
                    if (typeof n.onNext == "function") n.onNext(this, n.current);
                }
            }, {
                key: "previous",
                value: function e(t) {
                    var n = this.options;
                    n.current--;
                    this.changeStatus();
                    if (typeof n.onPrevious == "function") n.onPrevious(this, n.current);
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("steps", h);
        e.exports = h;
    },
    250: function(e, t) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var o = l([ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ]);
        var r = l([ '<i class="lego-facial-trigger">', "</i>" ], [ '<i class="lego-facial-trigger">', "</i>" ]);
        var a = l([ '<i class="lego-facial-trigger ', '"></i>' ], [ '<i class="lego-facial-trigger ', '"></i>' ]);
        var s = l([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ]);
        function l(e, t) {
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
        var d = function(e) {
            u(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                f(this, t);
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
                    direction: "top",
                    data: Lego.UI.Util.faceTags
                };
                Object.assign(n, e);
                var i = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.cursorPos = null;
                i.cursorContainer = null;
                return i;
            }
            i(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options, n = t.data.length, i = 10 / (n - 1) * 10;
                    var l = hx(o, t.text ? hx(r, val(t.text)) : hx(a, t.icon), t.direction ? "drop" + t.direction : "", t.data.map(function(e, n) {
                        return hx(s, t.itemClassPrefix, n, e, t.iconsUrl, t.itemClassPrefix, n);
                    }));
                    return l;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.$el, n = this, i = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    function o(e) {
                        $("body, .modal-body").trigger("click");
                        e.stopPropagation();
                        var i = Lego.UI.Util.getDirection($("body"), n.$el);
                        n.options.direction = i._y || "bottom";
                        n.show();
                        if (n.options.eventName == "hover") {
                            t.mouseleave(function() {
                                n.close();
                            });
                        }
                    }
                    if (this.options.eventName == "click") {
                        var r = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(r).on(r, function() {
                            n.close();
                        });
                        t.off(r).on(r, o);
                    } else {
                        t[this.options.eventName](o);
                    }
                    i.off("click keyup").on("click keyup", function(e) {
                        var t = $(e.currentTarget);
                        n.getCursorPos(t);
                    });
                }
            }, {
                key: "clickItem",
                value: function e(t) {
                    var n = $(t.currentTarget), i = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    this.addComma(i, n.attr("title"));
                    this.close();
                }
            }, {
                key: "show",
                value: function e(t) {
                    this.$el.addClass("dropdown open");
                }
            }, {
                key: "close",
                value: function e(t) {
                    this.$el.removeClass("dropdown open");
                }
            }, {
                key: "getCursorPos",
                value: function e(t) {
                    var n = void 0, i = void 0, o = this;
                    setTimeout(function() {
                        if (window.getSelection) {
                            n = window.getSelection();
                            i = n.getRangeAt(0);
                            o.cursorPos = i.startOffset;
                            o.cursorContainer = i.startContainer;
                        } else if (document.selection) {
                            n = document.selection;
                            i = n.createRange();
                            i.moveStart("character", -1);
                            o.cursorPos = i.text.length;
                        } else if (t.selectionStart || t.selectionStart == "0") {
                            o.cursorPos = t.selectionStart;
                        }
                    }, 0);
                }
            }, {
                key: "addComma",
                value: function e(t, n) {
                    var i = void 0, o = void 0, r = t[0], a = this;
                    r.focus();
                    if (!t.html().length) this.cursorPos = 0;
                    n = Lego.UI.Util.textToFace(n, this.options.iconsUrl + this.options.itemClassPrefix);
                    if (window.getSelection) {
                        i = window.getSelection();
                        o = i.getRangeAt(0);
                        o.collapse(false);
                        if (this.cursorPos) {
                            o.collapse(true);
                            o.setStart(this.cursorContainer, this.cursorPos);
                            o.setEnd(this.cursorContainer, this.cursorPos);
                        }
                        var s = o.createContextualFragment(n);
                        var l = s.lastChild;
                        o.insertNode(s);
                        if (l) {
                            o.setEndAfter(l);
                            o.setStartAfter(l);
                        }
                        this.cursorPos = o.startOffset;
                        this.cursorContainer = o.startContainer;
                        i.removeAllRanges();
                        i.addRange(o);
                    } else if (document.selection) {
                        i = document.selection;
                        o = i.createRange();
                        o.collapse(true);
                        o.setEnd(r, pos);
                        o.setStart(r, pos);
                        o.pasteHTML(n);
                        o.select();
                    }
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("facial", d);
        e.exports = d;
    },
    251: function(e, t) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var i = typeof Symbol === "function" && n(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : n(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : n(e);
        };
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var a = function() {
            function e(t, n) {
                r(this, e);
                var o = {
                    direction: "updown",
                    target: "",
                    restHeight: 0,
                    realHeight: "100%",
                    onChange: function e() {}
                };
                var a = this;
                this.callback = n;
                if ((typeof t === "undefined" ? "undefined" : i(t)) == "object") {
                    Object.assign(o, t);
                    this.options = o;
                    this.callback = o.onChange;
                    if (o.restHeight) {
                        this.showHide(o.target, "animate");
                    } else {
                        this.showHide(o.target, "slideToggle");
                    }
                }
                if (typeof t == "string") {
                    this.showHide(t, "slideToggle");
                }
            }
            o(e, [ {
                key: "showHide",
                value: function e(t, n) {
                    var i = this;
                    t = t instanceof $ ? t : $(t);
                    if (!t.length) return;
                    if (!t.hasClass("collapse")) t.addClass("collapse");
                    if (n == "animate") {
                        var o = parseInt(this.options.restHeight);
                        var r = !t.hasClass("show") ? {
                            height: this.options.realHeight
                        } : {
                            height: o
                        };
                        t[n](r, "normal", function() {
                            i.handler($(this));
                        });
                    } else {
                        t[n]("normal", function() {
                            i.handler($(this));
                        });
                    }
                }
            }, {
                key: "handler",
                value: function e(t) {
                    if (typeof this.callback == "function") {
                        var n = "";
                        if (t.hasClass("show")) {
                            n = "hide";
                            t.removeClass("show");
                        } else {
                            n = "show";
                            t.addClass("show");
                        }
                        this.callback(n, t);
                    }
                }
            } ]);
            return e;
        }();
        var s = function e(t, n) {
            return new a(t, n);
        };
        Lego.components("collapse", s);
        e.exports = s;
    },
    252: function(e, t, n) {
        "use strict";
        var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function o(e) {
            return e && (typeof e === "undefined" ? "undefined" : i(e)) === "object" && "default" in e ? e["default"] : e;
        }
        var r = o(n(253));
        var a = o(n(254));
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var l = d([ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ]);
        var f = d([ '<i class="lego-facial-trigger">', "</i>" ], [ '<i class="lego-facial-trigger">', "</i>" ]);
        var c = d([ '<i class="lego-facial-trigger ', '"></i>' ], [ '<i class="lego-facial-trigger ', '"></i>' ]);
        var u = d([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", "", '.gif" /></a></li>\n                ' ]);
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
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function v(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
                p(this, t);
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
                    direction: "top",
                    data: Lego.UI.Util.faceTags
                };
                Object.assign(n, e);
                var i = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.cursorPos = null;
                i.cursorContainer = null;
                return i;
            }
            s(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options, n = t.data.length, i = 10 / (n - 1) * 10;
                    var o = hx(l, t.text ? hx(f, val(t.text)) : hx(c, t.icon), t.direction ? "drop" + t.direction : "", t.data.map(function(e, n) {
                        return hx(u, t.itemClassPrefix, n, e, t.iconsUrl, t.itemClassPrefix, n);
                    }));
                    return o;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.$el, n = this, i = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    function o(e) {
                        $("body, .modal-body").trigger("click");
                        e.stopPropagation();
                        var i = Lego.UI.Util.getDirection($("body"), n.$el);
                        n.options.direction = i._y || "bottom";
                        n.show();
                        if (n.options.eventName == "hover") {
                            t.mouseleave(function() {
                                n.close();
                            });
                        }
                    }
                    if (this.options.eventName == "click") {
                        var r = "click.dropdown_" + this.options.vid;
                        $("body, .modal-body").off(r).on(r, function() {
                            n.close();
                        });
                        t.off(r).on(r, o);
                    } else {
                        t[this.options.eventName](o);
                    }
                    i.off("click keyup").on("click keyup", function(e) {
                        var t = $(e.currentTarget);
                        n.getCursorPos(t);
                    });
                }
            }, {
                key: "clickItem",
                value: function e(t) {
                    var n = $(t.currentTarget), i = this.options.target instanceof $ ? this.options.target : $(this.options.target);
                    this.addComma(i, n.attr("title"));
                    this.close();
                }
            }, {
                key: "show",
                value: function e(t) {
                    this.$el.addClass("dropdown open");
                }
            }, {
                key: "close",
                value: function e(t) {
                    this.$el.removeClass("dropdown open");
                }
            }, {
                key: "getCursorPos",
                value: function e(t) {
                    var n = void 0, i = void 0, o = this;
                    setTimeout(function() {
                        if (window.getSelection) {
                            n = window.getSelection();
                            i = n.getRangeAt(0);
                            o.cursorPos = i.startOffset;
                            o.cursorContainer = i.startContainer;
                        } else if (document.selection) {
                            n = document.selection;
                            i = n.createRange();
                            i.moveStart("character", -1);
                            o.cursorPos = i.text.length;
                        } else if (t.selectionStart || t.selectionStart == "0") {
                            o.cursorPos = t.selectionStart;
                        }
                    }, 0);
                }
            }, {
                key: "addComma",
                value: function e(t, n) {
                    var i = void 0, o = void 0, r = t[0], a = this;
                    r.focus();
                    if (!t.html().length) this.cursorPos = 0;
                    n = Lego.UI.Util.textToFace(n, this.options.iconsUrl + this.options.itemClassPrefix);
                    if (window.getSelection) {
                        i = window.getSelection();
                        o = i.getRangeAt(0);
                        o.collapse(false);
                        if (this.cursorPos) {
                            o.collapse(true);
                            o.setStart(this.cursorContainer, this.cursorPos);
                            o.setEnd(this.cursorContainer, this.cursorPos);
                        }
                        var s = o.createContextualFragment(n);
                        var l = s.lastChild;
                        o.insertNode(s);
                        if (l) {
                            o.setEndAfter(l);
                            o.setStartAfter(l);
                        }
                        this.cursorPos = o.startOffset;
                        this.cursorContainer = o.startContainer;
                        i.removeAllRanges();
                        i.addRange(o);
                    } else if (document.selection) {
                        i = document.selection;
                        o = i.createRange();
                        o.collapse(true);
                        o.setEnd(r, pos);
                        o.setStart(r, pos);
                        o.pasteHTML(n);
                        o.select();
                    }
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("facial", g);
        var m = function(e) {
            var t = false;
            var n = 1e6;
            var i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            function o(e) {
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
                for (var t in i) {
                    if (e.style[t] !== undefined) {
                        return {
                            end: i[t]
                        };
                    }
                }
                return false;
            }
            function l(t) {
                var n = this;
                var i = false;
                e(this).one(c.TRANSITION_END, function() {
                    i = true;
                });
                setTimeout(function() {
                    if (!i) {
                        c.triggerTransitionEnd(n);
                    }
                }, t);
                return this;
            }
            function f() {
                t = s();
                e.fn.emulateTransitionEnd = l;
                if (c.supportsTransitionEnd()) {
                    e.event.special[c.TRANSITION_END] = a();
                }
            }
            var c = {
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
                triggerTransitionEnd: function n(i) {
                    e(i).trigger(t.end);
                },
                supportsTransitionEnd: function e() {
                    return Boolean(t);
                },
                typeCheckConfig: function e(t, n, i) {
                    for (var a in i) {
                        if (i.hasOwnProperty(a)) {
                            var s = i[a];
                            var l = n[a];
                            var f = void 0;
                            if (l && r(l)) {
                                f = "element";
                            } else {
                                f = o(l);
                            }
                            if (!new RegExp(s).test(f)) {
                                throw new Error(t.toUpperCase() + ": " + ('Option "' + a + '" provided type "' + f + '" ') + ('but expected type "' + s + '".'));
                            }
                        }
                    }
                }
            };
            f();
            return c;
        }(jQuery);
        var y = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : i(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : i(e);
        };
        var b = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        function w(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        window.Tether = r;
        var O = function(e) {
            if (window.Tether === undefined) {
                throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            }
            var t = "tooltip";
            var n = "4.0.0-alpha.5";
            var i = "bs.tooltip";
            var o = "." + i;
            var a = e.fn[t];
            var s = 150;
            var l = "bs-tether";
            var f = {
                animation: true,
                template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: false,
                selector: false,
                placement: "top",
                offset: "0 0",
                constraints: []
            };
            var c = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array"
            };
            var u = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            };
            var d = {
                IN: "in",
                OUT: "out"
            };
            var p = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                INSERTED: "inserted" + o,
                CLICK: "click" + o,
                FOCUSIN: "focusin" + o,
                FOCUSOUT: "focusout" + o,
                MOUSEENTER: "mouseenter" + o,
                MOUSELEAVE: "mouseleave" + o
            };
            var h = {
                FADE: "fade",
                IN: "in"
            };
            var v = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            };
            var g = {
                element: false,
                enabled: false
            };
            var O = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            };
            var E = function() {
                function a(e, t) {
                    w(this, a);
                    this._isEnabled = true;
                    this._timeout = 0;
                    this._hoverState = "";
                    this._activeTrigger = {};
                    this._tether = null;
                    this.element = e;
                    this.config = this._getConfig(t);
                    this.tip = null;
                    this._setListeners();
                }
                b(a, [ {
                    key: "enable",
                    value: function e() {
                        this._isEnabled = true;
                    }
                }, {
                    key: "disable",
                    value: function e() {
                        this._isEnabled = false;
                    }
                }, {
                    key: "toggleEnabled",
                    value: function e() {
                        this._isEnabled = !this._isEnabled;
                    }
                }, {
                    key: "toggle",
                    value: function t(n) {
                        if (n) {
                            var i = this.constructor.DATA_KEY;
                            var o = e(n.currentTarget).data(i);
                            if (!o) {
                                o = new this.constructor(n.currentTarget, this._getDelegateConfig());
                                e(n.currentTarget).data(i, o);
                            }
                            o._activeTrigger.click = !o._activeTrigger.click;
                            if (o._isWithActiveTrigger()) {
                                o._enter(null, o);
                            } else {
                                o._leave(null, o);
                            }
                        } else {
                            if (e(this.getTipElement()).hasClass(h.IN)) {
                                this._leave(null, this);
                                return;
                            }
                            this._enter(null, this);
                        }
                    }
                }, {
                    key: "dispose",
                    value: function t() {
                        clearTimeout(this._timeout);
                        this.cleanupTether();
                        e.removeData(this.element, this.constructor.DATA_KEY);
                        e(this.element).off(this.constructor.EVENT_KEY);
                        if (this.tip) {
                            e(this.tip).remove();
                        }
                        this._isEnabled = null;
                        this._timeout = null;
                        this._hoverState = null;
                        this._activeTrigger = null;
                        this._tether = null;
                        this.element = null;
                        this.config = null;
                        this.tip = null;
                    }
                }, {
                    key: "show",
                    value: function t() {
                        var n = this;
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var o = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !o) {
                                return;
                            }
                            var s = this.getTipElement();
                            var f = m.getUID(this.constructor.NAME);
                            s.setAttribute("id", f);
                            this.element.setAttribute("aria-describedby", f);
                            this.setContent();
                            if (this.config.animation) {
                                e(s).addClass(h.FADE);
                            }
                            var c = typeof this.config.placement === "function" ? this.config.placement.call(this, s, this.element) : this.config.placement;
                            var u = this._getAttachment(c);
                            e(s).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                            e(this.element).trigger(this.constructor.Event.INSERTED);
                            this._tether = new r({
                                attachment: u,
                                element: s,
                                target: this.element,
                                classes: g,
                                classPrefix: l,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: false
                            });
                            m.reflow(s);
                            this._tether.position();
                            e(s).addClass(h.IN);
                            var p = function t() {
                                var i = n._hoverState;
                                n._hoverState = null;
                                e(n.element).trigger(n.constructor.Event.SHOWN);
                                if (i === d.OUT) {
                                    n._leave(null, n);
                                }
                            };
                            if (m.supportsTransitionEnd() && e(this.tip).hasClass(h.FADE)) {
                                e(this.tip).one(m.TRANSITION_END, p).emulateTransitionEnd(a._TRANSITION_DURATION);
                                return;
                            }
                            p();
                        }
                    }
                }, {
                    key: "hide",
                    value: function t(n) {
                        var i = this;
                        var o = this.getTipElement();
                        var r = e.Event(this.constructor.Event.HIDE);
                        var a = function t() {
                            if (i._hoverState !== d.IN && o.parentNode) {
                                o.parentNode.removeChild(o);
                            }
                            i.element.removeAttribute("aria-describedby");
                            e(i.element).trigger(i.constructor.Event.HIDDEN);
                            i.cleanupTether();
                            if (n) {
                                n();
                            }
                        };
                        e(this.element).trigger(r);
                        if (r.isDefaultPrevented()) {
                            return;
                        }
                        e(o).removeClass(h.IN);
                        if (m.supportsTransitionEnd() && e(this.tip).hasClass(h.FADE)) {
                            e(o).one(m.TRANSITION_END, a).emulateTransitionEnd(s);
                        } else {
                            a();
                        }
                        this._hoverState = "";
                    }
                }, {
                    key: "isWithContent",
                    value: function e() {
                        return Boolean(this.getTitle());
                    }
                }, {
                    key: "getTipElement",
                    value: function t() {
                        return this.tip = this.tip || e(this.config.template)[0];
                    }
                }, {
                    key: "setContent",
                    value: function t() {
                        var n = e(this.getTipElement());
                        this.setElementContent(n.find(v.TOOLTIP_INNER), this.getTitle());
                        n.removeClass(h.FADE).removeClass(h.IN);
                        this.cleanupTether();
                    }
                }, {
                    key: "setElementContent",
                    value: function t(n, i) {
                        var o = this.config.html;
                        if ((typeof i === "undefined" ? "undefined" : y(i)) === "object" && (i.nodeType || i.jquery)) {
                            if (o) {
                                if (!e(i).parent().is(n)) {
                                    n.empty().append(i);
                                }
                            } else {
                                n.text(e(i).text());
                            }
                        } else {
                            n[o ? "html" : "text"](i);
                        }
                    }
                }, {
                    key: "getTitle",
                    value: function e() {
                        var t = this.element.getAttribute("data-original-title");
                        if (!t) {
                            t = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                        }
                        return t;
                    }
                }, {
                    key: "cleanupTether",
                    value: function e() {
                        if (this._tether) {
                            this._tether.destroy();
                        }
                    }
                }, {
                    key: "_getAttachment",
                    value: function e(t) {
                        return u[t.toUpperCase()];
                    }
                }, {
                    key: "_setListeners",
                    value: function t() {
                        var n = this;
                        var i = this.config.trigger.split(" ");
                        i.forEach(function(t) {
                            if (t === "click") {
                                e(n.element).on(n.constructor.Event.CLICK, n.config.selector, e.proxy(n.toggle, n));
                            } else if (t !== O.MANUAL) {
                                var i = t === O.HOVER ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN;
                                var o = t === O.HOVER ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                                e(n.element).on(i, n.config.selector, e.proxy(n._enter, n)).on(o, n.config.selector, e.proxy(n._leave, n));
                            }
                        });
                        if (this.config.selector) {
                            this.config = e.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            });
                        } else {
                            this._fixTitle();
                        }
                    }
                }, {
                    key: "_fixTitle",
                    value: function e() {
                        var t = y(this.element.getAttribute("data-original-title"));
                        if (this.element.getAttribute("title") || t !== "string") {
                            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                            this.element.setAttribute("title", "");
                        }
                    }
                }, {
                    key: "_enter",
                    value: function t(n, i) {
                        var o = this.constructor.DATA_KEY;
                        i = i || e(n.currentTarget).data(o);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            e(n.currentTarget).data(o, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusin" ? O.FOCUS : O.HOVER] = true;
                        }
                        if (e(i.getTipElement()).hasClass(h.IN) || i._hoverState === d.IN) {
                            i._hoverState = d.IN;
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = d.IN;
                        if (!i.config.delay || !i.config.delay.show) {
                            i.show();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === d.IN) {
                                i.show();
                            }
                        }, i.config.delay.show);
                    }
                }, {
                    key: "_leave",
                    value: function t(n, i) {
                        var o = this.constructor.DATA_KEY;
                        i = i || e(n.currentTarget).data(o);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            e(n.currentTarget).data(o, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusout" ? O.FOCUS : O.HOVER] = false;
                        }
                        if (i._isWithActiveTrigger()) {
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = d.OUT;
                        if (!i.config.delay || !i.config.delay.hide) {
                            i.hide();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === d.OUT) {
                                i.hide();
                            }
                        }, i.config.delay.hide);
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function e() {
                        for (var t in this._activeTrigger) {
                            if (this._activeTrigger[t]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: "_getConfig",
                    value: function n(i) {
                        i = e.extend({}, this.constructor.Default, e(this.element).data(), i);
                        if (i.delay && typeof i.delay === "number") {
                            i.delay = {
                                show: i.delay,
                                hide: i.delay
                            };
                        }
                        m.typeCheckConfig(t, i, this.constructor.DefaultType);
                        return i;
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function e() {
                        var t = {};
                        if (this.config) {
                            for (var n in this.config) {
                                if (this.constructor.Default[n] !== this.config[n]) {
                                    t[n] = this.config[n];
                                }
                            }
                        }
                        return t;
                    }
                } ], [ {
                    key: "_jQueryInterface",
                    value: function t(n) {
                        return this.each(function() {
                            var t = e(this).data(i);
                            var o = (typeof n === "undefined" ? "undefined" : y(n)) === "object" ? n : null;
                            if (!t && /dispose|hide/.test(n)) {
                                return;
                            }
                            if (!t) {
                                t = new a(this, o);
                                e(this).data(i, t);
                            }
                            if (typeof n === "string") {
                                if (t[n] === undefined) {
                                    throw new Error('No method named "' + n + '"');
                                }
                                t[n]();
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
                        return f;
                    }
                }, {
                    key: "NAME",
                    get: function e() {
                        return t;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function e() {
                        return i;
                    }
                }, {
                    key: "Event",
                    get: function e() {
                        return p;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function e() {
                        return o;
                    }
                }, {
                    key: "DefaultType",
                    get: function e() {
                        return c;
                    }
                } ]);
                return a;
            }();
            e.fn[t] = E._jQueryInterface;
            e.fn[t].Constructor = E;
            e.fn[t].noConflict = function() {
                e.fn[t] = a;
                return E._jQueryInterface;
            };
            return E;
        }(jQuery);
        var E = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : i(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : i(e);
        };
        var C = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        function T(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function x(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function k(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var _ = function(e) {
            var t = "popover";
            var n = "4.0.0-alpha.5";
            var i = "bs.popover";
            var o = "." + i;
            var r = e.fn[t];
            var a = e.extend({}, O.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
            });
            var s = e.extend({}, O.DefaultType, {
                content: "(string|element|function)"
            });
            var l = {
                FADE: "fade",
                IN: "in"
            };
            var f = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            };
            var c = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                INSERTED: "inserted" + o,
                CLICK: "click" + o,
                FOCUSIN: "focusin" + o,
                FOCUSOUT: "focusout" + o,
                MOUSEENTER: "mouseenter" + o,
                MOUSELEAVE: "mouseleave" + o
            };
            var u = function(r) {
                k(u, r);
                function u() {
                    T(this, u);
                    return x(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
                }
                C(u, [ {
                    key: "isWithContent",
                    value: function e() {
                        return this.getTitle() || this._getContent();
                    }
                }, {
                    key: "getTipElement",
                    value: function t() {
                        return this.tip = this.tip || e(this.config.template)[0];
                    }
                }, {
                    key: "setContent",
                    value: function t() {
                        var n = e(this.getTipElement());
                        this.setElementContent(n.find(f.TITLE), this.getTitle());
                        this.setElementContent(n.find(f.CONTENT), this._getContent());
                        n.removeClass(l.FADE).removeClass(l.IN);
                        this.cleanupTether();
                    }
                }, {
                    key: "_getContent",
                    value: function e() {
                        return this.element.getAttribute("data-content") || (typeof this.config.content === "function" ? this.config.content.call(this.element) : this.config.content);
                    }
                } ], [ {
                    key: "_jQueryInterface",
                    value: function t(n) {
                        return this.each(function() {
                            var t = e(this).data(i);
                            var o = (typeof n === "undefined" ? "undefined" : E(n)) === "object" ? n : null;
                            if (!t && /destroy|hide/.test(n)) {
                                return;
                            }
                            if (!t) {
                                t = new u(this, o);
                                e(this).data(i, t);
                            }
                            if (typeof n === "string") {
                                if (t[n] === undefined) {
                                    throw new Error('No method named "' + n + '"');
                                }
                                t[n]();
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
                        return a;
                    }
                }, {
                    key: "NAME",
                    get: function e() {
                        return t;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function e() {
                        return i;
                    }
                }, {
                    key: "Event",
                    get: function e() {
                        return c;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function e() {
                        return o;
                    }
                }, {
                    key: "DefaultType",
                    get: function e() {
                        return s;
                    }
                } ]);
                return u;
            }(O);
            e.fn[t] = u._jQueryInterface;
            e.fn[t].Constructor = u;
            e.fn[t].noConflict = function() {
                e.fn[t] = r;
                return u._jQueryInterface;
            };
            return u;
        }(jQuery);
        var j = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        function S(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var P = function() {
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                S(this, e);
                var n = {
                    el: "",
                    selector: false,
                    title: "",
                    content: "",
                    animation: true,
                    container: false,
                    delay: 0,
                    html: false,
                    placement: "right",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                    eventName: "click",
                    constraints: [],
                    offset: "0 0",
                    onHidden: function e() {}
                };
                Object.assign(n, t);
                this.el = n.el;
                this.onHidden = n.onHidden;
                this.options = {
                    selector: n.selector,
                    title: n.title,
                    content: n.content,
                    animation: n.animation,
                    container: n.container,
                    delay: n.delay,
                    html: n.html,
                    placement: n.placement,
                    template: n.template,
                    constraints: n.constraints,
                    trigger: n.eventName,
                    offset: n.offset
                };
                this.render();
            }
            j(e, [ {
                key: "render",
                value: function e() {
                    var t = this;
                    var n = this.el instanceof $ ? this.el : $(this.el);
                    if (n.length) {
                        n.popover(this.options);
                        n.on("hidden.bs.popover", function() {
                            if (typeof t.onHidden === "function") t.onHidden(event);
                        });
                    }
                    return n;
                }
            } ]);
            return e;
        }();
        var I = function e(t) {
            return new P(t);
        };
        Lego.components("popover", I);
        var A = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        function U(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function L(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function N(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var D = function(e) {
            N(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                U(this, t);
                var n = {
                    uploadUri: "",
                    downloadUri: Lego.config.downloadUri || "",
                    percent: 0,
                    isAuto: true,
                    file: null,
                    headers: {},
                    params: {},
                    onBegin: function e() {},
                    onProgress: function e() {},
                    onComplete: function e() {},
                    onFail: function e() {},
                    onCancel: function e() {},
                    needToken: false
                };
                Object.assign(n, e);
                var i = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.xhr = o();
                i.startDate = 0;
                i.form = null;
                function o() {
                    var e;
                    if (window.XMLHttpRequest) {
                        e = new XMLHttpRequest();
                        if (e.overrideMimeType) {
                            e.overrideMimeType("text/xml");
                        }
                    } else if (window.ActiveXObject) {
                        var t = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];
                        for (var n = 0; n < t.length; n++) {
                            try {
                                e = new ActiveXObject(t[n]);
                                if (e) {
                                    break;
                                }
                            } catch (e) {}
                        }
                    }
                    return e;
                }
                if (i.options.percent == 0) {
                    if (i.options.needToken && i.options.params.token || !i.options.needToken) {
                        i.uploadInit();
                        if (i.options.isAuto) i.start();
                    }
                }
                return i;
            }
            A(t, [ {
                key: "uploadInit",
                value: function e() {
                    var t = this;
                    var n = 0, i = this.options.file, o = this.options.params;
                    this.xhr.crossDomain = true;
                    i.id = i.id || Lego.randomKey(32);
                    var r = this["progressbar_" + this.options.vid];
                    this.form = new FormData();
                    this.form.append("file", i);
                    if (!Object.values(o).length) {
                        for (var a in o) {
                            this.form.append(a, o[a]);
                        }
                    }
                    this.xhr.upload.addEventListener("progress", function(e) {
                        if (e.lengthComputable) {
                            var i = new Date().getTime();
                            n = i - t.startDate;
                            var o = e.loaded / 1024, a = n / 1e3, s = o / a, l = void 0;
                            if (s > 1024) {
                                l = (s / 1024).toFixed(2) + "Mb/s";
                            } else {
                                l = s.toFixed(2) + "Kb/s";
                            }
                            var f = Math.round(e.loaded * 100 / e.total);
                            if (r) {
                                r.options.percent = f;
                            } else {
                                t.options.percent = f;
                            }
                        }
                        if (typeof t.options.onProgress == "function") {
                            t.options.onProgress(t);
                        }
                    }, false);
                    this.xhr.addEventListener("loadstart", function(e) {
                        if (typeof t.options.onBegin == "function") {
                            t.options.onBegin(i, t);
                        }
                    }, false);
                    this.xhr.addEventListener("load", function(e) {
                        if (t.xhr.readyState == 4 && t.xhr.status == 200 && t.xhr.responseText != "") {
                            var n = JSON.parse(t.xhr.response);
                            Object.assign(t.options.file, n);
                            if (t.options.params.key) {
                                t.options.file.url = t.options.downloadUri + t.options.key;
                            }
                            if (r) {
                                r.options.percent = 100;
                            } else {
                                t.options.percent = 100;
                            }
                            if (typeof t.options.onComplete == "function") {
                                t.options.onComplete(t, n);
                            }
                        } else if (t.xhr.status != 200 && t.xhr.responseText) {
                            var i = {
                                status: "error",
                                data: "Unknown error occurred: [" + t.xhr.responseText + "]"
                            };
                            if (typeof t.options.onFail == "function") {
                                t.options.onFail(t, i);
                            }
                        }
                    }, false);
                    this.xhr.addEventListener("error", function(e) {
                        debug.error("上传失败");
                        if (typeof t.options.onFail == "function") {
                            t.options.onFail(t, e);
                        }
                        t.remove();
                    }, false);
                    this.xhr.addEventListener("abort", function(e) {
                        debug.error("取消上传");
                        if (typeof t.options.onCancel == "function") {
                            t.options.onCancel(t, e);
                        }
                        t.remove();
                    }, false);
                    this.xhr.open("POST", this.options.uploadUri, true);
                    for (var s in this.options.headers) {
                        this.xhr.setRequestHeader(s, this.options.headers[s]);
                    }
                }
            }, {
                key: "cancel",
                value: function e() {
                    this.xhr.abort();
                }
            }, {
                key: "start",
                value: function e() {
                    this.startDate = new Date().getTime();
                    this.xhr.send(this.form);
                }
            } ]);
            return t;
        }(Lego.View);
        var R = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var H = F([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);
        var M = F([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);
        function F(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function B(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function z(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function W(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var Y = function(e) {
            W(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                B(this, t);
                var n = {
                    type: "",
                    status: "",
                    showInfo: true,
                    percent: 0,
                    strokeWidth: 6,
                    onComplete: function e() {}
                };
                Object.assign(n, e);
                return z(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            R(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    if (t.percent == 100) {
                        if (typeof t.onComplete == "function") t.onComplete(this);
                    }
                    var n = hx(H, t.showInfo ? hx(M, this.format(t.percent)) : "", t.status ? t.status : "primary", t.percent);
                    return n;
                }
            }, {
                key: "format",
                value: function e(t) {
                    if (typeof this.options.format == "function") {
                        return this.options.format(t);
                    } else {
                        return t + "%";
                    }
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("progressbar", Y);
        var q = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var V = G([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);
        var X = G([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);
        var K = G([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);
        var Q = G([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ]);
        function G(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function J(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function Z(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function ee(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var te = function(e) {
            ee(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                J(this, t);
                var n = {
                    events: {
                        "click .lego-cancelbtn": "onCancel",
                        "click .lego-closebtn": "onRemove"
                    },
                    uploadUri: "",
                    percent: 0,
                    isAuto: true,
                    readonly: false,
                    file: {},
                    headers: {},
                    params: {},
                    onBegin: function e() {},
                    onProgress: function e() {},
                    onComplete: function e() {},
                    onFail: function e() {},
                    onCancel: function e() {}
                };
                Object.assign(n, e);
                return Z(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            q(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(V, Lego.UI.Util.getFileIcon(t.file.name), t.percent < 100 ? hx(X, val(t.file.name), "progressbar_" + t.vid) : hx(K, !t.readonly && t.percent == 100 ? hx(Q) : "", val(t.file.name), Lego.UI.Util.convertByteUnit(t.file.size), val(t.file.url), val(t.file.name)));
                    return n;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.options;
                    if (t.percent < 100) {
                        this.progressbar = Lego.create(Y, {
                            el: this.$("#progressbar_" + t.vid),
                            showInfo: false,
                            status: "success",
                            onComplete: function e() {
                                t.percent = 100;
                            }
                        });
                    }
                }
            }, {
                key: "onCancel",
                value: function e(t) {
                    var n = this;
                    t.stopPropagation();
                    this.cancel();
                    this.$el.slideUp("normal", function() {
                        n.remove();
                    });
                }
            }, {
                key: "onRemove",
                value: function e(t) {
                    var n = this;
                    t.stopPropagation();
                    var i = $(t.currentTarget), o = i.data("id"), r = i.data("hash");
                    if (this.options.onRemove) {
                        return this.options.onRemove(o, r);
                    }
                    this.$el.slideUp("normal", function() {
                        n.remove();
                    });
                }
            } ]);
            return t;
        }(D);
        var ne = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : i(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : i(e);
        };
        var ie = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var oe = se([ '\n        <div class="lego-upload lego-upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);
        var re = se([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ]);
        var ae = se([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);
        function se(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function le(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function fe(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function ce(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var ue = function(e) {
            ce(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                le(this, t);
                var n = {
                    events: {
                        "click .lego-addbtn": "onClickAdd"
                    },
                    keyRoot: "",
                    type: "file",
                    buttonText: "添加附件",
                    name: "",
                    token: "",
                    params: {},
                    uploadUri: window.location.protocol === "https:" ? "https://up.qbox.me" : "http://upload.qiniu.com",
                    saveUri: "",
                    accept: "",
                    previewOption: null,
                    multiple: true,
                    context: null,
                    template: "",
                    maxFileSize: "5mb",
                    maxFilesCount: 9,
                    isAuto: true,
                    readonly: false,
                    disabled: false,
                    hasCookie: false,
                    showUploadList: true,
                    value: [],
                    onAddFile: function e() {},
                    onBegin: function e() {},
                    onProgress: function e() {},
                    onComplete: function e() {},
                    onFail: function e() {},
                    onCancel: function e() {}
                };
                Object.assign(n, e);
                if (n.value.length) {
                    n.value = n.value.map(function(e) {
                        return {
                            readonly: n.readonly,
                            percent: 100,
                            file: e
                        };
                    });
                }
                var i = fe(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.reset();
                i.$(".fileInput").on("change", function(e) {
                    var t = $(e.currentTarget)[0];
                    i.uploadInit(t.files);
                });
                if (i.options.value.length) {
                    i.options.value.forEach(function(e, t) {
                        i.showItem(e);
                    });
                }
                return i;
            }
            ie(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = "";
                    n = hx(oe, val(t.type), !t.readonly ? hx(re, t.disabled ? "disabled" : "", val(t.buttonText)) : "", this.getValue(), val(t.name), val(t.accept), t.showUploadList ? hx(ae) : "");
                    return t.template ? t.template : n;
                }
            }, {
                key: "uploadInit",
                value: function e(t) {
                    var n = [];
                    if ((typeof t === "undefined" ? "undefined" : ne(t)) == "object" && t[0]) {
                        n = Array.prototype.slice.call(t, 0);
                    } else {
                        n = [ t ];
                    }
                    var i = this, o = this.options, r = n.length, s = o.maxFilesCount;
                    if (r) {
                        if (r > s) {
                            Lego.UI.message("warning", "只能上传" + s + "张图片");
                            return;
                        }
                        this.fileList.concat(n);
                        this.fileList = this.fileList.slice(0, s);
                        if (typeof o.onAddFile == "function") o.onAddFile(this.fileList, n);
                        n.forEach(function(e, t) {
                            e.id = Lego.randomKey(32);
                            if (Math.ceil(e.size / (1024 * 1024)) > parseInt(o.maxFileSize)) {
                                var r = "发送文件最大为" + o.maxFileSize;
                                if (n.length == 1) {
                                    Lego.UI.message("error", r);
                                } else {
                                    debug.warn(r);
                                }
                                return;
                            }
                            if (i.fileList.find(function(t) {
                                return t == e;
                            })) return;
                            var s = {
                                uploadUri: o.uploadUri,
                                readonly: o.readonly,
                                isAuto: o.isAuto,
                                file: e,
                                type: o.type,
                                percent: 0,
                                params: Object.assign({
                                    key: o.key || i.getKey(e.name),
                                    token: typeof o.data == "string" ? o.data : ""
                                }, o.params),
                                needToken: true,
                                onBegin: o.onBegin,
                                onProgress: o.onProgress,
                                onComplete: o.onComplete || function(e, t) {
                                    t.url = Lego.config.downloadUri + t.key;
                                    $.ajax({
                                        url: Lego.config.saveUri,
                                        type: "POST",
                                        dataType: "json",
                                        data: t,
                                        success: function e(t) {
                                            var n = o.value.find(function(e) {
                                                return e.file.hash == t.data.hash;
                                            });
                                            if (n) {
                                                if (t.data.id) n.id = t.data.id;
                                            } else {
                                                o.value.push({
                                                    file: t.data,
                                                    type: o.type,
                                                    percent: 100
                                                });
                                                i.refresh();
                                            }
                                        },
                                        error: function e(t) {
                                            debug.error(t);
                                        }
                                    });
                                },
                                onFail: o.onFail,
                                onCancel: o.onCancel
                            };
                            if (o.previewOption) {
                                s.previewOption = o.previewOption;
                                s.isAuto = false;
                                a(e, Object.assign(o.previewOption, {
                                    success: function e(t) {
                                        s.previewImgSrc = t.blob;
                                        var n = i.showItem(s);
                                        n.sendUpload();
                                    }
                                }));
                            } else {
                                i.showItem(s);
                            }
                        });
                    } else {
                        debug && debug.log("form input error");
                    }
                }
            }, {
                key: "getKey",
                value: function e(t) {
                    return this.options.keyRoot + Lego.UI.Util.uuid() + "." + Lego.UI.Util.getExtName(t);
                }
            }, {
                key: "onClickAdd",
                value: function e(t) {
                    this.$(".lego-fileInput").click();
                }
            }, {
                key: "showItem",
                value: function e(t) {
                    var n = Lego.create(te, t);
                    var i = this.$(".lego-upload-container");
                    if (i.length && n) {
                        if (this.options.multiple) {
                            i.append(n.el);
                        } else {
                            i.html(n.el);
                        }
                    }
                    n.renderAfter();
                    return n;
                }
            }, {
                key: "getValue",
                value: function e() {
                    var t = [];
                    if (this.options.value.length) {
                        t = this.options.value.map(function(e) {
                            return e.file.id;
                        });
                    }
                    return t.join(",");
                }
            }, {
                key: "reset",
                value: function e() {
                    this.fileList = [];
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("upload", ue);
        var de = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t;
            };
        }();
        var pe = ge([ '\n        <div class="lego-reply">\n            <p class="lego-reply-content" id="content-', '"><span class="lego-reply-ph">', '</span></p>\n            <button type="button" class="btn btn-primary lego-reply-submit">', '</button>\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="lego-reply">\n            <p class="lego-reply-content" id="content-', '"><span class="lego-reply-ph">', '</span></p>\n            <button type="button" class="btn btn-primary lego-reply-submit">', '</button>\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ]);
        var he = ge([ '<facial id="facial-', '"></facial>' ], [ '<facial id="facial-', '"></facial>' ]);
        var ve = ge([ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ], [ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ]);
        function ge(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function me(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function ye(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function be(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : i(t)));
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
        var we = function(e) {
            be(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                me(this, t);
                var n = {
                    events: {
                        "focus .lego-reply-content": "onFocus",
                        "blur .lego-reply-content": "onblur",
                        "click .lego-reply-submit": "onSubmit",
                        "click .lego-reply-annex": "showUpload",
                        "click .popover-title i": "showUpload",
                        "keydown .lego-reply-content": "_enterSearch"
                    },
                    placeholder: "请输入回复内容",
                    contentHeight: 70,
                    showFacial: true,
                    showUpload: true,
                    uploadDataSource: null,
                    iconsUrl: "",
                    submitText: "回复",
                    onSubmit: function e() {},
                    onUploaded: function e() {},
                    components: []
                };
                Object.assign(n, e);
                if (n.showFacial) {
                    n.components.push({
                        el: "#facial-" + n.vid,
                        target: "#content-" + n.vid,
                        iconsUrl: n.iconsUrl
                    });
                }
                if (n.showUpload) {
                    n.components.push({
                        el: "#upload-" + n.vid,
                        dataSource: n.uploadDataSource,
                        onComplete: function e(t, i) {
                            if (typeof n.onUploaded == "function") n.onUploaded(t, i);
                        }
                    });
                }
                var i = ye(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.placeholder = '<span class="lego-reply-ph">' + i.options.placeholder + "</span>";
                return i;
            }
            de(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = hx(pe, t.vid, val(t.placeholder), val(t.submitText), t.showFacial ? hx(he, t.vid) : "", t.showUpload ? hx(ve, t.vid) : "", t.vid);
                    return n;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    this.$(".lego-reply-content").attr("contenteditable", "true").height(this.options.contentHeight);
                }
            }, {
                key: "onFocus",
                value: function e(t) {
                    var n = $(t.currentTarget);
                    if (n.find(".lego-reply-ph").length) n.html("");
                }
            }, {
                key: "onblur",
                value: function e(t) {
                    var n = $(t.currentTarget), i = this.options;
                    if (!n.text() && !n.find("img").length) n.html(this.placeholder);
                }
            }, {
                key: "showUpload",
                value: function e(t) {
                    this.$(".popover").toggleClass("show");
                }
            }, {
                key: "_enterSearch",
                value: function e(t) {
                    var n = $(t.currentTarget);
                    if (t.which === 13) {
                        if (!t.ctrlKey) {
                            this.onSubmit(t);
                        }
                        if (t.ctrlKey) {
                            Lego.UI.Util.insertText(n, Lego.UI.Util.checkBrowser().mozilla ? "<br>" : "<br><br>");
                        }
                    }
                }
            }, {
                key: "onSubmit",
                value: function e(t) {
                    t.stopPropagation();
                    var n = this.$(".lego-reply-content");
                    var i = n.html();
                    i = Lego.UI.Util.faceToText(i, this.options.iconsUrl);
                    n.html(this.placeholder);
                    i = i == this.placeholder ? "" : i;
                    if (typeof this.options.onSubmit == "function") this.options.onSubmit(this, i);
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        Lego.components("reply", we);
        e.exports = we;
    },
    253: function(e, t, n) {
        var i, o;
        (function(r, a) {
            if (true) {
                !(i = a, o = typeof i === "function" ? i.call(t, n, t, e) : i, o !== undefined && (e.exports = o));
            } else if (typeof t === "object") {
                e.exports = a(require, t, e);
            } else {
                r.Tether = a();
            }
        })(this, function(e, t, n) {
            "use strict";
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || false;
                        i.configurable = true;
                        if ("value" in i) i.writable = true;
                        Object.defineProperty(e, i.key, i);
                    }
                }
                return function(t, n, i) {
                    if (n) e(t.prototype, n);
                    if (i) e(t, i);
                    return t;
                };
            }();
            function o(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var r = undefined;
            if (typeof r === "undefined") {
                r = {
                    modules: []
                };
            }
            var a = null;
            function s(e) {
                var t = e.getBoundingClientRect();
                var n = {};
                for (var i in t) {
                    n[i] = t[i];
                }
                if (e.ownerDocument !== document) {
                    var o = e.ownerDocument.defaultView.frameElement;
                    if (o) {
                        var r = s(o);
                        n.top += r.top;
                        n.bottom += r.top;
                        n.left += r.left;
                        n.right += r.left;
                    }
                }
                return n;
            }
            function l(e) {
                var t = getComputedStyle(e) || {};
                var n = t.position;
                var i = [];
                if (n === "fixed") {
                    return [ e ];
                }
                var o = e;
                while ((o = o.parentNode) && o && o.nodeType === 1) {
                    var r = undefined;
                    try {
                        r = getComputedStyle(o);
                    } catch (e) {}
                    if (typeof r === "undefined" || r === null) {
                        i.push(o);
                        return i;
                    }
                    var a = r;
                    var s = a.overflow;
                    var l = a.overflowX;
                    var f = a.overflowY;
                    if (/(auto|scroll)/.test(s + f + l)) {
                        if (n !== "absolute" || [ "relative", "absolute", "fixed" ].indexOf(r.position) >= 0) {
                            i.push(o);
                        }
                    }
                }
                i.push(e.ownerDocument.body);
                if (e.ownerDocument !== document) {
                    i.push(e.ownerDocument.defaultView);
                }
                return i;
            }
            var f = function() {
                var e = 0;
                return function() {
                    return ++e;
                };
            }();
            var c = {};
            var u = function e() {
                var t = a;
                if (!t || !document.body.contains(t)) {
                    t = document.createElement("div");
                    t.setAttribute("data-tether-id", f());
                    m(t.style, {
                        top: 0,
                        left: 0,
                        position: "absolute"
                    });
                    document.body.appendChild(t);
                    a = t;
                }
                var n = t.getAttribute("data-tether-id");
                if (typeof c[n] === "undefined") {
                    c[n] = s(t);
                    x(function() {
                        delete c[n];
                    });
                }
                return c[n];
            };
            function d() {
                if (a) {
                    document.body.removeChild(a);
                }
                a = null;
            }
            function p(e) {
                var t = undefined;
                if (e === document) {
                    t = document;
                    e = document.documentElement;
                } else {
                    t = e.ownerDocument;
                }
                var n = t.documentElement;
                var i = s(e);
                var o = u();
                i.top -= o.top;
                i.left -= o.left;
                if (typeof i.width === "undefined") {
                    i.width = document.body.scrollWidth - i.left - i.right;
                }
                if (typeof i.height === "undefined") {
                    i.height = document.body.scrollHeight - i.top - i.bottom;
                }
                i.top = i.top - n.clientTop;
                i.left = i.left - n.clientLeft;
                i.right = t.body.clientWidth - i.width - i.left;
                i.bottom = t.body.clientHeight - i.height - i.top;
                return i;
            }
            function h(e) {
                return e.offsetParent || document.documentElement;
            }
            var v = null;
            function g() {
                if (v) {
                    return v;
                }
                var e = document.createElement("div");
                e.style.width = "100%";
                e.style.height = "200px";
                var t = document.createElement("div");
                m(t.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    visibility: "hidden",
                    width: "200px",
                    height: "150px",
                    overflow: "hidden"
                });
                t.appendChild(e);
                document.body.appendChild(t);
                var n = e.offsetWidth;
                t.style.overflow = "scroll";
                var i = e.offsetWidth;
                if (n === i) {
                    i = t.clientWidth;
                }
                document.body.removeChild(t);
                var o = n - i;
                v = {
                    width: o,
                    height: o
                };
                return v;
            }
            function m() {
                var e = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var t = [];
                Array.prototype.push.apply(t, arguments);
                t.slice(1).forEach(function(t) {
                    if (t) {
                        for (var n in t) {
                            if ({}.hasOwnProperty.call(t, n)) {
                                e[n] = t[n];
                            }
                        }
                    }
                });
                return e;
            }
            function y(e, t) {
                if (typeof e.classList !== "undefined") {
                    t.split(" ").forEach(function(t) {
                        if (t.trim()) {
                            e.classList.remove(t);
                        }
                    });
                } else {
                    var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi");
                    var i = O(e).replace(n, " ");
                    E(e, i);
                }
            }
            function b(e, t) {
                if (typeof e.classList !== "undefined") {
                    t.split(" ").forEach(function(t) {
                        if (t.trim()) {
                            e.classList.add(t);
                        }
                    });
                } else {
                    y(e, t);
                    var n = O(e) + (" " + t);
                    E(e, n);
                }
            }
            function w(e, t) {
                if (typeof e.classList !== "undefined") {
                    return e.classList.contains(t);
                }
                var n = O(e);
                return new RegExp("(^| )" + t + "( |$)", "gi").test(n);
            }
            function O(e) {
                if (e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString) {
                    return e.className.baseVal;
                }
                return e.className;
            }
            function E(e, t) {
                e.setAttribute("class", t);
            }
            function C(e, t, n) {
                n.forEach(function(n) {
                    if (t.indexOf(n) === -1 && w(e, n)) {
                        y(e, n);
                    }
                });
                t.forEach(function(t) {
                    if (!w(e, t)) {
                        b(e, t);
                    }
                });
            }
            var T = [];
            var x = function e(t) {
                T.push(t);
            };
            var k = function e() {
                var t = undefined;
                while (t = T.pop()) {
                    t();
                }
            };
            var _ = function() {
                function e() {
                    o(this, e);
                }
                i(e, [ {
                    key: "on",
                    value: function e(t, n, i) {
                        var o = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                        if (typeof this.bindings === "undefined") {
                            this.bindings = {};
                        }
                        if (typeof this.bindings[t] === "undefined") {
                            this.bindings[t] = [];
                        }
                        this.bindings[t].push({
                            handler: n,
                            ctx: i,
                            once: o
                        });
                    }
                }, {
                    key: "once",
                    value: function e(t, n, i) {
                        this.on(t, n, i, true);
                    }
                }, {
                    key: "off",
                    value: function e(t, n) {
                        if (typeof this.bindings === "undefined" || typeof this.bindings[t] === "undefined") {
                            return;
                        }
                        if (typeof n === "undefined") {
                            delete this.bindings[t];
                        } else {
                            var i = 0;
                            while (i < this.bindings[t].length) {
                                if (this.bindings[t][i].handler === n) {
                                    this.bindings[t].splice(i, 1);
                                } else {
                                    ++i;
                                }
                            }
                        }
                    }
                }, {
                    key: "trigger",
                    value: function e(t) {
                        if (typeof this.bindings !== "undefined" && this.bindings[t]) {
                            var n = 0;
                            for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) {
                                o[r - 1] = arguments[r];
                            }
                            while (n < this.bindings[t].length) {
                                var a = this.bindings[t][n];
                                var s = a.handler;
                                var l = a.ctx;
                                var f = a.once;
                                var c = l;
                                if (typeof c === "undefined") {
                                    c = this;
                                }
                                s.apply(c, o);
                                if (f) {
                                    this.bindings[t].splice(n, 1);
                                } else {
                                    ++n;
                                }
                            }
                        }
                    }
                } ]);
                return e;
            }();
            r.Utils = {
                getActualBoundingClientRect: s,
                getScrollParents: l,
                getBounds: p,
                getOffsetParent: h,
                extend: m,
                addClass: b,
                removeClass: y,
                hasClass: w,
                updateClasses: C,
                defer: x,
                flush: k,
                uniqueId: f,
                Evented: _,
                getScrollBarSize: g,
                removeUtilElements: d
            };
            "use strict";
            var j = function() {
                function e(e, t) {
                    var n = [];
                    var i = true;
                    var o = false;
                    var r = undefined;
                    try {
                        for (var a = e[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (t && n.length === t) break;
                        }
                    } catch (e) {
                        o = true;
                        r = e;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (o) throw r;
                        }
                    }
                    return n;
                }
                return function(t, n) {
                    if (Array.isArray(t)) {
                        return t;
                    } else if (Symbol.iterator in Object(t)) {
                        return e(t, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || false;
                        i.configurable = true;
                        if ("value" in i) i.writable = true;
                        Object.defineProperty(e, i.key, i);
                    }
                }
                return function(t, n, i) {
                    if (n) e(t.prototype, n);
                    if (i) e(t, i);
                    return t;
                };
            }();
            var S = function e(t, n, i) {
                var o = true;
                e: while (o) {
                    var r = t, a = n, s = i;
                    o = false;
                    if (r === null) r = Function.prototype;
                    var l = Object.getOwnPropertyDescriptor(r, a);
                    if (l === undefined) {
                        var f = Object.getPrototypeOf(r);
                        if (f === null) {
                            return undefined;
                        } else {
                            t = f;
                            n = a;
                            i = s;
                            o = true;
                            l = f = undefined;
                            continue e;
                        }
                    } else if ("value" in l) {
                        return l.value;
                    } else {
                        var c = l.get;
                        if (c === undefined) {
                            return undefined;
                        }
                        return c.call(s);
                    }
                }
            };
            function o(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function P(e, t) {
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
            if (typeof r === "undefined") {
                throw new Error("You must include the utils.js file before tether.js");
            }
            var I = r.Utils;
            var l = I.getScrollParents;
            var p = I.getBounds;
            var h = I.getOffsetParent;
            var m = I.extend;
            var b = I.addClass;
            var y = I.removeClass;
            var C = I.updateClasses;
            var x = I.defer;
            var k = I.flush;
            var g = I.getScrollBarSize;
            var d = I.removeUtilElements;
            function A(e, t) {
                var n = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
                return e + n >= t && t >= e - n;
            }
            var U = function() {
                if (typeof document === "undefined") {
                    return "";
                }
                var e = document.createElement("div");
                var t = [ "transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform" ];
                for (var n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (e.style[i] !== undefined) {
                        return i;
                    }
                }
            }();
            var L = [];
            var N = function e() {
                L.forEach(function(e) {
                    e.position(false);
                });
                k();
            };
            function D() {
                if (typeof performance !== "undefined" && typeof performance.now !== "undefined") {
                    return performance.now();
                }
                return +new Date();
            }
            (function() {
                var e = null;
                var t = null;
                var n = null;
                var i = function i() {
                    if (typeof t !== "undefined" && t > 16) {
                        t = Math.min(t - 16, 250);
                        n = setTimeout(i, 250);
                        return;
                    }
                    if (typeof e !== "undefined" && D() - e < 10) {
                        return;
                    }
                    if (n != null) {
                        clearTimeout(n);
                        n = null;
                    }
                    e = D();
                    N();
                    t = D() - e;
                };
                if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
                    [ "resize", "scroll", "touchmove" ].forEach(function(e) {
                        window.addEventListener(e, i);
                    });
                }
            })();
            var R = {
                center: "center",
                left: "right",
                right: "left"
            };
            var H = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            };
            var M = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            };
            var F = function e(t, n) {
                var i = t.left;
                var o = t.top;
                if (i === "auto") {
                    i = R[n.left];
                }
                if (o === "auto") {
                    o = H[n.top];
                }
                return {
                    left: i,
                    top: o
                };
            };
            var B = function e(t) {
                var n = t.left;
                var i = t.top;
                if (typeof M[t.left] !== "undefined") {
                    n = M[t.left];
                }
                if (typeof M[t.top] !== "undefined") {
                    i = M[t.top];
                }
                return {
                    left: n,
                    top: i
                };
            };
            function $() {
                var e = {
                    top: 0,
                    left: 0
                };
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) {
                    n[i] = arguments[i];
                }
                n.forEach(function(t) {
                    var n = t.top;
                    var i = t.left;
                    if (typeof n === "string") {
                        n = parseFloat(n, 10);
                    }
                    if (typeof i === "string") {
                        i = parseFloat(i, 10);
                    }
                    e.top += n;
                    e.left += i;
                });
                return e;
            }
            function z(e, t) {
                if (typeof e.left === "string" && e.left.indexOf("%") !== -1) {
                    e.left = parseFloat(e.left, 10) / 100 * t.width;
                }
                if (typeof e.top === "string" && e.top.indexOf("%") !== -1) {
                    e.top = parseFloat(e.top, 10) / 100 * t.height;
                }
                return e;
            }
            var W = function e(t) {
                var n = t.split(" ");
                var i = j(n, 2);
                var o = i[0];
                var r = i[1];
                return {
                    top: o,
                    left: r
                };
            };
            var Y = W;
            var q = function(e) {
                P(t, e);
                function t(e) {
                    var n = this;
                    o(this, t);
                    S(Object.getPrototypeOf(t.prototype), "constructor", this).call(this);
                    this.position = this.position.bind(this);
                    L.push(this);
                    this.history = [];
                    this.setOptions(e, false);
                    r.modules.forEach(function(e) {
                        if (typeof e.initialize !== "undefined") {
                            e.initialize.call(n);
                        }
                    });
                    this.position();
                }
                i(t, [ {
                    key: "getClass",
                    value: function e() {
                        var t = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
                        var n = this.options.classes;
                        if (typeof n !== "undefined" && n[t]) {
                            return this.options.classes[t];
                        } else if (this.options.classPrefix) {
                            return this.options.classPrefix + "-" + t;
                        } else {
                            return t;
                        }
                    }
                }, {
                    key: "setOptions",
                    value: function e(t) {
                        var n = this;
                        var i = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                        var o = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                        this.options = m(o, t);
                        var r = this.options;
                        var a = r.element;
                        var s = r.target;
                        var f = r.targetModifier;
                        this.element = a;
                        this.target = s;
                        this.targetModifier = f;
                        if (this.target === "viewport") {
                            this.target = document.body;
                            this.targetModifier = "visible";
                        } else if (this.target === "scroll-handle") {
                            this.target = document.body;
                            this.targetModifier = "scroll-handle";
                        }
                        [ "element", "target" ].forEach(function(e) {
                            if (typeof n[e] === "undefined") {
                                throw new Error("Tether Error: Both element and target must be defined");
                            }
                            if (typeof n[e].jquery !== "undefined") {
                                n[e] = n[e][0];
                            } else if (typeof n[e] === "string") {
                                n[e] = document.querySelector(n[e]);
                            }
                        });
                        b(this.element, this.getClass("element"));
                        if (!(this.options.addTargetClasses === false)) {
                            b(this.target, this.getClass("target"));
                        }
                        if (!this.options.attachment) {
                            throw new Error("Tether Error: You must provide an attachment");
                        }
                        this.targetAttachment = Y(this.options.targetAttachment);
                        this.attachment = Y(this.options.attachment);
                        this.offset = W(this.options.offset);
                        this.targetOffset = W(this.options.targetOffset);
                        if (typeof this.scrollParents !== "undefined") {
                            this.disable();
                        }
                        if (this.targetModifier === "scroll-handle") {
                            this.scrollParents = [ this.target ];
                        } else {
                            this.scrollParents = l(this.target);
                        }
                        if (!(this.options.enabled === false)) {
                            this.enable(i);
                        }
                    }
                }, {
                    key: "getTargetBounds",
                    value: function e() {
                        if (typeof this.targetModifier !== "undefined") {
                            if (this.targetModifier === "visible") {
                                if (this.target === document.body) {
                                    return {
                                        top: pageYOffset,
                                        left: pageXOffset,
                                        height: innerHeight,
                                        width: innerWidth
                                    };
                                } else {
                                    var t = p(this.target);
                                    var n = {
                                        height: t.height,
                                        width: t.width,
                                        top: t.top,
                                        left: t.left
                                    };
                                    n.height = Math.min(n.height, t.height - (pageYOffset - t.top));
                                    n.height = Math.min(n.height, t.height - (t.top + t.height - (pageYOffset + innerHeight)));
                                    n.height = Math.min(innerHeight, n.height);
                                    n.height -= 2;
                                    n.width = Math.min(n.width, t.width - (pageXOffset - t.left));
                                    n.width = Math.min(n.width, t.width - (t.left + t.width - (pageXOffset + innerWidth)));
                                    n.width = Math.min(innerWidth, n.width);
                                    n.width -= 2;
                                    if (n.top < pageYOffset) {
                                        n.top = pageYOffset;
                                    }
                                    if (n.left < pageXOffset) {
                                        n.left = pageXOffset;
                                    }
                                    return n;
                                }
                            } else if (this.targetModifier === "scroll-handle") {
                                var t = undefined;
                                var i = this.target;
                                if (i === document.body) {
                                    i = document.documentElement;
                                    t = {
                                        left: pageXOffset,
                                        top: pageYOffset,
                                        height: innerHeight,
                                        width: innerWidth
                                    };
                                } else {
                                    t = p(i);
                                }
                                var o = getComputedStyle(i);
                                var r = i.scrollWidth > i.clientWidth || [ o.overflow, o.overflowX ].indexOf("scroll") >= 0 || this.target !== document.body;
                                var a = 0;
                                if (r) {
                                    a = 15;
                                }
                                var s = t.height - parseFloat(o.borderTopWidth) - parseFloat(o.borderBottomWidth) - a;
                                var n = {
                                    width: 15,
                                    height: s * .975 * (s / i.scrollHeight),
                                    left: t.left + t.width - parseFloat(o.borderLeftWidth) - 15
                                };
                                var l = 0;
                                if (s < 408 && this.target === document.body) {
                                    l = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58;
                                }
                                if (this.target !== document.body) {
                                    n.height = Math.max(n.height, 24);
                                }
                                var f = this.target.scrollTop / (i.scrollHeight - s);
                                n.top = f * (s - n.height - l) + t.top + parseFloat(o.borderTopWidth);
                                if (this.target === document.body) {
                                    n.height = Math.max(n.height, 24);
                                }
                                return n;
                            }
                        } else {
                            return p(this.target);
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function e() {
                        this._cache = {};
                    }
                }, {
                    key: "cache",
                    value: function e(t, n) {
                        if (typeof this._cache === "undefined") {
                            this._cache = {};
                        }
                        if (typeof this._cache[t] === "undefined") {
                            this._cache[t] = n.call(this);
                        }
                        return this._cache[t];
                    }
                }, {
                    key: "enable",
                    value: function e() {
                        var t = this;
                        var n = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                        if (!(this.options.addTargetClasses === false)) {
                            b(this.target, this.getClass("enabled"));
                        }
                        b(this.element, this.getClass("enabled"));
                        this.enabled = true;
                        this.scrollParents.forEach(function(e) {
                            if (e !== t.target.ownerDocument) {
                                e.addEventListener("scroll", t.position);
                            }
                        });
                        if (n) {
                            this.position();
                        }
                    }
                }, {
                    key: "disable",
                    value: function e() {
                        var t = this;
                        y(this.target, this.getClass("enabled"));
                        y(this.element, this.getClass("enabled"));
                        this.enabled = false;
                        if (typeof this.scrollParents !== "undefined") {
                            this.scrollParents.forEach(function(e) {
                                e.removeEventListener("scroll", t.position);
                            });
                        }
                    }
                }, {
                    key: "destroy",
                    value: function e() {
                        var t = this;
                        this.disable();
                        L.forEach(function(e, n) {
                            if (e === t) {
                                L.splice(n, 1);
                            }
                        });
                        if (L.length === 0) {
                            d();
                        }
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function e(t, n) {
                        var i = this;
                        t = t || this.attachment;
                        n = n || this.targetAttachment;
                        var o = [ "left", "top", "bottom", "right", "middle", "center" ];
                        if (typeof this._addAttachClasses !== "undefined" && this._addAttachClasses.length) {
                            this._addAttachClasses.splice(0, this._addAttachClasses.length);
                        }
                        if (typeof this._addAttachClasses === "undefined") {
                            this._addAttachClasses = [];
                        }
                        var r = this._addAttachClasses;
                        if (t.top) {
                            r.push(this.getClass("element-attached") + "-" + t.top);
                        }
                        if (t.left) {
                            r.push(this.getClass("element-attached") + "-" + t.left);
                        }
                        if (n.top) {
                            r.push(this.getClass("target-attached") + "-" + n.top);
                        }
                        if (n.left) {
                            r.push(this.getClass("target-attached") + "-" + n.left);
                        }
                        var a = [];
                        o.forEach(function(e) {
                            a.push(i.getClass("element-attached") + "-" + e);
                            a.push(i.getClass("target-attached") + "-" + e);
                        });
                        x(function() {
                            if (!(typeof i._addAttachClasses !== "undefined")) {
                                return;
                            }
                            C(i.element, i._addAttachClasses, a);
                            if (!(i.options.addTargetClasses === false)) {
                                C(i.target, i._addAttachClasses, a);
                            }
                            delete i._addAttachClasses;
                        });
                    }
                }, {
                    key: "position",
                    value: function e() {
                        var t = this;
                        var n = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                        if (!this.enabled) {
                            return;
                        }
                        this.clearCache();
                        var i = F(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, i);
                        var o = this.cache("element-bounds", function() {
                            return p(t.element);
                        });
                        var a = o.width;
                        var s = o.height;
                        if (a === 0 && s === 0 && typeof this.lastSize !== "undefined") {
                            var l = this.lastSize;
                            a = l.width;
                            s = l.height;
                        } else {
                            this.lastSize = {
                                width: a,
                                height: s
                            };
                        }
                        var f = this.cache("target-bounds", function() {
                            return t.getTargetBounds();
                        });
                        var c = f;
                        var u = z(B(this.attachment), {
                            width: a,
                            height: s
                        });
                        var d = z(B(i), c);
                        var v = z(this.offset, {
                            width: a,
                            height: s
                        });
                        var m = z(this.targetOffset, c);
                        u = $(u, v);
                        d = $(d, m);
                        var y = f.left + d.left - u.left;
                        var b = f.top + d.top - u.top;
                        for (var w = 0; w < r.modules.length; ++w) {
                            var O = r.modules[w];
                            var E = O.position.call(this, {
                                left: y,
                                top: b,
                                targetAttachment: i,
                                targetPos: f,
                                elementPos: o,
                                offset: u,
                                targetOffset: d,
                                manualOffset: v,
                                manualTargetOffset: m,
                                scrollbarSize: _,
                                attachment: this.attachment
                            });
                            if (E === false) {
                                return false;
                            } else if (typeof E === "undefined" || typeof E !== "object") {
                                continue;
                            } else {
                                b = E.top;
                                y = E.left;
                            }
                        }
                        var C = {
                            page: {
                                top: b,
                                left: y
                            },
                            viewport: {
                                top: b - pageYOffset,
                                bottom: pageYOffset - b - s + innerHeight,
                                left: y - pageXOffset,
                                right: pageXOffset - y - a + innerWidth
                            }
                        };
                        var T = this.target.ownerDocument;
                        var x = T.defaultView;
                        var _ = undefined;
                        if (x.innerHeight > T.documentElement.clientHeight) {
                            _ = this.cache("scrollbar-size", g);
                            C.viewport.bottom -= _.height;
                        }
                        if (x.innerWidth > T.documentElement.clientWidth) {
                            _ = this.cache("scrollbar-size", g);
                            C.viewport.right -= _.width;
                        }
                        if ([ "", "static" ].indexOf(T.body.style.position) === -1 || [ "", "static" ].indexOf(T.body.parentElement.style.position) === -1) {
                            C.page.bottom = T.body.scrollHeight - b - s;
                            C.page.right = T.body.scrollWidth - y - a;
                        }
                        if (typeof this.options.optimizations !== "undefined" && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== "undefined")) {
                            (function() {
                                var e = t.cache("target-offsetparent", function() {
                                    return h(t.target);
                                });
                                var n = t.cache("target-offsetparent-bounds", function() {
                                    return p(e);
                                });
                                var i = getComputedStyle(e);
                                var o = n;
                                var r = {};
                                [ "Top", "Left", "Bottom", "Right" ].forEach(function(e) {
                                    r[e.toLowerCase()] = parseFloat(i["border" + e + "Width"]);
                                });
                                n.right = T.body.scrollWidth - n.left - o.width + r.right;
                                n.bottom = T.body.scrollHeight - n.top - o.height + r.bottom;
                                if (C.page.top >= n.top + r.top && C.page.bottom >= n.bottom) {
                                    if (C.page.left >= n.left + r.left && C.page.right >= n.right) {
                                        var a = e.scrollTop;
                                        var s = e.scrollLeft;
                                        C.offset = {
                                            top: C.page.top - n.top + a - r.top,
                                            left: C.page.left - n.left + s - r.left
                                        };
                                    }
                                }
                            })();
                        }
                        this.move(C);
                        this.history.unshift(C);
                        if (this.history.length > 3) {
                            this.history.pop();
                        }
                        if (n) {
                            k();
                        }
                        return true;
                    }
                }, {
                    key: "move",
                    value: function e(t) {
                        var n = this;
                        if (!(typeof this.element.parentNode !== "undefined")) {
                            return;
                        }
                        var i = {};
                        for (var o in t) {
                            i[o] = {};
                            for (var r in t[o]) {
                                var a = false;
                                for (var s = 0; s < this.history.length; ++s) {
                                    var l = this.history[s];
                                    if (typeof l[o] !== "undefined" && !A(l[o][r], t[o][r])) {
                                        a = true;
                                        break;
                                    }
                                }
                                if (!a) {
                                    i[o][r] = true;
                                }
                            }
                        }
                        var f = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        };
                        var c = function e(t, i) {
                            var o = typeof n.options.optimizations !== "undefined";
                            var r = o ? n.options.optimizations.gpu : null;
                            if (r !== false) {
                                var a = undefined, s = undefined;
                                if (t.top) {
                                    f.top = 0;
                                    a = i.top;
                                } else {
                                    f.bottom = 0;
                                    a = -i.bottom;
                                }
                                if (t.left) {
                                    f.left = 0;
                                    s = i.left;
                                } else {
                                    f.right = 0;
                                    s = -i.right;
                                }
                                if (window.matchMedia) {
                                    var l = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                    if (!l) {
                                        s = Math.round(s);
                                        a = Math.round(a);
                                    }
                                }
                                f[U] = "translateX(" + s + "px) translateY(" + a + "px)";
                                if (U !== "msTransform") {
                                    f[U] += " translateZ(0)";
                                }
                            } else {
                                if (t.top) {
                                    f.top = i.top + "px";
                                } else {
                                    f.bottom = i.bottom + "px";
                                }
                                if (t.left) {
                                    f.left = i.left + "px";
                                } else {
                                    f.right = i.right + "px";
                                }
                            }
                        };
                        var u = false;
                        if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right)) {
                            f.position = "absolute";
                            c(i.page, t.page);
                        } else if ((i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right)) {
                            f.position = "fixed";
                            c(i.viewport, t.viewport);
                        } else if (typeof i.offset !== "undefined" && i.offset.top && i.offset.left) {
                            (function() {
                                f.position = "absolute";
                                var e = n.cache("target-offsetparent", function() {
                                    return h(n.target);
                                });
                                if (h(n.element) !== e) {
                                    x(function() {
                                        n.element.parentNode.removeChild(n.element);
                                        e.appendChild(n.element);
                                    });
                                }
                                c(i.offset, t.offset);
                                u = true;
                            })();
                        } else {
                            f.position = "absolute";
                            c({
                                top: true,
                                left: true
                            }, t.page);
                        }
                        if (!u) {
                            if (this.options.bodyElement) {
                                this.options.bodyElement.appendChild(this.element);
                            } else {
                                var d = true;
                                var p = this.element.parentNode;
                                while (p && p.nodeType === 1 && p.tagName !== "BODY") {
                                    if (getComputedStyle(p).position !== "static") {
                                        d = false;
                                        break;
                                    }
                                    p = p.parentNode;
                                }
                                if (!d) {
                                    this.element.parentNode.removeChild(this.element);
                                    this.element.ownerDocument.body.appendChild(this.element);
                                }
                            }
                        }
                        var v = {};
                        var g = false;
                        for (var r in f) {
                            var y = f[r];
                            var b = this.element.style[r];
                            if (b !== y) {
                                g = true;
                                v[r] = y;
                            }
                        }
                        if (g) {
                            x(function() {
                                m(n.element.style, v);
                                n.trigger("repositioned");
                            });
                        }
                    }
                } ]);
                return t;
            }(_);
            q.modules = [];
            r.position = N;
            var V = m(q, r);
            "use strict";
            var j = function() {
                function e(e, t) {
                    var n = [];
                    var i = true;
                    var o = false;
                    var r = undefined;
                    try {
                        for (var a = e[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (t && n.length === t) break;
                        }
                    } catch (e) {
                        o = true;
                        r = e;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (o) throw r;
                        }
                    }
                    return n;
                }
                return function(t, n) {
                    if (Array.isArray(t)) {
                        return t;
                    } else if (Symbol.iterator in Object(t)) {
                        return e(t, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var I = r.Utils;
            var p = I.getBounds;
            var m = I.extend;
            var C = I.updateClasses;
            var x = I.defer;
            var X = [ "left", "top", "right", "bottom" ];
            function K(e, t) {
                if (t === "scrollParent") {
                    t = e.scrollParents[0];
                } else if (t === "window") {
                    t = [ pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset ];
                }
                if (t === document) {
                    t = t.documentElement;
                }
                if (typeof t.nodeType !== "undefined") {
                    (function() {
                        var e = t;
                        var n = p(t);
                        var i = n;
                        var o = getComputedStyle(t);
                        t = [ i.left, i.top, n.width + i.left, n.height + i.top ];
                        if (e.ownerDocument !== document) {
                            var r = e.ownerDocument.defaultView;
                            t[0] += r.pageXOffset;
                            t[1] += r.pageYOffset;
                            t[2] += r.pageXOffset;
                            t[3] += r.pageYOffset;
                        }
                        X.forEach(function(e, n) {
                            e = e[0].toUpperCase() + e.substr(1);
                            if (e === "Top" || e === "Left") {
                                t[n] += parseFloat(o["border" + e + "Width"]);
                            } else {
                                t[n] -= parseFloat(o["border" + e + "Width"]);
                            }
                        });
                    })();
                }
                return t;
            }
            r.modules.push({
                position: function e(t) {
                    var n = this;
                    var i = t.top;
                    var o = t.left;
                    var r = t.targetAttachment;
                    if (!this.options.constraints) {
                        return true;
                    }
                    var a = this.cache("element-bounds", function() {
                        return p(n.element);
                    });
                    var s = a.height;
                    var l = a.width;
                    if (l === 0 && s === 0 && typeof this.lastSize !== "undefined") {
                        var f = this.lastSize;
                        l = f.width;
                        s = f.height;
                    }
                    var c = this.cache("target-bounds", function() {
                        return n.getTargetBounds();
                    });
                    var u = c.height;
                    var d = c.width;
                    var h = [ this.getClass("pinned"), this.getClass("out-of-bounds") ];
                    this.options.constraints.forEach(function(e) {
                        var t = e.outOfBoundsClass;
                        var n = e.pinnedClass;
                        if (t) {
                            h.push(t);
                        }
                        if (n) {
                            h.push(n);
                        }
                    });
                    h.forEach(function(e) {
                        [ "left", "top", "right", "bottom" ].forEach(function(t) {
                            h.push(e + "-" + t);
                        });
                    });
                    var v = [];
                    var g = m({}, r);
                    var y = m({}, this.attachment);
                    this.options.constraints.forEach(function(e) {
                        var t = e.to;
                        var a = e.attachment;
                        var f = e.pin;
                        if (typeof a === "undefined") {
                            a = "";
                        }
                        var c = undefined, p = undefined;
                        if (a.indexOf(" ") >= 0) {
                            var h = a.split(" ");
                            var m = j(h, 2);
                            p = m[0];
                            c = m[1];
                        } else {
                            c = p = a;
                        }
                        var b = K(n, t);
                        if (p === "target" || p === "both") {
                            if (i < b[1] && g.top === "top") {
                                i += u;
                                g.top = "bottom";
                            }
                            if (i + s > b[3] && g.top === "bottom") {
                                i -= u;
                                g.top = "top";
                            }
                        }
                        if (p === "together") {
                            if (g.top === "top") {
                                if (y.top === "bottom" && i < b[1]) {
                                    i += u;
                                    g.top = "bottom";
                                    i += s;
                                    y.top = "top";
                                } else if (y.top === "top" && i + s > b[3] && i - (s - u) >= b[1]) {
                                    i -= s - u;
                                    g.top = "bottom";
                                    y.top = "bottom";
                                }
                            }
                            if (g.top === "bottom") {
                                if (y.top === "top" && i + s > b[3]) {
                                    i -= u;
                                    g.top = "top";
                                    i -= s;
                                    y.top = "bottom";
                                } else if (y.top === "bottom" && i < b[1] && i + (s * 2 - u) <= b[3]) {
                                    i += s - u;
                                    g.top = "top";
                                    y.top = "top";
                                }
                            }
                            if (g.top === "middle") {
                                if (i + s > b[3] && y.top === "top") {
                                    i -= s;
                                    y.top = "bottom";
                                } else if (i < b[1] && y.top === "bottom") {
                                    i += s;
                                    y.top = "top";
                                }
                            }
                        }
                        if (c === "target" || c === "both") {
                            if (o < b[0] && g.left === "left") {
                                o += d;
                                g.left = "right";
                            }
                            if (o + l > b[2] && g.left === "right") {
                                o -= d;
                                g.left = "left";
                            }
                        }
                        if (c === "together") {
                            if (o < b[0] && g.left === "left") {
                                if (y.left === "right") {
                                    o += d;
                                    g.left = "right";
                                    o += l;
                                    y.left = "left";
                                } else if (y.left === "left") {
                                    o += d;
                                    g.left = "right";
                                    o -= l;
                                    y.left = "right";
                                }
                            } else if (o + l > b[2] && g.left === "right") {
                                if (y.left === "left") {
                                    o -= d;
                                    g.left = "left";
                                    o -= l;
                                    y.left = "right";
                                } else if (y.left === "right") {
                                    o -= d;
                                    g.left = "left";
                                    o += l;
                                    y.left = "left";
                                }
                            } else if (g.left === "center") {
                                if (o + l > b[2] && y.left === "left") {
                                    o -= l;
                                    y.left = "right";
                                } else if (o < b[0] && y.left === "right") {
                                    o += l;
                                    y.left = "left";
                                }
                            }
                        }
                        if (p === "element" || p === "both") {
                            if (i < b[1] && y.top === "bottom") {
                                i += s;
                                y.top = "top";
                            }
                            if (i + s > b[3] && y.top === "top") {
                                i -= s;
                                y.top = "bottom";
                            }
                        }
                        if (c === "element" || c === "both") {
                            if (o < b[0]) {
                                if (y.left === "right") {
                                    o += l;
                                    y.left = "left";
                                } else if (y.left === "center") {
                                    o += l / 2;
                                    y.left = "left";
                                }
                            }
                            if (o + l > b[2]) {
                                if (y.left === "left") {
                                    o -= l;
                                    y.left = "right";
                                } else if (y.left === "center") {
                                    o -= l / 2;
                                    y.left = "right";
                                }
                            }
                        }
                        if (typeof f === "string") {
                            f = f.split(",").map(function(e) {
                                return e.trim();
                            });
                        } else if (f === true) {
                            f = [ "top", "left", "right", "bottom" ];
                        }
                        f = f || [];
                        var w = [];
                        var O = [];
                        if (i < b[1]) {
                            if (f.indexOf("top") >= 0) {
                                i = b[1];
                                w.push("top");
                            } else {
                                O.push("top");
                            }
                        }
                        if (i + s > b[3]) {
                            if (f.indexOf("bottom") >= 0) {
                                i = b[3] - s;
                                w.push("bottom");
                            } else {
                                O.push("bottom");
                            }
                        }
                        if (o < b[0]) {
                            if (f.indexOf("left") >= 0) {
                                o = b[0];
                                w.push("left");
                            } else {
                                O.push("left");
                            }
                        }
                        if (o + l > b[2]) {
                            if (f.indexOf("right") >= 0) {
                                o = b[2] - l;
                                w.push("right");
                            } else {
                                O.push("right");
                            }
                        }
                        if (w.length) {
                            (function() {
                                var e = undefined;
                                if (typeof n.options.pinnedClass !== "undefined") {
                                    e = n.options.pinnedClass;
                                } else {
                                    e = n.getClass("pinned");
                                }
                                v.push(e);
                                w.forEach(function(t) {
                                    v.push(e + "-" + t);
                                });
                            })();
                        }
                        if (O.length) {
                            (function() {
                                var e = undefined;
                                if (typeof n.options.outOfBoundsClass !== "undefined") {
                                    e = n.options.outOfBoundsClass;
                                } else {
                                    e = n.getClass("out-of-bounds");
                                }
                                v.push(e);
                                O.forEach(function(t) {
                                    v.push(e + "-" + t);
                                });
                            })();
                        }
                        if (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) {
                            y.left = g.left = false;
                        }
                        if (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) {
                            y.top = g.top = false;
                        }
                        if (g.top !== r.top || g.left !== r.left || y.top !== n.attachment.top || y.left !== n.attachment.left) {
                            n.updateAttachClasses(y, g);
                            n.trigger("update", {
                                attachment: y,
                                targetAttachment: g
                            });
                        }
                    });
                    x(function() {
                        if (!(n.options.addTargetClasses === false)) {
                            C(n.target, v, h);
                        }
                        C(n.element, v, h);
                    });
                    return {
                        top: i,
                        left: o
                    };
                }
            });
            "use strict";
            var I = r.Utils;
            var p = I.getBounds;
            var C = I.updateClasses;
            var x = I.defer;
            r.modules.push({
                position: function e(t) {
                    var n = this;
                    var i = t.top;
                    var o = t.left;
                    var r = this.cache("element-bounds", function() {
                        return p(n.element);
                    });
                    var a = r.height;
                    var s = r.width;
                    var l = this.getTargetBounds();
                    var f = i + a;
                    var c = o + s;
                    var u = [];
                    if (i <= l.bottom && f >= l.top) {
                        [ "left", "right" ].forEach(function(e) {
                            var t = l[e];
                            if (t === o || t === c) {
                                u.push(e);
                            }
                        });
                    }
                    if (o <= l.right && c >= l.left) {
                        [ "top", "bottom" ].forEach(function(e) {
                            var t = l[e];
                            if (t === i || t === f) {
                                u.push(e);
                            }
                        });
                    }
                    var d = [];
                    var h = [];
                    var v = [ "left", "top", "right", "bottom" ];
                    d.push(this.getClass("abutted"));
                    v.forEach(function(e) {
                        d.push(n.getClass("abutted") + "-" + e);
                    });
                    if (u.length) {
                        h.push(this.getClass("abutted"));
                    }
                    u.forEach(function(e) {
                        h.push(n.getClass("abutted") + "-" + e);
                    });
                    x(function() {
                        if (!(n.options.addTargetClasses === false)) {
                            C(n.target, h, d);
                        }
                        C(n.element, h, d);
                    });
                    return true;
                }
            });
            "use strict";
            var j = function() {
                function e(e, t) {
                    var n = [];
                    var i = true;
                    var o = false;
                    var r = undefined;
                    try {
                        for (var a = e[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (t && n.length === t) break;
                        }
                    } catch (e) {
                        o = true;
                        r = e;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (o) throw r;
                        }
                    }
                    return n;
                }
                return function(t, n) {
                    if (Array.isArray(t)) {
                        return t;
                    } else if (Symbol.iterator in Object(t)) {
                        return e(t, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            r.modules.push({
                position: function e(t) {
                    var n = t.top;
                    var i = t.left;
                    if (!this.options.shift) {
                        return;
                    }
                    var o = this.options.shift;
                    if (typeof this.options.shift === "function") {
                        o = this.options.shift.call(this, {
                            top: n,
                            left: i
                        });
                    }
                    var r = undefined, a = undefined;
                    if (typeof o === "string") {
                        o = o.split(" ");
                        o[1] = o[1] || o[0];
                        var s = o;
                        var l = j(s, 2);
                        r = l[0];
                        a = l[1];
                        r = parseFloat(r, 10);
                        a = parseFloat(a, 10);
                    } else {
                        r = o.top;
                        a = o.left;
                    }
                    n += r;
                    i += a;
                    return {
                        top: n,
                        left: i
                    };
                }
            });
            return V;
        });
    },
    254: function(e, t) {
        var n = function(e, t) {
            var n = n || webkitURL;
            var i = n.createObjectURL(e);
            var o = new Image();
            o.src = i;
            o.onload = function() {
                var e = this;
                var n = e.width, r = e.height, a = n / r;
                n = t.width || n;
                r = n / a;
                var s = document.createElement("canvas");
                var f = s.getContext("2d");
                $(s).attr({
                    width: n,
                    height: r
                });
                f.drawImage(e, 0, 0, n, r);
                var c = s.toDataURL("image/jpeg", t.quality || .8);
                if (navigator.userAgent.match(/iphone/i)) {
                    var u = new l(o);
                    u.render(s, {
                        maxWidth: n,
                        maxHeight: r,
                        quality: t.quality || .8,
                        orientation: 1
                    });
                    c = s.toDataURL("image/jpeg", t.quality || .8);
                }
                if (navigator.userAgent.match(/Android/i)) {
                    var d = new JPEGEncoder();
                    c = d.encode(f.getImageData(0, 0, n, r), t.quality * 100 || 80);
                }
                var p = {
                    width: n,
                    height: r,
                    blob: i,
                    base64: c,
                    clearBase64: c.substr(c.indexOf(",") + 1)
                };
                t.success(p);
            };
        };
        function i(e) {
            var t = e.naturalWidth, n = e.naturalHeight;
            if (t * n > 1024 * 1024) {
                var i = document.createElement("canvas");
                i.width = i.height = 1;
                var o = i.getContext("2d");
                o.drawImage(e, -t + 1, 0);
                return o.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function o(e, t, n) {
            var i = document.createElement("canvas");
            i.width = 1;
            i.height = n;
            var o = i.getContext("2d");
            o.drawImage(e, 0, 0);
            var r = o.getImageData(0, 0, 1, n).data;
            var a = 0;
            var s = n;
            var l = n;
            while (l > a) {
                var f = r[(l - 1) * 4 + 3];
                if (f === 0) {
                    s = l;
                } else {
                    a = l;
                }
                l = s + a >> 1;
            }
            var c = l / n;
            return c === 0 ? 1 : c;
        }
        function r(e, t, n) {
            var i = document.createElement("canvas");
            a(e, i, t, n);
            return i.toDataURL("image/jpeg", t.quality || .8);
        }
        function a(e, t, n, r) {
            var a = e.naturalWidth, l = e.naturalHeight;
            var f = n.width, c = n.height;
            var u = t.getContext("2d");
            u.save();
            s(t, u, f, c, n.orientation);
            var d = i(e);
            if (d) {
                a /= 2;
                l /= 2;
            }
            var p = 1024;
            var h = document.createElement("canvas");
            h.width = h.height = p;
            var v = h.getContext("2d");
            var g = r ? o(e, a, l) : 1;
            var m = Math.ceil(p * f / a);
            var y = Math.ceil(p * c / l / g);
            var b = 0;
            var w = 0;
            while (b < l) {
                var O = 0;
                var E = 0;
                while (O < a) {
                    v.clearRect(0, 0, p, p);
                    v.drawImage(e, -O, -b);
                    u.drawImage(h, 0, 0, p, p, E, w, m, y);
                    O += p;
                    E += m;
                }
                b += p;
                w += y;
            }
            u.restore();
            h = v = null;
        }
        function s(e, t, n, i, o) {
            switch (o) {
              case 5:
              case 6:
              case 7:
              case 8:
                e.width = i;
                e.height = n;
                break;

              default:
                e.width = n;
                e.height = i;
            }
            switch (o) {
              case 2:
                t.translate(n, 0);
                t.scale(-1, 1);
                break;

              case 3:
                t.translate(n, i);
                t.rotate(Math.PI);
                break;

              case 4:
                t.translate(0, i);
                t.scale(1, -1);
                break;

              case 5:
                t.rotate(.5 * Math.PI);
                t.scale(1, -1);
                break;

              case 6:
                t.rotate(.5 * Math.PI);
                t.translate(0, -i);
                break;

              case 7:
                t.rotate(.5 * Math.PI);
                t.translate(n, -i);
                t.scale(-1, 1);
                break;

              case 8:
                t.rotate(-.5 * Math.PI);
                t.translate(-n, 0);
                break;

              default:
                break;
            }
        }
        function l(e) {
            if (window.Blob && e instanceof Blob) {
                var t = new Image();
                var n = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                if (!n) {
                    throw Error("No createObjectURL function found to create blob url");
                }
                t.src = n.createObjectURL(e);
                this.blob = e;
                e = t;
            }
            if (!e.naturalWidth && !e.naturalHeight) {
                var i = this;
                e.onload = function() {
                    var e = i.imageLoadListeners;
                    if (e) {
                        i.imageLoadListeners = null;
                        for (var t = 0, n = e.length; t < n; t++) {
                            e[t]();
                        }
                    }
                };
                this.imageLoadListeners = [];
            }
            this.srcImage = e;
        }
        l.prototype.render = function(e, t) {
            if (this.imageLoadListeners) {
                var n = this;
                this.imageLoadListeners.push(function() {
                    n.render(e, t);
                });
                return;
            }
            t = t || {};
            var i = this.srcImage.naturalWidth, o = this.srcImage.naturalHeight, s = t.width, l = t.height, f = t.maxWidth, c = t.maxHeight, u = !this.blob || this.blob.type === "image/jpeg";
            if (s && !l) {
                l = o * s / i << 0;
            } else if (l && !s) {
                s = i * l / o << 0;
            } else {
                s = i;
                l = o;
            }
            if (f && s > f) {
                s = f;
                l = o * s / i << 0;
            }
            if (c && l > c) {
                l = c;
                s = i * l / o << 0;
            }
            var d = {
                width: s,
                height: l
            };
            for (var p in t) d[p] = t[p];
            var h = e.tagName.toLowerCase();
            if (h === "img") {
                e.src = r(this.srcImage, d, u);
            } else if (h === "canvas") {
                a(this.srcImage, e, d, u);
            }
            if (typeof this.onrender === "function") {
                this.onrender(e);
            }
        };
        e.exports = n;
    }
});