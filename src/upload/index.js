/**
 * 上传组件
 * ronghui Yu
 * 2017/1/11
 */
import './asset/index.scss';
import localresizeimg from 'localresizeimg-cjs';
import UploadItem from './item';

class Upload extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let uploadUri = window.location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://upload.qiniu.com';
        const options = {
            events: {
                'click .lego-addbtn, .lego-upload-add': 'onClickAdd'
            },
            keyRoot: '',
            type: 'file',   //file, photos, avatar
            buttonText: '添加附件',
            buttonIcon: '',
            showZoom: true, //是否放大预览
            name: '', //文件域
            token: '',  //token
            params: {}, //其他参数
            uploadUri: Lego.config.uploadUri || uploadUri,  //文件存储云服务
            accept: [],     //接受上传的文件类型
            acceptSuffix: [],   //接受的文件后缀
            previewImg: {//缩略图参数
                width: 0,
                height: 0,
                quality: 1
            },
            multiple: true, //是否多文件
            context: null, //上下文
            template: '',   //模板
            maxFileSize: '5mb', //最大上传文件大小5MB
            maxFilesCount: 9, //最大上传文件数
            isAuto: true,       //是否自动开始上传
            readonly: false,     //只读
            disabled: false,    //是否禁用
            hasCookie: false,   //上传请求时是否携带 cookie
            showUploadList: true,  //是否展示 uploadList, 默认开启
            // data: opts.token, //返回上传动态token
            value: [],  //已上传文件
            onAddFile() {},
            onBegin() {},
            onProgress() {},
            onComplete() {},
            onFail() {},
            onRemove() {},
            onCancel() {}
        };
        Object.assign(options, opts);
        if(options.type == 'avatar') options.multiple = false;
        if(options.type !== 'file'){
            options.accept = options.accept || ['image/gif','image/jpeg','image/png','image/jpg'];
            let cssOpts = {
                width: options.previewImg.width || (options.type == 'avatar' ? 150 : 95),
                height: options.previewImg.height || (options.type == 'avatar' ? 150 : 95),
            };
            Object.assign(options.previewImg, cssOpts);
        }
        super(options);
        this.fileList = [];
        this.$('.lego-fileInput').on('change', (event) => {
            let target = $(event.currentTarget)[0];
            this.uploadInit(target.files, target);
        });
        let opt = this.options;
        if(opt.showUploadList){
            if(opt.value.length){
                opt.value = opt.value.map(file => {
                    return {
                        el: '.lego-upload-container',
                        readonly: opt.readonly,
                        percent: 100,
                        showZoom: opt.showZoom,
                        type: opt.type,
                        file: file
                    };
                });
                opt.value.forEach((item, index) => {
                    this.showItem(item);
                });
            }
        }
    }
    render() {
        let opts = this.options,
            width = opts.previewImg.width,
            height = opts.previewImg.height;
        if(width) width = 'width:' + (typeof width == 'string' ? width : (width + 'px')) + ';';
        if(height) height = 'height:' + (typeof height == 'string' ? height : (height + 'px')) + ';';
        let vDom = hx`
        <div class="lego-upload lego-upload-${val(opts.type)}">
            <style>
                .lego-upload .preview-${val(opts.type)}{${width ? width : ''}${height ? height : ''}}
            </style>
            ${!opts.readonly && opts.type == 'file' ? hx`
            <button class="btn btn-secondary lego-addbtn" type="button" ${opts.disabled ? 'disabled' : ''}>
                ${opts.buttonIcon ? opts.buttonIcon : hx`<i class="anticon anticon-upload"></i>`}
                ${val(opts.buttonText)}
            </button>
            ` : ''}
            <input type="hidden" value="${this.getValue().join(',')}" name="${val(opts.name)}" class="lego-upload-value">
            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="${val(opts.accept.join(','))}" style="display:none">
            ${opts.showUploadList && opts.type == 'file' ? hx`<div class="lego-upload-container"></div>` : ''}
            ${opts.type !== 'file' ? hx`
                <div class="lego-upload-container" title="选择上传照片">
                    <div class="lego-upload-add preview-${val(opts.type)}">
                        <i class="anticon anticon-plus avatar-uploader-trigger preview-${val(opts.type)}"></i>
                    </div>
                </div>
            ` : ''}
        </div>
        `;
        return opts.template ? opts.template : vDom;
    }
    renderAfter(){
        let opts = this.options;
        if(opts.showUploadList && !opts.value.length){
            if(opts.type !== 'file') {
                this.$('.lego-upload-photo-item').remove();
            }else{
                this.$('.lego-upload-container').html('');
            }
        }
    }
    uploadInit(files, fileInput) {
        let uploadFiles = [];
        if (typeof files == 'object' && files[0]) {
            uploadFiles = Array.prototype.slice.call(files, 0);
        } else {
            uploadFiles = [files];
        }
        if(fileInput) fileInput.value = '';
        const that = this,
            opts = this.options,
            filesCount = uploadFiles.length,
            maxFilesCount = opts.maxFilesCount;
        if (filesCount) {
            if (filesCount > maxFilesCount) {
                Lego.UI.message('warning', '只能上传' + maxFilesCount + '个文件');
                return;
            }
            uploadFiles = uploadFiles.filter(file => {
                file._id = [file.name, file.size, file.lastModified].join('_');
                let hasFile = this.fileList.includes(file._id);
                if(!hasFile) this.fileList.push(file._id);
                return !hasFile;
            });
            if (this.fileList.length > maxFilesCount) {
                Lego.UI.message('warning', '只能上传' + maxFilesCount + '个文件');
                this.fileList.length = maxFilesCount;
                if(uploadFiles.length > maxFilesCount) uploadFiles.length = maxFilesCount;
                return;
            }
            if (typeof opts.onAddFile == 'function') opts.onAddFile(this.fileList, uploadFiles);
            uploadFiles.forEach((file, i) => {
                if(opts.accept.length){
                    if(!opts.accept.includes(file.type)){
                        Lego.UI.message('error', '上传文件格式不正确');
                        this.fileList = this.fileList.filter(value => value !== file._id);
                        return;
                    }
                }
                if(opts.acceptSuffix.length){
                    if(!opts.acceptSuffix.includes(Lego.UI.Util.getExtName(file.name))){
                        Lego.UI.message('error', '上传文件格式不正确');
                        this.fileList = this.fileList.filter(value => value !== file._id);
                        return;
                    }
                }
                if (Math.ceil(file.size / (1024 * 1024)) > parseInt(opts.maxFileSize)) {
                    var msg = "发送文件最大为" + opts.maxFileSize;
                    if (uploadFiles.length == 1) {
                        Lego.UI.message('error', msg);
                    } else {
                        debug.warn(msg);
                    }
                    this.fileList = this.fileList.filter(value => value !== file._id);
                    return;
                }
                if(i > maxFilesCount - 1) return;
                let uploadOption = {
                    el: '.lego-upload-container',
                    uploadUri: opts.uploadUri,
                    readonly: opts.readonly,
                    isAuto: opts.isAuto,
                    file: file,
                    type: opts.type,
                    percent: 0,
                    showZoom: opts.showZoom,
                    params: Object.assign({
                        key: opts.key || that.getKey(file.name),
                        token: typeof opts.data == 'string' ? opts.data : ''
                    }, opts.params || {}),
                    needToken: true,
                    onBegin: opts.onBegin,
                    onProgress: opts.onProgress,
                    onComplete(self, resp){
                        const hasFile = opts.value.find(item => item.file.hash == resp.hash);
                        if (!hasFile && opts.value.length <= maxFilesCount) {
                            resp.url = Lego.config.downloadUri + resp.key;
                            self.options.file = resp;
                            opts.value.push({
                                file: resp,
                                type: opts.type, //图片或文件
                                percent: 100
                            });
                        }
                        if(typeof opts.onComplete == 'function') opts.onComplete(that, resp, self);
                    },
                    onFail: opts.onFail,
                    onCancel: opts.onCancel
                };
                if (opts.type !== 'file') {
                    uploadOption.isAuto = opts.isAuto;
                    opts.previewImg.success = function(results, option){
                        option.previewImgSrc = results.blob;
                        that.showItem(option);
                    };
                    localresizeimg(file, opts.previewImg, uploadOption);
                } else {
                    that.showItem(uploadOption);
                }
            });
        } else {
            debug && debug.log("form input error");
        }
    }
    getKey(fileName) {
        return this.options.keyRoot + Lego.UI.Util.uuid() + '.' + Lego.UI.Util.getExtName(fileName);
    }
    onClickAdd(event){
        this.$('.lego-fileInput').click();
    }
    // 展示上传的文件视图
    showItem(uploadOption) {
        let that = this,
            opts = this.options;
        let callback = (type, _id) => {
            this.fileList = this.fileList.filter(value => value !== _id);
            if(type == 'cancel'){
                if(typeof opts.onCancel == 'function') opts.onCancel(this, _id);
            }else{
                let hasOne = opts.value.find(item => item.file._id == _id),
                    removeFile = {};
                if(hasOne) removeFile = $.extend({}, hasOne.file || {});
                if(typeof opts.onRemove == 'function') opts.onRemove(this, removeFile);
                opts.value = opts.value.filter(item => item.file._id !== _id);
            }
            if(opts.type == 'avatar'){
                let html = ['<div class="lego-upload-add preview-' + val(opts.type) + '">',
                    '<i class="anticon anticon-plus avatar-uploader-trigger preview-' + val(opts.type) + '"></i></div>'].join('');
                this.$('.lego-upload-container').html(html);
            }
            this.refresh();
        };
        uploadOption.context = this;
        uploadOption.insert = opts.multiple ? (opts.type == 'photos' ? 'prepend' : 'append') : 'html';
        uploadOption.onCancel = callback;
        uploadOption.onRemove = callback;
        Lego.create(UploadItem, uploadOption);
    }
    // 返回上传结果
    getValue() {
        let result = [];
        if (this.options.value.length) {
            let newArr = this.options.value.filter(item => !!item.id);
            result = newArr.map(item => item.id);
        }
        return result;
    }
    // 清空
    reset(){
        this.fileList = [];   //已经添加了的文件列表
        this.options.value = [];
        this.refresh();
        return this;
    }
}
Lego.components('upload', Upload);
export default Upload;
