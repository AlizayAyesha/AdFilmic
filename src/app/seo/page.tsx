import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO, Indexing & Performance",
  description: `Sitemap, robots, AEO feeds, and page-speed / Search Console checklist for ${SITE_NAME}.`,
  path: "/seo",
});

const machineFeeds = [
  { href: "/sitemap.xml", label: "Sitemap", note: "All public URLs for crawlers" },
  { href: "/robots.txt", label: "Robots.txt", note: "Crawl rules + sitemap pointer" },
  { href: "/llms.txt", label: "llms.txt", note: "Guidance for AI answer engines" },
  { href: "/faq.json", label: "FAQ JSON", note: "Machine-readable Q&A" },
  { href: "/entity.json", label: "Entity JSON", note: "Organization profile for AEO" },
];

const checklist = [
  "Confirm NEXT_PUBLIC_SITE_URL matches your live domain (HTTPS)",
  "Submit sitemap.xml in Google Search Console and Bing Webmaster Tools",
  "Request indexing for the homepage and /faq after deploy",
  "Run PageSpeed Insights on mobile + desktop; fix Core Web Vitals if flagged",
  "Verify Privacy, Terms, and Cookies are linked in the footer",
  "Keep titles and meta descriptions unique per page",
];

export default function SeoPage() {
  const psiUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(SITE_URL)}`;
  const gscUrl = "https://search.google.com/search-console";

  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-inner">
          <p className="label">SEO · AEO · Performance</p>
          <h1 className="display legal-title">Indexing &amp; Site Health</h1>
          <p className="legal-updated">
            Tools and feeds that help {SITE_NAME} stay findable, fast, and
            citable — for search engines and answer engines.
          </p>

          <h2 className="seo-section-title">Machine-readable feeds</h2>
          <ul className="seo-feed-list">
            {machineFeeds.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
                <span>{item.note}</span>
              </li>
            ))}
          </ul>

          <h2 className="seo-section-title">External tests</h2>
          <div className="hero-actions" style={{ marginBottom: 28 }}>
            <a className="btn-grad" href={psiUrl} target="_blank" rel="noopener noreferrer">
              PageSpeed Insights
            </a>
            <a className="btn-ghost" href={gscUrl} target="_blank" rel="noopener noreferrer">
              Google Search Console
            </a>
          </div>
          <p className="legal-body" style={{ marginBottom: 28 }}>
            SERP rankings come from indexing + content quality — there is no
            &quot;SERP page&quot; to host. Use Search Console for impressions and
            PageSpeed Insights for Core Web Vitals.
          </p>

          <h2 className="seo-section-title">Launch checklist</h2>
          <ul className="seo-checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="legal-updated" style={{ marginTop: 28 }}>
            Canonical site: <a href={SITE_URL}>{SITE_URL}</a>
            {" · "}
            FAQ hub: <a href={absoluteUrl("/faq")}>{absoluteUrl("/faq")}</a>
          </p>

          <p className="legal-back">
            <Link href="/">← Back to home</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
