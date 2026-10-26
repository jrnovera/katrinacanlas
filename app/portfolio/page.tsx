import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Button from "@/components/Button";
import CaseStudies from "@/components/CaseStudies";
import CyclingHighlights from "@/components/CyclingHighlights";
import MetricValue from "@/components/MetricValue";
import PointerParallax from "@/components/PointerParallax";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Spotlight from "@/components/Spotlight";
import {
  EMAIL,
  HIRE_MAILTO,
  MAILTO,
  caseStudies,
  portfolio,
  portfolioContact,
  selectedWork,
  site,
  workBrands,
} from "@/lib/site";
import portrait from "@/public/portfolio/katrina-portrait.png";
import selfie from "@/public/portfolio/katrina-selfie.jpg";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: portfolio.intro,
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Portfolio() {
  return (
    <>
      <Spotlight />
      {/* Reading progress, tucked under the header (scroll-timeline browsers only). */}
      <div aria-hidden className="scroll-progress fixed inset-x-0 top-[79px] z-[60] h-0.5 bg-volt" />

      <Hero />

      <section id="case-studies" className="mx-auto max-w-6xl px-6 pb-16 md:pb-28">
        <CaseStudies />
      </section>

      <Marquee />
      <SelectedWork />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <PointerParallax className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-6">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <HeroPortrait />
          </div>

          {/* She looks up and to the right, so the copy sits on her eyeline. */}
          <div className="order-1 lg:order-2 lg:col-span-6 lg:pb-10">
            <p className="fade-in-up flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-volt">
              <span aria-hidden className="h-px w-8 bg-volt" />
              {site.name} · {site.role}
            </p>

            <h1 className="mt-7 text-[3.6rem] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
              {portfolio.title.split(" ").map((word, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className="word-mask">
                    <span style={{ "--i": i } as React.CSSProperties}>
                      {word === "&" ? (
                        <span className="inline-block text-volt transition-transform duration-500 hover:-rotate-12 hover:scale-110">
                          &amp;
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  </span>
                </Fragment>
              ))}
            </h1>

            <p
              className="fade-in-up mt-8 max-w-md text-lg leading-relaxed text-paper/65 md:text-xl"
              style={{ "--delay": "450ms" } as React.CSSProperties}
            >
              <CyclingHighlights text={portfolio.intro} phrases={portfolio.introHighlights} />
            </p>

            <div
              className="fade-in-up mt-10 flex flex-wrap items-center gap-3"
              style={{ "--delay": "600ms" } as React.CSSProperties}
            >
              <Button href={HIRE_MAILTO} external>
                Discuss Your Project
              </Button>
              <Button href="/portfolio#selected-work" variant="outline">
                Selected Work &amp; Case Studies
              </Button>
            </div>
          </div>
        </div>

        <HeroStats />
      </PointerParallax>
    </section>
  );
}

// Triangle corners in the portrait's 540×600 box: left point, top right, bottom right.
const TRI: [number, number][] = [
  [24, 330],
  [505, 58],
  [472, 562],
];
const TRI_RADIUS = 18;

// Moves `d` units from point a toward point b.
function toward(a: [number, number], b: [number, number], d: number): [number, number] {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return [a[0] + ((b[0] - a[0]) * d) / len, a[1] + ((b[1] - a[1]) * d) / len];
}

// Closed path with rounded corners: corner A, edge A→B, corner B, edge B→C, corner C, then edge C→A to close.
function trianglePath() {
  return (
    TRI.map((p, i) => {
      const s = toward(p, TRI[(i + 2) % 3], TRI_RADIUS);
      const e = toward(p, TRI[(i + 1) % 3], TRI_RADIUS);
      return `${i === 0 ? "M" : "L"}${s[0]},${s[1]} Q${p[0]},${p[1]} ${e[0]},${e[1]}`;
    }).join(" ") + " Z"
  );
}

// Cut-out portrait woven into a line triangle: the top edges pass behind her, the lower edge in front.
// Layers drift by different amounts with the mouse (see PointerParallax).
function HeroPortrait() {
  const [a, , c] = TRI;
  const frontStart = toward(c, a, TRI_RADIUS);
  const frontEnd = toward(a, c, TRI_RADIUS);
  // The front edge draws last, so it starts when the full outline reaches C.
  const edge = (p: [number, number], q: [number, number]) => Math.hypot(q[0] - p[0], q[1] - p[1]);
  const perimeter = edge(TRI[0], TRI[1]) + edge(TRI[1], TRI[2]) + edge(TRI[2], TRI[0]);
  const drawMs = 1800;
  const drawDelay = 300;
  const frontAt = (perimeter - edge(c, a)) / perimeter;

  const svg = "absolute inset-0 size-full overflow-visible text-volt/80 transition-colors duration-500 group-hover:text-volt";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    pathLength: 1,
  };

  return (
    <div className="group relative mx-auto aspect-[9/10] w-full max-w-[540px]">
      {/* Soft glows at the triangle's left point and right side. */}
      <div aria-hidden className="depth absolute inset-0" style={{ "--depth": -20 } as React.CSSProperties}>
        <span className="glow-pulse absolute left-[4%] top-[55%] size-40 -translate-1/2 rounded-full bg-volt/25 blur-3xl" />
        <span
          className="glow-pulse absolute left-[94%] top-[38%] size-44 -translate-1/2 rounded-full bg-volt/20 blur-3xl"
          style={{ animationDelay: "-2.5s" }}
        />
      </div>

      <div aria-hidden className="depth absolute inset-0" style={{ "--depth": 14 } as React.CSSProperties}>
        <svg viewBox="0 0 540 600" className={svg}>
          <path
            d={trianglePath()}
            {...stroke}
            className="draw"
            style={{ "--dur": `${drawMs}ms`, "--delay": `${drawDelay}ms` } as React.CSSProperties}
          />
        </svg>
      </div>

      <div className="depth absolute inset-0 flex justify-center" style={{ "--depth": 6 } as React.CSSProperties}>
        <Image
          src={portrait}
          alt={site.name}
          quality={90}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 400px, 70vw"
          className="pop-in h-full w-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        />
      </div>

      <div aria-hidden className="depth absolute inset-0" style={{ "--depth": 14 } as React.CSSProperties}>
        <svg viewBox="0 0 540 600" className={svg}>
          <path
            d={`M${frontStart[0]},${frontStart[1]} L${frontEnd[0]},${frontEnd[1]}`}
            {...stroke}
            className="draw"
            style={
              {
                "--dur": `${Math.round(drawMs * (1 - frontAt))}ms`,
                "--delay": `${Math.round(drawDelay + drawMs * frontAt)}ms`,
              } as React.CSSProperties
            }
          />
        </svg>
      </div>
    </div>
  );
}

// Headline result from each case study, set on the "floor" the portrait stands on.
function HeroStats() {
  return (
    <div className="mt-14 pb-16 md:mt-20 md:pb-24 lg:mt-24">
      <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {caseStudies.map((study, i) => {
          const m = study.metrics[0];
          return (
            <Reveal
              key={m.label}
              delay={i * 90}
              className="border-line py-6 max-lg:odd:border-r max-lg:odd:pr-5 max-lg:even:pl-5 max-lg:[&:nth-child(-n+2)]:border-b lg:border-r lg:px-6 lg:py-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="font-mono text-xs text-muted">{pad(i + 1)}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-volt md:text-5xl">
                <MetricValue value={m.value} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-paper/75">{m.label}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-t border-line py-10 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      {/* Two identical lists so the -50% loop is seamless. */}
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {workBrands.map((brand) => (
              <li
                key={brand}
                className="flex items-center whitespace-nowrap text-3xl font-semibold tracking-tight text-paper/25 transition-colors duration-300 hover:text-paper md:text-5xl"
              >
                <span className="px-8 md:px-10">{brand}</span>
                <span aria-hidden className="text-lg text-volt md:text-2xl">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

// "stord.com/order-management-system" — enough to show where each card lands.
function shortUrl(url: string) {
  const { hostname, pathname } = new URL(url);
  return hostname.replace(/^www\./, "") + pathname.replace(/\/$/, "");
}

function SelectedWork() {
  return (
    <section id="selected-work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <Reveal>
          <SectionTitle>Selected Work &amp; Case Studies</SectionTitle>
          <p className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Live content, published and performing.
          </p>
          <span aria-hidden className="rule mt-10 block h-px bg-line" />
        </Reveal>

        <div className="mt-12 space-y-16 lg:mt-20 lg:space-y-24">
          {selectedWork.map(({ group, items }, gi) => (
            <div key={group} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <Reveal className="reveal-left lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="font-mono text-xs text-volt">{pad(gi + 1)}</p>
                  <h3 className="mt-3 flex items-baseline gap-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    {group}
                    <span className="font-mono text-xs font-normal text-muted">{pad(items.length)}</span>
                  </h3>
                  <span aria-hidden className="rule mt-6 block h-px w-full bg-volt/40" />
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {items.map((item, i) => (
                  <Reveal key={item.url} delay={i * 70} className="min-w-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-spotlight
                      className="group flex h-full min-h-36 flex-col justify-between gap-8 overflow-hidden sm:min-h-44 sm:gap-10 rounded-sm border border-line bg-card p-6 transition-colors duration-300 hover:border-volt/40"
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
                        <span
                          aria-hidden
                          className="grid size-9 shrink-0 -rotate-45 place-items-center rounded-full border border-paper/15 text-paper/70 transition-all duration-300 group-hover:rotate-0 group-hover:border-volt group-hover:bg-volt group-hover:text-ink"
                        >
                          →
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xl font-semibold leading-snug">{item.name}</span>
                        <span className="mt-2 block truncate font-mono text-xs text-muted transition-colors group-hover:text-paper/80">
                          {shortUrl(item.url)}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-volt transition-transform duration-500 group-hover:scale-x-100"
                      />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-volt/10 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-20 px-6 py-16 md:py-28 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <SectionTitle>Contact</SectionTitle>
          <span aria-hidden className="rule mt-4 block h-px w-24 bg-volt" />
          <p className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {portfolioContact.body}
          </p>
          <div className="mt-10">
            <Button href={HIRE_MAILTO} external>
              Discuss Your Project
            </Button>
          </div>
          <p className="mt-12 text-sm text-muted">Email</p>
          <a
            href={MAILTO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-words text-[1.4rem] font-semibold tracking-tight text-volt underline-offset-8 hover:underline sm:text-4xl"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={150} className="reveal-scale lg:col-span-5">
          <ContactPortrait />
        </Reveal>
      </div>
    </section>
  );
}

function ContactPortrait() {
  const badge = `${site.role.split(" | ").join(" • ")} • `.toUpperCase();

  return (
    <div className="relative mx-auto w-[78%] max-w-sm sm:w-full">
      <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-2xl border border-volt/50" />
      <div className="wipe relative aspect-[4/5] -rotate-2 overflow-hidden rounded-2xl bg-card shadow-2xl">
        <Image
          src={selfie}
          alt={`${site.name} smiling outdoors`}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 384px, 78vw"
          className="object-cover"
        />
      </div>

      {/* Rotating badge that doubles as a contact link. */}
      <a
        href={HIRE_MAILTO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuss Your Project"
        className="group absolute -bottom-12 -left-10 grid size-32 place-items-center rounded-full border border-line bg-ink/90 backdrop-blur-md sm:-left-14 sm:size-36"
      >
        <svg viewBox="0 0 100 100" aria-hidden className="spin-slow absolute inset-0 size-full">
          <defs>
            <path id="badge-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-paper/80 text-[8px] font-medium" textLength={236} lengthAdjust="spacing">
            <textPath href="#badge-ring">{badge}</textPath>
          </text>
        </svg>
        <span className="grid size-12 place-items-center rounded-full bg-volt text-lg text-ink transition-transform duration-300 group-hover:scale-110 sm:size-14">
          ↗
        </span>
      </a>
    </div>
  );
}
