"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function LottieAnimation({
  src,
  className,
  width,
  height,
}: LottieAnimationProps) {
  return (
    <div
      className={cn(
        "my-8 flex justify-center items-center overflow-hidden rounded-xl bg-muted/30 p-8",
        className,
      )}
    >
      <div
        style={{
          width: width ? width : "100%",
          height: height ? height : "auto",
          maxWidth: "100%",
        }}
        className="relative"
      >
        <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border/60 bg-background/40 p-6 text-center text-sm text-muted-foreground">
          Animação indisponível no momento.
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            Abrir arquivo
          </a>
        </div>
      </div>
    </div>
  );
}
