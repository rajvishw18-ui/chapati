import { n as e, r as t, t as n } from "./variant-control-KCAME-SW.js";
import {
  _ as r,
  c as i,
  d as a,
  f as o,
  g as s,
  i as c,
  l,
  m as u,
  n as d,
  r as f,
  s as p,
  u as m,
  v as h,
  y as g,
} from "./index-DfSw7QMh.js";
var _ = p(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  v = p(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  y = g(h()),
  b = r();
function x({ dish: r }) {
  let { lang: a, t: c } = i(),
    l = r.ratingBreakdown.reduce((e, t) => e + t, 0);
  return (0, b.jsxs)(`article`, {
    className: `clay group relative flex flex-col overflow-hidden rounded-3xl bg-card`,
    children: [
      (0, b.jsxs)(s, {
        to: `/dish/$dishId`,
        params: { dishId: r.id },
        className: `relative block overflow-hidden`,
        children: [
          (0, b.jsx)(`img`, {
            src: r.image,
            alt: r.name[a],
            loading: `lazy`,
            width: 800,
            height: 600,
            className: `h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48`,
          }),
          (0, b.jsx)(`span`, {
            className: `clay-sm absolute top-3 left-3 rounded-full bg-card/95 px-2.5 py-1 backdrop-blur`,
            children: (0, b.jsx)(d, { diet: r.diet }),
          }),
          r.chefPick &&
            (0, b.jsx)(`span`, {
              className: `clay-sm absolute top-3 right-3 rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground`,
              children: c(`chefPick`),
            }),
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: `flex flex-1 flex-col gap-2 p-4`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `flex items-start justify-between gap-3`,
            children: [
              (0, b.jsx)(s, {
                to: `/dish/$dishId`,
                params: { dishId: r.id },
                className: `min-w-0`,
                children: (0, b.jsx)(`h3`, {
                  className: `truncate text-base leading-tight font-bold`,
                  children: r.name[a],
                }),
              }),
              (0, b.jsx)(`span`, {
                className: `shrink-0 text-sm font-extrabold text-primary`,
                children: r.halfPrice
                  ? `${o(r.halfPrice)} / ${o(r.price)}`
                  : o(r.price),
              }),
            ],
          }),
          (0, b.jsx)(`p`, {
            className: `line-clamp-2 text-sm text-muted-foreground`,
            children: r.description[a],
          }),
          (0, b.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, b.jsx)(e, { rating: r.rating }),
              (0, b.jsx)(`span`, {
                className: `text-xs font-semibold`,
                children: r.rating.toFixed(1),
              }),
              (0, b.jsxs)(`span`, {
                className: `text-xs text-muted-foreground`,
                children: [`(`, l, `)`],
              }),
              r.spice > 0 &&
                (0, b.jsx)(`span`, {
                  className: `ml-1 inline-flex items-center text-destructive`,
                  "aria-hidden": `true`,
                  children: Array.from({ length: r.spice }).map((e, n) =>
                    (0, b.jsx)(
                      t,
                      {
                        width: 12,
                        height: 12,
                        className: `fill-destructive/25`,
                      },
                      n,
                    ),
                  ),
                }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `mt-auto flex flex-wrap items-center gap-2 pt-2`,
            children: [
              r.halfPrice && (0, b.jsx)(n, { dish: r, variant: `half` }),
              (0, b.jsx)(n, { dish: r, variant: `full` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function S() {
  let { lang: e, setLang: t, t: n } = i();
  return (0, b.jsx)(`div`, {
    className: `clay-inset flex items-center gap-1 rounded-full bg-muted p-1`,
    role: `group`,
    "aria-label": n(`language`),
    children: l.map((n) =>
      (0, b.jsx)(
        `button`,
        {
          type: `button`,
          onClick: () => t(n.code),
          "aria-pressed": e === n.code,
          className: f(
            `rounded-full px-3 py-1.5 text-sm font-bold transition-colors`,
            e === n.code
              ? `clay-sm bg-primary text-primary-foreground`
              : `text-muted-foreground hover:text-foreground`,
          ),
          children: n.label,
        },
        n.code,
      ),
    ),
  });
}
var C = [`veg`, `jain`];
function w() {
  let { lang: e, t } = i(),
    [n, r] = (0, y.useState)(``),
    [o, s] = (0, y.useState)(`all`),
    [l, f] = (0, y.useState)(`all`),
    p = (0, y.useMemo)(() => {
      let e = n.trim().toLowerCase(),
        t = a.filter((t) =>
          (o !== `all` && t.diet !== o) || (l !== `all` && t.category !== l)
            ? !1
            : !e ||
              t.name.en.toLowerCase().includes(e) ||
              t.name.hi.toLowerCase().includes(e) ||
              t.tags.some((t) => t.toLowerCase().includes(e)),
        );
      if (!e) return t;
      let r = (t) => {
        let n = [t.name.en.toLowerCase(), t.name.hi.toLowerCase()];
        return n.some((t) => t === e)
          ? 0
          : n.some((t) => t.startsWith(e))
            ? 1
            : n.some((t) => t.split(/\s+/).some((t) => t.startsWith(e)))
              ? 2
              : n.some((t) => t.includes(e))
                ? 3
                : 4;
      };
      return [...t].sort((e, t) => r(e) - r(t));
    }, [n, o, l]),
    h = m.filter((e) => p.some((t) => t.category === e.id)),
    g = n !== `` || o !== `all` || l !== `all`,
    w = () => {
      (r(``), s(`all`), f(`all`));
    };
  return (0, b.jsxs)(`main`, {
    className: `mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6`,
    children: [
      (0, b.jsxs)(`header`, {
        className: `clay gold-frame rounded-4xl bg-card px-6 py-8 text-center`,
        children: [
          (0, b.jsx)(`p`, {
            className: `font-display text-sm font-semibold tracking-[0.3em] text-primary uppercase`,
            children: t(`hotelKind`),
          }),
          (0, b.jsx)(`h1`, {
            className: `font-script mt-2 text-5xl leading-none text-primary sm:text-7xl`,
            children: u.name,
          }),
          (0, b.jsx)(`p`, {
            className: `mt-3 text-sm text-muted-foreground`,
            children: t(`tagline`),
          }),
          (0, b.jsxs)(`div`, {
            className: `mt-5 flex flex-wrap items-center justify-center gap-3`,
            children: [
              (0, b.jsx)(`span`, {
                className: `clay-sm rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground`,
                children: t(`pureVeg`),
              }),
              (0, b.jsx)(S, {}),
            ],
          }),
        ],
      }),
      (0, b.jsxs)(`section`, {
        className: `mt-6`,
        children: [
          (0, b.jsx)(`h2`, {
            className: `text-2xl font-extrabold sm:text-3xl`,
            children: t(`heroTitle`),
          }),
          (0, b.jsx)(`p`, {
            className: `mt-1 max-w-xl text-muted-foreground`,
            children: t(`heroSubtitle`),
          }),
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: `sticky top-3 z-30 mt-5 space-y-3 rounded-4xl bg-background/80 py-3 backdrop-blur-md`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `clay-inset flex items-center gap-3 rounded-full bg-card px-5 py-3`,
            children: [
              (0, b.jsx)(v, {
                width: 18,
                height: 18,
                className: `shrink-0 text-muted-foreground`,
              }),
              (0, b.jsx)(`input`, {
                value: n,
                onChange: (e) => r(e.target.value),
                placeholder: t(`searchPlaceholder`),
                "aria-label": t(`searchPlaceholder`),
                className: `w-full bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground`,
              }),
              n &&
                (0, b.jsx)(`button`, {
                  type: `button`,
                  onClick: () => r(``),
                  "aria-label": t(`close`),
                  className: `clay-press grid size-6 shrink-0 place-items-center rounded-full bg-muted`,
                  children: (0, b.jsx)(c, { width: 12, height: 12 }),
                }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `flex gap-2 overflow-x-auto pb-1`,
            children: [
              (0, b.jsx)(T, {
                active: o === `all`,
                onClick: () => s(`all`),
                children: t(`all`),
              }),
              C.map((e) =>
                (0, b.jsx)(
                  T,
                  {
                    active: o === e,
                    onClick: () => s(e),
                    children: (0, b.jsx)(d, { diet: e, withLabel: !0 }),
                  },
                  e,
                ),
              ),
              (0, b.jsx)(`span`, {
                className: `mx-1 hidden h-6 w-px shrink-0 bg-border sm:block`,
              }),
              (0, b.jsx)(T, {
                active: l === `all`,
                onClick: () => f(`all`),
                children: t(`all`),
              }),
              m.map((t) =>
                (0, b.jsx)(
                  T,
                  {
                    active: l === t.id,
                    onClick: () => f(t.id),
                    children: t.label[e],
                  },
                  t.id,
                ),
              ),
            ],
          }),
        ],
      }),
      p.length === 0
        ? (0, b.jsxs)(`div`, {
            className: `clay mt-8 rounded-4xl bg-card px-6 py-14 text-center`,
            children: [
              (0, b.jsx)(`p`, {
                className: `text-lg font-bold`,
                children: t(`noResults`),
              }),
              (0, b.jsx)(`p`, {
                className: `mt-1 text-sm text-muted-foreground`,
                children: t(`noResultsHint`),
              }),
              (0, b.jsx)(`button`, {
                type: `button`,
                onClick: w,
                className: `clay-sm clay-press mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground`,
                children: t(`clearFilters`),
              }),
            ],
          })
        : (0, b.jsx)(`div`, {
            className: `mt-6 space-y-10`,
            children: h.map((t) =>
              (0, b.jsxs)(
                `section`,
                {
                  id: t.id,
                  children: [
                    (0, b.jsx)(`h2`, {
                      className: `clay-sm mb-4 inline-block rounded-2xl bg-secondary px-5 py-2 text-xl font-extrabold text-secondary-foreground sm:text-2xl`,
                      children: t.label[e],
                    }),
                    (0, b.jsx)(`div`, {
                      className: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`,
                      children: p
                        .filter((e) => e.category === t.id)
                        .map((e) => (0, b.jsx)(x, { dish: e }, e.id)),
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
      g &&
        (0, b.jsx)(`div`, {
          className: `mt-8 text-center`,
          children: (0, b.jsx)(`button`, {
            type: `button`,
            onClick: w,
            className: `clay-sm clay-press rounded-full bg-card px-5 py-2.5 text-sm font-bold`,
            children: t(`clearFilters`),
          }),
        }),
      (0, b.jsxs)(`footer`, {
        className: `clay gold-frame mt-12 rounded-4xl bg-card px-6 py-8 text-center`,
        children: [
          (0, b.jsx)(`h2`, {
            className: `font-script text-4xl text-primary sm:text-5xl`,
            children: u.name,
          }),
          (0, b.jsx)(`p`, {
            className: `mt-1 text-sm tracking-[0.2em] text-muted-foreground uppercase`,
            children: t(`hotelKind`),
          }),
          (0, b.jsx)(`h3`, {
            className: `mt-6 text-lg font-extrabold text-primary`,
            children: t(`facilities`),
          }),
          (0, b.jsx)(`ul`, {
            className: `mt-2 flex flex-wrap justify-center gap-2`,
            children: u.facilities[e].map((e) =>
              (0, b.jsx)(
                `li`,
                {
                  className: `clay-sm rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground`,
                  children: e,
                },
                e,
              ),
            ),
          }),
          (0, b.jsx)(`h3`, {
            className: `mt-6 text-sm font-bold text-muted-foreground`,
            children: t(`forBooking`),
          }),
          (0, b.jsx)(`div`, {
            className: `mt-2 flex flex-wrap justify-center gap-2`,
            children: u.phones.map((e) =>
              (0, b.jsxs)(
                `a`,
                {
                  href: `tel:${e.replace(/\s/g, ``)}`,
                  className: `clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground`,
                  children: [(0, b.jsx)(_, { width: 14, height: 14 }), e],
                },
                e,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function T({ active: e, onClick: t, children: n }) {
  return (0, b.jsx)(`button`, {
    type: `button`,
    onClick: t,
    "aria-pressed": e,
    className: f(
      `clay-press inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors`,
      e ? `clay-sm bg-primary text-primary-foreground` : `clay-sm bg-card`,
    ),
    children: n,
  });
}
export { w as component };
