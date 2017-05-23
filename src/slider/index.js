/**
 * 滑动条
 * ronghui Yu
 * 2017/5/22
 * https://github.com/seiyria/bootstrap-slider
 * http://seiyria.com/bootstrap-slider/
 */
import Slider from 'bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';
import './asset/index.scss';

class SliderView extends Lego.UI.Baseview {
    constructor(option = {}) {
        const options = {
            value: 5,
            min: 0,
            max: 10,
            step: 1,
            precision: 2,
            orientation: 'horizontal', //horizontal,vertical
            range: false,
            selection: 'before',
            tooltip: 'show',
            tooltip_split: false,
            tooltip_position: null,
            handle: 'round',
            reversed: false,
            rtl: 'auto',
            enabled: true,
            formatter: null,
            natural_arrow_keys: false,
            ticks: [],
            ticks_positions: [],
            ticks_labels: [],
            ticks_snap_bounds: 0,
            ticks_tooltip: false,
            scale: 'linear',
            focus: false,
            labelledby: null,
            rangeHighlights: [],
            size: '',  //sm, lg
            onChange(){},
            onStart(){},
            onStop(){}
        };
        Object.assign(options, option);
        super(options);
        this.initSlider();
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="lego-slider">
            <input id="input_${opts.vid}" name="${opts.name}" type="text" />
        </div>
        `;
        return vDom;
    }
    initSlider(){
        let opts = this.options,
            that = this;
        this.slider = new Slider('#input_' + opts.vid, {
            value: opts.value,
            min: opts.min,
            max: opts.max,
            step: opts.step,
            precision: opts.precision,
            orientation: opts.orientation,
            range: opts.range,
            selection: opts.selection,
            tooltip: opts.tooltip,
            tooltip_split: opts.tooltip_split,
            tooltip_position: opts.tooltip_position,
            handle: opts.handle,
            reversed: opts.reversed,
            rtl: opts.rtl,
            enabled: opts.enabled,
            formatter: opts.formatter,
            natural_arrow_keys: opts.natural_arrow_keys,
            ticks: opts.ticks,
            ticks_positions: opts.ticks_positions,
            ticks_labels: opts.ticks_labels,
            ticks_snap_bounds: opts.ticks_snap_bounds,
            ticks_tooltip: opts.ticks_tooltip,
            scale: opts.scale,
            focus: opts.focus,
            labelledby: opts.labelledby,
            rangeHighlights: opts.rangeHighlights
        });
        this.slider.on('change', function(){
            if(typeof opts.onChange == 'function') opts.onChange(that, that.slider.getValue());
        });
        this.slider.on('slideStart', function(){
            if(typeof opts.onStart == 'function') opts.onStart(that, that.slider.getValue());
        });
        this.slider.on('slideStop', function(){
            if(typeof opts.onStop == 'function') opts.onStop(that, that.slider.getValue());
        });
    }
}
Lego.components('slider', SliderView);
export default SliderView;
