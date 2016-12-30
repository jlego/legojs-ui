/**
 * 导航
 * ronghui Yu
 * 2016/12/30
 * data: [{
 *     key: '', //选项key
 *     title: '',    //文字
 *     href: '',    //超链接
 *     children: [],
 *     disabled: false  //是否禁用
 * }]
 */
import './asset/index.scss';

class Navs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .nav-item': 'clickItem'
            },
            type: 'base', //菜单类型，现在支持垂直、水平、和内嵌模式三种base, inline, tabs, pills, pills-stacked
            activeKey: '', //当前激活的key
            defaultActiveKey: '', //初始化选中的 key，如果没有设置 activeKey
            onClick(){}, //点击的回调
            inlineIndent: 24  //inline 模式的菜单缩进宽度
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx `
        <ul class="nav ${options.type === 'inline' ? 'nav-inline' : (options.type === 'tabs' ? 'nav-tabs' : (options.type === 'pills' ? 'nav-pills' : ''))}
        ${options.type === 'pills-stacked' ? 'nav-pills nav-stacked' : ''}">
            ${options.data.map((item, i) => hx`
            <li class="nav-item" id="${item.key ? item.key : ('nav-item-' + i)}">
                <a class="nav-link ${(item.key === options.activeKey || item.key === options.defaultActiveKey) ? 'active' : ''}
                ${item.disabled ? 'disabled' : ''}" href="${item.href ? item.href : 'javascript:;'}">${item.title ? item.title : ''}</a>
            </li>
            `)}
        </ul>
        `;
        return vDom;
    }
    clickItem(event) {
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.attr('id');
        this.options.activeKey = key;
        if (typeof this.options.onClick === 'function') this.options.onClick(event);
    }
}
Lego.components('navs', Navs);
export default Navs;
