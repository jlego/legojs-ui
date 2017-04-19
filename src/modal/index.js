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
            footer: '',
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
        const options = this.options || {};
        const vDom = hx`
        <div class="modal ${options.type == 'layer' ? 'right-modal' : ''}
        ${options.msgType ? 'dialog-modal' : ''}
        ${options.size ? ('modal-size-' + options.size) : ''}
        ${options.isMiddle ? 'middle' : ''}" id="${options.el.replace(/#/, '')}">
          <div class="modal-dialog">
            <div class="modal-content">
              ${options.showHeader ? hx`<div class="modal-header">
              ${options.closable ? hx`<button type="button" class="close"><span class="anticon anticon-close"></span></button>` : ''}
                <h5 class="modal-title">${options.title}</h5>
              </div>` : ''}
              <div class="modal-body ${!options.msgType && options.scrollAble ? 'scrollbar' : ''}" style="${!options.showHeader && options.type == 'layer' ? 'top:0;' : ''}
              ${!options.showFooter && options.type == 'layer' ? 'bottom:0;' : ''}">
                ${options.content}
              </div>
              ${options.showFooter ? hx`<div class="modal-footer">
              ${options.footer ? options.footer : hx`<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">${options.cancelText}</button>
                <button type="button" class="btn btn-primary ok">${options.okText}</button></div>`}
              </div>` : ''}
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        const that = this,
            options = this.options;
        this.$el.modal({
            backdrop: options.type !== 'layer' ? options.backdrop : false,
            keyboard: options.keyboard,
            show: true
        });
        if(options.width) this.$('.modal-dialog').width(options.width);
        if(options.height) this.$('.modal-body').height(options.height);
        this.$el.on('hidden.bs.modal', function (e) {
            that.$el.remove();
            if(typeof options.onClose === 'function') options.onClose(that);
        });
        if (options.animateIn) Lego.UI.Util.animateCss(this.$el, 'animated ' + options.animateIn);
    }
    // 关闭窗口
    close() {
        const that = this;
        if (this.options.animateOut) {
            Lego.UI.Util.animateCss(that.$el, 'animated ' + that.options.animateOut, () => {
                that.$el.modal('hide');
            });
            if(this.options.backdrop) $('.modal-backdrop').fadeOut();
        } else {
            this.$el.modal('hide');
        }
    }
    clickBackdrop(event){
        event.stopPropagation();
        this._onConfirm('onCancel');
    }
    _showDialog(){
        const that = this;
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
    _onConfirm(funName) {
        if (this.options.confirm && this.options[funName]) {
            this._showDialog();
        }else{
            if(funName !== 'onOk') this.close();
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
