import { reactive as ue, computed as T, nextTick as ne, ref as te, watch as W, onMounted as be, onUnmounted as Se, readonly as pe, toRef as me, defineComponent as K, inject as Z, openBlock as y, createElementBlock as A, Fragment as re, renderList as ie, unref as R, withDirectives as un, createElementVNode as z, normalizeStyle as Ge, vModelText as cn, toDisplayString as H, createCommentVNode as Y, normalizeClass as G, useSlots as Ze, createBlock as $, resolveDynamicComponent as et, createTextVNode as Q, createVNode as X, TransitionGroup as dn, withCtx as j, renderSlot as Ke, resolveComponent as fn, Transition as Xe, createApp as hn, h as lt, provide as at } from "vue";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Re, it;
function vn() {
  if (it) return Re;
  it = 1;
  function e() {
  }
  return Re = e, Re;
}
var pn = vn();
const mn = /* @__PURE__ */ ce(pn), ge = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  mn
) : function(n, t) {
  if (!n()) {
    const r = ["[Vue-Treeselect Warning]"].concat(t());
    console.error(...r);
  }
};
function oe(e) {
  return function(t, ...r) {
    t.type === "mousedown" && t.button === 0 && e.call(this, t, ...r);
  };
}
function _n(e, n) {
  const t = e.getBoundingClientRect(), r = n.getBoundingClientRect(), o = n.offsetHeight / 3;
  r.bottom + o > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + o,
    e.scrollHeight
  ) : r.top - o < t.top && (e.scrollTop = Math.max(n.offsetTop - o, 0));
}
var Le, ut;
function zt() {
  if (ut) return Le;
  ut = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return Le = e, Le;
}
var Ce, ct;
function gn() {
  if (ct) return Ce;
  ct = 1;
  var e = typeof _e == "object" && _e && _e.Object === Object && _e;
  return Ce = e, Ce;
}
var De, dt;
function Pt() {
  if (dt) return De;
  dt = 1;
  var e = gn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return De = t, De;
}
var Ae, ft;
function yn() {
  if (ft) return Ae;
  ft = 1;
  var e = Pt(), n = function() {
    return e.Date.now();
  };
  return Ae = n, Ae;
}
var Ie, ht;
function On() {
  if (ht) return Ie;
  ht = 1;
  var e = /\s/;
  function n(t) {
    for (var r = t.length; r-- && e.test(t.charAt(r)); )
      ;
    return r;
  }
  return Ie = n, Ie;
}
var Me, vt;
function bn() {
  if (vt) return Me;
  vt = 1;
  var e = On(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return Me = t, Me;
}
var ke, pt;
function qt() {
  if (pt) return ke;
  pt = 1;
  var e = Pt(), n = e.Symbol;
  return ke = n, ke;
}
var Be, mt;
function Sn() {
  if (mt) return Be;
  mt = 1;
  var e = qt(), n = Object.prototype, t = n.hasOwnProperty, r = n.toString, o = e ? e.toStringTag : void 0;
  function s(d) {
    var f = t.call(d, o), l = d[o];
    try {
      d[o] = void 0;
      var u = !0;
    } catch {
    }
    var a = r.call(d);
    return u && (f ? d[o] = l : delete d[o]), a;
  }
  return Be = s, Be;
}
var Fe, _t;
function En() {
  if (_t) return Fe;
  _t = 1;
  var e = Object.prototype, n = e.toString;
  function t(r) {
    return n.call(r);
  }
  return Fe = t, Fe;
}
var Ve, gt;
function Nn() {
  if (gt) return Ve;
  gt = 1;
  var e = qt(), n = Sn(), t = En(), r = "[object Null]", o = "[object Undefined]", s = e ? e.toStringTag : void 0;
  function d(f) {
    return f == null ? f === void 0 ? o : r : s && s in Object(f) ? n(f) : t(f);
  }
  return Ve = d, Ve;
}
var $e, yt;
function Tn() {
  if (yt) return $e;
  yt = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return $e = e, $e;
}
var He, Ot;
function wn() {
  if (Ot) return He;
  Ot = 1;
  var e = Nn(), n = Tn(), t = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || n(o) && e(o) == t;
  }
  return He = r, He;
}
var ze, bt;
function Wt() {
  if (bt) return ze;
  bt = 1;
  var e = bn(), n = zt(), t = wn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, d = /^0o[0-7]+$/i, f = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (t(u))
      return r;
    if (n(u)) {
      var a = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = n(a) ? a + "" : a;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var i = s.test(u);
    return i || d.test(u) ? f(u.slice(2), i ? 2 : 8) : o.test(u) ? r : +u;
  }
  return ze = l, ze;
}
var Pe, St;
function xn() {
  if (St) return Pe;
  St = 1;
  var e = zt(), n = yn(), t = Wt(), r = "Expected a function", o = Math.max, s = Math.min;
  function d(f, l, u) {
    var a, i, h, _, v, S, O = 0, E = !1, c = !1, g = !0;
    if (typeof f != "function")
      throw new TypeError(r);
    l = t(l) || 0, e(u) && (E = !!u.leading, c = "maxWait" in u, h = c ? o(t(u.maxWait) || 0, l) : h, g = "trailing" in u ? !!u.trailing : g);
    function m(C) {
      var k = a, x = i;
      return a = i = void 0, O = C, _ = f.apply(x, k), _;
    }
    function D(C) {
      return O = C, v = setTimeout(p, l), E ? m(C) : _;
    }
    function F(C) {
      var k = C - S, x = C - O, M = l - k;
      return c ? s(M, h - x) : M;
    }
    function B(C) {
      var k = C - S, x = C - O;
      return S === void 0 || k >= l || k < 0 || c && x >= h;
    }
    function p() {
      var C = n();
      if (B(C))
        return I(C);
      v = setTimeout(p, F(C));
    }
    function I(C) {
      return v = void 0, g && a ? m(C) : (a = i = void 0, _);
    }
    function b() {
      v !== void 0 && clearTimeout(v), O = 0, a = S = i = v = void 0;
    }
    function N() {
      return v === void 0 ? _ : I(n());
    }
    function L() {
      var C = n(), k = B(C);
      if (a = arguments, i = this, S = C, k) {
        if (v === void 0)
          return D(S);
        if (c)
          return clearTimeout(v), v = setTimeout(p, l), m(S);
      }
      return v === void 0 && (v = setTimeout(p, l)), _;
    }
    return L.cancel = b, L.flush = N, L;
  }
  return Pe = d, Pe;
}
var Rn = xn();
const Ln = /* @__PURE__ */ ce(Rn);
var Cn = (function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), s = r.appendChild(document.createElement("_")), d = void 0, f = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", s.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", s.style.width = s.style.height = "200%", e.appendChild(t), l(), a;
  function l() {
    u();
    var i = e.offsetWidth, h = e.offsetHeight;
    (i !== d || h !== f) && (d = i, f = h, o.style.width = i * 2 + "px", o.style.height = h * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: i, height: h })), r.addEventListener("scroll", l), t.addEventListener("scroll", l);
  }
  function u() {
    r.removeEventListener("scroll", l), t.removeEventListener("scroll", l);
  }
  function a() {
    u(), e.removeChild(t);
  }
});
function jt(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let ye;
const Oe = [], Dn = 100;
function An() {
  ye = setInterval(() => {
    Oe.forEach(Yt);
  }, Dn);
}
function In() {
  ye && (clearInterval(ye), ye = null);
}
function Yt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, s = n.offsetWidth, d = n.offsetHeight;
  (r !== s || o !== d) && (e.lastWidth = s, e.lastHeight = d, t({ width: s, height: d }));
}
function Mn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    jt(Oe, t), Oe.length || In();
  };
  return Oe.push(t), Yt(t), An(), r;
}
function Ut(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const d = (t ? Mn : Cn)(e, (...f) => {
    r || n(...f);
  });
  return r = !1, d;
}
function kn(e) {
  const n = [];
  let t = e.parentNode;
  for (; t && t.nodeName !== "BODY" && t.nodeType === document.ELEMENT_NODE; )
    Bn(t) && n.push(t), t = t.parentNode;
  return n.push(window), n;
}
function Bn(e) {
  const { overflow: n, overflowX: t, overflowY: r } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + r + t);
}
function Qt(e, n) {
  const t = kn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((r) => {
    r.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((o) => {
      o.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Fn(e) {
  return e !== e;
}
function Gt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var qe, Et;
function Vn() {
  if (Et) return qe;
  Et = 1;
  var e = Wt(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var s = o < 0 ? -1 : 1;
      return s * t;
    }
    return o === o ? o : 0;
  }
  return qe = r, qe;
}
var We, Nt;
function $n() {
  if (Nt) return We;
  Nt = 1;
  var e = Vn();
  function n(t) {
    var r = e(t), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return We = n, We;
}
var je, Tt;
function Hn() {
  if (Tt) return je;
  Tt = 1;
  var e = $n(), n = "Expected a function";
  function t(r, o) {
    var s;
    if (typeof o != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (s = o.apply(this, arguments)), r <= 1 && (o = void 0), s;
    };
  }
  return je = t, je;
}
var Ye, wt;
function zn() {
  if (wt) return Ye;
  wt = 1;
  var e = Hn();
  function n(t) {
    return e(2, t);
  }
  return Ye = n, Ye;
}
var Pn = zn();
const qn = /* @__PURE__ */ ce(Pn), ee = () => /* @__PURE__ */ Object.create(null);
var Ue, xt;
function Wn() {
  if (xt) return Ue;
  xt = 1;
  function e(n) {
    var t = n == null ? 0 : n.length;
    return t ? n[t - 1] : void 0;
  }
  return Ue = e, Ue;
}
var jn = Wn();
const Kt = /* @__PURE__ */ ce(jn);
function Xt(e, n) {
  return e.indexOf(n) !== -1;
}
function tt(e, n, t) {
  for (let r = 0, o = e.length; r < o; r++)
    if (n.call(t, e[r], r, e)) return e[r];
}
function Je(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
function Yn() {
  const e = (o, s) => {
    if (!o.isBranch) return;
    const d = o.children.slice();
    for (; d.length; ) {
      const f = d[0];
      f.isBranch && d.push(...f.children), s(f), d.shift();
    }
  }, n = (o, s) => {
    o.isBranch && o.children.forEach((d) => {
      n(d, s), s(d);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (o, s) => {
      o.forEach((d) => {
        n(d, s), s(d);
      });
    },
    traverseAllNodesByIndex: (o, s) => {
      const d = (f) => {
        f.children && f.children.forEach((l) => {
          s(l) !== !1 && l.isBranch && l.children && d(l);
        });
      };
      d({ children: o });
    }
  };
}
const se = null, nt = 0, Jt = 1, Zt = 2, Ee = "ALL_CHILDREN", Ne = "ALL_DESCENDANTS", Te = "LEAF_CHILDREN", we = "LEAF_DESCENDANTS", Jr = "LOAD_ROOT_OPTIONS", Zr = "LOAD_CHILDREN_OPTIONS", eo = "ASYNC_SEARCH", to = "ALL", no = "BRANCH_PRIORITY", ro = "LEAF_PRIORITY", oo = "ALL_WITH_INDETERMINATE", q = {
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
}, Un = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Rt = 5, Lt = 40;
function Qn(e) {
  const n = ue({
    normalizedOptions: [],
    nodeMap: ee(),
    checkedStateMap: ee(),
    selectedNodeIds: e(),
    selectedNodeMap: ee()
  });
  return {
    forest: n,
    buildForestState: (o, s, d, f) => {
      const l = ee();
      n.selectedNodeIds.forEach((a) => {
        l[a] = !0;
      }), n.selectedNodeMap = l;
      const u = ee();
      o.multiple && (d((a) => {
        u[a.id] = nt;
      }), s.forEach((a) => {
        u[a.id] = Zt, !o.flat && !o.disableBranchNodes && a.ancestors.forEach((i) => {
          f(i) || (u[i.id] = Jt);
        });
      })), n.checkedStateMap = u;
    },
    isSelected: (o) => !!o && n.selectedNodeMap[o.id] === !0
  };
}
function Gn() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Kn(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function Xn(e, n, t, r) {
  const o = (l) => ({
    ...l,
    ...e.normalizer ? e.normalizer(l, t.value) : {}
  }), s = (l) => {
    ge(
      () => !(l.id in n.nodeMap && !n.nodeMap[l.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(l.id)}. Their labels are "${n.nodeMap[l.id].label}" and "${l.label}" respectively.`
    );
  }, d = (l) => {
    ge(
      () => !(l.children === void 0 && l.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, f = (l, u, a) => {
    let i = u.map((h) => [o(h), h]).map(([h, _], v) => {
      s(h), d(h);
      const { id: S, label: O, children: E, isDefaultExpanded: c } = h, g = l === se, m = g ? 0 : l.level + 1, D = Array.isArray(E) || E === null, F = !D, B = !!h.isDisabled || !e.flat && !g && l.isDisabled, p = !!h.isNew, I = (e.matchKeys || ["label"]).reduce((L, C) => ({
        ...L,
        [C]: Kn(h[C]).toLocaleLowerCase()
      }), {}), b = g ? I.label : l.nestedSearchLabel + " " + I.label;
      n.nodeMap[S] = ee();
      const N = n.nodeMap[S];
      if (Object.assign(N, {
        id: S,
        label: O,
        level: m,
        ancestors: g ? [] : [l].concat(l.ancestors),
        index: (g ? [] : l.index).concat(v),
        parentNode: l,
        lowerCased: I,
        nestedSearchLabel: b,
        isDisabled: B,
        isNew: p,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: D,
        isLeaf: F,
        isRootNode: g,
        raw: _
      }), D) {
        const L = Array.isArray(E);
        Object.assign(N, {
          childrenStates: { ...Gn(), isLoaded: L },
          isExpanded: typeof c == "boolean" ? c : m < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [Ee]: 0,
            [Ne]: 0,
            [Te]: 0,
            [we]: 0
          },
          children: L ? f(N, E, a) : []
        }), c === !0 && N.ancestors.forEach((C) => {
          C.isExpanded = !0;
        }), !L && typeof e.loadOptions != "function" ? ge(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !L && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((L) => {
        L.count && L.count[Ne]++;
      }), F && N.ancestors.forEach((L) => {
        L.count && L.count[we]++;
      }), !g && l.count && (l.count[Ee] += 1, F && (l.count[Te] += 1), B && (l.hasDisabledDescendants = !0)), a && a[S]) {
        const L = a[S];
        N.isMatched = L.isMatched, N.showAllChildrenOnSearch = L.showAllChildrenOnSearch, N.isHighlighted = L.isHighlighted, L.isBranch && N.isBranch && (N.isExpanded = L.isExpanded, N.isExpandedOnSearch = L.isExpandedOnSearch, L.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = { ...L.childrenStates });
      }
      return N;
    });
    if (e.branchNodesFirst) {
      const h = i.filter((v) => v.isBranch), _ = i.filter((v) => v.isLeaf);
      i = h.concat(_);
    }
    return i;
  };
  return {
    normalize: f,
    enhancedNormalizer: o,
    checkDuplication: s,
    verifyNodeShape: d
  };
}
const Ct = "ALL", Dt = "BRANCH_PRIORITY", At = "LEAF_PRIORITY", It = "ALL_WITH_INDETERMINATE";
function en(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function Jn(e, n) {
  return e.level === n.level ? en(e, n) : e.level - n.level;
}
function Mt(e, n, t) {
  const r = ee();
  for (; e.length; ) {
    const o = e.shift(), s = t(o);
    s && (n.push(o), !s.isRootNode && (s.parentNode.id in r || (r[s.parentNode.id] = s.parentNode.children.length), --r[s.parentNode.id] === 0 && e.push(s.parentNode.id)));
  }
}
function Zn(e, n, t, r, o, s) {
  const d = T(() => n.selectedNodeIds.map((v) => t(v))), f = T(() => !e.multiple), l = T(() => {
    let v;
    if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
      v = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Dt)
      v = n.selectedNodeIds.filter((S) => {
        const O = t(S);
        return O ? O.isRootNode ? !0 : !r(O.parentNode) : !1;
      });
    else if (e.valueConsistsOf === At)
      v = n.selectedNodeIds.filter((S) => {
        const O = t(S);
        return O ? O.isLeaf ? !0 : O.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === It) {
      const S = [];
      v = n.selectedNodeIds.slice(), d.value.forEach((O) => {
        O.ancestors.forEach((E) => {
          S.includes(E.id) || v.includes(E.id) || S.push(E.id);
        });
      }), v.push(...S);
    } else
      v = [];
    return e.sortValueBy === "LEVEL" ? v.sort((S, O) => Jn(t(S), t(O))) : e.sortValueBy === "INDEX" && v.sort((S, O) => en(t(S), t(O))), v;
  }), u = T(() => l.value.length > 0);
  return {
    selectedNodes: d,
    single: f,
    internalValue: l,
    hasValue: u,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? l.value.slice() : l.value[0];
      const v = l.value.map((S) => t(S).raw);
      return e.multiple ? v : v[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((v) => s(v)).map((v) => v.id),
    extractNodeFromValue: (v) => {
      const S = { id: v };
      if (e.valueFormat === "id")
        return S;
      const O = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return tt(
        O,
        (c) => c && s(c).id === v
      ) || S;
    },
    fixSelectedNodeIds: (v, S) => {
      let O = [];
      if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
        O = v;
      else if (e.valueConsistsOf === Dt)
        v.forEach((c) => {
          O.push(c);
          const g = t(c);
          g?.isBranch && o(g, (m) => {
            O.push(m.id);
          });
        });
      else if (e.valueConsistsOf === At)
        Mt(v.slice(), O, t);
      else if (e.valueConsistsOf === It) {
        const c = v.filter((g) => {
          const m = t(g);
          return m && (m.isLeaf || m.children.length === 0);
        });
        Mt(c, O, t);
      }
      Je(n.selectedNodeIds, O) && (n.selectedNodeIds = O), S();
    }
  };
}
function er(e, n, t, r, o, s, d, f, l, u, a, i, h, _, v) {
  let S = !1;
  const O = () => {
    const p = S;
    return S = !1, p;
  }, E = (p) => {
    t.selectedNodeIds.push(p.id), t.selectedNodeMap[p.id] = !0;
  }, c = (p) => {
    jt(t.selectedNodeIds, p.id), delete t.selectedNodeMap[p.id];
  }, g = () => {
    a() && (h() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((p) => {
      const I = r(p);
      return I ? I.isDisabled : !1;
    }), f());
  }, m = (p) => {
    if (h() || e.disableBranchNodes)
      return E(p);
    if (e.flat) {
      E(p), e.autoSelectAncestors ? p.ancestors.forEach((b) => {
        !o(b) && !b.isDisabled && E(b);
      }) : e.autoSelectDescendants && s(p, (b) => {
        !o(b) && !b.isDisabled && E(b);
      });
      return;
    }
    const I = p.isLeaf || !p.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (I && E(p), p.isBranch && s(p, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && E(b);
    }), I) {
      let b = p;
      for (; (b = b.parentNode) !== se && (b && b.children.every(o)); )
        E(b);
    }
  }, D = (p) => {
    if (e.disableBranchNodes)
      return c(p);
    if (e.flat) {
      c(p), e.autoDeselectAncestors ? p.ancestors.forEach((b) => {
        o(b) && !b.isDisabled && c(b);
      }) : e.autoDeselectDescendants && s(p, (b) => {
        o(b) && !b.isDisabled && c(b);
      });
      return;
    }
    let I = !1;
    if (p.isBranch && d(p, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && (c(b), I = !0);
    }), p.isLeaf || I || p.isBranch && p.children.length === 0) {
      c(p);
      let b = p;
      for (; (b = b.parentNode) !== se && (b && o(b)); )
        c(b);
    }
  }, F = (p) => {
    if (e.disabled || p.isDisabled)
      return;
    h() && g();
    const I = e.multiple && !e.flat ? t.checkedStateMap[p.id] === nt : !o(p);
    I ? m(p) : D(p), f(), ne(() => {
      n(I ? "select" : "deselect", p.raw, _);
    }), v.active && I && (h() || e.clearOnSelect) && l(), h() && e.closeOnSelect && (u(), e.searchable && (S = !0));
  };
  return {
    select: F,
    clear: g,
    addValue: E,
    removeValue: c,
    removeLastValue: () => {
      if (!a()) return;
      if (h()) return g();
      const p = Kt(i());
      if (!p) return;
      const I = r(p);
      I && F(I);
    },
    resetFlags: O
  };
}
function tr(e, n, t, r, o, s, d, f, l, u, a, i, h) {
  const _ = ue({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), v = (x) => r.active ? x.isExpandedOnSearch || !1 : x.isExpanded || !1, S = (x) => !!(x.isMatched || x.isBranch && x.hasMatchedDescendants && !e.flattenSearchResults || !x.isRootNode && x.parentNode.showAllChildrenOnSearch), O = (x) => !(r.active && !S(x)), E = T(() => {
    const x = [];
    return s((M) => {
      if ((!r.active || S(M)) && x.push(M.id), M.isBranch && !v(M))
        return !1;
    }), x;
  }), c = T(() => E.value.length !== 0), g = (x, M = !0) => {
    const U = _.current;
    if (U != null && U in t.nodeMap && (t.nodeMap[U].isHighlighted = !1), !x) {
      _.current = null;
      return;
    }
    if (_.current = x.id, x.isHighlighted = !0, _.isOpen && M) {
      const de = () => {
        const le = i();
        if (!le) return;
        const ae = le.querySelector(`.vue-treeselect__option[data-id="${x.id}"]`);
        ae && _n(le, ae);
      };
      i() ? de() : ne(de);
    }
  }, m = () => {
    if (!c.value) return;
    const x = E.value[0], M = o(x);
    M && g(M);
  }, D = () => {
    if (!c.value) return;
    const M = E.value.indexOf(_.current) - 1;
    if (M === -1) return B();
    const U = o(E.value[M]);
    U && g(U);
  }, F = () => {
    if (!c.value) return;
    const M = E.value.indexOf(_.current) + 1;
    if (M === E.value.length) return m();
    const U = o(E.value[M]);
    U && g(U);
  }, B = () => {
    if (!c.value) return;
    const x = Kt(E.value);
    if (!x) return;
    const M = o(x);
    M && g(M);
  }, p = (x = !1) => {
    const { current: M } = _;
    (x || M == null || !(M in t.nodeMap) || !O(o(M))) && m();
  }, I = () => {
    const x = i();
    x && (_.lastScrollPosition = x.scrollTop);
  }, b = () => {
    const x = i();
    x && (x.scrollTop = _.lastScrollPosition);
  }, N = () => {
    !_.isOpen || !e.disabled && e.alwaysOpen || (I(), _.isOpen = !1, h(!1), l(), n("close", d(), f));
  }, L = () => {
    e.disabled || _.isOpen || (_.isOpen = !0, ne(p), ne(b), !e.options && !e.async && u(), h(!0), n("open", f));
  };
  return {
    menu: _,
    visibleOptionIds: E,
    hasVisibleOptions: c,
    shouldExpand: v,
    shouldShowOptionInMenu: O,
    openMenu: L,
    closeMenu: N,
    toggleMenu: () => {
      _.isOpen ? N() : L();
    },
    toggleExpanded: (x) => {
      let M;
      r.active ? (M = x.isExpandedOnSearch = !x.isExpandedOnSearch, M && (x.showAllChildrenOnSearch = !0)) : M = x.isExpanded = !x.isExpanded, M && !x.childrenStates.isLoaded && a(x);
    },
    setCurrentHighlightedOption: g,
    resetHighlightedOptionWhenNecessary: p,
    highlightFirstOption: m,
    highlightPrevOption: D,
    highlightNextOption: F,
    highlightLastOption: B,
    saveMenuScrollPosition: I,
    restoreMenuScrollPosition: b
  };
}
var Qe, kt;
function nr() {
  if (kt) return Qe;
  kt = 1;
  function e(n, t) {
    var r = t.length, o = n.length;
    if (o > r)
      return !1;
    if (o === r)
      return n === t;
    e: for (var s = 0, d = 0; s < o; s++) {
      for (var f = n.charCodeAt(s); d < r; )
        if (t.charCodeAt(d++) === f)
          continue e;
      return !1;
    }
    return !0;
  }
  return Qe = e, Qe;
}
var rr = nr();
const or = /* @__PURE__ */ ce(rr);
function Bt(e, n, t) {
  return e ? or(n, t) : Xt(t, n);
}
function sr(e, n, t, r) {
  const o = ue({
    active: !1,
    noResults: !0,
    countMap: ee()
  });
  return {
    localSearch: o,
    handleLocalSearch: () => {
      const { searchQuery: d } = n, f = () => r(!0);
      if (!d)
        return o.active = !1, f();
      o.active = !0, o.noResults = !0, t((a) => {
        a.isBranch && (a.isExpandedOnSearch = !1, a.showAllChildrenOnSearch = !1, a.isMatched = !1, a.hasMatchedDescendants = !1, o.countMap[a.id] = {
          [Ee]: 0,
          [Ne]: 0,
          [Te]: 0,
          [we]: 0
        });
      });
      const l = d.trim().toLocaleLowerCase(), u = l.replace(/\s+/g, " ").split(" ");
      t((a) => {
        e.searchNested && u.length > 1 ? a.isMatched = u.every(
          (i) => Bt(!1, i, a.nestedSearchLabel)
        ) : a.isMatched = (e.matchKeys || ["label"]).some(
          (i) => Bt(!e.disableFuzzyMatching, l, a.lowerCased[i])
        ), a.isMatched && (o.noResults = !1, a.ancestors.forEach((i) => {
          o.countMap[i.id][Ne]++;
        }), a.isLeaf && a.ancestors.forEach((i) => {
          o.countMap[i.id][we]++;
        }), a.parentNode !== se && (o.countMap[a.parentNode.id][Ee] += 1, a.isLeaf && (o.countMap[a.parentNode.id][Te] += 1))), (a.isMatched || a.isBranch && a.isExpandedOnSearch) && a.parentNode !== se && (a.parentNode.isExpandedOnSearch = !0, a.parentNode.hasMatchedDescendants = !0);
      }), f();
    }
  };
}
const lr = "ASYNC_SEARCH";
function ar(e) {
  return e.message || String(e);
}
function ir() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function ur(e, n, t, r, o) {
  const s = te(ee()), d = te(0), f = () => {
    const { searchQuery: u } = n, a = s.value[u] || {
      ...ir(),
      options: []
    };
    if (W(
      () => a.options,
      () => {
        n.searchQuery === u && r();
      },
      { deep: !0 }
    ), u === "") {
      if (Array.isArray(e.defaultOptions))
        return a.options = e.defaultOptions, a.isLoaded = !0, a;
      if (e.defaultOptions !== !0)
        return a.isLoaded = !0, a;
    }
    return s.value[u] || (s.value[u] = a), a;
  };
  return {
    remoteSearch: s,
    key: d,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: u } = n, a = f(), i = () => {
        r(), o(!0);
      };
      if ((u === "" || e.cacheOptions) && a.isLoaded)
        return i();
      t({
        action: lr,
        args: { searchQuery: u },
        isPending: () => a.isLoading,
        start: () => {
          a.isLoading = !0, a.isLoaded = !1, a.loadingError = "";
        },
        succeed: (h) => {
          a.isLoaded = !0, a.options = h, n.searchQuery === u && i();
        },
        fail: (h) => {
          a.loadingError = ar(h);
        },
        end: () => {
          d.value += 1, a.isLoading = !1;
        }
      });
    }
  };
}
const cr = "LOAD_ROOT_OPTIONS", dr = "LOAD_CHILDREN_OPTIONS";
function Ft(e) {
  return e.message || String(e);
}
function fr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function hr(e, n, t, r) {
  const o = ue(fr()), s = (l) => {
    const { action: u, args: a, isPending: i, start: h, succeed: _, fail: v, end: S } = l;
    if (!e.loadOptions || i())
      return;
    h();
    const O = qn((c, g) => {
      c ? v(c) : _(g), S();
    }), E = e.loadOptions({
      id: t,
      instanceId: t,
      action: u,
      ...a,
      callback: O
    });
    Gt(E) && E.then(() => {
      O();
    }).catch((c) => {
      O(c);
    }).catch((c) => {
      console.error(c);
    });
  };
  return {
    rootOptionsStates: o,
    callLoadOptionsProp: s,
    loadRootOptions: () => {
      s({
        action: cr,
        isPending: () => o.isLoading,
        start: () => {
          o.isLoading = !0, o.loadingError = "";
        },
        succeed: () => {
          o.isLoaded = !0, ne(() => {
            r(!0);
          });
        },
        fail: (l) => {
          o.loadingError = Ft(l);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (l) => {
      const { id: u, raw: a } = l;
      s({
        action: dr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: a
        },
        isPending: () => {
          const i = n(u);
          return i ? i.childrenStates.isLoading : !1;
        },
        start: () => {
          const i = n(u);
          i && (i.childrenStates.isLoading = !0, i.childrenStates.loadingError = "");
        },
        succeed: () => {
          const i = n(u);
          i && (i.childrenStates.isLoaded = !0);
        },
        fail: (i) => {
          const h = n(u);
          h && (h.childrenStates.loadingError = Ft(i));
        },
        end: () => {
          const i = n(u);
          i && (i.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
function vr(e, n, t, r, o) {
  const s = ue({
    isFocused: !1,
    searchQuery: ""
  }), d = () => {
    s.searchQuery = "";
  }, f = (w) => ({
    ...w,
    ...e.normalizer ? e.normalizer(w, t.value) : {}
  }), l = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((w) => f(w)).map((w) => w.id), u = Yn(), a = Qn(l), { forest: i, isSelected: h } = a, _ = (w) => (ge(
    () => w != null,
    () => `Invalid node id: ${w}`
  ), w == null ? null : w in i.nodeMap ? i.nodeMap[w] : v(w)), v = (w) => {
    const P = S(w), ve = f(P).label || `${w} (unknown)`, xe = {
      id: w,
      label: ve,
      ancestors: [],
      parentNode: se,
      isFallbackNode: !0,
      isRootNode: !0,
      isLeaf: !0,
      isBranch: !1,
      isDisabled: !1,
      isNew: !1,
      index: [-1],
      level: 0,
      raw: P
    };
    return i.nodeMap[w] = xe, xe;
  }, S = (w) => {
    const P = { id: w };
    if (e.valueFormat === "id")
      return P;
    const ve = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return tt(
      ve,
      (st) => st && f(st).id === w
    ) || P;
  };
  let O, E, c, g, m, D;
  const F = hr(
    e,
    _,
    t.value,
    (w) => E(w)
  );
  c = F.loadRootOptions, O = F.loadChildrenOptions, g = F.callLoadOptionsProp;
  const { rootOptionsStates: B } = F, p = Xn(
    e,
    i,
    t,
    O
  ), { normalize: I, enhancedNormalizer: b } = p, N = Zn(
    e,
    i,
    _,
    h,
    u.traverseDescendantsBFS,
    b
  ), { selectedNodes: L, single: C, internalValue: k, hasValue: x, getValue: M, fixSelectedNodeIds: U } = N;
  D = () => {
    const w = (P) => {
      u.traverseAllNodesByIndex(i.normalizedOptions, P);
    };
    a.buildForestState(
      e,
      L.value,
      w,
      h
    );
  };
  const de = (w) => {
    i.selectedNodeIds.forEach((P) => {
      w[P] && (i.nodeMap[P] = {
        ...w[P],
        isFallbackNode: !0
      });
    });
  }, rt = () => (e.async, null);
  m = () => {
    const w = e.async ? rt() || [] : e.options || [];
    if (Array.isArray(w)) {
      const P = i.nodeMap;
      i.nodeMap = ee(), de(P), i.normalizedOptions = I(se, w, P), U(k.value, D);
    } else
      i.normalizedOptions = [];
  };
  const le = ur(
    e,
    s,
    g,
    m,
    (w) => E(w)
  ), { handleRemoteSearch: ae } = le, fe = sr(
    e,
    s,
    (w) => {
      u.traverseAllNodesDFS(i.normalizedOptions, w);
    },
    (w) => E(w)
  ), { handleLocalSearch: ot } = fe, an = (w) => {
    u.traverseAllNodesByIndex(i.normalizedOptions, w);
  }, V = tr(
    e,
    n,
    i,
    fe.localSearch,
    _,
    an,
    M,
    t.value,
    d,
    c,
    O,
    r,
    o
  );
  E = V.resetHighlightedOptionWhenNecessary;
  const he = er(
    e,
    n,
    i,
    _,
    h,
    u.traverseDescendantsBFS,
    u.traverseDescendantsDFS,
    D,
    d,
    V.closeMenu,
    () => x.value,
    () => k.value,
    () => C.value,
    t.value,
    fe.localSearch
  );
  return W(() => e.alwaysOpen, (w) => {
    w ? V.openMenu() : V.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    m();
  }), W(() => e.disabled, (w) => {
    w && V.menu.isOpen ? V.closeMenu() : !w && !V.menu.isOpen && e.alwaysOpen && V.openMenu();
  }), W(() => e.flat, () => {
    m();
  }), W(k, (w, P) => {
    Je(w, P) && n("update:modelValue", M(), t.value);
  }), W(() => e.matchKeys, () => {
    m();
  }), W(() => e.multiple, (w) => {
    w && D();
  }), W(() => e.options, () => {
    e.async || (m(), B.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => s.searchQuery, () => {
    e.async ? ae() : ot(), n("search-change", s.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const w = l();
    Je(w, k.value) && U(w, D);
  }), be(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && c(), e.alwaysOpen && V.openMenu(), e.async && e.defaultOptions && ae();
  }), Se(() => {
    o(!1);
  }), {
    // State
    forest: pe(me(() => i)),
    trigger: s,
    menu: pe(me(() => V.menu)),
    localSearch: pe(me(() => fe.localSearch)),
    remoteSearch: pe(me(() => le.remoteSearch)),
    rootOptionsStates: B,
    // Computed
    selectedNodes: L,
    single: C,
    internalValue: k,
    hasValue: x,
    visibleOptionIds: V.visibleOptionIds,
    hasVisibleOptions: V.hasVisibleOptions,
    // Node methods
    getNode: _,
    isSelected: h,
    // Traversal
    traverseDescendantsBFS: u.traverseDescendantsBFS,
    traverseDescendantsDFS: u.traverseDescendantsDFS,
    traverseAllNodesDFS: u.traverseAllNodesDFS,
    traverseAllNodesByIndex: u.traverseAllNodesByIndex,
    // Value
    getValue: M,
    extractCheckedNodeIdsFromValue: l,
    extractNodeFromValue: S,
    fixSelectedNodeIds: U,
    // Selection
    select: he.select,
    clear: he.clear,
    removeLastValue: he.removeLastValue,
    // Menu
    openMenu: V.openMenu,
    closeMenu: V.closeMenu,
    toggleMenu: V.toggleMenu,
    toggleExpanded: V.toggleExpanded,
    shouldExpand: V.shouldExpand,
    shouldShowOptionInMenu: V.shouldShowOptionInMenu,
    // Highlighting
    setCurrentHighlightedOption: V.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: V.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: V.highlightFirstOption,
    highlightPrevOption: V.highlightPrevOption,
    highlightNextOption: V.highlightNextOption,
    highlightLastOption: V.highlightLastOption,
    // Search
    handleLocalSearch: ot,
    handleRemoteSearch: ae,
    resetSearchQuery: d,
    // Async
    loadRootOptions: c,
    loadChildrenOptions: O,
    // Helpers
    initialize: m,
    buildForestState: D,
    resetFlags: he.resetFlags
  };
}
const pr = ["name", "value"], mr = /* @__PURE__ */ K({
  __name: "HiddenFields",
  setup(e) {
    const n = Z("treeselect");
    function t(o) {
      return typeof o == "string" ? o : o != null && !Fn(o) ? JSON.stringify(o) : "";
    }
    const r = T(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let o = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (o = [o.join(n.delimiter)]), o;
    });
    return (o, s) => (y(!0), A(re, null, ie(r.value, (d, f) => (y(), A("input", {
      key: `hidden-field-${f}`,
      type: "hidden",
      name: R(n).name,
      value: d
    }, null, 8, pr))), 128));
  }
}), _r = {
  key: 0,
  class: "vue-treeselect__input-container"
}, gr = ["tabindex", "required"], yr = ["tabindex"], tn = /* @__PURE__ */ K({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = Z("treeselect"), r = te(), o = te(), s = te(Rt), d = te(""), f = T(() => t.searchable), l = T(() => t.disabled), u = T(() => t.multiple), a = T(() => t.tabIndex), i = T(() => t.required), h = T(() => t.hasValue.value), _ = T(() => f.value && !l.value && u.value), v = T(() => ({
      width: _.value ? `${s.value}px` : void 0
    })), S = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], O = () => {
      o.value && (s.value = Math.max(
        Rt,
        o.value.scrollWidth + 15
      ));
    }, E = () => {
      t.trigger.searchQuery = d.value;
    }, c = () => {
      d.value = "", E();
    }, g = () => {
      !l.value && r.value && r.value.focus();
    }, m = () => {
      r.value && r.value.blur();
    }, D = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, F = () => {
      const N = t.getMenu?.();
      if (N && document.activeElement === N)
        return g();
      t.trigger.isFocused = !1, t.closeMenu();
    }, B = Ln(
      E,
      Un,
      { leading: !0, trailing: !0 }
    ), p = () => {
      d.value ? B() : (B.cancel(), E());
    }, I = (N) => {
      const L = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Xt(S, L))
          return N.preventDefault(), t.openMenu();
        switch (L) {
          case q.BACKSPACE: {
            t.backspaceRemoves && !d.value.length && t.removeLastValue();
            break;
          }
          case q.ENTER: {
            if (N.preventDefault(), t.menu.value.current === null) return;
            const C = t.getNode(t.menu.value.current);
            if (!C || C.isBranch && t.disableBranchNodes) return;
            t.select(C);
            break;
          }
          case q.ESCAPE: {
            d.value.length ? c() : t.menu.value.isOpen && t.closeMenu();
            break;
          }
          case q.END: {
            N.preventDefault(), t.highlightLastOption();
            break;
          }
          case q.HOME: {
            N.preventDefault(), t.highlightFirstOption();
            break;
          }
          case q.ARROW_LEFT: {
            const C = t.menu.value.current;
            if (C === null) break;
            const k = t.getNode(C);
            k && (k.isBranch && t.shouldExpand(k) ? (N.preventDefault(), t.toggleExpanded(k)) : !k.isRootNode && (k.isLeaf || k.isBranch && !t.shouldExpand(k)) && (N.preventDefault(), t.setCurrentHighlightedOption(k.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const C = t.menu.value.current;
            if (C === null) break;
            const k = t.getNode(C);
            k && k.isBranch && !t.shouldExpand(k) && (N.preventDefault(), t.toggleExpanded(k));
            break;
          }
          case q.ARROW_DOWN: {
            N.preventDefault(), t.highlightNextOption();
            break;
          }
          case q.DELETE: {
            t.deleteRemoves && !d.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, b = (N) => {
      d.value.length && N.stopPropagation();
    };
    return W(() => t.trigger.searchQuery, (N) => {
      d.value = N;
    }), W(d, () => {
      _.value && ne(O);
    }), n({
      clear: c,
      focus: g,
      blur: m
    }), (N, L) => f.value && !l.value ? (y(), A("div", _r, [
      un(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: a.value,
        required: i.value && !h.value,
        "onUpdate:modelValue": L[0] || (L[0] = (C) => d.value = C),
        style: Ge(v.value),
        onFocus: D,
        onInput: p,
        onBlur: F,
        onKeydown: I,
        onMousedown: b
      }, null, 44, gr), [
        [cn, d.value]
      ]),
      _.value ? (y(), A("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, H(d.value), 513)) : Y("", !0)
    ])) : (y(), A("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: l.value ? void 0 : a.value,
      onFocus: D,
      onBlur: F,
      onKeydown: I
    }, null, 40, yr));
  }
}), nn = /* @__PURE__ */ K({
  __name: "Placeholder",
  setup(e) {
    const n = Z("treeselect"), t = T(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (r, o) => (y(), A("div", {
      class: G(t.value)
    }, H(R(n).placeholder), 3));
  }
}), Or = {
  key: 0,
  class: "vue-treeselect__single-value"
}, br = /* @__PURE__ */ K({
  __name: "SingleValue",
  setup(e) {
    const n = Z("treeselect"), t = Ze(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), o = T(() => n.selectedNodes.value[0]), s = T(() => t["value-label"]);
    return (d, f) => (y(), A(re, null, [
      r.value ? (y(), A("div", Or, [
        s.value ? (y(), $(et(s.value), {
          key: 0,
          node: o.value
        }, null, 8, ["node"])) : (y(), A(re, { key: 1 }, [
          Q(H(o.value.label), 1)
        ], 64))
      ])) : Y("", !0),
      X(nn),
      X(tn, { ref: "input" }, null, 512)
    ], 64));
  }
}), Sr = {
  name: "vue-treeselect--x"
}, rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, Er = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Nr(e, n, t, r, o, s) {
  return y(), A("svg", Er, [...n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const on = /* @__PURE__ */ rn(Sr, [["render", Nr]]), Tr = { class: "vue-treeselect__multi-value-item-container" }, wr = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, xr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, Rr = /* @__PURE__ */ K({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), s = T(() => t["value-label"]), d = oe(function() {
      r.select(n.node);
    });
    return (f, l) => (y(), A("div", Tr, [
      z("div", {
        class: G(o.value),
        onMousedown: l[0] || (l[0] = //@ts-ignore
        (...u) => R(d) && R(d)(...u))
      }, [
        s.value ? (y(), $(et(s.value), {
          key: 0,
          node: e.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (y(), A("span", wr, H(e.node.label), 1)),
        z("span", xr, [
          X(on)
        ])
      ], 34)
    ]));
  }
}), Lr = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Cr = { class: "vue-treeselect__limit-tip-text" }, Dr = /* @__PURE__ */ K({
  __name: "MultiValue",
  setup(e) {
    const n = Z("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((s) => s !== null)), r = T(() => n.internalValue.value.length > n.limit), o = T(() => {
      const s = n.internalValue.value.length - n.limit;
      return n.limitText(s);
    });
    return (s, d) => (y(), $(dn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (y(!0), A(re, null, ie(t.value, (f) => (y(), $(Rr, {
          key: `multi-value-item-${f.id}`,
          node: f
        }, null, 8, ["node"]))), 128)),
        r.value ? (y(), A("div", Lr, [
          z("span", Cr, H(o.value), 1)
        ])) : Y("", !0),
        X(nn, { key: "placeholder" }),
        X(tn, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Ar = {
  name: "vue-treeselect--arrow"
}, Ir = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Mr(e, n, t, r, o, s) {
  return y(), A("svg", Ir, [...n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const sn = /* @__PURE__ */ rn(Ar, [["render", Mr]]), kr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Br = ["title"], Fr = /* @__PURE__ */ K({
  __name: "Control",
  setup(e) {
    const n = Z("treeselect"), t = Z("instance"), r = T(() => n.single.value), o = T(() => n.hasValue.value && n.internalValue.value.some((i) => {
      const h = n.getNode(i);
      return h && !h.isDisabled;
    })), s = T(() => n.clearable && !n.disabled && n.hasValue.value && (o.value || n.allowClearingDisabled)), d = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), f = T(() => n.multiple ? n.clearAllText : n.clearValueText), l = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), u = oe(function(i) {
      i.stopPropagation(), i.preventDefault();
      const h = n.beforeClearAll(), _ = (v) => {
        v && n.clear();
      };
      Gt(h) ? h.then((v) => _(v)) : setTimeout(() => _(h), 0);
    }), a = oe(function(i) {
      i.preventDefault(), i.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (i, h) => (y(), A("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: h[2] || (h[2] = //@ts-ignore
      (..._) => R(t).handleMouseDown && R(t).handleMouseDown(..._))
    }, [
      z("div", kr, [
        r.value ? (y(), $(br, { key: 0 })) : (y(), $(Dr, { key: 1 }))
      ], 512),
      s.value ? (y(), A("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: f.value,
        onMousedown: h[0] || (h[0] = //@ts-ignore
        (..._) => R(u) && R(u)(..._))
      }, [
        X(on, { class: "vue-treeselect__x" })
      ], 40, Br)) : Y("", !0),
      d.value ? (y(), A("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: h[1] || (h[1] = //@ts-ignore
        (..._) => R(a) && R(a)(..._))
      }, [
        X(sn, {
          class: G(l.value)
        }, null, 8, ["class"])
      ], 32)) : Y("", !0)
    ], 544));
  }
}), Vr = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ K({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (y(), A("div", {
      class: G(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      z("div", Vr, [
        z("span", {
          class: G(`vue-treeselect__icon-${e.icon}`)
        }, null, 2)
      ]),
      z("span", {
        class: G(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
      }, [
        Ke(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), $r = ["data-id"], Hr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, zr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Pr = {
  key: 0,
  class: "vue-treeselect__list"
}, qr = ["title"], Vt = "vue-treeselect__label", $t = "vue-treeselect__count", Ht = /* @__PURE__ */ K({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), s = T(() => n.node.isBranch && r.shouldExpand(n.node)), d = T(() => r.shouldShowOptionInMenu(n.node)), f = T(() => !r.shouldFlattenOptions || !d.value), l = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !d.value
    })), u = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": s.value
    })), a = T(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), i = T(() => {
      const B = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": B === Zt,
        "vue-treeselect__checkbox--indeterminate": B === Jt,
        "vue-treeselect__checkbox--unchecked": B === nt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), h = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), _ = T(() => h.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), v = T(() => t["option-label"]), S = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), O = T(() => n.node.childrenStates?.isLoaded && (!n.node.children || n.node.children.length === 0)), E = T(() => n.node.childrenStates?.isLoading || !1), c = T(() => !!n.node.childrenStates?.loadingError), g = (B) => {
      B.target === B.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, m = oe(function() {
      r.toggleExpanded(n.node);
    }), D = oe(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), F = oe(function() {
      r.loadChildrenOptions(n.node);
    });
    return (B, p) => {
      const I = fn("Option", !0);
      return y(), A("div", {
        class: G(o.value)
      }, [
        z("div", {
          class: G(l.value),
          "data-id": e.node.id,
          onMouseenter: g
        }, [
          e.node.isBranch && f.value ? (y(), A("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: p[0] || (p[0] = //@ts-ignore
            (...b) => R(m) && R(m)(...b))
          }, [
            X(Xe, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                X(sn, {
                  class: G(u.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : R(r).hasBranchNodes && f.value ? (y(), A("div", Hr, "   ")) : Y("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: p[1] || (p[1] = //@ts-ignore
            (...b) => R(D) && R(D)(...b))
          }, [
            a.value ? (y(), A("div", zr, [
              z("span", {
                class: G(i.value)
              }, [...p[3] || (p[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ])], 2)
            ])) : Y("", !0),
            v.value ? (y(), $(et(v.value), {
              key: 1,
              node: e.node,
              shouldShowCount: h.value,
              count: _.value,
              labelClassName: Vt,
              countClassName: $t
            }, null, 8, ["node", "shouldShowCount", "count"])) : (y(), A("label", {
              key: 2,
              class: G(Vt)
            }, [
              Q(H(e.node.label) + " ", 1),
              h.value ? (y(), A("span", {
                key: 0,
                class: G($t)
              }, " (" + H(_.value) + ") ", 1)) : Y("", !0)
            ]))
          ], 32)
        ], 42, $r),
        e.node.isBranch ? (y(), $(Xe, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            s.value ? (y(), A("div", Pr, [
              (y(!0), A(re, null, ie(S.value, (b) => (y(), $(I, {
                key: b.id,
                node: b
              }, null, 8, ["node"]))), 128)),
              O.value ? (y(), $(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(r).noChildrenText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              E.value ? (y(), $(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(r).loadingText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              c.value ? (y(), $(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(e.node.childrenStates?.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: R(r).retryTitle,
                    onMousedown: p[2] || (p[2] = //@ts-ignore
                    (...b) => R(F) && R(F)(...b))
                  }, H(R(r).retryText), 41, qr)
                ]),
                _: 1
              })) : Y("", !0)
            ])) : Y("", !0)
          ]),
          _: 1
        })) : Y("", !0)
      ], 2);
    };
  }
}), Wr = ["title"], jr = {
  key: 4,
  class: "vue-treeselect__list"
}, Yr = ["title"], Ur = {
  key: 4,
  class: "vue-treeselect__list"
}, ln = /* @__PURE__ */ K({
  __name: "Menu",
  setup(e) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, t = Z("treeselect");
    let r = null, o = null;
    const s = T(() => ({
      maxHeight: t.maxHeight + "px"
    })), d = T(() => ({
      zIndex: t.appendToBody ? null : t.zIndex
    })), f = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), l = T(() => t.getRemoteSearchEntry()), u = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), a = T(() => {
      if (u.value) return !1;
      const c = l.value;
      return c.isLoaded && c.options.length === 0;
    }), i = () => {
      if (!t.menu.value.isOpen) return;
      const c = t.getMenu(), g = t.getControl();
      if (!c || !g) return;
      const m = c.getBoundingClientRect(), D = g.getBoundingClientRect(), F = m.height, B = window.innerHeight, p = D.top, I = window.innerHeight - D.bottom, b = D.top >= 0 && D.top <= B || D.top < 0 && D.bottom > 0, N = I > F + Lt, L = p > F + Lt;
      b ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : N || !L ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, h = () => {
      const c = t.getMenu();
      r || !c || (r = {
        remove: Ut(c, i)
      });
    }, _ = () => {
      const c = t.getControl();
      o || !c || (o = {
        remove: Qt(c, i)
      });
    }, v = () => {
      r && (r.remove(), r = null);
    }, S = () => {
      o && (o.remove(), o = null);
    }, O = () => {
      i(), h(), _();
    }, E = () => {
      v(), S();
    };
    return W(
      () => t.menu.value.isOpen,
      (c) => {
        c ? ne(O) : E();
      }
    ), be(() => {
      t.menu.value.isOpen && ne(O);
    }), Se(() => {
      E();
    }), (c, g) => (y(), A("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Ge(d.value)
    }, [
      X(Xe, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          R(t).menu.value.isOpen ? (y(), A("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Ge(s.value),
            onMousedown: g[2] || (g[2] = //@ts-ignore
            (...m) => R(t).handleMouseDown && R(t).handleMouseDown(...m))
          }, [
            Ke(c.$slots, "before-list"),
            R(t).async ? (y(), A(re, { key: 0 }, [
              u.value ? (y(), $(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).searchPromptText), 1)
                ]),
                _: 1
              })) : l.value.isLoading ? (y(), $(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(t).loadingText), 1)
                ]),
                _: 1
              })) : l.value.loadingError ? (y(), $(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(l.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: R(t).retryTitle,
                    onClick: g[0] || (g[0] = //@ts-ignore
                    (...m) => R(t).handleRemoteSearch && R(t).handleRemoteSearch(...m))
                  }, H(R(t).retryText), 9, Wr)
                ]),
                _: 1
              })) : a.value ? (y(), $(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), A("div", jr, [
                (y(!0), A(re, null, ie(R(t).forest.value.normalizedOptions, (m) => (y(), $(Ht, {
                  key: m.id,
                  node: m
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (y(), A(re, { key: 1 }, [
              R(t).rootOptionsStates.isLoading ? (y(), $(J, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(t).loadingText), 1)
                ]),
                _: 1
              })) : R(t).rootOptionsStates.loadingError ? (y(), $(J, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(R(t).rootOptionsStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: R(t).retryTitle,
                    onClick: g[1] || (g[1] = //@ts-ignore
                    (...m) => R(t).loadRootOptions && R(t).loadRootOptions(...m))
                  }, H(R(t).retryText), 9, Yr)
                ]),
                _: 1
              })) : f.value ? (y(), $(J, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noOptionsText), 1)
                ]),
                _: 1
              })) : R(t).localSearch.value.active && R(t).localSearch.value.noResults ? (y(), $(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), A("div", Ur, [
                (y(!0), A(re, null, ie(R(t).forest.value.normalizedOptions, (m) => (y(), $(Ht, {
                  key: m.id,
                  node: m
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            Ke(c.$slots, "after-list")
          ], 36)) : Y("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), Qr = { class: "vue-treeselect__menu-placeholder" }, Gr = /* @__PURE__ */ K({
  __name: "MenuPortal",
  setup(e) {
    const n = Z("treeselect"), t = (f) => K({
      name: "vue-treeselect--portal-target",
      setup() {
        let l = null, u = null, a = null;
        const i = () => {
          if (!a) return;
          const g = f.getControl();
          if (!g) return;
          const m = g.getBoundingClientRect();
          a.style.width = m.width + "px";
        }, h = () => {
          if (!a) return;
          const g = f.getControl();
          if (!g) return;
          const m = a.querySelector(".vue-treeselect__menu-container");
          if (!m) return;
          const D = g.getBoundingClientRect(), F = a.getBoundingClientRect(), B = f.menu.value.placement === "bottom" ? D.height : 0, p = Math.round(D.left - F.left) + "px", I = Math.round(D.top - F.top + B) + "px", N = tt(["transform", "webkitTransform", "MozTransform", "msTransform"], (L) => L in document.body.style);
          N && (m.style[N] = `translate(${p}, ${I})`);
        }, _ = () => {
          const g = f.getControl();
          l || !g || (l = {
            remove: Qt(g, h)
          });
        }, v = () => {
          const g = f.getControl();
          u || !g || (u = {
            remove: Ut(g, () => {
              i(), h();
            })
          });
        }, S = () => {
          l && (l.remove(), l = null);
        }, O = () => {
          u && (u.remove(), u = null);
        }, E = () => {
          i(), h(), _(), v();
        }, c = () => {
          S(), O();
        };
        return W(
          () => f.menu.value.isOpen,
          (g) => {
            g ? ne(E) : c();
          }
        ), W(
          () => f.menu.value.placement,
          () => {
            h();
          }
        ), be(() => {
          a = document.body.lastElementChild, f.menu.value.isOpen && ne(E);
        }), Se(() => {
          c();
        }), () => lt("div", {
          class: ["vue-treeselect__portal-target", f.wrapperClass],
          style: { zIndex: f.zIndex },
          "data-instance-id": f.getInstanceId()
        }, [
          lt(ln)
        ]);
      }
    });
    let r = null, o = null;
    const s = () => {
      const f = document.createElement("div");
      document.body.appendChild(f), o = f;
      const l = t(n);
      r = hn(l), r.provide("treeselect", n), r.mount(f);
    }, d = () => {
      r && o && (o.parentNode?.removeChild(o), r.unmount(), r = null, o = null);
    };
    return be(() => {
      s();
    }), Se(() => {
      d();
    }), (f, l) => (y(), A("div", Qr));
  }
}), so = /* @__PURE__ */ K({
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
    defaultOptions: { type: [Boolean, Array] },
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
    showCount: { type: Boolean, default: !1 },
    showCountOf: { default: "ALL_CHILDREN" },
    showCountOnSearch: { type: [Boolean, null], default: void 0 },
    sortValueBy: { default: "ORDER_SELECTED" },
    tabIndex: { default: 0 },
    modelValue: {},
    valueConsistsOf: { default: "BRANCH_PRIORITY" },
    valueFormat: { default: "id" },
    zIndex: { default: 999 }
  },
  emits: ["update:modelValue", "select", "deselect", "open", "close", "search-change"],
  setup(e, { expose: n, emit: t }) {
    const r = e, o = t, s = te(), d = te(), f = te(), l = te(), u = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
      set: () => {
      }
    }), a = () => {
      const m = r.appendToBody ? l : f, D = m.value?.$refs?.menu || m.value?.$refs?.["menu-container"]?.querySelector(".vue-treeselect__menu");
      return D && D.nodeName !== "#comment" ? D : null;
    }, i = () => d.value?.$refs?.["value-container"], h = () => i()?.$refs?.input, _ = () => {
      h()?.focus();
    }, v = () => {
      h()?.blur();
    }, S = (m) => {
      m ? document.addEventListener("mousedown", O, !1) : document.removeEventListener("mousedown", O, !1);
    }, O = (m) => {
      s.value && !s.value.contains(m.target) && (v(), c.closeMenu());
    }, E = oe(function(m) {
      if (m.preventDefault(), m.stopPropagation(), r.disabled) return;
      i().$el.contains(m.target) && !c.menu.value.isOpen && (r.openOnClick || c.trigger.isFocused) && c.openMenu(), (c.resetFlags ? c.resetFlags() : !1) ? v() : _(), c.resetFlags && c.resetFlags();
    }), c = vr(
      r,
      o,
      u,
      a,
      S
    );
    at("treeselect", c), at("instance", {
      getInput: h,
      focusInput: _,
      blurInput: v,
      getValueContainer: i,
      handleMouseDown: E
    });
    const g = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": c.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": c.trigger.isFocused,
      "vue-treeselect--has-value": c.hasValue.value,
      "vue-treeselect--open": c.menu.value.isOpen,
      "vue-treeselect--open-above": c.menu.value.placement === "top",
      "vue-treeselect--open-below": c.menu.value.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
    }));
    return n({
      // Node methods
      getNode: c.getNode,
      // Traversal
      traverseAllNodesDFS: c.traverseAllNodesDFS,
      traverseAllNodesByIndex: c.traverseAllNodesByIndex,
      // Menu
      openMenu: c.openMenu,
      closeMenu: c.closeMenu,
      toggleMenu: c.toggleMenu,
      // Selection
      select: c.select,
      clear: c.clear,
      // Value
      getValue: c.getValue,
      // Focus
      focusInput: _,
      blurInput: v
    }), (m, D) => (y(), A("div", {
      ref_key: "wrapper",
      ref: s,
      class: G(g.value)
    }, [
      X(mr),
      X(Fr, {
        ref_key: "control",
        ref: d
      }, null, 512),
      e.appendToBody ? (y(), $(Gr, {
        key: 0,
        ref_key: "portal",
        ref: l
      }, null, 512)) : (y(), $(ln, {
        key: 1,
        ref_key: "menu",
        ref: f
      }, null, 512))
    ], 2));
  }
});
export {
  to as ALL,
  oo as ALL_WITH_INDETERMINATE,
  eo as ASYNC_SEARCH,
  no as BRANCH_PRIORITY,
  Zt as CHECKED,
  Jt as INDETERMINATE,
  ro as LEAF_PRIORITY,
  Zr as LOAD_CHILDREN_OPTIONS,
  Jr as LOAD_ROOT_OPTIONS,
  so as Treeselect,
  nt as UNCHECKED,
  so as default,
  hr as useAsyncOptions,
  Qn as useForestState,
  sr as useLocalSearch,
  tr as useMenu,
  Xn as useNodeNormalization,
  Yn as useNodeTraversal,
  ur as useRemoteSearch,
  er as useSelection,
  vr as useTreeselect,
  Zn as useValue
};
