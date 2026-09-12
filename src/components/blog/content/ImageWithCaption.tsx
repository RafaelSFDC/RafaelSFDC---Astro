import { cn } from "@/lib/utils";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
  className,
}: ImageWithCaptionProps) {
  return (
    <figure className={cn("my-8 space-y-3", className)}>
      <div className="relative rounded-xl overflow-hidden border border-border shadow-lg bg-muted group">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

