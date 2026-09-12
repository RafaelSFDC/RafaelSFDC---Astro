import React from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

/**
 * FAQSection Component
 *
 * Renders a structured FAQ section with automatic Schema.org FAQPage markup
 * for enhanced SEO and rich snippets in Google search results.
 *
 * @example
 * ```tsx
 * <FAQSection
 *   title="Perguntas Frequentes sobre E-commerce"
 *   items={[
 *     {
 *       question: "Preciso de CNPJ para começar a vender online?",
 *       answer: "Não necessariamente. Você pode começar como pessoa física..."
 *     }
 *   ]}
 * />
 * ```
 */
export function FAQSection({ items = [], title, className }: FAQSectionProps) {
  // Generate Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (items || []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* FAQ Section */}
      <section className={cn("my-12", className)}>
        {title && (
          <div className="mb-8 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl border-b-0 pb-0 mb-0 mt-0">
              {title}
            </h2>
          </div>
        )}

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              {/* Question */}
              <h3 className="mb-3 text-xl font-bold tracking-tight md:text-2xl text-foreground flex items-start gap-2 mt-0">
                <span className="text-primary shrink-0 font-mono text-sm mt-1">
                  Q{index + 1}
                </span>
                <span>{item.question}</span>
              </h3>

              {/* Answer */}
              <div className="text-lg leading-relaxed text-foreground/90">
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
