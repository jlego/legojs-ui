/**
 * message.js v0.9.6
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var toastr = _interopDefault(require("toastr-cjs"));

var toastrCjs_toastr_css = require("toastr-cjs/toastr.css");

function Message() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center toast-top50",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "3000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    var typeArr = [ "success", "info", "warning", "error" ];
    if (typeArr.indexOf(type) >= 0 || content) {
        if (this.toastr) this.toastr.remove();
        this.toastr = toastr[type](content);
    }
}

Lego.components("message", Message);

module.exports = Message;
