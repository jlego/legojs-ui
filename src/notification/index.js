/**
 * 信息提示
 * ronghui Yu
 * 2017/1/7
 */
import toastr from 'toastr-cjs';
import 'toastr-cjs/toastr.css';
import './asset/index.scss';

function Notification(type='info', content='') {
    toastr.options = {
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
    const typeArr = ['success', 'info', 'warning', 'error'];
    if (typeArr.indexOf(type) >= 0 || content) {
        toastr[type](content);
    }
}
Lego.components('notification', Notification);
export default Notification;
