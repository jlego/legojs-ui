/**
 * tree.js v0.8.18
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var ztree = require("ztree");

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

var _templateObject = _taggedTemplateLiteral([ '<ul class="lego-tree"></ul>' ], [ '<ul class="lego-tree"></ul>' ]);

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

var Tree = function(_Lego$UI$Baseview) {
    _inherits(Tree, _Lego$UI$Baseview);
    function Tree() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Tree);
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
        return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
    }
    _createClass(Tree, [ {
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
            return hx(_templateObject);
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

module.exports = Tree;
