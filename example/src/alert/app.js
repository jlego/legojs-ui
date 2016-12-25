import IndexView from './view/index';
import homeView from './view/home';
import listView from './view/list';
import listData from './data/list';

class alertRouter {
    constructor() {
        return {
            '/alert': [this.index, this.tabs],
            '/alert/:tabs': [this.index, this.tabs]
        };
    }
    index(){
        this.viewObj = HBY.create({
            view: IndexView,
            // scrollbar: {},
            data: {
                currentTab: 0
            }
        });
    }
    tabs(tabs = 0){
        this.viewObj.data.currentTab = tabs || 0;
        const appArray = [homeView, listView];
        HBY.create({
            el: '#pageContent',
            view: appArray[tabs]
        });
    }
}
HBY.router(new alertRouter());
