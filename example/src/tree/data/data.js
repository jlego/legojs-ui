class Data extends Lego.UI.Basedata {
    constructor(opts = {}) {
        const options = {
            // 树型下拉菜单
            treedata: {
                url: '/example/data/treeselectdata.json',
                method: 'GET'
            }
        };
        Object.assign(options, opts);
        super(options);
    }
    treedata(result, view){
        if(result.data){
            return result.data.map(item => {
                item.pId = item.parentId;
                item.iconSkin = "folder";
                return item;
            });
        }
        return [];
    }
}
export default new Data();
