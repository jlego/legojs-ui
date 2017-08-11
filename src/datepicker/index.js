import './asset/index.scss';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import 'bootstrap-datetimepicker-cjs';
import 'bootstrap-datetimepicker-cjs/css/bootstrap-datetimepicker.css';

function formatDate(dateStr, format = 'YYYY-MM-DD HH:mm:ss'){
    return format && dateStr ? moment(dateStr, 'YYYY-MM-DD HH:mm:ss').format(format) : dateStr;
}
class Datepicker extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click': 'onclick',
                'click .input-group-addon': 'showpanel'
            },
            type: 'date', //date, time, range
            name: '',
            placeholder: '选择时间', //
            disabled: false, //
            inline: false,
            keepOpen: false,
            showClose: false,
            showClear: false,
            size: 'default', //设置大小，可选值为 small large 或者不设
            format: opts.type == 'time' ? 'LT' : 'YYYY-MM-DD HH:mm:ss', //
            value: null,
            startInputEl: '',
            startName: opts.name,
            startValue: '',
            startPlaceholder: '开始时间',
            endInputEl: '',
            endName: '',
            endValue: '',
            endPlaceholder: '结束时间',
            minDate: '',
            maxDate: '',
            useCurrent: false,
            setting: {},
            onChange() {} //
        };
        Object.assign(options, opts);
        super(options);
        this.initDatepicker();
    }
    initDatepicker() {
        const opts = this.options;
        this.oldValue = formatDate(opts.value, opts.format);
        Object.assign(opts.setting, {
            format: opts.format,
            keepOpen: opts.keepOpen,
            showClose: opts.showClose,
            showClear: opts.showClear,
            inline: opts.inline
        });
        const that = this,
            theEl = opts.inline ? opts.el : '.input-group input';
        if (opts.type !== 'range') {
            let $theEl = this.$(theEl);
            if(opts.inline) $theEl = this.$el;
            $theEl.datepicker(opts.setting);
            $theEl.on('dp.change', function(event) {
                let value = $(this).val();
                if (typeof opts.onChange == 'function') opts.onChange(that, formatDate(value, opts.format));
            });
        } else {
            const startEl = '.startDate',
                endEl = '.endDate';
            if (!opts.startInputEl && !opts.endInputEl) {
                const startDateOpts = Object.assign({}, opts.setting);
                if(opts.minDate) startDateOpts.minDate = opts.minDate;
                const endDateOpts = Object.assign({},{...opts.setting, useCurrent: opts.useCurrent});
                if(opts.maxDate) startDateOpts.maxDate = opts.maxDate;
                const startDate = this.$(startEl).datepicker(startDateOpts);
                const endDate = this.$(endEl).datepicker(endDateOpts);
                this.$(startEl).on('dp.change', function(e) {
                    that.$(endEl).data("DateTimePicker").minDate(e.date);
                    if(typeof opts.onChange == 'function') opts.onChange(that, formatDate(that.$(startEl).val(), opts.format), 'start');
                });
                this.$(endEl).on('dp.change', function(e) {
                    that.$(startEl).data("DateTimePicker").maxDate(e.date);
                    if(typeof opts.onChange == 'function') opts.onChange(that, formatDate(that.$(endEl).val(), opts.format), 'end');
                });
            } else if (opts.startInputEl || opts.endInputEl) {
                const selector = opts.startInputEl || opts.endInputEl;
                if (opts.startInputEl) opts.setting.useCurrent = false;
                this.$(theEl).datepicker(opts.setting);
                if (opts.endInputEl) {
                    this.$(theEl).on("dp.change", function(e) {
                        const _el = selector instanceof $ ? selector : $(selector).find(theEl);
                        _el.data("DateTimePicker").maxDate(e.date);
                        if(typeof opts.onChange == 'function') opts.onChange(that, formatDate(_el.val(), opts.format), 'start');
                    });
                } else if (opts.startInputEl) {
                    this.$(theEl).on("dp.change", function(e) {
                        const _el = selector instanceof $ ? selector : $(selector).find(theEl);
                        _el.data("DateTimePicker").minDate(e.date);
                        if(typeof opts.onChange == 'function') opts.onChange(that, formatDate(_el.val(), opts.format), 'end');
                    });
                }
            }
        }
    }
    render() {
        const opts = this.options || {};
        let vDom = '';
        if (opts.type == 'range' && !opts.startInputEl && !opts.endInputEl) {
            vDom = hx `
            <div class="lego-datepicker">
                <div class="input-group input-daterange datepicker date">
                    <input type="text" class="form-control startDate ${opts.disabled ? 'disabled' : ''}" value="${formatDate(opts.startValue, opts.format)}" name="${opts.startName}" placeholder="${opts.startPlaceholder}">
                    <span class="input-group-addon">
                        ~
                    </span>
                    <input type="text" class="form-control endDate ${opts.disabled ? 'disabled' : ''}" value="${formatDate(opts.endValue, opts.format)}" name="${opts.endName}" placeholder="${opts.endPlaceholder}">
                </div>
            </div>
            `;
        }
        if(opts.type !== 'range' || (opts.type == 'range' && opts.startInputEl && opts.endInputEl)){
            vDom = hx `
            <div class="lego-datepicker">
                <div class="input-group date">
                    <input class="form-control dp-input ${opts.disabled ? 'disabled' : ''}" type="text" value="${formatDate(val(opts.value), opts.format)}" name="${opts.name}" placeholder="${opts.placeholder}">
                    <span class="input-group-addon">
                        <i class="anticon anticon-${opts.type == 'time' ? 'clock-circle-o' : 'calendar'}"></i>
                    </span>
                </div>
            </div>
            `;
        }
        if(opts.inline) vDom = hx`<div></div>`;
        return vDom;
    }
    onclick(event){
        event.stopPropagation();
    }
    showpanel(event){
        let target = $(event.currentTarget),
            input = target.prev('input');
        input.focus();
    }
    // 取时间段
    getPeriod(type) {
        let startDate, endDate;
        if(moment){
            switch(type){
                case 0:  //今天
                    startDate = moment().format("YYYY-MM-DD");
                    endDate = moment().format("YYYY-MM-DD");
                    break;
                case 1:  //本周
                    startDate = moment().day(0).format("YYYY-MM-DD");
                    endDate = moment().day(6).format("YYYY-MM-DD");
                    break;
                case 2:  //本月
                    startDate = moment().format("YYYY-MM-01");
                    endDate = moment(startDate).add(1, 'months').subtract(1, 'days').format("YYYY-MM-DD");
                    break;
                case 3:  //本年
                    startDate = moment().format("YYYY-01-01");
                    endDate = moment().format("YYYY-12-31");
                    break;
            }
        }else{
            debug.warn('依赖的moment.js插件还没安装');
        }
        return {startDate: startDate, endDate: endDate};
    }
}
Lego.components('datepicker', Datepicker);
export default Datepicker;
