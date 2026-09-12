import { cn } from "@/lib/utils";

interface AuthorBioProps {
  name: string;
  picture: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
  className?: string;
}

export function AuthorBio({ name, picture, bio, social, className }: AuthorBioProps) {
  return (
    <div
      className={cn(
        "my-12 p-8 rounded-2xl bg-muted/50 border border-border",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0">
          <img
            src={picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full border-2 border-primary/20"
          />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Sobre {name}</h3>
            {bio && (
              <p className="text-muted-foreground leading-relaxed">{bio}</p>
            )}
          </div>
          {social && (Object.keys(social).length > 0) && (
            <div className="flex gap-3 pt-2">
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

