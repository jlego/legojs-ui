/**
 * collapse.js v0.2.7
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

var Collapse = function() {
    function Collapse(opts, callback) {
        _classCallCheck(this, Collapse);
        var options = {
            direction: "updown",
            target: "",
            onChange: function onChange() {}
        };
        var that = this;
        this.callback = callback;
        if ((typeof opts === "undefined" ? "undefined" : _typeof(opts)) == "object") {
            Object.assign(options, opts);
            options.target = options.target instanceof $ ? options.target : $(options.target);
            if (!options.target.length) return;
            if (!options.target.hasClass("collapse")) options.target.addClass("collapse");
            this.callback = options.onChange;
            if (options.direction == "updown") {
                if (options.target.hasClass("show")) {
                    options.target.slideDown("normal", function() {
                        that.handler($(this));
                    });
                } else {
                    options.target.slideUp("normal", function() {
                        that.handler($(this));
                    });
                }
            } else {
                options.target.slideToggle("normal", function() {
                    that.handler($(this));
                });
            }
        }
        if (typeof opts == "string") {
            var target = opts instanceof $ ? opts : $(opts);
            if (!target.length) return;
            if (!target.hasClass("collapse")) target.addClass("collapse");
            target.slideToggle("normal", function() {
                that.handler($(this));
            });
        }
    }
    _createClass(Collapse, [ {
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
