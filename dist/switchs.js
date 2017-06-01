/**
 * switchs.js v0.7.9
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-switch">\n            <input type="hidden" name="', '" value="', '" />\n            <span class="switch-', " ", " ", '"\n            onclick=', ">\n                <span class='slider'></span>\n            </span>\n        </div>\n        " ], [ '\n        <div class="lego-switch">\n            <input type="hidden" name="', '" value="', '" />\n            <span class="switch-', " ", " ", '"\n            onclick=', ">\n                <span class='slider'></span>\n            </span>\n        </div>\n        " ]);

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

var Switchs = function(_Lego$UI$Baseview) {
    _inherits(Switchs, _Lego$UI$Baseview);
    function Switchs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Switchs);
        var options = {
            checked: false,
            themeColor: "#01a8fe",
            disabled: false,
            size: "sm",
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Switchs.__proto__ || Object.getPrototypeOf(Switchs)).call(this, options));
    }
    _createClass(Switchs, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.name, opts.checked ? 1 : "", opts.checked ? "on" : "off", opts.disable ? "switch-disabled" : "", opts.size, this.onClick.bind(this));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, that = this;
            if (opts.themeColor) {
                var color = opts.themeColor;
                this.$(".switch-on").css({
                    "border-color": color,
                    "box-shadow": color + " 0px 0px 0px 16px inset",
                    "background-color": color
                });
                this.$(".switch-off").css({
                    "border-color": "#ddd",
                    "box-shadow": "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                    "background-color": "#ddd"
                });
            }
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (target.hasClass("switch-disabled")) {
                return;
            }
            if (target.hasClass("switch-on")) {
                this.showOff();
            } else {
                this.showOn();
            }
        }
    }, {
        key: "showOn",
        value: function showOn() {
            var opts = this.options;
            opts.checked = true;
            if (typeof opts.onChange == "function") opts.onChange(this, true);
        }
    }, {
        key: "showOff",
        value: function showOff() {
            var opts = this.options;
            opts.checked = false;
            if (typeof opts.onChange == "function") opts.onChange(this, false);
        }
    } ]);
    return Switchs;
}(Lego.UI.Baseview);

Lego.components("switchs", Switchs);

module.exports = Switchs;
