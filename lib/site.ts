// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://thecfoagent.ai";
export const SITE_NAME = "The CFO Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. See DECISIONS.md in apolloclaw2. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/cfo";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "hello@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-cfos" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/** The audience pages, used by the nav, the footer, and the sitemap. */
export const AUDIENCES = [
  { slug: "for-cfos", label: "For CFOs" },
  { slug: "for-controllers", label: "For Controllers" },
  { slug: "for-private-equity", label: "For PE-Backed Companies" },
  { slug: "for-multi-entity", label: "For Multi-Entity Finance" },
];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}
