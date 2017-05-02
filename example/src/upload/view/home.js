// import Upload from '../../../../dist/upload';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#upload1',
                name: 'uploadname',
                multiple: true,
                // dataSource: {
                //     api: '',
                //     server: null
                // },
                onComplete(self, result) {
                    console.warn('上传成功了', result);
                }
            }, {
                el: '#upload2',
                name: 'uploadname2',
                buttonText: '单文件',
                multiple: false,
                // hideAddBtn: true,
                onComplete(self, result) {
                    console.warn('上传成功了2', result);
                }
            }, {
                el: '#upload3',
                name: 'uploadname3',
                readonly: true,
                value: [{
                    "id": 100124028001,
                    "extension": "png",
                    "height": 474,
                    "mime_type": "image/png",
                    "name": "2017-01-10_183019.png",
                    "size": 124290,
                    "url": "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png" ,
                    "width": 473
                }, {
                    "id": 100124028002,
                    "extension": "png",
                    "height": 474,
                    "mime_type": "image/png",
                    "name": "2017-01-10_183018.png",
                    "size": 124290,
                    "url": "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681068.png" ,
                    "width": 473
                }],
                onComplete(result) {
                    console.warn('上传成功了3', result);
                }
            }, {
                el: '#upload4',
                name: 'uploadname4',
                multiple: false,
                type: 'avatar',
                previewOption:{
                    width: 150,
                    height: 150
                },
                // hideAddBtn: true,
                onComplete(self, result) {
                    console.warn('上传成功了2', result);
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const vDom = hx `
        <div id="pageContent" class="container">
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <upload id="upload1"></upload>
            </div>
            <div class="col-sm-6">
              <upload id="upload2"></upload>
            </div>
          </div>
          <div class="row" style="margin-bottom: 40px;">
            <div class="col-sm-6">
              <upload id="upload3"></upload>
            </div>
            <div class="col-sm-6">
              <upload id="upload4"></upload>
            </div>
            <div class="row" style="margin-bottom: 40px;">
              <div class="col-sm-6">
                <upload id="upload5"></upload>
              </div>
              <div class="col-sm-6">
                <upload id="upload6"></upload>
              </div>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
