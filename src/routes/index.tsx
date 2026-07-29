import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Phone, Search, X } from "lucide-react";
import { categories, dishes, hotel, type CategoryId, type Diet } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { DishCard } from "@/components/menu/dish-card";
import { DietMark } from "@/components/menu/diet-mark";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chapati.com — Hotel & Restaurant Digital Menu" },
      {
        name: "description",
        content:
          "Pure veg menu at Chapati.com Hotel & Restaurant — Indian, Chinese, South Indian, thali, rice and sweets with photos, Hindi/English, ratings and a live bill estimate.",
      },
      { property: "og:title", content: "Chapati.com — Hotel & Restaurant Digital Menu" },
      {
        property: "og:description",
        content:
          "Browse the full Chapati.com menu with half/full prices, photos, reviews and a running bill estimate.",
      },
    ],
  }),
  component: MenuPage,
});

const diets: Diet[] = ["veg", "jain"];

function MenuPage() {
  const { lang, t } = useApp();
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState<Diet | "all">("all");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = dishes.filter((dish) => {
      if (diet !== "all" && dish.diet !== diet) return false;
      if (category !== "all" && dish.category !== category) return false;
      if (!q) return true;
      // Search dish names only (plus their tags) — never descriptions.
      return (
        dish.name.en.toLowerCase().includes(q) ||
        dish.name.hi.toLowerCase().includes(q) ||
        dish.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });

    if (!q) return matches;

    // Rank: exact title, title starts with, title word starts with, then tag-only hits.
    const score = (dish: (typeof dishes)[number]) => {
      const names = [dish.name.en.toLowerCase(), dish.name.hi.toLowerCase()];
      if (names.some((n) => n === q)) return 0;
      if (names.some((n) => n.startsWith(q))) return 1;
      if (names.some((n) => n.split(/\s+/).some((w) => w.startsWith(q)))) return 2;
      if (names.some((n) => n.includes(q))) return 3;
      return 4;
    };
    return [...matches].sort((a, b) => score(a) - score(b));
  }, [query, diet, category]);


  const visibleCategories = categories.filter((c) =>
    filtered.some((d) => d.category === c.id),
  );

  const hasFilters = query !== "" || diet !== "all" || category !== "all";
  const resetFilters = () => {
    setQuery("");
    setDiet("all");
    setCategory("all");
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6">
      <section className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">{t("heroTitle")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("tagline")}</p>
        </div>
        <span className="clay-sm shrink-0 rounded-full bg-card px-4 py-2 text-xs font-bold text-veg">
          {t("pureVeg")}
        </span>
      </section>

      <div className="sticky top-0 z-30 -mx-1 mt-4 bg-background/90 px-1 py-3 backdrop-blur-md">
        <div className="clay-sm flex items-center gap-3 rounded-full bg-card px-5 py-3.5">
          <Search width={18} height={18} className="shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t("close")}
              className="clay-press grid size-6 shrink-0 place-items-center rounded-full bg-muted"
            >
              <X width={12} height={12} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-1 space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
            {t("all")}
          </FilterPill>
          {categories.map((c) => (
            <FilterPill
              key={c.id}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label[lang]}
            </FilterPill>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto">
          <FilterPill small active={diet === "all"} onClick={() => setDiet("all")}>
            {t("all")}
          </FilterPill>
          {diets.map((d) => (
            <FilterPill small key={d} active={diet === d} onClick={() => setDiet(d)}>
              <DietMark diet={d} withLabel />
            </FilterPill>
          ))}
        </div>
      </div>


      {filtered.length === 0 ? (
        <div className="clay mt-8 rounded-3xl bg-card px-6 py-14 text-center">
          <p className="text-lg font-bold">{t("noResults")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("noResultsHint")}</p>
          <button
            type="button"
            onClick={resetFilters}
            className="clay-sm clay-press mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            {t("clearFilters")}
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-9">
          {visibleCategories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <h2 className="mb-3 font-display text-xl font-extrabold sm:text-2xl">
                {cat.label[lang]}
              </h2>
              <div className="grid gap-4 lg:grid-cols-2">

                {filtered
                  .filter((d) => d.category === cat.id)
                  .map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {hasFilters && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={resetFilters}
            className="clay-sm clay-press rounded-full bg-card px-5 py-2.5 text-sm font-bold"
          >
            {t("clearFilters")}
          </button>
        </div>
      )}

      <footer className="clay mt-12 rounded-3xl bg-card px-6 py-8 text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{hotel.name}</h2>
        <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {t("hotelKind")}
        </p>


        <h3 className="mt-6 text-lg font-extrabold text-primary">{t("facilities")}</h3>
        <ul className="mt-2 flex flex-wrap justify-center gap-2">
          {hotel.facilities[lang].map((f) => (
            <li
              key={f}
              className="clay-sm rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground"
            >
              {f}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-sm font-bold text-muted-foreground">{t("forBooking")}</h3>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {hotel.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="clay-sm clay-press inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              <Phone width={14} height={14} />
              {p}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  small = false,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "clay-sm clay-press inline-flex shrink-0 items-center gap-1.5 rounded-full font-bold whitespace-nowrap transition-colors",
        small ? "px-3.5 py-1.5 text-xs" : "px-5 py-2.5 text-sm",
        active ? "bg-primary text-primary-foreground" : "bg-card",
      )}
    >
      {children}
    </button>
  );
}

