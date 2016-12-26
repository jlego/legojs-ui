// 界面框架入口
// import { Viewport } from 'lego-ui';
import Viewport from '../../../dist/Viewport';

HBY.create(Viewport, {
    el: 'body',
    scrollbar: {},
    logoUrl: 'dist/img/logo.png',
});
HBY.startApp();