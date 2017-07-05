/**
 * collapse.js v0.9.58
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function() {
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

var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};

var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent !== null) {
            set(parent, property, value, receiver);
        }
    } else if ("value" in desc && desc.writable) {
        desc.value = value;
    } else {
        var setter = desc.set;
        if (setter !== undefined) {
            setter.call(receiver, value);
        }
    }
    return value;
};

var Collapse = function() {
    function Collapse(opts, callback) {
        classCallCheck(this, Collapse);
        var options = {
            target: "",
            restHeight: 0,
            realHeight: "100%",
            onChange: function onChange() {}
        };
        var that = this;
        this.callback = callback;
        if ((typeof opts === "undefined" ? "undefined" : _typeof(opts)) == "object") {
            Object.assign(options, opts);
            this.options = options;
            this.callback = options.onChange;
            if (options.restHeight) {
                this.showHide(options.target, "animate");
            } else {
                this.showHide(options.target, "slideToggle");
            }
        }
        if (typeof opts == "string") {
            this.showHide(opts, "slideToggle");
        }
    }
    createClass(Collapse, [ {
        key: "showHide",
        value: function showHide(target, type) {
            var that = this;
            target = target instanceof $ ? target : $(target);
            if (!target.length) return;
            if (!target.hasClass("collapse")) target.addClass("collapse");
            if (type == "animate") {
                var height = parseInt(this.options.restHeight);
                var params = !target.hasClass("show") ? {
                    height: this.options.realHeight
                } : {
                    height: height
                };
                target[type](params, "normal", function() {
                    that.handler($(this));
                });
            } else {
                target[type]("normal", function() {
                    that.handler($(this));
                });
            }
        }
    }, {
        key: "handler",
        value: function handler(target) {
            if (typeof this.callback == "function") {
                var result = "";
                if (target.hasClass("show")) {
                    result = "hide";
                    target.removeClass("show");
                } else {
                    result = "show";
                    target.addClass("show");
                }
                this.callback(result, target);
            }
        }
    } ]);
    return Collapse;
}();

var fun = function fun(opts, callback) {
    return new Collapse(opts, callback);
};

Lego.components("collapse", fun);

module.exports = fun;
