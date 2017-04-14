(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="./";return __webpack_require__(0)})({0:function(module,exports,__webpack_require__){"use strict";var _index=__webpack_require__(17);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Lego.create(_index2.default,{el:"body",scrollbar:{},logoUrl:"dist/img/logo.png"});Lego.startApp()},17:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <link rel="stylesheet" type="text/css" href="dist/index/app.css" />\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="','" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">Lego</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        '],['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <link rel="stylesheet" type="text/css" href="dist/index/app.css" />\n            <menu id="sidebar"></menu>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="','" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-erweima"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="icon iconfont icon-contacts"></i></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="icon iconfont icon-disabled"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="container-fluid" id="container">\n                        <div id="page-container"></div>\n                    </div>\n                    <layer id="lego-layer"></layer>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">Lego</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ']);__webpack_require__(18);var _menu=__webpack_require__(19);var _menu2=_interopRequireDefault(_menu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}Lego.components("menu",_menu2.default);var Viewport=function(_Lego$UI$Baseview){_inherits(Viewport,_Lego$UI$Baseview);function Viewport(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Viewport);var options={logoUrl:"asset/img/logo.png",components:[{el:"#sidebar"}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(Viewport.__proto__||Object.getPrototypeOf(Viewport)).call(this,options))}_createClass(Viewport,[{key:"render",value:function render(){var tmpl=hx(_templateObject,this.options.logoUrl);return tmpl}}]);return Viewport}(Lego.UI.Baseview);exports.default=Viewport},18:function(module,exports){},19:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['<span><i class="icon iconfont ','"></i> ',"</span>"],['<span><i class="icon iconfont ','"></i> ',"</span>"]),_templateObject2=_taggedTemplateLiteral(['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        '],['\n        <div class="sidebar sidebar-left" id="sidebar">\n            <div class="sidebar-container scrollbar">\n                <nav>\n                    <navs id="menu"></navs>\n                </nav>\n            </div>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Menu=function(_Lego$UI$Baseview){_inherits(Menu,_Lego$UI$Baseview);function Menu(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Menu);var data=[{key:"nav1",value:"基本",icon:"lego-icon-home",open:true,children:[{key:"nav_buttons",value:"Button 按钮"},{key:"nav1_2",value:"Icon 图标"}]},{key:"nav2",value:"导航",icon:"lego-icon-account-info",open:true,children:[{key:"nav_dropdown",value:"Dropdown 下拉菜单"},{key:"nav_navs",value:"Nav 导航菜单"},{key:"nav_steps",value:"Steps 步骤条"}]},{key:"nav3",value:"数据输入",icon:"lego-icon-teamwork",open:true,children:[{key:"nav_forms",value:"Form 表单"},{key:"nav_transfer",value:"Transfer 穿梭框"},{key:"nav_upload",value:"Upload 上传文件"},{key:"nav_avatar",value:"Avatar 头像"},{key:"nav_editcom",value:"Editcom 编辑组件"},{key:"nav_rating",value:"Rating 评分"}]},{key:"nav4",value:"数据展示",icon:"lego-icon-purchase",open:true,children:[{key:"nav_tips",value:"Tips 提示框"},{key:"nav_tree",value:"Tree 树型"}]},{key:"nav5",value:"反馈",icon:"lego-icon-clues",open:true,children:[{key:"nav_alert",value:"Alert 警告框"},{key:"nav5_2",value:"Form 表单"}]}];data.forEach(function(item){item.value=hx(_templateObject,val(item.icon),val(item.value));if(item.children){item.children.forEach(function(subItem){if(subItem.key=="nav_"+Lego.getAppName()){subItem.active=true}})}});var options={components:[{el:"#menu",type:"pills-stacked",closeAllAble:false,activeKey:"nav1",onClick:function onClick(self,item){if(item.key){if(item.key.indexOf("_")>0){Lego.startApp(item.key.split("_")[1])}}},data:data}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).call(this,options))}_createClass(Menu,[{key:"render",value:function render(){var tmpl=hx(_templateObject2);return tmpl}}]);return Menu}(Lego.UI.Baseview);exports.default=Menu}});