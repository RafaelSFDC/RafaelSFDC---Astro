"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Clock, Calendar } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { TableOfContents, TocItem } from "./TableOfContents";
import { ShareButtons } from "./ShareButtons";
import { AuthorBio } from "./AuthorBio";
import { RelatedPosts } from "../conversion/RelatedPosts";
import { NewsletterBox } from "../conversion/NewsletterBox";

interface Author {
  name: string;
  picture: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

interface BlogLayoutProps {
  title: string;
  date: string;
  readingTime?: number;
  coverImage?: string;
  author: Author;
  children: React.ReactNode;
  tableOfContents?: TocItem[];
  relatedPosts?: RelatedPost[];
  postUrl: string;
}

export function BlogLayout({
  title,
  date,
  readingTime,
  coverImage,
  author,
  children,
  tableOfContents = [],
  relatedPosts = [],
  postUrl,
}: BlogLayoutProps) {
  return (
    <>
      <ProgressBar />
      
      <article className="relative">
        {/* Header */}
        <header className="container mx-auto px-4 md:px-6 pt-12 pb-8 max-w-4xl">
          <div className="text-center space-y-6">
            {/* Meta info */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {format(new Date(date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                </time>
              </div>
              {readingTime && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime} min de leitura</span>
                  </div>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <img
                src={author.picture}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-primary/20"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">{author.name}</div>
                <div className="text-sm text-muted-foreground">Autor</div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          {coverImage && (
            <div className="mt-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={coverImage}
                alt={title}
                width={1200}
                height={675}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Table of Contents - Desktop Sidebar */}
              {tableOfContents.length > 0 && (
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-24 space-y-6">
                    <TableOfContents items={tableOfContents} />
                    <div className="pt-6 border-t border-border">
                      <ShareButtons url={postUrl} title={title} className="flex-col items-start" />
                    </div>
                  </div>
                </aside>
              )}

              {/* Article Content */}
              <div className={tableOfContents.length > 0 ? "lg:col-span-9" : "lg:col-span-12"}>
                <div className="max-w-3xl mx-auto">
                  {/* Mobile Share Buttons */}
                  <div className="lg:hidden mb-8 pb-8 border-b border-border">
                    <ShareButtons url={postUrl} title={title} />
                  </div>

                  {/* MDX Content */}
                  <div className="prose-blog">
                    {children}
                  </div>

                  {/* Newsletter CTA */}
                  <NewsletterBox />

                  {/* Author Bio */}
                  <AuthorBio
                    name={author.name}
                    picture={author.picture}
                    bio={author.bio}
                    social={author.social}
                  />

                  {/* Bottom Share */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Gostou do artigo?</h3>
                        <p className="text-sm text-muted-foreground">Compartilhe com sua rede!</p>
                      </div>
                      <ShareButtons url={postUrl} title={title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <RelatedPosts posts={relatedPosts} />
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

