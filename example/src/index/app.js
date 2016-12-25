// 界面框架入口
// import { Viewport } from 'lego-ui';
import Viewport from '../../../dist/Viewport';

HBY.create({
    el: 'body',
    view: Viewport,
    scrollbar: {},
    data: {
    	logoUrl: 'dist/img/logo.png',
    }
});
HBY.startApp();