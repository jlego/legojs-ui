const Util = {
    // 取层飘浮方向
    getDirection(el, dropEl) {
        el = el instanceof $ ? el : $(el);
        let windowW = $(window).width(),
            windowH = $(window).height(),
            _X = el.offset().left,
            _Y = el.offset().top,
            elW = el.width(),
            elH = el.height(),
            dropW = dropEl.width(),
            dropH = dropEl.height(),
            upDown = dropH > (windowH - _Y - elH) ? 'top' : 'bottom',
            leftRight = dropW > (windowW - _X - elW) ? 'Right' : 'Left';
        // console.warn(dropH, windowH, _Y, elH);
        return {
            _x: leftRight,
            _y: upDown
        };
    },
    // 动画
    animateCss(el, animationName, callback) {
        el = el instanceof $ ? el : $(el);
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        el.addClass(animationName).one(animationEnd, function() {
            el.removeClass(animationName);
            if (typeof callback == 'function') callback();
        });
    }
};
// 判断是否空值(主要用于视图模板)
window.val = function(value, defaultValue){
    return value ? value : (defaultValue || '');
};
Lego.components('Util', Util);
export default Util;