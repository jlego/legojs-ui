/**
 * transfer.js v0.2.7
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var ztree = require("ztree");

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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ], [ '\n        <ul class="list-group">\n        ', "\n        </ul>\n        " ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ], [ '<li class="list-group-item ', " ", " ", '"\n                id="', '">\n                ', "\n                ", "\n                </li>" ]);

var _templateObject3 = _taggedTemplateLiteral$1([ '<i class="anticon anticon-cross float-xs-right close"></i>' ], [ '<i class="anticon anticon-cross float-xs-right close"></i>' ]);

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

var Listgroup = function(_Lego$UI$Baseview) {
    _inherits$1(Listgroup, _Lego$UI$Baseview);
    function Listgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Listgroup);
        var options = {
            events: {
                "click li.list-group-item": "onClick",
                "click i.close": "onClose"
            },
            activeKey: "",
            template: "",
            removeAble: false,
            data: [],
            onClick: function onClick() {},
            onClose: function onClose() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Listgroup.__proto__ || Object.getPrototypeOf(Listgroup)).call(this, options));
    }
    _createClass$1(Listgroup, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$1, options.data.map(function(item, index) {
                if (item.template) {
                    return item.template;
                } else {
                    return hx(_templateObject2$1, item.disabled ? "disabled" : "", options.activeKey == item.key ? "active" : "", val(item.className), val(item.key), options.removeAble ? hx(_templateObject3) : "", val(item.value));
                }
            }));
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.attr("id");
            if (typeof this.options.onClick === "function") this.options.onClick(this, key, event);
            this.options.activeKey = this.options.activeKey != key ? key : "";
            this.refresh();
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), key = target.parent().attr("id");
            if (typeof this.options.onClose === "function") this.options.onClose(this, key, event);
            this.options.data = this.options.data.filter(function(item) {
                return item.key !== key;
            });
            this.refresh();
        }
    } ]);
    return Listgroup;
}(Lego.UI.Baseview);

Lego.components("listgroup", Listgroup);

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

var _templateObject$2 = _taggedTemplateLiteral$2([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

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

var Tree = function(_Lego$UI$Baseview) {
    _inherits$2(Tree, _Lego$UI$Baseview);
    function Tree() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$2(this, Tree);
        var options = {
            disSelect: "",
            onlySelect: "",
            setting: {
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {}
            },
            keyNames: [ "id", "name", "type" ],
            value: [],
            onChecked: function onChecked() {},
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$2(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    _createClass$2(Tree, [ {
        key: "render",
        value: function render() {
            return hx(_templateObject$2);
        }
    }, {
        key: "renderBefore",
        value: function renderBefore() {
            var options = this.options, that = this;
            function selectOrNo(treeNode) {
                if (options.disSelect) {
                    if (Object.keys(treeNode).includes(options.disSelect)) return false;
                }
                if (options.onlySelect) {
                    if (!Object.keys(treeNode).includes(options.onlySelect)) return false;
                }
                return true;
            }
            if (options.setting.check) {
                options.setting.check = $.extend(true, {
                    enable: true,
                    chkboxType: {
                        Y: "",
                        N: ""
                    }
                }, options.setting.check || {});
                options.setting.callback = Object.assign(options.setting.callback || {}, {
                    onCheck: function onCheck(event, treeId, treeNode) {
                        var treeObj = $.fn.zTree.getZTreeObj(treeId), nodes = treeObj.getCheckedNodes(true), keyNames = options.keyNames, result = nodes.filter(function(node) {
                            return selectOrNo(node);
                        });
                        var newValue = [];
                        result.forEach(function(val, index) {
                            newValue.push(Object.assign({
                                key: val[keyNames[0]],
                                value: val[keyNames[1]],
                                type: val[keyNames[2]]
                            }, val));
                        });
                        if (typeof options.onChecked == "function") options.onChecked(that, newValue);
                    }
                });
            } else {
                options.setting.callback = Object.assign(options.setting.callback || {}, {
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) return false;
                        if (typeof options.onClick == "function") options.onClick(that, Object.assign({
                            key: treeNode[options.keyNames[0]],
                            value: treeNode[options.keyNames[1]],
                            type: treeNode[options.keyNames[2]]
                        }, treeNode));
                    }
                });
            }
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var options = this.options;
            if (options.data) $.fn.zTree.init(this.$el, options.setting, options.data);
        }
    }, {
        key: "clearChecked",
        value: function clearChecked(key, value) {
            var ztree$$1 = $.fn.zTree.getZTreeObj(this.options.id);
            var node = ztree$$1.getNodeByParam(key, value, null);
            if (node) {
                ztree$$1.checkNode(node, false, false);
            }
        }
    } ]);
    return Tree;
}(Lego.UI.Baseview);

Lego.components("tree", Tree);

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

var _templateObject$4 = _taggedTemplateLiteral$4([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$3 = _taggedTemplateLiteral$4([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);

var _templateObject3$1 = _taggedTemplateLiteral$4([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral$4([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$4([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);

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

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$4(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$4(this, Dropdown);
        var options = {
            events: {
                "click li": "clickItem"
            },
            disabled: false,
            eventName: "hover",
            trigger: "",
            direction: "",
            clickAndClose: true,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$4(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$4(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$4);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$3, item.key, item.disabled || item.selected ? "disabled" : "", item.href ? item.href : "javascript:;", item.value);
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(data) {
                return hx(_templateObject3$1, data.value, data.children ? hx(_templateObject4, data.children.map(function(item) {
                    itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5, options.direction ? "drop" + options.direction : "", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this;
            this.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
            if (!this.options.disabled) {
                var handler = function handler(event) {
                    $("body, .modal-body").trigger("click");
                    event.stopPropagation();
                    var directionResp = Lego.UI.Util.getDirection(that.trigger, that.$el);
                    that.options.direction = directionResp._y || "bottom";
                    that.show();
                    if (that.options.eventName == "hover") {
                        that.trigger.mouseleave(function() {
                            that.close();
                        });
                    }
                };
                if (this.options.eventName == "click") {
                    var _eventName = "click.dropdown_" + this.options.vid;
                    $("body, .modal-body").off(_eventName).on(_eventName, function() {
                        that.close();
                    });
                    this.trigger.off(_eventName).on(_eventName, handler);
                } else {
                    this.trigger[this.options.eventName](handler);
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
        value: function show(event) {
            this.trigger.addClass("dropdown open");
        }
    }, {
        key: "close",
        value: function close(event) {
            this.trigger.removeClass("dropdown open");
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.attr("id");
            });
            if (model) this.options.onChange(this, model);
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

var _templateObject$3 = _taggedTemplateLiteral$3([ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ], [ '\n        <div class="input-group search">\n        ', '\n          <input type="text" class="form-control search-input" placeholder="', '">\n          <div class="input-group-btn">\n            <button type="button" class="btn search-button">\n              <i class="anticon anticon-search"></i>\n            </button>\n          </div>\n        </div>\n        ' ]);

var _templateObject2$2 = _taggedTemplateLiteral$3([ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ], [ '\n          <div class="input-group-btn dropdown" id="select-', '">\n            <button type="button" class="btn btn-secondary dropdown-toggle">\n              ', '\n            </button>\n            <dropdown id="dropdown-', '"></dropdown>\n          </div>\n        ' ]);

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
                "click .search-button": "onSearch",
                "keydown .search-input": "_enterSearch"
            },
            placeholder: "输入关键字搜索",
            activeKey: "",
            activeValue: "",
            hasSelect: false,
            onSearch: function onSearch() {},
            components: [ {
                el: "#dropdown-" + opts.vid,
                trigger: "#select-" + opts.vid,
                data: opts.data,
                onChange: function onChange(self, model) {
                    this.context.options.activeKey = model.key;
                    this.context.options.activeValue = model.value;
                }
            } ]
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$3(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));
    }
    _createClass$3(Search, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject$3, options.hasSelect ? hx(_templateObject2$2, options.vid, options.activeValue || "请选择", options.vid) : "", options.placeholder);
            return vDom;
        }
    }, {
        key: "_enterSearch",
        value: function _enterSearch(event) {
            if (event.keyCode == 13) {
                this.onSearch(event);
            }
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            event.stopPropagation();
            var keyword = this.$(".search-input").val();
            if (typeof this.options.onSearch === "function") this.options.onSearch(this, {
                key: this.options.activeKey,
                value: this.options.activeValue,
                keyword: keyword
            });
        }
    } ]);
    return Search;
}(Lego.UI.Baseview);

Lego.components("search", Search);

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', "</span></h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-double-right"></i>\n            <i class="anticon anticon-double-left"></i>\n        </div>\n        ' ], [ '\n        <div class="row transfer">\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', "</span></h5>\n                    ", '\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <tree id="', '"></tree>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="transfer-col">\n                    <h5><span>', '</span></h5>\n                    <div class="transfer-col-content">\n                        <div class="scrollbar">\n                            <listgroup id="', '"></listgroup>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <i class="anticon anticon-double-right"></i>\n            <i class="anticon anticon-double-left"></i>\n        </div>\n        ' ]);

var _templateObject2 = _taggedTemplateLiteral([ '<search id="', '"></search>' ], [ '<search id="', '"></search>' ]);

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

var Transfer = function(_Lego$UI$Baseview) {
    _inherits(Transfer, _Lego$UI$Baseview);
    function Transfer() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Transfer);
        var options = {
            titles: [],
            value: [],
            data: [],
            width: 560,
            height: 400,
            treeSetting: {},
            keyNames: [ "id", "name", "type" ],
            scrollbar: {},
            showSearch: false,
            searchPlaceholder: "请输入搜索内容",
            notFoundContent: "列表为空",
            onChange: function onChange() {},
            components: []
        };
        Object.assign(options, opts);
        function loopItem(data) {
            data.map(function(item) {
                if (item.checked) {
                    options.value.push({
                        key: item[options.keyNames[0]],
                        value: item[options.keyNames[1]],
                        type: item[options.keyNames[2]]
                    });
                    if (item.children) {
                        loopItem(item.children);
                    }
                }
            });
        }
        loopItem(options.data);
        options.components.push({
            el: "#transfer_" + options.vid + "_tree",
            setting: $.extend(true, {
                check: {
                    enable: true,
                    chkboxType: {
                        Y: "ps",
                        N: "ps"
                    }
                }
            }, options.treeSetting || {}),
            onChecked: function onChecked(self, result) {
                var parentView = this.context;
                var listView = Lego.getView("#transfer_" + options.vid + "_list");
                if (listView) {
                    listView.options.data = result;
                    listView.refresh();
                }
                if (typeof options.onChange === "function") options.onChange(parentView, result);
            },
            dataSource: options.dataSource,
            data: options.data
        }, {
            el: "#transfer_" + options.vid + "_list",
            removeAble: true,
            onClose: function onClose(self, result) {
                var parentView = this.context;
                var treeView = $.fn.zTree.getZTreeObj("transfer_" + options.vid + "_tree");
                if (treeView) {
                    var treeNode = treeView.getNodeByParam("id", result, null);
                    treeView.checkNode(treeNode, !treeNode.checked, null, true);
                }
            },
            data: options.value
        });
        if (options.showSearch) {
            options.components.push({
                el: "#transfer_" + options.vid + "_search",
                onSearch: function onSearch(self, result) {
                    console.warn("点击了搜索框2", result);
                }
            });
        }
        return _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, options));
    }
    _createClass(Transfer, [ {
        key: "render",
        value: function render() {
            var options = this.options || {}, theId = "transfer_" + options.vid;
            var vDom = hx(_templateObject, val(options.titles[0]), options.showSearch ? hx(_templateObject2, theId + "_search") : "", theId + "_tree", val(options.titles[1]), theId + "_list");
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var options = this.options || {};
            this.$el.css({
                width: options.width,
                height: options.height
            });
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var listView = Lego.getView("#transfer_" + this.options.vid + "_list");
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
