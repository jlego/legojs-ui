/**
 * permis.js v0.3.47
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Permis = function() {
    function Permis() {
        _classCallCheck(this, Permis);
        this.options = {
            userId: 0,
            operateHash: function operateHash() {},
            manageHash: function manageHash() {},
            users: function users() {},
            message: function message() {}
        };
    }
    _createClass(Permis, [ {
        key: "init",
        value: function init() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var that = this;
            var ajaxConfig = {
                url: "",
                data: {},
                error: function error(_error) {
                    debug.error("加载权限数据失败");
                }
            };
            var options = {
                userId: 0,
                operate: {},
                manage: {}
            };
            Object.assign(options, opts);
            this.options.userId = options.userId;
            if (options.operate.url) {
                var operateAjaxConfig = $.extend({}, ajaxConfig, options.operate);
                operateAjaxConfig.success = function(result) {
                    that.options.operateHash = result;
                };
                $.ajax(operateAjaxConfig);
            }
            if (options.manage.url) {
                var manageAjaxConfig = $.extend({}, ajaxConfig, options.manage);
                manageAjaxConfig.success = function(result) {
                    that.options.manageHash = result;
                };
                $.ajax(manageAjaxConfig);
            }
            Lego.setting("permit", function() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var module = opts.module, operate = opts.operate, userId = opts.userid;
                return Lego.UI.permis.check(module, operate, userId);
            });
        }
    }, {
        key: "check",
        value: function check(module, operate, userId) {
            var user_id = this.options.userId, operateHash = typeof this.options.operateHash == "function" ? this.options.operateHash() : this.options.operateHash, manageHash = typeof this.options.manageHash == "function" ? this.options.manageHash() : this.options.manageHash, users = typeof this.options.users == "function" ? this.options.users() : this.options.users;
            if (!userId || userId === user_id) {
                if (module) {
                    if (operateHash[module]) {
                        return operateHash[module][operate];
                    } else {
                        return false;
                    }
                }
                return true;
            } else {
                var theDepartment = void 0, result = void 0;
                if (Array.isArray(users)) {
                    result = users.find(function(user) {
                        return user.id == userId;
                    });
                    if (result) {
                        theDepartment = result.deptId;
                    }
                }
                if (theDepartment) {
                    if (manageHash[theDepartment]) {
                        if (manageHash[theDepartment][module]) {
                            return manageHash[theDepartment][module][operate];
                        } else {
                            return manageHash[theDepartment][module + ":" + operate];
                        }
                    }
                }
                return true;
            }
        }
    } ]);
    return Permis;
}();

var permisObj = new Permis();

function _on(elem, types, selector, data, fn, one) {
    var origFn = void 0, type = void 0;
    if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
        if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined;
        }
        for (type in types) {
            _on(elem, type, selector, data, types[type], one);
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
        fn = function fn() {
            return false;
        };
    } else if (!fn) {
        return elem;
    }
    if (one === 1) {
        origFn = fn;
        fn = function fn(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
        var callback = function callback(event) {
            var thePermis = $(this).data("permis");
            if ((typeof thePermis === "undefined" ? "undefined" : _typeof(thePermis)) == "object") {
                var module = thePermis.module, operate = thePermis.operate, msg = thePermis.message, userId = thePermis.userid;
                if (!Lego.permis.check(module, operate, userId)) {
                    if (msg) Lego.permis.options.message(msg);
                    event.stopPropagation();
                    return;
                }
            }
            var _fn = fn.bind(this);
            _fn(event);
        };
        if (types.indexOf("click") == 0) {
            jQuery.event.add(this, types, callback, data, selector);
        } else {
            jQuery.event.add(this, types, fn, data, selector);
        }
    });
}

$.fn.extend({
    on: function on(types, selector, data, fn) {
        return _on(this, types, selector, data, fn);
    }
});

Lego.components("permis", permisObj);

module.exports = permisObj;
