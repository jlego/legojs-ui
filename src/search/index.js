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
                'click .search-button': 'clickSearch'
            },
            placeholder: '输入关键字搜索',
            activeKey: '',  //选中的key
            activeValue: '',
            hasSelect: false,   //是否有下拉菜单
            onClick(){}, //点击的回调
            components: [{
                el: '#' + opts.vid + '-dropdown',
                trigger: '#' + opts.vid + '-select',
                data: opts.data,
                onChange(model){
                    const theView = Lego.getView(opts.el);
                    if(theView){
                        theView.options.activeKey = model.key;
                        theView.options.activeValue = model.value;
                    }
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="input-group search">
        ${options.hasSelect ? hx`
          <div class="input-group-btn dropdown" id="${options.vid}-select">
            <button type="button" class="btn btn-secondary dropdown-toggle">
              ${options.activeValue || '请选择'}
            </button>
            <dropdown id="${options.vid}-dropdown"></dropdown>
          </div>
        ` : ''}
          <input type="text" class="form-control search-input" placeholder="${options.placeholder}">
          <div class="input-group-btn">
            <button type="button" class="btn search-button">
              <i class="anticon anticon-search"></i>
            </button>
          </div>
        </div>
        `;
        return vDom;
    }
    clickSearch(event) {
        event.stopPropagation();
        const keyword = this.$('.search-input').val(); 
        if (typeof this.options.onClick === 'function') this.options.onClick({
            key: this.options.activeKey,
            value: this.options.activeValue,
            keyword: keyword
        });
    }
}
Lego.components('search', Search);
export default Search;
