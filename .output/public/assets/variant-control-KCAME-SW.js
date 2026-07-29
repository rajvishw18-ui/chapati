import {
  _ as e,
  a as t,
  c as n,
  f as r,
  h as i,
  o as a,
  r as o,
  s,
} from "./index-DfSw7QMh.js";
var c = s(`flame`, [
    [
      `path`,
      {
        d: `M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,
        key: `1slcih`,
      },
    ],
  ]),
  l = s(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  u = e();
function d({ rating: e, size: t = 14, className: n }) {
  return (0, u.jsx)(`span`, {
    className: o(`inline-flex items-center gap-0.5`, n),
    "aria-hidden": `true`,
    children: [1, 2, 3, 4, 5].map((n) =>
      (0, u.jsx)(
        l,
        {
          width: t,
          height: t,
          className:
            e >= n - 0.25
              ? `fill-primary text-primary`
              : e >= n - 0.75
                ? `fill-primary/50 text-primary`
                : `fill-muted text-muted-foreground/40`,
        },
        n,
      ),
    ),
  });
}
function f({ dish: e, variant: s, size: c = `sm` }) {
  let { t: l, add: d, remove: f, qtyOf: p } = n(),
    m = p(e.id, s),
    h = e.halfPrice ? l(s) : l(`add`),
    g = i(e, s),
    _ = c === `lg`;
  return m === 0
    ? (0, u.jsxs)(`button`, {
        type: `button`,
        onClick: () => d(e.id, s),
        className: o(
          `clay-sm clay-press rounded-full bg-primary font-bold text-primary-foreground`,
          _ ? `px-6 py-3 text-base` : `px-3.5 py-2 text-xs`,
        ),
        children: [h, ` · `, r(g)],
      })
    : (0, u.jsxs)(`div`, {
        className: o(
          `clay-inset flex items-center gap-1 rounded-full bg-muted p-1`,
          _ && `gap-3 p-1.5`,
        ),
        children: [
          (0, u.jsx)(`button`, {
            type: `button`,
            onClick: () => f(e.id, s),
            "aria-label": `decrease ${e.name.en} ${s}`,
            className: o(
              `clay-press grid place-items-center rounded-full bg-card`,
              _ ? `size-9` : `size-7`,
            ),
            children: (0, u.jsx)(a, {
              width: _ ? 16 : 14,
              height: _ ? 16 : 14,
            }),
          }),
          (0, u.jsx)(`span`, {
            className: o(
              `text-center font-bold`,
              _ ? `min-w-8 text-lg` : `min-w-8 text-xs`,
            ),
            children: e.halfPrice ? `${h} ×${m}` : m,
          }),
          (0, u.jsx)(`button`, {
            type: `button`,
            onClick: () => d(e.id, s),
            "aria-label": `increase ${e.name.en} ${s}`,
            className: o(
              `clay-press grid place-items-center rounded-full bg-primary text-primary-foreground`,
              _ ? `size-9` : `size-7`,
            ),
            children: (0, u.jsx)(t, {
              width: _ ? 16 : 14,
              height: _ ? 16 : 14,
            }),
          }),
        ],
      });
}
export { d as n, c as r, f as t };
