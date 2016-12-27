// import { Alert } from 'lego-ui';
import Table from '../../../../dist/Table';

Lego.components('table', Table);

class TableView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const theData = [];
        for(let i = 0; i < 10; i++){
            theData.push({
                key: i,
                name: '胡彦斌' + i,
                age: 32 + i,
                // disabled: true,
                address: '西湖区湖底公园1号'
            });
        }
        const options = {
            components: [{
                el: '#table1',
                className: 'table-striped',
                rowSelection: {
                    type: 'checkbox'
                },
                pagination: {

                },
                // bordered: true,
                showHeader: true, //是否显示表头
                // showFooter: true, //是否显示表尾
                title(){
                    return '表格标题';
                },
                footer(){
                    return '表格尾部';
                },
                data: theData,
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    filter(col){
                        console.warn('点击了筛选', col);
                    },
                    // isHide: true
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                    onCellClick(row, col){
                        console.warn(row, col);
                    },
                    filter(col){
                        console.warn('点击了筛选', col);
                    },
                    sorter(col){
                        console.warn('点击了排序', col);
                    }
                }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                }],
            }]
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent">
            <table id="table1"></table>
        </div>
        `;
        return vDom;
    }
}
export default TableView;
