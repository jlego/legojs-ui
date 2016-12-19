// import 'babel-polyfill';
import Events from "events";
import { Router } from 'director';
import "./util/util";
import BaseView from "./core/view";
import BaseData from "./core/data";

class Lego {
    constructor(opts = {}) {
        const that = this;
        this.config = {
            alias: 'Lego',
            version: '1.0.0',
            $: null,    //dom操作对象, 必须
            isDebug: true,
            isAnimate: false,  //是否开启动画
            isPermit: false,  //是否开启操作权限
            isMultiWindow: false, //是否多窗口
            isVDom: true, //是否开启虚拟DOM
            pageEl: '',     //页面渲染容器
            defaultApp: '', //默认应用
            rootUri: '',    //根目录
            routerConfig: {},   //路由配置
            screenWidth: window.innerWidth  //应用窗口宽度
        };
        Object.assign(this.config, opts);

        this._debugger();
        if(this.config.$){
            window.$ = this.$ = this.config.$;
        }else{
            debug.error('请先设置参数$');
            return;
        }
        this.$el = this.$;
        this.prevApp = ''; //上一个应用名称
        this.currentApp = 'index'; //当前应用名称
        // 基类
        this.Event = Events;
        this.Router = Router;
        this.View = BaseView;
        this.Data = BaseData;
        // 实例容器
        this.views = {}; //视图容器
        this.datas = {};    //数据容器
        this.permis = {};   //权限对象
        this.timer = {};   //计时器对象
        this.routers = new Map();
        this.Eventer = new Events(); //全局事件对象
        window[this.config.alias] = window.Lego = this;
        this.startApp(this.currentApp);
        return this;
    }
    /**
     * [create 实例化视图]
     * @param  {Object} option [description]
     * @return {[type]}        [description]
     */
    create(opts = {}){
        const that = this,
            options = {
                id: '',
                el: this.config.pageEl,
                tagName: 'div',
                insert: 'html',
                permis: null, //权限
                view: null, //视图类
                components: [],
                events: {},
                listen: {},
                scrollbar: null,
                data: null, //静态数据
                dataSource: null, //动态数据
                onBefore() {}, //视图开始前回调
                onAfter() {}, //视图执行后回调
                onAnimateBefore() {}, //动画前回调
                onAnimateAfter() {} //动画后回调
            };
        Object.assign(options, opts);
        options.id = options.id || ((this.config.alias + window.location.hash.replace(/\//g, '_') + '_' + options.el).replace(/#/g, ''));
        options.onBefore = options.onBefore.bind(this);
        options.onAfter = options.onAfter.bind(this);
        options.onAnimateBefore = options.onAnimateBefore.bind(this);
        options.onAnimateAfter = options.onAnimateAfter.bind(this);
        // 操作权限
        if (options.permis) {
            const module = options.permis.module,
                operate = options.permis.operate,
                hide = options.permis.hide,
                userId = options.permis.userid || 0;
            if (hide) {
                if (!this.permis.check(module, operate, userId)) {
                    return;
                }
            }
        }
        typeof options.onBefore === 'function' && options.onBefore();
        if(this.views[this.prevApp].has(options.el) && !this.config.isMultiWindow){
            this.views[this.prevApp].get(options.el).unEvents();
            this.views[this.prevApp].delete(options.el);
        }
        if(this.views[this.currentApp].has(options.el) && !this.config.isMultiWindow){
            this.views[this.currentApp].get(options.el).unEvents();
            this.views[this.currentApp].delete(options.el);
        }
        const viewObj = new options.view(options);
        this.views[this.currentApp].set(options.el, viewObj);

        if(!this.$.isEmptyObject(options.listen)){
            for(let key in options.listen) {
                this.Eventer.removeListener(key);
                this.Eventer.on(key, options.listen[key]);
            }
        }

        typeof options.onAfter === 'function' && options.onAfter(viewObj);
        return viewObj;
    }
    /**
     * [init 实例化系统]
     * @param  {Object} opts [description]
     * @return {[type]}      [description]
     */
    static init(opts = {}){
        new this(opts);
    }
    /**
     * [randomKey 随机字符串]
     * @param  {[type]} len [description]
     * @return {[type]}     [description]
     */
    randomKey(len) {
        len = len || 32;
        const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const maxPos = $chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    /**
     * _debugger 调试器
     * @return {[type]} [description]
     */
    _debugger() {
        window.debug = {};
        if (!window.console) return function() {}
        if (this.config.isDebug) {
            for (let m in console) {
                if (typeof console[m] == 'function') {
                    debug[m] = console[m].bind(window.console);
                }
            }
        } else {
            for (let m in console) {
                if (typeof console[m] == 'function') {
                    debug[m] = function() {};
                }
            }
        }
    }
    /**
     * [_initObj 初始化应用对象]
     * @param  {[type]} appName [description]
     * @return {[type]}         [description]
     */
    _initObj(appName){
        this.views[appName] = this.views[appName] || new Map();
        this.timer[appName] = this.timer[appName] || new Map();
    }
    /**
     * [_clearObj 清理旧应用对象]
     * @param  {[type]} appName [description]
     * @return {[type]}         [description]
     */
    _clearObj(appName){
        const that = this;
        if(this.prevApp !== this.currentApp){
            this.timer[appName].forEach(function(value, key){
                clearTimeout(value);
                clearInterval(value);
                that.timer[appName].delete(key);
            });
        }
    }
    /**
     * startApp 应用加载器
     * @param  {object} opts 参数
     * @return {[type]}        [description]
     */
    startApp(appPath, opts = {}) {
        let options = {
            onBefore() {},
            onAfter() {}
        }, that = this, appName, index;
        Object.assign(options, opts);
          const hash = window.location.hash.replace(/#/, '');
        let newHash = hash.indexOf('/') == 0 ? hash.replace(/\//, '') : '';
        newHash = newHash !== 'index' ? newHash : '';
        appPath = appPath || newHash || this.config.defaultApp;
        appName = appPath.indexOf('/') > 0 ? appPath.split('/')[0] : appPath;
        this.prevApp = this.currentApp;
        this.currentApp = appName;
        this._initObj(appName);
        if (typeof options.onBefore == 'function') options.onBefore();
        this.$(this.config.pageEl).scrollTop(0);
        this.$.ajax({
            type: "GET",
            url: this.config.rootUri + appName + '/app.js?' + this.config.version,
            dataType: "script",
            crossDomain: true,
            cache: true,
            success: function(e) {
                if(appPath && appName !== 'index'){
                    that.routers.get(appName).setRoute(appPath);
                }
                that._clearObj(that.prevApp);
                if (typeof options.onAfter == 'function') options.onAfter(e);
            },
            error: function(e) {
                debug.error('Failed to load application module!');
            }
        });
    }
    /**
     * getUrlParam 获取网址参数
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    getUrlParam(name) {
        window.pageParams = {};
        if (window.pageParams[name]) return window.pageParams[name];
        let url = decodeURI(document.location.search);
        if (url.indexOf('?') >= 0) {
            let paramArr = url.substr(1).split('&'),
                valArr = [];
            for (let i = 0; i < paramArr.length; i++) {
                valArr = paramArr[i].split('=');
                window.pageParams[valArr[0]] = valArr[1];
            }
            return window.pageParams[name] || '';
        } else {
            return '';
        }
    }
    /**
     * [trigger 触发事件]
     * @param  {[type]} event [description]
     * @param  {[type]} data  [description]
     * @return {[type]}       [description]
     */
    trigger(event, data){
        this.Eventer.emit(event, data);
    }
    /**
     * getAppName 当前模块名称
     * @return {[type]} [description]
     */
    getAppName() {
        let hash = window.location.hash.replace(/#/, '');
        hash = hash.indexOf('/') == 0 ? hash.replace(/\//, '') : '';
        return hash.split('/')[0] || this.config.defaultApp;
    }
    /**
     * [getView 取应用视图]
     * @param  {[type]} alias   [description]
     * @param  {[type]} appName [description]
     * @return {[type]}         [description]
     */
    getView(el, appName = this.getAppName()){
        el = el instanceof this.$ ? el : this.$(el);
        if(el.length && this.views[appName].get(el)){
            return this.views[appName].get(el);
        }
        return null;
    }
    /**
     * [setTimer 设置计时器]
     * @param {[type]} name  [description]
     * @param {[type]} timer [description]
     */
    setTimer(name, timer){
        if(name && timer){
            let oldTimerMap = this.timer[this.getAppName()],
                oldTimer = oldTimerMap.get(name);
            if(oldTimer){
                clearTimeout(oldTimer);
                clearInterval(oldTimer);
                oldTimerMap.clear();
            }
            oldTimerMap.set(name, timer);
        }
    }
    /**
     * [router 实例化路由]
     * @param  {[type]} routerOption [description]
     * @return {[type]}           [description]
     */
    router(routerOption){
        const appName = this.currentApp;
        if(appName == 'index') return;
        if(!this.routers.has(appName)){
            const routerObj = this.Router(routerOption).init();
            this.routers.set(appName, routerObj);
        }
        return this.routers.get(appName);
    }
}

export default Lego;