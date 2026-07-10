import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
