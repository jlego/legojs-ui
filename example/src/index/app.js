// 界面框架入口
import { Viewport } from 'lego-ui';

HBY.create({
    el: 'body',
    view: Viewport,
    data: {
    	logoUrl: 'dist/img/logo.png',
    }
});
HBY.startApp();