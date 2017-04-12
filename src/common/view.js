class View extends Lego.View {
    constructor(opts = {}) {
        const options = {
            events: null
        };
        Object.assign(options, opts);
        super(options);
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
}
Lego.components('View', View);
export default View;
