/**
 * tooltip.js v0.5.47
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var Tether = _interopDefault(require("tether"));

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

window.Tether = Tether;

var Tooltip$1 = function($) {
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
            _classCallCheck$1(this, Tooltip);
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
        _createClass$1(Tooltip, [ {
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

var Tooltip = function() {
    function Tooltip() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tooltip);
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
    _createClass(Tooltip, [ {
        key: "render",
        value: function render() {
            var that = this;
            var el = this.el instanceof $ ? this.el : $(this.el);
            if (el.length) {
                el.tooltip(this.options);
                el.on("hidden.bs.tooltip", function() {
                    if (typeof that.onClose === "function") that.onClose(event);
                });
            }
            return el;
        }
    } ]);
    return Tooltip;
}();

var fun = function fun(opts) {
    return new Tooltip(opts);
};

Lego.components("tooltip", fun);

module.exports = fun;
