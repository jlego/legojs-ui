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
            type: 'line',   //风格 line/arrow
            color: 'light',  //dark/light
            current: 0, //指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态
            status: 'process', //指定当前步骤的状态，可选 wait process finish error
            size: '', //指定大小，sm
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
    components(){
        let opts = this.options;
        if(opts.type == 'arrow') opts.titleWidth = 0;
    }
    render() {
        let opts = this.options,
            dataLength = opts.data.length,
            widthPercent = 10 / (dataLength - (opts.type == 'arrow' ? 0 : 1)) * 10;
        let vDom = hx`
        <div class="lego-steps lego-steps-${opts.direction} lego-steps-${opts.type} lego-steps-${!opts.showNum ? 'sm' : opts.size}
        ${opts.type == 'arrow' && opts.color == 'light' ? 'lego-steps-o' : ''}">
        ${opts.data.map((item, index) => {
            return hx`
            <div class="lego-steps-item lego-steps-status-${opts.current == index ? opts.status : (item.status ? item.status : (opts.current > index ? 'finish': 'wait'))}"
            style="${index == dataLength - (opts.type == 'arrow' ? 0 : 1) ? '' : ('width:' + widthPercent + '%;')} margin-right:-${(opts.titleWidth)/2}px;">
                ${index < dataLength ? hx`<div class="lego-steps-tail"
                style="${index == dataLength - (opts.type == 'arrow' ? 0 : 1) ? ('padding-right:' + opts.titleWidth + 'px') : ('padding-right:' + opts.titleWidth/2 + 'px')}"><i></i></div>` : ''}
                <div class="lego-steps-step">
                    <div class="lego-steps-head">
                        <div class="lego-steps-head-inner">
                        ${opts.showIcon ?
                            hx`<span class="lego-steps-icon anticon ${item.icon ? item.icon : (item.status == 'finish' ? 'anticon-check' : '')}">
                            ${item.status !== 'finish' ? (item.icon ? item.icon : (opts.showNum ? (index + 1) : '')) : ''}
                            </span>` :
                            hx`<span class="lego-steps-icon">${opts.showNum ? (index + 1) : ''}</span>`
                        }
                        </div>
                    </div>
                    <div class="lego-steps-main">
                        <div class="lego-steps-title">${val(item.title)}</div>
                        ${opts.showDescription ? hx`<div class="lego-steps-description">${val(item.description)}</div>` : ''}
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
        let opts = this.options;
        if(opts.current > opts.data.length) opts.current = opts.data.length;
        opts.data.forEach((item, index) => {
            item.status = 'wait';
            if(index < opts.current) item.status = 'finish';
            if(opts.current == index) item.status = opts.status;
        });
        this.refresh();
    }
    next(){
        let opts = this.options;
        opts.current ++;
        this.changeStatus();
        if(typeof opts.onNext == 'function') opts.onNext(this, opts.current);
    }
    previous(){
        let opts = this.options;
        opts.current --;
        this.changeStatus();
        if(typeof opts.onPrevious == 'function') opts.onPrevious(this, opts.current);
    }
}
Lego.components('steps', Steps);
export default Steps;
