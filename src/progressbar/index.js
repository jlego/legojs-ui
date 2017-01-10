/**
 * 进度条
 * ronghui Yu
 * 2017/1/10
 */
// import './asset/index.scss';

class Progressbar extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            type: '',
            status: '',   //success, info, primary, danger, warning
            showInfo: true, //是否显示进度数值或状态图标
            percent: 0,
            strokeWidth: 6, //进度条线的宽度，单位 px
            // format(){}   //内容的模板函数
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="progress">
            ${options.showInfo ? hx`<div class="text-xs-center">${this.format(options.percent)}</div>` : ''}
            <progress class="progress progress-${options.status ? options.status : 'primary'}" value="${options.percent}" max="100"></progress>
        </div>
        `;
        return vDom;
    }
    format(percent){
        if(typeof this.options.format == 'function'){
            return this.options.format(percent);
        }else{
            return percent + '%';
        }
    }
}
Lego.components('progressbar', Progressbar);
export default Progressbar;
