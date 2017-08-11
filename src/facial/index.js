/**
 * 表情选择
 * ronghui Yu
 * 2017/1/17
 */
import './asset/index.scss';

class Facial extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .lego-facial-item a': 'clickItem',
                'click .face-remove': 'removeFace'
            },
            name: '',
            target: '', //插入目标节点
            targetType: 'textarea',
            icon: 'anticon anticon-smile-o',
            eventName: 'click', //['click'] or ['hover']
            dropdownOption: {},
            iconsUrl: Lego.config.faceIconUri || '', //图标地址
            itemClassPrefix: 'f0',  //节点样式前缀
            direction: 'bottom',
            value: [],
            data: Lego.UI.Util.faceTags
        };
        Object.assign(options, opts);
        options.value = Array.isArray(options.value) ? options.value : [options.value];
        super(options);
        this.cursorPos = null;
        this.cursorContainer = null;
        let that = this;
        $('body, .modal-body').click(function(){
            that.close();
        });
    }
    render() {
        let opts = this.options,
            dataLength = opts.data.length,
            widthPercent = 10 / (dataLength - 1) * 10;
        const vDom = hx`
        <div class="lego-facial">
            ${!opts.target ? hx`<input type="hidden" name="${val(opts.name)}" value="${opts.value.join(',')}"/>` : ''}
            ${!opts.target ? hx`<span id="face_${opts.vid}">${opts.value.join(',')}</span>` : ''}
            <i class="lego-facial-trigger ${opts.icon}"></i>
            <div class="dropdown-menu clearfix ${opts.direction ? ('drop' + opts.direction) : ''}">
                <ul>
                ${opts.data.map((item, index) => hx`
                    <li class="lego-facial-item ${opts.itemClassPrefix}${index}"><a href="javascript:void(0);"
                    title="${item}"><img src="${opts.iconsUrl}${index}.gif" /></a></li>
                `)}
                </ul>
            </div>
            ${!opts.target && opts.value.length ? hx`<a class="face-remove" href="javascript:;">删除</a>` : ''}
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let target = this.$el,
            that = this,
            opts = this.options,
            targetEl = opts.target instanceof $ ? opts.target : (opts.target ? $(opts.target) : this.$('input'));
        function handler(event){
            event.stopPropagation();
            that.$el.toggleClass('dropdown open');
            if(that.options.eventName == 'hover'){
                target.mouseleave(function(){
                    that.close();
                });
            }
        }
        if(opts.eventName == 'click'){
            const _eventName = 'click.dropdown_' + opts.vid;
            target.off(_eventName).on(_eventName, handler);
        }else{
            target[opts.eventName](handler);
        }
        targetEl.off('click keyup').on('click keyup', function(event){
            const el = $(event.currentTarget);
            that.getCursorPos(el);
        });
        if(opts.dropdownOption){
            this.$('.dropdown-menu > ul').css(opts.dropdownOption);
        }
    }
    removeFace(event){
        event.stopPropagation();
        this.options.value = [];
    }
    clickItem(event){
        event.stopPropagation();
        let target = $(event.currentTarget),
            opts = this.options,
            targetEl = opts.target instanceof $ ? opts.target : (opts.target ? $(opts.target) : this.$('input')),
            value = target.attr('title');
        if(opts.target){
            if(opts.targetType == 'div'){
                this.addComma(targetEl, value);
            }else{
                this.addOnPos(targetEl, value);
            }
        }else{
            opts.value = [value];
        }
        this.close();
    }
    show(event){
        this.$el.addClass('dropdown open');
    }
    close(event){
        this.$el.removeClass('dropdown open');
    }
    //取光标位置
    getCursorPos(el) {
        let sel, range,
        that = this;
        setTimeout(function() {
            if (window.getSelection) {
                sel = window.getSelection();
                range = sel.getRangeAt(0);
                that.cursorPos = range.startOffset;
                that.cursorContainer = range.startContainer;
            } else if (document.selection) {
                sel = document.selection;
                range = sel.createRange();
                range.moveStart('character', -1);
                that.cursorPos = range.text.length;
            } // Firefox support
            else if (el.selectionStart || el.selectionStart == '0') {
                that.cursorPos = el.selectionStart;
            }
        }, 0);
    }
    // areatext
    addOnPos(selector, myValue) {
        selector = selector[0];
        //IE support
        if (document.selection) {
            selector.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            sel.select();
        }

        //MOZILLA/NETSCAPE support
        else if (selector.selectionStart || selector.selectionStart == '0') {
            var startPos = selector.selectionStart;
            var endPos = selector.selectionEnd;
            // save scrollTop before insert
            var restoreTop = selector.scrollTop;
            selector.value = selector.value.substring(0, startPos) + myValue + selector.value.substring(endPos, selector.value.length);
            if (restoreTop > 0) {
                // restore previous scrollTop
                selector.scrollTop = restoreTop;
            }
            selector.focus();
            selector.selectionStart = startPos + myValue.length;
            selector.selectionEnd = startPos + myValue.length;
        } else {
            selector.value += myValue;
            selector.focus();
        }
    }
    // div插入内容
    addComma(selector, text) {
        let sel, range,
        el = selector[0],
        that = this;
        el.focus();
        if (!selector.html().length) this.cursorPos = 0;
        text = this.options.targetType == 'div' ? Lego.UI.Util.textToFace(text, this.options.iconsUrl + this.options.itemClassPrefix) : text;
        if (window.getSelection) {
            sel = window.getSelection();
            range = sel.getRangeAt(0);
            range.collapse(false);
            if (this.cursorPos) {
                range.collapse(true);
                range.setStart(this.cursorContainer, this.cursorPos);
                range.setEnd(this.cursorContainer, this.cursorPos);
            }
            let node = range.createContextualFragment(text);
            let oLastNode = node.lastChild;
            range.insertNode(node);
            if (oLastNode) {
                range.setEndAfter(oLastNode);
                range.setStartAfter(oLastNode);
            }
            this.cursorPos = range.startOffset;
            this.cursorContainer = range.startContainer;
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection) {
            sel = document.selection;
            range = sel.createRange();
            range.collapse(true);
            range.setEnd(el, pos);
            range.setStart(el, pos);
            // range.collapse(false);
            range.pasteHTML(text);
            range.select();
        }
    }
}
Lego.components('facial', Facial);
export default Facial;
