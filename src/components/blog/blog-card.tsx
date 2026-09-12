import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

// Map of slugs to Unsplash images to ensure high quality visuals
const BLOG_IMAGES: Record<string, string> = {
  "automacao-whatsapp-fluxos": "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
  "checkout-transparente-vs-redirect": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
  "como-criar-loja-virtual-2026": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  "o-que-e-crm-loja-virtual": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  "recuperar-carrinhos-abandonados": "https://images.unsplash.com/photo-1472851294608-4155224152cd?q=80&w=2070&auto=format&fit=crop",
  "vender-mais-whatsapp-2026": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const imageUrl = BLOG_IMAGES[post.slug] || BLOG_IMAGES.default;

  if (featured) {
    return (
      <a href={`/blog/${post.slug}`} className="group relative grid grid-cols-1 overflow-hidden rounded-3xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 lg:grid-cols-2 lg:gap-8">
        <div className="relative h-64 w-full overflow-hidden lg:h-full">
            {/* Overlay Gradient for image text readibility if needed, though side-by-side relies less on it */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-10">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
             <Badge variant="secondary" className="rounded-full">Destaque</Badge>
             <span className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {format(new Date(post.date), "d 'de' MMM, yyyy", { locale: ptBR })}
             </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl group-hover:text-primary transition-colors mb-4">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-lg mb-6 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
             <div className="flex items-center gap-3">
                {post.author?.picture && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                        src={post.author.picture} 
                        alt={post.author.name} 
                        className="h-10 w-10 rounded-full object-cover border"
                    />
                )}
                <div>
                    <p className="text-sm font-semibold text-foreground">{post.author?.name}</p>
                    <p className="text-xs text-muted-foreground">Editor</p>
                </div>
             </div>
             <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                Ler artigo <ArrowRight className="h-4 w-4" />
             </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
            <Badge className="bg-background/80 backdrop-blur text-foreground border-none hover:bg-background/90 transition-colors">
                Artigo
            </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
             <span className="flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {format(new Date(post.date), "d MMM, yyyy", { locale: ptBR })}
             </span>
             <span>•</span>
             <span className="flex items-center gap-1">
                 <Clock className="h-3 w-3" />
                 5 min de leitura
             </span>
        </div>
        <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
                 {post.author?.picture && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                        src={post.author.picture} 
                        alt={post.author.name} 
                        className="h-6 w-6 rounded-full object-cover border"
                    />
                )}
                <span className="text-xs font-medium text-muted-foreground">{post.author?.name}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </a>
  );
}

