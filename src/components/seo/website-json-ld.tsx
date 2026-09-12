import { WithContext, WebSite } from "schema-dts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function WebsiteJsonLd() {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
