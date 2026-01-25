import { reactive as ue, computed as N, nextTick as ne, ref as ee, watch as W, onMounted as ge, onUnmounted as ye, readonly as ln, toRef as an, defineComponent as X, inject as te, openBlock as y, createElementBlock as M, Fragment as re, renderList as ie, unref as A, withDirectives as un, createElementVNode as z, normalizeStyle as Pe, vModelText as cn, toDisplayString as V, createCommentVNode as U, normalizeClass as Q, createBlock as F, resolveDynamicComponent as Ue, createTextVNode as Y, createVNode as G, TransitionGroup as dn, withCtx as j, renderSlot as qe, resolveComponent as fn, Transition as We, createApp as hn, provide as Xe } from "vue";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var be, Je;
function vn() {
  if (Je) return be;
  Je = 1;
  function t() {
  }
  return be = t, be;
}
var pn = vn();
const mn = /* @__PURE__ */ ce(pn), pe = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  mn
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
function _n(t, n) {
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
function gn() {
  if (et) return Ee;
  et = 1;
  var t = typeof ve == "object" && ve && ve.Object === Object && ve;
  return Ee = t, Ee;
}
var Ne, tt;
function Pt() {
  if (tt) return Ne;
  tt = 1;
  var t = gn(), n = typeof self == "object" && self && self.Object === Object && self, e = t || n || Function("return this")();
  return Ne = e, Ne;
}
var Te, nt;
function yn() {
  if (nt) return Te;
  nt = 1;
  var t = Pt(), n = function() {
    return t.Date.now();
  };
  return Te = n, Te;
}
var Le, rt;
function On() {
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
function bn() {
  if (st) return we;
  st = 1;
  var t = On(), n = /^\s+/;
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
function Sn() {
  if (lt) return Ce;
  lt = 1;
  var t = qt(), n = Object.prototype, e = n.hasOwnProperty, s = n.toString, r = t ? t.toStringTag : void 0;
  function a(c) {
    var h = e.call(c, r), o = c[r];
    try {
      c[r] = void 0;
      var d = !0;
    } catch {
    }
    var i = s.call(c);
    return d && (h ? c[r] = o : delete c[r]), i;
  }
  return Ce = a, Ce;
}
var xe, at;
function En() {
  if (at) return xe;
  at = 1;
  var t = Object.prototype, n = t.toString;
  function e(s) {
    return n.call(s);
  }
  return xe = e, xe;
}
var De, it;
function Nn() {
  if (it) return De;
  it = 1;
  var t = qt(), n = Sn(), e = En(), s = "[object Null]", r = "[object Undefined]", a = t ? t.toStringTag : void 0;
  function c(h) {
    return h == null ? h === void 0 ? r : s : a && a in Object(h) ? n(h) : e(h);
  }
  return De = c, De;
}
var Ae, ut;
function Tn() {
  if (ut) return Ae;
  ut = 1;
  function t(n) {
    return n != null && typeof n == "object";
  }
  return Ae = t, Ae;
}
var Ie, ct;
function Ln() {
  if (ct) return Ie;
  ct = 1;
  var t = Nn(), n = Tn(), e = "[object Symbol]";
  function s(r) {
    return typeof r == "symbol" || n(r) && t(r) == e;
  }
  return Ie = s, Ie;
}
var Me, dt;
function Wt() {
  if (dt) return Me;
  dt = 1;
  var t = bn(), n = zt(), e = Ln(), s = NaN, r = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, c = /^0o[0-7]+$/i, h = parseInt;
  function o(d) {
    if (typeof d == "number")
      return d;
    if (e(d))
      return s;
    if (n(d)) {
      var i = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = n(i) ? i + "" : i;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = t(d);
    var l = a.test(d);
    return l || c.test(d) ? h(d.slice(2), l ? 2 : 8) : r.test(d) ? s : +d;
  }
  return Me = o, Me;
}
var ke, ft;
function wn() {
  if (ft) return ke;
  ft = 1;
  var t = zt(), n = yn(), e = Wt(), s = "Expected a function", r = Math.max, a = Math.min;
  function c(h, o, d) {
    var i, l, v, g, m, E, b = 0, T = !1, u = !1, O = !0;
    if (typeof h != "function")
      throw new TypeError(s);
    o = e(o) || 0, t(d) && (T = !!d.leading, u = "maxWait" in d, v = u ? r(e(d.maxWait) || 0, o) : v, O = "trailing" in d ? !!d.trailing : O);
    function f(x) {
      var H = i, R = l;
      return i = l = void 0, b = x, g = h.apply(R, H), g;
    }
    function p(x) {
      return b = x, m = setTimeout(_, o), T ? f(x) : g;
    }
    function S(x) {
      var H = x - E, R = x - b, k = o - H;
      return u ? a(k, v - R) : k;
    }
    function B(x) {
      var H = x - E, R = x - b;
      return E === void 0 || H >= o || H < 0 || u && R >= v;
    }
    function _() {
      var x = n();
      if (B(x))
        return D(x);
      m = setTimeout(_, S(x));
    }
    function D(x) {
      return m = void 0, O && i ? f(x) : (i = l = void 0, g);
    }
    function L() {
      m !== void 0 && clearTimeout(m), b = 0, i = E = l = m = void 0;
    }
    function w() {
      return m === void 0 ? g : D(n());
    }
    function I() {
      var x = n(), H = B(x);
      if (i = arguments, l = this, E = x, H) {
        if (m === void 0)
          return p(E);
        if (u)
          return clearTimeout(m), m = setTimeout(_, o), f(E);
      }
      return m === void 0 && (m = setTimeout(_, o)), g;
    }
    return I.cancel = L, I.flush = w, I;
  }
  return ke = c, ke;
}
var Rn = wn();
const Cn = /* @__PURE__ */ ce(Rn);
var xn = function(t, n) {
  var e = document.createElement("_"), s = e.appendChild(document.createElement("_")), r = e.appendChild(document.createElement("_")), a = s.appendChild(document.createElement("_")), c = void 0, h = void 0;
  return s.style.cssText = e.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = r.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", t.appendChild(e), o(), i;
  function o() {
    d();
    var l = t.offsetWidth, v = t.offsetHeight;
    (l !== c || v !== h) && (c = l, h = v, r.style.width = l * 2 + "px", r.style.height = v * 2 + "px", e.scrollLeft = e.scrollWidth, e.scrollTop = e.scrollHeight, s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, n({ width: l, height: v })), s.addEventListener("scroll", o), e.addEventListener("scroll", o);
  }
  function d() {
    s.removeEventListener("scroll", o), e.removeEventListener("scroll", o);
  }
  function i() {
    d(), t.removeChild(e);
  }
};
function jt(t, n) {
  const e = t.indexOf(n);
  e !== -1 && t.splice(e, 1);
}
let me;
const _e = [], Dn = 100;
function An() {
  me = setInterval(() => {
    _e.forEach(Ut);
  }, Dn);
}
function In() {
  me && (clearInterval(me), me = null);
}
function Ut(t) {
  const { $el: n, listener: e, lastWidth: s, lastHeight: r } = t, a = n.offsetWidth, c = n.offsetHeight;
  (s !== a || r !== c) && (t.lastWidth = a, t.lastHeight = c, e({ width: a, height: c }));
}
function Mn(t, n) {
  const e = {
    $el: t,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, s = () => {
    jt(_e, e), _e.length || In();
  };
  return _e.push(e), Ut(e), An(), s;
}
function Kt(t, n) {
  const e = document.documentMode === 9;
  let s = !0;
  const c = (e ? Mn : xn)(t, (...h) => {
    s || n(...h);
  });
  return s = !1, c;
}
function kn(t) {
  const n = [];
  let e = t.parentNode;
  for (; e && e.nodeName !== "BODY" && e.nodeType === document.ELEMENT_NODE; )
    Bn(e) && n.push(e), e = e.parentNode;
  return n.push(window), n;
}
function Bn(t) {
  const { overflow: n, overflowX: e, overflowY: s } = getComputedStyle(t);
  return /(auto|scroll|overlay)/.test(n + s + e);
}
function Yt(t, n) {
  const e = kn(t);
  return window.addEventListener("resize", n, { passive: !0 }), e.forEach((s) => {
    s.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), e.forEach((r) => {
      r.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function $n(t) {
  return t !== t;
}
function Qt(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
var Be, ht;
function Fn() {
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
function Vn() {
  if (vt) return $e;
  vt = 1;
  var t = Fn();
  function n(e) {
    var s = t(e), r = s % 1;
    return s === s ? r ? s - r : s : 0;
  }
  return $e = n, $e;
}
var Fe, pt;
function Hn() {
  if (pt) return Fe;
  pt = 1;
  var t = Vn(), n = "Expected a function";
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
function zn() {
  if (mt) return Ve;
  mt = 1;
  var t = Hn();
  function n(e) {
    return t(2, e);
  }
  return Ve = n, Ve;
}
var Pn = zn();
const qn = /* @__PURE__ */ ce(Pn), Z = () => /* @__PURE__ */ Object.create(null);
var He, _t;
function Wn() {
  if (_t) return He;
  _t = 1;
  function t(n) {
    var e = n == null ? 0 : n.length;
    return e ? n[e - 1] : void 0;
  }
  return He = t, He;
}
var jn = Wn();
const Gt = /* @__PURE__ */ ce(jn);
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
function Un() {
  const t = (r, a) => {
    if (!r.isBranch) return;
    const c = r.children.slice();
    for (; c.length; ) {
      const h = c[0];
      h.isBranch && c.push(...h.children), a(h), c.shift();
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
      const c = (h) => {
        h.children && h.children.forEach((o) => {
          a(o) !== !1 && o.isBranch && o.children && c(o);
        });
      };
      c({ children: r });
    }
  };
}
const Kn = 0, Yn = 1, Qn = 2;
function Gn(t) {
  const n = ue({
    normalizedOptions: [],
    nodeMap: Z(),
    checkedStateMap: Z(),
    selectedNodeIds: t(),
    selectedNodeMap: Z()
  });
  return {
    forest: n,
    buildForestState: (r, a, c, h) => {
      const o = Z();
      n.selectedNodeIds.forEach((i) => {
        o[i] = !0;
      }), n.selectedNodeMap = o;
      const d = Z();
      r.multiple && (c((i) => {
        d[i.id] = Kn;
      }), a.forEach((i) => {
        d[i.id] = Qn, !r.flat && !r.disableBranchNodes && i.ancestors.forEach((l) => {
          h(l) || (d[l.id] = Yn);
        });
      })), n.checkedStateMap = d;
    },
    isSelected: (r) => !!r && n.selectedNodeMap[r.id] === !0
  };
}
const Xn = null, gt = "ALL_CHILDREN", yt = "ALL_DESCENDANTS", Ot = "LEAF_CHILDREN", bt = "LEAF_DESCENDANTS";
function Jn() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Zn(t) {
  return typeof t == "string" ? t : typeof t == "number" && !isNaN(t) ? t + "" : "";
}
function er(t, n, e, s) {
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
  }, h = (o, d, i) => {
    let l = d.map((v) => [r(v), v]).map(([v, g], m) => {
      a(v), c(v);
      const { id: E, label: b, children: T, isDefaultExpanded: u } = v, O = o === Xn, f = O ? 0 : o.level + 1, p = Array.isArray(T) || T === null, S = !p, B = !!v.isDisabled || !t.flat && !O && o.isDisabled, _ = !!v.isNew, D = (t.matchKeys || ["label"]).reduce((I, x) => ({
        ...I,
        [x]: Zn(v[x]).toLocaleLowerCase()
      }), {}), L = O ? D.label : o.nestedSearchLabel + " " + D.label;
      n.nodeMap[E] = Z();
      const w = n.nodeMap[E];
      if (Object.assign(w, {
        id: E,
        label: b,
        level: f,
        ancestors: O ? [] : [o].concat(o.ancestors),
        index: (O ? [] : o.index).concat(m),
        parentNode: o,
        lowerCased: D,
        nestedSearchLabel: L,
        isDisabled: B,
        isNew: _,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: p,
        isLeaf: S,
        isRootNode: O,
        raw: g
      }), p) {
        const I = Array.isArray(T);
        Object.assign(w, {
          childrenStates: { ...Jn(), isLoaded: I },
          isExpanded: typeof u == "boolean" ? u : f < (t.defaultExpandLevel || 0),
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
          children: I ? h(w, T, i) : []
        }), u === !0 && w.ancestors.forEach((x) => {
          x.isExpanded = !0;
        }), !I && typeof t.loadOptions != "function" ? pe(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !I && w.isExpanded && s(w);
      }
      if (w.ancestors.forEach((I) => I.count[yt]++), S && w.ancestors.forEach((I) => I.count[bt]++), O || (o.count[gt] += 1, S && (o.count[Ot] += 1), B && (o.hasDisabledDescendants = !0)), i && i[E]) {
        const I = i[E];
        w.isMatched = I.isMatched, w.showAllChildrenOnSearch = I.showAllChildrenOnSearch, w.isHighlighted = I.isHighlighted, I.isBranch && w.isBranch && (w.isExpanded = I.isExpanded, w.isExpandedOnSearch = I.isExpandedOnSearch, I.childrenStates.isLoaded && !w.childrenStates.isLoaded ? w.isExpanded = !1 : w.childrenStates = { ...I.childrenStates });
      }
      return w;
    });
    if (t.branchNodesFirst) {
      const v = l.filter((m) => m.isBranch), g = l.filter((m) => m.isLeaf);
      l = v.concat(g);
    }
    return l;
  };
  return {
    normalize: h,
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
function tr(t, n) {
  return t.level === n.level ? Jt(t, n) : t.level - n.level;
}
function nr(t, n, e, s, r, a) {
  const c = N(() => n.selectedNodeIds.map((m) => e(m))), h = N(() => !t.multiple), o = N(() => {
    let m;
    if (h.value || t.flat || t.disableBranchNodes || t.valueConsistsOf === St)
      m = n.selectedNodeIds.slice();
    else if (t.valueConsistsOf === Et)
      m = n.selectedNodeIds.filter((E) => {
        const b = e(E);
        return b ? b.isRootNode ? !0 : !s(b.parentNode) : !1;
      });
    else if (t.valueConsistsOf === Nt)
      m = n.selectedNodeIds.filter((E) => {
        const b = e(E);
        return b ? b.isLeaf ? !0 : b.children.length === 0 : !1;
      });
    else if (t.valueConsistsOf === Tt) {
      const E = [];
      m = n.selectedNodeIds.slice(), c.value.forEach((b) => {
        b.ancestors.forEach((T) => {
          E.includes(T.id) || m.includes(T.id) || E.push(T.id);
        });
      }), m.push(...E);
    } else
      m = [];
    return t.sortValueBy === "LEVEL" ? m.sort((E, b) => tr(e(E), e(b))) : t.sortValueBy === "INDEX" && m.sort((E, b) => Jt(e(E), e(b))), m;
  }), d = N(() => o.value.length > 0);
  return {
    selectedNodes: c,
    single: h,
    internalValue: o,
    hasValue: d,
    getValue: () => {
      if (t.valueFormat === "id")
        return t.multiple ? o.value.slice() : o.value[0];
      const m = o.value.map((E) => e(E).raw);
      return t.multiple ? m : m[0];
    },
    extractCheckedNodeIdsFromValue: () => t.modelValue == null ? [] : t.valueFormat === "id" ? t.multiple ? t.modelValue.slice() : [t.modelValue] : (t.multiple ? t.modelValue : [t.modelValue]).map((m) => a(m)).map((m) => m.id),
    extractNodeFromValue: (m) => {
      const E = { id: m };
      if (t.valueFormat === "id")
        return E;
      const b = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : t.modelValue ? [t.modelValue] : [];
      return Ke(
        b,
        (u) => u && a(u).id === m
      ) || E;
    },
    fixSelectedNodeIds: (m, E) => {
      let b = [];
      if (h.value || t.flat || t.disableBranchNodes || t.valueConsistsOf === St)
        b = m;
      else if (t.valueConsistsOf === Et)
        m.forEach((u) => {
          b.push(u);
          const O = e(u);
          O != null && O.isBranch && r(O, (f) => {
            b.push(f.id);
          });
        });
      else if (t.valueConsistsOf === Nt) {
        const u = Z(), O = m.slice();
        for (; O.length; ) {
          const f = O.shift(), p = e(f);
          p && (b.push(f), !p.isRootNode && (p.parentNode.id in u || (u[p.parentNode.id] = p.parentNode.children.length), --u[p.parentNode.id] === 0 && O.push(p.parentNode.id)));
        }
      } else if (t.valueConsistsOf === Tt) {
        const u = Z(), O = m.filter((f) => {
          const p = e(f);
          return p && (p.isLeaf || p.children.length === 0);
        });
        for (; O.length; ) {
          const f = O.shift(), p = e(f);
          p && (b.push(f), !p.isRootNode && (p.parentNode.id in u || (u[p.parentNode.id] = p.parentNode.children.length), --u[p.parentNode.id] === 0 && O.push(p.parentNode.id)));
        }
      }
      je(n.selectedNodeIds, b) && (n.selectedNodeIds = b), E();
    }
  };
}
const Lt = null, rr = 0;
function sr(t, n, e, s, r, a, c, h, o, d, i, l, v, g, m) {
  let E = !1;
  const b = () => {
    E = !1;
  }, T = (_) => {
    e.selectedNodeIds.push(_.id), e.selectedNodeMap[_.id] = !0;
  }, u = (_) => {
    jt(e.selectedNodeIds, _.id), delete e.selectedNodeMap[_.id];
  }, O = () => {
    i() && (v() || t.allowClearingDisabled ? e.selectedNodeIds = [] : e.selectedNodeIds = e.selectedNodeIds.filter((_) => {
      const D = s(_);
      return D ? D.isDisabled : !1;
    }), h());
  }, f = (_) => {
    if (v() || t.disableBranchNodes)
      return T(_);
    if (t.flat) {
      T(_), t.autoSelectAncestors ? _.ancestors.forEach((L) => {
        !r(L) && !L.isDisabled && T(L);
      }) : t.autoSelectDescendants && a(_, (L) => {
        !r(L) && !L.isDisabled && T(L);
      });
      return;
    }
    const D = _.isLeaf || !_.hasDisabledDescendants || t.allowSelectingDisabledDescendants;
    if (D && T(_), _.isBranch && a(_, (L) => {
      (!L.isDisabled || t.allowSelectingDisabledDescendants) && T(L);
    }), D) {
      let L = _;
      for (; (L = L.parentNode) !== Lt && (L && L.children.every(r)); )
        T(L);
    }
  }, p = (_) => {
    if (t.disableBranchNodes)
      return u(_);
    if (t.flat) {
      u(_), t.autoDeselectAncestors ? _.ancestors.forEach((L) => {
        r(L) && !L.isDisabled && u(L);
      }) : t.autoDeselectDescendants && a(_, (L) => {
        r(L) && !L.isDisabled && u(L);
      });
      return;
    }
    let D = !1;
    if (_.isBranch && c(_, (L) => {
      (!L.isDisabled || t.allowSelectingDisabledDescendants) && (u(L), D = !0);
    }), _.isLeaf || D || _.isBranch && _.children.length === 0) {
      u(_);
      let L = _;
      for (; (L = L.parentNode) !== Lt && (L && r(L)); )
        u(L);
    }
  }, S = (_) => {
    if (t.disabled || _.isDisabled)
      return;
    v() && O();
    const D = t.multiple && !t.flat ? e.checkedStateMap[_.id] === rr : !r(_);
    D ? f(_) : p(_), h(), ne(() => {
      n(D ? "select" : "deselect", _.raw, g);
    }), m.active && D && (v() || t.clearOnSelect) && o(), v() && t.closeOnSelect && (d(), t.searchable && (E = !0));
  };
  return {
    select: S,
    clear: O,
    addValue: T,
    removeValue: u,
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
function or(t, n, e, s, r, a, c, h, o, d, i, l, v) {
  const g = ue({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), m = (R) => s.active ? R.isExpandedOnSearch || !1 : R.isExpanded || !1, E = (R) => !!(R.isMatched || R.isBranch && R.hasMatchedDescendants && !t.flattenSearchResults || !R.isRootNode && R.parentNode.showAllChildrenOnSearch), b = (R) => !(s.active && !E(R)), T = N(() => {
    const R = [];
    return a((k) => {
      if ((!s.active || E(k)) && R.push(k.id), k.isBranch && !m(k))
        return !1;
    }), R;
  }), u = N(() => T.value.length !== 0), O = (R, k = !0) => {
    const K = g.current;
    if (K != null && K in e.nodeMap && (e.nodeMap[K].isHighlighted = !1), !R) {
      g.current = null;
      return;
    }
    if (g.current = R.id, R.isHighlighted = !0, g.isOpen && k) {
      const de = () => {
        const oe = l();
        if (!oe) return;
        const le = oe.querySelector(`.vue-treeselect__option[data-id="${R.id}"]`);
        le && _n(oe, le);
      };
      l() ? de() : ne(de);
    }
  }, f = () => {
    if (!u.value) return;
    const R = T.value[0], k = r(R);
    k && O(k);
  }, p = () => {
    if (!u.value) return;
    const k = T.value.indexOf(g.current) - 1;
    if (k === -1) return B();
    const K = r(T.value[k]);
    K && O(K);
  }, S = () => {
    if (!u.value) return;
    const k = T.value.indexOf(g.current) + 1;
    if (k === T.value.length) return f();
    const K = r(T.value[k]);
    K && O(K);
  }, B = () => {
    if (!u.value) return;
    const R = Gt(T.value);
    if (!R) return;
    const k = r(R);
    k && O(k);
  }, _ = (R = !1) => {
    const { current: k } = g;
    (R || k == null || !(k in e.nodeMap) || !b(r(k))) && f();
  }, D = () => {
    const R = l();
    R && (g.lastScrollPosition = R.scrollTop);
  }, L = () => {
    const R = l();
    R && (R.scrollTop = g.lastScrollPosition);
  }, w = () => {
    !g.isOpen || !t.disabled && t.alwaysOpen || (D(), g.isOpen = !1, v(!1), o(), n("close", c(), h));
  }, I = () => {
    t.disabled || g.isOpen || (g.isOpen = !0, ne(_), ne(L), !t.options && !t.async && d(), v(!0), n("open", h));
  };
  return {
    menu: g,
    visibleOptionIds: T,
    hasVisibleOptions: u,
    shouldExpand: m,
    shouldShowOptionInMenu: b,
    openMenu: I,
    closeMenu: w,
    toggleMenu: () => {
      g.isOpen ? w() : I();
    },
    toggleExpanded: (R) => {
      let k;
      s.active ? (k = R.isExpandedOnSearch = !R.isExpandedOnSearch, k && (R.showAllChildrenOnSearch = !0)) : k = R.isExpanded = !R.isExpanded, k && !R.childrenStates.isLoaded && i(R);
    },
    setCurrentHighlightedOption: O,
    resetHighlightedOptionWhenNecessary: _,
    highlightFirstOption: f,
    highlightPrevOption: p,
    highlightNextOption: S,
    highlightLastOption: B,
    saveMenuScrollPosition: D,
    restoreMenuScrollPosition: L
  };
}
var ze, wt;
function lr() {
  if (wt) return ze;
  wt = 1;
  function t(n, e) {
    var s = e.length, r = n.length;
    if (r > s)
      return !1;
    if (r === s)
      return n === e;
    e: for (var a = 0, c = 0; a < r; a++) {
      for (var h = n.charCodeAt(a); c < s; )
        if (e.charCodeAt(c++) === h)
          continue e;
      return !1;
    }
    return !0;
  }
  return ze = t, ze;
}
var ar = lr();
const ir = /* @__PURE__ */ ce(ar), Rt = null, Ct = "ALL_CHILDREN", xt = "ALL_DESCENDANTS", Dt = "LEAF_CHILDREN", At = "LEAF_DESCENDANTS";
function It(t, n, e) {
  return t ? ir(n, e) : Xt(e, n);
}
function ur(t, n, e, s) {
  const r = ue({
    active: !1,
    noResults: !0,
    countMap: Z()
  });
  return {
    localSearch: r,
    handleLocalSearch: () => {
      const { searchQuery: c } = n, h = () => s(!0);
      if (!c)
        return r.active = !1, h();
      r.active = !0, r.noResults = !0, e((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, r.countMap[i.id] = {
          [Ct]: 0,
          [xt]: 0,
          [Dt]: 0,
          [At]: 0
        });
      });
      const o = c.trim().toLocaleLowerCase(), d = o.replace(/\s+/g, " ").split(" ");
      e((i) => {
        t.searchNested && d.length > 1 ? i.isMatched = d.every(
          (l) => It(!1, l, i.nestedSearchLabel)
        ) : i.isMatched = (t.matchKeys || ["label"]).some(
          (l) => It(!t.disableFuzzyMatching, o, i.lowerCased[l])
        ), i.isMatched && (r.noResults = !1, i.ancestors.forEach((l) => {
          r.countMap[l.id][xt]++;
        }), i.isLeaf && i.ancestors.forEach((l) => {
          r.countMap[l.id][At]++;
        }), i.parentNode !== Rt && (r.countMap[i.parentNode.id][Ct] += 1, i.isLeaf && (r.countMap[i.parentNode.id][Dt] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== Rt && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), h();
    }
  };
}
const cr = "ASYNC_SEARCH";
function dr(t) {
  return t.message || String(t);
}
function fr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function hr(t, n, e, s, r) {
  const a = ee(Z()), c = ee(0), h = () => {
    const { searchQuery: d } = n, i = a.value[d] || {
      ...fr(),
      options: []
    };
    if (W(
      () => i.options,
      () => {
        n.searchQuery === d && s();
      },
      { deep: !0 }
    ), d === "") {
      if (Array.isArray(t.defaultOptions))
        return i.options = t.defaultOptions, i.isLoaded = !0, i;
      if (t.defaultOptions !== !0)
        return i.isLoaded = !0, i;
    }
    return a.value[d] || (a.value[d] = i), i;
  };
  return {
    remoteSearch: a,
    key: c,
    getRemoteSearchEntry: h,
    handleRemoteSearch: () => {
      const { searchQuery: d } = n, i = h(), l = () => {
        s(), r(!0);
      };
      if ((d === "" || t.cacheOptions) && i.isLoaded)
        return l();
      e({
        action: cr,
        args: { searchQuery: d },
        isPending: () => i.isLoading,
        start: () => {
          i.isLoading = !0, i.isLoaded = !1, i.loadingError = "";
        },
        succeed: (v) => {
          i.isLoaded = !0, i.options = v, n.searchQuery === d && l();
        },
        fail: (v) => {
          i.loadingError = dr(v);
        },
        end: () => {
          c.value += 1, i.isLoading = !1;
        }
      });
    }
  };
}
const vr = "LOAD_ROOT_OPTIONS", pr = "LOAD_CHILDREN_OPTIONS";
function Mt(t) {
  return t.message || String(t);
}
function mr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function _r(t, n, e, s) {
  const r = ue(mr()), a = (o) => {
    const { action: d, args: i, isPending: l, start: v, succeed: g, fail: m, end: E } = o;
    if (!t.loadOptions || l())
      return;
    v();
    const b = qn((u, O) => {
      u ? m(u) : g(O), E();
    }), T = t.loadOptions({
      id: e,
      instanceId: e,
      action: d,
      ...i,
      callback: b
    });
    Qt(T) && T.then(() => {
      b();
    }).catch((u) => {
      b(u);
    }).catch((u) => {
      console.error(u);
    });
  };
  return {
    rootOptionsStates: r,
    callLoadOptionsProp: a,
    loadRootOptions: () => {
      a({
        action: vr,
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
      const { id: d, raw: i } = o;
      a({
        action: pr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: i
        },
        isPending: () => {
          const l = n(d);
          return l ? l.childrenStates.isLoading : !1;
        },
        start: () => {
          const l = n(d);
          l && (l.childrenStates.isLoading = !0, l.childrenStates.loadingError = "");
        },
        succeed: () => {
          const l = n(d);
          l && (l.childrenStates.isLoaded = !0);
        },
        fail: (l) => {
          const v = n(d);
          v && (v.childrenStates.loadingError = Mt(l));
        },
        end: () => {
          const l = n(d);
          l && (l.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const kt = null;
function gr(t, n, e, s, r) {
  const a = ue({
    isFocused: !1,
    searchQuery: ""
  }), c = () => {
    a.searchQuery = "";
  }, h = (C) => ({
    ...C,
    ...t.normalizer ? t.normalizer(C, e.value) : {}
  }), o = () => t.modelValue == null ? [] : t.valueFormat === "id" ? t.multiple ? t.modelValue.slice() : [t.modelValue] : (t.multiple ? t.modelValue : [t.modelValue]).map((C) => h(C)).map((C) => C.id), d = Un(), i = Gn(o), { forest: l, isSelected: v } = i, g = (C) => (pe(
    () => C != null,
    () => `Invalid node id: ${C}`
  ), C == null ? null : C in l.nodeMap ? l.nodeMap[C] : m(C)), m = (C) => {
    const P = E(C), ae = h(P).label || `${C} (unknown)`, Oe = {
      id: C,
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
    return l.nodeMap[C] = Oe, Oe;
  }, E = (C) => {
    const P = { id: C };
    if (t.valueFormat === "id")
      return P;
    const ae = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : t.modelValue ? [t.modelValue] : [];
    return Ke(
      ae,
      (Ge) => Ge && h(Ge).id === C
    ) || P;
  };
  let b, T, u, O, f, p;
  const S = _r(
    t,
    g,
    e.value,
    (C) => T(C)
  );
  u = S.loadRootOptions, b = S.loadChildrenOptions, O = S.callLoadOptionsProp;
  const { rootOptionsStates: B } = S, _ = er(
    t,
    l,
    e,
    b
  ), { normalize: D, enhancedNormalizer: L } = _, w = nr(
    t,
    l,
    g,
    v,
    d.traverseDescendantsBFS,
    L
  ), { selectedNodes: I, single: x, internalValue: H, hasValue: R, getValue: k, fixSelectedNodeIds: K } = w;
  p = () => {
    const C = (P) => {
      d.traverseAllNodesByIndex(l.normalizedOptions, P);
    };
    i.buildForestState(
      t,
      I.value,
      C,
      v
    );
  };
  const de = (C) => {
    l.selectedNodeIds.forEach((P) => {
      if (!C[P]) return;
      const ae = {
        ...C[P],
        isFallbackNode: !0
      };
      l.nodeMap[P] = ae;
    });
  }, Ye = () => (t.async, null);
  f = () => {
    const C = t.async ? Ye() || [] : t.options || [];
    if (Array.isArray(C)) {
      const P = l.nodeMap;
      l.nodeMap = Z(), de(P), l.normalizedOptions = D(kt, C, P), K(H.value, p);
    } else
      l.normalizedOptions = [];
  };
  const oe = hr(
    t,
    a,
    O,
    f,
    (C) => T(C)
  ), { handleRemoteSearch: le } = oe, fe = ur(
    t,
    a,
    (C) => {
      d.traverseAllNodesDFS(l.normalizedOptions, C);
    },
    (C) => T(C)
  ), { handleLocalSearch: Qe } = fe, on = (C) => {
    d.traverseAllNodesByIndex(l.normalizedOptions, C);
  }, $ = or(
    t,
    n,
    l,
    fe.localSearch,
    g,
    on,
    k,
    e.value,
    c,
    u,
    b,
    s,
    r
  );
  T = $.resetHighlightedOptionWhenNecessary;
  const he = sr(
    t,
    n,
    l,
    g,
    v,
    d.traverseDescendantsBFS,
    d.traverseDescendantsDFS,
    p,
    c,
    $.closeMenu,
    () => R.value,
    () => H.value,
    () => x.value,
    e.value,
    fe.localSearch
  );
  return W(() => t.alwaysOpen, (C) => {
    C ? $.openMenu() : $.closeMenu();
  }), W(() => t.branchNodesFirst, () => {
    f();
  }), W(() => t.disabled, (C) => {
    C && $.menu.isOpen ? $.closeMenu() : !C && !$.menu.isOpen && t.alwaysOpen && $.openMenu();
  }), W(() => t.flat, () => {
    f();
  }), W(H, (C, P) => {
    je(C, P) && n("update:modelValue", k(), e.value);
  }), W(() => t.matchKeys, () => {
    f();
  }), W(() => t.multiple, (C) => {
    C && p();
  }), W(() => t.options, () => {
    t.async || (f(), B.isLoaded = Array.isArray(t.options));
  }, { deep: !0, immediate: !0 }), W(() => a.searchQuery, () => {
    t.async ? le() : Qe(), n("search-change", a.searchQuery, e.value);
  }), W(() => t.modelValue, () => {
    const C = o();
    je(C, H.value) && K(C, p);
  }), ge(() => {
    t.autoFocus, !t.options && !t.async && t.autoLoadRootOptions && u(), t.alwaysOpen && $.openMenu(), t.async && t.defaultOptions && le();
  }), ye(() => {
    r(!1);
  }), {
    // State
    forest: ln(an(() => l)),
    trigger: a,
    menu: $.menu,
    localSearch: fe.localSearch,
    remoteSearch: oe.remoteSearch,
    rootOptionsStates: B,
    // Computed
    selectedNodes: I,
    single: x,
    internalValue: H,
    hasValue: R,
    visibleOptionIds: $.visibleOptionIds,
    hasVisibleOptions: $.hasVisibleOptions,
    // Node methods
    getNode: g,
    isSelected: v,
    // Traversal
    traverseDescendantsBFS: d.traverseDescendantsBFS,
    traverseDescendantsDFS: d.traverseDescendantsDFS,
    traverseAllNodesDFS: d.traverseAllNodesDFS,
    traverseAllNodesByIndex: d.traverseAllNodesByIndex,
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
    loadRootOptions: u,
    loadChildrenOptions: b,
    // Helpers
    initialize: f,
    buildForestState: p,
    resetFlags: he.resetFlags
  };
}
const yr = ["name", "value"], Or = /* @__PURE__ */ X({
  __name: "HiddenFields",
  setup(t) {
    const n = te("treeselect");
    function e(r) {
      return typeof r == "string" ? r : r != null && !$n(r) ? JSON.stringify(r) : "";
    }
    const s = N(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let r = n.internalValue.value.map(e);
      return n.multiple && n.joinValues && (r = [r.join(n.delimiter)]), r;
    });
    return (r, a) => (y(!0), M(re, null, ie(s.value, (c, h) => (y(), M("input", {
      key: `hidden-field-${h}`,
      type: "hidden",
      name: A(n).name,
      value: c
    }, null, 8, yr))), 128));
  }
}), br = 0, Sr = 1, Er = 2, ls = "LOAD_ROOT_OPTIONS", as = "LOAD_CHILDREN_OPTIONS", is = "ASYNC_SEARCH", us = "ALL", cs = "BRANCH_PRIORITY", ds = "LEAF_PRIORITY", fs = "ALL_WITH_INDETERMINATE", q = {
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
}, Nr = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Bt = 5, $t = 40, Tr = {
  key: 0,
  class: "vue-treeselect__input-container"
}, Lr = ["tabindex", "required"], wr = ["tabindex"], Zt = /* @__PURE__ */ X({
  __name: "Input",
  setup(t, { expose: n }) {
    const e = te("treeselect"), s = ee(), r = ee(), a = ee(Bt), c = ee(""), h = N(() => e.searchable), o = N(() => e.disabled), d = N(() => e.multiple), i = N(() => e.tabIndex), l = N(() => e.required), v = N(() => e.hasValue.value), g = N(() => h.value && !o.value && d.value), m = N(() => ({
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
    }, u = () => {
      c.value = "", T();
    }, O = () => {
      !o.value && s.value && s.value.focus();
    }, f = () => {
      s.value && s.value.blur();
    }, p = () => {
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    }, S = () => {
      var I;
      const w = (I = e.getMenu) == null ? void 0 : I.call(e);
      if (w && document.activeElement === w)
        return O();
      e.trigger.isFocused = !1, e.closeMenu();
    }, B = Cn(
      T,
      Nr,
      { leading: !0, trailing: !0 }
    ), _ = () => {
      c.value ? B() : (B.cancel(), T());
    }, D = (w) => {
      const I = w.which || w.keyCode;
      if (!(w.ctrlKey || w.shiftKey || w.altKey || w.metaKey)) {
        if (!e.menu.isOpen && Xt(E, I))
          return w.preventDefault(), e.openMenu();
        switch (I) {
          case q.BACKSPACE: {
            e.backspaceRemoves && !c.value.length && e.removeLastValue();
            break;
          }
          case q.ENTER: {
            if (w.preventDefault(), e.menu.current === null) return;
            const x = e.getNode(e.menu.current);
            if (!x || x.isBranch && e.disableBranchNodes) return;
            e.select(x);
            break;
          }
          case q.ESCAPE: {
            c.value.length ? u() : e.menu.isOpen && e.closeMenu();
            break;
          }
          case q.END: {
            w.preventDefault(), e.highlightLastOption();
            break;
          }
          case q.HOME: {
            w.preventDefault(), e.highlightFirstOption();
            break;
          }
          case q.ARROW_LEFT: {
            const x = e.getNode(e.menu.current);
            x && (x.isBranch && e.shouldExpand(x) ? (w.preventDefault(), e.toggleExpanded(x)) : !x.isRootNode && (x.isLeaf || x.isBranch && !e.shouldExpand(x)) && (w.preventDefault(), e.setCurrentHighlightedOption(x.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            w.preventDefault(), e.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const x = e.getNode(e.menu.current);
            x && x.isBranch && !e.shouldExpand(x) && (w.preventDefault(), e.toggleExpanded(x));
            break;
          }
          case q.ARROW_DOWN: {
            w.preventDefault(), e.highlightNextOption();
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
    }, L = (w) => {
      c.value.length && w.stopPropagation();
    };
    return W(() => e.trigger.searchQuery, (w) => {
      c.value = w;
    }), W(c, () => {
      g.value && ne(b);
    }), n({
      clear: u,
      focus: O,
      blur: f
    }), (w, I) => h.value && !o.value ? (y(), M("div", Tr, [
      un(z("input", {
        ref_key: "inputRef",
        ref: s,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: i.value,
        required: l.value && !v.value,
        "onUpdate:modelValue": I[0] || (I[0] = (x) => c.value = x),
        style: Pe(m.value),
        onFocus: p,
        onInput: _,
        onBlur: S,
        onKeydown: D,
        onMousedown: L
      }, null, 44, Lr), [
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
      onFocus: p,
      onBlur: S,
      onKeydown: D
    }, null, 40, wr));
  }
}), en = /* @__PURE__ */ X({
  __name: "Placeholder",
  setup(t) {
    const n = te("treeselect"), e = N(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (s, r) => (y(), M("div", {
      class: Q(e.value)
    }, V(A(n).placeholder), 3));
  }
}), Rr = {
  key: 0,
  class: "vue-treeselect__single-value"
}, Cr = /* @__PURE__ */ X({
  __name: "SingleValue",
  setup(t) {
    const n = te("treeselect"), e = N(() => n.hasValue.value && !n.trigger.searchQuery), s = N(() => n.selectedNodes.value[0]), r = N(() => {
      var a;
      return (a = n.$slots) == null ? void 0 : a["value-label"];
    });
    return (a, c) => (y(), M(re, null, [
      e.value ? (y(), M("div", Rr, [
        r.value ? (y(), F(Ue(r.value), {
          key: 0,
          node: s.value
        }, null, 8, ["node"])) : (y(), M(re, { key: 1 }, [
          Y(V(s.value.label), 1)
        ], 64))
      ])) : U("", !0),
      G(en),
      G(Zt, { ref: "input" }, null, 512)
    ], 64));
  }
}), xr = {
  name: "vue-treeselect--x"
}, tn = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, r] of n)
    e[s] = r;
  return e;
}, Dr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Ar(t, n, e, s, r, a) {
  return y(), M("svg", Dr, n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ]));
}
const nn = /* @__PURE__ */ tn(xr, [["render", Ar]]), Ir = { class: "vue-treeselect__multi-value-item-container" }, Mr = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, kr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, Br = /* @__PURE__ */ X({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(t) {
    const n = t, e = te("treeselect"), s = N(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), r = N(() => {
      var c;
      return (c = e.$slots) == null ? void 0 : c["value-label"];
    }), a = se(function() {
      e.select(n.node);
    });
    return (c, h) => (y(), M("div", Ir, [
      z("div", {
        class: Q(s.value),
        onMousedown: h[0] || (h[0] = //@ts-ignore
        (...o) => A(a) && A(a)(...o))
      }, [
        r.value ? (y(), F(Ue(r.value), {
          key: 0,
          node: c.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (y(), M("span", Mr, V(c.node.label), 1)),
        z("span", kr, [
          G(nn)
        ])
      ], 34)
    ]));
  }
}), $r = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Fr = { class: "vue-treeselect__limit-tip-text" }, Vr = /* @__PURE__ */ X({
  __name: "MultiValue",
  setup(t) {
    const n = te("treeselect"), e = N(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((a) => a !== null)), s = N(() => n.internalValue.value.length > n.limit), r = N(() => {
      const a = n.internalValue.value.length - n.limit;
      return n.limitText(a);
    });
    return (a, c) => (y(), F(dn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (y(!0), M(re, null, ie(e.value, (h) => (y(), F(Br, {
          key: `multi-value-item-${h.id}`,
          node: h
        }, null, 8, ["node"]))), 128)),
        s.value ? (y(), M("div", $r, [
          z("span", Fr, V(r.value), 1)
        ])) : U("", !0),
        G(en, { key: "placeholder" }),
        G(Zt, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Hr = {
  name: "vue-treeselect--arrow"
}, zr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Pr(t, n, e, s, r, a) {
  return y(), M("svg", zr, n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ]));
}
const rn = /* @__PURE__ */ tn(Hr, [["render", Pr]]), qr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Wr = ["title"], jr = /* @__PURE__ */ X({
  __name: "Control",
  setup(t) {
    const n = te("treeselect"), e = te("instance"), s = N(() => n.single.value), r = N(() => n.hasValue.value && n.internalValue.value.some((l) => {
      const v = n.getNode(l);
      return v && !v.isDisabled;
    })), a = N(() => n.clearable && !n.disabled && n.hasValue.value && (r.value || n.allowClearingDisabled)), c = N(() => n.alwaysOpen ? !n.menu.isOpen : !0), h = N(() => n.multiple ? n.clearAllText : n.clearValueText), o = N(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.isOpen
    })), d = se(function(l) {
      l.stopPropagation(), l.preventDefault();
      const v = n.beforeClearAll(), g = (m) => {
        m && n.clear();
      };
      Qt(v) ? v.then((m) => g(m)) : setTimeout(() => g(v), 0);
    }), i = se(function(l) {
      l.preventDefault(), l.stopPropagation(), e.focusInput(), n.toggleMenu();
    });
    return (l, v) => (y(), M("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: v[2] || (v[2] = //@ts-ignore
      (...g) => A(e).handleMouseDown && A(e).handleMouseDown(...g))
    }, [
      z("div", qr, [
        s.value ? (y(), F(Cr, { key: 0 })) : (y(), F(Vr, { key: 1 }))
      ], 512),
      a.value ? (y(), M("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: h.value,
        onMousedown: v[0] || (v[0] = //@ts-ignore
        (...g) => A(d) && A(d)(...g))
      }, [
        G(nn, { class: "vue-treeselect__x" })
      ], 40, Wr)) : U("", !0),
      c.value ? (y(), M("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: v[1] || (v[1] = //@ts-ignore
        (...g) => A(i) && A(i)(...g))
      }, [
        G(rn, {
          class: Q(o.value)
        }, null, 8, ["class"])
      ], 32)) : U("", !0)
    ], 544));
  }
}), Ur = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ X({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(t) {
    return (n, e) => (y(), M("div", {
      class: Q(`vue-treeselect__tip vue-treeselect__${n.type}-tip`)
    }, [
      z("div", Ur, [
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
}), Kr = ["data-id"], Yr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Qr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Gr = {
  key: 0,
  class: "vue-treeselect__list"
}, Xr = ["title"], Ft = "vue-treeselect__label", Vt = "vue-treeselect__count", Ht = /* @__PURE__ */ X({
  __name: "Option",
  props: {
    node: {}
  },
  setup(t) {
    const n = t, e = te("treeselect"), s = N(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${e.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), r = N(() => n.node.isBranch && e.shouldExpand(n.node)), a = N(() => e.shouldShowOptionInMenu(n.node)), c = N(() => !e.shouldFlattenOptions || !a.value), h = N(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": e.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": e.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !a.value
    })), o = N(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": r.value
    })), d = N(() => !(e.single || e.disableBranchNodes && n.node.isBranch)), i = N(() => {
      const S = e.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": S === Er,
        "vue-treeselect__checkbox--indeterminate": S === Sr,
        "vue-treeselect__checkbox--unchecked": S === br,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), l = N(() => n.node.isBranch && (e.localSearch.value.active ? e.showCountOnSearchComputed : e.showCount)), v = N(() => l.value ? e.localSearch.value.active ? e.localSearch.value.countMap[n.node.id][e.showCountOf] : n.node.count[e.showCountOf] : NaN), g = N(() => {
      var S;
      return (S = e.$slots) == null ? void 0 : S["option-label"];
    }), m = N(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), E = N(() => {
      var S;
      return ((S = n.node.childrenStates) == null ? void 0 : S.isLoaded) && (!n.node.children || n.node.children.length === 0);
    }), b = N(() => {
      var S;
      return ((S = n.node.childrenStates) == null ? void 0 : S.isLoading) || !1;
    }), T = N(() => {
      var S;
      return !!((S = n.node.childrenStates) != null && S.loadingError);
    }), u = (S) => {
      S.target === S.currentTarget && e.setCurrentHighlightedOption(n.node, !1);
    }, O = se(function() {
      e.toggleExpanded(n.node);
    }), f = se(function() {
      n.node.isBranch && e.disableBranchNodes ? e.toggleExpanded(n.node) : e.select(n.node);
    }), p = se(function() {
      e.loadChildrenOptions(n.node);
    });
    return (S, B) => {
      const _ = fn("Option", !0);
      return y(), M("div", {
        class: Q(s.value)
      }, [
        z("div", {
          class: Q(h.value),
          "data-id": S.node.id,
          onMouseenter: u
        }, [
          S.node.isBranch && c.value ? (y(), M("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: B[0] || (B[0] = //@ts-ignore
            (...D) => A(O) && A(O)(...D))
          }, [
            G(We, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                G(rn, {
                  class: Q(o.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : A(e).hasBranchNodes && c.value ? (y(), M("div", Yr, "   ")) : U("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: B[1] || (B[1] = //@ts-ignore
            (...D) => A(f) && A(f)(...D))
          }, [
            d.value ? (y(), M("div", Qr, [
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
        ], 42, Kr),
        S.node.isBranch ? (y(), F(We, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            r.value ? (y(), M("div", Gr, [
              (y(!0), M(re, null, ie(m.value, (D) => (y(), F(_, {
                key: D.id,
                node: D
              }, null, 8, ["node"]))), 128)),
              E.value ? (y(), F(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noChildrenText), 1)
                ]),
                _: 1
              })) : U("", !0),
              b.value ? (y(), F(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : U("", !0),
              T.value ? (y(), F(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => {
                  var D;
                  return [
                    Y(V((D = S.node.childrenStates) == null ? void 0 : D.loadingError) + " ", 1),
                    z("a", {
                      class: "vue-treeselect__retry",
                      title: A(e).retryTitle,
                      onMousedown: B[2] || (B[2] = //@ts-ignore
                      (...L) => A(p) && A(p)(...L))
                    }, V(A(e).retryText), 41, Xr)
                  ];
                }),
                _: 1
              })) : U("", !0)
            ])) : U("", !0)
          ]),
          _: 1
        })) : U("", !0)
      ], 2);
    };
  }
}), Jr = ["title"], Zr = {
  key: 4,
  class: "vue-treeselect__list"
}, es = ["title"], ts = {
  key: 4,
  class: "vue-treeselect__list"
}, sn = /* @__PURE__ */ X({
  __name: "Menu",
  setup(t) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, e = te("treeselect");
    let s = null, r = null;
    const a = N(() => ({
      maxHeight: e.maxHeight + "px"
    })), c = N(() => ({
      zIndex: e.appendToBody ? null : e.zIndex
    })), h = N(() => e.rootOptionsStates.isLoaded && e.forest.value.normalizedOptions.length === 0), o = N(() => e.getRemoteSearchEntry()), d = N(() => e.trigger.searchQuery === "" && !e.defaultOptions), i = N(() => {
      if (d.value) return !1;
      const u = o.value;
      return u.isLoaded && u.options.length === 0;
    }), l = () => {
      if (!e.menu.value.isOpen) return;
      const u = e.getMenu(), O = e.getControl();
      if (!u || !O) return;
      const f = u.getBoundingClientRect(), p = O.getBoundingClientRect(), S = f.height, B = window.innerHeight, _ = p.top, D = window.innerHeight - p.bottom, L = p.top >= 0 && p.top <= B || p.top < 0 && p.bottom > 0, w = D > S + $t, I = _ > S + $t;
      L ? e.openDirection !== "auto" ? e.menu.value.placement = n[e.openDirection] : w || !I ? e.menu.value.placement = "bottom" : e.menu.value.placement = "top" : e.closeMenu();
    }, v = () => {
      const u = e.getMenu();
      s || !u || (s = {
        remove: Kt(u, l)
      });
    }, g = () => {
      const u = e.getControl();
      r || !u || (r = {
        remove: Yt(u, l)
      });
    }, m = () => {
      s && (s.remove(), s = null);
    }, E = () => {
      r && (r.remove(), r = null);
    }, b = () => {
      l(), v(), g();
    }, T = () => {
      m(), E();
    };
    return W(
      () => e.menu.value.isOpen,
      (u) => {
        u ? ne(b) : T();
      }
    ), ge(() => {
      e.menu.value.isOpen && ne(b);
    }), ye(() => {
      T();
    }), (u, O) => (y(), M("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Pe(c.value)
    }, [
      G(We, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          A(e).menu.value.isOpen ? (y(), M("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Pe(a.value),
            onMousedown: O[2] || (O[2] = //@ts-ignore
            (...f) => A(e).handleMouseDown && A(e).handleMouseDown(...f))
          }, [
            qe(u.$slots, "before-list"),
            A(e).async ? (y(), M(re, { key: 0 }, [
              d.value ? (y(), F(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).searchPromptText), 1)
                ]),
                _: 1
              })) : o.value.isLoading ? (y(), F(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : o.value.loadingError ? (y(), F(J, {
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
                    (...f) => A(e).handleRemoteSearch && A(e).handleRemoteSearch(...f))
                  }, V(A(e).retryText), 9, Jr)
                ]),
                _: 1
              })) : i.value ? (y(), F(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), M("div", Zr, [
                (y(!0), M(re, null, ie(A(e).forest.value.normalizedOptions, (f) => (y(), F(Ht, {
                  key: f.id,
                  node: f
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (y(), M(re, { key: 1 }, [
              A(e).rootOptionsStates.isLoading ? (y(), F(J, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(V(A(e).loadingText), 1)
                ]),
                _: 1
              })) : A(e).rootOptionsStates.loadingError ? (y(), F(J, {
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
                    (...f) => A(e).loadRootOptions && A(e).loadRootOptions(...f))
                  }, V(A(e).retryText), 9, es)
                ]),
                _: 1
              })) : h.value ? (y(), F(J, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noOptionsText), 1)
                ]),
                _: 1
              })) : A(e).localSearch.value.active && A(e).localSearch.value.noResults ? (y(), F(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(V(A(e).noResultsText), 1)
                ]),
                _: 1
              })) : (y(), M("div", ts, [
                (y(!0), M(re, null, ie(A(e).forest.value.normalizedOptions, (f) => (y(), F(Ht, {
                  key: f.id,
                  node: f
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            qe(u.$slots, "after-list")
          ], 36)) : U("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), ns = { class: "vue-treeselect__menu-placeholder" }, rs = /* @__PURE__ */ X({
  __name: "MenuPortal",
  setup(t) {
    const n = te("treeselect"), e = {
      name: "vue-treeselect--portal-target",
      components: { Menu: sn },
      setup() {
        const h = ee();
        let o = null, d = null;
        const i = N(() => [
          "vue-treeselect__portal-target",
          n.wrapperClass
        ]), l = N(() => ({
          zIndex: n.zIndex
        })), v = (f) => {
          const p = n.getControl();
          if (!p) return;
          const S = p.getBoundingClientRect();
          f.style.width = S.width + "px";
        }, g = (f) => {
          var R;
          const p = n.getControl();
          if (!p || !h.value) return;
          const S = (R = h.value.$refs) == null ? void 0 : R["menu-container"];
          if (!S) return;
          const B = p.getBoundingClientRect(), _ = f.getBoundingClientRect(), D = n.menu.value.placement === "bottom" ? B.height : 0, L = Math.round(B.left - _.left) + "px", w = Math.round(B.top - _.top + D) + "px", I = S.style, H = Ke(["transform", "webkitTransform", "MozTransform", "msTransform"], (k) => k in document.body.style);
          I && H && (I[H] = `translate(${L}, ${w})`);
        }, m = (f) => {
          const p = n.getControl();
          o || !p || (o = {
            remove: Yt(p, () => g(f))
          });
        }, E = (f) => {
          const p = n.getControl();
          d || !p || (d = {
            remove: Kt(p, () => {
              v(f), g(f);
            })
          });
        }, b = () => {
          o && (o.remove(), o = null);
        }, T = () => {
          d && (d.remove(), d = null);
        };
        return {
          menuRef: h,
          portalTargetClass: i,
          portalTargetStyle: l,
          setupHandlers: (f) => {
            v(f), g(f), m(f), E(f);
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
      const h = document.createElement("div");
      document.body.appendChild(h), r = h, s = hn({
        ...e,
        setup() {
          const o = e.setup();
          return W(
            () => n.menu.value.isOpen,
            (d) => {
              d ? ne(() => o.setupHandlers(h)) : o.removeHandlers();
            }
          ), W(
            () => n.menu.value.placement,
            () => {
              o.updateMenuContainerOffset(h);
            }
          ), ge(() => {
            n.menu.value.isOpen && ne(() => o.setupHandlers(h));
          }), ye(() => {
            o.removeHandlers();
          }), o;
        }
      }), s.provide("treeselect", n), s.mount(h);
    }, c = () => {
      var h;
      s && r && ((h = r.parentNode) == null || h.removeChild(r), r.innerHTML = "", s.unmount(), s = null, r = null);
    };
    return ge(() => {
      a();
    }), ye(() => {
      c();
    }), (h, o) => (y(), M("div", ns));
  }
}), hs = /* @__PURE__ */ X({
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
    matchKeys: { default: () => ["label"] },
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
    const s = t, r = e, a = ee(), c = ee(), h = ee(), o = ee(), d = N({
      get: () => s.instanceId ?? `vue-treeselect-${Math.random().toString(36).substr(2, 9)}`,
      set: () => {
      }
    }), i = () => {
      var S, B, _, D, L;
      const f = s.appendToBody ? o : h, p = ((B = (S = f.value) == null ? void 0 : S.$refs) == null ? void 0 : B.menu) || ((L = (D = (_ = f.value) == null ? void 0 : _.$refs) == null ? void 0 : D["menu-container"]) == null ? void 0 : L.querySelector(".vue-treeselect__menu"));
      return p && p.nodeName !== "#comment" ? p : null;
    }, l = () => {
      var f, p;
      return (p = (f = c.value) == null ? void 0 : f.$refs) == null ? void 0 : p["value-container"];
    }, v = () => {
      var p;
      const f = l();
      return (p = f == null ? void 0 : f.$refs) == null ? void 0 : p.input;
    }, g = () => {
      var f;
      (f = v()) == null || f.focus();
    }, m = () => {
      var f;
      (f = v()) == null || f.blur();
    }, E = (f) => {
      f ? document.addEventListener("mousedown", b, !1) : document.removeEventListener("mousedown", b, !1);
    }, b = (f) => {
      a.value && !a.value.contains(f.target) && (m(), u.closeMenu());
    }, T = se(function(f) {
      if (f.preventDefault(), f.stopPropagation(), s.disabled) return;
      l().$el.contains(f.target) && !u.menu.isOpen && (s.openOnClick || u.trigger.isFocused) && u.openMenu(), (u.resetFlags ? u.resetFlags() : !1) ? m() : g(), u.resetFlags && u.resetFlags();
    }), u = gr(
      s,
      r,
      d,
      i,
      E
    );
    Xe("treeselect", u), Xe("instance", {
      getInput: v,
      focusInput: g,
      blurInput: m,
      getValueContainer: l,
      handleMouseDown: T
    });
    const O = N(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": u.single.value,
      "vue-treeselect--multi": s.multiple,
      "vue-treeselect--searchable": s.searchable,
      "vue-treeselect--disabled": s.disabled,
      "vue-treeselect--focused": u.trigger.isFocused,
      "vue-treeselect--has-value": u.hasValue.value,
      "vue-treeselect--open": u.menu.isOpen,
      "vue-treeselect--open-above": u.menu.placement === "top",
      "vue-treeselect--open-below": u.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": s.disableBranchNodes,
      "vue-treeselect--append-to-body": s.appendToBody
    }));
    return n({
      // Node methods
      getNode: u.getNode,
      // Traversal
      traverseAllNodesDFS: u.traverseAllNodesDFS,
      traverseAllNodesByIndex: u.traverseAllNodesByIndex,
      // Menu
      openMenu: u.openMenu,
      closeMenu: u.closeMenu,
      toggleMenu: u.toggleMenu,
      // Selection
      select: u.select,
      clear: u.clear,
      // Value
      getValue: u.getValue,
      // Focus
      focusInput: g,
      blurInput: m
    }), (f, p) => (y(), M("div", {
      ref_key: "wrapper",
      ref: a,
      class: Q(O.value)
    }, [
      G(Or),
      G(jr, {
        ref_key: "control",
        ref: c
      }, null, 512),
      f.appendToBody ? (y(), F(rs, {
        key: 0,
        ref_key: "portal",
        ref: o
      }, null, 512)) : (y(), F(sn, {
        key: 1,
        ref_key: "menu",
        ref: h
      }, null, 512))
    ], 2));
  }
});
export {
  us as ALL,
  fs as ALL_WITH_INDETERMINATE,
  is as ASYNC_SEARCH,
  cs as BRANCH_PRIORITY,
  Er as CHECKED,
  Sr as INDETERMINATE,
  ds as LEAF_PRIORITY,
  as as LOAD_CHILDREN_OPTIONS,
  ls as LOAD_ROOT_OPTIONS,
  hs as Treeselect,
  br as UNCHECKED,
  hs as default,
  _r as useAsyncOptions,
  Gn as useForestState,
  ur as useLocalSearch,
  or as useMenu,
  er as useNodeNormalization,
  Un as useNodeTraversal,
  hr as useRemoteSearch,
  sr as useSelection,
  gr as useTreeselect,
  nr as useValue
};
