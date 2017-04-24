/**
 * 穿梭框
 * ronghui Yu
 * 2017/1/10
 * update: 2017/4/22
 * dataItem: {
 *  key: '', value: '', type: ''
 * }
 */
import './asset/index.scss';
import Listgroup from '../listgroup/index';
import Tree from '../tree/index';
import Search from '../search/index';

class Transfer extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click h5 > button': 'showSearch'
            },
            // type: 'list',   //类型tree
            titles: [], //标题
            value: [],
            data: [],
            width: 450, //宽度
            height: 400, //高度
            treeSetting: {},
            scrollbar: {},
            simpleData: true,
            filterParentNode: false,  //是否过滤父节点
            showSearch: false, //是否显示搜索框
            searchPlaceholder: '请输入搜索内容', //搜索框
            notFoundContent: '列表为空', //列表为空时显示的内容
            onChange() {}, //更改值时触发的事件
            onSearch(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    _mergeValue(){
        let opts = this.options;
        if(opts.value.length){
            opts.data.forEach((item, index) => {
                let hasOne = opts.value.find(val => val.key == (item.key || item.id));
                if(hasOne) item.checked = true;
            });
        }
    }
    dataReady(){
        this._mergeValue();
    }
    components(){
        let opts = this.options,
            that = this,
            listValue = [];
        function loopItem(data){
            that._mergeValue();
            data.map(item => {
                if(item.checked){
                    item.key = item.id || item.key;
                    item.value = item.name || item.name;
                    listValue.push($.extend(true, {}, item));
                    if(item.children){
                        loopItem(item.children);
                    }
                }
            });
            if(opts.filterParentNode){
                listValue = listValue.filter(item => !item.isParent);
            }
        }
        if(opts.data.length){
            loopItem(opts.data);
            this.addCom([{
                el: '#transfer_tree_' + opts.vid,
                setting: $.extend(true, {
                    check: {
                        enable: true,
                        chkboxType: { "Y": "ps", "N": "ps" }
                    }
                }, opts.treeSetting || {}),
                onChecked(self, result) {
                    let listView = Lego.getView('#transfer_list_' + opts.vid);
                    if(listView){
                        if(opts.filterParentNode){
                            result = result.filter(item => !item.isParent);
                        }
                        listView.options.data = Array.from(result);
                        listView.refresh();
                    }
                    if (typeof opts.onChange === 'function') opts.onChange(this.context, result);
                },
                data: opts.data
            }, {
                el: '#transfer_list_' + opts.vid,
                removeAble: true,
                onClose(self, result) {
                    let treeView = $.fn.zTree.getZTreeObj('transfer_tree_' + opts.vid);
                    if(treeView){
                        const treeNode = treeView.getNodeByParam('id', result, null);
                        treeView.checkNode(treeNode, !treeNode.checked, true);
                        if (typeof opts.onChange === 'function') opts.onChange(this.context, this.data);
                    }
                },
                data: listValue
            }]);
            if(opts.showSearch){
                this.addCom({
                    el: '#transfer_search_' + opts.vid,
                    style: {display: 'none'},
                    size: 'sm',
                    onSearch(self, result) {
                        if(typeof opts.search == 'function') opts.search(that, result);
                    }
                });
            }
        }
    }
    render() {
        const opts = this.options;
        const vDom = hx `
        <div class="row transfer">
            <div class="col-sm-6">
                <div class="transfer-col">
                    <h5>
                        ${opts.showSearch ? hx`<button class="btn btn-link float-right">搜索</button>` : ''}
                        <span>${val(opts.titles[0])}</span>
                    </h5>
                    ${opts.showSearch ? hx`<search id="transfer_search_${opts.vid}"></search>` : ''}
                    <div class="transfer-col-content">
                        <div class="scrollbar">
                            <tree id="transfer_tree_${opts.vid}"></tree>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="transfer-col">
                    <h5><span>${val(opts.titles[1])}</span></h5>
                    <div class="transfer-col-content">
                        <div class="scrollbar">
                            <listgroup id="transfer_list_${opts.vid}"></listgroup>
                        </div>
                    </div>
                </div>
            </div>
            <i class="anticon anticon-double-right"></i>
            <i class="anticon anticon-double-left"></i>
        </div>
        `;
        return vDom;
    }
    showSearch(event){
        const target = $(event.currentTarget);
        this.$('.lego-search').toggle(0, function(){
            if(target.text() == '取消'){
                target.text('搜索');
                $(this).next().css({paddingBottom: 40});
            }else{
                target.text('取消');
                $(this).next().css({paddingBottom: 74});
            }
        });
    }
    renderAfter() {
        const opts = this.options;
        this.$el.css({
            width: opts.width,
            height: opts.height
        });
    }
    getValue(){
        const listView = Lego.getView('#transfer_list_' + this.options.vid);
        if(listView){
            return listView.options.data;
        }
        return null;
    }
}
Lego.components('transfer', Transfer);
export default Transfer;
