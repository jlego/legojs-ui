/**
 * 数据类: 类名称
 * 作者: yuronghui
 * 创建日期: 2017/5/31
 */
class Data extends Lego.UI.Basedata {
    constructor(opts = {}) {
        const options = {
            // 搜索自动完成
            search: {
                url: '/example/data/autocomplete.json',
                method: 'GET'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    search(result, view){
        if(result.data){
            return result.data.map(item => {
                item.key = item.id;
                item.value = item.NAME;
                return item;
            });
        }
        return [];
    }
}
export default new Data();
