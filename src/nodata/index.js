/**
 * 暂无数据
 * ronghui Yu
 * 2017/4/27
 */
import './asset/index.scss';

class Nodata extends Lego.View {
    constructor(opts = {}) {
        const options = {
            size: '',    //设置大小，可选值为 sm lg 或者不设
            tip: '暂无数据',  //可以自定义描述文案
            icon: ''
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options;
        this.vDom = hx`
        <div class="lego-nodata">
            <div class="lego-icon ${val(opts.icon)} ${opts.size ? ('lego-icon-' + opts.size) : ''}"></div>
            ${opts.tip ? hx`<div class="lego-tip-text" style="${opts.icon ? 'margin-top:40px;' : ''}">${opts.tip}</div>` : ''}
        </div>
        `;
        return this.vDom;
    }
}
Lego.components('nodata', Nodata);
export default Nodata;
