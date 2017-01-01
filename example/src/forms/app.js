import IndexView from './view/index';
import homeView from './view/home';

class navsRouter {
    constructor() {
        return {
            '/forms': [this.index, this.tabs],
            '/forms/:tabs': [this.index, this.tabs]
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
HBY.router(new navsRouter());
