/**
 * common.js v0.2.8
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
        toastr[type](content);
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
            bmp: "file",
            gif: "file",
            png: "file",
            jpg: "file-jpg",
            jpeg: "file-jpg",
            tif: "file",
            psd: "file",
            pdg: "file",
            ai: "file",
            ico: "file",
            css: "file",
            doc: "file-text",
            docx: "file-text",
            ppt: "file-ppt",
            pptx: "file-ppt",
            rar: "book",
            "7z": "book",
            gz: "book",
            bz: "book",
            ace: "book",
            uha: "book",
            zpaq: "book"
        }, _defineProperty(_extMap, "rar", "book"), _defineProperty(_extMap, "txt", "file"), 
        _defineProperty(_extMap, "yml", "file"), _defineProperty(_extMap, "ini", "file"), 
        _defineProperty(_extMap, "js", "file"), _defineProperty(_extMap, "url", "file"), 
        _defineProperty(_extMap, "xls", "file-excel"), _defineProperty(_extMap, "xlsx", "file-excel"), 
        _defineProperty(_extMap, "et", "file-excel"), _defineProperty(_extMap, "zip", "book"), 
        _defineProperty(_extMap, "pdf", "file-pdf"), _defineProperty(_extMap, "none", "file-unknown"), 
        _extMap), ext = isExt ? name : this.getExtName(name);
        return ext !== false && extMap[ext] ? extMap[ext] : "";
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
    }
};

window.val = function(value, defaultValue) {
    return value ? typeof value == "function" ? value() : value : defaultValue || "";
};

Lego.components("Util", Util);

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
        var options = {};
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Baseview.__proto__ || Object.getPrototypeOf(Baseview)).call(this, options));
        _this.renderScroll();
        return _this;
    }
    _createClass(Baseview, [ {
        key: "renderScroll",
        value: function renderScroll() {
            var options = this.options, that = this;
            if (options.scrollbar) {
                var scrollbarEl = this.$(".scrollbar");
                if (scrollbarEl.length) {
                    scrollbarEl.each(function(index, el) {
                        var container = $(this), eventName = "mousemove.ps" + index;
                        container.css("position", "relative");
                        Ps.initialize(container[0], options.scrollbar);
                        that.$el.off(eventName).on(eventName, function() {
                            Ps.update(container[0]);
                        });
                    });
                }
            }
        }
    } ]);
    return Baseview;
}(Lego.View);

Lego.components("Baseview", Baseview);

window.Ps = perfectScrollbar;

exports.Baseview = Baseview;
