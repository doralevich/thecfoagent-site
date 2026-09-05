// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.

export const CAPABILITIES = [
  {
    title: "Month-End Close Automation",
    body: "Runs your close checklist, flags open items, reconciles accounts, and surfaces variances before the deadline, not after.",
  },
  {
    title: "Variance Analysis",
    body: "Pulls actuals versus budget, flags anomalies, and drafts the narrative your board expects. Ready before your first review meeting.",
  },
  {
    title: "Cash Flow Forecasting",
    body: "Models 13-week and rolling cash positions using your live AR, AP, and payroll data. Flags coverage gaps before they become problems.",
  },
  {
    title: "Board and Investor Prep",
    body: "Compiles the financial package, drafts commentary, and formats the deck. You review and present. Everything else is handled.",
  },
  {
    title: "Accounts Receivable Monitoring",
    body: "Flags aging invoices, drafts collection outreach, and keeps your DSO from creeping without you having to chase it.",
  },
  {
    title: "Audit and Compliance Readiness",
    body: "Maintains documentation, tracks policy adherence, and flags gaps before your auditors do. No more last-minute fire drills.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Map Your Finance Stack",
    body: "We connect your ERP, accounting platform, and reporting tools. We learn your close cadence, your chart of accounts, and what your board actually wants to see.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "Your Agent Goes to Work",
    body: "Close checklists run automatically. Variance reports draft themselves. Cash flow models update daily. Your team gets to the analysis faster than ever before.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Gets Sharper Over Time",
    body: "The agent learns your business seasonality, your board's preferences, and your team's workflows. Most finance leaders report cutting close time by 30-40% within 60 days.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Manufacturing",
    quote:
      "Our close was taking 8 business days. We're now at 4 and still shrinking. The agent flags open reconciliations automatically, which means my team isn't chasing down the same five issues every month. We actually finish and have time to talk about what the numbers mean.",
    name: "CFO, Contract Manufacturer",
    detail: "$45M revenue, 180 employees, Midwest",
  },
  {
    industry: "Professional Services",
    quote:
      "Board prep used to take my controller two full days every quarter. Now it takes half a day. The agent pulls the financials, drafts the variance narrative, and formats the package. My controller reviews and refines instead of building from scratch. That's a different job entirely.",
    name: "CFO, Management Consulting Firm",
    detail: "$28M revenue, 95 staff, Northeast",
  },
  {
    industry: "Distribution",
    quote:
      "Cash visibility was our biggest problem. We were always two weeks behind on knowing where we actually stood. The CFO Agent now updates our 13-week forecast every morning with live AR and AP data. I know our cash position before I pour my first cup of coffee.",
    name: "VP of Finance",
    detail: "Regional distributor, $80M revenue, Southeast",
  },
  {
    industry: "SaaS",
    quote:
      "We were growing fast but our reporting wasn't keeping up. Investor updates were a scramble every month. The agent now pulls MRR, churn, and burn rate automatically and drafts the investor memo. We look more organized than we are. Which means the investors stay calm.",
    name: "CFO, Series B SaaS Company",
    detail: "ARR $12M, 55 employees, West Coast",
  },
  {
    industry: "Healthcare",
    quote:
      "Revenue cycle is complicated. Denials, adjustments, lag. It makes your P&L look different every time you run it. The CFO Agent flags unusual patterns in our AR before they affect reporting. We caught a billing issue 3 weeks earlier than we would have. That saved us real money.",
    name: "Controller, Multi-Site Medical Group",
    detail: "8 locations, $22M net revenue",
  },
  {
    industry: "Real Estate",
    quote:
      "Managing financials across 14 properties was a nightmare. Different bank accounts, different property managers, different reporting. The CFO Agent consolidates everything into one view every week. I finally know which properties are performing and which ones need attention.",
    name: "Principal, Real Estate Investment Firm",
    detail: "14 properties, $35M AUM, Mid-Atlantic",
  },
];

export const FAQS = [
  {
    q: "What systems does the CFO Agent connect to?",
    a: "We connect to your ERP, accounting platform (QuickBooks, NetSuite, Sage, and others), banking feeds, payroll systems, and any reporting tools your team already uses. We build to your stack, not the other way around.",
  },
  {
    q: "How is this different from hiring a fractional CFO?",
    a: "A fractional CFO works 10-20 hours a month. The CFO Agent runs 24 hours a day. It handles the repeatable, data-intensive work that would otherwise consume your team's time. The fractional CFO does strategy. The agent does execution.",
  },
  {
    q: "How long does implementation take?",
    a: "Most clients are fully operational within two weeks. We handle all integrations and configuration. Your team needs to show up to an onboarding call and walk us through your close process.",
  },
  {
    q: "Is our financial data secure?",
    a: "Security is non-negotiable in finance. We use read-only API access wherever possible, all connections use least-privilege permissions, and your data does not pass through systems we do not control.",
  },
  {
    q: "Can it handle multi-entity or consolidated reporting?",
    a: "Yes. We have configured the CFO Agent for companies with multiple entities, subsidiaries, and properties. Consolidated reporting is one of the areas where the agent adds the most value.",
  },
  {
    q: "What does it cost?",
    a: "There are two ways to start. You can build your agent yourself online and see the price before you pay anything. For a custom deployment scoped to your ERP, integrations, and reporting complexity, book a consultation and we will give you a precise number within 48 hours.",
  },
  {
    q: "Does it replace anyone on my team?",
    a: "It replaces the part of the job nobody wants: reconciliation chasing, checklist upkeep, first-draft commentary, and report assembly. Most finance leaders find it makes their controller and analysts more valuable, because they stop doing data collection and start doing analysis.",
  },
  {
    q: "Who is accountable for the numbers?",
    a: "You are, exactly as before. The agent drafts, flags, and assembles. Nothing is filed, sent, or presented without a person reviewing it. It is built to get you to a reviewable draft faster, not to remove the review.",
  },
];
