import IndexView from './view/index';
import homeView from './view/home';

let viewObj;
function index(){
    if(!viewObj){
        viewObj = Lego.create({
            el: Lego.config.pageEl,
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
    Lego.create({
        el: '#pageContent',
        view: appArray[tabs]
    });
}

Lego.router({
    '/table': [index, tabs],
    '/table/:tabs': [index, tabs]
});
