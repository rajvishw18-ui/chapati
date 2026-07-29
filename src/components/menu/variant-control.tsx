import { Minus, Plus } from "lucide-react";
import type { Dish, Variant } from "@/data/menu";
import { formatPrice, priceOf } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { cn } from "@/lib/utils";

/** Add / stepper control for one price variant (half or full plate). */
export function VariantControl({
  dish,
  variant,
  size = "sm",
  hidePrice = false,
}: {
  dish: Dish;
  variant: Variant;
  size?: "sm" | "lg";
  hidePrice?: boolean;
}) {
  const { t, add, remove, qtyOf } = useApp();
  const qty = qtyOf(dish.id, variant);
  const label = dish.halfPrice ? t(variant) : t("add");
  const price = priceOf(dish, variant);
  const big = size === "lg";

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => add(dish.id, variant)}
        className={cn(
          "clay-sm clay-press inline-flex items-center gap-1.5 rounded-full bg-primary font-bold text-primary-foreground",
          big ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
        )}
      >
        <Plus width={big ? 18 : 15} height={big ? 18 : 15} />
        {label}
        {!hidePrice && dish.halfPrice ? ` · ${formatPrice(price)}` : ""}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "clay-inset flex items-center gap-1 rounded-full bg-muted p-1",
        big && "gap-3 p-1.5",
      )}
    >
      <button
        type="button"
        onClick={() => remove(dish.id, variant)}
        aria-label={`decrease ${dish.name.en} ${variant}`}
        className={cn(
          "clay-press grid place-items-center rounded-full bg-card",
          big ? "size-9" : "size-7",
        )}
      >
        <Minus width={big ? 16 : 14} height={big ? 16 : 14} />
      </button>
      <span className={cn("text-center font-bold", big ? "min-w-8 text-lg" : "min-w-8 text-xs")}>
        {dish.halfPrice ? `${label} ×${qty}` : qty}
      </span>
      <button
        type="button"
        onClick={() => add(dish.id, variant)}
        aria-label={`increase ${dish.name.en} ${variant}`}
        className={cn(
          "clay-press grid place-items-center rounded-full bg-primary text-primary-foreground",
          big ? "size-9" : "size-7",
        )}
      >
        <Plus width={big ? 16 : 14} height={big ? 16 : 14} />
      </button>
    </div>
  );
}
