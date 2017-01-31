(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            exports: {},
            id: r,
            loaded: false
        };
        e[r].call(o.exports, o, o.exports, n);
        o.loaded = true;
        return o.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0);
})([ function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var o = n(1);
    var a = p(o);
    var i = n(2);
    var u = p(i);
    var l = n(3);
    var s = p(l);
    var c = n(4);
    var f = p(c);
    var b = n(5);
    var d = p(b);
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function v(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var h = function() {
        function e() {
            v(this, e);
            return {
                "/alert": [ this.index, this.tabs ],
                "/alert/:tabs": [ this.index, this.tabs ]
            };
        }
        r(e, [ {
            key: "index",
            value: function e() {
                this.viewObj = HBY.create(a.default, {
                    el: HBY.config.pageEl,
                    scrollbar: {},
                    currentTab: 0
                });
            }
        }, {
            key: "tabs",
            value: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                this.viewObj.options.currentTab = t || 0;
                var n = [ u.default, s.default, f.default ];
                HBY.create(n[t], {
                    el: "#pageContent"
                });
            }
        } ]);
        return e;
    }();
    HBY.router(new h());
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var r = o([ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert警告提示</a>\n                <a href="#/alert/1" class="', '">Button按钮</a>\n                <a href="#/alert/2" class="', '">Table表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ], [ '\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="', '">Alert警告提示</a>\n                <a href="#/alert/1" class="', '">Button按钮</a>\n                <a href="#/alert/2" class="', '">Table表格</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ' ]);
    function o(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function a(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function i(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function u(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var l = function(e) {
        u(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            a(this, t);
            var n = {
                events: {},
                currentTab: 0
            };
            Object.assign(n, e);
            return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = this.options;
                var n = hx(r, t.currentTab == 0 ? "active" : "", t.currentTab == 1 ? "active" : "", t.currentTab == 2 ? "active" : "");
                return n;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = l;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var r = o([ '\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        ' ], [ '\n        <div id="pageContent">\n            <alert id="alert1"></alert>\n            <alert id="alert2"></alert>\n            <alert id="alert3"></alert>\n            <alert id="alert4"></alert>\n        </div>\n        ' ]);
    function o(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function a(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function i(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function u(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var l = function(e) {
        u(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            a(this, t);
            var n = {
                events: {
                    "click .alert": "theClick"
                },
                components: [ {
                    el: "#alert1",
                    type: "success",
                    closable: true,
                    showIcon: false,
                    message: "警告提示内容"
                }, {
                    el: "#alert2",
                    type: "info",
                    closable: true,
                    showIcon: true,
                    message: "警告提示内容"
                }, {
                    el: "#alert3",
                    type: "warning",
                    closable: true,
                    showIcon: false,
                    message: "警告提示内容",
                    description: "警告提示的辅助性文字介绍"
                }, {
                    el: "#alert4",
                    type: "error",
                    closable: true,
                    showIcon: true,
                    message: "警告提示内容",
                    description: "警告提示的辅助性文字介绍"
                } ]
            };
            Object.assign(n, e);
            return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = hx(r);
                return t;
            }
        }, {
            key: "theClick",
            value: function e(t) {
                var n = $(t.currentTarget), r = HBY.getView(n);
                switch (r.options.type) {
                  case "success":
                    r.options.type = "info";
                    break;

                  case "info":
                    r.options.type = "warning";
                    break;

                  case "warning":
                    r.options.type = "error";
                    break;

                  case "error":
                    r.options.type = "success";
                    break;
                }
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = l;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var r = i([ '<div><buttons id="btnId"></buttons></div>' ], [ '<div><buttons id="btnId"></buttons></div>' ]), o = i([ '<div><buttons id="btnId2"></buttons></div>' ], [ '<div><buttons id="btnId2"></buttons></div>' ]), a = i([ '\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ' ], [ '\n        <div id="pageContent">\n            <div>\n                <buttons id="button1"></buttons>\n                <buttons id="button2"></buttons>\n                <buttons id="button3"></buttons>\n                <buttons id="button4"></buttons>\n                <buttons id="button5"></buttons>\n                <buttons id="button6"></buttons>\n                <buttons id="button7"></buttons>\n            </div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ' ]);
    function i(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function u(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function l(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function s(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var c = function(e) {
        s(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            u(this, t);
            var n = {
                events: {},
                components: [ {
                    el: "#button1",
                    type: "info",
                    text: "模态框",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button1");
                        Lego.UI.modal({
                            type: "layer",
                            content: "这是内容啊",
                            confirm: {
                                msgType: "error",
                                content: "你确定要退出吗？"
                            },
                            onOk: function e(t) {
                                console.warn("是真的");
                            }
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button2",
                    type: "primary",
                    text: "对话框",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button2");
                        Lego.UI.modal({
                            msgType: "success",
                            title: "对话框",
                            content: "成功了！",
                            confirm: {
                                msgType: "error",
                                content: "你确定要退出吗？"
                            },
                            onOk: function e(t) {
                                console.warn("是真的");
                            }
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button3",
                    type: "secondary",
                    onClick: function e(t) {
                        console.warn("点击了此按钮button3");
                        Lego.UI.modal({
                            type: "modal",
                            title: "内容模态框",
                            content: hx(r),
                            isMiddle: true,
                            width: 500,
                            components: [ {
                                el: "#btnId",
                                text: "点击我吧",
                                onClick: function e() {
                                    Lego.UI.modal({
                                        type: "modal",
                                        title: "子内容模态框",
                                        content: hx(o),
                                        isMiddle: true,
                                        backdrop: false,
                                        width: 500,
                                        height: 300,
                                        components: [ {
                                            el: "#btnId2",
                                            text: "点击我吧",
                                            type: "danger",
                                            onClick: function e() {
                                                console.warn("ooooooo");
                                            }
                                        } ]
                                    });
                                }
                            } ]
                        });
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button4",
                    type: "link",
                    onClick: function e() {
                        console.warn("点击了此按钮button4");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button5",
                    type: "success",
                    onClick: function e() {
                        console.warn("点击了此按钮button5");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button6",
                    type: "warning",
                    onClick: function e() {
                        console.warn("点击了此按钮button6");
                    },
                    style: {
                        marginRight: 10
                    }
                }, {
                    el: "#button7",
                    type: "danger",
                    onClick: function e() {
                        console.warn("点击了此按钮button7");
                    },
                    style: {
                        marginRight: 10
                    }
                } ]
            };
            Object.assign(n, e);
            var a = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
            var i = '\n    var legojs = {\n        nickName: "freefish",\n        site: "https://github.com/jlego/legojs"\n    }';
            var s = "\n| h1    |    h2   |      h3 |\n|:------|:-------:|--------:|\n| 100   | [a][1]  | ![b][2] |\n| *foo* | **bar** | ~~baz~~ |\n";
            a.$("#md").html(markdown.makeHtml(i));
            a.$("#tableDiv").html(markdown.makeHtml(s));
            a.$("pre").each(function(e, t) {
                hljs.highlightBlock(t);
            });
            return a;
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = hx(a);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = c;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    var r = o([ '\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ' ], [ '\n        <div id="pageContent" style="height:100%">\n            <tables id="theTable"></tables>\n        </div>\n        ' ]);
    function o(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }));
    }
    function a(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function i(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function u(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var l = function(e) {
        u(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            a(this, t);
            function n() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var t = [];
                for (var n = (e - 1) * 20; n < e * 20; n++) {
                    t.push({
                        key: n,
                        name: "胡彦斌" + n,
                        age: 32 + n,
                        address: "西湖区湖底公园1号"
                    });
                }
                return t;
            }
            var r = {
                components: [ {
                    el: "#theTable",
                    className: "table-striped",
                    rowSelection: {
                        type: "checkbox"
                    },
                    pagination: {
                        total: 300,
                        pageRang: 5,
                        pageSize: 20,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        onChange: function e(t, r) {
                            var o = Lego.getView("#theTable");
                            o.options.data = n(r);
                            o.refresh();
                        }
                    },
                    showHeader: true,
                    colSetting: function e() {
                        console.warn("点击了列设置");
                    },
                    title: function e() {
                        return "表格标题";
                    },
                    style: {
                        height: "100%"
                    },
                    data: n(),
                    columns: [ {
                        title: "姓名",
                        dataIndex: "name",
                        key: "name",
                        width: "200px",
                        filter: function e(t) {
                            console.warn("点击了筛选", t);
                        }
                    }, {
                        title: "年龄",
                        dataIndex: "age",
                        key: "age",
                        width: "200px",
                        onCellClick: function e(t, n) {
                            console.warn(t, n);
                        },
                        filter: function e(t) {
                            console.warn("点击了筛选", t);
                        },
                        sorter: function e(t) {
                            console.warn("点击了排序", t);
                        }
                    }, {
                        title: "住址",
                        dataIndex: "address",
                        key: "address",
                        width: "200px"
                    } ]
                } ]
            };
            Object.assign(r, e);
            return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
        }
        n(t, [ {
            key: "render",
            value: function e() {
                var t = hx(r);
                return t;
            }
        } ]);
        return t;
    }(Lego.UI.Baseview);
    t.default = l;
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) e(t.prototype, n);
            if (r) e(t, r);
            return t;
        };
    }();
    function r(e, t) {
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function o(e, t) {
        if (!e) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e;
    }
    function a(e, t) {
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
    }
    var i = function(e) {
        a(t, e);
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            r(this, t);
            var n = {
                gg: {
                    url: "./content2.json",
                    listTarget: "data",
                    model: {
                        first: "",
                        last: "",
                        id: 0
                    }
                },
                ff: {
                    url: "./content2.json"
                }
            };
            $.extend(true, n, e);
            return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
        }
        n(t, [ {
            key: "parse",
            value: function e(t) {
                return t[0].data;
            }
        } ]);
        return t;
    }(HBY.Data);
    t.default = new i();
} ]);