!function(t) {
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    var e = {};
    n.m = t,
    n.c = e,
    n.i = function(t) {
        return t
    }
    ,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }
    ,
    n.p = "/",
    n(n.s = 32)
}([function(t, n, e) {
    (function(t, r) {
        var i;
        (function() {
            function o(t, n) {
                return t.set(n[0], n[1]),
                t
            }
            function a(t, n) {
                return t.add(n),
                t
            }
            function u(t, n, e) {
                switch (e.length) {
                case 0:
                    return t.call(n);
                case 1:
                    return t.call(n, e[0]);
                case 2:
                    return t.call(n, e[0], e[1]);
                case 3:
                    return t.call(n, e[0], e[1], e[2])
                }
                return t.apply(n, e)
            }
            function s(t, n, e, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
                    var a = t[i];
                    n(r, a, e(a), t)
                }
                return r
            }
            function c(t, n) {
                for (var e = -1, r = null == t ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
                    ;
                return t
            }
            function f(t, n) {
                for (var e = null == t ? 0 : t.length; e-- && n(t[e], e, t) !== !1; )
                    ;
                return t
            }
            function l(t, n) {
                for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                    if (!n(t[e], e, t))
                        return !1;
                return !0
            }
            function h(t, n) {
                for (var e = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++e < r; ) {
                    var a = t[e];
                    n(a, e, t) && (o[i++] = a)
                }
                return o
            }
            function p(t, n) {
                return !!(null == t ? 0 : t.length) && A(t, n, 0) > -1
            }
            function d(t, n, e) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                    if (e(n, t[r]))
                        return !0;
                return !1
            }
            function v(t, n) {
                for (var e = -1, r = null == t ? 0 : t.length, i = Array(r); ++e < r; )
                    i[e] = n(t[e], e, t);
                return i
            }
            function g(t, n) {
                for (var e = -1, r = n.length, i = t.length; ++e < r; )
                    t[i + e] = n[e];
                return t
            }
            function y(t, n, e, r) {
                var i = -1
                  , o = null == t ? 0 : t.length;
                for (r && o && (e = t[++i]); ++i < o; )
                    e = n(e, t[i], i, t);
                return e
            }
            function _(t, n, e, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (e = t[--i]); i--; )
                    e = n(e, t[i], i, t);
                return e
            }
            function m(t, n) {
                for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                    if (n(t[e], e, t))
                        return !0;
                return !1
            }
            function b(t) {
                return t.split("")
            }
            function x(t) {
                return t.match(Yn) || []
            }
            function w(t, n, e) {
                var r;
                return e(t, function(t, e, i) {
                    if (n(t, e, i))
                        return r = e,
                        !1
                }),
                r
            }
            function M(t, n, e, r) {
                for (var i = t.length, o = e + (r ? 1 : -1); r ? o-- : ++o < i; )
                    if (n(t[o], o, t))
                        return o;
                return -1
            }
            function A(t, n, e) {
                return n === n ? K(t, n, e) : M(t, k, e)
            }
            function S(t, n, e, r) {
                for (var i = e - 1, o = t.length; ++i < o; )
                    if (r(t[i], n))
                        return i;
                return -1
            }
            function k(t) {
                return t !== t
            }
            function C(t, n) {
                var e = null == t ? 0 : t.length;
                return e ? R(t, n) / e : jt
            }
            function E(t) {
                return function(n) {
                    return null == n ? it : n[t]
                }
            }
            function T(t) {
                return function(n) {
                    return null == t ? it : t[n]
                }
            }
            function N(t, n, e, r, i) {
                return i(t, function(t, i, o) {
                    e = r ? (r = !1,
                    t) : n(e, t, i, o)
                }),
                e
            }
            function O(t, n) {
                var e = t.length;
                for (t.sort(n); e--; )
                    t[e] = t[e].value;
                return t
            }
            function R(t, n) {
                for (var e, r = -1, i = t.length; ++r < i; ) {
                    var o = n(t[r]);
                    o !== it && (e = e === it ? o : e + o)
                }
                return e
            }
            function P(t, n) {
                for (var e = -1, r = Array(t); ++e < t; )
                    r[e] = n(e);
                return r
            }
            function L(t, n) {
                return v(n, function(n) {
                    return [n, t[n]]
                })
            }
            function z(t) {
                return function(n) {
                    return t(n)
                }
            }
            function I(t, n) {
                return v(n, function(n) {
                    return t[n]
                })
            }
            function j(t, n) {
                return t.has(n)
            }
            function U(t, n) {
                for (var e = -1, r = t.length; ++e < r && A(n, t[e], 0) > -1; )
                    ;
                return e
            }
            function D(t, n) {
                for (var e = t.length; e-- && A(n, t[e], 0) > -1; )
                    ;
                return e
            }
            function $(t, n) {
                for (var e = t.length, r = 0; e--; )
                    t[e] === n && ++r;
                return r
            }
            function B(t) {
                return "\\" + er[t]
            }
            function F(t, n) {
                return null == t ? it : t[n]
            }
            function q(t) {
                return Ve.test(t)
            }
            function Y(t) {
                return Xe.test(t)
            }
            function H(t) {
                for (var n, e = []; !(n = t.next()).done; )
                    e.push(n.value);
                return e
            }
            function W(t) {
                var n = -1
                  , e = Array(t.size);
                return t.forEach(function(t, r) {
                    e[++n] = [r, t]
                }),
                e
            }
            function V(t, n) {
                return function(e) {
                    return t(n(e))
                }
            }
            function X(t, n) {
                for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
                    var a = t[e];
                    a !== n && a !== lt || (t[e] = lt,
                    o[i++] = e)
                }
                return o
            }
            function G(t) {
                var n = -1
                  , e = Array(t.size);
                return t.forEach(function(t) {
                    e[++n] = t
                }),
                e
            }
            function Z(t) {
                var n = -1
                  , e = Array(t.size);
                return t.forEach(function(t) {
                    e[++n] = [t, t]
                }),
                e
            }
            function K(t, n, e) {
                for (var r = e - 1, i = t.length; ++r < i; )
                    if (t[r] === n)
                        return r;
                return -1
            }
            function Q(t, n, e) {
                for (var r = e + 1; r--; )
                    if (t[r] === n)
                        return r;
                return r
            }
            function J(t) {
                return q(t) ? nt(t) : mr(t)
            }
            function tt(t) {
                return q(t) ? et(t) : b(t)
            }
            function nt(t) {
                for (var n = He.lastIndex = 0; He.test(t); )
                    ++n;
                return n
            }
            function et(t) {
                return t.match(He) || []
            }
            function rt(t) {
                return t.match(We) || []
            }
            var it, ot = "4.17.4", at = 200, ut = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", st = "Expected a function", ct = "__lodash_hash_undefined__", ft = 500, lt = "__lodash_placeholder__", ht = 1, pt = 2, dt = 4, vt = 1, gt = 2, yt = 1, _t = 2, mt = 4, bt = 8, xt = 16, wt = 32, Mt = 64, At = 128, St = 256, kt = 512, Ct = 30, Et = "...", Tt = 800, Nt = 16, Ot = 1, Rt = 2, Pt = 3, Lt = 1 / 0, zt = 9007199254740991, It = 1.7976931348623157e308, jt = NaN, Ut = 4294967295, Dt = Ut - 1, $t = Ut >>> 1, Bt = [["ary", At], ["bind", yt], ["bindKey", _t], ["curry", bt], ["curryRight", xt], ["flip", kt], ["partial", wt], ["partialRight", Mt], ["rearg", St]], Ft = "[object Arguments]", qt = "[object Array]", Yt = "[object AsyncFunction]", Ht = "[object Boolean]", Wt = "[object Date]", Vt = "[object DOMException]", Xt = "[object Error]", Gt = "[object Function]", Zt = "[object GeneratorFunction]", Kt = "[object Map]", Qt = "[object Number]", Jt = "[object Null]", tn = "[object Object]", nn = "[object Promise]", en = "[object Proxy]", rn = "[object RegExp]", on = "[object Set]", an = "[object String]", un = "[object Symbol]", sn = "[object Undefined]", cn = "[object WeakMap]", fn = "[object WeakSet]", ln = "[object ArrayBuffer]", hn = "[object DataView]", pn = "[object Float32Array]", dn = "[object Float64Array]", vn = "[object Int8Array]", gn = "[object Int16Array]", yn = "[object Int32Array]", _n = "[object Uint8Array]", mn = "[object Uint8ClampedArray]", bn = "[object Uint16Array]", xn = "[object Uint32Array]", wn = /\b__p \+= '';/g, Mn = /\b(__p \+=) '' \+/g, An = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sn = /&(?:amp|lt|gt|quot|#39);/g, kn = /[&<>"']/g, Cn = RegExp(Sn.source), En = RegExp(kn.source), Tn = /<%-([\s\S]+?)%>/g, Nn = /<%([\s\S]+?)%>/g, On = /<%=([\s\S]+?)%>/g, Rn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pn = /^\w*$/, Ln = /^\./, zn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, In = /[\\^$.*+?()[\]{}|]/g, jn = RegExp(In.source), Un = /^\s+|\s+$/g, Dn = /^\s+/, $n = /\s+$/, Bn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fn = /\{\n\/\* \[wrapped with (.+)\] \*/, qn = /,? & /, Yn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Hn = /\\(\\)?/g, Wn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Vn = /\w*$/, Xn = /^[-+]0x[0-9a-f]+$/i, Gn = /^0b[01]+$/i, Zn = /^\[object .+?Constructor\]$/, Kn = /^0o[0-7]+$/i, Qn = /^(?:0|[1-9]\d*)$/, Jn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, te = /($^)/, ne = /['\n\r\u2028\u2029\\]/g, ee = "\\ud800-\\udfff", re = "\\u0300-\\u036f", ie = "\\ufe20-\\ufe2f", oe = "\\u20d0-\\u20ff", ae = re + ie + oe, ue = "\\u2700-\\u27bf", se = "a-z\\xdf-\\xf6\\xf8-\\xff", ce = "\\xac\\xb1\\xd7\\xf7", fe = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", le = "\\u2000-\\u206f", he = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", pe = "A-Z\\xc0-\\xd6\\xd8-\\xde", de = "\\ufe0e\\ufe0f", ve = ce + fe + le + he, ge = "['’]", ye = "[" + ee + "]", _e = "[" + ve + "]", me = "[" + ae + "]", be = "\\d+", xe = "[" + ue + "]", we = "[" + se + "]", Me = "[^" + ee + ve + be + ue + se + pe + "]", Ae = "\\ud83c[\\udffb-\\udfff]", Se = "(?:" + me + "|" + Ae + ")", ke = "[^" + ee + "]", Ce = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ee = "[\\ud800-\\udbff][\\udc00-\\udfff]", Te = "[" + pe + "]", Ne = "\\u200d", Oe = "(?:" + we + "|" + Me + ")", Re = "(?:" + Te + "|" + Me + ")", Pe = "(?:" + ge + "(?:d|ll|m|re|s|t|ve))?", Le = "(?:" + ge + "(?:D|LL|M|RE|S|T|VE))?", ze = Se + "?", Ie = "[" + de + "]?", je = "(?:" + Ne + "(?:" + [ke, Ce, Ee].join("|") + ")" + Ie + ze + ")*", Ue = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", De = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", $e = Ie + ze + je, Be = "(?:" + [xe, Ce, Ee].join("|") + ")" + $e, Fe = "(?:" + [ke + me + "?", me, Ce, Ee, ye].join("|") + ")", qe = RegExp(ge, "g"), Ye = RegExp(me, "g"), He = RegExp(Ae + "(?=" + Ae + ")|" + Fe + $e, "g"), We = RegExp([Te + "?" + we + "+" + Pe + "(?=" + [_e, Te, "$"].join("|") + ")", Re + "+" + Le + "(?=" + [_e, Te + Oe, "$"].join("|") + ")", Te + "?" + Oe + "+" + Pe, Te + "+" + Le, De, Ue, be, Be].join("|"), "g"), Ve = RegExp("[" + Ne + ee + ae + de + "]"), Xe = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ge = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ze = -1, Ke = {};
            Ke[pn] = Ke[dn] = Ke[vn] = Ke[gn] = Ke[yn] = Ke[_n] = Ke[mn] = Ke[bn] = Ke[xn] = !0,
            Ke[Ft] = Ke[qt] = Ke[ln] = Ke[Ht] = Ke[hn] = Ke[Wt] = Ke[Xt] = Ke[Gt] = Ke[Kt] = Ke[Qt] = Ke[tn] = Ke[rn] = Ke[on] = Ke[an] = Ke[cn] = !1;
            var Qe = {};
            Qe[Ft] = Qe[qt] = Qe[ln] = Qe[hn] = Qe[Ht] = Qe[Wt] = Qe[pn] = Qe[dn] = Qe[vn] = Qe[gn] = Qe[yn] = Qe[Kt] = Qe[Qt] = Qe[tn] = Qe[rn] = Qe[on] = Qe[an] = Qe[un] = Qe[_n] = Qe[mn] = Qe[bn] = Qe[xn] = !0,
            Qe[Xt] = Qe[Gt] = Qe[cn] = !1;
            var tr = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , nr = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }
              , er = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , rr = parseFloat
              , ir = parseInt
              , or = "object" == typeof t && t && t.Object === Object && t
              , ar = "object" == typeof self && self && self.Object === Object && self
              , ur = or || ar || Function("return this")()
              , sr = "object" == typeof n && n && !n.nodeType && n
              , cr = sr && "object" == typeof r && r && !r.nodeType && r
              , fr = cr && cr.exports === sr
              , lr = fr && or.process
              , hr = function() {
                try {
                    return lr && lr.binding && lr.binding("util")
                } catch (t) {}
            }()
              , pr = hr && hr.isArrayBuffer
              , dr = hr && hr.isDate
              , vr = hr && hr.isMap
              , gr = hr && hr.isRegExp
              , yr = hr && hr.isSet
              , _r = hr && hr.isTypedArray
              , mr = E("length")
              , xr = T(tr)
              , wr = T(nr)
              , Mr = function t(n) {
                function e(t) {
                    if (cs(t) && !xh(t) && !(t instanceof b)) {
                        if (t instanceof i)
                            return t;
                        if (xf.call(t, "__wrapped__"))
                            return aa(t)
                    }
                    return new i(t)
                }
                function r() {}
                function i(t, n) {
                    this.__wrapped__ = t,
                    this.__actions__ = [],
                    this.__chain__ = !!n,
                    this.__index__ = 0,
                    this.__values__ = it
                }
                function b(t) {
                    this.__wrapped__ = t,
                    this.__actions__ = [],
                    this.__dir__ = 1,
                    this.__filtered__ = !1,
                    this.__iteratees__ = [],
                    this.__takeCount__ = Ut,
                    this.__views__ = []
                }
                function T() {
                    var t = new b(this.__wrapped__);
                    return t.__actions__ = $i(this.__actions__),
                    t.__dir__ = this.__dir__,
                    t.__filtered__ = this.__filtered__,
                    t.__iteratees__ = $i(this.__iteratees__),
                    t.__takeCount__ = this.__takeCount__,
                    t.__views__ = $i(this.__views__),
                    t
                }
                function K() {
                    if (this.__filtered__) {
                        var t = new b(this);
                        t.__dir__ = -1,
                        t.__filtered__ = !0
                    } else
                        t = this.clone(),
                        t.__dir__ *= -1;
                    return t
                }
                function nt() {
                    var t = this.__wrapped__.value()
                      , n = this.__dir__
                      , e = xh(t)
                      , r = n < 0
                      , i = e ? t.length : 0
                      , o = No(0, i, this.__views__)
                      , a = o.start
                      , u = o.end
                      , s = u - a
                      , c = r ? u : a - 1
                      , f = this.__iteratees__
                      , l = f.length
                      , h = 0
                      , p = Kf(s, this.__takeCount__);
                    if (!e || !r && i == s && p == s)
                        return xi(t, this.__actions__);
                    var d = [];
                    t: for (; s-- && h < p; ) {
                        c += n;
                        for (var v = -1, g = t[c]; ++v < l; ) {
                            var y = f[v]
                              , _ = y.iteratee
                              , m = y.type
                              , b = _(g);
                            if (m == Rt)
                                g = b;
                            else if (!b) {
                                if (m == Ot)
                                    continue t;
                                break t
                            }
                        }
                        d[h++] = g
                    }
                    return d
                }
                function et(t) {
                    var n = -1
                      , e = null == t ? 0 : t.length;
                    for (this.clear(); ++n < e; ) {
                        var r = t[n];
                        this.set(r[0], r[1])
                    }
                }
                function Yn() {
                    this.__data__ = ul ? ul(null) : {},
                    this.size = 0
                }
                function ee(t) {
                    var n = this.has(t) && delete this.__data__[t];
                    return this.size -= n ? 1 : 0,
                    n
                }
                function re(t) {
                    var n = this.__data__;
                    if (ul) {
                        var e = n[t];
                        return e === ct ? it : e
                    }
                    return xf.call(n, t) ? n[t] : it
                }
                function ie(t) {
                    var n = this.__data__;
                    return ul ? n[t] !== it : xf.call(n, t)
                }
                function oe(t, n) {
                    var e = this.__data__;
                    return this.size += this.has(t) ? 0 : 1,
                    e[t] = ul && n === it ? ct : n,
                    this
                }
                function ae(t) {
                    var n = -1
                      , e = null == t ? 0 : t.length;
                    for (this.clear(); ++n < e; ) {
                        var r = t[n];
                        this.set(r[0], r[1])
                    }
                }
                function ue() {
                    this.__data__ = [],
                    this.size = 0
                }
                function se(t) {
                    var n = this.__data__
                      , e = Pe(n, t);
                    return !(e < 0) && (e == n.length - 1 ? n.pop() : zf.call(n, e, 1),
                    --this.size,
                    !0)
                }
                function ce(t) {
                    var n = this.__data__
                      , e = Pe(n, t);
                    return e < 0 ? it : n[e][1]
                }
                function fe(t) {
                    return Pe(this.__data__, t) > -1
                }
                function le(t, n) {
                    var e = this.__data__
                      , r = Pe(e, t);
                    return r < 0 ? (++this.size,
                    e.push([t, n])) : e[r][1] = n,
                    this
                }
                function he(t) {
                    var n = -1
                      , e = null == t ? 0 : t.length;
                    for (this.clear(); ++n < e; ) {
                        var r = t[n];
                        this.set(r[0], r[1])
                    }
                }
                function pe() {
                    this.size = 0,
                    this.__data__ = {
                        hash: new et,
                        map: new (rl || ae),
                        string: new et
                    }
                }
                function de(t) {
                    var n = ko(this, t).delete(t);
                    return this.size -= n ? 1 : 0,
                    n
                }
                function ve(t) {
                    return ko(this, t).get(t)
                }
                function ge(t) {
                    return ko(this, t).has(t)
                }
                function ye(t, n) {
                    var e = ko(this, t)
                      , r = e.size;
                    return e.set(t, n),
                    this.size += e.size == r ? 0 : 1,
                    this
                }
                function _e(t) {
                    var n = -1
                      , e = null == t ? 0 : t.length;
                    for (this.__data__ = new he; ++n < e; )
                        this.add(t[n])
                }
                function me(t) {
                    return this.__data__.set(t, ct),
                    this
                }
                function be(t) {
                    return this.__data__.has(t)
                }
                function xe(t) {
                    var n = this.__data__ = new ae(t);
                    this.size = n.size
                }
                function we() {
                    this.__data__ = new ae,
                    this.size = 0
                }
                function Me(t) {
                    var n = this.__data__
                      , e = n.delete(t);
                    return this.size = n.size,
                    e
                }
                function Ae(t) {
                    return this.__data__.get(t)
                }
                function Se(t) {
                    return this.__data__.has(t)
                }
                function ke(t, n) {
                    var e = this.__data__;
                    if (e instanceof ae) {
                        var r = e.__data__;
                        if (!rl || r.length < at - 1)
                            return r.push([t, n]),
                            this.size = ++e.size,
                            this;
                        e = this.__data__ = new he(r)
                    }
                    return e.set(t, n),
                    this.size = e.size,
                    this
                }
                function Ce(t, n) {
                    var e = xh(t)
                      , r = !e && bh(t)
                      , i = !e && !r && Mh(t)
                      , o = !e && !r && !i && Eh(t)
                      , a = e || r || i || o
                      , u = a ? P(t.length, df) : []
                      , s = u.length;
                    for (var c in t)
                        !n && !xf.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Uo(c, s)) || u.push(c);
                    return u
                }
                function Ee(t) {
                    var n = t.length;
                    return n ? t[ei(0, n - 1)] : it
                }
                function Te(t, n) {
                    return ea($i(t), De(n, 0, t.length))
                }
                function Ne(t) {
                    return ea($i(t))
                }
                function Oe(t, n, e) {
                    (e === it || Gu(t[n], e)) && (e !== it || n in t) || je(t, n, e)
                }
                function Re(t, n, e) {
                    var r = t[n];
                    xf.call(t, n) && Gu(r, e) && (e !== it || n in t) || je(t, n, e)
                }
                function Pe(t, n) {
                    for (var e = t.length; e--; )
                        if (Gu(t[e][0], n))
                            return e;
                    return -1
                }
                function Le(t, n, e, r) {
                    return ml(t, function(t, i, o) {
                        n(r, t, e(t), o)
                    }),
                    r
                }
                function ze(t, n) {
                    return t && Bi(n, Ys(n), t)
                }
                function Ie(t, n) {
                    return t && Bi(n, Hs(n), t)
                }
                function je(t, n, e) {
                    "__proto__" == n && Df ? Df(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    }) : t[n] = e
                }
                function Ue(t, n) {
                    for (var e = -1, r = n.length, i = uf(r), o = null == t; ++e < r; )
                        i[e] = o ? it : Bs(t, n[e]);
                    return i
                }
                function De(t, n, e) {
                    return t === t && (e !== it && (t = t <= e ? t : e),
                    n !== it && (t = t >= n ? t : n)),
                    t
                }
                function $e(t, n, e, r, i, o) {
                    var a, u = n & ht, s = n & pt, f = n & dt;
                    if (e && (a = i ? e(t, r, i, o) : e(t)),
                    a !== it)
                        return a;
                    if (!ss(t))
                        return t;
                    var l = xh(t);
                    if (l) {
                        if (a = Po(t),
                        !u)
                            return $i(t, a)
                    } else {
                        var h = Ol(t)
                          , p = h == Gt || h == Zt;
                        if (Mh(t))
                            return Ei(t, u);
                        if (h == tn || h == Ft || p && !i) {
                            if (a = s || p ? {} : Lo(t),
                            !u)
                                return s ? qi(t, Ie(a, t)) : Fi(t, ze(a, t))
                        } else {
                            if (!Qe[h])
                                return i ? t : {};
                            a = zo(t, h, $e, u)
                        }
                    }
                    o || (o = new xe);
                    var d = o.get(t);
                    if (d)
                        return d;
                    o.set(t, a);
                    var v = f ? s ? wo : xo : s ? Hs : Ys
                      , g = l ? it : v(t);
                    return c(g || t, function(r, i) {
                        g && (i = r,
                        r = t[i]),
                        Re(a, i, $e(r, n, e, i, t, o))
                    }),
                    a
                }
                function Be(t) {
                    var n = Ys(t);
                    return function(e) {
                        return Fe(e, t, n)
                    }
                }
                function Fe(t, n, e) {
                    var r = e.length;
                    if (null == t)
                        return !r;
                    for (t = hf(t); r--; ) {
                        var i = e[r]
                          , o = n[i]
                          , a = t[i];
                        if (a === it && !(i in t) || !o(a))
                            return !1
                    }
                    return !0
                }
                function He(t, n, e) {
                    if ("function" != typeof t)
                        throw new vf(st);
                    return Ll(function() {
                        t.apply(it, e)
                    }, n)
                }
                function We(t, n, e, r) {
                    var i = -1
                      , o = p
                      , a = !0
                      , u = t.length
                      , s = []
                      , c = n.length;
                    if (!u)
                        return s;
                    e && (n = v(n, z(e))),
                    r ? (o = d,
                    a = !1) : n.length >= at && (o = j,
                    a = !1,
                    n = new _e(n));
                    t: for (; ++i < u; ) {
                        var f = t[i]
                          , l = null == e ? f : e(f);
                        if (f = r || 0 !== f ? f : 0,
                        a && l === l) {
                            for (var h = c; h--; )
                                if (n[h] === l)
                                    continue t;
                            s.push(f)
                        } else
                            o(n, l, r) || s.push(f)
                    }
                    return s
                }
                function Ve(t, n) {
                    var e = !0;
                    return ml(t, function(t, r, i) {
                        return e = !!n(t, r, i)
                    }),
                    e
                }
                function Xe(t, n, e) {
                    for (var r = -1, i = t.length; ++r < i; ) {
                        var o = t[r]
                          , a = n(o);
                        if (null != a && (u === it ? a === a && !bs(a) : e(a, u)))
                            var u = a
                              , s = o
                    }
                    return s
                }
                function Je(t, n, e, r) {
                    var i = t.length;
                    for (e = ks(e),
                    e < 0 && (e = -e > i ? 0 : i + e),
                    r = r === it || r > i ? i : ks(r),
                    r < 0 && (r += i),
                    r = e > r ? 0 : Cs(r); e < r; )
                        t[e++] = n;
                    return t
                }
                function tr(t, n) {
                    var e = [];
                    return ml(t, function(t, r, i) {
                        n(t, r, i) && e.push(t)
                    }),
                    e
                }
                function nr(t, n, e, r, i) {
                    var o = -1
                      , a = t.length;
                    for (e || (e = jo),
                    i || (i = []); ++o < a; ) {
                        var u = t[o];
                        n > 0 && e(u) ? n > 1 ? nr(u, n - 1, e, r, i) : g(i, u) : r || (i[i.length] = u)
                    }
                    return i
                }
                function er(t, n) {
                    return t && xl(t, n, Ys)
                }
                function or(t, n) {
                    return t && wl(t, n, Ys)
                }
                function ar(t, n) {
                    return h(n, function(n) {
                        return os(t[n])
                    })
                }
                function sr(t, n) {
                    n = ki(n, t);
                    for (var e = 0, r = n.length; null != t && e < r; )
                        t = t[ra(n[e++])];
                    return e && e == r ? t : it
                }
                function cr(t, n, e) {
                    var r = n(t);
                    return xh(t) ? r : g(r, e(t))
                }
                function lr(t) {
                    return null == t ? t === it ? sn : Jt : Uf && Uf in hf(t) ? To(t) : Zo(t)
                }
                function hr(t, n) {
                    return t > n
                }
                function mr(t, n) {
                    return null != t && xf.call(t, n)
                }
                function Mr(t, n) {
                    return null != t && n in hf(t)
                }
                function Sr(t, n, e) {
                    return t >= Kf(n, e) && t < Zf(n, e)
                }
                function kr(t, n, e) {
                    for (var r = e ? d : p, i = t[0].length, o = t.length, a = o, u = uf(o), s = 1 / 0, c = []; a--; ) {
                        var f = t[a];
                        a && n && (f = v(f, z(n))),
                        s = Kf(f.length, s),
                        u[a] = !e && (n || i >= 120 && f.length >= 120) ? new _e(a && f) : it
                    }
                    f = t[0];
                    var l = -1
                      , h = u[0];
                    t: for (; ++l < i && c.length < s; ) {
                        var g = f[l]
                          , y = n ? n(g) : g;
                        if (g = e || 0 !== g ? g : 0,
                        !(h ? j(h, y) : r(c, y, e))) {
                            for (a = o; --a; ) {
                                var _ = u[a];
                                if (!(_ ? j(_, y) : r(t[a], y, e)))
                                    continue t
                            }
                            h && h.push(y),
                            c.push(g)
                        }
                    }
                    return c
                }
                function Cr(t, n, e, r) {
                    return er(t, function(t, i, o) {
                        n(r, e(t), i, o)
                    }),
                    r
                }
                function Er(t, n, e) {
                    n = ki(n, t),
                    t = Qo(t, n);
                    var r = null == t ? t : t[ra(Sa(n))];
                    return null == r ? it : u(r, t, e)
                }
                function Tr(t) {
                    return cs(t) && lr(t) == Ft
                }
                function Nr(t) {
                    return cs(t) && lr(t) == ln
                }
                function Or(t) {
                    return cs(t) && lr(t) == Wt
                }
                function Rr(t, n, e, r, i) {
                    return t === n || (null == t || null == n || !cs(t) && !cs(n) ? t !== t && n !== n : Pr(t, n, e, r, Rr, i))
                }
                function Pr(t, n, e, r, i, o) {
                    var a = xh(t)
                      , u = xh(n)
                      , s = a ? qt : Ol(t)
                      , c = u ? qt : Ol(n);
                    s = s == Ft ? tn : s,
                    c = c == Ft ? tn : c;
                    var f = s == tn
                      , l = c == tn
                      , h = s == c;
                    if (h && Mh(t)) {
                        if (!Mh(n))
                            return !1;
                        a = !0,
                        f = !1
                    }
                    if (h && !f)
                        return o || (o = new xe),
                        a || Eh(t) ? yo(t, n, e, r, i, o) : _o(t, n, s, e, r, i, o);
                    if (!(e & vt)) {
                        var p = f && xf.call(t, "__wrapped__")
                          , d = l && xf.call(n, "__wrapped__");
                        if (p || d) {
                            var v = p ? t.value() : t
                              , g = d ? n.value() : n;
                            return o || (o = new xe),
                            i(v, g, e, r, o)
                        }
                    }
                    return !!h && (o || (o = new xe),
                    mo(t, n, e, r, i, o))
                }
                function Lr(t) {
                    return cs(t) && Ol(t) == Kt
                }
                function zr(t, n, e, r) {
                    var i = e.length
                      , o = i
                      , a = !r;
                    if (null == t)
                        return !o;
                    for (t = hf(t); i--; ) {
                        var u = e[i];
                        if (a && u[2] ? u[1] !== t[u[0]] : !(u[0]in t))
                            return !1
                    }
                    for (; ++i < o; ) {
                        u = e[i];
                        var s = u[0]
                          , c = t[s]
                          , f = u[1];
                        if (a && u[2]) {
                            if (c === it && !(s in t))
                                return !1
                        } else {
                            var l = new xe;
                            if (r)
                                var h = r(c, f, s, t, n, l);
                            if (!(h === it ? Rr(f, c, vt | gt, r, l) : h))
                                return !1
                        }
                    }
                    return !0
                }
                function Ir(t) {
                    return !(!ss(t) || qo(t)) && (os(t) ? Cf : Zn).test(ia(t))
                }
                function jr(t) {
                    return cs(t) && lr(t) == rn
                }
                function Ur(t) {
                    return cs(t) && Ol(t) == on
                }
                function Dr(t) {
                    return cs(t) && us(t.length) && !!Ke[lr(t)]
                }
                function $r(t) {
                    return "function" == typeof t ? t : null == t ? Lc : "object" == typeof t ? xh(t) ? Wr(t[0], t[1]) : Hr(t) : Fc(t)
                }
                function Br(t) {
                    if (!Yo(t))
                        return Gf(t);
                    var n = [];
                    for (var e in hf(t))
                        xf.call(t, e) && "constructor" != e && n.push(e);
                    return n
                }
                function Fr(t) {
                    if (!ss(t))
                        return Go(t);
                    var n = Yo(t)
                      , e = [];
                    for (var r in t)
                        ("constructor" != r || !n && xf.call(t, r)) && e.push(r);
                    return e
                }
                function qr(t, n) {
                    return t < n
                }
                function Yr(t, n) {
                    var e = -1
                      , r = Zu(t) ? uf(t.length) : [];
                    return ml(t, function(t, i, o) {
                        r[++e] = n(t, i, o)
                    }),
                    r
                }
                function Hr(t) {
                    var n = Co(t);
                    return 1 == n.length && n[0][2] ? Wo(n[0][0], n[0][1]) : function(e) {
                        return e === t || zr(e, t, n)
                    }
                }
                function Wr(t, n) {
                    return $o(t) && Ho(n) ? Wo(ra(t), n) : function(e) {
                        var r = Bs(e, t);
                        return r === it && r === n ? qs(e, t) : Rr(n, r, vt | gt)
                    }
                }
                function Vr(t, n, e, r, i) {
                    t !== n && xl(n, function(o, a) {
                        if (ss(o))
                            i || (i = new xe),
                            Xr(t, n, a, e, Vr, r, i);
                        else {
                            var u = r ? r(t[a], o, a + "", t, n, i) : it;
                            u === it && (u = o),
                            Oe(t, a, u)
                        }
                    }, Hs)
                }
                function Xr(t, n, e, r, i, o, a) {
                    var u = t[e]
                      , s = n[e]
                      , c = a.get(s);
                    if (c)
                        return void Oe(t, e, c);
                    var f = o ? o(u, s, e + "", t, n, a) : it
                      , l = f === it;
                    if (l) {
                        var h = xh(s)
                          , p = !h && Mh(s)
                          , d = !h && !p && Eh(s);
                        f = s,
                        h || p || d ? xh(u) ? f = u : Ku(u) ? f = $i(u) : p ? (l = !1,
                        f = Ei(s, !0)) : d ? (l = !1,
                        f = zi(s, !0)) : f = [] : ys(s) || bh(s) ? (f = u,
                        bh(u) ? f = Ts(u) : (!ss(u) || r && os(u)) && (f = Lo(s))) : l = !1
                    }
                    l && (a.set(s, f),
                    i(f, s, r, o, a),
                    a.delete(s)),
                    Oe(t, e, f)
                }
                function Gr(t, n) {
                    var e = t.length;
                    if (e)
                        return n += n < 0 ? e : 0,
                        Uo(n, e) ? t[n] : it
                }
                function Zr(t, n, e) {
                    var r = -1;
                    return n = v(n.length ? n : [Lc], z(So())),
                    O(Yr(t, function(t, e, i) {
                        return {
                            criteria: v(n, function(n) {
                                return n(t)
                            }),
                            index: ++r,
                            value: t
                        }
                    }), function(t, n) {
                        return ji(t, n, e)
                    })
                }
                function Kr(t, n) {
                    return Qr(t, n, function(n, e) {
                        return qs(t, e)
                    })
                }
                function Qr(t, n, e) {
                    for (var r = -1, i = n.length, o = {}; ++r < i; ) {
                        var a = n[r]
                          , u = sr(t, a);
                        e(u, a) && si(o, ki(a, t), u)
                    }
                    return o
                }
                function Jr(t) {
                    return function(n) {
                        return sr(n, t)
                    }
                }
                function ti(t, n, e, r) {
                    var i = r ? S : A
                      , o = -1
                      , a = n.length
                      , u = t;
                    for (t === n && (n = $i(n)),
                    e && (u = v(t, z(e))); ++o < a; )
                        for (var s = 0, c = n[o], f = e ? e(c) : c; (s = i(u, f, s, r)) > -1; )
                            u !== t && zf.call(u, s, 1),
                            zf.call(t, s, 1);
                    return t
                }
                function ni(t, n) {
                    for (var e = t ? n.length : 0, r = e - 1; e--; ) {
                        var i = n[e];
                        if (e == r || i !== o) {
                            var o = i;
                            Uo(i) ? zf.call(t, i, 1) : _i(t, i)
                        }
                    }
                    return t
                }
                function ei(t, n) {
                    return t + Yf(tl() * (n - t + 1))
                }
                function ri(t, n, e, r) {
                    for (var i = -1, o = Zf(qf((n - t) / (e || 1)), 0), a = uf(o); o--; )
                        a[r ? o : ++i] = t,
                        t += e;
                    return a
                }
                function ii(t, n) {
                    var e = "";
                    if (!t || n < 1 || n > zt)
                        return e;
                    do {
                        n % 2 && (e += t),
                        (n = Yf(n / 2)) && (t += t)
                    } while (n);return e
                }
                function oi(t, n) {
                    return zl(Ko(t, n, Lc), t + "")
                }
                function ai(t) {
                    return Ee(rc(t))
                }
                function ui(t, n) {
                    var e = rc(t);
                    return ea(e, De(n, 0, e.length))
                }
                function si(t, n, e, r) {
                    if (!ss(t))
                        return t;
                    n = ki(n, t);
                    for (var i = -1, o = n.length, a = o - 1, u = t; null != u && ++i < o; ) {
                        var s = ra(n[i])
                          , c = e;
                        if (i != a) {
                            var f = u[s];
                            c = r ? r(f, s, u) : it,
                            c === it && (c = ss(f) ? f : Uo(n[i + 1]) ? [] : {})
                        }
                        Re(u, s, c),
                        u = u[s]
                    }
                    return t
                }
                function ci(t) {
                    return ea(rc(t))
                }
                function fi(t, n, e) {
                    var r = -1
                      , i = t.length;
                    n < 0 && (n = -n > i ? 0 : i + n),
                    e = e > i ? i : e,
                    e < 0 && (e += i),
                    i = n > e ? 0 : e - n >>> 0,
                    n >>>= 0;
                    for (var o = uf(i); ++r < i; )
                        o[r] = t[r + n];
                    return o
                }
                function li(t, n) {
                    var e;
                    return ml(t, function(t, r, i) {
                        return !(e = n(t, r, i))
                    }),
                    !!e
                }
                function hi(t, n, e) {
                    var r = 0
                      , i = null == t ? r : t.length;
                    if ("number" == typeof n && n === n && i <= $t) {
                        for (; r < i; ) {
                            var o = r + i >>> 1
                              , a = t[o];
                            null !== a && !bs(a) && (e ? a <= n : a < n) ? r = o + 1 : i = o
                        }
                        return i
                    }
                    return pi(t, n, Lc, e)
                }
                function pi(t, n, e, r) {
                    n = e(n);
                    for (var i = 0, o = null == t ? 0 : t.length, a = n !== n, u = null === n, s = bs(n), c = n === it; i < o; ) {
                        var f = Yf((i + o) / 2)
                          , l = e(t[f])
                          , h = l !== it
                          , p = null === l
                          , d = l === l
                          , v = bs(l);
                        if (a)
                            var g = r || d;
                        else
                            g = c ? d && (r || h) : u ? d && h && (r || !p) : s ? d && h && !p && (r || !v) : !p && !v && (r ? l <= n : l < n);
                        g ? i = f + 1 : o = f
                    }
                    return Kf(o, Dt)
                }
                function di(t, n) {
                    for (var e = -1, r = t.length, i = 0, o = []; ++e < r; ) {
                        var a = t[e]
                          , u = n ? n(a) : a;
                        if (!e || !Gu(u, s)) {
                            var s = u;
                            o[i++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }
                function vi(t) {
                    return "number" == typeof t ? t : bs(t) ? jt : +t
                }
                function gi(t) {
                    if ("string" == typeof t)
                        return t;
                    if (xh(t))
                        return v(t, gi) + "";
                    if (bs(t))
                        return yl ? yl.call(t) : "";
                    var n = t + "";
                    return "0" == n && 1 / t == -Lt ? "-0" : n
                }
                function yi(t, n, e) {
                    var r = -1
                      , i = p
                      , o = t.length
                      , a = !0
                      , u = []
                      , s = u;
                    if (e)
                        a = !1,
                        i = d;
                    else if (o >= at) {
                        var c = n ? null : Cl(t);
                        if (c)
                            return G(c);
                        a = !1,
                        i = j,
                        s = new _e
                    } else
                        s = n ? [] : u;
                    t: for (; ++r < o; ) {
                        var f = t[r]
                          , l = n ? n(f) : f;
                        if (f = e || 0 !== f ? f : 0,
                        a && l === l) {
                            for (var h = s.length; h--; )
                                if (s[h] === l)
                                    continue t;
                            n && s.push(l),
                            u.push(f)
                        } else
                            i(s, l, e) || (s !== u && s.push(l),
                            u.push(f))
                    }
                    return u
                }
                function _i(t, n) {
                    return n = ki(n, t),
                    null == (t = Qo(t, n)) || delete t[ra(Sa(n))]
                }
                function mi(t, n, e, r) {
                    return si(t, n, e(sr(t, n)), r)
                }
                function bi(t, n, e, r) {
                    for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && n(t[o], o, t); )
                        ;
                    return e ? fi(t, r ? 0 : o, r ? o + 1 : i) : fi(t, r ? o + 1 : 0, r ? i : o)
                }
                function xi(t, n) {
                    var e = t;
                    return e instanceof b && (e = e.value()),
                    y(n, function(t, n) {
                        return n.func.apply(n.thisArg, g([t], n.args))
                    }, e)
                }
                function wi(t, n, e) {
                    var r = t.length;
                    if (r < 2)
                        return r ? yi(t[0]) : [];
                    for (var i = -1, o = uf(r); ++i < r; )
                        for (var a = t[i], u = -1; ++u < r; )
                            u != i && (o[i] = We(o[i] || a, t[u], n, e));
                    return yi(nr(o, 1), n, e)
                }
                function Mi(t, n, e) {
                    for (var r = -1, i = t.length, o = n.length, a = {}; ++r < i; ) {
                        var u = r < o ? n[r] : it;
                        e(a, t[r], u)
                    }
                    return a
                }
                function Ai(t) {
                    return Ku(t) ? t : []
                }
                function Si(t) {
                    return "function" == typeof t ? t : Lc
                }
                function ki(t, n) {
                    return xh(t) ? t : $o(t, n) ? [t] : Il(Os(t))
                }
                function Ci(t, n, e) {
                    var r = t.length;
                    return e = e === it ? r : e,
                    !n && e >= r ? t : fi(t, n, e)
                }
                function Ei(t, n) {
                    if (n)
                        return t.slice();
                    var e = t.length
                      , r = Of ? Of(e) : new t.constructor(e);
                    return t.copy(r),
                    r
                }
                function Ti(t) {
                    var n = new t.constructor(t.byteLength);
                    return new Nf(n).set(new Nf(t)),
                    n
                }
                function Ni(t, n) {
                    var e = n ? Ti(t.buffer) : t.buffer;
                    return new t.constructor(e,t.byteOffset,t.byteLength)
                }
                function Oi(t, n, e) {
                    return y(n ? e(W(t), ht) : W(t), o, new t.constructor)
                }
                function Ri(t) {
                    var n = new t.constructor(t.source,Vn.exec(t));
                    return n.lastIndex = t.lastIndex,
                    n
                }
                function Pi(t, n, e) {
                    return y(n ? e(G(t), ht) : G(t), a, new t.constructor)
                }
                function Li(t) {
                    return gl ? hf(gl.call(t)) : {}
                }
                function zi(t, n) {
                    var e = n ? Ti(t.buffer) : t.buffer;
                    return new t.constructor(e,t.byteOffset,t.length)
                }
                function Ii(t, n) {
                    if (t !== n) {
                        var e = t !== it
                          , r = null === t
                          , i = t === t
                          , o = bs(t)
                          , a = n !== it
                          , u = null === n
                          , s = n === n
                          , c = bs(n);
                        if (!u && !c && !o && t > n || o && a && s && !u && !c || r && a && s || !e && s || !i)
                            return 1;
                        if (!r && !o && !c && t < n || c && e && i && !r && !o || u && e && i || !a && i || !s)
                            return -1
                    }
                    return 0
                }
                function ji(t, n, e) {
                    for (var r = -1, i = t.criteria, o = n.criteria, a = i.length, u = e.length; ++r < a; ) {
                        var s = Ii(i[r], o[r]);
                        if (s) {
                            if (r >= u)
                                return s;
                            return s * ("desc" == e[r] ? -1 : 1)
                        }
                    }
                    return t.index - n.index
                }
                function Ui(t, n, e, r) {
                    for (var i = -1, o = t.length, a = e.length, u = -1, s = n.length, c = Zf(o - a, 0), f = uf(s + c), l = !r; ++u < s; )
                        f[u] = n[u];
                    for (; ++i < a; )
                        (l || i < o) && (f[e[i]] = t[i]);
                    for (; c--; )
                        f[u++] = t[i++];
                    return f
                }
                function Di(t, n, e, r) {
                    for (var i = -1, o = t.length, a = -1, u = e.length, s = -1, c = n.length, f = Zf(o - u, 0), l = uf(f + c), h = !r; ++i < f; )
                        l[i] = t[i];
                    for (var p = i; ++s < c; )
                        l[p + s] = n[s];
                    for (; ++a < u; )
                        (h || i < o) && (l[p + e[a]] = t[i++]);
                    return l
                }
                function $i(t, n) {
                    var e = -1
                      , r = t.length;
                    for (n || (n = uf(r)); ++e < r; )
                        n[e] = t[e];
                    return n
                }
                function Bi(t, n, e, r) {
                    var i = !e;
                    e || (e = {});
                    for (var o = -1, a = n.length; ++o < a; ) {
                        var u = n[o]
                          , s = r ? r(e[u], t[u], u, e, t) : it;
                        s === it && (s = t[u]),
                        i ? je(e, u, s) : Re(e, u, s)
                    }
                    return e
                }
                function Fi(t, n) {
                    return Bi(t, Tl(t), n)
                }
                function qi(t, n) {
                    return Bi(t, Nl(t), n)
                }
                function Yi(t, n) {
                    return function(e, r) {
                        var i = xh(e) ? s : Le
                          , o = n ? n() : {};
                        return i(e, t, So(r, 2), o)
                    }
                }
                function Hi(t) {
                    return oi(function(n, e) {
                        var r = -1
                          , i = e.length
                          , o = i > 1 ? e[i - 1] : it
                          , a = i > 2 ? e[2] : it;
                        for (o = t.length > 3 && "function" == typeof o ? (i--,
                        o) : it,
                        a && Do(e[0], e[1], a) && (o = i < 3 ? it : o,
                        i = 1),
                        n = hf(n); ++r < i; ) {
                            var u = e[r];
                            u && t(n, u, r, o)
                        }
                        return n
                    })
                }
                function Wi(t, n) {
                    return function(e, r) {
                        if (null == e)
                            return e;
                        if (!Zu(e))
                            return t(e, r);
                        for (var i = e.length, o = n ? i : -1, a = hf(e); (n ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
                            ;
                        return e
                    }
                }
                function Vi(t) {
                    return function(n, e, r) {
                        for (var i = -1, o = hf(n), a = r(n), u = a.length; u--; ) {
                            var s = a[t ? u : ++i];
                            if (e(o[s], s, o) === !1)
                                break
                        }
                        return n
                    }
                }
                function Xi(t, n, e) {
                    function r() {
                        return (this && this !== ur && this instanceof r ? o : t).apply(i ? e : this, arguments)
                    }
                    var i = n & yt
                      , o = Ki(t);
                    return r
                }
                function Gi(t) {
                    return function(n) {
                        n = Os(n);
                        var e = q(n) ? tt(n) : it
                          , r = e ? e[0] : n.charAt(0)
                          , i = e ? Ci(e, 1).join("") : n.slice(1);
                        return r[t]() + i
                    }
                }
                function Zi(t) {
                    return function(n) {
                        return y(Tc(cc(n).replace(qe, "")), t, "")
                    }
                }
                function Ki(t) {
                    return function() {
                        var n = arguments;
                        switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0],n[1]);
                        case 3:
                            return new t(n[0],n[1],n[2]);
                        case 4:
                            return new t(n[0],n[1],n[2],n[3]);
                        case 5:
                            return new t(n[0],n[1],n[2],n[3],n[4]);
                        case 6:
                            return new t(n[0],n[1],n[2],n[3],n[4],n[5]);
                        case 7:
                            return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])
                        }
                        var e = _l(t.prototype)
                          , r = t.apply(e, n);
                        return ss(r) ? r : e
                    }
                }
                function Qi(t, n, e) {
                    function r() {
                        for (var o = arguments.length, a = uf(o), s = o, c = Ao(r); s--; )
                            a[s] = arguments[s];
                        var f = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : X(a, c);
                        return (o -= f.length) < e ? co(t, n, no, r.placeholder, it, a, f, it, it, e - o) : u(this && this !== ur && this instanceof r ? i : t, this, a)
                    }
                    var i = Ki(t);
                    return r
                }
                function Ji(t) {
                    return function(n, e, r) {
                        var i = hf(n);
                        if (!Zu(n)) {
                            var o = So(e, 3);
                            n = Ys(n),
                            e = function(t) {
                                return o(i[t], t, i)
                            }
                        }
                        var a = t(n, e, r);
                        return a > -1 ? i[o ? n[a] : a] : it
                    }
                }
                function to(t) {
                    return bo(function(n) {
                        var e = n.length
                          , r = e
                          , o = i.prototype.thru;
                        for (t && n.reverse(); r--; ) {
                            var a = n[r];
                            if ("function" != typeof a)
                                throw new vf(st);
                            if (o && !u && "wrapper" == Mo(a))
                                var u = new i([],!0)
                        }
                        for (r = u ? r : e; ++r < e; ) {
                            a = n[r];
                            var s = Mo(a)
                              , c = "wrapper" == s ? El(a) : it;
                            u = c && Fo(c[0]) && c[1] == (At | bt | wt | St) && !c[4].length && 1 == c[9] ? u[Mo(c[0])].apply(u, c[3]) : 1 == a.length && Fo(a) ? u[s]() : u.thru(a)
                        }
                        return function() {
                            var t = arguments
                              , r = t[0];
                            if (u && 1 == t.length && xh(r))
                                return u.plant(r).value();
                            for (var i = 0, o = e ? n[i].apply(this, t) : r; ++i < e; )
                                o = n[i].call(this, o);
                            return o
                        }
                    })
                }
                function no(t, n, e, r, i, o, a, u, s, c) {
                    function f() {
                        for (var y = arguments.length, _ = uf(y), m = y; m--; )
                            _[m] = arguments[m];
                        if (d)
                            var b = Ao(f)
                              , x = $(_, b);
                        if (r && (_ = Ui(_, r, i, d)),
                        o && (_ = Di(_, o, a, d)),
                        y -= x,
                        d && y < c) {
                            var w = X(_, b);
                            return co(t, n, no, f.placeholder, e, _, w, u, s, c - y)
                        }
                        var M = h ? e : this
                          , A = p ? M[t] : t;
                        return y = _.length,
                        u ? _ = Jo(_, u) : v && y > 1 && _.reverse(),
                        l && s < y && (_.length = s),
                        this && this !== ur && this instanceof f && (A = g || Ki(A)),
                        A.apply(M, _)
                    }
                    var l = n & At
                      , h = n & yt
                      , p = n & _t
                      , d = n & (bt | xt)
                      , v = n & kt
                      , g = p ? it : Ki(t);
                    return f
                }
                function eo(t, n) {
                    return function(e, r) {
                        return Cr(e, t, n(r), {})
                    }
                }
                function ro(t, n) {
                    return function(e, r) {
                        var i;
                        if (e === it && r === it)
                            return n;
                        if (e !== it && (i = e),
                        r !== it) {
                            if (i === it)
                                return r;
                            "string" == typeof e || "string" == typeof r ? (e = gi(e),
                            r = gi(r)) : (e = vi(e),
                            r = vi(r)),
                            i = t(e, r)
                        }
                        return i
                    }
                }
                function io(t) {
                    return bo(function(n) {
                        return n = v(n, z(So())),
                        oi(function(e) {
                            var r = this;
                            return t(n, function(t) {
                                return u(t, r, e)
                            })
                        })
                    })
                }
                function oo(t, n) {
                    n = n === it ? " " : gi(n);
                    var e = n.length;
                    if (e < 2)
                        return e ? ii(n, t) : n;
                    var r = ii(n, qf(t / J(n)));
                    return q(n) ? Ci(tt(r), 0, t).join("") : r.slice(0, t)
                }
                function ao(t, n, e, r) {
                    function i() {
                        for (var n = -1, s = arguments.length, c = -1, f = r.length, l = uf(f + s), h = this && this !== ur && this instanceof i ? a : t; ++c < f; )
                            l[c] = r[c];
                        for (; s--; )
                            l[c++] = arguments[++n];
                        return u(h, o ? e : this, l)
                    }
                    var o = n & yt
                      , a = Ki(t);
                    return i
                }
                function uo(t) {
                    return function(n, e, r) {
                        return r && "number" != typeof r && Do(n, e, r) && (e = r = it),
                        n = Ss(n),
                        e === it ? (e = n,
                        n = 0) : e = Ss(e),
                        r = r === it ? n < e ? 1 : -1 : Ss(r),
                        ri(n, e, r, t)
                    }
                }
                function so(t) {
                    return function(n, e) {
                        return "string" == typeof n && "string" == typeof e || (n = Es(n),
                        e = Es(e)),
                        t(n, e)
                    }
                }
                function co(t, n, e, r, i, o, a, u, s, c) {
                    var f = n & bt
                      , l = f ? a : it
                      , h = f ? it : a
                      , p = f ? o : it
                      , d = f ? it : o;
                    n |= f ? wt : Mt,
                    (n &= ~(f ? Mt : wt)) & mt || (n &= ~(yt | _t));
                    var v = [t, n, i, p, l, d, h, u, s, c]
                      , g = e.apply(it, v);
                    return Fo(t) && Pl(g, v),
                    g.placeholder = r,
                    ta(g, t, n)
                }
                function fo(t) {
                    var n = lf[t];
                    return function(t, e) {
                        if (t = Es(t),
                        e = null == e ? 0 : Kf(ks(e), 292)) {
                            var r = (Os(t) + "e").split("e");
                            return r = (Os(n(r[0] + "e" + (+r[1] + e))) + "e").split("e"),
                            +(r[0] + "e" + (+r[1] - e))
                        }
                        return n(t)
                    }
                }
                function lo(t) {
                    return function(n) {
                        var e = Ol(n);
                        return e == Kt ? W(n) : e == on ? Z(n) : L(n, t(n))
                    }
                }
                function ho(t, n, e, r, i, o, a, u) {
                    var s = n & _t;
                    if (!s && "function" != typeof t)
                        throw new vf(st);
                    var c = r ? r.length : 0;
                    if (c || (n &= ~(wt | Mt),
                    r = i = it),
                    a = a === it ? a : Zf(ks(a), 0),
                    u = u === it ? u : ks(u),
                    c -= i ? i.length : 0,
                    n & Mt) {
                        var f = r
                          , l = i;
                        r = i = it
                    }
                    var h = s ? it : El(t)
                      , p = [t, n, e, r, i, f, l, o, a, u];
                    if (h && Xo(p, h),
                    t = p[0],
                    n = p[1],
                    e = p[2],
                    r = p[3],
                    i = p[4],
                    u = p[9] = p[9] === it ? s ? 0 : t.length : Zf(p[9] - c, 0),
                    !u && n & (bt | xt) && (n &= ~(bt | xt)),
                    n && n != yt)
                        d = n == bt || n == xt ? Qi(t, n, u) : n != wt && n != (yt | wt) || i.length ? no.apply(it, p) : ao(t, n, e, r);
                    else
                        var d = Xi(t, n, e);
                    return ta((h ? Ml : Pl)(d, p), t, n)
                }
                function po(t, n, e, r) {
                    return t === it || Gu(t, _f[e]) && !xf.call(r, e) ? n : t
                }
                function vo(t, n, e, r, i, o) {
                    return ss(t) && ss(n) && (o.set(n, t),
                    Vr(t, n, it, vo, o),
                    o.delete(n)),
                    t
                }
                function go(t) {
                    return ys(t) ? it : t
                }
                function yo(t, n, e, r, i, o) {
                    var a = e & vt
                      , u = t.length
                      , s = n.length;
                    if (u != s && !(a && s > u))
                        return !1;
                    var c = o.get(t);
                    if (c && o.get(n))
                        return c == n;
                    var f = -1
                      , l = !0
                      , h = e & gt ? new _e : it;
                    for (o.set(t, n),
                    o.set(n, t); ++f < u; ) {
                        var p = t[f]
                          , d = n[f];
                        if (r)
                            var v = a ? r(d, p, f, n, t, o) : r(p, d, f, t, n, o);
                        if (v !== it) {
                            if (v)
                                continue;
                            l = !1;
                            break
                        }
                        if (h) {
                            if (!m(n, function(t, n) {
                                if (!j(h, n) && (p === t || i(p, t, e, r, o)))
                                    return h.push(n)
                            })) {
                                l = !1;
                                break
                            }
                        } else if (p !== d && !i(p, d, e, r, o)) {
                            l = !1;
                            break
                        }
                    }
                    return o.delete(t),
                    o.delete(n),
                    l
                }
                function _o(t, n, e, r, i, o, a) {
                    switch (e) {
                    case hn:
                        if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                            return !1;
                        t = t.buffer,
                        n = n.buffer;
                    case ln:
                        return !(t.byteLength != n.byteLength || !o(new Nf(t), new Nf(n)));
                    case Ht:
                    case Wt:
                    case Qt:
                        return Gu(+t, +n);
                    case Xt:
                        return t.name == n.name && t.message == n.message;
                    case rn:
                    case an:
                        return t == n + "";
                    case Kt:
                        var u = W;
                    case on:
                        var s = r & vt;
                        if (u || (u = G),
                        t.size != n.size && !s)
                            return !1;
                        var c = a.get(t);
                        if (c)
                            return c == n;
                        r |= gt,
                        a.set(t, n);
                        var f = yo(u(t), u(n), r, i, o, a);
                        return a.delete(t),
                        f;
                    case un:
                        if (gl)
                            return gl.call(t) == gl.call(n)
                    }
                    return !1
                }
                function mo(t, n, e, r, i, o) {
                    var a = e & vt
                      , u = xo(t)
                      , s = u.length;
                    if (s != xo(n).length && !a)
                        return !1;
                    for (var c = s; c--; ) {
                        var f = u[c];
                        if (!(a ? f in n : xf.call(n, f)))
                            return !1
                    }
                    var l = o.get(t);
                    if (l && o.get(n))
                        return l == n;
                    var h = !0;
                    o.set(t, n),
                    o.set(n, t);
                    for (var p = a; ++c < s; ) {
                        f = u[c];
                        var d = t[f]
                          , v = n[f];
                        if (r)
                            var g = a ? r(v, d, f, n, t, o) : r(d, v, f, t, n, o);
                        if (!(g === it ? d === v || i(d, v, e, r, o) : g)) {
                            h = !1;
                            break
                        }
                        p || (p = "constructor" == f)
                    }
                    if (h && !p) {
                        var y = t.constructor
                          , _ = n.constructor;
                        y != _ && "constructor"in t && "constructor"in n && !("function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _) && (h = !1)
                    }
                    return o.delete(t),
                    o.delete(n),
                    h
                }
                function bo(t) {
                    return zl(Ko(t, it, ya), t + "")
                }
                function xo(t) {
                    return cr(t, Ys, Tl)
                }
                function wo(t) {
                    return cr(t, Hs, Nl)
                }
                function Mo(t) {
                    for (var n = t.name + "", e = cl[n], r = xf.call(cl, n) ? e.length : 0; r--; ) {
                        var i = e[r]
                          , o = i.func;
                        if (null == o || o == t)
                            return i.name
                    }
                    return n
                }
                function Ao(t) {
                    return (xf.call(e, "placeholder") ? e : t).placeholder
                }
                function So() {
                    var t = e.iteratee || zc;
                    return t = t === zc ? $r : t,
                    arguments.length ? t(arguments[0], arguments[1]) : t
                }
                function ko(t, n) {
                    var e = t.__data__;
                    return Bo(n) ? e["string" == typeof n ? "string" : "hash"] : e.map
                }
                function Co(t) {
                    for (var n = Ys(t), e = n.length; e--; ) {
                        var r = n[e]
                          , i = t[r];
                        n[e] = [r, i, Ho(i)]
                    }
                    return n
                }
                function Eo(t, n) {
                    var e = F(t, n);
                    return Ir(e) ? e : it
                }
                function To(t) {
                    var n = xf.call(t, Uf)
                      , e = t[Uf];
                    try {
                        t[Uf] = it;
                        var r = !0
                    } catch (t) {}
                    var i = Af.call(t);
                    return r && (n ? t[Uf] = e : delete t[Uf]),
                    i
                }
                function No(t, n, e) {
                    for (var r = -1, i = e.length; ++r < i; ) {
                        var o = e[r]
                          , a = o.size;
                        switch (o.type) {
                        case "drop":
                            t += a;
                            break;
                        case "dropRight":
                            n -= a;
                            break;
                        case "take":
                            n = Kf(n, t + a);
                            break;
                        case "takeRight":
                            t = Zf(t, n - a)
                        }
                    }
                    return {
                        start: t,
                        end: n
                    }
                }
                function Oo(t) {
                    var n = t.match(Fn);
                    return n ? n[1].split(qn) : []
                }
                function Ro(t, n, e) {
                    n = ki(n, t);
                    for (var r = -1, i = n.length, o = !1; ++r < i; ) {
                        var a = ra(n[r]);
                        if (!(o = null != t && e(t, a)))
                            break;
                        t = t[a]
                    }
                    return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && us(i) && Uo(a, i) && (xh(t) || bh(t))
                }
                function Po(t) {
                    var n = t.length
                      , e = t.constructor(n);
                    return n && "string" == typeof t[0] && xf.call(t, "index") && (e.index = t.index,
                    e.input = t.input),
                    e
                }
                function Lo(t) {
                    return "function" != typeof t.constructor || Yo(t) ? {} : _l(Rf(t))
                }
                function zo(t, n, e, r) {
                    var i = t.constructor;
                    switch (n) {
                    case ln:
                        return Ti(t);
                    case Ht:
                    case Wt:
                        return new i(+t);
                    case hn:
                        return Ni(t, r);
                    case pn:
                    case dn:
                    case vn:
                    case gn:
                    case yn:
                    case _n:
                    case mn:
                    case bn:
                    case xn:
                        return zi(t, r);
                    case Kt:
                        return Oi(t, r, e);
                    case Qt:
                    case an:
                        return new i(t);
                    case rn:
                        return Ri(t);
                    case on:
                        return Pi(t, r, e);
                    case un:
                        return Li(t)
                    }
                }
                function Io(t, n) {
                    var e = n.length;
                    if (!e)
                        return t;
                    var r = e - 1;
                    return n[r] = (e > 1 ? "& " : "") + n[r],
                    n = n.join(e > 2 ? ", " : " "),
                    t.replace(Bn, "{\n/* [wrapped with " + n + "] */\n")
                }
                function jo(t) {
                    return xh(t) || bh(t) || !!(If && t && t[If])
                }
                function Uo(t, n) {
                    return !!(n = null == n ? zt : n) && ("number" == typeof t || Qn.test(t)) && t > -1 && t % 1 == 0 && t < n
                }
                function Do(t, n, e) {
                    if (!ss(e))
                        return !1;
                    var r = typeof n;
                    return !!("number" == r ? Zu(e) && Uo(n, e.length) : "string" == r && n in e) && Gu(e[n], t)
                }
                function $o(t, n) {
                    if (xh(t))
                        return !1;
                    var e = typeof t;
                    return !("number" != e && "symbol" != e && "boolean" != e && null != t && !bs(t)) || (Pn.test(t) || !Rn.test(t) || null != n && t in hf(n))
                }
                function Bo(t) {
                    var n = typeof t;
                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t
                }
                function Fo(t) {
                    var n = Mo(t)
                      , r = e[n];
                    if ("function" != typeof r || !(n in b.prototype))
                        return !1;
                    if (t === r)
                        return !0;
                    var i = El(r);
                    return !!i && t === i[0]
                }
                function qo(t) {
                    return !!Mf && Mf in t
                }
                function Yo(t) {
                    var n = t && t.constructor;
                    return t === ("function" == typeof n && n.prototype || _f)
                }
                function Ho(t) {
                    return t === t && !ss(t)
                }
                function Wo(t, n) {
                    return function(e) {
                        return null != e && (e[t] === n && (n !== it || t in hf(e)))
                    }
                }
                function Vo(t) {
                    var n = zu(t, function(t) {
                        return e.size === ft && e.clear(),
                        t
                    })
                      , e = n.cache;
                    return n
                }
                function Xo(t, n) {
                    var e = t[1]
                      , r = n[1]
                      , i = e | r
                      , o = i < (yt | _t | At)
                      , a = r == At && e == bt || r == At && e == St && t[7].length <= n[8] || r == (At | St) && n[7].length <= n[8] && e == bt;
                    if (!o && !a)
                        return t;
                    r & yt && (t[2] = n[2],
                    i |= e & yt ? 0 : mt);
                    var u = n[3];
                    if (u) {
                        var s = t[3];
                        t[3] = s ? Ui(s, u, n[4]) : u,
                        t[4] = s ? X(t[3], lt) : n[4]
                    }
                    return u = n[5],
                    u && (s = t[5],
                    t[5] = s ? Di(s, u, n[6]) : u,
                    t[6] = s ? X(t[5], lt) : n[6]),
                    u = n[7],
                    u && (t[7] = u),
                    r & At && (t[8] = null == t[8] ? n[8] : Kf(t[8], n[8])),
                    null == t[9] && (t[9] = n[9]),
                    t[0] = n[0],
                    t[1] = i,
                    t
                }
                function Go(t) {
                    var n = [];
                    if (null != t)
                        for (var e in hf(t))
                            n.push(e);
                    return n
                }
                function Zo(t) {
                    return Af.call(t)
                }
                function Ko(t, n, e) {
                    return n = Zf(n === it ? t.length - 1 : n, 0),
                    function() {
                        for (var r = arguments, i = -1, o = Zf(r.length - n, 0), a = uf(o); ++i < o; )
                            a[i] = r[n + i];
                        i = -1;
                        for (var s = uf(n + 1); ++i < n; )
                            s[i] = r[i];
                        return s[n] = e(a),
                        u(t, this, s)
                    }
                }
                function Qo(t, n) {
                    return n.length < 2 ? t : sr(t, fi(n, 0, -1))
                }
                function Jo(t, n) {
                    for (var e = t.length, r = Kf(n.length, e), i = $i(t); r--; ) {
                        var o = n[r];
                        t[r] = Uo(o, e) ? i[o] : it
                    }
                    return t
                }
                function ta(t, n, e) {
                    var r = n + "";
                    return zl(t, Io(r, oa(Oo(r), e)))
                }
                function na(t) {
                    var n = 0
                      , e = 0;
                    return function() {
                        var r = Qf()
                          , i = Nt - (r - e);
                        if (e = r,
                        i > 0) {
                            if (++n >= Tt)
                                return arguments[0]
                        } else
                            n = 0;
                        return t.apply(it, arguments)
                    }
                }
                function ea(t, n) {
                    var e = -1
                      , r = t.length
                      , i = r - 1;
                    for (n = n === it ? r : n; ++e < n; ) {
                        var o = ei(e, i)
                          , a = t[o];
                        t[o] = t[e],
                        t[e] = a
                    }
                    return t.length = n,
                    t
                }
                function ra(t) {
                    if ("string" == typeof t || bs(t))
                        return t;
                    var n = t + "";
                    return "0" == n && 1 / t == -Lt ? "-0" : n
                }
                function ia(t) {
                    if (null != t) {
                        try {
                            return bf.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                function oa(t, n) {
                    return c(Bt, function(e) {
                        var r = "_." + e[0];
                        n & e[1] && !p(t, r) && t.push(r)
                    }),
                    t.sort()
                }
                function aa(t) {
                    if (t instanceof b)
                        return t.clone();
                    var n = new i(t.__wrapped__,t.__chain__);
                    return n.__actions__ = $i(t.__actions__),
                    n.__index__ = t.__index__,
                    n.__values__ = t.__values__,
                    n
                }
                function ua(t, n, e) {
                    n = (e ? Do(t, n, e) : n === it) ? 1 : Zf(ks(n), 0);
                    var r = null == t ? 0 : t.length;
                    if (!r || n < 1)
                        return [];
                    for (var i = 0, o = 0, a = uf(qf(r / n)); i < r; )
                        a[o++] = fi(t, i, i += n);
                    return a
                }
                function sa(t) {
                    for (var n = -1, e = null == t ? 0 : t.length, r = 0, i = []; ++n < e; ) {
                        var o = t[n];
                        o && (i[r++] = o)
                    }
                    return i
                }
                function ca() {
                    var t = arguments.length;
                    if (!t)
                        return [];
                    for (var n = uf(t - 1), e = arguments[0], r = t; r--; )
                        n[r - 1] = arguments[r];
                    return g(xh(e) ? $i(e) : [e], nr(n, 1))
                }
                function fa(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r ? (n = e || n === it ? 1 : ks(n),
                    fi(t, n < 0 ? 0 : n, r)) : []
                }
                function la(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r ? (n = e || n === it ? 1 : ks(n),
                    n = r - n,
                    fi(t, 0, n < 0 ? 0 : n)) : []
                }
                function ha(t, n) {
                    return t && t.length ? bi(t, So(n, 3), !0, !0) : []
                }
                function pa(t, n) {
                    return t && t.length ? bi(t, So(n, 3), !0) : []
                }
                function da(t, n, e, r) {
                    var i = null == t ? 0 : t.length;
                    return i ? (e && "number" != typeof e && Do(t, n, e) && (e = 0,
                    r = i),
                    Je(t, n, e, r)) : []
                }
                function va(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r)
                        return -1;
                    var i = null == e ? 0 : ks(e);
                    return i < 0 && (i = Zf(r + i, 0)),
                    M(t, So(n, 3), i)
                }
                function ga(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r)
                        return -1;
                    var i = r - 1;
                    return e !== it && (i = ks(e),
                    i = e < 0 ? Zf(r + i, 0) : Kf(i, r - 1)),
                    M(t, So(n, 3), i, !0)
                }
                function ya(t) {
                    return (null == t ? 0 : t.length) ? nr(t, 1) : []
                }
                function _a(t) {
                    return (null == t ? 0 : t.length) ? nr(t, Lt) : []
                }
                function ma(t, n) {
                    return (null == t ? 0 : t.length) ? (n = n === it ? 1 : ks(n),
                    nr(t, n)) : []
                }
                function ba(t) {
                    for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e; ) {
                        var i = t[n];
                        r[i[0]] = i[1]
                    }
                    return r
                }
                function xa(t) {
                    return t && t.length ? t[0] : it
                }
                function wa(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r)
                        return -1;
                    var i = null == e ? 0 : ks(e);
                    return i < 0 && (i = Zf(r + i, 0)),
                    A(t, n, i)
                }
                function Ma(t) {
                    return (null == t ? 0 : t.length) ? fi(t, 0, -1) : []
                }
                function Aa(t, n) {
                    return null == t ? "" : Xf.call(t, n)
                }
                function Sa(t) {
                    var n = null == t ? 0 : t.length;
                    return n ? t[n - 1] : it
                }
                function ka(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r)
                        return -1;
                    var i = r;
                    return e !== it && (i = ks(e),
                    i = i < 0 ? Zf(r + i, 0) : Kf(i, r - 1)),
                    n === n ? Q(t, n, i) : M(t, k, i, !0)
                }
                function Ca(t, n) {
                    return t && t.length ? Gr(t, ks(n)) : it
                }
                function Ea(t, n) {
                    return t && t.length && n && n.length ? ti(t, n) : t
                }
                function Ta(t, n, e) {
                    return t && t.length && n && n.length ? ti(t, n, So(e, 2)) : t
                }
                function Na(t, n, e) {
                    return t && t.length && n && n.length ? ti(t, n, it, e) : t
                }
                function Oa(t, n) {
                    var e = [];
                    if (!t || !t.length)
                        return e;
                    var r = -1
                      , i = []
                      , o = t.length;
                    for (n = So(n, 3); ++r < o; ) {
                        var a = t[r];
                        n(a, r, t) && (e.push(a),
                        i.push(r))
                    }
                    return ni(t, i),
                    e
                }
                function Ra(t) {
                    return null == t ? t : nl.call(t)
                }
                function Pa(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r ? (e && "number" != typeof e && Do(t, n, e) ? (n = 0,
                    e = r) : (n = null == n ? 0 : ks(n),
                    e = e === it ? r : ks(e)),
                    fi(t, n, e)) : []
                }
                function La(t, n) {
                    return hi(t, n)
                }
                function za(t, n, e) {
                    return pi(t, n, So(e, 2))
                }
                function Ia(t, n) {
                    var e = null == t ? 0 : t.length;
                    if (e) {
                        var r = hi(t, n);
                        if (r < e && Gu(t[r], n))
                            return r
                    }
                    return -1
                }
                function ja(t, n) {
                    return hi(t, n, !0)
                }
                function Ua(t, n, e) {
                    return pi(t, n, So(e, 2), !0)
                }
                function Da(t, n) {
                    if (null == t ? 0 : t.length) {
                        var e = hi(t, n, !0) - 1;
                        if (Gu(t[e], n))
                            return e
                    }
                    return -1
                }
                function $a(t) {
                    return t && t.length ? di(t) : []
                }
                function Ba(t, n) {
                    return t && t.length ? di(t, So(n, 2)) : []
                }
                function Fa(t) {
                    var n = null == t ? 0 : t.length;
                    return n ? fi(t, 1, n) : []
                }
                function qa(t, n, e) {
                    return t && t.length ? (n = e || n === it ? 1 : ks(n),
                    fi(t, 0, n < 0 ? 0 : n)) : []
                }
                function Ya(t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r ? (n = e || n === it ? 1 : ks(n),
                    n = r - n,
                    fi(t, n < 0 ? 0 : n, r)) : []
                }
                function Ha(t, n) {
                    return t && t.length ? bi(t, So(n, 3), !1, !0) : []
                }
                function Wa(t, n) {
                    return t && t.length ? bi(t, So(n, 3)) : []
                }
                function Va(t) {
                    return t && t.length ? yi(t) : []
                }
                function Xa(t, n) {
                    return t && t.length ? yi(t, So(n, 2)) : []
                }
                function Ga(t, n) {
                    return n = "function" == typeof n ? n : it,
                    t && t.length ? yi(t, it, n) : []
                }
                function Za(t) {
                    if (!t || !t.length)
                        return [];
                    var n = 0;
                    return t = h(t, function(t) {
                        if (Ku(t))
                            return n = Zf(t.length, n),
                            !0
                    }),
                    P(n, function(n) {
                        return v(t, E(n))
                    })
                }
                function Ka(t, n) {
                    if (!t || !t.length)
                        return [];
                    var e = Za(t);
                    return null == n ? e : v(e, function(t) {
                        return u(n, it, t)
                    })
                }
                function Qa(t, n) {
                    return Mi(t || [], n || [], Re)
                }
                function Ja(t, n) {
                    return Mi(t || [], n || [], si)
                }
                function tu(t) {
                    var n = e(t);
                    return n.__chain__ = !0,
                    n
                }
                function nu(t, n) {
                    return n(t),
                    t
                }
                function eu(t, n) {
                    return n(t)
                }
                function ru() {
                    return tu(this)
                }
                function iu() {
                    return new i(this.value(),this.__chain__)
                }
                function ou() {
                    this.__values__ === it && (this.__values__ = As(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                        done: t,
                        value: t ? it : this.__values__[this.__index__++]
                    }
                }
                function au() {
                    return this
                }
                function uu(t) {
                    for (var n, e = this; e instanceof r; ) {
                        var i = aa(e);
                        i.__index__ = 0,
                        i.__values__ = it,
                        n ? o.__wrapped__ = i : n = i;
                        var o = i;
                        e = e.__wrapped__
                    }
                    return o.__wrapped__ = t,
                    n
                }
                function su() {
                    var t = this.__wrapped__;
                    if (t instanceof b) {
                        var n = t;
                        return this.__actions__.length && (n = new b(this)),
                        n = n.reverse(),
                        n.__actions__.push({
                            func: eu,
                            args: [Ra],
                            thisArg: it
                        }),
                        new i(n,this.__chain__)
                    }
                    return this.thru(Ra)
                }
                function cu() {
                    return xi(this.__wrapped__, this.__actions__)
                }
                function fu(t, n, e) {
                    var r = xh(t) ? l : Ve;
                    return e && Do(t, n, e) && (n = it),
                    r(t, So(n, 3))
                }
                function lu(t, n) {
                    return (xh(t) ? h : tr)(t, So(n, 3))
                }
                function hu(t, n) {
                    return nr(_u(t, n), 1)
                }
                function pu(t, n) {
                    return nr(_u(t, n), Lt)
                }
                function du(t, n, e) {
                    return e = e === it ? 1 : ks(e),
                    nr(_u(t, n), e)
                }
                function vu(t, n) {
                    return (xh(t) ? c : ml)(t, So(n, 3))
                }
                function gu(t, n) {
                    return (xh(t) ? f : bl)(t, So(n, 3))
                }
                function yu(t, n, e, r) {
                    t = Zu(t) ? t : rc(t),
                    e = e && !r ? ks(e) : 0;
                    var i = t.length;
                    return e < 0 && (e = Zf(i + e, 0)),
                    ms(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && A(t, n, e) > -1
                }
                function _u(t, n) {
                    return (xh(t) ? v : Yr)(t, So(n, 3))
                }
                function mu(t, n, e, r) {
                    return null == t ? [] : (xh(n) || (n = null == n ? [] : [n]),
                    e = r ? it : e,
                    xh(e) || (e = null == e ? [] : [e]),
                    Zr(t, n, e))
                }
                function bu(t, n, e) {
                    var r = xh(t) ? y : N
                      , i = arguments.length < 3;
                    return r(t, So(n, 4), e, i, ml)
                }
                function xu(t, n, e) {
                    var r = xh(t) ? _ : N
                      , i = arguments.length < 3;
                    return r(t, So(n, 4), e, i, bl)
                }
                function wu(t, n) {
                    return (xh(t) ? h : tr)(t, Iu(So(n, 3)))
                }
                function Mu(t) {
                    return (xh(t) ? Ee : ai)(t)
                }
                function Au(t, n, e) {
                    return n = (e ? Do(t, n, e) : n === it) ? 1 : ks(n),
                    (xh(t) ? Te : ui)(t, n)
                }
                function Su(t) {
                    return (xh(t) ? Ne : ci)(t)
                }
                function ku(t) {
                    if (null == t)
                        return 0;
                    if (Zu(t))
                        return ms(t) ? J(t) : t.length;
                    var n = Ol(t);
                    return n == Kt || n == on ? t.size : Br(t).length
                }
                function Cu(t, n, e) {
                    var r = xh(t) ? m : li;
                    return e && Do(t, n, e) && (n = it),
                    r(t, So(n, 3))
                }
                function Eu(t, n) {
                    if ("function" != typeof n)
                        throw new vf(st);
                    return t = ks(t),
                    function() {
                        if (--t < 1)
                            return n.apply(this, arguments)
                    }
                }
                function Tu(t, n, e) {
                    return n = e ? it : n,
                    n = t && null == n ? t.length : n,
                    ho(t, At, it, it, it, it, n)
                }
                function Nu(t, n) {
                    var e;
                    if ("function" != typeof n)
                        throw new vf(st);
                    return t = ks(t),
                    function() {
                        return --t > 0 && (e = n.apply(this, arguments)),
                        t <= 1 && (n = it),
                        e
                    }
                }
                function Ou(t, n, e) {
                    n = e ? it : n;
                    var r = ho(t, bt, it, it, it, it, it, n);
                    return r.placeholder = Ou.placeholder,
                    r
                }
                function Ru(t, n, e) {
                    n = e ? it : n;
                    var r = ho(t, xt, it, it, it, it, it, n);
                    return r.placeholder = Ru.placeholder,
                    r
                }
                function Pu(t, n, e) {
                    function r(n) {
                        var e = h
                          , r = p;
                        return h = p = it,
                        _ = n,
                        v = t.apply(r, e)
                    }
                    function i(t) {
                        return _ = t,
                        g = Ll(u, n),
                        m ? r(t) : v
                    }
                    function o(t) {
                        var e = t - y
                          , r = t - _
                          , i = n - e;
                        return b ? Kf(i, d - r) : i
                    }
                    function a(t) {
                        var e = t - y
                          , r = t - _;
                        return y === it || e >= n || e < 0 || b && r >= d
                    }
                    function u() {
                        var t = ch();
                        if (a(t))
                            return s(t);
                        g = Ll(u, o(t))
                    }
                    function s(t) {
                        return g = it,
                        x && h ? r(t) : (h = p = it,
                        v)
                    }
                    function c() {
                        g !== it && kl(g),
                        _ = 0,
                        h = y = p = g = it
                    }
                    function f() {
                        return g === it ? v : s(ch())
                    }
                    function l() {
                        var t = ch()
                          , e = a(t);
                        if (h = arguments,
                        p = this,
                        y = t,
                        e) {
                            if (g === it)
                                return i(y);
                            if (b)
                                return g = Ll(u, n),
                                r(y)
                        }
                        return g === it && (g = Ll(u, n)),
                        v
                    }
                    var h, p, d, v, g, y, _ = 0, m = !1, b = !1, x = !0;
                    if ("function" != typeof t)
                        throw new vf(st);
                    return n = Es(n) || 0,
                    ss(e) && (m = !!e.leading,
                    b = "maxWait"in e,
                    d = b ? Zf(Es(e.maxWait) || 0, n) : d,
                    x = "trailing"in e ? !!e.trailing : x),
                    l.cancel = c,
                    l.flush = f,
                    l
                }
                function Lu(t) {
                    return ho(t, kt)
                }
                function zu(t, n) {
                    if ("function" != typeof t || null != n && "function" != typeof n)
                        throw new vf(st);
                    var e = function() {
                        var r = arguments
                          , i = n ? n.apply(this, r) : r[0]
                          , o = e.cache;
                        if (o.has(i))
                            return o.get(i);
                        var a = t.apply(this, r);
                        return e.cache = o.set(i, a) || o,
                        a
                    };
                    return e.cache = new (zu.Cache || he),
                    e
                }
                function Iu(t) {
                    if ("function" != typeof t)
                        throw new vf(st);
                    return function() {
                        var n = arguments;
                        switch (n.length) {
                        case 0:
                            return !t.call(this);
                        case 1:
                            return !t.call(this, n[0]);
                        case 2:
                            return !t.call(this, n[0], n[1]);
                        case 3:
                            return !t.call(this, n[0], n[1], n[2])
                        }
                        return !t.apply(this, n)
                    }
                }
                function ju(t) {
                    return Nu(2, t)
                }
                function Uu(t, n) {
                    if ("function" != typeof t)
                        throw new vf(st);
                    return n = n === it ? n : ks(n),
                    oi(t, n)
                }
                function Du(t, n) {
                    if ("function" != typeof t)
                        throw new vf(st);
                    return n = null == n ? 0 : Zf(ks(n), 0),
                    oi(function(e) {
                        var r = e[n]
                          , i = Ci(e, 0, n);
                        return r && g(i, r),
                        u(t, this, i)
                    })
                }
                function $u(t, n, e) {
                    var r = !0
                      , i = !0;
                    if ("function" != typeof t)
                        throw new vf(st);
                    return ss(e) && (r = "leading"in e ? !!e.leading : r,
                    i = "trailing"in e ? !!e.trailing : i),
                    Pu(t, n, {
                        leading: r,
                        maxWait: n,
                        trailing: i
                    })
                }
                function Bu(t) {
                    return Tu(t, 1)
                }
                function Fu(t, n) {
                    return vh(Si(n), t)
                }
                function qu() {
                    if (!arguments.length)
                        return [];
                    var t = arguments[0];
                    return xh(t) ? t : [t]
                }
                function Yu(t) {
                    return $e(t, dt)
                }
                function Hu(t, n) {
                    return n = "function" == typeof n ? n : it,
                    $e(t, dt, n)
                }
                function Wu(t) {
                    return $e(t, ht | dt)
                }
                function Vu(t, n) {
                    return n = "function" == typeof n ? n : it,
                    $e(t, ht | dt, n)
                }
                function Xu(t, n) {
                    return null == n || Fe(t, n, Ys(n))
                }
                function Gu(t, n) {
                    return t === n || t !== t && n !== n
                }
                function Zu(t) {
                    return null != t && us(t.length) && !os(t)
                }
                function Ku(t) {
                    return cs(t) && Zu(t)
                }
                function Qu(t) {
                    return t === !0 || t === !1 || cs(t) && lr(t) == Ht
                }
                function Ju(t) {
                    return cs(t) && 1 === t.nodeType && !ys(t)
                }
                function ts(t) {
                    if (null == t)
                        return !0;
                    if (Zu(t) && (xh(t) || "string" == typeof t || "function" == typeof t.splice || Mh(t) || Eh(t) || bh(t)))
                        return !t.length;
                    var n = Ol(t);
                    if (n == Kt || n == on)
                        return !t.size;
                    if (Yo(t))
                        return !Br(t).length;
                    for (var e in t)
                        if (xf.call(t, e))
                            return !1;
                    return !0
                }
                function ns(t, n) {
                    return Rr(t, n)
                }
                function es(t, n, e) {
                    e = "function" == typeof e ? e : it;
                    var r = e ? e(t, n) : it;
                    return r === it ? Rr(t, n, it, e) : !!r
                }
                function rs(t) {
                    if (!cs(t))
                        return !1;
                    var n = lr(t);
                    return n == Xt || n == Vt || "string" == typeof t.message && "string" == typeof t.name && !ys(t)
                }
                function is(t) {
                    return "number" == typeof t && Vf(t)
                }
                function os(t) {
                    if (!ss(t))
                        return !1;
                    var n = lr(t);
                    return n == Gt || n == Zt || n == Yt || n == en
                }
                function as(t) {
                    return "number" == typeof t && t == ks(t)
                }
                function us(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= zt
                }
                function ss(t) {
                    var n = typeof t;
                    return null != t && ("object" == n || "function" == n)
                }
                function cs(t) {
                    return null != t && "object" == typeof t
                }
                function fs(t, n) {
                    return t === n || zr(t, n, Co(n))
                }
                function ls(t, n, e) {
                    return e = "function" == typeof e ? e : it,
                    zr(t, n, Co(n), e)
                }
                function hs(t) {
                    return gs(t) && t != +t
                }
                function ps(t) {
                    if (Rl(t))
                        throw new cf(ut);
                    return Ir(t)
                }
                function ds(t) {
                    return null === t
                }
                function vs(t) {
                    return null == t
                }
                function gs(t) {
                    return "number" == typeof t || cs(t) && lr(t) == Qt
                }
                function ys(t) {
                    if (!cs(t) || lr(t) != tn)
                        return !1;
                    var n = Rf(t);
                    if (null === n)
                        return !0;
                    var e = xf.call(n, "constructor") && n.constructor;
                    return "function" == typeof e && e instanceof e && bf.call(e) == Sf
                }
                function _s(t) {
                    return as(t) && t >= -zt && t <= zt
                }
                function ms(t) {
                    return "string" == typeof t || !xh(t) && cs(t) && lr(t) == an
                }
                function bs(t) {
                    return "symbol" == typeof t || cs(t) && lr(t) == un
                }
                function xs(t) {
                    return t === it
                }
                function ws(t) {
                    return cs(t) && Ol(t) == cn
                }
                function Ms(t) {
                    return cs(t) && lr(t) == fn
                }
                function As(t) {
                    if (!t)
                        return [];
                    if (Zu(t))
                        return ms(t) ? tt(t) : $i(t);
                    if (jf && t[jf])
                        return H(t[jf]());
                    var n = Ol(t);
                    return (n == Kt ? W : n == on ? G : rc)(t)
                }
                function Ss(t) {
                    if (!t)
                        return 0 === t ? t : 0;
                    if ((t = Es(t)) === Lt || t === -Lt) {
                        return (t < 0 ? -1 : 1) * It
                    }
                    return t === t ? t : 0
                }
                function ks(t) {
                    var n = Ss(t)
                      , e = n % 1;
                    return n === n ? e ? n - e : n : 0
                }
                function Cs(t) {
                    return t ? De(ks(t), 0, Ut) : 0
                }
                function Es(t) {
                    if ("number" == typeof t)
                        return t;
                    if (bs(t))
                        return jt;
                    if (ss(t)) {
                        var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = ss(n) ? n + "" : n
                    }
                    if ("string" != typeof t)
                        return 0 === t ? t : +t;
                    t = t.replace(Un, "");
                    var e = Gn.test(t);
                    return e || Kn.test(t) ? ir(t.slice(2), e ? 2 : 8) : Xn.test(t) ? jt : +t
                }
                function Ts(t) {
                    return Bi(t, Hs(t))
                }
                function Ns(t) {
                    return t ? De(ks(t), -zt, zt) : 0 === t ? t : 0
                }
                function Os(t) {
                    return null == t ? "" : gi(t)
                }
                function Rs(t, n) {
                    var e = _l(t);
                    return null == n ? e : ze(e, n)
                }
                function Ps(t, n) {
                    return w(t, So(n, 3), er)
                }
                function Ls(t, n) {
                    return w(t, So(n, 3), or)
                }
                function zs(t, n) {
                    return null == t ? t : xl(t, So(n, 3), Hs)
                }
                function Is(t, n) {
                    return null == t ? t : wl(t, So(n, 3), Hs)
                }
                function js(t, n) {
                    return t && er(t, So(n, 3))
                }
                function Us(t, n) {
                    return t && or(t, So(n, 3))
                }
                function Ds(t) {
                    return null == t ? [] : ar(t, Ys(t))
                }
                function $s(t) {
                    return null == t ? [] : ar(t, Hs(t))
                }
                function Bs(t, n, e) {
                    var r = null == t ? it : sr(t, n);
                    return r === it ? e : r
                }
                function Fs(t, n) {
                    return null != t && Ro(t, n, mr)
                }
                function qs(t, n) {
                    return null != t && Ro(t, n, Mr)
                }
                function Ys(t) {
                    return Zu(t) ? Ce(t) : Br(t)
                }
                function Hs(t) {
                    return Zu(t) ? Ce(t, !0) : Fr(t)
                }
                function Ws(t, n) {
                    var e = {};
                    return n = So(n, 3),
                    er(t, function(t, r, i) {
                        je(e, n(t, r, i), t)
                    }),
                    e
                }
                function Vs(t, n) {
                    var e = {};
                    return n = So(n, 3),
                    er(t, function(t, r, i) {
                        je(e, r, n(t, r, i))
                    }),
                    e
                }
                function Xs(t, n) {
                    return Gs(t, Iu(So(n)))
                }
                function Gs(t, n) {
                    if (null == t)
                        return {};
                    var e = v(wo(t), function(t) {
                        return [t]
                    });
                    return n = So(n),
                    Qr(t, e, function(t, e) {
                        return n(t, e[0])
                    })
                }
                function Zs(t, n, e) {
                    n = ki(n, t);
                    var r = -1
                      , i = n.length;
                    for (i || (i = 1,
                    t = it); ++r < i; ) {
                        var o = null == t ? it : t[ra(n[r])];
                        o === it && (r = i,
                        o = e),
                        t = os(o) ? o.call(t) : o
                    }
                    return t
                }
                function Ks(t, n, e) {
                    return null == t ? t : si(t, n, e)
                }
                function Qs(t, n, e, r) {
                    return r = "function" == typeof r ? r : it,
                    null == t ? t : si(t, n, e, r)
                }
                function Js(t, n, e) {
                    var r = xh(t)
                      , i = r || Mh(t) || Eh(t);
                    if (n = So(n, 4),
                    null == e) {
                        var o = t && t.constructor;
                        e = i ? r ? new o : [] : ss(t) && os(o) ? _l(Rf(t)) : {}
                    }
                    return (i ? c : er)(t, function(t, r, i) {
                        return n(e, t, r, i)
                    }),
                    e
                }
                function tc(t, n) {
                    return null == t || _i(t, n)
                }
                function nc(t, n, e) {
                    return null == t ? t : mi(t, n, Si(e))
                }
                function ec(t, n, e, r) {
                    return r = "function" == typeof r ? r : it,
                    null == t ? t : mi(t, n, Si(e), r)
                }
                function rc(t) {
                    return null == t ? [] : I(t, Ys(t))
                }
                function ic(t) {
                    return null == t ? [] : I(t, Hs(t))
                }
                function oc(t, n, e) {
                    return e === it && (e = n,
                    n = it),
                    e !== it && (e = Es(e),
                    e = e === e ? e : 0),
                    n !== it && (n = Es(n),
                    n = n === n ? n : 0),
                    De(Es(t), n, e)
                }
                function ac(t, n, e) {
                    return n = Ss(n),
                    e === it ? (e = n,
                    n = 0) : e = Ss(e),
                    t = Es(t),
                    Sr(t, n, e)
                }
                function uc(t, n, e) {
                    if (e && "boolean" != typeof e && Do(t, n, e) && (n = e = it),
                    e === it && ("boolean" == typeof n ? (e = n,
                    n = it) : "boolean" == typeof t && (e = t,
                    t = it)),
                    t === it && n === it ? (t = 0,
                    n = 1) : (t = Ss(t),
                    n === it ? (n = t,
                    t = 0) : n = Ss(n)),
                    t > n) {
                        var r = t;
                        t = n,
                        n = r
                    }
                    if (e || t % 1 || n % 1) {
                        var i = tl();
                        return Kf(t + i * (n - t + rr("1e-" + ((i + "").length - 1))), n)
                    }
                    return ei(t, n)
                }
                function sc(t) {
                    return tp(Os(t).toLowerCase())
                }
                function cc(t) {
                    return (t = Os(t)) && t.replace(Jn, br).replace(Ye, "")
                }
                function fc(t, n, e) {
                    t = Os(t),
                    n = gi(n);
                    var r = t.length;
                    e = e === it ? r : De(ks(e), 0, r);
                    var i = e;
                    return (e -= n.length) >= 0 && t.slice(e, i) == n
                }
                function lc(t) {
                    return t = Os(t),
                    t && En.test(t) ? t.replace(kn, xr) : t
                }
                function hc(t) {
                    return t = Os(t),
                    t && jn.test(t) ? t.replace(In, "\\$&") : t
                }
                function pc(t, n, e) {
                    t = Os(t),
                    n = ks(n);
                    var r = n ? J(t) : 0;
                    if (!n || r >= n)
                        return t;
                    var i = (n - r) / 2;
                    return oo(Yf(i), e) + t + oo(qf(i), e)
                }
                function dc(t, n, e) {
                    t = Os(t),
                    n = ks(n);
                    var r = n ? J(t) : 0;
                    return n && r < n ? t + oo(n - r, e) : t
                }
                function vc(t, n, e) {
                    t = Os(t),
                    n = ks(n);
                    var r = n ? J(t) : 0;
                    return n && r < n ? oo(n - r, e) + t : t
                }
                function gc(t, n, e) {
                    return e || null == n ? n = 0 : n && (n = +n),
                    Jf(Os(t).replace(Dn, ""), n || 0)
                }
                function yc(t, n, e) {
                    return n = (e ? Do(t, n, e) : n === it) ? 1 : ks(n),
                    ii(Os(t), n)
                }
                function _c() {
                    var t = arguments
                      , n = Os(t[0]);
                    return t.length < 3 ? n : n.replace(t[1], t[2])
                }
                function mc(t, n, e) {
                    return e && "number" != typeof e && Do(t, n, e) && (n = e = it),
                    (e = e === it ? Ut : e >>> 0) ? (t = Os(t),
                    t && ("string" == typeof n || null != n && !kh(n)) && !(n = gi(n)) && q(t) ? Ci(tt(t), 0, e) : t.split(n, e)) : []
                }
                function bc(t, n, e) {
                    return t = Os(t),
                    e = null == e ? 0 : De(ks(e), 0, t.length),
                    n = gi(n),
                    t.slice(e, e + n.length) == n
                }
                function xc(t, n, r) {
                    var i = e.templateSettings;
                    r && Do(t, n, r) && (n = it),
                    t = Os(t),
                    n = Ph({}, n, i, po);
                    var o, a, u = Ph({}, n.imports, i.imports, po), s = Ys(u), c = I(u, s), f = 0, l = n.interpolate || te, h = "__p += '", p = pf((n.escape || te).source + "|" + l.source + "|" + (l === On ? Wn : te).source + "|" + (n.evaluate || te).source + "|$", "g"), d = "//# sourceURL=" + ("sourceURL"in n ? n.sourceURL : "lodash.templateSources[" + ++Ze + "]") + "\n";
                    t.replace(p, function(n, e, r, i, u, s) {
                        return r || (r = i),
                        h += t.slice(f, s).replace(ne, B),
                        e && (o = !0,
                        h += "' +\n__e(" + e + ") +\n'"),
                        u && (a = !0,
                        h += "';\n" + u + ";\n__p += '"),
                        r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                        f = s + n.length,
                        n
                    }),
                    h += "';\n";
                    var v = n.variable;
                    v || (h = "with (obj) {\n" + h + "\n}\n"),
                    h = (a ? h.replace(wn, "") : h).replace(Mn, "$1").replace(An, "$1;"),
                    h = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                    var g = np(function() {
                        return ff(s, d + "return " + h).apply(it, c)
                    });
                    if (g.source = h,
                    rs(g))
                        throw g;
                    return g
                }
                function wc(t) {
                    return Os(t).toLowerCase()
                }
                function Mc(t) {
                    return Os(t).toUpperCase()
                }
                function Ac(t, n, e) {
                    if ((t = Os(t)) && (e || n === it))
                        return t.replace(Un, "");
                    if (!t || !(n = gi(n)))
                        return t;
                    var r = tt(t)
                      , i = tt(n);
                    return Ci(r, U(r, i), D(r, i) + 1).join("")
                }
                function Sc(t, n, e) {
                    if ((t = Os(t)) && (e || n === it))
                        return t.replace($n, "");
                    if (!t || !(n = gi(n)))
                        return t;
                    var r = tt(t);
                    return Ci(r, 0, D(r, tt(n)) + 1).join("")
                }
                function kc(t, n, e) {
                    if ((t = Os(t)) && (e || n === it))
                        return t.replace(Dn, "");
                    if (!t || !(n = gi(n)))
                        return t;
                    var r = tt(t);
                    return Ci(r, U(r, tt(n))).join("")
                }
                function Cc(t, n) {
                    var e = Ct
                      , r = Et;
                    if (ss(n)) {
                        var i = "separator"in n ? n.separator : i;
                        e = "length"in n ? ks(n.length) : e,
                        r = "omission"in n ? gi(n.omission) : r
                    }
                    t = Os(t);
                    var o = t.length;
                    if (q(t)) {
                        var a = tt(t);
                        o = a.length
                    }
                    if (e >= o)
                        return t;
                    var u = e - J(r);
                    if (u < 1)
                        return r;
                    var s = a ? Ci(a, 0, u).join("") : t.slice(0, u);
                    if (i === it)
                        return s + r;
                    if (a && (u += s.length - u),
                    kh(i)) {
                        if (t.slice(u).search(i)) {
                            var c, f = s;
                            for (i.global || (i = pf(i.source, Os(Vn.exec(i)) + "g")),
                            i.lastIndex = 0; c = i.exec(f); )
                                var l = c.index;
                            s = s.slice(0, l === it ? u : l)
                        }
                    } else if (t.indexOf(gi(i), u) != u) {
                        var h = s.lastIndexOf(i);
                        h > -1 && (s = s.slice(0, h))
                    }
                    return s + r
                }
                function Ec(t) {
                    return t = Os(t),
                    t && Cn.test(t) ? t.replace(Sn, wr) : t
                }
                function Tc(t, n, e) {
                    return t = Os(t),
                    n = e ? it : n,
                    n === it ? Y(t) ? rt(t) : x(t) : t.match(n) || []
                }
                function Nc(t) {
                    var n = null == t ? 0 : t.length
                      , e = So();
                    return t = n ? v(t, function(t) {
                        if ("function" != typeof t[1])
                            throw new vf(st);
                        return [e(t[0]), t[1]]
                    }) : [],
                    oi(function(e) {
                        for (var r = -1; ++r < n; ) {
                            var i = t[r];
                            if (u(i[0], this, e))
                                return u(i[1], this, e)
                        }
                    })
                }
                function Oc(t) {
                    return Be($e(t, ht))
                }
                function Rc(t) {
                    return function() {
                        return t
                    }
                }
                function Pc(t, n) {
                    return null == t || t !== t ? n : t
                }
                function Lc(t) {
                    return t
                }
                function zc(t) {
                    return $r("function" == typeof t ? t : $e(t, ht))
                }
                function Ic(t) {
                    return Hr($e(t, ht))
                }
                function jc(t, n) {
                    return Wr(t, $e(n, ht))
                }
                function Uc(t, n, e) {
                    var r = Ys(n)
                      , i = ar(n, r);
                    null != e || ss(n) && (i.length || !r.length) || (e = n,
                    n = t,
                    t = this,
                    i = ar(n, Ys(n)));
                    var o = !(ss(e) && "chain"in e && !e.chain)
                      , a = os(t);
                    return c(i, function(e) {
                        var r = n[e];
                        t[e] = r,
                        a && (t.prototype[e] = function() {
                            var n = this.__chain__;
                            if (o || n) {
                                var e = t(this.__wrapped__);
                                return (e.__actions__ = $i(this.__actions__)).push({
                                    func: r,
                                    args: arguments,
                                    thisArg: t
                                }),
                                e.__chain__ = n,
                                e
                            }
                            return r.apply(t, g([this.value()], arguments))
                        }
                        )
                    }),
                    t
                }
                function Dc() {
                    return ur._ === this && (ur._ = kf),
                    this
                }
                function $c() {}
                function Bc(t) {
                    return t = ks(t),
                    oi(function(n) {
                        return Gr(n, t)
                    })
                }
                function Fc(t) {
                    return $o(t) ? E(ra(t)) : Jr(t)
                }
                function qc(t) {
                    return function(n) {
                        return null == t ? it : sr(t, n)
                    }
                }
                function Yc() {
                    return []
                }
                function Hc() {
                    return !1
                }
                function Wc() {
                    return {}
                }
                function Vc() {
                    return ""
                }
                function Xc() {
                    return !0
                }
                function Gc(t, n) {
                    if ((t = ks(t)) < 1 || t > zt)
                        return [];
                    var e = Ut
                      , r = Kf(t, Ut);
                    n = So(n),
                    t -= Ut;
                    for (var i = P(r, n); ++e < t; )
                        n(e);
                    return i
                }
                function Zc(t) {
                    return xh(t) ? v(t, ra) : bs(t) ? [t] : $i(Il(Os(t)))
                }
                function Kc(t) {
                    var n = ++wf;
                    return Os(t) + n
                }
                function Qc(t) {
                    return t && t.length ? Xe(t, Lc, hr) : it
                }
                function Jc(t, n) {
                    return t && t.length ? Xe(t, So(n, 2), hr) : it
                }
                function tf(t) {
                    return C(t, Lc)
                }
                function nf(t, n) {
                    return C(t, So(n, 2))
                }
                function ef(t) {
                    return t && t.length ? Xe(t, Lc, qr) : it
                }
                function rf(t, n) {
                    return t && t.length ? Xe(t, So(n, 2), qr) : it
                }
                function of(t) {
                    return t && t.length ? R(t, Lc) : 0
                }
                function af(t, n) {
                    return t && t.length ? R(t, So(n, 2)) : 0
                }
                n = null == n ? ur : Ar.defaults(ur.Object(), n, Ar.pick(ur, Ge));
                var uf = n.Array
                  , sf = n.Date
                  , cf = n.Error
                  , ff = n.Function
                  , lf = n.Math
                  , hf = n.Object
                  , pf = n.RegExp
                  , df = n.String
                  , vf = n.TypeError
                  , gf = uf.prototype
                  , yf = ff.prototype
                  , _f = hf.prototype
                  , mf = n["__core-js_shared__"]
                  , bf = yf.toString
                  , xf = _f.hasOwnProperty
                  , wf = 0
                  , Mf = function() {
                    var t = /[^.]+$/.exec(mf && mf.keys && mf.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }()
                  , Af = _f.toString
                  , Sf = bf.call(hf)
                  , kf = ur._
                  , Cf = pf("^" + bf.call(xf).replace(In, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                  , Ef = fr ? n.Buffer : it
                  , Tf = n.Symbol
                  , Nf = n.Uint8Array
                  , Of = Ef ? Ef.allocUnsafe : it
                  , Rf = V(hf.getPrototypeOf, hf)
                  , Pf = hf.create
                  , Lf = _f.propertyIsEnumerable
                  , zf = gf.splice
                  , If = Tf ? Tf.isConcatSpreadable : it
                  , jf = Tf ? Tf.iterator : it
                  , Uf = Tf ? Tf.toStringTag : it
                  , Df = function() {
                    try {
                        var t = Eo(hf, "defineProperty");
                        return t({}, "", {}),
                        t
                    } catch (t) {}
                }()
                  , $f = n.clearTimeout !== ur.clearTimeout && n.clearTimeout
                  , Bf = sf && sf.now !== ur.Date.now && sf.now
                  , Ff = n.setTimeout !== ur.setTimeout && n.setTimeout
                  , qf = lf.ceil
                  , Yf = lf.floor
                  , Hf = hf.getOwnPropertySymbols
                  , Wf = Ef ? Ef.isBuffer : it
                  , Vf = n.isFinite
                  , Xf = gf.join
                  , Gf = V(hf.keys, hf)
                  , Zf = lf.max
                  , Kf = lf.min
                  , Qf = sf.now
                  , Jf = n.parseInt
                  , tl = lf.random
                  , nl = gf.reverse
                  , el = Eo(n, "DataView")
                  , rl = Eo(n, "Map")
                  , il = Eo(n, "Promise")
                  , ol = Eo(n, "Set")
                  , al = Eo(n, "WeakMap")
                  , ul = Eo(hf, "create")
                  , sl = al && new al
                  , cl = {}
                  , fl = ia(el)
                  , ll = ia(rl)
                  , hl = ia(il)
                  , pl = ia(ol)
                  , dl = ia(al)
                  , vl = Tf ? Tf.prototype : it
                  , gl = vl ? vl.valueOf : it
                  , yl = vl ? vl.toString : it
                  , _l = function() {
                    function t() {}
                    return function(n) {
                        if (!ss(n))
                            return {};
                        if (Pf)
                            return Pf(n);
                        t.prototype = n;
                        var e = new t;
                        return t.prototype = it,
                        e
                    }
                }();
                e.templateSettings = {
                    escape: Tn,
                    evaluate: Nn,
                    interpolate: On,
                    variable: "",
                    imports: {
                        _: e
                    }
                },
                e.prototype = r.prototype,
                e.prototype.constructor = e,
                i.prototype = _l(r.prototype),
                i.prototype.constructor = i,
                b.prototype = _l(r.prototype),
                b.prototype.constructor = b,
                et.prototype.clear = Yn,
                et.prototype.delete = ee,
                et.prototype.get = re,
                et.prototype.has = ie,
                et.prototype.set = oe,
                ae.prototype.clear = ue,
                ae.prototype.delete = se,
                ae.prototype.get = ce,
                ae.prototype.has = fe,
                ae.prototype.set = le,
                he.prototype.clear = pe,
                he.prototype.delete = de,
                he.prototype.get = ve,
                he.prototype.has = ge,
                he.prototype.set = ye,
                _e.prototype.add = _e.prototype.push = me,
                _e.prototype.has = be,
                xe.prototype.clear = we,
                xe.prototype.delete = Me,
                xe.prototype.get = Ae,
                xe.prototype.has = Se,
                xe.prototype.set = ke;
                var ml = Wi(er)
                  , bl = Wi(or, !0)
                  , xl = Vi()
                  , wl = Vi(!0)
                  , Ml = sl ? function(t, n) {
                    return sl.set(t, n),
                    t
                }
                : Lc
                  , Al = Df ? function(t, n) {
                    return Df(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Rc(n),
                        writable: !0
                    })
                }
                : Lc
                  , Sl = oi
                  , kl = $f || function(t) {
                    return ur.clearTimeout(t)
                }
                  , Cl = ol && 1 / G(new ol([, -0]))[1] == Lt ? function(t) {
                    return new ol(t)
                }
                : $c
                  , El = sl ? function(t) {
                    return sl.get(t)
                }
                : $c
                  , Tl = Hf ? function(t) {
                    return null == t ? [] : (t = hf(t),
                    h(Hf(t), function(n) {
                        return Lf.call(t, n)
                    }))
                }
                : Yc
                  , Nl = Hf ? function(t) {
                    for (var n = []; t; )
                        g(n, Tl(t)),
                        t = Rf(t);
                    return n
                }
                : Yc
                  , Ol = lr;
                (el && Ol(new el(new ArrayBuffer(1))) != hn || rl && Ol(new rl) != Kt || il && Ol(il.resolve()) != nn || ol && Ol(new ol) != on || al && Ol(new al) != cn) && (Ol = function(t) {
                    var n = lr(t)
                      , e = n == tn ? t.constructor : it
                      , r = e ? ia(e) : "";
                    if (r)
                        switch (r) {
                        case fl:
                            return hn;
                        case ll:
                            return Kt;
                        case hl:
                            return nn;
                        case pl:
                            return on;
                        case dl:
                            return cn
                        }
                    return n
                }
                );
                var Rl = mf ? os : Hc
                  , Pl = na(Ml)
                  , Ll = Ff || function(t, n) {
                    return ur.setTimeout(t, n)
                }
                  , zl = na(Al)
                  , Il = Vo(function(t) {
                    var n = [];
                    return Ln.test(t) && n.push(""),
                    t.replace(zn, function(t, e, r, i) {
                        n.push(r ? i.replace(Hn, "$1") : e || t)
                    }),
                    n
                })
                  , jl = oi(function(t, n) {
                    return Ku(t) ? We(t, nr(n, 1, Ku, !0)) : []
                })
                  , Ul = oi(function(t, n) {
                    var e = Sa(n);
                    return Ku(e) && (e = it),
                    Ku(t) ? We(t, nr(n, 1, Ku, !0), So(e, 2)) : []
                })
                  , Dl = oi(function(t, n) {
                    var e = Sa(n);
                    return Ku(e) && (e = it),
                    Ku(t) ? We(t, nr(n, 1, Ku, !0), it, e) : []
                })
                  , $l = oi(function(t) {
                    var n = v(t, Ai);
                    return n.length && n[0] === t[0] ? kr(n) : []
                })
                  , Bl = oi(function(t) {
                    var n = Sa(t)
                      , e = v(t, Ai);
                    return n === Sa(e) ? n = it : e.pop(),
                    e.length && e[0] === t[0] ? kr(e, So(n, 2)) : []
                })
                  , Fl = oi(function(t) {
                    var n = Sa(t)
                      , e = v(t, Ai);
                    return n = "function" == typeof n ? n : it,
                    n && e.pop(),
                    e.length && e[0] === t[0] ? kr(e, it, n) : []
                })
                  , ql = oi(Ea)
                  , Yl = bo(function(t, n) {
                    var e = null == t ? 0 : t.length
                      , r = Ue(t, n);
                    return ni(t, v(n, function(t) {
                        return Uo(t, e) ? +t : t
                    }).sort(Ii)),
                    r
                })
                  , Hl = oi(function(t) {
                    return yi(nr(t, 1, Ku, !0))
                })
                  , Wl = oi(function(t) {
                    var n = Sa(t);
                    return Ku(n) && (n = it),
                    yi(nr(t, 1, Ku, !0), So(n, 2))
                })
                  , Vl = oi(function(t) {
                    var n = Sa(t);
                    return n = "function" == typeof n ? n : it,
                    yi(nr(t, 1, Ku, !0), it, n)
                })
                  , Xl = oi(function(t, n) {
                    return Ku(t) ? We(t, n) : []
                })
                  , Gl = oi(function(t) {
                    return wi(h(t, Ku))
                })
                  , Zl = oi(function(t) {
                    var n = Sa(t);
                    return Ku(n) && (n = it),
                    wi(h(t, Ku), So(n, 2))
                })
                  , Kl = oi(function(t) {
                    var n = Sa(t);
                    return n = "function" == typeof n ? n : it,
                    wi(h(t, Ku), it, n)
                })
                  , Ql = oi(Za)
                  , Jl = oi(function(t) {
                    var n = t.length
                      , e = n > 1 ? t[n - 1] : it;
                    return e = "function" == typeof e ? (t.pop(),
                    e) : it,
                    Ka(t, e)
                })
                  , th = bo(function(t) {
                    var n = t.length
                      , e = n ? t[0] : 0
                      , r = this.__wrapped__
                      , o = function(n) {
                        return Ue(n, t)
                    };
                    return !(n > 1 || this.__actions__.length) && r instanceof b && Uo(e) ? (r = r.slice(e, +e + (n ? 1 : 0)),
                    r.__actions__.push({
                        func: eu,
                        args: [o],
                        thisArg: it
                    }),
                    new i(r,this.__chain__).thru(function(t) {
                        return n && !t.length && t.push(it),
                        t
                    })) : this.thru(o)
                })
                  , nh = Yi(function(t, n, e) {
                    xf.call(t, e) ? ++t[e] : je(t, e, 1)
                })
                  , eh = Ji(va)
                  , rh = Ji(ga)
                  , ih = Yi(function(t, n, e) {
                    xf.call(t, e) ? t[e].push(n) : je(t, e, [n])
                })
                  , oh = oi(function(t, n, e) {
                    var r = -1
                      , i = "function" == typeof n
                      , o = Zu(t) ? uf(t.length) : [];
                    return ml(t, function(t) {
                        o[++r] = i ? u(n, t, e) : Er(t, n, e)
                    }),
                    o
                })
                  , ah = Yi(function(t, n, e) {
                    je(t, e, n)
                })
                  , uh = Yi(function(t, n, e) {
                    t[e ? 0 : 1].push(n)
                }, function() {
                    return [[], []]
                })
                  , sh = oi(function(t, n) {
                    if (null == t)
                        return [];
                    var e = n.length;
                    return e > 1 && Do(t, n[0], n[1]) ? n = [] : e > 2 && Do(n[0], n[1], n[2]) && (n = [n[0]]),
                    Zr(t, nr(n, 1), [])
                })
                  , ch = Bf || function() {
                    return ur.Date.now()
                }
                  , fh = oi(function(t, n, e) {
                    var r = yt;
                    if (e.length) {
                        var i = X(e, Ao(fh));
                        r |= wt
                    }
                    return ho(t, r, n, e, i)
                })
                  , lh = oi(function(t, n, e) {
                    var r = yt | _t;
                    if (e.length) {
                        var i = X(e, Ao(lh));
                        r |= wt
                    }
                    return ho(n, r, t, e, i)
                })
                  , hh = oi(function(t, n) {
                    return He(t, 1, n)
                })
                  , ph = oi(function(t, n, e) {
                    return He(t, Es(n) || 0, e)
                });
                zu.Cache = he;
                var dh = Sl(function(t, n) {
                    n = 1 == n.length && xh(n[0]) ? v(n[0], z(So())) : v(nr(n, 1), z(So()));
                    var e = n.length;
                    return oi(function(r) {
                        for (var i = -1, o = Kf(r.length, e); ++i < o; )
                            r[i] = n[i].call(this, r[i]);
                        return u(t, this, r)
                    })
                })
                  , vh = oi(function(t, n) {
                    return ho(t, wt, it, n, X(n, Ao(vh)))
                })
                  , gh = oi(function(t, n) {
                    return ho(t, Mt, it, n, X(n, Ao(gh)))
                })
                  , yh = bo(function(t, n) {
                    return ho(t, St, it, it, it, n)
                })
                  , _h = so(hr)
                  , mh = so(function(t, n) {
                    return t >= n
                })
                  , bh = Tr(function() {
                    return arguments
                }()) ? Tr : function(t) {
                    return cs(t) && xf.call(t, "callee") && !Lf.call(t, "callee")
                }
                  , xh = uf.isArray
                  , wh = pr ? z(pr) : Nr
                  , Mh = Wf || Hc
                  , Ah = dr ? z(dr) : Or
                  , Sh = vr ? z(vr) : Lr
                  , kh = gr ? z(gr) : jr
                  , Ch = yr ? z(yr) : Ur
                  , Eh = _r ? z(_r) : Dr
                  , Th = so(qr)
                  , Nh = so(function(t, n) {
                    return t <= n
                })
                  , Oh = Hi(function(t, n) {
                    if (Yo(n) || Zu(n))
                        return void Bi(n, Ys(n), t);
                    for (var e in n)
                        xf.call(n, e) && Re(t, e, n[e])
                })
                  , Rh = Hi(function(t, n) {
                    Bi(n, Hs(n), t)
                })
                  , Ph = Hi(function(t, n, e, r) {
                    Bi(n, Hs(n), t, r)
                })
                  , Lh = Hi(function(t, n, e, r) {
                    Bi(n, Ys(n), t, r)
                })
                  , zh = bo(Ue)
                  , Ih = oi(function(t) {
                    return t.push(it, po),
                    u(Ph, it, t)
                })
                  , jh = oi(function(t) {
                    return t.push(it, vo),
                    u(Fh, it, t)
                })
                  , Uh = eo(function(t, n, e) {
                    t[n] = e
                }, Rc(Lc))
                  , Dh = eo(function(t, n, e) {
                    xf.call(t, n) ? t[n].push(e) : t[n] = [e]
                }, So)
                  , $h = oi(Er)
                  , Bh = Hi(function(t, n, e) {
                    Vr(t, n, e)
                })
                  , Fh = Hi(function(t, n, e, r) {
                    Vr(t, n, e, r)
                })
                  , qh = bo(function(t, n) {
                    var e = {};
                    if (null == t)
                        return e;
                    var r = !1;
                    n = v(n, function(n) {
                        return n = ki(n, t),
                        r || (r = n.length > 1),
                        n
                    }),
                    Bi(t, wo(t), e),
                    r && (e = $e(e, ht | pt | dt, go));
                    for (var i = n.length; i--; )
                        _i(e, n[i]);
                    return e
                })
                  , Yh = bo(function(t, n) {
                    return null == t ? {} : Kr(t, n)
                })
                  , Hh = lo(Ys)
                  , Wh = lo(Hs)
                  , Vh = Zi(function(t, n, e) {
                    return n = n.toLowerCase(),
                    t + (e ? sc(n) : n)
                })
                  , Xh = Zi(function(t, n, e) {
                    return t + (e ? "-" : "") + n.toLowerCase()
                })
                  , Gh = Zi(function(t, n, e) {
                    return t + (e ? " " : "") + n.toLowerCase()
                })
                  , Zh = Gi("toLowerCase")
                  , Kh = Zi(function(t, n, e) {
                    return t + (e ? "_" : "") + n.toLowerCase()
                })
                  , Qh = Zi(function(t, n, e) {
                    return t + (e ? " " : "") + tp(n)
                })
                  , Jh = Zi(function(t, n, e) {
                    return t + (e ? " " : "") + n.toUpperCase()
                })
                  , tp = Gi("toUpperCase")
                  , np = oi(function(t, n) {
                    try {
                        return u(t, it, n)
                    } catch (t) {
                        return rs(t) ? t : new cf(t)
                    }
                })
                  , ep = bo(function(t, n) {
                    return c(n, function(n) {
                        n = ra(n),
                        je(t, n, fh(t[n], t))
                    }),
                    t
                })
                  , rp = to()
                  , ip = to(!0)
                  , op = oi(function(t, n) {
                    return function(e) {
                        return Er(e, t, n)
                    }
                })
                  , ap = oi(function(t, n) {
                    return function(e) {
                        return Er(t, e, n)
                    }
                })
                  , up = io(v)
                  , sp = io(l)
                  , cp = io(m)
                  , fp = uo()
                  , lp = uo(!0)
                  , hp = ro(function(t, n) {
                    return t + n
                }, 0)
                  , pp = fo("ceil")
                  , dp = ro(function(t, n) {
                    return t / n
                }, 1)
                  , vp = fo("floor")
                  , gp = ro(function(t, n) {
                    return t * n
                }, 1)
                  , yp = fo("round")
                  , _p = ro(function(t, n) {
                    return t - n
                }, 0);
                return e.after = Eu,
                e.ary = Tu,
                e.assign = Oh,
                e.assignIn = Rh,
                e.assignInWith = Ph,
                e.assignWith = Lh,
                e.at = zh,
                e.before = Nu,
                e.bind = fh,
                e.bindAll = ep,
                e.bindKey = lh,
                e.castArray = qu,
                e.chain = tu,
                e.chunk = ua,
                e.compact = sa,
                e.concat = ca,
                e.cond = Nc,
                e.conforms = Oc,
                e.constant = Rc,
                e.countBy = nh,
                e.create = Rs,
                e.curry = Ou,
                e.curryRight = Ru,
                e.debounce = Pu,
                e.defaults = Ih,
                e.defaultsDeep = jh,
                e.defer = hh,
                e.delay = ph,
                e.difference = jl,
                e.differenceBy = Ul,
                e.differenceWith = Dl,
                e.drop = fa,
                e.dropRight = la,
                e.dropRightWhile = ha,
                e.dropWhile = pa,
                e.fill = da,
                e.filter = lu,
                e.flatMap = hu,
                e.flatMapDeep = pu,
                e.flatMapDepth = du,
                e.flatten = ya,
                e.flattenDeep = _a,
                e.flattenDepth = ma,
                e.flip = Lu,
                e.flow = rp,
                e.flowRight = ip,
                e.fromPairs = ba,
                e.functions = Ds,
                e.functionsIn = $s,
                e.groupBy = ih,
                e.initial = Ma,
                e.intersection = $l,
                e.intersectionBy = Bl,
                e.intersectionWith = Fl,
                e.invert = Uh,
                e.invertBy = Dh,
                e.invokeMap = oh,
                e.iteratee = zc,
                e.keyBy = ah,
                e.keys = Ys,
                e.keysIn = Hs,
                e.map = _u,
                e.mapKeys = Ws,
                e.mapValues = Vs,
                e.matches = Ic,
                e.matchesProperty = jc,
                e.memoize = zu,
                e.merge = Bh,
                e.mergeWith = Fh,
                e.method = op,
                e.methodOf = ap,
                e.mixin = Uc,
                e.negate = Iu,
                e.nthArg = Bc,
                e.omit = qh,
                e.omitBy = Xs,
                e.once = ju,
                e.orderBy = mu,
                e.over = up,
                e.overArgs = dh,
                e.overEvery = sp,
                e.overSome = cp,
                e.partial = vh,
                e.partialRight = gh,
                e.partition = uh,
                e.pick = Yh,
                e.pickBy = Gs,
                e.property = Fc,
                e.propertyOf = qc,
                e.pull = ql,
                e.pullAll = Ea,
                e.pullAllBy = Ta,
                e.pullAllWith = Na,
                e.pullAt = Yl,
                e.range = fp,
                e.rangeRight = lp,
                e.rearg = yh,
                e.reject = wu,
                e.remove = Oa,
                e.rest = Uu,
                e.reverse = Ra,
                e.sampleSize = Au,
                e.set = Ks,
                e.setWith = Qs,
                e.shuffle = Su,
                e.slice = Pa,
                e.sortBy = sh,
                e.sortedUniq = $a,
                e.sortedUniqBy = Ba,
                e.split = mc,
                e.spread = Du,
                e.tail = Fa,
                e.take = qa,
                e.takeRight = Ya,
                e.takeRightWhile = Ha,
                e.takeWhile = Wa,
                e.tap = nu,
                e.throttle = $u,
                e.thru = eu,
                e.toArray = As,
                e.toPairs = Hh,
                e.toPairsIn = Wh,
                e.toPath = Zc,
                e.toPlainObject = Ts,
                e.transform = Js,
                e.unary = Bu,
                e.union = Hl,
                e.unionBy = Wl,
                e.unionWith = Vl,
                e.uniq = Va,
                e.uniqBy = Xa,
                e.uniqWith = Ga,
                e.unset = tc,
                e.unzip = Za,
                e.unzipWith = Ka,
                e.update = nc,
                e.updateWith = ec,
                e.values = rc,
                e.valuesIn = ic,
                e.without = Xl,
                e.words = Tc,
                e.wrap = Fu,
                e.xor = Gl,
                e.xorBy = Zl,
                e.xorWith = Kl,
                e.zip = Ql,
                e.zipObject = Qa,
                e.zipObjectDeep = Ja,
                e.zipWith = Jl,
                e.entries = Hh,
                e.entriesIn = Wh,
                e.extend = Rh,
                e.extendWith = Ph,
                Uc(e, e),
                e.add = hp,
                e.attempt = np,
                e.camelCase = Vh,
                e.capitalize = sc,
                e.ceil = pp,
                e.clamp = oc,
                e.clone = Yu,
                e.cloneDeep = Wu,
                e.cloneDeepWith = Vu,
                e.cloneWith = Hu,
                e.conformsTo = Xu,
                e.deburr = cc,
                e.defaultTo = Pc,
                e.divide = dp,
                e.endsWith = fc,
                e.eq = Gu,
                e.escape = lc,
                e.escapeRegExp = hc,
                e.every = fu,
                e.find = eh,
                e.findIndex = va,
                e.findKey = Ps,
                e.findLast = rh,
                e.findLastIndex = ga,
                e.findLastKey = Ls,
                e.floor = vp,
                e.forEach = vu,
                e.forEachRight = gu,
                e.forIn = zs,
                e.forInRight = Is,
                e.forOwn = js,
                e.forOwnRight = Us,
                e.get = Bs,
                e.gt = _h,
                e.gte = mh,
                e.has = Fs,
                e.hasIn = qs,
                e.head = xa,
                e.identity = Lc,
                e.includes = yu,
                e.indexOf = wa,
                e.inRange = ac,
                e.invoke = $h,
                e.isArguments = bh,
                e.isArray = xh,
                e.isArrayBuffer = wh,
                e.isArrayLike = Zu,
                e.isArrayLikeObject = Ku,
                e.isBoolean = Qu,
                e.isBuffer = Mh,
                e.isDate = Ah,
                e.isElement = Ju,
                e.isEmpty = ts,
                e.isEqual = ns,
                e.isEqualWith = es,
                e.isError = rs,
                e.isFinite = is,
                e.isFunction = os,
                e.isInteger = as,
                e.isLength = us,
                e.isMap = Sh,
                e.isMatch = fs,
                e.isMatchWith = ls,
                e.isNaN = hs,
                e.isNative = ps,
                e.isNil = vs,
                e.isNull = ds,
                e.isNumber = gs,
                e.isObject = ss,
                e.isObjectLike = cs,
                e.isPlainObject = ys,
                e.isRegExp = kh,
                e.isSafeInteger = _s,
                e.isSet = Ch,
                e.isString = ms,
                e.isSymbol = bs,
                e.isTypedArray = Eh,
                e.isUndefined = xs,
                e.isWeakMap = ws,
                e.isWeakSet = Ms,
                e.join = Aa,
                e.kebabCase = Xh,
                e.last = Sa,
                e.lastIndexOf = ka,
                e.lowerCase = Gh,
                e.lowerFirst = Zh,
                e.lt = Th,
                e.lte = Nh,
                e.max = Qc,
                e.maxBy = Jc,
                e.mean = tf,
                e.meanBy = nf,
                e.min = ef,
                e.minBy = rf,
                e.stubArray = Yc,
                e.stubFalse = Hc,
                e.stubObject = Wc,
                e.stubString = Vc,
                e.stubTrue = Xc,
                e.multiply = gp,
                e.nth = Ca,
                e.noConflict = Dc,
                e.noop = $c,
                e.now = ch,
                e.pad = pc,
                e.padEnd = dc,
                e.padStart = vc,
                e.parseInt = gc,
                e.random = uc,
                e.reduce = bu,
                e.reduceRight = xu,
                e.repeat = yc,
                e.replace = _c,
                e.result = Zs,
                e.round = yp,
                e.runInContext = t,
                e.sample = Mu,
                e.size = ku,
                e.snakeCase = Kh,
                e.some = Cu,
                e.sortedIndex = La,
                e.sortedIndexBy = za,
                e.sortedIndexOf = Ia,
                e.sortedLastIndex = ja,
                e.sortedLastIndexBy = Ua,
                e.sortedLastIndexOf = Da,
                e.startCase = Qh,
                e.startsWith = bc,
                e.subtract = _p,
                e.sum = of,
                e.sumBy = af,
                e.template = xc,
                e.times = Gc,
                e.toFinite = Ss,
                e.toInteger = ks,
                e.toLength = Cs,
                e.toLower = wc,
                e.toNumber = Es,
                e.toSafeInteger = Ns,
                e.toString = Os,
                e.toUpper = Mc,
                e.trim = Ac,
                e.trimEnd = Sc,
                e.trimStart = kc,
                e.truncate = Cc,
                e.unescape = Ec,
                e.uniqueId = Kc,
                e.upperCase = Jh,
                e.upperFirst = tp,
                e.each = vu,
                e.eachRight = gu,
                e.first = xa,
                Uc(e, function() {
                    var t = {};
                    return er(e, function(n, r) {
                        xf.call(e.prototype, r) || (t[r] = n)
                    }),
                    t
                }(), {
                    chain: !1
                }),
                e.VERSION = ot,
                c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                    e[t].placeholder = e
                }),
                c(["drop", "take"], function(t, n) {
                    b.prototype[t] = function(e) {
                        e = e === it ? 1 : Zf(ks(e), 0);
                        var r = this.__filtered__ && !n ? new b(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = Kf(e, r.__takeCount__) : r.__views__.push({
                            size: Kf(e, Ut),
                            type: t + (r.__dir__ < 0 ? "Right" : "")
                        }),
                        r
                    }
                    ,
                    b.prototype[t + "Right"] = function(n) {
                        return this.reverse()[t](n).reverse()
                    }
                }),
                c(["filter", "map", "takeWhile"], function(t, n) {
                    var e = n + 1
                      , r = e == Ot || e == Pt;
                    b.prototype[t] = function(t) {
                        var n = this.clone();
                        return n.__iteratees__.push({
                            iteratee: So(t, 3),
                            type: e
                        }),
                        n.__filtered__ = n.__filtered__ || r,
                        n
                    }
                }),
                c(["head", "last"], function(t, n) {
                    var e = "take" + (n ? "Right" : "");
                    b.prototype[t] = function() {
                        return this[e](1).value()[0]
                    }
                }),
                c(["initial", "tail"], function(t, n) {
                    var e = "drop" + (n ? "" : "Right");
                    b.prototype[t] = function() {
                        return this.__filtered__ ? new b(this) : this[e](1)
                    }
                }),
                b.prototype.compact = function() {
                    return this.filter(Lc)
                }
                ,
                b.prototype.find = function(t) {
                    return this.filter(t).head()
                }
                ,
                b.prototype.findLast = function(t) {
                    return this.reverse().find(t)
                }
                ,
                b.prototype.invokeMap = oi(function(t, n) {
                    return "function" == typeof t ? new b(this) : this.map(function(e) {
                        return Er(e, t, n)
                    })
                }),
                b.prototype.reject = function(t) {
                    return this.filter(Iu(So(t)))
                }
                ,
                b.prototype.slice = function(t, n) {
                    t = ks(t);
                    var e = this;
                    return e.__filtered__ && (t > 0 || n < 0) ? new b(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)),
                    n !== it && (n = ks(n),
                    e = n < 0 ? e.dropRight(-n) : e.take(n - t)),
                    e)
                }
                ,
                b.prototype.takeRightWhile = function(t) {
                    return this.reverse().takeWhile(t).reverse()
                }
                ,
                b.prototype.toArray = function() {
                    return this.take(Ut)
                }
                ,
                er(b.prototype, function(t, n) {
                    var r = /^(?:filter|find|map|reject)|While$/.test(n)
                      , o = /^(?:head|last)$/.test(n)
                      , a = e[o ? "take" + ("last" == n ? "Right" : "") : n]
                      , u = o || /^find/.test(n);
                    a && (e.prototype[n] = function() {
                        var n = this.__wrapped__
                          , s = o ? [1] : arguments
                          , c = n instanceof b
                          , f = s[0]
                          , l = c || xh(n)
                          , h = function(t) {
                            var n = a.apply(e, g([t], s));
                            return o && p ? n[0] : n
                        };
                        l && r && "function" == typeof f && 1 != f.length && (c = l = !1);
                        var p = this.__chain__
                          , d = !!this.__actions__.length
                          , v = u && !p
                          , y = c && !d;
                        if (!u && l) {
                            n = y ? n : new b(this);
                            var _ = t.apply(n, s);
                            return _.__actions__.push({
                                func: eu,
                                args: [h],
                                thisArg: it
                            }),
                            new i(_,p)
                        }
                        return v && y ? t.apply(this, s) : (_ = this.thru(h),
                        v ? o ? _.value()[0] : _.value() : _)
                    }
                    )
                }),
                c(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                    var n = gf[t]
                      , r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                      , i = /^(?:pop|shift)$/.test(t);
                    e.prototype[t] = function() {
                        var t = arguments;
                        if (i && !this.__chain__) {
                            var e = this.value();
                            return n.apply(xh(e) ? e : [], t)
                        }
                        return this[r](function(e) {
                            return n.apply(xh(e) ? e : [], t)
                        })
                    }
                }),
                er(b.prototype, function(t, n) {
                    var r = e[n];
                    if (r) {
                        var i = r.name + "";
                        (cl[i] || (cl[i] = [])).push({
                            name: n,
                            func: r
                        })
                    }
                }),
                cl[no(it, _t).name] = [{
                    name: "wrapper",
                    func: it
                }],
                b.prototype.clone = T,
                b.prototype.reverse = K,
                b.prototype.value = nt,
                e.prototype.at = th,
                e.prototype.chain = ru,
                e.prototype.commit = iu,
                e.prototype.next = ou,
                e.prototype.plant = uu,
                e.prototype.reverse = su,
                e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = cu,
                e.prototype.first = e.prototype.head,
                jf && (e.prototype[jf] = au),
                e
            }
              , Ar = Mr();
            ur._ = Ar,
            (i = function() {
                return Ar
            }
            .call(n, e, n, r)) !== it && (r.exports = i)
        }
        ).call(this)
    }
    ).call(n, e(6), e(31)(t))
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function i(t) {
        if (t && t.__esModule)
            return t;
        var n = {};
        if (null != t)
            for (var e in t)
                Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t,
        n
    }
    function o(t) {
        return l[t.sex](t.forename)
    }
    function a(t, n) {
        return (0,
        f.default)(t).flatMap(function(t) {
            return (0,
            f.default)(t.births).filter(function(t) {
                var e = t.year;
                return e >= n.from && e <= n.to
            }).map("births").max()
        }).max() || 0
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.initialRange = n.defaultDuration = n.fullRange = n.years = void 0,
    n.forenameColor = o,
    n.maxBirthsCount = a;
    var u = e(3)
      , s = i(u)
      , c = e(0)
      , f = r(c)
      , l = {
        m: s.scaleOrdinal().range(["#4c5d91", "#4c92b9", "#53a488", "#a5ad5c"]),
        f: s.scaleOrdinal().range(["#a15599", "#d57599", "#b98c6f", "#e0da2f"])
    }
      , h = n.years = f.default.range(1, 67);
    n.fullRange = s.extent(h),
    n.defaultDuration = 750,
    n.initialRange = {
        from: h[0],
        to: f.default.last(h) + 1
    }
}
, function(t, n, e) {
    (function(n) {
        function e(t, n) {
            var e = t[1] || ""
              , i = t[3];
            if (!i)
                return e;
            if (n) {
                var o = r(i)
                  , a = i.sources.map(function(t) {
                    return "/*# sourceURL=" + i.sourceRoot + t + " */"
                });
                return [e].concat(a).concat([o]).join("\n")
            }
            return [e].join("\n")
        }
        function r(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + new n(JSON.stringify(t)).toString("base64") + " */"
        }
        t.exports = function(t) {
            var n = [];
            return n.toString = function() {
                return this.map(function(n) {
                    var r = e(n, t);
                    return n[2] ? "@media " + n[2] + "{" + r + "}" : r
                }).join("")
            }
            ,
            n.i = function(t, e) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < t.length; i++) {
                    var a = t[i];
                    "number" == typeof a[0] && r[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = "(" + a[2] + ") and (" + e + ")"),
                    n.push(a))
                }
            }
            ,
            n
        }
    }
    ).call(n, e(21).Buffer)
}
, function(t, n, e) {
    !function(t, e) {
        e(n)
    }(0, function(t) {
        "use strict";
        function n(t) {
            return function(n, e) {
                return Lc(t(n), e)
            }
        }
        function e(t, n) {
            return [t, n]
        }
        function r(t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e)
              , i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10))
              , o = r / i;
            return o >= Qc ? i *= 10 : o >= Jc ? i *= 5 : o >= tf && (i *= 2),
            n < t ? -i : i
        }
        function i(t) {
            return t.length
        }
        function o(t) {
            return "translate(" + t + ",0)"
        }
        function a(t) {
            return "translate(0," + t + ")"
        }
        function u(t) {
            var n = t.bandwidth() / 2;
            return t.round() && (n = Math.round(n)),
            function(e) {
                return t(e) + n
            }
        }
        function s() {
            return !this.__axis
        }
        function c(t, n) {
            function e(e) {
                var o = null == c ? n.ticks ? n.ticks.apply(n, i) : n.domain() : c
                  , a = null == f ? n.tickFormat ? n.tickFormat.apply(n, i) : bf : f
                  , y = Math.max(l, 0) + p
                  , _ = n.range()
                  , m = _[0] + .5
                  , b = _[_.length - 1] + .5
                  , x = (n.bandwidth ? u : bf)(n.copy())
                  , w = e.selection ? e.selection() : e
                  , M = w.selectAll(".domain").data([null])
                  , A = w.selectAll(".tick").data(o, n).order()
                  , S = A.exit()
                  , k = A.enter().append("g").attr("class", "tick")
                  , C = A.select("line")
                  , E = A.select("text");
                M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")),
                A = A.merge(k),
                C = C.merge(k.append("line").attr("stroke", "#000").attr(r + "2", d * l).attr(v + "1", .5).attr(v + "2", .5)),
                E = E.merge(k.append("text").attr("fill", "#000").attr(r, d * y).attr(v, .5).attr("dy", t === xf ? "0em" : t === Mf ? "0.71em" : "0.32em")),
                e !== w && (M = M.transition(e),
                A = A.transition(e),
                C = C.transition(e),
                E = E.transition(e),
                S = S.transition(e).attr("opacity", Sf).attr("transform", function(t) {
                    return isFinite(t = x(t)) ? g(t) : this.getAttribute("transform")
                }),
                k.attr("opacity", Sf).attr("transform", function(t) {
                    var n = this.parentNode.__axis;
                    return g(n && isFinite(n = n(t)) ? n : x(t))
                })),
                S.remove(),
                M.attr("d", t === Af || t == wf ? "M" + d * h + "," + m + "H0.5V" + b + "H" + d * h : "M" + m + "," + d * h + "V0.5H" + b + "V" + d * h),
                A.attr("opacity", 1).attr("transform", function(t) {
                    return g(x(t))
                }),
                C.attr(r + "2", d * l),
                E.attr(r, d * y).text(a),
                w.filter(s).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === wf ? "start" : t === Af ? "end" : "middle"),
                w.each(function() {
                    this.__axis = x
                })
            }
            var r, i = [], c = null, f = null, l = 6, h = 6, p = 3, d = t === xf || t === Af ? -1 : 1, v = t === Af || t === wf ? (r = "x",
            "y") : (r = "y",
            "x"), g = t === xf || t === Mf ? o : a;
            return e.scale = function(t) {
                return arguments.length ? (n = t,
                e) : n
            }
            ,
            e.ticks = function() {
                return i = mf.call(arguments),
                e
            }
            ,
            e.tickArguments = function(t) {
                return arguments.length ? (i = null == t ? [] : mf.call(t),
                e) : i.slice()
            }
            ,
            e.tickValues = function(t) {
                return arguments.length ? (c = null == t ? null : mf.call(t),
                e) : c && c.slice()
            }
            ,
            e.tickFormat = function(t) {
                return arguments.length ? (f = t,
                e) : f
            }
            ,
            e.tickSize = function(t) {
                return arguments.length ? (l = h = +t,
                e) : l
            }
            ,
            e.tickSizeInner = function(t) {
                return arguments.length ? (l = +t,
                e) : l
            }
            ,
            e.tickSizeOuter = function(t) {
                return arguments.length ? (h = +t,
                e) : h
            }
            ,
            e.tickPadding = function(t) {
                return arguments.length ? (p = +t,
                e) : p
            }
            ,
            e
        }
        function f(t) {
            return c(xf, t)
        }
        function l(t) {
            return c(wf, t)
        }
        function h(t) {
            return c(Mf, t)
        }
        function p(t) {
            return c(Af, t)
        }
        function d() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r)
                    throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new v(r)
        }
        function v(t) {
            this._ = t
        }
        function g(t, n) {
            return t.trim().split(/^|\s+/).map(function(t) {
                var e = ""
                  , r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1),
                t = t.slice(0, r)),
                t && !n.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                }
            })
        }
        function y(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n)
                    return e.value
        }
        function _(t, n, e) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === n) {
                    t[r] = kf,
                    t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }),
            t
        }
        function m(t) {
            return function() {
                var n = this.ownerDocument
                  , e = this.namespaceURI;
                return e === Cf && n.documentElement.namespaceURI === Cf ? n.createElement(t) : n.createElementNS(e, t)
            }
        }
        function b(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        function x() {
            return new w
        }
        function w() {
            this._ = "@" + (++Of).toString(36)
        }
        function M(t, n, e) {
            return t = A(t, n, e),
            function(n) {
                var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
            }
        }
        function A(n, e, r) {
            return function(i) {
                var o = t.event;
                t.event = i;
                try {
                    n.call(this, this.__data__, e, r)
                } finally {
                    t.event = o
                }
            }
        }
        function S(t) {
            return t.trim().split(/^|\s+/).map(function(t) {
                var n = ""
                  , e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1),
                t = t.slice(0, e)),
                {
                    type: t,
                    name: n
                }
            })
        }
        function k(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
                        e = n[r],
                        t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
                }
            }
        }
        function C(t, n, e) {
            var r = If.hasOwnProperty(t.type) ? M : A;
            return function(i, o, a) {
                var u, s = this.__on, c = r(n, o, a);
                if (s)
                    for (var f = 0, l = s.length; f < l; ++f)
                        if ((u = s[f]).type === t.type && u.name === t.name)
                            return this.removeEventListener(u.type, u.listener, u.capture),
                            this.addEventListener(u.type, u.listener = c, u.capture = e),
                            void (u.value = n);
                this.addEventListener(t.type, c, e),
                u = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: c,
                    capture: e
                },
                s ? s.push(u) : this.__on = [u]
            }
        }
        function E(n, e, r, i) {
            var o = t.event;
            n.sourceEvent = t.event,
            t.event = n;
            try {
                return e.apply(r, i)
            } finally {
                t.event = o
            }
        }
        function T() {}
        function N() {
            return []
        }
        function O(t, n) {
            this.ownerDocument = t.ownerDocument,
            this.namespaceURI = t.namespaceURI,
            this._next = null,
            this._parent = t,
            this.__data__ = n
        }
        function R(t, n, e, r, i, o) {
            for (var a, u = 0, s = n.length, c = o.length; u < c; ++u)
                (a = n[u]) ? (a.__data__ = o[u],
                r[u] = a) : e[u] = new O(t,o[u]);
            for (; u < s; ++u)
                (a = n[u]) && (i[u] = a)
        }
        function P(t, n, e, r, i, o, a) {
            var u, s, c, f = {}, l = n.length, h = o.length, p = new Array(l);
            for (u = 0; u < l; ++u)
                (s = n[u]) && (p[u] = c = Gf + a.call(s, s.__data__, u, n),
                c in f ? i[u] = s : f[c] = s);
            for (u = 0; u < h; ++u)
                c = Gf + a.call(t, o[u], u, o),
                (s = f[c]) ? (r[u] = s,
                s.__data__ = o[u],
                f[c] = null) : e[u] = new O(t,o[u]);
            for (u = 0; u < l; ++u)
                (s = n[u]) && f[p[u]] === s && (i[u] = s)
        }
        function L(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
        function z(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function I(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function j(t, n) {
            return function() {
                this.setAttribute(t, n)
            }
        }
        function U(t, n) {
            return function() {
                this.setAttributeNS(t.space, t.local, n)
            }
        }
        function D(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }
        function $(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        function B(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function F(t, n, e) {
            return function() {
                this.style.setProperty(t, n, e)
            }
        }
        function q(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }
        function Y(t) {
            return function() {
                delete this[t]
            }
        }
        function H(t, n) {
            return function() {
                this[t] = n
            }
        }
        function W(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }
        function V(t) {
            return t.trim().split(/^|\s+/)
        }
        function X(t) {
            return t.classList || new G(t)
        }
        function G(t) {
            this._node = t,
            this._names = V(t.getAttribute("class") || "")
        }
        function Z(t, n) {
            for (var e = X(t), r = -1, i = n.length; ++r < i; )
                e.add(n[r])
        }
        function K(t, n) {
            for (var e = X(t), r = -1, i = n.length; ++r < i; )
                e.remove(n[r])
        }
        function Q(t) {
            return function() {
                Z(this, t)
            }
        }
        function J(t) {
            return function() {
                K(this, t)
            }
        }
        function tt(t, n) {
            return function() {
                (n.apply(this, arguments) ? Z : K)(this, t)
            }
        }
        function nt() {
            this.textContent = ""
        }
        function et(t) {
            return function() {
                this.textContent = t
            }
        }
        function rt(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }
        function it() {
            this.innerHTML = ""
        }
        function ot(t) {
            return function() {
                this.innerHTML = t
            }
        }
        function at(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }
        function ut() {
            this.nextSibling && this.parentNode.appendChild(this)
        }
        function st() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        function ct() {
            return null
        }
        function ft() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }
        function lt(t, n, e) {
            var r = sl(t)
              , i = r.CustomEvent;
            i ? i = new i(n,e) : (i = r.document.createEvent("Event"),
            e ? (i.initEvent(n, e.bubbles, e.cancelable),
            i.detail = e.detail) : i.initEvent(n, !1, !1)),
            t.dispatchEvent(i)
        }
        function ht(t, n) {
            return function() {
                return lt(this, t, n)
            }
        }
        function pt(t, n) {
            return function() {
                return lt(this, t, n.apply(this, arguments))
            }
        }
        function dt(t, n) {
            this._groups = t,
            this._parents = n
        }
        function vt() {
            return new dt([[document.documentElement]],xl)
        }
        function gt() {
            t.event.stopImmediatePropagation()
        }
        function yt(t, n) {
            var e = t.document.documentElement
              , r = wl(t).on("dragstart.drag", null);
            n && (r.on("click.drag", kl, !0),
            setTimeout(function() {
                r.on("click.drag", null)
            }, 0)),
            "onselectstart"in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect,
            delete e.__noselect)
        }
        function _t(t, n, e, r, i, o, a, u, s, c) {
            this.target = t,
            this.type = n,
            this.subject = e,
            this.identifier = r,
            this.active = i,
            this.x = o,
            this.y = a,
            this.dx = u,
            this.dy = s,
            this._ = c
        }
        function mt() {
            return !t.event.button
        }
        function bt() {
            return this.parentNode
        }
        function xt(n) {
            return null == n ? {
                x: t.event.x,
                y: t.event.y
            } : n
        }
        function wt(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n)
                e[r] = n[r];
            return e
        }
        function Mt() {}
        function At(t) {
            var n;
            return t = (t + "").trim().toLowerCase(),
            (n = Il.exec(t)) ? (n = parseInt(n[1], 16),
            new Tt(n >> 8 & 15 | n >> 4 & 240,n >> 4 & 15 | 240 & n,(15 & n) << 4 | 15 & n,1)) : (n = jl.exec(t)) ? St(parseInt(n[1], 16)) : (n = Ul.exec(t)) ? new Tt(n[1],n[2],n[3],1) : (n = Dl.exec(t)) ? new Tt(255 * n[1] / 100,255 * n[2] / 100,255 * n[3] / 100,1) : (n = $l.exec(t)) ? kt(n[1], n[2], n[3], n[4]) : (n = Bl.exec(t)) ? kt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Fl.exec(t)) ? Nt(n[1], n[2] / 100, n[3] / 100, 1) : (n = ql.exec(t)) ? Nt(n[1], n[2] / 100, n[3] / 100, n[4]) : Yl.hasOwnProperty(t) ? St(Yl[t]) : "transparent" === t ? new Tt(NaN,NaN,NaN,0) : null
        }
        function St(t) {
            return new Tt(t >> 16 & 255,t >> 8 & 255,255 & t,1)
        }
        function kt(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN),
            new Tt(t,n,e,r)
        }
        function Ct(t) {
            return t instanceof Mt || (t = At(t)),
            t ? (t = t.rgb(),
            new Tt(t.r,t.g,t.b,t.opacity)) : new Tt
        }
        function Et(t, n, e, r) {
            return 1 === arguments.length ? Ct(t) : new Tt(t,n,e,null == r ? 1 : r)
        }
        function Tt(t, n, e, r) {
            this.r = +t,
            this.g = +n,
            this.b = +e,
            this.opacity = +r
        }
        function Nt(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN),
            new Pt(t,n,e,r)
        }
        function Ot(t) {
            if (t instanceof Pt)
                return new Pt(t.h,t.s,t.l,t.opacity);
            if (t instanceof Mt || (t = At(t)),
            !t)
                return new Pt;
            if (t instanceof Pt)
                return t;
            t = t.rgb();
            var n = t.r / 255
              , e = t.g / 255
              , r = t.b / 255
              , i = Math.min(n, e, r)
              , o = Math.max(n, e, r)
              , a = NaN
              , u = o - i
              , s = (o + i) / 2;
            return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4,
            u /= s < .5 ? o + i : 2 - o - i,
            a *= 60) : u = s > 0 && s < 1 ? 0 : a,
            new Pt(a,u,s,t.opacity)
        }
        function Rt(t, n, e, r) {
            return 1 === arguments.length ? Ot(t) : new Pt(t,n,e,null == r ? 1 : r)
        }
        function Pt(t, n, e, r) {
            this.h = +t,
            this.s = +n,
            this.l = +e,
            this.opacity = +r
        }
        function Lt(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }
        function zt(t) {
            if (t instanceof jt)
                return new jt(t.l,t.a,t.b,t.opacity);
            if (t instanceof Yt) {
                var n = t.h * Hl;
                return new jt(t.l,Math.cos(n) * t.c,Math.sin(n) * t.c,t.opacity)
            }
            t instanceof Tt || (t = Ct(t));
            var e = Bt(t.r)
              , r = Bt(t.g)
              , i = Bt(t.b)
              , o = Ut((.4124564 * e + .3575761 * r + .1804375 * i) / Xl)
              , a = Ut((.2126729 * e + .7151522 * r + .072175 * i) / Gl);
            return new jt(116 * a - 16,500 * (o - a),200 * (a - Ut((.0193339 * e + .119192 * r + .9503041 * i) / Zl)),t.opacity)
        }
        function It(t, n, e, r) {
            return 1 === arguments.length ? zt(t) : new jt(t,n,e,null == r ? 1 : r)
        }
        function jt(t, n, e, r) {
            this.l = +t,
            this.a = +n,
            this.b = +e,
            this.opacity = +r
        }
        function Ut(t) {
            return t > th ? Math.pow(t, 1 / 3) : t / Jl + Kl
        }
        function Dt(t) {
            return t > Ql ? t * t * t : Jl * (t - Kl)
        }
        function $t(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }
        function Bt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        function Ft(t) {
            if (t instanceof Yt)
                return new Yt(t.h,t.c,t.l,t.opacity);
            t instanceof jt || (t = zt(t));
            var n = Math.atan2(t.b, t.a) * Wl;
            return new Yt(n < 0 ? n + 360 : n,Math.sqrt(t.a * t.a + t.b * t.b),t.l,t.opacity)
        }
        function qt(t, n, e, r) {
            return 1 === arguments.length ? Ft(t) : new Yt(t,n,e,null == r ? 1 : r)
        }
        function Yt(t, n, e, r) {
            this.h = +t,
            this.c = +n,
            this.l = +e,
            this.opacity = +r
        }
        function Ht(t) {
            if (t instanceof Vt)
                return new Vt(t.h,t.s,t.l,t.opacity);
            t instanceof Tt || (t = Ct(t));
            var n = t.r / 255
              , e = t.g / 255
              , r = t.b / 255
              , i = (sh * r + ah * n - uh * e) / (sh + ah - uh)
              , o = r - i
              , a = (oh * (e - i) - rh * o) / ih
              , u = Math.sqrt(a * a + o * o) / (oh * i * (1 - i))
              , s = u ? Math.atan2(a, o) * Wl - 120 : NaN;
            return new Vt(s < 0 ? s + 360 : s,u,i,t.opacity)
        }
        function Wt(t, n, e, r) {
            return 1 === arguments.length ? Ht(t) : new Vt(t,n,e,null == r ? 1 : r)
        }
        function Vt(t, n, e, r) {
            this.h = +t,
            this.s = +n,
            this.l = +e,
            this.opacity = +r
        }
        function Xt(t, n, e, r, i) {
            var o = t * t
              , a = o * t;
            return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
        }
        function Gt(t, n) {
            return function(e) {
                return t + e * n
            }
        }
        function Zt(t, n, e) {
            return t = Math.pow(t, e),
            n = Math.pow(n, e) - t,
            e = 1 / e,
            function(r) {
                return Math.pow(t + r * n, e)
            }
        }
        function Kt(t, n) {
            var e = n - t;
            return e ? Gt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : yh(isNaN(t) ? n : t)
        }
        function Qt(t) {
            return 1 == (t = +t) ? Jt : function(n, e) {
                return e - n ? Zt(n, e, t) : yh(isNaN(n) ? e : n)
            }
        }
        function Jt(t, n) {
            var e = n - t;
            return e ? Gt(t, e) : yh(isNaN(t) ? n : t)
        }
        function tn(t) {
            return function(n) {
                var e, r, i = n.length, o = new Array(i), a = new Array(i), u = new Array(i);
                for (e = 0; e < i; ++e)
                    r = Et(n[e]),
                    o[e] = r.r || 0,
                    a[e] = r.g || 0,
                    u[e] = r.b || 0;
                return o = t(o),
                a = t(a),
                u = t(u),
                r.opacity = 1,
                function(t) {
                    return r.r = o(t),
                    r.g = a(t),
                    r.b = u(t),
                    r + ""
                }
            }
        }
        function nn(t) {
            return function() {
                return t
            }
        }
        function en(t) {
            return function(n) {
                return t(n) + ""
            }
        }
        function rn(t) {
            return "none" === t ? Oh : (ch || (ch = document.createElement("DIV"),
            fh = document.documentElement,
            lh = document.defaultView),
            ch.style.transform = t,
            t = lh.getComputedStyle(fh.appendChild(ch), null).getPropertyValue("transform"),
            fh.removeChild(ch),
            t = t.slice(7, -1).split(","),
            Rh(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }
        function on(t) {
            return null == t ? Oh : (hh || (hh = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            hh.setAttribute("transform", t),
            (t = hh.transform.baseVal.consolidate()) ? (t = t.matrix,
            Rh(t.a, t.b, t.c, t.d, t.e, t.f)) : Oh)
        }
        function an(t, n, e, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }
            function o(t, r, i, o, a, u) {
                if (t !== i || r !== o) {
                    var s = a.push("translate(", null, n, null, e);
                    u.push({
                        i: s - 4,
                        x: Mh(t, i)
                    }, {
                        i: s - 2,
                        x: Mh(r, o)
                    })
                } else
                    (i || o) && a.push("translate(" + i + n + o + e)
            }
            function a(t, n, e, o) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360),
                o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: Mh(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            }
            function u(t, n, e, o) {
                t !== n ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: Mh(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            }
            function s(t, n, e, r, o, a) {
                if (t !== e || n !== r) {
                    var u = o.push(i(o) + "scale(", null, ",", null, ")");
                    a.push({
                        i: u - 4,
                        x: Mh(t, e)
                    }, {
                        i: u - 2,
                        x: Mh(n, r)
                    })
                } else
                    1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
            }
            return function(n, e) {
                var r = []
                  , i = [];
                return n = t(n),
                e = t(e),
                o(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
                a(n.rotate, e.rotate, r, i),
                u(n.skewX, e.skewX, r, i),
                s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
                n = e = null,
                function(t) {
                    for (var n, e = -1, o = i.length; ++e < o; )
                        r[(n = i[e]).i] = n.x(t);
                    return r.join("")
                }
            }
        }
        function un(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        function sn(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }
        function cn(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }
        function fn(t) {
            return function(n, e) {
                var r = t((n = Rt(n)).h, (e = Rt(e)).h)
                  , i = Jt(n.s, e.s)
                  , o = Jt(n.l, e.l)
                  , a = Jt(n.opacity, e.opacity);
                return function(t) {
                    return n.h = r(t),
                    n.s = i(t),
                    n.l = o(t),
                    n.opacity = a(t),
                    n + ""
                }
            }
        }
        function ln(t, n) {
            var e = Jt((t = It(t)).l, (n = It(n)).l)
              , r = Jt(t.a, n.a)
              , i = Jt(t.b, n.b)
              , o = Jt(t.opacity, n.opacity);
            return function(n) {
                return t.l = e(n),
                t.a = r(n),
                t.b = i(n),
                t.opacity = o(n),
                t + ""
            }
        }
        function hn(t) {
            return function(n, e) {
                var r = t((n = qt(n)).h, (e = qt(e)).h)
                  , i = Jt(n.c, e.c)
                  , o = Jt(n.l, e.l)
                  , a = Jt(n.opacity, e.opacity);
                return function(t) {
                    return n.h = r(t),
                    n.c = i(t),
                    n.l = o(t),
                    n.opacity = a(t),
                    n + ""
                }
            }
        }
        function pn(t) {
            return function n(e) {
                function r(n, r) {
                    var i = t((n = Wt(n)).h, (r = Wt(r)).h)
                      , o = Jt(n.s, r.s)
                      , a = Jt(n.l, r.l)
                      , u = Jt(n.opacity, r.opacity);
                    return function(t) {
                        return n.h = i(t),
                        n.s = o(t),
                        n.l = a(Math.pow(t, e)),
                        n.opacity = u(t),
                        n + ""
                    }
                }
                return e = +e,
                r.gamma = n,
                r
            }(1)
        }
        function dn() {
            return Qh || (np(vn),
            Qh = tp.now() + Jh)
        }
        function vn() {
            Qh = 0
        }
        function gn() {
            this._call = this._time = this._next = null
        }
        function yn(t, n, e) {
            var r = new gn;
            return r.restart(t, n, e),
            r
        }
        function _n() {
            dn(),
            ++Vh;
            for (var t, n = ph; n; )
                (t = Qh - n._time) >= 0 && n._call.call(null, t),
                n = n._next;
            --Vh
        }
        function mn() {
            Qh = (Kh = tp.now()) + Jh,
            Vh = Xh = 0;
            try {
                _n()
            } finally {
                Vh = 0,
                xn(),
                Qh = 0
            }
        }
        function bn() {
            var t = tp.now()
              , n = t - Kh;
            n > Zh && (Jh -= n,
            Kh = t)
        }
        function xn() {
            for (var t, n, e = ph, r = 1 / 0; e; )
                e._call ? (r > e._time && (r = e._time),
                t = e,
                e = e._next) : (n = e._next,
                e._next = null,
                e = t ? t._next = n : ph = n);
            dh = t,
            wn(r)
        }
        function wn(t) {
            if (!Vh) {
                Xh && (Xh = clearTimeout(Xh));
                var n = t - Qh;
                n > 24 ? (t < 1 / 0 && (Xh = setTimeout(mn, n)),
                Gh && (Gh = clearInterval(Gh))) : (Gh || (Kh = Qh,
                Gh = setInterval(bn, Zh)),
                Vh = 1,
                np(mn))
            }
        }
        function Mn(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]) || e.state > ap)
                throw new Error("too late");
            return e
        }
        function An(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]) || e.state > sp)
                throw new Error("too late");
            return e
        }
        function Sn(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]))
                throw new Error("too late");
            return e
        }
        function kn(t, n, e) {
            function r(t) {
                e.state = up,
                e.timer.restart(i, e.delay, e.time),
                e.delay <= t && i(t - e.delay)
            }
            function i(r) {
                var c, f, l, h;
                if (e.state !== up)
                    return a();
                for (c in s)
                    if (h = s[c],
                    h.name === e.name) {
                        if (h.state === cp)
                            return ep(i);
                        h.state === fp ? (h.state = hp,
                        h.timer.stop(),
                        h.on.call("interrupt", t, t.__data__, h.index, h.group),
                        delete s[c]) : +c < n && (h.state = hp,
                        h.timer.stop(),
                        delete s[c])
                    }
                if (ep(function() {
                    e.state === cp && (e.state = fp,
                    e.timer.restart(o, e.delay, e.time),
                    o(r))
                }),
                e.state = sp,
                e.on.call("start", t, t.__data__, e.index, e.group),
                e.state === sp) {
                    for (e.state = cp,
                    u = new Array(l = e.tween.length),
                    c = 0,
                    f = -1; c < l; ++c)
                        (h = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (u[++f] = h);
                    u.length = f + 1
                }
            }
            function o(n) {
                for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a),
                e.state = lp,
                1), i = -1, o = u.length; ++i < o; )
                    u[i].call(null, r);
                e.state === lp && (e.on.call("end", t, t.__data__, e.index, e.group),
                a())
            }
            function a() {
                e.state = hp,
                e.timer.stop(),
                delete s[n];
                for (var r in s)
                    return;
                delete t.__transition
            }
            var u, s = t.__transition;
            s[n] = e,
            e.timer = yn(r, 0, e.time)
        }
        function Cn(t, n) {
            var e, r;
            return function() {
                var i = An(this, t)
                  , o = i.tween;
                if (o !== e) {
                    r = e = o;
                    for (var a = 0, u = r.length; a < u; ++a)
                        if (r[a].name === n) {
                            r = r.slice(),
                            r.splice(a, 1);
                            break
                        }
                }
                i.tween = r
            }
        }
        function En(t, n, e) {
            var r, i;
            if ("function" != typeof e)
                throw new Error;
            return function() {
                var o = An(this, t)
                  , a = o.tween;
                if (a !== r) {
                    i = (r = a).slice();
                    for (var u = {
                        name: n,
                        value: e
                    }, s = 0, c = i.length; s < c; ++s)
                        if (i[s].name === n) {
                            i[s] = u;
                            break
                        }
                    s === c && i.push(u)
                }
                o.tween = i
            }
        }
        function Tn(t, n, e) {
            var r = t._id;
            return t.each(function() {
                var t = An(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            }),
            function(t) {
                return Sn(t, r).value[n]
            }
        }
        function Nn(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function On(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function Rn(t, n, e) {
            var r, i;
            return function() {
                var o = this.getAttribute(t);
                return o === e ? null : o === r ? i : i = n(r = o, e)
            }
        }
        function Pn(t, n, e) {
            var r, i;
            return function() {
                var o = this.getAttributeNS(t.space, t.local);
                return o === e ? null : o === r ? i : i = n(r = o, e)
            }
        }
        function Ln(t, n, e) {
            var r, i, o;
            return function() {
                var a, u = e(this);
                return null == u ? void this.removeAttribute(t) : (a = this.getAttribute(t),
                a === u ? null : a === r && u === i ? o : o = n(r = a, i = u))
            }
        }
        function zn(t, n, e) {
            var r, i, o;
            return function() {
                var a, u = e(this);
                return null == u ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local),
                a === u ? null : a === r && u === i ? o : o = n(r = a, i = u))
            }
        }
        function In(t, n) {
            function e() {
                var e = this
                  , r = n.apply(e, arguments);
                return r && function(n) {
                    e.setAttributeNS(t.space, t.local, r(n))
                }
            }
            return e._value = n,
            e
        }
        function jn(t, n) {
            function e() {
                var e = this
                  , r = n.apply(e, arguments);
                return r && function(n) {
                    e.setAttribute(t, r(n))
                }
            }
            return e._value = n,
            e
        }
        function Un(t, n) {
            return function() {
                Mn(this, t).delay = +n.apply(this, arguments)
            }
        }
        function Dn(t, n) {
            return n = +n,
            function() {
                Mn(this, t).delay = n
            }
        }
        function $n(t, n) {
            return function() {
                An(this, t).duration = +n.apply(this, arguments)
            }
        }
        function Bn(t, n) {
            return n = +n,
            function() {
                An(this, t).duration = n
            }
        }
        function Fn(t, n) {
            if ("function" != typeof n)
                throw new Error;
            return function() {
                An(this, t).ease = n
            }
        }
        function qn(t) {
            return (t + "").trim().split(/^|\s+/).every(function(t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)),
                !t || "start" === t
            })
        }
        function Yn(t, n, e) {
            var r, i, o = qn(n) ? Mn : An;
            return function() {
                var a = o(this, t)
                  , u = a.on;
                u !== r && (i = (r = u).copy()).on(n, e),
                a.on = i
            }
        }
        function Hn(t) {
            return function() {
                var n = this.parentNode;
                for (var e in this.__transition)
                    if (+e !== t)
                        return;
                n && n.removeChild(this)
            }
        }
        function Wn(t, n) {
            var e, r, i;
            return function() {
                var o = sl(this).getComputedStyle(this, null)
                  , a = o.getPropertyValue(t)
                  , u = (this.style.removeProperty(t),
                o.getPropertyValue(t));
                return a === u ? null : a === e && u === r ? i : i = n(e = a, r = u)
            }
        }
        function Vn(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function Xn(t, n, e) {
            var r, i;
            return function() {
                var o = sl(this).getComputedStyle(this, null).getPropertyValue(t);
                return o === e ? null : o === r ? i : i = n(r = o, e)
            }
        }
        function Gn(t, n, e) {
            var r, i, o;
            return function() {
                var a = sl(this).getComputedStyle(this, null)
                  , u = a.getPropertyValue(t)
                  , s = e(this);
                return null == s && (this.style.removeProperty(t),
                s = a.getPropertyValue(t)),
                u === s ? null : u === r && s === i ? o : o = n(r = u, i = s)
            }
        }
        function Zn(t, n, e) {
            function r() {
                var r = this
                  , i = n.apply(r, arguments);
                return i && function(n) {
                    r.style.setProperty(t, i(n), e)
                }
            }
            return r._value = n,
            r
        }
        function Kn(t) {
            return function() {
                this.textContent = t
            }
        }
        function Qn(t) {
            return function() {
                var n = t(this);
                this.textContent = null == n ? "" : n
            }
        }
        function Jn(t, n, e, r) {
            this._groups = t,
            this._parents = n,
            this._name = e,
            this._id = r
        }
        function te(t) {
            return vt().transition(t)
        }
        function ne() {
            return ++zp
        }
        function ee(t) {
            return +t
        }
        function re(t) {
            return t * t
        }
        function ie(t) {
            return t * (2 - t)
        }
        function oe(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }
        function ae(t) {
            return t * t * t
        }
        function ue(t) {
            return --t * t * t + 1
        }
        function se(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        function ce(t) {
            return 1 - Math.cos(t * Fp)
        }
        function fe(t) {
            return Math.sin(t * Fp)
        }
        function le(t) {
            return (1 - Math.cos(Bp * t)) / 2
        }
        function he(t) {
            return Math.pow(2, 10 * t - 10)
        }
        function pe(t) {
            return 1 - Math.pow(2, -10 * t)
        }
        function de(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
        }
        function ve(t) {
            return 1 - Math.sqrt(1 - t * t)
        }
        function ge(t) {
            return Math.sqrt(1 - --t * t)
        }
        function ye(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        }
        function _e(t) {
            return 1 - me(1 - t)
        }
        function me(t) {
            return (t = +t) < qp ? Qp * t * t : t < Hp ? Qp * (t -= Yp) * t + Wp : t < Xp ? Qp * (t -= Vp) * t + Gp : Qp * (t -= Zp) * t + Kp
        }
        function be(t) {
            return ((t *= 2) <= 1 ? 1 - me(1 - t) : me(t - 1) + 1) / 2
        }
        function xe(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]); )
                if (!(t = t.parentNode))
                    return cd.time = dn(),
                    cd;
            return e
        }
        function we() {
            t.event.stopImmediatePropagation()
        }
        function Me(t) {
            return {
                type: t
            }
        }
        function Ae() {
            return !t.event.button
        }
        function Se() {
            var t = this.ownerSVGElement || this;
            return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
        }
        function ke(t) {
            for (; !t.__brush; )
                if (!(t = t.parentNode))
                    return;
            return t.__brush
        }
        function Ce(t) {
            return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }
        function Ee(t) {
            var n = t.__brush;
            return n ? n.dim.output(n.selection) : null
        }
        function Te() {
            return Oe(bd)
        }
        function Ne() {
            return Oe(xd)
        }
        function Oe(n) {
            function e(t) {
                var e = t.property("__brush", u).selectAll(".overlay").data([Me("overlay")]);
                e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Md.overlay).merge(e).each(function() {
                    var t = ke(this).extent;
                    wl(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                }),
                t.selectAll(".selection").data([Me("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Md.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var i = t.selectAll(".handle").data(n.handles, function(t) {
                    return t.type
                });
                i.exit().remove(),
                i.enter().append("rect").attr("class", function(t) {
                    return "handle handle--" + t.type
                }).attr("cursor", function(t) {
                    return Md[t.type]
                }),
                t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", a)
            }
            function r() {
                var t = wl(this)
                  , n = ke(this).selection;
                n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]),
                t.selectAll(".handle").style("display", null).attr("x", function(t) {
                    return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
                }).attr("y", function(t) {
                    return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
                }).attr("width", function(t) {
                    return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
                }).attr("height", function(t) {
                    return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
                })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }
            function i(t, n) {
                return t.__brush.emitter || new o(t,n)
            }
            function o(t, n) {
                this.that = t,
                this.args = n,
                this.state = t.__brush,
                this.active = 0
            }
            function a() {
                function e() {
                    var t = $f(A);
                    !I || w || M || (Math.abs(t[0] - U[0]) > Math.abs(t[1] - U[1]) ? M = !0 : w = !0),
                    U = t,
                    x = !0,
                    vd(),
                    o()
                }
                function o() {
                    var t;
                    switch (m = U[0] - j[0],
                    b = U[1] - j[1],
                    k) {
                    case yd:
                    case gd:
                        C && (m = Math.max(R - l, Math.min(L - v, m)),
                        h = l + m,
                        g = v + m),
                        E && (b = Math.max(P - p, Math.min(z - y, b)),
                        d = p + b,
                        _ = y + b);
                        break;
                    case _d:
                        C < 0 ? (m = Math.max(R - l, Math.min(L - l, m)),
                        h = l + m,
                        g = v) : C > 0 && (m = Math.max(R - v, Math.min(L - v, m)),
                        h = l,
                        g = v + m),
                        E < 0 ? (b = Math.max(P - p, Math.min(z - p, b)),
                        d = p + b,
                        _ = y) : E > 0 && (b = Math.max(P - y, Math.min(z - y, b)),
                        d = p,
                        _ = y + b);
                        break;
                    case md:
                        C && (h = Math.max(R, Math.min(L, l - m * C)),
                        g = Math.max(R, Math.min(L, v + m * C))),
                        E && (d = Math.max(P, Math.min(z, p - b * E)),
                        _ = Math.max(P, Math.min(z, y + b * E)))
                    }
                    g < h && (C *= -1,
                    t = l,
                    l = v,
                    v = t,
                    t = h,
                    h = g,
                    g = t,
                    S in Ad && B.attr("cursor", Md[S = Ad[S]])),
                    _ < d && (E *= -1,
                    t = p,
                    p = y,
                    y = t,
                    t = d,
                    d = _,
                    _ = t,
                    S in Sd && B.attr("cursor", Md[S = Sd[S]])),
                    T.selection && (O = T.selection),
                    w && (h = O[0][0],
                    g = O[1][0]),
                    M && (d = O[0][1],
                    _ = O[1][1]),
                    O[0][0] === h && O[0][1] === d && O[1][0] === g && O[1][1] === _ || (T.selection = [[h, d], [g, _]],
                    r.call(A),
                    D.brush())
                }
                function a() {
                    if (we(),
                    t.event.touches) {
                        if (t.event.touches.length)
                            return;
                        s && clearTimeout(s),
                        s = setTimeout(function() {
                            s = null
                        }, 500),
                        $.on("touchmove.brush touchend.brush touchcancel.brush", null)
                    } else
                        yt(t.event.view, x),
                        F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    $.attr("pointer-events", "all"),
                    B.attr("cursor", Md.overlay),
                    T.selection && (O = T.selection),
                    Ce(O) && (T.selection = null,
                    r.call(A)),
                    D.end()
                }
                function u() {
                    switch (t.event.keyCode) {
                    case 16:
                        I = C && E;
                        break;
                    case 18:
                        k === _d && (C && (v = g - m * C,
                        l = h + m * C),
                        E && (y = _ - b * E,
                        p = d + b * E),
                        k = md,
                        o());
                        break;
                    case 32:
                        k !== _d && k !== md || (C < 0 ? v = g - m : C > 0 && (l = h - m),
                        E < 0 ? y = _ - b : E > 0 && (p = d - b),
                        k = yd,
                        B.attr("cursor", Md.selection),
                        o());
                        break;
                    default:
                        return
                    }
                    vd()
                }
                function c() {
                    switch (t.event.keyCode) {
                    case 16:
                        I && (w = M = I = !1,
                        o());
                        break;
                    case 18:
                        k === md && (C < 0 ? v = g : C > 0 && (l = h),
                        E < 0 ? y = _ : E > 0 && (p = d),
                        k = _d,
                        o());
                        break;
                    case 32:
                        k === yd && (t.event.altKey ? (C && (v = g - m * C,
                        l = h + m * C),
                        E && (y = _ - b * E,
                        p = d + b * E),
                        k = md) : (C < 0 ? v = g : C > 0 && (l = h),
                        E < 0 ? y = _ : E > 0 && (p = d),
                        k = _d),
                        B.attr("cursor", Md[S]),
                        o());
                        break;
                    default:
                        return
                    }
                    vd()
                }
                if (t.event.touches) {
                    if (t.event.changedTouches.length < t.event.touches.length)
                        return vd()
                } else if (s)
                    return;
                if (f.apply(this, arguments)) {
                    var l, h, p, d, v, g, y, _, m, b, x, w, M, A = this, S = t.event.target.__data__.type, k = "selection" === (t.event.metaKey ? S = "overlay" : S) ? gd : t.event.altKey ? md : _d, C = n === xd ? null : kd[S], E = n === bd ? null : Cd[S], T = ke(A), N = T.extent, O = T.selection, R = N[0][0], P = N[0][1], L = N[1][0], z = N[1][1], I = C && E && t.event.shiftKey, j = $f(A), U = j, D = i(A, arguments).beforestart();
                    "overlay" === S ? T.selection = O = [[l = n === xd ? R : j[0], p = n === bd ? P : j[1]], [v = n === xd ? L : l, y = n === bd ? z : p]] : (l = O[0][0],
                    p = O[0][1],
                    v = O[1][0],
                    y = O[1][1]),
                    h = l,
                    d = p,
                    g = v,
                    _ = y;
                    var $ = wl(A).attr("pointer-events", "none")
                      , B = $.selectAll(".overlay").attr("cursor", Md[S]);
                    if (t.event.touches)
                        $.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", a, !0);
                    else {
                        var F = wl(t.event.view).on("keydown.brush", u, !0).on("keyup.brush", c, !0).on("mousemove.brush", e, !0).on("mouseup.brush", a, !0);
                        Cl(t.event.view)
                    }
                    we(),
                    dp(A),
                    r.call(A),
                    D.start()
                }
            }
            function u() {
                var t = this.__brush || {
                    selection: null
                };
                return t.extent = c.apply(this, arguments),
                t.dim = n,
                t
            }
            var s, c = Se, f = Ae, l = d(e, "start", "brush", "end"), h = 6;
            return e.move = function(t, e) {
                t.selection ? t.on("start.brush", function() {
                    i(this, arguments).beforestart().start()
                }).on("interrupt.brush end.brush", function() {
                    i(this, arguments).end()
                }).tween("brush", function() {
                    function t(t) {
                        a.selection = 1 === t && Ce(c) ? null : f(t),
                        r.call(o),
                        u.brush()
                    }
                    var o = this
                      , a = o.__brush
                      , u = i(o, arguments)
                      , s = a.selection
                      , c = n.input("function" == typeof e ? e.apply(this, arguments) : e, a.extent)
                      , f = Eh(s, c);
                    return s && c ? t : t(1)
                }) : t.each(function() {
                    var t = this
                      , o = arguments
                      , a = t.__brush
                      , u = n.input("function" == typeof e ? e.apply(t, o) : e, a.extent)
                      , s = i(t, o).beforestart();
                    dp(t),
                    a.selection = null == u || Ce(u) ? null : u,
                    r.call(t),
                    s.start().brush().end()
                })
            }
            ,
            o.prototype = {
                beforestart: function() {
                    return 1 == ++this.active && (this.state.emitter = this,
                    this.starting = !0),
                    this
                },
                start: function() {
                    return this.starting && (this.starting = !1,
                    this.emit("start")),
                    this
                },
                brush: function() {
                    return this.emit("brush"),
                    this
                },
                end: function() {
                    return 0 == --this.active && (delete this.state.emitter,
                    this.emit("end")),
                    this
                },
                emit: function(t) {
                    E(new dd(e,t,n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
                }
            },
            e.extent = function(t) {
                return arguments.length ? (c = "function" == typeof t ? t : pd([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
                e) : c
            }
            ,
            e.filter = function(t) {
                return arguments.length ? (f = "function" == typeof t ? t : pd(!!t),
                e) : f
            }
            ,
            e.handleSize = function(t) {
                return arguments.length ? (h = +t,
                e) : h
            }
            ,
            e.on = function() {
                var t = l.on.apply(l, arguments);
                return t === l ? e : t
            }
            ,
            e
        }
        function Re(t) {
            return function(n, e) {
                return t(n.source.value + n.target.value, e.source.value + e.target.value)
            }
        }
        function Pe() {
            this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = ""
        }
        function Le() {
            return new Pe
        }
        function ze(t) {
            return t.source
        }
        function Ie(t) {
            return t.target
        }
        function je(t) {
            return t.radius
        }
        function Ue(t) {
            return t.startAngle
        }
        function De(t) {
            return t.endAngle
        }
        function $e() {}
        function Be(t, n) {
            var e = new $e;
            if (t instanceof $e)
                t.each(function(t, n) {
                    e.set(n, t)
                });
            else if (Array.isArray(t)) {
                var r, i = -1, o = t.length;
                if (null == n)
                    for (; ++i < o; )
                        e.set(i, t[i]);
                else
                    for (; ++i < o; )
                        e.set(n(r = t[i], i, t), r)
            } else if (t)
                for (var a in t)
                    e.set(a, t[a]);
            return e
        }
        function Fe() {
            return {}
        }
        function qe(t, n, e) {
            t[n] = e
        }
        function Ye() {
            return Be()
        }
        function He(t, n, e) {
            t.set(n, e)
        }
        function We() {}
        function Ve(t, n) {
            var e = new We;
            if (t instanceof We)
                t.each(function(t) {
                    e.add(t)
                });
            else if (t) {
                var r = -1
                  , i = t.length;
                if (null == n)
                    for (; ++r < i; )
                        e.add(t[r]);
                else
                    for (; ++r < i; )
                        e.add(n(t[r], r, t))
            }
            return e
        }
        function Xe(t) {
            return new Function("d","return {" + t.map(function(t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
        }
        function Ge(t, n) {
            var e = Xe(t);
            return function(r, i) {
                return n(e(r), i, t)
            }
        }
        function Ze(t) {
            var n = Object.create(null)
              , e = [];
            return t.forEach(function(t) {
                for (var r in t)
                    r in n || e.push(n[r] = r)
            }),
            e
        }
        function Ke(t, n, e, r) {
            if (isNaN(n) || isNaN(e))
                return t;
            var i, o, a, u, s, c, f, l, h, p = t._root, d = {
                data: r
            }, v = t._x0, g = t._y0, y = t._x1, _ = t._y1;
            if (!p)
                return t._root = d,
                t;
            for (; p.length; )
                if ((c = n >= (o = (v + y) / 2)) ? v = o : y = o,
                (f = e >= (a = (g + _) / 2)) ? g = a : _ = a,
                i = p,
                !(p = p[l = f << 1 | c]))
                    return i[l] = d,
                    t;
            if (u = +t._x.call(null, p.data),
            s = +t._y.call(null, p.data),
            n === u && e === s)
                return d.next = p,
                i ? i[l] = d : t._root = d,
                t;
            do {
                i = i ? i[l] = new Array(4) : t._root = new Array(4),
                (c = n >= (o = (v + y) / 2)) ? v = o : y = o,
                (f = e >= (a = (g + _) / 2)) ? g = a : _ = a
            } while ((l = f << 1 | c) == (h = (s >= a) << 1 | u >= o));return i[h] = p,
            i[l] = d,
            t
        }
        function Qe(t) {
            var n, e, r, i, o = t.length, a = new Array(o), u = new Array(o), s = 1 / 0, c = 1 / 0, f = -(1 / 0), l = -(1 / 0);
            for (e = 0; e < o; ++e)
                isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r,
                u[e] = i,
                r < s && (s = r),
                r > f && (f = r),
                i < c && (c = i),
                i > l && (l = i));
            for (f < s && (s = this._x0,
            f = this._x1),
            l < c && (c = this._y0,
            l = this._y1),
            this.cover(s, c).cover(f, l),
            e = 0; e < o; ++e)
                Ke(this, a[e], u[e], t[e]);
            return this
        }
        function Je(t) {
            for (var n = 0, e = t.length; n < e; ++n)
                this.remove(t[n]);
            return this
        }
        function tr(t) {
            return t[0]
        }
        function nr(t) {
            return t[1]
        }
        function er(t, n, e) {
            var r = new rr(null == n ? tr : n,null == e ? nr : e,NaN,NaN,NaN,NaN);
            return null == t ? r : r.addAll(t)
        }
        function rr(t, n, e, r, i, o) {
            this._x = t,
            this._y = n,
            this._x0 = e,
            this._y0 = r,
            this._x1 = i,
            this._y1 = o,
            this._root = void 0
        }
        function ir(t) {
            for (var n = {
                data: t.data
            }, e = n; t = t.next; )
                e = e.next = {
                    data: t.data
                };
            return n
        }
        function or(t) {
            return t.x + t.vx
        }
        function ar(t) {
            return t.y + t.vy
        }
        function ur(t) {
            return t.index
        }
        function sr(t, n) {
            var e = t.get(n);
            if (!e)
                throw new Error("missing: " + n);
            return e
        }
        function cr(t) {
            return t.x
        }
        function fr(t) {
            return t.y
        }
        function lr(t) {
            return new hr(t)
        }
        function hr(t) {
            if (!(n = $v.exec(t)))
                throw new Error("invalid format: " + t);
            var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", o = n[4] || "", a = !!n[5], u = n[6] && +n[6], s = !!n[7], c = n[8] && +n[8].slice(1), f = n[9] || "";
            "n" === f ? (s = !0,
            f = "g") : Dv[f] || (f = ""),
            (a || "0" === e && "=" === r) && (a = !0,
            e = "0",
            r = "="),
            this.fill = e,
            this.align = r,
            this.sign = i,
            this.symbol = o,
            this.zero = a,
            this.width = u,
            this.comma = s,
            this.precision = c,
            this.type = f
        }
        function pr(n) {
            return Bv = Yv(n),
            t.format = Bv.format,
            t.formatPrefix = Bv.formatPrefix,
            Bv
        }
        function dr() {
            this.reset()
        }
        function vr(t, n, e) {
            var r = t.s = n + e
              , i = r - n
              , o = r - i;
            t.t = n - o + (e - i)
        }
        function gr(t) {
            return t > 1 ? 0 : t < -1 ? Tg : Math.acos(t)
        }
        function yr(t) {
            return t > 1 ? Ng : t < -1 ? -Ng : Math.asin(t)
        }
        function _r(t) {
            return (t = qg(t / 2)) * t
        }
        function mr() {}
        function br(t, n) {
            t && Xg.hasOwnProperty(t.type) && Xg[t.type](t, n)
        }
        function xr(t, n, e) {
            var r, i = -1, o = t.length - e;
            for (n.lineStart(); ++i < o; )
                r = t[i],
                n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }
        function wr(t, n) {
            var e = -1
              , r = t.length;
            for (n.polygonStart(); ++e < r; )
                xr(t[e], n, 1);
            n.polygonEnd()
        }
        function Mr() {
            Qg.point = Sr
        }
        function Ar() {
            kr(Gv, Zv)
        }
        function Sr(t, n) {
            Qg.point = kr,
            Gv = t,
            Zv = n,
            t *= Lg,
            n *= Lg,
            Kv = t,
            Qv = Ug(n = n / 2 + Og),
            Jv = qg(n)
        }
        function kr(t, n) {
            t *= Lg,
            n *= Lg,
            n = n / 2 + Og;
            var e = t - Kv
              , r = e >= 0 ? 1 : -1
              , i = r * e
              , o = Ug(n)
              , a = qg(n)
              , u = Jv * a
              , s = Qv * o + u * Ug(i)
              , c = u * r * qg(i);
            Zg.add(jg(c, s)),
            Kv = t,
            Qv = o,
            Jv = a
        }
        function Cr(t) {
            return [jg(t[1], t[0]), yr(t[2])]
        }
        function Er(t) {
            var n = t[0]
              , e = t[1]
              , r = Ug(e);
            return [r * Ug(n), r * qg(n), qg(e)]
        }
        function Tr(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }
        function Nr(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }
        function Or(t, n) {
            t[0] += n[0],
            t[1] += n[1],
            t[2] += n[2]
        }
        function Rr(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }
        function Pr(t) {
            var n = Hg(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n,
            t[1] /= n,
            t[2] /= n
        }
        function Lr(t, n) {
            sg.push(cg = [tg = t, eg = t]),
            n < ng && (ng = n),
            n > rg && (rg = n)
        }
        function zr(t, n) {
            var e = Er([t * Lg, n * Lg]);
            if (ug) {
                var r = Nr(ug, e)
                  , i = [r[1], -r[0], 0]
                  , o = Nr(i, r);
                Pr(o),
                o = Cr(o);
                var a, u = t - ig, s = u > 0 ? 1 : -1, c = o[0] * Pg * s, f = zg(u) > 180;
                f ^ (s * ig < c && c < s * t) ? (a = o[1] * Pg) > rg && (rg = a) : (c = (c + 360) % 360 - 180,
                f ^ (s * ig < c && c < s * t) ? (a = -o[1] * Pg) < ng && (ng = a) : (n < ng && (ng = n),
                n > rg && (rg = n))),
                f ? t < ig ? Br(tg, t) > Br(tg, eg) && (eg = t) : Br(t, eg) > Br(tg, eg) && (tg = t) : eg >= tg ? (t < tg && (tg = t),
                t > eg && (eg = t)) : t > ig ? Br(tg, t) > Br(tg, eg) && (eg = t) : Br(t, eg) > Br(tg, eg) && (tg = t)
            } else
                sg.push(cg = [tg = t, eg = t]);
            n < ng && (ng = n),
            n > rg && (rg = n),
            ug = e,
            ig = t
        }
        function Ir() {
            ny.point = zr
        }
        function jr() {
            cg[0] = tg,
            cg[1] = eg,
            ny.point = Lr,
            ug = null
        }
        function Ur(t, n) {
            if (ug) {
                var e = t - ig;
                ty.add(zg(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else
                og = t,
                ag = n;
            Qg.point(t, n),
            zr(t, n)
        }
        function Dr() {
            Qg.lineStart()
        }
        function $r() {
            Ur(og, ag),
            Qg.lineEnd(),
            zg(ty) > Cg && (tg = -(eg = 180)),
            cg[0] = tg,
            cg[1] = eg,
            ug = null
        }
        function Br(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }
        function Fr(t, n) {
            return t[0] - n[0]
        }
        function qr(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        function Yr(t, n) {
            t *= Lg,
            n *= Lg;
            var e = Ug(n);
            Hr(e * Ug(t), e * qg(t), qg(n))
        }
        function Hr(t, n, e) {
            ++fg,
            hg += (t - hg) / fg,
            pg += (n - pg) / fg,
            dg += (e - dg) / fg
        }
        function Wr() {
            ry.point = Vr
        }
        function Vr(t, n) {
            t *= Lg,
            n *= Lg;
            var e = Ug(n);
            Mg = e * Ug(t),
            Ag = e * qg(t),
            Sg = qg(n),
            ry.point = Xr,
            Hr(Mg, Ag, Sg)
        }
        function Xr(t, n) {
            t *= Lg,
            n *= Lg;
            var e = Ug(n)
              , r = e * Ug(t)
              , i = e * qg(t)
              , o = qg(n)
              , a = jg(Hg((a = Ag * o - Sg * i) * a + (a = Sg * r - Mg * o) * a + (a = Mg * i - Ag * r) * a), Mg * r + Ag * i + Sg * o);
            lg += a,
            vg += a * (Mg + (Mg = r)),
            gg += a * (Ag + (Ag = i)),
            yg += a * (Sg + (Sg = o)),
            Hr(Mg, Ag, Sg)
        }
        function Gr() {
            ry.point = Yr
        }
        function Zr() {
            ry.point = Qr
        }
        function Kr() {
            Jr(xg, wg),
            ry.point = Yr
        }
        function Qr(t, n) {
            xg = t,
            wg = n,
            t *= Lg,
            n *= Lg,
            ry.point = Jr;
            var e = Ug(n);
            Mg = e * Ug(t),
            Ag = e * qg(t),
            Sg = qg(n),
            Hr(Mg, Ag, Sg)
        }
        function Jr(t, n) {
            t *= Lg,
            n *= Lg;
            var e = Ug(n)
              , r = e * Ug(t)
              , i = e * qg(t)
              , o = qg(n)
              , a = Ag * o - Sg * i
              , u = Sg * r - Mg * o
              , s = Mg * i - Ag * r
              , c = Hg(a * a + u * u + s * s)
              , f = yr(c)
              , l = c && -f / c;
            _g += l * a,
            mg += l * u,
            bg += l * s,
            lg += f,
            vg += f * (Mg + (Mg = r)),
            gg += f * (Ag + (Ag = i)),
            yg += f * (Sg + (Sg = o)),
            Hr(Mg, Ag, Sg)
        }
        function ti(t, n) {
            return [t > Tg ? t - Rg : t < -Tg ? t + Rg : t, n]
        }
        function ni(t, n, e) {
            return (t %= Rg) ? n || e ? ay(ri(t), ii(n, e)) : ri(t) : n || e ? ii(n, e) : ti
        }
        function ei(t) {
            return function(n, e) {
                return n += t,
                [n > Tg ? n - Rg : n < -Tg ? n + Rg : n, e]
            }
        }
        function ri(t) {
            var n = ei(t);
            return n.invert = ei(-t),
            n
        }
        function ii(t, n) {
            function e(t, n) {
                var e = Ug(n)
                  , u = Ug(t) * e
                  , s = qg(t) * e
                  , c = qg(n)
                  , f = c * r + u * i;
                return [jg(s * o - f * a, u * r - c * i), yr(f * o + s * a)]
            }
            var r = Ug(t)
              , i = qg(t)
              , o = Ug(n)
              , a = qg(n);
            return e.invert = function(t, n) {
                var e = Ug(n)
                  , u = Ug(t) * e
                  , s = qg(t) * e
                  , c = qg(n)
                  , f = c * o - s * a;
                return [jg(s * o + c * a, u * r + f * i), yr(f * r - u * i)]
            }
            ,
            e
        }
        function oi(t, n, e, r, i, o) {
            if (e) {
                var a = Ug(n)
                  , u = qg(n)
                  , s = r * e;
                null == i ? (i = n + r * Rg,
                o = n - s / 2) : (i = ai(a, i),
                o = ai(a, o),
                (r > 0 ? i < o : i > o) && (i += r * Rg));
                for (var c, f = i; r > 0 ? f > o : f < o; f -= s)
                    c = Cr([a, -u * Ug(f), -u * qg(f)]),
                    t.point(c[0], c[1])
            }
        }
        function ai(t, n) {
            n = Er(n),
            n[0] -= t,
            Pr(n);
            var e = gr(-n[1]);
            return ((-n[2] < 0 ? -e : e) + Rg - Cg) % Rg
        }
        function ui(t, n, e, r) {
            this.x = t,
            this.z = n,
            this.o = e,
            this.e = r,
            this.v = !1,
            this.n = this.p = null
        }
        function si(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n; )
                    i.n = e = t[r],
                    e.p = i,
                    i = e;
                i.n = e = t[0],
                e.p = i
            }
        }
        function ci(t, n, e, r) {
            function i(i, o) {
                return t <= i && i <= e && n <= o && o <= r
            }
            function o(i, o, u, c) {
                var f = 0
                  , l = 0;
                if (null == i || (f = a(i, u)) !== (l = a(o, u)) || s(i, o) < 0 ^ u > 0)
                    do {
                        c.point(0 === f || 3 === f ? t : e, f > 1 ? r : n)
                    } while ((f = (f + u + 4) % 4) !== l);
                else
                    c.point(o[0], o[1])
            }
            function a(r, i) {
                return zg(r[0] - t) < Cg ? i > 0 ? 0 : 3 : zg(r[0] - e) < Cg ? i > 0 ? 2 : 1 : zg(r[1] - n) < Cg ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
            }
            function u(t, n) {
                return s(t.x, n.x)
            }
            function s(t, n) {
                var e = a(t, 1)
                  , r = a(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(a) {
                function s(t, n) {
                    i(t, n) && k.point(t, n)
                }
                function c() {
                    for (var n = 0, e = 0, i = g.length; e < i; ++e)
                        for (var o, a, u = g[e], s = 1, c = u.length, f = u[0], l = f[0], h = f[1]; s < c; ++s)
                            o = l,
                            a = h,
                            f = u[s],
                            l = f[0],
                            h = f[1],
                            a <= r ? h > r && (l - o) * (r - a) > (h - a) * (t - o) && ++n : h <= r && (l - o) * (r - a) < (h - a) * (t - o) && --n;
                    return n
                }
                function f() {
                    k = C,
                    v = [],
                    g = [],
                    S = !0
                }
                function l() {
                    var t = c()
                      , n = S && t
                      , e = (v = lf(v)).length;
                    (n || e) && (a.polygonStart(),
                    n && (a.lineStart(),
                    o(null, null, 1, a),
                    a.lineEnd()),
                    e && My(v, u, t, o, a),
                    a.polygonEnd()),
                    k = a,
                    v = g = y = null
                }
                function h() {
                    E.point = d,
                    g && g.push(y = []),
                    A = !0,
                    M = !1,
                    x = w = NaN
                }
                function p() {
                    v && (d(_, m),
                    b && M && C.rejoin(),
                    v.push(C.result())),
                    E.point = s,
                    M && k.lineEnd()
                }
                function d(o, a) {
                    var u = i(o, a);
                    if (g && y.push([o, a]),
                    A)
                        _ = o,
                        m = a,
                        b = u,
                        A = !1,
                        u && (k.lineStart(),
                        k.point(o, a));
                    else if (u && M)
                        k.point(o, a);
                    else {
                        var s = [x = Math.max(Sy, Math.min(Ay, x)), w = Math.max(Sy, Math.min(Ay, w))]
                          , c = [o = Math.max(Sy, Math.min(Ay, o)), a = Math.max(Sy, Math.min(Ay, a))];
                        xy(s, c, t, n, e, r) ? (M || (k.lineStart(),
                        k.point(s[0], s[1])),
                        k.point(c[0], c[1]),
                        u || k.lineEnd(),
                        S = !1) : u && (k.lineStart(),
                        k.point(o, a),
                        S = !1)
                    }
                    x = o,
                    w = a,
                    M = u
                }
                var v, g, y, _, m, b, x, w, M, A, S, k = a, C = by(), E = {
                    point: s,
                    lineStart: h,
                    lineEnd: p,
                    polygonStart: f,
                    polygonEnd: l
                };
                return E
            }
        }
        function fi() {
            Ny.point = hi,
            Ny.lineEnd = li
        }
        function li() {
            Ny.point = Ny.lineEnd = mr
        }
        function hi(t, n) {
            t *= Lg,
            n *= Lg,
            uy = t,
            sy = qg(n),
            cy = Ug(n),
            Ny.point = pi
        }
        function pi(t, n) {
            t *= Lg,
            n *= Lg;
            var e = qg(n)
              , r = Ug(n)
              , i = zg(t - uy)
              , o = Ug(i)
              , a = qg(i)
              , u = r * a
              , s = cy * e - sy * r * o
              , c = sy * e + cy * r * o;
            Ty.add(jg(Hg(u * u + s * s), c)),
            uy = t,
            sy = e,
            cy = r
        }
        function di(t, n) {
            return !(!t || !Iy.hasOwnProperty(t.type)) && Iy[t.type](t, n)
        }
        function vi(t, n) {
            return 0 === Ly(t, n)
        }
        function gi(t, n) {
            var e = Ly(t[0], t[1]);
            return Ly(t[0], n) + Ly(n, t[1]) <= e + Cg
        }
        function yi(t, n) {
            return !!Ey(t.map(_i), mi(n))
        }
        function _i(t) {
            return t = t.map(mi),
            t.pop(),
            t
        }
        function mi(t) {
            return [t[0] * Lg, t[1] * Lg]
        }
        function bi(t, n, e) {
            var r = Kc(t, n - Cg, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [t, n]
                })
            }
        }
        function xi(t, n, e) {
            var r = Kc(t, n - Cg, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [n, t]
                })
            }
        }
        function wi() {
            function t() {
                return {
                    type: "MultiLineString",
                    coordinates: n()
                }
            }
            function n() {
                return Kc(Dg(o / g) * g, i, g).map(h).concat(Kc(Dg(c / y) * y, s, y).map(p)).concat(Kc(Dg(r / d) * d, e, d).filter(function(t) {
                    return zg(t % g) > Cg
                }).map(f)).concat(Kc(Dg(u / v) * v, a, v).filter(function(t) {
                    return zg(t % y) > Cg
                }).map(l))
            }
            var e, r, i, o, a, u, s, c, f, l, h, p, d = 10, v = d, g = 90, y = 360, _ = 2.5;
            return t.lines = function() {
                return n().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }
            ,
            t.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [h(o).concat(p(s).slice(1), h(i).reverse().slice(1), p(c).reverse().slice(1))]
                }
            }
            ,
            t.extent = function(n) {
                return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
            }
            ,
            t.extentMajor = function(n) {
                return arguments.length ? (o = +n[0][0],
                i = +n[1][0],
                c = +n[0][1],
                s = +n[1][1],
                o > i && (n = o,
                o = i,
                i = n),
                c > s && (n = c,
                c = s,
                s = n),
                t.precision(_)) : [[o, c], [i, s]]
            }
            ,
            t.extentMinor = function(n) {
                return arguments.length ? (r = +n[0][0],
                e = +n[1][0],
                u = +n[0][1],
                a = +n[1][1],
                r > e && (n = r,
                r = e,
                e = n),
                u > a && (n = u,
                u = a,
                a = n),
                t.precision(_)) : [[r, u], [e, a]]
            }
            ,
            t.step = function(n) {
                return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
            }
            ,
            t.stepMajor = function(n) {
                return arguments.length ? (g = +n[0],
                y = +n[1],
                t) : [g, y]
            }
            ,
            t.stepMinor = function(n) {
                return arguments.length ? (d = +n[0],
                v = +n[1],
                t) : [d, v]
            }
            ,
            t.precision = function(n) {
                return arguments.length ? (_ = +n,
                f = bi(u, a, 90),
                l = xi(r, e, _),
                h = bi(c, s, 90),
                p = xi(o, i, _),
                t) : _
            }
            ,
            t.extentMajor([[-180, -90 + Cg], [180, 90 - Cg]]).extentMinor([[-180, -80 - Cg], [180, 80 + Cg]])
        }
        function Mi() {
            return wi()()
        }
        function Ai() {
            Fy.point = Si
        }
        function Si(t, n) {
            Fy.point = ki,
            fy = hy = t,
            ly = py = n
        }
        function ki(t, n) {
            By.add(py * t - hy * n),
            hy = t,
            py = n
        }
        function Ci() {
            ki(fy, ly)
        }
        function Ei(t, n) {
            t < qy && (qy = t),
            t > Hy && (Hy = t),
            n < Yy && (Yy = n),
            n > Wy && (Wy = n)
        }
        function Ti(t, n) {
            Xy += t,
            Gy += n,
            ++Zy
        }
        function Ni() {
            r_.point = Oi
        }
        function Oi(t, n) {
            r_.point = Ri,
            Ti(gy = t, yy = n)
        }
        function Ri(t, n) {
            var e = t - gy
              , r = n - yy
              , i = Hg(e * e + r * r);
            Ky += i * (gy + t) / 2,
            Qy += i * (yy + n) / 2,
            Jy += i,
            Ti(gy = t, yy = n)
        }
        function Pi() {
            r_.point = Ti
        }
        function Li() {
            r_.point = Ii
        }
        function zi() {
            ji(dy, vy)
        }
        function Ii(t, n) {
            r_.point = ji,
            Ti(dy = gy = t, vy = yy = n)
        }
        function ji(t, n) {
            var e = t - gy
              , r = n - yy
              , i = Hg(e * e + r * r);
            Ky += i * (gy + t) / 2,
            Qy += i * (yy + n) / 2,
            Jy += i,
            i = yy * t - gy * n,
            t_ += i * (gy + t),
            n_ += i * (yy + n),
            e_ += 3 * i,
            Ti(gy = t, yy = n)
        }
        function Ui(t) {
            this._context = t
        }
        function Di(t, n) {
            f_.point = $i,
            o_ = u_ = t,
            a_ = s_ = n
        }
        function $i(t, n) {
            u_ -= t,
            s_ -= n,
            c_.add(Hg(u_ * u_ + s_ * s_)),
            u_ = t,
            s_ = n
        }
        function Bi() {
            this._string = []
        }
        function Fi(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }
        function qi(t) {
            return t.length > 1
        }
        function Yi(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - Ng - Cg : Ng - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Ng - Cg : Ng - n[1])
        }
        function Hi(t) {
            var n, e = NaN, r = NaN, i = NaN;
            return {
                lineStart: function() {
                    t.lineStart(),
                    n = 1
                },
                point: function(o, a) {
                    var u = o > 0 ? Tg : -Tg
                      , s = zg(o - e);
                    zg(s - Tg) < Cg ? (t.point(e, r = (r + a) / 2 > 0 ? Ng : -Ng),
                    t.point(i, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(u, r),
                    t.point(o, r),
                    n = 0) : i !== u && s >= Tg && (zg(e - i) < Cg && (e -= i * Cg),
                    zg(o - u) < Cg && (o -= u * Cg),
                    r = Wi(e, r, o, a),
                    t.point(i, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(u, r),
                    n = 0),
                    t.point(e = o, r = a),
                    i = u
                },
                lineEnd: function() {
                    t.lineEnd(),
                    e = r = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }
        function Wi(t, n, e, r) {
            var i, o, a = qg(t - e);
            return zg(a) > Cg ? Ig((qg(n) * (o = Ug(r)) * qg(e) - qg(r) * (i = Ug(n)) * qg(t)) / (i * o * a)) : (n + r) / 2
        }
        function Vi(t, n, e, r) {
            var i;
            if (null == t)
                i = e * Ng,
                r.point(-Tg, i),
                r.point(0, i),
                r.point(Tg, i),
                r.point(Tg, 0),
                r.point(Tg, -i),
                r.point(0, -i),
                r.point(-Tg, -i),
                r.point(-Tg, 0),
                r.point(-Tg, i);
            else if (zg(t[0] - n[0]) > Cg) {
                var o = t[0] < n[0] ? Tg : -Tg;
                i = e * o / 2,
                r.point(-o, i),
                r.point(0, i),
                r.point(o, i)
            } else
                r.point(n[0], n[1])
        }
        function Xi(t) {
            return function(n) {
                var e = new Gi;
                for (var r in t)
                    e[r] = t[r];
                return e.stream = n,
                e
            }
        }
        function Gi() {}
        function Zi(t, n, e) {
            var r = n[1][0] - n[0][0]
              , i = n[1][1] - n[0][1]
              , o = t.clipExtent && t.clipExtent();
            t.scale(150).translate([0, 0]),
            null != o && t.clipExtent(null),
            Gg(e, t.stream(Vy));
            var a = Vy.result()
              , u = Math.min(r / (a[1][0] - a[0][0]), i / (a[1][1] - a[0][1]))
              , s = +n[0][0] + (r - u * (a[1][0] + a[0][0])) / 2
              , c = +n[0][1] + (i - u * (a[1][1] + a[0][1])) / 2;
            return null != o && t.clipExtent(o),
            t.scale(150 * u).translate([s, c])
        }
        function Ki(t, n, e) {
            return Zi(t, [[0, 0], n], e)
        }
        function Qi(t) {
            return Xi({
                point: function(n, e) {
                    n = t(n, e),
                    this.stream.point(n[0], n[1])
                }
            })
        }
        function Ji(t, n) {
            function e(r, i, o, a, u, s, c, f, l, h, p, d, v, g) {
                var y = c - r
                  , _ = f - i
                  , m = y * y + _ * _;
                if (m > 4 * n && v--) {
                    var b = a + h
                      , x = u + p
                      , w = s + d
                      , M = Hg(b * b + x * x + w * w)
                      , A = yr(w /= M)
                      , S = zg(zg(w) - 1) < Cg || zg(o - l) < Cg ? (o + l) / 2 : jg(x, b)
                      , k = t(S, A)
                      , C = k[0]
                      , E = k[1]
                      , T = C - r
                      , N = E - i
                      , O = _ * T - y * N;
                    (O * O / m > n || zg((y * T + _ * N) / m - .5) > .3 || a * h + u * p + s * d < y_) && (e(r, i, o, a, u, s, C, E, S, b /= M, x /= M, w, v, g),
                    g.point(C, E),
                    e(C, E, S, b, x, w, c, f, l, h, p, d, v, g))
                }
            }
            return function(n) {
                function r(e, r) {
                    e = t(e, r),
                    n.point(e[0], e[1])
                }
                function i() {
                    y = NaN,
                    w.point = o,
                    n.lineStart()
                }
                function o(r, i) {
                    var o = Er([r, i])
                      , a = t(r, i);
                    e(y, _, g, m, b, x, y = a[0], _ = a[1], g = r, m = o[0], b = o[1], x = o[2], g_, n),
                    n.point(y, _)
                }
                function a() {
                    w.point = r,
                    n.lineEnd()
                }
                function u() {
                    i(),
                    w.point = s,
                    w.lineEnd = c
                }
                function s(t, n) {
                    o(f = t, n),
                    l = y,
                    h = _,
                    p = m,
                    d = b,
                    v = x,
                    w.point = o
                }
                function c() {
                    e(y, _, g, m, b, x, l, h, f, p, d, v, g_, n),
                    w.lineEnd = a,
                    a()
                }
                var f, l, h, p, d, v, g, y, _, m, b, x, w = {
                    point: r,
                    lineStart: i,
                    lineEnd: a,
                    polygonStart: function() {
                        n.polygonStart(),
                        w.lineStart = u
                    },
                    polygonEnd: function() {
                        n.polygonEnd(),
                        w.lineStart = i
                    }
                };
                return w
            }
        }
        function to(t) {
            return no(function() {
                return t
            })()
        }
        function no(t) {
            function n(t) {
                return t = f(t[0] * Lg, t[1] * Lg),
                [t[0] * g + u, s - t[1] * g]
            }
            function e(t) {
                return (t = f.invert((t[0] - u) / g, (s - t[1]) / g)) && [t[0] * Pg, t[1] * Pg]
            }
            function r(t, n) {
                return t = a(t, n),
                [t[0] * g + u, s - t[1] * g]
            }
            function i() {
                f = ay(c = ni(x, w, M), a);
                var t = a(m, b);
                return u = y - t[0] * g,
                s = _ + t[1] * g,
                o()
            }
            function o() {
                return d = v = null,
                n
            }
            var a, u, s, c, f, l, h, p, d, v, g = 150, y = 480, _ = 250, m = 0, b = 0, x = 0, w = 0, M = 0, A = null, S = p_, k = null, C = Dy, E = .5, T = __(r, E);
            return n.stream = function(t) {
                return d && v === t ? d : d = m_(S(c, T(C(v = t))))
            }
            ,
            n.clipAngle = function(t) {
                return arguments.length ? (S = +t ? d_(A = t * Lg, 6 * Lg) : (A = null,
                p_),
                o()) : A * Pg
            }
            ,
            n.clipExtent = function(t) {
                return arguments.length ? (C = null == t ? (k = l = h = p = null,
                Dy) : ci(k = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]),
                o()) : null == k ? null : [[k, l], [h, p]]
            }
            ,
            n.scale = function(t) {
                return arguments.length ? (g = +t,
                i()) : g
            }
            ,
            n.translate = function(t) {
                return arguments.length ? (y = +t[0],
                _ = +t[1],
                i()) : [y, _]
            }
            ,
            n.center = function(t) {
                return arguments.length ? (m = t[0] % 360 * Lg,
                b = t[1] % 360 * Lg,
                i()) : [m * Pg, b * Pg]
            }
            ,
            n.rotate = function(t) {
                return arguments.length ? (x = t[0] % 360 * Lg,
                w = t[1] % 360 * Lg,
                M = t.length > 2 ? t[2] % 360 * Lg : 0,
                i()) : [x * Pg, w * Pg, M * Pg]
            }
            ,
            n.precision = function(t) {
                return arguments.length ? (T = __(r, E = t * t),
                o()) : Hg(E)
            }
            ,
            n.fitExtent = function(t, e) {
                return Zi(n, t, e)
            }
            ,
            n.fitSize = function(t, e) {
                return Ki(n, t, e)
            }
            ,
            function() {
                return a = t.apply(this, arguments),
                n.invert = a.invert && e,
                i()
            }
        }
        function eo(t) {
            var n = 0
              , e = Tg / 3
              , r = no(t)
              , i = r(n, e);
            return i.parallels = function(t) {
                return arguments.length ? r(n = t[0] * Lg, e = t[1] * Lg) : [n * Pg, e * Pg]
            }
            ,
            i
        }
        function ro(t) {
            function n(t, n) {
                return [t * e, qg(n) / e]
            }
            var e = Ug(t);
            return n.invert = function(t, n) {
                return [t / e, yr(n * e)]
            }
            ,
            n
        }
        function io(t, n) {
            function e(t, n) {
                var e = Hg(o - 2 * i * qg(n)) / i;
                return [e * qg(t *= i), a - e * Ug(t)]
            }
            var r = qg(t)
              , i = (r + qg(n)) / 2;
            if (zg(i) < Cg)
                return ro(t);
            var o = 1 + r * (2 * i - r)
              , a = Hg(o) / i;
            return e.invert = function(t, n) {
                var e = a - n;
                return [jg(t, zg(e)) / i * Yg(e), yr((o - (t * t + e * e) * i * i) / (2 * i))]
            }
            ,
            e
        }
        function oo(t) {
            var n = t.length;
            return {
                point: function(e, r) {
                    for (var i = -1; ++i < n; )
                        t[i].point(e, r)
                },
                sphere: function() {
                    for (var e = -1; ++e < n; )
                        t[e].sphere()
                },
                lineStart: function() {
                    for (var e = -1; ++e < n; )
                        t[e].lineStart()
                },
                lineEnd: function() {
                    for (var e = -1; ++e < n; )
                        t[e].lineEnd()
                },
                polygonStart: function() {
                    for (var e = -1; ++e < n; )
                        t[e].polygonStart()
                },
                polygonEnd: function() {
                    for (var e = -1; ++e < n; )
                        t[e].polygonEnd()
                }
            }
        }
        function ao(t) {
            return function(n, e) {
                var r = Ug(n)
                  , i = Ug(e)
                  , o = t(r * i);
                return [o * i * qg(n), o * qg(e)]
            }
        }
        function uo(t) {
            return function(n, e) {
                var r = Hg(n * n + e * e)
                  , i = t(r)
                  , o = qg(i);
                return [jg(n * o, r * Ug(i)), yr(r && e * o / r)]
            }
        }
        function so(t, n) {
            return [t, Bg(Wg((Ng + n) / 2))]
        }
        function co(t) {
            function n() {
                var t = Tg * u()
                  , n = o([0, 0]);
                return c(null == f ? [[n[0] - t, n[1] - t], [n[0] + t, n[1] + t]] : [[Math.max(n[0] - t, f), e], [Math.min(n[0] + t, r), i]])
            }
            var e, r, i, o = to(t), a = o.center, u = o.scale, s = o.translate, c = o.clipExtent, f = null;
            return o.center = function(t) {
                return arguments.length ? (a(t),
                n()) : a()
            }
            ,
            o.scale = function(t) {
                return arguments.length ? (u(t),
                n()) : u()
            }
            ,
            o.translate = function(t) {
                return arguments.length ? (s(t),
                n()) : s()
            }
            ,
            o.clipExtent = function(t) {
                return arguments.length ? (null == t ? f = e = r = i = null : (f = +t[0][0],
                e = +t[0][1],
                r = +t[1][0],
                i = +t[1][1]),
                n()) : null == f ? null : [[f, e], [r, i]]
            }
            ,
            n()
        }
        function fo(t) {
            return Wg((Ng + t) / 2)
        }
        function lo(t, n) {
            function e(t, n) {
                o > 0 ? n < -Ng + Cg && (n = -Ng + Cg) : n > Ng - Cg && (n = Ng - Cg);
                var e = o / Fg(fo(n), i);
                return [e * qg(i * t), o - e * Ug(i * t)]
            }
            var r = Ug(t)
              , i = t === n ? qg(t) : Bg(r / Ug(n)) / Bg(fo(n) / fo(t))
              , o = r * Fg(fo(t), i) / i;
            return i ? (e.invert = function(t, n) {
                var e = o - n
                  , r = Yg(i) * Hg(t * t + e * e);
                return [jg(t, zg(e)) / i * Yg(e), 2 * Ig(Fg(o / r, 1 / i)) - Ng]
            }
            ,
            e) : so
        }
        function ho(t, n) {
            return [t, n]
        }
        function po(t, n) {
            function e(t, n) {
                var e = o - n
                  , r = i * t;
                return [e * qg(r), o - e * Ug(r)]
            }
            var r = Ug(t)
              , i = t === n ? qg(t) : (r - Ug(n)) / (n - t)
              , o = r / i + t;
            return zg(i) < Cg ? ho : (e.invert = function(t, n) {
                var e = o - n;
                return [jg(t, zg(e)) / i * Yg(e), o - Yg(i) * Hg(t * t + e * e)]
            }
            ,
            e)
        }
        function vo(t, n) {
            var e = Ug(n)
              , r = Ug(t) * e;
            return [e * qg(t) / r, qg(n) / r]
        }
        function go(t, n, e, r) {
            return 1 === t && 1 === n && 0 === e && 0 === r ? Dy : Xi({
                point: function(i, o) {
                    this.stream.point(i * t + e, o * n + r)
                }
            })
        }
        function yo(t, n) {
            return [Ug(n) * qg(t), qg(n)]
        }
        function _o(t, n) {
            var e = Ug(n)
              , r = 1 + Ug(t) * e;
            return [e * qg(t) / r, qg(n) / r]
        }
        function mo(t, n) {
            return [Bg(Wg((Ng + n) / 2)), -t]
        }
        function bo(t, n) {
            return t.parent === n.parent ? 1 : 2
        }
        function xo(t) {
            return t.reduce(wo, 0) / t.length
        }
        function wo(t, n) {
            return t + n.x
        }
        function Mo(t) {
            return 1 + t.reduce(Ao, 0)
        }
        function Ao(t, n) {
            return Math.max(t, n.y)
        }
        function So(t) {
            for (var n; n = t.children; )
                t = n[0];
            return t
        }
        function ko(t) {
            for (var n; n = t.children; )
                t = n[n.length - 1];
            return t
        }
        function Co(t) {
            var n = 0
              , e = t.children
              , r = e && e.length;
            if (r)
                for (; --r >= 0; )
                    n += e[r].value;
            else
                n = 1;
            t.value = n
        }
        function Eo(t, n) {
            if (t === n)
                return t;
            var e = t.ancestors()
              , r = n.ancestors()
              , i = null;
            for (t = e.pop(),
            n = r.pop(); t === n; )
                i = t,
                t = e.pop(),
                n = r.pop();
            return i
        }
        function To(t, n) {
            var e, r, i, o, a, u = new Lo(t), s = +t.value && (u.value = t.value), c = [u];
            for (null == n && (n = Oo); e = c.pop(); )
                if (s && (e.value = +e.data.value),
                (i = n(e.data)) && (a = i.length))
                    for (e.children = new Array(a),
                    o = a - 1; o >= 0; --o)
                        c.push(r = e.children[o] = new Lo(i[o])),
                        r.parent = e,
                        r.depth = e.depth + 1;
            return u.eachBefore(Po)
        }
        function No() {
            return To(this).eachBefore(Ro)
        }
        function Oo(t) {
            return t.children
        }
        function Ro(t) {
            t.data = t.data.data
        }
        function Po(t) {
            var n = 0;
            do {
                t.height = n
            } while ((t = t.parent) && t.height < ++n)
        }
        function Lo(t) {
            this.data = t,
            this.depth = this.height = 0,
            this.parent = null
        }
        function zo(t) {
            this._ = t,
            this.next = null
        }
        function Io(t, n) {
            var e = n.x - t.x
              , r = n.y - t.y
              , i = t.r - n.r;
            return i * i + 1e-6 > e * e + r * r
        }
        function jo(t, n) {
            var e, r, i, o = null, a = t.head;
            switch (n.length) {
            case 1:
                e = Uo(n[0]);
                break;
            case 2:
                e = Do(n[0], n[1]);
                break;
            case 3:
                e = $o(n[0], n[1], n[2])
            }
            for (; a; )
                i = a._,
                r = a.next,
                e && Io(e, i) ? o = a : (o ? (t.tail = o,
                o.next = null) : t.head = t.tail = null,
                n.push(i),
                e = jo(t, n),
                n.pop(),
                t.head ? (a.next = t.head,
                t.head = a) : (a.next = null,
                t.head = t.tail = a),
                o = t.tail,
                o.next = r),
                a = r;
            return t.tail = o,
            e
        }
        function Uo(t) {
            return {
                x: t.x,
                y: t.y,
                r: t.r
            }
        }
        function Do(t, n) {
            var e = t.x
              , r = t.y
              , i = t.r
              , o = n.x
              , a = n.y
              , u = n.r
              , s = o - e
              , c = a - r
              , f = u - i
              , l = Math.sqrt(s * s + c * c);
            return {
                x: (e + o + s / l * f) / 2,
                y: (r + a + c / l * f) / 2,
                r: (l + i + u) / 2
            }
        }
        function $o(t, n, e) {
            var r = t.x
              , i = t.y
              , o = t.r
              , a = n.x
              , u = n.y
              , s = n.r
              , c = e.x
              , f = e.y
              , l = e.r
              , h = 2 * (r - a)
              , p = 2 * (i - u)
              , d = 2 * (s - o)
              , v = r * r + i * i - o * o - a * a - u * u + s * s
              , g = 2 * (r - c)
              , y = 2 * (i - f)
              , _ = 2 * (l - o)
              , m = r * r + i * i - o * o - c * c - f * f + l * l
              , b = g * p - h * y
              , x = (p * m - y * v) / b - r
              , w = (y * d - p * _) / b
              , M = (g * v - h * m) / b - i
              , A = (h * _ - g * d) / b
              , S = w * w + A * A - 1
              , k = 2 * (x * w + M * A + o)
              , C = x * x + M * M - o * o
              , E = (-k - Math.sqrt(k * k - 4 * S * C)) / (2 * S);
            return {
                x: x + w * E + r,
                y: M + A * E + i,
                r: E
            }
        }
        function Bo(t, n, e) {
            var r = t.x
              , i = t.y
              , o = n.r + e.r
              , a = t.r + e.r
              , u = n.x - r
              , s = n.y - i
              , c = u * u + s * s;
            if (c) {
                var f = .5 + ((a *= a) - (o *= o)) / (2 * c)
                  , l = Math.sqrt(Math.max(0, 2 * o * (a + c) - (a -= c) * a - o * o)) / (2 * c);
                e.x = r + f * u + l * s,
                e.y = i + f * s - l * u
            } else
                e.x = r + a,
                e.y = i
        }
        function Fo(t, n) {
            var e = n.x - t.x
              , r = n.y - t.y
              , i = t.r + n.r;
            return i * i - 1e-6 > e * e + r * r
        }
        function qo(t, n, e) {
            var r = t._
              , i = t.next._
              , o = r.r + i.r
              , a = (r.x * i.r + i.x * r.r) / o - n
              , u = (r.y * i.r + i.y * r.r) / o - e;
            return a * a + u * u
        }
        function Yo(t) {
            this._ = t,
            this.next = null,
            this.previous = null
        }
        function Ho(t) {
            if (!(i = t.length))
                return 0;
            var n, e, r, i;
            if (n = t[0],
            n.x = 0,
            n.y = 0,
            !(i > 1))
                return n.r;
            if (e = t[1],
            n.x = -e.r,
            e.x = n.r,
            e.y = 0,
            !(i > 2))
                return n.r + e.r;
            Bo(e, n, r = t[2]);
            var o, a, u, s, c, f, l, h = n.r * n.r, p = e.r * e.r, d = r.r * r.r, v = h + p + d, g = h * n.x + p * e.x + d * r.x, y = h * n.y + p * e.y + d * r.y;
            n = new Yo(n),
            e = new Yo(e),
            r = new Yo(r),
            n.next = r.previous = e,
            e.next = n.previous = r,
            r.next = e.previous = n;
            t: for (u = 3; u < i; ++u) {
                Bo(n._, e._, r = t[u]),
                r = new Yo(r),
                s = e.next,
                c = n.previous,
                f = e._.r,
                l = n._.r;
                do {
                    if (f <= l) {
                        if (Fo(s._, r._)) {
                            e = s,
                            n.next = e,
                            e.previous = n,
                            --u;
                            continue t
                        }
                        f += s._.r,
                        s = s.next
                    } else {
                        if (Fo(c._, r._)) {
                            n = c,
                            n.next = e,
                            e.previous = n,
                            --u;
                            continue t
                        }
                        l += c._.r,
                        c = c.previous
                    }
                } while (s !== c.next);for (r.previous = n,
                r.next = e,
                n.next = e.previous = e = r,
                v += d = r._.r * r._.r,
                g += d * r._.x,
                y += d * r._.y,
                h = qo(n, o = g / v, a = y / v); (r = r.next) !== e; )
                    (d = qo(r, o, a)) < h && (n = r,
                    h = d);
                e = n.next
            }
            for (n = [e._],
            r = e; (r = r.next) !== e; )
                n.push(r._);
            for (r = G_(n),
            u = 0; u < i; ++u)
                n = t[u],
                n.x -= r.x,
                n.y -= r.y;
            return r.r
        }
        function Wo(t) {
            return null == t ? null : Vo(t)
        }
        function Vo(t) {
            if ("function" != typeof t)
                throw new Error;
            return t
        }
        function Xo() {
            return 0
        }
        function Go(t) {
            return Math.sqrt(t.value)
        }
        function Zo(t) {
            return function(n) {
                n.children || (n.r = Math.max(0, +t(n) || 0))
            }
        }
        function Ko(t, n) {
            return function(e) {
                if (r = e.children) {
                    var r, i, o, a = r.length, u = t(e) * n || 0;
                    if (u)
                        for (i = 0; i < a; ++i)
                            r[i].r += u;
                    if (o = Ho(r),
                    u)
                        for (i = 0; i < a; ++i)
                            r[i].r -= u;
                    e.r = o + u
                }
            }
        }
        function Qo(t) {
            return function(n) {
                var e = n.parent;
                n.r *= t,
                e && (n.x = e.x + t * n.x,
                n.y = e.y + t * n.y)
            }
        }
        function Jo(t) {
            return t.id
        }
        function ta(t) {
            return t.parentId
        }
        function na(t, n) {
            return t.parent === n.parent ? 1 : 2
        }
        function ea(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }
        function ra(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }
        function ia(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r,
            n.s += e,
            t.c += r,
            n.z += e,
            n.m += e
        }
        function oa(t) {
            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0; )
                n = i[o],
                n.z += e,
                n.m += e,
                e += n.s + (r += n.c)
        }
        function aa(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }
        function ua(t, n) {
            this._ = t,
            this.parent = null,
            this.children = null,
            this.A = null,
            this.a = this,
            this.z = 0,
            this.m = 0,
            this.c = 0,
            this.s = 0,
            this.t = null,
            this.i = n
        }
        function sa(t) {
            for (var n, e, r, i, o, a = new ua(t,0), u = [a]; n = u.pop(); )
                if (r = n._.children)
                    for (n.children = new Array(o = r.length),
                    i = o - 1; i >= 0; --i)
                        u.push(e = n.children[i] = new ua(r[i],i)),
                        e.parent = n;
            return (a.parent = new ua(null,0)).children = [a],
            a
        }
        function ca(t, n, e, r, i, o) {
            for (var a, u, s, c, f, l, h, p, d, v, g, y = [], _ = n.children, m = 0, b = 0, x = _.length, w = n.value; m < x; ) {
                s = i - e,
                c = o - r;
                do {
                    f = _[b++].value
                } while (!f && b < x);for (l = h = f,
                v = Math.max(c / s, s / c) / (w * t),
                g = f * f * v,
                d = Math.max(h / g, g / l); b < x; ++b) {
                    if (f += u = _[b].value,
                    u < l && (l = u),
                    u > h && (h = u),
                    g = f * f * v,
                    (p = Math.max(h / g, g / l)) > d) {
                        f -= u;
                        break
                    }
                    d = p
                }
                y.push(a = {
                    value: f,
                    dice: s < c,
                    children: _.slice(m, b)
                }),
                a.dice ? tm(a, e, r, i, w ? r += c * f / w : o) : um(a, e, r, w ? e += s * f / w : i, o),
                w -= f,
                m = b
            }
            return y
        }
        function fa(t, n) {
            return t[0] - n[0] || t[1] - n[1]
        }
        function la(t) {
            for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
                for (; r > 1 && gm(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; )
                    --r;
                e[r++] = i
            }
            return e.slice(0, r)
        }
        function ha(t) {
            if (!(t >= 1))
                throw new Error;
            this._size = t,
            this._call = this._error = null,
            this._tasks = [],
            this._data = [],
            this._waiting = this._active = this._ended = this._start = 0
        }
        function pa(t) {
            if (!t._start)
                try {
                    da(t)
                } catch (n) {
                    if (t._tasks[t._ended + t._active - 1])
                        ga(t, n);
                    else if (!t._data)
                        throw n
                }
        }
        function da(t) {
            for (; t._start = t._waiting && t._active < t._size; ) {
                var n = t._ended + t._active
                  , e = t._tasks[n]
                  , r = e.length - 1
                  , i = e[r];
                e[r] = va(t, n),
                --t._waiting,
                ++t._active,
                e = i.apply(null, e),
                t._tasks[n] && (t._tasks[n] = e || xm)
            }
        }
        function va(t, n) {
            return function(e, r) {
                t._tasks[n] && (--t._active,
                ++t._ended,
                t._tasks[n] = null,
                null == t._error && (null != e ? ga(t, e) : (t._data[n] = r,
                t._waiting ? pa(t) : ya(t))))
            }
        }
        function ga(t, n) {
            var e, r = t._tasks.length;
            for (t._error = n,
            t._data = void 0,
            t._waiting = NaN; --r >= 0; )
                if ((e = t._tasks[r]) && (t._tasks[r] = null,
                e.abort))
                    try {
                        e.abort()
                    } catch (t) {}
            t._active = NaN,
            ya(t)
        }
        function ya(t) {
            if (!t._active && t._call) {
                var n = t._data;
                t._data = void 0,
                t._call(t._error, n)
            }
        }
        function _a(t) {
            return new ha(arguments.length ? +t : 1 / 0)
        }
        function ma(t) {
            return function(n, e) {
                t(null == n ? e : null)
            }
        }
        function ba(t) {
            var n = t.responseType;
            return n && "text" !== n ? t.response : t.responseText
        }
        function xa(t, n) {
            return function(e) {
                return t(e.responseText, n)
            }
        }
        function wa(t) {
            function n(n) {
                var o = n + ""
                  , a = e.get(o);
                if (!a) {
                    if (i !== $m)
                        return i;
                    e.set(o, a = r.push(n))
                }
                return t[(a - 1) % t.length]
            }
            var e = Be()
              , r = []
              , i = $m;
            return t = null == t ? [] : Dm.call(t),
            n.domain = function(t) {
                if (!arguments.length)
                    return r.slice();
                r = [],
                e = Be();
                for (var i, o, a = -1, u = t.length; ++a < u; )
                    e.has(o = (i = t[a]) + "") || e.set(o, r.push(i));
                return n
            }
            ,
            n.range = function(e) {
                return arguments.length ? (t = Dm.call(e),
                n) : t.slice()
            }
            ,
            n.unknown = function(t) {
                return arguments.length ? (i = t,
                n) : i
            }
            ,
            n.copy = function() {
                return wa().domain(r).range(t).unknown(i)
            }
            ,
            n
        }
        function Ma() {
            function t() {
                var t = i().length
                  , r = a[1] < a[0]
                  , l = a[r - 0]
                  , h = a[1 - r];
                n = (h - l) / Math.max(1, t - s + 2 * c),
                u && (n = Math.floor(n)),
                l += (h - l - n * (t - s)) * f,
                e = n * (1 - s),
                u && (l = Math.round(l),
                e = Math.round(e));
                var p = Kc(t).map(function(t) {
                    return l + n * t
                });
                return o(r ? p.reverse() : p)
            }
            var n, e, r = wa().unknown(void 0), i = r.domain, o = r.range, a = [0, 1], u = !1, s = 0, c = 0, f = .5;
            return delete r.unknown,
            r.domain = function(n) {
                return arguments.length ? (i(n),
                t()) : i()
            }
            ,
            r.range = function(n) {
                return arguments.length ? (a = [+n[0], +n[1]],
                t()) : a.slice()
            }
            ,
            r.rangeRound = function(n) {
                return a = [+n[0], +n[1]],
                u = !0,
                t()
            }
            ,
            r.bandwidth = function() {
                return e
            }
            ,
            r.step = function() {
                return n
            }
            ,
            r.round = function(n) {
                return arguments.length ? (u = !!n,
                t()) : u
            }
            ,
            r.padding = function(n) {
                return arguments.length ? (s = c = Math.max(0, Math.min(1, n)),
                t()) : s
            }
            ,
            r.paddingInner = function(n) {
                return arguments.length ? (s = Math.max(0, Math.min(1, n)),
                t()) : s
            }
            ,
            r.paddingOuter = function(n) {
                return arguments.length ? (c = Math.max(0, Math.min(1, n)),
                t()) : c
            }
            ,
            r.align = function(n) {
                return arguments.length ? (f = Math.max(0, Math.min(1, n)),
                t()) : f
            }
            ,
            r.copy = function() {
                return Ma().domain(i()).range(a).round(u).paddingInner(s).paddingOuter(c).align(f)
            }
            ,
            t()
        }
        function Aa(t) {
            var n = t.copy;
            return t.padding = t.paddingOuter,
            delete t.paddingInner,
            delete t.paddingOuter,
            t.copy = function() {
                return Aa(n())
            }
            ,
            t
        }
        function Sa() {
            return Aa(Ma().paddingInner(1))
        }
        function ka(t, n) {
            return (n -= t = +t) ? function(e) {
                return (e - t) / n
            }
            : Bm(n)
        }
        function Ca(t) {
            return function(n, e) {
                var r = t(n = +n, e = +e);
                return function(t) {
                    return t <= n ? 0 : t >= e ? 1 : r(t)
                }
            }
        }
        function Ea(t) {
            return function(n, e) {
                var r = t(n = +n, e = +e);
                return function(t) {
                    return t <= 0 ? n : t >= 1 ? e : r(t)
                }
            }
        }
        function Ta(t, n, e, r) {
            var i = t[0]
              , o = t[1]
              , a = n[0]
              , u = n[1];
            return o < i ? (i = e(o, i),
            a = r(u, a)) : (i = e(i, o),
            a = r(a, u)),
            function(t) {
                return a(i(t))
            }
        }
        function Na(t, n, e, r) {
            var i = Math.min(t.length, n.length) - 1
              , o = new Array(i)
              , a = new Array(i)
              , u = -1;
            for (t[i] < t[0] && (t = t.slice().reverse(),
            n = n.slice().reverse()); ++u < i; )
                o[u] = e(t[u], t[u + 1]),
                a[u] = r(n[u], n[u + 1]);
            return function(n) {
                var e = jc(t, n, 1, i) - 1;
                return a[e](o[e](n))
            }
        }
        function Oa(t, n) {
            return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }
        function Ra(t, n) {
            function e() {
                return i = Math.min(u.length, s.length) > 2 ? Na : Ta,
                o = a = null,
                r
            }
            function r(n) {
                return (o || (o = i(u, s, f ? Ca(t) : t, c)))(+n)
            }
            var i, o, a, u = qm, s = qm, c = Eh, f = !1;
            return r.invert = function(t) {
                return (a || (a = i(s, u, ka, f ? Ea(n) : n)))(+t)
            }
            ,
            r.domain = function(t) {
                return arguments.length ? (u = Um.call(t, Fm),
                e()) : u.slice()
            }
            ,
            r.range = function(t) {
                return arguments.length ? (s = Dm.call(t),
                e()) : s.slice()
            }
            ,
            r.rangeRound = function(t) {
                return s = Dm.call(t),
                c = Th,
                e()
            }
            ,
            r.clamp = function(t) {
                return arguments.length ? (f = !!t,
                e()) : f
            }
            ,
            r.interpolate = function(t) {
                return arguments.length ? (c = t,
                e()) : c
            }
            ,
            e()
        }
        function Pa(t) {
            var n = t.domain;
            return t.ticks = function(t) {
                var e = n();
                return nf(e[0], e[e.length - 1], null == t ? 10 : t)
            }
            ,
            t.tickFormat = function(t, e) {
                return Ym(n(), t, e)
            }
            ,
            t.nice = function(e) {
                var i = n()
                  , o = i.length - 1
                  , a = null == e ? 10 : e
                  , u = i[0]
                  , s = i[o]
                  , c = r(u, s, a);
                return c && (c = r(Math.floor(u / c) * c, Math.ceil(s / c) * c, a),
                i[0] = Math.floor(u / c) * c,
                i[o] = Math.ceil(s / c) * c,
                n(i)),
                t
            }
            ,
            t
        }
        function La() {
            var t = Ra(ka, Mh);
            return t.copy = function() {
                return Oa(t, La())
            }
            ,
            Pa(t)
        }
        function za() {
            function t(t) {
                return +t
            }
            var n = [0, 1];
            return t.invert = t,
            t.domain = t.range = function(e) {
                return arguments.length ? (n = Um.call(e, Fm),
                t) : n.slice()
            }
            ,
            t.copy = function() {
                return za().domain(n)
            }
            ,
            Pa(t)
        }
        function Ia(t, n) {
            return (n = Math.log(n / t)) ? function(e) {
                return Math.log(e / t) / n
            }
            : Bm(n)
        }
        function ja(t, n) {
            return t < 0 ? function(e) {
                return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
            }
            : function(e) {
                return Math.pow(n, e) * Math.pow(t, 1 - e)
            }
        }
        function Ua(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }
        function Da(t) {
            return 10 === t ? Ua : t === Math.E ? Math.exp : function(n) {
                return Math.pow(t, n)
            }
        }
        function $a(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t),
            function(n) {
                return Math.log(n) / t
            }
            )
        }
        function Ba(t) {
            return function(n) {
                return -t(-n)
            }
        }
        function Fa() {
            function n() {
                return o = $a(i),
                a = Da(i),
                r()[0] < 0 && (o = Ba(o),
                a = Ba(a)),
                e
            }
            var e = Ra(Ia, ja).domain([1, 10])
              , r = e.domain
              , i = 10
              , o = $a(10)
              , a = Da(10);
            return e.base = function(t) {
                return arguments.length ? (i = +t,
                n()) : i
            }
            ,
            e.domain = function(t) {
                return arguments.length ? (r(t),
                n()) : r()
            }
            ,
            e.ticks = function(t) {
                var n, e = r(), u = e[0], s = e[e.length - 1];
                (n = s < u) && (h = u,
                u = s,
                s = h);
                var c, f, l, h = o(u), p = o(s), d = null == t ? 10 : +t, v = [];
                if (!(i % 1) && p - h < d) {
                    if (h = Math.round(h) - 1,
                    p = Math.round(p) + 1,
                    u > 0) {
                        for (; h < p; ++h)
                            for (f = 1,
                            c = a(h); f < i; ++f)
                                if (!((l = c * f) < u)) {
                                    if (l > s)
                                        break;
                                    v.push(l)
                                }
                    } else
                        for (; h < p; ++h)
                            for (f = i - 1,
                            c = a(h); f >= 1; --f)
                                if (!((l = c * f) < u)) {
                                    if (l > s)
                                        break;
                                    v.push(l)
                                }
                } else
                    v = nf(h, p, Math.min(p - h, d)).map(a);
                return n ? v.reverse() : v
            }
            ,
            e.tickFormat = function(n, r) {
                if (null == r && (r = 10 === i ? ".0e" : ","),
                "function" != typeof r && (r = t.format(r)),
                n === 1 / 0)
                    return r;
                null == n && (n = 10);
                var u = Math.max(1, i * n / e.ticks().length);
                return function(t) {
                    var n = t / a(Math.round(o(t)));
                    return n * i < i - .5 && (n *= i),
                    n <= u ? r(t) : ""
                }
            }
            ,
            e.nice = function() {
                return r(Hm(r(), {
                    floor: function(t) {
                        return a(Math.floor(o(t)))
                    },
                    ceil: function(t) {
                        return a(Math.ceil(o(t)))
                    }
                }))
            }
            ,
            e.copy = function() {
                return Oa(e, Fa().base(i))
            }
            ,
            e
        }
        function qa(t, n) {
            return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }
        function Ya() {
            function t(t, n) {
                return (n = qa(n, e) - (t = qa(t, e))) ? function(r) {
                    return (qa(r, e) - t) / n
                }
                : Bm(n)
            }
            function n(t, n) {
                return n = qa(n, e) - (t = qa(t, e)),
                function(r) {
                    return qa(t + n * r, 1 / e)
                }
            }
            var e = 1
              , r = Ra(t, n)
              , i = r.domain;
            return r.exponent = function(t) {
                return arguments.length ? (e = +t,
                i(i())) : e
            }
            ,
            r.copy = function() {
                return Oa(r, Ya().exponent(e))
            }
            ,
            Pa(r)
        }
        function Ha() {
            return Ya().exponent(.5)
        }
        function Wa() {
            function t() {
                var t = 0
                  , o = Math.max(1, r.length);
                for (i = new Array(o - 1); ++t < o; )
                    i[t - 1] = of(e, t / o);
                return n
            }
            function n(t) {
                if (!isNaN(t = +t))
                    return r[jc(i, t)]
            }
            var e = []
              , r = []
              , i = [];
            return n.invertExtent = function(t) {
                var n = r.indexOf(t);
                return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]
            }
            ,
            n.domain = function(n) {
                if (!arguments.length)
                    return e.slice();
                e = [];
                for (var r, i = 0, o = n.length; i < o; ++i)
                    null == (r = n[i]) || isNaN(r = +r) || e.push(r);
                return e.sort(Lc),
                t()
            }
            ,
            n.range = function(n) {
                return arguments.length ? (r = Dm.call(n),
                t()) : r.slice()
            }
            ,
            n.quantiles = function() {
                return i.slice()
            }
            ,
            n.copy = function() {
                return Wa().domain(e).range(r)
            }
            ,
            n
        }
        function Va() {
            function t(t) {
                if (t <= t)
                    return a[jc(o, t, 0, i)]
            }
            function n() {
                var n = -1;
                for (o = new Array(i); ++n < i; )
                    o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
                return t
            }
            var e = 0
              , r = 1
              , i = 1
              , o = [.5]
              , a = [0, 1];
            return t.domain = function(t) {
                return arguments.length ? (e = +t[0],
                r = +t[1],
                n()) : [e, r]
            }
            ,
            t.range = function(t) {
                return arguments.length ? (i = (a = Dm.call(t)).length - 1,
                n()) : a.slice()
            }
            ,
            t.invertExtent = function(t) {
                var n = a.indexOf(t);
                return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
            }
            ,
            t.copy = function() {
                return Va().domain([e, r]).range(a)
            }
            ,
            Pa(t)
        }
        function Xa() {
            function t(t) {
                if (t <= t)
                    return e[jc(n, t, 0, r)]
            }
            var n = [.5]
              , e = [0, 1]
              , r = 1;
            return t.domain = function(i) {
                return arguments.length ? (n = Dm.call(i),
                r = Math.min(n.length, e.length - 1),
                t) : n.slice()
            }
            ,
            t.range = function(i) {
                return arguments.length ? (e = Dm.call(i),
                r = Math.min(n.length, e.length - 1),
                t) : e.slice()
            }
            ,
            t.invertExtent = function(t) {
                var r = e.indexOf(t);
                return [n[r - 1], n[r]]
            }
            ,
            t.copy = function() {
                return Xa().domain(n).range(e)
            }
            ,
            t
        }
        function Ga(t, n, e, r) {
            function i(n) {
                return t(n = new Date(+n)),
                n
            }
            return i.floor = i,
            i.ceil = function(e) {
                return t(e = new Date(e - 1)),
                n(e, 1),
                t(e),
                e
            }
            ,
            i.round = function(t) {
                var n = i(t)
                  , e = i.ceil(t);
                return t - n < e - t ? n : e
            }
            ,
            i.offset = function(t, e) {
                return n(t = new Date(+t), null == e ? 1 : Math.floor(e)),
                t
            }
            ,
            i.range = function(e, r, o) {
                var a = [];
                if (e = i.ceil(e),
                o = null == o ? 1 : Math.floor(o),
                !(e < r && o > 0))
                    return a;
                do {
                    a.push(new Date(+e))
                } while (n(e, o),
                t(e),
                e < r);return a
            }
            ,
            i.filter = function(e) {
                return Ga(function(n) {
                    if (n >= n)
                        for (; t(n),
                        !e(n); )
                            n.setTime(n - 1)
                }, function(t, r) {
                    if (t >= t)
                        for (; --r >= 0; )
                            for (; n(t, 1),
                            !e(t); )
                                ;
                })
            }
            ,
            e && (i.count = function(n, r) {
                return Wm.setTime(+n),
                Vm.setTime(+r),
                t(Wm),
                t(Vm),
                Math.floor(e(Wm, Vm))
            }
            ,
            i.every = function(t) {
                return t = Math.floor(t),
                isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
                    return r(n) % t == 0
                }
                : function(n) {
                    return i.count(0, n) % t == 0
                }
                ) : i : null
            }
            ),
            i
        }
        function Za(t) {
            return Ga(function(n) {
                n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
                n.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Km) / tb
            })
        }
        function Ka(t) {
            return Ga(function(n) {
                n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
                n.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n)
            }, function(t, n) {
                return (n - t) / tb
            })
        }
        function Qa(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
                return n.setFullYear(t.y),
                n
            }
            return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
        }
        function Ja(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return n.setUTCFullYear(t.y),
                n
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }
        function tu(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        function nu(t) {
            function n(t, n) {
                return function(e) {
                    var r, i, o, a = [], u = -1, s = 0, c = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++u < c; )
                        37 === t.charCodeAt(u) && (a.push(t.slice(s, u)),
                        null != (i = Qb[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0",
                        (o = n[r]) && (r = o(e, i)),
                        a.push(r),
                        s = u + 1);
                    return a.push(t.slice(s, u)),
                    a.join("")
                }
            }
            function e(t, n) {
                return function(e) {
                    var i = tu(1900);
                    if (r(i, t, e += "", 0) != e.length)
                        return null;
                    if ("p"in i && (i.H = i.H % 12 + 12 * i.p),
                    "W"in i || "U"in i) {
                        "w"in i || (i.w = "W"in i ? 1 : 0);
                        var o = "Z"in i ? Ja(tu(i.y)).getUTCDay() : n(tu(i.y)).getDay();
                        i.m = 0,
                        i.d = "W"in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7
                    }
                    return "Z"in i ? (i.H += i.Z / 100 | 0,
                    i.M += i.Z % 100,
                    Ja(i)) : n(i)
                }
            }
            function r(t, n, e, r) {
                for (var i, o, a = 0, u = n.length, s = e.length; a < u; ) {
                    if (r >= s)
                        return -1;
                    if (37 === (i = n.charCodeAt(a++))) {
                        if (i = n.charAt(a++),
                        !(o = F[i in Qb ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0)
                            return -1
                    } else if (i != e.charCodeAt(r++))
                        return -1
                }
                return r
            }
            function i(t, n, e) {
                var r = N.exec(n.slice(e));
                return r ? (t.p = O[r[0].toLowerCase()],
                e + r[0].length) : -1
            }
            function o(t, n, e) {
                var r = L.exec(n.slice(e));
                return r ? (t.w = z[r[0].toLowerCase()],
                e + r[0].length) : -1
            }
            function a(t, n, e) {
                var r = R.exec(n.slice(e));
                return r ? (t.w = P[r[0].toLowerCase()],
                e + r[0].length) : -1
            }
            function u(t, n, e) {
                var r = U.exec(n.slice(e));
                return r ? (t.m = D[r[0].toLowerCase()],
                e + r[0].length) : -1
            }
            function s(t, n, e) {
                var r = I.exec(n.slice(e));
                return r ? (t.m = j[r[0].toLowerCase()],
                e + r[0].length) : -1
            }
            function c(t, n, e) {
                return r(t, w, n, e)
            }
            function f(t, n, e) {
                return r(t, M, n, e)
            }
            function l(t, n, e) {
                return r(t, A, n, e)
            }
            function h(t) {
                return C[t.getDay()]
            }
            function p(t) {
                return k[t.getDay()]
            }
            function d(t) {
                return T[t.getMonth()]
            }
            function v(t) {
                return E[t.getMonth()]
            }
            function g(t) {
                return S[+(t.getHours() >= 12)]
            }
            function y(t) {
                return C[t.getUTCDay()]
            }
            function _(t) {
                return k[t.getUTCDay()]
            }
            function m(t) {
                return T[t.getUTCMonth()]
            }
            function b(t) {
                return E[t.getUTCMonth()]
            }
            function x(t) {
                return S[+(t.getUTCHours() >= 12)]
            }
            var w = t.dateTime
              , M = t.date
              , A = t.time
              , S = t.periods
              , k = t.days
              , C = t.shortDays
              , E = t.months
              , T = t.shortMonths
              , N = iu(S)
              , O = ou(S)
              , R = iu(k)
              , P = ou(k)
              , L = iu(C)
              , z = ou(C)
              , I = iu(E)
              , j = ou(E)
              , U = iu(T)
              , D = ou(T)
              , $ = {
                a: h,
                A: p,
                b: d,
                B: v,
                c: null,
                d: bu,
                e: bu,
                H: xu,
                I: wu,
                j: Mu,
                L: Au,
                m: Su,
                M: ku,
                p: g,
                S: Cu,
                U: Eu,
                w: Tu,
                W: Nu,
                x: null,
                X: null,
                y: Ou,
                Y: Ru,
                Z: Pu,
                "%": Xu
            }
              , B = {
                a: y,
                A: _,
                b: m,
                B: b,
                c: null,
                d: Lu,
                e: Lu,
                H: zu,
                I: Iu,
                j: ju,
                L: Uu,
                m: Du,
                M: $u,
                p: x,
                S: Bu,
                U: Fu,
                w: qu,
                W: Yu,
                x: null,
                X: null,
                y: Hu,
                Y: Wu,
                Z: Vu,
                "%": Xu
            }
              , F = {
                a: o,
                A: a,
                b: u,
                B: s,
                c: c,
                d: pu,
                e: pu,
                H: vu,
                I: vu,
                j: du,
                L: _u,
                m: hu,
                M: gu,
                p: i,
                S: yu,
                U: uu,
                w: au,
                W: su,
                x: f,
                X: l,
                y: fu,
                Y: cu,
                Z: lu,
                "%": mu
            };
            return $.x = n(M, $),
            $.X = n(A, $),
            $.c = n(w, $),
            B.x = n(M, B),
            B.X = n(A, B),
            B.c = n(w, B),
            {
                format: function(t) {
                    var e = n(t += "", $);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                parse: function(t) {
                    var n = e(t += "", Qa);
                    return n.toString = function() {
                        return t
                    }
                    ,
                    n
                },
                utcFormat: function(t) {
                    var e = n(t += "", B);
                    return e.toString = function() {
                        return t
                    }
                    ,
                    e
                },
                utcParse: function(t) {
                    var n = e(t, Ja);
                    return n.toString = function() {
                        return t
                    }
                    ,
                    n
                }
            }
        }
        function eu(t, n, e) {
            var r = t < 0 ? "-" : ""
              , i = (r ? -t : t) + ""
              , o = i.length;
            return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
        }
        function ru(t) {
            return t.replace(nx, "\\$&")
        }
        function iu(t) {
            return new RegExp("^(?:" + t.map(ru).join("|") + ")","i")
        }
        function ou(t) {
            for (var n = {}, e = -1, r = t.length; ++e < r; )
                n[t[e].toLowerCase()] = e;
            return n
        }
        function au(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 1));
            return r ? (t.w = +r[0],
            e + r[0].length) : -1
        }
        function uu(t, n, e) {
            var r = Jb.exec(n.slice(e));
            return r ? (t.U = +r[0],
            e + r[0].length) : -1
        }
        function su(t, n, e) {
            var r = Jb.exec(n.slice(e));
            return r ? (t.W = +r[0],
            e + r[0].length) : -1
        }
        function cu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 4));
            return r ? (t.y = +r[0],
            e + r[0].length) : -1
        }
        function fu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3),
            e + r[0].length) : -1
        }
        function lu(t, n, e) {
            var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")),
            e + r[0].length) : -1
        }
        function hu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.m = r[0] - 1,
            e + r[0].length) : -1
        }
        function pu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.d = +r[0],
            e + r[0].length) : -1
        }
        function du(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 3));
            return r ? (t.m = 0,
            t.d = +r[0],
            e + r[0].length) : -1
        }
        function vu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.H = +r[0],
            e + r[0].length) : -1
        }
        function gu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.M = +r[0],
            e + r[0].length) : -1
        }
        function yu(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 2));
            return r ? (t.S = +r[0],
            e + r[0].length) : -1
        }
        function _u(t, n, e) {
            var r = Jb.exec(n.slice(e, e + 3));
            return r ? (t.L = +r[0],
            e + r[0].length) : -1
        }
        function mu(t, n, e) {
            var r = tx.exec(n.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }
        function bu(t, n) {
            return eu(t.getDate(), n, 2)
        }
        function xu(t, n) {
            return eu(t.getHours(), n, 2)
        }
        function wu(t, n) {
            return eu(t.getHours() % 12 || 12, n, 2)
        }
        function Mu(t, n) {
            return eu(1 + ub.count(Sb(t), t), n, 3)
        }
        function Au(t, n) {
            return eu(t.getMilliseconds(), n, 3)
        }
        function Su(t, n) {
            return eu(t.getMonth() + 1, n, 2)
        }
        function ku(t, n) {
            return eu(t.getMinutes(), n, 2)
        }
        function Cu(t, n) {
            return eu(t.getSeconds(), n, 2)
        }
        function Eu(t, n) {
            return eu(cb.count(Sb(t), t), n, 2)
        }
        function Tu(t) {
            return t.getDay()
        }
        function Nu(t, n) {
            return eu(fb.count(Sb(t), t), n, 2)
        }
        function Ou(t, n) {
            return eu(t.getFullYear() % 100, n, 2)
        }
        function Ru(t, n) {
            return eu(t.getFullYear() % 1e4, n, 4)
        }
        function Pu(t) {
            var n = t.getTimezoneOffset();
            return (n > 0 ? "-" : (n *= -1,
            "+")) + eu(n / 60 | 0, "0", 2) + eu(n % 60, "0", 2)
        }
        function Lu(t, n) {
            return eu(t.getUTCDate(), n, 2)
        }
        function zu(t, n) {
            return eu(t.getUTCHours(), n, 2)
        }
        function Iu(t, n) {
            return eu(t.getUTCHours() % 12 || 12, n, 2)
        }
        function ju(t, n) {
            return eu(1 + Ob.count(Gb(t), t), n, 3)
        }
        function Uu(t, n) {
            return eu(t.getUTCMilliseconds(), n, 3)
        }
        function Du(t, n) {
            return eu(t.getUTCMonth() + 1, n, 2)
        }
        function $u(t, n) {
            return eu(t.getUTCMinutes(), n, 2)
        }
        function Bu(t, n) {
            return eu(t.getUTCSeconds(), n, 2)
        }
        function Fu(t, n) {
            return eu(Pb.count(Gb(t), t), n, 2)
        }
        function qu(t) {
            return t.getUTCDay()
        }
        function Yu(t, n) {
            return eu(Lb.count(Gb(t), t), n, 2)
        }
        function Hu(t, n) {
            return eu(t.getUTCFullYear() % 100, n, 2)
        }
        function Wu(t, n) {
            return eu(t.getUTCFullYear() % 1e4, n, 4)
        }
        function Vu() {
            return "+0000"
        }
        function Xu() {
            return "%"
        }
        function Gu(n) {
            return Zb = nu(n),
            t.timeFormat = Zb.format,
            t.timeParse = Zb.parse,
            t.utcFormat = Zb.utcFormat,
            t.utcParse = Zb.utcParse,
            Zb
        }
        function Zu(t) {
            return t.toISOString()
        }
        function Ku(t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        }
        function Qu(t) {
            return new Date(t)
        }
        function Ju(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }
        function ts(t, n, e, i, o, a, u, s, c) {
            function f(r) {
                return (u(r) < r ? v : a(r) < r ? g : o(r) < r ? y : i(r) < r ? _ : n(r) < r ? e(r) < r ? m : b : t(r) < r ? x : w)(r)
            }
            function l(n, e, i, o) {
                if (null == n && (n = 10),
                "number" == typeof n) {
                    var a = Math.abs(i - e) / n
                      , u = zc(function(t) {
                        return t[2]
                    }).right(M, a);
                    u === M.length ? (o = r(e / lx, i / lx, n),
                    n = t) : u ? (u = M[a / M[u - 1][2] < M[u][2] / a ? u - 1 : u],
                    o = u[1],
                    n = u[0]) : (o = r(e, i, n),
                    n = s)
                }
                return null == o ? n : n.every(o)
            }
            var h = Ra(ka, Mh)
              , p = h.invert
              , d = h.domain
              , v = c(".%L")
              , g = c(":%S")
              , y = c("%I:%M")
              , _ = c("%I %p")
              , m = c("%a %d")
              , b = c("%b %d")
              , x = c("%B")
              , w = c("%Y")
              , M = [[u, 1, ox], [u, 5, 5 * ox], [u, 15, 15 * ox], [u, 30, 30 * ox], [a, 1, ax], [a, 5, 5 * ax], [a, 15, 15 * ax], [a, 30, 30 * ax], [o, 1, ux], [o, 3, 3 * ux], [o, 6, 6 * ux], [o, 12, 12 * ux], [i, 1, sx], [i, 2, 2 * sx], [e, 1, cx], [n, 1, fx], [n, 3, 3 * fx], [t, 1, lx]];
            return h.invert = function(t) {
                return new Date(p(t))
            }
            ,
            h.domain = function(t) {
                return arguments.length ? d(Um.call(t, Ju)) : d().map(Qu)
            }
            ,
            h.ticks = function(t, n) {
                var e, r = d(), i = r[0], o = r[r.length - 1], a = o < i;
                return a && (e = i,
                i = o,
                o = e),
                e = l(t, i, o, n),
                e = e ? e.range(i, o + 1) : [],
                a ? e.reverse() : e
            }
            ,
            h.tickFormat = function(t, n) {
                return null == n ? f : c(n)
            }
            ,
            h.nice = function(t, n) {
                var e = d();
                return (t = l(t, e[0], e[e.length - 1], n)) ? d(Hm(e, t)) : h
            }
            ,
            h.copy = function() {
                return Oa(h, ts(t, n, e, i, o, a, u, s, c))
            }
            ,
            h
        }
        function ns(t) {
            var n = t.length;
            return function(e) {
                return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
            }
        }
        function es(t) {
            function n(n) {
                var o = (n - e) / (r - e);
                return t(i ? Math.max(0, Math.min(1, o)) : o)
            }
            var e = 0
              , r = 1
              , i = !1;
            return n.domain = function(t) {
                return arguments.length ? (e = +t[0],
                r = +t[1],
                n) : [e, r]
            }
            ,
            n.clamp = function(t) {
                return arguments.length ? (i = !!t,
                n) : i
            }
            ,
            n.interpolator = function(e) {
                return arguments.length ? (t = e,
                n) : t
            }
            ,
            n.copy = function() {
                return es(t).domain([e, r]).clamp(i)
            }
            ,
            Pa(n)
        }
        function rs(t) {
            return t > 1 ? 0 : t < -1 ? jx : Math.acos(t)
        }
        function is(t) {
            return t >= 1 ? Ux : t <= -1 ? -Ux : Math.asin(t)
        }
        function os(t) {
            return t.innerRadius
        }
        function as(t) {
            return t.outerRadius
        }
        function us(t) {
            return t.startAngle
        }
        function ss(t) {
            return t.endAngle
        }
        function cs(t) {
            return t && t.padAngle
        }
        function fs(t, n, e, r, i, o, a, u) {
            var s = e - t
              , c = r - n
              , f = a - i
              , l = u - o
              , h = (f * (n - o) - l * (t - i)) / (l * s - f * c);
            return [t + h * s, n + h * c]
        }
        function ls(t, n, e, r, i, o, a) {
            var u = t - e
              , s = n - r
              , c = (a ? o : -o) / zx(u * u + s * s)
              , f = c * s
              , l = -c * u
              , h = t + f
              , p = n + l
              , d = e + f
              , v = r + l
              , g = (h + d) / 2
              , y = (p + v) / 2
              , _ = d - h
              , m = v - p
              , b = _ * _ + m * m
              , x = i - o
              , w = h * v - d * p
              , M = (m < 0 ? -1 : 1) * zx(Rx(0, x * x * b - w * w))
              , A = (w * m - _ * M) / b
              , S = (-w * _ - m * M) / b
              , k = (w * m + _ * M) / b
              , C = (-w * _ + m * M) / b
              , E = A - g
              , T = S - y
              , N = k - g
              , O = C - y;
            return E * E + T * T > N * N + O * O && (A = k,
            S = C),
            {
                cx: A,
                cy: S,
                x01: -f,
                y01: -l,
                x11: A * (i / x - 1),
                y11: S * (i / x - 1)
            }
        }
        function hs(t) {
            this._context = t
        }
        function ps(t) {
            return t[0]
        }
        function ds(t) {
            return t[1]
        }
        function vs(t) {
            this._curve = t
        }
        function gs(t) {
            function n(n) {
                return new vs(t(n))
            }
            return n._curve = t,
            n
        }
        function ys(t) {
            var n = t.curve;
            return t.angle = t.x,
            delete t.x,
            t.radius = t.y,
            delete t.y,
            t.curve = function(t) {
                return arguments.length ? n(gs(t)) : n()._curve
            }
            ,
            t
        }
        function _s(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }
        function ms(t) {
            this._context = t
        }
        function bs(t) {
            this._context = t
        }
        function xs(t) {
            this._context = t
        }
        function ws(t, n) {
            this._basis = new ms(t),
            this._beta = n
        }
        function Ms(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }
        function As(t, n) {
            this._context = t,
            this._k = (1 - n) / 6
        }
        function Ss(t, n) {
            this._context = t,
            this._k = (1 - n) / 6
        }
        function ks(t, n) {
            this._context = t,
            this._k = (1 - n) / 6
        }
        function Cs(t, n, e) {
            var r = t._x1
              , i = t._y1
              , o = t._x2
              , a = t._y2;
            if (t._l01_a > Ix) {
                var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
                  , s = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s,
                i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
            }
            if (t._l23_a > Ix) {
                var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
                  , f = 3 * t._l23_a * (t._l23_a + t._l12_a);
                o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / f,
                a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / f
            }
            t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2)
        }
        function Es(t, n) {
            this._context = t,
            this._alpha = n
        }
        function Ts(t, n) {
            this._context = t,
            this._alpha = n
        }
        function Ns(t, n) {
            this._context = t,
            this._alpha = n
        }
        function Os(t) {
            this._context = t
        }
        function Rs(t) {
            return t < 0 ? -1 : 1
        }
        function Ps(t, n, e) {
            var r = t._x1 - t._x0
              , i = n - t._x1
              , o = (t._y1 - t._y0) / (r || i < 0 && -0)
              , a = (e - t._y1) / (i || r < 0 && -0)
              , u = (o * i + a * r) / (r + i);
            return (Rs(o) + Rs(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0
        }
        function Ls(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }
        function zs(t, n, e) {
            var r = t._x0
              , i = t._y0
              , o = t._x1
              , a = t._y1
              , u = (o - r) / 3;
            t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a)
        }
        function Is(t) {
            this._context = t
        }
        function js(t) {
            this._context = new Us(t)
        }
        function Us(t) {
            this._context = t
        }
        function Ds(t) {
            return new Is(t)
        }
        function $s(t) {
            return new js(t)
        }
        function Bs(t) {
            this._context = t
        }
        function Fs(t) {
            var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), a = new Array(r);
            for (i[0] = 0,
            o[0] = 2,
            a[0] = t[0] + 2 * t[1],
            n = 1; n < r - 1; ++n)
                i[n] = 1,
                o[n] = 4,
                a[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2,
            o[r - 1] = 7,
            a[r - 1] = 8 * t[r - 1] + t[r],
            n = 1; n < r; ++n)
                e = i[n] / o[n - 1],
                o[n] -= e,
                a[n] -= e * a[n - 1];
            for (i[r - 1] = a[r - 1] / o[r - 1],
            n = r - 2; n >= 0; --n)
                i[n] = (a[n] - i[n + 1]) / o[n];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2,
            n = 0; n < r - 1; ++n)
                o[n] = 2 * t[n + 1] - i[n + 1];
            return [i, o]
        }
        function qs(t, n) {
            this._context = t,
            this._t = n
        }
        function Ys(t) {
            return new qs(t,0)
        }
        function Hs(t) {
            return new qs(t,1)
        }
        function Ws(t, n) {
            return t[n]
        }
        function Vs(t) {
            for (var n, e = 0, r = -1, i = t.length; ++r < i; )
                (n = +t[r][1]) && (e += n);
            return e
        }
        function Xs(t) {
            return t[0]
        }
        function Gs(t) {
            return t[1]
        }
        function Zs() {
            this._ = null
        }
        function Ks(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }
        function Qs(t, n) {
            var e = n
              , r = n.R
              , i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r,
            r.U = i,
            e.U = r,
            e.R = r.L,
            e.R && (e.R.U = e),
            r.L = e
        }
        function Js(t, n) {
            var e = n
              , r = n.L
              , i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r,
            r.U = i,
            e.U = r,
            e.L = r.R,
            e.L && (e.L.U = e),
            r.R = e
        }
        function tc(t) {
            for (; t.L; )
                t = t.L;
            return t
        }
        function nc(t, n, e, r) {
            var i = [null, null]
              , o = Ww.push(i) - 1;
            return i.left = t,
            i.right = n,
            e && rc(i, t, n, e),
            r && rc(i, n, t, r),
            Yw[t.index].halfedges.push(o),
            Yw[n.index].halfedges.push(o),
            i
        }
        function ec(t, n, e) {
            var r = [n, e];
            return r.left = t,
            r
        }
        function rc(t, n, e, r) {
            t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r,
            t.left = n,
            t.right = e)
        }
        function ic(t, n, e, r, i) {
            var o, a = t[0], u = t[1], s = a[0], c = a[1], f = u[0], l = u[1], h = 0, p = 1, d = f - s, v = l - c;
            if (o = n - s,
            d || !(o > 0)) {
                if (o /= d,
                d < 0) {
                    if (o < h)
                        return;
                    o < p && (p = o)
                } else if (d > 0) {
                    if (o > p)
                        return;
                    o > h && (h = o)
                }
                if (o = r - s,
                d || !(o < 0)) {
                    if (o /= d,
                    d < 0) {
                        if (o > p)
                            return;
                        o > h && (h = o)
                    } else if (d > 0) {
                        if (o < h)
                            return;
                        o < p && (p = o)
                    }
                    if (o = e - c,
                    v || !(o > 0)) {
                        if (o /= v,
                        v < 0) {
                            if (o < h)
                                return;
                            o < p && (p = o)
                        } else if (v > 0) {
                            if (o > p)
                                return;
                            o > h && (h = o)
                        }
                        if (o = i - c,
                        v || !(o < 0)) {
                            if (o /= v,
                            v < 0) {
                                if (o > p)
                                    return;
                                o > h && (h = o)
                            } else if (v > 0) {
                                if (o < h)
                                    return;
                                o < p && (p = o)
                            }
                            return !(h > 0 || p < 1) || (h > 0 && (t[0] = [s + h * d, c + h * v]),
                            p < 1 && (t[1] = [s + p * d, c + p * v]),
                            !0)
                        }
                    }
                }
            }
        }
        function oc(t, n, e, r, i) {
            var o = t[1];
            if (o)
                return !0;
            var a, u, s = t[0], c = t.left, f = t.right, l = c[0], h = c[1], p = f[0], d = f[1], v = (l + p) / 2, g = (h + d) / 2;
            if (d === h) {
                if (v < n || v >= r)
                    return;
                if (l > p) {
                    if (s) {
                        if (s[1] >= i)
                            return
                    } else
                        s = [v, e];
                    o = [v, i]
                } else {
                    if (s) {
                        if (s[1] < e)
                            return
                    } else
                        s = [v, i];
                    o = [v, e]
                }
            } else if (a = (l - p) / (d - h),
            u = g - a * v,
            a < -1 || a > 1)
                if (l > p) {
                    if (s) {
                        if (s[1] >= i)
                            return
                    } else
                        s = [(e - u) / a, e];
                    o = [(i - u) / a, i]
                } else {
                    if (s) {
                        if (s[1] < e)
                            return
                    } else
                        s = [(i - u) / a, i];
                    o = [(e - u) / a, e]
                }
            else if (h < d) {
                if (s) {
                    if (s[0] >= r)
                        return
                } else
                    s = [n, a * n + u];
                o = [r, a * r + u]
            } else {
                if (s) {
                    if (s[0] < n)
                        return
                } else
                    s = [r, a * r + u];
                o = [n, a * n + u]
            }
            return t[0] = s,
            t[1] = o,
            !0
        }
        function ac(t, n, e, r) {
            for (var i, o = Ww.length; o--; )
                oc(i = Ww[o], t, n, e, r) && ic(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Gw || Math.abs(i[0][1] - i[1][1]) > Gw) || delete Ww[o]
        }
        function uc(t) {
            return Yw[t.index] = {
                site: t,
                halfedges: []
            }
        }
        function sc(t, n) {
            var e = t.site
              , r = n.left
              , i = n.right;
            return e === i && (i = r,
            r = e),
            i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1],
            i = n[0]) : (r = n[0],
            i = n[1]),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
        }
        function cc(t, n) {
            return n[+(n.left !== t.site)]
        }
        function fc(t, n) {
            return n[+(n.left === t.site)]
        }
        function lc() {
            for (var t, n, e, r, i = 0, o = Yw.length; i < o; ++i)
                if ((t = Yw[i]) && (r = (n = t.halfedges).length)) {
                    var a = new Array(r)
                      , u = new Array(r);
                    for (e = 0; e < r; ++e)
                        a[e] = e,
                        u[e] = sc(t, Ww[n[e]]);
                    for (a.sort(function(t, n) {
                        return u[n] - u[t]
                    }),
                    e = 0; e < r; ++e)
                        u[e] = n[a[e]];
                    for (e = 0; e < r; ++e)
                        n[e] = u[e]
                }
        }
        function hc(t, n, e, r) {
            var i, o, a, u, s, c, f, l, h, p, d, v, g = Yw.length, y = !0;
            for (i = 0; i < g; ++i)
                if (o = Yw[i]) {
                    for (a = o.site,
                    s = o.halfedges,
                    u = s.length; u--; )
                        Ww[s[u]] || s.splice(u, 1);
                    for (u = 0,
                    c = s.length; u < c; )
                        p = fc(o, Ww[s[u]]),
                        d = p[0],
                        v = p[1],
                        f = cc(o, Ww[s[++u % c]]),
                        l = f[0],
                        h = f[1],
                        (Math.abs(d - l) > Gw || Math.abs(v - h) > Gw) && (s.splice(u, 0, Ww.push(ec(a, p, Math.abs(d - t) < Gw && r - v > Gw ? [t, Math.abs(l - t) < Gw ? h : r] : Math.abs(v - r) < Gw && e - d > Gw ? [Math.abs(h - r) < Gw ? l : e, r] : Math.abs(d - e) < Gw && v - n > Gw ? [e, Math.abs(l - e) < Gw ? h : n] : Math.abs(v - n) < Gw && d - t > Gw ? [Math.abs(h - n) < Gw ? l : t, n] : null)) - 1),
                        ++c);
                    c && (y = !1)
                }
            if (y) {
                var _, m, b, x = 1 / 0;
                for (i = 0,
                y = null; i < g; ++i)
                    (o = Yw[i]) && (a = o.site,
                    _ = a[0] - t,
                    m = a[1] - n,
                    (b = _ * _ + m * m) < x && (x = b,
                    y = o));
                if (y) {
                    var w = [t, n]
                      , M = [t, r]
                      , A = [e, r]
                      , S = [e, n];
                    y.halfedges.push(Ww.push(ec(a = y.site, w, M)) - 1, Ww.push(ec(a, M, A)) - 1, Ww.push(ec(a, A, S)) - 1, Ww.push(ec(a, S, w)) - 1)
                }
            }
            for (i = 0; i < g; ++i)
                (o = Yw[i]) && (o.halfedges.length || delete Yw[i])
        }
        function pc() {
            Ks(this),
            this.x = this.y = this.arc = this.site = this.cy = null
        }
        function dc(t) {
            var n = t.P
              , e = t.N;
            if (n && e) {
                var r = n.site
                  , i = t.site
                  , o = e.site;
                if (r !== o) {
                    var a = i[0]
                      , u = i[1]
                      , s = r[0] - a
                      , c = r[1] - u
                      , f = o[0] - a
                      , l = o[1] - u
                      , h = 2 * (s * l - c * f);
                    if (!(h >= -Zw)) {
                        var p = s * s + c * c
                          , d = f * f + l * l
                          , v = (l * p - c * d) / h
                          , g = (s * d - f * p) / h
                          , y = Vw.pop() || new pc;
                        y.arc = t,
                        y.site = i,
                        y.x = v + a,
                        y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g),
                        t.circle = y;
                        for (var _ = null, m = Hw._; m; )
                            if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                                if (!m.L) {
                                    _ = m.P;
                                    break
                                }
                                m = m.L
                            } else {
                                if (!m.R) {
                                    _ = m;
                                    break
                                }
                                m = m.R
                            }
                        Hw.insert(_, y),
                        _ || (Fw = y)
                    }
                }
            }
        }
        function vc(t) {
            var n = t.circle;
            n && (n.P || (Fw = n.N),
            Hw.remove(n),
            Vw.push(n),
            Ks(n),
            t.circle = null)
        }
        function gc() {
            Ks(this),
            this.edge = this.site = this.circle = null
        }
        function yc(t) {
            var n = Xw.pop() || new gc;
            return n.site = t,
            n
        }
        function _c(t) {
            vc(t),
            qw.remove(t),
            Xw.push(t),
            Ks(t)
        }
        function mc(t) {
            var n = t.circle
              , e = n.x
              , r = n.cy
              , i = [e, r]
              , o = t.P
              , a = t.N
              , u = [t];
            _c(t);
            for (var s = o; s.circle && Math.abs(e - s.circle.x) < Gw && Math.abs(r - s.circle.cy) < Gw; )
                o = s.P,
                u.unshift(s),
                _c(s),
                s = o;
            u.unshift(s),
            vc(s);
            for (var c = a; c.circle && Math.abs(e - c.circle.x) < Gw && Math.abs(r - c.circle.cy) < Gw; )
                a = c.N,
                u.push(c),
                _c(c),
                c = a;
            u.push(c),
            vc(c);
            var f, l = u.length;
            for (f = 1; f < l; ++f)
                c = u[f],
                s = u[f - 1],
                rc(c.edge, s.site, c.site, i);
            s = u[0],
            c = u[l - 1],
            c.edge = nc(s.site, c.site, null, i),
            dc(s),
            dc(c)
        }
        function bc(t) {
            for (var n, e, r, i, o = t[0], a = t[1], u = qw._; u; )
                if ((r = xc(u, a) - o) > Gw)
                    u = u.L;
                else {
                    if (!((i = o - wc(u, a)) > Gw)) {
                        r > -Gw ? (n = u.P,
                        e = u) : i > -Gw ? (n = u,
                        e = u.N) : n = e = u;
                        break
                    }
                    if (!u.R) {
                        n = u;
                        break
                    }
                    u = u.R
                }
            uc(t);
            var s = yc(t);
            if (qw.insert(n, s),
            n || e) {
                if (n === e)
                    return vc(n),
                    e = yc(n.site),
                    qw.insert(s, e),
                    s.edge = e.edge = nc(n.site, s.site),
                    dc(n),
                    void dc(e);
                if (!e)
                    return void (s.edge = nc(n.site, s.site));
                vc(n),
                vc(e);
                var c = n.site
                  , f = c[0]
                  , l = c[1]
                  , h = t[0] - f
                  , p = t[1] - l
                  , d = e.site
                  , v = d[0] - f
                  , g = d[1] - l
                  , y = 2 * (h * g - p * v)
                  , _ = h * h + p * p
                  , m = v * v + g * g
                  , b = [(g * _ - p * m) / y + f, (h * m - v * _) / y + l];
                rc(e.edge, c, d, b),
                s.edge = nc(c, t, null, b),
                e.edge = nc(t, d, null, b),
                dc(n),
                dc(e)
            }
        }
        function xc(t, n) {
            var e = t.site
              , r = e[0]
              , i = e[1]
              , o = i - n;
            if (!o)
                return r;
            var a = t.P;
            if (!a)
                return -(1 / 0);
            e = a.site;
            var u = e[0]
              , s = e[1]
              , c = s - n;
            if (!c)
                return u;
            var f = u - r
              , l = 1 / o - 1 / c
              , h = f / c;
            return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * c) - s + c / 2 + i - o / 2))) / l + r : (r + u) / 2
        }
        function wc(t, n) {
            var e = t.N;
            if (e)
                return xc(e, n);
            var r = t.site;
            return r[1] === n ? r[0] : 1 / 0
        }
        function Mc(t, n, e) {
            return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
        }
        function Ac(t, n) {
            return n[1] - t[1] || n[0] - t[0]
        }
        function Sc(t, n) {
            var e, r, i, o = t.sort(Ac).pop();
            for (Ww = [],
            Yw = new Array(t.length),
            qw = new Zs,
            Hw = new Zs; ; )
                if (i = Fw,
                o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x))
                    o[0] === e && o[1] === r || (bc(o),
                    e = o[0],
                    r = o[1]),
                    o = t.pop();
                else {
                    if (!i)
                        break;
                    mc(i.arc)
                }
            if (lc(),
            n) {
                var a = +n[0][0]
                  , u = +n[0][1]
                  , s = +n[1][0]
                  , c = +n[1][1];
                ac(a, u, s, c),
                hc(a, u, s, c)
            }
            this.edges = Ww,
            this.cells = Yw,
            qw = Hw = Ww = Yw = null
        }
        function kc(t, n, e) {
            this.target = t,
            this.type = n,
            this.transform = e
        }
        function Cc(t, n, e) {
            this.k = t,
            this.x = n,
            this.y = e
        }
        function Ec(t) {
            return t.__zoom || Jw
        }
        function Tc() {
            t.event.stopImmediatePropagation()
        }
        function Nc() {
            return !t.event.button
        }
        function Oc() {
            var t, n, e = this;
            return e instanceof SVGElement ? (e = e.ownerSVGElement || e,
            t = e.width.baseVal.value,
            n = e.height.baseVal.value) : (t = e.clientWidth,
            n = e.clientHeight),
            [[0, 0], [t, n]]
        }
        function Rc() {
            return this.__zoom || Jw
        }
        var Pc = "4.7.2"
          , Lc = function(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
          , zc = function(t) {
            return 1 === t.length && (t = n(t)),
            {
                left: function(n, e, r, i) {
                    for (null == r && (r = 0),
                    null == i && (i = n.length); r < i; ) {
                        var o = r + i >>> 1;
                        t(n[o], e) < 0 ? r = o + 1 : i = o
                    }
                    return r
                },
                right: function(n, e, r, i) {
                    for (null == r && (r = 0),
                    null == i && (i = n.length); r < i; ) {
                        var o = r + i >>> 1;
                        t(n[o], e) > 0 ? i = o : r = o + 1
                    }
                    return r
                }
            }
        }
          , Ic = zc(Lc)
          , jc = Ic.right
          , Uc = Ic.left
          , Dc = function(t, n) {
            null == n && (n = e);
            for (var r = 0, i = t.length - 1, o = t[0], a = new Array(i < 0 ? 0 : i); r < i; )
                a[r] = n(o, o = t[++r]);
            return a
        }
          , $c = function(t, n, r) {
            var i, o, a, u, s = t.length, c = n.length, f = new Array(s * c);
            for (null == r && (r = e),
            i = a = 0; i < s; ++i)
                for (u = t[i],
                o = 0; o < c; ++o,
                ++a)
                    f[a] = r(u, n[o]);
            return f
        }
          , Bc = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
          , Fc = function(t) {
            return null === t ? NaN : +t
        }
          , qc = function(t, n) {
            var e, r, i = t.length, o = 0, a = 0, u = -1, s = 0;
            if (null == n)
                for (; ++u < i; )
                    isNaN(e = Fc(t[u])) || (r = e - o,
                    o += r / ++s,
                    a += r * (e - o));
            else
                for (; ++u < i; )
                    isNaN(e = Fc(n(t[u], u, t))) || (r = e - o,
                    o += r / ++s,
                    a += r * (e - o));
            if (s > 1)
                return a / (s - 1)
        }
          , Yc = function(t, n) {
            var e = qc(t, n);
            return e ? Math.sqrt(e) : e
        }
          , Hc = function(t, n) {
            var e, r, i, o = -1, a = t.length;
            if (null == n) {
                for (; ++o < a; )
                    if (null != (r = t[o]) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < a; )
                    null != (r = t[o]) && (e > r && (e = r),
                    i < r && (i = r))
            } else {
                for (; ++o < a; )
                    if (null != (r = n(t[o], o, t)) && r >= r) {
                        e = i = r;
                        break
                    }
                for (; ++o < a; )
                    null != (r = n(t[o], o, t)) && (e > r && (e = r),
                    i < r && (i = r))
            }
            return [e, i]
        }
          , Wc = Array.prototype
          , Vc = Wc.slice
          , Xc = Wc.map
          , Gc = function(t) {
            return function() {
                return t
            }
        }
          , Zc = function(t) {
            return t
        }
          , Kc = function(t, n, e) {
            t = +t,
            n = +n,
            e = (i = arguments.length) < 2 ? (n = t,
            t = 0,
            1) : i < 3 ? 1 : +e;
            for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i; )
                o[r] = t + r * e;
            return o
        }
          , Qc = Math.sqrt(50)
          , Jc = Math.sqrt(10)
          , tf = Math.sqrt(2)
          , nf = function(t, n, e) {
            var i = r(t, n, e);
            return Kc(Math.ceil(t / i) * i, Math.floor(n / i) * i + i / 2, i)
        }
          , ef = function(t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
        }
          , rf = function() {
            function t(t) {
                var i, o, a = t.length, u = new Array(a);
                for (i = 0; i < a; ++i)
                    u[i] = n(t[i], i, t);
                var s = e(u)
                  , c = s[0]
                  , f = s[1]
                  , l = r(u, c, f);
                Array.isArray(l) || (l = nf(c, f, l));
                for (var h = l.length; l[0] <= c; )
                    l.shift(),
                    --h;
                for (; l[h - 1] >= f; )
                    l.pop(),
                    --h;
                var p, d = new Array(h + 1);
                for (i = 0; i <= h; ++i)
                    p = d[i] = [],
                    p.x0 = i > 0 ? l[i - 1] : c,
                    p.x1 = i < h ? l[i] : f;
                for (i = 0; i < a; ++i)
                    o = u[i],
                    c <= o && o <= f && d[jc(l, o, 0, h)].push(t[i]);
                return d
            }
            var n = Zc
              , e = Hc
              , r = ef;
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Gc(e),
                t) : n
            }
            ,
            t.domain = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Gc([n[0], n[1]]),
                t) : e
            }
            ,
            t.thresholds = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Gc(Array.isArray(n) ? Vc.call(n) : n),
                t) : r
            }
            ,
            t
        }
          , of = function(t, n, e) {
            if (null == e && (e = Fc),
            r = t.length) {
                if ((n = +n) <= 0 || r < 2)
                    return +e(t[0], 0, t);
                if (n >= 1)
                    return +e(t[r - 1], r - 1, t);
                var r, i = (r - 1) * n, o = Math.floor(i), a = +e(t[o], o, t);
                return a + (+e(t[o + 1], o + 1, t) - a) * (i - o)
            }
        }
          , af = function(t, n, e) {
            return t = Xc.call(t, Fc).sort(Lc),
            Math.ceil((e - n) / (2 * (of(t, .75) - of(t, .25)) * Math.pow(t.length, -1 / 3)))
        }
          , uf = function(t, n, e) {
            return Math.ceil((e - n) / (3.5 * Yc(t) * Math.pow(t.length, -1 / 3)))
        }
          , sf = function(t, n) {
            var e, r, i = -1, o = t.length;
            if (null == n) {
                for (; ++i < o; )
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o; )
                    null != (r = t[i]) && r > e && (e = r)
            } else {
                for (; ++i < o; )
                    if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o; )
                    null != (r = n(t[i], i, t)) && r > e && (e = r)
            }
            return e
        }
          , cf = function(t, n) {
            var e, r = 0, i = t.length, o = -1, a = i;
            if (null == n)
                for (; ++o < i; )
                    isNaN(e = Fc(t[o])) ? --a : r += e;
            else
                for (; ++o < i; )
                    isNaN(e = Fc(n(t[o], o, t))) ? --a : r += e;
            if (a)
                return r / a
        }
          , ff = function(t, n) {
            var e, r = [], i = t.length, o = -1;
            if (null == n)
                for (; ++o < i; )
                    isNaN(e = Fc(t[o])) || r.push(e);
            else
                for (; ++o < i; )
                    isNaN(e = Fc(n(t[o], o, t))) || r.push(e);
            return of(r.sort(Lc), .5)
        }
          , lf = function(t) {
            for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i; )
                a += t[o].length;
            for (e = new Array(a); --i >= 0; )
                for (r = t[i],
                n = r.length; --n >= 0; )
                    e[--a] = r[n];
            return e
        }
          , hf = function(t, n) {
            var e, r, i = -1, o = t.length;
            if (null == n) {
                for (; ++i < o; )
                    if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o; )
                    null != (r = t[i]) && e > r && (e = r)
            } else {
                for (; ++i < o; )
                    if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                for (; ++i < o; )
                    null != (r = n(t[i], i, t)) && e > r && (e = r)
            }
            return e
        }
          , pf = function(t, n) {
            for (var e = n.length, r = new Array(e); e--; )
                r[e] = t[n[e]];
            return r
        }
          , df = function(t, n) {
            if (e = t.length) {
                var e, r, i = 0, o = 0, a = t[o];
                for (n || (n = Lc); ++i < e; )
                    (n(r = t[i], a) < 0 || 0 !== n(a, a)) && (a = r,
                    o = i);
                return 0 === n(a, a) ? o : void 0
            }
        }
          , vf = function(t, n, e) {
            for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o; )
                i = Math.random() * o-- | 0,
                r = t[o + n],
                t[o + n] = t[i + n],
                t[i + n] = r;
            return t
        }
          , gf = function(t, n) {
            var e, r = 0, i = t.length, o = -1;
            if (null == n)
                for (; ++o < i; )
                    (e = +t[o]) && (r += e);
            else
                for (; ++o < i; )
                    (e = +n(t[o], o, t)) && (r += e);
            return r
        }
          , yf = function(t) {
            if (!(o = t.length))
                return [];
            for (var n = -1, e = hf(t, i), r = new Array(e); ++n < e; )
                for (var o, a = -1, u = r[n] = new Array(o); ++a < o; )
                    u[a] = t[a][n];
            return r
        }
          , _f = function() {
            return yf(arguments)
        }
          , mf = Array.prototype.slice
          , bf = function(t) {
            return t
        }
          , xf = 1
          , wf = 2
          , Mf = 3
          , Af = 4
          , Sf = 1e-6
          , kf = {
            value: function() {}
        };
        v.prototype = d.prototype = {
            constructor: v,
            on: function(t, n) {
                var e, r = this._, i = g(t + "", r), o = -1, a = i.length;
                {
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n)
                            throw new Error("invalid callback: " + n);
                        for (; ++o < a; )
                            if (e = (t = i[o]).type)
                                r[e] = _(r[e], t.name, n);
                            else if (null == n)
                                for (e in r)
                                    r[e] = _(r[e], t.name, null);
                        return this
                    }
                    for (; ++o < a; )
                        if ((e = (t = i[o]).type) && (e = y(r[e], t.name)))
                            return e
                }
            },
            copy: function() {
                var t = {}
                  , n = this._;
                for (var e in n)
                    t[e] = n[e].slice();
                return new v(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o)
                        i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (r = this._[t],
                o = 0,
                e = r.length; o < e; ++o)
                    r[o].value.apply(n, i)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
                    r[i].value.apply(n, e)
            }
        };
        var Cf = "http://www.w3.org/1999/xhtml"
          , Ef = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: Cf,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
          , Tf = function(t) {
            var n = t += ""
              , e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            Ef.hasOwnProperty(n) ? {
                space: Ef[n],
                local: t
            } : t
        }
          , Nf = function(t) {
            var n = Tf(t);
            return (n.local ? b : m)(n)
        }
          , Of = 0;
        w.prototype = x.prototype = {
            constructor: w,
            get: function(t) {
                for (var n = this._; !(n in t); )
                    if (!(t = t.parentNode))
                        return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var Rf = function(t) {
            return function() {
                return this.matches(t)
            }
        };
        if ("undefined" != typeof document) {
            var Pf = document.documentElement;
            if (!Pf.matches) {
                var Lf = Pf.webkitMatchesSelector || Pf.msMatchesSelector || Pf.mozMatchesSelector || Pf.oMatchesSelector;
                Rf = function(t) {
                    return function() {
                        return Lf.call(this, t)
                    }
                }
            }
        }
        var zf = Rf
          , If = {};
        if (t.event = null,
        "undefined" != typeof document) {
            "onmouseenter"in document.documentElement || (If = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            })
        }
        var jf = function(t, n, e) {
            var r, i, o = S(t + ""), a = o.length;
            {
                if (!(arguments.length < 2)) {
                    for (u = n ? C : k,
                    null == e && (e = !1),
                    r = 0; r < a; ++r)
                        this.each(u(o[r], n, e));
                    return this
                }
                var u = this.node().__on;
                if (u)
                    for (var s, c = 0, f = u.length; c < f; ++c)
                        for (r = 0,
                        s = u[c]; r < a; ++r)
                            if ((i = o[r]).type === s.type && i.name === s.name)
                                return s.value
            }
        }
          , Uf = function() {
            for (var n, e = t.event; n = e.sourceEvent; )
                e = n;
            return e
        }
          , Df = function(t, n) {
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = n.clientX,
                r.y = n.clientY,
                r = r.matrixTransform(t.getScreenCTM().inverse()),
                [r.x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
        }
          , $f = function(t) {
            var n = Uf();
            return n.changedTouches && (n = n.changedTouches[0]),
            Df(t, n)
        }
          , Bf = function(t) {
            return null == t ? T : function() {
                return this.querySelector(t)
            }
        }
          , Ff = function(t) {
            "function" != typeof t && (t = Bf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a, u = n[i], s = u.length, c = r[i] = new Array(s), f = 0; f < s; ++f)
                    (o = u[f]) && (a = t.call(o, o.__data__, f, u)) && ("__data__"in o && (a.__data__ = o.__data__),
                    c[f] = a);
            return new dt(r,this._parents)
        }
          , qf = function(t) {
            return null == t ? N : function() {
                return this.querySelectorAll(t)
            }
        }
          , Yf = function(t) {
            "function" != typeof t && (t = qf(t));
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var a, u = n[o], s = u.length, c = 0; c < s; ++c)
                    (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)),
                    i.push(a));
            return new dt(r,i)
        }
          , Hf = function(t) {
            "function" != typeof t && (t = zf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, s = r[i] = [], c = 0; c < u; ++c)
                    (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
            return new dt(r,this._parents)
        }
          , Wf = function(t) {
            return new Array(t.length)
        }
          , Vf = function() {
            return new dt(this._enter || this._groups.map(Wf),this._parents)
        };
        O.prototype = {
            constructor: O,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var Xf = function(t) {
            return function() {
                return t
            }
        }
          , Gf = "$"
          , Zf = function(t, n) {
            if (!t)
                return p = new Array(this.size()),
                c = -1,
                this.each(function(t) {
                    p[++c] = t
                }),
                p;
            var e = n ? P : R
              , r = this._parents
              , i = this._groups;
            "function" != typeof t && (t = Xf(t));
            for (var o = i.length, a = new Array(o), u = new Array(o), s = new Array(o), c = 0; c < o; ++c) {
                var f = r[c]
                  , l = i[c]
                  , h = l.length
                  , p = t.call(f, f && f.__data__, c, r)
                  , d = p.length
                  , v = u[c] = new Array(d)
                  , g = a[c] = new Array(d);
                e(f, l, v, g, s[c] = new Array(h), p, n);
                for (var y, _, m = 0, b = 0; m < d; ++m)
                    if (y = v[m]) {
                        for (m >= b && (b = m + 1); !(_ = g[b]) && ++b < d; )
                            ;
                        y._next = _ || null
                    }
            }
            return a = new dt(a,r),
            a._enter = u,
            a._exit = s,
            a
        }
          , Kf = function() {
            return new dt(this._exit || this._groups.map(Wf),this._parents)
        }
          , Qf = function(t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var s, c = n[u], f = e[u], l = c.length, h = a[u] = new Array(l), p = 0; p < l; ++p)
                    (s = c[p] || f[p]) && (h[p] = s);
            for (; u < r; ++u)
                a[u] = n[u];
            return new dt(a,this._parents)
        }
          , Jf = function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; )
                for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
                    (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a),
                    a = r);
            return this
        }
          , tl = function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = L);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var a, u = e[o], s = u.length, c = i[o] = new Array(s), f = 0; f < s; ++f)
                    (a = u[f]) && (c[f] = a);
                c.sort(n)
            }
            return new dt(i,this._parents).order()
        }
          , nl = function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        }
          , el = function() {
            var t = new Array(this.size())
              , n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        }
          , rl = function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var a = r[i];
                    if (a)
                        return a
                }
            return null
        }
          , il = function() {
            var t = 0;
            return this.each(function() {
                ++t
            }),
            t
        }
          , ol = function() {
            return !this.node()
        }
          , al = function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
                    (i = o[a]) && t.call(i, i.__data__, a, o);
            return this
        }
          , ul = function(t, n) {
            var e = Tf(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? I : z : "function" == typeof n ? e.local ? $ : D : e.local ? U : j)(e, n))
        }
          , sl = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
          , cl = function(t, n, e) {
            var r;
            return arguments.length > 1 ? this.each((null == n ? B : "function" == typeof n ? q : F)(t, n, null == e ? "" : e)) : sl(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
        }
          , fl = function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? Y : "function" == typeof n ? W : H)(t, n)) : this.node()[t]
        };
        G.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t),
                this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1),
                this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };
        var ll = function(t, n) {
            var e = V(t + "");
            if (arguments.length < 2) {
                for (var r = X(this.node()), i = -1, o = e.length; ++i < o; )
                    if (!r.contains(e[i]))
                        return !1;
                return !0
            }
            return this.each(("function" == typeof n ? tt : n ? Q : J)(e, n))
        }
          , hl = function(t) {
            return arguments.length ? this.each(null == t ? nt : ("function" == typeof t ? rt : et)(t)) : this.node().textContent
        }
          , pl = function(t) {
            return arguments.length ? this.each(null == t ? it : ("function" == typeof t ? at : ot)(t)) : this.node().innerHTML
        }
          , dl = function() {
            return this.each(ut)
        }
          , vl = function() {
            return this.each(st)
        }
          , gl = function(t) {
            var n = "function" == typeof t ? t : Nf(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        }
          , yl = function(t, n) {
            var e = "function" == typeof t ? t : Nf(t)
              , r = null == n ? ct : "function" == typeof n ? n : Bf(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        }
          , _l = function() {
            return this.each(ft)
        }
          , ml = function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }
          , bl = function(t, n) {
            return this.each(("function" == typeof n ? pt : ht)(t, n))
        }
          , xl = [null];
        dt.prototype = vt.prototype = {
            constructor: dt,
            select: Ff,
            selectAll: Yf,
            filter: Hf,
            data: Zf,
            enter: Vf,
            exit: Kf,
            merge: Qf,
            order: Jf,
            sort: tl,
            call: nl,
            nodes: el,
            node: rl,
            size: il,
            empty: ol,
            each: al,
            attr: ul,
            style: cl,
            property: fl,
            classed: ll,
            text: hl,
            html: pl,
            raise: dl,
            lower: vl,
            append: gl,
            insert: yl,
            remove: _l,
            datum: ml,
            on: jf,
            dispatch: bl
        };
        var wl = function(t) {
            return "string" == typeof t ? new dt([[document.querySelector(t)]],[document.documentElement]) : new dt([[t]],xl)
        }
          , Ml = function(t) {
            return "string" == typeof t ? new dt([document.querySelectorAll(t)],[document.documentElement]) : new dt([null == t ? [] : t],xl)
        }
          , Al = function(t, n, e) {
            arguments.length < 3 && (e = n,
            n = Uf().changedTouches);
            for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                if ((r = n[i]).identifier === e)
                    return Df(t, r);
            return null
        }
          , Sl = function(t, n) {
            null == n && (n = Uf().touches);
            for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
                i[e] = Df(t, n[e]);
            return i
        }
          , kl = function() {
            t.event.preventDefault(),
            t.event.stopImmediatePropagation()
        }
          , Cl = function(t) {
            var n = t.document.documentElement
              , e = wl(t).on("dragstart.drag", kl, !0);
            "onselectstart"in n ? e.on("selectstart.drag", kl, !0) : (n.__noselect = n.style.MozUserSelect,
            n.style.MozUserSelect = "none")
        }
          , El = function(t) {
            return function() {
                return t
            }
        };
        _t.prototype.on = function() {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        }
        ;
        var Tl = function() {
            function n(t) {
                t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", a).on("touchend.drag touchcancel.drag", u).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }
            function e() {
                if (!f && l.apply(this, arguments)) {
                    var n = s("mouse", h.apply(this, arguments), $f, this, arguments);
                    n && (wl(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0),
                    Cl(t.event.view),
                    gt(),
                    c = !1,
                    n("start"))
                }
            }
            function r() {
                kl(),
                c = !0,
                v.mouse("drag")
            }
            function i() {
                wl(t.event.view).on("mousemove.drag mouseup.drag", null),
                yt(t.event.view, c),
                kl(),
                v.mouse("end")
            }
            function o() {
                if (l.apply(this, arguments)) {
                    var n, e, r = t.event.changedTouches, i = h.apply(this, arguments), o = r.length;
                    for (n = 0; n < o; ++n)
                        (e = s(r[n].identifier, i, Al, this, arguments)) && (gt(),
                        e("start"))
                }
            }
            function a() {
                var n, e, r = t.event.changedTouches, i = r.length;
                for (n = 0; n < i; ++n)
                    (e = v[r[n].identifier]) && (kl(),
                    e("drag"))
            }
            function u() {
                var n, e, r = t.event.changedTouches, i = r.length;
                for (f && clearTimeout(f),
                f = setTimeout(function() {
                    f = null
                }, 500),
                n = 0; n < i; ++n)
                    (e = v[r[n].identifier]) && (gt(),
                    e("end"))
            }
            function s(e, r, i, o, a) {
                var u, s, c, f = i(r, e), l = g.copy();
                if (E(new _t(n,"beforestart",u,e,y,f[0],f[1],0,0,l), function() {
                    return null != (t.event.subject = u = p.apply(o, a)) && (s = u.x - f[0] || 0,
                    c = u.y - f[1] || 0,
                    !0)
                }))
                    return function t(h) {
                        var p, d = f;
                        switch (h) {
                        case "start":
                            v[e] = t,
                            p = y++;
                            break;
                        case "end":
                            delete v[e],
                            --y;
                        case "drag":
                            f = i(r, e),
                            p = y
                        }
                        E(new _t(n,h,u,e,p,f[0] + s,f[1] + c,f[0] - d[0],f[1] - d[1],l), l.apply, l, [h, o, a])
                    }
            }
            var c, f, l = mt, h = bt, p = xt, v = {}, g = d("start", "drag", "end"), y = 0;
            return n.filter = function(t) {
                return arguments.length ? (l = "function" == typeof t ? t : El(!!t),
                n) : l
            }
            ,
            n.container = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : El(t),
                n) : h
            }
            ,
            n.subject = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : El(t),
                n) : p
            }
            ,
            n.on = function() {
                var t = g.on.apply(g, arguments);
                return t === g ? n : t
            }
            ,
            n
        }
          , Nl = function(t, n, e) {
            t.prototype = n.prototype = e,
            e.constructor = t
        }
          , Ol = .7
          , Rl = 1 / Ol
          , Pl = "\\s*([+-]?\\d+)\\s*"
          , Ll = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
          , zl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
          , Il = /^#([0-9a-f]{3})$/
          , jl = /^#([0-9a-f]{6})$/
          , Ul = new RegExp("^rgb\\(" + [Pl, Pl, Pl] + "\\)$")
          , Dl = new RegExp("^rgb\\(" + [zl, zl, zl] + "\\)$")
          , $l = new RegExp("^rgba\\(" + [Pl, Pl, Pl, Ll] + "\\)$")
          , Bl = new RegExp("^rgba\\(" + [zl, zl, zl, Ll] + "\\)$")
          , Fl = new RegExp("^hsl\\(" + [Ll, zl, zl] + "\\)$")
          , ql = new RegExp("^hsla\\(" + [Ll, zl, zl, Ll] + "\\)$")
          , Yl = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        Nl(Mt, At, {
            displayable: function() {
                return this.rgb().displayable()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }),
        Nl(Tt, Et, wt(Mt, {
            brighter: function(t) {
                return t = null == t ? Rl : Math.pow(Rl, t),
                new Tt(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? Ol : Math.pow(Ol, t),
                new Tt(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            toString: function() {
                var t = this.opacity;
                return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)),
                (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })),
        Nl(Pt, Rt, wt(Mt, {
            brighter: function(t) {
                return t = null == t ? Rl : Math.pow(Rl, t),
                new Pt(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? Ol : Math.pow(Ol, t),
                new Pt(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0)
                  , n = isNaN(t) || isNaN(this.s) ? 0 : this.s
                  , e = this.l
                  , r = e + (e < .5 ? e : 1 - e) * n
                  , i = 2 * e - r;
                return new Tt(Lt(t >= 240 ? t - 240 : t + 120, i, r),Lt(t, i, r),Lt(t < 120 ? t + 240 : t - 120, i, r),this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var Hl = Math.PI / 180
          , Wl = 180 / Math.PI
          , Vl = 18
          , Xl = .95047
          , Gl = 1
          , Zl = 1.08883
          , Kl = 4 / 29
          , Ql = 6 / 29
          , Jl = 3 * Ql * Ql
          , th = Ql * Ql * Ql;
        Nl(jt, It, wt(Mt, {
            brighter: function(t) {
                return new jt(this.l + Vl * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            darker: function(t) {
                return new jt(this.l - Vl * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116
                  , n = isNaN(this.a) ? t : t + this.a / 500
                  , e = isNaN(this.b) ? t : t - this.b / 200;
                return t = Gl * Dt(t),
                n = Xl * Dt(n),
                e = Zl * Dt(e),
                new Tt($t(3.2404542 * n - 1.5371385 * t - .4985314 * e),$t(-.969266 * n + 1.8760108 * t + .041556 * e),$t(.0556434 * n - .2040259 * t + 1.0572252 * e),this.opacity)
            }
        })),
        Nl(Yt, qt, wt(Mt, {
            brighter: function(t) {
                return new Yt(this.h,this.c,this.l + Vl * (null == t ? 1 : t),this.opacity)
            },
            darker: function(t) {
                return new Yt(this.h,this.c,this.l - Vl * (null == t ? 1 : t),this.opacity)
            },
            rgb: function() {
                return zt(this).rgb()
            }
        }));
        var nh = -.14861
          , eh = 1.78277
          , rh = -.29227
          , ih = -.90649
          , oh = 1.97294
          , ah = oh * ih
          , uh = oh * eh
          , sh = eh * rh - ih * nh;
        Nl(Vt, Wt, wt(Mt, {
            brighter: function(t) {
                return t = null == t ? Rl : Math.pow(Rl, t),
                new Vt(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? Ol : Math.pow(Ol, t),
                new Vt(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * Hl
                  , n = +this.l
                  , e = isNaN(this.s) ? 0 : this.s * n * (1 - n)
                  , r = Math.cos(t)
                  , i = Math.sin(t);
                return new Tt(255 * (n + e * (nh * r + eh * i)),255 * (n + e * (rh * r + ih * i)),255 * (n + e * (oh * r)),this.opacity)
            }
        }));
        var ch, fh, lh, hh, ph, dh, vh = function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1,
                n - 1) : Math.floor(e * n)
                  , i = t[r]
                  , o = t[r + 1];
                return Xt((e - r / n) * n, r > 0 ? t[r - 1] : 2 * i - o, i, o, r < n - 1 ? t[r + 2] : 2 * o - i)
            }
        }, gh = function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n);
                return Xt((e - r / n) * n, t[(r + n - 1) % n], t[r % n], t[(r + 1) % n], t[(r + 2) % n])
            }
        }, yh = function(t) {
            return function() {
                return t
            }
        }, _h = function t(n) {
            function e(t, n) {
                var e = r((t = Et(t)).r, (n = Et(n)).r)
                  , i = r(t.g, n.g)
                  , o = r(t.b, n.b)
                  , a = Jt(t.opacity, n.opacity);
                return function(n) {
                    return t.r = e(n),
                    t.g = i(n),
                    t.b = o(n),
                    t.opacity = a(n),
                    t + ""
                }
            }
            var r = Qt(n);
            return e.gamma = t,
            e
        }(1), mh = tn(vh), bh = tn(gh), xh = function(t, n) {
            var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(r), a = new Array(r);
            for (e = 0; e < i; ++e)
                o[e] = Eh(t[e], n[e]);
            for (; e < r; ++e)
                a[e] = n[e];
            return function(t) {
                for (e = 0; e < i; ++e)
                    a[e] = o[e](t);
                return a
            }
        }, wh = function(t, n) {
            var e = new Date;
            return t = +t,
            n -= t,
            function(r) {
                return e.setTime(t + n * r),
                e
            }
        }, Mh = function(t, n) {
            return t = +t,
            n -= t,
            function(e) {
                return t + n * e
            }
        }, Ah = function(t, n) {
            var e, r = {}, i = {};
            null !== t && "object" == typeof t || (t = {}),
            null !== n && "object" == typeof n || (n = {});
            for (e in n)
                e in t ? r[e] = Eh(t[e], n[e]) : i[e] = n[e];
            return function(t) {
                for (e in r)
                    i[e] = r[e](t);
                return i
            }
        }, Sh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, kh = new RegExp(Sh.source,"g"), Ch = function(t, n) {
            var e, r, i, o = Sh.lastIndex = kh.lastIndex = 0, a = -1, u = [], s = [];
            for (t += "",
            n += ""; (e = Sh.exec(t)) && (r = kh.exec(n)); )
                (i = r.index) > o && (i = n.slice(o, i),
                u[a] ? u[a] += i : u[++a] = i),
                (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null,
                s.push({
                    i: a,
                    x: Mh(e, r)
                })),
                o = kh.lastIndex;
            return o < n.length && (i = n.slice(o),
            u[a] ? u[a] += i : u[++a] = i),
            u.length < 2 ? s[0] ? en(s[0].x) : nn(n) : (n = s.length,
            function(t) {
                for (var e, r = 0; r < n; ++r)
                    u[(e = s[r]).i] = e.x(t);
                return u.join("")
            }
            )
        }, Eh = function(t, n) {
            var e, r = typeof n;
            return null == n || "boolean" === r ? yh(n) : ("number" === r ? Mh : "string" === r ? (e = At(n)) ? (n = e,
            _h) : Ch : n instanceof At ? _h : n instanceof Date ? wh : Array.isArray(n) ? xh : isNaN(n) ? Ah : Mh)(t, n)
        }, Th = function(t, n) {
            return t = +t,
            n -= t,
            function(e) {
                return Math.round(t + n * e)
            }
        }, Nh = 180 / Math.PI, Oh = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        }, Rh = function(t, n, e, r, i, o) {
            var a, u, s;
            return (a = Math.sqrt(t * t + n * n)) && (t /= a,
            n /= a),
            (s = t * e + n * r) && (e -= t * s,
            r -= n * s),
            (u = Math.sqrt(e * e + r * r)) && (e /= u,
            r /= u,
            s /= u),
            t * r < n * e && (t = -t,
            n = -n,
            s = -s,
            a = -a),
            {
                translateX: i,
                translateY: o,
                rotate: Math.atan2(n, t) * Nh,
                skewX: Math.atan(s) * Nh,
                scaleX: a,
                scaleY: u
            }
        }, Ph = an(rn, "px, ", "px)", "deg)"), Lh = an(on, ", ", ")", ")"), zh = Math.SQRT2, Ih = 2, jh = 4, Uh = 1e-12, Dh = function(t, n) {
            var e, r, i = t[0], o = t[1], a = t[2], u = n[0], s = n[1], c = n[2], f = u - i, l = s - o, h = f * f + l * l;
            if (h < Uh)
                r = Math.log(c / a) / zh,
                e = function(t) {
                    return [i + t * f, o + t * l, a * Math.exp(zh * t * r)]
                }                
            else {
                var p = Math.sqrt(h)
                  , d = (c * c - a * a + jh * h) / (2 * a * Ih * p)
                  , v = (c * c - a * a - jh * h) / (2 * c * Ih * p)
                  , g = Math.log(Math.sqrt(d * d + 1) - d);
                r = (Math.log(Math.sqrt(v * v + 1) - v) - g) / zh,
                e = function(t) {
                    var n = t * r
                      , e = un(g)
                      , u = a / (Ih * p) * (e * cn(zh * n + g) - sn(g));
                    return [i + u * f, o + u * l, a * e / un(zh * n + g)]
                }
            }
            return e.duration = 1e3 * r,
            e
        }, $h = fn(Kt), Bh = fn(Jt), Fh = hn(Kt), qh = hn(Jt), Yh = pn(Kt), Hh = pn(Jt), Wh = function(t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r)
                e[r] = t(r / (n - 1));
            return e
        }, Vh = 0, Xh = 0, Gh = 0, Zh = 1e3, Kh = 0, Qh = 0, Jh = 0, tp = "object" == typeof performance && performance.now ? performance : Date, np = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
            setTimeout(t, 17)
        }
        ;
        gn.prototype = yn.prototype = {
            constructor: gn,
            restart: function(t, n, e) {
                if ("function" != typeof t)
                    throw new TypeError("callback is not a function");
                e = (null == e ? dn() : +e) + (null == n ? 0 : +n),
                this._next || dh === this || (dh ? dh._next = this : ph = this,
                dh = this),
                this._call = t,
                this._time = e,
                wn()
            },
            stop: function() {
                this._call && (this._call = null,
                this._time = 1 / 0,
                wn())
            }
        };
        var ep = function(t, n, e) {
            var r = new gn;
            return n = null == n ? 0 : +n,
            r.restart(function(e) {
                r.stop(),
                t(e + n)
            }, n, e),
            r
        }
          , rp = function(t, n, e) {
            var r = new gn
              , i = n;
            return null == n ? (r.restart(t, n, e),
            r) : (n = +n,
            e = null == e ? dn() : +e,
            r.restart(function o(a) {
                a += i,
                r.restart(o, i += n, e),
                t(a)
            }, n, e),
            r)
        }
          , ip = d("start", "end", "interrupt")
          , op = []
          , ap = 0
          , up = 1
          , sp = 2
          , cp = 3
          , fp = 4
          , lp = 5
          , hp = 6
          , pp = function(t, n, e, r, i, o) {
            var a = t.__transition;
            if (a) {
                if (e in a)
                    return
            } else
                t.__transition = {};
            kn(t, e, {
                name: n,
                index: r,
                group: i,
                on: ip,
                tween: op,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: ap
            })
        }
          , dp = function(t, n) {
            var e, r, i, o = t.__transition, a = !0;
            if (o) {
                n = null == n ? null : n + "";
                for (i in o)
                    (e = o[i]).name === n ? (r = e.state > sp && e.state < lp,
                    e.state = hp,
                    e.timer.stop(),
                    r && e.on.call("interrupt", t, t.__data__, e.index, e.group),
                    delete o[i]) : a = !1;
                a && delete t.__transition
            }
        }
          , vp = function(t) {
            return this.each(function() {
                dp(this, t)
            })
        }
          , gp = function(t, n) {
            var e = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var r, i = Sn(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                    if ((r = i[o]).name === t)
                        return r.value;
                return null
            }
            return this.each((null == n ? Cn : En)(e, t, n))
        }
          , yp = function(t, n) {
            var e;
            return ("number" == typeof n ? Mh : n instanceof At ? _h : (e = At(n)) ? (n = e,
            _h) : Ch)(t, n)
        }
          , _p = function(t, n) {
            var e = Tf(t)
              , r = "transform" === e ? Lh : yp;
            return this.attrTween(t, "function" == typeof n ? (e.local ? zn : Ln)(e, r, Tn(this, "attr." + t, n)) : null == n ? (e.local ? On : Nn)(e) : (e.local ? Pn : Rn)(e, r, n + ""))
        }
          , mp = function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2)
                return (e = this.tween(e)) && e._value;
            if (null == n)
                return this.tween(e, null);
            if ("function" != typeof n)
                throw new Error;
            var r = Tf(t);
            return this.tween(e, (r.local ? In : jn)(r, n))
        }
          , bp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Un : Dn)(n, t)) : Sn(this.node(), n).delay
        }
          , xp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? $n : Bn)(n, t)) : Sn(this.node(), n).duration
        }
          , wp = function(t) {
            var n = this._id;
            return arguments.length ? this.each(Fn(n, t)) : Sn(this.node(), n).ease
        }
          , Mp = function(t) {
            "function" != typeof t && (t = zf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, s = r[i] = [], c = 0; c < u; ++c)
                    (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
            return new Jn(r,this._parents,this._name,this._id)
        }
          , Ap = function(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var s, c = n[u], f = e[u], l = c.length, h = a[u] = new Array(l), p = 0; p < l; ++p)
                    (s = c[p] || f[p]) && (h[p] = s);
            for (; u < r; ++u)
                a[u] = n[u];
            return new Jn(a,this._parents,this._name,this._id)
        }
          , Sp = function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? Sn(this.node(), e).on.on(t) : this.each(Yn(e, t, n))
        }
          , kp = function() {
            return this.on("end.remove", Hn(this._id))
        }
          , Cp = function(t) {
            var n = this._name
              , e = this._id;
            "function" != typeof t && (t = Bf(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, s, c = r[a], f = c.length, l = o[a] = new Array(f), h = 0; h < f; ++h)
                    (u = c[h]) && (s = t.call(u, u.__data__, h, c)) && ("__data__"in u && (s.__data__ = u.__data__),
                    l[h] = s,
                    pp(l[h], n, e, h, l, Sn(u, e)));
            return new Jn(o,this._parents,n,e)
        }
          , Ep = function(t) {
            var n = this._name
              , e = this._id;
            "function" != typeof t && (t = qf(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var s, c = r[u], f = c.length, l = 0; l < f; ++l)
                    if (s = c[l]) {
                        for (var h, p = t.call(s, s.__data__, l, c), d = Sn(s, e), v = 0, g = p.length; v < g; ++v)
                            (h = p[v]) && pp(h, n, e, v, p, d);
                        o.push(p),
                        a.push(s)
                    }
            return new Jn(o,a,n,e)
        }
          , Tp = vt.prototype.constructor
          , Np = function() {
            return new Tp(this._groups,this._parents)
        }
          , Op = function(t, n, e) {
            var r = "transform" == (t += "") ? Ph : yp;
            return null == n ? this.styleTween(t, Wn(t, r)).on("end.style." + t, Vn(t)) : this.styleTween(t, "function" == typeof n ? Gn(t, r, Tn(this, "style." + t, n)) : Xn(t, r, n + ""), e)
        }
          , Rp = function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2)
                return (r = this.tween(r)) && r._value;
            if (null == n)
                return this.tween(r, null);
            if ("function" != typeof n)
                throw new Error;
            return this.tween(r, Zn(t, n, null == e ? "" : e))
        }
          , Pp = function(t) {
            return this.tween("text", "function" == typeof t ? Qn(Tn(this, "text", t)) : Kn(null == t ? "" : t + ""))
        }
          , Lp = function() {
            for (var t = this._name, n = this._id, e = ne(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
                    if (a = u[c]) {
                        var f = Sn(a, n);
                        pp(a, t, e, c, u, {
                            time: f.time + f.delay + f.duration,
                            delay: 0,
                            duration: f.duration,
                            ease: f.ease
                        })
                    }
            return new Jn(r,this._parents,t,e)
        }
          , zp = 0
          , Ip = vt.prototype;
        Jn.prototype = te.prototype = {
            constructor: Jn,
            select: Cp,
            selectAll: Ep,
            filter: Mp,
            merge: Ap,
            selection: Np,
            transition: Lp,
            call: Ip.call,
            nodes: Ip.nodes,
            node: Ip.node,
            size: Ip.size,
            empty: Ip.empty,
            each: Ip.each,
            on: Sp,
            attr: _p,
            attrTween: mp,
            style: Op,
            styleTween: Rp,
            text: Pp,
            remove: kp,
            tween: gp,
            delay: bp,
            duration: xp,
            ease: wp
        };
        var jp = 3
          , Up = function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }
            return n = +n,
            e.exponent = t,
            e
        }(jp)
          , Dp = function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }
            return n = +n,
            e.exponent = t,
            e
        }(jp)
          , $p = function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }
            return n = +n,
            e.exponent = t,
            e
        }(jp)
          , Bp = Math.PI
          , Fp = Bp / 2
          , qp = 4 / 11
          , Yp = 6 / 11
          , Hp = 8 / 11
          , Wp = .75
          , Vp = 9 / 11
          , Xp = 10 / 11
          , Gp = .9375
          , Zp = 21 / 22
          , Kp = 63 / 64
          , Qp = 1 / qp / qp
          , Jp = 1.70158
          , td = function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }
            return n = +n,
            e.overshoot = t,
            e
        }(Jp)
          , nd = function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }
            return n = +n,
            e.overshoot = t,
            e
        }(Jp)
          , ed = function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }
            return n = +n,
            e.overshoot = t,
            e
        }(Jp)
          , rd = 2 * Math.PI
          , id = 1
          , od = .3
          , ad = function t(n, e) {
            function r(t) {
                return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= rd);
            return r.amplitude = function(n) {
                return t(n, e * rd)
            }
            ,
            r.period = function(e) {
                return t(n, e)
            }
            ,
            r
        }(id, od)
          , ud = function t(n, e) {
            function r(t) {
                return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= rd);
            return r.amplitude = function(n) {
                return t(n, e * rd)
            }
            ,
            r.period = function(e) {
                return t(n, e)
            }
            ,
            r
        }(id, od)
          , sd = function t(n, e) {
            function r(t) {
                return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
            }
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= rd);
            return r.amplitude = function(n) {
                return t(n, e * rd)
            }
            ,
            r.period = function(e) {
                return t(n, e)
            }
            ,
            r
        }(id, od)
          , cd = {
            time: null,
            delay: 0,
            duration: 250,
            ease: se
        }
          , fd = function(t) {
            var n, e;
            t instanceof Jn ? (n = t._id,
            t = t._name) : (n = ne(),
            (e = cd).time = dn(),
            t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
                    (a = u[c]) && pp(a, t, n, c, u, e || xe(a, n));
            return new Jn(r,this._parents,t,n)
        };
        vt.prototype.interrupt = vp,
        vt.prototype.transition = fd;
        var ld = [null]
          , hd = function(t, n) {
            var e, r, i = t.__transition;
            if (i) {
                n = null == n ? null : n + "";
                for (r in i)
                    if ((e = i[r]).state > up && e.name === n)
                        return new Jn([[t]],ld,n,+r)
            }
            return null
        }
          , pd = function(t) {
            return function() {
                return t
            }
        }
          , dd = function(t, n, e) {
            this.target = t,
            this.type = n,
            this.selection = e
        }
          , vd = function() {
            t.event.preventDefault(),
            t.event.stopImmediatePropagation()
        }
          , gd = {
            name: "drag"
        }
          , yd = {
            name: "space"
        }
          , _d = {
            name: "handle"
        }
          , md = {
            name: "center"
        }
          , bd = {
            name: "x",
            handles: ["e", "w"].map(Me),
            input: function(t, n) {
                return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
            },
            output: function(t) {
                return t && [t[0][0], t[1][0]]
            }
        }
          , xd = {
            name: "y",
            handles: ["n", "s"].map(Me),
            input: function(t, n) {
                return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
            },
            output: function(t) {
                return t && [t[0][1], t[1][1]]
            }
        }
          , wd = {
            name: "xy",
            handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Me),
            input: function(t) {
                return t
            },
            output: function(t) {
                return t
            }
        }
          , Md = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }
          , Ad = {
            e: "w",
            w: "e",
            nw: "ne",
            ne: "nw",
            se: "sw",
            sw: "se"
        }
          , Sd = {
            n: "s",
            s: "n",
            nw: "sw",
            ne: "se",
            se: "ne",
            sw: "nw"
        }
          , kd = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1
        }
          , Cd = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1
        }
          , Ed = function() {
            return Oe(wd)
        }
          , Td = Math.cos
          , Nd = Math.sin
          , Od = Math.PI
          , Rd = Od / 2
          , Pd = 2 * Od
          , Ld = Math.max
          , zd = function() {
            function t(t) {
                var o, a, u, s, c, f, l = t.length, h = [], p = Kc(l), d = [], v = [], g = v.groups = new Array(l), y = new Array(l * l);
                for (o = 0,
                c = -1; ++c < l; ) {
                    for (a = 0,
                    f = -1; ++f < l; )
                        a += t[c][f];
                    h.push(a),
                    d.push(Kc(l)),
                    o += a
                }
                for (e && p.sort(function(t, n) {
                    return e(h[t], h[n])
                }),
                r && d.forEach(function(n, e) {
                    n.sort(function(n, i) {
                        return r(t[e][n], t[e][i])
                    })
                }),
                o = Ld(0, Pd - n * l) / o,
                s = o ? n : Pd / l,
                a = 0,
                c = -1; ++c < l; ) {
                    for (u = a,
                    f = -1; ++f < l; ) {
                        var _ = p[c]
                          , m = d[_][f]
                          , b = t[_][m]
                          , x = a
                          , w = a += b * o;
                        y[m * l + _] = {
                            index: _,
                            subindex: m,
                            startAngle: x,
                            endAngle: w,
                            value: b
                        }
                    }
                    g[_] = {
                        index: _,
                        startAngle: u,
                        endAngle: a,
                        value: h[_]
                    },
                    a += s
                }
                for (c = -1; ++c < l; )
                    for (f = c - 1; ++f < l; ) {
                        var M = y[f * l + c]
                          , A = y[c * l + f];
                        (M.value || A.value) && v.push(M.value < A.value ? {
                            source: A,
                            target: M
                        } : {
                            source: M,
                            target: A
                        })
                    }
                return i ? v.sort(i) : v
            }
            var n = 0
              , e = null
              , r = null
              , i = null;
            return t.padAngle = function(e) {
                return arguments.length ? (n = Ld(0, e),
                t) : n
            }
            ,
            t.sortGroups = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.sortSubgroups = function(n) {
                return arguments.length ? (r = n,
                t) : r
            }
            ,
            t.sortChords = function(n) {
                return arguments.length ? (null == n ? i = null : (i = Re(n))._ = n,
                t) : i && i._
            }
            ,
            t
        }
          , Id = Array.prototype.slice
          , jd = function(t) {
            return function() {
                return t
            }
        }
          , Ud = Math.PI
          , Dd = 2 * Ud
          , $d = 1e-6
          , Bd = Dd - $d;
        Pe.prototype = Le.prototype = {
            constructor: Pe,
            moveTo: function(t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0,
                this._y1 = this._y0,
                this._ += "Z")
            },
            lineTo: function(t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            },
            quadraticCurveTo: function(t, n, e, r) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
            },
            arcTo: function(t, n, e, r, i) {
                t = +t,
                n = +n,
                e = +e,
                r = +r,
                i = +i;
                var o = this._x1
                  , a = this._y1
                  , u = e - t
                  , s = r - n
                  , c = o - t
                  , f = a - n
                  , l = c * c + f * f;
                if (i < 0)
                    throw new Error("negative radius: " + i);
                if (null === this._x1)
                    this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (l > $d)
                    if (Math.abs(f * u - s * c) > $d && i) {
                        var h = e - o
                          , p = r - a
                          , d = u * u + s * s
                          , v = h * h + p * p
                          , g = Math.sqrt(d)
                          , y = Math.sqrt(l)
                          , _ = i * Math.tan((Ud - Math.acos((d + l - v) / (2 * g * y))) / 2)
                          , m = _ / y
                          , b = _ / g;
                        Math.abs(m - 1) > $d && (this._ += "L" + (t + m * c) + "," + (n + m * f)),
                        this._ += "A" + i + "," + i + ",0,0," + +(f * h > c * p) + "," + (this._x1 = t + b * u) + "," + (this._y1 = n + b * s)
                    } else
                        this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else
                    ;
            },
            arc: function(t, n, e, r, i, o) {
                t = +t,
                n = +n,
                e = +e;
                var a = e * Math.cos(r)
                  , u = e * Math.sin(r)
                  , s = t + a
                  , c = n + u
                  , f = 1 ^ o
                  , l = o ? r - i : i - r;
                if (e < 0)
                    throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + s + "," + c : (Math.abs(this._x1 - s) > $d || Math.abs(this._y1 - c) > $d) && (this._ += "L" + s + "," + c),
                e && (l < 0 && (l = l % Dd + Dd),
                l > Bd ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = s) + "," + (this._y1 = c) : l > $d && (this._ += "A" + e + "," + e + ",0," + +(l >= Ud) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
            },
            rect: function(t, n, e, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
            },
            toString: function() {
                return this._
            }
        };
        var Fd = function() {
            function t() {
                var t, u = Id.call(arguments), s = n.apply(this, u), c = e.apply(this, u), f = +r.apply(this, (u[0] = s,
                u)), l = i.apply(this, u) - Rd, h = o.apply(this, u) - Rd, p = f * Td(l), d = f * Nd(l), v = +r.apply(this, (u[0] = c,
                u)), g = i.apply(this, u) - Rd, y = o.apply(this, u) - Rd;
                if (a || (a = t = Le()),
                a.moveTo(p, d),
                a.arc(0, 0, f, l, h),
                l === g && h === y || (a.quadraticCurveTo(0, 0, v * Td(g), v * Nd(g)),
                a.arc(0, 0, v, g, y)),
                a.quadraticCurveTo(0, 0, p, d),
                a.closePath(),
                t)
                    return a = null,
                    t + "" || null
            }
            var n = ze
              , e = Ie
              , r = je
              , i = Ue
              , o = De
              , a = null;
            return t.radius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : jd(+n),
                t) : r
            }
            ,
            t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : jd(+n),
                t) : i
            }
            ,
            t.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : jd(+n),
                t) : o
            }
            ,
            t.source = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.target = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.context = function(n) {
                return arguments.length ? (a = null == n ? null : n,
                t) : a
            }
            ,
            t
        }
          , qd = "$";
        $e.prototype = Be.prototype = {
            constructor: $e,
            has: function(t) {
                return qd + t in this
            },
            get: function(t) {
                return this[qd + t]
            },
            set: function(t, n) {
                return this[qd + t] = n,
                this
            },
            remove: function(t) {
                var n = qd + t;
                return n in this && delete this[n]
            },
            clear: function() {
                for (var t in this)
                    t[0] === qd && delete this[t]
            },
            keys: function() {
                var t = [];
                for (var n in this)
                    n[0] === qd && t.push(n.slice(1));
                return t
            },
            values: function() {
                var t = [];
                for (var n in this)
                    n[0] === qd && t.push(this[n]);
                return t
            },
            entries: function() {
                var t = [];
                for (var n in this)
                    n[0] === qd && t.push({
                        key: n.slice(1),
                        value: this[n]
                    });
                return t
            },
            size: function() {
                var t = 0;
                for (var n in this)
                    n[0] === qd && ++t;
                return t
            },
            empty: function() {
                for (var t in this)
                    if (t[0] === qd)
                        return !1;
                return !0
            },
            each: function(t) {
                for (var n in this)
                    n[0] === qd && t(this[n], n.slice(1), this)
            }
        };
        var Yd = function() {
            function t(n, i, a, u) {
                if (i >= o.length)
                    return null != r ? r(n) : null != e ? n.sort(e) : n;
                for (var s, c, f, l = -1, h = n.length, p = o[i++], d = Be(), v = a(); ++l < h; )
                    (f = d.get(s = p(c = n[l]) + "")) ? f.push(c) : d.set(s, [c]);
                return d.each(function(n, e) {
                    u(v, e, t(n, i, a, u))
                }),
                v
            }
            function n(t, e) {
                if (++e > o.length)
                    return t;
                var i, u = a[e - 1];
                return null != r && e >= o.length ? i = t.entries() : (i = [],
                t.each(function(t, r) {
                    i.push({
                        key: r,
                        values: n(t, e)
                    })
                })),
                null != u ? i.sort(function(t, n) {
                    return u(t.key, n.key)
                }) : i
            }
            var e, r, i, o = [], a = [];
            return i = {
                object: function(n) {
                    return t(n, 0, Fe, qe)
                },
                map: function(n) {
                    return t(n, 0, Ye, He)
                },
                entries: function(e) {
                    return n(t(e, 0, Ye, He), 0)
                },
                key: function(t) {
                    return o.push(t),
                    i
                },
                sortKeys: function(t) {
                    return a[o.length - 1] = t,
                    i
                },
                sortValues: function(t) {
                    return e = t,
                    i
                },
                rollup: function(t) {
                    return r = t,
                    i
                }
            }
        }
          , Hd = Be.prototype;
        We.prototype = Ve.prototype = {
            constructor: We,
            has: Hd.has,
            add: function(t) {
                return t += "",
                this[qd + t] = t,
                this
            },
            remove: Hd.remove,
            clear: Hd.clear,
            values: Hd.keys,
            size: Hd.size,
            empty: Hd.empty,
            each: Hd.each
        };
        var Wd = function(t) {
            var n = [];
            for (var e in t)
                n.push(e);
            return n
        }
          , Vd = function(t) {
            var n = [];
            for (var e in t)
                n.push(t[e]);
            return n
        }
          , Xd = function(t) {
            var n = [];
            for (var e in t)
                n.push({
                    key: e,
                    value: t[e]
                });
            return n
        }
          , Gd = function(t) {
            function n(t, n) {
                var r, i, o = e(t, function(t, e) {
                    if (r)
                        return r(t, e - 1);
                    i = t,
                    r = n ? Ge(t, n) : Xe(t)
                });
                return o.columns = i,
                o
            }
            function e(t, n) {
                function e() {
                    if (f >= c)
                        return a;
                    if (i)
                        return i = !1,
                        o;
                    var n, e = f;
                    if (34 === t.charCodeAt(e)) {
                        for (var r = e; r++ < c; )
                            if (34 === t.charCodeAt(r)) {
                                if (34 !== t.charCodeAt(r + 1))
                                    break;
                                ++r
                            }
                        return f = r + 2,
                        n = t.charCodeAt(r + 1),
                        13 === n ? (i = !0,
                        10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0),
                        t.slice(e + 1, r).replace(/""/g, '"')
                    }
                    for (; f < c; ) {
                        var u = 1;
                        if (10 === (n = t.charCodeAt(f++)))
                            i = !0;
                        else if (13 === n)
                            i = !0,
                            10 === t.charCodeAt(f) && (++f,
                            ++u);
                        else if (n !== s)
                            continue;
                        return t.slice(e, f - u)
                    }
                    return t.slice(e)
                }
                for (var r, i, o = {}, a = {}, u = [], c = t.length, f = 0, l = 0; (r = e()) !== a; ) {
                    for (var h = []; r !== o && r !== a; )
                        h.push(r),
                        r = e();
                    n && null == (h = n(h, l++)) || u.push(h)
                }
                return u
            }
            function r(n, e) {
                return null == e && (e = Ze(n)),
                [e.map(a).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return a(n[t])
                    }).join(t)
                })).join("\n")
            }
            function i(t) {
                return t.map(o).join("\n")
            }
            function o(n) {
                return n.map(a).join(t)
            }
            function a(t) {
                return null == t ? "" : u.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t
            }
            var u = new RegExp('["' + t + "\n\r]")
              , s = t.charCodeAt(0);
            return {
                parse: n,
                parseRows: e,
                format: r,
                formatRows: i
            }
        }
          , Zd = Gd(",")
          , Kd = Zd.parse
          , Qd = Zd.parseRows
          , Jd = Zd.format
          , tv = Zd.formatRows
          , nv = Gd("\t")
          , ev = nv.parse
          , rv = nv.parseRows
          , iv = nv.format
          , ov = nv.formatRows
          , av = function(t, n) {
            function e() {
                var e, i, o = r.length, a = 0, u = 0;
                for (e = 0; e < o; ++e)
                    i = r[e],
                    a += i.x,
                    u += i.y;
                for (a = a / o - t,
                u = u / o - n,
                e = 0; e < o; ++e)
                    i = r[e],
                    i.x -= a,
                    i.y -= u
            }
            var r;
            return null == t && (t = 0),
            null == n && (n = 0),
            e.initialize = function(t) {
                r = t
            }
            ,
            e.x = function(n) {
                return arguments.length ? (t = +n,
                e) : t
            }
            ,
            e.y = function(t) {
                return arguments.length ? (n = +t,
                e) : n
            }
            ,
            e
        }
          , uv = function(t) {
            return function() {
                return t
            }
        }
          , sv = function() {
            return 1e-6 * (Math.random() - .5)
        }
          , cv = function(t) {
            var n = +this._x.call(null, t)
              , e = +this._y.call(null, t);
            return Ke(this.cover(n, e), n, e, t)
        }
          , fv = function(t, n) {
            if (isNaN(t = +t) || isNaN(n = +n))
                return this;
            var e = this._x0
              , r = this._y0
              , i = this._x1
              , o = this._y1;
            if (isNaN(e))
                i = (e = Math.floor(t)) + 1,
                o = (r = Math.floor(n)) + 1;
            else {
                if (!(e > t || t > i || r > n || n > o))
                    return this;
                var a, u, s = i - e, c = this._root;
                switch (u = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                case 0:
                    do {
                        a = new Array(4),
                        a[u] = c,
                        c = a
                    } while (s *= 2,
                    i = e + s,
                    o = r + s,
                    t > i || n > o);break;
                case 1:
                    do {
                        a = new Array(4),
                        a[u] = c,
                        c = a
                    } while (s *= 2,
                    e = i - s,
                    o = r + s,
                    e > t || n > o);break;
                case 2:
                    do {
                        a = new Array(4),
                        a[u] = c,
                        c = a
                    } while (s *= 2,
                    i = e + s,
                    r = o - s,
                    t > i || r > n);break;
                case 3:
                    do {
                        a = new Array(4),
                        a[u] = c,
                        c = a
                    } while (s *= 2,
                    e = i - s,
                    r = o - s,
                    e > t || r > n)
                }
                this._root && this._root.length && (this._root = c)
            }
            return this._x0 = e,
            this._y0 = r,
            this._x1 = i,
            this._y1 = o,
            this
        }
          , lv = function() {
            var t = [];
            return this.visit(function(n) {
                if (!n.length)
                    do {
                        t.push(n.data)
                    } while (n = n.next)
            }),
            t
        }
          , hv = function(t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
        }
          , pv = function(t, n, e, r, i) {
            this.node = t,
            this.x0 = n,
            this.y0 = e,
            this.x1 = r,
            this.y1 = i
        }
          , dv = function(t, n, e) {
            var r, i, o, a, u, s, c, f = this._x0, l = this._y0, h = this._x1, p = this._y1, d = [], v = this._root;
            for (v && d.push(new pv(v,f,l,h,p)),
            null == e ? e = 1 / 0 : (f = t - e,
            l = n - e,
            h = t + e,
            p = n + e,
            e *= e); s = d.pop(); )
                if (!(!(v = s.node) || (i = s.x0) > h || (o = s.y0) > p || (a = s.x1) < f || (u = s.y1) < l))
                    if (v.length) {
                        var g = (i + a) / 2
                          , y = (o + u) / 2;
                        d.push(new pv(v[3],g,y,a,u), new pv(v[2],i,y,g,u), new pv(v[1],g,o,a,y), new pv(v[0],i,o,g,y)),
                        (c = (n >= y) << 1 | t >= g) && (s = d[d.length - 1],
                        d[d.length - 1] = d[d.length - 1 - c],
                        d[d.length - 1 - c] = s)
                    } else {
                        var _ = t - +this._x.call(null, v.data)
                          , m = n - +this._y.call(null, v.data)
                          , b = _ * _ + m * m;
                        if (b < e) {
                            var x = Math.sqrt(e = b);
                            f = t - x,
                            l = n - x,
                            h = t + x,
                            p = n + x,
                            r = v.data
                        }
                    }
            return r
        }
          , vv = function(t) {
            if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t)))
                return this;
            var n, e, r, i, o, a, u, s, c, f, l, h, p = this._root, d = this._x0, v = this._y0, g = this._x1, y = this._y1;
            if (!p)
                return this;
            if (p.length)
                for (; ; ) {
                    if ((c = o >= (u = (d + g) / 2)) ? d = u : g = u,
                    (f = a >= (s = (v + y) / 2)) ? v = s : y = s,
                    n = p,
                    !(p = p[l = f << 1 | c]))
                        return this;
                    if (!p.length)
                        break;
                    (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n,
                    h = l)
                }
            for (; p.data !== t; )
                if (r = p,
                !(p = p.next))
                    return this;
            return (i = p.next) && delete p.next,
            r ? (i ? r.next = i : delete r.next,
            this) : n ? (i ? n[l] = i : delete n[l],
            (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p),
            this) : (this._root = i,
            this)
        }
          , gv = function() {
            return this._root
        }
          , yv = function() {
            var t = 0;
            return this.visit(function(n) {
                if (!n.length)
                    do {
                        ++t
                    } while (n = n.next)
            }),
            t
        }
          , _v = function(t) {
            var n, e, r, i, o, a, u = [], s = this._root;
            for (s && u.push(new pv(s,this._x0,this._y0,this._x1,this._y1)); n = u.pop(); )
                if (!t(s = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && s.length) {
                    var c = (r + o) / 2
                      , f = (i + a) / 2;
                    (e = s[3]) && u.push(new pv(e,c,f,o,a)),
                    (e = s[2]) && u.push(new pv(e,r,f,c,a)),
                    (e = s[1]) && u.push(new pv(e,c,i,o,f)),
                    (e = s[0]) && u.push(new pv(e,r,i,c,f))
                }
            return this
        }
          , mv = function(t) {
            var n, e = [], r = [];
            for (this._root && e.push(new pv(this._root,this._x0,this._y0,this._x1,this._y1)); n = e.pop(); ) {
                var i = n.node;
                if (i.length) {
                    var o, a = n.x0, u = n.y0, s = n.x1, c = n.y1, f = (a + s) / 2, l = (u + c) / 2;
                    (o = i[0]) && e.push(new pv(o,a,u,f,l)),
                    (o = i[1]) && e.push(new pv(o,f,u,s,l)),
                    (o = i[2]) && e.push(new pv(o,a,l,f,c)),
                    (o = i[3]) && e.push(new pv(o,f,l,s,c))
                }
                r.push(n)
            }
            for (; n = r.pop(); )
                t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this
        }
          , bv = function(t) {
            return arguments.length ? (this._x = t,
            this) : this._x
        }
          , xv = function(t) {
            return arguments.length ? (this._y = t,
            this) : this._y
        }
          , wv = er.prototype = rr.prototype;
        wv.copy = function() {
            var t, n, e = new rr(this._x,this._y,this._x0,this._y0,this._x1,this._y1), r = this._root;
            if (!r)
                return e;
            if (!r.length)
                return e._root = ir(r),
                e;
            for (t = [{
                source: r,
                target: e._root = new Array(4)
            }]; r = t.pop(); )
                for (var i = 0; i < 4; ++i)
                    (n = r.source[i]) && (n.length ? t.push({
                        source: n,
                        target: r.target[i] = new Array(4)
                    }) : r.target[i] = ir(n));
            return e
        }
        ,
        wv.add = cv,
        wv.addAll = Qe,
        wv.cover = fv,
        wv.data = lv,
        wv.extent = hv,
        wv.find = dv,
        wv.remove = vv,
        wv.removeAll = Je,
        wv.root = gv,
        wv.size = yv,
        wv.visit = _v,
        wv.visitAfter = mv,
        wv.x = bv,
        wv.y = xv;
        var Mv, Av = function(t) {
            function n() {
                function t(t, n, e, r, i) {
                    var o = t.data
                      , u = t.r
                      , p = l + u;
                    {
                        if (!o)
                            return n > c + p || r < c - p || e > f + p || i < f - p;
                        if (o.index > s.index) {
                            var d = c - o.x - o.vx
                              , v = f - o.y - o.vy
                              , g = d * d + v * v;
                            g < p * p && (0 === d && (d = sv(),
                            g += d * d),
                            0 === v && (v = sv(),
                            g += v * v),
                            g = (p - (g = Math.sqrt(g))) / g * a,
                            s.vx += (d *= g) * (p = (u *= u) / (h + u)),
                            s.vy += (v *= g) * p,
                            o.vx -= d * (p = 1 - p),
                            o.vy -= v * p)
                        }
                    }
                }
                for (var n, r, s, c, f, l, h, p = i.length, d = 0; d < u; ++d)
                    for (r = er(i, or, ar).visitAfter(e),
                    n = 0; n < p; ++n)
                        s = i[n],
                        l = o[s.index],
                        h = l * l,
                        c = s.x + s.vx,
                        f = s.y + s.vy,
                        r.visit(t)
            }
            function e(t) {
                if (t.data)
                    return t.r = o[t.data.index];
                for (var n = t.r = 0; n < 4; ++n)
                    t[n] && t[n].r > t.r && (t.r = t[n].r)
            }
            function r() {
                if (i) {
                    var n, e, r = i.length;
                    for (o = new Array(r),
                    n = 0; n < r; ++n)
                        e = i[n],
                        o[e.index] = +t(e, n, i)
                }
            }
            var i, o, a = 1, u = 1;
            return "function" != typeof t && (t = uv(null == t ? 1 : +t)),
            n.initialize = function(t) {
                i = t,
                r()
            }
            ,
            n.iterations = function(t) {
                return arguments.length ? (u = +t,
                n) : u
            }
            ,
            n.strength = function(t) {
                return arguments.length ? (a = +t,
                n) : a
            }
            ,
            n.radius = function(e) {
                return arguments.length ? (t = "function" == typeof e ? e : uv(+e),
                r(),
                n) : t
            }
            ,
            n
        }, Sv = function(t) {
            function n(t) {
                return 1 / Math.min(c[t.source.index], c[t.target.index])
            }
            function e(n) {
                for (var e = 0, r = t.length; e < d; ++e)
                    for (var i, o, s, c, l, h, p, v = 0; v < r; ++v)
                        i = t[v],
                        o = i.source,
                        s = i.target,
                        c = s.x + s.vx - o.x - o.vx || sv(),
                        l = s.y + s.vy - o.y - o.vy || sv(),
                        h = Math.sqrt(c * c + l * l),
                        h = (h - u[v]) / h * n * a[v],
                        c *= h,
                        l *= h,
                        s.vx -= c * (p = f[v]),
                        s.vy -= l * p,
                        o.vx += c * (p = 1 - p),
                        o.vy += l * p
            }
            function r() {
                if (s) {
                    var n, e, r = s.length, h = t.length, p = Be(s, l);
                    for (n = 0,
                    c = new Array(r); n < h; ++n)
                        e = t[n],
                        e.index = n,
                        "object" != typeof e.source && (e.source = sr(p, e.source)),
                        "object" != typeof e.target && (e.target = sr(p, e.target)),
                        c[e.source.index] = (c[e.source.index] || 0) + 1,
                        c[e.target.index] = (c[e.target.index] || 0) + 1;
                    for (n = 0,
                    f = new Array(h); n < h; ++n)
                        e = t[n],
                        f[n] = c[e.source.index] / (c[e.source.index] + c[e.target.index]);
                    a = new Array(h),
                    i(),
                    u = new Array(h),
                    o()
                }
            }
            function i() {
                if (s)
                    for (var n = 0, e = t.length; n < e; ++n)
                        a[n] = +h(t[n], n, t)
            }
            function o() {
                if (s)
                    for (var n = 0, e = t.length; n < e; ++n)
                        u[n] = +p(t[n], n, t)
            }
            var a, u, s, c, f, l = ur, h = n, p = uv(30), d = 1;
            return null == t && (t = []),
            e.initialize = function(t) {
                s = t,
                r()
            }
            ,
            e.links = function(n) {
                return arguments.length ? (t = n,
                r(),
                e) : t
            }
            ,
            e.id = function(t) {
                return arguments.length ? (l = t,
                e) : l
            }
            ,
            e.iterations = function(t) {
                return arguments.length ? (d = +t,
                e) : d
            }
            ,
            e.strength = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : uv(+t),
                i(),
                e) : h
            }
            ,
            e.distance = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : uv(+t),
                o(),
                e) : p
            }
            ,
            e
        }, kv = 10, Cv = Math.PI * (3 - Math.sqrt(5)), Ev = function(t) {
            function n() {
                e(),
                p.call("tick", o),
                a < u && (h.stop(),
                p.call("end", o))
            }
            function e() {
                var n, e, r = t.length;
                for (a += (c - a) * s,
                l.each(function(t) {
                    t(a)
                }),
                n = 0; n < r; ++n)
                    e = t[n],
                    null == e.fx ? e.x += e.vx *= f : (e.x = e.fx,
                    e.vx = 0),
                    null == e.fy ? e.y += e.vy *= f : (e.y = e.fy,
                    e.vy = 0)
            }
            function r() {
                for (var n, e = 0, r = t.length; e < r; ++e) {
                    if (n = t[e],
                    n.index = e,
                    isNaN(n.x) || isNaN(n.y)) {
                        var i = kv * Math.sqrt(e)
                          , o = e * Cv;
                        n.x = i * Math.cos(o),
                        n.y = i * Math.sin(o)
                    }
                    (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                }
            }
            function i(n) {
                return n.initialize && n.initialize(t),
                n
            }
            var o, a = 1, u = .001, s = 1 - Math.pow(u, 1 / 300), c = 0, f = .6, l = Be(), h = yn(n), p = d("tick", "end");
            return null == t && (t = []),
            r(),
            o = {
                tick: e,
                restart: function() {
                    return h.restart(n),
                    o
                },
                stop: function() {
                    return h.stop(),
                    o
                },
                nodes: function(n) {
                    return arguments.length ? (t = n,
                    r(),
                    l.each(i),
                    o) : t
                },
                alpha: function(t) {
                    return arguments.length ? (a = +t,
                    o) : a
                },
                alphaMin: function(t) {
                    return arguments.length ? (u = +t,
                    o) : u
                },
                alphaDecay: function(t) {
                    return arguments.length ? (s = +t,
                    o) : +s
                },
                alphaTarget: function(t) {
                    return arguments.length ? (c = +t,
                    o) : c
                },
                velocityDecay: function(t) {
                    return arguments.length ? (f = 1 - t,
                    o) : 1 - f
                },
                force: function(t, n) {
                    return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)),
                    o) : l.get(t)
                },
                find: function(n, e, r) {
                    var i, o, a, u, s, c = 0, f = t.length;
                    for (null == r ? r = 1 / 0 : r *= r,
                    c = 0; c < f; ++c)
                        u = t[c],
                        i = n - u.x,
                        o = e - u.y,
                        (a = i * i + o * o) < r && (s = u,
                        r = a);
                    return s
                },
                on: function(t, n) {
                    return arguments.length > 1 ? (p.on(t, n),
                    o) : p.on(t)
                }
            }
        }, Tv = function() {
            function t(t) {
                var n, u = i.length, s = er(i, cr, fr).visitAfter(e);
                for (a = t,
                n = 0; n < u; ++n)
                    o = i[n],
                    s.visit(r)
            }
            function n() {
                if (i) {
                    var t, n, e = i.length;
                    for (u = new Array(e),
                    t = 0; t < e; ++t)
                        n = i[t],
                        u[n.index] = +s(n, t, i)
                }
            }
            function e(t) {
                var n, e, r, i, o, a = 0;
                if (t.length) {
                    for (r = i = o = 0; o < 4; ++o)
                        (n = t[o]) && (e = n.value) && (a += e,
                        r += e * n.x,
                        i += e * n.y);
                    t.x = r / a,
                    t.y = i / a
                } else {
                    n = t,
                    n.x = n.data.x,
                    n.y = n.data.y;
                    do {
                        a += u[n.data.index]
                    } while (n = n.next)
                }
                t.value = a
            }
            function r(t, n, e, r) {
                if (!t.value)
                    return !0;
                var i = t.x - o.x
                  , s = t.y - o.y
                  , h = r - n
                  , p = i * i + s * s;
                if (h * h / l < p)
                    return p < f && (0 === i && (i = sv(),
                    p += i * i),
                    0 === s && (s = sv(),
                    p += s * s),
                    p < c && (p = Math.sqrt(c * p)),
                    o.vx += i * t.value * a / p,
                    o.vy += s * t.value * a / p),
                    !0;
                if (!(t.length || p >= f)) {
                    (t.data !== o || t.next) && (0 === i && (i = sv(),
                    p += i * i),
                    0 === s && (s = sv(),
                    p += s * s),
                    p < c && (p = Math.sqrt(c * p)));
                    do {
                        t.data !== o && (h = u[t.data.index] * a / p,
                        o.vx += i * h,
                        o.vy += s * h)
                    } while (t = t.next)
                }
            }
            var i, o, a, u, s = uv(-30), c = 1, f = 1 / 0, l = .81;
            return t.initialize = function(t) {
                i = t,
                n()
            }
            ,
            t.strength = function(e) {
                return arguments.length ? (s = "function" == typeof e ? e : uv(+e),
                n(),
                t) : s
            }
            ,
            t.distanceMin = function(n) {
                return arguments.length ? (c = n * n,
                t) : Math.sqrt(c)
            }
            ,
            t.distanceMax = function(n) {
                return arguments.length ? (f = n * n,
                t) : Math.sqrt(f)
            }
            ,
            t.theta = function(n) {
                return arguments.length ? (l = n * n,
                t) : Math.sqrt(l)
            }
            ,
            t
        }, Nv = function(t) {
            function n(t) {
                for (var n, e = 0, a = r.length; e < a; ++e)
                    n = r[e],
                    n.vx += (o[e] - n.x) * i[e] * t
            }
            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e),
                    o = new Array(e),
                    n = 0; n < e; ++n)
                        i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r)
                }
            }
            var r, i, o, a = uv(.1);
            return "function" != typeof t && (t = uv(null == t ? 0 : +t)),
            n.initialize = function(t) {
                r = t,
                e()
            }
            ,
            n.strength = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : uv(+t),
                e(),
                n) : a
            }
            ,
            n.x = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r : uv(+r),
                e(),
                n) : t
            }
            ,
            n
        }, Ov = function(t) {
            function n(t) {
                for (var n, e = 0, a = r.length; e < a; ++e)
                    n = r[e],
                    n.vy += (o[e] - n.y) * i[e] * t
            }
            function e() {
                if (r) {
                    var n, e = r.length;
                    for (i = new Array(e),
                    o = new Array(e),
                    n = 0; n < e; ++n)
                        i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r)
                }
            }
            var r, i, o, a = uv(.1);
            return "function" != typeof t && (t = uv(null == t ? 0 : +t)),
            n.initialize = function(t) {
                r = t,
                e()
            }
            ,
            n.strength = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : uv(+t),
                e(),
                n) : a
            }
            ,
            n.y = function(r) {
                return arguments.length ? (t = "function" == typeof r ? r : uv(+r),
                e(),
                n) : t
            }
            ,
            n
        }, Rv = function(t, n) {
            if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var e, r = t.slice(0, e);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
        }, Pv = function(t) {
            return t = Rv(Math.abs(t)),
            t ? t[1] : NaN
        }, Lv = function(t, n) {
            return function(e, r) {
                for (var i = e.length, o = [], a = 0, u = t[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)),
                o.push(e.substring(i -= u, i + u)),
                !((s += u + 1) > r)); )
                    u = t[a = (a + 1) % t.length];
                return o.reverse().join(n)
            }
        }, zv = function(t) {
            return function(n) {
                return n.replace(/[0-9]/g, function(n) {
                    return t[+n]
                })
            }
        }, Iv = function(t, n) {
            t = t.toPrecision(n);
            t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i)
                switch (t[i]) {
                case ".":
                    o = e = i;
                    break;
                case "0":
                    0 === o && (o = i),
                    e = i;
                    break;
                case "e":
                    break t;
                default:
                    o > 0 && (o = 0)
                }
            return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
        }, jv = function(t, n) {
            var e = Rv(t, n);
            if (!e)
                return t + "";
            var r = e[0]
              , i = e[1]
              , o = i - (Mv = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1
              , a = r.length;
            return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Rv(t, Math.max(0, n + o - 1))[0]
        }, Uv = function(t, n) {
            var e = Rv(t, n);
            if (!e)
                return t + "";
            var r = e[0]
              , i = e[1];
            return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
        }, Dv = {
            "": Iv,
            "%": function(t, n) {
                return (100 * t).toFixed(n)
            },
            b: function(t) {
                return Math.round(t).toString(2)
            },
            c: function(t) {
                return t + ""
            },
            d: function(t) {
                return Math.round(t).toString(10)
            },
            e: function(t, n) {
                return t.toExponential(n)
            },
            f: function(t, n) {
                return t.toFixed(n)
            },
            g: function(t, n) {
                return t.toPrecision(n)
            },
            o: function(t) {
                return Math.round(t).toString(8)
            },
            p: function(t, n) {
                return Uv(100 * t, n)
            },
            r: Uv,
            s: jv,
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        }, $v = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        lr.prototype = hr.prototype,
        hr.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        }
        ;
        var Bv, Fv = function(t) {
            return t
        }, qv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Yv = function(t) {
            function n(t) {
                function n(t) {
                    var n, i, c, m = v, b = g;
                    if ("c" === d)
                        b = y(t) + b,
                        t = "";
                    else {
                        t = +t;
                        var x = t < 0;
                        if (t = y(Math.abs(t), p),
                        x && 0 == +t && (x = !1),
                        m = (x ? "(" === s ? s : "-" : "-" === s || "(" === s ? "" : s) + m,
                        b = b + ("s" === d ? qv[8 + Mv / 3] : "") + (x && "(" === s ? ")" : ""),
                        _)
                            for (n = -1,
                            i = t.length; ++n < i; )
                                if (48 > (c = t.charCodeAt(n)) || c > 57) {
                                    b = (46 === c ? o + t.slice(n + 1) : t.slice(n)) + b,
                                    t = t.slice(0, n);
                                    break
                                }
                    }
                    h && !f && (t = r(t, 1 / 0));
                    var w = m.length + t.length + b.length
                      , M = w < l ? new Array(l - w + 1).join(e) : "";
                    switch (h && f && (t = r(M + t, M.length ? l - b.length : 1 / 0),
                    M = ""),
                    u) {
                    case "<":
                        t = m + t + b + M;
                        break;
                    case "=":
                        t = m + M + t + b;
                        break;
                    case "^":
                        t = M.slice(0, w = M.length >> 1) + m + t + b + M.slice(w);
                        break;
                    default:
                        t = M + m + t + b
                    }
                    return a(t)
                }
                t = lr(t);
                var e = t.fill
                  , u = t.align
                  , s = t.sign
                  , c = t.symbol
                  , f = t.zero
                  , l = t.width
                  , h = t.comma
                  , p = t.precision
                  , d = t.type
                  , v = "$" === c ? i[0] : "#" === c && /[boxX]/.test(d) ? "0" + d.toLowerCase() : ""
                  , g = "$" === c ? i[1] : /[%p]/.test(d) ? "%" : ""
                  , y = Dv[d]
                  , _ = !d || /[defgprs%]/.test(d);
                return p = null == p ? d ? 6 : 12 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)),
                n.toString = function() {
                    return t + ""
                }
                ,
                n
            }
            function e(t, e) {
                var r = n((t = lr(t),
                t.type = "f",
                t))
                  , i = 3 * Math.max(-8, Math.min(8, Math.floor(Pv(e) / 3)))
                  , o = Math.pow(10, -i)
                  , a = qv[8 + i / 3];
                return function(t) {
                    return r(o * t) + a
                }
            }
            var r = t.grouping && t.thousands ? Lv(t.grouping, t.thousands) : Fv
              , i = t.currency
              , o = t.decimal
              , a = t.numerals ? zv(t.numerals) : Fv;
            return {
                format: n,
                formatPrefix: e
            }
        };
        pr({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        var Hv = function(t) {
            return Math.max(0, -Pv(Math.abs(t)))
        }
          , Wv = function(t, n) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Pv(n) / 3))) - Pv(Math.abs(t)))
        }
          , Vv = function(t, n) {
            return t = Math.abs(t),
            n = Math.abs(n) - t,
            Math.max(0, Pv(n) - Pv(t)) + 1
        }
          , Xv = function() {
            return new dr
        };
        dr.prototype = {
            constructor: dr,
            reset: function() {
                this.s = this.t = 0
            },
            add: function(t) {
                vr(kg, t, this.t),
                vr(this, kg.s, this.s),
                this.s ? this.t += kg.t : this.s = kg.t
            },
            valueOf: function() {
                return this.s
            }
        };
        var Gv, Zv, Kv, Qv, Jv, tg, ng, eg, rg, ig, og, ag, ug, sg, cg, fg, lg, hg, pg, dg, vg, gg, yg, _g, mg, bg, xg, wg, Mg, Ag, Sg, kg = new dr, Cg = 1e-6, Eg = 1e-12, Tg = Math.PI, Ng = Tg / 2, Og = Tg / 4, Rg = 2 * Tg, Pg = 180 / Tg, Lg = Tg / 180, zg = Math.abs, Ig = Math.atan, jg = Math.atan2, Ug = Math.cos, Dg = Math.ceil, $g = Math.exp, Bg = Math.log, Fg = Math.pow, qg = Math.sin, Yg = Math.sign || function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }
        , Hg = Math.sqrt, Wg = Math.tan, Vg = {
            Feature: function(t, n) {
                br(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i; )
                    br(e[r].geometry, n)
            }
        }, Xg = {
            Sphere: function(t, n) {
                n.sphere()
            },
            Point: function(t, n) {
                t = t.coordinates,
                n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    t = e[r],
                    n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
                xr(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    xr(e[r], n, 0)
            },
            Polygon: function(t, n) {
                wr(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    wr(e[r], n)
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                    br(e[r], n)
            }
        }, Gg = function(t, n) {
            t && Vg.hasOwnProperty(t.type) ? Vg[t.type](t, n) : br(t, n)
        }, Zg = Xv(), Kg = Xv(), Qg = {
            point: mr,
            lineStart: mr,
            lineEnd: mr,
            polygonStart: function() {
                Zg.reset(),
                Qg.lineStart = Mr,
                Qg.lineEnd = Ar
            },
            polygonEnd: function() {
                var t = +Zg;
                Kg.add(t < 0 ? Rg + t : t),
                this.lineStart = this.lineEnd = this.point = mr
            },
            sphere: function() {
                Kg.add(Rg)
            }
        }, Jg = function(t) {
            return Kg.reset(),
            Gg(t, Qg),
            2 * Kg
        }, ty = Xv(), ny = {
            point: Lr,
            lineStart: Ir,
            lineEnd: jr,
            polygonStart: function() {
                ny.point = Ur,
                ny.lineStart = Dr,
                ny.lineEnd = $r,
                ty.reset(),
                Qg.polygonStart()
            },
            polygonEnd: function() {
                Qg.polygonEnd(),
                ny.point = Lr,
                ny.lineStart = Ir,
                ny.lineEnd = jr,
                Zg < 0 ? (tg = -(eg = 180),
                ng = -(rg = 90)) : ty > Cg ? rg = 90 : ty < -Cg && (ng = -90),
                cg[0] = tg,
                cg[1] = eg
            }
        }, ey = function(t) {
            var n, e, r, i, o, a, u;
            if (rg = eg = -(tg = ng = 1 / 0),
            sg = [],
            Gg(t, ny),
            e = sg.length) {
                for (sg.sort(Fr),
                n = 1,
                r = sg[0],
                o = [r]; n < e; ++n)
                    i = sg[n],
                    qr(r, i[0]) || qr(r, i[1]) ? (Br(r[0], i[1]) > Br(r[0], r[1]) && (r[1] = i[1]),
                    Br(i[0], r[1]) > Br(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                for (a = -(1 / 0),
                e = o.length - 1,
                n = 0,
                r = o[e]; n <= e; r = i,
                ++n)
                    i = o[n],
                    (u = Br(r[1], i[0])) > a && (a = u,
                    tg = i[0],
                    eg = r[1])
            }
            return sg = cg = null,
            tg === 1 / 0 || ng === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[tg, ng], [eg, rg]]
        }, ry = {
            sphere: mr,
            point: Yr,
            lineStart: Wr,
            lineEnd: Gr,
            polygonStart: function() {
                ry.lineStart = Zr,
                ry.lineEnd = Kr
            },
            polygonEnd: function() {
                ry.lineStart = Wr,
                ry.lineEnd = Gr
            }
        }, iy = function(t) {
            fg = lg = hg = pg = dg = vg = gg = yg = _g = mg = bg = 0,
            Gg(t, ry);
            var n = _g
              , e = mg
              , r = bg
              , i = n * n + e * e + r * r;
            return i < Eg && (n = vg,
            e = gg,
            r = yg,
            lg < Cg && (n = hg,
            e = pg,
            r = dg),
            (i = n * n + e * e + r * r) < Eg) ? [NaN, NaN] : [jg(e, n) * Pg, yr(r / Hg(i)) * Pg]
        }, oy = function(t) {
            return function() {
                return t
            }
        }, ay = function(t, n) {
            function e(e, r) {
                return e = t(e, r),
                n(e[0], e[1])
            }
            return t.invert && n.invert && (e.invert = function(e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1])
            }
            ),
            e
        };
        ti.invert = ti;
        var uy, sy, cy, fy, ly, hy, py, dy, vy, gy, yy, _y = function(t) {
            function n(n) {
                return n = t(n[0] * Lg, n[1] * Lg),
                n[0] *= Pg,
                n[1] *= Pg,
                n
            }
            return t = ni(t[0] * Lg, t[1] * Lg, t.length > 2 ? t[2] * Lg : 0),
            n.invert = function(n) {
                return n = t.invert(n[0] * Lg, n[1] * Lg),
                n[0] *= Pg,
                n[1] *= Pg,
                n
            }
            ,
            n
        }, my = function() {
            function t(t, n) {
                e.push(t = r(t, n)),
                t[0] *= Pg,
                t[1] *= Pg
            }
            function n() {
                var t = i.apply(this, arguments)
                  , n = o.apply(this, arguments) * Lg
                  , s = a.apply(this, arguments) * Lg;
                return e = [],
                r = ni(-t[0] * Lg, -t[1] * Lg, 0).invert,
                oi(u, n, s, 1),
                t = {
                    type: "Polygon",
                    coordinates: [e]
                },
                e = r = null,
                t
            }
            var e, r, i = oy([0, 0]), o = oy(90), a = oy(6), u = {
                point: t
            };
            return n.center = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : oy([+t[0], +t[1]]),
                n) : i
            }
            ,
            n.radius = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : oy(+t),
                n) : o
            }
            ,
            n.precision = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : oy(+t),
                n) : a
            }
            ,
            n
        }, by = function() {
            var t, n = [];
            return {
                point: function(n, e) {
                    t.push([n, e])
                },
                lineStart: function() {
                    n.push(t = [])
                },
                lineEnd: mr,
                rejoin: function() {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                },
                result: function() {
                    var e = n;
                    return n = [],
                    t = null,
                    e
                }
            }
        }, xy = function(t, n, e, r, i, o) {
            var a, u = t[0], s = t[1], c = n[0], f = n[1], l = 0, h = 1, p = c - u, d = f - s;
            if (a = e - u,
            p || !(a > 0)) {
                if (a /= p,
                p < 0) {
                    if (a < l)
                        return;
                    a < h && (h = a)
                } else if (p > 0) {
                    if (a > h)
                        return;
                    a > l && (l = a)
                }
                if (a = i - u,
                p || !(a < 0)) {
                    if (a /= p,
                    p < 0) {
                        if (a > h)
                            return;
                        a > l && (l = a)
                    } else if (p > 0) {
                        if (a < l)
                            return;
                        a < h && (h = a)
                    }
                    if (a = r - s,
                    d || !(a > 0)) {
                        if (a /= d,
                        d < 0) {
                            if (a < l)
                                return;
                            a < h && (h = a)
                        } else if (d > 0) {
                            if (a > h)
                                return;
                            a > l && (l = a)
                        }
                        if (a = o - s,
                        d || !(a < 0)) {
                            if (a /= d,
                            d < 0) {
                                if (a > h)
                                    return;
                                a > l && (l = a)
                            } else if (d > 0) {
                                if (a < l)
                                    return;
                                a < h && (h = a)
                            }
                            return l > 0 && (t[0] = u + l * p,
                            t[1] = s + l * d),
                            h < 1 && (n[0] = u + h * p,
                            n[1] = s + h * d),
                            !0
                        }
                    }
                }
            }
        }, wy = function(t, n) {
            return zg(t[0] - n[0]) < Cg && zg(t[1] - n[1]) < Cg
        }, My = function(t, n, e, r, i) {
            var o, a, u = [], s = [];
            if (t.forEach(function(t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e, r = t[0], a = t[n];
                    if (wy(r, a)) {
                        for (i.lineStart(),
                        o = 0; o < n; ++o)
                            i.point((r = t[o])[0], r[1]);
                        return void i.lineEnd()
                    }
                    u.push(e = new ui(r,t,null,!0)),
                    s.push(e.o = new ui(r,null,e,!1)),
                    u.push(e = new ui(a,t,null,!1)),
                    s.push(e.o = new ui(a,null,e,!0))
                }
            }),
            u.length) {
                for (s.sort(n),
                si(u),
                si(s),
                o = 0,
                a = s.length; o < a; ++o)
                    s[o].e = e = !e;
                for (var c, f, l = u[0]; ; ) {
                    for (var h = l, p = !0; h.v; )
                        if ((h = h.n) === l)
                            return;
                    c = h.z,
                    i.lineStart();
                    do {
                        if (h.v = h.o.v = !0,
                        h.e) {
                            if (p)
                                for (o = 0,
                                a = c.length; o < a; ++o)
                                    i.point((f = c[o])[0], f[1]);
                            else
                                r(h.x, h.n.x, 1, i);
                            h = h.n
                        } else {
                            if (p)
                                for (c = h.p.z,
                                o = c.length - 1; o >= 0; --o)
                                    i.point((f = c[o])[0], f[1]);
                            else
                                r(h.x, h.p.x, -1, i);
                            h = h.p
                        }
                        h = h.o,
                        c = h.z,
                        p = !p
                    } while (!h.v);i.lineEnd()
                }
            }
        }, Ay = 1e9, Sy = -Ay, ky = function() {
            var t, n, e, r = 0, i = 0, o = 960, a = 500;
            return e = {
                stream: function(e) {
                    return t && n === e ? t : t = ci(r, i, o, a)(n = e)
                },
                extent: function(u) {
                    return arguments.length ? (r = +u[0][0],
                    i = +u[0][1],
                    o = +u[1][0],
                    a = +u[1][1],
                    t = n = null,
                    e) : [[r, i], [o, a]]
                }
            }
        }, Cy = Xv(), Ey = function(t, n) {
            var e = n[0]
              , r = n[1]
              , i = [qg(e), -Ug(e), 0]
              , o = 0
              , a = 0;
            Cy.reset();
            for (var u = 0, s = t.length; u < s; ++u)
                if (f = (c = t[u]).length)
                    for (var c, f, l = c[f - 1], h = l[0], p = l[1] / 2 + Og, d = qg(p), v = Ug(p), g = 0; g < f; ++g,
                    h = _,
                    d = b,
                    v = x,
                    l = y) {
                        var y = c[g]
                          , _ = y[0]
                          , m = y[1] / 2 + Og
                          , b = qg(m)
                          , x = Ug(m)
                          , w = _ - h
                          , M = w >= 0 ? 1 : -1
                          , A = M * w
                          , S = A > Tg
                          , k = d * b;
                        if (Cy.add(jg(k * M * qg(A), v * x + k * Ug(A))),
                        o += S ? w + M * Rg : w,
                        S ^ h >= e ^ _ >= e) {
                            var C = Nr(Er(l), Er(y));
                            Pr(C);
                            var E = Nr(i, C);
                            Pr(E);
                            var T = (S ^ w >= 0 ? -1 : 1) * yr(E[2]);
                            (r > T || r === T && (C[0] || C[1])) && (a += S ^ w >= 0 ? 1 : -1)
                        }
                    }
            return (o < -Cg || o < Cg && Cy < -Cg) ^ 1 & a
        }, Ty = Xv(), Ny = {
            sphere: mr,
            point: mr,
            lineStart: fi,
            lineEnd: mr,
            polygonStart: mr,
            polygonEnd: mr
        }, Oy = function(t) {
            return Ty.reset(),
            Gg(t, Ny),
            +Ty
        }, Ry = [null, null], Py = {
            type: "LineString",
            coordinates: Ry
        }, Ly = function(t, n) {
            return Ry[0] = t,
            Ry[1] = n,
            Oy(Py)
        }, zy = {
            Feature: function(t, n) {
                return di(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i; )
                    if (di(e[r].geometry, n))
                        return !0;
                return !1
            }
        }, Iy = {
            Sphere: function() {
                return !0
            },
            Point: function(t, n) {
                return vi(t.coordinates, n)
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    if (vi(e[r], n))
                        return !0;
                return !1
            },
            LineString: function(t, n) {
                return gi(t.coordinates, n)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    if (gi(e[r], n))
                        return !0;
                return !1
            },
            Polygon: function(t, n) {
                return yi(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                    if (yi(e[r], n))
                        return !0;
                return !1
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                    if (di(e[r], n))
                        return !0;
                return !1
            }
        }, jy = function(t, n) {
            return (t && zy.hasOwnProperty(t.type) ? zy[t.type] : di)(t, n)
        }, Uy = function(t, n) {
            var e = t[0] * Lg
              , r = t[1] * Lg
              , i = n[0] * Lg
              , o = n[1] * Lg
              , a = Ug(r)
              , u = qg(r)
              , s = Ug(o)
              , c = qg(o)
              , f = a * Ug(e)
              , l = a * qg(e)
              , h = s * Ug(i)
              , p = s * qg(i)
              , d = 2 * yr(Hg(_r(o - r) + a * s * _r(i - e)))
              , v = qg(d)
              , g = d ? function(t) {
                var n = qg(t *= d) / v
                  , e = qg(d - t) / v
                  , r = e * f + n * h
                  , i = e * l + n * p
                  , o = e * u + n * c;
                return [jg(i, r) * Pg, jg(o, Hg(r * r + i * i)) * Pg]
            }
            : function() {
                return [e * Pg, r * Pg]
            }
            ;
            return g.distance = d,
            g
        }, Dy = function(t) {
            return t
        }, $y = Xv(), By = Xv(), Fy = {
            point: mr,
            lineStart: mr,
            lineEnd: mr,
            polygonStart: function() {
                Fy.lineStart = Ai,
                Fy.lineEnd = Ci
            },
            polygonEnd: function() {
                Fy.lineStart = Fy.lineEnd = Fy.point = mr,
                $y.add(zg(By)),
                By.reset()
            },
            result: function() {
                var t = $y / 2;
                return $y.reset(),
                t
            }
        }, qy = 1 / 0, Yy = qy, Hy = -qy, Wy = Hy, Vy = {
            point: Ei,
            lineStart: mr,
            lineEnd: mr,
            polygonStart: mr,
            polygonEnd: mr,
            result: function() {
                var t = [[qy, Yy], [Hy, Wy]];
                return Hy = Wy = -(Yy = qy = 1 / 0),
                t
            }
        }, Xy = 0, Gy = 0, Zy = 0, Ky = 0, Qy = 0, Jy = 0, t_ = 0, n_ = 0, e_ = 0, r_ = {
            point: Ti,
            lineStart: Ni,
            lineEnd: Pi,
            polygonStart: function() {
                r_.lineStart = Li,
                r_.lineEnd = zi
            },
            polygonEnd: function() {
                r_.point = Ti,
                r_.lineStart = Ni,
                r_.lineEnd = Pi
            },
            result: function() {
                var t = e_ ? [t_ / e_, n_ / e_] : Jy ? [Ky / Jy, Qy / Jy] : Zy ? [Xy / Zy, Gy / Zy] : [NaN, NaN];
                return Xy = Gy = Zy = Ky = Qy = Jy = t_ = n_ = e_ = 0,
                t
            }
        };
        Ui.prototype = {
            _radius: 4.5,
            pointRadius: function(t) {
                return this._radius = t,
                this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(),
                this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                case 0:
                    this._context.moveTo(t, n),
                    this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n),
                    this._context.arc(t, n, this._radius, 0, Rg)
                }
            },
            result: mr
        };
        var i_, o_, a_, u_, s_, c_ = Xv(), f_ = {
            point: mr,
            lineStart: function() {
                f_.point = Di
            },
            lineEnd: function() {
                i_ && $i(o_, a_),
                f_.point = mr
            },
            polygonStart: function() {
                i_ = !0
            },
            polygonEnd: function() {
                i_ = null
            },
            result: function() {
                var t = +c_;
                return c_.reset(),
                t
            }
        };
        Bi.prototype = {
            _circle: Fi(4.5),
            pointRadius: function(t) {
                return this._circle = Fi(t),
                this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"),
                this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n),
                    this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    this._string.push("M", t, ",", n, this._circle)
                }
            },
            result: function() {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [],
                    t
                }
            }
        };
        var l_ = function(t, n) {
            function e(t) {
                return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)),
                Gg(t, r(i))),
                i.result()
            }
            var r, i, o = 4.5;
            return e.area = function(t) {
                return Gg(t, r(Fy)),
                Fy.result()
            }
            ,
            e.measure = function(t) {
                return Gg(t, r(f_)),
                f_.result()
            }
            ,
            e.bounds = function(t) {
                return Gg(t, r(Vy)),
                Vy.result()
            }
            ,
            e.centroid = function(t) {
                return Gg(t, r(r_)),
                r_.result()
            }
            ,
            e.projection = function(n) {
                return arguments.length ? (r = null == n ? (t = null,
                Dy) : (t = n).stream,
                e) : t
            }
            ,
            e.context = function(t) {
                return arguments.length ? (i = null == t ? (n = null,
                new Bi) : new Ui(n = t),
                "function" != typeof o && i.pointRadius(o),
                e) : n
            }
            ,
            e.pointRadius = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t),
                +t),
                e) : o
            }
            ,
            e.projection(t).context(n)
        }
          , h_ = function(t, n, e, r) {
            return function(i, o) {
                function a(n, e) {
                    var r = i(n, e);
                    t(n = r[0], e = r[1]) && o.point(n, e)
                }
                function u(t, n) {
                    var e = i(t, n);
                    g.point(e[0], e[1])
                }
                function s() {
                    x.point = u,
                    g.lineStart()
                }
                function c() {
                    x.point = a,
                    g.lineEnd()
                }
                function f(t, n) {
                    v.push([t, n]);
                    var e = i(t, n);
                    m.point(e[0], e[1])
                }
                function l() {
                    m.lineStart(),
                    v = []
                }
                function h() {
                    f(v[0][0], v[0][1]),
                    m.lineEnd();
                    var t, n, e, r, i = m.clean(), a = _.result(), u = a.length;
                    if (v.pop(),
                    p.push(v),
                    v = null,
                    u)
                        if (1 & i) {
                            if (e = a[0],
                            (n = e.length - 1) > 0) {
                                for (b || (o.polygonStart(),
                                b = !0),
                                o.lineStart(),
                                t = 0; t < n; ++t)
                                    o.point((r = e[t])[0], r[1]);
                                o.lineEnd()
                            }
                        } else
                            u > 1 && 2 & i && a.push(a.pop().concat(a.shift())),
                            d.push(a.filter(qi))
                }
                var p, d, v, g = n(o), y = i.invert(r[0], r[1]), _ = by(), m = n(_), b = !1, x = {
                    point: a,
                    lineStart: s,
                    lineEnd: c,
                    polygonStart: function() {
                        x.point = f,
                        x.lineStart = l,
                        x.lineEnd = h,
                        d = [],
                        p = []
                    },
                    polygonEnd: function() {
                        x.point = a,
                        x.lineStart = s,
                        x.lineEnd = c,
                        d = lf(d);
                        var t = Ey(p, y);
                        d.length ? (b || (o.polygonStart(),
                        b = !0),
                        My(d, Yi, t, e, o)) : t && (b || (o.polygonStart(),
                        b = !0),
                        o.lineStart(),
                        e(null, null, 1, o),
                        o.lineEnd()),
                        b && (o.polygonEnd(),
                        b = !1),
                        d = p = null
                    },
                    sphere: function() {
                        o.polygonStart(),
                        o.lineStart(),
                        e(null, null, 1, o),
                        o.lineEnd(),
                        o.polygonEnd()
                    }
                };
                return x
            }
        }
          , p_ = h_(function() {
            return !0
        }, Hi, Vi, [-Tg, -Ng])
          , d_ = function(t, n) {
            function e(e, r, i, o) {
                oi(o, t, n, i, e, r)
            }
            function r(t, n) {
                return Ug(t) * Ug(n) > u
            }
            function i(t) {
                var n, e, i, u, f;
                return {
                    lineStart: function() {
                        u = i = !1,
                        f = 1
                    },
                    point: function(l, h) {
                        var p, d = [l, h], v = r(l, h), g = s ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? Tg : -Tg), h) : 0;
                        if (!n && (u = i = v) && t.lineStart(),
                        v !== i && (p = o(n, d),
                        (wy(n, p) || wy(d, p)) && (d[0] += Cg,
                        d[1] += Cg,
                        v = r(d[0], d[1]))),
                        v !== i)
                            f = 0,
                            v ? (t.lineStart(),
                            p = o(d, n),
                            t.point(p[0], p[1])) : (p = o(n, d),
                            t.point(p[0], p[1]),
                            t.lineEnd()),
                            n = p;
                        else if (c && n && s ^ v) {
                            var y;
                            g & e || !(y = o(d, n, !0)) || (f = 0,
                            s ? (t.lineStart(),
                            t.point(y[0][0], y[0][1]),
                            t.point(y[1][0], y[1][1]),
                            t.lineEnd()) : (t.point(y[1][0], y[1][1]),
                            t.lineEnd(),
                            t.lineStart(),
                            t.point(y[0][0], y[0][1])))
                        }
                        !v || n && wy(n, d) || t.point(d[0], d[1]),
                        n = d,
                        i = v,
                        e = g
                    },
                    lineEnd: function() {
                        i && t.lineEnd(),
                        n = null
                    },
                    clean: function() {
                        return f | (u && i) << 1
                    }
                }
            }
            function o(t, n, e) {
                var r = Er(t)
                  , i = Er(n)
                  , o = [1, 0, 0]
                  , a = Nr(r, i)
                  , s = Tr(a, a)
                  , c = a[0]
                  , f = s - c * c;
                if (!f)
                    return !e && t;
                var l = u * s / f
                  , h = -u * c / f
                  , p = Nr(o, a)
                  , d = Rr(o, l);
                Or(d, Rr(a, h));
                var v = p
                  , g = Tr(d, v)
                  , y = Tr(v, v)
                  , _ = g * g - y * (Tr(d, d) - 1);
                if (!(_ < 0)) {
                    var m = Hg(_)
                      , b = Rr(v, (-g - m) / y);
                    if (Or(b, d),
                    b = Cr(b),
                    !e)
                        return b;
                    var x, w = t[0], M = n[0], A = t[1], S = n[1];
                    M < w && (x = w,
                    w = M,
                    M = x);
                    var k = M - w
                      , C = zg(k - Tg) < Cg
                      , E = C || k < Cg;
                    if (!C && S < A && (x = A,
                    A = S,
                    S = x),
                    E ? C ? A + S > 0 ^ b[1] < (zg(b[0] - w) < Cg ? A : S) : A <= b[1] && b[1] <= S : k > Tg ^ (w <= b[0] && b[0] <= M)) {
                        var T = Rr(v, (-g + m) / y);
                        return Or(T, d),
                        [b, Cr(T)]
                    }
                }
            }
            function a(n, e) {
                var r = s ? t : Tg - t
                  , i = 0;
                return n < -r ? i |= 1 : n > r && (i |= 2),
                e < -r ? i |= 4 : e > r && (i |= 8),
                i
            }
            var u = Ug(t)
              , s = u > 0
              , c = zg(u) > Cg;
            return h_(r, i, e, s ? [0, -t] : [-Tg, t - Tg])
        }
          , v_ = function(t) {
            return {
                stream: Xi(t)
            }
        };
        Gi.prototype = {
            constructor: Gi,
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        };
        var g_ = 16
          , y_ = Ug(30 * Lg)
          , __ = function(t, n) {
            return +n ? Ji(t, n) : Qi(t)
        }
          , m_ = Xi({
            point: function(t, n) {
                this.stream.point(t * Lg, n * Lg)
            }
        })
          , b_ = function() {
            return eo(io).scale(155.424).center([0, 33.6442])
        }
          , x_ = function() {
            return b_().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        }
          , w_ = function() {
            function t(t) {
                var n = t[0]
                  , e = t[1];
                return u = null,
                i.point(n, e),
                u || (o.point(n, e),
                u) || (a.point(n, e),
                u)
            }
            function n() {
                return e = r = null,
                t
            }
            var e, r, i, o, a, u, s = x_(), c = b_().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), f = b_().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                point: function(t, n) {
                    u = [t, n]
                }
            };
            return t.invert = function(t) {
                var n = s.scale()
                  , e = s.translate()
                  , r = (t[0] - e[0]) / n
                  , i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? c : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : s).invert(t)
            }
            ,
            t.stream = function(t) {
                return e && r === t ? e : e = oo([s.stream(r = t), c.stream(t), f.stream(t)])
            }
            ,
            t.precision = function(t) {
                return arguments.length ? (s.precision(t),
                c.precision(t),
                f.precision(t),
                n()) : s.precision()
            }
            ,
            t.scale = function(n) {
                return arguments.length ? (s.scale(n),
                c.scale(.35 * n),
                f.scale(n),
                t.translate(s.translate())) : s.scale()
            }
            ,
            t.translate = function(t) {
                if (!arguments.length)
                    return s.translate();
                var e = s.scale()
                  , r = +t[0]
                  , u = +t[1];
                return i = s.translate(t).clipExtent([[r - .455 * e, u - .238 * e], [r + .455 * e, u + .238 * e]]).stream(l),
                o = c.translate([r - .307 * e, u + .201 * e]).clipExtent([[r - .425 * e + Cg, u + .12 * e + Cg], [r - .214 * e - Cg, u + .234 * e - Cg]]).stream(l),
                a = f.translate([r - .205 * e, u + .212 * e]).clipExtent([[r - .214 * e + Cg, u + .166 * e + Cg], [r - .115 * e - Cg, u + .234 * e - Cg]]).stream(l),
                n()
            }
            ,
            t.fitExtent = function(n, e) {
                return Zi(t, n, e)
            }
            ,
            t.fitSize = function(n, e) {
                return Ki(t, n, e)
            }
            ,
            t.scale(1070)
        }
          , M_ = ao(function(t) {
            return Hg(2 / (1 + t))
        });
        M_.invert = uo(function(t) {
            return 2 * yr(t / 2)
        });
        var A_ = function() {
            return to(M_).scale(124.75).clipAngle(179.999)
        }
          , S_ = ao(function(t) {
            return (t = gr(t)) && t / qg(t)
        });
        S_.invert = uo(function(t) {
            return t
        });
        var k_ = function() {
            return to(S_).scale(79.4188).clipAngle(179.999)
        };
        so.invert = function(t, n) {
            return [t, 2 * Ig($g(n)) - Ng]
        }
        ;
        var C_ = function() {
            return co(so).scale(961 / Rg)
        }
          , E_ = function() {
            return eo(lo).scale(109.5).parallels([30, 30])
        };
        ho.invert = ho;
        var T_ = function() {
            return to(ho).scale(152.63)
        }
          , N_ = function() {
            return eo(po).scale(131.154).center([0, 13.9389])
        };
        vo.invert = uo(Ig);
        var O_ = function() {
            return to(vo).scale(144.049).clipAngle(60)
        }
          , R_ = function() {
            function t() {
                return i = o = null,
                a
            }
            var n, e, r, i, o, a, u = 1, s = 0, c = 0, f = 1, l = 1, h = Dy, p = null, d = Dy;
            return a = {
                stream: function(t) {
                    return i && o === t ? i : i = h(d(o = t))
                },
                clipExtent: function(i) {
                    return arguments.length ? (d = null == i ? (p = n = e = r = null,
                    Dy) : ci(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]),
                    t()) : null == p ? null : [[p, n], [e, r]]
                },
                scale: function(n) {
                    return arguments.length ? (h = go((u = +n) * f, u * l, s, c),
                    t()) : u
                },
                translate: function(n) {
                    return arguments.length ? (h = go(u * f, u * l, s = +n[0], c = +n[1]),
                    t()) : [s, c]
                },
                reflectX: function(n) {
                    return arguments.length ? (h = go(u * (f = n ? -1 : 1), u * l, s, c),
                    t()) : f < 0
                },
                reflectY: function(n) {
                    return arguments.length ? (h = go(u * f, u * (l = n ? -1 : 1), s, c),
                    t()) : l < 0
                },
                fitExtent: function(t, n) {
                    return Zi(a, t, n)
                },
                fitSize: function(t, n) {
                    return Ki(a, t, n)
                }
            }
        };
        yo.invert = uo(yr);
        var P_ = function() {
            return to(yo).scale(249.5).clipAngle(90 + Cg)
        };
        _o.invert = uo(function(t) {
            return 2 * Ig(t)
        });
        var L_ = function() {
            return to(_o).scale(250).clipAngle(142)
        };
        mo.invert = function(t, n) {
            return [-n, 2 * Ig($g(t)) - Ng]
        }
        ;
        var z_ = function() {
            var t = co(mo)
              , n = t.center
              , e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([-t[1], t[0]]) : (t = n(),
                [t[1], -t[0]])
            }
            ,
            t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(),
                [t[0], t[1], t[2] - 90])
            }
            ,
            e([0, 0, 90]).scale(159.155)
        }
          , I_ = function() {
            function t(t) {
                var o, a = 0;
                t.eachAfter(function(t) {
                    var e = t.children;
                    e ? (t.x = xo(e),
                    t.y = Mo(e)) : (t.x = o ? a += n(t, o) : 0,
                    t.y = 0,
                    o = t)
                });
                var u = So(t)
                  , s = ko(t)
                  , c = u.x - n(u, s) / 2
                  , f = s.x + n(s, u) / 2;
                return t.eachAfter(i ? function(n) {
                    n.x = (n.x - t.x) * e,
                    n.y = (t.y - n.y) * r
                }
                : function(n) {
                    n.x = (n.x - c) / (f - c) * e,
                    n.y = (1 - (t.y ? n.y / t.y : 1)) * r
                }
                )
            }
            var n = bo
              , e = 1
              , r = 1
              , i = !1;
            return t.separation = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.size = function(n) {
                return arguments.length ? (i = !1,
                e = +n[0],
                r = +n[1],
                t) : i ? null : [e, r]
            }
            ,
            t.nodeSize = function(n) {
                return arguments.length ? (i = !0,
                e = +n[0],
                r = +n[1],
                t) : i ? [e, r] : null
            }
            ,
            t
        }
          , j_ = function() {
            return this.eachAfter(Co)
        }
          , U_ = function(t) {
            var n, e, r, i, o = this, a = [o];
            do {
                for (n = a.reverse(),
                a = []; o = n.pop(); )
                    if (t(o),
                    e = o.children)
                        for (r = 0,
                        i = e.length; r < i; ++r)
                            a.push(e[r])
            } while (a.length);return this
        }
          , D_ = function(t) {
            for (var n, e, r = this, i = [r]; r = i.pop(); )
                if (t(r),
                n = r.children)
                    for (e = n.length - 1; e >= 0; --e)
                        i.push(n[e]);
            return this
        }
          , $_ = function(t) {
            for (var n, e, r, i = this, o = [i], a = []; i = o.pop(); )
                if (a.push(i),
                n = i.children)
                    for (e = 0,
                    r = n.length; e < r; ++e)
                        o.push(n[e]);
            for (; i = a.pop(); )
                t(i);
            return this
        }
          , B_ = function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; )
                    e += r[i].value;
                n.value = e
            })
        }
          , F_ = function(t) {
            return this.eachBefore(function(n) {
                n.children && n.children.sort(t)
            })
        }
          , q_ = function(t) {
            for (var n = this, e = Eo(n, t), r = [n]; n !== e; )
                n = n.parent,
                r.push(n);
            for (var i = r.length; t !== e; )
                r.splice(i, 0, t),
                t = t.parent;
            return r
        }
          , Y_ = function() {
            for (var t = this, n = [t]; t = t.parent; )
                n.push(t);
            return n
        }
          , H_ = function() {
            var t = [];
            return this.each(function(n) {
                t.push(n)
            }),
            t
        }
          , W_ = function() {
            var t = [];
            return this.eachBefore(function(n) {
                n.children || t.push(n)
            }),
            t
        }
          , V_ = function() {
            var t = this
              , n = [];
            return t.each(function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }),
            n
        };
        Lo.prototype = To.prototype = {
            constructor: Lo,
            count: j_,
            each: U_,
            eachAfter: $_,
            eachBefore: D_,
            sum: B_,
            sort: F_,
            path: q_,
            ancestors: Y_,
            descendants: H_,
            leaves: W_,
            links: V_,
            copy: No
        };
        var X_ = function(t) {
            for (var n, e = (t = t.slice()).length, r = null, i = r; e; ) {
                var o = new zo(t[e - 1]);
                i = i ? i.next = o : r = o,
                t[n] = t[--e]
            }
            return {
                head: r,
                tail: i
            }
        }
          , G_ = function(t) {
            return jo(X_(t), [])
        }
          , Z_ = function(t) {
            return Ho(t),
            t
        }
          , K_ = function(t) {
            return function() {
                return t
            }
        }
          , Q_ = function() {
            function t(t) {
                return t.x = e / 2,
                t.y = r / 2,
                n ? t.eachBefore(Zo(n)).eachAfter(Ko(i, .5)).eachBefore(Qo(1)) : t.eachBefore(Zo(Go)).eachAfter(Ko(Xo, 1)).eachAfter(Ko(i, t.r / Math.min(e, r))).eachBefore(Qo(Math.min(e, r) / (2 * t.r))),
                t
            }
            var n = null
              , e = 1
              , r = 1
              , i = Xo;
            return t.radius = function(e) {
                return arguments.length ? (n = Wo(e),
                t) : n
            }
            ,
            t.size = function(n) {
                return arguments.length ? (e = +n[0],
                r = +n[1],
                t) : [e, r]
            }
            ,
            t.padding = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : K_(+n),
                t) : i
            }
            ,
            t
        }
          , J_ = function(t) {
            t.x0 = Math.round(t.x0),
            t.y0 = Math.round(t.y0),
            t.x1 = Math.round(t.x1),
            t.y1 = Math.round(t.y1)
        }
          , tm = function(t, n, e, r, i) {
            for (var o, a = t.children, u = -1, s = a.length, c = t.value && (r - n) / t.value; ++u < s; )
                o = a[u],
                o.y0 = e,
                o.y1 = i,
                o.x0 = n,
                o.x1 = n += o.value * c
        }
          , nm = function() {
            function t(t) {
                var a = t.height + 1;
                return t.x0 = t.y0 = i,
                t.x1 = e,
                t.y1 = r / a,
                t.eachBefore(n(r, a)),
                o && t.eachBefore(J_),
                t
            }
            function n(t, n) {
                return function(e) {
                    e.children && tm(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var r = e.x0
                      , o = e.y0
                      , a = e.x1 - i
                      , u = e.y1 - i;
                    a < r && (r = a = (r + a) / 2),
                    u < o && (o = u = (o + u) / 2),
                    e.x0 = r,
                    e.y0 = o,
                    e.x1 = a,
                    e.y1 = u
                }
            }
            var e = 1
              , r = 1
              , i = 0
              , o = !1;
            return t.round = function(n) {
                return arguments.length ? (o = !!n,
                t) : o
            }
            ,
            t.size = function(n) {
                return arguments.length ? (e = +n[0],
                r = +n[1],
                t) : [e, r]
            }
            ,
            t.padding = function(n) {
                return arguments.length ? (i = +n,
                t) : i
            }
            ,
            t
        }
          , em = "$"
          , rm = {
            depth: -1
        }
          , im = {}
          , om = function() {
            function t(t) {
                var r, i, o, a, u, s, c, f = t.length, l = new Array(f), h = {};
                for (i = 0; i < f; ++i)
                    r = t[i],
                    u = l[i] = new Lo(r),
                    null != (s = n(r, i, t)) && (s += "") && (c = em + (u.id = s),
                    h[c] = c in h ? im : u);
                for (i = 0; i < f; ++i)
                    if (u = l[i],
                    null != (s = e(t[i], i, t)) && (s += "")) {
                        if (!(a = h[em + s]))
                            throw new Error("missing: " + s);
                        if (a === im)
                            throw new Error("ambiguous: " + s);
                        a.children ? a.children.push(u) : a.children = [u],
                        u.parent = a
                    } else {
                        if (o)
                            throw new Error("multiple roots");
                        o = u
                    }
                if (!o)
                    throw new Error("no root");
                if (o.parent = rm,
                o.eachBefore(function(t) {
                    t.depth = t.parent.depth + 1,
                    --f
                }).eachBefore(Po),
                o.parent = null,
                f > 0)
                    throw new Error("cycle");
                return o
            }
            var n = Jo
              , e = ta;
            return t.id = function(e) {
                return arguments.length ? (n = Vo(e),
                t) : n
            }
            ,
            t.parentId = function(n) {
                return arguments.length ? (e = Vo(n),
                t) : e
            }
            ,
            t
        };
        ua.prototype = Object.create(Lo.prototype);
        var am = function() {
            function t(t) {
                var r = sa(t);
                if (r.eachAfter(n),
                r.parent.m = -r.z,
                r.eachBefore(e),
                s)
                    t.eachBefore(i);
                else {
                    var c = t
                      , f = t
                      , l = t;
                    t.eachBefore(function(t) {
                        t.x < c.x && (c = t),
                        t.x > f.x && (f = t),
                        t.depth > l.depth && (l = t)
                    });
                    var h = c === f ? 1 : o(c, f) / 2
                      , p = h - c.x
                      , d = a / (f.x + h + p)
                      , v = u / (l.depth || 1);
                    t.eachBefore(function(t) {
                        t.x = (t.x + p) * d,
                        t.y = t.depth * v
                    })
                }
                return t
            }
            function n(t) {
                var n = t.children
                  , e = t.parent.children
                  , i = t.i ? e[t.i - 1] : null;
                if (n) {
                    oa(t);
                    var a = (n[0].z + n[n.length - 1].z) / 2;
                    i ? (t.z = i.z + o(t._, i._),
                    t.m = t.z - a) : t.z = a
                } else
                    i && (t.z = i.z + o(t._, i._));
                t.parent.A = r(t, i, t.parent.A || e[0])
            }
            function e(t) {
                t._.x = t.z + t.parent.m,
                t.m += t.parent.m
            }
            function r(t, n, e) {
                if (n) {
                    for (var r, i = t, a = t, u = n, s = i.parent.children[0], c = i.m, f = a.m, l = u.m, h = s.m; u = ra(u),
                    i = ea(i),
                    u && i; )
                        s = ea(s),
                        a = ra(a),
                        a.a = t,
                        r = u.z + l - i.z - c + o(u._, i._),
                        r > 0 && (ia(aa(u, t, e), t, r),
                        c += r,
                        f += r),
                        l += u.m,
                        c += i.m,
                        h += s.m,
                        f += a.m;
                    u && !ra(a) && (a.t = u,
                    a.m += l - f),
                    i && !ea(s) && (s.t = i,
                    s.m += c - h,
                    e = t)
                }
                return e
            }
            function i(t) {
                t.x *= a,
                t.y = t.depth * u
            }
            var o = na
              , a = 1
              , u = 1
              , s = null;
            return t.separation = function(n) {
                return arguments.length ? (o = n,
                t) : o
            }
            ,
            t.size = function(n) {
                return arguments.length ? (s = !1,
                a = +n[0],
                u = +n[1],
                t) : s ? null : [a, u]
            }
            ,
            t.nodeSize = function(n) {
                return arguments.length ? (s = !0,
                a = +n[0],
                u = +n[1],
                t) : s ? [a, u] : null
            }
            ,
            t
        }
          , um = function(t, n, e, r, i) {
            for (var o, a = t.children, u = -1, s = a.length, c = t.value && (i - e) / t.value; ++u < s; )
                o = a[u],
                o.x0 = n,
                o.x1 = r,
                o.y0 = e,
                o.y1 = e += o.value * c
        }
          , sm = (1 + Math.sqrt(5)) / 2
          , cm = function t(n) {
            function e(t, e, r, i, o) {
                ca(n, t, e, r, i, o)
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }
            ,
            e
        }(sm)
          , fm = function() {
            function t(t) {
                return t.x0 = t.y0 = 0,
                t.x1 = i,
                t.y1 = o,
                t.eachBefore(n),
                a = [0],
                r && t.eachBefore(J_),
                t
            }
            function n(t) {
                var n = a[t.depth]
                  , r = t.x0 + n
                  , i = t.y0 + n
                  , o = t.x1 - n
                  , h = t.y1 - n;
                o < r && (r = o = (r + o) / 2),
                h < i && (i = h = (i + h) / 2),
                t.x0 = r,
                t.y0 = i,
                t.x1 = o,
                t.y1 = h,
                t.children && (n = a[t.depth + 1] = u(t) / 2,
                r += l(t) - n,
                i += s(t) - n,
                o -= c(t) - n,
                h -= f(t) - n,
                o < r && (r = o = (r + o) / 2),
                h < i && (i = h = (i + h) / 2),
                e(t, r, i, o, h))
            }
            var e = cm
              , r = !1
              , i = 1
              , o = 1
              , a = [0]
              , u = Xo
              , s = Xo
              , c = Xo
              , f = Xo
              , l = Xo;
            return t.round = function(n) {
                return arguments.length ? (r = !!n,
                t) : r
            }
            ,
            t.size = function(n) {
                return arguments.length ? (i = +n[0],
                o = +n[1],
                t) : [i, o]
            }
            ,
            t.tile = function(n) {
                return arguments.length ? (e = Vo(n),
                t) : e
            }
            ,
            t.padding = function(n) {
                return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
            }
            ,
            t.paddingInner = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : K_(+n),
                t) : u
            }
            ,
            t.paddingOuter = function(n) {
                return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
            }
            ,
            t.paddingTop = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n : K_(+n),
                t) : s
            }
            ,
            t.paddingRight = function(n) {
                return arguments.length ? (c = "function" == typeof n ? n : K_(+n),
                t) : c
            }
            ,
            t.paddingBottom = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n : K_(+n),
                t) : f
            }
            ,
            t.paddingLeft = function(n) {
                return arguments.length ? (l = "function" == typeof n ? n : K_(+n),
                t) : l
            }
            ,
            t
        }
          , lm = function(t, n, e, r, i) {
            function o(t, n, e, r, i, a, u) {
                if (t >= n - 1) {
                    var c = s[t];
                    return c.x0 = r,
                    c.y0 = i,
                    c.x1 = a,
                    c.y1 = u,
                    void 0
                }
                for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d; ) {
                    var v = p + d >>> 1;
                    f[v] < h ? p = v + 1 : d = v
                }
                h - f[p - 1] < f[p] - h && t + 1 < p && --p;
                var g = f[p] - l
                  , y = e - g;
                if (a - r > u - i) {
                    var _ = (r * y + a * g) / e;
                    o(t, p, g, r, i, _, u),
                    o(p, n, y, _, i, a, u)
                } else {
                    var m = (i * y + u * g) / e;
                    o(t, p, g, r, i, a, m),
                    o(p, n, y, r, m, a, u)
                }
            }
            var a, u, s = t.children, c = s.length, f = new Array(c + 1);
            for (f[0] = u = a = 0; a < c; ++a)
                f[a + 1] = u += s[a].value;
            o(0, c, t.value, n, e, r, i)
        }
          , hm = function(t, n, e, r, i) {
            (1 & t.depth ? um : tm)(t, n, e, r, i)
        }
          , pm = function t(n) {
            function e(t, e, r, i, o) {
                if ((a = t._squarify) && a.ratio === n)
                    for (var a, u, s, c, f, l = -1, h = a.length, p = t.value; ++l < h; ) {
                        for (u = a[l],
                        s = u.children,
                        c = u.value = 0,
                        f = s.length; c < f; ++c)
                            u.value += s[c].value;
                        u.dice ? tm(u, e, r, i, r += (o - r) * u.value / p) : um(u, e, r, e += (i - e) * u.value / p, o),
                        p -= u.value
                    }
                else
                    t._squarify = a = ca(n, t, e, r, i, o),
                    a.ratio = n
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }
            ,
            e
        }(sm)
          , dm = function(t) {
            for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
                n = i,
                i = t[e],
                o += n[1] * i[0] - n[0] * i[1];
            return o / 2
        }
          , vm = function(t) {
            for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], s = 0; ++r < i; )
                n = u,
                u = t[r],
                s += e = n[0] * u[1] - u[0] * n[1],
                o += (n[0] + u[0]) * e,
                a += (n[1] + u[1]) * e;
            return s *= 3,
            [o / s, a / s]
        }
          , gm = function(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
        }
          , ym = function(t) {
            if ((e = t.length) < 3)
                return null;
            var n, e, r = new Array(e), i = new Array(e);
            for (n = 0; n < e; ++n)
                r[n] = [+t[n][0], +t[n][1], n];
            for (r.sort(fa),
            n = 0; n < e; ++n)
                i[n] = [r[n][0], -r[n][1]];
            var o = la(r)
              , a = la(i)
              , u = a[0] === o[0]
              , s = a[a.length - 1] === o[o.length - 1]
              , c = [];
            for (n = o.length - 1; n >= 0; --n)
                c.push(t[r[o[n]][2]]);
            for (n = +u; n < a.length - s; ++n)
                c.push(t[r[a[n]][2]]);
            return c
        }
          , _m = function(t, n) {
            for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], s = o[0], c = o[1], f = !1, l = 0; l < i; ++l)
                o = t[l],
                e = o[0],
                r = o[1],
                r > u != c > u && a < (s - e) * (u - r) / (c - r) + e && (f = !f),
                s = e,
                c = r;
            return f
        }
          , mm = function(t) {
            for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], s = 0; ++r < i; )
                n = a,
                e = u,
                o = t[r],
                a = o[0],
                u = o[1],
                n -= a,
                e -= u,
                s += Math.sqrt(n * n + e * e);
            return s
        }
          , bm = [].slice
          , xm = {};
        ha.prototype = _a.prototype = {
            constructor: ha,
            defer: function(t) {
                if ("function" != typeof t || this._call)
                    throw new Error;
                if (null != this._error)
                    return this;
                var n = bm.call(arguments, 1);
                return n.push(t),
                ++this._waiting,
                this._tasks.push(n),
                pa(this),
                this
            },
            abort: function() {
                return null == this._error && ga(this, new Error("abort")),
                this
            },
            await: function(t) {
                if ("function" != typeof t || this._call)
                    throw new Error;
                return this._call = function(n, e) {
                    t.apply(null, [n].concat(e))
                }
                ,
                ya(this),
                this
            },
            awaitAll: function(t) {
                if ("function" != typeof t || this._call)
                    throw new Error;
                return this._call = t,
                ya(this),
                this
            }
        };
        var wm = function(t, n) {
            return t = null == t ? 0 : +t,
            n = null == n ? 1 : +n,
            1 === arguments.length ? (n = t,
            t = 0) : n -= t,
            function() {
                return Math.random() * n + t
            }
        }
          , Mm = function(t, n) {
            var e, r;
            return t = null == t ? 0 : +t,
            n = null == n ? 1 : +n,
            function() {
                var i;
                if (null != e)
                    i = e,
                    e = null;
                else
                    do {
                        e = 2 * Math.random() - 1,
                        i = 2 * Math.random() - 1,
                        r = e * e + i * i
                    } while (!r || r > 1);return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
            }
        }
          , Am = function() {
            var t = Mm.apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
          , Sm = function(t) {
            return function() {
                for (var n = 0, e = 0; e < t; ++e)
                    n += Math.random();
                return n
            }
        }
          , km = function(t) {
            var n = Sm(t);
            return function() {
                return n() / t
            }
        }
          , Cm = function(t) {
            return function() {
                return -Math.log(1 - Math.random()) / t
            }
        }
          , Em = function(t, n) {
            function e(t) {
                var n, e = c.status;
                if (!e && ba(c) || e >= 200 && e < 300 || 304 === e) {
                    if (o)
                        try {
                            n = o.call(r, c)
                        } catch (t) {
                            return void u.call("error", r, t)
                        }
                    else
                        n = c;
                    u.call("load", r, n)
                } else
                    u.call("error", r, t)
            }
            var r, i, o, a, u = d("beforesend", "progress", "load", "error"), s = Be(), c = new XMLHttpRequest, f = null, l = null, h = 0;
            if ("undefined" == typeof XDomainRequest || "withCredentials"in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest),
            "onload"in c ? c.onload = c.onerror = c.ontimeout = e : c.onreadystatechange = function(t) {
                c.readyState > 3 && e(t)
            }
            ,
            c.onprogress = function(t) {
                u.call("progress", r, t)
            }
            ,
            r = {
                header: function(t, n) {
                    return t = (t + "").toLowerCase(),
                    arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""),
                    r)
                },
                mimeType: function(t) {
                    return arguments.length ? (i = null == t ? null : t + "",
                    r) : i
                },
                responseType: function(t) {
                    return arguments.length ? (a = t,
                    r) : a
                },
                timeout: function(t) {
                    return arguments.length ? (h = +t,
                    r) : h
                },
                user: function(t) {
                    return arguments.length < 1 ? f : (f = null == t ? null : t + "",
                    r)
                },
                password: function(t) {
                    return arguments.length < 1 ? l : (l = null == t ? null : t + "",
                    r)
                },
                response: function(t) {
                    return o = t,
                    r
                },
                get: function(t, n) {
                    return r.send("GET", t, n)
                },
                post: function(t, n) {
                    return r.send("POST", t, n)
                },
                send: function(n, e, o) {
                    return c.open(n, t, !0, f, l),
                    null == i || s.has("accept") || s.set("accept", i + ",*/*"),
                    c.setRequestHeader && s.each(function(t, n) {
                        c.setRequestHeader(n, t)
                    }),
                    null != i && c.overrideMimeType && c.overrideMimeType(i),
                    null != a && (c.responseType = a),
                    h > 0 && (c.timeout = h),
                    null == o && "function" == typeof e && (o = e,
                    e = null),
                    null != o && 1 === o.length && (o = ma(o)),
                    null != o && r.on("error", o).on("load", function(t) {
                        o(null, t)
                    }),
                    u.call("beforesend", r, c),
                    c.send(null == e ? null : e),
                    r
                },
                abort: function() {
                    return c.abort(),
                    r
                },
                on: function() {
                    var t = u.on.apply(u, arguments);
                    return t === u ? r : t
                }
            },
            null != n) {
                if ("function" != typeof n)
                    throw new Error("invalid callback: " + n);
                return r.get(n)
            }
            return r
        }
          , Tm = function(t, n) {
            return function(e, r) {
                var i = Em(e).mimeType(t).response(n);
                if (null != r) {
                    if ("function" != typeof r)
                        throw new Error("invalid callback: " + r);
                    return i.get(r)
                }
                return i
            }
        }
          , Nm = Tm("text/html", function(t) {
            return document.createRange().createContextualFragment(t.responseText)
        })
          , Om = Tm("application/json", function(t) {
            return JSON.parse(t.responseText)
        })
          , Rm = Tm("text/plain", function(t) {
            return t.responseText
        })
          , Pm = Tm("application/xml", function(t) {
            var n = t.responseXML;
            if (!n)
                throw new Error("parse error");
            return n
        })
          , Lm = function(t, n) {
            return function(e, r, i) {
                arguments.length < 3 && (i = r,
                r = null);
                var o = Em(e).mimeType(t);
                return o.row = function(t) {
                    return arguments.length ? o.response(xa(n, r = t)) : r
                }
                ,
                o.row(r),
                i ? o.get(i) : o
            }
        }
          , zm = Lm("text/csv", Kd)
          , Im = Lm("text/tab-separated-values", ev)
          , jm = Array.prototype
          , Um = jm.map
          , Dm = jm.slice
          , $m = {
            name: "implicit"
        }
          , Bm = function(t) {
            return function() {
                return t
            }
        }
          , Fm = function(t) {
            return +t
        }
          , qm = [0, 1]
          , Ym = function(n, e, i) {
            var o, a = n[0], u = n[n.length - 1], s = r(a, u, null == e ? 10 : e);
            switch (i = lr(null == i ? ",f" : i),
            i.type) {
            case "s":
                var c = Math.max(Math.abs(a), Math.abs(u));
                return null != i.precision || isNaN(o = Wv(s, c)) || (i.precision = o),
                t.formatPrefix(i, c);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN(o = Vv(s, Math.max(Math.abs(a), Math.abs(u)))) || (i.precision = o - ("e" === i.type));
                break;
            case "f":
            case "%":
                null != i.precision || isNaN(o = Hv(s)) || (i.precision = o - 2 * ("%" === i.type))
            }
            return t.format(i)
        }
          , Hm = function(t, n) {
            t = t.slice();
            var e, r = 0, i = t.length - 1, o = t[r], a = t[i];
            return a < o && (e = r,
            r = i,
            i = e,
            e = o,
            o = a,
            a = e),
            t[r] = n.floor(o),
            t[i] = n.ceil(a),
            t
        }
          , Wm = new Date
          , Vm = new Date
          , Xm = Ga(function() {}, function(t, n) {
            t.setTime(+t + n)
        }, function(t, n) {
            return n - t
        });
        Xm.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? Ga(function(n) {
                n.setTime(Math.floor(n / t) * t)
            }, function(n, e) {
                n.setTime(+n + e * t)
            }, function(n, e) {
                return (e - n) / t
            }) : Xm : null
        }
        ;
        var Gm = Xm.range
          , Zm = 1e3
          , Km = 6e4
          , Qm = 36e5
          , Jm = 864e5
          , tb = 6048e5
          , nb = Ga(function(t) {
            t.setTime(Math.floor(t / Zm) * Zm)
        }, function(t, n) {
            t.setTime(+t + n * Zm)
        }, function(t, n) {
            return (n - t) / Zm
        }, function(t) {
            return t.getUTCSeconds()
        })
          , eb = nb.range
          , rb = Ga(function(t) {
            t.setTime(Math.floor(t / Km) * Km)
        }, function(t, n) {
            t.setTime(+t + n * Km)
        }, function(t, n) {
            return (n - t) / Km
        }, function(t) {
            return t.getMinutes()
        })
          , ib = rb.range
          , ob = Ga(function(t) {
            var n = t.getTimezoneOffset() * Km % Qm;
            n < 0 && (n += Qm),
            t.setTime(Math.floor((+t - n) / Qm) * Qm + n)
        }, function(t, n) {
            t.setTime(+t + n * Qm)
        }, function(t, n) {
            return (n - t) / Qm
        }, function(t) {
            return t.getHours()
        })
          , ab = ob.range
          , ub = Ga(function(t) {
            t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setDate(t.getDate() + n)
        }, function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Km) / Jm
        }, function(t) {
            return t.getDate() - 1
        })
          , sb = ub.range
          , cb = Za(0)
          , fb = Za(1)
          , lb = Za(2)
          , hb = Za(3)
          , pb = Za(4)
          , db = Za(5)
          , vb = Za(6)
          , gb = cb.range
          , yb = fb.range
          , _b = lb.range
          , mb = hb.range
          , bb = pb.range
          , xb = db.range
          , wb = vb.range
          , Mb = Ga(function(t) {
            t.setDate(1),
            t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setMonth(t.getMonth() + n)
        }, function(t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        }, function(t) {
            return t.getMonth()
        })
          , Ab = Mb.range
          , Sb = Ga(function(t) {
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function(t, n) {
            return n.getFullYear() - t.getFullYear()
        }, function(t) {
            return t.getFullYear()
        });
        Sb.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Ga(function(n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setFullYear(n.getFullYear() + e * t)
            }) : null
        }
        ;
        var kb = Sb.range
          , Cb = Ga(function(t) {
            t.setUTCSeconds(0, 0)
        }, function(t, n) {
            t.setTime(+t + n * Km)
        }, function(t, n) {
            return (n - t) / Km
        }, function(t) {
            return t.getUTCMinutes()
        })
          , Eb = Cb.range
          , Tb = Ga(function(t) {
            t.setUTCMinutes(0, 0, 0)
        }, function(t, n) {
            t.setTime(+t + n * Qm)
        }, function(t, n) {
            return (n - t) / Qm
        }, function(t) {
            return t.getUTCHours()
        })
          , Nb = Tb.range
          , Ob = Ga(function(t) {
            t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCDate(t.getUTCDate() + n)
        }, function(t, n) {
            return (n - t) / Jm
        }, function(t) {
            return t.getUTCDate() - 1
        })
          , Rb = Ob.range
          , Pb = Ka(0)
          , Lb = Ka(1)
          , zb = Ka(2)
          , Ib = Ka(3)
          , jb = Ka(4)
          , Ub = Ka(5)
          , Db = Ka(6)
          , $b = Pb.range
          , Bb = Lb.range
          , Fb = zb.range
          , qb = Ib.range
          , Yb = jb.range
          , Hb = Ub.range
          , Wb = Db.range
          , Vb = Ga(function(t) {
            t.setUTCDate(1),
            t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCMonth(t.getUTCMonth() + n)
        }, function(t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
        }, function(t) {
            return t.getUTCMonth()
        })
          , Xb = Vb.range
          , Gb = Ga(function(t) {
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n)
        }, function(t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear()
        }, function(t) {
            return t.getUTCFullYear()
        });
        Gb.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Ga(function(n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t)
            }) : null
        }
        ;
        var Zb, Kb = Gb.range, Qb = {
            "-": "",
            _: " ",
            0: "0"
        }, Jb = /^\s*\d+/, tx = /^%/, nx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        Gu({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        var ex = "%Y-%m-%dT%H:%M:%S.%LZ"
          , rx = Date.prototype.toISOString ? Zu : t.utcFormat(ex)
          , ix = +new Date("2000-01-01T00:00:00.000Z") ? Ku : t.utcParse(ex)
          , ox = 1e3
          , ax = 60 * ox
          , ux = 60 * ax
          , sx = 24 * ux
          , cx = 7 * sx
          , fx = 30 * sx
          , lx = 365 * sx
          , hx = function() {
            return ts(Sb, Mb, cb, ub, ob, rb, nb, Xm, t.timeFormat).domain([new Date(2e3,0,1), new Date(2e3,0,2)])
        }
          , px = function() {
            return ts(Gb, Vb, Pb, Ob, Tb, Cb, nb, Xm, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        }
          , dx = function(t) {
            return t.match(/.{6}/g).map(function(t) {
                return "#" + t
            })
        }
          , vx = dx("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")
          , gx = dx("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6")
          , yx = dx("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9")
          , _x = dx("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5")
          , mx = Hh(Wt(300, .5, 0), Wt(-240, .5, 1))
          , bx = Hh(Wt(-100, .75, .35), Wt(80, 1.5, .8))
          , xx = Hh(Wt(260, .75, .35), Wt(80, 1.5, .8))
          , wx = Wt()
          , Mx = function(t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - .5);
            return wx.h = 360 * t - 100,
            wx.s = 1.5 - 1.5 * n,
            wx.l = .8 - .9 * n,
            wx + ""
        }
          , Ax = ns(dx("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"))
          , Sx = ns(dx("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"))
          , kx = ns(dx("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"))
          , Cx = ns(dx("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
          , Ex = function(t) {
            return function() {
                return t
            }
        }
          , Tx = Math.abs
          , Nx = Math.atan2
          , Ox = Math.cos
          , Rx = Math.max
          , Px = Math.min
          , Lx = Math.sin
          , zx = Math.sqrt
          , Ix = 1e-12
          , jx = Math.PI
          , Ux = jx / 2
          , Dx = 2 * jx
          , $x = function() {
            function t() {
                var t, c, f = +n.apply(this, arguments), l = +e.apply(this, arguments), h = o.apply(this, arguments) - Ux, p = a.apply(this, arguments) - Ux, d = Tx(p - h), v = p > h;
                if (s || (s = t = Le()),
                l < f && (c = l,
                l = f,
                f = c),
                l > Ix)
                    if (d > Dx - Ix)
                        s.moveTo(l * Ox(h), l * Lx(h)),
                        s.arc(0, 0, l, h, p, !v),
                        f > Ix && (s.moveTo(f * Ox(p), f * Lx(p)),
                        s.arc(0, 0, f, p, h, v));
                    else {
                        var g, y, _ = h, m = p, b = h, x = p, w = d, M = d, A = u.apply(this, arguments) / 2, S = A > Ix && (i ? +i.apply(this, arguments) : zx(f * f + l * l)), k = Px(Tx(l - f) / 2, +r.apply(this, arguments)), C = k, E = k;
                        if (S > Ix) {
                            var T = is(S / f * Lx(A))
                              , N = is(S / l * Lx(A));
                            (w -= 2 * T) > Ix ? (T *= v ? 1 : -1,
                            b += T,
                            x -= T) : (w = 0,
                            b = x = (h + p) / 2),
                            (M -= 2 * N) > Ix ? (N *= v ? 1 : -1,
                            _ += N,
                            m -= N) : (M = 0,
                            _ = m = (h + p) / 2)
                        }
                        var O = l * Ox(_)
                          , R = l * Lx(_)
                          , P = f * Ox(x)
                          , L = f * Lx(x);
                        if (k > Ix) {
                            var z = l * Ox(m)
                              , I = l * Lx(m)
                              , j = f * Ox(b)
                              , U = f * Lx(b);
                            if (d < jx) {
                                var D = w > Ix ? fs(O, R, j, U, z, I, P, L) : [P, L]
                                  , $ = O - D[0]
                                  , B = R - D[1]
                                  , F = z - D[0]
                                  , q = I - D[1]
                                  , Y = 1 / Lx(rs(($ * F + B * q) / (zx($ * $ + B * B) * zx(F * F + q * q))) / 2)
                                  , H = zx(D[0] * D[0] + D[1] * D[1]);
                                C = Px(k, (f - H) / (Y - 1)),
                                E = Px(k, (l - H) / (Y + 1))
                            }
                        }
                        M > Ix ? E > Ix ? (g = ls(j, U, O, R, l, E, v),
                        y = ls(z, I, P, L, l, E, v),
                        s.moveTo(g.cx + g.x01, g.cy + g.y01),
                        E < k ? s.arc(g.cx, g.cy, E, Nx(g.y01, g.x01), Nx(y.y01, y.x01), !v) : (s.arc(g.cx, g.cy, E, Nx(g.y01, g.x01), Nx(g.y11, g.x11), !v),
                        s.arc(0, 0, l, Nx(g.cy + g.y11, g.cx + g.x11), Nx(y.cy + y.y11, y.cx + y.x11), !v),
                        s.arc(y.cx, y.cy, E, Nx(y.y11, y.x11), Nx(y.y01, y.x01), !v))) : (s.moveTo(O, R),
                        s.arc(0, 0, l, _, m, !v)) : s.moveTo(O, R),
                        f > Ix && w > Ix ? C > Ix ? (g = ls(P, L, z, I, f, -C, v),
                        y = ls(O, R, j, U, f, -C, v),
                        s.lineTo(g.cx + g.x01, g.cy + g.y01),
                        C < k ? s.arc(g.cx, g.cy, C, Nx(g.y01, g.x01), Nx(y.y01, y.x01), !v) : (s.arc(g.cx, g.cy, C, Nx(g.y01, g.x01), Nx(g.y11, g.x11), !v),
                        s.arc(0, 0, f, Nx(g.cy + g.y11, g.cx + g.x11), Nx(y.cy + y.y11, y.cx + y.x11), v),
                        s.arc(y.cx, y.cy, C, Nx(y.y11, y.x11), Nx(y.y01, y.x01), !v))) : s.arc(0, 0, f, x, b, v) : s.lineTo(P, L)
                    }
                else
                    s.moveTo(0, 0);
                if (s.closePath(),
                t)
                    return s = null,
                    t + "" || null
            }
            var n = os
              , e = as
              , r = Ex(0)
              , i = null
              , o = us
              , a = ss
              , u = cs
              , s = null;
            return t.centroid = function() {
                var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2
                  , r = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - jx / 2;
                return [Ox(r) * t, Lx(r) * t]
            }
            ,
            t.innerRadius = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ex(+e),
                t) : n
            }
            ,
            t.outerRadius = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Ex(+n),
                t) : e
            }
            ,
            t.cornerRadius = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Ex(+n),
                t) : r
            }
            ,
            t.padRadius = function(n) {
                return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : Ex(+n),
                t) : i
            }
            ,
            t.startAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : Ex(+n),
                t) : o
            }
            ,
            t.endAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : Ex(+n),
                t) : a
            }
            ,
            t.padAngle = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : Ex(+n),
                t) : u
            }
            ,
            t.context = function(n) {
                return arguments.length ? (s = null == n ? null : n,
                t) : s
            }
            ,
            t
        };
        hs.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
                }
            }
        };
        var Bx = function(t) {
            return new hs(t)
        }
          , Fx = function() {
            function t(t) {
                var u, s, c, f = t.length, l = !1;
                for (null == i && (a = o(c = Le())),
                u = 0; u <= f; ++u)
                    !(u < f && r(s = t[u], u, t)) === l && ((l = !l) ? a.lineStart() : a.lineEnd()),
                    l && a.point(+n(s, u, t), +e(s, u, t));
                if (c)
                    return a = null,
                    c + "" || null
            }
            var n = ps
              , e = ds
              , r = Ex(!0)
              , i = null
              , o = Bx
              , a = null;
            return t.x = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ex(+e),
                t) : n
            }
            ,
            t.y = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Ex(+n),
                t) : e
            }
            ,
            t.defined = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : Ex(!!n),
                t) : r
            }
            ,
            t.curve = function(n) {
                return arguments.length ? (o = n,
                null != i && (a = o(i)),
                t) : o
            }
            ,
            t.context = function(n) {
                return arguments.length ? (null == n ? i = a = null : a = o(i = n),
                t) : i
            }
            ,
            t
        }
          , qx = function() {
            function t(t) {
                var n, f, l, h, p, d = t.length, v = !1, g = new Array(d), y = new Array(d);
                for (null == u && (c = s(p = Le())),
                n = 0; n <= d; ++n) {
                    if (!(n < d && a(h = t[n], n, t)) === v)
                        if (v = !v)
                            f = n,
                            c.areaStart(),
                            c.lineStart();
                        else {
                            for (c.lineEnd(),
                            c.lineStart(),
                            l = n - 1; l >= f; --l)
                                c.point(g[l], y[l]);
                            c.lineEnd(),
                            c.areaEnd()
                        }
                    v && (g[n] = +e(h, n, t),
                    y[n] = +i(h, n, t),
                    c.point(r ? +r(h, n, t) : g[n], o ? +o(h, n, t) : y[n]))
                }
                if (p)
                    return c = null,
                    p + "" || null
            }
            function n() {
                return Fx().defined(a).curve(s).context(u)
            }
            var e = ps
              , r = null
              , i = Ex(0)
              , o = ds
              , a = Ex(!0)
              , u = null
              , s = Bx
              , c = null;
            return t.x = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Ex(+n),
                r = null,
                t) : e
            }
            ,
            t.x0 = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Ex(+n),
                t) : e
            }
            ,
            t.x1 = function(n) {
                return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : Ex(+n),
                t) : r
            }
            ,
            t.y = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : Ex(+n),
                o = null,
                t) : i
            }
            ,
            t.y0 = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : Ex(+n),
                t) : i
            }
            ,
            t.y1 = function(n) {
                return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : Ex(+n),
                t) : o
            }
            ,
            t.lineX0 = t.lineY0 = function() {
                return n().x(e).y(i)
            }
            ,
            t.lineY1 = function() {
                return n().x(e).y(o)
            }
            ,
            t.lineX1 = function() {
                return n().x(r).y(i)
            }
            ,
            t.defined = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : Ex(!!n),
                t) : a
            }
            ,
            t.curve = function(n) {
                return arguments.length ? (s = n,
                null != u && (c = s(u)),
                t) : s
            }
            ,
            t.context = function(n) {
                return arguments.length ? (null == n ? u = c = null : c = s(u = n),
                t) : u
            }
            ,
            t
        }
          , Yx = function(t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
          , Hx = function(t) {
            return t
        }
          , Wx = function() {
            function t(t) {
                var u, s, c, f, l, h = t.length, p = 0, d = new Array(h), v = new Array(h), g = +i.apply(this, arguments), y = Math.min(Dx, Math.max(-Dx, o.apply(this, arguments) - g)), _ = Math.min(Math.abs(y) / h, a.apply(this, arguments)), m = _ * (y < 0 ? -1 : 1);
                for (u = 0; u < h; ++u)
                    (l = v[d[u] = u] = +n(t[u], u, t)) > 0 && (p += l);
                for (null != e ? d.sort(function(t, n) {
                    return e(v[t], v[n])
                }) : null != r && d.sort(function(n, e) {
                    return r(t[n], t[e])
                }),
                u = 0,
                c = p ? (y - h * m) / p : 0; u < h; ++u,
                g = f)
                    s = d[u],
                    l = v[s],
                    f = g + (l > 0 ? l * c : 0) + m,
                    v[s] = {
                        data: t[s],
                        index: u,
                        value: l,
                        startAngle: g,
                        endAngle: f,
                        padAngle: _
                    };
                return v
            }
            var n = Hx
              , e = Yx
              , r = null
              , i = Ex(0)
              , o = Ex(Dx)
              , a = Ex(0);
            return t.value = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ex(+e),
                t) : n
            }
            ,
            t.sortValues = function(n) {
                return arguments.length ? (e = n,
                r = null,
                t) : e
            }
            ,
            t.sort = function(n) {
                return arguments.length ? (r = n,
                e = null,
                t) : r
            }
            ,
            t.startAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : Ex(+n),
                t) : i
            }
            ,
            t.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : Ex(+n),
                t) : o
            }
            ,
            t.padAngle = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : Ex(+n),
                t) : a
            }
            ,
            t
        }
          , Vx = gs(Bx);
        vs.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        };
        var Xx = function() {
            return ys(Fx().curve(Vx))
        }
          , Gx = function() {
            var t = qx().curve(Vx)
              , n = t.curve
              , e = t.lineX0
              , r = t.lineX1
              , i = t.lineY0
              , o = t.lineY1;
            return t.angle = t.x,
            delete t.x,
            t.startAngle = t.x0,
            delete t.x0,
            t.endAngle = t.x1,
            delete t.x1,
            t.radius = t.y,
            delete t.y,
            t.innerRadius = t.y0,
            delete t.y0,
            t.outerRadius = t.y1,
            delete t.y1,
            t.lineStartAngle = function() {
                return ys(e())
            }
            ,
            delete t.lineX0,
            t.lineEndAngle = function() {
                return ys(r())
            }
            ,
            delete t.lineX1,
            t.lineInnerRadius = function() {
                return ys(i())
            }
            ,
            delete t.lineY0,
            t.lineOuterRadius = function() {
                return ys(o())
            }
            ,
            delete t.lineY1,
            t.curve = function(t) {
                return arguments.length ? n(gs(t)) : n()._curve
            }
            ,
            t
        }
          , Zx = {
            draw: function(t, n) {
                var e = Math.sqrt(n / jx);
                t.moveTo(e, 0),
                t.arc(0, 0, e, 0, Dx)
            }
        }
          , Kx = {
            draw: function(t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e),
                t.lineTo(-e, -e),
                t.lineTo(-e, -3 * e),
                t.lineTo(e, -3 * e),
                t.lineTo(e, -e),
                t.lineTo(3 * e, -e),
                t.lineTo(3 * e, e),
                t.lineTo(e, e),
                t.lineTo(e, 3 * e),
                t.lineTo(-e, 3 * e),
                t.lineTo(-e, e),
                t.lineTo(-3 * e, e),
                t.closePath()
            }
        }
          , Qx = Math.sqrt(1 / 3)
          , Jx = 2 * Qx
          , tw = {
            draw: function(t, n) {
                var e = Math.sqrt(n / Jx)
                  , r = e * Qx;
                t.moveTo(0, -e),
                t.lineTo(r, 0),
                t.lineTo(0, e),
                t.lineTo(-r, 0),
                t.closePath()
            }
        }
          , nw = .8908130915292852
          , ew = Math.sin(jx / 10) / Math.sin(7 * jx / 10)
          , rw = Math.sin(Dx / 10) * ew
          , iw = -Math.cos(Dx / 10) * ew
          , ow = {
            draw: function(t, n) {
                var e = Math.sqrt(n * nw)
                  , r = rw * e
                  , i = iw * e;
                t.moveTo(0, -e),
                t.lineTo(r, i);
                for (var o = 1; o < 5; ++o) {
                    var a = Dx * o / 5
                      , u = Math.cos(a)
                      , s = Math.sin(a);
                    t.lineTo(s * e, -u * e),
                    t.lineTo(u * r - s * i, s * r + u * i)
                }
                t.closePath()
            }
        }
          , aw = {
            draw: function(t, n) {
                var e = Math.sqrt(n)
                  , r = -e / 2;
                t.rect(r, r, e, e)
            }
        }
          , uw = Math.sqrt(3)
          , sw = {
            draw: function(t, n) {
                var e = -Math.sqrt(n / (3 * uw));
                t.moveTo(0, 2 * e),
                t.lineTo(-uw * e, -e),
                t.lineTo(uw * e, -e),
                t.closePath()
            }
        }
          , cw = -.5
          , fw = Math.sqrt(3) / 2
          , lw = 1 / Math.sqrt(12)
          , hw = 3 * (lw / 2 + 1)
          , pw = {
            draw: function(t, n) {
                var e = Math.sqrt(n / hw)
                  , r = e / 2
                  , i = e * lw
                  , o = r
                  , a = e * lw + e
                  , u = -o
                  , s = a;
                t.moveTo(r, i),
                t.lineTo(o, a),
                t.lineTo(u, s),
                t.lineTo(cw * r - fw * i, fw * r + cw * i),
                t.lineTo(cw * o - fw * a, fw * o + cw * a),
                t.lineTo(cw * u - fw * s, fw * u + cw * s),
                t.lineTo(cw * r + fw * i, cw * i - fw * r),
                t.lineTo(cw * o + fw * a, cw * a - fw * o),
                t.lineTo(cw * u + fw * s, cw * s - fw * u),
                t.closePath()
            }
        }
          , dw = [Zx, Kx, tw, aw, ow, sw, pw]
          , vw = function() {
            function t() {
                var t;
                if (r || (r = t = Le()),
                n.apply(this, arguments).draw(r, +e.apply(this, arguments)),
                t)
                    return r = null,
                    t + "" || null
            }
            var n = Ex(Zx)
              , e = Ex(64)
              , r = null;
            return t.type = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ex(e),
                t) : n
            }
            ,
            t.size = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Ex(+n),
                t) : e
            }
            ,
            t.context = function(n) {
                return arguments.length ? (r = null == n ? null : n,
                t) : r
            }
            ,
            t
        }
          , gw = function() {};
        ms.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 3:
                    _s(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    _s(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n
            }
        };
        var yw = function(t) {
            return new ms(t)
        };
        bs.prototype = {
            areaStart: gw,
            areaEnd: gw,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                    this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4)
                }
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._x2 = t,
                    this._y2 = n;
                    break;
                case 1:
                    this._point = 2,
                    this._x3 = t,
                    this._y3 = n;
                    break;
                case 2:
                    this._point = 3,
                    this._x4 = t,
                    this._y4 = n,
                    this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    _s(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n
            }
        };
        var _w = function(t) {
            return new bs(t)
        };
        xs.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6
                      , r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    _s(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n
            }
        };
        var mw = function(t) {
            return new xs(t)
        };
        ws.prototype = {
            lineStart: function() {
                this._x = [],
                this._y = [],
                this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x
                  , n = this._y
                  , e = t.length - 1;
                if (e > 0)
                    for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, s = -1; ++s <= e; )
                        r = s / e,
                        this._basis.point(this._beta * t[s] + (1 - this._beta) * (i + r * a), this._beta * n[s] + (1 - this._beta) * (o + r * u));
                this._x = this._y = null,
                this._basis.lineEnd()
            },
            point: function(t, n) {
                this._x.push(+t),
                this._y.push(+n)
            }
        };
        var bw = function t(n) {
            function e(t) {
                return 1 === n ? new ms(t) : new ws(t,n)
            }
            return e.beta = function(n) {
                return t(+n)
            }
            ,
            e
        }(.85);
        As.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Ms(this, this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2,
                    this._x1 = t,
                    this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Ms(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var xw = function t(n) {
            function e(t) {
                return new As(t,n)
            }
            return e.tension = function(n) {
                return t(+n)
            }
            ,
            e
        }(0);
        Ss.prototype = {
            areaStart: gw,
            areaEnd: gw,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._x3 = t,
                    this._y3 = n;
                    break;
                case 1:
                    this._point = 2,
                    this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3,
                    this._x5 = t,
                    this._y5 = n;
                    break;
                default:
                    Ms(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var ww = function t(n) {
            function e(t) {
                return new Ss(t,n)
            }
            return e.tension = function(n) {
                return t(+n)
            }
            ,
            e
        }(0);
        ks.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Ms(this, t, n)
                }
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var Mw = function t(n) {
            function e(t) {
                return new ks(t,n)
            }
            return e.tension = function(n) {
                return t(+n)
            }
            ,
            e
        }(0);
        Es.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t,
                n = +n,
                this._point) {
                    var e = this._x2 - t
                      , r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Cs(this, t, n)
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var Aw = function t(n) {
            function e(t) {
                return n ? new Es(t,n) : new As(t,0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }
            ,
            e
        }(.5);
        Ts.prototype = {
            areaStart: gw,
            areaEnd: gw,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3),
                    this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                if (t = +t,
                n = +n,
                this._point) {
                    var e = this._x2 - t
                      , r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._x3 = t,
                    this._y3 = n;
                    break;
                case 1:
                    this._point = 2,
                    this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3,
                    this._x5 = t,
                    this._y5 = n;
                    break;
                default:
                    Cs(this, t, n)
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var Sw = function t(n) {
            function e(t) {
                return n ? new Ts(t,n) : new Ss(t,0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }
            ,
            e
        }(.5);
        Ns.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t,
                n = +n,
                this._point) {
                    var e = this._x2 - t
                      , r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Cs(this, t, n)
                }
                this._l01_a = this._l12_a,
                this._l12_a = this._l23_a,
                this._l01_2a = this._l12_2a,
                this._l12_2a = this._l23_2a,
                this._x0 = this._x1,
                this._x1 = this._x2,
                this._x2 = t,
                this._y0 = this._y1,
                this._y1 = this._y2,
                this._y2 = n
            }
        };
        var kw = function t(n) {
            function e(t) {
                return n ? new Ns(t,n) : new ks(t,0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }
            ,
            e
        }(.5);
        Os.prototype = {
            areaStart: gw,
            areaEnd: gw,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, n) {
                t = +t,
                n = +n,
                this._point ? this._context.lineTo(t, n) : (this._point = 1,
                this._context.moveTo(t, n))
            }
        };
        var Cw = function(t) {
            return new Os(t)
        };
        Is.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
                this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    zs(this, this._t0, Ls(this, this._t0))
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line = 1 - this._line
            },
            point: function(t, n) {
                var e = NaN;
                if (t = +t,
                n = +n,
                t !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                    case 0:
                        this._point = 1,
                        this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3,
                        zs(this, Ls(this, e = Ps(this, t, n)), e);
                        break;
                    default:
                        zs(this, this._t0, e = Ps(this, t, n))
                    }
                    this._x0 = this._x1,
                    this._x1 = t,
                    this._y0 = this._y1,
                    this._y1 = n,
                    this._t0 = e
                }
            }
        },
        (js.prototype = Object.create(Is.prototype)).point = function(t, n) {
            Is.prototype.point.call(this, n, t)
        }
        ,
        Us.prototype = {
            moveTo: function(t, n) {
                this._context.moveTo(n, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, n) {
                this._context.lineTo(n, t)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._context.bezierCurveTo(n, t, r, e, o, i)
            }
        },
        Bs.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [],
                this._y = []
            },
            lineEnd: function() {
                var t = this._x
                  , n = this._y
                  , e = t.length;
                if (e)
                    if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]),
                    2 === e)
                        this._context.lineTo(t[1], n[1]);
                    else
                        for (var r = Fs(t), i = Fs(n), o = 0, a = 1; a < e; ++o,
                        ++a)
                            this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(),
                this._line = 1 - this._line,
                this._x = this._y = null
            },
            point: function(t, n) {
                this._x.push(+t),
                this._y.push(+n)
            }
        };
        var Ew = function(t) {
            return new Bs(t)
        };
        qs.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN,
                this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                this._line >= 0 && (this._t = 1 - this._t,
                this._line = 1 - this._line)
            },
            point: function(t, n) {
                switch (t = +t,
                n = +n,
                this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0)
                        this._context.lineTo(this._x, n),
                        this._context.lineTo(t, n);
                    else {
                        var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y),
                        this._context.lineTo(e, n)
                    }
                }
                this._x = t,
                this._y = n
            }
        };
        var Tw = function(t) {
            return new qs(t,.5)
        }
          , Nw = Array.prototype.slice
          , Ow = function(t, n) {
            if ((r = t.length) > 1)
                for (var e, r, i = 1, o = t[n[0]], a = o.length; i < r; ++i) {
                    e = o,
                    o = t[n[i]];
                    for (var u = 0; u < a; ++u)
                        o[u][1] += o[u][0] = isNaN(e[u][1]) ? e[u][0] : e[u][1]
                }
        }
          , Rw = function(t) {
            for (var n = t.length, e = new Array(n); --n >= 0; )
                e[n] = n;
            return e
        }
          , Pw = function() {
            function t(t) {
                var o, a, u = n.apply(this, arguments), s = t.length, c = u.length, f = new Array(c);
                for (o = 0; o < c; ++o) {
                    for (var l, h = u[o], p = f[o] = new Array(s), d = 0; d < s; ++d)
                        p[d] = l = [0, +i(t[d], h, d, t)],
                        l.data = t[d];
                    p.key = h
                }
                for (o = 0,
                a = e(f); o < c; ++o)
                    f[a[o]].index = o;
                return r(f, a),
                f
            }
            var n = Ex([])
              , e = Rw
              , r = Ow
              , i = Ws;
            return t.keys = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ex(Nw.call(e)),
                t) : n
            }
            ,
            t.value = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : Ex(+n),
                t) : i
            }
            ,
            t.order = function(n) {
                return arguments.length ? (e = null == n ? Rw : "function" == typeof n ? n : Ex(Nw.call(n)),
                t) : e
            }
            ,
            t.offset = function(n) {
                return arguments.length ? (r = null == n ? Ow : n,
                t) : r
            }
            ,
            t
        }
          , Lw = function(t, n) {
            if ((r = t.length) > 0) {
                for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
                    for (i = e = 0; e < r; ++e)
                        i += t[e][o][1] || 0;
                    if (i)
                        for (e = 0; e < r; ++e)
                            t[e][o][1] /= i
                }
                Ow(t, n)
            }
        }
          , zw = function(t, n) {
            if ((e = t.length) > 0) {
                for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                    for (var a = 0, u = 0; a < e; ++a)
                        u += t[a][r][1] || 0;
                    i[r][1] += i[r][0] = -u / 2
                }
                Ow(t, n)
            }
        }
          , Iw = function(t, n) {
            if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                for (var e, r, i, o = 0, a = 1; a < r; ++a) {
                    for (var u = 0, s = 0, c = 0; u < i; ++u) {
                        for (var f = t[n[u]], l = f[a][1] || 0, h = f[a - 1][1] || 0, p = (l - h) / 2, d = 0; d < u; ++d) {
                            var v = t[n[d]];
                            p += (v[a][1] || 0) - (v[a - 1][1] || 0)
                        }
                        s += l,
                        c += p * l
                    }
                    e[a - 1][1] += e[a - 1][0] = o,
                    s && (o -= c / s)
                }
                e[a - 1][1] += e[a - 1][0] = o,
                Ow(t, n)
            }
        }
          , jw = function(t) {
            var n = t.map(Vs);
            return Rw(t).sort(function(t, e) {
                return n[t] - n[e]
            })
        }
          , Uw = function(t) {
            return jw(t).reverse()
        }
          , Dw = function(t) {
            var n, e, r = t.length, i = t.map(Vs), o = Rw(t).sort(function(t, n) {
                return i[n] - i[t]
            }), a = 0, u = 0, s = [], c = [];
            for (n = 0; n < r; ++n)
                e = o[n],
                a < u ? (a += i[e],
                s.push(e)) : (u += i[e],
                c.push(e));
            return c.reverse().concat(s)
        }
          , $w = function(t) {
            return Rw(t).reverse()
        }
          , Bw = function(t) {
            return function() {
                return t
            }
        };
        Zs.prototype = {
            constructor: Zs,
            insert: function(t, n) {
                var e, r, i;
                if (t) {
                    if (n.P = t,
                    n.N = t.N,
                    t.N && (t.N.P = n),
                    t.N = n,
                    t.R) {
                        for (t = t.R; t.L; )
                            t = t.L;
                        t.L = n
                    } else
                        t.R = n;
                    e = t
                } else
                    this._ ? (t = tc(this._),
                    n.P = null,
                    n.N = t,
                    t.P = t.L = n,
                    e = t) : (n.P = n.N = null,
                    this._ = n,
                    e = null);
                for (n.L = n.R = null,
                n.U = e,
                n.C = !0,
                t = n; e && e.C; )
                    r = e.U,
                    e === r.L ? (i = r.R,
                    i && i.C ? (e.C = i.C = !1,
                    r.C = !0,
                    t = r) : (t === e.R && (Qs(this, e),
                    t = e,
                    e = t.U),
                    e.C = !1,
                    r.C = !0,
                    Js(this, r))) : (i = r.L,
                    i && i.C ? (e.C = i.C = !1,
                    r.C = !0,
                    t = r) : (t === e.L && (Js(this, e),
                    t = e,
                    e = t.U),
                    e.C = !1,
                    r.C = !0,
                    Qs(this, r))),
                    e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P),
                t.P && (t.P.N = t.N),
                t.N = t.P = null;
                var n, e, r, i = t.U, o = t.L, a = t.R;
                if (e = o ? a ? tc(a) : o : a,
                i ? i.L === t ? i.L = e : i.R = e : this._ = e,
                o && a ? (r = e.C,
                e.C = t.C,
                e.L = o,
                o.U = e,
                e !== a ? (i = e.U,
                e.U = t.U,
                t = e.R,
                i.L = t,
                e.R = a,
                a.U = e) : (e.U = i,
                i = e,
                t = e.R)) : (r = t.C,
                t = e),
                t && (t.U = i),
                !r) {
                    if (t && t.C)
                        return void (t.C = !1);
                    do {
                        if (t === this._)
                            break;
                        if (t === i.L) {
                            if (n = i.R,
                            n.C && (n.C = !1,
                            i.C = !0,
                            Qs(this, i),
                            n = i.R),
                            n.L && n.L.C || n.R && n.R.C) {
                                n.R && n.R.C || (n.L.C = !1,
                                n.C = !0,
                                Js(this, n),
                                n = i.R),
                                n.C = i.C,
                                i.C = n.R.C = !1,
                                Qs(this, i),
                                t = this._;
                                break
                            }
                        } else if (n = i.L,
                        n.C && (n.C = !1,
                        i.C = !0,
                        Js(this, i),
                        n = i.L),
                        n.L && n.L.C || n.R && n.R.C) {
                            n.L && n.L.C || (n.R.C = !1,
                            n.C = !0,
                            Qs(this, n),
                            n = i.L),
                            n.C = i.C,
                            i.C = n.L.C = !1,
                            Js(this, i),
                            t = this._;
                            break
                        }
                        n.C = !0,
                        t = i,
                        i = i.U
                    } while (!t.C);t && (t.C = !1)
                }
            }
        };
        var Fw, qw, Yw, Hw, Ww, Vw = [], Xw = [], Gw = 1e-6, Zw = 1e-12;
        Sc.prototype = {
            constructor: Sc,
            polygons: function() {
                var t = this.edges;
                return this.cells.map(function(n) {
                    var e = n.halfedges.map(function(e) {
                        return cc(n, t[e])
                    });
                    return e.data = n.site.data,
                    e
                })
            },
            triangles: function() {
                var t = []
                  , n = this.edges;
                return this.cells.forEach(function(e, r) {
                    if (o = (i = e.halfedges).length)
                        for (var i, o, a, u = e.site, s = -1, c = n[i[o - 1]], f = c.left === u ? c.right : c.left; ++s < o; )
                            a = f,
                            c = n[i[s]],
                            f = c.left === u ? c.right : c.left,
                            a && f && r < a.index && r < f.index && Mc(u, a, f) < 0 && t.push([u.data, a.data, f.data])
                }),
                t
            },
            links: function() {
                return this.edges.filter(function(t) {
                    return t.right
                }).map(function(t) {
                    return {
                        source: t.left.data,
                        target: t.right.data
                    }
                })
            },
            find: function(t, n, e) {
                for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]); )
                    if (++a >= u)
                        return null;
                var s = t - i.site[0]
                  , c = n - i.site[1]
                  , f = s * s + c * c;
                do {
                    i = o.cells[r = a],
                    a = null,
                    i.halfedges.forEach(function(e) {
                        var r = o.edges[e]
                          , u = r.left;
                        if (u !== i.site && u || (u = r.right)) {
                            var s = t - u[0]
                              , c = n - u[1]
                              , l = s * s + c * c;
                            l < f && (f = l,
                            a = u.index)
                        }
                    })
                } while (null !== a);return o._found = r,
                null == e || f <= e * e ? i.site : null
            }
        };
        var Kw = function() {
            function t(t) {
                return new Sc(t.map(function(r, i) {
                    var o = [Math.round(n(r, i, t) / Gw) * Gw, Math.round(e(r, i, t) / Gw) * Gw];
                    return o.index = i,
                    o.data = r,
                    o
                }),r)
            }
            var n = Xs
              , e = Gs
              , r = null;
            return t.polygons = function(n) {
                return t(n).polygons()
            }
            ,
            t.links = function(n) {
                return t(n).links()
            }
            ,
            t.triangles = function(n) {
                return t(n).triangles()
            }
            ,
            t.x = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Bw(+e),
                t) : n
            }
            ,
            t.y = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Bw(+n),
                t) : e
            }
            ,
            t.extent = function(n) {
                return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]],
                t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
            }
            ,
            t.size = function(n) {
                return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]],
                t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
            }
            ,
            t
        }
          , Qw = function(t) {
            return function() {
                return t
            }
        };
        Cc.prototype = {
            constructor: Cc,
            scale: function(t) {
                return 1 === t ? this : new Cc(this.k * t,this.x,this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new Cc(this.k,this.x + this.k * t,this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var Jw = new Cc(1,0,0);
        Ec.prototype = Cc.prototype;
        var tM = function() {
            t.event.preventDefault(),
            t.event.stopImmediatePropagation()
        }
          , nM = function() {
            function n(t) {
                t.on("wheel.zoom", c).on("mousedown.zoom", f).on("dblclick.zoom", l).on("touchstart.zoom", h).on("touchmove.zoom", p).on("touchend.zoom touchcancel.zoom", v).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", Rc)
            }
            function e(t, n) {
                return n = Math.max(b, Math.min(x, n)),
                n === t.k ? t : new Cc(n,t.x,t.y)
            }
            function r(t, n, e) {
                var r = n[0] - e[0] * t.k
                  , i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new Cc(t.k,r,i)
            }
            function i(t, n) {
                var e = t.invertX(n[0][0]) - w
                  , r = t.invertX(n[1][0]) - M
                  , i = t.invertY(n[0][1]) - A
                  , o = t.invertY(n[1][1]) - S;
                return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o))
            }
            function o(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }
            function a(t, n, e) {
                t.on("start.zoom", function() {
                    u(this, arguments).start()
                }).on("interrupt.zoom end.zoom", function() {
                    u(this, arguments).end()
                }).tween("zoom", function() {
                    var t = this
                      , r = arguments
                      , i = u(t, r)
                      , a = m.apply(t, r)
                      , s = e || o(a)
                      , c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1])
                      , f = t.__zoom
                      , l = "function" == typeof n ? n.apply(t, r) : n
                      , h = C(f.invert(s).concat(c / f.k), l.invert(s).concat(c / l.k));
                    return function(t) {
                        if (1 === t)
                            t = l;
                        else {
                            var n = h(t)
                              , e = c / n[2];
                            t = new Cc(e,s[0] - n[0] * e,s[1] - n[1] * e)
                        }
                        i.zoom(null, t)
                    }
                })
            }
            function u(t, n) {
                for (var e, r = 0, i = T.length; r < i; ++r)
                    if ((e = T[r]).that === t)
                        return e;
                return new s(t,n)
            }
            function s(t, n) {
                this.that = t,
                this.args = n,
                this.index = -1,
                this.active = 0,
                this.extent = m.apply(t, n)
            }
            function c() {
                function n() {
                    o.wheel = null,
                    o.end()
                }
                if (_.apply(this, arguments)) {
                    var o = u(this, arguments)
                      , a = this.__zoom
                      , s = Math.max(b, Math.min(x, a.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500)))
                      , c = $f(this);
                    if (o.wheel)
                        o.mouse[0][0] === c[0] && o.mouse[0][1] === c[1] || (o.mouse[1] = a.invert(o.mouse[0] = c)),
                        clearTimeout(o.wheel);
                    else {
                        if (a.k === s)
                            return;
                        o.mouse = [c, a.invert(c)],
                        dp(this),
                        o.start()
                    }
                    tM(),
                    o.wheel = setTimeout(n, R),
                    o.zoom("mouse", i(r(e(a, s), o.mouse[0], o.mouse[1]), o.extent))
                }
            }
            function f() {
                function n() {
                    tM(),
                    o.moved = !0,
                    o.zoom("mouse", i(r(o.that.__zoom, o.mouse[0] = $f(o.that), o.mouse[1]), o.extent))
                }
                function e() {
                    a.on("mousemove.zoom mouseup.zoom", null),
                    yt(t.event.view, o.moved),
                    tM(),
                    o.end()
                }
                if (!y && _.apply(this, arguments)) {
                    var o = u(this, arguments)
                      , a = wl(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0)
                      , s = $f(this);
                    Cl(t.event.view),
                    Tc(),
                    o.mouse = [s, this.__zoom.invert(s)],
                    dp(this),
                    o.start()
                }
            }
            function l() {
                if (_.apply(this, arguments)) {
                    var o = this.__zoom
                      , u = $f(this)
                      , s = o.invert(u)
                      , c = o.k * (t.event.shiftKey ? .5 : 2)
                      , f = i(r(e(o, c), u, s), m.apply(this, arguments));
                    tM(),
                    k > 0 ? wl(this).transition().duration(k).call(a, f, u) : wl(this).call(n.transform, f)
                }
            }
            function h() {
                if (_.apply(this, arguments)) {
                    var n, e, r, i, o = u(this, arguments), a = t.event.changedTouches, s = a.length;
                    for (Tc(),
                    e = 0; e < s; ++e)
                        r = a[e],
                        i = Al(this, a, r.identifier),
                        i = [i, this.__zoom.invert(i), r.identifier],
                        o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i,
                        n = !0);
                    if (g && (g = clearTimeout(g),
                    !o.touch1))
                        return o.end(),
                        void ((i = wl(this).on("dblclick.zoom")) && i.apply(this, arguments));
                    n && (g = setTimeout(function() {
                        g = null
                    }, O),
                    dp(this),
                    o.start())
                }
            }
            function p() {
                var n, o, a, s, c = u(this, arguments), f = t.event.changedTouches, l = f.length;
                for (tM(),
                g && (g = clearTimeout(g)),
                n = 0; n < l; ++n)
                    o = f[n],
                    a = Al(this, f, o.identifier),
                    c.touch0 && c.touch0[2] === o.identifier ? c.touch0[0] = a : c.touch1 && c.touch1[2] === o.identifier && (c.touch1[0] = a);
                if (o = c.that.__zoom,
                c.touch1) {
                    var h = c.touch0[0]
                      , p = c.touch0[1]
                      , d = c.touch1[0]
                      , v = c.touch1[1]
                      , y = (y = d[0] - h[0]) * y + (y = d[1] - h[1]) * y
                      , _ = (_ = v[0] - p[0]) * _ + (_ = v[1] - p[1]) * _;
                    o = e(o, Math.sqrt(y / _)),
                    a = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2],
                    s = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]
                } else {
                    if (!c.touch0)
                        return;
                    a = c.touch0[0],
                    s = c.touch0[1]
                }
                c.zoom("touch", i(r(o, a, s), c.extent))
            }
            function v() {
                var n, e, r = u(this, arguments), i = t.event.changedTouches, o = i.length;
                for (Tc(),
                y && clearTimeout(y),
                y = setTimeout(function() {
                    y = null
                }, O),
                n = 0; n < o; ++n)
                    e = i[n],
                    r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                r.touch1 && !r.touch0 && (r.touch0 = r.touch1,
                delete r.touch1),
                r.touch0 || r.end()
            }
            var g, y, _ = Nc, m = Oc, b = 0, x = 1 / 0, w = -x, M = x, A = w, S = M, k = 250, C = Dh, T = [], N = d("start", "zoom", "end"), O = 500, R = 150;
            return n.transform = function(t, n) {
                var e = t.selection ? t.selection() : t;
                e.property("__zoom", Rc),
                t !== e ? a(t, n) : e.interrupt().each(function() {
                    u(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                })
            }
            ,
            n.scaleBy = function(t, e) {
                n.scaleTo(t, function() {
                    return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
                })
            }
            ,
            n.scaleTo = function(t, a) {
                n.transform(t, function() {
                    var t = m.apply(this, arguments)
                      , n = this.__zoom
                      , u = o(t)
                      , s = n.invert(u);
                    return i(r(e(n, "function" == typeof a ? a.apply(this, arguments) : a), u, s), t)
                })
            }
            ,
            n.translateBy = function(t, e, r) {
                n.transform(t, function() {
                    return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), m.apply(this, arguments))
                })
            }
            ,
            s.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.index = T.push(this) - 1,
                    this.emit("start")),
                    this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                    this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                    this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                    this.that.__zoom = n,
                    this.emit("zoom"),
                    this
                },
                end: function() {
                    return 0 == --this.active && (T.splice(this.index, 1),
                    this.index = -1,
                    this.emit("end")),
                    this
                },
                emit: function(t) {
                    E(new kc(n,t,this.that.__zoom), N.apply, N, [t, this.that, this.args])
                }
            },
            n.filter = function(t) {
                return arguments.length ? (_ = "function" == typeof t ? t : Qw(!!t),
                n) : _
            }
            ,
            n.extent = function(t) {
                return arguments.length ? (m = "function" == typeof t ? t : Qw([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
                n) : m
            }
            ,
            n.scaleExtent = function(t) {
                return arguments.length ? (b = +t[0],
                x = +t[1],
                n) : [b, x]
            }
            ,
            n.translateExtent = function(t) {
                return arguments.length ? (w = +t[0][0],
                M = +t[1][0],
                A = +t[0][1],
                S = +t[1][1],
                n) : [[w, A], [M, S]]
            }
            ,
            n.duration = function(t) {
                return arguments.length ? (k = +t,
                n) : k
            }
            ,
            n.interpolate = function(t) {
                return arguments.length ? (C = t,
                n) : C
            }
            ,
            n.on = function() {
                var t = N.on.apply(N, arguments);
                return t === N ? n : t
            }
            ,
            n
        };
        t.version = Pc,
        t.bisect = jc,
        t.bisectRight = jc,
        t.bisectLeft = Uc,
        t.ascending = Lc,
        t.bisector = zc,
        t.cross = $c,
        t.descending = Bc,
        t.deviation = Yc,
        t.extent = Hc,
        t.histogram = rf,
        t.thresholdFreedmanDiaconis = af,
        t.thresholdScott = uf,
        t.thresholdSturges = ef,
        t.max = sf,
        t.mean = cf,
        t.median = ff,
        t.merge = lf,
        t.min = hf,
        t.pairs = Dc,
        t.permute = pf,
        t.quantile = of,
        t.range = Kc,
        t.scan = df,
        t.shuffle = vf,
        t.sum = gf,
        t.ticks = nf,
        t.tickStep = r,
        t.transpose = yf,
        t.variance = qc,
        t.zip = _f,
        t.axisTop = f,
        t.axisRight = l,
        t.axisBottom = h,
        t.axisLeft = p,
        t.brush = Ed,
        t.brushX = Te,
        t.brushY = Ne,
        t.brushSelection = Ee,
        t.chord = zd,
        t.ribbon = Fd,
        t.nest = Yd,
        t.set = Ve,
        t.map = Be,
        t.keys = Wd,
        t.values = Vd,
        t.entries = Xd,
        t.color = At,
        t.rgb = Et,
        t.hsl = Rt,
        t.lab = It,
        t.hcl = qt,
        t.cubehelix = Wt,
        t.dispatch = d,
        t.drag = Tl,
        t.dragDisable = Cl,
        t.dragEnable = yt,
        t.dsvFormat = Gd,
        t.csvParse = Kd,
        t.csvParseRows = Qd,
        t.csvFormat = Jd,
        t.csvFormatRows = tv,
        t.tsvParse = ev,
        t.tsvParseRows = rv,
        t.tsvFormat = iv,
        t.tsvFormatRows = ov,
        t.easeLinear = ee,
        t.easeQuad = oe,
        t.easeQuadIn = re,
        t.easeQuadOut = ie,
        t.easeQuadInOut = oe,
        t.easeCubic = se,
        t.easeCubicIn = ae,
        t.easeCubicOut = ue,
        t.easeCubicInOut = se,
        t.easePoly = $p,
        t.easePolyIn = Up,
        t.easePolyOut = Dp,
        t.easePolyInOut = $p,
        t.easeSin = le,
        t.easeSinIn = ce,
        t.easeSinOut = fe,
        t.easeSinInOut = le,
        t.easeExp = de,
        t.easeExpIn = he,
        t.easeExpOut = pe,
        t.easeExpInOut = de,
        t.easeCircle = ye,
        t.easeCircleIn = ve,
        t.easeCircleOut = ge,
        t.easeCircleInOut = ye,
        t.easeBounce = me,
        t.easeBounceIn = _e,
        t.easeBounceOut = me,
        t.easeBounceInOut = be,
        t.easeBack = ed,
        t.easeBackIn = td,
        t.easeBackOut = nd,
        t.easeBackInOut = ed,
        t.easeElastic = ud,
        t.easeElasticIn = ad,
        t.easeElasticOut = ud,
        t.easeElasticInOut = sd,
        t.forceCenter = av,
        t.forceCollide = Av,
        t.forceLink = Sv,
        t.forceManyBody = Tv,
        t.forceSimulation = Ev,
        t.forceX = Nv,
        t.forceY = Ov,
        t.formatDefaultLocale = pr,
        t.formatLocale = Yv,
        t.formatSpecifier = lr,
        t.precisionFixed = Hv,
        t.precisionPrefix = Wv,
        t.precisionRound = Vv,
        t.geoArea = Jg,
        t.geoBounds = ey,
        t.geoCentroid = iy,
        t.geoCircle = my,
        t.geoClipExtent = ky,
        t.geoContains = jy,
        t.geoDistance = Ly,
        t.geoGraticule = wi,
        t.geoGraticule10 = Mi,
        t.geoInterpolate = Uy,
        t.geoLength = Oy,
        t.geoPath = l_,
        t.geoAlbers = x_,
        t.geoAlbersUsa = w_,
        t.geoAzimuthalEqualArea = A_,
        t.geoAzimuthalEqualAreaRaw = M_,
        t.geoAzimuthalEquidistant = k_,
        t.geoAzimuthalEquidistantRaw = S_,
        t.geoConicConformal = E_,
        t.geoConicConformalRaw = lo,
        t.geoConicEqualArea = b_,
        t.geoConicEqualAreaRaw = io,
        t.geoConicEquidistant = N_,
        t.geoConicEquidistantRaw = po,
        t.geoEquirectangular = T_,
        t.geoEquirectangularRaw = ho,
        t.geoGnomonic = O_,
        t.geoGnomonicRaw = vo,
        t.geoIdentity = R_,
        t.geoProjection = to,
        t.geoProjectionMutator = no,
        t.geoMercator = C_,
        t.geoMercatorRaw = so,
        t.geoOrthographic = P_,
        t.geoOrthographicRaw = yo,
        t.geoStereographic = L_,
        t.geoStereographicRaw = _o,
        t.geoTransverseMercator = z_,
        t.geoTransverseMercatorRaw = mo,
        t.geoRotation = _y,
        t.geoStream = Gg,
        t.geoTransform = v_,
        t.cluster = I_,
        t.hierarchy = To,
        t.pack = Q_,
        t.packSiblings = Z_,
        t.packEnclose = G_,
        t.partition = nm,
        t.stratify = om,
        t.tree = am,
        t.treemap = fm,
        t.treemapBinary = lm,
        t.treemapDice = tm,
        t.treemapSlice = um,
        t.treemapSliceDice = hm,
        t.treemapSquarify = cm,
        t.treemapResquarify = pm,
        t.interpolate = Eh,
        t.interpolateArray = xh,
        t.interpolateBasis = vh,
        t.interpolateBasisClosed = gh,
        t.interpolateDate = wh,
        t.interpolateNumber = Mh,
        t.interpolateObject = Ah,
        t.interpolateRound = Th,
        t.interpolateString = Ch,
        t.interpolateTransformCss = Ph,
        t.interpolateTransformSvg = Lh,
        t.interpolateZoom = Dh,
        t.interpolateRgb = _h,
        t.interpolateRgbBasis = mh,
        t.interpolateRgbBasisClosed = bh,
        t.interpolateHsl = $h,
        t.interpolateHslLong = Bh,
        t.interpolateLab = ln,
        t.interpolateHcl = Fh,
        t.interpolateHclLong = qh,
        t.interpolateCubehelix = Yh,
        t.interpolateCubehelixLong = Hh,
        t.quantize = Wh,
        t.path = Le,
        t.polygonArea = dm,
        t.polygonCentroid = vm,
        t.polygonHull = ym;
        t.polygonContains = _m,
        t.polygonLength = mm,
        t.quadtree = er,
        t.queue = _a,
        t.randomUniform = wm,
        t.randomNormal = Mm,
        t.randomLogNormal = Am,
        t.randomBates = km,
        t.randomIrwinHall = Sm,
        t.randomExponential = Cm,
        t.request = Em,
        t.html = Nm,
        t.json = Om,
        t.text = Rm,
        t.xml = Pm,
        t.csv = zm,
        t.tsv = Im,
        t.scaleBand = Ma,
        t.scalePoint = Sa,
        t.scaleIdentity = za,
        t.scaleLinear = La,
        t.scaleLog = Fa,
        t.scaleOrdinal = wa,
        t.scaleImplicit = $m,
        t.scalePow = Ya,
        t.scaleSqrt = Ha,
        t.scaleQuantile = Wa,
        t.scaleQuantize = Va,
        t.scaleThreshold = Xa,
        t.scaleTime = hx,
        t.scaleUtc = px,
        t.schemeCategory10 = vx,
        t.schemeCategory20b = gx,
        t.schemeCategory20c = yx,
        t.schemeCategory20 = _x,
        t.interpolateCubehelixDefault = mx,
        t.interpolateRainbow = Mx,
        t.interpolateWarm = bx,
        t.interpolateCool = xx,
        t.interpolateViridis = Ax,
        t.interpolateMagma = Sx,
        t.interpolateInferno = kx,
        t.interpolatePlasma = Cx,
        t.scaleSequential = es,
        t.creator = Nf,
        t.local = x,
        t.matcher = zf,
        t.mouse = $f,
        t.namespace = Tf,
        t.namespaces = Ef,
        t.select = wl,
        t.selectAll = Ml,
        t.selection = vt,
        t.selector = Bf,
        t.selectorAll = qf,
        t.touch = Al,
        t.touches = Sl,
        t.window = sl,
        t.customEvent = E,
        t.arc = $x,
        t.area = qx,
        t.line = Fx,
        t.pie = Wx,
        t.radialArea = Gx,
        t.radialLine = Xx,
        t.symbol = vw,
        t.symbols = dw,
        t.symbolCircle = Zx,
        t.symbolCross = Kx,
        t.symbolDiamond = tw,
        t.symbolSquare = aw,
        t.symbolStar = ow,
        t.symbolTriangle = sw,
        t.symbolWye = pw,
        t.curveBasisClosed = _w,
        t.curveBasisOpen = mw,
        t.curveBasis = yw,
        t.curveBundle = bw,
        t.curveCardinalClosed = ww,
        t.curveCardinalOpen = Mw,
        t.curveCardinal = xw,
        t.curveCatmullRomClosed = Sw,
        t.curveCatmullRomOpen = kw,
        t.curveCatmullRom = Aw,
        t.curveLinearClosed = Cw,
        t.curveLinear = Bx,
        t.curveMonotoneX = Ds,
        t.curveMonotoneY = $s,
        t.curveNatural = Ew,
        t.curveStep = Tw,
        t.curveStepAfter = Hs,
        t.curveStepBefore = Ys,
        t.stack = Pw,
        t.stackOffsetExpand = Lw,
        t.stackOffsetNone = Ow,
        t.stackOffsetSilhouette = zw,
        t.stackOffsetWiggle = Iw,
        t.stackOrderAscending = jw,
        t.stackOrderDescending = Uw,
        t.stackOrderInsideOut = Dw,
        t.stackOrderNone = Rw,
        t.stackOrderReverse = $w,
        t.timeInterval = Ga,
        t.timeMillisecond = Xm,
        t.timeMilliseconds = Gm,
        t.utcMillisecond = Xm,
        t.utcMilliseconds = Gm,
        t.timeSecond = nb,
        t.timeSeconds = eb,
        t.utcSecond = nb,
        t.utcSeconds = eb,
        t.timeMinute = rb,
        t.timeMinutes = ib,
        t.timeHour = ob,
        t.timeHours = ab,
        t.timeDay = ub,
        t.timeDays = sb,
        t.timeWeek = cb,
        t.timeWeeks = gb,
        t.timeSunday = cb,
        t.timeSundays = gb,
        t.timeMonday = fb,
        t.timeMondays = yb,
        t.timeTuesday = lb,
        t.timeTuesdays = _b,
        t.timeWednesday = hb,
        t.timeWednesdays = mb,
        t.timeThursday = pb,
        t.timeThursdays = bb,
        t.timeFriday = db,
        t.timeFridays = xb,
        t.timeSaturday = vb,
        t.timeSaturdays = wb,
        t.timeMonth = Mb,
        t.timeMonths = Ab,
        t.timeYear = Sb,
        t.timeYears = kb,
        t.utcMinute = Cb,
        t.utcMinutes = Eb,
        t.utcHour = Tb,
        t.utcHours = Nb,
        t.utcDay = Ob,
        t.utcDays = Rb,
        t.utcWeek = Pb,
        t.utcWeeks = $b,
        t.utcSunday = Pb,
        t.utcSundays = $b,
        t.utcMonday = Lb,
        t.utcMondays = Bb,
        t.utcTuesday = zb,
        t.utcTuesdays = Fb,
        t.utcWednesday = Ib,
        t.utcWednesdays = qb,
        t.utcThursday = jb,
        t.utcThursdays = Yb,
        t.utcFriday = Ub,
        t.utcFridays = Hb,
        t.utcSaturday = Db,
        t.utcSaturdays = Wb,
        t.utcMonth = Vb,
        t.utcMonths = Xb,
        t.utcYear = Gb,
        t.utcYears = Kb,
        t.timeFormatDefaultLocale = Gu,
        t.timeFormatLocale = nu,
        t.isoFormat = rx,
        t.isoParse = ix,
        t.now = dn,
        t.timer = yn,
        t.timerFlush = _n,
        t.timeout = ep,
        t.interval = rp,
        t.transition = te,
        t.active = hd,
        t.interrupt = dp,
        t.voronoi = Kw,
        t.zoom = nM,
        t.zoomTransform = Ec,
        t.zoomIdentity = Jw,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}
, function(t, n) {
    t.exports = function(t, n, e, r) {
        var i, o = t = t || {}, a = typeof t.default;
        "object" !== a && "function" !== a || (i = t,
        o = t.default);
        var u = "function" == typeof o ? o.options : o;
        if (n && (u.render = n.render,
        u.staticRenderFns = n.staticRenderFns),
        e && (u._scopeId = e),
        r) {
            var s = Object.create(u.computed || null);
            Object.keys(r).forEach(function(t) {
                var n = r[t];
                s[t] = function() {
                    return n
                }
            }),
            u.computed = s
        }
        return {
            esModule: i,
            exports: o,
            options: u
        }
    }
}
, function(t, n, e) {
    function r(t) {
        for (var n = 0; n < t.length; n++) {
            var e = t[n]
              , r = f[e.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++)
                    r.parts[i](e.parts[i]);
                for (; i < e.parts.length; i++)
                    r.parts.push(o(e.parts[i]));
                r.parts.length > e.parts.length && (r.parts.length = e.parts.length)
            } else {
                for (var a = [], i = 0; i < e.parts.length; i++)
                    a.push(o(e.parts[i]));
                f[e.id] = {
                    id: e.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function i() {
        var t = document.createElement("style");
        return t.type = "text/css",
        l.appendChild(t),
        t
    }
    function o(t) {
        var n, e, r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
        if (r) {
            if (d)
                return v;
            r.parentNode.removeChild(r)
        }
        if (g) {
            var o = p++;
            r = h || (h = i()),
            n = a.bind(null, r, o, !1),
            e = a.bind(null, r, o, !0)
        } else
            r = i(),
            n = u.bind(null, r),
            e = function() {
                r.parentNode.removeChild(r)
            }
            ;
        return n(t),
        function(r) {
            if (r) {
                if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap)
                    return;
                n(t = r)
            } else
                e()
        }
    }
    function a(t, n, e, r) {
        var i = e ? "" : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = y(n, i);
        else {
            var o = document.createTextNode(i)
              , a = t.childNodes;
            a[n] && t.removeChild(a[n]),
            a.length ? t.insertBefore(o, a[n]) : t.appendChild(o)
        }
    }
    function u(t, n) {
        var e = n.css
          , r = n.media
          , i = n.sourceMap;
        if (r && t.setAttribute("media", r),
        i && (e += "\n/*# sourceURL=" + i.sources[0] + " */",
        e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
        t.styleSheet)
            t.styleSheet.cssText = e;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e))
        }
    }
    var s = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !s)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var c = e(30)
      , f = {}
      , l = s && (document.head || document.getElementsByTagName("head")[0])
      , h = null
      , p = 0
      , d = !1
      , v = function() {}
      , g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function(t, n, e) {
        d = e;
        var i = c(t, n);
        return r(i),
        function(n) {
            for (var e = [], o = 0; o < i.length; o++) {
                var a = i[o]
                  , u = f[a.id];
                u.refs--,
                e.push(u)
            }
            n ? (i = c(t, n),
            r(i)) : i = [];
            for (var o = 0; o < e.length; o++) {
                var u = e[o];
                if (0 === u.refs) {
                    for (var s = 0; s < u.parts.length; s++)
                        u.parts[s]();
                    delete f[u.id]
                }
            }
        }
    }
    ;
    var y = function() {
        var t = [];
        return function(n, e) {
            return t[n] = e,
            t.filter(Boolean).join("\n")
        }
    }()
}
, function(t, n) {
    var e;
    e = function() {
        return this
    }();
    try {
        e = e || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (e = window)
    }
    t.exports = e
}
, function(t, n) {}
, function(t, n, e) {
    e(27);
    var r = e(4)(e(10), e(24), null, null);
    t.exports = r.exports
}
, function(t, n, e) {
    "use strict";
    (function(t) {
        /*!
 * Vue.js v2.2.4
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
        function e(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
        }
        function r(t) {
            var n = parseFloat(t);
            return isNaN(n) ? t : n
        }
        function i(t, n) {
            for (var e = Object.create(null), r = t.split(","), i = 0; i < r.length; i++)
                e[r[i]] = !0;
            return n ? function(t) {
                return e[t.toLowerCase()]
            }
            : function(t) {
                return e[t]
            }
        }
        function o(t, n) {
            if (t.length) {
                var e = t.indexOf(n);
                if (e > -1)
                    return t.splice(e, 1)
            }
        }
        function a(t, n) {
            return He.call(t, n)
        }
        function u(t) {
            return "string" == typeof t || "number" == typeof t
        }
        function s(t) {
            var n = Object.create(null);
            return function(e) {
                return n[e] || (n[e] = t(e))
            }
        }
        function c(t, n) {
            function e(e) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(n, arguments) : t.call(n, e) : t.call(n)
            }
            return e._length = t.length,
            e
        }
        function f(t, n) {
            n = n || 0;
            for (var e = t.length - n, r = new Array(e); e--; )
                r[e] = t[e + n];
            return r
        }
        function l(t, n) {
            for (var e in n)
                t[e] = n[e];
            return t
        }
        function h(t) {
            return null !== t && "object" == typeof t
        }
        function p(t) {
            return Ke.call(t) === Qe
        }
        function d(t) {
            for (var n = {}, e = 0; e < t.length; e++)
                t[e] && l(n, t[e]);
            return n
        }
        function v() {}
        function g(t, n) {
            var e = h(t)
              , r = h(n);
            if (!e || !r)
                return !e && !r && String(t) === String(n);
            try {
                return JSON.stringify(t) === JSON.stringify(n)
            } catch (e) {
                return t === n
            }
        }
        function y(t, n) {
            for (var e = 0; e < t.length; e++)
                if (g(t[e], n))
                    return e;
            return -1
        }
        function _(t) {
            var n = !1;
            return function() {
                n || (n = !0,
                t())
            }
        }
        function m(t) {
            var n = (t + "").charCodeAt(0);
            return 36 === n || 95 === n
        }
        function b(t, n, e, r) {
            Object.defineProperty(t, n, {
                value: e,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        function x(t) {
            if (!rr.test(t)) {
                var n = t.split(".");
                return function(t) {
                    for (var e = 0; e < n.length; e++) {
                        if (!t)
                            return;
                        t = t[n[e]]
                    }
                    return t
                }
            }
        }
        function w(t) {
            return /native code/.test(t.toString())
        }
        function M(t) {
            mr.target && br.push(mr.target),
            mr.target = t
        }
        function A() {
            mr.target = br.pop()
        }
        function S(t, n) {
            t.__proto__ = n
        }
        function k(t, n, e) {
            for (var r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                b(t, o, n[o])
            }
        }
        function C(t, n) {
            if (h(t)) {
                var e;
                return a(t, "__ob__") && t.__ob__ instanceof Sr ? e = t.__ob__ : Ar.shouldConvert && !pr() && (Array.isArray(t) || p(t)) && Object.isExtensible(t) && !t._isVue && (e = new Sr(t)),
                n && e && e.vmCount++,
                e
            }
        }
        function E(t, n, e, r) {
            var i = new mr
              , o = Object.getOwnPropertyDescriptor(t, n);
            if (!o || o.configurable !== !1) {
                var a = o && o.get
                  , u = o && o.set
                  , s = C(e);
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var n = a ? a.call(t) : e;
                        return mr.target && (i.depend(),
                        s && s.dep.depend(),
                        Array.isArray(n) && O(n)),
                        n
                    },
                    set: function(n) {
                        var r = a ? a.call(t) : e;
                        n === r || n !== n && r !== r || (u ? u.call(t, n) : e = n,
                        s = C(n),
                        i.notify())
                    }
                })
            }
        }
        function T(t, n, e) {
            if (Array.isArray(t))
                return t.length = Math.max(t.length, n),
                t.splice(n, 1, e),
                e;
            if (a(t, n))
                return t[n] = e,
                e;
            var r = t.__ob__;
            return t._isVue || r && r.vmCount ? e : r ? (E(r.value, n, e),
            r.dep.notify(),
            e) : (t[n] = e,
            e)
        }
        function N(t, n) {
            if (Array.isArray(t))
                return void t.splice(n, 1);
            var e = t.__ob__;
            t._isVue || e && e.vmCount || a(t, n) && (delete t[n],
            e && e.dep.notify())
        }
        function O(t) {
            for (var n = void 0, e = 0, r = t.length; e < r; e++)
                n = t[e],
                n && n.__ob__ && n.__ob__.dep.depend(),
                Array.isArray(n) && O(n)
        }
        function R(t, n) {
            if (!n)
                return t;
            for (var e, r, i, o = Object.keys(n), u = 0; u < o.length; u++)
                e = o[u],
                r = t[e],
                i = n[e],
                a(t, e) ? p(r) && p(i) && R(r, i) : T(t, e, i);
            return t
        }
        function P(t, n) {
            return n ? t ? t.concat(n) : Array.isArray(n) ? n : [n] : t
        }
        function L(t, n) {
            var e = Object.create(t || null);
            return n ? l(e, n) : e
        }
        function z(t) {
            var n = t.props;
            if (n) {
                var e, r, i, o = {};
                if (Array.isArray(n))
                    for (e = n.length; e--; )
                        "string" == typeof (r = n[e]) && (i = Ve(r),
                        o[i] = {
                            type: null
                        });
                else if (p(n))
                    for (var a in n)
                        r = n[a],
                        i = Ve(a),
                        o[i] = p(r) ? r : {
                            type: r
                        };
                t.props = o
            }
        }
        function I(t) {
            var n = t.directives;
            if (n)
                for (var e in n) {
                    var r = n[e];
                    "function" == typeof r && (n[e] = {
                        bind: r,
                        update: r
                    })
                }
        }
        function j(t, n, e) {
            function r(r) {
                var i = kr[r] || Cr;
                f[r] = i(t[r], n[r], e, r)
            }
            z(n),
            I(n);
            var i = n.extends;
            if (i && (t = "function" == typeof i ? j(t, i.options, e) : j(t, i, e)),
            n.mixins)
                for (var o = 0, u = n.mixins.length; o < u; o++) {
                    var s = n.mixins[o];
                    s.prototype instanceof cn && (s = s.options),
                    t = j(t, s, e)
                }
            var c, f = {};
            for (c in t)
                r(c);
            for (c in n)
                a(t, c) || r(c);
            return f
        }
        function U(t, n, e, r) {
            if ("string" == typeof e) {
                var i = t[n];
                if (a(i, e))
                    return i[e];
                var o = Ve(e);
                if (a(i, o))
                    return i[o];
                var u = Xe(o);
                if (a(i, u))
                    return i[u];
                return i[e] || i[o] || i[u]
            }
        }
        function D(t, n, e, r) {
            var i = n[t]
              , o = !a(e, t)
              , u = e[t];
            if (F(Boolean, i.type) && (o && !a(i, "default") ? u = !1 : F(String, i.type) || "" !== u && u !== Ze(t) || (u = !0)),
            void 0 === u) {
                u = $(r, i, t);
                var s = Ar.shouldConvert;
                Ar.shouldConvert = !0,
                C(u),
                Ar.shouldConvert = s
            }
            return u
        }
        function $(t, n, e) {
            if (a(n, "default")) {
                var r = n.default;
                return t && t.$options.propsData && void 0 === t.$options.propsData[e] && void 0 !== t._props[e] ? t._props[e] : "function" == typeof r && "Function" !== B(n.type) ? r.call(t) : r
            }
        }
        function B(t) {
            var n = t && t.toString().match(/^\s*function (\w+)/);
            return n && n[1]
        }
        function F(t, n) {
            if (!Array.isArray(n))
                return B(n) === B(t);
            for (var e = 0, r = n.length; e < r; e++)
                if (B(n[e]) === B(t))
                    return !0;
            return !1
        }
        function q(t, n, e) {
            if (nr.errorHandler)
                nr.errorHandler.call(null, t, n, e);
            else {
                if (!or || "undefined" == typeof console)
                    throw t;
                console.error(t)
            }
        }
        function Y(t) {
            return new Er(void 0,void 0,void 0,String(t))
        }
        function H(t) {
            var n = new Er(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);
            return n.ns = t.ns,
            n.isStatic = t.isStatic,
            n.key = t.key,
            n.isCloned = !0,
            n
        }
        function W(t) {
            for (var n = t.length, e = new Array(n), r = 0; r < n; r++)
                e[r] = H(t[r]);
            return e
        }
        function V(t) {
            function n() {
                var t = arguments
                  , e = n.fns;
                if (!Array.isArray(e))
                    return e.apply(null, arguments);
                for (var r = 0; r < e.length; r++)
                    e[r].apply(null, t)
            }
            return n.fns = t,
            n
        }
        function X(t, n, e, r, i) {
            var o, a, u, s;
            for (o in t)
                a = t[o],
                u = n[o],
                s = Rr(o),
                a && (u ? a !== u && (u.fns = a,
                t[o] = u) : (a.fns || (a = t[o] = V(a)),
                e(s.name, a, s.once, s.capture)));
            for (o in n)
                t[o] || (s = Rr(o),
                r(s.name, n[o], s.capture))
        }
        function G(t, n, e) {
            function r() {
                e.apply(this, arguments),
                o(i.fns, r)
            }
            var i, a = t[n];
            a ? a.fns && a.merged ? (i = a,
            i.fns.push(r)) : i = V([a, r]) : i = V([r]),
            i.merged = !0,
            t[n] = i
        }
        function Z(t) {
            for (var n = 0; n < t.length; n++)
                if (Array.isArray(t[n]))
                    return Array.prototype.concat.apply([], t);
            return t
        }
        function K(t) {
            return u(t) ? [Y(t)] : Array.isArray(t) ? Q(t) : void 0
        }
        function Q(t, n) {
            var e, r, i, o = [];
            for (e = 0; e < t.length; e++)
                null != (r = t[e]) && "boolean" != typeof r && (i = o[o.length - 1],
                Array.isArray(r) ? o.push.apply(o, Q(r, (n || "") + "_" + e)) : u(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push(Y(r)) : r.text && i && i.text ? o[o.length - 1] = Y(i.text + r.text) : (r.tag && null == r.key && null != n && (r.key = "__vlist" + n + "_" + e + "__"),
                o.push(r)));
            return o
        }
        function J(t) {
            return t && t.filter(function(t) {
                return t && t.componentOptions
            })[0]
        }
        function tt(t) {
            t._events = Object.create(null),
            t._hasHookEvent = !1;
            var n = t.$options._parentListeners;
            n && rt(t, n)
        }
        function nt(t, n, e) {
            e ? Nr.$once(t, n) : Nr.$on(t, n)
        }
        function et(t, n) {
            Nr.$off(t, n)
        }
        function rt(t, n, e) {
            Nr = t,
            X(n, e || {}, nt, et, t)
        }
        function it(t) {
            var n = /^hook:/;
            t.prototype.$on = function(t, e) {
                var r = this
                  , i = this;
                if (Array.isArray(t))
                    for (var o = 0, a = t.length; o < a; o++)
                        r.$on(t[o], e);
                else
                    (i._events[t] || (i._events[t] = [])).push(e),
                    n.test(t) && (i._hasHookEvent = !0);
                return i
            }
            ,
            t.prototype.$once = function(t, n) {
                function e() {
                    r.$off(t, e),
                    n.apply(r, arguments)
                }
                var r = this;
                return e.fn = n,
                r.$on(t, e),
                r
            }
            ,
            t.prototype.$off = function(t, n) {
                var e = this
                  , r = this;
                if (!arguments.length)
                    return r._events = Object.create(null),
                    r;
                if (Array.isArray(t)) {
                    for (var i = 0, o = t.length; i < o; i++)
                        e.$off(t[i], n);
                    return r
                }
                var a = r._events[t];
                if (!a)
                    return r;
                if (1 === arguments.length)
                    return r._events[t] = null,
                    r;
                for (var u, s = a.length; s--; )
                    if ((u = a[s]) === n || u.fn === n) {
                        a.splice(s, 1);
                        break
                    }
                return r
            }
            ,
            t.prototype.$emit = function(t) {
                var n = this
                  , e = n._events[t];
                if (e) {
                    e = e.length > 1 ? f(e) : e;
                    for (var r = f(arguments, 1), i = 0, o = e.length; i < o; i++)
                        e[i].apply(n, r)
                }
                return n
            }
        }
        function ot(t, n) {
            var e = {};
            if (!t)
                return e;
            for (var r, i, o = [], a = 0, u = t.length; a < u; a++)
                if (i = t[a],
                (i.context === n || i.functionalContext === n) && i.data && (r = i.data.slot)) {
                    var s = e[r] || (e[r] = []);
                    "template" === i.tag ? s.push.apply(s, i.children) : s.push(i)
                } else
                    o.push(i);
            return o.every(at) || (e.default = o),
            e
        }
        function at(t) {
            return t.isComment || " " === t.text
        }
        function ut(t) {
            for (var n = {}, e = 0; e < t.length; e++)
                n[t[e][0]] = t[e][1];
            return n
        }
        function st(t) {
            var n = t.$options
              , e = n.parent;
            if (e && !n.abstract) {
                for (; e.$options.abstract && e.$parent; )
                    e = e.$parent;
                e.$children.push(t)
            }
            t.$parent = e,
            t.$root = e ? e.$root : t,
            t.$children = [],
            t.$refs = {},
            t._watcher = null,
            t._inactive = null,
            t._directInactive = !1,
            t._isMounted = !1,
            t._isDestroyed = !1,
            t._isBeingDestroyed = !1
        }
        function ct(t) {
            t.prototype._update = function(t, n) {
                var e = this;
                e._isMounted && vt(e, "beforeUpdate");
                var r = e.$el
                  , i = e._vnode
                  , o = Pr;
                Pr = e,
                e._vnode = t,
                e.$el = i ? e.__patch__(i, t) : e.__patch__(e.$el, t, n, !1, e.$options._parentElm, e.$options._refElm),
                Pr = o,
                r && (r.__vue__ = null),
                e.$el && (e.$el.__vue__ = e),
                e.$vnode && e.$parent && e.$vnode === e.$parent._vnode && (e.$parent.$el = e.$el)
            }
            ,
            t.prototype.$forceUpdate = function() {
                var t = this;
                t._watcher && t._watcher.update()
            }
            ,
            t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    vt(t, "beforeDestroy"),
                    t._isBeingDestroyed = !0;
                    var n = t.$parent;
                    !n || n._isBeingDestroyed || t.$options.abstract || o(n.$children, t),
                    t._watcher && t._watcher.teardown();
                    for (var e = t._watchers.length; e--; )
                        t._watchers[e].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--,
                    t._isDestroyed = !0,
                    vt(t, "destroyed"),
                    t.$off(),
                    t.$el && (t.$el.__vue__ = null),
                    t.__patch__(t._vnode, null)
                }
            }
        }
        function ft(t, n, e) {
            t.$el = n,
            t.$options.render || (t.$options.render = Or),
            vt(t, "beforeMount");
            var r;
            return r = function() {
                t._update(t._render(), e)
            }
            ,
            t._watcher = new $r(t,r,v),
            e = !1,
            null == t.$vnode && (t._isMounted = !0,
            vt(t, "mounted")),
            t
        }
        function lt(t, n, e, r, i) {
            var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== er);
            if (t.$options._parentVnode = r,
            t.$vnode = r,
            t._vnode && (t._vnode.parent = r),
            t.$options._renderChildren = i,
            n && t.$options.props) {
                Ar.shouldConvert = !1;
                for (var a = t._props, u = t.$options._propKeys || [], s = 0; s < u.length; s++) {
                    var c = u[s];
                    a[c] = D(c, t.$options.props, n, t)
                }
                Ar.shouldConvert = !0,
                t.$options.propsData = n
            }
            if (e) {
                var f = t.$options._parentListeners;
                t.$options._parentListeners = e,
                rt(t, e, f)
            }
            o && (t.$slots = ot(i, r.context),
            t.$forceUpdate())
        }
        function ht(t) {
            for (; t && (t = t.$parent); )
                if (t._inactive)
                    return !0;
            return !1
        }
        function pt(t, n) {
            if (n) {
                if (t._directInactive = !1,
                ht(t))
                    return
            } else if (t._directInactive)
                return;
            if (t._inactive || null == t._inactive) {
                t._inactive = !1;
                for (var e = 0; e < t.$children.length; e++)
                    pt(t.$children[e]);
                vt(t, "activated")
            }
        }
        function dt(t, n) {
            if (!(n && (t._directInactive = !0,
            ht(t)) || t._inactive)) {
                t._inactive = !0;
                for (var e = 0; e < t.$children.length; e++)
                    dt(t.$children[e]);
                vt(t, "deactivated")
            }
        }
        function vt(t, n) {
            var e = t.$options[n];
            if (e)
                for (var r = 0, i = e.length; r < i; r++)
                    try {
                        e[r].call(t)
                    } catch (e) {
                        q(e, t, n + " hook")
                    }
            t._hasHookEvent && t.$emit("hook:" + n)
        }
        function gt() {
            Lr.length = 0,
            zr = {},
            Ir = jr = !1
        }
        function yt() {
            jr = !0;
            var t, n, e;
            for (Lr.sort(function(t, n) {
                return t.id - n.id
            }),
            Ur = 0; Ur < Lr.length; Ur++)
                t = Lr[Ur],
                n = t.id,
                zr[n] = null,
                t.run();
            for (Ur = Lr.length; Ur--; )
                t = Lr[Ur],
                e = t.vm,
                e._watcher === t && e._isMounted && vt(e, "updated");
            dr && nr.devtools && dr.emit("flush"),
            gt()
        }
        function _t(t) {
            var n = t.id;
            if (null == zr[n]) {
                if (zr[n] = !0,
                jr) {
                    for (var e = Lr.length - 1; e >= 0 && Lr[e].id > t.id; )
                        e--;
                    Lr.splice(Math.max(e, Ur) + 1, 0, t)
                } else
                    Lr.push(t);
                Ir || (Ir = !0,
                gr(yt))
            }
        }
        function mt(t) {
            Br.clear(),
            bt(t, Br)
        }
        function bt(t, n) {
            var e, r, i = Array.isArray(t);
            if ((i || h(t)) && Object.isExtensible(t)) {
                if (t.__ob__) {
                    var o = t.__ob__.dep.id;
                    if (n.has(o))
                        return;
                    n.add(o)
                }
                if (i)
                    for (e = t.length; e--; )
                        bt(t[e], n);
                else
                    for (r = Object.keys(t),
                    e = r.length; e--; )
                        bt(t[r[e]], n)
            }
        }
        function xt(t, n, e) {
            Fr.get = function() {
                return this[n][e]
            }
            ,
            Fr.set = function(t) {
                this[n][e] = t
            }
            ,
            Object.defineProperty(t, e, Fr)
        }
        function wt(t) {
            t._watchers = [];
            var n = t.$options;
            n.props && Mt(t, n.props),
            n.methods && Et(t, n.methods),
            n.data ? At(t) : C(t._data = {}, !0),
            n.computed && St(t, n.computed),
            n.watch && Tt(t, n.watch)
        }
        function Mt(t, n) {
            var e = t.$options.propsData || {}
              , r = t._props = {}
              , i = t.$options._propKeys = []
              , o = !t.$parent;
            Ar.shouldConvert = o;
            var a = function(o) {
                i.push(o);
                var a = D(o, n, e, t);
                E(r, o, a),
                o in t || xt(t, "_props", o)
            };
            for (var u in n)
                a(u);
            Ar.shouldConvert = !0
        }
        function At(t) {
            var n = t.$options.data;
            n = t._data = "function" == typeof n ? n.call(t) : n || {},
            p(n) || (n = {});
            for (var e = Object.keys(n), r = t.$options.props, i = e.length; i--; )
                r && a(r, e[i]) || m(e[i]) || xt(t, "_data", e[i]);
            C(n, !0)
        }
        function St(t, n) {
            var e = t._computedWatchers = Object.create(null);
            for (var r in n) {
                var i = n[r]
                  , o = "function" == typeof i ? i : i.get;
                e[r] = new $r(t,o,v,qr),
                r in t || kt(t, r, i)
            }
        }
        function kt(t, n, e) {
            "function" == typeof e ? (Fr.get = Ct(n),
            Fr.set = v) : (Fr.get = e.get ? e.cache !== !1 ? Ct(n) : e.get : v,
            Fr.set = e.set ? e.set : v),
            Object.defineProperty(t, n, Fr)
        }
        function Ct(t) {
            return function() {
                var n = this._computedWatchers && this._computedWatchers[t];
                if (n)
                    return n.dirty && n.evaluate(),
                    mr.target && n.depend(),
                    n.value
            }
        }
        function Et(t, n) {
            t.$options.props;
            for (var e in n)
                t[e] = null == n[e] ? v : c(n[e], t)
        }
        function Tt(t, n) {
            for (var e in n) {
                var r = n[e];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++)
                        Nt(t, e, r[i]);
                else
                    Nt(t, e, r)
            }
        }
        function Nt(t, n, e) {
            var r;
            p(e) && (r = e,
            e = e.handler),
            "string" == typeof e && (e = t[e]),
            t.$watch(n, e, r)
        }
        function Ot(t) {
            var n = {};
            n.get = function() {
                return this._data
            }
            ;
            var e = {};
            e.get = function() {
                return this._props
            }
            ,
            Object.defineProperty(t.prototype, "$data", n),
            Object.defineProperty(t.prototype, "$props", e),
            t.prototype.$set = T,
            t.prototype.$delete = N,
            t.prototype.$watch = function(t, n, e) {
                var r = this;
                e = e || {},
                e.user = !0;
                var i = new $r(r,t,n,e);
                return e.immediate && n.call(r, i.value),
                function() {
                    i.teardown()
                }
            }
        }
        function Rt(t, n, e, r, i) {
            if (t) {
                var o = e.$options._base;
                if (h(t) && (t = o.extend(t)),
                "function" == typeof t) {
                    if (!t.cid)
                        if (t.resolved)
                            t = t.resolved;
                        else if (!(t = zt(t, o, function() {
                            e.$forceUpdate()
                        })))
                            return;
                    an(t),
                    n = n || {},
                    n.model && $t(t.options, n);
                    var a = It(n, t);
                    if (t.options.functional)
                        return Pt(t, a, n, e, r);
                    var u = n.on;
                    n.on = n.nativeOn,
                    t.options.abstract && (n = {}),
                    Ut(n);
                    var s = t.options.name || i;
                    return new Er("vue-component-" + t.cid + (s ? "-" + s : ""),n,void 0,void 0,void 0,e,{
                        Ctor: t,
                        propsData: a,
                        listeners: u,
                        tag: i,
                        children: r
                    })
                }
            }
        }
        function Pt(t, n, e, r, i) {
            var o = {}
              , a = t.options.props;
            if (a)
                for (var u in a)
                    o[u] = D(u, a, n);
            var s = Object.create(r)
              , c = function(t, n, e, r) {
                return Bt(s, t, n, e, r, !0)
            }
              , f = t.options.render.call(null, c, {
                props: o,
                data: e,
                parent: r,
                children: i,
                slots: function() {
                    return ot(i, r)
                }
            });
            return f instanceof Er && (f.functionalContext = r,
            e.slot && ((f.data || (f.data = {})).slot = e.slot)),
            f
        }
        function Lt(t, n, e, r) {
            var i = t.componentOptions
              , o = {
                _isComponent: !0,
                parent: n,
                propsData: i.propsData,
                _componentTag: i.tag,
                _parentVnode: t,
                _parentListeners: i.listeners,
                _renderChildren: i.children,
                _parentElm: e || null,
                _refElm: r || null
            }
              , a = t.data.inlineTemplate;
            return a && (o.render = a.render,
            o.staticRenderFns = a.staticRenderFns),
            new i.Ctor(o)
        }
        function zt(t, n, e) {
            if (!t.requested) {
                t.requested = !0;
                var r = t.pendingCallbacks = [e]
                  , i = !0
                  , o = function(e) {
                    if (h(e) && (e = n.extend(e)),
                    t.resolved = e,
                    !i)
                        for (var o = 0, a = r.length; o < a; o++)
                            r[o](e)
                }
                  , a = function(t) {}
                  , u = t(o, a);
                return u && "function" == typeof u.then && !t.resolved && u.then(o, a),
                i = !1,
                t.resolved
            }
            t.pendingCallbacks.push(e)
        }
        function It(t, n) {
            var e = n.options.props;
            if (e) {
                var r = {}
                  , i = t.attrs
                  , o = t.props
                  , a = t.domProps;
                if (i || o || a)
                    for (var u in e) {
                        var s = Ze(u);
                        jt(r, o, u, s, !0) || jt(r, i, u, s) || jt(r, a, u, s)
                    }
                return r
            }
        }
        function jt(t, n, e, r, i) {
            if (n) {
                if (a(n, e))
                    return t[e] = n[e],
                    i || delete n[e],
                    !0;
                if (a(n, r))
                    return t[e] = n[r],
                    i || delete n[r],
                    !0
            }
            return !1
        }
        function Ut(t) {
            t.hook || (t.hook = {});
            for (var n = 0; n < Hr.length; n++) {
                var e = Hr[n]
                  , r = t.hook[e]
                  , i = Yr[e];
                t.hook[e] = r ? Dt(i, r) : i
            }
        }
        function Dt(t, n) {
            return function(e, r, i, o) {
                t(e, r, i, o),
                n(e, r, i, o)
            }
        }
        function $t(t, n) {
            var e = t.model && t.model.prop || "value"
              , r = t.model && t.model.event || "input";
            (n.props || (n.props = {}))[e] = n.model.value;
            var i = n.on || (n.on = {});
            i[r] ? i[r] = [n.model.callback].concat(i[r]) : i[r] = n.model.callback
        }
        function Bt(t, n, e, r, i, o) {
            return (Array.isArray(e) || u(e)) && (i = r,
            r = e,
            e = void 0),
            o && (i = Vr),
            Ft(t, n, e, r, i)
        }
        function Ft(t, n, e, r, i) {
            if (e && e.__ob__)
                return Or();
            if (!n)
                return Or();
            Array.isArray(r) && "function" == typeof r[0] && (e = e || {},
            e.scopedSlots = {
                default: r[0]
            },
            r.length = 0),
            i === Vr ? r = K(r) : i === Wr && (r = Z(r));
            var o, a;
            if ("string" == typeof n) {
                var u;
                a = nr.getTagNamespace(n),
                o = nr.isReservedTag(n) ? new Er(nr.parsePlatformTagName(n),e,r,void 0,void 0,t) : (u = U(t.$options, "components", n)) ? Rt(u, e, t, r, n) : new Er(n,e,r,void 0,void 0,t)
            } else
                o = Rt(n, e, t, r);
            return o ? (a && qt(o, a),
            o) : Or()
        }
        function qt(t, n) {
            if (t.ns = n,
            "foreignObject" !== t.tag && t.children)
                for (var e = 0, r = t.children.length; e < r; e++) {
                    var i = t.children[e];
                    i.tag && !i.ns && qt(i, n)
                }
        }
        function Yt(t, n) {
            var e, r, i, o, a;
            if (Array.isArray(t) || "string" == typeof t)
                for (e = new Array(t.length),
                r = 0,
                i = t.length; r < i; r++)
                    e[r] = n(t[r], r);
            else if ("number" == typeof t)
                for (e = new Array(t),
                r = 0; r < t; r++)
                    e[r] = n(r + 1, r);
            else if (h(t))
                for (o = Object.keys(t),
                e = new Array(o.length),
                r = 0,
                i = o.length; r < i; r++)
                    a = o[r],
                    e[r] = n(t[a], a, r);
            return e
        }
        function Ht(t, n, e, r) {
            var i = this.$scopedSlots[t];
            if (i)
                return e = e || {},
                r && l(e, r),
                i(e) || n;
            var o = this.$slots[t];
            return o || n
        }
        function Wt(t) {
            return U(this.$options, "filters", t, !0) || tr
        }
        function Vt(t, n, e) {
            var r = nr.keyCodes[n] || e;
            return Array.isArray(r) ? r.indexOf(t) === -1 : r !== t
        }
        function Xt(t, n, e, r) {
            if (e)
                if (h(e)) {
                    Array.isArray(e) && (e = d(e));
                    var i;
                    for (var o in e) {
                        if ("class" === o || "style" === o)
                            i = t;
                        else {
                            var a = t.attrs && t.attrs.type;
                            i = r || nr.mustUseProp(n, a, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                        }
                        o in i || (i[o] = e[o])
                    }
                } else
                    ;return t
        }
        function Gt(t, n) {
            var e = this._staticTrees[t];
            return e && !n ? Array.isArray(e) ? W(e) : H(e) : (e = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy),
            Kt(e, "__static__" + t, !1),
            e)
        }
        function Zt(t, n, e) {
            return Kt(t, "__once__" + n + (e ? "_" + e : ""), !0),
            t
        }
        function Kt(t, n, e) {
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++)
                    t[r] && "string" != typeof t[r] && Qt(t[r], n + "_" + r, e);
            else
                Qt(t, n, e)
        }
        function Qt(t, n, e) {
            t.isStatic = !0,
            t.key = n,
            t.isOnce = e
        }
        function Jt(t) {
            t.$vnode = null,
            t._vnode = null,
            t._staticTrees = null;
            var n = t.$options._parentVnode
              , e = n && n.context;
            t.$slots = ot(t.$options._renderChildren, e),
            t.$scopedSlots = er,
            t._c = function(n, e, r, i) {
                return Bt(t, n, e, r, i, !1)
            }
            ,
            t.$createElement = function(n, e, r, i) {
                return Bt(t, n, e, r, i, !0)
            }
        }
        function tn(t) {
            t.prototype.$nextTick = function(t) {
                return gr(t, this)
            }
            ,
            t.prototype._render = function() {
                var t = this
                  , n = t.$options
                  , e = n.render
                  , r = n.staticRenderFns
                  , i = n._parentVnode;
                if (t._isMounted)
                    for (var o in t.$slots)
                        t.$slots[o] = W(t.$slots[o]);
                t.$scopedSlots = i && i.data.scopedSlots || er,
                r && !t._staticTrees && (t._staticTrees = []),
                t.$vnode = i;
                var a;
                try {
                    a = e.call(t._renderProxy, t.$createElement)
                } catch (n) {
                    q(n, t, "render function"),
                    a = t._vnode
                }
                return a instanceof Er || (a = Or()),
                a.parent = i,
                a
            }
            ,
            t.prototype._o = Zt,
            t.prototype._n = r,
            t.prototype._s = e,
            t.prototype._l = Yt,
            t.prototype._t = Ht,
            t.prototype._q = g,
            t.prototype._i = y,
            t.prototype._m = Gt,
            t.prototype._f = Wt,
            t.prototype._k = Vt,
            t.prototype._b = Xt,
            t.prototype._v = Y,
            t.prototype._e = Or,
            t.prototype._u = ut
        }
        function nn(t) {
            var n = t.$options.provide;
            n && (t._provided = "function" == typeof n ? n.call(t) : n)
        }
        function en(t) {
            var n = t.$options.inject;
            if (n)
                for (var e = Array.isArray(n), r = e ? n : vr ? Reflect.ownKeys(n) : Object.keys(n), i = 0; i < r.length; i++)
                    for (var o = r[i], a = e ? o : n[o], u = t; u; ) {
                        if (u._provided && a in u._provided) {
                            t[o] = u._provided[a];
                            break
                        }
                        u = u.$parent
                    }
        }
        function rn(t) {
            t.prototype._init = function(t) {
                var n = this;
                n._uid = Xr++,
                n._isVue = !0,
                t && t._isComponent ? on(n, t) : n.$options = j(an(n.constructor), t || {}, n),
                n._renderProxy = n,
                n._self = n,
                st(n),
                tt(n),
                Jt(n),
                vt(n, "beforeCreate"),
                en(n),
                wt(n),
                nn(n),
                vt(n, "created"),
                n.$options.el && n.$mount(n.$options.el)
            }
        }
        function on(t, n) {
            var e = t.$options = Object.create(t.constructor.options);
            e.parent = n.parent,
            e.propsData = n.propsData,
            e._parentVnode = n._parentVnode,
            e._parentListeners = n._parentListeners,
            e._renderChildren = n._renderChildren,
            e._componentTag = n._componentTag,
            e._parentElm = n._parentElm,
            e._refElm = n._refElm,
            n.render && (e.render = n.render,
            e.staticRenderFns = n.staticRenderFns)
        }
        function an(t) {
            var n = t.options;
            if (t.super) {
                var e = an(t.super);
                if (e !== t.superOptions) {
                    t.superOptions = e;
                    var r = un(t);
                    r && l(t.extendOptions, r),
                    n = t.options = j(e, t.extendOptions),
                    n.name && (n.components[n.name] = t)
                }
            }
            return n
        }
        function un(t) {
            var n, e = t.options, r = t.sealedOptions;
            for (var i in e)
                e[i] !== r[i] && (n || (n = {}),
                n[i] = sn(e[i], r[i]));
            return n
        }
        function sn(t, n) {
            if (Array.isArray(t)) {
                var e = [];
                n = Array.isArray(n) ? n : [n];
                for (var r = 0; r < t.length; r++)
                    n.indexOf(t[r]) < 0 && e.push(t[r]);
                return e
            }
            return t
        }
        function cn(t) {
            this._init(t)
        }
        function fn(t) {
            t.use = function(t) {
                if (!t.installed) {
                    var n = f(arguments, 1);
                    return n.unshift(this),
                    "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n),
                    t.installed = !0,
                    this
                }
            }
        }
        function ln(t) {
            t.mixin = function(t) {
                this.options = j(this.options, t)
            }
        }
        function hn(t) {
            t.cid = 0;
            var n = 1;
            t.extend = function(t) {
                t = t || {};
                var e = this
                  , r = e.cid
                  , i = t._Ctor || (t._Ctor = {});
                if (i[r])
                    return i[r];
                var o = t.name || e.options.name
                  , a = function(t) {
                    this._init(t)
                };
                return a.prototype = Object.create(e.prototype),
                a.prototype.constructor = a,
                a.cid = n++,
                a.options = j(e.options, t),
                a.super = e,
                a.options.props && pn(a),
                a.options.computed && dn(a),
                a.extend = e.extend,
                a.mixin = e.mixin,
                a.use = e.use,
                nr._assetTypes.forEach(function(t) {
                    a[t] = e[t]
                }),
                o && (a.options.components[o] = a),
                a.superOptions = e.options,
                a.extendOptions = t,
                a.sealedOptions = l({}, a.options),
                i[r] = a,
                a
            }
        }
        function pn(t) {
            var n = t.options.props;
            for (var e in n)
                xt(t.prototype, "_props", e)
        }
        function dn(t) {
            var n = t.options.computed;
            for (var e in n)
                kt(t.prototype, e, n[e])
        }
        function vn(t) {
            nr._assetTypes.forEach(function(n) {
                t[n] = function(t, e) {
                    return e ? ("component" === n && p(e) && (e.name = e.name || t,
                    e = this.options._base.extend(e)),
                    "directive" === n && "function" == typeof e && (e = {
                        bind: e,
                        update: e
                    }),
                    this.options[n + "s"][t] = e,
                    e) : this.options[n + "s"][t]
                }
            })
        }
        function gn(t) {
            return t && (t.Ctor.options.name || t.tag)
        }
        function yn(t, n) {
            return "string" == typeof t ? t.split(",").indexOf(n) > -1 : t instanceof RegExp && t.test(n)
        }
        function _n(t, n) {
            for (var e in t) {
                var r = t[e];
                if (r) {
                    var i = gn(r.componentOptions);
                    i && !n(i) && (mn(r),
                    t[e] = null)
                }
            }
        }
        function mn(t) {
            t && (t.componentInstance._inactive || vt(t.componentInstance, "deactivated"),
            t.componentInstance.$destroy())
        }
        function bn(t) {
            var n = {};
            n.get = function() {
                return nr
            }
            ,
            Object.defineProperty(t, "config", n),
            t.util = {
                warn: yr,
                extend: l,
                mergeOptions: j,
                defineReactive: E
            },
            t.set = T,
            t.delete = N,
            t.nextTick = gr,
            t.options = Object.create(null),
            nr._assetTypes.forEach(function(n) {
                t.options[n + "s"] = Object.create(null)
            }),
            t.options._base = t,
            l(t.options.components, Kr),
            fn(t),
            ln(t),
            hn(t),
            vn(t)
        }
        function xn(t) {
            for (var n = t.data, e = t, r = t; r.componentInstance; )
                r = r.componentInstance._vnode,
                r.data && (n = wn(r.data, n));
            for (; e = e.parent; )
                e.data && (n = wn(n, e.data));
            return Mn(n)
        }
        function wn(t, n) {
            return {
                staticClass: An(t.staticClass, n.staticClass),
                class: t.class ? [t.class, n.class] : n.class
            }
        }
        function Mn(t) {
            var n = t.class
              , e = t.staticClass;
            return e || n ? An(e, Sn(n)) : ""
        }
        function An(t, n) {
            return t ? n ? t + " " + n : t : n || ""
        }
        function Sn(t) {
            var n = "";
            if (!t)
                return n;
            if ("string" == typeof t)
                return t;
            if (Array.isArray(t)) {
                for (var e, r = 0, i = t.length; r < i; r++)
                    t[r] && (e = Sn(t[r])) && (n += e + " ");
                return n.slice(0, -1)
            }
            if (h(t)) {
                for (var o in t)
                    t[o] && (n += o + " ");
                return n.slice(0, -1)
            }
            return n
        }
        function kn(t) {
            return fi(t) ? "svg" : "math" === t ? "math" : void 0
        }
        function Cn(t) {
            if (!or)
                return !0;
            if (li(t))
                return !1;
            if (t = t.toLowerCase(),
            null != hi[t])
                return hi[t];
            var n = document.createElement(t);
            return t.indexOf("-") > -1 ? hi[t] = n.constructor === window.HTMLUnknownElement || n.constructor === window.HTMLElement : hi[t] = /HTMLUnknownElement/.test(n.toString())
        }
        function En(t) {
            if ("string" == typeof t) {
                var n = document.querySelector(t);
                return n ? n : document.createElement("div")
            }
            return t
        }
        function Tn(t, n) {
            var e = document.createElement(t);
            return "select" !== t ? e : (n.data && n.data.attrs && void 0 !== n.data.attrs.multiple && e.setAttribute("multiple", "multiple"),
            e)
        }
        function Nn(t, n) {
            return document.createElementNS(si[t], n)
        }
        function On(t) {
            return document.createTextNode(t)
        }
        function Rn(t) {
            return document.createComment(t)
        }
        function Pn(t, n, e) {
            t.insertBefore(n, e)
        }
        function Ln(t, n) {
            t.removeChild(n)
        }
        function zn(t, n) {
            t.appendChild(n)
        }
        function In(t) {
            return t.parentNode
        }
        function jn(t) {
            return t.nextSibling
        }
        function Un(t) {
            return t.tagName
        }
        function Dn(t, n) {
            t.textContent = n
        }
        function $n(t, n, e) {
            t.setAttribute(n, e)
        }
        function Bn(t, n) {
            var e = t.data.ref;
            if (e) {
                var r = t.context
                  , i = t.componentInstance || t.elm
                  , a = r.$refs;
                n ? Array.isArray(a[e]) ? o(a[e], i) : a[e] === i && (a[e] = void 0) : t.data.refInFor ? Array.isArray(a[e]) && a[e].indexOf(i) < 0 ? a[e].push(i) : a[e] = [i] : a[e] = i
            }
        }
        function Fn(t) {
            return null == t
        }
        function qn(t) {
            return null != t
        }
        function Yn(t, n) {
            return t.key === n.key && t.tag === n.tag && t.isComment === n.isComment && !t.data == !n.data
        }
        function Hn(t, n, e) {
            var r, i, o = {};
            for (r = n; r <= e; ++r)
                i = t[r].key,
                qn(i) && (o[i] = r);
            return o
        }
        function Wn(t) {
            function n(t) {
                return new Er(C.tagName(t).toLowerCase(),{},[],void 0,t)
            }
            function e(t, n) {
                function e() {
                    0 == --e.listeners && r(t)
                }
                return e.listeners = n,
                e
            }
            function r(t) {
                var n = C.parentNode(t);
                n && C.removeChild(n, t)
            }
            function o(t, n, e, r, i) {
                if (t.isRootInsert = !i,
                !a(t, n, e, r)) {
                    var o = t.data
                      , u = t.children
                      , s = t.tag;
                    qn(s) ? (t.elm = t.ns ? C.createElementNS(t.ns, s) : C.createElement(s, t),
                    d(t),
                    l(t, u, n),
                    qn(o) && p(t, n),
                    f(e, t.elm, r)) : t.isComment ? (t.elm = C.createComment(t.text),
                    f(e, t.elm, r)) : (t.elm = C.createTextNode(t.text),
                    f(e, t.elm, r))
                }
            }
            function a(t, n, e, r) {
                var i = t.data;
                if (qn(i)) {
                    var o = qn(t.componentInstance) && i.keepAlive;
                    if (qn(i = i.hook) && qn(i = i.init) && i(t, !1, e, r),
                    qn(t.componentInstance))
                        return s(t, n),
                        o && c(t, n, e, r),
                        !0
                }
            }
            function s(t, n) {
                t.data.pendingInsert && n.push.apply(n, t.data.pendingInsert),
                t.elm = t.componentInstance.$el,
                h(t) ? (p(t, n),
                d(t)) : (Bn(t),
                n.push(t))
            }
            function c(t, n, e, r) {
                for (var i, o = t; o.componentInstance; )
                    if (o = o.componentInstance._vnode,
                    qn(i = o.data) && qn(i = i.transition)) {
                        for (i = 0; i < S.activate.length; ++i)
                            S.activate[i](vi, o);
                        n.push(o);
                        break
                    }
                f(e, t.elm, r)
            }
            function f(t, n, e) {
                t && (e ? C.insertBefore(t, n, e) : C.appendChild(t, n))
            }
            function l(t, n, e) {
                if (Array.isArray(n))
                    for (var r = 0; r < n.length; ++r)
                        o(n[r], e, t.elm, null, !0);
                else
                    u(t.text) && C.appendChild(t.elm, C.createTextNode(t.text))
            }
            function h(t) {
                for (; t.componentInstance; )
                    t = t.componentInstance._vnode;
                return qn(t.tag)
            }
            function p(t, n) {
                for (var e = 0; e < S.create.length; ++e)
                    S.create[e](vi, t);
                M = t.data.hook,
                qn(M) && (M.create && M.create(vi, t),
                M.insert && n.push(t))
            }
            function d(t) {
                for (var n, e = t; e; )
                    qn(n = e.context) && qn(n = n.$options._scopeId) && C.setAttribute(t.elm, n, ""),
                    e = e.parent;
                qn(n = Pr) && n !== t.context && qn(n = n.$options._scopeId) && C.setAttribute(t.elm, n, "")
            }
            function v(t, n, e, r, i, a) {
                for (; r <= i; ++r)
                    o(e[r], a, t, n)
            }
            function g(t) {
                var n, e, r = t.data;
                if (qn(r))
                    for (qn(n = r.hook) && qn(n = n.destroy) && n(t),
                    n = 0; n < S.destroy.length; ++n)
                        S.destroy[n](t);
                if (qn(n = t.children))
                    for (e = 0; e < t.children.length; ++e)
                        g(t.children[e])
            }
            function y(t, n, e, i) {
                for (; e <= i; ++e) {
                    var o = n[e];
                    qn(o) && (qn(o.tag) ? (_(o),
                    g(o)) : r(o.elm))
                }
            }
            function _(t, n) {
                if (n || qn(t.data)) {
                    var i = S.remove.length + 1;
                    for (n ? n.listeners += i : n = e(t.elm, i),
                    qn(M = t.componentInstance) && qn(M = M._vnode) && qn(M.data) && _(M, n),
                    M = 0; M < S.remove.length; ++M)
                        S.remove[M](t, n);
                    qn(M = t.data.hook) && qn(M = M.remove) ? M(t, n) : n()
                } else
                    r(t.elm)
            }
            function m(t, n, e, r, i) {
                for (var a, u, s, c, f = 0, l = 0, h = n.length - 1, p = n[0], d = n[h], g = e.length - 1, _ = e[0], m = e[g], x = !i; f <= h && l <= g; )
                    Fn(p) ? p = n[++f] : Fn(d) ? d = n[--h] : Yn(p, _) ? (b(p, _, r),
                    p = n[++f],
                    _ = e[++l]) : Yn(d, m) ? (b(d, m, r),
                    d = n[--h],
                    m = e[--g]) : Yn(p, m) ? (b(p, m, r),
                    x && C.insertBefore(t, p.elm, C.nextSibling(d.elm)),
                    p = n[++f],
                    m = e[--g]) : Yn(d, _) ? (b(d, _, r),
                    x && C.insertBefore(t, d.elm, p.elm),
                    d = n[--h],
                    _ = e[++l]) : (Fn(a) && (a = Hn(n, f, h)),
                    u = qn(_.key) ? a[_.key] : null,
                    Fn(u) ? (o(_, r, t, p.elm),
                    _ = e[++l]) : (s = n[u],
                    Yn(s, _) ? (b(s, _, r),
                    n[u] = void 0,
                    x && C.insertBefore(t, _.elm, p.elm),
                    _ = e[++l]) : (o(_, r, t, p.elm),
                    _ = e[++l])));
                f > h ? (c = Fn(e[g + 1]) ? null : e[g + 1].elm,
                v(t, c, e, l, g, r)) : l > g && y(t, n, f, h)
            }
            function b(t, n, e, r) {
                if (t !== n) {
                    if (n.isStatic && t.isStatic && n.key === t.key && (n.isCloned || n.isOnce))
                        return n.elm = t.elm,
                        void (n.componentInstance = t.componentInstance);
                    var i, o = n.data, a = qn(o);
                    a && qn(i = o.hook) && qn(i = i.prepatch) && i(t, n);
                    var u = n.elm = t.elm
                      , s = t.children
                      , c = n.children;
                    if (a && h(n)) {
                        for (i = 0; i < S.update.length; ++i)
                            S.update[i](t, n);
                        qn(i = o.hook) && qn(i = i.update) && i(t, n)
                    }
                    Fn(n.text) ? qn(s) && qn(c) ? s !== c && m(u, s, c, e, r) : qn(c) ? (qn(t.text) && C.setTextContent(u, ""),
                    v(u, null, c, 0, c.length - 1, e)) : qn(s) ? y(u, s, 0, s.length - 1) : qn(t.text) && C.setTextContent(u, "") : t.text !== n.text && C.setTextContent(u, n.text),
                    a && qn(i = o.hook) && qn(i = i.postpatch) && i(t, n)
                }
            }
            function x(t, n, e) {
                if (e && t.parent)
                    t.parent.data.pendingInsert = n;
                else
                    for (var r = 0; r < n.length; ++r)
                        n[r].data.hook.insert(n[r])
            }
            function w(t, n, e) {
                n.elm = t;
                var r = n.tag
                  , i = n.data
                  , o = n.children;
                if (qn(i) && (qn(M = i.hook) && qn(M = M.init) && M(n, !0),
                qn(M = n.componentInstance)))
                    return s(n, e),
                    !0;
                if (qn(r)) {
                    if (qn(o))
                        if (t.hasChildNodes()) {
                            for (var a = !0, u = t.firstChild, c = 0; c < o.length; c++) {
                                if (!u || !w(u, o[c], e)) {
                                    a = !1;
                                    break
                                }
                                u = u.nextSibling
                            }
                            if (!a || u)
                                return !1
                        } else
                            l(n, o, e);
                    if (qn(i))
                        for (var f in i)
                            if (!E(f)) {
                                p(n, e);
                                break
                            }
                } else
                    t.data !== n.text && (t.data = n.text);
                return !0
            }
            var M, A, S = {}, k = t.modules, C = t.nodeOps;
            for (M = 0; M < gi.length; ++M)
                for (S[gi[M]] = [],
                A = 0; A < k.length; ++A)
                    void 0 !== k[A][gi[M]] && S[gi[M]].push(k[A][gi[M]]);
            var E = i("attrs,style,class,staticClass,staticStyle,key");
            return function(t, e, r, i, a, u) {
                if (!e)
                    return void (t && g(t));
                var s = !1
                  , c = [];
                if (t) {
                    var f = qn(t.nodeType);
                    if (!f && Yn(t, e))
                        b(t, e, c, i);
                    else {
                        if (f) {
                            if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"),
                            r = !0),
                            r && w(t, e, c))
                                return x(e, c, !0),
                                t;
                            t = n(t)
                        }
                        var l = t.elm
                          , p = C.parentNode(l);
                        if (o(e, c, l._leaveCb ? null : p, C.nextSibling(l)),
                        e.parent) {
                            for (var d = e.parent; d; )
                                d.elm = e.elm,
                                d = d.parent;
                            if (h(e))
                                for (var v = 0; v < S.create.length; ++v)
                                    S.create[v](vi, e.parent)
                        }
                        null !== p ? y(p, [t], 0, 0) : qn(t.tag) && g(t)
                    }
                } else
                    s = !0,
                    o(e, c, a, u);
                return x(e, c, s),
                e.elm
            }
        }
        function Vn(t, n) {
            (t.data.directives || n.data.directives) && Xn(t, n)
        }
        function Xn(t, n) {
            var e, r, i, o = t === vi, a = n === vi, u = Gn(t.data.directives, t.context), s = Gn(n.data.directives, n.context), c = [], f = [];
            for (e in s)
                r = u[e],
                i = s[e],
                r ? (i.oldValue = r.value,
                Kn(i, "update", n, t),
                i.def && i.def.componentUpdated && f.push(i)) : (Kn(i, "bind", n, t),
                i.def && i.def.inserted && c.push(i));
            if (c.length) {
                var l = function() {
                    for (var e = 0; e < c.length; e++)
                        Kn(c[e], "inserted", n, t)
                };
                o ? G(n.data.hook || (n.data.hook = {}), "insert", l) : l()
            }
            if (f.length && G(n.data.hook || (n.data.hook = {}), "postpatch", function() {
                for (var e = 0; e < f.length; e++)
                    Kn(f[e], "componentUpdated", n, t)
            }),
            !o)
                for (e in u)
                    s[e] || Kn(u[e], "unbind", t, t, a)
        }
        function Gn(t, n) {
            var e = Object.create(null);
            if (!t)
                return e;
            var r, i;
            for (r = 0; r < t.length; r++)
                i = t[r],
                i.modifiers || (i.modifiers = _i),
                e[Zn(i)] = i,
                i.def = U(n.$options, "directives", i.name, !0);
            return e
        }
        function Zn(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }
        function Kn(t, n, e, r, i) {
            var o = t.def && t.def[n];
            o && o(e.elm, t, e, r, i)
        }
        function Qn(t, n) {
            if (t.data.attrs || n.data.attrs) {
                var e, r, i = n.elm, o = t.data.attrs || {}, a = n.data.attrs || {};
                a.__ob__ && (a = n.data.attrs = l({}, a));
                for (e in a)
                    r = a[e],
                    o[e] !== r && Jn(i, e, r);
                sr && a.value !== o.value && Jn(i, "value", a.value);
                for (e in o)
                    null == a[e] && (oi(e) ? i.removeAttributeNS(ii, ai(e)) : ei(e) || i.removeAttribute(e))
            }
        }
        function Jn(t, n, e) {
            ri(n) ? ui(e) ? t.removeAttribute(n) : t.setAttribute(n, n) : ei(n) ? t.setAttribute(n, ui(e) || "false" === e ? "false" : "true") : oi(n) ? ui(e) ? t.removeAttributeNS(ii, ai(n)) : t.setAttributeNS(ii, n, e) : ui(e) ? t.removeAttribute(n) : t.setAttribute(n, e)
        }
        function te(t, n) {
            var e = n.elm
              , r = n.data
              , i = t.data;
            if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
                var o = xn(n)
                  , a = e._transitionClasses;
                a && (o = An(o, Sn(a))),
                o !== e._prevClass && (e.setAttribute("class", o),
                e._prevClass = o)
            }
        }
        function ne(t) {
            var n;
            t[wi] && (n = ur ? "change" : "input",
            t[n] = [].concat(t[wi], t[n] || []),
            delete t[wi]),
            t[Mi] && (n = hr ? "click" : "change",
            t[n] = [].concat(t[Mi], t[n] || []),
            delete t[Mi])
        }
        function ee(t, n, e, r) {
            if (e) {
                var i = n
                  , o = Qr;
                n = function(e) {
                    null !== (1 === arguments.length ? i(e) : i.apply(null, arguments)) && re(t, n, r, o)
                }
            }
            Qr.addEventListener(t, n, r)
        }
        function re(t, n, e, r) {
            (r || Qr).removeEventListener(t, n, e)
        }
        function ie(t, n) {
            if (t.data.on || n.data.on) {
                var e = n.data.on || {}
                  , r = t.data.on || {};
                Qr = n.elm,
                ne(e),
                X(e, r, ee, re, n.context)
            }
        }
        function oe(t, n) {
            if (t.data.domProps || n.data.domProps) {
                var e, r, i = n.elm, o = t.data.domProps || {}, a = n.data.domProps || {};
                a.__ob__ && (a = n.data.domProps = l({}, a));
                for (e in o)
                    null == a[e] && (i[e] = "");
                for (e in a)
                    if (r = a[e],
                    "textContent" !== e && "innerHTML" !== e || (n.children && (n.children.length = 0),
                    r !== o[e]))
                        if ("value" === e) {
                            i._value = r;
                            var u = null == r ? "" : String(r);
                            ae(i, n, u) && (i.value = u)
                        } else
                            i[e] = r
            }
        }
        function ae(t, n, e) {
            return !t.composing && ("option" === n.tag || ue(t, e) || se(t, e))
        }
        function ue(t, n) {
            return document.activeElement !== t && t.value !== n
        }
        function se(t, n) {
            var e = t.value
              , i = t._vModifiers;
            return i && i.number || "number" === t.type ? r(e) !== r(n) : i && i.trim ? e.trim() !== n.trim() : e !== n
        }
        function ce(t) {
            var n = fe(t.style);
            return t.staticStyle ? l(t.staticStyle, n) : n
        }
        function fe(t) {
            return Array.isArray(t) ? d(t) : "string" == typeof t ? ki(t) : t
        }
        function le(t, n) {
            var e, r = {};
            if (n)
                for (var i = t; i.componentInstance; )
                    i = i.componentInstance._vnode,
                    i.data && (e = ce(i.data)) && l(r, e);
            (e = ce(t.data)) && l(r, e);
            for (var o = t; o = o.parent; )
                o.data && (e = ce(o.data)) && l(r, e);
            return r
        }
        function he(t, n) {
            var e = n.data
              , r = t.data;
            if (e.staticStyle || e.style || r.staticStyle || r.style) {
                var i, o, a = n.elm, u = t.data.staticStyle, s = t.data.style || {}, c = u || s, f = fe(n.data.style) || {};
                n.data.style = f.__ob__ ? l({}, f) : f;
                var h = le(n, !0);
                for (o in c)
                    null == h[o] && Ti(a, o, "");
                for (o in h)
                    (i = h[o]) !== c[o] && Ti(a, o, null == i ? "" : i)
            }
        }
        function pe(t, n) {
            if (n && (n = n.trim()))
                if (t.classList)
                    n.indexOf(" ") > -1 ? n.split(/\s+/).forEach(function(n) {
                        return t.classList.add(n)
                    }) : t.classList.add(n);
                else {
                    var e = " " + (t.getAttribute("class") || "") + " ";
                    e.indexOf(" " + n + " ") < 0 && t.setAttribute("class", (e + n).trim())
                }
        }
        function de(t, n) {
            if (n && (n = n.trim()))
                if (t.classList)
                    n.indexOf(" ") > -1 ? n.split(/\s+/).forEach(function(n) {
                        return t.classList.remove(n)
                    }) : t.classList.remove(n);
                else {
                    for (var e = " " + (t.getAttribute("class") || "") + " ", r = " " + n + " "; e.indexOf(r) >= 0; )
                        e = e.replace(r, " ");
                    t.setAttribute("class", e.trim())
                }
        }
        function ve(t) {
            if (t) {
                if ("object" == typeof t) {
                    var n = {};
                    return t.css !== !1 && l(n, Pi(t.name || "v")),
                    l(n, t),
                    n
                }
                return "string" == typeof t ? Pi(t) : void 0
            }
        }
        function ge(t) {
            Bi(function() {
                Bi(t)
            })
        }
        function ye(t, n) {
            (t._transitionClasses || (t._transitionClasses = [])).push(n),
            pe(t, n)
        }
        function _e(t, n) {
            t._transitionClasses && o(t._transitionClasses, n),
            de(t, n)
        }
        function me(t, n, e) {
            var r = be(t, n)
              , i = r.type
              , o = r.timeout
              , a = r.propCount;
            if (!i)
                return e();
            var u = i === zi ? Ui : $i
              , s = 0
              , c = function() {
                t.removeEventListener(u, f),
                e()
            }
              , f = function(n) {
                n.target === t && ++s >= a && c()
            };
            setTimeout(function() {
                s < a && c()
            }, o + 1),
            t.addEventListener(u, f)
        }
        function be(t, n) {
            var e, r = window.getComputedStyle(t), i = r[ji + "Delay"].split(", "), o = r[ji + "Duration"].split(", "), a = xe(i, o), u = r[Di + "Delay"].split(", "), s = r[Di + "Duration"].split(", "), c = xe(u, s), f = 0, l = 0;
            return n === zi ? a > 0 && (e = zi,
            f = a,
            l = o.length) : n === Ii ? c > 0 && (e = Ii,
            f = c,
            l = s.length) : (f = Math.max(a, c),
            e = f > 0 ? a > c ? zi : Ii : null,
            l = e ? e === zi ? o.length : s.length : 0),
            {
                type: e,
                timeout: f,
                propCount: l,
                hasTransform: e === zi && Fi.test(r[ji + "Property"])
            }
        }
        function xe(t, n) {
            for (; t.length < n.length; )
                t = t.concat(t);
            return Math.max.apply(null, n.map(function(n, e) {
                return we(n) + we(t[e])
            }))
        }
        function we(t) {
            return 1e3 * Number(t.slice(0, -1))
        }
        function Me(t, n) {
            var e = t.elm;
            e._leaveCb && (e._leaveCb.cancelled = !0,
            e._leaveCb());
            var i = ve(t.data.transition);
            if (i && !e._enterCb && 1 === e.nodeType) {
                for (var o = i.css, a = i.type, u = i.enterClass, s = i.enterToClass, c = i.enterActiveClass, f = i.appearClass, l = i.appearToClass, p = i.appearActiveClass, d = i.beforeEnter, v = i.enter, g = i.afterEnter, y = i.enterCancelled, m = i.beforeAppear, b = i.appear, x = i.afterAppear, w = i.appearCancelled, M = i.duration, A = Pr, S = Pr.$vnode; S && S.parent; )
                    S = S.parent,
                    A = S.context;
                var k = !A._isMounted || !t.isRootInsert;
                if (!k || b || "" === b) {
                    var C = k && f ? f : u
                      , E = k && p ? p : c
                      , T = k && l ? l : s
                      , N = k ? m || d : d
                      , O = k && "function" == typeof b ? b : v
                      , R = k ? x || g : g
                      , P = k ? w || y : y
                      , L = r(h(M) ? M.enter : M)
                      , z = o !== !1 && !sr
                      , I = ke(O)
                      , j = e._enterCb = _(function() {
                        z && (_e(e, T),
                        _e(e, E)),
                        j.cancelled ? (z && _e(e, C),
                        P && P(e)) : R && R(e),
                        e._enterCb = null
                    });
                    t.data.show || G(t.data.hook || (t.data.hook = {}), "insert", function() {
                        var n = e.parentNode
                          , r = n && n._pending && n._pending[t.key];
                        r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(),
                        O && O(e, j)
                    }),
                    N && N(e),
                    z && (ye(e, C),
                    ye(e, E),
                    ge(function() {
                        ye(e, T),
                        _e(e, C),
                        j.cancelled || I || (Se(L) ? setTimeout(j, L) : me(e, a, j))
                    })),
                    t.data.show && (n && n(),
                    O && O(e, j)),
                    z || I || j()
                }
            }
        }
        function Ae(t, n) {
            function e() {
                w.cancelled || (t.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t),
                l && l(i),
                m && (ye(i, s),
                ye(i, f),
                ge(function() {
                    ye(i, c),
                    _e(i, s),
                    w.cancelled || b || (Se(x) ? setTimeout(w, x) : me(i, u, w))
                })),
                p && p(i, w),
                m || b || w())
            }
            var i = t.elm;
            i._enterCb && (i._enterCb.cancelled = !0,
            i._enterCb());
            var o = ve(t.data.transition);
            if (!o)
                return n();
            if (!i._leaveCb && 1 === i.nodeType) {
                var a = o.css
                  , u = o.type
                  , s = o.leaveClass
                  , c = o.leaveToClass
                  , f = o.leaveActiveClass
                  , l = o.beforeLeave
                  , p = o.leave
                  , d = o.afterLeave
                  , v = o.leaveCancelled
                  , g = o.delayLeave
                  , y = o.duration
                  , m = a !== !1 && !sr
                  , b = ke(p)
                  , x = r(h(y) ? y.leave : y)
                  , w = i._leaveCb = _(function() {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null),
                    m && (_e(i, c),
                    _e(i, f)),
                    w.cancelled ? (m && _e(i, s),
                    v && v(i)) : (n(),
                    d && d(i)),
                    i._leaveCb = null
                });
                g ? g(e) : e()
            }
        }
        function Se(t) {
            return "number" == typeof t && !isNaN(t)
        }
        function ke(t) {
            if (!t)
                return !1;
            var n = t.fns;
            return n ? ke(Array.isArray(n) ? n[0] : n) : (t._length || t.length) > 1
        }
        function Ce(t, n) {
            n.data.show || Me(n)
        }
        function Ee(t, n, e) {
            var r = n.value
              , i = t.multiple;
            if (!i || Array.isArray(r)) {
                for (var o, a, u = 0, s = t.options.length; u < s; u++)
                    if (a = t.options[u],
                    i)
                        o = y(r, Ne(a)) > -1,
                        a.selected !== o && (a.selected = o);
                    else if (g(Ne(a), r))
                        return void (t.selectedIndex !== u && (t.selectedIndex = u));
                i || (t.selectedIndex = -1)
            }
        }
        function Te(t, n) {
            for (var e = 0, r = n.length; e < r; e++)
                if (g(Ne(n[e]), t))
                    return !1;
            return !0
        }
        function Ne(t) {
            return "_value"in t ? t._value : t.value
        }
        function Oe(t) {
            t.target.composing = !0
        }
        function Re(t) {
            t.target.composing = !1,
            Pe(t.target, "input")
        }
        function Pe(t, n) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(n, !0, !0),
            t.dispatchEvent(e)
        }
        function Le(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : Le(t.componentInstance._vnode)
        }
        function ze(t) {
            var n = t && t.componentOptions;
            return n && n.Ctor.options.abstract ? ze(J(n.children)) : t
        }
        function Ie(t) {
            var n = {}
              , e = t.$options;
            for (var r in e.propsData)
                n[r] = t[r];
            var i = e._parentListeners;
            for (var o in i)
                n[Ve(o)] = i[o];
            return n
        }
        function je(t, n) {
            return /\d-keep-alive$/.test(n.tag) ? t("keep-alive") : null
        }
        function Ue(t) {
            for (; t = t.parent; )
                if (t.data.transition)
                    return !0
        }
        function De(t, n) {
            return n.key === t.key && n.tag === t.tag
        }
        function $e(t) {
            t.elm._moveCb && t.elm._moveCb(),
            t.elm._enterCb && t.elm._enterCb()
        }
        function Be(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }
        function Fe(t) {
            var n = t.data.pos
              , e = t.data.newPos
              , r = n.left - e.left
              , i = n.top - e.top;
            if (r || i) {
                t.data.moved = !0;
                var o = t.elm.style;
                o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)",
                o.transitionDuration = "0s"
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var qe, Ye, He = (i("slot,component", !0),
        Object.prototype.hasOwnProperty), We = /-(\w)/g, Ve = s(function(t) {
            return t.replace(We, function(t, n) {
                return n ? n.toUpperCase() : ""
            })
        }), Xe = s(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }), Ge = /([^-])([A-Z])/g, Ze = s(function(t) {
            return t.replace(Ge, "$1-$2").replace(Ge, "$1-$2").toLowerCase()
        }), Ke = Object.prototype.toString, Qe = "[object Object]", Je = function() {
            return !1
        }, tr = function(t) {
            return t
        }, nr = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: Je,
            isUnknownElement: Je,
            getTagNamespace: v,
            parsePlatformTagName: tr,
            mustUseProp: Je,
            _assetTypes: ["component", "directive", "filter"],
            _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
            _maxUpdateCount: 100
        }, er = Object.freeze({}), rr = /[^\w.$]/, ir = "__proto__"in {}, or = "undefined" != typeof window, ar = or && window.navigator.userAgent.toLowerCase(), ur = ar && /msie|trident/.test(ar), sr = ar && ar.indexOf("msie 9.0") > 0, cr = ar && ar.indexOf("edge/") > 0, fr = ar && ar.indexOf("android") > 0, lr = ar && /iphone|ipad|ipod|ios/.test(ar), hr = ar && /chrome\/\d+/.test(ar) && !cr, pr = function() {
            return void 0 === qe && (qe = !or && void 0 !== t && "server" === t.process.env.VUE_ENV),
            qe
        }, dr = or && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, vr = "undefined" != typeof Symbol && w(Symbol) && "undefined" != typeof Reflect && w(Reflect.ownKeys), gr = function() {
            function t() {
                r = !1;
                var t = e.slice(0);
                e.length = 0;
                for (var n = 0; n < t.length; n++)
                    t[n]()
            }
            var n, e = [], r = !1;
            if ("undefined" != typeof Promise && w(Promise)) {
                var i = Promise.resolve()
                  , o = function(t) {
                    console.error(t)
                };
                n = function() {
                    i.then(t).catch(o),
                    lr && setTimeout(v)
                }
            } else if ("undefined" == typeof MutationObserver || !w(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
                n = function() {
                    setTimeout(t, 0)
                }
                
            else {
                var a = 1
                  , u = new MutationObserver(t)
                  , s = document.createTextNode(String(a));
                u.observe(s, {
                    characterData: !0
                }),
                n = function() {
                    a = (a + 1) % 2,
                    s.data = String(a)
                }
            }
            return function(t, i) {
                var o;
                if (e.push(function() {
                    t && t.call(i),
                    o && o(i)
                }),
                r || (r = !0,
                n()),
                !t && "undefined" != typeof Promise)
                    return new Promise(function(t) {
                        o = t
                    }
                    )
            }
        }();
        Ye = "undefined" != typeof Set && w(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return this.set[t] === !0
            }
            ,
            t.prototype.add = function(t) {
                this.set[t] = !0
            }
            ,
            t.prototype.clear = function() {
                this.set = Object.create(null)
            }
            ,
            t
        }();
        var yr = v
          , _r = 0
          , mr = function() {
            this.id = _r++,
            this.subs = []
        };
        mr.prototype.addSub = function(t) {
            this.subs.push(t)
        }
        ,
        mr.prototype.removeSub = function(t) {
            o(this.subs, t)
        }
        ,
        mr.prototype.depend = function() {
            mr.target && mr.target.addDep(this)
        }
        ,
        mr.prototype.notify = function() {
            for (var t = this.subs.slice(), n = 0, e = t.length; n < e; n++)
                t[n].update()
        }
        ,
        mr.target = null;
        var br = []
          , xr = Array.prototype
          , wr = Object.create(xr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var n = xr[t];
            b(wr, t, function() {
                for (var e = arguments, r = arguments.length, i = new Array(r); r--; )
                    i[r] = e[r];
                var o, a = n.apply(this, i), u = this.__ob__;
                switch (t) {
                case "push":
                    o = i;
                    break;
                case "unshift":
                    o = i;
                    break;
                case "splice":
                    o = i.slice(2)
                }
                return o && u.observeArray(o),
                u.dep.notify(),
                a
            })
        });
        var Mr = Object.getOwnPropertyNames(wr)
          , Ar = {
            shouldConvert: !0,
            isSettingProps: !1
        }
          , Sr = function(t) {
            if (this.value = t,
            this.dep = new mr,
            this.vmCount = 0,
            b(t, "__ob__", this),
            Array.isArray(t)) {
                (ir ? S : k)(t, wr, Mr),
                this.observeArray(t)
            } else
                this.walk(t)
        };
        Sr.prototype.walk = function(t) {
            for (var n = Object.keys(t), e = 0; e < n.length; e++)
                E(t, n[e], t[n[e]])
        }
        ,
        Sr.prototype.observeArray = function(t) {
            for (var n = 0, e = t.length; n < e; n++)
                C(t[n])
        }
        ;
        var kr = nr.optionMergeStrategies;
        kr.data = function(t, n, e) {
            return e ? t || n ? function() {
                var r = "function" == typeof n ? n.call(e) : n
                  , i = "function" == typeof t ? t.call(e) : void 0;
                return r ? R(r, i) : i
            }
            : void 0 : n ? "function" != typeof n ? t : t ? function() {
                return R(n.call(this), t.call(this))
            }
            : n : t
        }
        ,
        nr._lifecycleHooks.forEach(function(t) {
            kr[t] = P
        }),
        nr._assetTypes.forEach(function(t) {
            kr[t + "s"] = L
        }),
        kr.watch = function(t, n) {
            if (!n)
                return Object.create(t || null);
            if (!t)
                return n;
            var e = {};
            l(e, t);
            for (var r in n) {
                var i = e[r]
                  , o = n[r];
                i && !Array.isArray(i) && (i = [i]),
                e[r] = i ? i.concat(o) : [o]
            }
            return e
        }
        ,
        kr.props = kr.methods = kr.computed = function(t, n) {
            if (!n)
                return Object.create(t || null);
            if (!t)
                return n;
            var e = Object.create(null);
            return l(e, t),
            l(e, n),
            e
        }
        ;
        var Cr = function(t, n) {
            return void 0 === n ? t : n
        }
          , Er = function(t, n, e, r, i, o, a) {
            this.tag = t,
            this.data = n,
            this.children = e,
            this.text = r,
            this.elm = i,
            this.ns = void 0,
            this.context = o,
            this.functionalContext = void 0,
            this.key = n && n.key,
            this.componentOptions = a,
            this.componentInstance = void 0,
            this.parent = void 0,
            this.raw = !1,
            this.isStatic = !1,
            this.isRootInsert = !0,
            this.isComment = !1,
            this.isCloned = !1,
            this.isOnce = !1
        }
          , Tr = {
            child: {}
        };
        Tr.child.get = function() {
            return this.componentInstance
        }
        ,
        Object.defineProperties(Er.prototype, Tr);
        var Nr, Or = function() {
            var t = new Er;
            return t.text = "",
            t.isComment = !0,
            t
        }, Rr = s(function(t) {
            var n = "~" === t.charAt(0);
            t = n ? t.slice(1) : t;
            var e = "!" === t.charAt(0);
            return t = e ? t.slice(1) : t,
            {
                name: t,
                once: n,
                capture: e
            }
        }), Pr = null, Lr = [], zr = {}, Ir = !1, jr = !1, Ur = 0, Dr = 0, $r = function(t, n, e, r) {
            this.vm = t,
            t._watchers.push(this),
            r ? (this.deep = !!r.deep,
            this.user = !!r.user,
            this.lazy = !!r.lazy,
            this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1,
            this.cb = e,
            this.id = ++Dr,
            this.active = !0,
            this.dirty = this.lazy,
            this.deps = [],
            this.newDeps = [],
            this.depIds = new Ye,
            this.newDepIds = new Ye,
            this.expression = "",
            "function" == typeof n ? this.getter = n : (this.getter = x(n),
            this.getter || (this.getter = function() {}
            )),
            this.value = this.lazy ? void 0 : this.get()
        };
        $r.prototype.get = function() {
            M(this);
            var t, n = this.vm;
            if (this.user)
                try {
                    t = this.getter.call(n, n)
                } catch (t) {
                    q(t, n, 'getter for watcher "' + this.expression + '"')
                }
            else
                t = this.getter.call(n, n);
            return this.deep && mt(t),
            A(),
            this.cleanupDeps(),
            t
        }
        ,
        $r.prototype.addDep = function(t) {
            var n = t.id;
            this.newDepIds.has(n) || (this.newDepIds.add(n),
            this.newDeps.push(t),
            this.depIds.has(n) || t.addSub(this))
        }
        ,
        $r.prototype.cleanupDeps = function() {
            for (var t = this, n = this.deps.length; n--; ) {
                var e = t.deps[n];
                t.newDepIds.has(e.id) || e.removeSub(t)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds,
            this.newDepIds = r,
            this.newDepIds.clear(),
            r = this.deps,
            this.deps = this.newDeps,
            this.newDeps = r,
            this.newDeps.length = 0
        }
        ,
        $r.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : _t(this)
        }
        ,
        $r.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || h(t) || this.deep) {
                    var n = this.value;
                    if (this.value = t,
                    this.user)
                        try {
                            this.cb.call(this.vm, t, n)
                        } catch (t) {
                            q(t, this.vm, 'callback for watcher "' + this.expression + '"')
                        }
                    else
                        this.cb.call(this.vm, t, n)
                }
            }
        }
        ,
        $r.prototype.evaluate = function() {
            this.value = this.get(),
            this.dirty = !1
        }
        ,
        $r.prototype.depend = function() {
            for (var t = this, n = this.deps.length; n--; )
                t.deps[n].depend()
        }
        ,
        $r.prototype.teardown = function() {
            var t = this;
            if (this.active) {
                this.vm._isBeingDestroyed || o(this.vm._watchers, this);
                for (var n = this.deps.length; n--; )
                    t.deps[n].removeSub(t);
                this.active = !1
            }
        }
        ;
        var Br = new Ye
          , Fr = {
            enumerable: !0,
            configurable: !0,
            get: v,
            set: v
        }
          , qr = {
            lazy: !0
        }
          , Yr = {
            init: function(t, n, e, r) {
                if (!t.componentInstance || t.componentInstance._isDestroyed) {
                    (t.componentInstance = Lt(t, Pr, e, r)).$mount(n ? t.elm : void 0, n)
                } else if (t.data.keepAlive) {
                    var i = t;
                    Yr.prepatch(i, i)
                }
            },
            prepatch: function(t, n) {
                var e = n.componentOptions;
                lt(n.componentInstance = t.componentInstance, e.propsData, e.listeners, n, e.children)
            },
            insert: function(t) {
                t.componentInstance._isMounted || (t.componentInstance._isMounted = !0,
                vt(t.componentInstance, "mounted")),
                t.data.keepAlive && pt(t.componentInstance, !0)
            },
            destroy: function(t) {
                t.componentInstance._isDestroyed || (t.data.keepAlive ? dt(t.componentInstance, !0) : t.componentInstance.$destroy())
            }
        }
          , Hr = Object.keys(Yr)
          , Wr = 1
          , Vr = 2
          , Xr = 0;
        rn(cn),
        Ot(cn),
        it(cn),
        ct(cn),
        tn(cn);
        var Gr = [String, RegExp]
          , Zr = {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Gr,
                exclude: Gr
            },
            created: function() {
                this.cache = Object.create(null)
            },
            destroyed: function() {
                var t = this;
                for (var n in t.cache)
                    mn(t.cache[n])
            },
            watch: {
                include: function(t) {
                    _n(this.cache, function(n) {
                        return yn(t, n)
                    })
                },
                exclude: function(t) {
                    _n(this.cache, function(n) {
                        return !yn(t, n)
                    })
                }
            },
            render: function() {
                var t = J(this.$slots.default)
                  , n = t && t.componentOptions;
                if (n) {
                    var e = gn(n);
                    if (e && (this.include && !yn(this.include, e) || this.exclude && yn(this.exclude, e)))
                        return t;
                    var r = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                    this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t,
                    t.data.keepAlive = !0
                }
                return t
            }
        }
          , Kr = {
            KeepAlive: Zr
        };
        bn(cn),
        Object.defineProperty(cn.prototype, "$isServer", {
            get: pr
        }),
        cn.version = "2.2.4";
        var Qr, Jr, ti = i("input,textarea,option,select"), ni = function(t, n, e) {
            return "value" === e && ti(t) && "button" !== n || "selected" === e && "option" === t || "checked" === e && "input" === t || "muted" === e && "video" === t
        }, ei = i("contenteditable,draggable,spellcheck"), ri = i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), ii = "http://www.w3.org/1999/xlink", oi = function(t) {
            return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
        }, ai = function(t) {
            return oi(t) ? t.slice(6, t.length) : ""
        }, ui = function(t) {
            return null == t || t === !1
        }, si = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        }, ci = i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"), fi = i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), li = function(t) {
            return ci(t) || fi(t)
        }, hi = Object.create(null), pi = Object.freeze({
            createElement: Tn,
            createElementNS: Nn,
            createTextNode: On,
            createComment: Rn,
            insertBefore: Pn,
            removeChild: Ln,
            appendChild: zn,
            parentNode: In,
            nextSibling: jn,
            tagName: Un,
            setTextContent: Dn,
            setAttribute: $n
        }), di = {
            create: function(t, n) {
                Bn(n)
            },
            update: function(t, n) {
                t.data.ref !== n.data.ref && (Bn(t, !0),
                Bn(n))
            },
            destroy: function(t) {
                Bn(t, !0)
            }
        }, vi = new Er("",{},[]), gi = ["create", "activate", "update", "remove", "destroy"], yi = {
            create: Vn,
            update: Vn,
            destroy: function(t) {
                Vn(t, vi)
            }
        }, _i = Object.create(null), mi = [di, yi], bi = {
            create: Qn,
            update: Qn
        }, xi = {
            create: te,
            update: te
        }, wi = "__r", Mi = "__c", Ai = {
            create: ie,
            update: ie
        }, Si = {
            create: oe,
            update: oe
        }, ki = s(function(t) {
            var n = {}
              , e = /;(?![^(]*\))/g
              , r = /:(.+)/;
            return t.split(e).forEach(function(t) {
                if (t) {
                    var e = t.split(r);
                    e.length > 1 && (n[e[0].trim()] = e[1].trim())
                }
            }),
            n
        }), Ci = /^--/, Ei = /\s*!important$/, Ti = function(t, n, e) {
            Ci.test(n) ? t.style.setProperty(n, e) : Ei.test(e) ? t.style.setProperty(n, e.replace(Ei, ""), "important") : t.style[Oi(n)] = e
        }, Ni = ["Webkit", "Moz", "ms"], Oi = s(function(t) {
            if (Jr = Jr || document.createElement("div"),
            "filter" !== (t = Ve(t)) && t in Jr.style)
                return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), e = 0; e < Ni.length; e++) {
                var r = Ni[e] + n;
                if (r in Jr.style)
                    return r
            }
        }), Ri = {
            create: he,
            update: he
        }, Pi = s(function(t) {
            return {
                enterClass: t + "-enter",
                enterToClass: t + "-enter-to",
                enterActiveClass: t + "-enter-active",
                leaveClass: t + "-leave",
                leaveToClass: t + "-leave-to",
                leaveActiveClass: t + "-leave-active"
            }
        }), Li = or && !sr, zi = "transition", Ii = "animation", ji = "transition", Ui = "transitionend", Di = "animation", $i = "animationend";
        Li && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ji = "WebkitTransition",
        Ui = "webkitTransitionEnd"),
        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Di = "WebkitAnimation",
        $i = "webkitAnimationEnd"));
        var Bi = or && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout
          , Fi = /\b(transform|all)(,|$)/
          , qi = or ? {
            create: Ce,
            activate: Ce,
            remove: function(t, n) {
                t.data.show ? n() : Ae(t, n)
            }
        } : {}
          , Yi = [bi, xi, Ai, Si, Ri, qi]
          , Hi = Yi.concat(mi)
          , Wi = Wn({
            nodeOps: pi,
            modules: Hi
        });
        sr && document.addEventListener("selectionchange", function() {
            var t = document.activeElement;
            t && t.vmodel && Pe(t, "input")
        });
        var Vi = {
            inserted: function(t, n, e) {
                if ("select" === e.tag) {
                    var r = function() {
                        Ee(t, n, e.context)
                    };
                    r(),
                    (ur || cr) && setTimeout(r, 0)
                } else
                    "textarea" !== e.tag && "text" !== t.type || (t._vModifiers = n.modifiers,
                    n.modifiers.lazy || (fr || (t.addEventListener("compositionstart", Oe),
                    t.addEventListener("compositionend", Re)),
                    sr && (t.vmodel = !0)))
            },
            componentUpdated: function(t, n, e) {
                if ("select" === e.tag) {
                    Ee(t, n, e.context);
                    (t.multiple ? n.value.some(function(n) {
                        return Te(n, t.options)
                    }) : n.value !== n.oldValue && Te(n.value, t.options)) && Pe(t, "change")
                }
            }
        }
          , Xi = {
            bind: function(t, n, e) {
                var r = n.value;
                e = Le(e);
                var i = e.data && e.data.transition
                  , o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && i && !sr ? (e.data.show = !0,
                Me(e, function() {
                    t.style.display = o
                })) : t.style.display = r ? o : "none"
            },
            update: function(t, n, e) {
                var r = n.value;
                r !== n.oldValue && (e = Le(e),
                e.data && e.data.transition && !sr ? (e.data.show = !0,
                r ? Me(e, function() {
                    t.style.display = t.__vOriginalDisplay
                }) : Ae(e, function() {
                    t.style.display = "none"
                })) : t.style.display = r ? t.__vOriginalDisplay : "none")
            },
            unbind: function(t, n, e, r, i) {
                i || (t.style.display = t.__vOriginalDisplay)
            }
        }
          , Gi = {
            model: Vi,
            show: Xi
        }
          , Zi = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        }
          , Ki = {
            name: "transition",
            props: Zi,
            abstract: !0,
            render: function(t) {
                var n = this
                  , e = this.$slots.default;
                if (e && (e = e.filter(function(t) {
                    return t.tag
                }),
                e.length)) {
                    var r = this.mode
                      , i = e[0];
                    if (Ue(this.$vnode))
                        return i;
                    var o = ze(i);
                    if (!o)
                        return i;
                    if (this._leaving)
                        return je(t, i);
                    var a = "__transition-" + this._uid + "-";
                    o.key = null == o.key ? a + o.tag : u(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                    var s = (o.data || (o.data = {})).transition = Ie(this)
                      , c = this._vnode
                      , f = ze(c);
                    if (o.data.directives && o.data.directives.some(function(t) {
                        return "show" === t.name
                    }) && (o.data.show = !0),
                    f && f.data && !De(o, f)) {
                        var h = f && (f.data.transition = l({}, s));
                        if ("out-in" === r)
                            return this._leaving = !0,
                            G(h, "afterLeave", function() {
                                n._leaving = !1,
                                n.$forceUpdate()
                            }),
                            je(t, i);
                        if ("in-out" === r) {
                            var p, d = function() {
                                p()
                            };
                            G(s, "afterEnter", d),
                            G(s, "enterCancelled", d),
                            G(h, "delayLeave", function(t) {
                                p = t
                            })
                        }
                    }
                    return i
                }
            }
        }
          , Qi = l({
            tag: String,
            moveClass: String
        }, Zi);
        delete Qi.mode;
        var Ji = {
            props: Qi,
            render: function(t) {
                for (var n = this.tag || this.$vnode.data.tag || "span", e = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Ie(this), u = 0; u < i.length; u++) {
                    var s = i[u];
                    if (s.tag)
                        if (null != s.key && 0 !== String(s.key).indexOf("__vlist"))
                            o.push(s),
                            e[s.key] = s,
                            (s.data || (s.data = {})).transition = a;
                        else
                            ;
                }
                if (r) {
                    for (var c = [], f = [], l = 0; l < r.length; l++) {
                        var h = r[l];
                        h.data.transition = a,
                        h.data.pos = h.elm.getBoundingClientRect(),
                        e[h.key] ? c.push(h) : f.push(h)
                    }
                    this.kept = t(n, null, c),
                    this.removed = f
                }
                return t(n, null, o)
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0),
                this._vnode = this.kept
            },
            updated: function() {
                var t = this.prevChildren
                  , n = this.moveClass || (this.name || "v") + "-move";
                if (t.length && this.hasMove(t[0].elm, n)) {
                    t.forEach($e),
                    t.forEach(Be),
                    t.forEach(Fe);
                    var e = document.body;
                    e.offsetHeight;
                    t.forEach(function(t) {
                        if (t.data.moved) {
                            var e = t.elm
                              , r = e.style;
                            ye(e, n),
                            r.transform = r.WebkitTransform = r.transitionDuration = "",
                            e.addEventListener(Ui, e._moveCb = function t(r) {
                                r && !/transform$/.test(r.propertyName) || (e.removeEventListener(Ui, t),
                                e._moveCb = null,
                                _e(e, n))
                            }
                            )
                        }
                    })
                }
            },
            methods: {
                hasMove: function(t, n) {
                    if (!Li)
                        return !1;
                    if (null != this._hasMove)
                        return this._hasMove;
                    var e = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        de(e, t)
                    }),
                    pe(e, n),
                    e.style.display = "none",
                    this.$el.appendChild(e);
                    var r = be(e);
                    return this.$el.removeChild(e),
                    this._hasMove = r.hasTransform
                }
            }
        }
          , to = {
            Transition: Ki,
            TransitionGroup: Ji
        };
        cn.config.mustUseProp = ni,
        cn.config.isReservedTag = li,
        cn.config.getTagNamespace = kn,
        cn.config.isUnknownElement = Cn,
        l(cn.options.directives, Gi),
        l(cn.options.components, to),
        cn.prototype.__patch__ = or ? Wi : v,
        cn.prototype.$mount = function(t, n) {
            return t = t && or ? En(t) : void 0,
            ft(this, t, n)
        }
        ,
        setTimeout(function() {
            nr.devtools && dr && dr.emit("init", cn)
        }, 0),
        n.default = cn
    }
    ).call(n, e(6))
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function i(t) {
        if (t && t.__esModule)
            return t;
        var n = {};
        if (null != t)
            for (var e in t)
                Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t,
        n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = e(1)
      , a = e(3)
      , u = i(a)
      , s = e(0)
      , c = r(s)
      , f = e(22)
      , l = r(f);
    n.default = {
        name: "app",
        components: {
            graph: l.default
        },
        data: function() {
            return {
                forenames: [],
                shareUrl: window.location.toString(),
                searchQuery: "",
                range: o.initialRange
            }
        },
        mounted: function() {
            var t = this;
            /*console.log("mounted");*/
            var n = c.default.flatMap(window.location.hash.slice(1).split(","), function(t) {
                return /-[hf]$/.test(t) ? [t] : [t + "-f", t + "-h"]
            });
            u.json(forenamesUrl, function(e, r) {
                if (e)
                    return window.alert(e);
                /*console.log("loaded",r.length),*/
                c.default.each(r, function(t) {
                    t.selected = c.default.includes(n, t.id + "-" + ("m" === t.sex ? "h" : "f")),
                    t.style = {},
                    t.births = c.default.map(o.years, function(n, e) {
                        return {
                            year: n,
                            births: t.births[e]
                        }
                    })
                }),
                t.forenames = r,
                t.$nextTick(window.onresize)
            })
        },
        watch: {
            forenames: "refreshYearRange",
            selectedForenames: function(t) {
                window.location.hash = t.map(function(t) {
                    return t.id + "-" + ("m" === t.sex ? "h" : "f")
                }).join(","),
                this.shareUrl = window.location.toString()
            }
        },
        methods: {
            toggleForename: function(t) {
                t.selected = !t.selected
            },
            setYearRange: function(t) {
                this.range = t,
                this.refreshYearRange()
            },
            refreshYearRange: function() {
                var t = this;
                /*console.log("refreshYearRange");*/
                var n = (0,
                o.maxBirthsCount)(this.forenames, this.range)
                  , e = u.scalePow().exponent(.8).domain([0, n]).range([16, 40]);
                (0,
                c.default)(this.forenames).each(function(n) {
                    var r = e((0,
                    o.maxBirthsCount)([n], t.range)) + "px";
                    n.style = {
                        fontSize: r
                    }
                })
            },
            forenameStyle: function(t) {
                var n = t.selected ? (0,
                o.forenameColor)(t) : "";
                return c.default.assign({
                    backgroundColor: n
                }, t.style)
            },
            selectUrl: function() {
                this.$refs["share-url"].select()
            }
        },
        computed: {
            selectedForenames: function() {
                return c.default.filter(this.forenames, "selected")
            },
            displayedForenames: function() {
                if ("" === this.searchQuery)
                    return this.forenames;
                var t = function(t) {
                    return c.default.deburr(t).toLowerCase()
                }
                  , n = t(this.searchQuery);
                return this.forenames.filter(function(e) {
                    return t(e.forename).includes(n)
                })
            }
        }
    }
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function i(t) {
        if (t && t.__esModule)
            return t;
        var n = {};
        if (null != t)
            for (var e in t)
                Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.default = t,
        n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = e(3)
      , a = i(o)
      , u = e(0)
      , s = r(u)
      , c = e(1)
      , f = e(23)
      , l = r(f);
    n.default = {
        name: "graph",
        props: ["forenames"],
        components: {
            popup: l.default
        },
        data: function() {
            var t = a.scaleLinear()
              , n = a.scaleLinear()
              , e = a.axisBottom(t).tickFormat(String).tickSize(6, 1)
              , r = a.axisLeft(n).tickFormat(String).ticks(6).tickSize(-100, 0, 1);
            return {
                popup: {
                    show: !1,
                    position: null
                },
                range: c.initialRange,
                zoomed: !1,
                currentYear: c.years[0],
                xScale: t,
                yScale: n,
                xAxis: e,
                yAxis: r,
                lineGenerator: a.line().x(function(n) {
                    return t(n.year)
                }).y(function(t) {
                    return n(t.births)
                })
            }
        },
        watch: {
            forenames: "updateLines"
        },
        mounted: function() {
            var t = this;
            this.svg = a.select(this.$refs.svg),
            this.$el.addEventListener("mouseenter", function(n) {
                t.popup.show = t.forenames.length > 0,
                t.svg.selectAll(".circles > g").attr("visibility", "")
            }, !0),
            this.$el.addEventListener("mouseleave", function(n) {
                t.popup.show = !1,
                t.svg.selectAll(".circles > g").attr("visibility", "hidden")
            }, !0),
            this.$el.addEventListener("mousemove", function(n) {
                if (t.popup.show) {
                    /*console.log("0000");*/
                    var e = n.clientX - t.$refs.svg.getBoundingClientRect().left;
                    t.popup.position = e < t.$el.offsetWidth / 2 ? "right" : null,
                    t.currentYear = getYearMonth(t.xScale.invert(e)),
                    t.svg.selectAll(".circles > g").attr("visibility", function(n) {
                        return n.year === t.currentYear ? "" : "hidden"
                    })
                }
            }, !0),
            window.onresize = this.onresize.bind(this),
            this.onresize()
        },
        methods: {
            yearClick: function(t) {
                this.zoomed && this.range.from === t.from ? (this.range = c.initialRange,
                this.zoomed = !1) : (this.range = {
                    from: t.from,
                    to: t.to + 1
                },
                this.zoomed = !0),
                this.updateAxis(),
                /*console.log("update axis",this.range.from,this.range.to),*/
                this.svg.select(".x-axis").transition().duration(c.defaultDuration).call(this.xAxis),
                this.svg.selectAll(".prenoms .lines g").transition().duration(c.defaultDuration).call(this.redrawExistingLines),
                a.select(this.$refs.labels).selectAll("* > div").transition().duration(c.defaultDuration).call(this.placeLabel.bind(this)),
                this.svg.selectAll(".circles g").transition().duration(c.defaultDuration).attr("transform", this.transformForCircle),
                this.$emit("year-range", this.range)
            },
            redrawExistingLines: function(t) {
                var n = this;
                t.style("clip-path", "url(#graphs-clip-path)").select("g path").attr("d", function(t) {
                    return n.lineGenerator(t.births)
                })
            },
            placeLabel: function(t) {
                var n = this
                  , e = [];
                t.each(function(t, r) {
                    var i = (0,
                    s.default)(t.births).filter(function(t) {
                        var e = t.year;
                        return e >= n.range.from && e <= n.range.to - 1
                    }).maxBy("births")
                      , o = i.year
                      , a = i.births
                      , u = n.yScale(a);
                    e[r] = {
                        left: n.xScale(o),
                        top: u
                    }
                }),
                t.style("left", function(t, n) {
                    return e[n].left + "px"
                }).style("top", function(t, n) {
                    return e[n].top + "px"
                }).style("background-color", c.forenameColor)
            },
            onresize: function() {
                /*console.log("resize");*/
                var t = this.$el.offsetWidth
                  , n = this.$el.offsetHeight;
                this.xScale.range([50, t - 100]),
                this.yScale.range([n - 50, 25]),
                this.yAxis.tickSize(-(this.xScale.range()[1] - this.xScale.range()[0]), 0, 1),
                this.xAxis.tickSize(-(this.yScale.range()[0] - this.yScale.range()[1]), 0, 1),
                this.svg.select(".x-axis").attr("transform", "translate(0, " + (this.yScale.range()[0] + 6) + ")").call(this.xAxis),
                this.svg.select(".y-axis").attr("transform", "translate(" + this.xScale.range()[0] + ", 0)").call(this.yAxis),
                this.svg.select("#graphs-clip-path rect").attr("x", this.xScale.range()[0]).attr("y", 0).attr("width", this.xScale.range()[1] - this.xScale.range()[0]).attr("height", n),
                this.svg.selectAll(".playground-bg, .playground").attr("x", this.xScale.range()[0]).attr("y", this.yScale.range()[1]).attr("width", this.xScale.range()[1] - this.xScale.range()[0]).attr("height", this.yScale.range()[0] - this.yScale.range()[1]),
                this.svg.select(".playground").attr("width", this.xScale.range()[1] - this.xScale.range()[0] + 20),
                this.svg.selectAll(".prenoms .lines g").call(this.redrawExistingLines),
                this.svg.selectAll(".circles > g").attr("transform", this.transformForCircle)
            },
            transformForCircle: function(t) {
                return "translate(" + this.xScale(t.year) + " " + this.yScale(t.births) + ")"
            },
            updateAxis: function() {
                this.xScale.domain([this.range.from, this.range.to - 1]),
                this.xAxis.tickValues(s.default.range(this.range.from, this.range.to, 5));
                var t = Math.max(1.1 * (0,
                c.maxBirthsCount)(this.forenames, this.range), 100);
                this.yScale.domain([0, t])
            },
            updateLines: function() {
                function t(t, n) {
                    return "clip_path_prenom_" + n
                }
                function n(t) {
                    return t.exit().transition().ease(a.easeExpOut).duration(c.defaultDuration).attr("opacity", 0).remove()
                }
                var e = this;
                /*console.log("updateLines"),*/
                this.popup.show = this.popup.show && this.forenames.length > 0,
                this.updateAxis(),
                this.svg.select(".y-axis").transition().duration(c.defaultDuration).call(this.yAxis);
                var r = this.lineGenerator(c.years.map(function(t) {
                    return {
                        year: t,
                        births: 0
                    }
                }))
                  , i = this.svg.select(".prenoms .lines").selectAll("g").data(this.forenames, function(t) {
                    return t.id
                })
                  , o = i.enter().append("g").attr("opacity", 1).classed("line", !0);
                i.transition().duration(c.defaultDuration).call(s.default.partial(this.redrawExistingLines)),
                o.append("clipPath").attr("class", "clippath").attr("id", t).append("rect").attr("x", this.xScale.range()[0]).attr("y", this.yScale.range()[1] - 10).attr("width", 0).attr("height", this.yScale.range()[0] - this.yScale.range()[1] + 20),
                o.append("path").attr("stroke", c.forenameColor).style("clip-path", function(n, e) {
                    return "url(#" + t(n, e) + ")"
                }).attr("d", function(t) {
                    return e.lineGenerator(t.births)
                });
                var u = o.transition().duration(c.defaultDuration).ease(a.easeLinear);
                u.select(".clippath").remove().select("rect").attr("width", this.xScale.range()[1] - this.xScale.range()[0]),
                u.select("path").on("end", function() {
                    this.style.clipPath = "url(#graphs-clip-path)"
                });
                var f = a.select(this.$refs.labels).selectAll("* > div").data(this.forenames, function(t) {
                    return t.id
                });
                f.transition().duration(c.defaultDuration).call(this.placeLabel.bind(this)),
                f.exit().remove().transition().duration(c.defaultDuration).style("opacity", 0),
                f.enter().append("div").style("opacity", 0).style("cursor", "pointer").text(function(t) {
                    return t.forenameUnique
                }).on("click", function(t) {
                    e.$emit("forename:remove", t)
                }).call(this.placeLabel.bind(this)).transition().duration(c.defaultDuration).style("opacity", 1);
                var l = s.default.flatMap(this.forenames, function(t) {
                    var n = (0,
                    c.forenameColor)(t);
                    return s.default.map(t.births, function(e) {
                        var r = e.births
                          , i = e.year;
                        return {
                            color: n,
                            year: i,
                            births: r,
                            id: t.id + "-" + i
                        }
                    })
                })
                  , h = this.svg.select(".circles").selectAll("g").data(l, function(t) {
                    return t.id
                });
                h.transition().duration(c.defaultDuration).attr("transform", this.transformForCircle),
                h.exit().remove();
                var p = h.enter().append("g").attr("transform", this.transformForCircle).attr("visibility", "hidden");
                p.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 7).attr("fill", function(t) {
                    return t.color
                }),
                p.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 5).attr("fill", "white"),
                p.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 4).attr("fill", function(t) {
                    return t.color
                }),
                n(i).select("g.line path").attr("d", r),
                n(f).attr("transform", function(t) {
                    var n = a.extent(e.xScale.domain())
                      , r = 0
                      , i = n[0];
                    t.births.forEach(function(t) {
                        var e = t.births
                          , o = t.year;
                        s.default.includes(n, o) && e > r && (r = e,
                        i = o)
                    });
                    var o = [e.xScale(i) + 5, e.yScale(r) - 15];
                    return o[1] = e.yScale.range()[0],
                    "translate(" + o[0] + " " + o[1] + ")"
                })
            }
        },
        computed: {
            yearRanges: function() {
                return (0,
                s.default)(c.years[0]).range(s.default.last(c.years), 10).map(function(t) {
                    return {
                        from: t,
                        to: t + 10
                    }
                }).value()
            }
        }
    }
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = e(0)
      , o = r(i)
      , a = e(1);
    n.default = {
        name: "popup",
        props: ["forenames", "position", "show", "year"],
        methods: {
            countForForename: function(t) {
                var n = this
                  , e = o.default.find(t.births, function(t) {
                    return getYearMonth(t.year) === n.year
                    /*t.year===n.year*/
                })
                  , r = o.default.get(e, "births", 0);
                return 0 === r ? "검색 없음" : r * 10 + "회 검색"
                /*0===r?"aucune naissance":r+" naissance"+(1===r?"":"s")*/
            },
            forenameColor: a.forenameColor
        }
    }
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        var n = t.length;
        if (n % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[n - 2] ? 2 : "=" === t[n - 1] ? 1 : 0
    }
    function i(t) {
        return 3 * t.length / 4 - r(t)
    }
    function o(t) {
        var n, e, i, o, a, u, s = t.length;
        a = r(t),
        u = new l(3 * s / 4 - a),
        i = a > 0 ? s - 4 : s;
        var c = 0;
        for (n = 0,
        e = 0; n < i; n += 4,
        e += 3)
            o = f[t.charCodeAt(n)] << 18 | f[t.charCodeAt(n + 1)] << 12 | f[t.charCodeAt(n + 2)] << 6 | f[t.charCodeAt(n + 3)],
            u[c++] = o >> 16 & 255,
            u[c++] = o >> 8 & 255,
            u[c++] = 255 & o;
        return 2 === a ? (o = f[t.charCodeAt(n)] << 2 | f[t.charCodeAt(n + 1)] >> 4,
        u[c++] = 255 & o) : 1 === a && (o = f[t.charCodeAt(n)] << 10 | f[t.charCodeAt(n + 1)] << 4 | f[t.charCodeAt(n + 2)] >> 2,
        u[c++] = o >> 8 & 255,
        u[c++] = 255 & o),
        u
    }
    function a(t) {
        return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
    }
    function u(t, n, e) {
        for (var r, i = [], o = n; o < e; o += 3)
            r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2],
            i.push(a(r));
        return i.join("")
    }
    function s(t) {
        for (var n, e = t.length, r = e % 3, i = "", o = [], a = 16383, s = 0, f = e - r; s < f; s += a)
            o.push(u(t, s, s + a > f ? f : s + a));
        return 1 === r ? (n = t[e - 1],
        i += c[n >> 2],
        i += c[n << 4 & 63],
        i += "==") : 2 === r && (n = (t[e - 2] << 8) + t[e - 1],
        i += c[n >> 10],
        i += c[n >> 4 & 63],
        i += c[n << 2 & 63],
        i += "="),
        o.push(i),
        o.join("")
    }
    n.byteLength = i,
    n.toByteArray = o,
    n.fromByteArray = s;
    for (var c = [], f = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, d = h.length; p < d; ++p)
        c[p] = h[p],
        f[h.charCodeAt(p)] = p;
    f["-".charCodeAt(0)] = 62,
    f["_".charCodeAt(0)] = 63
}
, function(t, n, e) {
    n = t.exports = e(2)(void 0),
    n.push([t.i, "html{height:100%;margin:0;padding:0}a:visited{color:#6e4cb9}body{font-family:HelveticaLTStd-Roman,sans-serif;font-size:18px;color:#666;background-color:#fff}#app,body,content{height:100% }content{display:flex;flex-direction:row;padding-left:19px}.title{margin-bottom:10px;margin-top:10px}.title h1{color:#4c92b9;font-family:HelveticaLTStd-Bold;font-size:35px}.title h2{font-size:24px;margin-bottom:-4px}.title h1,.title h2{margin:0}.left-side{max-width:500px;min-width:300px;width:33%;height:50vh;display:flex;flex-direction:column;margin-bottom:10px}.right-side{flex:1; height:80vh;}form.search{display: none;position:relative;height:32px}form.search>*{position:absolute}form.search .search-image{left:4px;top:6px}form.search .clear{top:6px;right:0}form.search input{color:#333;font-family:HelveticaLTStd-Roman;font-size:19px;padding-left:26px;padding-top:4px;width:calc(100% - 30px)}form.search a{color:red;font-family:sans-serif;right:0;text-decoration:none}.forenames-list-container{flex:1;overflow:scroll;margin-top:10px}ul.forenames-list{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;justify-content:space-between}ul.forenames-list li{cursor:pointer;padding:3px;line-height:.9;display:inline-flex;align-items:center}ul.forenames-list li.m{color:#4c92b9}ul.forenames-list li.f{color:#d57599}ul.forenames-list li.selected{line-height:1;color:#fff}.share-url{cursor:crosshair}.bottom{margin-bottom:20px;padding:20px 95px 0 50px;font-size:12px;color:#4c92b9}.bottom input[type=text]{color:#333;width:250px}.bottom .block{display:flex;justify-content:space-between}.bottom a{text-decoration:none}.bottom .social-links>*{margin-left:10px}.bottom .social{float:left;margin-top:-9px;width:117px}.bottom .social>*{display:block}.bottom .logo{margin-top:-8px;margin-left:-5px;float:left}.bottom .explanations{margin-top:1em}", ""])
}
, function(t, n, e) {
    n = t.exports = e(2)(void 0),
    n.push([t.i, ".svg-container{position:relative;height:calc(100% - 180px);top:90px;max-height:600px;margin-bottom:60px}.svg-container>*{position:absolute}.labels{margin-top:-100px}.labels>div{position:absolute;color:#fff;padding:5px 10px;white-space:nowrap}.graph{width:100%;height:100%}.graph svg{height:calc(100% - 32px);width:100%;margin-top:-50px}.graph svg .y-axis .major:first-child{visibility:hidden}.graph svg .axis text{fill:#4c92b9;font-size:13px}.graph svg .axis .tick line{stroke:#666;stroke-dasharray:2,3;stroke-width:.3px}.graph svg .axis path.domain{fill:none;stroke:none}.graph svg .prenoms .lines>g path{stroke-width:3px;fill:none}.graph svg .prenoms .lines>g circle{stroke:none}.graph svg .playground-bg{fill:#edf4f8}.graph svg .playground{fill:#000;opacity:0}.graph .year-zoomers{font-family:HelveticaLTStd-Roman;font-size:13px;color:#4c92b9;display:flex;width:calc(100% - 146px);margin-left:50px}.graph .year-zoomers>*{text-decoration:none;color:inherit;border:1px solid #cbcbcb;padding:5px 0;width:100%;margin-right:5px;text-align:center;overflow:hidden;white-space:nowrap}.graph .year-zoomers>:last-child{margin-right:0}.graph .year-zoomers>.selected{color:#fff;background-color:#4c92b9}.graph .year-zoomers>* .year{font-weight:700}", ""])
}
, function(t, n, e) {
    n = t.exports = e(2)(void 0),
    n.push([t.i, ".popup{font-family:HelveticaLTStd-Roman;font-size:14px;color:#fff;background-color:rgba(0,0,0,.16);padding:10px;position:absolute;width:300px;pointer-events:none;top:20px;left:95px}.popup.right{left:auto;right:130px}.popup .year{fill:#fff;font-size:28px;font-family:HelveticaLTStd-Bold}.popup .forename{color:#666;background-color:#fff;height:16px;font-size:14px;line-height:18px;padding:5px 10px;margin-top:5px;display:flex;justify-content:space-between}.popup .forename .circle,.popup .forename .visible{display:inline-block;border-radius:50%;width:10px;height:10px;margin-right:10px}.popup .forename .birth{text-align:right}", ""])
}
, function(t, n) {
    t.exports = "images/clear.png?50aee54b512003b0f96d5775fd62c083"
}
, function(t, n) {
    t.exports = "images/search.png?4129baae988e03dab06fbec53d40d37b"
}
, function(t, n) {
    n.read = function(t, n, e, r, i) {
        var o, a, u = 8 * i - r - 1, s = (1 << u) - 1, c = s >> 1, f = -7, l = e ? i - 1 : 0, h = e ? -1 : 1, p = t[n + l];
        for (l += h,
        o = p & (1 << -f) - 1,
        p >>= -f,
        f += u; f > 0; o = 256 * o + t[n + l],
        l += h,
        f -= 8)
            ;
        for (a = o & (1 << -f) - 1,
        o >>= -f,
        f += r; f > 0; a = 256 * a + t[n + l],
        l += h,
        f -= 8)
            ;
        if (0 === o)
            o = 1 - c;
        else {
            if (o === s)
                return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r),
            o -= c
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - r)
    }
    ,
    n.write = function(t, n, e, r, i, o) {
        var a, u, s, c = 8 * o - i - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1, v = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
        for (n = Math.abs(n),
        isNaN(n) || n === 1 / 0 ? (u = isNaN(n) ? 1 : 0,
        a = f) : (a = Math.floor(Math.log(n) / Math.LN2),
        n * (s = Math.pow(2, -a)) < 1 && (a--,
        s *= 2),
        n += a + l >= 1 ? h / s : h * Math.pow(2, 1 - l),
        n * s >= 2 && (a++,
        s /= 2),
        a + l >= f ? (u = 0,
        a = f) : a + l >= 1 ? (u = (n * s - 1) * Math.pow(2, i),
        a += l) : (u = n * Math.pow(2, l - 1) * Math.pow(2, i),
        a = 0)); i >= 8; t[e + p] = 255 & u,
        p += d,
        u /= 256,
        i -= 8)
            ;
        for (a = a << i | u,
        c += i; c > 0; t[e + p] = 255 & a,
        p += d,
        a /= 256,
        c -= 8)
            ;
        t[e + p - d] |= 128 * v
    }
}
, function(t, n) {
    var e = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == e.call(t)
    }
}
, function(t, n, e) {
    "use strict";
    (function(t) {
        function r() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }
        function i() {
            return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function o(t, n) {
            if (i() < n)
                throw new RangeError("Invalid typed array length");
            return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n),
            t.__proto__ = a.prototype) : (null === t && (t = new a(n)),
            t.length = n),
            t
        }
        function a(t, n, e) {
            if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a))
                return new a(t,n,e);
            if ("number" == typeof t) {
                if ("string" == typeof n)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, t)
            }
            return u(this, t, n, e)
        }
        function u(t, n, e, r) {
            if ("number" == typeof n)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? p(t, n, e, r) : "string" == typeof n ? l(t, n, e) : d(t, n)
        }
        function s(t) {
            if ("number" != typeof t)
                throw new TypeError('"size" argument must be a number');
            if (t < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function c(t, n, e, r) {
            return s(n),
            n <= 0 ? o(t, n) : void 0 !== e ? "string" == typeof r ? o(t, n).fill(e, r) : o(t, n).fill(e) : o(t, n)
        }
        function f(t, n) {
            if (s(n),
            t = o(t, n < 0 ? 0 : 0 | v(n)),
            !a.TYPED_ARRAY_SUPPORT)
                for (var e = 0; e < n; ++e)
                    t[e] = 0;
            return t
        }
        function l(t, n, e) {
            if ("string" == typeof e && "" !== e || (e = "utf8"),
            !a.isEncoding(e))
                throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | y(n, e);
            t = o(t, r);
            var i = t.write(n, e);
            return i !== r && (t = t.slice(0, i)),
            t
        }
        function h(t, n) {
            var e = n.length < 0 ? 0 : 0 | v(n.length);
            t = o(t, e);
            for (var r = 0; r < e; r += 1)
                t[r] = 255 & n[r];
            return t
        }
        function p(t, n, e, r) {
            if (n.byteLength,
            e < 0 || n.byteLength < e)
                throw new RangeError("'offset' is out of bounds");
            if (n.byteLength < e + (r || 0))
                throw new RangeError("'length' is out of bounds");
            return n = void 0 === e && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n,e) : new Uint8Array(n,e,r),
            a.TYPED_ARRAY_SUPPORT ? (t = n,
            t.__proto__ = a.prototype) : t = h(t, n),
            t
        }
        function d(t, n) {
            if (a.isBuffer(n)) {
                var e = 0 | v(n.length);
                return t = o(t, e),
                0 === t.length ? t : (n.copy(t, 0, 0, e),
                t)
            }
            if (n) {
                if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length"in n)
                    return "number" != typeof n.length || Z(n.length) ? o(t, 0) : h(t, n);
                if ("Buffer" === n.type && J(n.data))
                    return h(t, n.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }
        function v(t) {
            if (t >= i())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | t
        }
        function g(t) {
            return +t != t && (t = 0),
            a.alloc(+t)
        }
        function y(t, n) {
            if (a.isBuffer(t))
                return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var e = t.length;
            if (0 === e)
                return 0;
            for (var r = !1; ; )
                switch (n) {
                case "ascii":
                case "latin1":
                case "binary":
                    return e;
                case "utf8":
                case "utf-8":
                case void 0:
                    return H(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * e;
                case "hex":
                    return e >>> 1;
                case "base64":
                    return X(t).length;
                default:
                    if (r)
                        return H(t).length;
                    n = ("" + n).toLowerCase(),
                    r = !0
                }
        }
        function _(t, n, e) {
            var r = !1;
            if ((void 0 === n || n < 0) && (n = 0),
            n > this.length)
                return "";
            if ((void 0 === e || e > this.length) && (e = this.length),
            e <= 0)
                return "";
            if (e >>>= 0,
            n >>>= 0,
            e <= n)
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return P(this, n, e);
                case "utf8":
                case "utf-8":
                    return T(this, n, e);
                case "ascii":
                    return O(this, n, e);
                case "latin1":
                case "binary":
                    return R(this, n, e);
                case "base64":
                    return E(this, n, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return L(this, n, e);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    r = !0
                }
        }
        function m(t, n, e) {
            var r = t[n];
            t[n] = t[e],
            t[e] = r
        }
        function b(t, n, e, r, i) {
            if (0 === t.length)
                return -1;
            if ("string" == typeof e ? (r = e,
            e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648),
            e = +e,
            isNaN(e) && (e = i ? 0 : t.length - 1),
            e < 0 && (e = t.length + e),
            e >= t.length) {
                if (i)
                    return -1;
                e = t.length - 1
            } else if (e < 0) {
                if (!i)
                    return -1;
                e = 0
            }
            if ("string" == typeof n && (n = a.from(n, r)),
            a.isBuffer(n))
                return 0 === n.length ? -1 : x(t, n, e, r, i);
            if ("number" == typeof n)
                return n &= 255,
                a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : x(t, [n], e, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function x(t, n, e, r, i) {
            function o(t, n) {
                return 1 === a ? t[n] : t.readUInt16BE(n * a)
            }
            var a = 1
              , u = t.length
              , s = n.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || n.length < 2)
                    return -1;
                a = 2,
                u /= 2,
                s /= 2,
                e /= 2
            }
            var c;
            if (i) {
                var f = -1;
                for (c = e; c < u; c++)
                    if (o(t, c) === o(n, f === -1 ? 0 : c - f)) {
                        if (f === -1 && (f = c),
                        c - f + 1 === s)
                            return f * a
                    } else
                        f !== -1 && (c -= c - f),
                        f = -1
            } else
                for (e + s > u && (e = u - s),
                c = e; c >= 0; c--) {
                    for (var l = !0, h = 0; h < s; h++)
                        if (o(t, c + h) !== o(n, h)) {
                            l = !1;
                            break
                        }
                    if (l)
                        return c
                }
            return -1
        }
        function w(t, n, e, r) {
            e = Number(e) || 0;
            var i = t.length - e;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var o = n.length;
            if (o % 2 != 0)
                throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var u = parseInt(n.substr(2 * a, 2), 16);
                if (isNaN(u))
                    return a;
                t[e + a] = u
            }
            return a
        }
        function M(t, n, e, r) {
            return G(H(n, t.length - e), t, e, r)
        }
        function A(t, n, e, r) {
            return G(W(n), t, e, r)
        }
        function S(t, n, e, r) {
            return A(t, n, e, r)
        }
        function k(t, n, e, r) {
            return G(X(n), t, e, r)
        }
        function C(t, n, e, r) {
            return G(V(n, t.length - e), t, e, r)
        }
        function E(t, n, e) {
            return 0 === n && e === t.length ? K.fromByteArray(t) : K.fromByteArray(t.slice(n, e))
        }
        function T(t, n, e) {
            e = Math.min(t.length, e);
            for (var r = [], i = n; i < e; ) {
                var o = t[i]
                  , a = null
                  , u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (i + u <= e) {
                    var s, c, f, l;
                    switch (u) {
                    case 1:
                        o < 128 && (a = o);
                        break;
                    case 2:
                        s = t[i + 1],
                        128 == (192 & s) && (l = (31 & o) << 6 | 63 & s) > 127 && (a = l);
                        break;
                    case 3:
                        s = t[i + 1],
                        c = t[i + 2],
                        128 == (192 & s) && 128 == (192 & c) && (l = (15 & o) << 12 | (63 & s) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (a = l);
                        break;
                    case 4:
                        s = t[i + 1],
                        c = t[i + 2],
                        f = t[i + 3],
                        128 == (192 & s) && 128 == (192 & c) && 128 == (192 & f) && (l = (15 & o) << 18 | (63 & s) << 12 | (63 & c) << 6 | 63 & f) > 65535 && l < 1114112 && (a = l)
                    }
                }
                null === a ? (a = 65533,
                u = 1) : a > 65535 && (a -= 65536,
                r.push(a >>> 10 & 1023 | 55296),
                a = 56320 | 1023 & a),
                r.push(a),
                i += u
            }
            return N(r)
        }
        function N(t) {
            var n = t.length;
            if (n <= tt)
                return String.fromCharCode.apply(String, t);
            for (var e = "", r = 0; r < n; )
                e += String.fromCharCode.apply(String, t.slice(r, r += tt));
            return e
        }
        function O(t, n, e) {
            var r = "";
            e = Math.min(t.length, e);
            for (var i = n; i < e; ++i)
                r += String.fromCharCode(127 & t[i]);
            return r
        }
        function R(t, n, e) {
            var r = "";
            e = Math.min(t.length, e);
            for (var i = n; i < e; ++i)
                r += String.fromCharCode(t[i]);
            return r
        }
        function P(t, n, e) {
            var r = t.length;
            (!n || n < 0) && (n = 0),
            (!e || e < 0 || e > r) && (e = r);
            for (var i = "", o = n; o < e; ++o)
                i += Y(t[o]);
            return i
        }
        function L(t, n, e) {
            for (var r = t.slice(n, e), i = "", o = 0; o < r.length; o += 2)
                i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }
        function z(t, n, e) {
            if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + n > e)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function I(t, n, e, r, i, o) {
            if (!a.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (n > i || n < o)
                throw new RangeError('"value" argument is out of bounds');
            if (e + r > t.length)
                throw new RangeError("Index out of range")
        }
        function j(t, n, e, r) {
            n < 0 && (n = 65535 + n + 1);
            for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i)
                t[e + i] = (n & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }
        function U(t, n, e, r) {
            n < 0 && (n = 4294967295 + n + 1);
            for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i)
                t[e + i] = n >>> 8 * (r ? i : 3 - i) & 255
        }
        function D(t, n, e, r, i, o) {
            if (e + r > t.length)
                throw new RangeError("Index out of range");
            if (e < 0)
                throw new RangeError("Index out of range")
        }
        function $(t, n, e, r, i) {
            return i || D(t, n, e, 4, 3.4028234663852886e38, -3.4028234663852886e38),
            Q.write(t, n, e, r, 23, 4),
            e + 4
        }
        function B(t, n, e, r, i) {
            return i || D(t, n, e, 8, 1.7976931348623157e308, -1.7976931348623157e308),
            Q.write(t, n, e, r, 52, 8),
            e + 8
        }
        function F(t) {
            if (t = q(t).replace(nt, ""),
            t.length < 2)
                return "";
            for (; t.length % 4 != 0; )
                t += "=";
            return t
        }
        function q(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }
        function Y(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }
        function H(t, n) {
            n = n || 1 / 0;
            for (var e, r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((e = t.charCodeAt(a)) > 55295 && e < 57344) {
                    if (!i) {
                        if (e > 56319) {
                            (n -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (n -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = e;
                        continue
                    }
                    if (e < 56320) {
                        (n -= 3) > -1 && o.push(239, 191, 189),
                        i = e;
                        continue
                    }
                    e = 65536 + (i - 55296 << 10 | e - 56320)
                } else
                    i && (n -= 3) > -1 && o.push(239, 191, 189);
                if (i = null,
                e < 128) {
                    if ((n -= 1) < 0)
                        break;
                    o.push(e)
                } else if (e < 2048) {
                    if ((n -= 2) < 0)
                        break;
                    o.push(e >> 6 | 192, 63 & e | 128)
                } else if (e < 65536) {
                    if ((n -= 3) < 0)
                        break;
                    o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                } else {
                    if (!(e < 1114112))
                        throw new Error("Invalid code point");
                    if ((n -= 4) < 0)
                        break;
                    o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                }
            }
            return o
        }
        function W(t) {
            for (var n = [], e = 0; e < t.length; ++e)
                n.push(255 & t.charCodeAt(e));
            return n
        }
        function V(t, n) {
            for (var e, r, i, o = [], a = 0; a < t.length && !((n -= 2) < 0); ++a)
                e = t.charCodeAt(a),
                r = e >> 8,
                i = e % 256,
                o.push(i),
                o.push(r);
            return o
        }
        function X(t) {
            return K.toByteArray(F(t))
        }
        function G(t, n, e, r) {
            for (var i = 0; i < r && !(i + e >= n.length || i >= t.length); ++i)
                n[i + e] = t[i];
            return i
        }
        function Z(t) {
            return t !== t
        }
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var K = e(13)
          , Q = e(19)
          , J = e(20);
        n.Buffer = a,
        n.SlowBuffer = g,
        n.INSPECT_MAX_BYTES = 50,
        a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(),
        n.kMaxLength = i(),
        a.poolSize = 8192,
        a._augment = function(t) {
            return t.__proto__ = a.prototype,
            t
        }
        ,
        a.from = function(t, n, e) {
            return u(null, t, n, e)
        }
        ,
        a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0
        })),
        a.alloc = function(t, n, e) {
            return c(null, t, n, e)
        }
        ,
        a.allocUnsafe = function(t) {
            return f(null, t)
        }
        ,
        a.allocUnsafeSlow = function(t) {
            return f(null, t)
        }
        ,
        a.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }
        ,
        a.compare = function(t, n) {
            if (!a.isBuffer(t) || !a.isBuffer(n))
                throw new TypeError("Arguments must be Buffers");
            if (t === n)
                return 0;
            for (var e = t.length, r = n.length, i = 0, o = Math.min(e, r); i < o; ++i)
                if (t[i] !== n[i]) {
                    e = t[i],
                    r = n[i];
                    break
                }
            return e < r ? -1 : r < e ? 1 : 0
        }
        ,
        a.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(t, n) {
            if (!J(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
                return a.alloc(0);
            var e;
            if (void 0 === n)
                for (n = 0,
                e = 0; e < t.length; ++e)
                    n += t[e].length;
            var r = a.allocUnsafe(n)
              , i = 0;
            for (e = 0; e < t.length; ++e) {
                var o = t[e];
                if (!a.isBuffer(o))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(r, i),
                i += o.length
            }
            return r
        }
        ,
        a.byteLength = y,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var n = 0; n < t; n += 2)
                m(this, n, n + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var n = 0; n < t; n += 4)
                m(this, n, n + 3),
                m(this, n + 1, n + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var n = 0; n < t; n += 8)
                m(this, n, n + 7),
                m(this, n + 1, n + 6),
                m(this, n + 2, n + 5),
                m(this, n + 3, n + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : _.apply(this, arguments)
        }
        ,
        a.prototype.equals = function(t) {
            if (!a.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === a.compare(this, t)
        }
        ,
        a.prototype.inspect = function() {
            var t = ""
              , e = n.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "),
            this.length > e && (t += " ... ")),
            "<Buffer " + t + ">"
        }
        ,
        a.prototype.compare = function(t, n, e, r, i) {
            if (!a.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === n && (n = 0),
            void 0 === e && (e = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            n < 0 || e > t.length || r < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (r >= i && n >= e)
                return 0;
            if (r >= i)
                return -1;
            if (n >= e)
                return 1;
            if (n >>>= 0,
            e >>>= 0,
            r >>>= 0,
            i >>>= 0,
            this === t)
                return 0;
            for (var o = i - r, u = e - n, s = Math.min(o, u), c = this.slice(r, i), f = t.slice(n, e), l = 0; l < s; ++l)
                if (c[l] !== f[l]) {
                    o = c[l],
                    u = f[l];
                    break
                }
            return o < u ? -1 : u < o ? 1 : 0
        }
        ,
        a.prototype.includes = function(t, n, e) {
            return this.indexOf(t, n, e) !== -1
        }
        ,
        a.prototype.indexOf = function(t, n, e) {
            return b(this, t, n, e, !0)
        }
        ,
        a.prototype.lastIndexOf = function(t, n, e) {
            return b(this, t, n, e, !1)
        }
        ,
        a.prototype.write = function(t, n, e, r) {
            if (void 0 === n)
                r = "utf8",
                e = this.length,
                n = 0;
            else if (void 0 === e && "string" == typeof n)
                r = n,
                e = this.length,
                n = 0;
            else {
                if (!isFinite(n))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                n |= 0,
                isFinite(e) ? (e |= 0,
                void 0 === r && (r = "utf8")) : (r = e,
                e = void 0)
            }
            var i = this.length - n;
            if ((void 0 === e || e > i) && (e = i),
            t.length > 0 && (e < 0 || n < 0) || n > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
                switch (r) {
                case "hex":
                    return w(this, t, n, e);
                case "utf8":
                case "utf-8":
                    return M(this, t, n, e);
                case "ascii":
                    return A(this, t, n, e);
                case "latin1":
                case "binary":
                    return S(this, t, n, e);
                case "base64":
                    return k(this, t, n, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, t, n, e);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    o = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var tt = 4096;
        a.prototype.slice = function(t, n) {
            var e = this.length;
            t = ~~t,
            n = void 0 === n ? e : ~~n,
            t < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e),
            n < 0 ? (n += e) < 0 && (n = 0) : n > e && (n = e),
            n < t && (n = t);
            var r;
            if (a.TYPED_ARRAY_SUPPORT)
                r = this.subarray(t, n),
                r.__proto__ = a.prototype;
            else {
                var i = n - t;
                r = new a(i,void 0);
                for (var o = 0; o < i; ++o)
                    r[o] = this[o + t]
            }
            return r
        }
        ,
        a.prototype.readUIntLE = function(t, n, e) {
            t |= 0,
            n |= 0,
            e || z(t, n, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256); )
                r += this[t + o] * i;
            return r
        }
        ,
        a.prototype.readUIntBE = function(t, n, e) {
            t |= 0,
            n |= 0,
            e || z(t, n, this.length);
            for (var r = this[t + --n], i = 1; n > 0 && (i *= 256); )
                r += this[t + --n] * i;
            return r
        }
        ,
        a.prototype.readUInt8 = function(t, n) {
            return n || z(t, 1, this.length),
            this[t]
        }
        ,
        a.prototype.readUInt16LE = function(t, n) {
            return n || z(t, 2, this.length),
            this[t] | this[t + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(t, n) {
            return n || z(t, 2, this.length),
            this[t] << 8 | this[t + 1]
        }
        ,
        a.prototype.readUInt32LE = function(t, n) {
            return n || z(t, 4, this.length),
            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }
        ,
        a.prototype.readUInt32BE = function(t, n) {
            return n || z(t, 4, this.length),
            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }
        ,
        a.prototype.readIntLE = function(t, n, e) {
            t |= 0,
            n |= 0,
            e || z(t, n, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256); )
                r += this[t + o] * i;
            return i *= 128,
            r >= i && (r -= Math.pow(2, 8 * n)),
            r
        }
        ,
        a.prototype.readIntBE = function(t, n, e) {
            t |= 0,
            n |= 0,
            e || z(t, n, this.length);
            for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256); )
                o += this[t + --r] * i;
            return i *= 128,
            o >= i && (o -= Math.pow(2, 8 * n)),
            o
        }
        ,
        a.prototype.readInt8 = function(t, n) {
            return n || z(t, 1, this.length),
            128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
        }
        ,
        a.prototype.readInt16LE = function(t, n) {
            n || z(t, 2, this.length);
            var e = this[t] | this[t + 1] << 8;
            return 32768 & e ? 4294901760 | e : e
        }
        ,
        a.prototype.readInt16BE = function(t, n) {
            n || z(t, 2, this.length);
            var e = this[t + 1] | this[t] << 8;
            return 32768 & e ? 4294901760 | e : e
        }
        ,
        a.prototype.readInt32LE = function(t, n) {
            return n || z(t, 4, this.length),
            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(t, n) {
            return n || z(t, 4, this.length),
            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }
        ,
        a.prototype.readFloatLE = function(t, n) {
            return n || z(t, 4, this.length),
            Q.read(this, t, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(t, n) {
            return n || z(t, 4, this.length),
            Q.read(this, t, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(t, n) {
            return n || z(t, 8, this.length),
            Q.read(this, t, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(t, n) {
            return n || z(t, 8, this.length),
            Q.read(this, t, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(t, n, e, r) {
            if (t = +t,
            n |= 0,
            e |= 0,
            !r) {
                I(this, t, n, e, Math.pow(2, 8 * e) - 1, 0)
            }
            var i = 1
              , o = 0;
            for (this[n] = 255 & t; ++o < e && (i *= 256); )
                this[n + o] = t / i & 255;
            return n + e
        }
        ,
        a.prototype.writeUIntBE = function(t, n, e, r) {
            if (t = +t,
            n |= 0,
            e |= 0,
            !r) {
                I(this, t, n, e, Math.pow(2, 8 * e) - 1, 0)
            }
            var i = e - 1
              , o = 1;
            for (this[n + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[n + i] = t / o & 255;
            return n + e
        }
        ,
        a.prototype.writeUInt8 = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 1, 255, 0),
            a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            this[n] = 255 & t,
            n + 1
        }
        ,
        a.prototype.writeUInt16LE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t,
            this[n + 1] = t >>> 8) : j(this, t, n, !0),
            n + 2
        }
        ,
        a.prototype.writeUInt16BE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8,
            this[n + 1] = 255 & t) : j(this, t, n, !1),
            n + 2
        }
        ,
        a.prototype.writeUInt32LE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24,
            this[n + 2] = t >>> 16,
            this[n + 1] = t >>> 8,
            this[n] = 255 & t) : U(this, t, n, !0),
            n + 4
        }
        ,
        a.prototype.writeUInt32BE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24,
            this[n + 1] = t >>> 16,
            this[n + 2] = t >>> 8,
            this[n + 3] = 255 & t) : U(this, t, n, !1),
            n + 4
        }
        ,
        a.prototype.writeIntLE = function(t, n, e, r) {
            if (t = +t,
            n |= 0,
            !r) {
                var i = Math.pow(2, 8 * e - 1);
                I(this, t, n, e, i - 1, -i)
            }
            var o = 0
              , a = 1
              , u = 0;
            for (this[n] = 255 & t; ++o < e && (a *= 256); )
                t < 0 && 0 === u && 0 !== this[n + o - 1] && (u = 1),
                this[n + o] = (t / a >> 0) - u & 255;
            return n + e
        }
        ,
        a.prototype.writeIntBE = function(t, n, e, r) {
            if (t = +t,
            n |= 0,
            !r) {
                var i = Math.pow(2, 8 * e - 1);
                I(this, t, n, e, i - 1, -i)
            }
            var o = e - 1
              , a = 1
              , u = 0;
            for (this[n + o] = 255 & t; --o >= 0 && (a *= 256); )
                t < 0 && 0 === u && 0 !== this[n + o + 1] && (u = 1),
                this[n + o] = (t / a >> 0) - u & 255;
            return n + e
        }
        ,
        a.prototype.writeInt8 = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 1, 127, -128),
            a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            this[n] = 255 & t,
            n + 1
        }
        ,
        a.prototype.writeInt16LE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t,
            this[n + 1] = t >>> 8) : j(this, t, n, !0),
            n + 2
        }
        ,
        a.prototype.writeInt16BE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8,
            this[n + 1] = 255 & t) : j(this, t, n, !1),
            n + 2
        }
        ,
        a.prototype.writeInt32LE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 4, 2147483647, -2147483648),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t,
            this[n + 1] = t >>> 8,
            this[n + 2] = t >>> 16,
            this[n + 3] = t >>> 24) : U(this, t, n, !0),
            n + 4
        }
        ,
        a.prototype.writeInt32BE = function(t, n, e) {
            return t = +t,
            n |= 0,
            e || I(this, t, n, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            a.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24,
            this[n + 1] = t >>> 16,
            this[n + 2] = t >>> 8,
            this[n + 3] = 255 & t) : U(this, t, n, !1),
            n + 4
        }
        ,
        a.prototype.writeFloatLE = function(t, n, e) {
            return $(this, t, n, !0, e)
        }
        ,
        a.prototype.writeFloatBE = function(t, n, e) {
            return $(this, t, n, !1, e)
        }
        ,
        a.prototype.writeDoubleLE = function(t, n, e) {
            return B(this, t, n, !0, e)
        }
        ,
        a.prototype.writeDoubleBE = function(t, n, e) {
            return B(this, t, n, !1, e)
        }
        ,
        a.prototype.copy = function(t, n, e, r) {
            if (e || (e = 0),
            r || 0 === r || (r = this.length),
            n >= t.length && (n = t.length),
            n || (n = 0),
            r > 0 && r < e && (r = e),
            r === e)
                return 0;
            if (0 === t.length || 0 === this.length)
                return 0;
            if (n < 0)
                throw new RangeError("targetStart out of bounds");
            if (e < 0 || e >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (r < 0)
                throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
            t.length - n < r - e && (r = t.length - n + e);
            var i, o = r - e;
            if (this === t && e < n && n < r)
                for (i = o - 1; i >= 0; --i)
                    t[i + n] = this[i + e];
            else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i)
                    t[i + n] = this[i + e];
            else
                Uint8Array.prototype.set.call(t, this.subarray(e, e + o), n);
            return o
        }
        ,
        a.prototype.fill = function(t, n, e, r) {
            if ("string" == typeof t) {
                if ("string" == typeof n ? (r = n,
                n = 0,
                e = this.length) : "string" == typeof e && (r = e,
                e = this.length),
                1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !a.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r)
            } else
                "number" == typeof t && (t &= 255);
            if (n < 0 || this.length < n || this.length < e)
                throw new RangeError("Out of range index");
            if (e <= n)
                return this;
            n >>>= 0,
            e = void 0 === e ? this.length : e >>> 0,
            t || (t = 0);
            var o;
            if ("number" == typeof t)
                for (o = n; o < e; ++o)
                    this[o] = t;
            else {
                var u = a.isBuffer(t) ? t : H(new a(t,r).toString())
                  , s = u.length;
                for (o = 0; o < e - n; ++o)
                    this[o + n] = u[o % s]
            }
            return this
        }
        ;
        var nt = /[^+\/0-9A-Za-z-_]/g
    }
    ).call(n, e(6))
}
, function(t, n, e) {
    e(28);
    var r = e(4)(e(11), e(25), null, null);
    t.exports = r.exports
}
, function(t, n, e) {
    e(29);
    var r = e(4)(e(12), e(26), null, null);
    t.exports = r.exports
}
, function(t, n, e) {
    t.exports = {
        render: function() {
            var t = this
              , n = t.$createElement
              , r = t._self._c || n;
            return r("div", {
                attrs: {
                    id: "app"
                }
            }, [r("content", [r("div", {
                staticClass: "left-side"
            }, [t._m(0), r("form", {
                staticClass: "search"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.searchQuery,
                    expression: "searchQuery"
                }],
                attrs: {
                    type: "text",
                    autocomplete: "on",
                    placeholder: "캐릭터 검색"
                },
                domProps: {
                    value: t.searchQuery
                },
                on: {
                    input: function(n) {
                        n.target.composing || (t.searchQuery = n.target.value)
                    }
                }
            }), r("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.searchQuery.length,
                    expression: "searchQuery.length"
                }],
                staticClass: "clear",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(n) {
                        t.searchQuery = ""
                    }
                }
            })]), r("div", {
                staticClass: "forenames-list-container"
            }, [r("ul", {
                ref: "forenamesList",
                staticClass: "forenames-list"
            }, t._l(t.displayedForenames, function(n) {
                return r("li", {
                    class: [n.sex, n.selected ? "selected" : ""],
                    style: t.forenameStyle(n),
                    attrs: {
                        title: n.alternatives ? "autres orthographes: " + n.alternatives.join(", ") : null
                    },
                    domProps: {
                        textContent: t._s(n.forename)
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(),
                            t.toggleForename(n)
                        }
                    }
                })
            }))])]), r("div", {
                staticClass: "right-side"
            }, [r("graph", {
                attrs: {
                    forenames: t.selectedForenames
                },
                on: {
                    "forename:remove": t.toggleForename,
                    "year-range": t.setYearRange
                }
            }), r("div", {
                staticClass: "bottom"
            }, [r("div", {
                staticClass: "block"
            }, [r("div", {
                staticClass: "share-url"
            })]), t._m(1)])], 1)])])
        },
        staticRenderFns: [function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "title"
            }, [e("h1", [t._v("Marvel STATS :")]), e("h2", [t._v("캐릭터 이름 Keyword")]), e("h2", [t._v("Google 검색량")])])
        }
        , function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "explanations"
            }, [t._v(" "), e("a", {
                attrs: {
                    href: "https://www.insee.fr/fr/statistiques/2540004",
                    target: "_blank"
                }
            }, [t._v("")])])
        }
        ]
    }
}
, function(t, n) {
    t.exports = {
        render: function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "svg-container"
            }, [e("div", {
                staticClass: "graph"
            }, [e("svg", {
                ref: "svg"
            }, [e("defs", [e("clipPath", {
                attrs: {
                    id: "graphs-clip-path"
                }
            }, [e("rect")])]), e("rect", {
                ref: "fg",
                staticClass: "playground-bg"
            }), e("g", {
                staticClass: "axis x-axis"
            }), e("g", {
                staticClass: "axis y-axis"
            }), e("g", {
                staticClass: "prenoms"
            }, [e("g", {
                staticClass: "lines"
            }), e("g", {
                staticClass: "circles"
            })])]), e("div", {
                staticClass: "year-zoomers"
            }, t._l(t.yearRanges, function(n) {
                return e("a", {
                    class: {
                        selected: t.zoomed && t.range.from === n.from
                    },
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(),
                            t.yearClick(n)
                        }
                    }
                }, [e("span", {
                    staticClass: "year"
                }, [t._v(" " + t._s(n.from) + " → " + t._s(n.to) + "구간")])])
            }))]), e("div", {
                ref: "labels",
                staticClass: "labels"
            }), e("popup", {
                attrs: {
                    forenames: t.forenames,
                    position: t.popup.position,
                    show: t.popup.show,
                    year: t.currentYear
                }
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(t, n) {
    t.exports = {
        render: function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "popup",
                class: [t.position],
                style: {
                    opacity: t.show ? 1 : 0
                }
            }, [e("div", {
                staticClass: "year"
            }, [t._v(t._s(t.year))]), t._l(t.forenames, function(n) {
                return e("div", {
                    staticClass: "forename"
                }, [e("div", [e("div", {
                    staticClass: "circle",
                    style: {
                        backgroundColor: t.forenameColor(n)
                    }
                }), t._v(t._s(n.forenameUnique))]), e("div", [t._v(t._s(t.countForForename(n)))])])
            })], 2)
        },
        staticRenderFns: []
    }
}
, function(t, n, e) {
    var r = e(14);
    "string" == typeof r && (r = [[t.i, r, ""]]),
    r.locals && (t.exports = r.locals);
    e(5)("748977dc", r, !0)
}
, function(t, n, e) {
    var r = e(15);
    "string" == typeof r && (r = [[t.i, r, ""]]),
    r.locals && (t.exports = r.locals);
    e(5)("0d38f2c9", r, !0)
}
, function(t, n, e) {
    var r = e(16);
    "string" == typeof r && (r = [[t.i, r, ""]]),
    r.locals && (t.exports = r.locals);
    e(5)("0a1af8ec", r, !0)
}
, function(t, n) {
    t.exports = function(t, n) {
        for (var e = [], r = {}, i = 0; i < n.length; i++) {
            var o = n[i]
              , a = o[0]
              , u = o[1]
              , s = o[2]
              , c = o[3]
              , f = {
                id: t + ":" + i,
                css: u,
                media: s,
                sourceMap: c
            };
            r[a] ? r[a].parts.push(f) : e.push(r[a] = {
                id: a,
                parts: [f]
            })
        }
        return e
    }
}
, function(t, n) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, n, e) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = e(9)
      , o = r(i)
      , a = e(8)
      , u = r(a);
    e(7),
    new o.default({
        el: "#app",
        render: function(t) {
            return t(u.default)
        }
    })
}
]);
