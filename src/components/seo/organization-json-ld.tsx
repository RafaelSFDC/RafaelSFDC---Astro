import { WithContext, Organization } from "schema-dts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function OrganizationJsonLd() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Rafael Silva Ferreira de Carvalho",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      "Desenvolvimento full-stack com foco em Next.js, performance web, SEO técnico e aplicações sob medida.",
    disambiguatingDescription:
      "Portfólio e serviços de desenvolvimento web para sites, sistemas e experiências digitais de alta performance.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-21-97967-4045",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "SEO Técnico",
      "Performance Web",
      "Arquitetura Frontend",
      "Desenvolvimento Full-Stack",
      "Aplicações SaaS",
    ],
    legalName: "Rafael Silva Ferreira de Carvalho",
    sameAs: [
      "https://github.com/RafaelSFDC",
      "https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
