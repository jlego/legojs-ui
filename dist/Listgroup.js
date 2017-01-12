/**
 * listgroup.js v0.2.3
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

var _templateObject = _taggedTemplateLiteral([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '<i class="anticon anticon-cross float-xs-right close"></i>' ], [ '<i class="anticon anticon-cross float-xs-right close"></i>' ]);

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

var Listgroup = function(_Lego$UI$Baseview) {
    _inherits(Listgroup, _Lego$UI$Baseview);
    function Listgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Listgroup);
        var options = {
            events: {
                "click li.list-group-item": "onClick",
                "click i.close": "onClose"
            },
            activeKey: "",
            template: "",
            removeAble: false,
            data: [],
            onClick: function onClick() {},
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Listgroup.__proto__ || Object.getPrototypeOf(Listgroup)).call(this, options));
    }
    _createClass(Listgroup, [ {
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
            if (typeof this.options.onClick === "function") this.options.onClick(key, event);
            this.options.activeKey = this.options.activeKey != key ? key : "";
            this.refresh();
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.parent().attr("id");
            if (typeof this.options.onClose === "function") this.options.onClose(key, event);
            this.options.data = this.options.data.filter(function(item) {
                return item.key !== key;
            });
            this.refresh();
        }
    } ]);
    return Listgroup;
}(Lego.UI.Baseview);

Lego.components("listgroup", Listgroup);

module.exports = Listgroup;
