import IndexView from './view/index';
import homeView from './view/home';

let viewObj;
function index(){
    if(!viewObj){
        viewObj = HBY.create({
            el: HBY.config.pageEl,
            view: IndexView,
            data: {
                currentTab: 0
            }
        });
    }
}
function tabs(tabs = 0){
    viewObj.data.currentTab = tabs || 0;
    const appArray = [homeView];
    HBY.create({
        el: '#pageContent',
        view: appArray[tabs]
    });
}

HBY.router({
    '/table': [index, tabs],
    '/table/:tabs': [index, tabs]
});
