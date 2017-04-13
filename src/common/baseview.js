import View from './view';
import Loading from '../loading/index';

class Baseview extends Lego.UI.View {
    constructor(opts = {}) {
        const options = {
            loading: false
        };
        Object.assign(options, opts);
        super(options);
        this.setEvent();
        this.renderScroll();
    }
    fetch(opts = {}){
        let that = this;
        if(this.options.dataSource){
            if(this.options.loading) this._showLoading();
            const dataSource = this.options.dataSource;
            dataSource.api = Array.isArray(dataSource.api) ? dataSource.api : [dataSource.api];
            dataSource.api.forEach(apiName => {
                dataSource[apiName] = Lego.extend({}, dataSource.server.options[apiName], dataSource[apiName] || {}, opts);
            });
            if(dataSource.server){
                let server = null;
                if(typeof dataSource.server == 'function'){
                    server = new dataSource.server();
                }else{
                    server = dataSource.server;
                }
                server.fetch(dataSource.api, dataSource.isAjax && window.$ ? dataSource : {}, (resp) => {
                    this.options.data = resp;
                    if(this.options.loading) this._hideLoading();
                    this.dataReady();
                    this.components();
                    this.refresh();
                }, this);
            }
        }else{
            this._renderComponents();
        }
    }
    _showLoading(){
        let opts = this.options;
        if(!this.loadingView){
            this.loadingView = Lego.create(Loading, typeof opts.loading == 'object' ? opts.loading : {});
            this.$el.css('position', 'relative');
            this.$el.prepend(this.loadingView.el);
        }
    }
    _hideLoading(){
        this.loadingView.$el.fadeOut("fast", function(){
            $(this).remove();
        });
        this.loadingView = null;
    }
    renderScroll(){
        const options = this.options,
            that = this;
        function initScroll($el){
            $el.each(function(index, el){
                const container = $(this),
                    eventName = "mousemove.ps" + index;
                if(!container.hasClass('ps-container')){
                    container.css('position', 'relative');
                    Ps.initialize(container[0], options.scrollbar);
                    that.$el.off(eventName).on(eventName, function() {
                        Ps.update(container[0]);
                    });
                }
            });
        }
        // 是否渲染滚动条
        if (options.scrollbar) {
            const scrollbarEl = this.$('.scrollbar').length ? this.$('.scrollbar') : [];
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
