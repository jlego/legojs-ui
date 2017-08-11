/**
 * 组件类: 色彩选择器
 * 作者: yuronghui
 * 创建日期: 2017/7/25
 * https://github.com/bgrins/spectrum
 */
import './asset/index.scss';
import Colorpicker from 'spectrum-colorpicker-cjs';
import 'spectrum-colorpicker-cjs/spectrum.css';

class ComView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            name: '',
            type: 1,  //类型
            readonly: false,    //是否只读
            value: '',
            flat: false,
            showInput: false,
            allowEmpty: false,
            showButtons: true,
            clickoutFiresChange: true,
            showInitial: true,
            showPalette: false,
            showPaletteOnly: false,
            hideAfterPaletteSelect: false,
            togglePaletteOnly: false,
            showSelectionPalette: true,
            localStorageKey: false,
            appendTo: "parent",
            maxSelectionSize: 16,
            cancelText: "取消",
            chooseText: "确定",
            togglePaletteMoreText: "more",
            togglePaletteLessText: "less",
            clearText: "清除已选择颜色",
            noColorSelectedText: "没有选中的颜色",
            preferredFormat: 'hex3',
            className: "",
            containerClassName: "",
            replacerClassName: "",
            showAlpha: false,
            theme: "sp-light",
            palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
            selectionPalette: [],
            disabled: false,
            offset: null,
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options,
            vDom = hx`<div class="lego-colorpicker">
            <input type="text" id="input_${opts.vid}" value="${opts.value}" name="${opts.name}" />
        </div>`;
        return vDom;
    }
    renderAfter(){
        this.result = this.result || '';
        let opts = this.options,
            that = this,
            inputEl = this.$('#input_' + opts.vid),
            spectrumOption = {
                change(color){
                    that.result = color;
                    // color.toHexString();
                    if(typeof opts.onChange == 'function') opts.onChange(that, that.getValue());
                },
                move(color){
                    if(typeof opts.onMove == 'function') opts.onMove(that, color);
                },
                show(color){
                    if(typeof opts.onShow == 'function') opts.onShow(that, color);
                },
                hide(color){
                    if(typeof opts.onHide == 'function') opts.onHide(that, color);
                },
                beforeShow(color){
                    if(typeof opts.onBeforeShow == 'function') opts.onBeforeShow(that, color);
                }
            };
        Object.assign(spectrumOption, opts);
        if(opts.value) spectrumOption.color = opts.value;
        let palette = [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
        ];
        switch(opts.type){
            case 1:
                spectrumOption.showPalette = false;
                break;
            case 2:
                spectrumOption.showPalette = false;
                spectrumOption.showInput = true;
                spectrumOption.allowEmpty = true;
                spectrumOption.showAlpha = true;
                break;
            case 3:
                spectrumOption.showPalette = true;
                spectrumOption.showPaletteOnly = true;
                spectrumOption.showSelectionPalette = false;
                spectrumOption.palette = palette;
                break;
            case 4:
                spectrumOption.showAlpha = true;
                spectrumOption.showInput = true;
                spectrumOption.allowEmpty = true;
                spectrumOption.showPalette = true;
                spectrumOption.showPaletteOnly = false;
                spectrumOption.showSelectionPalette = true;
                spectrumOption.localStorageKey = "spectrum." + opts.vid;
                spectrumOption.palette = palette;
                break;
        }
        if(inputEl.length){
            if(!this.spectrum){
                this.spectrum = inputEl.spectrum(spectrumOption);
            }
        }
    }
    // 返回值
    getValue(){
        let opts = this.options,
            inputEl = this.$('#input_' + opts.vid);
        inputEl.valid();
        return this.result;
    }
    // 方法
    colorpicker(method){
        let opts = this.options,
            that = this,
            inputEl = this.$('#input_' + opts.vid);
        if(inputEl.length) inputEl.spectrum(method);
    }
}
Lego.components('colorpicker', ComView);
export default ComView;
