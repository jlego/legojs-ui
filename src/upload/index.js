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
                'click .addbtn': 'onClickAdd'
            },
            keyRoot: '',
            type: 'file',   //file, photo
            text: '添加附件',
            name: '', //文件域
            token: '',  //token
            params: {}, //其他参数
            uploadUri: window.location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://upload.qiniu.com',  //文件存储云服务
            saveUri: '',    //保存到后台地址
            accept: '',     //接受上传的文件类型
            previewOption: null, //缩略图参数
            multiple: false, //是否多文件
            context: null, //上下文
            template: '',   //模板
            maxFileSize: '5mb', //最大上传文件大小5MB
            maxFilesCount: 9, //最大上传文件数
            isAuto: true,       //是否自动开始上传
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
            onCancel() {}
        };
        Object.assign(options, opts);
        super(options);

        this.reset();
        this.$('.fileInput').on('change', (event) => {
            var target = $(event.currentTarget)[0];
            this.uploadInit(target.files);
        });
        if(this.options.value.length){
            this.options.value.forEach((item, index) => {
                item.percent = 100;
                this.showItem(item);
            });
        }
    }
    render() {
        const options = this.options;
        let vDom = '';
        vDom = hx`
        <div class="upload upload-${val(options.type)}">
            <button class="btn btn-secondary addbtn" type="button" ${options.disabled ? 'disabled' : ''}>
                <i class="anticon anticon-upload"></i>
                ${val(options.text)}
            </button>
            <input type="hidden" value="${this.getValue()}" name="${val(options.name)}" class="upload-value">
            <input multiple="multiple" type="file" class="form-control fileInput hide" accept="${val(options.accept)}" style="display:none">
            ${options.showUploadList ? hx`<div class="upload-container"></div>` : ''}
        </div>
        `;
        return options.template ? options.template : vDom;
    }
    uploadInit(files) {
        let uploadFiles = [];
        if (typeof files == 'object' && files[0]) {
            uploadFiles = Array.prototype.slice.call(files, 0);
        } else {
            uploadFiles = [files];
        }
        const that = this,
            options = this.options,
            filesCount = uploadFiles.length,
            maxFilesCount = options.maxFilesCount;
        if (filesCount) {
            if (filesCount > maxFilesCount) {
                Lego.UI.notification('warning', '只能上传' + maxFilesCount + '张图片');
                return;
            }
            this.fileList.concat(uploadFiles);
            this.fileList = this.fileList.slice(0, maxFilesCount);
            if (typeof options.onAddFile == 'function') options.onAddFile(this.fileList, uploadFiles);
            uploadFiles.forEach((file, i) => {
                file.id = Lego.randomKey(32);
                if (Math.ceil(file.size / (1024 * 1024)) > parseInt(options.maxFileSize)) {
                    var msg = "发送文件最大为" + options.maxFileSize;
                    if (uploadFiles.length == 1) {
                        Lego.UI.notification('error', msg);
                    } else {
                        debug.warn(msg);
                    }
                    return;
                }
                if(that.fileList.find(item => item == file)) return;
                const uploadOption = {
                    uploadUri: options.uploadUri,
                    isAuto: options.isAuto,
                    file: file,
                    type: options.type,
                    percent: 0,
                    params: Object.assign({
                        key: options.key || that.getKey(file.name),
                        token: typeof options.data == 'string' ? options.data : ''
                    }, options.params),
                    needToken: true,
                    onBegin: options.onBegin,
                    onProgress: options.onProgress,
                    onComplete: options.onComplete || function(uploadObj, resp) {
                        // debug.warn('上传完成:', resp);
                        resp.url = Lego.config.downloadUri + resp.key;
                        $.ajax({
                            url: Lego.config.saveUri,
                            type: 'POST',
                            dataType: 'json',
                            data: resp,
                            success: function(response) {
                                const theFile = options.value.find(item => item.file.hash == response.data.hash);
                                if (theFile) {
                                    if(response.data.id) theFile.id = response.data.id;
                                }else{
                                    options.value.push({
                                        file: response.data,
                                        type: options.type,
                                        percent: 100
                                    });
                                    that.refresh();
                                }
                            },
                            error: function(err) {
                                debug.error(err);
                            }
                        });
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
        this.$('.fileInput').click();
    }
    // 展示上传的文件视图
    showItem(uploadOption) {
        const view = Lego.create(UploadItem, uploadOption);
        const containerEl = this.$('.upload-container');
        if (containerEl.length && view) {
            if (this.options.multiple) {
               containerEl.append(view.el);
            } else {
                containerEl.html(view.el);
            }
        }
        return view;
    }
    // 返回上传结果
    getValue() {
        let result = [];
        if (this.options.value.length) {
            result = this.options.value.map(item => item.file.id);
        }
        return result.join(',');
    }
    // 重置
    reset(){
        this.fileList = [];   //已经添加了的文件列表
    }
}
Lego.components('upload', Upload);
export default Upload;
