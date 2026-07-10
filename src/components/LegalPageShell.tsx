import Link from "next/link";
import Nav from "./Nav";
import SiteFooter from "./SiteFooter";

type Props = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPageShell({ title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main id="main" className="legal-page">
        <div className="legal-inner">
          <p className="label">Legal</p>
          <h1 className="display legal-title">{title}</h1>
          <p className="legal-updated">Last updated: {updated}</p>
          <div className="legal-body">{children}</div>
          <p className="legal-back">
            <Link href="/">← Back to home</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
