import './asset/index.scss';
import Search from '../search/index';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li:not(.dropdown, .lego-search-container)': 'clickItem',
                'click .lego-search-container': function(event){event.stopPropagation();}
            },
            scrollbar: null,
            disabled: false,
            eventName: 'click', //['click'] or ['hover']
            searchPlaceholder: '搜索',
            container: '', //触发容器
            direction: '',  //显示方向 如：top_right
            activeKey: '',
            maxCount: 0,    //最大记录数
            clickAndClose: true,  //点击后关闭
            showSearch: false,  //是否显示搜索框
            open: false,    //展开
            onChange(){},  //改变值时调用
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    dataReady(){
        let opts = this.options,
            that = this;
        if(opts.data.length && opts.maxCount){
            opts.data.length = opts.data.length > opts.maxCount ? opts.maxCount : opts.data.length;
        }
    }
    components(){
        let opts = this.options,
            that = this;
        if(opts.showSearch){
            function searchFun(self, result){
                that.$('li').each((index, el) => {
                    if($(el).text().indexOf(result.keyword) < 0){
                        $(el).hide();
                    }else{
                        $(el).show();
                    }
                });
            }
            this.addCom({
                el: '#search_' + opts.vid,
                size: 'sm',
                placeholder: opts.searchPlaceholder,
                onKeyup(self, result){
                    searchFun(self, result);
                },
                onSearch(self, result) {
                    searchFun(self, result);
                }
            });
        }
    }
    render() {
        let opts = this.options,
            vDom = '';
        function itemNav(item){
            if(item.divider){
                return hx`<li class="divider"></li>`;
            }else{
                if(!item.children){
                    return hx`
                    <li ${item.isHidden ? 'style="display:none;"' : ''}>
                    <a id="${val(item.key)}" class="${item.disabled || item.selected ? 'disabled' : ''} ${item.active ? 'active' : ''}" href="${item.href ? item.href : 'javascript:;'}">${val(item.html || item.value, item)}</a>
                    </li>`;
                }else{
                    return loopNav(item);
                }
            }
        }
        function loopNav(item){
            return hx`
            <li class="dropdown" ${item.isHidden ? 'style="display:none;"' : ''}>
                <a id="${val(item.key)}" class="${item.key === options.activeKey ? 'active' : ''} ${item.disabled ? 'disabled' : ''} dropdown-toggle" href="${item.href ? item.href : 'javascript:;'}">${val(item.html || item.value, item)}</a>
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
        vDom = hx`
        <ul class="${!opts.showSearch ? 'dropdown-menu ' : ''} ${opts.scrollbar ? 'scrollbar' : ''}"
        ${!opts.showSearch ? ('style="display:' + (opts.open ? 'block' : 'none') + '"') : ''}>
            ${opts.data.map(item => {
                return itemNav(item);
            })}
        </ul>
        `;
        if(opts.showSearch){
            vDom = hx`
            <div class="dropdown-menu" style="display:${opts.open ? 'block' : 'none'}">
                <div class="lego-search-container"><search id="search_${opts.vid}"></search></div>
                ${vDom}
            </div>
            `;
        }
        return vDom;
    }
    renderAfter(){
        let that = this,
            opts = this.options,
            _eventName = 'click.dropdown-' + opts.vid;
        this.directionArr = opts.direction ? opts.direction.split('_') : [];
        this.container = opts.container instanceof $ ? opts.container : (opts.context.$ ? opts.context.$(opts.container) : $(opts.container));
        if(!opts.disabled && opts.container){
            let cssObj = {zIndex: 10000};
            if(opts.width) cssObj.width = opts.width;
            if(opts.maxHeight){
                cssObj.maxHeight = opts.maxHeight;
                cssObj.overflow = 'auto';
            }
            if(opts.showSearch){
                this.$('.lego-search-container').next('ul').css(cssObj);
            }else{
                this.$el.css(cssObj);
            }
            function handler(event){
                event.stopPropagation();
                $('.dropdown-menu').each(function(index, el){
                    if(el === that.el){
                        Lego.UI.Util.getDirection(that.container, that.$el, ...that.directionArr);
                        that.$el.slideToggle('fast');
                    }else{
                        $(el).slideUp('fast');
                    }
                });
            }
            if(opts.eventName == 'click'){
                this.container.off(_eventName).on(_eventName, handler);
            }else{
                this.container.mouseenter(handler).mouseleave(function(){
                    that.close();
                });
            }
        }
        $('body, .modal-body').off(_eventName).on(_eventName, function(event){
            that.close();
        });
    }
    show(){
        if(this.container) Lego.UI.Util.getDirection(this.container, this.$el, ...this.directionArr);
        if(this.$el.css('display') == 'none') this.$el.slideDown('fast');
    }
    close(){
        this.$el.slideUp('fast');
    }
    clickItem(event){
        event.stopPropagation();
        let target = $(event.currentTarget);
        let model = this.options.data.find(Item => Item.key == target.children('a').attr('id'));
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
