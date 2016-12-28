import './asset/index.scss';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'mouseleave .lego-dropdown': 'close',
                'click .lego-dropdown-menu-item': 'clickItem',
                'mouseenter .lego-dropdown-menu-item': 'inMenu',
                'mouseleave .lego-dropdown-menu-item': 'outMenu',
                'mouseenter .lego-dropdown-menu-submenu': 'showSubMenu',
                'mouseleave .lego-dropdown-menu-submenu': 'hideSubMenu',
            },
            disabled: false,
            eventName: 'mouseenter', //['click'] or ['mouseenter']
            trigger: '', //触发对象
            container: 'body', //渲染父节点
            visible: false,  //是否显示
            direction: '',  //显示方向
            onChange(){},  //改变值时调用
            onVisibleChange(){}    //菜单显示状态改变时调用
        };
        Object.assign(options, opts);
        super(options);
        this.result = '';
        const that = this;
        const trigger = trigger instanceof $ ? trigger : $(trigger);
        const eventName = options.eventName + '.' + options.vid;
        trigger.off(eventName).on(eventName, function(){
            const directionResp = Lego.UI.Baseview.getDirection(options.container, that.$el);
            options.direction = (directionResp._y + directionResp._x) || 'bottomLeft';
            that.show();
        });
    }
    render() {
        const options = this.options || {};
        function loopNav(data){
            return hx`
            <li class="lego-dropdown-menu-submenu-vertical lego-dropdown-menu-submenu">
                <div class="lego-dropdown-menu-submenu-title" id="${data.key}">${data.title || ''}</div>
                ${data.children ? hx`
                <ul class="lego-dropdown-menu lego-dropdown-menu-vertical lego-dropdown-menu-sub ${data.visible ? '' : 'lego-dropdown-menu-hidden'}">
                    ${data.children.map((item) => {
                        if(!item.children){
                            hx`<li class="lego-dropdown-menu-item">${item.title || ''}</li>`;
                        }else{
                            loopNav(item);
                        }
                    })}
                </ul>
                ` : ''}
            </li>
            `;
        }
        const vDom = hx`
        <div class="lego-dropdown ${options.direction ? 'lego-dropdown-placement-${options.direction}' : ''} lego-dropdown-${options.visible ? 'show' : 'hidden'}">
            <ul class="lego-dropdown-menu lego-dropdown-menu-vertical  lego-dropdown-menu-light lego-dropdown-menu-root">
            ${options.data.forEach(item => {
                if(!item.children){
                    return hx`<li class="lego-dropdown-menu-item" id="${item.key}">${item.title || ''}</li>`;
                }else{
                    return loopNav(item);
                }
            })}
            </ul>
        </div>
        `;
        return vDom;
    }
    show(event){
        this.options.visible = true;
        this.options.onVisibleChange(true);
    }
    close(event){
        this.options.visible = false;
        this.options.onVisibleChange(false);
    }
    clickItem(event){
        const target = $(event.currentTarget);
        this.result = target.attr('id');
        this.options.onChange(this.result);
    }
    inMenu(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        target.addClass('lego-dropdown-menu-item-active');
    }
    outMenu(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        target.removeClass('lego-dropdown-menu-item-active');
    }
    showSubMenu(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        target.addClass('lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active');
    }
    hideSubMenu(event){
        event.stopPropagation();
        const target = $(event.currentTarget);
        target.removeClass('lego-dropdown-menu-submenu-open lego-dropdown-menu-submenu-active');
    }
}
export default Dropdown;
