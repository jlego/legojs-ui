import jQuery from 'jquery';
// import Lego from "lego-core";
// import legoui from '../../dist/lego-ui';
import '../../dist/lego-ui';
// import '../../dist/legoui-1.css';
// import 'lego-ui';
import 'lego-ui/dist/legoui-1.css';
Lego.init({
    alias: 'HBY', //框架实例别名
    version: '20161202', //版本号
    $: jQuery,
    pageEl: '#container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //根目录
});
Lego.startApp('index');