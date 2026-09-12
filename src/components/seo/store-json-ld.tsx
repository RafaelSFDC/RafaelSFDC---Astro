import { WithContext, Organization, Store } from "schema-dts";

interface StoreJsonLdProps {
  name: string;
  url: string;
  logo?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function StoreJsonLd({
  name,
  url,
  logo,
  telephone,
  address,
  sameAs,
}: StoreJsonLdProps) {
  const jsonLd: WithContext<Store> = {
    "@context": "https://schema.org",
    "@type": "Store", // More specific than Organization
    name: name,
    url: url,
    logo: logo,
    telephone: telephone,
    address: address
      ? {
          "@type": "PostalAddress",
          ...address,
        }
      : undefined,
    sameAs: sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
