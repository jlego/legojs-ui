/**
 * navs.js v0.2.7
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

var _templateObject = _taggedTemplateLiteral([ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ], [ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral([ "\n                    ", "\n                " ], [ "\n                    ", "\n                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<div class="dropdown-divider"></div>' ], [ '<div class="dropdown-divider"></div>' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ], [ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "</a>" ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

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

var Navs = function(_Lego$UI$Baseview) {
    _inherits(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Navs);
        var options = {
            events: {
                "click .nav-link:not(.disabled)": "clickItem",
                "click .dropdown-item:not(.disabled)": "clickSubItem"
            },
            eventName: "click",
            type: "base",
            activeKey: "",
            activeValue: "",
            direction: "",
            onClick: function onClick() {},
            data: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
        var that = _this;
        _this.$(".dropdown")[options.eventName](function() {
            var directionResp = Lego.UI.Util.getDirection($(this), $(this).children(".dropdown-menu"));
            that.options.direction = directionResp._y || "bottom";
            $(this).addClass("open");
            $(this).mouseleave(function() {
                $(this).removeClass("open");
            });
        });
        return _this;
    }
    _createClass(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function makeItem(data, i) {
                var itemDom = hx(_templateObject, data.children ? "dropdown" : "", data.key === options.activeKey ? "active" : "", data.disabled ? "disabled" : "", data.children ? "dropdown-toggle" : "", data.href ? data.href : "javascript:;", data.key ? data.key : "nav-item-" + i, val(data.value), Array.isArray(data.children) ? hx(_templateObject2, options.direction ? "drop" + options.direction : "", data.children.map(function(subItem, x) {
                    return hx(_templateObject3, subItem.divider ? hx(_templateObject4) : hx(_templateObject5, subItem.active ? "active" : "", subItem.disabled ? "disabled" : "", subItem.href ? subItem.href : "javascript:;", subItem.key ? subItem.key : "nav-sub-item-" + x, val(subItem.value)));
                })) : "");
                return itemDom;
            }
            var vDom = hx(_templateObject6, options.type === "inline" ? "nav-inline" : options.type === "tabs" ? "nav-tabs" : options.type === "pills" ? "nav-pills" : "", options.type === "pills-stacked" ? "nav-pills nav-stacked" : "", options.data.map(function(item, i) {
                return makeItem(item, i);
            }));
            return vDom;
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            this.options.activeKey = key;
            var model = this.options.data.find(function(item) {
                return item.key === key;
            });
            if (typeof this.options.onClick === "function") this.options.onClick(model);
        }
    }, {
        key: "clickSubItem",
        value: function clickSubItem(event) {
            var _this2 = this;
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            var model = this.options.data.find(function(item) {
                return item.key === _this2.options.activeKey;
            });
            if (model) {
                model.children.forEach(function(subItem, i) {
                    subItem.active = subItem.key === key ? true : false;
                });
                this.refresh();
            }
            if (typeof this.options.onClick === "function") this.options.onClick(model);
        }
    } ]);
    return Navs;
}(Lego.UI.Baseview);

Lego.components("navs", Navs);

module.exports = Navs;
