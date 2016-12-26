class ListView extends Lego.UI.Baseview {
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
        let options = this.options.data || [];
        debug.warn('更新了视图', options);
        let vDom = hx`<div>
          <h1>hello world!</h1>
          ${options.map((model, i) => {
            return hx`<a href="#/home/list" style="display:block;">${model.last}</a>\n`
          })}
          <home id="test"></home>
        </div>`;
        return vDom;
    }
    theClick(event){
        event.stopPropagation();
        debug.warn('66666666666');
    }
}
export default ListView;
