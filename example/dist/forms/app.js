(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="./";return __webpack_require__(0)})([function(module,exports,__webpack_require__){module.exports=__webpack_require__(15)},,,,,,,,,,,,,,,function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _index=__webpack_require__(16);var _index2=_interopRequireDefault(_index);var _home=__webpack_require__(17);var _home2=_interopRequireDefault(_home);var _form=__webpack_require__(19);var _form2=_interopRequireDefault(_form);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Router=function(){function Router(){_classCallCheck(this,Router);return{"/forms":[this.index.bind(this),this.tabs.bind(this)],"/forms/:tabs":[this.index.bind(this),this.tabs.bind(this)]}}_createClass(Router,[{key:"index",value:function index(ctx,next){this.viewObj=Lego.create(_index2.default,{el:Lego.config.pageEl,scrollbar:{},currentTab:0});next()}},{key:"tabs",value:function tabs(ctx,next){var tabs=ctx.params.tabs||0;this.viewObj.options.currentTab=tabs;var appArray=[_home2.default,_form2.default];Lego.create(appArray[tabs],{el:"#pageContent"})}}]);return Router}();Lego.router(new Router)},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="','">Forms 表单</a>\n                <a href="#/forms/1" class="','">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '],['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/forms/0" class="','">Forms 表单</a>\n                <a href="#/forms/1" class="','">表单页</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var IndexView=function(_Lego$UI$Baseview){_inherits(IndexView,_Lego$UI$Baseview);function IndexView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,IndexView);var options={currentTab:0};Object.assign(options,opts);return _possibleConstructorReturn(this,(IndexView.__proto__||Object.getPrototypeOf(IndexView)).call(this,options))}_createClass(IndexView,[{key:"render",value:function render(){var options=this.options;var vDom=hx(_templateObject,options.currentTab==0?"active":"",options.currentTab==1?"active":"");return vDom}}]);return IndexView}(Lego.UI.Baseview);exports.default=IndexView},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['<i class="anticon anticon-setting"></i>'],['<i class="anticon anticon-setting"></i>']),_templateObject2=_taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        '],['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <search id="search1"></search>\n            </div>\n            <div class="col-sm-6">\n              <search id="search2"></search>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select3"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select4"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <selects id="select5"></selects>\n            </div>\n            <div class="col-sm-6">\n              <selects id="select6"></selects>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <datepicker id="datepicker7"></datepicker>\n            </div>\n            <div class="col-sm-6">\n              <datepicker id="datepicker8"></datepicker>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n                <datepicker id="datepicker9"></datepicker>\n            </div>\n            <div class="col-sm-6">\n                <inputs id="input10"></inputs>\n                <inputs id="input11"></inputs>\n                <inputs id="input12"></inputs>\n            </div>\n          </div>\n        </div>\n        ']);var _data=__webpack_require__(18);var _data2=_interopRequireDefault(_data);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var HomeView=function(_Lego$UI$Baseview){_inherits(HomeView,_Lego$UI$Baseview);function HomeView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HomeView);var data=[{key:"0",value:"不限"},{key:"so1",value:"选项一"},{key:"so2",value:"选项二选项二选项二fffdf"},{key:"so3",value:"选项三"},{key:"so4",value:"选项四"},{key:"so5",value:"选项二选项二选项二fffdf五"},{key:"so6",value:"选项三六"}];var options={components:[{el:"#search1",showSelect:true,onSearch:function onSearch(self,result){console.warn("点击了搜索框",result,this)},data:$.extend(true,[],data)},{el:"#search2",placeholder:"输入关键字",autoComplete:{maxCount:5,dataSource:{server:_data2.default,isAjax:true,api:"search"}},onKeyup:function onKeyup(self,result,dropdownView){console.warn(result,dropdownView);dropdownView.fetch({body:{filters:[{operation:"like",property:"t.name",value:result.keyword}]}})},onSearch:function onSearch(self,result){console.warn("点击了搜索框2",result)}},{el:"#select3",placeholder:"请选择",showSearch:true,dropdownHeight:120,onChange:function onChange(self,result){console.warn("点击了选项框1",result)},data:$.extend(true,[],data)},{el:"#select4",placeholder:"请选择",eventName:"click",onChange:function onChange(self,result){console.warn("点击了选项框2",result)},value:{key:"so2",value:"选项二选项二选项二"},data:$.extend(true,[],data)},{el:"#select5",placeholder:"请选择",multiple:true,onChange:function onChange(self,result){console.warn("点击了选项框3",result)},data:$.extend(true,[],data)},{el:"#select6",placeholder:"请选择",multiple:true,onChange:function onChange(self,result){console.warn("点击了选项框4",result)},value:[{key:"so2",value:"选项二选项二选项二"},{key:"so3",value:"选项三"}],data:$.extend(true,[],data)},{el:"#datepicker7",type:"date",name:"datepicker1",showClose:true,showClear:true,onChange:function onChange(self,result){console.warn("点击了时间选项框5",result)}},{el:"#datepicker8",type:"range",startName:"datepicker2",endName:"datepicker3",onChange:function onChange(self,result){console.warn("点击了时间选项框6",result)}},{el:"#datepicker9",inline:true,onChange:function onChange(self,result){console.warn("点击了时间选项框7",result)}},{el:"#input10",placeholder:"这是输入框",onChange:function onChange(self,result){console.warn("点击了输入框1",result)},style:{marginBottom:20}},{el:"#input11",placeholder:"这是输入框",addonBefore:true,addonAfter:true,prefix:"Http://",suffix:hx(_templateObject),onChange:function onChange(self,result){console.warn("点击了输入框2",result)},style:{marginBottom:20}},{el:"#input12",type:"textarea",placeholder:"这是文本框",rows:10,onChange:function onChange(self,result){console.warn("点击了文本框2",result)}}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(HomeView.__proto__||Object.getPrototypeOf(HomeView)).call(this,options))}_createClass(HomeView,[{key:"render",value:function render(){var vDom=hx(_templateObject2);return vDom}}]);return HomeView}(Lego.UI.Baseview);exports.default=HomeView},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Data=function(_Lego$UI$Basedata){_inherits(Data,_Lego$UI$Basedata);function Data(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Data);var options={search:{url:"/example/data/autocomplete.json",method:"GET"}};Object.assign(options,opts);return _possibleConstructorReturn(this,(Data.__proto__||Object.getPrototypeOf(Data)).call(this,options))}_createClass(Data,[{key:"search",value:function search(result,view){if(result.data){return result.data.map(function(item){item.key=item.id;item.value=item.NAME;return item})}return[]}}]);return Data}(Lego.UI.Basedata);exports.default=new Data},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        '],['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <forms id="form1"></forms>\n            </div>\n            <div class="col-sm-6">\n              <forms id="form2"></forms>\n            </div>\n          </div>\n        </div>\n        ']);var _comAreapicker=__webpack_require__(!function webpackMissingModule(){var e=new Error('Cannot find module "com-areapicker"');e.code="MODULE_NOT_FOUND";throw e}());var _comAreapicker2=_interopRequireDefault(_comAreapicker);__webpack_require__(!function webpackMissingModule(){var e=new Error('Cannot find module "com-areapicker/dist/index.css"');e.code="MODULE_NOT_FOUND";throw e}());var _data=__webpack_require__(!function webpackMissingModule(){var e=new Error('Cannot find module "com-areapicker/dist/data"');e.code="MODULE_NOT_FOUND";throw e}());var _data2=_interopRequireDefault(_data);var _comGeolocation=__webpack_require__(!function webpackMissingModule(){var e=new Error('Cannot find module "com-geolocation"');e.code="MODULE_NOT_FOUND";throw e}());var _comGeolocation2=_interopRequireDefault(_comGeolocation);__webpack_require__(!function webpackMissingModule(){var e=new Error('Cannot find module "com-geolocation/dist/index.css"');e.code="MODULE_NOT_FOUND";throw e}());function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var HomeView=function(_Lego$UI$Baseview){_inherits(HomeView,_Lego$UI$Baseview);function HomeView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HomeView);var data=[{key:"0",value:"不限"},{key:"so1",value:"选项一"},{key:"so2",value:"选项二选项二选项二fffdf"},{key:"so3",value:"选项三"},{key:"so4",value:"选项四"},{key:"so5",value:"选项二选项二选项二fffdf五"},{key:"so6",value:"选项三六"},{key:"so7",value:"选项一"},{key:"so8",value:"选项二选项二选项二fffdf"}];var options={components:[{el:"#form1",layout:"inline",data:[{label:"名称",text:"静态内容"},{label:"名称1",help:"注意事项",rule:{required:true},message:{required:"请先填写名称"},component:{comName:"inputs",name:"name",onChange:function onChange(self,result){console.warn("点击了搜索框",result)}}},{label:"名称2",required:true,rule:{},message:{required:"请先填写名称2"},component:{comName:"inputs",name:"old",placeholder:"输入关键字",onChange:function onChange(self,result){console.warn("点击了搜索框2",result)}}},{label:"名称3",rule:{required:true},message:{required:"请先填写名称3"},component:{comName:"selects",name:"book",placeholder:"请选择",onChange:function onChange(self,result){console.warn("点击了搜索框",result)},data:$.extend(true,[],data)}},{label:"名称4",rule:{required:true},message:{required:"请先填写名称4"},component:{comName:"selects",name:"time",placeholder:"请选择",onChange:function onChange(self,result){console.warn("点击了选项框2",result)},value:{key:"so2",value:"选项二选项二选项二"},data:$.extend(true,[],data)}},{label:"名称5",rule:{required:true},message:{required:"请先选择"},component:{comName:"chkgroup",type:"radio",layout:"inline",name:"dddd",data:[{label:"sadfa",value:"1",checked:true},{label:"sadfa2",value:"2"}],onChange:function onChange(self,result,event){console.warn(result)}}},{label:"名称6",rule:{required:true},message:{required:"请先选择"},component:{comName:"switchs",name:"ssss",checked:true,onChange:function onChange(self,result){console.warn(self,result)}}},{label:"名称7",component:{comName:"slider",name:"sss2",range:true,value:[2,6],onChange:function onChange(self,result){console.warn(self,result)}}},{label:"名称8",component:{comName:"areapicker",rootId:"117",data:_data2.default,name:"agent_address",nameArr:["province","city","area"],onChange:function onChange(self,result){console.warn(self,result);var mapView=Lego.getView(".lego-geolocation");if(mapView){mapView.options.data.address=result.join("")}}}},{label:"名称9",component:{comName:"geolocation",name:"sdfasd",mapApi:"https://webapi.amap.com/maps?v=1.3&key=acc8b6f1622ec84e5eb7ad4765b14998",onChange:function onChange(self,result){console.warn(self,result)}}}],onSubmit:function onSubmit(self,data){console.warn("点击了提交",data);return false}},{el:"#form2",data:[{label:"名称",help:"注意事项",required:false,component:{comName:"inputs",name:"name",onChange:function onChange(self,result){console.warn("点击了搜索框",result)}}},{label:"名称2",required:false,component:{comName:"inputs",name:"old",placeholder:"输入关键字",onChange:function onChange(self,result){console.warn("点击了搜索框2",result)}}},{label:"名称2",required:false,component:{comName:"selects",name:"book",placeholder:"请选择",onChange:function onChange(self,result){console.warn("点击了搜索框",result)},data:$.extend(true,[],data)}},{label:"名称3",required:false,component:{comName:"selects",name:"time",placeholder:"请选择",onChange:function onChange(self,result){console.warn("点击了选项框2",result)},value:{key:"so2",value:"选项二选项二选项二"},data:$.extend(true,[],data)}},{label:"名称4",component:{comName:"chkgroup",type:"radio",name:"dddd",data:[{label:"sadfa",value:"1",checked:true},{label:"sadfa2",value:"2"}]}}],onSubmit:function onSubmit(self,data){console.warn("点击了提交2",data);return false}}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(HomeView.__proto__||Object.getPrototypeOf(HomeView)).call(this,options))}_createClass(HomeView,[{key:"render",value:function render(){var vDom=hx(_templateObject);return vDom}}]);return HomeView}(Lego.UI.Baseview);exports.default=HomeView}]);