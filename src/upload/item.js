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
            onRemove() {},
            components: []
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let options = this.options;
        this.addCom({
            el: '#progressbar_' + options.vid,
            showInfo: false,
            status: 'success',
            onComplete(self){
                self.options.percent = 100;
            }
        });
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="media lego-upload-item">
            <div class="media-left">
                <i class="anticon anticon-${Lego.UI.Util.getFileIcon(options.file.name)}"></i>
            </div>
            ${options.percent < 100 ? hx`
            <div class="media-body">
                <h4 class="media-heading">
                    <div class="right">
                        <a href="javascript:;" class="lego-cancelbtn" id="${val(options.file._id)}" onclick=${this.onCancel.bind(this)}><i class="anticon anticon-cross float-xs-right close"></i></a>
                    </div>
                    ${val(options.file.name)}
                </h4>
                <progressbar id="${'progressbar_' + options.vid}"></progressbar>
            </div>` : hx`
            <div class="media-body">
                <h4 class="media-heading">
                    ${!options.readonly && options.percent == 100 ? hx`
                    <div class="right">
                        <a href="javascript:;" class="lego-closebtn" id="${val(options.file._id)}" onclick=${this.onRemove.bind(this)}><i class="anticon anticon-cross float-xs-right close"></i></a>
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
    // 取消上传
    onCancel(event) {
        event.stopPropagation();
        const target = $(event.target),
            _id = target.parent().attr('id');
        this.cancel();
        if(typeof this.options.onCancel == 'function') this.options.onCancel('cancel', _id);
        this.$el.slideUp("normal", () => {
            this.$el.remove();
        });
    }
    onRemove(event){
        event.stopPropagation();
        const target = $(event.target),
            _id = target.parent().attr('id');
        if(typeof this.options.onRemove == 'function') this.options.onRemove('remove', _id);
        this.$el.slideUp("normal", () => {
            this.$el.remove();
        });
    }
}
export default UploadItem;
