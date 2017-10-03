/**
 * legoui.js v0.12.19
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var perfectScrollbar = _interopDefault(require("perfect-scrollbar"));

var perfectScrollbar_dist_css_perfectScrollbar_css = require("perfect-scrollbar/dist/css/perfect-scrollbar.css");

var spectrumColorpickerCjs = require("spectrum-colorpicker-cjs");

var spectrumColorpickerCjs_spectrum_css = require("spectrum-colorpicker-cjs/spectrum.css");

var moment = _interopDefault(require("moment"));

var moment_locale_zhCn = require("moment/locale/zh-cn");

var bootstrapDatetimepickerCjs = require("bootstrap-datetimepicker-cjs");

var bootstrapDatetimepickerCjs_css_bootstrapDatetimepicker_css = require("bootstrap-datetimepicker-cjs/css/bootstrap-datetimepicker.css");

var validate = _interopDefault(require("jquery-validation-cjs"));

var toastr = _interopDefault(require("toastr-cjs"));

var toastrCjs_toastr_css = require("toastr-cjs/toastr.css");

var Tether = _interopDefault(require("tether"));

var localresizeimg = _interopDefault(require("localresizeimg-cjs"));

var bootstrapRating = require("bootstrap-rating");

var Slider = _interopDefault(require("bootstrap-slider"));

var bootstrapSlider_dist_css_bootstrapSlider_css = require("bootstrap-slider/dist/css/bootstrap-slider.css");

var ztree = require("ztree");

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var get$1 = function get$1(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get$1(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};

var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent !== null) {
            set(parent, property, value, receiver);
        }
    } else if ("value" in desc && desc.writable) {
        desc.value = value;
    } else {
        var setter = desc.set;
        if (setter !== undefined) {
            setter.call(receiver, value);
        }
    }
    return value;
};

var taggedTemplateLiteral = function(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
};

var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
        return arr2;
    } else {
        return Array.from(arr);
    }
};

var Basedata = function(_Lego$Data) {
    inherits(Basedata, _Lego$Data);
    function Basedata() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Basedata);
        var options = {};
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Basedata.__proto__ || Object.getPrototypeOf(Basedata)).call(this, options));
    }
    createClass(Basedata, [ {
        key: "parse",
        value: function parse(datas, apiName, view) {
            if (datas.error) {
                Lego.UI.message("error", datas.error);
            }
            if (typeof this[apiName] == "function") {
                return this[apiName](datas, view);
            }
            return datas;
        }
    } ]);
    return Basedata;
}(Lego.Data);

Lego.components("Basedata", Basedata);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="lego-spin-text">', "</div>" ], [ '<div class="lego-spin-text">', "</div>" ]);

var Loading = function(_Lego$View) {
    inherits(Loading, _Lego$View);
    function Loading() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Loading);
        var options = {
            spinning: true,
            size: "",
            tip: "",
            icon: "anticon anticon-loading-3-quarters"
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, options));
    }
    createClass(Loading, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject, Lego.config.spinning && opts.spinning ? "lego-spin" : "", val(opts.icon), val(opts.size), opts.tip ? hx(_templateObject2, opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Loading;
}(Lego.View);

Lego.components("loading", Loading);

var Permis = function() {
    function Permis() {
        classCallCheck(this, Permis);
        this.options = {
            userId: 0,
            operateHash: {},
            manageHash: {},
            adminHash: {},
            users: {},
            isSuper: false,
            isAdmin: false,
            message: function message(msg) {
                Lego.UI.Util.message("error", msg);
            }
        };
    }
    createClass(Permis, [ {
        key: "init",
        value: function init() {
            var _this = this;
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (opts.operateHash) {
                opts.operateHash = typeof opts.operateHash == "function" ? opts.operateHash() : opts.operateHash;
            }
            if (opts.manageHash) {
                opts.manageHash = typeof opts.manageHash == "function" ? opts.manageHash() : opts.manageHash;
            }
            if (opts.adminHash) {
                opts.adminHash = typeof opts.adminHash == "function" ? opts.adminHash() : opts.adminHash;
            }
            if (opts.users) {
                opts.users = typeof opts.users == "function" ? opts.users() : opts.users;
            }
            Object.assign(this.options, opts);
            if (Array.isArray(this.options.users)) {
                (function() {
                    var usersObj = {};
                    _this.options.users.forEach(function(user, index) {
                        usersObj[user.id] = user;
                    });
                    _this.options.users = usersObj;
                })();
            }
        }
    }, {
        key: "check",
        value: function check(module, operate, userId) {
            var user_id = this.options.userId, operateHash = this.options.operateHash, manageHash = this.options.manageHash, adminHash = this.options.adminHash, users = this.options.users;
            if (!this.options.isSuper) {
                if (!userId || userId === user_id) {
                    if (adminHash[module]) {
                        if (this.options.isAdmin) {
                            return adminHash[module][operate];
                        } else {
                            if (adminHash[module][operate]) {
                                if (operateHash[module]) {
                                    return operateHash[module][operate];
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return false;
                    }
                } else {
                    var theDepartment = void 0, result = users[userId];
                    if (result) {
                        theDepartment = result.departmentId;
                    }
                    if (!this.options.isAdmin) {
                        if (theDepartment) {
                            if (manageHash[theDepartment]) {
                                if (manageHash[theDepartment][module]) {
                                    return manageHash[theDepartment][module][operate];
                                } else {
                                    return manageHash[theDepartment][module + ":" + operate];
                                }
                            }
                        }
                    }
                }
            }
            return true;
        }
    } ]);
    return Permis;
}();

var permisObj = new Permis();

function _on(elem, types, selector, data, fn, one) {
    var origFn = void 0, type = void 0;
    if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
        if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined;
        }
        for (type in types) {
            _on(elem, type, selector, data, types[type], one);
        }
        return elem;
    }
    if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
    } else if (fn == null) {
        if (typeof selector === "string") {
            fn = data;
            data = undefined;
        } else {
            fn = data;
            data = selector;
            selector = undefined;
        }
    }
    if (fn === false) {
        fn = function fn() {
            return false;
        };
    } else if (!fn) {
        return elem;
    }
    if (one === 1) {
        origFn = fn;
        fn = function fn(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
        var callback = function callback(event) {
            var thePermis = $(this).data("permis");
            if ((typeof thePermis === "undefined" ? "undefined" : _typeof(thePermis)) == "object") {
                var module = thePermis.module, operate = thePermis.operate, msg = thePermis.message, userId = thePermis.userid;
                if (!Lego.UI.permis.check(module, operate, userId)) {
                    if (msg) {
                        Lego.UI.permis.options.message(msg);
                    }
                    event.stopPropagation();
                    return;
                }
            }
            var _fn = fn.bind(this);
            _fn(event);
        };
        if (types.indexOf("click") == 0) {
            jQuery.event.add(this, types, callback, data, selector);
        } else {
            jQuery.event.add(this, types, fn, data, selector);
        }
    });
}

$.fn.extend({
    on: function on(types, selector, data, fn) {
        return _on(this, types, selector, data, fn);
    }
});

Lego.components("permis", permisObj);

window.Ps = perfectScrollbar;

window.val = function(value, defaultValue) {
    return value ? typeof value == "function" ? value(defaultValue) : value : defaultValue || "";
};

var Baseview = function(_Lego$View) {
    inherits(Baseview, _Lego$View);
    function Baseview() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Baseview);
        var options = {
            events: null,
            loading: false
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Baseview.__proto__ || Object.getPrototypeOf(Baseview)).call(this, options));
        _this.setEvent();
        _this.renderScroll();
        return _this;
    }
    createClass(Baseview, [ {
        key: "setEvent",
        value: function setEvent() {
            this.unBindEvents();
            this.delegateEvents();
            return this;
        }
    }, {
        key: "bindEvents",
        value: function bindEvents(eventName, selector, listener) {
            this.$el.on(eventName + ".delegateEvents" + this.options.vid, selector, listener);
            return this;
        }
    }, {
        key: "unBindEvents",
        value: function unBindEvents() {
            if (this.$el) {
                this.$el.off(".delegateEvents" + this.options.vid);
            }
            return this;
        }
    }, {
        key: "delegateEvents",
        value: function delegateEvents() {
            var this$1 = this;
            var events = this.options.events;
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            if (!events) {
                return this;
            }
            for (var key in events) {
                var method = events[key];
                if (typeof method !== "function") {
                    method = this$1[method];
                }
                if (!method) {
                    continue;
                }
                var match = key.match(delegateEventSplitter);
                this$1.bindEvents(match[1], match[2], method.bind(this$1));
            }
            return this;
        }
    }, {
        key: "_showLoading",
        value: function _showLoading() {
            var opts = this.options;
            this.loadingView = Lego.getView("#lego-loading-" + opts.vid);
            if (!this.loadingView) {
                this.addCom(Object.assign({
                    el: "#lego-loading-" + opts.vid
                }, opts.loading || {}));
                this._renderComponents();
                this.$el.css("position", "relative");
            } else {
                this.loadingView.$el.fadeIn("fast");
            }
        }
    }, {
        key: "_hideLoading",
        value: function _hideLoading() {
            var opts = this.options;
            this.loadingView = Lego.getView("#lego-loading-" + opts.vid);
            if (this.loadingView) {
                this.loadingView.$el.fadeOut("fast");
            }
            if (Array.isArray(opts.data)) {
                opts.nodata = !opts.data.length ? true : false;
            }
        }
    }, {
        key: "renderScroll",
        value: function renderScroll() {
            var opts = this.options, that = this;
            function initScroll($el) {
                $el.each(function(index, el) {
                    var container = $(this), eventName = "mouseover.ps" + index;
                    if (!container.hasClass("ps-container")) {
                        container.css("position", "relative");
                        Ps.initialize(container[0], opts.scrollbar);
                        that.$el.off(eventName).on(eventName, function() {
                            Ps.update(container[0]);
                        });
                    }
                });
            }
            if (opts.scrollbar) {
                var scrollbarEl = this.$(".scrollbar").length ? this.$(".scrollbar") : [];
                if (scrollbarEl.length) {
                    initScroll(scrollbarEl);
                }
                if (this.$el.hasClass("scrollbar")) {
                    initScroll(this.$el);
                }
            }
        }
    }, {
        key: "importWidget",
        value: function importWidget(comName, callback) {
            var that = this;
            if (/\.js/g.test(comName)) {
                Lego.loadScript(comName, function() {
                    if (typeof callback == "function") {
                        callback(that);
                    }
                }, comName);
            } else {
                if (!Lego.UI[comName]) {
                    Lego.loadCss(Lego.config.rootUri + "widget/" + comName + "/app.css", comName);
                    Lego.loadScript(Lego.config.rootUri + "widget/" + comName + "/app.js", function() {
                        if (typeof callback == "function") {
                            callback(that);
                        }
                    }, comName);
                } else {
                    if (typeof callback == "function") {
                        callback(this);
                    }
                }
            }
        }
    } ]);
    return Baseview;
}(Lego.View);

Lego.components("Baseview", Baseview);

var UploadView = function(_Lego$View) {
    inherits(UploadView, _Lego$View);
    function UploadView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, UploadView);
        var options = {
            uploadUri: "",
            downloadUri: Lego.config.downloadUri || "",
            percent: 0,
            isAuto: true,
            file: null,
            headers: {},
            params: {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {},
            needToken: false
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).call(this, options));
        _this.xhr = createXMLHTTPRequest();
        _this.startDate = 0;
        _this.form = null;
        function createXMLHTTPRequest() {
            var xmlHttpRequest = void 0;
            if (window.XMLHttpRequest) {
                xmlHttpRequest = new XMLHttpRequest();
                if (xmlHttpRequest.overrideMimeType) {
                    xmlHttpRequest.overrideMimeType("text/xml");
                }
            } else if (window.ActiveXObject) {
                var activexName = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];
                for (var i = 0; i < activexName.length; i++) {
                    try {
                        xmlHttpRequest = new ActiveXObject(activexName[i]);
                        if (xmlHttpRequest) {
                            break;
                        }
                    } catch (e) {}
                }
            }
            return xmlHttpRequest;
        }
        if (_this.options.percent == 0) {
            if (_this.options.needToken && _this.options.params.token || !_this.options.needToken) {
                _this.uploadInit();
                if (_this.options.isAuto) {
                    _this.start();
                }
            }
        }
        return _this;
    }
    createClass(UploadView, [ {
        key: "uploadInit",
        value: function uploadInit() {
            var this$1 = this;
            var _this2 = this;
            var taking = 0, file = this.options.file, opts = this.options, params = this.options.params;
            this.xhr.crossDomain = true;
            var progressbar = Lego.getView("#progressbar_" + this.options.vid);
            this.form = new FormData();
            this.form.append("file", file);
            if (!Lego.isEmptyObject(params)) {
                for (var key in params) {
                    this$1.form.append(key, params[key]);
                }
            }
            this.xhr.upload.addEventListener("progress", function(event) {
                if (event.lengthComputable) {
                    var nowDate = new Date().getTime();
                    taking = nowDate - _this2.startDate;
                    var x = event.loaded / 1024, y = taking / 1e3, uploadSpeed = x / y, formatSpeed = void 0;
                    if (uploadSpeed > 1024) {
                        formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb/s";
                    } else {
                        formatSpeed = uploadSpeed.toFixed(2) + "Kb/s";
                    }
                    var percent = Math.round(event.loaded * 100 / event.total);
                    if (progressbar) {
                        progressbar.options.percent = percent;
                    }
                    if (typeof _this2.options.onProgress == "function") {
                        _this2.options.onProgress(_this2, file, percent);
                    }
                }
            }, false);
            this.xhr.addEventListener("loadstart", function(event) {
                if (typeof _this2.options.onBegin == "function") {
                    _this2.options.onBegin(_this2, file);
                }
            }, false);
            this.xhr.addEventListener("load", function(event) {
                if (_this2.xhr.readyState == 4 && _this2.xhr.status == 200 && _this2.xhr.responseText != "") {
                    var resp = JSON.parse(_this2.xhr.response);
                    resp._id = file._id;
                    _this2.options.percent = 100;
                    if (typeof _this2.options.onComplete == "function") {
                        _this2.options.onComplete(_this2, resp);
                    }
                } else if (_this2.xhr.status != 200 && _this2.xhr.responseText) {
                    var errorMsg = {
                        status: "error",
                        data: "Unknown error occurred: [" + _this2.xhr.responseText + "]"
                    };
                    if (typeof _this2.options.onFail == "function") {
                        _this2.options.onFail(_this2, errorMsg);
                    }
                }
            }, false);
            this.xhr.addEventListener("error", function(event) {
                debug.error("上传失败");
                if (typeof _this2.options.onFail == "function") {
                    _this2.options.onFail(_this2, event);
                }
                _this2.remove();
            }, false);
            this.xhr.addEventListener("abort", function(event) {
                debug.error("取消上传");
                if (typeof _this2.options.onCancel == "function") {
                    _this2.options.onCancel(_this2, event);
                }
                _this2.remove();
            }, false);
            this.xhr.open("POST", this.options.uploadUri, true);
            for (var _key in this.options.headers) {
                this$1.xhr.setRequestHeader(_key, this$1.options.headers[_key]);
            }
        }
    }, {
        key: "cancel",
        value: function cancel() {
            this.xhr.abort();
        }
    }, {
        key: "start",
        value: function start() {
            this.startDate = new Date().getTime();
            this.xhr.send(this.form);
        }
    } ]);
    return UploadView;
}(Lego.View);

Lego.components("Baseupload", UploadView);

var Util = {
    uuid: function uuid() {
        function S4() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
        }
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    },
    getDirection: function getDirection(el, dropEl, topOrBottom, rightOrLeft) {
        el = el instanceof $ ? el : $(el);
        dropEl = dropEl instanceof $ ? dropEl : $(dropEl);
        var windowW = $(window).width(), windowH = $(window).height(), _X = el.offset().left, _Y = el.offset().top, elW = el.width(), elH = el.height(), dropW = dropEl.width(), dropH = dropEl.height(), cssObj = {
            position: "absolute",
            top: "100%",
            right: "inherit",
            bottom: "inherit",
            left: 0
        }, tb = topOrBottom ? topOrBottom : dropH > windowH - _Y - elH ? dropH > _Y - 120 ? "fixed" : "top" : "bottom", lr = rightOrLeft ? rightOrLeft : dropW > windowW - _X ? "right" : "left";
        if (tb == "fixed") {
            if (dropH > windowH) {
                Object.assign(cssObj, {
                    position: "fixed",
                    bottom: 0,
                    left: _X,
                    overflow: "auto",
                    top: 0,
                    height: windowH
                });
            } else {
                Object.assign(cssObj, {
                    position: "fixed",
                    top: "inherit",
                    bottom: 0,
                    left: _X
                });
            }
        } else {
            if (tb == "top") {
                Object.assign(cssObj, {
                    top: "inherit",
                    bottom: "100%"
                });
            } else {
                Object.assign(cssObj, {
                    top: "100%"
                });
            }
            if (lr == "right") {
                Object.assign(cssObj, {
                    right: 0,
                    left: "inherit"
                });
            } else {
                Object.assign(cssObj, {
                    right: "inherit",
                    left: 0
                });
            }
        }
        dropEl.removeClass("scrollbar");
        dropEl.css(cssObj);
        if (tb == "fixed" && dropH > windowH) {
            dropEl.addClass("scrollbar");
            if (!dropEl.hasClass("ps-container")) {
                Ps.initialize(dropEl[0]);
            }
        }
    },
    animateCss: function animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
        if (!this.checkBrowser().msie && !this.checkBrowser().edge) {
            animationName = /\s/g.test(animationName) ? animationName : "animated " + animationName;
            var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            el.addClass(animationName).one(animationEnd, function() {
                el.removeClass(animationName);
                if (typeof callback == "function") {
                    callback();
                }
            });
        } else {
            if (window.$) {
                if (animationName.indexOf("slide") > -1) {
                    if (animationName.indexOf("slideIn") > -1) {
                        el.css({
                            right: -1e3
                        });
                    }
                    el.animate({
                        right: animationName.indexOf("slideIn") > -1 ? 0 : -1e3
                    }, function() {
                        if (typeof callback == "function") {
                            callback();
                        }
                    });
                    return;
                }
                if (animationName.indexOf("fade") > -1) {
                    el[animationName]("fast", function() {
                        if (typeof callback == "function") {
                            callback();
                        }
                    });
                    return;
                }
            }
            if (typeof callback == "function") {
                callback();
            }
        }
    },
    convertByteUnit: function convertByteUnit(size, unit, decimals, direction, targetunit) {
        var units = [ "B", "KB", "MB", "GB", "TB", "PB", "EB" ], index = void 0, targetIndex = void 0, i = void 0, l = units.length, num = void 0, regFloat = /(^[+-]?\d*(?:\.\d+)?(?:[Ee][-+]?\d+)?)([kKMmGgTtpPeE]?[bB])?$/;
        if (typeof size === "string") {
            num = size.match(regFloat);
            size = num[1];
            unit = num[2] || unit;
        }
        unit = unit || "B";
        if (unit) {
            unit = unit.toUpperCase();
            for (i = 0; i < l; i++) {
                if (unit === units[i]) {
                    index = i;
                }
                if (targetunit && (targetunit + "").toUpperCase() === units[i]) {
                    targetIndex = i;
                }
            }
        }
        if (direction === undefined) {
            if (targetIndex === undefined) {
                direction = true;
            } else {
                direction = targetIndex > index;
            }
        }
        size = parseFloat(size);
        while (direction ? size >= 1024 && index < l - 1 : size <= 1024 && index > 0) {
            size = direction ? size / 1024 : size * 1024;
            direction ? index++ : index--;
            if (index === targetIndex) {
                break;
            }
        }
        if (decimals) {
            size = size.toFixed(decimals) + units[index];
        } else {
            decimals = decimals || 2;
            size = (size.toFixed(decimals) + "").replace(/\.00/, "") + units[index];
        }
        return size;
    },
    getExtName: function getExtName(name) {
        var re = /\./, a = void 0, l = void 0;
        if (re.test(name)) {
            a = name.split(re);
            l = a.length;
            return a[l - 1].toLowerCase();
        }
        return null;
    },
    getFileIcon: function getFileIcon(name) {
        var extMap = {
            bmp: "jpg",
            gif: "gif",
            png: "png",
            jpg: "jpg",
            jpeg: "jpg",
            tif: "txt",
            psd: "png",
            pdg: "pdf",
            pdf: "pdf",
            ai: "gif",
            ico: "ics",
            css: "txt",
            doc: "doc",
            docx: "doc",
            ppt: "ppt",
            pptx: "ppt",
            rar: "rar",
            "7z": "zip",
            gz: "zip",
            bz: "zip",
            ace: "zip",
            uha: "zip",
            zpaq: "zip",
            zip: "zip",
            txt: "txt",
            yml: "txt",
            ini: "txt",
            js: "txt",
            url: "link",
            xls: "xls",
            xlsx: "xls",
            et: "xls",
            mp3: "mp3",
            apk: "apk",
            mp4: "mov",
            swf: "mov"
        }, ext = typeof name == "string" ? name.indexOf(".") > -1 ? this.getExtName(name) : name : "";
        return ext ? extMap[ext] : "file";
    },
    previewAble: function previewAble(nameOrExt) {
        var fileExt = this.getExtName(nameOrExt) || nameOrExt, extMap = [ "bmp", "gif", "png", "jpg", "jpeg", "txt", "pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx" ];
        return extMap.indexOf(fileExt) >= 0 || false;
    },
    isImg: function isImg(name, isExt) {
        var extMap = [ "bmp", "gif", "png", "jpg", "jpeg" ], ext = isExt ? name : this.getExtName(name);
        return ext !== false && extMap.indexOf(ext) >= 0 ? true : false;
    },
    checkBrowser: function checkBrowser() {
        var u = navigator.userAgent, IEVersion = 0;
        if (/msie/.test(u.toLowerCase())) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(u);
            IEVersion = parseFloat(RegExp["$1"]);
        }
        return {
            mozilla: /firefox/.test(u.toLowerCase()),
            webkit: /webkit/.test(u.toLowerCase()),
            opera: /opera/.test(u.toLowerCase()),
            edge: /edge/.test(u.toLowerCase()),
            msie: /msie/.test(u.toLowerCase()),
            ieversion: IEVersion
        };
    },
    urlToHref: function urlToHref(str) {
        str = str.replace(/http[s]?:\/\/[\w.][^\,。‘’“”，《》<>{}+]*/g, "$& ");
        str = str.replace(/http[s]?:\/\/[\w.][^ ]*/g, '<a href="$&" target="_blank" style="color:#0092d8;">$&</a>');
        return str;
    },
    filterHtml: function filterHtml(str) {
        var valiHTML = [ "br|img" ];
        if (this.checkBrowser.mozilla) {
            str = str.replace(/(<!--\[if[^<]*?\])>([\S\s]*?)<(!\[endif\]-->)/gi, "");
        }
        str = str.replace(/_moz_dirty=""/gi, "").replace(/\[/g, "[[-").replace(/\]/g, "-]]").replace(/<\/ ?tr[^>]*>/gi, "[br]").replace(/<\/ ?td[^>]*>/gi, "    ").replace(/<(ul|dl|ol)[^>]*>/gi, "[br]").replace(/<(li|dd)[^>]*>/gi, "[br]").replace(/\<p[^>]*>/gi, "[br]").replace(/\<div[^>]*>/gi, "[br]").replace(/style=[\"\']([^\"\']+)[\"\']/gi, "").replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]").replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]").replace(/<[^>]*>/g, "").replace(/\[\[\-/g, "[").replace(/\-\]\]/g, "]").replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|span)[^\\]]*)\\]", "gi"), "<$1>");
        str = $.trim(str.replace(/^<br>/, "").replace(/(\<br[^>]*>){2,}/gi, "<br>"));
        return str;
    },
    filterTag: function filterTag(str) {
        if (this.checkBrowser.mozilla) {
            str = str.replace(/<\s*br\s*[^<]*>$/gi, "");
        }
        return str.replace(/&nbsp;/gi, " ").replace(/<\s*br\s*[^<]*>/gi, "\n").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
    },
    unFilterTag: function unFilterTag(str) {
        return str.replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/\r?\n/gi, "<br>").replace(/&nbsp;/gi, " ");
    },
    faceTags: [ "[微笑]", "[撇嘴]", "[色]", "[发呆]", "[得意]", "[流泪]", "[害羞]", "[闭嘴]", "[睡]", "[大哭]", "[尴尬]", "[发怒]", "[调皮]", "[呲牙]", "[惊讶]", "[酷]", "[冷汗]", "[抓狂]", "[吐]", "[偷笑]", "[白眼]", "[傲慢]", "[饥饿]", "[困]", "[惊恐]", "[流汗]", "[憨笑]", "[大兵]", "[奋斗]", "[疑问]", "[嘘]", "[晕]", "[敲打]", "[再见]", "[擦汗]", "[抠鼻]", "[鼓掌]", "[糗大了]", "[坏笑]", "[左哼哼]", "[右哼哼]", "[哈欠]", "[鄙视]", "[委屈]", "[快哭了]", "[阴脸]", "[亲亲]", "[吓]", "[可怜]", "[菜刀]", "[啤酒]", "[篮球]", "[乒乓球]", "[咖啡]", "[示爱]", "[爱心]", "[心碎]", "[刀]", "[足球]", "[瓢虫]", "[便便]", "[拥抱]", "[强]", "[弱]", "[握手]", "[胜利]", "[抱拳]", "[勾引]", "[拳头]", "[差劲]", "[爱你]", "[NO]", "[OK]", "[可爱]", "[咒骂]", "[折磨]", "[玫瑰]", "[凋谢]", "[衰]", "[骷髅]", "[猪头]", "[闪电]", "[炸弹]", "[饭]", "[西瓜]", "[蛋糕]", "[礼物]", "[太阳]", "[月亮]", "[鞭炮]" ],
    faceToText: function faceToText(str) {
        var faceTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.faceTags;
        var patt = new RegExp('<img face="" src=".*?f0(\\d+).gif"+/?>', "g");
        var newStr = str, arr = void 0;
        if (str.indexOf("<img") == -1) {
            return this.filterTag(str);
        }
        while (arr = patt.exec(str)) {
            newStr = newStr.replace(new RegExp(arr[0], "g"), faceTags[arr[1]]);
        }
        newStr = this.filterTag(newStr);
        return newStr;
    },
    textToFace: function textToFace(str) {
        var faceTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.faceTags;
        str = this.unFilterTag(str);
        var arr = str.match(/\[.*?\]/g);
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                var index = faceTags.indexOf(arr[i]);
                if (index >= 0) {
                    str = str.replace(arr[i], '<img face="" src="' + Lego.config.faceIconUri + index + '.gif"/>');
                }
            }
        }
        return str;
    },
    insertText: function insertText(selector, str) {
        var ob = selector[0];
        ob.focus();
        var selection = window.getSelection ? window.getSelection() : document.selection;
        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if (!window.getSelection) {
            range.innerText(str);
            range.collapse(false);
            range.select();
            ob.focus();
        } else {
            range.collapse(false);
            var hasR = range.createContextualFragment(str);
            var hasR_lastChild = hasR.lastChild;
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild);
            }
            selection.removeAllRanges();
            selection.addRange(range);
            ob.focus();
        }
    }
};

Lego.components("Util", Util);

var _templateObject$1 = taggedTemplateLiteral([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);

var _templateObject3 = taggedTemplateLiteral([ '<a class="lego-alert-close-icon">', "</a>" ], [ '<a class="lego-alert-close-icon">', "</a>" ]);

var _templateObject4 = taggedTemplateLiteral([ '<i class="anticon anticon-cross"></i>' ], [ '<i class="anticon anticon-cross"></i>' ]);

var Alert = function(_Lego$UI$Baseview) {
    inherits(Alert, _Lego$UI$Baseview);
    function Alert() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Alert);
        var options = {
            events: {
                "click .lego-alert-close-icon": "close"
            },
            type: "info",
            closeAble: false,
            closeText: "",
            message: "",
            description: "",
            onClose: function onClose() {},
            showIcon: true,
            banner: false
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, options));
    }
    createClass(Alert, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var iconName = "";
            switch (options.type) {
              case "success":
                iconName = "check";
                break;

              case "info":
                iconName = "info";
                break;

              case "warning":
                iconName = "exclamation";
                break;

              case "error":
                iconName = "cross";
                break;
            }
            var vDom = hx(_templateObject$1, options.type, options.description ? "lego-alert-with-description" : "", options.showIcon ? "" : "lego-alert-no-icon", options.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", options.showIcon ? "" : "-no", options.showIcon ? "" : "none", options.message, options.description ? hx(_templateObject2$1, typeof options.description == "string" ? options.description : "") : "", options.closeAble ? hx(_templateObject3, options.closeText || hx(_templateObject4)) : "");
            return vDom;
        }
    }, {
        key: "close",
        value: function close(event) {
            var _this2 = this;
            event.stopPropagation();
            this.$el.slideUp("normal", function() {
                _this2.remove();
            });
            if (typeof this.options.onClose === "function") {
                this.options.onClose(this, event);
            }
        }
    } ]);
    return Alert;
}(Lego.UI.Baseview);

Lego.components("alert", Alert);

var _templateObject$2 = taggedTemplateLiteral([ '\n            <div class="lego-avatar-item">\n                <div class="lego-avatar-img" style="', '" id="', '">\n                ', "\n                </div>\n                ", "\n            </div>\n            " ], [ '\n            <div class="lego-avatar-item">\n                <div class="lego-avatar-img" style="', '" id="', '">\n                ', "\n                </div>\n                ", "\n            </div>\n            " ]);

var _templateObject2$2 = taggedTemplateLiteral([ "", "" ], [ "", "" ]);

var _templateObject3$1 = taggedTemplateLiteral([ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ], [ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ]);

var _templateObject4$1 = taggedTemplateLiteral([ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ], [ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ]);

var _templateObject5 = taggedTemplateLiteral([ "<label>", "</label>" ], [ "<label>", "</label>" ]);

var _templateObject6 = taggedTemplateLiteral([ '\n        <div class="lego-avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ], [ '\n        <div class="lego-avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ]);

var _templateObject7 = taggedTemplateLiteral([ "\n            ", "\n        " ], [ "\n            ", "\n        " ]);

var _templateObject8 = taggedTemplateLiteral([ '\n            <div class="lego-avatar-item addbtn">\n                <div class="lego-avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-avatar-item addbtn">\n                <div class="lego-avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ]);

var Avatar = function(_Lego$UI$Baseview) {
    inherits(Avatar, _Lego$UI$Baseview);
    function Avatar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Avatar);
        var options = {
            events: {
                "click .add": "onAdd",
                "click .remove": "onRemove",
                "click .change": "onChange"
            },
            size: "",
            name: "",
            multiple: false,
            readonly: false,
            radius: "50%",
            showName: true,
            width: "",
            height: "",
            value: [],
            data: [],
            onAdd: function onAdd() {},
            onRemove: function onRemove() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, options));
    }
    createClass(Avatar, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function getItem(data) {
                return hx(_templateObject$2, data.value ? "background-image:url(" + val(data.value) + ");" : "", data.key, !options.readonly ? hx(_templateObject2$2, options.multiple ? hx(_templateObject3$1, val(data.name)) : hx(_templateObject4$1, val(data.name))) : "", options.showName ? hx(_templateObject5, val(data.name)) : "");
            }
            var vDom = hx(_templateObject6, options.size, options.value.length ? hx(_templateObject7, options.multiple ? options.value.map(function(item) {
                return getItem(item);
            }) : getItem(options.value[0])) : "", (!options.value.length || options.multiple) && !options.readonly ? hx(_templateObject8) : "", options.value.length ? options.value.map(function(item) {
                return item ? item.key : "";
            }).join(",") : "", options.name);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            if (this.options.width) {
                this.$el.find(".lego-avatar-img").width(this.options.width);
            }
            if (this.options.height) {
                this.$el.find(".lego-avatar-img").height(this.options.height);
            }
            this.$el.find(".lego-avatar-img, .lego-avatar-img i").css("border-radius", this.options.radius);
        }
    }, {
        key: "onAdd",
        value: function onAdd(event) {
            event.stopPropagation();
            if (typeof this.options.onAdd == "function") {
                this.options.onAdd(this, event);
            }
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var that = this, target = $(event.currentTarget), itemEl = target.parent(), key = itemEl.attr("id").toString();
            function deleteFun() {
                that.options.value = that.options.value.filter(function(item) {
                    return item.key.toString() !== key;
                });
                that.refresh();
            }
            if (typeof this.options.onRemove == "function") {
                this.options.onRemove(this, key, deleteFun);
            } else {
                deleteFun();
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), itemEl = target.parent(), key = itemEl.attr("id");
            if (typeof this.options.onChange == "function") {
                this.options.onChange(this, key);
            }
        }
    } ]);
    return Avatar;
}(Lego.UI.Baseview);

Lego.components("avatar", Avatar);

var _templateObject$3 = taggedTemplateLiteral([ "<div>\n          ", "\n        </div>" ], [ "<div>\n          ", "\n        </div>" ]);

var _templateObject2$3 = taggedTemplateLiteral([ '<a id="', '" href="#/home" style="display:block;">', "</a>\n" ], [ '<a id="', '" href="#/home" style="display:block;">', "</a>\\n" ]);

var Badge = function(_Lego$UI$Baseview) {
    inherits(Badge, _Lego$UI$Baseview);
    function Badge() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Badge);
        var options = {
            events: {
                "click #400": "theClick"
            }
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, options));
    }
    createClass(Badge, [ {
        key: "render",
        value: function render() {
            var options = this.options || [];
            var vDom = hx(_templateObject$3, options.map(function(model, i) {
                return hx(_templateObject2$3, model.first, model.first);
            }));
            return vDom;
        }
    }, {
        key: "theClick",
        value: function theClick(event) {
            event.stopPropagation();
            Lego.trigger("data_update", {
                aa: 1
            });
        }
    } ]);
    return Badge;
}(Lego.UI.Baseview);

Lego.components("badge", Badge);

var _templateObject$4 = taggedTemplateLiteral([ '\n        <button type="', '" class="btn btn-', "\n        ", " ", '" ', ">\n            ", "\n            ", "\n            ", "\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', "\n        ", " ", '" ', ">\n            ", "\n            ", "\n            ", "\n        </button>\n        " ]);

var _templateObject2$4 = taggedTemplateLiteral([ '<i class="', '"></i>' ], [ '<i class="', '"></i>' ]);

var _templateObject3$2 = taggedTemplateLiteral([ "<span>", "</span>" ], [ "<span>", "</span>" ]);

var Buttons = function(_Lego$UI$Baseview) {
    inherits(Buttons, _Lego$UI$Baseview);
    function Buttons() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Buttons);
        var options = {
            events: {
                click: "onClick"
            },
            text: "button",
            type: "secondary",
            htmlType: "button",
            disabled: false,
            icon: "",
            afterIcon: "",
            shape: "",
            size: "",
            loading: false,
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, options));
    }
    createClass(Buttons, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$4, options.htmlType, options.type == "dashed" ? "secondary lego-btn-dashed" : options.type, options.size ? "btn-" + options.size : "", options.shape ? "lego-btn-" + options.shape : "default", options.disabled ? "disabled" : "", options.icon ? hx(_templateObject2$4, options.icon) : "", options.html || options.text ? hx(_templateObject3$2, options.html || options.text) : "", options.afterIcon ? hx(_templateObject2$4, options.afterIcon) : "");
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick == "function") {
                this.options.onClick(this, event);
            }
        }
    } ]);
    return Buttons;
}(Lego.UI.Baseview);

Lego.components("buttons", Buttons);

var _templateObject$5 = taggedTemplateLiteral([ '\n        <div class="lego-btngroup btn-group btn-group-', '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-btngroup btn-group btn-group-', '">\n        ', "\n        </div>\n        " ]);

var _templateObject2$5 = taggedTemplateLiteral([ '\n        <button type="button" class="btn btn-', " ", '">\n            ', "\n        </button>\n        " ], [ '\n        <button type="button" class="btn btn-', " ", '">\n            ', "\n        </button>\n        " ]);

var Btngroup = function(_Lego$UI$Baseview) {
    inherits(Btngroup, _Lego$UI$Baseview);
    function Btngroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Btngroup);
        var options = {
            events: {
                "click button": "onClick"
            },
            size: "",
            data: [],
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Btngroup.__proto__ || Object.getPrototypeOf(Btngroup)).call(this, options));
    }
    createClass(Btngroup, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$5, options.size, options.data.map(function(item) {
                return hx(_templateObject2$5, item.type || "secondary", item.active ? "active" : "", val(item.html || item.text));
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$("button").each(function(index, item) {
                $(item).data("index", index);
            });
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), index = target.data("index"), model = this.options.data[index];
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, model, event);
            }
        }
    } ]);
    return Btngroup;
}(Lego.UI.Baseview);

Lego.components("btngroup", Btngroup);

var _templateObject$7 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2$7 = taggedTemplateLiteral([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ]);

var _templateObject3$3 = taggedTemplateLiteral([ '<span class="input-group-addon">', "</span>" ], [ '<span class="input-group-addon">', "</span>" ]);

var _templateObject4$2 = taggedTemplateLiteral([ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', ">", "</textarea>\n                " ], [ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', ">", "</textarea>\n                " ]);

var _templateObject5$1 = taggedTemplateLiteral([ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', "/>\n                " ], [ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', "/>\n                " ]);

var Inputs = function(_Lego$UI$Baseview) {
    inherits(Inputs, _Lego$UI$Baseview);
    function Inputs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Inputs);
        var options = {
            events: {
                keyup: "onEnter",
                change: "onChange"
            },
            type: "text",
            value: "",
            placeholder: "",
            name: "",
            filterReg: "",
            disabled: false,
            readonly: false,
            preAddon: "",
            nextAddon: "",
            size: "",
            onChange: function onChange() {},
            onEnter: function onEnter() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this, options));
    }
    createClass(Inputs, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$7), value = opts.value ? Lego.UI.Util.unFilterTag(opts.value.toString()) : "";
            if (opts.preAddon || opts.nextAddon) {
                vDom = hx(_templateObject2$7, opts.size ? "input-group-" + opts.size : "", opts.preAddon ? hx(_templateObject3$3, opts.preAddon) : "", opts.type, opts.placeholder, value !== 0 ? val(value) : value, opts.name, opts.disabled ? "disabled" : "", opts.nextAddon ? hx(_templateObject3$3, opts.nextAddon) : "");
            } else {
                if (opts.type == "textarea") {
                    vDom = hx(_templateObject4$2, opts.size ? "form-control-" + opts.size : "", opts.placeholder, opts.name, opts.disabled ? "disabled" : "", val(value));
                } else {
                    vDom = hx(_templateObject5$1, opts.type, opts.size ? "form-control-" + opts.size : "", opts.placeholder, val(opts.value), opts.name, opts.disabled ? "disabled" : "");
                }
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, inputEl = opts.preAddon || opts.nextAddon ? this.$("input") : this.$el;
            if (opts.preAddon || opts.nextAddon) {
                var onEnterFun = this.onEnter.bind(this);
                var onChangeFun = this.onChange.bind(this);
                inputEl.keyup(onEnterFun);
                inputEl.change(onChangeFun);
            }
            if (opts.readonly) {
                inputEl.attr("readonly", "readonly");
            }
        }
    }, {
        key: "filterStr",
        value: function filterStr(str) {
            var opts = this.options, reg = new RegExp(opts.filterReg);
            return opts.filterReg ? str.replace(reg, "") : str;
        }
    }, {
        key: "onEnter",
        value: function onEnter(event) {
            var target = $(event.currentTarget), value = this.filterStr(target.val());
            if (event.keyCode == 13) {
                if (typeof this.options.onEnter === "function") {
                    this.options.onEnter(this, value, event);
                }
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var target = $(event.currentTarget), value = this.filterStr(target.val());
            this.options.value = value;
            this.refresh();
            if (typeof this.options.onChange === "function") {
                this.options.onChange(this, value, event);
            }
        }
    } ]);
    return Inputs;
}(Lego.UI.Baseview);

Lego.components("inputs", Inputs);

var _templateObject$6 = taggedTemplateLiteral([ '\n        <div class="btn-toolbar">\n        ', "\n        </div>\n        " ], [ '\n        <div class="btn-toolbar">\n        ', "\n        </div>\n        " ]);

var _templateObject2$6 = taggedTemplateLiteral([ "comTag(item, index)" ], [ "comTag(item, index)" ]);

var Btntoolbar = function(_Lego$UI$Baseview) {
    inherits(Btntoolbar, _Lego$UI$Baseview);
    function Btntoolbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Btntoolbar);
        var options = {
            data: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Btntoolbar.__proto__ || Object.getPrototypeOf(Btntoolbar)).call(this, options));
        _this.renderCom();
        return _this;
    }
    createClass(Btntoolbar, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function comTag(item, index) {
                var tagName = item.type == "button" ? "btn-group" : "inputs", tagId = [ item.type, options.vid, index ].join("-");
                item.component.comName ? hx("<" + tagName + ' id="' + tagId + '"></' + tagName + ">") : "";
            }
            var vDom = hx(_templateObject$6, options.data.map(function(item, index) {
                return hx(_templateObject2$6);
            }));
            return vDom;
        }
    }, {
        key: "renderCom",
        value: function renderCom() {
            var that = this, options = this.options;
            this.options.data.forEach(function(item, index) {
                var tagId = [ item.type, options.vid, index ].join("-");
                Lego.create(item.type == "button" ? Btngroup : Inputs, Lego.extend({
                    el: "#" + tagId
                }, item));
            });
        }
    } ]);
    return Btntoolbar;
}(Lego.UI.Baseview);

Lego.components("btntoolbar", Btntoolbar);

var _templateObject$8 = taggedTemplateLiteral([ '\n        <div class="lego-chkgroup">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-chkgroup">\n        ', "\n        </div>\n        " ]);

var _templateObject2$8 = taggedTemplateLiteral([ '\n                <div class="form-check ', '">\n                  <label class="form-check-label">\n                    <input class="form-check-input lego-', '" type="', '" name="', '" value="', '" ', " >\n                    <span>", "</span>\n                  </label>\n                </div>\n                " ], [ '\n                <div class="form-check ', '">\n                  <label class="form-check-label">\n                    <input class="form-check-input lego-', '" type="', '" name="', '" value="', '" ', " >\n                    <span>", "</span>\n                  </label>\n                </div>\n                " ]);

var _templateObject3$4 = taggedTemplateLiteral([ '\n                <div class="form-check form-check-inline ', '">\n                    <label class="form-check-label">\n                      <input class="form-check-input lego-', '" type="', '" name="', '" value="', '" ', " >\n                      <span>", "</span>\n                    </label>\n                </div>\n                " ], [ '\n                <div class="form-check form-check-inline ', '">\n                    <label class="form-check-label">\n                      <input class="form-check-input lego-', '" type="', '" name="', '" value="', '" ', " >\n                      <span>", "</span>\n                    </label>\n                </div>\n                " ]);

var Chkgroup = function(_Lego$UI$Baseview) {
    inherits(Chkgroup, _Lego$UI$Baseview);
    function Chkgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Chkgroup);
        var options = {
            events: {
                "change .form-check-input": "onChange"
            },
            layout: "vertical",
            type: "checkbox",
            name: "",
            data: [],
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Chkgroup.__proto__ || Object.getPrototypeOf(Chkgroup)).call(this, options));
    }
    createClass(Chkgroup, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$8, opts.data.map(function(item) {
                if (opts.layout == "vertical") {
                    return hx(_templateObject2$8, item.disabled ? "disabled" : "", opts.type, opts.type, opts.name, item.value, item.checked ? "checked" : "", val(item.label));
                } else {
                    return hx(_templateObject3$4, item.disabled ? "disabled" : "", opts.type, opts.type, opts.name, item.value, item.checked ? "checked" : "", val(item.label));
                }
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, inputEl = this.$("[name=" + opts.name + "]");
            if (inputEl.length) {
                opts.data.forEach(function(item, index) {
                    if (item.disabled) {
                        inputEl.each(function(i, el) {
                            if (index == i) {
                                $(el).attr("disabled", "disabled");
                            }
                        });
                    }
                });
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var opts = this.options, valArr = [], result = [];
            this.$("input.form-check-input:checked").each(function(index, el) {
                valArr.push($(el).val());
            });
            opts.data.forEach(function(item, index) {
                if (valArr.includes(item.value)) {
                    result.push(item);
                }
            });
            if (typeof opts.onChange == "function") {
                opts.onChange(this, result.length == 1 ? result[0] : result, event);
            }
        }
    } ]);
    return Chkgroup;
}(Lego.UI.Baseview);

Lego.components("chkgroup", Chkgroup);

var Collapse = function() {
    function Collapse(opts, callback) {
        classCallCheck(this, Collapse);
        var options = {
            target: "",
            restHeight: 0,
            realHeight: "100%",
            onChange: function onChange() {}
        };
        var that = this;
        this.callback = callback;
        if ((typeof opts === "undefined" ? "undefined" : _typeof(opts)) == "object") {
            Object.assign(options, opts);
            this.options = options;
            this.callback = options.onChange;
            if (options.restHeight) {
                this.showHide(options.target, "animate");
            } else {
                this.showHide(options.target, "slideToggle");
            }
        }
        if (typeof opts == "string") {
            this.showHide(opts, "slideToggle");
        }
    }
    createClass(Collapse, [ {
        key: "showHide",
        value: function showHide(target, type) {
            var that = this;
            target = target instanceof $ ? target : $(target);
            if (!target.length) {
                return;
            }
            if (!target.hasClass("collapse")) {
                target.addClass("collapse");
            }
            if (type == "animate") {
                var height = parseInt(this.options.restHeight);
                var params = !target.hasClass("show") ? {
                    height: this.options.realHeight
                } : {
                    height: height
                };
                target[type](params, "normal", function() {
                    that.handler($(this));
                });
            } else {
                target[type]("normal", function() {
                    that.handler($(this));
                });
            }
        }
    }, {
        key: "handler",
        value: function handler(target) {
            if (typeof this.callback == "function") {
                var result = "";
                if (target.hasClass("show")) {
                    result = "hide";
                    target.removeClass("show");
                } else {
                    result = "show";
                    target.addClass("show");
                }
                this.callback(result, target);
            }
        }
    } ]);
    return Collapse;
}();

var fun = function fun(opts, callback) {
    return new Collapse(opts, callback);
};

Lego.components("collapse", fun);

var _templateObject$9 = taggedTemplateLiteral([ '\n        <div class="lego-colorpicker">\n            <input type="text" id="input_', '" value="', '" name="', '" />\n        </div>' ], [ '\n        <div class="lego-colorpicker">\n            <input type="text" id="input_', '" value="', '" name="', '" />\n        </div>' ]);

var ComView = function(_Lego$UI$Baseview) {
    inherits(ComView, _Lego$UI$Baseview);
    function ComView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, ComView);
        var options = {
            name: "",
            type: 1,
            readonly: false,
            spectrumOption: {
                value: "",
                flat: false,
                showInput: false,
                allowEmpty: false,
                showButtons: true,
                clickoutFiresChange: true,
                showInitial: true,
                showPalette: false,
                showPaletteOnly: false,
                hideAfterPaletteSelect: false,
                togglePaletteOnly: false,
                showSelectionPalette: true,
                localStorageKey: false,
                appendTo: "parent",
                maxSelectionSize: 16,
                cancelText: "取消",
                chooseText: "确定",
                togglePaletteMoreText: "more",
                togglePaletteLessText: "less",
                clearText: "清除已选择颜色",
                noColorSelectedText: "没有选中的颜色",
                preferredFormat: "hex3",
                className: "",
                containerClassName: "",
                replacerClassName: "",
                showAlpha: false,
                theme: "sp-light",
                palette: [ [ "#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3" ] ],
                selectionPalette: [],
                disabled: false,
                offset: null
            },
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (ComView.__proto__ || Object.getPrototypeOf(ComView)).call(this, options));
    }
    createClass(ComView, [ {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = hx(_templateObject$9, opts.vid, val(opts.value), opts.name);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.result = this.result || "";
            var opts = this.options, that = this, inputEl = this.$("#input_" + opts.vid);
            if (inputEl.length) {
                if (!this.spectrum) {
                    var defaults$$1 = {
                        change: function change(color) {
                            that.result = color;
                            this.color = that.getValue().toString();
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, that.getValue());
                            }
                        },
                        move: function move(color) {
                            if (typeof opts.onMove == "function") {
                                opts.onMove(that, color);
                            }
                        },
                        show: function show(color) {
                            if (typeof opts.onShow == "function") {
                                opts.onShow(that, color);
                            }
                        },
                        hide: function hide(color) {
                            if (typeof opts.onHide == "function") {
                                opts.onHide(that, color);
                            }
                        },
                        beforeShow: function beforeShow(color) {
                            if (typeof opts.onBeforeShow == "function") {
                                opts.onBeforeShow(that, color);
                            }
                        }
                    };
                    Object.assign(defaults$$1, opts.spectrumOption);
                    if (opts.value) {
                        defaults$$1.color = val(opts.value);
                    }
                    var palette = [ [ "#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff" ], [ "#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f" ], [ "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc" ], [ "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd" ], [ "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0" ], [ "#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79" ], [ "#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47" ], [ "#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130" ] ];
                    switch (opts.type) {
                      case 1:
                        defaults$$1.showPalette = false;
                        break;

                      case 2:
                        defaults$$1.showPalette = false;
                        defaults$$1.showInput = true;
                        defaults$$1.allowEmpty = true;
                        defaults$$1.showAlpha = true;
                        break;

                      case 3:
                        defaults$$1.showPalette = true;
                        defaults$$1.showPaletteOnly = true;
                        defaults$$1.showSelectionPalette = false;
                        defaults$$1.palette = palette;
                        break;

                      case 4:
                        defaults$$1.showAlpha = true;
                        defaults$$1.showInput = true;
                        defaults$$1.allowEmpty = true;
                        defaults$$1.showPalette = true;
                        defaults$$1.showPaletteOnly = false;
                        defaults$$1.showSelectionPalette = true;
                        defaults$$1.localStorageKey = "spectrum." + opts.vid;
                        defaults$$1.palette = palette;
                        break;
                    }
                    this.spectrum = inputEl.spectrum(defaults$$1);
                }
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var opts = this.options, inputEl = $("#input_" + opts.vid);
            if (inputEl.length) {
                inputEl.spectrum("set", inputEl.val());
                inputEl.valid();
            }
            return this.result;
        }
    }, {
        key: "colorpicker",
        value: function colorpicker(method) {
            var opts = this.options, that = this, inputEl = this.$("#input_" + opts.vid);
            if (inputEl.length) {
                inputEl.spectrum(method);
            }
        }
    } ]);
    return ComView;
}(Lego.UI.Baseview);

Lego.components("colorpicker", ComView);

var _templateObject$11 = taggedTemplateLiteral([ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ], [ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ]);

var _templateObject2$10 = taggedTemplateLiteral([ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ], [ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ]);

var _templateObject3$6 = taggedTemplateLiteral([ '<dropdown id="autocomplete_', '"></dropdown>' ], [ '<dropdown id="autocomplete_', '"></dropdown>' ]);

var Search = function(_Lego$UI$Baseview) {
    inherits(Search, _Lego$UI$Baseview);
    function Search() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Search);
        var options = {
            events: {
                "click .lego-search-button": "onSearch",
                "change .lego-search-input": "onChange",
                "keyup .lego-search-input": "_enterSearch"
            },
            placeholder: "请输入关键字",
            name: "",
            size: "",
            keyword: "",
            activeKey: "",
            activeValue: "",
            autoComplete: false,
            showSelect: false,
            onKeyup: function onKeyup() {},
            onSearch: function onSearch() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    createClass(Search, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            this.showDropdown = false;
            if (typeof opts.value == "string") {
                opts.keyword = opts.value;
                opts.value = null;
            }
            this.addCom({
                el: "#dropdown-" + opts.vid,
                container: "#select-" + opts.vid,
                data: opts.data,
                onChange: function onChange(self, model) {
                    this.context.options.activeKey = model.key;
                    this.context.options.activeValue = model.value;
                }
            });
            if (opts.autoComplete) {
                var autoCompleteOpts = {
                    el: "#autocomplete_" + opts.vid,
                    container: this.$el,
                    disabled: true,
                    maxCount: opts.autoComplete.maxCount || 5,
                    style: {
                        width: "100%"
                    },
                    onChange: function onChange(self, result) {
                        opts.keyword = opts.value = result.value;
                        result.keyword = result.value;
                        if (typeof opts.onSearch === "function") {
                            opts.onSearch(this, result, self);
                        }
                    },
                    renderAfter: function renderAfter() {
                        if (opts.autoComplete && this.options.data) {
                            if (that.showDropdown && this.options.data.length) {
                                this.show();
                            } else {
                                this.close();
                            }
                        }
                    }
                };
                if (opts.autoComplete.data) {
                    autoCompleteOpts.data = opts.autoComplete.data;
                }
                if (opts.autoComplete.dataSource) {
                    autoCompleteOpts.dataSource = opts.autoComplete.dataSource;
                }
                autoCompleteOpts.stopFetch = true;
                this.addCom(autoCompleteOpts);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$11, opts.size ? "input-group-" + opts.size : "", opts.autoComplete ? "position: relative;" : "", opts.showSelect ? hx(_templateObject2$10, opts.vid, opts.activeValue || "请选择", opts.vid) : "", opts.vid, opts.placeholder, opts.name, val(opts.keyword), opts.autoComplete ? hx(_templateObject3$6, opts.vid) : "");
            return vDom;
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var opts = this.options, view = null, result = this.getValue(event);
            if (event.keyCode == 13) {
                this.onSearch(event);
            } else {
                if (opts.autoComplete) {
                    view = Lego.getView("#autocomplete_" + opts.vid);
                    if (!opts.autoComplete.dataSource && opts.autoComplete.data) {
                        if (result.keyword) {
                            view.options.data = opts.autoComplete.data.filter(function(item) {
                                return item.value.indexOf(value.keyword) > -1;
                            });
                            this.showDropdown = !!view.options.data.length;
                            view.refresh();
                        } else {
                            view.close();
                            return;
                        }
                    } else {
                        this.showDropdown = !!result.keyword;
                        if (!this.showDropdown) {
                            view.close();
                            return;
                        }
                    }
                }
                if (typeof opts.onKeyup === "function") {
                    opts.onKeyup(this, result, view || event);
                }
            }
        }
    }, {
        key: "getValue",
        value: function getValue(event) {
            var keyword = event ? this.$(".lego-search-input").val() : this.options.keyword;
            return {
                key: this.options.activeKey,
                value: this.options.activeValue,
                keyword: keyword
            };
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            if (event) {
                event.stopPropagation();
            }
            if (typeof this.options.onChange === "function") {
                this.options.onChange(this, this.getValue(event), event);
            }
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            if (event) {
                event.stopPropagation();
            }
            if (typeof this.options.onSearch === "function") {
                this.options.onSearch(this, this.getValue(event), event);
            }
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

var _templateObject$10 = taggedTemplateLiteral([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$9 = taggedTemplateLiteral([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$5 = taggedTemplateLiteral([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$3 = taggedTemplateLiteral([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$2 = taggedTemplateLiteral([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

var _templateObject6$1 = taggedTemplateLiteral([ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ], [ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ]);

var Dropdown = function(_Lego$UI$Baseview) {
    inherits(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Dropdown);
        var options = {
            events: {
                "click li:not(.dropdown, .lego-search-container)": "clickItem",
                "click .lego-search-container": function clickLegoSearchContainer(event) {
                    event.stopPropagation();
                }
            },
            scrollbar: null,
            disabled: false,
            eventName: "click",
            searchPlaceholder: "搜索",
            container: "",
            direction: "",
            activeKey: "",
            maxCount: 0,
            clickAndClose: true,
            showSearch: false,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    createClass(Dropdown, [ {
        key: "dataReady",
        value: function dataReady() {
            var opts = this.options, that = this;
            if (opts.data.length && opts.maxCount) {
                opts.data.length = opts.data.length > opts.maxCount ? opts.maxCount : opts.data.length;
            }
        }
    }, {
        key: "components",
        value: function components() {
            var _this2 = this;
            var opts = this.options, that = this;
            if (opts.showSearch) {
                (function() {
                    var searchFun = function searchFun(self, result) {
                        that.$("li").each(function(index, el) {
                            if ($(el).text().indexOf(result.keyword) < 0) {
                                $(el).hide();
                            } else {
                                $(el).show();
                            }
                        });
                    };
                    _this2.addCom({
                        el: "#search_" + opts.vid,
                        size: "sm",
                        placeholder: opts.searchPlaceholder,
                        onKeyup: function onKeyup(self, result) {
                            searchFun(self, result);
                        },
                        onSearch: function onSearch(self, result) {
                            searchFun(self, result);
                        }
                    });
                })();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = "";
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$10);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$9, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$5, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item), item.children ? hx(_templateObject4$3, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5$2, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
                return itemNav(item);
            }));
            if (opts.showSearch) {
                vDom = hx(_templateObject6$1, opts.open ? "block" : "none", opts.vid, vDom);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options, _eventName = "click.dropdown-" + opts.vid;
            this.directionArr = opts.direction ? opts.direction.split("_") : [];
            this.container = opts.container instanceof $ ? opts.container : opts.context.$ ? opts.context.$(opts.container) : $(opts.container);
            if (!opts.disabled && opts.container) {
                var handler = function handler(event) {
                    event.stopPropagation();
                    $(".dropdown-menu").each(function(index, el) {
                        if (el === that.el) {
                            var _Lego$UI$Util;
                            (_Lego$UI$Util = Lego.UI.Util).getDirection.apply(_Lego$UI$Util, [ that.container, that.$el ].concat(toConsumableArray(that.directionArr)));
                            that.$el.slideToggle("fast");
                        } else {
                            $(el).slideUp("fast");
                        }
                    });
                };
                var cssObj = {
                    zIndex: 1e4
                };
                if (opts.width) {
                    cssObj.width = opts.width;
                }
                if (opts.maxHeight) {
                    cssObj.maxHeight = opts.maxHeight;
                    cssObj.overflow = "auto";
                }
                if (opts.showSearch) {
                    this.$(".lego-search-container").next("ul").css(cssObj);
                } else {
                    this.$el.css(cssObj);
                }
                if (opts.eventName == "click") {
                    this.container.off(_eventName).on(_eventName, handler);
                } else {
                    this.container.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
            }
            $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                that.close();
            });
        }
    }, {
        key: "show",
        value: function show() {
            var _Lego$UI$Util2;
            if (this.container) {
                (_Lego$UI$Util2 = Lego.UI.Util).getDirection.apply(_Lego$UI$Util2, [ this.container, this.$el ].concat(toConsumableArray(this.directionArr)));
            }
            if (this.$el.css("display") == "none") {
                this.$el.slideDown("fast");
            }
        }
    }, {
        key: "close",
        value: function close() {
            this.$el.slideUp("fast");
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.children("a").attr("id");
            });
            if (model) {
                this.options.onChange(this, model, event);
            }
            if (this.options.clickAndClose) {
                this.close();
            } else {
                this.refresh();
            }
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

Lego.components("dropdown", Dropdown);

var _templateObject$12 = taggedTemplateLiteral([ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ], [ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ]);

var Dropdownbtn = function(_Lego$UI$Baseview) {
    inherits(Dropdownbtn, _Lego$UI$Baseview);
    function Dropdownbtn() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Dropdownbtn);
        var options = {
            events: {
                "click button.dropdownbtn, .lego-reply-submit": "onClick"
            },
            text: "button name",
            btnType: "secondary",
            size: "",
            direction: "",
            activeKey: "",
            dropdownOption: {},
            data: [],
            onClick: function onClick() {},
            onChange: function onChange() {},
            components: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Dropdownbtn.__proto__ || Object.getPrototypeOf(Dropdownbtn)).call(this, options));
        _this.activeItem = {};
        return _this;
    }
    createClass(Dropdownbtn, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.data.length) {
                this.addCom($.extend(opts.dropdownOption, {
                    el: "#dropdown-" + opts.vid,
                    container: this.$(".dropdown-toggle-split"),
                    direction: opts.direction,
                    activeKey: opts.activeKey,
                    data: opts.data,
                    onChange: function onChange(self, item, event) {
                        var theView = self.options.context;
                        theView.activeItem = item;
                        if (typeof theView.options.onChange == "function") {
                            theView.options.onChange(theView, item);
                        }
                    }
                }));
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$12, opts.size == "lg" ? "btn-group-lg" : opts.size == "sm" ? "btn-group-sm" : "", opts.direction == "up" ? "dropup" : "", opts.btnType, val(opts.html || opts.text), opts.btnType, opts.vid);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$("button").each(function(index, item) {
                $(item).data("index", index);
            });
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, this.activeItem, event);
            }
        }
    } ]);
    return Dropdownbtn;
}(Lego.UI.Baseview);

Lego.components("dropdownbtn", Dropdownbtn);

var _templateObject$13 = taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        ~\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        ~\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ]);

var _templateObject2$11 = taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ]);

var _templateObject3$7 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

moment.locale("zh-cn");

function formatDate(dateStr) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
    return format && dateStr ? moment(dateStr, "YYYY-MM-DD HH:mm:ss").format(format) : dateStr;
}

var Datepicker = function(_Lego$UI$Baseview) {
    inherits(Datepicker, _Lego$UI$Baseview);
    function Datepicker() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Datepicker);
        var options = {
            events: {
                click: "onclick",
                "click .input-group-addon": "showpanel"
            },
            type: "date",
            name: "",
            placeholder: "选择时间",
            disabled: false,
            inline: false,
            keepOpen: false,
            showClose: false,
            showClear: false,
            size: "default",
            format: opts.type == "time" ? "LT" : "YYYY-MM-DD HH:mm:ss",
            value: null,
            startInputEl: "",
            startName: opts.name,
            startValue: "",
            startPlaceholder: "开始时间",
            endInputEl: "",
            endName: "",
            endValue: "",
            endPlaceholder: "结束时间",
            minDate: "",
            maxDate: "",
            useCurrent: false,
            setting: {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, options));
        _this.initDatepicker();
        return _this;
    }
    createClass(Datepicker, [ {
        key: "initDatepicker",
        value: function initDatepicker() {
            var _this2 = this;
            var opts = this.options;
            this.oldValue = formatDate(opts.value, opts.format);
            Object.assign(opts.setting, {
                format: opts.format,
                keepOpen: opts.keepOpen,
                showClose: opts.showClose,
                showClear: opts.showClear,
                inline: opts.inline
            });
            var that = this, theEl = opts.inline ? opts.el : ".input-group input";
            if (opts.type !== "range") {
                var $theEl = this.$(theEl);
                if (opts.inline) {
                    $theEl = this.$el;
                }
                $theEl.datepicker(opts.setting);
                $theEl.on("dp.change", function(event) {
                    var value = $(this).val();
                    if (typeof opts.onChange == "function") {
                        opts.onChange(that, formatDate(value, opts.format));
                    }
                });
            } else {
                (function() {
                    var startEl = ".startDate", endEl = ".endDate";
                    if (!opts.startInputEl && !opts.endInputEl) {
                        var startDateOpts = Object.assign({}, opts.setting);
                        if (opts.minDate) {
                            startDateOpts.minDate = opts.minDate;
                        }
                        var endDateOpts = Object.assign({}, _extends({}, opts.setting, {
                            useCurrent: opts.useCurrent
                        }));
                        if (opts.maxDate) {
                            startDateOpts.maxDate = opts.maxDate;
                        }
                        var startDate = _this2.$(startEl).datepicker(startDateOpts);
                        var endDate = _this2.$(endEl).datepicker(endDateOpts);
                        _this2.$(startEl).on("dp.change", function(e) {
                            that.$(endEl).data("DateTimePicker").minDate(e.date);
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, formatDate(that.$(startEl).val(), opts.format), "start");
                            }
                        });
                        _this2.$(endEl).on("dp.change", function(e) {
                            that.$(startEl).data("DateTimePicker").maxDate(e.date);
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, formatDate(that.$(endEl).val(), opts.format), "end");
                            }
                        });
                    } else if (opts.startInputEl || opts.endInputEl) {
                        (function() {
                            var selector = opts.startInputEl || opts.endInputEl;
                            if (opts.startInputEl) {
                                opts.setting.useCurrent = false;
                            }
                            _this2.$(theEl).datepicker(opts.setting);
                            if (opts.endInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").maxDate(e.date);
                                    if (typeof opts.onChange == "function") {
                                        opts.onChange(that, formatDate(_el.val(), opts.format), "start");
                                    }
                                });
                            } else if (opts.startInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").minDate(e.date);
                                    if (typeof opts.onChange == "function") {
                                        opts.onChange(that, formatDate(_el.val(), opts.format), "end");
                                    }
                                });
                            }
                        })();
                    }
                })();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options || {};
            var vDom = "";
            if (opts.type == "range" && !opts.startInputEl && !opts.endInputEl) {
                vDom = hx(_templateObject$13, opts.disabled ? "disabled" : "", formatDate(opts.startValue, opts.format), opts.startName, opts.startPlaceholder, opts.disabled ? "disabled" : "", formatDate(opts.endValue, opts.format), opts.endName, opts.endPlaceholder);
            }
            if (opts.type !== "range" || opts.type == "range" && opts.startInputEl && opts.endInputEl) {
                vDom = hx(_templateObject2$11, opts.disabled ? "disabled" : "", formatDate(val(opts.value), opts.format), opts.name, opts.placeholder, opts.type == "time" ? "clock-circle-o" : "calendar");
            }
            if (opts.inline) {
                vDom = hx(_templateObject3$7);
            }
            return vDom;
        }
    }, {
        key: "onclick",
        value: function onclick(event) {
            event.stopPropagation();
        }
    }, {
        key: "showpanel",
        value: function showpanel(event) {
            var target = $(event.currentTarget), input = target.prev("input");
            input.focus();
        }
    }, {
        key: "getPeriod",
        value: function getPeriod(type) {
            var startDate = void 0, endDate = void 0;
            if (moment) {
                switch (type) {
                  case 0:
                    startDate = moment().format("YYYY-MM-DD");
                    endDate = moment().format("YYYY-MM-DD");
                    break;

                  case 1:
                    startDate = moment().day(0).format("YYYY-MM-DD");
                    endDate = moment().day(6).format("YYYY-MM-DD");
                    break;

                  case 2:
                    startDate = moment().format("YYYY-MM-01");
                    endDate = moment(startDate).add(1, "months").subtract(1, "days").format("YYYY-MM-DD");
                    break;

                  case 3:
                    startDate = moment().format("YYYY-01-01");
                    endDate = moment().format("YYYY-12-31");
                    break;
                }
            } else {
                debug.warn("依赖的moment.js插件还没安装");
            }
            return {
                startDate: startDate,
                endDate: endDate
            };
        }
    } ]);
    return Datepicker;
}(Lego.UI.Baseview);

Lego.components("datepicker", Datepicker);

var _templateObject$15 = taggedTemplateLiteral([ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ], [ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ]);

var _templateObject2$13 = taggedTemplateLiteral([ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ], [ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ]);

var _templateObject3$9 = taggedTemplateLiteral([ '<p class="form-control-static mb-0">', "</p>" ], [ '<p class="form-control-static mb-0">', "</p>" ]);

var _templateObject4$4 = taggedTemplateLiteral([ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);

var _templateObject5$3 = taggedTemplateLiteral([ '<span class="symbol required">*</span>' ], [ '<span class="symbol required">*</span>' ]);

var _templateObject6$2 = taggedTemplateLiteral([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);

var _templateObject7$1 = taggedTemplateLiteral([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);

var _templateObject8$1 = taggedTemplateLiteral([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);

var _templateObject9 = taggedTemplateLiteral([ "<form>\n            ", "\n            ", "</form>" ], [ "<form>\n            ", "\n            ", "</form>" ]);

$.fn.validate = validate;

var regObj = {
    mobile: /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,
    email: /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,
    password: /^[\w]+$/
};

$.validator.addMethod("mobile", function(value, element) {
    var length = value.length, mobile = regObj.mobile;
    return this.optional(element) || length == 11 && mobile.test(value);
}, "请正确填写手机号");

$.validator.addMethod("email", function(value, element) {
    var length = value.length, email = regObj.email;
    return this.optional(element) || email.test(value);
}, "请正确填写邮箱");

$.validator.addMethod("password", function(value, element) {
    var passwordReg = regObj.password;
    return this.optional(element) || passwordReg.test(value);
}, "请正确填写密码");

$.validator.addMethod("coms", function(value, element, num) {
    var valArr = value.split(",");
    return this.optional(element) || valArr.length == num;
}, "请完成所有项");

var Forms = function(_Lego$UI$Baseview) {
    inherits(Forms, _Lego$UI$Baseview);
    function Forms() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Forms);
        var options = {
            layout: "vertical",
            setDefaults: {
                errorClass: "form-control-feedback",
                errorElement: "div",
                errorPlacement: function errorPlacement(error, element) {
                    element.closest(".form-group").children("div").append(error);
                },
                highlight: function highlight(element, errorClass) {
                    $(element).closest(".form-group").addClass("has-danger");
                },
                success: function success(el) {
                    el.closest(".form-group").removeClass("has-danger");
                    el.closest("div.form-control-feedback").remove();
                },
                submitHandler: function submitHandler(form) {
                    var view = Lego.getView(opts.el);
                    if (view) {
                        view.submitForm();
                    }
                },
                onchange: function onchange(element) {
                    $(element).valid();
                },
                ignore: "",
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
            format: function format(result) {
                return result;
            },
            onSubmit: function onSubmit() {}
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, options));
        _this.renderCom();
        return _this;
    }
    createClass(Forms, [ {
        key: "render",
        value: function render() {
            var options = this.options || {}, that = this;
            function submitBtn() {
                var submit = "";
                if (!options.submitEl && options.showSubmit) {
                    if (options.layout == "vertical") {
                        submit = hx(_templateObject$15, options.submitText, options.resetText);
                    } else {
                        submit = hx(_templateObject2$13, options.labelCols, options.comCols, options.submitText, options.resetText);
                    }
                }
                return submit;
            }
            function layoutItem(item, layout, id) {
                var vDom = "", comTag = "";
                if (item.text) {
                    comTag = hx(_templateObject3$9, val(item.text));
                } else {
                    if (item.component) {
                        comTag = item.component.comName ? hx("<" + val(item.component.comName) + " id=" + id + "></" + val(item.component.comName) + ">") : "";
                    } else {
                        comTag = "";
                    }
                }
                if (layout == "vertical") {
                    vDom = hx(_templateObject4$4, id, item.rule || item.required ? item.rule.required || item.required ? hx(_templateObject5$3) : "" : "", val(item.label), comTag, item.help ? hx(_templateObject6$2, val(item.help)) : "");
                } else {
                    vDom = hx(_templateObject7$1, id, that.options.labelCols, item.rule || item.required ? item.rule.required || item.required ? hx(_templateObject5$3) : "" : "", val(item.label), that.options.comCols, comTag, item.help ? hx(_templateObject6$2, val(item.help)) : "");
                }
                return vDom;
            }
            function loopItem(data, index, layout) {
                var vDom = "", comId = [ "component", options.vid, index ];
                if (data.items) {
                    vDom = hx(_templateObject8$1, val(data.labelClass), val(data.label), data.items.map(function(item, i) {
                        comId.push(i);
                        return layoutItem(item, layout, comId.join("_"));
                    }));
                } else {
                    vDom = layoutItem(data, layout, comId.join("_"));
                }
                return vDom;
            }
            var vDom = hx(_templateObject9, options.data.map(function(item, i) {
                return loopItem(item, i, options.layout);
            }), submitBtn());
            return vDom;
        }
    }, {
        key: "renderCom",
        value: function renderCom() {
            var _this2 = this;
            var that = this, opts = this.options;
            this.rules = null;
            this.messages = null;
            var components = opts.data, comArr = [ "selects", "treeselect" ];
            components = typeof components == "function" ? components(opts) : Array.isArray(components) ? components : [ components ];
            components.map(function(item, index) {
                if (!item.text) {
                    (function() {
                        var comId = [ "component", opts.vid, index ];
                        if (item.items) {
                            item.items.map(function(subItem, i) {
                                if (subItem.component) {
                                    if (subItem.rule && subItem.message) {
                                        that.rules = opts.rules || {};
                                        that.messages = opts.messages || {};
                                        if (subItem.required) {
                                            subItem.rule.required = true;
                                        }
                                        var theName = comArr.includes(subItem.component.comName) ? "hidden_" + subItem.component.name : subItem.component.name;
                                        opts.setDefaults.rules[theName] = subItem.rule;
                                        opts.setDefaults.messages[theName] = subItem.message;
                                    }
                                    comId.push(i);
                                    subItem.component.el = "#" + comId.join("_");
                                    subItem.component.context = that;
                                    if (subItem.component.comName) {
                                        Lego.create(Lego.UI[subItem.component.comName], subItem.component);
                                    }
                                }
                            });
                        } else {
                            if (item.component) {
                                if (item.rule && item.message) {
                                    _this2.rules = opts.rules || {};
                                    _this2.messages = opts.messages || {};
                                    if (item.required) {
                                        item.rule.required = true;
                                    }
                                    var theName = comArr.includes(item.component.comName) ? "hidden_" + item.component.name : item.component.name;
                                    opts.setDefaults.rules[theName] = item.rule;
                                    opts.setDefaults.messages[theName] = item.message;
                                }
                                item.component.el = "#" + comId.join("_");
                                item.component.context = _this2;
                                if (item.component.comName) {
                                    Lego.create(Lego.UI[item.component.comName], item.component);
                                }
                            }
                        }
                    })();
                }
            });
            var clickName = "click.form_" + opts.vid, submitEl = opts.submitEl, $submitEl = submitEl instanceof $ ? submitEl : $(typeof submitEl == "string" ? submitEl : '[type="submit"]');
            if (this.rules && this.messages) {
                this.$el.validate(opts.setDefaults);
                if ($submitEl.length) {
                    $submitEl.off(clickName).on(clickName, function(event) {
                        that.$el.submit();
                    });
                }
            } else {
                $submitEl.off(clickName).on(clickName, function(event) {
                    that.submitForm();
                });
            }
            this.$el.attr("onSubmit", "javascript:return false;");
        }
    }, {
        key: "serializeJson",
        value: function serializeJson() {
            var data = {};
            var formData = this.$el.serializeArray();
            formData.forEach(function(item, index) {
                if (item.value && item.name.indexOf("hidden_") < 0) {
                    if (data[item.name]) {
                        if (!Array.isArray(data[item.name])) {
                            data[item.name] = [ data[item.name] ];
                        }
                        if (data.indexOf(item.value) < 0) {
                            data[item.name].push(item.value);
                        }
                    } else {
                        data[item.name] = item.value;
                    }
                }
            });
            return data;
        }
    }, {
        key: "submitForm",
        value: function submitForm() {
            var format = this.options.format, submitEl = this.options.submitEl, $submitEl = submitEl instanceof $ ? submitEl : this.$((typeof submitEl == "string" ? submitEl : "") || '[type="submit"]'), that = this;
            var data = this.serializeJson();
            if (typeof format == "function") {
                data = format(data);
            }
            if (Lego.isEmptyObject(data)) {
                return false;
            }
            if (!$submitEl.hasClass("disabled")) {
                $submitEl.text("提交中...").addClass("disabled");
                setTimeout(function() {
                    $submitEl.text(that.options.submitText).removeClass("disabled");
                }, 3e3);
            }
            return this.options.onSubmit(this, data);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.el.reset();
        }
    } ]);
    return Forms;
}(Lego.UI.Baseview);

Lego.components("forms", Forms);

var _templateObject$14 = taggedTemplateLiteral([ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2$12 = taggedTemplateLiteral([ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ], [ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ]);

var _templateObject3$8 = taggedTemplateLiteral([ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ], [ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ]);

var Editcom = function(_Lego$UI$Baseview) {
    inherits(Editcom, _Lego$UI$Baseview);
    function Editcom() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Editcom);
        var options = {
            events: {
                "click i.edit": "onClick",
                "click i.cancel": "onClose"
            },
            text: "",
            html: "",
            template: "",
            width: "auto",
            clicked: false,
            readonly: false,
            data: [],
            icon: "edit",
            size: "",
            validation: false,
            onEdit: function onEdit() {},
            onCancel: function onCancel() {},
            onFinish: function onFinish() {},
            components: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Editcom.__proto__ || Object.getPrototypeOf(Editcom)).call(this, options));
    }
    createClass(Editcom, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.components.length) {
                opts.components.forEach(function(item, index) {
                    item.key = "editcom_" + opts.vid;
                    item.el = "#" + item.key;
                    item.size = opts.size;
                    if (opts.width) {
                        item.style = item.style || {};
                        item.style.width = opts.width;
                    }
                    item.value = opts.value || opts.text;
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$14, opts.size, opts.clicked ? opts.template ? val(opts.template) : opts.components.map(function(item) {
                return hx("<" + item.comName + " id=" + item.key + "></" + item.comName + ">");
            }) : val(opts.html || opts.text), !opts.readonly && !opts.clicked ? hx(_templateObject2$12, val(opts.icon)) : "", !opts.readonly && opts.clicked ? hx(_templateObject3$8) : "");
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            this.options.clicked = true;
            if (typeof this.options.onEdit == "function") {
                this.options.onEdit(this, event);
            }
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            this.close();
            if (typeof this.options.onCancel == "function") {
                this.options.onCancel(this, event);
            }
        }
    }, {
        key: "close",
        value: function close(value, htmlStr) {
            var options = {
                clicked: false
            }, opts = this.options;
            if (value) {
                if (typeof opts.validation == "function") {
                    var result = opts.validation(this, value);
                    if (!result) {
                        return false;
                    }
                } else if (typeof opts.validation == "string") {
                    if (!regObj[opts.validation].test(value)) {
                        return false;
                    }
                }
                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
                    if (value.value) {
                        options.value = value;
                        options.text = value.value;
                    }
                } else {
                    options.value = options.text = value;
                }
                if (htmlStr) {
                    options.html = htmlStr;
                }
            }
            Object.assign(this.options, options);
            if (typeof opts.onFinish == "function") {
                opts.onFinish(this);
            }
            return true;
        }
    } ]);
    return Editcom;
}(Lego.UI.Baseview);

Lego.components("editcom", Editcom);

var _templateObject$16 = taggedTemplateLiteral([ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ]);

var _templateObject2$14 = taggedTemplateLiteral([ '<input type="hidden" name="', '" value="', '"/>' ], [ '<input type="hidden" name="', '" value="', '"/>' ]);

var _templateObject3$10 = taggedTemplateLiteral([ '<span id="face_', '">', "</span>" ], [ '<span id="face_', '">', "</span>" ]);

var _templateObject4$5 = taggedTemplateLiteral([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ]);

var _templateObject5$4 = taggedTemplateLiteral([ '<a class="face-remove" href="javascript:;">删除</a>' ], [ '<a class="face-remove" href="javascript:;">删除</a>' ]);

var Facial = function(_Lego$UI$Baseview) {
    inherits(Facial, _Lego$UI$Baseview);
    function Facial() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Facial);
        var options = {
            events: {
                "click .lego-facial-item a": "clickItem",
                "click .face-remove": "removeFace"
            },
            name: "",
            target: "",
            targetType: "textarea",
            icon: "anticon anticon-smile-o",
            eventName: "click",
            dropdownOption: {},
            iconsUrl: Lego.config.faceIconUri || "",
            itemClassPrefix: "f0",
            direction: "bottom",
            value: [],
            data: Lego.UI.Util.faceTags
        };
        Object.assign(options, opts);
        options.value = Array.isArray(options.value) ? options.value : [ options.value ];
        var _this = possibleConstructorReturn(this, (Facial.__proto__ || Object.getPrototypeOf(Facial)).call(this, options));
        _this.cursorPos = null;
        _this.cursorContainer = null;
        var that = _this;
        $("body, .modal-body").click(function() {
            that.close();
        });
        return _this;
    }
    createClass(Facial, [ {
        key: "render",
        value: function render() {
            var opts = this.options, dataLength = opts.data.length, widthPercent = 10 / (dataLength - 1) * 10;
            var vDom = hx(_templateObject$16, !opts.target ? hx(_templateObject2$14, val(opts.name), opts.value.join(",")) : "", !opts.target ? hx(_templateObject3$10, opts.vid, opts.value.join(",")) : "", opts.icon, opts.direction ? "drop" + opts.direction : "", opts.data.map(function(item, index) {
                return hx(_templateObject4$5, opts.itemClassPrefix, index, item, opts.iconsUrl, index);
            }), !opts.target && opts.value.length ? hx(_templateObject5$4) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var target = this.$el, that = this, opts = this.options, targetEl = opts.target instanceof $ ? opts.target : opts.target ? $(opts.target) : this.$("input");
            function handler(event) {
                event.stopPropagation();
                that.$el.toggleClass("dropdown open");
                if (that.options.eventName == "hover") {
                    target.mouseleave(function() {
                        that.close();
                    });
                }
            }
            if (opts.eventName == "click") {
                var _eventName = "click.dropdown_" + opts.vid;
                target.off(_eventName).on(_eventName, handler);
            } else {
                target[opts.eventName](handler);
            }
            targetEl.off("click keyup").on("click keyup", function(event) {
                var el = $(event.currentTarget);
                that.getCursorPos(el);
            });
            if (opts.dropdownOption) {
                this.$(".dropdown-menu > ul").css(opts.dropdownOption);
            }
        }
    }, {
        key: "removeFace",
        value: function removeFace(event) {
            event.stopPropagation();
            this.options.value = [];
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, targetEl = opts.target instanceof $ ? opts.target : opts.target ? $(opts.target) : this.$("input"), value = target.attr("title");
            if (opts.target) {
                if (opts.targetType == "div") {
                    this.addComma(targetEl, value);
                } else {
                    this.addOnPos(targetEl, value);
                }
            } else {
                opts.value = [ value ];
            }
            this.close();
        }
    }, {
        key: "show",
        value: function show(event) {
            this.$el.addClass("dropdown open");
        }
    }, {
        key: "close",
        value: function close(event) {
            this.$el.removeClass("dropdown open");
        }
    }, {
        key: "getCursorPos",
        value: function getCursorPos(el) {
            var sel = void 0, range = void 0, that = this;
            setTimeout(function() {
                if (window.getSelection) {
                    sel = window.getSelection();
                    range = sel.getRangeAt(0);
                    that.cursorPos = range.startOffset;
                    that.cursorContainer = range.startContainer;
                } else if (document.selection) {
                    sel = document.selection;
                    range = sel.createRange();
                    range.moveStart("character", -1);
                    that.cursorPos = range.text.length;
                } else if (el.selectionStart || el.selectionStart == "0") {
                    that.cursorPos = el.selectionStart;
                }
            }, 0);
        }
    }, {
        key: "addOnPos",
        value: function addOnPos(selector, myValue) {
            selector = selector[0];
            if (document.selection) {
                selector.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                sel.select();
            } else if (selector.selectionStart || selector.selectionStart == "0") {
                var startPos = selector.selectionStart;
                var endPos = selector.selectionEnd;
                var restoreTop = selector.scrollTop;
                selector.value = selector.value.substring(0, startPos) + myValue + selector.value.substring(endPos, selector.value.length);
                if (restoreTop > 0) {
                    selector.scrollTop = restoreTop;
                }
                selector.focus();
                selector.selectionStart = startPos + myValue.length;
                selector.selectionEnd = startPos + myValue.length;
            } else {
                selector.value += myValue;
                selector.focus();
            }
        }
    }, {
        key: "addComma",
        value: function addComma(selector, text) {
            var sel = void 0, range = void 0, el = selector[0], that = this;
            el.focus();
            if (!selector.html().length) {
                this.cursorPos = 0;
            }
            text = this.options.targetType == "div" ? Lego.UI.Util.textToFace(text, this.options.iconsUrl + this.options.itemClassPrefix) : text;
            if (window.getSelection) {
                sel = window.getSelection();
                range = sel.getRangeAt(0);
                range.collapse(false);
                if (this.cursorPos) {
                    range.collapse(true);
                    range.setStart(this.cursorContainer, this.cursorPos);
                    range.setEnd(this.cursorContainer, this.cursorPos);
                }
                var node = range.createContextualFragment(text);
                var oLastNode = node.lastChild;
                range.insertNode(node);
                if (oLastNode) {
                    range.setEndAfter(oLastNode);
                    range.setStartAfter(oLastNode);
                }
                this.cursorPos = range.startOffset;
                this.cursorContainer = range.startContainer;
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection) {
                sel = document.selection;
                range = sel.createRange();
                range.collapse(true);
                range.setEnd(el, pos);
                range.setStart(el, pos);
                range.pasteHTML(text);
                range.select();
            }
        }
    } ]);
    return Facial;
}(Lego.UI.Baseview);

Lego.components("facial", Facial);

var _templateObject$17 = taggedTemplateLiteral([ '\n        <div class="row lego-grid">\n            ', "\n        </div>" ], [ '\n        <div class="row lego-grid">\n            ', "\n        </div>" ]);

var _templateObject2$15 = taggedTemplateLiteral([ '<div class="lego-item ', '" id="lego-item_', '">\n                ', "\n                </div>" ], [ '<div class="lego-item ', '" id="lego-item_', '">\n                ', "\n                </div>" ]);

var GridView = function(_Lego$UI$Baseview) {
    inherits(GridView, _Lego$UI$Baseview);
    function GridView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, GridView);
        var options = {
            events: {
                "click .lego-item": "onEvent",
                "mouseenter .lego-item": "onEvent",
                "mouseleave .lego-item": "onEvent"
            },
            itemContent: "",
            itemClass: "",
            data: [],
            selectAble: false,
            onSelected: function onSelected() {},
            onOver: function onOver() {},
            onOut: function onOut() {},
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (GridView.__proto__ || Object.getPrototypeOf(GridView)).call(this, options));
    }
    createClass(GridView, [ {
        key: "render",
        value: function render() {
            var opts = this.options, index = 0;
            var vDom = hx(_templateObject$17, opts.data.map(function(item) {
                index++;
                return hx(_templateObject2$15, opts.itemClass, val(item.key), typeof opts.itemContent == "function" ? opts.itemContent(item, index - 1) : opts.itemContent);
            }));
            return vDom;
        }
    }, {
        key: "onEvent",
        value: function onEvent(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, key = target.attr("id").replace("lego-item_", ""), hasOne = opts.data.find(function(item) {
                return item.key == key;
            });
            switch (event.type) {
              case "click":
                if (hasOne) {
                    if (opts.selectAble) {
                        hasOne.selected = !hasOne.selected;
                        if (typeof opts.onSelected == "function") {
                            opts.onSelected(this, hasOne);
                        }
                        this.refresh();
                    }
                }
                if (typeof opts.onClick == "function") {
                    opts.onClick(this, hasOne, event);
                }
                break;

              case "mouseenter":
                if (typeof opts.onOver == "function") {
                    opts.onOver(this, hasOne, event);
                }
                break;

              case "mouseleave":
                if (typeof opts.onOut == "function") {
                    opts.onOut(this, hasOne, event);
                }
                break;
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            return this.options.data.filter(function(item) {
                return item.selected;
            });
        }
    } ]);
    return GridView;
}(Lego.UI.Baseview);

Lego.components("grid", GridView);

var _templateObject$18 = taggedTemplateLiteral([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);

var _templateObject2$16 = taggedTemplateLiteral([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);

var _templateObject3$11 = taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ], [ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ]);

var Listgroup = function(_Lego$UI$Baseview) {
    inherits(Listgroup, _Lego$UI$Baseview);
    function Listgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Listgroup);
        var options = {
            events: {
                "click li.list-group-item": "onClick",
                "click i.lego-close": "onClose"
            },
            activeKey: "",
            template: "",
            removeAble: false,
            data: [],
            onClick: function onClick() {},
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Listgroup.__proto__ || Object.getPrototypeOf(Listgroup)).call(this, options));
    }
    createClass(Listgroup, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$18, options.data.map(function(item, index) {
                if (item.template) {
                    return item.template;
                } else {
                    return hx(_templateObject2$16, item.disabled ? "disabled" : "", options.activeKey == item.key ? "active" : "", val(item.className), val(item.key), options.removeAble ? hx(_templateObject3$11) : "", val(item.value));
                }
            }));
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            this.options.activeKey = this.options.activeKey != key ? key : "";
            this.refresh();
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, key, event);
            }
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.parent().attr("id");
            this.options.data = this.options.data.filter(function(item) {
                return item.key.toString() !== key.toString();
            });
            this.refresh();
            if (typeof this.options.onClose === "function") {
                this.options.onClose(this, key, event);
            }
        }
    } ]);
    return Listgroup;
}(Lego.UI.Baseview);

Lego.components("listgroup", Listgroup);

var Util$2 = function($) {
    var transition = false;
    var MAX_UID = 1e6;
    var TransitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    };
    function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function isElement(obj) {
        return (obj[0] || obj).nodeType;
    }
    function getSpecialTransitionEndEvent() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments);
                }
                return undefined;
            }
        };
    }
    function transitionEndTest() {
        if (window.QUnit) {
            return false;
        }
        var el = document.createElement("bootstrap");
        for (var name in TransitionEndEvent) {
            if (el.style[name] !== undefined) {
                return {
                    end: TransitionEndEvent[name]
                };
            }
        }
        return false;
    }
    function transitionEndEmulator(duration) {
        var _this = this;
        var called = false;
        $(this).one(Util.TRANSITION_END, function() {
            called = true;
        });
        setTimeout(function() {
            if (!called) {
                Util.triggerTransitionEnd(_this);
            }
        }, duration);
        return this;
    }
    function setTransitionEndSupport() {
        transition = transitionEndTest();
        $.fn.emulateTransitionEnd = transitionEndEmulator;
        if (Util.supportsTransitionEnd()) {
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
        }
    }
    var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
            do {
                prefix += ~~(Math.random() * MAX_UID);
            } while (document.getElementById(prefix));
            return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute("data-target");
            if (!selector) {
                selector = element.getAttribute("href") || "";
                selector = /^#[a-z]/i.test(selector) ? selector : null;
            }
            return selector;
        },
        reflow: function reflow(element) {
            new Function("bs", "return bs")(element.offsetHeight);
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
            for (var property in configTypes) {
                if (configTypes.hasOwnProperty(property)) {
                    var expectedTypes = configTypes[property];
                    var value = config[property];
                    var valueType = void 0;
                    if (value && isElement(value)) {
                        valueType = "element";
                    } else {
                        valueType = toType(value);
                    }
                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                    }
                }
            }
        }
    };
    setTransitionEndSupport();
    return Util;
}(jQuery);

var Modal$1 = function($) {
    var NAME = "modal";
    var VERSION = "4.0.0-alpha.5";
    var DATA_KEY = "bs.modal";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27;
    var Default = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    };
    var DefaultType = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        RESIZE: "resize" + EVENT_KEY,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        IN: "in"
    };
    var Selector = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
    };
    var Modal = function() {
        function Modal(element, config) {
            classCallCheck(this, Modal);
            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = $(element).find(Selector.DIALOG)[0];
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._originalBodyPadding = 0;
            this._scrollbarWidth = 0;
        }
        createClass(Modal, [ {
            key: "toggle",
            value: function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
        }, {
            key: "show",
            value: function show(relatedTarget) {
                var _this = this;
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });
                $(this._element).trigger(showEvent);
                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                $(document.body).addClass(ClassName.OPEN);
                this._setEscapeEvent();
                this._setResizeEvent();
                $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));
                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                    $(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
                        if ($(event.target).is(_this._element)) {
                            _this._ignoreBackdropClick = true;
                        }
                    });
                });
                this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
            }
        }, {
            key: "hide",
            value: function hide(event) {
                if (event) {
                    event.preventDefault();
                }
                var hideEvent = $.Event(Event.HIDE);
                $(this._element).trigger(hideEvent);
                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = false;
                this._setEscapeEvent();
                this._setResizeEvent();
                $(document).off(Event.FOCUSIN);
                $(this._element).removeClass(ClassName.IN);
                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                if (Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    $(this._element).one(Util$2.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    this._hideModal();
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(window).off(EVENT_KEY);
                $(document).off(EVENT_KEY);
                $(this._element).off(EVENT_KEY);
                $(this._backdrop).off(EVENT_KEY);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._originalBodyPadding = null;
                this._scrollbarWidth = null;
            }
        }, {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util$2.typeCheckConfig(NAME, config, DefaultType);
                return config;
            }
        }, {
            key: "_showElement",
            value: function _showElement(relatedTarget) {
                var _this2 = this;
                var transition = Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    document.body.appendChild(this._element);
                }
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.scrollTop = 0;
                if (transition) {
                    Util$2.reflow(this._element);
                }
                $(this._element).addClass(ClassName.IN);
                if (this._config.focus) {
                    this._enforceFocus();
                }
                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });
                var transitionComplete = function transitionComplete() {
                    if (_this2._config.focus) {
                        _this2._element.focus();
                    }
                    $(_this2._element).trigger(shownEvent);
                };
                if (transition) {
                    $(this._dialog).one(Util$2.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    transitionComplete();
                }
            }
        }, {
            key: "_enforceFocus",
            value: function _enforceFocus() {
                var _this3 = this;
                $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function(event) {
                    if (document !== event.target && _this3._element !== event.target && !$(_this3._element).has(event.target).length) {
                        _this3._element.focus();
                    }
                });
            }
        }, {
            key: "_setEscapeEvent",
            value: function _setEscapeEvent() {
                var _this4 = this;
                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            _this4.hide();
                        }
                    });
                } else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            }
        }, {
            key: "_setResizeEvent",
            value: function _setResizeEvent() {
                if (this._isShown) {
                    $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
                } else {
                    $(window).off(Event.RESIZE);
                }
            }
        }, {
            key: "_hideModal",
            value: function _hideModal() {
                var _this5 = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", "true");
                this._showBackdrop(function() {
                    $(document.body).removeClass(ClassName.OPEN);
                    _this5._resetAdjustments();
                    _this5._resetScrollbar();
                    $(_this5._element).trigger(Event.HIDDEN);
                });
            }
        }, {
            key: "_removeBackdrop",
            value: function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            }
        }, {
            key: "_showBackdrop",
            value: function _showBackdrop(callback) {
                var _this6 = this;
                var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util$2.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = ClassName.BACKDROP;
                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }
                    $(this._backdrop).appendTo(document.body);
                    $(this._element).on(Event.CLICK_DISMISS, function(event) {
                        if (_this6._ignoreBackdropClick) {
                            _this6._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) {
                            return;
                        }
                        if (_this6._config.backdrop === "static") {
                            _this6._element.focus();
                        } else {
                            _this6.hide();
                        }
                    });
                    if (doAnimate) {
                        Util$2.reflow(this._backdrop);
                    }
                    $(this._backdrop).addClass(ClassName.IN);
                    if (!callback) {
                        return;
                    }
                    if (!doAnimate) {
                        callback();
                        return;
                    }
                    $(this._backdrop).one(Util$2.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.IN);
                    var callbackRemove = function callbackRemove() {
                        _this6._removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };
                    if (Util$2.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        $(this._backdrop).one(Util$2.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else {
                        callbackRemove();
                    }
                } else if (callback) {
                    callback();
                }
            }
        }, {
            key: "_handleUpdate",
            value: function _handleUpdate() {
                this._adjustDialog();
            }
        }, {
            key: "_adjustDialog",
            value: function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + "px";
                }
                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetAdjustments",
            value: function _resetAdjustments() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            }
        }, {
            key: "_checkScrollbar",
            value: function _checkScrollbar() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            }
        }, {
            key: "_setScrollbar",
            value: function _setScrollbar() {
                var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "";
                if (this._isBodyOverflowing) {
                    document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetScrollbar",
            value: function _resetScrollbar() {
                document.body.style.paddingRight = this._originalBodyPadding;
            }
        }, {
            key: "_getScrollbarWidth",
            value: function _getScrollbarWidth() {
                var scrollDiv = document.createElement("div");
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }
        } ], [ {
            key: "_jQueryInterface",
            value: function _jQueryInterface(config, relatedTarget) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === "object" && config);
                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === "string") {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config](relatedTarget);
                    } else if (_config.show) {
                        data.show(relatedTarget);
                    }
                });
            }
        }, {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        } ]);
        return Modal;
    }();
    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        var _this7 = this;
        var target = void 0;
        var selector = Util$2.getSelectorFromElement(this);
        if (selector) {
            target = $(selector)[0];
        }
        var config = $(target).data(DATA_KEY) ? "toggle" : $.extend({}, $(target).data(), $(this).data());
        if (this.tagName === "A") {
            event.preventDefault();
        }
        var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                return;
            }
            $target.one(Event.HIDDEN, function() {
                if ($(_this7).is(":visible")) {
                    _this7.focus();
                }
            });
        });
        Modal._jQueryInterface.call($(target), config, this);
    });
    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Modal._jQueryInterface;
    };
    return Modal;
}(jQuery);

var _templateObject$19 = taggedTemplateLiteral([ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ], [ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ]);

var _templateObject2$17 = taggedTemplateLiteral([ '<div class="modal-header">\n              ', '\n                <h5 class="modal-title">', "</h5>\n              </div>" ], [ '<div class="modal-header">\n              ', '\n                <h5 class="modal-title">', "</h5>\n              </div>" ]);

var _templateObject3$12 = taggedTemplateLiteral([ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ], [ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ]);

var _templateObject4$6 = taggedTemplateLiteral([ '<div class="modal-footer">\n              ', "\n              </div>" ], [ '<div class="modal-footer">\n              ', "\n              </div>" ]);

var _templateObject5$5 = taggedTemplateLiteral([ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ], [ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ]);

var Modal = function(_Lego$UI$Baseview) {
    inherits(Modal, _Lego$UI$Baseview);
    function Modal() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Modal);
        var typeArr = {
            success: "anticon anticon-check-circle-o",
            info: "anticon anticon-info-circle-o",
            warning: "anticon anticon-exclamation-circle-o",
            error: "anticon anticon-cross-circle-o",
            alert: "anticon anticon-question-circle-o"
        };
        var options = {
            events: {
                "click .modal-footer button.ok": "clickOk",
                "click .modal-footer button.cancel": "clickCancel",
                "click .close": "clickCancel",
                "click .modal-dialog": function clickModalDialog(event) {
                    event.stopPropagation();
                },
                click: "clickBackdrop"
            },
            msgType: "",
            title: "提示",
            size: "",
            type: "modal",
            animateIn: Lego.config.animateAble ? "fadeIn" : "",
            animateOut: Lego.config.animateAble ? "fadeOut" : "",
            width: "",
            isMiddle: false,
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: "",
            footer: "",
            confirm: null,
            scrollbar: {},
            scrollAble: true,
            okText: "确定",
            cancelText: "取消",
            onClose: function onClose() {},
            onShow: function onShow() {}
        };
        Object.assign(options, opts);
        if (options.msgType) {
            options.type = "dialog";
        }
        if (typeArr[options.msgType] && typeof options.content == "string") {
            var alertObj = Lego.create(Alert, {
                type: options.msgType,
                closable: false,
                message: options.content,
                description: true
            });
            options.content = alertObj.render();
        }
        if (!options.el) {
            var modalId = "lego-" + options.type + "-" + options.vid;
            $("body").append("<" + options.type + ' id="' + modalId + '"></' + options.type + ">");
            options.el = "#" + modalId;
        }
        if (options.type == "layer" && Lego.config.animateAble) {
            options.animateIn = "slideInRight";
            options.animateOut = "slideOutRight";
        }
        return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, options));
    }
    createClass(Modal, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$19, opts.type == "layer" ? "right-modal" : "", opts.msgType ? "dialog-modal" : "", opts.size ? "modal-size-" + opts.size : "", opts.isMiddle ? "middle" : "", opts.el.replace(/#/, ""), opts.showHeader ? hx(_templateObject2$17, opts.closable ? hx(_templateObject3$12) : "", opts.title) : "", !opts.msgType && opts.scrollAble ? "scrollbar" : "", !opts.showHeader && opts.type == "layer" ? "top:0;" : "", !opts.showFooter && opts.type == "layer" ? "bottom:0;" : "", val(opts.content), opts.showFooter ? hx(_templateObject4$6, opts.footer ? val(opts.footer) : hx(_templateObject5$5, opts.cancelText, opts.okText)) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options;
            this.$el.modal({
                backdrop: opts.type !== "layer" ? opts.backdrop : false,
                keyboard: opts.keyboard,
                show: true
            });
            this.$el.on("hidden.bs.modal", function(e) {
                that.remove();
                if (typeof opts.onClose === "function") {
                    opts.onClose(that);
                }
            });
            this.$el.on("show.bs.modal", function(e) {
                if (typeof opts.onShow === "function") {
                    opts.onShow(that);
                }
            });
            this.bindKeyup();
            if (opts.width) {
                this.$(".modal-dialog").width(opts.width);
            }
            if (opts.height) {
                this.$(".modal-body").height(opts.height);
            }
            if (!opts.showFooter && opts.type !== "dialog") {
                this.$(".modal-body").css({
                    padding: 15
                });
            }
            if (opts.animateIn) {
                Lego.UI.Util.animateCss(this.$el, opts.animateIn);
            }
        }
    }, {
        key: "close",
        value: function close() {
            var that = this, opts = this.options, ieV = Lego.UI.Util.checkBrowser().ieversion;
            if (opts.animateOut) {
                Lego.UI.Util.animateCss(that.$el, opts.animateOut, function() {
                    that.$el.modal("hide");
                });
            } else {
                if (ieV <= 9 && ieV > 0) {
                    this.unbindKeyup();
                    this.remove();
                    if (typeof opts.onClose === "function") {
                        opts.onClose(that);
                    }
                } else {
                    this.$el.modal("hide");
                }
            }
            if (opts.backdrop) {
                $(".modal-backdrop").fadeOut();
            }
        }
    }, {
        key: "clickBackdrop",
        value: function clickBackdrop(event) {
            event.stopPropagation();
            this._onConfirm("onCancel", true);
        }
    }, {
        key: "_showDialog",
        value: function _showDialog() {
            var that = this;
            var dialogView = Lego.create(Modal, {
                msgType: this.options.confirm.msgType || "warning",
                content: this.options.confirm.content || "",
                backdrop: this.options.confirm.backdrop,
                onOk: function onOk(self) {
                    that.close();
                    self.close();
                }
            });
        }
    }, {
        key: "_onConfirm",
        value: function _onConfirm(funName, isBackdrop) {
            if (this.options.confirm && this.options[funName]) {
                this._showDialog();
            } else {
                if (isBackdrop) {
                    var closeAble = true;
                    if (this.options.backdrop == "static") {
                        closeAble = false;
                    }
                    if (funName !== "onOk" && closeAble) {
                        this.unbindKeyup();
                        this.close();
                    }
                } else {
                    if (funName !== "onOk") {
                        this.unbindKeyup();
                        this.close();
                    }
                }
            }
            if (typeof this.options[funName] === "function") {
                this.options[funName](this);
            }
        }
    }, {
        key: "documentKeyEvent",
        value: function documentKeyEvent(eventName, callback) {
            $(document).off(eventName).on(eventName, function(event) {
                switch (event.keyCode) {
                  case 27:
                    callback("onCancel");
                    debug.log("on click ESC key");
                    break;

                  case 13:
                    callback("onOk");
                    debug.log("on click Enter key");
                    break;
                }
            });
        }
    }, {
        key: "unbindKeyup",
        value: function unbindKeyup() {
            $(document).off("keyup." + this.options.vid);
            var prevModal = this.$el.prev();
            if (prevModal.length && prevModal.hasClass("modal")) {
                var eventName = "keyup." + prevModal.attr("view-id"), modalView = Lego.getView("#" + prevModal.attr("id"));
                if (modalView) {
                    modalView.$el.focus();
                    this.documentKeyEvent(eventName, modalView._onConfirm.bind(modalView));
                }
            }
        }
    }, {
        key: "bindKeyup",
        value: function bindKeyup() {
            this.$el.focus();
            var eventName = "keyup." + this.options.vid, callback = this._onConfirm.bind(this), prevModal = this.$el.prev();
            if (prevModal.length && prevModal.hasClass("modal")) {
                $(document).off("keyup." + prevModal.attr("view-id"));
            }
            this.documentKeyEvent(eventName, callback);
        }
    }, {
        key: "clickOk",
        value: function clickOk(event) {
            event.stopPropagation();
            this._onConfirm("onOk");
        }
    }, {
        key: "clickCancel",
        value: function clickCancel(event) {
            event.stopPropagation();
            this._onConfirm("onCancel");
        }
    } ]);
    return Modal;
}(Lego.UI.Baseview);

var theModal = function theModal() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var vid = arguments[1];
    if (typeof opts == "string") {
        var type = opts.indexOf(".") > 0 ? opts.split(".")[1] : "layer";
        var view = Lego.getView("#lego-" + type + "-" + vid);
        if (view) {
            view.close();
        }
    } else {
        var modalView = Lego.create(Modal, opts);
    }
};

Lego.components("modal", theModal);

function Message() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    toastr.options = {
        containerId: "toast-container",
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center toast-top50",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "3000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    Object.assign(toastr.options, opts);
    var typeArr = [ "success", "info", "warning", "error" ];
    if (typeArr.indexOf(type) >= 0 || content) {
        if (this.toastr) {
            this.toastr.remove();
        }
        this.toastr = toastr[type](content);
    }
}

Lego.components("message", Message);

var _templateObject$20 = taggedTemplateLiteral([ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2$18 = taggedTemplateLiteral([ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

var Navs = function(_Lego$UI$Baseview) {
    inherits(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Navs);
        var options = {
            events: {
                "mouseover .nav-item.dropdown": "overItem",
                "click .dropdown > a": "clickNav",
                "click .dropdown-menu a:not(.disabled)": "clickSubItem",
                "click .nav-item:not(.dropdown) > a": "clickItem"
            },
            eventName: "click",
            type: "base",
            activeKey: "",
            activeValue: "",
            direction: "",
            closeAllAble: true,
            accordion: true,
            onClick: function onClick() {},
            data: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
    }
    createClass(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function makeItem(item, i) {
                var itemDom = hx(_templateObject$20, item.children ? "dropdown" : "", item.open ? "open" : "", item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.children ? "dropdown-toggle" : "", item.href ? item.href : "javascript:;", item.key ? item.key : "nav-item-" + i, val(item.value), Array.isArray(item.children) ? Lego.create(Dropdown, {
                    direction: options.direction,
                    open: item.open,
                    data: item.children
                }).render() : "");
                return itemDom;
            }
            var vDom = hx(_templateObject2$18, options.type === "inline" ? "nav-inline" : options.type === "tabs" ? "nav-tabs" : options.type === "pills" ? "nav-pills" : "", options.type === "pills-stacked" ? "nav-pills nav-stacked" : "", options.data.map(function(item, i) {
                return makeItem(item, i);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this;
            if (this.options.closeAllAble) {
                $("body").click(function() {
                    that.closeAll();
                });
            }
        }
    }, {
        key: "showAll",
        value: function showAll() {
            this.$(".dropdown-menu").slideDown("fast");
        }
    }, {
        key: "closeAll",
        value: function closeAll() {
            this.$(".dropdown-menu").slideUp("fast", function() {
                $(this).parent().removeClass("open");
            });
        }
    }, {
        key: "overItem",
        value: function overItem(event, target) {
            var targetEl = $(event.currentTarget), key = targetEl.children("a").attr("id");
            this.activeKey = key;
        }
    }, {
        key: "closeDropdown",
        value: function closeDropdown(el) {
            el.slideUp("fast", function() {
                if ($(this).css("display") == "none") {
                    $(this).parent().removeClass("open");
                } else {
                    $(this).parent().addClass("open");
                }
            });
        }
    }, {
        key: "clickNav",
        value: function clickNav(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget);
            var dropdownEl = targetEl.next(".dropdown-menu");
            Lego.UI.Util.getDirection(targetEl, dropdownEl);
            if (this.options.accordion) {
                this.closeDropdown(this.$(".nav-item.open .dropdown-menu"));
            }
            if (!targetEl.parent().hasClass("open")) {
                dropdownEl.slideToggle("fast", function() {
                    if ($(this).css("display") == "none") {
                        $(this).parent().removeClass("open");
                    } else {
                        $(this).parent().addClass("open");
                    }
                });
                this.clickItem(event);
                this.$(".dropdown-menu a").removeClass("active");
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget), key = targetEl.attr("id");
            if (!targetEl.hasClass("disabled")) {
                if (this.options.accordion) {
                    this.closeDropdown(this.$(".nav-item.open .dropdown-menu"));
                }
                this.options.activeKey = key;
                var model = this.options.data.find(function(item) {
                    return item.key === key;
                });
                if (typeof this.options.onClick === "function") {
                    this.options.onClick(this, model || {}, event);
                }
            }
        }
    }, {
        key: "clickSubItem",
        value: function clickSubItem(event, target) {
            var _this2 = this;
            event.stopPropagation();
            this.options.activeKey = this.activeKey || this.options.activeKey;
            var targetEl = $(event.currentTarget), key = targetEl.attr("id"), model = this.options.data.find(function(item) {
                return item.key === _this2.options.activeKey;
            });
            var subModel = {};
            if (model) {
                if (model.children) {
                    (function() {
                        var findModel = function findModel(data) {
                            var result = data.find(function(item) {
                                return item.key === key;
                            });
                            if (!result) {
                                data.forEach(function(item) {
                                    if (item.children) {
                                        result = findModel(item.children);
                                    }
                                });
                            }
                            return result || {};
                        };
                        subModel = findModel(model.children);
                    })();
                }
            }
            this.$(".dropdown-menu a").removeClass("active");
            this.$("#" + key).addClass("active");
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, subModel, event);
            }
        }
    } ]);
    return Navs;
}(Lego.UI.Baseview);

Lego.components("navs", Navs);

function Notification() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center toast-top50",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "3000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    var typeArr = [ "success", "info", "warning", "error" ];
    if (typeArr.indexOf(type) >= 0 || content) {
        toastr[type](content);
    }
}

Lego.components("notification", Notification);

var _templateObject$21 = taggedTemplateLiteral([ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$19 = taggedTemplateLiteral([ '<div class="lego-tip-text" style="', '">', "</div>" ], [ '<div class="lego-tip-text" style="', '">', "</div>" ]);

var Nodata = function(_Lego$View) {
    inherits(Nodata, _Lego$View);
    function Nodata() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Nodata);
        var options = {
            size: "",
            tip: "暂无数据",
            icon: ""
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Nodata.__proto__ || Object.getPrototypeOf(Nodata)).call(this, options));
    }
    createClass(Nodata, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject$21, val(opts.icon), opts.size ? "lego-icon-" + opts.size : "", opts.tip ? hx(_templateObject2$19, opts.icon ? "margin-top:40px;" : "", opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Nodata;
}(Lego.View);

Lego.components("nodata", Nodata);

window.Tether = Tether;

var Tooltip = function($) {
    if (window.Tether === undefined) {
        throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
    }
    var NAME = "tooltip";
    var VERSION = "4.0.0-alpha.5";
    var DATA_KEY = "bs.tooltip";
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX = "bs-tether";
    var Default = {
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
    var DefaultType = {
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
    var AttachmentMap = {
        TOP: "bottom center",
        RIGHT: "middle left",
        BOTTOM: "top center",
        LEFT: "middle right"
    };
    var HoverState = {
        IN: "in",
        OUT: "out"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        INSERTED: "inserted" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        FOCUSOUT: "focusout" + EVENT_KEY,
        MOUSEENTER: "mouseenter" + EVENT_KEY,
        MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
        FADE: "fade",
        IN: "in"
    };
    var Selector = {
        TOOLTIP: ".tooltip",
        TOOLTIP_INNER: ".tooltip-inner"
    };
    var TetherClass = {
        element: false,
        enabled: false
    };
    var Trigger = {
        HOVER: "hover",
        FOCUS: "focus",
        CLICK: "click",
        MANUAL: "manual"
    };
    var Tooltip = function() {
        function Tooltip(element, config) {
            classCallCheck(this, Tooltip);
            this._isEnabled = true;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._tether = null;
            this.element = element;
            this.config = this._getConfig(config);
            this.tip = null;
            this._setListeners();
        }
        createClass(Tooltip, [ {
            key: "enable",
            value: function enable() {
                this._isEnabled = true;
            }
        }, {
            key: "disable",
            value: function disable() {
                this._isEnabled = false;
            }
        }, {
            key: "toggleEnabled",
            value: function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
        }, {
            key: "toggle",
            value: function toggle(event) {
                if (event) {
                    var dataKey = this.constructor.DATA_KEY;
                    var context = $(event.currentTarget).data(dataKey);
                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $(event.currentTarget).data(dataKey, context);
                    }
                    context._activeTrigger.click = !context._activeTrigger.click;
                    if (context._isWithActiveTrigger()) {
                        context._enter(null, context);
                    } else {
                        context._leave(null, context);
                    }
                } else {
                    if ($(this.getTipElement()).hasClass(ClassName.IN)) {
                        this._leave(null, this);
                        return;
                    }
                    this._enter(null, this);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                clearTimeout(this._timeout);
                this.cleanupTether();
                $.removeData(this.element, this.constructor.DATA_KEY);
                $(this.element).off(this.constructor.EVENT_KEY);
                if (this.tip) {
                    $(this.tip).remove();
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
            value: function show() {
                var _this = this;
                var showEvent = $.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    $(this.element).trigger(showEvent);
                    var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);
                    if (showEvent.isDefaultPrevented() || !isInTheDom) {
                        return;
                    }
                    var tip = this.getTipElement();
                    var tipId = Util$2.getUID(this.constructor.NAME);
                    tip.setAttribute("id", tipId);
                    this.element.setAttribute("aria-describedby", tipId);
                    this.setContent();
                    if (this.config.animation) {
                        $(tip).addClass(ClassName.FADE);
                    }
                    var placement = typeof this.config.placement === "function" ? this.config.placement.call(this, tip, this.element) : this.config.placement;
                    var attachment = this._getAttachment(placement);
                    $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                    $(this.element).trigger(this.constructor.Event.INSERTED);
                    this._tether = new Tether({
                        attachment: attachment,
                        element: tip,
                        target: this.element,
                        classes: TetherClass,
                        classPrefix: CLASS_PREFIX,
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: false
                    });
                    Util$2.reflow(tip);
                    this._tether.position();
                    $(tip).addClass(ClassName.IN);
                    var complete = function complete() {
                        var prevHoverState = _this._hoverState;
                        _this._hoverState = null;
                        $(_this.element).trigger(_this.constructor.Event.SHOWN);
                        if (prevHoverState === HoverState.OUT) {
                            _this._leave(null, _this);
                        }
                    };
                    if (Util$2.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                        $(this.tip).one(Util$2.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
                        return;
                    }
                    complete();
                }
            }
        }, {
            key: "hide",
            value: function hide(callback) {
                var _this2 = this;
                var tip = this.getTipElement();
                var hideEvent = $.Event(this.constructor.Event.HIDE);
                var complete = function complete() {
                    if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
                        tip.parentNode.removeChild(tip);
                    }
                    _this2.element.removeAttribute("aria-describedby");
                    $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
                    _this2.cleanupTether();
                    if (callback) {
                        callback();
                    }
                };
                $(this.element).trigger(hideEvent);
                if (hideEvent.isDefaultPrevented()) {
                    return;
                }
                $(tip).removeClass(ClassName.IN);
                if (Util$2.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                    $(tip).one(Util$2.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    complete();
                }
                this._hoverState = "";
            }
        }, {
            key: "isWithContent",
            value: function isWithContent() {
                return Boolean(this.getTitle());
            }
        }, {
            key: "getTipElement",
            value: function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            }
        }, {
            key: "setContent",
            value: function setContent() {
                var $tip = $(this.getTipElement());
                this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
                $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);
                this.cleanupTether();
            }
        }, {
            key: "setElementContent",
            value: function setElementContent($element, content) {
                var html = this.config.html;
                if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && (content.nodeType || content.jquery)) {
                    if (html) {
                        if (!$(content).parent().is($element)) {
                            $element.empty().append(content);
                        }
                    } else {
                        $element.text($(content).text());
                    }
                } else {
                    $element[html ? "html" : "text"](content);
                }
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                var title = this.element.getAttribute("data-original-title");
                if (!title) {
                    title = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                }
                return title;
            }
        }, {
            key: "cleanupTether",
            value: function cleanupTether() {
                if (this._tether) {
                    this._tether.destroy();
                }
            }
        }, {
            key: "_getAttachment",
            value: function _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()];
            }
        }, {
            key: "_setListeners",
            value: function _setListeners() {
                var _this3 = this;
                var triggers = this.config.trigger.split(" ");
                triggers.forEach(function(trigger) {
                    if (trigger === "click") {
                        $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
                    } else if (trigger !== Trigger.MANUAL) {
                        var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
                        var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
                        $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
                    }
                });
                if (this.config.selector) {
                    this.config = $.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    });
                } else {
                    this._fixTitle();
                }
            }
        }, {
            key: "_fixTitle",
            value: function _fixTitle() {
                var titleType = _typeof(this.element.getAttribute("data-original-title"));
                if (this.element.getAttribute("title") || titleType !== "string") {
                    this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                    this.element.setAttribute("title", "");
                }
            }
        }, {
            key: "_enter",
            value: function _enter(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }
                if (event) {
                    context._activeTrigger[event.type === "focusin" ? Trigger.FOCUS : Trigger.HOVER] = true;
                }
                if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
                    context._hoverState = HoverState.IN;
                    return;
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.IN;
                if (!context.config.delay || !context.config.delay.show) {
                    context.show();
                    return;
                }
                context._timeout = setTimeout(function() {
                    if (context._hoverState === HoverState.IN) {
                        context.show();
                    }
                }, context.config.delay.show);
            }
        }, {
            key: "_leave",
            value: function _leave(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }
                if (event) {
                    context._activeTrigger[event.type === "focusout" ? Trigger.FOCUS : Trigger.HOVER] = false;
                }
                if (context._isWithActiveTrigger()) {
                    return;
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.OUT;
                if (!context.config.delay || !context.config.delay.hide) {
                    context.hide();
                    return;
                }
                context._timeout = setTimeout(function() {
                    if (context._hoverState === HoverState.OUT) {
                        context.hide();
                    }
                }, context.config.delay.hide);
            }
        }, {
            key: "_isWithActiveTrigger",
            value: function _isWithActiveTrigger() {
                var this$1 = this;
                for (var trigger in this._activeTrigger) {
                    if (this$1._activeTrigger[trigger]) {
                        return true;
                    }
                }
                return false;
            }
        }, {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = $.extend({}, this.constructor.Default, $(this.element).data(), config);
                if (config.delay && typeof config.delay === "number") {
                    config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                }
                Util$2.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config;
            }
        }, {
            key: "_getDelegateConfig",
            value: function _getDelegateConfig() {
                var this$1 = this;
                var config = {};
                if (this.config) {
                    for (var key in this.config) {
                        if (this$1.constructor.Default[key] !== this$1.config[key]) {
                            config[key] = this$1.config[key];
                        }
                    }
                }
                return config;
            }
        } ], [ {
            key: "_jQueryInterface",
            value: function _jQueryInterface(config) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === "undefined" ? "undefined" : _typeof(config)) === "object" ? config : null;
                    if (!data && /dispose|hide/.test(config)) {
                        return;
                    }
                    if (!data) {
                        data = new Tooltip(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === "string") {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            }
        }, {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        }, {
            key: "NAME",
            get: function get() {
                return NAME;
            }
        }, {
            key: "DATA_KEY",
            get: function get() {
                return DATA_KEY;
            }
        }, {
            key: "Event",
            get: function get() {
                return Event;
            }
        }, {
            key: "EVENT_KEY",
            get: function get() {
                return EVENT_KEY;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType;
            }
        } ]);
        return Tooltip;
    }();
    $.fn[NAME] = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Tooltip._jQueryInterface;
    };
    return Tooltip;
}(jQuery);

var Popover$1 = function($) {
    var NAME = "popover";
    var VERSION = "4.0.0-alpha.5";
    var DATA_KEY = "bs.popover";
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = $.extend({}, Tooltip.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
    });
    var DefaultType = $.extend({}, Tooltip.DefaultType, {
        content: "(string|element|function)"
    });
    var ClassName = {
        FADE: "fade",
        IN: "in"
    };
    var Selector = {
        TITLE: ".popover-title",
        CONTENT: ".popover-content"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        INSERTED: "inserted" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        FOCUSOUT: "focusout" + EVENT_KEY,
        MOUSEENTER: "mouseenter" + EVENT_KEY,
        MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var Popover = function(_Tooltip) {
        inherits(Popover, _Tooltip);
        function Popover() {
            classCallCheck(this, Popover);
            return possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
        }
        createClass(Popover, [ {
            key: "isWithContent",
            value: function isWithContent() {
                return this.getTitle() || this._getContent();
            }
        }, {
            key: "getTipElement",
            value: function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            }
        }, {
            key: "setContent",
            value: function setContent() {
                var $tip = $(this.getTipElement());
                this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
                this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
                $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);
                this.cleanupTether();
            }
        }, {
            key: "_getContent",
            value: function _getContent() {
                return this.element.getAttribute("data-content") || (typeof this.config.content === "function" ? this.config.content.call(this.element) : this.config.content);
            }
        } ], [ {
            key: "_jQueryInterface",
            value: function _jQueryInterface(config) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === "undefined" ? "undefined" : _typeof(config)) === "object" ? config : null;
                    if (!data && /destroy|hide/.test(config)) {
                        return;
                    }
                    if (!data) {
                        data = new Popover(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === "string") {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            }
        }, {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        }, {
            key: "Default",
            get: function get() {
                return Default;
            }
        }, {
            key: "NAME",
            get: function get() {
                return NAME;
            }
        }, {
            key: "DATA_KEY",
            get: function get() {
                return DATA_KEY;
            }
        }, {
            key: "Event",
            get: function get() {
                return Event;
            }
        }, {
            key: "EVENT_KEY",
            get: function get() {
                return EVENT_KEY;
            }
        }, {
            key: "DefaultType",
            get: function get() {
                return DefaultType;
            }
        } ]);
        return Popover;
    }(Tooltip);
    $.fn[NAME] = Popover._jQueryInterface;
    $.fn[NAME].Constructor = Popover;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Popover._jQueryInterface;
    };
    return Popover;
}(jQuery);

var Popover = function Popover() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = {
        el: "",
        selector: false,
        title: "",
        content: "",
        animation: true,
        container: false,
        delay: 0,
        html: false,
        showNow: false,
        placement: "bottom",
        template: '<div class="popover"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        eventName: "click",
        constraints: [],
        offset: "0 0",
        onClose: function onClose() {}
    };
    Object.assign(options, opts);
    var el = options.el instanceof $ ? options.el : $(options.el), _eventName = "click.popover", isOpen = !!el.attr("data-isopen"), bodyEl = $("body, .modal-body");
    if (el.length) {
        if (options.showNow) {
            el.popover("dispose");
        }
        el.popover({
            selector: options.selector,
            title: options.title,
            content: options.content,
            animation: options.animation,
            container: options.container,
            delay: options.delay,
            html: !!options.html,
            placement: options.placement,
            template: options.template,
            constraints: options.constraints,
            trigger: options.eventName,
            offset: options.offset
        });
        el.on("hidden.bs.popover", function() {
            el.attr("data-isopen", "");
            if (typeof options.onClose === "function") {
                options.onClose(event);
            }
        });
        if (options.showNow) {
            bodyEl.trigger("click", el);
            bodyEl.off(_eventName).on(_eventName, function(event, data) {
                if (data !== el[0]) {
                    el.popover("hide");
                    el.attr("data-isopen", "");
                }
            });
            el.on("shown.bs.popover", function() {
                $(".popover").off("click").on("click", function(event) {
                    event.stopPropagation();
                });
            });
            if (!isOpen) {
                el.popover("show");
                el.attr("data-isopen", "true");
            } else {
                el.attr("data-isopen", "");
            }
        }
    }
    return el;
};

var fun$2 = function fun$2(opts) {
    return Popover(opts);
};

Lego.components("popover", fun$2);

var _templateObject$22 = taggedTemplateLiteral([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);

var _templateObject2$20 = taggedTemplateLiteral([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);

var Progressbar = function(_Lego$UI$Baseview) {
    inherits(Progressbar, _Lego$UI$Baseview);
    function Progressbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Progressbar);
        var options = {
            status: "",
            showInfo: true,
            percent: 0,
            strokeWidth: 6,
            onComplete: function onComplete() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, options));
    }
    createClass(Progressbar, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            if (options.percent == 100) {
                if (typeof options.onComplete == "function") {
                    options.onComplete(this);
                }
            }
            var vDom = hx(_templateObject$22, options.showInfo ? hx(_templateObject2$20, this.format(options.percent)) : "", options.status ? options.status : "primary", options.percent);
            return vDom;
        }
    }, {
        key: "format",
        value: function format(percent) {
            if (typeof this.options.format == "function") {
                return this.options.format(percent);
            } else {
                return percent + "%";
            }
        }
    } ]);
    return Progressbar;
}(Lego.UI.Baseview);

Lego.components("progressbar", Progressbar);

var _templateObject$23 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2$21 = taggedTemplateLiteral([ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject3$13 = taggedTemplateLiteral([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject4$7 = taggedTemplateLiteral([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject5$6 = taggedTemplateLiteral([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ]);

var _templateObject6$3 = taggedTemplateLiteral([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject7$2 = taggedTemplateLiteral([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ]);

var _templateObject8$2 = taggedTemplateLiteral([ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ], [ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ]);

var _templateObject9$1 = taggedTemplateLiteral([ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject10 = taggedTemplateLiteral([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject11 = taggedTemplateLiteral([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

var Pagination = function(_Lego$UI$Baseview) {
    inherits(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Pagination);
        var options = {
            events: {
                "click .prev:not(.disabled)": "clickPrevPage",
                "click .page-item:not(.active)": "clickItemPage",
                "click .next:not(.disabled)": "clickNextPage",
                "click .morepage": "clickMorePage",
                "click .lego-refresh": "clickRefresh",
                'keydown .info>input[type="text"]': "_enterSearch"
            },
            current: 1,
            totalCount: 0,
            totalPages: 0,
            pageSize: 10,
            pageRang: 10,
            onChange: function onChange() {},
            showSizeChanger: true,
            pageSizeOptions: [ 10, 20, 30, 40, 50 ],
            onPageSizeChange: function onPageSizeChange() {},
            showQuickJumper: true,
            showRefresh: true,
            size: "",
            simple: null,
            isShowTotal: true
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    createClass(Pagination, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!opts.simple && opts.showSizeChanger) {
                var theData = opts.pageSizeOptions.map(function(val) {
                    return {
                        key: val,
                        value: val + " / 页"
                    };
                });
                this.addCom({
                    el: "#dropdown-" + opts.vid,
                    container: "#select-" + opts.vid,
                    direction: "top_left",
                    data: theData,
                    onChange: function onChange(self, result) {
                        var num = parseInt(result.key);
                        opts.current = 1;
                        opts.pageSize = num;
                        that.syncOpts();
                        opts.onPageSizeChange(that, num);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = hx(_templateObject$23), current = parseInt(opts.current), pageRang = parseInt(opts.pageRang), totalCount = val(opts.totalCount);
            opts.totalPages = Math.ceil(totalCount / opts.pageSize);
            pageRang = pageRang >= opts.totalPages ? opts.totalPages : pageRang;
            var baseTimes = pageRang ? Math.floor((current - 1) / pageRang) : 0, startPage = baseTimes * pageRang + 1, endPage = startPage + pageRang - 1, showEllipsis = Math.ceil(current / pageRang) !== Math.ceil(opts.totalPages / pageRang) && totalCount ? true : false, pagesArr = [];
            endPage = endPage >= opts.totalPages ? opts.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            vDom = hx(_templateObject2$21, opts.simple ? "pagination-simple" : "", opts.size == "small" ? "mini" : "", current <= 1 ? "disabled" : "", opts.simple ? hx(_templateObject3$13, current, opts.endPage, current) : "", !opts.simple ? pagesArr.map(function(x) {
                return hx(_templateObject4$7, x, x == current ? "active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject5$6, opts.pageSize) : "", !opts.simple && showEllipsis ? hx(_templateObject6$3, opts.totalPages, opts.totalPages) : "", !opts.simple ? hx(_templateObject7$2, current >= opts.totalPages ? "disabled" : "") : "", !opts.simple && opts.showRefresh ? hx(_templateObject8$2) : "", !opts.simple && opts.showSizeChanger ? hx(_templateObject9$1, opts.vid, opts.pageSize, opts.vid) : "", !opts.simple && opts.showQuickJumper ? hx(_templateObject10, this.jumped ? current : "1", opts.isShowTotal ? hx(_templateObject11, typeof opts.showTotal === "function" ? opts.showTotal(totalCount) : "总数 " + totalCount) : "") : "");
            this.jumped = false;
            return vDom;
        }
    }, {
        key: "syncOpts",
        value: function syncOpts() {
            Object.assign(this.options.context.options.pagination, this.options);
        }
    }, {
        key: "clickPrevPage",
        value: function clickPrevPage(event) {
            event.stopPropagation();
            var opts = this.options;
            opts.current--;
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickItemPage",
        value: function clickItemPage(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), num = target.attr("title");
            var opts = this.options;
            opts.current = num;
            this.syncOpts();
            opts.onChange(this, num, opts.pageSize);
        }
    }, {
        key: "clickNextPage",
        value: function clickNextPage(event) {
            event.stopPropagation();
            var opts = this.options;
            opts.current++;
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickMorePage",
        value: function clickMorePage(event) {
            event.stopPropagation();
            var opts = this.options;
            var current = parseInt(opts.current), pageRang = parseInt(opts.pageRang), currentMod = current % pageRang ? current % pageRang : pageRang;
            opts.current = current + (pageRang - currentMod + 1);
            if (opts.current > opts.totalPages) {
                opts.current = opts.totalPages;
            }
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickRefresh",
        value: function clickRefresh(event) {
            event.stopPropagation();
            this.options.context.fetch();
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget);
            var opts = this.options;
            var num = target.val();
            if (event.keyCode == 13) {
                if (num > opts.totalPages) {
                    num = opts.totalPages;
                }
                if (!Number(num)) {
                    num = 1;
                }
                this.jumped = true;
                opts.current = num;
                this.syncOpts();
                opts.onChange(this, num, opts.pageSize);
            }
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

Lego.components("pagination", Pagination);

window.svgSprite = "<svg>" + "" + '<symbol id="icon-gif" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#48D9A1" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7FE4BD" ></path>' + "" + '<path d="M660.9 511.7l-156.4-226-139.1 226h295.5zM539.2 563.9h191.2v191.2H539.2V563.9zM374.1 563.9c52.8 0 95.6 42.8 95.6 95.6s-42.8 95.6-95.6 95.6-95.6-42.8-95.6-95.6 42.8-95.6 95.6-95.6z" fill="#C8F4E3" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-doc" viewBox="0 0 1024 1024">' + "" + '<path d="M259 383h500v40H259zM259 503h500v40H259zM259 622h500v40H259zM259 741h500v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M897.8 268.7L893 264H735.4c-20.1 0-36.4-16.2-36.4-36.1V70.2l-4.2-4.2H151.5c-18 0-32.5 14.8-32.5 33.1v827.8c0 18.3 14.5 33.1 32.5 33.1h715c17.9 0 32.5-14.8 32.5-33.1M259 264h400v40H259v-40z m500 517H259v-40h500v40z m0-119H259v-40h500v40z m0-119H259v-40h500v40z m0-120H259v-40h500v40z" fill="#40C4FF" ></path>' + "" + '<path d="M899 264z" fill="#27C78B" ></path>' + "" + '<path d="M259 264h400v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M699 231.9c0 20.5 16.7 37.1 37.3 37.1H898L699 70.2v161.7z" fill="#7AD6FF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-jpg" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M248.8 736.6V336.1h527.9v400.5H248.8z m473.3-236.7V390.7H303.4v291.2l109.2-163.8L540 663.8l91-72.8 91 91V499.9z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-zip" viewBox="0 0 1024 1024">' + "" + '<path d="M686 64.3H471.1c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2H147.2c-18.3 0-33.2 14.8-33.2 33.2v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V280.2L686 64.3zM454.8 180.4H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m7.5 331.6l-82.9 99.5h82.9v33.2H329.6v-33.2l82.9-99.5h-82.9v-33.2h132.6V711z m82.9 132.6H512V727.5h33.2v116.1z m0-132.6H512v-33.2h33.2V711z m-8.3-132.7h-16.6c-4.8 0-13.3-0.4-22.4-1.4-11.6 1-22.1 1.4-26.8 1.4h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2h16.2c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9 4.7 0 15.2 2.4 26.8 6.1 9.1-3.7 17.6-6.1 22.4-6.1h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.4h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-116.1h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m124.3 679.8c-12.1 0-23.4-3.5-33.2-9.2v42.4h-33.2v-99.5c0-7-0.2-13.7 0-20.1V711H628v3.1c8.6-2 19.5-3.1 33.2-3.1 36.6 0 66.3 29.7 66.3 66.3 0 36.6-29.6 66.3-66.3 66.3z" fill="#62D35F" ></path>' + "" + '<path d="M329.6 711h82.9l-82.9 99.4v33.2h132.7v-33.2h-82.9l82.9-99.4v-33.2H329.6zM512 677.8h33.2V711H512zM512 727.5h33.2v116.1H512zM661.2 711c-13.7 0-24.5 1.1-33.2 3.1V711h-33.2v46.3c-0.2 6.3 0 13.1 0 20.1v99.5H628v-42.4c9.8 5.7 21 9.2 33.2 9.2 36.6 0 66.3-29.7 66.3-66.3 0-36.7-29.6-66.4-66.3-66.4z m0 99.4c-18.3 0-33.2-14.8-33.2-33.2 0-18.3 14.8-33.2 33.2-33.2 18.3 0 33.2 14.8 33.2 33.2 0 18.4-14.9 33.2-33.2 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M661.2 777.3m-33.2 0a33.2 33.2 0 1 0 66.4 0 33.2 33.2 0 1 0-66.4 0Z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M497.9 576.9c9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6 0 9-25.7 13.3-47.3 15.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1 21.6 6.8 47.3 18.2 47.3 27.1 0-13.8 5.4-33.2-8.3-33.2zM446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#62D35F" ></path>' + "" + '<path d="M446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M462.3 561.7c0-8.9 18.7-20.3 35.6-27.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4-16.9-1.9-35.6-6.2-35.6-15.2z" fill="#62D35F" ></path>' + "" + '<path d="M497.9 534.7c-16.9 6.8-35.6 18.2-35.6 27.1 0 8.9 18.7 13.2 35.6 15.2 21.6-1.9 47.3-6.2 47.3-15.2s-25.7-20.3-47.3-27.1z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4 9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M685.8 64.4l1 173.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mov" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M693.2 791.5v-15.3h-45.9v15.3h-30.6v-91.8H387.3v91.8H280.2V256.2h30.6v30.6h45.9v-30.6h30.6v76.5h229.4v-76.5h107.1v535.3h-30.6zM356.7 317.4h-45.9V348h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m260-367H387.3v275.3h229.4V378.6z m76.5-91.8h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9V348z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6zM448.6 592.8V439.9l137.6 76.5-137.6 76.4z" fill="#FFCCCC" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ppt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M316.7 363.1h386.9c19.4 0 35.2 14.8 35.2 33.1v232c0 18.3-15.7 33.1-35.2 33.1H316.7c-19.4 0-35.2-14.8-35.2-33.1v-232c0.1-18.3 15.8-33.1 35.2-33.1zM246.4 313.4h527.5c9.7 0 17.6 7.4 17.6 16.6 0 9.2-7.9 16.6-17.6 16.6H246.4c-9.7 0-17.6-7.4-17.6-16.6 0-9.2 7.9-16.6 17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M492.6 827V330c0-9.2 7.9-16.6 17.6-16.6 9.7 0 17.6 7.4 17.6 16.6v497c0 9.2-7.9 16.6-17.6 16.6-9.8 0-17.6-7.4-17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M536.8 713.3l122.7 66.3c8.5 4.6 11.4 14.7 6.5 22.6-4.9 7.9-15.7 10.6-24.2 6.1L519.1 742c-8.5-4.6-11.4-14.7-6.5-22.6 4.9-8 15.7-10.7 24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M483.5 713.3l-122.7 66.3c-8.5 4.6-11.4 14.7-6.5 22.6 4.9 7.9 15.7 10.6 24.2 6.1L501.2 742c8.5-4.6 11.4-14.7 6.5-22.6-4.9-8-15.7-10.7-24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-xls" viewBox="0 0 1024 1024">' + "" + '<path d="M686 62.8H147.2C128.9 62.8 114 77.6 114 96v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V278.6L686 62.8z" fill="#62D35F" ></path>' + "" + '<path d="M684.9 62.8l1 174.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + '<path d="M808.5 729.3l-563.7 0.2h-31.3v-30.8l-0.1-353.4h38.4v345.5h57.6V537.4h76.8V691h57.6V479.8h76.8V691h57.6V556.6H655V691h57.6V383.8h76.8v307.1h19.2v38.4z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mp3" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M652.6 634.2c0 1.1 0.1 2.1 0 3.2v1.7h-0.2c-2.3 26.4-25.8 50.6-58.9 57.6-39.2 8.4-76.8-10.4-83.9-42-7.1-31.6 18.9-64 58.2-72.4 13.8-3 27.4-2.4 39.5 0.8V407.3c-27.9-1.6-65.3-1.6-102.7 5.2-35 6.3-68.3 19.1-93.7 30.9v256.2h-3.5c-3.3 26.9-27.1 51.4-60.4 58.6-40.4 8.8-79.2-10.9-86.5-44.1-7.3-33.1 19.5-67.1 60-75.9 15.9-3.5 31.4-2.4 44.9 2V467.3c-0.6 0.4-1 0.6-1 0.6V352.3s0.4-0.2 1-0.6v-6.3l16.7-3.3c24.5-13.3 71.6-36.1 122-45.1 74.2-13.4 148.9-0.5 148.9-0.5V412h-0.2v222.2z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ics" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + '<path d="M730.6 355.6H293.4c-12.4 0-22.4 9.9-22.4 22.2V744c0 12.3 10 22.2 22.4 22.2h437.1c12.4 0 22.4-9.9 22.4-22.2V377.8c0.1-12.3-10-22.2-22.3-22.2z m-31.4 346.7c0 5.5-4.5 10-10 10H334.8c-5.5 0-10-4.5-10-10V419.4c0-5.5 4.5-10 10-10h354.3c5.5 0 10 4.5 10 10v282.9z" fill="#FFEAC2" ></path>' + "" + '<path d="M406 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10H406c-5.5 0-10-4.5-10-10v-105c0-5.6 4.4-10 10-10zM495.2 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0-5.6 4.5-10 10-10zM584.5 319.9H618c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0.1-5.6 4.6-10 10.1-10z" fill="#FFEAC2" ></path>' + "" + '<path d="M467.7 498.4l-71.8 5.7v24.3h36.5v130.8h35.3V498.4zM628 498.4H521.2l-0.3 35.6h71.4c-14.8 18.1-19.7 25.6-27.5 44-7.8 18.4-11.6 38.8-11.6 61.2v19.9h30.5v-19.9c0-22 2.5-34.6 8.6-51.6 6.2-17 18.5-32.3 35.7-53.6v-35.6z" fill="#FFEAC2" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-pdf" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M347.3 655.8c-56.1 41.2-94.7 99.7-79.5 108.9l-13.3-6.6c-7.7-9.3 9.8-58.9 92.8-102.3zM768.7 609.6c28.7-60.1-207.6-51.1-380.3 27.7 134.4-50.9 383.2-72.9 380.3-27.7z" fill="#FFC5C5" ></path>' + "" + '<path d="M501.4 289.3c6.5-33.4-10.1-32.2-14.8-32.2l-10.5-0.1c-5.8 0-11 4.6-13.5 13.8-16.4 60.1 13.3 212.7 96.7 283.3 73.6 62.3 201.9 90.8 207 60.7-26.6 12.6-126.7-19.1-194-71.8-79.5-64.2-113.5-222.5-96.4-272 1.7-4.9 5.8-10.7 7.7-12 7.2 3.6 15.8 12.2 17.8 30.3z" fill="#FFC5C5" ></path>' + "" + '<path d="M500 298.9c-7.3 35.4-10.5 119.2-80 256.8C345.3 703.6 290.8 772.6 254.5 758l13 6.5c28.4 14.3 80.7-32.7 167.6-197.2 66.8-126.6 63.2-191.8 64.9-268.4z" fill="#FFC5C5" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-apk" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M757.3 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0.1 13.1-10.6 23.7-23.7 23.7z m-53.7-260.4c0 1.6-0.2 3.1-0.2 4.6-0.5 0-0.9-0.1-1.4-0.1h-0.3c0.1 0.9 0.3 1.8 0.3 2.7 0 17.5-14.2 31.7-31.7 31.7H353.7c-17.5 0-31.7-14.2-31.7-31.7 0-0.8 0.2-1.5 0.2-2.2-0.4 0.1-0.9 0.1-1.4 0.1 0-1.7-0.3-3.4-0.3-5.1 0-62.6 30.2-118.1 76.7-153l-48.9-48.9c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0l56 56c0.7 0.7 1 1.6 1.6 2.3 22.4-9.2 46.8-14.3 72.5-14.3 25.5 0 49.7 5.1 71.9 14.1 0.5-0.7 0.8-1.5 1.4-2.1l56-56c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6L626.4 354c46.8 35 77.2 90.6 77.2 153.4zM512 361.4c-72.2 0-132 52.6-143.6 121.5h17.1c-8.7 0-15.8 7.1-15.8 15.8 0 8.7 7.1 15.8 15.8 15.8h253.2c8.7 0 15.8-7.1 15.8-15.8 0-8.7-7.1-15.8-15.8-15.8h17C644 414 584.2 361.4 512 361.4z m71.2 105.7c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0.1 13-10.6 23.7-23.7 23.7z m-142.4 0c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0 13-10.6 23.7-23.7 23.7zM266.7 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0 13.1-10.6 23.7-23.7 23.7zM337.9 562h348.2c8.7 0 15.8 7.1 15.8 15.8V752c0 8.7-14.7 6.1-23.4 6.1 0 0-2.3 9.7-18.6 9.7-7.4 0-18.3-16.2-28.1-16.2-9.6 0-17.9 16.2-29.2 16.2-14.5 0-30.2-21.6-46.5-21.6-15.5 0-31.6 21.6-47.6 21.6-13.8 0-25.5-19.5-38.9-19.5-15.4 0-32.6 19.5-46.5 19.5-19.4 0-36.8-18.4-50.8-18.4-21.3 0-34.6 18.4-34.6 18.4-8.7 0-15.8-7.1-15.8-15.8V577.9c0.2-8.8 7.3-15.9 16-15.9z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-png" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M717.1 737.1h-82v-82h82v82zM553 655v-82h82v82h-82z m0-246h82v82h-82v-82z m-164 82v-82h82v82h-82z m82 164h-82v-82h82v82z m0-164h82v82h-82v-82z m82 246.1h-82v-82h82v82z m-246.1 0v-82h82v82h-82z m0-164.1v-82h82v82h-82z m0-246.1h82v82h-82v-82z m164.1 0h82v82h-82v-82z m246.1 0v82h-82v-82h82z m0 164.1v82h-82v-82h82z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-link" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#40C4FF" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7AD6FF" ></path>' + "" + '<path d="M741.6 673.1l-68.5 68.5c-19.1 19.1-91 5-110.2-14.2l-81.7-81.7c-19.2-19.2-26-70-6.9-89.1l20.6-20.6 48 48c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l41.1-41.1c7.6-7.6 9.2-18.2 3.6-23.8l-75.8-75.8c-3.7-3.7-9.6-4-15.4-1.7L542.8 488l13.7-13.7c19.1-19.1 69.9-12.4 89.1 6.9l81.7 81.7c19.3 19.2 33.5 91.1 14.3 110.2zM419.5 419.5l6.9-6.9c7.6-7.6 19.8-7.6 27.4 0l164.5 164.5c7.6 7.6 7.6 19.8 0 27.4l-6.9 6.9c-7.6 7.6-19.8 7.6-27.4 0L419.5 446.9c-7.6-7.6-7.6-19.9 0-27.4zM536 481.2l-49.5-49.5c2.3-5.8 2-11.7-1.7-15.4L409 340.5c-5.6-5.6-16.2-4-23.8 3.6l-41.1 41.1c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l48 48-20.6 20.6c-19.1 19.1-69.9 12.4-89.1-6.9l-81.7-81.7c-19.2-19.2-33.4-91.1-14.2-110.2l68.5-68.5c19.1-19.1 91-5 110.2 14.2l81.7 81.7c19.2 19.2 26 70 6.9 89.1L536 481.2z" fill="#C6EDFF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-file" viewBox="0 0 1024 1024">' + "" + '<path d="M863.3 201.6H622.5c-8.2 0-15.6 5-18.6 12.6-8.2 20.6-28.3 35.2-51.8 35.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v509.1c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9v-557c0-17.6-14.3-31.9-32-31.9z" fill="#FFE88C" ></path>' + "" + '<path d="M176.6 295.4h670.8V487H176.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M863.3 343.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v415.2c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9V375.3c0-17.7-14.3-32-32-32z" fill="#FFE88C" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-txt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#885CA6" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#AC8DC1" ></path>' + "" + '<path d="M688.2 616.7v102.8h-44.1V616.7h-58.7v-44.1H747v44.1h-58.8zM277 469.8h470v44.1H277v-44.1z m0-102.8h470v44.1H277V367z m249.7 249.7H277v-44.1h249.7v44.1z m0 102.8H277v-44.1h249.7v44.1z" fill="#DCCEE4" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-rar" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M307.6 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1L375 851h37l-18.7-29.4c-7.4-11.7-13.3-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65.1V851h33.4z m-2.4-125.1h24.1c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.7 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2zM516.2 700.4h-32.7L423.8 851h32.8l12.6-34.2h61.2l13.4 34.2h33.6l-61.2-150.6z m-37.4 91l20.7-55.9 21.1 55.9h-41.8zM625.4 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1l22.4 32.8h37L711 821.6c-7.4-11.7-13.2-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65V851h33.4z m-2.5-125.1H647c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.8 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M533.4 583.4h-16.7c-4.8 0-13.5-0.4-22.6-1.4-11.7 1-22.3 1.4-27.1 1.4h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.4-33.4 8.2-33.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1 4.7 0 15.3 2.4 27.1 6.1 9.1-3.7 17.8-6.1 22.6-6.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.6-8.4 16.6z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-100.4h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 14 5.5 16.8-8.4 16.8z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-117.1h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.8-8.4 16.8zM467 115.2h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1s-11 25-24.6 25z m-16.4 66.9H467c13.6 0 24.6 11.2 24.6 25.1s-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.3-33.5 8.2-33.5z" fill="#FFBABA" ></path>' + "" + "</symbol>" + "" + "</svg>";

var _templateObject$26 = taggedTemplateLiteral([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$24 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3$16 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);

var _templateObject4$10 = taggedTemplateLiteral([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ]);

var _templateObject5$9 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ]);

var _templateObject6$4 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject7$3 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ]);

var _templateObject8$3 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ]);

var UploadItem = function(_UploadBase) {
    inherits(UploadItem, _UploadBase);
    function UploadItem() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, UploadItem);
        var options = {
            uploadUri: "",
            percent: 0,
            isAuto: true,
            readonly: false,
            showZoom: true,
            file: {},
            type: "file",
            headers: {},
            params: {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {},
            onRemove: function onRemove() {},
            components: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).call(this, options));
    }
    createClass(UploadItem, [ {
        key: "components",
        value: function components() {
            var options = this.options;
            this.addCom({
                el: "#progressbar_" + options.vid,
                showInfo: false,
                status: "success",
                onComplete: function onComplete(self) {
                    self.options.percent = 100;
                }
            });
        }
    }, {
        key: "renderFile",
        value: function renderFile() {
            var opts = this.options;
            var vDom = hx(_templateObject$26, Lego.UI.Util.getFileIcon(opts.file.name), opts.percent < 100 ? hx(_templateObject2$24, val(opts.file._id), this.onCancel.bind(this), val(opts.file.name), "progressbar_" + opts.vid) : hx(_templateObject3$16, !opts.readonly && opts.percent == 100 ? hx(_templateObject4$10, val(opts.file._id), this.onRemove.bind(this)) : "", val(opts.file.name), Lego.UI.Util.convertByteUnit(opts.file.size), val(opts.file.url), val(opts.file.name)));
            return vDom;
        }
    }, {
        key: "renderPhoto",
        value: function renderPhoto() {
            var opts = this.options;
            var vDom = opts.percent < 100 ? hx(_templateObject5$9, val(opts.type), opts.vid, opts.vid, val(opts.previewImgSrc), "progressbar_" + opts.vid, val(opts.file._id), this.onCancel.bind(this)) : hx(_templateObject6$4, val(opts.type), opts.vid, opts.vid, val(opts.file.url), opts.showZoom ? hx(_templateObject7$3, val(opts.file._id)) : "", !opts.readonly && opts.percent == 100 ? hx(_templateObject8$3, val(opts.file._id), this.onRemove.bind(this)) : "");
            return vDom;
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            switch (opts.type) {
              case "file":
                return this.renderFile();
                break;

              case "photos":
                return this.renderPhoto();
                break;

              case "avatar":
                return this.renderPhoto();
                break;

              default:
                return this.renderFile();
            }
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            function before(el, target) {
                target.parentNode.insertBefore(el, target);
            }
            function prepend(el, target) {
                if (target.firstChild) {
                    before(el, target.firstChild);
                } else {
                    target.appendChild(el);
                }
            }
            function appendSvg() {
                var div = void 0, svg = void 0;
                div = document.createElement("div");
                div.innerHTML = window.svgSprite;
                window.svgSprite = null;
                svg = div.getElementsByTagName("svg")[0];
                if (svg) {
                    svg.setAttribute("aria-hidden", "true");
                    svg.style.position = "absolute";
                    svg.style.width = 0;
                    svg.style.height = 0;
                    svg.style.overflow = "hidden";
                    prepend(svg, document.body);
                }
            }
            var iconEl = this.$(".file-icon");
            if (iconEl.length) {
                iconEl.each(function(index, el) {
                    var classStr = $(el).attr("class"), fileExtArr = classStr.split(" ");
                    $(el).parent().html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-' + (fileExtArr[1] || "file") + '"></use></svg>');
                });
                appendSvg();
            }
        }
    }, {
        key: "removeFun",
        value: function removeFun() {
            var _this2 = this;
            if (this.options.type !== "avatar") {
                if (this.options.type == "photos") {
                    this.$el.remove();
                } else {
                    this.$el.slideUp("normal", function() {
                        _this2.$el.remove();
                    });
                }
            }
        }
    }, {
        key: "onCancel",
        value: function onCancel(event) {
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            this.cancel();
            if (typeof this.options.onCancel == "function") {
                this.options.onCancel("cancel", _id);
            }
            this.removeFun();
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            if (typeof this.options.onRemove == "function") {
                this.options.onRemove("remove", _id);
            }
            this.removeFun();
        }
    } ]);
    return UploadItem;
}(UploadView);

var _templateObject$25 = taggedTemplateLiteral([ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ]);

var _templateObject2$23 = taggedTemplateLiteral([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ]);

var _templateObject3$15 = taggedTemplateLiteral([ '<i class="anticon anticon-cloud-upload-o"></i>' ], [ '<i class="anticon anticon-cloud-upload-o"></i>' ]);

var _templateObject4$9 = taggedTemplateLiteral([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);

var _templateObject5$8 = taggedTemplateLiteral([ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ], [ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ]);

var Upload = function(_Lego$UI$Baseview) {
    inherits(Upload, _Lego$UI$Baseview);
    function Upload() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Upload);
        var uploadUri = window.location.protocol === "https:" ? "https://up.qbox.me" : "http://upload.qiniu.com";
        var options = {
            events: {
                "click .lego-addbtn, .lego-upload-add": "onClickAdd"
            },
            keyRoot: "",
            type: "file",
            buttonText: "添加附件",
            buttonIcon: "",
            showZoom: true,
            name: "",
            token: "",
            params: {},
            uploadUri: Lego.config.uploadUri || uploadUri,
            accept: [],
            acceptSuffix: [],
            previewImg: {
                width: 0,
                height: 0,
                quality: 1
            },
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
            previewContainer: ".lego-upload-container",
            uploadItem: UploadItem,
            onAddFile: function onAddFile() {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onRemove: function onRemove() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        if (options.type == "avatar") {
            options.multiple = false;
        }
        if (options.type !== "file") {
            options.accept = options.accept || [ "image/gif", "image/jpeg", "image/png", "image/jpg" ];
            var cssOpts = {
                width: options.previewImg.width || (options.type == "avatar" ? 150 : 95),
                height: options.previewImg.height || (options.type == "avatar" ? 150 : 95)
            };
            Object.assign(options.previewImg, cssOpts);
        }
        var _this = possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, options));
        _this.fileList = [];
        _this.$(".lego-fileInput").on("change", function(event) {
            var target = $(event.currentTarget)[0];
            _this.uploadInit(target.files, target);
        });
        var opt = _this.options;
        if (opt.value.length) {
            opt.value = opt.value.map(function(file) {
                var item = {
                    el: opt.previewContainer,
                    readonly: opt.readonly,
                    percent: 100,
                    showZoom: opt.showZoom,
                    type: opt.type,
                    file: file
                };
                if (!file._id && file.id) {
                    item._id = file.id;
                }
                return item;
            });
            if (opt.showUploadList) {
                opt.value.forEach(function(item, index) {
                    _this.showItem(item);
                });
            }
        }
        return _this;
    }
    createClass(Upload, [ {
        key: "render",
        value: function render() {
            var opts = this.options, width = opts.previewImg.width, height = opts.previewImg.height;
            if (width) {
                width = "width:" + (typeof width == "string" ? width : width + "px") + ";";
            }
            if (height) {
                height = "height:" + (typeof height == "string" ? height : height + "px") + ";";
            }
            var vDom = hx(_templateObject$25, val(opts.type), val(opts.type), width ? width : "", height ? height : "", !opts.readonly && opts.type !== "photos" && opts.type !== "avatar" ? hx(_templateObject2$23, opts.disabled ? "disabled" : "", opts.buttonIcon ? opts.buttonIcon : hx(_templateObject3$15), val(opts.buttonText)) : "", this.getValue().join(","), val(opts.name), val(opts.accept.join(",")), opts.showUploadList && opts.type == "file" ? hx(_templateObject4$9) : "", opts.type == "photos" || opts.type == "avatar" ? hx(_templateObject5$8, val(opts.type), val(opts.type)) : "");
            return opts.template ? opts.template : vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.showUploadList && !opts.value.length) {
                if (opts.type !== "file") {
                    this.$(".lego-upload-photo-item").remove();
                } else {
                    this.$(".lego-upload-container").html("");
                }
            }
        }
    }, {
        key: "uploadInit",
        value: function uploadInit(files, fileInput) {
            var _this2 = this;
            var uploadFiles = [];
            if ((typeof files === "undefined" ? "undefined" : _typeof(files)) == "object" && files[0]) {
                uploadFiles = Array.prototype.slice.call(files, 0);
            } else {
                uploadFiles = [ files ];
            }
            if (fileInput) {
                fileInput.value = "";
            }
            var that = this, opts = this.options, filesCount = uploadFiles.length, maxFilesCount = opts.maxFilesCount;
            if (filesCount) {
                if (filesCount > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    return;
                }
                uploadFiles = uploadFiles.filter(function(file) {
                    file._id = [ file.name, file.size, file.lastModified ].join("_");
                    var hasFile = _this2.fileList.includes(file._id);
                    if (!hasFile) {
                        _this2.fileList.push(file._id);
                    }
                    return !hasFile;
                });
                if (!opts.multiple) {
                    this.fileList = [ this.fileList.pop() ];
                }
                if (this.fileList.length > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    this.fileList.length = maxFilesCount;
                    if (uploadFiles.length > maxFilesCount) {
                        uploadFiles.length = maxFilesCount;
                    }
                    return;
                }
                if (typeof opts.onAddFile == "function") {
                    opts.onAddFile(this, uploadFiles);
                }
                uploadFiles.forEach(function(file, i) {
                    if (opts.accept.length) {
                        if (!opts.accept.includes(file.type)) {
                            Lego.UI.message("error", "上传文件格式不正确");
                            _this2.fileList = _this2.fileList.filter(function(value) {
                                return value !== file._id;
                            });
                            return;
                        }
                    }
                    if (opts.acceptSuffix.length) {
                        if (!opts.acceptSuffix.includes(Lego.UI.Util.getExtName(file.name))) {
                            Lego.UI.message("error", "上传文件格式不正确");
                            _this2.fileList = _this2.fileList.filter(function(value) {
                                return value !== file._id;
                            });
                            return;
                        }
                    }
                    if (Math.ceil(file.size / (1024 * 1024)) > parseInt(opts.maxFileSize)) {
                        var msg = "发送文件最大为" + opts.maxFileSize;
                        if (uploadFiles.length == 1) {
                            Lego.UI.message("error", msg);
                        } else {
                            debug.warn(msg);
                        }
                        _this2.fileList = _this2.fileList.filter(function(value) {
                            return value !== file._id;
                        });
                        return;
                    }
                    if (i > maxFilesCount - 1) {
                        return;
                    }
                    var uploadOption = {
                        el: opts.previewContainer,
                        uploadUri: opts.uploadUri,
                        readonly: opts.readonly,
                        isAuto: opts.isAuto,
                        file: file,
                        type: opts.type,
                        percent: 0,
                        showZoom: opts.showZoom,
                        params: Object.assign({
                            key: opts.key || that.getKey(file.name),
                            token: opts.token ? opts.token : typeof opts.data == "string" ? opts.data : ""
                        }, opts.params || {}),
                        needToken: true,
                        onBegin: opts.onBegin,
                        onProgress: opts.onProgress,
                        onComplete: function onComplete(self, resp) {
                            var hasFile = opts.value.find(function(item) {
                                return item.file.hash == resp.hash;
                            });
                            if (!hasFile && opts.value.length <= maxFilesCount) {
                                resp.url = Lego.config.downloadUri + resp.key;
                                self.options.file = resp;
                                opts.value.push({
                                    file: resp,
                                    type: opts.type,
                                    percent: 100
                                });
                            }
                            if (typeof opts.onComplete == "function") {
                                opts.onComplete(that, resp, self);
                            }
                        },
                        onFail: opts.onFail,
                        onCancel: opts.onCancel
                    };
                    if (opts.type !== "file") {
                        uploadOption.isAuto = opts.isAuto;
                        opts.previewImg.success = function(results, option) {
                            option.previewImgSrc = results.blob;
                            that.showItem(option);
                        };
                        localresizeimg(file, opts.previewImg, uploadOption);
                    } else {
                        that.showItem(uploadOption);
                    }
                });
            } else {
                debug && debug.log("form input error");
            }
        }
    }, {
        key: "getKey",
        value: function getKey(fileName) {
            return this.options.keyRoot + Lego.UI.Util.uuid() + "." + Lego.UI.Util.getExtName(fileName);
        }
    }, {
        key: "onClickAdd",
        value: function onClickAdd(event) {
            this.$(".lego-fileInput").click();
        }
    }, {
        key: "showItem",
        value: function showItem(uploadOption) {
            var _this3 = this;
            var that = this, opts = this.options;
            var callback = function callback(type, _id) {
                _this3.fileList = _this3.fileList.filter(function(value) {
                    return value !== _id;
                });
                if (type == "cancel") {
                    if (typeof opts.onCancel == "function") {
                        opts.onCancel(_this3, _id);
                    }
                } else {
                    var hasOne = opts.value.find(function(item) {
                        return item.file._id == _id;
                    }), removeFile = {};
                    if (hasOne) {
                        removeFile = $.extend({}, hasOne.file || {});
                    }
                    if (typeof opts.onRemove == "function") {
                        opts.onRemove(_this3, removeFile);
                    }
                    opts.value = opts.value.filter(function(item) {
                        return item.file._id !== _id;
                    });
                }
                if (opts.type == "avatar") {
                    var html = [ '<div class="lego-upload-add preview-' + val(opts.type) + '">', '<i class="anticon anticon-plus avatar-uploader-trigger preview-' + val(opts.type) + '"></i></div>' ].join("");
                    _this3.$(".lego-upload-container").html(html);
                }
                _this3.refresh();
            };
            uploadOption.context = this;
            uploadOption.insert = opts.multiple ? opts.type == "photos" ? "prepend" : "append" : "html";
            uploadOption.onCancel = callback;
            uploadOption.onRemove = callback;
            Lego.create(opts.uploadItem, uploadOption);
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var result = [];
            if (this.options.value.length) {
                var newArr = this.options.value.filter(function(item) {
                    return !!item.id;
                });
                result = newArr.map(function(item) {
                    return item.id;
                });
            }
            return result;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.fileList = [];
            this.options.value = [];
            this.refresh();
            return this;
        }
    } ]);
    return Upload;
}(Lego.UI.Baseview);

Lego.components("upload", Upload);

var _templateObject$24 = taggedTemplateLiteral([ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ]);

var _templateObject2$22 = taggedTemplateLiteral([ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ], [ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ]);

var _templateObject3$14 = taggedTemplateLiteral([ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ], [ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ]);

var _templateObject4$8 = taggedTemplateLiteral([ '<facial id="facial-', '"></facial>' ], [ '<facial id="facial-', '"></facial>' ]);

var _templateObject5$7 = taggedTemplateLiteral([ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ], [ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ]);

var Reply = function(_Lego$UI$Baseview) {
    inherits(Reply, _Lego$UI$Baseview);
    function Reply() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Reply);
        var options = {
            events: {
                "focus .lego-reply-content": "onFocus",
                "click .lego-reply-submit": "submit",
                "click .lego-reply-annex": "showUpload",
                "click .popover-title i": "showUpload",
                "keydown .lego-reply-content": "_enterSearch"
            },
            placeholder: "请输入回复内容",
            contentHeight: 70,
            showFacial: true,
            showUpload: true,
            filterHtml: true,
            uploadToken: null,
            facialIconsUrl: "",
            submitText: "回复",
            submitType: "primary",
            contentRequired: true,
            maxTextLength: 500,
            onSubmit: function onSubmit() {},
            onUploadComplete: function onUploadComplete() {},
            dropdownbtn: false,
            components: []
        };
        Object.assign(options, opts);
        if (options.showFacial) {
            options.components.push({
                el: "#facial-" + options.vid,
                target: "#content-" + options.vid,
                targetType: "textarea",
                iconsUrl: options.facialIconsUrl
            });
        }
        if (options.dropdownbtn) {
            options.components.push(Object.assign(_typeof(options.dropdownbtn) == "object" ? options.dropdownbtn : {}, {
                el: "#dropdownbtn-" + options.vid,
                text: options.submitText,
                btnType: options.submitType,
                className: "float-right",
                onClick: function onClick(self, item, event) {
                    var parentView = self.options.context;
                    if (parentView) {
                        parentView.submit();
                    }
                }
            }));
        }
        var _this = possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this, options));
        _this.uploadView = null;
        _this.placeholder = '<span class="lego-reply-ph">' + _this.options.placeholder + "</span>";
        return _this;
    }
    createClass(Reply, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$24, val(options.placeholder), options.vid, options.dropdownbtn ? hx(_templateObject2$22, options.vid) : hx(_templateObject3$14, options.submitType, val(options.submitText)), options.showFacial ? hx(_templateObject4$8, options.vid) : "", options.showUpload ? hx(_templateObject5$7, options.vid) : "", options.vid);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$(".lego-reply-content").attr("contenteditable", "true").height(this.options.contentHeight);
        }
    }, {
        key: "onFocus",
        value: function onFocus(event) {
            var target = $(event.currentTarget);
            if (target.find(".lego-reply-ph").length) {
                target.html("");
            }
        }
    }, {
        key: "showUpload",
        value: function showUpload(event) {
            this.$(".popover").toggleClass("show");
            var options = this.options, that = this;
            if (options.showUpload && this.$(".popover").hasClass("show")) {
                if (typeof options.uploadToken == "string") {
                    this.uploadView = Lego.create(Upload, {
                        el: "#upload-" + options.vid,
                        token: options.uploadToken,
                        context: this,
                        onComplete: options.onUploadComplete
                    });
                }
                if (_typeof(options.uploadToken) == "object") {
                    this.uploadView = Lego.create(Upload, {
                        el: "#upload-" + options.vid,
                        dataSource: options.uploadToken,
                        context: that,
                        onComplete: options.onUploadComplete
                    });
                }
            }
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget), options = this.options;
            if (event.which === 13) {
                if (!event.ctrlKey) {
                    this.submit(event);
                }
                if (event.ctrlKey) {
                    Lego.UI.Util.insertText(target, Lego.UI.Util.checkBrowser().mozilla ? "<br>" : "<br><br>");
                }
            }
        }
    }, {
        key: "getUploadIds",
        value: function getUploadIds() {
            if (this.uploadView) {
                return this.uploadView.getValue();
            }
            return [];
        }
    }, {
        key: "submit",
        value: function submit(event) {
            if (event) {
                event.stopPropagation();
            }
            var contentEl = this.$(".lego-reply-content");
            if (contentEl.val().length > this.options.maxTextLength) {
                Lego.UI.message("warning", "提交内容不能大于500个字符");
                return;
            }
            var contentHtml = contentEl.val();
            contentHtml = this.options.filterHtml ? contentHtml.replace(/<[^>]+>/g, "").replace(/\r\n/g, "").replace(/\n/g, "") : contentHtml;
            contentHtml = $.trim(contentHtml);
            if (!contentHtml.length && this.options.contentRequired) {
                Lego.UI.message("warning", "提交内容不能为空");
                return;
            }
            contentEl.val("");
            contentHtml = contentHtml == this.placeholder ? "" : contentHtml;
            var uploadIds = Array.from(this.getUploadIds());
            if (this.uploadView) {
                this.uploadView.reset();
            }
            this.$(".popover").removeClass("show");
            if (typeof this.options.onSubmit == "function") {
                this.options.onSubmit(this, contentHtml, uploadIds);
            }
        }
    } ]);
    return Reply;
}(Lego.UI.Baseview);

Lego.components("reply", Reply);

var Tooltip$2 = function() {
    function Tooltip() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tooltip);
        var options = {
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
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        this.el = options.el;
        this.onHidden = options.onHidden;
        this.options = {
            selector: options.selector,
            title: options.title,
            content: options.content,
            animation: options.animation,
            container: options.container,
            delay: options.delay,
            html: options.html,
            placement: options.placement,
            template: options.template,
            constraints: options.constraints,
            trigger: options.eventName,
            offset: options.offset
        };
        this.render();
    }
    createClass(Tooltip, [ {
        key: "render",
        value: function render() {
            var that = this;
            var el = this.el instanceof $ ? this.el : $(this.el);
            if (el.length) {
                el.tooltip(this.options);
                el.on("hidden.bs.tooltip", function() {
                    if (typeof that.onClose === "function") {
                        that.onClose(event);
                    }
                });
            }
            return el;
        }
    } ]);
    return Tooltip;
}();

var fun$4 = function fun$4(opts) {
    return new Tooltip$2(opts);
};

Lego.components("tooltip", fun$4);

var _templateObject$27 = taggedTemplateLiteral([ '<div class="lego-rating ', '">\n        <input type="hidden" name="', '" id="rating-', '" class="', '" value="', '"/>\n        ', "\n        </div>\n        " ], [ '<div class="lego-rating ', '">\n        <input type="hidden" name="', '" id="rating-', '" class="', '" value="', '"/>\n        ', "\n        </div>\n        " ]);

var _templateObject2$25 = taggedTemplateLiteral([ '<span class="badge badge-default">', "</span>" ], [ '<span class="badge badge-default">', "</span>" ]);

var Rating = function(_Lego$UI$Baseview) {
    inherits(Rating, _Lego$UI$Baseview);
    function Rating() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Rating);
        var options = {
            fractions: 0,
            step: 2,
            start: 0,
            stop: 10,
            icon: "anticon",
            filled: "star",
            filledSelected: "star",
            empty: "star-o",
            tooltipOption: {
                title: "",
                container: "body",
                placement: "bottom"
            },
            showTip: false,
            showLabel: false,
            disabled: false,
            readonly: false,
            value: 0,
            size: "",
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, options));
        _this.init();
        return _this;
    }
    createClass(Rating, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$27, options.size ? "lego-rating-" + options.size : "", val(options.name), options.vid, options.showTip ? "rating-tooltip" : "rating", options.value, options.showLabel ? hx(_templateObject2$25, val(options.value)) : "");
            return vDom;
        }
    }, {
        key: "init",
        value: function init() {
            var options = this.options, that = this, inputEl = this.$("#rating-" + options.vid), inputAttr = {}, tooltipOption = options.tooltipOption, iconStr = options.icon + " " + options.icon + "-", ratingConfig = {
                fractions: options.fractions,
                step: options.step,
                start: options.start,
                stop: options.stop,
                filled: iconStr + options.filled,
                filledSelected: iconStr + options.filledSelected,
                empty: iconStr + options.empty
            };
            if (options.disabled) {
                inputAttr.disabled = options.disabled;
            }
            if (options.readonly) {
                inputAttr["data-readonly"] = "";
            }
            inputEl.attr(inputAttr);
            if (tooltipOption.title) {
                (function() {
                    var theTitle = tooltipOption.title;
                    ratingConfig.extendSymbol = function(rate) {
                        if (theTitle.indexOf("###") >= 0) {
                            tooltipOption.title = theTitle.replace(/###/g, rate);
                        } else {
                            tooltipOption.title = theTitle + rate;
                        }
                        $(this).tooltip(tooltipOption);
                    };
                })();
            }
            inputEl.rating(ratingConfig);
            inputEl.on("change", function() {
                var val = $(this).val();
                that.setValue(val);
                options.showLabel && $(this).next(".badge").text(val);
                if (typeof options.onChange == "function") {
                    options.onChange(that, val);
                }
            });
        }
    }, {
        key: "setValue",
        value: function setValue(val) {
            if (val) {
                this.options.value = Number(val);
            }
            return this;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.value;
        }
    } ]);
    return Rating;
}(Lego.UI.Baseview);

Lego.components("rating", Rating);

var _templateObject$28 = taggedTemplateLiteral([ "\n                <ul>", "\n                </ul>\n                " ], [ "\n                <ul>", "\n                </ul>\n                " ]);

var _templateObject2$26 = taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3$17 = taggedTemplateLiteral([ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

var _templateObject4$11 = taggedTemplateLiteral([ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

var Selects = function(_Lego$UI$Baseview) {
    inherits(Selects, _Lego$UI$Baseview);
    function Selects() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Selects);
        var options = {
            events: {
                click: function click(event) {
                    event.stopPropagation();
                }
            },
            name: "",
            value: [],
            multiple: false,
            eventName: "click",
            fieldName: "key",
            filterOption: true,
            tags: false,
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "请选择",
            searchPlaceholder: "搜索",
            notFoundContent: "",
            dropdownWidth: 0,
            dropdownHeight: 0,
            direction: "",
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            inputAble: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownClassName: "",
            splitString: "",
            data: [],
            components: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Selects.__proto__ || Object.getPrototypeOf(Selects)).call(this, options));
        _this.oldValue = "";
        var that = _this;
        _this.$(".select-input").change(function(event) {
            if (typeof options.onChange == "function") {
                options.onChange(that, $(this).val());
            }
        });
        _this.$(".select-tags-div").on("click", ".select-tag-close", _this.clickItemClose.bind(_this));
        return _this;
    }
    createClass(Selects, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (opts.data.length) {
                this.addCom({
                    el: "#dropdown-" + opts.vid,
                    container: "#select-" + opts.vid,
                    scrollbar: opts.dropdownHeight ? {} : null,
                    eventName: opts.eventName || "click",
                    disabled: opts.disabled || false,
                    width: opts.dropdownWidth || this.$el.width(),
                    maxHeight: opts.dropdownHeight || 0,
                    showSearch: opts.showSearch,
                    className: opts.dropdownClassName,
                    searchPlaceholder: opts.searchPlaceholder,
                    clickAndClose: opts.multiple ? false : true,
                    direction: opts.direction,
                    data: opts.data || [],
                    onChange: function onChange(self, model) {
                        that.$(".select-input").focus();
                        if (model.key !== "0" && opts.multiple) {
                            opts.data.forEach(function(item, index) {
                                if (item.key == "0") {
                                    item.selected = false;
                                }
                            });
                            that.getValue();
                            if (!opts.value.includes(model)) {
                                model.selected = true;
                                opts.value.push(model);
                            }
                        } else {
                            opts.data.forEach(function(item, index) {
                                item.selected = false;
                            });
                            opts.value = [ model ];
                            that.refresh();
                        }
                        that.options.onChange(that, model);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = "";
            function getTags(data) {
                if (data.length) {
                    return hx(_templateObject$28, data.map(function(item) {
                        return hx(_templateObject2$26, item.key, item.value, item.value);
                    }));
                } else {
                    return "";
                }
            }
            var theValueArr = [], realValueArr = [];
            if (opts.value.length) {
                theValueArr = opts.value.map(function(item) {
                    return item.value;
                });
                realValueArr = opts.value.map(function(item) {
                    return item[opts.fieldName];
                });
            }
            if (!opts.multiple) {
                vDom = hx(_templateObject3$17, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.vid);
            } else {
                vDom = hx(_templateObject4$11, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.value && opts.multiple) {
                opts.value.forEach(function(item) {
                    if (item) {
                        var model = opts.data.find(function(model) {
                            return model.key === item.key;
                        });
                        if (model) {
                            model.selected = true;
                        }
                    }
                });
            }
            if (!opts.inputAble) {
                this.$(".select-input").attr("readonly", "readonly");
            }
            var dropdownView = Lego.getView("#dropdown-" + opts.vid);
            if (dropdownView) {
                dropdownView.options.data = opts.data;
                dropdownView.refresh();
            }
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.target).parent(), key = target.attr("id"), value = target.attr("title");
            this.options.data.forEach(function(item) {
                if (item.key == key) {
                    item.selected = false;
                }
            });
            this.getValue();
            this.refresh();
            Lego.getView("#dropdown-" + this.options.vid).refresh();
            if (typeof this.options.onDeselect === "function") {
                this.options.onDeselect(this, {
                    key: key,
                    value: value
                });
            }
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var data = this.options.data;
            if (value.length) {
                value.forEach(function(item) {
                    var model = data.find(function(model) {
                        return model.key === item.key;
                    });
                    if (model) {
                        Object.assign(model, item);
                    } else {
                        data.push(item);
                    }
                });
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            this.options.value = this.options.data.filter(function(item) {
                return item.selected == true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Selects;
}(Lego.UI.Baseview);

Lego.components("selects", Selects);

var _templateObject$29 = taggedTemplateLiteral([ '\n        <div class="lego-steps lego-steps-', " lego-steps-", " lego-steps-", "\n        ", '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-steps lego-steps-', " lego-steps-", " lego-steps-", "\n        ", '">\n        ', "\n        </div>\n        " ]);

var _templateObject2$27 = taggedTemplateLiteral([ '\n            <div class="lego-steps-item lego-steps-status-', '">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-steps-item lego-steps-status-', '">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject3$18 = taggedTemplateLiteral([ '<div class="lego-steps-tail"><i></i></div>' ], [ '<div class="lego-steps-tail"><i></i></div>' ]);

var _templateObject4$12 = taggedTemplateLiteral([ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ], [ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ]);

var _templateObject5$10 = taggedTemplateLiteral([ '<span class="lego-steps-icon">', "</span>" ], [ '<span class="lego-steps-icon">', "</span>" ]);

var _templateObject6$5 = taggedTemplateLiteral([ '<div class="lego-steps-description">', "</div>" ], [ '<div class="lego-steps-description">', "</div>" ]);

var Steps = function(_Lego$UI$Baseview) {
    inherits(Steps, _Lego$UI$Baseview);
    function Steps() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Steps);
        var options = {
            type: "line",
            color: "light",
            current: 0,
            status: "process",
            size: "",
            direction: "horizontal",
            titleWidth: 120,
            showDescription: true,
            showIcon: true,
            showNum: true,
            data: [],
            onNext: function onNext() {},
            onPrevious: function onPrevious() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, options));
    }
    createClass(Steps, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.type == "arrow") {
                opts.titleWidth = 0;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, dataLength = opts.data.length, widthPercent = 10 / (dataLength - (opts.type == "arrow" ? 0 : 1)) * 10;
            var vDom = hx(_templateObject$29, opts.direction, opts.type, !opts.showNum ? "sm" : opts.size, opts.type == "arrow" && opts.color == "light" ? "lego-steps-o" : "", opts.data.map(function(item, index) {
                return hx(_templateObject2$27, opts.current == index ? opts.status : item.status ? item.status : opts.current > index ? "finish" : "wait", index < dataLength ? hx(_templateObject3$18) : "", opts.showIcon ? hx(_templateObject4$12, item.icon ? item.icon : item.status == "finish" ? "anticon-check" : "", item.status !== "finish" ? item.icon ? item.icon : opts.showNum ? index + 1 : "" : "") : hx(_templateObject5$10, opts.showNum ? index + 1 : ""), val(item.title), opts.showDescription ? hx(_templateObject6$5, val(item.description)) : "");
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, dataLength = opts.data.length, widthPercent = 10 / (dataLength - (opts.type == "arrow" ? 0 : 1)) * 10;
            this.$(".lego-steps-item").each(function(index, el) {
                $(el).css({
                    width: index == dataLength - (opts.type == "arrow" ? 0 : 1) ? "" : widthPercent + "%",
                    marginRight: -opts.titleWidth / 2
                });
            });
            this.$(".lego-steps-tail").each(function(index, el) {
                $(el).css({
                    paddingRight: index == dataLength - (opts.type == "arrow" ? 0 : 1) ? opts.titleWidth : opts.titleWidth / 2
                });
            });
        }
    }, {
        key: "changeStatus",
        value: function changeStatus() {
            var opts = this.options;
            if (opts.current > opts.data.length) {
                opts.current = opts.data.length;
            }
            opts.data.forEach(function(item, index) {
                item.status = "wait";
                if (index < opts.current) {
                    item.status = "finish";
                }
                if (opts.current == index) {
                    item.status = opts.status;
                }
            });
            this.refresh();
        }
    }, {
        key: "next",
        value: function next() {
            var opts = this.options;
            opts.current++;
            this.changeStatus();
            if (typeof opts.onNext == "function") {
                opts.onNext(this, opts.current);
            }
        }
    }, {
        key: "previous",
        value: function previous() {
            var opts = this.options;
            opts.current--;
            this.changeStatus();
            if (typeof opts.onPrevious == "function") {
                opts.onPrevious(this, opts.current);
            }
        }
    } ]);
    return Steps;
}(Lego.UI.Baseview);

Lego.components("steps", Steps);

var _templateObject$30 = taggedTemplateLiteral([ '\n        <div class="lego-switch">\n            <input type="hidden" name="', '" value="', '" />\n            <span class="switch-', " ", " ", '"\n            onclick=', ">\n                <span class='slider'></span>\n            </span>\n        </div>\n        " ], [ '\n        <div class="lego-switch">\n            <input type="hidden" name="', '" value="', '" />\n            <span class="switch-', " ", " ", '"\n            onclick=', ">\n                <span class='slider'></span>\n            </span>\n        </div>\n        " ]);

var Switchs = function(_Lego$UI$Baseview) {
    inherits(Switchs, _Lego$UI$Baseview);
    function Switchs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Switchs);
        var options = {
            checked: false,
            themeColor: "#01a8fe",
            disabled: false,
            size: "sm",
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Switchs.__proto__ || Object.getPrototypeOf(Switchs)).call(this, options));
    }
    createClass(Switchs, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$30, opts.name, opts.checked ? 1 : "", opts.checked ? "on" : "off", opts.disable ? "switch-disabled" : "", opts.size, this.onClick.bind(this));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, that = this;
            if (opts.themeColor) {
                var color = opts.themeColor;
                this.$(".switch-on").css({
                    "border-color": color,
                    "box-shadow": color + " 0px 0px 0px 16px inset",
                    "background-color": color
                });
                this.$(".switch-off").css({
                    "border-color": "#ddd",
                    "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                    "background-color": "#ddd"
                });
            }
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (target.hasClass("switch-disabled")) {
                return;
            }
            if (target.hasClass("switch-on")) {
                this.showOff();
            } else {
                this.showOn();
            }
        }
    }, {
        key: "showOn",
        value: function showOn() {
            var opts = this.options;
            opts.checked = true;
            if (typeof opts.onChange == "function") {
                opts.onChange(this, true);
            }
        }
    }, {
        key: "showOff",
        value: function showOff() {
            var opts = this.options;
            opts.checked = false;
            if (typeof opts.onChange == "function") {
                opts.onChange(this, false);
            }
        }
    } ]);
    return Switchs;
}(Lego.UI.Baseview);

Lego.components("switchs", Switchs);

var _templateObject$31 = taggedTemplateLiteral([ '\n        <div class="lego-slider">\n            <input id="input_', '" name="', '" type="text" />\n        </div>\n        ' ], [ '\n        <div class="lego-slider">\n            <input id="input_', '" name="', '" type="text" />\n        </div>\n        ' ]);

var SliderView = function(_Lego$UI$Baseview) {
    inherits(SliderView, _Lego$UI$Baseview);
    function SliderView() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, SliderView);
        var options = {
            value: 5,
            min: 0,
            max: 10,
            step: 1,
            precision: 2,
            orientation: "horizontal",
            range: false,
            selection: "before",
            tooltip: "show",
            tooltip_split: false,
            tooltip_position: null,
            handle: "round",
            reversed: false,
            rtl: "auto",
            enabled: true,
            formatter: null,
            natural_arrow_keys: false,
            ticks: [],
            ticks_positions: [],
            ticks_labels: [],
            ticks_snap_bounds: 0,
            ticks_tooltip: false,
            scale: "linear",
            focus: false,
            labelledby: null,
            rangeHighlights: [],
            size: "",
            onChange: function onChange() {},
            onStart: function onStart() {},
            onStop: function onStop() {}
        };
        Object.assign(options, option);
        var _this = possibleConstructorReturn(this, (SliderView.__proto__ || Object.getPrototypeOf(SliderView)).call(this, options));
        _this.initSlider();
        return _this;
    }
    createClass(SliderView, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$31, opts.vid, opts.name);
            return vDom;
        }
    }, {
        key: "initSlider",
        value: function initSlider() {
            var opts = this.options, that = this;
            this.slider = new Slider("#input_" + opts.vid, {
                value: opts.value,
                min: opts.min,
                max: opts.max,
                step: opts.step,
                precision: opts.precision,
                orientation: opts.orientation,
                range: opts.range,
                selection: opts.selection,
                tooltip: opts.tooltip,
                tooltip_split: opts.tooltip_split,
                tooltip_position: opts.tooltip_position,
                handle: opts.handle,
                reversed: opts.reversed,
                rtl: opts.rtl,
                enabled: opts.enabled,
                formatter: opts.formatter,
                natural_arrow_keys: opts.natural_arrow_keys,
                ticks: opts.ticks,
                ticks_positions: opts.ticks_positions,
                ticks_labels: opts.ticks_labels,
                ticks_snap_bounds: opts.ticks_snap_bounds,
                ticks_tooltip: opts.ticks_tooltip,
                scale: opts.scale,
                focus: opts.focus,
                labelledby: opts.labelledby,
                rangeHighlights: opts.rangeHighlights
            });
            this.slider.on("change", function() {
                if (typeof opts.onChange == "function") {
                    opts.onChange(that, that.slider.getValue());
                }
            });
            this.slider.on("slideStart", function() {
                if (typeof opts.onStart == "function") {
                    opts.onStart(that, that.slider.getValue());
                }
            });
            this.slider.on("slideStop", function() {
                if (typeof opts.onStop == "function") {
                    opts.onStop(that, that.slider.getValue());
                }
            });
        }
    } ]);
    return SliderView;
}(Lego.UI.Baseview);

Lego.components("slider", SliderView);

var _templateObject$32 = taggedTemplateLiteral([ '\n        <div class="lego-tabs">\n            <navs id="navs-', '"></navs>\n            <div class="tab-content ', '">\n                ', "\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-tabs">\n            <navs id="navs-', '"></navs>\n            <div class="tab-content ', '">\n                ', "\n            </div>\n        </div>\n        " ]);

var _templateObject2$28 = taggedTemplateLiteral([ '<div class="tab-pane ', " ", '">\n                            ', "\n                        </div>" ], [ '<div class="tab-pane ', " ", '">\n                            ', "\n                        </div>" ]);

var Tabs = function(_Lego$UI$Baseview) {
    inherits(Tabs, _Lego$UI$Baseview);
    function Tabs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tabs);
        var options = {
            eventName: "click",
            type: "line",
            size: "default",
            closable: false,
            activeKey: "",
            activeContent: "",
            direction: "bottom",
            navClassName: "",
            contentScrollbar: null,
            showAdd: false,
            animateIn: Lego.config.animateAble ? "fadeIn" : "",
            animateOut: Lego.config.animateAble ? "fadeOut" : "",
            data: [],
            onAdd: function onAdd() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, options));
    }
    createClass(Tabs, [ {
        key: "components",
        value: function components() {
            var options = this.options, comId = "#navs-" + options.vid;
            var data = options.data.filter(function(item) {
                return !item.isHide;
            });
            options.activeKey = typeof options.activeKey == "number" ? data[options.activeKey].key : options.activeKey;
            var model = data.find(function(item) {
                return item.key == options.activeKey;
            });
            if (model) {
                options.activeContent = typeof model.content == "function" ? model.content() : model.content;
            }
            this.addCom({
                el: comId,
                eventName: options.eventName || "click",
                className: options.navClassName,
                type: "tabs",
                activeKey: options.activeKey,
                onClick: function onClick(self, item) {
                    if (!item.disabled && item.content) {
                        var pView = this.context;
                        pView.options.activeKey = item.key;
                        pView.options.activeContent = typeof item.content == "function" ? item.content() : item.content;
                        if (typeof options.onChange === "function") {
                            options.onChange(pView, item);
                        }
                    }
                },
                data: data
            });
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options, newData = [];
            function getNewData(data) {
                if (Array.isArray(data)) {
                    if (data.length) {
                        data.forEach(function(item) {
                            if (item.children) {
                                getNewData(item.children);
                            } else {
                                newData.push(item);
                            }
                        });
                    }
                }
            }
            getNewData(options.data);
            var vDom = hx(_templateObject$32, options.vid, options.contentScrollbar ? "scrollbar" : "", newData.map(function(item) {
                if (!item.disabled) {
                    return hx(_templateObject2$28, val(options.animate), item.key == options.activeKey ? "active" : "", item.key == options.activeKey ? options.activeContent : "");
                }
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.animateIn) {
                Lego.UI.Util.animateCss(this.$(".tab-pane.active"), opts.animateIn);
            }
        }
    } ]);
    return Tabs;
}(Lego.UI.Baseview);

Lego.components("tabs", Tabs);

var _templateObject$33 = taggedTemplateLiteral([ '\n        <div class="lego-table clearfix ', "\n        ", "\n        ", "\n        ", '">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                    ', '\n                    <div class="lego-table-body">\n                        ', '\n                        <div class="scrollbar">\n                            <table class="table ', " ", '">\n                                ', "\n                                ", "\n                                ", "\n                            </table>\n                        </div>\n                    </div>\n                    ", "\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-table clearfix ', "\n        ", "\n        ", "\n        ", '">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                    ', '\n                    <div class="lego-table-body">\n                        ', '\n                        <div class="scrollbar">\n                            <table class="table ', " ", '">\n                                ', "\n                                ", "\n                                ", "\n                            </table>\n                        </div>\n                    </div>\n                    ", "\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2$29 = taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3$19 = taggedTemplateLiteral([ '\n                    <div class="lego-table-header">\n                        <table class="table ', " ", '">\n                            ', "\n                            ", "\n                        </table>\n                    </div>\n                    " ], [ '\n                    <div class="lego-table-header">\n                        <table class="table ', " ", '">\n                            ', "\n                            ", "\n                        </table>\n                    </div>\n                    " ]);

var _templateObject4$13 = taggedTemplateLiteral([ '<nodata id="nodata_', '"></nodata>' ], [ '<nodata id="nodata_', '"></nodata>' ]);

var _templateObject5$11 = taggedTemplateLiteral([ '<div class="hide"></div>' ], [ '<div class="hide"></div>' ]);

var _templateObject6$6 = taggedTemplateLiteral([ '\n                    <div class="lego-table-footer">\n                        ', "\n                    </div>" ], [ '\n                    <div class="lego-table-footer">\n                        ', "\n                    </div>" ]);

var _templateObject7$4 = taggedTemplateLiteral([ '<pagination id="pagination_', '"></pagination>' ], [ '<pagination id="pagination_', '"></pagination>' ]);

var _templateObject8$4 = taggedTemplateLiteral([ '<button type="button" class="btn btn-default table-setting" title="setting"><i class="anticon anticon-ellipsis"></i></button>' ], [ '<button type="button" class="btn btn-default table-setting" title="setting"><i class="anticon anticon-ellipsis"></i></button>' ]);

var _templateObject9$2 = taggedTemplateLiteral([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);

var _templateObject10$1 = taggedTemplateLiteral([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);

var _templateObject11$1 = taggedTemplateLiteral([ '<col style="', '">' ], [ '<col style="', '">' ]);

var _templateObject12 = taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ]);

var _templateObject13 = taggedTemplateLiteral([ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ], [ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ]);

var _templateObject14 = taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject15 = taggedTemplateLiteral([ '<th class="lego-table-selection">', "</th>" ], [ '<th class="lego-table-selection">', "</th>" ]);

var _templateObject16 = taggedTemplateLiteral([ '<td class="lego-table-selection">', "</td>" ], [ '<td class="lego-table-selection">', "</td>" ]);

var _templateObject17 = taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject18 = taggedTemplateLiteral([ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ], [ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ]);

var _templateObject19 = taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject20 = taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject21 = taggedTemplateLiteral([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject22 = taggedTemplateLiteral([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject23 = taggedTemplateLiteral([ '<i class="anticon anticon-filter"></i>' ], [ '<i class="anticon anticon-filter"></i>' ]);

var Tables = function(_Lego$UI$Baseview) {
    inherits(Tables, _Lego$UI$Baseview);
    function Tables() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tables);
        var options = {
            events: {
                "click tbody .lego-checkbox > input,.lego-radio > input": "selectOne",
                "click thead .lego-checkbox > input": "selectAll",
                "click th>span": "clickSorter",
                "click .anticon-filter": "clickFilter",
                "click .lego-table-tbody td": "clickItem",
                "click .lego-table-scroll > button": "clickSetting"
            },
            scrollbar: {},
            style: {},
            className: "",
            width: 0,
            height: 0,
            loading: true,
            nodata: false,
            wordBreak: true,
            bordered: false,
            striped: true,
            rowSelection: null,
            rowClassName: "",
            pagination: null,
            size: "",
            columns: [],
            expandAllRows: false,
            showSetting: false,
            footer: false,
            title: false,
            scrollOption: {},
            data: [],
            nodataOption: {},
            onExpandRow: function onExpandRow() {},
            onChange: function onChange() {},
            onSelect: function onSelect() {},
            onSetting: function onSetting() {},
            onRowClick: function onRowClick() {},
            components: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).call(this, options));
        var that = _this;
        $(window).resize(function() {
            that.resizeWidth();
        });
        _this.resizeWidth();
        return _this;
    }
    createClass(Tables, [ {
        key: "getColumns",
        value: function getColumns() {
            var _this2 = this;
            this.columns = [];
            var opts = this.options, oldWidth = this.tableRealWidth;
            this.columnsObj = this.columnsObj || {};
            if (opts.columns) {
                this.allColumns = typeof opts.columns == "function" ? opts.columns(this) : opts.columns;
                this.allColumns.forEach(function(col, index) {
                    col.fieldName = col.fieldName || col.dataIndex;
                    col.key = col.key || col.fieldName;
                });
                this.columns = Array.from(this.allColumns);
            }
            this.tableRealWidth = this.options.rowSelection ? 30 : 0;
            if (this.columns.length) {
                this.columns.forEach(function(col, index) {
                    if (_this2.columnsObj[col.key]) {
                        Object.assign(col, _this2.columnsObj[col.key]);
                    } else {
                        _this2.columnsObj[col.key] = col;
                    }
                    if (!col.isHide) {
                        _this2.tableRealWidth += parseInt(col.width || 200);
                    }
                });
                this.columns = this.columns.filter(function(col) {
                    return !col.isHide;
                });
            }
            if (this.tableRealWidth !== oldWidth) {
                this.resizeWidth();
            }
            return this.columns;
        }
    }, {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.style.height && !opts.height) {
                opts.height = opts.style.height;
            }
            if (!opts.style.height && opts.height) {
                opts.style.height = opts.height;
            }
            if (!opts.data.length) {
                this.addCom(Object.assign({
                    el: "#nodata_" + opts.vid
                }), Lego.config.nodataOption || {}, opts.nodataOption);
            }
            if (opts.pagination) {
                opts.pagination.el = "#pagination_" + opts.vid;
                if (this.oldTotalCount !== undefined && this.oldCurrent !== undefined && Lego.getView(opts.pagination.el)) {
                    if (this.oldTotalCount !== opts.pagination.totalCount || this.oldCurrent !== opts.pagination.current) {
                        opts.pagination.context = this;
                        Lego.create(Pagination, opts.pagination);
                    }
                } else {
                    this.addCom(opts.pagination);
                }
                this.oldTotalCount = opts.pagination.totalCount || 0;
                this.oldCurrent = opts.pagination.current || 1;
            }
        }
    }, {
        key: "resizeWidth",
        value: function resizeWidth() {
            var tableWidth = $(this.options.el).parent().width();
            this.options.width = this.tableRealWidth >= tableWidth ? this.tableRealWidth : 0;
        }
    }, {
        key: "render",
        value: function render() {
            this.getColumns();
            var opts = this.options;
            var vDom = hx(_templateObject$33, opts.size ? "table-" + opts.size : "", opts.height ? "lego-table-fixed-header" : "", opts.bordered ? "lego-table-bordered" : "", opts.wordBreak ? "lego-nowrap" : "", opts.vid, opts.title ? hx(_templateObject2$29, val(opts.title)) : "", opts.height ? hx(_templateObject3$19, opts.bordered ? "table-bordered" : "", opts.striped ? "table-striped" : "", this._renderColgroup(), this._renderHeader()) : "", opts.nodata ? hx(_templateObject4$13, opts.vid) : hx(_templateObject5$11), opts.bordered ? "table-bordered" : "", opts.striped ? "table-striped" : "", this._renderColgroup(), !opts.height ? this._renderHeader() : "", this._renderBodyer(), !opts.nodata ? hx(_templateObject6$6, opts.footer ? val(opts.footer) : opts.pagination && !opts.nodata ? hx(_templateObject7$4, opts.vid) : "") : "", opts.showSetting ? hx(_templateObject8$4) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, columns = this.columns, header = this.$(".lego-table-header");
            this.$(".lego-table-body").css({
                bottom: opts.pagination ? 48 : 0,
                minHeight: opts.nodata ? 120 : 0
            });
            this.$(".table").width(opts.width || "100%");
            if (!opts.title) {
                this.$(".lego-table-content").css({
                    paddingBottom: 0
                });
            }
            this.$("colgroup").each(function(index, el) {
                $(el).children("col").each(function(i, e) {
                    if (opts.rowSelection && i == 0) {
                        $(e).width(30);
                    } else {
                        if (i !== columns.length - 1 || opts.width) {
                            if (columns[i]) {
                                $(e).width(parseInt(columns[i].width));
                            }
                        }
                    }
                });
            });
            this.$(".lego-table-body > .scrollbar").scroll(function() {
                header.scrollLeft($(this).scrollLeft());
            });
        }
    }, {
        key: "_getRowKey",
        value: function _getRowKey() {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.rowKey = this.rowKey || 0;
            this.rowKey++;
            return str + this.rowKey;
        }
    }, {
        key: "_renderColgroup",
        value: function _renderColgroup() {
            var _this3 = this;
            var vDom = hx(_templateObject9$2, this.options.rowSelection ? hx(_templateObject10$1) : "", this.columns.map(function(col, index) {
                var w = index !== _this3.columns.length - 1 || _this3.options.width ? "width:" + (typeof col.width == "number" ? col.width + "px" : col.width.toString()) : "";
                return hx(_templateObject11$1, w);
            }));
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var isHarf = arguments[2];
            var opts = this.options, theType = opts.rowSelection.type || "checkbox", isCheckbox = theType == "checkbox", that = this;
            var isChecked = row._selected || tagName === "th" && this.getSelectedStatus() === 1;
            function getHx() {
                return hx(_templateObject12, theType, tagName !== "th" || isCheckbox ? hx(_templateObject13, theType, row.disabled ? "lego-" + theType + "-disabled" : "", isChecked ? "lego-" + theType + "-checked lego-" + theType + "-checked-1" : isHarf ? "lego-" + theType + "-indeterminate" : "", theType, theType, row.disabled ? "disabled" : "", theType, isChecked ? "on" : "") : "");
            }
            var vDom = hx(_templateObject14, tagName == "th" ? hx(_templateObject15, getHx()) : hx(_templateObject16, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this4 = this;
            var opts = this.options;
            var vDom = hx(_templateObject17, opts.rowSelection ? this._renderSelection({}, "th", this.getSelectedStatus() === 2 ? true : false) : "", this.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject18, col.sorter ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this4._renderSorter(col) : "", _this4._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this5 = this;
            var opts = this.options;
            if (!opts.data) {
                return;
            }
            var vDom = hx(_templateObject19, opts.data.map(function(row, i) {
                row.key = row.id || _this5._getRowKey("row_");
                return hx(_templateObject20, row.className || opts.rowClassName, row.key, opts.rowSelection ? _this5._renderSelection(row, "td") : "", _this5.columns.map(function(col) {
                    var fieldName = row[col.fieldName || col.dataIndex];
                    return !col.isHide ? hx(_templateObject21, typeof col.format === "function" ? col.format(fieldName, row, col) : fieldName) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = this.options;
            var vDom = hx(_templateObject22, col.sortOrder == "asc" ? "on" : "off", col.sortOrder == "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject23) : "";
        }
    }, {
        key: "clickSorter",
        value: function clickSorter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.closest("th").attr("id"), col = this.columnsObj[key], oldCol = this.columns.find(function(item) {
                return item.key == key;
            });
            if (col) {
                col.sortOrder = col.sortOrder || "";
                switch (col.sortOrder) {
                  case "asc":
                    col.sortOrder = "desc";
                    break;

                  case "desc":
                    col.sortOrder = "";
                    break;

                  case "":
                    col.sortOrder = "asc";
                    break;
                }
                this.refresh();
                if (oldCol) {
                    if (typeof oldCol.sorter === "function") {
                        oldCol.sorter(this, col, event);
                    }
                }
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = this.$el.find("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key == rowKey;
            });
            var col = this.columns.find(function(val) {
                return val.key == colKey;
            });
            if (row && col) {
                if (this.options.onRowClick) {
                    if (typeof col.onRowClick == "function") {
                        col.onRowClick(this, row, event);
                    }
                }
                if (col.onCellClick) {
                    if (typeof col.onCellClick == "function") {
                        col.onCellClick(this, row, col, event);
                    }
                }
            }
        }
    }, {
        key: "clickFilter",
        value: function clickFilter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), colKey = target.closest("th").attr("id"), col = this.columns.find(function(val) {
                return val.key == colKey;
            });
            if (col) {
                if (typeof col.filter == "function") {
                    col.filter(this, col, event);
                }
            }
        }
    }, {
        key: "clickSetting",
        value: function clickSetting(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), theId = "setting-" + this.options.vid;
            if (typeof this.options.onSetting == "function") {
                this.options.onSetting(this, event);
            }
        }
    }, {
        key: "selectOne",
        value: function selectOne(event) {
            var target = $(event.currentTarget), trEl = target.closest("tr"), id = trEl.attr("id"), options = this.options, that = this;
            if (options.rowSelection) {
                if (options.rowSelection.type == "radio") {
                    options.data.forEach(function(item) {
                        item._selected = item.key == id ? true : false;
                    });
                } else {
                    var row = options.data.find(function(value, index, arr) {
                        return value.key == id;
                    });
                    if (row) {
                        row._selected = !row._selected;
                    }
                }
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value._selected === true;
                });
                if (typeof options.onSelect == "function") {
                    options.onSelect(this, this.getSelectedStatus() ? Array.from(hasSelectedArr) : []);
                }
                this.refresh();
            }
        }
    }, {
        key: "getSelectedStatus",
        value: function getSelectedStatus() {
            if (Array.isArray(this.options.data)) {
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value._selected === true;
                });
                this.selectedAll = hasSelectedArr.length ? hasSelectedArr.length == this.options.data.length ? 1 : hasSelectedArr.length ? 2 : 0 : 0;
                return this.selectedAll;
            } else {
                return [];
            }
        }
    }, {
        key: "selectAll",
        value: function selectAll(event) {
            var _this6 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? 1 : 0;
                    _this6.selectedAll = isSelected;
                    _this6.options.data.map(function(row, index) {
                        row._selected = !!isSelected;
                    });
                    if (typeof _this6.options.onSelect == "function") {
                        _this6.options.onSelect(_this6, isSelected ? Array.from(_this6.options.data) : []);
                    }
                    _this6.refresh();
                })();
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            if (Array.isArray(this.options.data)) {
                return this.options.data.filter(function(row) {
                    return row._selected == true;
                });
            }
            return [];
        }
    } ]);
    return Tables;
}(Lego.UI.Baseview);

Lego.components("tables", Tables);

var _templateObject$34 = taggedTemplateLiteral([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

var Tree = function(_Lego$UI$Baseview) {
    inherits(Tree, _Lego$UI$Baseview);
    function Tree() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tree);
        var options = {
            disSelect: "",
            onlySelect: "",
            setting: {},
            value: [],
            data: [],
            onChecked: function onChecked() {},
            onClick: function onClick() {}
        };
        $.extend(true, options, opts);
        return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    createClass(Tree, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            function selectOrNo(treeNode) {
                if (opts.disSelect) {
                    if (_typeof(opts.disSelect) == "object") {
                        if (treeNode[Object.keys(opts.disSelect)[0]] == opts.disSelect[Object.keys(opts.disSelect)[0]]) {
                            return false;
                        }
                    } else {
                        if (Object.keys(treeNode).includes(opts.disSelect)) {
                            return false;
                        }
                    }
                }
                if (opts.onlySelect) {
                    if (_typeof(opts.onlySelect) == "object") {
                        if (treeNode[Object.keys(opts.onlySelect)[0]] !== opts.onlySelect[Object.keys(opts.onlySelect)[0]]) {
                            return false;
                        }
                    } else {
                        if (!Object.keys(treeNode).includes(opts.onlySelect)) {
                            return false;
                        }
                    }
                }
                return true;
            }
            function selectResult(treeId, treeNode) {
                var treeObj = $.fn.zTree.getZTreeObj(treeId), nodes = treeObj.getCheckedNodes(true), result = nodes.filter(function(node) {
                    return selectOrNo(node);
                });
                var newValue = [];
                result.forEach(function(val, index) {
                    newValue.push(Object.assign({
                        key: val.id,
                        value: val.name
                    }, val));
                });
                if (typeof opts.onChecked == "function") {
                    opts.onChecked(that, newValue, treeNode);
                }
            }
            if (opts.setting.check) {
                opts.setting.check = $.extend(true, {
                    enable: true,
                    chkboxType: {
                        Y: "",
                        N: ""
                    }
                }, opts.setting.check || {});
                opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                    onCheck: function onCheck(event, treeId, treeNode) {
                        selectResult(treeId, treeNode);
                    },
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) {
                            return false;
                        }
                        var treeObj = $.fn.zTree.getZTreeObj(treeId);
                        treeObj.checkNode(treeNode, null, true);
                        selectResult(treeId, treeNode);
                    }
                });
            } else {
                opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) {
                            return false;
                        }
                        if (typeof opts.onClick == "function") {
                            opts.onClick(that, Object.assign({
                                key: treeNode.id,
                                value: treeNode.name
                            }, treeNode));
                        }
                    }
                });
            }
            if (opts.data.length) {
                this.renderTree();
            }
        }
    }, {
        key: "render",
        value: function render() {
            return hx(_templateObject$34);
        }
    }, {
        key: "renderTree",
        value: function renderTree() {
            var opts = this.options, treeObj = $.fn.zTree.getZTreeObj(opts.id);
            if (treeObj) {
                treeObj.destroy();
            }
            $.fn.zTree.init(this.$el, opts.setting, opts.data);
        }
    }, {
        key: "search",
        value: function search() {
            var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.$("li").hide();
            if (keyword == "") {
                this.$("li").show();
            } else {
                this.$("span.node_name").each(function(index, el) {
                    if ($(el).text().indexOf(keyword) > -1) {
                        $(el).parents("li").show();
                    }
                });
            }
        }
    }, {
        key: "clearChecked",
        value: function clearChecked(key, value) {
            var opts = this.options, ztree$$1 = $.fn.zTree.getZTreeObj(opts.id), node = ztree$$1.getNodeByParam(key, value, null);
            if (node) {
                ztree$$1.checkNode(node, false, false);
            }
        }
    } ]);
    return Tree;
}(Lego.UI.Baseview);

Lego.components("tree", Tree);

var _templateObject$35 = taggedTemplateLiteral([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2$30 = taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3$20 = taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4$14 = taggedTemplateLiteral([ '<div class="lego-search-container"><search id="search_', '"></search></div>' ], [ '<div class="lego-search-container"><search id="search_', '"></search></div>' ]);

var _templateObject5$12 = taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ]);

var Treeselect = function(_Lego$UI$Baseview) {
    inherits(Treeselect, _Lego$UI$Baseview);
    function Treeselect() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Treeselect);
        var options = {
            events: {
                click: function click(event) {
                    event.stopPropagation();
                }
            },
            name: "",
            value: [],
            data: [],
            multiple: false,
            eventName: "click",
            scrollbar: {},
            fieldName: "key",
            disSelect: "",
            onlySelect: "",
            tags: false,
            placeholder: "",
            searchPlaceholder: "搜索",
            inputAble: false,
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            treeSetting: {},
            treeChkStyle: "",
            size: "",
            showSearch: false,
            disabled: false,
            splitString: "",
            clickAndClose: opts.multiple ? false : true,
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {}
        };
        Object.assign(options, opts);
        options.value = val(options.value);
        if (!Array.isArray(options.value)) {
            options.value = [ options.value ];
        }
        return possibleConstructorReturn(this, (Treeselect.__proto__ || Object.getPrototypeOf(Treeselect)).call(this, options));
    }
    createClass(Treeselect, [ {
        key: "components",
        value: function components() {
            var _this2 = this;
            var opts = this.options, that = this, treeSetting = $.extend(true, {
                data: {
                    simpleData: {
                        enable: true
                    }
                }
            }, opts.treeSetting);
            if (opts.multiple) {
                treeSetting = $.extend(true, {
                    check: {
                        enable: true,
                        chkboxType: {
                            Y: "ps",
                            N: "ps"
                        }
                    }
                }, opts.treeSetting);
                if (opts.treeChkStyle) {
                    treeSetting.check.chkStyle = opts.treeChkStyle;
                }
            }
            if (opts.value.length) {
                opts.value.forEach(function(item, index) {
                    item.selected = true;
                });
            }
            if (opts.data.length) {
                this.addCom({
                    el: "#tree_" + opts.vid,
                    disSelect: opts.disSelect,
                    onlySelect: opts.onlySelect,
                    setting: treeSetting,
                    value: Array.from(opts.value),
                    data: opts.data || [],
                    onChecked: function onChecked(self, result, treeNode) {
                        if (treeSetting.check) {
                            if (result.length) {
                                opts.value = [];
                                result.forEach(function(val, index) {
                                    if (val.key !== "0") {
                                        val.selected = true;
                                        opts.value.push(Object.assign({}, val));
                                    }
                                });
                            } else {
                                opts.value = [];
                            }
                        }
                        opts.onChange(that, result);
                        that.refresh();
                    },
                    onClick: function onClick(self) {
                        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        opts.value.forEach(function(item, index) {
                            item.selected = false;
                        });
                        opts.value = [ Object.assign({
                            key: result.key,
                            value: result.value,
                            type: result.type,
                            selected: true
                        }, result) ];
                        opts.onChange(that, result);
                        if (opts.clickAndClose) {
                            that.close();
                        }
                    },
                    disabled: opts.disabled || false
                });
                if (opts.showSearch) {
                    (function() {
                        var searchFun = function searchFun(self, result) {
                            var treeView = Lego.getView("#tree_" + opts.vid);
                            if (treeView) {
                                treeView.search(result.keyword);
                            }
                        };
                        _this2.addCom({
                            el: "#search_" + opts.vid,
                            placeholder: opts.searchPlaceholder,
                            size: "sm",
                            onKeyup: function onKeyup(self, result) {
                                searchFun(self, result);
                            },
                            onSearch: function onSearch(self, result) {
                                searchFun(self, result);
                            }
                        });
                    })();
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = "";
            function getTags(data) {
                if (data.length) {
                    return hx(_templateObject$35, data.map(function(item) {
                        return hx(_templateObject2$30, item.key, item.value, item.value);
                    }));
                } else {
                    return "";
                }
            }
            var theValueArr = [], realValueArr = [];
            if (opts.value.length) {
                theValueArr = opts.value.map(function(item) {
                    return item.value;
                });
                realValueArr = opts.value.map(function(item) {
                    return item[opts.fieldName];
                });
            }
            if (!opts.multiple) {
                vDom = hx(_templateObject3$20, opts.vid, opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.showSearch ? hx(_templateObject4$14, opts.vid) : "", opts.vid);
            } else {
                vDom = hx(_templateObject5$12, opts.vid, theValueArr.length ? "select-hasValue" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.showSearch ? hx(_templateObject4$14, opts.vid) : "", opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, trigger = this.$("#select-" + opts.vid), tagsDivEl = this.$(".select-tags-div"), treeEl = this.$("#tree_" + opts.vid), _eventName = "click.dropdown_" + opts.vid, that = this;
            if (!opts.inputAble) {
                this.$(".select-input").attr("readonly", "readonly");
            }
            if (!opts.disabled) {
                var handler = function handler(event) {
                    if (that.$(".dropdown-menu").css("display") == "none") {
                        that.show();
                    } else {
                        that.close();
                    }
                };
                if (opts.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                        that.close();
                    });
                    trigger.off(_eventName).on(_eventName, handler);
                } else {
                    trigger.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
                this.$(".select-tag-close").off(_eventName).on(_eventName, this.clickItemClose.bind(this));
                this.$(".dropdown-menu").off(_eventName).on(_eventName, function(event) {
                    event.stopPropagation();
                }).width("100%");
                if (opts.dropdownHeight) {
                    this.$(".dropdown-menu > .scrollbar").css({
                        maxHeight: opts.dropdownHeight,
                        overflow: "auto"
                    });
                }
            }
        }
    }, {
        key: "show",
        value: function show(event) {
            var opts = this.options;
            this.container = this.container || opts.context.$("#select-" + opts.vid);
            Lego.UI.Util.getDirection(this.container, this.$(".dropdown-menu"));
            this.$(".dropdown-menu").slideDown("fast");
        }
    }, {
        key: "close",
        value: function close(event) {
            this.$(".dropdown-menu").slideUp("fast");
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title"), treeView = $.fn.zTree.getZTreeObj("tree_" + this.options.vid);
            this.options.value.forEach(function(item) {
                if (item.key === key) {
                    item.selected = false;
                }
            });
            this.getValue();
            this.refresh();
            if (treeView) {
                var treeNode = treeView.getNodeByParam("id", key, null);
                if (treeNode) {
                    treeView.checkNode(treeNode, false, null, true);
                }
            }
            if (typeof this.options.onDeselect === "function") {
                this.options.onDeselect(this, {
                    key: key,
                    value: value
                });
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            this.options.value = this.options.value.filter(function(item) {
                return item.selected === true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Treeselect;
}(Lego.UI.Baseview);

Lego.components("treeselect", Treeselect);

var _templateObject$36 = taggedTemplateLiteral([ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5>\n                        ', "\n                        <span>", "</span>\n                    </h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="transfer_tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="transfer_list_', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-right"></i>\n            <i class="anticon anticon-left"></i>\n        </div>\n        ' ], [ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5>\n                        ', "\n                        <span>", "</span>\n                    </h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="transfer_tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="transfer_list_', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-right"></i>\n            <i class="anticon anticon-left"></i>\n        </div>\n        ' ]);

var _templateObject2$31 = taggedTemplateLiteral([ '<button class="btn btn-link float-right">搜索</button>' ], [ '<button class="btn btn-link float-right">搜索</button>' ]);

var _templateObject3$21 = taggedTemplateLiteral([ '<search id="transfer_search_', '"></search>' ], [ '<search id="transfer_search_', '"></search>' ]);

var Transfer = function(_Lego$UI$Baseview) {
    inherits(Transfer, _Lego$UI$Baseview);
    function Transfer() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Transfer);
        var options = {
            events: {
                "click h5 > button": "showSearch"
            },
            titles: [],
            value: [],
            data: [],
            width: 450,
            height: 400,
            treeSetting: {},
            scrollbar: {},
            simpleData: true,
            filterParentNode: false,
            showSearch: false,
            searchPlaceholder: "请输入搜索内容",
            notFoundContent: "列表为空",
            onChange: function onChange() {},
            onSearch: null
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, options));
    }
    createClass(Transfer, [ {
        key: "_mergeValue",
        value: function _mergeValue() {
            var opts = this.options;
            if (opts.value.length) {
                opts.data.forEach(function(item, index) {
                    var hasOne = opts.value.find(function(val) {
                        return val.key == (item.key || item.id);
                    });
                    if (hasOne) {
                        item.checked = true;
                    }
                });
            }
        }
    }, {
        key: "dataReady",
        value: function dataReady() {
            this._mergeValue();
        }
    }, {
        key: "components",
        value: function components() {
            var opts = this.options, that = this, listValue = [];
            function loopItem(data) {
                that._mergeValue();
                data.map(function(item) {
                    if (item.checked) {
                        item.key = item.id || item.key;
                        item.value = item.name || item.name;
                        listValue.push($.extend(true, {}, item));
                        if (item.children) {
                            loopItem(item.children);
                        }
                    }
                });
                if (opts.filterParentNode) {
                    listValue = listValue.filter(function(item) {
                        return !item.isParent;
                    });
                }
            }
            if (opts.data.length) {
                loopItem(opts.data);
                this.addCom([ {
                    el: "#transfer_tree_" + opts.vid,
                    setting: $.extend(true, {
                        check: {
                            enable: true,
                            chkboxType: {
                                Y: "ps",
                                N: "ps"
                            }
                        }
                    }, opts.treeSetting || {}),
                    onChecked: function onChecked(self, result) {
                        var listView = Lego.getView("#transfer_list_" + opts.vid);
                        if (listView) {
                            if (opts.filterParentNode) {
                                result = result.filter(function(item) {
                                    return !item.isParent;
                                });
                            }
                            listView.options.data = Array.from(result);
                            listView.refresh();
                        }
                        if (typeof opts.onChange === "function") {
                            opts.onChange(this.context, result);
                        }
                    },
                    data: opts.data
                }, {
                    el: "#transfer_list_" + opts.vid,
                    removeAble: true,
                    onClose: function onClose(self, result) {
                        var treeView = $.fn.zTree.getZTreeObj("transfer_tree_" + opts.vid);
                        if (treeView) {
                            var treeNode = treeView.getNodeByParam("id", result, null);
                            treeView.checkNode(treeNode, !treeNode.checked, true);
                            if (typeof opts.onChange === "function") {
                                opts.onChange(this.context, this.data);
                            }
                        }
                    },
                    data: listValue
                } ]);
                if (opts.showSearch) {
                    this.addCom({
                        el: "#transfer_search_" + opts.vid,
                        style: {
                            display: opts.showSearch == "fixed" ? "table" : "none"
                        },
                        size: "sm",
                        onKeyup: function onKeyup(self, result, event) {
                            if (typeof opts.onSearch == "function") {
                                opts.onSearch(that, result);
                            } else {
                                var treeView = Lego.getView("#transfer_tree_" + opts.vid);
                                if (treeView) {
                                    treeView.search(result.keyword);
                                }
                            }
                        }
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$36, opts.showSearch && opts.showSearch !== "fixed" ? hx(_templateObject2$31) : "", val(opts.titles[0]), opts.showSearch ? hx(_templateObject3$21, opts.vid) : "", opts.vid, val(opts.titles[1]), opts.vid);
            return vDom;
        }
    }, {
        key: "showSearch",
        value: function showSearch(event) {
            var target = $(event.currentTarget);
            this.$(".lego-search").toggle(0, function() {
                if (target.text() == "取消") {
                    target.text("搜索");
                    $(this).next().css({
                        paddingBottom: 40
                    });
                } else {
                    target.text("取消");
                    $(this).next().css({
                        paddingBottom: 74
                    });
                }
            });
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            this.$el.css({
                width: opts.width,
                height: opts.height
            });
            this.$("#transfer_search_" + opts.vid).next().css({
                paddingBottom: 74
            });
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var listView = Lego.getView("#transfer_list_" + this.options.vid);
            if (listView) {
                return listView.options.data;
            }
            return null;
        }
    } ]);
    return Transfer;
}(Lego.UI.Baseview);

Lego.components("transfer", Transfer);

var _templateObject$37 = taggedTemplateLiteral([ '\n        <div class="lego-tags">\n            <div class="lego-tags-list">\n                <div class="', '">\n                ', "\n                ", "\n                ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-tags">\n            <div class="lego-tags-list">\n                <div class="', '">\n                ', "\n                ", "\n                ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2$32 = taggedTemplateLiteral([ '\n                    <div class="lego-tag ', '" id="', '"\n                    title="', '" onclick=', '>\n                        <div class="lego-tag-text">\n                            <span>', "</span>\n                            ", "\n                        </div>\n                    </div>\n                " ], [ '\n                    <div class="lego-tag ', '" id="', '"\n                    title="', '" onclick=', '>\n                        <div class="lego-tag-text">\n                            <span>', "</span>\n                            ", "\n                        </div>\n                    </div>\n                " ]);

var _templateObject3$22 = taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ], [ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ]);

var _templateObject4$15 = taggedTemplateLiteral([ '<buttons id="add_', '"></buttons>' ], [ '<buttons id="add_', '"></buttons>' ]);

var _templateObject5$13 = taggedTemplateLiteral([ '<buttons id="clean_', '"></buttons>' ], [ '<buttons id="clean_', '"></buttons>' ]);

var Tags = function(_Lego$UI$Baseview) {
    inherits(Tags, _Lego$UI$Baseview);
    function Tags() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tags);
        var options = {
            events: {
                click: function click(event) {
                    event.stopPropagation();
                }
            },
            color: "",
            deleteAble: true,
            readonly: false,
            showMoreBtn: false,
            showAddBtn: true,
            showCleanBtn: false,
            addBtnText: "添加标签 +",
            addBtnOption: {},
            cleanBtnText: "清空",
            cleanBtnOption: {},
            onSelected: function onSelected() {},
            onDelete: function onDelete() {},
            onAdd: function onAdd() {},
            onClean: function onClean() {},
            data: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, options));
    }
    createClass(Tags, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!opts.readonly) {
                this.addCom($.extend({
                    el: "#add_" + opts.vid,
                    text: opts.addBtnText,
                    type: "dashed",
                    size: "sm",
                    onClick: function onClick(self, event) {
                        event.stopPropagation();
                        if (typeof opts.onAdd == "function") {
                            opts.onAdd(that, event);
                        }
                    }
                }, opts.addBtnOption));
                if (opts.showCleanBtn) {
                    this.addCom($.extend({
                        el: "#clean_" + opts.vid,
                        text: opts.cleanBtnText,
                        size: "sm",
                        style: {
                            marginLeft: 5
                        },
                        onClick: function onClick(self, event) {
                            event.stopPropagation();
                            if (typeof opts.onClean == "function") {
                                opts.onClean(that, event);
                            }
                        }
                    }, opts.cleanBtnOption));
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;
            var opts = this.options;
            this.vDom = hx(_templateObject$37, opts.showMoreBtn ? "lego-tags-div" : "", opts.data.map(function(item) {
                return hx(_templateObject2$32, item.selected ? "lego-tag-" + item.selected : "", item.key, _typeof(item.value) !== "object" ? item.value : "", _this2.onSelected.bind(_this2), item.value, opts.deleteAble ? hx(_templateObject3$22, _this2.onDelete.bind(_this2)) : "");
            }), !opts.readonly && opts.showAddBtn ? hx(_templateObject4$15, opts.vid) : "", !opts.readonly && opts.showCleanBtn ? hx(_templateObject5$13, opts.vid) : "");
            return this.vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options, _eventName = "click.tagslist_" + opts.vid;
            $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                opts.open = false;
            });
        }
    }, {
        key: "addItem",
        value: function addItem() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = this.options;
            var hasOne = opts.data.find(function(item) {
                return item.key == obj.key;
            });
            if (!hasOne) {
                opts.data.push(obj);
                this.refresh();
            }
        }
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            var opts = this.options;
            opts.data = opts.data.filter(function(item) {
                return item.key ? item.key.toString() !== id : false;
            });
            this.refresh();
        }
    }, {
        key: "cleanAll",
        value: function cleanAll() {
            this.options.data = [];
            this.options.open = false;
            this.refresh();
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.data;
        }
    }, {
        key: "onDelete",
        value: function onDelete(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.parent().parent().attr("id");
            if (typeof opts.onDelete == "function") {
                opts.onDelete(this, id);
            }
        }
    }, {
        key: "onSelected",
        value: function onSelected(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.attr("id"), item = opts.data.find(function(item) {
                return item.key.toString() == id;
            });
            if (typeof opts.onSelected == "function") {
                opts.onSelected(this, item);
            }
        }
    }, {
        key: "showMore",
        value: function showMore(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options;
            opts.open = !opts.open;
        }
    } ]);
    return Tags;
}(Lego.UI.Baseview);

Lego.components("tags", Tags);

exports.Basedata = Basedata;

exports.Baseview = Baseview;

exports.Baseupload = UploadView;

exports.Util = Util;

exports.Alert = Alert;

exports.Avatar = Avatar;

exports.Badge = Badge;

exports.Buttons = Buttons;

exports.Btngroup = Btngroup;

exports.Btntoolbar = Btntoolbar;

exports.Chkgroup = Chkgroup;

exports.Collapse = fun;

exports.Colorpicker = ComView;

exports.Dropdown = Dropdown;

exports.Dropdownbtn = Dropdownbtn;

exports.Datepicker = Datepicker;

exports.Editcom = Editcom;

exports.Forms = Forms;

exports.Facial = Facial;

exports.Grid = GridView;

exports.Inputs = Inputs;

exports.Listgroup = Listgroup;

exports.Loading = Loading;

exports.Modal = theModal;

exports.Message = Message;

exports.Navs = Navs;

exports.Notification = Notification;

exports.Nodata = Nodata;

exports.Popover = fun$2;

exports.Progressbar = Progressbar;

exports.Pagination = Pagination;

exports.Permis = permisObj;

exports.Reply = Reply;

exports.Rating = Rating;

exports.Search = Search;

exports.Selects = Selects;

exports.Steps = Steps;

exports.Switchs = Switchs;

exports.Slider = SliderView;

exports.Tabs = Tabs;

exports.Tables = Tables;

exports.Tooltip = fun$4;

exports.Tree = Tree;

exports.Treeselect = Treeselect;

exports.Transfer = Transfer;

exports.Tags = Tags;

exports.Upload = Upload;
