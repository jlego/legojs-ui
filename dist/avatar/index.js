/**
 * avatar.js v0.12.6
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

var _templateObject = taggedTemplateLiteral([ '\n            <div class="lego-avatar-item">\n                <div class="lego-avatar-img" style="', '" id="', '">\n                ', "\n                </div>\n                ", "\n            </div>\n            " ], [ '\n            <div class="lego-avatar-item">\n                <div class="lego-avatar-img" style="', '" id="', '">\n                ', "\n                </div>\n                ", "\n            </div>\n            " ]);

var _templateObject2 = taggedTemplateLiteral([ "", "" ], [ "", "" ]);

var _templateObject3 = taggedTemplateLiteral([ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ], [ '<i class="anticon anticon-close remove" title="删除 ', '"></i>' ]);

var _templateObject4 = taggedTemplateLiteral([ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ], [ '<i class="anticon anticon-swap change" title="更换 ', '"></i>' ]);

var _templateObject5 = taggedTemplateLiteral([ "<label>", "</label>" ], [ "<label>", "</label>" ]);

var _templateObject6 = taggedTemplateLiteral([ '\n        <div class="lego-avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ], [ '\n        <div class="lego-avatar ', ' clearfix">\n        ', "\n        ", '\n            <input type="hidden" value="', '" name="', '">\n        </div>\n        ' ]);

var _templateObject7 = taggedTemplateLiteral([ "\n            ", "\n        " ], [ "\n            ", "\n        " ]);

var _templateObject8 = taggedTemplateLiteral([ '\n            <div class="lego-avatar-item addbtn">\n                <div class="lego-avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-avatar-item addbtn">\n                <div class="lego-avatar-img">\n                <i class="anticon anticon-plus add" title="添加"></i>\n                </div>\n            </div>\n            ' ]);

var Avatar = function(_Lego$UI$Baseview) {
    inherits(Avatar, _Lego$UI$Baseview);
    function Avatar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Avatar);
        var options = {
            events: {
                "click .add": "onAdd",
                "click .remove": "onRemove",
                "click .change": "onChange"
            },
            size: "",
            name: "",
            multiple: false,
            readonly: false,
            radius: "50%",
            showName: true,
            width: "",
            height: "",
            value: [],
            data: [],
            onAdd: function onAdd() {},
            onRemove: function onRemove() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, options));
    }
    createClass(Avatar, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function getItem(data) {
                return hx(_templateObject, data.value ? "background-image:url(" + val(data.value) + ");" : "", data.key, !options.readonly ? hx(_templateObject2, options.multiple ? hx(_templateObject3, val(data.name)) : hx(_templateObject4, val(data.name))) : "", options.showName ? hx(_templateObject5, val(data.name)) : "");
            }
            var vDom = hx(_templateObject6, options.size, options.value.length ? hx(_templateObject7, options.multiple ? options.value.map(function(item) {
                return getItem(item);
            }) : getItem(options.value[0])) : "", (!options.value.length || options.multiple) && !options.readonly ? hx(_templateObject8) : "", options.value.length ? options.value.map(function(item) {
                return item ? item.key : "";
            }).join(",") : "", options.name);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            if (this.options.width) {
                this.$el.find(".lego-avatar-img").width(this.options.width);
            }
            if (this.options.height) {
                this.$el.find(".lego-avatar-img").height(this.options.height);
            }
            this.$el.find(".lego-avatar-img, .lego-avatar-img i").css("border-radius", this.options.radius);
        }
    }, {
        key: "onAdd",
        value: function onAdd(event) {
            event.stopPropagation();
            if (typeof this.options.onAdd == "function") {
                this.options.onAdd(this, event);
            }
        }
    }, {
        key: "onRemove",
        value: function onRemove(event) {
            event.stopPropagation();
            var that = this, target = $(event.currentTarget), itemEl = target.parent(), key = itemEl.attr("id").toString();
            function deleteFun() {
                that.options.value = that.options.value.filter(function(item) {
                    return item.key.toString() !== key;
                });
                that.refresh();
            }
            if (typeof this.options.onRemove == "function") {
                this.options.onRemove(this, key, deleteFun);
            } else {
                deleteFun();
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), itemEl = target.parent(), key = itemEl.attr("id");
            if (typeof this.options.onChange == "function") {
                this.options.onChange(this, key);
            }
        }
    } ]);
    return Avatar;
}(Lego.UI.Baseview);

Lego.components("avatar", Avatar);

module.exports = Avatar;
