import './asset/index.scss';
import '../vendor/bootstrap/modal';
import Alert from '../alert/index';

class Modal extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const typeArr = {
            success: 'anticon anticon-check-circle-o ',
            info: 'anticon anticon-info-circle-o',
            warning: 'anticon anticon-exclamation-circle-o',
            error: 'anticon anticon-cross-circle-o',
            alert: 'anticon anticon-question-circle-o'
        };
        const options = {
            events: {
                'click .modal-footer button.ok': 'clickOk',
                'click .modal-footer button.cancel': 'clickCancel',
                'click .close': 'close',
                'click .modal-dialog': function(event){event.stopPropagation()},
                'click': 'close'
            },
            msgType: '',
            title: '这是标题',
            size: '', //lg,md,sm
            type: 'modal', //类型 modal, dialog,
            position: '', //显示位置top,right,bottom,left,full
            animate: 'fadeIn',
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: '',  //内容
            footer: null,
            confirm: null,
            okText: '确定',
            cancelText: '取消',
            // onOk() {},
            // onCancel() {},
            onHidden() {},
            animates: {
                'fadeIn': 'fadeOut',
                'slideInRight': 'slideOutRight'
            }
        };
        Object.assign(options, opts);

        const modalEl = options.position ? '#lego-submodal' : '#lego-modal';

        if (typeArr[options.msgType] && typeof options.content == 'string') {
            const alertObj = Lego.create(Alert, {
                type: options.msgType,
                closable: false,
                message: options.content,
                description: true
            });
            options.content = alertObj.render();
        }

        if(!options.el) options.el = modalEl;
        if(options.position) options.animate = 'slideInRight';
        super(options);

        const that = this;
        this.$el.modal({
            backdrop: options.position ? !options.backdrop : options.backdrop,
            keyboard: options.keyboard,
            show: true
        });
        this.$el.on('hidden.bs.modal', function (e) {
            const container = options.position ?
                '<submodal id="lego-submodal"></submodal>' : '<modal id="lego-modal"></modal>';
            that.$el.replaceWith(container);
            if(typeof options.onHidden === 'function') options.onHidden();
        });
        if (options.animate) {
            this.$el.data('animate', options.animate);
            Lego.UI.Util.animateCss(this.$el, 'animated ' + options.animate);
        }
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="modal ${options.position == 'right' ? 'right-modal' : ''} ${options.msgType ? 'dialog-modal' : ''}
        ${options.size ? ('modal-size-' + options.size) : ''}" id="${options.el.replace(/#/, '')}">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              ${options.closable ? hx`<button type="button" class="close"><span class="anticon anticon-close"></span></button>` : ''}
                <h4 class="modal-title">${options.title}</h4>
              </div>
              <div class="modal-body ${!options.msgType ? 'scrollbar' : ''}">
                ${options.content}
              </div>
              <div class="modal-footer">
              ${options.footer ? options.footer : hx`<div><button type="button" class="btn btn-secondary cancel" data-dismiss="modal">${options.cancelText}</button>
                <button type="button" class="btn btn-primary ok">${options.okText}</button></div>`}
              </div>
            </div>
          </div>
        </div>
        `;
        return vDom;
    }
    // 关闭窗口
    close() {
        const animateName = this.options.animate,
            that = this;
        if (animateName) {
            Lego.UI.Util.animateCss(that.$el, 'animated ' + that.options.animates[animateName], () => {
                that.$el.modal('hide');
            });
            $('.modal-backdrop').fadeOut();
        } else {
            this.$el.modal('hide');
        }
    }
    _showDialog(){
        const that = this;
        Lego.create(Modal, {
            msgType: this.options.confirm.msgType || 'warning',
            content: this.options.confirm.content || '',
            backdrop: false,
            onOk(e) {
                that.close();
                if(Lego.getView($('#lego-modal'))) Lego.getView($('#lego-modal')).close();
            }
        });
    }
    _onConfirm(funName) {
        if (this.options.confirm && this.options[funName]) {
            this._showDialog();
        }else{
            this.close();
        }
        if (typeof this.options[funName] === 'function') this.options[funName](event);
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
Lego.components('modal', Modal);
export default Modal;