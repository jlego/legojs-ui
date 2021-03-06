/**
 * grid.js v0.12.6
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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="row lego-grid">\n            ', "\n        </div>" ], [ '\n        <div class="row lego-grid">\n            ', "\n        </div>" ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="lego-item ', '" id="lego-item_', '">\n                ', "\n                </div>" ], [ '<div class="lego-item ', '" id="lego-item_', '">\n                ', "\n                </div>" ]);

var GridView = function(_Lego$UI$Baseview) {
    inherits(GridView, _Lego$UI$Baseview);
    function GridView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, GridView);
        var options = {
            events: {
                "click .lego-item": "onEvent",
                "mouseenter .lego-item": "onEvent",
                "mouseleave .lego-item": "onEvent"
            },
            itemContent: "",
            itemClass: "",
            data: [],
            selectAble: false,
            onSelected: function onSelected() {},
            onOver: function onOver() {},
            onOut: function onOut() {},
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (GridView.__proto__ || Object.getPrototypeOf(GridView)).call(this, options));
    }
    createClass(GridView, [ {
        key: "render",
        value: function render() {
            var opts = this.options, index = 0;
            var vDom = hx(_templateObject, opts.data.map(function(item) {
                index++;
                return hx(_templateObject2, opts.itemClass, val(item.key), typeof opts.itemContent == "function" ? opts.itemContent(item, index - 1) : opts.itemContent);
            }));
            return vDom;
        }
    }, {
        key: "onEvent",
        value: function onEvent(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, key = target.attr("id").replace("lego-item_", ""), hasOne = opts.data.find(function(item) {
                return item.key == key;
            });
            switch (event.type) {
              case "click":
                if (hasOne) {
                    if (opts.selectAble) {
                        hasOne.selected = !hasOne.selected;
                        if (typeof opts.onSelected == "function") {
                            opts.onSelected(this, hasOne);
                        }
                        this.refresh();
                    }
                }
                if (typeof opts.onClick == "function") {
                    opts.onClick(this, hasOne, event);
                }
                break;

              case "mouseenter":
                if (typeof opts.onOver == "function") {
                    opts.onOver(this, hasOne, event);
                }
                break;

              case "mouseleave":
                if (typeof opts.onOut == "function") {
                    opts.onOut(this, hasOne, event);
                }
                break;
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            return this.options.data.filter(function(item) {
                return item.selected;
            });
        }
    } ]);
    return GridView;
}(Lego.UI.Baseview);

Lego.components("grid", GridView);

module.exports = GridView;
