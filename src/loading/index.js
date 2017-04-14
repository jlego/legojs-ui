/**
 * 加载中
 * ronghui Yu
 * 2017/4/12
 */
import './asset/index.scss';

class Loading extends Lego.View {
    constructor(opts = {}) {
        const options = {
            spinning: true, //是否旋转
            size: '',    //设置大小，可选值为 sm lg 或者不设
            tip: '',  //当作为包裹元素时，可以自定义描述文案
            icon: 'anticon anticon-loading-3-quarters'
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let opts = this.options;
        this.vDom = hx`
        <div class="lego-loading">
            <div class="lego-icon ${Lego.config.spinning && opts.spinning ? 'lego-spin' : ''}
            ${val(opts.icon)} lego-spin-${val(opts.size)}">
            </div>
            ${opts.tip ? hx`<div class="lego-spin-text">${opts.tip}</div>` : ''}
        </div>
        `;
        return this.vDom;
    }
}
Lego.components('loading', Loading);
export default Loading;
