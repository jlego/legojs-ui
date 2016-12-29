import './asset/index.scss';
import '../vendor/bootstrap/modal';

class Modal extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .modal-footer button.ok': 'clickOk',
                'click .modal-footer button.cancel': 'clickCancel',
                'click .close': 'close',
                'click .modal-dialog': function(event){event.stopPropagation()},
                'click': 'close'
            },
            title: 'modal title',
            size: '', //lg,md,sm
            type: 'modal', //类型 modal, dialog, confirm
            position: '', //显示位置top,right,bottom,left,full
            animate: 'fade',
            closable: true,
            showHeader: true,
            showFooter: true,
            backdrop: true,
            keyboard: true,
            content: '',  //内容
            footer: null,
            confirm: false,
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
        const container = options.position ? 
            '<submodal id="lego-submodal"></submodal>' : 
            '<modal id="lego-modal"></modal>';
        if(!options.el) options.el = modalEl;
        if(options.position) options.animate = 'slideInRight';
        super(options);

        const that = this;
        this._renderStyle(options);
        this.$el.modal({
            backdrop: options.position ? !options.backdrop : options.backdrop,
            keyboard: options.keyboard,
            show: true
        });
        this.$el.on('hidden.bs.modal', function (e) {
            that.remove();
            $(Lego.config.pageEl).after(container);
            console.warn('关闭了');
            if(typeof options.onHidden === 'function') options.onHidden();
        });
        if (options.animate) {
            let animateName = options.animate ? options.animate : 'fadeIn';
            this.$el.data('animate', animateName);
            Lego.UI.Util.animateCss(this.$el, 'animated ' + animateName);
        }
    }
    _renderStyle(options){
        let style = {};
        if (options.position == 'right') {
            const headerHeight = $('header').height();
            style = {
                position: 'absolute',
                width: options.width || 700,
                padding: headerHeight + 'px 0 0'
            };
        } else if ((options.width && options.height) || !options.position) {
            style = {
                width: options.width || undefined,
                height: options.height || undefined,
                position: 'absolute',
                marginTop: -(options.height || 200) / 2,
                marginLeft: -(options.width || (options.size == 'sm' ? 300 : (options.size == 'lg' ? 900 : 600))) / 2,
                top: '45%',
                left: '50%',
            };
        }
        this.$('.modal-dialog').css(style);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="modal ${options.position == 'right' ? 'right-modal' : ''} ${options.size ? ('bs-example-modal-' + options.size) : ''}" id="${options.el.replace(/#/, '')}">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              ${options.closable ? hx`<button type="button" class="close"><span class="anticon anticon-close"></span></button>` : ''}
                <h4 class="modal-title">${options.title}</h4>
              </div>
              <div class="modal-body ${options.type == 'modal' ? 'scrollbar' : ''}" style="${options.type == 'modal' ? 'position:\"absolute\"' : ''}">
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
        Lego.UI.dialog({
            msgType: this.options.msgType || 'warning',
            content: this.options.content || '你确定退出?',
            onOk(e) {
                that.close();
                Lego.getView($('#lego-modal')).close();
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
export default Modal;
