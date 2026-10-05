import { shallowReactive as de, reactive as Ne, toRaw as hn, computed as H, nextTick as ce, watch as ne, onMounted as Ce, onUnmounted as vn, isReactive as pn, inject as gn, defineComponent as ue, openBlock as b, createElementBlock as V, Fragment as se, renderList as Te, unref as S, ref as J, onBeforeUnmount as Re, createElementVNode as K, normalizeStyle as Se, toDisplayString as j, createCommentVNode as re, normalizeClass as oe, createBlock as q, createTextVNode as ee, createVNode as ie, watchEffect as mn, TransitionGroup as _n, withCtx as te, renderSlot as yn, Transition as Sn, Teleport as bn, useSlots as On, shallowRef as Me, provide as En } from "vue";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ve, vt;
function xn() {
  if (vt) return Ve;
  vt = 1;
  function e() {
  }
  return Ve = e, Ve;
}
var Nn = xn();
const Tn = /* @__PURE__ */ $e(Nn), dt = (() => {
  try {
    return process.env.NODE_ENV || "production";
  } catch {
    return "production";
  }
})(), _e = dt === "production" ? (
  /* istanbul ignore next */
  Tn
) : function(n, t) {
  if (!n()) {
    const o = ["[Vue-Treeselect Warning]"].concat(t());
    console.error(...o);
  }
};
function De(e) {
  return function(t, ...o) {
    t.type === "mousedown" && t.button === 0 && e.call(this, t, ...o);
  };
}
function rt(e, n) {
  const t = e.getBoundingClientRect(), o = n.getBoundingClientRect(), l = n.offsetHeight / 3;
  o.bottom + l > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + l,
    e.scrollHeight
  ) : o.top - l < t.top && (e.scrollTop = Math.max(n.offsetTop - l, 0));
}
function Gt(e) {
  return typeof CSS < "u" && CSS.escape ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&");
}
var He, pt;
function Kt() {
  if (pt) return He;
  pt = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return He = e, He;
}
var ze, gt;
function Cn() {
  if (gt) return ze;
  gt = 1;
  var e = typeof Ie == "object" && Ie && Ie.Object === Object && Ie;
  return ze = e, ze;
}
var Pe, mt;
function Qt() {
  if (mt) return Pe;
  mt = 1;
  var e = Cn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return Pe = t, Pe;
}
var qe, _t;
function Rn() {
  if (_t) return qe;
  _t = 1;
  var e = Qt(), n = function() {
    return e.Date.now();
  };
  return qe = n, qe;
}
var We, yt;
function wn() {
  if (yt) return We;
  yt = 1;
  var e = /\s/;
  function n(t) {
    for (var o = t.length; o-- && e.test(t.charAt(o)); )
      ;
    return o;
  }
  return We = n, We;
}
var je, St;
function Mn() {
  if (St) return je;
  St = 1;
  var e = wn(), n = /^\s+/;
  function t(o) {
    return o && o.slice(0, e(o) + 1).replace(n, "");
  }
  return je = t, je;
}
var Ue, bt;
function Yt() {
  if (bt) return Ue;
  bt = 1;
  var e = Qt(), n = e.Symbol;
  return Ue = n, Ue;
}
var Ge, Ot;
function In() {
  if (Ot) return Ge;
  Ot = 1;
  var e = Yt(), n = Object.prototype, t = n.hasOwnProperty, o = n.toString, l = e ? e.toStringTag : void 0;
  function s(f) {
    var i = t.call(f, l), d = f[l];
    try {
      f[l] = void 0;
      var r = !0;
    } catch {
    }
    var h = o.call(f);
    return r && (i ? f[l] = d : delete f[l]), h;
  }
  return Ge = s, Ge;
}
var Ke, Et;
function kn() {
  if (Et) return Ke;
  Et = 1;
  var e = Object.prototype, n = e.toString;
  function t(o) {
    return n.call(o);
  }
  return Ke = t, Ke;
}
var Qe, xt;
function Ln() {
  if (xt) return Qe;
  xt = 1;
  var e = Yt(), n = In(), t = kn(), o = "[object Null]", l = "[object Undefined]", s = e ? e.toStringTag : void 0;
  function f(i) {
    return i == null ? i === void 0 ? l : o : s && s in Object(i) ? n(i) : t(i);
  }
  return Qe = f, Qe;
}
var Ye, Nt;
function Dn() {
  if (Nt) return Ye;
  Nt = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return Ye = e, Ye;
}
var Xe, Tt;
function An() {
  if (Tt) return Xe;
  Tt = 1;
  var e = Ln(), n = Dn(), t = "[object Symbol]";
  function o(l) {
    return typeof l == "symbol" || n(l) && e(l) == t;
  }
  return Xe = o, Xe;
}
var Je, Ct;
function Xt() {
  if (Ct) return Je;
  Ct = 1;
  var e = Mn(), n = Kt(), t = An(), o = NaN, l = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, f = /^0o[0-7]+$/i, i = parseInt;
  function d(r) {
    if (typeof r == "number")
      return r;
    if (t(r))
      return o;
    if (n(r)) {
      var h = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = n(h) ? h + "" : h;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = e(r);
    var v = s.test(r);
    return v || f.test(r) ? i(r.slice(2), v ? 2 : 8) : l.test(r) ? o : +r;
  }
  return Je = d, Je;
}
var Ze, Rt;
function Bn() {
  if (Rt) return Ze;
  Rt = 1;
  var e = Kt(), n = Rn(), t = Xt(), o = "Expected a function", l = Math.max, s = Math.min;
  function f(i, d, r) {
    var h, v, a, c, g, O, _ = 0, w = !1, E = !1, $ = !0;
    if (typeof i != "function")
      throw new TypeError(o);
    d = t(d) || 0, e(r) && (w = !!r.leading, E = "maxWait" in r, a = E ? l(t(r.maxWait) || 0, d) : a, $ = "trailing" in r ? !!r.trailing : $);
    function p(R) {
      var B = h, P = v;
      return h = v = void 0, _ = R, c = i.apply(P, B), c;
    }
    function D(R) {
      return _ = R, g = setTimeout(u, d), w ? p(R) : c;
    }
    function C(R) {
      var B = R - O, P = R - _, U = d - B;
      return E ? s(U, a - P) : U;
    }
    function k(R) {
      var B = R - O, P = R - _;
      return O === void 0 || B >= d || B < 0 || E && P >= a;
    }
    function u() {
      var R = n();
      if (k(R))
        return y(R);
      g = setTimeout(u, C(R));
    }
    function y(R) {
      return g = void 0, $ && h ? p(R) : (h = v = void 0, c);
    }
    function L() {
      g !== void 0 && clearTimeout(g), _ = 0, h = O = v = g = void 0;
    }
    function x() {
      return g === void 0 ? c : y(n());
    }
    function M() {
      var R = n(), B = k(R);
      if (h = arguments, v = this, O = R, B) {
        if (g === void 0)
          return D(O);
        if (E)
          return clearTimeout(g), g = setTimeout(u, d), p(O);
      }
      return g === void 0 && (g = setTimeout(u, d)), c;
    }
    return M.cancel = L, M.flush = x, M;
  }
  return Ze = f, Ze;
}
var $n = Bn();
const Fn = /* @__PURE__ */ $e($n);
var Vn = (function(e, n) {
  var t = document.createElement("_"), o = t.appendChild(document.createElement("_")), l = t.appendChild(document.createElement("_")), s = o.appendChild(document.createElement("_")), f = void 0, i = void 0;
  return o.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", s.style.cssText = l.style.cssText = "display:block;height:100%;transition:0s;width:100%", s.style.width = s.style.height = "200%", e.appendChild(t), d(), h;
  function d() {
    r();
    var v = e.offsetWidth, a = e.offsetHeight;
    (v !== f || a !== i) && (f = v, i = a, l.style.width = v * 2 + "px", l.style.height = a * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, o.scrollLeft = o.scrollWidth, o.scrollTop = o.scrollHeight, n({ width: v, height: a })), o.addEventListener("scroll", d), t.addEventListener("scroll", d);
  }
  function r() {
    o.removeEventListener("scroll", d), t.removeEventListener("scroll", d);
  }
  function h() {
    r(), e.removeChild(t);
  }
});
let Le;
const Ee = [], Hn = 100;
function zn() {
  Le = setInterval(() => {
    Ee.forEach(Jt);
  }, Hn);
}
function Pn() {
  Le && (clearInterval(Le), Le = null);
}
function Jt(e) {
  const { $el: n, listener: t, lastWidth: o, lastHeight: l } = e, s = n.offsetWidth, f = n.offsetHeight;
  (o !== s || l !== f) && (e.lastWidth = s, e.lastHeight = f, t({ width: s, height: f }));
}
function qn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, o = () => {
    const l = Ee.indexOf(t);
    l !== -1 && Ee.splice(l, 1), Ee.length || Pn();
  };
  return Ee.push(t), Jt(t), zn(), o;
}
function Zt(e, n) {
  const t = document.documentMode === 9;
  let o = !0;
  const f = (t ? qn : Vn)(e, (...i) => {
    o || n(...i);
  });
  return o = !1, f;
}
function Wn(e) {
  const n = [];
  let t = e.parentNode;
  for (; t && t.nodeName !== "BODY" && t.nodeType === document.ELEMENT_NODE; )
    jn(t) && n.push(t), t = t.parentNode;
  return n.push(window), n;
}
function jn(e) {
  const { overflow: n, overflowX: t, overflowY: o } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + o + t);
}
function en(e, n) {
  const t = Wn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((o) => {
    o.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((l) => {
      l.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Un(e) {
  return e !== e;
}
function tn(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var et, wt;
function Gn() {
  if (wt) return et;
  wt = 1;
  var e = Xt(), n = 1 / 0, t = 17976931348623157e292;
  function o(l) {
    if (!l)
      return l === 0 ? l : 0;
    if (l = e(l), l === n || l === -n) {
      var s = l < 0 ? -1 : 1;
      return s * t;
    }
    return l === l ? l : 0;
  }
  return et = o, et;
}
var tt, Mt;
function Kn() {
  if (Mt) return tt;
  Mt = 1;
  var e = Gn();
  function n(t) {
    var o = e(t), l = o % 1;
    return o === o ? l ? o - l : o : 0;
  }
  return tt = n, tt;
}
var nt, It;
function Qn() {
  if (It) return nt;
  It = 1;
  var e = Kn(), n = "Expected a function";
  function t(o, l) {
    var s;
    if (typeof l != "function")
      throw new TypeError(n);
    return o = e(o), function() {
      return --o > 0 && (s = l.apply(this, arguments)), o <= 1 && (l = void 0), s;
    };
  }
  return nt = t, nt;
}
var ot, kt;
function Yn() {
  if (kt) return ot;
  kt = 1;
  var e = Qn();
  function n(t) {
    return e(2, t);
  }
  return ot = n, ot;
}
var Xn = Yn();
const Jn = /* @__PURE__ */ $e(Xn), Y = () => /* @__PURE__ */ Object.create(null);
function ke(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
const at = null, ft = 0, nn = 1, on = 2, xe = "ALL_CHILDREN", me = "ALL_DESCENDANTS", Ae = "LEAF_CHILDREN", ye = "LEAF_DESCENDANTS", Zn = "LOAD_ROOT_OPTIONS", eo = "LOAD_CHILDREN_OPTIONS", to = "ASYNC_SEARCH", Lt = "ALL", Dt = "BRANCH_PRIORITY", At = "LEAF_PRIORITY", Bt = "ALL_WITH_INDETERMINATE", Z = {
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  ESCAPE: "Escape",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete"
}, no = dt === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), $t = 5, Ft = 40;
function lt(e, n) {
  if (!e.isBranch || !e.children) return;
  const t = e.children.slice();
  for (let o = 0; o < t.length; o++) {
    const l = t[o], s = l.children;
    if (l.isBranch && s)
      for (let f = 0; f < s.length; f++) t.push(s[f]);
    n(l);
  }
}
function Be(e, n) {
  const t = e.children;
  if (!(!e.isBranch || !t))
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      Be(l, n), n(l);
    }
}
function oo(e, n) {
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    Be(o, n), n(o);
  }
}
function lo(e, n) {
  const t = (o) => {
    for (let l = 0; l < o.length; l++) {
      const s = o[l];
      n(s) !== !1 && s.isBranch && s.children && t(s.children);
    }
  };
  t(e);
}
function so(e, n) {
  const t = de({
    normalizedOptions: [],
    nodeMap: Y(),
    checkedStateMap: de(Y()),
    selectedNodeIds: n,
    selectedNodeMap: de(Y())
  });
  let o = Y(), l = Y();
  const s = () => !!e.multiple && !e.flat && !e.disableBranchNodes, f = (a) => o[a] ? on : s() && l[a] > 0 ? nn : ft, i = (a, c, g) => {
    const O = t.nodeMap[a];
    if (!O) return;
    const _ = O.ancestors;
    for (let w = 0; w < _.length; w++) {
      const E = _[w].id;
      l[E] = (l[E] || 0) + c, g && (g[E] = E);
    }
  };
  return {
    forest: t,
    buildForestState: () => {
      o = Y(), l = Y();
      const a = Y(), c = t.selectedNodeIds;
      for (let O = 0; O < c.length; O++) {
        const _ = c[O];
        o[_] || (o[_] = !0, a[_] = !0, s() && i(_, 1));
      }
      t.selectedNodeMap = de(a);
      const g = Y();
      if (e.multiple) {
        const { nodeMap: O } = t;
        for (const _ in O) {
          const w = O[_].id;
          g[w] = f(w);
        }
      }
      t.checkedStateMap = de(g);
    },
    setSelectedNodeIds: (a) => {
      const c = t.selectedNodeIds, g = Y();
      for (let C = 0; C < a.length; C++) g[a[C]] = !0;
      const O = [], _ = [], w = Y();
      for (let C = 0; C < a.length; C++) {
        const k = a[C];
        !o[k] && !w[k] && (w[k] = !0, O.push(k));
      }
      for (let C = 0; C < c.length; C++) {
        const k = c[C];
        !g[k] && !w[k] && (w[k] = !0, _.push(k));
      }
      if (t.selectedNodeIds = a, !O.length && !_.length) return;
      const { selectedNodeMap: E, checkedStateMap: $ } = t, p = s(), D = Y();
      for (let C = 0; C < _.length; C++) {
        const k = _[C];
        delete o[k], delete E[k], D[k] = k, p && i(k, -1, D);
      }
      for (let C = 0; C < O.length; C++) {
        const k = O[C];
        o[k] = !0, E[k] = !0, D[k] = k, p && i(k, 1, D);
      }
      if (e.multiple)
        for (const C in D) {
          const k = D[C];
          $[k] = f(k);
        }
    },
    isSelected: (a) => !!a && t.selectedNodeMap[a.id] === !0,
    getCheckedState: (a) => t.checkedStateMap[a.id]
  };
}
const Vt = dt !== "production", ro = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Fe() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Ht(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function ao(e, n, t, o) {
  const l = (d) => {
    const r = e.normalizer ? e.normalizer(d, t()) : d;
    return !r || r === d ? (h) => d[h] : (h) => ro(r, h) ? r[h] : d[h];
  }, s = (d) => ({
    ...d,
    ...e.normalizer ? e.normalizer(d, t()) : {}
  }), f = (d, r) => {
    _e(
      () => !(d in n.nodeMap && !n.nodeMap[d].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(d)}. Their labels are "${n.nodeMap[d].label}" and "${r}" respectively.`
    );
  }, i = (d, r, h) => {
    const v = n.nodeMap, a = e.matchKeys || ["label"], c = d === at, g = c ? 0 : d.level + 1, O = c ? [] : [d, ...d.ancestors], _ = c ? [] : d.index, w = !!e.searchNested;
    let E = new Array(r.length);
    for (let $ = 0; $ < r.length; $++) {
      const p = r[$], D = l(p), C = D("id"), k = D("label"), u = D("children"), y = D("isDefaultExpanded");
      Vt && f(C, k), Vt && _e(
        () => !(u === void 0 && D("isBranch") === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
      const L = Array.isArray(u) || u === null, x = !L, M = !!D("isDisabled") || !e.flat && !c && !!d.isDisabled, R = !!D("isNew"), B = {};
      for (let A = 0; A < a.length; A++) {
        const m = a[A];
        B[m] = Ht(D(m)).toLocaleLowerCase();
      }
      "label" in B || (B.label = Ht(k).toLocaleLowerCase());
      const P = w ? c ? B.label : d.nestedSearchLabel + " " + B.label : "", U = {
        id: C,
        label: k,
        level: g,
        ancestors: O,
        index: _.concat($),
        parentNode: d,
        lowerCased: B,
        nestedSearchLabel: P,
        isDisabled: M,
        isNew: R,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: L,
        isLeaf: x,
        isRootNode: c,
        raw: p
      };
      L && (U.childrenStates = Ne({ ...Fe(), isLoaded: Array.isArray(u) }), U.isExpanded = typeof y == "boolean" ? y : g < (e.defaultExpandLevel || 0), U.hasMatchedDescendants = !1, U.hasDisabledDescendants = !1, U.isExpandedOnSearch = !1, U.showAllChildrenOnSearch = !1, U.count = {
        [xe]: 0,
        [me]: 0,
        [Ae]: 0,
        [ye]: 0
      }, U.children = []);
      const T = de(U);
      if (v[C] = T, L) {
        const A = Array.isArray(u);
        if (A && (T.children = i(T, u, h)), y === !0)
          for (let m = 0; m < O.length; m++) O[m].isExpanded = !0;
        !A && typeof e.loadOptions != "function" && _e(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        );
      }
      if (!c) {
        const A = d.count;
        A[xe] += 1, A[me] += 1 + (L ? U.count[me] : 0), x ? (A[Ae] += 1, A[ye] += 1) : A[ye] += U.count[ye], (M || U.hasDisabledDescendants) && (d.hasDisabledDescendants = !0);
      }
      const N = h && h[C];
      N && (T.isMatched = !!N.isMatched, T.showAllChildrenOnSearch = !!N.showAllChildrenOnSearch, T.isHighlighted = !!N.isHighlighted, N.isBranch && L && (T.isExpanded = N.isExpanded, T.isExpandedOnSearch = N.isExpandedOnSearch, T.hasMatchedDescendants = N.hasMatchedDescendants, N.childrenStates.isLoaded && !T.childrenStates.isLoaded ? T.isExpanded = !1 : T.childrenStates = Ne({ ...hn(N.childrenStates) }))), L && !T.childrenStates.isLoaded && !T.childrenStates.loadingError && T.isExpanded && typeof e.loadOptions == "function" && o(T), E[$] = T;
    }
    if (e.branchNodesFirst) {
      const $ = E.filter((D) => D.isBranch), p = E.filter((D) => D.isLeaf);
      E = $.concat(p);
    }
    return E;
  };
  return {
    normalize: i,
    enhancedNormalizer: s
  };
}
function ln(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function io(e, n) {
  return e.level === n.level ? ln(e, n) : e.level - n.level;
}
function zt(e, n, t) {
  const o = Y();
  for (let l = 0; l < e.length; l++) {
    const s = e[l], f = t(s);
    if (!f || (n.push(s), f.isRootNode || !f.parentNode)) continue;
    const i = f.parentNode;
    i.id in o || (o[i.id] = i.children.length), --o[i.id] === 0 && e.push(i.id);
  }
}
function co(e, n, t, o, l) {
  const s = H(() => n.selectedNodeIds.map((v) => t(v))), f = H(() => !e.multiple), i = H(() => {
    let v;
    if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Lt)
      v = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Dt)
      v = n.selectedNodeIds.filter((a) => {
        const c = t(a);
        return c ? c.isRootNode || !c.parentNode ? !0 : !o(c.parentNode) : !1;
      });
    else if (e.valueConsistsOf === At)
      v = n.selectedNodeIds.filter((a) => {
        const c = t(a);
        return c ? c.isLeaf ? !0 : c.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Bt) {
      v = n.selectedNodeIds.slice();
      const a = Y();
      for (let g = 0; g < v.length; g++) a[v[g]] = !0;
      const c = [];
      s.value.forEach((g) => {
        const O = g.ancestors;
        for (let _ = 0; _ < O.length; _++) {
          const w = O[_].id;
          a[w] || (a[w] = !0, c.push(w));
        }
      }), v.push(...c);
    } else
      v = [];
    if (e.sortValueBy === "LEVEL" || e.sortValueBy === "INDEX") {
      const a = e.sortValueBy === "LEVEL" ? io : ln;
      v = v.map((c) => t(c)).sort(a).map((c) => c.id);
    }
    return v;
  }), d = H(() => i.value.length > 0);
  return {
    selectedNodes: s,
    single: f,
    internalValue: i,
    hasValue: d,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? i.value.slice() : i.value[0];
      const v = i.value.map((a) => t(a).raw);
      return e.multiple ? v : v[0];
    },
    computeSelectedNodeIds: (v) => {
      const a = [];
      if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Lt)
        return v;
      if (e.valueConsistsOf === Dt)
        v.forEach((c) => {
          a.push(c);
          const g = t(c);
          g?.isBranch && l(g, (O) => {
            a.push(O.id);
          });
        });
      else if (e.valueConsistsOf === At)
        zt(v.slice(), a, t);
      else if (e.valueConsistsOf === Bt) {
        const c = v.filter((g) => {
          const O = t(g);
          return O && (O.isLeaf || O.children.length === 0);
        });
        zt(c, a, t);
      }
      return a;
    }
  };
}
function uo(e) {
  const {
    props: n,
    emit: t,
    forest: o,
    getNode: l,
    getCheckedState: s,
    setSelectedNodeIds: f,
    traverseDescendantsBFS: i,
    traverseDescendantsDFS: d,
    resetSearchQuery: r,
    closeMenu: h,
    hasValue: v,
    internalValue: a,
    single: c,
    getInstanceId: g,
    localSearch: O
  } = e;
  let _ = !1;
  const w = () => {
    const u = _;
    return _ = !1, u;
  }, E = (u = o.selectedNodeIds) => {
    const y = u, L = Y();
    for (let R = 0; R < y.length; R++) L[y[R]] = !0;
    const x = [], M = Y();
    return {
      has: (R) => L[R.id] === !0,
      add: (R) => {
        L[R.id] || (L[R.id] = !0, M[R.id] || (M[R.id] = !0, x.push(R.id)));
      },
      remove: (R) => {
        delete L[R.id];
      },
      commit: () => {
        const R = [];
        for (let B = 0; B < y.length; B++) {
          const P = y[B];
          L[P] && !M[P] && R.push(P);
        }
        for (let B = 0; B < x.length; B++)
          L[x[B]] && R.push(x[B]);
        f(R);
      }
    };
  }, $ = () => {
    v() && (c() || n.allowClearingDisabled ? f([]) : f(o.selectedNodeIds.filter((u) => {
      const y = l(u);
      return y ? y.isDisabled : !1;
    })));
  }, p = (u, y) => {
    if (c() || n.disableBranchNodes)
      return u.add(y);
    if (n.flat) {
      u.add(y), n.autoSelectAncestors ? y.ancestors.forEach((x) => {
        !u.has(x) && !x.isDisabled && u.add(x);
      }) : n.autoSelectDescendants && i(y, (x) => {
        !u.has(x) && !x.isDisabled && u.add(x);
      });
      return;
    }
    const L = y.isLeaf || !y.hasDisabledDescendants || !!n.allowSelectingDisabledDescendants;
    if (L && u.add(y), y.isBranch && i(y, (x) => {
      if (!x.isDisabled || n.allowSelectingDisabledDescendants) {
        if (x.isBranch && x.hasDisabledDescendants && !n.allowSelectingDisabledDescendants) return;
        u.add(x);
      }
    }), L) {
      let x = y;
      for (; (x = x.parentNode) !== null && x.children.every(u.has); )
        u.add(x);
    }
  }, D = (u, y) => {
    if (n.disableBranchNodes)
      return u.remove(y);
    if (n.flat) {
      u.remove(y), n.autoDeselectAncestors ? y.ancestors.forEach((x) => {
        u.has(x) && !x.isDisabled && u.remove(x);
      }) : n.autoDeselectDescendants && i(y, (x) => {
        u.has(x) && !x.isDisabled && u.remove(x);
      });
      return;
    }
    let L = !1;
    if (y.isBranch && d(y, (x) => {
      (!x.isDisabled || n.allowSelectingDisabledDescendants) && (u.remove(x), L = !0);
    }), y.isLeaf || L || y.isBranch && y.children.length === 0) {
      u.remove(y);
      let x = y;
      for (; (x = x.parentNode) !== null && u.has(x); )
        u.remove(x);
    }
  }, C = (u) => {
    if (n.disabled || u.isDisabled)
      return;
    const y = E(c() ? [] : o.selectedNodeIds), L = n.multiple && !n.flat ? s(u) === ft : !y.has(u);
    L ? p(y, u) : D(y, u), y.commit();
    const x = g();
    ce(() => {
      t(L ? "select" : "deselect", u.raw, x);
    }), O.active && L && (c() || n.clearOnSelect) && r(), c() && n.closeOnSelect && (h(), n.searchable && (_ = !0));
  };
  return {
    select: C,
    clear: $,
    removeLastValue: () => {
      if (!v()) return;
      if (c()) return $();
      const u = a(), y = u[u.length - 1];
      if (y == null) return;
      const L = l(y);
      L && C(L);
    },
    resetFlags: w
  };
}
function fo(e) {
  const {
    props: n,
    emit: t,
    forest: o,
    localSearch: l,
    getNode: s,
    getValue: f,
    getInstanceId: i,
    resetSearchQuery: d,
    loadRootOptions: r,
    loadChildrenOptions: h,
    getMenuElement: v,
    toggleClickOutsideEvent: a
  } = e, c = Ne({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), g = (m) => l.active ? m.isExpandedOnSearch || !1 : m.isExpanded || !1, O = (m) => !!(m.isMatched || m.isBranch && m.hasMatchedDescendants && !n.flattenSearchResults || !m.isRootNode && m.parentNode.showAllChildrenOnSearch), _ = (m) => !(l.active && !O(m)), w = H(() => {
    const m = [], F = l.active, z = F && !!n.flattenSearchResults, he = (ve) => {
      for (let X = 0; X < ve.length; X++) {
        const G = ve[X];
        if ((!F || O(G)) && m.push({ type: "option", key: `option-${G.id}`, node: G, level: z ? 0 : G.level }), !G.isBranch || !g(G)) continue;
        const pe = G.childrenStates, ge = z ? 0 : G.level;
        if (!pe || pe.isLoaded) {
          const Oe = G.children || [];
          he(Oe), pe && !Oe.length && m.push({ type: "no-children", key: `no-children-${G.id}`, node: G, level: ge });
        }
        pe?.isLoading && m.push({ type: "loading", key: `loading-${G.id}`, node: G, level: ge }), pe?.loadingError && m.push({ type: "error", key: `error-${G.id}`, node: G, level: ge });
      }
    };
    return he(o.normalizedOptions), m;
  }), E = H(() => {
    const m = [], F = w.value;
    for (let z = 0; z < F.length; z++)
      F[z].type === "option" && m.push(F[z].node.id);
    return m;
  }), $ = H(() => {
    const m = Y();
    return E.value.forEach((F, z) => {
      m[F] = z;
    }), m;
  }), p = () => {
    if (c.current == null) return -1;
    const m = $.value[c.current];
    return m === void 0 ? -1 : m;
  }, D = H(() => E.value.length !== 0);
  let C = null;
  const k = (m) => {
    C = m;
  }, u = (m, F = !0) => {
    const z = c.current;
    if (z != null && z in o.nodeMap && (o.nodeMap[z].isHighlighted = !1), !m) {
      c.current = null;
      return;
    }
    if (c.current = m.id, m.isHighlighted = !0, c.isOpen && F) {
      const he = () => {
        const X = v();
        if (!X) return;
        if (C) return C(m);
        const G = X.querySelector(`.vue-treeselect__option[data-id="${Gt(String(m.id))}"]`);
        G && rt(X, G);
      };
      v() ? he() : ce(he);
    }
  }, y = () => {
    if (!D.value) return;
    const m = E.value[0], F = s(m);
    F && u(F);
  }, L = () => {
    if (!D.value) return;
    const F = p() - 1;
    if (F === -1) return M();
    const z = s(E.value[F]);
    z && u(z);
  }, x = () => {
    if (!D.value) return;
    const F = p() + 1;
    if (F === E.value.length) return y();
    const z = s(E.value[F]);
    z && u(z);
  }, M = () => {
    if (!D.value) return;
    const m = E.value, F = s(m[m.length - 1]);
    F && u(F);
  }, R = (m = !1) => {
    const { current: F } = c;
    (m || F == null || !(F in o.nodeMap) || !_(s(F))) && y();
  }, B = () => {
    const m = v();
    m && (c.lastScrollPosition = m.scrollTop);
  }, P = () => {
    const m = v();
    m && (m.scrollTop = c.lastScrollPosition);
  }, U = () => {
    !c.isOpen || !n.disabled && n.alwaysOpen || (B(), c.isOpen = !1, a(!1), d(), t("close", f(), i()));
  }, T = () => {
    n.disabled || c.isOpen || (c.isOpen = !0, ce(R), ce(P), !n.options && !n.async && r(), a(!0), t("open", i()));
  };
  return {
    menu: c,
    setScrollToOptionHandler: k,
    shouldOptionBeIncludedInSearchResult: O,
    menuRows: w,
    visibleOptionIds: E,
    hasVisibleOptions: D,
    shouldExpand: g,
    shouldShowOptionInMenu: _,
    openMenu: T,
    closeMenu: U,
    toggleMenu: () => {
      c.isOpen ? U() : T();
    },
    toggleExpanded: (m) => {
      let F;
      l.active ? (F = m.isExpandedOnSearch = !m.isExpandedOnSearch, F && (m.showAllChildrenOnSearch = !0)) : F = m.isExpanded = !m.isExpanded, F && m.childrenStates && !m.childrenStates.isLoaded && h(m);
    },
    setCurrentHighlightedOption: u,
    resetHighlightedOptionWhenNecessary: R,
    highlightFirstOption: y,
    highlightPrevOption: L,
    highlightNextOption: x,
    highlightLastOption: M,
    saveMenuScrollPosition: B,
    restoreMenuScrollPosition: P
  };
}
var st, Pt;
function ho() {
  if (Pt) return st;
  Pt = 1;
  function e(n, t) {
    var o = t.length, l = n.length;
    if (l > o)
      return !1;
    if (l === o)
      return n === t;
    e: for (var s = 0, f = 0; s < l; s++) {
      for (var i = n.charCodeAt(s); f < o; )
        if (t.charCodeAt(f++) === i)
          continue e;
      return !1;
    }
    return !0;
  }
  return st = e, st;
}
var vo = ho();
const po = /* @__PURE__ */ $e(vo);
function go(e, n, t, o) {
  const l = de({
    active: !1,
    noResults: !0,
    countMap: Y()
  });
  return {
    localSearch: l,
    handleLocalSearch: () => {
      const { searchQuery: f } = n, i = () => o(!0);
      if (!f)
        return l.active = !1, i();
      l.active = !0;
      const d = f.trim().toLocaleLowerCase(), r = d.replace(/\s+/g, " ").split(" "), h = !!e.searchNested && r.length > 1, v = e.matchKeys || ["label"], a = !e.disableFuzzyMatching, c = Y();
      let g = !0;
      const O = (E) => {
        if (h) {
          for (let $ = 0; $ < r.length; $++)
            if (E.nestedSearchLabel.indexOf(r[$]) === -1) return !1;
          return !0;
        }
        for (let $ = 0; $ < v.length; $++) {
          const p = E.lowerCased[v[$]];
          if (p != null && (a ? po(d, p) : p.indexOf(d) !== -1))
            return !0;
        }
        return !1;
      }, _ = (E) => {
        const $ = O(E);
        if ($ && (g = !1), E.isBranch) {
          const p = {
            [xe]: 0,
            [me]: 0,
            [Ae]: 0,
            [ye]: 0
          };
          let D = !1;
          const C = E.children || [];
          for (let k = 0; k < C.length; k++) {
            const u = C[k];
            _(u) && (D = !0);
            const y = u.isMatched;
            if (u.isLeaf)
              y && (p[xe]++, p[me]++, p[Ae]++, p[ye]++);
            else {
              const L = c[u.id];
              y && (p[xe]++, p[me]++), p[me] += L[me], p[ye] += L[ye];
            }
          }
          c[E.id] = p, E.isExpandedOnSearch = D, E.hasMatchedDescendants = D, E.showAllChildrenOnSearch = !1;
        }
        return E.isMatched = $, $ || E.isBranch && !!E.isExpandedOnSearch;
      }, w = t();
      for (let E = 0; E < w.length; E++) _(w[E]);
      l.countMap = c, l.noResults = g, i();
    }
  };
}
function it(e) {
  return e.message || String(e);
}
function mo(e, n, t, o, l) {
  const s = Ne(Fe()), f = (r) => {
    const { action: h, args: v, isPending: a, start: c, succeed: g, fail: O, end: _ } = r;
    if (!e.loadOptions || a())
      return;
    c();
    const w = Jn((p, D) => {
      p ? O(p) : g(D), _();
    }), E = t(), $ = e.loadOptions({
      id: E,
      instanceId: E,
      action: h,
      ...v,
      callback: w
    });
    tn($) && $.then(
      // The resolved value is used as the result (e.g. options for ASYNC_SEARCH)
      (p) => w(null, p),
      (p) => w(p || new Error("Failed to load options"))
    ).catch((p) => {
      console.error(p);
    });
  };
  return {
    rootOptionsStates: s,
    callLoadOptionsProp: f,
    loadRootOptions: () => {
      f({
        action: Zn,
        isPending: () => s.isLoading,
        start: () => {
          s.isLoading = !0, s.loadingError = "";
        },
        succeed: () => {
          s.isLoaded = !0, ce(() => {
            o(!0);
          });
        },
        fail: (r) => {
          s.loadingError = it(r);
        },
        end: () => {
          s.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (r) => {
      const { id: h, raw: v } = r;
      f({
        action: eo,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: v
        },
        isPending: () => {
          const a = n(h);
          return a?.childrenStates ? a.childrenStates.isLoading : !1;
        },
        start: () => {
          const a = n(h);
          a?.childrenStates && (a.childrenStates.isLoading = !0, a.childrenStates.loadingError = "");
        },
        succeed: () => {
          const a = n(h);
          a?.childrenStates && (a.childrenStates.isLoaded = !0), l();
        },
        fail: (a) => {
          const c = n(h);
          c?.childrenStates && (c.childrenStates.loadingError = it(a));
        },
        end: () => {
          const a = n(h);
          a?.childrenStates && (a.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const _o = () => de({
  ...Fe(),
  options: []
}), yo = Object.freeze({
  ...Fe(),
  options: []
});
function So(e, n, t, o, l) {
  const s = de(Y()), f = () => s[n.searchQuery] || yo, i = (r) => {
    let h = s[r];
    return h || (h = _o(), s[r] = h), r === "" && (Array.isArray(e.defaultOptions) ? (h.options = e.defaultOptions, h.isLoaded = !0) : e.defaultOptions !== !0 && (h.isLoaded = !0)), h;
  };
  return {
    remoteSearch: s,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: r } = n, h = i(r), v = () => {
        o(), l(!0);
      };
      if ((r === "" || e.cacheOptions) && h.isLoaded)
        return v();
      t({
        action: to,
        args: { searchQuery: r },
        isPending: () => h.isLoading,
        start: () => {
          h.isLoading = !0, h.isLoaded = !1, h.loadingError = "";
        },
        succeed: (a) => {
          h.isLoaded = !0, h.options = Array.isArray(a) ? a : [], n.searchQuery === r && v();
        },
        fail: (a) => {
          h.loadingError = it(a);
        },
        end: () => {
          h.isLoading = !1;
        }
      });
    }
  };
}
function bo(e) {
  _e(
    () => e.async ? !!e.searchable : !0,
    () => 'For async search mode, the value of "searchable" prop must be true.'
  ), e.options == null && !e.loadOptions && _e(
    () => !1,
    () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
  ), e.flat && _e(
    () => !!e.multiple,
    () => 'You are using flat mode. But you forgot to add "multiple=true"?'
  ), e.flat || [
    "autoSelectAncestors",
    "autoSelectDescendants",
    "autoDeselectAncestors",
    "autoDeselectDescendants"
  ].forEach((t) => {
    _e(
      () => !e[t],
      () => `"${t}" only applies to flat mode.`
    );
  });
}
function Oo(e, n, t) {
  const {
    getInstanceId: o,
    getMenuElement: l,
    getControlElement: s,
    toggleClickOutsideEvent: f,
    focusInput: i
  } = t;
  bo(e);
  const d = Ne({
    isFocused: !1,
    searchQuery: ""
  }), r = () => {
    d.searchQuery = "";
  }, h = (I) => ({
    ...I,
    ...e.normalizer ? e.normalizer(I, o()) : {}
  }), v = () => e.modelValue == null ? [] : e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : [e.modelValue], a = () => {
    const I = v();
    return e.valueFormat === "id" ? I.slice() : I.map((Q) => h(Q).id);
  }, c = H(() => {
    const I = Y();
    return e.valueFormat === "id" || v().forEach((Q) => {
      if (!Q) return;
      const ae = h(Q).id;
      ae in I || (I[ae] = Q);
    }), I;
  }), g = (I) => c.value[I] || { id: I }, O = so(e, a()), { forest: _, isSelected: w, getCheckedState: E, buildForestState: $, setSelectedNodeIds: p } = O, D = (I) => {
    const Q = g(I), ae = h(Q).label || `${I} (unknown)`, ht = de({
      id: I,
      label: ae,
      level: 0,
      ancestors: [],
      index: [-1],
      parentNode: at,
      lowerCased: {},
      nestedSearchLabel: "",
      isFallbackNode: !0,
      isRootNode: !0,
      isLeaf: !0,
      isBranch: !1,
      isDisabled: !1,
      isNew: !1,
      isMatched: !1,
      isHighlighted: !1,
      raw: Q
    });
    return _.nodeMap[I] = ht, ht;
  }, C = (I) => {
    if (I == null)
      return _e(() => !1, () => `Invalid node id: ${I}`), null;
    const { nodeMap: Q } = _;
    return I in Q ? Q[I] : D(I);
  };
  let k = () => {
  };
  const y = mo(
    e,
    C,
    o,
    (I) => k(I),
    () => {
      (e.async || !pn(e.options)) && X();
    }
  ), { rootOptionsStates: L, loadRootOptions: x, loadChildrenOptions: M, callLoadOptionsProp: R } = y, { normalize: B } = ao(e, _, o, M), P = co(e, _, C, w, lt), { selectedNodes: U, single: T, internalValue: N, hasValue: A, getValue: m, computeSelectedNodeIds: F } = P, z = (I, Q = !1) => {
    const ae = F(I);
    Q ? (ke(_.selectedNodeIds, ae) && (_.selectedNodeIds = ae), $()) : ke(_.selectedNodeIds, ae) && p(ae);
  }, he = (I) => {
    _.selectedNodeIds.forEach((Q) => {
      const ae = I[Q];
      ae && (_.nodeMap[Q] = de({
        ...ae,
        isFallbackNode: !0
      }));
    });
  };
  let ve;
  const X = () => {
    const I = e.async ? ve().options : e.options;
    if (Array.isArray(I)) {
      const Q = _.nodeMap;
      _.nodeMap = Y(), he(Q), _.normalizedOptions = B(at, I, Q), z(N.value, !0);
    } else
      _.normalizedOptions = [];
  }, G = So(
    e,
    d,
    R,
    X,
    (I) => k(I)
  );
  ve = G.getRemoteSearchEntry;
  const { handleRemoteSearch: pe } = G, ge = go(
    e,
    d,
    () => _.normalizedOptions,
    (I) => k(I)
  ), { handleLocalSearch: Oe } = ge, W = fo({
    props: e,
    emit: n,
    forest: _,
    localSearch: ge.localSearch,
    getNode: C,
    getValue: m,
    getInstanceId: o,
    resetSearchQuery: r,
    loadRootOptions: x,
    loadChildrenOptions: M,
    getMenuElement: l,
    toggleClickOutsideEvent: f
  });
  k = W.resetHighlightedOptionWhenNecessary;
  const we = uo({
    props: e,
    emit: n,
    forest: _,
    getNode: C,
    getCheckedState: E,
    setSelectedNodeIds: p,
    traverseDescendantsBFS: lt,
    traverseDescendantsDFS: Be,
    resetSearchQuery: r,
    closeMenu: W.closeMenu,
    hasValue: () => A.value,
    internalValue: () => N.value,
    single: () => T.value,
    getInstanceId: o,
    localSearch: ge.localSearch
  }), un = H(() => typeof e.showCountOnSearch == "boolean" ? e.showCountOnSearch : !!e.showCount), dn = H(() => _.normalizedOptions.some((I) => I.isBranch)), fn = H(() => ge.localSearch.active && !!e.flattenSearchResults);
  return ne(() => e.alwaysOpen, (I) => {
    I ? W.openMenu() : W.closeMenu();
  }), ne(() => e.disabled, (I) => {
    I && W.menu.isOpen ? W.closeMenu() : !I && !W.menu.isOpen && e.alwaysOpen && W.openMenu();
  }), ne(
    [
      () => e.branchNodesFirst,
      () => e.flat,
      // Compare by content: inline arrays in templates are recreated on every render
      () => (e.matchKeys || []).join("\0"),
      () => e.searchNested
    ],
    () => X()
  ), ne(N, (I, Q) => {
    ke(I, Q) && n("update:modelValue", m(), o());
  }), ne([() => e.multiple, () => e.disableBranchNodes], () => {
    $();
  }), ne(() => e.options, () => {
    e.async || (X(), L.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), ne(() => d.searchQuery, () => {
    e.async ? pe() : Oe(), n("search-change", d.searchQuery, o());
  }), ne(() => e.modelValue, () => {
    const I = a();
    ke(I, N.value) && z(I);
  }), Ce(() => {
    e.autoFocus && i(), !e.options && !e.async && e.autoLoadRootOptions && x(), e.alwaysOpen && W.openMenu(), e.async && e.defaultOptions && pe();
  }), vn(() => {
    f(!1);
  }), {
    // State
    forest: _,
    trigger: d,
    menu: W.menu,
    localSearch: ge.localSearch,
    remoteSearch: G.remoteSearch,
    rootOptionsStates: L,
    // Computed
    selectedNodes: U,
    single: T,
    internalValue: N,
    hasValue: A,
    menuRows: W.menuRows,
    visibleOptionIds: W.visibleOptionIds,
    hasVisibleOptions: W.hasVisibleOptions,
    showCountOnSearchComputed: un,
    hasBranchNodes: dn,
    shouldFlattenOptions: fn,
    // Node methods
    getNode: C,
    isSelected: w,
    getCheckedState: E,
    // Traversal
    traverseDescendantsBFS: lt,
    traverseDescendantsDFS: Be,
    traverseAllNodesDFS: (I) => oo(_.normalizedOptions, I),
    traverseAllNodesByIndex: (I) => lo(_.normalizedOptions, I),
    // Value
    getValue: m,
    extractCheckedNodeIdsFromValue: a,
    extractNodeFromValue: g,
    fixSelectedNodeIds: z,
    // Selection
    select: we.select,
    clear: we.clear,
    removeLastValue: we.removeLastValue,
    // Menu
    openMenu: W.openMenu,
    closeMenu: W.closeMenu,
    toggleMenu: W.toggleMenu,
    toggleExpanded: W.toggleExpanded,
    shouldExpand: W.shouldExpand,
    shouldShowOptionInMenu: W.shouldShowOptionInMenu,
    setScrollToOptionHandler: W.setScrollToOptionHandler,
    // Highlighting
    setCurrentHighlightedOption: W.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: W.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: W.highlightFirstOption,
    highlightPrevOption: W.highlightPrevOption,
    highlightNextOption: W.highlightNextOption,
    highlightLastOption: W.highlightLastOption,
    // Search
    handleLocalSearch: Oe,
    handleRemoteSearch: pe,
    getRemoteSearchEntry: G.getRemoteSearchEntry,
    resetSearchQuery: r,
    // Async
    loadRootOptions: x,
    loadChildrenOptions: M,
    // Helpers
    initialize: X,
    buildForestState: $,
    resetFlags: we.resetFlags,
    // DOM helpers
    getMenu: l,
    getControl: s,
    getInstanceId: o
  };
}
const sn = /* @__PURE__ */ Symbol("vue-treeselect");
function fe() {
  const e = gn(sn, null);
  if (!e)
    throw new Error("[Vue-Treeselect] This component must be used inside <Treeselect>.");
  return e;
}
const Eo = ["name", "value"], xo = /* @__PURE__ */ ue({
  __name: "HiddenFields",
  setup(e) {
    const n = fe(), t = n.props;
    function o(s) {
      return typeof s == "string" ? s : s != null && !Un(s) ? JSON.stringify(s) : "";
    }
    const l = H(() => {
      if (!t.name || t.disabled || !n.hasValue.value)
        return [];
      let s = n.internalValue.value.map(o);
      return t.multiple && t.joinValues && (s = [s.join(t.delimiter)]), s;
    });
    return (s, f) => (b(!0), V(se, null, Te(l.value, (i, d) => (b(), V("input", {
      key: `hidden-field-${d}`,
      type: "hidden",
      name: S(n).props.name,
      value: i
    }, null, 8, Eo))), 128));
  }
}), be = (e) => e.renderSlot(e.scope);
be.props = ["renderSlot", "scope"];
const No = {
  key: 0,
  class: "vue-treeselect__input-container"
}, To = ["tabindex", "required", "value"], Co = ["tabindex"], ct = /* @__PURE__ */ ue({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = fe(), o = t.props, l = J(null), s = J(), f = J($t), i = J(t.trigger.searchQuery);
    let d = !1;
    ne(l, (M, R) => {
      M ? t.setInputElement(M) : R && t.getInput() === R && t.setInputElement(null);
    }, { flush: "sync" });
    const r = H(() => o.searchable), h = H(() => o.disabled), v = H(() => r.value && !h.value && o.multiple), a = H(() => ({
      width: v.value ? `${f.value}px` : void 0
    })), c = [
      Z.ENTER,
      Z.END,
      Z.HOME,
      Z.ARROW_LEFT,
      Z.ARROW_UP,
      Z.ARROW_RIGHT,
      Z.ARROW_DOWN
    ], g = () => {
      s.value && (f.value = Math.max(
        $t,
        s.value.scrollWidth + 15
      ));
    }, O = () => {
      t.trigger.searchQuery = i.value;
    }, _ = () => {
      i.value = "", D.cancel(), O();
    }, w = () => {
      !h.value && l.value && l.value.focus();
    }, E = () => {
      l.value?.blur();
    }, $ = () => {
      t.trigger.isFocused = !0, o.openOnFocus && t.openMenu();
    }, p = () => {
      const M = t.getMenu();
      if (M && document.activeElement === M)
        return w();
      t.trigger.isFocused = !1, t.closeMenu();
    }, D = Fn(
      O,
      o.searchDebounceDelay ?? no,
      { leading: !0, trailing: !0 }
    ), C = () => {
      i.value ? D() : (D.cancel(), O());
    }, k = (M) => {
      i.value = M.target.value, !d && C();
    }, u = () => {
      d = !0;
    }, y = (M) => {
      d = !1, i.value = M.target.value, C();
    }, L = (M) => {
      const R = M.key;
      if (!(M.ctrlKey || M.shiftKey || M.altKey || M.metaKey || d)) {
        if (!t.menu.isOpen && c.includes(R))
          return M.preventDefault(), t.openMenu();
        switch (R) {
          case Z.BACKSPACE: {
            o.backspaceRemoves && !i.value.length && t.removeLastValue();
            break;
          }
          case Z.ENTER: {
            if (M.preventDefault(), t.menu.current === null) return;
            const B = t.getNode(t.menu.current);
            if (!B || !t.shouldShowOptionInMenu(B) || B.isBranch && o.disableBranchNodes) return;
            t.select(B);
            break;
          }
          case Z.ESCAPE: {
            i.value.length ? _() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case Z.END: {
            M.preventDefault(), t.highlightLastOption();
            break;
          }
          case Z.HOME: {
            M.preventDefault(), t.highlightFirstOption();
            break;
          }
          case Z.ARROW_LEFT: {
            const B = t.menu.current;
            if (B === null) break;
            const P = t.getNode(B);
            P && (P.isBranch && t.shouldExpand(P) ? (M.preventDefault(), t.toggleExpanded(P)) : !P.isRootNode && P.parentNode && (M.preventDefault(), t.setCurrentHighlightedOption(P.parentNode)));
            break;
          }
          case Z.ARROW_UP: {
            M.preventDefault(), t.highlightPrevOption();
            break;
          }
          case Z.ARROW_RIGHT: {
            const B = t.menu.current;
            if (B === null) break;
            const P = t.getNode(B);
            P && P.isBranch && !t.shouldExpand(P) && (M.preventDefault(), t.toggleExpanded(P));
            break;
          }
          case Z.ARROW_DOWN: {
            M.preventDefault(), t.highlightNextOption();
            break;
          }
          case Z.DELETE: {
            o.deleteRemoves && !i.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, x = (M) => {
      i.value.length && M.stopPropagation();
    };
    return ne(() => t.trigger.searchQuery, (M) => {
      i.value = M;
    }), ne(i, () => {
      v.value && ce(g);
    }), Re(() => {
      D.cancel(), l.value && t.getInput() === l.value && t.setInputElement(null);
    }), n({
      clear: _,
      focus: w,
      blur: E
    }), (M, R) => r.value ? (b(), V("div", No, [
      h.value ? re("", !0) : (b(), V(se, { key: 0 }, [
        K("input", {
          ref_key: "inputRef",
          ref: l,
          class: "vue-treeselect__input",
          type: "text",
          autocomplete: "off",
          tabindex: S(o).tabIndex,
          required: S(o).required && !S(t).hasValue.value,
          value: i.value,
          style: Se(a.value),
          onFocus: $,
          onInput: k,
          onCompositionstart: u,
          onCompositionend: y,
          onBlur: p,
          onKeydown: L,
          onMousedown: x
        }, null, 44, To),
        v.value ? (b(), V("div", {
          key: 0,
          ref_key: "sizerRef",
          ref: s,
          class: "vue-treeselect__sizer"
        }, j(i.value), 513)) : re("", !0)
      ], 64))
    ])) : (b(), V("div", {
      key: 1,
      ref_key: "inputRef",
      ref: l,
      class: "vue-treeselect__input-container",
      tabindex: h.value ? void 0 : S(o).tabIndex,
      onFocus: $,
      onBlur: p,
      onKeydown: L
    }, null, 40, Co));
  }
}), ut = /* @__PURE__ */ ue({
  __name: "Placeholder",
  setup(e) {
    const n = fe(), t = H(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || !!n.trigger.searchQuery
    }));
    return (o, l) => (b(), V("div", {
      class: oe(t.value)
    }, j(S(n).props.placeholder), 3));
  }
}), Ro = {
  key: 0,
  class: "vue-treeselect__single-value"
}, wo = /* @__PURE__ */ ue({
  __name: "SingleValue",
  setup(e) {
    const n = fe(), t = H(() => n.hasValue.value && !n.trigger.searchQuery), o = H(() => n.selectedNodes.value[0]);
    return (l, s) => (b(), V(se, null, [
      t.value ? (b(), V("div", Ro, [
        S(n).slots["value-label"] ? (b(), q(S(be), {
          key: 0,
          "render-slot": S(n).slots["value-label"],
          scope: { node: o.value }
        }, null, 8, ["render-slot", "scope"])) : (b(), V(se, { key: 1 }, [
          ee(j(o.value.label), 1)
        ], 64))
      ])) : re("", !0),
      ie(ut),
      ie(ct)
    ], 64));
  }
}), Mo = {
  name: "vue-treeselect--x"
}, rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, Io = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function ko(e, n, t, o, l, s) {
  return b(), V("svg", Io, [...n[0] || (n[0] = [
    K("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const an = /* @__PURE__ */ rn(Mo, [["render", ko]]), Lo = { class: "vue-treeselect__multi-value-item-container" }, Do = { class: "vue-treeselect__multi-value-label" }, Ao = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, qt = /* @__PURE__ */ ue({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = fe(), o = H(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), l = De(function() {
      t.select(n.node);
    });
    return (s, f) => (b(), V("div", Lo, [
      K("div", {
        class: oe(o.value),
        onMousedown: f[0] || (f[0] = //@ts-ignore
        (...i) => S(l) && S(l)(...i))
      }, [
        K("span", Do, [
          S(t).slots["value-label"] ? (b(), q(S(be), {
            key: 0,
            "render-slot": S(t).slots["value-label"],
            scope: { node: e.node }
          }, null, 8, ["render-slot", "scope"])) : (b(), V(se, { key: 1 }, [
            ee(j(e.node.label), 1)
          ], 64))
        ]),
        K("span", Ao, [
          ie(an)
        ])
      ], 34)
    ]));
  }
}), Bo = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, $o = { class: "vue-treeselect__limit-tip-text" }, Fo = {
  key: 1,
  class: "vue-treeselect__multi-value"
}, Vo = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Ho = { class: "vue-treeselect__limit-tip-text" }, zo = 50, Po = /* @__PURE__ */ ue({
  __name: "MultiValue",
  setup(e) {
    const n = fe(), t = n.props, o = H(() => n.internalValue.value.slice(0, t.limit).map((i) => n.getNode(i)).filter((i) => i !== null)), l = J(!0);
    mn(() => {
      n.trigger.isFocused || (l.value = o.value.length <= zo);
    });
    const s = H(() => n.internalValue.value.length > (t.limit ?? 1 / 0)), f = H(() => {
      const i = n.internalValue.value.length - (t.limit ?? 1 / 0);
      return t.limitText ? t.limitText(i) : "";
    });
    return (i, d) => l.value ? (b(), q(_n, {
      key: 0,
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: te(() => [
        (b(!0), V(se, null, Te(o.value, (r) => (b(), q(qt, {
          key: `multi-value-item-${r.id}`,
          node: r
        }, null, 8, ["node"]))), 128)),
        s.value ? (b(), V("div", Bo, [
          K("span", $o, j(f.value), 1)
        ])) : re("", !0),
        ie(ut, { key: "placeholder" }),
        ie(ct, { key: "input" })
      ]),
      _: 1
    })) : (b(), V("div", Fo, [
      (b(!0), V(se, null, Te(o.value, (r) => (b(), q(qt, {
        key: `multi-value-item-${r.id}`,
        node: r
      }, null, 8, ["node"]))), 128)),
      s.value ? (b(), V("div", Vo, [
        K("span", Ho, j(f.value), 1)
      ])) : re("", !0),
      ie(ut, { key: "placeholder" }),
      ie(ct, { key: "input" })
    ]));
  }
}), qo = {
  name: "vue-treeselect--arrow"
}, Wo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function jo(e, n, t, o, l, s) {
  return b(), V("svg", Wo, [...n[0] || (n[0] = [
    K("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const Uo = /* @__PURE__ */ rn(qo, [["render", jo]]), Go = ["title"], Ko = /* @__PURE__ */ ue({
  __name: "Control",
  setup(e) {
    const n = fe(), t = n.props, o = J(), l = J();
    Ce(() => {
      n.setControlElement(o.value || null), n.setValueContainerElement(l.value || null);
    });
    let s = !1;
    Re(() => {
      s = !0, n.setControlElement(null), n.setValueContainerElement(null);
    });
    const f = H(() => n.hasValue.value && n.internalValue.value.some((c) => {
      const g = n.getNode(c);
      return g && !g.isDisabled;
    })), i = H(() => t.clearable && !t.disabled && n.hasValue.value && (f.value || t.allowClearingDisabled)), d = H(() => t.alwaysOpen ? !n.menu.isOpen : !0), r = H(() => t.multiple ? t.clearAllText : t.clearValueText), h = H(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.isOpen
    })), v = De(function(c) {
      c.stopPropagation(), c.preventDefault();
      const g = t.beforeClearAll ? t.beforeClearAll() : !0, O = (_) => {
        _ && !s && n.clear();
      };
      tn(g) ? g.then(O) : setTimeout(() => O(g), 0);
    }), a = De(function(c) {
      c.preventDefault(), c.stopPropagation(), n.focusInput(), n.toggleMenu();
    });
    return (c, g) => (b(), V("div", {
      ref_key: "controlRef",
      ref: o,
      class: "vue-treeselect__control",
      onMousedown: g[2] || (g[2] = //@ts-ignore
      (...O) => S(n).handleMouseDown && S(n).handleMouseDown(...O))
    }, [
      K("div", {
        ref_key: "valueContainerRef",
        ref: l,
        class: "vue-treeselect__value-container"
      }, [
        S(n).single.value ? (b(), q(wo, { key: 0 })) : (b(), q(Po, { key: 1 }))
      ], 512),
      i.value ? (b(), V("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: r.value,
        onMousedown: g[0] || (g[0] = //@ts-ignore
        (...O) => S(v) && S(v)(...O))
      }, [
        ie(an, { class: "vue-treeselect__x" })
      ], 40, Go)) : re("", !0),
      d.value ? (b(), V("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: g[1] || (g[1] = //@ts-ignore
        (...O) => S(a) && S(a)(...O))
      }, [
        ie(Uo, {
          class: oe(h.value)
        }, null, 8, ["class"])
      ], 32)) : re("", !0)
    ], 544));
  }
}), Qo = { class: "vue-treeselect__icon-container" }, le = /* @__PURE__ */ ue({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (b(), V("div", {
      class: oe(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      K("div", Qo, [
        K("span", {
          class: oe(`vue-treeselect__icon-${e.icon}`)
        }, null, 2)
      ]),
      K("span", {
        class: oe(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
      }, [
        yn(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Yo = ["data-id"], Xo = {
  key: 0,
  class: "vue-treeselect__option-arrow-container"
}, Jo = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Zo = { class: "vue-treeselect__label-container" }, el = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, tl = {
  key: 2,
  class: "vue-treeselect__label"
}, nl = {
  key: 0,
  class: "vue-treeselect__count"
}, Wt = /* @__PURE__ */ ue({
  name: "vue-treeselect--option",
  __name: "Option",
  props: {
    node: {},
    level: {}
  },
  setup(e) {
    const n = e, t = fe(), o = t.props, l = () => {
      const i = t.getCheckedState(n.node);
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": i === on,
        "vue-treeselect__checkbox--indeterminate": i === nn,
        "vue-treeselect__checkbox--unchecked": i === ft,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }, s = () => n.node.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed.value : !!o.showCount), f = () => {
      if (!s()) return NaN;
      const { node: i } = n, d = o.showCountOf || "ALL_CHILDREN";
      if (t.localSearch.active) {
        const r = t.localSearch.countMap[i.id];
        return r ? r[d] : 0;
      }
      return i.count ? i.count[d] : 0;
    };
    return (i, d) => (b(), V("div", {
      class: oe(`vue-treeselect__list-item vue-treeselect__indent-level-${e.level}`)
    }, [
      K("div", {
        class: oe({
          "vue-treeselect__option": !0,
          "vue-treeselect__option--disabled": e.node.isDisabled,
          "vue-treeselect__option--selected": S(t).isSelected(e.node),
          "vue-treeselect__option--highlight": e.node.isHighlighted,
          "vue-treeselect__option--matched": S(t).localSearch.active && e.node.isMatched
        }),
        "data-id": e.node.id
      }, [
        e.node.isBranch && !S(t).shouldFlattenOptions.value ? (b(), V("div", Xo, [
          (b(), V("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 292.362 292.362",
            class: oe({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": S(t).shouldExpand(e.node)
            })
          }, [...d[0] || (d[0] = [
            K("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
          ])], 2))
        ])) : S(t).hasBranchNodes.value && !S(t).shouldFlattenOptions.value ? (b(), V("div", Jo, "   ")) : re("", !0),
        K("div", Zo, [
          !S(t).single.value && !(S(o).disableBranchNodes && e.node.isBranch) ? (b(), V("div", el, [
            K("span", {
              class: oe(l())
            }, [...d[1] || (d[1] = [
              K("span", { class: "vue-treeselect__check-mark" }, null, -1),
              K("span", { class: "vue-treeselect__minus-mark" }, null, -1)
            ])], 2)
          ])) : re("", !0),
          S(t).slots["option-label"] ? (b(), q(S(be), {
            key: 1,
            "render-slot": S(t).slots["option-label"],
            scope: {
              node: e.node,
              shouldShowCount: s(),
              count: f(),
              labelClassName: "vue-treeselect__label",
              countClassName: "vue-treeselect__count"
            }
          }, null, 8, ["render-slot", "scope"])) : (b(), V("label", tl, [
            ee(j(e.node.label) + " ", 1),
            s() ? (b(), V("span", nl, "(" + j(f()) + ")", 1)) : re("", !0)
          ]))
        ])
      ], 10, Yo)
    ], 2));
  }
}), ol = ["title", "data-id"], ll = ["title", "data-id"], jt = 8, sl = 32, rl = 3, al = 100, il = 25, cl = 1e3, Ut = /* @__PURE__ */ ue({
  __name: "OptionList",
  props: {
    virtual: { type: Boolean }
  },
  setup(e, { expose: n }) {
    const t = e, o = fe(), l = o.props, s = J(null), f = J(0), i = J(0), d = J(null), r = o.menuRows, h = H(() => l.optionHeight || d.value || sl), v = () => Math.max(al, Math.ceil((l.maxHeight || 300) / 20) * rl), a = J(t.virtual ? 1 / 0 : v());
    let c = 200, g = null, O = !1;
    const _ = () => a.value >= r.value.length, w = () => {
      g || O || _() || (g = setTimeout(E, 0));
    };
    async function E() {
      if (g = null, O || _()) return;
      const T = performance.now();
      a.value = Math.min(r.value.length, a.value + c), await ce();
      const N = Math.max(1, performance.now() - T);
      c = Math.min(2e3, Math.max(50, Math.round(c * il / N))), w();
    }
    const $ = (T) => {
      T < a.value || (a.value = Math.min(r.value.length, T + 1 + c), w());
    };
    t.virtual || ne(r, (T, N) => {
      const A = a.value >= N.length, m = T.length - N.length;
      A && m <= Math.max(cl, N.length) ? a.value = T.length : a.value = Math.max(v(), Math.min(a.value, N.length)), w();
    });
    const p = H(() => {
      const T = r.value.length;
      if (!t.virtual) return { start: 0, end: Math.min(T, a.value) };
      const N = h.value, A = o.getMenu()?.clientHeight || l.maxHeight || 300, m = Math.max(0, f.value - i.value), F = Math.max(0, Math.min(Math.floor(m / N), T) - jt), z = Math.min(T, Math.ceil((m + A) / N) + jt);
      return { start: F, end: z };
    }), D = H(() => {
      const { start: T, end: N } = p.value;
      return T === 0 && N === r.value.length ? r.value : r.value.slice(T, N);
    }), C = H(() => t.virtual ? 0 : Math.max(0, r.value.length - a.value) * h.value), k = H(() => t.virtual ? { position: "relative", height: `${r.value.length * h.value}px` } : void 0), u = H(() => t.virtual ? { transform: `translateY(${p.value.start * h.value}px)` } : void 0), y = () => {
      const T = s.value;
      if (T && (i.value = T.offsetTop, !l.optionHeight)) {
        const N = T.querySelector(".vue-treeselect__list-item");
        N && N.offsetHeight > 0 && (d.value = N.offsetHeight);
      }
    }, L = () => {
      const T = o.getMenu();
      if (T) {
        if (s.value && (i.value = s.value.offsetTop), t.virtual)
          f.value = T.scrollTop;
        else if (!_()) {
          const N = T.scrollTop + T.clientHeight - i.value;
          $(Math.ceil(N / h.value));
        }
      }
    }, x = (T) => {
      const N = o.getMenu();
      if (!N) return;
      if (!t.virtual) {
        const z = () => s.value?.querySelector(`.vue-treeselect__option[data-id="${Gt(String(T.id))}"]`), he = z();
        if (he) return rt(N, he);
        const ve = r.value.findIndex((X) => X.type === "option" && X.node === T);
        if (ve === -1) return;
        $(ve), ce(() => {
          const X = z();
          X && rt(N, X);
        });
        return;
      }
      const A = r.value.findIndex((z) => z.type === "option" && z.node === T);
      if (A === -1) return;
      const m = h.value, F = i.value + A * m;
      F < N.scrollTop ? N.scrollTop = F : F + m > N.scrollTop + N.clientHeight && (N.scrollTop = F + m - N.clientHeight), f.value = N.scrollTop;
    };
    Ce(() => {
      o.setScrollToOptionHandler(x), L(), ce(y), w();
    }), Re(() => {
      O = !0, g && clearTimeout(g), o.setScrollToOptionHandler(null);
    });
    const M = (T) => {
      const N = T?.getAttribute("data-id");
      return N == null ? null : o.forest.nodeMap[N] || null;
    }, R = (T) => {
      if (T.button !== 0) return;
      const N = T.target, A = N.closest(".vue-treeselect__retry");
      if (A) {
        const z = M(A);
        z && o.loadChildrenOptions(z);
        return;
      }
      const m = N.closest(".vue-treeselect__option"), F = M(m);
      F && (N.closest(".vue-treeselect__option-arrow-container") ? o.toggleExpanded(F) : N.closest(".vue-treeselect__label-container") && (F.isBranch && l.disableBranchNodes ? o.toggleExpanded(F) : o.select(F)));
    };
    let B = null;
    const P = (T) => {
      const N = T.target.closest(".vue-treeselect__option");
      if (!N) {
        B = null;
        return;
      }
      if (N === B) return;
      B = N;
      const A = M(N);
      A && o.setCurrentHighlightedOption(A, !1);
    }, U = () => {
      B = null;
    };
    return n({
      handleScroll: L
    }), (T, N) => (b(), V("div", {
      ref_key: "listRef",
      ref: s,
      class: oe(e.virtual ? "vue-treeselect__list vue-treeselect__list--virtual" : "vue-treeselect__list"),
      style: Se(k.value),
      onMousedown: R,
      onMouseover: P,
      onMouseleave: U
    }, [
      e.virtual ? (b(), V("div", {
        key: 0,
        style: Se(u.value)
      }, [
        (b(!0), V(se, null, Te(D.value, (A) => (b(), V(se, {
          key: A.key
        }, [
          A.type === "option" ? (b(), q(Wt, {
            key: 0,
            node: A.node,
            level: A.level
          }, null, 8, ["node", "level"])) : (b(), V("div", {
            key: 1,
            class: oe(`vue-treeselect__list-item vue-treeselect__indent-level-${A.level}`)
          }, [
            A.type === "no-children" ? (b(), q(le, {
              key: 0,
              type: "no-children",
              icon: "warning"
            }, {
              default: te(() => [
                ee(j(S(l).noChildrenText), 1)
              ]),
              _: 1
            })) : A.type === "loading" ? (b(), q(le, {
              key: 1,
              type: "loading",
              icon: "loader"
            }, {
              default: te(() => [
                ee(j(S(l).loadingText), 1)
              ]),
              _: 1
            })) : (b(), q(le, {
              key: 2,
              type: "error",
              icon: "error"
            }, {
              default: te(() => [
                ee(j(A.node.childrenStates.loadingError) + " ", 1),
                K("a", {
                  class: "vue-treeselect__retry",
                  title: S(l).retryTitle,
                  "data-id": A.node.id
                }, j(S(l).retryText), 9, ol)
              ]),
              _: 2
            }, 1024))
          ], 2))
        ], 64))), 128))
      ], 4)) : (b(), V(se, { key: 1 }, [
        (b(!0), V(se, null, Te(D.value, (A) => (b(), V(se, {
          key: A.key
        }, [
          A.type === "option" ? (b(), q(Wt, {
            key: 0,
            node: A.node,
            level: A.level
          }, null, 8, ["node", "level"])) : (b(), V("div", {
            key: 1,
            class: oe(`vue-treeselect__list-item vue-treeselect__indent-level-${A.level}`)
          }, [
            A.type === "no-children" ? (b(), q(le, {
              key: 0,
              type: "no-children",
              icon: "warning"
            }, {
              default: te(() => [
                ee(j(S(l).noChildrenText), 1)
              ]),
              _: 1
            })) : A.type === "loading" ? (b(), q(le, {
              key: 1,
              type: "loading",
              icon: "loader"
            }, {
              default: te(() => [
                ee(j(S(l).loadingText), 1)
              ]),
              _: 1
            })) : (b(), q(le, {
              key: 2,
              type: "error",
              icon: "error"
            }, {
              default: te(() => [
                ee(j(A.node.childrenStates.loadingError) + " ", 1),
                K("a", {
                  class: "vue-treeselect__retry",
                  title: S(l).retryTitle,
                  "data-id": A.node.id
                }, j(S(l).retryText), 9, ll)
              ]),
              _: 2
            }, 1024))
          ], 2))
        ], 64))), 128)),
        C.value ? (b(), V("div", {
          key: 0,
          style: Se({ height: `${C.value}px` })
        }, null, 4)) : re("", !0)
      ], 64))
    ], 38));
  }
}), ul = ["title"], dl = ["title"], cn = /* @__PURE__ */ ue({
  __name: "Menu",
  setup(e, { expose: n }) {
    const t = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, o = fe(), l = o.props, s = J(null), f = J(null), i = J(null);
    ne(s, (u, y) => {
      u ? o.setMenuElement(u) : y && o.getMenu() === y && o.setMenuElement(null);
    }, { flush: "sync" });
    const d = () => {
      i.value?.handleScroll();
    };
    let r = null, h = null;
    const v = H(() => ({
      maxHeight: l.maxHeight + "px"
    })), a = H(() => ({
      zIndex: l.appendToBody ? void 0 : l.zIndex
    })), c = H(() => o.rootOptionsStates.isLoaded && o.forest.normalizedOptions.length === 0), g = H(() => o.getRemoteSearchEntry()), O = H(() => o.trigger.searchQuery === "" && !l.defaultOptions), _ = H(() => {
      if (O.value) return !1;
      const u = g.value;
      return u.isLoaded && u.options.length === 0;
    }), w = () => {
      if (!o.menu.isOpen) return;
      const u = o.getMenu(), y = o.getControl();
      if (!u || !y) return;
      const L = u.getBoundingClientRect(), x = y.getBoundingClientRect(), M = L.height, R = window.innerHeight, B = x.top, P = window.innerHeight - x.bottom, U = x.top >= 0 && x.top <= R || x.top < 0 && x.bottom > 0, T = P > M + Ft, N = B > M + Ft;
      U ? l.openDirection && l.openDirection !== "auto" ? o.menu.placement = t[l.openDirection] : T || !N ? o.menu.placement = "bottom" : o.menu.placement = "top" : o.closeMenu();
    }, E = () => {
      const u = o.getMenu();
      r || !u || (r = {
        remove: Zt(u, w)
      });
    }, $ = () => {
      const u = o.getControl();
      h || !u || (h = {
        remove: en(u, w)
      });
    }, p = () => {
      r && (r.remove(), r = null);
    }, D = () => {
      h && (h.remove(), h = null);
    }, C = () => {
      w(), E(), $();
    }, k = () => {
      p(), D();
    };
    return ne(
      () => o.menu.isOpen,
      (u) => {
        u ? ce(C) : k();
      }
    ), Ce(() => {
      o.menu.isOpen && ce(C);
    }), Re(() => {
      k(), s.value && o.getMenu() === s.value && o.setMenuElement(null);
    }), n({
      menuElement: s,
      menuContainerElement: f
    }), (u, y) => (b(), V("div", {
      ref_key: "menuContainerRef",
      ref: f,
      class: "vue-treeselect__menu-container",
      style: Se(a.value)
    }, [
      ie(Sn, { name: "vue-treeselect__menu--transition" }, {
        default: te(() => [
          S(o).menu.isOpen ? (b(), V("div", {
            key: 0,
            ref_key: "menuRef",
            ref: s,
            class: "vue-treeselect__menu",
            style: Se(v.value),
            onMousedown: y[2] || (y[2] = //@ts-ignore
            (...L) => S(o).handleMouseDown && S(o).handleMouseDown(...L)),
            onScrollPassive: d
          }, [
            S(o).slots["before-list"] ? (b(), q(S(be), {
              key: 0,
              "render-slot": S(o).slots["before-list"]
            }, null, 8, ["render-slot"])) : re("", !0),
            S(l).async ? (b(), V(se, { key: 1 }, [
              O.value ? (b(), q(le, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: te(() => [
                  ee(j(S(l).searchPromptText), 1)
                ]),
                _: 1
              })) : g.value.isLoading ? (b(), q(le, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: te(() => [
                  ee(j(S(l).loadingText), 1)
                ]),
                _: 1
              })) : g.value.loadingError ? (b(), q(le, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: te(() => [
                  ee(j(g.value.loadingError) + " ", 1),
                  K("a", {
                    class: "vue-treeselect__retry",
                    title: S(l).retryTitle,
                    onClick: y[0] || (y[0] = //@ts-ignore
                    (...L) => S(o).handleRemoteSearch && S(o).handleRemoteSearch(...L))
                  }, j(S(l).retryText), 9, ul)
                ]),
                _: 1
              })) : _.value ? (b(), q(le, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: te(() => [
                  ee(j(S(l).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), q(Ut, {
                ref_key: "optionListRef",
                ref: i,
                key: S(l).virtualScroll ? "virtual" : "list",
                virtual: S(l).virtualScroll
              }, null, 8, ["virtual"]))
            ], 64)) : (b(), V(se, { key: 2 }, [
              S(o).rootOptionsStates.isLoading ? (b(), q(le, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: te(() => [
                  ee(j(S(l).loadingText), 1)
                ]),
                _: 1
              })) : S(o).rootOptionsStates.loadingError ? (b(), q(le, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: te(() => [
                  ee(j(S(o).rootOptionsStates.loadingError) + " ", 1),
                  K("a", {
                    class: "vue-treeselect__retry",
                    title: S(l).retryTitle,
                    onClick: y[1] || (y[1] = //@ts-ignore
                    (...L) => S(o).loadRootOptions && S(o).loadRootOptions(...L))
                  }, j(S(l).retryText), 9, dl)
                ]),
                _: 1
              })) : c.value ? (b(), q(le, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: te(() => [
                  ee(j(S(l).noOptionsText), 1)
                ]),
                _: 1
              })) : S(o).localSearch.active && S(o).localSearch.noResults ? (b(), q(le, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: te(() => [
                  ee(j(S(l).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), q(Ut, {
                ref_key: "optionListRef",
                ref: i,
                key: S(l).virtualScroll ? "virtual" : "list",
                virtual: S(l).virtualScroll
              }, null, 8, ["virtual"]))
            ], 64)),
            S(o).slots["after-list"] ? (b(), q(S(be), {
              key: 3,
              "render-slot": S(o).slots["after-list"]
            }, null, 8, ["render-slot"])) : re("", !0)
          ], 36)) : re("", !0)
        ]),
        _: 1
      })
    ], 4));
  }
}), fl = ["data-instance-id"], hl = /* @__PURE__ */ ue({
  __name: "MenuPortal",
  setup(e) {
    const n = fe(), t = n.props, o = J(null), l = J(null);
    let s = null, f = null;
    const i = () => {
      const v = o.value, a = n.getControl();
      !v || !a || (v.style.width = a.getBoundingClientRect().width + "px");
    }, d = () => {
      const v = o.value, a = n.getControl(), c = l.value?.menuContainerElement;
      if (!v || !a || !c) return;
      const g = a.getBoundingClientRect(), O = v.getBoundingClientRect(), _ = n.menu.placement === "bottom" ? g.height : 0, w = Math.round(g.left - O.left) + "px", E = Math.round(g.top - O.top + _) + "px";
      c.style.transform = `translate(${w}, ${E})`;
    }, r = () => {
      i(), d();
      const v = n.getControl();
      v && (s || (s = {
        remove: en(v, d)
      }), f || (f = {
        remove: Zt(v, () => {
          i(), d();
        })
      }));
    }, h = () => {
      s?.remove(), s = null, f?.remove(), f = null;
    };
    return ne(() => n.menu.isOpen, (v) => {
      v ? ce(r) : h();
    }), ne(() => n.menu.placement, d), Ce(() => {
      n.menu.isOpen && ce(r);
    }), Re(h), (v, a) => (b(), q(bn, { to: "body" }, [
      K("div", {
        ref_key: "portalRef",
        ref: o,
        class: oe(["vue-treeselect__portal-target", S(n).wrapperClass.value]),
        style: Se({ zIndex: S(t).zIndex }),
        "data-instance-id": S(n).getInstanceId()
      }, [
        ie(cn, {
          ref_key: "menuRef",
          ref: l
        }, null, 512)
      ], 14, fl)
    ]));
  }
});
let vl = 0;
const gl = /* @__PURE__ */ ue({
  name: "vue-treeselect",
  __name: "Treeselect",
  props: {
    allowClearingDisabled: { type: Boolean, default: !1 },
    allowSelectingDisabledDescendants: { type: Boolean, default: !1 },
    alwaysOpen: { type: Boolean, default: !1 },
    appendToBody: { type: Boolean, default: !1 },
    async: { type: Boolean, default: !1 },
    autoFocus: { type: Boolean, default: !1 },
    autoLoadRootOptions: { type: Boolean, default: !0 },
    autoDeselectAncestors: { type: Boolean, default: !1 },
    autoDeselectDescendants: { type: Boolean, default: !1 },
    autoSelectAncestors: { type: Boolean, default: !1 },
    autoSelectDescendants: { type: Boolean, default: !1 },
    backspaceRemoves: { type: Boolean, default: !0 },
    beforeClearAll: { type: Function, default: () => !0 },
    branchNodesFirst: { type: Boolean, default: !1 },
    cacheOptions: { type: Boolean, default: !0 },
    clearable: { type: Boolean, default: !0 },
    clearAllText: { default: "Clear all" },
    clearOnSelect: { type: Boolean, default: !1 },
    clearValueText: { default: "Clear value" },
    closeOnSelect: { type: Boolean, default: !0 },
    defaultExpandLevel: { default: 0 },
    defaultOptions: { type: [Boolean, Array], default: !1 },
    deleteRemoves: { type: Boolean, default: !0 },
    delimiter: { default: "," },
    flattenSearchResults: { type: Boolean, default: !1 },
    disableBranchNodes: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    disableFuzzyMatching: { type: Boolean, default: !1 },
    flat: { type: Boolean, default: !1 },
    instanceId: { default: void 0 },
    joinValues: { type: Boolean, default: !1 },
    limit: { default: 1 / 0 },
    limitText: { type: Function, default: (e) => `and ${e} more` },
    loadingText: { default: "Loading..." },
    loadOptions: {},
    matchKeys: { default: () => ["label"] },
    maxHeight: { default: 300 },
    multiple: { type: Boolean, default: !1 },
    name: { default: void 0 },
    noChildrenText: { default: "No sub-options." },
    noOptionsText: { default: "No options available." },
    noResultsText: { default: "No results found..." },
    normalizer: { type: Function, default: (e) => e },
    openDirection: { default: "auto" },
    openOnClick: { type: Boolean, default: !0 },
    openOnFocus: { type: Boolean, default: !1 },
    options: { default: void 0 },
    placeholder: { default: "Select..." },
    required: { type: Boolean, default: !1 },
    retryText: { default: "Retry?" },
    retryTitle: { default: "Click to retry" },
    searchable: { type: Boolean, default: !0 },
    searchNested: { type: Boolean, default: !1 },
    searchPromptText: { default: "Type to search..." },
    searchDebounceDelay: { default: void 0 },
    showCount: { type: Boolean, default: !1 },
    showCountOf: { default: "ALL_CHILDREN" },
    showCountOnSearch: { type: [Boolean, null], default: void 0 },
    sortValueBy: { default: "ORDER_SELECTED" },
    tabIndex: { default: 0 },
    modelValue: {},
    valueConsistsOf: { default: "BRANCH_PRIORITY" },
    valueFormat: { default: "id" },
    zIndex: { default: 999 },
    virtualScroll: { type: Boolean, default: !1 },
    optionHeight: { default: void 0 }
  },
  emits: ["update:modelValue", "select", "deselect", "open", "close", "search-change"],
  setup(e, { expose: n, emit: t }) {
    const o = e, l = t, s = On(), f = J(), i = Me(null), d = Me(null), r = Me(null), h = Me(null), v = `${vl++}$$`, a = () => o.instanceId ?? v, c = () => d.value, g = () => h.value, O = () => i.value, _ = () => {
      O()?.focus();
    }, w = () => {
      O()?.blur();
    }, E = (u) => {
      const y = u.target;
      !f.value || f.value.contains(y) || c()?.contains(y) || (w(), p.closeMenu());
    }, p = Oo(o, l, {
      getInstanceId: a,
      getMenuElement: c,
      getControlElement: g,
      toggleClickOutsideEvent: (u) => {
        u ? document.addEventListener("mousedown", E, !1) : document.removeEventListener("mousedown", E, !1);
      },
      focusInput: _
    }), D = De(function(u) {
      if (u.preventDefault(), u.stopPropagation(), o.disabled) return;
      r.value?.contains(u.target) && !p.menu.isOpen && (o.openOnClick || p.trigger.isFocused) && p.openMenu(), p.resetFlags() ? w() : _();
    }), C = H(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": p.single.value,
      "vue-treeselect--multi": o.multiple,
      "vue-treeselect--searchable": o.searchable,
      "vue-treeselect--disabled": o.disabled,
      "vue-treeselect--focused": p.trigger.isFocused,
      "vue-treeselect--has-value": p.hasValue.value,
      "vue-treeselect--open": p.menu.isOpen,
      "vue-treeselect--open-above": p.menu.placement === "top",
      "vue-treeselect--open-below": p.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": o.disableBranchNodes,
      "vue-treeselect--append-to-body": o.appendToBody
    })), k = {
      ...p,
      props: o,
      slots: s,
      wrapperClass: C,
      setInputElement: (u) => {
        i.value = u;
      },
      setMenuElement: (u) => {
        d.value = u;
      },
      setValueContainerElement: (u) => {
        r.value = u;
      },
      setControlElement: (u) => {
        h.value = u;
      },
      getInput: O,
      focusInput: _,
      blurInput: w,
      handleMouseDown: D
    };
    return En(sn, k), n({
      // State
      forest: p.forest,
      menu: p.menu,
      trigger: p.trigger,
      localSearch: p.localSearch,
      selectedNodes: p.selectedNodes,
      internalValue: p.internalValue,
      // Node methods
      getNode: p.getNode,
      isSelected: p.isSelected,
      // Traversal
      traverseAllNodesDFS: p.traverseAllNodesDFS,
      traverseAllNodesByIndex: p.traverseAllNodesByIndex,
      traverseDescendantsBFS: p.traverseDescendantsBFS,
      traverseDescendantsDFS: p.traverseDescendantsDFS,
      // Menu
      openMenu: p.openMenu,
      closeMenu: p.closeMenu,
      toggleMenu: p.toggleMenu,
      toggleExpanded: p.toggleExpanded,
      getMenu: p.getMenu,
      getControl: p.getControl,
      // Selection
      select: p.select,
      clear: p.clear,
      removeLastValue: p.removeLastValue,
      // Value
      getValue: p.getValue,
      // Options
      initialize: p.initialize,
      loadRootOptions: p.loadRootOptions,
      // Focus
      focusInput: _,
      blurInput: w,
      getInput: O
    }), (u, y) => (b(), V("div", {
      ref_key: "wrapper",
      ref: f,
      class: oe(C.value)
    }, [
      ie(xo),
      ie(Ko),
      e.appendToBody ? (b(), q(hl, { key: 0 })) : (b(), q(cn, { key: 1 }))
    ], 2));
  }
});
export {
  Lt as ALL,
  Bt as ALL_WITH_INDETERMINATE,
  to as ASYNC_SEARCH,
  Dt as BRANCH_PRIORITY,
  on as CHECKED,
  nn as INDETERMINATE,
  At as LEAF_PRIORITY,
  eo as LOAD_CHILDREN_OPTIONS,
  Zn as LOAD_ROOT_OPTIONS,
  gl as Treeselect,
  ft as UNCHECKED,
  gl as default
};
