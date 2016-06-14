window.Modernizr = function(e, t, n) {
        function N(e) {
            f.cssText = e
        }

        function C(e, t) {
            return N(h.join(e + ";") + (t || ""))
        }

        function k(e, t) {
            return typeof e === t
        }

        function L(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function A(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!L(i, "-") && f[i] !== n) return t == "pfx" ? i : !0
            }
            return !1
        }

        function O(e, t, r) {
            for (var i in e) {
                var s = t[e[i]];
                if (s !== n) return r === !1 ? e[i] : k(s, "function") ? s.bind(r || t) : s
            }
            return !1
        }

        function M(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + d.join(r + " ") + r).split(" ");
            return k(t, "string") || k(t, "undefined") ? A(i, t) : (i = (e + " " + v.join(r + " ") + r).split(" "), O(i, t, n))
        }
        var r = "2.6.2",
            i = {},
            s = !0,
            o = t.documentElement,
            u = "modernizr",
            a = t.createElement(u),
            f = a.style,
            l, c = {}.toString,
            h = " -webkit- -moz- -o- -ms- ".split(" "),
            p = "Webkit Moz O ms",
            d = p.split(" "),
            v = p.toLowerCase().split(" "),
            m = {},
            g = {},
            y = {},
            b = [],
            w = b.slice,
            E, S = function(e, n, r, i) {
                var s, a, f, l, c = t.createElement("div"),
                    h = t.body,
                    p = h || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) f = t.createElement("div"), f.id = i ? i[r] : u + (r + 1), c.appendChild(f);
                return s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""), c.id = u, (h ? c : p).innerHTML += s, p.appendChild(c), h || (p.style.background = "", p.style.overflow = "hidden", l = o.style.overflow, o.style.overflow = "hidden", o.appendChild(p)), a = n(c, e), h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), o.style.overflow = l), !!a
            },
            x = {}.hasOwnProperty,
            T;
        !k(x, "undefined") && !k(x.call, "undefined") ? T = function(e, t) {
            return x.call(e, t)
        } : T = function(e, t) {
            return t in e && k(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var n = this;
            if (typeof n != "function") throw new TypeError;
            var r = w.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var e = function() {};
                        e.prototype = n.prototype;
                        var s = new e,
                            o = n.apply(s, r.concat(w.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return n.apply(t, r.concat(w.call(arguments)))
                };
            return i
        }), m.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : S(["@media (", h.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = e.offsetTop === 9
            }), n
        }, m.csstransforms = function() {
            return !!M("transform")
        };
        for (var _ in m) T(m, _) && (E = _.toLowerCase(), i[E] = m[_](), b.push((i[E] ? "" : "no-") + E));
        return i.addTest = function(e, t) {
                if (typeof e == "object")
                    for (var r in e) T(e, r) && i.addTest(r, e[r]);
                else {
                    e = e.toLowerCase();
                    if (i[e] !== n) return i;
                    t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
                }
                return i
            }, N(""), a = l = null,
            function(e, t) {
                function l(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function c() {
                    var e = g.elements;
                    return typeof e == "string" ? e.split(" ") : e
                }

                function h(e) {
                    var t = a[e[o]];
                    return t || (t = {}, u++, e[o] = u, a[u] = t), t
                }

                function p(e, n, s) {
                    n || (n = t);
                    if (f) return n.createElement(e);
                    s || (s = h(n));
                    var o;
                    return s.cache[e] ? o = s.cache[e].cloneNode() : i.test(e) ? o = (s.cache[e] = s.createElem(e)).cloneNode() : o = s.createElem(e), o.canHaveChildren && !r.test(e) ? s.frag.appendChild(o) : o
                }

                function d(e, n) {
                    e || (e = t);
                    if (f) return e.createDocumentFragment();
                    n = n || h(e);
                    var r = n.frag.cloneNode(),
                        i = 0,
                        s = c(),
                        o = s.length;
                    for (; i < o; i++) r.createElement(s[i]);
                    return r
                }

                function v(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return g.shivMethods ? p(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function m(e) {
                    e || (e = t);
                    var n = h(e);
                    return g.shivCSS && !s && !n.hasCSS && (n.hasCSS = !!l(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), f || v(e, n), e
                }
                var n = e.html5 || {},
                    r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    s, o = "_html5shiv",
                    u = 0,
                    a = {},
                    f;
                (function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, f = e.childNodes.length == 1 || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                        }()
                    } catch (n) {
                        s = !0, f = !0
                    }
                })();
                var g = {
                    elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: n.shivCSS !== !1,
                    supportsUnknownElements: f,
                    shivMethods: n.shivMethods !== !1,
                    type: "default",
                    shivDocument: m,
                    createElement: p,
                    createDocumentFragment: d
                };
                e.html5 = g, m(t)
            }(this, t), i._version = r, i._prefixes = h, i._domPrefixes = v, i._cssomPrefixes = d, i.testProp = function(e) {
                return A([e])
            }, i.testAllProps = M, i.testStyles = S, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + b.join(" ") : ""), i
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == d.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function s() {}

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function u() {
            var e = v.shift();
            m = 1, e ? e.t ? h(function() {
                ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), u()) : m = 0
        }

        function a(e, n, r, i, s, a, f) {
            function l(t) {
                if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        b.removeChild(c)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var f = f || k.errorTimeout,
                c = t.createElement(e),
                d = 0,
                g = 0,
                w = {
                    t: r,
                    s: n,
                    e: s,
                    a: a,
                    x: f
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
                l.call(this, g)
            }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
        }

        function f(e, t, n, r, s) {
            return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
        }

        function l() {
            var e = k;
            return e.loader = {
                load: f,
                i: 0
            }, e
        }
        var c = t.documentElement,
            h = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            d = {}.toString,
            v = [],
            m = 0,
            g = "MozAppearance" in c.style,
            y = g && !!t.createRange().compareNode,
            b = y ? c : p.parentNode,
            c = e.opera && "[object Opera]" == d.call(e.opera),
            c = !!t.attachEvent && !c,
            w = g ? "object" : c ? "script" : "img",
            E = c ? "script" : w,
            S = Array.isArray || function(e) {
                return "[object Array]" == d.call(e)
            },
            x = [],
            T = {},
            N = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            C, k;
        k = function(e) {
            function t(e) {
                var e = e.split("!"),
                    t = x.length,
                    n = e.pop(),
                    r = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    i, s, o;
                for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                for (s = 0; s < t; s++) n = x[s](n);
                return n
            }

            function o(e, i, s, o, u) {
                var a = t(e),
                    f = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                    l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                })))
            }

            function u(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), o(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (p in h = function() {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : f[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), c()
                                }
                            }(l[p])), o(e[p], f, t, p, u))
                    } else !n && c()
                }
                var u = !!e.test,
                    a = e.load || e.both,
                    f = e.callback || s,
                    l = f,
                    c = e.complete || s,
                    h, p;
                n(u ? e.yep : e.nope, !!a), a && n(a)
            }
            var a, f, c = this.yepnope.loader;
            if (i(e)) o(e, 0, c, 0);
            else if (S(e))
                for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
            else Object(e) === e && u(e, c)
        }, k.addPrefix = function(e, t) {
            N[e] = t
        }, k.addFilter = function(e) {
            x.push(e)
        }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
            t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
            var l = t.createElement("script"),
                c, d, i = i || k.errorTimeout;
            l.src = e;
            for (d in r) l.setAttribute(d, r[d]);
            n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
                !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
            }, h(function() {
                c || (c = 1, n(1))
            }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
        }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
            var i = t.createElement("link"),
                f, n = a ? u : n || s;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (f in r) i.setAttribute(f, r[f]);
            o || (p.parentNode.insertBefore(i, p), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e, t) {
        function _(e) {
            var t = M[e] = {};
            return v.each(e.split(y), function(e, n) {
                t[n] = !0
            }), t
        }

        function H(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(P, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                    } catch (s) {}
                    v.data(e, n, r)
                } else r = t
            }
            return r
        }

        function B(e) {
            var t;
            for (t in e) {
                if (t === "data" && v.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1
            }
            return !0
        }

        function et() {
            return !1
        }

        function tt() {
            return !0
        }

        function ut(e) {
            return !e || !e.parentNode || e.parentNode.nodeType === 11
        }

        function at(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e
        }

        function ft(e, t, n) {
            t = t || 0;
            if (v.isFunction(t)) return v.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return v.grep(e, function(e, r) {
                return e === t === n
            });
            if (typeof t == "string") {
                var r = v.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (it.test(t)) return v.filter(t, r, !n);
                t = v.filter(t, r)
            }
            return v.grep(e, function(e, r) {
                return v.inArray(e, t) >= 0 === n
            })
        }

        function lt(e) {
            var t = ct.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n
        }

        function Lt(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function At(e, t) {
            if (t.nodeType !== 1 || !v.hasData(e)) return;
            var n, r, i, s = v._data(e),
                o = v._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
            }
            o.data && (o.data = v.extend({}, o.data))
        }

        function Ot(e, t) {
            var n;
            if (t.nodeType !== 1) return;
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
        }

        function Mt(e) {
            return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
        }

        function _t(e) {
            Et.test(e.type) && (e.defaultChecked = e.checked)
        }

        function Qt(e, t) {
            if (t in e) return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = Jt.length;
            while (i--) {
                t = Jt[i] + n;
                if (t in e) return t
            }
            return r
        }

        function Gt(e, t) {
            return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
        }

        function Yt(e, t) {
            var n, r, i = [],
                s = 0,
                o = e.length;
            for (; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
            }
            for (s = 0; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
            }
            return e
        }

        function Zt(e, t, n) {
            var r = Rt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function en(e, t, n, r) {
            var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                s = 0;
            for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
            return s
        }

        function tn(e, t, n) {
            var r = t === "width" ? e.offsetWidth : e.offsetHeight,
                i = !0,
                s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
            if (r <= 0 || r == null) {
                r = Dt(e, t);
                if (r < 0 || r == null) r = e.style[t];
                if (Ut.test(r)) return r;
                i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
        }

        function nn(e) {
            if (Wt[e]) return Wt[e];
            var t = v("<" + e + ">").appendTo(i.body),
                n = t.css("display");
            t.remove();
            if (n === "none" || n === "") {
                Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
                t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
            }
            return Wt[e] = n, n
        }

        function fn(e, t, n, r) {
            var i;
            if (v.isArray(t)) v.each(t, function(t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
            else if (!n && v.type(t) === "object")
                for (i in t) fn(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }

        function Cn(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i, s, o = t.toLowerCase().split(y),
                    u = 0,
                    a = o.length;
                if (v.isFunction(n))
                    for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
            }
        }

        function kn(e, n, r, i, s, o) {
            s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
            var u, a = e[s],
                f = 0,
                l = a ? a.length : 0,
                c = e === Sn;
            for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
            return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
        }

        function Ln(e, n) {
            var r, i, s = v.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            i && v.extend(!0, e, i)
        }

        function An(e, n, r) {
            var i, s, o, u, a = e.contents,
                f = e.dataTypes,
                l = e.responseFields;
            for (s in l) s in r && (n[l[s]] = r[s]);
            while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break
                    }
            if (f[0] in r) o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break
                    }
                    u || (u = s)
                }
                o = o || u
            }
            if (o) return o !== f[0] && f.unshift(o), r[o]
        }

        function On(e, t) {
            var n, r, i, s, o = e.dataTypes.slice(),
                u = o[0],
                a = {},
                f = 0;
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (o[1])
                for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
            for (; i = o[++f];)
                if (i !== "*") {
                    if (u !== "*" && u !== i) {
                        n = a[u + " " + i] || a["* " + i];
                        if (!n)
                            for (r in a) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = a[u + " " + s[0]] || a["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                        break
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    u = i
                }
            return {
                state: "success",
                data: t
            }
        }

        function Fn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function In() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function $n() {
            return setTimeout(function() {
                qn = t
            }, 0), qn = v.now()
        }

        function Jn(e, t) {
            v.each(t, function(t, n) {
                var r = (Vn[t] || []).concat(Vn["*"]),
                    i = 0,
                    s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n)) return
            })
        }

        function Kn(e, t, n) {
            var r, i = 0,
                s = 0,
                o = Xn.length,
                u = v.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    var t = qn || $n(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = 1 - (n / f.duration || 0),
                        i = 0,
                        s = f.tweens.length;
                    for (; i < s; i++) f.tweens[i].run(r);
                    return u.notifyWith(e, [f, r, n]), r < 1 && s ? n : (u.resolveWith(e, [f]), !1)
                },
                f = u.promise({
                    elem: e,
                    props: v.extend({}, t),
                    opts: v.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: qn || $n(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n, r) {
                        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                    }
                }),
                l = f.props;
            Qn(l, f.opts.specialEasing);
            for (; i < o; i++) {
                r = Xn[i].call(f, e, l, f.opts);
                if (r) return r
            }
            return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
                anim: f,
                queue: f.opts.queue,
                elem: e
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        function Qn(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
                if (o && "expand" in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i)
                } else t[r] = i
            }
        }

        function Gn(e, t, n) {
            var r, i, s, o, u, a, f, l, c = this,
                h = e.style,
                p = {},
                d = [],
                m = e.nodeType && Gt(e);
            n.queue || (f = v._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function() {
                f.unqueued || l()
            }), f.unqueued++, c.always(function() {
                c.always(function() {
                    f.unqueued--, v.queue(e, "fx").length || f.empty.fire()
                })
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)), n.overflow && (h.overflow = "hidden", v.support.shrinkWrapBlocks || c.done(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (r in t) {
                s = t[r];
                if (Un.exec(s)) {
                    delete t[r];
                    if (s === (m ? "hide" : "show")) continue;
                    d.push(r)
                }
            }
            o = d.length;
            if (o) {
                u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), m ? v(e).show() : c.done(function() {
                    v(e).hide()
                }), c.done(function() {
                    var t;
                    v.removeData(e, "fxshow", !0);
                    for (t in p) v.style(e, t, p[t])
                });
                for (r = 0; r < o; r++) i = d[r], a = c.createTween(i, m ? u[i] : 0), p[i] = u[i] || v.style(e, i), i in u || (u[i] = a.start, m && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0))
            }
        }

        function Yn(e, t, n, r, i) {
            return new Yn.prototype.init(e, t, n, r, i)
        }

        function Zn(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function tr(e) {
            return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n, r, i = e.document,
            s = e.location,
            o = e.navigator,
            u = e.jQuery,
            a = e.$,
            f = Array.prototype.push,
            l = Array.prototype.slice,
            c = Array.prototype.indexOf,
            h = Object.prototype.toString,
            p = Object.prototype.hasOwnProperty,
            d = String.prototype.trim,
            v = function(e, t) {
                return new v.fn.init(e, t, n)
            },
            m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            g = /\S/,
            y = /\s+/,
            b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            S = /^[\],:{}\s]*$/,
            x = /(?:^|:|,)(?:\s*\[)+/g,
            T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            C = /^-ms-/,
            k = /-([\da-z])/gi,
            L = function(e, t) {
                return (t + "").toUpperCase()
            },
            A = function() {
                i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
            },
            O = {};
        v.fn = v.prototype = {
            constructor: v,
            init: function(e, n, r) {
                var s, o, u, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                    if (s && (s[1] || !n)) {
                        if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                        o = i.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = i, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var r = v.merge(this.constructor(), e);
                return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
            },
            each: function(e, t) {
                return v.each(this, e, t)
            },
            ready: function(e) {
                return v.ready.promise().done(e), this
            },
            eq: function(e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(v.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: [].sort,
            splice: [].splice
        }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i) continue;
                        l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                    }
                return u
        }, v.extend({
            noConflict: function(t) {
                return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? v.readyWait++ : v.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? --v.readyWait : v.isReady) return;
                if (!i.body) return setTimeout(v.ready, 1);
                v.isReady = !0;
                if (e !== !0 && --v.readyWait > 0) return;
                r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
            },
            isFunction: function(e) {
                return v.type(e) === "function"
            },
            isArray: Array.isArray || function(e) {
                return v.type(e) === "array"
            },
            isWindow: function(e) {
                return e != null && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return e == null ? String(e) : O[h.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
                try {
                    if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || p.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                var r;
                return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
            },
            parseJSON: function(t) {
                if (!t || typeof t != "string") return null;
                t = v.trim(t);
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
                v.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string") return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && g.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(C, "ms-").replace(k, L)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, n, r) {
                var i, s = 0,
                    o = e.length,
                    u = o === t || v.isFunction(e);
                if (r) {
                    if (u) {
                        for (i in e)
                            if (n.apply(e[i], r) === !1) break
                    } else
                        for (; s < o;)
                            if (n.apply(e[s++], r) === !1) break
                } else if (u) {
                    for (i in e)
                        if (n.call(e[i], i, e[i]) === !1) break
                } else
                    for (; s < o;)
                        if (n.call(e[s], s, e[s++]) === !1) break; return e
            },
            trim: d && !d.call("﻿ ") ? function(e) {
                return e == null ? "" : d.call(e)
            } : function(e) {
                return e == null ? "" : (e + "").replace(b, "")
            },
            makeArray: function(e, t) {
                var n, r = t || [];
                return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (c) return c.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if (typeof r == "number")
                    for (; s < r; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                n = !!n;
                for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, n, r) {
                var i, s, o = [],
                    u = 0,
                    a = e.length,
                    f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
                if (f)
                    for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
                else
                    for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
                return o.concat.apply([], o)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                    return e.apply(n, i.concat(l.call(arguments)))
                }, s.guid = e.guid = e.guid || v.guid++, s) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a, f = r == null,
                    l = 0,
                    c = e.length;
                if (r && typeof r == "object") {
                    for (l in r) v.access(e, n, l, r[l], 1, o, i);
                    s = 1
                } else if (i !== t) {
                    a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                        return a.call(v(e), n)
                    }) : (n.call(e, i), n = null));
                    if (n)
                        for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                    s = 1
                }
                return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        }), v.ready.promise = function(t) {
            if (!r) {
                r = v.Deferred();
                if (i.readyState === "complete") setTimeout(v.ready, 1);
                else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
                else {
                    i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && i.documentElement
                    } catch (s) {}
                    n && n.doScroll && function o() {
                        if (!v.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            v.ready()
                        }
                    }()
                }
            }
            return r.promise(t)
        }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            O["[object " + t + "]"] = t.toLowerCase()
        }), n = v(i);
        var M = {};
        v.Callbacks = function(e) {
            e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
            var n, r, i, s, o, u, a = [],
                f = !e.once && [],
                l = function(t) {
                    n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                    for (; a && u < o; u++)
                        if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (a) {
                            var t = a.length;
                            (function r(t) {
                                v.each(t, function(t, n) {
                                    var i = v.type(n);
                                    i === "function" && (!e.unique || !c.has(n)) ? a.push(n) : n && n.length && i !== "string" && r(n)
                                })
                            })(arguments), i ? o = a.length : n && (s = t, l(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && v.each(arguments, function(e, t) {
                            var n;
                            while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                        }), this
                    },
                    has: function(e) {
                        return v.inArray(e, a) > -1
                    },
                    empty: function() {
                        return a = [], this
                    },
                    disable: function() {
                        return a = f = n = t, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return f = t, n || c.disable(), this
                    },
                    locked: function() {
                        return !f
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, v.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", v.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return v.Deferred(function(n) {
                                v.each(t, function(t, r) {
                                    var s = r[0],
                                        o = e[t];
                                    i[r[1]](v.isFunction(o) ? function() {
                                        var e = o.apply(this, arguments);
                                        e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                    } : n[s])
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? v.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, v.each(t, function(e, s) {
                    var o = s[2],
                        u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = 0,
                    n = l.call(arguments),
                    r = n.length,
                    i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                    s = i === 1 ? e : v.Deferred(),
                    o = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                        }
                    },
                    u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }
        }), v.support = function() {
            var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
            p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5";
            if (!n || !n.length) return {};
            s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], t = {
                leadingWhitespace: p.firstChild.nodeType === 3,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: u.value === "on",
                optSelected: o.selected,
                getSetAttribute: p.className !== "t",
                enctype: !!i.createElement("form").enctype,
                html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: i.compatMode === "CSS1Compat",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete p.test
            } catch (d) {
                t.deleteExpando = !1
            }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
            if (p.attachEvent)
                for (l in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
            return v(function() {
                var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    a = i.getElementsByTagName("body")[0];
                if (!a) return;
                n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                    width: "4px"
                }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
            }), a.removeChild(p), n = r = s = o = u = a = p = null, t
        }();
        var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            P = /([A-Z])/g;
        v.extend({
                    cache: {},
                    deletedIds: [],
                    uuid: 0,
                    expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
                    noData: {
                        embed: !0,
                        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                        applet: !0
                    },
                    hasData: function(e) {
                        return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
                    },
                    data: function(e, n, r, i) {
                        if (!v.acceptData(e)) return;
                        var s, o, u = v.expando,
                            a = typeof n == "string",
                            f = e.nodeType,
                            l = f ? v.cache : e,
                            c = f ? e[u] : e[u] && u;
                        if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
                        c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
                        if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
                        return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
                    },
                    removeData: function(e, t, n) {
                            if (!v.acceptData(e)) return;
                            var r, i, s, o = e.nodeType,
                                u = o ? v.cache : e,
                                a = o ? e[v.expando]
