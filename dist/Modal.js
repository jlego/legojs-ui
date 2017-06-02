/**
 * modal.js v0.8.8
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var Modal$1 = function($) {
    var NAME = "modal";
    var VERSION = "4.0.0-alpha.5";
    var DATA_KEY = "bs.modal";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27;
    var Default = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    };
    var DefaultType = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        RESIZE: "resize" + EVENT_KEY,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        IN: "in"
    };
    var Selector = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
    };
    var Modal = function() {
        function Modal(element, config) {
            _classCallCheck$1(this, Modal);
            this._config = this._getConfig(config);
            this._element = element;
            this._dialog = $(element).find(Selector.DIALOG)[0];
            this._backdrop = null;
            this._isShown = false;
            this._isBodyOverflowing = false;
            this._ignoreBackdropClick = false;
            this._originalBodyPadding = 0;
            this._scrollbarWidth = 0;
        }
        _createClass$1(Modal, [ {
            key: "toggle",
            value: function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
        }, {
            key: "show",
            value: function show(relatedTarget) {
                var _this = this;
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });
                $(this._element).trigger(showEvent);
                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                $(document.body).addClass(ClassName.OPEN);
                this._setEscapeEvent();
                this._setResizeEvent();
                $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));
                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                    $(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
                        if ($(event.target).is(_this._element)) {
                            _this._ignoreBackdropClick = true;
                        }
                    });
                });
                this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
            }
        }, {
            key: "hide",
            value: function hide(event) {
                if (event) {
                    event.preventDefault();
                }
                var hideEvent = $.Event(Event.HIDE);
                $(this._element).trigger(hideEvent);
                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }
                this._isShown = false;
                this._setEscapeEvent();
                this._setResizeEvent();
                $(document).off(Event.FOCUSIN);
                $(this._element).removeClass(ClassName.IN);
                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    this._hideModal();
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(window).off(EVENT_KEY);
                $(document).off(EVENT_KEY);
                $(this._element).off(EVENT_KEY);
                $(this._backdrop).off(EVENT_KEY);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._originalBodyPadding = null;
                this._scrollbarWidth = null;
            }
        }, {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            }
        }, {
            key: "_showElement",
            value: function _showElement(relatedTarget) {
                var _this2 = this;
                var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    document.body.appendChild(this._element);
                }
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.scrollTop = 0;
                if (transition) {
                    Util.reflow(this._element);
                }
                $(this._element).addClass(ClassName.IN);
                if (this._config.focus) {
                    this._enforceFocus();
                }
                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });
                var transitionComplete = function transitionComplete() {
                    if (_this2._config.focus) {
                        _this2._element.focus();
                    }
                    $(_this2._element).trigger(shownEvent);
                };
                if (transition) {
                    $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    transitionComplete();
                }
            }
        }, {
            key: "_enforceFocus",
            value: function _enforceFocus() {
                var _this3 = this;
                $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function(event) {
                    if (document !== event.target && _this3._element !== event.target && !$(_this3._element).has(event.target).length) {
                        _this3._element.focus();
                    }
                });
            }
        }, {
            key: "_setEscapeEvent",
            value: function _setEscapeEvent() {
                var _this4 = this;
                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            _this4.hide();
                        }
                    });
                } else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            }
        }, {
            key: "_setResizeEvent",
            value: function _setResizeEvent() {
                if (this._isShown) {
                    $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
                } else {
                    $(window).off(Event.RESIZE);
                }
            }
        }, {
            key: "_hideModal",
            value: function _hideModal() {
                var _this5 = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", "true");
                this._showBackdrop(function() {
                    $(document.body).removeClass(ClassName.OPEN);
                    _this5._resetAdjustments();
                    _this5._resetScrollbar();
                    $(_this5._element).trigger(Event.HIDDEN);
                });
            }
        }, {
            key: "_removeBackdrop",
            value: function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            }
        }, {
            key: "_showBackdrop",
            value: function _showBackdrop(callback) {
                var _this6 = this;
                var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = ClassName.BACKDROP;
                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }
                    $(this._backdrop).appendTo(document.body);
                    $(this._element).on(Event.CLICK_DISMISS, function(event) {
                        if (_this6._ignoreBackdropClick) {
                            _this6._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) {
                            return;
                        }
                        if (_this6._config.backdrop === "static") {
                            _this6._element.focus();
                        } else {
                            _this6.hide();
                        }
                    });
                    if (doAnimate) {
                        Util.reflow(this._backdrop);
                    }
                    $(this._backdrop).addClass(ClassName.IN);
                    if (!callback) {
                        return;
                    }
                    if (!doAnimate) {
                        callback();
                        return;
                    }
                    $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.IN);
                    var callbackRemove = function callbackRemove() {
                        _this6._removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };
                    if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else {
                        callbackRemove();
                    }
                } else if (callback) {
                    callback();
                }
            }
        }, {
            key: "_handleUpdate",
            value: function _handleUpdate() {
                this._adjustDialog();
            }
        }, {
            key: "_adjustDialog",
            value: function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + "px";
                }
                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetAdjustments",
            value: function _resetAdjustments() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            }
        }, {
            key: "_checkScrollbar",
            value: function _checkScrollbar() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            }
        }, {
            key: "_setScrollbar",
            value: function _setScrollbar() {
                var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "";
                if (this._isBodyOverflowing) {
                    document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + "px";
                }
            }
        }, {
            key: "_resetScrollbar",
            value: function _resetScrollbar() {
                document.body.style.paddingRight = this._originalBodyPadding;
            }
        }, {
            key: "_getScrollbarWidth",
            value: function _getScrollbarWidth() {
                var scrollDiv = document.createElement("div");
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }
        } ], [ {
            key: "_jQueryInterface",
            value: function _jQueryInterface(config, relatedTarget) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === "undefined" ? "undefined" : _typeof(config)) === "object" && config);
                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }
                    if (typeof config === "string") {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config](relatedTarget);
                    } else if (_config.show) {
                        data.show(relatedTarget);
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
        } ]);
        return Modal;
    }();
    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        var _this7 = this;
        var target = void 0;
        var selector = Util.getSelectorFromElement(this);
        if (selector) {
            target = $(selector)[0];
        }
        var config = $(target).data(DATA_KEY) ? "toggle" : $.extend({}, $(target).data(), $(this).data());
        if (this.tagName === "A") {
            event.preventDefault();
        }
        var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                return;
            }
            $target.one(Event.HIDDEN, function() {
                if ($(_this7).is(":visible")) {
                    _this7.focus();
                }
            });
        });
        Modal._jQueryInterface.call($(target), config, this);
    });
    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Modal._jQueryInterface;
    };
    return Modal;
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '<a class="lego-alert-close-icon">', "</a>" ], [ '<a class="lego-alert-close-icon">', "</a>" ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '<i class="anticon anticon-cross"></i>' ], [ '<i class="anticon anticon-cross"></i>' ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$2(instance, Constructor) {
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

var Alert = function(_Lego$UI$Baseview) {
    _inherits$1(Alert, _Lego$UI$Baseview);
    function Alert() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Alert);
        var options = {
            events: {
                "click .lego-alert-close-icon": "close"
            },
            type: "info",
            closeAble: false,
            closeText: "",
            message: "",
            description: "",
            onClose: function onClose() {},
            showIcon: true,
            banner: false
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, options));
    }
    _createClass$2(Alert, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var iconName = "";
            switch (options.type) {
              case "success":
                iconName = "check";
                break;

              case "info":
                iconName = "info";
                break;

              case "warning":
                iconName = "exclamation";
                break;

              case "error":
                iconName = "cross";
                break;
            }
            var vDom = hx(_templateObject$1, options.type, options.description ? "lego-alert-with-description" : "", options.showIcon ? "" : "lego-alert-no-icon", options.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", options.showIcon ? "" : "-no", options.showIcon ? "" : "none", options.message, options.description ? hx(_templateObject2$1, typeof options.description == "string" ? options.description : "") : "", options.closeAble ? hx(_templateObject3$1, options.closeText || hx(_templateObject4$1)) : "");
            return vDom;
        }
    }, {
        key: "close",
        value: function close(event) {
            var _this2 = this;
            event.stopPropagation();
            this.$el.slideUp("normal", function() {
                _this2.remove();
            });
            if (typeof this.options.onClose === "function") this.options.onClose(this, event);
        }
    } ]);
    return Alert;
}(Lego.UI.Baseview);

Lego.components("alert", Alert);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ], [ '\n        <div class="modal ', "\n        ", "\n        ", "\n        ", '" id="', '">\n          <div class="modal-dialog">\n            <div class="modal-content">\n              ', '\n              <div class="modal-body ', '" style="', "\n              ", '">\n                ', "\n              </div>\n              ", "\n            </div>\n          </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="modal-header">\n              ', '\n                <h5 class="modal-title">', "</h5>\n              </div>" ], [ '<div class="modal-header">\n              ', '\n                <h5 class="modal-title">', "</h5>\n              </div>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ], [ '<button type="button" class="close"><span class="anticon anticon-close"></span></button>' ]);

var _templateObject4 = _taggedTemplateLiteral([ '<div class="modal-footer">\n              ', "\n              </div>" ], [ '<div class="modal-footer">\n              ', "\n              </div>" ]);

var _templateObject5 = _taggedTemplateLiteral([ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ], [ '<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">', '</button>\n                <button type="button" class="btn btn-primary ok">', "</button></div>" ]);

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

var Modal = function(_Lego$UI$Baseview) {
    _inherits(Modal, _Lego$UI$Baseview);
    function Modal() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Modal);
        var typeArr = {
            success: "anticon anticon-check-circle-o",
            info: "anticon anticon-info-circle-o",
            warning: "anticon anticon-exclamation-circle-o",
            error: "anticon anticon-cross-circle-o",
            alert: "anticon anticon-question-circle-o"
        };
        var options = {
            events: {
                "click .modal-footer button.ok": "clickOk",
                "click .modal-footer button.cancel": "clickCancel",
                "click .close": "clickCancel",
                "click .modal-dialog": function clickModalDialog(event) {
                    event.stopPropagation();
                },
                click: "clickBackdrop"
            },
            msgType: "",
            title: "提示",
            size: "",
            type: "modal",
            animateIn: Lego.config.animateAble ? "fadeIn" : "",
            animateOut: Lego.config.animateAble ? "fadeOut" : "",
            width: "",
            isMiddle: false,
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: "",
            footer: "",
            confirm: null,
            scrollbar: {},
            scrollAble: true,
            okText: "确定",
            cancelText: "取消",
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        if (options.msgType) options.type = "dialog";
        if (typeArr[options.msgType] && typeof options.content == "string") {
            var alertObj = Lego.create(Alert, {
                type: options.msgType,
                closable: false,
                message: options.content,
                description: true
            });
            options.content = alertObj.render();
        }
        if (!options.el) {
            var modalId = "lego-" + options.type + "-" + options.vid;
            $("body").append("<" + options.type + ' id="' + modalId + '"></' + options.type + ">");
            options.el = "#" + modalId;
        }
        if (options.type == "layer" && Lego.config.animateAble) {
            options.animateIn = "slideInRight";
            options.animateOut = "slideOutRight";
        }
        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, options));
    }
    _createClass(Modal, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject, options.type == "layer" ? "right-modal" : "", options.msgType ? "dialog-modal" : "", options.size ? "modal-size-" + options.size : "", options.isMiddle ? "middle" : "", options.el.replace(/#/, ""), options.showHeader ? hx(_templateObject2, options.closable ? hx(_templateObject3) : "", options.title) : "", !options.msgType && options.scrollAble ? "scrollbar" : "", !options.showHeader && options.type == "layer" ? "top:0;" : "", !options.showFooter && options.type == "layer" ? "bottom:0;" : "", options.content, options.showFooter ? hx(_templateObject4, options.footer ? val(options.footer) : hx(_templateObject5, options.cancelText, options.okText)) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options;
            this.$el.modal({
                backdrop: opts.type !== "layer" ? opts.backdrop : false,
                keyboard: opts.keyboard,
                show: true
            });
            if (opts.width) this.$(".modal-dialog").width(opts.width);
            if (opts.height) this.$(".modal-body").height(opts.height);
            this.$el.on("hidden.bs.modal", function(e) {
                that.$el.remove();
                if (typeof opts.onClose === "function") opts.onClose(that);
            });
            if (opts.animateIn) Lego.UI.Util.animateCss(this.$el, opts.animateIn);
        }
    }, {
        key: "close",
        value: function close() {
            var that = this;
            if (this.options.animateOut) {
                Lego.UI.Util.animateCss(that.$el, that.options.animateOut, function() {
                    that.$el.modal("hide");
                });
                if (this.options.backdrop) $(".modal-backdrop").fadeOut();
            } else {
                this.$el.modal("hide");
            }
        }
    }, {
        key: "clickBackdrop",
        value: function clickBackdrop(event) {
            event.stopPropagation();
            this._onConfirm("onCancel", true);
        }
    }, {
        key: "_showDialog",
        value: function _showDialog() {
            var that = this;
            Lego.create(Modal, {
                msgType: this.options.confirm.msgType || "warning",
                content: this.options.confirm.content || "",
                backdrop: this.options.confirm.backdrop,
                onOk: function onOk(self) {
                    that.close();
                    self.close();
                }
            });
        }
    }, {
        key: "_onConfirm",
        value: function _onConfirm(funName, isBackdrop) {
            if (this.options.confirm && this.options[funName]) {
                this._showDialog();
            } else {
                if (isBackdrop) {
                    var closeAble = true;
                    if (this.options.backdrop == "static") closeAble = false;
                    if (funName !== "onOk" && closeAble) this.close();
                } else {
                    if (funName !== "onOk") this.close();
                }
            }
            if (typeof this.options[funName] === "function") this.options[funName](this);
        }
    }, {
        key: "clickOk",
        value: function clickOk(event) {
            event.stopPropagation();
            this._onConfirm("onOk");
        }
    }, {
        key: "clickCancel",
        value: function clickCancel(event) {
            event.stopPropagation();
            this._onConfirm("onCancel");
        }
    } ]);
    return Modal;
}(Lego.UI.Baseview);

var theModal = function theModal() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var vid = arguments[1];
    if (typeof opts == "string") {
        var type = opts.indexOf(".") > 0 ? opts.split(".")[1] : "layer";
        var view = Lego.getView("#lego-" + type + "-" + vid);
        if (view) view.close();
    } else {
        Lego.create(Modal, opts);
    }
};

Lego.components("modal", theModal);

module.exports = theModal;
