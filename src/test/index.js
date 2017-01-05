// import './asset/index.scss';
// import 'moment';
// import 'moment/locale/zh-cn';
// import datetimepicker from 'eonasdan-bootstrap-datetimepicker';
// import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
// $.fn.datetimepicker = datetimepicker;

class Test extends Lego.View {
    constructor(opts = {}) {
        const options = {
            // type: 'date', //date, time, range
            // name: '',
            // placeholder: '选择时间', //
            // disabled: false, //
            // inline: false,
            // size: 'default', //设置按钮大小，可选值为 small large 或者不设
            // format: opts.type == 'time' ? 'LT' : '', //
            // value: null,
            // startInputEl: '',
            // startName: opts.name,
            // startPlaceholder: '开始时间',
            // endInputEl: '',
            // endName: '',
            // endPlaceholder: '结束时间',
            // useCurrent: false,
            // setting: {},
            // onChange() {} //
        };
        Object.assign(options, opts);
        // if (options.value) options.value = typeof options.value == 'function' ? options.value() : options.value;
        super(options);
        // this.initDatepicker();
    }
    // initDatepicker() {
    //     console.warn('pppppppppppppp', this.options.vid);
    //     const options = this.options;
    //     Object.assign(options.setting, {format: options.format, inline: options.inline});
    //     const that = this,
    //         theEl = options.inline ? ('#date_' + options.vid) : '.dp-input';
    //     if (options.type !== 'range') {
    //         this.$(theEl).datetimepicker(options.setting);
    //         this.$(theEl).blur(function(e) {
    //             // that.$(theEl).data("DateTimePicker", $(this).val());
    //             console.warn('ddddddddddddddddd', that.$(theEl).data("DateTimePicker"));
    //             if (typeof options.onChange == 'function') options.onChange($(this).val());
    //         });
    //     } else {
    //         const startEl = '.startDate',
    //             endEl = '.endDate';
    //         if (!options.startInputEl && !options.endInputEl) {
    //             const startDate = this.$(startEl).datetimepicker(options.setting);
    //             const endDate = this.$(endEl).datetimepicker(Object.assign({},{...options.setting, useCurrent: options.useCurrent}));
    //             this.$(startEl).blur(function(e) {
    //                 console.warn('fffffffffffff');
    //                 that.$(endEl).data("DateTimePicker", $(this).val());
    //                 that.$(endEl).data("DateTimePicker").minDate(moment($(this).val()));
    //                 endDate.minDate($(this).val());
    //                 if (typeof options.onChange == 'function') options.onChange($(this).val());
    //             });
    //             this.$(endEl).blur(function(e) {
    //                 // that.$(startEl).data("DateTimePicker").maxDate(moment($(this).val()));
    //                 startDate.maxDate($(this).val());
    //                 if (typeof options.onChange == 'function') options.onChange($(this).val());
    //             });
    //         } else if (options.startInputEl || options.endInputEl) {
    //             const selector = options.startInputEl || options.endInputEl;
    //             if (options.startInputEl) options.setting.useCurrent = false;
    //             this.$(theEl).datetimepicker(options.setting);
    //             if (options.endInputEl) {
    //                 this.$(theEl).on("dp.change", function(e) {
    //                     const _el = selector instanceof $ ? selector : $(selector).find(theEl);
    //                     _el.data("DateTimePicker").maxDate(e.date);
    //                     if (typeof options.onChange == 'function') options.onChange($(this).val());
    //                 });
    //             } else if (options.startInputEl) {
    //                 this.$(theEl).on("dp.change", function(e) {
    //                     const _el = selector instanceof $ ? selector : $(selector).find(theEl);
    //                     _el.data("DateTimePicker").minDate(e.date);
    //                     if (typeof options.onChange == 'function') options.onChange($(this).val());
    //                 });
    //             }
    //         }
    //     }
    // }
    render() {
        const options = this.options || {};
        console.warn('yyyyyyyyyyyyyy', options.vid);
        // debugger;
        let vDom = '';
        // if (options.type == 'range' && !options.startInputEl && !options.endInputEl) {
        //     vDom = hx `
        //     <div class="bootstrap-datetimepicker-widget">
        //         <div class="input-group input-daterange datepicker date">
        //             <input type="text" class="form-control startDate ${options.disabled ? 'disabled' : ''}" name="${options.startName}" placeholder="${options.startPlaceholder}">
        //             <span class="input-group-addon">
        //                 至
        //             </span>
        //             <input type="text" class="form-control endDate ${options.disabled ? 'disabled' : ''}" name="${options.endName}" placeholder="${options.endPlaceholder}">
        //         </div>
        //     </div>
        //     `;
        // }
        // if(options.type !== 'range' || (options.type == 'range' && options.startInputEl && options.endInputEl)){
        //     vDom = hx `
        //     <div class="bootstrap-datetimepicker-widget">
        //         <div class="input-group date">
        //             <input class="form-control dp-input ${options.disabled ? 'disabled' : ''}" type="text" name="${options.name}" placeholder="${options.placeholder}">
        //             <span class="input-group-addon">
        //                 <i class="anticon anticon-${options.type == 'time' ? 'clock-circle-o' : 'calendar'}"></i>
        //             </span>
        //         </div>
        //     </div>
        //     `;
        // }
        // if(options.inline) vDom = hx`<div id="#date_${options.vid}"></div>`;
        vDom = hx`<div id="#date_${options.vid}"></div>`;
        return vDom;
    }
}
Lego.components('test', Test);
export default Test;
