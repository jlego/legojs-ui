/**
 * selects.js v0.8.28
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass$2 = function() {
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

var _templateObject$2 = _taggedTemplateLiteral$2([ '\n        <div class="input-group lego-search ', '">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '" name="', '" value="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group lego-search ', '">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '" name="', '" value="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);

var _templateObject2$2 = _taggedTemplateLiteral$2([ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ]);

function _taggedTemplateLiteral$2(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$2(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
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

var Search = function(_Lego$UI$Baseview) {
    _inherits$2(Search, _Lego$UI$Baseview);
    function Search() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Search);
        var options = {
            events: {
                "click .lego-search-button": "onSearch",
                "change .lego-search-input": "onChange",
                "keyup .lego-search-input": "_enterSearch"
            },
            placeholder: "请输入关键字",
            name: "",
            size: "",
            keyword: "",
            activeKey: "",
            activeValue: "",
            showSelect: false,
            onKeyup: function onKeyup() {},
            onSearch: function onSearch() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$2(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    _createClass$2(Search, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (typeof opts.value == "string") {
                opts.keyword = opts.value;
                opts.value = null;
            }
            this.addCom({
                el: "#dropdown-" + opts.vid,
                container: "#select-" + opts.vid,
                data: opts.data,
                onChange: function onChange(self, model) {
                    this.context.options.activeKey = model.key;
                    this.context.options.activeValue = model.value;
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$2, options.size ? "input-group-" + options.size : "", options.showSelect ? hx(_templateObject2$2, options.vid, options.activeValue || "请选择", options.vid) : "", options.placeholder, options.name, val(options.keyword));
            return vDom;
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            if (event.keyCode == 13) {
                this.onSearch(event);
            } else {
                if (typeof this.options.onKeyup === "function") this.options.onKeyup(this, this.getValue(event));
            }
        }
    }, {
        key: "getValue",
        value: function getValue(event) {
            var keyword = event ? this.$(".lego-search-input").val() : this.options.keyword;
            return {
                key: this.options.activeKey,
                value: this.options.activeValue,
                keyword: keyword
            };
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            if (event) event.stopPropagation();
            if (typeof this.options.onChange === "function") this.options.onChange(this, this.getValue(event));
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            if (event) event.stopPropagation();
            if (typeof this.options.onSearch === "function") this.options.onSearch(this, this.getValue(event));
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

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

var _templateObject2$1 = _taggedTemplateLiteral$1([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$1([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

var _templateObject6 = _taggedTemplateLiteral$1([ '\n            <div class="dropdown-menu">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ], [ '\n            <div class="dropdown-menu">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ]);

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
                "click li:not(.dropdown, .lego-search-container)": "clickItem",
                "click .lego-search-container": function clickLegoSearchContainer(event) {
                    event.stopPropagation();
                }
            },
            scrollbar: null,
            disabled: false,
            eventName: "click",
            searchPlaceholder: "搜索",
            container: "",
            direction: "",
            activeKey: "",
            clickAndClose: true,
            showSearch: false,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$1(Dropdown, [ {
        key: "components",
        value: function components() {
            var _this2 = this;
            var opts = this.options, that = this;
            if (opts.showSearch) {
                (function() {
                    var searchFun = function searchFun(self, result) {
                        that.$("li").each(function(index, el) {
                            if ($(el).text().indexOf(result.keyword) < 0) {
                                $(el).hide();
                            } else {
                                $(el).show();
                            }
                        });
                    };
                    _this2.addCom({
                        el: "#search_" + opts.vid,
                        size: "sm",
                        placeholder: opts.searchPlaceholder,
                        onKeyup: function onKeyup(self, result) {
                            searchFun(self, result);
                        },
                        onSearch: function onSearch(self, result) {
                            searchFun(self, result);
                        }
                    });
                })();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = "";
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$1);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$1, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$1, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4$1, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
                return itemNav(item);
            }));
            if (opts.showSearch) {
                vDom = hx(_templateObject6, opts.vid, vDom);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options, _eventName = "click.dropdown-" + opts.vid;
            this.container = opts.container instanceof $ ? opts.container : opts.context.$ ? opts.context.$(opts.container) : $(opts.container);
            if (!opts.disabled) {
                var handler = function handler(event) {
                    Lego.UI.Util.getDirection(that.container, that.$el);
                    that.$el.slideToggle("fast");
                };
                var cssObj = {
                    zIndex: 1e4
                };
                if (opts.width) cssObj.width = opts.width;
                if (opts.maxHeight) {
                    cssObj.maxHeight = opts.maxHeight;
                    cssObj.overflow = "auto";
                }
                if (opts.showSearch) {
                    this.$(".lego-search-container").next("ul").css(cssObj);
                } else {
                    this.$el.css(cssObj);
                }
                if (opts.eventName == "click") {
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var _templateObject = _taggedTemplateLiteral([ "\n                <ul>", "\n                </ul>\n                " ], [ "\n                <ul>", "\n                </ul>\n                " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

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
            fieldName: "key",
            filterOption: true,
            tags: false,
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "请选择",
            searchPlaceholder: "搜索",
            notFoundContent: "",
            dropdownWidth: 0,
            dropdownHeight: 0,
            direction: "",
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            inputAble: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownClassName: "",
            splitString: "",
            data: [],
            components: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Selects.__proto__ || Object.getPrototypeOf(Selects)).call(this, options));
        _this.oldValue = "";
        var that = _this;
        _this.$(".select-input").change(function(event) {
            if (typeof options.onChange == "function") options.onChange(that, $(this).val());
        });
        _this.$(".select-tags-div").on("click", ".select-tag-close", _this.clickItemClose.bind(_this));
        return _this;
    }
    _createClass(Selects, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.data.length) {
                this.addCom({
                    el: "#dropdown-" + opts.vid,
                    container: "#select-" + opts.vid,
                    scrollbar: opts.dropdownHeight ? {} : null,
                    eventName: opts.eventName || "click",
                    disabled: opts.disabled || false,
                    width: opts.dropdownWidth || this.$el.width(),
                    maxHeight: opts.dropdownHeight || 0,
                    showSearch: opts.showSearch,
                    className: opts.dropdownClassName,
                    searchPlaceholder: opts.searchPlaceholder,
                    clickAndClose: opts.multiple ? false : true,
                    direction: opts.direction,
                    data: opts.data || [],
                    onChange: function onChange(self, model) {
                        var that = this.context;
                        that.$(".select-input").focus();
                        if (model.key !== "0" && opts.multiple) {
                            that.options.data.forEach(function(item) {
                                if (item.key == "0") item.selected = false;
                            });
                            that.getValue();
                            if (!that.options.value.includes(model)) {
                                model.selected = true;
                                that.options.value.push(model);
                            }
                        } else {
                            that.options.data.forEach(function(item) {
                                return item.selected = false;
                            });
                            that.options.value = [ model ];
                            that.refresh();
                        }
                        that.options.onChange(that, model);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
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
            var theValueArr = void 0, realValueArr = void 0;
            if (Array.isArray(opts.value)) {
                theValueArr = opts.value.length ? opts.value.map(function(item) {
                    return item.value;
                }) : [];
                realValueArr = opts.value.length ? opts.value.map(function(item) {
                    return item[opts.fieldName];
                }) : [];
            } else {
                theValueArr = realValueArr = [ _typeof(opts.value) == "object" ? opts.value.value : opts.value ];
            }
            if (!opts.multiple) {
                vDom = hx(_templateObject3, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.vid);
            } else {
                vDom = hx(_templateObject4, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.value && opts.multiple) {
                opts.value.forEach(function(item) {
                    if (item) {
                        var model = opts.data.find(function(model) {
                            return model.key === item.key;
                        });
                        if (model) model.selected = true;
                    }
                });
            }
            if (!opts.inputAble) this.$(".select-input").attr("readonly", "readonly");
            var dropdownView = Lego.getView("#dropdown-" + opts.vid);
            if (dropdownView) {
                dropdownView.options.data = opts.data;
                dropdownView.refresh();
            }
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.target).parent(), key = target.attr("id"), value = target.attr("title");
            this.options.data.forEach(function(item) {
                if (item.key == key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            Lego.getView("#dropdown-" + this.options.vid).refresh();
            if (typeof this.options.onDeselect === "function") this.options.onDeselect(this, {
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
                return item.selected == true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Selects;
}(Lego.UI.Baseview);

Lego.components("selects", Selects);

module.exports = Selects;
