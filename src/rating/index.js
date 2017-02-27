/**
 * 评分
 * ronghui Yu
 * 2017/2/27
 */
import './asset/index.scss';
import rating from 'bootstrap-rating';
import Tooltip from '../tooltip/index';

class Rating extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            fractions: 0,   //平分
            step: 2,
            start: 0,
            stop: 10,
            icon: 'anticon',  //图标类型
            filled: 'star',
            filledSelected: 'star',
            empty: 'star-o',
            tooltipOption: {
                title: '',
                container: 'body',
                placement: 'bottom'
            },
            showTip: false,
            showLabel: false,
            disabled: false,
            readonly: false,
            value: 0,
            size: '',    //设置大小，可选值为 sm lg 或者不设
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
        this.init();
    }
    render() {
        let options = this.options;
        let vDom = hx`<div class="lego-rating ${options.size ? ('lego-rating-' + options.size) : ''}">
        <input type="hidden" name="${val(options.name)}" id="rating-${options.vid}" class="${options.showTip ? 'rating-tooltip' : 'rating'}" value="${options.value}"/>
        ${options.showLabel ? hx`<span class="badge badge-default">${val(options.value)}</span>` : ''}
        </div>
        `;
        return vDom;
    }
    init(){
        let options = this.options,
            that = this,
            inputEl = this.$('#rating-' + options.vid),
            inputAttr = {},
            tooltipOption = options.tooltipOption,
            iconStr = options.icon + ' ' + options.icon + '-',
            ratingConfig = {
                fractions: options.fractions,
                step: options.step,
                start: options.start,
                stop: options.stop,
                filled: iconStr + options.filled,
                filledSelected: iconStr + options.filledSelected,
                empty: iconStr + options.empty
            };
        if(options.disabled) inputAttr.disabled = options.disabled;
        if(options.readonly) inputAttr['data-readonly'] = '';
        inputEl.attr(inputAttr);
        if (tooltipOption.title) {
            let theTitle = tooltipOption.title;
            ratingConfig.extendSymbol = function(rate) {
                if(theTitle.indexOf('###') >= 0){
                    tooltipOption.title = theTitle.replace(/###/g, rate);
                }else{
                    tooltipOption.title = theTitle + rate;
                }
                $(this).tooltip(tooltipOption);
            };
        }
        inputEl.rating(ratingConfig);
        inputEl.on('change', function() {
            let val = $(this).val();
            that.setValue(val);
            options.showLabel && $(this).next('.badge').text(val);
            if(typeof options.onChange == 'function') options.onChange(that, val);
        });
    }
    setValue(val){
        if(val){
            this.options.value = Number(val);
        }
        return this;
    }
    getValue(){
        return this.options.value;
    }
}
Lego.components('rating', Rating);
export default Rating;
