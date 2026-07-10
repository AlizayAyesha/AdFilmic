import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";
import { buildPageMetadata } from "@/lib/seo";
import {
  LEGAL_UPDATED,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms of use for the ${SITE_NAME} website and creative video services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms & Conditions" updated={LEGAL_UPDATED}>
      <p>
        These Terms &amp; Conditions govern your use of {SITE_URL} and any
        project engagement with {SITE_NAME}. If you do not agree, please do not
        use this site.
      </p>

      <h2>1. About the site</h2>
      <p>
        This website showcases {SITE_NAME}&apos;s creative video work and contact
        information. Content is for general information and portfolio display.
      </p>

      <h2>2. Services</h2>
      <p>
        Video production, editing, and related creative services are provided
        under a separate brief, quote, or written agreement. Website content does
        not create a binding production contract until both parties agree in
        writing (including email confirmation of scope and fees).
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        Unless otherwise agreed in a project contract, {SITE_NAME} retains
        ownership of portfolio materials, site design, and branding shown here.
        Client deliverables and usage rights are defined in the project
        agreement. You may not copy, scrape, or republish our work without
        permission.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not misuse the site or attempt unauthorized access</li>
        <li>Do not submit unlawful, harmful, or misleading content</li>
        <li>Do not use automated scraping that harms site performance</li>
      </ul>

      <h2>5. Third-party links</h2>
      <p>
        Links to WhatsApp, social platforms, or embedded media are provided for
        convenience. We are not responsible for third-party sites or their
        policies.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The site is provided &quot;as is.&quot; We do not warrant uninterrupted
        availability or that all portfolio examples remain online indefinitely.
        Project outcomes depend on briefs, assets, and approvals you provide.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} is not liable for
        indirect, incidental, or consequential damages arising from use of this
        website. For paid projects, liability is limited as stated in the
        applicable service agreement.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Personal data is handled as described in our{" "}
        <a href={absoluteUrl("/privacy")}>Privacy Policy</a>.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may revise these terms. Continued use of the site after updates means
        you accept the revised terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
      </p>
    </LegalPageShell>
  );
}
