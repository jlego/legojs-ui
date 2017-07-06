/**
 * 信息提示
 * ronghui Yu
 * 2017/1/7
 */
import toastr from 'toastr-cjs';
import 'toastr-cjs/toastr.css';
import './asset/index.scss';

function Message(type='info', content='', opts = {}) {
    toastr.options = {
        "containerId": "toast-container",
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center toast-top50",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    Object.assign(toastr.options, opts);
    const typeArr = ['success', 'info', 'warning', 'error'];
    if (typeArr.indexOf(type) >= 0 || content) {
        if(this.toastr) this.toastr.remove();
        this.toastr = toastr[type](content);
    }
}
Lego.components('message', Message);
export default Message;
