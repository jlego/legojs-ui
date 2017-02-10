/**
 * 按钮工具条
 * ronghui Yu
 * 2017/2/9
 * dataitem: {
 *     type: 'button/input'
 * }
 */
// import './asset/index.scss';
import Btngroup from '../btngroup/index';
import Inputs from '../inputs/index';

class Btntoolbar extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {};
        Object.assign(options, opts);
        super(options);
        this.renderCom();
    }
    render() {
        const options = this.options;
        function comTag(item, index){
            let tagName = item.type == 'button' ? 'btn-group': 'inputs',
                tagId = [item.type, options.vid, index].join('-');
            item.component.comName ? hx(`<${tagName} id="${tagId}"></${tagName}>`) : '';
        }
        const vDom = hx`
        <div class="btn-toolbar">
        ${options.data.map((item, index) => hx`comTag(item, index)`)}
        </div>
        `;
        return vDom;
    }
    renderCom(){
        let that = this,
            options = this.options;
        this.options.data.forEach((item, index) => {
            let tagId = [item.type, options.vid, index].join('-');
            Lego.create(item.type == 'button' ? Btngroup : Inputs, Lego.extend({el: '#' + tagId}, item));
        });
    }
}
Lego.components('btntoolbar', Btntoolbar);
export default Btntoolbar;
