// 界面框架入口
import mainView from './main';
import menuView from './menu';

HBY.create({
    el: 'body',
    view: mainView,
    components: [{
    	el: '#sidebar',
    	view: menuView
    }]
});
HBY.startApp();