/**
 * chkgroup.js v0.5.25
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-chkgroup">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-chkgroup">\n        ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                <div class="form-check ', '">\n                  <label class="form-check-label">\n                    <input class="form-check-input" type="', '" name="', '" value="', '" ', " >\n                    ", "\n                  </label>\n                </div>\n                " ], [ '\n                <div class="form-check ', '">\n                  <label class="form-check-label">\n                    <input class="form-check-input" type="', '" name="', '" value="', '" ', " >\n                    ", "\n                  </label>\n                </div>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                <div class="form-check form-check-inline ', '">\n                    <label class="form-check-label">\n                      <input class="form-check-input" type="', '" name="', '" value="', '" ', " >\n                      ", "\n                    </label>\n                </div>\n                " ], [ '\n                <div class="form-check form-check-inline ', '">\n                    <label class="form-check-label">\n                      <input class="form-check-input" type="', '" name="', '" value="', '" ', " >\n                      ", "\n                    </label>\n                </div>\n                " ]);

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

var Chkgroup = function(_Lego$UI$Baseview) {
    _inherits(Chkgroup, _Lego$UI$Baseview);
    function Chkgroup() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Chkgroup);
        var options = {
            layout: "vertical",
            type: "checkbox",
            name: "",
            data: [],
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Chkgroup.__proto__ || Object.getPrototypeOf(Chkgroup)).call(this, options));
    }
    _createClass(Chkgroup, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.data.map(function(item) {
                if (opts.layout == "vertical") {
                    return hx(_templateObject2, item.disabled ? "disabled" : "", opts.type, opts.name, item.value, item.checked ? "checked" : "", val(item.label));
                } else {
                    return hx(_templateObject3, item.disabled ? "disabled" : "", opts.type, opts.name, item.value, item.checked ? "checked" : "", val(item.label));
                }
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, that = this;
            this.$(".form-check-input").change(function() {
                var val = that.$("input.form-check-input:checked").val(), findOne = opts.data.find(function(item) {
                    return item.value == val;
                });
                if (typeof opts.onChange == "function") opts.onChange(that, findOne);
            });
        }
    } ]);
    return Chkgroup;
}(Lego.UI.Baseview);

Lego.components("chkgroup", Chkgroup);

module.exports = Chkgroup;
