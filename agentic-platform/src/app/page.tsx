import { buildBlueprint, buildGrowthPlan } from "@/lib/strategy";
import { getTrendInsights } from "@/lib/trends";

export const revalidate = 900;

function relativeTime(input: string) {
  const published = new Date(input).getTime();
  if (Number.isNaN(published)) return "recently";

  const diff = Date.now() - published;
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 36) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const TOOL_STACK = [
  { name: "Make.com Free Tier", purpose: "Automations without coding cost." },
  { name: "n8n Self-Hosted", purpose: "Advanced agent workflows on free VPS." },
  { name: "Notion HQ", purpose: "Command center for assets + community." },
  { name: "Airtable Free Plan", purpose: "Lead tracker & KPI dashboard." },
  { name: "Zapier Starter (free tasks)", purpose: "Bridge legacy tools fast." },
  { name: "Canva", purpose: "Cross-format creative templates." },
  { name: "CapCut Desktop", purpose: "Rapid vertical video editing." },
  { name: "Restream Free", purpose: "Simulcast live workshops everywhere." },
  { name: "OBS Studio", purpose: "Record automation demos high-quality." },
  { name: "Pexels + Mixkit", purpose: "Royalty-free b-roll for shorts." },
];

export default async function Home() {
  const trends = await getTrendInsights();
  const blueprints = trends.slice(0, 4).map((trend) => buildBlueprint(trend));
  const growthPlan = buildGrowthPlan();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
              Agentic Growth Ops
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              10M Follower Autopilot Command Center
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
              Live intelligence on viral AI conversations + cross-platform deployment
              plans. Every play is designed for zero-cost tool stacks and built to
              sell your AI automation systems without manual lift.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center text-sm md:text-base">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Trend Signals
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">
                {trends.length}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Blueprint Drops
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">
                {blueprints.length}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Platforms Covered
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">7</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Target Window
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">
                180 days
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <section className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-emerald-500/10">
            <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Momentum Dashboard
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Daily pulse on AI conversations sourced across Reddit, Hacker News,
              Google News, and YouTube. Agentic scoring prioritizes topics with
              breakout potential for the next 72 hours.
            </p>
            <ul className="mt-6 space-y-4">
              {trends.slice(0, 6).map((trend) => (
                <li
                  key={trend.id}
                  className="rounded-xl border border-white/5 bg-white/[0.05] p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-emerald-200">
                      {trend.title}
                    </p>
                    <span className="rounded-full border border-emerald-500/40 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-400">
                      {trend.source}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">{trend.summary}</p>
                  <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-400">
                    <span>{relativeTime(trend.publishedAt)}</span>
                    <span>Signal Score · {Math.round(trend.score)}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {trend.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                  <a
                    href={trend.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    Open source →
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-slate-200">
              10M Followers Roadmap
            </h2>
            <p className="mt-4 text-sm text-slate-400">
              Aggressive but attainable follower trajectory with compounding content
              loops and automation-driven nurture paths.
            </p>
            <div className="mt-6 grid gap-4">
              {growthPlan.map((milestone) => (
                <div
                  key={milestone.label}
                  className="rounded-xl border border-white/5 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
                        {milestone.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold">
                        {milestone.followers.toLocaleString()} followers
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-slate-300">
                      {milestone.timeframeDays} days
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {milestone.tactics.map((tactic) => (
                      <li key={tactic} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                        <span>{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Cross-Platform Execution Blueprints
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Pre-built scripts for LinkedIn, Facebook, Instagram, Pinterest,
                TikTok, YouTube Shorts, and X. Designed to repurpose the same asset
                across vertical video, carousels, and long-form threads while
                pitching your automation offer.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {blueprints.map((blueprint) => (
              <article
                key={blueprint.trend.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6"
              >
                <header>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {blueprint.trend.title}
                    </h3>
                    <span className="rounded-full border border-emerald-500/40 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-300">
                      {blueprint.trend.source}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    {blueprint.trend.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {blueprint.trend.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300"
                      >
                        #{keyword}
                      </span>
                    ))}
                  </div>
                </header>
                <section className="grid gap-3">
                  {blueprint.platformPlans.slice(0, 4).map((plan) => (
                    <div
                      key={plan.platform}
                      className="rounded-xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold text-emerald-200">
                          {plan.platform}
                        </p>
                        <span className="text-[10px] uppercase tracking-widest text-slate-400">
                          {plan.format}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-semibold text-slate-200">
                        Hook: {plan.hook}
                      </p>
                      <pre className="mt-2 whitespace-pre-wrap text-xs text-slate-300">
                        {plan.primaryCopy}
                      </pre>
                      <p className="mt-3 text-xs text-emerald-300">
                        CTA: {plan.callToAction}
                      </p>
                      <p className="mt-2 text-[11px] text-slate-400">
                        Automation Play: {plan.automationAngle}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {plan.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
                <footer className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                  <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                        Lead Magnet
                      </p>
                      <p className="mt-1 font-semibold text-slate-100">
                        {blueprint.leadMagnet.headline}
                      </p>
                      <p className="mt-2 text-xs text-slate-300">
                        {blueprint.leadMagnet.promise}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                        Automation Flow
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-slate-300">
                        {blueprint.leadMagnet.automationFlow.map((step) => (
                          <li key={step} className="flex gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                        Monetization
                      </p>
                      <p className="mt-1 font-semibold text-slate-100">
                        {blueprint.monetization.offerHeadline}
                      </p>
                      <p className="mt-2 text-xs text-emerald-300">
                        {blueprint.monetization.pricing}
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-slate-300">
                        {blueprint.monetization.funnel.map((step) => (
                          <li key={step} className="flex gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-slate-200">
                Zero-Cost Automation Stack
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Everything you need to deploy the agentic growth system without
                paying for premium APIs. All tools have free tiers or are open-source.
              </p>
            </div>
            <span className="rounded-full border border-emerald-500/40 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-emerald-300">
              Bootstrapped Ready
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {TOOL_STACK.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-sm font-semibold text-emerald-200">
                  {tool.name}
                </p>
                <p className="mt-2 text-xs text-slate-300">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-emerald-500/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold uppercase tracking-[0.3em] text-emerald-100">
                Daily Non-Negotiables
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-emerald-50">
                <li>• Publish 2 short-form videos + 1 long-form thread per trend.</li>
                <li>• Collect 20+ automation lead requests via form embeds.</li>
                <li>• Repurpose live build sessions into clips within 12 hours.</li>
                <li>• Update Notion HQ with fresh case studies & testimonials.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-black/40 p-4 text-sm text-emerald-100">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
                Conversion Flywheel
              </p>
              <p className="mt-2 font-semibold">
                Awareness → Automation Workshop → Offer Closing → Public Wins →
                More Awareness
              </p>
              <p className="mt-2 text-xs text-emerald-100/80">
                Let the agent handle the loops. You show up to close the high-ticket
                automation builds.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-8 text-center text-xs text-slate-500">
        Agentic Growth Engine · Powered by free + open automation tools · Ready for
        Vercel deploy
      </footer>
    </div>
  );
}
