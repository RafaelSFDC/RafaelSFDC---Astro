"use client";

import * as React from "react";
import { ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface TranscriptionProps {
  content: string;
  className?: string;
}

export function Transcription({ content, className }: TranscriptionProps) {
  if (!content) return null;

  return (
    <div
      className={cn(
        "my-8 border rounded-lg bg-muted/10 overflow-hidden",
        className
      )}
    >
      <details className="group">
        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/20 transition-colors list-none select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/5 rounded-full text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Ler transcrição do áudio
              </h4>
              <p className="text-xs text-muted-foreground">
                Texto completo do áudio acima
              </p>
            </div>
          </div>
          <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
        </summary>

        <div className="p-6 pt-2 border-t bg-background/50">
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground whitespace-pre-line">
            {content}
          </div>
        </div>
      </details>
    </div>
  );
}
