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
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects personal information when you visit our website or contact us.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" updated={LEGAL_UPDATED}>
      <p>
        This Privacy Policy explains how {SITE_NAME} (&quot;we&quot;, &quot;us&quot;)
        handles information when you visit {SITE_URL}, contact us, or use our
        services. By using this website, you agree to this policy.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {SITE_NAME} is a creative video studio founded by Shayan Ali Khan. For
        privacy questions, email{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you send us (name, email, phone,
          project brief) via email, WhatsApp, or forms.
        </li>
        <li>
          <strong>Technical data</strong> such as IP address, browser type,
          device, and pages visited — typically via hosting logs or analytics if
          you consent to cookies.
        </li>
        <li>
          <strong>Cookie preferences</strong> stored in your browser when you
          accept or decline optional cookies.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To respond to inquiries and deliver video production services</li>
        <li>To operate, secure, and improve this website</li>
        <li>To measure traffic (only if you allow analytics cookies)</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>4. Cookies</h2>
      <p>
        Essential cookies keep the site working. Optional cookies (e.g.
        analytics) run only with your consent. See our{" "}
        <a href={absoluteUrl("/cookies")}>Cookie Policy</a>.
      </p>

      <h2>5. Sharing</h2>
      <p>
        We may share data with trusted providers who help us run the site
        (hosting, email delivery) under appropriate safeguards, or when required
        by law.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep project and contact records as long as needed for the
        relationship and legitimate business or legal purposes, then delete or
        anonymize them when no longer required.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your location, you may request access, correction, deletion,
        or restriction of your personal data. Contact{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> to make a request.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect
        information. No method of transmission over the internet is 100% secure.
      </p>

      <h2>9. Children</h2>
      <p>
        This site is not directed at children under 16. We do not knowingly
        collect their personal data.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot;
        date at the top will change when we do.
      </p>

      <h2>11. Contact</h2>
      <p>
        Privacy requests:{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
      </p>
    </LegalPageShell>
  );
}
