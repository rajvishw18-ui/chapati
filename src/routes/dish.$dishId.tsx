import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Flame, Plus } from "lucide-react";
import { dishes, formatPrice, getDish, hotel } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { DietMark } from "@/components/menu/diet-mark";
import { Stars } from "@/components/menu/stars";
import { VariantControl } from "@/components/menu/variant-control";

export const Route = createFileRoute("/dish/$dishId")({
  loader: ({ params }) => {
    const dish = getDish(params.dishId);
    if (!dish) throw notFound();
    return { name: dish.name.en, description: dish.description.en };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Dish unavailable — Chapati.com" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — Chapati.com Menu`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: DishPage,
});

function DishPage() {
  const { dishId } = Route.useParams();
  const { lang, t, add } = useApp();
  const dish = getDish(dishId);
  if (!dish) return null;

  const totalRatings = dish.ratingBreakdown.reduce((a, b) => a + b, 0);
  const combos = dish.combos.map((id) => dishes.find((d) => d.id === id)!).filter(Boolean);
  const spiceLabel = [null, t("mild"), t("medium"), t("hot")][dish.spice];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6">
      <Link
        to="/"
        className="clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold"
      >
        <ArrowLeft width={16} height={16} />
        {t("back")}
      </Link>

      <article className="clay mt-5 overflow-hidden rounded-3xl bg-card">
        <img
          src={dish.image}
          alt={dish.name[lang]}
          width={800}
          height={600}
          className="h-64 w-full object-cover sm:h-80"
        />

        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <DietMark diet={dish.diet} withLabel />
                {dish.spice > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-destructive">
                    {Array.from({ length: dish.spice }).map((_, i) => (
                      <Flame key={i} width={13} height={13} className="fill-destructive/25" />
                    ))}
                    {spiceLabel}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <Clock width={13} height={13} />
                  {dish.prepTime[0]}–{dish.prepTime[1]} {t("mins")}
                </span>
                {dish.chefPick && (
                  <span className="clay-sm rounded-full bg-butter px-3 py-1 text-[11px] font-bold text-butter-foreground">
                    {t("chefPick")}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-extrabold sm:text-4xl">{dish.name[lang]}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{dish.description[lang]}</p>
            </div>

            <div className="text-right">
              {dish.halfPrice && (
                <p className="text-sm font-bold text-muted-foreground">
                  {t("half")} {formatPrice(dish.halfPrice)}
                </p>
              )}
              <p className="text-3xl font-extrabold text-primary">{formatPrice(dish.price)}</p>
              <p className="text-xs text-muted-foreground">
                {dish.halfPrice ? t("full") : t("perPlate")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {dish.halfPrice && <VariantControl dish={dish} variant="half" size="lg" />}
            <VariantControl dish={dish} variant="full" size="lg" />
          </div>
        </div>
      </article>

      {combos.length > 0 && (
        <section className="clay mt-6 rounded-3xl bg-secondary p-6 text-secondary-foreground">
          <h2 className="text-xl font-extrabold">
            {t("pairsWith")} {combos[0].name[lang]}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className="clay-sm flex items-center gap-3 rounded-3xl bg-card p-3 text-card-foreground"
              >
                <img
                  src={combo.image}
                  alt={combo.name[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="size-14 shrink-0 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    to="/dish/$dishId"
                    params={{ dishId: combo.id }}
                    className="block truncate text-sm font-bold"
                  >
                    {combo.name[lang]}
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    {formatPrice(combo.price)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => add(combo.id)}
                  aria-label={`${t("add")} ${combo.name[lang]}`}
                  className="clay-press grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <Plus width={15} height={15} />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="clay mt-6 rounded-3xl bg-card p-6">
        <h2 className="text-xl font-extrabold">{t("ratingsAndReviews")}</h2>

        <div className="mt-4 flex flex-wrap items-center gap-8">
          <div className="text-center">
            <p className="text-5xl font-extrabold">{dish.rating.toFixed(1)}</p>
            <Stars rating={dish.rating} size={16} className="mt-1" />
            <p className="mt-1 text-xs text-muted-foreground">
              {t("basedOn")} {totalRatings} {t("ratings")}
            </p>
          </div>

          <div className="min-w-52 flex-1 space-y-1.5">
            {dish.ratingBreakdown.map((count, i) => {
              const star = 5 - i;
              const pct = totalRatings ? (count / totalRatings) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2 text-xs font-semibold">
                  <span className="w-3">{star}</span>
                  <div className="clay-inset h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-8 text-right text-muted-foreground">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {dish.reviews.map((review) => (
            <li key={review.name} className="clay-sm rounded-3xl bg-background p-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="clay-sm grid size-9 place-items-center rounded-full bg-butter font-extrabold text-butter-foreground">
                  {review.name.charAt(0)}
                </span>
                <span className="font-bold">{review.name}</span>
                <Stars rating={review.rating} />
                <span className="ml-auto text-xs text-muted-foreground">{review.date}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{review.text[lang]}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {hotel.name} · {t("forBooking")} {hotel.phones[0]}
      </p>
    </main>
  );
}
