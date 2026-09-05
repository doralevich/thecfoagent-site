import Link from "next/link";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import { Label } from "./components/PageHero";
import { CtaPair, ClosingCta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { CAPABILITIES, PROCESS, TESTIMONIALS, FAQS } from "@/lib/content";
import { AUDIENCES, SITE_URL } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        {/* HERO */}
        <section className="grid-dark-section py-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-brand-tint font-semibold mb-6">
              AI Financial Intelligence for CFOs
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              The AI for CFOs
              <br />
              Who Need Real Intelligence,
              <br />
              Not More Reports.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              The CFO Agent gives finance leaders real-time financial intelligence,
              automated reporting, and faster close cycles, so your team spends less time
              on data and more time on decisions.
            </p>
            <CtaPair on="dark" />
          </div>
        </section>

        {/* THE ARGUMENT */}
        <section className="bg-cream py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label>Financial Intelligence</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
              Finance Teams Spend Too Much Time on Data, Not Enough on Decisions
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                The average finance team spends 60% of its time collecting and cleaning
                data. What is left for the analysis that actually drives decisions? Not
                enough.
              </p>
              <p>
                The CFO Agent connects to your ERP, accounting system, and reporting tools
                to automate the grunt work (variance pulls, close checklists, board prep,
                and cash flow forecasting) so your team can do the work that actually
                matters.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                A Dedicated AI Agent for Finance Leaders
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                Custom-connected to your systems. Trained on your reporting cadence.
                Running from day one.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/how-it-works" className="text-sm font-semibold text-brand hover:underline">
                See how it works, step by step &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="grid-dark-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">The Process</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Consultation to Running in 2 Weeks
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p, i) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <span className="md:hidden text-brand-tint text-xl mb-4" aria-hidden="true">
                      &darr;
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Who It&apos;s For</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Configured Around How Your Finance Team Actually Works
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                A controller closing the books and a sponsor-backed CFO reporting to a
                board need different things from the same engine. Pick the one that sounds
                like you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AUDIENCES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="group block bg-cream rounded p-6 border border-transparent hover:border-brand transition"
                >
                  <h3 className="font-bold text-ink mb-2 group-hover:text-brand transition">
                    {a.label}
                  </h3>
                  <span className="text-sm text-brand font-semibold">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="bg-cream py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Client Results</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                What Finance Leaders Say After 30 Days
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                CFOs and controllers across industries are getting their close back. Here
                is what changed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.quote}
                  className="bg-white rounded p-6 shadow-sm border-t-4 border-brand flex flex-col"
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-brand mb-3">
                    {t.industry}
                  </p>
                  <blockquote className="text-ink italic flex-1 mb-4 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-3">
                    <p className="font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{t.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">
              Representative client experiences. Identifying details withheld at client
              request.
            </p>
          </div>
        </section>

        {/* INVESTMENT */}
        <section id="pricing" className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label on="dark">Investment</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Built for Finance Leaders Who Need More Than a Tool
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Two ways to start. Build your agent yourself in about fifteen minutes, or
              have us scope and configure it around your finance stack on a call.
            </p>
            <CtaPair size="lg" on="dark" />
            <p className="text-sm text-gray-400 mt-6">
              Custom deployments are scoped to your ERP, integrations, and reporting
              complexity, and priced during your consultation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>FAQ</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQ items={FAQS.slice(0, 6)} />
            <p className="text-center mt-10">
              <Link href="/faq" className="text-sm font-semibold text-brand hover:underline">
                Read every question &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
