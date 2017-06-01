/**
 * area-picker.js v0.0.1
 * (c) 2017 yuronghui
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

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div class="lego-area-picker">\n                ', "\n            </div>\n            " ], [ '\n            <div class="lego-area-picker">\n                ', "\n            </div>\n            " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<selects id="selects_', '"></selects>' ], [ '<selects id="selects_', '"></selects>' ]);

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

var ComView = function(_Lego$UI$Baseview) {
    _inherits(ComView, _Lego$UI$Baseview);
    function ComView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, ComView);
        var options = {
            rootId: 0,
            fieldName: "key",
            width: 120,
            name: [ "province", "city", "area" ],
            placeholder: [ "请选择省份", "请选择城市", "请选择区域" ],
            value: [],
            selectOpts: {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (ComView.__proto__ || Object.getPrototypeOf(ComView)).call(this, options));
    }
    _createClass(ComView, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            if (!Array.isArray(opts.name)) opts.name = [ opts.name ];
            if (opts.data) {
                var filterData = function filterData(pId) {
                    var newData = [], data = opts.data[pId];
                    for (var key in data) {
                        newData.push({
                            key: key,
                            value: data[key]
                        });
                    }
                    return newData;
                };
                var _updateSelect = function _updateSelect(name, parentId) {
                    var index = opts.name.indexOf(name), theData = filterData(parentId);
                    if (index > -1) {
                        var selectsView = Lego.getView("#selects_" + name);
                        if (selectsView) {
                            selectsView.options.value = [];
                            selectsView.options.data = theData;
                            selectsView.refresh();
                            _updateSelect(opts.name[index + 1], 0);
                        }
                    }
                };
                opts.name.forEach(function(value, index) {
                    that.addCom(Object.assign({
                        el: "#selects_" + value,
                        name: value,
                        fieldName: opts.fieldName,
                        placeholder: opts.placeholder[index],
                        data: !index ? filterData(opts.rootId) : [],
                        onChange: function onChange(self, result) {
                            _updateSelect(opts.name[index + 1], result.key);
                            if (typeof opts.onChange == "function") opts.onChange(that, result);
                        }
                    }, opts.selectOpts));
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = hx(_templateObject);
            if (opts.data) {
                vDom = hx(_templateObject2, opts.name.map(function(value) {
                    return hx(_templateObject3, value);
                }));
            }
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.$(".select").width(this.options.width);
        }
    } ]);
    return ComView;
}(Lego.UI.Baseview);

Lego.components("areapicker", ComView);

module.exports = ComView;
