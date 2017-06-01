/**
 * 开关
 * ronghui Yu
 * 2017/5/22
 */
import './asset/index.scss';

class Switchs extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            checked: false,
            themeColor: '#01a8fe',
            disabled: false,
            size: 'sm',  //sm, lg
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="lego-switch">
            <input type="hidden" name="${opts.name}" value="${opts.checked ? 1 : ''}" />
            <span class="switch-${opts.checked ? 'on' : 'off'} ${opts.disable ? 'switch-disabled' : ''} ${opts.size}"
            onclick=${this.onClick.bind(this)}>
                <span class='slider'></span>
            </span>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let opts = this.options,
            that = this;
        if (opts.themeColor) {
            let color = opts.themeColor;
            this.$(".switch-on").css({
                'border-color' : color,
                'box-shadow' : color + ' 0px 0px 0px 16px inset',
                'background-color' : color
            });
            this.$(".switch-off").css({
                'border-color' : '#ddd',
                'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
                'background-color' : '#ddd'
            });
        }
    }
    onClick(event){
        event.stopPropagation();
        let target = $(event.currentTarget);
        if (target.hasClass("switch-disabled")) {
            return;
        }
        if (target.hasClass("switch-on")) {
            this.showOff();
        }else{
            this.showOn();
        }
    }
    showOn() {
        let opts = this.options;
        opts.checked = true;
       if(typeof opts.onChange == 'function') opts.onChange(this, true);
    }
    showOff() {
        let opts = this.options;
        opts.checked = false;
       if(typeof opts.onChange == 'function') opts.onChange(this, false);
    }
}
Lego.components('switchs', Switchs);
export default Switchs;
