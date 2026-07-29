import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  a as dishes,
  c as hotel,
  d as useApp,
  n as DietMark,
  o as formatPrice,
  s as getDish,
} from "./diet-mark-D2c_m40-.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./dish._dishId-dJF-8OX9.mjs";
import {
  a as Plus,
  c as Flame,
  l as ArrowLeft,
} from "../_libs/lucide-react.mjs";
import {
  n as VariantControl,
  t as Stars,
} from "./variant-control-C1JZM31n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dish._dishId-CTVqHBh5.js
var import_jsx_runtime = require_jsx_runtime();
function DishPage() {
  const { dishId } = Route.useParams();
  const { lang, t, add } = useApp();
  const dish = getDish(dishId);
  if (!dish) return null;
  const totalRatings = dish.ratingBreakdown.reduce((a, b) => a + b, 0);
  const combos = dish.combos
    .map((id) => dishes.find((d) => d.id === id))
    .filter(Boolean);
  const spiceLabel = [null, t("mild"), t("medium"), t("hot")][dish.spice];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    className: "mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
        to: "/",
        className:
          "clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
            width: 16,
            height: 16,
          }),
          t("back"),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
        className: "clay mt-5 overflow-hidden rounded-4xl bg-card",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: dish.image,
            alt: dish.name[lang],
            width: 800,
            height: 600,
            className: "h-64 w-full object-cover sm:h-80",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "p-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "mb-2 flex flex-wrap items-center gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            DietMark,
                            {
                              diet: dish.diet,
                              withLabel: true,
                            },
                          ),
                          dish.spice > 0 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className:
                                  "inline-flex items-center gap-1 text-xs font-bold text-destructive",
                                children: [
                                  Array.from({ length: dish.spice }).map(
                                    (_, i) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(
                                        Flame,
                                        {
                                          width: 13,
                                          height: 13,
                                          className: "fill-destructive/25",
                                        },
                                        i,
                                      ),
                                  ),
                                  spiceLabel,
                                ],
                              },
                            ),
                          dish.chefPick &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "clay-sm rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground",
                                children: t("chefPick"),
                              },
                            ),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                        className: "text-3xl font-extrabold sm:text-4xl",
                        children: dish.name[lang],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-2 max-w-xl text-muted-foreground",
                        children: dish.description[lang],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "text-right",
                    children: [
                      dish.halfPrice &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "text-sm font-bold text-muted-foreground",
                          children: [
                            t("half"),
                            " ",
                            formatPrice(dish.halfPrice),
                          ],
                        }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-3xl font-extrabold text-primary",
                        children: formatPrice(dish.price),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: dish.halfPrice ? t("full") : t("perPlate"),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-6 flex flex-wrap items-center gap-3",
                children: [
                  dish.halfPrice &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      VariantControl,
                      {
                        dish,
                        variant: "half",
                        size: "lg",
                      },
                    ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariantControl, {
                    dish,
                    variant: "full",
                    size: "lg",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      combos.length > 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "clay mt-6 rounded-4xl bg-secondary p-6 text-secondary-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className: "text-xl font-extrabold",
              children: [t("pairsWith"), " ", combos[0].name[lang]],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-4 grid gap-3 sm:grid-cols-3",
              children: combos.map((combo) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className:
                      "clay-sm flex items-center gap-3 rounded-3xl bg-card p-3 text-card-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: combo.image,
                        alt: combo.name[lang],
                        loading: "lazy",
                        width: 800,
                        height: 600,
                        className: "size-14 shrink-0 rounded-2xl object-cover",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                            to: "/dish/$dishId",
                            params: { dishId: combo.id },
                            className: "block truncate text-sm font-bold",
                            children: combo.name[lang],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "text-xs text-muted-foreground",
                            children: formatPrice(combo.price),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: () => add(combo.id),
                        "aria-label": `${t("add")} ${combo.name[lang]}`,
                        className:
                          "clay-press grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Plus,
                          {
                            width: 15,
                            height: 15,
                          },
                        ),
                      }),
                    ],
                  },
                  combo.id,
                ),
              ),
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "clay mt-6 rounded-4xl bg-card p-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "text-xl font-extrabold",
            children: t("ratingsAndReviews"),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 flex flex-wrap items-center gap-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-5xl font-extrabold",
                    children: dish.rating.toFixed(1),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
                    rating: dish.rating,
                    size: 16,
                    className: "mt-1",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "mt-1 text-xs text-muted-foreground",
                    children: [
                      t("basedOn"),
                      " ",
                      totalRatings,
                      " ",
                      t("ratings"),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "min-w-52 flex-1 space-y-1.5",
                children: dish.ratingBreakdown.map((count, i) => {
                  const star = 5 - i;
                  const pct = totalRatings ? (count / totalRatings) * 100 : 0;
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "flex items-center gap-2 text-xs font-semibold",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "w-3",
                          children: star,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "clay-inset h-2.5 flex-1 overflow-hidden rounded-full bg-muted",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "h-full rounded-full bg-primary",
                              style: { width: `${pct}%` },
                            },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "w-8 text-right text-muted-foreground",
                          children: count,
                        }),
                      ],
                    },
                    star,
                  );
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-6 space-y-3",
            children: dish.reviews.map((review) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "li",
                {
                  className: "clay-sm rounded-3xl bg-background p-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "clay-sm grid size-9 place-items-center rounded-full bg-butter font-extrabold text-butter-foreground",
                          children: review.name.charAt(0),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-bold",
                          children: review.name,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
                          rating: review.rating,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "ml-auto text-xs text-muted-foreground",
                          children: review.date,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-2 text-sm text-muted-foreground",
                      children: review.text[lang],
                    }),
                  ],
                },
                review.name,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "mt-6 text-center text-xs text-muted-foreground",
        children: [hotel.name, " · ", t("forBooking"), " ", hotel.phones[0]],
      }),
    ],
  });
}
//#endregion
export { DishPage as component };
