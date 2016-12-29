import Modal from "../modal/index";

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
    },
    // 确认对话框
    dialog(option) {        
        const typeArr = {
            success: 'anticon anticon-check-circle-o',
            info: 'anticon anticon-info-circle-o',
            warning: 'anticon anticon-exclamation-circle-o',
            error: 'anticon anticon-cross-circle-o',
            alert: 'anticon anticon-question-circle-o'
        };
        const options = {
            msgType: '',
            type: 'dialog',
            title: '信息提示',
            size: '',
            content: '',
            // confirm(){},
            onOk() {},
            onCancel() {}
        };
        if (typeArr[options.msgType] && typeof options.content == 'string') {
            options.content = '<span class="' + typeArr[options.msgType] + ' dialog-icon"></span>' +
                '<div class="dialog-content">' + options.content + '</div>';
        }
        Object.assign(options, opts);
        Lego.create(Modal, options);
    }
};
export default Util;