/**
 * 标签组件
 * ronghui Yu
 * 2017/4/13
 * item{
 *      key: '',
 *      value: ''
 *      selected: false
 * }
 */
import './asset/index.scss';

class Tags extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .btn-more': 'showMore'
            },
            color: '', //标签色
            deleteAble: true,    //标签是否可以关闭
            readonly: false,    //是否只读
            showMoreBtn: false,     //显示更多按钮
            showAddBtn: true,     //显示添加按钮
            showCleanBtn: false,   //显示清空按钮
            moreBtnText: '',
            addBtnText: '添加标签 +',   //添加按钮文本
            addBtnOption: {},
            cleanBtnText: '清空',   //清空按钮文本
            cleanBtnOption: {},
            onSelected(){},   //点击标签时回调
            onDelete(){},  //关闭时的回调
            onAdd(){}, //点击添加按钮
            onClean(){}, //点击清空按钮
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let opts = this.options,
            that = this;
        if(!opts.readonly){
            this.addCom($.extend({
                el: '#add_' + opts.vid,
                text: opts.addBtnText,
                type: 'dashed',
                size: 'sm',
                onClick(self, event){
                    event.stopPropagation();
                    if(typeof opts.onAdd == 'function') opts.onAdd(that, event);
                }
            }, opts.addBtnOption));
            if(opts.showCleanBtn){
                this.addCom($.extend({
                    el: '#clean_' + opts.vid,
                    text: opts.cleanBtnText,
                    size: 'sm',
                    style: {
                        marginLeft: 5
                    },
                    onClick(self, event){
                        event.stopPropagation();
                        if(typeof opts.onClean == 'function') opts.onClean(that, event);
                    }
                }, opts.cleanBtnOption));
            }
        }
    }
    render() {
        let opts = this.options;
        this.vDom = hx`
        <div class="lego-tags">
            <div class="lego-tags-list">
                <div class="${opts.showMoreBtn ? ('lego-tags-' + (opts.open ? 'open' : 'close')) : ''}">
                ${opts.data.map(item => hx`
                    <div class="lego-tag ${item.selected ? ('lego-tag-' + item.selected) : ''}" id="${item.key}" title="${item.value}" onclick=${this.onSelected.bind(this)}>
                        <div class="lego-tag-text">
                            <span>${item.value}</span>
                            ${opts.deleteAble ? hx`<i title="移除" class="anticon anticon-close-circle lego-tag-close" onclick=${this.onDelete.bind(this)}></i>` : ''}
                        </div>
                    </div>
                `)}
                ${!opts.readonly && opts.showAddBtn ? hx`<buttons id="add_${opts.vid}"></buttons>` : ''}
                </div>
            </div>
            ${opts.showMoreBtn || (!opts.readonly && opts.showCleanBtn) ? hx`
            <div class="lego-tags-btns">
            ${opts.showMoreBtn ? (opts.moreBtnText ? val(opts.moreBtnText) : hx`<i class="anticon anticon-down-circle-o btn-more" id="more_${opts.vid}"></i>`) : ''}
            ${!opts.readonly && opts.showCleanBtn ? hx`<buttons id="clean_${opts.vid}"></buttons>` : ''}
            </div>
            ` : ''}
        </div>
        `;
        return this.vDom;
    }
    renderAfter(){
        let that = this,
            opts = this.options,
            _eventName = 'click.tagslist_' + opts.vid;
        $('body, .modal-body').off(_eventName).on(_eventName, function(event){
            if(event.originalEvent){
                let index_a = event.originalEvent.path.indexOf(event.target),
                    index_b = event.originalEvent.path.indexOf(that.el);
                if(index_a <= index_b){
                }else{
                    opts.open = false;
                }
            }
        });
    }
    addItem(obj = {}){
        let opts = this.options;
        let hasOne = opts.data.find(item => item.key == obj.key);
        if(!hasOne){
            opts.data.push(obj);
            this.refresh();
        }
    }
    removeItem(id){
        let opts = this.options;
        opts.data = opts.data.filter(item => {
            return item.key ? item.key.toString() !== id : false;
        });
        this.refresh();
    }
    // 清空所有
    cleanAll(){
        this.options.data = [];
        this.options.open = false;
        this.refresh();
    }
    getValue(){
        return this.options.data;
    }
    onDelete(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            id = target.parent().parent().attr('id');
        if(typeof opts.onDelete == 'function') opts.onDelete(this, id);
    }
    onSelected(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            id = target.attr('id'),
            item = opts.data.find(item => item.key.toString() == id);
        if(typeof opts.onSelected == 'function') opts.onSelected(this, item);
    }
    // 展开更多标签
    showMore(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options;
        opts.open = !opts.open;
    }
}
Lego.components('tags', Tags);
export default Tags;
