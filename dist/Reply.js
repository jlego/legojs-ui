/**
 * reply.js v0.3.0
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var Tether = _interopDefault(require("tether"));

var localresizeimg = _interopDefault(require("localresizeimg-cjs"));

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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-facial">\n            ', '\n            <div class="dropdown-menu clearfix ', '">\n                <ul>\n                ', "\n                </ul>\n            </div>\n        </div>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '<i class="lego-facial-trigger">', "</i>" ], [ '<i class="lego-facial-trigger">', "</i>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '<i class="lego-facial-trigger ', '"></i>' ], [ '<i class="lego-facial-trigger ', '"></i>' ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ], [ '\n                    <li class="lego-facial-item ', "", '"><a href="javascript:void(0);"\n                    title="', '"><img src="', "", '.gif" /></a></li>\n                ' ]);

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

var Facial = function(_Lego$UI$Baseview) {
    _inherits$1(Facial, _Lego$UI$Baseview);
    function Facial() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Facial);
        var options = {
            events: {
                "click .lego-facial-item a": "clickItem"
            },
            target: "",
            targetType: "textarea",
            icon: "anticon anticon-smile-o",
            text: "",
            eventName: "click",
            iconsUrl: "",
            itemClassPrefix: "f0",
            direction: "bottom",
            data: Lego.UI.Util.faceTags
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (Facial.__proto__ || Object.getPrototypeOf(Facial)).call(this, options));
        _this.cursorPos = null;
        _this.cursorContainer = null;
        var that = _this;
        $("body, .modal-body").click(function() {
            that.close();
        });
        return _this;
    }
    _createClass$1(Facial, [ {
        key: "render",
        value: function render() {
            var options = this.options, dataLength = options.data.length, widthPercent = 10 / (dataLength - 1) * 10;
            var vDom = hx(_templateObject$1, options.text ? hx(_templateObject2$1, val(options.text)) : hx(_templateObject3$1, options.icon), options.direction ? "drop" + options.direction : "", options.data.map(function(item, index) {
                return hx(_templateObject4$1, options.itemClassPrefix, index, item, options.iconsUrl || Lego.config.faceIconUri, index);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var target = this.$el, that = this, targetEl = this.options.target instanceof $ ? this.options.target : $(this.options.target);
            function handler(event) {
                event.stopPropagation();
                that.$el.toggleClass("dropdown open");
                if (that.options.eventName == "hover") {
                    target.mouseleave(function() {
                        that.close();
                    });
                }
            }
            if (this.options.eventName == "click") {
                var _eventName = "click.dropdown_" + this.options.vid;
                target.off(_eventName).on(_eventName, handler);
            } else {
                target[this.options.eventName](handler);
            }
            targetEl.off("click keyup").on("click keyup", function(event) {
                var el = $(event.currentTarget);
                that.getCursorPos(el);
            });
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), targetEl = this.options.target instanceof $ ? this.options.target : $(this.options.target);
            if (this.options.targetType == "div") {
                this.addComma(targetEl, target.attr("title"));
            } else {
                this.addOnPos(targetEl, target.attr("title"));
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
            if (!selector.html().length) this.cursorPos = 0;
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

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass$4 = function() {
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

function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

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
            _classCallCheck$4(this, Tooltip);
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
        _createClass$4(Tooltip, [ {
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
                if ((typeof content === "undefined" ? "undefined" : _typeof$2(content)) === "object" && (content.nodeType || content.jquery)) {
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
                var titleType = _typeof$2(this.element.getAttribute("data-original-title"));
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
                for (var trigger in this._activeTrigger) {
                    if (this._activeTrigger[trigger]) {
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
                var config = {};
                if (this.config) {
                    for (var key in this.config) {
                        if (this.constructor.Default[key] !== this.config[key]) {
                            config[key] = this.config[key];
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
                    var _config = (typeof config === "undefined" ? "undefined" : _typeof$2(config)) === "object" ? config : null;
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

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

function _classCallCheck$3(instance, Constructor) {
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
        _inherits$2(Popover, _Tooltip);
        function Popover() {
            _classCallCheck$3(this, Popover);
            return _possibleConstructorReturn$2(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
        }
        _createClass$3(Popover, [ {
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
                    var _config = (typeof config === "undefined" ? "undefined" : _typeof$1(config)) === "object" ? config : null;
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

var Popover = function() {
    function Popover() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Popover);
        var options = {
            el: "",
            selector: false,
            title: "",
            content: "",
            animation: true,
            container: false,
            delay: 0,
            html: false,
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            eventName: "click",
            constraints: [],
            offset: "0 0",
            onHidden: function onHidden() {}
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
    _createClass$2(Popover, [ {
        key: "render",
        value: function render() {
            var that = this;
            var el = this.el instanceof $ ? this.el : $(this.el);
            if (el.length) {
                el.popover(this.options);
                el.on("hidden.bs.popover", function() {
                    if (typeof that.onHidden === "function") that.onHidden(event);
                });
            }
            return el;
        }
    } ]);
    return Popover;
}();

var fun = function fun(opts) {
    return new Popover(opts);
};

Lego.components("popover", fun);

var _createClass$7 = function() {
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

function _classCallCheck$7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$5(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$5(subClass, superClass) {
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
    _inherits$5(UploadView, _Lego$View);
    function UploadView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$7(this, UploadView);
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
        var _this = _possibleConstructorReturn$5(this, (UploadView.__proto__ || Object.getPrototypeOf(UploadView)).call(this, options));
        _this.xhr = createXMLHTTPRequest();
        _this.startDate = 0;
        _this.form = null;
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
            if (_this.options.needToken && _this.options.params.token || !_this.options.needToken) {
                _this.uploadInit();
                if (_this.options.isAuto) _this.start();
            }
        }
        return _this;
    }
    _createClass$7(UploadView, [ {
        key: "uploadInit",
        value: function uploadInit() {
            var _this2 = this;
            var taking = 0, file = this.options.file, params = this.options.params;
            this.xhr.crossDomain = true;
            var progressbar = Lego.getView(this.$("#progressbar_" + this.options.vid));
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

var _createClass$8 = function() {
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

var _templateObject$4 = _taggedTemplateLiteral$4([ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ], [ '\n        <div class="progress">\n            ', '\n            <progress class="progress progress-', '" value="', '" max="100"></progress>\n        </div>\n        ' ]);

var _templateObject2$4 = _taggedTemplateLiteral$4([ '<div class="text-xs-center">', "</div>" ], [ '<div class="text-xs-center">', "</div>" ]);

function _taggedTemplateLiteral$4(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$6(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$6(subClass, superClass) {
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
    _inherits$6(Progressbar, _Lego$UI$Baseview);
    function Progressbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$8(this, Progressbar);
        var options = {
            type: "",
            status: "",
            showInfo: true,
            percent: 0,
            strokeWidth: 6,
            onComplete: function onComplete() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$6(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, options));
    }
    _createClass$8(Progressbar, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            if (options.percent == 100) {
                if (typeof options.onComplete == "function") options.onComplete(this);
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

var _createClass$6 = function() {
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

var _templateObject$3 = _taggedTemplateLiteral$3([ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="media lego-upload-item">\n            <div class="media-left">\n                <i class="anticon anticon-', '"></i>\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$3 = _taggedTemplateLiteral$3([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    <div class="right">\n                        <a href="javascript:;" class="lego-cancelbtn" id="', '"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ', '\n                </h4>\n                <progressbar id="', '"></progressbar>\n            </div>' ]);

var _templateObject3$3 = _taggedTemplateLiteral$3([ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ], [ '\n            <div class="media-body">\n                <h4 class="media-heading">\n                    ', "\n                    ", "\n                </h4>\n                <small>\n                    <cite>", '</cite>\n                    <time>\n                        <a href="', "?attname=", '" target="_blank">下载</a>\n                        <a href="#" style="display:none">预览</a>\n                    </time>\n                </small>\n            </div>\n            ' ]);

var _templateObject4$2 = _taggedTemplateLiteral$3([ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ], [ '\n                    <div class="right">\n                        <a href="javascript:;" class="lego-closebtn" id="', '"><i class="anticon anticon-cross float-xs-right close"></i></a>\n                    </div>\n                    ' ]);

function _taggedTemplateLiteral$3(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$4(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
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
    _inherits$4(UploadItem, _UploadBase);
    function UploadItem() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$6(this, UploadItem);
        var options = {
            events: {
                "click .lego-cancelbtn": "onCancel",
                "click .lego-closebtn": "onRemove"
            },
            uploadUri: "",
            percent: 0,
            isAuto: true,
            readonly: false,
            file: {},
            headers: {},
            params: {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onCancel: function onCancel() {},
            onRemove: function onRemove() {},
            components: [ {
                el: "#progressbar_" + opts.vid,
                showInfo: false,
                status: "success",
                onComplete: function onComplete(self) {
                    self.options.percent = 100;
                }
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$4(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).call(this, options));
    }
    _createClass$6(UploadItem, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$3, Lego.UI.Util.getFileIcon(options.file.name), options.percent < 100 ? hx(_templateObject2$3, val(options.file._id), val(options.file.name), "progressbar_" + options.vid) : hx(_templateObject3$3, !options.readonly && options.percent == 100 ? hx(_templateObject4$2, val(options.file._id)) : "", val(options.file.name), Lego.UI.Util.convertByteUnit(options.file.size), val(options.file.url), val(options.file.name)));
            return vDom;
        }
    }, {
        key: "onCancel",
        value: function onCancel(event) {
            var _this2 = this;
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            this.cancel();
            if (typeof this.options.onCancel == "function") this.options.onCancel("cancel", _id);
            this.$el.slideUp("normal", function() {
                _this2.$el.remove();
            });
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            var _this3 = this;
            event.stopPropagation();
            var target = $(event.target), _id = target.parent().attr("id");
            if (typeof this.options.onRemove == "function") this.options.onRemove("remove", _id);
            this.$el.slideUp("normal", function() {
                _this3.$el.remove();
            });
        }
    } ]);
    return UploadItem;
}(UploadView);

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass$5 = function() {
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

var _templateObject$2 = _taggedTemplateLiteral$2([ '\n        <div class="lego-upload lego-upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-upload lego-upload-', '">\n            ', '\n            <input type="hidden" value="', '" name="', '" class="lego-upload-value">\n            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="', '" style="display:none">\n            ', "\n        </div>\n        " ]);

var _templateObject2$2 = _taggedTemplateLiteral$2([ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ], [ '\n            <button class="btn btn-secondary lego-addbtn" type="button" ', '>\n                <i class="anticon anticon-upload"></i>\n                ', "\n            </button>\n            " ]);

var _templateObject3$2 = _taggedTemplateLiteral$2([ '<div class="lego-upload-container"></div>' ], [ '<div class="lego-upload-container"></div>' ]);

function _taggedTemplateLiteral$2(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$5(instance, Constructor) {
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

var Upload = function(_Lego$UI$Baseview) {
    _inherits$3(Upload, _Lego$UI$Baseview);
    function Upload() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$5(this, Upload);
        var options = {
            events: {
                "click .lego-addbtn": "onClickAdd"
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
            onAddFile: function onAddFile() {},
            onBegin: function onBegin() {},
            onProgress: function onProgress() {},
            onComplete: function onComplete() {},
            onFail: function onFail() {},
            onRemove: function onRemove() {},
            onCancel: function onCancel() {}
        };
        Object.assign(options, opts);
        if (options.value.length) {
            options.value = options.value.map(function(file) {
                return {
                    readonly: options.readonly,
                    percent: 100,
                    file: file
                };
            });
        }
        var _this = _possibleConstructorReturn$3(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, options));
        _this.fileList = [];
        _this.clear();
        _this.$(".lego-fileInput").on("change", function(event) {
            var target = $(event.currentTarget)[0];
            _this.uploadInit(target.files, target);
        });
        if (_this.options.value.length) {
            _this.options.value.forEach(function(item, index) {
                _this.showItem(item);
            });
        }
        return _this;
    }
    _createClass$5(Upload, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = "";
            vDom = hx(_templateObject$2, val(options.type), !options.readonly ? hx(_templateObject2$2, options.disabled ? "disabled" : "", val(options.buttonText)) : "", this.getValue().join(","), val(options.name), val(options.accept), options.showUploadList ? hx(_templateObject3$2) : "");
            return options.template ? options.template : vDom;
        }
    }, {
        key: "uploadInit",
        value: function uploadInit(files, fileInput) {
            var _this2 = this;
            var uploadFiles = [];
            if ((typeof files === "undefined" ? "undefined" : _typeof$3(files)) == "object" && files[0]) {
                uploadFiles = Array.prototype.slice.call(files, 0);
            } else {
                uploadFiles = [ files ];
            }
            if (fileInput) fileInput.value = "";
            var that = this, options = this.options, filesCount = uploadFiles.length, maxFilesCount = options.maxFilesCount;
            if (filesCount) {
                if (filesCount > maxFilesCount) {
                    Lego.UI.message("warning", "只能上传" + maxFilesCount + "张图片");
                    return;
                }
                uploadFiles = uploadFiles.filter(function(file) {
                    file._id = [ file.name, file.size, file.lastModified ].join("_");
                    var hasFile = _this2.fileList.includes(file._id);
                    if (!hasFile) _this2.fileList.push(file._id);
                    return !hasFile;
                });
                if (typeof options.onAddFile == "function") options.onAddFile(this.fileList, uploadFiles);
                uploadFiles.forEach(function(file, i) {
                    if (Math.ceil(file.size / (1024 * 1024)) > parseInt(options.maxFileSize)) {
                        var msg = "发送文件最大为" + options.maxFileSize;
                        if (uploadFiles.length == 1) {
                            Lego.UI.message("error", msg);
                        } else {
                            debug.warn(msg);
                        }
                        return;
                    }
                    if (i > maxFilesCount - 1) return;
                    var uploadOption = {
                        el: ".lego-upload-container",
                        uploadUri: options.uploadUri,
                        readonly: options.readonly,
                        isAuto: options.isAuto,
                        file: file,
                        type: options.type,
                        percent: 0,
                        params: Object.assign({
                            key: options.key || that.getKey(file.name),
                            token: typeof options.data == "string" ? options.data : ""
                        }, options.params || {}),
                        needToken: true,
                        onBegin: options.onBegin,
                        onProgress: options.onProgress,
                        onComplete: function onComplete(self, resp) {
                            var hasFile = options.value.find(function(item) {
                                return item.file.hash == resp.hash;
                            });
                            if (!hasFile && options.value.length <= maxFilesCount) {
                                resp.url = Lego.config.downloadUri + resp.key;
                                options.value.push({
                                    file: resp,
                                    type: options.type,
                                    percent: 100
                                });
                            }
                            if (typeof options.onComplete == "function") options.onComplete(that, resp);
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
            var callback = function callback(type, _id) {
                _this3.fileList = _this3.fileList.filter(function(value) {
                    return value !== _id;
                });
                if (type == "cancel") {
                    if (typeof _this3.options.onCancel == "function") _this3.options.onCancel(_this3, _id);
                } else {
                    _this3.options.value = _this3.options.value.filter(function(item) {
                        return item.file._id !== _id;
                    });
                    if (typeof _this3.options.onRemove == "function") _this3.options.onRemove(_this3, _id);
                }
                _this3.refresh();
            };
            uploadOption.context = this;
            uploadOption.insert = this.options.multiple ? "append" : "html";
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
        key: "clear",
        value: function clear() {
            this.fileList.length = 0;
            this.options.value.length = 0;
            return this;
        }
    } ]);
    return Upload;
}(Lego.UI.Baseview);

Lego.components("upload", Upload);

var _createClass$10 = function() {
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

var _templateObject$6 = _taggedTemplateLiteral$6([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$5 = _taggedTemplateLiteral$6([ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">\n                    ', "\n                    </a>\n                    </li>" ], [ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">\n                    ', "\n                    </a>\n                    </li>" ]);

var _templateObject3$4 = _taggedTemplateLiteral$6([ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$3 = _taggedTemplateLiteral$6([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$1 = _taggedTemplateLiteral$6([ '\n        <ul class="dropdown-menu ', '" style="display:', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu ', '" style="display:', '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral$6(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$8(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$8(subClass, superClass) {
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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$8(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$10(this, Dropdown);
        var options = {
            events: {
                "click li:not(.dropdown)": "clickItem"
            },
            disabled: false,
            eventName: "click",
            container: "",
            direction: "",
            activeKey: "",
            clickAndClose: true,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$8(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
        _this.isLoaded = false;
        return _this;
    }
    _createClass$10(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$6);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$5, val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$4, val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4$3, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5$1, options.direction ? "drop" + options.direction : "", options.open ? "block" : "none", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, _eventName = "click.dropdown_" + this.options.vid;
            this.container = this.options.container instanceof $ ? this.options.container : $(this.options.container);
            if (!this.options.disabled) {
                var handler = function handler(event) {
                    $("body, .modal-body").trigger("click", that.options.vid);
                    event.stopPropagation();
                    that.$el.slideToggle("fast");
                };
                if (this.options.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event, vid) {
                        if (vid !== that.options.vid) that.close();
                    });
                    this.container.off(_eventName).on(_eventName, handler);
                } else {
                    this.container.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
            }
        }
    }, {
        key: "_getAlign",
        value: function _getAlign(parent, el) {
            var _X = parent.offset().left, _Y = parent.offset().top - el.height(), windowWidth = $(window).width() - 20, elWidth = el.width();
            if (windowWidth > _X + elWidth) {
                return "left";
            } else {
                return "right";
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.$el.slideDown("fast");
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
            if (model) this.options.onChange(this, model, event);
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

var _createClass$9 = function() {
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

var _templateObject$5 = _taggedTemplateLiteral$5([ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ], [ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ]);

function _taggedTemplateLiteral$5(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$7(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$7(subClass, superClass) {
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

var Dropdownbtn = function(_Lego$UI$Baseview) {
    _inherits$7(Dropdownbtn, _Lego$UI$Baseview);
    function Dropdownbtn() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$9(this, Dropdownbtn);
        var options = {
            events: {
                "click button.dropdownbtn, .lego-reply-submit": "onClick"
            },
            text: "button name",
            btnType: "secondary",
            size: "default",
            direction: "",
            activeKey: "",
            dropdownOption: {},
            onClick: function onClick() {},
            onChange: function onChange() {},
            components: function components(opts) {
                return [ $.extend(opts.dropdownOption, {
                    el: "#dropdown-" + opts.vid,
                    container: "[view-id=" + opts.vid + "]",
                    direction: opts.direction,
                    activeKey: opts.activeKey,
                    data: opts.data,
                    onChange: function onChange(self, item, event) {
                        var theView = self.options.context;
                        theView.activeItem = item;
                        if (typeof theView.options.onChange == "function") theView.options.onChange(theView, item);
                    }
                }) ];
            }
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$7(this, (Dropdownbtn.__proto__ || Object.getPrototypeOf(Dropdownbtn)).call(this, options));
        _this.activeItem = {};
        return _this;
    }
    _createClass$9(Dropdownbtn, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$5, options.size == "large" ? "btn-group-lg" : options.size == "small" ? "btn-group-sm" : "", options.direction == "up" ? "dropup" : "", options.btnType, val(options.html || options.text), options.btnType, options.vid);
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
            if (typeof this.options.onClick === "function") this.options.onClick(this, this.activeItem, event);
        }
    } ]);
    return Dropdownbtn;
}(Lego.UI.Baseview);

Lego.components("dropdownbtn", Dropdownbtn);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="lego-reply">\n            <textarea placeholder="', '" class="form-control lego-reply-content" id="content-', '"></textarea>\n            ', '\n            <div class="lego-reply-toolbar">\n                ', "\n                ", '\n            </div>\n            <div class="popover popover-bottom" style="display:none;">\n                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>\n                <div class="popover-content"><upload id="upload-', '"></upload></div>\n            </div>\n        </div>\n        ' ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ], [ '\n            <dropdownbtn id="dropdownbtn-', '"></dropdownbtn>\n            ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ], [ '\n            <button type="button" class="btn btn-', ' lego-reply-submit">', "</button>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<facial id="facial-', '"></facial>' ], [ '<facial id="facial-', '"></facial>' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ], [ '<div id="annex-', '" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>' ]);

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

var Reply = function(_Lego$UI$Baseview) {
    _inherits(Reply, _Lego$UI$Baseview);
    function Reply() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Reply);
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
            uploadToken: null,
            iconsUrl: "",
            submitText: "回复",
            submitType: "primary",
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
                iconsUrl: options.iconsUrl
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
        var _this = _possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this, options));
        _this.uploadView = null;
        _this.placeholder = '<span class="lego-reply-ph">' + _this.options.placeholder + "</span>";
        return _this;
    }
    _createClass(Reply, [ {
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
            if (target.find(".lego-reply-ph").length) target.html("");
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
                    this.onSubmit(event);
                }
                if (event.ctrlKey) {
                    Lego.UI.Util.insertText(target, Lego.UI.Util.checkBrowser().mozilla ? "<br>" : "<br><br>");
                }
            }
        }
    }, {
        key: "getUploadIds",
        value: function getUploadIds() {
            if (this.uploadView) return this.uploadView.getValue();
            return [];
        }
    }, {
        key: "submit",
        value: function submit(event) {
            if (event) event.stopPropagation();
            var contentEl = this.$(".lego-reply-content");
            if (contentEl.val().length > this.options.maxTextLength) {
                Lego.UI.message("warning", "提交内容不能大于500个字符");
                return;
            }
            var contentHtml = contentEl.val();
            contentEl.val("");
            contentHtml = contentHtml == this.placeholder ? "" : contentHtml;
            var uploadIds = Array.from(this.getUploadIds());
            if (this.uploadView) this.uploadView.clear();
            this.$(".popover").removeClass("show");
            if (typeof this.options.onSubmit == "function") this.options.onSubmit(this, contentHtml, uploadIds);
        }
    } ]);
    return Reply;
}(Lego.UI.Baseview);

Lego.components("reply", Reply);

module.exports = Reply;
