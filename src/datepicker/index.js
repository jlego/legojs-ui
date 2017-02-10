import './asset/index.scss';
import 'moment';
import 'moment/locale/zh-cn';
import 'bootstrap-datetimepicker-cjs';
import 'bootstrap-datetimepicker-cjs/css/bootstrap-datetimepicker.css';

function formatDate(dateStr, format = 'YYYY-MM-DD HH:mm:ss'){
    return format && dateStr ? moment(dateStr, 'YYYY-MM-DD HH:mm:ss').format(format) : dateStr;
}
class Datepicker extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click': function(event){
                    event.stopPropagation();
                },
                'click .input-group-addon': 'showpanel',
                'blur input': 'onBlur'
            },
            type: 'date', //date, time, range
            name: '',
            placeholder: '选择时间', //
            disabled: false, //
            inline: false,
            size: 'default', //设置按钮大小，可选值为 small large 或者不设
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
            useCurrent: false,
            setting: {},
            onBlur(){},
            onChange() {} //
        };
        Object.assign(options, opts);
        super(options);
        this.initDatepicker();
    }
    initDatepicker() {
        const options = this.options;
        this.oldValue = formatDate(options.value, options.format);
        Object.assign(options.setting, {format: options.format, inline: options.inline});
        const that = this,
            theEl = options.inline ? options.el : '.input-group input';
        if (options.type !== 'range') {
            let $theEl = this.$el.find(theEl);
            if(options.inline) $theEl = this.$el;
            $theEl.datetimepicker(options.setting);
            $theEl.on('dp.change', function(event) {
                let value = $(this).val();
                if (typeof options.onChange == 'function') options.onChange(that, formatDate(value, options.format));
            });
        } else {
            const startEl = '.startDate',
                endEl = '.endDate';
            if (!options.startInputEl && !options.endInputEl) {
                const startDateOpts = Object.assign({}, options.setting);
                const endDateOpts = Object.assign({},{...options.setting, useCurrent: options.useCurrent});
                const startDate = this.$el.find(startEl).datetimepicker(startDateOpts);
                const endDate = this.$el.find(endEl).datetimepicker(endDateOpts);
                this.$el.find(startEl).on('dp.change', function(e) {
                    that.$el.find(endEl).data("DateTimePicker").minDate(e.date);
                });
                this.$el.find(endEl).on('dp.change', function(e) {
                    that.$el.find(startEl).data("DateTimePicker").maxDate(e.date);
                });
            } else if (options.startInputEl || options.endInputEl) {
                const selector = options.startInputEl || options.endInputEl;
                if (options.startInputEl) options.setting.useCurrent = false;
                this.$el.find(theEl).datetimepicker(options.setting);
                if (options.endInputEl) {
                    this.$el.find(theEl).on("dp.change", function(e) {
                        const _el = selector instanceof $ ? selector : $(selector).find(theEl);
                        _el.data("DateTimePicker").maxDate(e.date);
                    });
                } else if (options.startInputEl) {
                    this.$el.find(theEl).on("dp.change", function(e) {
                        const _el = selector instanceof $ ? selector : $(selector).find(theEl);
                        _el.data("DateTimePicker").minDate(e.date);
                    });
                }
            }
        }
    }
    render() {
        const options = this.options || {};
        let vDom = '';
        if (options.type == 'range' && !options.startInputEl && !options.endInputEl) {
            vDom = hx `
            <div class="lego-datepicker">
                <div class="input-group input-daterange datepicker date">
                    <input type="text" class="form-control startDate ${options.disabled ? 'disabled' : ''}" value="${formatDate(options.startValue, options.format)}" name="${options.startName}" placeholder="${options.startPlaceholder}">
                    <span class="input-group-addon">
                        至
                    </span>
                    <input type="text" class="form-control endDate ${options.disabled ? 'disabled' : ''}" value="${formatDate(options.endValue, options.format)}" name="${options.endName}" placeholder="${options.endPlaceholder}">
                </div>
            </div>
            `;
        }
        if(options.type !== 'range' || (options.type == 'range' && options.startInputEl && options.endInputEl)){
            vDom = hx `
            <div class="lego-datepicker">
                <div class="input-group date">
                    <input class="form-control dp-input ${options.disabled ? 'disabled' : ''}" type="text" value="${formatDate(val(options.value), options.format)}" name="${options.name}" placeholder="${options.placeholder}">
                    <span class="input-group-addon">
                        <i class="anticon anticon-${options.type == 'time' ? 'clock-circle-o' : 'calendar'}"></i>
                    </span>
                </div>
            </div>
            `;
        }
        if(options.inline) vDom = hx`<div></div>`;
        return vDom;
    }
    showpanel(event){
        let target = $(event.currentTarget),
            input = target.prev('input');
        input.focus();
    }
    onBlur(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            value = target.val();
        if(typeof this.options.onBlur == 'function') this.options.onBlur(this, formatDate(value, this.options.format));
    }
}
Lego.components('datepicker', Datepicker);
export default Datepicker;
