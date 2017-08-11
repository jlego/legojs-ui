/**
 * 下拉按钮
 * ronghui Yu
 * 2017/2/9
 */
import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Dropdownbtn extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click button.dropdownbtn, .lego-reply-submit': 'onClick'
            },
            text: 'button name',
            btnType: 'secondary',   //按钮类型
            size: '',    //设置按钮大小，可选值为 sm lg 或者不设
            direction: '',      //下拉方向 up/down
            activeKey: '',
            dropdownOption: {},
            data: [],
            onClick(){},   //click 事件的 handler
            onChange(){},
            components: []
        };
        Object.assign(options, opts);
        super(options);
        this.activeItem = {};
    }
    components(){
        let opts = this.options;
        if(opts.data.length){
            this.addCom($.extend(opts.dropdownOption, {
                el: '#dropdown-' + opts.vid,
                container: this.$('.dropdown-toggle-split'),
                direction: opts.direction,
                activeKey: opts.activeKey,
                data: opts.data,
                onChange(self, item, event){
                    let theView = self.options.context;
                    theView.activeItem = item;
                    if(typeof theView.options.onChange == 'function') theView.options.onChange(theView, item);
                }
            }));
        }
    }
    render() {
        const opts = this.options;
        const vDom = hx`
        <div class="btn-group ${opts.size == 'lg' ? 'btn-group-lg' : (opts.size == 'sm' ? 'btn-group-sm' : '')} ${opts.direction == 'up' ? 'dropup' : ''}">
            <button type="button" class="btn btn-${opts.btnType} dropdownbtn">${val(opts.html || opts.text)}</button>
            <button type="button" class="btn btn-${opts.btnType} dropdown-toggle dropdown-toggle-split">
                <span class="sr-only">Toggle Dropdown</span>
            </button>
            <dropdown id="dropdown-${opts.vid}"></dropdown>
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
