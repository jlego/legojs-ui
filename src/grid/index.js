/**
 * 网格组件
 * ronghui Yu
 * 2017/6/3
 */
import './asset/index.scss';

class GridView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-item': 'onEvent',
                'mouseenter .lego-item': 'onEvent',
                'mouseleave .lego-item': 'onEvent'
            },
            itemContent: '',    //function 项模板
            itemClass: '',  //项样式
            data: [],
            selectAble: false,  //可否选中
            onSelected(){},  //选中后回调
            onOver(){},
            onOut(){},
            onClick(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options,
            index = 0;
        let vDom = hx`
        <div class="row lego-grid">
            ${opts.data.map(item => {
                index++;
                return hx`<div class="lego-item ${opts.itemClass}" id="lego-item_${val(item.key)}">
                ${typeof opts.itemContent == 'function' ? opts.itemContent(item, index - 1) : opts.itemContent}
                </div>`;
            })}
        </div>`;
        return vDom;
    }
    onEvent(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            key = target.attr('id').replace('lego-item_', ''),
            hasOne = opts.data.find(item => item.key == key);
        switch(event.type){
            case 'click':
                if(hasOne){
                    if(opts.selectAble){
                        hasOne.selected = !hasOne.selected;
                        if(typeof opts.onSelected == 'function') opts.onSelected(this, hasOne);
                        this.refresh();
                    }
                }
                if(typeof opts.onClick == 'function') opts.onClick(this, hasOne, event);
                break;
            case 'mouseenter':
                if(typeof opts.onOver == 'function') opts.onOver(this, hasOne, event);
                break;
            case 'mouseleave':
                if(typeof opts.onOut == 'function') opts.onOut(this, hasOne, event);
                break;
        }
    }
    getSelected(){
        return this.options.data.filter(item => item.selected);
    }
}
Lego.components('grid', GridView);
export default GridView;
