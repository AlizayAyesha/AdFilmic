import Nav from "@/components/Nav";
import FadeUp from "@/components/FadeUp";
import WorkCard from "@/components/WorkCard";

const services = [
  { num: "01", name: "Brand Commercials & Ads" },
  { num: "02", name: "YouTube Video Editing" },
  { num: "03", name: "Documentary Production" },
  { num: "04", name: "AI Video Creation" },
  { num: "05", name: "Short Form Content — Reels, Shorts, TikTok" },
  { num: "06", name: "Product Advertisement Videos" },
  { num: "07", name: "Motion Graphics" },
  { num: "08", name: "Content Strategy & Creative Direction" },
];

const whyItems = [
  {
    title: "Cinematic Quality Editing",
    text: "Every cut is intentional. We treat editing as a craft, not a checkbox.",
  },
  {
    title: "Story-Driven Approach",
    text: "Your brand has a story. We find it, shape it, and make it impossible to ignore.",
  },
  {
    title: "AI-Powered Creativity",
    text: "We use the latest AI tools not as shortcuts, but as creative instruments.",
  },
  {
    title: "Fast Turnaround",
    text: "Deadlines are respected. Speed and quality coexist here.",
  },
  {
    title: "Brand-Focused Thinking",
    text: "Every decision we make serves your brand's long-term positioning.",
  },
  {
    title: "High Retention Content",
    text: "Hooks that pull, pacing that holds, endings that stick. Built for watch time.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Understanding Your Vision",
    desc: "We start with a deep-dive into your brand, goals, and target audience before touching the timeline.",
  },
  {
    n: "2",
    title: "Planning & Strategy",
    desc: "Script, shot list, style references, and a clear production roadmap — agreed before we begin.",
  },
  {
    n: "3",
    title: "Editing & Production",
    desc: "Cinematic editing, motion graphics, AI generation, sound design — the full build.",
  },
  {
    n: "4",
    title: "Review & Feedback",
    desc: "Structured revision rounds so you get exactly what you envisioned.",
  },
  {
    n: "5",
    title: "Final Delivery",
    desc: "Optimised files in every format you need — YouTube, Instagram, broadcast. Ready to publish.",
  },
];

const portfolioItems = [
  {
    videoSrc:
      "https://www.youtube.com/embed/videoseries?list=PLplaceholder1&autoplay=1",
    category: "Documentary",
    title: "Dabba Mafia — Thynk Crime",
    description:
      "Investigative documentary on Pakistan's fake call center networks. Bilingual, research-grounded.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/placeholder2?autoplay=1",
    category: "AI Commercial",
    title: "Bisconni Cocomo — Product Ad",
    description:
      "Cinematic 9:16 AI commercial built with Midjourney, Runway, and Kling AI for Instagram.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/placeholder3?autoplay=1",
    category: "Content Series",
    title: "One Word Series",
    description:
      "Short-form reels anchored on a single English word — Puppet, Overdose, Excuses. Natural Hinglish.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-eyebrow">Creative Video Studio for the AI Era</div>
          <h1 className="display hero-title">
            Every Frame
            <br />
            Has a Purpose.
          </h1>
          <p className="hero-sub">
            We craft cinematic videos for brands, creators, and businesses using
            storytelling, editing, and AI-powered creativity.
          </p>
          <p className="hero-support">
            From YouTube documentaries to brand commercials, AI videos, product
            ads, and short-form content — we turn ideas into visuals that stand
            out.
          </p>
          <div className="hero-actions">
            <a className="btn-grad" href="#portfolio">
              View Portfolio
            </a>
            <a className="btn-ghost" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <FadeUp className="about-grid">
          <div>
            <span className="about-tag">About AdFilmic</span>
            <h2 className="display section-title-text">
              We design experiences, not just videos.
            </h2>
            <span className="rule" />
            <div className="about-body about-body-spaced">
              <p>
                AdFilmic is a creative video studio focused on cinematic
                storytelling, modern editing, and AI-driven video production.
              </p>
              <p>
                We don&apos;t just edit footage — we design experiences that
                communicate, engage, and convert.
              </p>
              <p>
                Every project is built with strategy, creativity, and attention
                to detail.
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
            <span className="label">Founder & CEO</span>
            <h2 className="display founder-name">
              Shayan
              <br />
              Ali Khan
            </h2>
            <p className="founder-role">Founder & CEO of AdFilmic</p>
          </div>
          <div>
            <p className="founder-desc">
              I help brands, creators, and businesses transform ideas into
              cinematic video experiences. My work includes YouTube
              documentaries, brand commercials, AI-generated videos, product
              ads, and social media content — all crafted with a focus on
              storytelling and impact.
            </p>
            <a className="btn-grad btn-grad-inline" href="#contact">
              Work With Me
            </a>
          </div>
        </FadeUp>
      </section>

      <section id="services" className="section">
        <FadeUp className="section-head">
          <span className="label">What We Do</span>
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
            A collection of cinematic projects, AI experiments, brand ads, and
            storytelling pieces.
          </p>
          <span className="rule center" />
        </FadeUp>
        <FadeUp className="work-grid">
          {portfolioItems.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </FadeUp>
        <p className="portfolio-note">
          Replace placeholder URLs with your actual YouTube video IDs to activate
          playback.
        </p>
      </section>

      <section id="why" className="section">
        <FadeUp className="section-head">
          <span className="label">Why Choose Us</span>
          <h2 className="display section-title-text">The AdFilmic Difference</h2>
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
          <span className="label">How We Work</span>
          <h2 className="display section-title-text">Our Process</h2>
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
            <span className="label">Get In Touch</span>
            <h2 className="display contact-headline">Let&apos;s Work Together</h2>
            <p className="contact-note">
              Have an idea? Let&apos;s turn it into something cinematic.
            </p>
            <div className="contact-list">
              <a className="contact-row" href="https://wa.me/923152675490">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-val">+92 315 2675490</span>
                </div>
              </a>
              <a className="contact-row" href="mailto:Shayanali317@gmail.com">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-val">Shayanali317@gmail.com</span>
                </div>
              </a>
            </div>
            <div className="social-list social-list-spaced">
              <a
                className="social-row"
                href="https://instagram.com/shayanalikhan76"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-dot" />
                Instagram — shayanalikhan76
              </a>
              <a
                className="social-row"
                href="https://youtube.com/@shayanalikhan317"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-dot" />
                YouTube — @shayanalikhan317
              </a>
              <a
                className="social-row"
                href="https://facebook.com/shayanali3170"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-dot" />
                Facebook — shayanali3170
              </a>
            </div>
          </div>
          <div className="cta-block">
            <span className="label">Start a Project</span>
            <h3 className="display cta-title">
              Ready to make something cinematic?
            </h3>
            <p className="cta-sub">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </p>
            <a className="btn-grad" href="mailto:Shayanali317@gmail.com">
              Send a Message
            </a>
            <div className="cta-actions-secondary">
              <a
                className="btn-ghost"
                href="https://wa.me/923152675490"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <footer>
        <div>
          <div className="footer-brand">AdFilmic</div>
          <div className="footer-tagline">
            Creative Video Studio for the AI Era
          </div>
          <div className="footer-founder">Founded by Shayan Ali Khan</div>
        </div>
        <div className="footer-right">© 2026 AdFilmic. All rights reserved.</div>
      </footer>
    </>
  );
}
