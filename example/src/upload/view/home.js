import Upload from '../../../../dist/upload';

class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#upload1',
                name: 'uploadname',
                multiple: true,
                onComplete(result) {
                    console.warn('上传成功了', result);
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
            <div class="col-sm-4">
              <upload id="upload1"></upload>
            </div>
            <div class="col-sm-4">
              <upload id="upload2"></upload>
            </div>
            <div class="col-sm-4">
              <upload id="upload3"></upload>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
}
export default HomeView;
