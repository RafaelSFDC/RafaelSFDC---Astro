import { WithContext, Product, Offer } from "schema-dts";

interface ProductJsonLdProps {
  name: string;
  description: string;
  images: string[];
  sku?: string;
  brand?: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability:
      | "https://schema.org/InStock"
      | "https://schema.org/OutOfStock";
    url: string;
  };
}

export function ProductJsonLd({
  name,
  description,
  images,
  sku,
  brand,
  offers,
}: ProductJsonLdProps) {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: images,
    sku: sku,
    brand: brand
      ? {
          "@type": "Brand",
          name: brand,
        }
      : undefined,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: offers.availability,
      url: offers.url,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
