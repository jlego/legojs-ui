/**
 * 气泡提示框
 * ronghui Yu
 * 2017/1/6
 */
// import './asset/index.scss';
import '../vendor/bootstrap/popover';

class Popover{
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
            placement: 'right', //显示位置
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            eventName: 'click',
            constraints: [], //'hover focus'
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
            el.popover(this.options);
            el.on('hidden.bs.popover', function() {
                if (typeof that.onHidden === 'function') that.onHidden(event);
            });
        }
        return el;
    }
}
const fun = function(opts){ return new Popover(opts) };
Lego.components('popover', fun);
export default fun;
