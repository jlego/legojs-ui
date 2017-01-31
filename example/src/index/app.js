// 界面框架入口
import Viewport from './view/index';

HBY.create(Viewport, {
    el: 'body',
    scrollbar: {},
    logoUrl: 'dist/img/logo.png',
});

HBY.startApp();