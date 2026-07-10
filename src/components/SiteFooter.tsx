import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";
import { SITE_FOUNDER, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const legalLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  // SEO checklist page — only linked in local development
  ...(process.env.NODE_ENV !== "production"
    ? [{ href: "/seo", label: "SEO" }]
    : []),
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-main">
        <div>
          <div className="footer-brand">{SITE_NAME}</div>
          <div className="footer-tagline">{SITE_TAGLINE}</div>
          <div className="footer-founder">Founded by {SITE_FOUNDER}</div>
        </div>
        <SocialIcons className="footer-socials" />
        <ul className="footer-legal">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} {SITE_NAME}. All rights reserved.
          </div>
          <a
            className="footer-credit"
            href="https://zarlabs.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Zarlabs
          </a>
        </div>
      </div>
    </footer>
  );
}
