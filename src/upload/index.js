/**
 * 上传
 * ronghui Yu
 * 2017/1/10
 */
// import './asset/index.scss';
import Progressbar from '../progressbar/index';

class Upload extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            url: CONFIG.SERVER_URI + '/upload',
            isAuto: true,
            file: null,
            blob: null,
            uploadFiles: [],
            headers: {},
            params: {},
            isLoading: true,
            onBegin() {},
            onProgress() {},
            onComplete() {},
            onFail() {},
            onCancel() {}
        };
        Object.assign(options, opts);
        super(options);

        this.xhr = createXMLHTTPRequest();
        this.form = null;

        if (!this.options.hash) {
            if (navigator.userAgent.match(/Android/i)) {
                this.uploadCordova();
            } else {
                this.upload();
            }
        }
        if (this.options.isAuto && !this.options.hash) this.sendUpload();

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
    }
    // cordova上传
    uploadCordova() {
        this.startDate = new Date().getTime();
        let that = this,
            taking = 0,
            uploadFiles = this.options.uploadFiles,
            fileObj = this.options.file,
            params = this.options.params;

        function success(resp) {
            debug.log("success:" + resp);
            filterFiles();
            that.options.isLoading = false;
            if (resp.response) {
                let response = JSON.parse(resp.response);
                if (typeof that.options.complete == "function") that.options.onComplete(uploadFiles, fileObj, that, response);
            }
            that.renderAll();
        }

        function fail(event) {
            debug.error("上传失败");
            filterFiles();
            if (typeof that.options.fail == "function") that.options.onFail(event, uploadFiles, that);
            that.remove();
        }

        function filterFiles() {
            uploadFiles = uploadFiles.filter(file => file.id !== that.options.id);
        }

        let uri = encodeURI(this.options.url);
        let fileURL = fileObj.localURL;
        const options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = fileObj.name;
        options.mimeType = "text/plain";

        if (!_.isEmpty(this.options.params)) {
            const params = {};
            for (let key in this.options.params) {
                params[key] = this.options.params[key];
            }
            options.params = params;
        }
        if (!_.isEmpty(this.options.headers)) {
            const headers = {};
            for (let key in this.options.headers) {
                headers[key] = this.options.headers[key];
            };
            options.headers = headers;
        }

        const ft = new FileTransfer();
        ft.onprogress = function(event) {
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
                let percentComplete = Math.round(event.loaded * 100 / event.total);
                fileObj.percentComplete = percentComplete;
                if (percentComplete == 100) {
                    that.options.isLoading = false;
                    // that.renderAll();
                }
            }
            if (typeof that.options.progress == "function") that.options.onProgress(uploadFiles, fileObj, that);
        };
        ft.upload(fileURL, uri, success, fail, options);
    }
    // 表单上传
    upload() {
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
            if (typeof that.options.begin == "function") that.options.onBegin(uploadFiles, fileObj, that);
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
                let percentComplete = Math.round(event.loaded * 100 / event.total);
                fileObj.percentComplete = percentComplete;
                if (percentComplete == 100) {
                    that.options.isLoading = false;
                    // that.renderAll();
                }
                if (that.progressBar) {
                    that.progressBar.setValue({
                        value: percentComplete + '%',
                        speed: formatSpeed
                    });
                }
            }
            if (typeof that.options.progress == "function") that.options.onProgress(uploadFiles, fileObj, that);
        }

        function uploadComplete(event) {
            filterFiles();
            if (that.xhr.readyState == 4 && that.xhr.status == 200 && that.xhr.responseText != "") {
                let resp = JSON.parse(that.xhr.response);
                _.extend(that.options, resp);
                that.options.url = CONFIG.DOWNLOAD_PATH + that.options.key;
                // debug.warn("上传成功:"+ this.options.id);
                if (typeof that.options.complete == "function") that.options.onComplete(uploadFiles, fileObj, that, resp);
            } else if (that.xhr.status != 200 && that.xhr.responseText) {
                let resp = {
                    status: 'error',
                    data: 'Unknown error occurred: [' + that.xhr.responseText + ']'
                };
                if (typeof that.options.fail == "function") that.options.onFail(uploadFiles, fileObj, that, resp);
            }
            that.options.isLoading = false;
            that.renderAll();
        }

        function uploadFailed(event) {
            debug.error("上传失败");
            filterFiles();
            if (typeof that.options.fail == "function") that.options.onFail(event, uploadFiles, that);
            that.remove();
        }

        function uploadCanceled(event) {
            debug.error("取消上传");
            filterFiles();
            if (typeof that.options.cancel == "function") that.options.onCancel(event, uploadFiles, that);
            that.remove();
        }

        function filterFiles() {
            uploadFiles = _.filter(uploadFiles, function(file) {
                return file.id !== that.id;
            });
        }
    }
    cancelUpload() {
        this.xhr.abort();
    }
    sendUpload() {
        if (!navigator.userAgent.match(/Android/i)) {
            this.startDate = new Date().getTime();
            this.xhr.send(this.form);
        }
    }
}
Lego.components('upload', Upload);
export default Upload;
