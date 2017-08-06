/**
 * facial.js v0.12.4
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

var taggedTemplateLiteral = function(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
};

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<input type="hidden" name="', '" value="', '"/>' ], [ '<input type="hidden" name="', '" value="', '"/>' ]);

var _templateObject3 = taggedTemplateLiteral([ '<span id="face_', '">', "</span>" ], [ '<span id="face_', '">', "</span>" ]);

var _templateObject4 = taggedTemplateLiteral([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ]);

var _templateObject5 = taggedTemplateLiteral([ '<a class="face-remove" href="javascript:;">删除</a>' ], [ '<a class="face-remove" href="javascript:;">删除</a>' ]);

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
            var vDom = hx(_templateObject, !opts.target ? hx(_templateObject2, val(opts.name), opts.value.join(",")) : "", !opts.target ? hx(_templateObject3, opts.vid, opts.value.join(",")) : "", opts.icon, opts.direction ? "drop" + opts.direction : "", opts.data.map(function(item, index) {
                return hx(_templateObject4, opts.itemClassPrefix, index, item, opts.iconsUrl, index);
            }), !opts.target && opts.value.length ? hx(_templateObject5) : "");
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

module.exports = Facial;
