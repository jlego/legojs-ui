/**
 * tags.js v0.9.35
 * (c) 2017 Ronghui Yu
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-tags">\n            <div class="lego-tags-list">\n                <div class="', '">\n                ', "\n                ", '\n                </div>\n            </div>\n            <div class="lego-tags-btns">\n            ', "\n            ", "\n            </div>\n        </div>\n        " ], [ '\n        <div class="lego-tags">\n            <div class="lego-tags-list">\n                <div class="', '">\n                ', "\n                ", '\n                </div>\n            </div>\n            <div class="lego-tags-btns">\n            ', "\n            ", "\n            </div>\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                    <div class="lego-tag ', '" id="', '" title="', '" onclick=', '>\n                        <div class="lego-tag-text">\n                            <span>', "</span>\n                            ", "\n                        </div>\n                    </div>\n                " ], [ '\n                    <div class="lego-tag ', '" id="', '" title="', '" onclick=', '>\n                        <div class="lego-tag-text">\n                            <span>', "</span>\n                            ", "\n                        </div>\n                    </div>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ], [ '<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=', "></i>" ]);

var _templateObject4 = _taggedTemplateLiteral([ '<buttons id="add_', '"></buttons>' ], [ '<buttons id="add_', '"></buttons>' ]);

var _templateObject5 = _taggedTemplateLiteral([ '<i class="anticon anticon-down-circle-o btn-more" id="more_', '"></i>' ], [ '<i class="anticon anticon-down-circle-o btn-more" id="more_', '"></i>' ]);

var _templateObject6 = _taggedTemplateLiteral([ '<buttons id="clean_', '"></buttons>' ], [ '<buttons id="clean_', '"></buttons>' ]);

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

var Tags = function(_Lego$UI$Baseview) {
    _inherits(Tags, _Lego$UI$Baseview);
    function Tags() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tags);
        var options = {
            events: {
                "click .btn-more": "showMore"
            },
            color: "",
            deleteAble: true,
            readonly: false,
            showMoreBtn: false,
            showAddBtn: true,
            showCleanBtn: false,
            moreBtnText: "",
            addBtnText: "添加标签 +",
            addBtnOption: {},
            cleanBtnText: "清空",
            cleanBtnOption: {},
            onSelected: function onSelected() {},
            onDelete: function onDelete() {},
            onAdd: function onAdd() {},
            onClean: function onClean() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, options));
    }
    _createClass(Tags, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!opts.readonly) {
                this.addCom($.extend({
                    el: "#add_" + opts.vid,
                    text: opts.addBtnText,
                    type: "dashed",
                    size: "sm",
                    onClick: function onClick(self, event) {
                        event.stopPropagation();
                        if (typeof opts.onAdd == "function") opts.onAdd(that, event);
                    }
                }, opts.addBtnOption));
                if (opts.showCleanBtn) {
                    this.addCom($.extend({
                        el: "#clean_" + opts.vid,
                        text: opts.cleanBtnText,
                        size: "sm",
                        style: {
                            marginLeft: 5
                        },
                        onClick: function onClick(self, event) {
                            event.stopPropagation();
                            if (typeof opts.onClean == "function") opts.onClean(that, event);
                        }
                    }, opts.cleanBtnOption));
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;
            var opts = this.options;
            this.vDom = hx(_templateObject, opts.showMoreBtn ? "lego-tags-" + (opts.open ? "open" : "close") : "", opts.data.map(function(item) {
                return hx(_templateObject2, item.selected ? "lego-tag-" + item.selected : "", item.key, item.value, _this2.onSelected.bind(_this2), item.value, opts.deleteAble ? hx(_templateObject3, _this2.onDelete.bind(_this2)) : "");
            }), !opts.readonly && opts.showAddBtn ? hx(_templateObject4, opts.vid) : "", opts.showMoreBtn ? opts.moreBtnText ? val(opts.moreBtnText) : hx(_templateObject5, opts.vid) : "", !opts.readonly && opts.showCleanBtn ? hx(_templateObject6, opts.vid) : "");
            return this.vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, opts = this.options, _eventName = "click.tagslist_" + opts.vid;
            $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                if (event.originalEvent) {
                    var index_a = event.originalEvent.path.indexOf(event.target), index_b = event.originalEvent.path.indexOf(that.el);
                    if (index_a <= index_b) {} else {
                        opts.open = false;
                    }
                }
            });
        }
    }, {
        key: "addItem",
        value: function addItem() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = this.options;
            var hasOne = opts.data.find(function(item) {
                return item.key == obj.key;
            });
            if (!hasOne) {
                opts.data.push(obj);
            }
        }
    }, {
        key: "removeItem",
        value: function removeItem(id) {
            var opts = this.options;
            opts.data = opts.data.filter(function(item) {
                return item.key ? item.key.toString() !== id : false;
            });
            this.refresh();
        }
    }, {
        key: "cleanAll",
        value: function cleanAll() {
            this.options.data = [];
            this.options.open = false;
            this.refresh();
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.data;
        }
    }, {
        key: "onDelete",
        value: function onDelete(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.parent().parent().attr("id");
            if (typeof opts.onDelete == "function") opts.onDelete(this, id);
        }
    }, {
        key: "onSelected",
        value: function onSelected(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options, id = target.attr("id"), item = opts.data.find(function(item) {
                return item.key.toString() == id;
            });
            if (typeof opts.onSelected == "function") opts.onSelected(this, item);
        }
    }, {
        key: "showMore",
        value: function showMore(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), opts = this.options;
            opts.open = !opts.open;
        }
    } ]);
    return Tags;
}(Lego.UI.Baseview);

Lego.components("tags", Tags);

module.exports = Tags;
