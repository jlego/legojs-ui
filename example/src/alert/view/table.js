// import { Alert } from 'lego-ui';
import Table from '../../../../dist/Table';

Lego.components('table', Table);

class TableView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#table1',
                className: '',
                rowSelection: {
                    type: 'checkbox'
                },
                bordered: true,
                showHeader: true, //是否显示表头
                showFooter: true, //是否显示表尾
                title(){
                    return '表格标题';
                },
                footer(){
                    return '表格尾部';
                },
                data: [{
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号'
                }, {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                }],
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
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
