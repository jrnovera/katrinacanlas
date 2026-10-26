"use client";

import { startTransition, useState, ViewTransition } from "react";
import MetricValue from "@/components/MetricValue";
import Reveal from "@/components/Reveal";
import { caseStudies, workCategories, type CaseStudy, type WorkCategory } from "@/lib/site";

const ALL = "All Work";
type Filter = WorkCategory | typeof ALL;

// Keep each study's original number so "Case Study 03" stays 03 when filtered.
const numbered = caseStudies.map((study, i) => ({ study, number: String(i + 1).padStart(2, "0") }));

function countFor(tab: Filter) {
  return tab === ALL ? caseStudies.length : caseStudies.filter((s) => s.category === tab).length;
}

// Sticky filter bar plus the case study cards it controls. Filter changes run as a view
// transition: the green pill slides to the new tab and cards fade, move and settle into place.
export default function CaseStudies() {
  const [active, setActive] = useState<Filter>(ALL);
  const shown = numbered.filter(({ study }) => active === ALL || study.category === active);

  function choose(tab: Filter) {
    if (tab === active) return;
    // When the bar is stuck partway down the list, jump back to its top so the new set starts in view.
    const section = document.getElementById("case-studies");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 80;
      if (window.scrollY > top) window.scrollTo({ top, behavior: "instant" });
    }
    startTransition(() => setActive(tab));
  }

  return (
    <>
      <div className="sticky top-20 z-30 -mx-6 bg-ink/80 px-6 py-4 shadow-[0_16px_24px_-16px_rgb(0_0_0/0.9)] backdrop-blur-md">
        <div className="no-scrollbar -mx-6 overflow-x-auto px-6">
          <div
            role="group"
            aria-label="Filter case studies"
            className="inline-flex gap-1 rounded-full border border-line bg-card p-1"
          >
            {[ALL, ...workCategories].map((tab) => {
              const selected = tab === active;
              return (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(tab as Filter)}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    selected ? "text-ink" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {selected && (
                    <ViewTransition name="work-filter-pill" share="pill-move">
                      <span aria-hidden className="absolute inset-0 rounded-full bg-volt" />
                    </ViewTransition>
                  )}
                  <span className="relative">{tab}</span>
                  <span className={`relative ml-2 font-mono text-[11px] ${selected ? "text-ink/60" : "text-muted"}`}>
                    {countFor(tab as Filter)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {shown.map(({ study, number }) => (
          <ViewTransition
            key={study.title}
            name={`case-study-${number}`}
            enter="case-in"
            exit="case-out"
            share="case-move"
            update="case-move"
          >
            <CaseStudyCard study={study} number={number} />
          </ViewTransition>
        ))}
      </div>
    </>
  );
}

function CaseStudyCard({ study, number }: { study: CaseStudy; number: string }) {
  return (
    <Reveal as="article" className="group">
      <div
        data-spotlight
        className="overflow-hidden rounded-sm border border-line bg-card p-6 transition-colors duration-500 hover:border-volt/30 sm:p-10"
      >
        <span
          aria-hidden
          className="text-outline pointer-events-none absolute -top-3 right-3 select-none text-[6.5rem] font-semibold leading-none tracking-tighter sm:-top-8 sm:right-6 sm:text-[11rem]"
        >
          {number}
        </span>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-volt">Case Study {number}</p>
          <span className="rounded-full border border-paper/15 px-2.5 py-0.5 text-xs text-muted">{study.category}</span>
        </div>
        <h3 className="mt-5 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-4xl md:leading-tight">
          {study.title}
        </h3>

        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-8">
          <dt className="text-muted">Client Focus</dt>
          <dd className="-mt-3 text-paper sm:mt-0">{study.clientFocus}</dd>
          <dt className="text-muted">Services Deployed</dt>
          <dd className="-mt-3 flex flex-wrap gap-2 sm:mt-0">
            {study.services.map((s) => (
              <span key={s} className="rounded-full bg-ink px-2.5 py-0.5 text-xs text-paper/85">
                {s}
              </span>
            ))}
          </dd>
        </dl>

        <div className="mt-10 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-9 lg:col-span-7">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Before</p>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/85">{study.before}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">The System Engineered</p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-paper/85">
                {study.system.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span aria-hidden className="font-mono text-volt">
                      &gt;
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">The Business Impact</p>
            <div className="mt-4 space-y-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="border-l-2 border-volt bg-ink/70 p-5">
                  <p className="text-4xl font-semibold tracking-tight text-volt md:text-5xl">
                    <MetricValue value={m.value} />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em]">{m.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{m.body}</p>
                </div>
              ))}
            </div>
            {study.outcomes && (
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-paper/85">
                {study.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span aria-hidden className="text-volt">
                      +
                    </span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
