/**
 * tables.js v0.3.0
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

var _templateObject$2 = _taggedTemplateLiteral$2([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$2 = _taggedTemplateLiteral$2([ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">\n                    ', "\n                    </a>\n                    </li>" ], [ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">\n                    ', "\n                    </a>\n                    </li>" ]);

var _templateObject3$2 = _taggedTemplateLiteral$2([ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = _taggedTemplateLiteral$2([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5$2 = _taggedTemplateLiteral$2([ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ]);

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
        return _possibleConstructorReturn$2(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$2(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$2);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$2, val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$2, val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4$2, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5$2, options.direction ? "drop" + options.direction : "", options.open ? "block" : "none", options.data.map(function(item) {
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont lego-icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="lego-pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont lego-icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont lego-icon-more-1"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont lego-icon-more-1"></a></i></li>\n            ' ]);

var _templateObject5$1 = _taggedTemplateLiteral$1([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject6$1 = _taggedTemplateLiteral$1([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont lego-icon-arrow-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont lego-icon-arrow-right"></i></a>\n            </li>\n            ' ]);

var _templateObject7$1 = _taggedTemplateLiteral$1([ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="select-', '">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject8$1 = _taggedTemplateLiteral$1([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject9$1 = _taggedTemplateLiteral$1([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

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
                "click .page-item": "clickItemPage",
                "click .next:not(.disabled)": "clickNextPage",
                "click .morepage": "clickMorePage",
                'keydown .info>input[type="text"]': "_enterSearch"
            },
            current: 1,
            totalCount: 0,
            totalPages: 0,
            pageSize: 10,
            pageRang: 10,
            onChange: function onChange() {},
            showSizeChanger: false,
            pageSizeOptions: [ 10, 20, 30, 40, 50 ],
            onPageSizeChange: function onPageSizeChange() {},
            showQuickJumper: false,
            size: "",
            simple: null,
            isShowTotal: true,
            data: {},
            components: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    _createClass$1(Pagination, [ {
        key: "components",
        value: function components() {
            var options = this.options;
            if (!options.simple && options.showSizeChanger) {
                var theData = options.pageSizeOptions.map(function(val) {
                    return {
                        key: val,
                        value: val + " / 页"
                    };
                });
                this.addCom({
                    el: "#dropdown-" + options.vid,
                    container: "#select-" + options.vid,
                    direction: "top",
                    data: theData,
                    onChange: function onChange(self, result) {
                        var num = parseInt(result.key);
                        this.context.options.current = 1;
                        this.context.options.pageSize = num;
                        this.context.options.onPageSizeChange(self, num);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options, current = parseInt(options.current);
            options.pageSize = options.pageSize;
            var pageRang = parseInt(options.pageRang);
            var totalCount = options.data.totalCount || (typeof options.totalCount === "function" ? options.totalCount() : options.totalCount);
            options.totalPages = options.data.totalPages || Math.ceil(totalCount / options.pageSize);
            pageRang = pageRang >= options.totalPages ? options.totalPages : pageRang;
            var baseTimes = pageRang ? Math.floor((current - 1) / pageRang) : 0, startPage = baseTimes * pageRang + 1, endPage = startPage + pageRang - 1, showEllipsis = Math.ceil(current / pageRang) !== Math.ceil(options.totalPages / pageRang) ? true : false, pagesArr = [];
            endPage = endPage >= options.totalPages ? options.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            var vDom = hx(_templateObject$1, options.simple ? "pagination-simple" : "", options.size == "small" ? "mini" : "", current <= 1 ? "disabled" : "", options.simple ? hx(_templateObject2$1, current, options.endPage, current) : "", !options.simple ? pagesArr.map(function(x) {
                return hx(_templateObject3$1, x, x == current ? "active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject4$1, options.pageSize) : "", !options.simple && showEllipsis ? hx(_templateObject5$1, options.totalPages, options.totalPages) : "", !options.simple ? hx(_templateObject6$1, current >= options.totalPages ? "disabled" : "") : "", !options.simple && options.showSizeChanger ? hx(_templateObject7$1, options.vid, options.pageSize, options.vid) : "", !options.simple && options.showQuickJumper ? hx(_templateObject8$1, this.jumped ? current : "1", options.isShowTotal ? hx(_templateObject9$1, typeof options.showTotal === "function" ? options.showTotal(totalCount) : "总数 " + totalCount) : "") : "");
            this.jumped = false;
            return vDom;
        }
    }, {
        key: "clickPrevPage",
        value: function clickPrevPage(event) {
            event.stopPropagation();
            var options = this.options;
            debug.warn("点击了上一页");
            options.current--;
            options.onChange(this, options.current, options.pageSize);
        }
    }, {
        key: "clickItemPage",
        value: function clickItemPage(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), num = target.attr("title");
            var options = this.options;
            debug.warn("点击了" + num + "页");
            options.current = num;
            options.onChange(this, num, options.pageSize);
        }
    }, {
        key: "clickNextPage",
        value: function clickNextPage(event) {
            event.stopPropagation();
            var options = this.options;
            debug.warn("点击了下一页");
            options.current++;
            options.onChange(this, options.current, options.pageSize);
        }
    }, {
        key: "clickMorePage",
        value: function clickMorePage(event) {
            event.stopPropagation();
            var options = this.options;
            var current = parseInt(options.current), pageRang = parseInt(options.pageRang), currentMod = current % pageRang ? current % pageRang : pageRang;
            debug.warn("点击了更多页");
            options.current = current + (pageRang - currentMod + 1);
            if (options.current > options.totalPages) options.current = options.totalPages;
            options.onChange(this, options.current, options.pageSize);
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget);
            var options = this.options;
            var num = target.val();
            if (event.keyCode == 13) {
                if (num > options.totalPages) num = options.totalPages;
                if (!Number(num)) num = 1;
                this.jumped = true;
                options.current = num;
                options.onChange(this, num, options.pageSize);
            }
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

Lego.components("pagination", Pagination);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-table clearfix lego-table-', " ", "\n        ", " ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    <div class="', '">\n                        <table class="', '" style="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                </div>\n                ", "\n                ", "\n                // ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-table clearfix lego-table-', " ", "\n        ", " ", ' lego-table-scroll-position-left">\n            ', '\n            <div class="lego-table-content">\n                <div class="lego-table-scroll">\n                ', '\n                <div class="lego-table-body" style="bottom: ', '">\n                    <div class="', '">\n                        <table class="', '" style="', '">\n                            ', "\n                            ", "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                </div>\n                ", "\n                ", "\n                // ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                <div class="lego-table-header">\n                    <table class="" style="', '">\n                        ', "\n                        ", "\n                    </table>\n                </div>\n                " ], [ '\n                <div class="lego-table-header">\n                    <table class="" style="', '">\n                        ', "\n                        ", "\n                    </table>\n                </div>\n                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n                    <div class="lego-table-footer">\n                    <pagination id="pagination-', '"></pagination>\n                    </div>\n                ' ], [ '\n                    <div class="lego-table-footer">\n                    <pagination id="pagination-', '"></pagination>\n                    </div>\n                ' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<button type="button" class="btn btn-default noborder" title="设置"><i class="anticon anticon-ellipsis"></i></button>' ], [ '<button type="button" class="btn btn-default noborder" title="设置"><i class="anticon anticon-ellipsis"></i></button>' ]);

var _templateObject6 = _taggedTemplateLiteral([ '<layer id="colSetting-', '"></layer>' ], [ '<layer id="colSetting-', '"></layer>' ]);

var _templateObject7 = _taggedTemplateLiteral([ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ], [ "\n        <colgroup>\n            ", "\n            ", "\n        </colgroup>\n        " ]);

var _templateObject8 = _taggedTemplateLiteral([ '<col style="width: 30px;">' ], [ '<col style="width: 30px;">' ]);

var _templateObject9 = _taggedTemplateLiteral([ '<col style="', '">' ], [ '<col style="', '">' ]);

var _templateObject10 = _taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    ', "\n                </label>\n            </span>\n            " ]);

var _templateObject11 = _taggedTemplateLiteral([ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ], [ '<span class="lego-', " ", "\n                    ", '">\n                        <span class="lego-', '-inner"></span>\n                        <input type="', '" ', ' name="selectedrows" class="lego-', '-input" value="', '">\n                    </span>' ]);

var _templateObject12 = _taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject13 = _taggedTemplateLiteral([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject14 = _taggedTemplateLiteral([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject15 = _taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject16 = _taggedTemplateLiteral([ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ], [ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ]);

var _templateObject17 = _taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject18 = _taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject19 = _taggedTemplateLiteral([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject20 = _taggedTemplateLiteral([ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ], [ '\n        <tfoot class="lego-table-tfoot"><tr><td>', "</td></tr></tfoot>\n        " ]);

var _templateObject21 = _taggedTemplateLiteral([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject22 = _taggedTemplateLiteral([ '<i class="anticon anticon-filter"></i>' ], [ '<i class="anticon anticon-filter"></i>' ]);

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
                "click .lego-table-column-sorter": "clickSorter",
                "click .anticon-filter": "clickFilter",
                "click .lego-table-tbody td": "clickItem",
                "click .lego-table-scroll > button": "clickSetting"
            },
            scrollbar: {},
            className: "",
            tableWidth: 0,
            isNowrap: true,
            rowSelection: null,
            pagination: null,
            size: "default",
            columns: [],
            rowKey: "",
            rowClassName: "",
            expandedRowRender: function expandedRowRender() {},
            defaultExpandedRowKeys: [],
            expandedRowKeys: [],
            defaultExpandAllRows: false,
            onExpandedRowsChange: function onExpandedRowsChange() {},
            onExpand: function onExpand() {},
            onChange: function onChange() {},
            onSelect: function onSelect() {},
            onSetting: function onSetting() {},
            loading: false,
            locale: {
                filterConfirm: "确定",
                filterReset: "重置",
                emptyText: "暂无数据"
            },
            indentSize: 0,
            onRowClick: function onRowClick() {},
            bordered: false,
            showHeader: false,
            showBodyer: true,
            showFooter: false,
            data: [],
            components: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).call(this, options));
        var that = _this;
        var header = _this.$(".lego-table-header");
        _this.$(".lego-table-body > .scrollbar").scroll(function() {
            header.scrollLeft($(this).scrollLeft());
        });
        _this.$(".lego-table-tfoot>tr>td").attr("colspan", _this.columns.length);
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
            var options = this.options;
            this.columnsObj = this.columnsObj || {};
            if (options.columns) {
                var tempColumns = typeof options.columns == "function" ? options.columns(this) || [] : options.columns || [];
                this.columns = Array.from(tempColumns);
            }
            this.tableRealWidth = this.options.rowSelection ? 30 : 0;
            this.columns = this.columns.filter(function(col) {
                return !col.isHide;
            });
            this.columns.forEach(function(col, index) {
                col.key = col.key || index;
                _this2.columnsObj[col.key] = _this2.columnsObj[col.key] || col;
                Object.assign(col, _this2.columnsObj[col.key]);
                _this2.tableRealWidth += parseInt(col.width || 200);
            });
            return this.columns;
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
            var options = this.options;
            var vDom = hx(_templateObject, options.size, options.bordered ? "lego-table-bordered" : "", options.showHeader ? "lego-table-fixed-header" : "", options.isNowrap ? "lego-nr" : "", options.title ? hx(_templateObject2, typeof options.title == "function" ? options.title() : options.title) : "", options.showHeader ? hx(_templateObject3, options.tableWidth ? "width:" + options.tableWidth + "px" : "", this._renderColgroup(), this._renderHeader()) : "", options.pagination ? "48px" : "0", options.showHeader ? "scrollbar" : "", options.className, options.tableWidth ? "width:" + options.tableWidth + "px" : "", this._renderColgroup(), !options.showHeader ? this._renderHeader() : "", this._renderBodyer(), this._renderFooter(), options.pagination && options.data ? hx(_templateObject4, options.vid) : "", options.colSetting ? hx(_templateObject5) : "", options.colSetting ? hx(_templateObject6, options.vid) : "");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.isLoaded = this.isLoaded || false;
            var el = "#pagination-" + this.options.vid;
            if (!this.isLoaded && this.options.data.length && this.options.pagination) {
                this.options.pagination = typeof this.options.pagination == "function" ? this.options.pagination(this) : this.options.pagination;
                var that = this;
                Lego.create(Pagination, Object.assign(this.options.pagination, {
                    context: this,
                    el: el
                }));
                this.isLoaded = true;
            } else {
                var pgView = Lego.getView(el);
                if (pgView) {
                    Object.assign(pgView.options, this.options.pagination);
                }
            }
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
            var vDom = hx(_templateObject7, this.options.rowSelection ? hx(_templateObject8) : "", this.columns.map(function(col, index) {
                var w = index !== _this3.columns.length - 1 || _this3.options.tableWidth ? "width:" + (typeof col.width == "number" ? col.width + "px" : col.width.toString()) : "";
                return hx(_templateObject9, w);
            }));
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var isHarf = arguments[2];
            var options = this.options, theType = options.rowSelection.type || "checkbox", isCheckbox = theType == "checkbox", that = this;
            var isChecked = row.selected || tagName === "th" && this.getSelectedStatus() === 1;
            function getHx() {
                return hx(_templateObject10, theType, tagName !== "th" || isCheckbox ? hx(_templateObject11, theType, row.disabled ? "lego-" + theType + "-disabled" : "", isChecked ? "lego-" + theType + "-checked lego-" + theType + "-checked-1" : isHarf ? "lego-" + theType + "-indeterminate" : "", theType, theType, row.disabled ? "disabled" : "", theType, isChecked ? "on" : "") : "");
            }
            var vDom = hx(_templateObject12, tagName == "th" ? hx(_templateObject13, getHx()) : hx(_templateObject14, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this4 = this;
            var options = this.options;
            var vDom = hx(_templateObject15, options.rowSelection ? this._renderSelection({}, "th", this.getSelectedStatus() === 2 ? true : false) : "", this.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject16, col.sortOrder ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this4._renderSorter(col) : "", _this4._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this5 = this;
            var options = this.options;
            if (!options.data) return;
            var vDom = hx(_templateObject17, options.data.map(function(row, i) {
                row.key = row.id || _this5._getRowKey("row_");
                return hx(_templateObject18, options.rowClassName, row.key, options.rowSelection ? _this5._renderSelection(row, "td") : "", _this5.columns.map(function(col) {
                    return !col.isHide ? hx(_templateObject19, typeof col.format === "function" ? col.format(row[col.dataIndex], row, col) : row[col.dataIndex]) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var options = this.options;
            var vDom = hx(_templateObject20, options.footer ? options.footer() : "");
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = this.options;
            var vDom = hx(_templateObject21, col.sortOrder === "asc" ? "on" : "off", col.sortOrder === "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject22) : "";
        }
    }, {
        key: "clickSorter",
        value: function clickSorter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.closest("th").attr("id"), col = this.columnsObj[key];
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
                if (typeof col.sorter === "function") col.sorter(this, col, event);
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
                        item.selected = item.key == id ? true : false;
                    });
                } else {
                    var row = options.data.find(function(value, index, arr) {
                        return value.key == id;
                    });
                    if (row) row.selected = !row.selected;
                }
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value.selected === true;
                });
                if (typeof options.onSelect == "function") options.onSelect(this, this.getSelectedStatus() ? Array.from(hasSelectedArr) : []);
                this.refresh();
            }
        }
    }, {
        key: "getSelectedStatus",
        value: function getSelectedStatus() {
            var hasSelectedArr = this.options.data.filter(function(value) {
                return value.selected === true;
            });
            this.selectedAll = hasSelectedArr.length ? hasSelectedArr.length == this.options.data.length ? 1 : hasSelectedArr.length ? 2 : 0 : 0;
            return this.selectedAll;
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
                        row.selected = !!isSelected;
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
                    return row.selected == true;
                });
            }
            return [];
        }
    } ]);
    return Tables;
}(Lego.UI.Baseview);

Lego.components("tables", Tables);

module.exports = Tables;
