/**
 * treeselect.js v0.12.6
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var ztree = require("ztree");

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var _templateObject$1 = taggedTemplateLiteral([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

var Tree = function(_Lego$UI$Baseview) {
    inherits(Tree, _Lego$UI$Baseview);
    function Tree() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Tree);
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
        return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    createClass(Tree, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            function selectOrNo(treeNode) {
                if (opts.disSelect) {
                    if (_typeof(opts.disSelect) == "object") {
                        if (treeNode[Object.keys(opts.disSelect)[0]] == opts.disSelect[Object.keys(opts.disSelect)[0]]) {
                            return false;
                        }
                    } else {
                        if (Object.keys(treeNode).includes(opts.disSelect)) {
                            return false;
                        }
                    }
                }
                if (opts.onlySelect) {
                    if (_typeof(opts.onlySelect) == "object") {
                        if (treeNode[Object.keys(opts.onlySelect)[0]] !== opts.onlySelect[Object.keys(opts.onlySelect)[0]]) {
                            return false;
                        }
                    } else {
                        if (!Object.keys(treeNode).includes(opts.onlySelect)) {
                            return false;
                        }
                    }
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
                if (typeof opts.onChecked == "function") {
                    opts.onChecked(that, newValue, treeNode);
                }
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
                        if (!selectOrNo(treeNode)) {
                            return false;
                        }
                        var treeObj = $.fn.zTree.getZTreeObj(treeId);
                        treeObj.checkNode(treeNode, null, true);
                        selectResult(treeId, treeNode);
                    }
                });
            } else {
                opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) {
                            return false;
                        }
                        if (typeof opts.onClick == "function") {
                            opts.onClick(that, Object.assign({
                                key: treeNode.id,
                                value: treeNode.name
                            }, treeNode));
                        }
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
            return hx(_templateObject$1);
        }
    }, {
        key: "renderTree",
        value: function renderTree() {
            var opts = this.options, treeObj = $.fn.zTree.getZTreeObj(opts.id);
            if (treeObj) {
                treeObj.destroy();
            }
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

var _templateObject = taggedTemplateLiteral([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2 = taggedTemplateLiteral([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3 = taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4 = taggedTemplateLiteral([ '<div class="lego-search-container"><search id="search_', '"></search></div>' ], [ '<div class="lego-search-container"><search id="search_', '"></search></div>' ]);

var _templateObject5 = taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect multiple">\n                <div id="select-', '">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="hidden_', '">\n                    <input type="hidden" name="', '" value="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu" style="width:100%;">\n                        ', '\n                        <div class="scrollbar">\n                            <tree id="tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ' ]);

var Treeselect = function(_Lego$UI$Baseview) {
    inherits(Treeselect, _Lego$UI$Baseview);
    function Treeselect() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Treeselect);
        var options = {
            events: {
                click: function click(event) {
                    event.stopPropagation();
                }
            },
            name: "",
            value: [],
            data: [],
            multiple: false,
            eventName: "click",
            scrollbar: {},
            fieldName: "key",
            disSelect: "",
            onlySelect: "",
            tags: false,
            placeholder: "",
            searchPlaceholder: "搜索",
            inputAble: false,
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            treeSetting: {},
            treeChkStyle: "",
            size: "",
            showSearch: false,
            disabled: false,
            splitString: "",
            clickAndClose: opts.multiple ? false : true,
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {}
        };
        Object.assign(options, opts);
        options.value = val(options.value);
        if (!Array.isArray(options.value)) {
            options.value = [ options.value ];
        }
        return possibleConstructorReturn(this, (Treeselect.__proto__ || Object.getPrototypeOf(Treeselect)).call(this, options));
    }
    createClass(Treeselect, [ {
        key: "components",
        value: function components() {
            var _this2 = this;
            var opts = this.options, that = this, treeSetting = $.extend(true, {
                data: {
                    simpleData: {
                        enable: true
                    }
                }
            }, opts.treeSetting);
            if (opts.multiple) {
                treeSetting = $.extend(true, {
                    check: {
                        enable: true,
                        chkboxType: {
                            Y: "ps",
                            N: "ps"
                        }
                    }
                }, opts.treeSetting);
                if (opts.treeChkStyle) {
                    treeSetting.check.chkStyle = opts.treeChkStyle;
                }
            }
            if (opts.value.length) {
                opts.value.forEach(function(item, index) {
                    item.selected = true;
                });
            }
            if (opts.data.length) {
                this.addCom({
                    el: "#tree_" + opts.vid,
                    disSelect: opts.disSelect,
                    onlySelect: opts.onlySelect,
                    setting: treeSetting,
                    value: Array.from(opts.value),
                    data: opts.data || [],
                    onChecked: function onChecked(self, result, treeNode) {
                        if (treeSetting.check) {
                            if (result.length) {
                                opts.value = [];
                                result.forEach(function(val, index) {
                                    if (val.key !== "0") {
                                        val.selected = true;
                                        opts.value.push(Object.assign({}, val));
                                    }
                                });
                            } else {
                                opts.value = [];
                            }
                        }
                        opts.onChange(that, result);
                        that.refresh();
                    },
                    onClick: function onClick(self) {
                        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        opts.value.forEach(function(item, index) {
                            item.selected = false;
                        });
                        opts.value = [ Object.assign({
                            key: result.key,
                            value: result.value,
                            type: result.type,
                            selected: true
                        }, result) ];
                        opts.onChange(that, result);
                        if (opts.clickAndClose) {
                            that.close();
                        }
                    },
                    disabled: opts.disabled || false
                });
                if (opts.showSearch) {
                    (function() {
                        var searchFun = function searchFun(self, result) {
                            var treeView = Lego.getView("#tree_" + opts.vid);
                            if (treeView) {
                                treeView.search(result.keyword);
                            }
                        };
                        _this2.addCom({
                            el: "#search_" + opts.vid,
                            placeholder: opts.searchPlaceholder,
                            size: "sm",
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
            var theValueArr = [], realValueArr = [];
            if (opts.value.length) {
                theValueArr = opts.value.map(function(item) {
                    return item.value;
                });
                realValueArr = opts.value.map(function(item) {
                    return item[opts.fieldName];
                });
            }
            if (!opts.multiple) {
                vDom = hx(_templateObject3, opts.vid, opts.disabled ? "disabled" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), opts.showSearch ? hx(_templateObject4, opts.vid) : "", opts.vid);
            } else {
                vDom = hx(_templateObject5, opts.vid, theValueArr.length ? "select-hasValue" : "", opts.placeholder, theValueArr.join(","), opts.name, opts.name, realValueArr.join(","), theValueArr.length ? "select-tags-div-border" : "", getTags(opts.value), opts.showSearch ? hx(_templateObject4, opts.vid) : "", opts.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, trigger = this.$("#select-" + opts.vid), tagsDivEl = this.$(".select-tags-div"), treeEl = this.$("#tree_" + opts.vid), _eventName = "click.dropdown_" + opts.vid, that = this;
            if (!opts.inputAble) {
                this.$(".select-input").attr("readonly", "readonly");
            }
            if (!opts.disabled) {
                var handler = function handler(event) {
                    if (that.$(".dropdown-menu").css("display") == "none") {
                        that.show();
                    } else {
                        that.close();
                    }
                };
                if (opts.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                        that.close();
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
                }).width("100%");
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
            var opts = this.options;
            this.container = this.container || opts.context.$("#select-" + opts.vid);
            Lego.UI.Util.getDirection(this.container, this.$(".dropdown-menu"));
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
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title"), treeView = $.fn.zTree.getZTreeObj("tree_" + this.options.vid);
            this.options.value.forEach(function(item) {
                if (item.key === key) {
                    item.selected = false;
                }
            });
            this.getValue();
            this.refresh();
            if (treeView) {
                var treeNode = treeView.getNodeByParam("id", key, null);
                if (treeNode) {
                    treeView.checkNode(treeNode, false, null, true);
                }
            }
            if (typeof this.options.onDeselect === "function") {
                this.options.onDeselect(this, {
                    key: key,
                    value: value
                });
            }
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
}(Lego.UI.Baseview);

Lego.components("treeselect", Treeselect);

module.exports = Treeselect;
