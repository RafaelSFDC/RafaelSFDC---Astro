import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  name: string;
  features: {
    [key: string]: boolean | string;
  };
  highlighted?: boolean;
}

interface ComparisonTableProps {
  items?: ComparisonItem[];
  features?: string[];
  headers?: string[];
  rows?: string[][];
  className?: string;
}

export function ComparisonTable({
  items: initialItems = [],
  features: initialFeatures = [],
  headers = [],
  rows = [],
  className,
}: ComparisonTableProps) {
  // Support both legacy (items/features) and row-based (headers/rows) formats
  const finalItems: ComparisonItem[] =
    initialItems.length > 0
      ? initialItems
      : headers.length > 1
        ? headers.slice(1).map((name, idx) => ({
            name,
            features: rows.reduce(
              (acc, row) => {
                const featureName = row[0];
                acc[featureName] = row[idx + 1];
                return acc;
              },
              {} as Record<string, any>,
            ),
          }))
        : [];

  const finalFeatures: string[] =
    initialFeatures.length > 0 ? initialFeatures : rows.map((row) => row[0]);

  if (finalItems.length === 0) {
    return null;
  }
  return (
    <div className={cn("", className)}>
      <div className="overflow-hidden rounded-2xl border bg-background/50 shadow-sm ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mt-0 mb-0">
            <thead>
              <tr>
                <th className="sticky left-0 z-20 min-w-[180px] bg-muted/30 p-6 text-left font-semibold text-foreground backdrop-blur-sm border-b border-r dark:bg-muted/10">
                  Recurso
                </th>
                {finalItems.map((item, idx) => (
                  <th
                    key={idx}
                    className={cn(
                      "min-w-[180px] p-6 text-center border-b align-top",
                      item.highlighted
                        ? "bg-primary/5 text-primary relative"
                        : "bg-background/40 text-foreground",
                    )}
                  >
                    {item.highlighted && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                    )}
                    <div className="flex flex-col gap-2 items-center justify-center h-full">
                      <span className="font-bold text-base">{item.name}</span>
                      {item.highlighted && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                          Recomendado
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {finalFeatures.map((feature, featureIdx) => (
                <tr
                  key={featureIdx}
                  className="group border-b border-border/40 last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="sticky left-0 z-10 p-5 font-medium text-foreground bg-background/80 group-hover:bg-background border-r transition-colors backdrop-blur-sm">
                    {feature}
                  </td>
                  {finalItems.map((item, itemIdx) => {
                    const value = item.features[feature];
                    return (
                      <td
                        key={itemIdx}
                        className={cn(
                          "p-5 text-center align-middle transition-colors",
                          item.highlighted
                            ? "bg-primary/5 group-hover:bg-primary/10"
                            : "group-hover:bg-muted/30",
                        )}
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <div className="flex justify-center">
                              <div className="rounded-full bg-emerald-100/50 p-1.5 dark:bg-emerald-500/10 ring-1 ring-emerald-500/20">
                                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center opacity-40">
                              <Minus className="h-4 w-4" />
                            </div>
                          )
                        ) : (
                          <span className="font-medium text-foreground/80">
                            {value}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
