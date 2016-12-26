/**
 * table.js v0.1.2
 * (c) 2016 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-table lego-table-', " ", " lego-table-scroll-position-left ", '">\n            ', '\n            <div class="lego-table-content">\n                <div class="">\n                    <span>\n                    <div class="lego-table-body">\n                        <table class="">\n                            ', "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                    </span>\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-table lego-table-', " ", " lego-table-scroll-position-left ", '">\n            ', '\n            <div class="lego-table-content">\n                <div class="">\n                    <span>\n                    <div class="lego-table-body">\n                        <table class="">\n                            ', "\n                            ", "\n                            ", "\n                        </table>\n                    </div>\n                    </span>\n                    ", "\n                </div>\n            </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<div class="lego-table-title">', "</div>" ], [ '<div class="lego-table-title">', "</div>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '<div class="lego-table-footer">', "</div>" ], [ '<div class="lego-table-footer">', "</div>" ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" class="lego-checkbox-input" value="on">\n                    </span>\n                </label>\n            </span>\n            ' ], [ '\n            <span>\n                <label class="lego-', '-wrapper">\n                    <span class="lego-checkbox ', '">\n                        <span class="lego-checkbox-inner"></span>\n                        <input type="', '" class="lego-checkbox-input" value="on">\n                    </span>\n                </label>\n            </span>\n            ' ]);

var _templateObject5 = _taggedTemplateLiteral([ "\n        ", "\n        " ], [ "\n        ", "\n        " ]);

var _templateObject6 = _taggedTemplateLiteral([ '<th class="lego-table-selection-column">', "</th>" ], [ '<th class="lego-table-selection-column">', "</th>" ]);

var _templateObject7 = _taggedTemplateLiteral([ '<td class="lego-table-selection-column">', "</td>" ], [ '<td class="lego-table-selection-column">', "</td>" ]);

var _templateObject8 = _taggedTemplateLiteral([ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ], [ '\n        <thead class="lego-table-thead">\n            <tr>\n            ', "\n            ", "\n            </tr>\n        </thead>\n        " ]);

var _templateObject9 = _taggedTemplateLiteral([ "\n                <th><span>", "</span></th>\n            " ], [ "\n                <th><span>", "</span></th>\n            " ]);

var _templateObject10 = _taggedTemplateLiteral([ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ], [ '\n        <tbody class="lego-table-tbody">\n            ', "\n        </tbody>\n        " ]);

var _templateObject11 = _taggedTemplateLiteral([ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ], [ '<tr class="', '" id="', '">\n                ', "\n                ", "\n                </tr>" ]);

var _templateObject12 = _taggedTemplateLiteral([ "\n                    <td>", "</td>\n                " ], [ "\n                    <td>", "</td>\n                " ]);

var _templateObject13 = _taggedTemplateLiteral([ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ], [ '\n        <tfoot class="lego-table-tfoot"><foot></foot></tfoot>\n        ' ]);

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
                "click thead .lego-checkbox > input": "selectAll"
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
            showHeader: false,
            showBodyer: true,
            showFooter: false,
            footer: function footer() {},
            title: function title() {},
            scroll: {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, options));
        _this.selectedAll = false;
        return _this;
    }
    _createClass(Table, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject, options.size, options.bordered ? "lego-table-bordered" : "", options.className, options.showHeader ? hx(_templateObject2, options.title()) : "", this._renderHeader(), this._renderBodyer(), this._renderFooter(), options.showFooter ? hx(_templateObject3, options.footer()) : "");
            return vDom;
        }
    }, {
        key: "_renderSelection",
        value: function _renderSelection() {
            var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "td";
            var options = this.options, theType = options.type || "checkbox", that = this;
            function getHx() {
                return hx(_templateObject4, theType, row.selected || tagName === "th" && that.selectedAll ? "lego-checkbox-checked lego-checkbox-checked-1" : "", theType);
            }
            var vDom = hx(_templateObject5, tagName == "th" ? hx(_templateObject6, getHx()) : hx(_templateObject7, getHx()));
            return vDom;
        }
    }, {
        key: "_renderHeader",
        value: function _renderHeader() {
            var options = this.options;
            var vDom = hx(_templateObject8, options.rowSelection ? this._renderSelection({}, "th") : "", options.columns.map(function(col) {
                return hx(_templateObject9, col.title);
            }));
            return vDom;
        }
    }, {
        key: "_renderBodyer",
        value: function _renderBodyer() {
            var _this2 = this;
            var options = this.options;
            var vDom = hx(_templateObject10, options.data.map(function(row, i) {
                row.key = Lego.randomKey(16);
                return hx(_templateObject11, options.rowClassName, row.key, options.rowSelection ? _this2._renderSelection(row, "td") : "", options.columns.map(function(col) {
                    return hx(_templateObject12, typeof col.render === "function" ? col.render(row[col.dataIndex], row, row.key) : row[col.dataIndex]);
                }));
            }));
            return vDom;
        }
    }, {
        key: "_renderFooter",
        value: function _renderFooter() {
            var options = this.options;
            var vDom = hx(_templateObject13);
            return vDom;
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
                var hasSelected = this.options.data.find(function(value, index, arr) {
                    return value.selected;
                });
                this.selectedAll = !!hasSelected;
                this.refresh();
            }
        }
    }, {
        key: "selectAll",
        value: function selectAll(event) {
            var _this3 = this;
            event.stopPropagation();
            var target = $(event.currentTarget);
            if (this.options.rowSelection) {
                (function() {
                    var isChecked = target.is(":checked");
                    var isSelected = isChecked ? true : false;
                    _this3.selectedAll = isSelected;
                    _this3.options.data.map(function(row, index) {
                        row.selected = isSelected;
                    });
                    _this3.refresh();
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
