/**
 * 回复框
 * ronghui Yu
 * 2017/1/17
 */
import './asset/index.scss';
import Facial from '../facial/index';
import Popover from '../popover/index';
import Upload from '../upload/index';
import Dropdownbtn from '../dropdownbtn/index';

class Reply extends Lego.UI.Baseview {
        constructor(opts = {}) {
            const options = {
                events: {
                    'focus .lego-reply-content': 'onFocus',
                    'click .lego-reply-submit': 'submit',
                    'click .lego-reply-annex': 'showUpload',
                    'click .popover-title i': 'showUpload',
                    'keydown .lego-reply-content': '_enterSearch'
                },
                // inputType: 'textarea', //输入框类型  textarea或div
                placeholder: '请输入回复内容', //
                contentHeight: 70, //输入框高度
                showFacial: true, //显示表情
                showUpload: true, //显示上传文件
                filterHtml: true,   //过滤html
                uploadToken: null, //上传文件token数据源
                iconsUrl: '',
                submitText: '回复', //
                submitType: 'primary',
                maxTextLength: 500, //回复内容最大长度
                onSubmit() {}, //事件回调
                onUploadComplete() {},
                dropdownbtn: false, //下拉菜单
                components: []
            };
            Object.assign(options, opts);
            if (options.showFacial) {
                options.components.push({
                    el: '#facial-' + options.vid,
                    target: '#content-' + options.vid,
                    targetType: 'textarea',
                    iconsUrl: options.iconsUrl
                });
            }
            if (options.dropdownbtn) {
                options.components.push(Object.assign(typeof options.dropdownbtn == 'object' ? options.dropdownbtn : {}, {
                    el: '#dropdownbtn-' + options.vid,
                    text: options.submitText,
                    btnType: options.submitType,
                    className: 'float-right',
                    onClick(self, item, event) {
                        let parentView = self.options.context;
                        if (parentView) {
                            parentView.submit();
                        }
                    }
                }));
            }
            super(options);
            this.uploadView = null;
            this.placeholder = '<span class="lego-reply-ph">' + this.options.placeholder + '</span>';
        }
        render() {
                const options = this.options;
                const vDom = hx `
        <div class="lego-reply">
            <textarea placeholder="${val(options.placeholder)}" class="form-control lego-reply-content" id="content-${options.vid}"></textarea>
            ${options.dropdownbtn ? hx`
            <dropdownbtn id="dropdownbtn-${options.vid}"></dropdownbtn>
            ` : hx`
            <button type="button" class="btn btn-${options.submitType} lego-reply-submit">${val(options.submitText)}</button>
            `}
            <div class="lego-reply-toolbar">
                ${options.showFacial ? hx`<facial id="facial-${options.vid}"></facial>` : ''}
                ${options.showUpload ? hx`<div id="annex-${options.vid}" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>` : ''}
            </div>
            <div class="popover popover-bottom" style="display:none;">
                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>
                <div class="popover-content"><upload id="upload-${options.vid}"></upload></div>
            </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        this.$('.lego-reply-content').attr('contenteditable', 'true').height(this.options.contentHeight);
    }
    onFocus(event){
        const target = $(event.currentTarget);
        if(target.find('.lego-reply-ph').length) target.html('');
    }
    showUpload(event){
        this.$('.popover').toggleClass('show');
        let options = this.options,
            that = this;
        if(options.showUpload && this.$('.popover').hasClass('show')){
            if(typeof options.uploadToken == 'string'){
                this.uploadView = Lego.create(Upload, {
                    el: '#upload-' + options.vid,
                    token: options.uploadToken,
                    context: this,
                    onComplete: options.onUploadComplete
                });
            }
            if(typeof options.uploadToken == 'object'){
                this.uploadView = Lego.create(Upload, {
                    el: '#upload-' + options.vid,
                    dataSource: options.uploadToken,
                    context: that,
                    onComplete: options.onUploadComplete
                });
            }
        }
    }
    _enterSearch(event) {
        const target = $(event.currentTarget),
            options = this.options;
        if (event.which === 13) {
            if (!event.ctrlKey) {
                this.submit(event);
            }
            if (event.ctrlKey) {
                Lego.UI.Util.insertText(target, Lego.UI.Util.checkBrowser().mozilla ? '<br>' : '<br><br>');
            }
        }
    }
    // 上传的值
    getUploadIds(){
        if(this.uploadView) return this.uploadView.getValue();
        return [];
    }
    // 提交回复内容
    submit(event){
        if(event) event.stopPropagation();
        const contentEl = this.$('.lego-reply-content');
        if(contentEl.val().length > this.options.maxTextLength) {
            Lego.UI.message('warning', '提交内容不能大于500个字符');
            return;
        }
        let contentHtml = contentEl.val();
        contentHtml = this.options.filterHtml ? contentHtml.replace(/<[^>]+>/g,"") : contentHtml;
        contentHtml = $.trim(contentHtml);
        if(!contentHtml.length) {
            Lego.UI.message('warning', '提交内容不能为空');
            return;
        }
        contentEl.val('');
        contentHtml = contentHtml == this.placeholder ? '' : contentHtml;
        let uploadIds = Array.from(this.getUploadIds());
        if(this.uploadView) this.uploadView.reset();
        this.$('.popover').removeClass('show');
        if(typeof this.options.onSubmit == 'function') this.options.onSubmit(this, contentHtml, uploadIds);
    }
}
Lego.components('reply', Reply);
export default Reply;
