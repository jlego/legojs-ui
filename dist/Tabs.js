/**
 * tabs.js v0.9.58
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

var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
        return arr2;
    } else {
        return Array.from(arr);
    }
};

var _templateObject$3 = taggedTemplateLiteral([ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ], [ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ]);

var _templateObject2$3 = taggedTemplateLiteral([ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ], [ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ]);

var _templateObject3$1 = taggedTemplateLiteral([ '<dropdown id="autocomplete_', '"></dropdown>' ], [ '<dropdown id="autocomplete_', '"></dropdown>' ]);

var Search = function(_Lego$UI$Baseview) {
    inherits(Search, _Lego$UI$Baseview);
    function Search() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Search);
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
            autoComplete: false,
            showSelect: false,
            onKeyup: function onKeyup() {},
            onSearch: function onSearch() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    createClass(Search, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            this.showDropdown = false;
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
            if (opts.autoComplete) {
                var autoCompleteOpts = {
                    el: "#autocomplete_" + opts.vid,
                    container: this.$el,
                    disabled: true,
                    maxCount: opts.autoComplete.maxCount || 5,
                    style: {
                        width: "100%"
                    },
                    onChange: function onChange(self, result) {
                        opts.keyword = opts.value = result.value;
                        result.keyword = result.value;
                        if (typeof opts.onSearch === "function") opts.onSearch(this, result, self);
                    },
                    renderAfter: function renderAfter() {
                        if (opts.autoComplete && this.options.data) {
                            if (that.showDropdown && this.options.data.length) {
                                this.show();
                            } else {
                                this.close();
                            }
                        }
                    }
                };
                if (opts.autoComplete.data) autoCompleteOpts.data = opts.autoComplete.data;
                if (opts.autoComplete.dataSource) autoCompleteOpts.dataSource = opts.autoComplete.dataSource;
                this.addCom(autoCompleteOpts);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$3, opts.size ? "input-group-" + opts.size : "", opts.autoComplete ? "position: relative;" : "", opts.showSelect ? hx(_templateObject2$3, opts.vid, opts.activeValue || "请选择", opts.vid) : "", opts.vid, opts.placeholder, opts.name, val(opts.keyword), opts.autoComplete ? hx(_templateObject3$1, opts.vid) : "");
            return vDom;
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var opts = this.options, view = null, result = this.getValue(event);
            if (event.keyCode == 13) {
                this.onSearch(event);
            } else {
                if (opts.autoComplete) {
                    view = Lego.getView("#autocomplete_" + opts.vid);
                    if (!opts.autoComplete.dataSource && opts.autoComplete.data) {
                        if (result.keyword) {
                            view.options.data = opts.autoComplete.data.filter(function(item) {
                                return item.value.indexOf(value.keyword) > -1;
                            });
                            this.showDropdown = !!view.options.data.length;
                            view.refresh();
                        } else {
                            view.close();
                            return;
                        }
                    } else {
                        this.showDropdown = !!result.keyword;
                        if (!this.showDropdown) {
                            view.close();
                            return;
                        }
                    }
                }
                if (typeof opts.onKeyup === "function") opts.onKeyup(this, result, view || event);
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
            if (typeof this.options.onChange === "function") this.options.onChange(this, this.getValue(event), event);
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            if (event) event.stopPropagation();
            if (typeof this.options.onSearch === "function") this.options.onSearch(this, this.getValue(event), event);
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

var _templateObject$2 = taggedTemplateLiteral([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$2 = taggedTemplateLiteral([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3 = taggedTemplateLiteral([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4 = taggedTemplateLiteral([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = taggedTemplateLiteral([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

var _templateObject6 = taggedTemplateLiteral([ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ], [ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ]);

var Dropdown = function(_Lego$UI$Baseview) {
    inherits(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Dropdown);
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
            maxCount: 0,
            clickAndClose: true,
            showSearch: false,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    createClass(Dropdown, [ {
        key: "dataReady",
        value: function dataReady() {
            var opts = this.options, that = this;
            if (opts.data.length && opts.maxCount) {
                opts.data.length = opts.data.length > opts.maxCount ? opts.maxCount : opts.data.length;
            }
        }
    }, {
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
                    return hx(_templateObject$2);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$2, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value, item));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value, item), item.children ? hx(_templateObject4, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
                return itemNav(item);
            }));
            if (opts.showSearch) {
                vDom = hx(_templateObject6, opts.open ? "block" : "none", opts.vid, vDom);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options, _eventName = "click.dropdown-" + opts.vid;
            this.directionArr = opts.direction ? opts.direction.split("_") : [];
            this.container = opts.container instanceof $ ? opts.container : opts.context.$ ? opts.context.$(opts.container) : $(opts.container);
            if (!opts.disabled && opts.container) {
                var handler = function handler(event) {
                    var _Lego$UI$Util;
                    (_Lego$UI$Util = Lego.UI.Util).getDirection.apply(_Lego$UI$Util, [ that.container, that.$el ].concat(toConsumableArray(that.directionArr)));
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
                    this.container.off(_eventName).on(_eventName, handler);
                } else {
                    this.container.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
            }
            $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                if (event.originalEvent) {
                    var index_a = event.originalEvent.path.indexOf(event.target), index_b = event.originalEvent.path.indexOf(that.container[0]);
                    if (index_a <= index_b) {} else {
                        that.close();
                    }
                }
            });
        }
    }, {
        key: "show",
        value: function show() {
            var _Lego$UI$Util2;
            if (this.container) (_Lego$UI$Util2 = Lego.UI.Util).getDirection.apply(_Lego$UI$Util2, [ this.container, this.$el ].concat(toConsumableArray(this.directionArr)));
            if (this.$el.css("display") == "none") this.$el.slideDown("fast");
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

var _templateObject$1 = taggedTemplateLiteral([ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

var Navs = function(_Lego$UI$Baseview) {
    inherits(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Navs);
        var options = {
            events: {
                "mouseover .nav-item.dropdown": "overItem",
                "click .dropdown > a": "clickNav",
                "click .dropdown-menu a:not(.disabled)": "clickSubItem",
                "click .nav-item:not(.dropdown) > a": "clickItem"
            },
            eventName: "click",
            type: "base",
            activeKey: "",
            activeValue: "",
            direction: "",
            closeAllAble: true,
            accordion: true,
            onClick: function onClick() {},
            data: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
    }
    createClass(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function makeItem(item, i) {
                var itemDom = hx(_templateObject$1, item.children ? "dropdown" : "", item.open ? "open" : "", item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.children ? "dropdown-toggle" : "", item.href ? item.href : "javascript:;", item.key ? item.key : "nav-item-" + i, val(item.value), Array.isArray(item.children) ? Lego.create(Dropdown, {
                    direction: options.direction,
                    open: item.open,
                    data: item.children
                }).render() : "");
                return itemDom;
            }
            var vDom = hx(_templateObject2$1, options.type === "inline" ? "nav-inline" : options.type === "tabs" ? "nav-tabs" : options.type === "pills" ? "nav-pills" : "", options.type === "pills-stacked" ? "nav-pills nav-stacked" : "", options.data.map(function(item, i) {
                return makeItem(item, i);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this;
            if (this.options.closeAllAble) {
                $("body").click(function() {
                    that.closeAll();
                });
            }
        }
    }, {
        key: "showAll",
        value: function showAll() {
            this.$(".dropdown-menu").slideDown("fast");
        }
    }, {
        key: "closeAll",
        value: function closeAll() {
            this.$(".dropdown-menu").slideUp("fast", function() {
                $(this).parent().removeClass("open");
            });
        }
    }, {
        key: "overItem",
        value: function overItem(event, target) {
            var targetEl = $(event.currentTarget), key = targetEl.children("a").attr("id");
            this.activeKey = key;
        }
    }, {
        key: "closeDropdown",
        value: function closeDropdown(el) {
            el.slideUp("fast", function() {
                if ($(this).css("display") == "none") {
                    $(this).parent().removeClass("open");
                } else {
                    $(this).parent().addClass("open");
                }
            });
        }
    }, {
        key: "clickNav",
        value: function clickNav(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget);
            var dropdownEl = targetEl.next(".dropdown-menu");
            Lego.UI.Util.getDirection(targetEl, dropdownEl);
            if (this.options.accordion) {
                this.closeDropdown(this.$(".nav-item.open .dropdown-menu"));
            }
            if (!targetEl.parent().hasClass("open")) {
                dropdownEl.slideToggle("fast", function() {
                    if ($(this).css("display") == "none") {
                        $(this).parent().removeClass("open");
                    } else {
                        $(this).parent().addClass("open");
                    }
                });
                this.clickItem(event);
                this.$(".dropdown-menu a").removeClass("active");
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget), key = targetEl.attr("id");
            if (!targetEl.hasClass("disabled")) {
                if (this.options.accordion) {
                    this.closeDropdown(this.$(".nav-item.open .dropdown-menu"));
                }
                this.options.activeKey = key;
                var model = this.options.data.find(function(item) {
                    return item.key === key;
                });
                if (typeof this.options.onClick === "function") {
                    this.options.onClick(this, model || {}, event);
                }
            }
        }
    }, {
        key: "clickSubItem",
        value: function clickSubItem(event, target) {
            var _this2 = this;
            event.stopPropagation();
            this.options.activeKey = this.activeKey || this.options.activeKey;
            var targetEl = $(event.currentTarget), key = targetEl.attr("id"), model = this.options.data.find(function(item) {
                return item.key === _this2.options.activeKey;
            });
            var subModel = {};
            if (model) {
                if (model.children) {
                    (function() {
                        var findModel = function findModel(data) {
                            var result = data.find(function(item) {
                                return item.key === key;
                            });
                            if (!result) {
                                data.forEach(function(item) {
                                    if (item.children) {
                                        result = findModel(item.children);
                                    }
                                });
                            }
                            return result || {};
                        };
                        subModel = findModel(model.children);
                    })();
                }
            }
            this.$(".dropdown-menu a").removeClass("active");
            this.$("#" + key).addClass("active");
            if (typeof this.options.onClick === "function") this.options.onClick(this, subModel, event);
        }
    } ]);
    return Navs;
}(Lego.UI.Baseview);

Lego.components("navs", Navs);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-tabs">\n            <navs id="navs-', '"></navs>\n            <div class="tab-content ', '">\n                ', "\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-tabs">\n            <navs id="navs-', '"></navs>\n            <div class="tab-content ', '">\n                ', "\n            </div>\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="tab-pane ', " ", '">\n                            ', "\n                        </div>" ], [ '<div class="tab-pane ', " ", '">\n                            ', "\n                        </div>" ]);

var Tabs = function(_Lego$UI$Baseview) {
    inherits(Tabs, _Lego$UI$Baseview);
    function Tabs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tabs);
        var options = {
            eventName: "click",
            type: "line",
            size: "default",
            closable: false,
            activeKey: "",
            activeContent: "",
            direction: "bottom",
            navClassName: "",
            contentScrollbar: null,
            showAdd: false,
            animateIn: Lego.config.animateAble ? "fadeIn" : "",
            animateOut: Lego.config.animateAble ? "fadeOut" : "",
            data: [],
            onAdd: function onAdd() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, options));
    }
    createClass(Tabs, [ {
        key: "components",
        value: function components() {
            var options = this.options, comId = "#navs-" + options.vid;
            var data = options.data.filter(function(item) {
                return !item.isHide;
            });
            options.activeKey = typeof options.activeKey == "number" ? data[options.activeKey].key : options.activeKey;
            var model = data.find(function(item) {
                return item.key == options.activeKey;
            });
            if (model) options.activeContent = typeof model.content == "function" ? model.content() : model.content;
            this.addCom({
                el: comId,
                eventName: options.eventName || "click",
                className: options.navClassName,
                type: "tabs",
                activeKey: options.activeKey,
                onClick: function onClick(self, item) {
                    if (!item.disabled && item.content) {
                        var pView = this.context;
                        pView.options.activeKey = item.key;
                        pView.options.activeContent = typeof item.content == "function" ? item.content() : item.content;
                        if (typeof options.onChange === "function") options.onChange(pView, item);
                    }
                },
                data: data
            });
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options, newData = [];
            function getNewData(data) {
                if (Array.isArray(data)) {
                    if (data.length) {
                        data.forEach(function(item) {
                            if (item.children) {
                                getNewData(item.children);
                            } else {
                                newData.push(item);
                            }
                        });
                    }
                }
            }
            getNewData(options.data);
            var vDom = hx(_templateObject, options.vid, options.contentScrollbar ? "scrollbar" : "", newData.map(function(item) {
                if (!item.disabled) {
                    return hx(_templateObject2, val(options.animate), item.key == options.activeKey ? "active" : "", item.key == options.activeKey ? options.activeContent : "");
                }
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            if (opts.animateIn) Lego.UI.Util.animateCss(this.$(".tab-pane.active"), opts.animateIn);
        }
    } ]);
    return Tabs;
}(Lego.UI.Baseview);

Lego.components("tabs", Tabs);

module.exports = Tabs;
