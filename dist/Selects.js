/**
 * selects.js v0.2.1
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

var _templateObject2$1 = _taggedTemplateLiteral$1([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$1([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);

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
                "click li": "clickItem"
            },
            disabled: false,
            eventName: "hover",
            activeKey: "",
            activeValue: "",
            trigger: "",
            visible: false,
            direction: "",
            onChange: function onChange() {},
            onVisibleChange: function onVisibleChange() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
        var that = _this;
        _this.options.trigger = opts.trigger instanceof $ ? opts.trigger : $(opts.trigger);
        if (!_this.options.disabled) {
            var handler = function handler(event) {
                event.stopPropagation();
                var directionResp = Lego.UI.Util.getDirection(that.options.trigger, that.$el);
                that.options.direction = directionResp._y || "bottom";
                that.show();
                if (options.eventName == "hover") {
                    that.options.trigger.mouseleave(function() {
                        that.close();
                    });
                }
            };
            if (options.eventName == "click") {
                var _eventName = "click.dropdown_" + opts.vid;
                $("body").off(_eventName).on(_eventName, function() {
                    that.close();
                });
                _this.options.trigger.off(_eventName).on(_eventName, handler);
            } else {
                _this.options.trigger[options.eventName](handler);
            }
        }
        return _this;
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
                        return hx(_templateObject2$1, item.key, item.disabled || item.selected ? "disabled" : "", item.href ? item.href : "javascript:;", item.value);
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(data) {
                return hx(_templateObject3$1, data.value, data.children ? hx(_templateObject4$1, data.children.map(function(item) {
                    itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5, options.direction ? "drop" + options.direction : "", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
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
        value: function show(event) {
            this.options.trigger.addClass("dropdown open");
            this.options.onVisibleChange(true);
        }
    }, {
        key: "close",
        value: function close(event) {
            this.options.trigger.removeClass("dropdown open");
            this.options.onVisibleChange(false);
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.attr("id");
            });
            if (model) {
                this.options.onChange(model);
                this.options.activeKey = model.key;
                this.options.activeValue = model.value;
            }
            this.close();
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

var _templateObject = _taggedTemplateLiteral([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ]);

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

var Selects = function(_Lego$UI$Baseview) {
    _inherits(Selects, _Lego$UI$Baseview);
    function Selects() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Selects);
        var options = {
            name: "",
            value: [],
            multiple: false,
            eventName: "click",
            filterOption: true,
            tags: false,
            onSelect: function onSelect() {},
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "",
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownStyle: null,
            dropdownClassName: "",
            splitString: "",
            components: [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                eventName: opts.eventName || "click",
                disabled: opts.disabled || false,
                style: Object.assign({
                    width: opts.dropdownWidth || "100%",
                    height: opts.dropdownHeight || "auto"
                }, opts.dropdownStyle || {}),
                className: opts.dropdownClassName,
                data: opts.data,
                onChange: function onChange(model) {
                    var theView = Lego.getView(opts.el);
                    if (theView) {
                        theView.$(".select-input").focus();
                        if (model.key !== "0" && opts.multiple) {
                            theView.getValue();
                            if (!theView.options.value.includes(model)) {
                                model.selected = true;
                                theView.options.value.push(model);
                            }
                        } else {
                            theView.options.data.forEach(function(item) {
                                return item.selected = false;
                            });
                            theView.options.value = [ model ];
                        }
                        theView.options.onSelect(model);
                        theView.options.onChange(model);
                        theView.refresh();
                    }
                }
            } ]
        };
        Object.assign(options, opts);
        if (options.value.length) {
            options.value.forEach(function(item) {
                var model = options.data.find(function(model) {
                    return model.key === item.key;
                });
                if (model) model.selected = true;
            });
        }
        var _this = _possibleConstructorReturn(this, (Selects.__proto__ || Object.getPrototypeOf(Selects)).call(this, options));
        var eventName = "click.select_" + opts.vid, callback = _this.clickItemClose.bind(_this);
        _this.$(".select-tags-div").off(eventName).on(eventName, ".select-tag-close", callback);
        return _this;
    }
    _createClass(Selects, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = "";
            function getTags(data) {
                if (data.length) {
                    return hx(_templateObject, data.map(function(item) {
                        return hx(_templateObject2, item.key, item.value, item.value);
                    }));
                } else {
                    return "";
                }
            }
            var theValueArr = Array.isArray(options.value) ? options.value.length ? options.value.map(function(item) {
                return item.value;
            }) : [] : [ options.value.value ];
            if (!options.multiple) {
                vDom = hx(_templateObject3, options.vid, options.disabled ? "disabled" : "", options.placeholder, theValueArr.join(","), options.name, options.vid);
            } else {
                vDom = hx(_templateObject4, options.vid, theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : options.placeholder, theValueArr.join(","), options.name, theValueArr.length ? "select-tags-div-border" : "", getTags(options.value), options.vid);
            }
            return vDom;
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title");
            this.options.data.forEach(function(item) {
                if (item.key === key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            Lego.getView("#" + this.options.vid + "-dropdown").refresh();
            if (typeof this.options.onDeselect === "function") this.options.onDeselect({
                key: key,
                value: value
            });
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var data = this.options.data;
            if (value.length) {
                value.forEach(function(item) {
                    var model = data.find(function(model) {
                        return model.key === item.key;
                    });
                    if (model) {
                        Object.assign(model, item);
                    } else {
                        data.push(item);
                    }
                });
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            this.options.value = this.options.data.filter(function(item) {
                return item.selected === true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Selects;
}(Lego.UI.Baseview);

Lego.components("selects", Selects);

module.exports = Selects;
