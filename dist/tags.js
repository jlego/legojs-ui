/**
 * tags.js v0.5.29
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-tags">\n            ', "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-tags">\n            ', "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                <div class="lego-tag ', '" id="', '" title="', '" onclick=', '>\n                    <div class="lego-tag-text">\n                    <span>', "</span>\n                    ", "\n                    </div>\n                </div>\n            " ], [ '\n                <div class="lego-tag ', '" id="', '" title="', '" onclick=', '>\n                    <div class="lego-tag-text">\n                    <span>', "</span>\n                    ", "\n                    </div>\n                </div>\n            " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ], [ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ]);

var _templateObject4 = _taggedTemplateLiteral([ '<buttons id="buttons_', '"></buttons>' ], [ '<buttons id="buttons_', '"></buttons>' ]);

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

var Tags = function(_Lego$UI$Baseview) {
    _inherits(Tags, _Lego$UI$Baseview);
    function Tags() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tags);
        var options = {
            color: "",
            closable: true,
            readonly: false,
            addBtnText: "添加标签 +",
            addBtnOption: {},
            onChange: function onChange() {},
            onClickBtn: function onClickBtn() {},
            onClose: function onClose() {},
            onAdd: function onAdd() {}
        };
        Object.assign(options, opts);
        if (options.value) options.data = Array.from(options.value);
        return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, options));
    }
    _createClass(Tags, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!opts.readonly) {
                this.addCom([ $.extend({
                    el: "#buttons_" + opts.vid,
                    text: opts.addBtnText,
                    type: "dashed",
                    size: "sm",
                    onClick: function onClick(self, event) {
                        event.stopPropagation();
                        if (typeof opts.onClickBtn == "function") opts.onClickBtn(that, event);
                    }
                }, opts.addBtnOption) ]);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;
            var opts = this.options;
            this.vDom = hx(_templateObject, opts.data.map(function(item) {
                return hx(_templateObject2, item.color ? "lego-tag-" + item.color : "", item.key, item.value, _this2.onChange.bind(_this2), item.value, opts.closable ? hx(_templateObject3, _this2.onClose.bind(_this2)) : "");
            }), !opts.readonly ? hx(_templateObject4, opts.vid) : "");
            return this.vDom;
        }
    }, {
        key: "addItem",
        value: function addItem() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = this.options;
            var hasOne = opts.data.find(function(item) {
                return item.key == obj.key;
            });
            if (!hasOne) {
                opts.data.push(obj);
                if (typeof opts.onAdd == "function") opts.onAdd(this, obj);
            }
        }
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            var opts = this.options;
            opts.data = opts.data.filter(function(item) {
                return item.key.toString() !== id;
            });
            this.refresh();
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.data;
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.parent().parent().attr("id");
            if (typeof opts.onClose == "function") opts.onClose(this, id);
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.attr("id"), item = opts.data.find(function(item) {
                return item.key.toString() == id;
            });
            if (typeof opts.onChange == "function") opts.onChange(this, item);
        }
    } ]);
    return Tags;
}(Lego.UI.Baseview);

Lego.components("tags", Tags);

module.exports = Tags;
