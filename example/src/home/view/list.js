class ListView extends HBY.View {
    constructor(opts = {}) {
        const options = {
            events: {
                'click #test': 'theClick'
            },
            listen: {
                'data_update': (data) => {
                    debug.warn('ttttttttttt', data);
                }
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    render() {
        let data = this.data.list || [];
        debug.warn('更新了视图', data);
        let vDom = hx`<div>
          <h1>hello world!</h1>
          ${data.map((model, i) => {
            return hx`<a id="${model.first}" href="#/home/list" style="display:block;">${model.last}</a>\n`
          })}
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        debug.warn('66666666666');
    }
}
export default ListView;
