/**
 * 树型
 * ronghui Yu
 * 2017/1/7
 */
import ztree from 'ztree';
// import 'ztree/js/jquery.ztree.exhide.min';
import './asset/index.scss';

class Tree extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            disSelect: '', //禁止选择含有该属性节点, 可以是对象
            onlySelect: '', //只选择含有该属性节点, 可以是对象
            setting: {},
            value: [],
            data: [],
            onChecked() {},
            onClick() {}
        };
        $.extend(true, options, opts);
        super(options);
    }
    components() {
        const opts = this.options,
            that = this;
        function selectOrNo(treeNode) {
            if (opts.disSelect) {
                if(typeof opts.disSelect == 'object'){
                    if(treeNode[Object.keys(opts.disSelect)[0]] == Object.values(opts.disSelect)[0]) return false;
                }else{
                    if (Object.keys(treeNode).includes(opts.disSelect)) return false;
                }
            }
            if (opts.onlySelect) {
                if(typeof opts.onlySelect == 'object'){
                    if(treeNode[Object.keys(opts.onlySelect)[0]] !== Object.values(opts.onlySelect)[0]) return false;
                }else{
                    if (!Object.keys(treeNode).includes(opts.onlySelect)) return false;
                }
            }
            return true;
        }
        function selectResult(treeId, treeNode){
            let treeObj = $.fn.zTree.getZTreeObj(treeId),
                nodes = treeObj.getCheckedNodes(true),
                result = nodes.filter((node) => {
                    return selectOrNo(node);
                });
            let newValue = [];
            result.forEach((val, index) => {
                newValue.push(Object.assign({
                    key: val.id,
                    value: val.name
                }, val));
            });
            if (typeof opts.onChecked == 'function') opts.onChecked(that, newValue, treeNode);
        }
        if (opts.setting.check) {
            opts.setting.check = $.extend(true, {
                enable: true,
                chkboxType: { "Y": "", "N": "" }
            }, opts.setting.check || {});
            opts.setting.callback = Object.assign(opts.setting.callback || {}, {
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
            opts.setting.callback = Object.assign(opts.setting.callback || {}, {
                onClick: function(event, treeId, treeNode) {
                    if (!selectOrNo(treeNode)) return false;
                    if (typeof opts.onClick == 'function') opts.onClick(that, Object.assign({
                        key: treeNode.id,
                        value: treeNode.name
                    }, treeNode));
                }
            });
        }
        if(opts.data.length){
            this.renderTree();
        }
    }
    render() {
        return hx `<ul class="lego-tree"></ul>`;
    }
    renderTree(){
        let opts = this.options,
            treeObj = $.fn.zTree.getZTreeObj(opts.id);
        if(treeObj) treeObj.destroy();
        $.fn.zTree.init(this.$el, opts.setting, opts.data);
    }
    //搜索树
    search(keyword = ''){
        this.$('li').hide();
        if(keyword == ''){
            this.$('li').show();
        }else{
            this.$('span.node_name').each(function(index, el) {
                if($(el).text().indexOf(keyword) > -1){
                    $(el).parents('li').show();
                }
            });
        }
    }
    // 取消选择
    clearChecked(key, value) {
        let opts = this.options,
            ztree = $.fn.zTree.getZTreeObj(opts.id),
            node = ztree.getNodeByParam(key, value, null);
        if (node) {
            ztree.checkNode(node, false, false);
        }
    }
}
Lego.components('tree', Tree);
export default Tree;
