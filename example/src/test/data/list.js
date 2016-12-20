class ListData extends HBY.Data {
    constructor(opts = {}) {
        const options = {
            'gg': {
                url: './content2.json',
                listTarget: 'data',
                model: {
                    first: '',
                    last: '',
                    id: 0
                },
                // reset: true
            },
            'ff': {
                url: './content2.json'
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
