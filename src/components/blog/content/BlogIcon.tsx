import React from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Check,
  X,
  Star,
  Sparkles,
  Zap,
  DollarSign,
  TrendingUp,
  BarChart,
  PieChart,
  Rocket,
  Lightbulb,
  Info,
  AlertTriangle,
  AlertCircle,
  Clock,
  Calendar,
  Target,
  Search,
  Link,
  Quote,
  FileText,
  ThumbsUp,
  ThumbsDown,
  Heart,
  MessageCircle,
  Share2,
  Download,
  ExternalLink,
  Play,
  Pause,
  Settings,
  User,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flame,
  MousePointer2,
  ShoppingBag,
  Video,
  Radio,
  Users,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  // Arrows
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  "arrow-up": ArrowUp,

  // Status
  check: Check,
  x: X,
  "check-circle": CheckCircle2,
  "x-circle": XCircle,
  help: HelpCircle,

  // Emphasis
  star: Star,
  sparkles: Sparkles,
  zap: Zap,
  flame: Flame,
  rocket: Rocket,
  lightbulb: Lightbulb,

  // Business / Data
  dollar: DollarSign,
  "trending-up": TrendingUp,
  "bar-chart": BarChart,
  "pie-chart": PieChart,
  target: Target,

  // Interaction
  "thumbs-up": ThumbsUp,
  "thumbs-down": ThumbsDown,
  heart: Heart,
  message: MessageCircle,
  share: Share2,
  mouse: MousePointer2,

  // Meta
  clock: Clock,
  calendar: Calendar,
  search: Search,
  link: Link,
  "external-link": ExternalLink,
  quote: Quote,
  file: FileText,
  info: Info,
  alert: AlertTriangle,
  warning: AlertTriangle,
  error: AlertCircle,

  // Media
  play: Play,
  pause: Pause,
  download: Download,

  // User
  user: User,
  settings: Settings,

  // Commerce & Tech (New)
  "shopping-bag": ShoppingBag,
  video: Video,
  radio: Radio,
  users: Users,
  smartphone: Smartphone,
} as const;

export type IconName = keyof typeof iconMap;

interface BlogIconProps {
  name: IconName | string;
  className?: string;
  size?: number | string;
  color?: string;
  inline?: boolean;
}

export function BlogIcon({
  name,
  className,
  size = 24,
  color,
  inline = false,
}: BlogIconProps) {
  // Normalize name to lowercase
  const normalizedName = name.toLowerCase() as IconName;
  const IconComponent = iconMap[normalizedName];

  if (!IconComponent) {
    console.warn(`BlogIcon: Icon "${name}" not found.`);
    return null;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center align-middle text-primary",
        inline ? "mx-1" : "my-2 mx-auto",
        className,
      )}
    >
      <IconComponent
        size={size}
        color={color}
        className={cn(inline ? "relative -top-px" : "")}
      />
    </span>
  );
}
