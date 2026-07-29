import { Link } from "@tanstack/react-router";
import { ChefHat, ShoppingBag } from "lucide-react";
import { useApp } from "@/context/app-context";
import { languages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function TopBar() {
  const { lang, setLang, t, count, setCartOpen } = useApp();

  return (
    <header className="border-b border-border bg-background/90">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          aria-label={t("hotelName")}
          className="clay-sm clay-press grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
        >
          <ChefHat width={20} height={20} />
        </Link>

        <span className="min-w-0 flex-1 truncate font-display text-lg font-bold">
          {t("hotelName")}
        </span>

        <div
          className="clay-sm flex shrink-0 items-center rounded-full bg-card p-1"
          role="group"
          aria-label={t("language")}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-bold transition-colors",
                lang === l.code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.short}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label={t("yourOrder")}
          className="clay-sm clay-press relative grid size-11 shrink-0 place-items-center rounded-full bg-card"
        >
          <ShoppingBag width={19} height={19} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] font-extrabold text-accent-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
