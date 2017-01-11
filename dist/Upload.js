/**
 * upload.js v0.2.1
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var localresizeimg = _interopDefault(require("localresizeimg-cjs"));

var _createClass$2 = function() {
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

function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$2(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
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
}

var UploadView = function(_Lego$View) {
    _inherits$2(UploadView, _Lego$View);
    function UploadView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, UploadView);
        var options = {
            id: "",
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
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$2(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).call(this, options));
        _this.xhr = createXMLHTTPRequest();
        _this.startDate = 0;
        _this.form = null;
        _this.progressbar = null;
        function createXMLHTTPRequest() {
            var xmlHttpRequest;
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
            _this.uploadInit();
            if (_this.options.isAuto) _this.start();
        }
        return _this;
    }
    _createClass$2(UploadView, [ {
        key: "uploadInit",
        value: function uploadInit() {
            var _this2 = this;
            var taking = 0, file = this.options.file, params = this.options.params;
            this.xhr.crossDomain = true;
            this.id = this.options.file ? file.id : this.options.id ? this.options.id : Lego.randomKey(32);
            this.form = new FormData();
            this.form.append("file", file);
            if (!Object.values(params).length) {
                for (var paramOne in params) {
                    this.form.append(paramOne, params[paramOne]);
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
                    if (_this2.progressbar) {
                        _this2.progressbar.options.percent = percent;
                    }
                }
                if (typeof _this2.options.onProgress == "function") {
                    _this2.options.onProgress(_this2);
                }
            }, false);
            this.xhr.addEventListener("loadstart", function(event) {
                if (typeof _this2.options.onBegin == "function") {
                    _this2.options.onBegin(file, _this2);
                }
            }, false);
            this.xhr.addEventListener("load", function(event) {
                if (_this2.xhr.readyState == 4 && _this2.xhr.status == 200 && _this2.xhr.responseText != "") {
                    var resp = JSON.parse(_this2.xhr.response);
                    Object.assign(_this2.options.file, resp);
                    if (_this2.options.params.key) {
                        _this2.options.file.url = _this2.options.downloadUri + _this2.options.key;
                    }
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
            for (var key in this.options.headers) {
                this.xhr.setRequestHeader(key, this.options.headers[key]);
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

var _createClass$3 = function() {
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

var _templateObject$2 = _taggedTemplateLiteral$2([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);

var _templateObject2$2 = _taggedTemplateLiteral$2([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);

function _taggedTemplateLiteral$2(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$3(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
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
}

var Progressbar = function(_Lego$UI$Baseview) {
    _inherits$3(Progressbar, _Lego$UI$Baseview);
    function Progressbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$3(this, Progressbar);
        var options = {
            type: "",
            status: "",
            showInfo: true,
            percent: 0,
            strokeWidth: 6
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$3(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, options));
    }
    _createClass$3(Progressbar, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$2, options.showInfo ? hx(_templateObject2$2, this.format(options.percent)) : "", options.status ? options.status : "primary", options.percent);
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

var _createClass$1 = function() {
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn">取消</a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="cancelbtn">取消</a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3 = _taggedTemplateLiteral$1([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', '\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </div>\n                    ', '\n                </h4>\n                <small style="display:none;">\n                    <cite>', "</cite>\n                    <time></time>\n                </small>\n            </div>\n            " ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        ', '\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </div>\n                    ', '\n                </h4>\n                <small style="display:none;">\n                    <cite>', "</cite>\n                    <time></time>\n                </small>\n            </div>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral$1([ '<a href="javascript:;" class="close" data-id="', '" data-hash="', '">删除</a>' ], [ '<a href="javascript:;" class="close" data-id="', '" data-hash="', '">删除</a>' ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
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
}

var UploadItem = function(_UploadBase) {
    _inherits$1(UploadItem, _UploadBase);
    function UploadItem() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, UploadItem);
        var options = {
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
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).call(this, options));
        if (_this.options.percent < 100) {
            _this.progressbar = Lego.create(Progressbar, {
                el: "#progressbar_" + options.vid,
                showInfo: false,
                status: "success"
            });
        }
        return _this;
    }
    _createClass$1(UploadItem, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$1, Lego.Util.getFileIcon(options.file.name), options.percent < 100 ? hx(_templateObject2$1, val(options.file.name), "progressbar_" + options.vid) : hx(_templateObject3, options.percent == 100 ? hx(_templateObject4, val(options.id), val(options.file.hash)) : "", val(options.file.url), val(options.file.name), val(options.file.name), Lego.Util.convertByteUnit(options.file.size)));
            return vDom;
        }
    }, {
        key: "onCancel",
        value: function onCancel(event) {
            event.stopPropagation();
            this.cancel();
            this.remove();
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), id = target.data("id"), hash = target.data("hash");
            if (this.options.onRemove) {
                return this.options.onRemove(id, hash);
            }
            this.remove();
        }
    } ]);
    return UploadItem;
}(UploadView);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function() {
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="upload upload-', '">\n            <button class="btn btn-secondary addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', '\n            </button>\n            <input type="hidden" value="', '" name="', '" class="upload-value">\n            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="upload-container"></div>' ], [ '<div class="upload-container"></div>' ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}

var Upload = function(_Lego$UI$Baseview) {
    _inherits(Upload, _Lego$UI$Baseview);
    function Upload() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Upload);
        var options = {
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
            data: opts.token,
            value: [],
            onAddFile: function onAddFile() {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, options));
        _this.reset();
        _this.$(".fileInput").on("change", function(event) {
            var target = $(event.currentTarget)[0];
            _this.uploadInit(target.files);
        });
        if (_this.options.value.length) {
            _this.options.value.forEach(function(item, index) {
                item.percent = 100;
                _this.showItem(item);
            });
        }
        return _this;
    }
    _createClass(Upload, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = "";
            vDom = hx(_templateObject, val(options.type), options.disabled ? "disabled" : "", val(options.text), options.value.join(","), val(options.name), val(options.accept), options.showUploadList ? hx(_templateObject2) : "");
            return options.template ? options.template : vDom;
        }
    }, {
        key: "uploadInit",
        value: function uploadInit(files) {
            var uploadFiles = [];
            if ((typeof files === "undefined" ? "undefined" : _typeof(files)) == "object" && files[0]) {
                uploadFiles = Array.prototype.slice.call(files, 0);
            } else {
                uploadFiles = [ files ];
            }
            var that = this, options = this.options, filesCount = uploadFiles.length, maxFilesCount = options.maxFilesCount;
            if (filesCount) {
                if (filesCount > maxFilesCount) {
                    Lego.UI.notification("warning", "只能上传" + maxFilesCount + "张图片");
                    return;
                }
                this.fileList.concat(uploadFiles);
                this.fileList = this.fileList.slice(0, maxFilesCount);
                if (typeof options.onAddFile == "function") options.onAddFile(this.fileList, uploadFiles);
                uploadFiles.forEach(function(file, i) {
                    file.id = Lego.randomKey(32);
                    if (Math.ceil(file.size / (1024 * 1024)) > parseInt(options.maxFileSize)) {
                        var msg = "发送文件最大为" + options.maxFileSize;
                        if (uploadFiles.length == 1) {
                            Lego.UI.notification("error", msg);
                        } else {
                            debug.warn(msg);
                        }
                        return;
                    }
                    if (that.fileList.find(function(item) {
                        return item == file;
                    })) return;
                    var uploadOption = {
                        id: file.id,
                        uploadUri: options.uploadUri,
                        isAuto: options.isAuto,
                        file: file,
                        type: options.type,
                        percent: 0,
                        params: Object.assign({
                            key: options.key || that.getKey(file.name),
                            token: options.data
                        }, options.params),
                        onBegin: options.onBegin,
                        onProgress: options.onProgress,
                        onComplete: options.onComplete || function(uploadObj, resp) {
                            resp.url = Lego.config.downloadUri + resp.key;
                            $.ajax({
                                url: Lego.config.saveUri,
                                type: "POST",
                                dataType: "json",
                                data: resp,
                                success: function success(response) {
                                    var theFile = options.value.find(function(item) {
                                        return item.file.hash == response.data.hash;
                                    });
                                    if (theFile) {
                                        if (response.data.id) theFile.id = response.data.id;
                                    } else {
                                        options.value.push({
                                            id: file.id,
                                            file: response.data,
                                            type: options.type,
                                            percent: 100
                                        });
                                    }
                                },
                                error: function error(err) {
                                    debug.error(err);
                                }
                            });
                        },
                        onFail: options.onFail,
                        onCancel: options.onCancel
                    };
                    if (options.previewOption) {
                        uploadOption.previewOption = options.previewOption;
                        uploadOption.isAuto = false;
                        localresizeimg(file, Object.assign(options.previewOption, {
                            success: function success(results) {
                                uploadOption.previewImgSrc = results.blob;
                                var theView = that.showItem(uploadOption);
                                theView.sendUpload();
                            }
                        }));
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
            return this.options.keyRoot + Lego.Util.uuid() + "." + Lego.Util.getExtName(fileName);
        }
    }, {
        key: "onClickAdd",
        value: function onClickAdd(event) {
            this.$(".fileInput").click();
        }
    }, {
        key: "showItem",
        value: function showItem(uploadOption) {
            var view = new UploadItem(uploadOption), containerEl = this.$(".upload-container");
            if (containerEl.length && view) {
                if (this.options.multiple) {
                    containerEl.append(view.el);
                } else {
                    containerEl.html(view.el);
                }
            }
            return view;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var result = [];
            if (this.options.value.length) {
                result = this.options.value.map(function(item) {
                    return item.id;
                });
            }
            return result.join(",");
        }
    }, {
        key: "reset",
        value: function reset() {
            this.fileList = [];
        }
    } ]);
    return Upload;
}(Lego.UI.Baseview);

Lego.components("upload", Upload);

module.exports = Upload;
