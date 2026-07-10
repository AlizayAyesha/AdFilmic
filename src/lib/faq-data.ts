import { SITE_EMAIL, SITE_NAME, SITE_WHATSAPP, absoluteUrl } from "./site";

export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-adfilmic",
    q: `What is ${SITE_NAME}?`,
    a: `${SITE_NAME} is a creative video studio founded by Shayan Ali Khan. We produce brand commercials, YouTube content, documentaries, product films, short-form video, motion graphics, and AI-assisted production for brands and creators.`,
  },
  {
    id: "services",
    q: "What video services do you offer?",
    a: "Brand commercials, YouTube production and editing, documentary filmmaking, AI-assisted video production, short-form content, product films, motion graphics, and creative direction & strategy.",
  },
  {
    id: "how-to-start",
    q: "How do I start a project?",
    a: `Email ${SITE_EMAIL} or message WhatsApp ${SITE_WHATSAPP} with your goals, timeline, and references. We typically reply within 24 hours and begin with a short discovery call.`,
  },
  {
    id: "timeline",
    q: "How long does a typical project take?",
    a: "Timelines depend on scope. Short-form and product films can move in days to a few weeks; commercials and documentaries usually need longer planning, production, and revision cycles. We confirm a schedule after discovery.",
  },
  {
    id: "ai-production",
    q: "Do you use AI in video production?",
    a: "Yes — when it improves speed or creative options. We use AI-assisted pipelines alongside traditional editing and storytelling so craft and brand standards stay intact.",
  },
  {
    id: "pricing",
    q: "How much does a project cost?",
    a: "Pricing is scoped after discovery based on length, platforms, revisions, and production needs. Share your brief and we will propose a clear package — no invented fixed prices on the website.",
  },
  {
    id: "privacy",
    q: "Where is your privacy policy?",
    a: `Our Privacy Policy is at ${absoluteUrl("/privacy")}. It explains what data we collect from contact forms and cookies, how we use it, and your rights.`,
  },
  {
    id: "cookies",
    q: "Do you use cookies?",
    a: `We use essential cookies for site function and optional analytics cookies if you consent. Details are in our Cookie Policy at ${absoluteUrl("/cookies")}.`,
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
