import IndexView from './view/index';
import homeView from './view/home';

class navsRouter {
    constructor() {
        return {
            '/navs': [this.index, this.tabs],
            '/navs/:tabs': [this.index, this.tabs]
        };
    }
    index(){
        this.viewObj = Lego.create(IndexView, {
            el: Lego.config.pageEl,
            scrollbar: {},
            currentTab: 0
        });
    }
    tabs(tabs = 0){
        this.viewObj.options.currentTab = tabs || 0;
        const appArray = [homeView];
        Lego.create(appArray[tabs], { el: '#pageContent' });
    }
}
Lego.router(new navsRouter());
