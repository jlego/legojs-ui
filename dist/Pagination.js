/**
 * pagination.js v0.1.2
 * (c) 2016 Ronghui Yu
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n            <li class="lego-dropdown-menu-submenu-vertical lego-dropdown-menu-submenu">\n                <div class="lego-dropdown-menu-submenu-title" id="', '">', "</div>\n                ", "\n            </li>\n            " ], [ '\n            <li class="lego-dropdown-menu-submenu-vertical lego-dropdown-menu-submenu">\n                <div class="lego-dropdown-menu-submenu-title" id="', '">', "</div>\n                ", "\n            </li>\n            " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n                <ul class="lego-dropdown-menu lego-dropdown-menu-vertical lego-dropdown-menu-sub ', '">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="lego-dropdown-menu lego-dropdown-menu-vertical lego-dropdown-menu-sub ', '">\n                    ', "\n                </ul>\n                " ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '<li class="lego-dropdown-menu-item">', "</li>" ], [ '<li class="lego-dropdown-menu-item">', "</li>" ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n        <div class="lego-dropdown lego-dropdown-placement-', " ", '">\n            <ul class="lego-dropdown-menu lego-dropdown-menu-vertical  lego-dropdown-menu-light lego-dropdown-menu-root">\n            ', "\n            </ul>\n        </div>\n        " ], [ '\n        <div class="lego-dropdown lego-dropdown-placement-', " ", '">\n            <ul class="lego-dropdown-menu lego-dropdown-menu-vertical  lego-dropdown-menu-light lego-dropdown-menu-root">\n            ', "\n            </ul>\n        </div>\n        " ]);

var _templateObject5$1 = _taggedTemplateLiteral$1([ '<li class="lego-dropdown-menu-item" id="', '">', "</li>" ], [ '<li class="lego-dropdown-menu-item" id="', '">', "</li>" ]);

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
                "click .lego-dropdown-menu-item": "clickItem",
                "mouseenter .lego-dropdown-menu-item": "inMenu",
                "mouseleave .lego-dropdown-menu-item": "outMenu",
                "mouseenter .lego-dropdown-menu-submenu": "showSubMenu",
                "mouseleave .lego-dropdown-menu-submenu": "hideSubMenu"
            },
            disabled: false,
            eventName: "hover",
            trigger: "",
            visible: false,
            direction: "",
            onChange: function onChange() {},
            onVisibleChange: function onVisibleChange() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
        _this.result = "";
        var that = _this;
        options.trigger = options.trigger instanceof $ ? options.trigger : $(options.trigger);
        options.trigger[options.eventName](function() {
            var directionResp = Lego.UI.Baseview.getDirection(options.trigger, that.$el);
            that.options.direction = directionResp._y + directionResp._x || "bottomLeft";
            that.show();
            options.trigger.mouseleave(function() {
                that.close();
            });
            that.$(".lego-dropdown-menu").mouseleave(function() {
                that.close();
            });
        });
        return _this;
    }
    _createClass$1(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function loopNav(data) {
                return hx(_templateObject$1, data.key, data.title, data.children ? hx(_templateObject2$1, data.visible ? "" : "lego-dropdown-menu-hidden", data.children.map(function(item) {
                    if (!item.children) {
                        return hx(_templateObject3$1, item.title);
                    } else {
                        return loopNav(item);
                    }
                })) : "");
            }
            var vDom = hx(_templateObject4$1, options.direction ? options.direction : "", options.visible ? "" : "lego-dropdown-hidden", options.data.map(function(item) {
                if (!item.children) {
                    return hx(_templateObject5$1, item.key, item.title);
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
            this.close();
        }
    }, {
        key: "inMenu",
        value: function inMenu(event) {
            var target = $(event.currentTarget);
            target.addClass("lego-dropdown-menu-item-active");
        }
    }, {
        key: "outMenu",
        value: function outMenu(event) {
            var target = $(event.currentTarget);
            target.removeClass("lego-dropdown-menu-item-active");
        }
    }, {
        key: "showSubMenu",
        value: function showSubMenu(event) {
            var target = $(event.currentTarget);
            target.addClass("lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active");
        }
    }, {
        key: "hideSubMenu",
        value: function hideSubMenu(event) {
            var target = $(event.currentTarget);
            target.removeClass("lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active");
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <ul class="lego-pagination lego-table-pagination ', " ", '">\n            <li title="上一页" class="lego-pagination-prev ', '">\n                <a></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="lego-pagination lego-table-pagination ', " ", '">\n            <li title="上一页" class="lego-pagination-prev ', '">\n                <a></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <li title="', '" class="lego-pagination-item ', '"><a>', "</a></li>\n            " ], [ '\n            <li title="', '" class="lego-pagination-item ', '"><a>', "</a></li>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <li title="下 ', ' 页" class="lego-pagination-jump-next">\n                <a></a>\n            </li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="lego-pagination-jump-next">\n                <a></a>\n            </li>\n            ' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<li title="', '" class="lego-pagination-item"><a>', "</a></li>" ], [ '<li title="', '" class="lego-pagination-item"><a>', "</a></li>" ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n            <li title="下一页" class=" lego-pagination-next ', '">\n                <a></a>\n            </li>\n            ' ], [ '\n            <li title="下一页" class=" lego-pagination-next ', '">\n                <a></a>\n            </li>\n            ' ]);

var _templateObject7 = _taggedTemplateLiteral([ '\n            <div class="lego-pagination-options">\n                ', "\n                ", "\n                ", "\n            </div>\n            " ], [ '\n            <div class="lego-pagination-options">\n                ', "\n                ", "\n                ", "\n            </div>\n            " ]);

var _templateObject8 = _taggedTemplateLiteral([ '\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled" id="', '-select">\n                    <div class="lego-select-selection lego-select-selection-single">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="', ' / 页" style="display: block; opacity: 1;">\n                            ', ' / 页</div>\n                        </div>\n                        <span class="lego-select-arrow" style="user-select: none;"><b></b></span>\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n                ' ], [ '\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled" id="', '-select">\n                    <div class="lego-select-selection lego-select-selection-single">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="', ' / 页" style="display: block; opacity: 1;">\n                            ', ' / 页</div>\n                        </div>\n                        <span class="lego-select-arrow" style="user-select: none;"><b></b></span>\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n                ' ]);

var _templateObject9 = _taggedTemplateLiteral([ '\n                <div class="lego-pagination-options-quick-jumper">\n                    跳转至\n                    <input type="text" value="', '">\n                </div>\n                ' ], [ '\n                <div class="lego-pagination-options-quick-jumper">\n                    跳转至\n                    <input type="text" value="', '">\n                </div>\n                ' ]);

var _templateObject10 = _taggedTemplateLiteral([ '<span class="lego-pagination-total-text">\n                ', "\n                </span>" ], [ '<span class="lego-pagination-total-text">\n                ', "\n                </span>" ]);

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

Lego.components("dropdown", Dropdown);

var Pagination = function(_Lego$UI$Baseview) {
    _inherits(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Pagination);
        var options = {
            events: {
                "click .lego-pagination-prev:not(.lego-pagination-disabled)": "clickPrevPage",
                "click .lego-pagination-item": "clickItemPage",
                "click .lego-pagination-next:not(.lego-pagination-disabled)": "clickNextPage",
                "click .lego-pagination-jump-next": "clickMorePage",
                "keydown .lego-pagination-options-quick-jumper>input": "_enterSearch"
            },
            current: 1,
            total: 0,
            totalPages: 0,
            pageSize: 10,
            pageRang: 10,
            onChange: function onChange() {},
            showSizeChanger: false,
            pageSizeOptions: [ 10, 20, 30, 40, 50 ],
            onShowSizeChange: function onShowSizeChange() {},
            showQuickJumper: false,
            size: "",
            simple: null,
            showTotal: function showTotal() {}
        };
        Object.assign(options, opts);
        if (!options.simple && options.showSizeChanger) {
            var theData = options.pageSizeOptions.map(function(val) {
                return {
                    key: val,
                    title: val + " / 页"
                };
            });
            options.components = [ {
                el: "#" + options.vid + "-dropdown",
                trigger: "#" + options.vid + "-select",
                data: theData,
                onChange: function onChange(result) {
                    Lego.getView(options.vid).options.current = 1;
                    Lego.getView(options.vid).options.pageSize = parseInt(result);
                }
            } ];
        }
        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
        _this.jumped = false;
        return _this;
    }
    _createClass(Pagination, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            options.totalPages = Math.ceil(options.total / options.pageSize);
            options.pageRang = options.pageRang > options.totalPages ? options.totalPages : options.pageRang;
            var baseTimes = options.pageRang ? Math.floor((options.current - 1) / options.pageRang) : 0, startPage = baseTimes * options.pageRang + 1, endPage = startPage + options.pageRang - 1, showEllipsis = options.totalPages - options.current >= options.pageRang ? true : false, pagesArr = [];
            endPage = endPage <= 0 ? 1 : endPage;
            endPage = endPage > options.totalPages ? options.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            var vDom = hx(_templateObject, options.simple ? "lego-table-simple" : "", options.size == "small" ? "mini" : "", options.current <= 1 ? "lego-pagination-disabled" : "", options.simple ? hx(_templateObject2, options.current, options.endPage, options.current) : "", !options.simple ? pagesArr.map(function(x) {
                return hx(_templateObject3, x, x == options.current ? "lego-pagination-item-active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject4, options.pageSize) : "", !options.simple && showEllipsis ? hx(_templateObject5, options.totalPages, options.totalPages) : "", !options.simple ? hx(_templateObject6, options.current >= options.totalPages ? "lego-pagination-disabled" : "") : "", !options.simple ? hx(_templateObject7, options.showSizeChanger ? hx(_templateObject8, options.vid, options.pageSize, options.pageSize, options.vid) : "", options.showQuickJumper ? hx(_templateObject9, this.jumped ? options.current : "1") : "", options.showTotal ? hx(_templateObject10, typeof options.showTotal === "function" ? options.showTotal(options.total) : "总数" + options.total) : "") : "");
            this.jumped = false;
            return vDom;
        }
    }, {
        key: "clickPrevPage",
        value: function clickPrevPage(event) {
            event.stopPropagation();
            var options = this.options;
            console.warn("点击了上一页");
            options.current--;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "clickItemPage",
        value: function clickItemPage(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), num = target.attr("title");
            var options = this.options;
            console.warn("点击了" + num + "页");
            options.current = num;
            options.onChange(num, options.pageSize);
        }
    }, {
        key: "clickNextPage",
        value: function clickNextPage(event) {
            event.stopPropagation();
            var options = this.options;
            console.warn("点击了下一页");
            options.current++;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "clickMorePage",
        value: function clickMorePage(event) {
            event.stopPropagation();
            var options = this.options;
            var current = parseInt(options.current), pageRang = parseInt(options.pageRang), currentMod = current % pageRang ? current % pageRang : pageRang;
            console.warn("点击了更多页");
            options.current = current + (pageRang - currentMod + 1);
            if (options.current > options.totalPages) options.current = options.totalPages;
            options.onChange(options.current, options.pageSize);
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            var target = $(event.currentTarget);
            var options = this.options;
            var num = target.val();
            if (event.keyCode == 13) {
                if (num > options.totalPages) num = options.totalPages;
                this.jumped = true;
                options.current = num;
                options.onChange(num, options.pageSize);
            }
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

module.exports = Pagination;
