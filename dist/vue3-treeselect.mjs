import { defineComponent as Me, createVNode as o, mergeProps as zt, openBlock as $, createElementBlock as Re, createElementVNode as ft, TransitionGroup as $t, Transition as we, createTextVNode as P, resolveComponent as z, isVNode as pt, createApp as Ft, normalizeClass as Ht, createBlock as Be } from "vue";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function R(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Q, Ve;
function Wt() {
  if (Ve) return Q;
  Ve = 1;
  function e(t, n) {
    var s = n.length, i = t.length;
    if (i > s)
      return !1;
    if (i === s)
      return t === n;
    e: for (var r = 0, a = 0; r < i; r++) {
      for (var u = t.charCodeAt(r); a < s; )
        if (n.charCodeAt(a++) === u)
          continue e;
      return !1;
    }
    return !0;
  }
  return Q = e, Q;
}
var jt = Wt();
const qt = /* @__PURE__ */ R(jt);
var K, ke;
function Pt() {
  if (ke) return K;
  ke = 1;
  function e() {
  }
  return K = e, K;
}
var Qt = Pt();
const Kt = /* @__PURE__ */ R(Qt), E = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Kt
) : function(t, n) {
  if (!t()) {
    const s = ["[Vue-Treeselect Warning]"].concat(n());
    console.error(...s);
  }
};
function M(e) {
  return function(n, ...s) {
    n.type === "mousedown" && n.button === 0 && e.call(this, n, ...s);
  };
}
function Ut(e, t) {
  const n = e.getBoundingClientRect(), s = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  s.bottom + i > n.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + i,
    e.scrollHeight
  ) : s.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
var U, ze;
function mt() {
  if (ze) return U;
  ze = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return U = e, U;
}
var G, $e;
function Gt() {
  if ($e) return G;
  $e = 1;
  var e = typeof H == "object" && H && H.Object === Object && H;
  return G = e, G;
}
var Y, Fe;
function gt() {
  if (Fe) return Y;
  Fe = 1;
  var e = Gt(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Y = n, Y;
}
var X, He;
function Yt() {
  if (He) return X;
  He = 1;
  var e = gt(), t = function() {
    return e.Date.now();
  };
  return X = t, X;
}
var J, We;
function Xt() {
  if (We) return J;
  We = 1;
  var e = /\s/;
  function t(n) {
    for (var s = n.length; s-- && e.test(n.charAt(s)); )
      ;
    return s;
  }
  return J = t, J;
}
var Z, je;
function Jt() {
  if (je) return Z;
  je = 1;
  var e = Xt(), t = /^\s+/;
  function n(s) {
    return s && s.slice(0, e(s) + 1).replace(t, "");
  }
  return Z = n, Z;
}
var ee, qe;
function vt() {
  if (qe) return ee;
  qe = 1;
  var e = gt(), t = e.Symbol;
  return ee = t, ee;
}
var te, Pe;
function Zt() {
  if (Pe) return te;
  Pe = 1;
  var e = vt(), t = Object.prototype, n = t.hasOwnProperty, s = t.toString, i = e ? e.toStringTag : void 0;
  function r(a) {
    var u = n.call(a, i), h = a[i];
    try {
      a[i] = void 0;
      var l = !0;
    } catch {
    }
    var f = s.call(a);
    return l && (u ? a[i] = h : delete a[i]), f;
  }
  return te = r, te;
}
var ne, Qe;
function en() {
  if (Qe) return ne;
  Qe = 1;
  var e = Object.prototype, t = e.toString;
  function n(s) {
    return t.call(s);
  }
  return ne = n, ne;
}
var se, Ke;
function tn() {
  if (Ke) return se;
  Ke = 1;
  var e = vt(), t = Zt(), n = en(), s = "[object Null]", i = "[object Undefined]", r = e ? e.toStringTag : void 0;
  function a(u) {
    return u == null ? u === void 0 ? i : s : r && r in Object(u) ? t(u) : n(u);
  }
  return se = a, se;
}
var ie, Ue;
function nn() {
  if (Ue) return ie;
  Ue = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ie = e, ie;
}
var re, Ge;
function sn() {
  if (Ge) return re;
  Ge = 1;
  var e = tn(), t = nn(), n = "[object Symbol]";
  function s(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return re = s, re;
}
var oe, Ye;
function St() {
  if (Ye) return oe;
  Ye = 1;
  var e = Jt(), t = mt(), n = sn(), s = NaN, i = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, a = /^0o[0-7]+$/i, u = parseInt;
  function h(l) {
    if (typeof l == "number")
      return l;
    if (n(l))
      return s;
    if (t(l)) {
      var f = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(f) ? f + "" : f;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var d = r.test(l);
    return d || a.test(l) ? u(l.slice(2), d ? 2 : 8) : i.test(l) ? s : +l;
  }
  return oe = h, oe;
}
var ae, Xe;
function rn() {
  if (Xe) return ae;
  Xe = 1;
  var e = mt(), t = Yt(), n = St(), s = "Expected a function", i = Math.max, r = Math.min;
  function a(u, h, l) {
    var f, d, S, b, v, y, C = 0, I = !1, L = !1, c = !0;
    if (typeof u != "function")
      throw new TypeError(s);
    h = n(h) || 0, e(l) && (I = !!l.leading, L = "maxWait" in l, S = L ? i(n(l.maxWait) || 0, h) : S, c = "trailing" in l ? !!l.trailing : c);
    function p(m) {
      var N = f, A = d;
      return f = d = void 0, C = m, b = u.apply(A, N), b;
    }
    function x(m) {
      return C = m, v = setTimeout(F, h), I ? p(m) : b;
    }
    function Bt(m) {
      var N = m - y, A = m - C, Ae = h - N;
      return L ? r(Ae, S - A) : Ae;
    }
    function xe(m) {
      var N = m - y, A = m - C;
      return y === void 0 || N >= h || N < 0 || L && A >= S;
    }
    function F() {
      var m = t();
      if (xe(m))
        return De(m);
      v = setTimeout(F, Bt(m));
    }
    function De(m) {
      return v = void 0, c && f ? p(m) : (f = d = void 0, b);
    }
    function Vt() {
      v !== void 0 && clearTimeout(v), C = 0, f = y = d = v = void 0;
    }
    function kt() {
      return v === void 0 ? b : De(t());
    }
    function q() {
      var m = t(), N = xe(m);
      if (f = arguments, d = this, y = m, N) {
        if (v === void 0)
          return x(y);
        if (L)
          return clearTimeout(v), v = setTimeout(F, h), p(y);
      }
      return v === void 0 && (v = setTimeout(F, h)), b;
    }
    return q.cancel = Vt, q.flush = kt, q;
  }
  return ae = a, ae;
}
var on = rn();
const an = /* @__PURE__ */ R(on);
var ln = function(e, t) {
  var n = document.createElement("_"), s = n.appendChild(document.createElement("_")), i = n.appendChild(document.createElement("_")), r = s.appendChild(document.createElement("_")), a = void 0, u = void 0;
  return s.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", r.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", r.style.width = r.style.height = "200%", e.appendChild(n), h(), f;
  function h() {
    l();
    var d = e.offsetWidth, S = e.offsetHeight;
    (d !== a || S !== u) && (a = d, u = S, i.style.width = d * 2 + "px", i.style.height = S * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, t({ width: d, height: S })), s.addEventListener("scroll", h), n.addEventListener("scroll", h);
  }
  function l() {
    s.removeEventListener("scroll", h), n.removeEventListener("scroll", h);
  }
  function f() {
    l(), e.removeChild(n);
  }
};
function bt(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
let Ce;
const j = [], cn = 100;
function un() {
  Ce = setInterval(() => {
    j.forEach(Ot);
  }, cn);
}
function hn() {
  clearInterval(Ce), Ce = null;
}
function Ot(e) {
  const { $el: t, listener: n, lastWidth: s, lastHeight: i } = e, r = t.offsetWidth, a = t.offsetHeight;
  (s !== r || i !== a) && (e.lastWidth = r, e.lastHeight = a, n({ width: r, height: a }));
}
function dn(e, t) {
  const n = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, s = () => {
    bt(j, n), j.length || hn();
  };
  return j.push(n), Ot(n), un(), s;
}
function yt(e, t) {
  const n = document.documentMode === 9;
  let s = !0;
  const a = (n ? dn : ln)(e, (...u) => s || t(...u));
  return s = !1, a;
}
function fn(e) {
  const t = [];
  let n = e.parentNode;
  for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
    pn(n) && t.push(n), n = n.parentNode;
  return t.push(window), t;
}
function pn(e) {
  const { overflow: t, overflowX: n, overflowY: s } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + s + n);
}
function _t(e, t) {
  const n = fn(e);
  return window.addEventListener("resize", t, { passive: !0 }), n.forEach((s) => {
    s.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), n.forEach((i) => {
      i.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function Nt(e) {
  return e !== e;
}
function Et(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var le, Je;
function mn() {
  if (Je) return le;
  Je = 1;
  var e = St(), t = 1 / 0, n = 17976931348623157e292;
  function s(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var r = i < 0 ? -1 : 1;
      return r * n;
    }
    return i === i ? i : 0;
  }
  return le = s, le;
}
var ce, Ze;
function gn() {
  if (Ze) return ce;
  Ze = 1;
  var e = mn();
  function t(n) {
    var s = e(n), i = s % 1;
    return s === s ? i ? s - i : s : 0;
  }
  return ce = t, ce;
}
var ue, et;
function vn() {
  if (et) return ue;
  et = 1;
  var e = gn(), t = "Expected a function";
  function n(s, i) {
    var r;
    if (typeof i != "function")
      throw new TypeError(t);
    return s = e(s), function() {
      return --s > 0 && (r = i.apply(this, arguments)), s <= 1 && (i = void 0), r;
    };
  }
  return ue = n, ue;
}
var he, tt;
function Sn() {
  if (tt) return he;
  tt = 1;
  var e = vn();
  function t(n) {
    return e(2, n);
  }
  return he = t, he;
}
var bn = Sn();
const On = /* @__PURE__ */ R(bn);
var de, nt;
function yn() {
  if (nt) return de;
  nt = 1;
  function e(t) {
    return t;
  }
  return de = e, de;
}
var _n = yn();
const Nn = /* @__PURE__ */ R(_n);
var fe, st;
function En() {
  if (st) return fe;
  st = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return fe = e, fe;
}
var wn = En();
const it = /* @__PURE__ */ R(wn), O = () => /* @__PURE__ */ Object.create(null);
function wt(e) {
  return e == null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype;
}
function Cn(e, t, n) {
  wt(n) ? (e[t] || (e[t] = {}), Le(e[t], n)) : e[t] = n;
}
function Le(e, t) {
  if (wt(t)) {
    const n = Object.keys(t);
    for (let s = 0, i = n.length; s < i; s++)
      Cn(e, n[s], t[n[s]]);
  }
  return e;
}
var pe, rt;
function Ln() {
  if (rt) return pe;
  rt = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return pe = e, pe;
}
var Tn = Ln();
const ot = /* @__PURE__ */ R(Tn);
function w(e, t) {
  return e.indexOf(t) !== -1;
}
function Ct(e, t, n) {
  for (let s = 0, i = e.length; s < i; s++)
    if (t.call(n, e[s], s, e)) return e[s];
}
function me(e, t) {
  if (e.length !== t.length) return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n]) return !0;
  return !1;
}
const T = null, Te = 0, Lt = 1, Tt = 2, D = "ALL_CHILDREN", B = "ALL_DESCENDANTS", V = "LEAF_CHILDREN", k = "LEAF_DESCENDANTS", Mn = "LOAD_ROOT_OPTIONS", Rn = "LOAD_CHILDREN_OPTIONS", In = "ASYNC_SEARCH", ge = "ALL", W = "BRANCH_PRIORITY", ve = "LEAF_PRIORITY", Se = "ALL_WITH_INDETERMINATE", at = "ORDER_SELECTED", lt = "LEVEL", ct = "INDEX", g = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, xn = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), ut = 5, ht = 40;
function Mt(e, t) {
  let n = 0;
  do {
    if (e.level < n) return -1;
    if (t.level < n) return 1;
    if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
    n++;
  } while (!0);
}
function Dn(e, t) {
  return e.level === t.level ? Mt(e, t) : e.level - t.level;
}
function be() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function An(e) {
  return typeof e == "string" ? e : typeof e == "number" && !Nt(e) ? e + "" : "";
}
function dt(e, t, n) {
  return e ? qt(t, n) : w(n, t);
}
function Oe(e) {
  return e.message || /* istanbul ignore next */
  String(e);
}
let Bn = 0;
const Vn = {
  provide() {
    return {
      // Enable access to the instance of root component of vue-treeselect
      // across hierarchy.
      instance: this
    };
  },
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: it(!0)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: !0
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: !1
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ","
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: !1
    },
    /**
     * Will be passed with all events as the last param.
     * Useful for identifying events origin.
    */
    instanceId: {
      // Add two trailing "$" to distinguish from explictly specified ids.
      default: () => `${Bn++}$$`,
      type: [String, Number]
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
    */
    joinValues: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: 1 / 0
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function(t) {
        return `and ${t} more`;
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: "Loading..."
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: it(["label"])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: Nn
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return w(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: "Select..."
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: "Retry?"
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: !1
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: !1
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: D,
      validator(e) {
        return w([D, B, V, k], e);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: at,
      validator(e) {
        return w([at, lt, ct], e);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: W,
      validator(e) {
        return w([ge, W, ve, Se], e);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: "id"
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data() {
    return {
      key: 0,
      trigger: {
        // Is the control focused?
        isFocused: !1,
        // User entered search query - value of the input.
        searchQuery: ""
      },
      menu: {
        // Is the menu opened?
        isOpen: !1,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: "bottom"
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: O(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: O(),
        // Id list of all selected options.
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: O()
      },
      // States of root options.
      rootOptionsStates: be(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !0,
        // <id, countObject> map for counting matched children/descendants.
        countMap: O()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: O()
    };
  },
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Normalized nodes that have been selected.
     * @type {node[]}
     */
    selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    /**
     * Id list of selected nodes with `sortValueBy` prop applied.
     * @type {nodeId[]}
     */
    internalValue() {
      let e;
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ge)
        e = this.forest.selectedNodeIds.slice();
      else if (this.valueConsistsOf === W)
        e = this.forest.selectedNodeIds.filter((t) => {
          const n = this.getNode(t);
          return n.isRootNode ? !0 : !this.isSelected(n.parentNode);
        });
      else if (this.valueConsistsOf === ve)
        e = this.forest.selectedNodeIds.filter((t) => {
          const n = this.getNode(t);
          return n.isLeaf ? !0 : n.children.length === 0;
        });
      else if (this.valueConsistsOf === Se) {
        const t = [];
        e = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach((n) => {
          n.ancestors.forEach((s) => {
            w(t, s.id) || w(e, s.id) || t.push(s.id);
          });
        }), e.push(...t);
      }
      return this.sortValueBy === lt ? e.sort((t, n) => Dn(this.getNode(t), this.getNode(n))) : this.sortValueBy === ct && e.sort((t, n) => Mt(this.getNode(t), this.getNode(n))), e;
    },
    /**
     * Has any option been selected?
     * @type {boolean}
     */
    hasValue() {
      return this.internalValue.length > 0;
    },
    /**
     * Single-select mode?
     * @type {boolean}
     */
    single() {
      return !this.multiple;
    },
    /**
     * Id list of nodes displayed in the menu. Nodes that are considered NOT visible:
     *   - descendants of a collapsed branch node
     *   - in local search mode, nodes that are not matched, unless
     *       - it's a branch node and has matched descendants
     *       - it's a leaf node and its parent node is explicitly set to show all children
     * @type {id[]}
     */
    visibleOptionIds() {
      const e = [];
      return this.traverseAllNodesByIndex((t) => {
        if ((!this.localSearch.active || this.shouldOptionBeIncludedInSearchResult(t)) && e.push(t.id), t.isBranch && !this.shouldExpand(t))
          return !1;
      }), e;
    },
    /**
     * Has any option should be displayed in the menu?
     * @type {boolean}
     */
    hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    /**
     * Should show children count when searching?
     * @type {boolean}
     */
    showCountOnSearchComputed() {
      return typeof this.showCountOnSearch == "boolean" ? this.showCountOnSearch : this.showCount;
    },
    /**
     * Is there any branch node?
     * @type {boolean}
     */
    hasBranchNodes() {
      return this.forest.normalizedOptions.some((e) => e.isBranch);
    },
    shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    }
    /* eslint-enable valid-jsdoc */
  },
  watch: {
    alwaysOpen(e) {
      e ? this.openMenu() : this.closeMenu();
    },
    branchNodesFirst() {
      this.initialize();
    },
    disabled(e) {
      e && this.menu.isOpen ? this.closeMenu() : !e && !this.menu.isOpen && this.alwaysOpen && this.openMenu();
    },
    flat() {
      this.initialize();
    },
    internalValue(e, t) {
      me(e, t) && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
    },
    matchKeys() {
      this.initialize();
    },
    multiple(e) {
      e && this.buildForestState();
    },
    options: {
      handler() {
        this.async || (this.initialize(), this.rootOptionsStates.isLoaded = Array.isArray(this.options));
      },
      deep: !0,
      immediate: !0
    },
    "trigger.searchQuery"() {
      this.async ? this.handleRemoteSearch() : this.handleLocalSearch(), this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
    },
    modelValue() {
      const e = this.extractCheckedNodeIdsFromValue();
      me(e, this.internalValue) && this.fixSelectedNodeIds(e);
    }
  },
  methods: {
    verifyProps() {
      E(
        () => this.async ? this.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), this.options == null && !this.loadOptions && E(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), this.flat && E(
        () => this.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), this.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((t) => {
        E(
          () => !this[t],
          () => `"${t}" only applies to flat mode.`
        );
      });
    },
    resetFlags() {
      this._blurOnSelect = !1;
    },
    initialize() {
      const e = this.async ? this.getRemoteSearchEntry().options : this.options;
      if (Array.isArray(e)) {
        const t = this.forest.nodeMap;
        this.forest.nodeMap = O(), this.keepDataOfSelectedNodes(t), this.forest.normalizedOptions = this.normalize(T, e, t), this.fixSelectedNodeIds(this.internalValue);
      } else
        this.forest.normalizedOptions = [];
    },
    getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue() {
      if (this.valueFormat === "id")
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      const e = this.internalValue.map((t) => this.getNode(t).raw);
      return this.multiple ? e : e[0];
    },
    getNode(e) {
      return E(
        () => e != null,
        () => `Invalid node id: ${e}`
      ), e == null ? null : e in this.forest.nodeMap ? this.forest.nodeMap[e] : this.createFallbackNode(e);
    },
    createFallbackNode(e) {
      const t = this.extractNodeFromValue(e), n = this.enhancedNormalizer(t).label || `${e} (unknown)`, s = {
        id: e,
        label: n,
        ancestors: [],
        parentNode: T,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: t
      };
      return this.forest.nodeMap[e] = s;
    },
    extractCheckedNodeIdsFromValue() {
      return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map((e) => this.enhancedNormalizer(e)).map((e) => e.id);
    },
    extractNodeFromValue(e) {
      const t = { id: e };
      if (this.valueFormat === "id")
        return t;
      const n = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [];
      return Ct(
        n,
        (i) => i && this.enhancedNormalizer(i).id === e
      ) || t;
    },
    fixSelectedNodeIds(e) {
      let t = [];
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ge)
        t = e;
      else if (this.valueConsistsOf === W)
        e.forEach((s) => {
          t.push(s);
          const i = this.getNode(s);
          i.isBranch && this.traverseDescendantsBFS(i, (r) => {
            t.push(r.id);
          });
        });
      else if (this.valueConsistsOf === ve) {
        const s = O(), i = e.slice();
        for (; i.length; ) {
          const r = i.shift(), a = this.getNode(r);
          t.push(r), !a.isRootNode && (a.parentNode.id in s || (s[a.parentNode.id] = a.parentNode.children.length), --s[a.parentNode.id] === 0 && i.push(a.parentNode.id));
        }
      } else if (this.valueConsistsOf === Se) {
        const s = O(), i = e.filter((r) => {
          const a = this.getNode(r);
          return a.isLeaf || a.children.length === 0;
        });
        for (; i.length; ) {
          const r = i.shift(), a = this.getNode(r);
          t.push(r), !a.isRootNode && (a.parentNode.id in s || (s[a.parentNode.id] = a.parentNode.children.length), --s[a.parentNode.id] === 0 && i.push(a.parentNode.id));
        }
      }
      me(this.forest.selectedNodeIds, t) && (this.forest.selectedNodeIds = t), this.buildForestState();
    },
    keepDataOfSelectedNodes(e) {
      this.forest.selectedNodeIds.forEach((t) => {
        if (!e[t]) return;
        const n = {
          ...e[t],
          isFallbackNode: !0
        };
        this.forest.nodeMap[t] = n;
      });
    },
    isSelected(e) {
      return e && this.forest.selectedNodeMap[e.id] === !0;
    },
    traverseDescendantsBFS(e, t) {
      if (!e.isBranch) return;
      const n = e.children.slice();
      for (; n.length; ) {
        const s = n[0];
        s.isBranch && n.push(...s.children), t(s), n.shift();
      }
    },
    traverseDescendantsDFS(e, t) {
      e.isBranch && e.children.forEach((n) => {
        this.traverseDescendantsDFS(n, t), t(n);
      });
    },
    traverseAllNodesDFS(e) {
      this.forest.normalizedOptions.forEach((t) => {
        this.traverseDescendantsDFS(t, e), e(t);
      });
    },
    traverseAllNodesByIndex(e) {
      const t = (n) => {
        n.children.forEach((s) => {
          e(s) !== !1 && s.isBranch && t(s);
        });
      };
      t({ children: this.forest.normalizedOptions });
    },
    toggleClickOutsideEvent(e) {
      e ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
    },
    getValueContainer() {
      var e, t;
      return (t = (e = this.$refs) == null ? void 0 : e.control) == null ? void 0 : t.$refs["value-container"];
    },
    getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput() {
      this.getInput().focus();
    },
    blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: M(function(t) {
      if (t.preventDefault(), t.stopPropagation(), this.disabled) return;
      this.getValueContainer().$el.contains(t.target) && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
    }),
    handleClickOutside(e) {
      this.$refs.wrapper && !this.$refs.wrapper.contains(e.target) && (this.blurInput(), this.closeMenu());
    },
    handleLocalSearch() {
      const { searchQuery: e } = this.trigger, t = () => this.resetHighlightedOptionWhenNecessary(!0);
      if (!e)
        return this.localSearch.active = !1, t();
      this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, this.localSearch.countMap[i.id] = {
          [D]: 0,
          [B]: 0,
          [V]: 0,
          [k]: 0
        });
      });
      const n = e.trim().toLocaleLowerCase(), s = n.replace(/\s+/g, " ").split(" ");
      this.traverseAllNodesDFS((i) => {
        this.searchNested && s.length > 1 ? i.isMatched = s.every(
          (r) => dt(!1, r, i.nestedSearchLabel)
        ) : i.isMatched = this.matchKeys.some(
          (r) => dt(!this.disableFuzzyMatching, n, i.lowerCased[r])
        ), i.isMatched && (this.localSearch.noResults = !1, i.ancestors.forEach((r) => this.localSearch.countMap[r.id][B]++), i.isLeaf && i.ancestors.forEach((r) => this.localSearch.countMap[r.id][k]++), i.parentNode !== T && (this.localSearch.countMap[i.parentNode.id][D] += 1, i.isLeaf && (this.localSearch.countMap[i.parentNode.id][V] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== T && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), t();
    },
    handleRemoteSearch() {
      const { searchQuery: e } = this.trigger, t = this, n = this.getRemoteSearchEntry(), s = () => {
        this.initialize(), this.resetHighlightedOptionWhenNecessary(!0);
      };
      if ((e === "" || this.cacheOptions) && n.isLoaded)
        return s();
      this.callLoadOptionsProp({
        action: In,
        args: { searchQuery: e },
        isPending() {
          return n.isLoading;
        },
        start: () => {
          n.isLoading = !0, n.isLoaded = !1, n.loadingError = "";
        },
        succeed: (i) => {
          n.isLoaded = !0, n.options = i, this.trigger.searchQuery === e && s();
        },
        fail: (i) => {
          n.loadingError = Oe(i);
        },
        end: () => {
          t.key += 1, n.isLoading = !1;
        }
      });
    },
    getRemoteSearchEntry() {
      const { searchQuery: e } = this.trigger, t = this.remoteSearch[e] || {
        ...be(),
        options: []
      };
      if (this.$watch(
        () => t.options,
        () => {
          this.trigger.searchQuery === e && this.initialize();
        },
        { deep: !0 }
      ), e === "") {
        if (Array.isArray(this.defaultOptions))
          return t.options = this.defaultOptions, t.isLoaded = !0, t;
        if (this.defaultOptions !== !0)
          return t.isLoaded = !0, t;
      }
      return this.remoteSearch[e] || (this.remoteSearch[e] = t), t;
    },
    shouldExpand(e) {
      return this.localSearch.active ? e.isExpandedOnSearch : e.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult(e) {
      return !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !this.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch);
    },
    shouldShowOptionInMenu(e) {
      return !(this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(e));
    },
    getControl() {
      var e;
      return (e = this.$refs.control) == null ? void 0 : e.$el;
    },
    getMenu() {
      var n, s, i, r;
      const e = this.appendToBody && ((n = this.$refs) != null && n.portal) ? this.$refs.portal.portalTarget : this, t = (r = (i = (s = e == null ? void 0 : e.$refs) == null ? void 0 : s.menu) == null ? void 0 : i.$refs) == null ? void 0 : r.menu;
      return t && t.nodeName !== "#comment" ? t : null;
    },
    setCurrentHighlightedOption(e, t = !0) {
      const n = this.menu.current;
      if (n != null && n in this.forest.nodeMap && (this.forest.nodeMap[n].isHighlighted = !1), !e) {
        this.menu.current = null;
        return;
      }
      if (this.menu.current = e.id, e.isHighlighted = !0, this.menu.isOpen && t) {
        const s = () => {
          const i = this.getMenu(), r = i.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
          r && Ut(i, r);
        };
        this.getMenu() ? s() : this.$nextTick(s);
      }
    },
    resetHighlightedOptionWhenNecessary(e = !1) {
      const { current: t } = this.menu;
      (e || t == null || !(t in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(t))) && this.highlightFirstOption();
    },
    highlightFirstOption() {
      if (!this.hasVisibleOptions) return;
      const e = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    highlightPrevOption() {
      if (!this.hasVisibleOptions) return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (e === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightNextOption() {
      if (!this.hasVisibleOptions) return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (e === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightLastOption() {
      if (!this.hasVisibleOptions) return;
      const e = ot(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    resetSearchQuery() {
      this.trigger.searchQuery = "";
    },
    closeMenu() {
      !this.menu.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.menu.isOpen = !1, this.toggleClickOutsideEvent(!1), this.resetSearchQuery(), this.$emit("close", this.getValue(), this.getInstanceId()));
    },
    openMenu() {
      this.disabled || this.menu.isOpen || (this.menu.isOpen = !0, this.$nextTick(this.resetHighlightedOptionWhenNecessary), this.$nextTick(this.restoreMenuScrollPosition), !this.options && !this.async && this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.$emit("open", this.getInstanceId()));
    },
    toggleMenu() {
      this.menu.isOpen ? this.closeMenu() : this.openMenu();
    },
    toggleExpanded(e) {
      let t;
      this.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && this.loadChildrenOptions(e);
    },
    buildForestState() {
      const e = O();
      this.forest.selectedNodeIds.forEach((n) => {
        e[n] = !0;
      }), this.forest.selectedNodeMap = e;
      const t = O();
      this.multiple && (this.traverseAllNodesByIndex((n) => {
        t[n.id] = Te;
      }), this.selectedNodes.forEach((n) => {
        t[n.id] = Tt, !this.flat && !this.disableBranchNodes && n.ancestors.forEach((s) => {
          this.isSelected(s) || (t[s.id] = Lt);
        });
      })), this.forest.checkedStateMap = t;
    },
    enhancedNormalizer(e) {
      return {
        ...e,
        ...this.normalizer(e, this.getInstanceId())
      };
    },
    normalize(e, t, n) {
      let s = t.map((i) => [this.enhancedNormalizer(i), i]).map(([i, r], a) => {
        this.checkDuplication(i), this.verifyNodeShape(i);
        const { id: u, label: h, children: l, isDefaultExpanded: f } = i, d = e === T, S = d ? 0 : e.level + 1, b = Array.isArray(l) || l === null, v = !b, y = !!i.isDisabled || !this.flat && !d && e.isDisabled, C = !!i.isNew, I = this.matchKeys.reduce((p, x) => ({
          ...p,
          [x]: An(i[x]).toLocaleLowerCase()
        }), {}), L = d ? I.label : e.nestedSearchLabel + " " + I.label;
        this.forest.nodeMap[u] = O();
        const c = this.forest.nodeMap[u];
        if (c.id = u, c.label = h, c.level = S, c.ancestors = d ? [] : [e].concat(e.ancestors), c.index = (d ? [] : e.index).concat(a), c.parentNode = e, c.lowerCased = I, c.nestedSearchLabel = L, c.isDisabled = y, c.isNew = C, c.isMatched = !1, c.isHighlighted = !1, c.isBranch = b, c.isLeaf = v, c.isRootNode = d, c.raw = r, b) {
          const p = Array.isArray(l);
          c.childrenStates = { ...be(), isLoaded: p }, c.isExpanded = typeof f == "boolean" ? f : S < this.defaultExpandLevel, c.hasMatchedDescendants = !1, c.hasDisabledDescendants = !1, c.isExpandedOnSearch = !1, c.showAllChildrenOnSearch = !1, c.count = {
            [D]: 0,
            [B]: 0,
            [V]: 0,
            [k]: 0
          }, c.children = p ? this.normalize(c, l, n) : [], f === !0 && c.ancestors.forEach((x) => {
            x.isExpanded = !0;
          }), !p && typeof this.loadOptions != "function" ? E(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !p && c.isExpanded && this.loadChildrenOptions(c);
        }
        if (c.ancestors.forEach((p) => p.count[B]++), v && c.ancestors.forEach((p) => p.count[k]++), d || (e.count[D] += 1, v && (e.count[V] += 1), y && (e.hasDisabledDescendants = !0)), n && n[u]) {
          const p = n[u];
          c.isMatched = p.isMatched, c.showAllChildrenOnSearch = p.showAllChildrenOnSearch, c.isHighlighted = p.isHighlighted, p.isBranch && c.isBranch && (c.isExpanded = p.isExpanded, c.isExpandedOnSearch = p.isExpandedOnSearch, p.childrenStates.isLoaded && !c.childrenStates.isLoaded ? c.isExpanded = !1 : c.childrenStates = { ...p.childrenStates });
        }
        return c;
      });
      if (this.branchNodesFirst) {
        const i = s.filter((a) => a.isBranch), r = s.filter((a) => a.isLeaf);
        s = i.concat(r);
      }
      return s;
    },
    loadRootOptions() {
      this.callLoadOptionsProp({
        action: Mn,
        isPending: () => this.rootOptionsStates.isLoading,
        start: () => {
          this.rootOptionsStates.isLoading = !0, this.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          this.rootOptionsStates.isLoaded = !0, this.$nextTick(() => {
            this.resetHighlightedOptionWhenNecessary(!0);
          });
        },
        fail: (e) => {
          this.rootOptionsStates.loadingError = Oe(e);
        },
        end: () => {
          this.rootOptionsStates.isLoading = !1;
        }
      });
    },
    loadChildrenOptions(e) {
      const { id: t, raw: n } = e;
      this.callLoadOptionsProp({
        action: Rn,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: n
        },
        isPending: () => this.getNode(t).childrenStates.isLoading,
        start: () => {
          this.getNode(t).childrenStates.isLoading = !0, this.getNode(t).childrenStates.loadingError = "";
        },
        succeed: () => {
          this.getNode(t).childrenStates.isLoaded = !0;
        },
        fail: (s) => {
          this.getNode(t).childrenStates.loadingError = Oe(s);
        },
        end: () => {
          this.getNode(t).childrenStates.isLoading = !1;
        }
      });
    },
    callLoadOptionsProp({ action: e, args: t, isPending: n, start: s, succeed: i, fail: r, end: a }) {
      if (!this.loadOptions || n())
        return;
      s();
      const u = On((l, f) => {
        l ? r(l) : i(f), a();
      }), h = this.loadOptions({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: e,
        ...t,
        callback: u
      });
      Et(h) && h.then(() => {
        u();
      }, (l) => {
        u(l);
      }).catch((l) => {
        console.error(l);
      });
    },
    checkDuplication(e) {
      E(
        () => !(e.id in this.forest.nodeMap && !this.forest.nodeMap[e.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${this.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`
      );
    },
    verifyNodeShape(e) {
      E(
        () => !(e.children === void 0 && e.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    },
    select(e) {
      if (this.disabled || e.isDisabled)
        return;
      this.single && this.clear();
      const t = this.multiple && !this.flat ? this.forest.checkedStateMap[e.id] === Te : !this.isSelected(e);
      t ? this._selectNode(e) : this._deselectNode(e), this.buildForestState(), this.$nextTick(() => {
        t ? this.$emit("select", e.raw, this.getInstanceId()) : this.$emit("deselect", e.raw, this.getInstanceId());
      }), this.localSearch.active && t && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
    },
    clear() {
      this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(
        (e) => this.getNode(e).isDisabled
      ), this.buildForestState());
    },
    // This is meant to be called only by `select()`.
    _selectNode(e) {
      if (this.single || this.disableBranchNodes)
        return this.addValue(e);
      if (this.flat) {
        this.addValue(e), this.autoSelectAncestors ? e.ancestors.forEach((n) => {
          !this.isSelected(n) && !n.isDisabled && this.addValue(n);
        }) : this.autoSelectDescendants && this.traverseDescendantsBFS(e, (n) => {
          !this.isSelected(n) && !n.isDisabled && this.addValue(n);
        });
        return;
      }
      const t = e.isLeaf || /* node.isBranch && */
      !e.hasDisabledDescendants || /* node.isBranch && */
      this.allowSelectingDisabledDescendants;
      if (t && this.addValue(e), e.isBranch && this.traverseDescendantsBFS(e, (n) => {
        (!n.isDisabled || this.allowSelectingDisabledDescendants) && this.addValue(n);
      }), t) {
        let n = e;
        for (; (n = n.parentNode) !== T && n.children.every(this.isSelected); )
          this.addValue(n);
      }
    },
    // This is meant to be called only by `select()`.
    _deselectNode(e) {
      if (this.disableBranchNodes)
        return this.removeValue(e);
      if (this.flat) {
        this.removeValue(e), this.autoDeselectAncestors ? e.ancestors.forEach((n) => {
          this.isSelected(n) && !n.isDisabled && this.removeValue(n);
        }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(e, (n) => {
          this.isSelected(n) && !n.isDisabled && this.removeValue(n);
        });
        return;
      }
      let t = !1;
      if (e.isBranch && this.traverseDescendantsDFS(e, (n) => {
        (!n.isDisabled || this.allowSelectingDisabledDescendants) && (this.removeValue(n), t = !0);
      }), e.isLeaf || /* node.isBranch && */
      t || /* node.isBranch && */
      e.children.length === 0) {
        this.removeValue(e);
        let n = e;
        for (; (n = n.parentNode) !== T && this.isSelected(n); )
          this.removeValue(n);
      }
    },
    addValue(e) {
      this.forest.selectedNodeIds.push(e.id), this.forest.selectedNodeMap[e.id] = !0;
    },
    removeValue(e) {
      bt(this.forest.selectedNodeIds, e.id), delete this.forest.selectedNodeMap[e.id];
    },
    removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      const e = ot(this.internalValue), t = this.getNode(e);
      this.select(t);
    },
    saveMenuScrollPosition() {
      const e = this.getMenu();
      e && (this.menu.lastScrollPosition = e.scrollTop);
    },
    restoreMenuScrollPosition() {
      const e = this.getMenu();
      e && (e.scrollTop = this.menu.lastScrollPosition);
    }
  },
  created() {
    this.verifyProps(), this.resetFlags();
  },
  mounted() {
    this.autoFocus && this.focusInput(), !this.options && !this.async && this.autoLoadRootOptions && this.loadRootOptions(), this.alwaysOpen && this.openMenu(), this.async && this.defaultOptions && this.handleRemoteSearch();
  },
  unmounted() {
    this.toggleClickOutsideEvent(!1);
  }
};
function kn(e) {
  return typeof e == "string" ? e : e != null && !Nt(e) ? JSON.stringify(e) : "";
}
const zn = /* @__PURE__ */ Me({
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  functional: !0,
  render(e) {
    const t = e.instance;
    if (!t || !t.name || t.disabled || !t.hasValue) return null;
    let n = t.internalValue.map(kn);
    return t.multiple && t.joinValues && (n = [n.join(t.delimiter)]), n.map((s, i) => o("input", {
      type: "hidden",
      name: t.name,
      value: s,
      key: "hidden-field-" + i
    }, null));
  }
}), $n = [g.ENTER, g.END, g.HOME, g.ARROW_LEFT, g.ARROW_UP, g.ARROW_RIGHT, g.ARROW_DOWN], Rt = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: ut,
    value: ""
  }),
  computed: {
    needAutoSize() {
      const {
        instance: e
      } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        width: this.needAutoSize ? `${this.inputWidth}px` : null
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery"(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  created() {
    this.debouncedCallback = an(this.updateSearchQuery, xn, {
      leading: !0,
      trailing: !0
    });
  },
  methods: {
    clear() {
      this.onInput({
        target: {
          value: ""
        }
      });
    },
    focus() {
      const {
        instance: e
      } = this;
      e.disabled || this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const {
        instance: e
      } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const {
        instance: e
      } = this, t = e.getMenu();
      if (t && document.activeElement === t)
        return this.focus();
      e.trigger.isFocused = !1, e.closeMenu();
    },
    onInput(e) {
      const {
        value: t
      } = e.target;
      this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown(e) {
      const {
        instance: t
      } = this, n = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && w($n, n))
          return e.preventDefault(), t.openMenu();
        switch (n) {
          case g.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case g.ENTER: {
            if (e.preventDefault(), t.menu.current === null) return;
            const s = t.getNode(t.menu.current);
            if (s.isBranch && t.disableBranchNodes) return;
            t.select(s);
            break;
          }
          case g.ESCAPE: {
            this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case g.END: {
            e.preventDefault(), t.highlightLastOption();
            break;
          }
          case g.HOME: {
            e.preventDefault(), t.highlightFirstOption();
            break;
          }
          case g.ARROW_LEFT: {
            const s = t.getNode(t.menu.current);
            s && (s.isBranch && t.shouldExpand(s) ? (e.preventDefault(), t.toggleExpanded(s)) : !s.isRootNode && (s.isLeaf || s.isBranch && !t.shouldExpand(s)) && (e.preventDefault(), t.setCurrentHighlightedOption(s.parentNode)));
            break;
          }
          case g.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case g.ARROW_RIGHT: {
            const s = t.getNode(t.menu.current);
            s && s.isBranch && !t.shouldExpand(s) && (e.preventDefault(), t.toggleExpanded(s));
            break;
          }
          case g.ARROW_DOWN: {
            e.preventDefault(), t.highlightNextOption();
            break;
          }
          case g.DELETE: {
            t.deleteRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    },
    onMouseDown(e) {
      this.value.length && e.stopPropagation();
    },
    renderInputContainer() {
      const {
        instance: e
      } = this, t = {}, n = [];
      return e.searchable && !e.disabled && (n.push(this.renderInput()), this.needAutoSize && n.push(this.renderSizer())), e.searchable || Le(t, {
        on: {
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown
        },
        ref: "input"
      }), !e.searchable && !e.disabled && Le(t, {
        attrs: {
          tabIndex: e.tabIndex
        }
      }), o("div", zt({
        class: "vue-treeselect__input-container"
      }, t), [n]);
    },
    renderInput() {
      const {
        instance: e
      } = this;
      return o("input", {
        ref: "input",
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabIndex: e.tabIndex,
        required: e.required && !e.hasValue,
        value: this.value,
        style: this.inputStyle,
        onFocus: this.onFocus,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onKeydown: this.onKeyDown,
        onMousedown: this.onMouseDown
      }, null);
    },
    renderSizer() {
      return o("div", {
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth() {
      this.inputWidth = Math.max(ut, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery() {
      const {
        instance: e
      } = this;
      e.trigger.searchQuery = this.value;
    }
  },
  render() {
    return this.renderInputContainer();
  }
}, It = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"],
  render() {
    const {
      instance: e
    } = this, t = {
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": e.hasValue || e.trigger.searchQuery
    };
    return o("div", {
      class: t
    }, [e.placeholder]);
  }
}, Fn = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  methods: {
    renderSingleValueLabel() {
      const {
        instance: e
      } = this, t = e.selectedNodes[0], n = e.$slots["value-label"];
      return n ? n({
        node: t
      }) : t.label;
    }
  },
  render() {
    const {
      instance: e,
      $parent: {
        renderValueContainer: t
      }
    } = this, n = e.hasValue && !e.trigger.searchQuery;
    return t([n && o("div", {
      class: "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), o(It, null, null), o(Rt, {
      ref: "input"
    }, null)]);
  }
}, Ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Hn = {
  name: "vue-treeselect--x"
}, Wn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function jn(e, t, n, s, i, r) {
  return $(), Re("svg", Wn, t[0] || (t[0] = [
    ft("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ]));
}
const xt = /* @__PURE__ */ Ie(Hn, [["render", jn]]), qn = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  methods: {
    handleMouseDown: M(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.select(n);
    })
  },
  render() {
    const {
      instance: e,
      node: t
    } = this, n = {
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": t.isDisabled,
      "vue-treeselect__multi-value-item-new": t.isNew
    }, s = e.$slots["value-label"], i = s ? s({
      node: t
    }) : t.label;
    return o("div", {
      class: "vue-treeselect__multi-value-item-container"
    }, [o("div", {
      class: n,
      onMousedown: this.handleMouseDown
    }, [o("span", {
      class: "vue-treeselect__multi-value-label"
    }, [i]), o("span", {
      class: "vue-treeselect__icon vue-treeselect__value-remove"
    }, [o(xt, null, null)])])]);
  }
}, Pn = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  methods: {
    renderMultiValueItems() {
      const {
        instance: e
      } = this;
      return e.internalValue.slice(0, e.limit).map(e.getNode).map((t) => o(qn, {
        key: `multi-value-item-${t.id}`,
        node: t
      }, null));
    },
    renderExceedLimitTip() {
      const {
        instance: e
      } = this, t = e.internalValue.length - e.limit;
      return t <= 0 ? null : o("div", {
        class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        key: "exceed-limit-tip"
      }, [o("span", {
        class: "vue-treeselect__limit-tip-text"
      }, [e.limitText(t)])]);
    }
  },
  render() {
    const {
      renderValueContainer: e
    } = this.$parent;
    return e(o($t, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: !0
    }, {
      default: () => [this.renderMultiValueItems(), this.renderExceedLimitTip(), o(It, {
        key: "placeholder"
      }, null), o(Rt, {
        ref: "input",
        key: "input"
      }, null)]
    }));
  }
}, Qn = {
  name: "vue-treeselect--arrow"
}, Kn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Un(e, t, n, s, i, r) {
  return $(), Re("svg", Kn, t[0] || (t[0] = [
    ft("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ]));
}
const Dt = /* @__PURE__ */ Ie(Qn, [["render", Un]]), Gn = {
  name: "vue-treeselect--control",
  inject: ["instance"],
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX() {
      const {
        instance: e
      } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow() {
      const {
        instance: e
      } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue() {
      const {
        instance: e
      } = this;
      return e.hasValue && e.internalValue.some((t) => !e.getNode(t).isDisabled);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    renderX() {
      const {
        instance: e
      } = this, t = e.multiple ? e.clearAllText : e.clearValueText;
      return this.shouldShowX ? o("div", {
        class: "vue-treeselect__x-container",
        title: t,
        onMousedown: this.handleMouseDownOnX
      }, [o(xt, {
        class: "vue-treeselect__x"
      }, null)]) : null;
    },
    renderArrow() {
      const {
        instance: e
      } = this, t = {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": e.menu.isOpen
      };
      return this.shouldShowArrow ? o("div", {
        class: "vue-treeselect__control-arrow-container",
        onMousedown: this.handleMouseDownOnArrow
      }, [o(Dt, {
        class: t
      }, null)]) : null;
    },
    handleMouseDownOnX: M(function(t) {
      t.stopPropagation(), t.preventDefault();
      const {
        instance: n
      } = this, s = n.beforeClearAll(), i = (r) => {
        r && n.clear();
      };
      Et(s) ? s.then(i) : setTimeout(() => i(s), 0);
    }),
    handleMouseDownOnArrow: M(function(t) {
      t.preventDefault(), t.stopPropagation();
      const {
        instance: n
      } = this;
      n.focusInput(), n.toggleMenu();
    }),
    // This is meant to be called by child `<Value />` component.
    renderValueContainer(e) {
      return o("div", {
        class: "vue-treeselect__value-container"
      }, [e]);
    }
  },
  render() {
    const {
      instance: e
    } = this, t = e.single ? Fn : Pn;
    return o("div", {
      class: "vue-treeselect__control",
      onMousedown: e.handleMouseDown
    }, [o(t, {
      ref: "value-container"
    }, null), this.renderX(), this.renderArrow()]);
  }
}, _ = /* @__PURE__ */ Me({
  name: "vue-treeselect--tip",
  functional: !0,
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  },
  render(e) {
    const {
      type: t,
      icon: n
    } = this;
    return o("div", {
      class: `vue-treeselect__tip vue-treeselect__${t}-tip`
    }, [o("div", {
      class: "vue-treeselect__icon-container"
    }, [o("span", {
      class: `vue-treeselect__icon-${n}`
    }, null)]), o("span", {
      class: `vue-treeselect__tip-text vue-treeselect__${t}-tip-text`
    }, [this.$slots.default()])]);
  }
});
function Yn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
let ye, _e, Ne;
const Xn = {
  name: "vue-treeselect--option",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    shouldExpand() {
      const {
        instance: e,
        node: t
      } = this;
      return t.isBranch && e.shouldExpand(t);
    },
    shouldShow() {
      const {
        instance: e,
        node: t
      } = this;
      return e.shouldShowOptionInMenu(t);
    }
  },
  methods: {
    renderOption() {
      const {
        instance: e,
        node: t
      } = this, n = {
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": t.isDisabled,
        "vue-treeselect__option--selected": e.isSelected(t),
        "vue-treeselect__option--highlight": t.isHighlighted,
        "vue-treeselect__option--matched": e.localSearch.active && t.isMatched,
        "vue-treeselect__option--hide": !this.shouldShow
      };
      return o("div", {
        class: n,
        onMouseenter: this.handleMouseEnterOption,
        "data-id": t.id
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList() {
      return this.shouldExpand ? o("div", {
        class: "vue-treeselect__list"
      }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]) : null;
    },
    renderArrow() {
      const {
        instance: e,
        node: t
      } = this;
      if (e.shouldFlattenOptions && this.shouldShow) return null;
      if (t.isBranch) {
        const n = {
          "vue-treeselect__option-arrow": !0,
          "vue-treeselect__option-arrow--rotated": this.shouldExpand
        };
        return o("div", {
          class: "vue-treeselect__option-arrow-container",
          onMousedown: this.handleMouseDownOnArrow
        }, [o(we, {
          name: "vue-treeselect__option-arrow--prepare",
          appear: !0
        }, {
          default: () => [o(Dt, {
            class: n
          }, null)]
        })]);
      }
      return (
        /*node.isLeaf && */
        e.hasBranchNodes ? (ye || (ye = o("div", {
          class: "vue-treeselect__option-arrow-placeholder"
        }, [P(" ")])), ye) : null
      );
    },
    renderLabelContainer(e) {
      return o("div", {
        class: "vue-treeselect__label-container",
        onMousedown: this.handleMouseDownOnLabelContainer
      }, [e]);
    },
    renderCheckboxContainer(e) {
      const {
        instance: t,
        node: n
      } = this;
      return t.single || t.disableBranchNodes && n.isBranch ? null : o("div", {
        class: "vue-treeselect__checkbox-container"
      }, [e]);
    },
    renderCheckbox() {
      const {
        instance: e,
        node: t
      } = this, n = e.forest.checkedStateMap[t.id], s = {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": n === Tt,
        "vue-treeselect__checkbox--indeterminate": n === Lt,
        "vue-treeselect__checkbox--unchecked": n === Te,
        "vue-treeselect__checkbox--disabled": t.isDisabled
      };
      return _e || (_e = o("span", {
        class: "vue-treeselect__check-mark"
      }, null)), Ne || (Ne = o("span", {
        class: "vue-treeselect__minus-mark"
      }, null)), o("span", {
        class: s
      }, [_e, Ne]);
    },
    renderLabel() {
      const {
        instance: e,
        node: t
      } = this, n = t.isBranch && (e.localSearch.active ? e.showCountOnSearchComputed : e.showCount), s = n ? e.localSearch.active ? e.localSearch.countMap[t.id][e.showCountOf] : t.count[e.showCountOf] : NaN, i = "vue-treeselect__label", r = "vue-treeselect__count", a = e.$slots["option-label"];
      return a ? a({
        node: t,
        shouldShowCount: n,
        count: s,
        labelClassName: i,
        countClassName: r
      }) : o("label", {
        class: i
      }, [t.label, n && o("span", {
        class: r
      }, [P("("), s, P(")")])]);
    },
    renderSubOptions() {
      const {
        node: e
      } = this;
      return e.childrenStates.isLoaded ? e.children.map((t) => o(z("vue-treeselect--option"), {
        node: t,
        key: t.id
      }, null)) : null;
    },
    renderNoChildrenTip() {
      const {
        instance: e,
        node: t
      } = this;
      return !t.childrenStates.isLoaded || t.children.length ? null : o(_, {
        type: "no-children",
        icon: "warning"
      }, {
        default: () => [e.noChildrenText]
      });
    },
    renderLoadingChildrenTip() {
      const {
        instance: e,
        node: t
      } = this;
      return t.childrenStates.isLoading ? o(_, {
        type: "loading",
        icon: "loader"
      }, {
        default: () => [e.loadingText]
      }) : null;
    },
    renderLoadingChildrenErrorTip() {
      const {
        instance: e,
        node: t
      } = this;
      return t.childrenStates.loadingError ? o(_, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.childrenStates.loadingError, o("a", {
          class: "vue-treeselect__retry",
          title: e.retryTitle,
          onMousedown: this.handleMouseDownOnRetry
        }, [e.retryText])]
      }) : null;
    },
    handleMouseEnterOption(e) {
      const {
        instance: t,
        node: n
      } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(n, !1);
    },
    handleMouseDownOnArrow: M(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.toggleExpanded(n);
    }),
    handleMouseDownOnLabelContainer: M(function() {
      const {
        instance: t,
        node: n
      } = this;
      n.isBranch && t.disableBranchNodes ? t.toggleExpanded(n) : t.select(n);
    }),
    handleMouseDownOnRetry: M(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.loadChildrenOptions(n);
    })
  },
  render() {
    let e;
    const {
      node: t
    } = this, s = {
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${this.instance.shouldFlattenOptions ? 0 : t.level}`]: !0
    };
    return o("div", {
      class: s
    }, [this.renderOption(), t.isBranch ? o(we, {
      name: "vue-treeselect__list--transition"
    }, Yn(e = this.renderSubOptionsList()) ? e : {
      default: () => [e]
    }) : ""]);
  }
};
function Jn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
const Zn = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, At = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  computed: {
    menuStyle() {
      const {
        instance: e
      } = this;
      return {
        maxHeight: e.maxHeight + "px"
      };
    },
    menuContainerStyle() {
      const {
        instance: e
      } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    }
  },
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
    }
  },
  created() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null;
  },
  mounted() {
    const {
      instance: e
    } = this;
    e.menu.isOpen && this.$nextTick(this.onMenuOpen);
  },
  unmounted() {
    this.onMenuClose();
  },
  methods: {
    renderMenu() {
      const {
        instance: e
      } = this;
      return e.menu.isOpen ? o("div", {
        key: e.key,
        ref: "menu",
        class: "vue-treeselect__menu",
        onMousedown: e.handleMouseDown,
        style: this.menuStyle
      }, [this.renderBeforeList(), e.async ? this.renderAsyncSearchMenuInner() : e.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]) : null;
    },
    renderBeforeList() {
      const {
        instance: e
      } = this, t = e.$slots["before-list"];
      return t ? t() : null;
    },
    renderAfterList() {
      const {
        instance: e
      } = this, t = e.$slots["after-list"];
      return t ? t() : null;
    },
    renderNormalMenuInner() {
      const {
        instance: e
      } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : this.renderOptionList();
    },
    renderLocalSearchMenuInner() {
      const {
        instance: e
      } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : e.localSearch.noResults ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderAsyncSearchMenuInner() {
      const {
        instance: e
      } = this, t = e.getRemoteSearchEntry(), n = e.trigger.searchQuery === "" && !e.defaultOptions, s = n ? !1 : t.isLoaded && t.options.length === 0;
      return n ? this.renderSearchPromptTip() : t.isLoading ? this.renderLoadingOptionsTip() : t.loadingError ? this.renderAsyncSearchLoadingErrorTip() : s ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderOptionList() {
      const {
        instance: e
      } = this;
      return o("div", {
        class: "vue-treeselect__list"
      }, [e.forest.normalizedOptions.map((t) => o(Xn, {
        node: t,
        key: t.id
      }, null))]);
    },
    renderSearchPromptTip() {
      const {
        instance: e
      } = this;
      return o(_, {
        type: "search-prompt",
        icon: "warning"
      }, {
        default: () => [e.searchPromptText]
      });
    },
    renderLoadingOptionsTip() {
      const {
        instance: e
      } = this;
      return o(_, {
        type: "loading",
        icon: "loader"
      }, {
        default: () => [e.loadingText]
      });
    },
    renderLoadingRootOptionsErrorTip() {
      const {
        instance: e
      } = this;
      return o(_, {
        type: "error",
        icon: "error"
      }, {
        default: () => [e.rootOptionsStates.loadingError, o("a", {
          class: "vue-treeselect__retry",
          onClick: e.loadRootOptions,
          title: e.retryTitle
        }, [e.retryText])]
      });
    },
    renderAsyncSearchLoadingErrorTip() {
      const {
        instance: e
      } = this, t = e.getRemoteSearchEntry();
      return o(_, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.loadingError, o("a", {
          class: "vue-treeselect__retry",
          onClick: e.handleRemoteSearch,
          title: e.retryTitle
        }, [e.retryText])]
      });
    },
    renderNoAvailableOptionsTip() {
      const {
        instance: e
      } = this;
      return o(_, {
        type: "no-options",
        icon: "warning"
      }, {
        default: () => [e.noOptionsText]
      });
    },
    renderNoResultsTip() {
      const {
        instance: e
      } = this;
      return o(_, {
        type: "no-results",
        icon: "warning"
      }, {
        default: () => [e.noResultsText]
      });
    },
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const {
        instance: e
      } = this;
      if (!e.menu.isOpen)
        return;
      const t = e.getMenu(), n = e.getControl();
      if (!t || !n)
        return;
      const s = t.getBoundingClientRect(), i = n.getBoundingClientRect(), r = s.height, a = window.innerHeight, u = i.top, h = window.innerHeight - i.bottom, l = i.top >= 0 && i.top <= a || i.top < 0 && i.bottom > 0, f = h > r + ht, d = u > r + ht;
      l ? e.openDirection !== "auto" ? e.menu.placement = Zn[e.openDirection] : f || !d ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: yt(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: _t(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  },
  render() {
    let e;
    return o("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: this.menuContainerStyle
    }, [o(we, {
      name: "vue-treeselect__menu--transition"
    }, Jn(e = this.renderMenu()) ? e : {
      default: () => [e]
    })]);
  }
}, es = {
  name: "vue-treeselect--portal-target",
  inject: ["instance"],
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.setupHandlers() : this.removeHandlers();
    },
    "instance.menu.placement"() {
      this.updateMenuContainerOffset();
    }
  },
  created() {
    this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
  },
  mounted() {
    const {
      instance: e
    } = this;
    e.menu.isOpen && this.setupHandlers();
  },
  methods: {
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: _t(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: yt(t, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const {
        instance: e
      } = this, t = this.$el, s = e.getControl().getBoundingClientRect();
      t.style.width = s.width + "px";
    },
    updateMenuContainerOffset() {
      var d, S;
      const {
        instance: e
      } = this, t = e.getControl();
      if (!t)
        return;
      const n = this.$el, s = t.getBoundingClientRect(), i = n.getBoundingClientRect(), r = e.menu.placement === "bottom" ? s.height : 0, a = Math.round(s.left - i.left) + "px", u = Math.round(s.top - i.top + r) + "px", h = (S = (d = this.$refs) == null ? void 0 : d.menu) == null ? void 0 : S.$refs["menu-container"].style, f = Ct(["transform", "webkitTransform", "MozTransform", "msTransform"], (b) => b in document.body.style);
      h && (h[f] = `translate(${a}, ${u})`);
    }
  },
  render() {
    const {
      instance: e
    } = this, t = ["vue-treeselect__portal-target", e.wrapperClass], n = {
      zIndex: e.zIndex
    };
    return o("div", {
      class: t,
      style: n,
      "data-instance-id": e.getInstanceId()
    }, [o(At, {
      ref: "menu"
    }, null)]);
  },
  unmounted() {
    this.removeHandlers();
  }
};
let Ee;
const ts = {
  name: "vue-treeselect--menu-portal",
  inject: ["instance"],
  created() {
    this.portalTarget = null;
  },
  mounted() {
    this.setup();
  },
  unmounted() {
    this.teardown();
  },
  methods: {
    setup() {
      const {
        instance: e
      } = this, t = document.createElement("div");
      document.body.appendChild(t), this.portalTarget = Ft({
        parent: this,
        ...es
      }).provide("instance", e).mount(t);
    },
    teardown() {
      var e, t;
      (t = (e = this.portalTarget.$el) == null ? void 0 : e.parentNode) == null || t.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget = null;
    }
  },
  render() {
    return Ee || (Ee = o("div", {
      class: "vue-treeselect__menu-placeholder"
    }, null)), Ee;
  }
}, ns = Me({
  name: "vue-treeselect",
  mixins: [Vn],
  components: {
    HiddenFields: zn,
    Control: Gn,
    Menu: At,
    MenuPortal: ts
  },
  computed: {
    wrapperClass() {
      return {
        "vue-treeselect": !0,
        "vue-treeselect--single": this.single,
        "vue-treeselect--multi": this.multiple,
        "vue-treeselect--searchable": this.searchable,
        "vue-treeselect--disabled": this.disabled,
        "vue-treeselect--focused": this.trigger.isFocused,
        "vue-treeselect--has-value": this.hasValue,
        "vue-treeselect--open": this.menu.isOpen,
        "vue-treeselect--open-above": this.menu.placement === "top",
        "vue-treeselect--open-below": this.menu.placement === "bottom",
        "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
        "vue-treeselect--append-to-body": this.appendToBody
      };
    }
  }
  // render() {
  //   return (
  //     <div ref="wrapper" class={this.wrapperClass}>
  //       <HiddenFields />
  //       <Control ref="control" />
  //       {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
  //     </div>
  //   )
  // },
});
function ss(e, t, n, s, i, r) {
  const a = z("HiddenFields"), u = z("Control"), h = z("MenuPortal"), l = z("Menu");
  return $(), Re("div", {
    ref: "wrapper",
    class: Ht(e.wrapperClass)
  }, [
    o(a),
    o(u, { ref: "control" }, null, 512),
    e.appendToBody ? ($(), Be(h, {
      key: 0,
      ref: "portal"
    }, null, 512)) : ($(), Be(l, {
      key: 1,
      ref: "menu"
    }, null, 512))
  ], 2);
}
const rs = /* @__PURE__ */ Ie(ns, [["render", ss]]);
export {
  In as ASYNC_SEARCH,
  Rn as LOAD_CHILDREN_OPTIONS,
  Mn as LOAD_ROOT_OPTIONS,
  rs as Treeselect,
  rs as default,
  Vn as treeselectMixin
};
