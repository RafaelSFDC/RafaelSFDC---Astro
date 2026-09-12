import React from "react";
import { cn } from "@/lib/utils";

interface FormulaProps {
  title?: string;
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  result?: string;
  className?: string;
}

export function Formula({
  title,
  numerator,
  denominator,
  result,
  className,
}: FormulaProps) {
  return (
    <div
      className={cn(
        "my-8 p-6 rounded-2xl bg-linear-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-border/50 shadow-xl",
        className
      )}
    >
      {title && (
        <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 text-center">
          {title}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="px-4 py-2 text-foreground font-medium text-lg md:text-xl text-center">
              {numerator}
            </div>
            <div className="w-full h-0.5 bg-primary/30 rounded-full" />
            <div className="px-4 py-2 text-foreground font-medium text-lg md:text-xl text-center">
              {denominator}
            </div>
          </div>
        </div>

        {result && (
          <>
            <div className="hidden md:block text-3xl font-light text-muted-foreground">
              =
            </div>
            <div className="md:hidden text-2xl font-light text-muted-foreground">
              ↓
            </div>
            <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-xl md:text-2xl shadow-sm">
              {result}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
