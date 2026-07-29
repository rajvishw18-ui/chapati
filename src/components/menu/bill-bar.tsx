import { useState } from "react";
import { Minus, Plus, ReceiptText, X } from "lucide-react";
import { dishes, formatPrice, getDish, priceOf } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { DietMark } from "./diet-mark";

export function BillBar() {
  const { t, lang, cart, count, subtotal, tax, total, add, remove, clear } =
    useApp();
  const [open, setOpen] = useState(false);

  const suggestions = Array.from(
    new Set(
      cart
        .flatMap((line) => getDish(line.id)?.combos ?? [])
        .filter((id) => !cart.some((l) => l.id === id)),
    ),
  )
    .map((id) => dishes.find((d) => d.id === id)!)
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 sm:p-5">
        <div className="pointer-events-auto w-full max-w-3xl">
          {open && (
            <div className="clay mb-3 max-h-[65vh] overflow-y-auto rounded-4xl bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-extrabold">{t("yourOrder")}</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("close")}
                  className="clay-sm clay-press grid size-9 place-items-center rounded-full bg-muted"
                >
                  <X width={16} height={16} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="clay-inset rounded-3xl bg-muted px-5 py-8 text-center">
                  <p className="font-bold">{t("emptyCart")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("emptyCartHint")}
                  </p>
                </div>
              ) : (
                <>
                  <ul className="space-y-3">
                    {cart.map((line) => {
                      const dish = getDish(line.id);
                      if (!dish) return null;
                      const unit = priceOf(dish, line.variant);
                      return (
                        <li
                          key={`${line.id}|${line.variant}`}
                          className="clay-sm flex items-center gap-3 rounded-3xl bg-background p-2.5"
                        >
                          <img
                            src={dish.image}
                            alt={dish.name[lang]}
                            loading="lazy"
                            width={800}
                            height={600}
                            className="size-14 shrink-0 rounded-2xl object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <DietMark diet={dish.diet} />
                              <span className="truncate font-bold">
                                {dish.name[lang]}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {dish.halfPrice ? `${t(line.variant)} · ` : ""}
                              {formatPrice(unit)}
                            </span>
                          </div>
                          <div className="clay-inset flex items-center gap-1 rounded-full bg-muted p-1">
                            <button
                              type="button"
                              onClick={() => remove(dish.id, line.variant)}
                              aria-label="decrease"
                              className="clay-press grid size-7 place-items-center rounded-full bg-card"
                            >
                              <Minus width={14} height={14} />
                            </button>
                            <span className="min-w-5 text-center text-sm font-bold">
                              {line.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => add(dish.id, line.variant)}
                              aria-label="increase"
                              className="clay-press grid size-7 place-items-center rounded-full bg-primary text-primary-foreground"
                            >
                              <Plus width={14} height={14} />
                            </button>
                          </div>
                          <span className="w-16 shrink-0 text-right font-extrabold">
                            {formatPrice(unit * line.qty)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {suggestions.length > 0 && (
                    <div className="mt-5">
                      <h3 className="mb-2 text-sm font-bold text-muted-foreground">
                        {t("pairsWith")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((dish) => (
                          <button
                            key={dish.id}
                            type="button"
                            onClick={() => add(dish.id)}
                            className="clay-sm clay-press flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm font-bold text-secondary-foreground"
                          >
                            <Plus width={14} height={14} />
                            {dish.name[lang]}
                            <span className="opacity-70">
                              {formatPrice(dish.price)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <dl className="clay-inset mt-5 space-y-2 rounded-3xl bg-muted p-4 text-sm">
                    <div className="flex justify-between">
                      <dt>{t("subtotal")}</dt>
                      <dd className="font-bold">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>{t("taxes")}</dt>
                      <dd className="font-bold">{formatPrice(tax)}</dd>
                    </div>
                    <div className="flex justify-between border-t pt-2 text-base">
                      <dt className="font-extrabold">{t("total")}</dt>
                      <dd className="font-extrabold">{formatPrice(total)}</dd>
                    </div>
                    <p className="pt-1 text-xs text-muted-foreground">
                      {t("serviceNote")}
                    </p>
                  </dl>

                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    {t("showWaiter")}
                  </p>

                  <button
                    type="button"
                    onClick={clear}
                    className="clay-press mx-auto mt-3 block rounded-full px-4 py-2 text-sm font-bold text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {t("clearAll")}
                  </button>
                </>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="clay clay-press flex w-full items-center justify-between gap-4 rounded-full bg-primary px-5 py-4 text-primary-foreground"
          >
            <span className="flex items-center gap-3">
              <ReceiptText width={20} height={20} />
              <span className="text-left">
                <span className="block text-xs font-semibold opacity-80">
                  {t("billEstimate")}
                </span>
                <span className="block text-sm font-bold">
                  {count} {count === 1 ? t("item") : t("items")}
                </span>
              </span>
            </span>
            <span className="text-xl font-extrabold">{formatPrice(total)}</span>
          </button>
        </div>
      </div>
    </>
  );
}
