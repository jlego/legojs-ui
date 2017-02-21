/**
 * 选项卡
 * ronghui Yu
 * 2016/12/30
 * data: [{
 *     key: '', //选项key
 *     text: '',    //文字
 *     href: '',    //超链接
 *     isHide: false,
 *     content: '', //面板内容
 *     disabled: false  //是否禁用
 * }]
 */
import './asset/index.scss';
import Navs from '../navs/index';

class Tabs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                // 'click .dropdown-item': 'clickItem'
            },
            eventName: 'click', //['click'] or ['hover']
            type: 'line', //页签的基本样式，可选 line、card editable-card 类型
            size: 'default',   //大小，提供 default 和 small 两种大小，仅当 type="line" 时生效
            closable: false, //默认不显示关闭按钮
            activeKey: '', //当前激活的面板key
            activeContent: '',
            onClose(){}, //tab 被点击的回调
            tabPosition: 'top',    //页签位置，可选值有 top right bottom left
            onEdit(){},  //新增和删除页签的回调，在 type="editable-card" 时有效
            hideAdd: false,    //是否隐藏加号图标，在 type="editable-card" 时有效
            animate: '',  //是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效
            data: [],
            components: []
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let options = this.options,
            comId = '#navs-' + options.vid;
        let data = options.data.filter(item => !item.isHide);
        options.activeKey = typeof options.activeKey == 'number' ? data[options.activeKey].key : options.activeKey;
        let model = data.find(item => item.key == options.activeKey);
        if(model) options.activeContent = model.content;
        this.addCom({
            el: comId,
            eventName: options.eventName || 'click',
            type: 'tabs', //菜单类型，现在支持垂直、水平、和内嵌模式三种base, inline, tabs, pills, pills-stacked
            activeKey: options.activeKey, //当前激活的key
            onClick(self, item){
                if(!item.disabled && item.content){
                    const parentView = this.context;
                    parentView.options.activeKey = item.key;
                    parentView.options.activeContent = item.content;
                }
            }, //点击的回调
            data: data
        });
    }
    render() {
        const options = this.options;
        let newData = [];
        function getNewData(data){
            if(Array.isArray(data)){
                if(data.length){
                    data.forEach(item => {
                        if(item.children){
                            getNewData(item.children);
                        }else{
                            newData.push(item);
                        }
                    });
                }
            }
        }
        getNewData(options.data);
        const vDom = hx`
        <div class="tabs">
            <navs id="navs-${options.vid}"></navs>
            <div class="tab-content">
                ${newData.map(item => {
                    if(!item.disabled){
                        return hx`<div class="tab-pane ${val(options.animate)} ${item.key == options.activeKey ? 'active in' : ''}">
                            ${item.key == options.activeKey ? options.activeContent : ''}
                        </div>`;
                    }
                })}
            </div>
        </div>
        `;
        return vDom;
    }
    close(event) {
        event.stopPropagation();
        this.$el.slideUp("normal", () => {
            this.remove();
        });
        if (typeof this.options.onClose === 'function') this.options.onClose(this, event);
    }
}
Lego.components('tabs', Tabs);
export default Tabs;
