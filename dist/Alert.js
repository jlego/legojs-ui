/**
 * alert.js v0.9.63
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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", " ", '">\n            <i class="anticon ', " lego-alert", '-icon" style="display:', ';"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);

var _templateObject3 = taggedTemplateLiteral([ '<a class="lego-alert-close-icon">', "</a>" ], [ '<a class="lego-alert-close-icon">', "</a>" ]);

var _templateObject4 = taggedTemplateLiteral([ '<i class="anticon anticon-cross"></i>' ], [ '<i class="anticon anticon-cross"></i>' ]);

var Alert = function(_Lego$UI$Baseview) {
    inherits(Alert, _Lego$UI$Baseview);
    function Alert() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Alert);
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
        return possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, options));
    }
    createClass(Alert, [ {
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
            var vDom = hx(_templateObject, options.type, options.description ? "lego-alert-with-description" : "", options.showIcon ? "" : "lego-alert-no-icon", options.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", options.showIcon ? "" : "-no", options.showIcon ? "" : "none", options.message, options.description ? hx(_templateObject2, typeof options.description == "string" ? options.description : "") : "", options.closeAble ? hx(_templateObject3, options.closeText || hx(_templateObject4)) : "");
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

module.exports = Alert;
