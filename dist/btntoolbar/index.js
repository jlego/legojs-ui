/**
 * btntoolbar.js v0.12.12
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var _templateObject$1 = taggedTemplateLiteral([ '\n        <div class="lego-btngroup btn-group btn-group-', '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-btngroup btn-group btn-group-', '">\n        ', "\n        </div>\n        " ]);

var _templateObject2$1 = taggedTemplateLiteral([ '\n        <button type="button" class="btn btn-', " ", '">\n            ', "\n        </button>\n        " ], [ '\n        <button type="button" class="btn btn-', " ", '">\n            ', "\n        </button>\n        " ]);

var Btngroup = function(_Lego$UI$Baseview) {
    inherits(Btngroup, _Lego$UI$Baseview);
    function Btngroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Btngroup);
        var options = {
            events: {
                "click button": "onClick"
            },
            size: "",
            data: [],
            onClick: function onClick() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Btngroup.__proto__ || Object.getPrototypeOf(Btngroup)).call(this, options));
    }
    createClass(Btngroup, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            var vDom = hx(_templateObject$1, options.size, options.data.map(function(item) {
                return hx(_templateObject2$1, item.type || "secondary", item.active ? "active" : "", val(item.html || item.text));
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$("button").each(function(index, item) {
                $(item).data("index", index);
            });
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), index = target.data("index"), model = this.options.data[index];
            if (typeof this.options.onClick === "function") {
                this.options.onClick(this, model, event);
            }
        }
    } ]);
    return Btngroup;
}(Lego.UI.Baseview);

Lego.components("btngroup", Btngroup);

var _templateObject$2 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2$2 = taggedTemplateLiteral([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ]);

var _templateObject3 = taggedTemplateLiteral([ '<span class="input-group-addon">', "</span>" ], [ '<span class="input-group-addon">', "</span>" ]);

var _templateObject4 = taggedTemplateLiteral([ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', ">", "</textarea>\n                " ], [ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', ">", "</textarea>\n                " ]);

var _templateObject5 = taggedTemplateLiteral([ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', "/>\n                " ], [ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', "/>\n                " ]);

var Inputs = function(_Lego$UI$Baseview) {
    inherits(Inputs, _Lego$UI$Baseview);
    function Inputs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Inputs);
        var options = {
            events: {
                keyup: "onEnter",
                change: "onChange"
            },
            type: "text",
            value: "",
            placeholder: "",
            name: "",
            filterReg: "",
            disabled: false,
            readonly: false,
            preAddon: "",
            nextAddon: "",
            size: "",
            onChange: function onChange() {},
            onEnter: function onEnter() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this, options));
    }
    createClass(Inputs, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject$2), value = opts.value ? Lego.UI.Util.unFilterTag(opts.value.toString()) : "";
            if (opts.preAddon || opts.nextAddon) {
                vDom = hx(_templateObject2$2, opts.size ? "input-group-" + opts.size : "", opts.preAddon ? hx(_templateObject3, opts.preAddon) : "", opts.type, opts.placeholder, value !== 0 ? val(value) : value, opts.name, opts.disabled ? "disabled" : "", opts.nextAddon ? hx(_templateObject3, opts.nextAddon) : "");
            } else {
                if (opts.type == "textarea") {
                    vDom = hx(_templateObject4, opts.size ? "form-control-" + opts.size : "", opts.placeholder, opts.name, opts.disabled ? "disabled" : "", val(value));
                } else {
                    vDom = hx(_templateObject5, opts.type, opts.size ? "form-control-" + opts.size : "", opts.placeholder, val(opts.value), opts.name, opts.disabled ? "disabled" : "");
                }
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, inputEl = opts.preAddon || opts.nextAddon ? this.$("input") : this.$el;
            if (opts.preAddon || opts.nextAddon) {
                var onEnterFun = this.onEnter.bind(this);
                var onChangeFun = this.onChange.bind(this);
                inputEl.keyup(onEnterFun);
                inputEl.change(onChangeFun);
            }
            if (opts.readonly) {
                inputEl.attr("readonly", "readonly");
            }
        }
    }, {
        key: "filterStr",
        value: function filterStr(str) {
            var opts = this.options, reg = new RegExp(opts.filterReg);
            return opts.filterReg ? str.replace(reg, "") : str;
        }
    }, {
        key: "onEnter",
        value: function onEnter(event) {
            var target = $(event.currentTarget), value = this.filterStr(target.val());
            if (event.keyCode == 13) {
                if (typeof this.options.onEnter === "function") {
                    this.options.onEnter(this, value, event);
                }
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var target = $(event.currentTarget), value = this.filterStr(target.val());
            this.options.value = value;
            this.refresh();
            if (typeof this.options.onChange === "function") {
                this.options.onChange(this, value, event);
            }
        }
    } ]);
    return Inputs;
}(Lego.UI.Baseview);

Lego.components("inputs", Inputs);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="btn-toolbar">\n        ', "\n        </div>\n        " ], [ '\n        <div class="btn-toolbar">\n        ', "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ "comTag(item, index)" ], [ "comTag(item, index)" ]);

var Btntoolbar = function(_Lego$UI$Baseview) {
    inherits(Btntoolbar, _Lego$UI$Baseview);
    function Btntoolbar() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Btntoolbar);
        var options = {
            data: []
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Btntoolbar.__proto__ || Object.getPrototypeOf(Btntoolbar)).call(this, options));
        _this.renderCom();
        return _this;
    }
    createClass(Btntoolbar, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function comTag(item, index) {
                var tagName = item.type == "button" ? "btn-group" : "inputs", tagId = [ item.type, options.vid, index ].join("-");
                item.component.comName ? hx("<" + tagName + ' id="' + tagId + '"></' + tagName + ">") : "";
            }
            var vDom = hx(_templateObject, options.data.map(function(item, index) {
                return hx(_templateObject2);
            }));
            return vDom;
        }
    }, {
        key: "renderCom",
        value: function renderCom() {
            var that = this, options = this.options;
            this.options.data.forEach(function(item, index) {
                var tagId = [ item.type, options.vid, index ].join("-");
                Lego.create(item.type == "button" ? Btngroup : Inputs, Lego.extend({
                    el: "#" + tagId
                }, item));
            });
        }
    } ]);
    return Btntoolbar;
}(Lego.UI.Baseview);

Lego.components("btntoolbar", Btntoolbar);

module.exports = Btntoolbar;
