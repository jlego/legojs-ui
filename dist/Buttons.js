/**
 * buttons.js v0.8.34
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

var _templateObject = _taggedTemplateLiteral([ '\n        <button type="', '" class="btn btn-', "\n        ", " ", '" ', ">\n            ", "\n            ", "\n            ", "\n        </button>\n        " ], [ '\n        <button type="', '" class="btn btn-', "\n        ", " ", '" ', ">\n            ", "\n            ", "\n            ", "\n        </button>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<i class="', '"></i>' ], [ '<i class="', '"></i>' ]);

var _templateObject3 = _taggedTemplateLiteral([ "<span>", "</span>" ], [ "<span>", "</span>" ]);

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

var Buttons = function(_Lego$UI$Baseview) {
    _inherits(Buttons, _Lego$UI$Baseview);
    function Buttons() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Buttons);
        var options = {
            events: {
                click: "onClick"
            },
            text: "button",
            type: "secondary",
            htmlType: "button",
            disabled: false,
            icon: "",
            afterIcon: "",
            shape: "",
            size: "",
            loading: false,
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, options));
    }
    _createClass(Buttons, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.htmlType, options.type == "dashed" ? "secondary lego-btn-dashed" : options.type, options.size ? "btn-" + options.size : "", options.shape ? "lego-btn-" + options.shape : "default", options.disabled ? "disabled" : "", options.icon ? hx(_templateObject2, options.icon) : "", options.html || options.text ? hx(_templateObject3, options.html || options.text) : "", options.afterIcon ? hx(_templateObject2, options.afterIcon) : "");
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick == "function") this.options.onClick(this, event);
        }
    } ]);
    return Buttons;
}(Lego.UI.Baseview);

Lego.components("buttons", Buttons);

module.exports = Buttons;
