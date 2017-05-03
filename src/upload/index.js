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
            name: '', //文件域
            token: '',  //token
            params: {}, //其他参数
            uploadUri: Lego.config.uploadUri || uploadUri,  //文件存储云服务
            saveUri: '',    //保存到后台地址
            accept: '',     //接受上传的文件类型
            previewImg: {
                width: 0,
                height: 0,
                quality: 1
            },
            //缩略图参数
            // previewImg: {
            // width: 400,//宽度
            // height: 400,//高度
            // quality: 1,//质量
            // success: function (result) {
            //      result.base64/result.clearBase64
            // }
            // }
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
        if(options.value.length){
            options.value = options.value.map(file => {
                return {
                    readonly: options.readonly,
                    percent: 100,
                    file: file
                };
            });
        }
        super(options);
        this.$('.lego-fileInput').on('change', (event) => {
            var target = $(event.currentTarget)[0];
            this.uploadInit(target.files, target);
        });
        if(this.options.value.length){
            this.options.value.forEach((item, index) => {
                this.showItem(item);
            });
        }
    }
    components(){
        const opts = this.options;
        if(opts.type == 'avatar') opts.multiple = false;
    }
    render() {
        this.fileList = this.fileList || [];
        const opts = this.options;
        let vDom = hx`
        <div class="lego-upload lego-upload-${val(opts.type)}">
            ${!opts.readonly && opts.type == 'file' ? hx`
            <button class="btn btn-secondary lego-addbtn" type="button" ${opts.disabled ? 'disabled' : ''}>
                ${opts.buttonIcon ? opts.buttonIcon : hx`<i class="anticon anticon-upload"></i>`}
                ${val(opts.buttonText)}
            </button>
            ` : ''}
            <input type="hidden" value="${this.getValue().join(',')}" name="${val(opts.name)}" class="lego-upload-value">
            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="${val(opts.accept)}" style="display:none">
            ${opts.showUploadList && opts.type == 'file' ? hx`<div class="lego-upload-container"></div>` : ''}
            ${opts.type !== 'file' ? hx`
                <div class="lego-upload-container" title="选择上传照片">
                    <div class="lego-upload-add">
                        <i class="anticon anticon-plus avatar-uploader-trigger"></i>
                    </div>
                </div>
            ` : ''}
        </div>
        `;
        return opts.template ? opts.template : vDom;
    }
    renderAfter(){
        let opts = this.options;
        if(opts.type !== 'file') {
            let cssOpts = {
                width: opts.previewImg.width || (opts.type == 'avatar' ? 150 : 95),
                height: opts.previewImg.height || (opts.type == 'avatar' ? 150 : 95),
            };
            Object.assign(opts.previewImg, cssOpts);
            this.$('.lego-upload-add, .avatar-uploader-trigger').css(cssOpts);
        }
    }
    uploadInit(files, fileInput) {
        let uploadFiles = [];
        if (typeof files == 'object' && files[0]) {
            uploadFiles = Array.from(files);
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
                Lego.UI.message('warning', '只能上传' + maxFilesCount + '张图片');
                return;
            }
            uploadFiles = uploadFiles.filter(file => {
                file._id = [file.name, file.size, file.lastModified].join('_');
                let hasFile = this.fileList.includes(file._id);
                if(!hasFile) this.fileList.push(file._id);
                return !hasFile;
            });
            if (this.fileList.length > maxFilesCount) {
                Lego.UI.message('warning', '只能上传' + maxFilesCount + '张图片');
                this.fileList.length = maxFilesCount;
                if(uploadFiles.length > maxFilesCount) uploadFiles.length = maxFilesCount;
                return;
            }
            if (typeof opts.onAddFile == 'function') opts.onAddFile(this.fileList, uploadFiles);
            uploadFiles.forEach((file, i) => {
                if (Math.ceil(file.size / (1024 * 1024)) > parseInt(opts.maxFileSize)) {
                    var msg = "发送文件最大为" + opts.maxFileSize;
                    if (uploadFiles.length == 1) {
                        Lego.UI.message('error', msg);
                    } else {
                        debug.warn(msg);
                    }
                    return;
                }
                if(i > maxFilesCount - 1) return;
                const uploadOption = {
                    el: '.lego-upload-container',
                    uploadUri: opts.uploadUri,
                    readonly: opts.readonly,
                    isAuto: opts.isAuto,
                    file: file,
                    type: opts.type,
                    percent: 0,
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
                            self.options.file = $.extend(true, {}, resp);
                            opts.value.push({
                                file: $.extend(true, {}, resp),
                                type: opts.type, //图片或文件
                                percent: 100
                            });
                        }
                        if(typeof opts.onComplete == 'function') opts.onComplete(that, resp);
                    },
                    onFail: opts.onFail,
                    onCancel: opts.onCancel
                };
                if (opts.type !== 'file') {
                    uploadOption.previewImg = opts.previewImg || {};
                    uploadOption.isAuto = opts.isAuto;
                    localresizeimg(file, Object.assign(opts.previewImg, {
                        success: function(results) {
                            uploadOption.previewImgSrc = results.blob;
                            that.showItem(uploadOption);
                        }
                    }));
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
                opts.value = opts.value.filter(item => item.file._id !== _id);
                if(typeof opts.onRemove == 'function') opts.onRemove(this, _id);
            }
            if(opts.type == 'avatar'){
                this.$('.lego-upload-container').html('<div class="lego-upload-add"><i class="anticon anticon-plus avatar-uploader-trigger"></i></div>');
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
        return this;
    }
}
Lego.components('upload', Upload);
export default Upload;
