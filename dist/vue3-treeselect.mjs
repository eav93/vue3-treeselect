import { shallowReactive as he, reactive as Re, toRaw as gn, computed as H, nextTick as de, watch as ne, onMounted as xe, onUnmounted as mn, onDeactivated as _n, onActivated as yn, isReactive as Sn, inject as bn, defineComponent as fe, openBlock as b, createElementBlock as F, Fragment as ie, renderList as Me, unref as S, ref as Z, onBeforeUnmount as we, createElementVNode as Y, normalizeStyle as Oe, toDisplayString as U, createCommentVNode as ce, normalizeClass as re, createBlock as W, createTextVNode as oe, createVNode as ue, watchEffect as On, TransitionGroup as En, withCtx as le, renderSlot as Nn, Transition as xn, Teleport as Tn, useSlots as Cn, shallowRef as Le, useId as Rn, provide as Mn } from "vue";
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function He(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ze, gt;
function wn() {
  if (gt) return ze;
  gt = 1;
  function e() {
  }
  return ze = e, ze;
}
var In = wn();
const Ln = /* @__PURE__ */ He(In), ht = (() => {
  try {
    return process.env.NODE_ENV || "production";
  } catch {
    return "production";
  }
})(), Se = ht === "production" ? (
  /* istanbul ignore next */
  Ln
) : function(n, t) {
  if (!n()) {
    const o = ["[Vue-Treeselect Warning]"].concat(t());
    console.error(...o);
  }
};
function Be(e) {
  return function(t, ...o) {
    t.type === "mousedown" && t.button === 0 && e.call(this, t, ...o);
  };
}
function it(e, n) {
  const t = e.getBoundingClientRect(), o = n.getBoundingClientRect(), l = n.offsetHeight / 3;
  o.bottom + l > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + l,
    e.scrollHeight
  ) : o.top - l < t.top && (e.scrollTop = Math.max(n.offsetTop - l, 0));
}
function Kt(e) {
  return typeof CSS < "u" && CSS.escape ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&");
}
var Pe, mt;
function Yt() {
  if (mt) return Pe;
  mt = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return Pe = e, Pe;
}
var We, _t;
function Dn() {
  if (_t) return We;
  _t = 1;
  var e = typeof De == "object" && De && De.Object === Object && De;
  return We = e, We;
}
var qe, yt;
function Xt() {
  if (yt) return qe;
  yt = 1;
  var e = Dn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return qe = t, qe;
}
var je, St;
function kn() {
  if (St) return je;
  St = 1;
  var e = Xt(), n = function() {
    return e.Date.now();
  };
  return je = n, je;
}
var Ue, bt;
function An() {
  if (bt) return Ue;
  bt = 1;
  var e = /\s/;
  function n(t) {
    for (var o = t.length; o-- && e.test(t.charAt(o)); )
      ;
    return o;
  }
  return Ue = n, Ue;
}
var Qe, Ot;
function Bn() {
  if (Ot) return Qe;
  Ot = 1;
  var e = An(), n = /^\s+/;
  function t(o) {
    return o && o.slice(0, e(o) + 1).replace(n, "");
  }
  return Qe = t, Qe;
}
var Ge, Et;
function Jt() {
  if (Et) return Ge;
  Et = 1;
  var e = Xt(), n = e.Symbol;
  return Ge = n, Ge;
}
var Ke, Nt;
function $n() {
  if (Nt) return Ke;
  Nt = 1;
  var e = Jt(), n = Object.prototype, t = n.hasOwnProperty, o = n.toString, l = e ? e.toStringTag : void 0;
  function s(v) {
    var a = t.call(v, l), d = v[l];
    try {
      v[l] = void 0;
      var r = !0;
    } catch {
    }
    var f = o.call(v);
    return r && (a ? v[l] = d : delete v[l]), f;
  }
  return Ke = s, Ke;
}
var Ye, xt;
function Fn() {
  if (xt) return Ye;
  xt = 1;
  var e = Object.prototype, n = e.toString;
  function t(o) {
    return n.call(o);
  }
  return Ye = t, Ye;
}
var Xe, Tt;
function Hn() {
  if (Tt) return Xe;
  Tt = 1;
  var e = Jt(), n = $n(), t = Fn(), o = "[object Null]", l = "[object Undefined]", s = e ? e.toStringTag : void 0;
  function v(a) {
    return a == null ? a === void 0 ? l : o : s && s in Object(a) ? n(a) : t(a);
  }
  return Xe = v, Xe;
}
var Je, Ct;
function Vn() {
  if (Ct) return Je;
  Ct = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return Je = e, Je;
}
var Ze, Rt;
function zn() {
  if (Rt) return Ze;
  Rt = 1;
  var e = Hn(), n = Vn(), t = "[object Symbol]";
  function o(l) {
    return typeof l == "symbol" || n(l) && e(l) == t;
  }
  return Ze = o, Ze;
}
var et, Mt;
function Zt() {
  if (Mt) return et;
  Mt = 1;
  var e = Bn(), n = Yt(), t = zn(), o = NaN, l = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, v = /^0o[0-7]+$/i, a = parseInt;
  function d(r) {
    if (typeof r == "number")
      return r;
    if (t(r))
      return o;
    if (n(r)) {
      var f = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = n(f) ? f + "" : f;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = e(r);
    var y = s.test(r);
    return y || v.test(r) ? a(r.slice(2), y ? 2 : 8) : l.test(r) ? o : +r;
  }
  return et = d, et;
}
var tt, wt;
function Pn() {
  if (wt) return tt;
  wt = 1;
  var e = Yt(), n = kn(), t = Zt(), o = "Expected a function", l = Math.max, s = Math.min;
  function v(a, d, r) {
    var f, y, i, u, c, O, E = 0, g = !1, B = !1, C = !0;
    if (typeof a != "function")
      throw new TypeError(o);
    d = t(d) || 0, e(r) && (g = !!r.leading, B = "maxWait" in r, i = B ? l(t(r.maxWait) || 0, d) : i, C = "trailing" in r ? !!r.trailing : C);
    function k(N) {
      var w = f, z = y;
      return f = y = void 0, E = N, u = a.apply(z, w), u;
    }
    function h(N) {
      return E = N, c = setTimeout($, d), g ? k(N) : u;
    }
    function L(N) {
      var w = N - O, z = N - E, V = d - w;
      return B ? s(V, i - z) : V;
    }
    function M(N) {
      var w = N - O, z = N - E;
      return O === void 0 || w >= d || w < 0 || B && z >= i;
    }
    function $() {
      var N = n();
      if (M(N))
        return m(N);
      c = setTimeout($, L(N));
    }
    function m(N) {
      return c = void 0, C && f ? k(N) : (f = y = void 0, u);
    }
    function p() {
      c !== void 0 && clearTimeout(c), E = 0, f = O = y = c = void 0;
    }
    function A() {
      return c === void 0 ? u : m(n());
    }
    function x() {
      var N = n(), w = M(N);
      if (f = arguments, y = this, O = N, w) {
        if (c === void 0)
          return h(O);
        if (B)
          return clearTimeout(c), c = setTimeout($, d), k(O);
      }
      return c === void 0 && (c = setTimeout($, d)), u;
    }
    return x.cancel = p, x.flush = A, x;
  }
  return tt = v, tt;
}
var Wn = Pn();
const qn = /* @__PURE__ */ He(Wn);
var jn = (function(e, n) {
  var t = document.createElement("_"), o = t.appendChild(document.createElement("_")), l = t.appendChild(document.createElement("_")), s = o.appendChild(document.createElement("_")), v = void 0, a = void 0;
  return o.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", s.style.cssText = l.style.cssText = "display:block;height:100%;transition:0s;width:100%", s.style.width = s.style.height = "200%", e.appendChild(t), d(), f;
  function d() {
    r();
    var y = e.offsetWidth, i = e.offsetHeight;
    (y !== v || i !== a) && (v = y, a = i, l.style.width = y * 2 + "px", l.style.height = i * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, o.scrollLeft = o.scrollWidth, o.scrollTop = o.scrollHeight, n({ width: y, height: i })), o.addEventListener("scroll", d), t.addEventListener("scroll", d);
  }
  function r() {
    o.removeEventListener("scroll", d), t.removeEventListener("scroll", d);
  }
  function f() {
    r(), e.removeChild(t);
  }
});
let Ae;
const Te = [], Un = 100;
function Qn() {
  Ae = setInterval(() => {
    Te.forEach(en);
  }, Un);
}
function Gn() {
  Ae && (clearInterval(Ae), Ae = null);
}
function en(e) {
  const { $el: n, listener: t, lastWidth: o, lastHeight: l } = e, s = n.offsetWidth, v = n.offsetHeight;
  (o !== s || l !== v) && (e.lastWidth = s, e.lastHeight = v, t({ width: s, height: v }));
}
function Kn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, o = () => {
    const l = Te.indexOf(t);
    l !== -1 && Te.splice(l, 1), Te.length || Gn();
  };
  return Te.push(t), en(t), Qn(), o;
}
function tn(e, n) {
  const t = document.documentMode === 9;
  let o = !0;
  const v = (t ? Kn : jn)(e, (...a) => {
    o || n(...a);
  });
  return o = !1, v;
}
function Yn(e) {
  const n = [];
  let t = e.parentNode;
  for (; t && t.nodeName !== "BODY" && t.nodeType === document.ELEMENT_NODE; )
    Xn(t) && n.push(t), t = t.parentNode;
  return n.push(window), n;
}
function Xn(e) {
  const { overflow: n, overflowX: t, overflowY: o } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + o + t);
}
function nn(e, n) {
  const t = Yn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((o) => {
    o.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((l) => {
      l.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Jn(e) {
  return e !== e;
}
function on(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var nt, It;
function Zn() {
  if (It) return nt;
  It = 1;
  var e = Zt(), n = 1 / 0, t = 17976931348623157e292;
  function o(l) {
    if (!l)
      return l === 0 ? l : 0;
    if (l = e(l), l === n || l === -n) {
      var s = l < 0 ? -1 : 1;
      return s * t;
    }
    return l === l ? l : 0;
  }
  return nt = o, nt;
}
var ot, Lt;
function eo() {
  if (Lt) return ot;
  Lt = 1;
  var e = Zn();
  function n(t) {
    var o = e(t), l = o % 1;
    return o === o ? l ? o - l : o : 0;
  }
  return ot = n, ot;
}
var lt, Dt;
function to() {
  if (Dt) return lt;
  Dt = 1;
  var e = eo(), n = "Expected a function";
  function t(o, l) {
    var s;
    if (typeof l != "function")
      throw new TypeError(n);
    return o = e(o), function() {
      return --o > 0 && (s = l.apply(this, arguments)), o <= 1 && (l = void 0), s;
    };
  }
  return lt = t, lt;
}
var st, kt;
function no() {
  if (kt) return st;
  kt = 1;
  var e = to();
  function n(t) {
    return e(2, t);
  }
  return st = n, st;
}
var oo = no();
const lo = /* @__PURE__ */ He(oo), K = () => /* @__PURE__ */ Object.create(null);
function ke(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
const ct = null, vt = 0, ln = 1, sn = 2, Ce = "ALL_CHILDREN", ye = "ALL_DESCENDANTS", $e = "LEAF_CHILDREN", be = "LEAF_DESCENDANTS", so = "LOAD_ROOT_OPTIONS", ro = "LOAD_CHILDREN_OPTIONS", ao = "ASYNC_SEARCH", At = "ALL", Bt = "BRANCH_PRIORITY", $t = "LEAF_PRIORITY", Ft = "ALL_WITH_INDETERMINATE", J = {
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
}, io = ht === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Ht = 5, Vt = 40;
function rt(e, n) {
  if (!e.isBranch || !e.children) return;
  const t = e.children.slice();
  for (let o = 0; o < t.length; o++) {
    const l = t[o], s = l.children;
    if (l.isBranch && s)
      for (let v = 0; v < s.length; v++) t.push(s[v]);
    n(l);
  }
}
function Fe(e, n) {
  const t = e.children;
  if (!(!e.isBranch || !t))
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      Fe(l, n), n(l);
    }
}
function co(e, n) {
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    Fe(o, n), n(o);
  }
}
function uo(e, n) {
  const t = (o) => {
    for (let l = 0; l < o.length; l++) {
      const s = o[l];
      n(s) !== !1 && s.isBranch && s.children && t(s.children);
    }
  };
  t(e);
}
function fo(e, n) {
  const t = he({
    normalizedOptions: [],
    nodeMap: K(),
    checkedStateMap: he(K()),
    selectedNodeIds: n,
    selectedNodeMap: he(K())
  });
  let o = K(), l = K();
  const s = () => !!e.multiple && !e.flat && !e.disableBranchNodes, v = (i) => o[i] ? sn : s() && l[i] > 0 ? ln : vt, a = (i, u, c) => {
    const O = t.nodeMap[i];
    if (!O) return;
    const E = O.ancestors;
    for (let g = 0; g < E.length; g++) {
      const B = E[g].id;
      l[B] = (l[B] || 0) + u, c && (c[B] = B);
    }
  };
  return {
    forest: t,
    buildForestState: () => {
      o = K(), l = K();
      const i = K(), u = t.selectedNodeIds;
      for (let O = 0; O < u.length; O++) {
        const E = u[O];
        o[E] || (o[E] = !0, i[E] = !0, s() && a(E, 1));
      }
      t.selectedNodeMap = he(i);
      const c = K();
      if (e.multiple) {
        const { nodeMap: O } = t;
        for (const E in O) {
          const g = O[E].id;
          c[g] = v(g);
        }
      }
      t.checkedStateMap = he(c);
    },
    setSelectedNodeIds: (i) => {
      const u = t.selectedNodeIds, c = K();
      for (let L = 0; L < i.length; L++) c[i[L]] = !0;
      const O = [], E = [], g = K();
      for (let L = 0; L < i.length; L++) {
        const M = i[L];
        !o[M] && !g[M] && (g[M] = !0, O.push(M));
      }
      for (let L = 0; L < u.length; L++) {
        const M = u[L];
        !c[M] && !g[M] && (g[M] = !0, E.push(M));
      }
      if (t.selectedNodeIds = i, !O.length && !E.length) return;
      const { selectedNodeMap: B, checkedStateMap: C } = t, k = s(), h = K();
      for (let L = 0; L < E.length; L++) {
        const M = E[L];
        delete o[M], delete B[M], h[M] = M, k && a(M, -1, h);
      }
      for (let L = 0; L < O.length; L++) {
        const M = O[L];
        o[M] = !0, B[M] = !0, h[M] = M, k && a(M, 1, h);
      }
      if (e.multiple)
        for (const L in h) {
          const M = h[L];
          C[M] = v(M);
        }
    },
    isSelected: (i) => !!i && t.selectedNodeMap[i.id] === !0,
    getCheckedState: (i) => t.checkedStateMap[i.id]
  };
}
const zt = ht !== "production", ho = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Ve() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Pt(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function vo(e, n, t, o) {
  const l = (d) => {
    const r = e.normalizer ? e.normalizer(d, t()) : d;
    return !r || r === d ? (f) => d[f] : (f) => ho(r, f) ? r[f] : d[f];
  }, s = (d) => ({
    ...d,
    ...e.normalizer ? e.normalizer(d, t()) : {}
  }), v = (d, r) => {
    Se(
      () => !(d in n.nodeMap && !n.nodeMap[d].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(d)}. Their labels are "${n.nodeMap[d].label}" and "${r}" respectively.`
    );
  }, a = (d, r, f) => {
    const y = n.nodeMap, i = e.matchKeys || ["label"], u = d === ct, c = u ? 0 : d.level + 1, O = u ? [] : [d, ...d.ancestors], E = u ? [] : d.index, g = !!e.searchNested;
    let B = new Array(r.length);
    for (let C = 0; C < r.length; C++) {
      const k = r[C], h = l(k), L = h("id"), M = h("label"), $ = h("children"), m = h("isDefaultExpanded");
      zt && v(L, M), zt && Se(
        () => !($ === void 0 && h("isBranch") === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
      const p = Array.isArray($) || $ === null, A = !p, x = !!h("isDisabled") || !e.flat && !u && !!d.isDisabled, N = !!h("isNew"), w = {};
      for (let D = 0; D < i.length; D++) {
        const X = i[D];
        w[X] = Pt(h(X)).toLocaleLowerCase();
      }
      "label" in w || (w.label = Pt(M).toLocaleLowerCase());
      const z = g ? u ? w.label : d.nestedSearchLabel + " " + w.label : "", V = {
        id: L,
        label: M,
        level: c,
        ancestors: O,
        index: E.concat(C),
        parentNode: d,
        lowerCased: w,
        nestedSearchLabel: z,
        isDisabled: x,
        isNew: N,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: p,
        isLeaf: A,
        isRootNode: u,
        raw: k
      };
      p && (V.childrenStates = Re({ ...Ve(), isLoaded: Array.isArray($) }), V.isExpanded = typeof m == "boolean" ? m : c < (e.defaultExpandLevel || 0), V.hasMatchedDescendants = !1, V.hasDisabledDescendants = !1, V.isExpandedOnSearch = !1, V.showAllChildrenOnSearch = !1, V.count = {
        [Ce]: 0,
        [ye]: 0,
        [$e]: 0,
        [be]: 0
      }, V.children = []);
      const R = he(V);
      if (y[L] = R, p) {
        const D = Array.isArray($);
        if (D && (R.children = a(R, $, f)), m === !0)
          for (let X = 0; X < O.length; X++) O[X].isExpanded = !0;
        !D && typeof e.loadOptions != "function" && Se(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        );
      }
      if (!u) {
        const D = d.count;
        D[Ce] += 1, D[ye] += 1 + (p ? V.count[ye] : 0), A ? (D[$e] += 1, D[be] += 1) : D[be] += V.count[be], (x || V.hasDisabledDescendants) && (d.hasDisabledDescendants = !0);
      }
      const T = f && f[L];
      T && (R.isMatched = !!T.isMatched, R.showAllChildrenOnSearch = !!T.showAllChildrenOnSearch, R.isHighlighted = !!T.isHighlighted, T.isBranch && p && (R.isExpanded = T.isExpanded, R.isExpandedOnSearch = T.isExpandedOnSearch, R.hasMatchedDescendants = T.hasMatchedDescendants, T.childrenStates.isLoaded && !R.childrenStates.isLoaded ? R.isExpanded = !1 : R.childrenStates = Re({ ...gn(T.childrenStates) }))), p && !R.childrenStates.isLoaded && !R.childrenStates.loadingError && R.isExpanded && typeof e.loadOptions == "function" && o(R), B[C] = R;
    }
    if (e.branchNodesFirst) {
      const C = B.filter((h) => h.isBranch), k = B.filter((h) => h.isLeaf);
      B = C.concat(k);
    }
    return B;
  };
  return {
    normalize: a,
    enhancedNormalizer: s
  };
}
function rn(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function po(e, n) {
  return e.level === n.level ? rn(e, n) : e.level - n.level;
}
function Wt(e, n, t) {
  const o = K();
  for (let l = 0; l < e.length; l++) {
    const s = e[l], v = t(s);
    if (!v || (n.push(s), v.isRootNode || !v.parentNode)) continue;
    const a = v.parentNode;
    a.id in o || (o[a.id] = a.children.length), --o[a.id] === 0 && e.push(a.id);
  }
}
function go(e, n, t, o, l) {
  const s = H(() => n.selectedNodeIds.map((y) => t(y))), v = H(() => !e.multiple), a = H(() => {
    let y;
    if (v.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === At)
      y = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Bt)
      y = n.selectedNodeIds.filter((i) => {
        const u = t(i);
        return u ? u.isRootNode || !u.parentNode ? !0 : !o(u.parentNode) : !1;
      });
    else if (e.valueConsistsOf === $t)
      y = n.selectedNodeIds.filter((i) => {
        const u = t(i);
        return u ? u.isLeaf ? !0 : u.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Ft) {
      y = n.selectedNodeIds.slice();
      const i = K();
      for (let c = 0; c < y.length; c++) i[y[c]] = !0;
      const u = [];
      s.value.forEach((c) => {
        const O = c.ancestors;
        for (let E = 0; E < O.length; E++) {
          const g = O[E].id;
          i[g] || (i[g] = !0, u.push(g));
        }
      }), y.push(...u);
    } else
      y = [];
    if (e.sortValueBy === "LEVEL" || e.sortValueBy === "INDEX") {
      const i = e.sortValueBy === "LEVEL" ? po : rn;
      y = y.map((u) => t(u)).sort(i).map((u) => u.id);
    }
    return y;
  }), d = H(() => a.value.length > 0);
  return {
    selectedNodes: s,
    single: v,
    internalValue: a,
    hasValue: d,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? a.value.slice() : a.value[0];
      const y = a.value.map((i) => t(i).raw);
      return e.multiple ? y : y[0];
    },
    computeSelectedNodeIds: (y) => {
      const i = [];
      if (v.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === At)
        return y;
      if (e.valueConsistsOf === Bt)
        y.forEach((c) => {
          i.push(c);
          const O = t(c);
          O?.isBranch && l(O, (E) => {
            i.push(E.id);
          });
        });
      else if (e.valueConsistsOf === $t)
        Wt(y.slice(), i, t);
      else if (e.valueConsistsOf === Ft) {
        const c = y.filter((O) => {
          const E = t(O);
          return E && (E.isLeaf || E.children.length === 0);
        });
        Wt(c, i, t);
      }
      const u = K();
      return i.filter((c) => u[c] ? !1 : (u[c] = !0, !0));
    }
  };
}
function mo(e) {
  const {
    props: n,
    emit: t,
    forest: o,
    getNode: l,
    getCheckedState: s,
    setSelectedNodeIds: v,
    traverseDescendantsBFS: a,
    traverseDescendantsDFS: d,
    resetSearchQuery: r,
    closeMenu: f,
    hasValue: y,
    internalValue: i,
    single: u,
    getInstanceId: c,
    localSearch: O,
    getSearchQuery: E
  } = e;
  let g = !1;
  const B = () => {
    const m = g;
    return g = !1, m;
  }, C = (m = o.selectedNodeIds) => {
    const p = m, A = K();
    for (let w = 0; w < p.length; w++) A[p[w]] = !0;
    const x = [], N = K();
    return {
      has: (w) => A[w.id] === !0,
      add: (w) => {
        A[w.id] || (A[w.id] = !0, N[w.id] || (N[w.id] = !0, x.push(w.id)));
      },
      remove: (w) => {
        delete A[w.id];
      },
      commit: () => {
        const w = [];
        for (let z = 0; z < p.length; z++) {
          const V = p[z];
          A[V] && !N[V] && w.push(V);
        }
        for (let z = 0; z < x.length; z++)
          A[x[z]] && w.push(x[z]);
        v(w);
      }
    };
  }, k = () => {
    y() && (u() || n.allowClearingDisabled ? v([]) : v(o.selectedNodeIds.filter((m) => {
      const p = l(m);
      return p ? p.isDisabled : !1;
    })));
  }, h = (m, p) => {
    if (u() || n.disableBranchNodes)
      return m.add(p);
    if (n.flat) {
      m.add(p), n.autoSelectAncestors && p.ancestors.forEach((x) => {
        !m.has(x) && !x.isDisabled && m.add(x);
      }), n.autoSelectDescendants && a(p, (x) => {
        !m.has(x) && !x.isDisabled && m.add(x);
      });
      return;
    }
    const A = p.isLeaf || !p.hasDisabledDescendants || !!n.allowSelectingDisabledDescendants;
    if (A && m.add(p), p.isBranch && a(p, (x) => {
      if (!x.isDisabled || n.allowSelectingDisabledDescendants) {
        if (x.isBranch && x.hasDisabledDescendants && !n.allowSelectingDisabledDescendants) return;
        m.add(x);
      }
    }), A) {
      let x = p;
      for (; (x = x.parentNode) !== null && x.children.every(m.has); )
        m.add(x);
    }
  }, L = (m, p) => {
    if (n.disableBranchNodes)
      return m.remove(p);
    if (n.flat) {
      m.remove(p), n.autoDeselectAncestors && p.ancestors.forEach((x) => {
        m.has(x) && !x.isDisabled && m.remove(x);
      }), n.autoDeselectDescendants && a(p, (x) => {
        m.has(x) && !x.isDisabled && m.remove(x);
      });
      return;
    }
    let A = !1;
    if (p.isBranch && d(p, (x) => {
      (!x.isDisabled || n.allowSelectingDisabledDescendants) && (m.remove(x), A = !0);
    }), p.isLeaf || A || p.isBranch && p.children.length === 0) {
      m.remove(p);
      let x = p;
      for (; (x = x.parentNode) !== null && m.has(x); )
        m.remove(x);
    }
  }, M = (m) => {
    if (n.disabled || m.isDisabled)
      return;
    const p = C(u() ? [] : o.selectedNodeIds), A = n.multiple && !n.flat ? s(m) === vt : !p.has(m);
    A ? h(p, m) : L(p, m), p.commit();
    const x = c();
    de(() => {
      t(A ? "select" : "deselect", m.raw, x);
    }), (O.active || E() !== "") && A && (u() || n.clearOnSelect) && r(), u() && n.closeOnSelect && (f(), n.searchable && (g = !0));
  };
  return {
    select: M,
    clear: k,
    removeLastValue: () => {
      if (!y()) return;
      if (u())
        return n.clearable === !1 ? void 0 : k();
      const m = i(), p = m[m.length - 1];
      if (p == null) return;
      const A = l(p);
      A && M(A);
    },
    resetFlags: B
  };
}
function _o(e) {
  const {
    props: n,
    emit: t,
    forest: o,
    localSearch: l,
    getNode: s,
    getValue: v,
    getInstanceId: a,
    resetSearchQuery: d,
    loadRootOptions: r,
    loadChildrenOptions: f,
    getMenuElement: y,
    toggleClickOutsideEvent: i,
    getSelectedNode: u
  } = e, c = Re({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), O = (_) => l.active ? _.isExpandedOnSearch || !1 : _.isExpanded || !1, E = (_) => !!(_.isMatched || _.isBranch && _.hasMatchedDescendants && !n.flattenSearchResults || !_.isRootNode && _.parentNode.showAllChildrenOnSearch), g = (_) => !(l.active && !E(_)), B = H(() => {
    const _ = [], P = l.active, j = P && !!n.flattenSearchResults, te = (_e) => {
      for (let pe = 0; pe < _e.length; pe++) {
        const Q = _e[pe];
        if ((!P || E(Q)) && _.push({ type: "option", key: `option-${Q.id}`, node: Q, level: j ? 0 : Q.level }), !Q.isBranch || !O(Q)) continue;
        const ge = Q.childrenStates, me = j ? 0 : Q.level;
        if (!ge || ge.isLoaded) {
          const Ee = Q.children || [];
          te(Ee), ge && !Ee.length && _.push({ type: "no-children", key: `no-children-${Q.id}`, node: Q, level: me });
        }
        ge?.isLoading && _.push({ type: "loading", key: `loading-${Q.id}`, node: Q, level: me }), ge?.loadingError && _.push({ type: "error", key: `error-${Q.id}`, node: Q, level: me });
      }
    };
    return te(o.normalizedOptions), _;
  }), C = H(() => {
    const _ = [], P = B.value;
    for (let j = 0; j < P.length; j++)
      P[j].type === "option" && _.push(P[j].node.id);
    return _;
  }), k = H(() => {
    const _ = K();
    return C.value.forEach((P, j) => {
      _[P] = j;
    }), _;
  }), h = () => {
    if (c.current == null) return -1;
    const _ = k.value[c.current];
    return _ === void 0 ? -1 : _;
  }, L = H(() => C.value.length !== 0);
  let M = null;
  const $ = (_) => {
    M = _;
  }, m = (_, P = !0) => {
    const j = c.current;
    if (j != null && j in o.nodeMap && (o.nodeMap[j].isHighlighted = !1), !_) {
      c.current = null;
      return;
    }
    if (c.current = _.id, _.isHighlighted = !0, c.isOpen && P) {
      const te = () => {
        const pe = y();
        if (!pe) return;
        if (M) return M(_);
        const Q = pe.querySelector(`.vue-treeselect__option[data-id="${Kt(String(_.id))}"]`);
        Q && it(pe, Q);
      };
      y() ? te() : de(te);
    }
  }, p = () => {
    if (!L.value) return;
    const _ = C.value[0], P = s(_);
    P && m(P);
  }, A = () => {
    if (!L.value) return;
    const P = h() - 1;
    if (P === -1) return N();
    const j = s(C.value[P]);
    j && m(j);
  }, x = () => {
    if (!L.value) return;
    const P = h() + 1;
    if (P === C.value.length) return p();
    const j = s(C.value[P]);
    j && m(j);
  }, N = () => {
    if (!L.value) return;
    const _ = C.value, P = s(_[_.length - 1]);
    P && m(P);
  }, w = (_ = !1) => {
    const { current: P } = c;
    if (_ || P == null || !(P in o.nodeMap) || !g(s(P))) {
      if (l.active) {
        const j = B.value.find((te) => te.type === "option" && te.node.isMatched);
        if (j) return m(j.node);
      }
      p();
    }
  }, z = () => {
    const _ = u();
    _ && g(_) && k.value[_.id] !== void 0 ? m(_, !1) : w();
  }, V = () => {
    const _ = y();
    _ && (c.lastScrollPosition = _.scrollTop);
  }, R = () => {
    const _ = y();
    _ && (_.scrollTop = c.lastScrollPosition);
  }, T = (_ = !1) => {
    !c.isOpen || _ !== !0 && !n.disabled && n.alwaysOpen || (V(), c.isOpen = !1, i(!1), d(), t("close", v(), a()));
  }, D = () => {
    n.disabled || c.isOpen || (c.isOpen = !0, de(z), de(R), !n.options && !n.async && r(), i(!0), t("open", a()));
  };
  return {
    menu: c,
    setScrollToOptionHandler: $,
    shouldOptionBeIncludedInSearchResult: E,
    menuRows: B,
    visibleOptionIds: C,
    hasVisibleOptions: L,
    shouldExpand: O,
    shouldShowOptionInMenu: g,
    openMenu: D,
    closeMenu: T,
    toggleMenu: () => {
      c.isOpen ? T() : D();
    },
    toggleExpanded: (_) => {
      let P;
      l.active ? (P = _.isExpandedOnSearch = !_.isExpandedOnSearch, P && !_.hasMatchedDescendants && (_.showAllChildrenOnSearch = !0)) : P = _.isExpanded = !_.isExpanded, P && _.childrenStates && !_.childrenStates.isLoaded && f(_);
    },
    setCurrentHighlightedOption: m,
    resetHighlightedOptionWhenNecessary: w,
    highlightFirstOption: p,
    highlightPrevOption: A,
    highlightNextOption: x,
    highlightLastOption: N,
    saveMenuScrollPosition: V,
    restoreMenuScrollPosition: R
  };
}
var at, qt;
function yo() {
  if (qt) return at;
  qt = 1;
  function e(n, t) {
    var o = t.length, l = n.length;
    if (l > o)
      return !1;
    if (l === o)
      return n === t;
    e: for (var s = 0, v = 0; s < l; s++) {
      for (var a = n.charCodeAt(s); v < o; )
        if (t.charCodeAt(v++) === a)
          continue e;
      return !1;
    }
    return !0;
  }
  return at = e, at;
}
var So = yo();
const bo = /* @__PURE__ */ He(So);
function Oo(e, n, t, o) {
  const l = he({
    active: !1,
    noResults: !0,
    countMap: K()
  });
  return {
    localSearch: l,
    handleLocalSearch: (v = !1) => {
      const { searchQuery: a } = n, d = () => o(!v);
      if (!a)
        return l.active = !1, d();
      l.active = !0;
      const r = a.trim().toLocaleLowerCase(), f = r.replace(/\s+/g, " ").split(" "), y = !!e.searchNested && f.length > 1, i = e.matchKeys || ["label"], u = !e.disableFuzzyMatching, c = K();
      let O = !0;
      const E = (C) => {
        if (y) {
          for (let k = 0; k < f.length; k++)
            if (C.nestedSearchLabel.indexOf(f[k]) === -1) return !1;
          return !0;
        }
        for (let k = 0; k < i.length; k++) {
          const h = C.lowerCased[i[k]];
          if (h != null && (u ? bo(r, h) : h.indexOf(r) !== -1))
            return !0;
        }
        return !1;
      }, g = (C) => {
        const k = E(C);
        if (k && (O = !1), C.isBranch) {
          const h = {
            [Ce]: 0,
            [ye]: 0,
            [$e]: 0,
            [be]: 0
          };
          let L = !1;
          const M = C.children || [];
          for (let $ = 0; $ < M.length; $++) {
            const m = M[$];
            g(m) && (L = !0);
            const p = m.isMatched;
            if (m.isLeaf)
              p && (h[Ce]++, h[ye]++, h[$e]++, h[be]++);
            else {
              const A = c[m.id];
              p && (h[Ce]++, h[ye]++), h[ye] += A[ye], h[be] += A[be];
            }
          }
          c[C.id] = h, C.isExpandedOnSearch = L || v && !!C.isExpandedOnSearch, C.hasMatchedDescendants = L, v || (C.showAllChildrenOnSearch = !1);
        }
        return C.isMatched = k, k || C.isBranch && !!C.isExpandedOnSearch;
      }, B = t();
      for (let C = 0; C < B.length; C++) g(B[C]);
      l.countMap = c, l.noResults = O, d();
    }
  };
}
function ut(e) {
  return e.message || String(e);
}
function Eo(e, n, t, o, l) {
  const s = Re(Ve()), v = (r) => {
    const { action: f, args: y, isPending: i, start: u, succeed: c, fail: O, end: E } = r;
    if (!e.loadOptions || i())
      return;
    u();
    const g = lo((k, h) => {
      k ? O(k) : c(h), E();
    }), B = t(), C = e.loadOptions({
      id: B,
      instanceId: B,
      action: f,
      ...y,
      callback: g
    });
    on(C) && C.then(
      // The resolved value is used as the result (e.g. options for ASYNC_SEARCH)
      (k) => g(null, k),
      (k) => g(k || new Error("Failed to load options"))
    ).catch((k) => {
      console.error(k);
    });
  };
  return {
    rootOptionsStates: s,
    callLoadOptionsProp: v,
    loadRootOptions: () => {
      v({
        action: so,
        isPending: () => s.isLoading,
        start: () => {
          s.isLoading = !0, s.loadingError = "";
        },
        succeed: () => {
          s.isLoaded = !0, de(() => {
            o(!0);
          });
        },
        fail: (r) => {
          s.loadingError = ut(r);
        },
        end: () => {
          s.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (r) => {
      const { id: f, raw: y } = r;
      v({
        action: ro,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: y
        },
        isPending: () => {
          const i = n(f);
          return i?.childrenStates ? i.childrenStates.isLoading : !1;
        },
        start: () => {
          const i = n(f);
          i?.childrenStates && (i.childrenStates.isLoading = !0, i.childrenStates.loadingError = "");
        },
        succeed: () => {
          const i = n(f);
          i?.childrenStates && (i.childrenStates.isLoaded = !0), l();
        },
        fail: (i) => {
          const u = n(f);
          u?.childrenStates && (u.childrenStates.loadingError = ut(i));
        },
        end: () => {
          const i = n(f);
          i?.childrenStates && (i.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const No = () => he({
  ...Ve(),
  options: []
}), xo = Object.freeze({
  ...Ve(),
  options: []
});
function To(e, n, t, o, l) {
  const s = he(K()), v = () => s[n.searchQuery] || xo, a = (r) => {
    let f = s[r];
    return f || (f = No(), s[r] = f), r === "" && (Array.isArray(e.defaultOptions) ? (f.options = e.defaultOptions, f.isLoaded = !0) : e.defaultOptions !== !0 && (f.isLoaded = !0)), f;
  };
  return {
    remoteSearch: s,
    getRemoteSearchEntry: v,
    handleRemoteSearch: () => {
      const { searchQuery: r } = n, f = a(r), y = () => {
        o(), l(!0);
      };
      if ((r === "" || e.cacheOptions) && f.isLoaded)
        return y();
      t({
        action: ao,
        args: { searchQuery: r },
        isPending: () => f.isLoading,
        start: () => {
          f.isLoading = !0, f.isLoaded = !1, f.loadingError = "";
        },
        succeed: (i) => {
          f.isLoaded = !0, f.options = Array.isArray(i) ? i : [], n.searchQuery === r && y();
        },
        fail: (i) => {
          f.loadingError = ut(i);
        },
        end: () => {
          f.isLoading = !1;
        }
      });
    }
  };
}
function Co(e) {
  Se(
    () => e.async ? !!e.searchable : !0,
    () => 'For async search mode, the value of "searchable" prop must be true.'
  ), e.options == null && !e.loadOptions && Se(
    () => !1,
    () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
  ), e.flat && Se(
    () => !!e.multiple,
    () => 'You are using flat mode. But you forgot to add "multiple=true"?'
  ), e.flat || [
    "autoSelectAncestors",
    "autoSelectDescendants",
    "autoDeselectAncestors",
    "autoDeselectDescendants"
  ].forEach((t) => {
    Se(
      () => !e[t],
      () => `"${t}" only applies to flat mode.`
    );
  });
}
function Ro(e, n, t) {
  const {
    getInstanceId: o,
    getMenuElement: l,
    getControlElement: s,
    toggleClickOutsideEvent: v,
    focusInput: a
  } = t;
  Co(e);
  const d = Re({
    isFocused: !1,
    searchQuery: ""
  }), r = () => {
    d.searchQuery = "";
  }, f = (I) => ({
    ...I,
    ...e.normalizer ? e.normalizer(I, o()) : {}
  });
  let y = () => !1;
  const i = () => e.modelValue == null ? [] : e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue === "" && !y("") ? [] : [e.modelValue], u = () => {
    const I = i();
    return e.valueFormat === "id" ? I.slice() : I.map((G) => f(G).id);
  }, c = H(() => {
    const I = K();
    return e.valueFormat === "id" || i().forEach((G) => {
      if (!G) return;
      const se = f(G).id;
      se in I || (I[se] = G);
    }), I;
  }), O = (I) => c.value[I] || { id: I }, E = fo(e, u()), { forest: g, isSelected: B, getCheckedState: C, buildForestState: k, setSelectedNodeIds: h } = E;
  y = (I) => I in g.nodeMap;
  const L = (I) => {
    const G = c.value[I], se = G || { id: I }, pn = G && f(G).label || `${I} (unknown)`, pt = he({
      id: I,
      label: pn,
      level: 0,
      ancestors: [],
      index: [-1],
      parentNode: ct,
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
      raw: se
    });
    return g.nodeMap[I] = pt, pt;
  }, M = (I) => {
    if (I == null)
      return Se(() => !1, () => `Invalid node id: ${I}`), null;
    const { nodeMap: G } = g;
    return I in G ? G[I] : L(I);
  };
  let $ = () => {
  };
  const p = Eo(
    e,
    M,
    o,
    (I) => $(I),
    () => {
      (e.async || !Sn(e.options)) && _e();
    }
  ), { rootOptionsStates: A, loadRootOptions: x, loadChildrenOptions: N, callLoadOptionsProp: w } = p, { normalize: z } = vo(e, g, o, N), V = go(e, g, M, B, rt), { selectedNodes: R, single: T, internalValue: D, hasValue: X, getValue: ee, computeSelectedNodeIds: _ } = V, P = (I, G = !1) => {
    const se = _(I);
    G ? (ke(g.selectedNodeIds, se) && (g.selectedNodeIds = se), k()) : ke(g.selectedNodeIds, se) && h(se);
  }, j = (I) => {
    g.selectedNodeIds.forEach((G) => {
      const se = I[G];
      se && (g.nodeMap[G] = he({
        ...se,
        isFallbackNode: !0
      }));
    });
  };
  let te;
  const _e = () => {
    const I = e.async ? te().options : e.options;
    if (Array.isArray(I)) {
      const G = g.nodeMap;
      g.nodeMap = K(), j(G), g.normalizedOptions = z(ct, I, G);
      const se = !e.multiple && e.modelValue === "" ? u() : D.value;
      P(se, !0), e.async || pe();
    } else
      g.normalizedOptions = [];
  };
  let pe = () => {
  };
  const Q = To(
    e,
    d,
    w,
    _e,
    (I) => $(I)
  );
  te = Q.getRemoteSearchEntry;
  const { handleRemoteSearch: ge } = Q, me = Oo(
    e,
    d,
    () => g.normalizedOptions,
    (I) => $(I)
  ), { handleLocalSearch: Ee } = me;
  pe = () => {
    me.localSearch.active && Ee(!0);
  };
  const q = _o({
    props: e,
    emit: n,
    forest: g,
    localSearch: me.localSearch,
    getNode: M,
    getValue: ee,
    getInstanceId: o,
    resetSearchQuery: r,
    loadRootOptions: x,
    loadChildrenOptions: N,
    getMenuElement: l,
    toggleClickOutsideEvent: v,
    getSelectedNode: () => T.value && g.selectedNodeIds.length ? M(g.selectedNodeIds[0]) : null
  });
  $ = q.resetHighlightedOptionWhenNecessary;
  const Ie = mo({
    props: e,
    emit: n,
    forest: g,
    getNode: M,
    getCheckedState: C,
    setSelectedNodeIds: h,
    traverseDescendantsBFS: rt,
    traverseDescendantsDFS: Fe,
    resetSearchQuery: r,
    closeMenu: q.closeMenu,
    hasValue: () => X.value,
    internalValue: () => D.value,
    single: () => T.value,
    getInstanceId: o,
    localSearch: me.localSearch,
    getSearchQuery: () => d.searchQuery
  }), fn = H(() => typeof e.showCountOnSearch == "boolean" ? e.showCountOnSearch : !!e.showCount), hn = H(() => g.normalizedOptions.some((I) => I.isBranch)), vn = H(() => me.localSearch.active && !!e.flattenSearchResults);
  return ne(() => e.alwaysOpen, (I) => {
    I ? q.openMenu() : q.closeMenu();
  }), ne(() => e.disabled, (I) => {
    I && q.menu.isOpen ? q.closeMenu() : !I && !q.menu.isOpen && e.alwaysOpen && q.openMenu();
  }), ne(
    [
      () => e.branchNodesFirst,
      () => e.flat,
      // Compare by content: inline arrays in templates are recreated on every render
      () => (e.matchKeys || []).join("\0"),
      () => e.searchNested
    ],
    () => _e()
  ), ne(D, (I, G) => {
    ke(I, G) && n("update:modelValue", ee(), o());
  }), ne([() => e.multiple, () => e.disableBranchNodes], () => {
    k();
  }), ne(() => e.options, () => {
    e.async || (_e(), A.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), ne(() => d.searchQuery, () => {
    e.async ? ge() : Ee(), n("search-change", d.searchQuery, o());
  }), ne(u, (I) => {
    ke(I, D.value) && P(I);
  }), ne(() => e.defaultOptions, () => {
    e.async && d.searchQuery === "" && ge();
  }), xe(() => {
    e.autoFocus && a(), !e.options && !e.async && e.autoLoadRootOptions && x(), e.alwaysOpen && q.openMenu(), e.async && e.defaultOptions && ge();
  }), mn(() => {
    v(!1);
  }), _n(() => {
    q.closeMenu(!0);
  }), yn(() => {
    e.alwaysOpen && q.openMenu();
  }), {
    // State
    forest: g,
    trigger: d,
    menu: q.menu,
    localSearch: me.localSearch,
    remoteSearch: Q.remoteSearch,
    rootOptionsStates: A,
    // Computed
    selectedNodes: R,
    single: T,
    internalValue: D,
    hasValue: X,
    menuRows: q.menuRows,
    visibleOptionIds: q.visibleOptionIds,
    hasVisibleOptions: q.hasVisibleOptions,
    showCountOnSearchComputed: fn,
    hasBranchNodes: hn,
    shouldFlattenOptions: vn,
    // Node methods
    getNode: M,
    isSelected: B,
    getCheckedState: C,
    // Traversal
    traverseDescendantsBFS: rt,
    traverseDescendantsDFS: Fe,
    traverseAllNodesDFS: (I) => co(g.normalizedOptions, I),
    traverseAllNodesByIndex: (I) => uo(g.normalizedOptions, I),
    // Value
    getValue: ee,
    extractCheckedNodeIdsFromValue: u,
    extractNodeFromValue: O,
    fixSelectedNodeIds: P,
    // Selection
    select: Ie.select,
    clear: Ie.clear,
    removeLastValue: Ie.removeLastValue,
    // Menu
    openMenu: q.openMenu,
    closeMenu: q.closeMenu,
    toggleMenu: q.toggleMenu,
    toggleExpanded: q.toggleExpanded,
    shouldExpand: q.shouldExpand,
    shouldShowOptionInMenu: q.shouldShowOptionInMenu,
    setScrollToOptionHandler: q.setScrollToOptionHandler,
    // Highlighting
    setCurrentHighlightedOption: q.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: q.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: q.highlightFirstOption,
    highlightPrevOption: q.highlightPrevOption,
    highlightNextOption: q.highlightNextOption,
    highlightLastOption: q.highlightLastOption,
    // Search
    handleLocalSearch: Ee,
    handleRemoteSearch: ge,
    getRemoteSearchEntry: Q.getRemoteSearchEntry,
    resetSearchQuery: r,
    // Async
    loadRootOptions: x,
    loadChildrenOptions: N,
    // Helpers
    initialize: _e,
    buildForestState: k,
    resetFlags: Ie.resetFlags,
    // DOM helpers
    getMenu: l,
    getControl: s,
    getInstanceId: o
  };
}
const an = /* @__PURE__ */ Symbol("vue-treeselect");
function ve() {
  const e = bn(an, null);
  if (!e)
    throw new Error("[Vue-Treeselect] This component must be used inside <Treeselect>.");
  return e;
}
const Mo = ["name", "value"], wo = /* @__PURE__ */ fe({
  __name: "HiddenFields",
  setup(e) {
    const n = ve(), t = n.props;
    function o(s) {
      return typeof s == "string" ? s : s != null && !Jn(s) ? JSON.stringify(s) : "";
    }
    const l = H(() => {
      if (!t.name || t.disabled || !n.hasValue.value)
        return [];
      let s = n.internalValue.value.map(o);
      return t.multiple && t.joinValues && (s = [s.join(t.delimiter)]), s;
    });
    return (s, v) => (b(!0), F(ie, null, Me(l.value, (a, d) => (b(), F("input", {
      key: `hidden-field-${d}`,
      type: "hidden",
      name: S(n).props.name,
      value: a
    }, null, 8, Mo))), 128));
  }
}), Ne = (e) => e.renderSlot(e.scope);
Ne.props = ["renderSlot", "scope"];
const Io = {
  key: 0,
  class: "vue-treeselect__input-container"
}, Lo = ["tabindex", "required", "value"], Do = ["tabindex"], dt = /* @__PURE__ */ fe({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = ve(), o = t.props, l = Z(null), s = Z(), v = Z(Ht), a = Z(t.trigger.searchQuery);
    let d = !1;
    ne(l, (N, w) => {
      N ? t.setInputElement(N) : w && t.getInput() === w && t.setInputElement(null);
    }, { flush: "sync" });
    const r = H(() => o.searchable), f = H(() => o.disabled), y = H(() => r.value && !f.value && o.multiple), i = H(() => ({
      width: y.value ? `${v.value}px` : void 0
    })), u = [
      J.ENTER,
      J.END,
      J.HOME,
      J.ARROW_LEFT,
      J.ARROW_UP,
      J.ARROW_RIGHT,
      J.ARROW_DOWN
    ], c = [
      J.HOME,
      J.END,
      J.ARROW_LEFT,
      J.ARROW_RIGHT
    ], O = () => {
      s.value && (v.value = Math.max(
        Ht,
        s.value.scrollWidth + 15
      ));
    }, E = () => {
      t.trigger.searchQuery = a.value;
    }, g = () => {
      a.value = "", L.cancel(), E();
    }, B = () => {
      !f.value && l.value && l.value.focus();
    }, C = () => {
      l.value?.blur();
    }, k = () => {
      t.trigger.isFocused = !0, o.openOnFocus && t.openMenu();
    }, h = (N) => {
      const w = t.getMenu();
      if (w && document.activeElement === w)
        return B();
      const z = N.relatedTarget;
      if (w && z && w.contains(z)) {
        t.trigger.isFocused = !1;
        return;
      }
      t.trigger.isFocused = !1, t.closeMenu();
    }, L = qn(
      E,
      o.searchDebounceDelay ?? io,
      { leading: !0, trailing: !0 }
    ), M = () => {
      a.value ? L() : (L.cancel(), E());
    }, $ = (N) => {
      a.value = N.target.value, !d && M();
    }, m = () => {
      d = !0;
    }, p = (N) => {
      d = !1, a.value = N.target.value, M();
    }, A = (N) => {
      const w = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey || d) && !(a.value.length && c.includes(w) && t.menu.isOpen)) {
        if (!t.menu.isOpen && u.includes(w))
          return N.preventDefault(), t.openMenu();
        switch (w) {
          case J.BACKSPACE: {
            o.backspaceRemoves && !a.value.length && t.removeLastValue();
            break;
          }
          case J.ENTER: {
            if (N.preventDefault(), t.menu.current === null) return;
            const z = t.getNode(t.menu.current);
            if (!z || !t.shouldShowOptionInMenu(z) || z.isBranch && o.disableBranchNodes) return;
            t.select(z);
            break;
          }
          case J.ESCAPE: {
            a.value.length ? g() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case J.END: {
            N.preventDefault(), t.highlightLastOption();
            break;
          }
          case J.HOME: {
            N.preventDefault(), t.highlightFirstOption();
            break;
          }
          case J.ARROW_LEFT: {
            const z = t.menu.current;
            if (z === null) break;
            const V = t.getNode(z);
            V && (V.isBranch && t.shouldExpand(V) ? (N.preventDefault(), t.toggleExpanded(V)) : !V.isRootNode && V.parentNode && (N.preventDefault(), t.setCurrentHighlightedOption(V.parentNode)));
            break;
          }
          case J.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case J.ARROW_RIGHT: {
            const z = t.menu.current;
            if (z === null) break;
            const V = t.getNode(z);
            V && V.isBranch && !t.shouldExpand(V) && (N.preventDefault(), t.toggleExpanded(V));
            break;
          }
          case J.ARROW_DOWN: {
            N.preventDefault(), t.highlightNextOption();
            break;
          }
          case J.DELETE: {
            o.deleteRemoves && !a.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, x = (N) => {
      a.value.length && N.stopPropagation();
    };
    return ne(() => t.trigger.searchQuery, (N) => {
      a.value = N;
    }), ne(a, () => {
      y.value && de(O);
    }), we(() => {
      L.cancel(), l.value && t.getInput() === l.value && t.setInputElement(null);
    }), n({
      clear: g,
      focus: B,
      blur: C
    }), (N, w) => r.value ? (b(), F("div", Io, [
      f.value ? ce("", !0) : (b(), F(ie, { key: 0 }, [
        Y("input", {
          ref_key: "inputRef",
          ref: l,
          class: "vue-treeselect__input",
          type: "text",
          autocomplete: "off",
          tabindex: S(o).tabIndex,
          required: S(o).required && !S(t).hasValue.value,
          value: a.value,
          style: Oe(i.value),
          onFocus: k,
          onInput: $,
          onCompositionstart: m,
          onCompositionend: p,
          onBlur: h,
          onKeydown: A,
          onMousedown: x
        }, null, 44, Lo),
        y.value ? (b(), F("div", {
          key: 0,
          ref_key: "sizerRef",
          ref: s,
          class: "vue-treeselect__sizer"
        }, U(a.value), 513)) : ce("", !0)
      ], 64))
    ])) : (b(), F("div", {
      key: 1,
      ref_key: "inputRef",
      ref: l,
      class: "vue-treeselect__input-container",
      tabindex: f.value ? void 0 : S(o).tabIndex,
      onFocus: k,
      onBlur: h,
      onKeydown: A
    }, null, 40, Do));
  }
}), ft = /* @__PURE__ */ fe({
  __name: "Placeholder",
  setup(e) {
    const n = ve(), t = H(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || !!n.trigger.searchQuery
    }));
    return (o, l) => (b(), F("div", {
      class: re(t.value)
    }, U(S(n).props.placeholder), 3));
  }
}), ko = {
  key: 0,
  class: "vue-treeselect__single-value"
}, Ao = /* @__PURE__ */ fe({
  __name: "SingleValue",
  setup(e) {
    const n = ve(), t = H(() => n.hasValue.value && !n.trigger.searchQuery), o = H(() => n.selectedNodes.value[0]);
    return (l, s) => (b(), F(ie, null, [
      t.value ? (b(), F("div", ko, [
        S(n).slots["value-label"] ? (b(), W(S(Ne), {
          key: 0,
          "render-slot": S(n).slots["value-label"],
          scope: { node: o.value }
        }, null, 8, ["render-slot", "scope"])) : (b(), F(ie, { key: 1 }, [
          oe(U(o.value.label), 1)
        ], 64))
      ])) : ce("", !0),
      ue(ft),
      ue(dt)
    ], 64));
  }
}), Bo = {
  name: "vue-treeselect--x"
}, cn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, $o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Fo(e, n, t, o, l, s) {
  return b(), F("svg", $o, [...n[0] || (n[0] = [
    Y("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const un = /* @__PURE__ */ cn(Bo, [["render", Fo]]), Ho = { class: "vue-treeselect__multi-value-item-container" }, Vo = { class: "vue-treeselect__multi-value-label" }, zo = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, jt = /* @__PURE__ */ fe({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = ve(), o = H(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), l = Be(function() {
      t.select(n.node);
    });
    return (s, v) => (b(), F("div", Ho, [
      Y("div", {
        class: re(o.value),
        onMousedown: v[0] || (v[0] = //@ts-ignore
        (...a) => S(l) && S(l)(...a))
      }, [
        Y("span", Vo, [
          S(t).slots["value-label"] ? (b(), W(S(Ne), {
            key: 0,
            "render-slot": S(t).slots["value-label"],
            scope: { node: e.node }
          }, null, 8, ["render-slot", "scope"])) : (b(), F(ie, { key: 1 }, [
            oe(U(e.node.label), 1)
          ], 64))
        ]),
        Y("span", zo, [
          ue(un)
        ])
      ], 34)
    ]));
  }
}), Po = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Wo = { class: "vue-treeselect__limit-tip-text" }, qo = {
  key: 1,
  class: "vue-treeselect__multi-value"
}, jo = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Uo = { class: "vue-treeselect__limit-tip-text" }, Qo = 50, Go = /* @__PURE__ */ fe({
  __name: "MultiValue",
  setup(e) {
    const n = ve(), t = n.props, o = H(() => n.internalValue.value.slice(0, t.limit).map((a) => n.getNode(a)).filter((a) => a !== null)), l = Z(!0);
    On(() => {
      n.trigger.isFocused || (l.value = o.value.length <= Qo);
    });
    const s = H(() => n.internalValue.value.length > (t.limit ?? 1 / 0)), v = H(() => {
      const a = n.internalValue.value.length - (t.limit ?? 1 / 0);
      return t.limitText ? t.limitText(a) : "";
    });
    return (a, d) => l.value ? (b(), W(En, {
      key: 0,
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: le(() => [
        (b(!0), F(ie, null, Me(o.value, (r) => (b(), W(jt, {
          key: `multi-value-item-${r.id}`,
          node: r
        }, null, 8, ["node"]))), 128)),
        s.value ? (b(), F("div", Po, [
          Y("span", Wo, U(v.value), 1)
        ])) : ce("", !0),
        ue(ft, { key: "placeholder" }),
        ue(dt, { key: "input" })
      ]),
      _: 1
    })) : (b(), F("div", qo, [
      (b(!0), F(ie, null, Me(o.value, (r) => (b(), W(jt, {
        key: `multi-value-item-${r.id}`,
        node: r
      }, null, 8, ["node"]))), 128)),
      s.value ? (b(), F("div", jo, [
        Y("span", Uo, U(v.value), 1)
      ])) : ce("", !0),
      ue(ft, { key: "placeholder" }),
      ue(dt, { key: "input" })
    ]));
  }
}), Ko = {
  name: "vue-treeselect--arrow"
}, Yo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Xo(e, n, t, o, l, s) {
  return b(), F("svg", Yo, [...n[0] || (n[0] = [
    Y("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const Jo = /* @__PURE__ */ cn(Ko, [["render", Xo]]), Zo = ["title"], el = /* @__PURE__ */ fe({
  __name: "Control",
  setup(e) {
    const n = ve(), t = n.props, o = Z(), l = Z();
    xe(() => {
      n.setControlElement(o.value || null), n.setValueContainerElement(l.value || null);
    });
    let s = !1;
    we(() => {
      s = !0, n.setControlElement(null), n.setValueContainerElement(null);
    });
    const v = H(() => n.hasValue.value && n.internalValue.value.some((u) => {
      const c = n.getNode(u);
      return c && !c.isDisabled;
    })), a = H(() => t.clearable && !t.disabled && n.hasValue.value && (v.value || t.allowClearingDisabled)), d = H(() => t.alwaysOpen ? !n.menu.isOpen : !0), r = H(() => t.multiple ? t.clearAllText : t.clearValueText), f = H(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.isOpen
    })), y = Be(function(u) {
      u.stopPropagation(), u.preventDefault();
      const c = t.beforeClearAll ? t.beforeClearAll() : !0, O = (E) => {
        E && !s && n.clear();
      };
      on(c) ? c.then(O) : setTimeout(() => O(c), 0);
    }), i = Be(function(u) {
      u.preventDefault(), u.stopPropagation(), n.focusInput(), n.toggleMenu();
    });
    return (u, c) => (b(), F("div", {
      ref_key: "controlRef",
      ref: o,
      class: "vue-treeselect__control",
      onMousedown: c[2] || (c[2] = //@ts-ignore
      (...O) => S(n).handleMouseDown && S(n).handleMouseDown(...O))
    }, [
      Y("div", {
        ref_key: "valueContainerRef",
        ref: l,
        class: "vue-treeselect__value-container"
      }, [
        S(n).single.value ? (b(), W(Ao, { key: 0 })) : (b(), W(Go, { key: 1 }))
      ], 512),
      a.value ? (b(), F("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: r.value,
        onMousedown: c[0] || (c[0] = //@ts-ignore
        (...O) => S(y) && S(y)(...O))
      }, [
        ue(un, { class: "vue-treeselect__x" })
      ], 40, Zo)) : ce("", !0),
      d.value ? (b(), F("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: c[1] || (c[1] = //@ts-ignore
        (...O) => S(i) && S(i)(...O))
      }, [
        ue(Jo, {
          class: re(f.value)
        }, null, 8, ["class"])
      ], 32)) : ce("", !0)
    ], 544));
  }
}), tl = { class: "vue-treeselect__icon-container" }, ae = /* @__PURE__ */ fe({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (b(), F("div", {
      class: re(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      Y("div", tl, [
        Y("span", {
          class: re(`vue-treeselect__icon-${e.icon}`)
        }, null, 2)
      ]),
      Y("span", {
        class: re(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
      }, [
        Nn(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), nl = ["data-id"], ol = {
  key: 0,
  class: "vue-treeselect__option-arrow-container"
}, ll = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, sl = { class: "vue-treeselect__label-container" }, rl = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, al = {
  key: 2,
  class: "vue-treeselect__label"
}, il = {
  key: 0,
  class: "vue-treeselect__count"
}, Ut = /* @__PURE__ */ fe({
  name: "vue-treeselect--option",
  __name: "Option",
  props: {
    node: {},
    level: {}
  },
  setup(e) {
    const n = e, t = ve(), o = t.props, l = () => {
      const a = t.getCheckedState(n.node);
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": a === sn,
        "vue-treeselect__checkbox--indeterminate": a === ln,
        "vue-treeselect__checkbox--unchecked": a === vt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }, s = () => n.node.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed.value : !!o.showCount), v = () => {
      if (!s()) return NaN;
      const { node: a } = n, d = o.showCountOf || "ALL_CHILDREN";
      if (t.localSearch.active) {
        const r = t.localSearch.countMap[a.id];
        return r ? r[d] : 0;
      }
      return a.count ? a.count[d] : 0;
    };
    return (a, d) => (b(), F("div", {
      class: re(`vue-treeselect__list-item vue-treeselect__indent-level-${e.level}`)
    }, [
      Y("div", {
        class: re({
          "vue-treeselect__option": !0,
          "vue-treeselect__option--disabled": e.node.isDisabled,
          "vue-treeselect__option--selected": S(t).isSelected(e.node),
          "vue-treeselect__option--highlight": e.node.isHighlighted,
          "vue-treeselect__option--matched": S(t).localSearch.active && e.node.isMatched
        }),
        "data-id": e.node.id
      }, [
        e.node.isBranch && !S(t).shouldFlattenOptions.value ? (b(), F("div", ol, [
          (b(), F("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 292.362 292.362",
            class: re({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": S(t).shouldExpand(e.node)
            })
          }, [...d[0] || (d[0] = [
            Y("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
          ])], 2))
        ])) : S(t).hasBranchNodes.value && !S(t).shouldFlattenOptions.value ? (b(), F("div", ll, "   ")) : ce("", !0),
        Y("div", sl, [
          !S(t).single.value && !(S(o).disableBranchNodes && e.node.isBranch) ? (b(), F("div", rl, [
            Y("span", {
              class: re(l())
            }, [...d[1] || (d[1] = [
              Y("span", { class: "vue-treeselect__check-mark" }, null, -1),
              Y("span", { class: "vue-treeselect__minus-mark" }, null, -1)
            ])], 2)
          ])) : ce("", !0),
          S(t).slots["option-label"] ? (b(), W(S(Ne), {
            key: 1,
            "render-slot": S(t).slots["option-label"],
            scope: {
              node: e.node,
              shouldShowCount: s(),
              count: v(),
              labelClassName: "vue-treeselect__label",
              countClassName: "vue-treeselect__count"
            }
          }, null, 8, ["render-slot", "scope"])) : (b(), F("label", al, [
            oe(U(e.node.label) + " ", 1),
            s() ? (b(), F("span", il, "(" + U(v()) + ")", 1)) : ce("", !0)
          ]))
        ])
      ], 10, nl)
    ], 2));
  }
}), cl = ["title", "data-id"], ul = ["title", "data-id"], Qt = 8, dl = 32, fl = 3, hl = 100, vl = 25, pl = 1e3, Gt = /* @__PURE__ */ fe({
  __name: "OptionList",
  props: {
    virtual: { type: Boolean }
  },
  setup(e, { expose: n }) {
    const t = e, o = ve(), l = o.props, s = Z(null), v = Z(0), a = Z(0), d = Z(null), r = o.menuRows, f = H(() => l.optionHeight || d.value || dl), y = () => Math.max(hl, Math.ceil((l.maxHeight || 300) / 20) * fl), i = Z(t.virtual ? 1 / 0 : y());
    let u = 200, c = null, O = !1;
    const E = () => i.value >= r.value.length, g = () => {
      c || O || E() || (c = setTimeout(B, 0));
    };
    async function B() {
      if (c = null, O || E()) return;
      const R = performance.now();
      i.value = Math.min(r.value.length, i.value + u), await de();
      const T = Math.max(1, performance.now() - R);
      u = Math.min(2e3, Math.max(50, Math.round(u * vl / T))), g();
    }
    const C = (R) => {
      R < i.value || (i.value = Math.min(r.value.length, R + 1 + u), g());
    };
    t.virtual || ne(r, (R, T) => {
      const D = i.value >= T.length, X = R.length - T.length;
      D && X <= Math.max(pl, T.length) ? i.value = R.length : i.value = Math.max(y(), Math.min(i.value, T.length)), g();
    });
    const k = H(() => {
      const R = r.value.length;
      if (!t.virtual) return { start: 0, end: Math.min(R, i.value) };
      const T = f.value, D = o.getMenu()?.clientHeight || l.maxHeight || 300, X = Math.max(0, v.value - a.value), ee = Math.max(0, Math.min(Math.floor(X / T), R) - Qt), _ = Math.min(R, Math.ceil((X + D) / T) + Qt);
      return { start: ee, end: _ };
    }), h = H(() => {
      const { start: R, end: T } = k.value;
      return R === 0 && T === r.value.length ? r.value : r.value.slice(R, T);
    }), L = H(() => t.virtual ? 0 : Math.max(0, r.value.length - i.value) * f.value), M = H(() => t.virtual ? { position: "relative", height: `${r.value.length * f.value}px` } : void 0), $ = H(() => t.virtual ? { transform: `translateY(${k.value.start * f.value}px)` } : void 0), m = () => {
      const R = s.value;
      if (R && (a.value = R.offsetTop, !l.optionHeight)) {
        const T = R.querySelector(".vue-treeselect__list-item");
        T && T.offsetHeight > 0 && (d.value = T.offsetHeight);
      }
    }, p = () => {
      const R = o.getMenu();
      if (R) {
        if (s.value && (a.value = s.value.offsetTop), t.virtual)
          v.value = R.scrollTop;
        else if (!E()) {
          const T = R.scrollTop + R.clientHeight - a.value;
          C(Math.ceil(T / f.value));
        }
      }
    }, A = (R) => {
      const T = o.getMenu();
      if (!T) return;
      if (!t.virtual) {
        const _ = () => s.value?.querySelector(`.vue-treeselect__option[data-id="${Kt(String(R.id))}"]`), P = _();
        if (P) return it(T, P);
        const j = r.value.findIndex((te) => te.type === "option" && te.node === R);
        if (j === -1) return;
        C(j), de(() => {
          const te = _();
          te && it(T, te);
        });
        return;
      }
      const D = r.value.findIndex((_) => _.type === "option" && _.node === R);
      if (D === -1) return;
      const X = f.value, ee = a.value + D * X;
      ee < T.scrollTop ? T.scrollTop = ee : ee + X > T.scrollTop + T.clientHeight && (T.scrollTop = ee + X - T.clientHeight), v.value = T.scrollTop;
    };
    xe(() => {
      o.setScrollToOptionHandler(A), p(), de(m), g();
    }), we(() => {
      O = !0, c && clearTimeout(c), o.setScrollToOptionHandler(null);
    });
    const x = (R) => {
      const T = R?.getAttribute("data-id");
      return T == null ? null : o.forest.nodeMap[T] || null;
    }, N = (R) => {
      if (R.button !== 0) return;
      const T = R.target, D = T.closest(".vue-treeselect__retry");
      if (D) {
        const _ = x(D);
        _ && o.loadChildrenOptions(_);
        return;
      }
      const X = T.closest(".vue-treeselect__option"), ee = x(X);
      ee && (T.closest(".vue-treeselect__option-arrow-container") ? o.toggleExpanded(ee) : T.closest(".vue-treeselect__label-container") && (ee.isBranch && l.disableBranchNodes ? o.toggleExpanded(ee) : o.select(ee)));
    };
    let w = null;
    const z = (R) => {
      const T = R.target.closest(".vue-treeselect__option");
      if (!T) {
        w = null;
        return;
      }
      if (T === w) return;
      w = T;
      const D = x(T);
      D && o.setCurrentHighlightedOption(D, !1);
    }, V = () => {
      w = null;
    };
    return n({
      handleScroll: p
    }), (R, T) => (b(), F("div", {
      ref_key: "listRef",
      ref: s,
      class: re(e.virtual ? "vue-treeselect__list vue-treeselect__list--virtual" : "vue-treeselect__list"),
      style: Oe(M.value),
      onMousedown: N,
      onMouseover: z,
      onMouseleave: V
    }, [
      e.virtual ? (b(), F("div", {
        key: 0,
        style: Oe($.value)
      }, [
        (b(!0), F(ie, null, Me(h.value, (D) => (b(), F(ie, {
          key: D.key
        }, [
          D.type === "option" ? (b(), W(Ut, {
            key: 0,
            node: D.node,
            level: D.level
          }, null, 8, ["node", "level"])) : (b(), F("div", {
            key: 1,
            class: re(`vue-treeselect__list-item vue-treeselect__indent-level-${D.level}`)
          }, [
            D.type === "no-children" ? (b(), W(ae, {
              key: 0,
              type: "no-children",
              icon: "warning"
            }, {
              default: le(() => [
                oe(U(S(l).noChildrenText), 1)
              ]),
              _: 1
            })) : D.type === "loading" ? (b(), W(ae, {
              key: 1,
              type: "loading",
              icon: "loader"
            }, {
              default: le(() => [
                oe(U(S(l).loadingText), 1)
              ]),
              _: 1
            })) : (b(), W(ae, {
              key: 2,
              type: "error",
              icon: "error"
            }, {
              default: le(() => [
                oe(U(D.node.childrenStates.loadingError) + " ", 1),
                Y("a", {
                  class: "vue-treeselect__retry",
                  title: S(l).retryTitle,
                  "data-id": D.node.id
                }, U(S(l).retryText), 9, cl)
              ]),
              _: 2
            }, 1024))
          ], 2))
        ], 64))), 128))
      ], 4)) : (b(), F(ie, { key: 1 }, [
        (b(!0), F(ie, null, Me(h.value, (D) => (b(), F(ie, {
          key: D.key
        }, [
          D.type === "option" ? (b(), W(Ut, {
            key: 0,
            node: D.node,
            level: D.level
          }, null, 8, ["node", "level"])) : (b(), F("div", {
            key: 1,
            class: re(`vue-treeselect__list-item vue-treeselect__indent-level-${D.level}`)
          }, [
            D.type === "no-children" ? (b(), W(ae, {
              key: 0,
              type: "no-children",
              icon: "warning"
            }, {
              default: le(() => [
                oe(U(S(l).noChildrenText), 1)
              ]),
              _: 1
            })) : D.type === "loading" ? (b(), W(ae, {
              key: 1,
              type: "loading",
              icon: "loader"
            }, {
              default: le(() => [
                oe(U(S(l).loadingText), 1)
              ]),
              _: 1
            })) : (b(), W(ae, {
              key: 2,
              type: "error",
              icon: "error"
            }, {
              default: le(() => [
                oe(U(D.node.childrenStates.loadingError) + " ", 1),
                Y("a", {
                  class: "vue-treeselect__retry",
                  title: S(l).retryTitle,
                  "data-id": D.node.id
                }, U(S(l).retryText), 9, ul)
              ]),
              _: 2
            }, 1024))
          ], 2))
        ], 64))), 128)),
        L.value ? (b(), F("div", {
          key: 0,
          style: Oe({ height: `${L.value}px` })
        }, null, 4)) : ce("", !0)
      ], 64))
    ], 38));
  }
}), gl = ["title"], ml = ["title"], dn = /* @__PURE__ */ fe({
  __name: "Menu",
  setup(e, { expose: n }) {
    const t = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, o = ve(), l = o.props, s = Z(null), v = Z(null), a = Z(null);
    ne(s, ($, m) => {
      $ ? o.setMenuElement($) : m && o.getMenu() === m && o.setMenuElement(null);
    }, { flush: "sync" });
    const d = () => {
      a.value?.handleScroll();
    };
    let r = null, f = null;
    const y = H(() => ({
      maxHeight: l.maxHeight + "px"
    })), i = H(() => ({
      zIndex: l.appendToBody ? void 0 : l.zIndex
    })), u = H(() => o.rootOptionsStates.isLoaded && o.forest.normalizedOptions.length === 0), c = H(() => o.getRemoteSearchEntry()), O = H(() => o.trigger.searchQuery === "" && !l.defaultOptions), E = H(() => {
      if (O.value) return !1;
      const $ = c.value;
      return $.isLoaded && $.options.length === 0;
    }), g = () => {
      if (!o.menu.isOpen) return;
      const $ = o.getMenu(), m = o.getControl();
      if (!$ || !m) return;
      const p = $.getBoundingClientRect(), A = m.getBoundingClientRect(), x = p.height, N = window.innerHeight, w = A.top, z = window.innerHeight - A.bottom, V = A.top >= 0 && A.top <= N || A.top < 0 && A.bottom > 0, R = z > x + Vt, T = w > x + Vt;
      V ? l.openDirection && l.openDirection !== "auto" ? o.menu.placement = t[l.openDirection] : R || !T ? o.menu.placement = "bottom" : o.menu.placement = "top" : o.closeMenu();
    }, B = () => {
      const $ = o.getMenu();
      r || !$ || (r = {
        remove: tn($, g)
      });
    }, C = () => {
      const $ = o.getControl();
      f || !$ || (f = {
        remove: nn($, g)
      });
    }, k = () => {
      r && (r.remove(), r = null);
    }, h = () => {
      f && (f.remove(), f = null);
    }, L = () => {
      g(), B(), C();
    }, M = () => {
      k(), h();
    };
    return ne(
      () => o.menu.isOpen,
      ($) => {
        $ ? de(L) : M();
      }
    ), xe(() => {
      o.menu.isOpen && de(L);
    }), we(() => {
      M(), s.value && o.getMenu() === s.value && o.setMenuElement(null);
    }), n({
      menuElement: s,
      menuContainerElement: v
    }), ($, m) => (b(), F("div", {
      ref_key: "menuContainerRef",
      ref: v,
      class: "vue-treeselect__menu-container",
      style: Oe(i.value)
    }, [
      ue(xn, { name: "vue-treeselect__menu--transition" }, {
        default: le(() => [
          S(o).menu.isOpen ? (b(), F("div", {
            key: 0,
            ref_key: "menuRef",
            ref: s,
            class: "vue-treeselect__menu",
            style: Oe(y.value),
            onMousedown: m[2] || (m[2] = //@ts-ignore
            (...p) => S(o).handleMouseDown && S(o).handleMouseDown(...p)),
            onScrollPassive: d
          }, [
            S(o).slots["before-list"] ? (b(), W(S(Ne), {
              key: 0,
              "render-slot": S(o).slots["before-list"]
            }, null, 8, ["render-slot"])) : ce("", !0),
            S(l).async ? (b(), F(ie, { key: 1 }, [
              O.value ? (b(), W(ae, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: le(() => [
                  oe(U(S(l).searchPromptText), 1)
                ]),
                _: 1
              })) : c.value.isLoading ? (b(), W(ae, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: le(() => [
                  oe(U(S(l).loadingText), 1)
                ]),
                _: 1
              })) : c.value.loadingError ? (b(), W(ae, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: le(() => [
                  oe(U(c.value.loadingError) + " ", 1),
                  Y("a", {
                    class: "vue-treeselect__retry",
                    title: S(l).retryTitle,
                    onClick: m[0] || (m[0] = //@ts-ignore
                    (...p) => S(o).handleRemoteSearch && S(o).handleRemoteSearch(...p))
                  }, U(S(l).retryText), 9, gl)
                ]),
                _: 1
              })) : E.value ? (b(), W(ae, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: le(() => [
                  oe(U(S(l).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), W(Gt, {
                ref_key: "optionListRef",
                ref: a,
                key: S(l).virtualScroll ? "virtual" : "list",
                virtual: S(l).virtualScroll
              }, null, 8, ["virtual"]))
            ], 64)) : (b(), F(ie, { key: 2 }, [
              S(o).rootOptionsStates.isLoading ? (b(), W(ae, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: le(() => [
                  oe(U(S(l).loadingText), 1)
                ]),
                _: 1
              })) : S(o).rootOptionsStates.loadingError ? (b(), W(ae, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: le(() => [
                  oe(U(S(o).rootOptionsStates.loadingError) + " ", 1),
                  Y("a", {
                    class: "vue-treeselect__retry",
                    title: S(l).retryTitle,
                    onClick: m[1] || (m[1] = //@ts-ignore
                    (...p) => S(o).loadRootOptions && S(o).loadRootOptions(...p))
                  }, U(S(l).retryText), 9, ml)
                ]),
                _: 1
              })) : u.value ? (b(), W(ae, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: le(() => [
                  oe(U(S(l).noOptionsText), 1)
                ]),
                _: 1
              })) : S(o).localSearch.active && S(o).localSearch.noResults ? (b(), W(ae, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: le(() => [
                  oe(U(S(l).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), W(Gt, {
                ref_key: "optionListRef",
                ref: a,
                key: S(l).virtualScroll ? "virtual" : "list",
                virtual: S(l).virtualScroll
              }, null, 8, ["virtual"]))
            ], 64)),
            S(o).slots["after-list"] ? (b(), W(S(Ne), {
              key: 3,
              "render-slot": S(o).slots["after-list"]
            }, null, 8, ["render-slot"])) : ce("", !0)
          ], 36)) : ce("", !0)
        ]),
        _: 1
      })
    ], 4));
  }
}), _l = ["data-instance-id", "dir"], yl = /* @__PURE__ */ fe({
  __name: "MenuPortal",
  setup(e) {
    const n = ve(), t = n.props, o = Z(null), l = Z(void 0), s = () => {
      const u = n.getControl();
      u && (l.value = u.closest("[dir]")?.getAttribute("dir") || getComputedStyle(u).direction || void 0);
    }, v = Z(null);
    let a = null, d = null;
    const r = () => {
      const u = o.value, c = n.getControl();
      !u || !c || (u.style.width = c.getBoundingClientRect().width + "px");
    }, f = () => {
      const u = o.value, c = n.getControl(), O = v.value?.menuContainerElement;
      if (!u || !c || !O) return;
      const E = c.getBoundingClientRect(), g = u.getBoundingClientRect(), B = n.menu.placement === "bottom" ? E.height : 0, C = Math.round(E.left - g.left) + "px", k = Math.round(E.top - g.top + B) + "px";
      O.style.transform = `translate(${C}, ${k})`;
    }, y = () => {
      s(), r(), f();
      const u = n.getControl();
      u && (a || (a = {
        remove: nn(u, f)
      }), d || (d = {
        remove: tn(u, () => {
          r(), f();
        })
      }));
    }, i = () => {
      a?.remove(), a = null, d?.remove(), d = null;
    };
    return ne(() => n.menu.isOpen, (u) => {
      u ? de(y) : i();
    }), ne(() => n.menu.placement, f), xe(() => {
      s(), n.menu.isOpen && de(y);
    }), we(i), (u, c) => (b(), W(Tn, { to: "body" }, [
      Y("div", {
        ref_key: "portalRef",
        ref: o,
        class: re(["vue-treeselect__portal-target", S(n).wrapperClass.value]),
        style: Oe({ zIndex: S(t).zIndex }),
        "data-instance-id": S(n).getInstanceId(),
        dir: l.value
      }, [
        ue(dn, {
          ref_key: "menuRef",
          ref: v
        }, null, 512)
      ], 14, _l)
    ]));
  }
}), bl = /* @__PURE__ */ fe({
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
    const o = e, l = t, s = Cn(), v = Z(), a = Le(null), d = Le(null), r = Le(null), f = Le(null), y = `${Rn()}$$`, i = Z(!1);
    xe(() => {
      i.value = !0;
    });
    const u = () => o.instanceId ?? y, c = () => d.value, O = () => f.value, E = () => a.value, g = () => {
      E()?.focus();
    }, B = () => {
      E()?.blur();
    }, C = (p) => {
      const A = p.target;
      !v.value || v.value.contains(A) || c()?.contains(A) || (B(), h.closeMenu());
    }, h = Ro(o, l, {
      getInstanceId: u,
      getMenuElement: c,
      getControlElement: O,
      toggleClickOutsideEvent: (p) => {
        p ? document.addEventListener("mousedown", C, !1) : document.removeEventListener("mousedown", C, !1);
      },
      focusInput: g
    }), L = (p) => !!p.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])') && !p.closest(".vue-treeselect__input, .vue-treeselect__input-container"), M = Be(function(p) {
      const A = p.target;
      if (L(A) || (p.preventDefault(), o.disabled)) return;
      r.value?.contains(A) && (!h.menu.isOpen && (o.openOnClick || h.trigger.isFocused) ? h.openMenu() : h.menu.isOpen && !o.searchable && h.closeMenu()), h.resetFlags() ? B() : g();
    }), $ = H(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": h.single.value,
      "vue-treeselect--multi": o.multiple,
      "vue-treeselect--searchable": o.searchable,
      "vue-treeselect--disabled": o.disabled,
      "vue-treeselect--focused": h.trigger.isFocused,
      "vue-treeselect--has-value": h.hasValue.value,
      "vue-treeselect--open": h.menu.isOpen,
      "vue-treeselect--open-above": h.menu.placement === "top",
      "vue-treeselect--open-below": h.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": o.disableBranchNodes,
      "vue-treeselect--append-to-body": o.appendToBody
    })), m = {
      ...h,
      props: o,
      slots: s,
      wrapperClass: $,
      setInputElement: (p) => {
        a.value = p;
      },
      setMenuElement: (p) => {
        d.value = p;
      },
      setValueContainerElement: (p) => {
        r.value = p;
      },
      setControlElement: (p) => {
        f.value = p;
      },
      getInput: E,
      focusInput: g,
      blurInput: B,
      handleMouseDown: M
    };
    return Mn(an, m), n({
      // State
      forest: h.forest,
      menu: h.menu,
      trigger: h.trigger,
      localSearch: h.localSearch,
      selectedNodes: h.selectedNodes,
      internalValue: h.internalValue,
      // Node methods
      getNode: h.getNode,
      isSelected: h.isSelected,
      // Traversal
      traverseAllNodesDFS: h.traverseAllNodesDFS,
      traverseAllNodesByIndex: h.traverseAllNodesByIndex,
      traverseDescendantsBFS: h.traverseDescendantsBFS,
      traverseDescendantsDFS: h.traverseDescendantsDFS,
      // Menu
      openMenu: h.openMenu,
      closeMenu: h.closeMenu,
      toggleMenu: h.toggleMenu,
      toggleExpanded: h.toggleExpanded,
      getMenu: h.getMenu,
      getControl: h.getControl,
      // Selection
      select: h.select,
      clear: h.clear,
      removeLastValue: h.removeLastValue,
      // Value
      getValue: h.getValue,
      // Options
      initialize: h.initialize,
      loadRootOptions: h.loadRootOptions,
      // Focus
      focusInput: g,
      blurInput: B,
      getInput: E
    }), (p, A) => (b(), F("div", {
      ref_key: "wrapper",
      ref: v,
      class: re($.value)
    }, [
      ue(wo),
      ue(el),
      e.appendToBody && i.value ? (b(), W(yl, { key: 0 })) : (b(), W(dn, { key: 1 }))
    ], 2));
  }
});
export {
  At as ALL,
  Ft as ALL_WITH_INDETERMINATE,
  ao as ASYNC_SEARCH,
  Bt as BRANCH_PRIORITY,
  sn as CHECKED,
  ln as INDETERMINATE,
  $t as LEAF_PRIORITY,
  ro as LOAD_CHILDREN_OPTIONS,
  so as LOAD_ROOT_OPTIONS,
  bl as Treeselect,
  vt as UNCHECKED,
  bl as default
};
