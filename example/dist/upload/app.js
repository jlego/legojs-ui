(function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        e[i].call(r.exports, r, r.exports, n);
        r.loaded = true;
        return r.exports;
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
        var r = n(257);
        var o = l(r);
        var a = n(258);
        var s = l(a);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var c = function() {
            function e() {
                u(this, e);
                return {
                    "/upload": [ this.index, this.tabs ],
                    "/upload/:tabs": [ this.index, this.tabs ]
                };
            }
            i(e, [ {
                key: "index",
                value: function e() {
                    this.viewObj = HBY.create(o.default, {
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
    257: function(e, t) {
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
        var i = r([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
        function r(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function o(e, t) {
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
                o(this, t);
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
    258: function(e, t, n) {
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
        var r = l([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-4">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-4">\n              <upload id="upload2"></upload>\n            </div>\n            <div class="col-sm-4">\n              <upload id="upload3"></upload>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-4">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-4">\n              <upload id="upload2"></upload>\n            </div>\n            <div class="col-sm-4">\n              <upload id="upload3"></upload>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var o = n(259);
        var a = s(o);
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
        function u(e, t) {
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
                u(this, t);
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
                return c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            i(t, [ {
                key: "render",
                value: function e() {
                    var t = hx(r);
                    return t;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = d;
    },
    259: function(e, t, n) {
        "use strict";
        var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function r(e) {
            return e && (typeof e === "undefined" ? "undefined" : i(e)) === "object" && "default" in e ? e["default"] : e;
        }
        var o = r(n(260));
        var a = function() {
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
        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function l(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function u(e, t) {
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
        var c = function(e) {
            u(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                s(this, t);
                var n = {
                    id: "",
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
                    onCancel: function e() {}
                };
                Object.assign(n, e);
                var i = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.xhr = r();
                i.startDate = 0;
                i.form = null;
                i.progressbar = null;
                function r() {
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
                    i.uploadInit();
                    if (i.options.isAuto) i.start();
                }
                return i;
            }
            a(t, [ {
                key: "uploadInit",
                value: function e() {
                    var t = this;
                    var n = 0, i = this.options.file, r = this.options.params;
                    this.xhr.crossDomain = true;
                    this.id = this.options.file ? i.id : this.options.id ? this.options.id : Lego.randomKey(32);
                    this.form = new FormData();
                    this.form.append("file", i);
                    if (!Object.values(r).length) {
                        for (var o in r) {
                            this.form.append(o, r[o]);
                        }
                    }
                    this.xhr.upload.addEventListener("progress", function(e) {
                        if (e.lengthComputable) {
                            var i = new Date().getTime();
                            n = i - t.startDate;
                            var r = e.loaded / 1024, o = n / 1e3, a = r / o, s = void 0;
                            if (a > 1024) {
                                s = (a / 1024).toFixed(2) + "Mb/s";
                            } else {
                                s = a.toFixed(2) + "Kb/s";
                            }
                            var l = Math.round(e.loaded * 100 / e.total);
                            if (t.progressbar) {
                                t.progressbar.options.percent = l;
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
                            t.options.percent = 100;
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
        var d = v([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);
        var p = v([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);
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
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function g(e, t) {
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
        var y = function(e) {
            g(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                h(this, t);
                var n = {
                    type: "",
                    status: "",
                    showInfo: true,
                    percent: 0,
                    strokeWidth: 6
                };
                Object.assign(n, e);
                return b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            f(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(d, t.showInfo ? hx(p, this.format(t.percent)) : "", t.status ? t.status : "primary", t.percent);
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
        Lego.components("progressbar", y);
        var m = function() {
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
        var w = L([ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);
        var O = L([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn">取消</a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn">取消</a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);
        var j = L([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', '\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </div>\n                    ', '\n                </h4>\n                <small style="display:none;">\n                    <cite>', "</cite>\n                    <time></time>\n                </small>\n            </div>\n            " ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', '\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </div>\n                    ', '\n                </h4>\n                <small style="display:none;">\n                    <cite>', "</cite>\n                    <time></time>\n                </small>\n            </div>\n            " ]);
        var x = L([ '<a href="javascript:;" class="close" data-id="', '" data-hash="', '">删除</a>' ], [ '<a href="javascript:;" class="close" data-id="', '" data-hash="', '">删除</a>' ]);
        function L(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function k(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function P(e, t) {
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
        var I = function(e) {
            P(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                k(this, t);
                var n = {
                    events: {
                        "click .cancelbtn": "onCancel",
                        "click .close": "onRemove"
                    },
                    id: "",
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
                var i = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                if (i.options.percent < 100) {
                    i.progressbar = Lego.create(y, {
                        el: "#progressbar_" + n.vid,
                        showInfo: false,
                        status: "success"
                    });
                }
                return i;
            }
            m(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(w, Lego.Util.getFileIcon(t.file.name), t.percent < 100 ? hx(O, val(t.file.name), "progressbar_" + t.vid) : hx(j, t.percent == 100 ? hx(x, val(t.id), val(t.file.hash)) : "", val(t.file.url), val(t.file.name), val(t.file.name), Lego.Util.convertByteUnit(t.file.size)));
                    return n;
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
                    var n = $(t.currentTarget), i = n.data("id"), r = n.data("hash");
                    if (this.options.onRemove) {
                        return this.options.onRemove(i, r);
                    }
                    this.remove();
                }
            } ]);
            return t;
        }(c);
        var U = typeof Symbol === "function" && i(Symbol.iterator) === "symbol" ? function(e) {
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
        var E = R([ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);
        var T = R([ '<div class="upload-container"></div>' ], [ '<div class="upload-container"></div>' ]);
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
            return t && ((typeof t === "undefined" ? "undefined" : i(t)) === "object" || typeof t === "function") ? t : e;
        }
        function F(e, t) {
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
        var B = function(e) {
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
                    data: e.token,
                    value: [],
                    onAddFile: function e() {},
                    onBegin: function e() {},
                    onProgress: function e() {},
                    onComplete: function e() {},
                    onFail: function e() {},
                    onCancel: function e() {}
                };
                Object.assign(n, e);
                var i = M(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                i.reset();
                i.$(".fileInput").on("change", function(e) {
                    var t = $(e.currentTarget)[0];
                    i.uploadInit(t.files);
                });
                if (i.options.value.length) {
                    i.options.value.forEach(function(e, t) {
                        e.percent = 100;
                        i.showItem(e);
                    });
                }
                return i;
            }
            C(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = "";
                    n = hx(E, val(t.type), t.disabled ? "disabled" : "", val(t.text), t.value.join(","), val(t.name), val(t.accept), t.showUploadList ? hx(T) : "");
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
                    var i = this, r = this.options, a = n.length, s = r.maxFilesCount;
                    if (a) {
                        if (a > s) {
                            Lego.UI.notification("warning", "只能上传" + s + "张图片");
                            return;
                        }
                        this.fileList.concat(n);
                        this.fileList = this.fileList.slice(0, s);
                        if (typeof r.onAddFile == "function") r.onAddFile(this.fileList, n);
                        n.forEach(function(e, t) {
                            e.id = Lego.randomKey(32);
                            if (Math.ceil(e.size / (1024 * 1024)) > parseInt(r.maxFileSize)) {
                                var a = "发送文件最大为" + r.maxFileSize;
                                if (n.length == 1) {
                                    Lego.UI.notification("error", a);
                                } else {
                                    debug.warn(a);
                                }
                                return;
                            }
                            if (i.fileList.find(function(t) {
                                return t == e;
                            })) return;
                            var s = {
                                id: e.id,
                                uploadUri: r.uploadUri,
                                isAuto: r.isAuto,
                                file: e,
                                type: r.type,
                                percent: 0,
                                params: Object.assign({
                                    key: r.key || i.getKey(e.name),
                                    token: r.data
                                }, r.params),
                                onBegin: r.onBegin,
                                onProgress: r.onProgress,
                                onComplete: r.onComplete || function(t, n) {
                                    n.url = Lego.config.downloadUri + n.key;
                                    $.ajax({
                                        url: Lego.config.saveUri,
                                        type: "POST",
                                        dataType: "json",
                                        data: n,
                                        success: function t(n) {
                                            var i = r.value.find(function(e) {
                                                return e.file.hash == n.data.hash;
                                            });
                                            if (i) {
                                                if (n.data.id) i.id = n.data.id;
                                            } else {
                                                r.value.push({
                                                    id: e.id,
                                                    file: n.data,
                                                    type: r.type,
                                                    percent: 100
                                                });
                                            }
                                        },
                                        error: function e(t) {
                                            debug.error(t);
                                        }
                                    });
                                },
                                onFail: r.onFail,
                                onCancel: r.onCancel
                            };
                            if (r.previewOption) {
                                s.previewOption = r.previewOption;
                                s.isAuto = false;
                                o(e, Object.assign(r.previewOption, {
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
                    return this.options.keyRoot + Lego.Util.uuid() + "." + Lego.Util.getExtName(t);
                }
            }, {
                key: "onClickAdd",
                value: function e(t) {
                    this.$(".fileInput").click();
                }
            }, {
                key: "showItem",
                value: function e(t) {
                    var n = new I(t), i = this.$(".upload-container");
                    if (i.length && n) {
                        if (this.options.multiple) {
                            i.append(n.el);
                        } else {
                            i.html(n.el);
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
                            return e.id;
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
        Lego.components("upload", B);
        e.exports = B;
    },
    260: function(e, t) {
        var n = function(e, t) {
            var n = n || webkitURL;
            var i = n.createObjectURL(e);
            var r = new Image();
            r.src = i;
            r.onload = function() {
                var e = this;
                var n = e.width, o = e.height, a = n / o;
                n = t.width || n;
                o = n / a;
                var s = document.createElement("canvas");
                var u = s.getContext("2d");
                $(s).attr({
                    width: n,
                    height: o
                });
                u.drawImage(e, 0, 0, n, o);
                var c = s.toDataURL("image/jpeg", t.quality || .8);
                if (navigator.userAgent.match(/iphone/i)) {
                    var f = new l(r);
                    f.render(s, {
                        maxWidth: n,
                        maxHeight: o,
                        quality: t.quality || .8,
                        orientation: 1
                    });
                    c = s.toDataURL("image/jpeg", t.quality || .8);
                }
                if (navigator.userAgent.match(/Android/i)) {
                    var d = new JPEGEncoder();
                    c = d.encode(u.getImageData(0, 0, n, o), t.quality * 100 || 80);
                }
                var p = {
                    width: n,
                    height: o,
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
                var r = i.getContext("2d");
                r.drawImage(e, -t + 1, 0);
                return r.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function r(e, t, n) {
            var i = document.createElement("canvas");
            i.width = 1;
            i.height = n;
            var r = i.getContext("2d");
            r.drawImage(e, 0, 0);
            var o = r.getImageData(0, 0, 1, n).data;
            var a = 0;
            var s = n;
            var l = n;
            while (l > a) {
                var u = o[(l - 1) * 4 + 3];
                if (u === 0) {
                    s = l;
                } else {
                    a = l;
                }
                l = s + a >> 1;
            }
            var c = l / n;
            return c === 0 ? 1 : c;
        }
        function o(e, t, n) {
            var i = document.createElement("canvas");
            a(e, i, t, n);
            return i.toDataURL("image/jpeg", t.quality || .8);
        }
        function a(e, t, n, o) {
            var a = e.naturalWidth, l = e.naturalHeight;
            var u = n.width, c = n.height;
            var f = t.getContext("2d");
            f.save();
            s(t, f, u, c, n.orientation);
            var d = i(e);
            if (d) {
                a /= 2;
                l /= 2;
            }
            var p = 1024;
            var v = document.createElement("canvas");
            v.width = v.height = p;
            var h = v.getContext("2d");
            var b = o ? r(e, a, l) : 1;
            var g = Math.ceil(p * u / a);
            var y = Math.ceil(p * c / l / b);
            var m = 0;
            var w = 0;
            while (m < l) {
                var O = 0;
                var j = 0;
                while (O < a) {
                    h.clearRect(0, 0, p, p);
                    h.drawImage(e, -O, -m);
                    f.drawImage(v, 0, 0, p, p, j, w, g, y);
                    O += p;
                    j += g;
                }
                m += p;
                w += y;
            }
            f.restore();
            v = h = null;
        }
        function s(e, t, n, i, r) {
            switch (r) {
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
            switch (r) {
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
            var i = this.srcImage.naturalWidth, r = this.srcImage.naturalHeight, s = t.width, l = t.height, u = t.maxWidth, c = t.maxHeight, f = !this.blob || this.blob.type === "image/jpeg";
            if (s && !l) {
                l = r * s / i << 0;
            } else if (l && !s) {
                s = i * l / r << 0;
            } else {
                s = i;
                l = r;
            }
            if (u && s > u) {
                s = u;
                l = r * s / i << 0;
            }
            if (c && l > c) {
                l = c;
                s = i * l / r << 0;
            }
            var d = {
                width: s,
                height: l
            };
            for (var p in t) d[p] = t[p];
            var v = e.tagName.toLowerCase();
            if (v === "img") {
                e.src = o(this.srcImage, d, f);
            } else if (v === "canvas") {
                a(this.srcImage, e, d, f);
            }
            if (typeof this.onrender === "function") {
                this.onrender(e);
            }
        };
        e.exports = n;
    }
});