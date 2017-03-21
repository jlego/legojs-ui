/**
 * badge.js v0.3.21
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

var _templateObject = _taggedTemplateLiteral([ "<div>\n          ", "\n        </div>" ], [ "<div>\n          ", "\n        </div>" ]);

var _templateObject2 = _taggedTemplateLiteral([ '<a id="', '" href="#/home" style="display:block;">', "</a>\n" ], [ '<a id="', '" href="#/home" style="display:block;">', "</a>\\n" ]);

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

var Badge = function(_Lego$UI$Baseview) {
    _inherits(Badge, _Lego$UI$Baseview);
    function Badge() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Badge);
        var options = {
            events: {
                "click #400": "theClick"
            }
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, options));
    }
    _createClass(Badge, [ {
        key: "render",
        value: function render() {
            var options = this.options || [];
            var vDom = hx(_templateObject, options.map(function(model, i) {
                return hx(_templateObject2, model.first, model.first);
            }));
            return vDom;
        }
    }, {
        key: "theClick",
        value: function theClick(event) {
            event.stopPropagation();
            Lego.trigger("data_update", {
                aa: 1
            });
        }
    } ]);
    return Badge;
}(Lego.UI.Baseview);

module.exports = Badge;
