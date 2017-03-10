/**
 * btngroup.js v0.3.6
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="btn-group ', '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="btn-group ', '">\n        ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n        <button type="button" class="btn btn-', '">\n            ', "\n        </button>\n        " ], [ '\n        <button type="button" class="btn btn-', '">\n            ', "\n        </button>\n        " ]);

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

var Btngroup = function(_Lego$UI$Baseview) {
    _inherits(Btngroup, _Lego$UI$Baseview);
    function Btngroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Btngroup);
        var options = {
            events: {
                "click button": "onClick"
            },
            size: "default",
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Btngroup.__proto__ || Object.getPrototypeOf(Btngroup)).call(this, options));
    }
    _createClass(Btngroup, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.size == "large" ? "btn-group-lg" : options.size == "small" ? "btn-group-sm" : "", options.data.map(function(item) {
                return hx(_templateObject2, item.type || "secondary", val(item.html || item.text));
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$("button").each(function(index, item) {
                $(item).data("index", index);
            });
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), index = target.data("index"), model = this.options.data[index];
            if (typeof this.options.onClick === "function") this.options.onClick(this, model, event);
        }
    } ]);
    return Btngroup;
}(Lego.UI.Baseview);

Lego.components("btngroup", Btngroup);

module.exports = Btngroup;
