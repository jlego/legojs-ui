/**
 * forms.js v0.2.0
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var validate = _interopDefault(require("jquery-validation"));

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

var _templateObject = _taggedTemplateLiteral([ '<button type="submit" class="btn btn-primary">', "</button>" ], [ '<button type="submit" class="btn btn-primary">', "</button>" ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                    <div class="form-group row">\n                      <div class="offset-sm-2 col-sm-10">\n                        <button type="submit" class="btn btn-primary">', "</button>\n                      </div>\n                    </div>\n                    " ], [ '\n                    <div class="form-group row">\n                      <div class="offset-sm-2 col-sm-10">\n                        <button type="submit" class="btn btn-primary">', "</button>\n                      </div>\n                    </div>\n                    " ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                <div class="form-group">\n                    <label for="', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);

var _templateObject5 = _taggedTemplateLiteral([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 col-form-label">', '</label>\n                  <div class="col-sm-10">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 col-form-label">', '</label>\n                  <div class="col-sm-10">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);

var _templateObject7 = _taggedTemplateLiteral([ "<form>\n            ", "\n            ", "</form>" ], [ "<form>\n            ", "\n            ", "</form>" ]);

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

$.fn.validate = validate;

var Forms = function(_Lego$UI$Baseview) {
    _inherits(Forms, _Lego$UI$Baseview);
    function Forms() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Forms);
        var options = {
            layout: "vertical",
            setDefaults: {
                errorClass: "form-control-feedback",
                errorElement: "div",
                errorPlacement: function errorPlacement(error, element) {
                    element.after(error);
                },
                highlight: function highlight(element, errorClass) {
                    $(element).closest(".form-group").addClass("has-danger");
                },
                success: function success(el) {
                    el.closest(".form-group").removeClass("has-danger");
                    el.closest("div.form-control-feedback").remove();
                },
                submitHandler: function submitHandler(form) {
                    console.warn("ddddddddd");
                    form.submit();
                },
                rules: {},
                messages: {}
            },
            submitEl: "",
            submitText: "提 交",
            data: [],
            format: function format(result) {
                return result;
            },
            onSubmit: function onSubmit() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, options));
    }
    _createClass(Forms, [ {
        key: "render",
        value: function render() {
            var options = this.options || {}, that = this;
            function submitBtn() {
                var submit = "";
                if (!options.submitEl) {
                    if (options.layout == "vertical") {
                        submit = hx(_templateObject, options.submitText);
                    } else {
                        submit = hx(_templateObject2, options.submitText);
                    }
                }
                return submit;
            }
            function layoutItem(item, layout, id) {
                var vDom = "";
                var comTag = "<" + val(item.component.comName) + " id=" + id + "></" + val(item.component.comName) + ">";
                if (layout == "vertical") {
                    vDom = hx(_templateObject3, id, val(item.label), hx(comTag), item.help ? hx(_templateObject4, val(item.help)) : "");
                } else {
                    vDom = hx(_templateObject5, id, val(item.label), hx(comTag), item.help ? hx(_templateObject4, val(item.help)) : "");
                }
                return vDom;
            }
            function loopItem(data, index, layout) {
                var vDom = "", comId = [ "component", options.vid, index ];
                if (data.items) {
                    vDom = hx(_templateObject6, val(data.labelClass), val(data.label), data.items.map(function(item, i) {
                        comId.push(i);
                        return layoutItem(item, layout, comId.join("_"));
                    }));
                } else {
                    vDom = layoutItem(data, layout, comId.join("_"));
                }
                return vDom;
            }
            var vDom = hx(_templateObject7, options.data.map(function(item, i) {
                return loopItem(item, i, options.layout);
            }), submitBtn());
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var _this2 = this;
            var that = this;
            this.rules = null;
            this.messages = null;
            this.options.data.map(function(item, index) {
                var comId = [ "component", that.options.vid, index ];
                if (item.items) {
                    item.items.map(function(subItem, i) {
                        if (subItem.rule && subItem.message) {
                            that.rules = that.options.rules || {};
                            that.messages = that.options.messages || {};
                            if (subItem.required) subItem.rule.required = true;
                            that.options.setDefaults.rules[subItem.component.name] = subItem.rule;
                            that.options.setDefaults.messages[subItem.component.name] = subItem.message;
                        }
                        comId.push(i);
                        subItem.component.el = "#" + comId.join("_");
                        Lego.create(Lego.UI[subItem.component.comName], subItem.component);
                    });
                } else {
                    if (item.rule && item.message) {
                        _this2.rules = _this2.options.rules || {};
                        _this2.messages = _this2.options.messages || {};
                        if (item.required) item.rule.required = true;
                        _this2.options.setDefaults.rules[item.component.name] = item.rule;
                        _this2.options.setDefaults.messages[item.component.name] = item.message;
                    }
                    item.component.el = "#" + comId.join("_");
                    Lego.create(Lego.UI[item.component.comName], item.component);
                }
            });
            console.warn("yyyyyyy");
            var eventName = "click.form_" + this.options.vid, submitEl = this.options.submitEl, $submitEl = submitEl instanceof $ ? submitEl : this.$((typeof submitEl == "string" ? submitEl : "") || '[type="submit"]');
            if (this.rules && this.messages) {
                this.$el.validate(this.options.setDefaults);
                $submitEl.off(eventName);
            } else {
                $submitEl.off(eventName).on(eventName, function(event) {
                    that.submitForm();
                });
                this.$el.attr("onSubmit", "javascript:return false;");
            }
        }
    }, {
        key: "serializeJson",
        value: function serializeJson() {
            var data = {};
            var formData = this.$el.serializeArray();
            formData.forEach(function(item, index) {
                if (item.value) {
                    if (data[item.name]) {
                        if (!Array.isArray(data[item.name])) {
                            data[item.name] = [ data[item.name] ];
                        }
                        if (data.indexOf(item.value) < 0) data[item.name].push(item.value);
                    } else {
                        data[item.name] = item.value;
                    }
                }
            });
            return data;
        }
    }, {
        key: "submitForm",
        value: function submitForm() {
            var format = this.options.format, submitEl = this.options.submitEl, $submitEl = submitEl instanceof $ ? submitEl : this.$((typeof submitEl == "string" ? submitEl : "") || '[type="submit"]'), that = this;
            var data = this.serializeJson();
            if (typeof format == "function") data = format(data);
            if (!Object.values(data).length) return false;
            if (!$submitEl.hasClass("disabled")) {
                $submitEl.text("提交中...").addClass("disabled");
            }
            return this.options.onSubmit(data);
        }
    } ]);
    return Forms;
}(Lego.UI.Baseview);

Lego.components("forms", Forms);

module.exports = Forms;
