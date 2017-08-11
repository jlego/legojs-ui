// import Upload from '../../../../dist/upload';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let token = '6qcgjJjvWVKAJNg3bR_8Wzr1IjEahFQha4Ksph8_:KdvqZCn-qVgSU2BqgRR1NSkG_4o=:eyJzY29wZSI6InJvYm90YWkiLCJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIiwgXCJoYXNoXCI6XCIkKGV0YWcpXCIsXCJtaW1lVHlwZVwiOlwiJChtaW1lVHlwZSlcIixcIm5hbWVcIjpcIiQoZm5hbWUpXCIsXCJzaXplXCI6JChmc2l6ZSksXCJ3aWR0aFwiOiQoaW1hZ2VJbmZvLndpZHRoKSxcImhlaWdodFwiOiQoaW1hZ2VJbmZvLmhlaWdodCl9IiwiZGVhZGxpbmUiOjE0OTM4MDgwOTJ9';
        const options = {
            components: [{
                el: '#upload1',
                name: 'uploadname',
                multiple: true,
                token: token,
                acceptSuffix: ['apk'],
                maxFileSize: '50mb',
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
                token:token,
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
                    "name": "2017-01-10_183019.doc",
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
                }, {
                    "id": 100124028003,
                    "size": 124290,
                    "name": "2017-01-10_183018.jpg"
                }, {
                    "id": 100124028004,
                    "size": 124290,
                    "name": "2017-01-10_183018.gif"
                }, {
                    "id": 100124028005,
                    "size": 124290,
                    "name": "2017-01-10_183018.pdf"
                }, {
                    "id": 100124028006,
                    "size": 124290,
                    "name": "2017-01-10_183018.rar"
                }, {
                    "id": 100124028007,
                    "size": 124290,
                    "name": "2017-01-10_183018.zip"
                }],
                onComplete(result) {
                    console.warn('上传成功了3', result);
                }
            }, {
                el: '#upload4',
                name: 'uploadname4',
                type: 'avatar',
                token: token,
                previewImg: {
                    width: 200,
                    height: 150
                },
                showZoom: false,
                // readonly: true,
                value: [{
                    "id": 100124028001,
                    "extension": "png",
                    "height": 474,
                    "mime_type": "image/png",
                    "name": "2017-01-10_183019.png",
                    "size": 124290,
                    "url": "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png" ,
                    "width": 473
                }],
                // hideAddBtn: true,
                onComplete(self, result) {
                    console.warn('上传成功了4', result);
                }
            }, {
                el: '#upload6',
                name: 'uploadname5',
                type: 'photos',
                token:token,
                onComplete(self, result) {
                    console.warn('上传成功了5', result);
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
