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
}
Lego.components('Baseview', Baseview);
export default Baseview;
