/**
 * reply.js v0.12.12
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var Tether = _interopDefault(require("tether"));

var localresizeimg = _interopDefault(require("localresizeimg-cjs"));

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

var _templateObject$1 = taggedTemplateLiteral([ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', "\n            ", '\n            <i class="lego-facial-trigger ', '"></i>\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n            ", "\n        </div>\n        " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '<input type="hidden" name="', '" value="', '"/>' ], [ '<input type="hidden" name="', '" value="', '"/>' ]);

var _templateObject3$1 = taggedTemplateLiteral([ '<span id="face_', '">', "</span>" ], [ '<span id="face_', '">', "</span>" ]);

var _templateObject4$1 = taggedTemplateLiteral([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ]);

var _templateObject5$1 = taggedTemplateLiteral([ '<a class="face-remove" href="javascript:;">删除</a>' ], [ '<a class="face-remove" href="javascript:;">删除</a>' ]);

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
            var vDom = hx(_templateObject$1, !opts.target ? hx(_templateObject2$1, val(opts.name), opts.value.join(",")) : "", !opts.target ? hx(_templateObject3$1, opts.vid, opts.value.join(",")) : "", opts.icon, opts.direction ? "drop" + opts.direction : "", opts.data.map(function(item, index) {
                return hx(_templateObject4$1, opts.itemClassPrefix, index, item, opts.iconsUrl, index);
            }), !opts.target && opts.value.length ? hx(_templateObject5$1) : "");
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

var Util = function($) {
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
                    var tipId = Util.getUID(this.constructor.NAME);
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
                    Util.reflow(tip);
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
                    if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                        $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
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
                if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                    $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
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
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
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

var fun = function fun(opts) {
    return Popover(opts);
};

Lego.components("popover", fun);

window.svgSprite = "<svg>" + "" + '<symbol id="icon-gif" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#48D9A1" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7FE4BD" ></path>' + "" + '<path d="M660.9 511.7l-156.4-226-139.1 226h295.5zM539.2 563.9h191.2v191.2H539.2V563.9zM374.1 563.9c52.8 0 95.6 42.8 95.6 95.6s-42.8 95.6-95.6 95.6-95.6-42.8-95.6-95.6 42.8-95.6 95.6-95.6z" fill="#C8F4E3" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-doc" viewBox="0 0 1024 1024">' + "" + '<path d="M259 383h500v40H259zM259 503h500v40H259zM259 622h500v40H259zM259 741h500v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M897.8 268.7L893 264H735.4c-20.1 0-36.4-16.2-36.4-36.1V70.2l-4.2-4.2H151.5c-18 0-32.5 14.8-32.5 33.1v827.8c0 18.3 14.5 33.1 32.5 33.1h715c17.9 0 32.5-14.8 32.5-33.1M259 264h400v40H259v-40z m500 517H259v-40h500v40z m0-119H259v-40h500v40z m0-119H259v-40h500v40z m0-120H259v-40h500v40z" fill="#40C4FF" ></path>' + "" + '<path d="M899 264z" fill="#27C78B" ></path>' + "" + '<path d="M259 264h400v40H259z" fill="#C6EDFF" ></path>' + "" + '<path d="M699 231.9c0 20.5 16.7 37.1 37.3 37.1H898L699 70.2v161.7z" fill="#7AD6FF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-jpg" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M248.8 736.6V336.1h527.9v400.5H248.8z m473.3-236.7V390.7H303.4v291.2l109.2-163.8L540 663.8l91-72.8 91 91V499.9z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-zip" viewBox="0 0 1024 1024">' + "" + '<path d="M686 64.3H471.1c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2H147.2c-18.3 0-33.2 14.8-33.2 33.2v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V280.2L686 64.3zM454.8 180.4H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m0 99.5H471c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9h-16.2c-13.5 0-8.1-2.8-8.1-16.6s-5.3-33.2 8.1-33.2z m7.5 331.6l-82.9 99.5h82.9v33.2H329.6v-33.2l82.9-99.5h-82.9v-33.2h132.6V711z m82.9 132.6H512V727.5h33.2v116.1z m0-132.6H512v-33.2h33.2V711z m-8.3-132.7h-16.6c-4.8 0-13.3-0.4-22.4-1.4-11.6 1-22.1 1.4-26.8 1.4h-16.2c-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2-13.5 0-8.1-2.8-8.1-16.6 0-13.7-5.3-33.2 8.1-33.2h16.2c13.5 0 24.4 11.1 24.4 24.9 0 13.7-10.9 24.9-24.4 24.9 4.7 0 15.2 2.4 26.8 6.1 9.1-3.7 17.6-6.1 22.4-6.1h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m0-99.4h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-99.5h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.7 5.4 16.6-8.3 16.6z m0-116.1h-16.6c-13.7 0-24.9-11.1-24.9-24.9 0-13.7 11.1-24.9 24.9-24.9h16.6c13.7 0 8.3 19.4 8.3 33.2 0 13.8 5.4 16.6-8.3 16.6z m124.3 679.8c-12.1 0-23.4-3.5-33.2-9.2v42.4h-33.2v-99.5c0-7-0.2-13.7 0-20.1V711H628v3.1c8.6-2 19.5-3.1 33.2-3.1 36.6 0 66.3 29.7 66.3 66.3 0 36.6-29.6 66.3-66.3 66.3z" fill="#62D35F" ></path>' + "" + '<path d="M329.6 711h82.9l-82.9 99.4v33.2h132.7v-33.2h-82.9l82.9-99.4v-33.2H329.6zM512 677.8h33.2V711H512zM512 727.5h33.2v116.1H512zM661.2 711c-13.7 0-24.5 1.1-33.2 3.1V711h-33.2v46.3c-0.2 6.3 0 13.1 0 20.1v99.5H628v-42.4c9.8 5.7 21 9.2 33.2 9.2 36.6 0 66.3-29.7 66.3-66.3 0-36.7-29.6-66.4-66.3-66.4z m0 99.4c-18.3 0-33.2-14.8-33.2-33.2 0-18.3 14.8-33.2 33.2-33.2 18.3 0 33.2 14.8 33.2 33.2 0 18.4-14.9 33.2-33.2 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M661.2 777.3m-33.2 0a33.2 33.2 0 1 0 66.4 0 33.2 33.2 0 1 0-66.4 0Z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 114.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 230.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6 0-13.7 5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 329.6h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M497.9 576.9c9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6 0 9-25.7 13.3-47.3 15.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1 21.6 6.8 47.3 18.2 47.3 27.1 0-13.8 5.4-33.2-8.3-33.2zM446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#62D35F" ></path>' + "" + '<path d="M446.7 97.5c0 13.7-5.3 16.6 8.1 16.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.4 0-8.1 19.5-8.1 33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 230.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 329.6H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#62D35F" ></path>' + "" + '<path d="M454.8 429.1H471c13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.8-5.3 16.6 8.1 16.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M462.3 561.7c0-8.9 18.7-20.3 35.6-27.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4-16.9-1.9-35.6-6.2-35.6-15.2z" fill="#62D35F" ></path>' + "" + '<path d="M497.9 534.7c-16.9 6.8-35.6 18.2-35.6 27.1 0 8.9 18.7 13.2 35.6 15.2 21.6-1.9 47.3-6.2 47.3-15.2s-25.7-20.3-47.3-27.1z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 528.6h-16.6c-4.8 0-13.3 2.4-22.4 6.1-11.6-3.7-22.1-6.1-26.8-6.1 13.5 0 24.4-11.1 24.4-24.9 0-13.7-10.9-24.9-24.4-24.9h-16.2c-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6-13.5 0-8.1 19.4-8.1 33.2 0 13.7-5.3 16.6 8.1 16.6h16.2c4.7 0 15.2-0.4 26.8-1.4 9.1 1 17.6 1.4 22.4 1.4h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#62D35F" ></path>' + "" + '<path d="M536.9 429.1h-16.6c-13.7 0-24.9 11.1-24.9 24.9 0 13.7 11.1 24.9 24.9 24.9h16.6c13.7 0 8.3-2.8 8.3-16.6s5.4-33.2-8.3-33.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M685.8 64.4l1 173.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mov" viewBox="0 0 1024 1024">' + "" + '<path d="M689.7 65L148 64.9c-18.3 0-33.2 14.8-33.2 33.1v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M693.2 791.5v-15.3h-45.9v15.3h-30.6v-91.8H387.3v91.8H280.2V256.2h30.6v30.6h45.9v-30.6h30.6v76.5h229.4v-76.5h107.1v535.3h-30.6zM356.7 317.4h-45.9V348h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.1h-45.9v30.6h45.9v-30.6z m260-367H387.3v275.3h229.4V378.6z m76.5-91.8h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9V348z m0 61.1h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6z m0 61.2h-45.9v30.6h45.9v-30.6zM448.6 592.8V439.9l137.6 76.5-137.6 76.4z" fill="#FFCCCC" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ppt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M316.7 363.1h386.9c19.4 0 35.2 14.8 35.2 33.1v232c0 18.3-15.7 33.1-35.2 33.1H316.7c-19.4 0-35.2-14.8-35.2-33.1v-232c0.1-18.3 15.8-33.1 35.2-33.1zM246.4 313.4h527.5c9.7 0 17.6 7.4 17.6 16.6 0 9.2-7.9 16.6-17.6 16.6H246.4c-9.7 0-17.6-7.4-17.6-16.6 0-9.2 7.9-16.6 17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M492.6 827V330c0-9.2 7.9-16.6 17.6-16.6 9.7 0 17.6 7.4 17.6 16.6v497c0 9.2-7.9 16.6-17.6 16.6-9.8 0-17.6-7.4-17.6-16.6z" fill="#FFEAC2" ></path>' + "" + '<path d="M536.8 713.3l122.7 66.3c8.5 4.6 11.4 14.7 6.5 22.6-4.9 7.9-15.7 10.6-24.2 6.1L519.1 742c-8.5-4.6-11.4-14.7-6.5-22.6 4.9-8 15.7-10.7 24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M483.5 713.3l-122.7 66.3c-8.5 4.6-11.4 14.7-6.5 22.6 4.9 7.9 15.7 10.6 24.2 6.1L501.2 742c8.5-4.6 11.4-14.7 6.5-22.6-4.9-8-15.7-10.7-24.2-6.1z" fill="#FFEAC2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-xls" viewBox="0 0 1024 1024">' + "" + '<path d="M686 62.8H147.2C128.9 62.8 114 77.6 114 96v829c0 18.3 14.8 33.2 33.2 33.2h729.5c18.3 0 33.2-14.8 33.2-33.2V278.6L686 62.8z" fill="#62D35F" ></path>' + "" + '<path d="M684.9 62.8l1 174.9c0 23.3 18.9 42.2 42.2 42.2h181.8" fill="#91E08F" ></path>' + "" + '<path d="M808.5 729.3l-563.7 0.2h-31.3v-30.8l-0.1-353.4h38.4v345.5h57.6V537.4h76.8V691h57.6V479.8h76.8V691h57.6V556.6H655V691h57.6V383.8h76.8v307.1h19.2v38.4z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-mp3" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M652.6 634.2c0 1.1 0.1 2.1 0 3.2v1.7h-0.2c-2.3 26.4-25.8 50.6-58.9 57.6-39.2 8.4-76.8-10.4-83.9-42-7.1-31.6 18.9-64 58.2-72.4 13.8-3 27.4-2.4 39.5 0.8V407.3c-27.9-1.6-65.3-1.6-102.7 5.2-35 6.3-68.3 19.1-93.7 30.9v256.2h-3.5c-3.3 26.9-27.1 51.4-60.4 58.6-40.4 8.8-79.2-10.9-86.5-44.1-7.3-33.1 19.5-67.1 60-75.9 15.9-3.5 31.4-2.4 44.9 2V467.3c-0.6 0.4-1 0.6-1 0.6V352.3s0.4-0.2 1-0.6v-6.3l16.7-3.3c24.5-13.3 71.6-36.1 122-45.1 74.2-13.4 148.9-0.5 148.9-0.5V412h-0.2v222.2z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-ics" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FFBA34" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FFCF71" ></path>' + "" + '<path d="M730.6 355.6H293.4c-12.4 0-22.4 9.9-22.4 22.2V744c0 12.3 10 22.2 22.4 22.2h437.1c12.4 0 22.4-9.9 22.4-22.2V377.8c0.1-12.3-10-22.2-22.3-22.2z m-31.4 346.7c0 5.5-4.5 10-10 10H334.8c-5.5 0-10-4.5-10-10V419.4c0-5.5 4.5-10 10-10h354.3c5.5 0 10 4.5 10 10v282.9z" fill="#FFEAC2" ></path>' + "" + '<path d="M406 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10H406c-5.5 0-10-4.5-10-10v-105c0-5.6 4.4-10 10-10zM495.2 319.9h33.6c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0-5.6 4.5-10 10-10zM584.5 319.9H618c5.5 0 10 4.5 10 10v105c0 5.5-4.5 10-10 10h-33.6c-5.5 0-10-4.5-10-10v-105c0.1-5.6 4.6-10 10.1-10z" fill="#FFEAC2" ></path>' + "" + '<path d="M467.7 498.4l-71.8 5.7v24.3h36.5v130.8h35.3V498.4zM628 498.4H521.2l-0.3 35.6h71.4c-14.8 18.1-19.7 25.6-27.5 44-7.8 18.4-11.6 38.8-11.6 61.2v19.9h30.5v-19.9c0-22 2.5-34.6 8.6-51.6 6.2-17 18.5-32.3 35.7-53.6v-35.6z" fill="#FFEAC2" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-pdf" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M347.3 655.8c-56.1 41.2-94.7 99.7-79.5 108.9l-13.3-6.6c-7.7-9.3 9.8-58.9 92.8-102.3zM768.7 609.6c28.7-60.1-207.6-51.1-380.3 27.7 134.4-50.9 383.2-72.9 380.3-27.7z" fill="#FFC5C5" ></path>' + "" + '<path d="M501.4 289.3c6.5-33.4-10.1-32.2-14.8-32.2l-10.5-0.1c-5.8 0-11 4.6-13.5 13.8-16.4 60.1 13.3 212.7 96.7 283.3 73.6 62.3 201.9 90.8 207 60.7-26.6 12.6-126.7-19.1-194-71.8-79.5-64.2-113.5-222.5-96.4-272 1.7-4.9 5.8-10.7 7.7-12 7.2 3.6 15.8 12.2 17.8 30.3z" fill="#FFC5C5" ></path>' + "" + '<path d="M500 298.9c-7.3 35.4-10.5 119.2-80 256.8C345.3 703.6 290.8 772.6 254.5 758l13 6.5c28.4 14.3 80.7-32.7 167.6-197.2 66.8-126.6 63.2-191.8 64.9-268.4z" fill="#FFC5C5" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-apk" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#62D35F" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#91E08F" ></path>' + "" + '<path d="M757.3 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0.1 13.1-10.6 23.7-23.7 23.7z m-53.7-260.4c0 1.6-0.2 3.1-0.2 4.6-0.5 0-0.9-0.1-1.4-0.1h-0.3c0.1 0.9 0.3 1.8 0.3 2.7 0 17.5-14.2 31.7-31.7 31.7H353.7c-17.5 0-31.7-14.2-31.7-31.7 0-0.8 0.2-1.5 0.2-2.2-0.4 0.1-0.9 0.1-1.4 0.1 0-1.7-0.3-3.4-0.3-5.1 0-62.6 30.2-118.1 76.7-153l-48.9-48.9c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0l56 56c0.7 0.7 1 1.6 1.6 2.3 22.4-9.2 46.8-14.3 72.5-14.3 25.5 0 49.7 5.1 71.9 14.1 0.5-0.7 0.8-1.5 1.4-2.1l56-56c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6L626.4 354c46.8 35 77.2 90.6 77.2 153.4zM512 361.4c-72.2 0-132 52.6-143.6 121.5h17.1c-8.7 0-15.8 7.1-15.8 15.8 0 8.7 7.1 15.8 15.8 15.8h253.2c8.7 0 15.8-7.1 15.8-15.8 0-8.7-7.1-15.8-15.8-15.8h17C644 414 584.2 361.4 512 361.4z m71.2 105.7c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0.1 13-10.6 23.7-23.7 23.7z m-142.4 0c-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7 23.7 10.6 23.7 23.7c0 13-10.6 23.7-23.7 23.7zM266.7 767.8c-13.1 0-23.7-10.6-23.7-23.7V585.8c0-13.1 10.6-23.7 23.7-23.7s23.7 10.6 23.7 23.7v158.3c0 13.1-10.6 23.7-23.7 23.7zM337.9 562h348.2c8.7 0 15.8 7.1 15.8 15.8V752c0 8.7-14.7 6.1-23.4 6.1 0 0-2.3 9.7-18.6 9.7-7.4 0-18.3-16.2-28.1-16.2-9.6 0-17.9 16.2-29.2 16.2-14.5 0-30.2-21.6-46.5-21.6-15.5 0-31.6 21.6-47.6 21.6-13.8 0-25.5-19.5-38.9-19.5-15.4 0-32.6 19.5-46.5 19.5-19.4 0-36.8-18.4-50.8-18.4-21.3 0-34.6 18.4-34.6 18.4-8.7 0-15.8-7.1-15.8-15.8V577.9c0.2-8.8 7.3-15.9 16-15.9z" fill="#D0F2CF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-png" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#7594E2" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#9FB4EB" ></path>' + "" + '<path d="M717.1 737.1h-82v-82h82v82zM553 655v-82h82v82h-82z m0-246h82v82h-82v-82z m-164 82v-82h82v82h-82z m82 164h-82v-82h82v82z m0-164h82v82h-82v-82z m82 246.1h-82v-82h82v82z m-246.1 0v-82h82v82h-82z m0-164.1v-82h82v82h-82z m0-246.1h82v82h-82v-82z m164.1 0h82v82h-82v-82z m246.1 0v82h-82v-82h82z m0 164.1v82h-82v-82h82z" fill="#D6DFF6" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-link" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#40C4FF" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#7AD6FF" ></path>' + "" + '<path d="M741.6 673.1l-68.5 68.5c-19.1 19.1-91 5-110.2-14.2l-81.7-81.7c-19.2-19.2-26-70-6.9-89.1l20.6-20.6 48 48c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l41.1-41.1c7.6-7.6 9.2-18.2 3.6-23.8l-75.8-75.8c-3.7-3.7-9.6-4-15.4-1.7L542.8 488l13.7-13.7c19.1-19.1 69.9-12.4 89.1 6.9l81.7 81.7c19.3 19.2 33.5 91.1 14.3 110.2zM419.5 419.5l6.9-6.9c7.6-7.6 19.8-7.6 27.4 0l164.5 164.5c7.6 7.6 7.6 19.8 0 27.4l-6.9 6.9c-7.6 7.6-19.8 7.6-27.4 0L419.5 446.9c-7.6-7.6-7.6-19.9 0-27.4zM536 481.2l-49.5-49.5c2.3-5.8 2-11.7-1.7-15.4L409 340.5c-5.6-5.6-16.2-4-23.8 3.6l-41.1 41.1c-7.6 7.6-9.2 18.2-3.6 23.8l75.8 75.8c5.6 5.6 16.2 4 23.8-3.6l48 48-20.6 20.6c-19.1 19.1-69.9 12.4-89.1-6.9l-81.7-81.7c-19.2-19.2-33.4-91.1-14.2-110.2l68.5-68.5c19.1-19.1 91-5 110.2 14.2l81.7 81.7c19.2 19.2 26 70 6.9 89.1L536 481.2z" fill="#C6EDFF" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-file" viewBox="0 0 1024 1024">' + "" + '<path d="M863.3 201.6H622.5c-8.2 0-15.6 5-18.6 12.6-8.2 20.6-28.3 35.2-51.8 35.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v509.1c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9v-557c0-17.6-14.3-31.9-32-31.9z" fill="#FFE88C" ></path>' + "" + '<path d="M176.6 295.4h670.8V487H176.6z" fill="#FFFFFF" ></path>' + "" + '<path d="M863.3 343.3H160.7c-17.6 0-31.9 14.3-31.9 31.9v415.2c0 17.6 14.3 31.9 31.9 31.9h702.7c17.6 0 31.9-14.3 31.9-31.9V375.3c0-17.7-14.3-32-32-32z" fill="#FFE88C" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-txt" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#885CA6" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#AC8DC1" ></path>' + "" + '<path d="M688.2 616.7v102.8h-44.1V616.7h-58.7v-44.1H747v44.1h-58.8zM277 469.8h470v44.1H277v-44.1z m0-102.8h470v44.1H277V367z m249.7 249.7H277v-44.1h249.7v44.1z m0 102.8H277v-44.1h249.7v44.1z" fill="#DCCEE4" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-rar" viewBox="0 0 1024 1024">' + "" + '<path d="M689 65l-541.8-0.1C128.9 64.9 114 79.7 114 98v828.4c0 18.3 14.8 33.1 33.2 33.1h729.5c18.3 0 33.2-14.8 33.2-33.1V284.2" fill="#FF5353" ></path>' + "" + '<path d="M689 65l-1.1 178c0 21.9 19.9 39.6 44.4 39.6l177.6 1.7L689 65z" fill="#FF8787" ></path>' + "" + '<path d="M307.6 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1L375 851h37l-18.7-29.4c-7.4-11.7-13.3-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65.1V851h33.4z m-2.4-125.1h24.1c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.7 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2zM516.2 700.4h-32.7L423.8 851h32.8l12.6-34.2h61.2l13.4 34.2h33.6l-61.2-150.6z m-37.4 91l20.7-55.9 21.1 55.9h-41.8zM625.4 851v-66.9l3.8 4c7.1 0 12.3 0.6 15.6 1.7 3.3 1.1 6.4 3.2 9.3 6.3 2.9 3 8.4 10.4 16.3 22.1l22.4 32.8h37L711 821.6c-7.4-11.7-13.2-19.9-17.6-24.4-4.4-4.6-9.9-8.8-16.6-12.6 13.4-1.9 23.5-6.6 30.3-13.9 6.8-7.4 10.1-16.7 10.1-28 0-8.9-2.2-16.8-6.7-23.7-4.5-6.9-10.4-11.7-17.8-14.4-7.4-2.7-19.3-4.1-35.7-4.1h-65V851h33.4z m-2.5-125.1H647c12.5 0 20.1 0.2 22.6 0.5 5 0.8 8.9 2.8 11.6 5.9 2.8 3.1 4.1 7.2 4.1 12.3 0 4.5-1 8.3-3.1 11.3s-5 5.1-8.7 6.4c-3.7 1.2-13 1.8-27.8 1.8h-22.9v-38.2z" fill="#FFFFFF" ></path>' + "" + '<path d="M533.4 583.4h-16.7c-4.8 0-13.5-0.4-22.6-1.4-11.7 1-22.3 1.4-27.1 1.4h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.4-33.4 8.2-33.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1 4.7 0 15.3 2.4 27.1 6.1 9.1-3.7 17.8-6.1 22.6-6.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.6-8.4 16.6z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-100.4h-16.7c-13.9 0-25.1-11.2-25.1-25.1s11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 14 5.5 16.8-8.4 16.8z m0-100.3h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4 0 13.9 5.5 16.8-8.4 16.8z m0-117.1h-16.7c-13.9 0-25.1-11.2-25.1-25.1 0-13.9 11.2-25.1 25.1-25.1h16.7c13.9 0 8.4 19.6 8.4 33.4s5.5 16.8-8.4 16.8zM467 115.2h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0-13.9-5.4-33.4 8.2-33.4H467c13.6 0 24.6 11.2 24.6 25.1s-11 25-24.6 25z m-16.4 66.9H467c13.6 0 24.6 11.2 24.6 25.1s-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7 0.1-13.9-5.3-33.5 8.2-33.5z m0 100.3H467c13.6 0 24.6 11.2 24.6 25.1 0 13.9-11 25.1-24.6 25.1h-16.4c-13.6 0-8.2-2.9-8.2-16.7s-5.3-33.5 8.2-33.5z" fill="#FFBABA" ></path>' + "" + "</symbol>" + "" + "</svg>";

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

var _templateObject$4 = taggedTemplateLiteral([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);

var _templateObject2$4 = taggedTemplateLiteral([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);

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
            var vDom = hx(_templateObject$4, options.showInfo ? hx(_templateObject2$4, this.format(options.percent)) : "", options.status ? options.status : "primary", options.percent);
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

var _templateObject$3 = taggedTemplateLiteral([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="file-icon ', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$3 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3$3 = taggedTemplateLiteral([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);

var _templateObject4$3 = taggedTemplateLiteral([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', '>\n                            <i class="anticon anticon-close-circle float-xs-right"></i>\n                        </a>\n                    </div>\n                    ' ]);

var _templateObject5$3 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <progressbar id="', '"></progressbar>\n                    <a href="javascript:;" class="lego-cancelbtn" id="', '" onclick=', ' title="取消">\n                        <i class="anticon anticon-close-circle"></i>\n                    </a>\n                </div>\n            </div>\n            ' ]);

var _templateObject6 = taggedTemplateLiteral([ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-upload-photo-item preview-', '" id="preview_', '">\n                <style>#preview_', "{background-image:url(", ');}</style>\n                <div class="lego-upload-operate">\n                    <div class="lego-upload-btns">\n                        ', "\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject7 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-previewbtn" id="p_', '" title="预览">\n                            <i class="anticon anticon-eye-o"></i>\n                        </a>' ]);

var _templateObject8 = taggedTemplateLiteral([ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ], [ '\n                        <a href="javascript:;" class="lego-closebtn" id="', '" onclick=', ' title="删除">\n                            <i class="anticon anticon-delete"></i>\n                        </a>' ]);

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
            var vDom = hx(_templateObject$3, Lego.UI.Util.getFileIcon(opts.file.name), opts.percent < 100 ? hx(_templateObject2$3, val(opts.file._id), this.onCancel.bind(this), val(opts.file.name), "progressbar_" + opts.vid) : hx(_templateObject3$3, !opts.readonly && opts.percent == 100 ? hx(_templateObject4$3, val(opts.file._id), this.onRemove.bind(this)) : "", val(opts.file.name), Lego.UI.Util.convertByteUnit(opts.file.size), val(opts.file.url), val(opts.file.name)));
            return vDom;
        }
    }, {
        key: "renderPhoto",
        value: function renderPhoto() {
            var opts = this.options;
            var vDom = opts.percent < 100 ? hx(_templateObject5$3, val(opts.type), opts.vid, opts.vid, val(opts.previewImgSrc), "progressbar_" + opts.vid, val(opts.file._id), this.onCancel.bind(this)) : hx(_templateObject6, val(opts.type), opts.vid, opts.vid, val(opts.file.url), opts.showZoom ? hx(_templateObject7, val(opts.file._id)) : "", !opts.readonly && opts.percent == 100 ? hx(_templateObject8, val(opts.file._id), this.onRemove.bind(this)) : "");
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

var _templateObject$2 = taggedTemplateLiteral([ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            <style>\n                .lego-upload .preview-', "{", "", "}\n            </style>\n            ", '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n            ", "\n        </div>\n        " ]);

var _templateObject2$2 = taggedTemplateLiteral([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', ">\n                ", "\n                ", "\n            </button>\n            " ]);

var _templateObject3$2 = taggedTemplateLiteral([ '<i class="anticon anticon-upload"></i>' ], [ '<i class="anticon anticon-upload"></i>' ]);

var _templateObject4$2 = taggedTemplateLiteral([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);

var _templateObject5$2 = taggedTemplateLiteral([ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ], [ '\n                <div class="lego-upload-container" title="选择上传照片">\n                    <div class="lego-upload-add preview-', '">\n                        <i class="anticon anticon-plus avatar-uploader-trigger preview-', '"></i>\n                    </div>\n                </div>\n            ' ]);

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
            var vDom = hx(_templateObject$2, val(opts.type), val(opts.type), width ? width : "", height ? height : "", !opts.readonly && opts.type !== "photos" && opts.type !== "avatar" ? hx(_templateObject2$2, opts.disabled ? "disabled" : "", opts.buttonIcon ? opts.buttonIcon : hx(_templateObject3$2), val(opts.buttonText)) : "", this.getValue().join(","), val(opts.name), val(opts.accept.join(",")), opts.showUploadList && opts.type == "file" ? hx(_templateObject4$2) : "", opts.type == "photos" || opts.type == "avatar" ? hx(_templateObject5$2, val(opts.type), val(opts.type)) : "");
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

var _templateObject$7 = taggedTemplateLiteral([ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ], [ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ]);

var _templateObject2$6 = taggedTemplateLiteral([ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ], [ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ]);

var _templateObject3$5 = taggedTemplateLiteral([ '<dropdown id="autocomplete_', '"></dropdown>' ], [ '<dropdown id="autocomplete_', '"></dropdown>' ]);

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
            var vDom = hx(_templateObject$7, opts.size ? "input-group-" + opts.size : "", opts.autoComplete ? "position: relative;" : "", opts.showSelect ? hx(_templateObject2$6, opts.vid, opts.activeValue || "请选择", opts.vid) : "", opts.vid, opts.placeholder, opts.name, val(opts.keyword), opts.autoComplete ? hx(_templateObject3$5, opts.vid) : "");
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

var _templateObject$6 = taggedTemplateLiteral([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$5 = taggedTemplateLiteral([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$4 = taggedTemplateLiteral([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$4 = taggedTemplateLiteral([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$4 = taggedTemplateLiteral([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

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
                    return hx(_templateObject$6);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$5, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$4, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item), item.children ? hx(_templateObject4$4, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5$4, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
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

var _templateObject$5 = taggedTemplateLiteral([ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ], [ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ]);

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
            var vDom = hx(_templateObject$5, opts.size == "lg" ? "btn-group-lg" : opts.size == "sm" ? "btn-group-sm" : "", opts.direction == "up" ? "dropup" : "", opts.btnType, val(opts.html || opts.text), opts.btnType, opts.vid);
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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ]);

var _templateObject2 = taggedTemplateLiteral([ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ], [ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ]);

var _templateObject3 = taggedTemplateLiteral([ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ], [ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ]);

var _templateObject4 = taggedTemplateLiteral([ '<facial id="facial-', '"></facial>' ], [ '<facial id="facial-', '"></facial>' ]);

var _templateObject5 = taggedTemplateLiteral([ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ], [ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ]);

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
            var vDom = hx(_templateObject, val(options.placeholder), options.vid, options.dropdownbtn ? hx(_templateObject2, options.vid) : hx(_templateObject3, options.submitType, val(options.submitText)), options.showFacial ? hx(_templateObject4, options.vid) : "", options.showUpload ? hx(_templateObject5, options.vid) : "", options.vid);
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

module.exports = Reply;
