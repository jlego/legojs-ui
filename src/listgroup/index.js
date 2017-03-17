/**
 * 列表组
 * ronghui Yu
 * 2017/1/10
 * options: {
 *     activeKey: '',
 *     template: '',
 *     onClick(){},
 * }
 * item: {
 *     className: '',
 *     disabled: false,
 *     key: '',
 *     value: ''
 * }
 */
// import './asset/index.scss';

class Listgroup extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click li.list-group-item': 'onClick',
                'click i.close': 'onClose',
            },
            activeKey: '',   //选中的记录
            template: '', //item模板
            removeAble: false, //可否删除
            data: [],
            onClick(){},   //click 事件的 handler
            onClose(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <ul class="list-group">
        ${options.data.map((item, index) => {
            if(item.template){
                return item.template;
            }else{
                return hx`<li class="list-group-item ${item.disabled ? 'disabled' : ''} ${options.activeKey == item.key ? 'active' : ''} ${val(item.className)}"
                id="${val(item.key)}">
                ${options.removeAble ? hx`<i class="anticon anticon-cross float-xs-right close"></i>` : ''}
                ${val(item.value)}
                </li>`;
            }
        })}
        </ul>
        `;
        return vDom;
    }
    onClick(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.attr('id');
        if(typeof this.options.onClick === 'function') this.options.onClick(this, key, event);
        this.options.activeKey = this.options.activeKey != key ? key : '';
        this.refresh();
    }
    onClose(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            key = target.parent().attr('id');
        if(typeof this.options.onClose === 'function') this.options.onClose(this, key, event);
        this.options.data = this.options.data.filter(item => item.key !== key);
        this.refresh();
    }
}
Lego.components('listgroup', Listgroup);
export default Listgroup;
