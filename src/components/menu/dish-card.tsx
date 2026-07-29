import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Flame, Plus, Star } from "lucide-react";
import type { Dish } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { DietMark } from "./diet-mark";
import { VariantControl } from "./variant-control";

export function DishCard({ dish }: { dish: Dish }) {
  const { lang, t, qtyOf } = useApp();
  const [showPortions, setShowPortions] = useState(false);
  const hasHalf = Boolean(dish.halfPrice);
  const inCart = qtyOf(dish.id, "half") > 0 || qtyOf(dish.id, "full") > 0;
  const portionsOpen = hasHalf && (showPortions || inCart);

  return (
    <article className="clay flex gap-3 rounded-3xl bg-card p-3 sm:gap-4 sm:p-4">
      <Link
        to="/dish/$dishId"
        params={{ dishId: dish.id }}
        className="shrink-0"
        aria-label={dish.name[lang]}
      >
        <img
          src={dish.image}
          alt={dish.name[lang]}
          loading="lazy"
          width={800}
          height={600}
          className="size-24 rounded-2xl object-cover sm:size-28"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-start gap-2">
          <span className="mt-1 shrink-0">
            <DietMark diet={dish.diet} />
          </span>
          <Link to="/dish/$dishId" params={{ dishId: dish.id }} className="min-w-0 flex-1">
            <h3 className="font-display text-base leading-snug font-bold sm:text-lg">
              {dish.name[lang]}
            </h3>
          </Link>
          <span className="clay-sm inline-flex shrink-0 items-center gap-1 rounded-full bg-butter px-2 py-1 text-xs font-extrabold text-butter-foreground">
            <Star width={12} height={12} className="fill-accent text-accent" />
            {dish.rating.toFixed(1)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{dish.description[lang]}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock width={13} height={13} />
            {dish.prepTime[0]}–{dish.prepTime[1]} {t("mins")}
          </span>
          {dish.spice > 0 && (
            <span className="inline-flex items-center text-destructive" aria-hidden="true">
              {Array.from({ length: dish.spice }).map((_, i) => (
                <Flame key={i} width={12} height={12} className="fill-destructive/20" />
              ))}
            </span>
          )}
          {dish.chefPick && (
            <span className="font-bold text-accent-foreground">{t("chefPick")}</span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <span className="font-display text-lg font-extrabold">
            {hasHalf
              ? `${formatPrice(dish.halfPrice!)} / ${formatPrice(dish.price)}`
              : formatPrice(dish.price)}
          </span>

          {!hasHalf ? (
            <VariantControl dish={dish} variant="full" hidePrice />
          ) : portionsOpen ? (
            <span className="flex flex-wrap items-center gap-2">
              <VariantControl dish={dish} variant="half" />
              <VariantControl dish={dish} variant="full" />
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setShowPortions(true)}
              className="clay-sm clay-press inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground"
            >
              <Plus width={15} height={15} />
              {t("add")}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
