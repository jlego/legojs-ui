/**
 * common.js v0.6.4
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

var perfectScrollbar_dist_css_perfectScrollbar_css = require("perfect-scrollbar/dist/css/perfect-scrollbar.css");

var perfectScrollbar = _interopDefault(require("perfect-scrollbar"));

var toastr = _interopDefault(require("toastr-cjs"));

var toastrCjs_toastr_css = require("toastr-cjs/toastr.css");

var moment = _interopDefault(require("moment"));

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

function Message() {
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
        if (this.toastr) this.toastr.remove();
        this.toastr = toastr[type](content);
    }
}

Lego.components("message", Message);

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

window.moment = moment;

var Util = {
    uuid: function uuid() {
        function S4() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
        }
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    },
    getDirection: function getDirection(el, dropEl) {
        el = el instanceof $ ? el : $(el);
        var windowW = $(window).width(), windowH = $(window).height(), _X = el.offset().left, _Y = el.offset().top, elW = el.width(), elH = el.height(), dropW = dropEl.width(), dropH = dropEl.height(), upDown = dropH > windowH - _Y - elH ? "top" : "bottom", leftRight = dropW > windowW - _X - elW ? "Right" : "Left";
        return {
            _x: leftRight,
            _y: upDown
        };
    },
    animateCss: function animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
        animationName = /\s/g.test(animationName) ? animationName : "animated " + animationName;
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        el.addClass(animationName).one(animationEnd, function() {
            el.removeClass(animationName);
            if (typeof callback == "function") callback();
        });
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
            if (index === targetIndex) break;
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
    getFileIcon: function getFileIcon(name, isExt) {
        var _extMap;
        var extMap = (_extMap = {
            bmp: "fa fa-file-o",
            gif: "fa fa-file-image-o",
            png: "fa fa-file-image-o",
            jpg: "fa fa-file-image-o",
            jpeg: "fa fa-file-image-o",
            tif: "fa fa-file-text-o",
            psd: "fa fa-file-image-o",
            pdg: "fa fa-file-o",
            ai: "fa fa-file-image-o",
            ico: "fa fa-file-image-o",
            css: "fa fa-file-text-o",
            doc: "fa fa-file-word-o",
            docx: "fa fa-file-word-o",
            ppt: "fa fa-file-powerpoint-o",
            pptx: "fa fa-file-powerpoint-o",
            rar: "fa fa-file-zip-o",
            "7z": "fa fa-file-zip-o",
            gz: "fa fa-file-zip-o",
            bz: "fa fa-file-zip-o",
            ace: "fa fa-file-zip-o",
            uha: "fa fa-file-zip-o",
            zpaq: "fa fa-file-zip-o"
        }, _defineProperty(_extMap, "rar", "fa fa-file-zip-o"), _defineProperty(_extMap, "txt", "fa fa-file-text-o"), 
        _defineProperty(_extMap, "yml", "fa fa-file-code-o"), _defineProperty(_extMap, "ini", "fa fa-file-code-o"), 
        _defineProperty(_extMap, "js", "fa fa-file-code-o"), _defineProperty(_extMap, "url", "fa fa-file-code-o"), 
        _defineProperty(_extMap, "xls", "fa fa-file-excel-o"), _defineProperty(_extMap, "xlsx", "fa fa-file-excel-o"), 
        _defineProperty(_extMap, "et", "fa fa-file-excel-o"), _defineProperty(_extMap, "mp3", "fa fa-file-audio-o"), 
        _defineProperty(_extMap, "mp4", "fa fa-file-video-o"), _defineProperty(_extMap, "zip", "fa fa-file-zip-o"), 
        _defineProperty(_extMap, "pdf", "fa fa-file-pdf-o"), _defineProperty(_extMap, "none", "fa fa-file-o"), 
        _extMap), ext = isExt ? name : this.getExtName(name);
        return ext !== false && extMap[ext] ? extMap[ext] : "file";
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
        var u = navigator.userAgent;
        return {
            mozilla: /firefox/.test(u.toLowerCase()),
            webkit: /webkit/.test(u.toLowerCase()),
            opera: /opera/.test(u.toLowerCase()),
            msie: /msie/.test(u.toLowerCase())
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
    },
    getPeriod: function getPeriod(type) {
        var startDate = void 0, endDate = void 0;
        if (window.moment) {
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
};

window.val = function(value, defaultValue) {
    return value ? typeof value == "function" ? value() : value : defaultValue || "";
};

Lego.components("Util", Util);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-spin-text">', "</div>" ], [ '<div class="lego-spin-text">', "</div>" ]);

function _taggedTemplateLiteral(strings, raw) {
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

var Loading = function(_Lego$View) {
    _inherits$1(Loading, _Lego$View);
    function Loading() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Loading);
        var options = {
            spinning: true,
            size: "",
            tip: "",
            icon: "anticon anticon-loading-3-quarters"
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, options));
    }
    _createClass$1(Loading, [ {
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

var Baseview = function(_Lego$View) {
    _inherits(Baseview, _Lego$View);
    function Baseview() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Baseview);
        var options = {
            events: null,
            loading: false
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Baseview.__proto__ || Object.getPrototypeOf(Baseview)).call(this, options));
        _this.setEvent();
        _this.renderScroll();
        return _this;
    }
    _createClass(Baseview, [ {
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
            if (this.$el) this.$el.off(".delegateEvents" + this.options.vid);
            return this;
        }
    }, {
        key: "delegateEvents",
        value: function delegateEvents() {
            var events = this.options.events;
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            if (!events) return this;
            for (var key in events) {
                var method = events[key];
                if (typeof method !== "function") method = this[method];
                if (!method) continue;
                var match = key.match(delegateEventSplitter);
                this.bindEvents(match[1], match[2], method.bind(this));
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
                opts.isNodata = !opts.data.length ? true : false;
            }
        }
    }, {
        key: "renderScroll",
        value: function renderScroll() {
            var options = this.options, that = this;
            function initScroll($el) {
                $el.each(function(index, el) {
                    var container = $(this), eventName = "mousemove.ps" + index;
                    if (!container.hasClass("ps-container")) {
                        container.css("position", "relative");
                        Ps.initialize(container[0], options.scrollbar);
                        that.$el.off(eventName).on(eventName, function() {
                            Ps.update(container[0]);
                        });
                    }
                });
            }
            if (options.scrollbar) {
                var scrollbarEl = this.$(".scrollbar").length ? this.$(".scrollbar") : [];
                if (scrollbarEl.length) {
                    initScroll(scrollbarEl);
                }
                if (this.$el.hasClass("scrollbar")) initScroll(this.$el);
            }
        }
    }, {
        key: "importWidget",
        value: function importWidget(comName, callback) {
            var that = this;
            if (/\.js/g.test(comName)) {
                Lego.loadScript(comName, function() {
                    if (typeof callback == "function") callback(that);
                }, comName);
            } else {
                if (!Lego.UI[comName]) {
                    Lego.loadCss(Lego.config.rootUri + "widget/" + comName + "/app.css", comName);
                    Lego.loadScript(Lego.config.rootUri + "widget/" + comName + "/app.js", function() {
                        if (typeof callback == "function") callback(that);
                    }, comName);
                } else {
                    if (typeof callback == "function") callback(this);
                }
            }
        }
    } ]);
    return Baseview;
}(Lego.View);

Lego.components("Baseview", Baseview);

window.Ps = perfectScrollbar;

exports.Baseview = Baseview;
