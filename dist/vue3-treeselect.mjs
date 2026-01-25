import { reactive as ce, computed as T, nextTick as ne, ref as te, watch as W, onMounted as Oe, onUnmounted as be, toRef as pe, defineComponent as K, inject as Z, openBlock as g, createElementBlock as I, Fragment as re, renderList as ue, unref as L, withDirectives as un, createElementVNode as z, normalizeStyle as Ge, vModelText as cn, toDisplayString as H, createCommentVNode as Y, normalizeClass as G, useSlots as Ze, createBlock as V, resolveDynamicComponent as et, createTextVNode as Q, createVNode as X, TransitionGroup as dn, withCtx as j, renderSlot as Ke, resolveComponent as fn, Transition as Xe, createApp as hn, h as st, provide as at } from "vue";
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
  function a(i) {
    var u = t.call(i, o), s = i[o];
    try {
      i[o] = void 0;
      var c = !0;
    } catch {
    }
    var l = r.call(i);
    return c && (u ? i[o] = s : delete i[o]), l;
  }
  return Be = a, Be;
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
var $e, gt;
function Nn() {
  if (gt) return $e;
  gt = 1;
  var e = qt(), n = Sn(), t = En(), r = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(u) {
    return u == null ? u === void 0 ? o : r : a && a in Object(u) ? n(u) : t(u);
  }
  return $e = i, $e;
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
  var e = bn(), n = zt(), t = Tn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, u = parseInt;
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
    var h = a.test(c);
    return h || i.test(c) ? u(c.slice(2), h ? 2 : 8) : o.test(c) ? r : +c;
  }
  return ze = s, ze;
}
var Pe, St;
function xn() {
  if (St) return Pe;
  St = 1;
  var e = zt(), n = yn(), t = Wt(), r = "Expected a function", o = Math.max, a = Math.min;
  function i(u, s, c) {
    var l, h, d, _, v, b, E = 0, S = !1, m = !1, f = !0;
    if (typeof u != "function")
      throw new TypeError(r);
    s = t(s) || 0, e(c) && (S = !!c.leading, m = "maxWait" in c, d = m ? o(t(c.maxWait) || 0, s) : d, f = "trailing" in c ? !!c.trailing : f);
    function R(D) {
      var F = l, w = h;
      return l = h = void 0, E = D, _ = u.apply(w, F), _;
    }
    function M(D) {
      return E = D, v = setTimeout(p, s), S ? R(D) : _;
    }
    function y(D) {
      var F = D - b, w = D - E, B = s - F;
      return m ? a(B, d - w) : B;
    }
    function k(D) {
      var F = D - b, w = D - E;
      return b === void 0 || F >= s || F < 0 || m && w >= d;
    }
    function p() {
      var D = n();
      if (k(D))
        return A(D);
      v = setTimeout(p, y(D));
    }
    function A(D) {
      return v = void 0, f && l ? R(D) : (l = h = void 0, _);
    }
    function O() {
      v !== void 0 && clearTimeout(v), E = 0, l = b = h = v = void 0;
    }
    function N() {
      return v === void 0 ? _ : A(n());
    }
    function C() {
      var D = n(), F = k(D);
      if (l = arguments, h = this, b = D, F) {
        if (v === void 0)
          return M(b);
        if (m)
          return clearTimeout(v), v = setTimeout(p, s), R(b);
      }
      return v === void 0 && (v = setTimeout(p, s)), _;
    }
    return C.cancel = O, C.flush = N, C;
  }
  return Pe = i, Pe;
}
var Rn = xn();
const Ln = /* @__PURE__ */ de(Rn);
var Cn = (function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), a = r.appendChild(document.createElement("_")), i = void 0, u = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", e.appendChild(t), s(), l;
  function s() {
    c();
    var h = e.offsetWidth, d = e.offsetHeight;
    (h !== i || d !== u) && (i = h, u = d, o.style.width = h * 2 + "px", o.style.height = d * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: h, height: d })), r.addEventListener("scroll", s), t.addEventListener("scroll", s);
  }
  function c() {
    r.removeEventListener("scroll", s), t.removeEventListener("scroll", s);
  }
  function l() {
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
function In() {
  ge && (clearInterval(ge), ge = null);
}
function Yt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, a = n.offsetWidth, i = n.offsetHeight;
  (r !== a || o !== i) && (e.lastWidth = a, e.lastHeight = i, t({ width: a, height: i }));
}
function Mn(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    jt(ye, t), ye.length || In();
  };
  return ye.push(t), Yt(t), An(), r;
}
function Ut(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const i = (t ? Mn : Cn)(e, (...u) => {
    r || n(...u);
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
function Fn(e) {
  return e !== e;
}
function Gt(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var qe, Et;
function $n() {
  if (Et) return qe;
  Et = 1;
  var e = Wt(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var a = o < 0 ? -1 : 1;
      return a * t;
    }
    return o === o ? o : 0;
  }
  return qe = r, qe;
}
var We, Nt;
function Vn() {
  if (Nt) return We;
  Nt = 1;
  var e = $n();
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
    var a;
    if (typeof o != "function")
      throw new TypeError(n);
    return r = e(r), function() {
      return --r > 0 && (a = o.apply(this, arguments)), r <= 1 && (o = void 0), a;
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
        u.children && u.children.forEach((s) => {
          a(s) !== !1 && s.isBranch && s.children && i(s);
        });
      };
      i({ children: o });
    }
  };
}
const le = null, nt = 0, Jt = 1, Zt = 2, Se = "ALL_CHILDREN", Ee = "ALL_DESCENDANTS", Ne = "LEAF_CHILDREN", we = "LEAF_DESCENDANTS", Jr = "LOAD_ROOT_OPTIONS", Zr = "LOAD_CHILDREN_OPTIONS", eo = "ASYNC_SEARCH", to = "ALL", no = "BRANCH_PRIORITY", ro = "LEAF_PRIORITY", oo = "ALL_WITH_INDETERMINATE", q = {
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
    buildForestState: (o, a, i, u) => {
      const s = ee();
      n.selectedNodeIds.forEach((l) => {
        s[l] = !0;
      }), n.selectedNodeMap = s;
      const c = ee();
      o.multiple && (i((l) => {
        c[l.id] = nt;
      }), a.forEach((l) => {
        c[l.id] = Zt, !o.flat && !o.disableBranchNodes && l.ancestors.forEach((h) => {
          u(h) || (c[h.id] = Jt);
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
  const o = (s) => ({
    ...s,
    ...e.normalizer ? e.normalizer(s, t.value) : {}
  }), a = (s) => {
    _e(
      () => !(s.id in n.nodeMap && !n.nodeMap[s.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(s.id)}. Their labels are "${n.nodeMap[s.id].label}" and "${s.label}" respectively.`
    );
  }, i = (s) => {
    _e(
      () => !(s.children === void 0 && s.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, u = (s, c, l) => {
    let h = c.map((d) => [o(d), d]).map(([d, _], v) => {
      a(d), i(d);
      const { id: b, label: E, children: S, isDefaultExpanded: m } = d, f = s === le, R = f ? 0 : s.level + 1, M = Array.isArray(S) || S === null, y = !M, k = !!d.isDisabled || !e.flat && !f && s.isDisabled, p = !!d.isNew, A = (e.matchKeys || ["label"]).reduce((C, D) => ({
        ...C,
        [D]: Kn(d[D]).toLocaleLowerCase()
      }), {}), O = f ? A.label : s.nestedSearchLabel + " " + A.label;
      n.nodeMap[b] = ee();
      const N = n.nodeMap[b];
      if (Object.assign(N, {
        id: b,
        label: E,
        level: R,
        ancestors: f ? [] : [s].concat(s.ancestors),
        index: (f ? [] : s.index).concat(v),
        parentNode: s,
        lowerCased: A,
        nestedSearchLabel: O,
        isDisabled: k,
        isNew: p,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: M,
        isLeaf: y,
        isRootNode: f,
        raw: _
      }), M) {
        const C = Array.isArray(S);
        Object.assign(N, {
          childrenStates: { ...Gn(), isLoaded: C },
          isExpanded: typeof m == "boolean" ? m : R < (e.defaultExpandLevel || 0),
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
          children: C ? u(N, S, l) : []
        }), m === !0 && N.ancestors.forEach((D) => {
          D.isExpanded = !0;
        }), !C && typeof e.loadOptions != "function" ? _e(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !C && N.isExpanded && r(N);
      }
      if (N.ancestors.forEach((C) => {
        C.count && C.count[Ee]++;
      }), y && N.ancestors.forEach((C) => {
        C.count && C.count[we]++;
      }), !f && s.count && (s.count[Se] += 1, y && (s.count[Ne] += 1), k && (s.hasDisabledDescendants = !0)), l && l[b]) {
        const C = l[b];
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
    const o = e.shift(), a = t(o);
    a && (n.push(o), !a.isRootNode && (a.parentNode.id in r || (r[a.parentNode.id] = a.parentNode.children.length), --r[a.parentNode.id] === 0 && e.push(a.parentNode.id)));
  }
}
function Zn(e, n, t, r, o, a) {
  const i = T(() => n.selectedNodeIds.map((v) => t(v))), u = T(() => !e.multiple), s = T(() => {
    let v;
    if (u.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
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
    else if (e.valueConsistsOf === It) {
      const b = [];
      v = n.selectedNodeIds.slice(), i.value.forEach((E) => {
        E.ancestors.forEach((S) => {
          b.includes(S.id) || v.includes(S.id) || b.push(S.id);
        });
      }), v.push(...b);
    } else
      v = [];
    return e.sortValueBy === "LEVEL" ? v.sort((b, E) => Jn(t(b), t(E))) : e.sortValueBy === "INDEX" && v.sort((b, E) => en(t(b), t(E))), v;
  }), c = T(() => s.value.length > 0);
  return {
    selectedNodes: i,
    single: u,
    internalValue: s,
    hasValue: c,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? s.value.slice() : s.value[0];
      const v = s.value.map((b) => t(b).raw);
      return e.multiple ? v : v[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((v) => a(v)).map((v) => v.id),
    extractNodeFromValue: (v) => {
      const b = { id: v };
      if (e.valueFormat === "id")
        return b;
      const E = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return tt(
        E,
        (m) => m && a(m).id === v
      ) || b;
    },
    fixSelectedNodeIds: (v, b) => {
      let E = [];
      if (u.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
        E = v;
      else if (e.valueConsistsOf === Dt)
        v.forEach((m) => {
          E.push(m);
          const f = t(m);
          f?.isBranch && o(f, (R) => {
            E.push(R.id);
          });
        });
      else if (e.valueConsistsOf === At)
        Mt(v.slice(), E, t);
      else if (e.valueConsistsOf === It) {
        const m = v.filter((f) => {
          const R = t(f);
          return R && (R.isLeaf || R.children.length === 0);
        });
        Mt(m, E, t);
      }
      Je(n.selectedNodeIds, E) && (n.selectedNodeIds = E), b();
    }
  };
}
function er(e, n, t, r, o, a, i, u, s, c, l, h, d, _, v) {
  let b = !1;
  const E = () => {
    const p = b;
    return b = !1, p;
  }, S = (p) => {
    t.selectedNodeIds.push(p.id), t.selectedNodeMap[p.id] = !0;
  }, m = (p) => {
    jt(t.selectedNodeIds, p.id), delete t.selectedNodeMap[p.id];
  }, f = () => {
    l() && (d() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((p) => {
      const A = r(p);
      return A ? A.isDisabled : !1;
    }), u());
  }, R = (p) => {
    if (d() || e.disableBranchNodes)
      return S(p);
    if (e.flat) {
      S(p), e.autoSelectAncestors ? p.ancestors.forEach((O) => {
        !o(O) && !O.isDisabled && S(O);
      }) : e.autoSelectDescendants && a(p, (O) => {
        !o(O) && !O.isDisabled && S(O);
      });
      return;
    }
    const A = p.isLeaf || !p.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (A && S(p), p.isBranch && a(p, (O) => {
      (!O.isDisabled || e.allowSelectingDisabledDescendants) && S(O);
    }), A) {
      let O = p;
      for (; (O = O.parentNode) !== le && (O && O.children.every(o)); )
        S(O);
    }
  }, M = (p) => {
    if (e.disableBranchNodes)
      return m(p);
    if (e.flat) {
      m(p), e.autoDeselectAncestors ? p.ancestors.forEach((O) => {
        o(O) && !O.isDisabled && m(O);
      }) : e.autoDeselectDescendants && a(p, (O) => {
        o(O) && !O.isDisabled && m(O);
      });
      return;
    }
    let A = !1;
    if (p.isBranch && i(p, (O) => {
      (!O.isDisabled || e.allowSelectingDisabledDescendants) && (m(O), A = !0);
    }), p.isLeaf || A || p.isBranch && p.children.length === 0) {
      m(p);
      let O = p;
      for (; (O = O.parentNode) !== le && (O && o(O)); )
        m(O);
    }
  }, y = (p) => {
    if (e.disabled || p.isDisabled)
      return;
    d() && f();
    const A = e.multiple && !e.flat ? t.checkedStateMap[p.id] === nt : !o(p);
    A ? R(p) : M(p), u(), ne(() => {
      n(A ? "select" : "deselect", p.raw, _);
    }), v.active && A && (d() || e.clearOnSelect) && s(), d() && e.closeOnSelect && (c(), e.searchable && (b = !0));
  };
  return {
    select: y,
    clear: f,
    addValue: S,
    removeValue: m,
    removeLastValue: () => {
      if (!l()) return;
      if (d()) return f();
      const p = Kt(h());
      if (!p) return;
      const A = r(p);
      A && y(A);
    },
    resetFlags: E
  };
}
function tr(e, n, t, r, o, a, i, u, s, c, l, h, d) {
  const _ = ce({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), v = (w) => r.active ? w.isExpandedOnSearch || !1 : w.isExpanded || !1, b = (w) => !!(w.isMatched || w.isBranch && w.hasMatchedDescendants && !e.flattenSearchResults || !w.isRootNode && w.parentNode.showAllChildrenOnSearch), E = (w) => !(r.active && !b(w)), S = T(() => {
    const w = [];
    return a((B) => {
      if ((!r.active || b(B)) && w.push(B.id), B.isBranch && !v(B))
        return !1;
    }), w;
  }), m = T(() => S.value.length !== 0), f = (w, B = !0) => {
    const U = _.current;
    if (U != null && U in t.nodeMap && (t.nodeMap[U].isHighlighted = !1), !w) {
      _.current = null;
      return;
    }
    if (_.current = w.id, w.isHighlighted = !0, _.isOpen && B) {
      const se = () => {
        const ae = h();
        if (!ae) return;
        const ie = ae.querySelector(`.vue-treeselect__option[data-id="${w.id}"]`);
        ie && _n(ae, ie);
      };
      h() ? se() : ne(se);
    }
  }, R = () => {
    if (!m.value) return;
    const w = S.value[0], B = o(w);
    B && f(B);
  }, M = () => {
    if (!m.value) return;
    const B = S.value.indexOf(_.current) - 1;
    if (B === -1) return k();
    const U = o(S.value[B]);
    U && f(U);
  }, y = () => {
    if (!m.value) return;
    const B = S.value.indexOf(_.current) + 1;
    if (B === S.value.length) return R();
    const U = o(S.value[B]);
    U && f(U);
  }, k = () => {
    if (!m.value) return;
    const w = Kt(S.value);
    if (!w) return;
    const B = o(w);
    B && f(B);
  }, p = (w = !1) => {
    const { current: B } = _;
    (w || B == null || !(B in t.nodeMap) || !E(o(B))) && R();
  }, A = () => {
    const w = h();
    w && (_.lastScrollPosition = w.scrollTop);
  }, O = () => {
    const w = h();
    w && (w.scrollTop = _.lastScrollPosition);
  }, N = () => {
    !_.isOpen || !e.disabled && e.alwaysOpen || (A(), _.isOpen = !1, d(!1), s(), n("close", i(), u));
  }, C = () => {
    e.disabled || _.isOpen || (_.isOpen = !0, ne(p), ne(O), !e.options && !e.async && c(), d(!0), n("open", u));
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
      let B;
      r.active ? (B = w.isExpandedOnSearch = !w.isExpandedOnSearch, B && (w.showAllChildrenOnSearch = !0)) : B = w.isExpanded = !w.isExpanded, B && !w.childrenStates.isLoaded && l(w);
    },
    setCurrentHighlightedOption: f,
    resetHighlightedOptionWhenNecessary: p,
    highlightFirstOption: R,
    highlightPrevOption: M,
    highlightNextOption: y,
    highlightLastOption: k,
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
    e: for (var a = 0, i = 0; a < o; a++) {
      for (var u = n.charCodeAt(a); i < r; )
        if (t.charCodeAt(i++) === u)
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
      o.active = !0, o.noResults = !0, t((l) => {
        l.isBranch && (l.isExpandedOnSearch = !1, l.showAllChildrenOnSearch = !1, l.isMatched = !1, l.hasMatchedDescendants = !1, o.countMap[l.id] = {
          [Se]: 0,
          [Ee]: 0,
          [Ne]: 0,
          [we]: 0
        });
      });
      const s = i.trim().toLocaleLowerCase(), c = s.replace(/\s+/g, " ").split(" ");
      t((l) => {
        e.searchNested && c.length > 1 ? l.isMatched = c.every(
          (h) => Bt(!1, h, l.nestedSearchLabel)
        ) : l.isMatched = (e.matchKeys || ["label"]).some(
          (h) => Bt(!e.disableFuzzyMatching, s, l.lowerCased[h])
        ), l.isMatched && (o.noResults = !1, l.ancestors.forEach((h) => {
          o.countMap[h.id][Ee]++;
        }), l.isLeaf && l.ancestors.forEach((h) => {
          o.countMap[h.id][we]++;
        }), l.parentNode !== le && (o.countMap[l.parentNode.id][Se] += 1, l.isLeaf && (o.countMap[l.parentNode.id][Ne] += 1))), (l.isMatched || l.isBranch && l.isExpandedOnSearch) && l.parentNode !== le && (l.parentNode.isExpandedOnSearch = !0, l.parentNode.hasMatchedDescendants = !0);
      }), u();
    }
  };
}
const sr = "ASYNC_SEARCH";
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
  const a = te(ee()), i = te(0), u = () => {
    const { searchQuery: c } = n, l = a.value[c] || {
      ...ir(),
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
    return a.value[c] || (a.value[c] = l), l;
  };
  return {
    remoteSearch: a,
    key: i,
    getRemoteSearchEntry: u,
    handleRemoteSearch: () => {
      const { searchQuery: c } = n, l = u(), h = () => {
        r(), o(!0);
      };
      if ((c === "" || e.cacheOptions) && l.isLoaded)
        return h();
      t({
        action: sr,
        args: { searchQuery: c },
        isPending: () => l.isLoading,
        start: () => {
          l.isLoading = !0, l.isLoaded = !1, l.loadingError = "";
        },
        succeed: (d) => {
          l.isLoaded = !0, l.options = d, n.searchQuery === c && h();
        },
        fail: (d) => {
          l.loadingError = ar(d);
        },
        end: () => {
          i.value += 1, l.isLoading = !1;
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
  const o = ce(fr()), a = (s) => {
    const { action: c, args: l, isPending: h, start: d, succeed: _, fail: v, end: b } = s;
    if (!e.loadOptions || h())
      return;
    d();
    const E = qn((m, f) => {
      m ? v(m) : _(f), b();
    }), S = e.loadOptions({
      id: t,
      instanceId: t,
      action: c,
      ...l,
      callback: E
    });
    Gt(S) && S.then(() => {
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
        fail: (s) => {
          o.loadingError = Ft(s);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (s) => {
      const { id: c, raw: l } = s;
      a({
        action: dr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: l
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
          d && (d.childrenStates.loadingError = Ft(h));
        },
        end: () => {
          const h = n(c);
          h && (h.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
function vr(e, n, t, r, o, a) {
  const i = ce({
    isFocused: !1,
    searchQuery: ""
  }), u = () => {
    i.searchQuery = "";
  }, s = (x) => ({
    ...x,
    ...e.normalizer ? e.normalizer(x, t.value) : {}
  }), c = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((x) => s(x)).map((x) => x.id), l = Yn(), h = Qn(c), { forest: d, isSelected: _ } = h, v = (x) => (_e(
    () => x != null,
    () => `Invalid node id: ${x}`
  ), x == null ? null : x in d.nodeMap ? d.nodeMap[x] : b(x)), b = (x) => {
    const P = E(x), ve = s(P).label || `${x} (unknown)`, xe = {
      id: x,
      label: ve,
      ancestors: [],
      parentNode: le,
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
      (lt) => lt && s(lt).id === x
    ) || P;
  };
  let S, m, f, R, M, y;
  const k = hr(
    e,
    v,
    t.value,
    (x) => m(x)
  );
  f = k.loadRootOptions, S = k.loadChildrenOptions, R = k.callLoadOptionsProp;
  const { rootOptionsStates: p } = k, A = Xn(
    e,
    d,
    t,
    S
  ), { normalize: O, enhancedNormalizer: N } = A, C = Zn(
    e,
    d,
    v,
    _,
    l.traverseDescendantsBFS,
    N
  ), { selectedNodes: D, single: F, internalValue: w, hasValue: B, getValue: U, fixSelectedNodeIds: se } = C;
  y = () => {
    const x = (P) => {
      l.traverseAllNodesByIndex(d.normalizedOptions, P);
    };
    h.buildForestState(
      e,
      D.value,
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
  M = () => {
    const x = e.async ? ae() || [] : e.options || [];
    if (Array.isArray(x)) {
      const P = d.nodeMap;
      d.nodeMap = ee(), rt(P), d.normalizedOptions = O(le, x, P), se(w.value, y);
    } else
      d.normalizedOptions = [];
  };
  const ie = ur(
    e,
    i,
    R,
    M,
    (x) => m(x)
  ), { handleRemoteSearch: Te } = ie, fe = lr(
    e,
    i,
    (x) => {
      l.traverseAllNodesDFS(d.normalizedOptions, x);
    },
    (x) => m(x)
  ), { handleLocalSearch: ot } = fe, an = (x) => {
    l.traverseAllNodesByIndex(d.normalizedOptions, x);
  }, $ = tr(
    e,
    n,
    d,
    fe.localSearch,
    v,
    an,
    U,
    t.value,
    u,
    f,
    S,
    r,
    a
  );
  m = $.resetHighlightedOptionWhenNecessary;
  const he = er(
    e,
    n,
    d,
    v,
    _,
    l.traverseDescendantsBFS,
    l.traverseDescendantsDFS,
    y,
    u,
    $.closeMenu,
    () => B.value,
    () => w.value,
    () => F.value,
    t.value,
    fe.localSearch
  );
  return W(() => e.alwaysOpen, (x) => {
    x ? $.openMenu() : $.closeMenu();
  }), W(() => e.branchNodesFirst, () => {
    M();
  }), W(() => e.disabled, (x) => {
    x && $.menu.isOpen ? $.closeMenu() : !x && !$.menu.isOpen && e.alwaysOpen && $.openMenu();
  }), W(() => e.flat, () => {
    M();
  }), W(w, (x, P) => {
    Je(x, P) && n("update:modelValue", U(), t.value);
  }), W(() => e.matchKeys, () => {
    M();
  }), W(() => e.multiple, (x) => {
    x && y();
  }), W(() => e.options, () => {
    e.async || (M(), p.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), W(() => i.searchQuery, () => {
    e.async ? Te() : ot(), n("search-change", i.searchQuery, t.value);
  }), W(() => e.modelValue, () => {
    const x = c();
    Je(x, w.value) && se(x, y);
  }), Oe(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && f(), e.alwaysOpen && $.openMenu(), e.async && e.defaultOptions && Te();
  }), be(() => {
    a(!1);
  }), {
    // State
    forest: pe(() => d),
    trigger: i,
    menu: pe(() => $.menu),
    localSearch: pe(() => fe.localSearch),
    remoteSearch: pe(() => ie.remoteSearch),
    rootOptionsStates: p,
    // Computed
    selectedNodes: D,
    single: F,
    internalValue: w,
    hasValue: B,
    visibleOptionIds: $.visibleOptionIds,
    hasVisibleOptions: $.hasVisibleOptions,
    // Node methods
    getNode: v,
    isSelected: _,
    // Traversal
    traverseDescendantsBFS: l.traverseDescendantsBFS,
    traverseDescendantsDFS: l.traverseDescendantsDFS,
    traverseAllNodesDFS: l.traverseAllNodesDFS,
    traverseAllNodesByIndex: l.traverseAllNodesByIndex,
    // Value
    getValue: U,
    extractCheckedNodeIdsFromValue: c,
    extractNodeFromValue: E,
    fixSelectedNodeIds: se,
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
    handleLocalSearch: ot,
    handleRemoteSearch: Te,
    resetSearchQuery: u,
    // Async
    loadRootOptions: f,
    loadChildrenOptions: S,
    // Helpers
    initialize: M,
    buildForestState: y,
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
      return typeof o == "string" ? o : o != null && !Fn(o) ? JSON.stringify(o) : "";
    }
    const r = T(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let o = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (o = [o.join(n.delimiter)]), o;
    });
    return (o, a) => (g(!0), I(re, null, ue(r.value, (i, u) => (g(), I("input", {
      key: `hidden-field-${u}`,
      type: "hidden",
      name: L(n).name,
      value: i
    }, null, 8, pr))), 128));
  }
}), _r = {
  key: 0,
  class: "vue-treeselect__input-container"
}, gr = ["tabindex", "required"], yr = ["tabindex"], tn = /* @__PURE__ */ K({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = Z("treeselect"), r = te(), o = te(), a = te(Rt), i = te(""), u = T(() => t.searchable), s = T(() => t.disabled), c = T(() => t.multiple), l = T(() => t.tabIndex), h = T(() => t.required), d = T(() => t.hasValue.value), _ = T(() => u.value && !s.value && c.value), v = T(() => ({
      width: _.value ? `${a.value}px` : void 0
    })), b = [
      q.ENTER,
      q.END,
      q.HOME,
      q.ARROW_LEFT,
      q.ARROW_UP,
      q.ARROW_RIGHT,
      q.ARROW_DOWN
    ], E = () => {
      o.value && (a.value = Math.max(
        Rt,
        o.value.scrollWidth + 15
      ));
    }, S = () => {
      t.trigger.searchQuery = i.value;
    }, m = () => {
      i.value = "", S();
    }, f = () => {
      !s.value && r.value && r.value.focus();
    }, R = () => {
      r.value && r.value.blur();
    }, M = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, y = () => {
      const N = t.getMenu?.();
      if (N && document.activeElement === N)
        return f();
      t.trigger.isFocused = !1, t.closeMenu();
    }, k = Ln(
      S,
      Un,
      { leading: !0, trailing: !0 }
    ), p = () => {
      i.value ? k() : (k.cancel(), S());
    }, A = (N) => {
      const C = N.key;
      if (!(N.ctrlKey || N.shiftKey || N.altKey || N.metaKey)) {
        if (!t.menu.value.isOpen && Xt(b, C))
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
    }, O = (N) => {
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
    }), (N, C) => u.value && !s.value ? (g(), I("div", _r, [
      un(z("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: l.value,
        required: h.value && !d.value,
        "onUpdate:modelValue": C[0] || (C[0] = (D) => i.value = D),
        style: Ge(v.value),
        onFocus: M,
        onInput: p,
        onBlur: y,
        onKeydown: A,
        onMousedown: O
      }, null, 44, gr), [
        [cn, i.value]
      ]),
      _.value ? (g(), I("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, H(i.value), 513)) : Y("", !0)
    ])) : (g(), I("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: s.value ? void 0 : l.value,
      onFocus: M,
      onBlur: y,
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
    return (r, o) => (g(), I("div", {
      class: G(t.value)
    }, H(L(n).placeholder), 3));
  }
}), Or = {
  key: 0,
  class: "vue-treeselect__single-value"
}, br = /* @__PURE__ */ K({
  __name: "SingleValue",
  setup(e) {
    const n = Z("treeselect"), t = Ze(), r = T(() => n.hasValue.value && !n.trigger.searchQuery), o = T(() => n.selectedNodes.value[0]), a = T(() => t["value-label"]);
    return (i, u) => (g(), I(re, null, [
      r.value ? (g(), I("div", Or, [
        a.value ? (g(), V(et(a.value), {
          key: 0,
          node: o.value
        }, null, 8, ["node"])) : (g(), I(re, { key: 1 }, [
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
function Nr(e, n, t, r, o, a) {
  return g(), I("svg", Er, [...n[0] || (n[0] = [
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
    })), a = T(() => t["value-label"]), i = oe(function() {
      r.select(n.node);
    });
    return (u, s) => (g(), I("div", wr, [
      z("div", {
        class: G(o.value),
        onMousedown: s[0] || (s[0] = //@ts-ignore
        (...c) => L(i) && L(i)(...c))
      }, [
        a.value ? (g(), V(et(a.value), {
          key: 0,
          node: e.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (g(), I("span", Tr, H(e.node.label), 1)),
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
    const n = Z("treeselect"), t = T(() => n.internalValue.value.slice(0, n.limit).map(n.getNode).filter((a) => a !== null)), r = T(() => n.internalValue.value.length > n.limit), o = T(() => {
      const a = n.internalValue.value.length - n.limit;
      return n.limitText(a);
    });
    return (a, i) => (g(), V(dn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: j(() => [
        (g(!0), I(re, null, ue(t.value, (u) => (g(), V(Rr, {
          key: `multi-value-item-${u.id}`,
          node: u
        }, null, 8, ["node"]))), 128)),
        r.value ? (g(), I("div", Lr, [
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
function Mr(e, n, t, r, o, a) {
  return g(), I("svg", Ir, [...n[0] || (n[0] = [
    z("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const ln = /* @__PURE__ */ rn(Ar, [["render", Mr]]), kr = {
  ref: "value-container",
  class: "vue-treeselect__value-container"
}, Br = ["title"], Fr = /* @__PURE__ */ K({
  __name: "Control",
  setup(e) {
    const n = Z("treeselect"), t = Z("instance"), r = T(() => n.single.value), o = T(() => n.hasValue.value && n.internalValue.value.some((h) => {
      const d = n.getNode(h);
      return d && !d.isDisabled;
    })), a = T(() => n.clearable && !n.disabled && n.hasValue.value && (o.value || n.allowClearingDisabled)), i = T(() => n.alwaysOpen ? !n.menu.value.isOpen : !0), u = T(() => n.multiple ? n.clearAllText : n.clearValueText), s = T(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": n.menu.value.isOpen
    })), c = oe(function(h) {
      h.stopPropagation(), h.preventDefault();
      const d = n.beforeClearAll(), _ = (v) => {
        v && n.clear();
      };
      Gt(d) ? d.then((v) => _(v)) : setTimeout(() => _(d), 0);
    }), l = oe(function(h) {
      h.preventDefault(), h.stopPropagation(), t.focusInput(), n.toggleMenu();
    });
    return (h, d) => (g(), I("div", {
      ref: "control",
      class: "vue-treeselect__control",
      onMousedown: d[2] || (d[2] = //@ts-ignore
      (..._) => L(t).handleMouseDown && L(t).handleMouseDown(..._))
    }, [
      z("div", kr, [
        r.value ? (g(), V(br, { key: 0 })) : (g(), V(Dr, { key: 1 }))
      ], 512),
      a.value ? (g(), I("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: u.value,
        onMousedown: d[0] || (d[0] = //@ts-ignore
        (..._) => L(c) && L(c)(..._))
      }, [
        X(on, { class: "vue-treeselect__x" })
      ], 40, Br)) : Y("", !0),
      i.value ? (g(), I("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: d[1] || (d[1] = //@ts-ignore
        (..._) => L(l) && L(l)(..._))
      }, [
        X(ln, {
          class: G(s.value)
        }, null, 8, ["class"])
      ], 32)) : Y("", !0)
    ], 544));
  }
}), $r = { class: "vue-treeselect__icon-container" }, J = /* @__PURE__ */ K({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (g(), I("div", {
      class: G(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      z("div", $r, [
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
}, qr = ["title"], $t = "vue-treeselect__label", Vt = "vue-treeselect__count", Ht = /* @__PURE__ */ K({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Z("treeselect"), o = T(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), a = T(() => n.node.isBranch && r.shouldExpand(n.node)), i = T(() => r.shouldShowOptionInMenu(n.node)), u = T(() => !r.shouldFlattenOptions || !i.value), s = T(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !i.value
    })), c = T(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": a.value
    })), l = T(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), h = T(() => {
      const k = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": k === Zt,
        "vue-treeselect__checkbox--indeterminate": k === Jt,
        "vue-treeselect__checkbox--unchecked": k === nt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), d = T(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), _ = T(() => d.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), v = T(() => t["option-label"]), b = T(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), E = T(() => n.node.childrenStates?.isLoaded && (!n.node.children || n.node.children.length === 0)), S = T(() => n.node.childrenStates?.isLoading || !1), m = T(() => !!n.node.childrenStates?.loadingError), f = (k) => {
      k.target === k.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, R = oe(function() {
      r.toggleExpanded(n.node);
    }), M = oe(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), y = oe(function() {
      r.loadChildrenOptions(n.node);
    });
    return (k, p) => {
      const A = fn("Option", !0);
      return g(), I("div", {
        class: G(o.value)
      }, [
        z("div", {
          class: G(s.value),
          "data-id": e.node.id,
          onMouseenter: f
        }, [
          e.node.isBranch && u.value ? (g(), I("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: p[0] || (p[0] = //@ts-ignore
            (...O) => L(R) && L(R)(...O))
          }, [
            X(Xe, {
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
          ], 32)) : L(r).hasBranchNodes && u.value ? (g(), I("div", Hr, "   ")) : Y("", !0),
          z("div", {
            class: "vue-treeselect__label-container",
            onMousedown: p[1] || (p[1] = //@ts-ignore
            (...O) => L(M) && L(M)(...O))
          }, [
            l.value ? (g(), I("div", zr, [
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
              labelClassName: $t,
              countClassName: Vt
            }, null, 8, ["node", "shouldShowCount", "count"])) : (g(), I("label", {
              key: 2,
              class: G($t)
            }, [
              Q(H(e.node.label) + " ", 1),
              d.value ? (g(), I("span", {
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
            a.value ? (g(), I("div", Pr, [
              (g(!0), I(re, null, ue(b.value, (O) => (g(), V(A, {
                key: O.id,
                node: O
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
                    (...O) => L(y) && L(y)(...O))
                  }, H(L(r).retryText), 41, qr)
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
}, sn = /* @__PURE__ */ K({
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
    })), u = T(() => t.rootOptionsStates.isLoaded && t.forest.value.normalizedOptions.length === 0), s = T(() => t.getRemoteSearchEntry()), c = T(() => t.trigger.searchQuery === "" && !t.defaultOptions), l = T(() => {
      if (c.value) return !1;
      const m = s.value;
      return m.isLoaded && m.options.length === 0;
    }), h = () => {
      if (!t.menu.value.isOpen) return;
      const m = t.getMenu(), f = t.getControl();
      if (!m || !f) return;
      const R = m.getBoundingClientRect(), M = f.getBoundingClientRect(), y = R.height, k = window.innerHeight, p = M.top, A = window.innerHeight - M.bottom, O = M.top >= 0 && M.top <= k || M.top < 0 && M.bottom > 0, N = A > y + Lt, C = p > y + Lt;
      O ? t.openDirection !== "auto" ? t.menu.value.placement = n[t.openDirection] : N || !C ? t.menu.value.placement = "bottom" : t.menu.value.placement = "top" : t.closeMenu();
    }, d = () => {
      const m = t.getMenu();
      r || !m || (r = {
        remove: Ut(m, h)
      });
    }, _ = () => {
      const m = t.getControl();
      o || !m || (o = {
        remove: Qt(m, h)
      });
    }, v = () => {
      r && (r.remove(), r = null);
    }, b = () => {
      o && (o.remove(), o = null);
    }, E = () => {
      h(), d(), _();
    }, S = () => {
      v(), b();
    };
    return W(
      () => t.menu.value.isOpen,
      (m) => {
        m ? ne(E) : S();
      }
    ), Oe(() => {
      t.menu.value.isOpen && ne(E);
    }), be(() => {
      S();
    }), (m, f) => (g(), I("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Ge(i.value)
    }, [
      X(Xe, { name: "vue-treeselect__menu--transition" }, {
        default: j(() => [
          L(t).menu.value.isOpen ? (g(), I("div", {
            key: 0,
            ref: "menu",
            class: "vue-treeselect__menu",
            style: Ge(a.value),
            onMousedown: f[2] || (f[2] = //@ts-ignore
            (...R) => L(t).handleMouseDown && L(t).handleMouseDown(...R))
          }, [
            Ke(m.$slots, "before-list"),
            L(t).async ? (g(), I(re, { key: 0 }, [
              c.value ? (g(), V(J, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).searchPromptText), 1)
                ]),
                _: 1
              })) : s.value.isLoading ? (g(), V(J, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: j(() => [
                  Q(H(L(t).loadingText), 1)
                ]),
                _: 1
              })) : s.value.loadingError ? (g(), V(J, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: j(() => [
                  Q(H(s.value.loadingError) + " ", 1),
                  z("a", {
                    class: "vue-treeselect__retry",
                    title: L(t).retryTitle,
                    onClick: f[0] || (f[0] = //@ts-ignore
                    (...R) => L(t).handleRemoteSearch && L(t).handleRemoteSearch(...R))
                  }, H(L(t).retryText), 9, Wr)
                ]),
                _: 1
              })) : l.value ? (g(), V(J, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: j(() => [
                  Q(H(L(t).noResultsText), 1)
                ]),
                _: 1
              })) : (g(), I("div", jr, [
                (g(!0), I(re, null, ue(L(t).forest.value.normalizedOptions, (R) => (g(), V(Ht, {
                  key: R.id,
                  node: R
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (g(), I(re, { key: 1 }, [
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
                  }, H(L(t).retryText), 9, Yr)
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
              })) : (g(), I("div", Ur, [
                (g(!0), I(re, null, ue(L(t).forest.value.normalizedOptions, (R) => (g(), V(Ht, {
                  key: R.id,
                  node: R
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            Ke(m.$slots, "after-list")
          ], 36)) : Y("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), Qr = { class: "vue-treeselect__menu-placeholder" }, Gr = /* @__PURE__ */ K({
  __name: "MenuPortal",
  setup(e) {
    const n = Z("treeselect"), t = (u) => K({
      name: "vue-treeselect--portal-target",
      setup() {
        let s = null, c = null, l = null;
        const h = () => {
          if (!l) return;
          const f = u.getControl();
          if (!f) return;
          const R = f.getBoundingClientRect();
          l.style.width = R.width + "px";
        }, d = () => {
          if (!l) return;
          const f = u.getControl();
          if (!f) return;
          const R = l.querySelector(".vue-treeselect__menu-container");
          if (!R) return;
          const M = f.getBoundingClientRect(), y = l.getBoundingClientRect(), k = u.menu.value.placement === "bottom" ? M.height : 0, p = Math.round(M.left - y.left) + "px", A = Math.round(M.top - y.top + k) + "px", N = tt(["transform", "webkitTransform", "MozTransform", "msTransform"], (C) => C in document.body.style);
          N && (R.style[N] = `translate(${p}, ${A})`);
        }, _ = () => {
          const f = u.getControl();
          s || !f || (s = {
            remove: Qt(f, d)
          });
        }, v = () => {
          const f = u.getControl();
          c || !f || (c = {
            remove: Ut(f, () => {
              h(), d();
            })
          });
        }, b = () => {
          s && (s.remove(), s = null);
        }, E = () => {
          c && (c.remove(), c = null);
        }, S = () => {
          h(), d(), _(), v();
        }, m = () => {
          b(), E();
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
        ), Oe(() => {
          l = document.body.lastElementChild, u.menu.value.isOpen && ne(S);
        }), be(() => {
          m();
        }), () => st("div", {
          class: ["vue-treeselect__portal-target", u.wrapperClass],
          style: { zIndex: u.zIndex },
          "data-instance-id": u.getInstanceId()
        }, [
          st(sn)
        ]);
      }
    });
    let r = null, o = null;
    const a = () => {
      const u = document.createElement("div");
      document.body.appendChild(u), o = u;
      const s = t(n);
      r = hn(s), r.provide("treeselect", n), r.mount(u);
    }, i = () => {
      r && o && (o.parentNode?.removeChild(o), r.unmount(), r = null, o = null);
    };
    return Oe(() => {
      a();
    }), be(() => {
      i();
    }), (u, s) => (g(), I("div", Qr));
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
    const r = e, o = t, a = te(), i = te(), u = te(), s = te(), c = T({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
      set: () => {
      }
    }), l = () => {
      if (r.appendToBody) {
        const y = document.body.querySelector(".vue-treeselect__menu");
        return y && y.nodeName !== "#comment" ? y : null;
      } else {
        const y = u.value?.$refs?.menu || u.value?.$refs?.["menu-container"]?.querySelector(".vue-treeselect__menu");
        return y && y.nodeName !== "#comment" ? y : null;
      }
    }, h = () => {
      const y = i.value?.$el;
      return y && y.nodeName !== "#comment" ? y : null;
    }, d = () => i.value?.$refs?.["value-container"], _ = () => {
      const y = d();
      return y && y.$refs ? y.$refs.input : i.value?.$el?.querySelector(".vue-treeselect__input");
    }, v = () => {
      _()?.focus();
    }, b = () => {
      _()?.blur();
    }, E = (y) => {
      y ? document.addEventListener("mousedown", S, !1) : document.removeEventListener("mousedown", S, !1);
    }, S = (y) => {
      a.value && !a.value.contains(y.target) && (b(), f.closeMenu());
    }, m = oe(function(y) {
      if (y.preventDefault(), y.stopPropagation(), r.disabled) return;
      const k = d();
      (k?.$el || k)?.contains(y.target) && !f.menu.value.isOpen && (r.openOnClick || f.trigger.isFocused) && f.openMenu(), (f.resetFlags ? f.resetFlags() : !1) ? b() : v();
    }), f = vr(
      r,
      o,
      c,
      l,
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
    return Object.keys(r).forEach((y) => {
      Object.defineProperty(f, y, {
        get() {
          return r[y];
        }
      });
    }), Object.defineProperties(f, {
      wrapperClass: {
        get() {
          return R.value;
        }
      },
      getInstanceId: {
        value: () => c.value
      }
    }), at("treeselect", f), at("instance", {
      getInput: _,
      focusInput: v,
      blurInput: b,
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
      blurInput: b
    }), (y, k) => (g(), I("div", {
      ref_key: "wrapper",
      ref: a,
      class: G(R.value)
    }, [
      X(mr),
      X(Fr, {
        ref_key: "control",
        ref: i
      }, null, 512),
      e.appendToBody ? (g(), V(Gr, {
        key: 0,
        ref_key: "portal",
        ref: s
      }, null, 512)) : (g(), V(sn, {
        key: 1,
        ref_key: "menu",
        ref: u
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
  lo as Treeselect,
  nt as UNCHECKED,
  lo as default,
  hr as useAsyncOptions,
  Qn as useForestState,
  lr as useLocalSearch,
  tr as useMenu,
  Xn as useNodeNormalization,
  Yn as useNodeTraversal,
  ur as useRemoteSearch,
  er as useSelection,
  vr as useTreeselect,
  Zn as useValue
};
