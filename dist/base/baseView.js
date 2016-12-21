/**
 * baseView.js v0.0.4
 * (c) 2016 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var perfectScrollbar_dist_css_perfectScrollbar_css = require("perfect-scrollbar/dist/css/perfect-scrollbar.css");

var perfectScrollbar = _interopDefault(require("perfect-scrollbar"));

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

window.Ps = perfectScrollbar;

var BaseView = function(_Lego$View) {
    _inherits(BaseView, _Lego$View);
    function BaseView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, BaseView);
        var options = {};
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (BaseView.__proto__ || Object.getPrototypeOf(BaseView)).call(this, options));
    }
    _createClass(BaseView, [ {
        key: "_renderComponents",
        value: function _renderComponents() {
            var _this2 = this;
            var that = this;
            if (this.options.components.length && !this.isloaded) {
                this.isloaded = true;
                this.options.components.forEach(function(item, i) {
                    Lego.create(item);
                });
            }
            if (this.options.scrollbar) {
                (function() {
                    if (!_this2.$el.css("position")) _this2.$el.css("position", "relative");
                    var container = _this2.$el.find(".perfect-scrollbar")[0];
                    Ps.initialize(container, _this2.options.scrollbar);
                    _this2.$el.off("mousemove.ps").on("mousemove.ps", function() {
                        Ps.update(container);
                    });
                })();
            }
        }
    } ]);
    return BaseView;
}(Lego.View);

module.exports = BaseView;
