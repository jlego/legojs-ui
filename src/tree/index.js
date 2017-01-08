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
            disSelect: null, //禁止选择含有该属性节点, 可以是对象
            onlySelect: null, //只选择含有该属性节点, 可以是对象
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
    render() {
        return hx `<ul class="ztree"></ul>`;
    }
    renderBefore() {
        const options = this.options,
            that = this;

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
                chkboxType: { "Y": "", "N": "" }
            }, options.setting.check || {});
            options.setting.callback = Object.assign(options.setting.callback || {}, {
                onCheck: function(event, treeId, treeNode) {
                    const treeObj = $.fn.zTree.getZTreeObj(treeId),
                        nodes = treeObj.getCheckedNodes(true),
                        keyNames = options.keyNames,
                        result = nodes.filter((node) => {
                            return selectOrNo(node);
                        });
                    const newValue = [];
                    result.forEach((val, index) => {
                        newValue.push({
                            key: val[keyNames[0]],
                            value: val[keyNames[1]],
                            type: val[keyNames[2]]
                        });
                    });
                    // options.value = newValue;
                    if (typeof options.onChecked == 'function') options.onChecked(newValue);
                }
            });
        } else {
            options.setting.callback = Object.assign(options.setting.callback || {}, {
                onClick: function(event, treeId, treeNode) {
                    if (!selectOrNo(treeNode)) return false;
                    if (typeof options.onClick == 'function') options.onClick({
                        key: treeNode[options.keyNames[0]],
                        value: treeNode[options.keyNames[1]],
                        type: treeNode[options.keyNames[2]]
                    });
                }
            });
        }
    }
    renderAfter() {
            const options = this.options;
            $.fn.zTree.init(this.$el, options.setting, options.data);
        }
        // 取消选择
    clearChecked(key, value) {
        const ztree = $.fn.zTree.getZTreeObj(this.options.id);
        const node = ztree.getNodeByParam(key, value, null);
        if (node) {
            ztree.checkNode(node, false, false);
        }
    }
}
Lego.components('tree', Tree);
export default Tree;