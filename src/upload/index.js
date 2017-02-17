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
        const options = {
            events: {
                'click .lego-addbtn': 'onClickAdd'
            },
            keyRoot: '',
            type: 'file',   //file, photo
            buttonText: '添加附件',
            name: '', //文件域
            token: '',  //token
            params: {}, //其他参数
            uploadUri: window.location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://upload.qiniu.com',  //文件存储云服务
            saveUri: '',    //保存到后台地址
            accept: '',     //接受上传的文件类型
            previewOption: null, //缩略图参数
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
        this.fileList = [];

        this.reset();
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
    render() {
        const options = this.options;
        let vDom = '';
        vDom = hx`
        <div class="lego-upload lego-upload-${val(options.type)}">
            ${!options.readonly ? hx`
            <button class="btn btn-secondary lego-addbtn" type="button" ${options.disabled ? 'disabled' : ''}>
                <i class="anticon anticon-upload"></i>
                ${val(options.buttonText)}
            </button>
            ` : ''}
            <input type="hidden" value="${this.getValue().join(',')}" name="${val(options.name)}" class="lego-upload-value">
            <input multiple="multiple" type="file" class="form-control lego-fileInput hide" accept="${val(options.accept)}" style="display:none">
            ${options.showUploadList ? hx`<div class="lego-upload-container"></div>` : ''}
        </div>
        `;
        return options.template ? options.template : vDom;
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
            options = this.options,
            filesCount = uploadFiles.length,
            maxFilesCount = options.maxFilesCount;
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
            if (typeof options.onAddFile == 'function') options.onAddFile(this.fileList, uploadFiles);
            uploadFiles.forEach((file, i) => {
                if (Math.ceil(file.size / (1024 * 1024)) > parseInt(options.maxFileSize)) {
                    var msg = "发送文件最大为" + options.maxFileSize;
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
                    uploadUri: options.uploadUri,
                    readonly: options.readonly,
                    isAuto: options.isAuto,
                    file: file,
                    type: options.type,
                    percent: 0,
                    params: Object.assign({
                        key: options.key || that.getKey(file.name),
                        token: typeof options.data == 'string' ? options.data : ''
                    }, options.params || {}),
                    needToken: true,
                    onBegin: options.onBegin,
                    onProgress: options.onProgress,
                    onComplete(self, resp){
                        const hasFile = options.value.find(item => item.file.hash == resp.hash);
                        if (!hasFile && options.value.length <= maxFilesCount) {
                            resp.url = Lego.config.downloadUri + resp.key;
                            options.value.push({
                                file: resp,
                                type: options.type, //图片或文件
                                percent: 100
                            });
                        }
                        if(typeof options.onComplete == 'function') options.onComplete(that, resp);
                    },
                    onFail: options.onFail,
                    onCancel: options.onCancel
                };
                if (options.previewOption) {
                    uploadOption.previewOption = options.previewOption;
                    uploadOption.isAuto = false;
                    localresizeimg(file, Object.assign(options.previewOption, {
                        success: function(results) {
                            uploadOption.previewImgSrc = results.blob;
                            const theView = that.showItem(uploadOption);
                            theView.sendUpload();
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
        let callback = (type, _id) => {
            this.fileList = this.fileList.filter(value => value !== _id);
            if(type == 'cancel'){
                if(typeof this.options.onCancel == 'function') this.options.onCancel(this, _id);
            }else{
                this.options.value = this.options.value.filter(item => item.file._id !== _id);
                if(typeof this.options.onRemove == 'function') this.options.onRemove(this, _id);
            }
            this.refresh();
        };
        uploadOption.context = this;
        uploadOption.insert = this.options.multiple ? 'append' : 'html';
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
