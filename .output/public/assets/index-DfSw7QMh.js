const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-DzVLoBkQ.js",
      "assets/variant-control-KCAME-SW.js",
      "assets/dish._dishId-Bm-mzvcA.js",
    ]),
) => i.map((i) => d[i]);
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var ee = Array.isArray;
    function S() {}
    var C = { H: null, A: null, T: null, S: null },
      w = Object.prototype.hasOwnProperty;
    function te(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return te(e.type, t, e.props);
    }
    function re(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ie(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ae = /\/+/g;
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ie(`` + e.key)
        : t.toString(36);
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(S, S)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ce(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ce(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(ae, `$&/`) + `/`),
              ce(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (re(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ae, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += ce(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + oe(a, u++)), (c += ce(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ce(se(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function le(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ce(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ue(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var E =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      D = {
        map: le,
        forEach: function (e, t, n) {
          le(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            le(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            le(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!re(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = D),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return C.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !w.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return te(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            w.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return te(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = re),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ue,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = C.T,
          n = {};
        C.T = n;
        try {
          var r = e(),
            i = C.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(S, E));
        } catch (e) {
          E(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (C.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return C.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return C.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return C.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return C.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return C.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return C.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return C.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return C.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return C.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return C.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return C.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return C.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return C.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return C.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return C.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return C.H.useRef(e);
      }),
      (e.useState = function (e) {
        return C.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return C.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return C.H.useTransition();
      }),
      (e.version = `19.2.8`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), re()));
        else {
          var t = n(l);
          t !== null && oe(x, t.startTime - e);
        }
    }
    var ee = !1,
      S = -1,
      C = 5,
      w = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - w < C);
    }
    function ne() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        w = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && oe(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? re() : (ee = !1);
        }
      }
    }
    var re;
    if (typeof y == `function`)
      re = function () {
        y(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var ie = new MessageChannel(),
        ae = ie.port2;
      ((ie.port1.onmessage = ne),
        (re = function () {
          ae.postMessage(null);
        }));
    } else
      re = function () {
        _(ne, 0);
      };
    function oe(t, n) {
      S = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), oe(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), re()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`));
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      ee = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      w = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      re = Symbol.for(`react.lazy`),
      ie = Symbol.for(`react.activity`),
      ae = Symbol.for(`react.memo_cache_sentinel`),
      oe = Symbol.iterator;
    function se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (oe && e[oe]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ce = Symbol.for(`react.client.reference`);
    function le(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case w:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case ie:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case S:
            return e.displayName || `Context`;
          case ee:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case C:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return (
              (t = e.displayName || null),
              t === null ? le(e.type) || `Memo` : t
            );
          case re:
            ((t = e._payload), (e = e._init));
            try {
              return le(e(t));
            } catch {}
        }
      return null;
    }
    var ue = Array.isArray,
      E = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      de = { pending: !1, data: null, method: null, action: null },
      fe = [],
      pe = -1;
    function O(e) {
      return { current: e };
    }
    function k(e) {
      0 > pe || ((e.current = fe[pe]), (fe[pe] = null), pe--);
    }
    function A(e, t) {
      (pe++, (fe[pe] = e.current), (e.current = t));
    }
    var me = O(null),
      j = O(null),
      he = O(null),
      ge = O(null);
    function _e(e, t) {
      switch ((A(he, t), A(j, e), A(me, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Gd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Gd(t)), (e = Kd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (k(me), A(me, e));
    }
    function ve() {
      (k(me), k(j), k(he));
    }
    function ye(e) {
      e.memoizedState !== null && A(ge, e);
      var t = me.current,
        n = Kd(t, e.type);
      t !== n && (A(j, e), A(me, n));
    }
    function be(e) {
      (j.current === e && (k(me), k(j)),
        ge.current === e && (k(ge), ($f._currentValue = de)));
    }
    var xe, Se;
    function Ce(e) {
      if (xe === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((xe = (t && t[1]) || ``),
            (Se =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        xe +
        e +
        Se
      );
    }
    var we = !1;
    function Te(e, t) {
      if (!e || we) return ``;
      we = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((we = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Ce(n) : ``;
    }
    function Ee(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ce(e.type);
        case 16:
          return Ce(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? Ce(`Suspense Fallback`)
            : Ce(`Suspense`);
        case 19:
          return Ce(`SuspenseList`);
        case 0:
        case 15:
          return Te(e.type, !1);
        case 11:
          return Te(e.type.render, !1);
        case 1:
          return Te(e.type, !0);
        case 31:
          return Ce(`Activity`);
        default:
          return ``;
      }
    }
    function De(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ee(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Oe = Object.prototype.hasOwnProperty,
      ke = t.unstable_scheduleCallback,
      Ae = t.unstable_cancelCallback,
      je = t.unstable_shouldYield,
      Me = t.unstable_requestPaint,
      Ne = t.unstable_now,
      Pe = t.unstable_getCurrentPriorityLevel,
      Fe = t.unstable_ImmediatePriority,
      Ie = t.unstable_UserBlockingPriority,
      Le = t.unstable_NormalPriority,
      Re = t.unstable_LowPriority,
      ze = t.unstable_IdlePriority,
      Be = t.log,
      Ve = t.unstable_setDisableYieldValue,
      He = null,
      Ue = null;
    function We(e) {
      if (
        (typeof Be == `function` && Ve(e),
        Ue && typeof Ue.setStrictMode == `function`)
      )
        try {
          Ue.setStrictMode(He, e);
        } catch {}
    }
    var Ge = Math.clz32 ? Math.clz32 : Je,
      Ke = Math.log,
      qe = Math.LN2;
    function Je(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ke(e) / qe) | 0)) | 0);
    }
    var Ye = 256,
      Xe = 262144,
      Ze = 4194304;
    function Qe(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function $e(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Qe(n)))
                : (i = Qe(o))
              : (i = Qe(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Qe(n)))
                  : (i = Qe(o)))
              : (i = Qe(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function et(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function tt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function nt() {
      var e = Ze;
      return ((Ze <<= 1), !(Ze & 62914560) && (Ze = 4194304), e);
    }
    function rt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function it(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function at(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Ge(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && ot(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function ot(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ge(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function st(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Ge(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ct(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : lt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function lt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ut(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function dt() {
      var e = D.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : hp(e.type)) : e;
    }
    function ft(e, t) {
      var n = D.p;
      try {
        return ((D.p = e), t());
      } finally {
        D.p = n;
      }
    }
    var pt = Math.random().toString(36).slice(2),
      mt = `__reactFiber$` + pt,
      ht = `__reactProps$` + pt,
      gt = `__reactContainer$` + pt,
      _t = `__reactEvents$` + pt,
      vt = `__reactListeners$` + pt,
      yt = `__reactHandles$` + pt,
      bt = `__reactResources$` + pt,
      xt = `__reactMarker$` + pt;
    function St(e) {
      (delete e[mt], delete e[ht], delete e[_t], delete e[vt], delete e[yt]);
    }
    function Ct(e) {
      var t = e[mt];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[gt] || n[mt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = mf(e); e !== null;) {
              if ((n = e[mt])) return n;
              e = mf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function wt(e) {
      if ((e = e[mt] || e[gt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Tt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Et(e) {
      var t = e[bt];
      return (
        (t ||= e[bt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Dt(e) {
      e[xt] = !0;
    }
    var Ot = new Set(),
      kt = {};
    function At(e, t) {
      (jt(e, t), jt(e + `Capture`, t));
    }
    function jt(e, t) {
      for (kt[e] = t, e = 0; e < t.length; e++) Ot.add(t[e]);
    }
    var Mt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Nt = {},
      Pt = {};
    function Ft(e) {
      return Oe.call(Pt, e)
        ? !0
        : Oe.call(Nt, e)
          ? !1
          : Mt.test(e)
            ? (Pt[e] = !0)
            : ((Nt[e] = !0), !1);
    }
    function It(e, t, n) {
      if (Ft(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Lt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Rt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function zt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Bt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Vt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Ht(e) {
      if (!e._valueTracker) {
        var t = Bt(e) ? `checked` : `value`;
        e._valueTracker = Vt(e, t, `` + e[t]);
      }
    }
    function Ut(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Bt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Wt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Gt = /[\n"\\]/g;
    function Kt(e) {
      return e.replace(Gt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function qt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + zt(t))
            : e.value !== `` + zt(t) && (e.value = `` + zt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Yt(e, o, zt(n))
          : Yt(e, o, zt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + zt(s))
          : e.removeAttribute(`name`));
    }
    function Jt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ht(e);
          return;
        }
        ((n = n == null ? `` : `` + zt(n)),
          (t = t == null ? n : `` + zt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ht(e));
    }
    function Yt(e, t, n) {
      (t === `number` && Wt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Xt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + zt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Zt(e, t, n) {
      if (
        t != null &&
        ((t = `` + zt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + zt(n);
    }
    function Qt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ue(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = zt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ht(e));
    }
    function $t(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var en = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function tn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || en.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function nn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && tn(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && tn(e, o, t[o]);
    }
    function rn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var an = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      on =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sn(e) {
      return on.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function cn() {}
    var ln = null;
    function un(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var dn = null,
      fn = null;
    function pn(e) {
      var t = wt(e);
      if (t && (e = t.stateNode)) {
        var n = e[ht] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (qt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Kt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ht] || null;
                  if (!a) throw Error(i(90));
                  qt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Ut(r));
            }
            break a;
          case `textarea`:
            Zt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Xt(e, !!n.multiple, t, !1));
        }
      }
    }
    var mn = !1;
    function hn(e, t, n) {
      if (mn) return e(t, n);
      mn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((mn = !1),
          (dn !== null || fn !== null) &&
            (wu(), dn && ((t = dn), (e = fn), (fn = dn = null), pn(t), e)))
        )
          for (t = 0; t < e.length; t++) pn(e[t]);
      }
    }
    function gn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ht] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var _n = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      vn = !1;
    if (_n)
      try {
        var yn = {};
        (Object.defineProperty(yn, "passive", {
          get: function () {
            vn = !0;
          },
        }),
          window.addEventListener(`test`, yn, yn),
          window.removeEventListener(`test`, yn, yn));
      } catch {
        vn = !1;
      }
    var bn = null,
      xn = null,
      Sn = null;
    function Cn() {
      if (Sn) return Sn;
      var e,
        t = xn,
        n = t.length,
        r,
        i = `value` in bn ? bn.value : bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Sn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Tn() {
      return !0;
    }
    function En() {
      return !1;
    }
    function Dn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Tn
            : En),
          (this.isPropagationStopped = En),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Tn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Tn));
          },
          persist: function () {},
          isPersistent: Tn,
        }),
        t
      );
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      kn = Dn(On),
      An = h({}, On, { view: 0, detail: 0 }),
      jn = Dn(An),
      Mn,
      Nn,
      Pn,
      Fn = h({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX),
                    (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = Dn(Fn),
      Ln = Dn(h({}, Fn, { dataTransfer: 0 })),
      Rn = Dn(h({}, An, { relatedTarget: 0 })),
      zn = Dn(
        h({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Bn = Dn(
        h({}, On, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Vn = Dn(h({}, On, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Gn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Wn[e])
          ? !!t[e]
          : !1;
    }
    function Kn() {
      return Gn;
    }
    var qn = Dn(
        h({}, An, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Un[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Kn,
          charCode: function (e) {
            return e.type === `keypress` ? wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? wn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Jn = Dn(
        h({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Yn = Dn(
        h({}, An, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Kn,
        }),
      ),
      Xn = Dn(h({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Zn = Dn(
        h({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Qn = Dn(h({}, On, { newState: 0, oldState: 0 })),
      $n = [9, 13, 27, 32],
      er = _n && `CompositionEvent` in window,
      tr = null;
    _n && `documentMode` in document && (tr = document.documentMode);
    var nr = _n && `TextEvent` in window && !tr,
      M = _n && (!er || (tr && 8 < tr && 11 >= tr)),
      rr = ` `,
      ir = !1;
    function ar(e, t) {
      switch (e) {
        case `keyup`:
          return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function N(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var or = !1;
    function sr(e, t) {
      switch (e) {
        case `compositionend`:
          return N(t);
        case `keypress`:
          return t.which === 32 ? ((ir = !0), rr) : null;
        case `textInput`:
          return ((e = t.data), e === rr && ir ? null : e);
        default:
          return null;
      }
    }
    function cr(e, t) {
      if (or)
        return e === `compositionend` || (!er && ar(e, t))
          ? ((e = Cn()), (Sn = xn = bn = null), (or = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return M && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var lr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function ur(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!lr[e.type] : t === `textarea`;
    }
    function dr(e, t, n, r) {
      (dn ? (fn ? fn.push(r) : (fn = [r])) : (dn = r),
        (t = Ad(t, `onChange`)),
        0 < t.length &&
          ((n = new kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var fr = null,
      pr = null;
    function mr(e) {
      Cd(e, 0);
    }
    function hr(e) {
      if (Ut(Tt(e))) return e;
    }
    function gr(e, t) {
      if (e === `change`) return t;
    }
    var _r = !1;
    if (_n) {
      var vr;
      if (_n) {
        var yr = `oninput` in document;
        if (!yr) {
          var br = document.createElement(`div`);
          (br.setAttribute(`oninput`, `return;`),
            (yr = typeof br.oninput == `function`));
        }
        vr = yr;
      } else vr = !1;
      _r = vr && (!document.documentMode || 9 < document.documentMode);
    }
    function xr() {
      fr && (fr.detachEvent(`onpropertychange`, Sr), (pr = fr = null));
    }
    function Sr(e) {
      if (e.propertyName === `value` && hr(pr)) {
        var t = [];
        (dr(t, pr, e, un(e)), hn(mr, t));
      }
    }
    function Cr(e, t, n) {
      e === `focusin`
        ? (xr(), (fr = t), (pr = n), fr.attachEvent(`onpropertychange`, Sr))
        : e === `focusout` && xr();
    }
    function wr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return hr(pr);
    }
    function Tr(e, t) {
      if (e === `click`) return hr(t);
    }
    function Er(e, t) {
      if (e === `input` || e === `change`) return hr(t);
    }
    function Dr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Or = typeof Object.is == `function` ? Object.is : Dr;
    function kr(e, t) {
      if (Or(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Oe.call(t, i) || !Or(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Ar(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function jr(e, t) {
      var n = Ar(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ar(n);
      }
    }
    function Mr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Mr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Nr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Wt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wt(e.document);
      }
      return t;
    }
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Fr = _n && `documentMode` in document && 11 >= document.documentMode,
      Ir = null,
      Lr = null,
      Rr = null,
      zr = !1;
    function Br(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      zr ||
        Ir == null ||
        Ir !== Wt(r) ||
        ((r = Ir),
        `selectionStart` in r && Pr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Rr && kr(Rr, r)) ||
          ((Rr = r),
          (r = Ad(Lr, `onSelect`)),
          0 < r.length &&
            ((t = new kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Ir))));
    }
    function Vr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Hr = {
        animationend: Vr(`Animation`, `AnimationEnd`),
        animationiteration: Vr(`Animation`, `AnimationIteration`),
        animationstart: Vr(`Animation`, `AnimationStart`),
        transitionrun: Vr(`Transition`, `TransitionRun`),
        transitionstart: Vr(`Transition`, `TransitionStart`),
        transitioncancel: Vr(`Transition`, `TransitionCancel`),
        transitionend: Vr(`Transition`, `TransitionEnd`),
      },
      Ur = {},
      Wr = {};
    _n &&
      ((Wr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Hr.animationend.animation,
        delete Hr.animationiteration.animation,
        delete Hr.animationstart.animation),
      `TransitionEvent` in window || delete Hr.transitionend.transition);
    function Gr(e) {
      if (Ur[e]) return Ur[e];
      if (!Hr[e]) return e;
      var t = Hr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Wr) return (Ur[e] = t[n]);
      return e;
    }
    var Kr = Gr(`animationend`),
      qr = Gr(`animationiteration`),
      Jr = Gr(`animationstart`),
      Yr = Gr(`transitionrun`),
      Xr = Gr(`transitionstart`),
      Zr = Gr(`transitioncancel`),
      Qr = Gr(`transitionend`),
      $r = new Map(),
      ei =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ei.push(`scrollEnd`);
    function ti(e, t) {
      ($r.set(e, t), At(t, [e]));
    }
    var ni =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ri = [],
      ii = 0,
      ai = 0;
    function oi() {
      for (var e = ii, t = (ai = ii = 0); t < e;) {
        var n = ri[t];
        ri[t++] = null;
        var r = ri[t];
        ri[t++] = null;
        var i = ri[t];
        ri[t++] = null;
        var a = ri[t];
        if (((ri[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && ui(n, i, a);
      }
    }
    function si(e, t, n, r) {
      ((ri[ii++] = e),
        (ri[ii++] = t),
        (ri[ii++] = n),
        (ri[ii++] = r),
        (ai |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ci(e, t, n, r) {
      return (si(e, t, n, r), di(e));
    }
    function li(e, t) {
      return (si(e, null, null, t), di(e));
    }
    function ui(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ge(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function di(e) {
      if (50 < hu) throw ((hu = 0), (gu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var fi = {};
    function pi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function mi(e, t, n, r) {
      return new pi(e, t, n, r);
    }
    function hi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function gi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = mi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function _i(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function vi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) hi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Wf(e, n, me.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case ie:
            return (
              (e = mi(31, n, t, a)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            );
          case y:
            return yi(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = mi(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case w:
            return (
              (e = mi(13, n, t, a)),
              (e.elementType = w),
              (e.lanes = o),
              e
            );
          case te:
            return (
              (e = mi(19, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10;
                  break a;
                case ee:
                  s = 9;
                  break a;
                case C:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case re:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = mi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function yi(e, t, n, r) {
      return ((e = mi(7, e, r, t)), (e.lanes = n), e);
    }
    function bi(e, t, n) {
      return ((e = mi(6, e, null, t)), (e.lanes = n), e);
    }
    function xi(e) {
      var t = mi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Si(e, t, n) {
      return (
        (t = mi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ci = new WeakMap();
    function wi(e, t) {
      if (typeof e == `object` && e) {
        var n = Ci.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: De(t) }), Ci.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: De(t) };
    }
    var Ti = [],
      Ei = 0,
      Di = null,
      Oi = 0,
      ki = [],
      Ai = 0,
      ji = null,
      Mi = 1,
      Ni = ``;
    function Pi(e, t) {
      ((Ti[Ei++] = Oi), (Ti[Ei++] = Di), (Di = e), (Oi = t));
    }
    function Fi(e, t, n) {
      ((ki[Ai++] = Mi), (ki[Ai++] = Ni), (ki[Ai++] = ji), (ji = e));
      var r = Mi;
      e = Ni;
      var i = 32 - Ge(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ge(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Mi = (1 << (32 - Ge(t) + i)) | (n << i) | r),
          (Ni = a + e));
      } else ((Mi = (1 << a) | (n << i) | r), (Ni = e));
    }
    function Ii(e) {
      e.return !== null && (Pi(e, 1), Fi(e, 1, 0));
    }
    function Li(e) {
      for (; e === Di;)
        ((Di = Ti[--Ei]), (Ti[Ei] = null), (Oi = Ti[--Ei]), (Ti[Ei] = null));
      for (; e === ji;)
        ((ji = ki[--Ai]),
          (ki[Ai] = null),
          (Ni = ki[--Ai]),
          (ki[Ai] = null),
          (Mi = ki[--Ai]),
          (ki[Ai] = null));
    }
    function Ri(e, t) {
      ((ki[Ai++] = Mi),
        (ki[Ai++] = Ni),
        (ki[Ai++] = ji),
        (Mi = t.id),
        (Ni = t.overflow),
        (ji = e));
    }
    var zi = null,
      P = null,
      F = !1,
      Bi = null,
      Vi = !1,
      Hi = Error(i(519));
    function Ui(e) {
      throw (
        Yi(
          wi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Hi
      );
    }
    function Wi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[mt] = e), (t[ht] = r), n)) {
        case `dialog`:
          (Y(`cancel`, t), Y(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Y(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < xd.length; n++) Y(xd[n], t);
          break;
        case `source`:
          Y(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Y(`error`, t), Y(`load`, t));
          break;
        case `details`:
          Y(`toggle`, t);
          break;
        case `input`:
          (Y(`invalid`, t),
            Jt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Y(`invalid`, t);
          break;
        case `textarea`:
          (Y(`invalid`, t), Qt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Id(t.textContent, n)
          ? (r.popover != null && (Y(`beforetoggle`, t), Y(`toggle`, t)),
            r.onScroll != null && Y(`scroll`, t),
            r.onScrollEnd != null && Y(`scrollend`, t),
            r.onClick != null && (t.onclick = cn),
            (t = !0))
          : (t = !1),
        t || Ui(e, !0));
    }
    function Gi(e) {
      for (zi = e.return; zi;)
        switch (zi.tag) {
          case 5:
          case 31:
          case 13:
            Vi = !1;
            return;
          case 27:
          case 3:
            Vi = !0;
            return;
          default:
            zi = zi.return;
        }
    }
    function Ki(e) {
      if (e !== zi) return !1;
      if (!F) return (Gi(e), (F = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              qd(e.type, e.memoizedProps))),
          (n = !n)),
        n && P && Ui(e),
        Gi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        P = Z(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        P = Z(e);
      } else
        t === 27
          ? ((t = P), tf(e.type) ? ((e = pf), (pf = null), (P = e)) : (P = t))
          : (P = zi ? ff(e.stateNode.nextSibling) : null);
      return !0;
    }
    function qi() {
      ((P = zi = null), (F = !1));
    }
    function Ji() {
      var e = Bi;
      return (
        e !== null &&
          (tu === null ? (tu = e) : tu.push.apply(tu, e), (Bi = null)),
        e
      );
    }
    function Yi(e) {
      Bi === null ? (Bi = [e]) : Bi.push(e);
    }
    var Xi = O(null),
      Zi = null,
      Qi = null;
    function $i(e, t, n) {
      (A(Xi, t._currentValue), (t._currentValue = n));
    }
    function ea(e) {
      ((e._currentValue = Xi.current), k(Xi));
    }
    function ta(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function na(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ta(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ta(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ra(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Or(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === ge.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [$f]) : e.push($f));
        }
        a = a.return;
      }
      (e !== null && na(t, e, n, r), (t.flags |= 262144));
    }
    function ia(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Or(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function aa(e) {
      ((Zi = e),
        (Qi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function oa(e) {
      return ca(Zi, e);
    }
    function sa(e, t) {
      return (Zi === null && aa(e), ca(e, t));
    }
    function ca(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Qi === null)) {
        if (e === null) throw Error(i(308));
        ((Qi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Qi = Qi.next = t;
      return n;
    }
    var la =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      ua = t.unstable_scheduleCallback,
      da = t.unstable_NormalPriority,
      fa = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pa() {
      return { controller: new la(), data: new Map(), refCount: 0 };
    }
    function ma(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ua(da, function () {
            e.controller.abort();
          }));
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null;
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = []);
        ((ga = 0),
          (_a = hd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ga++, t.then(ba, ba), t);
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`);
        var e = ha;
        ((ha = null), (_a = 0), (va = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Sa = E.S;
    E.S = function (e, t) {
      ((iu = Ne()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t));
    };
    var Ca = O(null);
    function wa() {
      var e = Ca.current;
      return e === null ? W.pooledCache : e;
    }
    function Ta(e, t) {
      t === null ? A(Ca, Ca.current) : A(Ca, t.pool);
    }
    function Ea() {
      var e = wa();
      return e === null ? null : { parent: fa._currentValue, pool: e };
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: function () {} };
    function ja(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ia(e), e);
        default:
          if (typeof t.status == `string`) t.then(cn, cn);
          else {
            if (((e = W), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ia(e), e);
          }
          throw ((Pa = t), Da);
      }
    }
    function Na(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Pa = e), Da)
          : e;
      }
    }
    var Pa = null;
    function Fa() {
      if (Pa === null) throw Error(i(459));
      var e = Pa;
      return ((Pa = null), e);
    }
    function Ia(e) {
      if (e === Da || e === ka) throw Error(i(483));
    }
    var La = null,
      Ra = 0;
    function za(e) {
      var t = Ra;
      return ((Ra += 1), La === null && (La = []), Ma(La, e, t));
    }
    function Ba(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Va(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = gi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = bi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === re &&
                  Na(i) === t.type))
            ? ((t = a(t, n.props)), Ba(t, n), (t.return = e), t)
            : ((t = vi(n.type, n.key, n.props, null, e.mode, r)),
              Ba(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Si(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = yi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = bi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = vi(t.type, t.key, t.props, null, e.mode, n)),
                Ba(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = Si(t, e.mode, n)), (t.return = e), t);
            case re:
              return ((t = Na(t)), f(e, t, n));
          }
          if (ue(t) || se(t))
            return ((t = yi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, za(t), n);
          if (t.$$typeof === S) return f(e, sa(e, t), n);
          Va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case re:
              return ((n = Na(n)), p(e, t, n, r));
          }
          if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, za(n), r);
          if (n.$$typeof === S) return p(e, t, sa(e, n), r);
          Va(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case re:
              return ((r = Na(r)), m(e, t, n, r, i));
          }
          if (ue(r) || se(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, za(r), i);
          if (r.$$typeof === S) return m(e, t, n, sa(t, r), i);
          Va(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), F && Pi(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (F && Pi(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          F && Pi(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), F && Pi(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (F && Pi(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          F && Pi(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === re &&
                        Na(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        Ba(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = yi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = vi(o.type, o.key, o.props, null, e.mode, c)),
                    Ba(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = Si(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case re:
              return ((o = Na(o)), b(e, r, o, c));
          }
          if (ue(o)) return h(e, r, o, c);
          if (se(o)) {
            if (((l = se(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, za(o), c);
          if (o.$$typeof === S) return b(e, r, sa(e, o), c);
          Va(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = bi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ra = 0;
          var i = b(e, t, n, r);
          return ((La = null), i);
        } catch (t) {
          if (t === Da || t === ka) throw t;
          var a = mi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = !1;
    function Ka(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function qa(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ja(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ya(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), U & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = di(e)),
          ui(e, null, n),
          t
        );
      }
      return (si(e, r, t, n), di(e));
    }
    function Xa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), st(e, n));
      }
    }
    function Za(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Qa = !1;
    function $a() {
      if (Qa) {
        var e = va;
        if (e !== null) throw e;
      }
    }
    function eo(e, t, n, r) {
      Qa = !1;
      var i = e.updateQueue;
      Ga = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (K & f) === f : (r & f) === f) {
            (f !== 0 && f === _a && (Qa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ga = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Yl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function to(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function no(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) to(n[e], t);
    }
    var ro = O(null),
      io = O(0);
    function ao(e, t) {
      ((e = ql), A(io, e), A(ro, t), (ql = e | t.baseLanes));
    }
    function oo() {
      (A(io, ql), A(ro, ro.current));
    }
    function so() {
      ((ql = io.current), k(ro), k(io));
    }
    var co = O(null),
      lo = null;
    function uo(e) {
      var t = e.alternate;
      (A(I, I.current & 1),
        A(co, e),
        lo === null &&
          (t === null || ro.current !== null || t.memoizedState !== null) &&
          (lo = e));
    }
    function fo(e) {
      (A(I, I.current), A(co, e), lo === null && (lo = e));
    }
    function po(e) {
      e.tag === 22
        ? (A(I, I.current), A(co, e), lo === null && (lo = e))
        : mo(e);
    }
    function mo() {
      (A(I, I.current), A(co, co.current));
    }
    function ho(e) {
      (k(co), lo === e && (lo = null), k(I));
    }
    var I = O(0);
    function go(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || lf(n) || uf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var _o = 0,
      L = null,
      R = null,
      vo = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0;
    function z() {
      throw Error(i(321));
    }
    function Eo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Or(e[n], t[n])) return !1;
      return !0;
    }
    function Do(e, t, n, r, i, a) {
      return (
        (_o = a),
        (L = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (E.H = e === null || e.memoizedState === null ? Hs : Us),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = ko(t, n, r, i)),
        Oo(e),
        a
      );
    }
    function Oo(e) {
      E.H = Vs;
      var t = R !== null && R.next !== null;
      if (((_o = 0), (vo = R = L = null), (yo = !1), (Co = 0), (wo = null), t))
        throw Error(i(300));
      e === null ||
        oc ||
        ((e = e.dependencies), e !== null && ia(e) && (oc = !0));
    }
    function ko(e, t, n, r) {
      L = e;
      var a = 0;
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (vo = R = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((E.H = Ws), (o = t(n, r)));
      } while (bo);
      return o;
    }
    function Ao() {
      var e = E.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Lo(t) : t),
        (e = e.useState()[0]),
        (R === null ? null : R.memoizedState) !== e && (L.flags |= 1024),
        t
      );
    }
    function jo() {
      var e = So !== 0;
      return ((So = 0), e);
    }
    function Mo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function No(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        yo = !1;
      }
      ((_o = 0), (vo = R = L = null), (bo = !1), (Co = So = 0), (wo = null));
    }
    function Po() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        vo === null ? (L.memoizedState = vo = e) : (vo = vo.next = e),
        vo
      );
    }
    function Fo() {
      if (R === null) {
        var e = L.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = R.next;
      var t = vo === null ? L.memoizedState : vo.next;
      if (t !== null) ((vo = t), (R = e));
      else {
        if (e === null)
          throw L.alternate === null ? Error(i(467)) : Error(i(310));
        ((R = e),
          (e = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null,
          }),
          vo === null ? (L.memoizedState = vo = e) : (vo = vo.next = e));
      }
      return vo;
    }
    function Io() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lo(e) {
      var t = Co;
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Ma(wo, e, t)),
        (t = L),
        (vo === null ? t.memoizedState : vo.next) === null &&
          ((t = t.alternate),
          (E.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function Ro(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Lo(e);
        if (e.$$typeof === S) return oa(e);
      }
      throw Error(i(438, String(e)));
    }
    function zo(e) {
      var t = null,
        n = L.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = L.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Io()), (L.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae;
      return (t.index++, n);
    }
    function Bo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Vo(e) {
      return Ho(Fo(), R, e);
    }
    function Ho(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (_o & f) === f : (K & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0));
            else if ((_o & p) === p) {
              ((u = u.next), p === _a && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (L.lanes |= p),
                (Yl |= p));
            ((f = u.action),
              xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (L.lanes |= f),
              (Yl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Or(o, e.memoizedState) && ((oc = !0), d && ((n = va), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Uo(e) {
      var t = Fo(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Or(o, t.memoizedState) || (oc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Wo(e, t, n) {
      var r = L,
        a = Fo(),
        o = F;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Or((R || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (oc = !0)),
        (a = a.queue),
        ms(qo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (vo !== null && vo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          us(9, { destroy: void 0 }, Ko.bind(null, r, a, n, t), null),
          W === null)
        )
          throw Error(i(349));
        o || _o & 127 || Go(r, t, n);
      }
      return n;
    }
    function Go(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = L.updateQueue),
        t === null
          ? ((t = Io()), (L.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ko(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Jo(t) && Yo(e));
    }
    function qo(e, t, n) {
      return n(function () {
        Jo(t) && Yo(e);
      });
    }
    function Jo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Or(e, n);
      } catch {
        return !0;
      }
    }
    function Yo(e) {
      var t = li(e, 2);
      t !== null && yu(t, e, 2);
    }
    function Xo(e) {
      var t = Po();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), xo)) {
          We(!0);
          try {
            n();
          } finally {
            We(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Zo(e, t, n, r) {
      return ((e.baseState = n), Ho(e, R, typeof r == `function` ? r : Bo));
    }
    function Qo(e, t, n, r, a) {
      if (Rs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (E.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), $o(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function $o(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = E.T,
          o = {};
        E.T = o;
        try {
          var s = n(i, r),
            c = E.S;
          (c !== null && c(o, s), es(e, t, s));
        } catch (n) {
          ns(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (E.T = a));
        }
      } else
        try {
          ((a = n(i, r)), es(e, t, a));
        } catch (n) {
          ns(e, t, n);
        }
    }
    function es(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ts(e, t, n);
            },
            function (n) {
              return ns(e, t, n);
            },
          )
        : ts(e, t, n);
    }
    function ts(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        rs(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), $o(e, n))));
    }
    function ns(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), rs(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function rs(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function is(e, t) {
      return t;
    }
    function as(e, t) {
      if (F) {
        var n = W.formState;
        if (n !== null) {
          a: {
            var r = L;
            if (F) {
              if (P) {
                b: {
                  for (var i = P, a = Vi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = ff(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((P = ff(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ui(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Po()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: is,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, L, r)),
        (r.dispatch = n),
        (r = Xo(!1)),
        (a = Ls.bind(null, L, !1, r.queue)),
        (r = Po()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Qo.bind(null, L, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function os(e) {
      return ss(Fo(), R, e);
    }
    function ss(e, t, n) {
      if (
        ((t = Ho(e, t, is)[0]),
        (e = Vo(Bo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Lo(t);
        } catch (e) {
          throw e === Da ? ka : e;
        }
      else r = t;
      t = Fo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((L.flags |= 2048),
          us(9, { destroy: void 0 }, cs.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function cs(e, t) {
      e.action = t;
    }
    function ls(e) {
      var t = Fo(),
        n = R;
      if (n !== null) return ss(t, n, e);
      (Fo(), (t = t.memoizedState), (n = Fo()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function us(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = L.updateQueue),
        t === null && ((t = Io()), (L.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ds() {
      return Fo().memoizedState;
    }
    function B(e, t, n, r) {
      var i = Po();
      ((L.flags |= e),
        (i.memoizedState = us(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function fs(e, t, n, r) {
      var i = Fo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      R !== null && r !== null && Eo(r, R.memoizedState.deps)
        ? (i.memoizedState = us(t, a, n, r))
        : ((L.flags |= e), (i.memoizedState = us(1 | t, a, n, r)));
    }
    function ps(e, t) {
      B(8390656, 8, e, t);
    }
    function ms(e, t) {
      fs(2048, 8, e, t);
    }
    function hs(e) {
      L.flags |= 4;
      var t = L.updateQueue;
      if (t === null) ((t = Io()), (L.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function gs(e) {
      var t = Fo().memoizedState;
      return (
        hs({ ref: t, nextImpl: e }),
        function () {
          if (U & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function _s(e, t) {
      return fs(4, 2, e, t);
    }
    function vs(e, t) {
      return fs(4, 4, e, t);
    }
    function V(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])), fs(4, 4, V.bind(null, t, e), n));
    }
    function bs() {}
    function xs(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Eo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Eo(t, r[1])) return r[0];
      if (((r = e()), xo)) {
        We(!0);
        try {
          e();
        } finally {
          We(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (_o & 1073741824 && !(K & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = vu()), (L.lanes |= e), (Yl |= e), n);
    }
    function ws(e, t, n, r) {
      return Or(n, t)
        ? n
        : ro.current === null
          ? !(_o & 42) || (_o & 1073741824 && !(K & 261930))
            ? ((oc = !0), (e.memoizedState = n))
            : ((e = vu()), (L.lanes |= e), (Yl |= e), t)
          : ((e = Cs(e, n, r)), Or(e, t) || (oc = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = D.p;
      D.p = a !== 0 && 8 > a ? a : 8;
      var o = E.T,
        s = {};
      ((E.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = E.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, xa(c, r), _u(e))
            : Is(e, t, r, _u(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, _u());
      } finally {
        ((D.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (E.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Os(e).queue;
      Ts(
        e,
        a,
        t,
        de,
        n === null
          ? Es
          : function () {
              return (ks(e), n(r));
            },
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: de,
        baseState: de,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: de,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ks(e) {
      var t = Os(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, _u()));
    }
    function As() {
      return oa($f);
    }
    function js() {
      return Fo().memoizedState;
    }
    function Ms() {
      return Fo().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = _u();
            e = Ja(n);
            var r = Ya(t, e, n);
            (r !== null && (yu(r, t, n), Xa(r, t, n)),
              (t = { cache: pa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = _u();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = ci(e, t, n, r)), n !== null && (yu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, _u());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Or(s, o)))
              return (si(e, t, i, 0), W === null && oi(), !1);
          } catch {}
        if (((n = ci(e, t, i, r)), n !== null))
          return (yu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: hd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ci(e, n, r, 2)), t !== null && yu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === L || (t !== null && t === L);
    }
    function zs(e, t) {
      bo = yo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), st(e, n));
      }
    }
    var Vs = {
      readContext: oa,
      use: Ro,
      useCallback: z,
      useContext: z,
      useEffect: z,
      useImperativeHandle: z,
      useLayoutEffect: z,
      useInsertionEffect: z,
      useMemo: z,
      useReducer: z,
      useRef: z,
      useState: z,
      useDebugValue: z,
      useDeferredValue: z,
      useTransition: z,
      useSyncExternalStore: z,
      useId: z,
      useHostTransitionStatus: z,
      useFormState: z,
      useActionState: z,
      useOptimistic: z,
      useMemoCache: z,
      useCacheRefresh: z,
    };
    Vs.useEffectEvent = z;
    var Hs = {
        readContext: oa,
        use: Ro,
        useCallback: function (e, t) {
          return ((Po().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: oa,
        useEffect: ps,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            B(4194308, 4, V.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return B(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          B(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Po();
          t = t === void 0 ? null : t;
          var r = e();
          if (xo) {
            We(!0);
            try {
              e();
            } finally {
              We(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Po();
          if (n !== void 0) {
            var i = n(t);
            if (xo) {
              We(!0);
              try {
                n(t);
              } finally {
                We(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, L, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Po();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Xo(e);
          var t = e.queue,
            n = Fs.bind(null, L, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(Po(), e, t);
        },
        useTransition: function () {
          var e = Xo(!1);
          return (
            (e = Ts.bind(null, L, e.queue, !0, !1)),
            (Po().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = L,
            a = Po();
          if (F) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), W === null)) throw Error(i(349));
            K & 127 || Go(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ps(qo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            us(9, { destroy: void 0 }, Ko.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Po(),
            t = W.identifierPrefix;
          if (F) {
            var n = Ni,
              r = Mi;
            ((n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: as,
        useActionState: as,
        useOptimistic: function (e) {
          var t = Po();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, L, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: zo,
        useCacheRefresh: function () {
          return (Po().memoizedState = Ns.bind(null, L));
        },
        useEffectEvent: function (e) {
          var t = Po(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (U & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: oa,
        use: Ro,
        useCallback: xs,
        useContext: oa,
        useEffect: ms,
        useImperativeHandle: ys,
        useInsertionEffect: _s,
        useLayoutEffect: vs,
        useMemo: Ss,
        useReducer: Vo,
        useRef: ds,
        useState: function () {
          return Vo(Bo);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(Fo(), R.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Vo(Bo)[0],
            t = Fo().memoizedState;
          return [typeof e == `boolean` ? e : Lo(e), t];
        },
        useSyncExternalStore: Wo,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e, t) {
          return Zo(Fo(), R, e, t);
        },
        useMemoCache: zo,
        useCacheRefresh: Ms,
      };
    Us.useEffectEvent = gs;
    var Ws = {
      readContext: oa,
      use: Ro,
      useCallback: xs,
      useContext: oa,
      useEffect: ms,
      useImperativeHandle: ys,
      useInsertionEffect: _s,
      useLayoutEffect: vs,
      useMemo: Ss,
      useReducer: Uo,
      useRef: ds,
      useState: function () {
        return Uo(Bo);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = Fo();
        return R === null ? Cs(n, e, t) : ws(n, R.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uo(Bo)[0],
          t = Fo().memoizedState;
        return [typeof e == `boolean` ? e : Lo(e), t];
      },
      useSyncExternalStore: Wo,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ls,
      useActionState: ls,
      useOptimistic: function (e, t) {
        var n = Fo();
        return R === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Zo(n, R, e, t);
      },
      useMemoCache: zo,
      useCacheRefresh: Ms,
    };
    Ws.useEffectEvent = gs;
    function Gs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ks = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = Ja(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (yu(t, e, r), Xa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = Ja(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (yu(t, e, r), Xa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = _u(),
          r = Ja(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ya(e, r, n)),
          t !== null && (yu(t, e, n), Xa(t, e, n)));
      },
    };
    function qs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !kr(n, r) || !kr(i, a)
            : !0
      );
    }
    function Js(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null));
    }
    function Ys(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Xs(e) {
      ni(e);
    }
    function Zs(e) {
      console.error(e);
    }
    function Qs(e) {
      ni(e);
    }
    function $s(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tc(e, t, n) {
      return (
        (n = Ja(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          $s(e, t);
        }),
        n
      );
    }
    function nc(e) {
      return ((e = Ja(e)), (e.tag = 3), e);
    }
    function rc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            ec(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (ec(t, n, r),
            typeof i != `function` &&
              (su === null ? (su = new Set([this])) : su.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ic(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ra(t, n, a, !0),
          (n = co.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                lo === null
                  ? ju()
                  : n.alternate === null && Jl === 0 && (Jl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Yu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Yu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Yu(e, r, a), ju(), !1);
      }
      if (F)
        return (
          (t = co.current),
          t === null
            ? (r !== Hi && ((t = Error(i(423), { cause: r })), Yi(wi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = wi(r, n)),
              (a = tc(e.stateNode, r, a)),
              Za(e, a),
              Jl !== 4 && (Jl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Hi && ((e = Error(i(422), { cause: r })), Yi(wi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = wi(o, n)),
        eu === null ? (eu = [o]) : eu.push(o),
        Jl !== 4 && (Jl = 2),
        t === null)
      )
        return !0;
      ((r = wi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = tc(n.stateNode, r, e)),
              Za(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (su === null || !su.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = nc(a)),
                rc(a, e, n, r),
                Za(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ac = Error(i(461)),
      oc = !1;
    function sc(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
    }
    function cc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        aa(t),
        (r = Do(e, t, n, o, a, i)),
        (s = jo()),
        e !== null && !oc
          ? (Mo(e, t, i), Mc(e, t, i))
          : (F && s && Ii(t), (t.flags |= 1), sc(e, t, r, i), t.child)
      );
    }
    function lc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !hi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), uc(e, t, a, r, i))
          : ((e = vi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Nc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? kr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Mc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = gi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function uc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref)
          if (((oc = !1), (t.pendingProps = r = a), Nc(e, i)))
            e.flags & 131072 && (oc = !0);
          else return ((t.lanes = e.lanes), Mc(e, t, i));
      }
      return vc(e, t, n, r, i);
    }
    function dc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return pc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? oo() : ao(t, a),
            po(t));
        else
          return (
            (r = t.lanes = 536870912),
            pc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Ta(t, null), oo(), mo(t))
          : (Ta(t, a.cachePool), ao(t, a), mo(t), (t.memoizedState = null));
      return (sc(e, t, i, n), t.child);
    }
    function fc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function pc(e, t, n, r, i) {
      var a = wa();
      return (
        (a = a === null ? null : { parent: fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        oo(),
        po(t),
        e !== null && ra(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function mc(e, t) {
      return (
        (t = Dc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function hc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = mc(t, t.pendingProps)),
        (e.flags |= 2),
        ho(t),
        (t.memoizedState = null),
        e
      );
    }
    function gc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (F) {
          if (r.mode === `hidden`)
            return ((e = mc(t, r)), (t.lanes = 536870912), fc(null, e));
          if (
            (fo(t),
            (e = P)
              ? ((e = cf(e, Vi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ji === null ? null : { id: Mi, overflow: Ni },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = xi(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (P = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return ((t.lanes = 536870912), null);
        }
        return mc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((fo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = hc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (oc || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), oc || a)
        ) {
          if (
            ((r = W),
            r !== null && ((s = ct(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), li(e, s), yu(r, e, s), ac);
          (ju(), (t = hc(e, t, n)));
        } else
          ((e = o.treeContext),
            (P = ff(s.nextSibling)),
            (zi = t),
            (F = !0),
            (Bi = null),
            (Vi = !1),
            e !== null && Ri(t, e),
            (t = mc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = gi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function _c(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function vc(e, t, n, r, i) {
      return (
        aa(t),
        (n = Do(e, t, n, r, void 0, i)),
        (r = jo()),
        e !== null && !oc
          ? (Mo(e, t, i), Mc(e, t, i))
          : (F && r && Ii(t), (t.flags |= 1), sc(e, t, n, i), t.child)
      );
    }
    function yc(e, t, n, r, i, a) {
      return (
        aa(t),
        (t.updateQueue = null),
        (n = ko(t, r, n, i)),
        Oo(e),
        (r = jo()),
        e !== null && !oc
          ? (Mo(e, t, a), Mc(e, t, a))
          : (F && r && Ii(t), (t.flags |= 1), sc(e, t, n, a), t.child)
      );
    }
    function bc(e, t, n, r, i) {
      if ((aa(t), t.stateNode === null)) {
        var a = fi,
          o = n.contextType;
        (typeof o == `object` && o && (a = oa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ks),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ka(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? oa(o) : fi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Gs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ks.enqueueReplaceState(a, a.state, null),
            eo(t, r, a, i),
            $a(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ys(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = fi), typeof u == `object` && u && (o = oa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Js(t, a, r, o)),
          (Ga = !1));
        var f = t.memoizedState;
        ((a.state = f),
          eo(t, r, a, i),
          $a(),
          (l = t.memoizedState),
          s || f !== l || Ga
            ? (typeof d == `function` &&
                (Gs(t, n, d, r), (l = t.memoizedState)),
              (c = Ga || qs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          qa(e, t),
          (o = t.memoizedProps),
          (u = Ys(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = fi),
          typeof l == `object` && l && (c = oa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Js(t, a, r, c)),
          (Ga = !1),
          (f = t.memoizedState),
          (a.state = f),
          eo(t, r, a, i),
          $a());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ga ||
        (e !== null && e.dependencies !== null && ia(e.dependencies))
          ? (typeof s == `function` && (Gs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ga ||
              qs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ia(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        _c(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ua(t, e.child, null, i)),
                (t.child = Ua(t, null, n, i)))
              : sc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Mc(e, t, i)),
        e
      );
    }
    function xc(e, t, n, r) {
      return (qi(), (t.flags |= 256), sc(e, t, n, r), t.child);
    }
    var Sc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Cc(e) {
      return { baseLanes: e, cachePool: Ea() };
    }
    function wc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Ql), e);
    }
    function Tc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (I.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (F) {
          if (
            (a ? uo(t) : mo(t),
            (e = P)
              ? ((e = cf(e, Vi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ji === null ? null : { id: Mi, overflow: Ni },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = xi(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (P = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return (uf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (mo(t),
              (a = t.mode),
              (c = Dc({ mode: `hidden`, children: c }, a)),
              (r = yi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Cc(n)),
              (r.childLanes = wc(e, s, n)),
              (t.memoizedState = Sc),
              fc(null, r))
            : (uo(t), Ec(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (uo(t), (t.flags &= -257), (t = Oc(e, t, n)))
            : t.memoizedState === null
              ? (mo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Dc({ mode: `visible`, children: r.children }, a)),
                (c = yi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ua(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Cc(n)),
                (r.childLanes = wc(e, s, n)),
                (t.memoizedState = Sc),
                (t = fc(null, r)))
              : (mo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((uo(t), uf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Yi({ value: r, source: null, stack: null }),
            (t = Oc(e, t, n)));
        } else if (
          (oc || ra(e, t, n, !1), (s = (n & e.childLanes) !== 0), oc || s)
        ) {
          if (
            ((s = W),
            s !== null && ((r = ct(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), li(e, r), yu(s, e, r), ac);
          (lf(c) || ju(), (t = Oc(e, t, n)));
        } else
          lf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (P = ff(c.nextSibling)),
              (zi = t),
              (F = !0),
              (Bi = null),
              (Vi = !1),
              e !== null && Ri(t, e),
              (t = Ec(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (mo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = gi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = yi(c, a, n, null)), (c.flags |= 2))
            : (c = gi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          fc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Cc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = fa._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = wc(e, s, n)),
          (t.memoizedState = Sc),
          fc(e.child, r))
        : (uo(t),
          (n = e.child),
          (e = n.sibling),
          (n = gi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Ec(e, t) {
      return (
        (t = Dc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Dc(e, t) {
      return ((e = mi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Oc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = Ec(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function kc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ta(e.return, t, n));
    }
    function Ac(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function jc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = I.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        A(I, o),
        sc(e, t, r, n),
        (r = F ? Oi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
          else if (e.tag === 19) kc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && go(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ac(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && go(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ac(t, !0, n, null, a, r);
          break;
        case `together`:
          Ac(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Mc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Yl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = gi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = gi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Nc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && ia(e)))
        : !0;
    }
    function Pc(e, t, n) {
      switch (t.tag) {
        case 3:
          (_e(t, t.stateNode.containerInfo),
            $i(t, fa, e.memoizedState.cache),
            qi());
          break;
        case 27:
        case 5:
          ye(t);
          break;
        case 4:
          _e(t, t.stateNode.containerInfo);
          break;
        case 10:
          $i(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), fo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (uo(t), (e = Mc(e, t, n)), e === null ? null : e.sibling)
                : Tc(e, t, n)
              : (uo(t), (t.flags |= 128), null);
          uo(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return jc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            A(I, I.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), dc(e, t, n, t.pendingProps));
        case 24:
          $i(t, fa, e.memoizedState.cache);
      }
      return Mc(e, t, n);
    }
    function Fc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) oc = !0;
        else {
          if (!Nc(e, n) && !(t.flags & 128)) return ((oc = !1), Pc(e, t, n));
          oc = !!(e.flags & 131072);
        }
      else ((oc = !1), F && t.flags & 1048576 && Fi(t, Oi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Na(t.elementType)), (t.type = e), typeof e == `function`))
              hi(e)
                ? ((r = Ys(e, r)), (t.tag = 1), (t = bc(null, t, e, r, n)))
                : ((t.tag = 0), (t = vc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === C) {
                  ((t.tag = 11), (t = cc(null, t, e, r, n)));
                  break a;
                } else if (a === ne) {
                  ((t.tag = 14), (t = lc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = le(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return vc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ys(r, t.pendingProps)), bc(e, t, r, a, n));
        case 3:
          a: {
            if ((_e(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), qa(e, t), eo(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              $i(t, fa, r),
              r !== o.cache && na(t, [fa], n, !0),
              $a(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = xc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = wi(Error(i(424)), t)), Yi(a), (t = xc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  P = ff(e.firstChild),
                    zi = t,
                    F = !0,
                    Bi = null,
                    Vi = !0,
                    n = Wa(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((qi(), r === a)) {
                t = Mc(e, t, n);
                break a;
              }
              sc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            _c(e, t),
            e === null
              ? (n = jf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : F ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Wd(he.current).createElement(n)),
                  (r[mt] = t),
                  (r[ht] = e),
                  Rd(r, n, e),
                  Dt(r),
                  (t.stateNode = r))
              : (t.memoizedState = jf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            ye(t),
            e === null &&
              F &&
              ((r = t.stateNode = hf(t.type, t.pendingProps, he.current)),
              (zi = t),
              (Vi = !0),
              (a = P),
              tf(t.type) ? ((pf = a), (P = ff(r.firstChild))) : (P = a)),
            sc(e, t, t.pendingProps.children, n),
            _c(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              F &&
              ((a = r = P) &&
                ((r = of(r, t.type, t.pendingProps, Vi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (zi = t),
                    (P = ff(r.firstChild)),
                    (Vi = !1),
                    (a = !0))),
              a || Ui(t)),
            ye(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            qd(a, o) ? (r = null) : s !== null && qd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Do(e, t, Ao, null, null, n)), ($f._currentValue = a)),
            _c(e, t),
            sc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              F &&
              ((e = n = P) &&
                ((n = sf(n, t.pendingProps, Vi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (zi = t), (P = null), (e = !0))),
              e || Ui(t)),
            null
          );
        case 13:
          return Tc(e, t, n);
        case 4:
          return (
            _e(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ua(t, null, r, n)) : sc(e, t, r, n),
            t.child
          );
        case 11:
          return cc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (sc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            $i(t, t.type, r.value),
            sc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            aa(t),
            (a = oa(a)),
            (r = r(a)),
            (t.flags |= 1),
            sc(e, t, r, n),
            t.child
          );
        case 14:
          return lc(e, t, t.type, t.pendingProps, n);
        case 15:
          return uc(e, t, t.type, t.pendingProps, n);
        case 19:
          return jc(e, t, n);
        case 31:
          return gc(e, t, n);
        case 22:
          return dc(e, t, n, t.pendingProps);
        case 24:
          return (
            aa(t),
            (r = oa(fa)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = W),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ka(t),
                $i(t, fa, a))
              : ((e.lanes & n) !== 0 && (qa(e, t), eo(t, null, null, n), $a()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    $i(t, fa, r),
                    r !== a.cache && na(t, [fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    $i(t, fa, r))),
            sc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Ic(e) {
      e.flags |= 4;
    }
    function Lc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ou()) e.flags |= 8192;
          else throw ((Pa = Aa), Oa);
      } else e.flags &= -16777217;
    }
    function Rc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Gf(t)))
        if (Ou()) e.flags |= 8192;
        else throw ((Pa = Aa), Oa);
    }
    function zc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : nt()), (e.lanes |= t), ($l |= t)));
    }
    function Bc(e, t) {
      if (!F)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Vc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Hc(e, t, n) {
      var r = t.pendingProps;
      switch ((Li(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Vc(t), null);
        case 1:
          return (Vc(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ea(fa),
            ve(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ki(t)
                ? Ic(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ji())),
            Vc(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Ic(t),
                o === null ? (Vc(t), Lc(t, a, null, r, n)) : (Vc(t), Rc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Vc(t), (t.flags &= -16777217))
                  : (Ic(t), Vc(t), Rc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Ic(t),
                  Vc(t),
                  Lc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (be(t),
            (n = he.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Vc(t), null);
            }
            ((e = me.current),
              Ki(t) ? Wi(t, e) : ((e = hf(a, r, n)), (t.stateNode = e), Ic(t)));
          }
          return (Vc(t), null);
        case 5:
          if ((be(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Vc(t), null);
            }
            if (((o = me.current), Ki(t))) Wi(t, o);
            else {
              var s = Wd(he.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[mt] = t), (o[ht] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Rd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Ic(t);
            }
          }
          return (
            Vc(t),
            Lc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ic(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = he.current), Ki(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = zi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[mt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Id(e.nodeValue, n)
                )),
                e || Ui(t, !0));
            } else
              ((e = Wd(e).createTextNode(r)), (e[mt] = t), (t.stateNode = e));
          }
          return (Vc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ki(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[mt] = t;
              } else
                (qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (Vc(t), (e = !1));
            } else
              ((n = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (Vc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ki(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[mt] = t;
              } else
                (qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (Vc(t), (a = !1));
            } else
              ((a = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
          }
          return (
            ho(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                zc(t, t.updateQueue),
                Vc(t),
                null)
          );
        case 4:
          return (
            ve(),
            e === null && Ed(t.stateNode.containerInfo),
            Vc(t),
            null
          );
        case 10:
          return (ea(t.type), Vc(t), null);
        case 19:
          if ((k(I), (r = t.memoizedState), r === null)) return (Vc(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Bc(r, !1);
            else {
              if (Jl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Bc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        zc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (_i(n, e), (n = n.sibling));
                    return (
                      A(I, (I.current & 1) | 2),
                      F && Pi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ne() > au &&
                ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  zc(t, e),
                  Bc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !F)
                )
                  return (Vc(t), null);
              } else
                2 * Ne() - r.renderingStartTime > au &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (Vc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ne()),
              (e.sibling = null),
              (n = I.current),
              A(I, a ? (n & 1) | 2 : n & 1),
              F && Pi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (Vc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Vc(t),
            (n = t.updateQueue),
            n !== null && zc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && k(Ca),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ea(fa),
            Vc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Uc(e, t) {
      switch ((Li(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ea(fa),
            ve(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (be(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((ho(t), t.alternate === null)) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (ho(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (k(I), null);
        case 4:
          return (ve(), null);
        case 10:
          return (ea(t.type), null);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            e !== null && k(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ea(fa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Wc(e, t) {
      switch ((Li(t), t.tag)) {
        case 3:
          (ea(fa), ve());
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          ve();
          break;
        case 31:
          t.memoizedState !== null && ho(t);
          break;
        case 13:
          ho(t);
          break;
        case 19:
          k(I);
          break;
        case 10:
          ea(t.type);
          break;
        case 22:
        case 23:
          (ho(t), so(), e !== null && k(Ca));
          break;
        case 24:
          ea(fa);
      }
    }
    function Gc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        J(t, t.return, e);
      }
    }
    function Kc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  J(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        J(t, t.return, e);
      }
    }
    function qc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          no(t, n);
        } catch (t) {
          J(e, e.return, t);
        }
      }
    }
    function Jc(e, t, n) {
      ((n.props = Ys(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        J(e, t, n);
      }
    }
    function Yc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        J(e, t, n);
      }
    }
    function Xc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            J(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            J(e, t, n);
          }
        else n.current = null;
    }
    function Zc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        J(e, e.return, t);
      }
    }
    function Qc(e, t, n) {
      try {
        var r = e.stateNode;
        (zd(r, e.type, n, t), (r[ht] = t));
      } catch (t) {
        J(e, e.return, t);
      }
    }
    function $c(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && tf(e.type)) ||
        e.tag === 4
      );
    }
    function el(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || $c(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && tf(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function tl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = cn)));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (tl(e, t, n), e = e.sibling; e !== null;)
          (tl(e, t, n), (e = e.sibling));
    }
    function nl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (nl(e, t, n), e = e.sibling; e !== null;)
          (nl(e, t, n), (e = e.sibling));
    }
    function rl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (Rd(t, r, n), (t[mt] = e), (t[ht] = n));
      } catch (t) {
        J(e, e.return, t);
      }
    }
    var il = !1,
      al = !1,
      ol = !1,
      sl = typeof WeakSet == `function` ? WeakSet : Set,
      cl = null;
    function ll(e, t) {
      if (((e = e.containerInfo), (Hd = cp), (e = Nr(e)), Pr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ud = { focusedElem: e, selectionRange: n }, cp = !1, cl = t;
        cl !== null;
      )
        if (((t = cl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (cl = e));
        else
          for (; cl !== null;) {
            switch (((t = cl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ys(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    J(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    af(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        af(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (cl = e));
              break;
            }
            cl = t.return;
          }
    }
    function ul(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (wl(e, n), r & 4 && Gc(5, n));
          break;
        case 1:
          if ((wl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                J(n, n.return, e);
              }
            else {
              var i = Ys(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                J(n, n.return, e);
              }
            }
          (r & 64 && qc(n), r & 512 && Yc(n, n.return));
          break;
        case 3:
          if ((wl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              no(e, t);
            } catch (e) {
              J(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && rl(n);
        case 26:
        case 5:
          (wl(e, n), t === null && r & 4 && Zc(n), r & 512 && Yc(n, n.return));
          break;
        case 12:
          wl(e, n);
          break;
        case 31:
          (wl(e, n), r & 4 && hl(e, n));
          break;
        case 13:
          (wl(e, n),
            r & 4 && gl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Qu.bind(null, n)), df(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || il), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || al), (i = il));
            var a = al;
            ((il = r),
              (al = t) && !a
                ? El(e, n, (n.subtreeFlags & 8772) != 0)
                : wl(e, n),
              (il = i),
              (al = a));
          }
          break;
        case 30:
          break;
        default:
          wl(e, n);
      }
    }
    function dl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), dl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && St(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var H = null,
      fl = !1;
    function pl(e, t, n) {
      for (n = n.child; n !== null;) (ml(e, t, n), (n = n.sibling));
    }
    function ml(e, t, n) {
      if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
        try {
          Ue.onCommitFiberUnmount(He, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (al || Xc(n, t),
            pl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          al || Xc(n, t);
          var r = H,
            i = fl;
          (tf(n.type) && ((H = n.stateNode), (fl = !1)),
            pl(e, t, n),
            gf(n.stateNode),
            (H = r),
            (fl = i));
          break;
        case 5:
          al || Xc(n, t);
        case 6:
          if (
            ((r = H),
            (i = fl),
            (H = null),
            pl(e, t, n),
            (H = r),
            (fl = i),
            H !== null)
          )
            if (fl)
              try {
                (H.nodeType === 9
                  ? H.body
                  : H.nodeName === `HTML`
                    ? H.ownerDocument.body
                    : H
                ).removeChild(n.stateNode);
              } catch (e) {
                J(n, t, e);
              }
            else
              try {
                H.removeChild(n.stateNode);
              } catch (e) {
                J(n, t, e);
              }
          break;
        case 18:
          H !== null &&
            (fl
              ? ((e = H),
                nf(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Pp(e))
              : nf(H, n.stateNode));
          break;
        case 4:
          ((r = H),
            (i = fl),
            (H = n.stateNode.containerInfo),
            (fl = !0),
            pl(e, t, n),
            (H = r),
            (fl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Kc(2, n, t), al || Kc(4, n, t), pl(e, t, n));
          break;
        case 1:
          (al ||
            (Xc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Jc(n, t, r)),
            pl(e, t, n));
          break;
        case 21:
          pl(e, t, n);
          break;
        case 22:
          ((al = (r = al) || n.memoizedState !== null), pl(e, t, n), (al = r));
          break;
        default:
          pl(e, t, n);
      }
    }
    function hl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Pp(e);
        } catch (e) {
          J(t, t.return, e);
        }
      }
    }
    function gl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Pp(e);
        } catch (e) {
          J(t, t.return, e);
        }
    }
    function _l(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new sl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new sl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function vl(e, t) {
      var n = _l(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = $u.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function yl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (tf(c.type)) {
                  ((H = c.stateNode), (fl = !1));
                  break a;
                }
                break;
              case 5:
                ((H = c.stateNode), (fl = !1));
                break a;
              case 3:
              case 4:
                ((H = c.stateNode.containerInfo), (fl = !0));
                break a;
            }
            c = c.return;
          }
          if (H === null) throw Error(i(160));
          (ml(o, s, a),
            (H = null),
            (fl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (xl(t, e), (t = t.sibling));
    }
    var bl = null;
    function xl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (yl(t, e),
            Sl(e),
            r & 4 && (Kc(3, e, e.return), Gc(3, e), Kc(5, e, e.return)));
          break;
        case 1:
          (yl(t, e),
            Sl(e),
            r & 512 && (al || n === null || Xc(n, n.return)),
            r & 64 &&
              il &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = bl;
          if (
            (yl(t, e),
            Sl(e),
            r & 512 && (al || n === null || Xc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[xt] ||
                            o[mt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Rd(o, r, n),
                          (o[mt] = e),
                          Dt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Hf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Hf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[mt] = e), Dt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Uf(a, e.type, e.stateNode);
              else e.stateNode = Lf(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Qc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Uf(a, e.type, e.stateNode)
                    : Lf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (yl(t, e),
            Sl(e),
            r & 512 && (al || n === null || Xc(n, n.return)),
            n !== null && r & 4 && Qc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (yl(t, e),
            Sl(e),
            r & 512 && (al || n === null || Xc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              $t(a, ``);
            } catch (t) {
              J(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Qc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (ol = !0));
          break;
        case 6:
          if ((yl(t, e), Sl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              J(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Vf = null),
            (a = bl),
            (bl = yf(t.containerInfo)),
            yl(t, e),
            (bl = a),
            Sl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Pp(t.containerInfo);
            } catch (t) {
              J(e, e.return, t);
            }
          ol && ((ol = !1), Cl(e));
          break;
        case 4:
          ((r = bl),
            (bl = yf(e.stateNode.containerInfo)),
            yl(t, e),
            Sl(e),
            (bl = r));
          break;
        case 12:
          (yl(t, e), Sl(e));
          break;
        case 31:
          (yl(t, e),
            Sl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), vl(e, r))));
          break;
        case 13:
          (yl(t, e),
            Sl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (ru = Ne()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), vl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = il,
            d = al;
          if (
            ((il = u || a),
            (al = d || l),
            yl(t, e),
            (al = d),
            (il = u),
            Sl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || il || al || Tl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? rf(m, !0) : rf(l.stateNode, !1);
                  } catch (e) {
                    J(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), vl(e, n))));
          break;
        case 19:
          (yl(t, e),
            Sl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), vl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (yl(t, e), Sl(e));
      }
    }
    function Sl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if ($c(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              nl(e, el(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && ($t(o, ``), (n.flags &= -33)), nl(e, el(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              tl(e, el(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          J(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Cl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Cl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function wl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (ul(e, t.alternate, t), (t = t.sibling));
    }
    function Tl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Kc(4, t, t.return), Tl(t));
            break;
          case 1:
            Xc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Jc(t, t.return, n),
              Tl(t));
            break;
          case 27:
            gf(t.stateNode);
          case 26:
          case 5:
            (Xc(t, t.return), Tl(t));
            break;
          case 22:
            t.memoizedState === null && Tl(t);
            break;
          case 30:
            Tl(t);
            break;
          default:
            Tl(t);
        }
        e = e.sibling;
      }
    }
    function El(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (El(i, a, n), Gc(4, a));
            break;
          case 1:
            if (
              (El(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                J(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    to(c[i], s);
              } catch (e) {
                J(r, r.return, e);
              }
            }
            (n && o & 64 && qc(a), Yc(a, a.return));
            break;
          case 27:
            rl(a);
          case 26:
          case 5:
            (El(i, a, n), n && r === null && o & 4 && Zc(a), Yc(a, a.return));
            break;
          case 12:
            El(i, a, n);
            break;
          case 31:
            (El(i, a, n), n && o & 4 && hl(i, a));
            break;
          case 13:
            (El(i, a, n), n && o & 4 && gl(i, a));
            break;
          case 22:
            (a.memoizedState === null && El(i, a, n), Yc(a, a.return));
            break;
          case 30:
            break;
          default:
            El(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Dl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n)));
    }
    function Ol(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e)));
    }
    function kl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (Al(e, t, n, r), (t = t.sibling));
    }
    function Al(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (kl(e, t, n, r), i & 2048 && Gc(9, t));
          break;
        case 1:
          kl(e, t, n, r);
          break;
        case 3:
          (kl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e))));
          break;
        case 12:
          if (i & 2048) {
            (kl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              J(t, t.return, e);
            }
          } else kl(e, t, n, r);
          break;
        case 31:
          kl(e, t, n, r);
          break;
        case 13:
          kl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? kl(e, t, n, r)
                : ((a._visibility |= 2),
                  jl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? kl(e, t, n, r)
                : Ml(e, t),
            i & 2048 && Dl(o, t));
          break;
        case 24:
          (kl(e, t, n, r), i & 2048 && Ol(t.alternate, t));
          break;
        default:
          kl(e, t, n, r);
      }
    }
    function jl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (jl(a, o, s, c, i), Gc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), jl(a, o, s, c, i))
              : u._visibility & 2
                ? jl(a, o, s, c, i)
                : Ml(a, o),
              i && l & 2048 && Dl(o.alternate, o));
            break;
          case 24:
            (jl(a, o, s, c, i), i && l & 2048 && Ol(o.alternate, o));
            break;
          default:
            jl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ml(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ml(n, r), i & 2048 && Dl(r.alternate, r));
              break;
            case 24:
              (Ml(n, r), i & 2048 && Ol(r.alternate, r));
              break;
            default:
              Ml(n, r);
          }
          t = t.sibling;
        }
    }
    var Nl = 8192;
    function Pl(e, t, n) {
      if (e.subtreeFlags & Nl)
        for (e = e.child; e !== null;) (Fl(e, t, n), (e = e.sibling));
    }
    function Fl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Pl(e, t, n),
            e.flags & Nl &&
              e.memoizedState !== null &&
              Kf(n, bl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Pl(e, t, n);
          break;
        case 3:
        case 4:
          var r = bl;
          ((bl = yf(e.stateNode.containerInfo)), Pl(e, t, n), (bl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Nl), (Nl = 16777216), Pl(e, t, n), (Nl = r))
              : Pl(e, t, n));
          break;
        default:
          Pl(e, t, n);
      }
    }
    function Il(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Ll(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((cl = r), Bl(r, e));
          }
        Il(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Rl(e), (e = e.sibling));
    }
    function Rl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Ll(e), e.flags & 2048 && Kc(9, e, e.return));
          break;
        case 3:
          Ll(e);
          break;
        case 12:
          Ll(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), zl(e))
            : Ll(e);
          break;
        default:
          Ll(e);
      }
    }
    function zl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((cl = r), Bl(r, e));
          }
        Il(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Kc(8, t, t.return), zl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), zl(t)));
            break;
          default:
            zl(t);
        }
        e = e.sibling;
      }
    }
    function Bl(e, t) {
      for (; cl !== null;) {
        var n = cl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Kc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ma(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (cl = r));
        else
          a: for (n = e; cl !== null;) {
            r = cl;
            var i = r.sibling,
              a = r.return;
            if ((dl(r), r === n)) {
              cl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (cl = i));
              break a;
            }
            cl = a;
          }
      }
    }
    var Vl = {
        getCacheForType: function (e) {
          var t = oa(fa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return oa(fa).controller.signal;
        },
      },
      Hl = typeof WeakMap == `function` ? WeakMap : Map,
      U = 0,
      W = null,
      G = null,
      K = 0,
      q = 0,
      Ul = null,
      Wl = !1,
      Gl = !1,
      Kl = !1,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = 0,
      eu = null,
      tu = null,
      nu = !1,
      ru = 0,
      iu = 0,
      au = 1 / 0,
      ou = null,
      su = null,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = 0,
      pu = null,
      mu = null,
      hu = 0,
      gu = null;
    function _u() {
      return U & 2 && K !== 0 ? K & -K : E.T === null ? dt() : hd();
    }
    function vu() {
      if (Ql === 0)
        if (!(K & 536870912) || F) {
          var e = Xe;
          ((Xe <<= 1), !(Xe & 3932160) && (Xe = 262144), (Ql = e));
        } else Ql = 536870912;
      return ((e = co.current), e !== null && (e.flags |= 32), Ql);
    }
    function yu(e, t, n) {
      (((e === W && (q === 2 || q === 9)) || e.cancelPendingCommit !== null) &&
        (Eu(e, 0), Cu(e, K, Ql, !1)),
        it(e, n),
        (!(U & 2) || e !== W) &&
          (e === W && (!(U & 2) && (Xl |= n), Jl === 4 && Cu(e, K, Ql, !1)),
          sd(e)));
    }
    function bu(e, t, n) {
      if (U & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || et(e, t),
        a = r ? Pu(e, t) : Mu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Gl && !r && Cu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !Su(n))) {
            ((a = Mu(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = eu;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Eu(c, s).flags |= 256), (s = Mu(c, s, !1)), s !== 2)
                ) {
                  if (Kl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Xl |= o), (a = 4));
                    break a;
                  }
                  ((o = tu),
                    (tu = a),
                    o !== null &&
                      (tu === null ? (tu = o) : tu.push.apply(tu, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Eu(e, 0), Cu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Cu(r, t, Ql, !Wl);
                break a;
              case 2:
                tu = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = ru + 300 - Ne()), 10 < a)) {
              if ((Cu(r, t, Ql, !Wl), $e(r, 0, !0) !== 0)) break a;
              ((du = t),
                (r.timeoutHandle = Xd(
                  xu.bind(
                    null,
                    r,
                    n,
                    tu,
                    ou,
                    nu,
                    t,
                    Ql,
                    Xl,
                    $l,
                    Wl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            xu(r, n, tu, ou, nu, t, Ql, Xl, $l, Wl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      sd(e);
    }
    function xu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: cn,
        }),
          Fl(t, a, d));
        var m =
          (a & 62914560) === a
            ? ru - Ne()
            : (a & 4194048) === a
              ? iu - Ne()
              : 0;
        if (((m = Jf(d, m)), m !== null)) {
          ((du = a),
            (e.cancelPendingCommit = m(
              Vu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            Cu(e, a, o, !l));
          return;
        }
      }
      Vu(e, t, a, n, r, i, o, s, c);
    }
    function Su(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Or(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function Cu(e, t, n, r) {
      ((t &= ~Zl),
        (t &= ~Xl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Ge(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && ot(e, n, t);
    }
    function wu() {
      return U & 6 ? !0 : (cd(0, !1), !1);
    }
    function Tu() {
      if (G !== null) {
        if (q === 0) var e = G.return;
        else ((e = G), (Qi = Zi = null), No(e), (La = null), (Ra = 0), (e = G));
        for (; e !== null;) (Wc(e.alternate, e), (e = e.return));
        G = null;
      }
    }
    function Eu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Zd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (du = 0),
        Tu(),
        (W = e),
        (G = n = gi(e.current, null)),
        (K = t),
        (q = 0),
        (Ul = null),
        (Wl = !1),
        (Gl = et(e, t)),
        (Kl = !1),
        ($l = Ql = Zl = Xl = Yl = Jl = 0),
        (tu = eu = null),
        (nu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Ge(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((ql = t), oi(), n);
    }
    function Du(e, t) {
      ((L = null),
        (E.H = Vs),
        t === Da || t === ka
          ? ((t = Fa()), (q = 3))
          : t === Oa
            ? ((t = Fa()), (q = 4))
            : (q =
                t === ac
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Ul = t),
        G === null && ((Jl = 1), $s(e, wi(t, e.current))));
    }
    function Ou() {
      var e = co.current;
      return e === null
        ? !0
        : (K & 4194048) === K
          ? lo === null
          : (K & 62914560) === K || K & 536870912
            ? e === lo
            : !1;
    }
    function ku() {
      var e = E.H;
      return ((E.H = Vs), e === null ? Vs : e);
    }
    function Au() {
      var e = E.A;
      return ((E.A = Vl), e);
    }
    function ju() {
      ((Jl = 4),
        Wl || ((K & 4194048) !== K && co.current !== null) || (Gl = !0),
        (!(Yl & 134217727) && !(Xl & 134217727)) ||
          W === null ||
          Cu(W, K, Ql, !1));
    }
    function Mu(e, t, n) {
      var r = U;
      U |= 2;
      var i = ku(),
        a = Au();
      ((W !== e || K !== t) && ((ou = null), Eu(e, t)), (t = !1));
      var o = Jl;
      a: do
        try {
          if (q !== 0 && G !== null) {
            var s = G,
              c = Ul;
            switch (q) {
              case 8:
                (Tu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                co.current === null && (t = !0);
                var l = q;
                if (((q = 0), (Ul = null), Ru(e, s, c, l), n && Gl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = q), (q = 0), (Ul = null), Ru(e, s, c, l));
            }
          }
          (Nu(), (o = Jl));
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Qi = Zi = null),
        (U = r),
        (E.H = i),
        (E.A = a),
        G === null && ((W = null), (K = 0), oi()),
        o
      );
    }
    function Nu() {
      for (; G !== null;) Iu(G);
    }
    function Pu(e, t) {
      var n = U;
      U |= 2;
      var r = ku(),
        a = Au();
      W !== e || K !== t
        ? ((ou = null), (au = Ne() + 500), Eu(e, t))
        : (Gl = et(e, t));
      a: do
        try {
          if (q !== 0 && G !== null) {
            t = G;
            var o = Ul;
            b: switch (q) {
              case 1:
                ((q = 0), (Ul = null), Ru(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ja(o)) {
                  ((q = 0), (Ul = null), Lu(t));
                  break;
                }
                ((t = function () {
                  ((q !== 2 && q !== 9) || W !== e || (q = 7), sd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                q = 7;
                break a;
              case 4:
                q = 5;
                break a;
              case 7:
                ja(o)
                  ? ((q = 0), (Ul = null), Lu(t))
                  : ((q = 0), (Ul = null), Ru(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (G.tag) {
                  case 26:
                    s = G.memoizedState;
                  case 5:
                  case 27:
                    var c = G;
                    if (s ? Gf(s) : c.stateNode.complete) {
                      ((q = 0), (Ul = null));
                      var l = c.sibling;
                      if (l !== null) G = l;
                      else {
                        var u = c.return;
                        u === null ? (G = null) : ((G = u), zu(u));
                      }
                      break b;
                    }
                }
                ((q = 0), (Ul = null), Ru(e, t, o, 5));
                break;
              case 6:
                ((q = 0), (Ul = null), Ru(e, t, o, 6));
                break;
              case 8:
                (Tu(), (Jl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Fu();
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        (Qi = Zi = null),
        (E.H = r),
        (E.A = a),
        (U = n),
        G === null ? ((W = null), (K = 0), oi(), Jl) : 0
      );
    }
    function Fu() {
      for (; G !== null && !je();) Iu(G);
    }
    function Iu(e) {
      var t = Fc(e.alternate, e, ql);
      ((e.memoizedProps = e.pendingProps), t === null ? zu(e) : (G = t));
    }
    function Lu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = yc(n, t, t.pendingProps, t.type, void 0, K);
          break;
        case 11:
          t = yc(n, t, t.pendingProps, t.type.render, t.ref, K);
          break;
        case 5:
          No(t);
        default:
          (Wc(n, t), (t = G = _i(t, ql)), (t = Fc(n, t, ql)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? zu(e) : (G = t));
    }
    function Ru(e, t, n, r) {
      ((Qi = Zi = null), No(t), (La = null), (Ra = 0));
      var i = t.return;
      try {
        if (ic(e, i, t, n, K)) {
          ((Jl = 1), $s(e, wi(n, e.current)), (G = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((G = i), t);
        ((Jl = 1), $s(e, wi(n, e.current)), (G = null));
        return;
      }
      t.flags & 32768
        ? (F || r === 1
            ? (e = !0)
            : Gl || K & 536870912
              ? (e = !1)
              : ((Wl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = co.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Bu(t, e))
        : zu(t);
    }
    function zu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Bu(t, Wl);
          return;
        }
        e = t.return;
        var n = Hc(t.alternate, t, ql);
        if (n !== null) {
          G = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          G = t;
          return;
        }
        G = t = e;
      } while (t !== null);
      Jl === 0 && (Jl = 5);
    }
    function Bu(e, t) {
      do {
        var n = Uc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (G = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          G = e;
          return;
        }
        G = e = n;
      } while (e !== null);
      ((Jl = 6), (G = null));
    }
    function Vu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Ku();
      while (cu !== 0);
      if (U & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ai),
          at(e, n, o, s, c, l),
          e === W && ((G = W = null), (K = 0)),
          (uu = t),
          (lu = e),
          (du = n),
          (fu = o),
          (pu = a),
          (mu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              ed(Le, function () {
                return (qu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = E.T), (E.T = null), (a = D.p), (D.p = 2), (s = U), (U |= 4));
          try {
            ll(e, t, n);
          } finally {
            ((U = s), (D.p = a), (E.T = r));
          }
        }
        ((cu = 1), Hu(), Uu(), Wu());
      }
    }
    function Hu() {
      if (cu === 1) {
        cu = 0;
        var e = lu,
          t = uu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = E.T), (E.T = null));
          var r = D.p;
          D.p = 2;
          var i = U;
          U |= 4;
          try {
            xl(t, e);
            var a = Ud,
              o = Nr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Mr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Pr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = jr(s, h),
                      v = jr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((cp = !!Hd), (Ud = Hd = null));
          } finally {
            ((U = i), (D.p = r), (E.T = n));
          }
        }
        ((e.current = t), (cu = 2));
      }
    }
    function Uu() {
      if (cu === 2) {
        cu = 0;
        var e = lu,
          t = uu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = E.T), (E.T = null));
          var r = D.p;
          D.p = 2;
          var i = U;
          U |= 4;
          try {
            ul(e, t.alternate, t);
          } finally {
            ((U = i), (D.p = r), (E.T = n));
          }
        }
        cu = 3;
      }
    }
    function Wu() {
      if (cu === 4 || cu === 3) {
        ((cu = 0), Me());
        var e = lu,
          t = uu,
          n = du,
          r = mu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (cu = 5)
          : ((cu = 0), (uu = lu = null), Gu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (su = null),
          ut(n),
          (t = t.stateNode),
          Ue && typeof Ue.onCommitFiberRoot == `function`)
        )
          try {
            Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = E.T), (i = D.p), (D.p = 2), (E.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((E.T = t), (D.p = i));
          }
        }
        (du & 3 && Ku(),
          sd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === gu
              ? hu++
              : ((hu = 0), (gu = e))
            : (hu = 0),
          cd(0, !1));
      }
    }
    function Gu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)));
    }
    function Ku() {
      return (Hu(), Uu(), Wu(), qu());
    }
    function qu() {
      if (cu !== 5) return !1;
      var e = lu,
        t = fu;
      fu = 0;
      var n = ut(du),
        r = E.T,
        a = D.p;
      try {
        ((D.p = 32 > n ? 32 : n), (E.T = null), (n = pu), (pu = null));
        var o = lu,
          s = du;
        if (((cu = 0), (uu = lu = null), (du = 0), U & 6)) throw Error(i(331));
        var c = U;
        if (
          ((U |= 4),
          Rl(o.current),
          Al(o, o.current, s, n),
          (U = c),
          cd(0, !1),
          Ue && typeof Ue.onPostCommitFiberRoot == `function`)
        )
          try {
            Ue.onPostCommitFiberRoot(He, o);
          } catch {}
        return !0;
      } finally {
        ((D.p = a), (E.T = r), Gu(e, t));
      }
    }
    function Ju(e, t, n) {
      ((t = wi(n, t)),
        (t = tc(e.stateNode, t, 2)),
        (e = Ya(e, t, 2)),
        e !== null && (it(e, 2), sd(e)));
    }
    function J(e, t, n) {
      if (e.tag === 3) Ju(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Ju(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (su === null || !su.has(r)))
            ) {
              ((e = wi(n, e)),
                (n = nc(2)),
                (r = Ya(t, n, 2)),
                r !== null && (rc(n, r, t, e), it(r, 2), sd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Hl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Kl = !0), i.add(n), (e = Xu.bind(null, e, t, n)), t.then(e, e));
    }
    function Xu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        W === e &&
          (K & n) === n &&
          (Jl === 4 || (Jl === 3 && (K & 62914560) === K && 300 > Ne() - ru)
            ? !(U & 2) && Eu(e, 0)
            : (Zl |= n),
          $l === K && ($l = 0)),
        sd(e));
    }
    function Zu(e, t) {
      (t === 0 && (t = nt()), (e = li(e, t)), e !== null && (it(e, t), sd(e)));
    }
    function Qu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Zu(e, n));
    }
    function $u(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Zu(e, n));
    }
    function ed(e, t) {
      return ke(e, t);
    }
    var td = null,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0;
    function sd(e) {
      (e !== nd &&
        e.next === null &&
        (nd === null ? (td = nd = e) : (nd = nd.next = e)),
        (id = !0),
        rd || ((rd = !0), md()));
    }
    function cd(e, t) {
      if (!ad && id) {
        ad = !0;
        do
          for (var n = !1, r = td; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ge(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), pd(r, a));
              } else
                ((a = K),
                  (a = $e(
                    r,
                    r === W ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || et(r, a) || ((n = !0), pd(r, a)));
            r = r.next;
          }
        while (n);
        ad = !1;
      }
    }
    function ld() {
      ud();
    }
    function ud() {
      id = rd = !1;
      var e = 0;
      od !== 0 && Yd() && (e = od);
      for (var t = Ne(), n = null, r = td; r !== null;) {
        var i = r.next,
          a = dd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (td = i) : (n.next = i),
            i === null && (nd = n))
          : ((n = r), (e !== 0 || a & 3) && (id = !0)),
          (r = i));
      }
      ((cu !== 0 && cu !== 5) || cd(e, !1), od !== 0 && (od = 0));
    }
    function dd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ge(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = tt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = W),
        (n = K),
        (n = $e(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (q === 2 || q === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ae(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || et(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ae(r), ut(n))) {
          case 2:
          case 8:
            n = Ie;
            break;
          case 32:
            n = Le;
            break;
          case 268435456:
            n = ze;
            break;
          default:
            n = Le;
        }
        return (
          (r = fd.bind(null, e)),
          (n = ke(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ae(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function fd(e, t) {
      if (cu !== 0 && cu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Ku() && e.callbackNode !== n) return null;
      var r = K;
      return (
        (r = $e(
          e,
          e === W ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (bu(e, r, t),
            dd(e, Ne()),
            e.callbackNode != null && e.callbackNode === n
              ? fd.bind(null, e)
              : null)
      );
    }
    function pd(e, t) {
      if (Ku()) return null;
      bu(e, t, !0);
    }
    function md() {
      $d(function () {
        U & 6 ? ke(Fe, ld) : ud();
      });
    }
    function hd() {
      if (od === 0) {
        var e = _a;
        (e === 0 && ((e = Ye), (Ye <<= 1), !(Ye & 261888) && (Ye = 256)),
          (od = e));
      }
      return od;
    }
    function gd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : sn(`` + e);
    }
    function _d(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function vd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = gd((i[ht] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ht] || null)
            ? gd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (od !== 0) {
                    var e = o ? _d(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? _d(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var yd = 0; yd < ei.length; yd++) {
      var bd = ei[yd];
      ti(bd.toLowerCase(), `on` + (bd[0].toUpperCase() + bd.slice(1)));
    }
    (ti(Kr, `onAnimationEnd`),
      ti(qr, `onAnimationIteration`),
      ti(Jr, `onAnimationStart`),
      ti(`dblclick`, `onDoubleClick`),
      ti(`focusin`, `onFocus`),
      ti(`focusout`, `onBlur`),
      ti(Yr, `onTransitionRun`),
      ti(Xr, `onTransitionStart`),
      ti(Zr, `onTransitionCancel`),
      ti(Qr, `onTransitionEnd`),
      jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      At(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      At(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      At(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      At(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      At(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      At(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var xd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Sd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(xd),
      );
    function Cd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ni(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ni(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Y(e, t) {
      var n = t[_t];
      n === void 0 && (n = t[_t] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Dd(t, e, 2, !1), n.add(r));
    }
    function wd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Dd(n, e, r, t));
    }
    var Td = `_reactListening` + Math.random().toString(36).slice(2);
    function Ed(e) {
      if (!e[Td]) {
        ((e[Td] = !0),
          Ot.forEach(function (t) {
            t !== `selectionchange` &&
              (Sd.has(t) || wd(t, !1, e), wd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Td] || ((t[Td] = !0), wd(`selectionchange`, !1, t));
      }
    }
    function Dd(e, t, n, r) {
      switch (hp(t)) {
        case 2:
          var i = lp;
          break;
        case 8:
          i = up;
          break;
        default:
          i = dp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Od(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Ct(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      hn(function () {
        var r = a,
          i = un(n),
          s = [];
        a: {
          var c = $r.get(e);
          if (c !== void 0) {
            var l = kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = qn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Rn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Rn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Yn;
                break;
              case Kr:
              case qr:
              case Jr:
                l = zn;
                break;
              case Qr:
                l = Xn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Zn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Jn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Qn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = gn(m, p)), g != null && d.push(kd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== ln &&
                (u = n.relatedTarget || n.fromElement) &&
                (Ct(u) || u[gt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Ct(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Jn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Tt(l)),
                (h = u == null ? c : Tt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Ct(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = jd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Md(s, c, l, d, !1),
                u !== null && f !== null && Md(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Tt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = gr;
            else if (ur(c))
              if (_r) v = Er;
              else {
                v = wr;
                var y = Cr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && rn(r.elementType) && (v = gr)
                  : (v = Tr));
            if ((v &&= v(e, r))) {
              dr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Yt(c, `number`, c.value));
          }
          switch (((y = r ? Tt(r) : window), e)) {
            case `focusin`:
              (ur(y) || y.contentEditable === `true`) &&
                ((Ir = y), (Lr = r), (Rr = null));
              break;
            case `focusout`:
              Rr = Lr = Ir = null;
              break;
            case `mousedown`:
              zr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((zr = !1), Br(s, n, i));
              break;
            case `selectionchange`:
              if (Fr) break;
            case `keydown`:
            case `keyup`:
              Br(s, n, i);
          }
          var b;
          if (er)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            or
              ? ar(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (M &&
              n.locale !== `ko` &&
              (or || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && or && (b = Cn())
                : ((bn = i),
                  (xn = `value` in bn ? bn.value : bn.textContent),
                  (or = !0))),
            (y = Ad(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = N(n)), b !== null && (x.data = b)))),
            (b = nr ? sr(e, n) : cr(e, n)) &&
              ((x = Ad(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            vd(s, e, r, n, i));
        }
        Cd(s, t);
      });
    }
    function kd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ad(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = gn(e, n)),
            i != null && r.unshift(kd(e, i, a)),
            (i = gn(e, t)),
            i != null && r.push(kd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function jd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Md(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = gn(n, a)), l != null && o.unshift(kd(n, l, c)))
            : i || ((l = gn(n, a)), l != null && o.push(kd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Nd = /\r\n?/g,
      Pd = /\u0000|\uFFFD/g;
    function Fd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Nd,
          `
`,
        )
        .replace(Pd, ``);
    }
    function Id(e, t) {
      return ((t = Fd(t)), Fd(e) === t);
    }
    function X(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              $t(e, `` + r);
          break;
        case `className`:
          Lt(e, `class`, r);
          break;
        case `tabIndex`:
          Lt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Lt(e, n, r);
          break;
        case `style`:
          nn(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Lt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = sn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && X(e, t, `name`, a.name, a, null),
                  X(e, t, `formEncType`, a.formEncType, a, null),
                  X(e, t, `formMethod`, a.formMethod, a, null),
                  X(e, t, `formTarget`, a.formTarget, a, null))
                : (X(e, t, `encType`, a.encType, a, null),
                  X(e, t, `method`, a.method, a, null),
                  X(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = sn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `onScroll`:
          r != null && Y(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Y(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = sn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Y(`beforetoggle`, e), Y(`toggle`, e), It(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          It(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = an.get(n) || n), It(e, n, r));
      }
    }
    function Ld(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          nn(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && $t(e, `` + r);
          break;
        case `onScroll`:
          r != null && Y(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Y(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!kt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ht] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : It(e, n, r);
            }
      }
    }
    function Rd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Y(`error`, e), Y(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    X(e, t, o, s, n, null);
                }
            }
          (a && X(e, t, `srcSet`, n.srcSet, n, null),
            r && X(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Y(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    X(e, t, r, d, n, null);
                }
            }
          Jt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Y(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  X(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Xt(e, !!r, n, !0) : Xt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Y(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  X(e, t, s, c, n, null);
              }
          Qt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  X(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Y(`beforetoggle`, e), Y(`toggle`, e), Y(`cancel`, e), Y(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Y(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < xd.length; r++) Y(xd[r], e);
          break;
        case `image`:
          (Y(`error`, e), Y(`load`, e));
          break;
        case `details`:
          Y(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Y(`error`, e), Y(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  X(e, t, u, r, n, null);
              }
          return;
        default:
          if (rn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Ld(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && X(e, t, c, r, n, null));
    }
    function zd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || X(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && X(e, t, p, m, r, f);
              }
          }
          qt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || X(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && X(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Xt(e, !!n, n ? [] : ``, !1) : Xt(e, !!n, t, !0))
              : Xt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  X(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && X(e, t, s, a, r, o);
              }
          Zt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  X(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  X(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                X(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  X(e, t, u, p, r, m);
              }
          return;
        default:
          if (rn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Ld(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Ld(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            X(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            X(e, t, f, p, r, m));
    }
    function Bd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Vd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Bd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Bd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Hd = null,
      Ud = null;
    function Wd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Gd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Kd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function qd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Jd = null;
    function Yd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Jd
          ? !1
          : ((Jd = e), !0)
        : ((Jd = null), !1);
    }
    var Xd = typeof setTimeout == `function` ? setTimeout : void 0,
      Zd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Qd = typeof Promise == `function` ? Promise : void 0,
      $d =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Qd === void 0
            ? Xd
            : function (e) {
                return Qd.resolve(null).then(e).catch(ef);
              };
    function ef(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function tf(e) {
      return e === `head`;
    }
    function nf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Pp(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) gf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), gf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[xt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && gf(e.ownerDocument.body);
        n = i;
      } while (n);
      Pp(t);
    }
    function rf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function af(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (af(n), St(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function of(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[xt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = ff(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function sf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function cf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function lf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function uf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function df(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function ff(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var pf = null;
    function Z(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return ff(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function mf(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function hf(e, t, n) {
      switch (((t = Wd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      St(e);
    }
    var _f = new Map(),
      vf = new Set();
    function yf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var bf = D.d;
    D.d = { f: xf, r: Sf, D: Q, C: Tf, L: Ef, m: Df, X: kf, S: Of, M: Af };
    function xf() {
      var e = bf.f(),
        t = wu();
      return e || t;
    }
    function Sf(e) {
      var t = wt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ks(t) : bf.r(e);
    }
    var Cf = typeof document > `u` ? null : document;
    function wf(e, t, n) {
      var r = Cf;
      if (r && typeof t == `string` && t) {
        var i = Kt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          vf.has(i) ||
            (vf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Rd(t, `link`, e),
              Dt(t),
              r.head.appendChild(t))));
      }
    }
    function Q(e) {
      (bf.D(e), wf(`dns-prefetch`, e, null));
    }
    function Tf(e, t) {
      (bf.C(e, t), wf(`preconnect`, e, t));
    }
    function Ef(e, t, n) {
      bf.L(e, t, n);
      var r = Cf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Kt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Kt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Kt(n.imageSizes) + `"]`))
          : (i += `[href="` + Kt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = $(e);
            break;
          case `script`:
            a = Ff(e);
        }
        _f.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          _f.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Mf(a))) ||
            (t === `script` && r.querySelector(If(a))) ||
            ((t = r.createElement(`link`)),
            Rd(t, `link`, e),
            Dt(t),
            r.head.appendChild(t)));
      }
    }
    function Df(e, t) {
      bf.m(e, t);
      var n = Cf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Kt(r) +
            `"][href="` +
            Kt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Ff(e);
        }
        if (
          !_f.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          _f.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(If(a))) return;
          }
          ((r = n.createElement(`link`)),
            Rd(r, `link`, e),
            Dt(r),
            n.head.appendChild(r));
        }
      }
    }
    function Of(e, t, n) {
      bf.S(e, t, n);
      var r = Cf;
      if (r && e) {
        var i = Et(r).hoistableStyles,
          a = $(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Mf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = _f.get(a)) && zf(e, n));
            var c = (o = r.createElement(`link`));
            (Dt(c),
              Rd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Rf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function kf(e, t) {
      bf.X(e, t);
      var n = Cf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Ff(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(If(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = _f.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Af(e, t) {
      bf.M(e, t);
      var n = Cf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Ff(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(If(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = _f.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function jf(e, t, n, r) {
      var a = (a = he.current) ? yf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = $(n.href)),
              (n = Et(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = $(n.href);
            var o = Et(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Mf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                _f.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  _f.set(e, n),
                  o || Pf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Ff(n)),
                (n = Et(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function $(e) {
      return `href="` + Kt(e) + `"`;
    }
    function Mf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Nf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Pf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Rd(t, `link`, n),
          Dt(t),
          e.head.appendChild(t));
    }
    function Ff(e) {
      return `[src="` + Kt(e) + `"]`;
    }
    function If(e) {
      return `script[async]` + e;
    }
    function Lf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Kt(n.href) + `"]`);
            if (r) return ((t.instance = r), Dt(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Dt(r),
              Rd(r, `style`, a),
              Rf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = $(n.href);
            var o = e.querySelector(Mf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Dt(o), o);
            ((r = Nf(n)),
              (a = _f.get(a)) && zf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Dt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Rd(o, `link`, r),
              (t.state.loading |= 4),
              Rf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Ff(n.src)),
              (a = e.querySelector(If(o)))
                ? ((t.instance = a), Dt(a), a)
                : ((r = n),
                  (a = _f.get(o)) && ((r = h({}, n)), Bf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Dt(a),
                  Rd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Rf(r, n.precedence, e));
      return t.instance;
    }
    function Rf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Bf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Vf = null;
    function Hf(e, t, n) {
      if (Vf === null) {
        var r = new Map(),
          i = (Vf = new Map());
        i.set(n, r);
      } else ((i = Vf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[xt] ||
            a[mt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Uf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Wf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Gf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Kf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = $(r.href),
            a = t.querySelector(Mf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Yf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Dt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Nf(r)),
            (i = _f.get(i)) && zf(r, i),
            (a = a.createElement(`link`)),
            Dt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Rd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Yf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var qf = 0;
    function Jf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Zf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && qf === 0 && (qf = 62500 * Vd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > qf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Yf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Zf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Xf = null;
    function Zf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Xf = new Map()),
          t.forEach(Qf, e),
          (Xf = null),
          Yf.call(e)));
    }
    function Qf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Xf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Xf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Yf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var $f = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: de,
      _currentValue2: de,
      _threadCount: 0,
    };
    function ep(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = rt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = rt(0)),
        (this.hiddenUpdates = rt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ep(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = mi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ka(a),
        e
      );
    }
    function np(e) {
      return e ? ((e = fi), e) : fi;
    }
    function rp(e, t, n, r, i, a) {
      ((i = np(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ja(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ya(e, r, t)),
        n !== null && (yu(n, e, t), Xa(n, e, t)));
    }
    function ip(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ap(e, t) {
      (ip(e, t), (e = e.alternate) && ip(e, t));
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = li(e, 67108864);
        (t !== null && yu(t, e, 67108864), ap(e, 67108864));
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = _u();
        t = lt(t);
        var n = li(e, t);
        (n !== null && yu(n, e, t), ap(e, t));
      }
    }
    var cp = !0;
    function lp(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 2), dp(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function up(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        ((D.p = 8), dp(e, t, n, r));
      } finally {
        ((D.p = a), (E.T = i));
      }
    }
    function dp(e, t, n, r) {
      if (cp) {
        var i = fp(r);
        if (i === null) (Od(e, t, r, pp, n), wp(e, r));
        else if (Ep(i, e, t, n, r)) r.stopPropagation();
        else if ((wp(e, r), t & 4 && -1 < Cp.indexOf(e))) {
          for (; i !== null;) {
            var a = wt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Qe(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Ge(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (sd(a), !(U & 6) && ((au = Ne() + 500), cd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = li(a, 2)), s !== null && yu(s, a, 2), wu(), ap(a, 2));
              }
            if (((a = fp(r)), a === null && Od(e, t, r, pp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Od(e, t, r, null, n);
      }
    }
    function fp(e) {
      return ((e = un(e)), mp(e));
    }
    var pp = null;
    function mp(e) {
      if (((pp = null), (e = Ct(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((pp = e), null);
    }
    function hp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Pe()) {
            case Fe:
              return 2;
            case Ie:
              return 8;
            case Le:
            case Re:
              return 32;
            case ze:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var gp = !1,
      _p = null,
      vp = null,
      yp = null,
      bp = new Map(),
      xp = new Map(),
      Sp = [],
      Cp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function wp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          _p = null;
          break;
        case `dragenter`:
        case `dragleave`:
          vp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          yp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          bp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          xp.delete(t.pointerId);
      }
    }
    function Tp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = wt(t)), t !== null && op(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ep(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((_p = Tp(_p, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((vp = Tp(vp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((yp = Tp(yp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Dp(e) {
      var t = Ct(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                ft(e.priority, function () {
                  sp(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                ft(e.priority, function () {
                  sp(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Op(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = fp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((ln = r), n.target.dispatchEvent(r), (ln = null));
        } else return ((t = wt(n)), t !== null && op(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function kp(e, t, n) {
      Op(e) && n.delete(t);
    }
    function Ap() {
      ((gp = !1),
        _p !== null && Op(_p) && (_p = null),
        vp !== null && Op(vp) && (vp = null),
        yp !== null && Op(yp) && (yp = null),
        bp.forEach(kp),
        xp.forEach(kp));
    }
    function jp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        gp ||
          ((gp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)));
    }
    var Mp = null;
    function Np(e) {
      Mp !== e &&
        ((Mp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Mp === e && (Mp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (mp(r || n) === null) continue;
              break;
            }
            var a = wt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Pp(e) {
      function t(t) {
        return jp(t, e);
      }
      (_p !== null && jp(_p, e),
        vp !== null && jp(vp, e),
        yp !== null && jp(yp, e),
        bp.forEach(t),
        xp.forEach(t));
      for (var n = 0; n < Sp.length; n++) {
        var r = Sp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Sp.length && ((n = Sp[0]), n.blockedOn === null);)
        (Dp(n), n.blockedOn === null && Sp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ht] || null;
          if (typeof a == `function`) o || Np(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ht] || null))) s = o.formAction;
              else if (mp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Np(n));
          }
        }
    }
    function Fp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Ip(e) {
      this._internalRoot = e;
    }
    ((Lp.prototype.render = Ip.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        rp(n, _u(), e, t, null, null);
      }),
      (Lp.prototype.unmount = Ip.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (rp(e.current, 2, null, e, null, null), wu(), (t[gt] = null));
          }
        }));
    function Lp(e) {
      this._internalRoot = e;
    }
    Lp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = dt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++);
        (Sp.splice(n, 0, e), n === 0 && Dp(e));
      }
    };
    var Rp = n.version;
    if (Rp !== `19.2.8`) throw Error(i(527, Rp, `19.2.8`));
    D.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var zp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: E,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Bp.isDisabled && Bp.supportsFiber)
        try {
          ((He = Bp.inject(zp)), (Ue = Bp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Xs,
        c = Zs,
        l = Qs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = tp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Fp)),
        (t.context = np(null)),
        (n = t.current),
        (r = _u()),
        (r = lt(r)),
        (o = Ja(r)),
        (o.callback = null),
        Ya(n, o, r),
        (n = r),
        (t.current.lanes = n),
        it(t, n),
        sd(t),
        (e[gt] = t.current),
        Ed(e),
        new Lp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = `__TSS_CONTEXT`,
  v = Symbol.for(`TSS_SERVER_FUNCTION`),
  y = `application/x-tss-framed`,
  b = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${y}`;
var x = /;\s*v=(\d+)/;
function ee(e) {
  let t = e.match(x);
  return t ? parseInt(t[1], 10) : void 0;
}
function S(e) {
  let t = ee(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var C = () => window.__TSS_START_OPTIONS__;
function w(e) {
  return e[e.length - 1];
}
function te(e) {
  return typeof e == `function`;
}
function ne(e, t) {
  return te(e) ? e(t) : e;
}
var re = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
function ae(e) {
  for (let t in e) if (re.call(e, t)) return !0;
  return !1;
}
var oe = () => Object.create(null),
  se = (e, t) => ce(e, t, oe);
function ce(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = D(e) && D(i);
  if (!a && !(ue(e) && ue(i))) return i;
  let o = a ? e : le(e);
  if (!o) return i;
  let s = a ? i : le(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : re.call(e, o)) && d++);
      continue;
    }
    if (
      l === null ||
      f === null ||
      typeof l != `object` ||
      typeof f != `object`
    ) {
      u[o] = f;
      continue;
    }
    let p = ce(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function le(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!ie.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!ie.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function ue(e) {
  if (!E(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!E(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function E(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function D(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function de(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!de(e[r], t[r], n)) return !1;
    return !0;
  }
  if (ue(e) && ue(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t)
        if ((!r || t[i] !== void 0) && !de(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t)
      if ((!r || t[o] !== void 0) && (a++, a > i || !de(e[o], t[o], n)))
        return !1;
    return i === a;
  }
  return !1;
}
function fe(e) {
  let t,
    n,
    r = new Promise((e, r) => {
      ((t = e), (n = r));
    });
  return (
    (r.status = `pending`),
    (r.resolve = (n) => {
      ((r.status = `resolved`), (r.value = n), t(n), e?.(n));
    }),
    (r.reject = (e) => {
      ((r.status = `rejected`), n(e));
    }),
    r
  );
}
function pe(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
function O(e) {
  return !!(e && typeof e == `object` && typeof e.then == `function`);
}
var k = /[\x00-\x1f\x7f"<>`{}]/g;
function A(e) {
  return e.replace(
    k,
    (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`),
  );
}
function me(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return A(t);
}
var j = [`http:`, `https:`, `mailto:`, `tel:`];
function he(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var ge = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  _e = /[&><\u2028\u2029]/g;
function ve(e) {
  return e.replace(_e, (e) => ge[e]);
}
function ye(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null;)
    ((r += me(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += me(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function be(e) {
  return /\s|[^\u0000-\u007F]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function xe(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Se() {
  throw Error(`Invariant failed`);
}
function Ce(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var we = 4,
  Te = 5;
function Ee(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function De(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return (
      (n[0] = 0),
      (n[1] = t),
      (n[2] = t),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  if (a === `$`) {
    let r = e.length;
    return (
      (n[0] = 2),
      (n[1] = t),
      (n[2] = t),
      (n[3] = r),
      (n[4] = r),
      (n[5] = r),
      n
    );
  }
  if (a.charCodeAt(0) === 36)
    return (
      (n[0] = 1),
      (n[1] = t),
      (n[2] = t + 1),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  let o = Ee(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return (
    (n[0] = 0),
    (n[1] = t),
    (n[2] = t),
    (n[3] = i),
    (n[4] = i),
    (n[5] = i),
    n
  );
}
function Oe(e, t, n, r, i, a, o) {
  o?.(n);
  let s = r;
  {
    let r = n.fullPath ?? n.from,
      o = r.length,
      c = n.options?.caseSensitive ?? e,
      l = n.options?.params?.parse ?? n.options?.parseParams;
    for (; s < o;) {
      let e = De(r, s, t),
        o,
        u = s,
        d = e[5];
      switch (((s = d + 1), a++, e[0])) {
        case 0: {
          let t = r.substring(e[2], e[3]);
          if (c) {
            let e = i.static?.get(t);
            if (e) o = e;
            else {
              i.static ??= new Map();
              let e = je(n.fullPath ?? n.from);
              ((e.parent = i), (e.depth = a), (o = e), i.static.set(t, e));
            }
          } else {
            let e = t.toLowerCase(),
              r = i.staticInsensitive?.get(e);
            if (r) o = r;
            else {
              i.staticInsensitive ??= new Map();
              let t = je(n.fullPath ?? n.from);
              ((t.parent = i),
                (t.depth = a),
                (o = t),
                i.staticInsensitive.set(e, t));
            }
          }
          break;
        }
        case 1: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.dynamic?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Me(1, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.depth = a),
              (e.parent = i),
              (i.dynamic ??= []),
              i.dynamic.push(e));
          }
          break;
        }
        case 3: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.optional?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Me(3, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.parent = i),
              (e.depth = a),
              (i.optional ??= []),
              i.optional.push(e));
          }
          break;
        }
        case 2: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            l = c && !!(t || s),
            f = t ? (l ? t : t.toLowerCase()) : void 0,
            p = s ? (l ? s : s.toLowerCase()) : void 0,
            m = Me(2, n.fullPath ?? n.from, l, f, p);
          ((o = m),
            (m.parent = i),
            (m.depth = a),
            (i.wildcard ??= []),
            i.wildcard.push(m));
        }
      }
      i = o;
    }
    if (
      l &&
      n.children &&
      !n.isRoot &&
      n.id &&
      n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95
    ) {
      let e = je(n.fullPath ?? n.from);
      ((e.kind = Te),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let u = (n.path || !n.children) && !n.isRoot;
    if (u && r.endsWith(`/`)) {
      let e = je(n.fullPath ?? n.from);
      ((e.kind = we),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.index = e),
        (i = e));
    }
    ((i.parse = l ?? null),
      (i.priority = n.options?.params?.priority ?? 0),
      u && !i.route && ((i.route = n), (i.fullPath = n.fullPath ?? n.from)));
  }
  if (n.children) for (let r of n.children) Oe(e, t, r, s, i, a, o);
}
function ke(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function Ae(e) {
  if (e.pathless) for (let t of e.pathless) Ae(t);
  if (e.static) for (let t of e.static.values()) Ae(t);
  if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) Ae(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(ke);
    for (let t of e.dynamic) Ae(t);
  }
  if (e.optional?.length) {
    e.optional.sort(ke);
    for (let t of e.optional) Ae(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(ke);
    for (let t of e.wildcard) Ae(t);
  }
}
function je(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Me(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Ne(e, t) {
  let n = je(`/`),
    r = new Uint16Array(6);
  for (let t of e) Oe(!1, r, t, 1, n, 0);
  (Ae(n), (t.masksTree = n), (t.flatCache = Ce(1e3)));
}
function Pe(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = ze(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function Fe(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o ||
      ((o = je(`/`)),
      Oe(t, new Uint16Array(6), { from: e }, 1, o, 0),
      i.singleCache.set(a, o)),
    ze(r, o, n)
  );
}
function Ie(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = ze(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = Ve(a.route)), t.matchCache.set(r, a), a);
}
function Le(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function Re(e, t = !1, n) {
  let r = je(e.fullPath),
    i = new Uint16Array(6),
    a = {},
    o = {},
    s = 0;
  return (
    Oe(t, i, e, 1, r, 0, (e) => {
      if ((n?.(e, s), e.id in a && Se(), (a[e.id] = e), s !== 0 && e.path)) {
        let t = Le(e.fullPath);
        (!o[t] || e.fullPath.endsWith(`/`)) && (o[t] = e);
      }
      s++;
    }),
    Ae(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: Ce(1e3),
        matchCache: Ce(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: a,
      routesByPath: o,
    }
  );
}
function ze(e, t, n = !1) {
  let r = e.split(`/`),
    i = Ue(e, r, t, n);
  if (!i) return null;
  let [a] = Be(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Be(e, t, n) {
  let r = He(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === we) break;
    if (u.kind === Te) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(
          f + (t.prefix?.length ?? 0),
          e.length - (t.suffix?.length ?? 0),
        ),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function Ve(e) {
  let t = [e];
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function He(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function Ue(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !w(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [
      {
        node: n,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ],
    c = null,
    l = null;
  for (; s.length;) {
    let n = s.pop(),
      {
        node: i,
        index: u,
        skipped: d,
        depth: f,
        statics: p,
        dynamics: m,
        optionals: h,
      } = n,
      { extract: g, rawParams: _ } = n;
    if (i.kind === 2 && i.route && !qe(l, n)) continue;
    if (i.parse) {
      if (!Ke(e, t, n)) continue;
      ((_ = n.rawParams), (g = n.extract));
    }
    r && i.route && i.kind !== we && qe(c, n) && (c = n);
    let v = u === o;
    if (
      v &&
      (i.route && (!a || i.kind === we || i.kind === 2) && qe(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let y = v ? void 0 : t[u],
      b;
    if (v && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        },
        r = !0;
      if ((i.index.parse && (Ke(e, t, n) || (r = !1)), r)) {
        if (!m && !h && !d && Ge(p, o)) return n;
        qe(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(
          r &&
          (v || !(n.caseSensitive ? y : (b ??= y.toLowerCase())).startsWith(r))
        )) {
          if (a) {
            if (v) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            depth: f + 1,
            statics: p,
            dynamics: m,
            optionals: h,
            extract: g,
            rawParams: _,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << f),
        t = f + 1;
      for (let n = i.optional.length - 1; n >= 0; n--) {
        let r = i.optional[n];
        s.push({
          node: r,
          index: u,
          skipped: e,
          depth: t,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
      if (!v)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let n = i.optional[e],
            { prefix: r, suffix: a } = n;
          if (r || a) {
            let e = n.caseSensitive ? y : (b ??= y.toLowerCase());
            if ((r && !e.startsWith(r)) || (a && !e.endsWith(a))) continue;
          }
          s.push({
            node: n,
            index: u + 1,
            skipped: d,
            depth: t,
            statics: p,
            dynamics: m,
            optionals: h + We(o, u),
            extract: g,
            rawParams: _,
          });
        }
    }
    if (!v && i.dynamic && y)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? y : (b ??= y.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m + We(o, u),
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    if (!v && i.staticInsensitive) {
      let e = i.staticInsensitive.get((b ??= y.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + We(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (!v && i.static) {
      let e = i.static.get(y);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + We(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (i.pathless) {
      let e = f + 1;
      for (let t = i.pathless.length - 1; t >= 0; t--) {
        let n = i.pathless[t];
        s.push({
          node: n,
          index: u,
          skipped: d,
          depth: e,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return (
      (c.rawParams ??= Object.create(null)),
      (c.rawParams[`**`] = decodeURIComponent(r)),
      c
    );
  }
  return null;
}
function We(e, t) {
  return 2 ** (e - t - 1);
}
function Ge(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function Ke(e, t, n) {
  let r, i;
  try {
    [r, i] = Be(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function qe(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === we) > (e.node.kind === we) ||
                ((t.node.kind === we) == (e.node.kind === we) &&
                  t.depth > e.depth)))))))
  );
}
function Je(e) {
  return Ye(e.filter((e) => e !== void 0).join(`/`));
}
function Ye(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function Xe(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function Ze(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function Qe(e) {
  return Ze(Xe(e));
}
function $e(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function et(e, t, n) {
  return $e(e, n) === $e(t, n);
}
function tt({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && w(s) === ``;) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 &&
    (w(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = Ye(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function nt(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function rt(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => at(e, n))
            .join(`/`)
      : at(r, n)
    : r;
}
function it({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`)
    return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`))
    return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o;) {
    let r = s;
    c = De(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = rt(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = rt(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = rt(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function at(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function ot(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e;
  return e;
}
function st(e) {
  return e?.isNotFound === !0;
}
function ct() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var lt = `tsr-scroll-restoration-v1_3`,
  ut = ct();
function dt() {
  try {
    return JSON.parse(ut?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function ft() {
  try {
    ut?.setItem(lt, JSON.stringify(pt));
  } catch {}
}
var pt = dt(),
  mt = `data-scroll-restoration-id`,
  ht = (e) => e.state.__TSR_key || e.href;
function gt(e) {
  let t = e.getAttribute(mt);
  if (t) return `[${mt}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var _t = !1,
  vt = `window`;
function yt(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function bt(e) {
  let t = new Set();
  for (let n of e) {
    if (n === vt) continue;
    let e = yt(n);
    e && t.add(e);
  }
  return t;
}
function xt(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || ht,
    a = new Set(),
    o = (e) => {
      let t = (pt[e] ||= {});
      for (let e of a)
        e === document
          ? (t[vt] = { scrollX, scrollY })
          : e.isConnected &&
            (t[gt(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (_t = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        _t || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), ft());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c = r.hash,
          l;
        if (
          (a.clear(),
          (r.next = !0),
          (r.hash = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.restoring && d && d !== u) {
          let e = pt[d];
          if (e) {
            let t = pt[u];
            for (let n in e) {
              if (n === vt) {
                if (s) continue;
              } else {
                let e = yt(n);
                if (!e || (s && o && ((l ??= bt(o)), l.has(e)))) continue;
              }
              ((t ||= pt[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        _t = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= bt(o));
            let t = e && i && c,
              s = r.restoring ? pt[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === vt) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = yt(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          _t = !1;
        }
      })));
}
function St(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function Ct(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``;
}
function wt(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = Ct(r))
      : Array.isArray(t)
        ? t.push(Ct(r))
        : (n[e] = [t, Ct(r)]);
  }
  return n;
}
var Tt = Dt(JSON.parse),
  Et = Ot(JSON.stringify, JSON.parse);
function Dt(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = wt(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function Ot(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = St(e, r);
    return t ? `?${t}` : ``;
  };
}
var kt = `__root__`;
function At(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function jt(e) {
  return e instanceof Response && !!e.options;
}
function Mt(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return At(e);
}
function Nt(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Ft(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = It(e[n], t);
      return t;
    },
  };
}
function Pt(e) {
  let t = Qe(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r
          ? (t.pathname = `/`)
          : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = Je([`/`, t, e.pathname])), e),
  };
}
function Ft(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function It(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Lt(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => Rt(o, _.get())),
    x = r(() => Rt(s, v.get())),
    ee = r(() => Rt(c, y.get())),
    S = r(() => _.get()[0]),
    C = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    w = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    te = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    ne = Ce(64);
  function re(e) {
    let t = ne.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        ne.set(e, t)),
      t
    );
  }
  let ie = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: ee,
    firstId: S,
    hasPending: C,
    matchRouteDeps: w,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: te,
    getRouteMatchStore: re,
    setMatches: ae,
    setPending: oe,
    setCached: se,
  };
  (ae(e.matches), a?.(ie));
  function ae(e) {
    zt(e, o, _, n, i);
  }
  function oe(e) {
    zt(e, s, v, n, i);
  }
  function se(e) {
    zt(e, c, y, n, i);
  }
  return ie;
}
function Rt(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function zt(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    xe(n.get(), a) || n.set(a);
  });
}
var Bt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  Vt = (e) =>
    e.stores.matchesId
      .get()
      .some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  Ht = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  Ut = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  Wt = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent)
        return t;
    }
    return n ? a : i;
  },
  Gt = (e, t, n) => {
    if (!(!jt(n) && !st(n)))
      throw jt(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: jt(n)
                ? `redirected`
                : st(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: Ut(e, t.index),
              isFetching: !1,
              error: n,
            })),
            st(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          jt(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  Kt = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  qt = (e, t, n) => {
    let r = Ut(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  Jt = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), Gt(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), Gt(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !jt(n) && !st(n) && (e.serialError ??= n));
  },
  Yt = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !Ht(e, t) &&
      (n.options.loader || n.options.beforeLoad || sn(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        Bt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  Xt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
      return;
    Yt(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload &&
        (n.status === `redirected` || n.status === `notFound`) &&
        Gt(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise
      ? r._nonReactive.beforeLoadPromise.then(i)
      : i();
  },
  Zt = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = fe(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && Jt(e, n, o), s && Jt(e, n, s), Yt(e, t, r, i));
    let c = new AbortController(),
      l = !1,
      u = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: c,
          })));
      },
      d = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (u(), d());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = fe();
    let f = { ...Ut(e, n, !1), ...i.__routeContext },
      { search: p, params: m, cause: h } = i,
      g = Ht(e, t),
      _ = {
        search: p,
        abortController: c,
        params: m,
        preload: g,
        context: f,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: g ? `preload` : h,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      v = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (u(), d());
          });
          return;
        }
        ((jt(r) || st(r)) && (u(), Jt(e, n, r)),
          e.router.batch(() => {
            (u(),
              e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })),
              d());
          }));
      },
      y;
    try {
      if (((y = r.options.beforeLoad(_)), O(y)))
        return (
          u(),
          y
            .catch((t) => {
              Jt(e, n, t);
            })
            .then(v)
        );
    } catch (t) {
      (u(), Jt(e, n, t));
    }
    v(y);
  },
  Qt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => Zt(e, n, t, i),
      s = () => {
        if (Kt(e, n)) return;
        let t = Xt(e, n, i);
        return O(t) ? t.then(o) : o();
      };
    return a();
  },
  $t = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers))
      return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      n.options.head?.(i),
      n.options.scripts?.(i),
      n.options.headers?.(i),
    ]).then(([e, t, n]) => ({
      meta: e?.meta,
      links: e?.links,
      headScripts: e?.scripts,
      headers: n,
      scripts: t,
      styles: e?.styles,
    }));
  },
  en = (e, t, n, r, i) => {
    let a = t[r - 1],
      {
        params: o,
        loaderDeps: s,
        abortController: c,
        cause: l,
      } = e.router.getMatch(n),
      u = Ut(e, r),
      d = Ht(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  tn = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        on(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(en(e, t, n, r, i)),
          l = !!s && O(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (Gt(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: Ut(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(),
              (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: Ut(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          st(t) && (await i.options.notFoundComponent?.preload?.()),
          Gt(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), Gt(e, e.router.getMatch(n), t));
        }
        (!jt(o) && !st(o) && (await on(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: Ut(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), Gt(e, r, t));
    }
  },
  nn = async (e, t, n) => {
    async function r(r, a, c, l, d) {
      let f = Date.now() - a.updatedAt,
        p = r
          ? (d.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4)
          : (d.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        m = d.options.shouldReload,
        h = typeof m == `function` ? m(en(e, t, i, n, d)) : m,
        { status: g, invalid: _ } = l,
        v =
          f >= p &&
          (!!e.forceStaleReload ||
            l.cause === `enter` ||
            (c !== void 0 && c !== l.id));
      ((o = g === `success` && (_ || (h ?? v))),
        (r && d.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await tn(e, t, i, n, d);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  jt(t) && (await e.router.navigate(t.options));
                }
              })())
            : g !== `success` || o
              ? await tn(e, t, i, n, d)
              : qt(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (Kt(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      qt(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = Ht(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && Gt(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = fe()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let d = e.router.getMatch(i);
    (s ||
      (d._nonReactive.loaderPromise?.resolve(),
      d._nonReactive.loadPromise?.resolve(),
      (d._nonReactive.loadPromise = void 0)),
      clearTimeout(d._nonReactive.pendingTimeout),
      (d._nonReactive.pendingTimeout = void 0),
      s || (d._nonReactive.loaderPromise = void 0),
      (d._nonReactive.dehydrated = void 0));
    let f = s ? d.isFetching : !1;
    return f !== d.isFetching || d.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: f, invalid: !1 })),
        e.router.getMatch(i))
      : d;
  };
async function rn(e) {
  let t = e,
    n = [];
  Vt(t.router) && Bt(t);
  let r;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = Qt(t, e);
      O(n) && (await n);
    } catch (e) {
      if (jt(e)) throw e;
      if (st(e)) r = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let i = t.firstBadMatchIndex ?? t.matches.length,
    a = r && !t.preload ? Wt(t, r) : void 0,
    o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i),
    s,
    c;
  for (let e = 0; e < o; e++) n.push(nn(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (jt(e)) throw e;
      st(e) ? (s ??= e) : (c ??= e);
    }
    if (c !== void 0) throw c;
  }
  let l = s ?? (r && !t.preload ? r : void 0),
    u =
      t.firstBadMatchIndex === void 0
        ? t.matches.length - 1
        : t.firstBadMatchIndex;
  if (!l && r && t.preload) return t.matches;
  if (l) {
    let e = Wt(t, l);
    e === void 0 && Se();
    let n = t.matches[e],
      r = t.router.looseRoutesById[n.routeId],
      i = t.router.options?.defaultNotFoundComponent;
    (!r.options.notFoundComponent && i && (r.options.notFoundComponent = i),
      (l.routeId = n.routeId));
    let a = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(a
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: l }),
      isFetching: !1,
    })),
      (u = e),
      await on(r, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({
          ...e,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await on(e, [`errorComponent`]);
  }
  for (let e = 0; e <= u; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = $t(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let d = Bt(t);
  if ((O(d) && (await d), l)) throw l;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function an(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function on(e, t = cn) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === cn
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = an(e, cn);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0),
                      (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : an(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function sn(e) {
  for (let t of cn) if (e.options[t]?.preload) return !0;
  return !1;
}
var cn = [
    `component`,
    `errorComponent`,
    `pendingComponent`,
    `notFoundComponent`,
  ],
  ln = `__TSR_index`,
  un = `popstate`,
  dn = `beforeunload`;
function fn(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = gn(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[ln];
      ((i = pn(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[ln];
      ((i = pn(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[ln] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function pn(e, t) {
  t ||= {};
  let n = _n();
  return { ...t, key: n, __TSR_key: n, [ln]: e };
}
function mn(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() =>
        gn(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state,
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = _n();
    t.history.replaceState({ [ln]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(
          g.state,
          ``,
          g.href,
        ),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = gn(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[ln] - l.state[ln],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (
              await r.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ((f = !0), t.history.go(1), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    ee = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = fn({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(dn, ee, { capture: !0 }),
          t.removeEventListener(un, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(dn, ee, { capture: !0 }),
    t.addEventListener(un, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || b(`REPLACE`), n);
    }),
    S
  );
}
function hn(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function gn(e, t) {
  let n = hn(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = _n();
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length,
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [ln]: 0, key: a, __TSR_key: a },
  };
}
function _n() {
  return (Math.random() + 1).toString(36).substring(7);
}
function vn(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function yn(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var bn = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = nt(
                this.options.pathParamsAllowedCharacters,
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = mn())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== `null`
                ? (this.origin = window.origin)
                : (this.origin = `http://localhost`)),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = Ce(1e3)),
              (e = this.buildRouteTree()),
              this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch),
              (this.stores = Lt(Cn(this.latestLocation), e)),
              xt(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = Qe(o);
            (t && t !== `/` && e.push(Pt({ basepath: o })),
              s && e.push(s),
              (this.rewrite =
                e.length === 0 ? void 0 : e.length === 1 ? e[0] : Nt(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`,
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation,
          );
        }),
        (this.buildRouteTree = () => {
          let e = Re(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (
            this.options.routeMasks &&
              Ne(this.options.routeMasks, e.processedTree),
            e
          );
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: ye(e).path,
                  external: !1,
                  searchStr: o,
                  search: se(t?.search, i),
                  hash: ye(r.slice(1)).path,
                  state: ce(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Ft(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: ye(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: se(t?.search, c),
                  hash: ye(s.hash.slice(1)).path,
                  state: ce(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          tt({
            base: e,
            to: t.includes(`//`) ? Ye(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          Tn({
            pathname: e,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t &&
                (t.status === `pending` || t.isFetching === `loader`) &&
                this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n =
                  t._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i =
                  t.unsafeRelative === `path`
                    ? n.pathname
                    : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c =
                  a?.charCodeAt(0) === 47
                    ? `/`
                    : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, ne(t.params, s)),
                d = this.routesByPath[Ze(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute ||
                      (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && ae(u))
                for (let e of f) {
                  let t =
                    e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : ye(
                      it({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(
                        e,
                        wn(t.options.validateSearch, { ...e, ...m }),
                      );
                    } catch {}
                }),
                  (m = e));
              }
              ((m = En({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = se(o, m)));
              let h = this.options.stringifySearch(m),
                g =
                  t.hash === !0 ? n.hash : t.hash ? ne(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v =
                  t.state === !0
                    ? n.state
                    : t.state
                      ? ne(t.state, n.state)
                      : {};
              v = ce(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                x,
                ee = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = It(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (x = t.pathname + t.search + t.hash)
                    : ((x = t.href), (ee = !0)));
              } else ((b = be(y)), (x = b));
              return {
                publicHref: x,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: ee,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = Pe(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, ne(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({
          viewTransition: e,
          ignoreBlocker: t,
          ...n
        }) => {
          let r,
            i = () => {
              let e = [
                `key`,
                `__TSR_key`,
                `__TSR_index`,
                `__hashScrollIntoViewOptions`,
              ];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = de(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = Ze(this.latestLocation.href) === Ze(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = fe(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](
                o.publicHref,
                o.state,
                { ignoreBlocker: t },
              ));
          }
          return (
            (this._scroll.next = n.resetScroll ?? !0),
            this.history.subscribers.size ||
              this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = gn(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = Ft(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this.pendingBuiltLocation === s &&
                (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({
          to: e,
          reloadDocument: t,
          href: n,
          publicHref: r,
          ...i
        }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (he(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({
            ...i,
            href: n,
            to: e,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches
              .get()
              .filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a =
              this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    t && (this._scroll.hash = t === `PUSH` || t === `REPLACE`));
                  let n = this.latestLocation,
                    r = yn(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await rn({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter(
                                    (e) =>
                                      !this.stores.pendingMatchStores.has(e.id),
                                  )
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a
                                ? o.filter((e) => !s.has(e.routeId))
                                : null),
                                (n = a
                                  ? i.filter((e) => !c.has(e.routeId))
                                  : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`,
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e)
                                  this.looseRoutesById[t.routeId].options[i]?.(
                                    t,
                                  );
                          });
                        });
                      },
                    }));
                } catch (e) {
                  jt(e)
                    ? ((n = e),
                      this.navigate({
                        ...n.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : st(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t),
                      this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) &&
              (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(yn(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(t),
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            he(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (
            e.headers.get(`Location`) ||
              e.headers.set(`Location`, e.options.href),
            e
          );
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(
                this.stores.cachedMatches.get().filter((e) => !t(e)),
              );
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ??
                300 * 1e3;
              return t.status === `error` || e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = on),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await rn({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e)
                    ? (n = n.map((n) => (n.id === e ? t(n) : n)))
                    : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (jt(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            st(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (
              t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            a = Fe(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !a || (e.params && !de(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? de(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? Et,
          parseSearch: e.parseSearch ?? Tt,
          protocolAllowlist: e.protocolAllowlist ?? j,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e),
        (this.routesByPath = t),
        (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r &&
        (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = Ve(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : Ze(e.pathname)) &&
        (this.options.notFoundRoute
          ? (a = [...a, this.options.notFoundRoute])
          : (o = !0));
      let s = o ? On(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = new Map();
      for (let e of this.stores.matchStores.values())
        e.routeId && l.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = c[n - 1],
          u,
          d,
          f;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = wn(r.options.validateSearch, { ...n }) ?? void 0;
            ((u = { ...n, ...e }), (d = { ...i, ...e }), (f = void 0));
          } catch (e) {
            let r = e;
            if (
              (e instanceof xn || (r = new xn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw r;
            ((u = n), (d = {}), (f = r));
          }
        }
        let p = r.options.loaderDeps?.({ search: u }) ?? ``,
          m = p ? JSON.stringify(p) : ``,
          { interpolatedPath: h, usedParams: g } = it({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          _ = r.id + h + m,
          v = this.getMatch(_),
          y = l.get(r.id),
          b = v?._strictParams ?? g,
          x;
        if (!v)
          try {
            kn(r, b);
          } catch (e) {
            if (
              ((x = st(e) || jt(e) ? e : new Sn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw x;
          }
        Object.assign(i, b);
        let ee = y ? `stay` : `enter`,
          S;
        if (v)
          S = {
            ...v,
            cause: ee,
            params: y?.params ?? i,
            _strictParams: b,
            search: se(y ? y.search : v.search, u),
            _strictSearch: d,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || sn(r)
              ? `pending`
              : `success`;
          S = {
            id: _,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: y?.params ?? i,
            _strictParams: b,
            pathname: h,
            updatedAt: Date.now(),
            search: y ? se(y.search, u) : u,
            _strictSearch: d,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: x,
            __routeContext: void 0,
            _nonReactive: { loadPromise: fe() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ee,
            loaderDeps: y ? ce(y.loaderDeps, p) : p,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (S.globalNotFound = s === r.id), (S.searchError = f));
        let C = this.getParentContext(o);
        ((S.context = { ...C, ...S.__routeContext, ...S.__beforeLoadContext }),
          (c[n] = S));
      }
      for (let t = 0; t < c.length; t++) {
        let n = c[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = l.get(n.routeId);
        if (((n.params = o ? se(o.params, i) : i), !a)) {
          let i = c[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: c,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let t = w(this.stores.matchesId.get()),
        n = this.lightweightCache.get(e);
      if (n && n[0] === t) return n[1];
      let { matchedRoutes: r, routeParams: i } = this.getMatchedRoutes(
          e.pathname,
        ),
        a = w(r),
        o = { ...e.search };
      for (let e of r)
        try {
          Object.assign(o, wn(e.options.validateSearch, o));
        } catch {}
      let s = t && this.stores.matchStores.get(t)?.get(),
        c = s && s.routeId === a.id && s.pathname === e.pathname,
        l;
      if (c) l = s.params;
      else {
        let e = Object.assign(Object.create(null), i);
        for (let t of r)
          try {
            kn(t, e);
          } catch {}
        l = e;
      }
      let u = { matchedRoutes: r, fullPath: a.fullPath, search: o, params: l };
      return (this.lightweightCache.set(e, [t, u]), u);
    }
  },
  xn = class extends Error {},
  Sn = class extends Error {};
function Cn(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function wn(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new xn(`Async validation not supported`);
    if (n.issues)
      throw new xn(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Tn({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = Ze(e),
    a,
    o = Ie(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function En({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return Dn(n)(e, t, r ?? !1);
}
function Dn(e) {
  let t,
    n,
    r = [];
  for (let t of e) {
    let e = t.options;
    `search` in e
      ? e.search?.middlewares && r.push(...e.search.middlewares)
      : (e.preSearchFilters || e.postSearchFilters) &&
        r.push(({ search: t, next: n }) => {
          let r = n(
            e.preSearchFilters
              ? e.preSearchFilters.reduce((e, t) => t(e), t)
              : t,
          );
          return e.postSearchFilters
            ? e.postSearchFilters.reduce((e, t) => t(e), r)
            : r;
        });
    let i = e.validateSearch;
    i &&
      r.push(({ search: e, next: t, meta: r }) => {
        let a = t(e);
        if (n)
          try {
            let e = wn(i, a);
            if (r && e)
              for (let t in e)
                t in a || (r.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let i = (e, n, a) => {
    if (e >= r.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = ne(t.search, n);
      return (a && (a.explicit = e), e);
    }
    return r[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = a || {};
          return { search: i(e + 1, t, n), meta: n };
        }
        return i(e + 1, t, a);
      },
      meta: a,
    });
  };
  return function (e, r, a) {
    return ((t = r), (n = a), i(0, e));
  };
}
function On(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return kt;
}
function kn(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1)
      throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
var An = Symbol.for(`TSR_DEFERRED_PROMISE`);
function jn(e, t) {
  let n = e;
  return n[An]
    ? n
    : ((n[An] = { status: `pending` }),
      n
        .then((e) => {
          ((n[An].status = `success`), (n[An].data = e));
        })
        .catch((e) => {
          ((n[An].status = `error`),
            (n[An].error = {
              data: (t?.serializeError ?? vn)(e),
              __isServerError: !0,
            }));
        }),
      n);
}
var Mn = `Error preloading route! ☝️`;
function Nn(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function Pn(e) {
  return e?.scriptFormat ?? `module`;
}
function Fn(e, t, n) {
  let r = In(t),
    i = Nn(n, `script`) ?? r.crossOrigin;
  return {
    ...(Pn(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function In(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Ln(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Rn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var zn = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = kt) : this.parentRoute || Se());
          let r = n ? kt : t?.path;
          r && r !== `/` && (r = Xe(r));
          let i = t?.id || r,
            a = n
              ? kt
              : Je([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = Je([`/`, a])));
          let o = a === `__root__` ? `/` : Je([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = Ze(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => At({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  Bn = class extends zn {
    constructor(e) {
      super(e);
    }
  },
  Vn = ((e) => (
    (e[(e.AggregateError = 1)] = `AggregateError`),
    (e[(e.ArrowFunction = 2)] = `ArrowFunction`),
    (e[(e.ErrorPrototypeStack = 4)] = `ErrorPrototypeStack`),
    (e[(e.ObjectAssign = 8)] = `ObjectAssign`),
    (e[(e.BigIntTypedArray = 16)] = `BigIntTypedArray`),
    (e[(e.RegExp = 32)] = `RegExp`),
    e
  ))(Vn || {}),
  Hn = Symbol.asyncIterator,
  Un = Symbol.hasInstance,
  Wn = Symbol.isConcatSpreadable,
  Gn = Symbol.iterator,
  Kn = Symbol.match,
  qn = Symbol.matchAll,
  Jn = Symbol.replace,
  Yn = Symbol.search,
  Xn = Symbol.species,
  Zn = Symbol.split,
  Qn = Symbol.toPrimitive,
  $n = Symbol.toStringTag,
  er = Symbol.unscopables,
  tr = {
    [Hn]: 0,
    [Un]: 1,
    [Wn]: 2,
    [Gn]: 3,
    [Kn]: 4,
    [qn]: 5,
    [Jn]: 6,
    [Yn]: 7,
    [Xn]: 8,
    [Zn]: 9,
    [Qn]: 10,
    [$n]: 11,
    [er]: 12,
  },
  nr = {
    0: Hn,
    1: Un,
    2: Wn,
    3: Gn,
    4: Kn,
    5: qn,
    6: Jn,
    7: Yn,
    8: Xn,
    9: Zn,
    10: Qn,
    11: $n,
    12: er,
  },
  M = void 0,
  rr = { 2: !0, 3: !1, 1: M, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  ir = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  ar = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function N(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function or(e) {
  return N(2, M, e, M, M, M, M, M, M, M, M, M);
}
var sr = or(2),
  cr = or(3),
  lr = or(1),
  ur = or(0),
  dr = or(4),
  fr = or(5),
  pr = or(6),
  mr = or(7);
function hr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return M;
  }
}
function gr(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = hr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function _r(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function vr(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, _r);
}
var yr = `__SEROVAL_REFS__`,
  br = new Map(),
  xr = new Map();
function Sr(e) {
  return br.has(e);
}
function Cr(e) {
  return xr.has(e);
}
function wr(e) {
  if (Sr(e)) return br.get(e);
  throw new fi(e);
}
function Tr(e) {
  if (Cr(e)) return xr.get(e);
  throw new pi(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, yr, {
      value: xr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, yr, {
        value: xr,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, yr, {
          value: xr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, yr, {
          value: xr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Er(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Dr(e) {
  let t = ir[Er(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Or(e, t) {
  let n = Dr(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function kr(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e);
}
function Ar(e) {
  switch (e) {
    case 1 / 0:
      return fr;
    case -1 / 0:
      return pr;
  }
  return e === e
    ? Object.is(e, -0)
      ? dr
      : N(0, M, e, M, M, M, M, M, M, M, M, M)
    : mr;
}
function jr(e) {
  return N(1, M, gr(e), M, M, M, M, M, M, M, M, M);
}
function Mr(e) {
  return N(3, M, `` + e, M, M, M, M, M, M, M, M, M);
}
function Nr(e) {
  return N(4, e, M, M, M, M, M, M, M, M, M, M);
}
function Pr(e, t) {
  let n = t.valueOf();
  return N(5, e, n === n ? t.toISOString() : ``, M, M, M, M, M, M, M, M, M);
}
function Fr(e, t) {
  return N(6, e, M, gr(t.source), t.flags, M, M, M, M, M, M, M);
}
function Ir(e, t) {
  return N(17, e, tr[t], M, M, M, M, M, M, M, M, M);
}
function Lr(e, t) {
  return N(18, e, gr(wr(t)), M, M, M, M, M, M, M, M, M);
}
function Rr(e, t, n) {
  return N(25, e, n, gr(t), M, M, M, M, M, M, M, M);
}
function zr(e, t, n) {
  return N(9, e, M, M, M, M, M, n, M, M, kr(t), M);
}
function Br(e, t) {
  return N(21, e, M, M, M, M, M, M, t, M, M, M);
}
function Vr(e, t, n) {
  return N(
    15,
    e,
    M,
    t.constructor.name,
    M,
    M,
    M,
    M,
    n,
    t.byteOffset,
    M,
    t.length,
  );
}
function Hr(e, t, n) {
  return N(
    16,
    e,
    M,
    t.constructor.name,
    M,
    M,
    M,
    M,
    n,
    t.byteOffset,
    M,
    t.length,
  );
}
function Ur(e, t, n) {
  return N(20, e, M, M, M, M, M, M, n, t.byteOffset, M, t.byteLength);
}
function Wr(e, t, n) {
  return N(13, e, Er(t), M, gr(t.message), n, M, M, M, M, M, M);
}
function Gr(e, t, n) {
  return N(14, e, Er(t), M, gr(t.message), n, M, M, M, M, M, M);
}
function Kr(e, t) {
  return N(7, e, M, M, M, M, M, t, M, M, M, M);
}
function qr(e, t) {
  return N(28, M, M, M, M, M, M, [e, t], M, M, M, M);
}
function Jr(e, t) {
  return N(30, M, M, M, M, M, M, [e, t], M, M, M, M);
}
function Yr(e, t, n) {
  return N(31, e, M, M, M, M, M, n, t, M, M, M);
}
function Xr(e, t) {
  return N(32, e, M, M, M, M, M, M, t, M, M, M);
}
function Zr(e, t) {
  return N(33, e, M, M, M, M, M, M, t, M, M, M);
}
function Qr(e, t) {
  return N(34, e, M, M, M, M, M, M, t, M, M, M);
}
function $r(e, t, n, r) {
  return N(35, e, n, M, M, M, M, t, M, M, M, r);
}
var { toString: ei } = Object.prototype,
  ti = { parsing: 1, serialization: 2, deserialization: 3 };
function ni(e) {
  return `Seroval Error (step: ${ti[e]})`;
}
var ri = (e, t) => ni(e),
  ii = class extends Error {
    constructor(e, t) {
      (super(ri(e, t)), (this.cause = t));
    }
  },
  ai = class extends ii {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  oi = class extends ii {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function si(e) {
  return `Seroval Error (specific: ${e})`;
}
var ci = class extends Error {
    constructor(e) {
      (super(si(1)), (this.value = e));
    }
  },
  li = class extends Error {
    constructor(e) {
      super(si(2));
    }
  },
  ui = class extends Error {
    constructor(e) {
      super(si(3));
    }
  },
  di = class extends Error {
    constructor(e) {
      super(si(4));
    }
  },
  fi = class extends Error {
    constructor(e) {
      (super(si(5)), (this.value = e));
    }
  },
  pi = class extends Error {
    constructor(e) {
      super(si(6));
    }
  },
  mi = class extends Error {
    constructor(e) {
      super(si(7));
    }
  },
  hi = class extends Error {
    constructor(e) {
      super(si(8));
    }
  },
  gi = class extends Error {
    constructor(e) {
      super(si(9));
    }
  },
  _i = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  vi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  };
(vi.toString(),
  ((e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  }).toString(),
  ((e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  }).toString());
var yi = () => {
  let e = [],
    t = [],
    n = !0,
    r = !1,
    i = 0,
    a = (e, n, r) => {
      for (r = 0; r < i; r++) t[r] && t[r][n](e);
    },
    o = (t, i, a, o) => {
      for (i = 0, a = e.length; i < a; i++)
        ((o = e[i]),
          !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
    },
    s = (e, r) => (
      n && ((r = i++), (t[r] = e)),
      o(e),
      () => {
        n && ((t[r] = t[i]), (t[i--] = void 0));
      }
    );
  return {
    __SEROVAL_STREAM__: !0,
    on: (e) => s(e),
    next: (t) => {
      n && (e.push(t), a(t, `next`));
    },
    throw: (i) => {
      n && (e.push(i), a(i, `throw`), (n = !1), (r = !1), (t.length = 0));
    },
    return: (i) => {
      n && (e.push(i), a(i, `return`), (n = !1), (r = !0), (t.length = 0));
    },
  };
};
yi.toString();
var bi = (e) => (t) => () => {
  let n = 0,
    r = {
      [e]: () => r,
      next: () => {
        if (n > t.d) return { done: !0, value: void 0 };
        let e = n++,
          r = t.v[e];
        if (e === t.t) throw r;
        return { done: e === t.d, value: r };
      },
    };
  return r;
};
bi.toString();
var xi = (e, t) => (n) => () => {
  let r = 0,
    i = -1,
    a = !1,
    o = [],
    s = [],
    c = (e = 0, t = s.length) => {
      for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
    };
  n.on({
    next: (e) => {
      let t = s.shift();
      (t && t.s({ done: !1, value: e }), o.push(e));
    },
    throw: (e) => {
      let t = s.shift();
      (t && t.f(e), c(), (i = o.length), (a = !0), o.push(e));
    },
    return: (e) => {
      let t = s.shift();
      (t && t.s({ done: !0, value: e }), c(), (i = o.length), o.push(e));
    },
  });
  let l = {
    [e]: () => l,
    next: () => {
      if (i === -1) {
        let e = r++;
        if (e >= o.length) {
          let e = t();
          return (s.push(e), e.p);
        }
        return { done: !1, value: o[e] };
      }
      if (r > i) return { done: !0, value: void 0 };
      let e = r++,
        n = o[e];
      if (e !== i) return { done: !1, value: n };
      if (a) throw n;
      return { done: !0, value: n };
    },
  };
  return l;
};
xi.toString();
var Si = (e) => {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
};
Si.toString();
function Ci(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function wi(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function Ti(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Gn]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return wi(t, n, r);
}
var Ei = bi(Gn);
function Di(e) {
  return Ei(e);
}
var Oi = {},
  ki = {},
  Ai = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function ji(e) {
  return `__SEROVAL_STREAM__` in e;
}
function Mi() {
  return yi();
}
function Ni(e) {
  let t = Mi(),
    n = e[Hn]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Pi = xi(Hn, vi);
function Fi(e) {
  return Pi(e);
}
async function Ii(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Li(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function Ri(e, t) {
  e.marked.add(t);
}
function zi(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function P(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: zi(e, t) }
    : (Ri(e, n), { type: 1, value: Nr(n) });
}
function F(e, t) {
  let n = P(e, t);
  return n.type === 1 ? n : Sr(t) ? { type: 2, value: Lr(n.value, t) } : n;
}
function Bi(e, t) {
  let n = F(e, t);
  if (n.type !== 0) return n.value;
  if (t in tr) return Ir(n.value, t);
  throw new ci(t);
}
function Vi(e, t) {
  let n = P(e, Ai[t]);
  return n.type === 1 ? n.value : N(26, n.value, t, M, M, M, M, M, M, M, M, M);
}
function Hi(e) {
  let t = P(e, Oi);
  return t.type === 1
    ? t.value
    : N(27, t.value, M, M, M, M, M, M, Bi(e, Gn), M, M, M);
}
function Ui(e) {
  let t = P(e, ki);
  return t.type === 1
    ? t.value
    : N(29, t.value, M, M, M, M, M, [Vi(e, 1), Bi(e, Hn)], M, M, M, M);
}
function Wi(e, t, n, r) {
  return N(n ? 11 : 10, e, M, M, M, r, M, M, M, M, kr(t), M);
}
function Gi(e, t, n, r) {
  return N(8, t, M, M, M, M, { k: n, v: r }, M, Vi(e, 0), M, M, M);
}
function Ki(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return N(19, t, gr(btoa(i)), M, M, M, M, M, Vi(e, 5), M, M, M);
}
function qi(e, t) {
  return { base: Li(e, t), child: void 0 };
}
var Ji = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return ma(this._p, this.depth, e);
  }
};
async function Yi(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await ma(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Xi(e, t, n, r) {
  return zr(n, r, await Yi(e, t, r));
}
async function Zi(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    (i.push(gr(r[n][0])), a.push(await ma(e, t, r[n][1])));
  return (
    Gn in n &&
      (i.push(Bi(e.base, Gn)), a.push(qr(Hi(e.base), await ma(e, t, Ti(n))))),
    Hn in n &&
      (i.push(Bi(e.base, Hn)), a.push(Jr(Ui(e.base), await ma(e, t, Ni(n))))),
    $n in n && (i.push(Bi(e.base, $n)), a.push(jr(n[$n]))),
    Wn in n && (i.push(Bi(e.base, Wn)), a.push(n[Wn] ? sr : cr)),
    { k: i, v: a }
  );
}
async function Qi(e, t, n, r, i) {
  return Wi(n, r, i, await Zi(e, t, r));
}
async function $i(e, t, n, r) {
  return Br(n, await ma(e, t, r.valueOf()));
}
async function ea(e, t, n, r) {
  return Vr(n, r, await ma(e, t, r.buffer));
}
async function ta(e, t, n, r) {
  return Hr(n, r, await ma(e, t, r.buffer));
}
async function na(e, t, n, r) {
  return Ur(n, r, await ma(e, t, r.buffer));
}
async function ra(e, t, n, r) {
  let i = Or(r, e.base.features);
  return Wr(n, r, i ? await Zi(e, t, i) : M);
}
async function ia(e, t, n, r) {
  let i = Or(r, e.base.features);
  return Gr(n, r, i ? await Zi(e, t, i) : M);
}
async function aa(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    (i.push(await ma(e, t, n)), a.push(await ma(e, t, o)));
  return Gi(e.base, n, i, a);
}
async function oa(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await ma(e, t, n));
  return Kr(n, i);
}
async function sa(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return Rr(n, o.tag, await o.parse.async(r, new Ji(e, t), { id: n }));
    }
  return M;
}
async function ca(e, t, n, r) {
  let [i, a] = await Ii(r);
  return N(12, n, i, M, M, M, M, M, await ma(e, t, a), M, M, M);
}
function la(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (Ri(this.base, t),
          ma(this, e, n).then(
            (e) => {
              a.push(Xr(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (Ri(this.base, t),
          ma(this, e, n).then(
            (e) => {
              (a.push(Zr(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (Ri(this.base, t),
          ma(this, e, n).then(
            (e) => {
              (a.push(Qr(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function ua(e, t, n, r) {
  return Yr(n, Vi(e.base, 4), await new Promise(la.bind(e, t, n, r)));
}
async function da(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await ma(e, t, r.v[n]);
  return $r(n, i, r.t, r.d);
}
async function fa(e, t, n, r) {
  if (Array.isArray(r)) return Xi(e, t, n, r);
  if (ji(r)) return ua(e, t, n, r);
  if (Ci(r)) return da(e, t, n, r);
  let i = r.constructor;
  if (i === _i) return ma(e, t, r.replacement);
  let a = await sa(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return Qi(e, t, n, r, !1);
    case M:
      return Qi(e, t, n, r, !0);
    case Date:
      return Pr(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ra(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return $i(e, t, n, r);
    case ArrayBuffer:
      return Ki(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return ea(e, t, n, r);
    case DataView:
      return na(e, t, n, r);
    case Map:
      return aa(e, t, n, r);
    case Set:
      return oa(e, t, n, r);
    default:
      break;
  }
  if (i === Promise || r instanceof Promise) return ca(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return Fr(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return ta(e, t, n, r);
      default:
        break;
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return ia(e, t, n, r);
  if (r instanceof Error) return ra(e, t, n, r);
  if (Gn in r || Hn in r) return Qi(e, t, n, r, !!i);
  throw new ci(r);
}
async function pa(e, t, n) {
  let r = F(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await sa(e, t, r.value, n);
  if (i) return i;
  throw new ci(n);
}
async function ma(e, t, n) {
  if (t >= e.base.depthLimit) throw new gi(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? sr : cr;
    case `undefined`:
      return lr;
    case `string`:
      return jr(n);
    case `number`:
      return Ar(n);
    case `bigint`:
      return Mr(n);
    case `object`:
      if (n) {
        let r = F(e.base, n);
        return r.type === 0 ? await fa(e, t + 1, r.value, n) : r.value;
      }
      return ur;
    case `symbol`:
      return Bi(e.base, n);
    case `function`:
      return pa(e, t, n);
    default:
      throw new ci(n);
  }
}
async function ha(e, t) {
  try {
    return await ma(e, 0, t);
  } catch (e) {
    throw e instanceof ai ? e : new ai(e);
  }
}
var ga = ((e) => (
  (e[(e.Vanilla = 1)] = `Vanilla`),
  (e[(e.Cross = 2)] = `Cross`),
  e
))(ga || {});
function _a(e) {
  return e;
}
function va(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && va(e, r.extends));
  }
}
function ya(e) {
  if (e) {
    let t = new Set();
    return (va(t, e), [...t]);
  }
}
function ba(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new mi(e);
  }
}
function xa(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Sa(e) {
  switch (e) {
    case Hn:
    case Wn:
    case $n:
    case Gn:
      return !0;
    default:
      return !1;
  }
}
var Ca = 1e6,
  wa = 1e4,
  Ta = 2e4;
function Ea(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Da = 1e3;
function Oa(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 63 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Da,
    }
  );
}
function ka(e) {
  return { mode: 2, base: Oa(2, e), child: M };
}
var Aa = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return I(this._p, this.depth, e);
  }
};
function ja(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new hi({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Ma(e, t, n) {
  return (ja(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function Na(e, t, n) {
  return (ja(e.base, t), e.base.refs.set(t, n), n);
}
function Pa(e, t, n) {
  return e.mode === 1 ? Ma(e, t, n) : Na(e, t, n);
}
function Fa(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new hi(e);
}
function Ia(e, t) {
  return Pa(e, t.i, Tr(vr(t.s)));
}
function La(e, t, n) {
  let r = n.a,
    i = r.length,
    a = Pa(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = I(e, t, o)));
  return (Ea(a, n.o), a);
}
function Ra(e, t, n) {
  xa(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function za(e, t, n, r, i) {
  if (typeof r == `string`) Ra(n, vr(r), I(e, t, i));
  else {
    let a = I(e, t, r);
    switch (typeof a) {
      case `string`:
        Ra(n, a, I(e, t, i));
        break;
      case `symbol`:
        Sa(a) && (n[a] = I(e, t, i));
        break;
      default:
        throw new hi(r);
    }
  }
}
function Ba(e, t, n) {
  e.base.refs.types.set(t, n);
}
function Va(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new hi(t);
}
function Ha(e, t, n, r) {
  let i = n.k;
  if (i.length > 0)
    for (let a = 0, o = n.v, s = i.length; a < s; a++) za(e, t, r, i[a], o[a]);
  return r;
}
function Ua(e, t, n) {
  let r = Pa(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (Ha(e, t, n.p, r), Ea(r, n.o), r);
}
function Wa(e, t) {
  return Pa(e, t.i, new Date(t.s));
}
function Ga(e, t) {
  if (e.base.features & 32) {
    let n = vr(t.c);
    if (n.length > Ta) throw new hi(t);
    return Pa(e, t.i, new RegExp(n, t.m));
  }
  throw new li(t);
}
function Ka(e, t, n) {
  let r = Pa(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(I(e, t, a[i]));
  return r;
}
function qa(e, t, n) {
  let r = Pa(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(I(e, t, a[i]), I(e, t, o[i]));
  return r;
}
function Ja(e, t) {
  if (t.s.length > Ca) throw new hi(t);
  return Pa(e, t.i, Si(vr(t.s)));
}
function Ya(e, t, n) {
  let r = ba(n.c),
    i = I(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new hi(n);
  return Pa(e, n.i, new r(i, a, n.l));
}
function Xa(e, t, n) {
  let r = I(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new hi(n);
  return Pa(e, n.i, new DataView(r, i, n.l));
}
function Za(e, t, n, r) {
  if (n.p) {
    let i = Ha(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function Qa(e, t, n) {
  return Za(e, t, n, Pa(e, n.i, AggregateError([], vr(n.m))));
}
function $a(e, t, n) {
  let r = Fa(n, ar, n.s);
  return Za(e, t, n, Pa(e, n.i, new r(vr(n.m))));
}
function eo(e, t, n) {
  let r = vi(),
    i = Pa(e, n.i, r.p),
    a = I(e, t, n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function to(e, t, n) {
  return Pa(e, n.i, Object(I(e, t, n.f)));
}
function no(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = vr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return Pa(e, n.i, o.deserialize(n.s, new Aa(e, t), { id: n.i }));
    }
  }
  throw new ui(n.c);
}
function ro(e, t) {
  let n = Pa(e, t.i, Pa(e, t.s, vi()).p);
  return (Ba(e, t.s, 22), n);
}
function io(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 22), r.s(I(e, t, n.a[1])), M);
  throw new di(`Promise`);
}
function ao(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 22), r.f(I(e, t, n.a[1])), M);
  throw new di(`Promise`);
}
function oo(e, t, n) {
  return (I(e, t, n.a[0]), Di(I(e, t, n.a[1])));
}
function so(e, t, n) {
  return (I(e, t, n.a[0]), Fi(I(e, t, n.a[1])));
}
function co(e, t, n) {
  let r = Pa(e, n.i, Mi());
  Ba(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) I(e, t, i[n]);
  return r;
}
function lo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.next(I(e, t, n.f)), M);
  throw new di(`Stream`);
}
function uo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.throw(I(e, t, n.f)), M);
  throw new di(`Stream`);
}
function fo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Va(e, n, n.i, 31), r.return(I(e, t, n.f)), M);
  throw new di(`Stream`);
}
function po(e, t, n) {
  return (I(e, t, n.f), M);
}
function mo(e, t, n) {
  return (I(e, t, n.a[1]), M);
}
function ho(e, t, n) {
  let r = Pa(e, n.i, wi([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = I(e, t, n.a[i]);
  return r;
}
function I(e, t, n) {
  if (t > e.base.depthLimit) throw new gi(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return Fa(n, rr, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return vr(String(n.s));
    case 3:
      if (String(n.s).length > wa) throw new hi(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return Ia(e, n);
    case 9:
      return La(e, t, n);
    case 10:
    case 11:
      return Ua(e, t, n);
    case 5:
      return Wa(e, n);
    case 6:
      return Ga(e, n);
    case 7:
      return Ka(e, t, n);
    case 8:
      return qa(e, t, n);
    case 19:
      return Ja(e, n);
    case 16:
    case 15:
      return Ya(e, t, n);
    case 20:
      return Xa(e, t, n);
    case 14:
      return Qa(e, t, n);
    case 13:
      return $a(e, t, n);
    case 12:
      return eo(e, t, n);
    case 17:
      return Fa(n, nr, n.s);
    case 21:
      return to(e, t, n);
    case 25:
      return no(e, t, n);
    case 22:
      return ro(e, n);
    case 23:
      return io(e, t, n);
    case 24:
      return ao(e, t, n);
    case 28:
      return oo(e, t, n);
    case 30:
      return so(e, t, n);
    case 31:
      return co(e, t, n);
    case 32:
      return lo(e, t, n);
    case 33:
      return uo(e, t, n);
    case 34:
      return fo(e, t, n);
    case 27:
      return po(e, t, n);
    case 29:
      return mo(e, t, n);
    case 35:
      return ho(e, t, n);
    default:
      throw new li(n);
  }
}
function go(e, t) {
  try {
    return I(e, 0, t);
  } catch (e) {
    throw new oi(e);
  }
}
var _o = (() => T).toString();
/=>/.test(_o);
function L(e, t) {
  return go(
    ka({
      plugins: ya(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function R(e, t = {}) {
  let n = qi(1, {
    plugins: ya(t.plugins),
    disabledFeatures: t.disabledFeatures,
  });
  return {
    t: await ha(n, e),
    f: n.base.features,
    m: Array.from(n.base.marked),
  };
}
function vo(e) {
  return e;
}
function yo(e) {
  return _a({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var bo = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  xo = globalThis.Buffer,
  So = !!xo && typeof xo.from == `function`;
function Co(e) {
  if (e.length === 0) return ``;
  if (So) return xo.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function wo(e) {
  if (e.length === 0) return new Uint8Array();
  if (So) {
    let t = xo.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var To = Object.create(null),
  z = Object.create(null),
  Eo = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(wo(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Do = new TextEncoder(),
  Oo = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string`
                ? t.enqueue(Do.encode(e))
                : t.enqueue(wo(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  ko = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  Ao = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function jo(e) {
  let t = Mi(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Co(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Mo(e) {
  let t = Mi(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Co(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var No = _a({
  tag: `tss/RawStream`,
  extends: [
    _a({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === To;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return ko;
      },
      deserialize(e, t, n) {
        return To;
      },
    }),
    _a({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === z;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ao;
      },
      deserialize(e, t, n) {
        return z;
      },
    }),
  ],
  test(e) {
    return e instanceof bo;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? z : To;
      return {
        hint: t.parse(e.hint),
        factory: t.parse(r),
        stream: t.parse(Mi()),
      };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? z : To,
        i = e.hint === `text` ? Mo(e.stream) : jo(e.stream);
      return {
        hint: await t.parse(e.hint),
        factory: await t.parse(r),
        stream: await t.parse(i),
      };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? z : To,
        i = e.hint === `text` ? Mo(e.stream) : jo(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? Oo(r) : Eo(r);
  },
});
function Po(e) {
  return _a({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(
        typeof n?.deserialize == `function`
          ? n.deserialize(t.streamId)
          : t.streamId,
      );
    },
  });
}
var Fo = _a({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Io = {},
  Lo = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (e) => {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw: (e) => {
            t.error(e);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ro = _a({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Io;
    },
    parse: {
      sync() {
        return Io;
      },
      async async() {
        return await Promise.resolve(Io);
      },
      stream() {
        return Io;
      },
    },
    serialize() {
      return Lo.toString();
    },
    deserialize() {
      return Io;
    },
  });
async function zo(e, t) {
  try {
    let n = await t.read();
    n.done
      ? (e.return(n.value), t.releaseLock())
      : (e.next(n.value), await zo(e, t));
  } catch (t) {
    e.throw(t);
  }
}
function Bo(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function Vo(e) {
  let t = Mi(),
    n = e.getReader(),
    r = Bo.bind(null, n);
  return (zo(t, n).catch(r), [t, r]);
}
var Ho = [
  Fo,
  No,
  _a({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [Ro],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(Io), stream: t.parse(Mi()) };
      },
      async async(e, t) {
        return { factory: await t.parse(Io), stream: await t.parse(Vo(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = Vo(e);
        return (t.addCleanup(r), { factory: t.parse(Io), stream: t.parse(n) });
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return Lo(t.deserialize(e.stream));
    },
  }),
];
function Uo() {
  return [...(C()?.serializationAdapters?.map(yo) ?? []), ...Ho];
}
var Wo = new TextDecoder(),
  Go = new Uint8Array(),
  Ko = 16 * 1024 * 1024,
  qo = 32 * 1024 * 1024,
  Jo = 1024,
  Yo = 1e5;
function Xo(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= Jo)
      throw Error(`Too many raw streams in framed response (max ${Jo})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return Go;
        let t = c[0];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return (
            t.length === e ? c.shift() : (c[0] = t.subarray(e)),
            (l -= e),
            n
          );
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && c.length > 0;) {
          let e = c[0];
          if (!e) break;
          let t = Math.min(e.length, i);
          (n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? c.shift() : (c[0] = e.subarray(t)));
        }
        return ((l -= e), n);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > qo)
              throw Error(`Framed response buffer exceeded ${qo} bytes`);
            for (c.push(a), l += a.length; ;) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== b.JSON && n !== b.CHUNK && n !== b.END && n !== b.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === b.JSON) {
                if (i !== 0)
                  throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0)
                throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > Ko)
                throw Error(`Frame payload too large: ${a} bytes (max ${Ko})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > Yo)
                throw Error(`Too many frames in framed response (max ${Yo})`);
              f(9);
              let p = f(a);
              switch (n) {
                case b.JSON:
                  try {
                    s.enqueue(Wo.decode(p));
                  } catch {}
                  break;
                case b.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case b.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case b.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = Wo.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var Zo = null;
async function Qo(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var $o = Object.prototype.hasOwnProperty;
function es(e) {
  for (let t in e) if ($o.call(e, t)) return !0;
  return !1;
}
async function ts(e, t, n) {
  Zo ||= Uo();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` &&
      o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`)
      throw Error(`FormData is not supported with GET requests`);
    let t = await ns(r);
    if (t !== void 0) {
      let n = St({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await is(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await as(async () =>
    i(e, { method: r.method, headers: o, signal: r.signal, body: s }),
  );
}
async function ns(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && es(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return rs(n);
}
async function rs(e) {
  return JSON.stringify(await Promise.resolve(R(e, { plugins: Zo })));
}
async function is(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && es(e.context) && (t = await rs(e.context)),
      t !== void 0 && e.data.set(_, t),
      { body: e.data }
    );
  }
  let t = await ns(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function as(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || Se(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((S(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = Xo(t.body),
        a = [Po(r), ...(Zo || [])],
        o = new Map();
      e = await os({
        jsonStream: i,
        onMessage: (e) => L(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = L(n, { plugins: Zo });
      } finally {
      }
      await Qo(r);
    }
    if ((e || Se(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = Mt(e);
    if (n) throw n;
    if (st(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function os({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await Qo(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await Qo(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function ss(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = C()?.serverFns?.fetch;
      return ts(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [v]: !0 },
  );
}
var cs = vo({
  key: `$TSS/serverfn`,
  test: (e) => (typeof e != `function` || !(v in e) ? !1 : !!e[v]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => ss(e),
});
function ls(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function us(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function ds(e) {
  window.$_TSR || Se();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Se());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = ls(e.i);
  }),
    (n.lastMatchId &&= ls(n.lastMatchId)));
  let { manifest: r, dehydratedData: i, lastMatchId: a } = n;
  e.ssr = { manifest: r };
  let o = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: o }), await e.options.hydrate?.(i));
  let s = e.matchRoutes(e.stores.location.get()),
    c = Promise.all(
      s.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId])),
    );
  function l(t) {
    let n =
      e.looseRoutesById[t.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (n) {
      let r = fe();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => (
                (e._nonReactive.minPendingPromise = void 0),
                { ...e, _forcePending: void 0 }
              ),
            ));
        }, n));
    }
  }
  function u(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let d;
  (s.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), u(e));
      return;
    }
    (us(e, t),
      u(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) &&
        d === void 0 &&
        ((d = e.index), l(e)));
  }),
    e.stores.setMatches(s));
  let f = e.stores.matches.get(),
    p = e.stores.location.get();
  await Promise.all(
    f.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = f[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: p,
            navigate: (t) => e.navigate({ ...t, _fromLocation: p }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: s,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: f,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (st(e))
          ((t.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${t.routeId}`,
              e,
            ));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    }),
  );
  let m = s[s.length - 1].id !== a;
  if (!s.some((e) => e.ssr === !1) && !m)
    return (
      s.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      c
    );
  let h = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (m) {
    let t = s[1];
    (t || Se(),
      l(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = h),
      h.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return c;
}
var B = c(u(), 1),
  fs = B.use,
  ps = typeof window < `u` ? B.useLayoutEffect : B.useEffect;
function ms(e) {
  let t = B.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function hs(e, t, n = {}, r = {}) {
  B.useEffect(() => {
    if (!e.current || r.disabled || typeof IntersectionObserver != `function`)
      return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, n, r.disabled, e]);
}
function gs(e) {
  let t = B.useRef(null);
  return (B.useImperativeHandle(e, () => t.current, []), t);
}
var _s = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  vs = o((e, t) => {
    t.exports = _s();
  }),
  V = vs();
function ys({ promise: e }) {
  if (fs) return fs(e);
  let t = jn(e);
  if (t[An].status === `pending`) throw t;
  if (t[An].status === `error`) throw t[An].error;
  return t[An].data;
}
function bs(e) {
  let t = (0, V.jsx)(xs, { ...e });
  return e.fallback
    ? (0, V.jsx)(B.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function xs(e) {
  let t = ys(e);
  return e.children(t);
}
function Ss(e) {
  let t = e.errorComponent ?? ws;
  return (0, V.jsx)(Cs, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? B.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var Cs = class extends B.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: null }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function ws({ error: e }) {
  let [t, n] = B.useState(!1);
  return (0, V.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, V.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, V.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, V.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, V.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, V.jsx)(`div`, {
            children: (0, V.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message
                ? (0, V.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function Ts({ children: e, fallback: t = null }) {
  return Es()
    ? (0, V.jsx)(B.Fragment, { children: e })
    : (0, V.jsx)(B.Fragment, { children: t });
}
function Es() {
  return B.useSyncExternalStore(
    Ds,
    () => !0,
    () => !1,
  );
}
function Ds() {
  return () => {};
}
var Os = B.createContext(null);
function ks(e) {
  return B.useContext(Os);
}
var As = B.createContext(void 0),
  js = B.createContext(void 0),
  Ms = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(Ms || {});
function Ns({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function Ps(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var Fs = [],
  Is = 0,
  {
    link: Ls,
    unlink: Rs,
    propagate: zs,
    checkDirty: Bs,
    shallowPropagate: Vs,
  } = Ns({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Fs[Us++] = e), (e.flags &= ~Ms.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = Ms.Mutable | Ms.Dirty), qs(e));
    },
  }),
  Hs = 0,
  Us = 0,
  Ws,
  Gs = 0;
function Ks(e) {
  try {
    (++Gs, e());
  } finally {
    --Gs || Js();
  }
}
function qs(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = Rs(n, e);
}
function Js() {
  if (!(Gs > 0)) {
    for (; Hs < Us;) {
      let e = Fs[Hs];
      ((Fs[Hs++] = void 0), e.notify());
    }
    ((Hs = 0), (Us = 0));
  }
}
function Ys(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? Ms.None : Ms.Mutable,
      get() {
        return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
      },
      subscribe(e) {
        let t = Ps(e),
          n = { current: !1 },
          r = Xs(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = Ws,
          o = t?.compare ?? Object.is;
        if (n) ((Ws = i), ++Is, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = Ms.Mutable | Ms.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((Ws = a), n && (i.flags &= ~Ms.RecursedCheck), qs(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = Ms.Mutable | Ms.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & Ms.Dirty || (e & Ms.Pending && Bs(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && Vs(e);
            }
          } else e & Ms.Pending && (i.flags = e & ~Ms.Pending);
          return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (zs(e), Vs(e), Js());
          }
        }),
    i
  );
}
function Xs(e) {
  let t = () => {
      let t = Ws;
      ((Ws = n),
        ++Is,
        (n.depsTail = void 0),
        (n.flags = Ms.Watching | Ms.RecursedCheck));
      try {
        return e();
      } finally {
        ((Ws = t), (n.flags &= ~Ms.RecursedCheck), qs(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Ms.Watching | Ms.RecursedCheck,
      notify() {
        let e = this.flags;
        e & Ms.Dirty || (e & Ms.Pending && Bs(this.deps, this))
          ? t()
          : (this.flags = Ms.Watching);
      },
      stop() {
        ((this.flags = Ms.None), (this.depsTail = void 0), qs(this));
      },
    };
  return (t(), n);
}
var Zs = o((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            ((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Qs = o((e, t) => {
    t.exports = Zs();
  }),
  $s = o((e) => {
    var t = u(),
      n = Qs();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, u],
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        l(p),
        p
      );
    };
  }),
  ec = o((e, t) => {
    t.exports = $s();
  })();
function tc(e, t) {
  return e === t;
}
function nc(e, t, n = tc) {
  let r = (0, B.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    i = (0, B.useCallback)(() => e?.get(), [e]);
  return (0, ec.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var rc = {
  get() {},
  subscribe() {
    return { unsubscribe() {} };
  },
};
function ic(e, t) {
  let n = B.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = ce(n.current, i))
      : i;
  };
}
function ac(e) {
  let t = ks(),
    n = B.useContext(e.from ? js : As),
    r = e.from
      ? t.stores.getRouteMatchStore(e.from)
      : t.stores.matchStores.get(n),
    i = ic(e, t),
    a = nc(r ?? rc, (e) => (e ? i(e) : rc));
  if (a !== rc) return a;
  (e.shouldThrow ?? !0) && Se();
}
function oc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function sc(e) {
  let { select: t, ...n } = e;
  return ac({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function cc(e) {
  return ac({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function lc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function uc(e) {
  let t = ks();
  return B.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t],
  );
}
function dc(e) {
  return ac({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var fc = m();
function pc(e, t) {
  let n = ks(),
    r = gs(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: _,
      disabled: v,
      style: y,
      className: b,
      onClick: x,
      onBlur: ee,
      onFocus: S,
      onMouseEnter: C,
      onMouseLeave: w,
      onTouchStart: te,
      ignoreBlocker: re,
      params: ie,
      search: ae,
      hash: oe,
      state: se,
      mask: ce,
      reloadDocument: le,
      unsafeRelative: ue,
      from: E,
      _fromLocation: D,
      ...fe
    } = e,
    pe = Es(),
    O = B.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    k = nc(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href,
    ),
    A = B.useMemo(() => {
      let e = { _fromLocation: k, ...O };
      return n.buildLocation(e);
    }, [n, k, O]),
    me = A.maskedLocation ? A.maskedLocation.publicHref : A.publicHref,
    j = A.maskedLocation ? A.maskedLocation.external : A.external,
    ge = B.useMemo(() => Sc(me, j, n.history, v), [v, j, me, n.history]),
    _e = B.useMemo(() => {
      if (ge?.external)
        return he(ge.href, n.protocolAllowlist) ? void 0 : ge.href;
      if (!Cc(s) && !(typeof s != `string` || s.indexOf(`:`) === -1))
        try {
          return (new URL(s), he(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, ge, n.protocolAllowlist]),
    ve = B.useMemo(() => {
      if (_e) return !1;
      if (o?.exact) {
        if (!et(k.pathname, A.pathname, n.basepath)) return !1;
      } else {
        let e = $e(k.pathname, n.basepath),
          t = $e(A.pathname, n.basepath);
        if (!(
          e.startsWith(t) &&
          (e.length === t.length || e[t.length] === `/`)
        ))
          return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !de(k.search, A.search, {
          partial: !o?.exact,
          ignoreUndefined: !o?.explicitUndefined,
        })
        ? !1
        : !o?.includeHash || (pe && k.hash === A.hash);
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      k,
      _e,
      pe,
      A.hash,
      A.pathname,
      A.search,
      n.basepath,
    ]),
    ye = ve ? (ne(i, {}) ?? hc) : mc,
    be = ve ? mc : (ne(a, {}) ?? mc),
    xe = [b, ye.className, be.className].filter(Boolean).join(` `),
    Se = (y || ye.style || be.style) && { ...y, ...ye.style, ...be.style },
    [Ce, we] = B.useState(!1),
    Te = B.useRef(!1),
    Ee = e.reloadDocument || _e ? !1 : (c ?? n.options.defaultPreload),
    De = l ?? n.options.defaultPreloadDelay ?? 0,
    Oe = B.useCallback(() => {
      n.preloadRoute({ ...O, _builtLocation: A }).catch((e) => {
        (console.warn(e), console.warn(Mn));
      });
    }, [n, O, A]);
  (hs(
    r,
    B.useCallback(
      (e) => {
        e?.isIntersecting && Oe();
      },
      [Oe],
    ),
    bc,
    { disabled: !!v || Ee !== `viewport` },
  ),
    B.useEffect(() => {
      Te.current || (!v && Ee === `render` && (Oe(), (Te.current = !0)));
    }, [v, Oe, Ee]));
  let ke = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = _ === void 0 ? t : _;
    if (
      !v &&
      !Tc(e) &&
      !e.defaultPrevented &&
      (!r || r === `_self`) &&
      e.button === 0
    ) {
      (e.preventDefault(),
        (0, fc.flushSync)(() => {
          we(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), we(!1));
      });
      n.navigate({
        ...O,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: re,
      });
    }
  };
  if (_e)
    return {
      ...fe,
      ref: r,
      href: _e,
      ...(g && { children: g }),
      ...(_ && { target: _ }),
      ...(v && { disabled: v }),
      ...(y && { style: y }),
      ...(b && { className: b }),
      ...(x && { onClick: x }),
      ...(ee && { onBlur: ee }),
      ...(S && { onFocus: S }),
      ...(C && { onMouseEnter: C }),
      ...(w && { onMouseLeave: w }),
      ...(te && { onTouchStart: te }),
    };
  let Ae = (e) => {
      if (v || Ee !== `intent`) return;
      if (!De) {
        Oe();
        return;
      }
      let t = e.currentTarget;
      if (yc.has(t)) return;
      let n = setTimeout(() => {
        (yc.delete(t), Oe());
      }, De);
      yc.set(t, n);
    },
    je = (e) => {
      v || Ee !== `intent` || Oe();
    },
    Me = (e) => {
      if (v || !Ee || !De) return;
      let t = e.currentTarget,
        n = yc.get(t);
      n && (clearTimeout(n), yc.delete(t));
    };
  return {
    ...fe,
    ...ye,
    ...be,
    href: ge?.href,
    ref: r,
    onClick: xc([x, ke]),
    onBlur: xc([ee, Me]),
    onFocus: xc([S, Ae]),
    onMouseEnter: xc([C, Ae]),
    onMouseLeave: xc([w, Me]),
    onTouchStart: xc([te, je]),
    disabled: !!v,
    target: _,
    ...(Se && { style: Se }),
    ...(xe && { className: xe }),
    ...(v && gc),
    ...(ve && _c),
    ...(pe && Ce && vc),
  };
}
var mc = {},
  hc = { className: `active` },
  gc = { role: `link`, "aria-disabled": !0 },
  _c = { "data-status": `active`, "aria-current": `page` },
  vc = { "data-transitioning": `transitioning` },
  yc = new WeakMap(),
  bc = { rootMargin: `100px` },
  xc = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function Sc(e, t, n, r) {
  if (!r)
    return t
      ? { href: e, external: !0 }
      : { href: n.createHref(e) || `/`, external: !1 };
}
function Cc(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var wc = B.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = pc(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return B.createElement(`a`, t, o);
  }
  return B.createElement(n, a, o);
});
function Tc(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Ec = class extends zn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = B.forwardRef((e, t) =>
        (0, V.jsx)(wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Dc(e) {
  return new Ec(e);
}
function Oc() {
  return (e) => Ac(e);
}
var kc = class extends Bn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = B.forwardRef((e, t) =>
        (0, V.jsx)(wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Ac(e) {
  return new kc(e);
}
function jc(e) {
  return new Mc(e, { silent: !0 }).createRoute;
}
var Mc = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = Dc(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function Nc(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            pe(i) &&
              i instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (fs) fs(o());
        else throw o();
      return B.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function Pc(e) {
  let t = ks(),
    n = `not-found-${nc(t.stores.location, (e) => e.pathname)}-${nc(t.stores.status, (e) => e)}`;
  return (0, V.jsx)(Ss, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (st(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (st(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function Fc() {
  return (0, V.jsx)(`p`, { children: `Not Found` });
}
function Ic(e) {
  return (0, V.jsx)(V.Fragment, { children: e.children });
}
function Lc(e, t, n) {
  return t.options.notFoundComponent
    ? (0, V.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, V.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, V.jsx)(Fc, {});
}
var Rc = (e, t) =>
    e.routeId === t.routeId && e._displayPending === t._displayPending,
  zc = (e, t) => e[0] === t[0] && e[1] === t[1],
  Bc = B.memo(function ({ matchId: e }) {
    let t = ks(),
      n = t.stores.matchStores.get(e);
    n || Se();
    let r = nc(t.stores.loadedAt, (e) => e),
      i = nc(n, (e) => e, Rc);
    return (0, V.jsx)(Vc, {
      router: t,
      matchId: e,
      resetKey: r,
      matchState: B.useMemo(() => {
        let e = i.routeId,
          n = t.routesById[e].parentRoute?.id;
        return {
          routeId: e,
          ssr: i.ssr,
          _displayPending: i._displayPending,
          parentRouteId: n,
        };
      }, [i._displayPending, i.routeId, i.ssr, t.routesById]),
    });
  });
function Vc({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, V.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    c = i.options.onCatch ?? e.options.defaultOnCatch,
    l = i.isRoot
      ? (i.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    u = r.ssr === !1 || r.ssr === `data-only`,
    d =
      (!i.isRoot || i.options.wrapInSuspense || u) &&
      (i.options.wrapInSuspense ??
        a ??
        (i.options.errorComponent?.preload || u))
        ? B.Suspense
        : Ic,
    f = s ? Ss : Ic,
    p = l ? Pc : Ic;
  return (0, V.jsxs)(i.isRoot ? (i.options.shellComponent ?? Ic) : Ic, {
    children: [
      (0, V.jsx)(As.Provider, {
        value: t,
        children: (0, V.jsx)(d, {
          fallback: o,
          children: (0, V.jsx)(f, {
            getResetKey: () => n,
            errorComponent: s || ws,
            onCatch: (e, t) => {
              if (st(e)) throw ((e.routeId ??= r.routeId), e);
              c?.(e, t);
            },
            children: (0, V.jsx)(p, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !l ||
                    (e.routeId && e.routeId !== r.routeId) ||
                    (!e.routeId && !i.isRoot))
                )
                  throw e;
                return B.createElement(l, e);
              },
              children:
                u || r._displayPending
                  ? (0, V.jsx)(Ts, {
                      fallback: o,
                      children: (0, V.jsx)(Uc, { matchId: t }),
                    })
                  : (0, V.jsx)(Uc, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsx)(Hc, {}), (e.options.scrollRestoration, null)],
          })
        : null,
    ],
  });
}
function Hc() {
  let e = ks(),
    t = B.useRef();
  return (
    ps(() => {
      let n = e.stores.resolvedLocation.get(),
        r = t.current;
      (n &&
        (!r || r.href !== n.href) &&
        e.emit({ type: `onRendered`, ...yn(e.stores.location.get(), r ?? n) }),
        (t.current = n));
    }, [nc(e.stores.resolvedLocation, (e) => e?.state.__TSR_key), e]),
    null
  );
}
var Uc = B.memo(function ({ matchId: e }) {
    let t = ks(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      r = t.stores.matchStores.get(e);
    r || Se();
    let i = nc(r, (e) => e),
      a = i.routeId,
      o = t.routesById[a],
      s = B.useMemo(() => {
        let e = (
          t.routesById[a].options.remountDeps ?? t.options.defaultRemountDeps
        )?.({
          routeId: a,
          loaderDeps: i.loaderDeps,
          params: i._strictParams,
          search: i._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        a,
        i.loaderDeps,
        i._strictParams,
        i._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      c = B.useMemo(() => {
        let e = o.options.component ?? t.options.defaultComponent;
        return e ? (0, V.jsx)(e, {}, s) : (0, V.jsx)(Wc, {});
      }, [s, o.options.component, t.options.defaultComponent]);
    if (i._displayPending) throw n(i, `displayPendingPromise`);
    if (i._forcePending) throw n(i, `minPendingPromise`);
    if (i.status === `pending`) {
      let e = o.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(i.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = fe();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(i, `loadPromise`);
    }
    if (i.status === `notFound`)
      return (st(i.error) || Se(), Lc(t, o, i.error));
    if (i.status === `redirected`)
      throw (jt(i.error) || Se(), n(i, `loadPromise`));
    if (i.status === `error`) throw i.error;
    return c;
  }),
  Wc = B.memo(function () {
    let e = ks(),
      t = B.useContext(As),
      n,
      r = !1,
      i;
    {
      let a = t ? e.stores.matchStores.get(t) : void 0;
      (([n, r] = nc(a, (e) => [e?.routeId, e?.globalNotFound ?? !1], zc)),
        (i = nc(
          e.stores.matchesId,
          (e) => e[e.findIndex((e) => e === t) + 1],
        )));
    }
    let a = n ? e.routesById[n] : void 0,
      o = e.options.defaultPendingComponent
        ? (0, V.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (r) return (a || Se(), Lc(e, a, void 0));
    if (!i) return null;
    let s = (0, V.jsx)(Bc, { matchId: i });
    return n === `__root__`
      ? (0, V.jsx)(B.Suspense, { fallback: o, children: s })
      : s;
  });
function Gc() {
  let e = ks(),
    t = B.useRef({ router: e, mounted: !1 }),
    [n, r] = B.useState(!1),
    i = nc(e.stores.isLoading, (e) => e),
    a = nc(e.stores.hasPending, (e) => e),
    o = ms(i),
    s = i || n || a,
    c = ms(s),
    l = i || a,
    u = ms(l);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        B.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    B.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Ze(e.latestLocation.publicHref) !== Ze(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    ps(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    ps(() => {
      o &&
        !i &&
        e.emit({
          type: `onLoad`,
          ...yn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [o, e, i]),
    ps(() => {
      u &&
        !l &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...yn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, u, e]),
    ps(() => {
      if (c && !s) {
        let t = yn(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          Ks(() => {
            (e.stores.status.set(`idle`),
              e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [s, c, e]),
    null
  );
}
function Kc() {
  let e = ks(),
    t =
      e.routesById.__root__.options.pendingComponent ??
      e.options.defaultPendingComponent,
    n = t ? (0, V.jsx)(t, {}) : null,
    r = (0, V.jsxs)(typeof document < `u` && e.ssr ? Ic : B.Suspense, {
      fallback: n,
      children: [(0, V.jsx)(Gc, {}), (0, V.jsx)(qc, {})],
    });
  return e.options.InnerWrap
    ? (0, V.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function qc() {
  let e = ks(),
    t = nc(e.stores.firstId, (e) => e),
    n = nc(e.stores.loadedAt, (e) => e),
    r = t ? (0, V.jsx)(Bc, { matchId: t }) : null;
  return (0, V.jsx)(As.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, V.jsx)(Ss, {
          getResetKey: () => n,
          errorComponent: ws,
          onCatch: void 0,
          children: r,
        }),
  });
}
var Jc = (e) => ({
    createMutableStore: Ys,
    createReadonlyStore: Ys,
    batch: Ks,
  }),
  Yc = (e) => new Xc(e),
  Xc = class extends bn {
    constructor(e) {
      super(e, Jc);
    }
  };
function Zc({ router: e, children: t, ...n }) {
  ae(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let r = (0, V.jsx)(Os.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, V.jsx)(e.options.Wrap, { children: r }) : r;
}
function Qc({ router: e, ...t }) {
  return (0, V.jsx)(Zc, { router: e, ...t, children: (0, V.jsx)(Kc, {}) });
}
function $c(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function el(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, V.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, V.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, V.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, V.jsx)(`style`, {
          ...t,
          dangerouslySetInnerHTML: { __html: n },
          nonce: r,
        })
      );
    case `script`:
      return (0, V.jsx)(tl, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function tl({ attrs: e, children: t, preventScriptHoist: n }) {
  ks();
  let r = Es(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (B.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`))
            if (e.src === t) return;
          let n = document.createElement(`script`);
          return ($c(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            $c(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, V.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src)
      return (0, V.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, V.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var nl = (e) => {
  let t = ks(),
    n = t.options.ssr?.nonce,
    r = nc(
      t.stores.matches,
      (e) => e.map((e) => e.meta).filter((e) => e !== void 0),
      de,
    ),
    i = B.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({
                  tag: `script`,
                  attrs: { type: `application/ld+json` },
                  children: ve(t),
                });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n &&
          e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    a = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      de,
    ),
    o = nc(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = Rn(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: Nn(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      de,
    ),
    s = nc(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...Fn(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      de,
    ),
    c = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      de,
    ),
    l = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      de,
    ),
    u = [];
  return (
    Ln(u, i),
    u.push(...s),
    Ln(u, a),
    u.push(...o),
    Ln(u, c),
    Ln(u, l),
    u
  );
};
function rl(e) {
  let t = nl(e.assetCrossOrigin),
    n = ks().options.ssr?.nonce;
  return (0, V.jsx)(V.Fragment, {
    children: t.map((e) =>
      (0, B.createElement)(el, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      }),
    ),
  });
}
var il = () => {
  let e = ks(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string`
                ? { preventScriptHoist: !0 }
                : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = nc(e.stores.matches, n, de);
  return al(e, nc(e.stores.matches, r, de), i);
};
function al(e, t, n) {
  let r = [...t, ...n];
  return (0, V.jsx)(V.Fragment, {
    children: r.map((e, t) =>
      (0, B.createElement)(el, { ...e, key: `tsr-scripts-${e.tag}-${t}` }),
    ),
  });
}
var ol = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => ol({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => ol({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => ol({}, Object.assign(n, { client: e })),
    server: (e) => ol({}, Object.assign(n, { server: e })),
  };
};
function sl(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && sl(e, r.extends));
  }
}
var cl = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (sl(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: ol,
  }),
  ll = ol(),
  ul = void 0,
  dl = cl(() => ({ requestMiddleware: [ll, ul] })),
  H = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  fl = new (class extends H {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  pl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  ml = new (class {
    #e = pl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function hl(e) {
  setTimeout(e, 0);
}
var gl = typeof window > `u` || `Deno` in globalThis;
function _l() {}
function vl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function yl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function bl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function xl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Sl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Cl(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Tl(o, t.options)) return !1;
    } else if (!Dl(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function wl(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (El(t.options.mutationKey) !== El(a)) return !1;
    } else if (!Dl(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Tl(e, t) {
  return (t?.queryKeyHashFn || El)(e);
}
function El(e) {
  return JSON.stringify(e, (e, t) =>
    jl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Dl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!Dl(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!Dl(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var Ol = Object.prototype.hasOwnProperty;
function kl(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Al(e) && Al(t);
  if (!r && !(jl(e) && jl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Ol.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = kl(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Al(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function jl(e) {
  if (!Ml(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Ml(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Ml(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Nl(e) {
  return new Promise((t) => {
    ml.setTimeout(t, e);
  });
}
function Pl(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : kl(e, t);
}
function Fl(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Il(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ll = Symbol();
function Rl(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ll
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function zl(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Bl = (() => {
  let e = () => gl;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function Vl() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var Hl = hl;
function U() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Hl,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var W = U(),
  G = new (class extends H {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function K(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function q(e) {
  return (e ?? `online`) !== `online` || G.isOnline();
}
var Ul = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function Wl(e) {
  let t = !1,
    n = 0,
    r,
    i = Vl(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new Ul(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      fl.isFocused() &&
      (e.networkMode === `always` || G.isOnline()) &&
      e.canRun(),
    u = () => q(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Bl.isServer() ? 0 : 3),
            o = e.retryDelay ?? K,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Nl(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Gl = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      yl(this.gcTime) &&
        (this.#e = ml.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Bl.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (ml.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Kl(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              zl(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Rl(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Il : Fl;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Jl : ql,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : ql(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function ql(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Jl(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Yl = class extends Gl {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Ql(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Ql(this.options);
      e.data !== void 0 &&
        (this.setState(Zl(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = Pl(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(_l).catch(_l) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Sl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Ll || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => xl(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !bl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Rl(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? Kl(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Wl({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof Ul &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof Ul) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Xl(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...Zl(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      W.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Xl(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: q(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Zl(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Ql(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var $l = class extends Gl {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || eu()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = Wl({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      W.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function eu() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var tu = class extends H {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new $l({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = nu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = nu(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = nu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = nu(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    W.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => wl(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => wl(e, t));
  }
  notify(e) {
    W.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return W.batch(() => Promise.all(e.map((e) => e.continue().catch(_l))));
  }
};
function nu(e) {
  return e.options.scope?.id;
}
var ru = class extends H {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Tl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Yl({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Cl(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Cl(e, t)) : t;
    }
    notify(e) {
      W.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  iu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new ru()),
        (this.#t = e.mutationCache || new tu()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = fl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = G.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(xl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = vl(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return W.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      W.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return W.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = W.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(_l).catch(_l);
    }
    invalidateQueries(e, t = {}) {
      return W.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = W.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(_l)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(_l);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(xl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(_l).catch(_l);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(_l).catch(_l);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return G.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(El(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Dl(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(El(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Dl(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Tl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Ll && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  au = B.createContext(void 0),
  ou = ({ client: e, children: t }) => (
    B.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, V.jsx)(au.Provider, { value: e, children: t })
  ),
  su = () => {
    window.va ||
      (window.va = function (...e) {
        (window.vaq || (window.vaq = []), window.vaq.push(e));
      });
  },
  cu = `@vercel/analytics`,
  lu = `2.0.1`;
function uu() {
  return typeof window < `u`;
}
function du() {
  return `production`;
}
function fu(e = `auto`) {
  if (e === `auto`) {
    window.vam = du();
    return;
  }
  window.vam = e;
}
function pu() {
  return (uu() ? window.vam : du()) || `production`;
}
function mu() {
  return pu() === `development`;
}
function hu(e) {
  return e.scriptSrc
    ? _u(e.scriptSrc)
    : mu()
      ? `https://va.vercel-scripts.com/v1/script.debug.js`
      : e.basePath
        ? _u(`${e.basePath}/insights/script.js`)
        : `/_vercel/insights/script.js`;
}
function gu(e, t) {
  let n = e;
  if (t)
    try {
      n = { ...JSON.parse(t)?.analytics, ...e };
    } catch {}
  fu(n.mode);
  let r = { sdkn: cu + (n.framework ? `/${n.framework}` : ``), sdkv: lu };
  return (
    n.disableAutoTrack && (r.disableAutoTrack = `1`),
    n.viewEndpoint && (r.viewEndpoint = _u(n.viewEndpoint)),
    n.eventEndpoint && (r.eventEndpoint = _u(n.eventEndpoint)),
    n.sessionEndpoint && (r.sessionEndpoint = _u(n.sessionEndpoint)),
    mu() && n.debug === !1 && (r.debug = `false`),
    n.dsn && (r.dsn = n.dsn),
    n.endpoint
      ? (r.endpoint = n.endpoint)
      : n.basePath && (r.endpoint = _u(`${n.basePath}/insights`)),
    { beforeSend: n.beforeSend, src: hu(n), dataset: r }
  );
}
function _u(e) {
  return e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    e.startsWith(`/`)
    ? e
    : `/${e}`;
}
function vu(e = { debug: !0 }, t) {
  var n;
  if (!uu()) return;
  let { beforeSend: r, src: i, dataset: a } = gu(e, t);
  if (
    (su(),
    r && ((n = window.va) == null || n.call(window, `beforeSend`, r)),
    document.head.querySelector(`script[src*="${i}"]`))
  )
    return;
  let o = document.createElement(`script`);
  o.src = i;
  for (let [e, t] of Object.entries(a)) o.dataset[e] = t;
  ((o.defer = !0),
    (o.onerror = () => {
      let e = mu()
        ? `Please check if any ad blockers are enabled and try again.`
        : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${i}. ${e}`,
      );
    }),
    document.head.appendChild(o));
}
function yu({ route: e, path: t }) {
  var n;
  (n = window.va) == null || n.call(window, `pageview`, { route: e, path: t });
}
function bu() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function xu() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
function Su(e) {
  return (
    (0, B.useEffect)(() => {
      var t;
      e.beforeSend &&
        ((t = window.va) == null || t.call(window, `beforeSend`, e.beforeSend));
    }, [e.beforeSend]),
    (0, B.useEffect)(() => {
      vu(
        {
          framework: e.framework || `react`,
          basePath: e.basePath ?? bu(),
          ...(e.route !== void 0 && { disableAutoTrack: !0 }),
          ...e,
        },
        e.configString ?? xu(),
      );
    }, []),
    (0, B.useEffect)(() => {
      e.route && e.path && yu({ route: e.route, path: e.path });
    }, [e.route, e.path]),
    null
  );
}
var Cu = `/assets/styles-BZLnxJ7Q.css`;
function wu(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  let n =
    e instanceof Response
      ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
      : e instanceof Error
        ? e.message
        : String(e);
  window.__lovableReportRuntimeError?.({
    message: n,
    stack: e instanceof Error ? e.stack : void 0,
    filename: window.location.pathname,
  });
}
var Tu = `/assets/paneer-tikka-C8Zhbtdo.jpg`,
  Eu = `/assets/hara-bhara-kabab-Beqcteo0.jpg`,
  Du = `/assets/tandoori-mushroom-CoaSJHHe.jpg`,
  Ou = `/assets/dal-makhani-C6FpEhWF.jpg`,
  ku = `/assets/paneer-butter-masala-BcJWXwGf.jpg`,
  Au = `/assets/veg-kolhapuri-DPDKWeS1.jpg`,
  ju = `/assets/butter-naan-g4KI3I-l.jpg`,
  Mu = `/assets/gulab-jamun-BgoGJ3_v.jpg`,
  Nu = `/assets/rasmalai-CaeAnm87.jpg`,
  Pu = `/assets/masala-chai-CThnpQTT.jpg`,
  Fu = `/assets/mango-lassi-CrB4sjjk.jpg`,
  Iu = `/assets/lime-soda-CSLWzT9U.jpg`,
  Lu = `/assets/jeera-rice-BERsqeaV.jpg`,
  Ru = `/assets/veg-manchurian-C1ElVmIy.jpg`,
  zu = `/assets/masala-dosa-BbuxB91u.jpg`,
  Bu = `/assets/green-salad-CuHW0-z8.jpg`,
  Vu = `/assets/masala-papad-LR1oieeE.jpg`,
  Hu = `/assets/thali-DRJnKMuZ.jpg`,
  Uu = `/assets/chow-mein-lXlRZ30C.jpg`,
  Wu = `/assets/aloo-gobhi-QYA5mmOd.jpg`,
  Gu = [
    { id: `starter`, label: { en: `Starters`, hi: `स्टार्टर` } },
    { id: `indian`, label: { en: `Indian`, hi: `इंडियन` } },
    { id: `roti`, label: { en: `Roti / Paratha`, hi: `रोटी / पराठा` } },
    { id: `thali`, label: { en: `Thali`, hi: `थाली` } },
    { id: `rice`, label: { en: `Rice`, hi: `चावल` } },
    { id: `chinese`, label: { en: `Chinese`, hi: `चायनीज़` } },
    { id: `southindian`, label: { en: `South Indian`, hi: `साउथ इंडियन` } },
    { id: `papaddahi`, label: { en: `Papad / Dahi`, hi: `पापड़ / दही` } },
    { id: `salad`, label: { en: `Salad`, hi: `सलाद` } },
    { id: `drink`, label: { en: `Drinks`, hi: `पेय` } },
    { id: `sweets`, label: { en: `Sweets`, hi: `मिठाई` } },
  ],
  Ku = {
    paneerTikka: Tu,
    haraBharaKabab: Eu,
    tandooriMushroom: Du,
    dalMakhani: Ou,
    paneerButterMasala: ku,
    vegKolhapuri: Au,
    butterNaan: ju,
    gulabJamun: Mu,
    rasmalai: Nu,
    masalaChai: Pu,
    mangoLassi: Fu,
    limeSoda: Iu,
    jeeraRice: Lu,
    vegManchurian: Ru,
    masalaDosa: zu,
    greenSalad: Bu,
    masalaPapad: Vu,
    thali: Hu,
    chowMein: Uu,
    alooGobhi: Wu,
  },
  qu = {
    starter: {
      en: `Fresh from the kadhai, served hot with green chutney.`,
      hi: `कढ़ाई से सीधे गरम, हरी चटनी के साथ परोसा गया।`,
    },
    indian: {
      en: `Slow-cooked in our house masala, best with tandoori roti or rice.`,
      hi: `घर के मसाले में धीमी आँच पर पका, रोटी या चावल के साथ बढ़िया।`,
    },
    roti: {
      en: `Baked to order in the tandoor and brushed with butter.`,
      hi: `ऑर्डर पर तंदूर में सिकी और मक्खन लगी हुई।`,
    },
    thali: {
      en: `A complete plate — sabzi, dal, roti, rice, salad and sweet.`,
      hi: `पूरी थाली — सब्ज़ी, दाल, रोटी, चावल, सलाद और मिठाई।`,
    },
    rice: {
      en: `Long-grain basmati, steamed light and fluffy.`,
      hi: `लंबे दाने वाला बासमती, हल्का और खिला-खिला।`,
    },
    chinese: {
      en: `Indo-Chinese, wok-tossed with garlic, chilli and soy.`,
      hi: `इंडो-चायनीज़, लहसुन, मिर्च और सोया के साथ भुना।`,
    },
    southindian: {
      en: `Crisp and light, served with sambar and coconut chutney.`,
      hi: `कुरकुरा और हल्का, सांबर व नारियल चटनी के साथ।`,
    },
    papaddahi: {
      en: `Cooling side to balance a spicy plate.`,
      hi: `तीखे खाने के साथ ठंडक देने वाली साइड डिश।`,
    },
    salad: {
      en: `Cut fresh on order with lemon and rock salt.`,
      hi: `ऑर्डर पर ताज़ा काटा गया, नींबू और सेंधा नमक के साथ।`,
    },
    drink: {
      en: `Brewed and served the way it should be.`,
      hi: `जैसा बनना चाहिए, वैसा बना और परोसा गया।`,
    },
    sweets: {
      en: `Made in-house every morning.`,
      hi: `हर सुबह रसोई में ताज़ा बनाई गई।`,
    },
  },
  Ju = {
    "dal-tadka": {
      en: `Yellow lentils finished with a sizzling ghee, cumin and garlic tadka.`,
      hi: `पीली दाल, ऊपर से घी, जीरा और लहसुन का चटकता तड़का।`,
    },
    "kaju-paneer": {
      en: `Paneer and roasted cashews in a rich, mildly sweet white gravy.`,
      hi: `पनीर और भुने काजू, गाढ़ी और हल्की मीठी सफ़ेद ग्रेवी में।`,
    },
    "butter-paneer-masala": {
      en: `Soft paneer in a velvety tomato-cashew gravy finished with white butter.`,
      hi: `मलाईदार टमाटर-काजू ग्रेवी में मुलायम पनीर, ऊपर सफ़ेद मक्खन।`,
    },
    "malai-kofta": {
      en: `Paneer and potato dumplings resting in a creamy saffron gravy.`,
      hi: `पनीर-आलू के कोफ्ते, मलाईदार केसरिया ग्रेवी में।`,
    },
    "palak-paneer": {
      en: `Fresh spinach purée with cubes of home-set paneer.`,
      hi: `ताज़ा पालक की प्यूरी में घर के बने पनीर के टुकड़े।`,
    },
    "baigan-bharta": {
      en: `Fire-roasted aubergine mashed with onion, tomato and green chilli.`,
      hi: `आग पर भुना बैंगन, प्याज़, टमाटर और हरी मिर्च के साथ।`,
    },
    "butter-naan": {
      en: `Tandoor-baked leavened bread brushed generously with white butter.`,
      hi: `तंदूर में सिकी नान, ऊपर से सफ़ेद मक्खन लगाकर परोसी गई।`,
    },
    "daal-bati": {
      en: `Baked wheat batis crushed in ghee with panchmel dal and churma.`,
      hi: `घी में चूरी हुई बाटी, पंचमेल दाल और चूरमे के साथ।`,
    },
    "special-thali": {
      en: `Two sabzis, dal, rice, four rotis, salad, papad, dahi and a sweet.`,
      hi: `दो सब्ज़ी, दाल, चावल, चार रोटी, सलाद, पापड़, दही और मिठाई।`,
    },
    "masala-dosa": {
      en: `Crisp rice crêpe filled with spiced potato, sambar and chutney.`,
      hi: `कुरकुरा दोसा, मसाला आलू भरकर, सांबर-चटनी के साथ।`,
    },
    "masala-papad": {
      en: `Roasted papad topped with onion, tomato, coriander and chaat masala.`,
      hi: `भुना पापड़, ऊपर प्याज़, टमाटर, धनिया और चाट मसाला।`,
    },
    "gulab-jaamoon": {
      en: `Warm khoya dumplings soaked in cardamom-rose syrup.`,
      hi: `इलायची-गुलाब की चाशनी में डूबे गरम खोया जामुन।`,
    },
    chai: {
      en: `Assam tea brewed with ginger, cardamom and clove.`,
      hi: `अदरक, इलायची और लौंग के साथ बनी असम की चाय।`,
    },
    lassi: {
      en: `Thick sweet curd blended smooth and served chilled.`,
      hi: `गाढ़ी मीठी दही की लस्सी, ठंडी परोसी गई।`,
    },
  },
  J = [
    {
      name: `Ananya S.`,
      rating: 5,
      date: `12 Jun 2026`,
      text: {
        en: `Fresh, hot and generous portions. Exactly what we wanted.`,
        hi: `ताज़ा, गरम और भरपूर मात्रा। बिल्कुल वैसा ही जैसा चाहिए था।`,
      },
    },
    {
      name: `Rohit M.`,
      rating: 4,
      date: `3 Jun 2026`,
      text: {
        en: `Good taste and very reasonable for the price.`,
        hi: `स्वाद अच्छा और दाम के हिसाब से बहुत सही।`,
      },
    },
    {
      name: `Meera J.`,
      rating: 5,
      date: `8 Jun 2026`,
      text: {
        en: `Home-style cooking, not oily at all. Family loved it.`,
        hi: `घर जैसा खाना, बिल्कुल भी तैलीय नहीं। परिवार को बहुत पसंद आया।`,
      },
    },
    {
      name: `Kabir N.`,
      rating: 4,
      date: `14 Jun 2026`,
      text: {
        en: `Served quickly even when the hall was full.`,
        hi: `हॉल भरा होने पर भी जल्दी परोसा गया।`,
      },
    },
    {
      name: `Hetal D.`,
      rating: 5,
      date: `5 Jun 2026`,
      text: {
        en: `Half plate is enough for one, full plate easily feeds two.`,
        hi: `हाफ प्लेट एक के लिए काफ़ी, फुल प्लेट में दो लोग आराम से।`,
      },
    },
    {
      name: `Ravi L.`,
      rating: 4,
      date: `9 Jun 2026`,
      text: {
        en: `Spice level is just right. Would order again.`,
        hi: `तीखापन एकदम सही। दोबारा ज़रूर मंगवाएँगे।`,
      },
    },
  ],
  Yu = [
    [
      `paneer-pakoda`,
      `Paneer Pakoda`,
      `पनीर पकोड़ा`,
      `starter`,
      0,
      80,
      `veg`,
      `paneerTikka`,
      1,
    ],
    [
      `veg-pakoda`,
      `Veg Pakoda`,
      `वेज पकोड़ा`,
      `starter`,
      0,
      60,
      `veg`,
      `haraBharaKabab`,
      1,
    ],
    [
      `tamatar-soup`,
      `Tamatar Soup`,
      `टमाटर सूप`,
      `starter`,
      0,
      60,
      `jain`,
      `vegKolhapuri`,
      0,
    ],
    [
      `manchau-soup`,
      `Manchau Soup`,
      `मंचाऊ सूप`,
      `starter`,
      0,
      80,
      `veg`,
      `vegManchurian`,
      1,
    ],
    [
      `paneer-tikka`,
      `Paneer Tikka`,
      `पनीर टिक्का`,
      `starter`,
      0,
      180,
      `veg`,
      `paneerTikka`,
      2,
    ],
    [
      `tandoori-mushroom`,
      `Tandoori Mushroom`,
      `तंदूरी मशरूम`,
      `starter`,
      0,
      160,
      `veg`,
      `tandooriMushroom`,
      1,
    ],
    [
      `dal-tadka`,
      `Dal Tadka`,
      `दाल तड़का`,
      `indian`,
      60,
      90,
      `veg`,
      `dalMakhani`,
      1,
    ],
    [
      `kaju-kari`,
      `Kaju Kari`,
      `काजू करी`,
      `indian`,
      120,
      180,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `dal-fry`,
      `Dal Fry`,
      `दाल फ्राई`,
      `indian`,
      50,
      80,
      `veg`,
      `dalMakhani`,
      1,
    ],
    [
      `aloo-matar`,
      `Aloo Matar`,
      `आलू मटर`,
      `indian`,
      60,
      90,
      `veg`,
      `alooGobhi`,
      1,
    ],
    [
      `aloo-masala`,
      `Aloo Masala`,
      `आलू मसाला`,
      `indian`,
      60,
      90,
      `veg`,
      `alooGobhi`,
      1,
    ],
    [
      `aloo-gobhi`,
      `Aloo Gobhi`,
      `आलू गोभी`,
      `indian`,
      60,
      90,
      `veg`,
      `alooGobhi`,
      1,
    ],
    [
      `aloo-tamatar`,
      `Aloo Tamatar`,
      `आलू टमाटर`,
      `indian`,
      60,
      90,
      `veg`,
      `alooGobhi`,
      1,
    ],
    [
      `aloo-chole`,
      `Aloo Chole`,
      `आलू छोले`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `kaju-paneer`,
      `Kaju Paneer`,
      `काजू पनीर`,
      `indian`,
      150,
      180,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `dum-aloo`,
      `Dum Aloo`,
      `दम आलू`,
      `indian`,
      70,
      100,
      `veg`,
      `alooGobhi`,
      2,
    ],
    [
      `bhindi-fry`,
      `Bhindi Fry`,
      `भिंडी फ्राई`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      1,
    ],
    [
      `bhindi-maala`,
      `Bhindi Maala`,
      `भिंडी माला`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      1,
    ],
    [
      `aloo-palak`,
      `Aloo Palak`,
      `आलू पालक`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      1,
    ],
    [
      `mix-veg`,
      `Mix Veg`,
      `मिक्स वेज`,
      `indian`,
      80,
      120,
      `veg`,
      `vegKolhapuri`,
      1,
    ],
    [
      `chana-masala`,
      `Chana Masala`,
      `चना मसाला`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `baigan-bharta`,
      `Baigan Bharta`,
      `बैंगन भरता`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `palak-paneer`,
      `Palak Paneer`,
      `पालक पनीर`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `sev-bhaji`,
      `Sev Bhaji`,
      `सेव भाजी`,
      `indian`,
      60,
      100,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `sev-tamatar`,
      `Sev Tamatar`,
      `सेव टमाटर`,
      `indian`,
      60,
      90,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `matar-paneer`,
      `Matar Paneer`,
      `मटर पनीर`,
      `indian`,
      80,
      120,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `paneer-masala`,
      `Paneer Masala`,
      `पनीर मसाला`,
      `indian`,
      80,
      120,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `butter-paneer-masala`,
      `Butter Paneer Masala`,
      `बटर पनीर मसाला`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `kadai-paneer`,
      `Kadai Paneer`,
      `कड़ाही पनीर`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `paneer-korma`,
      `Paneer Korma`,
      `पनीर कोरमा`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `malai-kofta`,
      `Malai Kofta`,
      `मलाई कोफ्ता`,
      `indian`,
      100,
      150,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `paneer-kofta`,
      `Paneer Kofta`,
      `पनीर कोफ्ता`,
      `indian`,
      100,
      150,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `paneer-tikka-masala`,
      `Paneer Tikka Masala`,
      `पनीर टिक्का मसाला`,
      `indian`,
      100,
      150,
      `veg`,
      `paneerTikka`,
      2,
    ],
    [
      `paneer-pansanda`,
      `Paneer Pansanda`,
      `पनीर पसंदा`,
      `indian`,
      120,
      150,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `paneer-do-pyaza`,
      `Paneer Do Pyaza`,
      `पनीर दो प्याज़ा`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `paneer-bhurji`,
      `Paneer Bhurji`,
      `पनीर भुर्जी`,
      `indian`,
      100,
      150,
      `veg`,
      `paneerTikka`,
      2,
    ],
    [
      `paneer-chole`,
      `Paneer Chole`,
      `पनीर छोले`,
      `indian`,
      80,
      120,
      `veg`,
      `vegKolhapuri`,
      2,
    ],
    [
      `matar-masala`,
      `Matar Masala`,
      `मटर मसाला`,
      `indian`,
      80,
      120,
      `veg`,
      `vegKolhapuri`,
      1,
    ],
    [
      `saahi-paneer`,
      `Saahi Paneer`,
      `शाही पनीर`,
      `indian`,
      100,
      120,
      `veg`,
      `paneerButterMasala`,
      1,
    ],
    [
      `chili-paneer`,
      `Chili Paneer`,
      `चिली पनीर`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerTikka`,
      3,
    ],
    [
      `kashmiri-dum-aalu`,
      `Kashmiri Dum Aalu`,
      `कश्मीरी दम आलू`,
      `indian`,
      80,
      120,
      `veg`,
      `alooGobhi`,
      2,
    ],
    [
      `paneer-chatpata`,
      `Paneer Chatpata`,
      `पनीर चटपटा`,
      `indian`,
      80,
      120,
      `veg`,
      `paneerTikka`,
      3,
    ],
    [
      `paneer-jampuri`,
      `Paneer Jampuri`,
      `पनीर जामपुरी`,
      `indian`,
      80,
      120,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `paneer-labavda`,
      `Paneer Labavda`,
      `पनीर लबाबदार`,
      `indian`,
      100,
      150,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `haandi-paneer`,
      `Haandi Paneer`,
      `हांडी पनीर`,
      `indian`,
      100,
      140,
      `veg`,
      `paneerButterMasala`,
      2,
    ],
    [
      `paneer-bundelkhandi`,
      `Paneer Bundelkhandi`,
      `पनीर बुंदेलखंडी`,
      `indian`,
      80,
      140,
      `veg`,
      `paneerButterMasala`,
      3,
    ],
    [
      `sada-roti`,
      `Sada Roti`,
      `सादा रोटी`,
      `roti`,
      0,
      7,
      `jain`,
      `butterNaan`,
      0,
    ],
    [
      `tandoori-roti`,
      `Tandoori Roti`,
      `तंदूरी रोटी`,
      `roti`,
      0,
      8,
      `jain`,
      `butterNaan`,
      0,
    ],
    [
      `tandoori-roti-butter`,
      `Tandoori Roti Butter`,
      `तंदूरी रोटी बटर`,
      `roti`,
      0,
      10,
      `jain`,
      `butterNaan`,
      0,
    ],
    [
      `sada-roti-butter`,
      `Sada Roti Butter`,
      `सादा रोटी बटर`,
      `roti`,
      0,
      8,
      `jain`,
      `butterNaan`,
      0,
    ],
    [
      `missi-roti`,
      `Missi Roti`,
      `मिस्सी रोटी`,
      `roti`,
      0,
      30,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `butter-naan`,
      `Butter Naan`,
      `बटर नान`,
      `roti`,
      0,
      40,
      `veg`,
      `butterNaan`,
      0,
    ],
    [
      `laksha-paratha`,
      `Laksha Paratha`,
      `लच्छा पराठा`,
      `roti`,
      0,
      40,
      `veg`,
      `butterNaan`,
      0,
    ],
    [
      `aloo-paratha`,
      `Aloo Paratha`,
      `आलू पराठा`,
      `roti`,
      0,
      40,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `paneer-paratha`,
      `Paneer Paratha`,
      `पनीर पराठा`,
      `roti`,
      0,
      80,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `pyaj-paratha`,
      `Pyaj Paratha`,
      `प्याज़ पराठा`,
      `roti`,
      0,
      60,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `gobhi-paratha`,
      `Gobhi Paratha`,
      `गोभी पराठा`,
      `roti`,
      0,
      50,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `mix-paratha`,
      `Mix Paratha`,
      `मिक्स पराठा`,
      `roti`,
      0,
      60,
      `veg`,
      `butterNaan`,
      1,
    ],
    [
      `sada-thali`,
      `Sada Thali`,
      `सादा थाली`,
      `thali`,
      0,
      80,
      `veg`,
      `thali`,
      1,
    ],
    [
      `special-thali`,
      `Special Thali`,
      `स्पेशल थाली`,
      `thali`,
      0,
      150,
      `veg`,
      `thali`,
      1,
    ],
    [
      `paneer-thali`,
      `Paneer Thali`,
      `पनीर थाली`,
      `thali`,
      0,
      100,
      `veg`,
      `thali`,
      1,
    ],
    [`daal-bati`, `Daal Bati`, `दाल बाटी`, `thali`, 0, 100, `veg`, `thali`, 1],
    [
      `sada-rice`,
      `Sada Rice`,
      `सादा चावल`,
      `rice`,
      30,
      50,
      `jain`,
      `jeeraRice`,
      0,
    ],
    [
      `jeera-rice`,
      `Jeera Rice`,
      `जीरा राइस`,
      `rice`,
      40,
      60,
      `jain`,
      `jeeraRice`,
      0,
    ],
    [
      `matar-pulav`,
      `Matar Pulav`,
      `मटर पुलाव`,
      `rice`,
      60,
      80,
      `veg`,
      `jeeraRice`,
      1,
    ],
    [
      `veg-pulav`,
      `Veg Pulav`,
      `वेज पुलाव`,
      `rice`,
      60,
      80,
      `veg`,
      `jeeraRice`,
      1,
    ],
    [
      `fried-rice`,
      `Fried Rice`,
      `फ्राइड राइस`,
      `rice`,
      70,
      100,
      `veg`,
      `jeeraRice`,
      1,
    ],
    [
      `paneer-fried-rice`,
      `Paneer Fried Rice`,
      `पनीर फ्राइड राइस`,
      `rice`,
      70,
      110,
      `veg`,
      `jeeraRice`,
      1,
    ],
    [
      `veg-manchurian-dry`,
      `Veg Manchurian Dry`,
      `वेज मंचूरियन ड्राई`,
      `chinese`,
      0,
      100,
      `veg`,
      `vegManchurian`,
      2,
    ],
    [
      `veg-manchurian-gravy`,
      `Veg Manchurian Gravy`,
      `वेज मंचूरियन ग्रेवी`,
      `chinese`,
      0,
      120,
      `veg`,
      `vegManchurian`,
      2,
    ],
    [
      `chow-mein`,
      `Chow Mein`,
      `चाउमीन`,
      `chinese`,
      0,
      60,
      `veg`,
      `chowMein`,
      2,
    ],
    [
      `hakka-noddles`,
      `Hakka Noodles`,
      `हक्का नूडल्स`,
      `chinese`,
      0,
      60,
      `veg`,
      `chowMein`,
      2,
    ],
    [
      `chilli-potato`,
      `Chilli Potato`,
      `चिल्ली पोटैटो`,
      `chinese`,
      0,
      100,
      `veg`,
      `vegManchurian`,
      3,
    ],
    [
      `honey-chilli-potato`,
      `Honey Chilli Potato`,
      `हनी चिल्ली पोटैटो`,
      `chinese`,
      0,
      120,
      `veg`,
      `vegManchurian`,
      2,
    ],
    [
      `finger-chips`,
      `Finger Chips`,
      `फिंगर चिप्स`,
      `chinese`,
      0,
      50,
      `veg`,
      `vegManchurian`,
      0,
    ],
    [
      `masala-maggi`,
      `Masala Maggi`,
      `मसाला मैगी`,
      `chinese`,
      0,
      40,
      `veg`,
      `chowMein`,
      1,
    ],
    [
      `butter-maggi`,
      `Butter Maggi`,
      `बटर मैगी`,
      `chinese`,
      0,
      60,
      `veg`,
      `chowMein`,
      1,
    ],
    [
      `masala-dosa`,
      `Masala Dosa`,
      `मसाला दोसा`,
      `southindian`,
      0,
      100,
      `veg`,
      `masalaDosa`,
      1,
    ],
    [
      `onion-dosa`,
      `Onion Dosa`,
      `प्याज़ दोसा`,
      `southindian`,
      0,
      100,
      `veg`,
      `masalaDosa`,
      1,
    ],
    [
      `paneer-dosa`,
      `Paneer Dosa`,
      `पनीर दोसा`,
      `southindian`,
      0,
      120,
      `veg`,
      `masalaDosa`,
      1,
    ],
    [`idli`, `Idli`, `इडली`, `southindian`, 0, 60, `jain`, `masalaDosa`, 0],
    [
      `papad-dry`,
      `Papad Dry`,
      `पापड़ ड्राई`,
      `papaddahi`,
      0,
      10,
      `jain`,
      `masalaPapad`,
      0,
    ],
    [
      `papad-fry`,
      `Papad Fry`,
      `पापड़ फ्राई`,
      `papaddahi`,
      0,
      15,
      `jain`,
      `masalaPapad`,
      0,
    ],
    [`dahi`, `Dahi`, `दही`, `papaddahi`, 0, 30, `jain`, `greenSalad`, 0],
    [
      `bundi-rayta`,
      `Bundi Rayta`,
      `बूंदी रायता`,
      `papaddahi`,
      0,
      50,
      `veg`,
      `greenSalad`,
      0,
    ],
    [
      `veg-rayta`,
      `Veg Rayta`,
      `वेज रायता`,
      `papaddahi`,
      0,
      60,
      `veg`,
      `greenSalad`,
      0,
    ],
    [`chansh`, `Chhachh`, `छाछ`, `papaddahi`, 0, 40, `jain`, `mangoLassi`, 0],
    [
      `masala-papad`,
      `Masala Papad`,
      `मसाला पापड़`,
      `papaddahi`,
      0,
      30,
      `veg`,
      `masalaPapad`,
      1,
    ],
    [
      `onion-salad`,
      `Onion Salad`,
      `प्याज़ सलाद`,
      `salad`,
      0,
      30,
      `veg`,
      `greenSalad`,
      0,
    ],
    [
      `green-salad`,
      `Green Salad`,
      `ग्रीन सलाद`,
      `salad`,
      0,
      40,
      `jain`,
      `greenSalad`,
      0,
    ],
    [
      `kachumar-salad`,
      `Kachumar Salad`,
      `कचूमर सलाद`,
      `salad`,
      0,
      50,
      `veg`,
      `greenSalad`,
      0,
    ],
    [`chai`, `Chai`, `चाय`, `drink`, 0, 20, `jain`, `masalaChai`, 0],
    [`coffee`, `Coffee`, `कॉफ़ी`, `drink`, 0, 30, `jain`, `masalaChai`, 0],
    [`lassi`, `Lassi`, `लस्सी`, `drink`, 0, 50, `jain`, `mangoLassi`, 0],
    [
      `lime-soda`,
      `Fresh Lime Soda`,
      `फ्रेश लाइम सोडा`,
      `drink`,
      0,
      40,
      `jain`,
      `limeSoda`,
      0,
    ],
    [`rasgulla`, `Rasgulla`, `रसगुल्ला`, `sweets`, 0, 20, `veg`, `rasmalai`, 0],
    [
      `gulab-jaamoon`,
      `Gulab Jamun`,
      `गुलाब जामुन`,
      `sweets`,
      0,
      15,
      `veg`,
      `gulabJamun`,
      0,
    ],
  ],
  Xu = new Set([
    `butter-paneer-masala`,
    `special-thali`,
    `dal-tadka`,
    `masala-dosa`,
    `malai-kofta`,
    `daal-bati`,
  ]),
  Zu = {
    starter: [`masala-chai-placeholder`, `lassi`, `green-salad`],
    indian: [`butter-naan`, `jeera-rice`, `lassi`],
    roti: [`dal-tadka`, `butter-paneer-masala`, `dahi`],
    thali: [`masala-papad`, `lassi`, `gulab-jaamoon`],
    rice: [`dal-tadka`, `bundi-rayta`, `papad-fry`],
    chinese: [`chow-mein`, `veg-manchurian-gravy`, `lime-soda`],
    southindian: [`chai`, `coffee`, `green-salad`],
    papaddahi: [`dal-tadka`, `sada-rice`, `tandoori-roti`],
    salad: [`butter-naan`, `dal-tadka`, `chhachh-placeholder`],
    drink: [`masala-papad`, `veg-pakoda`, `gulab-jaamoon`],
    sweets: [`chai`, `lassi`, `special-thali`],
  },
  Qu = [
    [4.7, [182, 44, 9, 3, 1]],
    [4.5, [140, 51, 14, 5, 2]],
    [4.4, [96, 40, 12, 4, 1]],
    [4.6, [204, 60, 11, 3, 1]],
    [4.3, [88, 42, 14, 5, 2]],
    [4.8, [230, 40, 7, 2, 1]],
  ],
  $u = Yu.map(([e, t, n, r, i, a, o, s, c], l) => {
    let [u, d] = Qu[l % Qu.length],
      f = Zu[r].filter((t) => t !== e && !t.includes(`placeholder`));
    return {
      id: e,
      name: { en: t, hi: n },
      description: Ju[e] ?? qu[r],
      price: a,
      halfPrice: i > 0 ? i : void 0,
      category: r,
      diet: o,
      image: Ku[s],
      spice: c,
      chefPick: Xu.has(e) || void 0,
      tags: t.toLowerCase().split(` `).concat(r),
      rating: u,
      ratingBreakdown: d,
      reviews: [J[l % J.length], J[(l + 3) % J.length]],
      combos: f.slice(0, 3),
    };
  }),
  ed = (e) => $u.find((t) => t.id === e),
  td = (e, t) => (t === `half` && e.halfPrice ? e.halfPrice : e.price),
  nd = (e) => `₹${e.toLocaleString(`en-IN`, { maximumFractionDigits: 0 })}`,
  rd = {
    name: `Chapati.com`,
    kind: { en: `Hotel & Restaurant`, hi: `होटल एवं रेस्टोरेंट` },
    facilities: {
      en: [`Hotel rooms`, `Party hall`, `Meeting hall`, `Marriage garden`],
      hi: [`होटल रूम`, `पार्टी हॉल`, `मीटिंग हॉल`, `मैरिज गार्डन`],
    },
    phones: [`+91 91314 73516`, `+91 96693 17501`, `+91 70008 66838`],
  },
  id = [
    { code: `en`, label: `English`, short: `EN` },
    { code: `hi`, label: `हिंदी`, short: `हि` },
  ],
  ad = {
    en: {
      hotelName: `Chapati.com`,
      hotelKind: `Hotel & Restaurant`,
      tagline: `Pure vegetarian kitchen · 7:00 am – 11:30 pm`,
      heroTitle: `Our Menu`,
      heroSubtitle: `Browse, filter and build your bill before you call the steward.`,
      searchPlaceholder: `Search dishes, e.g. paneer, roti, dosa…`,
      all: `All`,
      veg: `Veg`,
      jain: `Jain`,
      pureVeg: `100% Pure Veg`,
      dietFilter: `Diet`,
      noResults: `No dishes match that.`,
      noResultsHint: `Try clearing a filter or searching something shorter.`,
      clearFilters: `Clear filters`,
      add: `Add`,
      half: `Half`,
      full: `Full`,
      chefPick: `Chef's pick`,
      reviews: `reviews`,
      ratingsAndReviews: `Ratings & reviews`,
      pairsWith: `Order this with`,
      billEstimate: `Bill estimate`,
      yourOrder: `Your order`,
      items: `items`,
      item: `item`,
      subtotal: `Subtotal`,
      taxes: `GST (5%)`,
      serviceNote: `Service charge is not applied.`,
      total: `Estimated total`,
      emptyCart: `Nothing added yet.`,
      emptyCartHint: `Tap Add on any dish to start your bill estimate.`,
      showWaiter: `Show this screen to your steward to place the order.`,
      clearAll: `Clear all`,
      back: `Back to menu`,
      mild: `Mild`,
      medium: `Medium`,
      hot: `Hot`,
      basedOn: `based on`,
      ratings: `ratings`,
      perPlate: `per plate`,
      close: `Close`,
      language: `Language`,
      facilities: `Facilities`,
      forBooking: `For booking`,
    },
    hi: {
      hotelName: `Chapati.com`,
      hotelKind: `होटल एवं रेस्टोरेंट`,
      tagline: `शुद्ध शाकाहारी रसोई · सुबह 7:00 – रात 11:30`,
      heroTitle: `हमारा मेन्यू`,
      heroSubtitle: `देखिए, छाँटिए और ऑर्डर देने से पहले अपना बिल जोड़ लीजिए।`,
      searchPlaceholder: `व्यंजन खोजें, जैसे पनीर, रोटी, दोसा…`,
      all: `सभी`,
      veg: `शाकाहारी`,
      jain: `जैन`,
      pureVeg: `100% शुद्ध शाकाहारी`,
      dietFilter: `आहार`,
      noResults: `कोई व्यंजन नहीं मिला।`,
      noResultsHint: `कोई फ़िल्टर हटाकर या छोटा शब्द लिखकर देखिए।`,
      clearFilters: `फ़िल्टर हटाएँ`,
      add: `जोड़ें`,
      half: `हाफ`,
      full: `फुल`,
      chefPick: `शेफ़ की पसंद`,
      reviews: `समीक्षाएँ`,
      ratingsAndReviews: `रेटिंग और समीक्षाएँ`,
      pairsWith: `इसके साथ मंगवाइए`,
      billEstimate: `अनुमानित बिल`,
      yourOrder: `आपका ऑर्डर`,
      items: `चीज़ें`,
      item: `चीज़`,
      subtotal: `उप-योग`,
      taxes: `जीएसटी (5%)`,
      serviceNote: `सेवा शुल्क नहीं लिया जाता।`,
      total: `अनुमानित कुल`,
      emptyCart: `अभी कुछ नहीं जोड़ा।`,
      emptyCartHint: `किसी भी व्यंजन पर ‘जोड़ें’ दबाइए।`,
      showWaiter: `ऑर्डर देने के लिए यह स्क्रीन स्टीवर्ड को दिखाइए।`,
      clearAll: `सब हटाएँ`,
      back: `मेन्यू पर वापस`,
      mild: `हल्का`,
      medium: `मध्यम`,
      hot: `तेज़`,
      basedOn: `कुल`,
      ratings: `रेटिंग`,
      perPlate: `प्रति प्लेट`,
      close: `बंद करें`,
      language: `भाषा`,
      facilities: `सुविधाएँ`,
      forBooking: `बुकिंग के लिए`,
    },
  },
  od = (e, t) => ad[e][t] ?? ad.en[t] ?? t,
  sd = `chapati-lang`,
  cd = 0.05,
  ld = (0, B.createContext)(null);
function ud({ children: e }) {
  let [t, n] = (0, B.useState)(`en`),
    [r, i] = (0, B.useState)([]);
  (0, B.useEffect)(() => {
    let e = window.localStorage.getItem(sd);
    (e === `en` || e === `hi`) && n(e);
  }, []);
  let a = (0, B.useCallback)((e) => {
      (n(e), window.localStorage.setItem(sd, e));
    }, []),
    o = (0, B.useCallback)((e, t = `full`) => {
      i((n) =>
        n.find((n) => n.id === e && n.variant === t)
          ? n.map((n) =>
              n.id === e && n.variant === t ? { ...n, qty: n.qty + 1 } : n,
            )
          : [...n, { id: e, variant: t, qty: 1 }],
      );
    }, []),
    s = (0, B.useCallback)((e, t = `full`) => {
      i((n) =>
        n
          .map((n) =>
            n.id === e && n.variant === t ? { ...n, qty: n.qty - 1 } : n,
          )
          .filter((e) => e.qty > 0),
      );
    }, []),
    c = (0, B.useCallback)(() => i([]), []),
    l = (0, B.useMemo)(() => {
      let e = r.reduce((e, t) => {
          let n = $u.find((e) => e.id === t.id);
          return e + (n ? td(n, t.variant) * t.qty : 0);
        }, 0),
        n = Math.round(e * cd);
      return {
        lang: t,
        setLang: a,
        t: (e) => od(t, e),
        cart: r,
        qtyOf: (e, t = `full`) =>
          r.find((n) => n.id === e && n.variant === t)?.qty ?? 0,
        add: o,
        remove: s,
        clear: c,
        count: r.reduce((e, t) => e + t.qty, 0),
        subtotal: e,
        tax: n,
        total: e + n,
      };
    }, [t, a, r, o, s, c]);
  return (0, V.jsx)(ld.Provider, { value: l, children: e });
}
function dd() {
  let e = (0, B.useContext)(ld);
  if (!e) throw Error(`useApp must be used inside AppProvider`);
  return e;
}
var fd = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  pd = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  md = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  hd = (e) => {
    let t = md(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  gd = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  _d = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  vd = (0, B.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, B.createElement)(
        `svg`,
        {
          ref: c,
          ...gd,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: fd(`lucide`, i),
          ...(!a && !_d(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, B.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  yd = (e, t) => {
    let n = (0, B.forwardRef)(({ className: n, ...r }, i) =>
      (0, B.createElement)(vd, {
        ref: i,
        iconNode: t,
        className: fd(`lucide-${pd(hd(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = hd(e)), n);
  },
  bd = yd(`minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]),
  xd = yd(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  Sd = yd(`receipt-text`, [
    [`path`, { d: `M13 16H8`, key: `wsln4y` }],
    [`path`, { d: `M14 8H8`, key: `1l3xfs` }],
    [`path`, { d: `M16 12H8`, key: `1fr5h0` }],
    [
      `path`,
      {
        d: `M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,
        key: `ycz6yz`,
      },
    ],
  ]),
  Cd = yd(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]);
function Y(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Y(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function wd() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Y(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Td = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Ed = (e, t) => ({ classGroupId: e, validator: t }),
  Dd = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Od = `-`,
  kd = [],
  Ad = `arbitrary..`,
  jd = (e) => {
    let t = Pd(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Nd(e);
        let n = e.split(Od);
        return Md(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Td(i, t) : t) : i || kd;
        }
        return n[e] || kd;
      },
    };
  },
  Md = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Md(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Od) : e.slice(t).join(Od),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Nd = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Ad + r : void 0;
        })(),
  Pd = (e) => {
    let { theme: t, classGroups: n } = e;
    return Fd(n, t);
  },
  Fd = (e, t) => {
    let n = Dd();
    for (let r in e) {
      let i = e[r];
      Id(i, n, r, t);
    }
    return n;
  },
  Id = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      X(i, t, n, r);
    }
  },
  X = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ld(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Rd(e, t, n, r);
      return;
    }
    zd(e, t, n, r);
  },
  Ld = (e, t, n) => {
    let r = e === `` ? t : Bd(t, e);
    r.classGroupId = n;
  },
  Rd = (e, t, n, r) => {
    if (Vd(e)) {
      Id(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Ed(n, e)));
  },
  zd = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Id(o, Bd(t, a), n, r);
    }
  },
  Bd = (e, t) => {
    let n = e,
      r = t.split(Od),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Dd()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Vd = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Hd = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Ud = `!`,
  Wd = `:`,
  Gd = [],
  Kd = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  qd = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Wd) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Ud)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Ud) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Kd(t, l, c, u);
      };
    if (t) {
      let e = t + Wd,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Kd(Gd, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Jd = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Yd = (e) => ({
    cache: Hd(e.cacheSize),
    parseClassName: qd(e),
    sortModifiers: Jd(e),
    postfixLookupClassGroupIds: Xd(e),
    ...jd(e),
  }),
  Xd = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Zd = /\s+/,
  Qd = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Zd),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Ud : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  $d = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = ef(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  ef = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = ef(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  tf = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Yd(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Qd(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a($d(...e)));
  },
  nf = [],
  rf = (e) => {
    let t = (t) => t[e] || nf;
    return ((t.isThemeGetter = !0), t);
  },
  af = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  of = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  sf = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  cf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  lf =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  uf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  df = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ff =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pf = (e) => sf.test(e),
  Z = (e) => !!e && !Number.isNaN(Number(e)),
  mf = (e) => !!e && Number.isInteger(Number(e)),
  hf = (e) => e.endsWith(`%`) && Z(e.slice(0, -1)),
  gf = (e) => cf.test(e),
  _f = () => !0,
  vf = (e) => lf.test(e) && !uf.test(e),
  yf = () => !1,
  bf = (e) => df.test(e),
  xf = (e) => ff.test(e),
  Sf = (e) => !Q(e) && !$(e),
  Cf = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  wf = (e) => zf(e, Uf, yf),
  Q = (e) => af.test(e),
  Tf = (e) => zf(e, Wf, vf),
  Ef = (e) => zf(e, Gf, Z),
  Df = (e) => zf(e, qf, _f),
  Of = (e) => zf(e, Kf, yf),
  kf = (e) => zf(e, Vf, yf),
  Af = (e) => zf(e, Hf, xf),
  jf = (e) => zf(e, Jf, bf),
  $ = (e) => of.test(e),
  Mf = (e) => Bf(e, Wf),
  Nf = (e) => Bf(e, Kf),
  Pf = (e) => Bf(e, Vf),
  Ff = (e) => Bf(e, Uf),
  If = (e) => Bf(e, Hf),
  Lf = (e) => Bf(e, Jf, !0),
  Rf = (e) => Bf(e, qf, !0),
  zf = (e, t, n) => {
    let r = af.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Bf = (e, t, n = !1) => {
    let r = of.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Vf = (e) => e === `position` || e === `percentage`,
  Hf = (e) => e === `image` || e === `url`,
  Uf = (e) => e === `length` || e === `size` || e === `bg-size`,
  Wf = (e) => e === `length`,
  Gf = (e) => e === `number`,
  Kf = (e) => e === `family-name`,
  qf = (e) => e === `number` || e === `weight`,
  Jf = (e) => e === `shadow`,
  Yf = tf(() => {
    let e = rf(`color`),
      t = rf(`font`),
      n = rf(`text`),
      r = rf(`font-weight`),
      i = rf(`tracking`),
      a = rf(`leading`),
      o = rf(`breakpoint`),
      s = rf(`container`),
      c = rf(`spacing`),
      l = rf(`radius`),
      u = rf(`shadow`),
      d = rf(`inset-shadow`),
      f = rf(`text-shadow`),
      p = rf(`drop-shadow`),
      m = rf(`blur`),
      h = rf(`perspective`),
      g = rf(`aspect`),
      _ = rf(`ease`),
      v = rf(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), $, Q],
      ee = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      S = () => [`auto`, `contain`, `none`],
      C = () => [$, Q, c],
      w = () => [pf, `full`, `auto`, ...C()],
      te = () => [mf, `none`, `subgrid`, $, Q],
      ne = () => [`auto`, { span: [`full`, mf, $, Q] }, mf, $, Q],
      re = () => [mf, `auto`, $, Q],
      ie = () => [`auto`, `min`, `max`, `fr`, $, Q],
      ae = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      oe = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      se = () => [`auto`, ...C()],
      ce = () => [
        pf,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      le = () => [
        pf,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      ue = () => [
        pf,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      E = () => [e, $, Q],
      D = () => [...b(), Pf, kf, { position: [$, Q] }],
      de = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      fe = () => [`auto`, `cover`, `contain`, Ff, wf, { size: [$, Q] }],
      pe = () => [hf, Mf, Tf],
      O = () => [``, `none`, `full`, l, $, Q],
      k = () => [``, Z, Mf, Tf],
      A = () => [`solid`, `dashed`, `dotted`, `double`],
      me = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      j = () => [Z, hf, Pf, kf],
      he = () => [``, `none`, m, $, Q],
      ge = () => [`none`, Z, $, Q],
      _e = () => [`none`, Z, $, Q],
      ve = () => [Z, $, Q],
      ye = () => [pf, `full`, ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [gf],
        breakpoint: [gf],
        color: [_f],
        container: [gf],
        "drop-shadow": [gf],
        ease: [`in`, `out`, `in-out`],
        font: [Sf],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [gf],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [gf],
        shadow: [gf],
        spacing: [`px`, Z],
        text: [gf],
        "text-shadow": [gf],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, pf, Q, $, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
        "container-named": [Cf],
        columns: [{ columns: [Z, Q, $, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: ee() }],
        "overflow-x": [{ "overflow-x": ee() }],
        "overflow-y": [{ "overflow-y": ee() }],
        overscroll: [{ overscroll: S() }],
        "overscroll-x": [{ "overscroll-x": S() }],
        "overscroll-y": [{ "overscroll-y": S() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: w() }],
        "inset-x": [{ "inset-x": w() }],
        "inset-y": [{ "inset-y": w() }],
        start: [{ "inset-s": w(), start: w() }],
        end: [{ "inset-e": w(), end: w() }],
        "inset-bs": [{ "inset-bs": w() }],
        "inset-be": [{ "inset-be": w() }],
        top: [{ top: w() }],
        right: [{ right: w() }],
        bottom: [{ bottom: w() }],
        left: [{ left: w() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [mf, `auto`, $, Q] }],
        basis: [{ basis: [pf, `full`, `auto`, s, ...C()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [Z, pf, `auto`, `initial`, `none`, Q] }],
        grow: [{ grow: [``, Z, $, Q] }],
        shrink: [{ shrink: [``, Z, $, Q] }],
        order: [{ order: [mf, `first`, `last`, `none`, $, Q] }],
        "grid-cols": [{ "grid-cols": te() }],
        "col-start-end": [{ col: ne() }],
        "col-start": [{ "col-start": re() }],
        "col-end": [{ "col-end": re() }],
        "grid-rows": [{ "grid-rows": te() }],
        "row-start-end": [{ row: ne() }],
        "row-start": [{ "row-start": re() }],
        "row-end": [{ "row-end": re() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ie() }],
        "auto-rows": [{ "auto-rows": ie() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...ae(), `normal`] }],
        "justify-items": [{ "justify-items": [...oe(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...oe()] }],
        "align-content": [{ content: [`normal`, ...ae()] }],
        "align-items": [{ items: [...oe(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...oe(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ae() }],
        "place-items": [{ "place-items": [...oe(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...oe()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pbs: [{ pbs: C() }],
        pbe: [{ pbe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: se() }],
        mx: [{ mx: se() }],
        my: [{ my: se() }],
        ms: [{ ms: se() }],
        me: [{ me: se() }],
        mbs: [{ mbs: se() }],
        mbe: [{ mbe: se() }],
        mt: [{ mt: se() }],
        mr: [{ mr: se() }],
        mb: [{ mb: se() }],
        ml: [{ ml: se() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: ce() }],
        "inline-size": [{ inline: [`auto`, ...le()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...le()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...le()] }],
        "block-size": [{ block: [`auto`, ...ue()] }],
        "min-block-size": [{ "min-block": [`auto`, ...ue()] }],
        "max-block-size": [{ "max-block": [`none`, ...ue()] }],
        w: [{ w: [s, `screen`, ...ce()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...ce()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...ce()] },
        ],
        h: [{ h: [`screen`, `lh`, ...ce()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...ce()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...ce()] }],
        "font-size": [{ text: [`base`, n, Mf, Tf] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Rf, Df] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              hf,
              Q,
            ],
          },
        ],
        "font-family": [{ font: [Nf, Of, t] }],
        "font-features": [{ "font-features": [Q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, $, Q] }],
        "line-clamp": [{ "line-clamp": [Z, `none`, $, Ef] }],
        leading: [{ leading: [a, ...C()] }],
        "list-image": [{ "list-image": [`none`, $, Q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: E() }],
        "text-color": [{ text: E() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...A(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [Z, `from-font`, `auto`, $, Tf] },
        ],
        "text-decoration-color": [{ decoration: E() }],
        "underline-offset": [{ "underline-offset": [Z, `auto`, $, Q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: C() }],
        "tab-size": [{ tab: [mf, $, Q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              $,
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, $, Q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: D() }],
        "bg-repeat": [{ bg: de() }],
        "bg-size": [{ bg: fe() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  mf,
                  $,
                  Q,
                ],
                radial: [``, $, Q],
                conic: [mf, $, Q],
              },
              If,
              Af,
            ],
          },
        ],
        "bg-color": [{ bg: E() }],
        "gradient-from-pos": [{ from: pe() }],
        "gradient-via-pos": [{ via: pe() }],
        "gradient-to-pos": [{ to: pe() }],
        "gradient-from": [{ from: E() }],
        "gradient-via": [{ via: E() }],
        "gradient-to": [{ to: E() }],
        rounded: [{ rounded: O() }],
        "rounded-s": [{ "rounded-s": O() }],
        "rounded-e": [{ "rounded-e": O() }],
        "rounded-t": [{ "rounded-t": O() }],
        "rounded-r": [{ "rounded-r": O() }],
        "rounded-b": [{ "rounded-b": O() }],
        "rounded-l": [{ "rounded-l": O() }],
        "rounded-ss": [{ "rounded-ss": O() }],
        "rounded-se": [{ "rounded-se": O() }],
        "rounded-ee": [{ "rounded-ee": O() }],
        "rounded-es": [{ "rounded-es": O() }],
        "rounded-tl": [{ "rounded-tl": O() }],
        "rounded-tr": [{ "rounded-tr": O() }],
        "rounded-br": [{ "rounded-br": O() }],
        "rounded-bl": [{ "rounded-bl": O() }],
        "border-w": [{ border: k() }],
        "border-w-x": [{ "border-x": k() }],
        "border-w-y": [{ "border-y": k() }],
        "border-w-s": [{ "border-s": k() }],
        "border-w-e": [{ "border-e": k() }],
        "border-w-bs": [{ "border-bs": k() }],
        "border-w-be": [{ "border-be": k() }],
        "border-w-t": [{ "border-t": k() }],
        "border-w-r": [{ "border-r": k() }],
        "border-w-b": [{ "border-b": k() }],
        "border-w-l": [{ "border-l": k() }],
        "divide-x": [{ "divide-x": k() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": k() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...A(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...A(), `hidden`, `none`] }],
        "border-color": [{ border: E() }],
        "border-color-x": [{ "border-x": E() }],
        "border-color-y": [{ "border-y": E() }],
        "border-color-s": [{ "border-s": E() }],
        "border-color-e": [{ "border-e": E() }],
        "border-color-bs": [{ "border-bs": E() }],
        "border-color-be": [{ "border-be": E() }],
        "border-color-t": [{ "border-t": E() }],
        "border-color-r": [{ "border-r": E() }],
        "border-color-b": [{ "border-b": E() }],
        "border-color-l": [{ "border-l": E() }],
        "divide-color": [{ divide: E() }],
        "outline-style": [{ outline: [...A(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [Z, $, Q] }],
        "outline-w": [{ outline: [``, Z, Mf, Tf] }],
        "outline-color": [{ outline: E() }],
        shadow: [{ shadow: [``, `none`, u, Lf, jf] }],
        "shadow-color": [{ shadow: E() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Lf, jf] }],
        "inset-shadow-color": [{ "inset-shadow": E() }],
        "ring-w": [{ ring: k() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: E() }],
        "ring-offset-w": [{ "ring-offset": [Z, Tf] }],
        "ring-offset-color": [{ "ring-offset": E() }],
        "inset-ring-w": [{ "inset-ring": k() }],
        "inset-ring-color": [{ "inset-ring": E() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Lf, jf] }],
        "text-shadow-color": [{ "text-shadow": E() }],
        opacity: [{ opacity: [Z, $, Q] }],
        "mix-blend": [
          { "mix-blend": [...me(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": me() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Z] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": j() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": E() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": E() }],
        "mask-image-t-from-pos": [{ "mask-t-from": j() }],
        "mask-image-t-to-pos": [{ "mask-t-to": j() }],
        "mask-image-t-from-color": [{ "mask-t-from": E() }],
        "mask-image-t-to-color": [{ "mask-t-to": E() }],
        "mask-image-r-from-pos": [{ "mask-r-from": j() }],
        "mask-image-r-to-pos": [{ "mask-r-to": j() }],
        "mask-image-r-from-color": [{ "mask-r-from": E() }],
        "mask-image-r-to-color": [{ "mask-r-to": E() }],
        "mask-image-b-from-pos": [{ "mask-b-from": j() }],
        "mask-image-b-to-pos": [{ "mask-b-to": j() }],
        "mask-image-b-from-color": [{ "mask-b-from": E() }],
        "mask-image-b-to-color": [{ "mask-b-to": E() }],
        "mask-image-l-from-pos": [{ "mask-l-from": j() }],
        "mask-image-l-to-pos": [{ "mask-l-to": j() }],
        "mask-image-l-from-color": [{ "mask-l-from": E() }],
        "mask-image-l-to-color": [{ "mask-l-to": E() }],
        "mask-image-x-from-pos": [{ "mask-x-from": j() }],
        "mask-image-x-to-pos": [{ "mask-x-to": j() }],
        "mask-image-x-from-color": [{ "mask-x-from": E() }],
        "mask-image-x-to-color": [{ "mask-x-to": E() }],
        "mask-image-y-from-pos": [{ "mask-y-from": j() }],
        "mask-image-y-to-pos": [{ "mask-y-to": j() }],
        "mask-image-y-from-color": [{ "mask-y-from": E() }],
        "mask-image-y-to-color": [{ "mask-y-to": E() }],
        "mask-image-radial": [{ "mask-radial": [$, Q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": j() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": E() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": E() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [Z] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": j() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": E() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": E() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: D() }],
        "mask-repeat": [{ mask: de() }],
        "mask-size": [{ mask: fe() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, $, Q] }],
        filter: [{ filter: [``, `none`, $, Q] }],
        blur: [{ blur: he() }],
        brightness: [{ brightness: [Z, $, Q] }],
        contrast: [{ contrast: [Z, $, Q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Lf, jf] }],
        "drop-shadow-color": [{ "drop-shadow": E() }],
        grayscale: [{ grayscale: [``, Z, $, Q] }],
        "hue-rotate": [{ "hue-rotate": [Z, $, Q] }],
        invert: [{ invert: [``, Z, $, Q] }],
        saturate: [{ saturate: [Z, $, Q] }],
        sepia: [{ sepia: [``, Z, $, Q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
        "backdrop-blur": [{ "backdrop-blur": he() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Z, $, Q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Z, $, Q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, Z, $, Q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Z, $, Q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, Z, $, Q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Z, $, Q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Z, $, Q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, Z, $, Q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              $,
              Q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [Z, `initial`, $, Q] }],
        ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
        delay: [{ delay: [Z, $, Q] }],
        animate: [{ animate: [`none`, v, $, Q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, $, Q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: ge() }],
        "rotate-x": [{ "rotate-x": ge() }],
        "rotate-y": [{ "rotate-y": ge() }],
        "rotate-z": [{ "rotate-z": ge() }],
        scale: [{ scale: _e() }],
        "scale-x": [{ "scale-x": _e() }],
        "scale-y": [{ "scale-y": _e() }],
        "scale-z": [{ "scale-z": _e() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: ve() }],
        "skew-x": [{ "skew-x": ve() }],
        "skew-y": [{ "skew-y": ve() }],
        transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: ye() }],
        "translate-x": [{ "translate-x": ye() }],
        "translate-y": [{ "translate-y": ye() }],
        "translate-z": [{ "translate-z": ye() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [mf, $, Q] }],
        accent: [{ accent: E() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: E() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              $,
              Q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": E() }],
        "scrollbar-track-color": [{ "scrollbar-track": E() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mbs": [{ "scroll-mbs": C() }],
        "scroll-mbe": [{ "scroll-mbe": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pbs": [{ "scroll-pbs": C() }],
        "scroll-pbe": [{ "scroll-pbe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] },
        ],
        fill: [{ fill: [`none`, ...E()] }],
        "stroke-w": [{ stroke: [Z, Mf, Tf, Ef] }],
        stroke: [{ stroke: [`none`, ...E()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Xf(...e) {
  return Yf(wd(e));
}
var Zf = { veg: `border-veg text-veg`, jain: `border-jain text-jain` };
function Qf({ diet: e, withLabel: t = !1, className: n }) {
  let { t: r } = dd();
  return (0, V.jsxs)(`span`, {
    className: Xf(
      `inline-flex items-center gap-1.5 text-xs font-bold`,
      Zf[e],
      n,
    ),
    title: r(e),
    children: [
      (0, V.jsx)(`span`, {
        className: Xf(
          `grid size-4 shrink-0 place-items-center rounded-[5px] border-2 bg-card`,
          Zf[e],
        ),
        children: (0, V.jsx)(`span`, {
          className: Xf(
            `size-1.5`,
            e === `veg` && `rounded-full bg-veg`,
            e === `jain` && `rotate-45 bg-jain`,
          ),
        }),
      }),
      t && (0, V.jsx)(`span`, { children: r(e) }),
    ],
  });
}
function $f() {
  let {
      t: e,
      lang: t,
      cart: n,
      count: r,
      subtotal: i,
      tax: a,
      total: o,
      add: s,
      remove: c,
      clear: l,
    } = dd(),
    [u, d] = (0, B.useState)(!1),
    f = Array.from(
      new Set(
        n
          .flatMap((e) => ed(e.id)?.combos ?? [])
          .filter((e) => !n.some((t) => t.id === e)),
      ),
    )
      .map((e) => $u.find((t) => t.id === e))
      .filter(Boolean)
      .slice(0, 3);
  return (0, V.jsxs)(V.Fragment, {
    children: [
      u &&
        (0, V.jsx)(`div`, {
          className: `fixed inset-0 z-40 bg-background/70 backdrop-blur-sm`,
          onClick: () => d(!1),
          "aria-hidden": `true`,
        }),
      (0, V.jsx)(`div`, {
        className: `pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 sm:p-5`,
        children: (0, V.jsxs)(`div`, {
          className: `pointer-events-auto w-full max-w-3xl`,
          children: [
            u &&
              (0, V.jsxs)(`div`, {
                className: `clay mb-3 max-h-[65vh] overflow-y-auto rounded-4xl bg-card p-5`,
                children: [
                  (0, V.jsxs)(`div`, {
                    className: `mb-4 flex items-center justify-between`,
                    children: [
                      (0, V.jsx)(`h2`, {
                        className: `text-xl font-extrabold`,
                        children: e(`yourOrder`),
                      }),
                      (0, V.jsx)(`button`, {
                        type: `button`,
                        onClick: () => d(!1),
                        "aria-label": e(`close`),
                        className: `clay-sm clay-press grid size-9 place-items-center rounded-full bg-muted`,
                        children: (0, V.jsx)(Cd, { width: 16, height: 16 }),
                      }),
                    ],
                  }),
                  n.length === 0
                    ? (0, V.jsxs)(`div`, {
                        className: `clay-inset rounded-3xl bg-muted px-5 py-8 text-center`,
                        children: [
                          (0, V.jsx)(`p`, {
                            className: `font-bold`,
                            children: e(`emptyCart`),
                          }),
                          (0, V.jsx)(`p`, {
                            className: `mt-1 text-sm text-muted-foreground`,
                            children: e(`emptyCartHint`),
                          }),
                        ],
                      })
                    : (0, V.jsxs)(V.Fragment, {
                        children: [
                          (0, V.jsx)(`ul`, {
                            className: `space-y-3`,
                            children: n.map((n) => {
                              let r = ed(n.id);
                              if (!r) return null;
                              let i = td(r, n.variant);
                              return (0, V.jsxs)(
                                `li`,
                                {
                                  className: `clay-sm flex items-center gap-3 rounded-3xl bg-background p-2.5`,
                                  children: [
                                    (0, V.jsx)(`img`, {
                                      src: r.image,
                                      alt: r.name[t],
                                      loading: `lazy`,
                                      width: 800,
                                      height: 600,
                                      className: `size-14 shrink-0 rounded-2xl object-cover`,
                                    }),
                                    (0, V.jsxs)(`div`, {
                                      className: `min-w-0 flex-1`,
                                      children: [
                                        (0, V.jsxs)(`div`, {
                                          className: `flex items-center gap-2`,
                                          children: [
                                            (0, V.jsx)(Qf, { diet: r.diet }),
                                            (0, V.jsx)(`span`, {
                                              className: `truncate font-bold`,
                                              children: r.name[t],
                                            }),
                                          ],
                                        }),
                                        (0, V.jsxs)(`span`, {
                                          className: `text-sm text-muted-foreground`,
                                          children: [
                                            r.halfPrice
                                              ? `${e(n.variant)} · `
                                              : ``,
                                            nd(i),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(`div`, {
                                      className: `clay-inset flex items-center gap-1 rounded-full bg-muted p-1`,
                                      children: [
                                        (0, V.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => c(r.id, n.variant),
                                          "aria-label": `decrease`,
                                          className: `clay-press grid size-7 place-items-center rounded-full bg-card`,
                                          children: (0, V.jsx)(bd, {
                                            width: 14,
                                            height: 14,
                                          }),
                                        }),
                                        (0, V.jsx)(`span`, {
                                          className: `min-w-5 text-center text-sm font-bold`,
                                          children: n.qty,
                                        }),
                                        (0, V.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => s(r.id, n.variant),
                                          "aria-label": `increase`,
                                          className: `clay-press grid size-7 place-items-center rounded-full bg-primary text-primary-foreground`,
                                          children: (0, V.jsx)(xd, {
                                            width: 14,
                                            height: 14,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsx)(`span`, {
                                      className: `w-16 shrink-0 text-right font-extrabold`,
                                      children: nd(i * n.qty),
                                    }),
                                  ],
                                },
                                `${n.id}|${n.variant}`,
                              );
                            }),
                          }),
                          f.length > 0 &&
                            (0, V.jsxs)(`div`, {
                              className: `mt-5`,
                              children: [
                                (0, V.jsx)(`h3`, {
                                  className: `mb-2 text-sm font-bold text-muted-foreground`,
                                  children: e(`pairsWith`),
                                }),
                                (0, V.jsx)(`div`, {
                                  className: `flex flex-wrap gap-2`,
                                  children: f.map((e) =>
                                    (0, V.jsxs)(
                                      `button`,
                                      {
                                        type: `button`,
                                        onClick: () => s(e.id),
                                        className: `clay-sm clay-press flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm font-bold text-secondary-foreground`,
                                        children: [
                                          (0, V.jsx)(xd, {
                                            width: 14,
                                            height: 14,
                                          }),
                                          e.name[t],
                                          (0, V.jsx)(`span`, {
                                            className: `opacity-70`,
                                            children: nd(e.price),
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          (0, V.jsxs)(`dl`, {
                            className: `clay-inset mt-5 space-y-2 rounded-3xl bg-muted p-4 text-sm`,
                            children: [
                              (0, V.jsxs)(`div`, {
                                className: `flex justify-between`,
                                children: [
                                  (0, V.jsx)(`dt`, { children: e(`subtotal`) }),
                                  (0, V.jsx)(`dd`, {
                                    className: `font-bold`,
                                    children: nd(i),
                                  }),
                                ],
                              }),
                              (0, V.jsxs)(`div`, {
                                className: `flex justify-between`,
                                children: [
                                  (0, V.jsx)(`dt`, { children: e(`taxes`) }),
                                  (0, V.jsx)(`dd`, {
                                    className: `font-bold`,
                                    children: nd(a),
                                  }),
                                ],
                              }),
                              (0, V.jsxs)(`div`, {
                                className: `flex justify-between border-t pt-2 text-base`,
                                children: [
                                  (0, V.jsx)(`dt`, {
                                    className: `font-extrabold`,
                                    children: e(`total`),
                                  }),
                                  (0, V.jsx)(`dd`, {
                                    className: `font-extrabold`,
                                    children: nd(o),
                                  }),
                                ],
                              }),
                              (0, V.jsx)(`p`, {
                                className: `pt-1 text-xs text-muted-foreground`,
                                children: e(`serviceNote`),
                              }),
                            ],
                          }),
                          (0, V.jsx)(`p`, {
                            className: `mt-3 text-center text-sm text-muted-foreground`,
                            children: e(`showWaiter`),
                          }),
                          (0, V.jsx)(`button`, {
                            type: `button`,
                            onClick: l,
                            className: `clay-press mx-auto mt-3 block rounded-full px-4 py-2 text-sm font-bold text-muted-foreground underline-offset-4 hover:underline`,
                            children: e(`clearAll`),
                          }),
                        ],
                      }),
                ],
              }),
            (0, V.jsxs)(`button`, {
              type: `button`,
              onClick: () => d((e) => !e),
              className: `clay clay-press flex w-full items-center justify-between gap-4 rounded-full bg-primary px-5 py-4 text-primary-foreground`,
              children: [
                (0, V.jsxs)(`span`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, V.jsx)(Sd, { width: 20, height: 20 }),
                    (0, V.jsxs)(`span`, {
                      className: `text-left`,
                      children: [
                        (0, V.jsx)(`span`, {
                          className: `block text-xs font-semibold opacity-80`,
                          children: e(`billEstimate`),
                        }),
                        (0, V.jsxs)(`span`, {
                          className: `block text-sm font-bold`,
                          children: [r, ` `, e(r === 1 ? `item` : `items`)],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, V.jsx)(`span`, {
                  className: `text-xl font-extrabold`,
                  children: nd(o),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function ep() {
  return (0, V.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, V.jsxs)(`div`, {
      className: `clay max-w-md rounded-4xl bg-card p-8 text-center`,
      children: [
        (0, V.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, V.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, V.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, V.jsx)(`div`, {
          className: `mt-6`,
          children: (0, V.jsx)(wc, {
            to: `/`,
            className: `clay-sm clay-press inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function tp({ error: e, reset: t }) {
  console.error(e);
  let n = ks();
  return (
    (0, B.useEffect)(() => {
      wu(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, V.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, V.jsxs)(`div`, {
        className: `clay max-w-md rounded-4xl bg-card p-8 text-center`,
        children: [
          (0, V.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, V.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, V.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, V.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `clay-sm clay-press inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground`,
                children: `Try again`,
              }),
              (0, V.jsx)(`a`, {
                href: `/`,
                className: `clay-sm clay-press inline-flex items-center justify-center rounded-full bg-muted px-5 py-2.5 text-sm font-bold text-foreground`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var np = Oc()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Chapati.com — Hotel & Restaurant Digital Menu` },
      {
        name: `description`,
        content: `Chapati.com Hotel & Restaurant pure veg menu with photos, Hindi/English, ratings and a live bill estimate.`,
      },
      { name: `author`, content: `Chapati.com Hotel & Restaurant` },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Cu },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      {
        rel: `preconnect`,
        href: `https://fonts.gstatic.com`,
        crossOrigin: `anonymous`,
      },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap`,
      },
      { rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
    ],
  }),
  shellComponent: rp,
  component: ip,
  notFoundComponent: ep,
  errorComponent: tp,
});
function rp({ children: e }) {
  return (0, V.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, V.jsx)(`head`, { children: (0, V.jsx)(rl, {}) }),
      (0, V.jsxs)(`body`, {
        children: [e, (0, V.jsx)(il, {}), (0, V.jsx)(Su, {})],
      }),
    ],
  });
}
function ip() {
  let { queryClient: e } = np.useRouteContext();
  return (0, V.jsx)(ou, {
    client: e,
    children: (0, V.jsxs)(ud, {
      children: [
        (0, V.jsx)(`div`, {
          className: `min-h-screen pb-32`,
          children: (0, V.jsx)(Wc, {}),
        }),
        (0, V.jsx)($f, {}),
      ],
    }),
  });
}
var ap = `modulepreload`,
  op = function (e) {
    return `/` + e;
  },
  sp = {},
  cp = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = op(t, n)), (t = s(t)), t in sp)) return;
          sp[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : ap),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  lp = jc(`/`)({
    head: () => ({
      meta: [
        { title: `Chapati.com — Hotel & Restaurant Digital Menu` },
        {
          name: `description`,
          content: `Pure veg menu at Chapati.com Hotel & Restaurant — Indian, Chinese, South Indian, thali, rice and sweets with photos, Hindi/English, ratings and a live bill estimate.`,
        },
        {
          property: `og:title`,
          content: `Chapati.com — Hotel & Restaurant Digital Menu`,
        },
        {
          property: `og:description`,
          content: `Browse the full Chapati.com menu with half/full prices, photos, reviews and a running bill estimate.`,
        },
      ],
    }),
    component: Nc(
      () => cp(() => import(`./routes-DzVLoBkQ.js`), __vite__mapDeps([0, 1])),
      `component`,
    ),
  }),
  up = jc(`/dish/$dishId`)({
    loader: ({ params: e }) => {
      let t = ed(e.dishId);
      if (!t) throw ot();
      return { name: t.name.en, description: t.description.en };
    },
    head: ({ loaderData: e }) => {
      if (!e)
        return {
          meta: [
            { title: `Dish unavailable — Chapati.com` },
            { name: `robots`, content: `noindex` },
          ],
        };
      let t = `${e.name} — Chapati.com Menu`;
      return {
        meta: [
          { title: t },
          { name: `description`, content: e.description },
          { property: `og:title`, content: t },
          { property: `og:description`, content: e.description },
        ],
      };
    },
    component: Nc(
      () =>
        cp(() => import(`./dish._dishId-Bm-mzvcA.js`), __vite__mapDeps([2, 1])),
      `component`,
    ),
  }),
  dp = {
    IndexRoute: lp.update({ id: `/`, path: `/`, getParentRoute: () => np }),
    DishDishIdRoute: up.update({
      id: `/dish/$dishId`,
      path: `/dish/$dishId`,
      getParentRoute: () => np,
    }),
  },
  fp = np._addFileChildren(dp),
  pp = () =>
    Yc({
      routeTree: fp,
      context: { queryClient: new iu() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function mp() {
  let e = await pp(),
    t;
  if (dl) {
    let n = await dl.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else
    ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(cs),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await ds(e)),
    e
  );
}
var hp = mp;
async function gp() {
  let e = await hp();
  return (window.$_TSR?.h(), e);
}
var _p;
function vp() {
  return (
    (_p ||= gp()),
    (0, V.jsx)(bs, {
      promise: _p,
      children: (e) => (0, V.jsx)(Qc, { router: e }),
    })
  );
}
var yp = g();
(0, B.startTransition)(() => {
  (0, yp.hydrateRoot)(
    document,
    (0, V.jsx)(B.StrictMode, { children: (0, V.jsx)(vp, {}) }),
  );
});
export {
  vs as _,
  xd as a,
  dd as c,
  $u as d,
  nd as f,
  wc as g,
  td as h,
  Cd as i,
  id as l,
  rd as m,
  Qf as n,
  bd as o,
  ed as p,
  Xf as r,
  yd as s,
  up as t,
  Gu as u,
  u as v,
  c as y,
};
