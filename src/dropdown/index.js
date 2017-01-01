import './asset/index.scss';

class Dropdown extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li': 'clickItem'
            },
            disabled: false,
            eventName: 'hover', //['click'] or ['hover']
            selectedKey: '',
            trigger: '', //触发对象
            visible: false,  //是否显示
            direction: '',  //显示方向
            onChange(){},  //改变值时调用
            onVisibleChange(){}    //菜单显示状态改变时调用
        };
        Object.assign(options, opts);
        super(options);
        const that = this;
        this.options.trigger = opts.trigger instanceof $ ? opts.trigger : $(opts.trigger);
        this.options.trigger[options.eventName](function(){
            const directionResp = Lego.UI.Util.getDirection(that.options.trigger, that.$el);
            that.options.direction = directionResp._y || 'bottom';
            that.show();
            that.options.trigger.mouseleave(function(){
                that.close();
            });
            that.$('.dropdown-menu').mouseleave(function(){
                that.close();
            });
        });
    }
    render() {
        const options = this.options || {};
        function itemNav(item){
            if(item.divider){
                return hx`<li class="divider"></li>`;
            }else{
                if(!item.children){
                    return hx`<li id="${item.key}" class="${item.disabled ? 'disabled' : ''}">
                    <a href="${item.href ? item.href : 'javascript:;'}">${item.title}</a></li>`;
                }else{
                    return loopNav(item);
                }
            }
        }
        function loopNav(data){
            return hx`
            <li class="dropdown">
                ${data.title}
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
        <ul class="dropdown-menu ${options.direction ? ('drop' + options.direction) : ''}">
            ${options.data.map(item => {
                return itemNav(item);
            })}
        </ul>
        `;
        return vDom;
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
        this.options.onVisibleChange(true);
    }
    close(event){
        this.options.trigger.removeClass('dropdown open');
        this.options.onVisibleChange(false);
    }
    clickItem(event){
        const target = $(event.currentTarget);
        this.options.selectedKey = target.attr('id');
        this.options.onChange(this.options.selectedKey);
        this.close();
    }
}
Lego.components('dropdown', Dropdown);
export default Dropdown;
