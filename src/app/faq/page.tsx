import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq-data";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_EMAIL, SITE_NAME, SITE_WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description: `Frequently asked questions about ${SITE_NAME} video production, process, pricing, and privacy.`,
  path: "/faq",
});

export default function FaqPage() {
  const jsonLd = faqJsonLd();

  return (
    <>
      <Nav />
      <main id="main" className="legal-page">
        <div className="legal-inner">
          <p className="label">Help</p>
          <h1 className="display legal-title">Frequently Asked Questions</h1>
          <p className="legal-updated">
            Straight answers about {SITE_NAME}, our process, and how to start a
            project.
          </p>

          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <article key={item.id} id={item.id} className="faq-item">
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </article>
            ))}
          </div>

          <div className="faq-cta">
            <p>Still have a question?</p>
            <div className="hero-actions">
              <a className="btn-grad" href={`mailto:${SITE_EMAIL}`}>
                Email us
              </a>
              <a
                className="btn-ghost"
                href={SITE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="legal-back">
              <Link href="/">← Back to home</Link>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
