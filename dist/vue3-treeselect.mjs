import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, isReactive as p, nextTick as m, normalizeClass as h, normalizeStyle as g, onActivated as _, onBeforeUnmount as v, onDeactivated as y, onMounted as b, onUnmounted as x, openBlock as S, provide as C, reactive as w, ref as T, renderList as E, renderSlot as D, shallowReactive as O, shallowRef as k, toDisplayString as A, toRaw as j, unref as M, useId as N, useSlots as P, watch as F, watchEffect as I, withCtx as L } from "vue";
//#region \0rolldown/runtime.js
var R = Object.create, z = Object.defineProperty, B = Object.getOwnPropertyDescriptor, V = Object.getOwnPropertyNames, ee = Object.getPrototypeOf, te = Object.prototype.hasOwnProperty, H = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ne = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = V(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !te.call(e, s) && s !== n && z(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = B(t, s)) || r.enumerable
	});
	return e;
}, re = (e, t, n) => (n = e == null ? {} : R(ee(e)), ne(t || !e || !e.__esModule || !te.call(e, "default") ? z(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), U = /* @__PURE__ */ re((/* @__PURE__ */ H(((e, t) => {
	function n() {}
	t.exports = n;
})))()), ie = (() => {
	try {
		return process.env.NODE_ENV || "production";
	} catch {
		return "production";
	}
})(), W = ie === "production" ? /* istanbul ignore next */ U.default : function(e, t) {
	if (!e()) {
		let e = ["[Vue-Treeselect Warning]"].concat(t());
		console.error(...e);
	}
};
//#endregion
//#region src/utils/onLeftClick.ts
function G(e) {
	return function(t, ...n) {
		t.type === "mousedown" && t.button === 0 && e.call(this, t, ...n);
	};
}
//#endregion
//#region src/utils/scrollIntoView.ts
function ae(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
	r.bottom + i > n.bottom ? e.scrollTop = Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight) : r.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
//#endregion
//#region src/utils/cssEscape.ts
function K(e) {
	return typeof CSS < "u" && CSS.escape ? CSS.escape(e) : e.replace(/["\\]/g, "\\$&");
}
//#endregion
//#region node_modules/lodash/isObject.js
var oe = /* @__PURE__ */ H(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), q = /* @__PURE__ */ H(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), se = /* @__PURE__ */ H(((e, t) => {
	var n = q(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), ce = /* @__PURE__ */ H(((e, t) => {
	var n = se();
	t.exports = function() {
		return n.Date.now();
	};
})), le = /* @__PURE__ */ H(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), ue = /* @__PURE__ */ H(((e, t) => {
	var n = le(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), de = /* @__PURE__ */ H(((e, t) => {
	t.exports = se().Symbol;
})), fe = /* @__PURE__ */ H(((e, t) => {
	var n = de(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), pe = /* @__PURE__ */ H(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), me = /* @__PURE__ */ H(((e, t) => {
	var n = de(), r = fe(), i = pe(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), he = /* @__PURE__ */ H(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), ge = /* @__PURE__ */ H(((e, t) => {
	var n = me(), r = he(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), _e = /* @__PURE__ */ H(((e, t) => {
	var n = ue(), r = oe(), i = ge(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if (typeof e == "number") return e;
		if (i(e)) return a;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var u = s.test(e);
		return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? a : +e;
	}
	t.exports = u;
})), ve = /* @__PURE__ */ re((/* @__PURE__ */ H(((e, t) => {
	var n = oe(), r = ce(), i = _e(), a = "Expected a function", o = Math.max, s = Math.min;
	function c(e, t, c) {
		var l, u, d, f, p, m, h = 0, g = !1, _ = !1, v = !0;
		if (typeof e != "function") throw TypeError(a);
		t = i(t) || 0, n(c) && (g = !!c.leading, _ = "maxWait" in c, d = _ ? o(i(c.maxWait) || 0, t) : d, v = "trailing" in c ? !!c.trailing : v);
		function y(t) {
			var n = l, r = u;
			return l = u = void 0, h = t, f = e.apply(r, n), f;
		}
		function b(e) {
			return h = e, p = setTimeout(C, t), g ? y(e) : f;
		}
		function x(e) {
			var n = e - m, r = e - h, i = t - n;
			return _ ? s(i, d - r) : i;
		}
		function S(e) {
			var n = e - m, r = e - h;
			return m === void 0 || n >= t || n < 0 || _ && r >= d;
		}
		function C() {
			var e = r();
			if (S(e)) return w(e);
			p = setTimeout(C, x(e));
		}
		function w(e) {
			return p = void 0, v && l ? y(e) : (l = u = void 0, f);
		}
		function T() {
			p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0;
		}
		function E() {
			return p === void 0 ? f : w(r());
		}
		function D() {
			var e = r(), n = S(e);
			if (l = arguments, u = this, m = e, n) {
				if (p === void 0) return b(m);
				if (_) return clearTimeout(p), p = setTimeout(C, t), y(m);
			}
			return p === void 0 && (p = setTimeout(C, t)), f;
		}
		return D.cancel = T, D.flush = E, D;
	}
	t.exports = c;
})))()), ye = (function(e, t) {
	var n = document.createElement("_"), r = n.appendChild(document.createElement("_")), i = n.appendChild(document.createElement("_")), a = r.appendChild(document.createElement("_")), o = void 0, s = void 0;
	return r.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", e.appendChild(n), c(), u;
	function c() {
		l();
		var a = e.offsetWidth, u = e.offsetHeight;
		(a !== o || u !== s) && (o = a, s = u, i.style.width = a * 2 + "px", i.style.height = u * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, t({
			width: a,
			height: u
		})), r.addEventListener("scroll", c), n.addEventListener("scroll", c);
	}
	function l() {
		r.removeEventListener("scroll", c), n.removeEventListener("scroll", c);
	}
	function u() {
		l(), e.removeChild(n);
	}
}), be, xe = [], Se = 100;
function Ce() {
	be = setInterval(() => {
		xe.forEach(Te);
	}, Se);
}
function we() {
	be &&= (clearInterval(be), null);
}
function Te(e) {
	let { $el: t, listener: n, lastWidth: r, lastHeight: i } = e, a = t.offsetWidth, o = t.offsetHeight;
	(r !== a || i !== o) && (e.lastWidth = a, e.lastHeight = o, n({
		width: a,
		height: o
	}));
}
function Ee(e, t) {
	let n = {
		$el: e,
		listener: t,
		lastWidth: null,
		lastHeight: null
	};
	return xe.push(n), Te(n), Ce(), () => {
		let e = xe.indexOf(n);
		e !== -1 && xe.splice(e, 1), xe.length || we();
	};
}
function De(e, t) {
	let n = document.documentMode === 9, r = !0, i = (n ? Ee : ye)(e, (...e) => {
		r || t(...e);
	});
	return r = !1, i;
}
//#endregion
//#region src/utils/setupResizeAndScrollEventListeners.ts
function Oe(e) {
	let t = [], n = e.parentNode;
	for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE;) ke(n) && t.push(n), n = n.parentNode;
	return t.push(window), t;
}
function ke(e) {
	let { overflow: t, overflowX: n, overflowY: r } = getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(t + r + n);
}
function Ae(e, t) {
	let n = Oe(e);
	return window.addEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
		e.addEventListener("scroll", t, { passive: !0 });
	}), function() {
		window.removeEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
			e.removeEventListener("scroll", t, { passive: !0 });
		});
	};
}
//#endregion
//#region src/utils/isNaN.ts
function je(e) {
	return e !== e;
}
//#endregion
//#region node_modules/is-promise/index.mjs
function Me(e) {
	return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
//#endregion
//#region node_modules/lodash/toFinite.js
var Ne = /* @__PURE__ */ H(((e, t) => {
	var n = _e(), r = 1 / 0, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Pe = /* @__PURE__ */ H(((e, t) => {
	var n = Ne();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Fe = /* @__PURE__ */ H(((e, t) => {
	var n = Pe(), r = "Expected a function";
	function i(e, t) {
		var i;
		if (typeof t != "function") throw TypeError(r);
		return e = n(e), function() {
			return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
		};
	}
	t.exports = i;
})), Ie = /* @__PURE__ */ re((/* @__PURE__ */ H(((e, t) => {
	var n = Fe();
	function r(e) {
		return n(2, e);
	}
	t.exports = r;
})))()), J = () => Object.create(null);
//#endregion
//#region src/utils/quickDiff.ts
function Le(e, t) {
	if (e.length !== t.length) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
//#endregion
//#region src/constants.ts
var Re = 0, ze = 1, Be = 2, Ve = "ALL_CHILDREN", Y = "ALL_DESCENDANTS", He = "LEAF_CHILDREN", X = "LEAF_DESCENDANTS", Ue = "LOAD_ROOT_OPTIONS", We = "LOAD_CHILDREN_OPTIONS", Ge = "ASYNC_SEARCH", Ke = "ALL", qe = "BRANCH_PRIORITY", Je = "LEAF_PRIORITY", Ye = "ALL_WITH_INDETERMINATE", Z = {
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
}, Xe = ie === "testing" ? 10 : /* istanbul ignore next */ 200;
//#endregion
//#region src/composables/useNodeTraversal.ts
function Ze(e, t) {
	if (!e.isBranch || !e.children) return;
	let n = e.children.slice();
	for (let e = 0; e < n.length; e++) {
		let r = n[e], i = r.children;
		if (r.isBranch && i) for (let e = 0; e < i.length; e++) n.push(i[e]);
		t(r);
	}
}
function Qe(e, t) {
	let n = e.children;
	if (e.isBranch && n) for (let e = 0; e < n.length; e++) {
		let r = n[e];
		Qe(r, t), t(r);
	}
}
function $e(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		Qe(r, t), t(r);
	}
}
function et(e, t) {
	let n = (e) => {
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			t(i) !== !1 && i.isBranch && i.children && n(i.children);
		}
	};
	n(e);
}
//#endregion
//#region src/composables/useForestState.ts
function tt(e, t) {
	let n = O({
		normalizedOptions: [],
		nodeMap: J(),
		checkedStateMap: O(J()),
		selectedNodeIds: t,
		selectedNodeMap: O(J())
	}), r = J(), i = J(), a = () => !!e.multiple && !e.flat && !e.disableBranchNodes, o = (e) => r[e] ? 2 : a() && i[e] > 0 ? 1 : 0, s = (e, t, r) => {
		let a = n.nodeMap[e];
		if (!a) return;
		let o = a.ancestors;
		for (let e = 0; e < o.length; e++) {
			let n = o[e].id;
			i[n] = (i[n] || 0) + t, r && (r[n] = n);
		}
	};
	return {
		forest: n,
		buildForestState: () => {
			r = J(), i = J();
			let t = J(), c = n.selectedNodeIds;
			for (let e = 0; e < c.length; e++) {
				let n = c[e];
				r[n] || (r[n] = !0, t[n] = !0, a() && s(n, 1));
			}
			n.selectedNodeMap = O(t);
			let l = J();
			if (e.multiple) {
				let { nodeMap: e } = n;
				for (let t in e) {
					let n = e[t].id;
					l[n] = o(n);
				}
			}
			n.checkedStateMap = O(l);
		},
		setSelectedNodeIds: (t) => {
			let i = n.selectedNodeIds, c = J();
			for (let e = 0; e < t.length; e++) c[t[e]] = !0;
			let l = [], u = [], d = J();
			for (let e = 0; e < t.length; e++) {
				let n = t[e];
				!r[n] && !d[n] && (d[n] = !0, l.push(n));
			}
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				!c[t] && !d[t] && (d[t] = !0, u.push(t));
			}
			if (n.selectedNodeIds = t, !l.length && !u.length) return;
			let { selectedNodeMap: f, checkedStateMap: p } = n, m = a(), h = J();
			for (let e = 0; e < u.length; e++) {
				let t = u[e];
				delete r[t], delete f[t], h[t] = t, m && s(t, -1, h);
			}
			for (let e = 0; e < l.length; e++) {
				let t = l[e];
				r[t] = !0, f[t] = !0, h[t] = t, m && s(t, 1, h);
			}
			if (e.multiple) for (let e in h) {
				let t = h[e];
				p[t] = o(t);
			}
		},
		isSelected: (e) => !!e && n.selectedNodeMap[e.id] === !0,
		getCheckedState: (e) => n.checkedStateMap[e.id]
	};
}
//#endregion
//#region src/composables/useNodeNormalization.ts
var nt = ie !== "production", rt = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function it() {
	return {
		isLoaded: !1,
		isLoading: !1,
		loadingError: ""
	};
}
function at(e) {
	return typeof e == "string" ? e : typeof e == "number" && !isNaN(e) ? e + "" : "";
}
function ot(e, t, n, r) {
	let i = (t) => {
		let r = e.normalizer ? e.normalizer(t, n()) : t;
		return !r || r === t ? (e) => t[e] : (e) => rt(r, e) ? r[e] : t[e];
	}, a = (t) => ({
		...t,
		...e.normalizer ? e.normalizer(t, n()) : {}
	}), o = (e, n) => {
		W(() => !(e in t.nodeMap && !t.nodeMap[e].isFallbackNode), () => `Detected duplicate node id ${JSON.stringify(e)}. Their labels are "${t.nodeMap[e].label}" and "${n}" respectively.`);
	}, s = (n, a, c) => {
		let l = t.nodeMap, u = e.matchKeys || ["label"], d = n === null, f = d ? 0 : n.level + 1, p = d ? [] : [n, ...n.ancestors], m = d ? [] : n.index, h = !!e.searchNested, g = Array(a.length);
		for (let t = 0; t < a.length; t++) {
			let _ = a[t], v = i(_), y = v("id"), b = v("label"), x = v("children"), S = v("isDefaultExpanded");
			nt && o(y, b), nt && W(() => x !== void 0 || v("isBranch") !== !0, () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.");
			let C = Array.isArray(x) || x === null, T = !C, E = !!v("isDisabled") || !e.flat && !d && !!n.isDisabled, D = !!v("isNew"), k = {};
			for (let e = 0; e < u.length; e++) {
				let t = u[e];
				k[t] = at(v(t)).toLocaleLowerCase();
			}
			"label" in k || (k.label = at(b).toLocaleLowerCase());
			let A = h ? d ? k.label : n.nestedSearchLabel + " " + k.label : "", M = {
				id: y,
				label: b,
				level: f,
				ancestors: p,
				index: m.concat(t),
				parentNode: n,
				lowerCased: k,
				nestedSearchLabel: A,
				isDisabled: E,
				isNew: D,
				isMatched: !1,
				isHighlighted: !1,
				isBranch: C,
				isLeaf: T,
				isRootNode: d,
				raw: _
			};
			C && (M.childrenStates = w({
				...it(),
				isLoaded: Array.isArray(x)
			}), M.isExpanded = typeof S == "boolean" ? S : f < (e.defaultExpandLevel || 0), M.hasMatchedDescendants = !1, M.hasDisabledDescendants = !1, M.isExpandedOnSearch = !1, M.showAllChildrenOnSearch = !1, M.count = {
				[Ve]: 0,
				[Y]: 0,
				[He]: 0,
				[X]: 0
			}, M.children = []);
			let N = O(M);
			if (l[y] = N, C) {
				let t = Array.isArray(x);
				if (t && (N.children = s(N, x, c)), S === !0) for (let e = 0; e < p.length; e++) p[e].isExpanded = !0;
				!t && typeof e.loadOptions != "function" && W(() => !1, () => "Unloaded branch node detected. \"loadOptions\" prop is required to load its children.");
			}
			if (!d) {
				let e = n.count;
				e[Ve] += 1, e[Y] += 1 + (C ? M.count[Y] : 0), T ? (e[He] += 1, e[X] += 1) : e[X] += M.count[X], (E || M.hasDisabledDescendants) && (n.hasDisabledDescendants = !0);
			}
			let P = c && c[y];
			P && (N.isMatched = !!P.isMatched, N.showAllChildrenOnSearch = !!P.showAllChildrenOnSearch, N.isHighlighted = !!P.isHighlighted, P.isBranch && C && (N.isExpanded = P.isExpanded, N.isExpandedOnSearch = P.isExpandedOnSearch, N.hasMatchedDescendants = P.hasMatchedDescendants, P.childrenStates.isLoaded && !N.childrenStates.isLoaded ? N.isExpanded = !1 : N.childrenStates = w({ ...j(P.childrenStates) }))), C && !N.childrenStates.isLoaded && !N.childrenStates.loadingError && N.isExpanded && typeof e.loadOptions == "function" && r(N), g[t] = N;
		}
		if (e.branchNodesFirst) {
			let e = g.filter((e) => e.isBranch), t = g.filter((e) => e.isLeaf);
			g = e.concat(t);
		}
		return g;
	};
	return {
		normalize: s,
		enhancedNormalizer: a
	};
}
//#endregion
//#region src/composables/useValue.ts
function st(e, t) {
	let n = 0;
	do {
		if (e.level < n) return -1;
		if (t.level < n) return 1;
		if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
		n++;
	} while (1);
}
function ct(e, t) {
	return e.level === t.level ? st(e, t) : e.level - t.level;
}
function lt(e, t, n) {
	let r = J();
	for (let i = 0; i < e.length; i++) {
		let a = e[i], o = n(a);
		if (!o || (t.push(a), o.isRootNode || !o.parentNode)) continue;
		let s = o.parentNode;
		s.id in r || (r[s.id] = s.children.length), --r[s.id] === 0 && e.push(s.id);
	}
}
function ut(e, t, n, r, a) {
	let o = i(() => t.selectedNodeIds.map((e) => n(e))), s = i(() => !e.multiple), c = i(() => {
		let i;
		if (s.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === "ALL") i = t.selectedNodeIds.slice();
		else if (e.valueConsistsOf === "BRANCH_PRIORITY") i = t.selectedNodeIds.filter((e) => {
			let t = n(e);
			return t ? t.isRootNode || !t.parentNode ? !0 : !r(t.parentNode) : !1;
		});
		else if (e.valueConsistsOf === "LEAF_PRIORITY") i = t.selectedNodeIds.filter((e) => {
			let t = n(e);
			return t ? t.isLeaf ? !0 : t.children.length === 0 : !1;
		});
		else if (e.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
			i = t.selectedNodeIds.slice();
			let e = J();
			for (let t = 0; t < i.length; t++) e[i[t]] = !0;
			let n = [];
			o.value.forEach((t) => {
				let r = t.ancestors;
				for (let t = 0; t < r.length; t++) {
					let i = r[t].id;
					e[i] || (e[i] = !0, n.push(i));
				}
			}), i.push(...n);
		} else i = [];
		if (e.sortValueBy === "LEVEL" || e.sortValueBy === "INDEX") {
			let t = e.sortValueBy === "LEVEL" ? ct : st;
			i = i.map((e) => n(e)).sort(t).map((e) => e.id);
		}
		return i;
	});
	return {
		selectedNodes: o,
		single: s,
		internalValue: c,
		hasValue: i(() => c.value.length > 0),
		getValue: () => {
			if (e.valueFormat === "id") return e.multiple ? c.value.slice() : c.value[0];
			let t = c.value.map((e) => n(e).raw);
			return e.multiple ? t : t[0];
		},
		computeSelectedNodeIds: (t) => {
			let r = [];
			if (s.value || e.flat || e.disableBranchNodes || e.valueConsistsOf === "ALL") return t;
			e.valueConsistsOf === "BRANCH_PRIORITY" ? t.forEach((e) => {
				r.push(e);
				let t = n(e);
				t?.isBranch && a(t, (e) => {
					r.push(e.id);
				});
			}) : e.valueConsistsOf === "LEAF_PRIORITY" ? lt(t.slice(), r, n) : e.valueConsistsOf === "ALL_WITH_INDETERMINATE" && lt(t.filter((e) => {
				let t = n(e);
				return t && (t.isLeaf || t.children.length === 0);
			}), r, n);
			let i = J();
			return r.filter((e) => !i[e] && (i[e] = !0, !0));
		}
	};
}
//#endregion
//#region src/composables/useSelection.ts
function dt(e) {
	let { props: t, emit: n, forest: r, getNode: i, getCheckedState: a, setSelectedNodeIds: o, traverseDescendantsBFS: s, traverseDescendantsDFS: c, resetSearchQuery: l, closeMenu: u, hasValue: d, internalValue: f, single: p, getInstanceId: h, localSearch: g, getSearchQuery: _ } = e, v = !1, y = () => {
		let e = v;
		return v = !1, e;
	}, b = (e = r.selectedNodeIds) => {
		let t = e, n = J();
		for (let e = 0; e < t.length; e++) n[t[e]] = !0;
		let i = [], a = J();
		return {
			has: (e) => n[e.id] === !0,
			add: (e) => {
				n[e.id] || (n[e.id] = !0, a[e.id] || (a[e.id] = !0, i.push(e.id)));
			},
			remove: (e) => {
				delete n[e.id];
			},
			commit: () => {
				let e = [];
				for (let r = 0; r < t.length; r++) {
					let i = t[r];
					n[i] && !a[i] && e.push(i);
				}
				for (let t = 0; t < i.length; t++) n[i[t]] && e.push(i[t]);
				o(e);
			}
		};
	}, x = () => {
		d() && (p() || t.allowClearingDisabled ? o([]) : o(r.selectedNodeIds.filter((e) => {
			let t = i(e);
			return t ? t.isDisabled : !1;
		})));
	}, S = (e, n) => {
		if (p() || t.disableBranchNodes) return e.add(n);
		if (t.flat) {
			e.add(n), t.autoSelectAncestors && n.ancestors.forEach((t) => {
				!e.has(t) && !t.isDisabled && e.add(t);
			}), t.autoSelectDescendants && s(n, (t) => {
				!e.has(t) && !t.isDisabled && e.add(t);
			});
			return;
		}
		let r = n.isLeaf || !n.hasDisabledDescendants || !!t.allowSelectingDisabledDescendants;
		if (r && e.add(n), n.isBranch && s(n, (n) => {
			if (!n.isDisabled || t.allowSelectingDisabledDescendants) {
				if (n.isBranch && n.hasDisabledDescendants && !t.allowSelectingDisabledDescendants) return;
				e.add(n);
			}
		}), r) {
			let t = n;
			for (; (t = t.parentNode) !== null && t.children.every(e.has);) e.add(t);
		}
	}, C = (e, n) => {
		if (t.disableBranchNodes) return e.remove(n);
		if (t.flat) {
			e.remove(n), t.autoDeselectAncestors && n.ancestors.forEach((t) => {
				e.has(t) && !t.isDisabled && e.remove(t);
			}), t.autoDeselectDescendants && s(n, (t) => {
				e.has(t) && !t.isDisabled && e.remove(t);
			});
			return;
		}
		let r = !1;
		if (n.isBranch && c(n, (n) => {
			(!n.isDisabled || t.allowSelectingDisabledDescendants) && (e.remove(n), r = !0);
		}), n.isLeaf || r || n.isBranch && n.children.length === 0) {
			e.remove(n);
			let t = n;
			for (; (t = t.parentNode) !== null && e.has(t);) e.remove(t);
		}
	}, w = (e) => {
		if (t.disabled || e.isDisabled) return;
		let i = b(p() ? [] : r.selectedNodeIds), o = t.multiple && !t.flat ? a(e) === 0 : !i.has(e);
		o ? S(i, e) : C(i, e), i.commit();
		let s = h();
		m(() => {
			n(o ? "select" : "deselect", e.raw, s);
		}), (g.active || _() !== "") && o && (p() || t.clearOnSelect) && l(), p() && t.closeOnSelect && (u(), t.searchable && (v = !0));
	};
	return {
		select: w,
		clear: x,
		removeLastValue: () => {
			if (!d()) return;
			if (p()) return t.clearable === !1 ? void 0 : x();
			let e = f(), n = e[e.length - 1];
			if (n == null) return;
			let r = i(n);
			r && w(r);
		},
		resetFlags: y
	};
}
//#endregion
//#region src/composables/useMenu.ts
function ft(e) {
	let { props: t, emit: n, forest: r, localSearch: a, getNode: o, getValue: s, getInstanceId: c, resetSearchQuery: l, loadRootOptions: u, loadChildrenOptions: d, getMenuElement: f, toggleClickOutsideEvent: p, getSelectedNode: h } = e, g = w({
		isOpen: !1,
		current: null,
		lastScrollPosition: 0,
		placement: "bottom"
	}), _ = (e) => a.active ? e.isExpandedOnSearch || !1 : e.isExpanded || !1, v = (e) => !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !t.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch), y = (e) => !(a.active && !v(e)), b = i(() => {
		let e = [], n = a.active, i = n && !!t.flattenSearchResults, o = (t) => {
			for (let r = 0; r < t.length; r++) {
				let a = t[r];
				if ((!n || v(a)) && e.push({
					type: "option",
					key: `option-${a.id}`,
					node: a,
					level: i ? 0 : a.level
				}), !a.isBranch || !_(a)) continue;
				let s = a.childrenStates, c = i ? 0 : a.level;
				if (!s || s.isLoaded) {
					let t = a.children || [];
					o(t), s && !t.length && e.push({
						type: "no-children",
						key: `no-children-${a.id}`,
						node: a,
						level: c
					});
				}
				s?.isLoading && e.push({
					type: "loading",
					key: `loading-${a.id}`,
					node: a,
					level: c
				}), s?.loadingError && e.push({
					type: "error",
					key: `error-${a.id}`,
					node: a,
					level: c
				});
			}
		};
		return o(r.normalizedOptions), e;
	}), x = i(() => {
		let e = [], t = b.value;
		for (let n = 0; n < t.length; n++) t[n].type === "option" && e.push(t[n].node.id);
		return e;
	}), S = i(() => {
		let e = J();
		return x.value.forEach((t, n) => {
			e[t] = n;
		}), e;
	}), C = () => {
		if (g.current == null) return -1;
		let e = S.value[g.current];
		return e === void 0 ? -1 : e;
	}, T = i(() => x.value.length !== 0), E = null, D = (e) => {
		E = e;
	}, O = (e, t = !0) => {
		let n = g.current;
		if (n != null && n in r.nodeMap && (r.nodeMap[n].isHighlighted = !1), !e) {
			g.current = null;
			return;
		}
		if (g.current = e.id, e.isHighlighted = !0, g.isOpen && t) {
			let t = () => {
				let t = f();
				if (!t) return;
				if (E) return E(e);
				let n = t.querySelector(`.vue-treeselect__option[data-id="${K(String(e.id))}"]`);
				n && ae(t, n);
			};
			f() ? t() : m(t);
		}
	}, k = () => {
		if (!T.value) return;
		let e = x.value[0], t = o(e);
		t && O(t);
	}, A = () => {
		if (!T.value) return;
		let e = C() - 1;
		if (e === -1) return M();
		let t = o(x.value[e]);
		t && O(t);
	}, j = () => {
		if (!T.value) return;
		let e = C() + 1;
		if (e === x.value.length) return k();
		let t = o(x.value[e]);
		t && O(t);
	}, M = () => {
		if (!T.value) return;
		let e = x.value, t = o(e[e.length - 1]);
		t && O(t);
	}, N = (e = !1) => {
		let { current: t } = g;
		if (e || t == null || !(t in r.nodeMap) || !y(o(t))) {
			if (a.active) {
				let e = b.value.find((e) => e.type === "option" && e.node.isMatched);
				if (e) return O(e.node);
			}
			k();
		}
	}, P = () => {
		let e = h();
		e && y(e) && S.value[e.id] !== void 0 ? O(e, !1) : N();
	}, F = () => {
		let e = f();
		e && (g.lastScrollPosition = e.scrollTop);
	}, I = () => {
		let e = f();
		e && (e.scrollTop = g.lastScrollPosition);
	}, L = (e = !1) => {
		!g.isOpen || e !== !0 && !t.disabled && t.alwaysOpen || (F(), g.isOpen = !1, p(!1), l(), n("close", s(), c()));
	}, R = () => {
		t.disabled || g.isOpen || (g.isOpen = !0, m(P), m(I), !t.options && !t.async && u(), p(!0), n("open", c()));
	};
	return {
		menu: g,
		setScrollToOptionHandler: D,
		shouldOptionBeIncludedInSearchResult: v,
		menuRows: b,
		visibleOptionIds: x,
		hasVisibleOptions: T,
		shouldExpand: _,
		shouldShowOptionInMenu: y,
		openMenu: R,
		closeMenu: L,
		toggleMenu: () => {
			g.isOpen ? L() : R();
		},
		toggleExpanded: (e) => {
			let t;
			a.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && !e.hasMatchedDescendants && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && e.childrenStates && !e.childrenStates.isLoaded && d(e);
		},
		setCurrentHighlightedOption: O,
		resetHighlightedOptionWhenNecessary: N,
		highlightFirstOption: k,
		highlightPrevOption: A,
		highlightNextOption: j,
		highlightLastOption: M,
		saveMenuScrollPosition: F,
		restoreMenuScrollPosition: I
	};
}
//#endregion
//#region src/composables/useLocalSearch.ts
var pt = /* @__PURE__ */ re((/* @__PURE__ */ H(((e, t) => {
	function n(e, t) {
		var n = t.length, r = e.length;
		if (r > n) return !1;
		if (r === n) return e === t;
		outer: for (var i = 0, a = 0; i < r; i++) {
			for (var o = e.charCodeAt(i); a < n;) if (t.charCodeAt(a++) === o) continue outer;
			return !1;
		}
		return !0;
	}
	t.exports = n;
})))());
function mt(e, t, n, r) {
	let i = O({
		active: !1,
		noResults: !0,
		countMap: J()
	});
	return {
		localSearch: i,
		handleLocalSearch: (a = !1) => {
			let { searchQuery: o } = t, s = () => r(!a);
			if (!o) return i.active = !1, s();
			i.active = !0;
			let c = o.trim().toLocaleLowerCase(), l = c.replace(/\s+/g, " ").split(" "), u = !!e.searchNested && l.length > 1, d = e.matchKeys || ["label"], f = !e.disableFuzzyMatching, p = J(), m = !0, h = (e) => {
				if (u) {
					for (let t = 0; t < l.length; t++) if (e.nestedSearchLabel.indexOf(l[t]) === -1) return !1;
					return !0;
				}
				for (let t = 0; t < d.length; t++) {
					let n = e.lowerCased[d[t]];
					if (n != null && (f ? (0, pt.default)(c, n) : n.indexOf(c) !== -1)) return !0;
				}
				return !1;
			}, g = (e) => {
				let t = h(e);
				if (t && (m = !1), e.isBranch) {
					let t = {
						[Ve]: 0,
						[Y]: 0,
						[He]: 0,
						[X]: 0
					}, n = !1, r = e.children || [];
					for (let e = 0; e < r.length; e++) {
						let i = r[e];
						g(i) && (n = !0);
						let a = i.isMatched;
						if (i.isLeaf) a && (t[Ve]++, t[Y]++, t[He]++, t[X]++);
						else {
							let e = p[i.id];
							a && (t[Ve]++, t[Y]++), t[Y] += e[Y], t[X] += e[X];
						}
					}
					p[e.id] = t, e.isExpandedOnSearch = n || a && !!e.isExpandedOnSearch, e.hasMatchedDescendants = n, a || (e.showAllChildrenOnSearch = !1);
				}
				return e.isMatched = t, t || e.isBranch && !!e.isExpandedOnSearch;
			}, _ = n();
			for (let e = 0; e < _.length; e++) g(_[e]);
			i.countMap = p, i.noResults = m, s();
		}
	};
}
//#endregion
//#region src/composables/useAsyncOptions.ts
function ht(e) {
	return e.message || String(e);
}
function gt(e, t, n, r, i) {
	let a = w(it()), o = (t) => {
		let { action: r, args: i, isPending: a, start: o, succeed: s, fail: c, end: l } = t;
		if (!e.loadOptions || a()) return;
		o();
		let u = (0, Ie.default)((e, t) => {
			e ? c(e) : s(t), l();
		}), d = n(), f = e.loadOptions({
			id: d,
			instanceId: d,
			action: r,
			...i,
			callback: u
		});
		Me(f) && f.then((e) => u(null, e), (e) => u(e || /* @__PURE__ */ Error("Failed to load options"))).catch((e) => {
			console.error(e);
		});
	};
	return {
		rootOptionsStates: a,
		callLoadOptionsProp: o,
		loadRootOptions: () => {
			o({
				action: Ue,
				isPending: () => a.isLoading,
				start: () => {
					a.isLoading = !0, a.loadingError = "";
				},
				succeed: () => {
					a.isLoaded = !0, m(() => {
						r(!0);
					});
				},
				fail: (e) => {
					a.loadingError = ht(e);
				},
				end: () => {
					a.isLoading = !1;
				}
			});
		},
		loadChildrenOptions: (e) => {
			let { id: n, raw: r } = e;
			o({
				action: We,
				args: { parentNode: r },
				isPending: () => {
					let e = t(n);
					return e?.childrenStates ? e.childrenStates.isLoading : !1;
				},
				start: () => {
					let e = t(n);
					e?.childrenStates && (e.childrenStates.isLoading = !0, e.childrenStates.loadingError = "");
				},
				succeed: () => {
					let e = t(n);
					e?.childrenStates && (e.childrenStates.isLoaded = !0), i();
				},
				fail: (e) => {
					let r = t(n);
					r?.childrenStates && (r.childrenStates.loadingError = ht(e));
				},
				end: () => {
					let e = t(n);
					e?.childrenStates && (e.childrenStates.isLoading = !1);
				}
			});
		}
	};
}
//#endregion
//#region src/composables/useRemoteSearch.ts
var _t = () => O({
	...it(),
	options: []
}), vt = Object.freeze({
	...it(),
	options: []
});
function yt(e, t, n, r, i) {
	let a = O(J()), o = () => a[t.searchQuery] || vt, s = (t) => {
		let n = a[t];
		return n || (n = _t(), a[t] = n), t === "" && (Array.isArray(e.defaultOptions) ? (n.options = e.defaultOptions, n.isLoaded = !0) : e.defaultOptions !== !0 && (n.isLoaded = !0)), n;
	};
	return {
		remoteSearch: a,
		getRemoteSearchEntry: o,
		handleRemoteSearch: () => {
			let { searchQuery: a } = t, o = s(a), c = () => {
				r(), i(!0);
			};
			if ((a === "" || e.cacheOptions) && o.isLoaded) return c();
			n({
				action: Ge,
				args: { searchQuery: a },
				isPending: () => o.isLoading,
				start: () => {
					o.isLoading = !0, o.isLoaded = !1, o.loadingError = "";
				},
				succeed: (e) => {
					o.isLoaded = !0, o.options = Array.isArray(e) ? e : [], t.searchQuery === a && c();
				},
				fail: (e) => {
					o.loadingError = ht(e);
				},
				end: () => {
					o.isLoading = !1;
				}
			});
		}
	};
}
//#endregion
//#region src/composables/useTreeselect.ts
function bt(e) {
	W(() => !e.async || !!e.searchable, () => "For async search mode, the value of \"searchable\" prop must be true."), e.options == null && !e.loadOptions && W(() => !1, () => "Are you meant to dynamically load options? You need to use \"loadOptions\" prop."), e.flat && W(() => !!e.multiple, () => "You are using flat mode. But you forgot to add \"multiple=true\"?"), e.flat || [
		"autoSelectAncestors",
		"autoSelectDescendants",
		"autoDeselectAncestors",
		"autoDeselectDescendants"
	].forEach((t) => {
		W(() => !e[t], () => `"${t}" only applies to flat mode.`);
	});
}
function xt(e, t, n) {
	let { getInstanceId: r, getMenuElement: a, getControlElement: o, toggleClickOutsideEvent: s, focusInput: c } = n;
	bt(e);
	let l = w({
		isFocused: !1,
		searchQuery: ""
	}), u = () => {
		l.searchQuery = "";
	}, d = (t) => ({
		...t,
		...e.normalizer ? e.normalizer(t, r()) : {}
	}), f = () => !1, m = () => e.modelValue == null ? [] : e.multiple ? Array.isArray(e.modelValue) ? e.modelValue : [] : e.modelValue === "" && !f("") ? [] : [e.modelValue], h = () => {
		let t = m();
		return e.valueFormat === "id" ? t.slice() : t.map((e) => d(e).id);
	}, g = i(() => {
		let t = J();
		return e.valueFormat === "id" || m().forEach((e) => {
			if (!e) return;
			let n = d(e).id;
			n in t || (t[n] = e);
		}), t;
	}), v = (e) => g.value[e] || { id: e }, { forest: S, isSelected: C, getCheckedState: T, buildForestState: E, setSelectedNodeIds: D } = tt(e, h());
	f = (e) => e in S.nodeMap;
	let k = (e) => {
		let t = g.value[e], n = t || { id: e }, r = t && d(t).label || `${e} (unknown)`, i = O({
			id: e,
			label: r,
			level: 0,
			ancestors: [],
			index: [-1],
			parentNode: null,
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
			raw: n
		});
		return S.nodeMap[e] = i, i;
	}, A = (e) => {
		if (e == null) return W(() => !1, () => `Invalid node id: ${e}`), null;
		let { nodeMap: t } = S;
		return e in t ? t[e] : k(e);
	}, j = () => {}, { rootOptionsStates: M, loadRootOptions: N, loadChildrenOptions: P, callLoadOptionsProp: I } = gt(e, A, r, (e) => j(e), () => {
		(e.async || !p(e.options)) && U();
	}), { normalize: L } = ot(e, S, r, P), { selectedNodes: R, single: z, internalValue: B, hasValue: V, getValue: ee, computeSelectedNodeIds: te } = ut(e, S, A, C, Ze), H = (e, t = !1) => {
		let n = te(e);
		t ? (Le(S.selectedNodeIds, n) && (S.selectedNodeIds = n), E()) : Le(S.selectedNodeIds, n) && D(n);
	}, ne = (e) => {
		S.selectedNodeIds.forEach((t) => {
			let n = e[t];
			n && (S.nodeMap[t] = O({
				...n,
				isFallbackNode: !0
			}));
		});
	}, re, U = () => {
		let t = e.async ? re().options : e.options;
		if (Array.isArray(t)) {
			let n = S.nodeMap;
			S.nodeMap = J(), ne(n), S.normalizedOptions = L(null, t, n);
			let r = !e.multiple && e.modelValue === "" ? h() : B.value;
			H(r, !0), e.async || ie();
		} else S.normalizedOptions = [];
	}, ie = () => {}, G = yt(e, l, I, U, (e) => j(e));
	re = G.getRemoteSearchEntry;
	let { handleRemoteSearch: ae } = G, K = mt(e, l, () => S.normalizedOptions, (e) => j(e)), { handleLocalSearch: oe } = K;
	ie = () => {
		K.localSearch.active && oe(!0);
	};
	let q = ft({
		props: e,
		emit: t,
		forest: S,
		localSearch: K.localSearch,
		getNode: A,
		getValue: ee,
		getInstanceId: r,
		resetSearchQuery: u,
		loadRootOptions: N,
		loadChildrenOptions: P,
		getMenuElement: a,
		toggleClickOutsideEvent: s,
		getSelectedNode: () => z.value && S.selectedNodeIds.length ? A(S.selectedNodeIds[0]) : null
	});
	j = q.resetHighlightedOptionWhenNecessary;
	let se = dt({
		props: e,
		emit: t,
		forest: S,
		getNode: A,
		getCheckedState: T,
		setSelectedNodeIds: D,
		traverseDescendantsBFS: Ze,
		traverseDescendantsDFS: Qe,
		resetSearchQuery: u,
		closeMenu: q.closeMenu,
		hasValue: () => V.value,
		internalValue: () => B.value,
		single: () => z.value,
		getInstanceId: r,
		localSearch: K.localSearch,
		getSearchQuery: () => l.searchQuery
	}), ce = i(() => typeof e.showCountOnSearch == "boolean" ? e.showCountOnSearch : !!e.showCount), le = i(() => S.normalizedOptions.some((e) => e.isBranch)), ue = i(() => K.localSearch.active && !!e.flattenSearchResults);
	return F(() => e.alwaysOpen, (e) => {
		e ? q.openMenu() : q.closeMenu();
	}), F(() => e.disabled, (t) => {
		t && q.menu.isOpen ? q.closeMenu() : !t && !q.menu.isOpen && e.alwaysOpen && q.openMenu();
	}), F([
		() => e.branchNodesFirst,
		() => e.flat,
		() => (e.matchKeys || []).join("\0"),
		() => e.searchNested
	], () => U()), F(B, (e, n) => {
		Le(e, n) && t("update:modelValue", ee(), r());
	}), F([() => e.multiple, () => e.disableBranchNodes], () => {
		E();
	}), F(() => e.options, () => {
		e.async || (U(), M.isLoaded = Array.isArray(e.options));
	}, {
		deep: !0,
		immediate: !0
	}), F(() => l.searchQuery, () => {
		e.async ? ae() : oe(), t("search-change", l.searchQuery, r());
	}), F(h, (e) => {
		Le(e, B.value) && H(e);
	}), F(() => e.defaultOptions, () => {
		e.async && l.searchQuery === "" && ae();
	}), b(() => {
		e.autoFocus && c(), !e.options && !e.async && e.autoLoadRootOptions && N(), e.alwaysOpen && q.openMenu(), e.async && e.defaultOptions && ae();
	}), x(() => {
		s(!1);
	}), y(() => {
		q.closeMenu(!0);
	}), _(() => {
		e.alwaysOpen && q.openMenu();
	}), {
		forest: S,
		trigger: l,
		menu: q.menu,
		localSearch: K.localSearch,
		remoteSearch: G.remoteSearch,
		rootOptionsStates: M,
		selectedNodes: R,
		single: z,
		internalValue: B,
		hasValue: V,
		menuRows: q.menuRows,
		visibleOptionIds: q.visibleOptionIds,
		hasVisibleOptions: q.hasVisibleOptions,
		showCountOnSearchComputed: ce,
		hasBranchNodes: le,
		shouldFlattenOptions: ue,
		getNode: A,
		isSelected: C,
		getCheckedState: T,
		traverseDescendantsBFS: Ze,
		traverseDescendantsDFS: Qe,
		traverseAllNodesDFS: (e) => $e(S.normalizedOptions, e),
		traverseAllNodesByIndex: (e) => et(S.normalizedOptions, e),
		getValue: ee,
		extractCheckedNodeIdsFromValue: h,
		extractNodeFromValue: v,
		fixSelectedNodeIds: H,
		select: se.select,
		clear: se.clear,
		removeLastValue: se.removeLastValue,
		openMenu: q.openMenu,
		closeMenu: q.closeMenu,
		toggleMenu: q.toggleMenu,
		toggleExpanded: q.toggleExpanded,
		shouldExpand: q.shouldExpand,
		shouldShowOptionInMenu: q.shouldShowOptionInMenu,
		setScrollToOptionHandler: q.setScrollToOptionHandler,
		setCurrentHighlightedOption: q.setCurrentHighlightedOption,
		resetHighlightedOptionWhenNecessary: q.resetHighlightedOptionWhenNecessary,
		highlightFirstOption: q.highlightFirstOption,
		highlightPrevOption: q.highlightPrevOption,
		highlightNextOption: q.highlightNextOption,
		highlightLastOption: q.highlightLastOption,
		handleLocalSearch: oe,
		handleRemoteSearch: ae,
		getRemoteSearchEntry: G.getRemoteSearchEntry,
		resetSearchQuery: u,
		loadRootOptions: N,
		loadChildrenOptions: P,
		initialize: U,
		buildForestState: E,
		resetFlags: se.resetFlags,
		getMenu: a,
		getControl: o,
		getInstanceId: r
	};
}
//#endregion
//#region src/context.ts
var St = Symbol("vue-treeselect");
function Q() {
	let e = f(St, null);
	if (!e) throw Error("[Vue-Treeselect] This component must be used inside <Treeselect>.");
	return e;
}
//#endregion
//#region src/locales/index.ts
var Ct = {
	placeholder: "Select...",
	noResultsText: "No results found...",
	noOptionsText: "No options available.",
	noChildrenText: "No sub-options.",
	loadingText: "Loading...",
	searchPromptText: "Type to search...",
	retryText: "Retry?",
	retryTitle: "Click to retry",
	clearAllText: "Clear all",
	clearValueText: "Clear value",
	limitText: (e) => `and ${e} more`
}, wt = { en: Ct };
function Tt(e, t) {
	wt[e] = {
		...Ct,
		...t
	};
}
var Et = Symbol("vue-treeselect-locale");
function Dt(e) {
	return e ? typeof e == "string" ? wt[e] || wt[e.toLowerCase().split(/[-_]/)[0]] || Ct : {
		...Ct,
		...e
	} : Ct;
}
//#endregion
//#region src/components/HiddenFields.vue?vue&type=script&setup=true&lang.ts
var Ot = ["name", "value"], kt = /* @__PURE__ */ d({
	__name: "HiddenFields",
	setup(t) {
		let n = Q(), r = n.props;
		function a(e) {
			return typeof e == "string" ? e : e != null && !je(e) ? JSON.stringify(e) : "";
		}
		let o = i(() => {
			if (!r.name || r.disabled || !n.hasValue.value) return [];
			let e = n.internalValue.value.map(a);
			return r.multiple && r.joinValues && (e = [e.join(r.delimiter)]), e;
		});
		return (t, r) => (S(!0), s(e, null, E(o.value, (e, t) => (S(), s("input", {
			key: `hidden-field-${t}`,
			type: "hidden",
			name: M(n).props.name,
			value: e
		}, null, 8, Ot))), 128));
	}
}), At = (e) => e.renderSlot(e.scope);
At.props = ["renderSlot", "scope"];
//#endregion
//#region src/components/Input.vue?vue&type=script&setup=true&lang.ts
var jt = {
	key: 0,
	class: "vue-treeselect__input-container"
}, Mt = [
	"tabindex",
	"required",
	"value"
], Nt = ["tabindex"], Pt = /* @__PURE__ */ d({
	__name: "Input",
	setup(t, { expose: n }) {
		let r = Q(), a = r.props, l = T(null), u = T(), d = T(5), f = T(r.trigger.searchQuery), p = !1;
		F(l, (e, t) => {
			e ? r.setInputElement(e) : t && r.getInput() === t && r.setInputElement(null);
		}, { flush: "sync" });
		let h = i(() => a.searchable), _ = i(() => a.disabled), y = i(() => h.value && !_.value && a.multiple), b = i(() => ({ width: y.value ? `${d.value}px` : void 0 })), x = [
			Z.ENTER,
			Z.END,
			Z.HOME,
			Z.ARROW_LEFT,
			Z.ARROW_UP,
			Z.ARROW_RIGHT,
			Z.ARROW_DOWN
		], C = [
			Z.HOME,
			Z.END,
			Z.ARROW_LEFT,
			Z.ARROW_RIGHT
		], w = () => {
			u.value && (d.value = Math.max(5, u.value.scrollWidth + 15));
		}, E = () => {
			r.trigger.searchQuery = f.value;
		}, D = () => {
			f.value = "", P.cancel(), E();
		}, O = () => {
			!_.value && l.value && l.value.focus();
		}, k = () => {
			l.value?.blur();
		}, j = () => {
			r.trigger.isFocused = !0, a.openOnFocus && r.openMenu();
		}, N = (e) => {
			let t = r.getMenu();
			if (t && document.activeElement === t) return O();
			let n = e.relatedTarget;
			if (t && n && t.contains(n)) {
				r.trigger.isFocused = !1;
				return;
			}
			r.trigger.isFocused = !1, r.closeMenu();
		}, P = (0, ve.default)(E, a.searchDebounceDelay ?? Xe, {
			leading: !0,
			trailing: !0
		}), I = () => {
			f.value ? P() : (P.cancel(), E());
		}, L = (e) => {
			f.value = e.target.value, !p && I();
		}, R = () => {
			p = !0;
		}, z = (e) => {
			p = !1, f.value = e.target.value, I();
		}, B = (e) => {
			let t = e.key;
			if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || p) && !(f.value.length && C.includes(t) && r.menu.isOpen)) {
				if (!r.menu.isOpen && x.includes(t)) return e.preventDefault(), r.openMenu();
				switch (t) {
					case Z.BACKSPACE:
						a.backspaceRemoves && !f.value.length && r.removeLastValue();
						break;
					case Z.ENTER: {
						if (e.preventDefault(), r.menu.current === null) return;
						let t = r.getNode(r.menu.current);
						if (!t || !r.shouldShowOptionInMenu(t) || t.isBranch && a.disableBranchNodes) return;
						r.select(t);
						break;
					}
					case Z.ESCAPE:
						f.value.length ? D() : r.menu.isOpen && r.closeMenu();
						break;
					case Z.END:
						e.preventDefault(), r.highlightLastOption();
						break;
					case Z.HOME:
						e.preventDefault(), r.highlightFirstOption();
						break;
					case Z.ARROW_LEFT: {
						let t = r.menu.current;
						if (t === null) break;
						let n = r.getNode(t);
						n && (n.isBranch && r.shouldExpand(n) ? (e.preventDefault(), r.toggleExpanded(n)) : !n.isRootNode && n.parentNode && (e.preventDefault(), r.setCurrentHighlightedOption(n.parentNode)));
						break;
					}
					case Z.ARROW_UP:
						e.preventDefault(), r.highlightPrevOption();
						break;
					case Z.ARROW_RIGHT: {
						let t = r.menu.current;
						if (t === null) break;
						let n = r.getNode(t);
						n && n.isBranch && !r.shouldExpand(n) && (e.preventDefault(), r.toggleExpanded(n));
						break;
					}
					case Z.ARROW_DOWN:
						e.preventDefault(), r.highlightNextOption();
						break;
					case Z.DELETE:
						a.deleteRemoves && !f.value.length && r.removeLastValue();
						break;
					default: r.openMenu();
				}
			}
		}, V = (e) => {
			f.value.length && e.stopPropagation();
		};
		return F(() => r.trigger.searchQuery, (e) => {
			f.value = e;
		}), F(f, () => {
			y.value && m(w);
		}), v(() => {
			P.cancel(), l.value && r.getInput() === l.value && r.setInputElement(null);
		}), n({
			clear: D,
			focus: O,
			blur: k
		}), (t, n) => h.value ? (S(), s("div", jt, [_.value ? o("", !0) : (S(), s(e, { key: 0 }, [c("input", {
			ref_key: "inputRef",
			ref: l,
			class: "vue-treeselect__input",
			type: "text",
			autocomplete: "off",
			tabindex: M(a).tabIndex,
			required: M(a).required && !M(r).hasValue.value,
			value: f.value,
			style: g(b.value),
			onFocus: j,
			onInput: L,
			onCompositionstart: R,
			onCompositionend: z,
			onBlur: N,
			onKeydown: B,
			onMousedown: V
		}, null, 44, Mt), y.value ? (S(), s("div", {
			key: 0,
			ref_key: "sizerRef",
			ref: u,
			class: "vue-treeselect__sizer"
		}, A(f.value), 513)) : o("", !0)], 64))])) : (S(), s("div", {
			key: 1,
			ref_key: "inputRef",
			ref: l,
			class: "vue-treeselect__input-container",
			tabindex: _.value ? void 0 : M(a).tabIndex,
			onFocus: j,
			onBlur: N,
			onKeydown: B
		}, null, 40, Nt));
	}
}), Ft = /* @__PURE__ */ d({
	__name: "Placeholder",
	setup(e) {
		let t = Q(), n = i(() => ({
			"vue-treeselect__placeholder": !0,
			"vue-treeselect-helper-zoom-effect-off": !0,
			"vue-treeselect-helper-hide": t.hasValue.value || !!t.trigger.searchQuery
		}));
		return (e, r) => (S(), s("div", { class: h(n.value) }, A(M(t).texts.value.placeholder), 3));
	}
}), It = {
	key: 0,
	class: "vue-treeselect__single-value"
}, Lt = /* @__PURE__ */ d({
	__name: "SingleValue",
	setup(t) {
		let n = Q(), r = i(() => n.hasValue.value && !n.trigger.searchQuery), c = i(() => n.selectedNodes.value[0]);
		return (t, i) => (S(), s(e, null, [
			r.value ? (S(), s("div", It, [M(n).slots["value-label"] ? (S(), a(M(At), {
				key: 0,
				"render-slot": M(n).slots["value-label"],
				scope: { node: c.value }
			}, null, 8, ["render-slot", "scope"])) : (S(), s(e, { key: 1 }, [l(A(c.value.label), 1)], 64))])) : o("", !0),
			u(Ft),
			u(Pt)
		], 64));
	}
}), Rt = { name: "vue-treeselect--x" }, zt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Bt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 348.333 348.333"
};
function Vt(e, t, n, r, i, a) {
	return S(), s("svg", Bt, [...t[0] ||= [c("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)]]);
}
var Ht = /*#__PURE__*/ zt(Rt, [["render", Vt]]), Ut = { class: "vue-treeselect__multi-value-item-container" }, Wt = { class: "vue-treeselect__multi-value-label" }, Gt = { class: "vue-treeselect__icon vue-treeselect__value-remove" }, Kt = /* @__PURE__ */ d({
	__name: "MultiValueItem",
	props: { node: {} },
	setup(t) {
		let n = t, r = Q(), o = i(() => ({
			"vue-treeselect__multi-value-item": !0,
			"vue-treeselect__multi-value-item-disabled": n.node.isDisabled,
			"vue-treeselect__multi-value-item-new": n.node.isNew
		})), d = G(function() {
			r.select(n.node);
		});
		return (n, i) => (S(), s("div", Ut, [c("div", {
			class: h(o.value),
			onMousedown: i[0] ||= (...e) => M(d) && M(d)(...e)
		}, [c("span", Wt, [M(r).slots["value-label"] ? (S(), a(M(At), {
			key: 0,
			"render-slot": M(r).slots["value-label"],
			scope: { node: t.node }
		}, null, 8, ["render-slot", "scope"])) : (S(), s(e, { key: 1 }, [l(A(t.node.label), 1)], 64))]), c("span", Gt, [u(Ht)])], 34)]));
	}
}), qt = {
	key: "exceed-limit-tip",
	class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Jt = { class: "vue-treeselect__limit-tip-text" }, Yt = {
	key: 1,
	class: "vue-treeselect__multi-value"
}, Xt = {
	key: "exceed-limit-tip",
	class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
}, Zt = { class: "vue-treeselect__limit-tip-text" }, Qt = 50, $t = /* @__PURE__ */ d({
	__name: "MultiValue",
	setup(t) {
		let n = Q(), l = n.props, d = i(() => n.internalValue.value.slice(0, l.limit).map((e) => n.getNode(e)).filter((e) => e !== null)), f = T(!0);
		I(() => {
			n.trigger.isFocused || (f.value = d.value.length <= Qt);
		});
		let p = i(() => n.internalValue.value.length > (l.limit ?? Infinity)), m = i(() => {
			let e = n.internalValue.value.length - (l.limit ?? Infinity);
			return n.texts.value.limitText(e);
		});
		return (t, n) => f.value ? (S(), a(r, {
			key: 0,
			class: "vue-treeselect__multi-value",
			tag: "div",
			name: "vue-treeselect__multi-value-item--transition",
			appear: ""
		}, {
			default: L(() => [
				(S(!0), s(e, null, E(d.value, (e) => (S(), a(Kt, {
					key: `multi-value-item-${e.id}`,
					node: e
				}, null, 8, ["node"]))), 128)),
				p.value ? (S(), s("div", qt, [c("span", Jt, A(m.value), 1)])) : o("", !0),
				u(Ft, { key: "placeholder" }),
				u(Pt, { key: "input" })
			]),
			_: 1
		})) : (S(), s("div", Yt, [
			(S(!0), s(e, null, E(d.value, (e) => (S(), a(Kt, {
				key: `multi-value-item-${e.id}`,
				node: e
			}, null, 8, ["node"]))), 128)),
			p.value ? (S(), s("div", Xt, [c("span", Zt, A(m.value), 1)])) : o("", !0),
			u(Ft, { key: "placeholder" }),
			u(Pt, { key: "input" })
		]));
	}
}), en = { name: "vue-treeselect--arrow" }, tn = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 292.362 292.362"
};
function nn(e, t, n, r, i, a) {
	return S(), s("svg", tn, [...t[0] ||= [c("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)]]);
}
var rn = /*#__PURE__*/ zt(en, [["render", nn]]), an = ["title"], on = /* @__PURE__ */ d({
	__name: "Control",
	setup(e) {
		let t = Q(), n = t.props, r = T(), l = T();
		b(() => {
			t.setControlElement(r.value || null), t.setValueContainerElement(l.value || null);
		});
		let d = !1;
		v(() => {
			d = !0, t.setControlElement(null), t.setValueContainerElement(null);
		});
		let f = i(() => t.hasValue.value && t.internalValue.value.some((e) => {
			let n = t.getNode(e);
			return n && !n.isDisabled;
		})), p = i(() => n.clearable && !n.disabled && t.hasValue.value && (f.value || n.allowClearingDisabled)), m = i(() => !n.alwaysOpen || !t.menu.isOpen), g = i(() => n.multiple ? t.texts.value.clearAllText : t.texts.value.clearValueText), _ = i(() => ({
			"vue-treeselect__control-arrow": !0,
			"vue-treeselect__control-arrow--rotated": t.menu.isOpen
		})), y = G(function(e) {
			e.stopPropagation(), e.preventDefault();
			let r = !n.beforeClearAll || n.beforeClearAll(), i = (e) => {
				e && !d && t.clear();
			};
			Me(r) ? r.then(i) : setTimeout(() => i(r), 0);
		}), x = G(function(e) {
			e.preventDefault(), e.stopPropagation(), t.focusInput(), t.toggleMenu();
		});
		return (e, n) => (S(), s("div", {
			ref_key: "controlRef",
			ref: r,
			class: "vue-treeselect__control",
			onMousedown: n[2] ||= (...e) => M(t).handleMouseDown && M(t).handleMouseDown(...e)
		}, [
			c("div", {
				ref_key: "valueContainerRef",
				ref: l,
				class: "vue-treeselect__value-container"
			}, [M(t).single.value ? (S(), a(Lt, { key: 0 })) : (S(), a($t, { key: 1 }))], 512),
			p.value ? (S(), s("div", {
				key: 0,
				class: "vue-treeselect__x-container",
				title: g.value,
				onMousedown: n[0] ||= (...e) => M(y) && M(y)(...e)
			}, [u(Ht, { class: "vue-treeselect__x" })], 40, an)) : o("", !0),
			m.value ? (S(), s("div", {
				key: 1,
				class: "vue-treeselect__control-arrow-container",
				onMousedown: n[1] ||= (...e) => M(x) && M(x)(...e)
			}, [u(rn, { class: h(_.value) }, null, 8, ["class"])], 32)) : o("", !0)
		], 544));
	}
}), sn = { class: "vue-treeselect__icon-container" }, $ = /* @__PURE__ */ d({
	__name: "Tip",
	props: {
		type: {},
		icon: {}
	},
	setup(e) {
		return (t, n) => (S(), s("div", { class: h(`vue-treeselect__tip vue-treeselect__${e.type}-tip`) }, [c("div", sn, [c("span", { class: h(`vue-treeselect__icon-${e.icon}`) }, null, 2)]), c("span", { class: h(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`) }, [D(t.$slots, "default")], 2)], 2));
	}
}), cn = ["data-id"], ln = {
	key: 0,
	class: "vue-treeselect__option-arrow-container"
}, un = {
	key: 1,
	class: "vue-treeselect__option-arrow-placeholder"
}, dn = { class: "vue-treeselect__label-container" }, fn = {
	key: 0,
	class: "vue-treeselect__checkbox-container"
}, pn = {
	key: 2,
	class: "vue-treeselect__label"
}, mn = {
	key: 0,
	class: "vue-treeselect__count"
}, hn = /* @__PURE__ */ d({
	name: "vue-treeselect--option",
	__name: "Option",
	props: {
		node: {},
		level: {}
	},
	setup(e) {
		let t = e, n = Q(), r = n.props, i = () => {
			let e = n.getCheckedState(t.node);
			return {
				"vue-treeselect__checkbox": !0,
				"vue-treeselect__checkbox--checked": e === 2,
				"vue-treeselect__checkbox--indeterminate": e === 1,
				"vue-treeselect__checkbox--unchecked": e === 0,
				"vue-treeselect__checkbox--disabled": t.node.isDisabled
			};
		}, u = () => t.node.isBranch && (n.localSearch.active ? n.showCountOnSearchComputed.value : !!r.showCount), d = () => {
			if (!u()) return NaN;
			let { node: e } = t, i = r.showCountOf || "ALL_CHILDREN";
			if (n.localSearch.active) {
				let t = n.localSearch.countMap[e.id];
				return t ? t[i] : 0;
			}
			return e.count ? e.count[i] : 0;
		};
		return (t, f) => (S(), s("div", { class: h(`vue-treeselect__list-item vue-treeselect__indent-level-${e.level}`) }, [c("div", {
			class: h({
				"vue-treeselect__option": !0,
				"vue-treeselect__option--disabled": e.node.isDisabled,
				"vue-treeselect__option--selected": M(n).isSelected(e.node),
				"vue-treeselect__option--highlight": e.node.isHighlighted,
				"vue-treeselect__option--matched": M(n).localSearch.active && e.node.isMatched
			}),
			"data-id": e.node.id
		}, [e.node.isBranch && !M(n).shouldFlattenOptions.value ? (S(), s("div", ln, [(S(), s("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 292.362 292.362",
			class: h({
				"vue-treeselect__option-arrow": !0,
				"vue-treeselect__option-arrow--rotated": M(n).shouldExpand(e.node)
			})
		}, [...f[0] ||= [c("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)]], 2))])) : M(n).hasBranchNodes.value && !M(n).shouldFlattenOptions.value ? (S(), s("div", un, " \xA0 ")) : o("", !0), c("div", dn, [!M(n).single.value && !(M(r).disableBranchNodes && e.node.isBranch) ? (S(), s("div", fn, [c("span", { class: h(i()) }, [...f[1] ||= [c("span", { class: "vue-treeselect__check-mark" }, null, -1), c("span", { class: "vue-treeselect__minus-mark" }, null, -1)]], 2)])) : o("", !0), M(n).slots["option-label"] ? (S(), a(M(At), {
			key: 1,
			"render-slot": M(n).slots["option-label"],
			scope: {
				node: e.node,
				shouldShowCount: u(),
				count: d(),
				labelClassName: "vue-treeselect__label",
				countClassName: "vue-treeselect__count"
			}
		}, null, 8, ["render-slot", "scope"])) : (S(), s("label", pn, [l(A(e.node.label) + " ", 1), u() ? (S(), s("span", mn, "(" + A(d()) + ")", 1)) : o("", !0)]))])], 10, cn)], 2));
	}
}), gn = ["title", "data-id"], _n = ["title", "data-id"], vn = 8, yn = 32, bn = 3, xn = 100, Sn = 25, Cn = 1e3, wn = /* @__PURE__ */ d({
	__name: "OptionList",
	props: { virtual: { type: Boolean } },
	setup(t, { expose: n }) {
		let r = t, u = Q(), d = u.props, f = T(null), p = T(0), _ = T(0), y = T(null), x = u.menuRows, C = i(() => d.optionHeight || y.value || yn), w = () => Math.max(xn, Math.ceil((d.maxHeight || 300) / 20) * bn), D = T(r.virtual ? Infinity : w()), O = 200, k = null, j = !1, N = () => D.value >= x.value.length, P = () => {
			k || j || N() || (k = setTimeout(I, 0));
		};
		async function I() {
			if (k = null, j || N()) return;
			let e = performance.now();
			D.value = Math.min(x.value.length, D.value + O), await m();
			let t = Math.max(1, performance.now() - e);
			O = Math.min(2e3, Math.max(50, Math.round(O * Sn / t))), P();
		}
		let R = (e) => {
			e < D.value || (D.value = Math.min(x.value.length, e + 1 + O), P());
		};
		r.virtual || F(x, (e, t) => {
			let n = D.value >= t.length, r = e.length - t.length;
			n && r <= Math.max(Cn, t.length) ? D.value = e.length : D.value = Math.max(w(), Math.min(D.value, t.length)), P();
		});
		let z = i(() => {
			let e = x.value.length;
			if (!r.virtual) return {
				start: 0,
				end: Math.min(e, D.value)
			};
			let t = C.value, n = u.getMenu()?.clientHeight || d.maxHeight || 300, i = Math.max(0, p.value - _.value);
			return {
				start: Math.max(0, Math.min(Math.floor(i / t), e) - vn),
				end: Math.min(e, Math.ceil((i + n) / t) + vn)
			};
		}), B = i(() => {
			let { start: e, end: t } = z.value;
			return e === 0 && t === x.value.length ? x.value : x.value.slice(e, t);
		}), V = i(() => r.virtual ? 0 : Math.max(0, x.value.length - D.value) * C.value), ee = i(() => r.virtual ? {
			position: "relative",
			height: `${x.value.length * C.value}px`
		} : void 0), te = i(() => r.virtual ? { transform: `translateY(${z.value.start * C.value}px)` } : void 0), H = () => {
			let e = f.value;
			if (e && (_.value = e.offsetTop, !d.optionHeight)) {
				let t = e.querySelector(".vue-treeselect__list-item");
				t && t.offsetHeight > 0 && (y.value = t.offsetHeight);
			}
		}, ne = () => {
			let e = u.getMenu();
			if (e) {
				if (f.value && (_.value = f.value.offsetTop), r.virtual) p.value = e.scrollTop;
				else if (!N()) {
					let t = e.scrollTop + e.clientHeight - _.value;
					R(Math.ceil(t / C.value));
				}
			}
		}, re = (e) => {
			let t = u.getMenu();
			if (!t) return;
			if (!r.virtual) {
				let n = () => f.value?.querySelector(`.vue-treeselect__option[data-id="${K(String(e.id))}"]`), r = n();
				if (r) return ae(t, r);
				let i = x.value.findIndex((t) => t.type === "option" && t.node === e);
				if (i === -1) return;
				R(i), m(() => {
					let e = n();
					e && ae(t, e);
				});
				return;
			}
			let n = x.value.findIndex((t) => t.type === "option" && t.node === e);
			if (n === -1) return;
			let i = C.value, a = _.value + n * i;
			a < t.scrollTop ? t.scrollTop = a : a + i > t.scrollTop + t.clientHeight && (t.scrollTop = a + i - t.clientHeight), p.value = t.scrollTop;
		};
		b(() => {
			u.setScrollToOptionHandler(re), ne(), m(H), P();
		}), v(() => {
			j = !0, k && clearTimeout(k), u.setScrollToOptionHandler(null);
		});
		let U = (e) => {
			let t = e?.getAttribute("data-id");
			return t == null ? null : u.forest.nodeMap[t] || null;
		}, ie = (e) => {
			if (e.button !== 0) return;
			let t = e.target, n = t.closest(".vue-treeselect__retry");
			if (n) {
				let e = U(n);
				e && u.loadChildrenOptions(e);
				return;
			}
			let r = t.closest(".vue-treeselect__option"), i = U(r);
			i && (t.closest(".vue-treeselect__option-arrow-container") ? u.toggleExpanded(i) : t.closest(".vue-treeselect__label-container") && (i.isBranch && d.disableBranchNodes ? u.toggleExpanded(i) : u.select(i)));
		}, W = null, G = (e) => {
			let t = e.target.closest(".vue-treeselect__option");
			if (!t) {
				W = null;
				return;
			}
			if (t === W) return;
			W = t;
			let n = U(t);
			n && u.setCurrentHighlightedOption(n, !1);
		}, oe = () => {
			W = null;
		};
		return n({ handleScroll: ne }), (n, r) => (S(), s("div", {
			ref_key: "listRef",
			ref: f,
			class: h(t.virtual ? "vue-treeselect__list vue-treeselect__list--virtual" : "vue-treeselect__list"),
			style: g(ee.value),
			onMousedown: ie,
			onMouseover: G,
			onMouseleave: oe
		}, [t.virtual ? (S(), s("div", {
			key: 0,
			style: g(te.value)
		}, [(S(!0), s(e, null, E(B.value, (t) => (S(), s(e, { key: t.key }, [t.type === "option" ? (S(), a(hn, {
			key: 0,
			node: t.node,
			level: t.level
		}, null, 8, ["node", "level"])) : (S(), s("div", {
			key: 1,
			class: h(`vue-treeselect__list-item vue-treeselect__indent-level-${t.level}`)
		}, [t.type === "no-children" ? (S(), a($, {
			key: 0,
			type: "no-children",
			icon: "warning"
		}, {
			default: L(() => [l(A(M(u).texts.value.noChildrenText), 1)]),
			_: 1
		})) : t.type === "loading" ? (S(), a($, {
			key: 1,
			type: "loading",
			icon: "loader"
		}, {
			default: L(() => [l(A(M(u).texts.value.loadingText), 1)]),
			_: 1
		})) : (S(), a($, {
			key: 2,
			type: "error",
			icon: "error"
		}, {
			default: L(() => [l(A(t.node.childrenStates.loadingError) + " ", 1), c("a", {
				class: "vue-treeselect__retry",
				title: M(u).texts.value.retryTitle,
				"data-id": t.node.id
			}, A(M(u).texts.value.retryText), 9, gn)]),
			_: 2
		}, 1024))], 2))], 64))), 128))], 4)) : (S(), s(e, { key: 1 }, [(S(!0), s(e, null, E(B.value, (t) => (S(), s(e, { key: t.key }, [t.type === "option" ? (S(), a(hn, {
			key: 0,
			node: t.node,
			level: t.level
		}, null, 8, ["node", "level"])) : (S(), s("div", {
			key: 1,
			class: h(`vue-treeselect__list-item vue-treeselect__indent-level-${t.level}`)
		}, [t.type === "no-children" ? (S(), a($, {
			key: 0,
			type: "no-children",
			icon: "warning"
		}, {
			default: L(() => [l(A(M(u).texts.value.noChildrenText), 1)]),
			_: 1
		})) : t.type === "loading" ? (S(), a($, {
			key: 1,
			type: "loading",
			icon: "loader"
		}, {
			default: L(() => [l(A(M(u).texts.value.loadingText), 1)]),
			_: 1
		})) : (S(), a($, {
			key: 2,
			type: "error",
			icon: "error"
		}, {
			default: L(() => [l(A(t.node.childrenStates.loadingError) + " ", 1), c("a", {
				class: "vue-treeselect__retry",
				title: M(u).texts.value.retryTitle,
				"data-id": t.node.id
			}, A(M(u).texts.value.retryText), 9, _n)]),
			_: 2
		}, 1024))], 2))], 64))), 128)), V.value ? (S(), s("div", {
			key: 0,
			style: g({ height: `${V.value}px` })
		}, null, 4)) : o("", !0)], 64))], 38));
	}
}), Tn = ["title"], En = ["title"], Dn = /* @__PURE__ */ d({
	__name: "Menu",
	setup(t, { expose: r }) {
		let d = {
			top: "top",
			bottom: "bottom",
			above: "top",
			below: "bottom"
		}, f = Q(), p = f.props, h = T(null), _ = T(null), y = T(null);
		F(h, (e, t) => {
			e ? f.setMenuElement(e) : t && f.getMenu() === t && f.setMenuElement(null);
		}, { flush: "sync" });
		let x = () => {
			y.value?.handleScroll();
		}, C = null, w = null, E = i(() => ({ maxHeight: p.maxHeight + "px" })), D = i(() => ({ zIndex: p.appendToBody ? void 0 : p.zIndex })), O = i(() => f.rootOptionsStates.isLoaded && f.forest.normalizedOptions.length === 0), k = i(() => f.getRemoteSearchEntry()), j = i(() => f.trigger.searchQuery === "" && !p.defaultOptions), N = i(() => {
			if (j.value) return !1;
			let e = k.value;
			return e.isLoaded && e.options.length === 0;
		}), P = () => {
			if (!f.menu.isOpen) return;
			let e = f.getMenu(), t = f.getControl();
			if (!e || !t) return;
			let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = n.height, a = window.innerHeight, o = r.top, s = window.innerHeight - r.bottom, c = r.top >= 0 && r.top <= a || r.top < 0 && r.bottom > 0, l = s > i + 40, u = o > i + 40;
			c ? p.openDirection && p.openDirection !== "auto" ? f.menu.placement = d[p.openDirection] : l || !u ? f.menu.placement = "bottom" : f.menu.placement = "top" : f.closeMenu();
		}, I = () => {
			let e = f.getMenu();
			!C && e && (C = { remove: De(e, P) });
		}, R = () => {
			let e = f.getControl();
			!w && e && (w = { remove: Ae(e, P) });
		}, z = () => {
			C &&= (C.remove(), null);
		}, B = () => {
			w &&= (w.remove(), null);
		}, V = () => {
			P(), I(), R();
		}, ee = () => {
			z(), B();
		};
		return F(() => f.menu.isOpen, (e) => {
			e ? m(V) : ee();
		}), b(() => {
			f.menu.isOpen && m(V);
		}), v(() => {
			ee(), h.value && f.getMenu() === h.value && f.setMenuElement(null);
		}), r({
			menuElement: h,
			menuContainerElement: _
		}), (t, r) => (S(), s("div", {
			ref_key: "menuContainerRef",
			ref: _,
			class: "vue-treeselect__menu-container",
			style: g(D.value)
		}, [u(n, { name: "vue-treeselect__menu--transition" }, {
			default: L(() => [M(f).menu.isOpen ? (S(), s("div", {
				key: 0,
				ref_key: "menuRef",
				ref: h,
				class: "vue-treeselect__menu",
				style: g(E.value),
				onMousedown: r[2] ||= (...e) => M(f).handleMouseDown && M(f).handleMouseDown(...e),
				onScrollPassive: x
			}, [
				M(f).slots["before-list"] ? (S(), a(M(At), {
					key: 0,
					"render-slot": M(f).slots["before-list"]
				}, null, 8, ["render-slot"])) : o("", !0),
				M(p).async ? (S(), s(e, { key: 1 }, [j.value ? (S(), a($, {
					key: 0,
					type: "search-prompt",
					icon: "warning"
				}, {
					default: L(() => [l(A(M(f).texts.value.searchPromptText), 1)]),
					_: 1
				})) : k.value.isLoading ? (S(), a($, {
					key: 1,
					type: "loading",
					icon: "loader"
				}, {
					default: L(() => [l(A(M(f).texts.value.loadingText), 1)]),
					_: 1
				})) : k.value.loadingError ? (S(), a($, {
					key: 2,
					type: "error",
					icon: "error"
				}, {
					default: L(() => [l(A(k.value.loadingError) + " ", 1), c("a", {
						class: "vue-treeselect__retry",
						title: M(f).texts.value.retryTitle,
						onClick: r[0] ||= (...e) => M(f).handleRemoteSearch && M(f).handleRemoteSearch(...e)
					}, A(M(f).texts.value.retryText), 9, Tn)]),
					_: 1
				})) : N.value ? (S(), a($, {
					key: 3,
					type: "no-results",
					icon: "warning"
				}, {
					default: L(() => [l(A(M(f).texts.value.noResultsText), 1)]),
					_: 1
				})) : (S(), a(wn, {
					ref_key: "optionListRef",
					ref: y,
					key: M(p).virtualScroll ? "virtual" : "list",
					virtual: M(p).virtualScroll
				}, null, 8, ["virtual"]))], 64)) : (S(), s(e, { key: 2 }, [M(f).rootOptionsStates.isLoading ? (S(), a($, {
					key: 0,
					type: "loading",
					icon: "loader"
				}, {
					default: L(() => [l(A(M(f).texts.value.loadingText), 1)]),
					_: 1
				})) : M(f).rootOptionsStates.loadingError ? (S(), a($, {
					key: 1,
					type: "error",
					icon: "error"
				}, {
					default: L(() => [l(A(M(f).rootOptionsStates.loadingError) + " ", 1), c("a", {
						class: "vue-treeselect__retry",
						title: M(f).texts.value.retryTitle,
						onClick: r[1] ||= (...e) => M(f).loadRootOptions && M(f).loadRootOptions(...e)
					}, A(M(f).texts.value.retryText), 9, En)]),
					_: 1
				})) : O.value ? (S(), a($, {
					key: 2,
					type: "no-options",
					icon: "warning"
				}, {
					default: L(() => [l(A(M(f).texts.value.noOptionsText), 1)]),
					_: 1
				})) : M(f).localSearch.active && M(f).localSearch.noResults ? (S(), a($, {
					key: 3,
					type: "no-results",
					icon: "warning"
				}, {
					default: L(() => [l(A(M(f).texts.value.noResultsText), 1)]),
					_: 1
				})) : (S(), a(wn, {
					ref_key: "optionListRef",
					ref: y,
					key: M(p).virtualScroll ? "virtual" : "list",
					virtual: M(p).virtualScroll
				}, null, 8, ["virtual"]))], 64)),
				M(f).slots["after-list"] ? (S(), a(M(At), {
					key: 3,
					"render-slot": M(f).slots["after-list"]
				}, null, 8, ["render-slot"])) : o("", !0)
			], 36)) : o("", !0)]),
			_: 1
		})], 4));
	}
}), On = ["data-instance-id", "dir"], kn = /* @__PURE__ */ d({
	__name: "MenuPortal",
	setup(e) {
		let n = Q(), r = n.props, i = T(null), o = T(void 0), s = () => {
			let e = n.getControl();
			e && (o.value = e.closest("[dir]")?.getAttribute("dir") || getComputedStyle(e).direction || void 0);
		}, l = T(null), d = null, f = null, p = () => {
			let e = i.value, t = n.getControl();
			e && t && (e.style.width = t.getBoundingClientRect().width + "px");
		}, _ = () => {
			let e = i.value, t = n.getControl(), r = l.value?.menuContainerElement;
			if (!e || !t || !r) return;
			let a = t.getBoundingClientRect(), o = e.getBoundingClientRect(), s = n.menu.placement === "bottom" ? a.height : 0, c = Math.round(a.left - o.left) + "px", u = Math.round(a.top - o.top + s) + "px";
			r.style.transform = `translate(${c}, ${u})`;
		}, y = () => {
			s(), p(), _();
			let e = n.getControl();
			e && (d ||= { remove: Ae(e, _) }, f ||= { remove: De(e, () => {
				p(), _();
			}) });
		}, x = () => {
			d?.remove(), d = null, f?.remove(), f = null;
		};
		return F(() => n.menu.isOpen, (e) => {
			e ? m(y) : x();
		}), F(() => n.menu.placement, _), b(() => {
			s(), n.menu.isOpen && m(y);
		}), v(x), (e, s) => (S(), a(t, { to: "body" }, [c("div", {
			ref_key: "portalRef",
			ref: i,
			class: h(["vue-treeselect__portal-target", M(n).wrapperClass.value]),
			style: g({ zIndex: M(r).zIndex }),
			"data-instance-id": M(n).getInstanceId(),
			dir: o.value
		}, [u(Dn, {
			ref_key: "menuRef",
			ref: l
		}, null, 512)], 14, On)]));
	}
}), An = /* @__PURE__ */ d({
	name: "vue-treeselect",
	__name: "Treeselect",
	props: {
		allowClearingDisabled: {
			type: Boolean,
			default: !1
		},
		allowSelectingDisabledDescendants: {
			type: Boolean,
			default: !1
		},
		alwaysOpen: {
			type: Boolean,
			default: !1
		},
		appendToBody: {
			type: Boolean,
			default: !1
		},
		async: {
			type: Boolean,
			default: !1
		},
		autoFocus: {
			type: Boolean,
			default: !1
		},
		autoLoadRootOptions: {
			type: Boolean,
			default: !0
		},
		autoDeselectAncestors: {
			type: Boolean,
			default: !1
		},
		autoDeselectDescendants: {
			type: Boolean,
			default: !1
		},
		autoSelectAncestors: {
			type: Boolean,
			default: !1
		},
		autoSelectDescendants: {
			type: Boolean,
			default: !1
		},
		backspaceRemoves: {
			type: Boolean,
			default: !0
		},
		beforeClearAll: {
			type: Function,
			default: () => !0
		},
		branchNodesFirst: {
			type: Boolean,
			default: !1
		},
		cacheOptions: {
			type: Boolean,
			default: !0
		},
		clearable: {
			type: Boolean,
			default: !0
		},
		clearAllText: { default: void 0 },
		clearOnSelect: {
			type: Boolean,
			default: !1
		},
		clearValueText: { default: void 0 },
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		defaultExpandLevel: { default: 0 },
		defaultOptions: {
			type: [Boolean, Array],
			default: !1
		},
		deleteRemoves: {
			type: Boolean,
			default: !0
		},
		delimiter: { default: "," },
		flattenSearchResults: {
			type: Boolean,
			default: !1
		},
		disableBranchNodes: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		disableFuzzyMatching: {
			type: Boolean,
			default: !1
		},
		flat: {
			type: Boolean,
			default: !1
		},
		instanceId: { default: void 0 },
		joinValues: {
			type: Boolean,
			default: !1
		},
		locale: { default: void 0 },
		limit: { default: Infinity },
		limitText: {
			type: Function,
			default: void 0
		},
		loadingText: { default: void 0 },
		loadOptions: {},
		matchKeys: { default: () => ["label"] },
		maxHeight: { default: 300 },
		multiple: {
			type: Boolean,
			default: !1
		},
		name: { default: void 0 },
		noChildrenText: { default: void 0 },
		noOptionsText: { default: void 0 },
		noResultsText: { default: void 0 },
		normalizer: {
			type: Function,
			default: (e) => e
		},
		openDirection: { default: "auto" },
		openOnClick: {
			type: Boolean,
			default: !0
		},
		openOnFocus: {
			type: Boolean,
			default: !1
		},
		options: { default: void 0 },
		placeholder: { default: void 0 },
		required: {
			type: Boolean,
			default: !1
		},
		retryText: { default: void 0 },
		retryTitle: { default: void 0 },
		searchable: {
			type: Boolean,
			default: !0
		},
		searchNested: {
			type: Boolean,
			default: !1
		},
		searchPromptText: { default: void 0 },
		searchDebounceDelay: { default: void 0 },
		showCount: {
			type: Boolean,
			default: !1
		},
		showCountOf: { default: "ALL_CHILDREN" },
		showCountOnSearch: {
			type: [Boolean, null],
			default: void 0
		},
		sortValueBy: { default: "ORDER_SELECTED" },
		tabIndex: { default: 0 },
		modelValue: {},
		valueConsistsOf: { default: "BRANCH_PRIORITY" },
		valueFormat: { default: "id" },
		zIndex: { default: 999 },
		virtualScroll: {
			type: Boolean,
			default: !1
		},
		optionHeight: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"select",
		"deselect",
		"open",
		"close",
		"search-change"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, o = n, c = P(), l = T(), d = k(null), p = k(null), m = k(null), g = k(null), _ = `${N()}$$`, v = T(!1);
		b(() => {
			v.value = !0;
		});
		let y = () => r.instanceId ?? _, x = () => p.value, w = () => g.value, E = () => d.value, D = () => {
			E()?.focus();
		}, O = () => {
			E()?.blur();
		}, A = (e) => {
			let t = e.target;
			l.value && !l.value.contains(t) && (x()?.contains(t) || (O(), j.closeMenu()));
		}, j = xt(r, o, {
			getInstanceId: y,
			getMenuElement: x,
			getControlElement: w,
			toggleClickOutsideEvent: (e) => {
				e ? document.addEventListener("mousedown", A, !1) : document.removeEventListener("mousedown", A, !1);
			},
			focusInput: D
		}), M = (e) => !!e.closest("input, textarea, select, [contenteditable]:not([contenteditable=\"false\"])") && !e.closest(".vue-treeselect__input, .vue-treeselect__input-container"), F = G(function(e) {
			let t = e.target;
			M(t) || (e.preventDefault(), !r.disabled && (m.value?.contains(t) && (!j.menu.isOpen && (r.openOnClick || j.trigger.isFocused) ? j.openMenu() : j.menu.isOpen && !r.searchable && j.closeMenu()), j.resetFlags() ? O() : D()));
		}), I = f(Et, null), L = [
			"placeholder",
			"noResultsText",
			"noOptionsText",
			"noChildrenText",
			"loadingText",
			"searchPromptText",
			"retryText",
			"retryTitle",
			"clearAllText",
			"clearValueText",
			"limitText"
		], R = i(() => {
			let e = { ...Dt(r.locale ?? I) };
			for (let t of L) {
				let n = r[t];
				n != null && (e[t] = n);
			}
			return e;
		}), z = i(() => ({
			"vue-treeselect": !0,
			"vue-treeselect--single": j.single.value,
			"vue-treeselect--multi": r.multiple,
			"vue-treeselect--searchable": r.searchable,
			"vue-treeselect--disabled": r.disabled,
			"vue-treeselect--focused": j.trigger.isFocused,
			"vue-treeselect--has-value": j.hasValue.value,
			"vue-treeselect--open": j.menu.isOpen,
			"vue-treeselect--open-above": j.menu.placement === "top",
			"vue-treeselect--open-below": j.menu.placement === "bottom",
			"vue-treeselect--branch-nodes-disabled": r.disableBranchNodes,
			"vue-treeselect--append-to-body": r.appendToBody
		})), B = {
			...j,
			props: r,
			slots: c,
			texts: R,
			wrapperClass: z,
			setInputElement: (e) => {
				d.value = e;
			},
			setMenuElement: (e) => {
				p.value = e;
			},
			setValueContainerElement: (e) => {
				m.value = e;
			},
			setControlElement: (e) => {
				g.value = e;
			},
			getInput: E,
			focusInput: D,
			blurInput: O,
			handleMouseDown: F
		};
		return C(St, B), t({
			forest: j.forest,
			menu: j.menu,
			trigger: j.trigger,
			localSearch: j.localSearch,
			selectedNodes: j.selectedNodes,
			internalValue: j.internalValue,
			getNode: j.getNode,
			isSelected: j.isSelected,
			traverseAllNodesDFS: j.traverseAllNodesDFS,
			traverseAllNodesByIndex: j.traverseAllNodesByIndex,
			traverseDescendantsBFS: j.traverseDescendantsBFS,
			traverseDescendantsDFS: j.traverseDescendantsDFS,
			openMenu: j.openMenu,
			closeMenu: j.closeMenu,
			toggleMenu: j.toggleMenu,
			toggleExpanded: j.toggleExpanded,
			getMenu: j.getMenu,
			getControl: j.getControl,
			select: j.select,
			clear: j.clear,
			removeLastValue: j.removeLastValue,
			getValue: j.getValue,
			initialize: j.initialize,
			loadRootOptions: j.loadRootOptions,
			focusInput: D,
			blurInput: O,
			getInput: E
		}), (t, n) => (S(), s("div", {
			ref_key: "wrapper",
			ref: l,
			class: h(z.value)
		}, [
			u(kt),
			u(on),
			e.appendToBody && v.value ? (S(), a(kn, { key: 0 })) : (S(), a(Dn, { key: 1 }))
		], 2));
	}
}), jn = An;
//#endregion
export { Ke as ALL, Ye as ALL_WITH_INDETERMINATE, Ge as ASYNC_SEARCH, qe as BRANCH_PRIORITY, Be as CHECKED, ze as INDETERMINATE, Je as LEAF_PRIORITY, We as LOAD_CHILDREN_OPTIONS, Ue as LOAD_ROOT_OPTIONS, Et as TREESELECT_LOCALE, An as Treeselect, Re as UNCHECKED, jn as default, Ct as en, Tt as registerLocale, Dt as resolveLocale };
