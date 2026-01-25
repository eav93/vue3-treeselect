import { reactive as ie, computed as T, nextTick as ne, ref as te, watch as W, onMounted as ge, onUnmounted as ye, readonly as un, toRef as cn, defineComponent as G, inject as ee, openBlock as O, createElementBlock as I, Fragment as re, renderList as ae, unref as x, withDirectives as dn, createElementVNode as z, normalizeStyle as Pe, vModelText as fn, toDisplayString as H, createCommentVNode as U, normalizeClass as Q, useSlots as Ue, createBlock as V, resolveDynamicComponent as Ke, createTextVNode as Y, createVNode as X, TransitionGroup as hn, withCtx as j, renderSlot as qe, resolveComponent as vn, Transition as We, createApp as pn, h as Je, provide as Ze } from "vue";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ue(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var be, et;
function mn() {
  if (et) return be;
  et = 1;
  function e() {
  }
  return be = e, be;
}
var _n = mn();
const gn = /* @__PURE__ */ ue(_n), pe = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  gn
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
function yn(e, n) {
  const t = e.getBoundingClientRect(), r = n.getBoundingClientRect(), o = n.offsetHeight / 3;
  r.bottom + o > t.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + o,
    e.scrollHeight
  ) : r.top - o < t.top && (e.scrollTop = Math.max(n.offsetTop - o, 0));
}
var Se, tt;
function qt() {
  if (tt) return Se;
  tt = 1;
  function e(n) {
    var t = typeof n;
    return n != null && (t == "object" || t == "function");
  }
  return Se = e, Se;
}
var Ee, nt;
function On() {
  if (nt) return Ee;
  nt = 1;
  var e = typeof ve == "object" && ve && ve.Object === Object && ve;
  return Ee = e, Ee;
}
var Ne, rt;
function Wt() {
  if (rt) return Ne;
  rt = 1;
  var e = On(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return Ne = t, Ne;
}
var we, ot;
function bn() {
  if (ot) return we;
  ot = 1;
  var e = Wt(), n = function() {
    return e.Date.now();
  };
  return we = n, we;
}
var Te, st;
function Sn() {
  if (st) return Te;
  st = 1;
  var e = /\s/;
  function n(t) {
    for (var r = t.length; r-- && e.test(t.charAt(r)); )
      ;
    return r;
  }
  return Te = n, Te;
}
var Le, lt;
function En() {
  if (lt) return Le;
  lt = 1;
  var e = Sn(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return Le = t, Le;
}
var Re, at;
function jt() {
  if (at) return Re;
  at = 1;
  var e = Wt(), n = e.Symbol;
  return Re = n, Re;
}
var Ce, it;
function Nn() {
  if (it) return Ce;
  it = 1;
  var e = jt(), n = Object.prototype, t = n.hasOwnProperty, r = n.toString, o = e ? e.toStringTag : void 0;
  function u(f) {
    var d = t.call(f, o), s = f[o];
    try {
      f[o] = void 0;
      var c = !0;
    } catch {
    }
    var l = r.call(f);
    return c && (d ? f[o] = s : delete f[o]), l;
  }
  return Ce = u, Ce;
}
var xe, ut;
function wn() {
  if (ut) return xe;
  ut = 1;
  var e = Object.prototype, n = e.toString;
  function t(r) {
    return n.call(r);
  }
  return xe = t, xe;
}
var De, ct;
function Tn() {
  if (ct) return De;
  ct = 1;
  var e = jt(), n = Nn(), t = wn(), r = "[object Null]", o = "[object Undefined]", u = e ? e.toStringTag : void 0;
  function f(d) {
    return d == null ? d === void 0 ? o : r : u && u in Object(d) ? n(d) : t(d);
  }
  return De = f, De;
}
var Ae, dt;
function Ln() {
  if (dt) return Ae;
  dt = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return Ae = e, Ae;
}
var Me, ft;
function Rn() {
  if (ft) return Me;
  ft = 1;
  var e = Tn(), n = Ln(), t = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || n(o) && e(o) == t;
  }
  return Me = r, Me;
}
var Ie, ht;
function Ut() {
  if (ht) return Ie;
  ht = 1;
  var e = En(), n = qt(), t = Rn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, f = /^0o[0-7]+$/i, d = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (t(c))
      return r;
    if (n(c)) {
      var l = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = n(l) ? l + "" : l;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var a = u.test(c);
    return a || f.test(c) ? d(c.slice(2), a ? 2 : 8) : o.test(c) ? r : +c;
  }
  return Ie = s, Ie;
}
var ke, vt;
function Cn() {
  if (vt) return ke;
  vt = 1;
  var e = qt(), n = bn(), t = Ut(), r = "Expected a function", o = Math.max, u = Math.min;
  function f(d, s, c) {
    var l, a, v, y, p, E, S = 0, w = !1, i = !1, _ = !0;
    if (typeof d != "function")
      throw new TypeError(r);
    s = t(s) || 0, e(c) && (w = !!c.leading, i = "maxWait" in c, v = i ? o(t(c.maxWait) || 0, s) : v, _ = "trailing" in c ? !!c.trailing : _);
    function h(A) {
      var F = l, R = a;
      return l = a = void 0, S = A, y = d.apply(R, F), y;
    }
    function g(A) {
      return S = A, p = setTimeout(m, s), w ? h(A) : y;
    }
    function B(A) {
      var F = A - E, R = A - S, k = s - F;
      return i ? u(k, v - R) : k;
    }
    function C(A) {
      var F = A - E, R = A - S;
      return E === void 0 || F >= s || F < 0 || i && R >= v;
    }
    function m() {
      var A = n();
      if (C(A))
        return M(A);
      p = setTimeout(m, B(A));
    }
    function M(A) {
      return p = void 0, _ && l ? h(A) : (l = a = void 0, y);
    }
    function b() {
      p !== void 0 && clearTimeout(p), S = 0, l = E = a = p = void 0;
    }
    function N() {
      return p === void 0 ? y : M(n());
    }
    function D() {
      var A = n(), F = C(A);
      if (l = arguments, a = this, E = A, F) {
        if (p === void 0)
          return g(E);
        if (i)
          return clearTimeout(p), p = setTimeout(m, s), h(E);
      }
      return p === void 0 && (p = setTimeout(m, s)), y;
    }
    return D.cancel = b, D.flush = N, D;
  }
  return ke = f, ke;
}
var xn = Cn();
const Dn = /* @__PURE__ */ ue(xn);
var An = function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), u = r.appendChild(document.createElement("_")), f = void 0, d = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", u.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", u.style.width = u.style.height = "200%", e.appendChild(t), s(), l;
  function s() {
    c();
    var a = e.offsetWidth, v = e.offsetHeight;
    (a !== f || v !== d) && (f = a, d = v, o.style.width = a * 2 + "px", o.style.height = v * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: a, height: v })), r.addEventListener("scroll", s), t.addEventListener("scroll", s);
  }
  function c() {
    r.removeEventListener("scroll", s), t.removeEventListener("scroll", s);
  }
  function l() {
    c(), e.removeChild(t);
  }
};
function Kt(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let me;
const _e = [], Mn = 100;
function In() {
  me = setInterval(() => {
    _e.forEach(Yt);
  }, Mn);
}
function kn() {
  me && (clearInterval(me), me = null);
}
function Yt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, u = n.offsetWidth, f = n.offsetHeight;
  (r !== u || o !== f) && (e.lastWidth = u, e.lastHeight = f, t({ width: u, height: f }));
}
function Bn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    Kt(_e, t), _e.length || kn();
  };
  return _e.push(t), Yt(t), In(), r;
}
function Qt(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const f = (t ? Bn : An)(e, (...d) => {
    r || n(...d);
  });
  return r = !1, f;
}
function Fn(e) {
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
function Gt(e, n) {
  const t = Fn(e);
  return window.addEventListener("resize", n, { passive: !0 }), t.forEach((r) => {
    r.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), t.forEach((o) => {
      o.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function Vn(e) {
  return e !== e;
}
function Xt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Be, pt;
function Hn() {
  if (pt) return Be;
  pt = 1;
  var e = Ut(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var u = o < 0 ? -1 : 1;
      return u * t;
    }
    return o === o ? o : 0;
  }
  return Be = r, Be;
}
var Fe, mt;
function zn() {
  if (mt) return Fe;
  mt = 1;
  var e = Hn();
  function n(t) {
    var r = e(t), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return Fe = n, Fe;
}
var $e, _t;
function Pn() {
  if (_t) return $e;
  _t = 1;
  var e = zn(), n = "Expected a function";
  function t(r, o) {
    var u;
    if (typeof o != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (u = o.apply(this, arguments)), r <= 1 && (o = void 0), u;
    };
  }
  return $e = t, $e;
}
var Ve, gt;
function qn() {
  if (gt) return Ve;
  gt = 1;
  var e = Pn();
  function n(t) {
    return e(2, t);
  }
  return Ve = n, Ve;
}
var Wn = qn();
const jn = /* @__PURE__ */ ue(Wn), Z = () => /* @__PURE__ */ Object.create(null);
var He, yt;
function Un() {
  if (yt) return He;
  yt = 1;
  function e(n) {
    var t = n == null ? 0 : n.length;
    return t ? n[t - 1] : void 0;
  }
  return He = e, He;
}
var Kn = Un();
const Jt = /* @__PURE__ */ ue(Kn);
function Zt(e, n) {
  return e.indexOf(n) !== -1;
}
function Ye(e, n, t) {
  for (let r = 0, o = e.length; r < o; r++)
    if (n.call(t, e[r], r, e)) return e[r];
}
function je(e, n) {
  if (e.length !== n.length) return !0;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t]) return !0;
  return !1;
}
function Yn() {
  const e = (o, u) => {
    if (!o.isBranch) return;
    const f = o.children.slice();
    for (; f.length; ) {
      const d = f[0];
      d.isBranch && f.push(...d.children), u(d), f.shift();
    }
  }, n = (o, u) => {
    o.isBranch && o.children.forEach((f) => {
      n(f, u), u(f);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (o, u) => {
      o.forEach((f) => {
        n(f, u), u(f);
      });
    },
    traverseAllNodesByIndex: (o, u) => {
      const f = (d) => {
        d.children && d.children.forEach((s) => {
          u(s) !== !1 && s.isBranch && s.children && f(s);
        });
      };
      f({ children: o });
    }
  };
}
const Qn = 0, Gn = 1, Xn = 2;
function Jn(e) {
  const n = ie({
    normalizedOptions: [],
    nodeMap: Z(),
    checkedStateMap: Z(),
    selectedNodeIds: e(),
    selectedNodeMap: Z()
  });
  return {
    forest: n,
    buildForestState: (o, u, f, d) => {
      const s = Z();
      n.selectedNodeIds.forEach((l) => {
        s[l] = !0;
      }), n.selectedNodeMap = s;
      const c = Z();
      o.multiple && (f((l) => {
        c[l.id] = Qn;
      }), u.forEach((l) => {
        c[l.id] = Xn, !o.flat && !o.disableBranchNodes && l.ancestors.forEach((a) => {
          d(a) || (c[a.id] = Gn);
        });
      })), n.checkedStateMap = c;
    },
    isSelected: (o) => !!o && n.selectedNodeMap[o.id] === !0
  };
}
const Zn = null, Ot = "ALL_CHILDREN", bt = "ALL_DESCENDANTS", St = "LEAF_CHILDREN", Et = "LEAF_DESCENDANTS";
function er() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function tr(e) {
  return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function nr(e, n, t, r) {
  const o = (s) => ({
    ...s,
    ...e.normalizer ? e.normalizer(s, t.value) : {}
  }), u = (s) => {
    pe(
      () => !(s.id in n.nodeMap && !n.nodeMap[s.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(s.id)}. Their labels are "${n.nodeMap[s.id].label}" and "${s.label}" respectively.`
    );
  }, f = (s) => {
    pe(
      () => !(s.children === void 0 && s.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, d = (s, c, l) => {
    let a = c.map((v) => [o(v), v]).map(([v, y], p) => {
      u(v), f(v);
      const { id: E, label: S, children: w, isDefaultExpanded: i } = v, _ = s === Zn, h = _ ? 0 : s.level + 1, g = Array.isArray(w) || w === null, B = !g, C = !!v.isDisabled || !e.flat && !_ && s.isDisabled, m = !!v.isNew, M = (e.matchKeys || ["label"]).reduce((D, A) => ({
        ...D,
        [A]: tr(v[A]).toLocaleLowerCase()
      }), {}), b = _ ? M.label : s.nestedSearchLabel + " " + M.label;
      n.nodeMap[E] = Z();
      const N = n.nodeMap[E];
      if (Object.assign(N, {
        id: E,
        label: S,
        level: h,
        ancestors: _ ? [] : [s].concat(s.ancestors),
        index: (_ ? [] : s.index).concat(p),
        parentNode: s,
        lowerCased: M,
        nestedSearchLabel: b,
        isDisabled: C,
        isNew: m,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: g,
        isLeaf: B,
        isRootNode: _,
        raw: y
      }), g) {
        const D = Array.isArray(w);
        Object.assign(N, {
          childrenStates: { ...er(), isLoaded: D },
          isExpanded: typeof i == "boolean" ? i : h < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [Ot]: 0,
            [bt]: 0,
            [St]: 0,
            [Et]: 0
          },
          children: D ? d(N, w, l) : []
        }), i === !0 && N.ancestors.forEach((A) => {
          A.isExpanded = !0;
        }), !D && typeof e.loadOptions != "function" ? pe(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !D && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((D) => D.count[bt]++), B && N.ancestors.forEach((D) => D.count[Et]++), _ || (s.count[Ot] += 1, B && (s.count[St] += 1), C && (s.hasDisabledDescendants = !0)), l && l[E]) {
        const D = l[E];
        N.isMatched = D.isMatched, N.showAllChildrenOnSearch = D.showAllChildrenOnSearch, N.isHighlighted = D.isHighlighted, D.isBranch && N.isBranch && (N.isExpanded = D.isExpanded, N.isExpandedOnSearch = D.isExpandedOnSearch, D.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = { ...D.childrenStates });
      }
      return N;
    });
    if (e.branchNodesFirst) {
      const v = a.filter((p) => p.isBranch), y = a.filter((p) => p.isLeaf);
      a = v.concat(y);
    }
    return a;
  };
  return {
    normalize: d,
    enhancedNormalizer: o,
    checkDuplication: u,
    verifyNodeShape: f
  };
}
const Nt = "ALL", wt = "BRANCH_PRIORITY", Tt = "LEAF_PRIORITY", Lt = "ALL_WITH_INDETERMINATE";
function en(e, n) {
  let t = 0;
  do {
    if (e.level < t) return -1;
    if (n.level < t) return 1;
    if (e.index[t] !== n.index[t]) return e.index[t] - n.index[t];
    t++;
  } while (!0);
}
function rr(e, n) {
  return e.level === n.level ? en(e, n) : e.level - n.level;
}
function or(e, n, t, r, o, u) {
  const f = T(() => n.selectedNodeIds.map((p) => t(p))), d = T(() => !e.multiple), s = T(() => {
    let p;
    if (d.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Nt)
      p = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === wt)
      p = n.selectedNodeIds.filter((E) => {
        const S = t(E);
        return S ? S.isRootNode ? !0 : !r(S.parentNode) : !1;
      });
    else if (e.valueConsistsOf === Tt)
      p = n.selectedNodeIds.filter((E) => {
        const S = t(E);
        return S ? S.isLeaf ? !0 : S.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Lt) {
      const E = [];
      p = n.selectedNodeIds.slice(), f.value.forEach((S) => {
        S.ancestors.forEach((w) => {
          E.includes(w.id) || p.includes(w.id) || E.push(w.id);
        });
      }), p.push(...E);
    } else
      p = [];
    return e.sortValueBy === "LEVEL" ? p.sort((E, S) => rr(t(E), t(S))) : e.sortValueBy === "INDEX" && p.sort((E, S) => en(t(E), t(S))), p;
  }), c = T(() => s.value.length > 0);
  return {
    selectedNodes: f,
    single: d,
    internalValue: s,
    hasValue: c,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? s.value.slice() : s.value[0];
      const p = s.value.map((E) => t(E).raw);
      return e.multiple ? p : p[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((p) => u(p)).map((p) => p.id),
    extractNodeFromValue: (p) => {
      const E = { id: p };
      if (e.valueFormat === "id")
        return E;
      const S = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return Ye(
        S,
        (i) => i && u(i).id === p
      ) || E;
    },
    fixSelectedNodeIds: (p, E) => {
      let S = [];
      if (d.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Nt)
        S = p;
      else if (e.valueConsistsOf === wt)
        p.forEach((i) => {
          S.push(i);
          const _ = t(i);
          _ != null && _.isBranch && o(_, (h) => {
            S.push(h.id);
          });
        });
      else if (e.valueConsistsOf === Tt) {
        const i = Z(), _ = p.slice();
        for (; _.length; ) {
          const h = _.shift(), g = t(h);
          g && (S.push(h), !g.isRootNode && (g.parentNode.id in i || (i[g.parentNode.id] = g.parentNode.children.length), --i[g.parentNode.id] === 0 && _.push(g.parentNode.id)));
        }
      } else if (e.valueConsistsOf === Lt) {
        const i = Z(), _ = p.filter((h) => {
          const g = t(h);
          return g && (g.isLeaf || g.children.length === 0);
        });
        for (; _.length; ) {
          const h = _.shift(), g = t(h);
          g && (S.push(h), !g.isRootNode && (g.parentNode.id in i || (i[g.parentNode.id] = g.parentNode.children.length), --i[g.parentNode.id] === 0 && _.push(g.parentNode.id)));
        }
      }
      je(n.selectedNodeIds, S) && (n.selectedNodeIds = S), E();
    }
  };
}
const Rt = null, sr = 0;
function lr(e, n, t, r, o, u, f, d, s, c, l, a, v, y, p) {
  let E = !1;
  const S = () => {
    E = !1;
  }, w = (m) => {
    t.selectedNodeIds.push(m.id), t.selectedNodeMap[m.id] = !0;
  }, i = (m) => {
    Kt(t.selectedNodeIds, m.id), delete t.selectedNodeMap[m.id];
  }, _ = () => {
    l() && (v() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((m) => {
      const M = r(m);
      return M ? M.isDisabled : !1;
    }), d());
  }, h = (m) => {
    if (v() || e.disableBranchNodes)
      return w(m);
    if (e.flat) {
      w(m), e.autoSelectAncestors ? m.ancestors.forEach((b) => {
        !o(b) && !b.isDisabled && w(b);
      }) : e.autoSelectDescendants && u(m, (b) => {
        !o(b) && !b.isDisabled && w(b);
      });
      return;
    }
    const M = m.isLeaf || !m.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (M && w(m), m.isBranch && u(m, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && w(b);
    }), M) {
      let b = m;
      for (; (b = b.parentNode) !== Rt && (b && b.children.every(o)); )
        w(b);
    }
  }, g = (m) => {
    if (e.disableBranchNodes)
      return i(m);
    if (e.flat) {
      i(m), e.autoDeselectAncestors ? m.ancestors.forEach((b) => {
        o(b) && !b.isDisabled && i(b);
      }) : e.autoDeselectDescendants && u(m, (b) => {
        o(b) && !b.isDisabled && i(b);
      });
      return;
    }
    let M = !1;
    if (m.isBranch && f(m, (b) => {
      (!b.isDisabled || e.allowSelectingDisabledDescendants) && (i(b), M = !0);
    }), m.isLeaf || M || m.isBranch && m.children.length === 0) {
      i(m);
      let b = m;
      for (; (b = b.parentNode) !== Rt && (b && o(b)); )
        i(b);
    }
  }, B = (m) => {
    if (e.disabled || m.isDisabled)
      return;
    v() && _();
    const M = e.multiple && !e.flat ? t.checkedStateMap[m.id] === sr : !o(m);
    M ? h(m) : g(m), d(), ne(() => {
      n(M ? "select" : "deselect", m.raw, y);
    }), p.active && M && (v() || e.clearOnSelect) && s(), v() && e.closeOnSelect && (c(), e.searchable && (E = !0));
  };
  return {
    select: B,
    clear: _,
    addValue: w,
    removeValue: i,
    removeLastValue: () => {
      if (!l()) return;
      if (v()) return _();
      const m = Jt(a());
      if (!m) return;
      const M = r(m);
      M && B(M);
    },
    resetFlags: S,
    getBlurOnSelectFlag: () => E,
    setBlurOnSelectFlag: (m) => {
      E = m;
    }
  };
}
function ar(e, n, t, r, o, u, f, d, s, c, l, a, v) {
  const y = ie({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), p = (R) => r.active ? R.isExpandedOnSearch || !1 : R.isExpanded || !1, E = (R) => !!(R.isMatched || R.isBranch && R.hasMatchedDescendants && !e.flattenSearchResults || !R.isRootNode && R.parentNode.showAllChildrenOnSearch), S = (R) => !(r.active && !E(R)), w = T(() => {
    const R = [];
    return u((k) => {
      if ((!r.active || E(k)) && R.push(k.id), k.isBranch && !p(k))
        return !1;
    }), R;
  }), i = T(() => w.value.length !== 0), _ = (R, k = !0) => {
    const K = y.current;
    if (K != null && K in t.nodeMap && (t.nodeMap[K].isHighlighted = !1), !R) {
      y.current = null;
      return;
    }
    if (y.current = R.id, R.isHighlighted = !0, y.isOpen && k) {
      const ce = () => {
        const se = a();
        if (!se) return;
        const le = se.querySelector(`.vue-treeselect__option[data-id="${R.id}"]`);
        le && yn(se, le);
      };
      a() ? ce() : ne(ce);
    }
  }, h = () => {
    if (!i.value) return;
    const R = w.value[0], k = o(R);
    k && _(k);
  }, g = () => {
    if (!i.value) return;
    const k = w.value.indexOf(y.current) - 1;
    if (k === -1) return C();
    const K = o(w.value[k]);
    K && _(K);
  }, B = () => {
    if (!i.value) return;
    const k = w.value.indexOf(y.current) + 1;
    if (k === w.value.length) return h();
    const K = o(w.value[k]);
    K && _(K);
  }, C = () => {
    if (!i.value) return;
    const R = Jt(w.value);
    if (!R) return;
    const k = o(R);
    k && _(k);
  }, m = (R = !1) => {
    const { current: k } = y;
    (R || k == null || !(k in t.nodeMap) || !S(o(k))) && h();
  }, M = () => {
    const R = a();
    R && (y.lastScrollPosition = R.scrollTop);
  }, b = () => {
    const R = a();
    R && (R.scrollTop = y.lastScrollPosition);
  }, N = () => {
    !y.isOpen || !e.disabled && e.alwaysOpen || (M(), y.isOpen = !1, v(!1), s(), n("close", f(), d));
  }, D = () => {
    e.disabled || y.isOpen || (y.isOpen = !0, ne(m), ne(b), !e.options && !e.async && c(), v(!0), n("open", d));
  };
  return {
    menu: y,
    visibleOptionIds: w,
    hasVisibleOptions: i,
    shouldExpand: p,
    shouldShowOptionInMenu: S,
    openMenu: D,
    closeMenu: N,
    toggleMenu: () => {
      y.isOpen ? N() : D();
    },
    toggleExpanded: (R) => {
      let k;
      r.active ? (k = R.isExpandedOnSearch = !R.isExpandedOnSearch, k && (R.showAllChildrenOnSearch = !0)) : k = R.isExpanded = !R.isExpanded, k && !R.childrenStates.isLoaded && l(R);
    },
    setCurrentHighlightedOption: _,
    resetHighlightedOptionWhenNecessary: m,
    highlightFirstOption: h,
    highlightPrevOption: g,
    highlightNextOption: B,
    highlightLastOption: C,
    saveMenuScrollPosition: M,
    restoreMenuScrollPosition: b
  };
}
var ze, Ct;
function ir() {
  if (Ct) return ze;
  Ct = 1;
  function e(n, t) {
    var r = t.length, o = n.length;
    if (o > r)
      return !1;
    if (o === r)
      return n === t;
    e: for (var u = 0, f = 0; u < o; u++) {
      for (var d = n.charCodeAt(u); f < r; )
        if (t.charCodeAt(f++) === d)
          continue e;
      return !1;
    }
    return !0;
  }
  return ze = e, ze;
}
var ur = ir();
const cr = /* @__PURE__ */ ue(ur), xt = null, Dt = "ALL_CHILDREN", At = "ALL_DESCENDANTS", Mt = "LEAF_CHILDREN", It = "LEAF_DESCENDANTS";
function kt(e, n, t) {
  return e ? cr(n, t) : Zt(t, n);
}
function dr(e, n, t, r) {
  const o = ie({
    active: !1,
    noResults: !0,
    countMap: Z()
  });
  return {
    localSearch: o,
    handleLocalSearch: () => {
      const { searchQuery: f } = n, d = () => r(!0);
      if (!f)
        return o.active = !1, d();
      o.active = !0, o.noResults = !0, t((l) => {
        l.isBranch && (l.isExpandedOnSearch = !1, l.showAllChildrenOnSearch = !1, l.isMatched = !1, l.hasMatchedDescendants = !1, o.countMap[l.id] = {
          [Dt]: 0,
          [At]: 0,
          [Mt]: 0,
          [It]: 0
        });
      });
      const s = f.trim().toLocaleLowerCase(), c = s.replace(/\s+/g, " ").split(" ");
      t((l) => {
        e.searchNested && c.length > 1 ? l.isMatched = c.every(
          (a) => kt(!1, a, l.nestedSearchLabel)
        ) : l.isMatched = (e.matchKeys || ["label"]).some(
          (a) => kt(!e.disableFuzzyMatching, s, l.lowerCased[a])
        ), l.isMatched && (o.noResults = !1, l.ancestors.forEach((a) => {
          o.countMap[a.id][At]++;
        }), l.isLeaf && l.ancestors.forEach((a) => {
          o.countMap[a.id][It]++;
        }), l.parentNode !== xt && (o.countMap[l.parentNode.id][Dt] += 1, l.isLeaf && (o.countMap[l.parentNode.id][Mt] += 1))), (l.isMatched || l.isBranch && l.isExpandedOnSearch) && l.parentNode !== xt && (l.parentNode.isExpandedOnSearch = !0, l.parentNode.hasMatchedDescendants = !0);
      }), d();
    }
  };
}
const fr = "ASYNC_SEARCH";
function hr(e) {
  return e.message || String(e);
}
function vr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function pr(e, n, t, r, o) {
  const u = te(Z()), f = te(0), d = () => {
    const { searchQuery: c } = n, l = u.value[c] || {
      ...vr(),
      options: []
    };
    if (W(
      () => l.options,
      () => {
        n.searchQuery === c && r();
      },
      { deep: !0 }
    ), c === "") {
      if (Array.isArray(e.defaultOptions))
        return l.options = e.defaultOptions, l.isLoaded = !0, l;
      if (e.defaultOptions !== !0)
        return l.isLoaded = !0, l;
    }
    return u.value[c] || (u.value[c] = l), l;
  };
  return {
    remoteSearch: u,
    key: f,
    getRemoteSearchEntry: d,
    handleRemoteSearch: () => {
      const { searchQuery: c } = n, l = d(), a = () => {
        r(), o(!0);
      };
      if ((c === "" || e.cacheOptions) && l.isLoaded)
        return a();
      t({
        action: fr,
        args: { searchQuery: c },
        isPending: () => l.isLoading,
        start: () => {
          l.isLoading = !0, l.isLoaded = !1, l.loadingError = "";
        },
        succeed: (v) => {
          l.isLoaded = !0, l.options = v, n.searchQuery === c && a();
        },
        fail: (v) => {
          l.loadingError = hr(v);
        },
        end: () => {
          f.value += 1, l.isLoading = !1;
        }
      });
    }
  };
}
const mr = "LOAD_ROOT_OPTIONS", _r = "LOAD_CHILDREN_OPTIONS";
function Bt(e) {
  return e.message || String(e);
}
function gr() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function yr(e, n, t, r) {
  const o = ie(gr()), u = (s) => {
    const { action: c, args: l, isPending: a, start: v, succeed: y, fail: p, end: E } = s;
    if (!e.loadOptions || a())
      return;
    v();
    const S = jn((i, _) => {
      i ? p(i) : y(_), E();
    }), w = e.loadOptions({
      id: t,
      instanceId: t,
      action: c,
      ...l,
      callback: S
    });
    Xt(w) && w.then(() => {
      S();
    }).catch((i) => {
      S(i);
    }).catch((i) => {
      console.error(i);
    });
  };
  return {
    rootOptionsStates: o,
    callLoadOptionsProp: u,
    loadRootOptions: () => {
      u({
        action: mr,
        isPending: () => o.isLoading,
        start: () => {
          o.isLoading = !0, o.loadingError = "";
        },
        succeed: () => {
          o.isLoaded = !0, ne(() => {
            r(!0);
          });
        },
        fail: (s) => {
          o.loadingError = Bt(s);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (s) => {
      const { id: c, raw: l } = s;
      u({
        action: _r,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: l
        },
        isPending: () => {
          const a = n(c);
          return a ? a.childrenStates.isLoading : !1;
        },
        start: () => {
          const a = n(c);
          a && (a.childrenStates.isLoading = !0, a.childrenStates.loadingError = "");
        },
        succeed: () => {
          const a = n(c);
          a && (a.childrenStates.isLoaded = !0);
        },
        fail: (a) => {
          const v = n(c);
          v && (v.childrenStates.loadingError = Bt(a));
        },
        end: () => {
          const a = n(c);
          a && (a.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
const Ft = null;
function Or(e, n, t, r, o) {
  const u = ie({
    isFocused: !1,
    searchQuery: ""
  }), f = () => {
    u.searchQuery = "";
  }, d = (L) => ({
    ...L,
    ...e.normalizer ? e.normalizer(L, t.value) : {}
  }), s = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((L) => d(L)).map((L) => L.id), c = Yn(), l = Jn(s), { forest: a, isSelected: v } = l, y = (L) => (pe(
    () => L != null,
    () => `Invalid node id: ${L}`
  ), L == null ? null : L in a.nodeMap ? a.nodeMap[L] : p(L)), p = (L) => {
    const P = E(L), he = d(P).label || `${L} (unknown)`, Oe = {
      id: L,
      label: he,
      ancestors: [],
      parentNode: Ft,
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
    return a.nodeMap[L] = Oe, Oe;
  }, E = (L) => {
    const P = { id: L };
    if (e.valueFormat === "id")
      return P;
    const he = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return Ye(
      he,
      (Xe) => Xe && d(Xe).id === L
    ) || P;
  };
  let S, w, i, _, h, g;
  const B = yr(
    e,
    y,
    t.value,
    (L) => w(L)
  );
  i = B.loadRootOptions, S = B.loadChildrenOptions, _ = B.callLoadOptionsProp;
  const { rootOptionsStates: C } = B, m = nr(
    e,
    a,
    t,
    S
  ), { normalize: M, enhancedNormalizer: b } = m, N = or(
    e,
    a,
    y,
    v,
    c.traverseDescendantsBFS,
    b
  ), { selectedNodes: D, single: A, internalValue: F, hasValue: R, getValue: k, fixSelectedNodeIds: K } = N;
  g = () => {
    const L = (P) => {
      c.traverseAllNodesByIndex(a.normalizedOptions, P);
    };
    l.buildForestState(
      e,
      D.value,
      L,
      v
    );
  };
  const ce = (L) => {
    a.selectedNodeIds.forEach((P) => {
      L[P] && (a.nodeMap[P] = {
        ...L[P],
        isFallbackNode: !0
      });
    });
  }, Qe = () => (e.async, null);
  h = () => {
    const L = e.async ? Qe() || [] : e.options || [];
    if (Array.isArray(L)) {
      const P = a.nodeMap;
      a.nodeMap = Z(), ce(P), a.normalizedOptions = M(Ft, L, P), K(F.value, g);
    } else
      a.normalizedOptions = [];
  };
  const se = pr(
    e,
    u,
    _,
    h,
    (L) => w(L)
  ), { handleRemoteSearch: le } = se, de = dr(
    e,
    u,
    (L) => {
      c.traverseAllNodesDFS(a.normalizedOptions, L);
    },
    (L) => w(L)
  ), { handleLocalSearch: Ge } = de, an = (L) => {
    c.traverseAllNodesByIndex(a.normalizedOptions, L);
  }, $ = ar(
    e,
    n,
    a,
    de.localSearch,
    y,
    an,
    k,
    t.value,
    f,
    i,
    S,
    r,
    o
  );
  w = $.resetHighlightedOptionWhenNecessary;
  const fe = lr(
    e,
    n,
    a,
    y,
    v,
    c.traverseDescendantsBFS,
    c.traverseDescendantsDFS,
    g,
    f,
    $.closeMenu,
    () => R.value,
    () => F.value,
    () => A.value,
    t.value,
    de.localSearch
  );
  return W(() => e.alwaysOpen, (L) => {
    L ? $.openMenu() : $.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    h();
  }), W(() => e.disabled, (L) => {
    L && $.menu.isOpen ? $.closeMenu() : !L && !$.menu.isOpen && e.alwaysOpen && $.openMenu();
  }), W(() => e.flat, () => {
    h();
  }), W(F, (L, P) => {
    je(L, P) && n("update:modelValue", k(), t.value);
  }), W(() => e.matchKeys, () => {
    h();
  }), W(() => e.multiple, (L) => {
    L && g();
  }), W(() => e.options, () => {
    e.async || (h(), C.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => u.searchQuery, () => {
    e.async ? le() : Ge(), n("search-change", u.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const L = s();
    je(L, F.value) && K(L, g);
  }), ge(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && i(), e.alwaysOpen && $.openMenu(), e.async && e.defaultOptions && le();
  }), ye(() => {
    o(!1);
  }), {
    // State
    forest: un(cn(() => a)),
    trigger: u,
    menu: $.menu,
    localSearch: de.localSearch,
    remoteSearch: se.remoteSearch,
    rootOptionsStates: C,
    // Computed
    selectedNodes: D,
    single: A,
    internalValue: F,
    hasValue: R,
    visibleOptionIds: $.visibleOptionIds,
    hasVisibleOptions: $.hasVisibleOptions,
    // Node methods
    getNode: y,
    isSelected: v,
    // Traversal
    traverseDescendantsBFS: c.traverseDescendantsBFS,
    traverseDescendantsDFS: c.traverseDescendantsDFS,
    traverseAllNodesDFS: c.traverseAllNodesDFS,
    traverseAllNodesByIndex: c.traverseAllNodesByIndex,
    // Value
    getValue: k,
    extractCheckedNodeIdsFromValue: s,
    extractNodeFromValue: E,
    fixSelectedNodeIds: K,
    // Selection
    select: fe.select,
    clear: fe.clear,
    removeLastValue: fe.removeLastValue,
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
    handleLocalSearch: Ge,
    handleRemoteSearch: le,
    resetSearchQuery: f,
    // Async
    loadRootOptions: i,
    loadChildrenOptions: S,
    // Helpers
    initialize: h,
    buildForestState: g,
    resetFlags: fe.resetFlags
  };
}
const br = ["name", "value"], Sr = /* @__PURE__ */ G({
  __name: "HiddenFields",
  setup(e) {
    const n = ee("treeselect");
    function t(o) {
      return typeof o == "string" ? o : o != null && !Vn(o) ? JSON.stringify(o) : "";
    }
    const r = T(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let o = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (o = [o.join(n.delimiter)]), o;
    });
    return (o, u) => (O(!0), I(re, null, ae(r.value, (f, d) => (O(), I("input", {
      key: `hidden-field-${d}`,
      type: "hidden",
      name: x(n).name,
      value: f
    }, null, 8, br))), 128));
  }
}), Er = 0, Nr = 1, wr = 2, io = "LOAD_ROOT_OPTIONS", uo = "LOAD_CHILDREN_OPTIONS", co = "ASYNC_SEARCH", fo = "ALL", ho = "BRANCH_PRIORITY", vo = "LEAF_PRIORITY", po = "ALL_WITH_INDETERMINATE", q = {
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
}, Tr = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), $t = 5, Vt = 40, Lr = {
  key: 0,
  class: "vue-treeselect__input-container"
}, Rr = ["tabindex", "required"], Cr = ["tabindex"], tn = /* @__PURE__ */ G({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = ee("treeselect"), r = te(), o = te(), u = te($t), f = te(""), d = T(() => t.searchable), s = T(() => t.disabled), c = T(() => t.multiple), l = T(() => t.tabIndex), a = T(() => t.required), v = T(() => t.hasValue.value), y = T(() => d.value && !s.value && c.value), p = T(() => ({
      width: y.value ? `${u.value}px` : void 0
    })), E = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], S = () => {
      o.value && (u.value = Math.max(
        $t,
        o.value.scrollWidth + 15
      ));
    }, w = () => {
      t.trigger.searchQuery = f.value;
    }, i = () => {
      f.value = "", w();
    }, _ = () => {
      !s.value && r.value && r.value.focus();
    }, h = () => {
      r.value && r.value.blur();
    }, g = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, B = () => {
      var D;
      const N = (D = t.getMenu) == null ? void 0 : D.call(t);
      if (N && document.activeElement === N)
        return _();
      t.trigger.isFocused = !1, t.closeMenu();
    }, C = Dn(
      w,
      Tr,
      { leading: !0, trailing: !0 }
    ), m = () => {
      f.value ? C() : (C.cancel(), w());
    }, M = (N) => {
      const D = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Zt(E, D))
          return N.preventDefault(), t.openMenu();
        switch (D) {
          case q.BACKSPACE: {
            t.backspaceRemoves && !f.value.length && t.removeLastValue();
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
            f.value.length ? i() : t.menu.value.isOpen && t.closeMenu();
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
            const F = t.getNode(A);
            F && (F.isBranch && t.shouldExpand(F) ? (N.preventDefault(), t.toggleExpanded(F)) : !F.isRootNode && (F.isLeaf || F.isBranch && !t.shouldExpand(F)) && (N.preventDefault(), t.setCurrentHighlightedOption(F.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const A = t.menu.value.current;
            if (A === null) break;
            const F = t.getNode(A);
            F && F.isBranch && !t.shouldExpand(F) && (N.preventDefault(), t.toggleExpanded(F));
            break;
          }
          case q.ARROW_DOWN: {
            N.preventDefault(), t.highlightNextOption();
            break;
          }
          case q.DELETE: {
            t.deleteRemoves && !f.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, b = (N) => {
      f.value.length && N.stopPropagation();
    };
    return W(() => t.trigger.searchQuery, (N) => {
      f.value = N;
    }), W(f, () => {
      y.value && ne(S);
    }), n({
      clear: i,
      focus: _,
      blur: h
    }), (N, D) => d.value && !s.value ? (O(), I("div", Lr, [
      dn(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: l.value,
        required: a.value && !v.value,
        "onUpdate:modelValue": D[0] || (D[0] = (A) => f.value = A),
        style: Pe(p.value),
        onFocus: g,
        onInput: m,
        onBlur: B,
        onKeydown: M,
        onMousedown: b
      }, null, 44, Rr), [
        [fn, f.value]
      ]),
      y.value ? (O(), I("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, H(f.value), 513)) : U("", !0)
    ])) : (O(), I("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: s.value ? void 0 : l.value,
      onFocus: g,
      onBlur: B,
      onKeydown: M
    }, null, 40, Cr));
  }
}), nn = /* @__PURE__ */ G({
  __name: "Placeholder",
  setup(e) {
    const n = ee("treeselect"), t = T(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (r, o) => (O(), I("div", {
      class: Q(t.value)
    }, H(x(n).placeholder), 3));
  }
}), xr = {
  key: 0,
  class: "vue-treeselect__single-value"
}, Dr = /* @__PURE__ */ G({
  __name: "SingleValue",
  setup(e) {
    const n = ee("treeselect"), t = Ue(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), o = T(() => n.selectedNodes.value[0]), u = T(() => t["value-label"]);
    return (f, d) => (O(), I(re, null, [
      r.value ? (O(), I("div", xr, [
        u.value ? (O(), V(Ke(u.value), {
          key: 0,
          node: o.value
        }, null, 8, ["node"])) : (O(), I(re, { key: 1 }, [
          Y(H(o.value.label), 1)
        ], 64))
      ])) : U("", !0),
      X(nn),
      X(tn, { ref: "input" }, null, 512)
    ], 64));
  }
}), Ar = {
  name: "vue-treeselect--x"
}, rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Ir(e, n, t, r, o, u) {
  return O(), I("svg", Mr, n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ]));
}
const on = /* @__PURE__ */ rn(Ar, [["render", Ir]]), kr = { class: "vue-treeselect__multi-value-item-container" }, Br = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, Fr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, $r = /* @__PURE__ */ G({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ue(), r = ee("treeselect"), o = T(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), u = T(() => t["value-label"]), f = oe(function() {
      r.select(n.node);
    });
    return (d, s) => (O(), I("div", kr, [
      z("div", {
        class: Q(o.value),
        onMousedown: s[0] || (s[0] = //@ts-ignore
        (...c) => x(f) && x(f)(...c))
      }, [
        u.value ? (O(), V(Ke(u.value), {
          key: 0,
          node: d.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (O(), I("span", Br, H(d.node.label), 1)),
        z("span", Fr, [
          X(on)
        ])
      ], 34)
    ]));
  }
}), Vr = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Hr = { class: "vue-treeselect__limit-tip-text" }, zr = /* @__PURE__ */ G({
  __name: "MultiValue",
  setup(e) {
    const n = ee("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((u) => u !== null)), r = T(() => n.internalValue.value.length > n.limit), o = T(() => {
      const u = n.internalValue.value.length - n.limit;
      return n.limitText(u);
    });
    return (u, f) => (O(), V(hn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (O(!0), I(re, null, ae(t.value, (d) => (O(), V($r, {
          key: `multi-value-item-${d.id}`,
          node: d
        }, null, 8, ["node"]))), 128)),
        r.value ? (O(), I("div", Vr, [
          z("span", Hr, H(o.value), 1)
        ])) : U("", !0),
        X(nn, { key: "placeholder" }),
        X(tn, {
          ref: "input",
          key: "input"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Pr = {
  name: "vue-treeselect--arrow"
}, qr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Wr(e, n, t, r, o, u) {
  return O(), I("svg", qr, n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ]));
}
const sn = /* @__PURE__ */ rn(Pr, [["render", Wr]]), jr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Ur = ["title"], Kr = /* @__PURE__ */ G({
  __name: "Control",
  setup(e) {
    const n = ee("treeselect"), t = ee("instance"), r = T(() => n.single.value), o = T(() => n.hasValue.value && n.internalValue.value.some((a) => {
      const v = n.getNode(a);
      return v && !v.isDisabled;
    })), u = T(() => n.clearable && !n.disabled && n.hasValue.value && (o.value || n.allowClearingDisabled)), f = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), d = T(() => n.multiple ? n.clearAllText : n.clearValueText), s = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), c = oe(function(a) {
      a.stopPropagation(), a.preventDefault();
      const v = n.beforeClearAll(), y = (p) => {
        p && n.clear();
      };
      Xt(v) ? v.then((p) => y(p)) : setTimeout(() => y(v), 0);
    }), l = oe(function(a) {
      a.preventDefault(), a.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (a, v) => (O(), I("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: v[2] || (v[2] = //@ts-ignore
      (...y) => x(t).handleMouseDown && x(t).handleMouseDown(...y))
    }, [
      z("div", jr, [
        r.value ? (O(), V(Dr, { key: 0 })) : (O(), V(zr, { key: 1 }))
      ], 512),
      u.value ? (O(), I("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: d.value,
        onMousedown: v[0] || (v[0] = //@ts-ignore
        (...y) => x(c) && x(c)(...y))
      }, [
        X(on, { class: "vue-treeselect__x" })
      ], 40, Ur)) : U("", !0),
      f.value ? (O(), I("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: v[1] || (v[1] = //@ts-ignore
        (...y) => x(l) && x(l)(...y))
      }, [
        X(sn, {
          class: Q(s.value)
        }, null, 8, ["class"])
      ], 32)) : U("", !0)
    ], 544));
  }
}), Yr = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ G({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (O(), I("div", {
      class: Q(`vue-treeselect__tip vue-treeselect__${n.type}-tip`)
    }, [
      z("div", Yr, [
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
}), Qr = ["data-id"], Gr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Xr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Jr = {
  key: 0,
  class: "vue-treeselect__list"
}, Zr = ["title"], Ht = "vue-treeselect__label", zt = "vue-treeselect__count", Pt = /* @__PURE__ */ G({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ue(), r = ee("treeselect"), o = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), u = T(() => n.node.isBranch && r.shouldExpand(n.node)), f = T(() => r.shouldShowOptionInMenu(n.node)), d = T(() => !r.shouldFlattenOptions || !f.value), s = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !f.value
    })), c = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": u.value
    })), l = T(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), a = T(() => {
      const C = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": C === wr,
        "vue-treeselect__checkbox--indeterminate": C === Nr,
        "vue-treeselect__checkbox--unchecked": C === Er,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), v = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), y = T(() => v.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), p = T(() => t["option-label"]), E = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), S = T(() => {
      var C;
      return ((C = n.node.childrenStates) == null ? void 0 : C.isLoaded) && (!n.node.children || n.node.children.length === 0);
    }), w = T(() => {
      var C;
      return ((C = n.node.childrenStates) == null ? void 0 : C.isLoading) || !1;
    }), i = T(() => {
      var C;
      return !!((C = n.node.childrenStates) != null && C.loadingError);
    }), _ = (C) => {
      C.target === C.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, h = oe(function() {
      r.toggleExpanded(n.node);
    }), g = oe(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), B = oe(function() {
      r.loadChildrenOptions(n.node);
    });
    return (C, m) => {
      const M = vn("Option", !0);
      return O(), I("div", {
        class: Q(o.value)
      }, [
        z("div", {
          class: Q(s.value),
          "data-id": C.node.id,
          onMouseenter: _
        }, [
          C.node.isBranch && d.value ? (O(), I("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: m[0] || (m[0] = //@ts-ignore
            (...b) => x(h) && x(h)(...b))
          }, [
            X(We, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                X(sn, {
                  class: Q(c.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : x(r).hasBranchNodes && d.value ? (O(), I("div", Gr, "   ")) : U("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: m[1] || (m[1] = //@ts-ignore
            (...b) => x(g) && x(g)(...b))
          }, [
            l.value ? (O(), I("div", Xr, [
              z("span", {
                class: Q(a.value)
              }, m[3] || (m[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ]), 2)
            ])) : U("", !0),
            p.value ? (O(), V(Ke(p.value), {
              key: 1,
              node: C.node,
              shouldShowCount: v.value,
              count: y.value,
              labelClassName: Ht,
              countClassName: zt
            }, null, 8, ["node", "shouldShowCount", "count"])) : (O(), I("label", {
              key: 2,
              class: Q(Ht)
            }, [
              Y(H(C.node.label) + " ", 1),
              v.value ? (O(), I("span", {
                key: 0,
                class: Q(zt)
              }, " (" + H(y.value) + ") ", 1)) : U("", !0)
            ]))
          ], 32)
        ], 42, Qr),
        C.node.isBranch ? (O(), V(We, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            u.value ? (O(), I("div", Jr, [
              (O(!0), I(re, null, ae(E.value, (b) => (O(), V(M, {
                key: b.id,
                node: b
              }, null, 8, ["node"]))), 128)),
              S.value ? (O(), V(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(r).noChildrenText), 1)
                ]),
                _: 1
              })) : U("", !0),
              w.value ? (O(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(H(x(r).loadingText), 1)
                ]),
                _: 1
              })) : U("", !0),
              i.value ? (O(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => {
                  var b;
                  return [
                    Y(H((b = C.node.childrenStates) == null ? void 0 : b.loadingError) + " ", 1),
                    z("a", {
                      class: "vue-treeselect__retry",
                      title: x(r).retryTitle,
                      onMousedown: m[2] || (m[2] = //@ts-ignore
                      (...N) => x(B) && x(B)(...N))
                    }, H(x(r).retryText), 41, Zr)
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
}), eo = ["title"], to = {
  key: 4,
  class: "vue-treeselect__list"
}, no = ["title"], ro = {
  key: 4,
  class: "vue-treeselect__list"
}, ln = /* @__PURE__ */ G({
  __name: "Menu",
  setup(e) {
    const n = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, t = ee("treeselect");
    let r = null, o = null;
    const u = T(() => ({
      maxHeight: t.maxHeight + "px"
    })), f = T(() => ({
      zIndex: t.appendToBody ? null : t.zIndex
    })), d = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), s = T(() => t.getRemoteSearchEntry()), c = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), l = T(() => {
      if (c.value) return !1;
      const i = s.value;
      return i.isLoaded && i.options.length === 0;
    }), a = () => {
      if (!t.menu.value.isOpen) return;
      const i = t.getMenu(), _ = t.getControl();
      if (!i || !_) return;
      const h = i.getBoundingClientRect(), g = _.getBoundingClientRect(), B = h.height, C = window.innerHeight, m = g.top, M = window.innerHeight - g.bottom, b = g.top >= 0 && g.top <= C || g.top < 0 && g.bottom > 0, N = M > B + Vt, D = m > B + Vt;
      b ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : N || !D ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, v = () => {
      const i = t.getMenu();
      r || !i || (r = {
        remove: Qt(i, a)
      });
    }, y = () => {
      const i = t.getControl();
      o || !i || (o = {
        remove: Gt(i, a)
      });
    }, p = () => {
      r && (r.remove(), r = null);
    }, E = () => {
      o && (o.remove(), o = null);
    }, S = () => {
      a(), v(), y();
    }, w = () => {
      p(), E();
    };
    return W(
      () => t.menu.value.isOpen,
      (i) => {
        i ? ne(S) : w();
      }
    ), ge(() => {
      t.menu.value.isOpen && ne(S);
    }), ye(() => {
      w();
    }), (i, _) => (O(), I("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Pe(f.value)
    }, [
      X(We, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          x(t).menu.value.isOpen ? (O(), I("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Pe(u.value),
            onMousedown: _[2] || (_[2] = //@ts-ignore
            (...h) => x(t).handleMouseDown && x(t).handleMouseDown(...h))
          }, [
            qe(i.$slots, "before-list"),
            x(t).async ? (O(), I(re, { key: 0 }, [
              c.value ? (O(), V(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).searchPromptText), 1)
                ]),
                _: 1
              })) : s.value.isLoading ? (O(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Y(H(x(t).loadingText), 1)
                ]),
                _: 1
              })) : s.value.loadingError ? (O(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Y(H(s.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: x(t).retryTitle,
                    onClick: _[0] || (_[0] = //@ts-ignore
                    (...h) => x(t).handleRemoteSearch && x(t).handleRemoteSearch(...h))
                  }, H(x(t).retryText), 9, eo)
                ]),
                _: 1
              })) : l.value ? (O(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Y(H(x(t).noResultsText), 1)
                ]),
                _: 1
              })) : (O(), I("div", to, [
                (O(!0), I(re, null, ae(x(t).forest.value.normalizedOptions, (h) => (O(), V(Pt, {
                  key: h.id,
                  node: h
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (O(), I(re, { key: 1 }, [
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
                    onClick: _[1] || (_[1] = //@ts-ignore
                    (...h) => x(t).loadRootOptions && x(t).loadRootOptions(...h))
                  }, H(x(t).retryText), 9, no)
                ]),
                _: 1
              })) : d.value ? (O(), V(J, {
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
              })) : (O(), I("div", ro, [
                (O(!0), I(re, null, ae(x(t).forest.value.normalizedOptions, (h) => (O(), V(Pt, {
                  key: h.id,
                  node: h
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            qe(i.$slots, "after-list")
          ], 36)) : U("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), oo = { class: "vue-treeselect__menu-placeholder" }, so = /* @__PURE__ */ G({
  __name: "MenuPortal",
  setup(e) {
    const n = ee("treeselect"), t = (d) => G({
      name: "vue-treeselect--portal-target",
      setup() {
        let s = null, c = null, l = null;
        const a = () => {
          if (!l) return;
          const _ = d.getControl();
          if (!_) return;
          const h = _.getBoundingClientRect();
          l.style.width = h.width + "px";
        }, v = () => {
          if (!l) return;
          const _ = d.getControl();
          if (!_) return;
          const h = l.querySelector(".vue-treeselect__menu-container");
          if (!h) return;
          const g = _.getBoundingClientRect(), B = l.getBoundingClientRect(), C = d.menu.value.placement === "bottom" ? g.height : 0, m = Math.round(g.left - B.left) + "px", M = Math.round(g.top - B.top + C) + "px", N = Ye(["transform", "webkitTransform", "MozTransform", "msTransform"], (D) => D in document.body.style);
          N && (h.style[N] = `translate(${m}, ${M})`);
        }, y = () => {
          const _ = d.getControl();
          s || !_ || (s = {
            remove: Gt(_, v)
          });
        }, p = () => {
          const _ = d.getControl();
          c || !_ || (c = {
            remove: Qt(_, () => {
              a(), v();
            })
          });
        }, E = () => {
          s && (s.remove(), s = null);
        }, S = () => {
          c && (c.remove(), c = null);
        }, w = () => {
          a(), v(), y(), p();
        }, i = () => {
          E(), S();
        };
        return W(
          () => d.menu.value.isOpen,
          (_) => {
            _ ? ne(w) : i();
          }
        ), W(
          () => d.menu.value.placement,
          () => {
            v();
          }
        ), ge(() => {
          l = document.body.lastElementChild, d.menu.value.isOpen && ne(w);
        }), ye(() => {
          i();
        }), () => Je("div", {
          class: ["vue-treeselect__portal-target", d.wrapperClass],
          style: { zIndex: d.zIndex },
          "data-instance-id": d.getInstanceId()
        }, [
          Je(ln)
        ]);
      }
    });
    let r = null, o = null;
    const u = () => {
      const d = document.createElement("div");
      document.body.appendChild(d), o = d;
      const s = t(n);
      r = pn(s), r.provide("treeselect", n), r.mount(d);
    }, f = () => {
      var d;
      r && o && ((d = o.parentNode) == null || d.removeChild(o), r.unmount(), r = null, o = null);
    };
    return ge(() => {
      u();
    }), ye(() => {
      f();
    }), (d, s) => (O(), I("div", oo));
  }
}), mo = /* @__PURE__ */ G({
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
    const r = e, o = t, u = te(), f = te(), d = te(), s = te(), c = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).substr(2, 9)}`,
      set: () => {
      }
    }), l = () => {
      var B, C, m, M, b;
      const h = r.appendToBody ? s : d, g = ((C = (B = h.value) == null ? void 0 : B.$refs) == null ? void 0 : C.menu) || ((b = (M = (m = h.value) == null ? void 0 : m.$refs) == null ? void 0 : M["menu-container"]) == null ? void 0 : b.querySelector(".vue-treeselect__menu"));
      return g && g.nodeName !== "#comment" ? g : null;
    }, a = () => {
      var h, g;
      return (g = (h = f.value) == null ? void 0 : h.$refs) == null ? void 0 : g["value-container"];
    }, v = () => {
      var g;
      const h = a();
      return (g = h == null ? void 0 : h.$refs) == null ? void 0 : g.input;
    }, y = () => {
      var h;
      (h = v()) == null || h.focus();
    }, p = () => {
      var h;
      (h = v()) == null || h.blur();
    }, E = (h) => {
      h ? document.addEventListener("mousedown", S, !1) : document.removeEventListener("mousedown", S, !1);
    }, S = (h) => {
      u.value && !u.value.contains(h.target) && (p(), i.closeMenu());
    }, w = oe(function(h) {
      if (h.preventDefault(), h.stopPropagation(), r.disabled) return;
      a().$el.contains(h.target) && !i.menu.isOpen && (r.openOnClick || i.trigger.isFocused) && i.openMenu(), (i.resetFlags ? i.resetFlags() : !1) ? p() : y(), i.resetFlags && i.resetFlags();
    }), i = Or(
      r,
      o,
      c,
      l,
      E
    );
    Ze("treeselect", i), Ze("instance", {
      getInput: v,
      focusInput: y,
      blurInput: p,
      getValueContainer: a,
      handleMouseDown: w
    });
    const _ = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": i.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": i.trigger.isFocused,
      "vue-treeselect--has-value": i.hasValue.value,
      "vue-treeselect--open": i.menu.isOpen,
      "vue-treeselect--open-above": i.menu.placement === "top",
      "vue-treeselect--open-below": i.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
    }));
    return n({
      // Node methods
      getNode: i.getNode,
      // Traversal
      traverseAllNodesDFS: i.traverseAllNodesDFS,
      traverseAllNodesByIndex: i.traverseAllNodesByIndex,
      // Menu
      openMenu: i.openMenu,
      closeMenu: i.closeMenu,
      toggleMenu: i.toggleMenu,
      // Selection
      select: i.select,
      clear: i.clear,
      // Value
      getValue: i.getValue,
      // Focus
      focusInput: y,
      blurInput: p
    }), (h, g) => (O(), I("div", {
      ref_key: "wrapper",
      ref: u,
      class: Q(_.value)
    }, [
      X(Sr),
      X(Kr, {
        ref_key: "control",
        ref: f
      }, null, 512),
      h.appendToBody ? (O(), V(so, {
        key: 0,
        ref_key: "portal",
        ref: s
      }, null, 512)) : (O(), V(ln, {
        key: 1,
        ref_key: "menu",
        ref: d
      }, null, 512))
    ], 2));
  }
});
export {
  fo as ALL,
  po as ALL_WITH_INDETERMINATE,
  co as ASYNC_SEARCH,
  ho as BRANCH_PRIORITY,
  wr as CHECKED,
  Nr as INDETERMINATE,
  vo as LEAF_PRIORITY,
  uo as LOAD_CHILDREN_OPTIONS,
  io as LOAD_ROOT_OPTIONS,
  mo as Treeselect,
  Er as UNCHECKED,
  mo as default,
  yr as useAsyncOptions,
  Jn as useForestState,
  dr as useLocalSearch,
  ar as useMenu,
  nr as useNodeNormalization,
  Yn as useNodeTraversal,
  pr as useRemoteSearch,
  lr as useSelection,
  Or as useTreeselect,
  or as useValue
};
