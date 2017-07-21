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
import './iconfont.js';
import UploadBase from './upload';
import Progressbar from '../progressbar/index';

class UploadItem extends UploadBase {
    constructor(opts = {}) {
        const options = {
            uploadUri: '',
            percent: 0,     //上传进度百分比
            isAuto: true,
            readonly: false,
            showZoom: true,
            file: {},
            type: 'file',
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
    renderFile(){
        const opts = this.options;
        const vDom = hx`
        <div class="media lego-upload-item">
            <div class="media-left">
                <i class="file-icon ${Lego.UI.Util.getFileIcon(opts.file.name)}"></i>
            </div>
            ${opts.percent < 100 ? hx`
            <div class="media-body">
                <h4 class="media-heading">
                    <div class="right">
                        <a href="javascript:;" class="lego-cancelbtn" id="${val(opts.file._id)}" onclick=${this.onCancel.bind(this)}>
                            <i class="anticon anticon-close-circle float-xs-right"></i>
                        </a>
                    </div>
                    ${val(opts.file.name)}
                </h4>
                <progressbar id="${'progressbar_' + opts.vid}"></progressbar>
            </div>` : hx`
            <div class="media-body">
                <h4 class="media-heading">
                    ${!opts.readonly && opts.percent == 100 ? hx`
                    <div class="right">
                        <a href="javascript:;" class="lego-closebtn" id="${val(opts.file._id)}" onclick=${this.onRemove.bind(this)}>
                            <i class="anticon anticon-close-circle float-xs-right"></i>
                        </a>
                    </div>
                    ` : ''}
                    ${val(opts.file.name)}
                </h4>
                <small>
                    <cite>${Lego.UI.Util.convertByteUnit(opts.file.size)}</cite>
                    <time>
                        <a href="${val(opts.file.url)}?attname=${val(opts.file.name)}" target="_blank">下载</a>
                        <a href="#" style="display:none">预览</a>
                    </time>
                </small>
            </div>
            `}
        </div>
        `;
        return vDom;
    }
    renderPhoto(){
        let opts = this.options;
        let vDom = opts.percent < 100 ? hx`
            <div class="lego-upload-photo-item preview-${val(opts.type)}" id="preview_${opts.vid}">
                <style>#preview_${opts.vid}{background-image:url(${val(opts.previewImgSrc)});}</style>
                <div class="lego-upload-operate">
                    <progressbar id="${'progressbar_' + opts.vid}"></progressbar>
                    <a href="javascript:;" class="lego-cancelbtn" id="${val(opts.file._id)}" onclick=${this.onCancel.bind(this)} title="取消">
                        <i class="anticon anticon-close-circle"></i>
                    </a>
                </div>
            </div>
            ` : hx`
            <div class="lego-upload-photo-item preview-${val(opts.type)}" id="preview_${opts.vid}">
                <style>#preview_${opts.vid}{background-image:url(${val(opts.file.url)});}</style>
                <div class="lego-upload-operate">
                    <div class="lego-upload-btns">
                        ${opts.showZoom ? hx`
                        <a href="javascript:;" class="lego-previewbtn" id="p_${val(opts.file._id)}" title="预览">
                            <i class="anticon anticon-eye-o"></i>
                        </a>` : ''}
                        ${!opts.readonly && opts.percent == 100 ? hx`
                        <a href="javascript:;" class="lego-closebtn" id="${val(opts.file._id)}" onclick=${this.onRemove.bind(this)} title="删除">
                            <i class="anticon anticon-delete"></i>
                        </a>` : ''}
                    </div>
                </div>
            </div>
            `;
        return vDom;
    }
    render() {
        let opts = this.options;
        switch(opts.type){
            case 'file':
                return this.renderFile();
                break;
            case 'photos':
                return this.renderPhoto();
                break;
            case 'avatar':
                return this.renderPhoto();
                break;
            default:
                return this.renderFile();
        }
    }
    renderAfter(){
        function before(el, target) {
            target.parentNode.insertBefore(el, target)
        }
        function prepend(el, target) {
            if (target.firstChild) {
                before(el, target.firstChild)
            } else {
                target.appendChild(el)
            }
        }
        function appendSvg() {
            let div, svg;
            div = document.createElement("div");
            div.innerHTML = window.svgSprite;
            window.svgSprite = null;
            svg = div.getElementsByTagName("svg")[0];
            if (svg) {
                svg.setAttribute("aria-hidden", "true");
                svg.style.position = "absolute";
                svg.style.width = 0;
                svg.style.height = 0;
                svg.style.overflow = "hidden";
                prepend(svg, document.body)
            }
        }
        let iconEl = this.$('.file-icon');
        if(iconEl.length){
            iconEl.each(function(index, el) {
                let classStr = $(el).attr('class'),
                    fileExtArr = classStr.split(' ');
                $(el).parent().html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-' + (fileExtArr[1] || 'file') + '"></use></svg>');
            });
            appendSvg();
        }
    }
    removeFun(){
        if(this.options.type !== 'avatar'){
            if(this.options.type == 'photos'){
                this.$el.remove();
            }else{
                this.$el.slideUp("normal", () => {
                    this.$el.remove();
                });
            }
        }
    }
    // 取消上传
    onCancel(event) {
        event.stopPropagation();
        const target = $(event.target),
            _id = target.parent().attr('id');
        this.cancel();
        if(typeof this.options.onCancel == 'function') this.options.onCancel('cancel', _id);
        this.removeFun();
    }
    onRemove(event){
        event.stopPropagation();
        const target = $(event.target),
            _id = target.parent().attr('id');
        if(typeof this.options.onRemove == 'function') this.options.onRemove('remove', _id);
        this.removeFun();
    }
}
export default UploadItem;
