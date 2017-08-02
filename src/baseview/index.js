import perfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';
import Loading from '../loading/index';
import Permis from '../permis/index';
window.Ps = perfectScrollbar;
// 判断是否空值(主要用于视图模板)
window.val = function(value, defaultValue){
    return value ? (typeof value == 'function' ? value(defaultValue) : value) : (defaultValue || '');
};
class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {
            events: null,
            loading: false
        };
        Object.assign(options, opts);
        super(options);
        this.setEvent();
        this.renderScroll();
    }
    /**
     * [setEvent 设置dom]
     * @param {[type]} element [description]
     */
    setEvent() {
        this.unBindEvents();
        this.delegateEvents();
        return this;
    }
    bindEvents(eventName, selector, listener){
        this.$el.on(eventName + '.delegateEvents' + this.options.vid, selector, listener);
        return this;
    }
    unBindEvents() {
        if (this.$el) this.$el.off('.delegateEvents' + this.options.vid);
        return this;
    }
    /**
     * [delegateEvents 通过解析配置绑定事件]
     * @return {[type]} [description]
     */
    delegateEvents() {
        const events = this.options.events;
        const delegateEventSplitter = /^(\S+)\s*(.*)$/;
        if (!events) return this;
        for (let key in events) {
            let method = events[key];
            if (typeof method !== 'function') method = this[method];
            if (!method) continue;
            let match = key.match(delegateEventSplitter);
            this.bindEvents(match[1], match[2], method.bind(this));
        }
        return this;
    }
    _showLoading(){
        let opts = this.options;
        this.loadingView = Lego.getView('#lego-loading-' + opts.vid);
        if(!this.loadingView){
            this.addCom(Object.assign({
                el: '#lego-loading-' + opts.vid
            }, opts.loading || {}));
            this._renderComponents();
            this.$el.css('position', 'relative');
        }else{
            this.loadingView.$el.fadeIn("fast");
        }
    }
    _hideLoading(){
        let opts = this.options;
        this.loadingView = Lego.getView('#lego-loading-' + opts.vid);
        if(this.loadingView){
            this.loadingView.$el.fadeOut("fast");
        }
        if(Array.isArray(opts.data)){
            opts.nodata = !opts.data.length ? true : false;
        }
    }
    renderScroll(){
        let opts = this.options,
            that = this;
        function initScroll($el){
            $el.each(function(index, el){
                let container = $(this),
                    eventName = "mousemove.ps" + index;
                if(!container.hasClass('ps-container')){
                    container.css('position', 'relative');
                    Ps.initialize(container[0], opts.scrollbar);
                    that.$el.off(eventName).on(eventName, function() {
                        Ps.update(container[0]);
                    });
                }
            });
        }
        // 是否渲染滚动条
        if (opts.scrollbar) {
            let scrollbarEl = this.$('.scrollbar').length ? this.$('.scrollbar') : [];
            if(scrollbarEl.length){
                initScroll(scrollbarEl);
            }
            if(this.$el.hasClass('scrollbar')) initScroll(this.$el);
        }
    }
    /**
     * 加载业务组件
     */
    importWidget(comName, callback){
        let that = this;
        if(/\.js/g.test(comName)){
            Lego.loadScript(comName, function(){
                if(typeof callback == 'function') callback(that);
            }, comName);
        }else{
            if(!Lego.UI[comName]){
                Lego.loadCss(Lego.config.rootUri + 'widget/' + comName + '/app.css', comName);
                Lego.loadScript(Lego.config.rootUri + 'widget/' + comName + '/app.js', function(){
                    if(typeof callback == 'function') callback(that);
                }, comName);
            }else{
                if(typeof callback == 'function') callback(this);
            }
        }
    }
}
Lego.components('Baseview', Baseview);
export default Baseview;
