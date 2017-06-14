/**
 * upload.js v0.8.44
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
        var _this = _possibleConstructorReturn$2(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).call(this, options));
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
                if (_this.options.isAuto) _this.start();
            }
        }
        return _this;
    }
    _createClass$2(UploadView, [ {
        key: "uploadInit",
        value: function uploadInit() {
            var _this2 = this;
            var taking = 0, file = this.options.file, params = this.options.params;
            this.xhr.crossDomain = true;
            var progressbar = Lego.getView("#progressbar_" + this.options.vid);
            this.form = new FormData();
            this.form.append("file", file);
            if (!Lego.isEmptyObject(params)) {
                for (var key in params) {
                    this.form.append(key, params[key]);
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
                this.xhr.setRequestHeader(_key, this.options.headers[_key]);
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
            status: "",
            showInfo: true,
            percent: 0,
            strokeWidth: 6,
            onComplete: function onComplete() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$3(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, options));
    }
    _createClass$3(Progressbar, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            if (options.percent == 100) {
                if (typeof options.onComplete == "function") options.onComplete(this);
            }
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ]);

var _templateObject5$1 = _taggedTemplateLiteral$1([ '\n            <div class="lego-upload-photo-item preview-', '" style="background-image:url(', ');">\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-upload-photo-item preview-', '" style="background-image:url(', ');">\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ]);

var _templateObject6 = _taggedTemplateLiteral$1([ '\n            <div class="lego-upload-photo-item preview-', '" style="background-image:url(', ');">\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-upload-photo-item preview-', '" style="background-image:url(', ');">\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject7 = _taggedTemplateLiteral$1([ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ]);

var _templateObject8 = _taggedTemplateLiteral$1([ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ]);

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
        return _possibleConstructorReturn$1(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).call(this, options));
    }
    _createClass$1(UploadItem, [ {
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
            var vDom = hx(_templateObject$1, Lego.UI.Util.getFileIcon(opts.file.name), opts.percent < 100 ? hx(_templateObject2$1, val(opts.file._id), this.onCancel.bind(this), val(opts.file.name), "progressbar_" + opts.vid) : hx(_templateObject3$1, !opts.readonly && opts.percent == 100 ? hx(_templateObject4$1, val(opts.file._id), this.onRemove.bind(this)) : "", val(opts.file.name), Lego.UI.Util.convertByteUnit(opts.file.size), val(opts.file.url), val(opts.file.name)));
            return vDom;
        }
    }, {
        key: "renderPhoto",
        value: function renderPhoto() {
            var opts = this.options;
            var vDom = opts.percent < 100 ? hx(_templateObject5$1, val(opts.type), val(opts.previewImgSrc), "progressbar_" + opts.vid, val(opts.file._id), this.onCancel.bind(this)) : hx(_templateObject6, val(opts.type), val(opts.file.url), opts.showZoom ? hx(_templateObject7, val(opts.file._id)) : "", !opts.readonly && opts.percent == 100 ? hx(_templateObject8, val(opts.file._id), this.onRemove.bind(this)) : "");
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
            if (typeof this.options.onCancel == "function") this.options.onCancel("cancel", _id);
            this.removeFun();
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            if (typeof this.options.onRemove == "function") this.options.onRemove("remove", _id);
            this.removeFun();
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<i class="anticon anticon-upload"></i>' ], [ '<i class="anticon anticon-upload"></i>' ]);

var _templateObject4 = _taggedTemplateLiteral([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);

var _templateObject5 = _taggedTemplateLiteral([ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ], [ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ]);

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
            onAddFile: function onAddFile() {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onRemove: function onRemove() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        if (options.type == "avatar") options.multiple = false;
        if (options.type !== "file") {
            options.accept = options.accept || [ "image/gif", "image/jpeg", "image/png", "image/jpg" ];
            var cssOpts = {
                width: options.previewImg.width || (options.type == "avatar" ? 150 : 95),
                height: options.previewImg.height || (options.type == "avatar" ? 150 : 95)
            };
            Object.assign(options.previewImg, cssOpts);
        }
        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, options));
        _this.fileList = [];
        _this.$(".lego-fileInput").on("change", function(event) {
            var target = $(event.currentTarget)[0];
            _this.uploadInit(target.files, target);
        });
        var opt = _this.options;
        if (opt.value.length) {
            _this.options.value = opt.value.map(function(file) {
                return {
                    el: ".lego-upload-container",
                    readonly: opt.readonly,
                    percent: 100,
                    showZoom: opt.showZoom,
                    type: opt.type,
                    file: file
                };
            });
            _this.options.value.forEach(function(item, index) {
                _this.showItem(item);
            });
        }
        return _this;
    }
    _createClass(Upload, [ {
        key: "render",
        value: function render() {
            var opts = this.options, width = opts.previewImg.width, height = opts.previewImg.height;
            if (width) width = "width:" + (typeof width == "string" ? width : width + "px") + ";";
            if (height) height = "height:" + (typeof height == "string" ? height : height + "px") + ";";
            var vDom = hx(_templateObject, val(opts.type), val(opts.type), width ? width : "", height ? height : "", !opts.readonly && opts.type == "file" ? hx(_templateObject2, opts.disabled ? "disabled" : "", opts.buttonIcon ? opts.buttonIcon : hx(_templateObject3), val(opts.buttonText)) : "", this.getValue().join(","), val(opts.name), val(opts.accept.join(",")), opts.showUploadList && opts.type == "file" ? hx(_templateObject4) : "", opts.type !== "file" ? hx(_templateObject5, val(opts.type), val(opts.type)) : "");
            return opts.template ? opts.template : vDom;
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
            if (fileInput) fileInput.value = "";
            var that = this, opts = this.options, filesCount = uploadFiles.length, maxFilesCount = opts.maxFilesCount;
            if (filesCount) {
                if (filesCount > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    return;
                }
                uploadFiles = uploadFiles.filter(function(file) {
                    file._id = [ file.name, file.size, file.lastModified ].join("_");
                    var hasFile = _this2.fileList.includes(file._id);
                    if (!hasFile) _this2.fileList.push(file._id);
                    return !hasFile;
                });
                if (this.fileList.length > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "个文件");
                    this.fileList.length = maxFilesCount;
                    if (uploadFiles.length > maxFilesCount) uploadFiles.length = maxFilesCount;
                    return;
                }
                if (typeof opts.onAddFile == "function") opts.onAddFile(this.fileList, uploadFiles);
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
                    if (i > maxFilesCount - 1) return;
                    var uploadOption = {
                        el: ".lego-upload-container",
                        uploadUri: opts.uploadUri,
                        readonly: opts.readonly,
                        isAuto: opts.isAuto,
                        file: file,
                        type: opts.type,
                        percent: 0,
                        showZoom: opts.showZoom,
                        params: Object.assign({
                            key: opts.key || that.getKey(file.name),
                            token: typeof opts.data == "string" ? opts.data : ""
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
                            if (typeof opts.onComplete == "function") opts.onComplete(that, resp, self);
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
                    if (typeof opts.onCancel == "function") opts.onCancel(_this3, _id);
                } else {
                    var hasOne = opts.value.find(function(item) {
                        return item.file._id == _id;
                    }), removeFile = {};
                    if (hasOne) removeFile = $.extend({}, hasOne.file || {});
                    if (typeof opts.onRemove == "function") opts.onRemove(_this3, removeFile);
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
            Lego.create(UploadItem, uploadOption);
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
            return this;
        }
    } ]);
    return Upload;
}(Lego.UI.Baseview);

Lego.components("upload", Upload);

module.exports = Upload;
