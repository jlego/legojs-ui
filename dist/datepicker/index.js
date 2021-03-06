/**
 * datepicker.js v0.12.6
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var moment = _interopDefault(require("moment"));

var moment_locale_zhCn = require("moment/locale/zh-cn");

var bootstrapDatetimepickerCjs = require("bootstrap-datetimepicker-cjs");

var bootstrapDatetimepickerCjs_css_bootstrapDatetimepicker_css = require("bootstrap-datetimepicker-cjs/css/bootstrap-datetimepicker.css");

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

var _templateObject = taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        ~\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group input-daterange datepicker date">\n                    <input type="text" class="form-control startDate ', '" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        ~\n                    </span>\n                    <input type="text" class="form-control endDate ', '" value="', '" name="', '" placeholder="', '">\n                </div>\n            </div>\n            ' ]);

var _templateObject2 = taggedTemplateLiteral([ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ], [ '\n            <div class="lego-datepicker">\n                <div class="input-group date">\n                    <input class="form-control dp-input ', '" type="text" value="', '" name="', '" placeholder="', '">\n                    <span class="input-group-addon">\n                        <i class="anticon anticon-', '"></i>\n                    </span>\n                </div>\n            </div>\n            ' ]);

var _templateObject3 = taggedTemplateLiteral([ "<div></div>" ], [ "<div></div>" ]);

moment.locale("zh-cn");

function formatDate(dateStr) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
    return format && dateStr ? moment(dateStr, "YYYY-MM-DD HH:mm:ss").format(format) : dateStr;
}

var Datepicker = function(_Lego$UI$Baseview) {
    inherits(Datepicker, _Lego$UI$Baseview);
    function Datepicker() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Datepicker);
        var options = {
            events: {
                click: "onclick",
                "click .input-group-addon": "showpanel"
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
            minDate: "",
            maxDate: "",
            useCurrent: false,
            setting: {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, options));
        _this.initDatepicker();
        return _this;
    }
    createClass(Datepicker, [ {
        key: "initDatepicker",
        value: function initDatepicker() {
            var _this2 = this;
            var opts = this.options;
            this.oldValue = formatDate(opts.value, opts.format);
            Object.assign(opts.setting, {
                format: opts.format,
                keepOpen: opts.keepOpen,
                showClose: opts.showClose,
                showClear: opts.showClear,
                inline: opts.inline
            });
            var that = this, theEl = opts.inline ? opts.el : ".input-group input";
            if (opts.type !== "range") {
                var $theEl = this.$(theEl);
                if (opts.inline) {
                    $theEl = this.$el;
                }
                $theEl.datepicker(opts.setting);
                $theEl.on("dp.change", function(event) {
                    var value = $(this).val();
                    if (typeof opts.onChange == "function") {
                        opts.onChange(that, formatDate(value, opts.format));
                    }
                });
            } else {
                (function() {
                    var startEl = ".startDate", endEl = ".endDate";
                    if (!opts.startInputEl && !opts.endInputEl) {
                        var startDateOpts = Object.assign({}, opts.setting);
                        if (opts.minDate) {
                            startDateOpts.minDate = opts.minDate;
                        }
                        var endDateOpts = Object.assign({}, _extends({}, opts.setting, {
                            useCurrent: opts.useCurrent
                        }));
                        if (opts.maxDate) {
                            startDateOpts.maxDate = opts.maxDate;
                        }
                        var startDate = _this2.$(startEl).datepicker(startDateOpts);
                        var endDate = _this2.$(endEl).datepicker(endDateOpts);
                        _this2.$(startEl).on("dp.change", function(e) {
                            that.$(endEl).data("DateTimePicker").minDate(e.date);
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, formatDate(that.$(startEl).val(), opts.format), "start");
                            }
                        });
                        _this2.$(endEl).on("dp.change", function(e) {
                            that.$(startEl).data("DateTimePicker").maxDate(e.date);
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, formatDate(that.$(endEl).val(), opts.format), "end");
                            }
                        });
                    } else if (opts.startInputEl || opts.endInputEl) {
                        (function() {
                            var selector = opts.startInputEl || opts.endInputEl;
                            if (opts.startInputEl) {
                                opts.setting.useCurrent = false;
                            }
                            _this2.$(theEl).datepicker(opts.setting);
                            if (opts.endInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").maxDate(e.date);
                                    if (typeof opts.onChange == "function") {
                                        opts.onChange(that, formatDate(_el.val(), opts.format), "start");
                                    }
                                });
                            } else if (opts.startInputEl) {
                                _this2.$(theEl).on("dp.change", function(e) {
                                    var _el = selector instanceof $ ? selector : $(selector).find(theEl);
                                    _el.data("DateTimePicker").minDate(e.date);
                                    if (typeof opts.onChange == "function") {
                                        opts.onChange(that, formatDate(_el.val(), opts.format), "end");
                                    }
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
            var opts = this.options || {};
            var vDom = "";
            if (opts.type == "range" && !opts.startInputEl && !opts.endInputEl) {
                vDom = hx(_templateObject, opts.disabled ? "disabled" : "", formatDate(opts.startValue, opts.format), opts.startName, opts.startPlaceholder, opts.disabled ? "disabled" : "", formatDate(opts.endValue, opts.format), opts.endName, opts.endPlaceholder);
            }
            if (opts.type !== "range" || opts.type == "range" && opts.startInputEl && opts.endInputEl) {
                vDom = hx(_templateObject2, opts.disabled ? "disabled" : "", formatDate(val(opts.value), opts.format), opts.name, opts.placeholder, opts.type == "time" ? "clock-circle-o" : "calendar");
            }
            if (opts.inline) {
                vDom = hx(_templateObject3);
            }
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
        key: "getPeriod",
        value: function getPeriod(type) {
            var startDate = void 0, endDate = void 0;
            if (moment) {
                switch (type) {
                  case 0:
                    startDate = moment().format("YYYY-MM-DD");
                    endDate = moment().format("YYYY-MM-DD");
                    break;

                  case 1:
                    startDate = moment().day(0).format("YYYY-MM-DD");
                    endDate = moment().day(6).format("YYYY-MM-DD");
                    break;

                  case 2:
                    startDate = moment().format("YYYY-MM-01");
                    endDate = moment(startDate).add(1, "months").subtract(1, "days").format("YYYY-MM-DD");
                    break;

                  case 3:
                    startDate = moment().format("YYYY-01-01");
                    endDate = moment().format("YYYY-12-31");
                    break;
                }
            } else {
                debug.warn("依赖的moment.js插件还没安装");
            }
            return {
                startDate: startDate,
                endDate: endDate
            };
        }
    } ]);
    return Datepicker;
}(Lego.UI.Baseview);

Lego.components("datepicker", Datepicker);

module.exports = Datepicker;
