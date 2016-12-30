/**
 * 选项卡
 * ronghui Yu
 * 2016/12/30
 * data: [{
 *     key: '', //选项key
 *     text: '',    //文字
 *     href: '',    //超链接
 *     disabled: false  //是否禁用
 * }]
 */
import './asset/index.scss';

class Navs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-alert-close-icon': 'close'
            },
            type: 'line', //页签的基本样式，可选 line、card editable-card 类型
            size: 'default',   //大小，提供 default 和 small 两种大小，仅当 type="line" 时生效
            closable: false, //默认不显示关闭按钮
            currentKey: '', //当前激活的面板key
            defaultActiveKey: '', //初始化选中面板的 key，如果没有设置 activeKey
            onChange(){}, //切换面板的回调
            onTabClick(){}, //tab 被点击的回调
            tabPosition: 'top',    //页签位置，可选值有 top right bottom left
            onEdit(){},  //新增和删除页签的回调，在 type="editable-card" 时有效
            hideAdd: false,    //是否隐藏加号图标，在 type="editable-card" 时有效
            animated: true  //是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx `
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        `;
        return vDom;
    }
    close(event) {
        event.stopPropagation();
        this.$el.slideUp("normal", () => {
            this.remove();
        });
        if (typeof this.options.onClose === 'function') this.options.onClose(event);
    }
}
Lego.components('navs', Navs);
export default Navs;
