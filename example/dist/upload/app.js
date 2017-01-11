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
        var o = n(257);
        var i = l(o);
        var a = n(258);
        var s = l(a);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = function() {
            function e() {
                c(this, e);
                return {
                    "/upload": [ this.index, this.tabs ],
                    "/upload/:tabs": [ this.index, this.tabs ]
                };
            }
            r(e, [ {
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
        HBY.router(new u());
    },
    257: function(e, t) {
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
        var r = o([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function o(e, t) {
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
                i(this, t);
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
                    var n = hx(r, t.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    258: function(e, t, n) {
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
        var o = l([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var i = n(259);
        var a = s(i);
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
        var p = function(e) {
            f(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                c(this, t);
                var n = {
                    components: [ {
                        el: "#upload1",
                        name: "uploadname",
                        multiple: true,
                        onComplete: function e(t) {
                            console.warn("上传成功了", t);
                        }
                    } ]
                };
                Object.assign(n, e);
                return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
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
        t.default = p;
    },
    259: function(e, t, n) {
        "use strict";
        var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function o(e) {
            return e && (typeof e === "undefined" ? "undefined" : r(e)) === "object" && "default" in e ? e["default"] : e;
        }
        var i = o(n(260));
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
        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function l(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function c(e, t) {
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
        var u = function(e) {
            c(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                s(this, t);
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
                var r = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                r.xhr = o();
                r.startDate = 0;
                r.form = null;
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
                if (r.options.percent == 0) {
                    if (r.options.needToken && r.options.params.token || !r.options.needToken) {
                        r.uploadInit();
                        if (r.options.isAuto) r.start();
                    }
                }
                return r;
            }
            a(t, [ {
                key: "uploadInit",
                value: function e() {
                    var t = this;
                    var n = 0, r = this.options.file, o = this.options.params;
                    this.xhr.crossDomain = true;
                    r.id = r.id || Lego.randomKey(32);
                    this.form = new FormData();
                    this.form.append("file", r);
                    if (!Object.values(o).length) {
                        for (var i in o) {
                            this.form.append(i, o[i]);
                        }
                    }
                    this.xhr.upload.addEventListener("progress", function(e) {
                        if (e.lengthComputable) {
                            var r = new Date().getTime();
                            n = r - t.startDate;
                            var o = e.loaded / 1024, i = n / 1e3, a = o / i, s = void 0;
                            if (a > 1024) {
                                s = (a / 1024).toFixed(2) + "Mb/s";
                            } else {
                                s = a.toFixed(2) + "Kb/s";
                            }
                            var l = Math.round(e.loaded * 100 / e.total);
                            if (t.progressbar) {
                                t.progressbar.options.percent = l;
                            } else {
                                t.options.percent = l;
                            }
                        }
                        if (typeof t.options.onProgress == "function") {
                            t.options.onProgress(t);
                        }
                    }, false);
                    this.xhr.addEventListener("loadstart", function(e) {
                        if (typeof t.options.onBegin == "function") {
                            t.options.onBegin(r, t);
                        }
                    }, false);
                    this.xhr.addEventListener("load", function(e) {
                        if (t.xhr.readyState == 4 && t.xhr.status == 200 && t.xhr.responseText != "") {
                            var n = JSON.parse(t.xhr.response);
                            Object.assign(t.options.file, n);
                            if (t.options.params.key) {
                                t.options.file.url = t.options.downloadUri + t.options.key;
                            }
                            if (t.progressbar) {
                                t.progressbar.options.percent = 100;
                            } else {
                                t.options.percent = 100;
                            }
                            if (typeof t.options.onComplete == "function") {
                                t.options.onComplete(t, n);
                            }
                        } else if (t.xhr.status != 200 && t.xhr.responseText) {
                            var r = {
                                status: "error",
                                data: "Unknown error occurred: [" + t.xhr.responseText + "]"
                            };
                            if (typeof t.options.onFail == "function") {
                                t.options.onFail(t, r);
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
                    for (var a in this.options.headers) {
                        this.xhr.setRequestHeader(a, this.options.headers[a]);
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
        var f = function() {
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
        var p = v([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);
        var d = v([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);
        function v(e, t) {
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
        function b(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function g(e, t) {
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
        var m = function(e) {
            g(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                h(this, t);
                var n = {
                    type: "",
                    status: "",
                    showInfo: true,
                    percent: 0,
                    strokeWidth: 6,
                    onComplete: function e() {}
                };
                Object.assign(n, e);
                return b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            f(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    if (t.percent == 100) {
                        if (typeof t.onComplete == "function") t.onComplete();
                    }
                    var n = hx(p, t.showInfo ? hx(d, this.format(t.percent)) : "", t.status ? t.status : "primary", t.percent);
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
        Lego.components("progressbar", m);
        var y = function() {
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
        var w = k([ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);
        var O = k([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);
        var j = k([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', "\n                    </div>\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', "\n                    </div>\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);
        var x = k([ '<a href="javascript:;" class="closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>' ], [ '<a href="javascript:;" class="closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>' ]);
        function k(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function L(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _(e, t) {
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
        var I = function(e) {
            P(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                L(this, t);
                var n = {
                    events: {
                        "click .cancelbtn": "onCancel",
                        "click .closebtn": "onRemove"
                    },
                    uploadUri: "",
                    url: "",
                    percent: 0,
                    isAuto: true,
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
                return _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            y(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(w, Lego.UI.Util.getFileIcon(t.file.name), t.percent < 100 ? hx(O, val(t.file.name), "progressbar_" + t.vid) : hx(j, t.percent == 100 ? hx(x) : "", val(t.file.name), Lego.UI.Util.convertByteUnit(t.file.size), val(t.file.url), val(t.file.name)));
                    return n;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.options;
                    if (t.percent < 100) {
                        this.progressbar = Lego.create(m, {
                            el: "#progressbar_" + t.vid,
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
                    t.stopPropagation();
                    this.cancel();
                    this.remove();
                }
            }, {
                key: "onRemove",
                value: function e(t) {
                    t.stopPropagation();
                    var n = $(t.currentTarget), r = n.data("id"), o = n.data("hash");
                    if (this.options.onRemove) {
                        return this.options.onRemove(r, o);
                    }
                    this.remove();
                }
            } ]);
            return t;
        }(u);
        var U = typeof Symbol === "function" && r(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : r(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : r(e);
        };
        var C = function() {
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
        var T = R([ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);
        var E = R([ '<div class="upload-container"></div>' ], [ '<div class="upload-container"></div>' ]);
        function R(e, t) {
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
        function M(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : r(t)) === "object" || typeof t === "function") ? t : e;
        }
        function F(e, t) {
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
        var A = function(e) {
            F(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                S(this, t);
                var n = {
                    events: {
                        "click .addbtn": "onClickAdd"
                    },
                    keyRoot: "",
                    type: "file",
                    text: "添加附件",
                    name: "",
                    token: "",
                    params: {},
                    uploadUri: window.location.protocol === "https:" ? "https://up.qbox.me" : "http://upload.qiniu.com",
                    saveUri: "",
                    accept: "",
                    previewOption: null,
                    multiple: false,
                    context: null,
                    template: "",
                    maxFileSize: "5mb",
                    maxFilesCount: 9,
                    isAuto: true,
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
                var r = M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                r.reset();
                r.$(".fileInput").on("change", function(e) {
                    var t = $(e.currentTarget)[0];
                    r.uploadInit(t.files);
                });
                if (r.options.value.length) {
                    r.options.value.forEach(function(e, t) {
                        e.percent = 100;
                        r.showItem(e);
                    });
                }
                return r;
            }
            C(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = "";
                    n = hx(T, val(t.type), t.disabled ? "disabled" : "", val(t.text), this.getValue(), val(t.name), val(t.accept), t.showUploadList ? hx(E) : "");
                    return t.template ? t.template : n;
                }
            }, {
                key: "uploadInit",
                value: function e(t) {
                    var n = [];
                    if ((typeof t === "undefined" ? "undefined" : U(t)) == "object" && t[0]) {
                        n = Array.prototype.slice.call(t, 0);
                    } else {
                        n = [ t ];
                    }
                    var r = this, o = this.options, a = n.length, s = o.maxFilesCount;
                    if (a) {
                        if (a > s) {
                            Lego.UI.notification("warning", "只能上传" + s + "张图片");
                            return;
                        }
                        this.fileList.concat(n);
                        this.fileList = this.fileList.slice(0, s);
                        if (typeof o.onAddFile == "function") o.onAddFile(this.fileList, n);
                        n.forEach(function(e, t) {
                            e.id = Lego.randomKey(32);
                            if (Math.ceil(e.size / (1024 * 1024)) > parseInt(o.maxFileSize)) {
                                var a = "发送文件最大为" + o.maxFileSize;
                                if (n.length == 1) {
                                    Lego.UI.notification("error", a);
                                } else {
                                    debug.warn(a);
                                }
                                return;
                            }
                            if (r.fileList.find(function(t) {
                                return t == e;
                            })) return;
                            var s = {
                                uploadUri: o.uploadUri,
                                isAuto: o.isAuto,
                                file: e,
                                type: o.type,
                                percent: 0,
                                params: Object.assign({
                                    key: o.key || r.getKey(e.name),
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
                                                r.refresh();
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
                                i(e, Object.assign(o.previewOption, {
                                    success: function e(t) {
                                        s.previewImgSrc = t.blob;
                                        var n = r.showItem(s);
                                        n.sendUpload();
                                    }
                                }));
                            } else {
                                r.showItem(s);
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
                    this.$(".fileInput").click();
                }
            }, {
                key: "showItem",
                value: function e(t) {
                    var n = Lego.create(I, t);
                    var r = this.$(".upload-container");
                    if (r.length && n) {
                        if (this.options.multiple) {
                            r.append(n.el);
                        } else {
                            r.html(n.el);
                        }
                    }
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
        Lego.components("upload", A);
        e.exports = A;
    },
    260: function(e, t) {
        var n = function(e, t) {
            var n = n || webkitURL;
            var r = n.createObjectURL(e);
            var o = new Image();
            o.src = r;
            o.onload = function() {
                var e = this;
                var n = e.width, i = e.height, a = n / i;
                n = t.width || n;
                i = n / a;
                var s = document.createElement("canvas");
                var c = s.getContext("2d");
                $(s).attr({
                    width: n,
                    height: i
                });
                c.drawImage(e, 0, 0, n, i);
                var u = s.toDataURL("image/jpeg", t.quality || .8);
                if (navigator.userAgent.match(/iphone/i)) {
                    var f = new l(o);
                    f.render(s, {
                        maxWidth: n,
                        maxHeight: i,
                        quality: t.quality || .8,
                        orientation: 1
                    });
                    u = s.toDataURL("image/jpeg", t.quality || .8);
                }
                if (navigator.userAgent.match(/Android/i)) {
                    var p = new JPEGEncoder();
                    u = p.encode(c.getImageData(0, 0, n, i), t.quality * 100 || 80);
                }
                var d = {
                    width: n,
                    height: i,
                    blob: r,
                    base64: u,
                    clearBase64: u.substr(u.indexOf(",") + 1)
                };
                t.success(d);
            };
        };
        function r(e) {
            var t = e.naturalWidth, n = e.naturalHeight;
            if (t * n > 1024 * 1024) {
                var r = document.createElement("canvas");
                r.width = r.height = 1;
                var o = r.getContext("2d");
                o.drawImage(e, -t + 1, 0);
                return o.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function o(e, t, n) {
            var r = document.createElement("canvas");
            r.width = 1;
            r.height = n;
            var o = r.getContext("2d");
            o.drawImage(e, 0, 0);
            var i = o.getImageData(0, 0, 1, n).data;
            var a = 0;
            var s = n;
            var l = n;
            while (l > a) {
                var c = i[(l - 1) * 4 + 3];
                if (c === 0) {
                    s = l;
                } else {
                    a = l;
                }
                l = s + a >> 1;
            }
            var u = l / n;
            return u === 0 ? 1 : u;
        }
        function i(e, t, n) {
            var r = document.createElement("canvas");
            a(e, r, t, n);
            return r.toDataURL("image/jpeg", t.quality || .8);
        }
        function a(e, t, n, i) {
            var a = e.naturalWidth, l = e.naturalHeight;
            var c = n.width, u = n.height;
            var f = t.getContext("2d");
            f.save();
            s(t, f, c, u, n.orientation);
            var p = r(e);
            if (p) {
                a /= 2;
                l /= 2;
            }
            var d = 1024;
            var v = document.createElement("canvas");
            v.width = v.height = d;
            var h = v.getContext("2d");
            var b = i ? o(e, a, l) : 1;
            var g = Math.ceil(d * c / a);
            var m = Math.ceil(d * u / l / b);
            var y = 0;
            var w = 0;
            while (y < l) {
                var O = 0;
                var j = 0;
                while (O < a) {
                    h.clearRect(0, 0, d, d);
                    h.drawImage(e, -O, -y);
                    f.drawImage(v, 0, 0, d, d, j, w, g, m);
                    O += d;
                    j += g;
                }
                y += d;
                w += m;
            }
            f.restore();
            v = h = null;
        }
        function s(e, t, n, r, o) {
            switch (o) {
              case 5:
              case 6:
              case 7:
              case 8:
                e.width = r;
                e.height = n;
                break;

              default:
                e.width = n;
                e.height = r;
            }
            switch (o) {
              case 2:
                t.translate(n, 0);
                t.scale(-1, 1);
                break;

              case 3:
                t.translate(n, r);
                t.rotate(Math.PI);
                break;

              case 4:
                t.translate(0, r);
                t.scale(1, -1);
                break;

              case 5:
                t.rotate(.5 * Math.PI);
                t.scale(1, -1);
                break;

              case 6:
                t.rotate(.5 * Math.PI);
                t.translate(0, -r);
                break;

              case 7:
                t.rotate(.5 * Math.PI);
                t.translate(n, -r);
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
                var r = this;
                e.onload = function() {
                    var e = r.imageLoadListeners;
                    if (e) {
                        r.imageLoadListeners = null;
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
            var r = this.srcImage.naturalWidth, o = this.srcImage.naturalHeight, s = t.width, l = t.height, c = t.maxWidth, u = t.maxHeight, f = !this.blob || this.blob.type === "image/jpeg";
            if (s && !l) {
                l = o * s / r << 0;
            } else if (l && !s) {
                s = r * l / o << 0;
            } else {
                s = r;
                l = o;
            }
            if (c && s > c) {
                s = c;
                l = o * s / r << 0;
            }
            if (u && l > u) {
                l = u;
                s = r * l / o << 0;
            }
            var p = {
                width: s,
                height: l
            };
            for (var d in t) p[d] = t[d];
            var v = e.tagName.toLowerCase();
            if (v === "img") {
                e.src = i(this.srcImage, p, f);
            } else if (v === "canvas") {
                a(this.srcImage, e, p, f);
            }
            if (typeof this.onrender === "function") {
                this.onrender(e);
            }
        };
        e.exports = n;
    }
});