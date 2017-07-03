/**
 * inputs.js v0.9.54
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

var _templateObject = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2 = taggedTemplateLiteral([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', "/>\n              ", "\n            </div>\n            " ]);

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
            var vDom = hx(_templateObject), value = opts.value ? Lego.UI.Util.unFilterTag(opts.value.toString()) : "";
            if (opts.preAddon || opts.nextAddon) {
                vDom = hx(_templateObject2, opts.size ? "input-group-" + opts.size : "", opts.preAddon ? hx(_templateObject3, opts.preAddon) : "", opts.type, opts.placeholder, value !== 0 ? val(value) : value, opts.name, opts.disabled ? "disabled" : "", opts.nextAddon ? hx(_templateObject3, opts.nextAddon) : "");
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
            if (opts.readonly) inputEl.attr("readonly", "readonly");
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
            this.options.value = value;
            if (this.options.type == "textarea") target.val(value);
            if (event.keyCode == 13) {
                if (typeof this.options.onEnter === "function") this.options.onEnter(this, value, event);
            }
        }
    }, {
        key: "onChange",
        value: function onChange(event) {
            var target = $(event.currentTarget), value = this.filterStr(target.val());
            this.options.value = value;
            this.refresh();
            if (typeof this.options.onChange === "function") this.options.onChange(this, value, event);
        }
    } ]);
    return Inputs;
}(Lego.UI.Baseview);

Lego.components("inputs", Inputs);

module.exports = Inputs;
