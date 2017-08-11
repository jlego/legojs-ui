/**
 * util.js v0.12.6
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

module.exports = Util;
