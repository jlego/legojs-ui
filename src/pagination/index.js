import './asset/index.scss';

class Pagination extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            current: 0, //当前页数
            defaultCurrent: 1,   //默认的当前页数
            total: 0, //数据总数
            defaultPageSize: 10,  //默认的每页条数
            pageSize: 0,    //每页条数
            onChange(page){},    //页码改变的回调，参数是改变后的页码
            showSizeChanger: false,    //是否可以改变 pageSize
            pageSizeOptions: [],   //指定每页可以显示多少条
            onShowSizeChange(current, size){},    //pageSize 变化的回调
            showQuickJumper: false,    //是否可以快速跳转至某页
            size: '',    //当为「small」时，是小尺寸分页
            simple: null,    //当添加该属性时，显示为简单分页
            showTotal(total, range){}  //用于显示数据总量和当前数据顺序
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <ul class="lego-pagination lego-table-pagination">
            <li title="Previous Page" class="lego-pagination-disabled lego-pagination-prev">
                <a></a>
            </li>
            <li title="1" class="lego-pagination-item lego-pagination-item-1 lego-pagination-item-active"><a>1</a></li>
            <li title="2" class="lego-pagination-item lego-pagination-item-2"><a>2</a></li>
            <li title="3" class="lego-pagination-item lego-pagination-item-3"><a>3</a></li>
            <li title="4" class="lego-pagination-item lego-pagination-item-4"><a>4</a></li>
            <li title="5" class="lego-pagination-item lego-pagination-item-5"><a>5</a></li>
            <li title="Next Page" class=" lego-pagination-next">
                <a></a>
            </li>
            <div class="lego-pagination-options">
                <div class="lego-pagination-options-size-changer lego-select lego-select-enabled">
                    <div class="lego-select-selection lego-select-selection--single" tabindex="0">
                        <div class="lego-select-selection__rendered">
                            <div class="lego-select-selection-selected-value" title="10 / page" style="display: block; opacity: 1;">10 / 页</div>
                        </div><span class="lego-select-arrow" style="user-select: none;"><b></b></span></div>
                </div>
            </div>
        </ul>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        if(typeof this.options.onClick === 'function') this.options.onClick(event);
    }
}
export default Pagination;
