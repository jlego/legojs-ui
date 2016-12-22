import jQuery from 'jquery';
import Lego from 'lego-core';
// ===============加载UI库============
import '../../dist/common';
import '../../dist/legoui-all';
import '../../dist/css/pack.css';
// import 'lego-ui/dist/Common';
// import 'lego-ui/dist/css/pack.css';

Lego.init({
    alias: 'HBY', //框架实例别名
    version: '20161202', //版本号
    $: jQuery,
    pageEl: '#container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //根目录
});
Lego.startApp('index');