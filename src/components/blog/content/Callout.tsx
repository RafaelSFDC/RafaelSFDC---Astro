import {
  AlertCircle,
  CheckCircle2,
  Info,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType =
  | "info"
  | "warning"
  | "success"
  | "tip"
  | "danger"
  | "important"
  | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig: Record<
  CalloutType,
  { icon: React.ElementType; className: string; iconClass: string }
> = {
  info: {
    icon: Info,
    className:
      "border-blue-500/20 bg-blue-500/5 text-blue-900 dark:text-blue-100",
    iconClass: "text-blue-600 dark:text-blue-400",
  },
  note: {
    icon: Info,
    className:
      "border-blue-500/20 bg-blue-500/5 text-blue-900 dark:text-blue-100",
    iconClass: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-amber-500/20 bg-amber-500/5 text-amber-900 dark:text-amber-100",
    iconClass: "text-amber-600 dark:text-amber-400",
  },
  success: {
    icon: CheckCircle2,
    className:
      "border-emerald-500/20 bg-emerald-500/5 text-emerald-900 dark:text-emerald-100",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-purple-500/20 bg-purple-500/5 text-purple-900 dark:text-purple-100",
    iconClass: "text-purple-600 dark:text-purple-400",
  },
  danger: {
    icon: AlertCircle,
    className: "border-red-500/20 bg-red-500/5 text-red-900 dark:text-red-100",
    iconClass: "text-red-600 dark:text-red-400",
  },
  important: {
    icon: AlertTriangle,
    className:
      "border-violet-500/20 bg-violet-500/5 text-violet-900 dark:text-violet-100",
    iconClass: "text-violet-600 dark:text-violet-400",
  },
};

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type] || calloutConfig.info;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "group relative my-8 overflow-hidden rounded-xl border p-6 shadow-sm transition-all hover:shadow-md backdrop-blur-sm",
        config.className,
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "shrink-0 rounded-full bg-background/50 p-2 shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/5",
              config.iconClass
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          {title && (
            <h4 className="font-bold text-lg leading-tight tracking-tight mt-0 mb-0">
              {title}
            </h4>
          )}
        </div>
        <div className="text-base leading-relaxed [&>p]:mb-0 [&>p:last-child]:mb-0 opacity-90 pl-1">
          {children}
        </div>
      </div>
    </div>
  );
}
