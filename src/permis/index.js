/**
 * 权限控制类
 */
class Permis {
    constructor() {
        this.options = {
            userId: 0, //当前用户ID
            operateHash: {}, //操作权限对象
            manageHash: {}, //管理权限对象
            adminHash: {},  //管理员权限
            users: {}, //所有用户列表 (array 或 function)
            isSuper: false,  //超级管理员
            isAdmin: false,  //管理员
            message(msg) { //提示信息回调
                Lego.UI.Util.message('error', msg);
            }
        };
    }
    /**
     * [init 初始化数据]
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    init(opts = {}) {
        if(opts.operateHash) opts.operateHash = typeof opts.operateHash == 'function' ? opts.operateHash() : opts.operateHash;
        if(opts.manageHash) opts.manageHash = typeof opts.manageHash == 'function' ? opts.manageHash() : opts.manageHash;
        if(opts.adminHash) opts.adminHash = typeof opts.adminHash == 'function' ? opts.adminHash() : opts.adminHash;
        if(opts.users) opts.users = typeof opts.users == 'function' ? opts.users() : opts.users;
        Object.assign(this.options, opts);
        if(Array.isArray(this.options.users)){
            let usersObj = {};
            this.options.users.forEach((user, index) => {
                usersObj[user.id] = user;
            });
            this.options.users = usersObj;
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
            operateHash = this.options.operateHash,
            manageHash = this.options.manageHash,
            adminHash = this.options.adminHash,
            users = this.options.users;
        if(!this.options.isSuper){
            if (!userId || userId === user_id) {
                // 当前用户操作
                if (adminHash[module]) {
                    if(this.options.isAdmin){
                        return adminHash[module][operate];
                    }else{
                        if(adminHash[module][operate]){
                            if (operateHash[module]) {
                                return operateHash[module][operate];
                            } else {
                                return false;
                            }
                        }else{
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            } else {
                // 管理操作
                let theDepartment,
                    result = users[userId];
                if (result) theDepartment = result.departmentId;
                if(!this.options.isAdmin){
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
                }
            }
        }
        return true;
    }
}
const permisObj = new Permis();

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
                if (!Lego.UI.permis.check(module, operate, userId)) {
                    if (msg) Lego.UI.permis.options.message(msg);
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
