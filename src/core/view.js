import "object.observe";
import hyperx from 'hyperx';
import vdom from 'virtual-dom';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
window.hx = hyperx(vdom.h);

class View {
	/**
	 * [constructor description]
	 * @param  {Object} option [description]
	 * @return {[type]}        [description]
	 */
    constructor(opts = {}) {
        const that = this;
        this.options = {
            events: null,
            listen: null,
            config: {}
        };
        Lego.$.extend(true, this.options, opts);
        this.Eventer = Lego.Eventer;
        this.setElement(this.options.el);
        this.data = this.options.data || this.data || {};
        this.server = null;
        this.isloaded = false;  //是否已加载过
        this._renderRootNode();
        this._observe();
        if(this.options.dataSource){
            const dataSource = this.options.dataSource;
            if(dataSource.server){
                if(typeof dataSource.server == 'function'){
                    this.server = new dataSource.server();
                }else{
                    this.server = dataSource.server;
                }
                this.server.fetch(dataSource.api, (resp) => {
                    if(Array.isArray(resp)){
                        this.data.list = resp;
                    }else{
                        this.data = resp;
                    }
                    this.refresh();
                });
            }
        }else{
            this._renderComponents();
        }
    }
    /**
     * [_renderRootNode description]
     * @return {[type]} [description]
     */
    _renderRootNode(){
        const content = this.render();
        this.oldNode = content;
        this.rootNode = vdom.create(content);
        this.$el[this.options.insert](this.rootNode);
    }
    /**
     * [_renderComponents 渲染组件]
     * @return {[type]} [description]
     */
    _renderComponents(){
        const that = this;
        if(this.options.components.length && !this.isloaded) {
            this.isloaded = true;
            this.options.components.forEach(function(item, i){
                Lego.create(item);
            });
        }
    }
    /**
     * [_observe 监听数据变化并刷新视图]
     * @return {[type]} [description]
     */
    _observe(){
        const that = this;
        if(this.data && typeof this.data === 'object'){
            Object.observe(this.data, (changes) =>{
                // debug.log(changes);
                const newNode = that.render();
                let patches = diff(that.oldNode, newNode);
                that.rootNode = patch(that.rootNode, patches);
                that.oldNode = newNode;
                that._renderComponents();
            });
        }
    }
    /**
     * [setElement description]
     * @param {[type]} element [description]
     */
    setElement(element) {
        this.unEvents();
        this._setElement(element);
        this.delegateEvents();
        return this;
    }
    /**
     * [_setElement description]
     * @param {[type]} el [description]
     */
    _setElement(el){
        this.$el = el instanceof Lego.$ ? el : Lego.$(el);
        this.el = this.$el[0];
    }
    /**
     * [delegateEvents description]
     * @return {[type]} [description]
     */
    delegateEvents() {
        const events = this.options.events;
        const delegateEventSplitter = /^(\S+)\s*(.*)$/;
        if (!events) return this;
        this.unEvents();
        for (let key in events) {
            let method = events[key];
            if (typeof method !== 'function') method = this[method];
            if (!method) continue;
            let match = key.match(delegateEventSplitter);
            this.delegate(match[1], match[2], method.bind(this));
        }
        return this;
    }
    /**
     * [delegate description]
     * @param  {[type]} eventName [description]
     * @param  {[type]} selector  [description]
     * @param  {[type]} listener  [description]
     * @return {[type]}           [description]
     */
    delegate(eventName, selector, listener) {
        this.$el.on(eventName + '.delegateEvents' + this.options.id, selector, listener);
        return this;
    }
    /**
     * [unEvents description]
     * @return {[type]} [description]
     */
    unEvents() {
        if (this.$el) this.$el.off('.delegateEvents' + this.options.id);
        return this;
    }
    /**
     * [undelegate description]
     * @param  {[type]} eventName [description]
     * @param  {[type]} selector  [description]
     * @param  {[type]} listener  [description]
     * @return {[type]}           [description]
     */
    undelegate(eventName, selector, listener) {
        this.$el.off(eventName + '.delegateEvents' + this.options.id, selector, listener);
        return this;
    }
    /**
     * [$ description]
     * @param  {[type]} selector [description]
     * @return {[type]}          [description]
     */
    $(selector) {
        return this.$el.find(selector);
    }
    /**
     * render 渲染视图
     * @return {[type]} [description]
     */
    render() {
        return this;
    }
    /**
     * [refresh 刷新视图]
     * @return {[type]} [description]
     */
    refresh() {
        this.data.__v = Lego.randomKey();
    }
    /**
     * [remove 销毁视图]
     * @return {[type]} [description]
     */
    remove(){
        this.unEvents();
        this.$el.children().remove();
    }
}
export default View;