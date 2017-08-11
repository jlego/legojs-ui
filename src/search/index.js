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
                'keyup .lego-search-input': '_enterSearch'
            },
            placeholder: '请输入关键字',
            name: '',
            size: '',
            keyword: '',
            activeKey: '',  //选中的key
            activeValue: '',
            autoComplete: false,    //是否显示自动完成功能 {dataSource: '', maxCount: 5}
            showSelect: false,   //是否有下拉菜单
            onKeyup(){},
            onSearch(){}, //点击的回调
            onChange(){}
        };
        Object.assign(options, opts);
        super(options);
    }
    components(){
        let opts = this.options,
            that = this;
        this.showDropdown = false;
        if(typeof opts.value == 'string'){
            opts.keyword = opts.value;
            opts.value = null;
        }
        this.addCom({
            el: '#dropdown-' + opts.vid,
            container: '#select-' + opts.vid,
            data: opts.data,
            onChange(self, model){
                this.context.options.activeKey = model.key;
                this.context.options.activeValue = model.value;
            }
        });
        if(opts.autoComplete){
            let autoCompleteOpts = {
                el: '#autocomplete_' + opts.vid,
                container: this.$el,
                disabled: true,
                maxCount: opts.autoComplete.maxCount || 5,
                style: {
                    width: '100%'
                },
                onChange(self, result){
                    opts.keyword = opts.value = result.value;
                    result.keyword = result.value;
                    if (typeof opts.onSearch === 'function') opts.onSearch(this, result, self);
                },
                renderAfter(){
                    if(opts.autoComplete && this.options.data){
                        if(that.showDropdown && this.options.data.length){
                            this.show();
                        }else {
                            this.close();
                        }
                    }
                }
            };
            if(opts.autoComplete.data) autoCompleteOpts.data = opts.autoComplete.data;
            if(opts.autoComplete.dataSource) autoCompleteOpts.dataSource = opts.autoComplete.dataSource;
            autoCompleteOpts.stopFetch = true;
            this.addCom(autoCompleteOpts);
        }
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="lego-search ${opts.size ? ('input-group-' + opts.size) : ''}" style="${opts.autoComplete ? 'position: relative;' : ''}">
            <div class="input-group">
                ${opts.showSelect ? hx`
              <div class="input-group-btn dropdown" id="select-${opts.vid}">
                <button type="button" class="btn btn-secondary dropdown-toggle">
                  ${opts.activeValue || '请选择'}
                </button>
                <dropdown id="dropdown-${opts.vid}"></dropdown>
              </div>
              ` : ''}
              <input type="text" class="form-control lego-search-input" id="searchInput_${opts.vid}" placeholder="${opts.placeholder}" name="${opts.name}" value="${val(opts.keyword)}">
              <div class="input-group-btn">
                <button type="button" class="btn lego-search-button">
                  <i class="anticon anticon-search"></i>
                </button>
              </div>
          </div>
          ${opts.autoComplete ? hx`<dropdown id="autocomplete_${opts.vid}"></dropdown>` : ''}
        </div>
        `;
        return vDom;
    }
    _enterSearch(event) {
        let opts = this.options,
            view = null,
            result = this.getValue(event);
        if (event.keyCode == 13) {
            this.onSearch(event);
        }else{
            if(opts.autoComplete){
                view = Lego.getView('#autocomplete_' + opts.vid);
                if(!opts.autoComplete.dataSource && opts.autoComplete.data){
                    if(result.keyword){
                        view.options.data = opts.autoComplete.data.filter(item => {
                            return item.value.indexOf(value.keyword) > -1;
                        });
                        this.showDropdown = !!view.options.data.length;
                        view.refresh();
                    }else{
                        view.close();
                        return;
                    }
                }else{
                    this.showDropdown = !!result.keyword;
                    if(!this.showDropdown){
                        view.close();
                        return;
                    }
                }
            }
            if (typeof opts.onKeyup === 'function') opts.onKeyup(this, result, view || event);
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
        if (typeof this.options.onChange === 'function') this.options.onChange(this, this.getValue(event), event);
    }
    onSearch(event) {
        if(event) event.stopPropagation();
        if (typeof this.options.onSearch === 'function') this.options.onSearch(this, this.getValue(event), event);
    }
}
Lego.components('search', Search);
export default Search;
