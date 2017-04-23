// import Tables from '../../../../dist/tables';

class TableView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        function getData(currentPage = 1){
            const theData = [];
            for(let i = (currentPage - 1) * 20; i < currentPage * 20; i++){
                theData.push({
                    key: i,
                    name: '胡彦斌' + i,
                    age: 32 + i,
                    // disabled: true,
                    address: '西湖区湖底公园1号',
                    // render(value, row, col){
                    // }
                });
            }
            return theData;
        }
        const options = {
            components: [{
                el: '#theTable',
                className: 'table-striped',
                rowSelection: {
                    type: 'checkbox'
                },
                pagination(listView){
                    return {
                        totalCount: 300,
                        pageRang: 5,
                        pageSize: 20,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        onChange(self, num){
                            listView.options.data = getData(num);
                            listView.refresh();
                        }
                    };
                },
                // bordered: true,
                showHeader: true, //是否显示表头
                colSetting(){
                    console.warn('点击了列设置');
                },
                // showFooter: true, //是否显示表尾
                title(){
                    return '表格标题';
                },
                // footer(){
                //     return '表格尾部';
                // },
                style: {
                    height: '100%'
                },
                onSetting(self, event){
                    console.warn('dddddddddddddd');
                    // Lego.create(Modal, {
                    //     type: 'layer',
                    //     context: this,
                    //     title: '字段设置',
                    //     content: 'Designed and ',
                    //     width: 220,
                    //     showFooter: false,
                    //     onClose(self){
                    //         target.after('<layer id="' + theId + '"></layer>');
                    //     }
                    // });
                },
                data: getData(),
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    width: '400px',
                    filter(self, col){
                        console.warn('点击了筛选', col);
                    },
                    // isHide: true
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    width: '300px',
                    onCellClick(self, row, col){
                        console.warn(row, col);
                    },
                    filter(self, col, event){
                        // console.warn('点击了筛选', col, $(event.currentTarget));
                        Lego.UI.popover({
                            el: $(event.currentTarget),
                            content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
                            placement: 'bottom',
                            showNow: true,
                            onHidden() {
                                console.warn('隐藏提示2');
                            }
                        });
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
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" style="height:100%">
            <tables id="theTable"></tables>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        // Lego.UI.popover({
        //     el: '#popover2',
        //     title: '提示2',
        //     content: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。',
        //     placement: 'bottom',
        //     onHidden() {
        //         console.warn('隐藏提示2');
        //     }
        // });
    }
}
export default TableView;
