class Basedata extends Lego.Data {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
    }
    parse(datas, apiName, view){
        if(datas.error){
            Lego.UI.message('error', datas.error);
        }
        if(typeof this[apiName] == 'function') return this[apiName](datas, view);
        return datas;
    }
}
Lego.components('Basedata', Basedata);
export default Basedata;
