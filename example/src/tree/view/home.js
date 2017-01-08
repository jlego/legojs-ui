import Tree from '../../../../dist/Tree';
import Treeselect from '../../../../dist/Treeselect';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#tree1',
                onChecked(result){
                    console.warn('选中了节点', result);
                },
                onClick(result){
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
                setting: {
                    check: {
                        enable: true
                    }
                },
                onChecked(result){
                    console.warn('选中了节点', result);
                },
                onClick(result){
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
                        { name: "test2_1" }, { name: "test2_2" }
                    ]
                }]
            }, {
                el: '#tree3',
                setting: {
                    check: {
                        enable: true,
                        chkStyle: "radio"
                    }
                },
                onChecked(result){
                    console.warn('选中了节点', result);
                },
                onClick(result){
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
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                onChecked(result){
                    console.warn('选中了节点', result);
                },
                onClick(result){
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
                setting: {
                    check: {
                        enable: true,
                        // chkStyle: "radio"
                    }
                },
                onChange(result) {
                    console.warn('点击了树型选项框1', result);
                },
                // value: {
                //     key: 'so2',
                //     value: '选项二选项二选项二'
                // },
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
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree2_1',name: "test2_2" }
                    ]
                }]
            }, {
                el: '#treeselect2',
                placeholder: '请选择',
                multiple: true,
                setting: {
                    check: {
                        enable: true,
                        chkStyle: "radio"
                    }
                },
                onChange(result) {
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
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree2_1',name: "test2_2" }
                    ]
                }]
            }, {
                el: '#treeselect3',
                placeholder: '请选择',
                setting: {
                    check: {
                        enable: true
                    }
                },
                onChange(result) {
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
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree2_1',name: "test2_2" }
                    ]
                }]
            }, {
                el: '#treeselect4',
                placeholder: '请选择',
                onChange(result) {
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
                        { id: 'tree2_1',name: "test2_1" }, { id: 'tree2_1',name: "test2_2" }
                    ]
                }]
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
        </div>
        `;
        return vDom;
    }
}
export default HomeView;