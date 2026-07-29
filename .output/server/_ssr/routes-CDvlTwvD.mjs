import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  a as dishes,
  c as hotel,
  d as useApp,
  i as cn,
  l as languages,
  n as DietMark,
  o as formatPrice,
  r as categories,
} from "./diet-mark-D2c_m40-.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import {
  c as Flame,
  o as Phone,
  r as Search,
  t as X,
} from "../_libs/lucide-react.mjs";
import {
  n as VariantControl,
  t as Stars,
} from "./variant-control-C1JZM31n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDvlTwvD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DishCard({ dish }) {
  const { lang, t } = useApp();
  const reviewCount = dish.ratingBreakdown.reduce((a, b) => a + b, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
    className:
      "clay group relative flex flex-col overflow-hidden rounded-3xl bg-card",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
        to: "/dish/$dishId",
        params: { dishId: dish.id },
        className: "relative block overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: dish.image,
            alt: dish.name[lang],
            loading: "lazy",
            width: 800,
            height: 600,
            className:
              "h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "clay-sm absolute top-3 left-3 rounded-full bg-card/95 px-2.5 py-1 backdrop-blur",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DietMark, {
              diet: dish.diet,
            }),
          }),
          dish.chefPick &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className:
                "clay-sm absolute top-3 right-3 rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground",
              children: t("chefPick"),
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-1 flex-col gap-2 p-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-start justify-between gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/dish/$dishId",
                params: { dishId: dish.id },
                className: "min-w-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "truncate text-base leading-tight font-bold",
                  children: dish.name[lang],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "shrink-0 text-sm font-extrabold text-primary",
                children: dish.halfPrice
                  ? `${formatPrice(dish.halfPrice)} / ${formatPrice(dish.price)}`
                  : formatPrice(dish.price),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "line-clamp-2 text-sm text-muted-foreground",
            children: dish.description[lang],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
                rating: dish.rating,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-xs font-semibold",
                children: dish.rating.toFixed(1),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "text-xs text-muted-foreground",
                children: ["(", reviewCount, ")"],
              }),
              dish.spice > 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "ml-1 inline-flex items-center text-destructive",
                  "aria-hidden": "true",
                  children: Array.from({ length: dish.spice }).map((_, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Flame,
                      {
                        width: 12,
                        height: 12,
                        className: "fill-destructive/25",
                      },
                      i,
                    ),
                  ),
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-auto flex flex-wrap items-center gap-2 pt-2",
            children: [
              dish.halfPrice &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariantControl, {
                  dish,
                  variant: "half",
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariantControl, {
                dish,
                variant: "full",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function LanguageSwitcher() {
  const { lang, setLang, t } = useApp();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "clay-inset flex items-center gap-1 rounded-full bg-muted p-1",
    role: "group",
    "aria-label": t("language"),
    children: languages.map((l) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setLang(l.code),
          "aria-pressed": lang === l.code,
          className: cn(
            "rounded-full px-3 py-1.5 text-sm font-bold transition-colors",
            lang === l.code
              ? "clay-sm bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          ),
          children: l.label,
        },
        l.code,
      ),
    ),
  });
}
var diets = ["veg", "jain"];
function MenuPage() {
  const { lang, t } = useApp();
  const [query, setQuery] = (0, import_react.useState)("");
  const [diet, setDiet] = (0, import_react.useState)("all");
  const [category, setCategory] = (0, import_react.useState)("all");
  const filtered = (0, import_react.useMemo)(() => {
    const q = query.trim().toLowerCase();
    const matches = dishes.filter((dish) => {
      if (diet !== "all" && dish.diet !== diet) return false;
      if (category !== "all" && dish.category !== category) return false;
      if (!q) return true;
      return (
        dish.name.en.toLowerCase().includes(q) ||
        dish.name.hi.toLowerCase().includes(q) ||
        dish.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
    if (!q) return matches;
    const score = (dish) => {
      const names = [dish.name.en.toLowerCase(), dish.name.hi.toLowerCase()];
      if (names.some((n) => n === q)) return 0;
      if (names.some((n) => n.startsWith(q))) return 1;
      if (names.some((n) => n.split(/\s+/).some((w) => w.startsWith(q))))
        return 2;
      if (names.some((n) => n.includes(q))) return 3;
      return 4;
    };
    return [...matches].sort((a, b) => score(a) - score(b));
  }, [query, diet, category]);
  const visibleCategories = categories.filter((c) =>
    filtered.some((d) => d.category === c.id),
  );
  const hasFilters = query !== "" || diet !== "all" || category !== "all";
  const resetFilters = () => {
    setQuery("");
    setDiet("all");
    setCategory("all");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    className: "mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
        className: "clay gold-frame rounded-4xl bg-card px-6 py-8 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "font-display text-sm font-semibold tracking-[0.3em] text-primary uppercase",
            children: t("hotelKind"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className:
              "font-script mt-2 text-5xl leading-none text-primary sm:text-7xl",
            children: hotel.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-3 text-sm text-muted-foreground",
            children: t("tagline"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-5 flex flex-wrap items-center justify-center gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "clay-sm rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground",
                children: t("pureVeg"),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "mt-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "text-2xl font-extrabold sm:text-3xl",
            children: t("heroTitle"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-1 max-w-xl text-muted-foreground",
            children: t("heroSubtitle"),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "sticky top-3 z-30 mt-5 space-y-3 rounded-4xl bg-background/80 py-3 backdrop-blur-md",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "clay-inset flex items-center gap-3 rounded-full bg-card px-5 py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                width: 18,
                height: 18,
                className: "shrink-0 text-muted-foreground",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: t("searchPlaceholder"),
                "aria-label": t("searchPlaceholder"),
                className:
                  "w-full bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground",
              }),
              query &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setQuery(""),
                  "aria-label": t("close"),
                  className:
                    "clay-press grid size-6 shrink-0 place-items-center rounded-full bg-muted",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    width: 12,
                    height: 12,
                  }),
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-2 overflow-x-auto pb-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, {
                active: diet === "all",
                onClick: () => setDiet("all"),
                children: t("all"),
              }),
              diets.map((d) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  FilterPill,
                  {
                    active: diet === d,
                    onClick: () => setDiet(d),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      DietMark,
                      {
                        diet: d,
                        withLabel: true,
                      },
                    ),
                  },
                  d,
                ),
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "mx-1 hidden h-6 w-px shrink-0 bg-border sm:block",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, {
                active: category === "all",
                onClick: () => setCategory("all"),
                children: t("all"),
              }),
              categories.map((c) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  FilterPill,
                  {
                    active: category === c.id,
                    onClick: () => setCategory(c.id),
                    children: c.label[lang],
                  },
                  c.id,
                ),
              ),
            ],
          }),
        ],
      }),
      filtered.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "clay mt-8 rounded-4xl bg-card px-6 py-14 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-lg font-bold",
                children: t("noResults"),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: t("noResultsHint"),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                type: "button",
                onClick: resetFilters,
                className:
                  "clay-sm clay-press mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground",
                children: t("clearFilters"),
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-6 space-y-10",
            children: visibleCategories.map((cat) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "section",
                {
                  id: cat.id,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className:
                        "clay-sm mb-4 inline-block rounded-2xl bg-secondary px-5 py-2 text-xl font-extrabold text-secondary-foreground sm:text-2xl",
                      children: cat.label[lang],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                      children: filtered
                        .filter((d) => d.category === cat.id)
                        .map((dish) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            DishCard,
                            { dish },
                            dish.id,
                          ),
                        ),
                    }),
                  ],
                },
                cat.id,
              ),
            ),
          }),
      hasFilters &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-8 text-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: resetFilters,
            className:
              "clay-sm clay-press rounded-full bg-card px-5 py-2.5 text-sm font-bold",
            children: t("clearFilters"),
          }),
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
        className:
          "clay gold-frame mt-12 rounded-4xl bg-card px-6 py-8 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "font-script text-4xl text-primary sm:text-5xl",
            children: hotel.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "mt-1 text-sm tracking-[0.2em] text-muted-foreground uppercase",
            children: t("hotelKind"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            className: "mt-6 text-lg font-extrabold text-primary",
            children: t("facilities"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-2 flex flex-wrap justify-center gap-2",
            children: hotel.facilities[lang].map((f) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "li",
                {
                  className:
                    "clay-sm rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground",
                  children: f,
                },
                f,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            className: "mt-6 text-sm font-bold text-muted-foreground",
            children: t("forBooking"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-2 flex flex-wrap justify-center gap-2",
            children: hotel.phones.map((p) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "a",
                {
                  href: `tel:${p.replace(/\s/g, "")}`,
                  className:
                    "clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                      width: 14,
                      height: 14,
                    }),
                    p,
                  ],
                },
                p,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function FilterPill({ active, onClick, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    type: "button",
    onClick,
    "aria-pressed": active,
    className: cn(
      "clay-press inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors",
      active ? "clay-sm bg-primary text-primary-foreground" : "clay-sm bg-card",
    ),
    children,
  });
}
//#endregion
export { MenuPage as component };
