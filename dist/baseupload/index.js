/**
 * baseupload.js v0.12.17
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
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

module.exports = UploadView;
