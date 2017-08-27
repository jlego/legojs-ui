/**
 * colorpicker.js v0.12.11
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var spectrumColorpickerCjs = require("spectrum-colorpicker-cjs");

var spectrumColorpickerCjs_spectrum_css = require("spectrum-colorpicker-cjs/spectrum.css");

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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-colorpicker">\n            <input type="text" id="input_', '" value="', '" name="', '" />\n        </div>' ], [ '\n        <div class="lego-colorpicker">\n            <input type="text" id="input_', '" value="', '" name="', '" />\n        </div>' ]);

var ComView = function(_Lego$UI$Baseview) {
    inherits(ComView, _Lego$UI$Baseview);
    function ComView() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, ComView);
        var options = {
            name: "",
            type: 1,
            readonly: false,
            spectrumOption: {
                value: "",
                flat: false,
                showInput: false,
                allowEmpty: false,
                showButtons: true,
                clickoutFiresChange: false,
                showInitial: true,
                showPalette: false,
                showPaletteOnly: false,
                hideAfterPaletteSelect: false,
                togglePaletteOnly: false,
                showSelectionPalette: true,
                localStorageKey: false,
                appendTo: "parent",
                maxSelectionSize: 16,
                cancelText: "取消",
                chooseText: "确定",
                togglePaletteMoreText: "more",
                togglePaletteLessText: "less",
                clearText: "清除已选择颜色",
                noColorSelectedText: "没有选中的颜色",
                preferredFormat: "hex3",
                className: "",
                containerClassName: "",
                replacerClassName: "",
                showAlpha: false,
                theme: "sp-light",
                palette: [ [ "#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3" ] ],
                selectionPalette: [],
                disabled: false,
                offset: null
            },
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return possibleConstructorReturn(this, (ComView.__proto__ || Object.getPrototypeOf(ComView)).call(this, options));
    }
    createClass(ComView, [ {
        key: "render",
        value: function render() {
            var opts = this.options, vDom = hx(_templateObject, opts.vid, opts.value, opts.name);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            this.result = this.result || "";
            var opts = this.options, that = this, inputEl = this.$("#input_" + opts.vid);
            if (inputEl.length) {
                if (!this.spectrum) {
                    var defaults$$1 = {
                        change: function change(color) {
                            that.result = color;
                            if (typeof opts.onChange == "function") {
                                opts.onChange(that, that.getValue());
                            }
                        },
                        move: function move(color) {
                            if (typeof opts.onMove == "function") {
                                opts.onMove(that, color);
                            }
                        },
                        show: function show(color) {
                            if (typeof opts.onShow == "function") {
                                opts.onShow(that, color);
                            }
                        },
                        hide: function hide(color) {
                            if (typeof opts.onHide == "function") {
                                opts.onHide(that, color);
                            }
                        },
                        beforeShow: function beforeShow(color) {
                            if (typeof opts.onBeforeShow == "function") {
                                opts.onBeforeShow(that, color);
                            }
                        }
                    };
                    Object.assign(defaults$$1, opts.spectrumOption);
                    if (opts.value) {
                        defaults$$1.color = opts.value;
                    }
                    var palette = [ [ "#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff" ], [ "#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f" ], [ "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc" ], [ "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd" ], [ "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0" ], [ "#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79" ], [ "#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47" ], [ "#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130" ] ];
                    switch (opts.type) {
                      case 1:
                        defaults$$1.showPalette = false;
                        break;

                      case 2:
                        defaults$$1.showPalette = false;
                        defaults$$1.showInput = true;
                        defaults$$1.allowEmpty = true;
                        defaults$$1.showAlpha = true;
                        break;

                      case 3:
                        defaults$$1.showPalette = true;
                        defaults$$1.showPaletteOnly = true;
                        defaults$$1.showSelectionPalette = false;
                        defaults$$1.palette = palette;
                        break;

                      case 4:
                        defaults$$1.showAlpha = true;
                        defaults$$1.showInput = true;
                        defaults$$1.allowEmpty = true;
                        defaults$$1.showPalette = true;
                        defaults$$1.showPaletteOnly = false;
                        defaults$$1.showSelectionPalette = true;
                        defaults$$1.localStorageKey = "spectrum." + opts.vid;
                        defaults$$1.palette = palette;
                        break;
                    }
                    this.spectrum = inputEl.spectrum(defaults$$1);
                }
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var opts = this.options, inputEl = $("#input_" + opts.vid);
            if (inputEl.length) {
                inputEl.valid();
            }
            return this.result;
        }
    }, {
        key: "colorpicker",
        value: function colorpicker(method) {
            var opts = this.options, that = this, inputEl = this.$("#input_" + opts.vid);
            if (inputEl.length) {
                inputEl.spectrum(method);
            }
        }
    } ]);
    return ComView;
}(Lego.UI.Baseview);

Lego.components("colorpicker", ComView);

module.exports = ComView;
