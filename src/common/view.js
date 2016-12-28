class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
        this.renderScroll();
    }
    renderScroll(){
        // 是否渲染滚动条
        if (this.options.scrollbar) {
            const scrollbarEl = this.$('.scrollbar');
            const container = scrollbarEl[0];
            const posi = scrollbarEl.parent().css('position');
            if (!posi || posi !== 'fixed') scrollbarEl.parent().css('position', 'relative');
            if(scrollbarEl.length){
                Ps.initialize(container, this.options.scrollbar);
                this.$el.off("mousemove.ps").on("mousemove.ps", function() {
                    Ps.update(container);
                });
            }
        }
    }
    // 取层飘浮方向
    static getDirection(el, dropEl) {
        console.warn(dropEl);
        el = el ? (el instanceof $ ? el : $(el)) : $('body');
        let windowW = $(window).width(),
            windowH = $(window).height(),
            _X = el.offset().left,
            _Y = el.offset().top,
            elW = el.width(),
            elH = el.height(),
            dropW = dropEl.width(),
            dropH = dropEl.height(),
            upDown = '',
            leftRight = '',
            elHeight = el.height();
        upDown = dropH > (windowH - _Y - elH) ? 'up' : 'bottom';
        leftRight = dropW > (windowW - _X) ? 'Left' : 'Right';
        return {
            _x: leftRight,
            _y: upDown
        };
    }
}
export default Baseview;
