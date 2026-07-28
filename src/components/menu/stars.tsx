import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating,
  size = 14,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={
            rating >= i - 0.25
              ? "fill-primary text-primary"
              : rating >= i - 0.75
                ? "fill-primary/50 text-primary"
                : "fill-muted text-muted-foreground/40"
          }
        />
      ))}
    </span>
  );
}
