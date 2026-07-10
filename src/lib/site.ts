/** Canonical site config for SEO, legal pages, and AEO. */

export const SITE_NAME = "AdFilmic";
export const SITE_TAGLINE = "Video Production Studio";
export const SITE_FOUNDER = "Shayan Ali Khan";
export const SITE_EMAIL = "Shayanali317@gmail.com";
export const SITE_WHATSAPP = "+92 315 2675490";
export const SITE_WHATSAPP_URL = "https://wa.me/923152675490";

/** Replace with your real Calendly scheduling link. */
export const SITE_CALENDLY_URL = (
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/shayanali317/30min"
).replace(/\/$/, "");

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://adfilmic.com"
).replace(/\/$/, "");

export const SOCIAL = {
  instagram: "https://instagram.com/shayanalikhan76",
  youtube: "https://youtube.com/@shayanalikhan317",
  facebook: "https://facebook.com/shayanali3170",
} as const;

export const LEGAL_UPDATED = "July 10, 2026";

export function absoluteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "" : p}`;
}
