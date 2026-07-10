import { NextResponse } from "next/server";
import { SITE_EMAIL, SITE_FOUNDER, SITE_NAME, SITE_TAGLINE, SITE_URL, SOCIAL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    alternateName: "Ad Filmic",
    description: SITE_TAGLINE,
    url: SITE_URL,
    email: SITE_EMAIL,
    founder: {
      "@type": "Person",
      name: SITE_FOUNDER,
    },
    sameAs: Object.values(SOCIAL),
    knowsAbout: [
      "Brand commercials",
      "YouTube production",
      "Documentary filmmaking",
      "AI-assisted video production",
      "Short-form content",
      "Product films",
      "Motion graphics",
    ],
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
