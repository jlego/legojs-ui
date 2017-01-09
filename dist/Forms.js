/**
 * forms.js v0.2.0
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var jqueryValidation = require("jquery-validation");

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

var _templateObject = _taggedTemplateLiteral([ '<button type="submit" class="btn btn-primary ', '">', "</button>" ], [ '<button type="submit" class="btn btn-primary ', '">', "</button>" ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n                <div class="form-group row">\n                  <div class="offset-sm-2 col-sm-10">\n                    <button type="submit" class="btn btn-primary ', '">', "</button>\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <div class="offset-sm-2 col-sm-10">\n                    <button type="submit" class="btn btn-primary ', '">', "</button>\n                  </div>\n                </div>\n                " ]);

var _templateObject3 = _taggedTemplateLiteral([ '\n                <div class="form-group">\n                    <label for="', '" class=" ', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '" class=" ', '">', "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);

var _templateObject4 = _taggedTemplateLiteral([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);

var _templateObject5 = _taggedTemplateLiteral([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 ', ' col-form-label">', '</label>\n                  <div class="col-sm-10 ', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-2 ', ' col-form-label">', '</label>\n                  <div class="col-sm-10 ', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);

var _templateObject6 = _taggedTemplateLiteral([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);

var _templateObject7 = _taggedTemplateLiteral([ "\n            <form>\n            ", "\n            ", "\n            </form>" ], [ "\n            <form>\n            ", "\n            ", "\n            </form>" ]);

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

var Forms = function(_Lego$UI$Baseview) {
    _inherits(Forms, _Lego$UI$Baseview);
    function Forms() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Forms);
        var options = {
            layout: "vertical",
            labelClass: "",
            componentClass: "",
            setDefaults: {
                errorClass: "help-block",
                errorElement: "div",
                errorPlacement: function errorPlacement(error, element) {
                    element.parents(".form-group > div").append(error);
                },
                highlight: function highlight(element, errorClass) {
                    $(element).closest(".form-group").addClass("has-danger");
                },
                success: function success(el) {
                    el.closest(".form-group").removeClass("has-danger");
                    el.closest("div.help-block").remove();
                },
                submitHandler: function submitHandler(form) {
                    var view = Lego.getView(opts.el);
                    if (view) view.submitForm();
                }
            },
            rules: null,
            messages: null,
            submitEl: "",
            submitText: "提 交",
            submitClass: "",
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
            var submit = "";
            if (!options.submitEl) {
                if (options.layout == "vertical") {
                    submit = hx(_templateObject, val(options.submitClass, ""), options.submitText);
                } else {
                    submit = hx(_templateObject2, val(options.submitClass, ""), options.submitText);
                }
            }
            function layoutItem(item, layout, id) {
                var vDom = "";
                var comTag = "<" + val(item.componentName) + " id=" + id + "></" + val(item.componentName) + ">";
                if (layout == "vertical") {
                    vDom = hx(_templateObject3, id, val(that.options.labelClass || item.labelClass, ""), val(item.label), hx(comTag), item.help ? hx(_templateObject4, val(item.help)) : "");
                } else {
                    vDom = hx(_templateObject5, id, val(that.options.labelClass || item.labelClass, ""), val(item.label), val(that.options.componentClass || item.componentClass, ""), hx(comTag), item.help ? hx(_templateObject4, val(item.help)) : "");
                }
                return vDom;
            }
            function loopItem(data, index, layout) {
                var vDom = "";
                if (data.items) {
                    vDom = hx(_templateObject6, val(data.labelClass), val(data.label), data.items.map(function(item, i) {
                        return layoutItem(item, layout, "component_" + index + "_" + i);
                    }));
                } else {
                    vDom = layoutItem(data, layout, "component_" + index);
                }
                return vDom;
            }
            var vDom = void 0;
            if (options.layout == "vertical") {
                vDom = hx(_templateObject7, options.data.map(function(item, i) {
                    return loopItem(item, i, "vertical");
                }), submit);
            } else {
                vDom = hx(_templateObject7, options.data.map(function(item, i) {
                    return loopItem(item, i, "inline");
                }), submit);
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var _this2 = this;
            if (this.options.rules && this.options.messages) {
                $.validator.setDefaults(this.options.setDefaults);
                this.validator = this.$el.validate({
                    rules: this.options.rules,
                    messages: this.options.messages
                });
            } else {
                (function() {
                    var that = _this2, eventName = "submit.form_" + _this2.options.vid, submitEl = _this2.options.submitEl;
                    _this2.$el.off(eventName).on(eventName, function(event) {
                        that.submitForm();
                    });
                })();
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
            var format = this.options.format, submitEl = this.options.submitEl, $submitEl = submitEl instanceof $ ? submitEl : $((typeof submitEl == "string" ? submitEl : "") || '[type="submit"]'), that = this;
            var data = this.serializeJson();
            if (typeof format == "function") data = format(data);
            console.warn(data);
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
