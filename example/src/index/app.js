// 界面框架入口
import Viewport from './view/index';

Lego.create(Viewport, {
    el: 'body',
    scrollbar: {},
    logoUrl: 'dist/img/logo.png',
});

Lego.startApp();