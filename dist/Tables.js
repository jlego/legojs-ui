/**
 * tables.js v0.7.5
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass$3 = function() {
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

var _templateObject$3 = _taggedTemplateLiteral$3([ '\n        <div class="input-group lego-search ', '">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '" name="', '" value="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group lego-search ', '">\n        ', '\n          <input type="text" class="form-control lego-search-input" placeholder="', '" name="', '" value="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn lego-search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);

var _templateObject2$3 = _taggedTemplateLiteral$3([ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ]);

function _taggedTemplateLiteral$3(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$3(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
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
    _inherits$3(Search, _Lego$UI$Baseview);
    function Search() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$3(this, Search);
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
        return _possibleConstructorReturn$3(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    _createClass$3(Search, [ {
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
            var vDom = hx(_templateObject$3, options.size ? "input-group-" + options.size : "", options.showSelect ? hx(_templateObject2$3, options.vid, options.activeValue || "请选择", options.vid) : "", options.placeholder, options.name, val(options.keyword));
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

var _templateObject$2 = _taggedTemplateLiteral$2([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$2 = _taggedTemplateLiteral$2([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$2 = _taggedTemplateLiteral$2([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = _taggedTemplateLiteral$2([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$2 = _taggedTemplateLiteral$2([ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="', " ", '"\n        ', ">\n            ", "\n        </ul>\n        " ]);

var _templateObject6$2 = _taggedTemplateLiteral$2([ '\n            <div class="dropdown-menu">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ], [ '\n            <div class="dropdown-menu">\n                <div class="lego-search-container"><search id="search_', '"></search></div>\n                ', "\n            </div>\n            " ]);

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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$2(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Dropdown);
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
        return _possibleConstructorReturn$2(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$2(Dropdown, [ {
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
                        return hx(_templateObject2$2, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$2, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4$2, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            vDom = hx(_templateObject5$2, !opts.showSearch ? "dropdown-menu " : "", opts.scrollbar ? "scrollbar" : "", !opts.showSearch ? 'style="display:' + (opts.open ? "block" : "none") + '"' : "", opts.data.map(function(item) {
                return itemNav(item);
            }));
            if (opts.showSearch) {
                vDom = hx(_templateObject6$2, opts.vid, vDom);
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

var _templateObject$1 = _taggedTemplateLiteral$1([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject5$1 = _taggedTemplateLiteral$1([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>\n            ' ]);

var _templateObject6$1 = _taggedTemplateLiteral$1([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject7$1 = _taggedTemplateLiteral$1([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>\n            </li>\n            ' ]);

var _templateObject8$1 = _taggedTemplateLiteral$1([ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ], [ '\n            <li class="lego-refresh">\n                <a href="javascript:;" title="刷新"><i class="anticon anticon-sync"></i></a>\n            </li>\n            ' ]);

var _templateObject9$1 = _taggedTemplateLiteral$1([ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 5px 10px;">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 5px 10px;">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject10$1 = _taggedTemplateLiteral$1([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject11$1 = _taggedTemplateLiteral$1([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

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

var Pagination = function(_Lego$UI$Baseview) {
    _inherits$1(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Pagination);
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
        var _this = _possibleConstructorReturn$1(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    _createClass$1(Pagination, [ {
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
                    direction: "top",
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
            if (opts.current > opts.totalPages) opts.current = opts.totalPages;
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
                if (num > opts.totalPages) num = opts.totalPages;
                if (!Number(num)) num = 1;
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

var _createClass$4 = function() {
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

var _templateObject$4 = _taggedTemplateLiteral$4([ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-nodata">\n            <div class="lego-icon ', " ", '"></div>\n            ', "\n        </div>\n        " ]);

var _templateObject2$4 = _taggedTemplateLiteral$4([ '<div class="lego-tip-text" style="', '">', "</div>" ], [ '<div class="lego-tip-text" style="', '">', "</div>" ]);

function _taggedTemplateLiteral$4(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$4(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
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

var Nodata = function(_Lego$View) {
    _inherits$4(Nodata, _Lego$View);
    function Nodata() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$4(this, Nodata);
        var options = {
            size: "",
            tip: "暂无数据",
            icon: ""
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$4(this, (Nodata.__proto__ || Object.getPrototypeOf(Nodata)).call(this, options));
    }
    _createClass$4(Nodata, [ {
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-table clearfix lego-table-', " ", "\n        ", " ", ' lego-table-scroll-position-left">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content" style="', '">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    ', '\n                    <div class="', '">\n                        <table class="', '" style="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", '\n                        </table>\n                    </div>\n                </div>\n                <div class="lego-table-footer">', "</div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-table clearfix lego-table-', " ", "\n        ", " ", ' lego-table-scroll-position-left">\n            <loading id="lego-loading-', '"></loading>\n            ', '\n            <div class="lego-table-content" style="', '">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    ', '\n                    <div class="', '">\n                        <table class="', '" style="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", '\n                        </table>\n                    </div>\n                </div>\n                <div class="lego-table-footer">', "</div>\n                ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                <div class="lego-table-header">\n                    <table class="" style="', '">\n                        ', "\n                        ", "\n                    </table>\n                </div>\n                " ], [ '\n                <div class="lego-table-header">\n                    <table class="" style="', '">\n                        ', "\n                        ", "\n                    </table>\n                </div>\n                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<nodata id="nodata_', '"></nodata>' ], [ '<nodata id="nodata_', '"></nodata>' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<div style="display:none;"></div>' ], [ '<div style="display:none;"></div>' ]);

var _templateObject6 = _taggedTemplateLiteral([ '<pagination id="pagination_', '"></pagination>' ], [ '<pagination id="pagination_', '"></pagination>' ]);

var _templateObject7 = _taggedTemplateLiteral([ '<button type="button" class="btn btn-default noborder" title="表格设置"><i class="anticon anticon-ellipsis"></i></button>' ], [ '<button type="button" class="btn btn-default noborder" title="表格设置"><i class="anticon anticon-ellipsis"></i></button>' ]);

var _templateObject8 = _taggedTemplateLiteral([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);

var _templateObject9 = _taggedTemplateLiteral([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);

var _templateObject10 = _taggedTemplateLiteral([ '<col style="', '">' ], [ '<col style="', '">' ]);

var _templateObject11 = _taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ]);

var _templateObject12 = _taggedTemplateLiteral([ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ], [ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ]);

var _templateObject13 = _taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject14 = _taggedTemplateLiteral([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject15 = _taggedTemplateLiteral([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject16 = _taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject17 = _taggedTemplateLiteral([ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ], [ '<th class="', '" id="', '"><span title="点击排序">', "\n                ", "</span>", "</th>" ]);

var _templateObject18 = _taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject19 = _taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject20 = _taggedTemplateLiteral([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject21 = _taggedTemplateLiteral([ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ], [ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ]);

var _templateObject22 = _taggedTemplateLiteral([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject23 = _taggedTemplateLiteral([ '<i class="anticon anticon-filter"></i>' ], [ '<i class="anticon anticon-filter"></i>' ]);

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

var Tables = function(_Lego$UI$Baseview) {
    _inherits(Tables, _Lego$UI$Baseview);
    function Tables() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tables);
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
            className: "",
            tableWidth: 0,
            loading: true,
            isNodata: false,
            isNowrap: true,
            rowSelection: null,
            pagination: null,
            size: "default",
            columns: [],
            rowClassName: "",
            expandedRowKeys: [],
            expandAllRows: false,
            locale: {
                filterConfirm: "确定",
                filterReset: "重置",
                emptyText: "暂无数据"
            },
            bordered: false,
            showHeader: false,
            showBodyer: true,
            showFooter: false,
            showSetting: false,
            fixedHeader: true,
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
        var _this = _possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).call(this, options));
        var that = _this;
        var header = _this.$(".lego-table-header");
        _this.$(".lego-table-body > .scrollbar").scroll(function() {
            header.scrollLeft($(this).scrollLeft());
        });
        if (_this.options.showFooter && _this.columns.length) {
            _this.$(".lego-table-tfoot > tr > td").attr("colspan", _this.columns.length);
        }
        $(window).resize(function() {
            that.resizeWidth();
        });
        _this.resizeWidth();
        return _this;
    }
    _createClass(Tables, [ {
        key: "getColumns",
        value: function getColumns() {
            var _this2 = this;
            this.columns = [];
            var options = this.options, oldWidth = this.tableRealWidth;
            this.columnsObj = this.columnsObj || {};
            if (options.columns) {
                this.allColumns = typeof options.columns == "function" ? options.columns(this) : options.columns;
                this.columns = Array.from(this.allColumns);
            }
            this.tableRealWidth = this.options.rowSelection ? 30 : 0;
            this.columns.forEach(function(col, index) {
                col.key = col.key || index;
                if (_this2.columnsObj[col.key]) {
                    Object.assign(col, _this2.columnsObj[col.key]);
                } else {
                    _this2.columnsObj[col.key] = col;
                }
                if (!col.isHide) _this2.tableRealWidth += parseInt(col.width || 200);
            });
            this.columns = this.columns.filter(function(col) {
                return !col.isHide;
            });
            if (this.tableRealWidth !== oldWidth) this.resizeWidth();
            return this.columns;
        }
    }, {
        key: "components",
        value: function components() {
            var opts = this.options;
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
            this.options.tableWidth = this.tableRealWidth > tableWidth ? this.tableRealWidth : 0;
        }
    }, {
        key: "render",
        value: function render() {
            this.getColumns();
            var opts = this.options;
            var vDom = hx(_templateObject, opts.size, opts.bordered ? "lego-table-bordered" : "", opts.showHeader && opts.fixedHeader ? "lego-table-fixed-header" : "", opts.isNowrap ? "lego-nr" : "", opts.vid, opts.title ? hx(_templateObject2, typeof opts.title == "function" ? opts.title() : opts.title) : "", !opts.title ? "padding-bottom:0" : "", opts.showHeader && opts.fixedHeader ? hx(_templateObject3, opts.tableWidth ? "width:" + opts.tableWidth + "px" : "width:1px", this._renderColgroup(), this._renderHeader()) : "", opts.pagination ? "48px" : "0", opts.isNodata ? hx(_templateObject4, opts.vid) : hx(_templateObject5), opts.showHeader && opts.fixedHeader ? "scrollbar" : "", opts.className, opts.tableWidth ? "width:" + opts.tableWidth + "px" : "width:1px", this._renderColgroup(), !(opts.showHeader && opts.fixedHeader) && opts.showHeader ? this._renderHeader() : "", opts.showBodyer ? this._renderBodyer() : "", opts.showFooter ? this._renderFooter() : "", opts.pagination && !opts.isNodata ? hx(_templateObject6, opts.vid) : "", opts.showSetting ? hx(_templateObject7) : "");
            return vDom;
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
            var vDom = hx(_templateObject8, this.options.rowSelection ? hx(_templateObject9) : "", this.columns.map(function(col, index) {
                var w = index !== _this3.columns.length - 1 || _this3.options.tableWidth ? "width:" + (typeof col.width == "number" ? col.width + "px" : col.width.toString()) : "";
                return hx(_templateObject10, w);
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
                return hx(_templateObject11, theType, tagName !== "th" || isCheckbox ? hx(_templateObject12, theType, row.disabled ? "lego-" + theType + "-disabled" : "", isChecked ? "lego-" + theType + "-checked lego-" + theType + "-checked-1" : isHarf ? "lego-" + theType + "-indeterminate" : "", theType, theType, row.disabled ? "disabled" : "", theType, isChecked ? "on" : "") : "");
            }
            var vDom = hx(_templateObject13, tagName == "th" ? hx(_templateObject14, getHx()) : hx(_templateObject15, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this4 = this;
            var opts = this.options;
            var vDom = hx(_templateObject16, opts.rowSelection ? this._renderSelection({}, "th", this.getSelectedStatus() === 2 ? true : false) : "", this.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject17, col.sorter ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this4._renderSorter(col) : "", _this4._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this5 = this;
            var opts = this.options;
            if (!opts.data) return;
            var vDom = hx(_templateObject18, opts.data.map(function(row, i) {
                row.key = row.id || _this5._getRowKey("row_");
                return hx(_templateObject19, opts.rowClassName, row.key, opts.rowSelection ? _this5._renderSelection(row, "td") : "", _this5.columns.map(function(col) {
                    return !col.isHide ? hx(_templateObject20, typeof col.format === "function" ? col.format(row[col.dataIndex], row, col) : row[col.dataIndex]) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var opts = this.options;
            var vDom = hx(_templateObject21, opts.footer ? options.footer() : "");
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
                    if (typeof oldCol.sorter === "function") oldCol.sorter(this, col, event);
                }
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = this.$el.find("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key == rowKey;
            });
            var col = this.columns.find(function(val) {
                return val.key == colKey;
            });
            if (row && col) {
                if (this.options.onRowClick) {
                    if (typeof col.onRowClick == "function") col.onRowClick(this, row, event);
                }
                if (col.onCellClick) {
                    if (typeof col.onCellClick == "function") col.onCellClick(this, row, col, event);
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
                if (typeof col.filter == "function") col.filter(this, col, event);
            }
        }
    }, {
        key: "clickSetting",
        value: function clickSetting(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), theId = "setting-" + this.options.vid;
            if (typeof this.options.onSetting == "function") this.options.onSetting(this, event);
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
                    if (row) row._selected = !row._selected;
                }
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value._selected === true;
                });
                if (typeof options.onSelect == "function") options.onSelect(this, this.getSelectedStatus() ? Array.from(hasSelectedArr) : []);
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
                    if (typeof _this6.options.onSelect == "function") _this6.options.onSelect(_this6, isSelected ? Array.from(_this6.options.data) : []);
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
