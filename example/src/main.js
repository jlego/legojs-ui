import Lego from 'lego-core';
import "../ux/util/util";
// import 'lego-ui';
// import 'lego-ui/dist/css/legoui.css';
import '../../dist/legoui';
import '../../dist/css/legoui.css';

import showdown from 'showdown';
window.markdown = new showdown.Converter();
markdown.setFlavor('github');

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css';
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
window.hljs = hljs;

// 设置全局参数，初始化应用
Lego.setting({
    alias: 'Lego', //框架实例别名
    spinning: true,
    version:  (new Date()).getTime(), //版本号'2016' ||
    pageEl: '#page-container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: './dist/', //系统根目录
    routeRoot: '/example/#',  //路由根地址
    serviceUri: '',		//后台根地址
    faceIconUri: './dist/img/face_icons/f0', //表情图标地址
    downloadUri: window.location.protocol + '//dn-openwinbons.qbox.me/', //七牛文件下载地址
    saveUri: '/upload/complete',
    avatarUri: 'http://192.168.2.165:8080/upload', //头像地址
});
Lego.startApp('index');
