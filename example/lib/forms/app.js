var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import IndexView from './view/index';
import homeView from './view/home';
import formView from './view/form';

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        return {
            '/forms': [this.index.bind(this), this.tabs.bind(this)],
            '/forms/:tabs': [this.index.bind(this), this.tabs.bind(this)]
        };
    }

    _createClass(Router, [{
        key: 'index',
        value: function index(ctx, next) {
            this.viewObj = Lego.create(IndexView, {
                el: Lego.config.pageEl,
                scrollbar: {},
                currentTab: 0
            });
            next();
        }
    }, {
        key: 'tabs',
        value: function tabs(ctx, next) {
            var tabs = ctx.params.tabs || 0;
            this.viewObj.options.currentTab = tabs;
            var appArray = [homeView, formView];
            Lego.create(appArray[tabs], { el: '#pageContent' });
        }
    }]);

    return Router;
}();

Lego.router(new Router());