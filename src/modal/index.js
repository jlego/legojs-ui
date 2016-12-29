import './asset/index.scss';
import '../vendor/bootstrap/modal';

class Modal extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'click .modal-footer button.ok': 'clickOk',
                'click .modal-footer button.cancel': 'clickCancel',
                'click .close': 'close'
            },
            title: 'modal title',
            size: '', //lg,md,sm
            type: 'modal', //类型 modal, dialog, confirm
            position: '', //显示位置top,right,bottom,left,full
            animates: 'fade',
            closable: true,
            showHeader: true,
            showFooter: true,
            // visible: false,  //是否显示
            backdrop: true,
            keyboard: true,
            content: '',  //内容
            footer: null,
            okText: '关闭',
            cancelText: '取消',
            onOk() {},
            onCancel() {},
            onHidden() {}
            // style: {}
        };
        Object.assign(options, opts);
        const containerEl = options.position ? '#lego-submodal' : '#lego-modal';
        const container = options.position ? '<submodal id="lego-submodal"></submodal>' : '<modal id="lego-modal"></modal>';
        if(!options.el) options.el = containerEl;
        super(options);
        const that = this;
        this._renderStyle(options);
        this.options.containerEl = containerEl;
        $(containerEl).modal({
            backdrop: options.position ? !options.backdrop : options.backdrop,
            keyboard: options.keyboard,
            show: true
        });
        $(containerEl).on('hidden.bs.modal', function (e) {
            that.remove();
            $(Lego.config.pageEl).after(container);
            console.warn('关闭了');
            if(typeof options.onHidden === 'function') options.onHidden();
        });
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
        this.options.visible = true;
        this.$('.modal-dialog').css(style);
    }
    render() {
        const options = this.options || {};
        const vDom = hx`
        <div class="modal ${options.position == 'right' ? 'right-modal' : ''} ${options.size ? ('bs-example-modal-' + options.size) : ''} 
        ${options.animates ? options.animates : ''} ${!!options.visible ? 'in' : 'hide'}" id="${options.el.replace(/#/, '')}">
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
    show(event){
        this.options.visible = true;
    }
    close(event){
        this.options.visible = false;
        console.warn('ffffffff', this.options.visible);
        this.refresh();
        // const that = this;
        // Lego.setTimer('model' + this.options.vid, setInterval(() => {
        //     that.remove();
        // }, 1000);
    }
    clickOk(event) {
        event.stopPropagation();
        this.close();
        if (typeof this.options.onOk === 'function') this.options.onOk(event);
    }
    clickCancel(event) {
        event.stopPropagation();
        this.close();
        if (typeof this.options.onCancel === 'function') this.options.onCancel(event);
    }
}
export default Modal;
