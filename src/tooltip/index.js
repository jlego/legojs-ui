/**
 * 文字提示框
 * ronghui Yu
 * 2017/1/6
 */
// import './asset/index.scss';
import '../vendor/bootstrap/tooltip';

class Tooltip{
    constructor(opts = {}) {
        const options = {
            el: '',
            selector: false,
            title: '', //标题
            content: '', //内容
            animation: true, //动画
            container: false, //container: 'body'
            delay: 0, //延时delay: { "show": 500, "hide": 100 }
            html: false, //
            placement: 'top', //显示位置
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            eventName: 'hover focus',
            constraints: [], //
            offset: '0 0', //0, 0
            onHidden() {} //隐藏回调
        };
        Object.assign(options, opts);
        this.el = options.el;
        this.onHidden = options.onHidden;
        this.options = {
            selector: options.selector,
            title: options.title,
            content: options.content,
            animation: options.animation,
            container: options.container,
            delay: options.delay,
            html: options.html,
            placement: options.placement,
            template: options.template,
            constraints: options.constraints,
            trigger: options.eventName,
            offset: options.offset
        };
        this.render();
    }
    render(){
        const that = this;
        const el = this.el instanceof $ ? this.el : $(this.el);
        if(el.length){
            el.tooltip(this.options);
            el.on('hidden.bs.tooltip', function() {
                if (typeof that.onHidden === 'function') that.onHidden(event);
            });
        }
        return el;
    }
}
const fun = function(opts){ return new Tooltip(opts) };
Lego.components('tooltip', fun);
export default fun;
