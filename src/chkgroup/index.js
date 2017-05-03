/**
 * 选择框组
 * ronghui Yu
 * 2017/1/9
 */
import './asset/index.scss';
// item: {
// label: '',
// disabled: false,
// checked: false,
// value: ''
// }

class Chkgroup extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            layout: 'vertical', //Inline
            type: 'checkbox',   //radio
            name: '',
            data: [],
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const opts = this.options;
        let vDom = hx`
        <div class="lego-chkgroup">
        ${opts.data.map((item) => {
            if(opts.layout == 'vertical'){
                return hx`
                <div class="form-check ${item.disabled ? 'disabled' : ''}">
                  <label class="form-check-label">
                    <input class="form-check-input" type="${opts.type}" name="${opts.name}" value="${item.value}" ${item.checked ? 'checked' : ''} >
                    ${val(item.label)}
                  </label>
                </div>
                `;
            }else{
                return hx`
                <div class="form-check form-check-inline ${item.disabled ? 'disabled' : ''}">
                    <label class="form-check-label">
                      <input class="form-check-input" type="${opts.type}" name="${opts.name}" value="${item.value}" ${item.checked ? 'checked' : ''} >
                      ${val(item.label)}
                    </label>
                </div>
                `;
            }
        })}
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let opts = this.options,
            that = this;
        this.$(".form-check-input").change(function(){
            let val = that.$("input.form-check-input:checked").val(),
                findOne = opts.data.find(item => item.value == val);
            if(typeof opts.onChange == 'function') opts.onChange(that, findOne);
        });
    }
}
Lego.components('chkgroup', Chkgroup);
export default Chkgroup;
