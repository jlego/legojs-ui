/**
 * table.js v0.1.2
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <ul class="lego-pagination lego-table-pagination">\n            <li title="Previous Page" class="lego-pagination-disabled lego-pagination-prev">\n                <a></a>\n            </li>\n            <li title="1" class="lego-pagination-item lego-pagination-item-1 lego-pagination-item-active"><a>1</a></li>\n            <li title="2" class="lego-pagination-item lego-pagination-item-2"><a>2</a></li>\n            <li title="3" class="lego-pagination-item lego-pagination-item-3"><a>3</a></li>\n            <li title="4" class="lego-pagination-item lego-pagination-item-4"><a>4</a></li>\n            <li title="5" class="lego-pagination-item lego-pagination-item-5"><a>5</a></li>\n            <li title="Next Page" class=" lego-pagination-next">\n                <a></a>\n            </li>\n            <div class="lego-pagination-options">\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled">\n                    <div class="lego-select-selection lego-select-selection--single" tabindex="0">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="10 / page" style="display: block; opacity: 1;">10 / 页</div>\n                        </div><span class="lego-select-arrow" style="user-select: none;"><b></b></span></div>\n                </div>\n            </div>\n        </ul>\n        ' ], [ '\n        <ul class="lego-pagination lego-table-pagination">\n            <li title="Previous Page" class="lego-pagination-disabled lego-pagination-prev">\n                <a></a>\n            </li>\n            <li title="1" class="lego-pagination-item lego-pagination-item-1 lego-pagination-item-active"><a>1</a></li>\n            <li title="2" class="lego-pagination-item lego-pagination-item-2"><a>2</a></li>\n            <li title="3" class="lego-pagination-item lego-pagination-item-3"><a>3</a></li>\n            <li title="4" class="lego-pagination-item lego-pagination-item-4"><a>4</a></li>\n            <li title="5" class="lego-pagination-item lego-pagination-item-5"><a>5</a></li>\n            <li title="Next Page" class=" lego-pagination-next">\n                <a></a>\n            </li>\n            <div class="lego-pagination-options">\n                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled">\n                    <div class="lego-select-selection lego-select-selection--single" tabindex="0">\n                        <div class="lego-select-selection__rendered">\n                            <div class="lego-select-selection-selected-value" title="10 / page" style="display: block; opacity: 1;">10 / 页</div>\n                        </div><span class="lego-select-arrow" style="user-select: none;"><b></b></span></div>\n                </div>\n            </div>\n        </ul>\n        ' ]);

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
            current: 0,
            defaultCurrent: 1,
            total: 0,
            defaultPageSize: 10,
            pageSize: 0,
            onChange: function onChange(page) {},
            showSizeChanger: false,
            pageSizeOptions: [],
            onShowSizeChange: function onShowSizeChange(current, size) {},
            showQuickJumper: false,
            size: "",
            simple: null,
            showTotal: function showTotal(total, range) {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, options));
    }
    _createClass$1(Pagination, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$1);
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            if (typeof this.options.onClick === "function") this.options.onClick(event);
        }
    } ]);
    return Pagination;
}(Lego.UI.Baseview);

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="clearfix">\n            <div class="lego-spin-nested-loading">\n                <div class="lego-spin-container">\n                    <div class="lego-table lego-table-', " ", ' lego-table-scroll-position-left">\n                        ', '\n                        <div class="lego-table-content">\n                            <div class="', '">\n                                <span>\n                                ', '\n                                <div class="lego-table-body">\n                                    <table class="', '">\n                                        ', "\n                                        ", "\n                                        ", "\n                                    </table>\n                                </div>\n                                </span>\n                                ", "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ", "\n        </div>\n        " ], [ '\n        <div class="clearfix">\n            <div class="lego-spin-nested-loading">\n                <div class="lego-spin-container">\n                    <div class="lego-table lego-table-', " ", ' lego-table-scroll-position-left">\n                        ', '\n                        <div class="lego-table-content">\n                            <div class="', '">\n                                <span>\n                                ', '\n                                <div class="lego-table-body">\n                                    <table class="', '">\n                                        ', "\n                                        ", "\n                                        ", "\n                                    </table>\n                                </div>\n                                </span>\n                                ", "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                                <div class="lego-table-header" style="margin-bottom: -17px; padding-bottom: 0px;">\n                                    <table class="">\n                                        ', "\n                                    </table>\n                                </div>\n                                " ], [ '\n                                <div class="lego-table-header" style="margin-bottom: -17px; padding-bottom: 0px;">\n                                    <table class="">\n                                        ', "\n                                    </table>\n                                </div>\n                                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<div class="lego-table-footer">', "</div>" ], [ '<div class="lego-table-footer">', "</div>" ]);

var _templateObject5 = _taggedTemplateLiteral([ '<pagination id="paginationId"></pagination>' ], [ '<pagination id="paginationId"></pagination>' ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', " ", '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" ', ' class="lego-checkbox-input" value="', '">\n                    </span>\n                </label>\n            </span>\n            ' ]);

var _templateObject7 = _taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject8 = _taggedTemplateLiteral([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject9 = _taggedTemplateLiteral([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject10 = _taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject11 = _taggedTemplateLiteral([ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ], [ '<th class="', '" id="', '"><span>', "\n                ", "", "</span></th>" ]);

var _templateObject12 = _taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject13 = _taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject14 = _taggedTemplateLiteral([ "<td>", "</td>" ], [ "<td>", "</td>" ]);

var _templateObject15 = _taggedTemplateLiteral([ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ], [ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ]);

var _templateObject16 = _taggedTemplateLiteral([ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ], [ '\n        <div class="lego-table-column-sorter">\n            <span class="lego-table-column-sorter-up ', '" title="↑">\n                <i class="anticon anticon-caret-up"></i>\n            </span>\n            <span class="lego-table-column-sorter-down ', '" title="↓">\n                <i class="anticon anticon-caret-down"></i>\n            </span>\n        </div>\n        ' ]);

var _templateObject17 = _taggedTemplateLiteral([ '<i title="Filter Menu" class="anticon anticon-filter lego-dropdown-trigger"></i>' ], [ '<i title="Filter Menu" class="anticon anticon-filter lego-dropdown-trigger"></i>' ]);

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

var Table = function(_Lego$UI$Baseview) {
    _inherits(Table, _Lego$UI$Baseview);
    function Table() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Table);
        var options = {
            events: {
                "click tbody .lego-checkbox": "selectOne",
                "click thead .lego-checkbox > input": "selectAll",
                "click .lego-table-column-sorter": "clickSorter",
                "click .anticon-filter": "clickFilter",
                "click .lego-table-tbody td": "clickTd"
            },
            className: "",
            rowSelection: null,
            pagination: null,
            size: "default",
            dataSource: {},
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
            loading: false,
            locale: {
                filterConfirm: "确定",
                filterReset: "重置",
                emptyText: "暂无数据"
            },
            indentSize: 0,
            onRowClick: function onRowClick() {},
            bordered: false,
            showHeader: true,
            showBodyer: true,
            showFooter: false,
            footer: function footer() {},
            scroll: {}
        };
        Object.assign(options, opts);
        options.columns.map(function(col) {
            col = Object.assign({
                title: "",
                key: Lego.randomKey(32),
                isHide: false,
                dataIndex: "",
                colSpan: 0,
                width: "",
                className: "",
                fixed: false,
                sortOrder: ""
            }, col);
        });
        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, options));
        _this.selectedAll = 0;
        if (options.pagination) {
            var theOpt = _extends({}, options.pagination, {
                el: "#paginationId"
            });
            Lego.create(Pagination, theOpt);
        }
        return _this;
    }
    _createClass(Table, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.size, options.bordered ? "lego-table-bordered" : "", options.title ? hx(_templateObject2, options.title()) : "", options.showHeader ? "lego-table-scroll" : "", options.showHeader ? hx(_templateObject3, this._renderHeader()) : "", options.className, !options.showHeader ? this._renderHeader() : "", this._renderBodyer(), this._renderFooter(), options.showFooter ? hx(_templateObject4, options.footer()) : "", options.pagination ? hx(_templateObject5) : "");
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var options = this.options, theType = options.type || "checkbox", that = this;
            var isChecked = row.selected || tagName === "th" && this.selectedAll === 1, isHarf = tagName === "th" && that.selectedAll === 2 ? true : false;
            function getHx() {
                return hx(_templateObject6, theType, row.disabled ? "lego-checkbox-disabled" : "", isChecked ? "lego-checkbox-checked lego-checkbox-checked-1" : isHarf ? "lego-checkbox-indeterminate" : "", theType, row.disabled ? "disabled" : "", isChecked ? "on" : "");
            }
            var vDom = hx(_templateObject7, tagName == "th" ? hx(_templateObject8, getHx()) : hx(_templateObject9, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var _this2 = this;
            var options = this.options;
            var vDom = hx(_templateObject10, options.rowSelection ? this._renderSelection({}, "th") : "", options.columns.map(function(col) {
                return !col.isHide ? hx(_templateObject11, col.sortOrder ? "lego-table-column-sort" : "", col.key, col.title, col.sorter ? _this2._renderSorter(col) : "", _this2._renderFilter(col)) : "";
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this3 = this;
            var options = this.options;
            var vDom = hx(_templateObject12, options.data.map(function(row, i) {
                row.key = Lego.randomKey(32);
                return hx(_templateObject13, options.rowClassName, row.key, options.rowSelection ? _this3._renderSelection(row, "td") : "", options.columns.map(function(col) {
                    return !col.isHide ? hx(_templateObject14, typeof col.render === "function" ? col.render(row[col.dataIndex], row, col) : row[col.dataIndex]) : "";
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var options = this.options;
            var vDom = hx(_templateObject15);
            return vDom;
        }
    }, {
        key: "_renderSorter",
        value: function _renderSorter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = this.options;
            var vDom = hx(_templateObject16, col.sortOrder === "asc" ? "on" : "off", col.sortOrder === "desc" ? "on" : "off");
            return vDom;
        }
    }, {
        key: "_renderFilter",
        value: function _renderFilter() {
            var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return col.filter ? hx(_templateObject17) : "";
        }
    }, {
        key: "clickSorter",
        value: function clickSorter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.closest("th").attr("id"), col = this.options.columns.find(function(val) {
                return val.key === key;
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
                if (typeof col.sorter === "function") col.sorter(col);
            }
        }
    }, {
        key: "clickTd",
        value: function clickTd(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), rowKey = target.parent().attr("id"), colKey = target.closest("tbody").prev("thead").find("th").eq(event.currentTarget.cellIndex).attr("id");
            var row = this.options.data.find(function(val) {
                return val.key === rowKey;
            });
            var col = this.options.columns.find(function(val) {
                return val.key === colKey;
            });
            if (row && col) {
                if (typeof col.onCellClick === "function") col.onCellClick(row, col);
            }
        }
    }, {
        key: "clickFilter",
        value: function clickFilter(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), colKey = target.closest("th").attr("id"), col = this.options.columns.find(function(val) {
                return val.key == colKey;
            });
            if (col) {
                if (typeof col.filter === "function") col.filter(col);
            }
        }
    }, {
        key: "selectOne",
        value: function selectOne(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), trEl = target.closest("tr"), id = trEl.attr("id"), that = this;
            if (this.options.rowSelection) {
                var row = this.options.data.find(function(value, index, arr) {
                    return value.key === id;
                });
                if (row) row.selected = !row.selected;
                var hasSelectedArr = this.options.data.filter(function(value) {
                    return value.selected === true;
                });
                this.selectedAll = hasSelectedArr.length == this.options.data.length ? 1 : hasSelectedArr.length ? 2 : 0;
                this.refresh();
            }
        }
    }, {
        key: "selectAll",
        value: function selectAll(event) {
            var _this4 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? 1 : 0;
                    _this4.selectedAll = isSelected;
                    _this4.options.data.map(function(row, index) {
                        row.selected = !!isSelected;
                    });
                    _this4.refresh();
                })();
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            var rows = [];
            if (Array.isArray(this.options.data)) {
                this.options.data.map(function(row) {
                    if (row.selected) rows.push(row);
                });
            }
            return rows;
        }
    } ]);
    return Table;
}(Lego.UI.Baseview);

module.exports = Table;
