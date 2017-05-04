/**
 * loading.js v0.5.25
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-spin-text">', "</div>" ], [ '<div class="lego-spin-text">', "</div>" ]);

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

var Loading = function(_Lego$View) {
    _inherits(Loading, _Lego$View);
    function Loading() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Loading);
        var options = {
            spinning: true,
            size: "",
            tip: "",
            icon: "anticon anticon-loading-3-quarters"
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, options));
    }
    _createClass(Loading, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject, Lego.config.spinning && opts.spinning ? "lego-spin" : "", val(opts.icon), val(opts.size), opts.tip ? hx(_templateObject2, opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Loading;
}(Lego.View);

Lego.components("loading", Loading);

module.exports = Loading;
