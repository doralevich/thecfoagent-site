// The four audience pages. Same shape, different argument: a CFO, a controller, a
// PE-backed finance lead, and a multi-entity operator hire this for different reasons,
// so each page leads with the problem that audience actually has.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-cfos",
    label: "For CFOs",
    eyebrow: "For CFOs",
    title: "You Were Hired to Steer. You Spend Your Week Assembling.",
    intro:
      "The job is capital allocation and strategy. The calendar is close, board prep, and chasing numbers out of people. The CFO Agent takes the assembly.",
    metaTitle: "AI for CFOs and Finance Leaders",
    metaDescription:
      "A private AI agent for CFOs. Automates close, variance narrative, cash forecasting, and board prep so the finance chair spends its time on decisions instead of assembly.",
    keywords: [
      "AI for CFOs",
      "AI CFO assistant",
      "CFO automation",
      "AI financial reporting",
      "chief financial officer AI tools",
    ],
    problem: {
      heading: "The Value of the Chair Is in the Judgment, Not the Assembly",
      body: [
        "Nobody hires a CFO for their ability to reconcile an account. They hire one for the call on whether to take the debt, whether the margin story holds, and whether the plan survives contact with the next two quarters.",
        "Then the month closes, and the chair spends a week pulling numbers, chasing department heads, and formatting a deck. The judgment happens in whatever hours are left over, which is exactly backwards.",
      ],
    },
    benefits: [
      {
        title: "A Reviewable Draft, Not a Blank Page",
        body: "Variance commentary, board narrative, and the financial package arrive drafted. You edit and decide instead of assembling.",
      },
      {
        title: "Cash Position Before You Ask",
        body: "A 13-week and rolling forecast updates daily off live AR, AP, and payroll. Coverage gaps surface early, not at the wire.",
      },
      {
        title: "Close Weeks Get Shorter",
        body: "Checklists run themselves, open items get flagged, and reconciliations stop being a five-person scavenger hunt.",
      },
      {
        title: "Anomalies Find You",
        body: "Unusual patterns in AR, spend, or margin get surfaced when they happen rather than when someone eventually notices.",
      },
      {
        title: "Board Prep Stops Consuming a Week",
        body: "The package compiles, the commentary drafts, and the formatting is done. You spend your time on the story you want to tell.",
      },
      {
        title: "You Stay Accountable",
        body: "Nothing is filed, sent, or presented without your review. The agent gets you to a draft faster; it does not remove the sign-off.",
      },
    ],
    closing: {
      heading: "Get the Chair Back to Judgment",
      body: "Build your agent online in about fifteen minutes, or book a consultation and we will scope it around your ERP and your board's reporting cadence.",
    },
  },
  {
    slug: "for-controllers",
    label: "For Controllers",
    eyebrow: "For Controllers",
    title: "Close Is Not Hard. It Is Just Relentless.",
    intro:
      "The same reconciliations, the same open items, the same five people who owe you numbers, every single month. The CFO Agent runs the checklist so you can run the review.",
    metaTitle: "AI for Controllers and Accounting Managers",
    metaDescription:
      "Cut close time without adding headcount. Automated close checklists, reconciliation flags, variance first drafts, and audit documentation for controllers and accounting teams.",
    keywords: [
      "AI for controllers",
      "month end close automation",
      "close checklist automation",
      "accounting close AI",
      "reconciliation automation",
    ],
    problem: {
      heading: "Nothing About Close Is Interesting. All of It Is Mandatory.",
      body: [
        "A close does not fail on a hard technical question. It slips because an accrual is waiting on a department head, a bank feed did not sync, and three reconciliations are open with nobody assigned.",
        "So the controller becomes a project manager for a project that runs identically every month, and the actual accounting judgment gets squeezed into the last two days.",
      ],
    },
    benefits: [
      {
        title: "The Checklist Runs Itself",
        body: "Tasks open on schedule, ownership is tracked, and status is visible without a standing meeting to collect it.",
      },
      {
        title: "Open Items Surface Early",
        body: "Unreconciled accounts and missing accruals get flagged in the first days of close, not discovered on day seven.",
      },
      {
        title: "First-Draft Commentary",
        body: "Variance explanations arrive written, sourced from actuals versus budget. You correct the reasoning instead of typing it.",
      },
      {
        title: "Chasing Happens Without You",
        body: "The people who owe you numbers get reminded on cadence, so the follow-up is not a relationship you have to spend.",
      },
      {
        title: "Audit Documentation Accumulates",
        body: "Support and policy adherence are tracked as you go, which turns audit prep from a fire drill into a retrieval.",
      },
      {
        title: "Your Judgment Gets the Time",
        body: "Technical accounting calls get the days they deserve, because the mechanical work is no longer eating them.",
      },
    ],
    closing: {
      heading: "Cut Days Off Every Close",
      body: "Book a consultation and we will walk your actual close process, then scope the checklist, the flags, and the integrations around it.",
    },
  },
  {
    slug: "for-private-equity",
    label: "For PE-Backed Companies",
    eyebrow: "For PE-Backed Companies",
    title: "The Reporting Burden Arrived With the Capital.",
    intro:
      "Monthly packages, covenant tracking, and a sponsor who wants detail your last reporting stack never produced. The CFO Agent keeps up without a hiring round.",
    metaTitle: "AI for PE-Backed Portfolio Company Finance Teams",
    metaDescription:
      "Meet sponsor reporting requirements without adding finance headcount. Monthly packages, covenant tracking, KPI reporting, and board decks for PE-backed companies.",
    keywords: [
      "PE portfolio company reporting",
      "private equity finance automation",
      "sponsor reporting requirements",
      "covenant tracking software",
      "portfolio company CFO tools",
    ],
    problem: {
      heading: "Sponsor Reporting Is a Second Full-Time Job Nobody Budgeted For",
      body: [
        "The deal closes and the reporting expectations change overnight. Monthly packages on a deadline, KPI detail nobody was tracking before, covenant calculations that have to be right, and a board that reads carefully.",
        "The finance team that ran a $40M business just fine is now late every month, and the honest options look like burning out the controller or hiring two people the thesis did not budget for.",
      ],
    },
    benefits: [
      {
        title: "The Monthly Package, On Time",
        body: "Compiled, drafted, and formatted to the sponsor's template so the deadline stops being a scramble.",
      },
      {
        title: "Covenant Tracking That Does Not Slip",
        body: "Ratios get calculated and monitored continuously, with headroom flagged well before a testing date.",
      },
      {
        title: "KPIs the Thesis Cares About",
        body: "The operating metrics the sponsor asks about get tracked alongside the financials instead of rebuilt each month.",
      },
      {
        title: "Board Decks Without the All-Nighter",
        body: "Financial sections assemble and commentary drafts, so preparation is review rather than construction.",
      },
      {
        title: "Diligence-Ready by Default",
        body: "Documentation accumulates continuously, which matters when the next raise or the exit process starts.",
      },
      {
        title: "Capacity Without Headcount",
        body: "Meet the reporting bar without adding two finance hires the investment case did not contemplate.",
      },
    ],
    closing: {
      heading: "Meet the Reporting Bar Without the Hiring Round",
      body: "Book a consultation and we will scope it against your sponsor's actual reporting package and covenant schedule.",
    },
  },
  {
    slug: "for-multi-entity",
    label: "For Multi-Entity Finance",
    eyebrow: "For Multi-Entity Finance",
    title: "Five Entities. Five Charts of Accounts. One Consolidated Number.",
    intro:
      "Subsidiaries, properties, and locations each report differently, and somebody has to make them agree every month. The CFO Agent does the reconciling.",
    metaTitle: "AI for Multi-Entity and Consolidated Financial Reporting",
    metaDescription:
      "Consolidated reporting across subsidiaries, properties, and locations. Intercompany reconciliation, per-entity performance, and one consolidated view every month.",
    keywords: [
      "multi entity accounting software",
      "consolidated financial reporting",
      "intercompany reconciliation",
      "multi location financial reporting",
      "subsidiary consolidation AI",
    ],
    problem: {
      heading: "Consolidation Is Where Small Inconsistencies Become Large Delays",
      body: [
        "Each entity closes on its own timeline, with its own bank accounts, its own bookkeeper, and a chart of accounts that is almost but not quite the same as the others.",
        "Consolidation then becomes a manual translation exercise, and by the time the numbers agree, the month they describe is three weeks gone and the operating decision has already been made without them.",
      ],
    },
    benefits: [
      {
        title: "One Consolidated View",
        body: "Every entity rolls up on a schedule, so the group picture exists without waiting on the slowest bookkeeper.",
      },
      {
        title: "Intercompany That Reconciles",
        body: "Cross-entity transactions get matched and mismatches flagged, instead of surfacing at year end.",
      },
      {
        title: "Per-Entity Performance, Side by Side",
        body: "You can see which subsidiary, property, or location is carrying the group and which is quietly leaking.",
      },
      {
        title: "Mapping Handled Once",
        body: "Differing charts of accounts get mapped and maintained, so consolidation stops being a monthly translation.",
      },
      {
        title: "Entity-Level Cash Visibility",
        body: "Cash by entity and in aggregate, so a subsidiary does not run tight while the group looks fine.",
      },
      {
        title: "Audit Trails per Entity",
        body: "Documentation stays attributable to the entity it belongs to, which is what auditors and lenders ask for.",
      },
    ],
    closing: {
      heading: "Get the Group Picture Every Month",
      body: "Book a consultation and we will scope it around your entity structure, your systems, and how your consolidation actually works today.",
    },
  },
];

export function getAudience(slug: string) {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
