"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface BlogsListProps {
  allPosts: Partial<Post>[];
  initialFeaturedPost: Partial<Post> | undefined;
  initialRegularPosts: Partial<Post>[];
}

export function BlogsList({
  allPosts,
  initialFeaturedPost,
  initialRegularPosts,
}: BlogsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...Array.from(
      new Set(
        allPosts
          .map((post) => post.category)
          .filter((category): category is string => !!category)
      )
    ).sort(),
  ];

  const activePosts =
    searchQuery || selectedCategory !== "Todos"
      ? allPosts
      : initialRegularPosts;

  const filteredPosts = activePosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const showFeatured =
    !searchQuery && selectedCategory === "Todos" && initialFeaturedPost;

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
          <Input
            placeholder="Buscar por tema, artigo ou tutorial..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-on-surface placeholder:text-on-surface-variant/50"
          />
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-transparent gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-xl border border-white/10 data-[state=active]:bg-surface-tint/10 data-[state=active]:text-surface-tint data-[state=active]:border-surface-tint/20 hover:bg-white/5 text-on-surface-variant"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Featured Post */}
      {showFeatured && (
        <a href={`/blog/${initialFeaturedPost.slug}`}>
          <div className="glass-card rounded-2xl overflow-hidden group hover:border-surface-tint/30 transition-all cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  alt={initialFeaturedPost.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={initialFeaturedPost.coverImage}
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-surface-tint/90 backdrop-blur text-on-primary-container hover:bg-surface-tint border-none shadow-sm rounded-xl px-3 py-1">
                    Destaque
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-xs font-medium text-on-surface-variant">
                  <span className="text-surface-tint">
                    {initialFeaturedPost.category}
                  </span>
                  <span>•</span>
                  <span>
                    {initialFeaturedPost.date &&
                      formatDate(initialFeaturedPost.date)}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-surface-tint transition-colors">
                  {initialFeaturedPost.title}
                </h3>
                <p className="text-on-surface-variant mb-8 text-base leading-relaxed line-clamp-3">
                  {initialFeaturedPost.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-background shadow-sm">
                    <AvatarImage src={initialFeaturedPost.author?.picture} />
                    <AvatarFallback>
                      {initialFeaturedPost.author?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-semibold text-on-surface">
                      {initialFeaturedPost.author?.name}
                    </p>
                    <p className="text-on-surface-variant">
                      {initialFeaturedPost.author?.bio?.substring(0, 50)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Posts Grid */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="font-headline-md text-headline-md mb-2">Posts Recentes</h3>
            <p className="text-on-surface-variant">
              Conteúdos práticos para seu negócio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`}>
              <div className="glass-card rounded-2xl overflow-hidden group h-full hover:border-surface-tint/30 transition-all cursor-pointer flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={post.coverImage}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-label-sm text-label-sm text-surface-tint mb-3 uppercase tracking-wider">
                    {post.category}
                  </p>
                  <h4 className="font-headline-md text-headline-md mb-2 group-hover:text-surface-tint transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-auto border-t border-white/10 flex items-center justify-between text-xs text-on-surface-variant">
                    <span>{post.date && formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="size-3" />
                      {Math.floor(Math.random() * 3000) + 1000}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="glass-card p-12 rounded-2xl text-center border-dashed border-white/10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/5 p-4 rounded-full">
                <Search className="size-8 text-on-surface-variant" />
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2">
              Nenhum post encontrado
            </h3>
            <p className="text-on-surface-variant max-w-sm mx-auto">
              Não encontramos nenhum post com os filtros atuais. Tente buscar
              por outros termos ou categorias.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


