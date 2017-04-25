/**
 * steps.js v0.5.3
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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ], [ '\n        <div class="lego-steps lego-steps-', " lego-steps-label-", " ", '">\n        ', "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ], [ '\n            <div class="lego-steps-item lego-steps-status-', '"\n            style="', " margin-right:-", 'px;">\n                ', '\n                <div class="lego-steps-step">\n                    <div class="lego-steps-head">\n                        <div class="lego-steps-head-inner">\n                        ', '\n                        </div>\n                    </div>\n                    <div class="lego-steps-main">\n                        <div class="lego-steps-title">', "</div>\n                        ", "\n                    </div>\n                </div>\n            </div>\n            " ]);

var _templateObject3 = _taggedTemplateLiteral([ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ], [ '<div class="lego-steps-tail"\n                style="', '"><i></i></div>' ]);

var _templateObject4 = _taggedTemplateLiteral([ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ], [ '<span class="lego-steps-icon anticon ', '">\n                            ', "\n                            </span>" ]);

var _templateObject5 = _taggedTemplateLiteral([ '<span class="lego-steps-icon">', "</span>" ], [ '<span class="lego-steps-icon">', "</span>" ]);

var _templateObject6 = _taggedTemplateLiteral([ '<div class="lego-steps-description">', "</div>" ], [ '<div class="lego-steps-description">', "</div>" ]);

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

var Steps = function(_Lego$UI$Baseview) {
    _inherits(Steps, _Lego$UI$Baseview);
    function Steps() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Steps);
        var options = {
            current: 0,
            status: "process",
            size: "default",
            direction: "horizontal",
            titleWidth: 120,
            showDescription: true,
            showIcon: true,
            showNum: true,
            data: [],
            onNext: function onNext() {},
            onPrevious: function onPrevious() {}
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, options));
    }
    _createClass(Steps, [ {
        key: "render",
        value: function render() {
            var options = this.options, dataLength = options.data.length, widthPercent = 10 / (dataLength - 1) * 10;
            var vDom = hx(_templateObject, options.direction, options.direction, !options.showNum ? "lego-steps-sm" : "", options.data.map(function(item, index) {
                return hx(_templateObject2, options.current == index ? options.status : item.status ? item.status : options.current > index ? "finish" : "wait", index == dataLength - 1 ? "" : "width:" + widthPercent + "%;", options.titleWidth / 2, index < dataLength ? hx(_templateObject3, index == dataLength - 1 ? "padding-right:" + options.titleWidth + "px" : "padding-right:" + options.titleWidth / 2 + "px") : "", options.showIcon ? hx(_templateObject4, item.icon ? item.icon : item.status == "finish" ? "anticon-check" : "", item.status !== "finish" ? item.icon ? item.icon : options.showNum ? index + 1 : "" : "") : hx(_templateObject5, options.showNum ? index + 1 : ""), val(item.title), options.showDescription ? hx(_templateObject6, val(item.description)) : "");
            }));
            return vDom;
        }
    }, {
        key: "changeStatus",
        value: function changeStatus() {
            var options = this.options;
            if (options.current > options.data.length) options.current = options.data.length;
            options.data.forEach(function(item, index) {
                item.status = "wait";
                if (index < options.current) item.status = "finish";
                if (options.current == index) item.status = options.status;
            });
            this.refresh();
        }
    }, {
        key: "next",
        value: function next() {
            var options = this.options;
            options.current++;
            this.changeStatus();
            if (typeof options.onNext == "function") options.onNext(this, options.current);
        }
    }, {
        key: "previous",
        value: function previous() {
            var options = this.options;
            options.current--;
            this.changeStatus();
            if (typeof options.onPrevious == "function") options.onPrevious(this, options.current);
        }
    } ]);
    return Steps;
}(Lego.UI.Baseview);

Lego.components("steps", Steps);

module.exports = Steps;
