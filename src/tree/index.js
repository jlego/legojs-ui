/**
 * 树型
 * ronghui Yu
 * 2017/1/7
 */
import ztree from 'ztree';
import './asset/index.scss';

class Tree extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            disSelect: '', //禁止选择含有该属性节点, 可以是对象
            onlySelect: '', //只选择含有该属性节点, 可以是对象
            setting: {
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    // beforeClick: beforeClick,
                    // onCheck: onCheck
                }
            },
            keyNames: ['id', 'name', 'type'],
            value: [],
            data: [],
            onChecked() {},
            onClick() {}
        };
        Object.assign(options, opts);
        super(options);
    }
    components() {
        const options = this.options,
            that = this;
        function selectOrNo(treeNode) {
            if (options.disSelect) {
                if (Object.keys(treeNode).includes(options.disSelect)) return false;
            }
            if (options.onlySelect) {
                if (!Object.keys(treeNode).includes(options.onlySelect)) return false;
            }
            return true;
        }
        function selectResult(treeId, treeNode){
            let treeObj = $.fn.zTree.getZTreeObj(treeId),
                nodes = treeObj.getCheckedNodes(true),
                keyNames = options.keyNames,
                result = nodes.filter((node) => {
                    return selectOrNo(node);
                });
            let newValue = [];
            result.forEach((val, index) => {
                newValue.push(Object.assign({
                    key: val[keyNames[0]],
                    value: val[keyNames[1]],
                    type: val[keyNames[2]]
                }, val));
            });
            if (typeof options.onChecked == 'function') options.onChecked(that, newValue);
        }
        if (options.setting.check) {
            options.setting.check = $.extend(true, {
                enable: true,
                chkboxType: { "Y": "", "N": "" }
            }, options.setting.check || {});
            options.setting.callback = Object.assign(options.setting.callback || {}, {
                onCheck: function(event, treeId, treeNode) {
                    selectResult(treeId, treeNode);
                },
                onClick: function(event, treeId, treeNode) {
                    if (!selectOrNo(treeNode)) return false;
                    let treeObj = $.fn.zTree.getZTreeObj(treeId);
                    treeObj.checkNode(treeNode, null, true);
                    selectResult(treeId, treeNode);
                }
            });
        } else {
            options.setting.callback = Object.assign(options.setting.callback || {}, {
                onClick: function(event, treeId, treeNode) {
                    if (!selectOrNo(treeNode)) return false;
                    if (typeof options.onClick == 'function') options.onClick(that, Object.assign({
                        key: treeNode[options.keyNames[0]],
                        value: treeNode[options.keyNames[1]],
                        type: treeNode[options.keyNames[2]]
                    }, treeNode));
                }
            });
        }
        if(options.data.length){
            let ztree = $.fn.zTree.getZTreeObj(this.options.id);
            if(!ztree) $.fn.zTree.init(this.$el, options.setting, options.data);
        }
    }
    render() {
        return hx `<ul class="lego-tree"></ul>`;
    }
    // 取消选择
    clearChecked(key, value) {
        let ztree = $.fn.zTree.getZTreeObj(this.options.id);
        let node = ztree.getNodeByParam(key, value, null);
        if (node) {
            ztree.checkNode(node, false, false);
        }
    }
}
Lego.components('tree', Tree);
export default Tree;
