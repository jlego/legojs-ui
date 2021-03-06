/**
 * transfer.js v0.12.6
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

var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
        return arr2;
    } else {
        return Array.from(arr);
    }
};

var _templateObject$1 = taggedTemplateLiteral([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);

var _templateObject3$1 = taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ], [ '<i title="移除" class="anticon anticon-close-circle lego-close"></i>' ]);

var Listgroup = function(_Lego$UI$Baseview) {
    inherits(Listgroup, _Lego$UI$Baseview);
    function Listgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Listgroup);
        var options = {
            events: {
                "click li.list-group-item": "onClick",
                "click i.lego-close": "onClose"
            },
            activeKey: "",
            template: "",
            removeAble: false,
            data: [],
            onClick: function onClick() {},
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Listgroup.__proto__ || Object.getPrototypeOf(Listgroup)).call(this, options));
    }
    createClass(Listgroup, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$1, options.data.map(function(item, index) {
                if (item.template) {
                    return item.template;
                } else {
                    return hx(_templateObject2$1, item.disabled ? "disabled" : "", options.activeKey == item.key ? "active" : "", val(item.className), val(item.key), options.removeAble ? hx(_templateObject3$1) : "", val(item.value));
                }
            }));
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            this.options.activeKey = this.options.activeKey != key ? key : "";
            this.refresh();
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, key, event);
            }
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.parent().attr("id");
            this.options.data = this.options.data.filter(function(item) {
                return item.key.toString() !== key.toString();
            });
            this.refresh();
            if (typeof this.options.onClose === "function") {
                this.options.onClose(this, key, event);
            }
        }
    } ]);
    return Listgroup;
}(Lego.UI.Baseview);

Lego.components("listgroup", Listgroup);

var _templateObject$2 = taggedTemplateLiteral([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

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
            return hx(_templateObject$2);
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

var _templateObject$4 = taggedTemplateLiteral([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$3 = taggedTemplateLiteral([ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ "\n                    <li ", '>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3$3 = taggedTemplateLiteral([ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown" ', '>\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

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
                    return hx(_templateObject$4);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$3, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3$3, item.isHidden ? 'style="display:none;"' : "", val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.html || item.value, item), item.children ? hx(_templateObject4, item.children.map(function(item) {
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

var _templateObject$3 = taggedTemplateLiteral([ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ], [ '\n        <div class="lego-search ', '" style="', '">\n            <div class="input-group">\n                ', '\n              <input type="text" class="form-control lego-search-input" id="searchInput_', '" placeholder="', '" name="', '" value="', '">\n              <div class="input-group-btn">\n                <button type="button" class="btn lego-search-button">\n                  <i class="anticon anticon-search"></i>\n                </button>\n              </div>\n          </div>\n          ', "\n        </div>\n        " ]);

var _templateObject2$2 = taggedTemplateLiteral([ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ], [ '\n              <div class="input-group-btn dropdown" id="select-', '">\n                <button type="button" class="btn btn-secondary dropdown-toggle">\n                  ', '\n                </button>\n                <dropdown id="dropdown-', '"></dropdown>\n              </div>\n              ' ]);

var _templateObject3$2 = taggedTemplateLiteral([ '<dropdown id="autocomplete_', '"></dropdown>' ], [ '<dropdown id="autocomplete_', '"></dropdown>' ]);

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
            var vDom = hx(_templateObject$3, opts.size ? "input-group-" + opts.size : "", opts.autoComplete ? "position: relative;" : "", opts.showSelect ? hx(_templateObject2$2, opts.vid, opts.activeValue || "请选择", opts.vid) : "", opts.vid, opts.placeholder, opts.name, val(opts.keyword), opts.autoComplete ? hx(_templateObject3$2, opts.vid) : "");
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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5>\n                        ', "\n                        <span>", "</span>\n                    </h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="transfer_tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="transfer_list_', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-right"></i>\n            <i class="anticon anticon-left"></i>\n        </div>\n        ' ], [ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5>\n                        ', "\n                        <span>", "</span>\n                    </h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="transfer_tree_', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="transfer_list_', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-right"></i>\n            <i class="anticon anticon-left"></i>\n        </div>\n        ' ]);

var _templateObject2 = taggedTemplateLiteral([ '<button class="btn btn-link float-right">搜索</button>' ], [ '<button class="btn btn-link float-right">搜索</button>' ]);

var _templateObject3 = taggedTemplateLiteral([ '<search id="transfer_search_', '"></search>' ], [ '<search id="transfer_search_', '"></search>' ]);

var Transfer = function(_Lego$UI$Baseview) {
    inherits(Transfer, _Lego$UI$Baseview);
    function Transfer() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Transfer);
        var options = {
            events: {
                "click h5 > button": "showSearch"
            },
            titles: [],
            value: [],
            data: [],
            width: 450,
            height: 400,
            treeSetting: {},
            scrollbar: {},
            simpleData: true,
            filterParentNode: false,
            showSearch: false,
            searchPlaceholder: "请输入搜索内容",
            notFoundContent: "列表为空",
            onChange: function onChange() {},
            onSearch: null
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, options));
    }
    createClass(Transfer, [ {
        key: "_mergeValue",
        value: function _mergeValue() {
            var opts = this.options;
            if (opts.value.length) {
                opts.data.forEach(function(item, index) {
                    var hasOne = opts.value.find(function(val) {
                        return val.key == (item.key || item.id);
                    });
                    if (hasOne) {
                        item.checked = true;
                    }
                });
            }
        }
    }, {
        key: "dataReady",
        value: function dataReady() {
            this._mergeValue();
        }
    }, {
        key: "components",
        value: function components() {
            var opts = this.options, that = this, listValue = [];
            function loopItem(data) {
                that._mergeValue();
                data.map(function(item) {
                    if (item.checked) {
                        item.key = item.id || item.key;
                        item.value = item.name || item.name;
                        listValue.push($.extend(true, {}, item));
                        if (item.children) {
                            loopItem(item.children);
                        }
                    }
                });
                if (opts.filterParentNode) {
                    listValue = listValue.filter(function(item) {
                        return !item.isParent;
                    });
                }
            }
            if (opts.data.length) {
                loopItem(opts.data);
                this.addCom([ {
                    el: "#transfer_tree_" + opts.vid,
                    setting: $.extend(true, {
                        check: {
                            enable: true,
                            chkboxType: {
                                Y: "ps",
                                N: "ps"
                            }
                        }
                    }, opts.treeSetting || {}),
                    onChecked: function onChecked(self, result) {
                        var listView = Lego.getView("#transfer_list_" + opts.vid);
                        if (listView) {
                            if (opts.filterParentNode) {
                                result = result.filter(function(item) {
                                    return !item.isParent;
                                });
                            }
                            listView.options.data = Array.from(result);
                            listView.refresh();
                        }
                        if (typeof opts.onChange === "function") {
                            opts.onChange(this.context, result);
                        }
                    },
                    data: opts.data
                }, {
                    el: "#transfer_list_" + opts.vid,
                    removeAble: true,
                    onClose: function onClose(self, result) {
                        var treeView = $.fn.zTree.getZTreeObj("transfer_tree_" + opts.vid);
                        if (treeView) {
                            var treeNode = treeView.getNodeByParam("id", result, null);
                            treeView.checkNode(treeNode, !treeNode.checked, true);
                            if (typeof opts.onChange === "function") {
                                opts.onChange(this.context, this.data);
                            }
                        }
                    },
                    data: listValue
                } ]);
                if (opts.showSearch) {
                    this.addCom({
                        el: "#transfer_search_" + opts.vid,
                        style: {
                            display: opts.showSearch == "fixed" ? "table" : "none"
                        },
                        size: "sm",
                        onKeyup: function onKeyup(self, result, event) {
                            if (typeof opts.onSearch == "function") {
                                opts.onSearch(that, result);
                            } else {
                                var treeView = Lego.getView("#transfer_tree_" + opts.vid);
                                if (treeView) {
                                    treeView.search(result.keyword);
                                }
                            }
                        }
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.showSearch && opts.showSearch !== "fixed" ? hx(_templateObject2) : "", val(opts.titles[0]), opts.showSearch ? hx(_templateObject3, opts.vid) : "", opts.vid, val(opts.titles[1]), opts.vid);
            return vDom;
        }
    }, {
        key: "showSearch",
        value: function showSearch(event) {
            var target = $(event.currentTarget);
            this.$(".lego-search").toggle(0, function() {
                if (target.text() == "取消") {
                    target.text("搜索");
                    $(this).next().css({
                        paddingBottom: 40
                    });
                } else {
                    target.text("取消");
                    $(this).next().css({
                        paddingBottom: 74
                    });
                }
            });
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options;
            this.$el.css({
                width: opts.width,
                height: opts.height
            });
            this.$("#transfer_search_" + opts.vid).next().css({
                paddingBottom: 74
            });
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var listView = Lego.getView("#transfer_list_" + this.options.vid);
            if (listView) {
                return listView.options.data;
            }
            return null;
        }
    } ]);
    return Transfer;
}(Lego.UI.Baseview);

Lego.components("transfer", Transfer);

module.exports = Transfer;
