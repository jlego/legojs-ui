/**
 * 滑动条
 * ronghui Yu
 * 2017/5/22
 */
import Slider from 'bootstrap-slider';
import './asset/index.scss';

class SliderView extends Lego.UI.Baseview {
    constructor(opts = {}) {
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
            enabled: true
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
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="lego-slider">
            <input id="input_${opts.vid}" type="text" />
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let opts = this.options,
            that = this;
        this.slider = new Slider('#input_' + opts.vid, {

        });
    }
    getValue(){
        this.slider.getValue();
    }
    setValue(newValue){
        this.slider.getValue();
    }
    getValue(){
        this.slider.getValue();
    }
}
Lego.components('slider', SliderView);
export default SliderView;
