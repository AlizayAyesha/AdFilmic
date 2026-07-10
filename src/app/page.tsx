import Nav from "@/components/Nav";
import FadeUp from "@/components/FadeUp";
import SlideLeft from "@/components/SlideLeft";
import WorkCard from "@/components/WorkCard";
import SiteFooter from "@/components/SiteFooter";
import SocialIcons from "@/components/SocialIcons";
import { faqJsonLd } from "@/lib/faq-data";
import {
  SITE_EMAIL,
  SITE_WHATSAPP,
  SITE_WHATSAPP_URL,
} from "@/lib/site";

const services = [
  { num: "01", name: "Brand Commercials" },
  { num: "02", name: "YouTube Production & Editing" },
  { num: "03", name: "Documentary Filmmaking" },
  { num: "04", name: "AI-Assisted Video Production" },
  { num: "05", name: "Short-Form Content" },
  { num: "06", name: "Product Films" },
  { num: "07", name: "Motion Graphics" },
  { num: "08", name: "Creative Direction & Strategy" },
];

const whyItems = [
  {
    title: "Precision Editing",
    text: "Every cut, transition, and pause is deliberate — shaped for clarity, rhythm, and impact.",
  },
  {
    title: "Narrative First",
    text: "We build each project around a clear story, so the message lands before the visuals impress.",
  },
  {
    title: "Modern Production Tools",
    text: "AI and advanced workflows expand what is possible — without compromising craft or brand standards.",
  },
  {
    title: "Reliable Delivery",
    text: "Clear timelines, structured revisions, and on-schedule handoff — every project.",
  },
  {
    title: "Brand Alignment",
    text: "Creative decisions are guided by your positioning, audience, and long-term brand goals.",
  },
  {
    title: "Audience Retention",
    text: "Pacing, structure, and openings designed to hold attention across platforms and formats.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Discovery",
    desc: "We align on objectives, audience, tone, and success metrics before production begins.",
  },
  {
    n: "2",
    title: "Creative Planning",
    desc: "Script, visual references, and a defined production plan — approved before we move forward.",
  },
  {
    n: "3",
    title: "Production",
    desc: "Editing, motion, sound, and AI-assisted assets developed to the agreed creative direction.",
  },
  {
    n: "4",
    title: "Review",
    desc: "Focused revision rounds with clear feedback cycles until the work meets the brief.",
  },
  {
    n: "5",
    title: "Delivery",
    desc: "Final files prepared for your platforms — social, YouTube, web, or broadcast — ready to publish.",
  },
];

const portfolioItems = [
  {
    videoSrc:
      "https://www.youtube.com/embed/videoseries?list=PLplaceholder1&autoplay=1",
    category: "Documentary",
    title: "Dabba Mafia — Thynk Crime",
    description:
      "Investigative documentary examining Pakistan’s fake call-center networks. Research-led and bilingual.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/placeholder2?autoplay=1",
    category: "AI Commercial",
    title: "Bisconni Cocomo — Product Film",
    description:
      "Vertical product commercial produced with AI-assisted pipelines for Instagram and paid social.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/placeholder3?autoplay=1",
    category: "Content Series",
    title: "One Word Series",
    description:
      "Short-form series built around a single concept per episode — designed for retention and shareability.",
  },
];

export default function Home() {
  const faqLd = faqJsonLd();

  return (
    <>
      <Nav />

      <main id="main">
        <section id="hero">
          <div className="hero-glow" />
          <div className="hero-inner">
            <div className="hero-eyebrow">Video Production Studio</div>
            <h1 className="display hero-title">
              Every Frame
              <br />
              Has a Purpose.
            </h1>
            <p className="hero-sub">
              AdFilmic is a video production studio for brand commercials,
              documentary filmmaking, YouTube editing, product films, and
              short-form content — cinematic storytelling with precise craft.
            </p>
            <div className="hero-actions">
              <a className="btn-grad" href="#portfolio">
                View Work
              </a>
              <a className="btn-ghost" href="#contact">
                Start a Project
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <FadeUp className="about-grid">
            <div>
              <span className="about-tag">About AdFilmic</span>
              <h2 className="display section-title-text">
                Strategy, craft, and clarity in every frame.
              </h2>
              <span className="rule" />
              <div className="about-body about-body-spaced">
                <p>
                  AdFilmic is a creative video production studio specializing in
                  brand commercials, documentary filmmaking, YouTube production,
                  motion graphics, and AI-assisted video — with professional
                  editing and clear creative direction on every project.
                </p>
                <p>
                  We partner with brands and creators who need cinematic video
                  that communicates with intention: strong pacing, platform-ready
                  delivery, and production quality built for Reels, Shorts,
                  YouTube, and paid social.
                </p>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-visual-inner">
                <span>AF</span>
                <small>Creative Video Studio</small>
              </div>
            </div>
          </FadeUp>
        </section>

        <section id="founder" className="section section-alt">
          <FadeUp className="founder-inner">
            <div className="founder-ident">
              <SlideLeft className="founder-photo">
                <img
                  src="/images/shayan-ali-khan.png"
                  alt="Shayan Ali Khan, Founder of AdFilmic"
                  width={853}
                  height={845}
                />
              </SlideLeft>
              <span className="label">Founder</span>
              <h2 className="display founder-name">Shayan Ali Khan</h2>
              <p className="founder-role">Founder, AdFilmic</p>
            </div>
            <div>
              <p className="founder-desc">
                Shayan Ali Khan leads creative direction and video production at
                AdFilmic, with a focus on documentary filmmaking, brand
                commercials, product films, and high-retention short-form
                content. Each project follows the same standard: clear narrative,
                disciplined editing, and delivery that serves the brand.
              </p>
              <a className="btn-grad btn-grad-inline" href="#contact">
                Discuss a Project
              </a>
            </div>
          </FadeUp>
        </section>

        <section id="services" className="section">
          <FadeUp className="section-head">
            <span className="label">Capabilities</span>
            <h2 className="display section-title-text">Services</h2>
            <span className="rule" />
          </FadeUp>
          <FadeUp className="services-grid">
            {services.map((service) => (
              <div key={service.num} className="service-item">
                <span className="service-num">{service.num}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </FadeUp>
        </section>

        <section id="portfolio" className="section section-alt">
          <FadeUp className="section-head center">
            <span className="label">Selected Work</span>
            <h2 className="display section-title-text">Projects</h2>
            <p className="section-sub">
              Selected video production work across documentary filmmaking,
              brand commercials, and short-form content.
            </p>
            <span className="rule center" />
          </FadeUp>
          <FadeUp className="work-grid">
            {portfolioItems.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </FadeUp>
        </section>

        <section id="why" className="section">
          <FadeUp className="section-head">
            <span className="label">Why AdFilmic</span>
            <h2 className="display section-title-text">
              How we work differently
            </h2>
            <span className="rule" />
          </FadeUp>
          <FadeUp className="why-grid">
            {whyItems.map((item) => (
              <div key={item.title} className="why-item">
                <div className="why-line" />
                <div className="why-title">{item.title}</div>
                <div className="why-text">{item.text}</div>
              </div>
            ))}
          </FadeUp>
        </section>

        <section id="process" className="section section-alt">
          <FadeUp className="section-head">
            <span className="label">Process</span>
            <h2 className="display section-title-text">
              From brief to delivery
            </h2>
            <span className="rule" />
          </FadeUp>
          <FadeUp className="process-list">
            {processSteps.map((step) => (
              <div key={step.n} className="process-step">
                <span className="step-n">{step.n}</span>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </FadeUp>
        </section>

        <section id="contact" className="section">
          <FadeUp className="contact-grid">
            <div>
              <span className="label">Contact</span>
              <h2 className="display contact-headline">
                Let&apos;s discuss your next project
              </h2>
              <p className="contact-note">
                Share your brief, timeline, and goals — we&apos;ll respond with
                next steps.
              </p>
              <div className="contact-list">
                <a
                  className="contact-row"
                  href={SITE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-val">{SITE_WHATSAPP}</span>
                  </div>
                </a>
                <a className="contact-row" href={`mailto:${SITE_EMAIL}`}>
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-val">{SITE_EMAIL}</span>
                  </div>
                </a>
              </div>
              <div className="social-block">
                <span className="contact-label">Follow</span>
                <SocialIcons className="social-icons-contact" />
              </div>
            </div>
            <div className="cta-block">
              <span className="label">Inquiries</span>
              <h3 className="display cta-title">Ready to begin?</h3>
              <p className="cta-sub">
                Send a short project overview. We typically respond within one
                business day.
              </p>
              <a className="btn-grad" href={`mailto:${SITE_EMAIL}`}>
                Email AdFilmic
              </a>
              <div className="cta-actions-secondary">
                <a
                  className="btn-ghost"
                  href={SITE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </section>
      </main>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
