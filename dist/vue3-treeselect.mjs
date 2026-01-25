import { reactive as ce, computed as T, nextTick as ne, ref as te, watch as W, onMounted as be, onUnmounted as Se, readonly as pe, toRef as me, defineComponent as K, inject as Z, openBlock as g, createElementBlock as A, Fragment as re, renderList as ue, unref as L, withDirectives as cn, createElementVNode as z, normalizeStyle as Ke, vModelText as dn, toDisplayString as H, createCommentVNode as Y, normalizeClass as G, useSlots as et, createBlock as V, resolveDynamicComponent as tt, createTextVNode as Q, createVNode as X, TransitionGroup as fn, withCtx as j, renderSlot as Xe, resolveComponent as hn, Transition as Je, createApp as vn, h as at, provide as it } from "vue";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le, ut;
function pn() {
  if (ut) return Le;
  ut = 1;
  function e() {
  }
  return Le = e, Le;
}
var mn = pn();
const _n = /* @__PURE__ */ de(mn), ge = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  _n
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
function gn(e, n) {
  const t = e.getBoundingClientRect(), r = n.getBoundingClientRect(), o = n.offsetHeight / 3;
  r.bottom + o > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + o,
    e.scrollHeight
  ) : r.top - o < t.top && (e.scrollTop = Math.max(n.offsetTop - o, 0));
}
var Ce, ct;
function Pt() {
  if (ct) return Ce;
  ct = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return Ce = e, Ce;
}
var De, dt;
function yn() {
  if (dt) return De;
  dt = 1;
  var e = typeof _e == "object" && _e && _e.Object === Object && _e;
  return De = e, De;
}
var Ae, ft;
function qt() {
  if (ft) return Ae;
  ft = 1;
  var e = yn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return Ae = t, Ae;
}
var Ie, ht;
function On() {
  if (ht) return Ie;
  ht = 1;
  var e = qt(), n = function() {
    return e.Date.now();
  };
  return Ie = n, Ie;
}
var Me, vt;
function bn() {
  if (vt) return Me;
  vt = 1;
  var e = /\s/;
  function n(t) {
    for (var r = t.length; r-- && e.test(t.charAt(r)); )
      ;
    return r;
  }
  return Me = n, Me;
}
var ke, pt;
function Sn() {
  if (pt) return ke;
  pt = 1;
  var e = bn(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return ke = t, ke;
}
var Be, mt;
function Wt() {
  if (mt) return Be;
  mt = 1;
  var e = qt(), n = e.Symbol;
  return Be = n, Be;
}
var Fe, _t;
function En() {
  if (_t) return Fe;
  _t = 1;
  var e = Wt(), n = Object.prototype, t = n.hasOwnProperty, r = n.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var u = t.call(i, o), l = i[o];
    try {
      i[o] = void 0;
      var c = !0;
    } catch {
    }
    var s = r.call(i);
    return c && (u ? i[o] = l : delete i[o]), s;
  }
  return Fe = a, Fe;
}
var $e, gt;
function Nn() {
  if (gt) return $e;
  gt = 1;
  var e = Object.prototype, n = e.toString;
  function t(r) {
    return n.call(r);
  }
  return $e = t, $e;
}
var Ve, yt;
function wn() {
  if (yt) return Ve;
  yt = 1;
  var e = Wt(), n = En(), t = Nn(), r = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(u) {
    return u == null ? u === void 0 ? o : r : a && a in Object(u) ? n(u) : t(u);
  }
  return Ve = i, Ve;
}
var He, Ot;
function Tn() {
  if (Ot) return He;
  Ot = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return He = e, He;
}
var ze, bt;
function xn() {
  if (bt) return ze;
  bt = 1;
  var e = wn(), n = Tn(), t = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || n(o) && e(o) == t;
  }
  return ze = r, ze;
}
var Pe, St;
function jt() {
  if (St) return Pe;
  St = 1;
  var e = Sn(), n = Pt(), t = xn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, u = parseInt;
  function l(c) {
    if (typeof c == "number")
      return c;
    if (t(c))
      return r;
    if (n(c)) {
      var s = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = n(s) ? s + "" : s;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var h = a.test(c);
    return h || i.test(c) ? u(c.slice(2), h ? 2 : 8) : o.test(c) ? r : +c;
  }
  return Pe = l, Pe;
}
var qe, Et;
function Rn() {
  if (Et) return qe;
  Et = 1;
  var e = Pt(), n = On(), t = jt(), r = "Expected a function", o = Math.max, a = Math.min;
  function i(u, l, c) {
    var s, h, d, _, v, y, E = 0, S = !1, m = !1, f = !0;
    if (typeof u != "function")
      throw new TypeError(r);
    l = t(l) || 0, e(c) && (S = !!c.leading, m = "maxWait" in c, d = m ? o(t(c.maxWait) || 0, l) : d, f = "trailing" in c ? !!c.trailing : f);
    function R(D) {
      var F = s, w = h;
      return s = h = void 0, E = D, _ = u.apply(w, F), _;
    }
    function O(D) {
      return E = D, v = setTimeout(p, l), S ? R(D) : _;
    }
    function k(D) {
      var F = D - y, w = D - E, M = l - F;
      return m ? a(M, d - w) : M;
    }
    function B(D) {
      var F = D - y, w = D - E;
      return y === void 0 || F >= l || F < 0 || m && w >= d;
    }
    function p() {
      var D = n();
      if (B(D))
        return I(D);
      v = setTimeout(p, k(D));
    }
    function I(D) {
      return v = void 0, f && s ? R(D) : (s = h = void 0, _);
    }
    function b() {
      v !== void 0 && clearTimeout(v), E = 0, s = y = h = v = void 0;
    }
    function N() {
      return v === void 0 ? _ : I(n());
    }
    function C() {
      var D = n(), F = B(D);
      if (s = arguments, h = this, y = D, F) {
        if (v === void 0)
          return O(y);
        if (m)
          return clearTimeout(v), v = setTimeout(p, l), R(y);
      }
      return v === void 0 && (v = setTimeout(p, l)), _;
    }
    return C.cancel = b, C.flush = N, C;
  }
  return qe = i, qe;
}
var Ln = Rn();
const Cn = /* @__PURE__ */ de(Ln);
var Dn = (function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), a = r.appendChild(document.createElement("_")), i = void 0, u = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", e.appendChild(t), l(), s;
  function l() {
    c();
    var h = e.offsetWidth, d = e.offsetHeight;
    (h !== i || d !== u) && (i = h, u = d, o.style.width = h * 2 + "px", o.style.height = d * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: h, height: d })), r.addEventListener("scroll", l), t.addEventListener("scroll", l);
  }
  function c() {
    r.removeEventListener("scroll", l), t.removeEventListener("scroll", l);
  }
  function s() {
    c(), e.removeChild(t);
  }
});
function Yt(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let ye;
const Oe = [], An = 100;
function In() {
  ye = setInterval(() => {
    Oe.forEach(Ut);
  }, An);
}
function Mn() {
  ye && (clearInterval(ye), ye = null);
}
function Ut(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, a = n.offsetWidth, i = n.offsetHeight;
  (r !== a || o !== i) && (e.lastWidth = a, e.lastHeight = i, t({ width: a, height: i }));
}
function kn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    Yt(Oe, t), Oe.length || Mn();
  };
  return Oe.push(t), Ut(t), In(), r;
}
function Qt(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const i = (t ? kn : Dn)(e, (...u) => {
    r || n(...u);
  });
  return r = !1, i;
}
function Bn(e) {
  const n = [];
  let t = e.parentNode;
  for (; t && t.nodeName !== "BODY" && t.nodeType === document.ELEMENT_NODE; )
    Fn(t) && n.push(t), t = t.parentNode;
  return n.push(window), n;
}
function Fn(e) {
  const { overflow: n, overflowX: t, overflowY: r } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + r + t);
}
function Gt(e, n) {
  const t = Bn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((r) => {
    r.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((o) => {
      o.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function $n(e) {
  return e !== e;
}
function Kt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var We, Nt;
function Vn() {
  if (Nt) return We;
  Nt = 1;
  var e = jt(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var a = o < 0 ? -1 : 1;
      return a * t;
    }
    return o === o ? o : 0;
  }
  return We = r, We;
}
var je, wt;
function Hn() {
  if (wt) return je;
  wt = 1;
  var e = Vn();
  function n(t) {
    var r = e(t), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return je = n, je;
}
var Ye, Tt;
function zn() {
  if (Tt) return Ye;
  Tt = 1;
  var e = Hn(), n = "Expected a function";
  function t(r, o) {
    var a;
    if (typeof o != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (a = o.apply(this, arguments)), r <= 1 && (o = void 0), a;
    };
  }
  return Ye = t, Ye;
}
var Ue, xt;
function Pn() {
  if (xt) return Ue;
  xt = 1;
  var e = zn();
  function n(t) {
    return e(2, t);
  }
  return Ue = n, Ue;
}
var qn = Pn();
const Wn = /* @__PURE__ */ de(qn), ee = () => /* @__PURE__ */ Object.create(null);
var Qe, Rt;
function jn() {
  if (Rt) return Qe;
  Rt = 1;
  function e(n) {
    var t = n == null ? 0 : n.length;
    return t ? n[t - 1] : void 0;
  }
  return Qe = e, Qe;
}
var Yn = jn();
const Xt = /* @__PURE__ */ de(Yn);
function Jt(e, n) {
  return e.indexOf(n) !== -1;
}
function nt(e, n, t) {
  for (let r = 0, o = e.length; r < o; r++)
    if (n.call(t, e[r], r, e)) return e[r];
}
function Ze(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
function Un() {
  const e = (o, a) => {
    if (!o.isBranch) return;
    const i = o.children.slice();
    for (; i.length; ) {
      const u = i[0];
      u.isBranch && i.push(...u.children), a(u), i.shift();
    }
  }, n = (o, a) => {
    o.isBranch && o.children.forEach((i) => {
      n(i, a), a(i);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (o, a) => {
      o.forEach((i) => {
        n(i, a), a(i);
      });
    },
    traverseAllNodesByIndex: (o, a) => {
      const i = (u) => {
        u.children && u.children.forEach((l) => {
          a(l) !== !1 && l.isBranch && l.children && i(l);
        });
      };
      i({ children: o });
    }
  };
}
const se = null, rt = 0, Zt = 1, en = 2, Ee = "ALL_CHILDREN", Ne = "ALL_DESCENDANTS", we = "LEAF_CHILDREN", Te = "LEAF_DESCENDANTS", Zr = "LOAD_ROOT_OPTIONS", eo = "LOAD_CHILDREN_OPTIONS", to = "ASYNC_SEARCH", no = "ALL", ro = "BRANCH_PRIORITY", oo = "LEAF_PRIORITY", so = "ALL_WITH_INDETERMINATE", q = {
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
}, Qn = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Lt = 5, Ct = 40;
function Gn(e) {
  const n = ce({
    normalizedOptions: [],
    nodeMap: ee(),
    checkedStateMap: ee(),
    selectedNodeIds: e(),
    selectedNodeMap: ee()
  });
  return {
    forest: n,
    buildForestState: (o, a, i, u) => {
      const l = ee();
      n.selectedNodeIds.forEach((s) => {
        l[s] = !0;
      }), n.selectedNodeMap = l;
      const c = ee();
      o.multiple && (i((s) => {
        c[s.id] = rt;
      }), a.forEach((s) => {
        c[s.id] = en, !o.flat && !o.disableBranchNodes && s.ancestors.forEach((h) => {
          u(h) || (c[h.id] = Zt);
        });
      })), n.checkedStateMap = c;
    },
    isSelected: (o) => !!o && n.selectedNodeMap[o.id] === !0
  };
}
function Kn() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Xn(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function Jn(e, n, t, r) {
  const o = (l) => ({
    ...l,
    ...e.normalizer ? e.normalizer(l, t.value) : {}
  }), a = (l) => {
    ge(
      () => !(l.id in n.nodeMap && !n.nodeMap[l.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(l.id)}. Their labels are "${n.nodeMap[l.id].label}" and "${l.label}" respectively.`
    );
  }, i = (l) => {
    ge(
      () => !(l.children === void 0 && l.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, u = (l, c, s) => {
    let h = c.map((d) => [o(d), d]).map(([d, _], v) => {
      a(d), i(d);
      const { id: y, label: E, children: S, isDefaultExpanded: m } = d, f = l === se, R = f ? 0 : l.level + 1, O = Array.isArray(S) || S === null, k = !O, B = !!d.isDisabled || !e.flat && !f && l.isDisabled, p = !!d.isNew, I = (e.matchKeys || ["label"]).reduce((C, D) => ({
        ...C,
        [D]: Xn(d[D]).toLocaleLowerCase()
      }), {}), b = f ? I.label : l.nestedSearchLabel + " " + I.label;
      n.nodeMap[y] = ee();
      const N = n.nodeMap[y];
      if (Object.assign(N, {
        id: y,
        label: E,
        level: R,
        ancestors: f ? [] : [l].concat(l.ancestors),
        index: (f ? [] : l.index).concat(v),
        parentNode: l,
        lowerCased: I,
        nestedSearchLabel: b,
        isDisabled: B,
        isNew: p,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: O,
        isLeaf: k,
        isRootNode: f,
        raw: _
      }), O) {
        const C = Array.isArray(S);
        Object.assign(N, {
          childrenStates: { ...Kn(), isLoaded: C },
          isExpanded: typeof m == "boolean" ? m : R < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [Ee]: 0,
            [Ne]: 0,
            [we]: 0,
            [Te]: 0
          },
          children: C ? u(N, S, s) : []
        }), m === !0 && N.ancestors.forEach((D) => {
          D.isExpanded = !0;
        }), !C && typeof e.loadOptions != "function" ? ge(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !C && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((C) => {
        C.count && C.count[Ne]++;
      }), k && N.ancestors.forEach((C) => {
        C.count && C.count[Te]++;
      }), !f && l.count && (l.count[Ee] += 1, k && (l.count[we] += 1), B && (l.hasDisabledDescendants = !0)), s && s[y]) {
        const C = s[y];
        N.isMatched = C.isMatched, N.showAllChildrenOnSearch = C.showAllChildrenOnSearch, N.isHighlighted = C.isHighlighted, C.isBranch && N.isBranch && (N.isExpanded = C.isExpanded, N.isExpandedOnSearch = C.isExpandedOnSearch, C.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = { ...C.childrenStates });
      }
      return N;
    });
    if (e.branchNodesFirst) {
      const d = h.filter((v) => v.isBranch), _ = h.filter((v) => v.isLeaf);
      h = d.concat(_);
    }
    return h;
  };
  return {
    normalize: u,
    enhancedNormalizer: o,
    checkDuplication: a,
    verifyNodeShape: i
  };
}
const Dt = "ALL", At = "BRANCH_PRIORITY", It = "LEAF_PRIORITY", Mt = "ALL_WITH_INDETERMINATE";
function tn(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function Zn(e, n) {
  return e.level === n.level ? tn(e, n) : e.level - n.level;
}
function kt(e, n, t) {
  const r = ee();
  for (; e.length; ) {
    const o = e.shift(), a = t(o);
    a && (n.push(o), !a.isRootNode && (a.parentNode.id in r || (r[a.parentNode.id] = a.parentNode.children.length), --r[a.parentNode.id] === 0 && e.push(a.parentNode.id)));
  }
}
function er(e, n, t, r, o, a) {
  const i = T(() => n.selectedNodeIds.map((v) => t(v))), u = T(() => !e.multiple), l = T(() => {
    let v;
    if (u.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Dt)
      v = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === At)
      v = n.selectedNodeIds.filter((y) => {
        const E = t(y);
        return E ? E.isRootNode ? !0 : !r(E.parentNode) : !1;
      });
    else if (e.valueConsistsOf === It)
      v = n.selectedNodeIds.filter((y) => {
        const E = t(y);
        return E ? E.isLeaf ? !0 : E.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Mt) {
      const y = [];
      v = n.selectedNodeIds.slice(), i.value.forEach((E) => {
        E.ancestors.forEach((S) => {
          y.includes(S.id) || v.includes(S.id) || y.push(S.id);
        });
      }), v.push(...y);
    } else
      v = [];
    return e.sortValueBy === "LEVEL" ? v.sort((y, E) => Zn(t(y), t(E))) : e.sortValueBy === "INDEX" && v.sort((y, E) => tn(t(y), t(E))), v;
  }), c = T(() => l.value.length > 0);
  return {
    selectedNodes: i,
    single: u,
    internalValue: l,
    hasValue: c,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? l.value.slice() : l.value[0];
      const v = l.value.map((y) => t(y).raw);
      return e.multiple ? v : v[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((v) => a(v)).map((v) => v.id),
    extractNodeFromValue: (v) => {
      const y = { id: v };
      if (e.valueFormat === "id")
        return y;
      const E = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return nt(
        E,
        (m) => m && a(m).id === v
      ) || y;
    },
    fixSelectedNodeIds: (v, y) => {
      let E = [];
      if (u.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Dt)
        E = v;
      else if (e.valueConsistsOf === At)
        v.forEach((m) => {
          E.push(m);
          const f = t(m);
          f?.isBranch && o(f, (R) => {
            E.push(R.id);
          });
        });
      else if (e.valueConsistsOf === It)
        kt(v.slice(), E, t);
      else if (e.valueConsistsOf === Mt) {
        const m = v.filter((f) => {
          const R = t(f);
          return R && (R.isLeaf || R.children.length === 0);
        });
        kt(m, E, t);
      }
      Ze(n.selectedNodeIds, E) && (n.selectedNodeIds = E), y();
    }
  };
}
function tr(e, n, t, r, o, a, i, u, l, c, s, h, d, _, v) {
  let y = !1;
  const E = () => {
    const p = y;
    return y = !1, p;
  }, S = (p) => {
    t.selectedNodeIds.push(p.id), t.selectedNodeMap[p.id] = !0;
  }, m = (p) => {
    Yt(t.selectedNodeIds, p.id), delete t.selectedNodeMap[p.id];
  }, f = () => {
    s() && (d() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((p) => {
      const I = r(p);
      return I ? I.isDisabled : !1;
    }), u());
  }, R = (p) => {
    if (d() || e.disableBranchNodes)
      return S(p);
    if (e.flat) {
      S(p), e.autoSelectAncestors ? p.ancestors.forEach((b) => {
        !o(b) && !b.isDisabled && S(b);
      }) : e.autoSelectDescendants && a(p, (b) => {
        !o(b) && !b.isDisabled && S(b);
      });
      return;
    }
    const I = p.isLeaf || !p.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (I && S(p), p.isBranch && a(p, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && S(b);
    }), I) {
      let b = p;
      for (; (b = b.parentNode) !== se && (b && b.children.every(o)); )
        S(b);
    }
  }, O = (p) => {
    if (e.disableBranchNodes)
      return m(p);
    if (e.flat) {
      m(p), e.autoDeselectAncestors ? p.ancestors.forEach((b) => {
        o(b) && !b.isDisabled && m(b);
      }) : e.autoDeselectDescendants && a(p, (b) => {
        o(b) && !b.isDisabled && m(b);
      });
      return;
    }
    let I = !1;
    if (p.isBranch && i(p, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && (m(b), I = !0);
    }), p.isLeaf || I || p.isBranch && p.children.length === 0) {
      m(p);
      let b = p;
      for (; (b = b.parentNode) !== se && (b && o(b)); )
        m(b);
    }
  }, k = (p) => {
    if (e.disabled || p.isDisabled)
      return;
    d() && f();
    const I = e.multiple && !e.flat ? t.checkedStateMap[p.id] === rt : !o(p);
    I ? R(p) : O(p), u(), ne(() => {
      n(I ? "select" : "deselect", p.raw, _);
    }), v.active && I && (d() || e.clearOnSelect) && l(), d() && e.closeOnSelect && (c(), e.searchable && (y = !0));
  };
  return {
    select: k,
    clear: f,
    addValue: S,
    removeValue: m,
    removeLastValue: () => {
      if (!s()) return;
      if (d()) return f();
      const p = Xt(h());
      if (!p) return;
      const I = r(p);
      I && k(I);
    },
    resetFlags: E
  };
}
function nr(e, n, t, r, o, a, i, u, l, c, s, h, d) {
  const _ = ce({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), v = (w) => r.active ? w.isExpandedOnSearch || !1 : w.isExpanded || !1, y = (w) => !!(w.isMatched || w.isBranch && w.hasMatchedDescendants && !e.flattenSearchResults || !w.isRootNode && w.parentNode.showAllChildrenOnSearch), E = (w) => !(r.active && !y(w)), S = T(() => {
    const w = [];
    return a((M) => {
      if ((!r.active || y(M)) && w.push(M.id), M.isBranch && !v(M))
        return !1;
    }), w;
  }), m = T(() => S.value.length !== 0), f = (w, M = !0) => {
    const U = _.current;
    if (U != null && U in t.nodeMap && (t.nodeMap[U].isHighlighted = !1), !w) {
      _.current = null;
      return;
    }
    if (_.current = w.id, w.isHighlighted = !0, _.isOpen && M) {
      const le = () => {
        const ae = h();
        if (!ae) return;
        const ie = ae.querySelector(`.vue-treeselect__option[data-id="${w.id}"]`);
        ie && gn(ae, ie);
      };
      h() ? le() : ne(le);
    }
  }, R = () => {
    if (!m.value) return;
    const w = S.value[0], M = o(w);
    M && f(M);
  }, O = () => {
    if (!m.value) return;
    const M = S.value.indexOf(_.current) - 1;
    if (M === -1) return B();
    const U = o(S.value[M]);
    U && f(U);
  }, k = () => {
    if (!m.value) return;
    const M = S.value.indexOf(_.current) + 1;
    if (M === S.value.length) return R();
    const U = o(S.value[M]);
    U && f(U);
  }, B = () => {
    if (!m.value) return;
    const w = Xt(S.value);
    if (!w) return;
    const M = o(w);
    M && f(M);
  }, p = (w = !1) => {
    const { current: M } = _;
    (w || M == null || !(M in t.nodeMap) || !E(o(M))) && R();
  }, I = () => {
    const w = h();
    w && (_.lastScrollPosition = w.scrollTop);
  }, b = () => {
    const w = h();
    w && (w.scrollTop = _.lastScrollPosition);
  }, N = () => {
    !_.isOpen || !e.disabled && e.alwaysOpen || (I(), _.isOpen = !1, d(!1), l(), n("close", i(), u));
  }, C = () => {
    e.disabled || _.isOpen || (_.isOpen = !0, ne(p), ne(b), !e.options && !e.async && c(), d(!0), n("open", u));
  };
  return {
    menu: _,
    visibleOptionIds: S,
    hasVisibleOptions: m,
    shouldExpand: v,
    shouldShowOptionInMenu: E,
    openMenu: C,
    closeMenu: N,
    toggleMenu: () => {
      _.isOpen ? N() : C();
    },
    toggleExpanded: (w) => {
      let M;
      r.active ? (M = w.isExpandedOnSearch = !w.isExpandedOnSearch, M && (w.showAllChildrenOnSearch = !0)) : M = w.isExpanded = !w.isExpanded, M && !w.childrenStates.isLoaded && s(w);
    },
    setCurrentHighlightedOption: f,
    resetHighlightedOptionWhenNecessary: p,
    highlightFirstOption: R,
    highlightPrevOption: O,
    highlightNextOption: k,
    highlightLastOption: B,
    saveMenuScrollPosition: I,
    restoreMenuScrollPosition: b
  };
}
var Ge, Bt;
function rr() {
  if (Bt) return Ge;
  Bt = 1;
  function e(n, t) {
    var r = t.length, o = n.length;
    if (o > r)
      return !1;
    if (o === r)
      return n === t;
    e: for (var a = 0, i = 0; a < o; a++) {
      for (var u = n.charCodeAt(a); i < r; )
        if (t.charCodeAt(i++) === u)
          continue e;
      return !1;
    }
    return !0;
  }
  return Ge = e, Ge;
}
var or = rr();
const sr = /* @__PURE__ */ de(or);
function Ft(e, n, t) {
  return e ? sr(n, t) : Jt(t, n);
}
function lr(e, n, t, r) {
  const o = ce({
    active: !1,
    noResults: !0,
    countMap: ee()
  });
  return {
    localSearch: o,
    handleLocalSearch: () => {
      const { searchQuery: i } = n, u = () => r(!0);
      if (!i)
        return o.active = !1, u();
      o.active = !0, o.noResults = !0, t((s) => {
        s.isBranch && (s.isExpandedOnSearch = !1, s.showAllChildrenOnSearch = !1, s.isMatched = !1, s.hasMatchedDescendants = !1, o.countMap[s.id] = {
          [Ee]: 0,
          [Ne]: 0,
          [we]: 0,
          [Te]: 0
        });
      });
      const l = i.trim().toLocaleLowerCase(), c = l.replace(/\s+/g, " ").split(" ");
      t((s) => {
        e.searchNested && c.length > 1 ? s.isMatched = c.every(
          (h) => Ft(!1, h, s.nestedSearchLabel)
        ) : s.isMatched = (e.matchKeys || ["label"]).some(
          (h) => Ft(!e.disableFuzzyMatching, l, s.lowerCased[h])
        ), s.isMatched && (o.noResults = !1, s.ancestors.forEach((h) => {
          o.countMap[h.id][Ne]++;
        }), s.isLeaf && s.ancestors.forEach((h) => {
          o.countMap[h.id][Te]++;
        }), s.parentNode !== se && (o.countMap[s.parentNode.id][Ee] += 1, s.isLeaf && (o.countMap[s.parentNode.id][we] += 1))), (s.isMatched || s.isBranch && s.isExpandedOnSearch) && s.parentNode !== se && (s.parentNode.isExpandedOnSearch = !0, s.parentNode.hasMatchedDescendants = !0);
      }), u();
    }
  };
}
const ar = "ASYNC_SEARCH";
function ir(e) {
  return e.message || String(e);
}
function ur() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function cr(e, n, t, r, o) {
  const a = te(ee()), i = te(0), u = () => {
    const { searchQuery: c } = n, s = a.value[c] || {
      ...ur(),
      options: []
    };
    if (W(
      () => s.options,
      () => {
        n.searchQuery === c && r();
      },
      { deep: !0 }
    ), c === "") {
      if (Array.isArray(e.defaultOptions))
        return s.options = e.defaultOptions, s.isLoaded = !0, s;
      if (e.defaultOptions !== !0)
        return s.isLoaded = !0, s;
    }
    return a.value[c] || (a.value[c] = s), s;
  };
  return {
    remoteSearch: a,
    key: i,
    getRemoteSearchEntry: u,
    handleRemoteSearch: () => {
      const { searchQuery: c } = n, s = u(), h = () => {
        r(), o(!0);
      };
      if ((c === "" || e.cacheOptions) && s.isLoaded)
        return h();
      t({
        action: ar,
        args: { searchQuery: c },
        isPending: () => s.isLoading,
        start: () => {
          s.isLoading = !0, s.isLoaded = !1, s.loadingError = "";
        },
        succeed: (d) => {
          s.isLoaded = !0, s.options = d, n.searchQuery === c && h();
        },
        fail: (d) => {
          s.loadingError = ir(d);
        },
        end: () => {
          i.value += 1, s.isLoading = !1;
        }
      });
    }
  };
}
const dr = "LOAD_ROOT_OPTIONS", fr = "LOAD_CHILDREN_OPTIONS";
function $t(e) {
  return e.message || String(e);
}
function hr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function vr(e, n, t, r) {
  const o = ce(hr()), a = (l) => {
    const { action: c, args: s, isPending: h, start: d, succeed: _, fail: v, end: y } = l;
    if (!e.loadOptions || h())
      return;
    d();
    const E = Wn((m, f) => {
      m ? v(m) : _(f), y();
    }), S = e.loadOptions({
      id: t,
      instanceId: t,
      action: c,
      ...s,
      callback: E
    });
    Kt(S) && S.then(() => {
      E();
    }).catch((m) => {
      E(m);
    }).catch((m) => {
      console.error(m);
    });
  };
  return {
    rootOptionsStates: o,
    callLoadOptionsProp: a,
    loadRootOptions: () => {
      a({
        action: dr,
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
          o.loadingError = $t(l);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (l) => {
      const { id: c, raw: s } = l;
      a({
        action: fr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: s
        },
        isPending: () => {
          const h = n(c);
          return h ? h.childrenStates.isLoading : !1;
        },
        start: () => {
          const h = n(c);
          h && (h.childrenStates.isLoading = !0, h.childrenStates.loadingError = "");
        },
        succeed: () => {
          const h = n(c);
          h && (h.childrenStates.isLoaded = !0);
        },
        fail: (h) => {
          const d = n(c);
          d && (d.childrenStates.loadingError = $t(h));
        },
        end: () => {
          const h = n(c);
          h && (h.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
function pr(e, n, t, r, o, a) {
  const i = ce({
    isFocused: !1,
    searchQuery: ""
  }), u = () => {
    i.searchQuery = "";
  }, l = (x) => ({
    ...x,
    ...e.normalizer ? e.normalizer(x, t.value) : {}
  }), c = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((x) => l(x)).map((x) => x.id), s = Un(), h = Gn(c), { forest: d, isSelected: _ } = h, v = (x) => (ge(
    () => x != null,
    () => `Invalid node id: ${x}`
  ), x == null ? null : x in d.nodeMap ? d.nodeMap[x] : y(x)), y = (x) => {
    const P = E(x), ve = l(P).label || `${x} (unknown)`, Re = {
      id: x,
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
    return d.nodeMap[x] = Re, Re;
  }, E = (x) => {
    const P = { id: x };
    if (e.valueFormat === "id")
      return P;
    const ve = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return nt(
      ve,
      (lt) => lt && l(lt).id === x
    ) || P;
  };
  let S, m, f, R, O, k;
  const B = vr(
    e,
    v,
    t.value,
    (x) => m(x)
  );
  f = B.loadRootOptions, S = B.loadChildrenOptions, R = B.callLoadOptionsProp;
  const { rootOptionsStates: p } = B, I = Jn(
    e,
    d,
    t,
    S
  ), { normalize: b, enhancedNormalizer: N } = I, C = er(
    e,
    d,
    v,
    _,
    s.traverseDescendantsBFS,
    N
  ), { selectedNodes: D, single: F, internalValue: w, hasValue: M, getValue: U, fixSelectedNodeIds: le } = C;
  k = () => {
    const x = (P) => {
      s.traverseAllNodesByIndex(d.normalizedOptions, P);
    };
    h.buildForestState(
      e,
      D.value,
      x,
      _
    );
  };
  const ot = (x) => {
    d.selectedNodeIds.forEach((P) => {
      x[P] && (d.nodeMap[P] = {
        ...x[P],
        isFallbackNode: !0
      });
    });
  }, ae = () => (e.async, null);
  O = () => {
    const x = e.async ? ae() || [] : e.options || [];
    if (Array.isArray(x)) {
      const P = d.nodeMap;
      d.nodeMap = ee(), ot(P), d.normalizedOptions = b(se, x, P), le(w.value, k);
    } else
      d.normalizedOptions = [];
  };
  const ie = cr(
    e,
    i,
    R,
    O,
    (x) => m(x)
  ), { handleRemoteSearch: xe } = ie, fe = lr(
    e,
    i,
    (x) => {
      s.traverseAllNodesDFS(d.normalizedOptions, x);
    },
    (x) => m(x)
  ), { handleLocalSearch: st } = fe, un = (x) => {
    s.traverseAllNodesByIndex(d.normalizedOptions, x);
  }, $ = nr(
    e,
    n,
    d,
    fe.localSearch,
    v,
    un,
    U,
    t.value,
    u,
    f,
    S,
    r,
    a
  );
  m = $.resetHighlightedOptionWhenNecessary;
  const he = tr(
    e,
    n,
    d,
    v,
    _,
    s.traverseDescendantsBFS,
    s.traverseDescendantsDFS,
    k,
    u,
    $.closeMenu,
    () => M.value,
    () => w.value,
    () => F.value,
    t.value,
    fe.localSearch
  );
  return W(() => e.alwaysOpen, (x) => {
    x ? $.openMenu() : $.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    O();
  }), W(() => e.disabled, (x) => {
    x && $.menu.isOpen ? $.closeMenu() : !x && !$.menu.isOpen && e.alwaysOpen && $.openMenu();
  }), W(() => e.flat, () => {
    O();
  }), W(w, (x, P) => {
    Ze(x, P) && n("update:modelValue", U(), t.value);
  }), W(() => e.matchKeys, () => {
    O();
  }), W(() => e.multiple, (x) => {
    x && k();
  }), W(() => e.options, () => {
    e.async || (O(), p.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => i.searchQuery, () => {
    e.async ? xe() : st(), n("search-change", i.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const x = c();
    Ze(x, w.value) && le(x, k);
  }), be(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && f(), e.alwaysOpen && $.openMenu(), e.async && e.defaultOptions && xe();
  }), Se(() => {
    a(!1);
  }), {
    // State
    forest: pe(me(() => d)),
    trigger: i,
    menu: pe(me(() => $.menu)),
    localSearch: pe(me(() => fe.localSearch)),
    remoteSearch: pe(me(() => ie.remoteSearch)),
    rootOptionsStates: p,
    // Computed
    selectedNodes: D,
    single: F,
    internalValue: w,
    hasValue: M,
    visibleOptionIds: $.visibleOptionIds,
    hasVisibleOptions: $.hasVisibleOptions,
    // Node methods
    getNode: v,
    isSelected: _,
    // Traversal
    traverseDescendantsBFS: s.traverseDescendantsBFS,
    traverseDescendantsDFS: s.traverseDescendantsDFS,
    traverseAllNodesDFS: s.traverseAllNodesDFS,
    traverseAllNodesByIndex: s.traverseAllNodesByIndex,
    // Value
    getValue: U,
    extractCheckedNodeIdsFromValue: c,
    extractNodeFromValue: E,
    fixSelectedNodeIds: le,
    // Selection
    select: he.select,
    clear: he.clear,
    removeLastValue: he.removeLastValue,
    // Menu
    openMenu: $.openMenu,
    closeMenu: $.closeMenu,
    toggleMenu: $.toggleMenu,
    toggleExpanded: $.toggleExpanded,
    shouldExpand: $.shouldExpand,
    shouldShowOptionInMenu: $.shouldShowOptionInMenu,
    // Highlighting
    setCurrentHighlightedOption: $.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: $.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: $.highlightFirstOption,
    highlightPrevOption: $.highlightPrevOption,
    highlightNextOption: $.highlightNextOption,
    highlightLastOption: $.highlightLastOption,
    // Search
    handleLocalSearch: st,
    handleRemoteSearch: xe,
    resetSearchQuery: u,
    // Async
    loadRootOptions: f,
    loadChildrenOptions: S,
    // Helpers
    initialize: O,
    buildForestState: k,
    resetFlags: he.resetFlags,
    // DOM helpers
    getMenu: r,
    getControl: o
  };
}
const mr = ["name", "value"], _r = /* @__PURE__ */ K({
  __name: "HiddenFields",
  setup(e) {
    const n = Z("treeselect");
    function t(o) {
      return typeof o == "string" ? o : o != null && !$n(o) ? JSON.stringify(o) : "";
    }
    const r = T(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let o = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (o = [o.join(n.delimiter)]), o;
    });
    return (o, a) => (g(!0), A(re, null, ue(r.value, (i, u) => (g(), A("input", {
      key: `hidden-field-${u}`,
      type: "hidden",
      name: L(n).name,
      value: i
    }, null, 8, mr))), 128));
  }
}), gr = {
  key: 0,
  class: "vue-treeselect__input-container"
}, yr = ["tabindex", "required"], Or = ["tabindex"], nn = /* @__PURE__ */ K({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = Z("treeselect"), r = te(), o = te(), a = te(Lt), i = te(""), u = T(() => t.searchable), l = T(() => t.disabled), c = T(() => t.multiple), s = T(() => t.tabIndex), h = T(() => t.required), d = T(() => t.hasValue.value), _ = T(() => u.value && !l.value && c.value), v = T(() => ({
      width: _.value ? `${a.value}px` : void 0
    })), y = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], E = () => {
      o.value && (a.value = Math.max(
        Lt,
        o.value.scrollWidth + 15
      ));
    }, S = () => {
      t.trigger.searchQuery = i.value;
    }, m = () => {
      i.value = "", S();
    }, f = () => {
      !l.value && r.value && r.value.focus();
    }, R = () => {
      r.value && r.value.blur();
    }, O = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, k = () => {
      const N = t.getMenu?.();
      if (N && document.activeElement === N)
        return f();
      t.trigger.isFocused = !1, t.closeMenu();
    }, B = Cn(
      S,
      Qn,
      { leading: !0, trailing: !0 }
    ), p = () => {
      i.value ? B() : (B.cancel(), S());
    }, I = (N) => {
      const C = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Jt(y, C))
          return N.preventDefault(), t.openMenu();
        switch (C) {
          case q.BACKSPACE: {
            t.backspaceRemoves && !i.value.length && t.removeLastValue();
            break;
          }
          case q.ENTER: {
            if (N.preventDefault(), t.menu.value.current === null) return;
            const D = t.getNode(t.menu.value.current);
            if (!D || D.isBranch && t.disableBranchNodes) return;
            t.select(D);
            break;
          }
          case q.ESCAPE: {
            i.value.length ? m() : t.menu.value.isOpen && t.closeMenu();
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
            const D = t.menu.value.current;
            if (D === null) break;
            const F = t.getNode(D);
            F && (F.isBranch && t.shouldExpand(F) ? (N.preventDefault(), t.toggleExpanded(F)) : !F.isRootNode && (F.isLeaf || F.isBranch && !t.shouldExpand(F)) && (N.preventDefault(), t.setCurrentHighlightedOption(F.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const D = t.menu.value.current;
            if (D === null) break;
            const F = t.getNode(D);
            F && F.isBranch && !t.shouldExpand(F) && (N.preventDefault(), t.toggleExpanded(F));
            break;
          }
          case q.ARROW_DOWN: {
            N.preventDefault(), t.highlightNextOption();
            break;
          }
          case q.DELETE: {
            t.deleteRemoves && !i.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, b = (N) => {
      i.value.length && N.stopPropagation();
    };
    return W(() => t.trigger.searchQuery, (N) => {
      i.value = N;
    }), W(i, () => {
      _.value && ne(E);
    }), n({
      clear: m,
      focus: f,
      blur: R
    }), (N, C) => u.value && !l.value ? (g(), A("div", gr, [
      cn(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: s.value,
        required: h.value && !d.value,
        "onUpdate:modelValue": C[0] || (C[0] = (D) => i.value = D),
        style: Ke(v.value),
        onFocus: O,
        onInput: p,
        onBlur: k,
        onKeydown: I,
        onMousedown: b
      }, null, 44, yr), [
        [dn, i.value]
      ]),
      _.value ? (g(), A("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, H(i.value), 513)) : Y("", !0)
    ])) : (g(), A("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: l.value ? void 0 : s.value,
      onFocus: O,
      onBlur: k,
      onKeydown: I
    }, null, 40, Or));
  }
}), rn = /* @__PURE__ */ K({
  __name: "Placeholder",
  setup(e) {
    const n = Z("treeselect"), t = T(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (r, o) => (g(), A("div", {
      class: G(t.value)
    }, H(L(n).placeholder), 3));
  }
}), br = {
  key: 0,
  class: "vue-treeselect__single-value"
}, Sr = /* @__PURE__ */ K({
  __name: "SingleValue",
  setup(e) {
    const n = Z("treeselect"), t = et(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), o = T(() => n.selectedNodes.value[0]), a = T(() => t["value-label"]);
    return (i, u) => (g(), A(re, null, [
      r.value ? (g(), A("div", br, [
        a.value ? (g(), V(tt(a.value), {
          key: 0,
          node: o.value
        }, null, 8, ["node"])) : (g(), A(re, { key: 1 }, [
          Q(H(o.value.label), 1)
        ], 64))
      ])) : Y("", !0),
      X(rn),
      X(nn, { ref: "input" }, null, 512)
    ], 64));
  }
}), Er = {
  name: "vue-treeselect--x"
}, on = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function wr(e, n, t, r, o, a) {
  return g(), A("svg", Nr, [...n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const sn = /* @__PURE__ */ on(Er, [["render", wr]]), Tr = { class: "vue-treeselect__multi-value-item-container" }, xr = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, Rr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, Lr = /* @__PURE__ */ K({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = et(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), a = T(() => t["value-label"]), i = oe(function() {
      r.select(n.node);
    });
    return (u, l) => (g(), A("div", Tr, [
      z("div", {
        class: G(o.value),
        onMousedown: l[0] || (l[0] = //@ts-ignore
        (...c) => L(i) && L(i)(...c))
      }, [
        a.value ? (g(), V(tt(a.value), {
          key: 0,
          node: e.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (g(), A("span", xr, H(e.node.label), 1)),
        z("span", Rr, [
          X(sn)
        ])
      ], 34)
    ]));
  }
}), Cr = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Dr = { class: "vue-treeselect__limit-tip-text" }, Ar = /* @__PURE__ */ K({
  __name: "MultiValue",
  setup(e) {
    const n = Z("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((a) => a !== null)), r = T(() => n.internalValue.value.length > n.limit), o = T(() => {
      const a = n.internalValue.value.length - n.limit;
      return n.limitText(a);
    });
    return (a, i) => (g(), V(fn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (g(!0), A(re, null, ue(t.value, (u) => (g(), V(Lr, {
          key: `multi-value-item-${u.id}`,
          node: u
        }, null, 8, ["node"]))), 128)),
        r.value ? (g(), A("div", Cr, [
          z("span", Dr, H(o.value), 1)
        ])) : Y("", !0),
        X(rn, { key: "placeholder" }),
        X(nn, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Ir = {
  name: "vue-treeselect--arrow"
}, Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function kr(e, n, t, r, o, a) {
  return g(), A("svg", Mr, [...n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const ln = /* @__PURE__ */ on(Ir, [["render", kr]]), Br = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Fr = ["title"], $r = /* @__PURE__ */ K({
  __name: "Control",
  setup(e) {
    const n = Z("treeselect"), t = Z("instance"), r = T(() => n.single.value), o = T(() => n.hasValue.value && n.internalValue.value.some((h) => {
      const d = n.getNode(h);
      return d && !d.isDisabled;
    })), a = T(() => n.clearable && !n.disabled && n.hasValue.value && (o.value || n.allowClearingDisabled)), i = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), u = T(() => n.multiple ? n.clearAllText : n.clearValueText), l = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), c = oe(function(h) {
      h.stopPropagation(), h.preventDefault();
      const d = n.beforeClearAll(), _ = (v) => {
        v && n.clear();
      };
      Kt(d) ? d.then((v) => _(v)) : setTimeout(() => _(d), 0);
    }), s = oe(function(h) {
      h.preventDefault(), h.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (h, d) => (g(), A("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: d[2] || (d[2] = //@ts-ignore
      (..._) => L(t).handleMouseDown && L(t).handleMouseDown(..._))
    }, [
      z("div", Br, [
        r.value ? (g(), V(Sr, { key: 0 })) : (g(), V(Ar, { key: 1 }))
      ], 512),
      a.value ? (g(), A("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: u.value,
        onMousedown: d[0] || (d[0] = //@ts-ignore
        (..._) => L(c) && L(c)(..._))
      }, [
        X(sn, { class: "vue-treeselect__x" })
      ], 40, Fr)) : Y("", !0),
      i.value ? (g(), A("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: d[1] || (d[1] = //@ts-ignore
        (..._) => L(s) && L(s)(..._))
      }, [
        X(ln, {
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
    return (n, t) => (g(), A("div", {
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
        Xe(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Hr = ["data-id"], zr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Pr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, qr = {
  key: 0,
  class: "vue-treeselect__list"
}, Wr = ["title"], Vt = "vue-treeselect__label", Ht = "vue-treeselect__count", zt = /* @__PURE__ */ K({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = et(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), a = T(() => n.node.isBranch && r.shouldExpand(n.node)), i = T(() => r.shouldShowOptionInMenu(n.node)), u = T(() => !r.shouldFlattenOptions || !i.value), l = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !i.value
    })), c = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": a.value
    })), s = T(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), h = T(() => {
      const B = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": B === en,
        "vue-treeselect__checkbox--indeterminate": B === Zt,
        "vue-treeselect__checkbox--unchecked": B === rt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), d = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), _ = T(() => d.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), v = T(() => t["option-label"]), y = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), E = T(() => n.node.childrenStates?.isLoaded && (!n.node.children || n.node.children.length === 0)), S = T(() => n.node.childrenStates?.isLoading || !1), m = T(() => !!n.node.childrenStates?.loadingError), f = (B) => {
      B.target === B.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, R = oe(function() {
      r.toggleExpanded(n.node);
    }), O = oe(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), k = oe(function() {
      r.loadChildrenOptions(n.node);
    });
    return (B, p) => {
      const I = hn("Option", !0);
      return g(), A("div", {
        class: G(o.value)
      }, [
        z("div", {
          class: G(l.value),
          "data-id": e.node.id,
          onMouseenter: f
        }, [
          e.node.isBranch && u.value ? (g(), A("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: p[0] || (p[0] = //@ts-ignore
            (...b) => L(R) && L(R)(...b))
          }, [
            X(Je, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                X(ln, {
                  class: G(c.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : L(r).hasBranchNodes && u.value ? (g(), A("div", zr, "   ")) : Y("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: p[1] || (p[1] = //@ts-ignore
            (...b) => L(O) && L(O)(...b))
          }, [
            s.value ? (g(), A("div", Pr, [
              z("span", {
                class: G(h.value)
              }, [...p[3] || (p[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ])], 2)
            ])) : Y("", !0),
            v.value ? (g(), V(tt(v.value), {
              key: 1,
              node: e.node,
              shouldShowCount: d.value,
              count: _.value,
              labelClassName: Vt,
              countClassName: Ht
            }, null, 8, ["node", "shouldShowCount", "count"])) : (g(), A("label", {
              key: 2,
              class: G(Vt)
            }, [
              Q(H(e.node.label) + " ", 1),
              d.value ? (g(), A("span", {
                key: 0,
                class: G(Ht)
              }, " (" + H(_.value) + ") ", 1)) : Y("", !0)
            ]))
          ], 32)
        ], 42, Hr),
        e.node.isBranch ? (g(), V(Je, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            a.value ? (g(), A("div", qr, [
              (g(!0), A(re, null, ue(y.value, (b) => (g(), V(I, {
                key: b.id,
                node: b
              }, null, 8, ["node"]))), 128)),
              E.value ? (g(), V(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(r).noChildrenText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              S.value ? (g(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(L(r).loadingText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              m.value ? (g(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(e.node.childrenStates?.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: L(r).retryTitle,
                    onMousedown: p[2] || (p[2] = //@ts-ignore
                    (...b) => L(k) && L(k)(...b))
                  }, H(L(r).retryText), 41, Wr)
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
}), jr = ["title"], Yr = {
  key: 4,
  class: "vue-treeselect__list"
}, Ur = ["title"], Qr = {
  key: 4,
  class: "vue-treeselect__list"
}, an = /* @__PURE__ */ K({
  __name: "Menu",
  setup(e) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, t = Z("treeselect");
    let r = null, o = null;
    const a = T(() => ({
      maxHeight: t.maxHeight + "px"
    })), i = T(() => ({
      zIndex: t.appendToBody ? null : t.zIndex
    })), u = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), l = T(() => t.getRemoteSearchEntry()), c = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), s = T(() => {
      if (c.value) return !1;
      const m = l.value;
      return m.isLoaded && m.options.length === 0;
    }), h = () => {
      if (!t.menu.value.isOpen) return;
      const m = t.getMenu(), f = t.getControl();
      if (!m || !f) return;
      const R = m.getBoundingClientRect(), O = f.getBoundingClientRect(), k = R.height, B = window.innerHeight, p = O.top, I = window.innerHeight - O.bottom, b = O.top >= 0 && O.top <= B || O.top < 0 && O.bottom > 0, N = I > k + Ct, C = p > k + Ct;
      b ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : N || !C ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, d = () => {
      const m = t.getMenu();
      r || !m || (r = {
        remove: Qt(m, h)
      });
    }, _ = () => {
      const m = t.getControl();
      o || !m || (o = {
        remove: Gt(m, h)
      });
    }, v = () => {
      r && (r.remove(), r = null);
    }, y = () => {
      o && (o.remove(), o = null);
    }, E = () => {
      h(), d(), _();
    }, S = () => {
      v(), y();
    };
    return W(
      () => t.menu.value.isOpen,
      (m) => {
        m ? ne(E) : S();
      }
    ), be(() => {
      t.menu.value.isOpen && ne(E);
    }), Se(() => {
      S();
    }), (m, f) => (g(), A("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Ke(i.value)
    }, [
      X(Je, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          L(t).menu.value.isOpen ? (g(), A("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Ke(a.value),
            onMousedown: f[2] || (f[2] = //@ts-ignore
            (...R) => L(t).handleMouseDown && L(t).handleMouseDown(...R))
          }, [
            Xe(m.$slots, "before-list"),
            L(t).async ? (g(), A(re, { key: 0 }, [
              c.value ? (g(), V(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).searchPromptText), 1)
                ]),
                _: 1
              })) : l.value.isLoading ? (g(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(L(t).loadingText), 1)
                ]),
                _: 1
              })) : l.value.loadingError ? (g(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(l.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: L(t).retryTitle,
                    onClick: f[0] || (f[0] = //@ts-ignore
                    (...R) => L(t).handleRemoteSearch && L(t).handleRemoteSearch(...R))
                  }, H(L(t).retryText), 9, jr)
                ]),
                _: 1
              })) : s.value ? (g(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).noResultsText), 1)
                ]),
                _: 1
              })) : (g(), A("div", Yr, [
                (g(!0), A(re, null, ue(L(t).forest.value.normalizedOptions, (R) => (g(), V(zt, {
                  key: R.id,
                  node: R
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (g(), A(re, { key: 1 }, [
              L(t).rootOptionsStates.isLoading ? (g(), V(J, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(L(t).loadingText), 1)
                ]),
                _: 1
              })) : L(t).rootOptionsStates.loadingError ? (g(), V(J, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(L(t).rootOptionsStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: L(t).retryTitle,
                    onClick: f[1] || (f[1] = //@ts-ignore
                    (...R) => L(t).loadRootOptions && L(t).loadRootOptions(...R))
                  }, H(L(t).retryText), 9, Ur)
                ]),
                _: 1
              })) : u.value ? (g(), V(J, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).noOptionsText), 1)
                ]),
                _: 1
              })) : L(t).localSearch.value.active && L(t).localSearch.value.noResults ? (g(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).noResultsText), 1)
                ]),
                _: 1
              })) : (g(), A("div", Qr, [
                (g(!0), A(re, null, ue(L(t).forest.value.normalizedOptions, (R) => (g(), V(zt, {
                  key: R.id,
                  node: R
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            Xe(m.$slots, "after-list")
          ], 36)) : Y("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), Gr = { class: "vue-treeselect__menu-placeholder" }, Kr = /* @__PURE__ */ K({
  __name: "MenuPortal",
  setup(e) {
    const n = Z("treeselect"), t = (u) => K({
      name: "vue-treeselect--portal-target",
      setup() {
        let l = null, c = null, s = null;
        const h = () => {
          if (!s) return;
          const f = u.getControl();
          if (!f) return;
          const R = f.getBoundingClientRect();
          s.style.width = R.width + "px";
        }, d = () => {
          if (!s) return;
          const f = u.getControl();
          if (!f) return;
          const R = s.querySelector(".vue-treeselect__menu-container");
          if (!R) return;
          const O = f.getBoundingClientRect(), k = s.getBoundingClientRect(), B = u.menu.value.placement === "bottom" ? O.height : 0, p = Math.round(O.left - k.left) + "px", I = Math.round(O.top - k.top + B) + "px", N = nt(["transform", "webkitTransform", "MozTransform", "msTransform"], (C) => C in document.body.style);
          N && (R.style[N] = `translate(${p}, ${I})`);
        }, _ = () => {
          const f = u.getControl();
          l || !f || (l = {
            remove: Gt(f, d)
          });
        }, v = () => {
          const f = u.getControl();
          c || !f || (c = {
            remove: Qt(f, () => {
              h(), d();
            })
          });
        }, y = () => {
          l && (l.remove(), l = null);
        }, E = () => {
          c && (c.remove(), c = null);
        }, S = () => {
          h(), d(), _(), v();
        }, m = () => {
          y(), E();
        };
        return W(
          () => u.menu.value.isOpen,
          (f) => {
            f ? ne(S) : m();
          }
        ), W(
          () => u.menu.value.placement,
          () => {
            d();
          }
        ), be(() => {
          s = document.body.lastElementChild, u.menu.value.isOpen && ne(S);
        }), Se(() => {
          m();
        }), () => at("div", {
          class: ["vue-treeselect__portal-target", u.wrapperClass],
          style: { zIndex: u.zIndex },
          "data-instance-id": u.getInstanceId()
        }, [
          at(an)
        ]);
      }
    });
    let r = null, o = null;
    const a = () => {
      const u = document.createElement("div");
      document.body.appendChild(u), o = u;
      const l = t(n);
      r = vn(l), r.provide("treeselect", n), r.mount(u);
    }, i = () => {
      r && o && (o.parentNode?.removeChild(o), r.unmount(), r = null, o = null);
    };
    return be(() => {
      a();
    }), Se(() => {
      i();
    }), (u, l) => (g(), A("div", Gr));
  }
}), lo = /* @__PURE__ */ K({
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
    const r = e, o = t, a = te(), i = te(), u = te(), l = te(), c = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
      set: () => {
      }
    }), s = () => {
      if (r.appendToBody) {
        const O = document.body.querySelector(".vue-treeselect__menu");
        return O && O.nodeName !== "#comment" ? O : null;
      } else {
        const O = u.value?.$refs?.menu || u.value?.$refs?.["menu-container"]?.querySelector(".vue-treeselect__menu");
        return O && O.nodeName !== "#comment" ? O : null;
      }
    }, h = () => {
      const O = i.value?.$el;
      return O && O.nodeName !== "#comment" ? O : null;
    }, d = () => i.value?.$refs?.["value-container"], _ = () => d()?.$refs?.input, v = () => {
      _()?.focus();
    }, y = () => {
      _()?.blur();
    }, E = (O) => {
      O ? document.addEventListener("mousedown", S, !1) : document.removeEventListener("mousedown", S, !1);
    }, S = (O) => {
      a.value && !a.value.contains(O.target) && (y(), f.closeMenu());
    }, m = oe(function(O) {
      if (O.preventDefault(), O.stopPropagation(), r.disabled) return;
      d()?.$el?.contains(O.target) && !f.menu.value.isOpen && (r.openOnClick || f.trigger.isFocused) && f.openMenu(), (f.resetFlags ? f.resetFlags() : !1) ? y() : v(), f.resetFlags && f.resetFlags();
    }), f = pr(
      r,
      o,
      c,
      s,
      h,
      E
    ), R = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": f.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": f.trigger.isFocused,
      "vue-treeselect--has-value": f.hasValue.value,
      "vue-treeselect--open": f.menu.value.isOpen,
      "vue-treeselect--open-above": f.menu.value.placement === "top",
      "vue-treeselect--open-below": f.menu.value.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
    }));
    return Object.defineProperties(f, {
      wrapperClass: {
        get() {
          return R.value;
        }
      },
      zIndex: {
        get() {
          return r.zIndex;
        }
      },
      getInstanceId: {
        value: () => c.value
      }
    }), it("treeselect", f), it("instance", {
      getInput: _,
      focusInput: v,
      blurInput: y,
      getValueContainer: d,
      handleMouseDown: m
    }), n({
      // Node methods
      getNode: f.getNode,
      // Traversal
      traverseAllNodesDFS: f.traverseAllNodesDFS,
      traverseAllNodesByIndex: f.traverseAllNodesByIndex,
      // Menu
      openMenu: f.openMenu,
      closeMenu: f.closeMenu,
      toggleMenu: f.toggleMenu,
      // Selection
      select: f.select,
      clear: f.clear,
      // Value
      getValue: f.getValue,
      // Focus
      focusInput: v,
      blurInput: y
    }), (O, k) => (g(), A("div", {
      ref_key: "wrapper",
      ref: a,
      class: G(R.value)
    }, [
      X(_r),
      X($r, {
        ref_key: "control",
        ref: i
      }, null, 512),
      e.appendToBody ? (g(), V(Kr, {
        key: 0,
        ref_key: "portal",
        ref: l
      }, null, 512)) : (g(), V(an, {
        key: 1,
        ref_key: "menu",
        ref: u
      }, null, 512))
    ], 2));
  }
});
export {
  no as ALL,
  so as ALL_WITH_INDETERMINATE,
  to as ASYNC_SEARCH,
  ro as BRANCH_PRIORITY,
  en as CHECKED,
  Zt as INDETERMINATE,
  oo as LEAF_PRIORITY,
  eo as LOAD_CHILDREN_OPTIONS,
  Zr as LOAD_ROOT_OPTIONS,
  lo as Treeselect,
  rt as UNCHECKED,
  lo as default,
  vr as useAsyncOptions,
  Gn as useForestState,
  lr as useLocalSearch,
  nr as useMenu,
  Jn as useNodeNormalization,
  Un as useNodeTraversal,
  cr as useRemoteSearch,
  tr as useSelection,
  pr as useTreeselect,
  er as useValue
};
