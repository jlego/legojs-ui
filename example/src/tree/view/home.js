import Data from '../data/data';
// import Treeselect from '../../../../dist/treeselect';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#tree1',
                onChecked(self, result){
                    console.warn('选中了节点', result);
                },
                onClick(self, result){
                    console.warn('点击了节点', result);
                },
                data: [{
                    name: "test1",
                    open: true,
                    children: [
                        { name: "test1_1" }, { name: "test1_2" }
                    ]
                }, {
                    name: "test2",
                    open: true,
                    children: [
                        { name: "test2_1" }, { name: "test2_2" }
                    ]
                }]
            }, {
                el: '#tree2',
                treeSetting: {
                    check: {
                        enable: true
                    }
                },
                onChecked(self, result){
                    console.warn('选中了节点', result);
                },
                onClick(self, result){
                    console.warn('点击了节点', result);
                },
                data: [{
                    name: "test1",
                    checked: true,
                    open: true,
                    children: [{
                        name: "test1_1",
                        checked: true
                    }, {
                        name: "test1_2",
                        checked: true
                    }]
                }, {
                    name: "test2",
                    open: true,
                    checked: true,
                    children: [
                        { name: "test2_1", chkDisabled: true }, { name: "test2_2", chkDisabled: true }
                    ]
                }]
            }, {
                el: '#tree3',
                treeSetting: {
                    check: {
                        enable: true,
                        chkStyle: "radio"
                    }
                },
                onChecked(self, result){
                    console.warn('选中了节点', result);
                },
                onClick(self, result){
                    console.warn('点击了节点', result);
                },
                data: [{
                    name: "test1",
                    open: true,
                    children: [{
                        name: "test1_1",
                        checked: true
                    }, {
                        name: "test1_2"
                    }]
                }, {
                    name: "test2",
                    open: true,
                    checked: true,
                    children: [
                        { name: "test2_1" }, { name: "test2_2" }
                    ]
                }]
            }, {
                el: '#tree4',
                view: {
                    showIcon: false
                },
                treeSetting: {
                    data: {
                        simpleData: {
                            enable: true
                        }
                    }
                },
                onChecked(self, result){
                    console.warn('选中了节点', result);
                },
                onClick(self, result){
                    console.warn('点击了节点', result);
                },
                data: [{
                    name: "test1",
                    open: true,
                    iconSkin: "folder",
                    children: [{
                        name: "test1_1",
                        iconSkin: "folder"
                    }, {
                        name: "test1_2",
                        iconSkin: "folder"
                    }]
                }, {
                    name: "test2",
                    open: true,
                    iconSkin: "folder",
                    children: [
                        { name: "test2_1" }, { name: "test2_2" }
                    ]
                }]
            }, {
                el: '#treeselect1',
                placeholder: '请选择',
                multiple: true,
                // dropdownHeight: 80,
                showSearch: true,
                onChange(self, result) {
                    console.warn('点击了树型选项框1', result, self);
                },
                data: [{
                    id: 'a1',
                    name: "test1",
                    open: true,
                    children: [{
                        id: 'a1_1',
                        name: "test1_1",
                        checked: true
                    }, {
                        id: 'a1_2',
                        name: "test1_2"
                    }]
                }, {
                    id: 'a2',
                    name: "test2",
                    open: true,
                    checked: true,
                    children: [
                        { id: 'a2_1',name: "test2_1" }, { id: 'a3_1',name: "test3_2" }
                    ]
                }]
            }, {
                el: '#treeselect2',
                placeholder: '请选择',
                multiple: true,
                treeSetting: {
                    check: {
                        enable: true,
                        chkStyle: "radio"
                    }
                },
                onChange(self, result) {
                    console.warn('点击了树型选项框2', result);
                },
                value: {
                    key: 'tree1_1',
                    value: 'test1_1'
                },
                data: [{
                    id: 'tree1',
                    name: "test1",
                    open: true,
                    children: [{
                        id: 'tree1_1',
                        name: "test1_1",
                        checked: true
                    }, {
                        id: 'tree1_2',
                        name: "test1_2"
                    }]
                }, {
                    id: 'tree2',
                    name: "test2",
                    open: true,
                    checked: true,
                    children: [
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree3_1',name: "test3_2" }
                    ]
                }]
            }, {
                el: '#treeselect3',
                placeholder: '请选择',
                multiple: true,
                onChange(self, result) {
                    console.warn('点击了树型选项框3', result);
                },
                data: [{
                    id: 'tree1',
                    name: "test1",
                    open: true,
                    children: [{
                        id: 'tree1_1',
                        name: "test1_1"
                    }, {
                        id: 'tree1_2',
                        name: "test1_2"
                    }]
                }, {
                    id: 'tree2',
                    name: "test2",
                    open: true,
                    children: [
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree3_1',name: "test3_2" }
                    ]
                }]
            }, {
                el: '#treeselect4',
                placeholder: '请选择',
                onChange(self, result) {
                    console.warn('点击了树型选项框3', result);
                },
                showSearch: true,
                dropdownHeight: 100,
                value: [{key: 'tree1_1', value: 'test1_1'}],
                data: [{
                    id: 'tree1',
                    name: "test1",
                    open: true,
                    children: [{
                        id: 'tree1_1',
                        name: "test1_1"
                    }, {
                        id: 'tree1_2',
                        name: "test1_2"
                    }]
                }, {
                    id: 'tree2',
                    name: "test2",
                    open: true,
                    children: [
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree3_1',name: "test3_2" }
                    ]
                }]
            }, {
                el: '#treeselect5',
                placeholder: '请选择',
                onChange(self, result) {
                    console.warn('点击了树型选项框5', result);
                },
                showSearch: true,
                dropdownHeight: 300,
                value: [{key: 2910001, value: '英雄联盟'}],
                dataSource: {
                    server: Data,
                    isAjax: true,
                    api: 'treedata'
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-3">
              <tree id="tree1"></tree>
            </div>
            <div class="col-sm-3">
              <tree id="tree2"></tree>
            </div>
            <div class="col-sm-3">
              <tree id="tree3"></tree>
            </div>
            <div class="col-sm-3">
              <tree id="tree4"></tree>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <treeselect id="treeselect1"></treeselect>
            </div>
            <div class="col-sm-6">
              <treeselect id="treeselect2"></treeselect>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <treeselect id="treeselect3"></treeselect>
            </div>
            <div class="col-sm-6">
              <treeselect id="treeselect4"></treeselect>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <treeselect id="treeselect5"></treeselect>
            </div>
            <div class="col-sm-6">
              <treeselect id="treeselect6"></treeselect>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
