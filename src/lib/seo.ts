import type { Metadata } from "next";
import {
  SITE_EMAIL,
  SITE_FOUNDER,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SITE_WHATSAPP,
  SOCIAL,
  absoluteUrl,
} from "./site";

/** Primary search phrases — used in metadata and structured data, not stuffed into copy. */
export const SITE_KEYWORDS = [
  "AdFilmic",
  "video production studio",
  "brand commercials",
  "documentary filmmaking",
  "YouTube video editing",
  "product films",
  "short-form content",
  "Reels and Shorts editing",
  "motion graphics",
  "AI video production",
  "creative direction",
  "cinematic video editing",
  "Shayan Ali Khan",
  "video production Pakistan",
] as const;

export const SITE_DESCRIPTION =
  "AdFilmic is a creative video production studio for brand commercials, documentary filmmaking, YouTube editing, product films, short-form content, motion graphics, and AI-assisted video — led by Shayan Ali Khan.";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  keywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} · ${SITE_NAME}`;
  const kw = keywords ?? [...SITE_KEYWORDS];

  return {
    title: fullTitle,
    description,
    keywords: kw,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const defaultHomeMetadata = buildPageMetadata({
  title: `${SITE_NAME} — Video Production Studio | Brand Commercials & Documentaries`,
  description: SITE_DESCRIPTION,
  path: "/",
});

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Ad Filmic",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_WHATSAPP.replace(/\s/g, "-"),
    image: absoluteUrl("/"),
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    founder: {
      "@type": "Person",
      name: SITE_FOUNDER,
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    knowsAbout: [...SITE_KEYWORDS],
    sameAs: [SOCIAL.instagram, SOCIAL.youtube, SOCIAL.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video production services",
      itemListElement: [
        "Brand commercials",
        "YouTube production and editing",
        "Documentary filmmaking",
        "AI-assisted video production",
        "Short-form content",
        "Product films",
        "Motion graphics",
        "Creative direction and strategy",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}
