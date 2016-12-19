// import 'whatwg-fetch'
class Data {
    /**
     * [constructor 构造函数]
     * @param  {Object} options [description]
     *  'apiName': {
     *      model: null,    //数据模型
     *      listTarget: '',  //是列表的目标
     *      url: '' //接口地址
     *      data: null  //结果数据
     *  },
     * @return {[type]}         [description]
     */
    constructor(opts = {}) {
        this.datas = new Map();
        this.Eventer = Lego.Eventer;
        for(let key in opts){
            this.datas.set(key, opts[key]);
            this.datas.get(key).data = {};
        }
    }
    /**
     * [setOptions 设置参数]
     * @param  {[type]} apiName [description]
     * @param  {Object} opts    [description]
     * @return {[type]}         [description]
     */
    setOptions(apiName, opts = {}) {
        // console.log('setter: ' + value);
        if(!this.datas.get(apiName)) return this;
        const newOpts = Lego.$.extend(true, this.datas.get(apiName), opts);
        this.datas.set(apiName, newOpts);
        return this;
    }
    /**
     * [fetch 加载数据接口]
     * @param  {[type]}   apiNameArr [description]
     * @param  {Function} callback   [description]
     * @return {[type]}              [description]
     */
    fetch(apiNameArr, callback){
        let that = this;
        apiNameArr = Array.isArray(apiNameArr) ? apiNameArr : [apiNameArr];
        this.__fetch(apiNameArr).then((datas) => {
            apiNameArr.forEach((apiName, index)=> {
                const data = datas[index];
                const listTarget = that.datas.get(apiName).listTarget;
                const model = that.datas.get(apiName).model;
                // 添加模型数据
                if(data){
                    if(listTarget && Array.isArray(data[listTarget]) && model){
                        data[listTarget].forEach(function(item, i){
                            data[listTarget][i] = Lego.$.extend({}, model, item);
                        });
                    }
                    if(!listTarget && Array.isArray(data) && !model){
                        data.forEach(function(item, i){
                            data[i] = Lego.$.extend({}, model, item);
                        });
                    }
                }
                that.datas.get(apiName).data = data;
            });
            if(typeof callback == 'function') callback(that.parse(datas));
        });
    }
    /**
     * [fetchData 异步请求数据]
     * @param  {Object} options [description]
     * @return {[type]}         [description]
     */
    async __fetch(apiNameArr){
        let that = this,
            results = [];
        try {
            // 并发读取远程URL
            let promisesArr = apiNameArr.map(async apiName => {
                let option = that.datas.get(apiName) || {};
                if(!Lego.$.isEmptyObject(option.data) && !option.reset){
                    // 取缓存数据
                    return await option.data;
                }else if(that.datas.has(apiName) && option.url && (Lego.$.isEmptyObject(option.data) || option.reset)){
                    // 取新数据
                    let req = new Request( option.url, {
                        method: option.method || "GET",
                        headers: option.headers || 'none',
                        mode: 'same-origin', // same-origin|no-cors（默认）|cors
                        credentials: 'include',  //omit（默认，不带cookie）|same-origin(同源带cookie)|include(总是带cookie)
                        body: option.body || undefined
                    });
                    let response = await fetch(req);
                    return response.json();
                }
            });
            // 按次序输出
            for (let promise of promisesArr) {
                let res = await promise;
                results.push(res);
            }
        } catch (err) {
            debug.log(err);
        }
        return results;
    }
    /**
     * [parse 组装数据]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    parse(datas){
        return datas;
    }
    /**
     * [getData 取数据]
     * @return {[type]} [description]
     */
    getData(apiName) {
        if(apiName){
            return this.datas.get(apiName) ? this.datas.get(apiName) : {};
        }else{
            return this.datas;
        }
    }
}
export default Data;
