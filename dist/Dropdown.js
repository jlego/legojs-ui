/**
 * dropdown.js v0.1.2
 * (c) 2016 Ronghui Yu
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

var _templateObject = _taggedTemplateLiteral([ '\n            <li class="lego-dropdown-menu-submenu-vertical lego-dropdown-menu-submenu">\n                <div class="lego-dropdown-menu-submenu-title" id="', '">', "</div>\n                ", "\n            </li>\n            " ], [ '\n            <li class="lego-dropdown-menu-submenu-vertical lego-dropdown-menu-submenu">\n                <div class="lego-dropdown-menu-submenu-title" id="', '">', "</div>\n                ", "\n            </li>\n            " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                <ul class="lego-dropdown-menu lego-dropdown-menu-vertical lego-dropdown-menu-sub ', '">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="lego-dropdown-menu lego-dropdown-menu-vertical lego-dropdown-menu-sub ', '">\n                    ', "\n                </ul>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<li class="lego-dropdown-menu-item">', "</li>" ], [ '<li class="lego-dropdown-menu-item">', "</li>" ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n        <div class="lego-dropdown ', " lego-dropdown-", '">\n            <ul class="lego-dropdown-menu lego-dropdown-menu-vertical  lego-dropdown-menu-light lego-dropdown-menu-root">\n            ', "\n            </ul>\n        </div>\n        " ], [ '\n        <div class="lego-dropdown ', " lego-dropdown-", '">\n            <ul class="lego-dropdown-menu lego-dropdown-menu-vertical  lego-dropdown-menu-light lego-dropdown-menu-root">\n            ', "\n            </ul>\n        </div>\n        " ]);

var _templateObject5 = _taggedTemplateLiteral([ '<li class="lego-dropdown-menu-item" id="', '">', "</li>" ], [ '<li class="lego-dropdown-menu-item" id="', '">', "</li>" ]);

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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Dropdown);
        var options = {
            events: {
                "mouseleave .lego-dropdown": "close",
                "click .lego-dropdown-menu-item": "clickItem",
                "mouseenter .lego-dropdown-menu-item": "inMenu",
                "mouseleave .lego-dropdown-menu-item": "outMenu",
                "mouseenter .lego-dropdown-menu-submenu": "showSubMenu",
                "mouseleave .lego-dropdown-menu-submenu": "hideSubMenu"
            },
            disabled: false,
            eventName: "mouseenter",
            trigger: "",
            container: "body",
            visible: false,
            direction: "",
            onChange: function onChange() {},
            onVisibleChange: function onVisibleChange() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
        _this.result = "";
        var that = _this;
        var trigger = trigger instanceof $ ? trigger : $(trigger);
        var eventName = options.eventName + "." + options.vid;
        trigger.off(eventName).on(eventName, function() {
            var directionResp = Lego.UI.Baseview.getDirection(options.container, that.$el);
            options.direction = directionResp._y + directionResp._x || "bottomLeft";
            that.show();
        });
        return _this;
    }
    _createClass(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function loopNav(data) {
                return hx(_templateObject, data.key, data.title || "", data.children ? hx(_templateObject2, data.visible ? "" : "lego-dropdown-menu-hidden", data.children.map(function(item) {
                    if (!item.children) {
                        hx(_templateObject3, item.title || "");
                    } else {
                        loopNav(item);
                    }
                })) : "");
            }
            var vDom = hx(_templateObject4, options.direction ? "lego-dropdown-placement-${options.direction}" : "", options.visible ? "show" : "hidden", options.data.forEach(function(item) {
                if (!item.children) {
                    return hx(_templateObject5, item.key, item.title || "");
                } else {
                    return loopNav(item);
                }
            }));
            return vDom;
        }
    }, {
        key: "show",
        value: function show(event) {
            this.options.visible = true;
            this.options.onVisibleChange(true);
        }
    }, {
        key: "close",
        value: function close(event) {
            this.options.visible = false;
            this.options.onVisibleChange(false);
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            var target = $(event.currentTarget);
            this.result = target.attr("id");
            this.options.onChange(this.result);
        }
    }, {
        key: "inMenu",
        value: function inMenu(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            target.addClass("lego-dropdown-menu-item-active");
        }
    }, {
        key: "outMenu",
        value: function outMenu(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            target.removeClass("lego-dropdown-menu-item-active");
        }
    }, {
        key: "showSubMenu",
        value: function showSubMenu(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            target.addClass("lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active");
        }
    }, {
        key: "hideSubMenu",
        value: function hideSubMenu(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            target.removeClass("lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active");
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

module.exports = Dropdown;
