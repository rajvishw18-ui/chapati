import { useApp } from "@/context/app-context";
import { languages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useApp();
  return (
    <div
      className="clay-inset flex items-center gap-1 rounded-full bg-muted p-1"
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
              ? "clay-sm bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
