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
            selectedKey: '',  //选中的key
            selectedTitle: '',
            hasSelect: false,   //是否有下拉菜单
            onClick(){}, //点击的回调
            components: [{
                el: '#' + opts.vid + '-dropdown',
                trigger: '#' + opts.vid + '-select',
                data: opts.data,
                onChange(key){
                    const theView = Lego.getView(opts.el);
                    if(theView){
                        theView.options.selectedKey = key;
                        const model = opts.data.find(Item => Item.key == key);
                        if(model){
                            theView.options.selectedTitle = model.title;
                        }
                    }
                }
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const options = this.options || {};
        const vDom = hx `
        <div class="input-group search">
        ${options.hasSelect ? hx`
          <div class="input-group-btn dropdown" id="${options.vid}-select">
            <button type="button" class="btn btn-secondary dropdown-toggle">
              ${options.selectedTitle || '请选择'}
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
        const value = this.$('.search-input').val(); 
        if (typeof this.options.onClick === 'function') this.options.onClick({
            key: this.options.selectedKey,
            title: this.options.selectedTitle,
            value: value
        });
    }
}
Lego.components('search', Search);
export default Search;
