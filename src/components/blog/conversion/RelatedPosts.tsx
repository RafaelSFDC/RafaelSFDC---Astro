import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  className?: string;
}

export function RelatedPosts({ posts, className }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className={cn("my-12", className)}>
      <h2 className="text-2xl font-bold text-foreground mb-6">Leia também</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            {post.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex-1 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {format(new Date(post.date), "d MMM, yyyy", { locale: ptBR })}
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary pt-2">
                Ler artigo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

