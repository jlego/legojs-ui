class ListData extends HBY.Data {
    constructor(opts = {}) {
        const options = {
            'test': {
                url: './content.json',
                listTarget: 'data',
                model: {
                    first: '',
                    last: '',
                    id: 0
                },
                // reset: true
            },
            'ok': {
                url: './content.json'
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    parse(datas) {
        // console.warn(datas);
        return datas[0].data;
    }
}
export default new ListData();
