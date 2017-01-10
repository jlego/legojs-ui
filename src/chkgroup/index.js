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
        const options = this.options || {};
        let vDom = hx`<div></div>`;
        vDom = hx`<div>
        ${options.data.map((item) => {
            if(options.layout == 'vertical'){
                return hx`
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="${options.type}" name="${options.name}" value="${item.value}" ${val(item.checked)} ${val(item.disabled)}>
                    ${val(item.label)}
                  </label>
                </div>
                `;
            }else{
                return hx`
                <label class="form-check-inline">
                  <input class="form-check-input" type="${options.type}" name="${options.name}" value="${item.value}" ${val(item.checked)} ${val(item.disabled)}>
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
