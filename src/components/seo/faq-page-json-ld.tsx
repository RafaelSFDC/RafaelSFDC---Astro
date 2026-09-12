import { WithContext, FAQPage } from "schema-dts";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageJsonLdProps {
  mainEntity: FAQItem[];
}

export function FAQPageJsonLd({ mainEntity = [] }: FAQPageJsonLdProps) {
  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (mainEntity || []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
