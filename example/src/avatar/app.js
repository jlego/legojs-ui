import IndexView from './view/index';
import homeView from './view/home';

class Router {
    constructor() {
        return {
            '/avatar': [this.index, this.tabs],
            '/avatar/:tabs': [this.index, this.tabs]
        };
    }
    index(){
        this.viewObj = HBY.create(IndexView, {
            el: HBY.config.pageEl,
            scrollbar: {},
            currentTab: 0
        });
    }
    tabs(tabs = 0){
        this.viewObj.options.currentTab = tabs || 0;
        const appArray = [homeView];
        HBY.create(appArray[tabs], { el: '#pageContent' });
    }
}
HBY.router(new Router());
