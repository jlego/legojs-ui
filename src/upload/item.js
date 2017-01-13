/**
 * 上传列表item
 * ronghui Yu
 * 2017/1/11
 * 七牛返回的
 * file: {
 *   hash: "FhR4LkuKhZDfeZmG8k2TT_u2DXe-",
 *   height: 474,
 *   key: "1/oss/0c2dd758-225b-d271-1e3e-b84a9b359401.png",
 *   mimeType: "image/png",
 *   name: "2016-03-11_183019.png",
 *   size: 124290,
 *   width: 473,
 * }
 * 后台返回的
 * {
 *   "attachment_id": 100124028001,//附件ID
 *   "extension": "png", //附件扩展类型
 *   "height": 474, //长
 *   "mime_type": "image/png",
 *   "name": "2017-01-10_183019.png",//附件名称
 *   "size": 124290, //附件大小
 *   "url": "https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png" ,//附件读取路径地址
 *   "width": 473 //宽
 * }
 */
// import './asset/index.scss';
import UploadBase from './upload';
import Progressbar from '../progressbar/index';

class UploadItem extends UploadBase {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .cancelbtn': 'onCancel',
                'click .closebtn': 'onRemove'
            },
            uploadUri: '',
            percent: 0,     //上传进度百分比
            isAuto: true,
            readonly: false,
            file: {},
            headers: {},
            params: {},
            onBegin() {},
            onProgress() {},
            onComplete() {},
            onFail() {},
            onCancel() {},
            // onRemove() {}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="media upload-item">
            <div class="media-left">
                <i class="anticon anticon-${Lego.UI.Util.getFileIcon(options.file.name)}"></i>
            </div>
            ${options.percent < 100 ? hx`
            <div class="media-body">
                <h4 class="media-heading">
                    <div class="right">
                        <a href="javascript:;" class="cancelbtn"><i class="anticon anticon-cross float-xs-right close"></i></a>
                    </div>
                    ${val(options.file.name)}
                </h4>
                <progressbar id="${'progressbar_' + options.vid}"></progressbar>
            </div>` : hx`
            <div class="media-body">
                <h4 class="media-heading">
                    ${!options.readonly && options.percent == 100 ? hx`
                    <div class="right">
                        <a href="javascript:;" class="closebtn"><i class="anticon anticon-cross float-xs-right close"></i></a>
                    </div>
                    ` : ''}
                    ${val(options.file.name)}
                </h4>
                <small>
                    <cite>${Lego.UI.Util.convertByteUnit(options.file.size)}</cite>
                    <time>
                        <a href="${val(options.file.url)}?attname=${val(options.file.name)}" target="_blank">下载</a>
                        <a href="#" style="display:none">预览</a>
                    </time>
                </small>
            </div>
            `}
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        const options = this.options;
        if(options.percent < 100){
            this.progressbar = Lego.create(Progressbar, {
                el: this.$('#progressbar_' + options.vid),
                showInfo: false,
                status: 'success',
                onComplete(){
                    options.percent = 100;
                }
            });
        }
    }
    // 取消上传
    onCancel(event) {
        event.stopPropagation();
        this.cancel();
        this.$el.slideUp("normal", () => {
            this.remove();
        });
    }
    onRemove(event){
        event.stopPropagation();
        const target = $(event.currentTarget),
            id = target.data('id'),
            hash = target.data('hash');
        if(this.options.onRemove){
            return this.options.onRemove(id, hash);
        }
        this.$el.slideUp("normal", () => {
            this.remove();
        });
    }
}
export default UploadItem;
