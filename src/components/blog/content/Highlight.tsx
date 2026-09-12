import React from "react";
import { cn } from "@/lib/utils";

interface HighlightProps {
  children: React.ReactNode;
  color?: "yellow" | "green" | "blue" | "purple" | "red" | "pink";
  className?: string;
}

const colorMap = {
  yellow:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100 decoration-yellow-400/50",
  green:
    "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 decoration-emerald-400/50",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 decoration-blue-400/50",
  purple:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 decoration-purple-400/50",
  red: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100 decoration-red-400/50",
  pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-900 dark:text-pink-100 decoration-pink-400/50",
};

export function Highlight({
  children,
  color = "yellow",
  className,
}: HighlightProps) {
  return (
    <span
      className={cn(
        "px-1 rounded-md font-medium whitespace-nowrap",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
