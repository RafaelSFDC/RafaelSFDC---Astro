import { Quote as QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

export function Quote({ children, author, role, className }: QuoteProps) {
  return (
    <div
      className={cn(
        "my-8 relative rounded-2xl bg-muted/50 p-8 border-l-4 border-primary shadow-sm",
        className
      )}
    >
      <QuoteIcon className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
      <div className="relative">
        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic mb-4">
          {children}
        </blockquote>
        {(author || role) && (
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div>
              {author && (
                <div className="font-semibold text-foreground">{author}</div>
              )}
              {role && (
                <div className="text-sm text-muted-foreground">{role}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
