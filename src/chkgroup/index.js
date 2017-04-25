/**
 * 选择框组
 * ronghui Yu
 * 2017/1/9
 */
// import './asset/index.scss';
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
            data: []
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const opts = this.options;
        let vDom = vDom = hx`<div>
        ${opts.data.map((item) => {
            if(opts.layout == 'vertical'){
                return hx`
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="${opts.type}" name="${opts.name}" value="${item.value}" ${val(item.checked)} ${val(item.disabled)}>
                    ${val(item.label)}
                  </label>
                </div>
                `;
            }else{
                return hx`
                <label class="form-check-inline">
                  <input class="form-check-input" type="${opts.type}" name="${opts.name}" value="${item.value}" ${val(item.checked)} ${val(item.disabled)}>
                  ${val(item.label)}
                </label>
                `;
            }
        })}
        </div>`;
        return vDom;
    }
}
Lego.components('chkgroup', Chkgroup);
export default Chkgroup;
