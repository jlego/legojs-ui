import './asset/index.scss';
import Dropdown from '../dropdown/index';
Lego.components('dropdown', Dropdown);

class Pagination extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-pagination-prev:not(.lego-pagination-disabled)': 'clickPrevPage',
                'click .lego-pagination-item': 'clickItemPage',
                'click .lego-pagination-next:not(.lego-pagination-disabled)': 'clickNextPage',
                'click .lego-pagination-jump-next': 'clickMorePage',
                'keydown .lego-pagination-options-quick-jumper>input': '_enterSearch',
            },
            current: 1, //当前页数
            total: 0, //数据总数
            totalPages: 0,  //总页数
            pageSize: 10,    //每页条数
            pageRang: 10,   //每页分页范围
            onChange(){},    //页码改变的回调，参数是改变后的页码
            showSizeChanger: false,    //是否可以改变 pageSize
            pageSizeOptions: [10, 20, 30, 40, 50],   //指定每页可以显示多少条
            onShowSizeChange(){},    //pageSize 变化的回调
            showQuickJumper: false,    //是否可以快速跳转至某页
            size: '',    //当为「small」时，是小尺寸分页
            simple: null,    //当添加该属性时，显示为简单分页
            showTotal(){},  //用于显示数据总量和当前数据顺序
        };
        Object.assign(options, opts);
        if(!options.simple && options.showSizeChanger){
            let theData = options.pageSizeOptions.map(val => {
                return {
                    key: val,
                    title: val + ' / 页'
                };
            });
            options.components = [{
                el: '#' + options.vid + '-dropdown',
                trigger: '#' + options.vid + '-select',
                data: theData,
                onChange(result){
                    Lego.getView(options.vid).options.current = 1;
                    Lego.getView(options.vid).options.pageSize = parseInt(result);
                }
            }];
        }
        super(options);
        this.jumped = false;
    }
    render() {
        const options = this.options || {};
        options.totalPages = Math.ceil(options.total / options.pageSize);
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
        <ul class="lego-pagination lego-table-pagination ${options.simple ? 'lego-table-simple' : ''} ${options.size == 'small' ? 'mini' : ''}">
            <li title="上一页" class="lego-pagination-prev ${ options.current <= 1 ? 'lego-pagination-disabled' : ''}">
                <a></a>
            </li>
            ${options.simple ? hx`
            <div title="${options.current}/${options.endPage}" class="lego-pagination-simple-pager">
                <input type="text" value="${options.current}"><span class="lego-pagination-slash">／</span>
            </div>
            ` : ''}
            ${!options.simple ? pagesArr.map(x => hx`
            <li title="${x}" class="lego-pagination-item ${ x == options.current ? 'lego-pagination-item-active' : ''}"><a>${x}</a></li>
            `) : ''}
            ${showEllipsis ? hx`
            <li title="下 ${options.pageSize} 页" class="lego-pagination-jump-next">
                <a></a>
            </li>
            ` : ''}
            ${!options.simple && showEllipsis ? hx`<li title="${options.totalPages}" class="lego-pagination-item"><a>${options.totalPages}</a></li>` : ''}
            ${!options.simple ? hx`
            <li title="下一页" class=" lego-pagination-next ${ options.current >= options.totalPages ? 'lego-pagination-disabled' : ''}">
                <a></a>
            </li>
            ` : ''}
            ${!options.simple ? hx`
            <div class="lego-pagination-options">
                ${options.showSizeChanger ? hx`
                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled" id="${options.vid}-select">
                    <div class="lego-select-selection lego-select-selection-single">
                        <div class="lego-select-selection__rendered">
                            <div class="lego-select-selection-selected-value" title="${options.pageSize} / 页" style="display: block; opacity: 1;">
                            ${options.pageSize} / 页</div>
                        </div>
                        <span class="lego-select-arrow" style="user-select: none;"><b></b></span>
                    </div>
                    <dropdown id="${options.vid}-dropdown"></dropdown>
                </div>
                ` : ''}
                ${options.showQuickJumper ? hx`
                <div class="lego-pagination-options-quick-jumper">
                    跳转至
                    <input type="text" value="${this.jumped ? options.current : '1'}">
                </div>
                ` : ''}
                ${options.showTotal ? hx`<span class="lego-pagination-total-text">
                ${typeof options.showTotal === 'function' ? options.showTotal(options.total) : ('总数' + options.total)}
                </span>` : ''}
            </div>
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
export default Pagination;
