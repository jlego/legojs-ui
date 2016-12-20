class HomeView extends HBY.View {
    constructor(opts = {}) {
        const options = {
            // el: 'div#uuu88',
            events: {
                'click #400': 'theClick'
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        let data = this.data || [];
        let vDom = hx`<div>
          ${data.map((model, i) => {
            return hx`<a id="${model.first}" href="#/home" style="display:block;">${model.last}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        HBY.trigger('data_update', {aa: 1});
    }
}
export default HomeView;
