/**
 * 人员选择
 * ronghui Yu
 * 2017/1/15
 * item: {
 *     key: '',
 *     value: '', //头像图片地址
 *     name: ''
 * }
 */
import './asset/index.scss';

class Avatar extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .add': 'onAdd',
                'click .remove': 'onRemove',
                'click .change': 'onChange',
            },
            size: '', //大小
            name: '',
            multiple: false,  //多选
            readonly: false,
            radius: '50%',  //半径
            showName: true,  //是否显示名称
            width: '',
            height: '',
            value: [],
            onAdd(){},
            onRemove(){},
            onChange(){}   //事件回调
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        function getItem(data){
            return hx`
            <div class="lego-avatar-item">
                <div class="lego-avatar-img" style="${data.value ? ('background-image:url(' + val(data.value) + ');') : ''}" id="${data.key}">
                    ${options.multiple && !options.readonly ? hx`<i class="anticon anticon-close remove" title="删除 ${val(data.name)}"></i>` : hx`<i class="anticon anticon-swap change" title="更换 ${val(data.name)}"></i>`}
                </div>
                ${options.showName ? hx`<label>${val(data.name)}</label>` : ''}
            </div>
            `;
        }
        const vDom = hx`
        <div class="lego-avatar ${options.size} clearfix">
        ${options.value.length ? hx`
            ${options.multiple ? options.value.map(item => {
                return getItem(item);
            }) : getItem(options.value[0])}
        ` : ''}
        ${(!options.value.length || options.multiple) && !options.readonly ? hx`
            <div class="lego-avatar-item addbtn">
                <div class="lego-avatar-img">
                <i class="anticon anticon-plus add" title="添加"></i>
                </div>
            </div>
            ` : ''}
            <input type="hidden" value="${options.value.map(item => item.key).join(',')}" name="${options.name}">
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        if(this.options.width) this.$('.lego-avatar-img').width(this.options.width);
        if(this.options.height) this.$('.lego-avatar-img').height(this.options.height);
        this.$('.lego-avatar-img, .lego-avatar-img i').css('border-radius', this.options.radius);
    }
    onAdd(event){
        event.stopPropagation();
        if(typeof this.options.onAdd == 'function') this.options.onAdd(this, event);
    }
    onRemove(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            itemEl = target.parent(),
            key = itemEl.attr('id').toString();
        this.options.value = this.options.value.filter(item => item.key.toString() !== key);
        this.refresh();
        if(typeof this.options.onRemove == 'function') this.options.onRemove(this, key);
    }
    onChange(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            itemEl = target.parent(),
            key = itemEl.attr('id');
        if(typeof this.options.onChange == 'function') this.options.onChange(this, key);
    }
}
Lego.components('avatar', Avatar);
export default Avatar;
