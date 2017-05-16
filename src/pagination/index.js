import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Pagination extends Lego.UI.Baseview {
    constructor(opts = {}) {
        opts.events = {
            'click .prev:not(.disabled)': 'clickPrevPage',
            'click .page-item:not(.active)': 'clickItemPage',
            'click .next:not(.disabled)': 'clickNextPage',
            'click .morepage': 'clickMorePage',
            'keydown .info>input[type="text"]': '_enterSearch',
        };
        opts.data = opts.data || {};
        opts.current = opts.current || 1;
        opts.totalCount = opts.totalCount || 0;
        opts.totalPages = opts.totalPages || 0;
        opts.pageSize = opts.pageSize || 10;
        opts.pageRang = opts.pageRang || 10;
        opts.onChange = opts.onChange || function(){};
        opts.showSizeChanger = opts.showSizeChanger || true;
        opts.pageSizeOptions = opts.pageSizeOptions || [10, 20, 30, 40, 50];
        opts.onPageSizeChange = opts.onPageSizeChange || function(){};
        opts.showQuickJumper = opts.showQuickJumper || true;
        opts.size = opts.size || '';
        opts.simple = opts.simple || null;
        opts.isShowTotal = opts.isShowTotal || true;
        super(opts);
        // let defaults = {
        //     current: 1, //当前页数
        //     totalCount: 0, //数据总数
        //     totalPages: 0,  //总页数
        //     pageSize: 10,    //每页条数
        //     pageRang: 10,   //每页分页范围
        //     onChange(){},    //页码改变的回调，参数是改变后的页码
        //     showSizeChanger: true,    //是否可以改变 pageSize
        //     pageSizeOptions: [10, 20, 30, 40, 50],   //指定每页可以显示多少条
        //     onPageSizeChange(){},    //pageSize 变化的回调
        //     showQuickJumper: true,    //是否可以快速跳转至某页
        //     size: '',    //当为「small」时，是小尺寸分页
        //     simple: null,    //当添加该属性时，显示为简单分页
        //     isShowTotal: true  //用于显示数据总量和当前数据顺序
        // };
        this.jumped = false;
    }
    components(){
        let opts = this.options,
            that = this;
        if(!opts.simple && opts.showSizeChanger){
            let theData = opts.pageSizeOptions.map(val => {
                return {
                    key: val,
                    value: val + ' / 页'
                };
            });
            this.addCom({
                el: '#dropdown-' + opts.vid,
                container: '#select-' + opts.vid,
                direction: 'top',
                data: theData,
                onChange(self, result){
                    const num = parseInt(result.key);
                    this.context.options.current = 1;
                    this.context.options.pageSize = num;
                    this.context.options.onPageSizeChange(that, num);
                }
            });
        }
    }
    render() {
        let opts = this.options,
            vDom = hx`<div></div>`,
            current = parseInt(opts.current),
            pageRang = parseInt(opts.pageRang),
            totalCount = val(opts.totalCount);
        opts.totalPages = Math.ceil(totalCount / opts.pageSize);
        pageRang = pageRang >= opts.totalPages ? opts.totalPages : pageRang;
        let baseTimes = pageRang ? Math.floor((current - 1) / pageRang) : 0,
            startPage = baseTimes * pageRang + 1,
            endPage = startPage + pageRang - 1,
            showEllipsis = Math.ceil(current / pageRang) !== Math.ceil(opts.totalPages / pageRang) && totalCount ? true : false,
            pagesArr = [];
        endPage = endPage >= opts.totalPages ? opts.totalPages : endPage;
        for(let i = startPage; i <= endPage; i++) {
            pagesArr.push(i);
        }
        vDom = hx`
        <ul class="lego-pagination ${opts.simple ? 'pagination-simple' : ''} ${opts.size == 'small' ? 'mini' : ''}">
            <li class="prev ${ current <= 1 ? 'disabled' : ''}">
                <a href="javascript:void(0)" title="上一页"><i class="anticon anticon-left"></i></a>
            </li>
            ${opts.simple ? hx`
            <div title="${current}/${opts.endPage}" class="lego-pagination-simple-pager">
                <input type="text" value="${current}"><span class="lego-pagination-slash">／</span>
            </div>
            ` : ''}
            ${!opts.simple ? pagesArr.map(x => hx`
            <li title="${x}" class="page page-item ${ x == current ? 'active' : ''}"><a href="javascript:void(0)">${x}</a></li>
            `) : ''}
            ${showEllipsis ? hx`
            <li title="下 ${opts.pageSize} 页" class="page morepage"><a href="javascript:void(0)"><i class="anticon anticon-ellipsis"></a></i></li>
            ` : ''}
            ${!opts.simple && showEllipsis ? hx`<li title="${opts.totalPages}" class="page page-item"><a href="javascript:void(0)">${opts.totalPages}</a></li>` : ''}
            ${!opts.simple ? hx`
            <li class="next ${ current >= opts.totalPages ? 'disabled' : ''}">
                <a href="javascript:void(0)" title="下一页"><i class="anticon anticon-right"></i></a>
            </li>
            ` : ''}
            ${!opts.simple && opts.showSizeChanger ? hx`
            <li class="pageSize">
                <span class="info" id="select-${opts.vid}">
                    <button class="btn dropdown-toggle" type="button" style="padding: 3px 10px;">${opts.pageSize} / 页 </button>
                    <dropdown id="dropdown-${opts.vid}"></dropdown>
                </span>
            </li>
            ` : ''}
            ${!opts.simple && opts.showQuickJumper ? hx`
            <li><span class="info">
                    跳转至
                    <input type="text" class="form-control pageJump" value="${this.jumped ? current : '1'}">
                </span>
                ${opts.isShowTotal ? hx`
                <span class="info">
                ${typeof opts.showTotal === 'function' ? opts.showTotal(totalCount) : ('总数 ' + totalCount)}
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
        const opts = this.options;
        // debug.warn('点击了上一页');
        opts.current--;
        opts.onChange(this, opts.current, opts.pageSize);
    }
    clickItemPage(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            num = target.attr('title');
        const opts = this.options;
        // debug.warn('点击了第' + num + '页');
        opts.current = num;
        opts.onChange(this, num, opts.pageSize);
    }
    clickNextPage(event){
        event.stopPropagation();
        const opts = this.options;
        // debug.warn('点击了下一页');
        opts.current++;
        opts.onChange(this, opts.current, opts.pageSize);
    }
    clickMorePage(event){
        event.stopPropagation();
        const opts = this.options;
        let current = parseInt(opts.current),
            pageRang = parseInt(opts.pageRang),
            currentMod = current % pageRang ? current % pageRang : pageRang;
        // debug.warn('点击了更多页');
        opts.current = current + (pageRang - currentMod + 1);
        if(opts.current > opts.totalPages) opts.current = opts.totalPages;
        opts.onChange(this, opts.current, opts.pageSize);
    }
    _enterSearch(event) {
        const target = $(event.currentTarget);
        const opts = this.options;
        let num = target.val();
        if (event.keyCode == 13) {
            if(num > opts.totalPages) num = opts.totalPages;
            if(!Number(num)) num = 1;
            this.jumped = true;
            opts.current = num;
            opts.onChange(this, num, opts.pageSize);
        }
    }
}
Lego.components('pagination', Pagination);
export default Pagination;
