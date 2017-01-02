/**
 * 导航
 * ronghui Yu
 * 2016/12/30
 * item: [{
 *     key: '', //选项key
 *     value: '',    //文字
 *     href: '',    //超链接
 *     children: [],
 *     disabled: false  //是否禁用
 * }]
 */
// import './asset/index.scss';

class Navs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .nav-link:not(.disabled)': 'clickItem',
                'click .dropdown-item:not(.disabled)': 'clickSubItem'
            },
            eventName: 'click', //['click'] or ['hover']
            type: 'base', //菜单类型，现在支持垂直、水平、和内嵌模式三种base, inline, tabs, pills, pills-stacked
            activeKey: '', //当前激活的key
            activeValue: '',
            direction: '',  //显示方向
            onClick(){}, //点击的回调
            data: []
        };
        Object.assign(options, opts);
        super(options);
        const that = this;
        this.$('.dropdown')[options.eventName](function(){
            const directionResp = Lego.UI.Util.getDirection($(this), $(this).children('.dropdown-menu'));
            that.options.direction = directionResp._y || 'bottom';
            $(this).addClass('open');
            $(this).mouseleave(function(){
                $(this).removeClass('open');
            });
        });
    }
    render() {
        const options = this.options || {};
        function makeItem(data, i){
            const itemDom = hx`
            <li class="nav-item ${data.children ? 'dropdown' : ''}">
                <a class="nav-link ${data.key === options.activeKey ? 'active' : ''} ${data.disabled ? 'disabled' : ''} ${data.children ? 'dropdown-toggle' : ''}" href="${data.href ? data.href : 'javascript:;'}" id="${data.key ? data.key : ('nav-item-' + i)}">${data.value ? data.value : ''}</a>
                ${Array.isArray(data.children) ? hx`
                <div class="dropdown-menu ${options.direction ? ('drop' + options.direction) : ''}">
                ${data.children.map((subItem, x) => hx`
                    ${subItem.divider ? hx`<div class="dropdown-divider"></div>` : 
                    hx`<a class="dropdown-item ${subItem.active ? 'active' : ''} ${subItem.disabled ? 'disabled' : ''}" href="${subItem.href ? subItem.href : 'javascript:;'}" id="${subItem.key ? subItem.key : ('nav-sub-item-' + x)}">${subItem.value ? subItem.value : ''}/a>`
                    }
                `)}
                </div>
                ` : ''}
            </li>
            `;
            return itemDom;
        }
        const vDom = hx `
        <ul class="nav ${options.type === 'inline' ? 'nav-inline' : (options.type === 'tabs' ? 'nav-tabs' : (options.type === 'pills' ? 'nav-pills' : ''))}
        ${options.type === 'pills-stacked' ? 'nav-pills nav-stacked' : ''}">
            ${options.data.map((item, i) => {
                return makeItem(item, i);
            })}
        </ul>
        `;
        return vDom;
    }
    clickItem(event) {
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.attr('id');
        this.options.activeKey = key;
        let model = this.options.data.find(item => item.key === key);
        if (typeof this.options.onClick === 'function') this.options.onClick(model);
    }
    clickSubItem(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.attr('id');
        const model = this.options.data.find(item => item.key === this.options.activeKey);
        if(model){
            model.children.forEach((subItem, i) => {
                subItem.active = subItem.key === key ? true : false;
            });
            this.refresh();
        }
        if (typeof this.options.onClick === 'function') this.options.onClick(model);
    }
}
Lego.components('navs', Navs);
export default Navs;
