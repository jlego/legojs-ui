(function(t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        t[i].call(r.exports, r, r.exports, n);
        r.loaded = true;
        return r.exports;
    }
    n.m = t;
    n.c = e;
    n.p = "./dist/";
    return n(0);
})({
    0: function(t, e, n) {
        "use strict";
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        var r = n(231);
        var o = f(r);
        var a = n(232);
        var s = f(a);
        function f(t) {
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
                    "/tips": [ this.index, this.tabs ],
                    "/tips/:tabs": [ this.index, this.tabs ]
                };
            }
            i(t, [ {
                key: "index",
                value: function t() {
                    this.viewObj = HBY.create(o.default, {
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
                    var n = [ s.default ];
                    HBY.create(n[e], {
                        el: "#pageContent"
                    });
                }
            } ]);
            return t;
        }();
        HBY.router(new u());
    },
    231: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var n = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        var i = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tips/0" class="', '">Tips 提示框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tips/0" class="', '">Tips 提示框</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function r(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function o(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function a(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && (typeof e === "object" || typeof e === "function") ? e : t;
        }
        function s(t, e) {
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
        var f = function(t) {
            s(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                o(this, e);
                var n = {
                    currentTab: 0
                };
                Object.assign(n, t);
                return a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
            }
            n(e, [ {
                key: "render",
                value: function t() {
                    var e = this.options;
                    var n = hx(i, e.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        e.default = f;
    },
    232: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        var r = u([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip1">Top</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip2">Bottom</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip3">Left</button>\n            </div>\n            <div class="col-sm-3">\n              <button type="button" class="btn btn-secondary" id="tooltip4">Right</button>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var o = n(233);
        var a = l(o);
        var s = n(235);
        var f = l(s);
        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e) {
            return Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }));
        }
        function c(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function h(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && (typeof e === "object" || typeof e === "function") ? e : t;
        }
        function d(t, e) {
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
        var p = function(t) {
            d(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                c(this, e);
                var n = {};
                Object.assign(n, t);
                var i = h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
                Lego.UI.tooltip({
                    el: "#tooltip1",
                    title: "提示1",
                    placement: "top",
                    onHidden: function t() {
                        console.warn("隐藏提示1");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip2",
                    title: "提示2",
                    placement: "bottom",
                    onHidden: function t() {
                        console.warn("隐藏提示2");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip3",
                    title: "提示3",
                    placement: "left",
                    onHidden: function t() {
                        console.warn("隐藏提示3");
                    }
                });
                Lego.UI.tooltip({
                    el: "#tooltip4",
                    title: "提示4",
                    placement: "right",
                    onHidden: function t() {
                        console.warn("隐藏提示4");
                    }
                });
                return i;
            }
            i(e, [ {
                key: "render",
                value: function t() {
                    var e = hx(r);
                    return e;
                }
            } ]);
            return e;
        }(Lego.UI.Baseview);
        e.default = p;
    },
    233: function(t, e, n) {
        "use strict";
        var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        function r(t) {
            return t && (typeof t === "undefined" ? "undefined" : i(t)) === "object" && "default" in t ? t["default"] : t;
        }
        var o = r(n(234));
        var a = function(t) {
            var e = false;
            var n = 1e6;
            var i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            function r(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function o(t) {
                return (t[0] || t).nodeType;
            }
            function a() {
                return {
                    bindType: e.end,
                    delegateType: e.end,
                    handle: function e(n) {
                        if (t(n.target).is(this)) {
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
                var t = document.createElement("bootstrap");
                for (var e in i) {
                    if (t.style[e] !== undefined) {
                        return {
                            end: i[e]
                        };
                    }
                }
                return false;
            }
            function f(e) {
                var n = this;
                var i = false;
                t(this).one(u.TRANSITION_END, function() {
                    i = true;
                });
                setTimeout(function() {
                    if (!i) {
                        u.triggerTransitionEnd(n);
                    }
                }, e);
                return this;
            }
            function l() {
                e = s();
                t.fn.emulateTransitionEnd = f;
                if (u.supportsTransitionEnd()) {
                    t.event.special[u.TRANSITION_END] = a();
                }
            }
            var u = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function t(e) {
                    do {
                        e += ~~(Math.random() * n);
                    } while (document.getElementById(e));
                    return e;
                },
                getSelectorFromElement: function t(e) {
                    var n = e.getAttribute("data-target");
                    if (!n) {
                        n = e.getAttribute("href") || "";
                        n = /^#[a-z]/i.test(n) ? n : null;
                    }
                    return n;
                },
                reflow: function t(e) {
                    new Function("bs", "return bs")(e.offsetHeight);
                },
                triggerTransitionEnd: function n(i) {
                    t(i).trigger(e.end);
                },
                supportsTransitionEnd: function t() {
                    return Boolean(e);
                },
                typeCheckConfig: function t(e, n, i) {
                    for (var a in i) {
                        if (i.hasOwnProperty(a)) {
                            var s = i[a];
                            var f = n[a];
                            var l = void 0;
                            if (f && o(f)) {
                                l = "element";
                            } else {
                                l = r(f);
                            }
                            if (!new RegExp(s).test(l)) {
                                throw new Error(e.toUpperCase() + ": " + ('Option "' + a + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'));
                            }
                        }
                    }
                }
            };
            l();
            return u;
        }(jQuery);
        var s = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(t) {
            return typeof t === "undefined" ? "undefined" : i(t);
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : i(t);
        };
        var f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        window.Tether = o;
        var u = function(t) {
            if (window.Tether === undefined) {
                throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            }
            var e = "tooltip";
            var n = "4.0.0-alpha.5";
            var i = "bs.tooltip";
            var r = "." + i;
            var u = t.fn[e];
            var c = 150;
            var h = "bs-tether";
            var d = {
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
            var p = {
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
            var v = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            };
            var g = {
                IN: "in",
                OUT: "out"
            };
            var m = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                INSERTED: "inserted" + r,
                CLICK: "click" + r,
                FOCUSIN: "focusin" + r,
                FOCUSOUT: "focusout" + r,
                MOUSEENTER: "mouseenter" + r,
                MOUSELEAVE: "mouseleave" + r
            };
            var y = {
                FADE: "fade",
                IN: "in"
            };
            var b = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            };
            var E = {
                element: false,
                enabled: false
            };
            var T = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            };
            var w = function() {
                function u(t, e) {
                    l(this, u);
                    this._isEnabled = true;
                    this._timeout = 0;
                    this._hoverState = "";
                    this._activeTrigger = {};
                    this._tether = null;
                    this.element = t;
                    this.config = this._getConfig(e);
                    this.tip = null;
                    this._setListeners();
                }
                f(u, [ {
                    key: "enable",
                    value: function t() {
                        this._isEnabled = true;
                    }
                }, {
                    key: "disable",
                    value: function t() {
                        this._isEnabled = false;
                    }
                }, {
                    key: "toggleEnabled",
                    value: function t() {
                        this._isEnabled = !this._isEnabled;
                    }
                }, {
                    key: "toggle",
                    value: function e(n) {
                        if (n) {
                            var i = this.constructor.DATA_KEY;
                            var r = t(n.currentTarget).data(i);
                            if (!r) {
                                r = new this.constructor(n.currentTarget, this._getDelegateConfig());
                                t(n.currentTarget).data(i, r);
                            }
                            r._activeTrigger.click = !r._activeTrigger.click;
                            if (r._isWithActiveTrigger()) {
                                r._enter(null, r);
                            } else {
                                r._leave(null, r);
                            }
                        } else {
                            if (t(this.getTipElement()).hasClass(y.IN)) {
                                this._leave(null, this);
                                return;
                            }
                            this._enter(null, this);
                        }
                    }
                }, {
                    key: "dispose",
                    value: function e() {
                        clearTimeout(this._timeout);
                        this.cleanupTether();
                        t.removeData(this.element, this.constructor.DATA_KEY);
                        t(this.element).off(this.constructor.EVENT_KEY);
                        if (this.tip) {
                            t(this.tip).remove();
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
                    value: function e() {
                        var n = this;
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) {
                                return;
                            }
                            var s = this.getTipElement();
                            var f = a.getUID(this.constructor.NAME);
                            s.setAttribute("id", f);
                            this.element.setAttribute("aria-describedby", f);
                            this.setContent();
                            if (this.config.animation) {
                                t(s).addClass(y.FADE);
                            }
                            var l = typeof this.config.placement === "function" ? this.config.placement.call(this, s, this.element) : this.config.placement;
                            var c = this._getAttachment(l);
                            t(s).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                            t(this.element).trigger(this.constructor.Event.INSERTED);
                            this._tether = new o({
                                attachment: c,
                                element: s,
                                target: this.element,
                                classes: E,
                                classPrefix: h,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: false
                            });
                            a.reflow(s);
                            this._tether.position();
                            t(s).addClass(y.IN);
                            var d = function e() {
                                var i = n._hoverState;
                                n._hoverState = null;
                                t(n.element).trigger(n.constructor.Event.SHOWN);
                                if (i === g.OUT) {
                                    n._leave(null, n);
                                }
                            };
                            if (a.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE)) {
                                t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(u._TRANSITION_DURATION);
                                return;
                            }
                            d();
                        }
                    }
                }, {
                    key: "hide",
                    value: function e(n) {
                        var i = this;
                        var r = this.getTipElement();
                        var o = t.Event(this.constructor.Event.HIDE);
                        var s = function e() {
                            if (i._hoverState !== g.IN && r.parentNode) {
                                r.parentNode.removeChild(r);
                            }
                            i.element.removeAttribute("aria-describedby");
                            t(i.element).trigger(i.constructor.Event.HIDDEN);
                            i.cleanupTether();
                            if (n) {
                                n();
                            }
                        };
                        t(this.element).trigger(o);
                        if (o.isDefaultPrevented()) {
                            return;
                        }
                        t(r).removeClass(y.IN);
                        if (a.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE)) {
                            t(r).one(a.TRANSITION_END, s).emulateTransitionEnd(c);
                        } else {
                            s();
                        }
                        this._hoverState = "";
                    }
                }, {
                    key: "isWithContent",
                    value: function t() {
                        return Boolean(this.getTitle());
                    }
                }, {
                    key: "getTipElement",
                    value: function e() {
                        return this.tip = this.tip || t(this.config.template)[0];
                    }
                }, {
                    key: "setContent",
                    value: function e() {
                        var n = t(this.getTipElement());
                        this.setElementContent(n.find(b.TOOLTIP_INNER), this.getTitle());
                        n.removeClass(y.FADE).removeClass(y.IN);
                        this.cleanupTether();
                    }
                }, {
                    key: "setElementContent",
                    value: function e(n, i) {
                        var r = this.config.html;
                        if ((typeof i === "undefined" ? "undefined" : s(i)) === "object" && (i.nodeType || i.jquery)) {
                            if (r) {
                                if (!t(i).parent().is(n)) {
                                    n.empty().append(i);
                                }
                            } else {
                                n.text(t(i).text());
                            }
                        } else {
                            n[r ? "html" : "text"](i);
                        }
                    }
                }, {
                    key: "getTitle",
                    value: function t() {
                        var e = this.element.getAttribute("data-original-title");
                        if (!e) {
                            e = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                        }
                        return e;
                    }
                }, {
                    key: "cleanupTether",
                    value: function t() {
                        if (this._tether) {
                            this._tether.destroy();
                        }
                    }
                }, {
                    key: "_getAttachment",
                    value: function t(e) {
                        return v[e.toUpperCase()];
                    }
                }, {
                    key: "_setListeners",
                    value: function e() {
                        var n = this;
                        var i = this.config.trigger.split(" ");
                        i.forEach(function(e) {
                            if (e === "click") {
                                t(n.element).on(n.constructor.Event.CLICK, n.config.selector, t.proxy(n.toggle, n));
                            } else if (e !== T.MANUAL) {
                                var i = e === T.HOVER ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN;
                                var r = e === T.HOVER ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                                t(n.element).on(i, n.config.selector, t.proxy(n._enter, n)).on(r, n.config.selector, t.proxy(n._leave, n));
                            }
                        });
                        if (this.config.selector) {
                            this.config = t.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            });
                        } else {
                            this._fixTitle();
                        }
                    }
                }, {
                    key: "_fixTitle",
                    value: function t() {
                        var e = s(this.element.getAttribute("data-original-title"));
                        if (this.element.getAttribute("title") || e !== "string") {
                            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                            this.element.setAttribute("title", "");
                        }
                    }
                }, {
                    key: "_enter",
                    value: function e(n, i) {
                        var r = this.constructor.DATA_KEY;
                        i = i || t(n.currentTarget).data(r);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            t(n.currentTarget).data(r, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusin" ? T.FOCUS : T.HOVER] = true;
                        }
                        if (t(i.getTipElement()).hasClass(y.IN) || i._hoverState === g.IN) {
                            i._hoverState = g.IN;
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = g.IN;
                        if (!i.config.delay || !i.config.delay.show) {
                            i.show();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === g.IN) {
                                i.show();
                            }
                        }, i.config.delay.show);
                    }
                }, {
                    key: "_leave",
                    value: function e(n, i) {
                        var r = this.constructor.DATA_KEY;
                        i = i || t(n.currentTarget).data(r);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            t(n.currentTarget).data(r, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusout" ? T.FOCUS : T.HOVER] = false;
                        }
                        if (i._isWithActiveTrigger()) {
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = g.OUT;
                        if (!i.config.delay || !i.config.delay.hide) {
                            i.hide();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === g.OUT) {
                                i.hide();
                            }
                        }, i.config.delay.hide);
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function t() {
                        for (var e in this._activeTrigger) {
                            if (this._activeTrigger[e]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: "_getConfig",
                    value: function n(i) {
                        i = t.extend({}, this.constructor.Default, t(this.element).data(), i);
                        if (i.delay && typeof i.delay === "number") {
                            i.delay = {
                                show: i.delay,
                                hide: i.delay
                            };
                        }
                        a.typeCheckConfig(e, i, this.constructor.DefaultType);
                        return i;
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function t() {
                        var e = {};
                        if (this.config) {
                            for (var n in this.config) {
                                if (this.constructor.Default[n] !== this.config[n]) {
                                    e[n] = this.config[n];
                                }
                            }
                        }
                        return e;
                    }
                } ], [ {
                    key: "_jQueryInterface",
                    value: function e(n) {
                        return this.each(function() {
                            var e = t(this).data(i);
                            var r = (typeof n === "undefined" ? "undefined" : s(n)) === "object" ? n : null;
                            if (!e && /dispose|hide/.test(n)) {
                                return;
                            }
                            if (!e) {
                                e = new u(this, r);
                                t(this).data(i, e);
                            }
                            if (typeof n === "string") {
                                if (e[n] === undefined) {
                                    throw new Error('No method named "' + n + '"');
                                }
                                e[n]();
                            }
                        });
                    }
                }, {
                    key: "VERSION",
                    get: function t() {
                        return n;
                    }
                }, {
                    key: "Default",
                    get: function t() {
                        return d;
                    }
                }, {
                    key: "NAME",
                    get: function t() {
                        return e;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function t() {
                        return i;
                    }
                }, {
                    key: "Event",
                    get: function t() {
                        return m;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function t() {
                        return r;
                    }
                }, {
                    key: "DefaultType",
                    get: function t() {
                        return p;
                    }
                } ]);
                return u;
            }();
            t.fn[e] = w._jQueryInterface;
            t.fn[e].Constructor = w;
            t.fn[e].noConflict = function() {
                t.fn[e] = u;
                return w._jQueryInterface;
            };
            return w;
        }(jQuery);
        var c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function h(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var d = function() {
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                h(this, t);
                var n = {
                    el: "",
                    selector: false,
                    title: "",
                    content: "",
                    animation: true,
                    container: false,
                    delay: 0,
                    html: false,
                    placement: "top",
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    eventName: "hover focus",
                    constraints: [],
                    offset: "0 0",
                    onHidden: function t() {}
                };
                Object.assign(n, e);
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
            c(t, [ {
                key: "render",
                value: function t() {
                    var e = this;
                    var n = this.el instanceof $ ? this.el : $(this.el);
                    if (n.length) {
                        n.tooltip(this.options);
                        n.on("hidden.bs.tooltip", function() {
                            if (typeof e.onHidden === "function") e.onHidden(event);
                        });
                    }
                    return n;
                }
            } ]);
            return t;
        }();
        Lego.components("tooltip", function(t) {
            return new d(t);
        });
        t.exports = d;
    },
    234: function(t, e, n) {
        var i, r;
        (function(o, a) {
            if (true) {
                !(i = a, r = typeof i === "function" ? i.call(e, n, e, t) : i, r !== undefined && (t.exports = r));
            } else if (typeof e === "object") {
                t.exports = a(require, e, t);
            } else {
                o.Tether = a();
            }
        })(this, function(t, e, n) {
            "use strict";
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || false;
                        i.configurable = true;
                        if ("value" in i) i.writable = true;
                        Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, n, i) {
                    if (n) t(e.prototype, n);
                    if (i) t(e, i);
                    return e;
                };
            }();
            function r(t, e) {
                if (!(t instanceof e)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var o = undefined;
            if (typeof o === "undefined") {
                o = {
                    modules: []
                };
            }
            var a = null;
            function s(t) {
                var e = t.getBoundingClientRect();
                var n = {};
                for (var i in e) {
                    n[i] = e[i];
                }
                if (t.ownerDocument !== document) {
                    var r = t.ownerDocument.defaultView.frameElement;
                    if (r) {
                        var o = s(r);
                        n.top += o.top;
                        n.bottom += o.top;
                        n.left += o.left;
                        n.right += o.left;
                    }
                }
                return n;
            }
            function f(t) {
                var e = getComputedStyle(t) || {};
                var n = e.position;
                var i = [];
                if (n === "fixed") {
                    return [ t ];
                }
                var r = t;
                while ((r = r.parentNode) && r && r.nodeType === 1) {
                    var o = undefined;
                    try {
                        o = getComputedStyle(r);
                    } catch (t) {}
                    if (typeof o === "undefined" || o === null) {
                        i.push(r);
                        return i;
                    }
                    var a = o;
                    var s = a.overflow;
                    var f = a.overflowX;
                    var l = a.overflowY;
                    if (/(auto|scroll)/.test(s + l + f)) {
                        if (n !== "absolute" || [ "relative", "absolute", "fixed" ].indexOf(o.position) >= 0) {
                            i.push(r);
                        }
                    }
                }
                i.push(t.ownerDocument.body);
                if (t.ownerDocument !== document) {
                    i.push(t.ownerDocument.defaultView);
                }
                return i;
            }
            var l = function() {
                var t = 0;
                return function() {
                    return ++t;
                };
            }();
            var u = {};
            var c = function t() {
                var e = a;
                if (!e || !document.body.contains(e)) {
                    e = document.createElement("div");
                    e.setAttribute("data-tether-id", l());
                    m(e.style, {
                        top: 0,
                        left: 0,
                        position: "absolute"
                    });
                    document.body.appendChild(e);
                    a = e;
                }
                var n = e.getAttribute("data-tether-id");
                if (typeof u[n] === "undefined") {
                    u[n] = s(e);
                    C(function() {
                        delete u[n];
                    });
                }
                return u[n];
            };
            function h() {
                if (a) {
                    document.body.removeChild(a);
                }
                a = null;
            }
            function d(t) {
                var e = undefined;
                if (t === document) {
                    e = document;
                    t = document.documentElement;
                } else {
                    e = t.ownerDocument;
                }
                var n = e.documentElement;
                var i = s(t);
                var r = c();
                i.top -= r.top;
                i.left -= r.left;
                if (typeof i.width === "undefined") {
                    i.width = document.body.scrollWidth - i.left - i.right;
                }
                if (typeof i.height === "undefined") {
                    i.height = document.body.scrollHeight - i.top - i.bottom;
                }
                i.top = i.top - n.clientTop;
                i.left = i.left - n.clientLeft;
                i.right = e.body.clientWidth - i.width - i.left;
                i.bottom = e.body.clientHeight - i.height - i.top;
                return i;
            }
            function p(t) {
                return t.offsetParent || document.documentElement;
            }
            var v = null;
            function g() {
                if (v) {
                    return v;
                }
                var t = document.createElement("div");
                t.style.width = "100%";
                t.style.height = "200px";
                var e = document.createElement("div");
                m(e.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    visibility: "hidden",
                    width: "200px",
                    height: "150px",
                    overflow: "hidden"
                });
                e.appendChild(t);
                document.body.appendChild(e);
                var n = t.offsetWidth;
                e.style.overflow = "scroll";
                var i = t.offsetWidth;
                if (n === i) {
                    i = e.clientWidth;
                }
                document.body.removeChild(e);
                var r = n - i;
                v = {
                    width: r,
                    height: r
                };
                return v;
            }
            function m() {
                var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var e = [];
                Array.prototype.push.apply(e, arguments);
                e.slice(1).forEach(function(e) {
                    if (e) {
                        for (var n in e) {
                            if ({}.hasOwnProperty.call(e, n)) {
                                t[n] = e[n];
                            }
                        }
                    }
                });
                return t;
            }
            function y(t, e) {
                if (typeof t.classList !== "undefined") {
                    e.split(" ").forEach(function(e) {
                        if (e.trim()) {
                            t.classList.remove(e);
                        }
                    });
                } else {
                    var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi");
                    var i = T(t).replace(n, " ");
                    w(t, i);
                }
            }
            function b(t, e) {
                if (typeof t.classList !== "undefined") {
                    e.split(" ").forEach(function(e) {
                        if (e.trim()) {
                            t.classList.add(e);
                        }
                    });
                } else {
                    y(t, e);
                    var n = T(t) + (" " + e);
                    w(t, n);
                }
            }
            function E(t, e) {
                if (typeof t.classList !== "undefined") {
                    return t.classList.contains(e);
                }
                var n = T(t);
                return new RegExp("(^| )" + e + "( |$)", "gi").test(n);
            }
            function T(t) {
                if (t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString) {
                    return t.className.baseVal;
                }
                return t.className;
            }
            function w(t, e) {
                t.setAttribute("class", e);
            }
            function _(t, e, n) {
                n.forEach(function(n) {
                    if (e.indexOf(n) === -1 && E(t, n)) {
                        y(t, n);
                    }
                });
                e.forEach(function(e) {
                    if (!E(t, e)) {
                        b(t, e);
                    }
                });
            }
            var O = [];
            var C = function t(e) {
                O.push(e);
            };
            var A = function t() {
                var e = undefined;
                while (e = O.pop()) {
                    e();
                }
            };
            var S = function() {
                function t() {
                    r(this, t);
                }
                i(t, [ {
                    key: "on",
                    value: function t(e, n, i) {
                        var r = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                        if (typeof this.bindings === "undefined") {
                            this.bindings = {};
                        }
                        if (typeof this.bindings[e] === "undefined") {
                            this.bindings[e] = [];
                        }
                        this.bindings[e].push({
                            handler: n,
                            ctx: i,
                            once: r
                        });
                    }
                }, {
                    key: "once",
                    value: function t(e, n, i) {
                        this.on(e, n, i, true);
                    }
                }, {
                    key: "off",
                    value: function t(e, n) {
                        if (typeof this.bindings === "undefined" || typeof this.bindings[e] === "undefined") {
                            return;
                        }
                        if (typeof n === "undefined") {
                            delete this.bindings[e];
                        } else {
                            var i = 0;
                            while (i < this.bindings[e].length) {
                                if (this.bindings[e][i].handler === n) {
                                    this.bindings[e].splice(i, 1);
                                } else {
                                    ++i;
                                }
                            }
                        }
                    }
                }, {
                    key: "trigger",
                    value: function t(e) {
                        if (typeof this.bindings !== "undefined" && this.bindings[e]) {
                            var n = 0;
                            for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) {
                                r[o - 1] = arguments[o];
                            }
                            while (n < this.bindings[e].length) {
                                var a = this.bindings[e][n];
                                var s = a.handler;
                                var f = a.ctx;
                                var l = a.once;
                                var u = f;
                                if (typeof u === "undefined") {
                                    u = this;
                                }
                                s.apply(u, r);
                                if (l) {
                                    this.bindings[e].splice(n, 1);
                                } else {
                                    ++n;
                                }
                            }
                        }
                    }
                } ]);
                return t;
            }();
            o.Utils = {
                getActualBoundingClientRect: s,
                getScrollParents: f,
                getBounds: d,
                getOffsetParent: p,
                extend: m,
                addClass: b,
                removeClass: y,
                hasClass: E,
                updateClasses: _,
                defer: C,
                flush: A,
                uniqueId: l,
                Evented: S,
                getScrollBarSize: g,
                removeUtilElements: h
            };
            "use strict";
            var N = function() {
                function t(t, e) {
                    var n = [];
                    var i = true;
                    var r = false;
                    var o = undefined;
                    try {
                        for (var a = t[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (e && n.length === e) break;
                        }
                    } catch (t) {
                        r = true;
                        o = t;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (r) throw o;
                        }
                    }
                    return n;
                }
                return function(e, n) {
                    if (Array.isArray(e)) {
                        return e;
                    } else if (Symbol.iterator in Object(e)) {
                        return t(e, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || false;
                        i.configurable = true;
                        if ("value" in i) i.writable = true;
                        Object.defineProperty(t, i.key, i);
                    }
                }
                return function(e, n, i) {
                    if (n) t(e.prototype, n);
                    if (i) t(e, i);
                    return e;
                };
            }();
            var k = function t(e, n, i) {
                var r = true;
                t: while (r) {
                    var o = e, a = n, s = i;
                    r = false;
                    if (o === null) o = Function.prototype;
                    var f = Object.getOwnPropertyDescriptor(o, a);
                    if (f === undefined) {
                        var l = Object.getPrototypeOf(o);
                        if (l === null) {
                            return undefined;
                        } else {
                            e = l;
                            n = a;
                            i = s;
                            r = true;
                            f = l = undefined;
                            continue t;
                        }
                    } else if ("value" in f) {
                        return f.value;
                    } else {
                        var u = f.get;
                        if (u === undefined) {
                            return undefined;
                        }
                        return u.call(s);
                    }
                }
            };
            function r(t, e) {
                if (!(t instanceof e)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function I(t, e) {
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
            if (typeof o === "undefined") {
                throw new Error("You must include the utils.js file before tether.js");
            }
            var D = o.Utils;
            var f = D.getScrollParents;
            var d = D.getBounds;
            var p = D.getOffsetParent;
            var m = D.extend;
            var b = D.addClass;
            var y = D.removeClass;
            var _ = D.updateClasses;
            var C = D.defer;
            var A = D.flush;
            var g = D.getScrollBarSize;
            var h = D.removeUtilElements;
            function x(t, e) {
                var n = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
                return t + n >= e && e >= t - n;
            }
            var j = function() {
                if (typeof document === "undefined") {
                    return "";
                }
                var t = document.createElement("div");
                var e = [ "transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform" ];
                for (var n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (t.style[i] !== undefined) {
                        return i;
                    }
                }
            }();
            var H = [];
            var U = function t() {
                H.forEach(function(t) {
                    t.position(false);
                });
                A();
            };
            function P() {
                if (typeof performance !== "undefined" && typeof performance.now !== "undefined") {
                    return performance.now();
                }
                return +new Date();
            }
            (function() {
                var t = null;
                var e = null;
                var n = null;
                var i = function i() {
                    if (typeof e !== "undefined" && e > 16) {
                        e = Math.min(e - 16, 250);
                        n = setTimeout(i, 250);
                        return;
                    }
                    if (typeof t !== "undefined" && P() - t < 10) {
                        return;
                    }
                    if (n != null) {
                        clearTimeout(n);
                        n = null;
                    }
                    t = P();
                    U();
                    e = P() - t;
                };
                if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
                    [ "resize", "scroll", "touchmove" ].forEach(function(t) {
                        window.addEventListener(t, i);
                    });
                }
            })();
            var L = {
                center: "center",
                left: "right",
                right: "left"
            };
            var R = {
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
            var F = function t(e, n) {
                var i = e.left;
                var r = e.top;
                if (i === "auto") {
                    i = L[n.left];
                }
                if (r === "auto") {
                    r = R[n.top];
                }
                return {
                    left: i,
                    top: r
                };
            };
            var W = function t(e) {
                var n = e.left;
                var i = e.top;
                if (typeof M[e.left] !== "undefined") {
                    n = M[e.left];
                }
                if (typeof M[e.top] !== "undefined") {
                    i = M[e.top];
                }
                return {
                    left: n,
                    top: i
                };
            };
            function Y() {
                var t = {
                    top: 0,
                    left: 0
                };
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) {
                    n[i] = arguments[i];
                }
                n.forEach(function(e) {
                    var n = e.top;
                    var i = e.left;
                    if (typeof n === "string") {
                        n = parseFloat(n, 10);
                    }
                    if (typeof i === "string") {
                        i = parseFloat(i, 10);
                    }
                    t.top += n;
                    t.left += i;
                });
                return t;
            }
            function B(t, e) {
                if (typeof t.left === "string" && t.left.indexOf("%") !== -1) {
                    t.left = parseFloat(t.left, 10) / 100 * e.width;
                }
                if (typeof t.top === "string" && t.top.indexOf("%") !== -1) {
                    t.top = parseFloat(t.top, 10) / 100 * e.height;
                }
                return t;
            }
            var V = function t(e) {
                var n = e.split(" ");
                var i = N(n, 2);
                var r = i[0];
                var o = i[1];
                return {
                    top: r,
                    left: o
                };
            };
            var z = V;
            var K = function(t) {
                I(e, t);
                function e(t) {
                    var n = this;
                    r(this, e);
                    k(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
                    this.position = this.position.bind(this);
                    H.push(this);
                    this.history = [];
                    this.setOptions(t, false);
                    o.modules.forEach(function(t) {
                        if (typeof t.initialize !== "undefined") {
                            t.initialize.call(n);
                        }
                    });
                    this.position();
                }
                i(e, [ {
                    key: "getClass",
                    value: function t() {
                        var e = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
                        var n = this.options.classes;
                        if (typeof n !== "undefined" && n[e]) {
                            return this.options.classes[e];
                        } else if (this.options.classPrefix) {
                            return this.options.classPrefix + "-" + e;
                        } else {
                            return e;
                        }
                    }
                }, {
                    key: "setOptions",
                    value: function t(e) {
                        var n = this;
                        var i = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                        var r = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                        this.options = m(r, e);
                        var o = this.options;
                        var a = o.element;
                        var s = o.target;
                        var l = o.targetModifier;
                        this.element = a;
                        this.target = s;
                        this.targetModifier = l;
                        if (this.target === "viewport") {
                            this.target = document.body;
                            this.targetModifier = "visible";
                        } else if (this.target === "scroll-handle") {
                            this.target = document.body;
                            this.targetModifier = "scroll-handle";
                        }
                        [ "element", "target" ].forEach(function(t) {
                            if (typeof n[t] === "undefined") {
                                throw new Error("Tether Error: Both element and target must be defined");
                            }
                            if (typeof n[t].jquery !== "undefined") {
                                n[t] = n[t][0];
                            } else if (typeof n[t] === "string") {
                                n[t] = document.querySelector(n[t]);
                            }
                        });
                        b(this.element, this.getClass("element"));
                        if (!(this.options.addTargetClasses === false)) {
                            b(this.target, this.getClass("target"));
                        }
                        if (!this.options.attachment) {
                            throw new Error("Tether Error: You must provide an attachment");
                        }
                        this.targetAttachment = z(this.options.targetAttachment);
                        this.attachment = z(this.options.attachment);
                        this.offset = V(this.options.offset);
                        this.targetOffset = V(this.options.targetOffset);
                        if (typeof this.scrollParents !== "undefined") {
                            this.disable();
                        }
                        if (this.targetModifier === "scroll-handle") {
                            this.scrollParents = [ this.target ];
                        } else {
                            this.scrollParents = f(this.target);
                        }
                        if (!(this.options.enabled === false)) {
                            this.enable(i);
                        }
                    }
                }, {
                    key: "getTargetBounds",
                    value: function t() {
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
                                    var e = d(this.target);
                                    var n = {
                                        height: e.height,
                                        width: e.width,
                                        top: e.top,
                                        left: e.left
                                    };
                                    n.height = Math.min(n.height, e.height - (pageYOffset - e.top));
                                    n.height = Math.min(n.height, e.height - (e.top + e.height - (pageYOffset + innerHeight)));
                                    n.height = Math.min(innerHeight, n.height);
                                    n.height -= 2;
                                    n.width = Math.min(n.width, e.width - (pageXOffset - e.left));
                                    n.width = Math.min(n.width, e.width - (e.left + e.width - (pageXOffset + innerWidth)));
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
                                var e = undefined;
                                var i = this.target;
                                if (i === document.body) {
                                    i = document.documentElement;
                                    e = {
                                        left: pageXOffset,
                                        top: pageYOffset,
                                        height: innerHeight,
                                        width: innerWidth
                                    };
                                } else {
                                    e = d(i);
                                }
                                var r = getComputedStyle(i);
                                var o = i.scrollWidth > i.clientWidth || [ r.overflow, r.overflowX ].indexOf("scroll") >= 0 || this.target !== document.body;
                                var a = 0;
                                if (o) {
                                    a = 15;
                                }
                                var s = e.height - parseFloat(r.borderTopWidth) - parseFloat(r.borderBottomWidth) - a;
                                var n = {
                                    width: 15,
                                    height: s * .975 * (s / i.scrollHeight),
                                    left: e.left + e.width - parseFloat(r.borderLeftWidth) - 15
                                };
                                var f = 0;
                                if (s < 408 && this.target === document.body) {
                                    f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58;
                                }
                                if (this.target !== document.body) {
                                    n.height = Math.max(n.height, 24);
                                }
                                var l = this.target.scrollTop / (i.scrollHeight - s);
                                n.top = l * (s - n.height - f) + e.top + parseFloat(r.borderTopWidth);
                                if (this.target === document.body) {
                                    n.height = Math.max(n.height, 24);
                                }
                                return n;
                            }
                        } else {
                            return d(this.target);
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function t() {
                        this._cache = {};
                    }
                }, {
                    key: "cache",
                    value: function t(e, n) {
                        if (typeof this._cache === "undefined") {
                            this._cache = {};
                        }
                        if (typeof this._cache[e] === "undefined") {
                            this._cache[e] = n.call(this);
                        }
                        return this._cache[e];
                    }
                }, {
                    key: "enable",
                    value: function t() {
                        var e = this;
                        var n = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                        if (!(this.options.addTargetClasses === false)) {
                            b(this.target, this.getClass("enabled"));
                        }
                        b(this.element, this.getClass("enabled"));
                        this.enabled = true;
                        this.scrollParents.forEach(function(t) {
                            if (t !== e.target.ownerDocument) {
                                t.addEventListener("scroll", e.position);
                            }
                        });
                        if (n) {
                            this.position();
                        }
                    }
                }, {
                    key: "disable",
                    value: function t() {
                        var e = this;
                        y(this.target, this.getClass("enabled"));
                        y(this.element, this.getClass("enabled"));
                        this.enabled = false;
                        if (typeof this.scrollParents !== "undefined") {
                            this.scrollParents.forEach(function(t) {
                                t.removeEventListener("scroll", e.position);
                            });
                        }
                    }
                }, {
                    key: "destroy",
                    value: function t() {
                        var e = this;
                        this.disable();
                        H.forEach(function(t, n) {
                            if (t === e) {
                                H.splice(n, 1);
                            }
                        });
                        if (H.length === 0) {
                            h();
                        }
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function t(e, n) {
                        var i = this;
                        e = e || this.attachment;
                        n = n || this.targetAttachment;
                        var r = [ "left", "top", "bottom", "right", "middle", "center" ];
                        if (typeof this._addAttachClasses !== "undefined" && this._addAttachClasses.length) {
                            this._addAttachClasses.splice(0, this._addAttachClasses.length);
                        }
                        if (typeof this._addAttachClasses === "undefined") {
                            this._addAttachClasses = [];
                        }
                        var o = this._addAttachClasses;
                        if (e.top) {
                            o.push(this.getClass("element-attached") + "-" + e.top);
                        }
                        if (e.left) {
                            o.push(this.getClass("element-attached") + "-" + e.left);
                        }
                        if (n.top) {
                            o.push(this.getClass("target-attached") + "-" + n.top);
                        }
                        if (n.left) {
                            o.push(this.getClass("target-attached") + "-" + n.left);
                        }
                        var a = [];
                        r.forEach(function(t) {
                            a.push(i.getClass("element-attached") + "-" + t);
                            a.push(i.getClass("target-attached") + "-" + t);
                        });
                        C(function() {
                            if (!(typeof i._addAttachClasses !== "undefined")) {
                                return;
                            }
                            _(i.element, i._addAttachClasses, a);
                            if (!(i.options.addTargetClasses === false)) {
                                _(i.target, i._addAttachClasses, a);
                            }
                            delete i._addAttachClasses;
                        });
                    }
                }, {
                    key: "position",
                    value: function t() {
                        var e = this;
                        var n = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                        if (!this.enabled) {
                            return;
                        }
                        this.clearCache();
                        var i = F(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, i);
                        var r = this.cache("element-bounds", function() {
                            return d(e.element);
                        });
                        var a = r.width;
                        var s = r.height;
                        if (a === 0 && s === 0 && typeof this.lastSize !== "undefined") {
                            var f = this.lastSize;
                            a = f.width;
                            s = f.height;
                        } else {
                            this.lastSize = {
                                width: a,
                                height: s
                            };
                        }
                        var l = this.cache("target-bounds", function() {
                            return e.getTargetBounds();
                        });
                        var u = l;
                        var c = B(W(this.attachment), {
                            width: a,
                            height: s
                        });
                        var h = B(W(i), u);
                        var v = B(this.offset, {
                            width: a,
                            height: s
                        });
                        var m = B(this.targetOffset, u);
                        c = Y(c, v);
                        h = Y(h, m);
                        var y = l.left + h.left - c.left;
                        var b = l.top + h.top - c.top;
                        for (var E = 0; E < o.modules.length; ++E) {
                            var T = o.modules[E];
                            var w = T.position.call(this, {
                                left: y,
                                top: b,
                                targetAttachment: i,
                                targetPos: l,
                                elementPos: r,
                                offset: c,
                                targetOffset: h,
                                manualOffset: v,
                                manualTargetOffset: m,
                                scrollbarSize: S,
                                attachment: this.attachment
                            });
                            if (w === false) {
                                return false;
                            } else if (typeof w === "undefined" || typeof w !== "object") {
                                continue;
                            } else {
                                b = w.top;
                                y = w.left;
                            }
                        }
                        var _ = {
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
                        var O = this.target.ownerDocument;
                        var C = O.defaultView;
                        var S = undefined;
                        if (C.innerHeight > O.documentElement.clientHeight) {
                            S = this.cache("scrollbar-size", g);
                            _.viewport.bottom -= S.height;
                        }
                        if (C.innerWidth > O.documentElement.clientWidth) {
                            S = this.cache("scrollbar-size", g);
                            _.viewport.right -= S.width;
                        }
                        if ([ "", "static" ].indexOf(O.body.style.position) === -1 || [ "", "static" ].indexOf(O.body.parentElement.style.position) === -1) {
                            _.page.bottom = O.body.scrollHeight - b - s;
                            _.page.right = O.body.scrollWidth - y - a;
                        }
                        if (typeof this.options.optimizations !== "undefined" && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== "undefined")) {
                            (function() {
                                var t = e.cache("target-offsetparent", function() {
                                    return p(e.target);
                                });
                                var n = e.cache("target-offsetparent-bounds", function() {
                                    return d(t);
                                });
                                var i = getComputedStyle(t);
                                var r = n;
                                var o = {};
                                [ "Top", "Left", "Bottom", "Right" ].forEach(function(t) {
                                    o[t.toLowerCase()] = parseFloat(i["border" + t + "Width"]);
                                });
                                n.right = O.body.scrollWidth - n.left - r.width + o.right;
                                n.bottom = O.body.scrollHeight - n.top - r.height + o.bottom;
                                if (_.page.top >= n.top + o.top && _.page.bottom >= n.bottom) {
                                    if (_.page.left >= n.left + o.left && _.page.right >= n.right) {
                                        var a = t.scrollTop;
                                        var s = t.scrollLeft;
                                        _.offset = {
                                            top: _.page.top - n.top + a - o.top,
                                            left: _.page.left - n.left + s - o.left
                                        };
                                    }
                                }
                            })();
                        }
                        this.move(_);
                        this.history.unshift(_);
                        if (this.history.length > 3) {
                            this.history.pop();
                        }
                        if (n) {
                            A();
                        }
                        return true;
                    }
                }, {
                    key: "move",
                    value: function t(e) {
                        var n = this;
                        if (!(typeof this.element.parentNode !== "undefined")) {
                            return;
                        }
                        var i = {};
                        for (var r in e) {
                            i[r] = {};
                            for (var o in e[r]) {
                                var a = false;
                                for (var s = 0; s < this.history.length; ++s) {
                                    var f = this.history[s];
                                    if (typeof f[r] !== "undefined" && !x(f[r][o], e[r][o])) {
                                        a = true;
                                        break;
                                    }
                                }
                                if (!a) {
                                    i[r][o] = true;
                                }
                            }
                        }
                        var l = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        };
                        var u = function t(e, i) {
                            var r = typeof n.options.optimizations !== "undefined";
                            var o = r ? n.options.optimizations.gpu : null;
                            if (o !== false) {
                                var a = undefined, s = undefined;
                                if (e.top) {
                                    l.top = 0;
                                    a = i.top;
                                } else {
                                    l.bottom = 0;
                                    a = -i.bottom;
                                }
                                if (e.left) {
                                    l.left = 0;
                                    s = i.left;
                                } else {
                                    l.right = 0;
                                    s = -i.right;
                                }
                                if (window.matchMedia) {
                                    var f = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                    if (!f) {
                                        s = Math.round(s);
                                        a = Math.round(a);
                                    }
                                }
                                l[j] = "translateX(" + s + "px) translateY(" + a + "px)";
                                if (j !== "msTransform") {
                                    l[j] += " translateZ(0)";
                                }
                            } else {
                                if (e.top) {
                                    l.top = i.top + "px";
                                } else {
                                    l.bottom = i.bottom + "px";
                                }
                                if (e.left) {
                                    l.left = i.left + "px";
                                } else {
                                    l.right = i.right + "px";
                                }
                            }
                        };
                        var c = false;
                        if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right)) {
                            l.position = "absolute";
                            u(i.page, e.page);
                        } else if ((i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right)) {
                            l.position = "fixed";
                            u(i.viewport, e.viewport);
                        } else if (typeof i.offset !== "undefined" && i.offset.top && i.offset.left) {
                            (function() {
                                l.position = "absolute";
                                var t = n.cache("target-offsetparent", function() {
                                    return p(n.target);
                                });
                                if (p(n.element) !== t) {
                                    C(function() {
                                        n.element.parentNode.removeChild(n.element);
                                        t.appendChild(n.element);
                                    });
                                }
                                u(i.offset, e.offset);
                                c = true;
                            })();
                        } else {
                            l.position = "absolute";
                            u({
                                top: true,
                                left: true
                            }, e.page);
                        }
                        if (!c) {
                            if (this.options.bodyElement) {
                                this.options.bodyElement.appendChild(this.element);
                            } else {
                                var h = true;
                                var d = this.element.parentNode;
                                while (d && d.nodeType === 1 && d.tagName !== "BODY") {
                                    if (getComputedStyle(d).position !== "static") {
                                        h = false;
                                        break;
                                    }
                                    d = d.parentNode;
                                }
                                if (!h) {
                                    this.element.parentNode.removeChild(this.element);
                                    this.element.ownerDocument.body.appendChild(this.element);
                                }
                            }
                        }
                        var v = {};
                        var g = false;
                        for (var o in l) {
                            var y = l[o];
                            var b = this.element.style[o];
                            if (b !== y) {
                                g = true;
                                v[o] = y;
                            }
                        }
                        if (g) {
                            C(function() {
                                m(n.element.style, v);
                                n.trigger("repositioned");
                            });
                        }
                    }
                } ]);
                return e;
            }(S);
            K.modules = [];
            o.position = U;
            var Q = m(K, o);
            "use strict";
            var N = function() {
                function t(t, e) {
                    var n = [];
                    var i = true;
                    var r = false;
                    var o = undefined;
                    try {
                        for (var a = t[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (e && n.length === e) break;
                        }
                    } catch (t) {
                        r = true;
                        o = t;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (r) throw o;
                        }
                    }
                    return n;
                }
                return function(e, n) {
                    if (Array.isArray(e)) {
                        return e;
                    } else if (Symbol.iterator in Object(e)) {
                        return t(e, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var D = o.Utils;
            var d = D.getBounds;
            var m = D.extend;
            var _ = D.updateClasses;
            var C = D.defer;
            var X = [ "left", "top", "right", "bottom" ];
            function q(t, e) {
                if (e === "scrollParent") {
                    e = t.scrollParents[0];
                } else if (e === "window") {
                    e = [ pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset ];
                }
                if (e === document) {
                    e = e.documentElement;
                }
                if (typeof e.nodeType !== "undefined") {
                    (function() {
                        var t = e;
                        var n = d(e);
                        var i = n;
                        var r = getComputedStyle(e);
                        e = [ i.left, i.top, n.width + i.left, n.height + i.top ];
                        if (t.ownerDocument !== document) {
                            var o = t.ownerDocument.defaultView;
                            e[0] += o.pageXOffset;
                            e[1] += o.pageYOffset;
                            e[2] += o.pageXOffset;
                            e[3] += o.pageYOffset;
                        }
                        X.forEach(function(t, n) {
                            t = t[0].toUpperCase() + t.substr(1);
                            if (t === "Top" || t === "Left") {
                                e[n] += parseFloat(r["border" + t + "Width"]);
                            } else {
                                e[n] -= parseFloat(r["border" + t + "Width"]);
                            }
                        });
                    })();
                }
                return e;
            }
            o.modules.push({
                position: function t(e) {
                    var n = this;
                    var i = e.top;
                    var r = e.left;
                    var o = e.targetAttachment;
                    if (!this.options.constraints) {
                        return true;
                    }
                    var a = this.cache("element-bounds", function() {
                        return d(n.element);
                    });
                    var s = a.height;
                    var f = a.width;
                    if (f === 0 && s === 0 && typeof this.lastSize !== "undefined") {
                        var l = this.lastSize;
                        f = l.width;
                        s = l.height;
                    }
                    var u = this.cache("target-bounds", function() {
                        return n.getTargetBounds();
                    });
                    var c = u.height;
                    var h = u.width;
                    var p = [ this.getClass("pinned"), this.getClass("out-of-bounds") ];
                    this.options.constraints.forEach(function(t) {
                        var e = t.outOfBoundsClass;
                        var n = t.pinnedClass;
                        if (e) {
                            p.push(e);
                        }
                        if (n) {
                            p.push(n);
                        }
                    });
                    p.forEach(function(t) {
                        [ "left", "top", "right", "bottom" ].forEach(function(e) {
                            p.push(t + "-" + e);
                        });
                    });
                    var v = [];
                    var g = m({}, o);
                    var y = m({}, this.attachment);
                    this.options.constraints.forEach(function(t) {
                        var e = t.to;
                        var a = t.attachment;
                        var l = t.pin;
                        if (typeof a === "undefined") {
                            a = "";
                        }
                        var u = undefined, d = undefined;
                        if (a.indexOf(" ") >= 0) {
                            var p = a.split(" ");
                            var m = N(p, 2);
                            d = m[0];
                            u = m[1];
                        } else {
                            u = d = a;
                        }
                        var b = q(n, e);
                        if (d === "target" || d === "both") {
                            if (i < b[1] && g.top === "top") {
                                i += c;
                                g.top = "bottom";
                            }
                            if (i + s > b[3] && g.top === "bottom") {
                                i -= c;
                                g.top = "top";
                            }
                        }
                        if (d === "together") {
                            if (g.top === "top") {
                                if (y.top === "bottom" && i < b[1]) {
                                    i += c;
                                    g.top = "bottom";
                                    i += s;
                                    y.top = "top";
                                } else if (y.top === "top" && i + s > b[3] && i - (s - c) >= b[1]) {
                                    i -= s - c;
                                    g.top = "bottom";
                                    y.top = "bottom";
                                }
                            }
                            if (g.top === "bottom") {
                                if (y.top === "top" && i + s > b[3]) {
                                    i -= c;
                                    g.top = "top";
                                    i -= s;
                                    y.top = "bottom";
                                } else if (y.top === "bottom" && i < b[1] && i + (s * 2 - c) <= b[3]) {
                                    i += s - c;
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
                        if (u === "target" || u === "both") {
                            if (r < b[0] && g.left === "left") {
                                r += h;
                                g.left = "right";
                            }
                            if (r + f > b[2] && g.left === "right") {
                                r -= h;
                                g.left = "left";
                            }
                        }
                        if (u === "together") {
                            if (r < b[0] && g.left === "left") {
                                if (y.left === "right") {
                                    r += h;
                                    g.left = "right";
                                    r += f;
                                    y.left = "left";
                                } else if (y.left === "left") {
                                    r += h;
                                    g.left = "right";
                                    r -= f;
                                    y.left = "right";
                                }
                            } else if (r + f > b[2] && g.left === "right") {
                                if (y.left === "left") {
                                    r -= h;
                                    g.left = "left";
                                    r -= f;
                                    y.left = "right";
                                } else if (y.left === "right") {
                                    r -= h;
                                    g.left = "left";
                                    r += f;
                                    y.left = "left";
                                }
                            } else if (g.left === "center") {
                                if (r + f > b[2] && y.left === "left") {
                                    r -= f;
                                    y.left = "right";
                                } else if (r < b[0] && y.left === "right") {
                                    r += f;
                                    y.left = "left";
                                }
                            }
                        }
                        if (d === "element" || d === "both") {
                            if (i < b[1] && y.top === "bottom") {
                                i += s;
                                y.top = "top";
                            }
                            if (i + s > b[3] && y.top === "top") {
                                i -= s;
                                y.top = "bottom";
                            }
                        }
                        if (u === "element" || u === "both") {
                            if (r < b[0]) {
                                if (y.left === "right") {
                                    r += f;
                                    y.left = "left";
                                } else if (y.left === "center") {
                                    r += f / 2;
                                    y.left = "left";
                                }
                            }
                            if (r + f > b[2]) {
                                if (y.left === "left") {
                                    r -= f;
                                    y.left = "right";
                                } else if (y.left === "center") {
                                    r -= f / 2;
                                    y.left = "right";
                                }
                            }
                        }
                        if (typeof l === "string") {
                            l = l.split(",").map(function(t) {
                                return t.trim();
                            });
                        } else if (l === true) {
                            l = [ "top", "left", "right", "bottom" ];
                        }
                        l = l || [];
                        var E = [];
                        var T = [];
                        if (i < b[1]) {
                            if (l.indexOf("top") >= 0) {
                                i = b[1];
                                E.push("top");
                            } else {
                                T.push("top");
                            }
                        }
                        if (i + s > b[3]) {
                            if (l.indexOf("bottom") >= 0) {
                                i = b[3] - s;
                                E.push("bottom");
                            } else {
                                T.push("bottom");
                            }
                        }
                        if (r < b[0]) {
                            if (l.indexOf("left") >= 0) {
                                r = b[0];
                                E.push("left");
                            } else {
                                T.push("left");
                            }
                        }
                        if (r + f > b[2]) {
                            if (l.indexOf("right") >= 0) {
                                r = b[2] - f;
                                E.push("right");
                            } else {
                                T.push("right");
                            }
                        }
                        if (E.length) {
                            (function() {
                                var t = undefined;
                                if (typeof n.options.pinnedClass !== "undefined") {
                                    t = n.options.pinnedClass;
                                } else {
                                    t = n.getClass("pinned");
                                }
                                v.push(t);
                                E.forEach(function(e) {
                                    v.push(t + "-" + e);
                                });
                            })();
                        }
                        if (T.length) {
                            (function() {
                                var t = undefined;
                                if (typeof n.options.outOfBoundsClass !== "undefined") {
                                    t = n.options.outOfBoundsClass;
                                } else {
                                    t = n.getClass("out-of-bounds");
                                }
                                v.push(t);
                                T.forEach(function(e) {
                                    v.push(t + "-" + e);
                                });
                            })();
                        }
                        if (E.indexOf("left") >= 0 || E.indexOf("right") >= 0) {
                            y.left = g.left = false;
                        }
                        if (E.indexOf("top") >= 0 || E.indexOf("bottom") >= 0) {
                            y.top = g.top = false;
                        }
                        if (g.top !== o.top || g.left !== o.left || y.top !== n.attachment.top || y.left !== n.attachment.left) {
                            n.updateAttachClasses(y, g);
                            n.trigger("update", {
                                attachment: y,
                                targetAttachment: g
                            });
                        }
                    });
                    C(function() {
                        if (!(n.options.addTargetClasses === false)) {
                            _(n.target, v, p);
                        }
                        _(n.element, v, p);
                    });
                    return {
                        top: i,
                        left: r
                    };
                }
            });
            "use strict";
            var D = o.Utils;
            var d = D.getBounds;
            var _ = D.updateClasses;
            var C = D.defer;
            o.modules.push({
                position: function t(e) {
                    var n = this;
                    var i = e.top;
                    var r = e.left;
                    var o = this.cache("element-bounds", function() {
                        return d(n.element);
                    });
                    var a = o.height;
                    var s = o.width;
                    var f = this.getTargetBounds();
                    var l = i + a;
                    var u = r + s;
                    var c = [];
                    if (i <= f.bottom && l >= f.top) {
                        [ "left", "right" ].forEach(function(t) {
                            var e = f[t];
                            if (e === r || e === u) {
                                c.push(t);
                            }
                        });
                    }
                    if (r <= f.right && u >= f.left) {
                        [ "top", "bottom" ].forEach(function(t) {
                            var e = f[t];
                            if (e === i || e === l) {
                                c.push(t);
                            }
                        });
                    }
                    var h = [];
                    var p = [];
                    var v = [ "left", "top", "right", "bottom" ];
                    h.push(this.getClass("abutted"));
                    v.forEach(function(t) {
                        h.push(n.getClass("abutted") + "-" + t);
                    });
                    if (c.length) {
                        p.push(this.getClass("abutted"));
                    }
                    c.forEach(function(t) {
                        p.push(n.getClass("abutted") + "-" + t);
                    });
                    C(function() {
                        if (!(n.options.addTargetClasses === false)) {
                            _(n.target, p, h);
                        }
                        _(n.element, p, h);
                    });
                    return true;
                }
            });
            "use strict";
            var N = function() {
                function t(t, e) {
                    var n = [];
                    var i = true;
                    var r = false;
                    var o = undefined;
                    try {
                        for (var a = t[Symbol.iterator](), s; !(i = (s = a.next()).done); i = true) {
                            n.push(s.value);
                            if (e && n.length === e) break;
                        }
                    } catch (t) {
                        r = true;
                        o = t;
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]();
                        } finally {
                            if (r) throw o;
                        }
                    }
                    return n;
                }
                return function(e, n) {
                    if (Array.isArray(e)) {
                        return e;
                    } else if (Symbol.iterator in Object(e)) {
                        return t(e, n);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            o.modules.push({
                position: function t(e) {
                    var n = e.top;
                    var i = e.left;
                    if (!this.options.shift) {
                        return;
                    }
                    var r = this.options.shift;
                    if (typeof this.options.shift === "function") {
                        r = this.options.shift.call(this, {
                            top: n,
                            left: i
                        });
                    }
                    var o = undefined, a = undefined;
                    if (typeof r === "string") {
                        r = r.split(" ");
                        r[1] = r[1] || r[0];
                        var s = r;
                        var f = N(s, 2);
                        o = f[0];
                        a = f[1];
                        o = parseFloat(o, 10);
                        a = parseFloat(a, 10);
                    } else {
                        o = r.top;
                        a = r.left;
                    }
                    n += o;
                    i += a;
                    return {
                        top: n,
                        left: i
                    };
                }
            });
            return Q;
        });
    },
    235: function(t, e, n) {
        "use strict";
        var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        function r(t) {
            return t && (typeof t === "undefined" ? "undefined" : i(t)) === "object" && "default" in t ? t["default"] : t;
        }
        var o = r(n(234));
        var a = function(t) {
            var e = false;
            var n = 1e6;
            var i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            function r(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function o(t) {
                return (t[0] || t).nodeType;
            }
            function a() {
                return {
                    bindType: e.end,
                    delegateType: e.end,
                    handle: function e(n) {
                        if (t(n.target).is(this)) {
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
                var t = document.createElement("bootstrap");
                for (var e in i) {
                    if (t.style[e] !== undefined) {
                        return {
                            end: i[e]
                        };
                    }
                }
                return false;
            }
            function f(e) {
                var n = this;
                var i = false;
                t(this).one(u.TRANSITION_END, function() {
                    i = true;
                });
                setTimeout(function() {
                    if (!i) {
                        u.triggerTransitionEnd(n);
                    }
                }, e);
                return this;
            }
            function l() {
                e = s();
                t.fn.emulateTransitionEnd = f;
                if (u.supportsTransitionEnd()) {
                    t.event.special[u.TRANSITION_END] = a();
                }
            }
            var u = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function t(e) {
                    do {
                        e += ~~(Math.random() * n);
                    } while (document.getElementById(e));
                    return e;
                },
                getSelectorFromElement: function t(e) {
                    var n = e.getAttribute("data-target");
                    if (!n) {
                        n = e.getAttribute("href") || "";
                        n = /^#[a-z]/i.test(n) ? n : null;
                    }
                    return n;
                },
                reflow: function t(e) {
                    new Function("bs", "return bs")(e.offsetHeight);
                },
                triggerTransitionEnd: function n(i) {
                    t(i).trigger(e.end);
                },
                supportsTransitionEnd: function t() {
                    return Boolean(e);
                },
                typeCheckConfig: function t(e, n, i) {
                    for (var a in i) {
                        if (i.hasOwnProperty(a)) {
                            var s = i[a];
                            var f = n[a];
                            var l = void 0;
                            if (f && o(f)) {
                                l = "element";
                            } else {
                                l = r(f);
                            }
                            if (!new RegExp(s).test(l)) {
                                throw new Error(e.toUpperCase() + ": " + ('Option "' + a + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'));
                            }
                        }
                    }
                }
            };
            l();
            return u;
        }(jQuery);
        var s = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(t) {
            return typeof t === "undefined" ? "undefined" : i(t);
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : i(t);
        };
        var f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function l(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        window.Tether = o;
        var u = function(t) {
            if (window.Tether === undefined) {
                throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            }
            var e = "tooltip";
            var n = "4.0.0-alpha.5";
            var i = "bs.tooltip";
            var r = "." + i;
            var u = t.fn[e];
            var c = 150;
            var h = "bs-tether";
            var d = {
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
            var p = {
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
            var v = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            };
            var g = {
                IN: "in",
                OUT: "out"
            };
            var m = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                INSERTED: "inserted" + r,
                CLICK: "click" + r,
                FOCUSIN: "focusin" + r,
                FOCUSOUT: "focusout" + r,
                MOUSEENTER: "mouseenter" + r,
                MOUSELEAVE: "mouseleave" + r
            };
            var y = {
                FADE: "fade",
                IN: "in"
            };
            var b = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            };
            var E = {
                element: false,
                enabled: false
            };
            var T = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            };
            var w = function() {
                function u(t, e) {
                    l(this, u);
                    this._isEnabled = true;
                    this._timeout = 0;
                    this._hoverState = "";
                    this._activeTrigger = {};
                    this._tether = null;
                    this.element = t;
                    this.config = this._getConfig(e);
                    this.tip = null;
                    this._setListeners();
                }
                f(u, [ {
                    key: "enable",
                    value: function t() {
                        this._isEnabled = true;
                    }
                }, {
                    key: "disable",
                    value: function t() {
                        this._isEnabled = false;
                    }
                }, {
                    key: "toggleEnabled",
                    value: function t() {
                        this._isEnabled = !this._isEnabled;
                    }
                }, {
                    key: "toggle",
                    value: function e(n) {
                        if (n) {
                            var i = this.constructor.DATA_KEY;
                            var r = t(n.currentTarget).data(i);
                            if (!r) {
                                r = new this.constructor(n.currentTarget, this._getDelegateConfig());
                                t(n.currentTarget).data(i, r);
                            }
                            r._activeTrigger.click = !r._activeTrigger.click;
                            if (r._isWithActiveTrigger()) {
                                r._enter(null, r);
                            } else {
                                r._leave(null, r);
                            }
                        } else {
                            if (t(this.getTipElement()).hasClass(y.IN)) {
                                this._leave(null, this);
                                return;
                            }
                            this._enter(null, this);
                        }
                    }
                }, {
                    key: "dispose",
                    value: function e() {
                        clearTimeout(this._timeout);
                        this.cleanupTether();
                        t.removeData(this.element, this.constructor.DATA_KEY);
                        t(this.element).off(this.constructor.EVENT_KEY);
                        if (this.tip) {
                            t(this.tip).remove();
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
                    value: function e() {
                        var n = this;
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) {
                                return;
                            }
                            var s = this.getTipElement();
                            var f = a.getUID(this.constructor.NAME);
                            s.setAttribute("id", f);
                            this.element.setAttribute("aria-describedby", f);
                            this.setContent();
                            if (this.config.animation) {
                                t(s).addClass(y.FADE);
                            }
                            var l = typeof this.config.placement === "function" ? this.config.placement.call(this, s, this.element) : this.config.placement;
                            var c = this._getAttachment(l);
                            t(s).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                            t(this.element).trigger(this.constructor.Event.INSERTED);
                            this._tether = new o({
                                attachment: c,
                                element: s,
                                target: this.element,
                                classes: E,
                                classPrefix: h,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: false
                            });
                            a.reflow(s);
                            this._tether.position();
                            t(s).addClass(y.IN);
                            var d = function e() {
                                var i = n._hoverState;
                                n._hoverState = null;
                                t(n.element).trigger(n.constructor.Event.SHOWN);
                                if (i === g.OUT) {
                                    n._leave(null, n);
                                }
                            };
                            if (a.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE)) {
                                t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(u._TRANSITION_DURATION);
                                return;
                            }
                            d();
                        }
                    }
                }, {
                    key: "hide",
                    value: function e(n) {
                        var i = this;
                        var r = this.getTipElement();
                        var o = t.Event(this.constructor.Event.HIDE);
                        var s = function e() {
                            if (i._hoverState !== g.IN && r.parentNode) {
                                r.parentNode.removeChild(r);
                            }
                            i.element.removeAttribute("aria-describedby");
                            t(i.element).trigger(i.constructor.Event.HIDDEN);
                            i.cleanupTether();
                            if (n) {
                                n();
                            }
                        };
                        t(this.element).trigger(o);
                        if (o.isDefaultPrevented()) {
                            return;
                        }
                        t(r).removeClass(y.IN);
                        if (a.supportsTransitionEnd() && t(this.tip).hasClass(y.FADE)) {
                            t(r).one(a.TRANSITION_END, s).emulateTransitionEnd(c);
                        } else {
                            s();
                        }
                        this._hoverState = "";
                    }
                }, {
                    key: "isWithContent",
                    value: function t() {
                        return Boolean(this.getTitle());
                    }
                }, {
                    key: "getTipElement",
                    value: function e() {
                        return this.tip = this.tip || t(this.config.template)[0];
                    }
                }, {
                    key: "setContent",
                    value: function e() {
                        var n = t(this.getTipElement());
                        this.setElementContent(n.find(b.TOOLTIP_INNER), this.getTitle());
                        n.removeClass(y.FADE).removeClass(y.IN);
                        this.cleanupTether();
                    }
                }, {
                    key: "setElementContent",
                    value: function e(n, i) {
                        var r = this.config.html;
                        if ((typeof i === "undefined" ? "undefined" : s(i)) === "object" && (i.nodeType || i.jquery)) {
                            if (r) {
                                if (!t(i).parent().is(n)) {
                                    n.empty().append(i);
                                }
                            } else {
                                n.text(t(i).text());
                            }
                        } else {
                            n[r ? "html" : "text"](i);
                        }
                    }
                }, {
                    key: "getTitle",
                    value: function t() {
                        var e = this.element.getAttribute("data-original-title");
                        if (!e) {
                            e = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                        }
                        return e;
                    }
                }, {
                    key: "cleanupTether",
                    value: function t() {
                        if (this._tether) {
                            this._tether.destroy();
                        }
                    }
                }, {
                    key: "_getAttachment",
                    value: function t(e) {
                        return v[e.toUpperCase()];
                    }
                }, {
                    key: "_setListeners",
                    value: function e() {
                        var n = this;
                        var i = this.config.trigger.split(" ");
                        i.forEach(function(e) {
                            if (e === "click") {
                                t(n.element).on(n.constructor.Event.CLICK, n.config.selector, t.proxy(n.toggle, n));
                            } else if (e !== T.MANUAL) {
                                var i = e === T.HOVER ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN;
                                var r = e === T.HOVER ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                                t(n.element).on(i, n.config.selector, t.proxy(n._enter, n)).on(r, n.config.selector, t.proxy(n._leave, n));
                            }
                        });
                        if (this.config.selector) {
                            this.config = t.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            });
                        } else {
                            this._fixTitle();
                        }
                    }
                }, {
                    key: "_fixTitle",
                    value: function t() {
                        var e = s(this.element.getAttribute("data-original-title"));
                        if (this.element.getAttribute("title") || e !== "string") {
                            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                            this.element.setAttribute("title", "");
                        }
                    }
                }, {
                    key: "_enter",
                    value: function e(n, i) {
                        var r = this.constructor.DATA_KEY;
                        i = i || t(n.currentTarget).data(r);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            t(n.currentTarget).data(r, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusin" ? T.FOCUS : T.HOVER] = true;
                        }
                        if (t(i.getTipElement()).hasClass(y.IN) || i._hoverState === g.IN) {
                            i._hoverState = g.IN;
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = g.IN;
                        if (!i.config.delay || !i.config.delay.show) {
                            i.show();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === g.IN) {
                                i.show();
                            }
                        }, i.config.delay.show);
                    }
                }, {
                    key: "_leave",
                    value: function e(n, i) {
                        var r = this.constructor.DATA_KEY;
                        i = i || t(n.currentTarget).data(r);
                        if (!i) {
                            i = new this.constructor(n.currentTarget, this._getDelegateConfig());
                            t(n.currentTarget).data(r, i);
                        }
                        if (n) {
                            i._activeTrigger[n.type === "focusout" ? T.FOCUS : T.HOVER] = false;
                        }
                        if (i._isWithActiveTrigger()) {
                            return;
                        }
                        clearTimeout(i._timeout);
                        i._hoverState = g.OUT;
                        if (!i.config.delay || !i.config.delay.hide) {
                            i.hide();
                            return;
                        }
                        i._timeout = setTimeout(function() {
                            if (i._hoverState === g.OUT) {
                                i.hide();
                            }
                        }, i.config.delay.hide);
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function t() {
                        for (var e in this._activeTrigger) {
                            if (this._activeTrigger[e]) {
                                return true;
                            }
                        }
                        return false;
                    }
                }, {
                    key: "_getConfig",
                    value: function n(i) {
                        i = t.extend({}, this.constructor.Default, t(this.element).data(), i);
                        if (i.delay && typeof i.delay === "number") {
                            i.delay = {
                                show: i.delay,
                                hide: i.delay
                            };
                        }
                        a.typeCheckConfig(e, i, this.constructor.DefaultType);
                        return i;
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function t() {
                        var e = {};
                        if (this.config) {
                            for (var n in this.config) {
                                if (this.constructor.Default[n] !== this.config[n]) {
                                    e[n] = this.config[n];
                                }
                            }
                        }
                        return e;
                    }
                } ], [ {
                    key: "_jQueryInterface",
                    value: function e(n) {
                        return this.each(function() {
                            var e = t(this).data(i);
                            var r = (typeof n === "undefined" ? "undefined" : s(n)) === "object" ? n : null;
                            if (!e && /dispose|hide/.test(n)) {
                                return;
                            }
                            if (!e) {
                                e = new u(this, r);
                                t(this).data(i, e);
                            }
                            if (typeof n === "string") {
                                if (e[n] === undefined) {
                                    throw new Error('No method named "' + n + '"');
                                }
                                e[n]();
                            }
                        });
                    }
                }, {
                    key: "VERSION",
                    get: function t() {
                        return n;
                    }
                }, {
                    key: "Default",
                    get: function t() {
                        return d;
                    }
                }, {
                    key: "NAME",
                    get: function t() {
                        return e;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function t() {
                        return i;
                    }
                }, {
                    key: "Event",
                    get: function t() {
                        return m;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function t() {
                        return r;
                    }
                }, {
                    key: "DefaultType",
                    get: function t() {
                        return p;
                    }
                } ]);
                return u;
            }();
            t.fn[e] = w._jQueryInterface;
            t.fn[e].Constructor = w;
            t.fn[e].noConflict = function() {
                t.fn[e] = u;
                return w._jQueryInterface;
            };
            return w;
        }(jQuery);
        var c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function h(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var d = function() {
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                h(this, t);
                var n = {
                    el: "",
                    selector: false,
                    title: "",
                    content: "",
                    animation: true,
                    container: false,
                    delay: 0,
                    html: false,
                    placement: "top",
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    eventName: "hover focus",
                    constraints: [],
                    offset: "0 0",
                    onHidden: function t() {}
                };
                Object.assign(n, e);
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
            c(t, [ {
                key: "render",
                value: function t() {
                    var e = this;
                    var n = this.el instanceof $ ? this.el : $(this.el);
                    if (n.length) {
                        n.tooltip(this.options);
                        n.on("hidden.bs.tooltip", function() {
                            if (typeof e.onHidden === "function") e.onHidden(event);
                        });
                    }
                    return n;
                }
            } ]);
            return t;
        }();
        Lego.components("tooltip", function(t) {
            return new d(t);
        });
        var p = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(t) {
            return typeof t === "undefined" ? "undefined" : i(t);
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : i(t);
        };
        var v = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function g(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function m(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && ((typeof e === "undefined" ? "undefined" : i(e)) === "object" || typeof e === "function") ? e : t;
        }
        function y(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : i(e)));
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
        var b = function(t) {
            var e = "popover";
            var n = "4.0.0-alpha.5";
            var i = "bs.popover";
            var r = "." + i;
            var o = t.fn[e];
            var a = t.extend({}, u.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
            });
            var s = t.extend({}, u.DefaultType, {
                content: "(string|element|function)"
            });
            var f = {
                FADE: "fade",
                IN: "in"
            };
            var l = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            };
            var c = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                INSERTED: "inserted" + r,
                CLICK: "click" + r,
                FOCUSIN: "focusin" + r,
                FOCUSOUT: "focusout" + r,
                MOUSEENTER: "mouseenter" + r,
                MOUSELEAVE: "mouseleave" + r
            };
            var h = function(o) {
                y(u, o);
                function u() {
                    g(this, u);
                    return m(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
                }
                v(u, [ {
                    key: "isWithContent",
                    value: function t() {
                        return this.getTitle() || this._getContent();
                    }
                }, {
                    key: "getTipElement",
                    value: function e() {
                        return this.tip = this.tip || t(this.config.template)[0];
                    }
                }, {
                    key: "setContent",
                    value: function e() {
                        var n = t(this.getTipElement());
                        this.setElementContent(n.find(l.TITLE), this.getTitle());
                        this.setElementContent(n.find(l.CONTENT), this._getContent());
                        n.removeClass(f.FADE).removeClass(f.IN);
                        this.cleanupTether();
                    }
                }, {
                    key: "_getContent",
                    value: function t() {
                        return this.element.getAttribute("data-content") || (typeof this.config.content === "function" ? this.config.content.call(this.element) : this.config.content);
                    }
                } ], [ {
                    key: "_jQueryInterface",
                    value: function e(n) {
                        return this.each(function() {
                            var e = t(this).data(i);
                            var r = (typeof n === "undefined" ? "undefined" : p(n)) === "object" ? n : null;
                            if (!e && /destroy|hide/.test(n)) {
                                return;
                            }
                            if (!e) {
                                e = new u(this, r);
                                t(this).data(i, e);
                            }
                            if (typeof n === "string") {
                                if (e[n] === undefined) {
                                    throw new Error('No method named "' + n + '"');
                                }
                                e[n]();
                            }
                        });
                    }
                }, {
                    key: "VERSION",
                    get: function t() {
                        return n;
                    }
                }, {
                    key: "Default",
                    get: function t() {
                        return a;
                    }
                }, {
                    key: "NAME",
                    get: function t() {
                        return e;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function t() {
                        return i;
                    }
                }, {
                    key: "Event",
                    get: function t() {
                        return c;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function t() {
                        return r;
                    }
                }, {
                    key: "DefaultType",
                    get: function t() {
                        return s;
                    }
                } ]);
                return u;
            }(u);
            t.fn[e] = h._jQueryInterface;
            t.fn[e].Constructor = h;
            t.fn[e].noConflict = function() {
                t.fn[e] = o;
                return h._jQueryInterface;
            };
            return h;
        }(jQuery);
        var E = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(t, i.key, i);
                }
            }
            return function(e, n, i) {
                if (n) t(e.prototype, n);
                if (i) t(e, i);
                return e;
            };
        }();
        function T(t, e) {
            if (!(t instanceof e)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function w(t, e) {
            if (!t) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e && ((typeof e === "undefined" ? "undefined" : i(e)) === "object" || typeof e === "function") ? e : t;
        }
        function _(t, e) {
            if (typeof e !== "function" && e !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : i(e)));
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
        var O = function(t) {
            _(e, t);
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                T(this, e);
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
                    constraints: [ "hover", "focus" ],
                    offset: "",
                    onHidden: function t() {}
                };
                Object.assign(n, t);
                return w(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
            }
            E(e, [ {
                key: "render",
                value: function t() {
                    var e = this;
                    var n = this.el instanceof $ ? this.el : $(this.el);
                    if (n.length) {
                        n.popover(this.options);
                        n.on("hidden.bs.popover", function() {
                            if (typeof e.onHidden === "function") e.onHidden(event);
                        });
                    }
                    return n;
                }
            } ]);
            return e;
        }(d);
        Lego.components("popover", function(t) {
            return new O(t);
        });
        t.exports = O;
    }
});