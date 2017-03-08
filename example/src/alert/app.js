import IndexView from './view/index';
import homeView from './view/home';
import listView from './view/list';
import tableView from './view/table';

import listData from './data/list';

class alertRouter {
    constructor() {
        return {
            '/alert': [this.index, this.tabs],
            '/alert/:tabs': [this.index, this.tabs]
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
        const appArray = [
            homeView,
            listView,
            tableView
        ];
        Lego.create(appArray[tabs], { el: '#pageContent' });
    }
}
Lego.router(new alertRouter());
