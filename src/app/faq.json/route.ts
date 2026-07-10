import { NextResponse } from "next/server";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const payload = {
    name: SITE_NAME,
    url: SITE_URL,
    updated: new Date().toISOString().slice(0, 10),
    faqs: FAQ_ITEMS.map((item) => ({
      id: item.id,
      question: item.q,
      answer: item.a,
      url: absoluteUrl(`/faq#${item.id}`),
    })),
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
