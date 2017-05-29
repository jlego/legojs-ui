/**
 * geolocation.js v0.0.1
 * (c) 2017 yuronghui
 * @license MIT
 */
"use strict";

var _createClass$1 = function() {
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

var _templateObject$1 = _taggedTemplateLiteral$1([ '\n        <div class="map-div">\n            <div id="map_container"></div>\n            <inputs id=\'input_', "'></inputs>\n        </div>" ], [ '\n        <div class="map-div">\n            <div id="map_container"></div>\n            <inputs id=\'input_', "'></inputs>\n        </div>" ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
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

var View = function(_Lego$UI$Baseview) {
    _inherits$1(View, _Lego$UI$Baseview);
    function View() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, View);
        var options = {
            mapApi: "",
            placeholder: "搜索",
            data: {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, options));
    }
    _createClass$1(View, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            opts.context.result = opts.data;
            this.addCom({
                el: "#input_" + opts.vid,
                placeholder: opts.placeholder,
                style: {
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: 350
                },
                value: opts.data.address || "",
                onChange: function onChange(self, address) {
                    if (that.geocoder) {
                        that.geocoder.getLocation(address, function(status, result) {
                            if (status == "complete" && result.geocodes.length) {
                                var point = that.marker.getPosition();
                                that.marker.setPosition(result.geocodes[0].location);
                                that.map.setCenter(point);
                                opts.context.result = {
                                    address: address,
                                    lnglat: point.lng + "," + point.lat
                                };
                            }
                        });
                    }
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            return hx(_templateObject$1, opts.vid);
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, that = this;
            function getLocation() {
                var options = {
                    enableHighAccuracy: true,
                    maximumAge: 1e3
                };
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
                } else {}
            }
            function onSuccess(position) {
                var longitude = position.coords.longitude;
                var latitude = position.coords.latitude;
                that.renderMap(longitude, latitude);
            }
            function onError(error) {
                debug.warn(error);
                that.renderMap();
            }
            if (opts.data.lnglat) {
                this.renderMap(opts.data.lnglat.split(","));
            } else {
                getLocation();
            }
        }
    }, {
        key: "renderMap",
        value: function renderMap(lng, lat) {
            var that = this, opts = this.options, inputView = Lego.getView("#input_" + opts.vid);
            if (opts.mapApi) {
                Lego.loadScript(opts.mapApi, function() {
                    that.map = new AMap.Map("map_container", {
                        resizeEnable: true,
                        zoom: 14,
                        center: lng && lat ? new AMap.LngLat(lng, lat) : [ 114.057954, 22.544367 ]
                    });
                    AMap.plugin("AMap.Geocoder", function() {
                        that.geocoder = new AMap.Geocoder();
                        that.marker = new AMap.Marker({
                            map: that.map,
                            bubble: true
                        });
                        if (opts.data.lnglat) {
                            that.marker.setPosition(opts.data.lnglat.split(","));
                        }
                        that.map.on("click", function(e) {
                            that.marker.setPosition(e.lnglat);
                            that.geocoder.getAddress(e.lnglat, function(status, result) {
                                if (status == "complete") {
                                    inputView.options.value = result.regeocode.formattedAddress;
                                    opts.context.result = {
                                        address: inputView.options.value,
                                        lnglat: e.lnglat.lng + "," + e.lnglat.lat
                                    };
                                }
                            });
                        });
                    });
                }, "amap");
            }
        }
    } ]);
    return View;
}(Lego.UI.Baseview);

Lego.components("maps", View);

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

var _templateObject = _taggedTemplateLiteral([ '<i class="anticon anticon-environment-o"></i>' ], [ '<i class="anticon anticon-environment-o"></i>' ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n        <div class="lego-geolocation">\n            <input type="hidden" name="hidden_', '" id="lnglat_', '" value="', '">\n            <inputs id="inputs_', '"></inputs>\n        </div>\n        ' ], [ '\n        <div class="lego-geolocation">\n            <input type="hidden" name="hidden_', '" id="lnglat_', '" value="', '">\n            <inputs id="inputs_', '"></inputs>\n        </div>\n        ' ]);

var _templateObject3 = _taggedTemplateLiteral([ '<maps id="maps_', '"></maps>' ], [ '<maps id="maps_', '"></maps>' ]);

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
            name: "",
            mapApi: "",
            placeholder: "请标注地理位置",
            data: {},
            onChange: function onChange() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (ComView.__proto__ || Object.getPrototypeOf(ComView)).call(this, options));
    }
    _createClass(ComView, [ {
        key: "components",
        value: function components() {
            var opts = this.options, that = this;
            this.addCom({
                el: "#inputs_" + opts.vid,
                name: opts.name,
                disabled: opts.disabled,
                readonly: opts.readonly,
                placeholder: opts.placeholder,
                size: opts.size,
                value: opts.data.address || "",
                nextAddon: hx(_templateObject),
                onChange: function onChange(self, value, event) {
                    if (typeof opts.onChange == "function") opts.onChange(that, value);
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var opts = this.options;
            var vDom = hx(_templateObject2, opts.name, opts.vid, opts.data.lnglat, opts.vid);
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var opts = this.options, that = this;
            this.$(".input-group-addon").off().on("click", function(event) {
                Lego.UI.modal({
                    type: "modal",
                    title: "地图选址",
                    content: hx(_templateObject3, opts.vid),
                    isMiddle: true,
                    width: 700,
                    height: 400,
                    components: [ {
                        el: "#maps_" + opts.vid,
                        mapApi: opts.mapApi,
                        data: function data() {
                            return opts.data;
                        }
                    } ],
                    onOk: function onOk(self) {
                        opts.data = self.result || {};
                        self.close();
                        that.updateValue();
                    }
                });
            });
            this.updateValue();
        }
    }, {
        key: "updateValue",
        value: function updateValue() {
            var opts = this.options;
            if (opts.data) {
                var input = this.$("#inputs_" + opts.vid).children("input"), lnglatInput = this.$("#lnglat_" + opts.vid);
                if (input.length) input.val(opts.data.address || "");
                if (lnglatInput.length) lnglatInput.val(opts.data.lnglat || "");
            }
        }
    } ]);
    return ComView;
}(Lego.UI.Baseview);

Lego.components("geolocation", ComView);

module.exports = ComView;
