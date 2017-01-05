class Test extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        console.warn('yyyyyyyyyyyyyy', this.options.vid);
        return hx`<div>大工土大木</div>`;
    }
}
Lego.components('test', Test);
export default Test;
