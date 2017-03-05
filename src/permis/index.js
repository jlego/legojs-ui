/**
 * 权限控制类
 */
class Permis {
    constructor(option = {}) {
        this.options = {
            userId: 0, //当前用户ID
            operateHash() {}, //操作权限对象
            manageHash() {}, //管理权限对象
            users() {}, //所有用户列表 (array 或 function)
            message() {} //提示信息回调
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
        if (option) Object.assign(this.options, option);

        if (this.options.operateHash.url) {
            let operateAjaxConfig = $.extend({}, ajaxConfig, this.options.operateHash);
            operateAjaxConfig.success = function(result) {
                that.options.operateHash = result;
            };
            $.ajax(operateAjaxConfig);
        }
        if (this.options.manageHash.url) {
            let manageAjaxConfig = $.extend({}, ajaxConfig, this.options.manageHash);
            manageAjaxConfig.success = function(result) {
                that.options.manageHash = result;
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
        let user_id = this.options.userId,
            operateHash = typeof this.options.operateHash == 'function' ? this.options.operateHash() : this.options.operateHash,
            manageHash = typeof this.options.manageHash == 'function' ? this.options.manageHash() : this.options.manageHash,
            users = typeof this.options.users == 'function' ? this.options.users() : this.options.users;
        if (!userId || userId === user_id) {
            // 当前用户操作
            if (module) {
                if (operateHash[module]) {
                    return operateHash[module][operate];
                } else {
                    return 0;
                }
            }
            return 1;
        } else {
            // 管理操作
            let theDepartment, result;
            if (Array.isArray(users)) {
                // 纯json
                result = users.find(user => user.id == userId);
                if (result) {
                    theDepartment = result.deptId;
                }
            }
            if (theDepartment) {
                if (manageHash[theDepartment]) {
                    if (manageHash[theDepartment][module]) {
                        // 使用新数据格式
                        return manageHash[theDepartment][module][operate];
                    } else {
                        // 兼容旧数据格式
                        return manageHash[theDepartment][module + ':' + operate];
                    }
                }
            }
            return 1;
        }
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
    let origFn, type;
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
        let callback = function(event) {
            let thePermis = $(this).data('permis');
            if (typeof thePermis == 'object') {
                let module = thePermis.module,
                    operate = thePermis.operate,
                    msg = thePermis.message,
                    userId = thePermis.userid;
                if (!Lego.permis.check(module, operate, userId)) {
                    if (msg) Lego.permis.options.message(msg);
                    event.stopPropagation();
                    return;
                }
            }
            let _fn = fn.bind(this);
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

Lego.components('permis', permisObj);
export default permisObj;
