/**
 * treeselect.js v0.5.47
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var ztree = require("ztree");

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

var _templateObject2$2 = _taggedTemplateLiteral$2([ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$2 = _taggedTemplateLiteral$2([ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = _taggedTemplateLiteral$2([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$2([ '\n        <ul class="dropdown-menu ', " ", '" style="display:', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu ', " ", '" style="display:', '">\n            ', "\n        </ul>\n        " ]);

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
            scrollbar: null,
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
            var vDom = hx(_templateObject5, options.scrollbar ? "scrollbar" : "", options.direction ? "drop" + options.direction : "", options.open ? "block" : "none", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, _eventName = "click.dropdown-" + this.options.vid;
            this.container = this.options.container instanceof $ ? this.options.container : this.options.context.$ ? this.options.context.$(this.options.container) : $(this.options.container);
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

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var _templateObject$1 = _taggedTemplateLiteral$1([ "\n                <ul>", "\n                </ul>\n                " ], [ "\n                <ul>", "\n                </ul>\n                " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple ', '">\n                <div id="select-', '">\n                    <input type="text" class="form-control ', " select-input ", '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="dropdown-', '"></dropdown>\n                </div>\n            </div>\n            ' ]);

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

var Selects = function(_Lego$UI$Baseview) {
    _inherits$1(Selects, _Lego$UI$Baseview);
    function Selects() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Selects);
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
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: 0,
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            inputAble: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownStyle: null,
            dropdownClassName: "",
            splitString: "",
            components: []
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn$1(this, (Selects.__proto__ || Object.getPrototypeOf(Selects)).call(this, options));
        _this.oldValue = "";
        var that = _this;
        _this.$(".select-input").change(function(event) {
            if (typeof options.onChange == "function") options.onChange(that, $(this).val());
        });
        _this.$(".select-tags-div").on("click", ".select-tag-close", _this.clickItemClose.bind(_this));
        return _this;
    }
    _createClass$1(Selects, [ {
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
                    style: Object.assign({
                        width: opts.dropdownWidth,
                        maxHeight: opts.dropdownHeight || "auto",
                        overflow: "auto"
                    }, opts.dropdownStyle || {}),
                    className: opts.dropdownClassName,
                    clickAndClose: opts.multiple ? false : true,
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
                    return hx(_templateObject$1, data.map(function(item) {
                        return hx(_templateObject2$1, item.key, item.value, item.value);
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
                theValueArr = realValueArr = [ _typeof$1(opts.value) == "object" ? opts.value.value : opts.value ];
            }
            if (!opts.multiple) {
                vDom = hx(_templateObject3$1, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.vid);
            } else {
                vDom = hx(_templateObject4$1, opts.size, opts.vid, opts.size ? "form-control-" + opts.size : "", theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var _this2 = this;
            if (this.options.value && this.options.multiple) {
                this.options.value.forEach(function(item) {
                    if (item) {
                        var model = _this2.options.data.find(function(model) {
                            return model.key === item.key;
                        });
                        if (model) model.selected = true;
                    }
                });
            }
            if (!this.options.inputAble) this.$(".select-input").attr("readonly", "readonly");
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

var _templateObject$3 = _taggedTemplateLiteral$3([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

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

var Tree = function(_Lego$UI$Baseview) {
    _inherits$3(Tree, _Lego$UI$Baseview);
    function Tree() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$3(this, Tree);
        var options = {
            disSelect: "",
            onlySelect: "",
            setting: {},
            value: [],
            data: [],
            onChecked: function onChecked() {},
            onClick: function onClick() {}
        };
        $.extend(true, options, opts);
        return _possibleConstructorReturn$3(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    _createClass$3(Tree, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            function selectOrNo(treeNode) {
                if (opts.disSelect) {
                    if (Object.keys(treeNode).includes(opts.disSelect)) return false;
                }
                if (opts.onlySelect) {
                    if (!Object.keys(treeNode).includes(opts.onlySelect)) return false;
                }
                return true;
            }
            function selectResult(treeId, treeNode) {
                var treeObj = $.fn.zTree.getZTreeObj(treeId), nodes = treeObj.getCheckedNodes(true), result = nodes.filter(function(node) {
                    return selectOrNo(node);
                });
                var newValue = [];
                result.forEach(function(val, index) {
                    newValue.push(Object.assign({
                        key: val.id,
                        value: val.name
                    }, val));
                });
                if (typeof opts.onChecked == "function") opts.onChecked(that, newValue, treeNode);
            }
            if (opts.setting.check) {
                opts.setting.check = $.extend(true, {
                    enable: true,
                    chkboxType: {
                        Y: "",
                        N: ""
                    }
                }, opts.setting.check || {});
                opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                    onCheck: function onCheck(event, treeId, treeNode) {
                        selectResult(treeId, treeNode);
                    },
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) return false;
                        var treeObj = $.fn.zTree.getZTreeObj(treeId);
                        treeObj.checkNode(treeNode, null, true);
                        selectResult(treeId, treeNode);
                    }
                });
            } else {
                opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) return false;
                        if (typeof opts.onClick == "function") opts.onClick(that, Object.assign({
                            key: treeNode.id,
                            value: treeNode.name
                        }, treeNode));
                    }
                });
            }
            if (opts.data.length) {
                this.renderTree();
            }
        }
    }, {
        key: "render",
        value: function render() {
            return hx(_templateObject$3);
        }
    }, {
        key: "renderTree",
        value: function renderTree() {
            var opts = this.options, treeObj = $.fn.zTree.getZTreeObj(opts.id);
            if (treeObj) treeObj.destroy();
            $.fn.zTree.init(this.$el, opts.setting, opts.data);
        }
    }, {
        key: "search",
        value: function search() {
            var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.$("li").hide();
            if (keyword == "") {
                this.$("li").show();
            } else {
                this.$("span.node_name").each(function(index, el) {
                    if ($(el).text().indexOf(keyword) > -1) {
                        $(el).parents("li").show();
                    }
                });
            }
        }
    }, {
        key: "clearChecked",
        value: function clearChecked(key, value) {
            var opts = this.options, ztree$$1 = $.fn.zTree.getZTreeObj(opts.id), node = ztree$$1.getNodeByParam(key, value, null);
            if (node) {
                ztree$$1.checkNode(node, false, false);
            }
        }
    } ]);
    return Tree;
}(Lego.UI.Baseview);

Lego.components("tree", Tree);

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

var _templateObject = _taggedTemplateLiteral([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu ', '" style="width:100%;">\n                        <div class="scrollbar">\n                            <tree id="tree-', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu ', '" style="width:100%;">\n                        <div class="scrollbar">\n                            <tree id="tree-', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu ', '" style="width:100%;">\n                        <div class="scrollbar">\n                            <tree id="tree-', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu ', '" style="width:100%;">\n                        <div class="scrollbar">\n                            <tree id="tree-', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ]);

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

var Treeselect = function(_Selects) {
    _inherits(Treeselect, _Selects);
    function Treeselect() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Treeselect);
        var options = {
            name: "",
            value: [],
            multiple: false,
            eventName: "click",
            scrollbar: {},
            fieldName: "key",
            disSelect: "",
            onlySelect: "",
            treeDataSource: null,
            tags: false,
            placeholder: "",
            inputAble: false,
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            combobox: false,
            size: "",
            showSearch: false,
            disabled: false,
            dropdownStyle: null,
            dropdownClass: "",
            splitString: "",
            clickAndClose: opts.multiple ? false : true,
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {}
        };
        Object.assign(options, opts);
        if (options.value) {
            if (!Array.isArray(options.value)) options.value = [ options.value ];
            options.value.forEach(function(item) {
                item.selected = true;
            });
        }
        return _possibleConstructorReturn(this, (Treeselect.__proto__ || Object.getPrototypeOf(Treeselect)).call(this, options));
    }
    _createClass(Treeselect, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (opts.data.length) {
                this.addCom({
                    el: "#tree-" + opts.vid,
                    disSelect: opts.disSelect,
                    onlySelect: opts.onlySelect,
                    setting: $.extend(true, {}, opts.treeSetting || {}),
                    value: opts.value || [],
                    data: opts.data || [],
                    onChecked: function onChecked(self, result) {
                        var that = this.context;
                        if (result.key !== "0" && opts.setting.check) {
                            that.getValue();
                            if (result.length) {
                                that.options.value = [];
                                result.forEach(function(val) {
                                    that.options.value.push(Object.assign({
                                        key: val.key,
                                        value: val.value,
                                        type: val.type,
                                        selected: true
                                    }, val));
                                });
                            } else {
                                that.options.value = [];
                            }
                        }
                        that.options.onChange(that, result);
                    },
                    onClick: function onClick(self, result) {
                        var that = this.context;
                        that.options.value.forEach(function(item) {
                            return item.selected = false;
                        });
                        that.options.value = [ Object.assign({
                            key: result.key,
                            value: result.value,
                            type: result.type,
                            selected: true
                        }, result) ];
                        that.options.onChange(that, result);
                        if (that.options.clickAndClose) that.close();
                    },
                    disabled: opts.disabled || false,
                    className: opts.dropdownClass
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
                vDom = hx(_templateObject3, opts.vid, opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.direction ? "drop" + opts.direction : "", opts.vid);
            } else {
                vDom = hx(_templateObject4, opts.vid, theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.direction ? "drop" + opts.direction : "", opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, trigger = this.$("#select-" + opts.vid), tagsDivEl = this.$(".select-tags-div"), treeEl = this.$("#tree-" + opts.vid), _eventName = "click.dropdown_" + opts.vid, that = this;
            if (!opts.inputAble) this.$(".select-input").attr("readonly", "readonly");
            if (!opts.disabled) {
                var handler = function handler(event) {
                    that.$(".dropdown-menu").slideToggle("fast");
                };
                if (opts.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                        if (event.originalEvent) {
                            var index_a = event.originalEvent.path.indexOf(event.target), index_b = event.originalEvent.path.indexOf(trigger[0]);
                            if (index_a <= index_b) {} else {
                                that.close();
                            }
                        }
                    });
                    trigger.off(_eventName).on(_eventName, handler);
                } else {
                    trigger.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
                this.$(".select-tag-close").off(_eventName).on(_eventName, this.clickItemClose.bind(this));
                this.$(".dropdown-menu").off(_eventName).on(_eventName, function(event) {
                    event.stopPropagation();
                });
                if (opts.dropdownHeight) {
                    this.$(".dropdown-menu > .scrollbar").css({
                        maxHeight: opts.dropdownHeight,
                        overflow: "auto"
                    });
                }
            }
        }
    }, {
        key: "show",
        value: function show(event) {
            this.$(".dropdown-menu").slideDown("fast");
        }
    }, {
        key: "close",
        value: function close(event) {
            this.$(".dropdown-menu").slideUp("fast");
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title"), treeView = $.fn.zTree.getZTreeObj("tree-" + this.options.vid);
            this.options.value.forEach(function(item) {
                if (item.key === key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            if (treeView) {
                var treeNode = treeView.getNodeByParam(this.options.keyNames[0], key, null);
                treeView.checkNode(treeNode, !treeNode.checked, null, true);
            }
            if (typeof this.options.onDeselect === "function") this.options.onDeselect(this, {
                key: key,
                value: value
            });
        }
    }, {
        key: "getValue",
        value: function getValue() {
            this.options.value = this.options.value.filter(function(item) {
                return item.selected === true && item.key !== "0";
            });
            return this.options.value;
        }
    } ]);
    return Treeselect;
}(Selects);

Lego.components("treeselect", Treeselect);

module.exports = Treeselect;
