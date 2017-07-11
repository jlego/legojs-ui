import './asset/index.scss';
import '../vendor/bootstrap/modal';
import Alert from '../alert/index';

class Modal extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const typeArr = {
            success: 'anticon anticon-check-circle-o',
            info: 'anticon anticon-info-circle-o',
            warning: 'anticon anticon-exclamation-circle-o',
            error: 'anticon anticon-cross-circle-o',
            alert: 'anticon anticon-question-circle-o'
        };
        const options = {
            events: {
                'click .modal-footer button.ok': 'clickOk',
                'click .modal-footer button.cancel': 'clickCancel',
                'click .close': 'clickCancel',
                'click .modal-dialog': function(event){event.stopPropagation()},
                'click': 'clickBackdrop',
            },
            msgType: '',    //有此属性的是dialog
            title: '提示',
            size: '', //lg,md,sm
            type: 'modal', //类型 layer, modal, dialog
            animateIn: Lego.config.animateAble ? 'fadeIn' : '',
            animateOut: Lego.config.animateAble ? 'fadeOut' : '',
            width: '',
            isMiddle: false,   //垂直居中
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: '',  //内容
            footer: '',  //string 或function
            confirm: null,
            scrollbar: {},
            scrollAble: true,
            okText: '确定',
            cancelText: '取消',
            // onOk() {},
            // onCancel() {},
            onClose() {}
        };
        Object.assign(options, opts);
        if(options.msgType) options.type = 'dialog';
        // 对话框类型
        if (typeArr[options.msgType] && typeof options.content == 'string') {
            const alertObj = Lego.create(Alert, {
                type: options.msgType,
                closable: false,
                message: options.content,
                description: true
            });
            options.content = alertObj.render();
        }
        if(!options.el){
            const modalId = 'lego-' + options.type + '-' + options.vid;
            $('body').append('<' + options.type + ' id="' + modalId + '"></' + options.type + '>');
            options.el = '#' + modalId;
        }
        if(options.type == 'layer' && Lego.config.animateAble){
            options.animateIn = 'slideInRight';
            options.animateOut = 'slideOutRight';
        }
        super(options);
    }
    render() {
        let opts = this.options;
        let vDom = hx`
        <div class="modal ${opts.type == 'layer' ? 'right-modal' : ''}
        ${opts.msgType ? 'dialog-modal' : ''}
        ${opts.size ? ('modal-size-' + opts.size) : ''}
        ${opts.isMiddle ? 'middle' : ''}" id="${opts.el.replace(/#/, '')}">
          <div class="modal-dialog">
            <div class="modal-content">
              ${opts.showHeader ? hx`<div class="modal-header">
              ${opts.closable ? hx`<button type="button" class="close"><span class="anticon anticon-close"></span></button>` : ''}
                <h5 class="modal-title">${opts.title}</h5>
              </div>` : ''}
              <div class="modal-body ${!opts.msgType && opts.scrollAble ? 'scrollbar' : ''}" style="${!opts.showHeader && opts.type == 'layer' ? 'top:0;' : ''}
              ${!opts.showFooter && opts.type == 'layer' ? 'bottom:0;' : ''}">
                ${val(opts.content)}
              </div>
              ${opts.showFooter ? hx`<div class="modal-footer">
              ${opts.footer ? val(opts.footer) : hx`<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">${opts.cancelText}</button>
                <button type="button" class="btn btn-primary ok">${opts.okText}</button></div>`}
              </div>` : ''}
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        let that = this,
            opts = this.options;
        this.$el.modal({
            backdrop: opts.type !== 'layer' ? opts.backdrop : false,
            keyboard: opts.keyboard,
            show: true
        });
        if(opts.width) this.$('.modal-dialog').width(opts.width);
        if(opts.height) this.$('.modal-body').height(opts.height);
        this.$el.on('hidden.bs.modal', function (e) {
            that.$el.remove();
            if(typeof opts.onClose === 'function') opts.onClose(that);
        });
        if (opts.animateIn) Lego.UI.Util.animateCss(this.$el, opts.animateIn);
    }
    // 关闭窗口
    close() {
        let that = this,
            opts = this.options,
            ieV = Lego.UI.Util.checkBrowser().ieversion;
        if (opts.animateOut) {
            if(ieV <= 9 && ieV > 0){
                this.$el.remove();
                if(typeof opts.onClose === 'function') opts.onClose(that);
            }else{
                Lego.UI.Util.animateCss(that.$el, opts.animateOut, () => {
                    that.$el.modal('hide');
                });
            }
        } else {
            if(ieV <= 9 && ieV > 0){
                this.$el.remove();
                if(typeof opts.onClose === 'function') opts.onClose(that);
            }else{
                this.$el.modal('hide');
            }
        }
        if(opts.backdrop) $('.modal-backdrop').fadeOut();
    }
    clickBackdrop(event){
        event.stopPropagation();
        this._onConfirm('onCancel', true);
    }
    _showDialog(){
        let that = this;
        Lego.create(Modal, {
            msgType: this.options.confirm.msgType || 'warning',
            content: this.options.confirm.content || '',
            backdrop: this.options.confirm.backdrop,
            onOk(self) {
                that.close();
                self.close();
            }
        });
    }
    _onConfirm(funName, isBackdrop) {
        if (this.options.confirm && this.options[funName]) {
            this._showDialog();
        }else{
            if(isBackdrop){
                let closeAble = true;
                if(this.options.backdrop == 'static') closeAble = false;
                if(funName !== 'onOk' && closeAble) this.close();
            }else{
                if(funName !== 'onOk') this.close();
            }
        }
        if (typeof this.options[funName] === 'function') this.options[funName](this);
    }
    clickOk(event) {
        event.stopPropagation();
        this._onConfirm('onOk');
    }
    clickCancel(event) {
        event.stopPropagation();
        this._onConfirm('onCancel');
    }
}
const theModal = function(opts = {}, vid){
    if(typeof opts == 'string'){
        let type = opts.indexOf('.') > 0 ? opts.split('.')[1] : 'layer';
        let view = Lego.getView(`#lego-${type}-${vid}`);
        if(view) view.close();
    }else{
        Lego.create(Modal, opts);
    }
};
Lego.components('modal', theModal);
export default theModal;
