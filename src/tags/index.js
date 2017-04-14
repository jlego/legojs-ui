/**
 * 标签组件
 * ronghui Yu
 * 2017/4/13
 * item{
 *      key: '',
 *      value: ''
 * }
 */
import './asset/index.scss';

class Tags extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            // events: {
            //     'click .lego-tag-close': 'onClose',
            //     'click .lego-tag': 'onChange'
            // },
            color: '', //标签色
            closable: true,    //标签是否可以关闭
            readonly: false,    //是否只读
            addBtnText: '添加标签 +',   //添加按钮文本
            addBtnOption: {},
            onChange(){},   //点击标签时回调
            onClickBtn(){},    //点击添加按钮
            onClose(){},  //关闭时的回调
            onAdd(){} //添加时回调
        };
        Object.assign(options, opts);
        super(options);

        this.$el.on('click', '.lego-tag-close', this.onClose.bind(this));
        this.$el.on('click', '.lego-tag', this.onChange.bind(this));
    }
    components(){
        let opts = this.options,
            that = this;
        if(!opts.readonly){
            this.addCom([$.extend({
                el: '#buttons_' + opts.vid,
                text: opts.addBtnText,
                type: 'dashed',
                size: 'sm',
                onClick(self, event){
                    event.stopPropagation();
                    if(typeof opts.onClickBtn == 'function') opts.onClickBtn(that, event);
                }
            }, opts.addBtnOption)]);
        }
    }
    render() {
        let opts = this.options;
        if(opts.value && !opts.data.length) opts.data = Array.from(opts.value);
        this.vDom = hx`
        <div class="lego-tags">
            ${opts.data.map(item => hx`
                <div class="lego-tag ${item.color ? ('lego-tag-' + item.color) : ''}" id="${item.key}" title="${item.value}">
                    <span class="lego-tag-text">${item.value}</span>
                    ${opts.closable ? hx`<i class="anticon anticon-cross lego-tag-close"></i>` : ''}
                </div>
            `)}
            ${!opts.readonly ? hx`<buttons id="buttons_${opts.vid}"></buttons>` : ''}
        </div>
        `;
        return this.vDom;
    }
    addItem(obj = {}){
        let opts = this.options;
        let hasOne = opts.data.find(item => item.key == obj.key);
        if(!hasOne){
            opts.data.push(obj);
            if(typeof opts.onAdd == 'function') opts.onAdd(this, obj);
        }
    }
    getValue(){
        return this.options.data;
    }
    onClose(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            id = target.parent().attr('id');
        opts.data = opts.data.filter(item => item.key !== id);
        if(typeof opts.onClose == 'function') opts.onClose(this, id);
        this.refresh();
    }
    onChange(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            id = target.attr('id'),
            item = opts.data.find(item => item.key == id);
        if(typeof opts.onChange == 'function') opts.onChange(this, item);
    }
}
Lego.components('tags', Tags);
export default Tags;
