/**
 * baseview.js v0.12.1
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var perfectScrollbar = _interopDefault(require("perfect-scrollbar"));

var perfectScrollbar_dist_css_perfectScrollbar_css = require("perfect-scrollbar/dist/css/perfect-scrollbar.css");

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

var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

var taggedTemplateLiteral = function(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
};

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ], [ '\n        <div class="lego-loading">\n            <div class="lego-icon ', "\n            ", " lego-spin-", '">\n            </div>\n            ', "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<div class="lego-spin-text">', "</div>" ], [ '<div class="lego-spin-text">', "</div>" ]);

var Loading = function(_Lego$View) {
    inherits(Loading, _Lego$View);
    function Loading() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Loading);
        var options = {
            spinning: true,
            size: "",
            tip: "",
            icon: "anticon anticon-loading-3-quarters"
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, options));
    }
    createClass(Loading, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            this.vDom = hx(_templateObject, Lego.config.spinning && opts.spinning ? "lego-spin" : "", val(opts.icon), val(opts.size), opts.tip ? hx(_templateObject2, opts.tip) : "");
            return this.vDom;
        }
    } ]);
    return Loading;
}(Lego.View);

Lego.components("loading", Loading);

var Permis = function() {
    function Permis() {
        classCallCheck(this, Permis);
        this.options = {
            userId: 0,
            operateHash: {},
            manageHash: {},
            adminHash: {},
            users: {},
            isSuper: false,
            isAdmin: false,
            message: function message(msg) {
                Lego.UI.Util.message("error", msg);
            }
        };
    }
    createClass(Permis, [ {
        key: "init",
        value: function init() {
            var _this = this;
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (opts.operateHash) {
                opts.operateHash = typeof opts.operateHash == "function" ? opts.operateHash() : opts.operateHash;
            }
            if (opts.manageHash) {
                opts.manageHash = typeof opts.manageHash == "function" ? opts.manageHash() : opts.manageHash;
            }
            if (opts.adminHash) {
                opts.adminHash = typeof opts.adminHash == "function" ? opts.adminHash() : opts.adminHash;
            }
            if (opts.users) {
                opts.users = typeof opts.users == "function" ? opts.users() : opts.users;
            }
            Object.assign(this.options, opts);
            if (Array.isArray(this.options.users)) {
                (function() {
                    var usersObj = {};
                    _this.options.users.forEach(function(user, index) {
                        usersObj[user.id] = user;
                    });
                    _this.options.users = usersObj;
                })();
            }
        }
    }, {
        key: "check",
        value: function check(module, operate, userId) {
            var user_id = this.options.userId, operateHash = this.options.operateHash, manageHash = this.options.manageHash, adminHash = this.options.adminHash, users = this.options.users;
            if (!this.options.isSuper) {
                if (!userId || userId === user_id) {
                    if (adminHash[module]) {
                        if (this.options.isAdmin) {
                            return adminHash[module][operate];
                        } else {
                            if (adminHash[module][operate]) {
                                if (operateHash[module]) {
                                    return operateHash[module][operate];
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return false;
                    }
                } else {
                    var theDepartment = void 0, result = users[userId];
                    if (result) {
                        theDepartment = result.departmentId;
                    }
                    if (!this.options.isAdmin) {
                        if (theDepartment) {
                            if (manageHash[theDepartment]) {
                                if (manageHash[theDepartment][module]) {
                                    return manageHash[theDepartment][module][operate];
                                } else {
                                    return manageHash[theDepartment][module + ":" + operate];
                                }
                            }
                        }
                    }
                }
            }
            return true;
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
                if (!Lego.UI.permis.check(module, operate, userId)) {
                    if (msg) {
                        Lego.UI.permis.options.message(msg);
                    }
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

window.Ps = perfectScrollbar;

window.val = function(value, defaultValue) {
    return value ? typeof value == "function" ? value(defaultValue) : value : defaultValue || "";
};

var Baseview = function(_Lego$View) {
    inherits(Baseview, _Lego$View);
    function Baseview() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Baseview);
        var options = {
            events: null,
            loading: false
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Baseview.__proto__ || Object.getPrototypeOf(Baseview)).call(this, options));
        _this.setEvent();
        _this.renderScroll();
        return _this;
    }
    createClass(Baseview, [ {
        key: "setEvent",
        value: function setEvent() {
            this.unBindEvents();
            this.delegateEvents();
            return this;
        }
    }, {
        key: "bindEvents",
        value: function bindEvents(eventName, selector, listener) {
            this.$el.on(eventName + ".delegateEvents" + this.options.vid, selector, listener);
            return this;
        }
    }, {
        key: "unBindEvents",
        value: function unBindEvents() {
            if (this.$el) {
                this.$el.off(".delegateEvents" + this.options.vid);
            }
            return this;
        }
    }, {
        key: "delegateEvents",
        value: function delegateEvents() {
            var this$1 = this;
            var events = this.options.events;
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            if (!events) {
                return this;
            }
            for (var key in events) {
                var method = events[key];
                if (typeof method !== "function") {
                    method = this$1[method];
                }
                if (!method) {
                    continue;
                }
                var match = key.match(delegateEventSplitter);
                this$1.bindEvents(match[1], match[2], method.bind(this$1));
            }
            return this;
        }
    }, {
        key: "_showLoading",
        value: function _showLoading() {
            var opts = this.options;
            this.loadingView = Lego.getView("#lego-loading-" + opts.vid);
            if (!this.loadingView) {
                this.addCom(Object.assign({
                    el: "#lego-loading-" + opts.vid
                }, opts.loading || {}));
                this._renderComponents();
                this.$el.css("position", "relative");
            } else {
                this.loadingView.$el.fadeIn("fast");
            }
        }
    }, {
        key: "_hideLoading",
        value: function _hideLoading() {
            var opts = this.options;
            this.loadingView = Lego.getView("#lego-loading-" + opts.vid);
            if (this.loadingView) {
                this.loadingView.$el.fadeOut("fast");
            }
            if (Array.isArray(opts.data)) {
                opts.nodata = !opts.data.length ? true : false;
            }
        }
    }, {
        key: "renderScroll",
        value: function renderScroll() {
            var opts = this.options, that = this;
            function initScroll($el) {
                $el.each(function(index, el) {
                    var container = $(this), eventName = "scroll.ps" + index;
                    if (!container.hasClass("ps-container")) {
                        container.css("position", "relative");
                        Ps.initialize(container[0], opts.scrollbar);
                        that.$el.off(eventName).on(eventName, function() {
                            Ps.update(container[0]);
                        });
                    }
                });
            }
            if (opts.scrollbar) {
                var scrollbarEl = this.$(".scrollbar").length ? this.$(".scrollbar") : [];
                if (scrollbarEl.length) {
                    initScroll(scrollbarEl);
                }
                if (this.$el.hasClass("scrollbar")) {
                    initScroll(this.$el);
                }
            }
        }
    }, {
        key: "importWidget",
        value: function importWidget(comName, callback) {
            var that = this;
            if (/\.js/g.test(comName)) {
                Lego.loadScript(comName, function() {
                    if (typeof callback == "function") {
                        callback(that);
                    }
                }, comName);
            } else {
                if (!Lego.UI[comName]) {
                    Lego.loadCss(Lego.config.rootUri + "widget/" + comName + "/app.css", comName);
                    Lego.loadScript(Lego.config.rootUri + "widget/" + comName + "/app.js", function() {
                        if (typeof callback == "function") {
                            callback(that);
                        }
                    }, comName);
                } else {
                    if (typeof callback == "function") {
                        callback(this);
                    }
                }
            }
        }
    } ]);
    return Baseview;
}(Lego.View);

Lego.components("Baseview", Baseview);

module.exports = Baseview;
