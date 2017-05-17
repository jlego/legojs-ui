import './asset/index.scss';
import Search from '../search/index';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li:not(.dropdown, .lego-search-container)': 'clickItem',
                'click li.lego-search-container': function(event){event.stopPropagation();}
            },
            scrollbar: null,
            disabled: false,
            eventName: 'click', //['click'] or ['hover']
            container: '', //触发容器
            direction: '',  //显示方向
            activeKey: '',
            clickAndClose: true,  //点击后关闭
            showSearch: false,  //是否显示搜索框
            open: false,    //展开
            onChange(){},  //改变值时调用
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let opts = this.options;
        if(opts.showSearch){
            this.addCom({
                el: '#search_' + opts.vid,
                size: 'sm',
                onSearch(self, result) {
                    // if(typeof opts.onSearch == 'function'){
                    //     opts.onSearch(that, result);
                    // }else{
                    //     let treeView = Lego.getView('#transfer_tree_' + opts.vid);
                    //     if(treeView) treeView.search(result.keyword);
                    // }
                }
            });
        }
    }
    render() {
        const opts = this.options || {};
        function itemNav(item){
            if(item.divider){
                return hx`<li class="divider"></li>`;
            }else{
                if(!item.children){
                    return hx`
                    <li>
                    <a id="${val(item.key)}" class="${item.disabled || item.selected ? 'disabled' : ''} ${item.active ? 'active' : ''}" href="${item.href ? item.href : 'javascript:;'}">${val(item.value)}</a>
                    </li>`;
                }else{
                    return loopNav(item);
                }
            }
        }
        function loopNav(item){
            return hx`
            <li class="dropdown">
                <a id="${val(item.key)}" class="${item.key === options.activeKey ? 'active' : ''} ${item.disabled ? 'disabled' : ''} dropdown-toggle" href="${item.href ? item.href : 'javascript:;'}">${val(item.value)}</a>
                ${item.children ? hx`
                <ul class="dropdown-menu">
                    ${item.children.map((item) => {
                        return itemNav(item);
                    })}
                </ul>
                ` : ''}
            </li>
            `;
        }
        const vDom = hx`
        <ul class="dropdown-menu ${opts.scrollbar ? 'scrollbar' : ''} ${opts.direction ? ('drop' + opts.direction) : ''}"
        style="display:${opts.open ? 'block' : 'none'}">
            ${opts.showSearch ? hx`<li class="lego-search-container"><search id="search_${opts.vid}"></search></li>` : ''}
            ${opts.data.map(item => {
                return itemNav(item);
            })}
        </ul>
        `;
        return vDom;
    }
    renderAfter(){
        let that = this,
            _eventName = 'click.dropdown-' + this.options.vid;
        this.container = this.options.container instanceof $ ? this.options.container :
            (this.options.context.$ ? this.options.context.$(this.options.container) : $(this.options.container));
        if(!this.options.disabled){
            function handler(event){
                that.$el.slideToggle('fast');
            }
            if(this.options.eventName == 'click'){
                $('body, .modal-body').off(_eventName).on(_eventName, function(event){
                    if(event.originalEvent){
                        let index_a = event.originalEvent.path.indexOf(event.target),
                            index_b = event.originalEvent.path.indexOf(that.container[0]);
                        if(index_a <= index_b){
                        }else{
                            that.close();
                        }
                    }
                });
                this.container.off(_eventName).on(_eventName, handler);
            }else{
                this.container.mouseenter(handler).mouseleave(function(){
                    that.close();
                });
            }
        }
    }
    _getAlign(parent, el) {
        let _X = parent.offset().left,
            _Y = parent.offset().top - el.height(),
            windowWidth = $(window).width() - 20,
            elWidth = el.width();
        if (windowWidth > (_X + elWidth)) {
            return 'left';
        } else {
            return 'right';
        }
    }
    show(){
        this.$el.slideDown('fast');
    }
    close(){
        this.$el.slideUp('fast');
    }
    clickItem(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        const model = this.options.data.find(Item => Item.key == target.children('a').attr('id'));
        if(model) this.options.onChange(this, model, event);
        if(this.options.clickAndClose){
            this.close();
        }else{
            this.refresh();
        }
    }
}
Lego.components('dropdown', Dropdown);
export default Dropdown;
