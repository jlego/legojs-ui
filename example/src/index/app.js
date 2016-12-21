// 界面框架入口
// import { Viewport } from '../../../dist/lego-ui';
// console.warn(Viewport);
// HBY.UI.viewport
HBY.create({
    el: 'body',
    view: HBY.UI.Viewport,
    data: {
    	logoUrl: 'dist/img/logo.png',
    }
});
HBY.startApp();