/**
 * nodata.js v0.12.4
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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="lego-tip-text" style="', '">', "</div>" ], [ '<div class="lego-tip-text" style="', '">', "</div>" ]);

var Nodata = function(_Lego$View) {
    inherits(Nodata, _Lego$View);
    function Nodata() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Nodata);
        var options = {
            size: "",
            tip: "暂无数据",
            icon: ""
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Nodata.__proto__ || Object.getPrototypeOf(Nodata)).call(this, options));
    }
    createClass(Nodata, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject, val(opts.icon), opts.size ? "lego-icon-" + opts.size : "", opts.tip ? hx(_templateObject2, opts.icon ? "margin-top:40px;" : "", opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Nodata;
}(Lego.View);

Lego.components("nodata", Nodata);

module.exports = Nodata;
