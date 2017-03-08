/**
 * tree.js v0.3.1
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
        var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, options));
        _this.isLoaded = false;
        return _this;
    }
    _createClass(Tree, [ {
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
            function selectResult(treeId, treeNode) {
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
                        selectResult(treeId, treeNode);
                    },
                    onClick: function onClick(event, treeId, treeNode) {
                        if (!selectOrNo(treeNode)) return false;
                        var treeObj = $.fn.zTree.getZTreeObj(treeId);
                        treeObj.checkNode(treeNode, null, false);
                        selectResult(treeId, treeNode);
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
        key: "render",
        value: function render() {
            return hx(_templateObject);
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var options = this.options;
            if (options.data.length && !this.isLoaded) {
                var _ztree = $.fn.zTree.getZTreeObj(this.options.id);
                if (_ztree) $.fn.zTree.destroy(this.options.id);
                $.fn.zTree.init(this.$el, options.setting, options.data);
                this.isLoaded = true;
            }
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

module.exports = Tree;
