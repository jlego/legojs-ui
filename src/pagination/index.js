import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Pagination extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .prev:not(.disabled)': 'clickPrevPage',
                'click .page-item': 'clickItemPage',
                'click .next:not(.disabled)': 'clickNextPage',
                'click .morepage': 'clickMorePage',
                'keydown .info>input[type="text"]': '_enterSearch',
            },
            current: 1, //当前页数
            total: 0, //数据总数
            totalPages: 0,  //总页数
            pageSize: 10,    //每页条数
            pageRang: 10,   //每页分页范围
            onChange(){},    //页码改变的回调，参数是改变后的页码
            showSizeChanger: false,    //是否可以改变 pageSize
            pageSizeOptions: [10, 20, 30, 40, 50],   //指定每页可以显示多少条
            onPageSizeChange(){},    //pageSize 变化的回调
            showQuickJumper: false,    //是否可以快速跳转至某页
            size: '',    //当为「small」时，是小尺寸分页
            simple: null,    //当添加该属性时，显示为简单分页
            isShowTotal: true,  //用于显示数据总量和当前数据顺序
            // showTotal(){}
        };
        Object.assign(options, opts);
        if(!options.simple && options.showSizeChanger){
            let theData = options.pageSizeOptions.map(val => {
                return {
                    key: val,
                    value: val + ' / 页'
                };
            });
            options.components = [{
                el: '#' + opts.vid + '-dropdown',
                trigger: '#' + opts.vid + '-select',
                data: theData,
                onChange(result){
                    const theView = Lego.getView(opts.el);
                    const num = parseInt(result.key);
                    if(theView){
                        theView.options.current = 1;
                        theView.options.pageSize = num;
                        theView.options.onPageSizeChange(num);
                    }
                }
            }];
        }
        super(options);
        this.jumped = false;
    }
    render() {
        const options = this.options || {};
        let totalCount = typeof options.total === 'function' ? options.total() : options.total;
        options.totalPages = Math.ceil(totalCount / options.pageSize);
        options.pageRang = options.pageRang > options.totalPages ? options.totalPages : options.pageRang;
        let baseTimes = options.pageRang ? Math.floor((options.current - 1) / options.pageRang) : 0,
            startPage = baseTimes * options.pageRang + 1,
            endPage = startPage + options.pageRang - 1,
            showEllipsis = options.totalPages - options.current >= options.pageRang ? true : false,
            pagesArr = [];
        endPage = endPage <= 0 ? 1 : endPage;
        endPage = endPage > options.totalPages ? options.totalPages : endPage;
        for(let i = startPage; i <= endPage; i++) {
            pagesArr.push(i);
        }
        const vDom = hx`
        <ul class="pagination ${options.simple ? 'pagination-simple' : ''} ${options.size == 'small' ? 'mini' : ''}">
            <li class="prev ${ options.current <= 1 ? 'disabled' : ''}">
                <a href="javascript:void(0)" title="上一页"><i class="icon iconfont icon-arrow-left"></i></a>
            </li>
            ${options.simple ? hx`
            <div title="${options.current}/${options.endPage}" class="lego-pagination-simple-pager">
                <input type="text" value="${options.current}"><span class="lego-pagination-slash">／</span>
            </div>
            ` : ''}
            ${!options.simple ? pagesArr.map(x => hx`
            <li title="${x}" class="page page-item ${ x == options.current ? 'active' : ''}"><a href="javascript:void(0)">${x}</a></li>
            `) : ''}
            ${showEllipsis ? hx`
            <li title="下 ${options.pageSize} 页" class="page morepage"><a href="javascript:void(0)"><i class="icon iconfont icon-more-1"></a></i></li>
            ` : ''}
            ${!options.simple && showEllipsis ? hx`<li title="${options.totalPages}" class="page page-item"><a href="javascript:void(0)">${options.totalPages}</a></li>` : ''}
            ${!options.simple ? hx`
            <li class="next ${ options.current >= options.totalPages ? 'disabled' : ''}">
                <a href="javascript:void(0)" title="下一页"><i class="icon iconfont icon-arrow-right"></i></a>
            </li>
            ` : ''}
            ${!options.simple && options.showSizeChanger ? hx`
            <li class="pageSize">
                <span class="info" id="${options.vid}-select">
                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">${options.pageSize} / 页 </button>
                    <dropdown id="${options.vid}-dropdown"></dropdown>
                </span>
            </li>
            ` : ''}
            ${!options.simple && options.showQuickJumper ? hx`
            <li><span class="info">
                    跳转至
                    <input type="text" class="form-control pageJump" value="${this.jumped ? options.current : '1'}">
                </span>
                ${options.isShowTotal ? hx`
                <span class="info">
                ${typeof options.showTotal === 'function' ? options.showTotal(totalCount) : ('总数 ' + totalCount)}
                </span>
                ` : ''}
            </li>
            ` : ''}
        </ul>
        `;
        this.jumped = false;
        return vDom;
    }
    clickPrevPage(event){
        event.stopPropagation();
        const options = this.options;
        console.warn('点击了上一页');
        options.current--;
        options.onChange(options.current, options.pageSize);
    }
    clickItemPage(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            num = target.attr('title');
        const options = this.options;
        console.warn('点击了' + num + '页');
        options.current = num;
        options.onChange(num, options.pageSize);
    }
    clickNextPage(event){
        event.stopPropagation();
        const options = this.options;
        console.warn('点击了下一页');
        options.current++;
        options.onChange(options.current, options.pageSize);
    }
    clickMorePage(event){
        event.stopPropagation();
        const options = this.options;
        let current = parseInt(options.current),
            pageRang = parseInt(options.pageRang),
            currentMod = current % pageRang ? current % pageRang : pageRang;
        console.warn('点击了更多页');
        options.current = current + (pageRang - currentMod + 1);
        if(options.current > options.totalPages) options.current = options.totalPages;
        options.onChange(options.current, options.pageSize);
    }
    _enterSearch(event) {
        const target = $(event.currentTarget);
        const options = this.options;
        let num = target.val();
        if (event.keyCode == 13) {
            if(num > options.totalPages) num = options.totalPages;
            this.jumped = true;
            options.current = num;
            options.onChange(num, options.pageSize);
        }
    }
}
Lego.components('pagination', Pagination);
export default Pagination;
