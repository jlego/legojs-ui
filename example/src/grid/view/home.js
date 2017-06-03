import '../asset/index.scss';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let data = [{
            key: '01',
            value: '/example/dist/img/timg.jpg',
            name: '张三',
            description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }, {
            key: '02',
            value: '/example/dist/img/timg.jpg',
            name: '李四',
            description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }, {
            key: '03',
            value: '/example/dist/img/timg.jpg',
            name: '老五',
            description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }, {
            key: '04',
            value: '/example/dist/img/timg.jpg',
            name: '小二',
            description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }, {
            key: '05',
            value: '/example/dist/img/timg.jpg',
            name: '老大',
            description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }];
        const options = {
            components: [{
                el: '#grid1',
                itemContent(item, index){
                    return hx`
                    <div class="thumbnail">
                      <img src="${item.value}">
                      <div class="caption">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                      </div>
                    </div>
                    `;
                },
                itemClass: 'col-sm-6 col-md-3',
                selectAble: false,
                onClick(self, result) {
                    console.warn(result);
                },
                data: Array.from(data)
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-12">
              <grid id="grid1"></grid>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
