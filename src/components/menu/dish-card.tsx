import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import type { Dish } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { DietMark } from "./diet-mark";
import { Stars } from "./stars";
import { VariantControl } from "./variant-control";

export function DishCard({ dish }: { dish: Dish }) {
  const { lang, t } = useApp();
  const reviewCount = dish.ratingBreakdown.reduce((a, b) => a + b, 0);

  return (
    <article className="clay group relative flex flex-col overflow-hidden rounded-3xl bg-card">
      <Link
        to="/dish/$dishId"
        params={{ dishId: dish.id }}
        className="relative block overflow-hidden"
      >
        <img
          src={dish.image}
          alt={dish.name[lang]}
          loading="lazy"
          width={800}
          height={600}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48"
        />
        <span className="clay-sm absolute top-3 left-3 rounded-full bg-card/95 px-2.5 py-1 backdrop-blur">
          <DietMark diet={dish.diet} />
        </span>
        {dish.chefPick && (
          <span className="clay-sm absolute top-3 right-3 rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground">
            {t("chefPick")}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <Link to="/dish/$dishId" params={{ dishId: dish.id }} className="min-w-0">
            <h3 className="truncate text-base leading-tight font-bold">{dish.name[lang]}</h3>
          </Link>
          <span className="shrink-0 text-sm font-extrabold text-primary">
            {dish.halfPrice
              ? `${formatPrice(dish.halfPrice)} / ${formatPrice(dish.price)}`
              : formatPrice(dish.price)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{dish.description[lang]}</p>

        <div className="flex items-center gap-1.5">
          <Stars rating={dish.rating} />
          <span className="text-xs font-semibold">{dish.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
          {dish.spice > 0 && (
            <span className="ml-1 inline-flex items-center text-destructive" aria-hidden="true">
              {Array.from({ length: dish.spice }).map((_, i) => (
                <Flame key={i} width={12} height={12} className="fill-destructive/25" />
              ))}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {dish.halfPrice && <VariantControl dish={dish} variant="half" />}
          <VariantControl dish={dish} variant="full" />
        </div>
      </div>
    </article>
  );
}
