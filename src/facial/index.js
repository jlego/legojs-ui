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
                'click .lego-facial-item a': 'clickItem'
            },
            target: '', //插入目标节点
            targetType: 'div',
            icon: 'anticon anticon-smile-o',
            text: '',
            eventName: 'hover', //['click'] or ['hover']
            iconsUrl: '', //图标地址
            itemClassPrefix: 'f0',  //节点样式前缀
            direction: 'top',
            data: Lego.UI.Util.faceTags
        };
        Object.assign(options, opts);
        super(options);
        this.cursorPos = null;
        this.cursorContainer = null;
    }
    render() {
        const options = this.options,
            dataLength = options.data.length,
            widthPercent = 10 / (dataLength - 1) * 10;
        const vDom = hx`
        <div class="lego-facial">
            ${options.text ? hx`<i class="lego-facial-trigger">${val(options.text)}</i>` : hx`<i class="lego-facial-trigger ${options.icon}"></i>`}
            <div class="dropdown-menu clearfix ${options.direction ? ('drop' + options.direction) : ''}">
                <ul>
                ${options.data.map((item, index) => hx`
                    <li class="lego-facial-item ${options.itemClassPrefix}${index}"><a href="javascript:void(0);"
                    title="${item}"><img src="${options.iconsUrl || Lego.config.faceIconUri}${index}.gif" /></a></li>
                `)}
                </ul>
            </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        const target = this.$el,
            that = this,
            targetEl = this.options.target instanceof $ ? this.options.target : $(this.options.target);
        function handler(event){
            $('body, .modal-body').trigger('click');
            event.stopPropagation();
            const directionResp = Lego.UI.Util.getDirection($('body'), that.$el);
            that.options.direction = directionResp._y || 'bottom';
            that.show();
            if(that.options.eventName == 'hover'){
                target.mouseleave(function(){
                    that.close();
                });
            }
        }
        if(this.options.eventName == 'click'){
            const _eventName = 'click.dropdown_' + this.options.vid;
            $('body, .modal-body').off(_eventName).on(_eventName, function(){
                that.close();
            });
            target.off(_eventName).on(_eventName, handler);
        }else{
            target[this.options.eventName](handler);
        }
        targetEl.off('click keyup').on('click keyup', function(event){
            const el = $(event.currentTarget);
            that.getCursorPos(el);
        });
    }
    clickItem(event){
        const target = $(event.currentTarget),
            targetEl = this.options.target instanceof $ ? this.options.target : $(this.options.target);
        if(this.options.targetType == 'div'){
            this.addComma(targetEl, target.attr('title'));
        }else{
            this.addOnPos(targetEl, target.attr('title'));
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
