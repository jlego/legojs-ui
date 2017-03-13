/**
 * datepicker.js v0.3.9
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var moment$1 = require("moment");

var moment_locale_zhCn = require("moment/locale/zh-cn");

var bootstrapDatetimepickerCjs = require("bootstrap-datetimepicker-cjs");

var bootstrapDatetimepickerCjs_css_bootstrapDatetimepicker_css = require("bootstrap-datetimepicker-cjs/css/bootstrap-datetimepicker.css");

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
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

var _templateObject = _taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        至\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ]);

var _templateObject3 = _taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

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

function formatDate(dateStr) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
    return format && dateStr ? moment(dateStr, "YYYY-MM-DD HH:mm:ss").format(format) : dateStr;
}

var Datepicker = function(_Lego$UI$Baseview) {
    _inherits(Datepicker, _Lego$UI$Baseview);
    function Datepicker() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Datepicker);
        var options = {
            events: {
                click: "onclick",
                "click .input-group-addon": "showpanel",
                "blur input": "onBlur"
            },
            type: "date",
            name: "",
            placeholder: "选择时间",
            disabled: false,
            inline: false,
            keepOpen: false,
            showClose: false,
            showClear: false,
            size: "default",
            format: opts.type == "time" ? "LT" : "YYYY-MM-DD HH:mm:ss",
            value: null,
            startInputEl: "",
            startName: opts.name,
            startValue: "",
            startPlaceholder: "开始时间",
            endInputEl: "",
            endName: "",
            endValue: "",
            endPlaceholder: "结束时间",
            useCurrent: false,
            setting: {},
            onBlur: function onBlur() {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, options));
        _this.initDatepicker();
        return _this;
    }
    _createClass(Datepicker, [ {
        key: "initDatepicker",
        value: function initDatepicker() {
            var _this2 = this;
            var options = this.options;
            this.oldValue = formatDate(options.value, options.format);
            Object.assign(options.setting, {
                format: options.format,
                keepOpen: options.keepOpen,
                showClose: options.showClose,
                showClear: options.showClear,
                inline: options.inline
            });
            var that = this, theEl = options.inline ? options.el : ".input-group input";
            if (options.type !== "range") {
                var $theEl = this.$(theEl);
                if (options.inline) $theEl = this.$el;
                $theEl.datepicker(options.setting);
                $theEl.on("dp.change", function(event) {
                    var value = $(this).val();
                    if (typeof options.onChange == "function") options.onChange(that, formatDate(value, options.format));
                });
            } else {
                (function() {
                    var startEl = ".startDate", endEl = ".endDate";
                    if (!options.startInputEl && !options.endInputEl) {
                        var startDateOpts = Object.assign({}, options.setting);
                        var endDateOpts = Object.assign({}, _extends({}, options.setting, {
                            useCurrent: options.useCurrent
                        }));
                        var startDate = _this2.$(startEl).datepicker(startDateOpts);
                        var endDate = _this2.$(endEl).datepicker(endDateOpts);
                        _this2.$(startEl).on("dp.change", function(e) {
                            that.$(endEl).data("DateTimePicker").minDate(e.date);
                        });
                        _this2.$(endEl).on("dp.change", function(e) {
                            that.$(startEl).data("DateTimePicker").maxDate(e.date);
                        });
                    } else if (options.startInputEl || options.endInputEl) {
                        (function() {
                            var selector = options.startInputEl || options.endInputEl;
                            if (options.startInputEl) options.setting.useCurrent = false;
                            _this2.$(theEl).datepicker(options.setting);
                            if (options.endInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").maxDate(e.date);
                                });
                            } else if (options.startInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").minDate(e.date);
                                });
                            }
                        })();
                    }
                })();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.options || {};
            var vDom = "";
            if (options.type == "range" && !options.startInputEl && !options.endInputEl) {
                vDom = hx(_templateObject, options.disabled ? "disabled" : "", formatDate(options.startValue, options.format), options.startName, options.startPlaceholder, options.disabled ? "disabled" : "", formatDate(options.endValue, options.format), options.endName, options.endPlaceholder);
            }
            if (options.type !== "range" || options.type == "range" && options.startInputEl && options.endInputEl) {
                vDom = hx(_templateObject2, options.disabled ? "disabled" : "", formatDate(val(options.value), options.format), options.name, options.placeholder, options.type == "time" ? "clock-circle-o" : "calendar");
            }
            if (options.inline) vDom = hx(_templateObject3);
            return vDom;
        }
    }, {
        key: "onclick",
        value: function onclick(event) {
            event.stopPropagation();
        }
    }, {
        key: "showpanel",
        value: function showpanel(event) {
            var target = $(event.currentTarget), input = target.prev("input");
            input.focus();
        }
    }, {
        key: "onBlur",
        value: function onBlur(event) {
            event.stopPropagation();
            var target = $(event.currentTarget), value = target.val();
            if (typeof this.options.onBlur == "function") this.options.onBlur(this, formatDate(value, this.options.format));
        }
    } ]);
    return Datepicker;
}(Lego.UI.Baseview);

Lego.components("datepicker", Datepicker);

module.exports = Datepicker;
