/**
 * 上传基类
 * ronghui Yu
 * 2017/1/10
 */
// import './asset/index.scss';

class Upload extends Lego.View {
    constructor(opts = {}) {
        const options = {
            url: '/upload',
            downloadUri: '',
            isAuto: true,
            file: null,
            blob: null,
            uploadFiles: [],
            headers: {},
            params: {},
            percent: 0,     //上传进度百分比
            onBegin() {},
            onProgress() {},
            onComplete() {},
            onFail() {},
            onCancel() {}
        };
        Object.assign(options, opts);
        super(options);

        this.xhr = createXMLHTTPRequest();
        this.startDate = 0;
        this.form = null;
        function createXMLHTTPRequest() {
            var xmlHttpRequest;
            if (window.XMLHttpRequest) {
                xmlHttpRequest = new XMLHttpRequest();
                if (xmlHttpRequest.overrideMimeType) {
                    xmlHttpRequest.overrideMimeType("text/xml");
                }
            } else if (window.ActiveXObject) {
                var activexName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
                for (var i = 0; i < activexName.length; i++) {
                    try {
                        xmlHttpRequest = new ActiveXObject(activexName[i]);
                        if (xmlHttpRequest) {
                            break;
                        }
                    } catch (e) {}
                }
            }
            return xmlHttpRequest;
        }

        this.uploadInit();
        if (this.options.isAuto) this.start();
    }
    // 表单上传
    uploadInit() {
        const that = this,
            taking = 0,
            uploadFiles = this.options.uploadFiles,
            fileObj = this.options.file,
            params = this.options.params;
        this.xhr.crossDomain = true;
        this.id = this.options.file ? fileObj.id : (this.options.id ? this.options.id : Lego.randomKey(32));

        this.form = new FormData();
        this.form.append('file', fileObj);
        if (!Object.values(params).length) {
            for (let paramOne in params) {
                this.form.append(paramOne, params[paramOne]);
            }
        }

        this.xhr.upload.addEventListener("progress", uploadProgress, false);
        this.xhr.addEventListener("loadstart", uploadStart, false);
        this.xhr.addEventListener("load", uploadComplete, false);
        this.xhr.addEventListener("error", uploadFailed, false);
        this.xhr.addEventListener("abort", uploadCanceled, false);
        this.xhr.open('POST', this.options.url, true);
        for (let key in this.options.headers) {
            this.xhr.setRequestHeader(key, this.options.headers[key]);
        }

        function uploadStart(event) {
            // debug.warn("上传开始");
            if (typeof that.options.onBegin == "function") {
                that.options.onBegin(uploadFiles, fileObj, that);
            }
        }

        function uploadProgress(event) {
            if (event.lengthComputable) {
                const nowDate = new Date().getTime();
                taking = nowDate - that.startDate;
                let x = (event.loaded) / 1024;
                let y = taking / 1000;
                let uploadSpeed = (x / y);
                let formatSpeed;
                if (uploadSpeed > 1024) {
                    formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
                } else {
                    formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
                }
                let percent = Math.round(event.loaded * 100 / event.total);
                fileObj.percent = percent;
                that.options.percent = percent;
            }
            if (typeof that.options.onProgress == "function") {
                that.options.onProgress(uploadFiles, fileObj, that);
            }
        }

        function uploadComplete(event) {
            filterFiles();
            if (that.xhr.readyState == 4 && that.xhr.status == 200 && that.xhr.responseText != "") {
                let resp = JSON.parse(that.xhr.response);
                Object.assign(that.options, resp);
                that.options.url = that.options.downloadUri + that.options.key;
                that.options.percent = 100;
                // debug.warn("上传成功:"+ this.options.id);
                if (typeof that.options.onComplete == "function") {
                    that.options.onComplete(uploadFiles, fileObj, that, resp);
                }
            } else if (that.xhr.status != 200 && that.xhr.responseText) {
                let resp = {
                    status: 'error',
                    data: 'Unknown error occurred: [' + that.xhr.responseText + ']'
                };
                if (typeof that.options.onFail == "function"){
                    that.options.onFail(uploadFiles, fileObj, that, resp);
                }
            }
        }

        function uploadFailed(event) {
            debug.error("上传失败");
            filterFiles();
            if (typeof that.options.onFail == "function") {
                that.options.onFail(event, uploadFiles, that);
            }
            that.remove();
        }

        function uploadCanceled(event) {
            debug.error("取消上传");
            filterFiles();
            if (typeof that.options.onCancel == "function") {
                that.options.onCancel(event, uploadFiles, that);
            }
            that.remove();
        }

        function filterFiles() {
            uploadFiles = uploadFiles.filter(file => file.id !== that.id);
        }
    }
    cancel() {
        this.xhr.abort();
    }
    start() {
        this.startDate = new Date().getTime();
        this.xhr.send(this.form);
    }
}
Lego.components('upload', Upload);
export default Upload;
