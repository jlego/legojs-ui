(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="./";return __webpack_require__(0)})({0:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _index=__webpack_require__(231);var _index2=_interopRequireDefault(_index);var _home=__webpack_require__(232);var _home2=_interopRequireDefault(_home);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Router=function(){function Router(){_classCallCheck(this,Router);return{"/upload":[this.index.bind(this),this.tabs.bind(this)],"/upload/:tabs":[this.index.bind(this),this.tabs.bind(this)]}}_createClass(Router,[{key:"index",value:function index(ctx,next){this.viewObj=Lego.create(_index2.default,{el:Lego.config.pageEl,scrollbar:{},currentTab:0});next()}},{key:"tabs",value:function tabs(ctx,next){var tabs=ctx.params.tabs||0;this.viewObj.options.currentTab=tabs;var appArray=[_home2.default];Lego.create(appArray[tabs],{el:"#pageContent"})}}]);return Router}();Lego.router(new Router)},231:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="','">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '],['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/upload/0" class="','">Upload 上传文件</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var IndexView=function(_Lego$UI$Baseview){_inherits(IndexView,_Lego$UI$Baseview);function IndexView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,IndexView);var options={currentTab:0};Object.assign(options,opts);return _possibleConstructorReturn(this,(IndexView.__proto__||Object.getPrototypeOf(IndexView)).call(this,options))}_createClass(IndexView,[{key:"render",value:function render(){var options=this.options;var vDom=hx(_templateObject,options.currentTab==0?"active":"");return vDom}}]);return IndexView}(Lego.UI.Baseview);exports.default=IndexView},232:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n            <div class="row" style="margin-bottom: 40px;">\n              <div class="col-sm-6">\n                <upload id="upload5"></upload>\n              </div>\n              <div class="col-sm-6">\n                <upload id="upload6"></upload>\n              </div>\n            </div>\n          </div>\n        </div>\n        '],['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload1"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload2"></upload>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 40px;">\n            <div class="col-sm-6">\n              <upload id="upload3"></upload>\n            </div>\n            <div class="col-sm-6">\n              <upload id="upload4"></upload>\n            </div>\n            <div class="row" style="margin-bottom: 40px;">\n              <div class="col-sm-6">\n                <upload id="upload5"></upload>\n              </div>\n              <div class="col-sm-6">\n                <upload id="upload6"></upload>\n              </div>\n            </div>\n          </div>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var HomeView=function(_Lego$UI$Baseview){_inherits(HomeView,_Lego$UI$Baseview);function HomeView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HomeView);var token="6qcgjJjvWVKAJNg3bR_8Wzr1IjEahFQha4Ksph8_:KdvqZCn-qVgSU2BqgRR1NSkG_4o=:eyJzY29wZSI6InJvYm90YWkiLCJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIiwgXCJoYXNoXCI6XCIkKGV0YWcpXCIsXCJtaW1lVHlwZVwiOlwiJChtaW1lVHlwZSlcIixcIm5hbWVcIjpcIiQoZm5hbWUpXCIsXCJzaXplXCI6JChmc2l6ZSksXCJ3aWR0aFwiOiQoaW1hZ2VJbmZvLndpZHRoKSxcImhlaWdodFwiOiQoaW1hZ2VJbmZvLmhlaWdodCl9IiwiZGVhZGxpbmUiOjE0OTM4MDgwOTJ9";var options={components:[{el:"#upload1",name:"uploadname",multiple:true,token:token,acceptSuffix:["apk"],maxFileSize:"50mb",onComplete:function onComplete(self,result){console.warn("上传成功了",result)}},{el:"#upload2",name:"uploadname2",buttonText:"单文件",multiple:false,token:token,onComplete:function onComplete(self,result){console.warn("上传成功了2",result)}},{el:"#upload3",name:"uploadname3",readonly:true,value:[{id:100124028001,extension:"png",height:474,mime_type:"image/png",name:"2017-01-10_183019.png",size:124290,url:"https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png",width:473},{id:100124028002,extension:"png",height:474,mime_type:"image/png",name:"2017-01-10_183018.png",size:124290,url:"https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681068.png",width:473}],onComplete:function onComplete(result){console.warn("上传成功了3",result)}},{el:"#upload4",name:"uploadname4",type:"avatar",token:token,previewImg:{width:200,height:150},showZoom:false,value:[{id:100124028001,extension:"png",height:474,mime_type:"image/png",name:"2017-01-10_183019.png",size:124290,url:"https://dn-openwinbons.qbox.me/1/oss/05b49736-44ad-2daa-af59-1d6781681067.png",width:473}],onComplete:function onComplete(self,result){console.warn("上传成功了4",result)}},{el:"#upload6",name:"uploadname5",type:"photos",token:token,onComplete:function onComplete(self,result){console.warn("上传成功了5",result)}}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(HomeView.__proto__||Object.getPrototypeOf(HomeView)).call(this,options))}_createClass(HomeView,[{key:"render",value:function render(){var vDom=hx(_templateObject);return vDom}}]);return HomeView}(Lego.UI.Baseview);exports.default=HomeView}});