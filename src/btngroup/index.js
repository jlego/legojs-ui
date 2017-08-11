/**
 * 按钮组
 * ronghui Yu
 * 2017/1/3
 */
import './asset/index.scss';

class Btngroup extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click button': 'onClick'
            },
            size: '',    //设置按钮大小，可选值为 small large 或者不设
            data: [],
            onClick(){}   //click 事件的 handler
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="lego-btngroup btn-group btn-group-${options.size}">
        ${options.data.map(item => hx`
        <button type="button" class="btn btn-${item.type || 'secondary'} ${item.active ? 'active' : ''}">
            ${val(item.html || item.text)}
        </button>
        `)}
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        this.$('button').each(function(index, item){
            $(item).data('index', index);
        });
    }
    onClick(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            index = target.data('index'),
            model = this.options.data[index];
        if(typeof this.options.onClick === 'function') this.options.onClick(this, model, event);
    }
}
Lego.components('btngroup', Btngroup);
export default Btngroup;
