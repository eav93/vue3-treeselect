import { reactive as ce, computed as x, nextTick as ne, ref as Y, watch as q, onMounted as Oe, onUnmounted as be, toRef as pe, defineComponent as J, inject as Q, openBlock as b, createElementBlock as M, Fragment as re, renderList as ue, unref as L, withDirectives as un, createElementVNode as H, normalizeStyle as Ge, vModelText as cn, toDisplayString as P, createCommentVNode as G, normalizeClass as X, useSlots as Ze, createBlock as $, resolveDynamicComponent as et, createTextVNode as K, createVNode as Z, TransitionGroup as dn, withCtx as U, renderSlot as Ke, resolveComponent as fn, Transition as Xe, createApp as hn, h as st, provide as at } from "vue";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we, it;
function vn() {
  if (it) return we;
  it = 1;
  function e() {
  }
  return we = e, we;
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
function le(e) {
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
function Ht() {
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
function zt() {
  if (dt) return De;
  dt = 1;
  var e = gn(), n = typeof self == "object" && self && self.Object === Object && self, t = e || n || Function("return this")();
  return De = t, De;
}
var Ie, ft;
function yn() {
  if (ft) return Ie;
  ft = 1;
  var e = zt(), n = function() {
    return e.Date.now();
  };
  return Ie = n, Ie;
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
var Ae, vt;
function bn() {
  if (vt) return Ae;
  vt = 1;
  var e = On(), n = /^\s+/;
  function t(r) {
    return r && r.slice(0, e(r) + 1).replace(n, "");
  }
  return Ae = t, Ae;
}
var ke, pt;
function Wt() {
  if (pt) return ke;
  pt = 1;
  var e = zt(), n = e.Symbol;
  return ke = n, ke;
}
var Be, mt;
function En() {
  if (mt) return Be;
  mt = 1;
  var e = Wt(), n = Object.prototype, t = n.hasOwnProperty, r = n.toString, o = e ? e.toStringTag : void 0;
  function l(s) {
    var f = t.call(s, o), i = s[o];
    try {
      s[o] = void 0;
      var d = !0;
    } catch {
    }
    var a = r.call(s);
    return d && (f ? s[o] = i : delete s[o]), a;
  }
  return Be = l, Be;
}
var Fe, _t;
function Sn() {
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
  var e = Wt(), n = En(), t = Sn(), r = "[object Null]", o = "[object Undefined]", l = e ? e.toStringTag : void 0;
  function s(f) {
    return f == null ? f === void 0 ? o : r : l && l in Object(f) ? n(f) : t(f);
  }
  return Ve = s, Ve;
}
var $e, yt;
function Rn() {
  if (yt) return $e;
  yt = 1;
  function e(n) {
    return n != null && typeof n == "object";
  }
  return $e = e, $e;
}
var Pe, Ot;
function xn() {
  if (Ot) return Pe;
  Ot = 1;
  var e = Nn(), n = Rn(), t = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || n(o) && e(o) == t;
  }
  return Pe = r, Pe;
}
var He, bt;
function qt() {
  if (bt) return He;
  bt = 1;
  var e = bn(), n = Ht(), t = xn(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, s = /^0o[0-7]+$/i, f = parseInt;
  function i(d) {
    if (typeof d == "number")
      return d;
    if (t(d))
      return r;
    if (n(d)) {
      var a = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = n(a) ? a + "" : a;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = e(d);
    var c = l.test(d);
    return c || s.test(d) ? f(d.slice(2), c ? 2 : 8) : o.test(d) ? r : +d;
  }
  return He = i, He;
}
var ze, Et;
function Tn() {
  if (Et) return ze;
  Et = 1;
  var e = Ht(), n = yn(), t = qt(), r = "Expected a function", o = Math.max, l = Math.min;
  function s(f, i, d) {
    var a, c, h, O, v, E, y = 0, m = !1, g = !1, p = !0;
    if (typeof f != "function")
      throw new TypeError(r);
    i = t(i) || 0, e(d) && (m = !!d.leading, g = "maxWait" in d, h = g ? o(t(d.maxWait) || 0, i) : h, p = "trailing" in d ? !!d.trailing : p);
    function k(D) {
      var B = a, N = c;
      return a = c = void 0, y = D, O = f.apply(N, B), O;
    }
    function F(D) {
      return y = D, v = setTimeout(u, i), m ? k(D) : O;
    }
    function _(D) {
      var B = D - E, N = D - y, A = i - B;
      return g ? l(A, h - N) : A;
    }
    function C(D) {
      var B = D - E, N = D - y;
      return E === void 0 || B >= i || B < 0 || g && N >= h;
    }
    function u() {
      var D = n();
      if (C(D))
        return w(D);
      v = setTimeout(u, _(D));
    }
    function w(D) {
      return v = void 0, p && a ? k(D) : (a = c = void 0, O);
    }
    function S() {
      v !== void 0 && clearTimeout(v), y = 0, a = E = c = v = void 0;
    }
    function R() {
      return v === void 0 ? O : w(n());
    }
    function I() {
      var D = n(), B = C(D);
      if (a = arguments, c = this, E = D, B) {
        if (v === void 0)
          return F(E);
        if (g)
          return clearTimeout(v), v = setTimeout(u, i), k(E);
      }
      return v === void 0 && (v = setTimeout(u, i)), O;
    }
    return I.cancel = S, I.flush = R, I;
  }
  return ze = s, ze;
}
var wn = Tn();
const Ln = /* @__PURE__ */ de(wn);
var Cn = (function(e, n) {
  var t = document.createElement("_"), r = t.appendChild(document.createElement("_")), o = t.appendChild(document.createElement("_")), l = r.appendChild(document.createElement("_")), s = void 0, f = void 0;
  return r.style.cssText = t.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", l.style.cssText = o.style.cssText = "display:block;height:100%;transition:0s;width:100%", l.style.width = l.style.height = "200%", e.appendChild(t), i(), a;
  function i() {
    d();
    var c = e.offsetWidth, h = e.offsetHeight;
    (c !== s || h !== f) && (s = c, f = h, o.style.width = c * 2 + "px", o.style.height = h * 2 + "px", t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, n({ width: c, height: h })), r.addEventListener("scroll", i), t.addEventListener("scroll", i);
  }
  function d() {
    r.removeEventListener("scroll", i), t.removeEventListener("scroll", i);
  }
  function a() {
    d(), e.removeChild(t);
  }
});
function jt(e, n) {
  const t = e.indexOf(n);
  t !== -1 && e.splice(t, 1);
}
let ge;
const ye = [], Dn = 100;
function In() {
  ge = setInterval(() => {
    ye.forEach(Yt);
  }, Dn);
}
function Mn() {
  ge && (clearInterval(ge), ge = null);
}
function Yt(e) {
  const { $el: n, listener: t, lastWidth: r, lastHeight: o } = e, l = n.offsetWidth, s = n.offsetHeight;
  (r !== l || o !== s) && (e.lastWidth = l, e.lastHeight = s, t({ width: l, height: s }));
}
function An(e, n) {
  const t = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, r = () => {
    jt(ye, t), ye.length || Mn();
  };
  return ye.push(t), Yt(t), In(), r;
}
function Ut(e, n) {
  const t = document.documentMode === 9;
  let r = !0;
  const s = (t ? An : Cn)(e, (...f) => {
    r || n(...f);
  });
  return r = !1, s;
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
var We, St;
function Vn() {
  if (St) return We;
  St = 1;
  var e = qt(), n = 1 / 0, t = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === n || o === -n) {
      var l = o < 0 ? -1 : 1;
      return l * t;
    }
    return o === o ? o : 0;
  }
  return We = r, We;
}
var qe, Nt;
function $n() {
  if (Nt) return qe;
  Nt = 1;
  var e = Vn();
  function n(t) {
    var r = e(t), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return qe = n, qe;
}
var je, Rt;
function Pn() {
  if (Rt) return je;
  Rt = 1;
  var e = $n(), n = "Expected a function";
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
var Ye, xt;
function Hn() {
  if (xt) return Ye;
  xt = 1;
  var e = Pn();
  function n(t) {
    return e(2, t);
  }
  return Ye = n, Ye;
}
var zn = Hn();
const Wn = /* @__PURE__ */ de(zn), te = () => /* @__PURE__ */ Object.create(null);
var Ue, Tt;
function qn() {
  if (Tt) return Ue;
  Tt = 1;
  function e(n) {
    var t = n == null ? 0 : n.length;
    return t ? n[t - 1] : void 0;
  }
  return Ue = e, Ue;
}
var jn = qn();
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
    const s = o.children.slice();
    for (; s.length; ) {
      const f = s[0];
      f.isBranch && s.push(...f.children), l(f), s.shift();
    }
  }, n = (o, l) => {
    o.isBranch && o.children.forEach((s) => {
      n(s, l), l(s);
    });
  };
  return {
    traverseDescendantsBFS: e,
    traverseDescendantsDFS: n,
    traverseAllNodesDFS: (o, l) => {
      o.forEach((s) => {
        n(s, l), l(s);
      });
    },
    traverseAllNodesByIndex: (o, l) => {
      const s = (f) => {
        f.children && f.children.forEach((i) => {
          l(i) !== !1 && i.isBranch && i.children && s(i);
        });
      };
      s({ children: o });
    }
  };
}
const se = null, nt = 0, Jt = 1, Zt = 2, Ee = "ALL_CHILDREN", Se = "ALL_DESCENDANTS", Ne = "LEAF_CHILDREN", Re = "LEAF_DESCENDANTS", Xr = "LOAD_ROOT_OPTIONS", Jr = "LOAD_CHILDREN_OPTIONS", Zr = "ASYNC_SEARCH", eo = "ALL", to = "BRANCH_PRIORITY", no = "LEAF_PRIORITY", ro = "ALL_WITH_INDETERMINATE", W = {
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
), wt = 5, Lt = 40;
function Qn(e) {
  const n = ce({
    normalizedOptions: [],
    nodeMap: te(),
    checkedStateMap: te(),
    selectedNodeIds: e(),
    selectedNodeMap: te()
  });
  return {
    forest: n,
    buildForestState: (o, l, s, f) => {
      const i = te();
      n.selectedNodeIds.forEach((a) => {
        i[a] = !0;
      }), n.selectedNodeMap = i;
      const d = te();
      o.multiple && (s((a) => {
        d[a.id] = nt;
      }), l.forEach((a) => {
        d[a.id] = Zt, !o.flat && !o.disableBranchNodes && a.ancestors.forEach((c) => {
          f(c) || (d[c.id] = Jt);
        });
      })), n.checkedStateMap = d;
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
  const o = (i) => ({
    ...i,
    ...e.normalizer ? e.normalizer(i, t.value) : {}
  }), l = (i) => {
    _e(
      () => !(i.id in n.nodeMap && !n.nodeMap[i.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(i.id)}. Their labels are "${n.nodeMap[i.id].label}" and "${i.label}" respectively.`
    );
  }, s = (i) => {
    _e(
      () => !(i.children === void 0 && i.isBranch === !0),
      () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
    );
  }, f = (i, d, a) => {
    let c = d.map((h) => [o(h), h]).map(([h, O], v) => {
      l(h), s(h);
      const { id: E, label: y, children: m, isDefaultExpanded: g } = h, p = i === se, k = p ? 0 : i.level + 1, F = Array.isArray(m) || m === null, _ = !F, C = !!h.isDisabled || !e.flat && !p && i.isDisabled, u = !!h.isNew, w = (e.matchKeys || ["label"]).reduce((I, D) => ({
        ...I,
        [D]: Kn(h[D]).toLocaleLowerCase()
      }), {}), S = p ? w.label : i.nestedSearchLabel + " " + w.label;
      n.nodeMap[E] = te();
      const R = n.nodeMap[E];
      if (Object.assign(R, {
        id: E,
        label: y,
        level: k,
        ancestors: p ? [] : [i].concat(i.ancestors),
        index: (p ? [] : i.index).concat(v),
        parentNode: i,
        lowerCased: w,
        nestedSearchLabel: S,
        isDisabled: C,
        isNew: u,
        isMatched: !1,
        isHighlighted: !1,
        isBranch: F,
        isLeaf: _,
        isRootNode: p,
        raw: O
      }), F) {
        const I = Array.isArray(m);
        Object.assign(R, {
          childrenStates: { ...Gn(), isLoaded: I },
          isExpanded: typeof g == "boolean" ? g : k < (e.defaultExpandLevel || 0),
          hasMatchedDescendants: !1,
          hasDisabledDescendants: !1,
          isExpandedOnSearch: !1,
          showAllChildrenOnSearch: !1,
          count: {
            [Ee]: 0,
            [Se]: 0,
            [Ne]: 0,
            [Re]: 0
          },
          children: I ? f(R, m, a) : []
        }), g === !0 && R.ancestors.forEach((D) => {
          D.isExpanded = !0;
        }), !I && typeof e.loadOptions != "function" ? _e(
          () => !1,
          () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
        ) : !I && R.isExpanded && r(R);
      }
      if (R.ancestors.forEach((I) => {
        I.count && I.count[Se]++;
      }), _ && R.ancestors.forEach((I) => {
        I.count && I.count[Re]++;
      }), !p && i.count && (i.count[Ee] += 1, _ && (i.count[Ne] += 1), C && (i.hasDisabledDescendants = !0)), a && a[E]) {
        const I = a[E];
        R.isMatched = I.isMatched, R.showAllChildrenOnSearch = I.showAllChildrenOnSearch, R.isHighlighted = I.isHighlighted, I.isBranch && R.isBranch && (R.isExpanded = I.isExpanded, R.isExpandedOnSearch = I.isExpandedOnSearch, I.childrenStates.isLoaded && !R.childrenStates.isLoaded ? R.isExpanded = !1 : R.childrenStates = { ...I.childrenStates });
      }
      return R;
    });
    if (e.branchNodesFirst) {
      const h = c.filter((v) => v.isBranch), O = c.filter((v) => v.isLeaf);
      c = h.concat(O);
    }
    return c;
  };
  return {
    normalize: f,
    enhancedNormalizer: o,
    checkDuplication: l,
    verifyNodeShape: s
  };
}
const Ct = "ALL", Dt = "BRANCH_PRIORITY", It = "LEAF_PRIORITY", Mt = "ALL_WITH_INDETERMINATE";
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
function At(e, n, t) {
  const r = te();
  for (; e.length; ) {
    const o = e.shift(), l = t(o);
    l && (n.push(o), !l.isRootNode && (l.parentNode.id in r || (r[l.parentNode.id] = l.parentNode.children.length), --r[l.parentNode.id] === 0 && e.push(l.parentNode.id)));
  }
}
function Zn(e, n, t, r, o, l) {
  const s = x(() => n.selectedNodeIds.map((v) => t(v))), f = x(() => !e.multiple), i = x(() => {
    let v;
    if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
      v = n.selectedNodeIds.slice();
    else if (e.valueConsistsOf === Dt)
      v = n.selectedNodeIds.filter((E) => {
        const y = t(E);
        return y ? y.isRootNode ? !0 : !r(y.parentNode) : !1;
      });
    else if (e.valueConsistsOf === It)
      v = n.selectedNodeIds.filter((E) => {
        const y = t(E);
        return y ? y.isLeaf ? !0 : y.children.length === 0 : !1;
      });
    else if (e.valueConsistsOf === Mt) {
      const E = [];
      v = n.selectedNodeIds.slice(), s.value.forEach((y) => {
        y.ancestors.forEach((m) => {
          E.includes(m.id) || v.includes(m.id) || E.push(m.id);
        });
      }), v.push(...E);
    } else
      v = [];
    return e.sortValueBy === "LEVEL" ? v.sort((E, y) => Jn(t(E), t(y))) : e.sortValueBy === "INDEX" && v.sort((E, y) => en(t(E), t(y))), v;
  }), d = x(() => i.value.length > 0);
  return {
    selectedNodes: s,
    single: f,
    internalValue: i,
    hasValue: d,
    getValue: () => {
      if (e.valueFormat === "id")
        return e.multiple ? i.value.slice() : i.value[0];
      const v = i.value.map((E) => t(E).raw);
      return e.multiple ? v : v[0];
    },
    extractCheckedNodeIdsFromValue: () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((v) => l(v)).map((v) => v.id),
    extractNodeFromValue: (v) => {
      const E = { id: v };
      if (e.valueFormat === "id")
        return E;
      const y = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
      return tt(
        y,
        (g) => g && l(g).id === v
      ) || E;
    },
    fixSelectedNodeIds: (v, E) => {
      let y = [];
      if (f.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === Ct)
        y = v;
      else if (e.valueConsistsOf === Dt)
        v.forEach((g) => {
          y.push(g);
          const p = t(g);
          p?.isBranch && o(p, (k) => {
            y.push(k.id);
          });
        });
      else if (e.valueConsistsOf === It)
        At(v.slice(), y, t);
      else if (e.valueConsistsOf === Mt) {
        const g = v.filter((p) => {
          const k = t(p);
          return k && (k.isLeaf || k.children.length === 0);
        });
        At(g, y, t);
      }
      Je(n.selectedNodeIds, y) && (n.selectedNodeIds = y), E();
    }
  };
}
function er(e, n, t, r, o, l, s, f, i, d, a, c, h, O, v) {
  let E = !1;
  const y = () => {
    const u = E;
    return E = !1, u;
  }, m = (u) => {
    t.selectedNodeIds.push(u.id), t.selectedNodeMap[u.id] = !0;
  }, g = (u) => {
    jt(t.selectedNodeIds, u.id), delete t.selectedNodeMap[u.id];
  }, p = () => {
    a() && (h() || e.allowClearingDisabled ? t.selectedNodeIds = [] : t.selectedNodeIds = t.selectedNodeIds.filter((u) => {
      const w = r(u);
      return w ? w.isDisabled : !1;
    }), f());
  }, k = (u) => {
    if (h() || e.disableBranchNodes)
      return m(u);
    if (e.flat) {
      m(u), e.autoSelectAncestors ? u.ancestors.forEach((S) => {
        !o(S) && !S.isDisabled && m(S);
      }) : e.autoSelectDescendants && l(u, (S) => {
        !o(S) && !S.isDisabled && m(S);
      });
      return;
    }
    const w = u.isLeaf || !u.hasDisabledDescendants || e.allowSelectingDisabledDescendants;
    if (w && m(u), u.isBranch && l(u, (S) => {
      (!S.isDisabled || e.allowSelectingDisabledDescendants) && m(S);
    }), w) {
      let S = u;
      for (; (S = S.parentNode) !== se && (S && S.children.every(o)); )
        m(S);
    }
  }, F = (u) => {
    if (e.disableBranchNodes)
      return g(u);
    if (e.flat) {
      g(u), e.autoDeselectAncestors ? u.ancestors.forEach((S) => {
        o(S) && !S.isDisabled && g(S);
      }) : e.autoDeselectDescendants && l(u, (S) => {
        o(S) && !S.isDisabled && g(S);
      });
      return;
    }
    let w = !1;
    if (u.isBranch && s(u, (S) => {
      (!S.isDisabled || e.allowSelectingDisabledDescendants) && (g(S), w = !0);
    }), u.isLeaf || w || u.isBranch && u.children.length === 0) {
      g(u);
      let S = u;
      for (; (S = S.parentNode) !== se && (S && o(S)); )
        g(S);
    }
  }, _ = (u) => {
    if (e.disabled || u.isDisabled)
      return;
    h() && p();
    const w = e.multiple && !e.flat ? t.checkedStateMap[u.id] === nt : !o(u);
    w ? k(u) : F(u), f(), ne(() => {
      n(w ? "select" : "deselect", u.raw, O);
    }), v.active && w && (h() || e.clearOnSelect) && i(), h() && e.closeOnSelect && (d(), e.searchable && (E = !0));
  };
  return {
    select: _,
    clear: p,
    addValue: m,
    removeValue: g,
    removeLastValue: () => {
      if (!a()) return;
      if (h()) return p();
      const u = Kt(c());
      if (!u) return;
      const w = r(u);
      w && _(w);
    },
    resetFlags: y
  };
}
function tr(e, n, t, r, o, l, s, f, i, d, a, c, h) {
  const O = ce({
    isOpen: !1,
    current: null,
    lastScrollPosition: 0,
    placement: "bottom"
  }), v = (N) => r.active ? N.isExpandedOnSearch || !1 : N.isExpanded || !1, E = (N) => !!(N.isMatched || N.isBranch && N.hasMatchedDescendants && !e.flattenSearchResults || !N.isRootNode && N.parentNode.showAllChildrenOnSearch), y = (N) => !(r.active && !E(N)), m = x(() => {
    const N = [];
    return l((A) => {
      if ((!r.active || E(A)) && N.push(A.id), A.isBranch && !v(A))
        return !1;
    }), N;
  }), g = x(() => m.value.length !== 0), p = (N, A = !0) => {
    const j = O.current;
    if (j != null && j in t.nodeMap && (t.nodeMap[j].isHighlighted = !1), !N) {
      O.current = null;
      return;
    }
    if (O.current = N.id, N.isHighlighted = !0, O.isOpen && A) {
      const oe = () => {
        const ae = c();
        if (!ae) return;
        const ie = ae.querySelector(`.vue-treeselect__option[data-id="${N.id}"]`);
        ie && _n(ae, ie);
      };
      c() ? oe() : ne(oe);
    }
  }, k = () => {
    if (!g.value) return;
    const N = m.value[0], A = o(N);
    A && p(A);
  }, F = () => {
    if (!g.value) return;
    const A = m.value.indexOf(O.current) - 1;
    if (A === -1) return C();
    const j = o(m.value[A]);
    j && p(j);
  }, _ = () => {
    if (!g.value) return;
    const A = m.value.indexOf(O.current) + 1;
    if (A === m.value.length) return k();
    const j = o(m.value[A]);
    j && p(j);
  }, C = () => {
    if (!g.value) return;
    const N = Kt(m.value);
    if (!N) return;
    const A = o(N);
    A && p(A);
  }, u = (N = !1) => {
    const { current: A } = O;
    (N || A == null || !(A in t.nodeMap) || !y(o(A))) && k();
  }, w = () => {
    const N = c();
    N && (O.lastScrollPosition = N.scrollTop);
  }, S = () => {
    const N = c();
    N && (N.scrollTop = O.lastScrollPosition);
  }, R = () => {
    !O.isOpen || !e.disabled && e.alwaysOpen || (w(), O.isOpen = !1, h(!1), i(), n("close", s(), f));
  }, I = () => {
    e.disabled || O.isOpen || (O.isOpen = !0, ne(u), ne(S), !e.options && !e.async && d(), h(!0), n("open", f));
  };
  return {
    menu: O,
    visibleOptionIds: m,
    hasVisibleOptions: g,
    shouldExpand: v,
    shouldShowOptionInMenu: y,
    openMenu: I,
    closeMenu: R,
    toggleMenu: () => {
      O.isOpen ? R() : I();
    },
    toggleExpanded: (N) => {
      let A;
      r.active ? (A = N.isExpandedOnSearch = !N.isExpandedOnSearch, A && (N.showAllChildrenOnSearch = !0)) : A = N.isExpanded = !N.isExpanded, A && !N.childrenStates.isLoaded && a(N);
    },
    setCurrentHighlightedOption: p,
    resetHighlightedOptionWhenNecessary: u,
    highlightFirstOption: k,
    highlightPrevOption: F,
    highlightNextOption: _,
    highlightLastOption: C,
    saveMenuScrollPosition: w,
    restoreMenuScrollPosition: S
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
    e: for (var l = 0, s = 0; l < o; l++) {
      for (var f = n.charCodeAt(l); s < r; )
        if (t.charCodeAt(s++) === f)
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
    countMap: te()
  });
  return {
    localSearch: o,
    handleLocalSearch: () => {
      const { searchQuery: s } = n, f = () => r(!0);
      if (!s)
        return o.active = !1, f();
      o.active = !0, o.noResults = !0, t((a) => {
        a.isBranch && (a.isExpandedOnSearch = !1, a.showAllChildrenOnSearch = !1, a.isMatched = !1, a.hasMatchedDescendants = !1, o.countMap[a.id] = {
          [Ee]: 0,
          [Se]: 0,
          [Ne]: 0,
          [Re]: 0
        });
      });
      const i = s.trim().toLocaleLowerCase(), d = i.replace(/\s+/g, " ").split(" ");
      t((a) => {
        e.searchNested && d.length > 1 ? a.isMatched = d.every(
          (c) => Bt(!1, c, a.nestedSearchLabel)
        ) : a.isMatched = (e.matchKeys || ["label"]).some(
          (c) => Bt(!e.disableFuzzyMatching, i, a.lowerCased[c])
        ), a.isMatched && (o.noResults = !1, a.ancestors.forEach((c) => {
          o.countMap[c.id][Se]++;
        }), a.isLeaf && a.ancestors.forEach((c) => {
          o.countMap[c.id][Re]++;
        }), a.parentNode !== se && (o.countMap[a.parentNode.id][Ee] += 1, a.isLeaf && (o.countMap[a.parentNode.id][Ne] += 1))), (a.isMatched || a.isBranch && a.isExpandedOnSearch) && a.parentNode !== se && (a.parentNode.isExpandedOnSearch = !0, a.parentNode.hasMatchedDescendants = !0);
      }), f();
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
  const l = Y(te()), s = Y(0), f = () => {
    const { searchQuery: d } = n, a = l.value[d] || {
      ...ir(),
      options: []
    };
    if (q(
      () => a.options,
      () => {
        n.searchQuery === d && r();
      },
      { deep: !0 }
    ), d === "") {
      if (Array.isArray(e.defaultOptions))
        return a.options = e.defaultOptions, a.isLoaded = !0, a;
      if (e.defaultOptions !== !0)
        return a.isLoaded = !0, a;
    }
    return l.value[d] || (l.value[d] = a), a;
  };
  return {
    remoteSearch: l,
    key: s,
    getRemoteSearchEntry: f,
    handleRemoteSearch: () => {
      const { searchQuery: d } = n, a = f(), c = () => {
        r(), o(!0);
      };
      if ((d === "" || e.cacheOptions) && a.isLoaded)
        return c();
      t({
        action: sr,
        args: { searchQuery: d },
        isPending: () => a.isLoading,
        start: () => {
          a.isLoading = !0, a.isLoaded = !1, a.loadingError = "";
        },
        succeed: (h) => {
          a.isLoaded = !0, a.options = h, n.searchQuery === d && c();
        },
        fail: (h) => {
          a.loadingError = ar(h);
        },
        end: () => {
          s.value += 1, a.isLoading = !1;
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
  const o = ce(fr()), l = (i) => {
    const { action: d, args: a, isPending: c, start: h, succeed: O, fail: v, end: E } = i;
    if (!e.loadOptions || c())
      return;
    h();
    const y = Wn((g, p) => {
      g ? v(g) : O(p), E();
    }), m = e.loadOptions({
      id: t,
      instanceId: t,
      action: d,
      ...a,
      callback: y
    });
    Gt(m) && m.then(() => {
      y();
    }).catch((g) => {
      y(g);
    }).catch((g) => {
      console.error(g);
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
        fail: (i) => {
          o.loadingError = Ft(i);
        },
        end: () => {
          o.isLoading = !1;
        }
      });
    },
    loadChildrenOptions: (i) => {
      const { id: d, raw: a } = i;
      l({
        action: dr,
        args: {
          // We always pass the raw node instead of the normalized node
          // Because the shape of the raw node is more likely to be close to
          // what the back-end API service needs
          parentNode: a
        },
        isPending: () => {
          const c = n(d);
          return c ? c.childrenStates.isLoading : !1;
        },
        start: () => {
          const c = n(d);
          c && (c.childrenStates.isLoading = !0, c.childrenStates.loadingError = "");
        },
        succeed: () => {
          const c = n(d);
          c && (c.childrenStates.isLoaded = !0);
        },
        fail: (c) => {
          const h = n(d);
          h && (h.childrenStates.loadingError = Ft(c));
        },
        end: () => {
          const c = n(d);
          c && (c.childrenStates.isLoading = !1);
        }
      });
    }
  };
}
function vr(e, n, t, r, o, l) {
  const s = ce({
    isFocused: !1,
    searchQuery: ""
  }), f = () => {
    s.searchQuery = "";
  }, i = (T) => ({
    ...T,
    ...e.normalizer ? e.normalizer(T, t.value) : {}
  }), d = () => e.modelValue == null ? [] : e.valueFormat === "id" ? e.multiple ? e.modelValue.slice() : [e.modelValue] : (e.multiple ? e.modelValue : [e.modelValue]).map((T) => i(T)).map((T) => T.id), a = Yn(), c = Qn(d), { forest: h, isSelected: O } = c, v = (T) => (_e(
    () => T != null,
    () => `Invalid node id: ${T}`
  ), T == null ? null : T in h.nodeMap ? h.nodeMap[T] : E(T)), E = (T) => {
    const z = y(T), ve = i(z).label || `${T} (unknown)`, Te = {
      id: T,
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
      raw: z
    };
    return h.nodeMap[T] = Te, Te;
  }, y = (T) => {
    const z = { id: T };
    if (e.valueFormat === "id")
      return z;
    const ve = e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue ? [e.modelValue] : [];
    return tt(
      ve,
      (lt) => lt && i(lt).id === T
    ) || z;
  };
  let m, g, p, k, F, _;
  const C = hr(
    e,
    v,
    t.value,
    (T) => g(T)
  );
  p = C.loadRootOptions, m = C.loadChildrenOptions, k = C.callLoadOptionsProp;
  const { rootOptionsStates: u } = C, w = Xn(
    e,
    h,
    t,
    m
  ), { normalize: S, enhancedNormalizer: R } = w, I = Zn(
    e,
    h,
    v,
    O,
    a.traverseDescendantsBFS,
    R
  ), { selectedNodes: D, single: B, internalValue: N, hasValue: A, getValue: j, fixSelectedNodeIds: oe } = I;
  _ = () => {
    const T = (z) => {
      a.traverseAllNodesByIndex(h.normalizedOptions, z);
    };
    c.buildForestState(
      e,
      D.value,
      T,
      O
    );
  };
  const rt = (T) => {
    h.selectedNodeIds.forEach((z) => {
      T[z] && (h.nodeMap[z] = {
        ...T[z],
        isFallbackNode: !0
      });
    });
  }, ae = () => (e.async, null);
  F = () => {
    const T = e.async ? ae() || [] : e.options || [];
    if (Array.isArray(T)) {
      const z = h.nodeMap;
      h.nodeMap = te(), rt(z), h.normalizedOptions = S(se, T, z), oe(N.value, _);
    } else
      h.normalizedOptions = [];
  };
  const ie = ur(
    e,
    s,
    k,
    F,
    (T) => g(T)
  ), { handleRemoteSearch: xe } = ie, fe = lr(
    e,
    s,
    (T) => {
      a.traverseAllNodesDFS(h.normalizedOptions, T);
    },
    (T) => g(T)
  ), { handleLocalSearch: ot } = fe, an = (T) => {
    a.traverseAllNodesByIndex(h.normalizedOptions, T);
  }, V = tr(
    e,
    n,
    h,
    fe.localSearch,
    v,
    an,
    j,
    t.value,
    f,
    p,
    m,
    r,
    l
  );
  g = V.resetHighlightedOptionWhenNecessary;
  const he = er(
    e,
    n,
    h,
    v,
    O,
    a.traverseDescendantsBFS,
    a.traverseDescendantsDFS,
    _,
    f,
    V.closeMenu,
    () => A.value,
    () => N.value,
    () => B.value,
    t.value,
    fe.localSearch
  );
  return q(() => e.alwaysOpen, (T) => {
    T ? V.openMenu() : V.closeMenu();
  }), q(() => e.branchNodesFirst, () => {
    F();
  }), q(() => e.disabled, (T) => {
    T && V.menu.isOpen ? V.closeMenu() : !T && !V.menu.isOpen && e.alwaysOpen && V.openMenu();
  }), q(() => e.flat, () => {
    F();
  }), q(N, (T, z) => {
    Je(T, z) && n("update:modelValue", j(), t.value);
  }), q(() => e.matchKeys, () => {
    F();
  }), q(() => e.multiple, (T) => {
    T && _();
  }), q(() => e.options, () => {
    e.async || (F(), u.isLoaded = Array.isArray(e.options));
  }, { deep: !0, immediate: !0 }), q(() => s.searchQuery, () => {
    e.async ? xe() : ot(), n("search-change", s.searchQuery, t.value);
  }), q(() => e.modelValue, () => {
    const T = d();
    Je(T, N.value) && oe(T, _);
  }), Oe(() => {
    e.autoFocus, !e.options && !e.async && e.autoLoadRootOptions && p(), e.alwaysOpen && V.openMenu(), e.async && e.defaultOptions && xe();
  }), be(() => {
    l(!1);
  }), {
    // State
    forest: pe(() => h),
    trigger: s,
    menu: pe(() => V.menu),
    localSearch: pe(() => fe.localSearch),
    remoteSearch: pe(() => ie.remoteSearch),
    rootOptionsStates: u,
    // Computed
    selectedNodes: D,
    single: B,
    internalValue: N,
    hasValue: A,
    visibleOptionIds: V.visibleOptionIds,
    hasVisibleOptions: V.hasVisibleOptions,
    // Node methods
    getNode: v,
    isSelected: O,
    // Traversal
    traverseDescendantsBFS: a.traverseDescendantsBFS,
    traverseDescendantsDFS: a.traverseDescendantsDFS,
    traverseAllNodesDFS: a.traverseAllNodesDFS,
    traverseAllNodesByIndex: a.traverseAllNodesByIndex,
    // Value
    getValue: j,
    extractCheckedNodeIdsFromValue: d,
    extractNodeFromValue: y,
    fixSelectedNodeIds: oe,
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
    handleRemoteSearch: xe,
    resetSearchQuery: f,
    // Async
    loadRootOptions: p,
    loadChildrenOptions: m,
    // Helpers
    initialize: F,
    buildForestState: _,
    resetFlags: he.resetFlags,
    // DOM helpers
    getMenu: r,
    getControl: o
  };
}
const pr = ["name", "value"], mr = /* @__PURE__ */ J({
  __name: "HiddenFields",
  setup(e) {
    const n = Q("treeselect");
    function t(o) {
      return typeof o == "string" ? o : o != null && !Fn(o) ? JSON.stringify(o) : "";
    }
    const r = x(() => {
      if (!n.name || n.disabled || !n.hasValue.value)
        return [];
      let o = n.internalValue.value.map(t);
      return n.multiple && n.joinValues && (o = [o.join(n.delimiter)]), o;
    });
    return (o, l) => (b(!0), M(re, null, ue(r.value, (s, f) => (b(), M("input", {
      key: `hidden-field-${f}`,
      type: "hidden",
      name: L(n).name,
      value: s
    }, null, 8, pr))), 128));
  }
}), _r = {
  key: 0,
  class: "vue-treeselect__input-container"
}, gr = ["tabindex", "required"], yr = ["tabindex"], tn = /* @__PURE__ */ J({
  __name: "Input",
  setup(e, { expose: n }) {
    const t = Q("treeselect"), r = Y(), o = Y(), l = Y(wt), s = Y(""), f = x(() => t.searchable), i = x(() => t.disabled), d = x(() => t.multiple), a = x(() => t.tabIndex), c = x(() => t.required), h = x(() => t.hasValue.value), O = x(() => f.value && !i.value && d.value), v = x(() => ({
      width: O.value ? `${l.value}px` : void 0
    })), E = [
      W.ENTER,
      W.END,
      W.HOME,
      W.ARROW_LEFT,
      W.ARROW_UP,
      W.ARROW_RIGHT,
      W.ARROW_DOWN
    ], y = () => {
      o.value && (l.value = Math.max(
        wt,
        o.value.scrollWidth + 15
      ));
    }, m = () => {
      t.trigger.searchQuery = s.value;
    }, g = () => {
      s.value = "", m();
    }, p = () => {
      !i.value && r.value && r.value.focus();
    }, k = () => {
      r.value && r.value.blur();
    }, F = () => {
      t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
    }, _ = () => {
      const R = t.getMenu?.();
      if (R && document.activeElement === R)
        return p();
      t.trigger.isFocused = !1, t.closeMenu();
    }, C = Ln(
      m,
      Un,
      { leading: !0, trailing: !0 }
    ), u = () => {
      s.value ? C() : (C.cancel(), m());
    }, w = (R) => {
      const I = R.key;
      if (!(R.ctrlKey || R.shiftKey || R.altKey || R.metaKey)) {
        if (!t.menu.value.isOpen && Xt(E, I))
          return R.preventDefault(), t.openMenu();
        switch (I) {
          case W.BACKSPACE: {
            t.backspaceRemoves && !s.value.length && t.removeLastValue();
            break;
          }
          case W.ENTER: {
            if (R.preventDefault(), t.menu.value.current === null) return;
            const D = t.getNode(t.menu.value.current);
            if (!D || D.isBranch && t.disableBranchNodes) return;
            t.select(D);
            break;
          }
          case W.ESCAPE: {
            s.value.length ? g() : t.menu.value.isOpen && t.closeMenu();
            break;
          }
          case W.END: {
            R.preventDefault(), t.highlightLastOption();
            break;
          }
          case W.HOME: {
            R.preventDefault(), t.highlightFirstOption();
            break;
          }
          case W.ARROW_LEFT: {
            const D = t.menu.value.current;
            if (D === null) break;
            const B = t.getNode(D);
            B && (B.isBranch && t.shouldExpand(B) ? (R.preventDefault(), t.toggleExpanded(B)) : !B.isRootNode && (B.isLeaf || B.isBranch && !t.shouldExpand(B)) && (R.preventDefault(), t.setCurrentHighlightedOption(B.parentNode)));
            break;
          }
          case W.ARROW_UP: {
            R.preventDefault(), t.highlightPrevOption();
            break;
          }
          case W.ARROW_RIGHT: {
            const D = t.menu.value.current;
            if (D === null) break;
            const B = t.getNode(D);
            B && B.isBranch && !t.shouldExpand(B) && (R.preventDefault(), t.toggleExpanded(B));
            break;
          }
          case W.ARROW_DOWN: {
            R.preventDefault(), t.highlightNextOption();
            break;
          }
          case W.DELETE: {
            t.deleteRemoves && !s.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    }, S = (R) => {
      s.value.length && R.stopPropagation();
    };
    return q(() => t.trigger.searchQuery, (R) => {
      s.value = R;
    }), q(s, () => {
      O.value && ne(y);
    }), n({
      clear: g,
      focus: p,
      blur: k,
      inputElement: r
    }), (R, I) => f.value && !i.value ? (b(), M("div", _r, [
      un(H("input", {
        ref_key: "inputRef",
        ref: r,
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabindex: a.value,
        required: c.value && !h.value,
        "onUpdate:modelValue": I[0] || (I[0] = (D) => s.value = D),
        style: Ge(v.value),
        onFocus: F,
        onInput: u,
        onBlur: _,
        onKeydown: w,
        onMousedown: S
      }, null, 44, gr), [
        [cn, s.value]
      ]),
      O.value ? (b(), M("div", {
        key: 0,
        ref_key: "sizerRef",
        ref: o,
        class: "vue-treeselect__sizer"
      }, P(s.value), 513)) : G("", !0)
    ])) : (b(), M("div", {
      key: 1,
      ref_key: "inputRef",
      ref: r,
      class: "vue-treeselect__input-container",
      tabindex: i.value ? void 0 : a.value,
      onFocus: F,
      onBlur: _,
      onKeydown: w
    }, null, 40, yr));
  }
}), nn = /* @__PURE__ */ J({
  __name: "Placeholder",
  setup(e) {
    const n = Q("treeselect"), t = x(() => ({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": n.hasValue.value || n.trigger.searchQuery
    }));
    return (r, o) => (b(), M("div", {
      class: X(t.value)
    }, P(L(n).placeholder), 3));
  }
}), Or = {
  key: 0,
  class: "vue-treeselect__single-value"
}, br = /* @__PURE__ */ J({
  __name: "SingleValue",
  setup(e, { expose: n }) {
    const t = Q("treeselect"), r = Ze(), o = x(() => t.hasValue.value && !t.trigger.searchQuery), l = x(() => t.selectedNodes.value[0]), s = x(() => r["value-label"]), f = Y();
    return n({
      inputElement: f
    }), (i, d) => (b(), M(re, null, [
      o.value ? (b(), M("div", Or, [
        s.value ? (b(), $(et(s.value), {
          key: 0,
          node: l.value
        }, null, 8, ["node"])) : (b(), M(re, { key: 1 }, [
          K(P(l.value.label), 1)
        ], 64))
      ])) : G("", !0),
      Z(nn),
      Z(tn, {
        ref_key: "inputRef",
        ref: f
      }, null, 512)
    ], 64));
  }
}), Er = {
  name: "vue-treeselect--x"
}, rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, Sr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Nr(e, n, t, r, o, l) {
  return b(), M("svg", Sr, [...n[0] || (n[0] = [
    H("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)
  ])]);
}
const on = /* @__PURE__ */ rn(Er, [["render", Nr]]), Rr = { class: "vue-treeselect__multi-value-item-container" }, xr = {
  key: 1,
  class: "vue-treeselect__multi-value-label"
}, Tr = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, wr = /* @__PURE__ */ J({
  __name: "MultiValueItem",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Q("treeselect"), o = x(() => ({
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
      "vue-treeselect__multi-value-item-new": n.node.isNew
    })), l = x(() => t["value-label"]), s = le(function() {
      r.select(n.node);
    });
    return (f, i) => (b(), M("div", Rr, [
      H("div", {
        class: X(o.value),
        onMousedown: i[0] || (i[0] = //@ts-ignore
        (...d) => L(s) && L(s)(...d))
      }, [
        l.value ? (b(), $(et(l.value), {
          key: 0,
          node: e.node,
          class: "vue-treeselect__multi-value-label"
        }, null, 8, ["node"])) : (b(), M("span", xr, P(e.node.label), 1)),
        H("span", Tr, [
          Z(on)
        ])
      ], 34)
    ]));
  }
}), Lr = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Cr = { class: "vue-treeselect__limit-tip-text" }, Dr = /* @__PURE__ */ J({
  __name: "MultiValue",
  setup(e, { expose: n }) {
    const t = Q("treeselect"), r = Y();
    n({
      inputElement: r
    });
    const o = x(() => t.internalValue.value.slice(0, t.limit).map(t.getNode).filter((f) => f !== null)), l = x(() => t.internalValue.value.length > t.limit), s = x(() => {
      const f = t.internalValue.value.length - t.limit;
      return t.limitText(f);
    });
    return (f, i) => (b(), $(dn, {
      class: "vue-treeselect__multi-value",
      tag: "div",
      name: "vue-treeselect__multi-value-item--transition",
      appear: ""
    }, {
      default: U(() => [
        (b(!0), M(re, null, ue(o.value, (d) => (b(), $(wr, {
          key: `multi-value-item-${d.id}`,
          node: d
        }, null, 8, ["node"]))), 128)),
        l.value ? (b(), M("div", Lr, [
          H("span", Cr, P(s.value), 1)
        ])) : G("", !0),
        Z(nn, { key: "placeholder" }),
        Z(tn, {
          ref_key: "inputRef",
          ref: r,
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
function Ar(e, n, t, r, o, l) {
  return b(), M("svg", Mr, [...n[0] || (n[0] = [
    H("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)
  ])]);
}
const ln = /* @__PURE__ */ rn(Ir, [["render", Ar]]), kr = ["title"], Br = /* @__PURE__ */ J({
  __name: "Control",
  setup(e, { expose: n }) {
    const t = Q("treeselect"), r = Q("instance"), o = x(() => t.single.value), l = x(() => t.hasValue.value && t.internalValue.value.some((y) => {
      const m = t.getNode(y);
      return m && !m.isDisabled;
    })), s = x(() => t.clearable && !t.disabled && t.hasValue.value && (l.value || t.allowClearingDisabled)), f = x(() => t.alwaysOpen ? !t.menu.value.isOpen : !0), i = x(() => t.multiple ? t.clearAllText : t.clearValueText), d = x(() => ({
      "vue-treeselect__control-arrow": !0,
      "vue-treeselect__control-arrow--rotated": t.menu.value.isOpen
    })), a = le(function(y) {
      y.stopPropagation(), y.preventDefault();
      const m = t.beforeClearAll(), g = (p) => {
        p && t.clear();
      };
      Gt(m) ? m.then((p) => g(p)) : setTimeout(() => g(m), 0);
    }), c = le(function(y) {
      y.preventDefault(), y.stopPropagation(), r.focusInput(), t.toggleMenu();
    }), h = Y(), O = Y(), v = Y(), E = x(() => v.value?.inputElement?.value?.inputElement);
    return n({
      controlElement: h,
      valueContainer: O,
      inputElement: E
    }), (y, m) => (b(), M("div", {
      ref_key: "controlRef",
      ref: h,
      class: "vue-treeselect__control",
      onMousedown: m[2] || (m[2] = //@ts-ignore
      (...g) => L(r).handleMouseDown && L(r).handleMouseDown(...g))
    }, [
      H("div", {
        ref_key: "valueContainerRef",
        ref: O,
        class: "vue-treeselect__value-container"
      }, [
        o.value ? (b(), $(br, {
          key: 0,
          ref_key: "valueComponentRef",
          ref: v
        }, null, 512)) : (b(), $(Dr, {
          key: 1,
          ref_key: "valueComponentRef",
          ref: v
        }, null, 512))
      ], 512),
      s.value ? (b(), M("div", {
        key: 0,
        class: "vue-treeselect__x-container",
        title: i.value,
        onMousedown: m[0] || (m[0] = //@ts-ignore
        (...g) => L(a) && L(a)(...g))
      }, [
        Z(on, { class: "vue-treeselect__x" })
      ], 40, kr)) : G("", !0),
      f.value ? (b(), M("div", {
        key: 1,
        class: "vue-treeselect__control-arrow-container",
        onMousedown: m[1] || (m[1] = //@ts-ignore
        (...g) => L(c) && L(c)(...g))
      }, [
        Z(ln, {
          class: X(d.value)
        }, null, 8, ["class"])
      ], 32)) : G("", !0)
    ], 544));
  }
}), Fr = { class: "vue-treeselect__icon-container" }, ee = /* @__PURE__ */ J({
  __name: "Tip",
  props: {
    type: {},
    icon: {}
  },
  setup(e) {
    return (n, t) => (b(), M("div", {
      class: X(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
    }, [
      H("div", Fr, [
        H("span", {
          class: X(`vue-treeselect__icon-${e.icon}`)
        }, null, 2)
      ]),
      H("span", {
        class: X(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
      }, [
        Ke(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Vr = ["data-id"], $r = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, Pr = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, Hr = {
  key: 0,
  class: "vue-treeselect__list"
}, zr = ["title"], Vt = "vue-treeselect__label", $t = "vue-treeselect__count", Pt = /* @__PURE__ */ J({
  __name: "Option",
  props: {
    node: {}
  },
  setup(e) {
    const n = e, t = Ze(), r = Q("treeselect"), o = x(() => ({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.shouldFlattenOptions ? 0 : n.node.level}`]: !0
    })), l = x(() => n.node.isBranch && r.shouldExpand(n.node)), s = x(() => r.shouldShowOptionInMenu(n.node)), f = x(() => !r.shouldFlattenOptions || !s.value), i = x(() => ({
      "vue-treeselect__option": !0,
      "vue-treeselect__option--disabled": n.node.isDisabled,
      "vue-treeselect__option--selected": r.isSelected(n.node),
      "vue-treeselect__option--highlight": n.node.isHighlighted,
      "vue-treeselect__option--matched": r.localSearch.value.active && n.node.isMatched,
      "vue-treeselect__option--hide": !s.value
    })), d = x(() => ({
      "vue-treeselect__option-arrow": !0,
      "vue-treeselect__option-arrow--rotated": l.value
    })), a = x(() => r.single ? !1 : !(r.disableBranchNodes && n.node.isBranch)), c = x(() => {
      const C = r.forest.value.checkedStateMap[n.node.id];
      return {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": C === Zt,
        "vue-treeselect__checkbox--indeterminate": C === Jt,
        "vue-treeselect__checkbox--unchecked": C === nt,
        "vue-treeselect__checkbox--disabled": n.node.isDisabled
      };
    }), h = x(() => n.node.isBranch && (r.localSearch.value.active ? r.showCountOnSearchComputed : r.showCount)), O = x(() => h.value ? r.localSearch.value.active ? r.localSearch.value.countMap[n.node.id][r.showCountOf] : n.node.count[r.showCountOf] : NaN), v = x(() => t["option-label"]), E = x(() => !n.node.childrenStates || !n.node.childrenStates.isLoaded ? [] : n.node.children || []), y = x(() => n.node.childrenStates?.isLoaded && (!n.node.children || n.node.children.length === 0)), m = x(() => n.node.childrenStates?.isLoading || !1), g = x(() => !!n.node.childrenStates?.loadingError), p = (C) => {
      C.target === C.currentTarget && r.setCurrentHighlightedOption(n.node, !1);
    }, k = le(function() {
      r.toggleExpanded(n.node);
    }), F = le(function() {
      n.node.isBranch && r.disableBranchNodes ? r.toggleExpanded(n.node) : r.select(n.node);
    }), _ = le(function() {
      r.loadChildrenOptions(n.node);
    });
    return (C, u) => {
      const w = fn("Option", !0);
      return b(), M("div", {
        class: X(o.value)
      }, [
        H("div", {
          class: X(i.value),
          "data-id": e.node.id,
          onMouseenter: p
        }, [
          e.node.isBranch && f.value ? (b(), M("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: u[0] || (u[0] = //@ts-ignore
            (...S) => L(k) && L(k)(...S))
          }, [
            Z(Xe, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: ""
            }, {
              default: U(() => [
                Z(ln, {
                  class: X(d.value)
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 32)) : L(r).hasBranchNodes && f.value ? (b(), M("div", $r, "   ")) : G("", !0),
          H("div", {
            class: "vue-treeselect__label-container",
            onMousedown: u[1] || (u[1] = //@ts-ignore
            (...S) => L(F) && L(F)(...S))
          }, [
            a.value ? (b(), M("div", Pr, [
              H("span", {
                class: X(c.value)
              }, [...u[3] || (u[3] = [
                H("span", { class: "vue-treeselect__check-mark" }, null, -1),
                H("span", { class: "vue-treeselect__minus-mark" }, null, -1)
              ])], 2)
            ])) : G("", !0),
            v.value ? (b(), $(et(v.value), {
              key: 1,
              node: e.node,
              shouldShowCount: h.value,
              count: O.value,
              labelClassName: Vt,
              countClassName: $t
            }, null, 8, ["node", "shouldShowCount", "count"])) : (b(), M("label", {
              key: 2,
              class: X(Vt)
            }, [
              K(P(e.node.label) + " ", 1),
              h.value ? (b(), M("span", {
                key: 0,
                class: X($t)
              }, " (" + P(O.value) + ") ", 1)) : G("", !0)
            ]))
          ], 32)
        ], 42, Vr),
        e.node.isBranch ? (b(), $(Xe, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: U(() => [
            l.value ? (b(), M("div", Hr, [
              (b(!0), M(re, null, ue(E.value, (S) => (b(), $(w, {
                key: S.id,
                node: S
              }, null, 8, ["node"]))), 128)),
              y.value ? (b(), $(ee, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: U(() => [
                  K(P(L(r).noChildrenText), 1)
                ]),
                _: 1
              })) : G("", !0),
              m.value ? (b(), $(ee, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: U(() => [
                  K(P(L(r).loadingText), 1)
                ]),
                _: 1
              })) : G("", !0),
              g.value ? (b(), $(ee, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: U(() => [
                  K(P(e.node.childrenStates?.loadingError) + " ", 1),
                  H("a", {
                    class: "vue-treeselect__retry",
                    title: L(r).retryTitle,
                    onMousedown: u[2] || (u[2] = //@ts-ignore
                    (...S) => L(_) && L(_)(...S))
                  }, P(L(r).retryText), 41, zr)
                ]),
                _: 1
              })) : G("", !0)
            ])) : G("", !0)
          ]),
          _: 1
        })) : G("", !0)
      ], 2);
    };
  }
}), Wr = ["title"], qr = {
  key: 4,
  class: "vue-treeselect__list"
}, jr = ["title"], Yr = {
  key: 4,
  class: "vue-treeselect__list"
}, sn = /* @__PURE__ */ J({
  __name: "Menu",
  setup(e, { expose: n }) {
    const t = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    }, r = Q("treeselect"), o = Q("instance"), l = Q("registerMenuElement", void 0), s = Y();
    q(s, (_) => {
      _ && l && l(_);
    }, { immediate: !0 });
    let f = null, i = null;
    const d = x(() => ({
      maxHeight: r.maxHeight + "px"
    })), a = x(() => ({
      zIndex: r.appendToBody ? null : r.zIndex
    })), c = x(() => r.rootOptionsStates.isLoaded && r.forest.value.normalizedOptions.length === 0), h = x(() => r.getRemoteSearchEntry()), O = x(() => r.trigger.searchQuery === "" && !r.defaultOptions), v = x(() => {
      if (O.value) return !1;
      const _ = h.value;
      return _.isLoaded && _.options.length === 0;
    }), E = () => {
      if (!r.menu.value.isOpen) return;
      const _ = r.getMenu(), C = r.getControl();
      if (!_ || !C) return;
      const u = _.getBoundingClientRect(), w = C.getBoundingClientRect(), S = u.height, R = window.innerHeight, I = w.top, D = window.innerHeight - w.bottom, B = w.top >= 0 && w.top <= R || w.top < 0 && w.bottom > 0, N = D > S + Lt, A = I > S + Lt;
      B ? r.openDirection !== "auto" ? r.menu.value.placement = t[r.openDirection] : N || !A ? r.menu.value.placement = "bottom" : r.menu.value.placement = "top" : r.closeMenu();
    }, y = () => {
      const _ = r.getMenu();
      f || !_ || (f = {
        remove: Ut(_, E)
      });
    }, m = () => {
      const _ = r.getControl();
      i || !_ || (i = {
        remove: Qt(_, E)
      });
    }, g = () => {
      f && (f.remove(), f = null);
    }, p = () => {
      i && (i.remove(), i = null);
    }, k = () => {
      E(), y(), m();
    }, F = () => {
      g(), p();
    };
    return q(
      () => r.menu.value.isOpen,
      (_) => {
        _ ? ne(k) : F();
      }
    ), Oe(() => {
      r.menu.value.isOpen && ne(k);
    }), be(() => {
      F();
    }), n({
      menuElement: s
    }), (_, C) => (b(), M("div", {
      ref: "menu-container",
      class: "vue-treeselect__menu-container",
      style: Ge(a.value)
    }, [
      Z(Xe, { name: "vue-treeselect__menu--transition" }, {
        default: U(() => [
          L(r).menu.value.isOpen ? (b(), M("div", {
            key: 0,
            ref_key: "menuRef",
            ref: s,
            class: "vue-treeselect__menu",
            style: Ge(d.value),
            onMousedown: C[2] || (C[2] = //@ts-ignore
            (...u) => L(o).handleMouseDown && L(o).handleMouseDown(...u))
          }, [
            Ke(_.$slots, "before-list"),
            L(r).async ? (b(), M(re, { key: 0 }, [
              O.value ? (b(), $(ee, {
                key: 0,
                type: "search-prompt",
                icon: "warning"
              }, {
                default: U(() => [
                  K(P(L(r).searchPromptText), 1)
                ]),
                _: 1
              })) : h.value.isLoading ? (b(), $(ee, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: U(() => [
                  K(P(L(r).loadingText), 1)
                ]),
                _: 1
              })) : h.value.loadingError ? (b(), $(ee, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: U(() => [
                  K(P(h.value.loadingError) + " ", 1),
                  H("a", {
                    class: "vue-treeselect__retry",
                    title: L(r).retryTitle,
                    onClick: C[0] || (C[0] = //@ts-ignore
                    (...u) => L(r).handleRemoteSearch && L(r).handleRemoteSearch(...u))
                  }, P(L(r).retryText), 9, Wr)
                ]),
                _: 1
              })) : v.value ? (b(), $(ee, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: U(() => [
                  K(P(L(r).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), M("div", qr, [
                (b(!0), M(re, null, ue(L(r).forest.value.normalizedOptions, (u) => (b(), $(Pt, {
                  key: u.id,
                  node: u
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)) : (b(), M(re, { key: 1 }, [
              L(r).rootOptionsStates.isLoading ? (b(), $(ee, {
                key: 0,
                type: "loading",
                icon: "loader"
              }, {
                default: U(() => [
                  K(P(L(r).loadingText), 1)
                ]),
                _: 1
              })) : L(r).rootOptionsStates.loadingError ? (b(), $(ee, {
                key: 1,
                type: "error",
                icon: "error"
              }, {
                default: U(() => [
                  K(P(L(r).rootOptionsStates.loadingError) + " ", 1),
                  H("a", {
                    class: "vue-treeselect__retry",
                    title: L(r).retryTitle,
                    onClick: C[1] || (C[1] = //@ts-ignore
                    (...u) => L(r).loadRootOptions && L(r).loadRootOptions(...u))
                  }, P(L(r).retryText), 9, jr)
                ]),
                _: 1
              })) : c.value ? (b(), $(ee, {
                key: 2,
                type: "no-options",
                icon: "warning"
              }, {
                default: U(() => [
                  K(P(L(r).noOptionsText), 1)
                ]),
                _: 1
              })) : L(r).localSearch.value.active && L(r).localSearch.value.noResults ? (b(), $(ee, {
                key: 3,
                type: "no-results",
                icon: "warning"
              }, {
                default: U(() => [
                  K(P(L(r).noResultsText), 1)
                ]),
                _: 1
              })) : (b(), M("div", Yr, [
                (b(!0), M(re, null, ue(L(r).forest.value.normalizedOptions, (u) => (b(), $(Pt, {
                  key: u.id,
                  node: u
                }, null, 8, ["node"]))), 128))
              ]))
            ], 64)),
            Ke(_.$slots, "after-list")
          ], 36)) : G("", !0)
        ]),
        _: 3
      })
    ], 4));
  }
}), Ur = { class: "vue-treeselect__menu-placeholder" }, Qr = /* @__PURE__ */ J({
  __name: "MenuPortal",
  setup(e, { expose: n }) {
    const t = Q("treeselect"), r = Q("instance"), o = (c) => J({
      name: "vue-treeselect--portal-target",
      setup() {
        let h = null, O = null, v = null;
        const E = Q("menuElementInPortal"), y = () => {
          if (!v) return;
          const u = c.getControl();
          if (!u) return;
          const w = u.getBoundingClientRect();
          v.style.width = w.width + "px";
        }, m = () => {
          const u = E();
          if (!v || !u) return;
          const w = c.getControl();
          if (!w) return;
          const S = u.parentElement;
          if (!S) return;
          const R = w.getBoundingClientRect(), I = v.getBoundingClientRect(), D = c.menu.value.placement === "bottom" ? R.height : 0, B = Math.round(R.left - I.left) + "px", N = Math.round(R.top - I.top + D) + "px", j = tt(["transform", "webkitTransform", "MozTransform", "msTransform"], (oe) => oe in document.body.style);
          j && (S.style[j] = `translate(${B}, ${N})`);
        }, g = () => {
          const u = c.getControl();
          h || !u || (h = {
            remove: Qt(u, m)
          });
        }, p = () => {
          const u = c.getControl();
          O || !u || (O = {
            remove: Ut(u, () => {
              y(), m();
            })
          });
        }, k = () => {
          h && (h.remove(), h = null);
        }, F = () => {
          O && (O.remove(), O = null);
        }, _ = () => {
          y(), m(), g(), p();
        }, C = () => {
          k(), F();
        };
        return q(
          () => c.menu.value.isOpen,
          (u) => {
            u ? ne(_) : C();
          }
        ), q(
          () => c.menu.value.placement,
          () => {
            m();
          }
        ), Oe(() => {
          v = document.body.lastElementChild, c.menu.value.isOpen && ne(_);
        }), be(() => {
          C();
        }), () => st("div", {
          class: ["vue-treeselect__portal-target", c.wrapperClass],
          style: { zIndex: c.zIndex },
          "data-instance-id": c.getInstanceId()
        }, [
          st(sn)
        ]);
      }
    });
    let l = null, s = null, f = null;
    const i = () => {
      const c = document.createElement("div");
      document.body.appendChild(c), s = c;
      const h = o(t);
      l = hn(h), l.provide("treeselect", t), l.provide("instance", r), l.provide("registerMenuElement", (O) => {
        f = O;
      }), l.provide("menuElementInPortal", () => f), l.mount(c);
    }, d = () => {
      l && s && (s.parentNode?.removeChild(s), l.unmount(), l = null, s = null, f = null);
    };
    return n({
      getMenuInPortal: () => f
    }), Oe(() => {
      i();
    }), be(() => {
      d();
    }), (c, h) => (b(), M("div", Ur));
  }
}), oo = /* @__PURE__ */ J({
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
    const r = e, o = t, l = Y(), s = Y(), f = Y(), i = Y(), d = x({
      get: () => r.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
      set: () => {
      }
    }), a = () => {
      if (r.appendToBody)
        return i.value?.getMenuInPortal?.() || null;
      {
        const _ = f.value?.menuElement;
        return _ && _.nodeName !== "#comment" ? _ : null;
      }
    }, c = () => {
      const _ = s.value?.controlElement;
      return _ && _.nodeName !== "#comment" ? _ : null;
    }, h = () => s.value?.valueContainer, O = () => s.value?.inputElement?.value, v = () => {
      O()?.focus();
    }, E = () => {
      O()?.blur();
    }, y = (_) => {
      _ ? document.addEventListener("mousedown", m, !1) : document.removeEventListener("mousedown", m, !1);
    }, m = (_) => {
      const u = a()?.contains(_.target), w = l.value?.contains(_.target);
      if (l.value && !w) {
        if (u)
          return;
        E(), p.closeMenu();
      }
    }, g = le(function(_) {
      if (_.preventDefault(), _.stopPropagation(), r.disabled) return;
      const C = h();
      (C?.contains?.(_.target) || C === _.target) && !p.menu.value.isOpen && (r.openOnClick || p.trigger.isFocused) && p.openMenu(), (p.resetFlags ? p.resetFlags() : !1) ? E() : v();
    }), p = vr(
      r,
      o,
      d,
      a,
      c,
      y
    ), k = x(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": p.single.value,
      "vue-treeselect--multi": r.multiple,
      "vue-treeselect--searchable": r.searchable,
      "vue-treeselect--disabled": r.disabled,
      "vue-treeselect--focused": p.trigger.isFocused,
      "vue-treeselect--has-value": p.hasValue.value,
      "vue-treeselect--open": p.menu.value.isOpen,
      "vue-treeselect--open-above": p.menu.value.placement === "top",
      "vue-treeselect--open-below": p.menu.value.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
      "vue-treeselect--append-to-body": r.appendToBody
    }));
    return Object.keys(r).forEach((_) => {
      Object.defineProperty(p, _, {
        get() {
          return r[_];
        }
      });
    }), Object.defineProperties(p, {
      wrapperClass: {
        get() {
          return k.value;
        }
      },
      getInstanceId: {
        value: () => d.value
      }
    }), at("treeselect", p), at("instance", {
      getInput: O,
      focusInput: v,
      blurInput: E,
      getValueContainer: h,
      handleMouseDown: g
    }), n({
      // Node methods
      getNode: p.getNode,
      // Traversal
      traverseAllNodesDFS: p.traverseAllNodesDFS,
      traverseAllNodesByIndex: p.traverseAllNodesByIndex,
      // Menu
      openMenu: p.openMenu,
      closeMenu: p.closeMenu,
      toggleMenu: p.toggleMenu,
      // Selection
      select: p.select,
      clear: p.clear,
      // Value
      getValue: p.getValue,
      // Focus
      focusInput: v,
      blurInput: E
    }), (_, C) => (b(), M("div", {
      ref_key: "wrapper",
      ref: l,
      class: X(k.value)
    }, [
      Z(mr),
      Z(Br, {
        ref_key: "control",
        ref: s
      }, null, 512),
      e.appendToBody ? (b(), $(Qr, {
        key: 0,
        ref_key: "portal",
        ref: i
      }, null, 512)) : (b(), $(sn, {
        key: 1,
        ref_key: "menu",
        ref: f
      }, null, 512))
    ], 2));
  }
});
export {
  eo as ALL,
  ro as ALL_WITH_INDETERMINATE,
  Zr as ASYNC_SEARCH,
  to as BRANCH_PRIORITY,
  Zt as CHECKED,
  Jt as INDETERMINATE,
  no as LEAF_PRIORITY,
  Jr as LOAD_CHILDREN_OPTIONS,
  Xr as LOAD_ROOT_OPTIONS,
  oo as Treeselect,
  nt as UNCHECKED,
  oo as default,
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
