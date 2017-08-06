/**
 * tables.js v0.12.4
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

var _templateObject3$3 = taggedTemplateLiteral([ '<dropdown id="autocomplete_', '"></dropdown>' ], [ '<dropdown id="autocomplete_', '"></dropdown>' ]);

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
                        if (typeof opts.onSearch === "function") {
                            opts.onSearch(this, result, self);
                        }
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
                if (opts.autoComplete.data) {
                    autoCompleteOpts.data = opts.autoComplete.data;
                }
                if (opts.autoComplete.dataSource) {
                    autoCompleteOpts.dataSource = opts.autoComplete.dataSource;
                }
                autoCompleteOpts.stopFetch = true;
                this.addCom(autoCompleteOpts);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$3, opts.size ? "input-group-" + opts.size : "", opts.autoComplete ? "position: relative;" : "", opts.showSelect ? hx(_templateObject2$3, opts.vid, opts.activeValue || "请选择", opts.vid) : "", opts.vid, opts.placeholder, opts.name, val(opts.keyword), opts.autoComplete ? hx(_templateObject3$3, opts.vid) : "");
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
                if (typeof opts.onKeyup === "function") {
                    opts.onKeyup(this, result, view || event);
                }
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
            if (event) {
                event.stopPropagation();
            }
            if (typeof this.options.onChange === "function") {
                this.options.onChange(this, this.getValue(event), event);
            }
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            if (event) {
                event.stopPropagation();
            }
            if (typeof this.options.onSearch === "function") {
                this.options.onSearch(this, this.getValue(event), event);
            }
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

var _templateObject$2 = taggedTemplateLiteral([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$2 = taggedTemplateLiteral([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$2 = taggedTemplateLiteral([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = taggedTemplateLiteral([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$2 = taggedTemplateLiteral([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

var _templateObject6$2 = taggedTemplateLiteral([ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ], [ '\n            <div class="dropdown-menu" style="display:', '">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ]);

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
                        return hx(_templateObject2$2, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$2, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item), item.children ? hx(_templateObject4$2, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5$2, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
                return itemNav(item);
            }));
            if (opts.showSearch) {
                vDom = hx(_templateObject6$2, opts.open ? "block" : "none", opts.vid, vDom);
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
                    event.stopPropagation();
                    $(".dropdown-menu").each(function(index, el) {
                        if (el === that.el) {
                            var _Lego$UI$Util;
                            (_Lego$UI$Util = Lego.UI.Util).getDirection.apply(_Lego$UI$Util, [ that.container, that.$el ].concat(toConsumableArray(that.directionArr)));
                            that.$el.slideToggle("fast");
                        } else {
                            $(el).slideUp("fast");
                        }
                    });
                };
                var cssObj = {
                    zIndex: 1e4
                };
                if (opts.width) {
                    cssObj.width = opts.width;
                }
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
                that.close();
            });
        }
    }, {
        key: "show",
        value: function show() {
            var _Lego$UI$Util2;
            if (this.container) {
                (_Lego$UI$Util2 = Lego.UI.Util).getDirection.apply(_Lego$UI$Util2, [ this.container, this.$el ].concat(toConsumableArray(this.directionArr)));
            }
            if (this.$el.css("display") == "none") {
                this.$el.slideDown("fast");
            }
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
            if (model) {
                this.options.onChange(this, model, event);
            }
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

var _templateObject$1 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2$1 = taggedTemplateLiteral([ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject3$1 = taggedTemplateLiteral([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject4$1 = taggedTemplateLiteral([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject5$1 = taggedTemplateLiteral([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ]);

var _templateObject6$1 = taggedTemplateLiteral([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject7$1 = taggedTemplateLiteral([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ]);

var _templateObject8$1 = taggedTemplateLiteral([ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ], [ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ]);

var _templateObject9$1 = taggedTemplateLiteral([ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject10$1 = taggedTemplateLiteral([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject11$1 = taggedTemplateLiteral([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

var Pagination = function(_Lego$UI$Baseview) {
    inherits(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Pagination);
        var options = {
            events: {
                "click .prev:not(.disabled)": "clickPrevPage",
                "click .page-item:not(.active)": "clickItemPage",
                "click .next:not(.disabled)": "clickNextPage",
                "click .morepage": "clickMorePage",
                "click .lego-refresh": "clickRefresh",
                'keydown .info>input[type="text"]': "_enterSearch"
            },
            current: 1,
            totalCount: 0,
            totalPages: 0,
            pageSize: 10,
            pageRang: 10,
            onChange: function onChange() {},
            showSizeChanger: true,
            pageSizeOptions: [ 10, 20, 30, 40, 50 ],
            onPageSizeChange: function onPageSizeChange() {},
            showQuickJumper: true,
            showRefresh: true,
            size: "",
            simple: null,
            isShowTotal: true
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    createClass(Pagination, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!opts.simple && opts.showSizeChanger) {
                var theData = opts.pageSizeOptions.map(function(val) {
                    return {
                        key: val,
                        value: val + " / 页"
                    };
                });
                this.addCom({
                    el: "#dropdown-" + opts.vid,
                    container: "#select-" + opts.vid,
                    direction: "top_left",
                    data: theData,
                    onChange: function onChange(self, result) {
                        var num = parseInt(result.key);
                        opts.current = 1;
                        opts.pageSize = num;
                        that.syncOpts();
                        opts.onPageSizeChange(that, num);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = hx(_templateObject$1), current = parseInt(opts.current), pageRang = parseInt(opts.pageRang), totalCount = val(opts.totalCount);
            opts.totalPages = Math.ceil(totalCount / opts.pageSize);
            pageRang = pageRang >= opts.totalPages ? opts.totalPages : pageRang;
            var baseTimes = pageRang ? Math.floor((current - 1) / pageRang) : 0, startPage = baseTimes * pageRang + 1, endPage = startPage + pageRang - 1, showEllipsis = Math.ceil(current / pageRang) !== Math.ceil(opts.totalPages / pageRang) && totalCount ? true : false, pagesArr = [];
            endPage = endPage >= opts.totalPages ? opts.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            vDom = hx(_templateObject2$1, opts.simple ? "pagination-simple" : "", opts.size == "small" ? "mini" : "", current <= 1 ? "disabled" : "", opts.simple ? hx(_templateObject3$1, current, opts.endPage, current) : "", !opts.simple ? pagesArr.map(function(x) {
                return hx(_templateObject4$1, x, x == current ? "active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject5$1, opts.pageSize) : "", !opts.simple && showEllipsis ? hx(_templateObject6$1, opts.totalPages, opts.totalPages) : "", !opts.simple ? hx(_templateObject7$1, current >= opts.totalPages ? "disabled" : "") : "", !opts.simple && opts.showRefresh ? hx(_templateObject8$1) : "", !opts.simple && opts.showSizeChanger ? hx(_templateObject9$1, opts.vid, opts.pageSize, opts.vid) : "", !opts.simple && opts.showQuickJumper ? hx(_templateObject10$1, this.jumped ? current : "1", opts.isShowTotal ? hx(_templateObject11$1, typeof opts.showTotal === "function" ? opts.showTotal(totalCount) : "总数 " + totalCount) : "") : "");
            this.jumped = false;
            return vDom;
        }
    }, {
        key: "syncOpts",
        value: function syncOpts() {
            Object.assign(this.options.context.options.pagination, this.options);
        }
    }, {
        key: "clickPrevPage",
        value: function clickPrevPage(event) {
            event.stopPropagation();
            var opts = this.options;
            opts.current--;
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickItemPage",
        value: function clickItemPage(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), num = target.attr("title");
            var opts = this.options;
            opts.current = num;
            this.syncOpts();
            opts.onChange(this, num, opts.pageSize);
        }
    }, {
        key: "clickNextPage",
        value: function clickNextPage(event) {
            event.stopPropagation();
            var opts = this.options;
            opts.current++;
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickMorePage",
        value: function clickMorePage(event) {
            event.stopPropagation();
            var opts = this.options;
            var current = parseInt(opts.current), pageRang = parseInt(opts.pageRang), currentMod = current % pageRang ? current % pageRang : pageRang;
            opts.current = current + (pageRang - currentMod + 1);
            if (opts.current > opts.totalPages) {
                opts.current = opts.totalPages;
            }
            this.syncOpts();
            opts.onChange(this, opts.current, opts.pageSize);
        }
    }, {
        key: "clickRefresh",
        value: function clickRefresh(event) {
            event.stopPropagation();
            this.options.context.fetch();
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget);
            var opts = this.options;
            var num = target.val();
            if (event.keyCode == 13) {
                if (num > opts.totalPages) {
                    num = opts.totalPages;
                }
                if (!Number(num)) {
                    num = 1;
                }
                this.jumped = true;
                opts.current = num;
                this.syncOpts();
                opts.onChange(this, num, opts.pageSize);
            }
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

Lego.components("pagination", Pagination);

var _templateObject$4 = taggedTemplateLiteral([ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$4 = taggedTemplateLiteral([ '<div class="lego-tip-text" style="', '">', "</div>" ], [ '<div class="lego-tip-text" style="', '">', "</div>" ]);

var Nodata = function(_Lego$View) {
    inherits(Nodata, _Lego$View);
    function Nodata() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Nodata);
        var options = {
            size: "",
            tip: "暂无数据",
            icon: ""
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Nodata.__proto__ || Object.getPrototypeOf(Nodata)).call(this, options));
    }
    createClass(Nodata, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject$4, val(opts.icon), opts.size ? "lego-icon-" + opts.size : "", opts.tip ? hx(_templateObject2$4, opts.icon ? "margin-top:40px;" : "", opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Nodata;
}(Lego.View);

Lego.components("nodata", Nodata);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-table clearfix ', "\n        ", "\n        ", "\n        ", '">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                    ', '\n                    <div class="lego-table-body">\n                        ', '\n                        <div class="scrollbar">\n                            <table class="table ', " ", '">\n                                ', "\n                                ", "\n                                ", "\n                            </table>\n                        </div>\n                    </div>\n                    ", "\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-table clearfix ', "\n        ", "\n        ", "\n        ", '">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                    ', '\n                    <div class="lego-table-body">\n                        ', '\n                        <div class="scrollbar">\n                            <table class="table ', " ", '">\n                                ', "\n                                ", "\n                                ", "\n                            </table>\n                        </div>\n                    </div>\n                    ", "\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3 = taggedTemplateLiteral([ '\n                    <div class="lego-table-header">\n                        <table class="table ', " ", '">\n                            ', "\n                            ", "\n                        </table>\n                    </div>\n                    " ], [ '\n                    <div class="lego-table-header">\n                        <table class="table ', " ", '">\n                            ', "\n                            ", "\n                        </table>\n                    </div>\n                    " ]);

var _templateObject4 = taggedTemplateLiteral([ '<nodata id="nodata_', '"></nodata>' ], [ '<nodata id="nodata_', '"></nodata>' ]);

var _templateObject5 = taggedTemplateLiteral([ '<div class="hide"></div>' ], [ '<div class="hide"></div>' ]);

var _templateObject6 = taggedTemplateLiteral([ '\n                    <div class="lego-table-footer">\n                        ', "\n                    </div>" ], [ '\n                    <div class="lego-table-footer">\n                        ', "\n                    </div>" ]);

var _templateObject7 = taggedTemplateLiteral([ '<pagination id="pagination_', '"></pagination>' ], [ '<pagination id="pagination_', '"></pagination>' ]);

var _templateObject8 = taggedTemplateLiteral([ '<button type="button" class="btn btn-default table-setting" title="setting"><i class="anticon anticon-ellipsis"></i></button>' ], [ '<button type="button" class="btn btn-default table-setting" title="setting"><i class="anticon anticon-ellipsis"></i></button>' ]);

var _templateObject9 = taggedTemplateLiteral([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);

var _templateObject10 = taggedTemplateLiteral([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);

var _templateObject11 = taggedTemplateLiteral([ '<col style="', '">' ], [ '<col style="', '">' ]);

var _templateObject12 = taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ]);

var _templateObject13 = taggedTemplateLiteral([ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ], [ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ]);

var _templateObject14 = taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject15 = taggedTemplateLiteral([ '<th class="lego-table-selection">', "</th>" ], [ '<th class="lego-table-selection">', "</th>" ]);

var _templateObject16 = taggedTemplateLiteral([ '<td class="lego-table-selection">', "</td>" ], [ '<td class="lego-table-selection">', "</td>" ]);

var _templateObject17 = taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject18 = taggedTemplateLiteral([ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ], [ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ]);

var _templateObject19 = taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject20 = taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject21 = taggedTemplateLiteral([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject22 = taggedTemplateLiteral([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject23 = taggedTemplateLiteral([ '<i class="anticon anticon-filter"></i>' ], [ '<i class="anticon anticon-filter"></i>' ]);

var Tables = function(_Lego$UI$Baseview) {
    inherits(Tables, _Lego$UI$Baseview);
    function Tables() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tables);
        var options = {
            events: {
                "click tbody .lego-checkbox > input,.lego-radio > input": "selectOne",
                "click thead .lego-checkbox > input": "selectAll",
                "click th>span": "clickSorter",
                "click .anticon-filter": "clickFilter",
                "click .lego-table-tbody td": "clickItem",
                "click .lego-table-scroll > button": "clickSetting"
            },
            scrollbar: {},
            style: {},
            className: "",
            width: 0,
            height: 0,
            loading: true,
            nodata: false,
            wordBreak: true,
            bordered: false,
            striped: true,
            rowSelection: null,
            rowClassName: "",
            pagination: null,
            size: "",
            columns: [],
            expandAllRows: false,
            showSetting: false,
            footer: false,
            title: false,
            scrollOption: {},
            data: [],
            nodataOption: {},
            onExpandRow: function onExpandRow() {},
            onChange: function onChange() {},
            onSelect: function onSelect() {},
            onSetting: function onSetting() {},
            onRowClick: function onRowClick() {},
            components: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).call(this, options));
        var that = _this;
        $(window).resize(function() {
            that.resizeWidth();
        });
        _this.resizeWidth();
        return _this;
    }
    createClass(Tables, [ {
        key: "getColumns",
        value: function getColumns() {
            var _this2 = this;
            this.columns = [];
            var opts = this.options, oldWidth = this.tableRealWidth;
            this.columnsObj = this.columnsObj || {};
            if (opts.columns) {
                this.allColumns = typeof opts.columns == "function" ? opts.columns(this) : opts.columns;
                this.allColumns.forEach(function(col, index) {
                    col.fieldName = col.fieldName || col.dataIndex;
                    col.key = col.key || col.fieldName;
                });
                this.columns = Array.from(this.allColumns);
            }
            this.tableRealWidth = this.options.rowSelection ? 30 : 0;
            if (this.columns.length) {
                this.columns.forEach(function(col, index) {
                    if (_this2.columnsObj[col.key]) {
                        Object.assign(col, _this2.columnsObj[col.key]);
                    } else {
                        _this2.columnsObj[col.key] = col;
                    }
                    if (!col.isHide) {
                        _this2.tableRealWidth += parseInt(col.width || 200);
                    }
                });
                this.columns = this.columns.filter(function(col) {
                    return !col.isHide;
                });
            }
            if (this.tableRealWidth !== oldWidth) {
                this.resizeWidth();
            }
            return this.columns;
        }
    }, {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.style.height && !opts.height) {
                opts.height = opts.style.height;
            }
            if (!opts.style.height && opts.height) {
                opts.style.height = opts.height;
            }
            if (!opts.data.length) {
                this.addCom(Object.assign({
                    el: "#nodata_" + opts.vid
                }), Lego.config.nodataOption || {}, opts.nodataOption);
            }
            if (opts.pagination) {
                opts.pagination.el = "#pagination_" + opts.vid;
                if (this.oldTotalCount !== undefined && this.oldCurrent !== undefined && Lego.getView(opts.pagination.el)) {
                    if (this.oldTotalCount !== opts.pagination.totalCount || this.oldCurrent !== opts.pagination.current) {
                        opts.pagination.context = this;
                        Lego.create(Pagination, opts.pagination);
                    }
                } else {
                    this.addCom(opts.pagination);
                }
                this.oldTotalCount = opts.pagination.totalCount || 0;
                this.oldCurrent = opts.pagination.current || 1;
            }
        }
    }, {
        key: "resizeWidth",
        value: function resizeWidth() {
            var tableWidth = $(this.options.el).parent().width();
            this.options.width = this.tableRealWidth >= tableWidth ? this.tableRealWidth : 0;
        }
    }, {
        key: "render",
        value: function render() {
            this.getColumns();
            var opts = this.options;
            var vDom = hx(_templateObject, opts.size ? "table-" + opts.size : "", opts.height ? "lego-table-fixed-header" : "", opts.bordered ? "lego-table-bordered" : "", opts.wordBreak ? "lego-nowrap" : "", opts.vid, opts.title ? hx(_templateObject2, val(opts.title)) : "", opts.height ? hx(_templateObject3, opts.bordered ? "table-bordered" : "", opts.striped ? "table-striped" : "", this._renderColgroup(), this._renderHeader()) : "", opts.nodata ? hx(_templateObject4, opts.vid) : hx(_templateObject5), opts.bordered ? "table-bordered" : "", opts.striped ? "table-striped" : "", this._renderColgroup(), !opts.height ? this._renderHeader() : "", this._renderBodyer(), !opts.nodata ? hx(_templateObject6, opts.footer ? val(opts.footer) : opts.pagination && !opts.nodata ? hx(_templateObject7, opts.vid) : "") : "", opts.showSetting ? hx(_templateObject8) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, columns = this.columns, header = this.$(".lego-table-header");
            this.$(".lego-table-body").css({
                bottom: opts.pagination ? 48 : 0,
                minHeight: opts.nodata ? 120 : 0
            });
            this.$(".table").width(opts.width || "100%");
            if (!opts.title) {
                this.$(".lego-table-content").css({
                    paddingBottom: 0
                });
            }
            this.$("colgroup").each(function(index, el) {
                $(el).children("col").each(function(i, e) {
                    if (opts.rowSelection && i == 0) {
                        $(e).width(30);
                    } else {
                        if (i !== columns.length - 1 || opts.width) {
                            if (columns[i]) {
                                $(e).width(parseInt(columns[i].width));
                            }
                        }
                    }
                });
            });
            this.$(".lego-table-body > .scrollbar").scroll(function() {
                header.scrollLeft($(this).scrollLeft());
            });
        }
    }, {
        key: "_getRowKey",
        value: function _getRowKey() {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.rowKey = this.rowKey || 0;
            this.rowKey++;
            return str + this.rowKey;
        }
    }, {
        key: "_renderColgroup",
        value: function _renderColgroup() {
            var _this3 = this;
            var vDom = hx(_templateObject9, this.options.rowSelection ? hx(_templateObject10) : "", this.columns.map(function(col, index) {
                var w = index !== _this3.columns.length - 1 || _this3.options.width ? "width:" + (typeof col.width == "number" ? col.width + "px" : col.width.toString()) : "";
                return hx(_templateObject11, w);
            }));
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var isHarf = arguments[2];
            var opts = this.options, theType = opts.rowSelection.type || "checkbox", isCheckbox = theType == "checkbox", that = this;
            var isChecked = row._selected || tagName === "th" && this.getSelectedStatus() === 1;
            function getHx() {
                return hx(_templateObject12, theType, tagName !== "th" || isCheckbox ? hx(_templateObject13, theType, row.disabled ? "lego-" + theType + "-disabled" : "", isChecked ? "lego-" + theType + "-checked lego-" + theType + "-checked-1" : isHarf ? "lego-" + theType + "-indeterminate" : "", theType, theType, row.disabled ? "disabled" : "", theType, isChecked ? "on" : "") : "");
            }
            var vDom = hx(_templateObject14, tagName == "th" ? hx(_templateObject15, getHx()) : hx(_templateObject16, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this4 = this;
            var opts = this.options;
            var vDom = hx(_templateObject17, opts.rowSelection ? this._renderSelection({}, "th", this.getSelectedStatus() === 2 ? true : false) : "", this.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject18, col.sorter ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this4._renderSorter(col) : "", _this4._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this5 = this;
            var opts = this.options;
            if (!opts.data) {
                return;
            }
            var vDom = hx(_templateObject19, opts.data.map(function(row, i) {
                row.key = row.id || _this5._getRowKey("row_");
                return hx(_templateObject20, row.className || opts.rowClassName, row.key, opts.rowSelection ? _this5._renderSelection(row, "td") : "", _this5.columns.map(function(col) {
                    var fieldName = row[col.fieldName || col.dataIndex];
                    return !col.isHide ? hx(_templateObject21, typeof col.format === "function" ? col.format(fieldName, row, col) : fieldName) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = this.options;
            var vDom = hx(_templateObject22, col.sortOrder == "asc" ? "on" : "off", col.sortOrder == "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject23) : "";
        }
    }, {
        key: "clickSorter",
        value: function clickSorter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.closest("th").attr("id"), col = this.columnsObj[key], oldCol = this.columns.find(function(item) {
                return item.key == key;
            });
            if (col) {
                col.sortOrder = col.sortOrder || "";
                switch (col.sortOrder) {
                  case "asc":
                    col.sortOrder = "desc";
                    break;

                  case "desc":
                    col.sortOrder = "";
                    break;

                  case "":
                    col.sortOrder = "asc";
                    break;
                }
                this.refresh();
                if (oldCol) {
                    if (typeof oldCol.sorter === "function") {
                        oldCol.sorter(this, col, event);
                    }
                }
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = this.$el.find("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key == rowKey;
            });
            var col = this.columns.find(function(val) {
                return val.key == colKey;
            });
            if (row && col) {
                if (this.options.onRowClick) {
                    if (typeof col.onRowClick == "function") {
                        col.onRowClick(this, row, event);
                    }
                }
                if (col.onCellClick) {
                    if (typeof col.onCellClick == "function") {
                        col.onCellClick(this, row, col, event);
                    }
                }
            }
        }
    }, {
        key: "clickFilter",
        value: function clickFilter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), colKey = target.closest("th").attr("id"), col = this.columns.find(function(val) {
                return val.key == colKey;
            });
            if (col) {
                if (typeof col.filter == "function") {
                    col.filter(this, col, event);
                }
            }
        }
    }, {
        key: "clickSetting",
        value: function clickSetting(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), theId = "setting-" + this.options.vid;
            if (typeof this.options.onSetting == "function") {
                this.options.onSetting(this, event);
            }
        }
    }, {
        key: "selectOne",
        value: function selectOne(event) {
            var target = $(event.currentTarget), trEl = target.closest("tr"), id = trEl.attr("id"), options = this.options, that = this;
            if (options.rowSelection) {
                if (options.rowSelection.type == "radio") {
                    options.data.forEach(function(item) {
                        item._selected = item.key == id ? true : false;
                    });
                } else {
                    var row = options.data.find(function(value, index, arr) {
                        return value.key == id;
                    });
                    if (row) {
                        row._selected = !row._selected;
                    }
                }
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value._selected === true;
                });
                if (typeof options.onSelect == "function") {
                    options.onSelect(this, this.getSelectedStatus() ? Array.from(hasSelectedArr) : []);
                }
                this.refresh();
            }
        }
    }, {
        key: "getSelectedStatus",
        value: function getSelectedStatus() {
            if (Array.isArray(this.options.data)) {
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value._selected === true;
                });
                this.selectedAll = hasSelectedArr.length ? hasSelectedArr.length == this.options.data.length ? 1 : hasSelectedArr.length ? 2 : 0 : 0;
                return this.selectedAll;
            } else {
                return [];
            }
        }
    }, {
        key: "selectAll",
        value: function selectAll(event) {
            var _this6 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? 1 : 0;
                    _this6.selectedAll = isSelected;
                    _this6.options.data.map(function(row, index) {
                        row._selected = !!isSelected;
                    });
                    if (typeof _this6.options.onSelect == "function") {
                        _this6.options.onSelect(_this6, isSelected ? Array.from(_this6.options.data) : []);
                    }
                    _this6.refresh();
                })();
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            if (Array.isArray(this.options.data)) {
                return this.options.data.filter(function(row) {
                    return row._selected == true;
                });
            }
            return [];
        }
    } ]);
    return Tables;
}(Lego.UI.Baseview);

Lego.components("tables", Tables);

module.exports = Tables;
