/**
 * treeselect.js v0.2.0
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

var _templateObject2$2 = _taggedTemplateLiteral$2([ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ], [ '<li id="', '" class="', '">\n                    <a href="', '">', "</a></li>" ]);

var _templateObject3$2 = _taggedTemplateLiteral$2([ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                ', "\n                ", "\n            </li>\n            " ]);

var _templateObject4$2 = _taggedTemplateLiteral$2([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$2([ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu clearfix ', '">\n            ', "\n        </ul>\n        " ]);

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
        var _this = _possibleConstructorReturn$2(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
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
    _createClass$2(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$2);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$2, item.key, item.disabled || item.selected ? "disabled" : "", item.href ? item.href : "javascript:;", item.value);
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(data) {
                return hx(_templateObject3$2, data.value, data.children ? hx(_templateObject4$2, data.children.map(function(item) {
                    itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5, options.direction ? "drop" + options.direction : "", options.data.map(function(item) {
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

var _templateObject$1 = _taggedTemplateLiteral$1([ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ], [ "\n                <ul>", '\n                    <li class="select-search">\n                        <input value="" class="select-search-input">\n                    </li>\n                </ul>\n                ' ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ], [ '\n                    <li class="select-tag" id="', '" title="', '">\n                        <div class="select-tag-content">', '</div>\n                        <span class="select-tag-close"></span>\n                    </li>\n                    ' ]);

var _templateObject3$1 = _taggedTemplateLiteral$1([ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4$1 = _taggedTemplateLiteral$1([ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <dropdown id="', '-dropdown"></dropdown>\n                </div>\n            </div>\n            ' ]);

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
            filterOption: true,
            tags: false,
            onSelect: function onSelect() {},
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "",
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownStyle: null,
            dropdownClassName: "",
            splitString: "",
            components: [ {
                el: "#" + opts.vid + "-dropdown",
                trigger: "#" + opts.vid + "-select",
                eventName: opts.eventName || "click",
                disabled: opts.disabled || false,
                style: Object.assign({
                    width: opts.dropdownWidth || "100%",
                    height: opts.dropdownHeight || "auto"
                }, opts.dropdownStyle || {}),
                className: opts.dropdownClassName,
                data: opts.data,
                onChange: function onChange(model) {
                    var theView = Lego.getView(opts.el);
                    if (theView) {
                        theView.$(".select-input").focus();
                        if (model.key !== "0" && opts.multiple) {
                            theView.getValue();
                            if (!theView.options.value.includes(model)) {
                                model.selected = true;
                                theView.options.value.push(model);
                            }
                        } else {
                            theView.options.data.forEach(function(item) {
                                return item.selected = false;
                            });
                            theView.options.value = [ model ];
                        }
                        theView.options.onSelect(model);
                        theView.options.onChange(model);
                        theView.refresh();
                    }
                }
            } ]
        };
        Object.assign(options, opts);
        if (options.value.length) {
            options.value.forEach(function(item) {
                var model = options.data.find(function(model) {
                    return model.key === item.key;
                });
                if (model) model.selected = true;
            });
        }
        var _this = _possibleConstructorReturn$1(this, (Selects.__proto__ || Object.getPrototypeOf(Selects)).call(this, options));
        var eventName = "click.select_" + opts.vid, callback = _this.clickItemClose.bind(_this);
        _this.$(".select-tags-div").off(eventName).on(eventName, ".select-tag-close", callback);
        return _this;
    }
    _createClass$1(Selects, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
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
            var theValueArr = Array.isArray(options.value) ? options.value.length ? options.value.map(function(item) {
                return item.value;
            }) : [] : [ options.value.value ];
            if (!options.multiple) {
                vDom = hx(_templateObject3$1, options.vid, options.disabled ? "disabled" : "", options.placeholder, theValueArr.join(","), options.name, options.vid);
            } else {
                vDom = hx(_templateObject4$1, options.vid, theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : options.placeholder, theValueArr.join(","), options.name, theValueArr.length ? "select-tags-div-border" : "", getTags(options.value), options.vid);
            }
            return vDom;
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title");
            this.options.data.forEach(function(item) {
                if (item.key === key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            Lego.getView("#" + this.options.vid + "-dropdown").refresh();
            if (typeof this.options.onDeselect === "function") this.options.onDeselect({
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
                return item.selected === true && item.key !== "0";
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

var _templateObject$3 = _taggedTemplateLiteral$3([ '<ul class="ztree"></ul>' ], [ '<ul class="ztree"></ul>' ]);

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
            disSelect: null,
            onlySelect: null,
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
            data: [],
            onChecked: function onChecked() {},
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$3(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    _createClass$3(Tree, [ {
        key: "render",
        value: function render() {
            return hx(_templateObject$3);
        }
    }, {
        key: "renderBefore",
        value: function renderBefore() {
            var options = this.options, that = this;
            function selectOrNo(treeNode) {
                if (options.disSelect) {
                    if (treeNode[options.disSelect] == Object.values(options.disSelect)[0]) return false;
                }
                if (options.onlySelect) {
                    if (treeNode[options.onlySelect] !== Object.values(options.onlySelect)[0]) return false;
                }
                return true;
            }
            if (options.setting.check) {
                options.setting.check = Object.assign({
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
                            newValue.push({
                                key: val[keyNames[0]],
                                value: val[keyNames[1]],
                                type: val[keyNames[2]]
                            });
                        });
                        if (typeof options.onChecked == "function") options.onChecked(newValue);
                    }
                });
            } else {
                options.setting.callback = Object.assign(options.setting.callback || {}, {
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) return false;
                        if (typeof options.onClick == "function") options.onClick({
                            key: treeNode[options.keyNames[0]],
                            value: treeNode[options.keyNames[1]],
                            type: treeNode[options.keyNames[2]]
                        });
                    }
                });
            }
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var options = this.options;
            $.fn.zTree.init(this.$el, options.setting, options.data);
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

var _templateObject3 = _taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="dropdown-menu scrollbar ', '">\n                        <tree id="', '-tree"></tree>\n                    </div>\n                </div>\n\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="dropdown-menu scrollbar ', '">\n                        <tree id="', '-tree"></tree>\n                    </div>\n                </div>\n\n            </div>\n            ' ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n            <div class="select dropdown treeselect multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu scrollbar ', '">\n                        <tree id="', '-tree"></tree>\n                    </div>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="select dropdown treeselect multiple">\n                <div id="', '-select">\n                    <input type="text" class="form-control select-input ', '" placeholder="', '" value="', '" name="', '">\n                    <div class="select-tags-div clearfix ', '">\n                        ', '\n                    </div>\n                    <div class="dropdown-menu scrollbar ', '">\n                        <tree id="', '-tree"></tree>\n                    </div>\n                </div>\n            </div>\n            ' ]);

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
            filterOption: true,
            tags: false,
            onSelect: function onSelect() {},
            onDeselect: function onDeselect() {},
            onChange: function onChange() {},
            onSearch: function onSearch() {},
            placeholder: "",
            notFoundContent: "",
            dropdownWidth: "100%",
            dropdownHeight: "auto",
            optionFilterProp: "",
            combobox: false,
            size: "",
            showSearch: false,
            disabled: false,
            defaultActiveFirstOption: false,
            dropdownStyle: null,
            dropdownClassName: "",
            splitString: "",
            keyNames: [ "id", "name", "type" ],
            components: [ {
                el: "#" + opts.vid + "-tree",
                disSelect: opts.disSelect,
                onlySelect: opts.onlySelect,
                setting: Object.assign({}, opts.setting),
                keyNames: opts.keyNames || [ "id", "name", "type" ],
                value: opts.value,
                data: opts.data,
                onChecked: function onChecked(result) {
                    var theView = Lego.getView(opts.el);
                    if (theView) {
                        if (result.key !== "0" && opts.setting.check) {
                            theView.getValue();
                            if (result.length) {
                                theView.options.value = [];
                                result.forEach(function(val) {
                                    theView.options.value.push({
                                        key: val.key,
                                        value: val.value,
                                        type: val.type,
                                        selected: true
                                    });
                                });
                            }
                        }
                        theView.options.onSelect(result);
                        theView.options.onChange(result);
                        theView.refresh();
                    }
                },
                onClick: function onClick(result) {
                    var theView = Lego.getView(opts.el);
                    theView.options.value.forEach(function(item) {
                        return item.selected = false;
                    });
                    theView.options.value = [ {
                        key: result.key,
                        value: result.value,
                        type: result.type,
                        selected: true
                    } ];
                    theView.options.onSelect(result);
                    theView.options.onChange(result);
                    theView.refresh();
                },
                disabled: opts.disabled || false,
                className: opts.dropdownClassName
            } ]
        };
        Object.assign(options, opts);
        if (options.value) {
            if (!Array.isArray(options.value)) options.value = [ options.value ];
            options.value.forEach(function(item) {
                item.selected = true;
            });
        }
        var _this = _possibleConstructorReturn(this, (Treeselect.__proto__ || Object.getPrototypeOf(Treeselect)).call(this, options));
        var eventName = "click.select_" + opts.vid, callback = _this.clickItemClose.bind(_this);
        _this.$(".select-tags-div").off(eventName).on(eventName, ".select-tag-close", callback);
        return _this;
    }
    _createClass(Treeselect, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
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
            var theValueArr = Array.isArray(options.value) ? options.value.length ? options.value.map(function(item) {
                return item.value;
            }) : [] : [ options.value.value ];
            if (!options.multiple) {
                vDom = hx(_templateObject3, options.vid, options.disabled ? "disabled" : "", options.placeholder, theValueArr.join(","), options.name, options.direction ? "drop" + options.direction : "", options.vid);
            } else {
                vDom = hx(_templateObject4, options.vid, theValueArr.length ? "select-hasValue" : "", theValueArr.length ? "" : options.placeholder, theValueArr.join(","), options.name, theValueArr.length ? "select-tags-div-border" : "", getTags(options.value), options.direction ? "drop" + options.direction : "", options.vid);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var _this2 = this;
            var options = this.options, that = this;
            if (!options.disabled) {
                (function() {
                    var handler = function handler(event) {
                        event.stopPropagation();
                        var directionResp = Lego.UI.Util.getDirection(trigger, treeEl);
                        options.direction = directionResp._y || "bottom";
                        that.show();
                        if (options.eventName == "hover") {
                            trigger.mouseleave(function() {
                                that.close();
                            });
                        }
                    };
                    var trigger = _this2.$("#" + options.vid + "-select");
                    var treeEl = _this2.$("#" + options.vid + "-tree");
                    if (options.eventName == "click") {
                        var _eventName = "click.dropdown_" + options.vid;
                        $("body").off(_eventName).on(_eventName, function() {
                            that.close();
                        });
                        trigger.off(_eventName).on(_eventName, handler);
                    } else {
                        trigger[options.eventName](handler);
                    }
                })();
            }
            this.$(".dropdown-menu").css({
                width: options.dropdownWidth || "100%",
                height: options.dropdownHeight || "auto"
            });
        }
    }, {
        key: "show",
        value: function show(event) {
            this.$("#" + this.options.vid + "-select").addClass("dropdown open");
            this.$(".dropdown-menu").addClass("ps-container ps-theme-default ps-active-y");
        }
    }, {
        key: "close",
        value: function close(event) {
            this.$("#" + this.options.vid + "-select").removeClass("dropdown open");
        }
    }, {
        key: "clickItemClose",
        value: function clickItemClose(event) {
            event.stopPropagation();
            var target = $(event.currentTarget).parent(), key = target.attr("id"), value = target.attr("title"), treeView = Lego.getView(this.$("#" + this.options.vid + "-tree"));
            this.options.value.forEach(function(item) {
                if (item.key === key) item.selected = false;
            });
            this.getValue();
            this.refresh();
            if (treeView) treeView.clearChecked(this.options.keyNames[0], key);
            if (typeof this.options.onDeselect === "function") this.options.onDeselect({
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
