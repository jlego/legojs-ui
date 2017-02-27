/**
 * 步骤条
 * ronghui Yu
 * 2017/1/17
 * item: {
 *     status: '', //指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error
 *     title: '',
 *     description: '',
 *     icon: ''
 * }
 */
import './asset/index.scss';

class Steps extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            current: 0, //指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态
            status: 'process', //指定当前步骤的状态，可选 wait process finish error
            size: 'default', //指定大小，目前支持普通（default）和迷你（small）
            direction: 'horizontal', //指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向
            titleWidth: 120,    //标题宽度
            showDescription: true,  //显示描述
            showIcon: true, //是否显示图标
            showNum: true, //是否显示序号
            data: [],
            onNext(){},  //事件回调
            onPrevious(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options,
            dataLength = options.data.length,
            widthPercent = 10 / (dataLength - 1) * 10;
        const vDom = hx`
        <div class="lego-steps lego-steps-${options.direction} lego-steps-label-${options.direction} ${!options.showNum ? 'lego-steps-sm' : ''}">
        ${options.data.map((item, index) => {
            return hx`
            <div class="lego-steps-item lego-steps-status-${options.current == index ? options.status : (item.status ? item.status : (options.current > index ? 'finish': 'wait'))}"
            style="${index == dataLength - 1 ? '' : ('width:' + widthPercent + '%;')} margin-right:-${(options.titleWidth)/2}px;">
                ${index < dataLength ? hx`<div class="lego-steps-tail"
                style="${index == dataLength - 1 ? ('padding-right:' + options.titleWidth + 'px') : ('padding-right:' + options.titleWidth/2 + 'px')}"><i></i></div>` : ''}
                <div class="lego-steps-step">
                    <div class="lego-steps-head">
                        <div class="lego-steps-head-inner">
                        ${options.showIcon ?
                            hx`<span class="lego-steps-icon anticon ${item.icon ? item.icon : (item.status == 'finish' ? 'anticon-check' : '')}">
                            ${item.status !== 'finish' ? (item.icon ? item.icon : (options.showNum ? (index + 1) : '')) : ''}
                            </span>` :
                            hx`<span class="lego-steps-icon">${options.showNum ? (index + 1) : ''}</span>`}
                        </div>
                    </div>
                    <div class="lego-steps-main">
                        <div class="lego-steps-title">${val(item.title)}</div>
                        ${options.showDescription ? hx`<div class="lego-steps-description">${val(item.description)}</div>` : ''}
                    </div>
                </div>
            </div>
            `;
        })}
        </div>
        `;
        return vDom;
    }
    changeStatus(){
        const options = this.options;
        if(options.current > options.data.length) options.current = options.data.length;
        options.data.forEach((item, index) => {
            item.status = 'wait';
            if(index < options.current) item.status = 'finish';
            if(options.current == index) item.status = options.status;
        });
        this.refresh();
    }
    next(){
        const options = this.options;
        options.current ++;
        this.changeStatus();
        if(typeof options.onNext == 'function') options.onNext(this, options.current);
    }
    previous(){
        const options = this.options;
        options.current --;
        this.changeStatus();
        if(typeof options.onPrevious == 'function') options.onPrevious(this, options.current);
    }
}
Lego.components('steps', Steps);
export default Steps;
