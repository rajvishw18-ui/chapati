import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
  t as QueryClientProvider,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  a as dishes,
  d as useApp,
  n as DietMark,
  o as formatPrice,
  s as getDish,
  t as AppProvider,
  u as priceOf,
} from "./diet-mark-D2c_m40-.mjs";
import {
  c as lazyRouteComponent,
  d as Link,
  f as useRouter,
  i as HeadContent,
  l as createFileRoute,
  o as createRouter,
  r as Scripts,
  s as Outlet,
  u as createRootRouteWithContext,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./dish._dishId-dJF-8OX9.mjs";
import {
  a as Plus,
  i as ReceiptText,
  s as Minus,
  t as X,
} from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BKHz3va1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BZLnxJ7Q.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  window.__lovableReportRuntimeError?.({
    message,
    stack: error instanceof Error ? error.stack : void 0,
    filename: window.location.pathname,
  });
}
function BillBar() {
  const { t, lang, cart, count, subtotal, tax, total, add, remove, clear } =
    useApp();
  const [open, setOpen] = (0, import_react.useState)(false);
  const suggestions = Array.from(
    new Set(
      cart
        .flatMap((line) => getDish(line.id)?.combos ?? [])
        .filter((id) => !cart.some((l) => l.id === id)),
    ),
  )
    .map((id) => dishes.find((d) => d.id === id))
    .filter(Boolean)
    .slice(0, 3);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        open &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "fixed inset-0 z-40 bg-background/70 backdrop-blur-sm",
            onClick: () => setOpen(false),
            "aria-hidden": "true",
          }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 sm:p-5",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "pointer-events-auto w-full max-w-3xl",
            children: [
              open &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "clay mb-3 max-h-[65vh] overflow-y-auto rounded-4xl bg-card p-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mb-4 flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                          className: "text-xl font-extrabold",
                          children: t("yourOrder"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          onClick: () => setOpen(false),
                          "aria-label": t("close"),
                          className:
                            "clay-sm clay-press grid size-9 place-items-center rounded-full bg-muted",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            X,
                            {
                              width: 16,
                              height: 16,
                            },
                          ),
                        }),
                      ],
                    }),
                    cart.length === 0
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "clay-inset rounded-3xl bg-muted px-5 py-8 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "font-bold",
                              children: t("emptyCart"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-1 text-sm text-muted-foreground",
                              children: t("emptyCartHint"),
                            }),
                          ],
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          import_jsx_runtime.Fragment,
                          {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "ul",
                                {
                                  className: "space-y-3",
                                  children: cart.map((line) => {
                                    const dish = getDish(line.id);
                                    if (!dish) return null;
                                    const unit = priceOf(dish, line.variant);
                                    return /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "clay-sm flex items-center gap-3 rounded-3xl bg-background p-2.5",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("img", {
                                            src: dish.image,
                                            alt: dish.name[lang],
                                            loading: "lazy",
                                            width: 800,
                                            height: 600,
                                            className:
                                              "size-14 shrink-0 rounded-2xl object-cover",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    DietMark,
                                                    { diet: dish.diet },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "truncate font-bold",
                                                      children: dish.name[lang],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("span", {
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: [
                                                  dish.halfPrice
                                                    ? `${t(line.variant)} · `
                                                    : "",
                                                  formatPrice(unit),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            className:
                                              "clay-inset flex items-center gap-1 rounded-full bg-muted p-1",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  onClick: () =>
                                                    remove(
                                                      dish.id,
                                                      line.variant,
                                                    ),
                                                  "aria-label": "decrease",
                                                  className:
                                                    "clay-press grid size-7 place-items-center rounded-full bg-card",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Minus,
                                                    {
                                                      width: 14,
                                                      height: 14,
                                                    },
                                                  ),
                                                },
                                              ),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                className:
                                                  "min-w-5 text-center text-sm font-bold",
                                                children: line.qty,
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  onClick: () =>
                                                    add(dish.id, line.variant),
                                                  "aria-label": "increase",
                                                  className:
                                                    "clay-press grid size-7 place-items-center rounded-full bg-primary text-primary-foreground",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Plus,
                                                    {
                                                      width: 14,
                                                      height: 14,
                                                    },
                                                  ),
                                                },
                                              ),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            className:
                                              "w-16 shrink-0 text-right font-extrabold",
                                            children: formatPrice(
                                              unit * line.qty,
                                            ),
                                          }),
                                        ],
                                      },
                                      `${line.id}|${line.variant}`,
                                    );
                                  }),
                                },
                              ),
                              suggestions.length > 0 &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "mt-5",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("h3", {
                                        className:
                                          "mb-2 text-sm font-bold text-muted-foreground",
                                        children: t("pairsWith"),
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: suggestions.map((dish) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () => add(dish.id),
                                              className:
                                                "clay-sm clay-press flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm font-bold text-secondary-foreground",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(Plus, {
                                                  width: 14,
                                                  height: 14,
                                                }),
                                                dish.name[lang],
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className: "opacity-70",
                                                    children: formatPrice(
                                                      dish.price,
                                                    ),
                                                  },
                                                ),
                                              ],
                                            },
                                            dish.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  },
                                ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "dl",
                                {
                                  className:
                                    "clay-inset mt-5 space-y-2 rounded-3xl bg-muted p-4 text-sm",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dt", {
                                          children: t("subtotal"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dd", {
                                          className: "font-bold",
                                          children: formatPrice(subtotal),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dt", {
                                          children: t("taxes"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dd", {
                                          className: "font-bold",
                                          children: formatPrice(tax),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex justify-between border-t pt-2 text-base",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dt", {
                                          className: "font-extrabold",
                                          children: t("total"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("dd", {
                                          className: "font-extrabold",
                                          children: formatPrice(total),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "p",
                                      {
                                        className:
                                          "pt-1 text-xs text-muted-foreground",
                                        children: t("serviceNote"),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "mt-3 text-center text-sm text-muted-foreground",
                                children: t("showWaiter"),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  type: "button",
                                  onClick: clear,
                                  className:
                                    "clay-press mx-auto mt-3 block rounded-full px-4 py-2 text-sm font-bold text-muted-foreground underline-offset-4 hover:underline",
                                  children: t("clearAll"),
                                },
                              ),
                            ],
                          },
                        ),
                  ],
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                type: "button",
                onClick: () => setOpen((v) => !v),
                className:
                  "clay clay-press flex w-full items-center justify-between gap-4 rounded-full bg-primary px-5 py-4 text-primary-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, {
                        width: 20,
                        height: 20,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "text-left",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "block text-xs font-semibold opacity-80",
                            children: t("billEstimate"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            className: "block text-sm font-bold",
                            children: [
                              count,
                              " ",
                              count === 1 ? t("item") : t("items"),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-xl font-extrabold",
                    children: formatPrice(total),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    },
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "clay max-w-md rounded-4xl bg-card p-8 text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "clay-sm clay-press inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "clay max-w-md rounded-4xl bg-card p-8 text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "clay-sm clay-press inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "clay-sm clay-press inline-flex items-center justify-center rounded-full bg-muted px-5 py-2.5 text-sm font-bold text-foreground",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Chapati.com — Hotel & Restaurant Digital Menu" },
      {
        name: "description",
        content:
          "Chapati.com Hotel & Restaurant pure veg menu with photos, Hindi/English, ratings and a live bill estimate.",
      },
      {
        name: "author",
        content: "Chapati.com Hotel & Restaurant",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, {}),
        ],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppProvider, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "min-h-screen pb-32",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillBar, {}),
      ],
    }),
  });
}
var $$splitComponentImporter = () => import("./routes-CDvlTwvD.mjs");
var rootRouteChildren = {
  IndexRoute: createFileRoute("/")({
    head: () => ({
      meta: [
        { title: "Chapati.com — Hotel & Restaurant Digital Menu" },
        {
          name: "description",
          content:
            "Pure veg menu at Chapati.com Hotel & Restaurant — Indian, Chinese, South Indian, thali, rice and sweets with photos, Hindi/English, ratings and a live bill estimate.",
        },
        {
          property: "og:title",
          content: "Chapati.com — Hotel & Restaurant Digital Menu",
        },
        {
          property: "og:description",
          content:
            "Browse the full Chapati.com menu with half/full prices, photos, reviews and a running bill estimate.",
        },
      ],
    }),
    component: lazyRouteComponent($$splitComponentImporter, "component"),
  }).update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$1,
  }),
  DishDishIdRoute: Route.update({
    id: "/dish/$dishId",
    path: "/dish/$dishId",
    getParentRoute: () => Route$1,
  }),
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
