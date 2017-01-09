/**
 * common.js v0.2.0
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

var toastr = _interopDefault(require("toastr"));

var toastr_build_toastr_css = require("toastr/build/toastr.css");

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

var Util = {
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
    }
};

window.val = function(value, defaultValue) {
    return value ? value : defaultValue || "";
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
                    scrollbarEl.css("overflow", "hidden");
                    scrollbarEl.each(function(index, el) {
                        var container = $(this), eventName = "mousemove.ps" + index, posi = container.parent().css("position");
                        if (!posi || posi !== "fixed") container.parent().css("position", "relative");
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
