/**
 * listgroup.js v0.9.63
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

var _templateObject = taggedTemplateLiteral([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);

var _templateObject3 = taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ], [ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ]);

var Listgroup = function(_Lego$UI$Baseview) {
    inherits(Listgroup, _Lego$UI$Baseview);
    function Listgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Listgroup);
        var options = {
            events: {
                "click li.list-group-item": "onClick",
                "click i.lego-close": "onClose"
            },
            activeKey: "",
            template: "",
            removeAble: false,
            data: [],
            onClick: function onClick() {},
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Listgroup.__proto__ || Object.getPrototypeOf(Listgroup)).call(this, options));
    }
    createClass(Listgroup, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject, options.data.map(function(item, index) {
                if (item.template) {
                    return item.template;
                } else {
                    return hx(_templateObject2, item.disabled ? "disabled" : "", options.activeKey == item.key ? "active" : "", val(item.className), val(item.key), options.removeAble ? hx(_templateObject3) : "", val(item.value));
                }
            }));
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            this.options.activeKey = this.options.activeKey != key ? key : "";
            this.refresh();
            if (typeof this.options.onClick === "function") this.options.onClick(this, key, event);
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.parent().attr("id");
            this.options.data = this.options.data.filter(function(item) {
                return item.key.toString() !== key.toString();
            });
            this.refresh();
            if (typeof this.options.onClose === "function") this.options.onClose(this, key, event);
        }
    } ]);
    return Listgroup;
}(Lego.UI.Baseview);

Lego.components("listgroup", Listgroup);

module.exports = Listgroup;
