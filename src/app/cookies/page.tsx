import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";
import { buildPageMetadata } from "@/lib/seo";
import {
  LEGAL_UPDATED,
  SITE_EMAIL,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description: `How ${SITE_NAME} uses cookies and similar technologies on this website.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPageShell title="Cookie Policy" updated={LEGAL_UPDATED}>
      <p>
        This Cookie Policy explains how {SITE_NAME} uses cookies and similar
        technologies. For broader data practices, see our{" "}
        <a href={absoluteUrl("/privacy")}>Privacy Policy</a>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device. They help websites
        remember preferences, keep sessions secure, and (with consent) measure
        how the site is used.
      </p>

      <h2>2. Cookies we use</h2>
      <h3>Essential</h3>
      <ul>
        <li>
          <strong>Theme preference</strong> — remembers light/dark mode
        </li>
        <li>
          <strong>Cookie consent choice</strong> — stores whether you accepted
          optional cookies
        </li>
      </ul>
      <h3>Optional (analytics)</h3>
      <p>
        If you choose &quot;Accept all,&quot; we may use analytics cookies to
        understand traffic and improve the site. These are not required for
        browsing.
      </p>

      <h2>3. Your choices</h2>
      <p>
        On first visit you can accept all cookies or keep essential only. You can
        also clear site data in your browser settings at any time.
      </p>

      <h2>4. How long cookies last</h2>
      <p>
        Session cookies expire when you close the browser. Preference cookies may
        persist until you clear them or we update our consent tools.
      </p>

      <h2>5. Contact</h2>
      <p>
        Cookie questions: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
      </p>
    </LegalPageShell>
  );
}
