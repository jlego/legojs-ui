import IndexView from './view/index';
import homeView from './view/home';
import formView from './view/form';

class Router {
    constructor() {
        return {
            '/forms': [this.index.bind(this), this.tabs.bind(this)],
            '/forms/:tabs': [this.index.bind(this), this.tabs.bind(this)]
        };
    }
    index(ctx, next){
        this.viewObj = Lego.create(IndexView, {
            el: Lego.config.pageEl,
            scrollbar: {},
            currentTab: 0
        });
        next();
    }
    tabs(ctx, next){
        let tabs = ctx.params.tabs || 0;
        this.viewObj.options.currentTab = tabs;
        const appArray = [homeView, formView];
        Lego.create(appArray[tabs], { el: '#pageContent' });
    }
}
Lego.router(new Router());
