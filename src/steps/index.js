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
            onNext(){}   //事件回调
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="ant-steps ant-steps-horizontal ant-steps-label-horizontal">
            <div class="ant-steps-item ant-steps-status-finish" style="margin-right: -77px; width: 50%;">
                <div class="ant-steps-tail"><i></i></div>
                <div class="ant-steps-step">
                    <div class="ant-steps-head">
                        <div class="ant-steps-head-inner"><span class="ant-steps-icon anticon anticon-check"></span></div>
                    </div>
                    <div class="ant-steps-main">
                        <div class="ant-steps-title">Finished</div>
                        <div class="ant-steps-description">This is a description.</div>
                    </div>
                </div>
            </div>
            <div class="ant-steps-item ant-steps-status-process" style="margin-right: -77px; width: 50%;">
                <div class="ant-steps-tail"><i></i></div>
                <div class="ant-steps-step">
                    <div class="ant-steps-head">
                        <div class="ant-steps-head-inner"><span class="ant-steps-icon">2</span></div>
                    </div>
                    <div class="ant-steps-main">
                        <div class="ant-steps-title">In Progress</div>
                        <div class="ant-steps-description">This is a description.</div>
                    </div>
                </div>
            </div>
            <div class="ant-steps-item ant-steps-item-last ant-steps-status-wait">
                <div class="ant-steps-step">
                    <div class="ant-steps-head">
                        <div class="ant-steps-head-inner"><span class="ant-steps-icon">3</span></div>
                    </div>
                    <div class="ant-steps-main">
                        <div class="ant-steps-title">Waiting</div>
                        <div class="ant-steps-description">This is a description.</div>
                    </div>
                </div>
            </div>
        </div>
        `;
        return vDom;
    }
    onNext(event){
        if(typeof this.options.onAdd == 'function') this.options.onAdd(this, event);
    }
}
Lego.components('steps', Steps);
export default Steps;
