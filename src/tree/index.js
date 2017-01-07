/**
 * 树型
 * ronghui Yu
 * 2017/1/7
 */
import ztree from 'ztree';
import 'ztree/css/awesomeStyle/awesome.css';
// import './asset/index.scss';

class Tree extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            setting: {
                check: {
                    // enable: true,
                    // chkStyle: "radio",
                    // radioType: "level"
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    // beforeClick: beforeClick,
                    // onCheck: onCheck
                }
            }
        };
        Object.assign(options, opts);
        super(options);
        $.fn.zTree.init(this.$el, this.options.setting, this.options.data);
    }
    render() {
        return hx`<ul></ul>`;
    }
    // 取消选择
    clearChecked(field, data) {
        const ztree = $.fn.zTree.getZTreeObj(this.options.id);
        if (data.treeId) {
            const node = ztree.getNodeByParam(field, data.treeId, null);
            if (node) {
                ztree.checkNode(node, false, false);
            }
        }
    }
}
Lego.components('tree', Tree);
export default Tree;
