import { WithContext, SoftwareApplication } from "schema-dts";

export function SoftwareJsonLd() {
  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RafaelSFDC",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://rafaelsfcarvalho.vercel.app",
    description:
      "Blog estratégico com foco em e-commerce, SEO e marketing digital.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
