import './asset/index.scss';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li': 'clickItem'
            },
            disabled: false,
            eventName: 'hover', //['click'] or ['hover']
            activeKey: '',
            activeValue: '',
            trigger: '', //触发对象
            visible: false,  //是否显示
            direction: '',  //显示方向
            clickAndClose: true,  //点击后关闭
            onChange(){},  //改变值时调用
            onVisibleChange(){},    //菜单显示状态改变时调用
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
                    return hx`<li id="${item.key}" class="${item.disabled || item.selected ? 'disabled' : ''}">
                    <a href="${item.href ? item.href : 'javascript:;'}">${item.value}</a></li>`;
                }else{
                    return loopNav(item);
                }
            }
        }
        function loopNav(data){
            return hx`
            <li class="dropdown">
                ${data.value}
                ${data.children ? hx`
                <ul class="dropdown-menu">
                    ${data.children.map((item) => {
                        itemNav(item);
                    })}
                </ul>
                ` : ''}
            </li>
            `;
        }
        const vDom = hx`
        <ul class="dropdown-menu clearfix ${options.direction ? ('drop' + options.direction) : ''}">
            ${options.data.map(item => {
                return itemNav(item);
            })}
        </ul>
        `;
        return vDom;
    }
    renderAfter(){
        const that = this;
        this.options.trigger = this.options.trigger instanceof $ ? this.options.trigger : $(this.options.trigger);
        if(!this.options.disabled){
            function handler(event){
                $('body, .modal-body').trigger('click');
                event.stopPropagation();
                const directionResp = Lego.UI.Util.getDirection(that.options.trigger, that.$el);
                that.options.direction = directionResp._y || 'bottom';
                that.show();
                if(that.options.eventName == 'hover'){
                    that.options.trigger.mouseleave(function(){
                        that.close();
                    });
                }
            }
            if(this.options.eventName == 'click'){
                const _eventName = 'click.dropdown_' + this.options.vid;
                $('body, .modal-body').off(_eventName).on(_eventName, function(){
                    that.close();
                });
                this.options.trigger.off(_eventName).on(_eventName, handler);
            }else{
                this.options.trigger[this.options.eventName](handler);
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
        this.options.trigger.addClass('dropdown open');
        this.options.onVisibleChange(this, true);
    }
    close(event){
        this.options.trigger.removeClass('dropdown open');
        this.options.onVisibleChange(this, false);
    }
    clickItem(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        const model = this.options.data.find(Item => Item.key == target.attr('id'));
        if(model){
            this.options.onChange(this, model);
            this.options.activeKey = model.key;
            this.options.activeValue = model.value;
        }
        if(this.options.clickAndClose) this.close();
    }
}
Lego.components('dropdown', Dropdown);
export default Dropdown;
