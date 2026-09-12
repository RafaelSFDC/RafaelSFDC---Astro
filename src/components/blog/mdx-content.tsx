// Compat Astro: o MDX original usava next-mdx-remote (Next-only, sem suporte no Astro/Cloudflare).
// O render do blog usa MarkdownRenderer (react-markdown) + FAQSection dedicada.
// Este módulo mantém a mesma API (`MDXContent({ source })`) sem quebrar o build/dev.
import { MarkdownRenderer } from '@/components/blog/markdown-renderer';

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return MarkdownRenderer({ content: source });
}

export default MDXContent;
