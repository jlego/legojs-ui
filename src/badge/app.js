import './asset/scss/fonts.scss';
import './asset/css/style.css';

class Badge extends Lego.View {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #400': 'theClick'
            }
        };
        Lego.$.extend(true, options, opts);
        super(options);
    }
    render() {
        let data = this.data.list || [];
        let vDom = hx`<div>
          ${data.map((model, i) => {
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
