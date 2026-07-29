import type { Diet } from "@/data/menu";
import { useApp } from "@/context/app-context";
import { cn } from "@/lib/utils";

const styles: Record<Diet, string> = {
  veg: "border-veg text-veg",
  jain: "border-jain text-jain",
};


/** Standard Indian FSSAI-style square marker + label. */
export function DietMark({
  diet,
  withLabel = false,
  className,
}: {
  diet: Diet;
  withLabel?: boolean;
  className?: string;
}) {
  const { t } = useApp();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-bold",
        styles[diet],
        className,
      )}
      title={t(diet)}
    >
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded-[5px] border-2 bg-card",
          styles[diet],
        )}
      >
        <span
          className={cn(
            "size-1.5",
            diet === "veg" && "rounded-full bg-veg",

            diet === "jain" && "rotate-45 bg-jain",
          )}
        />
      </span>
      {withLabel && <span>{t(diet)}</span>}
    </span>
  );
}
