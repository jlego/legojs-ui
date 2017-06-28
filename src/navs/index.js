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
import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Navs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'mouseover .nav-item.dropdown': 'overItem',
                'click .dropdown > a': 'clickNav',
                'click .dropdown-menu a:not(.disabled)': 'clickSubItem',
                'click .nav-item:not(.dropdown) > a': 'clickItem'
            },
            eventName: 'click', //['click'] or ['hover']
            type: 'base', //菜单类型，现在支持垂直、水平、和内嵌模式三种base, inline, tabs, pills, pills-stacked
            activeKey: '', //当前激活的key
            activeValue: '',
            direction: '',  //显示方向
            closeAllAble: true, //点击body关闭全部
            accordion: true,    //手风琴效果
            onClick(){}, //点击的回调
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        function makeItem(item, i){
            const itemDom = hx`
            <li class="nav-item ${item.children ? 'dropdown' : ''} ${item.open ? 'open' : ''}">
                <a class="nav-link ${item.key === options.activeKey ? 'active' : ''} ${item.disabled ? 'disabled' : ''} ${item.children ? 'dropdown-toggle' : ''}" href="${item.href ? item.href : 'javascript:;'}" id="${item.key ? item.key : ('nav-item-' + i)}">${val(item.value)}</a>
                ${Array.isArray(item.children) ? Lego.create(Dropdown, {
                    direction: options.direction,
                    open: item.open,
                    data: item.children
                }).render() : ''}
            </li>
            `;
            return itemDom;
        }
        const vDom = hx `
        <ul class="lego-nav ${options.type === 'inline' ? 'nav-inline' : (options.type === 'tabs' ? 'nav-tabs' : (options.type === 'pills' ? 'nav-pills' : ''))}
        ${options.type === 'pills-stacked' ? 'nav-pills nav-stacked' : ''}">
            ${options.data.map((item, i) => {
                return makeItem(item, i);
            })}
        </ul>
        `;
        return vDom;
    }
    renderAfter(){
        const that = this;
        if(this.options.closeAllAble){
            $('body').click(function(){
                that.closeAll();
            });
        }
    }
    showAll(){
        this.$('.dropdown-menu').slideDown('fast');
    }
    closeAll(){
        this.$('.dropdown-menu').slideUp('fast', function(){
            $(this).parent().removeClass('open');
        });
    }
    overItem(event, target){
        const targetEl = $(event.currentTarget),
            key = targetEl.children('a').attr('id');
        this.activeKey = key;
    }
    closeDropdown(el){
        el.slideUp('fast', function(){
            if($(this).css('display') == 'none'){
                $(this).parent().removeClass('open');
            }else{
                $(this).parent().addClass('open');
            }
        });
    }
    clickNav(event, target) {
        event.stopPropagation();
        let targetEl = $(event.currentTarget);
        let dropdownEl = targetEl.next('.dropdown-menu');
        Lego.UI.Util.getDirection(targetEl, dropdownEl);
        if(this.options.accordion){
            this.closeDropdown(this.$('.nav-item.open .dropdown-menu'));
        }
        if(!targetEl.parent().hasClass('open')){
            // this.closeDropdown(dropdownEl);
            dropdownEl.slideToggle('fast', function(){
                if($(this).css('display') == 'none'){
                    $(this).parent().removeClass('open');
                }else{
                    $(this).parent().addClass('open');
                }
            });
            this.clickItem(event);
            this.$('.dropdown-menu a').removeClass('active');
        }
    }
    clickItem(event, target) {
        event.stopPropagation();
        const targetEl = $(event.currentTarget),
            key = targetEl.attr('id');
        if(!targetEl.hasClass('disabled')){
            if(this.options.accordion){
                this.closeDropdown(this.$('.nav-item.open .dropdown-menu'));
            }
            this.options.activeKey = key;
            let model = this.options.data.find(item => item.key === key);
            if (typeof this.options.onClick === 'function'){
                this.options.onClick(this, model || {}, event);
            }
        }
    }
    clickSubItem(event, target){
        event.stopPropagation();
        this.options.activeKey = this.activeKey || this.options.activeKey;
        const targetEl = $(event.currentTarget),
            key = targetEl.attr('id'),
            model = this.options.data.find(item => item.key === this.options.activeKey);
        let subModel = {};
        if(model){
            if(model.children){
                function findModel(data){
                    let result = data.find(item => item.key === key);
                    if(!result){
                        data.forEach(item => {
                            if(item.children) {
                                result = findModel(item.children);
                            }
                        });
                    }
                    return result || {};
                }
                subModel = findModel(model.children);
            }
        }
        this.$('.dropdown-menu a').removeClass('active');
        this.$('#' + key).addClass('active');
        if (typeof this.options.onClick === 'function') this.options.onClick(this, subModel, event);
    }
}
Lego.components('navs', Navs);
export default Navs;
