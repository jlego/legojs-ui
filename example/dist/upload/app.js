(function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            exports: {},
            id: o,
            loaded: false
        };
        e[o].call(i.exports, i, i.exports, n);
        i.loaded = true;
        return i.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})({
    0: function(e, t, n) {
        "use strict";
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
                return t;
            };
        }();
        var i = n(258);
        var a = l(i);
        var r = n(259);
        var s = l(r);
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
            o(e, [ {
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
    258: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
                return t;
            };
        }();
        var o = i([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="', '">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
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
        function r(e, t) {
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
                return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            n(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = hx(o, t.currentTab == 0 ? "active" : "");
                    return n;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    259: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
                return t;
            };
        }();
        var i = l([ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n          </div>\n        </div>\n        ' ], [ '\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n          </div>\n        </div>\n        ' ]);
        var a = n(260);
        var r = s(a);
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
                        onComplete: function e(t, n) {
                            console.warn("上传成功了", n);
                        }
                    }, {
                        el: "#upload2",
                        name: "uploadname2",
                        buttonText: "单文件",
                        multiple: false,
                        onComplete: function e(t, n) {
                            console.warn("上传成功了2", n);
                        }
                    }, {
                        el: "#upload3",
                        name: "uploadname3",
                        readonly: true,
                        value: [ {
                            id: 100124028001,
                            extension: "png",
                            height: 474,
                            mime_type: "image/png",
                            name: "2017-01-10_183019.png",
                            size: 124290,
                            url: "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png",
                            width: 473
                        }, {
                            id: 100124028002,
                            extension: "png",
                            height: 474,
                            mime_type: "image/png",
                            name: "2017-01-10_183018.png",
                            size: 124290,
                            url: "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681068.png",
                            width: 473
                        } ],
                        onComplete: function e(t) {
                            console.warn("上传成功了3", t);
                        }
                    } ]
                };
                Object.assign(n, e);
                return c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            o(t, [ {
                key: "render",
                value: function e() {
                    var t = hx(i);
                    return t;
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = d;
    },
    260: function(e, t, n) {
        "use strict";
        var o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function i(e) {
            return e && (typeof e === "undefined" ? "undefined" : o(e)) === "object" && "default" in e ? e["default"] : e;
        }
        var a = i(n(261));
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
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
            return t && ((typeof t === "undefined" ? "undefined" : o(t)) === "object" || typeof t === "function") ? t : e;
        }
        function u(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : o(t)));
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
                var o = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                o.xhr = i();
                o.startDate = 0;
                o.form = null;
                function i() {
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
                if (o.options.percent == 0) {
                    if (o.options.needToken && o.options.params.token || !o.options.needToken) {
                        o.uploadInit();
                        if (o.options.isAuto) o.start();
                    }
                }
                return o;
            }
            r(t, [ {
                key: "uploadInit",
                value: function e() {
                    var t = this;
                    var n = 0, o = this.options.file, i = this.options.params;
                    this.xhr.crossDomain = true;
                    o.id = o.id || Lego.randomKey(32);
                    var a = this["progressbar_" + this.options.vid];
                    this.form = new FormData();
                    this.form.append("file", o);
                    if (!Object.values(i).length) {
                        for (var r in i) {
                            this.form.append(r, i[r]);
                        }
                    }
                    this.xhr.upload.addEventListener("progress", function(e) {
                        if (e.lengthComputable) {
                            var o = new Date().getTime();
                            n = o - t.startDate;
                            var i = e.loaded / 1024, r = n / 1e3, s = i / r, l = void 0;
                            if (s > 1024) {
                                l = (s / 1024).toFixed(2) + "Mb/s";
                            } else {
                                l = s.toFixed(2) + "Kb/s";
                            }
                            var u = Math.round(e.loaded * 100 / e.total);
                            if (a) {
                                a.options.percent = u;
                            } else {
                                t.options.percent = u;
                            }
                        }
                        if (typeof t.options.onProgress == "function") {
                            t.options.onProgress(t);
                        }
                    }, false);
                    this.xhr.addEventListener("loadstart", function(e) {
                        if (typeof t.options.onBegin == "function") {
                            t.options.onBegin(o, t);
                        }
                    }, false);
                    this.xhr.addEventListener("load", function(e) {
                        if (t.xhr.readyState == 4 && t.xhr.status == 200 && t.xhr.responseText != "") {
                            var n = JSON.parse(t.xhr.response);
                            Object.assign(t.options.file, n);
                            if (t.options.params.key) {
                                t.options.file.url = t.options.downloadUri + t.options.key;
                            }
                            if (a) {
                                a.options.percent = 100;
                            } else {
                                t.options.percent = 100;
                            }
                            if (typeof t.options.onComplete == "function") {
                                t.options.onComplete(t, n);
                            }
                        } else if (t.xhr.status != 200 && t.xhr.responseText) {
                            var o = {
                                status: "error",
                                data: "Unknown error occurred: [" + t.xhr.responseText + "]"
                            };
                            if (typeof t.options.onFail == "function") {
                                t.options.onFail(t, o);
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
        var f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
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
            return t && ((typeof t === "undefined" ? "undefined" : o(t)) === "object" || typeof t === "function") ? t : e;
        }
        function g(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : o(t)));
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
                        if (typeof t.onComplete == "function") t.onComplete(this);
                    }
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
        Lego.components("progressbar", m);
        var y = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
                return t;
            };
        }();
        var w = k([ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);
        var O = k([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);
        var x = k([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);
        var j = k([ '\n                    <div class="right">\n                        <a href="javascript:;" class="closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ]);
        function k(e, t) {
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
        function L(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : o(t)) === "object" || typeof t === "function") ? t : e;
        }
        function P(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : o(t)));
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
            P(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _(this, t);
                var n = {
                    events: {
                        "click .cancelbtn": "onCancel",
                        "click .closebtn": "onRemove"
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
                return L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            }
            y(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options || {};
                    var n = hx(w, Lego.UI.Util.getFileIcon(t.file.name), t.percent < 100 ? hx(O, val(t.file.name), "progressbar_" + t.vid) : hx(x, !t.readonly && t.percent == 100 ? hx(j) : "", val(t.file.name), Lego.UI.Util.convertByteUnit(t.file.size), val(t.file.url), val(t.file.name)));
                    return n;
                }
            }, {
                key: "renderAfter",
                value: function e() {
                    var t = this.options;
                    if (t.percent < 100) {
                        this.progressbar = Lego.create(m, {
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
                    var o = $(t.currentTarget), i = o.data("id"), a = o.data("hash");
                    if (this.options.onRemove) {
                        return this.options.onRemove(i, a);
                    }
                    this.$el.slideUp("normal", function() {
                        n.remove();
                    });
                }
            } ]);
            return t;
        }(c);
        var I = typeof Symbol === "function" && o(Symbol.iterator) === "symbol" ? function(e) {
            return typeof e === "undefined" ? "undefined" : o(e);
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : o(e);
        };
        var C = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || false;
                    o.configurable = true;
                    if ("value" in o) o.writable = true;
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                if (n) e(t.prototype, n);
                if (o) e(t, o);
                return t;
            };
        }();
        var T = S([ '\n        <div class="upload upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="upload upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);
        var E = S([ '\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ]);
        var R = S([ '<div class="upload-container"></div>' ], [ '<div class="upload-container"></div>' ]);
        function S(e, t) {
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
        function F(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && ((typeof t === "undefined" ? "undefined" : o(t)) === "object" || typeof t === "function") ? t : e;
        }
        function A(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : o(t)));
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
            A(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                M(this, t);
                var n = {
                    events: {
                        "click .addbtn": "onClickAdd"
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
                var o = F(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
                o.reset();
                o.$(".fileInput").on("change", function(e) {
                    var t = $(e.currentTarget)[0];
                    o.uploadInit(t.files);
                });
                if (o.options.value.length) {
                    o.options.value.forEach(function(e, t) {
                        o.showItem(e);
                    });
                }
                return o;
            }
            C(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options;
                    var n = "";
                    n = hx(T, val(t.type), !t.readonly ? hx(E, t.disabled ? "disabled" : "", val(t.buttonText)) : "", this.getValue(), val(t.name), val(t.accept), t.showUploadList ? hx(R) : "");
                    return t.template ? t.template : n;
                }
            }, {
                key: "uploadInit",
                value: function e(t) {
                    var n = [];
                    if ((typeof t === "undefined" ? "undefined" : I(t)) == "object" && t[0]) {
                        n = Array.prototype.slice.call(t, 0);
                    } else {
                        n = [ t ];
                    }
                    var o = this, i = this.options, r = n.length, s = i.maxFilesCount;
                    if (r) {
                        if (r > s) {
                            Lego.UI.message("warning", "只能上传" + s + "张图片");
                            return;
                        }
                        this.fileList.concat(n);
                        this.fileList = this.fileList.slice(0, s);
                        if (typeof i.onAddFile == "function") i.onAddFile(this.fileList, n);
                        n.forEach(function(e, t) {
                            e.id = Lego.randomKey(32);
                            if (Math.ceil(e.size / (1024 * 1024)) > parseInt(i.maxFileSize)) {
                                var r = "发送文件最大为" + i.maxFileSize;
                                if (n.length == 1) {
                                    Lego.UI.message("error", r);
                                } else {
                                    debug.warn(r);
                                }
                                return;
                            }
                            if (o.fileList.find(function(t) {
                                return t == e;
                            })) return;
                            var s = {
                                uploadUri: i.uploadUri,
                                readonly: i.readonly,
                                isAuto: i.isAuto,
                                file: e,
                                type: i.type,
                                percent: 0,
                                params: Object.assign({
                                    key: i.key || o.getKey(e.name),
                                    token: typeof i.data == "string" ? i.data : ""
                                }, i.params),
                                needToken: true,
                                onBegin: i.onBegin,
                                onProgress: i.onProgress,
                                onComplete: i.onComplete || function(e, t) {
                                    t.url = Lego.config.downloadUri + t.key;
                                    $.ajax({
                                        url: Lego.config.saveUri,
                                        type: "POST",
                                        dataType: "json",
                                        data: t,
                                        success: function e(t) {
                                            var n = i.value.find(function(e) {
                                                return e.file.hash == t.data.hash;
                                            });
                                            if (n) {
                                                if (t.data.id) n.id = t.data.id;
                                            } else {
                                                i.value.push({
                                                    file: t.data,
                                                    type: i.type,
                                                    percent: 100
                                                });
                                                o.refresh();
                                            }
                                        },
                                        error: function e(t) {
                                            debug.error(t);
                                        }
                                    });
                                },
                                onFail: i.onFail,
                                onCancel: i.onCancel
                            };
                            if (i.previewOption) {
                                s.previewOption = i.previewOption;
                                s.isAuto = false;
                                a(e, Object.assign(i.previewOption, {
                                    success: function e(t) {
                                        s.previewImgSrc = t.blob;
                                        var n = o.showItem(s);
                                        n.sendUpload();
                                    }
                                }));
                            } else {
                                o.showItem(s);
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
                    var n = Lego.create(U, t);
                    var o = this.$(".upload-container");
                    if (o.length && n) {
                        if (this.options.multiple) {
                            o.append(n.el);
                        } else {
                            o.html(n.el);
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
        Lego.components("upload", B);
        e.exports = B;
    },
    261: function(e, t) {
        var n = function(e, t) {
            var n = n || webkitURL;
            var o = n.createObjectURL(e);
            var i = new Image();
            i.src = o;
            i.onload = function() {
                var e = this;
                var n = e.width, a = e.height, r = n / a;
                n = t.width || n;
                a = n / r;
                var s = document.createElement("canvas");
                var u = s.getContext("2d");
                $(s).attr({
                    width: n,
                    height: a
                });
                u.drawImage(e, 0, 0, n, a);
                var c = s.toDataURL("image/jpeg", t.quality || .8);
                if (navigator.userAgent.match(/iphone/i)) {
                    var f = new l(i);
                    f.render(s, {
                        maxWidth: n,
                        maxHeight: a,
                        quality: t.quality || .8,
                        orientation: 1
                    });
                    c = s.toDataURL("image/jpeg", t.quality || .8);
                }
                if (navigator.userAgent.match(/Android/i)) {
                    var d = new JPEGEncoder();
                    c = d.encode(u.getImageData(0, 0, n, a), t.quality * 100 || 80);
                }
                var p = {
                    width: n,
                    height: a,
                    blob: o,
                    base64: c,
                    clearBase64: c.substr(c.indexOf(",") + 1)
                };
                t.success(p);
            };
        };
        function o(e) {
            var t = e.naturalWidth, n = e.naturalHeight;
            if (t * n > 1024 * 1024) {
                var o = document.createElement("canvas");
                o.width = o.height = 1;
                var i = o.getContext("2d");
                i.drawImage(e, -t + 1, 0);
                return i.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function i(e, t, n) {
            var o = document.createElement("canvas");
            o.width = 1;
            o.height = n;
            var i = o.getContext("2d");
            i.drawImage(e, 0, 0);
            var a = i.getImageData(0, 0, 1, n).data;
            var r = 0;
            var s = n;
            var l = n;
            while (l > r) {
                var u = a[(l - 1) * 4 + 3];
                if (u === 0) {
                    s = l;
                } else {
                    r = l;
                }
                l = s + r >> 1;
            }
            var c = l / n;
            return c === 0 ? 1 : c;
        }
        function a(e, t, n) {
            var o = document.createElement("canvas");
            r(e, o, t, n);
            return o.toDataURL("image/jpeg", t.quality || .8);
        }
        function r(e, t, n, a) {
            var r = e.naturalWidth, l = e.naturalHeight;
            var u = n.width, c = n.height;
            var f = t.getContext("2d");
            f.save();
            s(t, f, u, c, n.orientation);
            var d = o(e);
            if (d) {
                r /= 2;
                l /= 2;
            }
            var p = 1024;
            var v = document.createElement("canvas");
            v.width = v.height = p;
            var h = v.getContext("2d");
            var b = a ? i(e, r, l) : 1;
            var g = Math.ceil(p * u / r);
            var m = Math.ceil(p * c / l / b);
            var y = 0;
            var w = 0;
            while (y < l) {
                var O = 0;
                var x = 0;
                while (O < r) {
                    h.clearRect(0, 0, p, p);
                    h.drawImage(e, -O, -y);
                    f.drawImage(v, 0, 0, p, p, x, w, g, m);
                    O += p;
                    x += g;
                }
                y += p;
                w += m;
            }
            f.restore();
            v = h = null;
        }
        function s(e, t, n, o, i) {
            switch (i) {
              case 5:
              case 6:
              case 7:
              case 8:
                e.width = o;
                e.height = n;
                break;

              default:
                e.width = n;
                e.height = o;
            }
            switch (i) {
              case 2:
                t.translate(n, 0);
                t.scale(-1, 1);
                break;

              case 3:
                t.translate(n, o);
                t.rotate(Math.PI);
                break;

              case 4:
                t.translate(0, o);
                t.scale(1, -1);
                break;

              case 5:
                t.rotate(.5 * Math.PI);
                t.scale(1, -1);
                break;

              case 6:
                t.rotate(.5 * Math.PI);
                t.translate(0, -o);
                break;

              case 7:
                t.rotate(.5 * Math.PI);
                t.translate(n, -o);
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
                var o = this;
                e.onload = function() {
                    var e = o.imageLoadListeners;
                    if (e) {
                        o.imageLoadListeners = null;
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
            var o = this.srcImage.naturalWidth, i = this.srcImage.naturalHeight, s = t.width, l = t.height, u = t.maxWidth, c = t.maxHeight, f = !this.blob || this.blob.type === "image/jpeg";
            if (s && !l) {
                l = i * s / o << 0;
            } else if (l && !s) {
                s = o * l / i << 0;
            } else {
                s = o;
                l = i;
            }
            if (u && s > u) {
                s = u;
                l = i * s / o << 0;
            }
            if (c && l > c) {
                l = c;
                s = o * l / i << 0;
            }
            var d = {
                width: s,
                height: l
            };
            for (var p in t) d[p] = t[p];
            var v = e.tagName.toLowerCase();
            if (v === "img") {
                e.src = a(this.srcImage, d, f);
            } else if (v === "canvas") {
                r(this.srcImage, e, d, f);
            }
            if (typeof this.onrender === "function") {
                this.onrender(e);
            }
        };
        e.exports = n;
    }
});