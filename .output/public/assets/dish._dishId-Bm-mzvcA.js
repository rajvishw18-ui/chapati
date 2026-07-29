import { n as e, r as t, t as n } from "./variant-control-KCAME-SW.js";
import {
  _ as r,
  a as i,
  c as a,
  d as o,
  f as s,
  g as c,
  m as l,
  n as u,
  p as d,
  s as f,
  t as p,
} from "./index-DfSw7QMh.js";
var m = f(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  h = r();
function g() {
  let { dishId: r } = p.useParams(),
    { lang: f, t: g, add: _ } = a(),
    v = d(r);
  if (!v) return null;
  let y = v.ratingBreakdown.reduce((e, t) => e + t, 0),
    b = v.combos.map((e) => o.find((t) => t.id === e)).filter(Boolean),
    x = [null, g(`mild`), g(`medium`), g(`hot`)][v.spice];
  return (0, h.jsxs)(`main`, {
    className: `mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6`,
    children: [
      (0, h.jsxs)(c, {
        to: `/`,
        className: `clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold`,
        children: [(0, h.jsx)(m, { width: 16, height: 16 }), g(`back`)],
      }),
      (0, h.jsxs)(`article`, {
        className: `clay mt-5 overflow-hidden rounded-4xl bg-card`,
        children: [
          (0, h.jsx)(`img`, {
            src: v.image,
            alt: v.name[f],
            width: 800,
            height: 600,
            className: `h-64 w-full object-cover sm:h-80`,
          }),
          (0, h.jsxs)(`div`, {
            className: `p-6`,
            children: [
              (0, h.jsxs)(`div`, {
                className: `flex flex-wrap items-start justify-between gap-4`,
                children: [
                  (0, h.jsxs)(`div`, {
                    children: [
                      (0, h.jsxs)(`div`, {
                        className: `mb-2 flex flex-wrap items-center gap-3`,
                        children: [
                          (0, h.jsx)(u, { diet: v.diet, withLabel: !0 }),
                          v.spice > 0 &&
                            (0, h.jsxs)(`span`, {
                              className: `inline-flex items-center gap-1 text-xs font-bold text-destructive`,
                              children: [
                                Array.from({ length: v.spice }).map((e, n) =>
                                  (0, h.jsx)(
                                    t,
                                    {
                                      width: 13,
                                      height: 13,
                                      className: `fill-destructive/25`,
                                    },
                                    n,
                                  ),
                                ),
                                x,
                              ],
                            }),
                          v.chefPick &&
                            (0, h.jsx)(`span`, {
                              className: `clay-sm rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground`,
                              children: g(`chefPick`),
                            }),
                        ],
                      }),
                      (0, h.jsx)(`h1`, {
                        className: `text-3xl font-extrabold sm:text-4xl`,
                        children: v.name[f],
                      }),
                      (0, h.jsx)(`p`, {
                        className: `mt-2 max-w-xl text-muted-foreground`,
                        children: v.description[f],
                      }),
                    ],
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `text-right`,
                    children: [
                      v.halfPrice &&
                        (0, h.jsxs)(`p`, {
                          className: `text-sm font-bold text-muted-foreground`,
                          children: [g(`half`), ` `, s(v.halfPrice)],
                        }),
                      (0, h.jsx)(`p`, {
                        className: `text-3xl font-extrabold text-primary`,
                        children: s(v.price),
                      }),
                      (0, h.jsx)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        children: v.halfPrice ? g(`full`) : g(`perPlate`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, h.jsxs)(`div`, {
                className: `mt-6 flex flex-wrap items-center gap-3`,
                children: [
                  v.halfPrice &&
                    (0, h.jsx)(n, { dish: v, variant: `half`, size: `lg` }),
                  (0, h.jsx)(n, { dish: v, variant: `full`, size: `lg` }),
                ],
              }),
            ],
          }),
        ],
      }),
      b.length > 0 &&
        (0, h.jsxs)(`section`, {
          className: `clay mt-6 rounded-4xl bg-secondary p-6 text-secondary-foreground`,
          children: [
            (0, h.jsxs)(`h2`, {
              className: `text-xl font-extrabold`,
              children: [g(`pairsWith`), ` `, b[0].name[f]],
            }),
            (0, h.jsx)(`div`, {
              className: `mt-4 grid gap-3 sm:grid-cols-3`,
              children: b.map((e) =>
                (0, h.jsxs)(
                  `div`,
                  {
                    className: `clay-sm flex items-center gap-3 rounded-3xl bg-card p-3 text-card-foreground`,
                    children: [
                      (0, h.jsx)(`img`, {
                        src: e.image,
                        alt: e.name[f],
                        loading: `lazy`,
                        width: 800,
                        height: 600,
                        className: `size-14 shrink-0 rounded-2xl object-cover`,
                      }),
                      (0, h.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, h.jsx)(c, {
                            to: `/dish/$dishId`,
                            params: { dishId: e.id },
                            className: `block truncate text-sm font-bold`,
                            children: e.name[f],
                          }),
                          (0, h.jsx)(`span`, {
                            className: `text-xs text-muted-foreground`,
                            children: s(e.price),
                          }),
                        ],
                      }),
                      (0, h.jsx)(`button`, {
                        type: `button`,
                        onClick: () => _(e.id),
                        "aria-label": `${g(`add`)} ${e.name[f]}`,
                        className: `clay-press grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground`,
                        children: (0, h.jsx)(i, { width: 15, height: 15 }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      (0, h.jsxs)(`section`, {
        className: `clay mt-6 rounded-4xl bg-card p-6`,
        children: [
          (0, h.jsx)(`h2`, {
            className: `text-xl font-extrabold`,
            children: g(`ratingsAndReviews`),
          }),
          (0, h.jsxs)(`div`, {
            className: `mt-4 flex flex-wrap items-center gap-8`,
            children: [
              (0, h.jsxs)(`div`, {
                className: `text-center`,
                children: [
                  (0, h.jsx)(`p`, {
                    className: `text-5xl font-extrabold`,
                    children: v.rating.toFixed(1),
                  }),
                  (0, h.jsx)(e, {
                    rating: v.rating,
                    size: 16,
                    className: `mt-1`,
                  }),
                  (0, h.jsxs)(`p`, {
                    className: `mt-1 text-xs text-muted-foreground`,
                    children: [g(`basedOn`), ` `, y, ` `, g(`ratings`)],
                  }),
                ],
              }),
              (0, h.jsx)(`div`, {
                className: `min-w-52 flex-1 space-y-1.5`,
                children: v.ratingBreakdown.map((e, t) => {
                  let n = 5 - t,
                    r = y ? (e / y) * 100 : 0;
                  return (0, h.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-2 text-xs font-semibold`,
                      children: [
                        (0, h.jsx)(`span`, { className: `w-3`, children: n }),
                        (0, h.jsx)(`div`, {
                          className: `clay-inset h-2.5 flex-1 overflow-hidden rounded-full bg-muted`,
                          children: (0, h.jsx)(`div`, {
                            className: `h-full rounded-full bg-primary`,
                            style: { width: `${r}%` },
                          }),
                        }),
                        (0, h.jsx)(`span`, {
                          className: `w-8 text-right text-muted-foreground`,
                          children: e,
                        }),
                      ],
                    },
                    n,
                  );
                }),
              }),
            ],
          }),
          (0, h.jsx)(`ul`, {
            className: `mt-6 space-y-3`,
            children: v.reviews.map((t) =>
              (0, h.jsxs)(
                `li`,
                {
                  className: `clay-sm rounded-3xl bg-background p-4`,
                  children: [
                    (0, h.jsxs)(`div`, {
                      className: `flex flex-wrap items-center gap-3`,
                      children: [
                        (0, h.jsx)(`span`, {
                          className: `clay-sm grid size-9 place-items-center rounded-full bg-butter font-extrabold text-butter-foreground`,
                          children: t.name.charAt(0),
                        }),
                        (0, h.jsx)(`span`, {
                          className: `font-bold`,
                          children: t.name,
                        }),
                        (0, h.jsx)(e, { rating: t.rating }),
                        (0, h.jsx)(`span`, {
                          className: `ml-auto text-xs text-muted-foreground`,
                          children: t.date,
                        }),
                      ],
                    }),
                    (0, h.jsx)(`p`, {
                      className: `mt-2 text-sm text-muted-foreground`,
                      children: t.text[f],
                    }),
                  ],
                },
                t.name,
              ),
            ),
          }),
        ],
      }),
      (0, h.jsxs)(`p`, {
        className: `mt-6 text-center text-xs text-muted-foreground`,
        children: [l.name, ` · `, g(`forBooking`), ` `, l.phones[0]],
      }),
    ],
  });
}
export { g as component };
