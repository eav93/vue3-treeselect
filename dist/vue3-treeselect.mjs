import { reactive as ce, computed as T, nextTick as ne, ref as te, watch as W, onMounted as Oe, onUnmounted as be, toRef as pe, defineComponent as K, inject as Z, openBlock as g, createElementBlock as k, Fragment as re, renderList as ue, unref as R, withDirectives as un, createElementVNode as z, normalizeStyle as Ge, vModelText as cn, toDisplayString as H, createCommentVNode as Y, normalizeClass as G, useSlots as Ze, createBlock as V, resolveDynamicComponent as et, createTextVNode as Q, createVNode as X, TransitionGroup as dn, withCtx as j, renderSlot as Ke, resolveComponent as fn, Transition as Xe, createApp as hn, h as lt, provide as at } from "vue";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(e) {
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
const mn = /* @__PURE__ */ de(pn), _e = process.env.NODE_ENV === "production" ? (
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
  var e = typeof me == "object" && me && me.Object === Object && me;
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
var Me, ht;
function On() {
  if (ht) return Me;
  ht = 1;
  var e = /\s/;
  function n(t) {
    for (var r = t.length; r-- && e.test(t.charAt(r)); )
      ;
    return r;
  }
  return Me = n, Me;
}
var Ie, vt;
function bn() {
  if (vt) return Ie;
  vt = 1;
  var e = On(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return Ie = t, Ie;
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
  function l(i) {
    var f = t.call(i, o), a = i[o];
    try {
      i[o] = void 0;
      var c = !0;
    } catch {
    }
    var s = r.call(i);
    return c && (f ? i[o] = a : delete i[o]), s;
  }
  return Be = l, Be;
}
var $e, _t;
function En() {
  if (_t) return $e;
  _t = 1;
  var e = Object.prototype, n = e.toString;
  function t(r) {
    return n.call(r);
  }
  return $e = t, $e;
}
var Fe, gt;
function Nn() {
  if (gt) return Fe;
  gt = 1;
  var e = qt(), n = Sn(), t = En(), r = "[object Null]", o = "[object Undefined]", l = e ? e.toStringTag : void 0;
  function i(f) {
    return f == null ? f === void 0 ? o : r : l && l in Object(f) ? n(f) : t(f);
  }
  return Fe = i, Fe;
}
var Ve, yt;
function wn() {
  if (yt) return Ve;
  yt = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return Ve = e, Ve;
}
var He, Ot;
function Tn() {
  if (Ot) return He;
  Ot = 1;
  var e = Nn(), n = wn(), t = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || n(o) && e(o) == t;
  }
  return He = r, He;
}
var ze, bt;
function Wt() {
  if (bt) return ze;
  bt = 1;
  var e = bn(), n = zt(), t = Tn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, i = /^0o[0-7]+$/i, f = parseInt;
  function a(c) {
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
    var h = l.test(c);
    return h || i.test(c) ? f(c.slice(2), h ? 2 : 8) : o.test(c) ? r : +c;
  }
  return ze = a, ze;
}
var Pe, St;
function xn() {
  if (St) return Pe;
  St = 1;
  var e = zt(), n = yn(), t = Wt(), r = "Expected a function", o = Math.max, l = Math.min;
  function i(f, a, c) {
    var s, h, d, _, v, b, E = 0, S = !1, y = !1, u = !0;
    if (typeof f != "function")
      throw new TypeError(r);
    a = t(a) || 0, e(c) && (S = !!c.leading, y = "maxWait" in c, d = y ? o(t(c.maxWait) || 0, a) : d, u = "trailing" in c ? !!c.trailing : u);
    function L(C) {
      var $ = s, w = h;
      return s = h = void 0, E = C, _ = f.apply(w, $), _;
    }
    function D(C) {
      return E = C, v = setTimeout(p, a), S ? L(C) : _;
    }
    function m(C) {
      var $ = C - b, w = C - E, B = a - $;
      return y ? l(B, d - w) : B;
    }
    function I(C) {
      var $ = C - b, w = C - E;
      return b === void 0 || $ >= a || $ < 0 || y && w >= d;
    }
    function p() {
      var C = n();
      if (I(C))
        return A(C);
      v = setTimeout(p, m(C));
    }
    function A(C) {
      return v = void 0, u && s ? L(C) : (s = h = void 0, _);
    }
    function O() {
      v !== void 0 && clearTimeout(v), E = 0, s = b = h = v = void 0;
    }
    function N() {
      return v === void 0 ? _ : A(n());
    }
    function M() {
      var C = n(), $ = I(C);
      if (s = arguments, h = this, b = C, $) {
        if (v === void 0)
          return D(b);
        if (y)
          return clearTimeout(v), v = setTimeout(p, a), L(b);
      }
      return v === void 0 && (v = setTimeout(p, a)), _;
    }
    return M.cancel = O, M.flush = N, M;
  }
  return Pe = i, Pe;
}
var Rn = xn();
const Ln = /* @__PURE__ */ de(Rn);
var Cn = (function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), l = r.appendChild(document.createElement("_")), i = void 0, f = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", l.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", l.style.width = l.style.height = "200%", e.appendChild(t), a(), s;
  function a() {
    c();
    var h = e.offsetWidth, d = e.offsetHeight;
    (h !== i || d !== f) && (i = h, f = d, o.style.width = h * 2 + "px", o.style.height = d * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: h, height: d })), r.addEventListener("scroll", a), t.addEventListener("scroll", a);
  }
  function c() {
    r.removeEventListener("scroll", a), t.removeEventListener("scroll", a);
  }
  function s() {
    c(), e.removeChild(t);
  }
});
function jt(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let ge;
const ye = [], Dn = 100;
function An() {
  ge = setInterval(() => {
    ye.forEach(Yt);
  }, Dn);
}
function Mn() {
  ge && (clearInterval(ge), ge = null);
}
function Yt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, l = n.offsetWidth, i = n.offsetHeight;
  (r !== l || o !== i) && (e.lastWidth = l, e.lastHeight = i, t({ width: l, height: i }));
}
function In(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    jt(ye, t), ye.length || Mn();
  };
  return ye.push(t), Yt(t), An(), r;
}
function Ut(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const i = (t ? In : Cn)(e, (...f) => {
    r || n(...f);
  });
  return r = !1, i;
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
function $n(e) {
  return e !== e;
}
function Gt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var qe, Et;
function Fn() {
  if (Et) return qe;
  Et = 1;
  var e = Wt(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var l = o < 0 ? -1 : 1;
      return l * t;
    }
    return o === o ? o : 0;
  }
  return qe = r, qe;
}
var We, Nt;
function Vn() {
  if (Nt) return We;
  Nt = 1;
  var e = Fn();
  function n(t) {
    var r = e(t), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return We = n, We;
}
var je, wt;
function Hn() {
  if (wt) return je;
  wt = 1;
  var e = Vn(), n = "Expected a function";
  function t(r, o) {
    var l;
    if (typeof o != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (l = o.apply(this, arguments)), r <= 1 && (o = void 0), l;
    };
  }
  return je = t, je;
}
var Ye, Tt;
function zn() {
  if (Tt) return Ye;
  Tt = 1;
  var e = Hn();
  function n(t) {
    return e(2, t);
  }
  return Ye = n, Ye;
}
var Pn = zn();
const qn = /* @__PURE__ */ de(Pn), ee = () => /* @__PURE__ */ Object.create(null);
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
const Kt = /* @__PURE__ */ de(jn);
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
  const e = (o, l) => {
    if (!o.isBranch) return;
    const i = o.children.slice();
    for (; i.length; ) {
      const f = i[0];
      f.isBranch && i.push(...f.children), l(f), i.shift();
    }
  }, n = (o, l) => {
    o.isBranch && o.children.forEach((i) => {
      n(i, l), l(i);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (o, l) => {
      o.forEach((i) => {
        n(i, l), l(i);
      });
    },
    traverseAllNodesByIndex: (o, l) => {
      const i = (f) => {
        f.children && f.children.forEach((a) => {
          l(a) !== !1 && a.isBranch && a.children && i(a);
        });
      };
      i({ children: o });
    }
  };
}
const se = null, nt = 0, Jt = 1, Zt = 2, Se = "ALL_CHILDREN", Ee = "ALL_DESCENDANTS", Ne = "LEAF_CHILDREN", we = "LEAF_DESCENDANTS", Jr = "LOAD_ROOT_OPTIONS", Zr = "LOAD_CHILDREN_OPTIONS", eo = "ASYNC_SEARCH", to = "ALL", no = "BRANCH_PRIORITY", ro = "LEAF_PRIORITY", oo = "ALL_WITH_INDETERMINATE", q = {
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
  const n = ce({
    normalizedOptions: [],
    nodeMap: ee(),
    checkedStateMap: ee(),
    selectedNodeIds: e(),
    selectedNodeMap: ee()
  });
  return {
    forest: n,
    buildForestState: (o, l, i, f) => {
      const a = ee();
      n.selectedNodeIds.forEach((s) => {
        a[s] = !0;
      }), n.selectedNodeMap = a;
      const c = ee();
      o.multiple && (i((s) => {
        c[s.id] = nt;
      }), l.forEach((s) => {
        c[s.id] = Zt, !o.flat && !o.disableBranchNodes && s.ancestors.forEach((h) => {
          f(h) || (c[h.id] = Jt);
        });
      })), n.checkedStateMap = c;
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
  const o = (a) => ({
    ...a,
    ...e.normalizer ? e.normalizer(a, t.value) : {}
  }), l = (a) => {
    _e(
      () => !(a.id in n.nodeMap && !n.nodeMap[a.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(a.id)}. Their labels are "${n.nodeMap[a.id].label}" and "${a.label}" respectively.`
    );
  }, i = (a) => {
    _e(
      () => !(a.children === void 0 && a.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, f = (a, c, s) => {
    let h = c.map((d) => [o(d), d]).map(([d, _], v) => {
      l(d), i(d);
      const { id: b, label: E, children: S, isDefaultExpanded: y } = d, u = a === se, L = u ? 0 : a.level + 1, D = Array.isArray(S) || S === null, m = !D, I = !!d.isDisabled || !e.flat && !u && a.isDisabled, p = !!d.isNew, A = (e.matchKeys || ["label"]).reduce((M, C) => ({
        ...M,
        [C]: Kn(d[C]).toLocaleLowerCase()
      }), {}), O = u ? A.label : a.nestedSearchLabel + " " + A.label;
      n.nodeMap[b] = ee();
      const N = n.nodeMap[b];
      if (Object.assign(N, {
        id: b,
        label: E,
        level: L,
        ancestors: u ? [] : [a].concat(a.ancestors),
        index: (u ? [] : a.index).concat(v),
        parentNode: a,
        lowerCased: A,
        nestedSearchLabel: O,
        isDisabled: I,
        isNew: p,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: D,
        isLeaf: m,
        isRootNode: u,
        raw: _
      }), D) {
        const M = Array.isArray(S);
        Object.assign(N, {
          childrenStates: { ...Gn(), isLoaded: M },
          isExpanded: typeof y == "boolean" ? y : L < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [Se]: 0,
            [Ee]: 0,
            [Ne]: 0,
            [we]: 0
          },
          children: M ? f(N, S, s) : []
        }), y === !0 && N.ancestors.forEach((C) => {
          C.isExpanded = !0;
        }), !M && typeof e.loadOptions != "function" ? _e(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !M && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((M) => {
        M.count && M.count[Ee]++;
      }), m && N.ancestors.forEach((M) => {
        M.count && M.count[we]++;
      }), !u && a.count && (a.count[Se] += 1, m && (a.count[Ne] += 1), I && (a.hasDisabledDescendants = !0)), s && s[b]) {
        const M = s[b];
        N.isMatched = M.isMatched, N.showAllChildrenOnSearch = M.showAllChildrenOnSearch, N.isHighlighted = M.isHighlighted, M.isBranch && N.isBranch && (N.isExpanded = M.isExpanded, N.isExpandedOnSearch = M.isExpandedOnSearch, M.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = { ...M.childrenStates });
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
    normalize: f,
    enhancedNormalizer: o,
    checkDuplication: l,
    verifyNodeShape: i
  };
}
const Ct = "ALL", Dt = "BRANCH_PRIORITY", At = "LEAF_PRIORITY", Mt = "ALL_WITH_INDETERMINATE";
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
function It(e, n, t) {
  const r = ee();
  for (; e.length; ) {
    const o = e.shift(), l = t(o);
    l && (n.push(o), !l.isRootNode && (l.parentNode.id in r || (r[l.parentNode.id] = l.parentNode.children.length), --r[l.parentNode.id] === 0 && e.push(l.parentNode.id)));
  }
}
function Zn(e, n, t, r, o, l) {
  const i = T(() => n.selectedNodeIds.map((v) => t(v))), f = T(() => !e.multiple), a = T(() => {
    let v;
    if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
      v = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Dt)
      v = n.selectedNodeIds.filter((b) => {
        const E = t(b);
        return E ? E.isRootNode ? !0 : !r(E.parentNode) : !1;
      });
    else if (e.valueConsistsOf === At)
      v = n.selectedNodeIds.filter((b) => {
        const E = t(b);
        return E ? E.isLeaf ? !0 : E.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Mt) {
      const b = [];
      v = n.selectedNodeIds.slice(), i.value.forEach((E) => {
        E.ancestors.forEach((S) => {
          b.includes(S.id) || v.includes(S.id) || b.push(S.id);
        });
      }), v.push(...b);
    } else
      v = [];
    return e.sortValueBy === "LEVEL" ? v.sort((b, E) => Jn(t(b), t(E))) : e.sortValueBy === "INDEX" && v.sort((b, E) => en(t(b), t(E))), v;
  }), c = T(() => a.value.length > 0);
  return {
    selectedNodes: i,
    single: f,
    internalValue: a,
    hasValue: c,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? a.value.slice() : a.value[0];
      const v = a.value.map((b) => t(b).raw);
      return e.multiple ? v : v[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((v) => l(v)).map((v) => v.id),
    extractNodeFromValue: (v) => {
      const b = { id: v };
      if (e.valueFormat === "id")
        return b;
      const E = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return tt(
        E,
        (y) => y && l(y).id === v
      ) || b;
    },
    fixSelectedNodeIds: (v, b) => {
      let E = [];
      if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
        E = v;
      else if (e.valueConsistsOf === Dt)
        v.forEach((y) => {
          E.push(y);
          const u = t(y);
          u?.isBranch && o(u, (L) => {
            E.push(L.id);
          });
        });
      else if (e.valueConsistsOf === At)
        It(v.slice(), E, t);
      else if (e.valueConsistsOf === Mt) {
        const y = v.filter((u) => {
          const L = t(u);
          return L && (L.isLeaf || L.children.length === 0);
        });
        It(y, E, t);
      }
      Je(n.selectedNodeIds, E) && (n.selectedNodeIds = E), b();
    }
  };
}
function er(e, n, t, r, o, l, i, f, a, c, s, h, d, _, v) {
  let b = !1;
  const E = () => {
    const p = b;
    return b = !1, p;
  }, S = (p) => {
    t.selectedNodeIds.push(p.id), t.selectedNodeMap[p.id] = !0;
  }, y = (p) => {
    jt(t.selectedNodeIds, p.id), delete t.selectedNodeMap[p.id];
  }, u = () => {
    s() && (d() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((p) => {
      const A = r(p);
      return A ? A.isDisabled : !1;
    }), f());
  }, L = (p) => {
    if (d() || e.disableBranchNodes)
      return S(p);
    if (e.flat) {
      S(p), e.autoSelectAncestors ? p.ancestors.forEach((O) => {
        !o(O) && !O.isDisabled && S(O);
      }) : e.autoSelectDescendants && l(p, (O) => {
        !o(O) && !O.isDisabled && S(O);
      });
      return;
    }
    const A = p.isLeaf || !p.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (A && S(p), p.isBranch && l(p, (O) => {
      (!O.isDisabled || e.allowSelectingDisabledDescendants) && S(O);
    }), A) {
      let O = p;
      for (; (O = O.parentNode) !== se && (O && O.children.every(o)); )
        S(O);
    }
  }, D = (p) => {
    if (e.disableBranchNodes)
      return y(p);
    if (e.flat) {
      y(p), e.autoDeselectAncestors ? p.ancestors.forEach((O) => {
        o(O) && !O.isDisabled && y(O);
      }) : e.autoDeselectDescendants && l(p, (O) => {
        o(O) && !O.isDisabled && y(O);
      });
      return;
    }
    let A = !1;
    if (p.isBranch && i(p, (O) => {
      (!O.isDisabled || e.allowSelectingDisabledDescendants) && (y(O), A = !0);
    }), p.isLeaf || A || p.isBranch && p.children.length === 0) {
      y(p);
      let O = p;
      for (; (O = O.parentNode) !== se && (O && o(O)); )
        y(O);
    }
  }, m = (p) => {
    if (e.disabled || p.isDisabled)
      return;
    d() && u();
    const A = e.multiple && !e.flat ? t.checkedStateMap[p.id] === nt : !o(p);
    A ? L(p) : D(p), f(), ne(() => {
      n(A ? "select" : "deselect", p.raw, _);
    }), v.active && A && (d() || e.clearOnSelect) && a(), d() && e.closeOnSelect && (c(), e.searchable && (b = !0));
  };
  return {
    select: m,
    clear: u,
    addValue: S,
    removeValue: y,
    removeLastValue: () => {
      if (!s()) return;
      if (d()) return u();
      const p = Kt(h());
      if (!p) return;
      const A = r(p);
      A && m(A);
    },
    resetFlags: E
  };
}
function tr(e, n, t, r, o, l, i, f, a, c, s, h, d) {
  const _ = ce({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), v = (w) => r.active ? w.isExpandedOnSearch || !1 : w.isExpanded || !1, b = (w) => !!(w.isMatched || w.isBranch && w.hasMatchedDescendants && !e.flattenSearchResults || !w.isRootNode && w.parentNode.showAllChildrenOnSearch), E = (w) => !(r.active && !b(w)), S = T(() => {
    const w = [];
    return l((B) => {
      if ((!r.active || b(B)) && w.push(B.id), B.isBranch && !v(B))
        return !1;
    }), w;
  }), y = T(() => S.value.length !== 0), u = (w, B = !0) => {
    const U = _.current;
    if (U != null && U in t.nodeMap && (t.nodeMap[U].isHighlighted = !1), !w) {
      _.current = null;
      return;
    }
    if (_.current = w.id, w.isHighlighted = !0, _.isOpen && B) {
      const le = () => {
        const ae = h();
        if (!ae) return;
        const ie = ae.querySelector(`.vue-treeselect__option[data-id="${w.id}"]`);
        ie && _n(ae, ie);
      };
      h() ? le() : ne(le);
    }
  }, L = () => {
    if (!y.value) return;
    const w = S.value[0], B = o(w);
    B && u(B);
  }, D = () => {
    if (!y.value) return;
    const B = S.value.indexOf(_.current) - 1;
    if (B === -1) return I();
    const U = o(S.value[B]);
    U && u(U);
  }, m = () => {
    if (!y.value) return;
    const B = S.value.indexOf(_.current) + 1;
    if (B === S.value.length) return L();
    const U = o(S.value[B]);
    U && u(U);
  }, I = () => {
    if (!y.value) return;
    const w = Kt(S.value);
    if (!w) return;
    const B = o(w);
    B && u(B);
  }, p = (w = !1) => {
    const { current: B } = _;
    (w || B == null || !(B in t.nodeMap) || !E(o(B))) && L();
  }, A = () => {
    const w = h();
    w && (_.lastScrollPosition = w.scrollTop);
  }, O = () => {
    const w = h();
    w && (w.scrollTop = _.lastScrollPosition);
  }, N = () => {
    !_.isOpen || !e.disabled && e.alwaysOpen || (A(), _.isOpen = !1, d(!1), a(), n("close", i(), f));
  }, M = () => {
    e.disabled || _.isOpen || (_.isOpen = !0, ne(p), ne(O), !e.options && !e.async && c(), d(!0), n("open", f));
  };
  return {
    menu: _,
    visibleOptionIds: S,
    hasVisibleOptions: y,
    shouldExpand: v,
    shouldShowOptionInMenu: E,
    openMenu: M,
    closeMenu: N,
    toggleMenu: () => {
      _.isOpen ? N() : M();
    },
    toggleExpanded: (w) => {
      let B;
      r.active ? (B = w.isExpandedOnSearch = !w.isExpandedOnSearch, B && (w.showAllChildrenOnSearch = !0)) : B = w.isExpanded = !w.isExpanded, B && !w.childrenStates.isLoaded && s(w);
    },
    setCurrentHighlightedOption: u,
    resetHighlightedOptionWhenNecessary: p,
    highlightFirstOption: L,
    highlightPrevOption: D,
    highlightNextOption: m,
    highlightLastOption: I,
    saveMenuScrollPosition: A,
    restoreMenuScrollPosition: O
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
    e: for (var l = 0, i = 0; l < o; l++) {
      for (var f = n.charCodeAt(l); i < r; )
        if (t.charCodeAt(i++) === f)
          continue e;
      return !1;
    }
    return !0;
  }
  return Qe = e, Qe;
}
var rr = nr();
const or = /* @__PURE__ */ de(rr);
function Bt(e, n, t) {
  return e ? or(n, t) : Xt(t, n);
}
function sr(e, n, t, r) {
  const o = ce({
    active: !1,
    noResults: !0,
    countMap: ee()
  });
  return {
    localSearch: o,
    handleLocalSearch: () => {
      const { searchQuery: i } = n, f = () => r(!0);
      if (!i)
        return o.active = !1, f();
      o.active = !0, o.noResults = !0, t((s) => {
        s.isBranch && (s.isExpandedOnSearch = !1, s.showAllChildrenOnSearch = !1, s.isMatched = !1, s.hasMatchedDescendants = !1, o.countMap[s.id] = {
          [Se]: 0,
          [Ee]: 0,
          [Ne]: 0,
          [we]: 0
        });
      });
      const a = i.trim().toLocaleLowerCase(), c = a.replace(/\s+/g, " ").split(" ");
      t((s) => {
        e.searchNested && c.length > 1 ? s.isMatched = c.every(
          (h) => Bt(!1, h, s.nestedSearchLabel)
        ) : s.isMatched = (e.matchKeys || ["label"]).some(
          (h) => Bt(!e.disableFuzzyMatching, a, s.lowerCased[h])
        ), s.isMatched && (o.noResults = !1, s.ancestors.forEach((h) => {
          o.countMap[h.id][Ee]++;
        }), s.isLeaf && s.ancestors.forEach((h) => {
          o.countMap[h.id][we]++;
        }), s.parentNode !== se && (o.countMap[s.parentNode.id][Se] += 1, s.isLeaf && (o.countMap[s.parentNode.id][Ne] += 1))), (s.isMatched || s.isBranch && s.isExpandedOnSearch) && s.parentNode !== se && (s.parentNode.isExpandedOnSearch = !0, s.parentNode.hasMatchedDescendants = !0);
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
  const l = te(ee()), i = te(0), f = () => {
    const { searchQuery: c } = n, s = l.value[c] || {
      ...ir(),
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
    return l.value[c] || (l.value[c] = s), s;
  };
  return {
    remoteSearch: l,
    key: i,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: c } = n, s = f(), h = () => {
        r(), o(!0);
      };
      if ((c === "" || e.cacheOptions) && s.isLoaded)
        return h();
      t({
        action: lr,
        args: { searchQuery: c },
        isPending: () => s.isLoading,
        start: () => {
          s.isLoading = !0, s.isLoaded = !1, s.loadingError = "";
        },
        succeed: (d) => {
          s.isLoaded = !0, s.options = d, n.searchQuery === c && h();
        },
        fail: (d) => {
          s.loadingError = ar(d);
        },
        end: () => {
          i.value += 1, s.isLoading = !1;
        }
      });
    }
  };
}
const cr = "LOAD_ROOT_OPTIONS", dr = "LOAD_CHILDREN_OPTIONS";
function $t(e) {
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
  const o = ce(fr()), l = (a) => {
    const { action: c, args: s, isPending: h, start: d, succeed: _, fail: v, end: b } = a;
    if (!e.loadOptions || h())
      return;
    d();
    const E = qn((y, u) => {
      y ? v(y) : _(u), b();
    }), S = e.loadOptions({
      id: t,
      instanceId: t,
      action: c,
      ...s,
      callback: E
    });
    Gt(S) && S.then(() => {
      E();
    }).catch((y) => {
      E(y);
    }).catch((y) => {
      console.error(y);
    });
  };
  return {
    rootOptionsStates: o,
    callLoadOptionsProp: l,
    loadRootOptions: () => {
      l({
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
        fail: (a) => {
          o.loadingError = $t(a);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (a) => {
      const { id: c, raw: s } = a;
      l({
        action: dr,
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
function vr(e, n, t, r, o, l) {
  const i = ce({
    isFocused: !1,
    searchQuery: ""
  }), f = () => {
    i.searchQuery = "";
  }, a = (x) => ({
    ...x,
    ...e.normalizer ? e.normalizer(x, t.value) : {}
  }), c = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((x) => a(x)).map((x) => x.id), s = Yn(), h = Qn(c), { forest: d, isSelected: _ } = h, v = (x) => (_e(
    () => x != null,
    () => `Invalid node id: ${x}`
  ), x == null ? null : x in d.nodeMap ? d.nodeMap[x] : b(x)), b = (x) => {
    const P = E(x), ve = a(P).label || `${x} (unknown)`, xe = {
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
    return d.nodeMap[x] = xe, xe;
  }, E = (x) => {
    const P = { id: x };
    if (e.valueFormat === "id")
      return P;
    const ve = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return tt(
      ve,
      (st) => st && a(st).id === x
    ) || P;
  };
  let S, y, u, L, D, m;
  const I = hr(
    e,
    v,
    t.value,
    (x) => y(x)
  );
  u = I.loadRootOptions, S = I.loadChildrenOptions, L = I.callLoadOptionsProp;
  const { rootOptionsStates: p } = I, A = Xn(
    e,
    d,
    t,
    S
  ), { normalize: O, enhancedNormalizer: N } = A, M = Zn(
    e,
    d,
    v,
    _,
    s.traverseDescendantsBFS,
    N
  ), { selectedNodes: C, single: $, internalValue: w, hasValue: B, getValue: U, fixSelectedNodeIds: le } = M;
  m = () => {
    const x = (P) => {
      s.traverseAllNodesByIndex(d.normalizedOptions, P);
    };
    h.buildForestState(
      e,
      C.value,
      x,
      _
    );
  };
  const rt = (x) => {
    d.selectedNodeIds.forEach((P) => {
      x[P] && (d.nodeMap[P] = {
        ...x[P],
        isFallbackNode: !0
      });
    });
  }, ae = () => (e.async, null);
  D = () => {
    const x = e.async ? ae() || [] : e.options || [];
    if (Array.isArray(x)) {
      const P = d.nodeMap;
      d.nodeMap = ee(), rt(P), d.normalizedOptions = O(se, x, P), le(w.value, m);
    } else
      d.normalizedOptions = [];
  };
  const ie = ur(
    e,
    i,
    L,
    D,
    (x) => y(x)
  ), { handleRemoteSearch: Te } = ie, fe = sr(
    e,
    i,
    (x) => {
      s.traverseAllNodesDFS(d.normalizedOptions, x);
    },
    (x) => y(x)
  ), { handleLocalSearch: ot } = fe, an = (x) => {
    s.traverseAllNodesByIndex(d.normalizedOptions, x);
  }, F = tr(
    e,
    n,
    d,
    fe.localSearch,
    v,
    an,
    U,
    t.value,
    f,
    u,
    S,
    r,
    l
  );
  y = F.resetHighlightedOptionWhenNecessary;
  const he = er(
    e,
    n,
    d,
    v,
    _,
    s.traverseDescendantsBFS,
    s.traverseDescendantsDFS,
    m,
    f,
    F.closeMenu,
    () => B.value,
    () => w.value,
    () => $.value,
    t.value,
    fe.localSearch
  );
  return W(() => e.alwaysOpen, (x) => {
    x ? F.openMenu() : F.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    D();
  }), W(() => e.disabled, (x) => {
    x && F.menu.isOpen ? F.closeMenu() : !x && !F.menu.isOpen && e.alwaysOpen && F.openMenu();
  }), W(() => e.flat, () => {
    D();
  }), W(w, (x, P) => {
    Je(x, P) && n("update:modelValue", U(), t.value);
  }), W(() => e.matchKeys, () => {
    D();
  }), W(() => e.multiple, (x) => {
    x && m();
  }), W(() => e.options, () => {
    e.async || (D(), p.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => i.searchQuery, () => {
    e.async ? Te() : ot(), n("search-change", i.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const x = c();
    Je(x, w.value) && le(x, m);
  }), Oe(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && u(), e.alwaysOpen && F.openMenu(), e.async && e.defaultOptions && Te();
  }), be(() => {
    l(!1);
  }), {
    // State
    forest: pe(() => d),
    trigger: i,
    menu: pe(() => F.menu),
    localSearch: pe(() => fe.localSearch),
    remoteSearch: pe(() => ie.remoteSearch),
    rootOptionsStates: p,
    // Computed
    selectedNodes: C,
    single: $,
    internalValue: w,
    hasValue: B,
    visibleOptionIds: F.visibleOptionIds,
    hasVisibleOptions: F.hasVisibleOptions,
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
    handleLocalSearch: ot,
    handleRemoteSearch: Te,
    resetSearchQuery: f,
    // Async
    loadRootOptions: u,
    loadChildrenOptions: S,
    // Helpers
    initialize: D,
    buildForestState: m,
    resetFlags: he.resetFlags,
    // DOM helpers
    getMenu: r,
    getControl: o
  };
}
const pr = ["name", "value"], mr = /* @__PURE__ */ K({
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
    return (o, l) => (g(!0), k(re, null, ue(r.value, (i, f) => (g(), k("input", {
      key: `hidden-field-${f}`,
      type: "hidden",
      name: R(n).name,
      value: i
    }, null, 8, pr))), 128));
  }
}), _r = {
  key: 0,
  class: "vue-treeselect__input-container"
}, gr = ["tabindex", "required"], yr = ["tabindex"], tn = /* @__PURE__ */ K({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = Z("treeselect"), r = te(), o = te(), l = te(Rt), i = te(""), f = T(() => t.searchable), a = T(() => t.disabled), c = T(() => t.multiple), s = T(() => t.tabIndex), h = T(() => t.required), d = T(() => t.hasValue.value), _ = T(() => f.value && !a.value && c.value), v = T(() => ({
      width: _.value ? `${l.value}px` : void 0
    })), b = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], E = () => {
      o.value && (l.value = Math.max(
        Rt,
        o.value.scrollWidth + 15
      ));
    }, S = () => {
      t.trigger.searchQuery = i.value;
    }, y = () => {
      i.value = "", S();
    }, u = () => {
      !a.value && r.value && r.value.focus();
    }, L = () => {
      r.value && r.value.blur();
    }, D = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, m = () => {
      const N = t.getMenu?.();
      if (N && document.activeElement === N)
        return u();
      t.trigger.isFocused = !1, t.closeMenu();
    }, I = Ln(
      S,
      Un,
      { leading: !0, trailing: !0 }
    ), p = () => {
      i.value ? I() : (I.cancel(), S());
    }, A = (N) => {
      const M = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Xt(b, M))
          return N.preventDefault(), t.openMenu();
        switch (M) {
          case q.BACKSPACE: {
            t.backspaceRemoves && !i.value.length && t.removeLastValue();
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
            i.value.length ? y() : t.menu.value.isOpen && t.closeMenu();
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
            const $ = t.getNode(C);
            $ && ($.isBranch && t.shouldExpand($) ? (N.preventDefault(), t.toggleExpanded($)) : !$.isRootNode && ($.isLeaf || $.isBranch && !t.shouldExpand($)) && (N.preventDefault(), t.setCurrentHighlightedOption($.parentNode)));
            break;
          }
          case q.ARROW_UP: {
            N.preventDefault(), t.highlightPrevOption();
            break;
          }
          case q.ARROW_RIGHT: {
            const C = t.menu.value.current;
            if (C === null) break;
            const $ = t.getNode(C);
            $ && $.isBranch && !t.shouldExpand($) && (N.preventDefault(), t.toggleExpanded($));
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
    }, O = (N) => {
      i.value.length && N.stopPropagation();
    };
    return W(() => t.trigger.searchQuery, (N) => {
      i.value = N;
    }), W(i, () => {
      _.value && ne(E);
    }), n({
      clear: y,
      focus: u,
      blur: L
    }), (N, M) => f.value && !a.value ? (g(), k("div", _r, [
      un(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: s.value,
        required: h.value && !d.value,
        "onUpdate:modelValue": M[0] || (M[0] = (C) => i.value = C),
        style: Ge(v.value),
        onFocus: D,
        onInput: p,
        onBlur: m,
        onKeydown: A,
        onMousedown: O
      }, null, 44, gr), [
        [cn, i.value]
      ]),
      _.value ? (g(), k("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, H(i.value), 513)) : Y("", !0)
    ])) : (g(), k("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: a.value ? void 0 : s.value,
      onFocus: D,
      onBlur: m,
      onKeydown: A
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
    return (r, o) => (g(), k("div", {
      class: G(t.value)
    }, H(R(n).placeholder), 3));
  }
}), Or = {
  key: 0,
  class: "vue-treeselect__single-value"
}, br = /* @__PURE__ */ K({
  __name: "SingleValue",
  setup(e) {
    const n = Z("treeselect"), t = Ze(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), o = T(() => n.selectedNodes.value[0]), l = T(() => t["value-label"]);
    return (i, f) => (g(), k(re, null, [
      r.value ? (g(), k("div", Or, [
        l.value ? (g(), V(et(l.value), {
          key: 0,
          node: o.value
        }, null, 8, ["node"])) : (g(), k(re, { key: 1 }, [
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
function Nr(e, n, t, r, o, l) {
  return g(), k("svg", Er, [...n[0] || (n[0] = [
    z("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const on = /* @__PURE__ */ rn(Sr, [["render", Nr]]), wr = { class: "vue-treeselect__multi-value-item-container" }, Tr = {
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
    })), l = T(() => t["value-label"]), i = oe(function() {
      r.select(n.node);
    });
    return (f, a) => (g(), k("div", wr, [
      z("div", {
        class: G(o.value),
        onMousedown: a[0] || (a[0] = //@ts-ignore
        (...c) => R(i) && R(i)(...c))
      }, [
        l.value ? (g(), V(et(l.value), {
          key: 0,
          node: e.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (g(), k("span", Tr, H(e.node.label), 1)),
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
    const n = Z("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((l) => l !== null)), r = T(() => n.internalValue.value.length > n.limit), o = T(() => {
      const l = n.internalValue.value.length - n.limit;
      return n.limitText(l);
    });
    return (l, i) => (g(), V(dn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (g(!0), k(re, null, ue(t.value, (f) => (g(), V(Rr, {
          key: `multi-value-item-${f.id}`,
          node: f
        }, null, 8, ["node"]))), 128)),
        r.value ? (g(), k("div", Lr, [
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
}, Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Ir(e, n, t, r, o, l) {
  return g(), k("svg", Mr, [...n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const sn = /* @__PURE__ */ rn(Ar, [["render", Ir]]), kr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Br = ["title"], $r = /* @__PURE__ */ K({
  __name: "Control",
  setup(e) {
    const n = Z("treeselect"), t = Z("instance"), r = T(() => n.single.value), o = T(() => n.hasValue.value && n.internalValue.value.some((h) => {
      const d = n.getNode(h);
      return d && !d.isDisabled;
    })), l = T(() => n.clearable && !n.disabled && n.hasValue.value && (o.value || n.allowClearingDisabled)), i = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), f = T(() => n.multiple ? n.clearAllText : n.clearValueText), a = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), c = oe(function(h) {
      h.stopPropagation(), h.preventDefault();
      const d = n.beforeClearAll(), _ = (v) => {
        v && n.clear();
      };
      Gt(d) ? d.then((v) => _(v)) : setTimeout(() => _(d), 0);
    }), s = oe(function(h) {
      h.preventDefault(), h.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (h, d) => (g(), k("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: d[2] || (d[2] = //@ts-ignore
      (..._) => R(t).handleMouseDown && R(t).handleMouseDown(..._))
    }, [
      z("div", kr, [
        r.value ? (g(), V(br, { key: 0 })) : (g(), V(Dr, { key: 1 }))
      ], 512),
      l.value ? (g(), k("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: f.value,
        onMousedown: d[0] || (d[0] = //@ts-ignore
        (..._) => R(c) && R(c)(..._))
      }, [
        X(on, { class: "vue-treeselect__x" })
      ], 40, Br)) : Y("", !0),
      i.value ? (g(), k("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: d[1] || (d[1] = //@ts-ignore
        (..._) => R(s) && R(s)(..._))
      }, [
        X(sn, {
          class: G(a.value)
        }, null, 8, ["class"])
      ], 32)) : Y("", !0)
    ], 544));
  }
}), Fr = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ K({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (g(), k("div", {
      class: G(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      z("div", Fr, [
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
}), Vr = ["data-id"], Hr = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, zr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Pr = {
  key: 0,
  class: "vue-treeselect__list"
}, qr = ["title"], Ft = "vue-treeselect__label", Vt = "vue-treeselect__count", Ht = /* @__PURE__ */ K({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), l = T(() => n.node.isBranch && r.shouldExpand(n.node)), i = T(() => r.shouldShowOptionInMenu(n.node)), f = T(() => !r.shouldFlattenOptions || !i.value), a = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !i.value
    })), c = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": l.value
    })), s = T(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), h = T(() => {
      const I = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": I === Zt,
        "vue-treeselect__checkbox--indeterminate": I === Jt,
        "vue-treeselect__checkbox--unchecked": I === nt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), d = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), _ = T(() => d.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), v = T(() => t["option-label"]), b = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), E = T(() => n.node.childrenStates?.isLoaded && (!n.node.children || n.node.children.length === 0)), S = T(() => n.node.childrenStates?.isLoading || !1), y = T(() => !!n.node.childrenStates?.loadingError), u = (I) => {
      I.target === I.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, L = oe(function() {
      r.toggleExpanded(n.node);
    }), D = oe(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), m = oe(function() {
      r.loadChildrenOptions(n.node);
    });
    return (I, p) => {
      const A = fn("Option", !0);
      return g(), k("div", {
        class: G(o.value)
      }, [
        z("div", {
          class: G(a.value),
          "data-id": e.node.id,
          onMouseenter: u
        }, [
          e.node.isBranch && f.value ? (g(), k("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: p[0] || (p[0] = //@ts-ignore
            (...O) => R(L) && R(L)(...O))
          }, [
            X(Xe, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: j(() => [
                X(sn, {
                  class: G(c.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : R(r).hasBranchNodes && f.value ? (g(), k("div", Hr, "   ")) : Y("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: p[1] || (p[1] = //@ts-ignore
            (...O) => R(D) && R(D)(...O))
          }, [
            s.value ? (g(), k("div", zr, [
              z("span", {
                class: G(h.value)
              }, [...p[3] || (p[3] = [
                z("span", { class: "vue-treeselect__check-mark" }, null, -1),
                z("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ])], 2)
            ])) : Y("", !0),
            v.value ? (g(), V(et(v.value), {
              key: 1,
              node: e.node,
              shouldShowCount: d.value,
              count: _.value,
              labelClassName: Ft,
              countClassName: Vt
            }, null, 8, ["node", "shouldShowCount", "count"])) : (g(), k("label", {
              key: 2,
              class: G(Ft)
            }, [
              Q(H(e.node.label) + " ", 1),
              d.value ? (g(), k("span", {
                key: 0,
                class: G(Vt)
              }, " (" + H(_.value) + ") ", 1)) : Y("", !0)
            ]))
          ], 32)
        ], 42, Vr),
        e.node.isBranch ? (g(), V(Xe, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: j(() => [
            l.value ? (g(), k("div", Pr, [
              (g(!0), k(re, null, ue(b.value, (O) => (g(), V(A, {
                key: O.id,
                node: O
              }, null, 8, ["node"]))), 128)),
              E.value ? (g(), V(J, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(r).noChildrenText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              S.value ? (g(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(r).loadingText), 1)
                ]),
                _: 1
              })) : Y("", !0),
              y.value ? (g(), V(J, {
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
                    (...O) => R(m) && R(m)(...O))
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
    const l = (u) => {
      console.log("[Menu handleMenuMouseDown]", u.target), t.handleMouseDown && t.handleMouseDown(u);
    }, i = T(() => ({
      maxHeight: t.maxHeight + "px"
    })), f = T(() => ({
      zIndex: t.appendToBody ? null : t.zIndex
    })), a = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), c = T(() => t.getRemoteSearchEntry()), s = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), h = T(() => {
      if (s.value) return !1;
      const u = c.value;
      return u.isLoaded && u.options.length === 0;
    }), d = () => {
      if (!t.menu.value.isOpen) return;
      const u = t.getMenu(), L = t.getControl();
      if (!u || !L) return;
      const D = u.getBoundingClientRect(), m = L.getBoundingClientRect(), I = D.height, p = window.innerHeight, A = m.top, O = window.innerHeight - m.bottom, N = m.top >= 0 && m.top <= p || m.top < 0 && m.bottom > 0, M = O > I + Lt, C = A > I + Lt;
      N ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : M || !C ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, _ = () => {
      const u = t.getMenu();
      r || !u || (r = {
        remove: Ut(u, d)
      });
    }, v = () => {
      const u = t.getControl();
      o || !u || (o = {
        remove: Qt(u, d)
      });
    }, b = () => {
      r && (r.remove(), r = null);
    }, E = () => {
      o && (o.remove(), o = null);
    }, S = () => {
      d(), _(), v();
    }, y = () => {
      b(), E();
    };
    return W(
      () => t.menu.value.isOpen,
      (u) => {
        u ? ne(S) : y();
      }
    ), Oe(() => {
      t.menu.value.isOpen && ne(S);
    }), be(() => {
      y();
    }), (u, L) => (g(), k("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Ge(f.value)
    }, [
      X(Xe, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          R(t).menu.value.isOpen ? (g(), k("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Ge(i.value),
            onMousedown: l
          }, [
            Ke(u.$slots, "before-list"),
            R(t).async ? (g(), k(re, { key: 0 }, [
              s.value ? (g(), V(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).searchPromptText), 1)
                ]),
                _: 1
              })) : c.value.isLoading ? (g(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(t).loadingText), 1)
                ]),
                _: 1
              })) : c.value.loadingError ? (g(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(c.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: R(t).retryTitle,
                    onClick: L[0] || (L[0] = //@ts-ignore
                    (...D) => R(t).handleRemoteSearch && R(t).handleRemoteSearch(...D))
                  }, H(R(t).retryText), 9, Wr)
                ]),
                _: 1
              })) : h.value ? (g(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noResultsText), 1)
                ]),
                _: 1
              })) : (g(), k("div", jr, [
                (g(!0), k(re, null, ue(R(t).forest.value.normalizedOptions, (D) => (g(), V(Ht, {
                  key: D.id,
                  node: D
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (g(), k(re, { key: 1 }, [
              R(t).rootOptionsStates.isLoading ? (g(), V(J, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(R(t).loadingText), 1)
                ]),
                _: 1
              })) : R(t).rootOptionsStates.loadingError ? (g(), V(J, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(R(t).rootOptionsStates.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: R(t).retryTitle,
                    onClick: L[1] || (L[1] = //@ts-ignore
                    (...D) => R(t).loadRootOptions && R(t).loadRootOptions(...D))
                  }, H(R(t).retryText), 9, Yr)
                ]),
                _: 1
              })) : a.value ? (g(), V(J, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noOptionsText), 1)
                ]),
                _: 1
              })) : R(t).localSearch.value.active && R(t).localSearch.value.noResults ? (g(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(R(t).noResultsText), 1)
                ]),
                _: 1
              })) : (g(), k("div", Ur, [
                (g(!0), k(re, null, ue(R(t).forest.value.normalizedOptions, (D) => (g(), V(Ht, {
                  key: D.id,
                  node: D
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            Ke(u.$slots, "after-list")
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
        let a = null, c = null, s = null;
        const h = () => {
          if (!s) return;
          const u = f.getControl();
          if (!u) return;
          const L = u.getBoundingClientRect();
          s.style.width = L.width + "px";
        }, d = () => {
          if (!s) return;
          const u = f.getControl();
          if (!u) return;
          const L = s.querySelector(".vue-treeselect__menu-container");
          if (!L) return;
          const D = u.getBoundingClientRect(), m = s.getBoundingClientRect(), I = f.menu.value.placement === "bottom" ? D.height : 0, p = Math.round(D.left - m.left) + "px", A = Math.round(D.top - m.top + I) + "px", N = tt(["transform", "webkitTransform", "MozTransform", "msTransform"], (M) => M in document.body.style);
          N && (L.style[N] = `translate(${p}, ${A})`);
        }, _ = () => {
          const u = f.getControl();
          a || !u || (a = {
            remove: Qt(u, d)
          });
        }, v = () => {
          const u = f.getControl();
          c || !u || (c = {
            remove: Ut(u, () => {
              h(), d();
            })
          });
        }, b = () => {
          a && (a.remove(), a = null);
        }, E = () => {
          c && (c.remove(), c = null);
        }, S = () => {
          h(), d(), _(), v();
        }, y = () => {
          b(), E();
        };
        return W(
          () => f.menu.value.isOpen,
          (u) => {
            u ? ne(S) : y();
          }
        ), W(
          () => f.menu.value.placement,
          () => {
            d();
          }
        ), Oe(() => {
          s = document.body.lastElementChild, f.menu.value.isOpen && ne(S);
        }), be(() => {
          y();
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
    const l = () => {
      const f = document.createElement("div");
      document.body.appendChild(f), o = f;
      const a = t(n);
      r = hn(a), r.provide("treeselect", n), r.mount(f);
    }, i = () => {
      r && o && (o.parentNode?.removeChild(o), r.unmount(), r = null, o = null);
    };
    return Oe(() => {
      l();
    }), be(() => {
      i();
    }), (f, a) => (g(), k("div", Qr));
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
    const r = e, o = t, l = te(), i = te(), f = te(), a = te(), c = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
      set: () => {
      }
    }), s = () => {
      if (r.appendToBody) {
        const m = document.body.querySelector(".vue-treeselect__menu");
        return m && m.nodeName !== "#comment" ? m : null;
      } else {
        const m = f.value?.$refs?.menu || f.value?.$refs?.["menu-container"]?.querySelector(".vue-treeselect__menu");
        return m && m.nodeName !== "#comment" ? m : null;
      }
    }, h = () => {
      const m = i.value?.$el;
      return m && m.nodeName !== "#comment" ? m : null;
    }, d = () => i.value?.$refs?.["value-container"], _ = () => {
      const m = d();
      return m && m.$refs ? m.$refs.input : i.value?.$el?.querySelector(".vue-treeselect__input");
    }, v = () => {
      _()?.focus();
    }, b = () => {
      _()?.blur();
    }, E = (m) => {
      m ? document.addEventListener("mousedown", S, !1) : document.removeEventListener("mousedown", S, !1);
    }, S = (m) => {
      const I = s(), p = I?.contains(m.target), A = l.value?.contains(m.target);
      if (console.log("[handleClickOutside]", {
        target: m.target,
        clickedInWrapper: A,
        clickedInMenu: p,
        menuExists: !!I,
        menuIsOpen: u.menu.value.isOpen,
        appendToBody: r.appendToBody
      }), l.value && !A) {
        if (p) {
          console.log("[handleClickOutside] Click inside menu, not closing");
          return;
        }
        console.log("[handleClickOutside] Closing menu"), b(), u.closeMenu();
      }
    }, y = oe(function(m) {
      if (m.preventDefault(), m.stopPropagation(), r.disabled) return;
      const I = d();
      (I?.$el || I)?.contains(m.target) && !u.menu.value.isOpen && (r.openOnClick || u.trigger.isFocused) && u.openMenu(), (u.resetFlags ? u.resetFlags() : !1) ? b() : v();
    }), u = vr(
      r,
      o,
      c,
      s,
      h,
      E
    ), L = T(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": u.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": u.trigger.isFocused,
      "vue-treeselect--has-value": u.hasValue.value,
      "vue-treeselect--open": u.menu.value.isOpen,
      "vue-treeselect--open-above": u.menu.value.placement === "top",
      "vue-treeselect--open-below": u.menu.value.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
    }));
    return Object.keys(r).forEach((m) => {
      Object.defineProperty(u, m, {
        get() {
          return r[m];
        }
      });
    }), Object.defineProperties(u, {
      wrapperClass: {
        get() {
          return L.value;
        }
      },
      getInstanceId: {
        value: () => c.value
      }
    }), at("treeselect", u), at("instance", {
      getInput: _,
      focusInput: v,
      blurInput: b,
      getValueContainer: d,
      handleMouseDown: y
    }), n({
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
      focusInput: v,
      blurInput: b
    }), (m, I) => (g(), k("div", {
      ref_key: "wrapper",
      ref: l,
      class: G(L.value)
    }, [
      X(mr),
      X($r, {
        ref_key: "control",
        ref: i
      }, null, 512),
      e.appendToBody ? (g(), V(Gr, {
        key: 0,
        ref_key: "portal",
        ref: a
      }, null, 512)) : (g(), V(ln, {
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
