/**
 * inputs.js v0.3.46
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var _templateObject = _taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ], [ '\n            <div class="input-group ', '">\n              ', '\n              <input type="', '" class="form-control" placeholder="', '"\n              value="', '" name="', '" ', " ", "/>\n              ", "\n            </div>\n            " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<span class="input-group-addon">', "</span>" ], [ '<span class="input-group-addon">', "</span>" ]);

var _templateObject4 = _taggedTemplateLiteral([ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', " ", ">", "</textarea>\n                " ], [ '\n                  <textarea type="textarea" class="form-control ', '" placeholder="', '" name="', '"\n                  ', " ", ">", "</textarea>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral([ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', " ", "/>\n                " ], [ '\n                  <input type="', '" class="form-control ', '" placeholder="', '"\n                  value="', '" name="', '" ', " ", "/>\n                " ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}

var Inputs = function(_Lego$UI$Baseview) {
    _inherits(Inputs, _Lego$UI$Baseview);
    function Inputs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Inputs);
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
        var _this = _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this, options));
        if (options.preAddon || options.nextAddon) {
            var onEnterFun = _this.onEnter.bind(_this);
            var onChangeFun = _this.onChange.bind(_this);
            _this.$("input").keydown(onEnterFun);
            _this.$("input").change(onChangeFun);
        }
        return _this;
    }
    _createClass(Inputs, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = hx(_templateObject), value = options.value ? Lego.UI.Util.unFilterTag(options.value.toString()) : "";
            if (options.preAddon || options.nextAddon) {
                vDom = hx(_templateObject2, options.size ? "input-group-" + options.size : "", options.preAddon ? hx(_templateObject3, options.preAddon) : "", options.type, options.placeholder, val(value), options.name, options.disabled ? "disabled" : "", options.readonly ? "readonly" : "", options.nextAddon ? hx(_templateObject3, options.nextAddon) : "");
            } else {
                if (options.type == "textarea") {
                    vDom = hx(_templateObject4, options.size ? "form-control-" + options.size : "", options.placeholder, options.name, options.disabled ? "disabled" : "", options.readonly ? "readonly" : "", val(value));
                } else {
                    vDom = hx(_templateObject5, options.type, options.size ? "form-control-" + options.size : "", options.placeholder, val(options.value), options.name, options.disabled ? "disabled" : "", options.readonly ? "readonly" : "");
                }
            }
            return vDom;
        }
    }, {
        key: "filterStr",
        value: function filterStr(str) {
            return str;
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
