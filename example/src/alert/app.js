import IndexView from './view/index';
import homeView from './view/home';
import listView from './view/list';
import listData from './data/list';

let viewObj;
function index(){
    if(!viewObj){
        viewObj = HBY.create({
            view: IndexView,
            data: {
                currentTab: 0
            }
        });
    }
}
function tabs(tabs = 0){
    viewObj.data.currentTab = tabs || 0;
    const appArray = [homeView, listView];
    HBY.create({
        el: '#pageContent',
        view: appArray[tabs]
    });
}

HBY.router({
    '/alert': [index, tabs],
    '/alert/:tabs': [index, tabs],
    '/alert/list/ff' () {
        HBY.create({
            view: listView,
            data: {
                list: [
                    { first: 'home', last: '99999' },
                    { first: 'test', last: 'mmmmm' }
                ]
            },
            components: [{
                el: '#home',
                view: homeView,
                data: [
                    { first: 'home2', last: '999992' },
                    { first: 'test2', last: 'mmmmm2' }
                ]
            }, {
                el: '#test',
                view: homeView,
                data: [
                    { first: 'home3', last: '999993' },
                    { first: 'test3', last: 'mmmmm3' }
                ]
            }]
        });
    }
});
