class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
    }
    _renderComponents(){
        const that = this;
        if(this.options.components.length && !this.isloaded) {
            this.isloaded = true;
            this.options.components.forEach(function(item, i){
                Lego.create(item);
            });
        }
        // 是否渲染滚动条
        if (this.options.scrollbar) {
            if (!this._$el.css('position')) this._$el.css('position', 'relative');
            const container = this.$('.perfect-scrollbar')[0];
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
