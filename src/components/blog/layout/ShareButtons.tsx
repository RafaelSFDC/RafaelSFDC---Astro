"use client";

import { useState } from "react";
import { Facebook, Linkedin, Twitter, Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm font-medium text-muted-foreground mr-2">Compartilhar:</span>
      
      <Button
        variant="outline"
        size="sm"
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no LinkedIn"
        >
          <aedin className="h-4 w-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="h-9 w-9 p-0"
        aria-label="Copiar link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <aIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

