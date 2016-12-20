(function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = { exports: {}, id: r, loaded: false };
        e[r].call(i.exports, i, i.exports, n);
        i.loaded = true;
        return i.exports }
    n.m = e;
    n.c = t;
    n.p = "./dist/";
    return n(0) })({
    0: function(e, t, n) { "use strict";
        var r = n(6);
        var i = o(r);
        n(341);
        n(348);

        function o(e) {
            return e && e.__esModule ? e : { default: e } }
        Lego.init({ alias: "HBY", version: "20161202", $: i.default, pageEl: "#container", defaultApp: "home", rootUri: "/example/dist/" }) },
    6: function(e, t, n) {
        var r, i;
        (function(t, n) { "use strict";
            if (typeof e === "object" && typeof e.exports === "object") { e.exports = t.document ? n(t, true) : function(e) {
                    if (!e.document) {
                        throw new Error("jQuery requires a window with a document") }
                    return n(e) } } else { n(t) } })(typeof window !== "undefined" ? window : this, function(n, o) {
            "use strict";
            var s = [];
            var a = n.document;
            var u = Object.getPrototypeOf;
            var f = s.slice;
            var l = s.concat;
            var c = s.push;
            var p = s.indexOf;
            var d = {};
            var h = d.toString;
            var v = d.hasOwnProperty;
            var y = v.toString;
            var g = y.call(Object);
            var m = {};

            function b(e, t) { t = t || a;
                var n = t.createElement("script");
                n.text = e;
                t.head.appendChild(n).parentNode.removeChild(n) }
            var w = "3.1.1",
                jQuery = function(e, t) {
                    return new jQuery.fn.init(e, t) },
                x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                E = /^-ms-/,
                T = /-([a-z])/g,
                k = function(e, t) {
                    return t.toUpperCase() };
            jQuery.fn = jQuery.prototype = { jquery: w, constructor: jQuery, length: 0, toArray: function() {
                    return f.call(this) }, get: function(e) {
                    if (e == null) {
                        return f.call(this) }
                    return e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) {
                    var t = jQuery.merge(this.constructor(), e);
                    t.prevObject = this;
                    return t }, each: function(e) {
                    return jQuery.each(this, e) }, map: function(e) {
                    return this.pushStack(jQuery.map(this, function(t, n) {
                        return e.call(t, n, t) })) }, slice: function() {
                    return this.pushStack(f.apply(this, arguments)) }, first: function() {
                    return this.eq(0) }, last: function() {
                    return this.eq(-1) }, eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() {
                    return this.prevObject || this.constructor() }, push: c, sort: s.sort, splice: s.splice };
            jQuery.extend = jQuery.fn.extend = function() {
                var e, t, n, r, i, o, s = arguments[0] || {},
                    a = 1,
                    u = arguments.length,
                    f = false;
                if (typeof s === "boolean") { f = s;
                    s = arguments[a] || {};
                    a++ }
                if (typeof s !== "object" && !jQuery.isFunction(s)) { s = {} }
                if (a === u) { s = this;
                    a-- }
                for (; a < u; a++) {
                    if ((e = arguments[a]) != null) {
                        for (t in e) { n = s[t];
                            r = e[t];
                            if (s === r) {
                                continue }
                            if (f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r)))) {
                                if (i) { i = false;
                                    o = n && jQuery.isArray(n) ? n : [] } else { o = n && jQuery.isPlainObject(n) ? n : {} }
                                s[t] = jQuery.extend(f, o, r) } else if (r !== undefined) { s[t] = r } } } }
                return s };
            jQuery.extend({ expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e) {
                    throw new Error(e) }, noop: function() {}, isFunction: function(e) {
                    return jQuery.type(e) === "function" }, isArray: Array.isArray, isWindow: function(e) {
                    return e != null && e === e.window }, isNumeric: function(e) {
                    var t = jQuery.type(e);
                    return (t === "number" || t === "string") && !isNaN(e - parseFloat(e)) }, isPlainObject: function(e) {
                    var t, n;
                    if (!e || h.call(e) !== "[object Object]") {
                        return false }
                    t = u(e);
                    if (!t) {
                        return true }
                    n = v.call(t, "constructor") && t.constructor;
                    return typeof n === "function" && y.call(n) === g }, isEmptyObject: function(e) {
                    var t;
                    for (t in e) {
                        return false }
                    return true }, type: function(e) {
                    if (e == null) {
                        return e + "" }
                    return typeof e === "object" || typeof e === "function" ? d[h.call(e)] || "object" : typeof e }, globalEval: function(e) { b(e) }, camelCase: function(e) {
                    return e.replace(E, "ms-").replace(T, k) }, nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t) {
                    var n, r = 0;
                    if (j(e)) { n = e.length;
                        for (; r < n; r++) {
                            if (t.call(e[r], r, e[r]) === false) {
                                break } } } else {
                        for (r in e) {
                            if (t.call(e[r], r, e[r]) === false) {
                                break } } }
                    return e }, trim: function(e) {
                    return e == null ? "" : (e + "").replace(x, "") }, makeArray: function(e, t) {
                    var n = t || [];
                    if (e != null) {
                        if (j(Object(e))) { jQuery.merge(n, typeof e === "string" ? [e] : e) } else { c.call(n, e) } }
                    return n }, inArray: function(e, t, n) {
                    return t == null ? -1 : p.call(t, e, n) }, merge: function(e, t) {
                    var n = +t.length,
                        r = 0,
                        i = e.length;
                    for (; r < n; r++) { e[i++] = t[r] }
                    e.length = i;
                    return e }, grep: function(e, t, n) {
                    var r, i = [],
                        o = 0,
                        s = e.length,
                        a = !n;
                    for (; o < s; o++) { r = !t(e[o], o);
                        if (r !== a) { i.push(e[o]) } }
                    return i }, map: function(e, t, n) {
                    var r, i, o = 0,
                        s = [];
                    if (j(e)) { r = e.length;
                        for (; o < r; o++) { i = t(e[o], o, n);
                            if (i != null) { s.push(i) } } } else {
                        for (o in e) { i = t(e[o], o, n);
                            if (i != null) { s.push(i) } } }
                    return l.apply([], s) }, guid: 1, proxy: function(e, t) {
                    var n, r, i;
                    if (typeof t === "string") { n = e[t];
                        t = e;
                        e = n }
                    if (!jQuery.isFunction(e)) {
                        return undefined }
                    r = f.call(arguments, 2);
                    i = function() {
                        return e.apply(t || this, r.concat(f.call(arguments))) };
                    i.guid = e.guid = e.guid || jQuery.guid++;
                    return i }, now: Date.now, support: m });
            if (typeof Symbol === "function") { jQuery.fn[Symbol.iterator] = s[Symbol.iterator] }
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { d["[object " + t + "]"] = t.toLowerCase() });

            function j(e) {
                var t = !!e && "length" in e && e.length,
                    n = jQuery.type(e);
                if (n === "function" || jQuery.isWindow(e)) {
                    return false }
                return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e }
            var C = function(e) {
                var t, n, r, i, o, s, a, u, f, l, c, p, d, h, v, y, g, m, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    E = 0,
                    T = 0,
                    k = ae(),
                    j = ae(),
                    C = ae(),
                    A = function(e, t) {
                        if (e === t) { c = true }
                        return 0 },
                    _ = {}.hasOwnProperty,
                    N = [],
                    O = N.pop,
                    L = N.push,
                    S = N.push,
                    D = N.slice,
                    P = function(e, t) {
                        var n = 0,
                            r = e.length;
                        for (; n < r; n++) {
                            if (e[n] === t) {
                                return n } }
                        return -1 },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    H = "\\[" + F + "*(" + q + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]",
                    M = ":(" + q + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|" + ".*" + ")\\)|)",
                    I = new RegExp(F + "+", "g"),
                    B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                    W = new RegExp("^" + F + "*," + F + "*"),
                    z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
                    U = new RegExp(M),
                    G = new RegExp("^" + q + "$"),
                    Q = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), TAG: new RegExp("^(" + q + "|[*])"), ATTR: new RegExp("^" + H), PSEUDO: new RegExp("^" + M), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i") },
                    X = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    ee = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                    te = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320) },
                    ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function(e, t) {
                        if (t) {
                            if (e === "\0") {
                                return "�" }
                            return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " }
                        return "\\" + e },
                    ie = function() { p() },
                    oe = be(function(e) {
                        return e.disabled === true && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
                try { S.apply(N = D.call(x.childNodes), x.childNodes);
                    N[x.childNodes.length].nodeType } catch (e) { S = { apply: N.length ? function(e, t) { L.apply(e, D.call(t)) } : function(e, t) {
                            var n = e.length,
                                r = 0;
                            while (e[n++] = t[r++]) {}
                            e.length = n - 1 } } }

                function se(e, t, r, i) {
                    var o, a, f, l, c, h, g, m = t && t.ownerDocument,
                        E = t ? t.nodeType : 9;
                    r = r || [];
                    if (typeof e !== "string" || !e || E !== 1 && E !== 9 && E !== 11) {
                        return r }
                    if (!i) {
                        if ((t ? t.ownerDocument || t : x) !== d) { p(t) }
                        t = t || d;
                        if (v) {
                            if (E !== 11 && (c = J.exec(e))) {
                                if (o = c[1]) {
                                    if (E === 9) {
                                        if (f = t.getElementById(o)) {
                                            if (f.id === o) { r.push(f);
                                                return r } } else {
                                            return r } } else {
                                        if (m && (f = m.getElementById(o)) && b(t, f) && f.id === o) { r.push(f);
                                            return r } } } else if (c[2]) { S.apply(r, t.getElementsByTagName(e));
                                    return r } else if ((o = c[3]) && n.getElementsByClassName && t.getElementsByClassName) { S.apply(r, t.getElementsByClassName(o));
                                    return r } }
                            if (n.qsa && !C[e + " "] && (!y || !y.test(e))) {
                                if (E !== 1) { m = t;
                                    g = e } else if (t.nodeName.toLowerCase() !== "object") {
                                    if (l = t.getAttribute("id")) { l = l.replace(ne, re) } else { t.setAttribute("id", l = w) }
                                    h = s(e);
                                    a = h.length;
                                    while (a--) { h[a] = "#" + l + " " + me(h[a]) }
                                    g = h.join(",");
                                    m = Z.test(e) && ye(t.parentNode) || t }
                                if (g) {
                                    try { S.apply(r, m.querySelectorAll(g));
                                        return r } catch (e) {} finally {
                                        if (l === w) { t.removeAttribute("id") } } } } } }
                    return u(e.replace(B, "$1"), t, r, i) }

                function ae() {
                    var e = [];

                    function t(n, i) {
                        if (e.push(n + " ") > r.cacheLength) { delete t[e.shift()] }
                        return t[n + " "] = i }
                    return t }

                function ue(e) { e[w] = true;
                    return e }

                function fe(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t) } catch (e) {
                        return false } finally {
                        if (t.parentNode) { t.parentNode.removeChild(t) }
                        t = null } }

                function le(e, t) {
                    var n = e.split("|"),
                        i = n.length;
                    while (i--) { r.attrHandle[n[i]] = t } }

                function ce(e, t) {
                    var n = t && e,
                        r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                    if (r) {
                        return r }
                    if (n) {
                        while (n = n.nextSibling) {
                            if (n === t) {
                                return -1 } } }
                    return e ? 1 : -1 }

                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e } }

                function de(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e } }

                function he(e) {
                    return function(t) {
                        if ("form" in t) {
                            if (t.parentNode && t.disabled === false) {
                                if ("label" in t) {
                                    if ("label" in t.parentNode) {
                                        return t.parentNode.disabled === e } else {
                                        return t.disabled === e } }
                                return t.isDisabled === e || t.isDisabled !== !e && oe(t) === e }
                            return t.disabled === e } else if ("label" in t) {
                            return t.disabled === e }
                        return false } }

                function ve(e) {
                    return ue(function(t) { t = +t;
                        return ue(function(n, r) {
                            var i, o = e([], n.length, t),
                                s = o.length;
                            while (s--) {
                                if (n[i = o[s]]) { n[i] = !(r[i] = n[i]) } } }) }) }

                function ye(e) {
                    return e && typeof e.getElementsByTagName !== "undefined" && e }
                n = se.support = {};
                o = se.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : false };
                p = se.setDocument = function(e) {
                    var t, i, s = e ? e.ownerDocument || e : x;
                    if (s === d || s.nodeType !== 9 || !s.documentElement) {
                        return d }
                    d = s;
                    h = d.documentElement;
                    v = !o(d);
                    if (x !== d && (i = d.defaultView) && i.top !== i) {
                        if (i.addEventListener) { i.addEventListener("unload", ie, false) } else if (i.attachEvent) { i.attachEvent("onunload", ie) } }
                    n.attributes = fe(function(e) { e.className = "i";
                        return !e.getAttribute("className") });
                    n.getElementsByTagName = fe(function(e) { e.appendChild(d.createComment(""));
                        return !e.getElementsByTagName("*").length });
                    n.getElementsByClassName = K.test(d.getElementsByClassName);
                    n.getById = fe(function(e) { h.appendChild(e).id = w;
                        return !d.getElementsByName || !d.getElementsByName(w).length });
                    if (n.getById) { r.filter["ID"] = function(e) {
                            var t = e.replace(ee, te);
                            return function(e) {
                                return e.getAttribute("id") === t } };
                        r.find["ID"] = function(e, t) {
                            if (typeof t.getElementById !== "undefined" && v) {
                                var n = t.getElementById(e);
                                return n ? [n] : [] } } } else { r.filter["ID"] = function(e) {
                            var t = e.replace(ee, te);
                            return function(e) {
                                var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                                return n && n.value === t } };
                        r.find["ID"] = function(e, t) {
                            if (typeof t.getElementById !== "undefined" && v) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) { n = o.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [o] }
                                    i = t.getElementsByName(e);
                                    r = 0;
                                    while (o = i[r++]) { n = o.getAttributeNode("id");
                                        if (n && n.value === e) {
                                            return [o] } } }
                                return [] } } }
                    r.find["TAG"] = n.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName !== "undefined") {
                            return t.getElementsByTagName(e) } else if (n.qsa) {
                            return t.querySelectorAll(e) } } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if (e === "*") {
                            while (n = o[i++]) {
                                if (n.nodeType === 1) { r.push(n) } }
                            return r }
                        return o };
                    r.find["CLASS"] = n.getElementsByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== "undefined" && v) {
                            return t.getElementsByClassName(e) } };
                    g = [];
                    y = [];
                    if (n.qsa = K.test(d.querySelectorAll)) { fe(function(e) { h.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                            if (e.querySelectorAll("[msallowcapture^='']").length) { y.push("[*^$]=" + F + "*(?:''|\"\")") }
                            if (!e.querySelectorAll("[selected]").length) { y.push("\\[" + F + "*(?:value|" + R + ")") }
                            if (!e.querySelectorAll("[id~=" + w + "-]").length) { y.push("~=") }
                            if (!e.querySelectorAll(":checked").length) { y.push(":checked") }
                            if (!e.querySelectorAll("a#" + w + "+*").length) { y.push(".#.+[+~]") } });
                        fe(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden");
                            e.appendChild(t).setAttribute("name", "D");
                            if (e.querySelectorAll("[name=d]").length) { y.push("name" + F + "*[*^$|!~]?=") }
                            if (e.querySelectorAll(":enabled").length !== 2) { y.push(":enabled", ":disabled") }
                            h.appendChild(e).disabled = true;
                            if (e.querySelectorAll(":disabled").length !== 2) { y.push(":enabled", ":disabled") }
                            e.querySelectorAll("*,:x");
                            y.push(",.*:") }) }
                    if (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) { fe(function(e) { n.disconnectedMatch = m.call(e, "*");
                            m.call(e, "[s!='']:x");
                            g.push("!=", M) }) }
                    y = y.length && new RegExp(y.join("|"));
                    g = g.length && new RegExp(g.join("|"));
                    t = K.test(h.compareDocumentPosition);
                    b = t || K.test(h.contains) ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)) } : function(e, t) {
                        if (t) {
                            while (t = t.parentNode) {
                                if (t === e) {
                                    return true } } }
                        return false };
                    A = t ? function(e, t) {
                        if (e === t) { c = true;
                            return 0 }
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        if (r) {
                            return r }
                        r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                        if (r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r) {
                            if (e === d || e.ownerDocument === x && b(x, e)) {
                                return -1 }
                            if (t === d || t.ownerDocument === x && b(x, t)) {
                                return 1 }
                            return l ? P(l, e) - P(l, t) : 0 }
                        return r & 4 ? -1 : 1 } : function(e, t) {
                        if (e === t) { c = true;
                            return 0 }
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!i || !o) {
                            return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0 } else if (i === o) {
                            return ce(e, t) }
                        n = e;
                        while (n = n.parentNode) { s.unshift(n) }
                        n = t;
                        while (n = n.parentNode) { a.unshift(n) }
                        while (s[r] === a[r]) { r++ }
                        return r ? ce(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0 };
                    return d };
                se.matches = function(e, t) {
                    return se(e, null, null, t) };
                se.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d) { p(e) }
                    t = t.replace(V, "='$1']");
                    if (n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!y || !y.test(t))) {
                        try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                                return r } } catch (e) {} }
                    return se(t, d, null, [e]).length > 0 };
                se.contains = function(e, t) {
                    if ((e.ownerDocument || e) !== d) { p(e) }
                    return b(e, t) };
                se.attr = function(e, t) {
                    if ((e.ownerDocument || e) !== d) { p(e) }
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && _.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
                    return o !== undefined ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null };
                se.escape = function(e) {
                    return (e + "").replace(ne, re) };
                se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e) };
                se.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    c = !n.detectDuplicates;
                    l = !n.sortStable && e.slice(0);
                    e.sort(A);
                    if (c) {
                        while (t = e[o++]) {
                            if (t === e[o]) { i = r.push(o) } }
                        while (i--) { e.splice(r[i], 1) } }
                    l = null;
                    return e };
                i = se.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (!o) {
                        while (t = e[r++]) { n += i(t) } } else if (o === 1 || o === 9 || o === 11) {
                        if (typeof e.textContent === "string") {
                            return e.textContent } else {
                            for (e = e.firstChild; e; e = e.nextSibling) { n += i(e) } } } else if (o === 3 || o === 4) {
                        return e.nodeValue }
                    return n };
                r = se.selectors = { cacheLength: 50, createPseudo: ue, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { e[1] = e[1].replace(ee, te);
                            e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te);
                            if (e[2] === "~=") { e[3] = " " + e[3] + " " }
                            return e.slice(0, 4) }, CHILD: function(e) { e[1] = e[1].toLowerCase();
                            if (e[1].slice(0, 3) === "nth") {
                                if (!e[3]) { se.error(e[0]) }
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                                e[5] = +(e[7] + e[8] || e[3] === "odd") } else if (e[3]) { se.error(e[0]) }
                            return e }, PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            if (Q["CHILD"].test(e[0])) {
                                return null }
                            if (e[3]) { e[2] = e[4] || e[5] || "" } else if (n && U.test(n) && (t = s(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) { e[0] = e[0].slice(0, t);
                                e[2] = n.slice(0, t) }
                            return e.slice(0, 3) } }, filter: { TAG: function(e) {
                            var t = e.replace(ee, te).toLowerCase();
                            return e === "*" ? function() {
                                return true } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && k(e, function(e) {
                                return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "") }) }, ATTR: function(e, t, n) {
                            return function(r) {
                                var i = se.attr(r, e);
                                if (i == null) {
                                    return t === "!=" }
                                if (!t) {
                                    return true }
                                i += "";
                                return t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : false } }, CHILD: function(e, t, n, r, i) {
                            var o = e.slice(0, 3) !== "nth",
                                s = e.slice(-4) !== "last",
                                a = t === "of-type";
                            return r === 1 && i === 0 ? function(e) {
                                return !!e.parentNode } : function(t, n, u) {
                                var f, l, c, p, d, h, v = o !== s ? "nextSibling" : "previousSibling",
                                    y = t.parentNode,
                                    g = a && t.nodeName.toLowerCase(),
                                    m = !u && !a,
                                    b = false;
                                if (y) {
                                    if (o) {
                                        while (v) { p = t;
                                            while (p = p[v]) {
                                                if (a ? p.nodeName.toLowerCase() === g : p.nodeType === 1) {
                                                    return false } }
                                            h = v = e === "only" && !h && "nextSibling" }
                                        return true }
                                    h = [s ? y.firstChild : y.lastChild];
                                    if (s && m) { p = y;
                                        c = p[w] || (p[w] = {});
                                        l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                        f = l[e] || [];
                                        d = f[0] === E && f[1];
                                        b = d && f[2];
                                        p = d && y.childNodes[d];
                                        while (p = ++d && p && p[v] || (b = d = 0) || h.pop()) {
                                            if (p.nodeType === 1 && ++b && p === t) { l[e] = [E, d, b];
                                                break } } } else {
                                        if (m) { p = t;
                                            c = p[w] || (p[w] = {});
                                            l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                            f = l[e] || [];
                                            d = f[0] === E && f[1];
                                            b = d }
                                        if (b === false) {
                                            while (p = ++d && p && p[v] || (b = d = 0) || h.pop()) {
                                                if ((a ? p.nodeName.toLowerCase() === g : p.nodeType === 1) && ++b) {
                                                    if (m) { c = p[w] || (p[w] = {});
                                                        l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                                        l[e] = [E, b] }
                                                    if (p === t) {
                                                        break } } } } }
                                    b -= i;
                                    return b === r || b % r === 0 && b / r >= 0 } } }, PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            if (i[w]) {
                                return i(t) }
                            if (i.length > 1) { n = [e, e, "", t];
                                return r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                                    var r, o = i(e, t),
                                        s = o.length;
                                    while (s--) { r = P(e, o[s]);
                                        e[r] = !(n[r] = o[s]) } }) : function(e) {
                                    return i(e, 0, n) } }
                            return i } }, pseudos: { not: ue(function(e) {
                            var t = [],
                                n = [],
                                r = a(e.replace(B, "$1"));
                            return r[w] ? ue(function(e, t, n, i) {
                                var o, s = r(e, null, i, []),
                                    a = e.length;
                                while (a--) {
                                    if (o = s[a]) { e[a] = !(t[a] = o) } } }) : function(e, i, o) { t[0] = e;
                                r(t, null, o, n);
                                t[0] = null;
                                return !n.pop() } }), has: ue(function(e) {
                            return function(t) {
                                return se(e, t).length > 0 } }), contains: ue(function(e) { e = e.replace(ee, te);
                            return function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 } }), lang: ue(function(e) {
                            if (!G.test(e || "")) { se.error("unsupported lang: " + e) }
                            e = e.replace(ee, te).toLowerCase();
                            return function(t) {
                                var n;
                                do {
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) { n = n.toLowerCase();
                                        return n === e || n.indexOf(e + "-") === 0 } } while ((t = t.parentNode) && t.nodeType === 1);
                                return false } }), target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id }, root: function(e) {
                            return e === h }, focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: he(false), disabled: he(true), checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected }, selected: function(e) {
                            if (e.parentNode) { e.parentNode.selectedIndex }
                            return e.selected === true }, empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                if (e.nodeType < 6) {
                                    return false } }
                            return true }, parent: function(e) {
                            return !r.pseudos["empty"](e) }, header: function(e) {
                            return Y.test(e.nodeName) }, input: function(e) {
                            return X.test(e.nodeName) }, button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button" }, text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text") }, first: ve(function() {
                            return [0] }), last: ve(function(e, t) {
                            return [t - 1] }), eq: ve(function(e, t, n) {
                            return [n < 0 ? n + t : n] }), even: ve(function(e, t) {
                            var n = 0;
                            for (; n < t; n += 2) { e.push(n) }
                            return e }), odd: ve(function(e, t) {
                            var n = 1;
                            for (; n < t; n += 2) { e.push(n) }
                            return e }), lt: ve(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0;) { e.push(r) }
                            return e }), gt: ve(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t;) { e.push(r) }
                            return e }) } };
                r.pseudos["nth"] = r.pseudos["eq"];
                for (t in { radio: true, checkbox: true, file: true, password: true, image: true }) { r.pseudos[t] = pe(t) }
                for (t in { submit: true, reset: true }) { r.pseudos[t] = de(t) }

                function ge() {}
                ge.prototype = r.filters = r.pseudos;
                r.setFilters = new ge;
                s = se.tokenize = function(e, t) {
                    var n, i, o, s, a, u, f, l = j[e + " "];
                    if (l) {
                        return t ? 0 : l.slice(0) }
                    a = e;
                    u = [];
                    f = r.preFilter;
                    while (a) {
                        if (!n || (i = W.exec(a))) {
                            if (i) { a = a.slice(i[0].length) || a }
                            u.push(o = []) }
                        n = false;
                        if (i = z.exec(a)) { n = i.shift();
                            o.push({ value: n, type: i[0].replace(B, " ") });
                            a = a.slice(n.length) }
                        for (s in r.filter) {
                            if ((i = Q[s].exec(a)) && (!f[s] || (i = f[s](i)))) { n = i.shift();
                                o.push({ value: n, type: s, matches: i });
                                a = a.slice(n.length) } }
                        if (!n) {
                            break } }
                    return t ? a.length : a ? se.error(e) : j(e, u).slice(0) };

                function me(e) {
                    var t = 0,
                        n = e.length,
                        r = "";
                    for (; t < n; t++) { r += e[t].value }
                    return r }

                function be(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        s = n && o === "parentNode",
                        a = T++;
                    return t.first ? function(t, n, i) {
                        while (t = t[r]) {
                            if (t.nodeType === 1 || s) {
                                return e(t, n, i) } }
                        return false } : function(t, n, u) {
                        var f, l, c, p = [E, a];
                        if (u) {
                            while (t = t[r]) {
                                if (t.nodeType === 1 || s) {
                                    if (e(t, n, u)) {
                                        return true } } } } else {
                            while (t = t[r]) {
                                if (t.nodeType === 1 || s) { c = t[w] || (t[w] = {});
                                    l = c[t.uniqueID] || (c[t.uniqueID] = {});
                                    if (i && i === t.nodeName.toLowerCase()) { t = t[r] || t } else if ((f = l[o]) && f[0] === E && f[1] === a) {
                                        return p[2] = f[2] } else { l[o] = p;
                                        if (p[2] = e(t, n, u)) {
                                            return true } } } } }
                        return false } }

                function we(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--) {
                            if (!e[i](t, n, r)) {
                                return false } }
                        return true } : e[0] }

                function xe(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) { se(e, t[r], n) }
                    return n }

                function Ee(e, t, n, r, i) {
                    var o, s = [],
                        a = 0,
                        u = e.length,
                        f = t != null;
                    for (; a < u; a++) {
                        if (o = e[a]) {
                            if (!n || n(o, r, i)) { s.push(o);
                                if (f) { t.push(a) } } } }
                    return s }

                function Te(e, t, n, r, i, o) {
                    if (r && !r[w]) { r = Te(r) }
                    if (i && !i[w]) { i = Te(i, o) }
                    return ue(function(o, s, a, u) {
                        var f, l, c, p = [],
                            d = [],
                            h = s.length,
                            v = o || xe(t || "*", a.nodeType ? [a] : a, []),
                            y = e && (o || !t) ? Ee(v, p, e, a, u) : v,
                            g = n ? i || (o ? e : h || r) ? [] : s : y;
                        if (n) { n(y, g, a, u) }
                        if (r) { f = Ee(g, d);
                            r(f, [], a, u);
                            l = f.length;
                            while (l--) {
                                if (c = f[l]) { g[d[l]] = !(y[d[l]] = c) } } }
                        if (o) {
                            if (i || e) {
                                if (i) { f = [];
                                    l = g.length;
                                    while (l--) {
                                        if (c = g[l]) { f.push(y[l] = c) } }
                                    i(null, g = [], f, u) }
                                l = g.length;
                                while (l--) {
                                    if ((c = g[l]) && (f = i ? P(o, c) : p[l]) > -1) { o[f] = !(s[f] = c) } } } } else { g = Ee(g === s ? g.splice(h, g.length) : g);
                            if (i) { i(null, s, g, u) } else { S.apply(s, g) } } }) }

                function ke(e) {
                    var t, n, i, o = e.length,
                        s = r.relative[e[0].type],
                        a = s || r.relative[" "],
                        u = s ? 1 : 0,
                        l = be(function(e) {
                            return e === t }, a, true),
                        c = be(function(e) {
                            return P(t, e) > -1 }, a, true),
                        p = [function(e, n, r) {
                            var i = !s && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            t = null;
                            return i }];
                    for (; u < o; u++) {
                        if (n = r.relative[e[u].type]) { p = [be(we(p), n)] } else { n = r.filter[e[u].type].apply(null, e[u].matches);
                            if (n[w]) { i = ++u;
                                for (; i < o; i++) {
                                    if (r.relative[e[i].type]) {
                                        break } }
                                return Te(u > 1 && we(p), u > 1 && me(e.slice(0, u - 1).concat({ value: e[u - 2].type === " " ? "*" : "" })).replace(B, "$1"), n, u < i && ke(e.slice(u, i)), i < o && ke(e = e.slice(i)), i < o && me(e)) }
                            p.push(n) } }
                    return we(p) }

                function je(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, s, a, u, l) {
                            var c, h, y, g = 0,
                                m = "0",
                                b = o && [],
                                w = [],
                                x = f,
                                T = o || i && r.find["TAG"]("*", l),
                                k = E += x == null ? 1 : Math.random() || .1,
                                j = T.length;
                            if (l) { f = s === d || s || l }
                            for (; m !== j && (c = T[m]) != null; m++) {
                                if (i && c) { h = 0;
                                    if (!s && c.ownerDocument !== d) { p(c);
                                        a = !v }
                                    while (y = e[h++]) {
                                        if (y(c, s || d, a)) { u.push(c);
                                            break } }
                                    if (l) { E = k } }
                                if (n) {
                                    if (c = !y && c) { g-- }
                                    if (o) { b.push(c) } } }
                            g += m;
                            if (n && m !== g) { h = 0;
                                while (y = t[h++]) { y(b, w, s, a) }
                                if (o) {
                                    if (g > 0) {
                                        while (m--) {
                                            if (!(b[m] || w[m])) { w[m] = O.call(u) } } }
                                    w = Ee(w) }
                                S.apply(u, w);
                                if (l && !o && w.length > 0 && g + t.length > 1) { se.uniqueSort(u) } }
                            if (l) { E = k;
                                f = x }
                            return b };
                    return n ? ue(o) : o }
                a = se.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = C[e + " "];
                    if (!o) {
                        if (!t) { t = s(e) }
                        n = t.length;
                        while (n--) { o = ke(t[n]);
                            if (o[w]) { r.push(o) } else { i.push(o) } }
                        o = C(e, je(i, r));
                        o.selector = e }
                    return o };
                u = se.select = function(e, t, n, i) {
                    var o, u, f, l, c, p = typeof e === "function" && e,
                        d = !i && s(e = p.selector || e);
                    n = n || [];
                    if (d.length === 1) { u = d[0] = d[0].slice(0);
                        if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && v && r.relative[u[1].type]) { t = (r.find["ID"](f.matches[0].replace(ee, te), t) || [])[0];
                            if (!t) {
                                return n } else if (p) { t = t.parentNode }
                            e = e.slice(u.shift().value.length) }
                        o = Q["needsContext"].test(e) ? 0 : u.length;
                        while (o--) { f = u[o];
                            if (r.relative[l = f.type]) {
                                break }
                            if (c = r.find[l]) {
                                if (i = c(f.matches[0].replace(ee, te), Z.test(u[0].type) && ye(t.parentNode) || t)) { u.splice(o, 1);
                                    e = i.length && me(u);
                                    if (!e) { S.apply(n, i);
                                        return n }
                                    break } } } }(p || a(e, d))(i, t, !v, n, !t || Z.test(e) && ye(t.parentNode) || t);
                    return n };
                n.sortStable = w.split("").sort(A).join("") === w;
                n.detectDuplicates = !!c;
                p();
                n.sortDetached = fe(function(e) {
                    return e.compareDocumentPosition(d.createElement("fieldset")) & 1 });
                if (!fe(function(e) { e.innerHTML = "<a href='#'></a>";
                        return e.firstChild.getAttribute("href") === "#" })) { le("type|href|height|width", function(e, t, n) {
                        if (!n) {
                            return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2) } }) }
                if (!n.attributes || !fe(function(e) { e.innerHTML = "<input/>";
                        e.firstChild.setAttribute("value", "");
                        return e.firstChild.getAttribute("value") === "" })) { le("value", function(e, t, n) {
                        if (!n && e.nodeName.toLowerCase() === "input") {
                            return e.defaultValue } }) }
                if (!fe(function(e) {
                        return e.getAttribute("disabled") == null })) { le(R, function(e, t, n) {
                        var r;
                        if (!n) {
                            return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null } }) }
                return se }(n);
            jQuery.find = C;
            jQuery.expr = C.selectors;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.uniqueSort = jQuery.unique = C.uniqueSort;
            jQuery.text = C.getText;
            jQuery.isXMLDoc = C.isXML;
            jQuery.contains = C.contains;
            jQuery.escapeSelector = C.escape;
            var A = function(e, t, n) {
                var r = [],
                    i = n !== undefined;
                while ((e = e[t]) && e.nodeType !== 9) {
                    if (e.nodeType === 1) {
                        if (i && jQuery(e).is(n)) {
                            break }
                        r.push(e) } }
                return r };
            var _ = function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) {
                    if (e.nodeType === 1 && e !== t) { n.push(e) } }
                return n };
            var N = jQuery.expr.match.needsContext;
            var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            var L = /^.[^:#\[\.,]*$/;

            function S(e, t, n) {
                if (jQuery.isFunction(t)) {
                    return jQuery.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n }) }
                if (t.nodeType) {
                    return jQuery.grep(e, function(e) {
                        return e === t !== n }) }
                if (typeof t !== "string") {
                    return jQuery.grep(e, function(e) {
                        return p.call(t, e) > -1 !== n }) }
                if (L.test(t)) {
                    return jQuery.filter(t, e, n) }
                t = jQuery.filter(t, e);
                return jQuery.grep(e, function(e) {
                    return p.call(t, e) > -1 !== n && e.nodeType === 1 }) }
            jQuery.filter = function(e, t, n) {
                var r = t[0];
                if (n) { e = ":not(" + e + ")" }
                if (t.length === 1 && r.nodeType === 1) {
                    return jQuery.find.matchesSelector(r, e) ? [r] : [] }
                return jQuery.find.matches(e, jQuery.grep(t, function(e) {
                    return e.nodeType === 1 })) };
            jQuery.fn.extend({ find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if (typeof e !== "string") {
                        return this.pushStack(jQuery(e).filter(function() {
                            for (t = 0; t < r; t++) {
                                if (jQuery.contains(i[t], this)) {
                                    return true } } })) }
                    n = this.pushStack([]);
                    for (t = 0; t < r; t++) { jQuery.find(e, i[t], n) }
                    return r > 1 ? jQuery.uniqueSort(n) : n }, filter: function(e) {
                    return this.pushStack(S(this, e || [], false)) }, not: function(e) {
                    return this.pushStack(S(this, e || [], true)) }, is: function(e) {
                    return !!S(this, typeof e === "string" && N.test(e) ? jQuery(e) : e || [], false).length } });
            var D, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                R = jQuery.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e) {
                        return this }
                    n = n || D;
                    if (typeof e === "string") {
                        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) { r = [null, e, null] } else { r = P.exec(e) }
                        if (r && (r[1] || !t)) {
                            if (r[1]) { t = t instanceof jQuery ? t[0] : t;
                                jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, true));
                                if (O.test(r[1]) && jQuery.isPlainObject(t)) {
                                    for (r in t) {
                                        if (jQuery.isFunction(this[r])) { this[r](t[r]) } else { this.attr(r, t[r]) } } }
                                return this } else { i = a.getElementById(r[2]);
                                if (i) { this[0] = i;
                                    this.length = 1 }
                                return this } } else if (!t || t.jquery) {
                            return (t || n).find(e) } else {
                            return this.constructor(t).find(e) } } else if (e.nodeType) { this[0] = e;
                        this.length = 1;
                        return this } else if (jQuery.isFunction(e)) {
                        return n.ready !== undefined ? n.ready(e) : e(jQuery) }
                    return jQuery.makeArray(e, this) };
            R.prototype = jQuery.fn;
            D = jQuery(a);
            var F = /^(?:parents|prev(?:Until|All))/,
                q = { children: true, contents: true, next: true, prev: true };
            jQuery.fn.extend({ has: function(e) {
                    var t = jQuery(e, this),
                        n = t.length;
                    return this.filter(function() {
                        var e = 0;
                        for (; e < n; e++) {
                            if (jQuery.contains(this, t[e])) {
                                return true } } }) }, closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        s = typeof e !== "string" && jQuery(e);
                    if (!N.test(e)) {
                        for (; r < i; r++) {
                            for (n = this[r]; n && n !== t; n = n.parentNode) {
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) { o.push(n);
                                    break } } } }
                    return this.pushStack(o.length > 1 ? jQuery.uniqueSort(o) : o) }, index: function(e) {
                    if (!e) {
                        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }
                    if (typeof e === "string") {
                        return p.call(jQuery(e), this[0]) }
                    return p.call(this, e.jquery ? e[0] : e) }, add: function(e, t) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t)))) }, addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) } });

            function H(e, t) {
                while ((e = e[t]) && e.nodeType !== 1) {}
                return e }
            jQuery.each({ parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null }, parents: function(e) {
                    return A(e, "parentNode") }, parentsUntil: function(e, t, n) {
                    return A(e, "parentNode", n) }, next: function(e) {
                    return H(e, "nextSibling") }, prev: function(e) {
                    return H(e, "previousSibling") }, nextAll: function(e) {
                    return A(e, "nextSibling") }, prevAll: function(e) {
                    return A(e, "previousSibling") }, nextUntil: function(e, t, n) {
                    return A(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                    return A(e, "previousSibling", n) }, siblings: function(e) {
                    return _((e.parentNode || {}).firstChild, e) }, children: function(e) {
                    return _(e.firstChild) }, contents: function(e) {
                    return e.contentDocument || jQuery.merge([], e.childNodes) } }, function(e, t) { jQuery.fn[e] = function(n, r) {
                    var i = jQuery.map(this, t, n);
                    if (e.slice(-5) !== "Until") { r = n }
                    if (r && typeof r === "string") { i = jQuery.filter(r, i) }
                    if (this.length > 1) {
                        if (!q[e]) { jQuery.uniqueSort(i) }
                        if (F.test(e)) { i.reverse() } }
                    return this.pushStack(i) } });
            var M = /[^\x20\t\r\n\f]+/g;

            function I(e) {
                var t = {};
                jQuery.each(e.match(M) || [], function(e, n) { t[n] = true });
                return t }
            jQuery.Callbacks = function(e) { e = typeof e === "string" ? I(e) : jQuery.extend({}, e);
                var t, n, r, i, o = [],
                    s = [],
                    a = -1,
                    u = function() { i = e.once;
                        r = t = true;
                        for (; s.length; a = -1) { n = s.shift();
                            while (++a < o.length) {
                                if (o[a].apply(n[0], n[1]) === false && e.stopOnFalse) { a = o.length;
                                    n = false } } }
                        if (!e.memory) { n = false }
                        t = false;
                        if (i) {
                            if (n) { o = [] } else { o = "" } } },
                    f = { add: function() {
                            if (o) {
                                if (n && !t) { a = o.length - 1;
                                    s.push(n) }(function t(n) { jQuery.each(n, function(n, r) {
                                        if (jQuery.isFunction(r)) {
                                            if (!e.unique || !f.has(r)) { o.push(r) } } else if (r && r.length && jQuery.type(r) !== "string") { t(r) } }) })(arguments);
                                if (n && !t) { u() } }
                            return this }, remove: function() { jQuery.each(arguments, function(e, t) {
                                var n;
                                while ((n = jQuery.inArray(t, o, n)) > -1) { o.splice(n, 1);
                                    if (n <= a) { a-- } } });
                            return this }, has: function(e) {
                            return e ? jQuery.inArray(e, o) > -1 : o.length > 0 }, empty: function() {
                            if (o) { o = [] }
                            return this }, disable: function() { i = s = [];
                            o = n = "";
                            return this }, disabled: function() {
                            return !o }, lock: function() { i = s = [];
                            if (!n && !t) { o = n = "" }
                            return this }, locked: function() {
                            return !!i }, fireWith: function(e, n) {
                            if (!i) { n = n || [];
                                n = [e, n.slice ? n.slice() : n];
                                s.push(n);
                                if (!t) { u() } }
                            return this }, fire: function() { f.fireWith(this, arguments);
                            return this }, fired: function() {
                            return !!r } };
                return f };

            function B(e) {
                return e }

            function W(e) {
                throw e }

            function z(e, t, n) {
                var r;
                try {
                    if (e && jQuery.isFunction(r = e.promise)) { r.call(e).done(t).fail(n) } else if (e && jQuery.isFunction(r = e.then)) { r.call(e, t, n) } else { t.call(undefined, e) } } catch (e) { n.call(undefined, e) } }
            jQuery.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                            ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r },
                            always: function() { o.done(arguments).fail(arguments);
                                return this },
                            catch: function(e) {
                                return i.then(null, e) },
                            pipe: function() {
                                var e = arguments;
                                return jQuery.Deferred(function(n) {
                                    jQuery.each(t, function(t, r) {
                                        var i = jQuery.isFunction(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            if (e && jQuery.isFunction(e.promise)) { e.promise().progress(n.notify).done(n.resolve).fail(n.reject) } else { n[r[0] + "With"](this, i ? [e] : arguments) } })
                                    });
                                    e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;

                                function s(e, t, r, i) {
                                    return function() {
                                        var a = this,
                                            u = arguments,
                                            f = function() {
                                                var n, f;
                                                if (e < o) {
                                                    return }
                                                n = r.apply(a, u);
                                                if (n === t.promise()) {
                                                    throw new TypeError("Thenable self-resolution") }
                                                f = n && (typeof n === "object" || typeof n === "function") && n.then;
                                                if (jQuery.isFunction(f)) {
                                                    if (i) { f.call(n, s(o, t, B, i), s(o, t, W, i)) } else { o++;
                                                        f.call(n, s(o, t, B, i), s(o, t, W, i), s(o, t, B, t.notifyWith)) } } else {
                                                    if (r !== B) { a = undefined;
                                                        u = [n] }(i || t.resolveWith)(a, u) } },
                                            l = i ? f : function() {
                                                try { f() } catch (n) {
                                                    if (jQuery.Deferred.exceptionHook) { jQuery.Deferred.exceptionHook(n, l.stackTrace) }
                                                    if (e + 1 >= o) {
                                                        if (r !== W) { a = undefined;
                                                            u = [n] }
                                                        t.rejectWith(a, u) } } };
                                        if (e) { l() } else {
                                            if (jQuery.Deferred.getStackHook) { l.stackTrace = jQuery.Deferred.getStackHook() }
                                            n.setTimeout(l) } } }
                                return jQuery.Deferred(function(n) { t[0][3].add(s(0, n, jQuery.isFunction(i) ? i : B, n.notifyWith));
                                    t[1][3].add(s(0, n, jQuery.isFunction(e) ? e : B));
                                    t[2][3].add(s(0, n, jQuery.isFunction(r) ? r : W)) }).promise() },
                            promise: function(e) {
                                return e != null ? jQuery.extend(e, i) : i }
                        },
                        o = {};
                    jQuery.each(t, function(e, n) {
                        var s = n[2],
                            a = n[5];
                        i[n[1]] = s.add;
                        if (a) { s.add(function() { r = a }, t[3 - e][2].disable, t[0][2].lock) }
                        s.add(n[3].fire);
                        o[n[0]] = function() { o[n[0] + "With"](this === o ? undefined : this, arguments);
                            return this };
                        o[n[0] + "With"] = s.fireWith });
                    i.promise(o);
                    if (e) { e.call(o, o) }
                    return o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = f.call(arguments),
                        o = jQuery.Deferred(),
                        s = function(e) {
                            return function(n) { r[e] = this;
                                i[e] = arguments.length > 1 ? f.call(arguments) : n;
                                if (!--t) { o.resolveWith(r, i) } } };
                    if (t <= 1) { z(e, o.done(s(n)).resolve, o.reject);
                        if (o.state() === "pending" || jQuery.isFunction(i[n] && i[n].then)) {
                            return o.then() } }
                    while (n--) { z(i[n], s(n), o.reject) }
                    return o.promise() }
            });
            var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            jQuery.Deferred.exceptionHook = function(e, t) {
                if (n.console && n.console.warn && e && V.test(e.name)) { n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) } };
            jQuery.readyException = function(e) { n.setTimeout(function() {
                    throw e }) };
            var U = jQuery.Deferred();
            jQuery.fn.ready = function(e) { U.then(e).catch(function(e) { jQuery.readyException(e) });
                return this };
            jQuery.extend({ isReady: false, readyWait: 1, holdReady: function(e) {
                    if (e) { jQuery.readyWait++ } else { jQuery.ready(true) } }, ready: function(e) {
                    if (e === true ? --jQuery.readyWait : jQuery.isReady) {
                        return }
                    jQuery.isReady = true;
                    if (e !== true && --jQuery.readyWait > 0) {
                        return }
                    U.resolveWith(a, [jQuery]) } });
            jQuery.ready.then = U.then;

            function G() { a.removeEventListener("DOMContentLoaded", G);
                n.removeEventListener("load", G);
                jQuery.ready() }
            if (a.readyState === "complete" || a.readyState !== "loading" && !a.documentElement.doScroll) { n.setTimeout(jQuery.ready) } else { a.addEventListener("DOMContentLoaded", G);
                n.addEventListener("load", G) }
            var Q = function(e, t, n, r, i, o, s) {
                var a = 0,
                    u = e.length,
                    f = n == null;
                if (jQuery.type(n) === "object") { i = true;
                    for (a in n) { Q(e, t, a, n[a], true, o, s) } } else if (r !== undefined) { i = true;
                    if (!jQuery.isFunction(r)) { s = true }
                    if (f) {
                        if (s) { t.call(e, r);
                            t = null } else { f = t;
                            t = function(e, t, n) {
                                return f.call(jQuery(e), n) } } }
                    if (t) {
                        for (; a < u; a++) { t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n))) } } }
                if (i) {
                    return e }
                if (f) {
                    return t.call(e) }
                return u ? t(e[0], n) : o };
            var X = function(e) {
                return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType };

            function Y() { this.expando = jQuery.expando + Y.uid++ }
            Y.uid = 1;
            Y.prototype = { cache: function(e) {
                    var t = e[this.expando];
                    if (!t) { t = {};
                        if (X(e)) {
                            if (e.nodeType) { e[this.expando] = t } else { Object.defineProperty(e, this.expando, { value: t, configurable: true }) } } }
                    return t }, set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if (typeof t === "string") { i[jQuery.camelCase(t)] = n } else {
                        for (r in t) { i[jQuery.camelCase(r)] = t[r] } }
                    return i }, get: function(e, t) {
                    return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][jQuery.camelCase(t)] }, access: function(e, t, n) {
                    if (t === undefined || t && typeof t === "string" && n === undefined) {
                        return this.get(e, t) }
                    this.set(e, t, n);
                    return n !== undefined ? n : t }, remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (r === undefined) {
                        return }
                    if (t !== undefined) {
                        if (jQuery.isArray(t)) { t = t.map(jQuery.camelCase) } else { t = jQuery.camelCase(t);
                            t = t in r ? [t] : t.match(M) || [] }
                        n = t.length;
                        while (n--) { delete r[t[n]] } }
                    if (t === undefined || jQuery.isEmptyObject(r)) {
                        if (e.nodeType) { e[this.expando] = undefined } else { delete e[this.expando] } } }, hasData: function(e) {
                    var t = e[this.expando];
                    return t !== undefined && !jQuery.isEmptyObject(t) } };
            var K = new Y;
            var J = new Y;
            var Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;

            function te(e) {
                if (e === "true") {
                    return true }
                if (e === "false") {
                    return false }
                if (e === "null") {
                    return null }
                if (e === +e + "") {
                    return +e }
                if (Z.test(e)) {
                    return JSON.parse(e) }
                return e }

            function ne(e, t, n) {
                var r;
                if (n === undefined && e.nodeType === 1) { r = "data-" + t.replace(ee, "-$&").toLowerCase();
                    n = e.getAttribute(r);
                    if (typeof n === "string") {
                        try { n = te(n) } catch (e) {}
                        J.set(e, t, n) } else { n = undefined } }
                return n }
            jQuery.extend({ hasData: function(e) {
                    return J.hasData(e) || K.hasData(e) }, data: function(e, t, n) {
                    return J.access(e, t, n) }, removeData: function(e, t) { J.remove(e, t) }, _data: function(e, t, n) {
                    return K.access(e, t, n) }, _removeData: function(e, t) { K.remove(e, t) } });
            jQuery.fn.extend({ data: function(e, t) {
                    var n, r, i, o = this[0],
                        s = o && o.attributes;
                    if (e === undefined) {
                        if (this.length) { i = J.get(o);
                            if (o.nodeType === 1 && !K.get(o, "hasDataAttrs")) { n = s.length;
                                while (n--) {
                                    if (s[n]) { r = s[n].name;
                                        if (r.indexOf("data-") === 0) { r = jQuery.camelCase(r.slice(5));
                                            ne(o, r, i[r]) } } }
                                K.set(o, "hasDataAttrs", true) } }
                        return i }
                    if (typeof e === "object") {
                        return this.each(function() { J.set(this, e) }) }
                    return Q(this, function(t) {
                        var n;
                        if (o && t === undefined) { n = J.get(o, e);
                            if (n !== undefined) {
                                return n }
                            n = ne(o, e);
                            if (n !== undefined) {
                                return n }
                            return }
                        this.each(function() { J.set(this, e, t) }) }, null, t, arguments.length > 1, null, true) }, removeData: function(e) {
                    return this.each(function() { J.remove(this, e) }) } });
            jQuery.extend({ queue: function(e, t, n) {
                    var r;
                    if (e) { t = (t || "fx") + "queue";
                        r = K.get(e, t);
                        if (n) {
                            if (!r || jQuery.isArray(n)) { r = K.access(e, t, jQuery.makeArray(n)) } else { r.push(n) } }
                        return r || [] } }, dequeue: function(e, t) { t = t || "fx";
                    var n = jQuery.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = jQuery._queueHooks(e, t),
                        s = function() { jQuery.dequeue(e, t) };
                    if (i === "inprogress") { i = n.shift();
                        r-- }
                    if (i) {
                        if (t === "fx") { n.unshift("inprogress") }
                        delete o.stop;
                        i.call(e, s, o) }
                    if (!r && o) { o.empty.fire() } }, _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, { empty: jQuery.Callbacks("once memory").add(function() { K.remove(e, [t + "queue", n]) }) }) } });
            jQuery.fn.extend({ queue: function(e, t) {
                    var n = 2;
                    if (typeof e !== "string") { t = e;
                        e = "fx";
                        n-- }
                    if (arguments.length < n) {
                        return jQuery.queue(this[0], e) }
                    return t === undefined ? this : this.each(function() {
                        var n = jQuery.queue(this, e, t);
                        jQuery._queueHooks(this, e);
                        if (e === "fx" && n[0] !== "inprogress") { jQuery.dequeue(this, e) } }) }, dequeue: function(e) {
                    return this.each(function() { jQuery.dequeue(this, e) }) }, clearQueue: function(e) {
                    return this.queue(e || "fx", []) }, promise: function(e, t) {
                    var n, r = 1,
                        i = jQuery.Deferred(),
                        o = this,
                        s = this.length,
                        a = function() {
                            if (!--r) { i.resolveWith(o, [o]) } };
                    if (typeof e !== "string") { t = e;
                        e = undefined }
                    e = e || "fx";
                    while (s--) { n = K.get(o[s], e + "queueHooks");
                        if (n && n.empty) { r++;
                            n.empty.add(a) } }
                    a();
                    return i.promise(t) } });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i");
            var oe = ["Top", "Right", "Bottom", "Left"];
            var se = function(e, t) { e = t || e;
                return e.style.display === "none" || e.style.display === "" && jQuery.contains(e.ownerDocument, e) && jQuery.css(e, "display") === "none" };
            var ae = function(e, t, n, r) {
                var i, o, s = {};
                for (o in t) { s[o] = e.style[o];
                    e.style[o] = t[o] }
                i = n.apply(e, r || []);
                for (o in t) { e.style[o] = s[o] }
                return i };

            function ue(e, t, n, r) {
                var i, o = 1,
                    s = 20,
                    a = r ? function() {
                        return r.cur() } : function() {
                        return jQuery.css(e, t, "") },
                    u = a(),
                    f = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"),
                    l = (jQuery.cssNumber[t] || f !== "px" && +u) && ie.exec(jQuery.css(e, t));
                if (l && l[3] !== f) { f = f || l[3];
                    n = n || [];
                    l = +u || 1;
                    do { o = o || ".5";
                        l = l / o;
                        jQuery.style(e, t, l + f) } while (o !== (o = a() / u) && o !== 1 && --s) }
                if (n) { l = +l || +u || 0;
                    i = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
                    if (r) { r.unit = f;
                        r.start = l;
                        r.end = i } }
                return i }
            var fe = {};

            function le(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = fe[r];
                if (i) {
                    return i }
                t = n.body.appendChild(n.createElement(r));
                i = jQuery.css(t, "display");
                t.parentNode.removeChild(t);
                if (i === "none") { i = "block" }
                fe[r] = i;
                return i }

            function ce(e, t) {
                var n, r, i = [],
                    o = 0,
                    s = e.length;
                for (; o < s; o++) { r = e[o];
                    if (!r.style) {
                        continue }
                    n = r.style.display;
                    if (t) {
                        if (n === "none") { i[o] = K.get(r, "display") || null;
                            if (!i[o]) { r.style.display = "" } }
                        if (r.style.display === "" && se(r)) { i[o] = le(r) } } else {
                        if (n !== "none") { i[o] = "none";
                            K.set(r, "display", n) } } }
                for (o = 0; o < s; o++) {
                    if (i[o] != null) { e[o].style.display = i[o] } }
                return e }
            jQuery.fn.extend({ show: function() {
                    return ce(this, true) }, hide: function() {
                    return ce(this) }, toggle: function(e) {
                    if (typeof e === "boolean") {
                        return e ? this.show() : this.hide() }
                    return this.each(function() {
                        if (se(this)) { jQuery(this).show() } else { jQuery(this).hide() } }) } });
            var pe = /^(?:checkbox|radio)$/i;
            var de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
            var he = /^$|\/(?:java|ecma)script/i;
            var ve = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            ve.optgroup = ve.option;
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead;
            ve.th = ve.td;

            function ye(e, t) {
                var n;
                if (typeof e.getElementsByTagName !== "undefined") { n = e.getElementsByTagName(t || "*") } else if (typeof e.querySelectorAll !== "undefined") { n = e.querySelectorAll(t || "*") } else { n = [] }
                if (t === undefined || t && jQuery.nodeName(e, t)) {
                    return jQuery.merge([e], n) }
                return n }

            function ge(e, t) {
                var n = 0,
                    r = e.length;
                for (; n < r; n++) { K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval")) } }
            var me = /<|&#?\w+;/;

            function be(e, t, n, r, i) {
                var o, s, a, u, f, l, c = t.createDocumentFragment(),
                    p = [],
                    d = 0,
                    h = e.length;
                for (; d < h; d++) { o = e[d];
                    if (o || o === 0) {
                        if (jQuery.type(o) === "object") { jQuery.merge(p, o.nodeType ? [o] : o) } else if (!me.test(o)) { p.push(t.createTextNode(o)) } else { s = s || c.appendChild(t.createElement("div"));
                            a = (de.exec(o) || ["", ""])[1].toLowerCase();
                            u = ve[a] || ve._default;
                            s.innerHTML = u[1] + jQuery.htmlPrefilter(o) + u[2];
                            l = u[0];
                            while (l--) { s = s.lastChild }
                            jQuery.merge(p, s.childNodes);
                            s = c.firstChild;
                            s.textContent = "" } } }
                c.textContent = "";
                d = 0;
                while (o = p[d++]) {
                    if (r && jQuery.inArray(o, r) > -1) {
                        if (i) { i.push(o) }
                        continue }
                    f = jQuery.contains(o.ownerDocument, o);
                    s = ye(c.appendChild(o), "script");
                    if (f) { ge(s) }
                    if (n) { l = 0;
                        while (o = s[l++]) {
                            if (he.test(o.type || "")) { n.push(o) } } } }
                return c }(function() {
                var e = a.createDocumentFragment(),
                    t = e.appendChild(a.createElement("div")),
                    n = a.createElement("input");
                n.setAttribute("type", "radio");
                n.setAttribute("checked", "checked");
                n.setAttribute("name", "t");
                t.appendChild(n);
                m.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
                t.innerHTML = "<textarea>x</textarea>";
                m.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue })();
            var we = a.documentElement;
            var xe = /^key/,
                Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Te = /^([^.]*)(?:\.(.+)|)/;

            function ke() {
                return true }

            function je() {
                return false }

            function Ce() {
                try {
                    return a.activeElement } catch (e) {} }

            function Ae(e, t, n, r, i, o) {
                var s, a;
                if (typeof t === "object") {
                    if (typeof n !== "string") { r = r || n;
                        n = undefined }
                    for (a in t) { Ae(e, a, n, r, t[a], o) }
                    return e }
                if (r == null && i == null) { i = n;
                    r = n = undefined } else if (i == null) {
                    if (typeof n === "string") { i = r;
                        r = undefined } else { i = r;
                        r = n;
                        n = undefined } }
                if (i === false) { i = je } else if (!i) {
                    return e }
                if (o === 1) { s = i;
                    i = function(e) { jQuery().off(e);
                        return s.apply(this, arguments) };
                    i.guid = s.guid || (s.guid = jQuery.guid++) }
                return e.each(function() { jQuery.event.add(this, t, i, r, n) }) }
            jQuery.event = { global: {}, add: function(e, t, n, r, i) {
                    var o, s, a, u, f, l, c, p, d, h, v, y = K.get(e);
                    if (!y) {
                        return }
                    if (n.handler) { o = n;
                        n = o.handler;
                        i = o.selector }
                    if (i) { jQuery.find.matchesSelector(we, i) }
                    if (!n.guid) { n.guid = jQuery.guid++ }
                    if (!(u = y.events)) { u = y.events = {} }
                    if (!(s = y.handle)) { s = y.handle = function(t) {
                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined } }
                    t = (t || "").match(M) || [""];
                    f = t.length;
                    while (f--) { a = Te.exec(t[f]) || [];
                        d = v = a[1];
                        h = (a[2] || "").split(".").sort();
                        if (!d) {
                            continue }
                        c = jQuery.event.special[d] || {};
                        d = (i ? c.delegateType : c.bindType) || d;
                        c = jQuery.event.special[d] || {};
                        l = jQuery.extend({ type: d, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && jQuery.expr.match.needsContext.test(i), namespace: h.join(".") }, o);
                        if (!(p = u[d])) { p = u[d] = [];
                            p.delegateCount = 0;
                            if (!c.setup || c.setup.call(e, r, h, s) === false) {
                                if (e.addEventListener) { e.addEventListener(d, s) } } }
                        if (c.add) { c.add.call(e, l);
                            if (!l.handler.guid) { l.handler.guid = n.guid } }
                        if (i) { p.splice(p.delegateCount++, 0, l) } else { p.push(l) }
                        jQuery.event.global[d] = true } }, remove: function(e, t, n, r, i) {
                    var o, s, a, u, f, l, c, p, d, h, v, y = K.hasData(e) && K.get(e);
                    if (!y || !(u = y.events)) {
                        return }
                    t = (t || "").match(M) || [""];
                    f = t.length;
                    while (f--) { a = Te.exec(t[f]) || [];
                        d = v = a[1];
                        h = (a[2] || "").split(".").sort();
                        if (!d) {
                            for (d in u) { jQuery.event.remove(e, d + t[f], n, r, true) }
                            continue }
                        c = jQuery.event.special[d] || {};
                        d = (r ? c.delegateType : c.bindType) || d;
                        p = u[d] || [];
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        s = o = p.length;
                        while (o--) { l = p[o];
                            if ((i || v === l.origType) && (!n || n.guid === l.guid) && (!a || a.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) { p.splice(o, 1);
                                if (l.selector) { p.delegateCount-- }
                                if (c.remove) { c.remove.call(e, l) } } }
                        if (s && !p.length) {
                            if (!c.teardown || c.teardown.call(e, h, y.handle) === false) { jQuery.removeEvent(e, d, y.handle) }
                            delete u[d] } }
                    if (jQuery.isEmptyObject(u)) { K.remove(e, "handle events") } }, dispatch: function(e) {
                    var t = jQuery.event.fix(e);
                    var n, r, i, o, s, a, u = new Array(arguments.length),
                        f = (K.get(this, "events") || {})[t.type] || [],
                        l = jQuery.event.special[t.type] || {};
                    u[0] = t;
                    for (n = 1; n < arguments.length; n++) { u[n] = arguments[n] }
                    t.delegateTarget = this;
                    if (l.preDispatch && l.preDispatch.call(this, t) === false) {
                        return }
                    a = jQuery.event.handlers.call(this, t, f);
                    n = 0;
                    while ((o = a[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem;
                        r = 0;
                        while ((s = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                            if (!t.rnamespace || t.rnamespace.test(s.namespace)) { t.handleObj = s;
                                t.data = s.data;
                                i = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                                if (i !== undefined) {
                                    if ((t.result = i) === false) { t.preventDefault();
                                        t.stopPropagation() } } } } }
                    if (l.postDispatch) { l.postDispatch.call(this, t) }
                    return t.result }, handlers: function(e, t) {
                    var n, r, i, o, s, a = [],
                        u = t.delegateCount,
                        f = e.target;
                    if (u && f.nodeType && !(e.type === "click" && e.button >= 1)) {
                        for (; f !== this; f = f.parentNode || this) {
                            if (f.nodeType === 1 && !(e.type === "click" && f.disabled === true)) { o = [];
                                s = {};
                                for (n = 0; n < u; n++) { r = t[n];
                                    i = r.selector + " ";
                                    if (s[i] === undefined) { s[i] = r.needsContext ? jQuery(i, this).index(f) > -1 : jQuery.find(i, this, null, [f]).length }
                                    if (s[i]) { o.push(r) } }
                                if (o.length) { a.push({ elem: f, handlers: o }) } } } }
                    f = this;
                    if (u < t.length) { a.push({ elem: f, handlers: t.slice(u) }) }
                    return a }, addProp: function(e, t) { Object.defineProperty(jQuery.Event.prototype, e, { enumerable: true, configurable: true, get: jQuery.isFunction(t) ? function() {
                            if (this.originalEvent) {
                                return t(this.originalEvent) } } : function() {
                            if (this.originalEvent) {
                                return this.originalEvent[e] } }, set: function(t) { Object.defineProperty(this, e, { enumerable: true, configurable: true, writable: true, value: t }) } }) }, fix: function(e) {
                    return e[jQuery.expando] ? e : new jQuery.Event(e) }, special: { load: { noBubble: true }, focus: { trigger: function() {
                            if (this !== Ce() && this.focus) { this.focus();
                                return false } }, delegateType: "focusin" }, blur: { trigger: function() {
                            if (this === Ce() && this.blur) { this.blur();
                                return false } }, delegateType: "focusout" }, click: { trigger: function() {
                            if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) { this.click();
                                return false } }, _default: function(e) {
                            return jQuery.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) {
                            if (e.result !== undefined && e.originalEvent) { e.originalEvent.returnValue = e.result } } } } };
            jQuery.removeEvent = function(e, t, n) {
                if (e.removeEventListener) { e.removeEventListener(t, n) } };
            jQuery.Event = function(e, t) {
                if (!(this instanceof jQuery.Event)) {
                    return new jQuery.Event(e, t) }
                if (e && e.type) { this.originalEvent = e;
                    this.type = e.type;
                    this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? ke : je;
                    this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                    this.currentTarget = e.currentTarget;
                    this.relatedTarget = e.relatedTarget } else { this.type = e }
                if (t) { jQuery.extend(this, t) }
                this.timeStamp = e && e.timeStamp || jQuery.now();
                this[jQuery.expando] = true };
            jQuery.Event.prototype = { constructor: jQuery.Event, isDefaultPrevented: je, isPropagationStopped: je, isImmediatePropagationStopped: je, isSimulated: false, preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ke;
                    if (e && !this.isSimulated) { e.preventDefault() } }, stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ke;
                    if (e && !this.isSimulated) { e.stopPropagation() } }, stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ke;
                    if (e && !this.isSimulated) { e.stopImmediatePropagation() }
                    this.stopPropagation() } };
            jQuery.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(e) {
                    var t = e.button;
                    if (e.which == null && xe.test(e.type)) {
                        return e.charCode != null ? e.charCode : e.keyCode }
                    if (!e.which && t !== undefined && Ee.test(e.type)) {
                        if (t & 1) {
                            return 1 }
                        if (t & 2) {
                            return 3 }
                        if (t & 4) {
                            return 2 }
                        return 0 }
                    return e.which } }, jQuery.event.addProp);
            jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { jQuery.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        if (!i || i !== r && !jQuery.contains(r, i)) { e.type = o.origType;
                            n = o.handler.apply(this, arguments);
                            e.type = t }
                        return n } } });
            jQuery.fn.extend({ on: function(e, t, n, r) {
                    return Ae(this, e, t, n, r) }, one: function(e, t, n, r) {
                    return Ae(this, e, t, n, r, 1) }, off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) { r = e.handleObj;
                        jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                        return this }
                    if (typeof e === "object") {
                        for (i in e) { this.off(i, t, e[i]) }
                        return this }
                    if (t === false || typeof t === "function") { n = t;
                        t = undefined }
                    if (n === false) { n = je }
                    return this.each(function() { jQuery.event.remove(this, e, n, t) }) } });
            var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ne = /<script|<style|<link/i,
                Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Le = /^true\/(.*)/,
                Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function De(e, t) {
                if (jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                    return e.getElementsByTagName("tbody")[0] || e }
                return e }

            function Pe(e) { e.type = (e.getAttribute("type") !== null) + "/" + e.type;
                return e }

            function Re(e) {
                var t = Le.exec(e.type);
                if (t) { e.type = t[1] } else { e.removeAttribute("type") }
                return e }

            function Fe(e, t) {
                var n, r, i, o, s, a, u, f;
                if (t.nodeType !== 1) {
                    return }
                if (K.hasData(e)) { o = K.access(e);
                    s = K.set(t, o);
                    f = o.events;
                    if (f) { delete s.handle;
                        s.events = {};
                        for (i in f) {
                            for (n = 0, r = f[i].length; n < r; n++) { jQuery.event.add(t, i, f[i][n]) } } } }
                if (J.hasData(e)) { a = J.access(e);
                    u = jQuery.extend({}, a);
                    J.set(t, u) } }

            function qe(e, t) {
                var n = t.nodeName.toLowerCase();
                if (n === "input" && pe.test(e.type)) { t.checked = e.checked } else if (n === "input" || n === "textarea") { t.defaultValue = e.defaultValue } }

            function He(e, t, n, r) { t = l.apply([], t);
                var i, o, s, a, u, f, c = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    v = jQuery.isFunction(h);
                if (v || p > 1 && typeof h === "string" && !m.checkClone && Oe.test(h)) {
                    return e.each(function(i) {
                        var o = e.eq(i);
                        if (v) { t[0] = h.call(this, i, o.html()) }
                        He(o, t, n, r) }) }
                if (p) { i = be(t, e[0].ownerDocument, false, e, r);
                    o = i.firstChild;
                    if (i.childNodes.length === 1) { i = o }
                    if (o || r) { s = jQuery.map(ye(i, "script"), Pe);
                        a = s.length;
                        for (; c < p; c++) { u = i;
                            if (c !== d) { u = jQuery.clone(u, true, true);
                                if (a) { jQuery.merge(s, ye(u, "script")) } }
                            n.call(e[c], u, c) }
                        if (a) { f = s[s.length - 1].ownerDocument;
                            jQuery.map(s, Re);
                            for (c = 0; c < a; c++) { u = s[c];
                                if (he.test(u.type || "") && !K.access(u, "globalEval") && jQuery.contains(f, u)) {
                                    if (u.src) {
                                        if (jQuery._evalUrl) { jQuery._evalUrl(u.src) } } else { b(u.textContent.replace(Se, ""), f) } } } } } }
                return e }

            function Me(e, t, n) {
                var r, i = t ? jQuery.filter(t, e) : e,
                    o = 0;
                for (;
                    (r = i[o]) != null; o++) {
                    if (!n && r.nodeType === 1) { jQuery.cleanData(ye(r)) }
                    if (r.parentNode) {
                        if (n && jQuery.contains(r.ownerDocument, r)) { ge(ye(r, "script")) }
                        r.parentNode.removeChild(r) } }
                return e }
            jQuery.extend({ htmlPrefilter: function(e) {
                    return e.replace(_e, "<$1></$2>") }, clone: function(e, t, n) {
                    var r, i, o, s, a = e.cloneNode(true),
                        u = jQuery.contains(e.ownerDocument, e);
                    if (!m.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) { s = ye(a);
                        o = ye(e);
                        for (r = 0, i = o.length; r < i; r++) { qe(o[r], s[r]) } }
                    if (t) {
                        if (n) { o = o || ye(e);
                            s = s || ye(a);
                            for (r = 0, i = o.length; r < i; r++) { Fe(o[r], s[r]) } } else { Fe(e, a) } }
                    s = ye(a, "script");
                    if (s.length > 0) { ge(s, !u && ye(e, "script")) }
                    return a }, cleanData: function(e) {
                    var t, n, r, i = jQuery.event.special,
                        o = 0;
                    for (;
                        (n = e[o]) !== undefined; o++) {
                        if (X(n)) {
                            if (t = n[K.expando]) {
                                if (t.events) {
                                    for (r in t.events) {
                                        if (i[r]) { jQuery.event.remove(n, r) } else { jQuery.removeEvent(n, r, t.handle) } } }
                                n[K.expando] = undefined }
                            if (n[J.expando]) { n[J.expando] = undefined } } } } });
            jQuery.fn.extend({ detach: function(e) {
                    return Me(this, e, true) }, remove: function(e) {
                    return Me(this, e) }, text: function(e) {
                    return Q(this, function(e) {
                        return e === undefined ? jQuery.text(this) : this.empty().each(function() {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { this.textContent = e } }) }, null, e, arguments.length) }, append: function() {
                    return He(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = De(this, e);
                            t.appendChild(e) } }) }, prepend: function() {
                    return He(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = De(this, e);
                            t.insertBefore(e, t.firstChild) } }) }, before: function() {
                    return He(this, arguments, function(e) {
                        if (this.parentNode) { this.parentNode.insertBefore(e, this) } }) }, after: function() {
                    return He(this, arguments, function(e) {
                        if (this.parentNode) { this.parentNode.insertBefore(e, this.nextSibling) } }) }, empty: function() {
                    var e, t = 0;
                    for (;
                        (e = this[t]) != null; t++) {
                        if (e.nodeType === 1) { jQuery.cleanData(ye(e, false));
                            e.textContent = "" } }
                    return this }, clone: function(e, t) { e = e == null ? false : e;
                    t = t == null ? e : t;
                    return this.map(function() {
                        return jQuery.clone(this, e, t) }) }, html: function(e) {
                    return Q(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (e === undefined && t.nodeType === 1) {
                            return t.innerHTML }
                        if (typeof e === "string" && !Ne.test(e) && !ve[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = jQuery.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) { t = this[n] || {};
                                    if (t.nodeType === 1) { jQuery.cleanData(ye(t, false));
                                        t.innerHTML = e } }
                                t = 0 } catch (e) {} }
                        if (t) { this.empty().append(e) } }, null, e, arguments.length) }, replaceWith: function() {
                    var e = [];
                    return He(this, arguments, function(t) {
                        var n = this.parentNode;
                        if (jQuery.inArray(this, e) < 0) { jQuery.cleanData(ye(this));
                            if (n) { n.replaceChild(t, this) } } }, e) } });
            jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { jQuery.fn[e] = function(e) {
                    var n, r = [],
                        i = jQuery(e),
                        o = i.length - 1,
                        s = 0;
                    for (; s <= o; s++) { n = s === o ? this : this.clone(true);
                        jQuery(i[s])[t](n);
                        c.apply(r, n.get()) }
                    return this.pushStack(r) } });
            var Ie = /^margin/;
            var $e = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i");
            var Be = function(e) {
                var t = e.ownerDocument.defaultView;
                if (!t || !t.opener) { t = n }
                return t.getComputedStyle(e) };
            (function() {
                function e() {
                    if (!u) {
                        return }
                    u.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                    u.innerHTML = "";
                    we.appendChild(s);
                    var e = n.getComputedStyle(u);
                    t = e.top !== "1%";
                    o = e.marginLeft === "2px";
                    r = e.width === "4px";
                    u.style.marginRight = "50%";
                    i = e.marginRight === "4px";
                    we.removeChild(s);
                    u = null }
                var t, r, i, o, s = a.createElement("div"),
                    u = a.createElement("div");
                if (!u.style) {
                    return }
                u.style.backgroundClip = "content-box";
                u.cloneNode(true).style.backgroundClip = "";
                m.clearCloneStyle = u.style.backgroundClip === "content-box";
                s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
                s.appendChild(u);
                jQuery.extend(m, { pixelPosition: function() { e();
                        return t }, boxSizingReliable: function() { e();
                        return r }, pixelMarginRight: function() { e();
                        return i }, reliableMarginLeft: function() { e();
                        return o } }) })();

            function We(e, t, n) {
                var r, i, o, s, a = e.style;
                n = n || Be(e);
                if (n) { s = n.getPropertyValue(t) || n[t];
                    if (s === "" && !jQuery.contains(e.ownerDocument, e)) { s = jQuery.style(e, t) }
                    if (!m.pixelMarginRight() && $e.test(s) && Ie.test(t)) { r = a.width;
                        i = a.minWidth;
                        o = a.maxWidth;
                        a.minWidth = a.maxWidth = a.width = s;
                        s = n.width;
                        a.width = r;
                        a.minWidth = i;
                        a.maxWidth = o } }
                return s !== undefined ? s + "" : s }

            function ze(e, t) {
                return { get: function() {
                        if (e()) { delete this.get;
                            return }
                        return (this.get = t).apply(this, arguments) } } }
            var Ve = /^(none|table(?!-c[ea]).+)/,
                Ue = { position: "absolute", visibility: "hidden", display: "block" },
                Ge = { letterSpacing: "0", fontWeight: "400" },
                Qe = ["Webkit", "Moz", "ms"],
                Xe = a.createElement("div").style;

            function Ye(e) {
                if (e in Xe) {
                    return e }
                var t = e[0].toUpperCase() + e.slice(1),
                    n = Qe.length;
                while (n--) { e = Qe[n] + t;
                    if (e in Xe) {
                        return e } } }

            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

            function Je(e, t, n, r, i) {
                var o, s = 0;
                if (n === (r ? "border" : "content")) { o = 4 } else { o = t === "width" ? 1 : 0 }
                for (; o < 4; o += 2) {
                    if (n === "margin") { s += jQuery.css(e, n + oe[o], true, i) }
                    if (r) {
                        if (n === "content") { s -= jQuery.css(e, "padding" + oe[o], true, i) }
                        if (n !== "margin") { s -= jQuery.css(e, "border" + oe[o] + "Width", true, i) } } else { s += jQuery.css(e, "padding" + oe[o], true, i);
                        if (n !== "padding") { s += jQuery.css(e, "border" + oe[o] + "Width", true, i) } } }
                return s }

            function Ze(e, t, n) {
                var r, i = true,
                    o = Be(e),
                    s = jQuery.css(e, "boxSizing", false, o) === "border-box";
                if (e.getClientRects().length) { r = e.getBoundingClientRect()[t] }
                if (r <= 0 || r == null) { r = We(e, t, o);
                    if (r < 0 || r == null) { r = e.style[t] }
                    if ($e.test(r)) {
                        return r }
                    i = s && (m.boxSizingReliable() || r === e.style[t]);
                    r = parseFloat(r) || 0 }
                return r + Je(e, t, n || (s ? "border" : "content"), i, o) + "px" }
            jQuery.extend({ cssHooks: { opacity: { get: function(e, t) {
                            if (t) {
                                var n = We(e, "opacity");
                                return n === "" ? "1" : n } } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { float: "cssFloat" }, style: function(e, t, n, r) {
                    if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                        return }
                    var i, o, s, a = jQuery.camelCase(t),
                        u = e.style;
                    t = jQuery.cssProps[a] || (jQuery.cssProps[a] = Ye(a) || a);
                    s = jQuery.cssHooks[t] || jQuery.cssHooks[a];
                    if (n !== undefined) { o = typeof n;
                        if (o === "string" && (i = ie.exec(n)) && i[1]) { n = ue(e, t, i);
                            o = "number" }
                        if (n == null || n !== n) {
                            return }
                        if (o === "number") { n += i && i[3] || (jQuery.cssNumber[a] ? "" : "px") }
                        if (!m.clearCloneStyle && n === "" && t.indexOf("background") === 0) { u[t] = "inherit" }
                        if (!s || !("set" in s) || (n = s.set(e, n, r)) !== undefined) { u[t] = n } } else {
                        if (s && "get" in s && (i = s.get(e, false, r)) !== undefined) {
                            return i }
                        return u[t] } }, css: function(e, t, n, r) {
                    var i, o, s, a = jQuery.camelCase(t);
                    t = jQuery.cssProps[a] || (jQuery.cssProps[a] = Ye(a) || a);
                    s = jQuery.cssHooks[t] || jQuery.cssHooks[a];
                    if (s && "get" in s) { i = s.get(e, true, n) }
                    if (i === undefined) { i = We(e, t, r) }
                    if (i === "normal" && t in Ge) { i = Ge[t] }
                    if (n === "" || n) { o = parseFloat(i);
                        return n === true || isFinite(o) ? o || 0 : i }
                    return i } });
            jQuery.each(["height", "width"], function(e, t) { jQuery.cssHooks[t] = { get: function(e, n, r) {
                        if (n) {
                            return Ve.test(jQuery.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? ae(e, Ue, function() {
                                return Ze(e, t, r) }) : Ze(e, t, r) } }, set: function(e, n, r) {
                        var i, o = r && Be(e),
                            s = r && Je(e, t, r, jQuery.css(e, "boxSizing", false, o) === "border-box", o);
                        if (s && (i = ie.exec(n)) && (i[3] || "px") !== "px") { e.style[t] = n;
                            n = jQuery.css(e, t) }
                        return Ke(e, n, s) } } });
            jQuery.cssHooks.marginLeft = ze(m.reliableMarginLeft, function(e, t) {
                if (t) {
                    return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, { marginLeft: 0 }, function() {
                        return e.getBoundingClientRect().left })) + "px" } });
            jQuery.each({ margin: "", padding: "", border: "Width" }, function(e, t) { jQuery.cssHooks[e + t] = { expand: function(n) {
                        var r = 0,
                            i = {},
                            o = typeof n === "string" ? n.split(" ") : [n];
                        for (; r < 4; r++) { i[e + oe[r] + t] = o[r] || o[r - 2] || o[0] }
                        return i } };
                if (!Ie.test(e)) { jQuery.cssHooks[e + t].set = Ke } });
            jQuery.fn.extend({ css: function(e, t) {
                    return Q(this, function(e, t, n) {
                        var r, i, o = {},
                            s = 0;
                        if (jQuery.isArray(t)) { r = Be(e);
                            i = t.length;
                            for (; s < i; s++) { o[t[s]] = jQuery.css(e, t[s], false, r) }
                            return o }
                        return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t) }, e, t, arguments.length > 1) } });

            function et(e, t, n, r, i) {
                return new et.prototype.init(e, t, n, r, i) }
            jQuery.Tween = et;
            et.prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e;
                    this.prop = n;
                    this.easing = i || jQuery.easing._default;
                    this.options = t;
                    this.start = this.now = this.cur();
                    this.end = r;
                    this.unit = o || (jQuery.cssNumber[n] ? "" : "px") }, cur: function() {
                    var e = et.propHooks[this.prop];
                    return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) {
                    var t, n = et.propHooks[this.prop];
                    if (this.options.duration) { this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) } else { this.pos = t = e }
                    this.now = (this.end - this.start) * t + this.start;
                    if (this.options.step) { this.options.step.call(this.elem, this.now, this) }
                    if (n && n.set) { n.set(this) } else { et.propHooks._default.set(this) }
                    return this } };
            et.prototype.init.prototype = et.prototype;
            et.propHooks = { _default: { get: function(e) {
                        var t;
                        if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                            return e.elem[e.prop] }
                        t = jQuery.css(e.elem, e.prop, "");
                        return !t || t === "auto" ? 0 : t }, set: function(e) {
                        if (jQuery.fx.step[e.prop]) { jQuery.fx.step[e.prop](e) } else if (e.elem.nodeType === 1 && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop])) { jQuery.style(e.elem, e.prop, e.now + e.unit) } else { e.elem[e.prop] = e.now } } } };
            et.propHooks.scrollTop = et.propHooks.scrollLeft = { set: function(e) {
                    if (e.elem.nodeType && e.elem.parentNode) { e.elem[e.prop] = e.now } } };
            jQuery.easing = { linear: function(e) {
                    return e }, swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" };
            jQuery.fx = et.prototype.init;
            jQuery.fx.step = {};
            var tt, nt, rt = /^(?:toggle|show|hide)$/,
                it = /queueHooks$/;

            function ot() {
                if (nt) { n.requestAnimationFrame(ot);
                    jQuery.fx.tick() } }

            function st() { n.setTimeout(function() { tt = undefined });
                return tt = jQuery.now() }

            function at(e, t) {
                var n, r = 0,
                    i = { height: e };
                t = t ? 1 : 0;
                for (; r < 4; r += 2 - t) { n = oe[r];
                    i["margin" + n] = i["padding" + n] = e }
                if (t) { i.opacity = i.width = e }
                return i }

            function ut(e, t, n) {
                var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
                    o = 0,
                    s = i.length;
                for (; o < s; o++) {
                    if (r = i[o].call(n, t, e)) {
                        return r } } }

            function ft(e, t, n) {
                var r, i, o, s, a, u, f, l, c = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    v = e.nodeType && se(e),
                    y = K.get(e, "fxshow");
                if (!n.queue) { s = jQuery._queueHooks(e, "fx");
                    if (s.unqueued == null) { s.unqueued = 0;
                        a = s.empty.fire;
                        s.empty.fire = function() {
                            if (!s.unqueued) { a() } } }
                    s.unqueued++;
                    p.always(function() { p.always(function() { s.unqueued--;
                            if (!jQuery.queue(e, "fx").length) { s.empty.fire() } }) }) }
                for (r in t) { i = t[r];
                    if (rt.test(i)) { delete t[r];
                        o = o || i === "toggle";
                        if (i === (v ? "hide" : "show")) {
                            if (i === "show" && y && y[r] !== undefined) { v = true } else {
                                continue } }
                        d[r] = y && y[r] || jQuery.style(e, r) } }
                u = !jQuery.isEmptyObject(t);
                if (!u && jQuery.isEmptyObject(d)) {
                    return }
                if (c && e.nodeType === 1) { n.overflow = [h.overflow, h.overflowX, h.overflowY];
                    f = y && y.display;
                    if (f == null) { f = K.get(e, "display") }
                    l = jQuery.css(e, "display");
                    if (l === "none") {
                        if (f) { l = f } else { ce([e], true);
                            f = e.style.display || f;
                            l = jQuery.css(e, "display");
                            ce([e]) } }
                    if (l === "inline" || l === "inline-block" && f != null) {
                        if (jQuery.css(e, "float") === "none") {
                            if (!u) { p.done(function() { h.display = f });
                                if (f == null) { l = h.display;
                                    f = l === "none" ? "" : l } }
                            h.display = "inline-block" } } }
                if (n.overflow) { h.overflow = "hidden";
                    p.always(function() { h.overflow = n.overflow[0];
                        h.overflowX = n.overflow[1];
                        h.overflowY = n.overflow[2] }) }
                u = false;
                for (r in d) {
                    if (!u) {
                        if (y) {
                            if ("hidden" in y) { v = y.hidden } } else { y = K.access(e, "fxshow", { display: f }) }
                        if (o) { y.hidden = !v }
                        if (v) { ce([e], true) }
                        p.done(function() {
                            if (!v) { ce([e]) }
                            K.remove(e, "fxshow");
                            for (r in d) { jQuery.style(e, r, d[r]) } }) }
                    u = ut(v ? y[r] : 0, r, p);
                    if (!(r in y)) { y[r] = u.start;
                        if (v) { u.end = u.start;
                            u.start = 0 } } } }

            function lt(e, t) {
                var n, r, i, o, s;
                for (n in e) {
                    r = jQuery.camelCase(n);
                    i = t[r];
                    o = e[n];
                    if (jQuery.isArray(o)) { i = o[1];
                        o = e[n] = o[0] }
                    if (n !== r) { e[r] = o;
                        delete e[n] }
                    s = jQuery.cssHooks[r];
                    if (s && "expand" in s) { o = s.expand(o);
                        delete e[r];
                        for (n in o) {
                            if (!(n in e)) { e[n] = o[n];
                                t[n] = i } } } else { t[r] = i }
                }
            }

            function ct(e, t, n) {
                var r, i, o = 0,
                    s = ct.prefilters.length,
                    a = jQuery.Deferred().always(function() { delete u.elem }),
                    u = function() {
                        if (i) {
                            return false }
                        var t = tt || st(),
                            n = Math.max(0, f.startTime + f.duration - t),
                            r = n / f.duration || 0,
                            o = 1 - r,
                            s = 0,
                            u = f.tweens.length;
                        for (; s < u; s++) { f.tweens[s].run(o) }
                        a.notifyWith(e, [f, o, n]);
                        if (o < 1 && u) {
                            return n } else { a.resolveWith(e, [f]);
                            return false } },
                    f = a.promise({ elem: e, props: jQuery.extend({}, t), opts: jQuery.extend(true, { specialEasing: {}, easing: jQuery.easing._default }, n), originalProperties: t, originalOptions: n, startTime: tt || st(), duration: n.duration, tweens: [], createTween: function(t, n) {
                            var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                            f.tweens.push(r);
                            return r }, stop: function(t) {
                            var n = 0,
                                r = t ? f.tweens.length : 0;
                            if (i) {
                                return this }
                            i = true;
                            for (; n < r; n++) { f.tweens[n].run(1) }
                            if (t) { a.notifyWith(e, [f, 1, 0]);
                                a.resolveWith(e, [f, t]) } else { a.rejectWith(e, [f, t]) }
                            return this } }),
                    l = f.props;
                lt(l, f.opts.specialEasing);
                for (; o < s; o++) { r = ct.prefilters[o].call(f, e, l, f.opts);
                    if (r) {
                        if (jQuery.isFunction(r.stop)) { jQuery._queueHooks(f.elem, f.opts.queue).stop = jQuery.proxy(r.stop, r) }
                        return r } }
                jQuery.map(l, ut, f);
                if (jQuery.isFunction(f.opts.start)) { f.opts.start.call(e, f) }
                jQuery.fx.timer(jQuery.extend(u, { elem: e, anim: f, queue: f.opts.queue }));
                return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always) }
            jQuery.Animation = jQuery.extend(ct, { tweeners: { "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        ue(n.elem, e, ie.exec(t), n);
                        return n }] }, tweener: function(e, t) {
                    if (jQuery.isFunction(e)) { t = e;
                        e = ["*"] } else { e = e.match(M) }
                    var n, r = 0,
                        i = e.length;
                    for (; r < i; r++) { n = e[r];
                        ct.tweeners[n] = ct.tweeners[n] || [];
                        ct.tweeners[n].unshift(t) } }, prefilters: [ft], prefilter: function(e, t) {
                    if (t) { ct.prefilters.unshift(e) } else { ct.prefilters.push(e) } } });
            jQuery.speed = function(e, t, n) {
                var r = e && typeof e === "object" ? jQuery.extend({}, e) : { complete: n || !n && t || jQuery.isFunction(e) && e, duration: e, easing: n && t || t && !jQuery.isFunction(t) && t };
                if (jQuery.fx.off || a.hidden) { r.duration = 0 } else {
                    if (typeof r.duration !== "number") {
                        if (r.duration in jQuery.fx.speeds) { r.duration = jQuery.fx.speeds[r.duration] } else { r.duration = jQuery.fx.speeds._default } } }
                if (r.queue == null || r.queue === true) { r.queue = "fx" }
                r.old = r.complete;
                r.complete = function() {
                    if (jQuery.isFunction(r.old)) { r.old.call(this) }
                    if (r.queue) { jQuery.dequeue(this, r.queue) } };
                return r };
            jQuery.fn.extend({ fadeTo: function(e, t, n, r) {
                    return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) {
                    var i = jQuery.isEmptyObject(e),
                        o = jQuery.speed(t, n, r),
                        s = function() {
                            var t = ct(this, jQuery.extend({}, e), o);
                            if (i || K.get(this, "finish")) { t.stop(true) } };
                    s.finish = s;
                    return i || o.queue === false ? this.each(s) : this.queue(o.queue, s) }, stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop;
                        t(n) };
                    if (typeof e !== "string") { n = t;
                        t = e;
                        e = undefined }
                    if (t && e !== false) { this.queue(e || "fx", []) }
                    return this.each(function() {
                        var t = true,
                            i = e != null && e + "queueHooks",
                            o = jQuery.timers,
                            s = K.get(this);
                        if (i) {
                            if (s[i] && s[i].stop) { r(s[i]) } } else {
                            for (i in s) {
                                if (s[i] && s[i].stop && it.test(i)) { r(s[i]) } } }
                        for (i = o.length; i--;) {
                            if (o[i].elem === this && (e == null || o[i].queue === e)) { o[i].anim.stop(n);
                                t = false;
                                o.splice(i, 1) } }
                        if (t || !n) { jQuery.dequeue(this, e) } }) }, finish: function(e) {
                    if (e !== false) { e = e || "fx" }
                    return this.each(function() {
                        var t, n = K.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = jQuery.timers,
                            s = r ? r.length : 0;
                        n.finish = true;
                        jQuery.queue(this, e, []);
                        if (i && i.stop) { i.stop.call(this, true) }
                        for (t = o.length; t--;) {
                            if (o[t].elem === this && o[t].queue === e) { o[t].anim.stop(true);
                                o.splice(t, 1) } }
                        for (t = 0; t < s; t++) {
                            if (r[t] && r[t].finish) { r[t].finish.call(this) } }
                        delete n.finish }) } });
            jQuery.each(["toggle", "show", "hide"], function(e, t) {
                var n = jQuery.fn[t];
                jQuery.fn[t] = function(e, r, i) {
                    return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(at(t, true), e, r, i) } });
            jQuery.each({ slideDown: at("show"), slideUp: at("hide"), slideToggle: at("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { jQuery.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r) } });
            jQuery.timers = [];
            jQuery.fx.tick = function() {
                var e, t = 0,
                    n = jQuery.timers;
                tt = jQuery.now();
                for (; t < n.length; t++) { e = n[t];
                    if (!e() && n[t] === e) { n.splice(t--, 1) } }
                if (!n.length) { jQuery.fx.stop() }
                tt = undefined };
            jQuery.fx.timer = function(e) { jQuery.timers.push(e);
                if (e()) { jQuery.fx.start() } else { jQuery.timers.pop() } };
            jQuery.fx.interval = 13;
            jQuery.fx.start = function() {
                if (!nt) { nt = n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setInterval(jQuery.fx.tick, jQuery.fx.interval) } };
            jQuery.fx.stop = function() {
                if (n.cancelAnimationFrame) { n.cancelAnimationFrame(nt) } else { n.clearInterval(nt) }
                nt = null };
            jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 };
            jQuery.fn.delay = function(e, t) { e = jQuery.fx ? jQuery.fx.speeds[e] || e : e;
                t = t || "fx";
                return this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() { n.clearTimeout(i) } }) };
            (function() {
                var e = a.createElement("input"),
                    t = a.createElement("select"),
                    n = t.appendChild(a.createElement("option"));
                e.type = "checkbox";
                m.checkOn = e.value !== "";
                m.optSelected = n.selected;
                e = a.createElement("input");
                e.value = "t";
                e.type = "radio";
                m.radioValue = e.value === "t" })();
            var pt, dt = jQuery.expr.attrHandle;
            jQuery.fn.extend({ attr: function(e, t) {
                    return Q(this, jQuery.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                    return this.each(function() { jQuery.removeAttr(this, e) }) } });
            jQuery.extend({ attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (o === 3 || o === 8 || o === 2) {
                        return }
                    if (typeof e.getAttribute === "undefined") {
                        return jQuery.prop(e, t, n) }
                    if (o !== 1 || !jQuery.isXMLDoc(e)) { i = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? pt : undefined) }
                    if (n !== undefined) {
                        if (n === null) { jQuery.removeAttr(e, t);
                            return }
                        if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                            return r }
                        e.setAttribute(t, n + "");
                        return n }
                    if (i && "get" in i && (r = i.get(e, t)) !== null) {
                        return r }
                    r = jQuery.find.attr(e, t);
                    return r == null ? undefined : r }, attrHooks: { type: { set: function(e, t) {
                            if (!m.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
                                var n = e.value;
                                e.setAttribute("type", t);
                                if (n) { e.value = n }
                                return t } } } }, removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(M);
                    if (i && e.nodeType === 1) {
                        while (n = i[r++]) { e.removeAttribute(n) } } } });
            pt = { set: function(e, t, n) {
                    if (t === false) { jQuery.removeAttr(e, n) } else { e.setAttribute(n, n) }
                    return n } };
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = dt[t] || jQuery.find.attr;
                dt[t] = function(e, t, r) {
                    var i, o, s = t.toLowerCase();
                    if (!r) { o = dt[s];
                        dt[s] = i;
                        i = n(e, t, r) != null ? s : null;
                        dt[s] = o }
                    return i } });
            var ht = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;
            jQuery.fn.extend({ prop: function(e, t) {
                    return Q(this, jQuery.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                    return this.each(function() { delete this[jQuery.propFix[e] || e] }) } });
            jQuery.extend({ prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (o === 3 || o === 8 || o === 2) {
                        return }
                    if (o !== 1 || !jQuery.isXMLDoc(e)) { t = jQuery.propFix[t] || t;
                        i = jQuery.propHooks[t] }
                    if (n !== undefined) {
                        if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                            return r }
                        return e[t] = n }
                    if (i && "get" in i && (r = i.get(e, t)) !== null) {
                        return r }
                    return e[t] }, propHooks: { tabIndex: { get: function(e) {
                            var t = jQuery.find.attr(e, "tabindex");
                            if (t) {
                                return parseInt(t, 10) }
                            if (ht.test(e.nodeName) || vt.test(e.nodeName) && e.href) {
                                return 0 }
                            return -1 } } }, propFix: { for: "htmlFor", class: "className" } });
            if (!m.optSelected) { jQuery.propHooks.selected = { get: function(e) {
                        var t = e.parentNode;
                        if (t && t.parentNode) { t.parentNode.selectedIndex }
                        return null }, set: function(e) {
                        var t = e.parentNode;
                        if (t) { t.selectedIndex;
                            if (t.parentNode) { t.parentNode.selectedIndex } } } } }
            jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { jQuery.propFix[this.toLowerCase()] = this });

            function yt(e) {
                var t = e.match(M) || [];
                return t.join(" ") }

            function gt(e) {
                return e.getAttribute && e.getAttribute("class") || "" }
            jQuery.fn.extend({ addClass: function(e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (jQuery.isFunction(e)) {
                        return this.each(function(t) { jQuery(this).addClass(e.call(this, t, gt(this))) }) }
                    if (typeof e === "string" && e) { t = e.match(M) || [];
                        while (n = this[u++]) { i = gt(n);
                            r = n.nodeType === 1 && " " + yt(i) + " ";
                            if (r) { s = 0;
                                while (o = t[s++]) {
                                    if (r.indexOf(" " + o + " ") < 0) { r += o + " " } }
                                a = yt(r);
                                if (i !== a) { n.setAttribute("class", a) } } } }
                    return this }, removeClass: function(e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (jQuery.isFunction(e)) {
                        return this.each(function(t) { jQuery(this).removeClass(e.call(this, t, gt(this))) }) }
                    if (!arguments.length) {
                        return this.attr("class", "") }
                    if (typeof e === "string" && e) { t = e.match(M) || [];
                        while (n = this[u++]) { i = gt(n);
                            r = n.nodeType === 1 && " " + yt(i) + " ";
                            if (r) { s = 0;
                                while (o = t[s++]) {
                                    while (r.indexOf(" " + o + " ") > -1) { r = r.replace(" " + o + " ", " ") } }
                                a = yt(r);
                                if (i !== a) { n.setAttribute("class", a) } } } }
                    return this }, toggleClass: function(e, t) {
                    var n = typeof e;
                    if (typeof t === "boolean" && n === "string") {
                        return t ? this.addClass(e) : this.removeClass(e) }
                    if (jQuery.isFunction(e)) {
                        return this.each(function(n) { jQuery(this).toggleClass(e.call(this, n, gt(this), t), t) }) }
                    return this.each(function() {
                        var t, r, i, o;
                        if (n === "string") { r = 0;
                            i = jQuery(this);
                            o = e.match(M) || [];
                            while (t = o[r++]) {
                                if (i.hasClass(t)) { i.removeClass(t) } else { i.addClass(t) } } } else if (e === undefined || n === "boolean") { t = gt(this);
                            if (t) { K.set(this, "__className__", t) }
                            if (this.setAttribute) { this.setAttribute("class", t || e === false ? "" : K.get(this, "__className__") || "") } } }) }, hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++]) {
                        if (n.nodeType === 1 && (" " + yt(gt(n)) + " ").indexOf(t) > -1) {
                            return true } }
                    return false } });
            var mt = /\r/g;
            jQuery.fn.extend({ val: function(e) {
                    var t, n, r, i = this[0];
                    if (!arguments.length) {
                        if (i) { t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()];
                            if (t && "get" in t && (n = t.get(i, "value")) !== undefined) {
                                return n }
                            n = i.value;
                            if (typeof n === "string") {
                                return n.replace(mt, "") }
                            return n == null ? "" : n }
                        return }
                    r = jQuery.isFunction(e);
                    return this.each(function(n) {
                        var i;
                        if (this.nodeType !== 1) {
                            return }
                        if (r) { i = e.call(this, n, jQuery(this).val()) } else { i = e }
                        if (i == null) { i = "" } else if (typeof i === "number") { i += "" } else if (jQuery.isArray(i)) { i = jQuery.map(i, function(e) {
                                return e == null ? "" : e + "" }) }
                        t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                        if (!t || !("set" in t) || t.set(this, i, "value") === undefined) { this.value = i } }) } });
            jQuery.extend({ valHooks: { option: { get: function(e) {
                            var t = jQuery.find.attr(e, "value");
                            return t != null ? t : yt(jQuery.text(e)) } }, select: { get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                s = e.type === "select-one",
                                a = s ? null : [],
                                u = s ? o + 1 : i.length;
                            if (o < 0) { r = u } else { r = s ? o : 0 }
                            for (; r < u; r++) { n = i[r];
                                if ((n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) { t = jQuery(n).val();
                                    if (s) {
                                        return t }
                                    a.push(t) } }
                            return a }, set: function(e, t) {
                            var n, r, i = e.options,
                                o = jQuery.makeArray(t),
                                s = i.length;
                            while (s--) { r = i[s];
                                if (r.selected = jQuery.inArray(jQuery.valHooks.option.get(r), o) > -1) { n = true } }
                            if (!n) { e.selectedIndex = -1 }
                            return o } } } });
            jQuery.each(["radio", "checkbox"], function() { jQuery.valHooks[this] = { set: function(e, t) {
                        if (jQuery.isArray(t)) {
                            return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1 } } };
                if (!m.checkOn) { jQuery.valHooks[this].get = function(e) {
                        return e.getAttribute("value") === null ? "on" : e.value } } });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            jQuery.extend(jQuery.event, { trigger: function(e, t, r, i) {
                    var o, s, u, f, l, c, p, d = [r || a],
                        h = v.call(e, "type") ? e.type : e,
                        y = v.call(e, "namespace") ? e.namespace.split(".") : [];
                    s = u = r = r || a;
                    if (r.nodeType === 3 || r.nodeType === 8) {
                        return }
                    if (bt.test(h + jQuery.event.triggered)) {
                        return }
                    if (h.indexOf(".") > -1) { y = h.split(".");
                        h = y.shift();
                        y.sort() }
                    l = h.indexOf(":") < 0 && "on" + h;
                    e = e[jQuery.expando] ? e : new jQuery.Event(h, typeof e === "object" && e);
                    e.isTrigger = i ? 2 : 3;
                    e.namespace = y.join(".");
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    e.result = undefined;
                    if (!e.target) { e.target = r }
                    t = t == null ? [e] : jQuery.makeArray(t, [e]);
                    p = jQuery.event.special[h] || {};
                    if (!i && p.trigger && p.trigger.apply(r, t) === false) {
                        return }
                    if (!i && !p.noBubble && !jQuery.isWindow(r)) { f = p.delegateType || h;
                        if (!bt.test(f + h)) { s = s.parentNode }
                        for (; s; s = s.parentNode) { d.push(s);
                            u = s }
                        if (u === (r.ownerDocument || a)) { d.push(u.defaultView || u.parentWindow || n) } }
                    o = 0;
                    while ((s = d[o++]) && !e.isPropagationStopped()) { e.type = o > 1 ? f : p.bindType || h;
                        c = (K.get(s, "events") || {})[e.type] && K.get(s, "handle");
                        if (c) { c.apply(s, t) }
                        c = l && s[l];
                        if (c && c.apply && X(s)) { e.result = c.apply(s, t);
                            if (e.result === false) { e.preventDefault() } } }
                    e.type = h;
                    if (!i && !e.isDefaultPrevented()) {
                        if ((!p._default || p._default.apply(d.pop(), t) === false) && X(r)) {
                            if (l && jQuery.isFunction(r[h]) && !jQuery.isWindow(r)) { u = r[l];
                                if (u) { r[l] = null }
                                jQuery.event.triggered = h;
                                r[h]();
                                jQuery.event.triggered = undefined;
                                if (u) { r[l] = u } } } }
                    return e.result }, simulate: function(e, t, n) {
                    var r = jQuery.extend(new jQuery.Event, n, { type: e, isSimulated: true });
                    jQuery.event.trigger(r, null, t) } });
            jQuery.fn.extend({ trigger: function(e, t) {
                    return this.each(function() { jQuery.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) {
                        return jQuery.event.trigger(e, t, n, true) } } });
            jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, t) { jQuery.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } });
            jQuery.fn.extend({ hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e) } });
            m.focusin = "onfocusin" in n;
            if (!m.focusin) { jQuery.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                    var n = function(e) { jQuery.event.simulate(t, e.target, jQuery.event.fix(e)) };
                    jQuery.event.special[t] = { setup: function() {
                            var r = this.ownerDocument || this,
                                i = K.access(r, t);
                            if (!i) { r.addEventListener(e, n, true) }
                            K.access(r, t, (i || 0) + 1) }, teardown: function() {
                            var r = this.ownerDocument || this,
                                i = K.access(r, t) - 1;
                            if (!i) { r.removeEventListener(e, n, true);
                                K.remove(r, t) } else { K.access(r, t, i) } } } }) }
            var wt = n.location;
            var xt = jQuery.now();
            var Et = /\?/;
            jQuery.parseXML = function(e) {
                var t;
                if (!e || typeof e !== "string") {
                    return null }
                try { t = (new n.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = undefined }
                if (!t || t.getElementsByTagName("parsererror").length) { jQuery.error("Invalid XML: " + e) }
                return t };
            var Tt = /\[\]$/,
                kt = /\r?\n/g,
                jt = /^(?:submit|button|image|reset|file)$/i,
                Ct = /^(?:input|select|textarea|keygen)/i;

            function At(e, t, n, r) {
                var i;
                if (jQuery.isArray(t)) { jQuery.each(t, function(t, i) {
                        if (n || Tt.test(e)) { r(e, i) } else { At(e + "[" + (typeof i === "object" && i != null ? t : "") + "]", i, n, r) } }) } else if (!n && jQuery.type(t) === "object") {
                    for (i in t) { At(e + "[" + i + "]", t[i], n, r) } } else { r(e, t) } }
            jQuery.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = jQuery.isFunction(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n) };
                if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) { jQuery.each(e, function() { i(this.name, this.value) }) } else {
                    for (n in e) { At(n, e[n], t, i) } }
                return r.join("&") };
            jQuery.fn.extend({ serialize: function() {
                    return jQuery.param(this.serializeArray()) }, serializeArray: function() {
                    return this.map(function() {
                        var e = jQuery.prop(this, "elements");
                        return e ? jQuery.makeArray(e) : this }).filter(function() {
                        var e = this.type;
                        return this.name && !jQuery(this).is(":disabled") && Ct.test(this.nodeName) && !jt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) {
                        var n = jQuery(this).val();
                        if (n == null) {
                            return null }
                        if (jQuery.isArray(n)) {
                            return jQuery.map(n, function(e) {
                                return { name: t.name, value: e.replace(kt, "\r\n") } }) }
                        return { name: t.name, value: n.replace(kt, "\r\n") } }).get() } });
            var _t = /%20/g,
                Nt = /#.*$/,
                Ot = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Dt = /^(?:GET|HEAD)$/,
                Pt = /^\/\//,
                Rt = {},
                Ft = {},
                qt = "*/".concat("*"),
                Ht = a.createElement("a");
            Ht.href = wt.href;

            function Mt(e) {
                return function(t, n) {
                    if (typeof t !== "string") { n = t;
                        t = "*" }
                    var r, i = 0,
                        o = t.toLowerCase().match(M) || [];
                    if (jQuery.isFunction(n)) {
                        while (r = o[i++]) {
                            if (r[0] === "+") { r = r.slice(1) || "*";
                                (e[r] = e[r] || []).unshift(n) } else {
                                (e[r] = e[r] || []).push(n) } } } } }

            function It(e, t, n, r) {
                var i = {},
                    o = e === Ft;

                function s(a) {
                    var u;
                    i[a] = true;
                    jQuery.each(e[a] || [], function(e, a) {
                        var f = a(t, n, r);
                        if (typeof f === "string" && !o && !i[f]) { t.dataTypes.unshift(f);
                            s(f);
                            return false } else if (o) {
                            return !(u = f) } });
                    return u }
                return s(t.dataTypes[0]) || !i["*"] && s("*") }

            function $t(e, t) {
                var n, r, i = jQuery.ajaxSettings.flatOptions || {};
                for (n in t) {
                    if (t[n] !== undefined) {
                        (i[n] ? e : r || (r = {}))[n] = t[n] } }
                if (r) { jQuery.extend(true, e, r) }
                return e }

            function Bt(e, t, n) {
                var r, i, o, s, a = e.contents,
                    u = e.dataTypes;
                while (u[0] === "*") { u.shift();
                    if (r === undefined) { r = e.mimeType || t.getResponseHeader("Content-Type") } }
                if (r) {
                    for (i in a) {
                        if (a[i] && a[i].test(r)) { u.unshift(i);
                            break } } }
                if (u[0] in n) { o = u[0] } else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) { o = i;
                            break }
                        if (!s) { s = i } }
                    o = o || s }
                if (o) {
                    if (o !== u[0]) { u.unshift(o) }
                    return n[o] } }

            function Wt(e, t, n, r) {
                var i, o, s, a, u, f = {},
                    l = e.dataTypes.slice();
                if (l[1]) {
                    for (s in e.converters) { f[s.toLowerCase()] = e.converters[s] } }
                o = l.shift();
                while (o) {
                    if (e.responseFields[o]) { n[e.responseFields[o]] = t }
                    if (!u && r && e.dataFilter) { t = e.dataFilter(t, e.dataType) }
                    u = o;
                    o = l.shift();
                    if (o) {
                        if (o === "*") { o = u } else if (u !== "*" && u !== o) { s = f[u + " " + o] || f["* " + o];
                            if (!s) {
                                for (i in f) { a = i.split(" ");
                                    if (a[1] === o) { s = f[u + " " + a[0]] || f["* " + a[0]];
                                        if (s) {
                                            if (s === true) { s = f[i] } else if (f[i] !== true) { o = a[0];
                                                l.unshift(a[1]) }
                                            break } } } }
                            if (s !== true) {
                                if (s && e.throws) { t = s(t) } else {
                                    try { t = s(t) } catch (e) {
                                        return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o } } } } } } }
                return { state: "success", data: t } }
            jQuery.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: wt.href, type: "GET", isLocal: St.test(wt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": qt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": jQuery.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e, t) {
                    return t ? $t($t(e, jQuery.ajaxSettings), t) : $t(jQuery.ajaxSettings, e) }, ajaxPrefilter: Mt(Rt), ajaxTransport: Mt(Ft), ajax: function(e, t) {
                    if (typeof e === "object") { t = e;
                        e = undefined }
                    t = t || {};
                    var r, i, o, s, u, f, l, c, p, d, h = jQuery.ajaxSetup({}, t),
                        v = h.context || h,
                        y = h.context && (v.nodeType || v.jquery) ? jQuery(v) : jQuery.event,
                        g = jQuery.Deferred(),
                        m = jQuery.Callbacks("once memory"),
                        b = h.statusCode || {},
                        w = {},
                        x = {},
                        E = "canceled",
                        T = { readyState: 0, getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s) { s = {};
                                        while (t = Lt.exec(o)) { s[t[1].toLowerCase()] = t[2] } }
                                    t = s[e.toLowerCase()] }
                                return t == null ? null : t }, getAllResponseHeaders: function() {
                                return l ? o : null }, setRequestHeader: function(e, t) {
                                if (l == null) { e = x[e.toLowerCase()] = x[e.toLowerCase()] || e;
                                    w[e] = t }
                                return this }, overrideMimeType: function(e) {
                                if (l == null) { h.mimeType = e }
                                return this }, statusCode: function(e) {
                                var t;
                                if (e) {
                                    if (l) { T.always(e[T.status]) } else {
                                        for (t in e) { b[t] = [b[t], e[t]] } } }
                                return this }, abort: function(e) {
                                var t = e || E;
                                if (r) { r.abort(t) }
                                k(0, t);
                                return this } };
                    g.promise(T);
                    h.url = ((e || h.url || wt.href) + "").replace(Pt, wt.protocol + "//");
                    h.type = t.method || t.type || h.method || h.type;
                    h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""];
                    if (h.crossDomain == null) { f = a.createElement("a");
                        try { f.href = h.url;
                            f.href = f.href;
                            h.crossDomain = Ht.protocol + "//" + Ht.host !== f.protocol + "//" + f.host } catch (e) { h.crossDomain = true } }
                    if (h.data && h.processData && typeof h.data !== "string") { h.data = jQuery.param(h.data, h.traditional) }
                    It(Rt, h, t, T);
                    if (l) {
                        return T }
                    c = jQuery.event && h.global;
                    if (c && jQuery.active++ === 0) { jQuery.event.trigger("ajaxStart") }
                    h.type = h.type.toUpperCase();
                    h.hasContent = !Dt.test(h.type);
                    i = h.url.replace(Nt, "");
                    if (!h.hasContent) { d = h.url.slice(i.length);
                        if (h.data) { i += (Et.test(i) ? "&" : "?") + h.data;
                            delete h.data }
                        if (h.cache === false) { i = i.replace(Ot, "$1");
                            d = (Et.test(i) ? "&" : "?") + "_=" + xt++ + d }
                        h.url = i + d } else if (h.data && h.processData && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) { h.data = h.data.replace(_t, "+") }
                    if (h.ifModified) {
                        if (jQuery.lastModified[i]) { T.setRequestHeader("If-Modified-Since", jQuery.lastModified[i]) }
                        if (jQuery.etag[i]) { T.setRequestHeader("If-None-Match", jQuery.etag[i]) } }
                    if (h.data && h.hasContent && h.contentType !== false || t.contentType) { T.setRequestHeader("Content-Type", h.contentType) }
                    T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) { T.setRequestHeader(p, h.headers[p]) }
                    if (h.beforeSend && (h.beforeSend.call(v, T, h) === false || l)) {
                        return T.abort() }
                    E = "abort";
                    m.add(h.complete);
                    T.done(h.success);
                    T.fail(h.error);
                    r = It(Ft, h, t, T);
                    if (!r) { k(-1, "No Transport") } else { T.readyState = 1;
                        if (c) { y.trigger("ajaxSend", [T, h]) }
                        if (l) {
                            return T }
                        if (h.async && h.timeout > 0) { u = n.setTimeout(function() { T.abort("timeout") }, h.timeout) }
                        try { l = false;
                            r.send(w, k) } catch (e) {
                            if (l) {
                                throw e }
                            k(-1, e) } }

                    function k(e, t, s, a) {
                        var f, p, d, w, x, E = t;
                        if (l) {
                            return }
                        l = true;
                        if (u) { n.clearTimeout(u) }
                        r = undefined;
                        o = a || "";
                        T.readyState = e > 0 ? 4 : 0;
                        f = e >= 200 && e < 300 || e === 304;
                        if (s) { w = Bt(h, T, s) }
                        w = Wt(h, w, T, f);
                        if (f) {
                            if (h.ifModified) { x = T.getResponseHeader("Last-Modified");
                                if (x) { jQuery.lastModified[i] = x }
                                x = T.getResponseHeader("etag");
                                if (x) { jQuery.etag[i] = x } }
                            if (e === 204 || h.type === "HEAD") { E = "nocontent" } else if (e === 304) { E = "notmodified" } else { E = w.state;
                                p = w.data;
                                d = w.error;
                                f = !d } } else { d = E;
                            if (e || !E) { E = "error";
                                if (e < 0) { e = 0 } } }
                        T.status = e;
                        T.statusText = (t || E) + "";
                        if (f) { g.resolveWith(v, [p, E, T]) } else { g.rejectWith(v, [T, E, d]) }
                        T.statusCode(b);
                        b = undefined;
                        if (c) { y.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? p : d]) }
                        m.fireWith(v, [T, E]);
                        if (c) { y.trigger("ajaxComplete", [T, h]);
                            if (!--jQuery.active) { jQuery.event.trigger("ajaxStop") } } }
                    return T }, getJSON: function(e, t, n) {
                    return jQuery.get(e, t, n, "json") }, getScript: function(e, t) {
                    return jQuery.get(e, undefined, t, "script") } });
            jQuery.each(["get", "post"], function(e, t) { jQuery[t] = function(e, n, r, i) {
                    if (jQuery.isFunction(n)) { i = i || r;
                        r = n;
                        n = undefined }
                    return jQuery.ajax(jQuery.extend({ url: e, type: t, dataType: i, data: n, success: r }, jQuery.isPlainObject(e) && e)) } });
            jQuery._evalUrl = function(e) {
                return jQuery.ajax({ url: e, type: "GET", dataType: "script", cache: true, async: false, global: false, throws: true }) };
            jQuery.fn.extend({ wrapAll: function(e) {
                    var t;
                    if (this[0]) {
                        if (jQuery.isFunction(e)) { e = e.call(this[0]) }
                        t = jQuery(e, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) { t.insertBefore(this[0]) }
                        t.map(function() {
                            var e = this;
                            while (e.firstElementChild) { e = e.firstElementChild }
                            return e }).append(this) }
                    return this }, wrapInner: function(e) {
                    if (jQuery.isFunction(e)) {
                        return this.each(function(t) { jQuery(this).wrapInner(e.call(this, t)) }) }
                    return this.each(function() {
                        var t = jQuery(this),
                            n = t.contents();
                        if (n.length) { n.wrapAll(e) } else { t.append(e) } }) }, wrap: function(e) {
                    var t = jQuery.isFunction(e);
                    return this.each(function(n) { jQuery(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { this.parent(e).not("body").each(function() { jQuery(this).replaceWith(this.childNodes) });
                    return this } });
            jQuery.expr.pseudos.hidden = function(e) {
                return !jQuery.expr.pseudos.visible(e) };
            jQuery.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) };
            jQuery.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest } catch (e) {} };
            var zt = { 0: 200, 1223: 204 },
                Vt = jQuery.ajaxSettings.xhr();
            m.cors = !!Vt && "withCredentials" in Vt;
            m.ajax = Vt = !!Vt;
            jQuery.ajaxTransport(function(e) {
                var t, r;
                if (m.cors || Vt && !e.crossDomain) {
                    return { send: function(i, o) {
                            var s, a = e.xhr();
                            a.open(e.type, e.url, e.async, e.username, e.password);
                            if (e.xhrFields) {
                                for (s in e.xhrFields) { a[s] = e.xhrFields[s] } }
                            if (e.mimeType && a.overrideMimeType) { a.overrideMimeType(e.mimeType) }
                            if (!e.crossDomain && !i["X-Requested-With"]) { i["X-Requested-With"] = "XMLHttpRequest" }
                            for (s in i) { a.setRequestHeader(s, i[s]) }
                            t = function(e) {
                                return function() {
                                    if (t) { t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null;
                                        if (e === "abort") { a.abort() } else if (e === "error") {
                                            if (typeof a.status !== "number") { o(0, "error") } else { o(a.status, a.statusText) } } else { o(zt[a.status] || a.status, a.statusText, (a.responseType || "text") !== "text" || typeof a.responseText !== "string" ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()) } } } };
                            a.onload = t();
                            r = a.onerror = t("error");
                            if (a.onabort !== undefined) { a.onabort = r } else { a.onreadystatechange = function() {
                                    if (a.readyState === 4) { n.setTimeout(function() {
                                            if (t) { r() } }) } } }
                            t = t("abort");
                            try { a.send(e.hasContent && e.data || null) } catch (e) {
                                if (t) {
                                    throw e } } }, abort: function() {
                            if (t) { t() } } } } });
            jQuery.ajaxPrefilter(function(e) {
                if (e.crossDomain) { e.contents.script = false } });
            jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { jQuery.globalEval(e);
                        return e } } });
            jQuery.ajaxPrefilter("script", function(e) {
                if (e.cache === undefined) { e.cache = false }
                if (e.crossDomain) { e.type = "GET" } });
            jQuery.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return { send: function(r, i) { t = jQuery("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove();
                                n = null;
                                if (e) { i(e.type === "error" ? 404 : 200, e.type) } });
                            a.head.appendChild(t[0]) }, abort: function() {
                            if (n) { n() } } } } });
            var Ut = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                    var e = Ut.pop() || jQuery.expando + "_" + xt++;
                    this[e] = true;
                    return e } });
            jQuery.ajaxPrefilter("json jsonp", function(e, t, r) {
                var i, o, s, a = e.jsonp !== false && (Gt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Gt.test(e.data) && "data");
                if (a || e.dataTypes[0] === "jsonp") { i = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                    if (a) { e[a] = e[a].replace(Gt, "$1" + i) } else if (e.jsonp !== false) { e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i }
                    e.converters["script json"] = function() {
                        if (!s) { jQuery.error(i + " was not called") }
                        return s[0] };
                    e.dataTypes[0] = "json";
                    o = n[i];
                    n[i] = function() { s = arguments };
                    r.always(function() {
                        if (o === undefined) { jQuery(n).removeProp(i) } else { n[i] = o }
                        if (e[i]) { e.jsonpCallback = t.jsonpCallback;
                            Ut.push(i) }
                        if (s && jQuery.isFunction(o)) { o(s[0]) }
                        s = o = undefined });
                    return "script" } });
            m.createHTMLDocument = function() {
                var e = a.implementation.createHTMLDocument("").body;
                e.innerHTML = "<form></form><form></form>";
                return e.childNodes.length === 2 }();
            jQuery.parseHTML = function(e, t, n) {
                if (typeof e !== "string") {
                    return [] }
                if (typeof t === "boolean") { n = t;
                    t = false }
                var r, i, o;
                if (!t) {
                    if (m.createHTMLDocument) { t = a.implementation.createHTMLDocument("");
                        r = t.createElement("base");
                        r.href = a.location.href;
                        t.head.appendChild(r) } else { t = a } }
                i = O.exec(e);
                o = !n && [];
                if (i) {
                    return [t.createElement(i[1])] }
                i = be([e], t, o);
                if (o && o.length) { jQuery(o).remove() }
                return jQuery.merge([], i.childNodes) };
            jQuery.fn.load = function(e, t, n) {
                var r, i, o, s = this,
                    a = e.indexOf(" ");
                if (a > -1) { r = yt(e.slice(a));
                    e = e.slice(0, a) }
                if (jQuery.isFunction(t)) { n = t;
                    t = undefined } else if (t && typeof t === "object") { i = "POST" }
                if (s.length > 0) { jQuery.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments;
                        s.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }) }
                return this };
            jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { jQuery.fn[t] = function(e) {
                    return this.on(t, e) } });
            jQuery.expr.pseudos.animated = function(e) {
                return jQuery.grep(jQuery.timers, function(t) {
                    return e === t.elem }).length };

            function Qt(e) {
                return jQuery.isWindow(e) ? e : e.nodeType === 9 && e.defaultView }
            jQuery.offset = { setOffset: function(e, t, n) {
                    var r, i, o, s, a, u, f, l = jQuery.css(e, "position"),
                        c = jQuery(e),
                        p = {};
                    if (l === "static") { e.style.position = "relative" }
                    a = c.offset();
                    o = jQuery.css(e, "top");
                    u = jQuery.css(e, "left");
                    f = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
                    if (f) { r = c.position();
                        s = r.top;
                        i = r.left } else { s = parseFloat(o) || 0;
                        i = parseFloat(u) || 0 }
                    if (jQuery.isFunction(t)) { t = t.call(e, n, jQuery.extend({}, a)) }
                    if (t.top != null) { p.top = t.top - a.top + s }
                    if (t.left != null) { p.left = t.left - a.left + i }
                    if ("using" in t) { t.using.call(e, p) } else { c.css(p) } } };
            jQuery.fn.extend({ offset: function(e) {
                    if (arguments.length) {
                        return e === undefined ? this : this.each(function(t) { jQuery.offset.setOffset(this, e, t) }) }
                    var t, n, r, i, o = this[0];
                    if (!o) {
                        return }
                    if (!o.getClientRects().length) {
                        return { top: 0, left: 0 } }
                    r = o.getBoundingClientRect();
                    if (r.width || r.height) { i = o.ownerDocument;
                        n = Qt(i);
                        t = i.documentElement;
                        return { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft } }
                    return r }, position: function() {
                    if (!this[0]) {
                        return }
                    var e, t, n = this[0],
                        r = { top: 0, left: 0 };
                    if (jQuery.css(n, "position") === "fixed") { t = n.getBoundingClientRect() } else { e = this.offsetParent();
                        t = this.offset();
                        if (!jQuery.nodeName(e[0], "html")) { r = e.offset() }
                        r = { top: r.top + jQuery.css(e[0], "borderTopWidth", true), left: r.left + jQuery.css(e[0], "borderLeftWidth", true) } }
                    return { top: t.top - r.top - jQuery.css(n, "marginTop", true), left: t.left - r.left - jQuery.css(n, "marginLeft", true) } }, offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent;
                        while (e && jQuery.css(e, "position") === "static") { e = e.offsetParent }
                        return e || we }) } });
            jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var n = "pageYOffset" === t;
                jQuery.fn[e] = function(r) {
                    return Q(this, function(e, r, i) {
                        var o = Qt(e);
                        if (i === undefined) {
                            return o ? o[t] : e[r] }
                        if (o) { o.scrollTo(!n ? i : o.pageXOffset, n ? i : o.pageYOffset) } else { e[r] = i } }, e, r, arguments.length) } });
            jQuery.each(["top", "left"], function(e, t) { jQuery.cssHooks[t] = ze(m.pixelPosition, function(e, n) {
                    if (n) { n = We(e, t);
                        return $e.test(n) ? jQuery(e).position()[t] + "px" : n } }) });
            jQuery.each({ Height: "height", Width: "width" }, function(e, t) { jQuery.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) { jQuery.fn[r] = function(i, o) {
                        var s = arguments.length && (n || typeof i !== "boolean"),
                            a = n || (i === true || o === true ? "margin" : "border");
                        return Q(this, function(t, n, i) {
                            var o;
                            if (jQuery.isWindow(t)) {
                                return r.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e] }
                            if (t.nodeType === 9) { o = t.documentElement;
                                return Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]) }
                            return i === undefined ? jQuery.css(t, n, a) : jQuery.style(t, n, i, a) }, t, s ? i : undefined, s) } }) });
            jQuery.fn.extend({ bind: function(e, t, n) {
                    return this.on(e, null, t, n) }, unbind: function(e, t) {
                    return this.off(e, null, t) }, delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r) }, undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n) } });
            jQuery.parseJSON = JSON.parse;
            if (true) {!(r = [], i = function() {
                    return jQuery }.apply(t, r), i !== undefined && (e.exports = i)) }
            var Xt = n.jQuery,
                Yt = n.$;
            jQuery.noConflict = function(e) {
                if (n.$ === jQuery) { n.$ = Yt }
                if (e && n.jQuery === jQuery) { n.jQuery = Xt }
                return jQuery };
            if (!o) { n.jQuery = n.$ = jQuery }
            return jQuery
        })
    },
    341: function(e, t) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        (function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = { exports: {}, id: r, loaded: false };
                e[r].call(i.exports, i, i.exports, n);
                i.loaded = true;
                return i.exports }
            n.m = e;
            n.c = t;
            n.p = "./";
            return n(0) })([function(e, t, n) { "use strict";
            n(1);
            var r = n(2);
            var i = f(r);
            var o = n(44);
            var s = f(o);
            var a = n(46);
            var u = f(a);

            function f(e) {
                return e && e.__esModule ? e : { default: e } }
            console.warn(i.default);
            i.default.registerUI({ viewport: s.default, badge: u.default }) }, function(e, t) {}, function(e, t, r) {
            (function(t, i) {
                /**
                 * lego.js v0.1.1
                 * (c) 2016 Ronghui Yu
                 * @license MIT
                 */
                "use strict";

                function o(e) {
                    return e && (typeof e === "undefined" ? "undefined" : n(e)) === "object" && "default" in e ? e["default"] : e }
                var s = o(r(4));
                var a = r(5);
                var u = r(6);
                var f = o(r(7));
                var l = o(r(9));
                window.hx = f(l.h);
                var c = function e(t) {
                    var n = this;
                    if (t === void 0) t = {};
                    var r = this;
                    this.options = { events: null, listen: null, config: {} };
                    Lego.$.extend(true, this.options, t);
                    this.Eventer = Lego.Eventer;
                    this.setElement(this.options.el);
                    this.data = this.options.data || this.data || {};
                    this.server = null;
                    this.isloaded = false;
                    this._renderRootNode();
                    this._observe();
                    if (this.options.dataSource) {
                        var i = this.options.dataSource;
                        if (i.server) {
                            if (typeof i.server == "function") { this.server = new i.server } else { this.server = i.server }
                            this.server.fetch(i.api, function(e) {
                                if (Array.isArray(e)) { n.data.list = e } else { n.data = e }
                                n.refresh() }) } } else { this._renderComponents() } };
                c.prototype._renderRootNode = function e() {
                    var t = this.render();
                    this.oldNode = t;
                    this.rootNode = l.create(t);
                    this.$el[this.options.insert](this.rootNode) };
                c.prototype._renderComponents = function e() {
                    var t = this;
                    if (this.options.components.length && !this.isloaded) { this.isloaded = true;
                        this.options.components.forEach(function(e, t) { Lego.create(e) }) } };
                c.prototype._observe = function e() {
                    var t = this;
                    if (this.data && n(this.data) === "object") { Object.observe(this.data, function(e) {
                            var n = t.render();
                            var r = l.diff(t.oldNode, n);
                            t.rootNode = l.patch(t.rootNode, r);
                            t.oldNode = n;
                            t._renderComponents() }) } };
                c.prototype.setElement = function e(t) { this.unEvents();
                    this._setElement(t);
                    this.delegateEvents();
                    return this };
                c.prototype._setElement = function e(t) { this.$el = t instanceof Lego.$ ? t : Lego.$(t);
                    this.el = this.$el[0] };
                c.prototype.delegateEvents = function e() {
                    var t = this;
                    var n = this.options.events;
                    var r = /^(\S+)\s*(.*)$/;
                    if (!n) {
                        return this }
                    this.unEvents();
                    for (var i in n) {
                        var o = n[i];
                        if (typeof o !== "function") { o = t[o] }
                        if (!o) {
                            continue }
                        var s = i.match(r);
                        t.delegate(s[1], s[2], o.bind(t)) }
                    return this };
                c.prototype.delegate = function e(t, n, r) { this.$el.on(t + ".delegateEvents" + this.options.id, n, r);
                    return this };
                c.prototype.unEvents = function e() {
                    if (this.$el) { this.$el.off(".delegateEvents" + this.options.id) }
                    return this };
                c.prototype.undelegate = function e(t, n, r) { this.$el.off(t + ".delegateEvents" + this.options.id, n, r);
                    return this };
                c.prototype.$ = function $(e) {
                    return this.$el.find(e) };
                c.prototype.render = function e() {
                    return "" };
                c.prototype.refresh = function e() { this.data.__v = Lego.randomKey() };
                c.prototype.remove = function e() { this.unEvents();
                    this.$el.children().remove() };

                function p(e) {
                    return new Promise(function(t, n) {
                        function r(o, s) {
                            try {
                                var a = e[s ? "throw" : "next"](o) } catch (e) { n(e);
                                return }
                            a.done ? t(a.value) : Promise.resolve(a.value).then(r, i) }

                        function i(e) { r(e, 1) }
                        r() }) }
                var d = function e(t) {
                    var n = this;
                    if (t === void 0) t = {};
                    this.datas = new Map;
                    this.Eventer = Lego.Eventer;
                    for (var r in t) { n.datas.set(r, t[r]);
                        n.datas.get(r).data = {} } };
                d.prototype.setOptions = function e(t, n) {
                    if (n === void 0) n = {};
                    if (!this.datas.get(t)) {
                        return this }
                    var r = Lego.$.extend(true, this.datas.get(t), n);
                    this.datas.set(t, r);
                    return this };
                d.prototype.fetch = function e(t, n) {
                    var r = this;
                    t = Array.isArray(t) ? t : [t];
                    this.__fetch(t).then(function(e) { t.forEach(function(t, n) {
                            var i = e[n];
                            var o = r.datas.get(t).listTarget;
                            var s = r.datas.get(t).model;
                            if (i) {
                                if (o && Array.isArray(i[o]) && s) { i[o].forEach(function(e, t) { i[o][t] = Lego.$.extend({}, s, e) }) }
                                if (!o && Array.isArray(i) && !s) { i.forEach(function(e, t) { i[t] = Lego.$.extend({}, s, e) }) } }
                            r.datas.get(t).data = i });
                        if (typeof n == "function") { n(r.parse(e)) } }) };
                d.prototype.__fetch = function e(t) {
                    return p(regeneratorRuntime.mark(function e() {
                        var n, r, i, o, s, a, u;
                        return regeneratorRuntime.wrap(function e(f) {
                            var l = this;
                            while (1) {
                                switch (f.prev = f.next) {
                                    case 0:
                                        n = l, r = [];
                                        f.prev = 1;
                                        i = t.map(function(e) {
                                            return p(regeneratorRuntime.mark(function t() {
                                                var r, i, o;
                                                return regeneratorRuntime.wrap(function t(s) {
                                                    while (1) {
                                                        switch (s.prev = s.next) {
                                                            case 0:
                                                                r = n.datas.get(e) || {};
                                                                if (!(!Lego.$.isEmptyObject(r.data) && !r.reset)) { s.next = 7;
                                                                    break }
                                                                s.next = 4;
                                                                return r.data;
                                                            case 4:
                                                                return s.abrupt("return", s.sent);
                                                            case 7:
                                                                if (!(n.datas.has(e) && r.url && (Lego.$.isEmptyObject(r.data) || r.reset))) { s.next = 13;
                                                                    break }
                                                                i = new Request(r.url, { method: r.method || "GET", headers: r.headers || "none", mode: "same-origin", credentials: "include", body: r.body || undefined });
                                                                s.next = 11;
                                                                return fetch(i);
                                                            case 11:
                                                                o = s.sent;
                                                                return s.abrupt("return", o.json());
                                                            case 13:
                                                            case "end":
                                                                return s.stop() } } }, t, this) })()) });
                                        s = regeneratorRuntime.values(i);
                                    case 4:
                                        if ((a = s.next()).done) { f.next = 12;
                                            break }
                                        o = a.value;
                                        f.next = 8;
                                        return o;
                                    case 8:
                                        u = f.sent;
                                        r.push(u);
                                    case 10:
                                        f.next = 4;
                                        break;
                                    case 12:
                                        f.next = 17;
                                        break;
                                    case 14:
                                        f.prev = 14;
                                        f.t0 = f["catch"](1);
                                        debug.log(f.t0);
                                    case 17:
                                        return f.abrupt("return", r);
                                    case 18:
                                    case "end":
                                        return f.stop() } } }, e, this, [
                            [1, 14]
                        ]) }).call(this)) };
                d.prototype.parse = function e(t) {
                    return t };
                d.prototype.getData = function e(t) {
                    if (t) {
                        return this.datas.get(t) ? this.datas.get(t) : {} } else {
                        return this.datas } };
                ! function(t) { "use strict";
                    var r = Object.prototype.hasOwnProperty;
                    var o;
                    var s = typeof Symbol === "function" ? Symbol : {};
                    var a = s.iterator || "@@iterator";
                    var u = s.toStringTag || "@@toStringTag";
                    var f = (typeof e === "undefined" ? "undefined" : n(e)) === "object";
                    var l = t.regeneratorRuntime;
                    if (l) {
                        if (f) { e.exports = l }
                        return }
                    l = t.regeneratorRuntime = f ? e.exports : {};

                    function c(e, t, n, r) {
                        var i = t && t.prototype instanceof m ? t : m;
                        var o = Object.create(i.prototype);
                        var s = new _(r || []);
                        o._invoke = j(e, n, s);
                        return o }
                    l.wrap = c;

                    function p(e, t, n) {
                        try {
                            return { type: "normal", arg: e.call(t, n) } } catch (e) {
                            return { type: "throw", arg: e } } }
                    var d = "suspendedStart";
                    var h = "suspendedYield";
                    var v = "executing";
                    var y = "completed";
                    var g = {};

                    function m() {}

                    function b() {}

                    function w() {}
                    var x = w.prototype = m.prototype;
                    b.prototype = x.constructor = w;
                    w.constructor = b;
                    w[u] = b.displayName = "GeneratorFunction";

                    function E(e) {
                        ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) {
                                return this._invoke(t, e) } }) }
                    l.isGeneratorFunction = function(e) {
                        var t = typeof e === "function" && e.constructor;
                        return t ? t === b || (t.displayName || t.name) === "GeneratorFunction" : false };
                    l.mark = function(e) {
                        if (Object.setPrototypeOf) { Object.setPrototypeOf(e, w) } else { e.__proto__ = w;
                            if (!(u in e)) { e[u] = "GeneratorFunction" } }
                        e.prototype = Object.create(x);
                        return e };
                    l.awrap = function(e) {
                        return new T(e) };

                    function T(e) { this.arg = e }

                    function k(e) {
                        function t(n, r, i, o) {
                            var s = p(e[n], e, r);
                            if (s.type === "throw") { o(s.arg) } else {
                                var a = s.arg;
                                var u = a.value;
                                if (u instanceof T) {
                                    return Promise.resolve(u.arg).then(function(e) { t("next", e, i, o) }, function(e) { t("throw", e, i, o) }) }
                                return Promise.resolve(u).then(function(e) { a.value = e;
                                    i(a) }, o) } }
                        if ((typeof i === "undefined" ? "undefined" : n(i)) === "object" && i.domain) { t = i.domain.bind(t) }
                        var r;

                        function o(e, n) {
                            function i() {
                                return new Promise(function(r, i) { t(e, n, r, i) }) }
                            return r = r ? r.then(i, i) : i() }
                        this._invoke = o }
                    E(k.prototype);
                    l.async = function(e, t, n, r) {
                        var i = new k(c(e, t, n, r));
                        return l.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                            return e.done ? e.value : i.next() }) };

                    function j(e, t, n) {
                        var r = d;
                        return function i(s, a) {
                            if (r === v) {
                                throw new Error("Generator is already running") }
                            if (r === y) {
                                if (s === "throw") {
                                    throw a }
                                return O() }
                            while (true) {
                                var u = n.delegate;
                                if (u) {
                                    if (s === "return" || s === "throw" && u.iterator[s] === o) { n.delegate = null;
                                        var f = u.iterator["return"];
                                        if (f) {
                                            var l = p(f, u.iterator, a);
                                            if (l.type === "throw") { s = "throw";
                                                a = l.arg;
                                                continue } }
                                        if (s === "return") {
                                            continue } }
                                    var l = p(u.iterator[s], u.iterator, a);
                                    if (l.type === "throw") { n.delegate = null;
                                        s = "throw";
                                        a = l.arg;
                                        continue }
                                    s = "next";
                                    a = o;
                                    var c = l.arg;
                                    if (c.done) { n[u.resultName] = c.value;
                                        n.next = u.nextLoc } else { r = h;
                                        return c }
                                    n.delegate = null }
                                if (s === "next") { n.sent = n._sent = a } else if (s === "throw") {
                                    if (r === d) { r = y;
                                        throw a }
                                    if (n.dispatchException(a)) { s = "next";
                                        a = o } } else if (s === "return") { n.abrupt("return", a) }
                                r = v;
                                var l = p(e, t, n);
                                if (l.type === "normal") { r = n.done ? y : h;
                                    var c = { value: l.arg, done: n.done };
                                    if (l.arg === g) {
                                        if (n.delegate && s === "next") { a = o } } else {
                                        return c } } else if (l.type === "throw") { r = y;
                                    s = "throw";
                                    a = l.arg } } } }
                    E(x);
                    x[a] = function() {
                        return this };
                    x[u] = "Generator";
                    x.toString = function() {
                        return "[object Generator]" };

                    function C(e) {
                        var t = { tryLoc: e[0] };
                        if (1 in e) { t.catchLoc = e[1] }
                        if (2 in e) { t.finallyLoc = e[2];
                            t.afterLoc = e[3] }
                        this.tryEntries.push(t) }

                    function A(e) {
                        var t = e.completion || {};
                        t.type = "normal";
                        delete t.arg;
                        e.completion = t }

                    function _(e) { this.tryEntries = [{ tryLoc: "root" }];
                        e.forEach(C, this);
                        this.reset(true) }
                    l.keys = function(e) {
                        var t = [];
                        for (var n in e) { t.push(n) }
                        t.reverse();
                        return function n() {
                            while (t.length) {
                                var r = t.pop();
                                if (r in e) { n.value = r;
                                    n.done = false;
                                    return n } }
                            n.done = true;
                            return n } };

                    function N(e) {
                        if (e) {
                            var t = e[a];
                            if (t) {
                                return t.call(e) }
                            if (typeof e.next === "function") {
                                return e }
                            if (!isNaN(e.length)) {
                                var n = -1,
                                    i = function t() {
                                        while (++n < e.length) {
                                            if (r.call(e, n)) { t.value = e[n];
                                                t.done = false;
                                                return t } }
                                        t.value = o;
                                        t.done = true;
                                        return t };
                                return i.next = i } }
                        return { next: O } }
                    l.values = N;

                    function O() {
                        return { value: o, done: true } }
                    _.prototype = { constructor: _, reset: function e(t) {
                            var n = this;
                            this.prev = 0;
                            this.next = 0;
                            this.sent = this._sent = o;
                            this.done = false;
                            this.delegate = null;
                            this.tryEntries.forEach(A);
                            if (!t) {
                                for (var i in this) {
                                    if (i.charAt(0) === "t" && r.call(n, i) && !isNaN(+i.slice(1))) { n[i] = o } } } }, stop: function e() { this.done = true;
                            var t = this.tryEntries[0];
                            var n = t.completion;
                            if (n.type === "throw") {
                                throw n.arg }
                            return this.rval }, dispatchException: function e(t) {
                            var n = this;
                            if (this.done) {
                                throw t }
                            var i = this;

                            function o(e, n) { u.type = "throw";
                                u.arg = t;
                                i.next = e;
                                return !!n }
                            for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                var a = n.tryEntries[s];
                                var u = a.completion;
                                if (a.tryLoc === "root") {
                                    return o("end") }
                                if (a.tryLoc <= n.prev) {
                                    var f = r.call(a, "catchLoc");
                                    var l = r.call(a, "finallyLoc");
                                    if (f && l) {
                                        if (n.prev < a.catchLoc) {
                                            return o(a.catchLoc, true) } else if (n.prev < a.finallyLoc) {
                                            return o(a.finallyLoc) } } else if (f) {
                                        if (n.prev < a.catchLoc) {
                                            return o(a.catchLoc, true) } } else if (l) {
                                        if (n.prev < a.finallyLoc) {
                                            return o(a.finallyLoc) } } else {
                                        throw new Error("try statement without catch or finally") } } } }, abrupt: function e(t, n) {
                            var i = this;
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var s = i.tryEntries[o];
                                if (s.tryLoc <= i.prev && r.call(s, "finallyLoc") && i.prev < s.finallyLoc) {
                                    var a = s;
                                    break } }
                            if (a && (t === "break" || t === "continue") && a.tryLoc <= n && n <= a.finallyLoc) { a = null }
                            var u = a ? a.completion : {};
                            u.type = t;
                            u.arg = n;
                            if (a) { this.next = a.finallyLoc } else { this.complete(u) }
                            return g }, complete: function e(t, n) {
                            if (t.type === "throw") {
                                throw t.arg }
                            if (t.type === "break" || t.type === "continue") { this.next = t.arg } else if (t.type === "return") { this.rval = t.arg;
                                this.next = "end" } else if (t.type === "normal" && n) { this.next = n } }, finish: function e(t) {
                            var n = this;
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = n.tryEntries[r];
                                if (i.finallyLoc === t) { n.complete(i.completion, i.afterLoc);
                                    A(i);
                                    return g } } }, catch: function e(t) {
                            var n = this;
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = n.tryEntries[r];
                                if (i.tryLoc === t) {
                                    var o = i.completion;
                                    if (o.type === "throw") {
                                        var s = o.arg;
                                        A(i) }
                                    return s } }
                            throw new Error("illegal catch attempt") }, delegateYield: function e(t, n, r) { this.delegate = { iterator: N(t), resultName: n, nextLoc: r };
                            return g } } }((typeof t === "undefined" ? "undefined" : n(t)) === "object" ? t : (typeof window === "undefined" ? "undefined" : n(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : n(self)) === "object" ? self : undefined);
                var h = function e(t) {
                    if (t === void 0) t = {};
                    var n = this;
                    this.config = { alias: "Lego", version: "1.0.0", $: null, isDebug: true, isAnimate: false, isPermit: false, isMultiWindow: false, isVDom: true, pageEl: "", defaultApp: "", rootUri: "", routerConfig: {}, screenWidth: window.innerWidth };
                    Object.assign(this.config, t);
                    this._debugger();
                    if (this.config.$) { window.$ = this.$ = this.config.$ } else { debug.error("请先设置参数$");
                        return }
                    this.$el = this.$;
                    this.prevApp = "";
                    this.currentApp = "index";
                    this.Event = s;
                    this.Router = a.Router;
                    this.View = c;
                    this.Data = d;
                    this.UI = {};
                    this.views = {};
                    this.datas = {};
                    this.permis = {};
                    this.timer = {};
                    this.routers = new Map;
                    this.Eventer = new s;
                    window[this.config.alias] = window.Lego = this;
                    this.startApp(this.currentApp);
                    return this };
                h.prototype.create = function e(t) {
                    var n = this;
                    if (t === void 0) t = {};
                    var r = this,
                        i = { id: "", el: this.config.pageEl, tagName: "div", insert: "html", permis: null, view: null, components: [], events: {}, listen: {}, scrollbar: null, data: null, dataSource: null, onBefore: function e() {}, onAfter: function e() {}, onAnimateBefore: function e() {}, onAnimateAfter: function e() {} };
                    Object.assign(i, t);
                    i.id = i.id || (this.config.alias + window.location.hash.replace(/\//g, "_") + "_" + i.el).replace(/#/g, "");
                    i.onBefore = i.onBefore.bind(this);
                    i.onAfter = i.onAfter.bind(this);
                    i.onAnimateBefore = i.onAnimateBefore.bind(this);
                    i.onAnimateAfter = i.onAnimateAfter.bind(this);
                    if (i.permis) {
                        var o = i.permis.module,
                            s = i.permis.operate,
                            a = i.permis.hide,
                            u = i.permis.userid || 0;
                        if (a) {
                            if (!this.permis.check(o, s, u)) {
                                return } } }
                    typeof i.onBefore === "function" && i.onBefore();
                    if (this.views[this.prevApp].has(i.el) && !this.config.isMultiWindow) { this.views[this.prevApp].get(i.el).unEvents();
                        this.views[this.prevApp].delete(i.el) }
                    if (this.views[this.currentApp].has(i.el) && !this.config.isMultiWindow) { this.views[this.currentApp].get(i.el).unEvents();
                        this.views[this.currentApp].delete(i.el) }
                    var f = new i.view(i);
                    this.views[this.currentApp].set(i.el, f);
                    if (!this.$.isEmptyObject(i.listen)) {
                        for (var l in i.listen) { n.Eventer.removeListener(l);
                            n.Eventer.on(l, i.listen[l]) } }
                    typeof i.onAfter === "function" && i.onAfter(f);
                    return f };
                h.init = function e(t) {
                    if (t === void 0) t = {};
                    new this(t) };
                h.registerUI = function e(t) {
                    if (t === void 0) t = {};
                    Object.assign(this.UI, t) };
                h.prototype.randomKey = function e(t) { t = t || 32;
                    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    var r = n.length;
                    var i = "";
                    for (var o = 0; o < t; o++) { i += n.charAt(Math.floor(Math.random() * r)) }
                    return i };
                h.prototype._debugger = function e() { window.debug = {};
                    if (!window.console) {
                        return function() {} }
                    if (this.config.isDebug) {
                        for (var t in console) {
                            if (typeof console[t] == "function") { debug[t] = console[t].bind(window.console) } } } else {
                        for (var n in console) {
                            if (typeof console[n] == "function") { debug[n] = function() {} } } } };
                h.prototype._initObj = function e(t) { this.views[t] = this.views[t] || new Map;
                    this.timer[t] = this.timer[t] || new Map };
                h.prototype._clearObj = function e(t) {
                    var n = this;
                    if (this.prevApp !== this.currentApp) { this.timer[t].forEach(function(e, r) { clearTimeout(e);
                            clearInterval(e);
                            n.timer[t].delete(r) }) } };
                h.prototype.startApp = function e(t, n) {
                    if (n === void 0) n = {};
                    var r = { onBefore: function e() {}, onAfter: function e() {} },
                        i = this,
                        o, s;
                    Object.assign(r, n);
                    var a = window.location.hash.replace(/#/, "");
                    var u = a.indexOf("/") == 0 ? a.replace(/\//, "") : "";
                    u = u !== "index" ? u : "";
                    t = t || u || this.config.defaultApp;
                    o = t.indexOf("/") > 0 ? t.split("/")[0] : t;
                    this.prevApp = this.currentApp;
                    this.currentApp = o;
                    this._initObj(o);
                    if (typeof r.onBefore == "function") { r.onBefore() }
                    this.$(this.config.pageEl).scrollTop(0);
                    this.$.ajax({ type: "GET", url: this.config.rootUri + o + "/app.js?" + this.config.version, dataType: "script", crossDomain: true, cache: true, success: function e(n) {
                            if (t && o !== "index") { i.routers.get(o).setRoute(t) }
                            i._clearObj(i.prevApp);
                            if (typeof r.onAfter == "function") { r.onAfter(n) } }, error: function e(t) { debug.error("Failed to load application module!") } }) };
                h.prototype.getUrlParam = function e(t) { window.pageParams = {};
                    if (window.pageParams[t]) {
                        return window.pageParams[t] }
                    var n = decodeURI(document.location.search);
                    if (n.indexOf("?") >= 0) {
                        var r = n.substr(1).split("&"),
                            i = [];
                        for (var o = 0; o < r.length; o++) { i = r[o].split("=");
                            window.pageParams[i[0]] = i[1] }
                        return window.pageParams[t] || "" } else {
                        return "" } };
                h.prototype.trigger = function e(t, n) { this.Eventer.emit(t, n) };
                h.prototype.getAppName = function e() {
                    var t = window.location.hash.replace(/#/, "");
                    t = t.indexOf("/") == 0 ? t.replace(/\//, "") : "";
                    return t.split("/")[0] || this.config.defaultApp };
                h.prototype.getView = function e(t, n) {
                    if (n === void 0) n = this.getAppName();
                    t = t instanceof this.$ ? t : this.$(t);
                    if (t.length && this.views[n].get(t)) {
                        return this.views[n].get(t) }
                    return null };
                h.prototype.setTimer = function e(t, n) {
                    if (t && n) {
                        var r = this.timer[this.getAppName()],
                            i = r.get(t);
                        if (i) { clearTimeout(i);
                            clearInterval(i);
                            r.clear() }
                        r.set(t, n) } };
                h.prototype.router = function e(t) {
                    var n = this.currentApp;
                    if (n == "index") {
                        return }
                    if (!this.routers.has(n)) {
                        var r = this.Router(t).init();
                        this.routers.set(n, r) }
                    return this.routers.get(n) };
                e.exports = h
            }).call(t, function() {
                return this }(), r(3))
        }, function(e, t) {
            var n = e.exports = {};
            var r;
            var i;

            function o() {
                throw new Error("setTimeout has not been defined") }

            function s() {
                throw new Error("clearTimeout has not been defined") }(function() {
                try {
                    if (typeof setTimeout === "function") { r = setTimeout } else { r = o } } catch (e) { r = o }
                try {
                    if (typeof clearTimeout === "function") { i = clearTimeout } else { i = s } } catch (e) { i = s } })();

            function a(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0) }
                if ((r === o || !r) && setTimeout) { r = setTimeout;
                    return setTimeout(e, 0) }
                try {
                    return r(e, 0) } catch (t) {
                    try {
                        return r.call(null, e, 0) } catch (t) {
                        return r.call(this, e, 0) } } }

            function u(e) {
                if (i === clearTimeout) {
                    return clearTimeout(e) }
                if ((i === s || !i) && clearTimeout) { i = clearTimeout;
                    return clearTimeout(e) }
                try {
                    return i(e) } catch (t) {
                    try {
                        return i.call(null, e) } catch (t) {
                        return i.call(this, e) } } }
            var f = [];
            var l = false;
            var c;
            var p = -1;

            function d() {
                if (!l || !c) {
                    return }
                l = false;
                if (c.length) { f = c.concat(f) } else { p = -1 }
                if (f.length) { h() } }

            function h() {
                if (l) {
                    return }
                var e = a(d);
                l = true;
                var t = f.length;
                while (t) { c = f;
                    f = [];
                    while (++p < t) {
                        if (c) { c[p].run() } }
                    p = -1;
                    t = f.length }
                c = null;
                l = false;
                u(e) }
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var n = 1; n < arguments.length; n++) { t[n - 1] = arguments[n] } }
                f.push(new v(e, t));
                if (f.length === 1 && !l) { a(h) } };

            function v(e, t) { this.fun = e;
                this.array = t }
            v.prototype.run = function() { this.fun.apply(null, this.array) };
            n.title = "browser";
            n.browser = true;
            n.env = {};
            n.argv = [];
            n.version = "";
            n.versions = {};

            function y() {}
            n.on = y;
            n.addListener = y;
            n.once = y;
            n.off = y;
            n.removeListener = y;
            n.removeAllListeners = y;
            n.emit = y;
            n.binding = function(e) {
                throw new Error("process.binding is not supported") };
            n.cwd = function() {
                return "/" };
            n.chdir = function(e) {
                throw new Error("process.chdir is not supported") };
            n.umask = function() {
                return 0 } }, function(e, t) {
            function r() { this._events = this._events || {};
                this._maxListeners = this._maxListeners || undefined }
            e.exports = r;
            r.EventEmitter = r;
            r.prototype._events = undefined;
            r.prototype._maxListeners = undefined;
            r.defaultMaxListeners = 10;
            r.prototype.setMaxListeners = function(e) {
                if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                this._maxListeners = e;
                return this };
            r.prototype.emit = function(e) {
                var t, n, r, o, u, f;
                if (!this._events) this._events = {};
                if (e === "error") {
                    if (!this._events.error || s(this._events.error) && !this._events.error.length) { t = arguments[1];
                        if (t instanceof Error) {
                            throw t } else {
                            var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                            l.context = t;
                            throw l } } }
                n = this._events[e];
                if (a(n)) return false;
                if (i(n)) {
                    switch (arguments.length) {
                        case 1:
                            n.call(this);
                            break;
                        case 2:
                            n.call(this, arguments[1]);
                            break;
                        case 3:
                            n.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            o = Array.prototype.slice.call(arguments, 1);
                            n.apply(this, o) } } else if (s(n)) { o = Array.prototype.slice.call(arguments, 1);
                    f = n.slice();
                    r = f.length;
                    for (u = 0; u < r; u++) { f[u].apply(this, o) } }
                return true };
            r.prototype.addListener = function(e, t) {
                var n;
                if (!i(t)) throw TypeError("listener must be a function");
                if (!this._events) this._events = {};
                if (this._events.newListener) this.emit("newListener", e, i(t.listener) ? t.listener : t);
                if (!this._events[e]) this._events[e] = t;
                else if (s(this._events[e])) this._events[e].push(t);
                else this._events[e] = [this._events[e], t];
                if (s(this._events[e]) && !this._events[e].warned) {
                    if (!a(this._maxListeners)) { n = this._maxListeners } else { n = r.defaultMaxListeners }
                    if (n && n > 0 && this._events[e].length > n) { this._events[e].warned = true;
                        console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this._events[e].length);
                        if (typeof console.trace === "function") { console.trace() } } }
                return this };
            r.prototype.on = r.prototype.addListener;
            r.prototype.once = function(e, t) {
                if (!i(t)) throw TypeError("listener must be a function");
                var n = false;

                function r() { this.removeListener(e, r);
                    if (!n) { n = true;
                        t.apply(this, arguments) } }
                r.listener = t;
                this.on(e, r);
                return this };
            r.prototype.removeListener = function(e, t) {
                var n, r, o, a;
                if (!i(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                n = this._events[e];
                o = n.length;
                r = -1;
                if (n === t || i(n.listener) && n.listener === t) { delete this._events[e];
                    if (this._events.removeListener) this.emit("removeListener", e, t) } else if (s(n)) {
                    for (a = o; a-- > 0;) {
                        if (n[a] === t || n[a].listener && n[a].listener === t) { r = a;
                            break } }
                    if (r < 0) return this;
                    if (n.length === 1) { n.length = 0;
                        delete this._events[e] } else { n.splice(r, 1) }
                    if (this._events.removeListener) this.emit("removeListener", e, t) }
                return this };
            r.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) {
                    if (arguments.length === 0) this._events = {};
                    else if (this._events[e]) delete this._events[e];
                    return this }
                if (arguments.length === 0) {
                    for (t in this._events) {
                        if (t === "removeListener") continue;
                        this.removeAllListeners(t) }
                    this.removeAllListeners("removeListener");
                    this._events = {};
                    return this }
                n = this._events[e];
                if (i(n)) { this.removeListener(e, n) } else if (n) {
                    while (n.length) { this.removeListener(e, n[n.length - 1]) } }
                delete this._events[e];
                return this };
            r.prototype.listeners = function(e) {
                var t;
                if (!this._events || !this._events[e]) t = [];
                else if (i(this._events[e])) t = [this._events[e]];
                else t = this._events[e].slice();
                return t };
            r.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (i(t)) return 1;
                    else if (t) return t.length }
                return 0 };
            r.listenerCount = function(e, t) {
                return e.listenerCount(t) };

            function i(e) {
                return typeof e === "function" }

            function o(e) {
                return typeof e === "number" }

            function s(e) {
                return (typeof e === "undefined" ? "undefined" : n(e)) === "object" && e !== null }

            function a(e) {
                return e === void 0 } }, function(e, t, r) {
            (function(e) {
                var t = document.location;

                function r() {
                    return t.hash === "" || t.hash === "#" }
                var i = { mode: "modern", hash: t.hash, history: false, check: function e() {
                        var n = t.hash;
                        if (n != this.hash) { this.hash = n;
                            this.onHashChanged() } }, fire: function e() {
                        if (this.mode === "modern") { this.history === true ? window.onpopstate() : window.onhashchange() } else { this.onHashChanged() } }, init: function e(t, n) {
                        var r = this;
                        this.history = n;
                        if (!o.listeners) { o.listeners = [] }

                        function i(e) {
                            for (var t = 0, n = o.listeners.length; t < n; t++) { o.listeners[t](e) } }
                        if ("onhashchange" in window && (document.documentMode === undefined || document.documentMode > 7)) {
                            if (this.history === true) { setTimeout(function() { window.onpopstate = i }, 500) } else { window.onhashchange = i }
                            this.mode = "modern" } else {
                            var s = document.createElement("iframe");
                            s.id = "state-frame";
                            s.style.display = "none";
                            document.body.appendChild(s);
                            this.writeFrame("");
                            if ("onpropertychange" in document && "attachEvent" in document) { document.attachEvent("onpropertychange", function() {
                                    if (event.propertyName === "location") { r.check() } }) }
                            window.setInterval(function() { r.check() }, 50);
                            this.onHashChanged = i;
                            this.mode = "legacy" }
                        o.listeners.push(t);
                        return this.mode }, destroy: function e(t) {
                        if (!o || !o.listeners) {
                            return }
                        var n = o.listeners;
                        for (var r = n.length - 1; r >= 0; r--) {
                            if (n[r] === t) { n.splice(r, 1) } } }, setHash: function e(n) {
                        if (this.mode === "legacy") { this.writeFrame(n) }
                        if (this.history === true) { window.history.pushState({}, document.title, n);
                            this.fire() } else { t.hash = n[0] === "/" ? n : "/" + n }
                        return this }, writeFrame: function e(t) {
                        var n = document.getElementById("state-frame");
                        var r = n.contentDocument || n.contentWindow.document;
                        r.open();
                        r.write("<script>_hash = '" + t + "'; onload = parent.listener.syncHash;<script>");
                        r.close() }, syncHash: function e() {
                        var n = this._hash;
                        if (n != t.hash) { t.hash = n }
                        return this }, onHashChanged: function e() {} };
                var o = e.Router = function(e) {
                    if (!(this instanceof o)) return new o(e);
                    this.params = {};
                    this.routes = {};
                    this.methods = ["on", "once", "after", "before"];
                    this.scope = [];
                    this._methods = {};
                    this._insert = this.insert;
                    this.insert = this.insertEx;
                    this.historySupport = (window.history != null ? window.history.pushState : null) != null;
                    this.configure();
                    this.mount(e || {}) };
                o.prototype.init = function(e) {
                    var n = this,
                        o;
                    this.handler = function(e) {
                        var t = e && e.newURL || window.location.hash;
                        var r = n.history === true ? n.getPath() : t.replace(/.*#/, "");
                        n.dispatch("on", r.charAt(0) === "/" ? r : "/" + r) };
                    i.init(this.handler, this.history);
                    if (this.history === false) {
                        if (r() && e) { t.hash = e } else if (!r()) { n.dispatch("on", "/" + t.hash.replace(/^(#\/|#|\/)/, "")) } } else {
                        if (this.convert_hash_in_init) { o = r() && e ? e : !r() ? t.hash.replace(/^#/, "") : null;
                            if (o) { window.history.replaceState({}, document.title, o) } } else { o = this.getPath() }
                        if (o || this.run_in_init === true) { this.handler() } }
                    return this };
                o.prototype.explode = function() {
                    var e = this.history === true ? this.getPath() : t.hash;
                    if (e.charAt(1) === "/") { e = e.slice(1) }
                    return e.slice(1, e.length).split("/") };
                o.prototype.setRoute = function(e, t, n) {
                    var r = this.explode();
                    if (typeof e === "number" && typeof t === "string") { r[e] = t } else if (typeof n === "string") { r.splice(e, t, s) } else { r = [e] }
                    i.setHash(r.join("/"));
                    return r };
                o.prototype.insertEx = function(e, t, n, r) {
                    if (e === "once") { e = "on";
                        n = function(e) {
                            var t = false;
                            return function() {
                                if (t) return;
                                t = true;
                                return e.apply(this, arguments) } }(n) }
                    return this._insert(e, t, n, r) };
                o.prototype.getRoute = function(e) {
                    var t = e;
                    if (typeof e === "number") { t = this.explode()[e] } else if (typeof e === "string") {
                        var n = this.explode();
                        t = n.indexOf(e) } else { t = this.explode() }
                    return t };
                o.prototype.destroy = function() { i.destroy(this.handler);
                    return this };
                o.prototype.getPath = function() {
                    var e = window.location.pathname;
                    if (e.substr(0, 1) !== "/") { e = "/" + e }
                    return e };

                function a(e, t) {
                    for (var n = 0; n < e.length; n += 1) {
                        if (t(e[n], n, e) === false) {
                            return } } }

                function u(e) {
                    var t = [];
                    for (var n = 0, r = e.length; n < r; n++) { t = t.concat(e[n]) }
                    return t }

                function f(e, t, n) {
                    if (!e.length) {
                        return n() }
                    var r = 0;
                    (function i() { t(e[r], function(t) {
                            if (t || t === false) { n(t);
                                n = function e() {} } else { r += 1;
                                if (r === e.length) { n() } else { i() } } }) })() }

                function l(e, t, n) { n = e;
                    for (var r in t) {
                        if (t.hasOwnProperty(r)) { n = t[r](e);
                            if (n !== e) {
                                break } } }
                    return n === e ? "([._a-zA-Z0-9-%()]+)" : n }

                function c(e, t) {
                    var n, r = 0,
                        i = "";
                    while (n = e.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) { r = n.index + n[0].length;
                        n[0] = n[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
                        i += e.substr(0, n.index) + n[0] }
                    e = i += e.substr(r);
                    var o = e.match(/:([^\/]+)/gi),
                        s, a;
                    if (o) { a = o.length;
                        for (var u = 0; u < a; u++) { s = o[u];
                            if (s.slice(0, 2) === "::") { e = s.slice(1) } else { e = e.replace(s, l(s, t)) } } }
                    return e }

                function p(e, t, n, r) {
                    var i = 0,
                        o = 0,
                        s = 0,
                        n = (n || "(").toString(),
                        r = (r || ")").toString(),
                        a;
                    for (a = 0; a < e.length; a++) {
                        var u = e[a];
                        if (u.indexOf(n, i) > u.indexOf(r, i) || ~u.indexOf(n, i) && !~u.indexOf(r, i) || !~u.indexOf(n, i) && ~u.indexOf(r, i)) { o = u.indexOf(n, i);
                            s = u.indexOf(r, i);
                            if (~o && !~s || !~o && ~s) {
                                var f = e.slice(0, (a || 1) + 1).join(t);
                                e = [f].concat(e.slice((a || 1) + 1)) }
                            i = (s > o ? s : o) + 1;
                            a = 0 } else { i = 0 } }
                    return e }
                var d = /\?.*/;
                o.prototype.configure = function(e) { e = e || {};
                    for (var t = 0; t < this.methods.length; t++) { this._methods[this.methods[t]] = true }
                    this.recurse = e.recurse || this.recurse || false;
                    this.async = e.async || false;
                    this.delimiter = e.delimiter || "/";
                    this.strict = typeof e.strict === "undefined" ? true : e.strict;
                    this.notfound = e.notfound;
                    this.resource = e.resource;
                    this.history = e.html5history && this.historySupport || false;
                    this.run_in_init = this.history === true && e.run_handler_in_init !== false;
                    this.convert_hash_in_init = this.history === true && e.convert_hash_in_init !== false;
                    this.every = { after: e.after || null, before: e.before || null, on: e.on || null };
                    return this };
                o.prototype.param = function(e, t) {
                    if (e[0] !== ":") { e = ":" + e }
                    var n = new RegExp(e, "g");
                    this.params[e] = function(e) {
                        return e.replace(n, t.source || t) };
                    return this };
                o.prototype.on = o.prototype.route = function(e, t, n) {
                    var r = this;
                    if (!n && typeof t == "function") { n = t;
                        t = e;
                        e = "on" }
                    if (Array.isArray(t)) {
                        return t.forEach(function(t) { r.on(e, t, n) }) }
                    if (t.source) { t = t.source.replace(/\\\//gi, "/") }
                    if (Array.isArray(e)) {
                        return e.forEach(function(e) { r.on(e.toLowerCase(), t, n) }) }
                    t = t.split(new RegExp(this.delimiter));
                    t = p(t, this.delimiter);
                    this.insert(e, this.scope.concat(t), n) };
                o.prototype.path = function(e, t) {
                    var n = this,
                        r = this.scope.length;
                    if (e.source) { e = e.source.replace(/\\\//gi, "/") }
                    e = e.split(new RegExp(this.delimiter));
                    e = p(e, this.delimiter);
                    this.scope = this.scope.concat(e);
                    t.call(this, this);
                    this.scope.splice(r, e.length) };
                o.prototype.dispatch = function(e, t, n) {
                    var r = this,
                        i = this.traverse(e, t.replace(d, ""), this.routes, ""),
                        o = this._invoked,
                        s;
                    this._invoked = true;
                    if (!i || i.length === 0) { this.last = [];
                        if (typeof this.notfound === "function") { this.invoke([this.notfound], { method: e, path: t }, n) }
                        return false }
                    if (this.recurse === "forward") { i = i.reverse() }

                    function a() { r.last = i.after;
                        r.invoke(r.runlist(i), r, n) }
                    s = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
                    if (s && s.length > 0 && o) {
                        if (this.async) { this.invoke(s, this, a) } else { this.invoke(s, this);
                            a() }
                        return true }
                    a();
                    return true };
                o.prototype.invoke = function(e, t, n) {
                    var r = this;
                    var i;
                    if (this.async) { i = function n(r, o) {
                            if (Array.isArray(r)) {
                                return f(r, i, o) } else if (typeof r == "function") { r.apply(t, (e.captures || []).concat(o)) } };
                        f(e, i, function() {
                            if (n) { n.apply(t, arguments) } }) } else { i = function n(o) {
                            if (Array.isArray(o)) {
                                return a(o, i) } else if (typeof o === "function") {
                                return o.apply(t, e.captures || []) } else if (typeof o === "string" && r.resource) { r.resource[o].apply(t, e.captures || []) } };
                        a(e, i) } };
                o.prototype.traverse = function(e, t, r, i, o) {
                    var s = [],
                        a, u, f, l, c;

                    function p(e) {
                        if (!o) {
                            return e }

                        function t(e) {
                            var n = [];
                            for (var r = 0; r < e.length; r++) { n[r] = Array.isArray(e[r]) ? t(e[r]) : e[r] }
                            return n }

                        function n(e) {
                            for (var t = e.length - 1; t >= 0; t--) {
                                if (Array.isArray(e[t])) { n(e[t]);
                                    if (e[t].length === 0) { e.splice(t, 1) } } else {
                                    if (!o(e[t])) { e.splice(t, 1) } } } }
                        var r = t(e);
                        r.matched = e.matched;
                        r.captures = e.captures;
                        r.after = e.after.filter(o);
                        n(r);
                        return r }
                    if (t === this.delimiter && r[e]) { l = [
                            [r.before, r[e]].filter(Boolean)
                        ];
                        l.after = [r.after].filter(Boolean);
                        l.matched = true;
                        l.captures = [];
                        return p(l) }
                    for (var d in r) {
                        if (r.hasOwnProperty(d) && (!this._methods[d] || this._methods[d] && n(r[d]) === "object" && !Array.isArray(r[d]))) { a = u = i + this.delimiter + d;
                            if (!this.strict) { u += "[" + this.delimiter + "]?" }
                            f = t.match(new RegExp("^" + u));
                            if (!f) {
                                continue }
                            if (f[0] && f[0] == t && r[d][e]) { l = [
                                    [r[d].before, r[d][e]].filter(Boolean)
                                ];
                                l.after = [r[d].after].filter(Boolean);
                                l.matched = true;
                                l.captures = f.slice(1);
                                if (this.recurse && r === this.routes) { l.push([r.before, r.on].filter(Boolean));
                                    l.after = l.after.concat([r.after].filter(Boolean)) }
                                return p(l) }
                            l = this.traverse(e, t, r[d], a);
                            if (l.matched) {
                                if (l.length > 0) { s = s.concat(l) }
                                if (this.recurse) { s.push([r[d].before, r[d].on].filter(Boolean));
                                    l.after = l.after.concat([r[d].after].filter(Boolean));
                                    if (r === this.routes) { s.push([r["before"], r["on"]].filter(Boolean));
                                        l.after = l.after.concat([r["after"]].filter(Boolean)) } }
                                s.matched = true;
                                s.captures = l.captures;
                                s.after = l.after;
                                return p(s) } } }
                    return false };
                o.prototype.insert = function(e, t, r, i) {
                    var o, s, a, u, f;
                    t = t.filter(function(e) {
                        return e && e.length > 0 });
                    i = i || this.routes;
                    f = t.shift();
                    if (/\:|\*/.test(f) && !/\\d|\\w/.test(f)) { f = c(f, this.params) }
                    if (t.length > 0) { i[f] = i[f] || {};
                        return this.insert(e, t, r, i[f]) }
                    if (!f && !t.length && i === this.routes) { o = n(i[e]);
                        switch (o) {
                            case "function":
                                i[e] = [i[e], r];
                                return;
                            case "object":
                                i[e].push(r);
                                return;
                            case "undefined":
                                i[e] = r;
                                return }
                        return }
                    s = n(i[f]);
                    a = Array.isArray(i[f]);
                    if (i[f] && !a && s == "object") { o = n(i[f][e]);
                        switch (o) {
                            case "function":
                                i[f][e] = [i[f][e], r];
                                return;
                            case "object":
                                i[f][e].push(r);
                                return;
                            case "undefined":
                                i[f][e] = r;
                                return } } else if (s == "undefined") { u = {};
                        u[e] = r;
                        i[f] = u;
                        return }
                    throw new Error("Invalid route context: " + s) };
                o.prototype.extend = function(e) {
                    var t = this,
                        n = e.length,
                        r;

                    function i(e) { t._methods[e] = true;
                        t[e] = function() {
                            var n = arguments.length === 1 ? [e, ""] : [e];
                            t.on.apply(t, n.concat(Array.prototype.slice.call(arguments))) } }
                    for (r = 0; r < n; r++) { i(e[r]) } };
                o.prototype.runlist = function(e) {
                    var t = this.every && this.every.before ? [this.every.before].concat(u(e)) : u(e);
                    if (this.every && this.every.on) { t.push(this.every.on) }
                    t.captures = e.captures;
                    t.source = e.source;
                    return t };
                o.prototype.mount = function(e, t) {
                    if (!e || (typeof e === "undefined" ? "undefined" : n(e)) !== "object" || Array.isArray(e)) {
                        return }
                    var r = this;
                    t = t || [];
                    if (!Array.isArray(t)) { t = t.split(r.delimiter) }

                    function i(t, i) {
                        var o = t,
                            s = t.split(r.delimiter),
                            a = n(e[t]),
                            u = s[0] === "" || !r._methods[s[0]],
                            f = u ? "on" : o;
                        if (u) { o = o.slice((o.match(new RegExp("^" + r.delimiter)) || [""])[0].length);
                            s.shift() }
                        if (u && a === "object" && !Array.isArray(e[t])) { i = i.concat(s);
                            r.mount(e[t], i);
                            return }
                        if (u) { i = i.concat(o.split(r.delimiter));
                            i = p(i, r.delimiter) }
                        r.insert(f, i, e[t]) }
                    for (var o in e) {
                        if (e.hasOwnProperty(o)) { i(o, t.slice(0)) } } } })(true ? t : window) }, function(e, t) {
            Object.observe || function(e, t, r, i) {
                "use strict";
                var o, s, a = ["add", "update", "delete", "reconfigure", "setPrototype", "preventExtensions"];
                var u = t.isArray || function(e) {
                        return function(t) {
                            return e.call(t) === "[object Array]" } }(e.prototype.toString),
                    f = t.prototype.indexOf ? t.indexOf || function(e, n, r) {
                        return t.prototype.indexOf.call(e, n, r) } : function(e, t, n) {
                        for (var r = n || 0; r < e.length; r++) {
                            if (e[r] === t) return r }
                        return -1
                    },
                    l = r.Map === i || !Map.prototype.forEach ? function() {
                        var e = [],
                            t = [];
                        return { size: 0, has: function t(n) {
                                return f(e, n) > -1 }, get: function n(r) {
                                return t[f(e, r)] }, set: function n(r, i) {
                                var o = f(e, r);
                                if (o === -1) { e.push(r);
                                    t.push(i);
                                    this.size++ } else t[o] = i }, delete: function n(r) {
                                var i = f(e, r);
                                if (i > -1) { e.splice(i, 1);
                                    t.splice(i, 1);
                                    this.size-- } }, forEach: function n(r) {
                                for (var i = 0; i < e.length; i++) { r.call(arguments[1], t[i], e[i], this) } } } } : function() {
                        return new Map },
                    c = e.getOwnPropertyNames ? function() {
                        var t = e.getOwnPropertyNames;
                        try { arguments.callee } catch (r) {
                            var n = (t(f).join(" ") + " ").replace(/prototype |length |name /g, "").slice(0, -1).split(" ");
                            if (n.length) t = function t(r) {
                                var i = e.getOwnPropertyNames(r);
                                if (typeof r === "function")
                                    for (var o = 0, s; o < n.length;) {
                                        if ((s = f(i, n[o++])) > -1) i.splice(s, 1) }
                                return i } }
                        return t }() : function(t) {
                        var n = [],
                            r, i;
                        if ("hasOwnProperty" in t) {
                            for (r in t) {
                                if (t.hasOwnProperty(r)) n.push(r) } } else { i = e.hasOwnProperty;
                            for (r in t) {
                                if (i.call(t, r)) n.push(r) } }
                        if (u(t)) n.push("length");
                        return n },
                    p = e.getPrototypeOf,
                    d = e.defineProperties && e.getOwnPropertyDescriptor,
                    h = r.requestAnimationFrame || r.webkitRequestAnimationFrame || function() {
                        var e = +new Date,
                            t = e;
                        return function(n) {
                            return setTimeout(function() { n((t = +new Date) - e) }, 17) } }(),
                    v = function e(t, n, r) {
                        var i = o.get(t);
                        if (i) { g(i, t);
                            x(t, i, n, r) } else { i = y(t);
                            x(t, i, n, r);
                            if (o.size === 1) h(m) } },
                    y = function t(n, r) {
                        var i = c(n),
                            s = [],
                            a, u = 0,
                            r = { handlers: l(), frozen: e.isFrozen ? e.isFrozen(n) : false, extensible: e.isExtensible ? e.isExtensible(n) : true, proto: p && p(n), properties: i, values: s, notifier: w(n, r) };
                        if (d) { a = r.descriptors = [];
                            while (u < i.length) { a[u] = d(n, i[u]);
                                s[u] = n[i[u++]] } } else
                            while (u < i.length) { s[u] = n[i[u++]] }
                        o.set(n, r);
                        return r },
                    g = function() {
                        var t = d ? function(e, t, n, r, i) {
                            var o = t.properties[n],
                                s = e[o],
                                a = t.values[n],
                                u = t.descriptors[n];
                            if ("value" in i && (a === s ? a === 0 && 1 / a !== 1 / s : a === a || s === s)) { E(e, t, { name: o, type: "update", object: e, oldValue: a }, r);
                                t.values[n] = s }
                            if (u.configurable && (!i.configurable || i.writable !== u.writable || i.enumerable !== u.enumerable || i.get !== u.get || i.set !== u.set)) { E(e, t, { name: o, type: "reconfigure", object: e, oldValue: a }, r);
                                t.descriptors[n] = i } } : function(e, t, n, r) {
                            var i = t.properties[n],
                                o = e[i],
                                s = t.values[n];
                            if (s === o ? s === 0 && 1 / s !== 1 / o : s === s || o === o) { E(e, t, { name: i, type: "update", object: e, oldValue: s }, r);
                                t.values[n] = o } };
                        var n = d ? function(e, n, r, i, o) {
                            var s = n.length,
                                a;
                            while (r && s--) {
                                if (n[s] !== null) { a = d(e, n[s]);
                                    r--;
                                    if (a) t(e, i, s, o, a);
                                    else { E(e, i, { name: n[s], type: "delete", object: e, oldValue: i.values[s] }, o);
                                        i.properties.splice(s, 1);
                                        i.values.splice(s, 1);
                                        i.descriptors.splice(s, 1) } } } } : function(e, t, n, r, i) {
                            var o = t.length;
                            while (n && o--) {
                                if (t[o] !== null) { E(e, r, { name: t[o], type: "delete", object: e, oldValue: r.values[o] }, i);
                                    r.properties.splice(o, 1);
                                    r.values.splice(o, 1);
                                    n-- } } };
                        return function(r, i, o) {
                            if (!r.handlers.size || r.frozen) return;
                            var s, a, u, l = r.values,
                                h = r.descriptors,
                                v = 0,
                                y, g, m, b, w;
                            if (r.extensible) { s = r.properties.slice();
                                a = s.length;
                                u = c(i);
                                if (h) {
                                    while (v < u.length) { g = u[v++];
                                        y = f(s, g);
                                        w = d(i, g);
                                        if (y === -1) { E(i, r, { name: g, type: "add", object: i }, o);
                                            r.properties.push(g);
                                            l.push(i[g]);
                                            h.push(w) } else { s[y] = null;
                                            a--;
                                            t(i, r, y, o, w) } }
                                    n(i, s, a, r, o);
                                    if (!e.isExtensible(i)) { r.extensible = false;
                                        E(i, r, { type: "preventExtensions", object: i }, o);
                                        r.frozen = e.isFrozen(i) } } else {
                                    while (v < u.length) { g = u[v++];
                                        y = f(s, g);
                                        m = i[g];
                                        if (y === -1) { E(i, r, { name: g, type: "add", object: i }, o);
                                            r.properties.push(g);
                                            l.push(m) } else { s[y] = null;
                                            a--;
                                            t(i, r, y, o) } }
                                    n(i, s, a, r, o) } } else if (!r.frozen) {
                                for (; v < s.length; v++) { g = s[v];
                                    t(i, r, v, o, d(i, g)) }
                                if (e.isFrozen(i)) r.frozen = true }
                            if (p) { b = p(i);
                                if (b !== r.proto) { E(i, r, { type: "setPrototype", name: "__proto__", object: i, oldValue: r.proto });
                                    r.proto = b } } } }(),
                    m = function e() {
                        if (o.size) { o.forEach(g);
                            s.forEach(b);
                            h(e) } },
                    b = function e(t, n) {
                        var r = t.changeRecords;
                        if (r.length) { t.changeRecords = [];
                            n(r) } },
                    w = function e(t, r) {
                        if (arguments.length < 2) r = o.get(t);
                        return r && r.notifier || { notify: function e(n) { n.type;
                                var r = o.get(t);
                                if (r) {
                                    var i = { object: t },
                                        s;
                                    for (s in n) {
                                        if (s !== "object") i[s] = n[s] }
                                    E(t, r, i) } }, performChange: function e(r, s) {
                                if (typeof r !== "string") throw new TypeError("Invalid non-string changeType");
                                if (typeof s !== "function") throw new TypeError("Cannot perform non-function");
                                var a = o.get(t),
                                    u, f, l = arguments[2],
                                    c = l === i ? s() : s.call(l);
                                a && g(a, t, r);
                                if (a && c && (typeof c === "undefined" ? "undefined" : n(c)) === "object") { f = { object: t, type: r };
                                    for (u in c) {
                                        if (u !== "object" && u !== "type") f[u] = c[u] }
                                    E(t, a, f) } } } },
                    x = function e(t, n, r, i) {
                        var o = s.get(r);
                        if (!o) s.set(r, o = { observed: l(), changeRecords: [] });
                        o.observed.set(t, { acceptList: i.slice(), data: n });
                        n.handlers.set(r, o) },
                    E = function e(t, n, r, i) { n.handlers.forEach(function(e) {
                            var n = e.observed.get(t).acceptList;
                            if ((typeof i !== "string" || f(n, i) === -1) && f(n, r.type) > -1) e.changeRecords.push(r) }) };
                o = l();
                s = l();
                e.observe = function t(r, o, s) {
                    if (!r || (typeof r === "undefined" ? "undefined" : n(r)) !== "object" && typeof r !== "function") throw new TypeError("Object.observe cannot observe non-object");
                    if (typeof o !== "function") throw new TypeError("Object.observe cannot deliver to non-function");
                    if (e.isFrozen && e.isFrozen(o)) throw new TypeError("Object.observe cannot deliver to a frozen function object");
                    if (s === i) s = a;
                    else if (!s || (typeof s === "undefined" ? "undefined" : n(s)) !== "object") throw new TypeError("Third argument to Object.observe must be an array of strings.");
                    v(r, o, s);
                    return r };
                e.unobserve = function e(t, r) {
                    if (t === null || (typeof t === "undefined" ? "undefined" : n(t)) !== "object" && typeof t !== "function") throw new TypeError("Object.unobserve cannot unobserve non-object");
                    if (typeof r !== "function") throw new TypeError("Object.unobserve cannot deliver to non-function");
                    var i = s.get(r),
                        a;
                    if (i && (a = i.observed.get(t))) { i.observed.forEach(function(e, t) { g(e.data, t) });
                        h(function() { b(i, r) });
                        if (i.observed.size === 1 && i.observed.has(t)) s["delete"](r);
                        else i.observed["delete"](t);
                        if (a.data.handlers.size === 1) o["delete"](t);
                        else a.data.handlers["delete"](r) }
                    return t };
                e.getNotifier = function t(r) {
                    if (r === null || (typeof r === "undefined" ? "undefined" : n(r)) !== "object" && typeof r !== "function") throw new TypeError("Object.getNotifier cannot getNotifier non-object");
                    if (e.isFrozen && e.isFrozen(r)) return null;
                    return w(r) };
                e.deliverChangeRecords = function e(t) {
                    if (typeof t !== "function") throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");
                    var n = s.get(t);
                    if (n) { n.observed.forEach(function(e, t) { g(e.data, t) });
                        b(n, t) } }
            }(Object, Array, this)
        }, function(e, t, r) {
            var i = r(8);
            var o = 0,
                s = 1,
                a = 2,
                u = 3,
                f = 4;
            var l = 5,
                c = 6;
            var p = 7,
                d = 8;
            var h = 9,
                v = 10;
            var y = 11,
                g = 12;
            e.exports = function(e, t) { e = i(e);
                if (!t) t = {};
                var r = t.concat || function(e, t) {
                    return String(e) + String(t) };
                return function(t) {
                    var i = s,
                        w = "";
                    var x = arguments.length;
                    var T = [];
                    for (var k = 0; k < t.length; k++) {
                        if (k < x - 1) {
                            var j = arguments[k + 1];
                            var C = q(t[k]);
                            var A = i;
                            if (A === v) A = d;
                            if (A === h) A = d;
                            if (A === p) A = d;
                            if (A === f) A = l;
                            C.push([o, A, j]);
                            T.push.apply(T, C) } else T.push.apply(T, q(t[k])) }
                    var _ = [null, {},
                        []
                    ];
                    var N = [
                        [_, -1]
                    ];
                    for (var k = 0; k < T.length; k++) {
                        var O = N[N.length - 1][0];
                        var C = T[k],
                            L = C[0];
                        if (L === a && /^\//.test(C[1])) {
                            var S = N[N.length - 1][1];
                            if (N.length > 1) { N.pop();
                                N[N.length - 1][0][2][S] = e(O[0], O[1], O[2].length ? O[2] : undefined) } } else if (L === a) {
                            var D = [C[1], {},
                                []
                            ];
                            O[2].push(D);
                            N.push([D, O[2].length - 1]) } else if (L === l || L === o && C[1] === l) {
                            var P = "";
                            var R;
                            for (; k < T.length; k++) {
                                if (T[k][0] === l) { P = r(P, T[k][1]) } else if (T[k][0] === o && T[k][1] === l) {
                                    if (n(T[k][2]) === "object" && !P) {
                                        for (R in T[k][2]) {
                                            if (T[k][2].hasOwnProperty(R) && !O[1][R]) { O[1][R] = T[k][2][R] } } } else { P = r(P, T[k][2]) } } else break }
                            if (T[k][0] === y) k++;
                            var F = k;
                            for (; k < T.length; k++) {
                                if (T[k][0] === d || T[k][0] === l) {
                                    if (!O[1][P]) O[1][P] = b(T[k][1]);
                                    else O[1][P] = r(O[1][P], T[k][1]) } else if (T[k][0] === o && (T[k][1] === d || T[k][1] === l)) {
                                    if (!O[1][P]) O[1][P] = b(T[k][2]);
                                    else O[1][P] = r(O[1][P], T[k][2]) } else {
                                    if (P.length && !O[1][P] && k === F && (T[k][0] === u || T[k][0] === g)) { O[1][P] = P.toLowerCase() }
                                    break } } } else if (L === l) { O[1][C[1]] = true } else if (L === o && C[1] === l) { O[1][C[2]] = true } else if (L === u) {
                            if (E(O[0]) && N.length) {
                                var S = N[N.length - 1][1];
                                N.pop();
                                N[N.length - 1][0][2][S] = e(O[0], O[1], O[2].length ? O[2] : undefined) } } else if (L === o && C[1] === s) {
                            if (C[2] === undefined || C[2] === null) C[2] = "";
                            else if (!C[2]) C[2] = r("", C[2]);
                            if (Array.isArray(C[2][0])) { O[2].push.apply(O[2], C[2]) } else { O[2].push(C[2]) } } else if (L === s) { O[2].push(C[1]) } else if (L === y || L === g) {} else {
                            throw new Error("unhandled: " + L) } }
                    if (_[2].length > 1 && /^\s*$/.test(_[2][0])) { _[2].shift() }
                    if (_[2].length > 2 || _[2].length === 2 && /\S/.test(_[2][1])) {
                        throw new Error("multiple root elements must be wrapped in an enclosing tag") }
                    if (Array.isArray(_[2][0]) && typeof _[2][0][0] === "string" && Array.isArray(_[2][0][2])) { _[2][0] = e(_[2][0][0], _[2][0][1], _[2][0][2]) }
                    return _[2][0];

                    function q(e) {
                        var t = [];
                        if (i === p) i = f;
                        for (var n = 0; n < e.length; n++) {
                            var r = e.charAt(n);
                            if (i === s && r === "<") {
                                if (w.length) t.push([s, w]);
                                w = "";
                                i = a } else if (r === ">" && !m(i)) {
                                if (i === a) { t.push([a, w]) } else if (i === l) { t.push([l, w]) } else if (i === d && w.length) { t.push([d, w]) }
                                t.push([u]);
                                w = "";
                                i = s } else if (i === s) { w += r } else if (i === a && /\s/.test(r)) { t.push([a, w]);
                                w = "";
                                i = f } else if (i === a) { w += r } else if (i === f && /[\w-]/.test(r)) { i = l;
                                w = r } else if (i === f && /\s/.test(r)) {
                                if (w.length) t.push([l, w]);
                                t.push([g]) } else if (i === l && /\s/.test(r)) { t.push([l, w]);
                                w = "";
                                i = c } else if (i === l && r === "=") { t.push([l, w], [y]);
                                w = "";
                                i = p } else if (i === l) { w += r } else if ((i === c || i === f) && r === "=") { t.push([y]);
                                i = p } else if ((i === c || i === f) && !/\s/.test(r)) { t.push([g]);
                                if (/[\w-]/.test(r)) { w += r;
                                    i = l } else i = f } else if (i === p && r === '"') { i = v } else if (i === p && r === "'") { i = h } else if (i === v && r === '"') { t.push([d, w], [g]);
                                w = "";
                                i = f } else if (i === h && r === "'") { t.push([d, w], [g]);
                                w = "";
                                i = f } else if (i === p && !/\s/.test(r)) { i = d;
                                n-- } else if (i === d && /\s/.test(r)) { t.push([d, w], [g]);
                                w = "";
                                i = f } else if (i === d || i === h || i === v) { w += r } }
                        if (i === s && w.length) { t.push([s, w]);
                            w = "" } else if (i === d && w.length) { t.push([d, w]);
                            w = "" } else if (i === v && w.length) { t.push([d, w]);
                            w = "" } else if (i === h && w.length) { t.push([d, w]);
                            w = "" } else if (i === l) { t.push([l, w]);
                            w = "" }
                        return t } };

                function b(e) {
                    if (typeof e === "function") return e;
                    else if (typeof e === "string") return e;
                    else if (e && (typeof e === "undefined" ? "undefined" : n(e)) === "object") return e;
                    else return r("", e) } };

            function m(e) {
                return e === h || e === v }
            var b = Object.prototype.hasOwnProperty;

            function w(e, t) {
                return b.call(e, t) }
            var x = RegExp("^(" + ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr", "animate", "animateTransform", "circle", "cursor", "desc", "ellipse", "feBlend", "feColorMatrix", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "font-face-format", "font-face-name", "font-face-uri", "glyph", "glyphRef", "hkern", "image", "line", "missing-glyph", "mpath", "path", "polygon", "polyline", "rect", "set", "stop", "tref", "use", "view", "vkern"].join("|") + ")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");

            function E(e) {
                return x.test(e) } }, function(e, t) { e.exports = r;
            var n = { class: "className", for: "htmlFor", "http-equiv": "httpEquiv" };

            function r(e) {
                return function(t, r, i) {
                    for (var o in r) {
                        if (o in n) { r[n[o]] = r[o];
                            delete r[o] } }
                    return e(t, r, i) } } }, function(e, t, n) {
            var r = n(10);
            var i = n(23);
            var o = n(32);
            var s = n(43);
            var a = n(34);
            var u = n(35);
            e.exports = { diff: r, patch: i, h: o, create: s, VNode: a, VText: u } }, function(e, t, n) {
            var r = n(11);
            e.exports = r }, function(e, t, n) {
            var r = n(12);
            var i = n(13);
            var o = n(15);
            var s = n(16);
            var a = n(17);
            var u = n(18);
            var f = n(19);
            var l = n(20);
            e.exports = c;

            function c(e, t) {
                var n = { a: e };
                p(e, t, n, 0);
                return n }

            function p(e, t, n, r) {
                if (e === t) {
                    return }
                var f = n[r];
                var c = false;
                if (u(e) || u(t)) { y(e, t, n, r) } else if (t == null) {
                    if (!a(e)) { h(e, n, r);
                        f = n[r] }
                    f = T(f, new i(i.REMOVE, e, t)) } else if (o(t)) {
                    if (o(e)) {
                        if (e.tagName === t.tagName && e.namespace === t.namespace && e.key === t.key) {
                            var p = l(e.properties, t.properties);
                            if (p) { f = T(f, new i(i.PROPS, e, p)) }
                            f = d(e, t, n, f, r) } else { f = T(f, new i(i.VNODE, e, t));
                            c = true } } else { f = T(f, new i(i.VNODE, e, t));
                        c = true } } else if (s(t)) {
                    if (!s(e)) { f = T(f, new i(i.VTEXT, e, t));
                        c = true } else if (e.text !== t.text) { f = T(f, new i(i.VTEXT, e, t)) } } else if (a(t)) {
                    if (!a(e)) { c = true }
                    f = T(f, new i(i.WIDGET, e, t)) }
                if (f) { n[r] = f }
                if (c) { h(e, n, r) } }

            function d(e, t, n, r, s) {
                var a = e.children;
                var u = w(a, t.children);
                var f = u.children;
                var l = a.length;
                var c = f.length;
                var d = l > c ? l : c;
                for (var h = 0; h < d; h++) {
                    var v = a[h];
                    var y = f[h];
                    s += 1;
                    if (!v) {
                        if (y) { r = T(r, new i(i.INSERT, null, y)) } } else { p(v, y, n, s) }
                    if (o(v) && v.count) { s += v.count } }
                if (u.moves) { r = T(r, new i(i.ORDER, e, u.moves)) }
                return r }

            function h(e, t, n) { m(e, t, n);
                v(e, t, n) }

            function v(e, t, n) {
                if (a(e)) {
                    if (typeof e.destroy === "function") { t[n] = T(t[n], new i(i.REMOVE, e, null)) } } else if (o(e) && (e.hasWidgets || e.hasThunks)) {
                    var r = e.children;
                    var s = r.length;
                    for (var f = 0; f < s; f++) {
                        var l = r[f];
                        n += 1;
                        v(l, t, n);
                        if (o(l) && l.count) { n += l.count } } } else if (u(e)) { y(e, null, t, n) } }

            function y(e, t, n, r) {
                var o = f(e, t);
                var s = c(o.a, o.b);
                if (g(s)) { n[r] = new i(i.THUNK, null, s) } }

            function g(e) {
                for (var t in e) {
                    if (t !== "a") {
                        return true } }
                return false }

            function m(e, t, n) {
                if (o(e)) {
                    if (e.hooks) { t[n] = T(t[n], new i(i.PROPS, e, b(e.hooks))) }
                    if (e.descendantHooks || e.hasThunks) {
                        var r = e.children;
                        var s = r.length;
                        for (var a = 0; a < s; a++) {
                            var f = r[a];
                            n += 1;
                            m(f, t, n);
                            if (o(f) && f.count) { n += f.count } } } } else if (u(e)) { y(e, null, t, n) } }

            function b(e) {
                var t = {};
                for (var n in e) { t[n] = undefined }
                return t }

            function w(e, t) {
                var n = E(t);
                var r = n.keys;
                var i = n.free;
                if (i.length === t.length) {
                    return { children: t, moves: null } }
                var o = E(e);
                var s = o.keys;
                var a = o.free;
                if (a.length === e.length) {
                    return { children: t, moves: null } }
                var u = [];
                var f = 0;
                var l = i.length;
                var c = 0;
                for (var p = 0; p < e.length; p++) {
                    var d = e[p];
                    var h;
                    if (d.key) {
                        if (r.hasOwnProperty(d.key)) { h = r[d.key];
                            u.push(t[h]) } else { h = p - c++;
                            u.push(null) } } else {
                        if (f < l) { h = i[f++];
                            u.push(t[h]) } else { h = p - c++;
                            u.push(null) } } }
                var v = f >= i.length ? t.length : i[f];
                for (var y = 0; y < t.length; y++) {
                    var g = t[y];
                    if (g.key) {
                        if (!s.hasOwnProperty(g.key)) { u.push(g) } } else if (y >= v) { u.push(g) } }
                var m = u.slice();
                var b = 0;
                var w = [];
                var T = [];
                var k;
                for (var j = 0; j < t.length;) {
                    var C = t[j];
                    k = m[b];
                    while (k === null && m.length) { w.push(x(m, b, null));
                        k = m[b] }
                    if (!k || k.key !== C.key) {
                        if (C.key) {
                            if (k && k.key) {
                                if (r[k.key] !== j + 1) { w.push(x(m, b, k.key));
                                    k = m[b];
                                    if (!k || k.key !== C.key) { T.push({ key: C.key, to: j }) } else { b++ } } else { T.push({ key: C.key, to: j }) } } else { T.push({ key: C.key, to: j }) }
                            j++ } else if (k && k.key) { w.push(x(m, b, k.key)) } } else { b++;
                        j++ } }
                while (b < m.length) { k = m[b];
                    w.push(x(m, b, k && k.key)) }
                if (w.length === c && !T.length) {
                    return { children: u, moves: null } }
                return { children: u, moves: { removes: w, inserts: T } } }

            function x(e, t, n) { e.splice(t, 1);
                return { from: t, key: n } }

            function E(e) {
                var t = {};
                var n = [];
                var r = e.length;
                for (var i = 0; i < r; i++) {
                    var o = e[i];
                    if (o.key) { t[o.key] = i } else { n.push(i) } }
                return { keys: t, free: n } }

            function T(e, t) {
                if (e) {
                    if (r(e)) { e.push(t) } else { e = [e, t] }
                    return e } else {
                    return t } } }, function(e, t) {
            var n = Array.isArray;
            var r = Object.prototype.toString;
            e.exports = n || i;

            function i(e) {
                return r.call(e) === "[object Array]" } }, function(e, t, n) {
            var r = n(14);
            i.NONE = 0;
            i.VTEXT = 1;
            i.VNODE = 2;
            i.WIDGET = 3;
            i.PROPS = 4;
            i.ORDER = 5;
            i.INSERT = 6;
            i.REMOVE = 7;
            i.THUNK = 8;
            e.exports = i;

            function i(e, t, n) { this.type = Number(e);
                this.vNode = t;
                this.patch = n }
            i.prototype.version = r;
            i.prototype.type = "VirtualPatch" }, function(e, t) { e.exports = "2" }, function(e, t, n) {
            var r = n(14);
            e.exports = i;

            function i(e) {
                return e && e.type === "VirtualNode" && e.version === r } }, function(e, t, n) {
            var r = n(14);
            e.exports = i;

            function i(e) {
                return e && e.type === "VirtualText" && e.version === r } }, function(e, t) { e.exports = n;

            function n(e) {
                return e && e.type === "Widget" } }, function(e, t) { e.exports = n;

            function n(e) {
                return e && e.type === "Thunk" } }, function(e, t, n) {
            var r = n(15);
            var i = n(16);
            var o = n(17);
            var s = n(18);
            e.exports = a;

            function a(e, t) {
                var n = e;
                var r = t;
                if (s(t)) { r = u(t, e) }
                if (s(e)) { n = u(e, null) }
                return { a: n, b: r } }

            function u(e, t) {
                var n = e.vnode;
                if (!n) { n = e.vnode = e.render(t) }
                if (!(r(n) || i(n) || o(n))) {
                    throw new Error("thunk did not return a valid node") }
                return n } }, function(e, t, n) {
            var r = n(21);
            var i = n(22);
            e.exports = o;

            function o(e, t) {
                var n;
                for (var a in e) {
                    if (!(a in t)) { n = n || {};
                        n[a] = undefined }
                    var u = e[a];
                    var f = t[a];
                    if (u === f) {
                        continue } else if (r(u) && r(f)) {
                        if (s(f) !== s(u)) { n = n || {};
                            n[a] = f } else if (i(f)) { n = n || {};
                            n[a] = f } else {
                            var l = o(u, f);
                            if (l) { n = n || {};
                                n[a] = l } } } else { n = n || {};
                        n[a] = f } }
                for (var c in t) {
                    if (!(c in e)) { n = n || {};
                        n[c] = t[c] } }
                return n }

            function s(e) {
                if (Object.getPrototypeOf) {
                    return Object.getPrototypeOf(e) } else if (e.__proto__) {
                    return e.__proto__ } else if (e.constructor) {
                    return e.constructor.prototype } } }, function(e, t) { "use strict";
            e.exports = function e(t) {
                return (typeof t === "undefined" ? "undefined" : n(t)) === "object" && t !== null } }, function(e, t) { e.exports = n;

            function n(e) {
                return e && (typeof e.hook === "function" && !e.hasOwnProperty("hook") || typeof e.unhook === "function" && !e.hasOwnProperty("unhook")) } }, function(e, t, n) {
            var r = n(24);
            e.exports = r }, function(e, t, n) {
            var r = n(25);
            var i = n(12);
            var o = n(27);
            var s = n(29);
            var a = n(30);
            e.exports = u;

            function u(e, t, n) { n = n || {};
                n.patch = n.patch && n.patch !== u ? n.patch : f;
                n.render = n.render || o;
                return n.patch(e, t, n) }

            function f(e, t, n) {
                var i = c(t);
                if (i.length === 0) {
                    return e }
                var o = s(e, t.a, i);
                var a = e.ownerDocument;
                if (!n.document && a !== r) { n.document = a }
                for (var u = 0; u < i.length; u++) {
                    var f = i[u];
                    e = l(e, o[f], t[f], n) }
                return e }

            function l(e, t, n, r) {
                if (!t) {
                    return e }
                var o;
                if (i(n)) {
                    for (var s = 0; s < n.length; s++) { o = a(n[s], t, r);
                        if (t === e) { e = o } } } else { o = a(n, t, r);
                    if (t === e) { e = o } }
                return e }

            function c(e) {
                var t = [];
                for (var n in e) {
                    if (n !== "a") { t.push(Number(n)) } }
                return t } }, function(e, t, n) {
            (function(t) {
                var r = typeof t !== "undefined" ? t : typeof window !== "undefined" ? window : {};
                var i = n(26);
                if (typeof document !== "undefined") { e.exports = document } else {
                    var o = r["__GLOBAL_DOCUMENT_CACHE@4"];
                    if (!o) { o = r["__GLOBAL_DOCUMENT_CACHE@4"] = i }
                    e.exports = o } }).call(t, function() {
                return this }()) }, function(e, t) {}, function(e, t, n) {
            var r = n(25);
            var i = n(28);
            var o = n(15);
            var s = n(16);
            var a = n(17);
            var u = n(19);
            e.exports = f;

            function f(e, t) {
                var n = t ? t.document || r : r;
                var l = t ? t.warn : null;
                e = u(e).a;
                if (a(e)) {
                    return e.init() } else if (s(e)) {
                    return n.createTextNode(e.text) } else if (!o(e)) {
                    if (l) { l("Item is not a valid virtual dom node", e) }
                    return null }
                var c = e.namespace === null ? n.createElement(e.tagName) : n.createElementNS(e.namespace, e.tagName);
                var p = e.properties;
                i(c, p);
                var d = e.children;
                for (var h = 0; h < d.length; h++) {
                    var v = f(d[h], t);
                    if (v) { c.appendChild(v) } }
                return c } }, function(e, t, n) {
            var r = n(21);
            var i = n(22);
            e.exports = o;

            function o(e, t, n) {
                for (var o in t) {
                    var u = t[o];
                    if (u === undefined) { s(e, o, u, n) } else if (i(u)) { s(e, o, u, n);
                        if (u.hook) { u.hook(e, o, n ? n[o] : undefined) } } else {
                        if (r(u)) { a(e, t, n, o, u) } else { e[o] = u } } } }

            function s(e, t, n, r) {
                if (r) {
                    var o = r[t];
                    if (!i(o)) {
                        if (t === "attributes") {
                            for (var s in o) { e.removeAttribute(s) } } else if (t === "style") {
                            for (var a in o) { e.style[a] = "" } } else if (typeof o === "string") { e[t] = "" } else { e[t] = null } } else if (o.unhook) { o.unhook(e, t, n) } } }

            function a(e, t, n, i, o) {
                var s = n ? n[i] : undefined;
                if (i === "attributes") {
                    for (var a in o) {
                        var f = o[a];
                        if (f === undefined) { e.removeAttribute(a) } else { e.setAttribute(a, f) } }
                    return }
                if (s && r(s) && u(s) !== u(o)) { e[i] = o;
                    return }
                if (!r(e[i])) { e[i] = {} }
                var l = i === "style" ? "" : undefined;
                for (var c in o) {
                    var p = o[c];
                    e[i][c] = p === undefined ? l : p } }

            function u(e) {
                if (Object.getPrototypeOf) {
                    return Object.getPrototypeOf(e) } else if (e.__proto__) {
                    return e.__proto__ } else if (e.constructor) {
                    return e.constructor.prototype } } }, function(e, t) {
            var n = {};
            e.exports = r;

            function r(e, t, n, r) {
                if (!n || n.length === 0) {
                    return {} } else { n.sort(s);
                    return i(e, t, n, r, 0) } }

            function i(e, t, r, s, a) { s = s || {};
                if (e) {
                    if (o(r, a, a)) { s[a] = e }
                    var u = t.children;
                    if (u) {
                        var f = e.childNodes;
                        for (var l = 0; l < t.children.length; l++) { a += 1;
                            var c = u[l] || n;
                            var p = a + (c.count || 0);
                            if (o(r, a, p)) { i(f[l], c, r, s, a) }
                            a = p } } }
                return s }

            function o(e, t, n) {
                if (e.length === 0) {
                    return false }
                var r = 0;
                var i = e.length - 1;
                var o;
                var s;
                while (r <= i) { o = (i + r) / 2 >> 0;
                    s = e[o];
                    if (r === i) {
                        return s >= t && s <= n } else if (s < t) { r = o + 1 } else if (s > n) { i = o - 1 } else {
                        return true } }
                return false }

            function s(e, t) {
                return e > t ? 1 : -1 } }, function(e, t, n) {
            var r = n(28);
            var i = n(17);
            var o = n(13);
            var s = n(31);
            e.exports = a;

            function a(e, t, n) {
                var i = e.type;
                var s = e.vNode;
                var a = e.patch;
                switch (i) {
                    case o.REMOVE:
                        return u(t, s);
                    case o.INSERT:
                        return f(t, a, n);
                    case o.VTEXT:
                        return l(t, s, a, n);
                    case o.WIDGET:
                        return c(t, s, a, n);
                    case o.VNODE:
                        return p(t, s, a, n);
                    case o.ORDER:
                        h(t, a);
                        return t;
                    case o.PROPS:
                        r(t, a, s.properties);
                        return t;
                    case o.THUNK:
                        return v(t, n.patch(t, a, n));
                    default:
                        return t } }

            function u(e, t) {
                var n = e.parentNode;
                if (n) { n.removeChild(e) }
                d(e, t);
                return null }

            function f(e, t, n) {
                var r = n.render(t, n);
                if (e) { e.appendChild(r) }
                return e }

            function l(e, t, n, r) {
                var i;
                if (e.nodeType === 3) { e.replaceData(0, e.length, n.text);
                    i = e } else {
                    var o = e.parentNode;
                    i = r.render(n, r);
                    if (o && i !== e) { o.replaceChild(i, e) } }
                return i }

            function c(e, t, n, r) {
                var i = s(t, n);
                var o;
                if (i) { o = n.update(t, e) || e } else { o = r.render(n, r) }
                var a = e.parentNode;
                if (a && o !== e) { a.replaceChild(o, e) }
                if (!i) { d(e, t) }
                return o }

            function p(e, t, n, r) {
                var i = e.parentNode;
                var o = r.render(n, r);
                if (i && o !== e) { i.replaceChild(o, e) }
                return o }

            function d(e, t) {
                if (typeof t.destroy === "function" && i(t)) { t.destroy(e) } }

            function h(e, t) {
                var n = e.childNodes;
                var r = {};
                var i;
                var o;
                var s;
                for (var a = 0; a < t.removes.length; a++) { o = t.removes[a];
                    i = n[o.from];
                    if (o.key) { r[o.key] = i }
                    e.removeChild(i) }
                var u = n.length;
                for (var f = 0; f < t.inserts.length; f++) { s = t.inserts[f];
                    i = r[s.key];
                    e.insertBefore(i, s.to >= u++ ? null : n[s.to]) } }

            function v(e, t) {
                if (e && t && e !== t && e.parentNode) { e.parentNode.replaceChild(t, e) }
                return t } }, function(e, t, n) {
            var r = n(17);
            e.exports = i;

            function i(e, t) {
                if (r(e) && r(t)) {
                    if ("name" in e && "name" in t) {
                        return e.id === t.id } else {
                        return e.init === t.init } }
                return false } }, function(e, t, n) {
            var r = n(33);
            e.exports = r }, function(e, t, n) { "use strict";
            var r = n(12);
            var i = n(34);
            var o = n(35);
            var s = n(15);
            var a = n(16);
            var u = n(17);
            var f = n(22);
            var l = n(18);
            var c = n(36);
            var p = n(38);
            var d = n(39);
            e.exports = h;

            function h(e, t, n) {
                var r = [];
                var o, s, a, u;
                if (!n && m(t)) { n = t;
                    s = {} }
                s = s || t || {};
                o = c(e, s);
                if (s.hasOwnProperty("key")) { a = s.key;
                    s.key = undefined }
                if (s.hasOwnProperty("namespace")) { u = s.namespace;
                    s.namespace = undefined }
                if (o === "INPUT" && !u && s.hasOwnProperty("value") && s.value !== undefined && !f(s.value)) { s.value = p(s.value) }
                y(s);
                if (n !== undefined && n !== null) { v(n, r, o, s) }
                return new i(o, s, r, a, u) }

            function v(e, t, n, i) {
                if (typeof e === "string") { t.push(new o(e)) } else if (typeof e === "number") { t.push(new o(String(e))) } else if (g(e)) { t.push(e) } else if (r(e)) {
                    for (var s = 0; s < e.length; s++) { v(e[s], t, n, i) } } else if (e === null || e === undefined) {
                    return } else {
                    throw b({ foreignObject: e, parentVnode: { tagName: n, properties: i } }) } }

            function y(e) {
                for (var t in e) {
                    if (e.hasOwnProperty(t)) {
                        var n = e[t];
                        if (f(n)) {
                            continue }
                        if (t.substr(0, 3) === "ev-") { e[t] = d(n) } } } }

            function g(e) {
                return s(e) || a(e) || u(e) || l(e) }

            function m(e) {
                return typeof e === "string" || r(e) || g(e) }

            function b(e) {
                var t = new Error;
                t.type = "virtual-hyperscript.unexpected.virtual-element";
                t.message = "Unexpected virtual child passed to h().\n" + "Expected a VNode / Vthunk / VWidget / string but:\n" + "got:\n" + w(e.foreignObject) + ".\n" + "The parent vnode is:\n" + w(e.parentVnode); "\n" + "Suggested fix: change your `h(..., [ ... ])` callsite.";
                t.foreignObject = e.foreignObject;
                t.parentVnode = e.parentVnode;
                return t }

            function w(e) {
                try {
                    return JSON.stringify(e, null, "    ") } catch (t) {
                    return String(e) } } }, function(e, t, n) {
            var r = n(14);
            var i = n(15);
            var o = n(17);
            var s = n(18);
            var a = n(22);
            e.exports = l;
            var u = {};
            var f = [];

            function l(e, t, n, r, l) { this.tagName = e;
                this.properties = t || u;
                this.children = n || f;
                this.key = r != null ? String(r) : undefined;
                this.namespace = typeof l === "string" ? l : null;
                var c = n && n.length || 0;
                var p = 0;
                var d = false;
                var h = false;
                var v = false;
                var y;
                for (var g in t) {
                    if (t.hasOwnProperty(g)) {
                        var m = t[g];
                        if (a(m) && m.unhook) {
                            if (!y) { y = {} }
                            y[g] = m } } }
                for (var b = 0; b < c; b++) {
                    var w = n[b];
                    if (i(w)) { p += w.count || 0;
                        if (!d && w.hasWidgets) { d = true }
                        if (!h && w.hasThunks) { h = true }
                        if (!v && (w.hooks || w.descendantHooks)) { v = true } } else if (!d && o(w)) {
                        if (typeof w.destroy === "function") { d = true } } else if (!h && s(w)) { h = true } }
                this.count = c + p;
                this.hasWidgets = d;
                this.hasThunks = h;
                this.hooks = y;
                this.descendantHooks = v }
            l.prototype.version = r;
            l.prototype.type = "VirtualNode" }, function(e, t, n) {
            var r = n(14);
            e.exports = i;

            function i(e) { this.text = String(e) }
            i.prototype.version = r;
            i.prototype.type = "VirtualText" }, function(e, t, n) { "use strict";
            var r = n(37);
            var i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
            var o = /^\.|#/;
            e.exports = s;

            function s(e, t) {
                if (!e) {
                    return "DIV" }
                var n = !t.hasOwnProperty("id");
                var s = r(e, i);
                var a = null;
                if (o.test(s[1])) { a = "DIV" }
                var u, f, l, c;
                for (c = 0; c < s.length; c++) { f = s[c];
                    if (!f) {
                        continue }
                    l = f.charAt(0);
                    if (!a) { a = f } else if (l === ".") { u = u || [];
                        u.push(f.substring(1, f.length)) } else if (l === "#" && n) { t.id = f.substring(1, f.length) } }
                if (u) {
                    if (t.className) { u.push(t.className) }
                    t.className = u.join(" ") }
                return t.namespace ? a : a.toUpperCase() } }, function(e, t) { e.exports = function e(t) {
                var n = String.prototype.split,
                    r = /()??/.exec("")[1] === t,
                    i;
                i = function e(i, e, o) {
                    if (Object.prototype.toString.call(e) !== "[object RegExp]") {
                        return n.call(i, e, o) }
                    var s = [],
                        a = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                        u = 0,
                        e = new RegExp(e.source, a + "g"),
                        f, l, c, p;
                    i += "";
                    if (!r) { f = new RegExp("^" + e.source + "$(?!\\s)", a) }
                    o = o === t ? -1 >>> 0 : o >>> 0;
                    while (l = e.exec(i)) { c = l.index + l[0].length;
                        if (c > u) { s.push(i.slice(u, l.index));
                            if (!r && l.length > 1) { l[0].replace(f, function() {
                                    for (var e = 1; e < arguments.length - 2; e++) {
                                        if (arguments[e] === t) { l[e] = t } } }) }
                            if (l.length > 1 && l.index < i.length) { Array.prototype.push.apply(s, l.slice(1)) }
                            p = l[0].length;
                            u = c;
                            if (s.length >= o) {
                                break } }
                        if (e.lastIndex === l.index) { e.lastIndex++ } }
                    if (u === i.length) {
                        if (p || !e.test("")) { s.push("") } } else { s.push(i.slice(u)) }
                    return s.length > o ? s.slice(0, o) : s };
                return i }() }, function(e, t) { "use strict";
            e.exports = n;

            function n(e) {
                if (!(this instanceof n)) {
                    return new n(e) }
                this.value = e }
            n.prototype.hook = function(e, t) {
                if (e[t] !== this.value) { e[t] = this.value } } }, function(e, t, n) { "use strict";
            var r = n(40);
            e.exports = i;

            function i(e) {
                if (!(this instanceof i)) {
                    return new i(e) }
                this.value = e }
            i.prototype.hook = function(e, t) {
                var n = r(e);
                var i = t.substr(3);
                n[i] = this.value };
            i.prototype.unhook = function(e, t) {
                var n = r(e);
                var i = t.substr(3);
                n[i] = undefined } }, function(e, t, n) { "use strict";
            var r = n(41);
            var i = "7";
            r("ev-store", i);
            var o = "__EV_STORE_KEY@" + i;
            e.exports = s;

            function s(e) {
                var t = e[o];
                if (!t) { t = e[o] = {} }
                return t } }, function(e, t, n) { "use strict";
            var r = n(42);
            e.exports = i;

            function i(e, t, n) {
                var i = "__INDIVIDUAL_ONE_VERSION_" + e;
                var o = i + "_ENFORCE_SINGLETON";
                var s = r(o, t);
                if (s !== t) {
                    throw new Error("Can only have one copy of " + e + ".\n" + "You already have version " + s + " installed.\n" + "This means you cannot install version " + t) }
                return r(i, n) } }, function(e, t) {
            (function(t) { "use strict";
                var n = typeof window !== "undefined" ? window : typeof t !== "undefined" ? t : {};
                e.exports = r;

                function r(e, t) {
                    if (e in n) {
                        return n[e] }
                    n[e] = t;
                    return t } }).call(t, function() {
                return this }()) }, function(e, t, n) {
            var r = n(27);
            e.exports = r }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || false;
                        r.configurable = true;
                        if ("value" in r) r.writable = true;
                        Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    if (n) e(t.prototype, n);
                    if (r) e(t, r);
                    return t } }();
            var o = f(['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <div class="sidebar app-aside" id="sidebar"></div>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="glyphicon glyphicon-qrcode"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="hby-staff"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="glyphicon glyphicon-lock"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        '], ['\n        <div id="app" class="app-navbar-fixed app-sidebar-fixed">\n            <div class="sidebar app-aside" id="sidebar"></div>\n            <div class="app-content">\n                <header class="navbar navbar-default navbar-static-top">\n                    <div class="navbar-header">\n                        <a class="navbar-brand" href="#">\n                            <img src="', '" alt="" />\n                        </a>\n                    </div>\n                    <div class="navbar-collapse collapse">\n                        <ul class="nav navbar-right">\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="glyphicon glyphicon-qrcode"></i> 邀请码 </a>\n                                <ul class="dropdown-menu">\n                                    <li style="text-align:center;"><div id="inviteCodeImg" style="margin:10px;"></div></li>\n                                    <li style="display:none;"><a href="javascript:;" style="text-align:center;" id="copyLink">复制链接</a></li>\n                                </ul>\n                            </li>\n                            <li class="dropdown">\n                                <a href="#" class="dropdown-toggle"><i class="hby-staff"></i>\n                                <span class="caret"></span></a>\n                                <ul class="dropdown-menu">\n                                    <li><a href="javascript:;" id="modifyPassword"><i class="glyphicon glyphicon-lock"></i> 修改密码</a></li>\n                                    <li><a href="/j_acegi_logout"><i class="glyphicon glyphicon-off"></i> 退出登录</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <div class="search-form" style="display:none;">\n                            <a class="s-open" href="#">\n                                <i class="ti-search"></i>\n                            </a>\n                            <form class="navbar-form" role="search">\n                                <a class="s-remove" href="#" target=".navbar-form">\n                                    <i class="ti-close"></i>\n                                </a>\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="搜索">\n                                    <button class="btn search-button" type="submit">\n                                        <i class="ti-search"></i>\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </header>\n                <div class="main-content">\n                    <div class="wrap-content container-fluid" id="container">\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <div class="footer-inner">\n                    <div class="pull-left">\n                        &copy; <span class="current-year"></span><span class="text-bold text-uppercase">HBY</span>. <span>All rights reserved</span>\n                    </div>\n                    <div class="pull-right">\n                        <span class="go-top"><i class="ti-angle-up"></i></span>\n                    </div>\n                </div>\n            </footer>\n        </div>\n        ']);
            var s = r(45);
            var a = u(s);

            function u(e) {
                return e && e.__esModule ? e : { default: e } }

            function f(e, t) {
                return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function l(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function") } }

            function c(e, t) {
                if (!e) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }
                return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e }

            function p(e, t) {
                if (typeof t !== "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t))) }
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
                if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t }
            var d = function(e) { p(t, e);

                function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    l(this, t);
                    var n = { events: {}, data: { logoUrl: "asset/img/logo.png", menu: [] }, components: [{ el: "#sidebar", view: a.default }] };
                    n.components[0].data = n.data.menu;
                    Lego.$.extend(true, n, e);
                    return c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)) }
                i(t, [{ key: "render", value: function e() {
                        var t = hx(o, this.data.logoUrl);
                        return t } }, { key: "clickNav", value: function e(t) {
                        var n = HBY.$(t.currentTarget),
                            r = n.data("app");
                        HBY.startApp(r) } }]);
                return t }(Lego.View);
            t.default = d
        }, function(e, t) { "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || false;
                        r.configurable = true;
                        if ("value" in r) r.writable = true;
                        Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    if (n) e(t.prototype, n);
                    if (r) e(t, r);
                    return t } }();
            var i = o(['\n        <div class="sidebar-container perfect-scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'test\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-list-alt"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 注册管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="#customer/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-customer"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 客户管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="#order/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-order"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 订单管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-channel"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-finance"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-usd"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-product"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        '], ['\n        <div class="sidebar-container perfect-scrollbar ps-container ps-active-y">\n            <nav>\n                <ul class="main-navigation-menu">\n                    <li data-permis=\'{"module":"Home", "operate":"Query", "hide":1}\' id="nav_home">\n                        <a href="javascript:Lego.startApp(\'home\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-home"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 首页 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Register", "operate":"Query", "hide":1}\' id="nav_register">\n                        <a href="javascript:Lego.startApp(\'test\');">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-list-alt"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 注册管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Customer", "operate":"Query", "hide":1}\' id="nav_customer">\n                        <a href="#customer/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-customer"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 客户管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Order", "operate":"Query", "hide":1}\' id="nav_order">\n                        <a href="#order/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-order"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 订单管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Channel", "operate":"Query", "hide":1}\' id="nav_channel">\n                        <a href="#channel/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-channel"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 渠道管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Finance", "operate":"Query", "hide":1}\' id="nav_finance">\n                        <a href="#finance/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-finance"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 财务管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Consumption", "operate":"Query", "hide":1}\' id="nav_expenses">\n                        <a href="#expenses/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-usd"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 消费记录 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Product", "operate":"Query", "hide":1}\' id="nav_product">\n                        <a href="#product/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-product"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 产品管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Operation", "operate":"Query", "hide":1}\' id="nav_operation">\n                        <a href="#operation/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="glyphicon glyphicon-dashboard"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 运营管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <li data-permis=\'{"module":"Organization", "operate":"Query", "hide":1}\' id="nav_organization">\n                        <a href="#admin/">\n                            <div class="item-content">\n                                <div class="item-media">\n                                    <i class="hby-admin"></i>\n                                </div>\n                                <div class="item-inner">\n                                    <span class="title"> 后台管理 </span>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        ']);

            function o(e, t) {
                return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function s(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function") } }

            function a(e, t) {
                if (!e) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }
                return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e }

            function u(e, t) {
                if (typeof t !== "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t))) }
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
                if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t }
            var f = function(e) { u(t, e);

                function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    s(this, t);
                    var n = { events: {} };
                    Lego.$.extend(true, n, e);
                    return a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)) }
                r(t, [{ key: "render", value: function e() {
                        var t = hx(i);
                        return t } }]);
                return t }(Lego.View);
            t.default = f }, function(e, t, r) { "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || false;
                        r.configurable = true;
                        if ("value" in r) r.writable = true;
                        Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    if (n) e(t.prototype, n);
                    if (r) e(t, r);
                    return t } }();
            var o = a(["<div>\n          ", "\n        </div>"], ["<div>\n          ", "\n        </div>"]),
                s = a(['<a id="', '" href="#/home" style="display:block;">', "</a>\n"], ['<a id="', '" href="#/home" style="display:block;">', "</a>\\n"]);
            r(47);

            function a(e, t) {
                return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }

            function u(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function") } }

            function f(e, t) {
                if (!e) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }
                return t && ((typeof t === "undefined" ? "undefined" : n(t)) === "object" || typeof t === "function") ? t : e }

            function l(e, t) {
                if (typeof t !== "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : n(t))) }
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
                if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t }
            var c = function(e) { l(t, e);

                function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    u(this, t);
                    var n = { events: { "click #400": "theClick" } };
                    Lego.$.extend(true, n, e);
                    return f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)) }
                i(t, [{ key: "render", value: function e() {
                        var t = this.data.list || [];
                        var n = hx(o, t.map(function(e, t) {
                            return hx(s, e.first, e.first) }));
                        return n } }, { key: "theClick", value: function e(t) { t.stopPropagation();
                        Lego.trigger("data_update", { aa: 1 }) } }]);
                return t }(Lego.View);
            t.default = c }, function(e, t) {}])
    },
    348: function(e, t) {}
});
