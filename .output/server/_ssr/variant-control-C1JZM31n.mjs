import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  d as useApp,
  i as cn,
  o as formatPrice,
  u as priceOf,
} from "./diet-mark-D2c_m40-.mjs";
import { a as Plus, n as Star, s as Minus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/variant-control-C1JZM31n.js
var import_jsx_runtime = require_jsx_runtime();
function Stars({ rating, size = 14, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: cn("inline-flex items-center gap-0.5", className),
    "aria-hidden": "true",
    children: [1, 2, 3, 4, 5].map((i) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Star,
        {
          width: size,
          height: size,
          className:
            rating >= i - 0.25
              ? "fill-primary text-primary"
              : rating >= i - 0.75
                ? "fill-primary/50 text-primary"
                : "fill-muted text-muted-foreground/40",
        },
        i,
      ),
    ),
  });
}
/** Add / stepper control for one price variant (half or full plate). */
function VariantControl({ dish, variant, size = "sm" }) {
  const { t, add, remove, qtyOf } = useApp();
  const qty = qtyOf(dish.id, variant);
  const label = dish.halfPrice ? t(variant) : t("add");
  const price = priceOf(dish, variant);
  const big = size === "lg";
  if (qty === 0)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
      type: "button",
      onClick: () => add(dish.id, variant),
      className: cn(
        "clay-sm clay-press rounded-full bg-primary font-bold text-primary-foreground",
        big ? "px-6 py-3 text-base" : "px-3.5 py-2 text-xs",
      ),
      children: [label, " · ", formatPrice(price)],
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: cn(
      "clay-inset flex items-center gap-1 rounded-full bg-muted p-1",
      big && "gap-3 p-1.5",
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        onClick: () => remove(dish.id, variant),
        "aria-label": `decrease ${dish.name.en} ${variant}`,
        className: cn(
          "clay-press grid place-items-center rounded-full bg-card",
          big ? "size-9" : "size-7",
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
          width: big ? 16 : 14,
          height: big ? 16 : 14,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cn(
          "text-center font-bold",
          big ? "min-w-8 text-lg" : "min-w-8 text-xs",
        ),
        children: dish.halfPrice ? `${label} ×${qty}` : qty,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        onClick: () => add(dish.id, variant),
        "aria-label": `increase ${dish.name.en} ${variant}`,
        className: cn(
          "clay-press grid place-items-center rounded-full bg-primary text-primary-foreground",
          big ? "size-9" : "size-7",
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
          width: big ? 16 : 14,
          height: big ? 16 : 14,
        }),
      }),
    ],
  });
}
//#endregion
export { VariantControl as n, Stars as t };
