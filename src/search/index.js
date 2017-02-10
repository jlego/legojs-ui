/**
 * 搜索框
 * ronghui Yu
 * 2017/1/1
 */
import './asset/index.scss';
import Dropdown from '../dropdown/index';

class Search extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-search-button': 'onSearch',
                'keydown .lego-search-input': '_enterSearch'
            },
            placeholder: '输入关键字搜索',
            activeKey: '',  //选中的key
            activeValue: '',
            hasSelect: false,   //是否有下拉菜单
            onSearch(){}, //点击的回调
            components: [{
                el: '#dropdown-' + opts.vid,
                container: '#select-' + opts.vid,
                data: opts.data,
                onChange(self, model){
                    this.context.options.activeKey = model.key;
                    this.context.options.activeValue = model.value;
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="input-group lego-search">
        ${options.hasSelect ? hx`
          <div class="input-group-btn dropdown" id="select-${options.vid}">
            <button type="button" class="btn btn-secondary dropdown-toggle">
              ${options.activeValue || '请选择'}
            </button>
            <dropdown id="dropdown-${options.vid}"></dropdown>
          </div>
        ` : ''}
          <input type="text" class="form-control lego-search-input" placeholder="${options.placeholder}">
          <div class="input-group-btn">
            <button type="button" class="btn lego-search-button">
              <i class="anticon anticon-search"></i>
            </button>
          </div>
        </div>
        `;
        return vDom;
    }
    _enterSearch(event) {
        if (event.keyCode == 13) {
            this.onSearch(event);
        }
    }
    onSearch(event) {
        event.stopPropagation();
        const keyword = this.$el.find('.lego-search-input').val();
        if (typeof this.options.onSearch === 'function') this.options.onSearch(this, {
            key: this.options.activeKey,
            value: this.options.activeValue,
            keyword: keyword
        });
    }
}
Lego.components('search', Search);
export default Search;
