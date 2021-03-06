/**
 * editcom.js v0.12.6
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var validate = _interopDefault(require("jquery-validation-cjs"));

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

var _templateObject$1 = taggedTemplateLiteral([ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ], [ '<div>\n                    <button type="submit" class="btn btn-primary">', '</button>\n                    <button type="reset" class="btn btn-secondary">', "</button>\n                    </div>" ]);

var _templateObject2$1 = taggedTemplateLiteral([ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ], [ '\n                    <div class="form-group row">\n                      <div class="offset-sm-', " col-sm-", '">\n                        <button type="submit" class="btn btn-primary">', '</button>\n                        <button type="reset" class="btn btn-secondary">', "</button>\n                      </div>\n                    </div>\n                    " ]);

var _templateObject3$1 = taggedTemplateLiteral([ '<p class="form-control-static mb-0">', "</p>" ], [ '<p class="form-control-static mb-0">', "</p>" ]);

var _templateObject4 = taggedTemplateLiteral([ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ], [ '\n                <div class="form-group">\n                    <label for="', '">', "", "</label>\n                    ", "\n                    ", "\n                </div>\n                " ]);

var _templateObject5 = taggedTemplateLiteral([ '<span class="symbol required">*</span>' ], [ '<span class="symbol required">*</span>' ]);

var _templateObject6 = taggedTemplateLiteral([ '<small class="form-text text-muted">', "</small>" ], [ '<small class="form-text text-muted">', "</small>" ]);

var _templateObject7 = taggedTemplateLiteral([ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ], [ '\n                <div class="form-group row">\n                  <label for="', '" class="col-sm-', ' col-form-label">', "", '</label>\n                  <div class="col-sm-', '">\n                    ', "\n                    ", "\n                  </div>\n                </div>\n                " ]);

var _templateObject8 = taggedTemplateLiteral([ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ], [ '\n                <fieldset class="', '">\n                    <legend>', "</legend>\n                    ", "\n                </fieldset>\n                " ]);

var _templateObject9 = taggedTemplateLiteral([ "<form>\n            ", "\n            ", "</form>" ], [ "<form>\n            ", "\n            ", "</form>" ]);

$.fn.validate = validate;

var regObj = {
    mobile: /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/,
    email: /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,
    password: /^[\w]+$/
};

$.validator.addMethod("mobile", function(value, element) {
    var length = value.length, mobile = regObj.mobile;
    return this.optional(element) || length == 11 && mobile.test(value);
}, "请正确填写手机号");

$.validator.addMethod("email", function(value, element) {
    var length = value.length, email = regObj.email;
    return this.optional(element) || email.test(value);
}, "请正确填写邮箱");

$.validator.addMethod("password", function(value, element) {
    var passwordReg = regObj.password;
    return this.optional(element) || passwordReg.test(value);
}, "请正确填写密码");

$.validator.addMethod("coms", function(value, element, num) {
    var valArr = value.split(",");
    return this.optional(element) || valArr.length == num;
}, "请完成所有项");

var Forms = function(_Lego$UI$Baseview) {
    inherits(Forms, _Lego$UI$Baseview);
    function Forms() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Forms);
        var options = {
            layout: "vertical",
            setDefaults: {
                errorClass: "form-control-feedback",
                errorElement: "div",
                errorPlacement: function errorPlacement(error, element) {
                    element.closest(".form-group").children("div").append(error);
                },
                highlight: function highlight(element, errorClass) {
                    $(element).closest(".form-group").addClass("has-danger");
                },
                success: function success(el) {
                    el.closest(".form-group").removeClass("has-danger");
                    el.closest("div.form-control-feedback").remove();
                },
                submitHandler: function submitHandler(form) {
                    var view = Lego.getView(opts.el);
                    if (view) {
                        view.submitForm();
                    }
                },
                onchange: function onchange(element) {
                    $(element).valid();
                },
                ignore: "",
                rules: {},
                messages: {}
            },
            labelCols: 2,
            comCols: 10,
            submitEl: "",
            submitText: "提 交",
            showSubmit: true,
            resetText: "重 置",
            data: [],
            format: function format(result) {
                return result;
            },
            onSubmit: function onSubmit() {}
        };
        Object.assign(options, opts);
        var _this = possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, options));
        _this.renderCom();
        return _this;
    }
    createClass(Forms, [ {
        key: "render",
        value: function render() {
            var options = this.options || {}, that = this;
            function submitBtn() {
                var submit = "";
                if (!options.submitEl && options.showSubmit) {
                    if (options.layout == "vertical") {
                        submit = hx(_templateObject$1, options.submitText, options.resetText);
                    } else {
                        submit = hx(_templateObject2$1, options.labelCols, options.comCols, options.submitText, options.resetText);
                    }
                }
                return submit;
            }
            function layoutItem(item, layout, id) {
                var vDom = "", comTag = "";
                if (item.text) {
                    comTag = hx(_templateObject3$1, val(item.text));
                } else {
                    if (item.component) {
                        comTag = item.component.comName ? hx("<" + val(item.component.comName) + " id=" + id + "></" + val(item.component.comName) + ">") : "";
                    } else {
                        comTag = "";
                    }
                }
                if (layout == "vertical") {
                    vDom = hx(_templateObject4, id, item.rule || item.required ? item.rule.required || item.required ? hx(_templateObject5) : "" : "", val(item.label), comTag, item.help ? hx(_templateObject6, val(item.help)) : "");
                } else {
                    vDom = hx(_templateObject7, id, that.options.labelCols, item.rule || item.required ? item.rule.required || item.required ? hx(_templateObject5) : "" : "", val(item.label), that.options.comCols, comTag, item.help ? hx(_templateObject6, val(item.help)) : "");
                }
                return vDom;
            }
            function loopItem(data, index, layout) {
                var vDom = "", comId = [ "component", options.vid, index ];
                if (data.items) {
                    vDom = hx(_templateObject8, val(data.labelClass), val(data.label), data.items.map(function(item, i) {
                        comId.push(i);
                        return layoutItem(item, layout, comId.join("_"));
                    }));
                } else {
                    vDom = layoutItem(data, layout, comId.join("_"));
                }
                return vDom;
            }
            var vDom = hx(_templateObject9, options.data.map(function(item, i) {
                return loopItem(item, i, options.layout);
            }), submitBtn());
            return vDom;
        }
    }, {
        key: "renderCom",
        value: function renderCom() {
            var _this2 = this;
            var that = this, opts = this.options;
            this.rules = null;
            this.messages = null;
            var components = opts.data, comArr = [ "selects", "treeselect" ];
            components = typeof components == "function" ? components(opts) : Array.isArray(components) ? components : [ components ];
            components.map(function(item, index) {
                if (!item.text) {
                    (function() {
                        var comId = [ "component", opts.vid, index ];
                        if (item.items) {
                            item.items.map(function(subItem, i) {
                                if (subItem.component) {
                                    if (subItem.rule && subItem.message) {
                                        that.rules = opts.rules || {};
                                        that.messages = opts.messages || {};
                                        if (subItem.required) {
                                            subItem.rule.required = true;
                                        }
                                        var theName = comArr.includes(subItem.component.comName) ? "hidden_" + subItem.component.name : subItem.component.name;
                                        opts.setDefaults.rules[theName] = subItem.rule;
                                        opts.setDefaults.messages[theName] = subItem.message;
                                    }
                                    comId.push(i);
                                    subItem.component.el = "#" + comId.join("_");
                                    subItem.component.context = that;
                                    if (subItem.component.comName) {
                                        Lego.create(Lego.UI[subItem.component.comName], subItem.component);
                                    }
                                }
                            });
                        } else {
                            if (item.component) {
                                if (item.rule && item.message) {
                                    _this2.rules = opts.rules || {};
                                    _this2.messages = opts.messages || {};
                                    if (item.required) {
                                        item.rule.required = true;
                                    }
                                    var theName = comArr.includes(item.component.comName) ? "hidden_" + item.component.name : item.component.name;
                                    opts.setDefaults.rules[theName] = item.rule;
                                    opts.setDefaults.messages[theName] = item.message;
                                }
                                item.component.el = "#" + comId.join("_");
                                item.component.context = _this2;
                                if (item.component.comName) {
                                    Lego.create(Lego.UI[item.component.comName], item.component);
                                }
                            }
                        }
                    })();
                }
            });
            var clickName = "click.form_" + opts.vid, submitEl = opts.submitEl, $submitEl = submitEl instanceof $ ? submitEl : $(typeof submitEl == "string" ? submitEl : '[type="submit"]');
            if (this.rules && this.messages) {
                this.$el.validate(opts.setDefaults);
                if ($submitEl.length) {
                    $submitEl.off(clickName).on(clickName, function(event) {
                        that.$el.submit();
                    });
                }
            } else {
                $submitEl.off(clickName).on(clickName, function(event) {
                    that.submitForm();
                });
            }
            this.$el.attr("onSubmit", "javascript:return false;");
        }
    }, {
        key: "serializeJson",
        value: function serializeJson() {
            var data = {};
            var formData = this.$el.serializeArray();
            formData.forEach(function(item, index) {
                if (item.value && item.name.indexOf("hidden_") < 0) {
                    if (data[item.name]) {
                        if (!Array.isArray(data[item.name])) {
                            data[item.name] = [ data[item.name] ];
                        }
                        if (data.indexOf(item.value) < 0) {
                            data[item.name].push(item.value);
                        }
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
            if (typeof format == "function") {
                data = format(data);
            }
            if (Lego.isEmptyObject(data)) {
                return false;
            }
            if (!$submitEl.hasClass("disabled")) {
                $submitEl.text("提交中...").addClass("disabled");
                setTimeout(function() {
                    $submitEl.text(that.options.submitText).removeClass("disabled");
                }, 3e3);
            }
            return this.options.onSubmit(this, data);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.el.reset();
        }
    } ]);
    return Forms;
}(Lego.UI.Baseview);

Lego.components("forms", Forms);

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="lego-editcom clearfix ', '">\n            <span>', "\n            </span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = taggedTemplateLiteral([ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ], [ '<i class="anticon anticon-', ' edit" title="编辑"></i>' ]);

var _templateObject3 = taggedTemplateLiteral([ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ], [ '<i class="anticon anticon-close-circle cancel" title="取消编辑"></i>' ]);

var Editcom = function(_Lego$UI$Baseview) {
    inherits(Editcom, _Lego$UI$Baseview);
    function Editcom() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Editcom);
        var options = {
            events: {
                "click i.edit": "onClick",
                "click i.cancel": "onClose"
            },
            text: "",
            html: "",
            template: "",
            width: "auto",
            clicked: false,
            readonly: false,
            data: [],
            icon: "edit",
            size: "",
            validation: false,
            onEdit: function onEdit() {},
            onCancel: function onCancel() {},
            onFinish: function onFinish() {},
            components: []
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (Editcom.__proto__ || Object.getPrototypeOf(Editcom)).call(this, options));
    }
    createClass(Editcom, [ {
        key: "components",
        value: function components() {
            var opts = this.options;
            if (opts.components.length) {
                opts.components.forEach(function(item, index) {
                    item.key = "editcom_" + opts.vid;
                    item.el = "#" + item.key;
                    item.size = opts.size;
                    if (opts.width) {
                        item.style = item.style || {};
                        item.style.width = opts.width;
                    }
                    item.value = opts.value || opts.text;
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.size, opts.clicked ? opts.template ? val(opts.template) : opts.components.map(function(item) {
                return hx("<" + item.comName + " id=" + item.key + "></" + item.comName + ">");
            }) : val(opts.html || opts.text), !opts.readonly && !opts.clicked ? hx(_templateObject2, val(opts.icon)) : "", !opts.readonly && opts.clicked ? hx(_templateObject3) : "");
            return vDom;
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            event.stopPropagation();
            this.options.clicked = true;
            if (typeof this.options.onEdit == "function") {
                this.options.onEdit(this, event);
            }
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            this.close();
            if (typeof this.options.onCancel == "function") {
                this.options.onCancel(this, event);
            }
        }
    }, {
        key: "close",
        value: function close(value, htmlStr) {
            var options = {
                clicked: false
            }, opts = this.options;
            if (value) {
                if (typeof opts.validation == "function") {
                    var result = opts.validation(this, value);
                    if (!result) {
                        return false;
                    }
                } else if (typeof opts.validation == "string") {
                    if (!regObj[opts.validation].test(value)) {
                        return false;
                    }
                }
                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
                    if (value.value) {
                        options.value = value;
                        options.text = value.value;
                    }
                } else {
                    options.value = options.text = value;
                }
                if (htmlStr) {
                    options.html = htmlStr;
                }
            }
            Object.assign(this.options, options);
            if (typeof opts.onFinish == "function") {
                opts.onFinish(this);
            }
            return true;
        }
    } ]);
    return Editcom;
}(Lego.UI.Baseview);

Lego.components("editcom", Editcom);

module.exports = Editcom;
