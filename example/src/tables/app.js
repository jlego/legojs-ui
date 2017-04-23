import IndexView from './view/index';
import homeView from './view/home';

class Router {
    constructor() {
        return {
            '/tables': [this.index.bind(this), this.tabs.bind(this)],
            '/tables/:tabs': [this.index.bind(this), this.tabs.bind(this)]
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
        const appArray = [homeView];
        Lego.create(appArray[tabs], { el: '#pageContent' });
    }
}
Lego.router(new Router());
