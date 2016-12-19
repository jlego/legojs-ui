class ListView extends HBY.View {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #test': 'theClick'
            },
            listen: {
                'data_update': (data) => {
                    debug.warn('pppppppppp', data);
                }
            }
        };
        HBY.$.extend(true, options, opts);
        super(options);
    }
    render() {
        let data = this.data.list || [];
        let vDom = hx`<div>
          ${data.map((model, i) => {
            return hx`<a id="${model.first}" href="#/home/list" style="display:block;">${model.last}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        debug.warn('66666666666');
    }
}
export default ListView;
