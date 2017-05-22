(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="./";return __webpack_require__(0)})({0:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _index=__webpack_require__(220);var _index2=_interopRequireDefault(_index);var _home=__webpack_require__(221);var _home2=_interopRequireDefault(_home);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Router=function(){function Router(){_classCallCheck(this,Router);return{"/tables":[this.index.bind(this),this.tabs.bind(this)],"/tables/:tabs":[this.index.bind(this),this.tabs.bind(this)]}}_createClass(Router,[{key:"index",value:function index(ctx,next){this.viewObj=Lego.create(_index2.default,{el:Lego.config.pageEl,scrollbar:{},currentTab:0});next()}},{key:"tabs",value:function tabs(ctx,next){var tabs=ctx.params.tabs||0;this.viewObj.options.currentTab=tabs;var appArray=[_home2.default];Lego.create(appArray[tabs],{el:"#pageContent"})}}]);return Router}();Lego.router(new Router)},220:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tables/0" class="','">Tables 表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '],['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/tables/0" class="','">Tables 表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var IndexView=function(_Lego$UI$Baseview){_inherits(IndexView,_Lego$UI$Baseview);function IndexView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,IndexView);var options={currentTab:0};Object.assign(options,opts);return _possibleConstructorReturn(this,(IndexView.__proto__||Object.getPrototypeOf(IndexView)).call(this,options))}_createClass(IndexView,[{key:"render",value:function render(){var options=this.options;var vDom=hx(_templateObject,options.currentTab==0?"active":"");return vDom}}]);return IndexView}(Lego.UI.Baseview);exports.default=IndexView},221:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['<div class="markdown scrollbar">\n                    <h6>效果图:</h6>\n                    <img src="','img/example/tables.png" style="margin-bottom:30px;">\n                    <h6>参数:</h6>\n                    ',"\n                    </div>"],['<div class="markdown scrollbar">\n                    <h6>效果图:</h6>\n                    <img src="','img/example/tables.png" style="margin-bottom:30px;">\n                    <h6>参数:</h6>\n                    ',"\n                    </div>"]),_templateObject2=_taggedTemplateLiteral(['<div class="example scrollbar"><tables id="exampleCom"></tables></div>'],['<div class="example scrollbar"><tables id="exampleCom"></tables></div>']),_templateObject3=_taggedTemplateLiteral(['<div class="code scrollbar" id="md"></div>'],['<div class="code scrollbar" id="md"></div>']),_templateObject4=_taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        '],['\n        <div id="pageContent" class="container">\n          <div class="row" style="height:100%">\n            <div class="col-sm-8" style="height:100%">\n                <div class="page-panel-bg col-left">\n                    <tabs id="tabs"></tabs>\n                </div>\n            </div>\n            <div class="col-sm-4" style="height:100%">\n                <formcom id="formcom"></formcom>\n            </div>\n          </div>\n        </div>\n        ']);var _form=__webpack_require__(222);var _form2=_interopRequireDefault(_form);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var table="\n| 属性    |    说明   |      类型 |      默认值 |\n|:------|:-------:|--------:|--------:|\n| isNowrap | 表格内容不换行 | boolean | true |\n| rowSelection   | 列表行是否可选择  | Object | null |\n| pagination   | 分页器，配置项参考 pagination，设为 false 时不展示和进行分页  | Object | null |\n| size   | 正常或迷你类型，sm lg  | Boolean |  |\n| columns   | 表格列的配置描述，具体项见下表  | Array/Function | [] |\n| rowClassName   | 表格行的类名  | String |  |\n| expandedRowKeys   | 默认展开的行  | Array | [] |\n| expandAllRows   | 是否展开所有行  | Boolean | false |\n| loading   | 页面是否加载中  | Boolean | false |\n| locale   | 默认文案设置  | Object |  |\n| bordered   | 是否展示外边框和列边框  | Boolean | false |\n| fixedHeader   | 是否固定表头  | Boolean | true |\n| showHeader   | 是否显示表头  | Boolean | false |\n| showBodyer   | 是否显示表体  | Boolean | true |\n| showFooter   | 是否显示表尾  | Boolean | false |\n| showSetting   | 是否显示设置  | Boolean | false |\n| footer   | 返回表格尾部  | String/Function |  |\n| title   | 表格标题  | String/Function |  |\n| scroll   | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{ x: true, y: 300 }  | Object |  |\n| onExpandRow   | 点击展开图标时触发  | Function |  |\n| onChange   | 分页、排序、筛选变化时触发  | Function |  |\n| onSelect   | 点击选中行时回调  | Function |  |\n| onSetting   | 点击表格设置按钮时回调  | Function |  |\n| onRowClick   | 处理行点击事件  | Function |  |\n";function getData(){var currentPage=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var theData=[];for(var i=(currentPage-1)*20;i<currentPage*20;i++){theData.push({key:i,name:"胡彦斌"+i,age:32+i,address:"西湖区湖底公园1号"})}return theData}var HomeView=function(_Lego$UI$Baseview){_inherits(HomeView,_Lego$UI$Baseview);function HomeView(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,HomeView);var options={scrollbar:{},listener:{updateView:function updateView(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var view=Lego.getView("#exampleCom"),tView=Lego.getView("#tabs"),pView=Lego.getView("#pageContent");if(view){Object.assign(view.options,data)}if(tView){if(tView.options.activeKey=="tab_3")pView.showTab()}}}};Object.assign(options,opts);var _this=_possibleConstructorReturn(this,(HomeView.__proto__||Object.getPrototypeOf(HomeView)).call(this,options));var that=_this;setTimeout(function(){that.renderScroll()},0);var view=Lego.getView("#exampleCom");_this.oldOpts=view?$.extend(true,{},view.options):{};return _this}_createClass(HomeView,[{key:"components",value:function components(){var that=this;this.addCom([{el:"#tabs",type:"tabs",activeKey:"tab_1",navClassName:"nav-fill",data:[{key:"tab_1",value:"参数说明",content:hx(_templateObject,Lego.config.rootUri,hx(markdown.makeHtml(table)))},{key:"tab_2",value:"实例效果",content:hx(_templateObject2)},{key:"tab_3",value:"生成代码",content:hx(_templateObject3)}],onChange:function onChange(self,result){if(result.key=="tab_3"){that.showTab()}},components:[{el:"#exampleCom",style:{height:"100%"},className:"table-striped",pagination:{totalCount:300,pageRang:5,pageSize:20,onChange:function onChange(self,num){var view=Lego.getView("#exampleCom");view.options.data=getData(num);view.refresh()}},showHeader:true,data:getData(),columns:[{title:"姓名",dataIndex:"name",key:"name",width:"400px",filter:function filter(self,col){console.warn("点击了筛选",col)}},{title:"年龄",dataIndex:"age",key:"age",width:"300px",onCellClick:function onCellClick(self,row,col){console.warn(row,col)},filter:function filter(self,col,event){console.warn("ffffffffff")},sorter:function sorter(self,col){console.warn("点击了排序",col)}},{title:"住址",dataIndex:"address",key:"address",width:"300px"}]}]},{el:"#formcom"}])}},{key:"showTab",value:function showTab(){var theComView=Lego.getView("#exampleCom");if(theComView){this.$("#md").html(markdown.makeHtml(Lego.Ux.Util.getObjStr(theComView.options,this.oldOpts)));setTimeout(function(){this.$("pre").each(function(i,block){hljs.highlightBlock(block)})},0)}}},{key:"render",value:function render(){var vDom=hx(_templateObject4);return vDom}}]);return HomeView}(Lego.UI.Baseview);exports.default=HomeView},222:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _templateObject=_taggedTemplateLiteral(['\n        <div class="col-right page-panel-bg scrollbar">\n            <h6>配置参数</h6>\n            <forms id="form1"></forms>\n        </div>\n        '],['\n        <div class="col-right page-panel-bg scrollbar">\n            <h6>配置参数</h6>\n            <forms id="form1"></forms>\n        </div>\n        ']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var View=function(_Lego$UI$Baseview){_inherits(View,_Lego$UI$Baseview);function View(){var opts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,View);var options={components:[{el:"#form1",layout:"inline",labelCols:4,comCols:8,showSubmit:false,data:[{label:"标题",component:{comName:"inputs",type:"textarea",value:"",onChange:function onChange(self,result){if(result.indexOf("function")==0){result=result.replace(/\n/gi,"");eval("result = "+result)}Lego.Eventer.trigger("updateView",{title:result})}}},{label:"内容不换行",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{isNowrap:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"可选择行",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{rowSelection:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"尺寸大小",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{size:result.key})},data:[{key:"sm",value:"小"},{key:"",value:"中"},{key:"lg",value:"大"}]}},{label:"列数据",component:{comName:"inputs",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{})}}},{label:"行类名",component:{comName:"inputs",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{rowClassName:result})}}},{label:"默认展开的行key",component:{comName:"inputs",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{expandedRowKeys:result?result.split(","):[]})}}},{label:"展开所有行",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{expandAllRows:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"加载中",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{loading:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"默认展开的行key",component:{comName:"inputs",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{expandedRowKeys:result?result.split(","):[]})}}},{label:"显示边框",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{bordered:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"固定表头",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{fixedHeader:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"显示表头",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{showHeader:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"显示表体",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{showBodyer:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"显示表尾",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{showFooter:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"显示设置",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{showSetting:!!result.key})},data:[{key:0,value:"否"},{key:1,value:"是"}]}},{label:"关闭回调",component:{comName:"selects",placeholder:"请选择",onChange:function onChange(self,result){Lego.Eventer.trigger("updateView",{onClose:result.key?function(self,event){}:undefined})},data:[{key:0,value:"否"},{key:1,value:"是"}]}}],onSubmit:function onSubmit(self,data){console.warn("点击了提交",data);return false}}]};Object.assign(options,opts);return _possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).call(this,options))}_createClass(View,[{key:"render",value:function render(){return hx(_templateObject)}}]);return View}(Lego.UI.Baseview);Lego.components("formcom",View);exports.default=View}});