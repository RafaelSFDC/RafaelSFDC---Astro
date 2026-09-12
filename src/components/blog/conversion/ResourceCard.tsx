import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon?: string;
  href: string;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  icon = "FileText",
  href,
  className,
}: ResourceCardProps) {
  // Dynamically get icon component
  const IconComponent =
    (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.FileText;

  return (
    <a
      href={href}
      className={cn(
        "group block my-6 rounded-xl border-2 border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-background">
          <IconComponent className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mt-0">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowRight className="shrink-0 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </a>
  );
}

