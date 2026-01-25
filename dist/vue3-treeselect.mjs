import { reactive as ue, computed as T, nextTick as ne, ref as ee, watch as W, onMounted as ge, onUnmounted as ye, readonly as an, toRef as un, defineComponent as X, inject as te, openBlock as O, createElementBlock as M, Fragment as re, renderList as ie, unref as x, withDirectives as cn, createElementVNode as z, normalizeStyle as Pe, vModelText as dn, toDisplayString as H, createCommentVNode as U, normalizeClass as Q, useSlots as Ue, createBlock as V, resolveDynamicComponent as Ke, createTextVNode as Y, createVNode as G, TransitionGroup as fn, withCtx as j, renderSlot as qe, resolveComponent as hn, Transition as We, createApp as vn, provide as Je } from "vue";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var be, Ze;
function pn() {
  if (Ze) return be;
  Ze = 1;
  function e() {
  }
  return be = e, be;
}
var mn = pn();
const _n = /* @__PURE__ */ ce(mn), pe = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  _n
) : function(n, t) {
  if (!n()) {
    const r = ["[Vue-Treeselect Warning]"].concat(t());
    console.error(...r);
  }
};
function se(e) {
  return function(t, ...r) {
    t.type === "mousedown" && t.button === 0 && e.call(this, t, ...r);
  };
}
function gn(e, n) {
  const t = e.getBoundingClientRect(), r = n.getBoundingClientRect(), s = n.offsetHeight / 3;
  r.bottom + s > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + s,
    e.scrollHeight
  ) : r.top - s < t.top && (e.scrollTop = Math.max(n.offsetTop - s, 0));
}
var Se, et;
function Pt() {
  if (et) return Se;
  et = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return Se = e, Se;
}
var Ee, tt;
function yn() {
  if (tt) return Ee;
  tt = 1;
  var e = typeof ve == "object" && ve && ve.Object === Object && ve;
  return Ee = e, Ee;
}
var Ne, nt;
function qt() {
  if (nt) return Ne;
  nt = 1;
  var e = yn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return Ne = t, Ne;
}
var Te, rt;
function On() {
  if (rt) return Te;
  rt = 1;
  var e = qt(), n = function() {
    return e.Date.now();
  };
  return Te = n, Te;
}
var Le, st;
function bn() {
  if (st) return Le;
  st = 1;
  var e = /\s/;
  function n(t) {
    for (var r = t.length; r-- && e.test(t.charAt(r)); )
      ;
    return r;
  }
  return Le = n, Le;
}
var we, ot;
function Sn() {
  if (ot) return we;
  ot = 1;
  var e = bn(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return we = t, we;
}
var Re, lt;
function Wt() {
  if (lt) return Re;
  lt = 1;
  var e = qt(), n = e.Symbol;
  return Re = n, Re;
}
var Ce, at;
function En() {
  if (at) return Ce;
  at = 1;
  var e = Wt(), n = Object.prototype, t = n.hasOwnProperty, r = n.toString, s = e ? e.toStringTag : void 0;
  function c(d) {
    var f = t.call(d, s), o = d[s];
    try {
      d[s] = void 0;
      var a = !0;
    } catch {
    }
    var i = r.call(d);
    return a && (f ? d[s] = o : delete d[s]), i;
  }
  return Ce = c, Ce;
}
var xe, it;
function Nn() {
  if (it) return xe;
  it = 1;
  var e = Object.prototype, n = e.toString;
  function t(r) {
    return n.call(r);
  }
  return xe = t, xe;
}
var De, ut;
function Tn() {
  if (ut) return De;
  ut = 1;
  var e = Wt(), n = En(), t = Nn(), r = "[object Null]", s = "[object Undefined]", c = e ? e.toStringTag : void 0;
  function d(f) {
    return f == null ? f === void 0 ? s : r : c && c in Object(f) ? n(f) : t(f);
  }
  return De = d, De;
}
var Ae, ct;
function Ln() {
  if (ct) return Ae;
  ct = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return Ae = e, Ae;
}
var Ie, dt;
function wn() {
  if (dt) return Ie;
  dt = 1;
  var e = Tn(), n = Ln(), t = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || n(s) && e(s) == t;
  }
  return Ie = r, Ie;
}
var Me, ft;
function jt() {
  if (ft) return Me;
  ft = 1;
  var e = Sn(), n = Pt(), t = wn(), r = NaN, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, d = /^0o[0-7]+$/i, f = parseInt;
  function o(a) {
    if (typeof a == "number")
      return a;
    if (t(a))
      return r;
    if (n(a)) {
      var i = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = n(i) ? i + "" : i;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = e(a);
    var l = c.test(a);
    return l || d.test(a) ? f(a.slice(2), l ? 2 : 8) : s.test(a) ? r : +a;
  }
  return Me = o, Me;
}
var ke, ht;
function Rn() {
  if (ht) return ke;
  ht = 1;
  var e = Pt(), n = On(), t = jt(), r = "Expected a function", s = Math.max, c = Math.min;
  function d(f, o, a) {
    var i, l, v, g, m, E, b = 0, L = !1, u = !1, S = !0;
    if (typeof f != "function")
      throw new TypeError(r);
    o = t(o) || 0, e(a) && (L = !!a.leading, u = "maxWait" in a, v = u ? s(t(a.maxWait) || 0, o) : v, S = "trailing" in a ? !!a.trailing : S);
    function h(A) {
      var $ = i, w = l;
      return i = l = void 0, b = A, g = f.apply(w, $), g;
    }
    function _(A) {
      return b = A, m = setTimeout(p, o), L ? h(A) : g;
    }
    function B(A) {
      var $ = A - E, w = A - b, k = o - $;
      return u ? c(k, v - w) : k;
    }
    function C(A) {
      var $ = A - E, w = A - b;
      return E === void 0 || $ >= o || $ < 0 || u && w >= v;
    }
    function p() {
      var A = n();
      if (C(A))
        return I(A);
      m = setTimeout(p, B(A));
    }
    function I(A) {
      return m = void 0, S && i ? h(A) : (i = l = void 0, g);
    }
    function y() {
      m !== void 0 && clearTimeout(m), b = 0, i = E = l = m = void 0;
    }
    function N() {
      return m === void 0 ? g : I(n());
    }
    function D() {
      var A = n(), $ = C(A);
      if (i = arguments, l = this, E = A, $) {
        if (m === void 0)
          return _(E);
        if (u)
          return clearTimeout(m), m = setTimeout(p, o), h(E);
      }
      return m === void 0 && (m = setTimeout(p, o)), g;
    }
    return D.cancel = y, D.flush = N, D;
  }
  return ke = d, ke;
}
var Cn = Rn();
const xn = /* @__PURE__ */ ce(Cn);
var Dn = function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), s = t.appendChild(document.createElement("_")), c = r.appendChild(document.createElement("_")), d = void 0, f = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", c.style.cssText = s.style.cssText = "display:block;height:100%;transition:0s;width:100%", c.style.width = c.style.height = "200%", e.appendChild(t), o(), i;
  function o() {
    a();
    var l = e.offsetWidth, v = e.offsetHeight;
    (l !== d || v !== f) && (d = l, f = v, s.style.width = l * 2 + "px", s.style.height = v * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: l, height: v })), r.addEventListener("scroll", o), t.addEventListener("scroll", o);
  }
  function a() {
    r.removeEventListener("scroll", o), t.removeEventListener("scroll", o);
  }
  function i() {
    a(), e.removeChild(t);
  }
};
function Ut(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let me;
const _e = [], An = 100;
function In() {
  me = setInterval(() => {
    _e.forEach(Kt);
  }, An);
}
function Mn() {
  me && (clearInterval(me), me = null);
}
function Kt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: s } = e, c = n.offsetWidth, d = n.offsetHeight;
  (r !== c || s !== d) && (e.lastWidth = c, e.lastHeight = d, t({ width: c, height: d }));
}
function kn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    Ut(_e, t), _e.length || Mn();
  };
  return _e.push(t), Kt(t), In(), r;
}
function Yt(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const d = (t ? kn : Dn)(e, (...f) => {
    r || n(...f);
  });
  return r = !1, d;
}
function Bn(e) {
  const n = [];
  let t = e.parentNode;
  for (; t && t.nodeName !== "BODY" && t.nodeType === document.ELEMENT_NODE; )
    $n(t) && n.push(t), t = t.parentNode;
  return n.push(window), n;
}
function $n(e) {
  const { overflow: n, overflowX: t, overflowY: r } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + r + t);
}
function Qt(e, n) {
  const t = Bn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((r) => {
    r.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((s) => {
      s.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Fn(e) {
  return e !== e;
}
function Gt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Be, vt;
function Vn() {
  if (vt) return Be;
  vt = 1;
  var e = jt(), n = 1 / 0, t = 17976931348623157e292;
  function r(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === n || s === -n) {
      var c = s < 0 ? -1 : 1;
      return c * t;
    }
    return s === s ? s : 0;
  }
  return Be = r, Be;
}
var $e, pt;
function Hn() {
  if (pt) return $e;
  pt = 1;
  var e = Vn();
  function n(t) {
    var r = e(t), s = r % 1;
    return r === r ? s ? r - s : r : 0;
  }
  return $e = n, $e;
}
var Fe, mt;
function zn() {
  if (mt) return Fe;
  mt = 1;
  var e = Hn(), n = "Expected a function";
  function t(r, s) {
    var c;
    if (typeof s != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (c = s.apply(this, arguments)), r <= 1 && (s = void 0), c;
    };
  }
  return Fe = t, Fe;
}
var Ve, _t;
function Pn() {
  if (_t) return Ve;
  _t = 1;
  var e = zn();
  function n(t) {
    return e(2, t);
  }
  return Ve = n, Ve;
}
var qn = Pn();
const Wn = /* @__PURE__ */ ce(qn), Z = () => /* @__PURE__ */ Object.create(null);
var He, gt;
function jn() {
  if (gt) return He;
  gt = 1;
  function e(n) {
    var t = n == null ? 0 : n.length;
    return t ? n[t - 1] : void 0;
  }
  return He = e, He;
}
var Un = jn();
const Xt = /* @__PURE__ */ ce(Un);
function Jt(e, n) {
  return e.indexOf(n) !== -1;
}
function Ye(e, n, t) {
  for (let r = 0, s = e.length; r < s; r++)
    if (n.call(t, e[r], r, e)) return e[r];
}
function je(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
function Kn() {
  const e = (s, c) => {
    if (!s.isBranch) return;
    const d = s.children.slice();
    for (; d.length; ) {
      const f = d[0];
      f.isBranch && d.push(...f.children), c(f), d.shift();
    }
  }, n = (s, c) => {
    s.isBranch && s.children.forEach((d) => {
      n(d, c), c(d);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (s, c) => {
      s.forEach((d) => {
        n(d, c), c(d);
      });
    },
    traverseAllNodesByIndex: (s, c) => {
      const d = (f) => {
        f.children && f.children.forEach((o) => {
          c(o) !== !1 && o.isBranch && o.children && d(o);
        });
      };
      d({ children: s });
    }
  };
}
const Yn = 0, Qn = 1, Gn = 2;
function Xn(e) {
  const n = ue({
    normalizedOptions: [],
    nodeMap: Z(),
    checkedStateMap: Z(),
    selectedNodeIds: e(),
    selectedNodeMap: Z()
  });
  return {
    forest: n,
    buildForestState: (s, c, d, f) => {
      const o = Z();
      n.selectedNodeIds.forEach((i) => {
        o[i] = !0;
      }), n.selectedNodeMap = o;
      const a = Z();
      s.multiple && (d((i) => {
        a[i.id] = Yn;
      }), c.forEach((i) => {
        a[i.id] = Gn, !s.flat && !s.disableBranchNodes && i.ancestors.forEach((l) => {
          f(l) || (a[l.id] = Qn);
        });
      })), n.checkedStateMap = a;
    },
    isSelected: (s) => !!s && n.selectedNodeMap[s.id] === !0
  };
}
const Jn = null, yt = "ALL_CHILDREN", Ot = "ALL_DESCENDANTS", bt = "LEAF_CHILDREN", St = "LEAF_DESCENDANTS";
function Zn() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function er(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function tr(e, n, t, r) {
  const s = (o) => ({
    ...o,
    ...e.normalizer ? e.normalizer(o, t.value) : {}
  }), c = (o) => {
    pe(
      () => !(o.id in n.nodeMap && !n.nodeMap[o.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(o.id)}. Their labels are "${n.nodeMap[o.id].label}" and "${o.label}" respectively.`
    );
  }, d = (o) => {
    pe(
      () => !(o.children === void 0 && o.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, f = (o, a, i) => {
    let l = a.map((v) => [s(v), v]).map(([v, g], m) => {
      c(v), d(v);
      const { id: E, label: b, children: L, isDefaultExpanded: u } = v, S = o === Jn, h = S ? 0 : o.level + 1, _ = Array.isArray(L) || L === null, B = !_, C = !!v.isDisabled || !e.flat && !S && o.isDisabled, p = !!v.isNew, I = (e.matchKeys || ["label"]).reduce((D, A) => ({
        ...D,
        [A]: er(v[A]).toLocaleLowerCase()
      }), {}), y = S ? I.label : o.nestedSearchLabel + " " + I.label;
      n.nodeMap[E] = Z();
      const N = n.nodeMap[E];
      if (Object.assign(N, {
        id: E,
        label: b,
        level: h,
        ancestors: S ? [] : [o].concat(o.ancestors),
        index: (S ? [] : o.index).concat(m),
        parentNode: o,
        lowerCased: I,
        nestedSearchLabel: y,
        isDisabled: C,
        isNew: p,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: _,
        isLeaf: B,
        isRootNode: S,
        raw: g
      }), _) {
        const D = Array.isArray(L);
        Object.assign(N, {
          childrenStates: { ...Zn(), isLoaded: D },
          isExpanded: typeof u == "boolean" ? u : h < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [yt]: 0,
            [Ot]: 0,
            [bt]: 0,
            [St]: 0
          },
          children: D ? f(N, L, i) : []
        }), u === !0 && N.ancestors.forEach((A) => {
          A.isExpanded = !0;
        }), !D && typeof e.loadOptions != "function" ? pe(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !D && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((D) => D.count[Ot]++), B && N.ancestors.forEach((D) => D.count[St]++), S || (o.count[yt] += 1, B && (o.count[bt] += 1), C && (o.hasDisabledDescendants = !0)), i && i[E]) {
        const D = i[E];
        N.isMatched = D.isMatched, N.showAllChildrenOnSearch = D.showAllChildrenOnSearch, N.isHighlighted = D.isHighlighted, D.isBranch && N.isBranch && (N.isExpanded = D.isExpanded, N.isExpandedOnSearch = D.isExpandedOnSearch, D.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = { ...D.childrenStates });
      }
      return N;
    });
    if (e.branchNodesFirst) {
      const v = l.filter((m) => m.isBranch), g = l.filter((m) => m.isLeaf);
      l = v.concat(g);
    }
    return l;
  };
  return {
    normalize: f,
    enhancedNormalizer: s,
    checkDuplication: c,
    verifyNodeShape: d
  };
}
const Et = "ALL", Nt = "BRANCH_PRIORITY", Tt = "LEAF_PRIORITY", Lt = "ALL_WITH_INDETERMINATE";
function Zt(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function nr(e, n) {
  return e.level === n.level ? Zt(e, n) : e.level - n.level;
}
function rr(e, n, t, r, s, c) {
  const d = T(() => n.selectedNodeIds.map((m) => t(m))), f = T(() => !e.multiple), o = T(() => {
    let m;
    if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Et)
      m = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Nt)
      m = n.selectedNodeIds.filter((E) => {
        const b = t(E);
        return b ? b.isRootNode ? !0 : !r(b.parentNode) : !1;
      });
    else if (e.valueConsistsOf === Tt)
      m = n.selectedNodeIds.filter((E) => {
        const b = t(E);
        return b ? b.isLeaf ? !0 : b.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Lt) {
      const E = [];
      m = n.selectedNodeIds.slice(), d.value.forEach((b) => {
        b.ancestors.forEach((L) => {
          E.includes(L.id) || m.includes(L.id) || E.push(L.id);
        });
      }), m.push(...E);
    } else
      m = [];
    return e.sortValueBy === "LEVEL" ? m.sort((E, b) => nr(t(E), t(b))) : e.sortValueBy === "INDEX" && m.sort((E, b) => Zt(t(E), t(b))), m;
  }), a = T(() => o.value.length > 0);
  return {
    selectedNodes: d,
    single: f,
    internalValue: o,
    hasValue: a,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? o.value.slice() : o.value[0];
      const m = o.value.map((E) => t(E).raw);
      return e.multiple ? m : m[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((m) => c(m)).map((m) => m.id),
    extractNodeFromValue: (m) => {
      const E = { id: m };
      if (e.valueFormat === "id")
        return E;
      const b = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return Ye(
        b,
        (u) => u && c(u).id === m
      ) || E;
    },
    fixSelectedNodeIds: (m, E) => {
      let b = [];
      if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Et)
        b = m;
      else if (e.valueConsistsOf === Nt)
        m.forEach((u) => {
          b.push(u);
          const S = t(u);
          S != null && S.isBranch && s(S, (h) => {
            b.push(h.id);
          });
        });
      else if (e.valueConsistsOf === Tt) {
        const u = Z(), S = m.slice();
        for (; S.length; ) {
          const h = S.shift(), _ = t(h);
          _ && (b.push(h), !_.isRootNode && (_.parentNode.id in u || (u[_.parentNode.id] = _.parentNode.children.length), --u[_.parentNode.id] === 0 && S.push(_.parentNode.id)));
        }
      } else if (e.valueConsistsOf === Lt) {
        const u = Z(), S = m.filter((h) => {
          const _ = t(h);
          return _ && (_.isLeaf || _.children.length === 0);
        });
        for (; S.length; ) {
          const h = S.shift(), _ = t(h);
          _ && (b.push(h), !_.isRootNode && (_.parentNode.id in u || (u[_.parentNode.id] = _.parentNode.children.length), --u[_.parentNode.id] === 0 && S.push(_.parentNode.id)));
        }
      }
      je(n.selectedNodeIds, b) && (n.selectedNodeIds = b), E();
    }
  };
}
const wt = null, sr = 0;
function or(e, n, t, r, s, c, d, f, o, a, i, l, v, g, m) {
  let E = !1;
  const b = () => {
    E = !1;
  }, L = (p) => {
    t.selectedNodeIds.push(p.id), t.selectedNodeMap[p.id] = !0;
  }, u = (p) => {
    Ut(t.selectedNodeIds, p.id), delete t.selectedNodeMap[p.id];
  }, S = () => {
    i() && (v() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((p) => {
      const I = r(p);
      return I ? I.isDisabled : !1;
    }), f());
  }, h = (p) => {
    if (v() || e.disableBranchNodes)
      return L(p);
    if (e.flat) {
      L(p), e.autoSelectAncestors ? p.ancestors.forEach((y) => {
        !s(y) && !y.isDisabled && L(y);
      }) : e.autoSelectDescendants && c(p, (y) => {
        !s(y) && !y.isDisabled && L(y);
      });
      return;
    }
    const I = p.isLeaf || !p.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (I && L(p), p.isBranch && c(p, (y) => {
      (!y.isDisabled || e.allowSelectingDisabledDescendants) && L(y);
    }), I) {
      let y = p;
      for (; (y = y.parentNode) !== wt && (y && y.children.every(s)); )
        L(y);
    }
  }, _ = (p) => {
    if (e.disableBranchNodes)
      return u(p);
    if (e.flat) {
      u(p), e.autoDeselectAncestors ? p.ancestors.forEach((y) => {
        s(y) && !y.isDisabled && u(y);
      }) : e.autoDeselectDescendants && c(p, (y) => {
        s(y) && !y.isDisabled && u(y);
      });
      return;
    }
    let I = !1;
    if (p.isBranch && d(p, (y) => {
      (!y.isDisabled || e.allowSelectingDisabledDescendants) && (u(y), I = !0);
    }), p.isLeaf || I || p.isBranch && p.children.length === 0) {
      u(p);
      let y = p;
      for (; (y = y.parentNode) !== wt && (y && s(y)); )
        u(y);
    }
  }, B = (p) => {
    if (e.disabled || p.isDisabled)
      return;
    v() && S();
    const I = e.multiple && !e.flat ? t.checkedStateMap[p.id] === sr : !s(p);
    I ? h(p) : _(p), f(), ne(() => {
      n(I ? "select" : "deselect", p.raw, g);
    }), m.active && I && (v() || e.clearOnSelect) && o(), v() && e.closeOnSelect && (a(), e.searchable && (E = !0));
  };
  return {
    select: B,
    clear: S,
    addValue: L,
    removeValue: u,
    removeLastValue: () => {
      if (!i()) return;
      if (v()) return S();
      const p = Xt(l());
      if (!p) return;
      const I = r(p);
      I && B(I);
    },
    resetFlags: b,
    getBlurOnSelectFlag: () => E,
    setBlurOnSelectFlag: (p) => {
      E = p;
    }
  };
}
function lr(e, n, t, r, s, c, d, f, o, a, i, l, v) {
  const g = ue({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), m = (w) => r.active ? w.isExpandedOnSearch || !1 : w.isExpanded || !1, E = (w) => !!(w.isMatched || w.isBranch && w.hasMatchedDescendants && !e.flattenSearchResults || !w.isRootNode && w.parentNode.showAllChildrenOnSearch), b = (w) => !(r.active && !E(w)), L = T(() => {
    const w = [];
    return c((k) => {
      if ((!r.active || E(k)) && w.push(k.id), k.isBranch && !m(k))
        return !1;
    }), w;
  }), u = T(() => L.value.length !== 0), S = (w, k = !0) => {
    const K = g.current;
    if (K != null && K in t.nodeMap && (t.nodeMap[K].isHighlighted = !1), !w) {
      g.current = null;
      return;
    }
    if (g.current = w.id, w.isHighlighted = !0, g.isOpen && k) {
      const de = () => {
        const oe = l();
        if (!oe) return;
        const le = oe.querySelector(`.vue-treeselect__option[data-id="${w.id}"]`);
        le && gn(oe, le);
      };
      l() ? de() : ne(de);
    }
  }, h = () => {
    if (!u.value) return;
    const w = L.value[0], k = s(w);
    k && S(k);
  }, _ = () => {
    if (!u.value) return;
    const k = L.value.indexOf(g.current) - 1;
    if (k === -1) return C();
    const K = s(L.value[k]);
    K && S(K);
  }, B = () => {
    if (!u.value) return;
    const k = L.value.indexOf(g.current) + 1;
    if (k === L.value.length) return h();
    const K = s(L.value[k]);
    K && S(K);
  }, C = () => {
    if (!u.value) return;
    const w = Xt(L.value);
    if (!w) return;
    const k = s(w);
    k && S(k);
  }, p = (w = !1) => {
    const { current: k } = g;
    (w || k == null || !(k in t.nodeMap) || !b(s(k))) && h();
  }, I = () => {
    const w = l();
    w && (g.lastScrollPosition = w.scrollTop);
  }, y = () => {
    const w = l();
    w && (w.scrollTop = g.lastScrollPosition);
  }, N = () => {
    !g.isOpen || !e.disabled && e.alwaysOpen || (I(), g.isOpen = !1, v(!1), o(), n("close", d(), f));
  }, D = () => {
    e.disabled || g.isOpen || (g.isOpen = !0, ne(p), ne(y), !e.options && !e.async && a(), v(!0), n("open", f));
  };
  return {
    menu: g,
    visibleOptionIds: L,
    hasVisibleOptions: u,
    shouldExpand: m,
    shouldShowOptionInMenu: b,
    openMenu: D,
    closeMenu: N,
    toggleMenu: () => {
      g.isOpen ? N() : D();
    },
    toggleExpanded: (w) => {
      let k;
      r.active ? (k = w.isExpandedOnSearch = !w.isExpandedOnSearch, k && (w.showAllChildrenOnSearch = !0)) : k = w.isExpanded = !w.isExpanded, k && !w.childrenStates.isLoaded && i(w);
    },
    setCurrentHighlightedOption: S,
    resetHighlightedOptionWhenNecessary: p,
    highlightFirstOption: h,
    highlightPrevOption: _,
    highlightNextOption: B,
    highlightLastOption: C,
    saveMenuScrollPosition: I,
    restoreMenuScrollPosition: y
  };
}
var ze, Rt;
function ar() {
  if (Rt) return ze;
  Rt = 1;
  function e(n, t) {
    var r = t.length, s = n.length;
    if (s > r)
      return !1;
    if (s === r)
      return n === t;
    e: for (var c = 0, d = 0; c < s; c++) {
      for (var f = n.charCodeAt(c); d < r; )
        if (t.charCodeAt(d++) === f)
          continue e;
      return !1;
    }
    return !0;
  }
  return ze = e, ze;
}
var ir = ar();
const ur = /* @__PURE__ */ ce(ir), Ct = null, xt = "ALL_CHILDREN", Dt = "ALL_DESCENDANTS", At = "LEAF_CHILDREN", It = "LEAF_DESCENDANTS";
function Mt(e, n, t) {
  return e ? ur(n, t) : Jt(t, n);
}
function cr(e, n, t, r) {
  const s = ue({
    active: !1,
    noResults: !0,
    countMap: Z()
  });
  return {
    localSearch: s,
    handleLocalSearch: () => {
      const { searchQuery: d } = n, f = () => r(!0);
      if (!d)
        return s.active = !1, f();
      s.active = !0, s.noResults = !0, t((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, s.countMap[i.id] = {
          [xt]: 0,
          [Dt]: 0,
          [At]: 0,
          [It]: 0
        });
      });
      const o = d.trim().toLocaleLowerCase(), a = o.replace(/\s+/g, " ").split(" ");
      t((i) => {
        e.searchNested && a.length > 1 ? i.isMatched = a.every(
          (l) => Mt(!1, l, i.nestedSearchLabel)
        ) : i.isMatched = (e.matchKeys || ["label"]).some(
          (l) => Mt(!e.disableFuzzyMatching, o, i.lowerCased[l])
        ), i.isMatched && (s.noResults = !1, i.ancestors.forEach((l) => {
          s.countMap[l.id][Dt]++;
        }), i.isLeaf && i.ancestors.forEach((l) => {
          s.countMap[l.id][It]++;
        }), i.parentNode !== Ct && (s.countMap[i.parentNode.id][xt] += 1, i.isLeaf && (s.countMap[i.parentNode.id][At] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== Ct && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), f();
    }
  };
}
const dr = "ASYNC_SEARCH";
function fr(e) {
  return e.message || String(e);
}
function hr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function vr(e, n, t, r, s) {
  const c = ee(Z()), d = ee(0), f = () => {
    const { searchQuery: a } = n, i = c.value[a] || {
      ...hr(),
      options: []
    };
    if (W(
      () => i.options,
      () => {
        n.searchQuery === a && r();
      },
      { deep: !0 }
    ), a === "") {
      if (Array.isArray(e.defaultOptions))
        return i.options = e.defaultOptions, i.isLoaded = !0, i;
      if (e.defaultOptions !== !0)
        return i.isLoaded = !0, i;
    }
    return c.value[a] || (c.value[a] = i), i;
  };
  return {
    remoteSearch: c,
    key: d,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: a } = n, i = f(), l = () => {
        r(), s(!0);
      };
      if ((a === "" || e.cacheOptions) && i.isLoaded)
        return l();
      t({
        action: dr,
        args: { searchQuery: a },
        isPending: () => i.isLoading,
        start: () => {
          i.isLoading = !0, i.isLoaded = !1, i.loadingError = "";
        },
        succeed: (v) => {
          i.isLoaded = !0, i.options = v, n.searchQuery === a && l();
        },
        fail: (v) => {
          i.loadingError = fr(v);
        },
        end: () => {
          d.value += 1, i.isLoading = !1;
        }
      });
    }
  };
}
const pr = "LOAD_ROOT_OPTIONS", mr = "LOAD_CHILDREN_OPTIONS";
function kt(e) {
  return e.message || String(e);
}
function _r() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function gr(e, n, t, r) {
  const s = ue(_r()), c = (o) => {
    const { action: a, args: i, isPending: l, start: v, succeed: g, fail: m, end: E } = o;
    if (!e.loadOptions || l())
      return;
    v();
    const b = Wn((u, S) => {
      u ? m(u) : g(S), E();
    }), L = e.loadOptions({
      id: t,
      instanceId: t,
      action: a,
      ...i,
      callback: b
    });
    Gt(L) && L.then(() => {
      b();
    }).catch((u) => {
      b(u);
    }).catch((u) => {
      console.error(u);
    });
  };
  return {
    rootOptionsStates: s,
    callLoadOptionsProp: c,
    loadRootOptions: () => {
      c({
        action: pr,
        isPending: () => s.isLoading,
        start: () => {
          s.isLoading = !0, s.loadingError = "";
        },
        succeed: () => {
          s.isLoaded = !0, ne(() => {
            r(!0);
          });
        },
        fail: (o) => {
          s.loadingError = kt(o);
        },
        end: () => {
          s.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (o) => {
      const { id: a, raw: i } = o;
      c({
        action: mr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: i
        },
        isPending: () => {
          const l = n(a);
          return l ? l.childrenStates.isLoading : !1;
        },
        start: () => {
          const l = n(a);
          l && (l.childrenStates.isLoading = !0, l.childrenStates.loadingError = "");
        },
        succeed: () => {
          const l = n(a);
          l && (l.childrenStates.isLoaded = !0);
        },
        fail: (l) => {
          const v = n(a);
          v && (v.childrenStates.loadingError = kt(l));
        },
        end: () => {
          const l = n(a);
          l && (l.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const Bt = null;
function yr(e, n, t, r, s) {
  const c = ue({
    isFocused: !1,
    searchQuery: ""
  }), d = () => {
    c.searchQuery = "";
  }, f = (R) => ({
    ...R,
    ...e.normalizer ? e.normalizer(R, t.value) : {}
  }), o = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((R) => f(R)).map((R) => R.id), a = Kn(), i = Xn(o), { forest: l, isSelected: v } = i, g = (R) => (pe(
    () => R != null,
    () => `Invalid node id: ${R}`
  ), R == null ? null : R in l.nodeMap ? l.nodeMap[R] : m(R)), m = (R) => {
    const P = E(R), ae = f(P).label || `${R} (unknown)`, Oe = {
      id: R,
      label: ae,
      ancestors: [],
      parentNode: Bt,
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
    if (e.valueFormat === "id")
      return P;
    const ae = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return Ye(
      ae,
      (Xe) => Xe && f(Xe).id === R
    ) || P;
  };
  let b, L, u, S, h, _;
  const B = gr(
    e,
    g,
    t.value,
    (R) => L(R)
  );
  u = B.loadRootOptions, b = B.loadChildrenOptions, S = B.callLoadOptionsProp;
  const { rootOptionsStates: C } = B, p = tr(
    e,
    l,
    t,
    b
  ), { normalize: I, enhancedNormalizer: y } = p, N = rr(
    e,
    l,
    g,
    v,
    a.traverseDescendantsBFS,
    y
  ), { selectedNodes: D, single: A, internalValue: $, hasValue: w, getValue: k, fixSelectedNodeIds: K } = N;
  _ = () => {
    const R = (P) => {
      a.traverseAllNodesByIndex(l.normalizedOptions, P);
    };
    i.buildForestState(
      e,
      D.value,
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
  }, Qe = () => (e.async, null);
  h = () => {
    const R = e.async ? Qe() || [] : e.options || [];
    if (Array.isArray(R)) {
      const P = l.nodeMap;
      l.nodeMap = Z(), de(P), l.normalizedOptions = I(Bt, R, P), K($.value, _);
    } else
      l.normalizedOptions = [];
  };
  const oe = vr(
    e,
    c,
    S,
    h,
    (R) => L(R)
  ), { handleRemoteSearch: le } = oe, fe = cr(
    e,
    c,
    (R) => {
      a.traverseAllNodesDFS(l.normalizedOptions, R);
    },
    (R) => L(R)
  ), { handleLocalSearch: Ge } = fe, ln = (R) => {
    a.traverseAllNodesByIndex(l.normalizedOptions, R);
  }, F = lr(
    e,
    n,
    l,
    fe.localSearch,
    g,
    ln,
    k,
    t.value,
    d,
    u,
    b,
    r,
    s
  );
  L = F.resetHighlightedOptionWhenNecessary;
  const he = or(
    e,
    n,
    l,
    g,
    v,
    a.traverseDescendantsBFS,
    a.traverseDescendantsDFS,
    _,
    d,
    F.closeMenu,
    () => w.value,
    () => $.value,
    () => A.value,
    t.value,
    fe.localSearch
  );
  return W(() => e.alwaysOpen, (R) => {
    R ? F.openMenu() : F.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    h();
  }), W(() => e.disabled, (R) => {
    R && F.menu.isOpen ? F.closeMenu() : !R && !F.menu.isOpen && e.alwaysOpen && F.openMenu();
  }), W(() => e.flat, () => {
    h();
  }), W($, (R, P) => {
    je(R, P) && n("update:modelValue", k(), t.value);
  }), W(() => e.matchKeys, () => {
    h();
  }), W(() => e.multiple, (R) => {
    R && _();
  }), W(() => e.options, () => {
    e.async || (h(), C.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => c.searchQuery, () => {
    e.async ? le() : Ge(), n("search-change", c.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const R = o();
    je(R, $.value) && K(R, _);
  }), ge(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && u(), e.alwaysOpen && F.openMenu(), e.async && e.defaultOptions && le();
  }), ye(() => {
    s(!1);
  }), {
    // State
    forest: an(un(() => l)),
    trigger: c,
    menu: F.menu,
    localSearch: fe.localSearch,
    remoteSearch: oe.remoteSearch,
    rootOptionsStates: C,
    // Computed
    selectedNodes: D,
    single: A,
    internalValue: $,
    hasValue: w,
    visibleOptionIds: F.visibleOptionIds,
    hasVisibleOptions: F.hasVisibleOptions,
    // Node methods
    getNode: g,
    isSelected: v,
    // Traversal
    traverseDescendantsBFS: a.traverseDescendantsBFS,
    traverseDescendantsDFS: a.traverseDescendantsDFS,
    traverseAllNodesDFS: a.traverseAllNodesDFS,
    traverseAllNodesByIndex: a.traverseAllNodesByIndex,
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
    openMenu: F.openMenu,
    closeMenu: F.closeMenu,
    toggleMenu: F.toggleMenu,
    toggleExpanded: F.toggleExpanded,
    shouldExpand: F.shouldExpand,
    shouldShowOptionInMenu: F.shouldShowOptionInMenu,
    // Highlighting
    setCurrentHighlightedOption: F.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: F.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: F.highlightFirstOption,
    highlightPrevOption: F.highlightPrevOption,
    highlightNextOption: F.highlightNextOption,
    highlightLastOption: F.highlightLastOption,
    // Search
    handleLocalSearch: Ge,
    handleRemoteSearch: le,
    resetSearchQuery: d,
    // Async
    loadRootOptions: u,
    loadChildrenOptions: b,
    // Helpers
    initialize: h,
    buildForestState: _,
    resetFlags: he.resetFlags
  };
}
const Or = ["name", "value"], br = /* @__PURE__ */ X({
  __name: "HiddenFields",
  setup(e) {
    const n = te("treeselect");
    function t(s) {
      return typeof s == "string" ? s : s != null && !Fn(s) ? JSON.stringify(s) : "";
    }
    const r = T(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let s = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (s = [s.join(n.delimiter)]), s;
    });
    return (s, c) => (O(!0), M(re, null, ie(r.value, (d, f) => (O(), M("input", {
      key: `hidden-field-${f}`,
      type: "hidden",
      name: x(n).name,
      value: d
    }, null, 8, Or))), 128));
  }
}), Sr = 0, Er = 1, Nr = 2, as = "LOAD_ROOT_OPTIONS", is = "LOAD_CHILDREN_OPTIONS", us = "ASYNC_SEARCH", cs = "ALL", ds = "BRANCH_PRIORITY", fs = "LEAF_PRIORITY", hs = "ALL_WITH_INDETERMINATE", q = {
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
}, Tr = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), $t = 5, Ft = 40, Lr = {
  key: 0,
  class: "vue-treeselect__input-container"
}, wr = ["tabindex", "required"], Rr = ["tabindex"], en = /* @__PURE__ */ X({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = te("treeselect"), r = ee(), s = ee(), c = ee($t), d = ee(""), f = T(() => t.searchable), o = T(() => t.disabled), a = T(() => t.multiple), i = T(() => t.tabIndex), l = T(() => t.required), v = T(() => t.hasValue.value), g = T(() => f.value && !o.value && a.value), m = T(() => ({
      width: g.value ? `${c.value}px` : void 0
    })), E = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], b = () => {
      s.value && (c.value = Math.max(
        $t,
        s.value.scrollWidth + 15
      ));
    }, L = () => {
      t.trigger.searchQuery = d.value;
    }, u = () => {
      d.value = "", L();
    }, S = () => {
      !o.value && r.value && r.value.focus();
    }, h = () => {
      r.value && r.value.blur();
    }, _ = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, B = () => {
      var D;
      const N = (D = t.getMenu) == null ? void 0 : D.call(t);
      if (N && document.activeElement === N)
        return S();
      t.trigger.isFocused = !1, t.closeMenu();
    }, C = xn(
      L,
      Tr,
      { leading: !0, trailing: !0 }
    ), p = () => {
      d.value ? C() : (C.cancel(), L());
    }, I = (N) => {
      const D = N.which || N.keyCode;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Jt(E, D))
          return N.preventDefault(), t.openMenu();
        switch (D) {
          case q.BACKSPACE: {
            t.backspaceRemoves && !d.value.length && t.removeLastValue();
            break;
          }
          case q.ENTER: {
            if (N.preventDefault(), t.menu.value.current === null) return;
            const A = t.getNode(t.menu.value.current);
            if (!A || A.isBranch && t.disableBranchNodes) return;
            t.select(A);
            break;
          }
          case q.ESCAPE: {
            d.value.length ? u() : t.menu.value.isOpen && t.closeMenu();
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
            const A = t.menu.value.current;
            if (A === null) break;
            const $ = t.getNode(A);
            $ && ($.isBranch && t.shouldExpand($) ? (N.preventDefault(), t.toggleExpanded($)) : !$.isRootNode && ($.isLeaf || $.isBranch && !t.shouldExpand($)) && (N.preventDefault(), t.setCurrentHighlightedOption($.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const A = t.menu.value.current;
            if (A === null) break;
            const $ = t.getNode(A);
            $ && $.isBranch && !t.shouldExpand($) && (N.preventDefault(), t.toggleExpanded($));
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
    }, y = (N) => {
      d.value.length && N.stopPropagation();
    };
    return W(() => t.trigger.searchQuery, (N) => {
      d.value = N;
    }), W(d, () => {
      g.value && ne(b);
    }), n({
      clear: u,
      focus: S,
      blur: h
    }), (N, D) => f.value && !o.value ? (O(), M("div", Lr, [
      cn(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: i.value,
        required: l.value && !v.value,
        "onUpdate:modelValue": D[0] || (D[0] = (A) => d.value = A),
        style: Pe(m.value),
        onFocus: _,
        onInput: p,
        onBlur: B,
        onKeydown: I,
        onMousedown: y
      }, null, 44, wr), [
        [dn, d.value]
      ]),
      g.value ? (O(), M("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: s,
        class: "vue-treeselect__sizer"
      }, H(d.value), 513)) : U("", !0)
    ])) : (O(), M("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: o.value ? void 0 : i.value,
      onFocus: _,
      onBlur: B,
      onKeydown: I
    }, null, 40, Rr));
  }
}), tn = /* @__PURE__ */ X({
  __name: "Placeholder",
  setup(e) {
    const n = te("treeselect"), t = T(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (r, s) => (O(), M("div", {
      class: Q(t.value)
    }, H(x(n).placeholder), 3));
  }
}), Cr = {
  key: 0,
  class: "vue-treeselect__single-value"
}, xr = /* @__PURE__ */ X({
  __name: "SingleValue",
  setup(e) {
    const n = te("treeselect"), t = Ue(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), s = T(() => n.selectedNodes.value[0]), c = T(() => t["value-label"]);
    return (d, f) => (O(), M(re, null, [
      r.value ? (O(), M("div", Cr, [
        c.value ? (O(), V(Ke(c.value), {
          key: 0,
          node: s.value
        }, null, 8, ["node"])) : (O(), M(re, { key: 1 }, [
          Y(H(s.value.label), 1)
        ], 64))
      ])) : U("", !0),
      G(tn),
      G(en, { ref: "input" }, null, 512)
    ], 64));
  }
}), Dr = {
  name: "vue-treeselect--x"
}, nn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, s] of n)
    t[r] = s;
  return t;
}, Ar = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Ir(e, n, t, r, s, c) {
  return O(), M("svg", Ar, n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ]));
}
const rn = /* @__PURE__ */ nn(Dr, [["render", Ir]]), Mr = { class: "vue-treeselect__multi-value-item-container" }, kr = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, Br = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, $r = /* @__PURE__ */ X({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ue(), r = te("treeselect"), s = T(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), c = T(() => t["value-label"]), d = se(function() {
      r.select(n.node);
    });
    return (f, o) => (O(), M("div", Mr, [
      z("div", {
        class: Q(s.value),
        onMousedown: o[0] || (o[0] = //@ts-ignore
        (...a) => x(d) && x(d)(...a))
      }, [
        c.value ? (O(), V(Ke(c.value), {
          key: 0,
          node: f.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (O(), M("span", kr, H(f.node.label), 1)),
        z("span", Br, [
          G(rn)
        ])
      ], 34)
    ]));
  }
}), Fr = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Vr = { class: "vue-treeselect__limit-tip-text" }, Hr = /* @__PURE__ */ X({
  __name: "MultiValue",
  setup(e) {
    const n = te("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((c) => c !== null)), r = T(() => n.internalValue.value.length > n.limit), s = T(() => {
      const c = n.internalValue.value.length - n.limit;
      return n.limitText(c);
    });
    return (c, d) => (O(), V(fn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (O(!0), M(re, null, ie(t.value, (f) => (O(), V($r, {
          key: `multi-value-item-${f.id}`,
          node: f
        }, null, 8, ["node"]))), 128)),
        r.value ? (O(), M("div", Fr, [
          z("span", Vr, H(s.value), 1)
        ])) : U("", !0),
        G(tn, { key: "placeholder" }),
        G(en, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), zr = {
  name: "vue-treeselect--arrow"
}, Pr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function qr(e, n, t, r, s, c) {
  return O(), M("svg", Pr, n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ]));
}
const sn = /* @__PURE__ */ nn(zr, [["render", qr]]), Wr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, jr = ["title"], Ur = /* @__PURE__ */ X({
  __name: "Control",
  setup(e) {
    const n = te("treeselect"), t = te("instance"), r = T(() => n.single.value), s = T(() => n.hasValue.value && n.internalValue.value.some((l) => {
      const v = n.getNode(l);
      return v && !v.isDisabled;
    })), c = T(() => n.clearable && !n.disabled && n.hasValue.value && (s.value || n.allowClearingDisabled)), d = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), f = T(() => n.multiple ? n.clearAllText : n.clearValueText), o = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), a = se(function(l) {
      l.stopPropagation(), l.preventDefault();
      const v = n.beforeClearAll(), g = (m) => {
        m && n.clear();
      };
      Gt(v) ? v.then((m) => g(m)) : setTimeout(() => g(v), 0);
    }), i = se(function(l) {
      l.preventDefault(), l.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (l, v) => (O(), M("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: v[2] || (v[2] = //@ts-ignore
      (...g) => x(t).handleMouseDown && x(t).handleMouseDown(...g))
    }, [
      z("div", Wr, [
        r.value ? (O(), V(xr, { key: 0 })) : (O(), V(Hr, { key: 1 }))
      ], 512),
      c.value ? (O(), M("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: f.value,
        onMousedown: v[0] || (v[0] = //@ts-ignore
        (...g) => x(a) && x(a)(...g))
      }, [
        G(rn, { class: "vue-treeselect__x" })
      ], 40, jr)) : U("", !0),
      d.value ? (O(), M("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: v[1] || (v[1] = //@ts-ignore
        (...g) => x(i) && x(i)(...g))
      }, [
        G(sn, {
          class: Q(o.value)
        }, null, 8, ["class"])
      ], 32)) : U("", !0)
    ], 544));
  }
}), Kr = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ X({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (O(), M("div", {
      class: Q(`vue-treeselect__tip vue-treeselect__${n.type}-tip`)
    }, [
      z("div", Kr, [
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
}), Yr = ["data-id"], Qr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Gr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Xr = {
  key: 0,
  class: "vue-treeselect__list"
}, Jr = ["title"], Vt = "vue-treeselect__label", Ht = "vue-treeselect__count", zt = /* @__PURE__ */ X({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ue(), r = te("treeselect"), s = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), c = T(() => n.node.isBranch && r.shouldExpand(n.node)), d = T(() => r.shouldShowOptionInMenu(n.node)), f = T(() => !r.shouldFlattenOptions || !d.value), o = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !d.value
    })), a = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": c.value
    })), i = T(() => !(r.single || r.disableBranchNodes && n.node.isBranch)), l = T(() => {
      const C = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": C === Nr,
        "vue-treeselect__checkbox--indeterminate": C === Er,
        "vue-treeselect__checkbox--unchecked": C === Sr,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), v = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), g = T(() => v.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), m = T(() => t["option-label"]), E = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), b = T(() => {
      var C;
      return ((C = n.node.childrenStates) == null ? void 0 : C.isLoaded) && (!n.node.children || n.node.children.length === 0);
    }), L = T(() => {
      var C;
      return ((C = n.node.childrenStates) == null ? void 0 : C.isLoading) || !1;
    }), u = T(() => {
      var C;
      return !!((C = n.node.childrenStates) != null && C.loadingError);
    }), S = (C) => {
      C.target === C.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, h = se(function() {
      r.toggleExpanded(n.node);
    }), _ = se(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), B = se(function() {
      r.loadChildrenOptions(n.node);
    });
    return (C, p) => {
      const I = hn("Option", !0);
      return O(), M("div", {
        class: Q(s.value)
      }, [
        z("div", {
          class: Q(o.value),
          "data-id": C.node.id,
          onMouseenter: S
        }, [
          C.node.isBranch && f.value ? (O(), M("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: p[0] || (p[0] = //@ts-ignore
            (...y) => x(h) && x(h)(...y))
          }, [
            G(We, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                G(sn, {
                  class: Q(a.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : x(r).hasBranchNodes && f.value ? (O(), M("div", Qr, "   ")) : U("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: p[1] || (p[1] = //@ts-ignore
            (...y) => x(_) && x(_)(...y))
          }, [
            i.value ? (O(), M("div", Gr, [
              z("span", {
                class: Q(l.value)
              }, p[3] || (p[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ]), 2)
            ])) : U("", !0),
            m.value ? (O(), V(Ke(m.value), {
              key: 1,
              node: C.node,
              shouldShowCount: v.value,
              count: g.value,
              labelClassName: Vt,
              countClassName: Ht
            }, null, 8, ["node", "shouldShowCount", "count"])) : (O(), M("label", {
              key: 2,
              class: Q(Vt)
            }, [
              Y(H(C.node.label) + " ", 1),
              v.value ? (O(), M("span", {
                key: 0,
                class: Q(Ht)
              }, " (" + H(g.value) + ") ", 1)) : U("", !0)
            ]))
          ], 32)
        ], 42, Yr),
        C.node.isBranch ? (O(), V(We, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            c.value ? (O(), M("div", Xr, [
              (O(!0), M(re, null, ie(E.value, (y) => (O(), V(I, {
                key: y.id,
                node: y
              }, null, 8, ["node"]))), 128)),
              b.value ? (O(), V(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(r).noChildrenText), 1)
                ]),
                _: 1
              })) : U("", !0),
              L.value ? (O(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(H(x(r).loadingText), 1)
                ]),
                _: 1
              })) : U("", !0),
              u.value ? (O(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => {
                  var y;
                  return [
                    Y(H((y = C.node.childrenStates) == null ? void 0 : y.loadingError) + " ", 1),
                    z("a", {
                      class: "vue-treeselect__retry",
                      title: x(r).retryTitle,
                      onMousedown: p[2] || (p[2] = //@ts-ignore
                      (...N) => x(B) && x(B)(...N))
                    }, H(x(r).retryText), 41, Jr)
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
}), Zr = ["title"], es = {
  key: 4,
  class: "vue-treeselect__list"
}, ts = ["title"], ns = {
  key: 4,
  class: "vue-treeselect__list"
}, on = /* @__PURE__ */ X({
  __name: "Menu",
  setup(e) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, t = te("treeselect");
    let r = null, s = null;
    const c = T(() => ({
      maxHeight: t.maxHeight + "px"
    })), d = T(() => ({
      zIndex: t.appendToBody ? null : t.zIndex
    })), f = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), o = T(() => t.getRemoteSearchEntry()), a = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), i = T(() => {
      if (a.value) return !1;
      const u = o.value;
      return u.isLoaded && u.options.length === 0;
    }), l = () => {
      if (!t.menu.value.isOpen) return;
      const u = t.getMenu(), S = t.getControl();
      if (!u || !S) return;
      const h = u.getBoundingClientRect(), _ = S.getBoundingClientRect(), B = h.height, C = window.innerHeight, p = _.top, I = window.innerHeight - _.bottom, y = _.top >= 0 && _.top <= C || _.top < 0 && _.bottom > 0, N = I > B + Ft, D = p > B + Ft;
      y ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : N || !D ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, v = () => {
      const u = t.getMenu();
      r || !u || (r = {
        remove: Yt(u, l)
      });
    }, g = () => {
      const u = t.getControl();
      s || !u || (s = {
        remove: Qt(u, l)
      });
    }, m = () => {
      r && (r.remove(), r = null);
    }, E = () => {
      s && (s.remove(), s = null);
    }, b = () => {
      l(), v(), g();
    }, L = () => {
      m(), E();
    };
    return W(
      () => t.menu.value.isOpen,
      (u) => {
        u ? ne(b) : L();
      }
    ), ge(() => {
      t.menu.value.isOpen && ne(b);
    }), ye(() => {
      L();
    }), (u, S) => (O(), M("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Pe(d.value)
    }, [
      G(We, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          x(t).menu.value.isOpen ? (O(), M("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Pe(c.value),
            onMousedown: S[2] || (S[2] = //@ts-ignore
            (...h) => x(t).handleMouseDown && x(t).handleMouseDown(...h))
          }, [
            qe(u.$slots, "before-list"),
            x(t).async ? (O(), M(re, { key: 0 }, [
              a.value ? (O(), V(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).searchPromptText), 1)
                ]),
                _: 1
              })) : o.value.isLoading ? (O(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(H(x(t).loadingText), 1)
                ]),
                _: 1
              })) : o.value.loadingError ? (O(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(H(o.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: x(t).retryTitle,
                    onClick: S[0] || (S[0] = //@ts-ignore
                    (...h) => x(t).handleRemoteSearch && x(t).handleRemoteSearch(...h))
                  }, H(x(t).retryText), 9, Zr)
                ]),
                _: 1
              })) : i.value ? (O(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).noResultsText), 1)
                ]),
                _: 1
              })) : (O(), M("div", es, [
                (O(!0), M(re, null, ie(x(t).forest.value.normalizedOptions, (h) => (O(), V(zt, {
                  key: h.id,
                  node: h
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (O(), M(re, { key: 1 }, [
              x(t).rootOptionsStates.isLoading ? (O(), V(J, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(H(x(t).loadingText), 1)
                ]),
                _: 1
              })) : x(t).rootOptionsStates.loadingError ? (O(), V(J, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(H(x(t).rootOptionsStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: x(t).retryTitle,
                    onClick: S[1] || (S[1] = //@ts-ignore
                    (...h) => x(t).loadRootOptions && x(t).loadRootOptions(...h))
                  }, H(x(t).retryText), 9, ts)
                ]),
                _: 1
              })) : f.value ? (O(), V(J, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).noOptionsText), 1)
                ]),
                _: 1
              })) : x(t).localSearch.value.active && x(t).localSearch.value.noResults ? (O(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).noResultsText), 1)
                ]),
                _: 1
              })) : (O(), M("div", ns, [
                (O(!0), M(re, null, ie(x(t).forest.value.normalizedOptions, (h) => (O(), V(zt, {
                  key: h.id,
                  node: h
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
}), rs = { class: "vue-treeselect__menu-placeholder" }, ss = /* @__PURE__ */ X({
  __name: "MenuPortal",
  setup(e) {
    const n = te("treeselect"), t = {
      name: "vue-treeselect--portal-target",
      components: { Menu: on },
      setup() {
        const f = ee();
        let o = null, a = null;
        const i = T(() => [
          "vue-treeselect__portal-target",
          n.wrapperClass
        ]), l = T(() => ({
          zIndex: n.zIndex
        })), v = (h) => {
          const _ = n.getControl();
          if (!_) return;
          const B = _.getBoundingClientRect();
          h.style.width = B.width + "px";
        }, g = (h) => {
          var w;
          const _ = n.getControl();
          if (!_ || !f.value) return;
          const B = (w = f.value.$refs) == null ? void 0 : w["menu-container"];
          if (!B) return;
          const C = _.getBoundingClientRect(), p = h.getBoundingClientRect(), I = n.menu.value.placement === "bottom" ? C.height : 0, y = Math.round(C.left - p.left) + "px", N = Math.round(C.top - p.top + I) + "px", D = B.style, $ = Ye(["transform", "webkitTransform", "MozTransform", "msTransform"], (k) => k in document.body.style);
          D && $ && (D[$] = `translate(${y}, ${N})`);
        }, m = (h) => {
          const _ = n.getControl();
          o || !_ || (o = {
            remove: Qt(_, () => g(h))
          });
        }, E = (h) => {
          const _ = n.getControl();
          a || !_ || (a = {
            remove: Yt(_, () => {
              v(h), g(h);
            })
          });
        }, b = () => {
          o && (o.remove(), o = null);
        }, L = () => {
          a && (a.remove(), a = null);
        };
        return {
          menuRef: f,
          portalTargetClass: i,
          portalTargetStyle: l,
          setupHandlers: (h) => {
            v(h), g(h), m(h), E(h);
          },
          removeHandlers: () => {
            b(), L();
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
    let r = null, s = null;
    const c = () => {
      const f = document.createElement("div");
      document.body.appendChild(f), s = f, r = vn({
        ...t,
        setup() {
          const o = t.setup();
          return W(
            () => n.menu.value.isOpen,
            (a) => {
              a ? ne(() => o.setupHandlers(f)) : o.removeHandlers();
            }
          ), W(
            () => n.menu.value.placement,
            () => {
              o.updateMenuContainerOffset(f);
            }
          ), ge(() => {
            n.menu.value.isOpen && ne(() => o.setupHandlers(f));
          }), ye(() => {
            o.removeHandlers();
          }), o;
        }
      }), r.provide("treeselect", n), r.mount(f);
    }, d = () => {
      var f;
      r && s && ((f = s.parentNode) == null || f.removeChild(s), s.innerHTML = "", r.unmount(), r = null, s = null);
    };
    return ge(() => {
      c();
    }), ye(() => {
      d();
    }), (f, o) => (O(), M("div", rs));
  }
}), vs = /* @__PURE__ */ X({
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
    const r = e, s = t, c = ee(), d = ee(), f = ee(), o = ee(), a = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).substr(2, 9)}`,
      set: () => {
      }
    }), i = () => {
      var B, C, p, I, y;
      const h = r.appendToBody ? o : f, _ = ((C = (B = h.value) == null ? void 0 : B.$refs) == null ? void 0 : C.menu) || ((y = (I = (p = h.value) == null ? void 0 : p.$refs) == null ? void 0 : I["menu-container"]) == null ? void 0 : y.querySelector(".vue-treeselect__menu"));
      return _ && _.nodeName !== "#comment" ? _ : null;
    }, l = () => {
      var h, _;
      return (_ = (h = d.value) == null ? void 0 : h.$refs) == null ? void 0 : _["value-container"];
    }, v = () => {
      var _;
      const h = l();
      return (_ = h == null ? void 0 : h.$refs) == null ? void 0 : _.input;
    }, g = () => {
      var h;
      (h = v()) == null || h.focus();
    }, m = () => {
      var h;
      (h = v()) == null || h.blur();
    }, E = (h) => {
      h ? document.addEventListener("mousedown", b, !1) : document.removeEventListener("mousedown", b, !1);
    }, b = (h) => {
      c.value && !c.value.contains(h.target) && (m(), u.closeMenu());
    }, L = se(function(h) {
      if (h.preventDefault(), h.stopPropagation(), r.disabled) return;
      l().$el.contains(h.target) && !u.menu.isOpen && (r.openOnClick || u.trigger.isFocused) && u.openMenu(), (u.resetFlags ? u.resetFlags() : !1) ? m() : g(), u.resetFlags && u.resetFlags();
    }), u = yr(
      r,
      s,
      a,
      i,
      E
    );
    Je("treeselect", u), Je("instance", {
      getInput: v,
      focusInput: g,
      blurInput: m,
      getValueContainer: l,
      handleMouseDown: L
    });
    const S = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": u.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": u.trigger.isFocused,
      "vue-treeselect--has-value": u.hasValue.value,
      "vue-treeselect--open": u.menu.isOpen,
      "vue-treeselect--open-above": u.menu.placement === "top",
      "vue-treeselect--open-below": u.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
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
    }), (h, _) => (O(), M("div", {
      ref_key: "wrapper",
      ref: c,
      class: Q(S.value)
    }, [
      G(br),
      G(Ur, {
        ref_key: "control",
        ref: d
      }, null, 512),
      h.appendToBody ? (O(), V(ss, {
        key: 0,
        ref_key: "portal",
        ref: o
      }, null, 512)) : (O(), V(on, {
        key: 1,
        ref_key: "menu",
        ref: f
      }, null, 512))
    ], 2));
  }
});
export {
  cs as ALL,
  hs as ALL_WITH_INDETERMINATE,
  us as ASYNC_SEARCH,
  ds as BRANCH_PRIORITY,
  Nr as CHECKED,
  Er as INDETERMINATE,
  fs as LEAF_PRIORITY,
  is as LOAD_CHILDREN_OPTIONS,
  as as LOAD_ROOT_OPTIONS,
  vs as Treeselect,
  Sr as UNCHECKED,
  vs as default,
  gr as useAsyncOptions,
  Xn as useForestState,
  cr as useLocalSearch,
  lr as useMenu,
  tr as useNodeNormalization,
  Kn as useNodeTraversal,
  vr as useRemoteSearch,
  or as useSelection,
  yr as useTreeselect,
  rr as useValue
};
