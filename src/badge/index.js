class Badge extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #400': 'theClick'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let options = this.options || [];
        let vDom = hx`<div>
          ${options.map((model, i) => {
            return hx`<a id="${model.first}" href="#/home" style="display:block;">${model.first}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        Lego.trigger('data_update', {aa: 1});
    }
}
export default Badge;
