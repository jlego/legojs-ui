// import Events from "events";

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
    }
};
export default Util;