export interface TocItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Extrai headings (h2 e h3) do conteúdo markdown para gerar Table of Contents
 */
export function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/-+/g, "-") // Remove hífens duplicados
      .trim();

    headings.push({ id, title, level });
  }

  return headings;
}

/**
 * Calcula o tempo estimado de leitura baseado no conteúdo
 * Assume 200 palavras por minuto
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min leitura`;
}

/**
 * Busca posts relacionados baseado em tags e categoria
 */
export function getRelatedPosts<
  T extends { slug: string; tags?: string[]; category?: string }
>(currentPost: T, allPosts: T[], limit = 3): T[] {
  if (!currentPost.tags && !currentPost.category) {
    // Se não tem tags nem categoria, retorna posts mais recentes
    return allPosts
      .filter((post) => post.slug !== currentPost.slug)
      .slice(0, limit);
  }

  // Calcula score de relevância para cada post
  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;

      // Mesma categoria = +3 pontos
      if (currentPost.category && post.category === currentPost.category) {
        score += 3;
      }

      // Tags em comum = +1 ponto por tag
      if (currentPost.tags && post.tags) {
        const commonTags = currentPost.tags.filter((tag) =>
          post.tags?.includes(tag)
        );
        score += commonTags.length;
      }

      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  // Retorna os posts com maior score
  const relatedPosts = postsWithScore.slice(0, limit).map(({ post }) => post);

  // Se não encontrou posts relacionados suficientes, completa com posts recentes
  if (relatedPosts.length < limit) {
    const remaining = allPosts
      .filter(
        (post) =>
          post.slug !== currentPost.slug &&
          !relatedPosts.find((rp) => rp.slug === post.slug)
      )
      .slice(0, limit - relatedPosts.length);

    relatedPosts.push(...remaining);
  }

  return relatedPosts;
}

/**
 * Busca full-text em posts
 */
export function searchPosts<
  T extends { title: string; excerpt: string; content?: string }
>(query: string, posts: T[]): T[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return posts;

  return posts.filter((post) => {
    const searchableText = [post.title, post.excerpt, post.content || ""]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/**
 * Filtra posts por categoria
 */
export function filterByCategory<T extends { category?: string }>(
  posts: T[],
  category: string
): T[] {
  if (!category) return posts;
  return posts.filter((post) => post.category === category);
}

/**
 * Filtra posts por tag
 */
export function filterByTag<T extends { tags?: string[] }>(
  posts: T[],
  tag: string
): T[] {
  if (!tag) return posts;
  return posts.filter((post) => post.tags?.includes(tag));
}

/**
 * Obtém todas as categorias únicas dos posts
 */
export function getAllCategories<T extends { category?: string }>(
  posts: T[]
): string[] {
  const categories = new Set<string>();
  posts.forEach((post) => {
    if (post.category) categories.add(post.category);
  });
  return Array.from(categories).sort();
}

/**
 * Obtém todas as tags únicas dos posts
 */
export function getAllTags<T extends { tags?: string[] }>(
  posts: T[]
): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
