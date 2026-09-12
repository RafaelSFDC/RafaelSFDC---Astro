"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  children,
  language = "typescript",
  title,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Ensure children is a string before trying to split or copy
  const content =
    typeof children === "string" ? children : String(children || "");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = content.split("\n");

  return (
    <div
      className={cn(
        "my-6 rounded-xl overflow-hidden border border-border/50 shadow-lg",
        className
      )}
    >
      {/* Header */}
      {(title || language) && (
        <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border-b border-border/50">
          <div className="flex items-center gap-2">
            {title && (
              <span className="text-sm font-semibold text-foreground">
                {title}
              </span>
            )}
            {language && (
              <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded">
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 px-2 text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copiar
              </>
            )}
          </Button>
        </div>
      )}

      {/* Code Content */}
      <div className="relative bg-zinc-950 dark:bg-zinc-900">
        {!title && !language && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-7 px-2 text-xs text-gray-300 hover:text-white z-10"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copiar
              </>
            )}
          </Button>
        )}
        <pre className="overflow-x-auto p-4">
          <code className="text-sm text-gray-50 font-mono">
            {showLineNumbers ? (
              <div>
                {lines.map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell pr-4 text-gray-500 select-none text-right">
                      {i + 1}
                    </span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              content
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
