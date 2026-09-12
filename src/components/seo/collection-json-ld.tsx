import { WithContext, CollectionPage, ListItem } from "schema-dts";

interface CollectionJsonLdProps {
  name: string;
  description: string;
  url: string;
  items: {
    name: string;
    url: string;
    position?: number;
  }[];
}

export function CollectionJsonLd({
  name,
  description,
  url,
  items,
}: CollectionJsonLdProps) {
  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: name,
    description: description,
    url: url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: item.position || index + 1,
        url: item.url,
        name: item.name,
      })) as ListItem[],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
