import { WithContext, SoftwareApplication } from "schema-dts";

interface SoftwareApplicationJsonLdProps {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  price?: string;
  currency?: string;
  ratingValue?: number;
  ratingCount?: number;
  screenshot?: string;
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  applicationCategory,
  operatingSystem = "Web Browser",
  price = "0.00",
  currency = "BRL",
  ratingValue = 4.8,
  ratingCount = 1250,
  screenshot,
}: SoftwareApplicationJsonLdProps) {
  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      ratingCount: ratingCount,
    },
  };

  if (screenshot) {
    jsonLd.screenshot = screenshot;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
