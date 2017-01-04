/**
 * pagination.js v0.1.6
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

var _templateObject5$1 = _taggedTemplateLiteral$1([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);

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
            var vDom = hx(_templateObject5$1, options.direction ? "drop" + options.direction : "", options.data.map(function(item) {
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

var _templateObject = _taggedTemplateLiteral([ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ], [ '\n        <ul class="pagination ', " ", '">\n            <li class="prev ', '">\n                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>\n            </li>\n            ', "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </ul>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ], [ '\n            <div title="', "/", '" class="lego-pagination-simple-pager">\n                <input type="text" value="', '"><span class="lego-pagination-slash">／</span>\n            </div>\n            ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ], [ '\n            <li title="', '" class="page page-item ', '"><a href="javascript:void(0)">', "</a></li>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ], [ '\n            <li title="下 ', ' 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>\n            ' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ], [ '<li title="', '" class="page page-item"><a href="javascript:void(0)">', "</a></li>" ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ], [ '\n            <li class="next ', '">\n                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>\n            </li>\n            ' ]);

var _templateObject7 = _taggedTemplateLiteral([ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ], [ '\n            <li class="pageSize">\n                <span class="info" id="', '-select">\n                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">', ' / 页 </button>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </span>\n            </li>\n            ' ]);

var _templateObject8 = _taggedTemplateLiteral([ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ], [ '\n            <li><span class="info">\n                    跳转至\n                    <input type="text" class="form-control pageJump" value="', '">\n                </span>\n                ', "\n            </li>\n            " ]);

var _templateObject9 = _taggedTemplateLiteral([ '\n                <span class="info">\n                ', "\n                </span>\n                " ], [ '\n                <span class="info">\n                ', "\n                </span>\n                " ]);

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

var Pagination = function(_Lego$UI$Baseview) {
    _inherits(Pagination, _Lego$UI$Baseview);
    function Pagination() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Pagination);
        var options = {
            events: {
                "click .prev:not(.disabled)": "clickPrevPage",
                "click .page-item": "clickItemPage",
                "click .next:not(.disabled)": "clickNextPage",
                "click .morepage": "clickMorePage",
                'keydown .info>input[type="text"]': "_enterSearch"
            },
            current: 1,
            total: 0,
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
            isShowTotal: true
        };
        Object.assign(options, opts);
        if (!options.simple && options.showSizeChanger) {
            var theData = options.pageSizeOptions.map(function(val) {
                return {
                    key: val,
                    value: val + " / 页"
                };
            });
            options.components = [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                data: theData,
                onChange: function onChange(result) {
                    var theView = Lego.getView(opts.el);
                    var num = parseInt(result.key);
                    if (theView) {
                        theView.options.current = 1;
                        theView.options.pageSize = num;
                        theView.options.onPageSizeChange(num);
                    }
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
            var totalCount = typeof options.total === "function" ? options.total() : options.total;
            options.totalPages = Math.ceil(totalCount / options.pageSize);
            options.pageRang = options.pageRang > options.totalPages ? options.totalPages : options.pageRang;
            var baseTimes = options.pageRang ? Math.floor((options.current - 1) / options.pageRang) : 0, startPage = baseTimes * options.pageRang + 1, endPage = startPage + options.pageRang - 1, showEllipsis = options.totalPages - options.current >= options.pageRang ? true : false, pagesArr = [];
            endPage = endPage <= 0 ? 1 : endPage;
            endPage = endPage > options.totalPages ? options.totalPages : endPage;
            for (var i = startPage; i <= endPage; i++) {
                pagesArr.push(i);
            }
            var vDom = hx(_templateObject, options.simple ? "pagination-simple" : "", options.size == "small" ? "mini" : "", options.current <= 1 ? "disabled" : "", options.simple ? hx(_templateObject2, options.current, options.endPage, options.current) : "", !options.simple ? pagesArr.map(function(x) {
                return hx(_templateObject3, x, x == options.current ? "active" : "", x);
            }) : "", showEllipsis ? hx(_templateObject4, options.pageSize) : "", !options.simple && showEllipsis ? hx(_templateObject5, options.totalPages, options.totalPages) : "", !options.simple ? hx(_templateObject6, options.current >= options.totalPages ? "disabled" : "") : "", !options.simple && options.showSizeChanger ? hx(_templateObject7, options.vid, options.pageSize, options.vid) : "", !options.simple && options.showQuickJumper ? hx(_templateObject8, this.jumped ? options.current : "1", options.isShowTotal ? hx(_templateObject9, typeof options.showTotal === "function" ? options.showTotal(totalCount) : "总数 " + totalCount) : "") : "");
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

Lego.components("pagination", Pagination);

module.exports = Pagination;
