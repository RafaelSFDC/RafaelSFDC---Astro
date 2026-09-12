import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  description?: string;
  trend?: string;
  trendDirection?: "up" | "down";
}

interface StatsProps {
  // Single mode keys
  value?: string;
  label?: string;
  trend?: string;
  trendDirection?: "up" | "down";

  // Multiple mode key
  items?: StatItem[];

  className?: string;
}

export function Stats({
  value,
  label,
  trend,
  trendDirection = "up",
  items,
  className,
}: StatsProps) {
  // Helper render function for a single stat card
  const renderStatCard = (item: StatItem, index?: number) => (
    <div
      key={index}
      className={cn(
        "rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-6 border border-primary/20 shadow-lg flex flex-col items-center text-center space-y-3",
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        {item.value}
      </div>
      <div className="font-medium text-foreground">{item.label}</div>
      {item.description && (
        <div className="text-sm text-muted-foreground leading-snug">
          {item.description}
        </div>
      )}
      {item.trend && (
        <div
          className={cn(
            "flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mt-2",
            (item.trendDirection || "up") === "up"
              ? "bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-300"
              : "bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-300"
          )}
        >
          {(item.trendDirection || "up") === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {item.trend}
        </div>
      )}
    </div>
  );

  if (items && items.length > 0) {
    return (
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => renderStatCard(item, idx))}
      </div>
    );
  }

  // Fallback for single mode (if value and label are provided)
  if (value && label) {
    return (
      <div className="my-8">
        {renderStatCard({ value, label, trend, trendDirection })}
      </div>
    );
  }

  return null;
}
