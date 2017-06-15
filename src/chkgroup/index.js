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
            events: {
                'change .form-check-input': 'onChange'
            },
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
                    <input class="form-check-input lego-${opts.type}" type="${opts.type}"
                    name="${opts.name}" value="${item.value}" ${item.checked ? 'checked' : ''} ${item.disabled ? 'disabled' : ''}>
                    <span>${val(item.label)}</span>
                  </label>
                </div>
                `;
            }else{
                return hx`
                <div class="form-check form-check-inline ${item.disabled ? 'disabled' : ''}">
                    <label class="form-check-label">
                      <input class="form-check-input lego-${opts.type}" type="${opts.type}"
                      name="${opts.name}" value="${item.value}" ${item.checked ? 'checked' : ''} ${item.disabled ? 'disabled' : ''}>
                      <span>${val(item.label)}</span>
                    </label>
                </div>
                `;
            }
        })}
        </div>
        `;
        return vDom;
    }
    onChange(event){
        let opts = this.options,
            valArr = [],
            result = [];
        this.$("input.form-check-input:checked").each(function(index, el){
            valArr.push($(el).val());
        });
        opts.data.forEach((item, index) => {
            if(valArr.includes(item.value)){
                result.push(item);
            }
        });
        if(typeof opts.onChange == 'function') opts.onChange(this, result.length == 1 ? result[0] : result, event);
    }
}
Lego.components('chkgroup', Chkgroup);
export default Chkgroup;
