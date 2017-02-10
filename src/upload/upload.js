/**
 * 上传基类
 * ronghui Yu
 * 2017/1/10
 */
// import './asset/index.scss';

class UploadView extends Lego.View {
    constructor(opts = {}) {
        const options = {
            uploadUri: '',
            downloadUri: Lego.config.downloadUri || '',    //下载根地址
            percent: 0,     //上传进度百分比, 用来判断是否要上传
            isAuto: true,
            file: null,
            headers: {},
            params: {},
            onBegin() {},
            onProgress() {},
            onComplete() {},
            onFail() {},
            onCancel() {},
            needToken: false
            // onRemove() {}
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
        if(this.options.percent == 0){
            if((this.options.needToken && this.options.params.token) || !this.options.needToken){
                this.uploadInit();
                if (this.options.isAuto) this.start();
            }
        }
    }
    // 表单上传
    uploadInit() {
        let taking = 0,
            file = this.options.file,
            params = this.options.params;
        this.xhr.crossDomain = true;
        // file.id = file.id || Lego.randomKey(32);
        const progressbar = Lego.getView(this.$('#progressbar_' + this.options.vid));

        this.form = new FormData();
        this.form.append('file', file);
        if (!Lego.isEmptyObject(params)) {
            for (let key in params) {
                this.form.append(key, params[key]);
            }
        }

        this.xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
                const nowDate = new Date().getTime();
                taking = nowDate - this.startDate;
                let x = (event.loaded) / 1024,
                    y = taking / 1000,
                    uploadSpeed = (x / y),
                    formatSpeed;
                if (uploadSpeed > 1024) {
                    formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
                } else {
                    formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
                }
                let percent = Math.round(event.loaded * 100 / event.total);
                if (progressbar) {
                    progressbar.options.percent = percent;
                }
            }
            if (typeof this.options.onProgress == "function") {
                this.options.onProgress(this);
            }
        }, false);

        this.xhr.addEventListener("loadstart", (event) => {
            // debug.warn("上传开始");
            if (typeof this.options.onBegin == "function") {
                this.options.onBegin(file, this);
            }
        }, false);

        this.xhr.addEventListener("load", (event) => {
            if (this.xhr.readyState == 4 && this.xhr.status == 200 && this.xhr.responseText != "") {
                let resp = JSON.parse(this.xhr.response);
                resp._id = file._id;
                this.options.percent = 100;
                // debug.warn("上传成功:"+ this.options.id);
                if (typeof this.options.onComplete == "function") {
                    this.options.onComplete(this, resp);
                }
            } else if (this.xhr.status != 200 && this.xhr.responseText) {
                let errorMsg = {
                    status: 'error',
                    data: 'Unknown error occurred: [' + this.xhr.responseText + ']'
                };
                if (typeof this.options.onFail == "function"){
                    this.options.onFail(this, errorMsg);
                }
            }
        }, false);

        this.xhr.addEventListener("error", (event) => {
            debug.error("上传失败");
            if (typeof this.options.onFail == "function") {
                this.options.onFail(this, event);
            }
            this.remove();
        }, false);

        this.xhr.addEventListener("abort", (event) => {
            debug.error("取消上传");
            if (typeof this.options.onCancel == "function") {
                this.options.onCancel(this, event);
            }
            this.remove();
        }, false);

        this.xhr.open('POST', this.options.uploadUri, true);

        for (let key in this.options.headers) {
            this.xhr.setRequestHeader(key, this.options.headers[key]);
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
export default UploadView;
