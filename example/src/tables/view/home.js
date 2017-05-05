import Form from './form';

let table = `
| 属性    |    说明   |      类型 |      默认值 |
|:------|:-------:|--------:|--------:|
| isNowrap | 表格内容不换行 | boolean | true |
| rowSelection   | 列表行是否可选择  | Object | null |
| pagination   | 分页器，配置项参考 pagination，设为 false 时不展示和进行分页  | Object | null |
| size   | 正常或迷你类型，sm lg  | Boolean |  |
| columns   | 表格列的配置描述，具体项见下表  | Array/Function | [] |
| rowClassName   | 表格行的类名  | String |  |
| expandedRowKeys   | 默认展开的行  | Array | [] |
| expandAllRows   | 是否展开所有行  | Boolean | false |
| loading   | 页面是否加载中  | Boolean | false |
| locale   | 默认文案设置  | Object |  |
| bordered   | 是否展示外边框和列边框  | Boolean | false |
| fixedHeader   | 是否固定表头  | Boolean | true |
| showHeader   | 是否显示表头  | Boolean | false |
| showBodyer   | 是否显示表体  | Boolean | true |
| showFooter   | 是否显示表尾  | Boolean | false |
| showSetting   | 是否显示设置  | Boolean | false |
| footer   | 返回表格尾部  | String/Function |  |
| title   | 表格标题  | String/Function |  |
| scroll   | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{ x: true, y: 300 }  | Object |  |
| onExpandRow   | 点击展开图标时触发  | Function |  |
| onChange   | 分页、排序、筛选变化时触发  | Function |  |
| onSelect   | 点击选中行时回调  | Function |  |
| onSetting   | 点击表格设置按钮时回调  | Function |  |
| onRowClick   | 处理行点击事件  | Function |  |
`;

function getData(currentPage = 1){
    const theData = [];
    for(let i = (currentPage - 1) * 20; i < currentPage * 20; i++){
        theData.push({
            key: i,
            name: '胡彦斌' + i,
            age: 32 + i,
            address: '西湖区湖底公园1号'
        });
    }
    return theData;
}

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {
            scrollbar: {},
            listener: {
                'updateView': (data = {})=>{
                    let view = Lego.getView('#exampleCom'),
                        tView = Lego.getView('#tabs'),
                        pView = Lego.getView('#pageContent');
                    if(view){
                        Object.assign(view.options, data);
                    }
                    if(tView){
                        if(tView.options.activeKey == 'tab_3') pView.showTab();
                    }
                }
            }
        };
        Object.assign(options, opts);
        super(options);
        let that = this;
        setTimeout(function(){
            that.renderScroll();
        }, 0);
        let view = Lego.getView('#exampleCom');
        this.oldOpts = view ? $.extend(true, {}, view.options) : {};
    }
    components(){
        let that = this;
        this.addCom([{
            el: '#tabs',
            type: 'tabs',
            activeKey: 'tab_1',
            navClassName: 'nav-fill',
            data: [{
                key: 'tab_1',
                value: '参数说明',
                content: hx`<div class="markdown scrollbar">
                    <h6>效果图:</h6>
                    <img src="${Lego.config.rootUri}img/example/tables.png" style="margin-bottom:30px;">
                    <h6>参数:</h6>
                    ${hx(markdown.makeHtml(table))}
                    </div>`
            }, {
                key: 'tab_2',
                value: '实例效果',
                content: hx`<div class="example scrollbar"><tables id="exampleCom"></tables></div>`
            }, {
                key: 'tab_3',
                value: '生成代码',
                content: hx`<div class="code scrollbar" id="md"></div>`
            }],
            onChange(self, result){
                if(result.key == 'tab_3'){
                    that.showTab();
                }
            },
            components: [{
                el: '#exampleCom',
                style: {
                    height: '100%'
                },
                className: 'table-striped',
                pagination: {
                    totalCount: 300,
                    pageRang: 5,
                    pageSize: 20,
                    onChange(self, num){
                        let view = Lego.getView('#exampleCom');
                        view.options.data = getData(num);
                        view.refresh();
                    }
                },
                showHeader: true,
                data: getData(),
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    width: '400px',
                    filter(self, col){
                        console.warn('点击了筛选', col);
                    }
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    width: '300px',
                    onCellClick(self, row, col){
                        console.warn(row, col);
                    },
                    filter(self, col, event){
                        console.warn('ffffffffff');
                    },
                    sorter(self, col){
                        console.warn('点击了排序', col);
                    }
                }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                    width: '300px',
                }],
            }]
        }, {
            el: '#formcom'
        }]);
    }
    showTab(){
        let theComView = Lego.getView('#exampleCom');
        if(theComView){
            this.$('#md').html(markdown.makeHtml(Lego.Ux.Util.getObjStr(theComView.options, this.oldOpts)));
            setTimeout(function(){
                this.$('pre').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            }, 0);
        }
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="height:100%">
            <div class="col-sm-8" style="height:100%">
                <div class="page-panel-bg col-left">
                    <tabs id="tabs"></tabs>
                </div>
            </div>
            <div class="col-sm-4" style="height:100%">
                <formcom id="formcom"></formcom>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
