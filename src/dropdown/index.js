import './asset/index.scss';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li:not(.dropdown)': 'clickItem'
            },
            disabled: false,
            eventName: 'click', //['click'] or ['hover']
            trigger: '', //触发对象
            direction: '',  //显示方向
            activeKey: '',
            clickAndClose: true,  //点击后关闭
            open: false,    //展开
            onChange(){},  //改变值时调用
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        function itemNav(item){
            if(item.divider){
                return hx`<li class="divider"></li>`;
            }else{
                if(!item.children){
                    return hx`
                    <li>
                    <a id="${val(item.key)}" class="${item.disabled || item.selected ? 'disabled' : ''} ${item.active ? 'active' : ''}" href="${item.href ? item.href : 'javascript:;'}">
                    ${val(item.value)}
                    </a>
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
        <ul class="dropdown-menu ${options.direction ? ('drop' + options.direction) : ''}" style="display:${options.open ? 'block' : 'none'}">
            ${options.data.map(item => {
                return itemNav(item);
            })}
        </ul>
        `;
        return vDom;
    }
    renderAfter(){
        const that = this;
        this.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
        if(!this.options.disabled){
            function handler(event){
                $('body, .modal-body').trigger('click');
                event.stopPropagation();
                const directionResp = Lego.UI.Util.getDirection(that.trigger, that.$el);
                that.options.direction = directionResp._y || 'bottom';
                that.show();
            }
            if(this.options.eventName == 'click'){
                const _eventName = 'click.dropdown_' + this.options.vid;
                $('body, .modal-body').off(_eventName).on(_eventName, function(){
                    that.close();
                });
                this.trigger.off(_eventName).on(_eventName, handler);
            }else{
                this.trigger.mouseenter(handler).mouseleave(function(){
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
    show(event){
        this.$el.slideDown('fast');
    }
    close(event){
        this.$el.slideUp('fast');
    }
    clickItem(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        const model = this.options.data.find(Item => Item.key == target.children('a').attr('id'));
        if(model) this.options.onChange(this, model);
        if(this.options.clickAndClose){
            this.close();
        }else{
            this.refresh();
        }
    }
}
Lego.components('dropdown', Dropdown);
export default Dropdown;
