const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/index-B-lJTUxY.js", "assets/index-CdnN5xVe.css"]),
) => i.map((i) => d[i]);
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = e(i);
    fetch(i.href, l);
  }
})();
function m(t, n, ...e) {
  let o = [];
  if (n && n.children != null) {
    const i = n.children;
    if (Array.isArray(i))
      if (
        i.length > 0 &&
        !Array.isArray(i[0]) &&
        typeof i[0] == "string" &&
        typeof i[1] == "object" &&
        i.length % 3 === 0
      )
        for (let l = 0; l < i.length; l += 3)
          o.push([i[l], i[l + 1] || {}, i[l + 2] || []]);
      else o = i;
    else o.push(i);
  }
  return (
    n == null || delete n.children,
    typeof t == "string" ? [t, n || {}, o] : t(n || {}, ...o)
  );
}
function qt(t, n) {
  if (!t.length || t.length !== 3 || typeof t == "string")
    return document.createTextNode(t.toString());
  t[1] && t[1].xmlns
    ? (n = t[1].xmlns)
    : t[0] === "math"
      ? (n = "http://www.w3.org/1998/Math/MathML")
      : t[0] === "svg" && (n = "http://www.w3.org/2000/svg");
  var e = t[1],
    o = t[2],
    i = document.createElementNS(n, t[0]),
    l;
  if (e)
    for (var a in e)
      a === "onbuild"
        ? ((l = e[a]), delete e[a])
        : a[0] == "o" && a[1] == "n"
          ? i.addEventListener(a.slice(2).toLowerCase(), e[a])
          : a in i
            ? (i[a] = e[a])
            : i.setAttribute(a, e[a] + "");
  if (o)
    for (var c = 0, d = o.length; c < d; c++) {
      var u = o[c];
      u && (u instanceof HTMLElement || (u = qt(u, n)), i.appendChild(u));
    }
  return (l && l({ target: i }), i);
}
function _e(t) {
  return qt(t, "http://www.w3.org/1999/xhtml");
}
function _o(t, n) {
  var e = _e(n);
  t.replaceChildren(e);
}
function W(t) {
  return { val: t };
}
W.Unwrap = (t) => {
  if (t.v === void 0) throw "XTIFY: Box is not linked to a component!";
  return [
    new Proxy(
      {},
      {
        get(e, o) {
          return o === Symbol.toPrimitive
            ? () => t.v
            : o === "toString"
              ? () => String(t.v)
              : o === "textContent"
                ? () => String(t.v)
                : t.v;
        },
      },
    ),
    (e) => {
      t.val = e;
    },
  ];
};
function Fn(t, n, e) {
  return [t, n, e];
}
function Eo(t) {
  const [n, ...e] = t;
  return n &&
    typeof n == "object" &&
    !Array.isArray(n) &&
    !(n instanceof HTMLElement)
    ? [n, e]
    : [null, t];
}
function H(t) {
  return (...n) => {
    const e = {
      _FN_: null,
      _EL_: null,
      _OR_: null,
      Props: null,
      Children: [],
      set Tag(o) {
        ((e._TG_ = o), __xtify__._TG_.set(o, e));
      },
      get Tag() {
        if (!e._TG_) throw TypeError("XTIFY: Tag is not set!");
        return e._TG_;
      },
      Use: (o) => {
        (o._ ||
          ((o.v = o.val),
          (o._ = []),
          Object.defineProperty(o, "val", {
            set: function (i) {
              ((o.v = i),
                o._.forEach((l) => {
                  let a = _e(l._FN_());
                  (l._EL_.replaceWith(a), (l._EL_ = a));
                }));
            },
            get: function () {
              return o.v;
            },
            configurable: !0,
          })),
          o._.push(e));
      },
      Box: (o) => ({
        v: o,
        set val(i) {
          if (((this.v = i), !!e._FN_)) {
            var l = _e(e._FN_());
            (e._EL_.replaceWith(l), (e._EL_ = l));
          }
        },
        get val() {
          return this.v;
        },
      }),
      Wake: (o) => {
        if (e._FN_) {
          var i = _e(e._FN_());
          (e._EL_ && (e._EL_.replaceWith(i), (e._EL_ = i)), o && o(i));
        }
      },
    };
    if ((([e.Props, e.Children] = Eo(n)), e.RejectChildren && e.Children))
      throw TypeError(
        "XTIFY: Tried to add a children to Component with RejectChildren property!",
      );
    if (((e._FN_ = t(e)), !e._FN_))
      throw TypeError("XTIFY: Init function is returning null or undefined!");
    if (((e._OR_ = e._FN_()), (e._EL_ = _e(e._OR_)), !e._EL_))
      throw TypeError("XTIFY: Render function is returning null or undefined!");
    return e._EL_;
  };
}
const bo = "modulepreload",
  So = function (t) {
    return "/" + t;
  },
  Ln = {},
  re = function (n, e, o) {
    let i = Promise.resolve();
    if (e && e.length > 0) {
      let a = function (u) {
        return Promise.all(
          u.map((f) =>
            Promise.resolve(f).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const c = document.querySelector("meta[property=csp-nonce]"),
        d =
          (c == null ? void 0 : c.nonce) ||
          (c == null ? void 0 : c.getAttribute("nonce"));
      i = a(
        e.map((u) => {
          if (((u = So(u)), u in Ln)) return;
          Ln[u] = !0;
          const f = u.endsWith(".css"),
            p = f ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${u}"]${p}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = f ? "stylesheet" : bo),
            f || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = u),
            d && h.setAttribute("nonce", d),
            document.head.appendChild(h),
            f)
          )
            return new Promise((v, g) => {
              (h.addEventListener("load", v),
                h.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${u}`)),
                ));
            });
        }),
      );
    }
    function l(a) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = a), window.dispatchEvent(c), !c.defaultPrevented))
        throw a;
    }
    return i.then((a) => {
      for (const c of a || []) c.status === "rejected" && l(c.reason);
      return n().catch(l);
    });
  },
  ge = [];
function Ao(t) {
  ge.push(t);
}
const Io = Object.fromEntries(
    Object.entries(
      Object.assign({
        "../../src/pages/404/index.tsx": () =>
          re(() => import("./index-DkjdZLlk.js"), []),
        "../../src/pages/about/index.tsx": () =>
          re(() => Promise.resolve().then(() => T1), void 0),
        "../../src/pages/main/index.tsx": () =>
          re(() => Promise.resolve().then(() => o1), void 0),
        "../../src/pages/options/index.tsx": () =>
          re(() => Promise.resolve().then(() => x1), void 0),
        "../../src/pages/post/index.tsx": () =>
          re(() => Promise.resolve().then(() => ju), void 0),
        "../../src/pages/setup/index.tsx": () =>
          re(() => import("./index-B-lJTUxY.js"), __vite__mapDeps([0, 1])),
        "../../src/pages/share/index.tsx": () =>
          re(() => Promise.resolve().then(() => V1), void 0),
      }),
    ).map(([t, n]) => [
      t.replace("../../src/pages/", "").replace(/\/index\.[^.]+$/, ""),
      n,
    ]),
  ),
  Po = H((t) => {
    var p, h, v, g, y;
    var n = "";
    const e = t.Box("/"),
      o = t.Box(null);
    function i(x) {
      return x.elem && typeof x.elem == "function"
        ? x.elem
        : (...T) => {
            (x.page ? Io[x.page]() : re(() => import(`${x.src}`), []))
              .catch((E) => {
                throw E;
              })
              .then((E) => {
                ((c[x.path].elem = E.default), t.Wake());
              });
            const C = c[n];
            return C ? C.elem(a) : null;
          };
    }
    var l;
    (p = t.Props) != null && p.global
      ? (window.addEventListener("popstate", () => {
          ((n = e.val),
            (e.val = window.location.pathname + window.location.hash),
            (o.val = window.history.state),
            ge.forEach((x) => x()));
        }),
        window.addEventListener("hashchange", () => {
          ((n = e.val),
            (e.val = window.location.pathname + window.location.hash),
            (o.val = window.history.state),
            ge.forEach((x) => x()));
        }),
        (l = window.history),
        (e.val = window.location.pathname + window.location.hash),
        (o.val = window.history.state))
      : (l = {
          _s: [[e.val, {}]],
          _i: 0,
          pushState: (x, T, C) => {
            (l._i < l._s.length - 1 &&
              l._s.splice(l._i + 1, l._s.length - l._i - 1),
              l._s.push([C, x]),
              l._i++);
          },
          back: () => {
            l._i <= 0 ||
              ((l._i = Math.max(0, l._i - 1)),
              (e.val = l._s[l._i][0]),
              (o.val = l._s[l._i][1]));
          },
          forward: () => {
            l._i >= l._s.length - 1 ||
              (l._i++, (e.val = l._s[l._i][0]), (o.val = l._s[l._i][1]));
          },
        });
    const a = {
      goto: (x, T) => {
        (a.emit("nav", { router: a, url: x, lastUrl: n, data: T }),
          l.pushState(T, "", x),
          (n = e.val),
          (e.val = x),
          T && (T.val = T),
          ge.forEach((C) => C()));
      },
      back: () => {
        (l.back(),
          a.emit("back", { path: e.val, data: o.val, lastPath: n }),
          console.log(window.location),
          ge.forEach((x) => x()));
      },
      forward: () => {
        (l.forward(),
          a.emit("forward", { path: e.val, data: o.val, lastPath: n }),
          ge.forEach((x) => x()));
      },
      on: (x, T) => {
        (a._listeners[x] || (a._listeners[x] = []), a._listeners[x].push(T));
      },
      off: (x, T) => {
        a._listeners[x] &&
          (a._listeners[x] = a._listeners[x].filter((C) => C !== T));
      },
      emit: (x, T) => {
        a._listeners[x] && a._listeners[x].forEach((C) => C(T));
      },
      wake: () => {
        t.Wake();
      },
      path: e,
      params: {},
      data: o,
      _listeners: {},
    };
    ((h = t.Props) != null &&
      h.box &&
      (((v = t.Props) == null ? void 0 : v.box).val = a),
      (g = t.Props) != null && g.onnav && a.on("nav", t.Props.onnav));
    const c = {},
      d = [];
    function u(x, T) {
      const C = d[T].path,
        E = C.match(/\/[^\/]+/g),
        b = {};
      function M() {
        return ((a.params = b), C);
      }
      if (E) {
        for (let R = 0; R < E.length; R++) {
          const F = x[R],
            I = E[R];
          let k = !1;
          if (F == I) k = !0;
          else if (I.startsWith("/:") && F)
            ((k = !0), I.match(/\/:([^\/]+)/), (b[I.slice(2)] = F.slice(1)));
          else if (I.startsWith("/*")) k = !0;
          else if (I.startsWith("/**")) return M();
          if (!k) return;
        }
        return M();
      }
    }
    function f(x) {
      const T = x.match(/\/[^\/]+/g) || ["/"];
      for (let C = 0; C < d.length; C++) {
        const E = u(T, C);
        if (E) return i(c[E])({ router: a });
      }
      return Fn("h1", {}, ["404 - Page not found!"]);
    }
    return (
      (y = t.Children) == null ||
        y.forEach((x) => {
          ((c[x.path] = x), d.push(x));
        }),
      (t.Tag = "Router"),
      () =>
        Fn(t.Tag, t.Props, [c[e.val] ? i(c[e.val])({ router: a }) : f(e.val)])
    );
  });
function Te(t) {
  return t;
}
window.__xtify__ = { _S_: new Set(), _OS_: [], _TG_: new Map() };
const Mo = "_comp_10vhx_1",
  wo = "_tab_10vhx_11",
  Ro = "_powered_10vhx_23",
  fe = { comp: Mo, tab: wo, powered: Ro },
  ko = "_comp_1k8z2_3",
  Do = { comp: ko },
  Fo = H(
    (t) => () =>
      m(
        "span",
        {
          "dataset-logo": !0,
          class: Do.comp,
          onclick: () => {
            var n, e, o;
            ((e = (n = t.Props) == null ? void 0 : n.router.val) == null ||
              e.goto("/rixa/"),
              (o = t.Props) == null || o.fn());
          },
          children: [
            m(
              "span",
              { children: "RI" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/components/Logo.comp.tsx",
                lineNumber: 8,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "i",
              { className: "bi bi-twitter-x" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/components/Logo.comp.tsx",
                lineNumber: 8,
                columnNumber: 24,
              },
              void 0,
            ),
            "A",
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/components/Logo.comp.tsx",
          lineNumber: 7,
          columnNumber: 17,
        },
        void 0,
      ),
  ),
  Lo = H(
    (t) => (
      Ao(() => t.Wake()),
      () => {
        var e, o;
        var n =
          (o = (e = t.Props) == null ? void 0 : e.router.val) == null
            ? void 0
            : o.path.val;
        return (
          n || (setTimeout(() => t.Wake(), 100), (n = "/rixa/")),
          m(
            "nav",
            {
              class: fe.comp,
              children: [
                m(
                  Fo,
                  { router: t.Props.router, fn: () => t.Wake() },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 24,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: fe.tab,
                    tabIndex: 1,
                    onclick: () => {
                      var i;
                      return (i = t.Props.router.val) == null
                        ? void 0
                        : i.goto("/rixa/");
                    },
                    children: [
                      m(
                        "i",
                        {
                          class: `bi bi-house-door${n === "/rixa/" ? "-fill" : ""}`,
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 26,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                      m(
                        "span",
                        { children: "Inicio" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 27,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 25,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: fe.tab,
                    tabIndex: 2,
                    onclick: () => {
                      var i;
                      return (i = t.Props.router.val) == null
                        ? void 0
                        : i.goto("/rixa/#options");
                    },
                    children: [
                      m(
                        "i",
                        {
                          class: `bi bi-gear${n === "/rixa/#options" ? "-fill" : ""}`,
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 30,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                      m(
                        "span",
                        { children: "Opções" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 31,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 29,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: fe.tab,
                    tabIndex: 3,
                    onclick: () => {
                      var i;
                      return (i = t.Props.router.val) == null
                        ? void 0
                        : i.goto("/rixa/#share");
                    },
                    children: [
                      m(
                        "i",
                        {
                          class: `bi bi-share${n === "/rixa/#share" ? "-fill" : ""}`,
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 34,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                      m(
                        "span",
                        { children: "Share" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 35,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 33,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: fe.tab,
                    tabIndex: 4,
                    onclick: () => {
                      var i;
                      return (i = t.Props.router.val) == null
                        ? void 0
                        : i.goto("/rixa/#about");
                    },
                    children: [
                      m(
                        "i",
                        {
                          class: `bi bi-info-circle${n === "/rixa/#about" ? "-fill" : ""}`,
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 38,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                      m(
                        "span",
                        { children: "Sobre" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 39,
                          columnNumber: 13,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: fe.tab + " " + fe.powered,
                    onclick: () => window.open("https://gemini.google.com"),
                    children: [
                      m(
                        "div",
                        {
                          children: [
                            m(
                              "img",
                              { src: "/rixa/assets/gemini.svg", alt: "Gemini" },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/components/Topbar.comp.tsx",
                                lineNumber: 44,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            m(
                              "img",
                              {
                                src: "/rixa/assets/xtframe.svg",
                                alt: "XtFrame",
                                height: 128,
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/components/Topbar.comp.tsx",
                                lineNumber: 45,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Topbar.comp.tsx",
                          lineNumber: 43,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                      "Feito com:",
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
                    lineNumber: 42,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/components/Topbar.comp.tsx",
              lineNumber: 23,
              columnNumber: 12,
            },
            void 0,
          )
        );
      }
    ),
  ),
  Uo = "_comp_15ci9_1",
  Vo = "_header_15ci9_21",
  Go = "_newPost_15ci9_46",
  qo = "_account_15ci9_67",
  Bo = "_input_15ci9_82",
  zo = "_msg_15ci9_88",
  Ho = "_btns_15ci9_111",
  $o = "_geminiNot_15ci9_149",
  Jo = "_invisible_15ci9_159",
  Oo = "_disabled_15ci9_163",
  ne = {
    comp: Uo,
    header: Vo,
    newPost: Go,
    account: qo,
    input: Bo,
    msg: zo,
    btns: Ho,
    geminiNot: $o,
    invisible: Jo,
    disabled: Oo,
  };
function Ye(t, n, e) {
  t += "";
  var o = {
      "00": {
        A: {
          env: ["#ff2f2b"],
          clo: ["#fff", "#000"],
          head: ["#fff"],
          mouth: ["#fff", "#000", "#000"],
          eyes: ["#000", "none", "#00FFFF"],
          top: ["#fff", "#fff"],
        },
        B: {
          env: ["#ff1ec1"],
          clo: ["#000", "#fff"],
          head: ["#ffc1c1"],
          mouth: ["#fff", "#000", "#000"],
          eyes: ["#FF2D00", "#fff", "none"],
          top: ["#a21d00", "#fff"],
        },
        C: {
          env: ["#0079b1"],
          clo: ["#0e00b1", "#d1fffe"],
          head: ["#f5aa77"],
          mouth: ["#fff", "#000", "#000"],
          eyes: ["#0c00de", "#fff", "none"],
          top: ["#acfffd", "#acfffd"],
        },
      },
      "01": {
        A: {
          env: ["#a50000"],
          clo: ["#f06", "#8e0039"],
          head: ["#85492C"],
          mouth: ["#000"],
          eyes: ["#000", "#ff9809"],
          top: ["#ff9809", "#ff9809", "none", "none"],
        },
        B: {
          env: ["#40E83B"],
          clo: ["#00650b", "#62ce5a"],
          head: ["#f7c1a6"],
          mouth: ["#6e1c1c"],
          eyes: ["#000", "#ff833b"],
          top: ["#67FFCC", "none", "none", "#ecff3b"],
        },
        C: {
          env: ["#ff2c2c"],
          clo: ["#fff", "#000"],
          head: ["#ffce8b"],
          mouth: ["#000"],
          eyes: ["#000", "#0072ff"],
          top: ["#ff9809", "none", "#ffc809", "none"],
        },
      },
      "02": {
        A: {
          env: ["#ff7520"],
          clo: ["#d12823"],
          head: ["#fee3c5"],
          mouth: ["#d12823"],
          eyes: ["#000", "none"],
          top: ["#000", "none", "none", "#FFCC00", "red"],
        },
        B: {
          env: ["#ff9700"],
          clo: ["#000"],
          head: ["#d2ad6d"],
          mouth: ["#000"],
          eyes: ["#000", "#00ffdc"],
          top: ["#fdff00", "#fdff00", "none", "none", "none"],
        },
        C: {
          env: ["#26a7ff"],
          clo: ["#d85cd7"],
          head: ["#542e02"],
          mouth: ["#f70014"],
          eyes: ["#000", "magenta"],
          top: ["#FFCC00", "#FFCC00", "#FFCC00", "#ff0000", "yellow"],
        },
      },
      "03": {
        A: {
          env: ["#6FC30E"],
          clo: ["#b4e1fa", "#5b5d6e", "#515262", "#a0d2f0", "#a0d2f0"],
          head: ["#fae3b9"],
          mouth: ["#fff", "#000"],
          eyes: ["#000"],
          top: ["#8eff45", "#8eff45", "none", "none"],
        },
        B: {
          env: ["#00a58c"],
          clo: ["#000", "none", "none", "none", "none"],
          head: ["#FAD2B9"],
          mouth: ["#fff", "#000"],
          eyes: ["#000"],
          top: ["#FFC600", "none", "#FFC600", "none"],
        },
        C: {
          env: ["#ff501f"],
          clo: ["#000", "#ff0000", "#ff0000", "#7d7d7d", "#7d7d7d"],
          head: ["#fff3dc"],
          mouth: ["#d2001b", "none"],
          eyes: ["#000"],
          top: ["#D2001B", "none", "none", "#D2001B"],
        },
      },
      "04": {
        A: {
          env: ["#fc0"],
          clo: ["#901e0e", "#ffbe1e", "#ffbe1e", "#c55f54"],
          head: ["#f8d9ad"],
          mouth: ["#000", "none", "#000", "none"],
          eyes: ["#000"],
          top: ["#583D00", "#AF892E", "#462D00", "#a0a0a0"],
        },
        B: {
          env: ["#386465"],
          clo: ["#fff", "#333", "#333", "#333"],
          head: ["#FFD79D"],
          mouth: ["#000", "#000", "#000", "#000"],
          eyes: ["#000"],
          top: ["#27363C", "#5DCAD4", "#314652", "#333"],
        },
        C: {
          env: ["#DFFF00"],
          clo: ["#304267", "#aab0b1", "#aab0b1", "#aab0b1"],
          head: ["#e6b876"],
          mouth: ["#50230a", "#50230a", "#50230a", "#50230a"],
          eyes: ["#000"],
          top: ["#333", "#afafaf", "#222", "#6d3a1d"],
        },
      },
      "05": {
        A: {
          env: ["#a09300"],
          clo: [
            "#c7d4e2",
            "#435363",
            "#435363",
            "#141720",
            "#141720",
            "#e7ecf2",
            "#e7ecf2",
          ],
          head: ["#f5d4a6"],
          mouth: ["#000", "#cf9f76"],
          eyes: [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#000",
            "#000",
          ],
          top: ["none", "#fdff00"],
        },
        B: {
          env: ["#b3003e"],
          clo: [
            "#000",
            "#435363",
            "#435363",
            "#000",
            "none",
            "#e7ecf2",
            "#e7ecf2",
          ],
          head: ["#f5d4a6"],
          mouth: ["#000", "#af9f94"],
          eyes: [
            "#9ff3ff;opacity:0.96",
            "#000",
            "#9ff3ff;opacity:0.96",
            "#000",
            "#2f508a",
            "#000",
            "#000",
            "#000",
            "none",
            "none",
            "none",
            "none",
          ],
          top: ["#ff9a00", "#ff9a00"],
        },
        C: {
          env: ["#884f00"],
          clo: [
            "#ff0000",
            "#fff",
            "#fff",
            "#141720",
            "#141720",
            "#e7ecf2",
            "#e7ecf2",
          ],
          head: ["#c57b14"],
          mouth: ["#000", "#cf9f76"],
          eyes: [
            "none",
            "#000",
            "none",
            "#000",
            "#5a0000",
            "#000",
            "#000",
            "#000",
            "none",
            "none",
            "none",
            "none",
          ],
          top: ["#efefef", "none"],
        },
      },
      "06": {
        A: {
          env: ["#8acf00"],
          clo: ["#ee2829", "#ff0"],
          head: ["#ffce73"],
          mouth: ["#fff", "#000"],
          eyes: ["#000"],
          top: ["#000", "#000", "none", "#000", "#ff4e4e", "#000"],
        },
        B: {
          env: ["#00d2a3"],
          clo: ["#0D0046", "#ffce73"],
          head: ["#ffce73"],
          mouth: ["#000", "none"],
          eyes: ["#000"],
          top: [
            "#000",
            "#000",
            "#000",
            "none",
            "#ffb358",
            "#000",
            "none",
            "none",
          ],
        },
        C: {
          env: ["#ff184e"],
          clo: ["#000", "none"],
          head: ["#ffce73"],
          mouth: ["#ff0000", "none"],
          eyes: ["#000"],
          top: [
            "none",
            "none",
            "none",
            "none",
            "none",
            "#ffc107",
            "none",
            "none",
          ],
        },
      },
      "07": {
        A: {
          env: ["#00deae"],
          clo: ["#ff0000"],
          head: ["#ffce94"],
          mouth: ["#f73b6c", "#000"],
          eyes: ["#e91e63", "#000", "#e91e63", "#000", "#000", "#000"],
          top: ["#dd104f", "#dd104f", "#f73b6c", "#dd104f"],
        },
        B: {
          env: ["#181284"],
          clo: ["#491f49", "#ff9809", "#491f49"],
          head: ["#f6ba97"],
          mouth: ["#ff9809", "#000"],
          eyes: ["#c4ffe4", "#000", "#c4ffe4", "#000", "#000", "#000"],
          top: ["none", "none", "#d6f740", "#516303"],
        },
        C: {
          env: ["#bcf700"],
          clo: ["#ff14e4", "#000", "#14fffd"],
          head: ["#7b401e"],
          mouth: ["#666", "#000"],
          eyes: ["#00b5b4", "#000", "#00b5b4", "#000", "#000", "#000"],
          top: ["#14fffd", "#14fffd", "#14fffd", "#0d3a62"],
        },
      },
      "08": {
        A: {
          env: ["#0df"],
          clo: ["#571e57", "#ff0"],
          head: ["#f2c280"],
          eyes: ["#795548", "#000"],
          mouth: ["#ff0000"],
          top: ["#de3b00", "none"],
        },
        B: {
          env: ["#B400C2"],
          clo: ["#0D204A", "#00ffdf"],
          head: ["#ca8628"],
          eyes: ["#cbbdaf", "#000"],
          mouth: ["#1a1a1a"],
          top: ["#000", "#000"],
        },
        C: {
          env: ["#ffe926"],
          clo: ["#00d6af", "#000"],
          head: ["#8c5100"],
          eyes: ["none", "#000"],
          mouth: ["#7d0000"],
          top: ["#f7f7f7", "none"],
        },
      },
      "09": {
        A: {
          env: ["#4aff0c"],
          clo: ["#101010", "#fff", "#fff"],
          head: ["#dbbc7f"],
          mouth: ["#000"],
          eyes: ["#000", "none", "none"],
          top: ["#531148", "#531148", "#531148", "none"],
        },
        B: {
          env: ["#FFC107"],
          clo: ["#033c58", "#fff", "#fff"],
          head: ["#dbc97f"],
          mouth: ["#000"],
          eyes: ["none", "#fff", "#000"],
          top: ["#FFEB3B", "#FFEB3B", "none", "#FFEB3B"],
        },
        C: {
          env: ["#FF9800"],
          clo: ["#b40000", "#fff", "#fff"],
          head: ["#E2AF6B"],
          mouth: ["#000"],
          eyes: ["none", "#fff", "#000"],
          top: ["#ec0000", "#ec0000", "none", "none"],
        },
      },
      10: {
        A: {
          env: ["#104c8c"],
          clo: ["#354B65", "#3D8EBB", "#89D0DA", "#00FFFD"],
          head: ["#cc9a5c"],
          mouth: ["#222", "#fff"],
          eyes: ["#000", "#000"],
          top: ["#fff", "#fff", "none"],
        },
        B: {
          env: ["#0DC15C"],
          clo: ["#212121", "#fff", "#212121", "#fff"],
          head: ["#dca45f"],
          mouth: ["#111", "#633b1d"],
          eyes: ["#000", "#000"],
          top: ["none", "#792B74", "#792B74"],
        },
        C: {
          env: ["#ffe500"],
          clo: ["#1e5e80", "#fff", "#1e5e80", "#fff"],
          head: ["#e8bc86"],
          mouth: ["#111", "none"],
          eyes: ["#000", "#000"],
          top: ["none", "none", "#633b1d"],
        },
      },
      11: {
        A: {
          env: ["#4a3f73"],
          clo: ["#e6e9ee", "#f1543f", "#ff7058", "#fff", "#fff"],
          head: ["#b27e5b"],
          mouth: ["#191919", "#191919"],
          eyes: ["#000", "#000", "#57FFFD"],
          top: ["#ffc", "#ffc", "#ffc"],
        },
        B: {
          env: ["#00a08d"],
          clo: ["#FFBA32", "#484848", "#4e4e4e", "#fff", "#fff"],
          head: ["#ab5f2c"],
          mouth: ["#191919", "#191919"],
          eyes: ["#000", "#ff23fa;opacity:0.39", "#000"],
          top: ["#ff90f4", "#ff90f4", "#ff90f4"],
        },
        C: {
          env: ["#22535d"],
          clo: ["#000", "#ff2500", "#ff2500", "#fff", "#fff"],
          head: ["#a76c44"],
          mouth: ["#191919", "#191919"],
          eyes: ["#000", "none", "#000"],
          top: ["none", "#00efff", "none"],
        },
      },
      12: {
        A: {
          env: ["#2668DC"],
          clo: ["#2385c6", "#b8d0e0", "#b8d0e0"],
          head: ["#ad8a60"],
          mouth: ["#000", "#4d4d4d"],
          eyes: ["#7fb5a2", "#d1eddf", "#301e19"],
          top: ["#fff510", "#fff510"],
        },
        B: {
          env: ["#643869"],
          clo: ["#D67D1B", "#b8d0e0", "#b8d0e0"],
          head: ["#CC985A", "none0000"],
          mouth: ["#000", "#ececec"],
          eyes: ["#1f2644", "#9b97ce", "#301e19"],
          top: ["#00eaff", "none"],
        },
        C: {
          env: ["#F599FF"],
          clo: ["#2823C6", "#b8d0e0", "#b8d0e0"],
          head: ["#C7873A"],
          mouth: ["#000", "#4d4d4d"],
          eyes: ["#581b1b", "#FF8B8B", "#000"],
          top: ["none", "#9c0092"],
        },
      },
      13: {
        A: {
          env: ["#d10084"],
          clo: ["#efedee", "#00a1e0", "#00a1e0", "#efedee", "#ffce1c"],
          head: ["#b35f49"],
          mouth: ["#3a484a", "#000"],
          eyes: ["#000"],
          top: ["#000", "none", "#000", "none"],
        },
        B: {
          env: ["#E6C117"],
          clo: ["#efedee", "#ec0033", "#ec0033", "#efedee", "#f2ff05"],
          head: ["#ffc016"],
          mouth: ["#4a3737", "#000"],
          eyes: ["#000"],
          top: ["#ffe900", "#ffe900", "none", "#ffe900"],
        },
        C: {
          env: ["#1d8c00"],
          clo: ["#e000cb", "#fff", "#fff", "#e000cb", "#ffce1c"],
          head: ["#b96438"],
          mouth: ["#000", "#000"],
          eyes: ["#000"],
          top: ["#53ffff", "#53ffff", "none", "none"],
        },
      },
      14: {
        A: {
          env: ["#fc0065"],
          clo: ["#708913", "#fdea14", "#708913", "#fdea14", "#708913"],
          head: ["#DEA561"],
          mouth: ["#444", "#000"],
          eyes: ["#000"],
          top: [
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
            "#32393f",
          ],
        },
        B: {
          env: ["#81f72e"],
          clo: ["#ff0000", "#ffc107", "#ff0000", "#ffc107", "#ff0000"],
          head: ["#ef9831"],
          mouth: ["#6b0000", "#000"],
          eyes: ["#000"],
          top: [
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "#FFFAAD",
            "none",
            "none",
            "none",
            "none",
          ],
        },
        C: {
          env: ["#00D872"],
          clo: ["#590D00", "#FD1336", "#590D00", "#FD1336", "#590D00"],
          head: ["#c36c00"],
          mouth: ["#56442b", "#000"],
          eyes: ["#000"],
          top: [
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "#004E4C",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
            "none",
          ],
        },
      },
      15: {
        A: {
          env: ["#111"],
          clo: ["#000", "#00FFFF"],
          head: ["#755227"],
          mouth: ["#fff", "#000"],
          eyes: ["black", "#008;opacity:0.67", "aqua"],
          top: ["#fff", "#fff", "#fff", "#fff", "#fff"],
        },
        B: {
          env: ["#00D0D4"],
          clo: ["#000", "#fff"],
          head: ["#755227"],
          mouth: ["#fff", "#000"],
          eyes: ["black", "#1df7ff;opacity:0.64", "#fcff2c"],
          top: ["#fff539", "none", "#fff539", "none", "#fff539"],
        },
        C: {
          env: ["#DC75FF"],
          clo: ["#000", "#FFBDEC"],
          head: ["#997549"],
          mouth: ["#fff", "#000"],
          eyes: ["black", "black", "aqua"],
          top: ["#00fffd", "none", "none", "none", "none"],
        },
      },
    },
    i = [],
    l = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231">',
    a = "</svg>",
    c =
      '<path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.49,0,0,1,0-163.34Z" style="fill:#01;"/>',
    d =
      '<path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#000;"/>',
    u = "stroke-linecap:round;stroke-linejoin:round;stroke-width:";
  ((i["00"] = []),
    (i["00"].env = c),
    (i["00"].clo =
      '<path d="m141.74 195a114.93 114.93 0 0 1 37.912 16.45l0.07 0.05c-1.17 0.79-2.3601 1.55-3.5601 2.29a115.55 115.55 0 0 1-120.95 0.21q-2.0001-1.23-4.0002-2.54a114.79 114.79 0 0 1 38.002-16.5 116.21 116.21 0 0 1 15.791-2.49v-14.57c1.32 0.22 2.6501 0.39 4.0002 0.51 2.0001 0.19 4.0002 0.28 6.1202 0.29a64.333 64.33 0 0 0 8.8804-0.62c0.67003-0.09 1.3401-0.2 2.0001-0.31v14.69a118 118 0 0 1 15.741 2.54z" style="fill:#fff;"/><path d="m79.292 212a3.4601 3.46 0 0 0 3.8902 5.07 3.3801 3.38 0 0 0 2.1001-1.61 3.4701 3.47 0 0 0-1.2801-4.72 3.4201 3.42 0 0 0-2.6201-0.34 3.5101 3.51 0 0 0-2.0901 1.6zm60.122 0.46a3.4901 3.49 0 0 0 1.21 4.7h0.06a3.4601 3.46 0 0 0 4.7202-1.27l0.07-0.13a3.4601 3.46 0 0 0-1.34-4.6 3.4601 3.46 0 0 0-2.5801-0.32 3.5301 3.53 0 0 0-2.1001 1.61zm9.8004 5.7 5.8602 5.87c-1.39 0.5-2.7901 1-4.2102 1.44l-4.4802-4.47a7.5203 7.52 0 0 1-1.9401 0.81 7.8303 7.83 0 0 1-6.0002-0.79 7.8703 7.87 0 0 1-2.9201-10.69v-0.07a7.8903 7.89 0 0 1 10.77-2.88l0.12 0.07a7.8603 7.86 0 0 1 2.7901 10.62v0.07zm-37.701-2.36-9.5004 9.51v4.9c-1.35-0.16-2.6801-0.33-4.0002-0.54v-6l0.58002-0.58 10.1-10.09a7.8703 7.87 0 1 1 2.8401 2.86zm7.3203-5.91a3.4601 3.46 0 1 0-1.6101 2.1 3.3801 3.38 0 0 0 1.6101-2.1zm-29.741 7.82 3.0901 3.1 0.59002 0.59v7.36c-1.3401-0.26-2.6801-0.55-4.0002-0.87v-4.84l-2.5101-2.51a7.5203 7.52 0 0 1-1.9401 0.81 7.8803 7.88 0 1 1 1.9101-14.43 7.8703 7.87 0 0 1 2.8901 10.75z" style="fill:#1a1a1a;"/>'),
    (i["00"].head = d),
    (i["00"].mouth =
      '<path d="m94.19 136.84h42.632a3.7801 3.78 0 0 1 3.7802 3.78v3.22a15.231 15.23 0 0 1-15.211 15.16h-19.781a15.251 15.25 0 0 1-15.221-15.16v-3.22a3.8002 3.8 0 0 1 3.7802-3.78z" style="fill:#fff;' +
      u +
      '3px;stroke:#1a1a1a;"/><path d="m130.96 136.84v21.16m-30.911-21.16v21.16m10.34-21.16v22.16m10.31-22.2v22.2" style="fill:none;' +
      u +
      '3px;stroke:#1a1a1a;"/>'),
    (i["00"].eyes =
      '<path d="m83.739 83.92h63.533a19.101 19.1 0 0 1 19.051 19 19.111 19.11 0 0 1-19.051 19h-63.533a19.091 19.09 0 0 1-19.001-19 19.091 19.09 0 0 1 19.001-19z" style="fill:#1a1a1a;"/><path d="m140.23 93.54a9.3804 9.38 0 1 0 9.3804 9.38 9.3804 9.38 0 0 0-9.3804-9.38zm-49.402 0a9.3804 9.38 0 1 0 9.3804 9.38 9.3904 9.39 0 0 0-9.3804-9.38z" style="fill:#e6e7e8;"/><rect x="79.795" y="98.627" width="71.471" height="8.5859" ry="4.2929" style="fill:#b3b3b3;"/>'),
    (i["00"].top =
      '<path d="m32.902 67.662c-0.36295 1.7227-6.2342 30.695 5.6133 52.596 4.5843 8.4743 9.0081 13.239 12.75 15.893a67.7 67.7 0 0 1-3.4688-21.35 67.7 67.7 0 0 1 2.332-17.658c-4.4914-2.4646-10.868-6.9012-13.834-13.52-4.1626-9.285-3.6155-14.673-3.3926-15.961zm165.19 0c0.22292 1.2882 0.77005 6.6759-3.3926 15.961-2.9664 6.6183-9.3426 11.055-13.834 13.52a67.7 67.7 0 0 1 2.332 17.658 67.7 67.7 0 0 1-3.4688 21.35c3.7419-2.6532 8.1657-7.4183 12.75-15.893 11.847-21.9 5.9762-50.873 5.6133-52.596z" style="fill:#fff;"/><path d="m115.73 13.191c-7.3787-0.13351-13.509 5.7888-13.631 13.168-0.10128 5.8827 3.4508 10.518 8.0566 12.52 1.061 0.46115 2.1869 0.78009 3.3418 0.95703v8.4291c0.66778-0.02035 1.3358-0.03077 2.0039-0.03125 0.66547-9e-5 1.3309 0.0097 1.9961 0.0293v-8.4115c2.6002-0.38406 5.1586-1.5484 7.3086-3.625 4.2322-4.0878 4.9991-9.8755 3.1582-14.549-1.8407-4.6726-6.3502-8.3834-12.232-8.4863z" style="fill:#fff;"/>'),
    (i["01"] = []),
    (i["01"].env = c),
    (i["01"].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5c0 10.76 11.75 19.48 26.25 19.48s26.25-8.72 26.25-19.48z" style="fill:#1a1a1a;"/><path d="m92.502 194.27v0.70391c0 4.3033 2.4373 8.2583 6.3807 11.183 4.2199 3.1204 10.106 5.0508 16.661 5.0508 6.548 0 12.434-1.9303 16.654-5.0508 3.9434-2.9245 6.388-6.8795 6.388-11.183v-0.67489c1.0768 0.21771 2.1463 0.44994 3.2158 0.69666h-7e-3c1.0695 0.24672 2.1318 0.50798 3.1867 0.791-0.27648 6.103-3.6524 11.553-8.9708 15.493-5.2821 3.9114-12.521 6.328-20.466 6.328-7.9449 0-15.184-2.4165-20.474-6.328-5.333-3.9477-8.7089-9.4194-8.9708-15.544 1.055-0.27577 2.1099-0.53702 3.1722-0.78376 1.0695-0.23947 2.1463-0.46443 3.2304-0.68213z" style="fill:#b3b3b3;"/>'),
    (i["01"].head = d),
    (i["01"].mouth =
      '<path d="m100.35 143.85a7.67 7.67 0 0 0 7.58 7.7v0a7.66 7.66 0 0 0 7.57-7.7 7.66 7.66 0 0 0 7.57 7.7v0a7.67 7.67 0 0 0 7.58-7.7" style="fill:none;' +
      u +
      '6.3998px;stroke:#333;"/>'),
    (i["01"].eyes =
      '<path d="m78.73 111a10.9 10.9 0 0 1 15.19 0m43.16 0a10.9 10.9 0 0 1 15.19 0" style="fill:none;' +
      u +
      '6.1999px;stroke:#333;"/><path d="m79.804 123.74h7.07m57.273 0h7.05" style="fill:none;' +
      u +
      '5.9998px;stroke:#b8b8b8;"/>'),
    (i["01"].top =
      '<path d="m57.534 142.03c-6.9383-31.75-0.57294-52.577 14.174-62.344 22.562-12.283 62.082-12.222 83.484-1.8846 21.348 11.177 22.124 37.396 18.498 63.733 8.1279-14.155 13.164-31.598 14.085-48.902 1.0828-11.795-1.1756-18.866-7.4833-27.972-26.465-37.685-103.45-31.56-129.66-2.8372-7.8504 9.4615-9.6006 17.478-9.275 26.667 1.0024 18.667 6.9688 38.508 16.18 53.54z" style="fill:#b3b3b3;"/><path d="m111.26 3.0423c-6.013 0.1128-12.629 2.6924-15.291 7.9082-1.1676 3.2383-1.6758 6.2069-1.6758 8.8926 0.89228-0.2661 1.8005-0.5164 2.7266-0.7441 3.7502-1.0672 7.4851-1.7135 11.129-1.9981 1.1007-0.086 2.1953-0.1391 3.2773-0.1601h2e-3c5.6969-0.1133 11.09 0.6603 15.904 2.0527 0.0552-3.042-0.70696-5.9824-2.1738-8.5-1.8411-3.1599-4.7033-5.5568-8.4297-6.8262-1.6883-0.4952-3.5163-0.662-5.4688-0.625zm3.0664 17.449c-0.69317-0.01-1.3919-0.01-2.0938 0h-2e-3c-1.1591 0.019-2.3326 0.064-3.5117 0.1386-3.9035 0.246-7.9025 0.8061-11.92 1.7285-15.159 3.0075-26.469 9.9279-22.068 19.682 22.891-8.7773 52.315-10.403 76.023-2.2129 2.1414-9.5529-14.939-19.081-36.428-19.34z" style="fill:#b3b3b3;"/><path d="m165.62 16.981c-0.8575 0-1.9406 0.54389-3.3476 1.3574-7.3382 4.7652-13.452 10.867-19.516 18.363 9.2734 2.1825 17.903 5.6706 25.213 10.604 1.1512-9.1263 1.9137-18.503 0.055-26.996-0.57-2.4184-1.3017-3.3267-2.4043-3.3281zm-104.09 1.6934c-1.1026 0-1.8342 0.91165-2.4043 3.3301-1.8794 8.5869-1.0806 18.078 0.092 27.299 7.0559-4.6638 15.687-8.3667 25.111-10.984-6.043-7.4601-12.139-13.537-19.451-18.285-1.407-0.81353-2.4901-1.3605-3.3477-1.3594z" style="fill:#b3b3b3;"/><path d="m162.45 16.686c-2.3175 2e-3 -4.6276 0.57608-6.8926 1.668-8.4768 6.0155-11.113 13.349-10.133 19.787 10.323 2.7077 19.762 7.0658 27.346 13.279 9.848-4.9363 11.32-17.137 4.6152-25.852-4.7104-6.1222-9.8371-8.8878-14.936-8.8828zm-97.318 4.1387c-2.4569 0.0556-5.1642 0.54474-8.1172 1.5176-13.487 4.4433-19.06 21.215-3.6484 31.84 7.2476-6.0694 16.961-10.896 27.892-14.229 0.2193-3.3241-0.3201-7.0817-1.8691-11.236-2.8049-4.8445-7.2233-7.721-13.221-7.8906-0.3408-0.01-0.6861-0.01-1.0371-2e-3z" style="fill:#b3b3b3;"/>'),
    (i["02"] = []),
    (i["02"].env = c),
    (i["02"].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5c0 10.76 11.75 19.48 26.25 19.48s26.25-8.72 26.25-19.48z" style="fill:#5a5a5a;"/>'),
    (i["02"].head = d),
    (i["02"].mouth =
      '<path d="m115.5 161.71c-8.24 0-14.46-4.15-19.19-11.25 3.37-2.44 6.51-4.57 10-6.79a5.25 5.25 0 0 1 5.48-0.17 28.19 28.19 0 0 1 3.68 2.75 28.19 28.19 0 0 1 3.68-2.75 5.25 5.25 0 0 1 5.48 0.17c3.52 2.22 6.66 4.35 10 6.79-4.74 7.1-11 11.25-19.19 11.25z" style="fill:#5a5a5a;"/>'),
    (i["02"].eyes =
      '<path d="m172.7 90.75h-6.54c-0.14-0.1-0.26-0.22-0.4-0.3-4.48-2.76-22.75-2.11-33.71 1.2-1 0.3-1.91 0.61-2.75 0.94-1.8937 0.79244-3.8739 1.3597-5.9 1.69-5.5051 0.79002-10.403 0.79002-15.908 0-2.0261-0.33034-4.0063-0.89756-5.9-1.69-0.84-0.33-1.76-0.64-2.75-0.94-11-3.31-29.23-4-33.71-1.2-0.13832 0.08869-0.2688 0.18906-0.39 0.3h-6.55c-1.1046 0-2 0.89543-2 2v4.66c-0.0013 0.98185 0.49088 1.8986 1.31 2.44l1.9 1.27c0.59238 0.38889 0.93475 1.0622 0.9 1.77-0.14175 5.4854 0.88072 10.939 3 16 3.58 8.38 16 10.9 24.93 10.9 2.6976 0.0771 5.3921-0.2361 8-0.93 4.35-1.43 8.24-7.36 10.45-12.42 1.7607-3.8506 2.7493-8.009 2.91-12.24 7.3e-4 -0.7138 0.38183-1.3731 1-1.73 3.2281-1.951 6.5798-1.951 9.8079 0 0.61817 0.3569 0.99927 1.0162 1 1.73 0.16067 4.231 1.1493 8.3894 2.91 12.24 2.21 5.06 6.1 11 10.45 12.42 2.6079 0.6939 5.3024 1.0071 8 0.93 8.92 0 21.35-2.52 24.93-10.9 2.1193-5.0614 3.1418-10.515 3-16-0.0348-0.70778 0.30762-1.3811 0.9-1.77l1.9-1.27c0.81913-0.54136 1.3113-1.4582 1.31-2.44v-4.6c0.0336-1.1048-0.83521-2.0274-1.94-2.06z" style="fill:#1a1a1a;' +
      u +
      '2.5;stroke:#b3b3b3;"/>'),
    (i["02"].top =
      '<path d="m124.22 13.61c-19.783 0-36.945 8.0887-39.695 24.106-15.332 0.23539-31.831 2.7712-41.663 15.782-6.0238 7.9604-7.0402 19.901-6.8476 31.724 0.46007 28.503 10.742 64.228-4.3012 89.714 16.584 5.7777 43.086 10.742 73.59 11.662v-8.6558c-1.851-0.35308-3.6592-0.78105-5.4353-1.2732-30.953-8.4632-50.672-36.635-47.259-68.669 1.5514-10.603 4.6221-19.665 10.025-27.69 5.3818-7.9925 13.267-15.717 23.892-21.41 0.40658 0.72757 1.9901 3.5843 2.4074 4.3012 7.5003 12.775 17.986 23.849 33.157 26.866 12.433 2.4609 23.849 3.4666 36.346 1.1555 4.2584-0.78106 10.667-2.3967 14.851-2.4181 14.861 33.404-1.0806 75.035-40.668 87.457-2.2255 0.70616-4.5258 1.316-6.8904 1.8189 0 2.707-0.0428 5.6493-0.0642 8.5274 23.603-0.72757 48.682-4.0444 72.874-11.234-18.521-32.152 0.81315-89.083-10.036-121.46-9.0731-26.973-38.85-40.315-64.282-40.305z" style="fill:#c5c5c5;"/><path d="m33.147 172.32c-2.6535 5.1143-6.088 9.9504-10.1 12.411 7.8427 10.453 17.387 19.516 28.257 26.781 16.038-10.731 35.629-17.055 54-18.606v-9.0089c-30.065-0.94155-56.108-5.8847-72.157-11.577zm164.06 0.55637c-23.731 7.0723-48.361 10.325-71.525 11.042-0.0321 3.1242-0.0535 6.2377-0.0107 9.0517 19.227 1.7226 37.908 7.8534 53.989 18.542 0.0107 0 0.0107 0 0.0214 0.0107 10.731-7.1686 20.179-16.081 27.958-26.374-4.2798-2.3967-7.832-6.9653-10.432-12.272z" style="fill:#c5c5c5;"/><path d="m50.02 46.5c-2.9297 1.9143-6.1313 3.8826-10.154 7.9805-14.091 14.359-16.145 27.701-6.1406 44.018 4.2049 6.8583 6.1414 13.706-0.24609 20.5-7.7143 8.1957-21.559 4.2912-21.537 16.061 0.0214 8.613 15.063 7.9178 22.531 13.984 3.7662 3.0707 5.0836 8.3992 2.0664 12.508-4.2156 5.7456-16.006 7.3715-22.629 8.9336 5.8811 10.843 13.45 20.638 22.355 29.033l0.0039 0.0234 0.0059-0.0137c2e-3 2e-3 0.0038 4e-3 0.0059 6e-3 0.0034-0.0112 0.0063-0.0219 0.0098-0.0332 14.775-12.218 20.268-20.965 49.461-28.434-17.404-10.258-30.68-27.122-24.143-35.34 4.4123-5.5444 5.6612-7.8633 6.4062-12.078 2.3582-13.339-10.208-22.335-9.2363-32.715 1.9432-8.2346 11.379-11.173 16.947-15.115 5.4577-3.9082 9.8014-8.7695 10.799-16.918-13.558-4.8896-17.609-5.8617-36.506-12.4zm140.87 19.357c-3.4404-0.91243-23.311 122.43 4.4121 133.14 8.9661-8.5809 16.552-18.584 22.404-29.658 0-0.31029-25.133-3.9922-25.979-14.018-0.10699-1.1769 0.11822-1.4855 0.86718-2.502 6.6764-9.2122 30.716-11.416 29.646-23.496-0.27818-3.1563-4.1617-5.2334-6.7402-6.4531-12.155-5.767-32.942-9.6494-15.031-24.543 9.2122-7.3505 10.43-8.4323 0.59766-14.691-9.4583-6.0238-9.394-11.993-9.7578-16.326-0.0767-0.93035-0.22089-1.4003-0.41992-1.4531z" style="fill:#c5c5c5;"/><path d="m133.83 39.909c-11.33 1.393-9.5492 16.204-2e-3 16.643-4.5102 10.717 9.0165 16.181 14.441 8.3125 6.562 8.6765 18.596 0.94751 14.457-8.3125 11.718-1.5381 9.2769-16.099 0-16.643 4.503-10.867-9.4883-16.101-14.457-8.3301-6.8832-9.0411-18.509-0.47321-14.439 8.3301z" style="fill:#333;"/><path d="m153.86 48.222c0-3.0528-2.5184-5.5648-5.5791-5.5648-3.0783 0-5.5793 2.512-5.5793 5.5648 0 3.0703 2.501 5.5648 5.5793 5.5648 3.0606 0 5.5791-2.4946 5.5791-5.5648z" style="fill:#f9f9f9;"/>'),
    (i["03"] = []),
    (i["03"].env = c),
    (i["03"].clo =
      '<path d="m141.75 195c13.563 3.1499 26.439 8.7409 38 16.5-38.873 26.001-89.587 26.001-128.46 0 11.561-7.7591 24.437-13.35 38-16.5 8.4869 8.8011 26.21 25.619 26.21 25.619s17.603-16.972 26.25-25.619z" style="fill:#d6d6d6;"/><path d="m109 230.81 1.6836-14.33h9.6328l1.6836 14.33c-2.16 0.12-4.33 0.19-6.51 0.19s-4.35-0.07-6.51-0.19z" style="fill:#5e5e5e;"/><path d="m124.17 210.6h-17.349v5.53a3.8828 3.29 0 0 0 3.8828 3.29h9.583a3.8828 3.29 0 0 0 3.8828-3.29z" style="fill:#535353;"/><path d="m140.57 190.36-25.066 20.245c5.9686 3.2455 11.597 7.0814 16.8 11.45 1.5989 1.3338 3.9762 1.1189 5.31-0.48 0.21005-0.25749 0.38802-0.53956 0.52999-0.84l10.826-23.805-4-6c-0.90256-1.351-2.7298-1.7137-4.08-0.81-0.11612 0.0786-0.22641 0.16549-0.33 0.26z" style="fill:#c6c6c6;"/><path d="m90.434 190.36 25.066 20.245c-5.9686 3.2455-11.597 7.0814-16.8 11.45-1.5989 1.3338-3.9762 1.1189-5.31-0.48-0.21005-0.25749-0.38802-0.53956-0.52999-0.84l-10.826-23.805 4-6c0.90256-1.351 2.7298-1.7137 4.08-0.81 0.11612 0.0786 0.22641 0.16549 0.33 0.26z" style="fill:#c6c6c6;"/>'),
    (i["03"].head = d),
    (i["03"].mouth =
      '<path d="m136.21 147.09a21.77 21.77 0 0 1-40.13 0z" style="fill:#fff;' +
      u +
      '3.4999px;stroke:#000;"/>'),
    (i["03"].eyes =
      '<path d="m145.39 104.7-11.52 11.2h17.26m-65.52-11.2 11.52 11.2h-17.26" style="fill:none;' +
      u +
      '5.4998px;stroke:#000;"/>'),
    (i["03"].top =
      '<path d="m43.891 77.836c-5.1124 28.237 2.1347 61.004 24.792 81.332-6.2362-12.503-9.5362-33.948-9.4887-45.458-0.50203-37.473 41.439-46.335 56.149-17.614 18.8-31.2 52.825-16.872 54.062 13.714 0.56018 13.844-0.43568 25.598-7.0962 48.966 18.372-12.47 28.012-53.959 23.545-80.941-47.486-2.2552-94.831-2.5724-141.96 0z" style="fill:#1a1a1a;"/><path d="m111.26 12.782c-18.508 0.0791-32.594 3.6163-32.594 3.6163 24.513 5.6002 32.807 10.504 31.743 19.835-0.87227 9.702-11.092 10.875-20.811 11.554-5.2548 0.36414-10.949 0.71523-16.391 1.7525-11.862 2.2818-19.946 4.3736-24.447 11.956-1.7012 2.8662-3.7945 10.428-4.8689 16.34h141.96c-5.7242-38.563-32.557-65.073-74.595-65.054z" style="fill:#1a1a1a;"/><path d="m73.292 44.77c-11.788 2.2816-18.923 5.5444-23.394 13.126-2.8484 6.7586-4.8454 13.238-6.0072 19.939h141.96c-1.9772-14.576-6.8677-28.248-19.277-32.098-28.834-6.3308-63.774-6.3553-93.285-0.96761z" style="fill:#1a1a1a;"/><path d="m165.95 35.642c-11.178 21.829-91.89 19.36-103.98 2.3011-9.703 12.267-15.605 25.883-18.079 39.892h141.96c-3.0096-17.158-9.7424-32.688-19.902-42.193z" style="fill:#1a1a1a;"/>'),
    (i["04"] = []),
    (i["04"].env = c),
    (i["04"].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l15.71 15.75h21z" style="fill:#949494;"/><path d="m115.45 211.34-10.55 10.54a2.51 2.51 0 0 1-3.5599 0 2 2 0 0 1-0.26999-0.30994l-18.48-25.4 5.8901-5.8899a2.52 2.52 0 0 1 3.5199-0.0791l23.49 21.14z" style="fill:#c0c0c0;"/><path d="m115.45 211.34 10.55 10.54a2.51 2.51 0 0 0 3.5599 0 2 2 0 0 0 0.26999-0.30994l18.48-25.4-5.8901-5.8899a2.52 2.52 0 0 0-3.4699-0.089l-23.49 21.14z" style="fill:#c0c0c0;"/><path d="m158.41 199.58-10.11-3.2401v29.93q5.1601-1.5299 10.11-3.51zm-75.82 26.66v-29.9l-10.1 3.2401v23.14c3.2901 1.3199 6.67 2.4999 10.1 3.5199z" style="fill:#7c7c7c;"/>'),
    (i["04"].head = d),
    (i["04"].mouth =
      '<path d="m118.05 148.38c-1.5064 0.59192-2.595 2.0264-2.6191 3.9863-0.0574 1.3977 0.53421 3.5611 3.6758 5.7949 8.0544 4.9446 21.507 3.6862 21.255-7.1658-4.664 4.8219-10.021 5.6377-14.773 0.73907-1.2328-1.1599-2.3694-2.4032-3.9294-3.1408-1.0946-0.50424-2.2257-0.61071-3.6096-0.21337z" style="fill:#333;"/><path d="m133.61 154.93c3.0731-0.48816 5.5702-2.8457 5.4438-4.5059-0.47801-4.8311-5.7317-3.0917-4.3369-0.31405-2.8103-1.4445-1.8343-3.8862 0.50427-4.7324 2.0509-0.79942 5.0937 0.34314 6.2002 2.6376 2.2229 7.3422-3.4376 11.68-10.384 12.561z" style="fill:#333;"/><path d="m112.81 148.38c1.5064 0.59192 2.595 2.0264 2.6191 3.9863 0.0574 1.3977-0.53421 3.5611-3.6758 5.7949-8.0544 4.9446-21.507 3.6862-21.255-7.1658 4.664 4.8219 10.021 5.6377 14.773 0.73907 1.2328-1.1599 2.3694-2.4032 3.9294-3.1408 1.0946-0.50424 2.2257-0.61071 3.6096-0.21337z" style="fill:#333;"/><path d="m97.252 154.93c-3.0731-0.48816-5.5702-2.8457-5.4438-4.5059 0.47801-4.8311 5.7317-3.0917 4.3369-0.31405 2.8103-1.4445 1.8343-3.8862-0.50427-4.7324-2.0509-0.79942-5.0937 0.34314-6.2002 2.6376-2.2229 7.3422 3.4376 11.68 10.384 12.561z" style="fill:#333;"/>'),
    (i["04"].eyes =
      '<path d="m131.64 114.09 7.5801-7.5801 7.5801 7.5801m-62.6 0 7.5801-7.5801 7.5799 7.5801" style="fill:none;' +
      u +
      '6.4998px;stroke:#000;"/>'),
    (i["04"].top =
      '<path d="m137.38 11.148c-12.23 1.9593-18.511 14.606-43.436 9.4915-11.285-3.2054-16.406-3.573-20.389 0.58594-4.1548 4.3384-7.033 12.435-9.8184 21.706-2.1354 7.4136-3.7187 14.381-4.7461 21.646h112.7c-3.4878-24.293-10.822-43.281-25.182-51.061-3.5314-1.623-6.5274-2.2959-9.1289-2.3613z" style="fill:#b3b3b3;"/><path d="m114.37 43.383c-19.445 0.088-38.524 2.0724-52.379 5.6992-1.2766 4.5795-2.4317 10.169-3.2285 16.807h113.11c-0.83731-6.0107-1.9164-11.674-3.3184-16.924-15.229-3.8842-34.873-5.6693-54.18-5.582z" style="fill:#e6e6e6;"/><path d="m115.5 55.773c-58.39 0-105.73 15.476-105.73 34.57h0.0312c0 11.295 16.496 21.319 42.126 27.627-0.10331-7.7704 2.788-21.904 5.2734-31.031 6.0935-1.7168 6.9294-1.8971 13.167-2.9919 14.874-2.8256 29.99-4.2037 45.133-4.1153 15.143-0.0884 30.259 1.2897 45.133 4.1153 6.2372 1.0947 7.2065 1.2751 13.3 2.9919 2.4854 9.1267 5.3768 23.26 5.2734 31.031 25.63-6.3082 41.993-16.332 41.993-27.627h0.0312c0-19.093-47.34-34.57-105.73-34.57z" style="fill:#818181;"/><path d="m72.088 83.533c-6.9765 1.1147-13.357 2.856-18.439 4.3477-1.1861 7.415-2.0038 18.858-1.8926 26.293 4.3278-0.62795 10.155-1.3644 13.295-1.6465-0.40554 0.30198 2.7344-17.827 7.0371-28.994zm86.824 0c4.3028 11.167 7.4426 29.296 7.0371 28.994 3.1396 0.28213 8.9671 1.0185 13.295 1.6465 0.11119-7.4351-0.70652-18.878-1.8926-26.293-5.0822-1.4916-11.463-3.2329-18.439-4.3477z" style="fill:#434343;"/>'),
    (i["05"] = []),
    (i["05"].env = c),
    (i["05"].clo =
      '<path d="m141.75 194.98a114.79 114.78 0 0 1 38 16.498 115.53 115.52 0 0 1-128.46 0 114.79 114.78 0 0 1 38-16.498l15.71 15.748h21z" style="fill:#d2d2d2;"/><path d="m70 200.88v20.77c-2.22-0.95325-4.3999-1.9698-6.5399-3.0496h-0.10088v-14.621c2.17-1.1 4.39-2.1399 6.64-3.0996z" style="fill:#505050;"/><path d="m161 200.88v20.77c1.9-0.80986 3.7702-1.6798 5.6201-2.5898l0.0989-0.0494 0.82005-0.40997h0.10088v-14.621c-2.17-1.1-4.39-2.1399-6.6402-3.0996z" style="fill:#505050;"/><polygon transform="matrix(1 0 0 .99987 4e-5 -3e-5)" points="97.32 201.93 115.5 223.72 133.68 201.93" style="fill:#171717;"/><path d="m111.2 230.88 1.31-16.908c0.32992 1.2798 5.6399 1.2798 5.9999 0l1.3201 16.938c-1.4301 0.0494-2.8601 0.089-4.3 0.089s-2.87 0-4.3-0.089z" style="fill:#171717;"/><path d="m115.49 201.79v0.0692l-7.55 12.678-7.0001 11.809-19.19-26.487c0.60999-0.42995 1.22-0.89985 1.8001-1.3899a52 51.993 0 0 0 10.07-10.619l21.79 13.878z" style="fill:#ebebeb;"/><path d="m149.24 199.86-19.08 26.517-7.0001-11.809-7.57-12.678-0.0593-0.10086 21.94-13.998a52.21 52.203 0 0 0 10.08 10.699c0.58013 0.47009 1.1502 0.92002 1.7301 1.3399z" style="fill:#ebebeb;"/>'),
    (i["05"].head = d),
    (i["05"].mouth =
      '<path d="m122.83 151.88a10.49 10.489 0 0 1-14.66 0" style="fill:none;' +
      u +
      '6.1996px;stroke:#333;"/>'),
    (i["05"].eyes =
      '<path d="m70.959 94.985h35.031c2.4086 1e-5 4.3612 1.9523 4.3612 4.3606l-2.5864 17.511c-0.3515 2.3799-1.7218 4.3606-3.8457 4.3606h-30.9c-2.1239-1e-5 -3.8457-1.9523-3.8457-4.3606l-2.5864-17.511c1e-5 -2.4082 1.9526-4.3606 4.3612-4.3606z" style="fill:#1a1a1a;' +
      u +
      '3.0045px;stroke:#333;"/><path d="m160.05 94.985h-35.031c-2.4086 1e-5 -4.3612 1.9523-4.3612 4.3606l2.5864 17.511c0.35149 2.3799 1.7218 4.3606 3.8457 4.3606h30.9c2.1239-1e-5 3.8457-1.9523 3.8457-4.3606l2.5864-17.511c-1e-5 -2.4082-1.9526-4.3606-4.3612-4.3606z" style="fill:#1a1a1a;' +
      u +
      '3.0045px;stroke:#333;"/><path d="m90.607 102.35a4.6337 4.6332 0 1 0 4.6892 4.6337 4.6337 4.6332 0 0 0-4.6892-4.6337zm49.72 0a4.6337 4.6332 0 1 0 4.6444 4.6337 4.6337 4.6332 0 0 0-4.6444-4.6337z" style="fill:#1a1a1a;"/><path d="m70.66 94.985h-11.775" style="fill:none;' +
      u +
      '3.0045px;stroke:#333;"/><path d="m172.13 94.985h-19.484" style="fill:none;' +
      u +
      '3.0045px;stroke:#333;"/><path d="m109.32 106.2c4.2045-2.427 9.3036-1.913 12.353-0.0258" style="fill:none;' +
      u +
      '3.0045px;stroke:#333;"/><path d="m148.33 109.79-5.7626-8.2324" style="fill:none;' +
      u +
      '4;stroke:#fff;"/><path d="m156.27 105-2.403-3.4328" style="fill:none;' +
      u +
      '4;stroke:#fff;"/><path d="m82.748 114.34-8.9489-12.784" style="fill:none;' +
      u +
      '4;stroke:#fff;"/><path d="m91.408 109.79-5.7626-8.2324" style="fill:none;' +
      u +
      '4;stroke:#fff;"/>'),
    (i["05"].top =
      '<path d="m41.835 75.131c-2.8674 12.582 1.2304 27.241 6.0238 39.031 0.25861 0.63658 0.51208 1.3075 0.79989 1.9683 0.71726 1.658 2.1184 3.9751 3.0038 3.9266 0.56895-0.0312 0.71637-1.5512 1.0228-3.1562 2.1988-19.097 8.8981-27.915 15.636-38.107 2.8783-4.0645 3.8616-7.2293 1.0644-9.9325-6.3236-3.5596-14.924-2.8574-21.367-0.67406-3.2312 1.4765-5.2427 3.4773-6.1842 6.9439zm125.65-8.5679c7.65-0.70616 19.714-0.1307 21.694 8.5679 1.455 6.4083 0.26915 17.747-1.0542 24.579-1.1961 5.3203-3.8066 14.231-7.8782 19.75-0.5565 0.44544-0.96888 0.13656-1.4159-1.1606-0.90692-3.0353-1.4298-7.8372-2.2556-10.727-3.4822-12.79-8.2195-21.875-14.429-29.94-5.5782-6.8415-4.2152-9.7207 5.3393-11.069z" style="fill:#4d4d4d;"/><path d="m112.27 73.826c-18.585-7.5217-34.987-14.797-48.939 5.018-4.9752 7.083-3.7876 8.8056-4.9217 0.0749-1.637-12.476-4.7505-34.174 1.9259-45.194 7.6822-12.7 19.323-13.128 31.039-5.3818 10.796 7.7784 24.277 14.647 38.015 12.219 12.732-2.2576 15.835-7.7464 15.707-19.912-0.0215-2.6-0.0963-5.2106-0.2033-7.7999 13.631 3.9267 24.609 14.776 26.513 29.049 0.88804 6.6336 0.26749 12.722-1.9259 19.013-5.9702 17.108-30.119 20.896-45.74 16.841-3.9588-1.0378-7.6822-2.4181-11.47-3.9267z" style="fill:#4d4d4d;"/>'),
    (i["06"] = []),
    (i["06"].env = c),
    (i["06"].clo =
      '<path d="m115.5 231a115 115 0 0 0 64.23-19.5 114.79 114.79 0 0 0-38-16.5l-2.41-9a125.19 125.19 0 0 0-13.32-2.28v8.75q3.52 0.32 7 0.84l-17.5 17.48-17.5-17.48q3.45-0.52 7-0.84v-8.75a125.55 125.55 0 0 0-13.34 2.28l-2.41 9a114.79 114.79 0 0 0-38 16.5 114.94 114.94 0 0 0 64.25 19.5z" style="fill:#646464;"/><path d="m132.98 193.33-36.185 36.155-2.4-0.42 36.108-36.081z" style="fill:#e3e3e3;"/>'),
    (i["06"].head = d),
    (i["06"].mouth =
      '<path d="m127.84 146.73c-2.24 8.93-6.92 15.08-12.34 15.08s-10.1-6.15-12.34-15.08z" style="fill:#fff;' +
      u +
      '2.9999px;stroke:#1a1a1a;"/>'),
    (i["06"].eyes =
      '<path d="m129.31 114.14 20-5.37m-47.66 5.37-20-5.37" style="fill:none;' +
      u +
      '4.9998px;stroke:#1a1a1a;"/>'),
    (i["06"].top =
      '<path d="m169.65 90.998c3.137 11.94 4.9371 36.484-3.4118 58.213l5.129 3.1164c10.044-15.199 14.959-39.163 13.943-61.33z" style="fill:#1a1a1a;"/><path d="m45.081 90.989c-0.88085 4.9304-0.87534 14.953-0.15027 21.75 2.1318 19.98 16.671 42.505 16.671 42.505l5.7352-4.4331s-13.244-31.348-6.0571-52.751c0.52108-1.5517 0.95592-2.916 1.3462-4.1835z" style="fill:#1a1a1a;"/><path d="m117 3.4883c-8.2136-0.19887-19.13 7.933-18.494 9.3516 1.6214 3.6186 11.176 22.55 11.889 23.963h10.148c2.6022-6.3102 11.32-26.531 11.32-26.531s-4.1382-4.138-12.416-6.4375c-0.77605-0.21556-1.5976-0.32513-2.4473-0.3457z" style="fill:#1a1a1a;"/><path d="m115.95 4.5428c-3.1563 0-6.3123 0.57462-9.2165 1.715-5.8084 2.2817-10.532 6.808-12.779 12.245v-5e-3c-1.8166 4.397-2.0233 9.3441-0.58058 13.857 0.69352 2.1687 1.7693 4.2296 3.1533 6.0968h38.893c0.71032-0.95769 1.3441-1.9641 1.8787-3.0144 2.6811-5.2673 2.9296-11.542 0.67253-16.975-2.257-5.4337-6.9893-9.9522-12.802-12.224-2.9064-1.1335-6.0633-1.6987-9.2196-1.6956z" style="fill:#1a1a1a;"/><path d="m92.512 28.125c0.13387 1.4318 0.41877 2.8511 0.85962 4.2306 1.4429 4.5127 4.5278 8.5654 8.6411 11.353 4.1135 2.7873 9.2311 4.2913 14.336 4.2165 5.1052-0.0764 10.168-1.7333 14.181-4.6419 2.8754-2.0834 5.2132-4.7932 6.7665-7.8447 1.2005-2.3586 1.9085-4.9188 2.127-7.5156-15.037-2.6407-31.421-3.4671-46.912 0.20253z" style="fill:#b3b3b3;"/><path d="m34.426 90.63c14.714 4.0779 22.683 6.4085 45.254 7.4257 2.5318-18.185 4.6689-28.672 10.023-38.352 3.2025 13.403 3.8346 25.22 2.9106 42.253l11.172-0.23161c1.4706-11.886 3.8989-29.213 2.1636-42.021 10.416 12.631 11.373 23.624 13.077 39.726 30.174-0.76004 59.808-4.5121 77.845-10.128-10.76-38.608-41.475-55.66-80.38-56.104-38.182-0.45134-74.543 22.405-82.065 57.432z" style="fill:#1a1a1a;"/>'),
    (i["07"] = []),
    (i["07"].env = c),
    (i["07"].clo =
      '<path d="m88.18 194.11c-4.2079 1.021-8.3545 2.2792-12.42 3.7695v26.072a115.5 115.5 0 0 0 79.48 0v-26.072c-4.0858-1.4904-8.2529-2.7486-12.48-3.7695v8.7051c0 9.3888-7.6112 17-17 17h-20.58c-9.3888 0-17-7.6112-17-17v-8.7051z" style="fill:#efefef;"/>'),
    (i["07"].head = d),
    (i["07"].mouth =
      '<polygon points="121.61 160.74 109.39 160.74 115.5 171.31" style="fill:#797979;"/><path d="m132.64 144.06a34.42 34.42 0 0 1-34.24 0" style="fill:none;' +
      u +
      '5.9998px;stroke:#000;"/>'),
    (i["07"].eyes =
      '<path d="m170.25 100c1.69 9.62-4.79 29.23-22.4 29.23-6.81 0-15-3.66-20.23-10-4.34-5.33-7.56-12.87-6.2-19.45 1.63-7.89 7.07-11.45 14.67-12.92a68.16 68.16 0 0 1 12.52-1c10.77 0 19.78 3.61 21.64 14.22z" style="fill:#565656;stroke-width:3.99px;stroke:#000;"/><path d="m60.75 100c-1.69 9.62 4.79 29.23 22.4 29.23 6.81 0 15-3.66 20.23-10 4.34-5.33 7.56-12.87 6.2-19.45-1.63-7.89-7.07-11.45-14.67-12.92a68.16 68.16 0 0 0-12.52-1c-10.77 0-19.78 3.61-21.64 14.22z" style="fill:#565656;stroke-width:3.99px;stroke:#000;"/><line x1="100.2" x2="130.8" y1="87.92" y2="87.92" style="fill:none;' +
      u +
      '3.99px;stroke:#000;"/><path d="m109.87 101.73c0-2.59 2.52-4.69 5.63-4.69s5.63 2.1 5.63 4.69" style="fill:none;stroke-width:3.99px;stroke:#000;"/>'),
    (i["07"].top =
      '<path d="m30.622 70.381c2.0971-3.9374 4.6649-7.9604 7.6822-12.037 3.0172-4.0765 6.0987-7.6929 9.2229-10.817l22.897 22.897c-4.4402 4.4403-8.2278 9.5439-11.213 15.14z" style="fill:#999;"/><path d="m160.58 70.423 22.907-22.897c3.1242 3.1242 6.2056 6.7406 9.2229 10.817 3.0065 4.0765 5.5744 8.0994 7.6715 12.037l-28.578 15.182c-2.9851-5.5958-6.7727-10.689-11.224-15.14z" style="fill:#999;"/><path d="m92.411 15.247c3.8197-0.87736 7.6715-1.5407 11.534-1.9794 4.0765-0.46007 7.9282-0.69546 11.555-0.69546 1.53 0 3.1563 0.0428 4.8682 0.1391l1.851 22.255 5.767-21.57c3.1028 0.37449 6.0666 0.86666 8.8912 1.4658l-10.55 49.763c-1.9259-0.41729-3.702-0.70617-5.3176-0.87736-1.423-0.14979-3.2633-0.22468-5.5102-0.22468-2.2362 0-4.237 0.10699-5.981 0.29958-1.9473 0.22469-3.8732 0.55636-5.767 0.99504z" style="fill:#999;"/><path d="m92.411 15.247c1.9152-0.43869 4.023-0.84526 6.3233-1.2304 2.065-0.34238 4.1514-0.62057 6.2698-0.84525l5.1785 50.565c-1.0913 0.10699-2.1827 0.25679-3.2954 0.43868-0.86665 0.14979-1.9152 0.36378-3.1349 0.64196z" style="fill:#4d4d4d;"/>'),
    (i["08"] = []),
    (i["08"].env = c),
    (i["08"].clo =
      '<path d="m141.89 195a114.79 114.79 0 0 1 38 16.5 115.55 115.55 0 0 1-128.47 0 114.79 114.79 0 0 1 38-16.5l15.75 15.75h21z" style="fill:#353535;"/><path d="m146.4 196.14-17.4 17.44-1.17 1.17h-24.34l-1.18-1.17-17.43-17.44c1.49-0.41 3-0.79 4.51-1.14l4.67-1 12.74 12.74h17.69l12.73-12.74 4.67 1c1.52 0.35 3 0.73 4.51 1.14z" style="fill:#919191;"/>'),
    (i["08"].head = d),
    (i["08"].mouth =
      '<path d="m115.68 160.64c7.08 0 13.11-4.93 15.46-11.84a2.14 2.14 0 0 0-1.51-2.6101 2.3 2.3 0 0 0-0.73995-0.0593h-26.42a2.12 2.12 0 0 0-2.31 1.9099 1.85 1.85 0 0 0 0.0593 0.73995c2.3401 6.9301 8.3802 11.86 15.46 11.86z" style="fill:#2f2f2f;"/>'),
    (i["08"].eyes =
      '<path d="m145.38 95.628c-5.1601 2.2597-11.03 2.2597-16.19 0m-47.29 1.75c5.1755-2.2694 11.065-2.2694 16.24 0" style="fill:none;' +
      u +
      '5.9998px;stroke:#5e5e5e;"/><path d="m90.016 106.28c-4.4506-0.0105-6.6902 5.3657-3.5508 8.5195 3.1394 3.1539 8.5252 0.93887 8.5352-3.5117 0.0063-2.7522-2.2204-4.9898-4.9727-4.9961l-0.011719-0.01172zm47.281 0c-4.4506-0.0105-6.6902 5.3657-3.5508 8.5195 3.1394 3.1539 8.5252 0.93887 8.5352-3.5117 6e-3 -2.7522-2.2204-4.9898-4.9727-4.9961l-0.01171-0.01172z" style="fill:#1a1a1a;"/>'),
    (i["08"].top =
      '<path d="m108.37 22.019c-6.2698-12.829-17.151-13.396-18.949 1.1769-11.448-9.4583-26.021-4.483-20.361 12.422-12.251-7.9282-24.919 1.7761-17.076 20.853-27.08 2.3646-22.715 24.726-10.111 31.435-9.9002 3.3566-10.701 9.4006-8.464 14.497 2.6574 4.7842 9.0126 6.4737 11.545 9.6519-6.624 0.59419-8.4112 5.6011-5.7404 9.5192 1.6896 2.4787 5.2756 4.2218 8.5971 5.5455 1.0485 0.40658 3.702 1.2732 3.9053 2.4181 0.18744 1.2156-6.7884 3.0055-5.7281 5.2612 0.60648 1.4227 1.7764 2.7151 2.6466 3.7156 1.2807 1.6595 10.755 8.0351 9.4583 4.2049-1.0271-3.7234-2.2148-7.4682-3.1456-11.192-1.1662-5.3069-1.7868-10.721-1.102-16.156 1.4223-5.455 5.069-4.4265 7.7837-8.3588 3.5264-5.7505 2.0296-11.614 2.124-13.575 0.107-1.7868 1.5407-1.1876 3.1884-1.4337 4.3868-0.64196 7.0081-2.1185 8.8377-6.2698 0.77035-1.9259 0.62057-9.7578 0.52426-11.78 0.36378-4.6328 4.1835 0 6.548 0.64196 3.2633 0.88805 6.8797 0.21399 9.0731-2.5037 1.7547-2.3753 2.0864-2.8888 4.6114-0.80245 2.6856 2.2148 4.0979 3.1349 7.6929 3.274 5.5637 0.20329 8.7735-6.2698 11.32-5.6386 3.5201 0.87735 3.6057 5.4567 10.261 4.8682 2.386-0.20329 3.8304-0.86665 5.4032-2.6428 0.88805-0.99505 1.958-2.5037 3.4345-2.6214 1.4658-0.1177 2.3218 2.3646 3.0065 3.4452 1.1926 2.6755 4.0295 3.6513 6.2377 3.3168 1.958-0.17119 3.854-1.4115 5.4268-2.4707 0.99679-0.66102 1.8284-0.81128 1.9256 0.2071 0.29592 2.2271 0.0862 7.7025 0.1596 8.4821 0.10556 8.4609 5.37 10.569 13.223 10.333-0.31871 3.7464 0.0583 11.28 5.4353 14.562 3.9481 2.7604 6.6657 1.2732 6.7299 7.8534 7e-3 6.1914-0.43693 13.061-1.2946 18.189-0.69547 4.0444-1.2412 6.4838-2.5251 10.378-0.64196 1.9152-0.81315 1.9687 1.4123 1.0699 7.1472-3.1456 10.539-11.48 8.3562-18.842-0.43869-2.0436 0.84525-1.7226 2.8781-2.6106 9.5248-4.2363 8.1264-11.335-0.75967-14.273 11.988-3.0926 13.886-8.9002 6.6871-15.375 7.3077-5.9168 3.6378-16.177-2.8032-16.991 12.422-7.0937 5.7349-22.062-5.1036-18.499 4.1728-12.037-5.5637-26.203-21.121-16.894 6.9653-11.373 2.065-22.661-12.101-10.785-3.4559-18.382-15.14-16.584-23.902-5.018 0.09435-20.075-16.001-17.42-18.146-2.5892z" style="fill:#1a1a1a;"/><path d="m5.4353 80.502c7.4468 9.1373 15.632 8.8912 15.632 8.8912s-6.0772 3.7983-6.8369 9.8755c-0.75966 6.088 4.5579 9.6295 8.0994 10.646 3.5522 1.0058 7.0937-2.7925 7.0937-2.7925s-5.8312 10.646-1.5193 15.964c4.3012 5.3176 11.908 3.0386 11.908 3.0386s-5.3283 10.132 1.0057 14.187c5.8312 3.7234 18.542 7.6715 20.511 8.2706-6.0666-9.7472-9.576-21.249-9.576-33.575v-0.0428c0-35.201 28.546-63.747 63.747-63.747 35.212 0 63.758 28.546 63.758 63.747 0 12.476-3.5843 24.116-9.7899 33.949h0.53496s13.931-1.0057 16.21-9.3727c2.279-8.3562 0.75967-9.8756 0.75967-9.8756s10.635 2.0329 13.417-7.5966l2.7926-9.6295s10.132 0 10.892-7.083c0.75963-7.0937-7.0295-12.411-7.0295-12.411s11.459 0.82385 14.498-10.453c1.0164-3.7555 0.83456-8.2171 0.1391-12.497-17.665-41.161-58.569-69.995-106.18-69.995-30.632 0-60.034 12.187-81.679 33.831v0.0107c-13.171 13.171-22.833 29.22-28.386 46.66z" style="fill:#1a1a1a;"/>'),
    (i["09"] = []),
    (i["09"].env = c),
    (i["09"].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l13.85 13.85v-1.2h17.86v3.1h5z" style="fill:#333;"/><polygon points="115.36 207.65 123.37 224.2 148.3 196.86 143.08 189.95" style="fill:#fff;"/><polygon points="115.36 207.65 107.35 224.2 82.42 196.86 87.63 189.95" style="fill:#fff;"/>'),
    (i["09"].head = d),
    (i["09"].mouth =
      '<path d="m126.28 149.82c-6.16 2.43-15.52 2.42-21.56 0" style="fill:none;' +
      u +
      '5.9998px;stroke:#1c1c1c;"/>'),
    (i["09"].eyes =
      '<path d="m83.527 103.98v10h10v-10h-10zm53.945 0v10h10v-10h-10z" style="fill:#1a1a1a;"/><path d="m56.621 94.906v11.688h5.3418v6.4922h5.3418v6.1055h5.3223v6.2324h26.846v-6.2324h5.3047v-6.1055h5.1445v-6.0039h11.154v6.0039h5.1446v6.1055h5.3066v6.2324h26.846v-6.2324h5.3203v-6.1055h5.3438v-6.4922h5.3418v-11.688z" style="fill:#1a1a1a;"/><path d="m67.387 100.65v5.9394h5.1992v-5.9394zm5.1992 5.9394v6.4922h5.4238v-6.4922zm5.4238 0h5.1992v-5.9394h-5.1992zm5.1992 0v6.4922h5.4258v-6.4922zm5.4258 6.4922v6.1055h5.1426v-6.1055zm-10.625 0v6.1055h5.1445v-6.1055zm48.281-12.432v5.9394h5.1992v-5.9394zm5.1992 5.9394v6.4922h5.4238v-6.4922zm5.4238 0h5.1992v-5.9394h-5.1992zm5.1992 0v6.4922h5.4258v-6.4922zm5.4258 6.4922v6.1055h5.1426v-6.1055zm-10.625 0v6.1055h5.1445v-6.1055z" style="fill:#fff;"/>'),
    (i["09"].top =
      '<path d="m157.79 67.5a61.31 61.31 0 0 1-42.79 17.43h-55.7c18.16-37.74 68.27-46.85 98.49-17.43z" style="fill:#4d4d4d;"/><path d="m122.93 7.0078c-10.503-0.15729-21.09 1.6448-29.545 5.4316-17.141 7.8999-32.169 23.297-43.973 38.779-5.1703 6.8631-8.7779 13.46-8.1855 18.395 0.93114 12.312 10.372 26.483 11.068 36.9 15.663-72.081 105.99-70.452 124.91-7.0525l4e-3 0.0156c5.616-10.926 8.0682-20.188 8.352-27.653 0.43654-15.607-7.8088-21.149-21.735-28.249 1.7934-3.7704 1.7273-7.5023 2.0625-10.154-0.79964-7.8568-3.6796-13.51-10.43-17.758-5.9434-3.7404-13.06-6.0867-18.463-7.2266-4.5319-0.87895-9.2901-1.3562-14.064-1.4277z" style="fill:#4d4d4d;"/><path d="m42.426 75.338c0.52158 18.689 10.557 74.338-18.115 101.25 12.38 10.603 28.352 19.061 46.025 24.594 11.032-4.6874 22.88-7.4147 34.817-8.5046l0.0633-14.477c-22.49-4.3813-40.766-18.898-48.862-39.967-8.096-21.07-4.7931-44.72 9.2478-62.393zm124.67 2.7207c7.8997 10.886 11.743 24.64 11.787 37.441-0.36632 30.178-22.389 57.576-53.12 62.708l0.0238 14.471c12.282 1.1216 24.518 3.9888 35.825 8.9128 15.488-5.1448 30.007-13.325 42.396-25.043-13.136-22.051-23.282-63.045-18.694-101.55z" style="fill:#4d4d4d;"/><path d="m143.61 46.383c-11.639 0.12482-20.998 1.8906-20.998 1.8906l-9 3.5059c0.63003-0.0191 1.2603-0.0289 1.8906-0.0293h0.0996c35.169 0.055 60.959 27.235 63.283 63.383 7.4e-4 31.157-22.742 57.213-53.106 63.079l-0.0216 14.498c11.567 1.0563 23.154 3.6067 33.887 8.0463 35.952-15.315 55.082-52.303 36.709-68.279-5.018-7.9035-10.44-15.409-9.5544-23.03 5.0545-50.452 0.39626-63.561-43.189-63.064zm-69.966 21.09c-15.286 3.244-17.096 3.73-31.734 6.6953 3.0304 13.081 3.0583 22.274 1.2085 30.012-3.8004 11.361-8.9712 19.787-12.286 28.764-6.8823 22.459-2.9157 31.982 12.093 46.165 8.6595 8.0693 19.861 16.209 30.939 20.647 2.669-1.0316 5.3729-1.9628 8.106-2.792 7.4979-2.275 15.388-3.6535 23.206-4.3673l0.0433-14.393c-23.933-4.5937-44.283-21.98-50.77-45.817-6.3319-23.265 0.51104-48.752 19.195-64.914z" style="fill:#4d4d4d;"/>'),
    (i[10] = []),
    (i[10].env = c),
    (i[10].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l15.71 15.75h21z" style="fill:#666;"/><path d="m89.291 195a114.79 114.79 0 0 0-38.002 16.5 115.53 115.53 0 0 0 38.002 16.482zm52.434 0v32.982a115.53 115.53 0 0 0 38-16.482 114.79 114.79 0 0 0-38-16.5z" style="fill:#999;"/><path d="m157.15 199.75c0.2548 7.4501 1.54 14.855 4.9512 21.432a115.53 115.53 0 0 0 17.619-9.6797 114.79 114.79 0 0 0-22.57-11.752zm-83.295 2e-3a114.79 114.79 0 0 0-22.57 11.75 115.53 115.53 0 0 0 17.621 9.6797c3.411-6.5765 4.6944-13.98 4.9492-21.43z" style="fill:#ccc;"/><path d="m99.197 204.97v2e-3l16.302 16.301 16.301-16.301v-2e-3z" style="fill:#fff;"/>'),
    (i[10].head = d),
    (i[10].mouth =
      '<path d="m100.19 152.09c2.8726 4.0616 9.8095 4.7232 15.119-0.45432 5.0656 4.5134 11.167 5.6898 15.495 0.31458" style="fill:none;' +
      u +
      '5.8949;stroke:#333;"/><path d="m109.67 135.53c-0.9758 0.0743-2.05 0.45327-3.1485 0.99414-4.3235 2.1399-7.3862 4.2557-10.639 7.1406-0.6251 0.5715 0.1168 0.77785 1.4238 0.87304 5.6967 0.0536 14.384 0.41404 15.098-0.875 1.9251-2.0788 1.7969-5.3303-0.1816-7.3008-0.701-0.67533-1.5769-0.90632-2.5527-0.83203zm11.656 0c-0.9758-0.0743-1.8517 0.1567-2.5527 0.83203-1.9785 1.9705-2.1067 5.222-0.1817 7.3008 0.7142 1.289 9.401 0.9286 15.098 0.875 1.307-0.0952 2.0489-0.30154 1.4238-0.87304-3.2524-2.8849-6.3151-5.0007-10.639-7.1406-1.0985-0.54087-2.1727-0.91985-3.1485-0.99414z" style="fill:#333;"/>'),
    (i[10].eyes =
      '<path d="m97.56 107.84a10.63 10.63 0 0 1-15 0.13l-0.13-0.13" style="fill:none;' +
      u +
      '6.3px;stroke:#000;"/><path d="m148.59 107.84a10.63 10.63 0 0 1-15 0.13l-0.13-0.13" style="fill:none;' +
      u +
      '6.3px;stroke:#000;"/>'),
    (i[10].top =
      '<path d="m41.668 87.073c-9.2319-0.0231-11.63 6.5104 2.2676 17.66-14.015 1.1231-4.3662 16.457 4.875 24.66 4.0686 3.0199 6.4647 5.4657 5.5078 1.1348-1.2079-4.9178-1.8184-9.9634-1.8184-15.027 3.26e-4 -7.5692 1.2547-15.016 3.7883-22.183 0.57048-1.7876 1.0689-2.0306-0.37721-2.6839-5.5405-2.4478-10.375-3.5511-14.243-3.5608z" style="fill:#ccc;"/><path d="m185.48 89.513c-2.4418-0.11189-5.4618 0.81187-9.5148 3.2121-1.314 0.81729-0.70075 1.995-0.32301 3.2653 3.194 10.982 3.8215 22.462 1.2538 33.628-0.31613 1.688-0.47649 3.569 2.6953 1.3516 7.7016-5.371 19.17-18.734 16.918-26.105-1.4251-3.9177-11.4-0.35546-11.4-0.35546s4.987-4.2755 5.3437-9.6191c0.20048-3.0057-1.5237-5.2189-4.9726-5.377z" style="fill:#ccc;"/><path d="m91.689 36.108c-3.7298-7.3864-9.5859-10.504-17.578-6.7891-9.5194 4.5907-15.629 18.444-13.416 29.232 0 0-8.5511-4.9878-18.17-3.5625-19.623 8.094-1.4102 29.869 10.817 37.342 2.075 1.297 2.5792 1.7432 3.4291-0.37685 2.6746-6.5374 6.1886-12.722 11.297-17.709 4.1039 8.7427 14.629 4.1809 20.006-0.14062 4.4873 9.6838 10.377 6.3535 15.377 3.4785 4.0764 7.8829 10.756 7.25 17.631 0.0625 4.875 4.5625 14.713 4.1867 15.555-3.426 8.4753 2.6244 14.012 10.437 22.962-1.4764 8.8552 6.8221 14.407 16.853 17.122 27.51 0.34 1.554 1.175 0.85565 2.2212 0.44315 10.255-4.286 22.842-15.749 15.705-23.975-3.5623-3.5623-13.539-2.1387-13.539-2.1387s6.77-7.1233 9.2637-18.168c2.4936-11.043-23.514-4.9883-23.514-4.9883s7.4818-5.6993 12.113-13.537c4.6314-7.8378-2.4943-11.756-11.045-11.043-8.5496 0.71204-17.1 7.4805-17.1 7.4805s3.3946-7.8055-3.5625-12.826c-9.5935-6.9234-23.869 6.4121-23.869 6.4121-4.2562-26.835-24.872-6.386-31.707 8.1953z" style="fill:#ccc;"/>'),
    (i[11] = []),
    (i[11].env = c),
    (i[11].clo =
      '<path d="m116 203.13c-0.12 0-0.25 0.12-0.49 0.12s-0.25-0.12-0.49-0.12zm-27.29-8c0.87-0.25 1.72-0.47 2.56-0.69a32.37 32.37 0 0 0 0.3 8.57 21.5 21.5 0 0 0 7 6.88c6.41-6 16.8-6.64 16.8-6.64s10.5 0.58 17 6.69a21.61 21.61 0 0 0 6.93-6.66 32.34 32.34 0 0 0 0.35-8.84l2.13 0.56a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.64 114.64 0 0 1 37.38-16.37z" style="fill:#e9e9e9;"/><path d="m126.15 206-3.92 7.83h-13.46l-3.92-7.83a36.59 36.59 0 0 1 10.65-2.7 35.66 35.66 0 0 1 10.65 2.7z" style="fill:#818181;"/><path d="m124.54 230.65-2.18-16.74h-13.47l-2.19 16.76c2.9 0.22 5.84 0.33 8.8 0.33s6.06-0.12 9-0.35z" style="fill:#989898;"/><path d="m134.84 186s0.86 9.8-19.34 17.26c0 0 15.79 0.86 20.57 11.76 0.12 0.49 9.3-23.26-1.23-29z" style="fill:#fff;"/><path d="m96.16 186c-10.41 5.76-1.35 29.39-1.1 29 4.65-10.78 20.56-11.76 20.56-11.76-20.32-7.45-19.46-17.24-19.46-17.24z" style="fill:#fff;"/>'),
    (i[11].head = d),
    (i[11].mouth =
      '<path d="m118.57 165.14a8.66 8.66 0 0 0-2.76-4.23h-0.62a8 8 0 0 0-2.76 4.22c-0.52 1.89 2.07 10.61 2.76 12.53h0.62c0.64-1.76 3.19-10.82 2.76-12.52z" style="fill:#333;"/><path d="m102.81 152.24a2.4921 2.4921 0 1 1 1.19-4.84l0.21 0.06a37.1 37.1 0 0 0 5.43 1.12 44.52 44.52 0 0 0 11.76 0 37.1 37.1 0 0 0 5.43-1.12 2.4903 2.4903 0 0 1 1.59 4.72l-0.21 0.06a43.08 43.08 0 0 1-6.15 1.29 48.55 48.55 0 0 1-13.08 0 42.79 42.79 0 0 1-6.17-1.29z" style="fill:#333;"/>'),
    (i[11].eyes =
      '<path d="m86.851 100.39a4.94 4.94 0 1 0 4.9297 5 5 5 0 0 0-4.9297-5zm57.221 0a4.94 4.94 0 1 0 4.9394 4.9394 4.94 4.94 0 0 0-4.9394-4.9394z" style="fill:#333;"/><path d="m86.207 89.365c-25.504 0-21.503 6.8561-21.035 19.596 0.80177 18.121 17.763 16.514 21.201 16.639 14.758-0.041 20.518-8.227 22.951-22.932 1.8166-10.731-9.251-13.174-23.117-13.303zm58.598 0c-13.866 0.1284-24.936 2.5717-23.119 13.303 2.4332 14.705 8.1936 22.891 22.951 22.932 3.4383-0.125 20.399 1.4828 21.201-16.639 0-18.965-0.47958-19.596-21.033-19.596z" style="fill:#4d4d4d;"/><path d="m169.87 90.255a0.51 0.51 0 0 0-0.43991-0.52 167.64 167.64 0 0 0-22.6-1.6801c-12 0-27.47 3.7601-30.17 3.7601h-2.4c-1.2499 0-5.29-0.80996-10.45-1.6801a124.35 124.35 0 0 0-19.72-2.08 166.18 166.18 0 0 0-19.31 1.24c-1.56 0.17999-2.69 0.35009-3.2899 0.44009a0.51 0.51 0 0 0-0.44007 0.52l-0.091 6.4501a0.57 0.57 0 0 0 0.33012 0.52l0.73994 0.23992c1.08 0.41992 1.0001 19.85 6.78 24.71 3.4401 2.8599 6.51 4.4899 19.42 4.4899 7.4699 0 12.17-1.9999 16.63-8 3.21-4.32 6.0999-14.55 6.0999-14.55 0.82006-4.07 3.7702-4.52 4.43-4.5801h0.12068c0.11078 0 3.66 0.0593 4.57 4.5801 0 0 2.8599 10.22 6.0699 14.54 4.4601 5.9999 9.1601 8 16.63 8 12.91 0 16-1.63 19.42-4.4901 5.7898-4.86 5.6998-24.29 6.78-24.71l0.73994-0.23993a0.57 0.57 0 0 0 0.32996-0.52l-0.12068-6.4501zm-65 23c-1.9101 4.5-6.8 10.29-13.7 10.64-20.7 0.99985-21.65-4.7401-23-9.3201a31.45 31.45 0 0 1-1.2099-13.18c0.53997-4.5799 1.7-7.2699 3.7801-8.6201a9.3 9.3 0 0 1 4.3499-1.51 85.07 85.07 0 0 1 11.4-0.52 59.23 59.23 0 0 1 9.2099 0.69999c7.37 1.2 12.35 3.7001 12.35 6.1601a46.12 46.12 0 0 1-3.23 15.64zm58 1.3201c-1.34 4.5799-2.29 10.36-23 9.3201-6.91-0.3501-11.81-6.1401-13.71-10.64a46.35 46.35 0 0 1-3.22-15.64c0-3.39 9.43-6.8599 21.56-6.8599 12.13 0 14 0.89996 15.75 1.9999 2.08 1.3502 3.2398 4 3.77 8.6201a31.23 31.23 0 0 1-1.1601 13.17z" style="fill:#333;"/>'),
    (i[11].top =
      '<path d="m156.1 15.879c-0.38556 5.3015-1.7049 9.4762-3.6602 12.76-0.41226 23.773-9.2343 35.229-15.154 42.797l15.062-4.6641c-0.66253 2.8135-2.4628 7.156-0.34766 12.137 1.6334-2.3144 7.9395-5.807 13-3.3477-0.43442 3.5532-0.95271 7.094-1.4512 10.639l8.9648 0.85937c0.83453 3.8792 0.51719 9.3449-0.59961 11.736l5.5508 2.0098c0.20764 2.7646 0.10001 5.4906-0.74609 8.875 8.4545-1.7225 14.213-4.3896 19.641-13.188 2.8639-4.7524 4.9018-10.483 4.7305-17.242-4.1612 4.916-9.6484 7.2485-15.26 10.109 6.507-11.065 8.8648-22.768 8.1367-30.58-7.3456 10.251-11.649 13.06-19.918 16.9 1.2386-11.4 5.5249-18.582 12.461-27.27-11.392-1.3025-16.301 1.4749-24.891 6.4395 4.5466-14.036 2.2208-26.679-5.5195-38.971zm-117.76 28.682c9.3378 3.6366 19.581 9.0234 21.129 18.549-7.6182 0.0414-14.897-3.5072-20.242-7.1894-0.15967 8.2309 2.8451 12.252 6.7734 19.08-7.2127 1.6129-12.084 4.8315-17.471 9.4805 7.2948-0.15715 12.299-1.0502 16.891 4.2793-6.0512 5.0164-11.99 10.79-11.99 19.24 9.257-6.1688 12.495-5.9486 21.137-2.2012 1.2906-8.0996 2.3978-14.872 2.7869-16.435 2.4719-0.73247 3.5247-0.94807 5.9221-1.2938-2.1556-7.4281 1.0996-9.5176 2.4141-11.6l7.543 1.5059c-3.9093-6.1699 2.6565-12.483 7.1445-15.51-4.4474-7.2082-5.6649-11.558-7.377-16.797-11.198-8.2947-23.895-6.2742-34.66-1.1094z" style="fill:#f9f9f9;"/><path d="m101.9 7.6408c-10.047 6.2416-12.441 28.646-12.131 33.289-6.9249-5.8258-7.8992-13.75-7.7695-19.203-9.6235 6.0158-10.666 14.421-9 23.943 1.1061 5.1411 2.3972 10.461 7.377 16.797 2e-3 -1e-3 4e-3 -3e-3 6e-3 -4e-3 2.7742 2.8742 5.4644 5.5941 8.3477 8.3574 0.41187-6.971 0.45449-13.622 7.1856-15.824 3.9532 2.8169 7.4123 5.9388 11.084 9.1035l10.559-10.25c5.6447 3.961 5.4531 6.5652 6.5215 14.104 2.153-1.7546 8.719-9.0037 15.844-10.139 0.98706 4.1261-0.99388 10.308-2.6387 13.621 0 0 14.32-11.846 15.195-27.971 0.33968-6.2599 0.2237-11.146-0.041-14.826-3.2125 5.5652-8.7118 8.7799-13.789 10.15-4.2715-9.2486-2.4785-21.435-0.48047-29.309-12.21 3.0195-20.932 18.337-22.172 25.07-9.2678-7.397-13.605-16.146-14.098-26.91z" style="fill:#f9f9f9;"/>'),
    (i[12] = []),
    (i[12].env = c),
    (i[12].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l26.23 13 26.27-13z" style="fill:#131111;"/><polygon points="115.5 208.03 115.5 207.74 82.72 188.91 80.45 198.86 101.46 222.72" style="fill:#cbcbcb;"/><polygon points="115.5 208.03 115.5 207.74 148.28 188.91 150.55 198.86 129.54 222.72" style="fill:#cbcbcb;"/>'),
    (i[12].head = d),
    (i[12].mouth =
      '<path d="m123.07 154.05a10.61 10.61 0 0 1-15 0.14l-0.14-0.14" style="fill:none;' +
      u +
      '6.3px;stroke:#000;"/><path d="m120.1 142.22 0.19-0.11c3-1.87 5.45-2.4 7.3-1.46 2.15 1.1 3.12 3.84 4.84 5.5a5.18 5.18 0 0 0 6.68 0.73m-28.21-4.66-0.19-0.11c-3-1.87-5.45-2.4-7.3-1.46-2.15 1.1-3.12 3.84-4.84 5.5a5.18 5.18 0 0 1-6.68 0.73" style="fill:none;' +
      u +
      '5.9998px;stroke:#4d4d4d;"/>'),
    (i[12].eyes =
      '<path d="m161.73 86.016h-92.51c-3.37 0-6.0001 2.3998-6.0001 5.2999v28.45c0 3.0002 2.74 5.3001 6.0001 5.3001h32.36c7.0901 0 7.44-19.43 13.82-19.43s6.8801 19.44 13.83 19.44h32.36c3.37 0 5.9999-2.4 5.9999-5.3001v-28.46c0.14043-2.9001-2.6-5.2999-5.9-5.2999z" style="fill:#8f8f8f;"/><path d="m161.73 86.016h-92.51c-3.37 0-6.0001 2.3998-6.0001 5.2999v28.45l104.55-28.45c0-2.9001-2.74-5.2999-5.9999-5.2999z" style="fill:#e3e3e3;"/><path d="m161.73 86.016h-92.51c-3.37 0-6.0001 2.3998-6.0001 5.2999v28.45c0 3.0002 2.74 5.3001 6.0001 5.3001h32.36c7.0901 0 7.44-19.43 13.82-19.43s6.8801 19.44 13.83 19.44h32.36c3.37 0 5.9999-2.4 5.9999-5.3001v-28.46c0.14043-2.9001-2.6-5.2999-5.9-5.2999z" style="fill:none;' +
      u +
      '4.0026px;stroke:#232323;"/>'),
    (i[12].top =
      '<path d="m69.834 33.826c-8.2001-0.0626-16.444 2.6753-23.152 7.7038-8.5298 6.9899-12.159 19.61-12.329 32.68-0.2041 15.476 1.6092 34.752 1.7464 51.915 0.10414 13.047 0.53485 25.984-2.9197 33.995-2.4994 5.81-9.0955 9.6006-16.196 12.311 7.9599 2.8301 25.009 2.8094 33.58 1.5393 10.8-1.59 17.238-6.5294 17.159-22.699-0.0911-15.93-1.3894-29.23-1.559-45.83-0.3208-11.983-1.569-24.291 4.9774-33.987 4.2139-6.1265 10.452-10.521 17.116-13.588 3.9292-1.8575 8.0384-3.3083 12.263-4.3297-6.8718-13.574-18.732-19.618-30.687-19.709z" style="fill:#b3b3b3;"/><path d="m90.8 76.246c11.918-17.125 31.996-23.218 49.743-17.488 11.81 3.9496 20.692 13.389 22.313 28.237 0.51051 6.2098 0.63413 12.445 0.37007 18.67-0.23973 11.2-0.72946 23.82-1.0995 34.08-0.82005 22.43 0.0593 35.1 24.589 36.3 8.5635 0.32122 17.137-0.22845 25.59-1.6405h-0.0198c-10.74-3.3799-17.98-15.609-19.3-26.289-1.29-10.41-0.6098-23.43-0.7898-38.091-0.1701-14.96 1.0398-29.819 0.28008-42.089-1.414-22.777-14.947-38.505-34.126-45.152-27.813-7.35-51.083 0.091-61.672 17.343-5.4698 8.9112-7.7413 20.07-5.8788 36.121z" style="fill:#b3b3b3;"/>'),
    (i[13] = []),
    (i[13].env = c),
    (i[13].clo =
      '<path d="M61.11,205.59l3.49,3.69-6.26,6.6A115.45,115.45,0,0,0,72,222.51v-22a115.19,115.19,0,0,0-10.85,5.1Z" style="fill:#eee;"/><path d="M93.24,228.85V199l-4-4A114.43,114.43,0,0,0,72,200.49v22a114.43,114.43,0,0,0,21.28,6.34Z" style="fill:#787878;"/><path d="m159 222.51v-22a114.63 114.63 0 0 0-17.25-5.51l-4 4v29.86a114.16 114.16 0 0 0 21.25-6.35z" style="fill:#787878;"/><path d="m169.89 205.59-3.49 3.69 6.26 6.6a115.45 115.45 0 0 1-13.66 6.63v-22a115.19 115.19 0 0 1 10.85 5.1z" style="fill:#eee;"/><path d="M115.5,219.62A28.5,28.5,0,0,1,87.25,195c2.93-.74,5.92-1.36,8.94-1.87a19.41,19.41,0,0,0,38.62,0c3,.51,6,1.13,8.94,1.87a28.49,28.49,0,0,1-28.25,24.63Z" style="fill:#c9c9c9;"/>'),
    (i[13].head = d),
    (i[13].mouth =
      '<path d="m115.5 153.93a14 14 0 0 1-10.5-4.69 3.4209 3.4209 0 0 1 5-4.67l0.08 0.08 0.08 0.09a7.35 7.35 0 0 0 10.39 0.37l0.37-0.37a3.4206 3.4206 0 1 1 5.23 4.41l-0.08 0.09a14 14 0 0 1-10.53 4.69z" /><path d="m115.27 127.32c-7.6627-0.03-15.251 1.4419-20.646 5.1465-7.62 5.33-9.9053 11.512-14.127 18.109-3.4379 5.2447-9.326 10.024-13.467 6.334 25.425 29.755 71.409 29.786 96.875 0.0664-6.8104 3.9305-11.545-2.47-13.508-6.4004-10.697-17.605-14.115-22.656-35.127-23.256zm-0.26758 8.3984c7.457 0.0802 14.986 1.2966 17.146 5.9522 2.5765 11.319-7.5878 17.454-16.681 17.515-6.09-0.05-12.2-2.3802-15.26-7.7402-6.36-11.16 3.6349-15.607 14.795-15.727z" style="fill:#404040;"/>'),
    (i[13].eyes =
      '<path d="m91.72 97.36v11.4m47.56-11.4v11.4" style="fill:none;' +
      u +
      '7.9999px;stroke:#333;"/>'),
    (i[13].top =
      '<path d="m52.107 57.293c-1.3411 14.839-3.8707 52.771 1.3145 72.715-0.67572-43.829 12.389-70.177 62.078-70.187 49.689 0.010061 62.754 26.359 62.078 70.187 5.1852-19.944 2.6556-57.876 1.3145-72.715h-63.393-63.393z" style="fill:#4d4d4d;"/><path d="m52.339 30.629c-1.3825 24.448-2.1216 45.905-1.4497 66.517 9.4643-48.304 112.77-54.916 129.22 0 0.67191-20.612-0.3798-47.256-1.4928-66.517-32.241 14.296-91.346 18.861-126.28 0z" style="fill:#4d4d4d;"/><path d="m115.5 24.92c-22.25 0-44.5 4.2296-56.72 12.69-3.32 2.3-5.0602 6.4392-5.5903 10.269-0.45275 3.23-0.84043 6.7561-1.1785 10.461h126.98c-0.33704-3.7047-0.72492-7.2306-1.1775-10.461-0.53009-3.8301-2.2697-7.9992-5.5897-10.269-12.22-8.4601-34.47-12.69-56.72-12.69z" style="fill:#4d4d4d;"/><path d="m76.521 39.139c21.233 3.3965 33.116-13.392 37.59-31.72 4.3614 17.158 14.175 34.968 36.577 31.584-33.921 20.594-57.646 11.594-74.167 0.1345z" style="fill:#4d4d4d;"/>'),
    (i[14] = []),
    (i[14].env = c),
    (i[14].clo =
      '<path d="m91.92 194.41a101.47 101.47 0 0 1 23.58 17.09 101.47 101.47 0 0 1 23.58-17.09c0.89 0.19 1.78 0.38 2.67 0.59a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5c0.88-0.21 1.78-0.4 2.67-0.59z" style="fill:#757575;"/><path d="m73.65 199.82c16.59 8.23 28.72 18.91 34.27 30.93a114.86 114.86 0 0 1-56.65-19.25 115.06 115.06 0 0 1 22.38-11.68z" style="fill:#d8d8d8;"/><path d="m60.63 205.85c12.35 5.94 21.93 13.44 27.59 21.91a114.7 114.7 0 0 1-36.95-16.26q4.53-3 9.36-5.65z" style="fill:#757575;"/><path d="m157.35 199.82c-16.6 8.23-28.72 18.91-34.27 30.93a114.86 114.86 0 0 0 56.65-19.25 115.06 115.06 0 0 0-22.38-11.68z" style="fill:#d8d8d8;"/><path d="m170.37 205.85c-12.35 5.94-21.93 13.44-27.59 21.91a114.7 114.7 0 0 0 36.95-16.26q-4.53-3-9.36-5.65z" style="fill:#757575;"/>'),
    (i[14].head = d),
    (i[14].mouth =
      '<path d="m115.5 131c-17.71 0.65-27 9.41-29.61 23.69-1 5.62-0.43 7.06 2.76 7.17 22.76 0.76 22.23 18.21 26.85 18.89 4.62-0.68 4.09-18.13 26.85-18.89 3.19-0.11 3.79-1.55 2.76-7.17-2.62-14.28-11.9-23-29.61-23.69zm0 29.31c-10 0-18-5-18-11.17s8.08-11.17 18-11.17 18 5 18 11.17-8.08 11.17-18 11.17z" style="fill:#333;"/><path d="m123.54 148.46a11.53 11.53 0 0 1-16.09 0" style="fill:none;' +
      u +
      '6.7998px;stroke:#000;"/>'),
    (i[14].eyes =
      '<path d="m133 108.17h14.17m-63.26 0h14.09m-20.69-8.93a21.31 21.31 0 0 1 27.29 0m21.8 0a21.31 21.31 0 0 1 27.29 0" style="fill:none;' +
      u +
      '4.8243px;stroke:#000;"/>'),
    (i[14].top =
      '<path d="m115.5 51.75c-38.702 5.3101-54.215 18.038-59.863 35.101" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m115.5 51.75c-7.8393 3.6337-5.5974 16.583-14.341 23.452" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m111.35 48.614c-22.634-6.9181-42.457-3.1988-55.733 2.5105" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m115.47 54.008c0.1965-6.7774-0.1436-26.309 0.05-38.184" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m68.874 28.177c34.115-3.382 41.987 13.321 45.17 19.602" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m116.49 48.69c2.8876-6.3019 10.358-21.518 43.469-22.326" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m116.92 51.766c1.5094 6.3991 3.4988 15.595 10.088 23.058" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m113.81 51.532c22.03-7.8674 46.709-7.3614 59.444-2.0465" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m114.53 52.278c36.226 4.8583 52.414 17.092 59.373 33.347" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m55.637 86.851c-4.1213 12.452-2.9877 27.213-1.777 43.084" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m55.614 51.124c-13.422 5.5019-21.908 16.409-24.712 28.774-1.8322 8.4632-1.9809 18.156-1.6096 28.486" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m173.26 49.486c24.917 10.399 26.707 36.537 27.209 59.62" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m173.9 85.625c5.4042 12.625 5.2413 27.675 4.5745 43.58" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m53.86 129.93c1.293 16.951 2.6738 35.169-2.1664 53.193" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m29.292 108.38c0.6173 17.177 2.6722 36.119 0.8158 54.108" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m200.47 109.11c0.3586 18.529-1.2751 36.94 1.9231 48.985" style="fill:none;' +
      u +
      '12;stroke:#333;"/><path d="m178.48 129.2c-0.7279 17.362-2.0563 35.743 2.6011 53.099" style="fill:none;' +
      u +
      '12;stroke:#333;"/>'),
    (i[15] = []),
    (i[15].env = c),
    (i[15].clo =
      '<path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5 115.77 115.77 0 0 1 15.71-2.53v-14.09a63.8 63.8 0 0 0 21 0v14.09a116.6 116.6 0 0 1 15.75 2.53z" style="fill:#1a1a1a;"/><path d="m60.984 205.66 6.2675 2.2051 3.4074-6.819 2.8018-1.1353-3.9911 7.9907 27.222-3.0857 3.2541-11.739 2.1451-0.2692-3.2833 11.819 20.393-1.6011-14.191-15.945v-2.4379l17.606-5.7274 3.3855-0.473v1.47l-19.167 6.2295 14.731 16.542 19.839-7.7432 3.3636 0.8223-21.371 8.34 20.532 13.842 2.6777-21.687 1.9481 0.5604-2.7726 22.378 0.0584 0.0364 8.5075 4.9923-2.4807 0.85145-6.4718-3.7916-1.2987 6.0622-2.1524 0.53125 1.3425-6.2804-17.037 8.8348-5.0271 0.35661 21.59-11.193-20.962-14.133-7.5006 25.457-2.0721-0.0364 7.6392-25.915-21.05 1.652 9.0109 24.052-1.4155-0.0946-0.49615-0.0437-0.073-7e-3 -0.2043-0.0145-8.3688-22.342-10.127 19.242-1.9846-0.52399 10.514-19.962-26.04 2.9547 13.425 16.418-3.4438-1.0625-12.083-14.781-8.1645 5.9675-1.9043-1.077 8.128-5.9385-6.9898-2.4598 2.3348-1.2881zm92.509-7.2556 14.228 20.093-1.8095 0.89514-15.614-22.043z" style="fill:#b2b2b2;"/>'),
    (i[15].head = d),
    (i[15].mouth =
      '<path d="m97.06 144.59a20.15 20.15 0 0 0 36.88 4.53z" style="fill:#fff;' +
      u +
      '2.9999px;stroke:#000;"/>'),
    (i[15].eyes =
      '<line x1="85.29" x2="85.29" y1="98.73" y2="109.79" style="fill:none;' +
      u +
      '8.7999px;stroke:#000;"/><path d="m108.28 72.16h62.18c9.19 0 13.32 1.21 14.71 8.52 3.61 18.95 2.2 33.49-0.44 43.75a65.07 65.07 0 0 1-5.89 14.78 73.52 73.52 0 0 1-7.06 10.26c-1.8 2.27-5.17 1.21-4.19-1.09 0.14-0.47 0.27-1 0.4-1.48a14.29 14.29 0 0 0 0.52-6.62 12.52 12.52 0 0 0-3.88-6.3c-4.17-3.9-12.81-8.71-32.53-13.66-6.4-1.6-10.69-2.24-11.76-2.79a7.08 7.08 0 0 1-3.85-6.31v-9c0-2.39 0.18-4.55-1.56-6.57s-4.16-2.13-6.65-2.14a6 6 0 0 1-6-6v-9.35a6 6 0 0 1 6-6z" style="fill:#1a1a1a;"/><path d="m135.9 98.73v9.27m15.22-9.29v9.29" style="fill:none;' +
      u +
      '7.7998px;stroke:#b2b2b2;"/>'),
    (i[15].top =
      '<path d="m109.99 15.57c-13.46 3.6301-19.789 11.95-24.069 24.08-6.9996-7-8.7307-10.82-7.5606-21.43a41 41 0 0 0-9.2698 24.988c0.0366 7.6776 5.6462 13.939 12.697 15.297-13.315 5.8106-15.258 22.033-14.045 33.524 5.7687-11.861 14.254-20.981 27.258-22.951-0.43017 6.6-2.5099 10.22-7.29 17.66 18.29-2.8601 25.119-7.8199 37.15-18.24 0.46001 0 1.0001 0.089 1.4606 0.12058-0.33023 3.5601-1.0906 6.5598-5.0004 12.46 9.5298-1.32 14.721-5.8006 17.539-11.671 8.8862 0.95314 15.836 6.785 21.26 14.818 1.928-15.211-4.4766-26.6-19.807-34.036 1.4167-2.6974 8.0143-11.925 17.661-15.721-1.424-0.28569-2.8883-0.49486-4.4033-0.61125-5.71-0.41992-13.62-0.99982-24.89 4.1703 2.8501-8.5101 10.21-11 18.05-13.12-15.131-1.2501-28.61-2.5898-40.53 8.1801-1.8997-6.21-0.18055-12.54 3.7889-17.52z" style="fill:#fff;"/><path d="m172.63 69.954c1.2292 14.064 0.93841 29.96 0.34635 45.169 1.7887 6.796 3.0379 13.235 3.8842 18.388l0.13973-0.011c1.0001 6.56 2.3597 13.18 3.2698 19.73 2.0002-6.5699 2.5303-18.25 3.2405-25.43 1.2597-13 1.8296-29.311-0.43017-41.931-0.85041-4.72-2.0007-7.6896-2.0007-8.4796 4.6205 3.5601 8.6606 9.2204 13.001 14.15-0.6751-3.4318-1.347-6.6004-2.0567-9.5273-4.047-5.7183-13.726-12.154-19.393-12.06z" style="fill:#fff;"/><path d="m157.97 34.471c-10.339 2.7579-17.715 13.543-19.132 16.24 15.33 7.4361 20.783 17.96 21.278 33.517 5.9534 8.8179 10.066 20.289 12.857 30.895 0.87636-13.178 1.8186-27.726 0.26566-44.28 2.5698 0.44857 9.1372 1.3934 18.781 11.17-2.1158-8.7321-4.5671-15.31-8.4539-20.283-4.5598-5.8401-10.999-10.431-23.809-13 9.6502-3.34 16.27-0.76993 25.5 2.1301-8.1388-7.4315-16.474-14.219-27.287-16.389z" style="fill:#fff;"/><path d="m61.473 73.354c-7.256-0.77501-13.024 2.3746-16.262 5.3879 0.73789-0.45409 1.3868-0.74208 1.8489-0.74208 0 0-1.5198 10.359-1.6197 11.519-1.56 19.73 0.99957 43.401 6.37 62.471 1.3099 4.6899 1.1895 3.0893 1.8898-0.9107 1.7526-10.061 3.3891-24.703 6.9739-38.864-5.068-17.627-4.2508-32.403 0.79937-38.861z" style="fill:#fff;"/><path d="m69.09 43.21c-0.0253 1.0803-8e-3 2.1612 0.0523 3.2402-3.8402 0-12.46 0.71984-16 2.1598-4.4504 1.8001-8.48 5.4801-11.67 11.83 7.2999-3.94 11.899-3.8502 16.66-1.8102-10.39 3.45-19.52 11.37-20.32 26.9 1.1456-1.5053 4.6079-4.9789 7.1393-6.6285 0.09-0.0587 0.17427-0.10556 0.26167-0.15946 3.7141-2.3211 9.0494-5.1247 15.181-4.9553-5.0501 6.4577-6.6824 20.434 0.28207 38.428 1.7866-7.0567 4.0574-13.994 7.0681-20.184-1e-3 -11.664 2.0764-27.774 15.391-33.585-7.0508-2.1538-12.709-7.991-14.043-15.236z" style="fill:#fff;"/>'));
  var f =
    f ||
    (function (E, b) {
      var M = {},
        R = (M.lib = {}),
        F = function () {},
        I = (R.Base = {
          extend: function (N) {
            F.prototype = this;
            var S = new F();
            return (
              N && S.mixIn(N),
              S.hasOwnProperty("init") ||
                (S.init = function () {
                  S.$super.init.apply(this, arguments);
                }),
              (S.init.prototype = S),
              (S.$super = this),
              S
            );
          },
          create: function () {
            var N = this.extend();
            return (N.init.apply(N, arguments), N);
          },
          init: function () {},
          mixIn: function (N) {
            for (var S in N) N.hasOwnProperty(S) && (this[S] = N[S]);
            N.hasOwnProperty("toString") && (this.toString = N.toString);
          },
          clone: function () {
            return this.init.prototype.extend(this);
          },
        }),
        k = (R.WordArray = I.extend({
          init: function (N, S) {
            ((N = this.words = N || []),
              (this.sigBytes = S != b ? S : 4 * N.length));
          },
          toString: function (N) {
            return (N || V).stringify(this);
          },
          concat: function (N) {
            var S = this.words,
              P = N.words,
              _ = this.sigBytes;
            if (((N = N.sigBytes), this.clamp(), _ % 4))
              for (var w = 0; w < N; w++)
                S[(_ + w) >>> 2] |=
                  ((P[w >>> 2] >>> (24 - (w % 4) * 8)) & 255) <<
                  (24 - ((_ + w) % 4) * 8);
            else if (65535 < P.length)
              for (w = 0; w < N; w += 4) S[(_ + w) >>> 2] = P[w >>> 2];
            else S.push.apply(S, P);
            return ((this.sigBytes += N), this);
          },
          clamp: function () {
            var N = this.words,
              S = this.sigBytes;
            ((N[S >>> 2] &= 4294967295 << (32 - (S % 4) * 8)),
              (N.length = E.ceil(S / 4)));
          },
          clone: function () {
            var N = I.clone.call(this);
            return ((N.words = this.words.slice(0)), N);
          },
          random: function (N) {
            for (var S = [], P = 0; P < N; P += 4)
              S.push((4294967296 * E.random()) | 0);
            return new k.init(S, N);
          },
        })),
        D = (M.enc = {}),
        V = (D.Hex = {
          stringify: function (N) {
            var S = N.words;
            N = N.sigBytes;
            for (var P = [], _ = 0; _ < N; _++) {
              var w = (S[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255;
              (P.push((w >>> 4).toString(16)), P.push((15 & w).toString(16)));
            }
            return P.join("");
          },
          parse: function (N) {
            for (var S = N.length, P = [], _ = 0; _ < S; _ += 2)
              P[_ >>> 3] |= parseInt(N.substr(_, 2), 16) << (24 - (_ % 8) * 4);
            return new k.init(P, S / 2);
          },
        }),
        Y = (D.Latin1 = {
          stringify: function (N) {
            var S = N.words;
            N = N.sigBytes;
            for (var P = [], _ = 0; _ < N; _++)
              P.push(
                String.fromCharCode((S[_ >>> 2] >>> (24 - (_ % 4) * 8)) & 255),
              );
            return P.join("");
          },
          parse: function (N) {
            for (var S = N.length, P = [], _ = 0; _ < S; _++)
              P[_ >>> 2] |= (255 & N.charCodeAt(_)) << (24 - (_ % 4) * 8);
            return new k.init(P, S);
          },
        }),
        he = (D.Utf8 = {
          stringify: function (N) {
            try {
              return decodeURIComponent(escape(Y.stringify(N)));
            } catch {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function (N) {
            return Y.parse(unescape(encodeURIComponent(N)));
          },
        }),
        q = (R.BufferedBlockAlgorithm = I.extend({
          reset: function () {
            ((this._data = new k.init()), (this._nDataBytes = 0));
          },
          _append: function (N) {
            (typeof N == "string" && (N = he.parse(N)),
              this._data.concat(N),
              (this._nDataBytes += N.sigBytes));
          },
          _process: function (N) {
            var S = this._data,
              P = S.words,
              _ = S.sigBytes,
              w = this.blockSize,
              ee = _ / (4 * w),
              ee;
            if (
              ((N =
                (ee = N
                  ? E.ceil(ee)
                  : E.max((0 | ee) - this._minBufferSize, 0)) * w),
              (_ = E.min(4 * N, _)),
              N)
            ) {
              for (var Z = 0; Z < N; Z += w) this._doProcessBlock(P, Z);
              ((Z = P.splice(0, N)), (S.sigBytes -= _));
            }
            return new k.init(Z, _);
          },
          clone: function () {
            var N = I.clone.call(this);
            return ((N._data = this._data.clone()), N);
          },
          _minBufferSize: 0,
        }));
      R.Hasher = q.extend({
        cfg: I.extend(),
        init: function (N) {
          ((this.cfg = this.cfg.extend(N)), this.reset());
        },
        reset: function () {
          (q.reset.call(this), this._doReset());
        },
        update: function (N) {
          return (this._append(N), this._process(), this);
        },
        finalize: function (N) {
          return (N && this._append(N), this._doFinalize());
        },
        blockSize: 16,
        _createHelper: function (N) {
          return function (S, P) {
            return new N.init(P).finalize(S);
          };
        },
        _createHmacHelper: function (N) {
          return function (S, P) {
            return new O.HMAC.init(N, P).finalize(S);
          };
        },
      });
      var O = (M.algo = {});
      return M;
    })(Math);
  (function (E) {
    for (
      var b = f,
        N,
        M = (N = b.lib).WordArray,
        R = N.Hasher,
        N = b.algo,
        F = [],
        I = [],
        k = function (P) {
          return (4294967296 * (P - (0 | P))) | 0;
        },
        D = 2,
        V = 0;
      64 > V;
    ) {
      var Y;
      e: {
        Y = D;
        for (var he = E.sqrt(Y), q = 2; q <= he; q++)
          if (!(Y % q)) {
            Y = !1;
            break e;
          }
        Y = !0;
      }
      (Y &&
        (8 > V && (F[V] = k(E.pow(D, 0.5))), (I[V] = k(E.pow(D, 1 / 3))), V++),
        D++);
    }
    var O = [],
      N = (N.SHA256 = R.extend({
        _doReset: function () {
          this._hash = new M.init(F.slice(0));
        },
        _doProcessBlock: function (S, P) {
          for (
            var _ = this._hash.words,
              w = _[0],
              ee = _[1],
              Z = _[2],
              en = _[3],
              j = _[4],
              Re = _[5],
              ke = _[6],
              nn = _[7],
              K = 0;
            64 > K;
            K++
          ) {
            if (16 > K) O[K] = 0 | S[P + K];
            else {
              var se = O[K - 15],
                de = O[K - 2];
              O[K] =
                (((se << 25) | (se >>> 7)) ^
                  ((se << 14) | (se >>> 18)) ^
                  (se >>> 3)) +
                O[K - 7] +
                (((de << 15) | (de >>> 17)) ^
                  ((de << 13) | (de >>> 19)) ^
                  (de >>> 10)) +
                O[K - 16];
            }
            ((se =
              nn +
              (((j << 26) | (j >>> 6)) ^
                ((j << 21) | (j >>> 11)) ^
                ((j << 7) | (j >>> 25))) +
              ((j & Re) ^ (~j & ke)) +
              I[K] +
              O[K]),
              (de =
                (((w << 30) | (w >>> 2)) ^
                  ((w << 19) | (w >>> 13)) ^
                  ((w << 10) | (w >>> 22))) +
                ((w & ee) ^ (w & Z) ^ (ee & Z))),
              (nn = ke),
              (ke = Re),
              (Re = j),
              (j = (en + se) | 0),
              (en = Z),
              (Z = ee),
              (ee = w),
              (w = (se + de) | 0));
          }
          ((_[0] = (_[0] + w) | 0),
            (_[1] = (_[1] + ee) | 0),
            (_[2] = (_[2] + Z) | 0),
            (_[3] = (_[3] + en) | 0),
            (_[4] = (_[4] + j) | 0),
            (_[5] = (_[5] + Re) | 0),
            (_[6] = (_[6] + ke) | 0),
            (_[7] = (_[7] + nn) | 0));
        },
        _doFinalize: function () {
          var S = this._data,
            P = S.words,
            _ = 8 * this._nDataBytes,
            w = 8 * S.sigBytes;
          return (
            (P[w >>> 5] |= 128 << (24 - (w % 32))),
            (P[14 + (((w + 64) >>> 9) << 4)] = E.floor(_ / 4294967296)),
            (P[15 + (((w + 64) >>> 9) << 4)] = _),
            (S.sigBytes = 4 * P.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var S = R.clone.call(this);
          return ((S._hash = this._hash.clone()), S);
        },
      }));
    ((b.SHA256 = R._createHelper(N)), (b.HmacSHA256 = R._createHmacHelper(N)));
  })(Math);
  var p = "";
  if (t.length == 0) return p;
  p = f.SHA256(t).toString().replace(/\D/g, "").substring(0, 12);
  var h = [];
  for (var v in ((h.env = p[0] + "" + p[1]),
  (h.env = Math.round(0.47 * h.env) + ""),
  (h.clo = p[2] + "" + p[3]),
  (h.clo = Math.round(0.47 * h.clo) + ""),
  (h.head = p[4] + "" + p[5]),
  (h.head = Math.round(0.47 * h.head) + ""),
  (h.mouth = p[6] + "" + p[7]),
  (h.mouth = Math.round(0.47 * h.mouth) + ""),
  (h.eyes = p[8] + "" + p[9]),
  (h.eyes = Math.round(0.47 * h.eyes) + ""),
  (h.top = p[10] + "" + p[11]),
  (h.top = Math.round(0.47 * h.top) + ""),
  h)) {
    var g = h[v];
    g > 31
      ? ((g = g - 32 + "").length == 1 && (g = "0" + g), (h[v] = g + "C"))
      : g > 15
        ? ((g = g - 16 + "").length == 1 && (g = "0" + g), (h[v] = g + "B"))
        : (h[v] = (g + "").length == 1 ? "0" + g + "A" : g + "A");
  }
  var y = [];
  for (var v in h) {
    var x = h[v].substring(0, 2),
      T = h[v].substring(2, 3);
    y[v] = C(v, x, T);
  }
  function C(E, b, M) {
    var R = o[b][M][E],
      F = i[b][E],
      I = /#(.*?);/g,
      k = F.match(I),
      D = F;
    if (k != null)
      for (var V = 0; V < k.length; V++) D = D.replace(k[V], R[V] + ";");
    return D;
  }
  return l + y.env + y.head + y.clo + y.top + y.eyes + y.mouth + a;
}
const Wo = "_post_1j6an_1",
  Yo = "_trash_1j6an_17",
  Ko = "_account_1j6an_21",
  Xo = "_profile_1j6an_29",
  Qo = "_text_1j6an_46",
  Zo = "_msg_1j6an_52",
  jo = "_footer_1j6an_75",
  me = {
    post: Wo,
    trash: Yo,
    account: Ko,
    profile: Xo,
    text: Qo,
    msg: Zo,
    footer: jo,
  };
function xe(t) {
  if (typeof t != "number" || !Number.isInteger(t) || t < 0)
    throw new Error("Number of replies must be a non-negative integer.");
  const n = 10,
    e = 20,
    o = 5,
    i = t * n,
    l = i * e;
  let a = 0;
  return (
    (a = Math.floor(t / o)),
    { estimatedViews: l, estimatedLikes: i, estimatedReposts: a, replies: t }
  );
}
var Q = [];
function Cn() {
  if (Q.length == 0) {
    const t = localStorage.getItem("posts");
    (t
      ? (Q = JSON.parse(t))
      : localStorage.setItem("posts", JSON.stringify([])),
      (Q = Q.map((n) => ({ ...n, gen: !1 }))));
  }
}
function ei() {
  return (Cn(), Q);
}
function Tn(t) {
  return (Cn(), Q[t]);
}
function Bt() {
  return (Cn(), Q.length);
}
function zt(t) {
  (Q.push(t), localStorage.setItem("posts", JSON.stringify(Q)));
}
var Se = null,
  Ht;
function ni(t) {
  Se = t;
}
function _n(t) {
  Ht = t;
}
function ti() {
  return Ht;
}
function oi(t) {
  (Q.splice(t, 1),
    localStorage.setItem("posts", JSON.stringify(Q)),
    Se && Se());
}
function Ae() {
  (localStorage.setItem("posts", JSON.stringify(Q.filter((t) => !t.temp))),
    Se && Se());
}
const ii = "_comp_10pec_1",
  si = "_post_10pec_45",
  ri = "_footer_10pec_70",
  li = "_comment_10pec_91",
  ai = "_account_10pec_140",
  ui = "_text_10pec_154",
  ci = "_msg_10pec_160",
  di = "_showmore_10pec_288",
  fi = "_generating_10pec_320",
  mi = "_godown_10pec_341",
  pi = "_godownshow_10pec_361",
  G = {
    comp: ii,
    post: si,
    footer: ri,
    comment: li,
    account: ai,
    text: ui,
    msg: ci,
    showmore: di,
    generating: fi,
    godown: mi,
    godownshow: pi,
  };
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let hi, gi;
function vi() {
  return { geminiUrl: hi, vertexUrl: gi };
}
function yi(t, n, e) {
  var o, i, l;
  if (!(!((o = t.httpOptions) === null || o === void 0) && o.baseUrl)) {
    const a = vi();
    return t.vertexai
      ? (i = a.vertexUrl) !== null && i !== void 0
        ? i
        : n
      : (l = a.geminiUrl) !== null && l !== void 0
        ? l
        : e;
  }
  return t.httpOptions.baseUrl;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Pe {}
function A(t, n) {
  const e = /\{([^}]+)\}/g;
  return t.replace(e, (o, i) => {
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      const l = n[i];
      return l != null ? String(l) : "";
    } else throw new Error(`Key '${i}' not found in valueMap.`);
  });
}
function r(t, n, e) {
  for (let l = 0; l < n.length - 1; l++) {
    const a = n[l];
    if (a.endsWith("[]")) {
      const c = a.slice(0, -2);
      if (!(c in t))
        if (Array.isArray(e))
          t[c] = Array.from({ length: e.length }, () => ({}));
        else throw new Error(`Value must be a list given an array path ${a}`);
      if (Array.isArray(t[c])) {
        const d = t[c];
        if (Array.isArray(e))
          for (let u = 0; u < d.length; u++) {
            const f = d[u];
            r(f, n.slice(l + 1), e[u]);
          }
        else for (const u of d) r(u, n.slice(l + 1), e);
      }
      return;
    } else if (a.endsWith("[0]")) {
      const c = a.slice(0, -3);
      c in t || (t[c] = [{}]);
      const d = t[c];
      r(d[0], n.slice(l + 1), e);
      return;
    }
    ((!t[a] || typeof t[a] != "object") && (t[a] = {}), (t = t[a]));
  }
  const o = n[n.length - 1],
    i = t[o];
  if (i !== void 0) {
    if (!e || (typeof e == "object" && Object.keys(e).length === 0) || e === i)
      return;
    if (
      typeof i == "object" &&
      typeof e == "object" &&
      i !== null &&
      e !== null
    )
      Object.assign(i, e);
    else throw new Error(`Cannot set value for an existing key. Key: ${o}`);
  } else t[o] = e;
}
function s(t, n) {
  try {
    if (n.length === 1 && n[0] === "_self") return t;
    for (let e = 0; e < n.length; e++) {
      if (typeof t != "object" || t === null) return;
      const o = n[e];
      if (o.endsWith("[]")) {
        const i = o.slice(0, -2);
        if (i in t) {
          const l = t[i];
          return Array.isArray(l) ? l.map((a) => s(a, n.slice(e + 1))) : void 0;
        } else return;
      } else t = t[o];
    }
    return t;
  } catch (e) {
    if (e instanceof TypeError) return;
    throw e;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function U(t, n) {
  if (!n || typeof n != "string")
    throw new Error("model is required and must be a string");
  if (t.isVertexAI()) {
    if (
      n.startsWith("publishers/") ||
      n.startsWith("projects/") ||
      n.startsWith("models/")
    )
      return n;
    if (n.indexOf("/") >= 0) {
      const e = n.split("/", 2);
      return `publishers/${e[0]}/models/${e[1]}`;
    } else return `publishers/google/models/${n}`;
  } else
    return n.startsWith("models/") || n.startsWith("tunedModels/")
      ? n
      : `models/${n}`;
}
function $t(t, n) {
  const e = U(t, n);
  return e
    ? e.startsWith("publishers/") && t.isVertexAI()
      ? `projects/${t.getProject()}/locations/${t.getLocation()}/${e}`
      : e.startsWith("models/") && t.isVertexAI()
        ? `projects/${t.getProject()}/locations/${t.getLocation()}/publishers/google/${e}`
        : e
    : "";
}
function Jt(t, n) {
  return Array.isArray(n) ? n.map((e) => Be(t, e)) : [Be(t, n)];
}
function Be(t, n) {
  if (typeof n == "object" && n !== null) return n;
  throw new Error(
    `Could not parse input as Blob. Unsupported blob type: ${typeof n}`,
  );
}
function xi(t, n) {
  const e = Be(t, n);
  if (e.mimeType && e.mimeType.startsWith("image/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function Ni(t, n) {
  const e = Be(t, n);
  if (e.mimeType && e.mimeType.startsWith("audio/")) return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function Un(t, n) {
  if (n == null) throw new Error("PartUnion is required");
  if (typeof n == "object") return n;
  if (typeof n == "string") return { text: n };
  throw new Error(`Unsupported part type: ${typeof n}`);
}
function Ot(t, n) {
  if (n == null || (Array.isArray(n) && n.length === 0))
    throw new Error("PartListUnion is required");
  return Array.isArray(n) ? n.map((e) => Un(t, e)) : [Un(t, n)];
}
function on(t) {
  return (
    t != null && typeof t == "object" && "parts" in t && Array.isArray(t.parts)
  );
}
function Vn(t) {
  return t != null && typeof t == "object" && "functionCall" in t;
}
function Gn(t) {
  return t != null && typeof t == "object" && "functionResponse" in t;
}
function J(t, n) {
  if (n == null) throw new Error("ContentUnion is required");
  return on(n) ? n : { role: "user", parts: Ot(t, n) };
}
function Wt(t, n) {
  if (!n) return [];
  if (t.isVertexAI() && Array.isArray(n))
    return n.flatMap((e) => {
      const o = J(t, e);
      return o.parts && o.parts.length > 0 && o.parts[0].text !== void 0
        ? [o.parts[0].text]
        : [];
    });
  if (t.isVertexAI()) {
    const e = J(t, n);
    return e.parts && e.parts.length > 0 && e.parts[0].text !== void 0
      ? [e.parts[0].text]
      : [];
  }
  return Array.isArray(n) ? n.map((e) => J(t, e)) : [J(t, n)];
}
function ae(t, n) {
  if (n == null || (Array.isArray(n) && n.length === 0))
    throw new Error("contents are required");
  if (!Array.isArray(n)) {
    if (Vn(n) || Gn(n))
      throw new Error(
        "To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them",
      );
    return [J(t, n)];
  }
  const e = [],
    o = [],
    i = on(n[0]);
  for (const l of n) {
    const a = on(l);
    if (a != i)
      throw new Error(
        "Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them",
      );
    if (a) e.push(l);
    else {
      if (Vn(l) || Gn(l))
        throw new Error(
          "To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them",
        );
      o.push(l);
    }
  }
  return (i || e.push({ role: "user", parts: Ot(t, o) }), e);
}
function Yt(t, n) {
  return n;
}
function Kt(t, n) {
  if (typeof n == "object") return n;
  if (typeof n == "string")
    return { voiceConfig: { prebuiltVoiceConfig: { voiceName: n } } };
  throw new Error(`Unsupported speechConfig type: ${typeof n}`);
}
function Ke(t, n) {
  return n;
}
function Xe(t, n) {
  if (!Array.isArray(n))
    throw new Error("tool is required and must be an array of Tools");
  return n;
}
function Ci(t, n, e, o = 1) {
  const i = !n.startsWith(`${e}/`) && n.split("/").length === o;
  return t.isVertexAI()
    ? n.startsWith("projects/")
      ? n
      : n.startsWith("locations/")
        ? `projects/${t.getProject()}/${n}`
        : n.startsWith(`${e}/`)
          ? `projects/${t.getProject()}/locations/${t.getLocation()}/${n}`
          : i
            ? `projects/${t.getProject()}/locations/${t.getLocation()}/${e}/${n}`
            : n
    : i
      ? `${e}/${n}`
      : n;
}
function ue(t, n) {
  if (typeof n != "string") throw new Error("name must be a string");
  return Ci(t, n, "cachedContents");
}
function Xt(t, n) {
  switch (n) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return n;
  }
}
function ce(t, n) {
  if (typeof n != "string") throw new Error("fromImageBytes must be a string");
  return n;
}
function Ti(t) {
  return t != null && typeof t == "object" && "name" in t;
}
function _i(t) {
  return t != null && typeof t == "object" && "video" in t;
}
function Ei(t) {
  return t != null && typeof t == "object" && "uri" in t;
}
function Qt(t, n) {
  var e;
  let o;
  if (
    (Ti(n) && (o = n.name),
    !(Ei(n) && ((o = n.uri), o === void 0)) &&
      !(
        _i(n) &&
        ((o = (e = n.video) === null || e === void 0 ? void 0 : e.uri),
        o === void 0)
      ))
  ) {
    if ((typeof n == "string" && (o = n), o === void 0))
      throw new Error("Could not extract file name from the provided input.");
    if (o.startsWith("https://")) {
      const l = o.split("files/")[1].match(/[a-z0-9]+/);
      if (l === null)
        throw new Error(`Could not extract file name from URI ${o}`);
      o = l[0];
    } else o.startsWith("files/") && (o = o.split("files/")[1]);
    return o;
  }
}
function Zt(t, n) {
  let e;
  return (
    t.isVertexAI()
      ? (e = n ? "publishers/google/models" : "models")
      : (e = n ? "models" : "tunedModels"),
    e
  );
}
function jt(t, n) {
  for (const e of ["models", "tunedModels", "publisherModels"])
    if (bi(n, e)) return n[e];
  return [];
}
function bi(t, n) {
  return t !== null && typeof t == "object" && n in t;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Si(t, n) {
  const e = {};
  if (s(n, ["videoMetadata"]) !== void 0)
    throw new Error("videoMetadata parameter is not supported in Gemini API.");
  const o = s(n, ["thought"]);
  o != null && r(e, ["thought"], o);
  const i = s(n, ["codeExecutionResult"]);
  i != null && r(e, ["codeExecutionResult"], i);
  const l = s(n, ["executableCode"]);
  l != null && r(e, ["executableCode"], l);
  const a = s(n, ["fileData"]);
  a != null && r(e, ["fileData"], a);
  const c = s(n, ["functionCall"]);
  c != null && r(e, ["functionCall"], c);
  const d = s(n, ["functionResponse"]);
  d != null && r(e, ["functionResponse"], d);
  const u = s(n, ["inlineData"]);
  u != null && r(e, ["inlineData"], u);
  const f = s(n, ["text"]);
  return (f != null && r(e, ["text"], f), e);
}
function qn(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Si(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function Ai() {
  return {};
}
function Ii(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function Pi(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], Ii(t, o)), e);
}
function Mi(t, n) {
  const e = {};
  if (s(n, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], Ai());
  const i = s(n, ["googleSearchRetrieval"]);
  if (
    (i != null && r(e, ["googleSearchRetrieval"], Pi(t, i)),
    s(n, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API.",
    );
  if (s(n, ["googleMaps"]) !== void 0)
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  const l = s(n, ["codeExecution"]);
  l != null && r(e, ["codeExecution"], l);
  const a = s(n, ["functionDeclarations"]);
  return (a != null && r(e, ["functionDeclarations"], a), e);
}
function wi(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["allowedFunctionNames"]);
  return (i != null && r(e, ["allowedFunctionNames"], i), e);
}
function Ri(t, n) {
  const e = {},
    o = s(n, ["functionCallingConfig"]);
  if (
    (o != null && r(e, ["functionCallingConfig"], wi(t, o)),
    s(n, ["retrievalConfig"]) !== void 0)
  )
    throw new Error(
      "retrievalConfig parameter is not supported in Gemini API.",
    );
  return e;
}
function ki(t, n, e) {
  const o = {},
    i = s(n, ["ttl"]);
  e !== void 0 && i != null && r(e, ["ttl"], i);
  const l = s(n, ["expireTime"]);
  e !== void 0 && l != null && r(e, ["expireTime"], l);
  const a = s(n, ["displayName"]);
  e !== void 0 && a != null && r(e, ["displayName"], a);
  const c = s(n, ["contents"]);
  if (e !== void 0 && c != null) {
    let p = ae(t, c);
    (Array.isArray(p) && (p = p.map((h) => qn(t, h))), r(e, ["contents"], p));
  }
  const d = s(n, ["systemInstruction"]);
  e !== void 0 && d != null && r(e, ["systemInstruction"], qn(t, J(t, d)));
  const u = s(n, ["tools"]);
  if (e !== void 0 && u != null) {
    let p = u;
    (Array.isArray(p) && (p = p.map((h) => Mi(t, h))), r(e, ["tools"], p));
  }
  const f = s(n, ["toolConfig"]);
  return (e !== void 0 && f != null && r(e, ["toolConfig"], Ri(t, f)), o);
}
function Di(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["model"], $t(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], ki(t, i, e)), e);
}
function Fi(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Li(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Ui(t, n, e) {
  const o = {},
    i = s(n, ["ttl"]);
  e !== void 0 && i != null && r(e, ["ttl"], i);
  const l = s(n, ["expireTime"]);
  return (e !== void 0 && l != null && r(e, ["expireTime"], l), o);
}
function Vi(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], Ui(t, i, e)), e);
}
function Gi(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  return (e !== void 0 && l != null && r(e, ["_query", "pageToken"], l), o);
}
function qi(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], Gi(t, o, e)), e);
}
function Bi(t, n) {
  const e = {},
    o = s(n, ["videoMetadata"]);
  o != null && r(e, ["videoMetadata"], o);
  const i = s(n, ["thought"]);
  i != null && r(e, ["thought"], i);
  const l = s(n, ["codeExecutionResult"]);
  l != null && r(e, ["codeExecutionResult"], l);
  const a = s(n, ["executableCode"]);
  a != null && r(e, ["executableCode"], a);
  const c = s(n, ["fileData"]);
  c != null && r(e, ["fileData"], c);
  const d = s(n, ["functionCall"]);
  d != null && r(e, ["functionCall"], d);
  const u = s(n, ["functionResponse"]);
  u != null && r(e, ["functionResponse"], u);
  const f = s(n, ["inlineData"]);
  f != null && r(e, ["inlineData"], f);
  const p = s(n, ["text"]);
  return (p != null && r(e, ["text"], p), e);
}
function Bn(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Bi(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function zi() {
  return {};
}
function Hi(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function $i(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], Hi(t, o)), e);
}
function Ji() {
  return {};
}
function Oi(t, n) {
  const e = {},
    o = s(n, ["apiKeyString"]);
  return (o != null && r(e, ["apiKeyString"], o), e);
}
function Wi(t, n) {
  const e = {},
    o = s(n, ["apiKeyConfig"]);
  o != null && r(e, ["apiKeyConfig"], Oi(t, o));
  const i = s(n, ["authType"]);
  i != null && r(e, ["authType"], i);
  const l = s(n, ["googleServiceAccountConfig"]);
  l != null && r(e, ["googleServiceAccountConfig"], l);
  const a = s(n, ["httpBasicAuthConfig"]);
  a != null && r(e, ["httpBasicAuthConfig"], a);
  const c = s(n, ["oauthConfig"]);
  c != null && r(e, ["oauthConfig"], c);
  const d = s(n, ["oidcConfig"]);
  return (d != null && r(e, ["oidcConfig"], d), e);
}
function Yi(t, n) {
  const e = {},
    o = s(n, ["authConfig"]);
  return (o != null && r(e, ["authConfig"], Wi(t, o)), e);
}
function Ki(t, n) {
  const e = {},
    o = s(n, ["retrieval"]);
  (o != null && r(e, ["retrieval"], o),
    s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], zi()));
  const l = s(n, ["googleSearchRetrieval"]);
  (l != null && r(e, ["googleSearchRetrieval"], $i(t, l)),
    s(n, ["enterpriseWebSearch"]) != null &&
      r(e, ["enterpriseWebSearch"], Ji()));
  const c = s(n, ["googleMaps"]);
  c != null && r(e, ["googleMaps"], Yi(t, c));
  const d = s(n, ["codeExecution"]);
  d != null && r(e, ["codeExecution"], d);
  const u = s(n, ["functionDeclarations"]);
  return (u != null && r(e, ["functionDeclarations"], u), e);
}
function Xi(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["allowedFunctionNames"]);
  return (i != null && r(e, ["allowedFunctionNames"], i), e);
}
function Qi(t, n) {
  const e = {},
    o = s(n, ["latitude"]);
  o != null && r(e, ["latitude"], o);
  const i = s(n, ["longitude"]);
  return (i != null && r(e, ["longitude"], i), e);
}
function Zi(t, n) {
  const e = {},
    o = s(n, ["latLng"]);
  return (o != null && r(e, ["latLng"], Qi(t, o)), e);
}
function ji(t, n) {
  const e = {},
    o = s(n, ["functionCallingConfig"]);
  o != null && r(e, ["functionCallingConfig"], Xi(t, o));
  const i = s(n, ["retrievalConfig"]);
  return (i != null && r(e, ["retrievalConfig"], Zi(t, i)), e);
}
function es(t, n, e) {
  const o = {},
    i = s(n, ["ttl"]);
  e !== void 0 && i != null && r(e, ["ttl"], i);
  const l = s(n, ["expireTime"]);
  e !== void 0 && l != null && r(e, ["expireTime"], l);
  const a = s(n, ["displayName"]);
  e !== void 0 && a != null && r(e, ["displayName"], a);
  const c = s(n, ["contents"]);
  if (e !== void 0 && c != null) {
    let p = ae(t, c);
    (Array.isArray(p) && (p = p.map((h) => Bn(t, h))), r(e, ["contents"], p));
  }
  const d = s(n, ["systemInstruction"]);
  e !== void 0 && d != null && r(e, ["systemInstruction"], Bn(t, J(t, d)));
  const u = s(n, ["tools"]);
  if (e !== void 0 && u != null) {
    let p = u;
    (Array.isArray(p) && (p = p.map((h) => Ki(t, h))), r(e, ["tools"], p));
  }
  const f = s(n, ["toolConfig"]);
  return (e !== void 0 && f != null && r(e, ["toolConfig"], ji(t, f)), o);
}
function ns(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["model"], $t(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], es(t, i, e)), e);
}
function ts(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function os(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function is(t, n, e) {
  const o = {},
    i = s(n, ["ttl"]);
  e !== void 0 && i != null && r(e, ["ttl"], i);
  const l = s(n, ["expireTime"]);
  return (e !== void 0 && l != null && r(e, ["expireTime"], l), o);
}
function ss(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], ue(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], is(t, i, e)), e);
}
function rs(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  return (e !== void 0 && l != null && r(e, ["_query", "pageToken"], l), o);
}
function ls(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], rs(t, o, e)), e);
}
function Ue(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["model"]);
  l != null && r(e, ["model"], l);
  const a = s(n, ["createTime"]);
  a != null && r(e, ["createTime"], a);
  const c = s(n, ["updateTime"]);
  c != null && r(e, ["updateTime"], c);
  const d = s(n, ["expireTime"]);
  d != null && r(e, ["expireTime"], d);
  const u = s(n, ["usageMetadata"]);
  return (u != null && r(e, ["usageMetadata"], u), e);
}
function as() {
  return {};
}
function us(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["cachedContents"]);
  if (i != null) {
    let l = i;
    (Array.isArray(l) && (l = l.map((a) => Ue(t, a))),
      r(e, ["cachedContents"], l));
  }
  return e;
}
function Ve(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["model"]);
  l != null && r(e, ["model"], l);
  const a = s(n, ["createTime"]);
  a != null && r(e, ["createTime"], a);
  const c = s(n, ["updateTime"]);
  c != null && r(e, ["updateTime"], c);
  const d = s(n, ["expireTime"]);
  d != null && r(e, ["expireTime"], d);
  const u = s(n, ["usageMetadata"]);
  return (u != null && r(e, ["usageMetadata"], u), e);
}
function cs() {
  return {};
}
function ds(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["cachedContents"]);
  if (i != null) {
    let l = i;
    (Array.isArray(l) && (l = l.map((a) => Ve(t, a))),
      r(e, ["cachedContents"], l));
  }
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var Ne;
(function (t) {
  ((t.PAGED_ITEM_BATCH_JOBS = "batchJobs"),
    (t.PAGED_ITEM_MODELS = "models"),
    (t.PAGED_ITEM_TUNING_JOBS = "tuningJobs"),
    (t.PAGED_ITEM_FILES = "files"),
    (t.PAGED_ITEM_CACHED_CONTENTS = "cachedContents"));
})(Ne || (Ne = {}));
class Qe {
  constructor(n, e, o, i) {
    ((this.pageInternal = []),
      (this.paramsInternal = {}),
      (this.requestInternal = e),
      this.init(n, o, i));
  }
  init(n, e, o) {
    var i, l;
    ((this.nameInternal = n),
      (this.pageInternal = e[this.nameInternal] || []),
      (this.idxInternal = 0));
    let a = { config: {} };
    (o
      ? typeof o == "object"
        ? (a = Object.assign({}, o))
        : (a = o)
      : (a = { config: {} }),
      a.config && (a.config.pageToken = e.nextPageToken),
      (this.paramsInternal = a),
      (this.pageInternalSize =
        (l = (i = a.config) === null || i === void 0 ? void 0 : i.pageSize) !==
          null && l !== void 0
          ? l
          : this.pageInternal.length));
  }
  initNextPage(n) {
    this.init(this.nameInternal, n, this.paramsInternal);
  }
  get page() {
    return this.pageInternal;
  }
  get name() {
    return this.nameInternal;
  }
  get pageSize() {
    return this.pageInternalSize;
  }
  get params() {
    return this.paramsInternal;
  }
  get pageLength() {
    return this.pageInternal.length;
  }
  getItem(n) {
    return this.pageInternal[n];
  }
  [Symbol.asyncIterator]() {
    return {
      next: async () => {
        if (this.idxInternal >= this.pageLength)
          if (this.hasNextPage()) await this.nextPage();
          else return { value: void 0, done: !0 };
        const n = this.getItem(this.idxInternal);
        return ((this.idxInternal += 1), { value: n, done: !1 });
      },
      return: async () => ({ value: void 0, done: !0 }),
    };
  }
  async nextPage() {
    if (!this.hasNextPage()) throw new Error("No more pages to fetch.");
    const n = await this.requestInternal(this.params);
    return (this.initNextPage(n), this.page);
  }
  hasNextPage() {
    var n;
    return (
      ((n = this.params.config) === null || n === void 0
        ? void 0
        : n.pageToken) !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var zn;
(function (t) {
  ((t.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED"),
    (t.OUTCOME_OK = "OUTCOME_OK"),
    (t.OUTCOME_FAILED = "OUTCOME_FAILED"),
    (t.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED"));
})(zn || (zn = {}));
var Hn;
(function (t) {
  ((t.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED"), (t.PYTHON = "PYTHON"));
})(Hn || (Hn = {}));
var ve;
(function (t) {
  ((t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
    (t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
    (t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT"),
    (t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
    (t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
    (t.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY"));
})(ve || (ve = {}));
var $n;
(function (t) {
  ((t.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED"),
    (t.SEVERITY = "SEVERITY"),
    (t.PROBABILITY = "PROBABILITY"));
})($n || ($n = {}));
var ye;
(function (t) {
  ((t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
    (t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (t.BLOCK_NONE = "BLOCK_NONE"),
    (t.OFF = "OFF"));
})(ye || (ye = {}));
var Jn;
(function (t) {
  ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (t.MODE_DYNAMIC = "MODE_DYNAMIC"));
})(Jn || (Jn = {}));
var On;
(function (t) {
  ((t.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"),
    (t.NO_AUTH = "NO_AUTH"),
    (t.API_KEY_AUTH = "API_KEY_AUTH"),
    (t.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH"),
    (t.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH"),
    (t.OAUTH = "OAUTH"),
    (t.OIDC_AUTH = "OIDC_AUTH"));
})(On || (On = {}));
var ie;
(function (t) {
  ((t.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"),
    (t.STRING = "STRING"),
    (t.NUMBER = "NUMBER"),
    (t.INTEGER = "INTEGER"),
    (t.BOOLEAN = "BOOLEAN"),
    (t.ARRAY = "ARRAY"),
    (t.OBJECT = "OBJECT"));
})(ie || (ie = {}));
var Wn;
(function (t) {
  ((t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
    (t.STOP = "STOP"),
    (t.MAX_TOKENS = "MAX_TOKENS"),
    (t.SAFETY = "SAFETY"),
    (t.RECITATION = "RECITATION"),
    (t.LANGUAGE = "LANGUAGE"),
    (t.OTHER = "OTHER"),
    (t.BLOCKLIST = "BLOCKLIST"),
    (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
    (t.SPII = "SPII"),
    (t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL"),
    (t.IMAGE_SAFETY = "IMAGE_SAFETY"));
})(Wn || (Wn = {}));
var Yn;
(function (t) {
  ((t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
    (t.NEGLIGIBLE = "NEGLIGIBLE"),
    (t.LOW = "LOW"),
    (t.MEDIUM = "MEDIUM"),
    (t.HIGH = "HIGH"));
})(Yn || (Yn = {}));
var Kn;
(function (t) {
  ((t.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED"),
    (t.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE"),
    (t.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW"),
    (t.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM"),
    (t.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH"));
})(Kn || (Kn = {}));
var Xn;
(function (t) {
  ((t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
    (t.SAFETY = "SAFETY"),
    (t.OTHER = "OTHER"),
    (t.BLOCKLIST = "BLOCKLIST"),
    (t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"));
})(Xn || (Xn = {}));
var Qn;
(function (t) {
  ((t.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED"),
    (t.ON_DEMAND = "ON_DEMAND"),
    (t.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT"));
})(Qn || (Qn = {}));
var ze;
(function (t) {
  ((t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"),
    (t.TEXT = "TEXT"),
    (t.IMAGE = "IMAGE"),
    (t.AUDIO = "AUDIO"));
})(ze || (ze = {}));
var Zn;
(function (t) {
  ((t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED"),
    (t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW"),
    (t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM"),
    (t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH"));
})(Zn || (Zn = {}));
var sn;
(function (t) {
  ((t.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED"),
    (t.JOB_STATE_QUEUED = "JOB_STATE_QUEUED"),
    (t.JOB_STATE_PENDING = "JOB_STATE_PENDING"),
    (t.JOB_STATE_RUNNING = "JOB_STATE_RUNNING"),
    (t.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED"),
    (t.JOB_STATE_FAILED = "JOB_STATE_FAILED"),
    (t.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"),
    (t.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"),
    (t.JOB_STATE_PAUSED = "JOB_STATE_PAUSED"),
    (t.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED"),
    (t.JOB_STATE_UPDATING = "JOB_STATE_UPDATING"),
    (t.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED"));
})(sn || (sn = {}));
var jn;
(function (t) {
  ((t.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED"),
    (t.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE"),
    (t.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO"),
    (t.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR"),
    (t.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT"),
    (t.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN"),
    (t.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO"));
})(jn || (jn = {}));
var et;
(function (t) {
  ((t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED =
    "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"),
    (t.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY"),
    (t.BALANCED = "BALANCED"),
    (t.PRIORITIZE_COST = "PRIORITIZE_COST"));
})(et || (et = {}));
var nt;
(function (t) {
  ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (t.MODE_DYNAMIC = "MODE_DYNAMIC"));
})(nt || (nt = {}));
var tt;
(function (t) {
  ((t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (t.AUTO = "AUTO"),
    (t.ANY = "ANY"),
    (t.NONE = "NONE"));
})(tt || (tt = {}));
var ot;
(function (t) {
  ((t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (t.BLOCK_NONE = "BLOCK_NONE"));
})(ot || (ot = {}));
var it;
(function (t) {
  ((t.DONT_ALLOW = "DONT_ALLOW"),
    (t.ALLOW_ADULT = "ALLOW_ADULT"),
    (t.ALLOW_ALL = "ALLOW_ALL"));
})(it || (it = {}));
var st;
(function (t) {
  ((t.auto = "auto"),
    (t.en = "en"),
    (t.ja = "ja"),
    (t.ko = "ko"),
    (t.hi = "hi"));
})(st || (st = {}));
var rt;
(function (t) {
  ((t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED"),
    (t.PROCESSING = "PROCESSING"),
    (t.ACTIVE = "ACTIVE"),
    (t.FAILED = "FAILED"));
})(rt || (rt = {}));
var lt;
(function (t) {
  ((t.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"),
    (t.UPLOADED = "UPLOADED"),
    (t.GENERATED = "GENERATED"));
})(lt || (lt = {}));
var at;
(function (t) {
  ((t.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT"),
    (t.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED"),
    (t.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND"),
    (t.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND"),
    (t.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC"));
})(at || (at = {}));
var ut;
(function (t) {
  ((t.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT"),
    (t.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY"),
    (t.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE"),
    (t.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH"));
})(ut || (ut = {}));
var ct;
(function (t) {
  ((t.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT"),
    (t.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON"),
    (t.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL"),
    (t.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT"));
})(ct || (ct = {}));
var dt;
(function (t) {
  ((t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED"),
    (t.TEXT = "TEXT"),
    (t.IMAGE = "IMAGE"),
    (t.VIDEO = "VIDEO"),
    (t.AUDIO = "AUDIO"),
    (t.DOCUMENT = "DOCUMENT"));
})(dt || (dt = {}));
var ft;
(function (t) {
  ((t.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED"),
    (t.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH"),
    (t.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW"));
})(ft || (ft = {}));
var mt;
(function (t) {
  ((t.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED"),
    (t.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH"),
    (t.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW"));
})(mt || (mt = {}));
var pt;
(function (t) {
  ((t.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED"),
    (t.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS"),
    (t.NO_INTERRUPTION = "NO_INTERRUPTION"));
})(pt || (pt = {}));
var ht;
(function (t) {
  ((t.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED"),
    (t.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY"),
    (t.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT"));
})(ht || (ht = {}));
class De {
  get text() {
    var n, e, o, i, l, a, c, d;
    if (
      ((i =
        (o =
          (e =
            (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) ===
            null || e === void 0
            ? void 0
            : e.content) === null || o === void 0
          ? void 0
          : o.parts) === null || i === void 0
        ? void 0
        : i.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning text from the first one.",
      );
    let u = "",
      f = !1;
    const p = [];
    for (const h of (d =
      (c =
        (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) ===
          null || a === void 0
          ? void 0
          : a.content) === null || c === void 0
        ? void 0
        : c.parts) !== null && d !== void 0
      ? d
      : []) {
      for (const [v, g] of Object.entries(h))
        v !== "text" &&
          v !== "thought" &&
          (g !== null || g !== void 0) &&
          p.push(v);
      if (typeof h.text == "string") {
        if (typeof h.thought == "boolean" && h.thought) continue;
        ((f = !0), (u += h.text));
      }
    }
    return (
      p.length > 0 &&
        console.warn(
          `there are non-text parts ${p} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`,
        ),
      f ? u : void 0
    );
  }
  get data() {
    var n, e, o, i, l, a, c, d;
    if (
      ((i =
        (o =
          (e =
            (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) ===
            null || e === void 0
            ? void 0
            : e.content) === null || o === void 0
          ? void 0
          : o.parts) === null || i === void 0
        ? void 0
        : i.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning data from the first one.",
      );
    let u = "";
    const f = [];
    for (const p of (d =
      (c =
        (a = (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) ===
          null || a === void 0
          ? void 0
          : a.content) === null || c === void 0
        ? void 0
        : c.parts) !== null && d !== void 0
      ? d
      : []) {
      for (const [h, v] of Object.entries(p))
        h !== "inlineData" && (v !== null || v !== void 0) && f.push(h);
      p.inlineData &&
        typeof p.inlineData.data == "string" &&
        (u += atob(p.inlineData.data));
    }
    return (
      f.length > 0 &&
        console.warn(
          `there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`,
        ),
      u.length > 0 ? btoa(u) : void 0
    );
  }
  get functionCalls() {
    var n, e, o, i, l, a, c, d;
    if (
      ((i =
        (o =
          (e =
            (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) ===
            null || e === void 0
            ? void 0
            : e.content) === null || o === void 0
          ? void 0
          : o.parts) === null || i === void 0
        ? void 0
        : i.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning function calls from the first one.",
      );
    const u =
      (d =
        (c =
          (a =
            (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) ===
            null || a === void 0
            ? void 0
            : a.content) === null || c === void 0
          ? void 0
          : c.parts) === null || d === void 0
        ? void 0
        : d
            .filter((f) => f.functionCall)
            .map((f) => f.functionCall)
            .filter((f) => f !== void 0);
    if ((u == null ? void 0 : u.length) !== 0) return u;
  }
  get executableCode() {
    var n, e, o, i, l, a, c, d, u;
    if (
      ((i =
        (o =
          (e =
            (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) ===
            null || e === void 0
            ? void 0
            : e.content) === null || o === void 0
          ? void 0
          : o.parts) === null || i === void 0
        ? void 0
        : i.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning executable code from the first one.",
      );
    const f =
      (d =
        (c =
          (a =
            (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) ===
            null || a === void 0
            ? void 0
            : a.content) === null || c === void 0
          ? void 0
          : c.parts) === null || d === void 0
        ? void 0
        : d
            .filter((p) => p.executableCode)
            .map((p) => p.executableCode)
            .filter((p) => p !== void 0);
    if ((f == null ? void 0 : f.length) !== 0)
      return (u = f == null ? void 0 : f[0]) === null || u === void 0
        ? void 0
        : u.code;
  }
  get codeExecutionResult() {
    var n, e, o, i, l, a, c, d, u;
    if (
      ((i =
        (o =
          (e =
            (n = this.candidates) === null || n === void 0 ? void 0 : n[0]) ===
            null || e === void 0
            ? void 0
            : e.content) === null || o === void 0
          ? void 0
          : o.parts) === null || i === void 0
        ? void 0
        : i.length) === 0
    )
      return;
    this.candidates &&
      this.candidates.length > 1 &&
      console.warn(
        "there are multiple candidates in the response, returning code execution result from the first one.",
      );
    const f =
      (d =
        (c =
          (a =
            (l = this.candidates) === null || l === void 0 ? void 0 : l[0]) ===
            null || a === void 0
            ? void 0
            : a.content) === null || c === void 0
          ? void 0
          : c.parts) === null || d === void 0
        ? void 0
        : d
            .filter((p) => p.codeExecutionResult)
            .map((p) => p.codeExecutionResult)
            .filter((p) => p !== void 0);
    if ((f == null ? void 0 : f.length) !== 0)
      return (u = f == null ? void 0 : f[0]) === null || u === void 0
        ? void 0
        : u.output;
  }
}
class gt {}
class vt {}
class yt {}
class xt {}
class Nt {}
class fs {}
class Ct {}
class Tt {}
class _t {}
class ms {}
class rn {
  constructor(n) {
    const e = {};
    for (const o of n.headers.entries()) e[o[0]] = o[1];
    ((this.headers = e), (this.responseInternal = n));
  }
  json() {
    return this.responseInternal.json();
  }
}
class ps {}
class hs {}
class gs {
  get text() {
    var n, e, o;
    let i = "",
      l = !1;
    const a = [];
    for (const c of (o =
      (e =
        (n = this.serverContent) === null || n === void 0
          ? void 0
          : n.modelTurn) === null || e === void 0
        ? void 0
        : e.parts) !== null && o !== void 0
      ? o
      : []) {
      for (const [d, u] of Object.entries(c))
        d !== "text" && d !== "thought" && u !== null && a.push(d);
      if (typeof c.text == "string") {
        if (typeof c.thought == "boolean" && c.thought) continue;
        ((l = !0), (i += c.text));
      }
    }
    return (
      a.length > 0 &&
        console.warn(
          `there are non-text parts ${a} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`,
        ),
      l ? i : void 0
    );
  }
  get data() {
    var n, e, o;
    let i = "";
    const l = [];
    for (const a of (o =
      (e =
        (n = this.serverContent) === null || n === void 0
          ? void 0
          : n.modelTurn) === null || e === void 0
        ? void 0
        : e.parts) !== null && o !== void 0
      ? o
      : []) {
      for (const [c, d] of Object.entries(a))
        c !== "inlineData" && d !== null && l.push(c);
      a.inlineData &&
        typeof a.inlineData.data == "string" &&
        (i += atob(a.inlineData.data));
    }
    return (
      l.length > 0 &&
        console.warn(
          `there are non-data parts ${l} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`,
        ),
      i.length > 0 ? btoa(i) : void 0
    );
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class vs extends Pe {
  constructor(n) {
    (super(),
      (this.apiClient = n),
      (this.list = async (e = {}) =>
        new Qe(
          Ne.PAGED_ITEM_CACHED_CONTENTS,
          (o) => this.listInternal(o),
          await this.listInternal(e),
          e,
        )));
  }
  async create(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = ns(this.apiClient, n);
      return (
        (c = A("cachedContents", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ve(this.apiClient, f))
      );
    } else {
      const u = Di(this.apiClient, n);
      return (
        (c = A("cachedContents", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ue(this.apiClient, f))
      );
    }
  }
  async get(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = ts(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ve(this.apiClient, f))
      );
    } else {
      const u = Fi(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ue(this.apiClient, f))
      );
    }
  }
  async delete(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = os(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "DELETE",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then(() => {
          const f = cs(),
            p = new Tt();
          return (Object.assign(p, f), p);
        })
      );
    } else {
      const u = Li(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "DELETE",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then(() => {
          const f = as(),
            p = new Tt();
          return (Object.assign(p, f), p);
        })
      );
    }
  }
  async update(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = ss(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "PATCH",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ve(this.apiClient, f))
      );
    } else {
      const u = Vi(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "PATCH",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ue(this.apiClient, f))
      );
    }
  }
  async listInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = ls(this.apiClient, n);
      return (
        (c = A("cachedContents", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = ds(this.apiClient, f),
            h = new _t();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = qi(this.apiClient, n);
      return (
        (c = A("cachedContents", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = us(this.apiClient, f),
            h = new _t();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
}
function Et(t) {
  var n = typeof Symbol == "function" && Symbol.iterator,
    e = n && t[n],
    o = 0;
  if (e) return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && o >= t.length && (t = void 0),
          { value: t && t[o++], done: !t }
        );
      },
    };
  throw new TypeError(
    n ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function z(t) {
  return this instanceof z ? ((this.v = t), this) : new z(t);
}
function He(t, n, e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = e.apply(t, n || []),
    i,
    l = [];
  return (
    (i = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    c("next"),
    c("throw"),
    c("return", a),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function a(v) {
    return function (g) {
      return Promise.resolve(g).then(v, p);
    };
  }
  function c(v, g) {
    o[v] &&
      ((i[v] = function (y) {
        return new Promise(function (x, T) {
          l.push([v, y, x, T]) > 1 || d(v, y);
        });
      }),
      g && (i[v] = g(i[v])));
  }
  function d(v, g) {
    try {
      u(o[v](g));
    } catch (y) {
      h(l[0][3], y);
    }
  }
  function u(v) {
    v.value instanceof z
      ? Promise.resolve(v.value.v).then(f, p)
      : h(l[0][2], v);
  }
  function f(v) {
    d("next", v);
  }
  function p(v) {
    d("throw", v);
  }
  function h(v, g) {
    (v(g), l.shift(), l.length && d(l[0][0], l[0][1]));
  }
}
function ln(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t[Symbol.asyncIterator],
    e;
  return n
    ? n.call(t)
    : ((t = typeof Et == "function" ? Et(t) : t[Symbol.iterator]()),
      (e = {}),
      o("next"),
      o("throw"),
      o("return"),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e);
  function o(l) {
    e[l] =
      t[l] &&
      function (a) {
        return new Promise(function (c, d) {
          ((a = t[l](a)), i(c, d, a.done, a.value));
        });
      };
  }
  function i(l, a, c, d) {
    Promise.resolve(d).then(function (u) {
      l({ value: u, done: c });
    }, a);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function ys(t) {
  var n;
  if (t.candidates == null || t.candidates.length === 0) return !1;
  const e = (n = t.candidates[0]) === null || n === void 0 ? void 0 : n.content;
  return e === void 0 ? !1 : eo(e);
}
function eo(t) {
  if (t.parts === void 0 || t.parts.length === 0) return !1;
  for (const n of t.parts)
    if (
      n === void 0 ||
      Object.keys(n).length === 0 ||
      (n.text !== void 0 && n.text === "")
    )
      return !1;
  return !0;
}
function xs(t) {
  if (t.length !== 0) {
    if (t[0].role !== "user")
      throw new Error("History must start with a user turn.");
    for (const n of t)
      if (n.role !== "user" && n.role !== "model")
        throw new Error(`Role must be user or model, but got ${n.role}.`);
  }
}
function Ns(t) {
  if (t === void 0 || t.length === 0) return [];
  const n = [],
    e = t.length;
  let o = 0,
    i = t[0];
  for (; o < e; )
    if (t[o].role === "user") ((i = t[o]), o++);
    else {
      const l = [];
      let a = !0;
      for (; o < e && t[o].role === "model"; )
        (l.push(t[o]), a && !eo(t[o]) && (a = !1), o++);
      a && (n.push(i), n.push(...l));
    }
  return n;
}
class Cs {
  constructor(n, e) {
    ((this.modelsModule = n), (this.apiClient = e));
  }
  create(n) {
    return new Ts(
      this.apiClient,
      this.modelsModule,
      n.model,
      n.config,
      n.history,
    );
  }
}
class Ts {
  constructor(n, e, o, i = {}, l = []) {
    ((this.apiClient = n),
      (this.modelsModule = e),
      (this.model = o),
      (this.config = i),
      (this.history = l),
      (this.sendPromise = Promise.resolve()),
      xs(l));
  }
  async sendMessage(n) {
    var e;
    await this.sendPromise;
    const o = J(this.apiClient, n.message),
      i = this.modelsModule.generateContent({
        model: this.model,
        contents: this.getHistory(!0).concat(o),
        config: (e = n.config) !== null && e !== void 0 ? e : this.config,
      });
    return (
      (this.sendPromise = (async () => {
        var l, a;
        const d =
            (a =
              (l = (await i).candidates) === null || l === void 0
                ? void 0
                : l[0]) === null || a === void 0
              ? void 0
              : a.content,
          u = d ? [d] : [];
        this.recordHistory(o, u);
      })()),
      await this.sendPromise,
      i
    );
  }
  async sendMessageStream(n) {
    var e;
    await this.sendPromise;
    const o = J(this.apiClient, n.message),
      i = this.modelsModule.generateContentStream({
        model: this.model,
        contents: this.getHistory(!0).concat(o),
        config: (e = n.config) !== null && e !== void 0 ? e : this.config,
      });
    this.sendPromise = i.then(() => {}).catch(() => {});
    const l = await i;
    return this.processStreamResponse(l, o);
  }
  getHistory(n = !1) {
    return n ? Ns(this.history) : this.history;
  }
  processStreamResponse(n, e) {
    var o, i;
    return He(this, arguments, function* () {
      var a, c, d, u;
      const f = [];
      try {
        for (
          var p = !0, h = ln(n), v;
          (v = yield z(h.next())), (a = v.done), !a;
          p = !0
        ) {
          ((u = v.value), (p = !1));
          const g = u;
          if (ys(g)) {
            const y =
              (i =
                (o = g.candidates) === null || o === void 0 ? void 0 : o[0]) ===
                null || i === void 0
                ? void 0
                : i.content;
            y !== void 0 && f.push(y);
          }
          yield yield z(g);
        }
      } catch (g) {
        c = { error: g };
      } finally {
        try {
          !p && !a && (d = h.return) && (yield z(d.call(h)));
        } finally {
          if (c) throw c.error;
        }
      }
      this.recordHistory(e, f);
    });
  }
  recordHistory(n, e) {
    let o = [];
    (e.length > 0 && e.every((i) => i.role === "model")
      ? (o = e)
      : o.push({ role: "model", parts: [] }),
      this.history.push(n),
      this.history.push(...o));
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function _s(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  return (e !== void 0 && l != null && r(e, ["_query", "pageToken"], l), o);
}
function Es(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], _s(t, o, e)), e);
}
function bs(t, n) {
  const e = {},
    o = s(n, ["details"]);
  o != null && r(e, ["details"], o);
  const i = s(n, ["message"]);
  i != null && r(e, ["message"], i);
  const l = s(n, ["code"]);
  return (l != null && r(e, ["code"], l), e);
}
function Ss(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["mimeType"]);
  l != null && r(e, ["mimeType"], l);
  const a = s(n, ["sizeBytes"]);
  a != null && r(e, ["sizeBytes"], a);
  const c = s(n, ["createTime"]);
  c != null && r(e, ["createTime"], c);
  const d = s(n, ["expirationTime"]);
  d != null && r(e, ["expirationTime"], d);
  const u = s(n, ["updateTime"]);
  u != null && r(e, ["updateTime"], u);
  const f = s(n, ["sha256Hash"]);
  f != null && r(e, ["sha256Hash"], f);
  const p = s(n, ["uri"]);
  p != null && r(e, ["uri"], p);
  const h = s(n, ["downloadUri"]);
  h != null && r(e, ["downloadUri"], h);
  const v = s(n, ["state"]);
  v != null && r(e, ["state"], v);
  const g = s(n, ["source"]);
  g != null && r(e, ["source"], g);
  const y = s(n, ["videoMetadata"]);
  y != null && r(e, ["videoMetadata"], y);
  const x = s(n, ["error"]);
  return (x != null && r(e, ["error"], bs(t, x)), e);
}
function As(t, n) {
  const e = {},
    o = s(n, ["file"]);
  o != null && r(e, ["file"], Ss(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Is(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "file"], Qt(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Ps(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "file"], Qt(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Ms(t, n) {
  const e = {},
    o = s(n, ["details"]);
  o != null && r(e, ["details"], o);
  const i = s(n, ["message"]);
  i != null && r(e, ["message"], i);
  const l = s(n, ["code"]);
  return (l != null && r(e, ["code"], l), e);
}
function an(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["mimeType"]);
  l != null && r(e, ["mimeType"], l);
  const a = s(n, ["sizeBytes"]);
  a != null && r(e, ["sizeBytes"], a);
  const c = s(n, ["createTime"]);
  c != null && r(e, ["createTime"], c);
  const d = s(n, ["expirationTime"]);
  d != null && r(e, ["expirationTime"], d);
  const u = s(n, ["updateTime"]);
  u != null && r(e, ["updateTime"], u);
  const f = s(n, ["sha256Hash"]);
  f != null && r(e, ["sha256Hash"], f);
  const p = s(n, ["uri"]);
  p != null && r(e, ["uri"], p);
  const h = s(n, ["downloadUri"]);
  h != null && r(e, ["downloadUri"], h);
  const v = s(n, ["state"]);
  v != null && r(e, ["state"], v);
  const g = s(n, ["source"]);
  g != null && r(e, ["source"], g);
  const y = s(n, ["videoMetadata"]);
  y != null && r(e, ["videoMetadata"], y);
  const x = s(n, ["error"]);
  return (x != null && r(e, ["error"], Ms(t, x)), e);
}
function ws(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["files"]);
  if (i != null) {
    let l = i;
    (Array.isArray(l) && (l = l.map((a) => an(t, a))), r(e, ["files"], l));
  }
  return e;
}
function Rs() {
  return {};
}
function ks() {
  return {};
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Ds extends Pe {
  constructor(n) {
    (super(),
      (this.apiClient = n),
      (this.list = async (e = {}) =>
        new Qe(
          Ne.PAGED_ITEM_FILES,
          (o) => this.listInternal(o),
          await this.listInternal(e),
          e,
        )));
  }
  async upload(n) {
    if (this.apiClient.isVertexAI())
      throw new Error(
        "Vertex AI does not support uploading files. You can share files through a GCS bucket.",
      );
    return this.apiClient
      .uploadFile(n.file, n.config)
      .then((e) => an(this.apiClient, e));
  }
  async download(n) {
    await this.apiClient.downloadFile(n);
  }
  async listInternal(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API.",
      );
    {
      const c = Es(this.apiClient, n);
      return (
        (l = A("files", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => {
          const u = ws(this.apiClient, d),
            f = new ms();
          return (Object.assign(f, u), f);
        })
      );
    }
  }
  async createInternal(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API.",
      );
    {
      const c = As(this.apiClient, n);
      return (
        (l = A("upload/v1beta/files", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then(() => {
          const d = Rs(),
            u = new ps();
          return (Object.assign(u, d), u);
        })
      );
    }
  }
  async get(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API.",
      );
    {
      const c = Is(this.apiClient, n);
      return (
        (l = A("files/{file}", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => an(this.apiClient, d))
      );
    }
  }
  async delete(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API.",
      );
    {
      const c = Ps(this.apiClient, n);
      return (
        (l = A("files/{file}", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "DELETE",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then(() => {
          const d = ks(),
            u = new hs();
          return (Object.assign(u, d), u);
        })
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Fs(t, n) {
  const e = {};
  if (s(n, ["videoMetadata"]) !== void 0)
    throw new Error("videoMetadata parameter is not supported in Gemini API.");
  const o = s(n, ["thought"]);
  o != null && r(e, ["thought"], o);
  const i = s(n, ["codeExecutionResult"]);
  i != null && r(e, ["codeExecutionResult"], i);
  const l = s(n, ["executableCode"]);
  l != null && r(e, ["executableCode"], l);
  const a = s(n, ["fileData"]);
  a != null && r(e, ["fileData"], a);
  const c = s(n, ["functionCall"]);
  c != null && r(e, ["functionCall"], c);
  const d = s(n, ["functionResponse"]);
  d != null && r(e, ["functionResponse"], d);
  const u = s(n, ["inlineData"]);
  u != null && r(e, ["inlineData"], u);
  const f = s(n, ["text"]);
  return (f != null && r(e, ["text"], f), e);
}
function Ls(t, n) {
  const e = {},
    o = s(n, ["videoMetadata"]);
  o != null && r(e, ["videoMetadata"], o);
  const i = s(n, ["thought"]);
  i != null && r(e, ["thought"], i);
  const l = s(n, ["codeExecutionResult"]);
  l != null && r(e, ["codeExecutionResult"], l);
  const a = s(n, ["executableCode"]);
  a != null && r(e, ["executableCode"], a);
  const c = s(n, ["fileData"]);
  c != null && r(e, ["fileData"], c);
  const d = s(n, ["functionCall"]);
  d != null && r(e, ["functionCall"], d);
  const u = s(n, ["functionResponse"]);
  u != null && r(e, ["functionResponse"], u);
  const f = s(n, ["inlineData"]);
  f != null && r(e, ["inlineData"], f);
  const p = s(n, ["text"]);
  return (p != null && r(e, ["text"], p), e);
}
function Us(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Fs(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function Vs(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Ls(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function Gs() {
  return {};
}
function qs() {
  return {};
}
function Bs(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function zs(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function Hs(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], Bs(t, o)), e);
}
function $s(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], zs(t, o)), e);
}
function Js() {
  return {};
}
function Os(t, n) {
  const e = {},
    o = s(n, ["apiKeyString"]);
  return (o != null && r(e, ["apiKeyString"], o), e);
}
function Ws(t, n) {
  const e = {},
    o = s(n, ["apiKeyConfig"]);
  o != null && r(e, ["apiKeyConfig"], Os(t, o));
  const i = s(n, ["authType"]);
  i != null && r(e, ["authType"], i);
  const l = s(n, ["googleServiceAccountConfig"]);
  l != null && r(e, ["googleServiceAccountConfig"], l);
  const a = s(n, ["httpBasicAuthConfig"]);
  a != null && r(e, ["httpBasicAuthConfig"], a);
  const c = s(n, ["oauthConfig"]);
  c != null && r(e, ["oauthConfig"], c);
  const d = s(n, ["oidcConfig"]);
  return (d != null && r(e, ["oidcConfig"], d), e);
}
function Ys(t, n) {
  const e = {},
    o = s(n, ["authConfig"]);
  return (o != null && r(e, ["authConfig"], Ws(t, o)), e);
}
function Ks(t, n) {
  const e = {};
  if (s(n, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], Gs());
  const i = s(n, ["googleSearchRetrieval"]);
  if (
    (i != null && r(e, ["googleSearchRetrieval"], Hs(t, i)),
    s(n, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API.",
    );
  if (s(n, ["googleMaps"]) !== void 0)
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  const l = s(n, ["codeExecution"]);
  l != null && r(e, ["codeExecution"], l);
  const a = s(n, ["functionDeclarations"]);
  return (a != null && r(e, ["functionDeclarations"], a), e);
}
function Xs(t, n) {
  const e = {},
    o = s(n, ["retrieval"]);
  (o != null && r(e, ["retrieval"], o),
    s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], qs()));
  const l = s(n, ["googleSearchRetrieval"]);
  (l != null && r(e, ["googleSearchRetrieval"], $s(t, l)),
    s(n, ["enterpriseWebSearch"]) != null &&
      r(e, ["enterpriseWebSearch"], Js()));
  const c = s(n, ["googleMaps"]);
  c != null && r(e, ["googleMaps"], Ys(t, c));
  const d = s(n, ["codeExecution"]);
  d != null && r(e, ["codeExecution"], d);
  const u = s(n, ["functionDeclarations"]);
  return (u != null && r(e, ["functionDeclarations"], u), e);
}
function Qs(t, n) {
  const e = {},
    o = s(n, ["handle"]);
  if ((o != null && r(e, ["handle"], o), s(n, ["transparent"]) !== void 0))
    throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function Zs(t, n) {
  const e = {},
    o = s(n, ["handle"]);
  o != null && r(e, ["handle"], o);
  const i = s(n, ["transparent"]);
  return (i != null && r(e, ["transparent"], i), e);
}
function bt() {
  return {};
}
function St() {
  return {};
}
function js(t, n) {
  const e = {},
    o = s(n, ["disabled"]);
  o != null && r(e, ["disabled"], o);
  const i = s(n, ["startOfSpeechSensitivity"]);
  i != null && r(e, ["startOfSpeechSensitivity"], i);
  const l = s(n, ["endOfSpeechSensitivity"]);
  l != null && r(e, ["endOfSpeechSensitivity"], l);
  const a = s(n, ["prefixPaddingMs"]);
  a != null && r(e, ["prefixPaddingMs"], a);
  const c = s(n, ["silenceDurationMs"]);
  return (c != null && r(e, ["silenceDurationMs"], c), e);
}
function er(t, n) {
  const e = {},
    o = s(n, ["disabled"]);
  o != null && r(e, ["disabled"], o);
  const i = s(n, ["startOfSpeechSensitivity"]);
  i != null && r(e, ["startOfSpeechSensitivity"], i);
  const l = s(n, ["endOfSpeechSensitivity"]);
  l != null && r(e, ["endOfSpeechSensitivity"], l);
  const a = s(n, ["prefixPaddingMs"]);
  a != null && r(e, ["prefixPaddingMs"], a);
  const c = s(n, ["silenceDurationMs"]);
  return (c != null && r(e, ["silenceDurationMs"], c), e);
}
function nr(t, n) {
  const e = {},
    o = s(n, ["automaticActivityDetection"]);
  o != null && r(e, ["automaticActivityDetection"], js(t, o));
  const i = s(n, ["activityHandling"]);
  i != null && r(e, ["activityHandling"], i);
  const l = s(n, ["turnCoverage"]);
  return (l != null && r(e, ["turnCoverage"], l), e);
}
function tr(t, n) {
  const e = {},
    o = s(n, ["automaticActivityDetection"]);
  o != null && r(e, ["automaticActivityDetection"], er(t, o));
  const i = s(n, ["activityHandling"]);
  i != null && r(e, ["activityHandling"], i);
  const l = s(n, ["turnCoverage"]);
  return (l != null && r(e, ["turnCoverage"], l), e);
}
function or(t, n) {
  const e = {},
    o = s(n, ["targetTokens"]);
  return (o != null && r(e, ["targetTokens"], o), e);
}
function ir(t, n) {
  const e = {},
    o = s(n, ["targetTokens"]);
  return (o != null && r(e, ["targetTokens"], o), e);
}
function sr(t, n) {
  const e = {},
    o = s(n, ["triggerTokens"]);
  o != null && r(e, ["triggerTokens"], o);
  const i = s(n, ["slidingWindow"]);
  return (i != null && r(e, ["slidingWindow"], or(t, i)), e);
}
function rr(t, n) {
  const e = {},
    o = s(n, ["triggerTokens"]);
  o != null && r(e, ["triggerTokens"], o);
  const i = s(n, ["slidingWindow"]);
  return (i != null && r(e, ["slidingWindow"], ir(t, i)), e);
}
function lr(t, n, e) {
  const o = {},
    i = s(n, ["generationConfig"]);
  e !== void 0 && i != null && r(e, ["setup", "generationConfig"], i);
  const l = s(n, ["responseModalities"]);
  e !== void 0 &&
    l != null &&
    r(e, ["setup", "generationConfig", "responseModalities"], l);
  const a = s(n, ["temperature"]);
  e !== void 0 &&
    a != null &&
    r(e, ["setup", "generationConfig", "temperature"], a);
  const c = s(n, ["topP"]);
  e !== void 0 && c != null && r(e, ["setup", "generationConfig", "topP"], c);
  const d = s(n, ["topK"]);
  e !== void 0 && d != null && r(e, ["setup", "generationConfig", "topK"], d);
  const u = s(n, ["maxOutputTokens"]);
  e !== void 0 &&
    u != null &&
    r(e, ["setup", "generationConfig", "maxOutputTokens"], u);
  const f = s(n, ["mediaResolution"]);
  e !== void 0 &&
    f != null &&
    r(e, ["setup", "generationConfig", "mediaResolution"], f);
  const p = s(n, ["seed"]);
  e !== void 0 && p != null && r(e, ["setup", "generationConfig", "seed"], p);
  const h = s(n, ["speechConfig"]);
  e !== void 0 &&
    h != null &&
    r(e, ["setup", "generationConfig", "speechConfig"], h);
  const v = s(n, ["systemInstruction"]);
  e !== void 0 &&
    v != null &&
    r(e, ["setup", "systemInstruction"], Us(t, J(t, v)));
  const g = s(n, ["tools"]);
  if (e !== void 0 && g != null) {
    let b = Xe(t, g);
    (Array.isArray(b) && (b = b.map((M) => Ks(t, Ke(t, M)))),
      r(e, ["setup", "tools"], b));
  }
  const y = s(n, ["sessionResumption"]);
  e !== void 0 && y != null && r(e, ["setup", "sessionResumption"], Qs(t, y));
  const x = s(n, ["inputAudioTranscription"]);
  e !== void 0 && x != null && r(e, ["setup", "inputAudioTranscription"], bt());
  const T = s(n, ["outputAudioTranscription"]);
  e !== void 0 &&
    T != null &&
    r(e, ["setup", "outputAudioTranscription"], bt());
  const C = s(n, ["realtimeInputConfig"]);
  e !== void 0 && C != null && r(e, ["setup", "realtimeInputConfig"], nr(t, C));
  const E = s(n, ["contextWindowCompression"]);
  return (
    e !== void 0 &&
      E != null &&
      r(e, ["setup", "contextWindowCompression"], sr(t, E)),
    o
  );
}
function ar(t, n, e) {
  const o = {},
    i = s(n, ["generationConfig"]);
  e !== void 0 && i != null && r(e, ["setup", "generationConfig"], i);
  const l = s(n, ["responseModalities"]);
  e !== void 0 &&
    l != null &&
    r(e, ["setup", "generationConfig", "responseModalities"], l);
  const a = s(n, ["temperature"]);
  e !== void 0 &&
    a != null &&
    r(e, ["setup", "generationConfig", "temperature"], a);
  const c = s(n, ["topP"]);
  e !== void 0 && c != null && r(e, ["setup", "generationConfig", "topP"], c);
  const d = s(n, ["topK"]);
  e !== void 0 && d != null && r(e, ["setup", "generationConfig", "topK"], d);
  const u = s(n, ["maxOutputTokens"]);
  e !== void 0 &&
    u != null &&
    r(e, ["setup", "generationConfig", "maxOutputTokens"], u);
  const f = s(n, ["mediaResolution"]);
  e !== void 0 &&
    f != null &&
    r(e, ["setup", "generationConfig", "mediaResolution"], f);
  const p = s(n, ["seed"]);
  e !== void 0 && p != null && r(e, ["setup", "generationConfig", "seed"], p);
  const h = s(n, ["speechConfig"]);
  e !== void 0 &&
    h != null &&
    r(e, ["setup", "generationConfig", "speechConfig"], h);
  const v = s(n, ["systemInstruction"]);
  e !== void 0 &&
    v != null &&
    r(e, ["setup", "systemInstruction"], Vs(t, J(t, v)));
  const g = s(n, ["tools"]);
  if (e !== void 0 && g != null) {
    let b = Xe(t, g);
    (Array.isArray(b) && (b = b.map((M) => Xs(t, Ke(t, M)))),
      r(e, ["setup", "tools"], b));
  }
  const y = s(n, ["sessionResumption"]);
  e !== void 0 && y != null && r(e, ["setup", "sessionResumption"], Zs(t, y));
  const x = s(n, ["inputAudioTranscription"]);
  e !== void 0 && x != null && r(e, ["setup", "inputAudioTranscription"], St());
  const T = s(n, ["outputAudioTranscription"]);
  e !== void 0 &&
    T != null &&
    r(e, ["setup", "outputAudioTranscription"], St());
  const C = s(n, ["realtimeInputConfig"]);
  e !== void 0 && C != null && r(e, ["setup", "realtimeInputConfig"], tr(t, C));
  const E = s(n, ["contextWindowCompression"]);
  return (
    e !== void 0 &&
      E != null &&
      r(e, ["setup", "contextWindowCompression"], rr(t, E)),
    o
  );
}
function ur(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["setup", "model"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], lr(t, i, e)), e);
}
function cr(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["setup", "model"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], ar(t, i, e)), e);
}
function dr() {
  return {};
}
function fr() {
  return {};
}
function mr() {
  return {};
}
function pr() {
  return {};
}
function hr(t, n) {
  const e = {},
    o = s(n, ["media"]);
  o != null && r(e, ["mediaChunks"], Jt(t, o));
  const i = s(n, ["audio"]);
  i != null && r(e, ["audio"], Ni(t, i));
  const l = s(n, ["audioStreamEnd"]);
  l != null && r(e, ["audioStreamEnd"], l);
  const a = s(n, ["video"]);
  a != null && r(e, ["video"], xi(t, a));
  const c = s(n, ["text"]);
  return (
    c != null && r(e, ["text"], c),
    s(n, ["activityStart"]) != null && r(e, ["activityStart"], dr()),
    s(n, ["activityEnd"]) != null && r(e, ["activityEnd"], mr()),
    e
  );
}
function gr(t, n) {
  const e = {},
    o = s(n, ["media"]);
  if (
    (o != null && r(e, ["mediaChunks"], Jt(t, o)), s(n, ["audio"]) !== void 0)
  )
    throw new Error("audio parameter is not supported in Vertex AI.");
  const i = s(n, ["audioStreamEnd"]);
  if ((i != null && r(e, ["audioStreamEnd"], i), s(n, ["video"]) !== void 0))
    throw new Error("video parameter is not supported in Vertex AI.");
  if (s(n, ["text"]) !== void 0)
    throw new Error("text parameter is not supported in Vertex AI.");
  return (
    s(n, ["activityStart"]) != null && r(e, ["activityStart"], fr()),
    s(n, ["activityEnd"]) != null && r(e, ["activityEnd"], pr()),
    e
  );
}
function vr() {
  return {};
}
function yr() {
  return {};
}
function xr(t, n) {
  const e = {},
    o = s(n, ["thought"]);
  o != null && r(e, ["thought"], o);
  const i = s(n, ["codeExecutionResult"]);
  i != null && r(e, ["codeExecutionResult"], i);
  const l = s(n, ["executableCode"]);
  l != null && r(e, ["executableCode"], l);
  const a = s(n, ["fileData"]);
  a != null && r(e, ["fileData"], a);
  const c = s(n, ["functionCall"]);
  c != null && r(e, ["functionCall"], c);
  const d = s(n, ["functionResponse"]);
  d != null && r(e, ["functionResponse"], d);
  const u = s(n, ["inlineData"]);
  u != null && r(e, ["inlineData"], u);
  const f = s(n, ["text"]);
  return (f != null && r(e, ["text"], f), e);
}
function Nr(t, n) {
  const e = {},
    o = s(n, ["videoMetadata"]);
  o != null && r(e, ["videoMetadata"], o);
  const i = s(n, ["thought"]);
  i != null && r(e, ["thought"], i);
  const l = s(n, ["codeExecutionResult"]);
  l != null && r(e, ["codeExecutionResult"], l);
  const a = s(n, ["executableCode"]);
  a != null && r(e, ["executableCode"], a);
  const c = s(n, ["fileData"]);
  c != null && r(e, ["fileData"], c);
  const d = s(n, ["functionCall"]);
  d != null && r(e, ["functionCall"], d);
  const u = s(n, ["functionResponse"]);
  u != null && r(e, ["functionResponse"], u);
  const f = s(n, ["inlineData"]);
  f != null && r(e, ["inlineData"], f);
  const p = s(n, ["text"]);
  return (p != null && r(e, ["text"], p), e);
}
function Cr(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => xr(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function Tr(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Nr(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function At(t, n) {
  const e = {},
    o = s(n, ["text"]);
  o != null && r(e, ["text"], o);
  const i = s(n, ["finished"]);
  return (i != null && r(e, ["finished"], i), e);
}
function It(t, n) {
  const e = {},
    o = s(n, ["text"]);
  o != null && r(e, ["text"], o);
  const i = s(n, ["finished"]);
  return (i != null && r(e, ["finished"], i), e);
}
function _r(t, n) {
  const e = {},
    o = s(n, ["modelTurn"]);
  o != null && r(e, ["modelTurn"], Cr(t, o));
  const i = s(n, ["turnComplete"]);
  i != null && r(e, ["turnComplete"], i);
  const l = s(n, ["interrupted"]);
  l != null && r(e, ["interrupted"], l);
  const a = s(n, ["groundingMetadata"]);
  a != null && r(e, ["groundingMetadata"], a);
  const c = s(n, ["generationComplete"]);
  c != null && r(e, ["generationComplete"], c);
  const d = s(n, ["inputTranscription"]);
  d != null && r(e, ["inputTranscription"], At(t, d));
  const u = s(n, ["outputTranscription"]);
  return (u != null && r(e, ["outputTranscription"], At(t, u)), e);
}
function Er(t, n) {
  const e = {},
    o = s(n, ["modelTurn"]);
  o != null && r(e, ["modelTurn"], Tr(t, o));
  const i = s(n, ["turnComplete"]);
  i != null && r(e, ["turnComplete"], i);
  const l = s(n, ["interrupted"]);
  l != null && r(e, ["interrupted"], l);
  const a = s(n, ["groundingMetadata"]);
  a != null && r(e, ["groundingMetadata"], a);
  const c = s(n, ["generationComplete"]);
  c != null && r(e, ["generationComplete"], c);
  const d = s(n, ["inputTranscription"]);
  d != null && r(e, ["inputTranscription"], It(t, d));
  const u = s(n, ["outputTranscription"]);
  return (u != null && r(e, ["outputTranscription"], It(t, u)), e);
}
function br(t, n) {
  const e = {},
    o = s(n, ["id"]);
  o != null && r(e, ["id"], o);
  const i = s(n, ["args"]);
  i != null && r(e, ["args"], i);
  const l = s(n, ["name"]);
  return (l != null && r(e, ["name"], l), e);
}
function Sr(t, n) {
  const e = {},
    o = s(n, ["args"]);
  o != null && r(e, ["args"], o);
  const i = s(n, ["name"]);
  return (i != null && r(e, ["name"], i), e);
}
function Ar(t, n) {
  const e = {},
    o = s(n, ["functionCalls"]);
  if (o != null) {
    let i = o;
    (Array.isArray(i) && (i = i.map((l) => br(t, l))),
      r(e, ["functionCalls"], i));
  }
  return e;
}
function Ir(t, n) {
  const e = {},
    o = s(n, ["functionCalls"]);
  if (o != null) {
    let i = o;
    (Array.isArray(i) && (i = i.map((l) => Sr(t, l))),
      r(e, ["functionCalls"], i));
  }
  return e;
}
function Pr(t, n) {
  const e = {},
    o = s(n, ["ids"]);
  return (o != null && r(e, ["ids"], o), e);
}
function Mr(t, n) {
  const e = {},
    o = s(n, ["ids"]);
  return (o != null && r(e, ["ids"], o), e);
}
function Fe(t, n) {
  const e = {},
    o = s(n, ["modality"]);
  o != null && r(e, ["modality"], o);
  const i = s(n, ["tokenCount"]);
  return (i != null && r(e, ["tokenCount"], i), e);
}
function Le(t, n) {
  const e = {},
    o = s(n, ["modality"]);
  o != null && r(e, ["modality"], o);
  const i = s(n, ["tokenCount"]);
  return (i != null && r(e, ["tokenCount"], i), e);
}
function wr(t, n) {
  const e = {},
    o = s(n, ["promptTokenCount"]);
  o != null && r(e, ["promptTokenCount"], o);
  const i = s(n, ["cachedContentTokenCount"]);
  i != null && r(e, ["cachedContentTokenCount"], i);
  const l = s(n, ["responseTokenCount"]);
  l != null && r(e, ["responseTokenCount"], l);
  const a = s(n, ["toolUsePromptTokenCount"]);
  a != null && r(e, ["toolUsePromptTokenCount"], a);
  const c = s(n, ["thoughtsTokenCount"]);
  c != null && r(e, ["thoughtsTokenCount"], c);
  const d = s(n, ["totalTokenCount"]);
  d != null && r(e, ["totalTokenCount"], d);
  const u = s(n, ["promptTokensDetails"]);
  if (u != null) {
    let v = u;
    (Array.isArray(v) && (v = v.map((g) => Fe(t, g))),
      r(e, ["promptTokensDetails"], v));
  }
  const f = s(n, ["cacheTokensDetails"]);
  if (f != null) {
    let v = f;
    (Array.isArray(v) && (v = v.map((g) => Fe(t, g))),
      r(e, ["cacheTokensDetails"], v));
  }
  const p = s(n, ["responseTokensDetails"]);
  if (p != null) {
    let v = p;
    (Array.isArray(v) && (v = v.map((g) => Fe(t, g))),
      r(e, ["responseTokensDetails"], v));
  }
  const h = s(n, ["toolUsePromptTokensDetails"]);
  if (h != null) {
    let v = h;
    (Array.isArray(v) && (v = v.map((g) => Fe(t, g))),
      r(e, ["toolUsePromptTokensDetails"], v));
  }
  return e;
}
function Rr(t, n) {
  const e = {},
    o = s(n, ["promptTokenCount"]);
  o != null && r(e, ["promptTokenCount"], o);
  const i = s(n, ["cachedContentTokenCount"]);
  i != null && r(e, ["cachedContentTokenCount"], i);
  const l = s(n, ["candidatesTokenCount"]);
  l != null && r(e, ["responseTokenCount"], l);
  const a = s(n, ["toolUsePromptTokenCount"]);
  a != null && r(e, ["toolUsePromptTokenCount"], a);
  const c = s(n, ["thoughtsTokenCount"]);
  c != null && r(e, ["thoughtsTokenCount"], c);
  const d = s(n, ["totalTokenCount"]);
  d != null && r(e, ["totalTokenCount"], d);
  const u = s(n, ["promptTokensDetails"]);
  if (u != null) {
    let g = u;
    (Array.isArray(g) && (g = g.map((y) => Le(t, y))),
      r(e, ["promptTokensDetails"], g));
  }
  const f = s(n, ["cacheTokensDetails"]);
  if (f != null) {
    let g = f;
    (Array.isArray(g) && (g = g.map((y) => Le(t, y))),
      r(e, ["cacheTokensDetails"], g));
  }
  const p = s(n, ["candidatesTokensDetails"]);
  if (p != null) {
    let g = p;
    (Array.isArray(g) && (g = g.map((y) => Le(t, y))),
      r(e, ["responseTokensDetails"], g));
  }
  const h = s(n, ["toolUsePromptTokensDetails"]);
  if (h != null) {
    let g = h;
    (Array.isArray(g) && (g = g.map((y) => Le(t, y))),
      r(e, ["toolUsePromptTokensDetails"], g));
  }
  const v = s(n, ["trafficType"]);
  return (v != null && r(e, ["trafficType"], v), e);
}
function kr(t, n) {
  const e = {},
    o = s(n, ["timeLeft"]);
  return (o != null && r(e, ["timeLeft"], o), e);
}
function Dr(t, n) {
  const e = {},
    o = s(n, ["timeLeft"]);
  return (o != null && r(e, ["timeLeft"], o), e);
}
function Fr(t, n) {
  const e = {},
    o = s(n, ["newHandle"]);
  o != null && r(e, ["newHandle"], o);
  const i = s(n, ["resumable"]);
  i != null && r(e, ["resumable"], i);
  const l = s(n, ["lastConsumedClientMessageIndex"]);
  return (l != null && r(e, ["lastConsumedClientMessageIndex"], l), e);
}
function Lr(t, n) {
  const e = {},
    o = s(n, ["newHandle"]);
  o != null && r(e, ["newHandle"], o);
  const i = s(n, ["resumable"]);
  i != null && r(e, ["resumable"], i);
  const l = s(n, ["lastConsumedClientMessageIndex"]);
  return (l != null && r(e, ["lastConsumedClientMessageIndex"], l), e);
}
function Ur(t, n) {
  const e = {};
  s(n, ["setupComplete"]) != null && r(e, ["setupComplete"], vr());
  const i = s(n, ["serverContent"]);
  i != null && r(e, ["serverContent"], _r(t, i));
  const l = s(n, ["toolCall"]);
  l != null && r(e, ["toolCall"], Ar(t, l));
  const a = s(n, ["toolCallCancellation"]);
  a != null && r(e, ["toolCallCancellation"], Pr(t, a));
  const c = s(n, ["usageMetadata"]);
  c != null && r(e, ["usageMetadata"], wr(t, c));
  const d = s(n, ["goAway"]);
  d != null && r(e, ["goAway"], kr(t, d));
  const u = s(n, ["sessionResumptionUpdate"]);
  return (u != null && r(e, ["sessionResumptionUpdate"], Fr(t, u)), e);
}
function Vr(t, n) {
  const e = {};
  s(n, ["setupComplete"]) != null && r(e, ["setupComplete"], yr());
  const i = s(n, ["serverContent"]);
  i != null && r(e, ["serverContent"], Er(t, i));
  const l = s(n, ["toolCall"]);
  l != null && r(e, ["toolCall"], Ir(t, l));
  const a = s(n, ["toolCallCancellation"]);
  a != null && r(e, ["toolCallCancellation"], Mr(t, a));
  const c = s(n, ["usageMetadata"]);
  c != null && r(e, ["usageMetadata"], Rr(t, c));
  const d = s(n, ["goAway"]);
  d != null && r(e, ["goAway"], Dr(t, d));
  const u = s(n, ["sessionResumptionUpdate"]);
  return (u != null && r(e, ["sessionResumptionUpdate"], Lr(t, u)), e);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Gr(t, n) {
  const e = {};
  if (s(n, ["videoMetadata"]) !== void 0)
    throw new Error("videoMetadata parameter is not supported in Gemini API.");
  const o = s(n, ["thought"]);
  o != null && r(e, ["thought"], o);
  const i = s(n, ["codeExecutionResult"]);
  i != null && r(e, ["codeExecutionResult"], i);
  const l = s(n, ["executableCode"]);
  l != null && r(e, ["executableCode"], l);
  const a = s(n, ["fileData"]);
  a != null && r(e, ["fileData"], a);
  const c = s(n, ["functionCall"]);
  c != null && r(e, ["functionCall"], c);
  const d = s(n, ["functionResponse"]);
  d != null && r(e, ["functionResponse"], d);
  const u = s(n, ["inlineData"]);
  u != null && r(e, ["inlineData"], u);
  const f = s(n, ["text"]);
  return (f != null && r(e, ["text"], f), e);
}
function Ze(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Gr(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function qr(t, n) {
  const e = {};
  if (s(n, ["method"]) !== void 0)
    throw new Error("method parameter is not supported in Gemini API.");
  const o = s(n, ["category"]);
  o != null && r(e, ["category"], o);
  const i = s(n, ["threshold"]);
  return (i != null && r(e, ["threshold"], i), e);
}
function Br() {
  return {};
}
function zr(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function Hr(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], zr(t, o)), e);
}
function $r(t, n) {
  const e = {};
  if (s(n, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], Br());
  const i = s(n, ["googleSearchRetrieval"]);
  if (
    (i != null && r(e, ["googleSearchRetrieval"], Hr(t, i)),
    s(n, ["enterpriseWebSearch"]) !== void 0)
  )
    throw new Error(
      "enterpriseWebSearch parameter is not supported in Gemini API.",
    );
  if (s(n, ["googleMaps"]) !== void 0)
    throw new Error("googleMaps parameter is not supported in Gemini API.");
  const l = s(n, ["codeExecution"]);
  l != null && r(e, ["codeExecution"], l);
  const a = s(n, ["functionDeclarations"]);
  return (a != null && r(e, ["functionDeclarations"], a), e);
}
function Jr(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["allowedFunctionNames"]);
  return (i != null && r(e, ["allowedFunctionNames"], i), e);
}
function Or(t, n) {
  const e = {},
    o = s(n, ["functionCallingConfig"]);
  if (
    (o != null && r(e, ["functionCallingConfig"], Jr(t, o)),
    s(n, ["retrievalConfig"]) !== void 0)
  )
    throw new Error(
      "retrievalConfig parameter is not supported in Gemini API.",
    );
  return e;
}
function Wr(t, n) {
  const e = {},
    o = s(n, ["voiceName"]);
  return (o != null && r(e, ["voiceName"], o), e);
}
function Yr(t, n) {
  const e = {},
    o = s(n, ["prebuiltVoiceConfig"]);
  return (o != null && r(e, ["prebuiltVoiceConfig"], Wr(t, o)), e);
}
function Kr(t, n) {
  const e = {},
    o = s(n, ["voiceConfig"]);
  o != null && r(e, ["voiceConfig"], Yr(t, o));
  const i = s(n, ["languageCode"]);
  return (i != null && r(e, ["languageCode"], i), e);
}
function Xr(t, n) {
  const e = {},
    o = s(n, ["includeThoughts"]);
  o != null && r(e, ["includeThoughts"], o);
  const i = s(n, ["thinkingBudget"]);
  return (i != null && r(e, ["thinkingBudget"], i), e);
}
function Qr(t, n, e) {
  const o = {},
    i = s(n, ["systemInstruction"]);
  e !== void 0 && i != null && r(e, ["systemInstruction"], Ze(t, J(t, i)));
  const l = s(n, ["temperature"]);
  l != null && r(o, ["temperature"], l);
  const a = s(n, ["topP"]);
  a != null && r(o, ["topP"], a);
  const c = s(n, ["topK"]);
  c != null && r(o, ["topK"], c);
  const d = s(n, ["candidateCount"]);
  d != null && r(o, ["candidateCount"], d);
  const u = s(n, ["maxOutputTokens"]);
  u != null && r(o, ["maxOutputTokens"], u);
  const f = s(n, ["stopSequences"]);
  f != null && r(o, ["stopSequences"], f);
  const p = s(n, ["responseLogprobs"]);
  p != null && r(o, ["responseLogprobs"], p);
  const h = s(n, ["logprobs"]);
  h != null && r(o, ["logprobs"], h);
  const v = s(n, ["presencePenalty"]);
  v != null && r(o, ["presencePenalty"], v);
  const g = s(n, ["frequencyPenalty"]);
  g != null && r(o, ["frequencyPenalty"], g);
  const y = s(n, ["seed"]);
  y != null && r(o, ["seed"], y);
  const x = s(n, ["responseMimeType"]);
  x != null && r(o, ["responseMimeType"], x);
  const T = s(n, ["responseSchema"]);
  if (
    (T != null && r(o, ["responseSchema"], Yt(t, T)),
    s(n, ["routingConfig"]) !== void 0)
  )
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (s(n, ["modelSelectionConfig"]) !== void 0)
    throw new Error(
      "modelSelectionConfig parameter is not supported in Gemini API.",
    );
  const C = s(n, ["safetySettings"]);
  if (e !== void 0 && C != null) {
    let D = C;
    (Array.isArray(D) && (D = D.map((V) => qr(t, V))),
      r(e, ["safetySettings"], D));
  }
  const E = s(n, ["tools"]);
  if (e !== void 0 && E != null) {
    let D = Xe(t, E);
    (Array.isArray(D) && (D = D.map((V) => $r(t, Ke(t, V)))),
      r(e, ["tools"], D));
  }
  const b = s(n, ["toolConfig"]);
  if (
    (e !== void 0 && b != null && r(e, ["toolConfig"], Or(t, b)),
    s(n, ["labels"]) !== void 0)
  )
    throw new Error("labels parameter is not supported in Gemini API.");
  const M = s(n, ["cachedContent"]);
  e !== void 0 && M != null && r(e, ["cachedContent"], ue(t, M));
  const R = s(n, ["responseModalities"]);
  R != null && r(o, ["responseModalities"], R);
  const F = s(n, ["mediaResolution"]);
  F != null && r(o, ["mediaResolution"], F);
  const I = s(n, ["speechConfig"]);
  if (
    (I != null && r(o, ["speechConfig"], Kr(t, Kt(t, I))),
    s(n, ["audioTimestamp"]) !== void 0)
  )
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const k = s(n, ["thinkingConfig"]);
  return (k != null && r(o, ["thinkingConfig"], Xr(t, k)), o);
}
function Pt(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  if (i != null) {
    let a = ae(t, i);
    (Array.isArray(a) && (a = a.map((c) => Ze(t, c))), r(e, ["contents"], a));
  }
  const l = s(n, ["config"]);
  return (l != null && r(e, ["generationConfig"], Qr(t, l, e)), e);
}
function Zr(t, n, e) {
  const o = {},
    i = s(n, ["taskType"]);
  e !== void 0 && i != null && r(e, ["requests[]", "taskType"], i);
  const l = s(n, ["title"]);
  e !== void 0 && l != null && r(e, ["requests[]", "title"], l);
  const a = s(n, ["outputDimensionality"]);
  if (
    (e !== void 0 &&
      a != null &&
      r(e, ["requests[]", "outputDimensionality"], a),
    s(n, ["mimeType"]) !== void 0)
  )
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (s(n, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return o;
}
function jr(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  i != null && r(e, ["requests[]", "content"], Wt(t, i));
  const l = s(n, ["config"]);
  l != null && r(e, ["config"], Zr(t, l, e));
  const a = s(n, ["model"]);
  return (a !== void 0 && r(e, ["requests[]", "model"], U(t, a)), e);
}
function el(t, n, e) {
  const o = {};
  if (s(n, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(n, ["negativePrompt"]) !== void 0)
    throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const i = s(n, ["numberOfImages"]);
  e !== void 0 && i != null && r(e, ["parameters", "sampleCount"], i);
  const l = s(n, ["aspectRatio"]);
  e !== void 0 && l != null && r(e, ["parameters", "aspectRatio"], l);
  const a = s(n, ["guidanceScale"]);
  if (
    (e !== void 0 && a != null && r(e, ["parameters", "guidanceScale"], a),
    s(n, ["seed"]) !== void 0)
  )
    throw new Error("seed parameter is not supported in Gemini API.");
  const c = s(n, ["safetyFilterLevel"]);
  e !== void 0 && c != null && r(e, ["parameters", "safetySetting"], c);
  const d = s(n, ["personGeneration"]);
  e !== void 0 && d != null && r(e, ["parameters", "personGeneration"], d);
  const u = s(n, ["includeSafetyAttributes"]);
  e !== void 0 &&
    u != null &&
    r(e, ["parameters", "includeSafetyAttributes"], u);
  const f = s(n, ["includeRaiReason"]);
  e !== void 0 && f != null && r(e, ["parameters", "includeRaiReason"], f);
  const p = s(n, ["language"]);
  e !== void 0 && p != null && r(e, ["parameters", "language"], p);
  const h = s(n, ["outputMimeType"]);
  e !== void 0 &&
    h != null &&
    r(e, ["parameters", "outputOptions", "mimeType"], h);
  const v = s(n, ["outputCompressionQuality"]);
  if (
    (e !== void 0 &&
      v != null &&
      r(e, ["parameters", "outputOptions", "compressionQuality"], v),
    s(n, ["addWatermark"]) !== void 0)
  )
    throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (s(n, ["enhancePrompt"]) !== void 0)
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return o;
}
function nl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["prompt"]);
  i != null && r(e, ["instances[0]", "prompt"], i);
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], el(t, l, e)), e);
}
function tl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "name"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function ol(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  e !== void 0 && l != null && r(e, ["_query", "pageToken"], l);
  const a = s(n, ["filter"]);
  e !== void 0 && a != null && r(e, ["_query", "filter"], a);
  const c = s(n, ["queryBase"]);
  return (
    e !== void 0 && c != null && r(e, ["_url", "models_url"], Zt(t, c)),
    o
  );
}
function il(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], ol(t, o, e)), e);
}
function sl(t, n, e) {
  const o = {},
    i = s(n, ["displayName"]);
  e !== void 0 && i != null && r(e, ["displayName"], i);
  const l = s(n, ["description"]);
  return (e !== void 0 && l != null && r(e, ["description"], l), o);
}
function rl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "name"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], sl(t, i, e)), e);
}
function ll(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "name"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function al(t, n) {
  const e = {};
  if (s(n, ["systemInstruction"]) !== void 0)
    throw new Error(
      "systemInstruction parameter is not supported in Gemini API.",
    );
  if (s(n, ["tools"]) !== void 0)
    throw new Error("tools parameter is not supported in Gemini API.");
  if (s(n, ["generationConfig"]) !== void 0)
    throw new Error(
      "generationConfig parameter is not supported in Gemini API.",
    );
  return e;
}
function ul(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  if (i != null) {
    let a = ae(t, i);
    (Array.isArray(a) && (a = a.map((c) => Ze(t, c))), r(e, ["contents"], a));
  }
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], al(t, l)), e);
}
function cl(t, n) {
  const e = {};
  if (s(n, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  const o = s(n, ["imageBytes"]);
  o != null && r(e, ["bytesBase64Encoded"], ce(t, o));
  const i = s(n, ["mimeType"]);
  return (i != null && r(e, ["mimeType"], i), e);
}
function dl(t, n, e) {
  const o = {},
    i = s(n, ["numberOfVideos"]);
  if (
    (e !== void 0 && i != null && r(e, ["parameters", "sampleCount"], i),
    s(n, ["outputGcsUri"]) !== void 0)
  )
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(n, ["fps"]) !== void 0)
    throw new Error("fps parameter is not supported in Gemini API.");
  const l = s(n, ["durationSeconds"]);
  if (
    (e !== void 0 && l != null && r(e, ["parameters", "durationSeconds"], l),
    s(n, ["seed"]) !== void 0)
  )
    throw new Error("seed parameter is not supported in Gemini API.");
  const a = s(n, ["aspectRatio"]);
  if (
    (e !== void 0 && a != null && r(e, ["parameters", "aspectRatio"], a),
    s(n, ["resolution"]) !== void 0)
  )
    throw new Error("resolution parameter is not supported in Gemini API.");
  const c = s(n, ["personGeneration"]);
  if (
    (e !== void 0 && c != null && r(e, ["parameters", "personGeneration"], c),
    s(n, ["pubsubTopic"]) !== void 0)
  )
    throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const d = s(n, ["negativePrompt"]);
  if (
    (e !== void 0 && d != null && r(e, ["parameters", "negativePrompt"], d),
    s(n, ["enhancePrompt"]) !== void 0)
  )
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return o;
}
function fl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["prompt"]);
  i != null && r(e, ["instances[0]", "prompt"], i);
  const l = s(n, ["image"]);
  l != null && r(e, ["instances[0]", "image"], cl(t, l));
  const a = s(n, ["config"]);
  return (a != null && r(e, ["config"], dl(t, a, e)), e);
}
function ml(t, n) {
  const e = {},
    o = s(n, ["videoMetadata"]);
  o != null && r(e, ["videoMetadata"], o);
  const i = s(n, ["thought"]);
  i != null && r(e, ["thought"], i);
  const l = s(n, ["codeExecutionResult"]);
  l != null && r(e, ["codeExecutionResult"], l);
  const a = s(n, ["executableCode"]);
  a != null && r(e, ["executableCode"], a);
  const c = s(n, ["fileData"]);
  c != null && r(e, ["fileData"], c);
  const d = s(n, ["functionCall"]);
  d != null && r(e, ["functionCall"], d);
  const u = s(n, ["functionResponse"]);
  u != null && r(e, ["functionResponse"], u);
  const f = s(n, ["inlineData"]);
  f != null && r(e, ["inlineData"], f);
  const p = s(n, ["text"]);
  return (p != null && r(e, ["text"], p), e);
}
function Ce(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => ml(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function pl(t, n) {
  const e = {},
    o = s(n, ["featureSelectionPreference"]);
  return (o != null && r(e, ["featureSelectionPreference"], o), e);
}
function hl(t, n) {
  const e = {},
    o = s(n, ["method"]);
  o != null && r(e, ["method"], o);
  const i = s(n, ["category"]);
  i != null && r(e, ["category"], i);
  const l = s(n, ["threshold"]);
  return (l != null && r(e, ["threshold"], l), e);
}
function gl() {
  return {};
}
function vl(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["dynamicThreshold"]);
  return (i != null && r(e, ["dynamicThreshold"], i), e);
}
function yl(t, n) {
  const e = {},
    o = s(n, ["dynamicRetrievalConfig"]);
  return (o != null && r(e, ["dynamicRetrievalConfig"], vl(t, o)), e);
}
function xl() {
  return {};
}
function Nl(t, n) {
  const e = {},
    o = s(n, ["apiKeyString"]);
  return (o != null && r(e, ["apiKeyString"], o), e);
}
function Cl(t, n) {
  const e = {},
    o = s(n, ["apiKeyConfig"]);
  o != null && r(e, ["apiKeyConfig"], Nl(t, o));
  const i = s(n, ["authType"]);
  i != null && r(e, ["authType"], i);
  const l = s(n, ["googleServiceAccountConfig"]);
  l != null && r(e, ["googleServiceAccountConfig"], l);
  const a = s(n, ["httpBasicAuthConfig"]);
  a != null && r(e, ["httpBasicAuthConfig"], a);
  const c = s(n, ["oauthConfig"]);
  c != null && r(e, ["oauthConfig"], c);
  const d = s(n, ["oidcConfig"]);
  return (d != null && r(e, ["oidcConfig"], d), e);
}
function Tl(t, n) {
  const e = {},
    o = s(n, ["authConfig"]);
  return (o != null && r(e, ["authConfig"], Cl(t, o)), e);
}
function no(t, n) {
  const e = {},
    o = s(n, ["retrieval"]);
  (o != null && r(e, ["retrieval"], o),
    s(n, ["googleSearch"]) != null && r(e, ["googleSearch"], gl()));
  const l = s(n, ["googleSearchRetrieval"]);
  (l != null && r(e, ["googleSearchRetrieval"], yl(t, l)),
    s(n, ["enterpriseWebSearch"]) != null &&
      r(e, ["enterpriseWebSearch"], xl()));
  const c = s(n, ["googleMaps"]);
  c != null && r(e, ["googleMaps"], Tl(t, c));
  const d = s(n, ["codeExecution"]);
  d != null && r(e, ["codeExecution"], d);
  const u = s(n, ["functionDeclarations"]);
  return (u != null && r(e, ["functionDeclarations"], u), e);
}
function _l(t, n) {
  const e = {},
    o = s(n, ["mode"]);
  o != null && r(e, ["mode"], o);
  const i = s(n, ["allowedFunctionNames"]);
  return (i != null && r(e, ["allowedFunctionNames"], i), e);
}
function El(t, n) {
  const e = {},
    o = s(n, ["latitude"]);
  o != null && r(e, ["latitude"], o);
  const i = s(n, ["longitude"]);
  return (i != null && r(e, ["longitude"], i), e);
}
function bl(t, n) {
  const e = {},
    o = s(n, ["latLng"]);
  return (o != null && r(e, ["latLng"], El(t, o)), e);
}
function Sl(t, n) {
  const e = {},
    o = s(n, ["functionCallingConfig"]);
  o != null && r(e, ["functionCallingConfig"], _l(t, o));
  const i = s(n, ["retrievalConfig"]);
  return (i != null && r(e, ["retrievalConfig"], bl(t, i)), e);
}
function Al(t, n) {
  const e = {},
    o = s(n, ["voiceName"]);
  return (o != null && r(e, ["voiceName"], o), e);
}
function Il(t, n) {
  const e = {},
    o = s(n, ["prebuiltVoiceConfig"]);
  return (o != null && r(e, ["prebuiltVoiceConfig"], Al(t, o)), e);
}
function Pl(t, n) {
  const e = {},
    o = s(n, ["voiceConfig"]);
  o != null && r(e, ["voiceConfig"], Il(t, o));
  const i = s(n, ["languageCode"]);
  return (i != null && r(e, ["languageCode"], i), e);
}
function Ml(t, n) {
  const e = {},
    o = s(n, ["includeThoughts"]);
  o != null && r(e, ["includeThoughts"], o);
  const i = s(n, ["thinkingBudget"]);
  return (i != null && r(e, ["thinkingBudget"], i), e);
}
function wl(t, n, e) {
  const o = {},
    i = s(n, ["systemInstruction"]);
  e !== void 0 && i != null && r(e, ["systemInstruction"], Ce(t, J(t, i)));
  const l = s(n, ["temperature"]);
  l != null && r(o, ["temperature"], l);
  const a = s(n, ["topP"]);
  a != null && r(o, ["topP"], a);
  const c = s(n, ["topK"]);
  c != null && r(o, ["topK"], c);
  const d = s(n, ["candidateCount"]);
  d != null && r(o, ["candidateCount"], d);
  const u = s(n, ["maxOutputTokens"]);
  u != null && r(o, ["maxOutputTokens"], u);
  const f = s(n, ["stopSequences"]);
  f != null && r(o, ["stopSequences"], f);
  const p = s(n, ["responseLogprobs"]);
  p != null && r(o, ["responseLogprobs"], p);
  const h = s(n, ["logprobs"]);
  h != null && r(o, ["logprobs"], h);
  const v = s(n, ["presencePenalty"]);
  v != null && r(o, ["presencePenalty"], v);
  const g = s(n, ["frequencyPenalty"]);
  g != null && r(o, ["frequencyPenalty"], g);
  const y = s(n, ["seed"]);
  y != null && r(o, ["seed"], y);
  const x = s(n, ["responseMimeType"]);
  x != null && r(o, ["responseMimeType"], x);
  const T = s(n, ["responseSchema"]);
  T != null && r(o, ["responseSchema"], Yt(t, T));
  const C = s(n, ["routingConfig"]);
  C != null && r(o, ["routingConfig"], C);
  const E = s(n, ["modelSelectionConfig"]);
  E != null && r(o, ["modelConfig"], pl(t, E));
  const b = s(n, ["safetySettings"]);
  if (e !== void 0 && b != null) {
    let q = b;
    (Array.isArray(q) && (q = q.map((O) => hl(t, O))),
      r(e, ["safetySettings"], q));
  }
  const M = s(n, ["tools"]);
  if (e !== void 0 && M != null) {
    let q = Xe(t, M);
    (Array.isArray(q) && (q = q.map((O) => no(t, Ke(t, O)))),
      r(e, ["tools"], q));
  }
  const R = s(n, ["toolConfig"]);
  e !== void 0 && R != null && r(e, ["toolConfig"], Sl(t, R));
  const F = s(n, ["labels"]);
  e !== void 0 && F != null && r(e, ["labels"], F);
  const I = s(n, ["cachedContent"]);
  e !== void 0 && I != null && r(e, ["cachedContent"], ue(t, I));
  const k = s(n, ["responseModalities"]);
  k != null && r(o, ["responseModalities"], k);
  const D = s(n, ["mediaResolution"]);
  D != null && r(o, ["mediaResolution"], D);
  const V = s(n, ["speechConfig"]);
  V != null && r(o, ["speechConfig"], Pl(t, Kt(t, V)));
  const Y = s(n, ["audioTimestamp"]);
  Y != null && r(o, ["audioTimestamp"], Y);
  const he = s(n, ["thinkingConfig"]);
  return (he != null && r(o, ["thinkingConfig"], Ml(t, he)), o);
}
function Mt(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  if (i != null) {
    let a = ae(t, i);
    (Array.isArray(a) && (a = a.map((c) => Ce(t, c))), r(e, ["contents"], a));
  }
  const l = s(n, ["config"]);
  return (l != null && r(e, ["generationConfig"], wl(t, l, e)), e);
}
function Rl(t, n, e) {
  const o = {},
    i = s(n, ["taskType"]);
  e !== void 0 && i != null && r(e, ["instances[]", "task_type"], i);
  const l = s(n, ["title"]);
  e !== void 0 && l != null && r(e, ["instances[]", "title"], l);
  const a = s(n, ["outputDimensionality"]);
  e !== void 0 && a != null && r(e, ["parameters", "outputDimensionality"], a);
  const c = s(n, ["mimeType"]);
  e !== void 0 && c != null && r(e, ["instances[]", "mimeType"], c);
  const d = s(n, ["autoTruncate"]);
  return (
    e !== void 0 && d != null && r(e, ["parameters", "autoTruncate"], d),
    o
  );
}
function kl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  i != null && r(e, ["instances[]", "content"], Wt(t, i));
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], Rl(t, l, e)), e);
}
function Dl(t, n, e) {
  const o = {},
    i = s(n, ["outputGcsUri"]);
  e !== void 0 && i != null && r(e, ["parameters", "storageUri"], i);
  const l = s(n, ["negativePrompt"]);
  e !== void 0 && l != null && r(e, ["parameters", "negativePrompt"], l);
  const a = s(n, ["numberOfImages"]);
  e !== void 0 && a != null && r(e, ["parameters", "sampleCount"], a);
  const c = s(n, ["aspectRatio"]);
  e !== void 0 && c != null && r(e, ["parameters", "aspectRatio"], c);
  const d = s(n, ["guidanceScale"]);
  e !== void 0 && d != null && r(e, ["parameters", "guidanceScale"], d);
  const u = s(n, ["seed"]);
  e !== void 0 && u != null && r(e, ["parameters", "seed"], u);
  const f = s(n, ["safetyFilterLevel"]);
  e !== void 0 && f != null && r(e, ["parameters", "safetySetting"], f);
  const p = s(n, ["personGeneration"]);
  e !== void 0 && p != null && r(e, ["parameters", "personGeneration"], p);
  const h = s(n, ["includeSafetyAttributes"]);
  e !== void 0 &&
    h != null &&
    r(e, ["parameters", "includeSafetyAttributes"], h);
  const v = s(n, ["includeRaiReason"]);
  e !== void 0 && v != null && r(e, ["parameters", "includeRaiReason"], v);
  const g = s(n, ["language"]);
  e !== void 0 && g != null && r(e, ["parameters", "language"], g);
  const y = s(n, ["outputMimeType"]);
  e !== void 0 &&
    y != null &&
    r(e, ["parameters", "outputOptions", "mimeType"], y);
  const x = s(n, ["outputCompressionQuality"]);
  e !== void 0 &&
    x != null &&
    r(e, ["parameters", "outputOptions", "compressionQuality"], x);
  const T = s(n, ["addWatermark"]);
  e !== void 0 && T != null && r(e, ["parameters", "addWatermark"], T);
  const C = s(n, ["enhancePrompt"]);
  return (
    e !== void 0 && C != null && r(e, ["parameters", "enhancePrompt"], C),
    o
  );
}
function Fl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["prompt"]);
  i != null && r(e, ["instances[0]", "prompt"], i);
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], Dl(t, l, e)), e);
}
function Ll(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "name"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Ul(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  e !== void 0 && l != null && r(e, ["_query", "pageToken"], l);
  const a = s(n, ["filter"]);
  e !== void 0 && a != null && r(e, ["_query", "filter"], a);
  const c = s(n, ["queryBase"]);
  return (
    e !== void 0 && c != null && r(e, ["_url", "models_url"], Zt(t, c)),
    o
  );
}
function Vl(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], Ul(t, o, e)), e);
}
function Gl(t, n, e) {
  const o = {},
    i = s(n, ["displayName"]);
  e !== void 0 && i != null && r(e, ["displayName"], i);
  const l = s(n, ["description"]);
  return (e !== void 0 && l != null && r(e, ["description"], l), o);
}
function ql(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], Gl(t, i, e)), e);
}
function Bl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "name"], U(t, o));
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function zl(t, n, e) {
  const o = {},
    i = s(n, ["systemInstruction"]);
  e !== void 0 && i != null && r(e, ["systemInstruction"], Ce(t, J(t, i)));
  const l = s(n, ["tools"]);
  if (e !== void 0 && l != null) {
    let c = l;
    (Array.isArray(c) && (c = c.map((d) => no(t, d))), r(e, ["tools"], c));
  }
  const a = s(n, ["generationConfig"]);
  return (e !== void 0 && a != null && r(e, ["generationConfig"], a), o);
}
function Hl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  if (i != null) {
    let a = ae(t, i);
    (Array.isArray(a) && (a = a.map((c) => Ce(t, c))), r(e, ["contents"], a));
  }
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], zl(t, l, e)), e);
}
function $l(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["contents"]);
  if (i != null) {
    let a = ae(t, i);
    (Array.isArray(a) && (a = a.map((c) => Ce(t, c))), r(e, ["contents"], a));
  }
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], l), e);
}
function Jl(t, n) {
  const e = {},
    o = s(n, ["gcsUri"]);
  o != null && r(e, ["gcsUri"], o);
  const i = s(n, ["imageBytes"]);
  i != null && r(e, ["bytesBase64Encoded"], ce(t, i));
  const l = s(n, ["mimeType"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function Ol(t, n, e) {
  const o = {},
    i = s(n, ["numberOfVideos"]);
  e !== void 0 && i != null && r(e, ["parameters", "sampleCount"], i);
  const l = s(n, ["outputGcsUri"]);
  e !== void 0 && l != null && r(e, ["parameters", "storageUri"], l);
  const a = s(n, ["fps"]);
  e !== void 0 && a != null && r(e, ["parameters", "fps"], a);
  const c = s(n, ["durationSeconds"]);
  e !== void 0 && c != null && r(e, ["parameters", "durationSeconds"], c);
  const d = s(n, ["seed"]);
  e !== void 0 && d != null && r(e, ["parameters", "seed"], d);
  const u = s(n, ["aspectRatio"]);
  e !== void 0 && u != null && r(e, ["parameters", "aspectRatio"], u);
  const f = s(n, ["resolution"]);
  e !== void 0 && f != null && r(e, ["parameters", "resolution"], f);
  const p = s(n, ["personGeneration"]);
  e !== void 0 && p != null && r(e, ["parameters", "personGeneration"], p);
  const h = s(n, ["pubsubTopic"]);
  e !== void 0 && h != null && r(e, ["parameters", "pubsubTopic"], h);
  const v = s(n, ["negativePrompt"]);
  e !== void 0 && v != null && r(e, ["parameters", "negativePrompt"], v);
  const g = s(n, ["enhancePrompt"]);
  return (
    e !== void 0 && g != null && r(e, ["parameters", "enhancePrompt"], g),
    o
  );
}
function Wl(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["_url", "model"], U(t, o));
  const i = s(n, ["prompt"]);
  i != null && r(e, ["instances[0]", "prompt"], i);
  const l = s(n, ["image"]);
  l != null && r(e, ["instances[0]", "image"], Jl(t, l));
  const a = s(n, ["config"]);
  return (a != null && r(e, ["config"], Ol(t, a, e)), e);
}
function Yl(t, n) {
  const e = {},
    o = s(n, ["thought"]);
  o != null && r(e, ["thought"], o);
  const i = s(n, ["codeExecutionResult"]);
  i != null && r(e, ["codeExecutionResult"], i);
  const l = s(n, ["executableCode"]);
  l != null && r(e, ["executableCode"], l);
  const a = s(n, ["fileData"]);
  a != null && r(e, ["fileData"], a);
  const c = s(n, ["functionCall"]);
  c != null && r(e, ["functionCall"], c);
  const d = s(n, ["functionResponse"]);
  d != null && r(e, ["functionResponse"], d);
  const u = s(n, ["inlineData"]);
  u != null && r(e, ["inlineData"], u);
  const f = s(n, ["text"]);
  return (f != null && r(e, ["text"], f), e);
}
function Kl(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Yl(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function Xl(t, n) {
  const e = {},
    o = s(n, ["citationSources"]);
  return (o != null && r(e, ["citations"], o), e);
}
function Ql(t, n) {
  const e = {},
    o = s(n, ["content"]);
  o != null && r(e, ["content"], Kl(t, o));
  const i = s(n, ["citationMetadata"]);
  i != null && r(e, ["citationMetadata"], Xl(t, i));
  const l = s(n, ["tokenCount"]);
  l != null && r(e, ["tokenCount"], l);
  const a = s(n, ["finishReason"]);
  a != null && r(e, ["finishReason"], a);
  const c = s(n, ["avgLogprobs"]);
  c != null && r(e, ["avgLogprobs"], c);
  const d = s(n, ["groundingMetadata"]);
  d != null && r(e, ["groundingMetadata"], d);
  const u = s(n, ["index"]);
  u != null && r(e, ["index"], u);
  const f = s(n, ["logprobsResult"]);
  f != null && r(e, ["logprobsResult"], f);
  const p = s(n, ["safetyRatings"]);
  return (p != null && r(e, ["safetyRatings"], p), e);
}
function wt(t, n) {
  const e = {},
    o = s(n, ["candidates"]);
  if (o != null) {
    let c = o;
    (Array.isArray(c) && (c = c.map((d) => Ql(t, d))), r(e, ["candidates"], c));
  }
  const i = s(n, ["modelVersion"]);
  i != null && r(e, ["modelVersion"], i);
  const l = s(n, ["promptFeedback"]);
  l != null && r(e, ["promptFeedback"], l);
  const a = s(n, ["usageMetadata"]);
  return (a != null && r(e, ["usageMetadata"], a), e);
}
function Zl(t, n) {
  const e = {},
    o = s(n, ["values"]);
  return (o != null && r(e, ["values"], o), e);
}
function jl() {
  return {};
}
function ea(t, n) {
  const e = {},
    o = s(n, ["embeddings"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Zl(t, a))), r(e, ["embeddings"], l));
  }
  return (s(n, ["metadata"]) != null && r(e, ["metadata"], jl()), e);
}
function na(t, n) {
  const e = {},
    o = s(n, ["bytesBase64Encoded"]);
  o != null && r(e, ["imageBytes"], ce(t, o));
  const i = s(n, ["mimeType"]);
  return (i != null && r(e, ["mimeType"], i), e);
}
function to(t, n) {
  const e = {},
    o = s(n, ["safetyAttributes", "categories"]);
  o != null && r(e, ["categories"], o);
  const i = s(n, ["safetyAttributes", "scores"]);
  i != null && r(e, ["scores"], i);
  const l = s(n, ["contentType"]);
  return (l != null && r(e, ["contentType"], l), e);
}
function ta(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  o != null && r(e, ["image"], na(t, o));
  const i = s(n, ["raiFilteredReason"]);
  i != null && r(e, ["raiFilteredReason"], i);
  const l = s(n, ["_self"]);
  return (l != null && r(e, ["safetyAttributes"], to(t, l)), e);
}
function oa(t, n) {
  const e = {},
    o = s(n, ["predictions"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => ta(t, a))),
      r(e, ["generatedImages"], l));
  }
  const i = s(n, ["positivePromptSafetyAttributes"]);
  return (i != null && r(e, ["positivePromptSafetyAttributes"], to(t, i)), e);
}
function ia(t, n) {
  const e = {},
    o = s(n, ["baseModel"]);
  o != null && r(e, ["baseModel"], o);
  const i = s(n, ["createTime"]);
  i != null && r(e, ["createTime"], i);
  const l = s(n, ["updateTime"]);
  return (l != null && r(e, ["updateTime"], l), e);
}
function un(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["description"]);
  l != null && r(e, ["description"], l);
  const a = s(n, ["version"]);
  a != null && r(e, ["version"], a);
  const c = s(n, ["_self"]);
  c != null && r(e, ["tunedModelInfo"], ia(t, c));
  const d = s(n, ["inputTokenLimit"]);
  d != null && r(e, ["inputTokenLimit"], d);
  const u = s(n, ["outputTokenLimit"]);
  u != null && r(e, ["outputTokenLimit"], u);
  const f = s(n, ["supportedGenerationMethods"]);
  return (f != null && r(e, ["supportedActions"], f), e);
}
function sa(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["_self"]);
  if (i != null) {
    let l = jt(t, i);
    (Array.isArray(l) && (l = l.map((a) => un(t, a))), r(e, ["models"], l));
  }
  return e;
}
function ra() {
  return {};
}
function la(t, n) {
  const e = {},
    o = s(n, ["totalTokens"]);
  o != null && r(e, ["totalTokens"], o);
  const i = s(n, ["cachedContentTokenCount"]);
  return (i != null && r(e, ["cachedContentTokenCount"], i), e);
}
function aa(t, n) {
  const e = {},
    o = s(n, ["video", "uri"]);
  o != null && r(e, ["uri"], o);
  const i = s(n, ["video", "encodedVideo"]);
  i != null && r(e, ["videoBytes"], ce(t, i));
  const l = s(n, ["encoding"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function ua(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  return (o != null && r(e, ["video"], aa(t, o)), e);
}
function ca(t, n) {
  const e = {},
    o = s(n, ["generatedSamples"]);
  if (o != null) {
    let a = o;
    (Array.isArray(a) && (a = a.map((c) => ua(t, c))),
      r(e, ["generatedVideos"], a));
  }
  const i = s(n, ["raiMediaFilteredCount"]);
  i != null && r(e, ["raiMediaFilteredCount"], i);
  const l = s(n, ["raiMediaFilteredReasons"]);
  return (l != null && r(e, ["raiMediaFilteredReasons"], l), e);
}
function da(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["metadata"]);
  i != null && r(e, ["metadata"], i);
  const l = s(n, ["done"]);
  l != null && r(e, ["done"], l);
  const a = s(n, ["error"]);
  a != null && r(e, ["error"], a);
  const c = s(n, ["response", "generateVideoResponse"]);
  return (c != null && r(e, ["response"], ca(t, c)), e);
}
function fa(t, n) {
  const e = {},
    o = s(n, ["videoMetadata"]);
  o != null && r(e, ["videoMetadata"], o);
  const i = s(n, ["thought"]);
  i != null && r(e, ["thought"], i);
  const l = s(n, ["codeExecutionResult"]);
  l != null && r(e, ["codeExecutionResult"], l);
  const a = s(n, ["executableCode"]);
  a != null && r(e, ["executableCode"], a);
  const c = s(n, ["fileData"]);
  c != null && r(e, ["fileData"], c);
  const d = s(n, ["functionCall"]);
  d != null && r(e, ["functionCall"], d);
  const u = s(n, ["functionResponse"]);
  u != null && r(e, ["functionResponse"], u);
  const f = s(n, ["inlineData"]);
  f != null && r(e, ["inlineData"], f);
  const p = s(n, ["text"]);
  return (p != null && r(e, ["text"], p), e);
}
function ma(t, n) {
  const e = {},
    o = s(n, ["parts"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => fa(t, a))), r(e, ["parts"], l));
  }
  const i = s(n, ["role"]);
  return (i != null && r(e, ["role"], i), e);
}
function pa(t, n) {
  const e = {},
    o = s(n, ["citations"]);
  return (o != null && r(e, ["citations"], o), e);
}
function ha(t, n) {
  const e = {},
    o = s(n, ["content"]);
  o != null && r(e, ["content"], ma(t, o));
  const i = s(n, ["citationMetadata"]);
  i != null && r(e, ["citationMetadata"], pa(t, i));
  const l = s(n, ["finishMessage"]);
  l != null && r(e, ["finishMessage"], l);
  const a = s(n, ["finishReason"]);
  a != null && r(e, ["finishReason"], a);
  const c = s(n, ["avgLogprobs"]);
  c != null && r(e, ["avgLogprobs"], c);
  const d = s(n, ["groundingMetadata"]);
  d != null && r(e, ["groundingMetadata"], d);
  const u = s(n, ["index"]);
  u != null && r(e, ["index"], u);
  const f = s(n, ["logprobsResult"]);
  f != null && r(e, ["logprobsResult"], f);
  const p = s(n, ["safetyRatings"]);
  return (p != null && r(e, ["safetyRatings"], p), e);
}
function Rt(t, n) {
  const e = {},
    o = s(n, ["candidates"]);
  if (o != null) {
    let u = o;
    (Array.isArray(u) && (u = u.map((f) => ha(t, f))), r(e, ["candidates"], u));
  }
  const i = s(n, ["createTime"]);
  i != null && r(e, ["createTime"], i);
  const l = s(n, ["responseId"]);
  l != null && r(e, ["responseId"], l);
  const a = s(n, ["modelVersion"]);
  a != null && r(e, ["modelVersion"], a);
  const c = s(n, ["promptFeedback"]);
  c != null && r(e, ["promptFeedback"], c);
  const d = s(n, ["usageMetadata"]);
  return (d != null && r(e, ["usageMetadata"], d), e);
}
function ga(t, n) {
  const e = {},
    o = s(n, ["truncated"]);
  o != null && r(e, ["truncated"], o);
  const i = s(n, ["token_count"]);
  return (i != null && r(e, ["tokenCount"], i), e);
}
function va(t, n) {
  const e = {},
    o = s(n, ["values"]);
  o != null && r(e, ["values"], o);
  const i = s(n, ["statistics"]);
  return (i != null && r(e, ["statistics"], ga(t, i)), e);
}
function ya(t, n) {
  const e = {},
    o = s(n, ["billableCharacterCount"]);
  return (o != null && r(e, ["billableCharacterCount"], o), e);
}
function xa(t, n) {
  const e = {},
    o = s(n, ["predictions[]", "embeddings"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => va(t, a))), r(e, ["embeddings"], l));
  }
  const i = s(n, ["metadata"]);
  return (i != null && r(e, ["metadata"], ya(t, i)), e);
}
function Na(t, n) {
  const e = {},
    o = s(n, ["gcsUri"]);
  o != null && r(e, ["gcsUri"], o);
  const i = s(n, ["bytesBase64Encoded"]);
  i != null && r(e, ["imageBytes"], ce(t, i));
  const l = s(n, ["mimeType"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function oo(t, n) {
  const e = {},
    o = s(n, ["safetyAttributes", "categories"]);
  o != null && r(e, ["categories"], o);
  const i = s(n, ["safetyAttributes", "scores"]);
  i != null && r(e, ["scores"], i);
  const l = s(n, ["contentType"]);
  return (l != null && r(e, ["contentType"], l), e);
}
function Ca(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  o != null && r(e, ["image"], Na(t, o));
  const i = s(n, ["raiFilteredReason"]);
  i != null && r(e, ["raiFilteredReason"], i);
  const l = s(n, ["_self"]);
  l != null && r(e, ["safetyAttributes"], oo(t, l));
  const a = s(n, ["prompt"]);
  return (a != null && r(e, ["enhancedPrompt"], a), e);
}
function Ta(t, n) {
  const e = {},
    o = s(n, ["predictions"]);
  if (o != null) {
    let l = o;
    (Array.isArray(l) && (l = l.map((a) => Ca(t, a))),
      r(e, ["generatedImages"], l));
  }
  const i = s(n, ["positivePromptSafetyAttributes"]);
  return (i != null && r(e, ["positivePromptSafetyAttributes"], oo(t, i)), e);
}
function _a(t, n) {
  const e = {},
    o = s(n, ["endpoint"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["deployedModelId"]);
  return (i != null && r(e, ["deployedModelId"], i), e);
}
function Ea(t, n) {
  const e = {},
    o = s(n, ["labels", "google-vertex-llm-tuning-base-model-id"]);
  o != null && r(e, ["baseModel"], o);
  const i = s(n, ["createTime"]);
  i != null && r(e, ["createTime"], i);
  const l = s(n, ["updateTime"]);
  return (l != null && r(e, ["updateTime"], l), e);
}
function cn(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["displayName"]);
  i != null && r(e, ["displayName"], i);
  const l = s(n, ["description"]);
  l != null && r(e, ["description"], l);
  const a = s(n, ["versionId"]);
  a != null && r(e, ["version"], a);
  const c = s(n, ["deployedModels"]);
  if (c != null) {
    let f = c;
    (Array.isArray(f) && (f = f.map((p) => _a(t, p))), r(e, ["endpoints"], f));
  }
  const d = s(n, ["labels"]);
  d != null && r(e, ["labels"], d);
  const u = s(n, ["_self"]);
  return (u != null && r(e, ["tunedModelInfo"], Ea(t, u)), e);
}
function ba(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["_self"]);
  if (i != null) {
    let l = jt(t, i);
    (Array.isArray(l) && (l = l.map((a) => cn(t, a))), r(e, ["models"], l));
  }
  return e;
}
function Sa() {
  return {};
}
function Aa(t, n) {
  const e = {},
    o = s(n, ["totalTokens"]);
  return (o != null && r(e, ["totalTokens"], o), e);
}
function Ia(t, n) {
  const e = {},
    o = s(n, ["tokensInfo"]);
  return (o != null && r(e, ["tokensInfo"], o), e);
}
function Pa(t, n) {
  const e = {},
    o = s(n, ["gcsUri"]);
  o != null && r(e, ["uri"], o);
  const i = s(n, ["bytesBase64Encoded"]);
  i != null && r(e, ["videoBytes"], ce(t, i));
  const l = s(n, ["mimeType"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function Ma(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  return (o != null && r(e, ["video"], Pa(t, o)), e);
}
function wa(t, n) {
  const e = {},
    o = s(n, ["videos"]);
  if (o != null) {
    let a = o;
    (Array.isArray(a) && (a = a.map((c) => Ma(t, c))),
      r(e, ["generatedVideos"], a));
  }
  const i = s(n, ["raiMediaFilteredCount"]);
  i != null && r(e, ["raiMediaFilteredCount"], i);
  const l = s(n, ["raiMediaFilteredReasons"]);
  return (l != null && r(e, ["raiMediaFilteredReasons"], l), e);
}
function Ra(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["metadata"]);
  i != null && r(e, ["metadata"], i);
  const l = s(n, ["done"]);
  l != null && r(e, ["done"], l);
  const a = s(n, ["error"]);
  a != null && r(e, ["error"], a);
  const c = s(n, ["response"]);
  return (c != null && r(e, ["response"], wa(t, c)), e);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ka =
  "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function Da(t, n, e) {
  const o = new gs();
  let i;
  if (
    (e.data instanceof Blob
      ? (i = JSON.parse(await e.data.text()))
      : (i = JSON.parse(e.data)),
    t.isVertexAI())
  ) {
    const l = Vr(t, i);
    Object.assign(o, l);
  } else {
    const l = Ur(t, i);
    Object.assign(o, l);
  }
  n(o);
}
class Fa {
  constructor(n, e, o) {
    ((this.apiClient = n), (this.auth = e), (this.webSocketFactory = o));
  }
  async connect(n) {
    var e, o, i, l;
    const a = this.apiClient.getWebsocketBaseUrl(),
      c = this.apiClient.getApiVersion();
    let d;
    const u = Ga(this.apiClient.getDefaultHeaders());
    if (this.apiClient.isVertexAI())
      ((d = `${a}/ws/google.cloud.aiplatform.${c}.LlmBidiService/BidiGenerateContent`),
        await this.auth.addAuthHeaders(u));
    else {
      const b = this.apiClient.getApiKey();
      d = `${a}/ws/google.ai.generativelanguage.${c}.GenerativeService.BidiGenerateContent?key=${b}`;
    }
    let f = () => {};
    const p = new Promise((b) => {
        f = b;
      }),
      h = n.callbacks,
      v = function () {
        var b;
        ((b = h == null ? void 0 : h.onopen) === null ||
          b === void 0 ||
          b.call(h),
          f({}));
      },
      g = this.apiClient,
      y = {
        onopen: v,
        onmessage: (b) => {
          Da(g, h.onmessage, b);
        },
        onerror:
          (e = h == null ? void 0 : h.onerror) !== null && e !== void 0
            ? e
            : function (b) {},
        onclose:
          (o = h == null ? void 0 : h.onclose) !== null && o !== void 0
            ? o
            : function (b) {},
      },
      x = this.webSocketFactory.create(d, Va(u), y);
    (x.connect(), await p);
    let T = U(this.apiClient, n.model);
    if (this.apiClient.isVertexAI() && T.startsWith("publishers/")) {
      const b = this.apiClient.getProject(),
        M = this.apiClient.getLocation();
      T = `projects/${b}/locations/${M}/` + T;
    }
    let C = {};
    (this.apiClient.isVertexAI() &&
      ((i = n.config) === null || i === void 0
        ? void 0
        : i.responseModalities) === void 0 &&
      (n.config === void 0
        ? (n.config = { responseModalities: [ze.AUDIO] })
        : (n.config.responseModalities = [ze.AUDIO])),
      !((l = n.config) === null || l === void 0) &&
        l.generationConfig &&
        console.warn(
          "Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).",
        ));
    const E = { model: T, config: n.config, callbacks: n.callbacks };
    return (
      this.apiClient.isVertexAI()
        ? (C = cr(this.apiClient, E))
        : (C = ur(this.apiClient, E)),
      delete C.config,
      x.send(JSON.stringify(C)),
      new Ua(x, this.apiClient)
    );
  }
}
const La = { turnComplete: !0 };
class Ua {
  constructor(n, e) {
    ((this.conn = n), (this.apiClient = e));
  }
  tLiveClientContent(n, e) {
    if (e.turns !== null && e.turns !== void 0) {
      let o = [];
      try {
        ((o = ae(n, e.turns)),
          n.isVertexAI()
            ? (o = o.map((i) => Ce(n, i)))
            : (o = o.map((i) => Ze(n, i))));
      } catch {
        throw new Error(
          `Failed to parse client content "turns", type: '${typeof e.turns}'`,
        );
      }
      return { clientContent: { turns: o, turnComplete: e.turnComplete } };
    }
    return { clientContent: { turnComplete: e.turnComplete } };
  }
  tLiveClienttToolResponse(n, e) {
    let o = [];
    if (e.functionResponses == null)
      throw new Error("functionResponses is required.");
    if (
      (Array.isArray(e.functionResponses)
        ? (o = e.functionResponses)
        : (o = [e.functionResponses]),
      o.length === 0)
    )
      throw new Error("functionResponses is required.");
    for (const l of o) {
      if (
        typeof l != "object" ||
        l === null ||
        !("name" in l) ||
        !("response" in l)
      )
        throw new Error(
          `Could not parse function response, type '${typeof l}'.`,
        );
      if (!n.isVertexAI() && !("id" in l)) throw new Error(ka);
    }
    return { toolResponse: { functionResponses: o } };
  }
  sendClientContent(n) {
    n = Object.assign(Object.assign({}, La), n);
    const e = this.tLiveClientContent(this.apiClient, n);
    this.conn.send(JSON.stringify(e));
  }
  sendRealtimeInput(n) {
    let e = {};
    (this.apiClient.isVertexAI()
      ? (e = { realtimeInput: gr(this.apiClient, n) })
      : (e = { realtimeInput: hr(this.apiClient, n) }),
      this.conn.send(JSON.stringify(e)));
  }
  sendToolResponse(n) {
    if (n.functionResponses == null)
      throw new Error("Tool response parameters are required.");
    const e = this.tLiveClienttToolResponse(this.apiClient, n);
    this.conn.send(JSON.stringify(e));
  }
  close() {
    this.conn.close();
  }
}
function Va(t) {
  const n = {};
  return (
    t.forEach((e, o) => {
      n[o] = e;
    }),
    n
  );
}
function Ga(t) {
  const n = new Headers();
  for (const [e, o] of Object.entries(t)) n.append(e, o);
  return n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class qa extends Pe {
  constructor(n) {
    (super(),
      (this.apiClient = n),
      (this.generateContent = async (e) =>
        await this.generateContentInternal(e)),
      (this.generateContentStream = async (e) =>
        await this.generateContentStreamInternal(e)),
      (this.generateImages = async (e) =>
        await this.generateImagesInternal(e).then((o) => {
          var i;
          let l;
          const a = [];
          if (o != null && o.generatedImages)
            for (const d of o.generatedImages)
              d &&
              d != null &&
              d.safetyAttributes &&
              ((i = d == null ? void 0 : d.safetyAttributes) === null ||
              i === void 0
                ? void 0
                : i.contentType) === "Positive Prompt"
                ? (l = d == null ? void 0 : d.safetyAttributes)
                : a.push(d);
          let c;
          return (
            l
              ? (c = { generatedImages: a, positivePromptSafetyAttributes: l })
              : (c = { generatedImages: a }),
            c
          );
        })),
      (this.list = async (e) => {
        var o;
        const a = {
          config: Object.assign(
            Object.assign({}, { queryBase: !0 }),
            e == null ? void 0 : e.config,
          ),
        };
        if (this.apiClient.isVertexAI() && !a.config.queryBase) {
          if (!((o = a.config) === null || o === void 0) && o.filter)
            throw new Error(
              "Filtering tuned models list for Vertex AI is not currently supported",
            );
          a.config.filter = "labels.tune-type:*";
        }
        return new Qe(
          Ne.PAGED_ITEM_MODELS,
          (c) => this.listInternal(c),
          await this.listInternal(a),
          a,
        );
      }));
  }
  async generateContentInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Mt(this.apiClient, n);
      return (
        (c = A("{model}:generateContent", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = Rt(this.apiClient, f),
            h = new De();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = Pt(this.apiClient, n);
      return (
        (c = A("{model}:generateContent", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = wt(this.apiClient, f),
            h = new De();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async generateContentStreamInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Mt(this.apiClient, n);
      ((c = A("{model}:streamGenerateContent?alt=sse", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query);
      const f = this.apiClient;
      return (
        (a = f.requestStream({
          path: c,
          queryParams: d,
          body: JSON.stringify(u),
          httpMethod: "POST",
          httpOptions:
            (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
          abortSignal:
            (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
        })),
        a.then(function (p) {
          return He(this, arguments, function* () {
            var h, v, g, y;
            try {
              for (
                var x = !0, T = ln(p), C;
                (C = yield z(T.next())), (h = C.done), !h;
                x = !0
              ) {
                ((y = C.value), (x = !1));
                const b = Rt(f, yield z(y.json())),
                  M = new De();
                (Object.assign(M, b), yield yield z(M));
              }
            } catch (E) {
              v = { error: E };
            } finally {
              try {
                !x && !h && (g = T.return) && (yield z(g.call(T)));
              } finally {
                if (v) throw v.error;
              }
            }
          });
        })
      );
    } else {
      const u = Pt(this.apiClient, n);
      ((c = A("{model}:streamGenerateContent?alt=sse", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query);
      const f = this.apiClient;
      return (
        (a = f.requestStream({
          path: c,
          queryParams: d,
          body: JSON.stringify(u),
          httpMethod: "POST",
          httpOptions:
            (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
          abortSignal:
            (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
        })),
        a.then(function (p) {
          return He(this, arguments, function* () {
            var h, v, g, y;
            try {
              for (
                var x = !0, T = ln(p), C;
                (C = yield z(T.next())), (h = C.done), !h;
                x = !0
              ) {
                ((y = C.value), (x = !1));
                const b = wt(f, yield z(y.json())),
                  M = new De();
                (Object.assign(M, b), yield yield z(M));
              }
            } catch (E) {
              v = { error: E };
            } finally {
              try {
                !x && !h && (g = T.return) && (yield z(g.call(T)));
              } finally {
                if (v) throw v.error;
              }
            }
          });
        })
      );
    }
  }
  async embedContent(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = kl(this.apiClient, n);
      return (
        (c = A("{model}:predict", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = xa(this.apiClient, f),
            h = new gt();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = jr(this.apiClient, n);
      return (
        (c = A("{model}:batchEmbedContents", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = ea(this.apiClient, f),
            h = new gt();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async generateImagesInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Fl(this.apiClient, n);
      return (
        (c = A("{model}:predict", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = Ta(this.apiClient, f),
            h = new vt();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = nl(this.apiClient, n);
      return (
        (c = A("{model}:predict", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = oa(this.apiClient, f),
            h = new vt();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async get(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ll(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => cn(this.apiClient, f))
      );
    } else {
      const u = tl(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => un(this.apiClient, f))
      );
    }
  }
  async listInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Vl(this.apiClient, n);
      return (
        (c = A("{models_url}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = ba(this.apiClient, f),
            h = new yt();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = il(this.apiClient, n);
      return (
        (c = A("{models_url}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = sa(this.apiClient, f),
            h = new yt();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async update(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = ql(this.apiClient, n);
      return (
        (c = A("{model}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "PATCH",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => cn(this.apiClient, f))
      );
    } else {
      const u = rl(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "PATCH",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => un(this.apiClient, f))
      );
    }
  }
  async delete(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Bl(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "DELETE",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then(() => {
          const f = Sa(),
            p = new xt();
          return (Object.assign(p, f), p);
        })
      );
    } else {
      const u = ll(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "DELETE",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then(() => {
          const f = ra(),
            p = new xt();
          return (Object.assign(p, f), p);
        })
      );
    }
  }
  async countTokens(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Hl(this.apiClient, n);
      return (
        (c = A("{model}:countTokens", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = Aa(this.apiClient, f),
            h = new Nt();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = ul(this.apiClient, n);
      return (
        (c = A("{model}:countTokens", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = la(this.apiClient, f),
            h = new Nt();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async computeTokens(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI()) {
      const c = $l(this.apiClient, n);
      return (
        (l = A("{model}:computeTokens", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => {
          const u = Ia(this.apiClient, d),
            f = new fs();
          return (Object.assign(f, u), f);
        })
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async generateVideos(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = Wl(this.apiClient, n);
      return (
        (c = A("{model}:predictLongRunning", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Ra(this.apiClient, f))
      );
    } else {
      const u = fl(this.apiClient, n);
      return (
        (c = A("{model}:predictLongRunning", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "POST",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => da(this.apiClient, f))
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Ba(t, n) {
  const e = {},
    o = s(n, ["operationName"]);
  o != null && r(e, ["_url", "operationName"], o);
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function za(t, n) {
  const e = {},
    o = s(n, ["operationName"]);
  o != null && r(e, ["_url", "operationName"], o);
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function Ha(t, n) {
  const e = {},
    o = s(n, ["operationName"]);
  o != null && r(e, ["operationName"], o);
  const i = s(n, ["resourceName"]);
  i != null && r(e, ["_url", "resourceName"], i);
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], l), e);
}
function $a(t, n) {
  const e = {},
    o = s(n, ["video", "uri"]);
  o != null && r(e, ["uri"], o);
  const i = s(n, ["video", "encodedVideo"]);
  i != null && r(e, ["videoBytes"], ce(t, i));
  const l = s(n, ["encoding"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function Ja(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  return (o != null && r(e, ["video"], $a(t, o)), e);
}
function Oa(t, n) {
  const e = {},
    o = s(n, ["generatedSamples"]);
  if (o != null) {
    let a = o;
    (Array.isArray(a) && (a = a.map((c) => Ja(t, c))),
      r(e, ["generatedVideos"], a));
  }
  const i = s(n, ["raiMediaFilteredCount"]);
  i != null && r(e, ["raiMediaFilteredCount"], i);
  const l = s(n, ["raiMediaFilteredReasons"]);
  return (l != null && r(e, ["raiMediaFilteredReasons"], l), e);
}
function Wa(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["metadata"]);
  i != null && r(e, ["metadata"], i);
  const l = s(n, ["done"]);
  l != null && r(e, ["done"], l);
  const a = s(n, ["error"]);
  a != null && r(e, ["error"], a);
  const c = s(n, ["response", "generateVideoResponse"]);
  return (c != null && r(e, ["response"], Oa(t, c)), e);
}
function Ya(t, n) {
  const e = {},
    o = s(n, ["gcsUri"]);
  o != null && r(e, ["uri"], o);
  const i = s(n, ["bytesBase64Encoded"]);
  i != null && r(e, ["videoBytes"], ce(t, i));
  const l = s(n, ["mimeType"]);
  return (l != null && r(e, ["mimeType"], l), e);
}
function Ka(t, n) {
  const e = {},
    o = s(n, ["_self"]);
  return (o != null && r(e, ["video"], Ya(t, o)), e);
}
function Xa(t, n) {
  const e = {},
    o = s(n, ["videos"]);
  if (o != null) {
    let a = o;
    (Array.isArray(a) && (a = a.map((c) => Ka(t, c))),
      r(e, ["generatedVideos"], a));
  }
  const i = s(n, ["raiMediaFilteredCount"]);
  i != null && r(e, ["raiMediaFilteredCount"], i);
  const l = s(n, ["raiMediaFilteredReasons"]);
  return (l != null && r(e, ["raiMediaFilteredReasons"], l), e);
}
function kt(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["metadata"]);
  i != null && r(e, ["metadata"], i);
  const l = s(n, ["done"]);
  l != null && r(e, ["done"], l);
  const a = s(n, ["error"]);
  a != null && r(e, ["error"], a);
  const c = s(n, ["response"]);
  return (c != null && r(e, ["response"], Xa(t, c)), e);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Qa extends Pe {
  constructor(n) {
    (super(), (this.apiClient = n));
  }
  async getVideosOperation(n) {
    const e = n.operation,
      o = n.config;
    if (e.name === void 0 || e.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const i = e.name.split("/operations/")[0];
      let l;
      return (
        o && "httpOptions" in o && (l = o.httpOptions),
        this.fetchPredictVideosOperationInternal({
          operationName: e.name,
          resourceName: i,
          config: { httpOptions: l },
        })
      );
    } else
      return this.getVideosOperationInternal({
        operationName: e.name,
        config: o,
      });
  }
  async getVideosOperationInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = za(this.apiClient, n);
      return (
        (c = A("{operationName}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => kt(this.apiClient, f))
      );
    } else {
      const u = Ba(this.apiClient, n);
      return (
        (c = A("{operationName}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => Wa(this.apiClient, f))
      );
    }
  }
  async fetchPredictVideosOperationInternal(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI()) {
      const c = Ha(this.apiClient, n);
      return (
        (l = A("{resourceName}:fetchPredictOperation", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => kt(this.apiClient, d))
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Za = "Content-Type",
  ja = "X-Server-Timeout",
  eu = "User-Agent",
  nu = "x-goog-api-client",
  tu = "0.13.0",
  ou = `google-genai-sdk/${tu}`,
  iu = "v1beta1",
  su = "v1beta",
  Dt = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
class io extends Error {
  constructor(n, e) {
    (e ? super(n, { cause: e }) : super(n, { cause: new Error().stack }),
      (this.message = n),
      (this.name = "ClientError"));
  }
}
class dn extends Error {
  constructor(n, e) {
    (e ? super(n, { cause: e }) : super(n, { cause: new Error().stack }),
      (this.message = n),
      (this.name = "ServerError"));
  }
}
class ru {
  constructor(n) {
    var e, o;
    this.clientOptions = Object.assign(Object.assign({}, n), {
      project: n.project,
      location: n.location,
      apiKey: n.apiKey,
      vertexai: n.vertexai,
    });
    const i = {};
    (this.clientOptions.vertexai
      ? ((i.apiVersion =
          (e = this.clientOptions.apiVersion) !== null && e !== void 0
            ? e
            : iu),
        (i.baseUrl = this.baseUrlFromProjectLocation()),
        this.normalizeAuthParameters())
      : ((i.apiVersion =
          (o = this.clientOptions.apiVersion) !== null && o !== void 0
            ? o
            : su),
        (i.baseUrl = "https://generativelanguage.googleapis.com/")),
      (i.headers = this.getDefaultHeaders()),
      (this.clientOptions.httpOptions = i),
      n.httpOptions &&
        (this.clientOptions.httpOptions = this.patchHttpOptions(
          i,
          n.httpOptions,
        )));
  }
  baseUrlFromProjectLocation() {
    return this.clientOptions.project &&
      this.clientOptions.location &&
      this.clientOptions.location !== "global"
      ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/`
      : "https://aiplatform.googleapis.com/";
  }
  normalizeAuthParameters() {
    if (this.clientOptions.project && this.clientOptions.location) {
      this.clientOptions.apiKey = void 0;
      return;
    }
    ((this.clientOptions.project = void 0),
      (this.clientOptions.location = void 0));
  }
  isVertexAI() {
    var n;
    return (n = this.clientOptions.vertexai) !== null && n !== void 0 ? n : !1;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  getApiVersion() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.apiVersion !== void 0
    )
      return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.baseUrl !== void 0
    )
      return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (
      this.clientOptions.httpOptions &&
      this.clientOptions.httpOptions.headers !== void 0
    )
      return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(n) {
    if (!n || n.baseUrl === void 0 || n.apiVersion === void 0)
      throw new Error("HTTP options are not correctly set.");
    const o = [n.baseUrl.endsWith("/") ? n.baseUrl.slice(0, -1) : n.baseUrl];
    return (
      n.apiVersion && n.apiVersion !== "" && o.push(n.apiVersion),
      o.join("/")
    );
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const n = this.getBaseUrl(),
      e = new URL(n);
    return ((e.protocol = e.protocol == "http:" ? "ws" : "wss"), e.toString());
  }
  setBaseUrl(n) {
    if (this.clientOptions.httpOptions)
      this.clientOptions.httpOptions.baseUrl = n;
    else throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(n, e, o) {
    const i = [this.getRequestUrlInternal(e)];
    return (
      o && i.push(this.getBaseResourcePath()),
      n !== "" && i.push(n),
      new URL(`${i.join("/")}`)
    );
  }
  shouldPrependVertexProjectPath(n) {
    return !(
      this.clientOptions.apiKey ||
      !this.clientOptions.vertexai ||
      n.path.startsWith("projects/") ||
      (n.httpMethod === "GET" && n.path.startsWith("publishers/google/models"))
    );
  }
  async request(n) {
    let e = this.clientOptions.httpOptions;
    n.httpOptions &&
      (e = this.patchHttpOptions(
        this.clientOptions.httpOptions,
        n.httpOptions,
      ));
    const o = this.shouldPrependVertexProjectPath(n),
      i = this.constructUrl(n.path, e, o);
    if (n.queryParams)
      for (const [a, c] of Object.entries(n.queryParams))
        i.searchParams.append(a, String(c));
    let l = {};
    if (n.httpMethod === "GET") {
      if (n.body && n.body !== "{}")
        throw new Error(
          "Request body should be empty for GET request, but got non empty request body",
        );
    } else l.body = n.body;
    return (
      (l = await this.includeExtraHttpOptionsToRequestInit(
        l,
        e,
        n.abortSignal,
      )),
      this.unaryApiCall(i, l, n.httpMethod)
    );
  }
  patchHttpOptions(n, e) {
    const o = JSON.parse(JSON.stringify(n));
    for (const [i, l] of Object.entries(e))
      typeof l == "object"
        ? (o[i] = Object.assign(Object.assign({}, o[i]), l))
        : l !== void 0 && (o[i] = l);
    return o;
  }
  async requestStream(n) {
    let e = this.clientOptions.httpOptions;
    n.httpOptions &&
      (e = this.patchHttpOptions(
        this.clientOptions.httpOptions,
        n.httpOptions,
      ));
    const o = this.shouldPrependVertexProjectPath(n),
      i = this.constructUrl(n.path, e, o);
    (!i.searchParams.has("alt") || i.searchParams.get("alt") !== "sse") &&
      i.searchParams.set("alt", "sse");
    let l = {};
    return (
      (l.body = n.body),
      (l = await this.includeExtraHttpOptionsToRequestInit(
        l,
        e,
        n.abortSignal,
      )),
      this.streamApiCall(i, l, n.httpMethod)
    );
  }
  async includeExtraHttpOptionsToRequestInit(n, e, o) {
    if ((e && e.timeout) || o) {
      const i = new AbortController(),
        l = i.signal;
      (e.timeout &&
        (e == null ? void 0 : e.timeout) > 0 &&
        setTimeout(() => i.abort(), e.timeout),
        o &&
          o.addEventListener("abort", () => {
            i.abort();
          }),
        (n.signal = l));
    }
    return ((n.headers = await this.getHeadersInternal(e)), n);
  }
  async unaryApiCall(n, e, o) {
    return this.apiCall(
      n.toString(),
      Object.assign(Object.assign({}, e), { method: o }),
    )
      .then(async (i) => (await Ft(i), new rn(i)))
      .catch((i) => {
        throw i instanceof Error ? i : new Error(JSON.stringify(i));
      });
  }
  async streamApiCall(n, e, o) {
    return this.apiCall(
      n.toString(),
      Object.assign(Object.assign({}, e), { method: o }),
    )
      .then(async (i) => (await Ft(i), this.processStreamResponse(i)))
      .catch((i) => {
        throw i instanceof Error ? i : new Error(JSON.stringify(i));
      });
  }
  processStreamResponse(n) {
    var e;
    return He(this, arguments, function* () {
      const i =
          (e = n == null ? void 0 : n.body) === null || e === void 0
            ? void 0
            : e.getReader(),
        l = new TextDecoder("utf-8");
      if (!i) throw new Error("Response body is empty");
      try {
        let a = "";
        for (;;) {
          const { done: c, value: d } = yield z(i.read());
          if (c) {
            if (a.trim().length > 0)
              throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const u = l.decode(d);
          try {
            const p = JSON.parse(u);
            if ("error" in p) {
              const h = JSON.parse(JSON.stringify(p.error)),
                v = h.status,
                g = h.code,
                y = `got status: ${v}. ${JSON.stringify(p)}`;
              if (g >= 400 && g < 500) throw new io(y);
              if (g >= 500 && g < 600) throw new dn(y);
            }
          } catch (p) {
            const h = p;
            if (h.name === "ClientError" || h.name === "ServerError") throw p;
          }
          a += u;
          let f = a.match(Dt);
          for (; f; ) {
            const p = f[1];
            try {
              const h = new Response(p, {
                headers: n == null ? void 0 : n.headers,
                status: n == null ? void 0 : n.status,
                statusText: n == null ? void 0 : n.statusText,
              });
              (yield yield z(new rn(h)),
                (a = a.slice(f[0].length)),
                (f = a.match(Dt)));
            } catch (h) {
              throw new Error(`exception parsing stream chunk ${p}. ${h}`);
            }
          }
        }
      } finally {
        i.releaseLock();
      }
    });
  }
  async apiCall(n, e) {
    return fetch(n, e).catch((o) => {
      throw new Error(`exception ${o} sending request`);
    });
  }
  getDefaultHeaders() {
    const n = {},
      e = ou + " " + this.clientOptions.userAgentExtra;
    return ((n[eu] = e), (n[nu] = e), (n[Za] = "application/json"), n);
  }
  async getHeadersInternal(n) {
    const e = new Headers();
    if (n && n.headers) {
      for (const [o, i] of Object.entries(n.headers)) e.append(o, i);
      n.timeout &&
        n.timeout > 0 &&
        e.append(ja, String(Math.ceil(n.timeout / 1e3)));
    }
    return (await this.clientOptions.auth.addAuthHeaders(e), e);
  }
  async uploadFile(n, e) {
    var o;
    const i = {};
    (e != null &&
      ((i.mimeType = e.mimeType),
      (i.name = e.name),
      (i.displayName = e.displayName)),
      i.name && !i.name.startsWith("files/") && (i.name = `files/${i.name}`));
    const l = this.clientOptions.uploader,
      a = await l.stat(n);
    i.sizeBytes = String(a.size);
    const c =
      (o = e == null ? void 0 : e.mimeType) !== null && o !== void 0
        ? o
        : a.type;
    if (c === void 0 || c === "")
      throw new Error(
        "Can not determine mimeType. Please provide mimeType in the config.",
      );
    i.mimeType = c;
    const d = await this.fetchUploadUrl(i, e);
    return l.upload(n, d, this);
  }
  async downloadFile(n) {
    await this.clientOptions.downloader.download(n, this);
  }
  async fetchUploadUrl(n, e) {
    var o;
    let i = {};
    e != null && e.httpOptions
      ? (i = e.httpOptions)
      : (i = {
          apiVersion: "",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Upload-Protocol": "resumable",
            "X-Goog-Upload-Command": "start",
            "X-Goog-Upload-Header-Content-Length": `${n.sizeBytes}`,
            "X-Goog-Upload-Header-Content-Type": `${n.mimeType}`,
          },
        });
    const l = { file: n },
      a = await this.request({
        path: A("upload/v1beta/files", l._url),
        body: JSON.stringify(l),
        httpMethod: "POST",
        httpOptions: i,
      });
    if (!a || !(a != null && a.headers))
      throw new Error(
        "Server did not return an HttpResponse or the returned HttpResponse did not have headers.",
      );
    const c =
      (o = a == null ? void 0 : a.headers) === null || o === void 0
        ? void 0
        : o["x-goog-upload-url"];
    if (c === void 0)
      throw new Error(
        "Failed to get upload url. Server did not return the x-google-upload-url in the headers",
      );
    return c;
  }
}
async function Ft(t) {
  var n;
  if (t === void 0) throw new dn("response is undefined");
  if (!t.ok) {
    const e = t.status,
      o = t.statusText;
    let i;
    !((n = t.headers.get("content-type")) === null || n === void 0) &&
    n.includes("application/json")
      ? (i = await t.json())
      : (i = {
          error: {
            message: await t.text(),
            code: t.status,
            status: t.statusText,
          },
        });
    const l = `got status: ${e} ${o}. ${JSON.stringify(i)}`;
    throw e >= 400 && e < 500
      ? new io(l)
      : e >= 500 && e < 600
        ? new dn(l)
        : new Error(l);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function lu(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], o);
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function au(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  e !== void 0 && l != null && r(e, ["_query", "pageToken"], l);
  const a = s(n, ["filter"]);
  return (e !== void 0 && a != null && r(e, ["_query", "filter"], a), o);
}
function uu(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], au(t, o, e)), e);
}
function cu(t, n) {
  const e = {},
    o = s(n, ["textInput"]);
  o != null && r(e, ["textInput"], o);
  const i = s(n, ["output"]);
  return (i != null && r(e, ["output"], i), e);
}
function du(t, n) {
  const e = {};
  if (s(n, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  const o = s(n, ["examples"]);
  if (o != null) {
    let i = o;
    (Array.isArray(i) && (i = i.map((l) => cu(t, l))),
      r(e, ["examples", "examples"], i));
  }
  return e;
}
function fu(t, n, e) {
  const o = {};
  if (s(n, ["validationDataset"]) !== void 0)
    throw new Error(
      "validationDataset parameter is not supported in Gemini API.",
    );
  const i = s(n, ["tunedModelDisplayName"]);
  if (
    (e !== void 0 && i != null && r(e, ["displayName"], i),
    s(n, ["description"]) !== void 0)
  )
    throw new Error("description parameter is not supported in Gemini API.");
  const l = s(n, ["epochCount"]);
  e !== void 0 &&
    l != null &&
    r(e, ["tuningTask", "hyperparameters", "epochCount"], l);
  const a = s(n, ["learningRateMultiplier"]);
  if (
    (a != null &&
      r(o, ["tuningTask", "hyperparameters", "learningRateMultiplier"], a),
    s(n, ["adapterSize"]) !== void 0)
  )
    throw new Error("adapterSize parameter is not supported in Gemini API.");
  const c = s(n, ["batchSize"]);
  e !== void 0 &&
    c != null &&
    r(e, ["tuningTask", "hyperparameters", "batchSize"], c);
  const d = s(n, ["learningRate"]);
  return (
    e !== void 0 &&
      d != null &&
      r(e, ["tuningTask", "hyperparameters", "learningRate"], d),
    o
  );
}
function mu(t, n) {
  const e = {},
    o = s(n, ["baseModel"]);
  o != null && r(e, ["baseModel"], o);
  const i = s(n, ["trainingDataset"]);
  i != null && r(e, ["tuningTask", "trainingData"], du(t, i));
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], fu(t, l, e)), e);
}
function pu(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["_url", "name"], o);
  const i = s(n, ["config"]);
  return (i != null && r(e, ["config"], i), e);
}
function hu(t, n, e) {
  const o = {},
    i = s(n, ["pageSize"]);
  e !== void 0 && i != null && r(e, ["_query", "pageSize"], i);
  const l = s(n, ["pageToken"]);
  e !== void 0 && l != null && r(e, ["_query", "pageToken"], l);
  const a = s(n, ["filter"]);
  return (e !== void 0 && a != null && r(e, ["_query", "filter"], a), o);
}
function gu(t, n) {
  const e = {},
    o = s(n, ["config"]);
  return (o != null && r(e, ["config"], hu(t, o, e)), e);
}
function vu(t, n, e) {
  const o = {},
    i = s(n, ["gcsUri"]);
  if (
    (e !== void 0 &&
      i != null &&
      r(e, ["supervisedTuningSpec", "trainingDatasetUri"], i),
    s(n, ["examples"]) !== void 0)
  )
    throw new Error("examples parameter is not supported in Vertex AI.");
  return o;
}
function yu(t, n) {
  const e = {},
    o = s(n, ["gcsUri"]);
  return (o != null && r(e, ["validationDatasetUri"], o), e);
}
function xu(t, n, e) {
  const o = {},
    i = s(n, ["validationDataset"]);
  e !== void 0 && i != null && r(e, ["supervisedTuningSpec"], yu(t, i));
  const l = s(n, ["tunedModelDisplayName"]);
  e !== void 0 && l != null && r(e, ["tunedModelDisplayName"], l);
  const a = s(n, ["description"]);
  e !== void 0 && a != null && r(e, ["description"], a);
  const c = s(n, ["epochCount"]);
  e !== void 0 &&
    c != null &&
    r(e, ["supervisedTuningSpec", "hyperParameters", "epochCount"], c);
  const d = s(n, ["learningRateMultiplier"]);
  e !== void 0 &&
    d != null &&
    r(
      e,
      ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"],
      d,
    );
  const u = s(n, ["adapterSize"]);
  if (
    (e !== void 0 &&
      u != null &&
      r(e, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], u),
    s(n, ["batchSize"]) !== void 0)
  )
    throw new Error("batchSize parameter is not supported in Vertex AI.");
  if (s(n, ["learningRate"]) !== void 0)
    throw new Error("learningRate parameter is not supported in Vertex AI.");
  return o;
}
function Nu(t, n) {
  const e = {},
    o = s(n, ["baseModel"]);
  o != null && r(e, ["baseModel"], o);
  const i = s(n, ["trainingDataset"]);
  i != null &&
    r(e, ["supervisedTuningSpec", "trainingDatasetUri"], vu(t, i, e));
  const l = s(n, ["config"]);
  return (l != null && r(e, ["config"], xu(t, l, e)), e);
}
function Cu(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["model"], o);
  const i = s(n, ["name"]);
  return (i != null && r(e, ["endpoint"], i), e);
}
function so(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["state"]);
  i != null && r(e, ["state"], Xt(t, i));
  const l = s(n, ["createTime"]);
  l != null && r(e, ["createTime"], l);
  const a = s(n, ["tuningTask", "startTime"]);
  a != null && r(e, ["startTime"], a);
  const c = s(n, ["tuningTask", "completeTime"]);
  c != null && r(e, ["endTime"], c);
  const d = s(n, ["updateTime"]);
  d != null && r(e, ["updateTime"], d);
  const u = s(n, ["description"]);
  u != null && r(e, ["description"], u);
  const f = s(n, ["baseModel"]);
  f != null && r(e, ["baseModel"], f);
  const p = s(n, ["_self"]);
  p != null && r(e, ["tunedModel"], Cu(t, p));
  const h = s(n, ["distillationSpec"]);
  h != null && r(e, ["distillationSpec"], h);
  const v = s(n, ["experiment"]);
  v != null && r(e, ["experiment"], v);
  const g = s(n, ["labels"]);
  g != null && r(e, ["labels"], g);
  const y = s(n, ["pipelineJob"]);
  y != null && r(e, ["pipelineJob"], y);
  const x = s(n, ["tunedModelDisplayName"]);
  return (x != null && r(e, ["tunedModelDisplayName"], x), e);
}
function Tu(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["tunedModels"]);
  if (i != null) {
    let l = i;
    (Array.isArray(l) && (l = l.map((a) => so(t, a))), r(e, ["tuningJobs"], l));
  }
  return e;
}
function _u(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["metadata"]);
  i != null && r(e, ["metadata"], i);
  const l = s(n, ["done"]);
  l != null && r(e, ["done"], l);
  const a = s(n, ["error"]);
  return (a != null && r(e, ["error"], a), e);
}
function Eu(t, n) {
  const e = {},
    o = s(n, ["model"]);
  o != null && r(e, ["model"], o);
  const i = s(n, ["endpoint"]);
  return (i != null && r(e, ["endpoint"], i), e);
}
function fn(t, n) {
  const e = {},
    o = s(n, ["name"]);
  o != null && r(e, ["name"], o);
  const i = s(n, ["state"]);
  i != null && r(e, ["state"], Xt(t, i));
  const l = s(n, ["createTime"]);
  l != null && r(e, ["createTime"], l);
  const a = s(n, ["startTime"]);
  a != null && r(e, ["startTime"], a);
  const c = s(n, ["endTime"]);
  c != null && r(e, ["endTime"], c);
  const d = s(n, ["updateTime"]);
  d != null && r(e, ["updateTime"], d);
  const u = s(n, ["error"]);
  u != null && r(e, ["error"], u);
  const f = s(n, ["description"]);
  f != null && r(e, ["description"], f);
  const p = s(n, ["baseModel"]);
  p != null && r(e, ["baseModel"], p);
  const h = s(n, ["tunedModel"]);
  h != null && r(e, ["tunedModel"], Eu(t, h));
  const v = s(n, ["supervisedTuningSpec"]);
  v != null && r(e, ["supervisedTuningSpec"], v);
  const g = s(n, ["tuningDataStats"]);
  g != null && r(e, ["tuningDataStats"], g);
  const y = s(n, ["encryptionSpec"]);
  y != null && r(e, ["encryptionSpec"], y);
  const x = s(n, ["partnerModelTuningSpec"]);
  x != null && r(e, ["partnerModelTuningSpec"], x);
  const T = s(n, ["distillationSpec"]);
  T != null && r(e, ["distillationSpec"], T);
  const C = s(n, ["experiment"]);
  C != null && r(e, ["experiment"], C);
  const E = s(n, ["labels"]);
  E != null && r(e, ["labels"], E);
  const b = s(n, ["pipelineJob"]);
  b != null && r(e, ["pipelineJob"], b);
  const M = s(n, ["tunedModelDisplayName"]);
  return (M != null && r(e, ["tunedModelDisplayName"], M), e);
}
function bu(t, n) {
  const e = {},
    o = s(n, ["nextPageToken"]);
  o != null && r(e, ["nextPageToken"], o);
  const i = s(n, ["tuningJobs"]);
  if (i != null) {
    let l = i;
    (Array.isArray(l) && (l = l.map((a) => fn(t, a))), r(e, ["tuningJobs"], l));
  }
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Su extends Pe {
  constructor(n) {
    (super(),
      (this.apiClient = n),
      (this.get = async (e) => await this.getInternal(e)),
      (this.list = async (e = {}) =>
        new Qe(
          Ne.PAGED_ITEM_TUNING_JOBS,
          (o) => this.listInternal(o),
          await this.listInternal(e),
          e,
        )),
      (this.tune = async (e) => {
        if (this.apiClient.isVertexAI()) return await this.tuneInternal(e);
        {
          const o = await this.tuneMldevInternal(e);
          let i = "";
          return (
            o.metadata !== void 0 && o.metadata.tunedModel !== void 0
              ? (i = o.metadata.tunedModel)
              : o.name !== void 0 &&
                o.name.includes("/operations/") &&
                (i = o.name.split("/operations/")[0]),
            { name: i, state: sn.JOB_STATE_QUEUED }
          );
        }
      }));
  }
  async getInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = pu(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => fn(this.apiClient, f))
      );
    } else {
      const u = lu(this.apiClient, n);
      return (
        (c = A("{name}", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => so(this.apiClient, f))
      );
    }
  }
  async listInternal(n) {
    var e, o, i, l;
    let a,
      c = "",
      d = {};
    if (this.apiClient.isVertexAI()) {
      const u = gu(this.apiClient, n);
      return (
        (c = A("tuningJobs", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = bu(this.apiClient, f),
            h = new Ct();
          return (Object.assign(h, p), h);
        })
      );
    } else {
      const u = uu(this.apiClient, n);
      return (
        (c = A("tunedModels", u._url)),
        (d = u._query),
        delete u.config,
        delete u._url,
        delete u._query,
        (a = this.apiClient
          .request({
            path: c,
            queryParams: d,
            body: JSON.stringify(u),
            httpMethod: "GET",
            httpOptions:
              (i = n.config) === null || i === void 0 ? void 0 : i.httpOptions,
            abortSignal:
              (l = n.config) === null || l === void 0 ? void 0 : l.abortSignal,
          })
          .then((f) => f.json())),
        a.then((f) => {
          const p = Tu(this.apiClient, f),
            h = new Ct();
          return (Object.assign(h, p), h);
        })
      );
    }
  }
  async tuneInternal(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI()) {
      const c = Nu(this.apiClient, n);
      return (
        (l = A("tuningJobs", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => fn(this.apiClient, d))
      );
    } else throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(n) {
    var e, o;
    let i,
      l = "",
      a = {};
    if (this.apiClient.isVertexAI())
      throw new Error(
        "This method is only supported by the Gemini Developer API.",
      );
    {
      const c = mu(this.apiClient, n);
      return (
        (l = A("tunedModels", c._url)),
        (a = c._query),
        delete c.config,
        delete c._url,
        delete c._query,
        (i = this.apiClient
          .request({
            path: l,
            queryParams: a,
            body: JSON.stringify(c),
            httpMethod: "POST",
            httpOptions:
              (e = n.config) === null || e === void 0 ? void 0 : e.httpOptions,
            abortSignal:
              (o = n.config) === null || o === void 0 ? void 0 : o.abortSignal,
          })
          .then((d) => d.json())),
        i.then((d) => _u(this.apiClient, d))
      );
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Au {
  async download(n, e) {
    throw new Error(
      "Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.",
    );
  }
}
const Iu = 1024 * 1024 * 8,
  Pu = 3,
  Mu = 1e3,
  wu = 2,
  tn = "x-goog-upload-status";
async function Ru(t, n, e) {
  var o, i, l;
  let a = 0,
    c = 0,
    d = new rn(new Response()),
    u = "upload";
  for (a = t.size; c < a; ) {
    const p = Math.min(Iu, a - c),
      h = t.slice(c, c + p);
    c + p >= a && (u += ", finalize");
    let v = 0,
      g = Mu;
    for (
      ;
      v < Pu &&
      ((d = await e.request({
        path: "",
        body: h,
        httpMethod: "POST",
        httpOptions: {
          apiVersion: "",
          baseUrl: n,
          headers: {
            "X-Goog-Upload-Command": u,
            "X-Goog-Upload-Offset": String(c),
            "Content-Length": String(p),
          },
        },
      })),
      !(
        !((o = d == null ? void 0 : d.headers) === null || o === void 0) &&
        o[tn]
      ));
    )
      (v++, await Du(g), (g = g * wu));
    if (
      ((c += p),
      ((i = d == null ? void 0 : d.headers) === null || i === void 0
        ? void 0
        : i[tn]) !== "active")
    )
      break;
    if (a <= c)
      throw new Error(
        "All content has been uploaded, but the upload status is not finalized.",
      );
  }
  const f = await (d == null ? void 0 : d.json());
  if (
    ((l = d == null ? void 0 : d.headers) === null || l === void 0
      ? void 0
      : l[tn]) !== "final"
  )
    throw new Error("Failed to upload file: Upload status is not finalized.");
  return f.file;
}
async function ku(t) {
  return { size: t.size, type: t.type };
}
function Du(t) {
  return new Promise((n) => setTimeout(n, t));
}
class Fu {
  async upload(n, e, o) {
    if (typeof n == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await Ru(n, e, o);
  }
  async stat(n) {
    if (typeof n == "string")
      throw new Error("File path is not supported in browser uploader.");
    return await ku(n);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Lu {
  create(n, e, o) {
    return new Uu(n, e, o);
  }
}
class Uu {
  constructor(n, e, o) {
    ((this.url = n), (this.headers = e), (this.callbacks = o));
  }
  connect() {
    ((this.ws = new WebSocket(this.url)),
      (this.ws.onopen = this.callbacks.onopen),
      (this.ws.onerror = this.callbacks.onerror),
      (this.ws.onclose = this.callbacks.onclose),
      (this.ws.onmessage = this.callbacks.onmessage));
  }
  send(n) {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.send(n);
  }
  close() {
    if (this.ws === void 0) throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Lt = "x-goog-api-key";
class Vu {
  constructor(n) {
    this.apiKey = n;
  }
  async addAuthHeaders(n) {
    n.get(Lt) === null && n.append(Lt, this.apiKey);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Gu = "gl-node/";
class qu {
  constructor(n) {
    var e;
    if (n.apiKey == null)
      throw new Error("An API Key must be set when running in a browser");
    if (n.project || n.location)
      throw new Error(
        "Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.",
      );
    ((this.vertexai = (e = n.vertexai) !== null && e !== void 0 ? e : !1),
      (this.apiKey = n.apiKey));
    const o = yi(n, void 0, void 0);
    (o &&
      (n.httpOptions
        ? (n.httpOptions.baseUrl = o)
        : (n.httpOptions = { baseUrl: o })),
      (this.apiVersion = n.apiVersion));
    const i = new Vu(this.apiKey);
    ((this.apiClient = new ru({
      auth: i,
      apiVersion: this.apiVersion,
      apiKey: this.apiKey,
      vertexai: this.vertexai,
      httpOptions: n.httpOptions,
      userAgentExtra: Gu + "web",
      uploader: new Fu(),
      downloader: new Au(),
    })),
      (this.models = new qa(this.apiClient)),
      (this.live = new Fa(this.apiClient, i, new Lu())),
      (this.chats = new Cs(this.models, this.apiClient)),
      (this.caches = new vs(this.apiClient)),
      (this.files = new Ds(this.apiClient)),
      (this.operations = new Qa(this.apiClient)),
      (this.tunings = new Su(this.apiClient)));
  }
}
function En(t, n) {
  const e = document.createElement("div");
  (e.classList.add("popup", n), (e.innerHTML = `<span>${t}</span>`));
  const o = document.querySelector("#popups");
  o !== null &&
    (setInterval(() => {
      (e.classList.add("fade"), (e.onanimationend = () => e.remove()));
    }, 2e3),
    o.appendChild(e));
}
function Ee(t) {
  En(t, "success");
}
function $(t) {
  En(t, "error");
}
function bn(t) {
  En(t, "warning");
}
var Sn = "",
  An = "";
mn();
pn();
function Me() {
  return Sn;
}
function we() {
  return An;
}
function Bu(t, n = !0) {
  ((Sn = t), n && localStorage.setItem("name", t));
}
function zu(t, n = !0) {
  ((An = t), n && localStorage.setItem("nick", t));
}
function mn() {
  Sn = localStorage.getItem("name") || "Anonymous";
}
function pn() {
  An = localStorage.getItem("nick") || "Anonymous";
}
var Ie = "";
hn();
Ie ? Rn(Ie, !1) : qe();
function hn() {
  Ie = localStorage.getItem("key");
}
function Hu(t, n = !0) {
  ((Ie = t), n && localStorage.setItem("key", t));
}
function je() {
  return Ie;
}
var ro = !1;
function te() {
  return ro;
}
function $u(t) {
  ro = t;
}
var In = !1;
gn();
function Pn() {
  return In;
}
function lo(t, n = !0) {
  ((In = t), n && localStorage.setItem("useRealNames", t.toString()));
}
function gn() {
  In = localStorage.getItem("useRealNames") === "true";
}
var be = { id: "gemini-1.5-flash-latest", title: "Gemini 1.5 Flash Latest" };
vn();
function $e() {
  return be;
}
function ao(t, n, e = !0) {
  ((be.title = n),
    (be.id = t),
    e && localStorage.setItem("model", JSON.stringify(be)));
}
function vn() {
  be = JSON.parse(
    localStorage.getItem("model") ||
      `{
        "id":  "gemini-1.5-flash-latest",
        "title": "Gemini 1.5 Flash Latest"
    }`,
  );
}
var uo = parseInt(localStorage.getItem("minReplies") || "10");
function Mn() {
  return uo;
}
function co(t, n = !0) {
  ((uo = t), n && localStorage.setItem("minReplies", t.toString()));
}
var fo = localStorage.getItem("scene") || "neutral";
function mo(t, n = !0) {
  if (!go[t]) return $(`O cenario ${t} não existe!`);
  (n && localStorage.setItem("scene", t), (fo = t));
}
function wn() {
  return fo;
}
const Ge = {
  allowPersistentChange: !1,
  changeGeminiAPIKey: !0,
  changeAIModel: !1,
  changeScenario: !0,
  changeNumberOfResponses: !0,
  changeRealUsersUsage: !0,
  changeProfileNickname: !0,
  changeProfileName: !0,
  onlyTemporaryPosts: !0,
};
let le = { ...Ge };
function Ju() {
  try {
    localStorage.setItem("userPermissions", JSON.stringify(le));
  } catch (t) {
    (console.error("Error saving permissions to localStorage:", t),
      alert(
        "Could not save settings. Your browser might be in private mode or storage is full.",
      ));
  }
}
function po() {
  try {
    const t = localStorage.getItem("userPermissions");
    if (t) {
      const n = JSON.parse(t);
      le = { ...Ge, ...n };
    } else le = { ...Ge };
  } catch (t) {
    (console.error(
      "Error loading or parsing permissions from localStorage:",
      t,
    ),
      (le = { ...Ge }));
  }
}
function X(t) {
  return typeof le[t] == "boolean"
    ? le[t]
    : (console.warn(
        `Permission '${t}' is not a boolean or does not exist. Returning default (false).`,
      ),
      !1);
}
function oe(t, n) {
  typeof le[t] == "boolean"
    ? ((le[t] = n), Ju())
    : console.error(
        `Attempted to set permission '${t}' which does not exist or is not boolean.`,
      );
}
po();
function Ut() {
  po();
}
async function Rn(t, n = !0, e = !0) {
  var o;
  if (!t || typeof t != "string" || t.trim() === "") {
    (console.error("API key is empty or invalid."),
      bn("Chave api não pode ser vazia!"),
      te() || qe());
    return;
  }
  try {
    const i = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${t}`,
      { method: "GET", headers: { "Content-Type": "application/json" } },
    );
    if (i.ok)
      ((Je = (await i.json()).models
        .filter(
          (a) =>
            a.supportedGenerationMethods.includes("generateContent") &&
            a.name.startsWith("models/gemini"),
        )
        .map((a) => ({
          id: a.name.replace("models/", ""),
          title: a.displayName,
        }))),
        Hu(t),
        (ho = new qu({ apiKey: t })),
        e && localStorage.setItem("key", t),
        te() || ($u(!0), qe()),
        n && Ee("Chave API atualizada com sucesso!"));
    else {
      (te() || qe(),
        console.error("API Key validation failed. Status:", i.status));
      let l;
      try {
        ((l = await i.json()), console.error("Error details:", l));
        const a =
          ((o = l == null ? void 0 : l.error) == null ? void 0 : o.message) ||
          `HTTP error ${i.status}`;
        n &&
          $(`Chave API Inválida ou Erro de API!<br>Status: ${i.status}
Messagem: ${a}`);
      } catch (a) {
        (console.error("Failed to parse error response as JSON:", a),
          n &&
            alert(`Chave API Inválida ou Erro de API!

Status: ${i.status}
Não foi possível analisar o erro.`));
      }
    }
  } catch (i) {
    (console.error("Network error or fetch failed:", i),
      n &&
        alert(
          `Falha ao conectar à API.
Por favor, cheque sua conexão com a internet.

Erro:
` + i.message,
        ));
  }
}
var ho,
  Je = null;
const go = {
    hate: "every reply need to be against to the user",
    support: "every reply need to agree with the user",
    neutral: "every reply need to be neutral",
  },
  Ou = {
    type: ie.ARRAY,
    items: {
      type: ie.OBJECT,
      required: ["msg", "nick", "repliesCount"],
      properties: {
        name: { type: ie.STRING },
        msg: { type: ie.STRING },
        nick: { type: ie.STRING },
        repliesCount: { type: ie.NUMBER },
      },
    },
  },
  Vt = {
    temperature: 2,
    safetySettings: [
      { category: ve.HARM_CATEGORY_HARASSMENT, threshold: ye.BLOCK_NONE },
      { category: ve.HARM_CATEGORY_HATE_SPEECH, threshold: ye.BLOCK_NONE },
      {
        category: ve.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: ye.BLOCK_NONE,
      },
      {
        category: ve.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: ye.BLOCK_NONE,
      },
    ],
    responseMimeType: "application/json",
    responseSchema: {
      type: ie.OBJECT,
      required: ["replies"],
      properties: { replies: Ou },
    },
    systemInstruction: [{ text: "" }],
  };
async function Wu() {
  const t = je();
  if (!t || typeof t != "string" || t.trim() === "") {
    (console.error("API key is empty or invalid."),
      $("Chave api não está configurada!"));
    return;
  }
  try {
    const n = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${t}`,
      { method: "GET", headers: { "Content-Type": "application/json" } },
    );
    if (n.ok)
      return (
        (Je = (await n.json()).models
          .filter(
            (o) =>
              o.supportedGenerationMethods.includes("generateContent") &&
              o.name.startsWith("models/gemini"),
          )
          .map((o) => ({
            id: o.name.replace("models/", ""),
            title: o.displayName,
          }))),
        Je
      );
  } catch (n) {
    return (console.error("Error fetching models:", n), []);
  }
}
function vo() {
  return Je;
}
function kn(t, n) {
  ((Vt.systemInstruction[0].text = `The user named ${Me()} will make a post, and your objective is to simulate ${Mn()} persons or more saying against common sense, ${go[wn() || "neutral"]}, like in twitter, and simulate angry fan-bases if is in the topic, ${Pn() ? "use real names" : "use realistic nicknames"}, if is reply someone should sign it by a username in the post.`),
    (window.onbeforeunload = (e) => {
      (e.preventDefault(),
        (e.returnValue = !0),
        setTimeout(() => {
          bn(
            "Seu contéudo está sendo gerado, caso saia da página, ele será perdido!",
          );
        }, 1e3));
    }),
    ho.models
      .generateContent({ model: $e().id, contents: t, config: Vt })
      .catch((e) => {
        (n("", e), (window.onbeforeunload = null));
      })
      .then((e) => {
        (e && e.data,
          e && e.text && n(e.text || ""),
          (window.onbeforeunload = null));
      }));
}
var Oe,
  yn = !1;
function Dn(t) {
  ((Oe = t), yn && ((yn = !1), Oe()));
}
function qe() {
  if ((Yu(), Oe)) return Oe();
  yn = !0;
}
var We,
  xn = !1;
function Yu() {
  if (We) return We(te());
  xn = !0;
}
function Ku() {
  return new Promise((t) => {
    ((We = t), xn && ((xn = !1), We(te())));
  });
}
const Xu = H((t) => {
    var o;
    const n = Ye(((o = t.Props) == null ? void 0 : o.post.nick) || "unknown");
    var e = btoa(n);
    return () => {
      var i, l, a, c, d, u, f, p, h;
      return m(
        "div",
        {
          class: G.post,
          id: "main",
          onclick: (i = t.Props) == null ? void 0 : i.onclick,
          children: [
            m(
              "main",
              {
                children: [
                  m(
                    "span",
                    {
                      class: G.account,
                      children: m(
                        "img",
                        {
                          src: `data:image/svg+xml;base64,${e}`,
                          alt:
                            ((l = t.Props) == null ? void 0 : l.post.nick) ||
                            "unknown",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 18,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 17,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: G.text,
                      children: [
                        m(
                          "p",
                          {
                            children: [
                              (a = t.Props) == null ? void 0 : a.post.name,
                              " ",
                              m(
                                "span",
                                {
                                  children: [
                                    "@",
                                    (c = t.Props) == null
                                      ? void 0
                                      : c.post.nick,
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    "/home/user/xtf/src/pages/post/index.tsx",
                                  lineNumber: 21,
                                  columnNumber: 36,
                                },
                                void 0,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 21,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "div",
                          {
                            id: "msg",
                            class: G.msg,
                            children:
                              (d = t.Props) == null ? void 0 : d.post.msg,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 22,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 20,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/post/index.tsx",
                lineNumber: 16,
                columnNumber: 5,
              },
              void 0,
            ),
            m(
              "footer",
              {
                class: G.footer,
                children: [
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-chat" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 29,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((u = t.Props) == null
                                ? void 0
                                : u.post.replies.length) || "0",
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 30,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 28,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-repeat" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 33,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((f = t.Props) == null
                                ? void 0
                                : f.post.retweets) || 0,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 34,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 32,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-fire" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 37,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((p = t.Props) == null ? void 0 : p.post.likes) ||
                              0,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 38,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 36,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-text-right rotate90" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 41,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((h = t.Props) == null ? void 0 : h.post.views) ||
                              1,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 42,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 40,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/post/index.tsx",
                lineNumber: 27,
                columnNumber: 5,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/pages/post/index.tsx",
          lineNumber: 14,
          columnNumber: 16,
        },
        void 0,
      );
    };
  }),
  Qu = H((t) => {
    var o;
    const n = Ye(((o = t.Props) == null ? void 0 : o.post.nick) || "unknown");
    var e = btoa(n);
    return () => {
      var i, l, a, c, d, u, f, p;
      return m(
        "div",
        {
          class: G.comment,
          title: "comment",
          children: [
            m(
              "main",
              {
                children: [
                  m(
                    "span",
                    {
                      class: G.account,
                      children: m(
                        "img",
                        {
                          src: `data:image/svg+xml;base64,${e}`,
                          alt:
                            ((i = t.Props) == null ? void 0 : i.post.nick) ||
                            "unknown",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 58,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 57,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: G.text,
                      children: [
                        m(
                          "p",
                          {
                            children: [
                              (l = t.Props) == null ? void 0 : l.post.name,
                              " ",
                              m(
                                "span",
                                {
                                  children:
                                    (a = t.Props) == null
                                      ? void 0
                                      : a.post.nick,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/pages/post/index.tsx",
                                  lineNumber: 61,
                                  columnNumber: 36,
                                },
                                void 0,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 61,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "div",
                          {
                            id: "msg",
                            class: G.msg,
                            children:
                              (c = t.Props) == null ? void 0 : c.post.msg,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 62,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 60,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/post/index.tsx",
                lineNumber: 56,
                columnNumber: 5,
              },
              void 0,
            ),
            m(
              "footer",
              {
                class: G.footer,
                children: [
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-chat" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 69,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((d = t.Props) == null
                                ? void 0
                                : d.post.repliesCount) || 0,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 70,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 68,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-repeat" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 73,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((u = t.Props) == null
                                ? void 0
                                : u.post.retweets) || 0,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 74,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 72,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-fire" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 77,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((f = t.Props) == null ? void 0 : f.post.likes) ||
                              0,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 78,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 76,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "i",
                          { class: "bi bi-text-right rotate90" },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 81,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                        m(
                          "span",
                          {
                            children:
                              ((p = t.Props) == null ? void 0 : p.post.views) ||
                              1,
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 82,
                            columnNumber: 9,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/post/index.tsx",
                      lineNumber: 80,
                      columnNumber: 7,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/post/index.tsx",
                lineNumber: 67,
                columnNumber: 5,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/pages/post/index.tsx",
          lineNumber: 55,
          columnNumber: 16,
        },
        void 0,
      );
    };
  });
function Zu(t, n, e) {
  if (e.gen) return;
  if (!te()) {
    bn("Sua chave do Gemini não está configurada ou está incorreta.");
    return;
  }
  e.gen = !0;
  let o = e.replies.length;
  (_n(n),
    kn(e.msg, (i, l) => {
      if (l) {
        (console.error("Error:", l),
          (e.gen = !1),
          t.Wake((a) => {
            const c = a.querySelector("main");
            c == null ||
              c.scrollTo({ behavior: "instant", top: c.scrollHeight });
          }));
        return;
      }
      try {
        const c = JSON.parse(i).replies || [];
        for (const u of c) {
          (typeof u.repliesCount != "number" && (u.repliesCount = 0),
            u.nick === void 0 && (u.nick = "Unknown"),
            u.nick.startsWith("@") || (u.nick = "@" + u.nick),
            (u.msg = u.msg.replace(
              /<br>/g,
              `
`,
            )));
          const f = xe(Math.floor(u.repliesCount || Math.random() * 5));
          ((u.views = f.estimatedViews),
            (u.likes = f.estimatedLikes),
            (u.retweets = f.estimatedReposts));
        }
        const d = xe(c.length);
        ((e.views += d.estimatedViews),
          (e.likes += d.estimatedLikes),
          (e.retweets += d.estimatedReposts),
          e == null || e.replies.push(...c),
          (e.gen = !1),
          Ae(),
          t.Wake((u) => {
            const f = u.querySelector("main");
            f == null ||
              f.children[o].scrollIntoView({
                behavior: "instant",
                block: "end",
              });
          }));
      } catch (a) {
        ((e.gen = !1),
          t.Wake((c) => {
            const d = c.querySelector("main");
            d == null ||
              d.scrollTo({ behavior: "instant", top: d.scrollHeight });
          }),
          console.error("Error:", a));
      }
    }),
    t.Wake((i) => {
      const l = i.querySelector("main");
      l == null || l.scrollTo({ behavior: "instant", top: l.scrollHeight });
    }));
}
const Gt = 50;
function pe(t = document.body) {
  const n = t.querySelector("#postMain");
  if (!n) return;
  const e = n.querySelector(`.${G.godown}`),
    o = n.querySelector(`.${G.showmore}`);
  if (!e || !o) return;
  n.scrollTop + n.clientHeight + Gt >= n.scrollHeight
    ? e.classList.remove(G.godownshow)
    : e.classList.add(G.godownshow);
}
const yo = H((t) => () => {
    var o, i;
    const n = parseInt(
        ((i = (o = t.Props) == null ? void 0 : o.router) == null
          ? void 0
          : i.params.id) || "-1",
      ),
      e = Tn(n);
    return (
      n === ti() &&
        ni(() => {
          t.Wake(() => {
            pe();
          });
        }),
      n == -1 || isNaN(n) || e == null
        ? m(
            "div",
            {
              children: [
                m(
                  "h1",
                  { children: "400" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/post/index.tsx",
                    lineNumber: 196,
                    columnNumber: 7,
                  },
                  void 0,
                ),
                m(
                  "h2",
                  { children: "Bad Request!" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/post/index.tsx",
                    lineNumber: 197,
                    columnNumber: 7,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/post/index.tsx",
              lineNumber: 195,
              columnNumber: 61,
            },
            void 0,
          )
        : m(
            "div",
            {
              class: G.comp,
              onbuild: (l) => pe(l.target),
              children: [
                m(
                  "header",
                  {
                    onclick: (l) => {
                      const a = l.target.parentElement,
                        c = a == null ? void 0 : a.querySelector("main");
                      c && c.scrollTo({ behavior: "smooth", top: 0 });
                    },
                    children: [
                      m(
                        "i",
                        {
                          class: "bi bi-chevron-left",
                          onclick: () => {
                            var l, a;
                            return (a =
                              (l = t.Props) == null ? void 0 : l.router) == null
                              ? void 0
                              : a.back();
                          },
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 210,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                      m(
                        "h2",
                        { children: "Post" },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 211,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/post/index.tsx",
                    lineNumber: 202,
                    columnNumber: 7,
                  },
                  void 0,
                ),
                m(
                  "main",
                  {
                    onscroll: (l) => pe(l.target.parentElement),
                    id: "postMain",
                    children: [
                      m(
                        Xu,
                        { post: e },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 214,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                      ...e.replies.map((l) =>
                        m(
                          Qu,
                          { post: l },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/post/index.tsx",
                            lineNumber: 215,
                            columnNumber: 38,
                          },
                          void 0,
                        ),
                      ),
                      m(
                        "button",
                        {
                          type: "button",
                          title: "go to down",
                          ariaHidden: "true",
                          class: G.godown,
                          onclick: (l) => {
                            var c;
                            let a = l.target;
                            (a.classList.contains("bi-chevron-down") &&
                              (a = a.parentElement),
                              (c = a.nextElementSibling) == null ||
                                c.scrollIntoView({ behavior: "smooth" }));
                          },
                          children: m(
                            "i",
                            { class: "bi bi-chevron-down " },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/post/index.tsx",
                              lineNumber: 223,
                              columnNumber: 12,
                            },
                            void 0,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 216,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                      m(
                        "div",
                        {
                          class: G.showmore,
                          children: m(
                            "button",
                            {
                              type: "button",
                              title: "Gerar mais respostas",
                              class: e.gen ? G.generating : "",
                              onclick: () => Zu(t, n, e),
                              children: m(
                                "i",
                                { class: "bi bi-arrow-repeat" },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/pages/post/index.tsx",
                                  lineNumber: 226,
                                  columnNumber: 13,
                                },
                                void 0,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/post/index.tsx",
                              lineNumber: 225,
                              columnNumber: 11,
                            },
                            void 0,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/home/user/xtf/src/pages/post/index.tsx",
                          lineNumber: 224,
                          columnNumber: 9,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/post/index.tsx",
                    lineNumber: 213,
                    columnNumber: 7,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/post/index.tsx",
              lineNumber: 200,
              columnNumber: 12,
            },
            void 0,
          )
    );
  }),
  ju = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HideSeekGoDown: pe, default: yo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  e1 = H((t) => {
    var i;
    const n = Ye(((i = t.Props) == null ? void 0 : i.post.nick) || "unknown");
    var e = btoa(n),
      o = !1;
    return () => {
      var l, a, c, d, u, f, p, h;
      return m(
        "section",
        {
          class: me.post,
          id: (l = t.Props) == null ? void 0 : l.id,
          onclick: (v) => {
            var g, y, x, T, C;
            o ||
              ((C =
                (x =
                  (y = (g = t.Props) == null ? void 0 : g.parent) == null
                    ? void 0
                    : y.Props) == null
                  ? void 0
                  : x.router) == null ||
                C.goto(
                  `/rixa/#post/${(T = t.Props) == null ? void 0 : T.index}`,
                ),
              pe());
          },
          children: [
            m(
              "div",
              {
                class: me.account,
                children: [
                  m(
                    "span",
                    {
                      class: me.profile,
                      children: m(
                        "img",
                        {
                          src: `data:image/svg+xml;base64,${e}`,
                          alt:
                            ((a = t.Props) == null ? void 0 : a.post.nick) ||
                            "unknown",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/components/Post.comp.tsx",
                          lineNumber: 20,
                          columnNumber: 42,
                        },
                        void 0,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                      lineNumber: 20,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "i",
                    {
                      class: `bi bi-trash ${me.trash}`,
                      role: "button",
                      title: "deletar post",
                      onclick: (v) => {
                        var y, x, T;
                        if (
                          ((y = t.Props) == null ? void 0 : y.index) === void 0
                        )
                          return;
                        const g = t.Props.index;
                        (oi(g),
                          (o = !0),
                          (T = (x = t.Props) == null ? void 0 : x.parent) ==
                            null ||
                            T.Wake((C) => {
                              var b;
                              const E = C.querySelector(
                                `#${(b = t.Props) == null ? void 0 : b.id}`,
                              );
                              E &&
                                E.scrollIntoView({
                                  behavior: "instant",
                                  block: "center",
                                  inline: "nearest",
                                });
                            }));
                      },
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                      lineNumber: 22,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                lineNumber: 19,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "div",
              {
                class: me.text,
                children: [
                  m(
                    "p",
                    {
                      children: [
                        (c = t.Props) == null ? void 0 : c.post.name,
                        " ",
                        m(
                          "span",
                          {
                            children: [
                              "@",
                              (d = t.Props) == null ? void 0 : d.post.nick,
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/components/Post.comp.tsx",
                            lineNumber: 37,
                            columnNumber: 40,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                      lineNumber: 37,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      id: "msg",
                      class: me.msg,
                      children: (u = t.Props) == null ? void 0 : u.post.msg,
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                      lineNumber: 38,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: me.footer,
                      children: [
                        m(
                          "div",
                          {
                            children: [
                              m(
                                "i",
                                { class: "bi bi-chat" },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 43,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                              m(
                                "span",
                                {
                                  children:
                                    ((f = t.Props) == null
                                      ? void 0
                                      : f.post.replies.length) || "0",
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 44,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/components/Post.comp.tsx",
                            lineNumber: 42,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "div",
                          {
                            children: [
                              m(
                                "i",
                                { class: "bi bi-fire" },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 47,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                              m(
                                "span",
                                {
                                  children:
                                    ((p = t.Props) == null
                                      ? void 0
                                      : p.post.likes) || 0,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 48,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/components/Post.comp.tsx",
                            lineNumber: 46,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "div",
                          {
                            children: [
                              m(
                                "i",
                                { class: "bi bi-text-right rotate90" },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 51,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                              m(
                                "span",
                                {
                                  children:
                                    ((h = t.Props) == null
                                      ? void 0
                                      : h.post.views) || 1,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/components/Post.comp.tsx",
                                  lineNumber: 52,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/components/Post.comp.tsx",
                            lineNumber: 50,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                      lineNumber: 41,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/components/Post.comp.tsx",
                lineNumber: 36,
                columnNumber: 9,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/components/Post.comp.tsx",
          lineNumber: 13,
          columnNumber: 18,
        },
        void 0,
      );
    };
  });
function n1(t) {
  const n = t.target,
    e = n.parentElement,
    o = e == null ? void 0 : e.querySelector("#charsCount"),
    i = e == null ? void 0 : e.querySelector("#sendBtn");
  (t.code === "Backspace" || t.code === "Delete") &&
    n.innerText.length === 1 &&
    (t.target.innerHTML = "");
  const l = n.innerText.length;
  (o && (o.innerHTML = l.toString()), i && (i.disabled = l <= 0 || l > 500));
}
function t1(t, n) {
  var c, d;
  const o = n.target.parentElement.parentElement.querySelector("#msg");
  if (!o) return;
  o.innerHTML = o.innerHTML.replace(
    /<br>/g,
    `
`,
  );
  const i = o.innerText;
  zt({
    name: Me(),
    msg: i,
    nick: we(),
    views: 0,
    likes: 0,
    retweets: 0,
    replies: [],
    gen: !0,
  });
  const l = Bt() - 1,
    a = Tn(l);
  (_n(l),
    kn(i, (u, f) => {
      var p, h, v, g;
      if (f) {
        (console.error("Error:", f), (a.gen = !1), Ae());
        return;
      }
      try {
        const x = JSON.parse(u).replies || [];
        for (const C of x) {
          (C.replies === void 0 && (C.replies = []),
            C.nick === void 0 && (C.nick = "Unknown"),
            C.nick.startsWith("@") || (C.nick = "@" + C.nick),
            (C.msg = C.msg.replace(
              /<br>/g,
              `
`,
            )));
          const E = xe(parseInt(C.repliesCount || 0));
          ((C.views = E.estimatedViews),
            (C.likes = E.estimatedLikes),
            (C.repliesCount = C.repliesCount));
        }
        const T = xe(x.length);
        ((a.views = T.estimatedViews),
          (a.likes = T.estimatedLikes),
          (a.retweets = T.estimatedReposts),
          (a.replies = x),
          (a.gen = !1),
          Ae(),
          ((h = (p = t.Props) == null ? void 0 : p.router) == null
            ? void 0
            : h.path.val) == "/rixa/"
            ? (g = (v = t.Props) == null ? void 0 : v.router) == null ||
              g.wake()
            : pe());
      } catch (y) {
        ($(`Erro ao gerar: ${y}`), console.error("Error:", y));
      }
    }),
    (d = (c = t.Props) == null ? void 0 : c.router) == null ||
      d.goto(`/rixa/#post/${l}`));
}
const xo = H((t) => {
    var n;
    return (
      je()
        ? Dn(() => {
            t.Wake();
          })
        : (n = "Carregando chave api do Gemini..."),
      () => {
        const e = Ye(we()),
          o = te();
        let i = !1;
        return (
          n
            ? n === "Carregando chave api do Gemini..." &&
              ((n = `A chave api do Gemini não foi definida!
Clique aqui para definir.`),
              (i = !0))
            : (n = "Carregando chave api do Gemini..."),
          m(
            "div",
            {
              children: m(
                "div",
                {
                  class: ne.comp,
                  children: [
                    m(
                      "header",
                      {
                        class: ne.header,
                        children: [
                          "O contéudo gerado pode ser ",
                          m(
                            "span",
                            { children: "ofensivo!" },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/main/index.tsx",
                              lineNumber: 131,
                              columnNumber: 36,
                            },
                            void 0,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/user/xtf/src/pages/main/index.tsx",
                        lineNumber: 130,
                        columnNumber: 7,
                      },
                      void 0,
                    ),
                    m(
                      "p",
                      {
                        class: o ? ne.invisible : " " + ne.geminiNot,
                        onclick: () => {
                          var l, a;
                          i &&
                            ((a = (l = t.Props) == null ? void 0 : l.router) ==
                              null ||
                              a.goto("/rixa/#options"));
                        },
                        children: n,
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/home/user/xtf/src/pages/main/index.tsx",
                        lineNumber: 133,
                        columnNumber: 7,
                      },
                      void 0,
                    ),
                    m(
                      "div",
                      {
                        class: `${o ? "" : ne.disabled} ${ne.newPost}`,
                        children: [
                          m(
                            "span",
                            {
                              class: ne.account,
                              children: [
                                " ",
                                m(
                                  "img",
                                  {
                                    src: `data:image/svg+xml;base64,${btoa(e)}`,
                                    alt: "Avatar",
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      "/home/user/xtf/src/pages/main/index.tsx",
                                    lineNumber: 140,
                                    columnNumber: 39,
                                  },
                                  void 0,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/main/index.tsx",
                              lineNumber: 140,
                              columnNumber: 9,
                            },
                            void 0,
                          ),
                          m(
                            "div",
                            {
                              class: ne.input,
                              children: [
                                m(
                                  "div",
                                  {
                                    id: "msg",
                                    oninput: n1,
                                    class: ne.msg,
                                    contentEditable: o ? "true" : "false",
                                    "data-placeholder":
                                      "O que está acontecendo?",
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      "/home/user/xtf/src/pages/main/index.tsx",
                                    lineNumber: 142,
                                    columnNumber: 11,
                                  },
                                  void 0,
                                ),
                                m(
                                  "div",
                                  {
                                    class: ne.btns,
                                    children: [
                                      m(
                                        "p",
                                        { id: "charsCount", children: "0" },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            "/home/user/xtf/src/pages/main/index.tsx",
                                          lineNumber: 146,
                                          columnNumber: 13,
                                        },
                                        void 0,
                                      ),
                                      m(
                                        "button",
                                        {
                                          id: "sendBtn",
                                          disabled: !0,
                                          onclick: (l) => t1(t, l),
                                          children: "Post",
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            "/home/user/xtf/src/pages/main/index.tsx",
                                          lineNumber: 147,
                                          columnNumber: 13,
                                        },
                                        void 0,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      "/home/user/xtf/src/pages/main/index.tsx",
                                    lineNumber: 145,
                                    columnNumber: 11,
                                  },
                                  void 0,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/main/index.tsx",
                              lineNumber: 141,
                              columnNumber: 9,
                            },
                            void 0,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/home/user/xtf/src/pages/main/index.tsx",
                        lineNumber: 138,
                        columnNumber: 7,
                      },
                      void 0,
                    ),
                    ...ei()
                      .map((l, a) =>
                        m(
                          e1,
                          { post: l, id: `post-${a}`, index: a, parent: t },
                          void 0,
                          !1,
                          {
                            fileName: "/home/user/xtf/src/pages/main/index.tsx",
                            lineNumber: 151,
                            columnNumber: 39,
                          },
                          void 0,
                        ),
                      )
                      .reverse(),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: "/home/user/xtf/src/pages/main/index.tsx",
                  lineNumber: 129,
                  columnNumber: 17,
                },
                void 0,
              ),
            },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/main/index.tsx",
              lineNumber: 129,
              columnNumber: 12,
            },
            void 0,
          )
        );
      }
    );
  }),
  o1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  i1 = "_comp_9yr8s_1",
  s1 = "_perfil_9yr8s_28",
  r1 = "_nick_9yr8s_48",
  l1 = "_name_9yr8s_49",
  a1 = "_apikey_9yr8s_86",
  u1 = "_models_9yr8s_166",
  c1 = "_scenes_9yr8s_202",
  d1 = "_minReplies_9yr8s_238",
  f1 = "_customSlider_9yr8s_263",
  m1 = "_linkPerms_9yr8s_314",
  L = {
    comp: i1,
    perfil: s1,
    nick: r1,
    name: l1,
    apikey: a1,
    models: u1,
    scenes: c1,
    minReplies: d1,
    customSlider: f1,
    linkPerms: m1,
    "checkbox-container": "_checkbox-container_9yr8s_336",
  },
  p1 = H((t) => {
    var n;
    return (
      t.Props && t.Use((n = t.Props) == null ? void 0 : n.value),
      () => {
        var o, i, l;
        return (((o = t.Props) == null ? void 0 : o.value.val) || 0) < 10
          ? m(
              "span",
              {
                class: L.minReplies,
                id: "n",
                children: ["0", (i = t.Props) == null ? void 0 : i.value.val],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/options/index.tsx",
                lineNumber: 16,
                columnNumber: 14,
              },
              void 0,
            )
          : m(
              "span",
              {
                class: L.minReplies,
                id: "n",
                children: (l = t.Props) == null ? void 0 : l.value.val,
              },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/pages/options/index.tsx",
                lineNumber: 19,
                columnNumber: 12,
              },
              void 0,
            );
      }
    );
  });
function h1(t, n) {
  let e = parseInt(t.target.value);
  (Number.isNaN(e) && (e = 1), co(e), (n.val = e));
}
const g1 = H((t) => {
  let n = W(Mn());
  return () =>
    m(
      "div",
      {
        class: L.customSlider,
        children: [
          m(
            "input",
            {
              title: "Número de respostas geradas por geração",
              type: "range",
              min: "1",
              max: "50",
              value: `${n.val}`,
              id: "myRange",
              oninput: (e) => h1(e, n),
            },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 37,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            p1,
            { value: n },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 38,
              columnNumber: 7,
            },
            void 0,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "/home/user/xtf/src/pages/options/index.tsx",
        lineNumber: 36,
        columnNumber: 12,
      },
      void 0,
    );
});
function v1(t, n) {
  const o = n.target.previousElementSibling.querySelector("input");
  o !== null && Rn(o.value).then(() => t.Wake());
}
function y1(t) {
  const n = t.target;
  ao(n.value, n.options[n.selectedIndex].text);
}
const No = H((t) => () => {
    let n = vo();
    te() || Dn(() => t.Wake());
    let e = $e(),
      o = wn(),
      i = Pn();
    return m(
      "div",
      {
        class: L.comp,
        children: [
          m(
            "h1",
            { children: "Opções" },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 71,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.perfil,
              children: [
                m(
                  "h2",
                  { children: "Como vai ser seu perfil?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 73,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L.name,
                    children: [
                      m(
                        "label",
                        { children: "Nome:" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 75,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "input",
                        {
                          type: "text",
                          placeholder: " Nome do perfil",
                          value: Me(),
                          onchange: (l) => Bu(l.target.value),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 76,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 74,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L.nick,
                    children: [
                      m(
                        "label",
                        { children: "Nick:" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 79,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "input",
                        {
                          type: "text",
                          placeholder: " Nick do perfil",
                          value: we(),
                          onchange: (l) => zu(l.target.value),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 80,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 78,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 72,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.apikey,
              children: [
                m(
                  "h2",
                  { children: "Como vai ser sua Chave?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 84,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children: [
                      "Caso ainda não tenha, Consiga sua Chave do Gemini API aqui: ",
                      m(
                        "a",
                        {
                          rel: "noopener",
                          href: "https://makersuite.google.com/app/apikey",
                          target: "_blank",
                          children: "https://makersuite.google.com/app/apikey",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 86,
                          columnNumber: 71,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 85,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    children: [
                      m(
                        "label",
                        { children: "Chave:" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 90,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "input",
                        {
                          type: "text",
                          placeholder: " Chave do Gemini API",
                          value: je() || "",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 91,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 89,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "button",
                  { onclick: (l) => v1(t, l), children: "Alterar Chave" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 93,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 83,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.models,
              children: [
                m(
                  "h2",
                  { children: "Qual modelo de AI você quer usar?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 97,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children:
                      "Pode melhorar as respostas, porém pode resultar em menor quota de tokens, e maior tempo de resposta. Alguns modelos podem não ser suportados!",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 98,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "select",
                  {
                    disabled: n === null,
                    title: "Selecione um modelo",
                    onchange: y1,
                    children: n
                      ? n.map((l, a) =>
                          m(
                            "option",
                            {
                              selected: e.id === l.id,
                              value: l.id,
                              children: l.title,
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/options/index.tsx",
                              lineNumber: 100,
                              columnNumber: 46,
                            },
                            void 0,
                          ),
                        )
                      : m(
                          "option",
                          { children: e.title },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/options/index.tsx",
                            lineNumber: 100,
                            columnNumber: 134,
                          },
                          void 0,
                        ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 99,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 96,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.scenes,
              children: [
                m(
                  "h2",
                  { children: "Qual cenário você quer usar?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 105,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children:
                      "Os cenários definem como a AI vai tratar seus posts",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 106,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "select",
                  {
                    title: "Selecione um cenário",
                    onchange: (l) => mo(l.target.value),
                    children: [
                      m(
                        "option",
                        {
                          value: "hate",
                          selected: o === "hate",
                          children:
                            "Todos te odeiam, seu post será apenas criticado",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 108,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "option",
                        {
                          value: "support",
                          selected: o === "support",
                          children:
                            "Todos te amam, seu post será apenas apoiado",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 109,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "option",
                        {
                          value: "neutral",
                          selected: o === "neutral",
                          children:
                            "Nem todos te amam, nem todos te odeiam, seu post será neutro",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 110,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 107,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 104,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.minReplies,
              children: [
                m(
                  "h2",
                  { children: "Quantas respostas?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 114,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children:
                      "Muda a quantidade de repostas geradas por geração",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 115,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  g1,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 116,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 113,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.scenes,
              children: [
                m(
                  "h2",
                  { children: "Usar usuários reais?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 119,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children:
                      "Pode acabar utilizando de personalidades conhecidas na internet nas respostas. Isso é apenas para humor e não deve ser levado em consideração como uma opnião da personalidade.",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 120,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "select",
                  {
                    title: "Selecione um cenário",
                    onchange: (l) => lo(l.target.value === "true"),
                    children: [
                      m(
                        "option",
                        {
                          value: "true",
                          selected: i,
                          children: "Sim, utilizar usuários reais",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 122,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "option",
                        {
                          value: "false",
                          selected: !i,
                          children: "Não, não utilizar usuários reais",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 123,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 121,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 118,
              columnNumber: 7,
            },
            void 0,
          ),
          m(
            "section",
            {
              class: L.linkPerms,
              children: [
                m(
                  "h2",
                  { children: "O que os links podem fazer?" },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 128,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "p",
                  {
                    children:
                      "Pode conceder aos links gerados no menu de contexto permissões para interagir com a AI de diferentes formas.",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 129,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "allowPersistentChange",
                          type: "checkbox",
                          checked: X("allowPersistentChange"),
                          onchange: (l) =>
                            oe("allowPersistentChange", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 132,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "allowPersistentChange",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 139,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Permitir alteração persistente",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 138,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 131,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "onlyTempPosts",
                          type: "checkbox",
                          checked: X("onlyTemporaryPosts"),
                          onchange: (l) =>
                            oe("onlyTemporaryPosts", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 145,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "onlyTempPosts",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 152,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Apenas posts temporários",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 151,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 144,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeApiKey",
                          type: "checkbox",
                          checked: X("changeGeminiAPIKey"),
                          onchange: (l) =>
                            oe("changeGeminiAPIKey", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 159,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeApiKey",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 166,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar a chave do Gemini API",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 165,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 158,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeAIModel",
                          type: "checkbox",
                          checked: X("changeAIModel"),
                          onchange: (l) =>
                            oe("changeAIModel", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 172,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeAIModel",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 179,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o modelo de AI",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 178,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 171,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeScene",
                          type: "checkbox",
                          checked: X("changeScenario"),
                          onchange: (l) =>
                            oe("changeScenario", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 185,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeScene",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 192,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o cenário",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 191,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 184,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeMinReplies",
                          type: "checkbox",
                          checked: X("changeNumberOfResponses"),
                          onchange: (l) =>
                            oe("changeNumberOfResponses", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 198,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeMinReplies",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 205,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o número de respostas",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 204,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 197,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeUseRealNames",
                          type: "checkbox",
                          checked: X("changeRealUsersUsage"),
                          onchange: (l) =>
                            oe("changeRealUsersUsage", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 211,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeUseRealNames",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 218,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o uso de usuários reais",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 217,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 210,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeProfileNick",
                          type: "checkbox",
                          checked: X("changeProfileNickname"),
                          onchange: (l) =>
                            oe("changeProfileNickname", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 224,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeProfileNick",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 231,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o nick do perfil",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 230,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 223,
                    columnNumber: 9,
                  },
                  void 0,
                ),
                m(
                  "div",
                  {
                    class: L["checkbox-container"],
                    children: [
                      m(
                        "input",
                        {
                          id: "changeProfileName",
                          type: "checkbox",
                          checked: X("changeProfileName"),
                          onchange: (l) =>
                            oe("changeProfileName", l.target.checked),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 237,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                      m(
                        "label",
                        {
                          for: "changeProfileName",
                          children: [
                            m(
                              "span",
                              {},
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/options/index.tsx",
                                lineNumber: 244,
                                columnNumber: 13,
                              },
                              void 0,
                            ),
                            "Alterar o nome do perfil",
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            "/home/user/xtf/src/pages/options/index.tsx",
                          lineNumber: 243,
                          columnNumber: 11,
                        },
                        void 0,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/home/user/xtf/src/pages/options/index.tsx",
                    lineNumber: 236,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "/home/user/xtf/src/pages/options/index.tsx",
              lineNumber: 127,
              columnNumber: 7,
            },
            void 0,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "/home/user/xtf/src/pages/options/index.tsx",
        lineNumber: 70,
        columnNumber: 12,
      },
      void 0,
    );
  }),
  x1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: No },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  N1 = "_comp_zllzq_1",
  C1 = { comp: N1 },
  Co = H(
    (t) => () =>
      m(
        "div",
        {
          class: C1.comp,
          children: [
            m(
              "h1",
              { children: "Sobre" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 9,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "O Que é o RiXa?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 11,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "RiXa é uma plataforma feita em cima de uma framework própria, com o uso da AI generativa da Google, a Gemini, utiliza destes recursos para gerar repostas aos seus posts, inspirado na plataforma X ou também conhecido como Twitter.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 12,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 10,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "Qual a finalidade?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 15,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "RiXa possui o foco em apenas entretenimento, possibilitando posts absurdos com respostas absurdas. Podendo assim gerar humor ou entretenimento.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 16,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 14,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "Sobre a privacidade?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 19,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "RiXa é completamente local, assim sua chave, posts e etc, são salvos localmente em seu navegador. Seus posts são diretamente enviados para API do Gemini.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 20,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 18,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "Como funciona?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 23,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Quando o usuário faz um post, ele é enviando para o Gemini interpretar e gerar as respostas baseados nos parâmetros estabelecidos nas Opções. O Gemini irá tentar soar como respostas reais e de fan-bases raivosas.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 24,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 22,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "O que eu posso configurar?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 27,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "É possível alterar o número minimo de respostas geradas, o modelo de ai, o cenário, o nome, o nick, a chave. ",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 28,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 26,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "O que são os cenários?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 31,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "É o modo em que a AI irá agir e gerar as respostas. Os cenários são: Neutro, Odiador, Apoiador",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 32,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 30,
                columnNumber: 7,
              },
              void 0,
            ),
            m(
              "section",
              {
                children: [
                  m(
                    "h2",
                    { children: "Como surgiu?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 35,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Surgiu a partir de como as redes sociais hoje em dia são altamente critícas e com opiniões adversas sobre todos os assuntos, podendo até mesmo ser cômico em algumas discussões.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/about/index.tsx",
                      lineNumber: 36,
                      columnNumber: 9,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/about/index.tsx",
                lineNumber: 34,
                columnNumber: 7,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/pages/about/index.tsx",
          lineNumber: 8,
          columnNumber: 12,
        },
        void 0,
      ),
  ),
  T1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Co },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
async function _1(t) {
  var g;
  const n = new URLSearchParams(window.location.search),
    e = n.get("persistent"),
    o = n.get("key"),
    i = n.get("scene"),
    l = n.get("model"),
    a = n.get("msg"),
    c = n.get("minReplies"),
    d = n.get("realNames"),
    u = n.get("temppost");
  let f = !1;
  (u &&
    (u === "true" || u === "false"
      ? (f = u === "true")
      : $("Parâmetro inválido: " + u)),
    X("onlyTemporaryPosts") && (f = !0));
  let p = !1;
  if (
    (e &&
      (e === "true" || e === "false"
        ? (p = e === "true")
        : $("Parâmetro inválido: " + e)),
    (p = p && X("allowPersistentChange")),
    o && (await Rn(o, !0, p)),
    i && mo(i, p),
    l)
  ) {
    const y = await Wu();
    if (!y) return $("Falha ao buscar os modelos");
    let x = !0;
    for (let T of y)
      if (T.id === l) {
        (ao(T.id, T.title, p), Ee(`Modelo ${T.title} selecionado!`), (x = !1));
        break;
      }
    x && $(`Modelo ${l} não encontrado!`);
  }
  if (c) {
    var h = parseInt(c);
    if (isNaN(h)) return $("Número de respostas inválido: " + c);
    if (h > 50) return $("Número de repostas acima de 50 não é permitido");
    (co(h, p), Ee(`Número de respostas mínimo alterado para ${h}`));
  }
  if (
    (d &&
      (d === "true" || d === "false"
        ? (lo(d === "true", p), Ee(`Modo de nomes real alterado para ${d}`))
        : $("Parâmetro inválido: " + d)),
    a)
  ) {
    if (!te() && (await Ku())) return $("Gemini não está disponível");
    var v = decodeURIComponent(a);
    zt({
      name: Me(),
      msg: v,
      nick: we(),
      views: 0,
      likes: 0,
      retweets: 0,
      replies: [],
      gen: !0,
      temp: f,
    });
    const y = Bt() - 1,
      x = Tn(y);
    (_n(y),
      kn(a, (T, C) => {
        var E, b;
        if (C) {
          (console.error("Error:", C), (x.gen = !1), Ae());
          return;
        }
        try {
          const R = JSON.parse(T).replies || [];
          for (const I of R) {
            (I.replies === void 0 && (I.replies = []),
              I.nick === void 0 && (I.nick = "Unknown"),
              I.nick.startsWith("@") || (I.nick = "@" + I.nick),
              (I.msg = I.msg.replace(
                /<br>/g,
                `
`,
              )));
            const k = xe(parseInt(I.repliesCount || 0));
            ((I.views = k.estimatedViews),
              (I.likes = k.estimatedLikes),
              (I.repliesCount = I.repliesCount));
          }
          const F = xe(R.length);
          ((x.views = F.estimatedViews),
            (x.likes = F.estimatedLikes),
            (x.retweets = F.estimatedReposts),
            (x.replies = R),
            (x.gen = !1),
            Ut(),
            hn(),
            mn(),
            pn(),
            gn(),
            vn(),
            Ae(),
            ((E = t.val) == null ? void 0 : E.path.val) == "/rixa/" &&
              ((b = t.val) == null || b.wake()));
        } catch (M) {
          ($(`Erro ao gerar: ${M}`),
            Ut(),
            hn(),
            mn(),
            pn(),
            gn(),
            vn(),
            console.error("Error:", M));
        }
      }),
      (g = t.val) == null || g.goto(`/rixa/#post/${y}`));
  }
}
const E1 = "_comp_1evbj_1",
  b1 = "_perfil_1evbj_28",
  S1 = "_nick_1evbj_48",
  A1 = "_name_1evbj_49",
  I1 = "_apikey_1evbj_86",
  P1 = "_models_1evbj_167",
  M1 = "_scenes_1evbj_203",
  w1 = "_minReplies_1evbj_239",
  R1 = "_customSlider_1evbj_264",
  k1 = "_message_1evbj_315",
  D1 = "_linkGeneration_1evbj_353",
  F1 = "_generatedLink_1evbj_378",
  B = {
    comp: E1,
    perfil: b1,
    nick: S1,
    name: A1,
    apikey: I1,
    models: P1,
    scenes: M1,
    minReplies: w1,
    customSlider: R1,
    message: k1,
    linkGeneration: D1,
    generatedLink: F1,
    "checkbox-container": "_checkbox-container_1evbj_404",
  },
  L1 = H((t) => {
    var n;
    return (
      t.Props && t.Use((n = t.Props) == null ? void 0 : n.value),
      () => {
        var o;
        const e = ((o = t.Props) == null ? void 0 : o.value.val) || 0;
        return m(
          "span",
          { class: B.minReplies, id: "n", children: e < 10 ? `0${e}` : `${e}` },
          void 0,
          !1,
          {
            fileName: "/home/user/xtf/src/pages/share/index.tsx",
            lineNumber: 13,
            columnNumber: 12,
          },
          void 0,
        );
      }
    );
  }),
  U1 = H((t) => () => {
    var o;
    const n = (o = t.Props) == null ? void 0 : o.value,
      e = (i) => {
        let l = parseInt(i.target.value);
        (Number.isNaN(l) && (l = 1), (n.val = l));
      };
    return m(
      "div",
      {
        class: B.customSlider,
        children: [
          m(
            "input",
            {
              title: "Número de respostas geradas por geração",
              type: "range",
              min: "1",
              max: "50",
              value: `${(n == null ? void 0 : n.val) || 1}`,
              oninput: e,
            },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/share/index.tsx",
              lineNumber: 32,
              columnNumber: 17,
            },
            void 0,
          ),
          m(
            L1,
            { value: n },
            void 0,
            !1,
            {
              fileName: "/home/user/xtf/src/pages/share/index.tsx",
              lineNumber: 40,
              columnNumber: 17,
            },
            void 0,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "/home/user/xtf/src/pages/share/index.tsx",
        lineNumber: 31,
        columnNumber: 13,
      },
      void 0,
    );
  }),
  To = H((t) => {
    const n = W(je() || ""),
      e = W(Me()),
      o = W(we()),
      i = W($e().id),
      l = W(wn()),
      a = W(Mn()),
      c = W(Pn()),
      d = W(X("allowPersistentChange")),
      u = W(""),
      f = W(!0);
    let p = vo();
    te() || Dn(() => t.Wake());
    const h = () => {
        const g = new URLSearchParams();
        (u.val.trim() && g.append("msg", encodeURIComponent(u.val.trim())),
          n.val && g.append("key", n.val),
          l.val !== "neutral" && g.append("scene", l.val),
          i.val && g.append("model", i.val),
          a.val !== 1 && g.append("minReplies", a.val.toString()),
          c.val !== !1 && g.append("realNames", c.val.toString()),
          f.val && g.append("temp", f.val.toString()),
          g.append("persistent", d.val.toString()));
        const y = `${window.location.origin}${window.location.pathname}`,
          x = g.toString();
        return x ? `${y}?${x}` : y;
      },
      v = async () => {
        const g = h();
        try {
          (await navigator.clipboard.writeText(g),
            Ee("Link copiado para a área de transferência!"));
        } catch (y) {
          (console.error("Failed to copy link: ", y),
            $("Falha ao copiar o link. Por favor, copie manualmente."));
        }
      };
    return () => {
      const g = h();
      return m(
        "div",
        {
          class: B.comp,
          children: [
            m(
              "h1",
              { children: "Share" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 119,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "p",
              { children: "Crie links para gerar posts customizados" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 120,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.perfil,
                children: [
                  m(
                    "h2",
                    { children: "Como vai ser seu perfil?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 124,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: B.name,
                      children: [
                        m(
                          "label",
                          { children: "Nome:" },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 126,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "input",
                          {
                            type: "text",
                            placeholder: " Nome do perfil",
                            value: e.val,
                            onchange: (y) => (e.val = y.target.value),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 127,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 125,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: B.nick,
                      children: [
                        m(
                          "label",
                          { children: "Nick:" },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 130,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "input",
                          {
                            type: "text",
                            placeholder: " Nick do perfil",
                            value: o.val,
                            onchange: (y) => (o.val = y.target.value),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 131,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 129,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 123,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.apikey,
                children: [
                  m(
                    "h2",
                    { children: "Como vai ser sua Chave?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 137,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children: [
                        "Caso ainda não tenha, Consiga sua Chave do Gemini API aqui: ",
                        m(
                          "a",
                          {
                            rel: "noopener",
                            href: "https://makersuite.google.com/app/apikey",
                            target: "_blank",
                            children:
                              "https://makersuite.google.com/app/apikey",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 139,
                            columnNumber: 73,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 138,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      children: [
                        m(
                          "label",
                          { children: "Chave:" },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 142,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "input",
                          {
                            type: "text",
                            placeholder: " Chave do Gemini API",
                            value: n.val,
                            onchange: (y) => (n.val = y.target.value),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 143,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 141,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 136,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.models,
                children: [
                  m(
                    "h2",
                    { children: "Qual modelo de AI você quer usar?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 149,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Pode melhorar as respostas, porém pode resultar em menor quota de tokens, e maior tempo de resposta. Alguns modelos podem não ser suportados!",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 150,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "select",
                    {
                      disabled: p === null,
                      title: "Selecione um modelo",
                      onchange: (y) => (i.val = y.target.value),
                      children: p
                        ? p.map((y, x) =>
                            m(
                              "option",
                              {
                                selected: i.val === y.id,
                                value: y.id,
                                children: y.title,
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  "/home/user/xtf/src/pages/share/index.tsx",
                                lineNumber: 152,
                                columnNumber: 48,
                              },
                              void 0,
                            ),
                          )
                        : m(
                            "option",
                            { children: $e().title },
                            void 0,
                            !1,
                            {
                              fileName:
                                "/home/user/xtf/src/pages/share/index.tsx",
                              lineNumber: 152,
                              columnNumber: 139,
                            },
                            void 0,
                          ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 151,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 148,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.scenes,
                children: [
                  m(
                    "h2",
                    { children: "Qual cenário você quer usar?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 158,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Os cenários definem como a AI vai tratar seus posts",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 159,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "select",
                    {
                      title: "Selecione um cenário",
                      onchange: (y) => (l.val = y.target.value),
                      children: [
                        m(
                          "option",
                          {
                            value: "hate",
                            selected: l.val === "hate",
                            children:
                              "Todos te odeiam, seu post será apenas criticado",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 161,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "option",
                          {
                            value: "support",
                            selected: l.val === "support",
                            children:
                              "Todos te amam, seu post será apenas apoiado",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 162,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "option",
                          {
                            value: "neutral",
                            selected: l.val === "neutral",
                            children:
                              "Nem todos te amam, nem todos te odeiam, seu post será neutro",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 163,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 160,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 157,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.minReplies,
                children: [
                  m(
                    "h2",
                    { children: "Quantas respostas?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 169,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Muda a quantidade de respostas geradas por geração",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 170,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    U1,
                    { value: a },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 171,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 168,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.scenes,
                children: [
                  m(
                    "h2",
                    { children: "Usar usuários reais?" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 176,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Pode acabar utilizando de personalidades conhecidas na internet nas respostas. Isso é apenas para humor e não deve ser levado em consideração como uma opnião da personalidade.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 177,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "select",
                    {
                      title: "Selecione um cenário",
                      onchange: (y) => (c.val = y.target.value === "true"),
                      children: [
                        m(
                          "option",
                          {
                            value: "true",
                            selected: c.val,
                            children: "Sim, utilizar usuários reais",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 179,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                        m(
                          "option",
                          {
                            value: "false",
                            selected: !c.val,
                            children: "Não, não utilizar usuários reais",
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 180,
                            columnNumber: 13,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 178,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 175,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.message,
                children: [
                  m(
                    "h2",
                    { children: "Mensagem do Post" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 185,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Digite a mensagem que deseja que seja gerada no post.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 186,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                  m(
                    "textarea",
                    {
                      placeholder: "Sua mensagem aqui...",
                      rows: 5,
                      value: u.val,
                      oninput: (y) => (u.val = y.target.value),
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 187,
                      columnNumber: 11,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 184,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "section",
              {
                class: B.linkGeneration,
                children: [
                  m(
                    "h2",
                    { children: "Gerar Link Personalizado" },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 196,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "p",
                    {
                      children:
                        "Use este link para compartilhar suas configurações de geração de postagem.",
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 197,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: B["checkbox-container"],
                      children: [
                        m(
                          "input",
                          {
                            id: "linkPersistentChange",
                            type: "checkbox",
                            checked: d.val,
                            onchange: (y) => (d.val = y.target.checked),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 200,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "label",
                          {
                            for: "linkPersistentChange",
                            children: [
                              m(
                                "span",
                                {},
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/pages/share/index.tsx",
                                  lineNumber: 207,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                              "Permitir alteração persistente ao abrir o link",
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 206,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 199,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: B["checkbox-container"],
                      children: [
                        m(
                          "input",
                          {
                            id: "tempPost",
                            type: "checkbox",
                            checked: f.val,
                            onchange: (y) => (f.val = y.target.checked),
                          },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 212,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "label",
                          {
                            for: "tempPost",
                            children: [
                              m(
                                "span",
                                {},
                                void 0,
                                !1,
                                {
                                  fileName:
                                    "/home/user/xtf/src/pages/share/index.tsx",
                                  lineNumber: 219,
                                  columnNumber: 21,
                                },
                                void 0,
                              ),
                              "Post temporário",
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 218,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 211,
                      columnNumber: 17,
                    },
                    void 0,
                  ),
                  m(
                    "div",
                    {
                      class: B.generatedLink,
                      children: [
                        m(
                          "label",
                          { children: "Link Gerado:" },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 226,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "input",
                          { type: "text", readOnly: !0, value: g },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 227,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                        m(
                          "button",
                          { onclick: v, children: "Copiar Link" },
                          void 0,
                          !1,
                          {
                            fileName:
                              "/home/user/xtf/src/pages/share/index.tsx",
                            lineNumber: 228,
                            columnNumber: 17,
                          },
                          void 0,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/home/user/xtf/src/pages/share/index.tsx",
                      lineNumber: 225,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/pages/share/index.tsx",
                lineNumber: 195,
                columnNumber: 9,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/pages/share/index.tsx",
          lineNumber: 118,
          columnNumber: 7,
        },
        void 0,
      );
    };
  }),
  V1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: To },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Nn = W(null);
_o(
  document.querySelector("#app"),
  m(
    "div",
    {
      children: m(
        "main",
        {
          children: [
            m(
              Lo,
              { router: Nn },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/app.tsx",
                lineNumber: 14,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              Po,
              {
                box: Nn,
                class: "router",
                global: !0,
                children: [
                  m(
                    Te,
                    { path: "/rixa/#post/:id", elem: yo },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/app.tsx",
                      lineNumber: 16,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    Te,
                    { path: "/rixa/#options", elem: No },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/app.tsx",
                      lineNumber: 17,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    Te,
                    { path: "/rixa/#share", elem: To },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/app.tsx",
                      lineNumber: 18,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    Te,
                    { path: "/rixa/#about", elem: Co },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/app.tsx",
                      lineNumber: 19,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                  m(
                    Te,
                    { path: "/rixa/", elem: xo },
                    void 0,
                    !1,
                    {
                      fileName: "/home/user/xtf/src/app.tsx",
                      lineNumber: 20,
                      columnNumber: 13,
                    },
                    void 0,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: "/home/user/xtf/src/app.tsx",
                lineNumber: 15,
                columnNumber: 9,
              },
              void 0,
            ),
            m(
              "div",
              { class: "void" },
              void 0,
              !1,
              {
                fileName: "/home/user/xtf/src/app.tsx",
                lineNumber: 22,
                columnNumber: 9,
              },
              void 0,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: "/home/user/xtf/src/app.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        void 0,
      ),
    },
    void 0,
    !1,
    {
      fileName: "/home/user/xtf/src/app.tsx",
      lineNumber: 12,
      columnNumber: 41,
    },
    void 0,
  ),
);
pe();
_1(Nn);
export { H as C, m as j };
