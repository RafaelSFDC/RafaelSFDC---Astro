// Compat Astro: o MDX original usava next-mdx-remote (Next-only).
// Nesta migração o render do blog usa MarkdownRenderer (react-markdown, idêntico visual).
// Este wrapper mantém o import antigo funcionando sem quebrar o build.
import { MarkdownRenderer } from '@/components/blog/markdown-renderer';

export function MDXContent({ source }: { source: string }) {
  return MarkdownRenderer({ content: source });
}

export default MDXContent;
