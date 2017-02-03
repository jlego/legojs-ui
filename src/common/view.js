class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
        this.renderScroll();
    }
    renderScroll(){
        const options = this.options,
            that = this;
        // 是否渲染滚动条
        if (options.scrollbar) {
            const scrollbarEl = this.$el.find('.scrollbar');
            if(scrollbarEl.length){
                scrollbarEl.each(function(index, el){
                    const container = $(this),
                        eventName = "mousemove.ps" + index;
                    container.css('position', 'relative');
                    Ps.initialize(container[0], options.scrollbar);
                    that.$el.off(eventName).on(eventName, function() {
                        Ps.update(container[0]);
                    });
                });
            }
        }
    }
}
Lego.components('Baseview', Baseview);
export default Baseview;
