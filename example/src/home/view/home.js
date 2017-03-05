class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            // el: 'div#uuu88',
            events: {
                'click #400': 'theClick'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let options = this.options.data || [];
        let vDom = hx`<div>
          ${options.map((model, i) => {
            return hx`<a href="#/home" style="display:block;">${model.first}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        Lego.trigger('data_update', {aa: 1});
    }
}
export default HomeView;
