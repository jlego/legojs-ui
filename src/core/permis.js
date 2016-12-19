/**
 * 权限控制类
 */
class Permis {
    constructor(option = {}) {
        this.options = {
            currentUserId: 0, //当前用户ID
            privateData() {}, //操作权限对象
            manageData() {}, //管理权限对象
            allUsers() {}, //所有用户列表 (array 或 function)
            showMsg() {} //提示信息回调
        };
    }
    /**
     * [init 初始化数据]
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    init(option) {
        let that = this;
        let ajaxConfig = {
            url: '',
            data: {},
            error(error) {
                debug.error('加载权限数据失败');
            }
        };
        if (option) _.extend(this.options, option);

        if (this.options.privateData.url) {
            let privateAjaxConfig = $.extend({}, ajaxConfig, this.options.privateData);
            privateAjaxConfig.success = function(result) {
                that.options.privateData = result;
            };
            $.ajax(privateAjaxConfig);
        }
        if (this.options.manageData.url) {
            let manageAjaxConfig = $.extend({}, ajaxConfig, this.options.manageData);
            manageAjaxConfig.success = function(result) {
                that.options.manageData = result;
            };
            $.ajax(manageAjaxConfig);
        }
    }
    /**
     * [check 权限判断]
     * @param  {[type]} module  [description]
     * @param  {[type]} operate [description]
     * @param  {[type]} userId  [description]
     * @return {[type]}         [description]
     */
    check(module, operate, userId) {
        let currentUserId = this.options.currentUserId,
            privateData = _.isFunction(this.options.privateData) ? this.options.privateData() : this.options.privateData,
            manageData = _.isFunction(this.options.manageData) ? this.options.manageData() : this.options.manageData,
            allUsers = _.isFunction(this.options.allUsers) ? this.options.allUsers() : this.options.allUsers;
        if (!userId || userId === currentUserId) {
            // 当前用户操作
            if (module && !HBY.account.get('supervisor')) {
                if (privateData[module]) {
                    return privateData[module][operate];
                } else {
                    return 0;
                }
            }
            return 1;
        } else {
            // 管理操作
            let theDepartment, result;
            if (_.isArray(allUsers)) {
                // 纯json
                result = _.find(allUsers, { id: userId });
                if (result) {
                    theDepartment = result.deptId;
                }
            } else {
                // 使用backbone
                result = allUsers.get(userId);
                if (result) {
                    theDepartment = result.get('deptId');
                }
            }
            if (theDepartment) {
                if (manageData[theDepartment]) {
                    if (manageData[theDepartment][module]) {
                        // 使用新数据格式
                        return manageData[theDepartment][module][operate];
                    } else {
                        // 兼容旧数据格式
                        return manageData[theDepartment][module + ':' + operate];
                    }
                }
            }
            return 1;
        }
    }
    /**
     * [template 模板类型权限]
     * @param  {[type]} text        [description]
     * @param  {[type]} data        [description]
     * @param  {[type]} settings    [description]
     * @param  {[type]} oldSettings [description]
     * @return {[type]}             [description]
     */
    template(text, data, settings, oldSettings) {
        let template = _.template(text, settings, oldSettings);
        let html = template(data);
        let tplEl = $(html),
            permisEl = tplEl.has('[data-permis]') ? tplEl.find('[data-permis]') : null;
        if (permisEl) {
            permisEl.each(function(index, el) {
                let thePermis = tplEl.find(el).data('permis');
                if (_.isObject(thePermis)) {
                    let module = thePermis.module,
                        operate = thePermis.operate,
                        hide = thePermis.hide,
                        userId = thePermis.userid || 0;
                    if (hide) {
                        if (!Lego.permis.check(module, operate, userId)) {
                            tplEl.find(el).remove();
                        }
                    }
                }
            });
        }
        return tplEl[0];
    }
}

const permisObj = Lego.permis = new Permis();

/**
 * [on 事件类型权限]
 * @param  {[type]}   elem     [description]
 * @param  {[type]}   types    [description]
 * @param  {[type]}   selector [description]
 * @param  {[type]}   data     [description]
 * @param  {Function} fn       [description]
 * @param  {[type]}   one      [description]
 * @return {[type]}            [description]
 */
function on(elem, types, selector, data, fn, one) {
    var origFn, type;
    if (typeof types === "object") {
        if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined;
        }
        for (type in types) {
            on(elem, type, selector, data, types[type], one);
        }
        return elem;
    }
    if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
    } else if (fn == null) {
        if (typeof selector === "string") {
            fn = data;
            data = undefined;
        } else {
            fn = data;
            data = selector;
            selector = undefined;
        }
    }
    if (fn === false) {
        fn = function() {
            return false;
        };
    } else if (!fn) {
        return elem;
    }
    if (one === 1) {
        origFn = fn;
        fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
        var callback = function(event) {
            var thePermis = $(this).data('permis');
            if (_.isObject(thePermis)) {
                var module = thePermis.module,
                    operate = thePermis.operate,
                    hide = thePermis.hide,
                    msg = thePermis.msg,
                    userId = thePermis.userid;
                if (!parseInt(hide)) {
                    if (!Lego.permis.check(module, operate, userId)) {
                        if (msg) Lego.permis.options.showMsg(msg);
                        event.stopPropagation();
                        return;
                    }
                }
            }
            var _fn = fn.bind(this);
            _fn(event);
        };
        if (types.indexOf('click') == 0) {
            jQuery.event.add(this, types, callback, data, selector);
        } else {
            jQuery.event.add(this, types, fn, data, selector);
        }
    });
}
$.fn.extend({
    on: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn);
    }
});

export default permisObj;
