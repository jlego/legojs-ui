/**
 * slider.js v0.12.17
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var Slider = _interopDefault(require("bootstrap-slider"));

var bootstrapSlider_dist_css_bootstrapSlider_css = require("bootstrap-slider/dist/css/bootstrap-slider.css");

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

var _templateObject = taggedTemplateLiteral([ '\n        <div class="lego-slider">\n            <input id="input_', '" name="', '" type="text" />\n        </div>\n        ' ], [ '\n        <div class="lego-slider">\n            <input id="input_', '" name="', '" type="text" />\n        </div>\n        ' ]);

var SliderView = function(_Lego$UI$Baseview) {
    inherits(SliderView, _Lego$UI$Baseview);
    function SliderView() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, SliderView);
        var options = {
            value: 5,
            min: 0,
            max: 10,
            step: 1,
            precision: 2,
            orientation: "horizontal",
            range: false,
            selection: "before",
            tooltip: "show",
            tooltip_split: false,
            tooltip_position: null,
            handle: "round",
            reversed: false,
            rtl: "auto",
            enabled: true,
            formatter: null,
            natural_arrow_keys: false,
            ticks: [],
            ticks_positions: [],
            ticks_labels: [],
            ticks_snap_bounds: 0,
            ticks_tooltip: false,
            scale: "linear",
            focus: false,
            labelledby: null,
            rangeHighlights: [],
            size: "",
            onChange: function onChange() {},
            onStart: function onStart() {},
            onStop: function onStop() {}
        };
        Object.assign(options, option);
        var _this = possibleConstructorReturn(this, (SliderView.__proto__ || Object.getPrototypeOf(SliderView)).call(this, options));
        _this.initSlider();
        return _this;
    }
    createClass(SliderView, [ {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject, opts.vid, opts.name);
            return vDom;
        }
    }, {
        key: "initSlider",
        value: function initSlider() {
            var opts = this.options, that = this;
            this.slider = new Slider("#input_" + opts.vid, {
                value: opts.value,
                min: opts.min,
                max: opts.max,
                step: opts.step,
                precision: opts.precision,
                orientation: opts.orientation,
                range: opts.range,
                selection: opts.selection,
                tooltip: opts.tooltip,
                tooltip_split: opts.tooltip_split,
                tooltip_position: opts.tooltip_position,
                handle: opts.handle,
                reversed: opts.reversed,
                rtl: opts.rtl,
                enabled: opts.enabled,
                formatter: opts.formatter,
                natural_arrow_keys: opts.natural_arrow_keys,
                ticks: opts.ticks,
                ticks_positions: opts.ticks_positions,
                ticks_labels: opts.ticks_labels,
                ticks_snap_bounds: opts.ticks_snap_bounds,
                ticks_tooltip: opts.ticks_tooltip,
                scale: opts.scale,
                focus: opts.focus,
                labelledby: opts.labelledby,
                rangeHighlights: opts.rangeHighlights
            });
            this.slider.on("change", function() {
                if (typeof opts.onChange == "function") {
                    opts.onChange(that, that.slider.getValue());
                }
            });
            this.slider.on("slideStart", function() {
                if (typeof opts.onStart == "function") {
                    opts.onStart(that, that.slider.getValue());
                }
            });
            this.slider.on("slideStop", function() {
                if (typeof opts.onStop == "function") {
                    opts.onStop(that, that.slider.getValue());
                }
            });
        }
    } ]);
    return SliderView;
}(Lego.UI.Baseview);

Lego.components("slider", SliderView);

module.exports = SliderView;
