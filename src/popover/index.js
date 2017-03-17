/**
 * 气泡提示框
 * ronghui Yu
 * 2017/1/6
 */
import './asset/index.scss';
import '../vendor/bootstrap/popover';

let Popover = function(opts = {}) {
    const options = {
        el: '',
        selector: false,
        title: '', //标题
        content: '', //内容
        animation: true, //动画
        container: false, //container: 'body'
        delay: 0, //延时delay: { "show": 500, "hide": 100 }
        html: false, //
        showNow: false,     //是否马上显示
        placement: 'bottom', //显示位置
        template: '<div class="popover"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        eventName: 'click',
        constraints: [], //'hover focus'
        offset: '0 0', //0, 0
        onClose() {} //隐藏回调
    };
    Object.assign(options, opts);
    let el = options.el instanceof $ ? options.el : $(options.el),
        _eventName = 'click.popover',
        isOpen = !!el.attr('data-isopen'),
        bodyEl = $('body, .modal-body');
    if(el.length){
        if(options.showNow){
            el.popover('dispose');
        }
        el.popover({
            selector: options.selector,
            title: options.title,
            content: options.content,
            animation: options.animation,
            container: options.container,
            delay: options.delay,
            html: !!options.html,
            placement: options.placement,
            template: options.template,
            constraints: options.constraints,
            trigger: options.eventName,
            offset: options.offset
        });
        el.on('hidden.bs.popover', function() {
            if (typeof options.onClose === 'function') options.onClose(event);
        });
        if(options.showNow){
            bodyEl.trigger('click', el);
            bodyEl.off(_eventName).on(_eventName, function(event, data){
                if(data !== el[0]){
                    el.popover('hide');
                    el.attr('data-isopen', '');
                }
            });
            el.on('shown.bs.popover', function() {
                $('.popover').off('click').on('click', function(event){
                    event.stopPropagation();
                });
            });
            if(!isOpen){
                el.popover('show');
                el.attr('data-isopen', 'true');
            }else{
                el.attr('data-isopen', '');
            }
        }
    }
    return el;
}
const fun = function(opts){
    return Popover(opts);
};
Lego.components('popover', fun);
export default fun;
