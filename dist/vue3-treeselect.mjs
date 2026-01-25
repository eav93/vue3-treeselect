import { reactive as ce, computed as N, nextTick as ne, ref as te, watch as W, onMounted as ge, onUnmounted as ye, readonly as on, toRef as ln, defineComponent as J, inject as G, openBlock as y, createElementBlock as M, Fragment as re, renderList as ie, unref as A, withDirectives as an, createElementVNode as z, normalizeStyle as Pe, vModelText as cn, toDisplayString as V, createCommentVNode as U, normalizeClass as Q, createBlock as F, resolveDynamicComponent as Ue, createTextVNode as Y, createVNode as X, TransitionGroup as un, withCtx as j, renderSlot as qe, resolveComponent as dn, Transition as We, createApp as fn, provide as Xe } from "vue";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ue(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var be, Je;
function hn() {
  if (Je) return be;
  Je = 1;
  function t() {
  }
  return be = t, be;
}
var vn = hn();
const pn = /* @__PURE__ */ ue(vn), pe = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  pn
) : function(n, e) {
  if (!n()) {
    const s = ["[Vue-Treeselect Warning]"].concat(e());
    console.error(...s);
  }
};
function se(t) {
  return function(e, ...s) {
    e.type === "mousedown" && e.button === 0 && t.call(this, e, ...s);
  };
}
function mn(t, n) {
  const e = t.getBoundingClientRect(), s = n.getBoundingClientRect(), r = n.offsetHeight / 3;
  s.bottom + r > e.bottom ? t.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - t.offsetHeight + r,
    t.scrollHeight
  ) : s.top - r < e.top && (t.scrollTop = Math.max(n.offsetTop - r, 0));
}
var Se, Ze;
function zt() {
  if (Ze) return Se;
  Ze = 1;
  function t(n) {
    var e = typeof n;
    return n != null && (e == "object" || e == "function");
  }
  return Se = t, Se;
}
var Ee, et;
function _n() {
  if (et) return Ee;
  et = 1;
  var t = typeof ve == "object" && ve && ve.Object === Object && ve;
  return Ee = t, Ee;
}
var Ne, tt;
function Pt() {
  if (tt) return Ne;
  tt = 1;
  var t = _n(), n = typeof self == "object" && self && self.Object === Object && self, e = t || n || Function("return this")();
  return Ne = e, Ne;
}
var Te, nt;
function gn() {
  if (nt) return Te;
  nt = 1;
  var t = Pt(), n = function() {
    return t.Date.now();
  };
  return Te = n, Te;
}
var Le, rt;
function yn() {
  if (rt) return Le;
  rt = 1;
  var t = /\s/;
  function n(e) {
    for (var s = e.length; s-- && t.test(e.charAt(s)); )
      ;
    return s;
  }
  return Le = n, Le;
}
var we, st;
function On() {
  if (st) return we;
  st = 1;
  var t = yn(), n = /^\s+/;
  function e(s) {
    return s && s.slice(0, t(s) + 1).replace(n, "");
  }
  return we = e, we;
}
var Re, ot;
function qt() {
  if (ot) return Re;
  ot = 1;
  var t = Pt(), n = t.Symbol;
  return Re = n, Re;
}
var Ce, lt;
function bn() {
  if (lt) return Ce;
  lt = 1;
  var t = qt(), n = Object.prototype, e = n.hasOwnProperty, s = n.toString, r = t ? t.toStringTag : void 0;
  function a(c) {
    var f = e.call(c, r), o = c[r];
    try {
      c[r] = void 0;
      var u = !0;
    } catch {
    }
    var i = s.call(c);
    return u && (f ? c[r] = o : delete c[r]), i;
  }
  return Ce = a, Ce;
}
var xe, at;
function Sn() {
  if (at) return xe;
  at = 1;
  var t = Object.prototype, n = t.toString;
  function e(s) {
    return n.call(s);
  }
  return xe = e, xe;
}
var De, it;
function En() {
  if (it) return De;
  it = 1;
  var t = qt(), n = bn(), e = Sn(), s = "[object Null]", r = "[object Undefined]", a = t ? t.toStringTag : void 0;
  function c(f) {
    return f == null ? f === void 0 ? r : s : a && a in Object(f) ? n(f) : e(f);
  }
  return De = c, De;
}
var Ae, ct;
function Nn() {
  if (ct) return Ae;
  ct = 1;
  function t(n) {
    return n != null && typeof n == "object";
  }
  return Ae = t, Ae;
}
var Ie, ut;
function Tn() {
  if (ut) return Ie;
  ut = 1;
  var t = En(), n = Nn(), e = "[object Symbol]";
  function s(r) {
    return typeof r == "symbol" || n(r) && t(r) == e;
  }
  return Ie = s, Ie;
}
var Me, dt;
function Wt() {
  if (dt) return Me;
  dt = 1;
  var t = On(), n = zt(), e = Tn(), s = NaN, r = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, c = /^0o[0-7]+$/i, f = parseInt;
  function o(u) {
    if (typeof u == "number")
      return u;
    if (e(u))
      return s;
    if (n(u)) {
      var i = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = n(i) ? i + "" : i;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = t(u);
    var l = a.test(u);
    return l || c.test(u) ? f(u.slice(2), l ? 2 : 8) : r.test(u) ? s : +u;
  }
  return Me = o, Me;
}
var ke, ft;
function Ln() {
  if (ft) return ke;
  ft = 1;
  var t = zt(), n = gn(), e = Wt(), s = "Expected a function", r = Math.max, a = Math.min;
  function c(f, o, u) {
    var i, l, v, g, p, E, b = 0, T = !1, d = !1, O = !0;
    if (typeof f != "function")
      throw new TypeError(s);
    o = e(o) || 0, t(u) && (T = !!u.leading, d = "maxWait" in u, v = d ? r(e(u.maxWait) || 0, o) : v, O = "trailing" in u ? !!u.trailing : O);
    function h(C) {
      var H = i, w = l;
      return i = l = void 0, b = C, g = f.apply(w, H), g;
    }
    function m(C) {
      return b = C, p = setTimeout(_, o), T ? h(C) : g;
    }
    function S(C) {
      var H = C - E, w = C - b, k = o - H;
      return d ? a(k, v - w) : k;
    }
    function B(C) {
      var H = C - E, w = C - b;
      return E === void 0 || H >= o || H < 0 || d && w >= v;
    }
    function _() {
      var C = n();
      if (B(C))
        return D(C);
      p = setTimeout(_, S(C));
    }
    function D(C) {
      return p = void 0, O && i ? h(C) : (i = l = void 0, g);
    }
    function x() {
      p !== void 0 && clearTimeout(p), b = 0, i = E = l = p = void 0;
    }
    function L() {
      return p === void 0 ? g : D(n());
    }
    function I() {
      var C = n(), H = B(C);
      if (i = arguments, l = this, E = C, H) {
        if (p === void 0)
          return m(E);
        if (d)
          return clearTimeout(p), p = setTimeout(_, o), h(E);
      }
      return p === void 0 && (p = setTimeout(_, o)), g;
    }
    return I.cancel = x, I.flush = L, I;
  }
  return ke = c, ke;
}
var wn = Ln();
const Rn = /* @__PURE__ */ ue(wn);
var Cn = function(t, n) {
  var e = document.createElement("_"), s = e.appendChild(document.createElement("_")), r = e.appendChild(document.createElement("_")), a = s.appendChild(document.createElement("_")), c = void 0, f = void 0;
  return s.style.cssText = e.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = r.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", t.appendChild(e), o(), i;
  function o() {
    u();
    var l = t.offsetWidth, v = t.offsetHeight;
    (l !== c || v !== f) && (c = l, f = v, r.style.width = l * 2 + "px", r.style.height = v * 2 + "px", e.scrollLeft = e.scrollWidth, e.scrollTop = e.scrollHeight, s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, n({ width: l, height: v })), s.addEventListener("scroll", o), e.addEventListener("scroll", o);
  }
  function u() {
    s.removeEventListener("scroll", o), e.removeEventListener("scroll", o);
  }
  function i() {
    u(), t.removeChild(e);
  }
};
function jt(t, n) {
  const e = t.indexOf(n);
  e !== -1 && t.splice(e, 1);
}
let me;
const _e = [], xn = 100;
function Dn() {
  me = setInterval(() => {
    _e.forEach(Ut);
  }, xn);
}
function An() {
  me && (clearInterval(me), me = null);
}
function Ut(t) {
  const { $el: n, listener: e, lastWidth: s, lastHeight: r } = t, a = n.offsetWidth, c = n.offsetHeight;
  (s !== a || r !== c) && (t.lastWidth = a, t.lastHeight = c, e({ width: a, height: c }));
}
function In(t, n) {
  const e = {
    $el: t,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, s = () => {
    jt(_e, e), _e.length || An();
  };
  return _e.push(e), Ut(e), Dn(), s;
}
function Kt(t, n) {
  const e = document.documentMode === 9;
  let s = !0;
  const c = (e ? In : Cn)(t, (...f) => {
    s || n(...f);
  });
  return s = !1, c;
}
function Mn(t) {
  const n = [];
  let e = t.parentNode;
  for (; e && e.nodeName !== "BODY" && e.nodeType === document.ELEMENT_NODE; )
    kn(e) && n.push(e), e = e.parentNode;
  return n.push(window), n;
}
function kn(t) {
  const { overflow: n, overflowX: e, overflowY: s } = getComputedStyle(t);
  return /(auto|scroll|overlay)/.test(n + s + e);
}
function Yt(t, n) {
  const e = Mn(t);
  return window.addEventListener("resize", n, { passive: !0 }), e.forEach((s) => {
    s.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), e.forEach((r) => {
      r.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Bn(t) {
  return t !== t;
}
function Qt(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
var Be, ht;
function $n() {
  if (ht) return Be;
  ht = 1;
  var t = Wt(), n = 1 / 0, e = 17976931348623157e292;
  function s(r) {
    if (!r)
      return r === 0 ? r : 0;
    if (r = t(r), r === n || r === -n) {
      var a = r < 0 ? -1 : 1;
      return a * e;
    }
    return r === r ? r : 0;
  }
  return Be = s, Be;
}
var $e, vt;
function Fn() {
  if (vt) return $e;
  vt = 1;
  var t = $n();
  function n(e) {
    var s = t(e), r = s % 1;
    return s === s ? r ? s - r : s : 0;
  }
  return $e = n, $e;
}
var Fe, pt;
function Vn() {
  if (pt) return Fe;
  pt = 1;
  var t = Fn(), n = "Expected a function";
  function e(s, r) {
    var a;
    if (typeof r != "function")
      throw new TypeError(n);
    return s = t(s), function() {
      return --s > 0 && (a = r.apply(this, arguments)), s <= 1 && (r = void 0), a;
    };
  }
  return Fe = e, Fe;
}
var Ve, mt;
function Hn() {
  if (mt) return Ve;
  mt = 1;
  var t = Vn();
  function n(e) {
    return t(2, e);
  }
  return Ve = n, Ve;
}
var zn = Hn();
const Pn = /* @__PURE__ */ ue(zn), ee = () => /* @__PURE__ */ Object.create(null);
var He, _t;
function qn() {
  if (_t) return He;
  _t = 1;
  function t(n) {
    var e = n == null ? 0 : n.length;
    return e ? n[e - 1] : void 0;
  }
  return He = t, He;
}
var Wn = qn();
const Gt = /* @__PURE__ */ ue(Wn);
function Xt(t, n) {
  return t.indexOf(n) !== -1;
}
function Ke(t, n, e) {
  for (let s = 0, r = t.length; s < r; s++)
    if (n.call(e, t[s], s, t)) return t[s];
}
function je(t, n) {
  if (t.length !== n.length) return !0;
  for (let e = 0; e < t.length; e++)
    if (t[e] !== n[e]) return !0;
  return !1;
}
function jn() {
  const t = (r, a) => {
    if (!r.isBranch) return;
    const c = r.children.slice();
    for (; c.length; ) {
      const f = c[0];
      f.isBranch && c.push(...f.children), a(f), c.shift();
    }
  }, n = (r, a) => {
    r.isBranch && r.children.forEach((c) => {
      n(c, a), a(c);
    });
  };
  return {
    traverseDescendantsBFS: t,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (r, a) => {
      r.forEach((c) => {
        n(c, a), a(c);
      });
    },
    traverseAllNodesByIndex: (r, a) => {
      const c = (f) => {
        f.children && f.children.forEach((o) => {
          a(o) !== !1 && o.isBranch && o.children && c(o);
        });
      };
      c({ children: r });
    }
  };
}
const Un = 0, Kn = 1, Yn = 2;
function Qn(t) {
  const n = ce({
    normalizedOptions: [],
    nodeMap: ee(),
    checkedStateMap: ee(),
    selectedNodeIds: t(),
    selectedNodeMap: ee()
  });
  return {
    forest: n,
    buildForestState: (r, a, c, f) => {
      const o = ee();
      n.selectedNodeIds.forEach((i) => {
        o[i] = !0;
      }), n.selectedNodeMap = o;
      const u = ee();
      r.multiple && (c((i) => {
        u[i.id] = Un;
      }), a.forEach((i) => {
        u[i.id] = Yn, !r.flat && !r.disableBranchNodes && i.ancestors.forEach((l) => {
          f(l) || (u[l.id] = Kn);
        });
      })), n.checkedStateMap = u;
    },
    isSelected: (r) => !!r && n.selectedNodeMap[r.id] === !0
  };
}
const Gn = null, gt = "ALL_CHILDREN", yt = "ALL_DESCENDANTS", Ot = "LEAF_CHILDREN", bt = "LEAF_DESCENDANTS";
function Xn() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Jn(t) {
  return typeof t == "string" ? t : typeof t == "number" && !isNaN(t) ? t + "" : "";
}
function Zn(t, n, e, s) {
  const r = (o) => ({
    ...o,
    ...t.normalizer ? t.normalizer(o, e.value) : {}
  }), a = (o) => {
    pe(
      () => !(o.id in n.nodeMap && !n.nodeMap[o.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(o.id)}. Their labels are "${n.nodeMap[o.id].label}" and "${o.label}" respectively.`
    );
  }, c = (o) => {
    pe(
      () => !(o.children === void 0 && o.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, f = (o, u, i) => {
    let l = u.map((v) => [r(v), v]).map(([v, g], p) => {
      a(v), c(v);
      const { id: E, label: b, children: T, isDefaultExpanded: d } = v, O = o === Gn, h = O ? 0 : o.level + 1, m = Array.isArray(T) || T === null, S = !m, B = !!v.isDisabled || !t.flat && !O && o.isDisabled, _ = !!v.isNew, D = (t.matchKeys || ["label"]).reduce((I, C) => ({
        ...I,
        [C]: Jn(v[C]).toLocaleLowerCase()
      }), {}), x = O ? D.label : o.nestedSearchLabel + " " + D.label;
      n.nodeMap[E] = ee();
      const L = n.nodeMap[E];
      if (Object.assign(L, {
        id: E,
        label: b,
        level: h,
        ancestors: O ? [] : [o].concat(o.ancestors),
        index: (O ? [] : o.index).concat(p),
        parentNode: o,
        lowerCased: D,
        nestedSearchLabel: x,
        isDisabled: B,
        isNew: _,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: m,
        isLeaf: S,
        isRootNode: O,
        raw: g
      }), m) {
        const I = Array.isArray(T);
        Object.assign(L, {
          childrenStates: { ...Xn(), isLoaded: I },
          isExpanded: typeof d == "boolean" ? d : h < (t.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [gt]: 0,
            [yt]: 0,
            [Ot]: 0,
            [bt]: 0
          },
          children: I ? f(L, T, i) : []
        }), d === !0 && L.ancestors.forEach((C) => {
          C.isExpanded = !0;
        }), !I && typeof t.loadOptions != "function" ? pe(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !I && L.isExpanded && s(L);
      }
      if (L.ancestors.forEach((I) => I.count[yt]++), S && L.ancestors.forEach((I) => I.count[bt]++), O || (o.count[gt] += 1, S && (o.count[Ot] += 1), B && (o.hasDisabledDescendants = !0)), i && i[E]) {
        const I = i[E];
        L.isMatched = I.isMatched, L.showAllChildrenOnSearch = I.showAllChildrenOnSearch, L.isHighlighted = I.isHighlighted, I.isBranch && L.isBranch && (L.isExpanded = I.isExpanded, L.isExpandedOnSearch = I.isExpandedOnSearch, I.childrenStates.isLoaded && !L.childrenStates.isLoaded ? L.isExpanded = !1 : L.childrenStates = { ...I.childrenStates });
      }
      return L;
    });
    if (t.branchNodesFirst) {
      const v = l.filter((p) => p.isBranch), g = l.filter((p) => p.isLeaf);
      l = v.concat(g);
    }
    return l;
  };
  return {
    normalize: f,
    enhancedNormalizer: r,
    checkDuplication: a,
    verifyNodeShape: c
  };
}
const St = "ALL", Et = "BRANCH_PRIORITY", Nt = "LEAF_PRIORITY", Tt = "ALL_WITH_INDETERMINATE";
function Jt(t, n) {
  let e = 0;
  do {
    if (t.level < e) return -1;
    if (n.level < e) return 1;
    if (t.index[e] !== n.index[e]) return t.index[e] - n.index[e];
    e++;
  } while (!0);
}
function er(t, n) {
  return t.level === n.level ? Jt(t, n) : t.level - n.level;
}
function tr(t, n, e, s, r, a) {
  const c = N(() => n.selectedNodeIds.map((p) => e(p))), f = N(() => !t.multiple), o = N(() => {
    let p;
    if (f.value || t.flat || t.disableBranchNodes || t.valueConsistsOf === St)
      p = n.selectedNodeIds.slice();
    else if (t.valueConsistsOf === Et)
      p = n.selectedNodeIds.filter((E) => {
        const b = e(E);
        return b ? b.isRootNode ? !0 : !s(b.parentNode) : !1;
      });
    else if (t.valueConsistsOf === Nt)
      p = n.selectedNodeIds.filter((E) => {
        const b = e(E);
        return b ? b.isLeaf ? !0 : b.children.length === 0 : !1;
      });
    else if (t.valueConsistsOf === Tt) {
      const E = [];
      p = n.selectedNodeIds.slice(), c.value.forEach((b) => {
        b.ancestors.forEach((T) => {
          E.includes(T.id) || p.includes(T.id) || E.push(T.id);
        });
      }), p.push(...E);
    } else
      p = [];
    return t.sortValueBy === "LEVEL" ? p.sort((E, b) => er(e(E), e(b))) : t.sortValueBy === "INDEX" && p.sort((E, b) => Jt(e(E), e(b))), p;
  }), u = N(() => o.value.length > 0);
  return {
    selectedNodes: c,
    single: f,
    internalValue: o,
    hasValue: u,
    getValue: () => {
      if (t.valueFormat === "id")
        return t.multiple ? o.value.slice() : o.value[0];
      const p = o.value.map((E) => e(E).raw);
      return t.multiple ? p : p[0];
    },
    extractCheckedNodeIdsFromValue: () => t.modelValue == null ? [] : t.valueFormat === "id" ? t.multiple ? t.modelValue.slice() : [t.modelValue] : (t.multiple ? t.modelValue : [t.modelValue]).map((p) => a(p)).map((p) => p.id),
    extractNodeFromValue: (p) => {
      const E = { id: p };
      if (t.valueFormat === "id")
        return E;
      const b = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : t.modelValue ? [t.modelValue] : [];
      return Ke(
        b,
        (d) => d && a(d).id === p
      ) || E;
    },
    fixSelectedNodeIds: (p, E) => {
      let b = [];
      if (f.value || t.flat || t.disableBranchNodes || t.valueConsistsOf === St)
        b = p;
      else if (t.valueConsistsOf === Et)
        p.forEach((d) => {
          b.push(d);
          const O = e(d);
          O != null && O.isBranch && r(O, (h) => {
            b.push(h.id);
          });
        });
      else if (t.valueConsistsOf === Nt) {
        const d = ee(), O = p.slice();
        for (; O.length; ) {
          const h = O.shift(), m = e(h);
          m && (b.push(h), !m.isRootNode && (m.parentNode.id in d || (d[m.parentNode.id] = m.parentNode.children.length), --d[m.parentNode.id] === 0 && O.push(m.parentNode.id)));
        }
      } else if (t.valueConsistsOf === Tt) {
        const d = ee(), O = p.filter((h) => {
          const m = e(h);
          return m && (m.isLeaf || m.children.length === 0);
        });
        for (; O.length; ) {
          const h = O.shift(), m = e(h);
          m && (b.push(h), !m.isRootNode && (m.parentNode.id in d || (d[m.parentNode.id] = m.parentNode.children.length), --d[m.parentNode.id] === 0 && O.push(m.parentNode.id)));
        }
      }
      je(n.selectedNodeIds, b) && (n.selectedNodeIds = b), E();
    }
  };
}
const Lt = null, nr = 0;
function rr(t, n, e, s, r, a, c, f, o, u, i, l, v, g, p) {
  let E = !1;
  const b = () => {
    E = !1;
  }, T = (_) => {
    e.selectedNodeIds.push(_.id), e.selectedNodeMap[_.id] = !0;
  }, d = (_) => {
    jt(e.selectedNodeIds, _.id), delete e.selectedNodeMap[_.id];
  }, O = () => {
    i() && (v() || t.allowClearingDisabled ? e.selectedNodeIds = [] : e.selectedNodeIds = e.selectedNodeIds.filter((_) => {
      const D = s(_);
      return D ? D.isDisabled : !1;
    }), f());
  }, h = (_) => {
    if (v() || t.disableBranchNodes)
      return T(_);
    if (t.flat) {
      T(_), t.autoSelectAncestors ? _.ancestors.forEach((x) => {
        !r(x) && !x.isDisabled && T(x);
      }) : t.autoSelectDescendants && a(_, (x) => {
        !r(x) && !x.isDisabled && T(x);
      });
      return;
    }
    const D = _.isLeaf || !_.hasDisabledDescendants || t.allowSelectingDisabledDescendants;
    if (D && T(_), _.isBranch && a(_, (x) => {
      (!x.isDisabled || t.allowSelectingDisabledDescendants) && T(x);
    }), D) {
      let x = _;
      for (; (x = x.parentNode) !== Lt && (x && x.children.every(r)); )
        T(x);
    }
  }, m = (_) => {
    if (t.disableBranchNodes)
      return d(_);
    if (t.flat) {
      d(_), t.autoDeselectAncestors ? _.ancestors.forEach((x) => {
        r(x) && !x.isDisabled && d(x);
      }) : t.autoDeselectDescendants && a(_, (x) => {
        r(x) && !x.isDisabled && d(x);
      });
      return;
    }
    let D = !1;
    if (_.isBranch && c(_, (x) => {
      (!x.isDisabled || t.allowSelectingDisabledDescendants) && (d(x), D = !0);
    }), _.isLeaf || D || _.isBranch && _.children.length === 0) {
      d(_);
      let x = _;
      for (; (x = x.parentNode) !== Lt && (x && r(x)); )
        d(x);
    }
  }, S = (_) => {
    if (t.disabled || _.isDisabled)
      return;
    v() && O();
    const D = t.multiple && !t.flat ? e.checkedStateMap[_.id] === nr : !r(_);
    D ? h(_) : m(_), f(), ne(() => {
      n(D ? "select" : "deselect", _.raw, g);
    }), p.active && D && (v() || t.clearOnSelect) && o(), v() && t.closeOnSelect && (u(), t.searchable && (E = !0));
  };
  return {
    select: S,
    clear: O,
    addValue: T,
    removeValue: d,
    removeLastValue: () => {
      if (!i()) return;
      if (v()) return O();
      const _ = Gt(l());
      if (!_) return;
      const D = s(_);
      D && S(D);
    },
    resetFlags: b,
    getBlurOnSelectFlag: () => E,
    setBlurOnSelectFlag: (_) => {
      E = _;
    }
  };
}
function sr(t, n, e, s, r, a, c, f, o, u, i, l, v) {
  const g = ce({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), p = (w) => s.active ? w.isExpandedOnSearch || !1 : w.isExpanded || !1, E = (w) => !!(w.isMatched || w.isBranch && w.hasMatchedDescendants && !t.flattenSearchResults || !w.isRootNode && w.parentNode.showAllChildrenOnSearch), b = (w) => !(s.active && !E(w)), T = N(() => {
    const w = [];
    return a((k) => {
      if ((!s.active || E(k)) && w.push(k.id), k.isBranch && !p(k))
        return !1;
    }), w;
  }), d = N(() => T.value.length !== 0), O = (w, k = !0) => {
    const K = g.current;
    if (K != null && K in e.nodeMap && (e.nodeMap[K].isHighlighted = !1), !w) {
      g.current = null;
      return;
    }
    if (g.current = w.id, w.isHighlighted = !0, g.isOpen && k) {
      const de = () => {
        const oe = l();
        if (!oe) return;
        const le = oe.querySelector(`.vue-treeselect__option[data-id="${w.id}"]`);
        le && mn(oe, le);
      };
      l() ? de() : ne(de);
    }
  }, h = () => {
    if (!d.value) return;
    const w = T.value[0], k = r(w);
    k && O(k);
  }, m = () => {
    if (!d.value) return;
    const k = T.value.indexOf(g.current) - 1;
    if (k === -1) return B();
    const K = r(T.value[k]);
    K && O(K);
  }, S = () => {
    if (!d.value) return;
    const k = T.value.indexOf(g.current) + 1;
    if (k === T.value.length) return h();
    const K = r(T.value[k]);
    K && O(K);
  }, B = () => {
    if (!d.value) return;
    const w = Gt(T.value);
    if (!w) return;
    const k = r(w);
    k && O(k);
  }, _ = (w = !1) => {
    const { current: k } = g;
    (w || k == null || !(k in e.nodeMap) || !b(r(k))) && h();
  }, D = () => {
    const w = l();
    w && (g.lastScrollPosition = w.scrollTop);
  }, x = () => {
    const w = l();
    w && (w.scrollTop = g.lastScrollPosition);
  }, L = () => {
    !g.isOpen || !t.disabled && t.alwaysOpen || (D(), g.isOpen = !1, v(!1), o(), n("close", c(), f));
  }, I = () => {
    t.disabled || g.isOpen || (g.isOpen = !0, ne(_), ne(x), !t.options && !t.async && u(), v(!0), n("open", f));
  };
  return {
    menu: g,
    visibleOptionIds: T,
    hasVisibleOptions: d,
    shouldExpand: p,
    shouldShowOptionInMenu: b,
    openMenu: I,
    closeMenu: L,
    toggleMenu: () => {
      g.isOpen ? L() : I();
    },
    toggleExpanded: (w) => {
      let k;
      s.active ? (k = w.isExpandedOnSearch = !w.isExpandedOnSearch, k && (w.showAllChildrenOnSearch = !0)) : k = w.isExpanded = !w.isExpanded, k && !w.childrenStates.isLoaded && i(w);
    },
    setCurrentHighlightedOption: O,
    resetHighlightedOptionWhenNecessary: _,
    highlightFirstOption: h,
    highlightPrevOption: m,
    highlightNextOption: S,
    highlightLastOption: B,
    saveMenuScrollPosition: D,
    restoreMenuScrollPosition: x
  };
}
var ze, wt;
function or() {
  if (wt) return ze;
  wt = 1;
  function t(n, e) {
    var s = e.length, r = n.length;
    if (r > s)
      return !1;
    if (r === s)
      return n === e;
    e: for (var a = 0, c = 0; a < r; a++) {
      for (var f = n.charCodeAt(a); c < s; )
        if (e.charCodeAt(c++) === f)
          continue e;
      return !1;
    }
    return !0;
  }
  return ze = t, ze;
}
var lr = or();
const ar = /* @__PURE__ */ ue(lr), Rt = null, Ct = "ALL_CHILDREN", xt = "ALL_DESCENDANTS", Dt = "LEAF_CHILDREN", At = "LEAF_DESCENDANTS";
function It(t, n, e) {
  return t ? ar(n, e) : Xt(e, n);
}
function ir(t, n, e, s) {
  const r = ce({
    active: !1,
    noResults: !0,
    countMap: ee()
  });
  return {
    localSearch: r,
    handleLocalSearch: () => {
      const { searchQuery: c } = n, f = () => s(!0);
      if (!c)
        return r.active = !1, f();
      r.active = !0, r.noResults = !0, e((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, r.countMap[i.id] = {
          [Ct]: 0,
          [xt]: 0,
          [Dt]: 0,
          [At]: 0
        });
      });
      const o = c.trim().toLocaleLowerCase(), u = o.replace(/\s+/g, " ").split(" ");
      e((i) => {
        t.searchNested && u.length > 1 ? i.isMatched = u.every(
          (l) => It(!1, l, i.nestedSearchLabel)
        ) : i.isMatched = (t.matchKeys || ["label"]).some(
          (l) => It(!t.disableFuzzyMatching, o, i.lowerCased[l])
        ), i.isMatched && (r.noResults = !1, i.ancestors.forEach((l) => {
          r.countMap[l.id][xt]++;
        }), i.isLeaf && i.ancestors.forEach((l) => {
          r.countMap[l.id][At]++;
        }), i.parentNode !== Rt && (r.countMap[i.parentNode.id][Ct] += 1, i.isLeaf && (r.countMap[i.parentNode.id][Dt] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== Rt && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), f();
    }
  };
}
const cr = "ASYNC_SEARCH";
function ur(t) {
  return t.message || String(t);
}
function dr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function fr(t, n, e, s, r) {
  const a = te(ee()), c = te(0), f = () => {
    const { searchQuery: u } = n, i = a.value[u] || {
      ...dr(),
      options: []
    };
    if (W(
      () => i.options,
      () => {
        n.searchQuery === u && s();
      },
      { deep: !0 }
    ), u === "") {
      if (Array.isArray(t.defaultOptions))
        return i.options = t.defaultOptions, i.isLoaded = !0, i;
      if (t.defaultOptions !== !0)
        return i.isLoaded = !0, i;
    }
    return a.value[u] || (a.value[u] = i), i;
  };
  return {
    remoteSearch: a,
    key: c,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: u } = n, i = f(), l = () => {
        s(), r(!0);
      };
      if ((u === "" || t.cacheOptions) && i.isLoaded)
        return l();
      e({
        action: cr,
        args: { searchQuery: u },
        isPending: () => i.isLoading,
        start: () => {
          i.isLoading = !0, i.isLoaded = !1, i.loadingError = "";
        },
        succeed: (v) => {
          i.isLoaded = !0, i.options = v, n.searchQuery === u && l();
        },
        fail: (v) => {
          i.loadingError = ur(v);
        },
        end: () => {
          c.value += 1, i.isLoading = !1;
        }
      });
    }
  };
}
const hr = "LOAD_ROOT_OPTIONS", vr = "LOAD_CHILDREN_OPTIONS";
function Mt(t) {
  return t.message || String(t);
}
function pr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function mr(t, n, e, s) {
  const r = ce(pr()), a = (o) => {
    const { action: u, args: i, isPending: l, start: v, succeed: g, fail: p, end: E } = o;
    if (!t.loadOptions || l())
      return;
    v();
    const b = Pn((d, O) => {
      d ? p(d) : g(O), E();
    }), T = t.loadOptions({
      id: e,
      instanceId: e,
      action: u,
      ...i,
      callback: b
    });
    Qt(T) && T.then(() => {
      b();
    }).catch((d) => {
      b(d);
    }).catch((d) => {
      console.error(d);
    });
  };
  return {
    rootOptionsStates: r,
    callLoadOptionsProp: a,
    loadRootOptions: () => {
      a({
        action: hr,
        isPending: () => r.isLoading,
        start: () => {
          r.isLoading = !0, r.loadingError = "";
        },
        succeed: () => {
          r.isLoaded = !0, ne(() => {
            s(!0);
          });
        },
        fail: (o) => {
          r.loadingError = Mt(o);
        },
        end: () => {
          r.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (o) => {
      const { id: u, raw: i } = o;
      a({
        action: vr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: i
        },
        isPending: () => {
          const l = n(u);
          return l ? l.childrenStates.isLoading : !1;
        },
        start: () => {
          const l = n(u);
          l && (l.childrenStates.isLoading = !0, l.childrenStates.loadingError = "");
        },
        succeed: () => {
          const l = n(u);
          l && (l.childrenStates.isLoaded = !0);
        },
        fail: (l) => {
          const v = n(u);
          v && (v.childrenStates.loadingError = Mt(l));
        },
        end: () => {
          const l = n(u);
          l && (l.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const kt = null;
function _r(t, n, e, s, r) {
  const a = ce({
    isFocused: !1,
    searchQuery: ""
  }), c = () => {
    a.searchQuery = "";
  }, f = (R) => ({
    ...R,
    ...t.normalizer ? t.normalizer(R, e.value) : {}
  }), o = () => t.modelValue == null ? [] : t.valueFormat === "id" ? t.multiple ? t.modelValue.slice() : [t.modelValue] : (t.multiple ? t.modelValue : [t.modelValue]).map((R) => f(R)).map((R) => R.id), u = jn(), i = Qn(o), { forest: l, isSelected: v } = i, g = (R) => (pe(
    () => R != null,
    () => `Invalid node id: ${R}`
  ), R == null ? null : R in l.nodeMap ? l.nodeMap[R] : p(R)), p = (R) => {
    const P = E(R), ae = f(P).label || `${R} (unknown)`, Oe = {
      id: R,
      label: ae,
      ancestors: [],
      parentNode: kt,
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
    return l.nodeMap[R] = Oe, Oe;
  }, E = (R) => {
    const P = { id: R };
    if (t.valueFormat === "id")
      return P;
    const ae = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : t.modelValue ? [t.modelValue] : [];
    return Ke(
      ae,
      (Ge) => Ge && f(Ge).id === R
    ) || P;
  };
  let b, T, d, O, h, m;
  const S = mr(
    t,
    g,
    e.value,
    (R) => T(R)
  );
  d = S.loadRootOptions, b = S.loadChildrenOptions, O = S.callLoadOptionsProp;
  const { rootOptionsStates: B } = S, _ = Zn(
    t,
    l,
    e,
    b
  ), { normalize: D, enhancedNormalizer: x } = _, L = tr(
    t,
    l,
    g,
    v,
    u.traverseDescendantsBFS,
    x
  ), { selectedNodes: I, single: C, internalValue: H, hasValue: w, getValue: k, fixSelectedNodeIds: K } = L;
  m = () => {
    const R = (P) => {
      u.traverseAllNodesByIndex(l.normalizedOptions, P);
    };
    i.buildForestState(
      t,
      I.value,
      R,
      v
    );
  };
  const de = (R) => {
    l.selectedNodeIds.forEach((P) => {
      if (!R[P]) return;
      const ae = {
        ...R[P],
        isFallbackNode: !0
      };
      l.nodeMap[P] = ae;
    });
  }, Ye = () => (t.async, null);
  h = () => {
    const R = t.async ? Ye() || [] : t.options || [];
    if (Array.isArray(R)) {
      const P = l.nodeMap;
      l.nodeMap = ee(), de(P), l.normalizedOptions = D(kt, R, P), K(H.value, m);
    } else
      l.normalizedOptions = [];
  };
  const oe = fr(
    t,
    a,
    O,
    h,
    (R) => T(R)
  ), { handleRemoteSearch: le } = oe, fe = ir(
    t,
    a,
    (R) => {
      u.traverseAllNodesDFS(l.normalizedOptions, R);
    },
    (R) => T(R)
  ), { handleLocalSearch: Qe } = fe, sn = (R) => {
    u.traverseAllNodesByIndex(l.normalizedOptions, R);
  }, $ = sr(
    t,
    n,
    l,
    fe.localSearch,
    g,
    sn,
    k,
    e.value,
    c,
    d,
    b,
    s,
    r
  );
  T = $.resetHighlightedOptionWhenNecessary;
  const he = rr(
    t,
    n,
    l,
    g,
    v,
    u.traverseDescendantsBFS,
    u.traverseDescendantsDFS,
    m,
    c,
    $.closeMenu,
    () => w.value,
    () => H.value,
    () => C.value,
    e.value,
    fe.localSearch
  );
  return W(() => t.alwaysOpen, (R) => {
    R ? $.openMenu() : $.closeMenu();
  }), W(() => t.branchNodesFirst, () => {
    h();
  }), W(() => t.disabled, (R) => {
    R && $.menu.isOpen ? $.closeMenu() : !R && !$.menu.isOpen && t.alwaysOpen && $.openMenu();
  }), W(() => t.flat, () => {
    h();
  }), W(H, (R, P) => {
    je(R, P) && n("update:modelValue", k(), e.value);
  }), W(() => t.matchKeys, () => {
    h();
  }), W(() => t.multiple, (R) => {
    R && m();
  }), W(() => t.options, () => {
    t.async || (h(), B.isLoaded = Array.isArray(t.options));
  }, { deep: !0, immediate: !0 }), W(() => a.searchQuery, () => {
    t.async ? le() : Qe(), n("search-change", a.searchQuery, e.value);
  }), W(() => t.modelValue, () => {
    const R = o();
    je(R, H.value) && K(R, m);
  }), ge(() => {
    t.autoFocus, !t.options && !t.async && t.autoLoadRootOptions && d(), t.alwaysOpen && $.openMenu(), t.async && t.defaultOptions && le();
  }), ye(() => {
    r(!1);
  }), {
    // State
    forest: on(ln(() => l)),
    trigger: a,
    menu: $.menu,
    localSearch: fe.localSearch,
    remoteSearch: oe.remoteSearch,
    rootOptionsStates: B,
    // Computed
    selectedNodes: I,
    single: C,
    internalValue: H,
    hasValue: w,
    visibleOptionIds: $.visibleOptionIds,
    hasVisibleOptions: $.hasVisibleOptions,
    // Node methods
    getNode: g,
    isSelected: v,
    // Traversal
    traverseDescendantsBFS: u.traverseDescendantsBFS,
    traverseDescendantsDFS: u.traverseDescendantsDFS,
    traverseAllNodesDFS: u.traverseAllNodesDFS,
    traverseAllNodesByIndex: u.traverseAllNodesByIndex,
    // Value
    getValue: k,
    extractCheckedNodeIdsFromValue: o,
    extractNodeFromValue: E,
    fixSelectedNodeIds: K,
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
    handleLocalSearch: Qe,
    handleRemoteSearch: le,
    resetSearchQuery: c,
    // Async
    loadRootOptions: d,
    loadChildrenOptions: b,
    // Helpers
    initialize: h,
    buildForestState: m,
    resetFlags: he.resetFlags
  };
}
const gr = ["name", "value"], yr = /* @__PURE__ */ J({
  __name: "HiddenFields",
  setup(t) {
    const n = G("treeselect");
    function e(r) {
      return typeof r == "string" ? r : r != null && !Bn(r) ? JSON.stringify(r) : "";
    }
    const s = N(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let r = n.internalValue.value.map(e);
      return n.multiple && n.joinValues && (r = [r.join(n.delimiter)]), r;
    });
    return (r, a) => (y(!0), M(re, null, ie(s.value, (c, f) => (y(), M("input", {
      key: `hidden-field-${f}`,
      type: "hidden",
      name: A(n).name,
      value: c
    }, null, 8, gr))), 128));
  }
}), Or = 0, br = 1, Sr = 2, ls = "LOAD_ROOT_OPTIONS", as = "LOAD_CHILDREN_OPTIONS", is = "ASYNC_SEARCH", cs = "ALL", us = "BRANCH_PRIORITY", ds = "LEAF_PRIORITY", fs = "ALL_WITH_INDETERMINATE", q = {
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
}, Er = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Bt = 5, $t = 40, Nr = {
  key: 0,
  class: "vue-treeselect__input-container"
}, Tr = ["tabindex", "required"], Lr = ["tabindex"], Zt = /* @__PURE__ */ J({
  __name: "Input",
  setup(t, { expose: n }) {
    const e = G("treeselect");
    G("instance");
    const s = te(), r = te(), a = te(Bt), c = te(""), f = N(() => e.searchable), o = N(() => e.disabled), u = N(() => e.multiple), i = N(() => e.tabIndex), l = N(() => e.required), v = N(() => e.hasValue.value), g = N(() => f.value && !o.value && u.value), p = N(() => ({
      width: g.value ? `${a.value}px` : void 0
    })), E = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], b = () => {
      r.value && (a.value = Math.max(
        Bt,
        r.value.scrollWidth + 15
      ));
    }, T = () => {
      e.trigger.searchQuery = c.value;
    }, d = () => {
      c.value = "", T();
    }, O = () => {
      !o.value && s.value && s.value.focus();
    }, h = () => {
      s.value && s.value.blur();
    }, m = () => {
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    }, S = () => {
      var I;
      const L = (I = e.getMenu) == null ? void 0 : I.call(e);
      if (L && document.activeElement === L)
        return O();
      e.trigger.isFocused = !1, e.closeMenu();
    }, B = Rn(
      T,
      Er,
      { leading: !0, trailing: !0 }
    ), _ = () => {
      c.value ? B() : (B.cancel(), T());
    }, D = (L) => {
      const I = L.which || L.keyCode;
      if (!(L.ctrlKey || L.shiftKey || L.altKey || L.metaKey)) {
        if (!e.menu.isOpen && Xt(E, I))
          return L.preventDefault(), e.openMenu();
        switch (I) {
          case q.BACKSPACE: {
            e.backspaceRemoves && !c.value.length && e.removeLastValue();
            break;
          }
          case q.ENTER: {
            if (L.preventDefault(), e.menu.current === null) return;
            const C = e.getNode(e.menu.current);
            if (!C || C.isBranch && e.disableBranchNodes) return;
            e.select(C);
            break;
          }
          case q.ESCAPE: {
            c.value.length ? d() : e.menu.isOpen && e.closeMenu();
            break;
          }
          case q.END: {
            L.preventDefault(), e.highlightLastOption();
            break;
          }
          case q.HOME: {
            L.preventDefault(), e.highlightFirstOption();
            break;
          }
          case q.ARROW_LEFT: {
            const C = e.getNode(e.menu.current);
            C && (C.isBranch && e.shouldExpand(C) ? (L.preventDefault(), e.toggleExpanded(C)) : !C.isRootNode && (C.isLeaf || C.isBranch && !e.shouldExpand(C)) && (L.preventDefault(), e.setCurrentHighlightedOption(C.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            L.preventDefault(), e.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const C = e.getNode(e.menu.current);
            C && C.isBranch && !e.shouldExpand(C) && (L.preventDefault(), e.toggleExpanded(C));
            break;
          }
          case q.ARROW_DOWN: {
            L.preventDefault(), e.highlightNextOption();
            break;
          }
          case q.DELETE: {
            e.deleteRemoves && !c.value.length && e.removeLastValue();
            break;
          }
          default:
            e.openMenu();
        }
      }
    }, x = (L) => {
      c.value.length && L.stopPropagation();
    };
    return W(() => e.trigger.searchQuery, (L) => {
      c.value = L;
    }), W(c, () => {
      g.value && ne(b);
    }), n({
      clear: d,
      focus: O,
      blur: h
    }), (L, I) => f.value && !o.value ? (y(), M("div", Nr, [
      an(z("input", {
        ref_key: "inputRef",
        ref: s,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: i.value,
        required: l.value && !v.value,
        "onUpdate:modelValue": I[0] || (I[0] = (C) => c.value = C),
        style: Pe(p.value),
        onFocus: m,
        onInput: _,
        onBlur: S,
        onKeydown: D,
        onMousedown: x
      }, null, 44, Tr), [
        [cn, c.value]
      ]),
      g.value ? (y(), M("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: r,
        class: "vue-treeselect__sizer"
      }, V(c.value), 513)) : U("", !0)
    ])) : (y(), M("div", {
      key: 1,
      ref_key: "inputRef",
      ref: s,
      class: "vue-treeselect__input-container",
      tabindex: o.value ? void 0 : i.value,
      onFocus: m,
      onBlur: S,
      onKeydown: D
    }, null, 40, Lr));
  }
}), en = /* @__PURE__ */ J({
  __name: "Placeholder",
  setup(t) {
    const n = G("treeselect"), e = N(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (s, r) => (y(), M("div", {
      class: Q(e.value)
    }, V(A(n).placeholder), 3));
  }
}), wr = {
  key: 0,
  class: "vue-treeselect__single-value"
}, Rr = /* @__PURE__ */ J({
  __name: "SingleValue",
  setup(t) {
    const n = G("treeselect"), e = N(() => n.hasValue.value && !n.trigger.searchQuery), s = N(() => n.selectedNodes.value[0]), r = N(() => {
      var a;
      return (a = n.$slots) == null ? void 0 : a["value-label"];
    });
    return (a, c) => (y(), M(re, null, [
      e.value ? (y(), M("div", wr, [
        r.value ? (y(), F(Ue(r.value), {
          key: 0,
          node: s.value
        }, null, 8, ["node"])) : (y(), M(re, { key: 1 }, [
          Y(V(s.value.label), 1)
        ], 64))
      ])) : U("", !0),
      X(en),
      X(Zt, { ref: "input" }, null, 512)
    ], 64));
  }
}), Cr = {
  name: "vue-treeselect--x"
}, tn = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, r] of n)
    e[s] = r;
  return e;
}, xr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Dr(t, n, e, s, r, a) {
  return y(), M("svg", xr, n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ]));
}
const nn = /* @__PURE__ */ tn(Cr, [["render", Dr]]), Ar = { class: "vue-treeselect__multi-value-item-container" }, Ir = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, Mr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, kr = /* @__PURE__ */ J({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(t) {
    const n = t, e = G("treeselect"), s = N(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), r = N(() => {
      var c;
      return (c = e.$slots) == null ? void 0 : c["value-label"];
    }), a = se(function() {
      e.select(n.node);
    });
    return (c, f) => (y(), M("div", Ar, [
      z("div", {
        class: Q(s.value),
        onMousedown: f[0] || (f[0] = //@ts-ignore
        (...o) => A(a) && A(a)(...o))
      }, [
        r.value ? (y(), F(Ue(r.value), {
          key: 0,
          node: c.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (y(), M("span", Ir, V(c.node.label), 1)),
        z("span", Mr, [
          X(nn)
        ])
      ], 34)
    ]));
  }
}), Br = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, $r = { class: "vue-treeselect__limit-tip-text" }, Fr = /* @__PURE__ */ J({
  __name: "MultiValue",
  setup(t) {
    const n = G("treeselect"), e = N(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((a) => a !== null)), s = N(() => n.internalValue.value.length > n.limit), r = N(() => {
      const a = n.internalValue.value.length - n.limit;
      return n.limitText(a);
    });
    return (a, c) => (y(), F(un, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (y(!0), M(re, null, ie(e.value, (f) => (y(), F(kr, {
          key: `multi-value-item-${f.id}`,
          node: f
        }, null, 8, ["node"]))), 128)),
        s.value ? (y(), M("div", Br, [
          z("span", $r, V(r.value), 1)
        ])) : U("", !0),
        X(en, { key: "placeholder" }),
        X(Zt, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Vr = {
  name: "vue-treeselect--arrow"
}, Hr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function zr(t, n, e, s, r, a) {
  return y(), M("svg", Hr, n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ]));
}
const rn = /* @__PURE__ */ tn(Vr, [["render", zr]]), Pr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, qr = ["title"], Wr = /* @__PURE__ */ J({
  __name: "Control",
  setup(t) {
    const n = G("treeselect"), e = G("instance"), s = N(() => n.single.value), r = N(() => n.hasValue.value && n.internalValue.value.some((l) => {
      const v = n.getNode(l);
      return v && !v.isDisabled;
    })), a = N(() => n.clearable && !n.disabled && n.hasValue.value && (r.value || n.allowClearingDisabled)), c = N(() => n.alwaysOpen ? !n.menu.isOpen : !0), f = N(() => n.multiple ? n.clearAllText : n.clearValueText), o = N(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.isOpen
    })), u = se(function(l) {
      l.stopPropagation(), l.preventDefault();
      const v = n.beforeClearAll(), g = (p) => {
        p && n.clear();
      };
      Qt(v) ? v.then(g) : setTimeout(() => g(v), 0);
    }), i = se(function(l) {
      l.preventDefault(), l.stopPropagation(), e.focusInput(), n.toggleMenu();
    });
    return (l, v) => (y(), M("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: v[2] || (v[2] = //@ts-ignore
      (...g) => A(e).handleMouseDown && A(e).handleMouseDown(...g))
    }, [
      z("div", Pr, [
        s.value ? (y(), F(Rr, { key: 0 })) : (y(), F(Fr, { key: 1 }))
      ], 512),
      a.value ? (y(), M("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: f.value,
        onMousedown: v[0] || (v[0] = //@ts-ignore
        (...g) => A(u) && A(u)(...g))
      }, [
        X(nn, { class: "vue-treeselect__x" })
      ], 40, qr)) : U("", !0),
      c.value ? (y(), M("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: v[1] || (v[1] = //@ts-ignore
        (...g) => A(i) && A(i)(...g))
      }, [
        X(rn, {
          class: Q(o.value)
        }, null, 8, ["class"])
      ], 32)) : U("", !0)
    ], 544));
  }
}), jr = { class: "vue-treeselect__icon-container" }, Z = /* @__PURE__ */ J({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(t) {
    return (n, e) => (y(), M("div", {
      class: Q(`vue-treeselect__tip vue-treeselect__${n.type}-tip`)
    }, [
      z("div", jr, [
        z("span", {
          class: Q(`vue-treeselect__icon-${n.icon}`)
        }, null, 2)
      ]),
      z("span", {
        class: Q(`vue-treeselect__tip-text vue-treeselect__${n.type}-tip-text`)
      }, [
        qe(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ur = ["data-id"], Kr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Yr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Qr = {
  key: 0,
  class: "vue-treeselect__list"
}, Gr = ["title"], Ft = "vue-treeselect__label", Vt = "vue-treeselect__count", Ht = /* @__PURE__ */ J({
  __name: "Option",
  props: {
    node: {}
  },
  setup(t) {
    const n = t, e = G("treeselect"), s = N(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${e.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), r = N(() => n.node.isBranch && e.shouldExpand(n.node)), a = N(() => e.shouldShowOptionInMenu(n.node)), c = N(() => !e.shouldFlattenOptions || !a.value), f = N(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": e.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": e.localSearch.active && n.node.isMatched,
      "vue-treeselect__option--hide": !a.value
    })), o = N(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": r.value
    })), u = N(() => !(e.single || e.disableBranchNodes && n.node.isBranch)), i = N(() => {
      const S = e.forest.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": S === Sr,
        "vue-treeselect__checkbox--indeterminate": S === br,
        "vue-treeselect__checkbox--unchecked": S === Or,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), l = N(() => n.node.isBranch && (e.localSearch.active ? e.showCountOnSearchComputed : e.showCount)), v = N(() => l.value ? e.localSearch.active ? e.localSearch.countMap[n.node.id][e.showCountOf] : n.node.count[e.showCountOf] : NaN), g = N(() => {
      var S;
      return (S = e.$slots) == null ? void 0 : S["option-label"];
    }), p = N(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), E = N(() => {
      var S;
      return ((S = n.node.childrenStates) == null ? void 0 : S.isLoaded) && (!n.node.children || n.node.children.length === 0);
    }), b = N(() => {
      var S;
      return ((S = n.node.childrenStates) == null ? void 0 : S.isLoading) || !1;
    }), T = N(() => {
      var S;
      return !!((S = n.node.childrenStates) != null && S.loadingError);
    }), d = (S) => {
      S.target === S.currentTarget && e.setCurrentHighlightedOption(n.node, !1);
    }, O = se(function() {
      e.toggleExpanded(n.node);
    }), h = se(function() {
      n.node.isBranch && e.disableBranchNodes ? e.toggleExpanded(n.node) : e.select(n.node);
    }), m = se(function() {
      e.loadChildrenOptions(n.node);
    });
    return (S, B) => {
      const _ = dn("Option", !0);
      return y(), M("div", {
        class: Q(s.value)
      }, [
        z("div", {
          class: Q(f.value),
          "data-id": S.node.id,
          onMouseenter: d
        }, [
          S.node.isBranch && c.value ? (y(), M("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: B[0] || (B[0] = //@ts-ignore
            (...D) => A(O) && A(O)(...D))
          }, [
            X(We, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                X(rn, {
                  class: Q(o.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : A(e).hasBranchNodes && c.value ? (y(), M("div", Kr, "   ")) : U("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: B[1] || (B[1] = //@ts-ignore
            (...D) => A(h) && A(h)(...D))
          }, [
            u.value ? (y(), M("div", Yr, [
              z("span", {
                class: Q(i.value)
              }, B[3] || (B[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ]), 2)
            ])) : U("", !0),
            g.value ? (y(), F(Ue(g.value), {
              key: 1,
              node: S.node,
              shouldShowCount: l.value,
              count: v.value,
              labelClassName: Ft,
              countClassName: Vt
            }, null, 8, ["node", "shouldShowCount", "count"])) : (y(), M("label", {
              key: 2,
              class: Q(Ft)
            }, [
              Y(V(S.node.label) + " ", 1),
              l.value ? (y(), M("span", {
                key: 0,
                class: Q(Vt)
              }, " (" + V(v.value) + ") ", 1)) : U("", !0)
            ]))
          ], 32)
        ], 42, Ur),
        S.node.isBranch ? (y(), F(We, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            r.value ? (y(), M("div", Qr, [
              (y(!0), M(re, null, ie(p.value, (D) => (y(), F(_, {
                key: D.id,
                node: D
              }, null, 8, ["node"]))), 128)),
              E.value ? (y(), F(Z, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noChildrenText), 1)
                ]),
                _: 1
              })) : U("", !0),
              b.value ? (y(), F(Z, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : U("", !0),
              T.value ? (y(), F(Z, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(V(S.node.childrenStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: A(e).retryTitle,
                    onMousedown: B[2] || (B[2] = //@ts-ignore
                    (...D) => A(m) && A(m)(...D))
                  }, V(A(e).retryText), 41, Gr)
                ]),
                _: 1
              })) : U("", !0)
            ])) : U("", !0)
          ]),
          _: 1
        })) : U("", !0)
      ], 2);
    };
  }
}), Xr = ["title"], Jr = {
  key: 4,
  class: "vue-treeselect__list"
}, Zr = ["title"], es = {
  key: 4,
  class: "vue-treeselect__list"
}, ts = /* @__PURE__ */ J({
  __name: "Menu",
  setup(t) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, e = G("treeselect");
    let s = null, r = null;
    const a = N(() => ({
      maxHeight: e.maxHeight + "px"
    })), c = N(() => ({
      zIndex: e.appendToBody ? null : e.zIndex
    })), f = N(() => e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0), o = N(() => e.getRemoteSearchEntry()), u = N(() => e.trigger.searchQuery === "" && !e.defaultOptions), i = N(() => {
      if (u.value) return !1;
      const d = o.value;
      return d.isLoaded && d.options.length === 0;
    }), l = () => {
      if (!e.menu.isOpen) return;
      const d = e.getMenu(), O = e.getControl();
      if (!d || !O) return;
      const h = d.getBoundingClientRect(), m = O.getBoundingClientRect(), S = h.height, B = window.innerHeight, _ = m.top, D = window.innerHeight - m.bottom, x = m.top >= 0 && m.top <= B || m.top < 0 && m.bottom > 0, L = D > S + $t, I = _ > S + $t;
      x ? e.openDirection !== "auto" ? e.menu.placement = n[e.openDirection] : L || !I ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    }, v = () => {
      const d = e.getMenu();
      s || (s = {
        remove: Kt(d, l)
      });
    }, g = () => {
      const d = e.getControl();
      r || (r = {
        remove: Yt(d, l)
      });
    }, p = () => {
      s && (s.remove(), s = null);
    }, E = () => {
      r && (r.remove(), r = null);
    }, b = () => {
      l(), v(), g();
    }, T = () => {
      p(), E();
    };
    return W(
      () => e.menu.isOpen,
      (d) => {
        d ? ne(b) : T();
      }
    ), ge(() => {
      e.menu.isOpen && ne(b);
    }), ye(() => {
      T();
    }), (d, O) => (y(), M("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Pe(c.value)
    }, [
      X(We, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          A(e).menu.isOpen ? (y(), M("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Pe(a.value),
            onMousedown: O[2] || (O[2] = //@ts-ignore
            (...h) => A(e).handleMouseDown && A(e).handleMouseDown(...h))
          }, [
            qe(d.$slots, "before-list"),
            A(e).async ? (y(), M(re, { key: 0 }, [
              u.value ? (y(), F(Z, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).searchPromptText), 1)
                ]),
                _: 1
              })) : o.value.isLoading ? (y(), F(Z, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : o.value.loadingError ? (y(), F(Z, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(V(o.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: A(e).retryTitle,
                    onClick: O[0] || (O[0] = //@ts-ignore
                    (...h) => A(e).handleRemoteSearch && A(e).handleRemoteSearch(...h))
                  }, V(A(e).retryText), 9, Xr)
                ]),
                _: 1
              })) : i.value ? (y(), F(Z, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), M("div", Jr, [
                (y(!0), M(re, null, ie(A(e).forest.normalizedOptions, (h) => (y(), F(Ht, {
                  key: h.id,
                  node: h
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (y(), M(re, { key: 1 }, [
              A(e).rootOptionsStates.isLoading ? (y(), F(Z, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : A(e).rootOptionsStates.loadingError ? (y(), F(Z, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(V(A(e).rootOptionsStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: A(e).retryTitle,
                    onClick: O[1] || (O[1] = //@ts-ignore
                    (...h) => A(e).loadRootOptions && A(e).loadRootOptions(...h))
                  }, V(A(e).retryText), 9, Zr)
                ]),
                _: 1
              })) : f.value ? (y(), F(Z, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noOptionsText), 1)
                ]),
                _: 1
              })) : A(e).localSearch.active && A(e).localSearch.noResults ? (y(), F(Z, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), M("div", es, [
                (y(!0), M(re, null, ie(A(e).forest.normalizedOptions, (h) => (y(), F(Ht, {
                  key: h.id,
                  node: h
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            qe(d.$slots, "after-list")
          ], 36)) : U("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), ns = { class: "vue-treeselect__menu-placeholder" }, rs = /* @__PURE__ */ J({
  __name: "MenuPortal",
  setup(t) {
    const n = G("treeselect"), e = {
      name: "vue-treeselect--portal-target",
      setup() {
        const f = te();
        let o = null, u = null;
        const i = N(() => [
          "vue-treeselect__portal-target",
          n.wrapperClass
        ]), l = N(() => ({
          zIndex: n.zIndex
        })), v = (h) => {
          const m = n.getControl();
          if (!m) return;
          const S = m.getBoundingClientRect();
          h.style.width = S.width + "px";
        }, g = (h) => {
          var w;
          const m = n.getControl();
          if (!m || !f.value) return;
          const S = (w = f.value.$refs) == null ? void 0 : w["menu-container"];
          if (!S) return;
          const B = m.getBoundingClientRect(), _ = h.getBoundingClientRect(), D = n.menu.placement === "bottom" ? B.height : 0, x = Math.round(B.left - _.left) + "px", L = Math.round(B.top - _.top + D) + "px", I = S.style, H = Ke(["transform", "webkitTransform", "MozTransform", "msTransform"], (k) => k in document.body.style);
          I && H && (I[H] = `translate(${x}, ${L})`);
        }, p = (h) => {
          const m = n.getControl();
          o || !m || (o = {
            remove: Yt(m, () => g(h))
          });
        }, E = (h) => {
          const m = n.getControl();
          u || !m || (u = {
            remove: Kt(m, () => {
              v(h), g(h);
            })
          });
        }, b = () => {
          o && (o.remove(), o = null);
        }, T = () => {
          u && (u.remove(), u = null);
        };
        return {
          menuRef: f,
          portalTargetClass: i,
          portalTargetStyle: l,
          setupHandlers: (h) => {
            v(h), g(h), p(h), E(h);
          },
          removeHandlers: () => {
            b(), T();
          },
          updateMenuContainerOffset: g
        };
      },
      template: `
    <div :class="portalTargetClass" :style="portalTargetStyle" :data-instance-id="treeselect.getInstanceId()">
      <Menu ref="menuRef" />
    </div>
  `
    };
    let s = null, r = null;
    const a = () => {
      const f = document.createElement("div");
      document.body.appendChild(f), r = f, s = fn({
        ...e,
        setup() {
          const o = e.setup();
          return W(
            () => n.menu.isOpen,
            (u) => {
              u ? ne(() => o.setupHandlers(f)) : o.removeHandlers();
            }
          ), W(
            () => n.menu.placement,
            () => {
              o.updateMenuContainerOffset(f);
            }
          ), ge(() => {
            n.menu.isOpen && ne(() => o.setupHandlers(f));
          }), ye(() => {
            o.removeHandlers();
          }), o;
        }
      }), s.provide("treeselect", n), s.mount(f);
    }, c = () => {
      var f;
      s && r && ((f = r.parentNode) == null || f.removeChild(r), r.innerHTML = "", s.unmount(), s = null, r = null);
    };
    return ge(() => {
      a();
    }), ye(() => {
      c();
    }), (f, o) => (y(), M("div", ns));
  }
}), hs = /* @__PURE__ */ J({
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
    limitText: { type: Function, default: (t) => `and ${t} more` },
    loadingText: { default: "Loading..." },
    loadOptions: {},
    matchKeys: { default: ["label"] },
    maxHeight: { default: 300 },
    multiple: { type: Boolean, default: !1 },
    name: { default: void 0 },
    noChildrenText: { default: "No sub-options." },
    noOptionsText: { default: "No options available." },
    noResultsText: { default: "No results found..." },
    normalizer: { type: Function, default: (t) => t },
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
  setup(t, { expose: n, emit: e }) {
    const s = t, r = e, a = te(), c = te(), f = te(), o = te(), u = N(() => s.instanceId ?? `vue-treeselect-${Math.random().toString(36).substr(2, 9)}`), i = () => {
      var S, B, _, D;
      const m = (D = (_ = (B = (S = (s.appendToBody && o.value ? o.value.portalTarget : f).value) == null ? void 0 : S.$refs) == null ? void 0 : B.menu) == null ? void 0 : _.$refs) == null ? void 0 : D.menu;
      return m && m.nodeName !== "#comment" ? m : null;
    }, l = () => {
      var h, m;
      return (m = (h = c.value) == null ? void 0 : h.$refs) == null ? void 0 : m["value-container"];
    }, v = () => l().$refs.input, g = () => {
      var h;
      (h = v()) == null || h.focus();
    }, p = () => {
      var h;
      (h = v()) == null || h.blur();
    }, E = (h) => {
      h ? document.addEventListener("mousedown", b, !1) : document.removeEventListener("mousedown", b, !1);
    }, b = (h) => {
      a.value && !a.value.contains(h.target) && (p(), d.closeMenu());
    }, T = se(function(h) {
      if (h.preventDefault(), h.stopPropagation(), s.disabled) return;
      l().$el.contains(h.target) && !d.menu.isOpen && (s.openOnClick || d.trigger.isFocused) && d.openMenu(), (d.resetFlags ? d.resetFlags() : !1) ? p() : g(), d.resetFlags && d.resetFlags();
    }), d = _r(
      s,
      r,
      u,
      i,
      E
    );
    Xe("treeselect", d), Xe("instance", {
      getInput: v,
      focusInput: g,
      blurInput: p,
      getValueContainer: l,
      handleMouseDown: T
    });
    const O = N(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": d.single.value,
      "vue-treeselect--multi": s.multiple,
      "vue-treeselect--searchable": s.searchable,
      "vue-treeselect--disabled": s.disabled,
      "vue-treeselect--focused": d.trigger.isFocused,
      "vue-treeselect--has-value": d.hasValue.value,
      "vue-treeselect--open": d.menu.isOpen,
      "vue-treeselect--open-above": d.menu.placement === "top",
      "vue-treeselect--open-below": d.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": s.disableBranchNodes,
      "vue-treeselect--append-to-body": s.appendToBody
    }));
    return n({
      // Node methods
      getNode: d.getNode,
      // Traversal
      traverseAllNodesDFS: d.traverseAllNodesDFS,
      traverseAllNodesByIndex: d.traverseAllNodesByIndex,
      // Menu
      openMenu: d.openMenu,
      closeMenu: d.closeMenu,
      toggleMenu: d.toggleMenu,
      // Selection
      select: d.select,
      clear: d.clear,
      // Value
      getValue: d.getValue,
      // Focus
      focusInput: g,
      blurInput: p
    }), (h, m) => (y(), M("div", {
      ref_key: "wrapper",
      ref: a,
      class: Q(O.value)
    }, [
      X(yr),
      X(Wr, {
        ref_key: "control",
        ref: c
      }, null, 512),
      h.appendToBody ? (y(), F(rs, {
        key: 0,
        ref_key: "portal",
        ref: o
      }, null, 512)) : (y(), F(ts, {
        key: 1,
        ref_key: "menu",
        ref: f
      }, null, 512))
    ], 2));
  }
});
export {
  cs as ALL,
  fs as ALL_WITH_INDETERMINATE,
  is as ASYNC_SEARCH,
  us as BRANCH_PRIORITY,
  Sr as CHECKED,
  br as INDETERMINATE,
  ds as LEAF_PRIORITY,
  as as LOAD_CHILDREN_OPTIONS,
  ls as LOAD_ROOT_OPTIONS,
  hs as Treeselect,
  Or as UNCHECKED,
  hs as default,
  mr as useAsyncOptions,
  Qn as useForestState,
  ir as useLocalSearch,
  sr as useMenu,
  Zn as useNodeNormalization,
  jn as useNodeTraversal,
  fr as useRemoteSearch,
  rr as useSelection,
  _r as useTreeselect,
  tr as useValue
};
