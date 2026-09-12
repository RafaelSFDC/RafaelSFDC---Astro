import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InlineCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function InlineCTA({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: InlineCTAProps) {
  return (
    <div
      className={cn("my-8 rounded-2xl p-8 shadow-sm bg-primary ", className)}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1 space-y-2">
          <h3 className="text-2xl font-bold text-background! mt-0">{title}</h3>
          <p className="text-background leading-relaxed mb-0">{description}</p>
        </div>
        <div className="shrink-0">
          <a href={buttonHref}>
            <Button size="lg" variant="outline">
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

