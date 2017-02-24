/**
 * 下拉按钮
 * ronghui Yu
 * 2017/2/9
 */
// import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Dropdownbtn extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click button.dropdownbtn, .lego-reply-submit': 'onClick'
            },
            text: 'button name',
            btnType: 'secondary',   //按钮类型
            size: 'default',    //设置按钮大小，可选值为 small large 或者不设
            direction: '',      //下拉方向 up/down
            activeKey: '',
            dropdownOption: {},
            onClick(){},   //click 事件的 handler
            onChange(){},
            components: []
        };
        Object.assign(options, opts);
        super(options);
        this.activeItem = {};
    }
    components(){
        let options = this.options;
        this.addCom($.extend(options.dropdownOption, {
            el: '#dropdown-' + options.vid,
            container: '[view-id=' + options.vid + ']',
            direction: options.direction,
            activeKey: options.activeKey,
            data: options.data,
            onChange(self, item, event){
                let theView = self.options.context;
                theView.activeItem = item;
                if(typeof theView.options.onChange == 'function') theView.options.onChange(theView, item);
            }
        }));
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="btn-group ${options.size == 'large' ? 'btn-group-lg' : (options.size == 'small' ? 'btn-group-sm' : '')} ${options.direction == 'up' ? 'dropup' : ''}">
            <button type="button" class="btn btn-${options.btnType} dropdownbtn">${val(options.html || options.text)}</button>
            <button type="button" class="btn btn-${options.btnType} dropdown-toggle dropdown-toggle-split">
                <span class="sr-only">Toggle Dropdown</span>
            </button>
            <dropdown id="dropdown-${options.vid}"></dropdown>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        this.$('button').each(function(index, item){
            $(item).data('index', index);
        });
    }
    onClick(event){
        event.stopPropagation();
        if(typeof this.options.onClick === 'function') this.options.onClick(this, this.activeItem, event);
    }
}
Lego.components('dropdownbtn', Dropdownbtn);
export default Dropdownbtn;
