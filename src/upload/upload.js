/**
 * 上传视图类
 * @author: yrh
 * @update: 2017/1/10
 */
define([
    'lib/view/View'
], function(BaseView) {
    var AppView = BaseView.extend({
        progressBar: null,
        initialize: function(option) {
            var option = option || {};
            var defaults = {
                options: {
                    url: CONFIG.SERVER_URI + '/upload',
                    is_auto: true,
                    file: null,
                    blob: null,
                    upload_files: [],
                    headers: {},
                    params: {},
                    isLoading: true,
                    begin: function() {},
                    progress: function() {},
                    complete: function() {},
                    fail: function() {},
                    cancel: function() {}
                }
            };
            if (option) $.extend(true, defaults, option);
            this.parent(defaults);
            this.xhr = createXMLHTTPRequest();
            this.form = null;

            if (!this.options.hash) {
                if (navigator.userAgent.match(/Android/i)) {
                    this.uploadCordova();
                } else {
                    this.upload();
                }
            }
            if (this.options.is_auto && !this.options.hash) this.sendUpload();

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
        },
        // cordova上传
        uploadCordova: function() {
            this.startDate = new Date().getTime();
            var that = this,
                taking = 0,
                upload_files = this.options.upload_files,
                fileObj = this.options.file,
                params = this.options.params;

            function success(resp) {
                debug.log("success:" + resp);
                filterFiles();
                that.options.isLoading = false;
                if (resp.response) {
                    var response = JSON.parse(resp.response);
                    if (typeof that.options.complete == "function") that.options.complete(upload_files, fileObj, that, response);
                }
                that.renderAll();
            }

            function fail(event) {
                debug.error("上传失败");
                filterFiles();
                if (typeof that.options.fail == "function") that.options.fail(event, upload_files, that);
                that.remove();
            }

            function filterFiles() {
                upload_files = _.filter(upload_files, function(file) {
                    return file.id !== that.id;
                });
            }

            var uri = encodeURI(this.options.url);
            var fileURL = fileObj.localURL;
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = fileObj.name;
            options.mimeType = "text/plain";

            if (!_.isEmpty(this.options.params)) {
                var params = {};
                for (var key in this.options.params) {
                    params[key] = this.options.params[key];
                }
                options.params = params;
            }
            if (!_.isEmpty(this.options.headers)) {
                var headers = {};
                for (var key in this.options.headers) {
                    headers[key] = this.options.headers[key];
                };
                options.headers = headers;
            }

            var ft = new FileTransfer();
            ft.onprogress = function(event) {
                if (event.lengthComputable) {
                    var nowDate = new Date().getTime();
                    taking = nowDate - that.startDate;
                    var x = (event.loaded) / 1024;
                    var y = taking / 1000;
                    var uploadSpeed = (x / y);
                    var formatSpeed;
                    if (uploadSpeed > 1024) {
                        formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
                    } else {
                        formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
                    }
                    var percentComplete = Math.round(event.loaded * 100 / event.total);
                    fileObj.percentComplete = percentComplete;
                    if (percentComplete == 100) {
                        that.options.isLoading = false;
                        // that.renderAll();
                    }
                }
                if (typeof that.options.progress == "function") that.options.progress(upload_files, fileObj, that);
            };
            ft.upload(fileURL, uri, success, fail, options);
        },
        // 表单上传
        upload: function() {
            var that = this,
                taking = 0,
                upload_files = this.options.upload_files,
                fileObj = this.options.file,
                params = this.options.params;
            this.xhr.crossDomain = true;
            this.id = this.options.file ? fileObj.id : (this.options.id ? this.options.id : HBY.util.Tool.guid());
            // if (this.options.blob) {
            //     this.form = this.options.blob.substr(this.options.blob.indexOf(',') + 1);
            //     this.options.url += "/putb64/" + fileObj.size;
            //     // if(params.key)  this.options.url += '/key/' + params.key;
            // } else {
            this.form = new FormData();
            this.form.append('file', fileObj);
            if (!_.isEmpty(params)) {
                for (var paramOne in params) {
                    this.form.append(paramOne, params[paramOne]);
                }
            }
            // }
            this.xhr.upload.addEventListener("progress", uploadProgress, false);
            this.xhr.addEventListener("loadstart", uploadStart, false);
            this.xhr.addEventListener("load", uploadComplete, false);
            this.xhr.addEventListener("error", uploadFailed, false);
            this.xhr.addEventListener("abort", uploadCanceled, false);
            this.xhr.open('POST', this.options.url, true);
            for (var key in this.options.headers) {
                this.xhr.setRequestHeader(key, this.options.headers[key]);
            };

            function uploadStart(event) {
                // debug.warn("上传开始");
                if (typeof that.options.begin == "function") that.options.begin(upload_files, fileObj, that);
                // that.renderAll();
            }

            function uploadProgress(event) {
                if (event.lengthComputable) {
                    var nowDate = new Date().getTime();
                    taking = nowDate - that.startDate;
                    var x = (event.loaded) / 1024;
                    var y = taking / 1000;
                    var uploadSpeed = (x / y);
                    var formatSpeed;
                    if (uploadSpeed > 1024) {
                        formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
                    } else {
                        formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
                    }
                    var percentComplete = Math.round(event.loaded * 100 / event.total);
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
                if (typeof that.options.progress == "function") that.options.progress(upload_files, fileObj, that);
            }

            function uploadComplete(event) {
                filterFiles();
                if (that.xhr.readyState == 4 && that.xhr.status == 200 && that.xhr.responseText != "") {
                    var resp = JSON.parse(that.xhr.response);
                    _.extend(that.options, resp);
                    that.options.url = CONFIG.DOWNLOAD_PATH + that.options.key;
                    // debug.warn("上传成功:"+ this.options.id);
                    if (typeof that.options.complete == "function") that.options.complete(upload_files, fileObj, that, resp);
                } else if (that.xhr.status != 200 && that.xhr.responseText) {
                    var resp = {
                        status: 'error',
                        data: 'Unknown error occurred: [' + that.xhr.responseText + ']'
                    };
                    if (typeof that.options.fail == "function") that.options.fail(upload_files, fileObj, that, resp);
                }
                that.options.isLoading = false;
                that.renderAll();
            }

            function uploadFailed(event) {
                debug.error("上传失败");
                filterFiles();
                if (typeof that.options.fail == "function") that.options.fail(event, upload_files, that);
                that.remove();
            }

            function uploadCanceled(event) {
                debug.error("取消上传");
                filterFiles();
                if (typeof that.options.cancel == "function") that.options.cancel(event, upload_files, that);
                that.remove();
            }

            function filterFiles() {
                upload_files = _.filter(upload_files, function(file) {
                    return file.id !== that.id;
                });
            }
        },
        cancelUpload: function() {
            this.xhr.abort();
        },
        sendUpload: function() {
            if (!navigator.userAgent.match(/Android/i)) {
                this.startDate = new Date().getTime();
                this.xhr.send(this.form);
            }
        }
    });
    return AppView;
});
