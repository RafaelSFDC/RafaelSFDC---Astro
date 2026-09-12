import React from "react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: number | string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn("my-8 flex gap-4", className)}>
      <div className="flex-none">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-sm ring-4 ring-primary/10">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="mt-0 mb-2 font-bold text-xl leading-tight">{title}</h3>
        {children && <div className="text-muted-foreground">{children}</div>}
      </div>
    </div>
  );
}
