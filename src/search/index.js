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
                'change .lego-search-input': 'onChange',
                'keydown .lego-search-input': '_enterSearch'
            },
            placeholder: '请输入关键字',
            name: '',
            size: '',
            keyword: '',
            activeKey: '',  //选中的key
            activeValue: '',
            hasSelect: false,   //是否有下拉菜单
            onSearch(){}, //点击的回调
            onChange(){},
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
        if(typeof options.value == 'string'){
            options.keyword = options.value;
            options.value = null;
        }
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="input-group lego-search ${options.size ? ('input-group-' + options.size) : ''}">
        ${options.hasSelect ? hx`
          <div class="input-group-btn dropdown" id="select-${options.vid}">
            <button type="button" class="btn btn-secondary dropdown-toggle">
              ${options.activeValue || '请选择'}
            </button>
            <dropdown id="dropdown-${options.vid}"></dropdown>
          </div>
        ` : ''}
          <input type="text" class="form-control lego-search-input" placeholder="${options.placeholder}" name="${options.name}" value="${val(options.keyword)}">
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
    getValue(event){
        let keyword = event ? this.$('.lego-search-input').val() : this.options.keyword;
        return {
            key: this.options.activeKey,
            value: this.options.activeValue,
            keyword: keyword
        };
    }
    onChange(event) {
        if(event) event.stopPropagation();
        if (typeof this.options.onChange === 'function') this.options.onChange(this, this.getValue(event));
    }
    onSearch(event) {
        if(event) event.stopPropagation();
        if (typeof this.options.onSearch === 'function') this.options.onSearch(this, this.getValue(event));
    }
}
Lego.components('search', Search);
export default Search;
