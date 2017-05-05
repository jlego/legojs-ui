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
            eventName: 'click', //['click'] or ['hover']
            type: 'line', //页签的基本样式，可选 line、card editable-card 类型
            size: 'default',   //大小，提供 default 和 small 两种大小，仅当 type="line" 时生效
            closable: false, //默认不显示关闭按钮
            activeKey: '', //当前激活的面板key
            activeContent: '',
            direction: 'bottom',    //页签位置，可选值有 top right bottom left
            navClassName: '',
            contentScrollbar: null,
            showAdd: false,    //是否显示加号图标，在 type="editable-card" 时有效
            animateIn: Lego.config.animateAble ? 'fadeIn' : '',
            animateOut: Lego.config.animateAble ? 'fadeOut' : '',
            data: [],
            onAdd(){},  //新增页签的回调，在 type="editable-card" 时有效
            onChange(){}
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
        if(model) options.activeContent = typeof model.content == 'function' ? model.content() : model.content;
        this.addCom({
            el: comId,
            eventName: options.eventName || 'click',
            className: options.navClassName,
            type: 'tabs', //菜单类型，现在支持垂直、水平、和内嵌模式三种base, inline, tabs, pills, pills-stacked
            activeKey: options.activeKey, //当前激活的key
            onClick(self, item){
                if(!item.disabled && item.content){
                    let pView = this.context;
                    pView.options.activeKey = item.key;
                    pView.options.activeContent = typeof item.content == 'function' ? item.content() : item.content;
                    if (typeof options.onChange === 'function') options.onChange(pView, item);
                }
            }, //点击的回调
            data: data
        });
    }
    render() {
        let options = this.options,
            newData = [];
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
        <div class="lego-tabs">
            <navs id="navs-${options.vid}"></navs>
            <div class="tab-content ${options.contentScrollbar ? 'scrollbar' : ''}">
                ${newData.map(item => {
                    if(!item.disabled){
                        return hx`<div class="tab-pane ${val(options.animate)} ${item.key == options.activeKey ? 'active' : ''}">
                            ${item.key == options.activeKey ? options.activeContent : ''}
                        </div>`;
                    }
                })}
            </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let opts = this.options;
        if (opts.animateIn) Lego.UI.Util.animateCss(this.$('.tab-pane.active'), opts.animateIn);
    }
}
Lego.components('tabs', Tabs);
export default Tabs;
