"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { JSX } from 'react';

type MarkdownRendererProps = {
  content: string;
};

const SyntaxHighlighterComponent = SyntaxHighlighter as unknown as JSX.ElementType;

const components: Components = {
    h1: ({ ...props }) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight text-gray-900 dark:text-white" {...props} />,
    h2: ({ ...props }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 tracking-tight text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2" {...props} />,
    h3: ({ ...props }) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 tracking-tight text-gray-900 dark:text-white" {...props} />,
    p: ({ ...props }) => <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6 text-lg" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700 dark:text-gray-300" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700 dark:text-gray-300" {...props} />,
    li: ({ ...props }) => <li className="" {...props} />,
    blockquote: ({ ...props }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 italic my-8 text-gray-800 dark:text-gray-200 bg-orange-50/50 dark:bg-orange-500/5 py-4 rounded-r-lg" {...props} />
    ),
    code: ({ inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <div className="rounded-xl overflow-hidden my-8 shadow-md">
                <SyntaxHighlighterComponent
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighterComponent>
            </div>
        ) : (
            <code className="bg-orange-100 dark:bg-orange-500/20 px-1.5 py-0.5 rounded text-sm font-mono text-orange-700 dark:text-orange-300 font-semibold" {...props}>
                {children}
            </code>
        );
    },
    a: ({ ...props }) => <a className="text-orange-600 dark:text-orange-400 font-medium underline decoration-orange-500/30 underline-offset-4 hover:decoration-orange-500 transition-all" {...props} />,
    img: ({ ...props }) => (
        <figure className="my-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-auto rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800" {...props} alt={(props as any).alt || ''} />
            {(props as any).title && <figcaption className="text-center text-sm text-gray-500 mt-3">{(props as any).title}</figcaption>}
        </figure>
    ),
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg prose-orange dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
