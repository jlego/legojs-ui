/**
 * dropdownbtn.js v0.3.4
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2 = _taggedTemplateLiteral$1([ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3 = _taggedTemplateLiteral$1([ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral$1([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$1([ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ]);

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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$1(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Dropdown);
        var options = {
            events: {
                "click li:not(.dropdown)": "clickItem"
            },
            disabled: false,
            eventName: "click",
            container: "",
            direction: "",
            activeKey: "",
            clickAndClose: true,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$1(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$1);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2, val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3, val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5, options.direction ? "drop" + options.direction : "", options.open ? "block" : "none", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, _eventName = "click.dropdown-" + this.options.vid;
            this.container = this.options.container instanceof $ ? this.options.container : $(this.options.container);
            if (!this.options.disabled) {
                var handler = function handler(event) {
                    that.$el.slideToggle("fast");
                };
                if (this.options.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                        if (event.originalEvent) {
                            var index_a = event.originalEvent.path.indexOf(event.target), index_b = event.originalEvent.path.indexOf(that.container[0]);
                            if (index_a <= index_b) {} else {
                                that.close();
                            }
                        }
                    });
                    this.container.off(_eventName).on(_eventName, handler);
                } else {
                    this.container.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
            }
        }
    }, {
        key: "_getAlign",
        value: function _getAlign(parent, el) {
            var _X = parent.offset().left, _Y = parent.offset().top - el.height(), windowWidth = $(window).width() - 20, elWidth = el.width();
            if (windowWidth > _X + elWidth) {
                return "left";
            } else {
                return "right";
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.$el.slideDown("fast");
        }
    }, {
        key: "close",
        value: function close() {
            this.$el.slideUp("fast");
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.children("a").attr("id");
            });
            if (model) this.options.onChange(this, model, event);
            if (this.options.clickAndClose) {
                this.close();
            } else {
                this.refresh();
            }
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

Lego.components("dropdown", Dropdown);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ], [ '\n        <div class="btn-group ', " ", '">\n            <button type="button" class="btn btn-', ' dropdownbtn">', '</button>\n            <button type="button" class="btn btn-', ' dropdown-toggle dropdown-toggle-split">\n                <span class="sr-only">Toggle Dropdown</span>\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n        </div>\n        ' ]);

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

var Dropdownbtn = function(_Lego$UI$Baseview) {
    _inherits(Dropdownbtn, _Lego$UI$Baseview);
    function Dropdownbtn() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Dropdownbtn);
        var options = {
            events: {
                "click button.dropdownbtn, .lego-reply-submit": "onClick"
            },
            text: "button name",
            btnType: "secondary",
            size: "default",
            direction: "",
            activeKey: "",
            dropdownOption: {},
            onClick: function onClick() {},
            onChange: function onChange() {},
            components: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Dropdownbtn.__proto__ || Object.getPrototypeOf(Dropdownbtn)).call(this, options));
        _this.activeItem = {};
        return _this;
    }
    _createClass(Dropdownbtn, [ {
        key: "components",
        value: function components() {
            var options = this.options;
            this.addCom($.extend(options.dropdownOption, {
                el: "#dropdown-" + options.vid,
                container: "[view-id=" + options.vid + "]",
                direction: options.direction,
                activeKey: options.activeKey,
                data: options.data,
                onChange: function onChange(self, item, event) {
                    var theView = self.options.context;
                    theView.activeItem = item;
                    if (typeof theView.options.onChange == "function") theView.options.onChange(theView, item);
                }
            }));
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.size == "large" ? "btn-group-lg" : options.size == "small" ? "btn-group-sm" : "", options.direction == "up" ? "dropup" : "", options.btnType, val(options.html || options.text), options.btnType, options.vid);
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
            if (typeof this.options.onClick === "function") this.options.onClick(this, this.activeItem, event);
        }
    } ]);
    return Dropdownbtn;
}(Lego.UI.Baseview);

Lego.components("dropdownbtn", Dropdownbtn);

module.exports = Dropdownbtn;
