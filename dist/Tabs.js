/**
 * tabs.js v0.1.2
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass$1 = function() {
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ], [ '\n                <div class="dropdown-menu ', '">\n                ', "\n                </div>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral$1([ "\n                    ", "\n                " ], [ "\n                    ", "\n                " ]);

var _templateObject4 = _taggedTemplateLiteral$1([ '<div class="dropdown-divider"></div>' ], [ '<div class="dropdown-divider"></div>' ]);

var _templateObject5 = _taggedTemplateLiteral$1([ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "/a>" ], [ '<a class="dropdown-item ', " ", '" href="', '" id="', '">', "/a>" ]);

var _templateObject6 = _taggedTemplateLiteral$1([ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
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
    _inherits$1(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Navs);
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
        var _this = _possibleConstructorReturn$1(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
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
    _createClass$1(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function makeItem(data, i) {
                var itemDom = hx(_templateObject$1, data.children ? "dropdown" : "", data.key === options.activeKey ? "active" : "", data.disabled ? "disabled" : "", data.children ? "dropdown-toggle" : "", data.href ? data.href : "javascript:;", data.key ? data.key : "nav-item-" + i, data.value ? data.value : "", Array.isArray(data.children) ? hx(_templateObject2$1, options.direction ? "drop" + options.direction : "", data.children.map(function(subItem, x) {
                    return hx(_templateObject3, subItem.divider ? hx(_templateObject4) : hx(_templateObject5, subItem.active ? "active" : "", subItem.disabled ? "disabled" : "", subItem.href ? subItem.href : "javascript:;", subItem.key ? subItem.key : "nav-sub-item-" + x, subItem.value ? subItem.value : ""));
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ], [ '\n        <div class="tabs">\n            <navs id="', '"></navs>\n            <div class="tab-content">\n            ', "\n            </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ], [ '<div class="tab-pane ', " ", '" id="', '-pane">', "</div>" ]);

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

var Tabs = function(_Lego$UI$Baseview) {
    _inherits(Tabs, _Lego$UI$Baseview);
    function Tabs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tabs);
        var options = {
            events: {},
            eventName: "click",
            type: "line",
            size: "default",
            closable: false,
            activeKey: "",
            onClose: function onClose() {},
            tabPosition: "top",
            onEdit: function onEdit() {},
            hideAdd: false,
            animate: "",
            data: [],
            components: [ {
                el: "#" + opts.vid + "-navs",
                eventName: opts.eventName || "click",
                type: "tabs",
                activeKey: opts.activeKey,
                onClick: function onClick(item) {
                    var view = Lego.getView(opts.el);
                    if (view) {
                        if (!item.children) {
                            view.options.activeKey = item.key;
                        } else {
                            (function() {
                                var theModel = item.children.find(function(subItem) {
                                    return subItem.active == true;
                                });
                                if (theModel) {
                                    view.options.data.forEach(function(model) {
                                        if (model.key == item.key) {
                                            if (theModel.content) {
                                                model.content = theModel.content;
                                                view.options.activeKey = item.key;
                                            }
                                        }
                                    });
                                }
                            })();
                        }
                    }
                },
                data: opts.data
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, options));
    }
    _createClass(Tabs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject, options.vid + "-navs", options.data.map(function(item) {
                if (!item.disabled && item.content) {
                    return hx(_templateObject2, options.animate ? options.animate : "", item.key === options.activeKey ? "active in" : "", item.key, item.content ? item.content : "");
                }
            }));
            return vDom;
        }
    }, {
        key: "close",
        value: function close(event) {
            var _this2 = this;
            event.stopPropagation();
            this.$el.slideUp("normal", function() {
                _this2.remove();
            });
            if (typeof this.options.onClose === "function") this.options.onClose(event);
        }
    } ]);
    return Tabs;
}(Lego.UI.Baseview);

Lego.components("tabs", Tabs);

module.exports = Tabs;