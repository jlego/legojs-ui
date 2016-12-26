class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
    }
    _renderComponents(){
        const that = this;
        if(this.options.components){
            if(this.options.components.length && !this.isloaded) {
                this.isloaded = true;
                this.options.components.forEach(function(item, i){
                    const tagName = item.el ? that.$(item.el)[0].tagName : '';
                    if(tagName) Lego.create(Lego.UI[tagName.toLowerCase()], item);
                });
            }
        }
        // 是否渲染滚动条
        if (this.options.scrollbar) {
            const scrollbarEl = this.$('.scrollbar');
            const container = scrollbarEl[0];
            if (!scrollbarEl.parent().css('position')) scrollbarEl.parent().css('position', 'relative');
            if(container){
                Ps.initialize(container, this.options.scrollbar);
                this.$el.off("mousemove.ps").on("mousemove.ps", function() {
                    Ps.update(container);
                });
            }
        }
    }
}
export default Baseview;
