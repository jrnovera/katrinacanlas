import Image from "next/image";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import PointerParallax from "@/components/PointerParallax";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Spotlight from "@/components/Spotlight";
import {
  EMAIL,
  HIRE_MAILTO,
  MAILTO,
  clients,
  contact,
  hero,
  results,
  services,
  site,
  skills,
  story,
} from "@/lib/site";
import selfie from "@/public/portfolio/katrina-selfie.jpg";

export default function Home() {
  return (
    <>
      <Spotlight />
      <Hero />
      <Results />
      <Skills />
      <Services />
      <Clients />
      <Story />
      <Contact />
    </>
  );
}

function Hero() {
  const proof = results[0];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 size-[520px] rounded-full bg-volt/10 blur-[140px]"
      />

      {/* Source order is name → headline → photo → copy, so on phones the photo follows "the answer.";
          on desktop the photo moves to its own column beside both text blocks. */}
      <PointerParallax className="relative mx-auto grid max-w-6xl gap-y-10 px-6 pb-16 pt-14 md:pb-24 md:pt-24 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-0 lg:pt-28">
        <Reveal className="lg:col-span-7 lg:row-start-1">
          {/* Kept a clear step larger than the section titles (e.g. "Results at a glance"). */}
          <h2 className="text-xl font-semibold uppercase tracking-[0.14em] text-volt md:text-2xl">{site.name}</h2>
          <h1 className="mt-5 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem] xl:text-6xl">
            {hero.headlineBefore}
            <span className="text-volt">{hero.highlight}</span>
            <span aria-hidden className="caret" />
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center"
        >
          <div
            aria-hidden
            className="depth absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-volt/40"
            style={{ "--depth": 16 } as React.CSSProperties}
          />
          <div className="depth relative" style={{ "--depth": 8 } as React.CSSProperties}>
            <div className="wipe relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-card shadow-2xl">
              <Image
                src={selfie}
                alt={`${site.name} smiling outdoors`}
                fill
                placeholder="blur"
                loading="eager"
                sizes="(min-width: 1024px) 420px, 340px"
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="depth absolute -bottom-6 -left-4 sm:-left-8"
            style={{ "--depth": 22 } as React.CSSProperties}
          >
            <div
              className="fade-in-up rounded-xl border border-paper/10 bg-ink/80 px-4 py-3 shadow-2xl backdrop-blur-md"
              style={{ "--delay": "900ms" } as React.CSSProperties}
            >
              <p className="text-2xl font-semibold tracking-tight text-volt">
                {proof.prefix}
                {proof.value.toFixed(proof.decimals ?? 0)}
                {proof.suffix}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{proof.label}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} className="lg:col-span-7 lg:row-start-2 lg:pt-8">
          <p className="max-w-2xl text-lg leading-relaxed text-paper/90 md:text-xl">{hero.tagline}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{hero.body}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={HIRE_MAILTO} external>
              {hero.cta}
            </Button>
            <Button href="/portfolio" variant="outline">
              Portfolio
            </Button>
          </div>
        </Reveal>
      </PointerParallax>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-28 md:pt-16 lg:pt-20">
      <SectionTitle>Results at a glance</SectionTitle>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r, i) => (
          <Reveal key={r.label} delay={i * 80} spotlight className="border border-line bg-card p-6 transition-colors duration-500 hover:border-volt/30 sm:p-8">
            <p className="text-sm uppercase tracking-[0.1em] text-muted">{r.label}</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-volt">
              <CountUp value={r.value} decimals={r.decimals} prefix={r.prefix} suffix={r.suffix} />
            </p>
            {r.secondary && (
              <p className="mt-1 text-sm font-medium text-volt/80">
                <CountUp
                  value={r.secondary.value}
                  prefix={r.secondary.prefix}
                  suffix={r.secondary.suffix}
                />{" "}
                {r.secondary.label}
              </p>
            )}
            <p className="mt-5 text-[15px] leading-relaxed text-paper/85">{r.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Skills</SectionTitle>
        <p className="mt-3 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Your customers are searching online. I make finding you effortless.
        </p>

        <div className="mt-12 grid max-w-2xl gap-10 lg:mt-14 lg:max-w-none lg:grid-cols-3 lg:gap-10">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <SectionLabel>0{i + 1}</SectionLabel>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{group.title}</h3>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-paper/85">
                {group.items.map((item) => (
                  <p key={item.title}>
                    <strong className="font-semibold text-paper">{item.title}.</strong> {item.body}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Services</SectionTitle>
        {/* The call to action sits with the intro it answers, not stranded under the cards. */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className="mt-3 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Custom-built for what your brand needs.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Hire me for a standalone sprint, a specific phase, or the complete end-to-end strategy.
            </p>
          </div>
          <div className="shrink-0">
            <Button href={HIRE_MAILTO} external>
              Hire Me
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} spotlight className="border border-line bg-card p-6 transition-colors duration-500 hover:border-volt/30 sm:p-8">
              <p className="text-sm text-volt">0{i + 1}</p>
              <h3 className="mt-6 text-2xl font-semibold">{step.title}.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/85">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Clients</SectionTitle>

        <p className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Clients include</p>

        {/* Hairline logo wall: single-tone marks brighten on hover while a green rule draws underneath. */}
        <ul className="mt-10 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:mt-12 lg:grid-cols-5">
          {clients.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              delay={(i % 5) * 60}
              spotlight
              // An odd count leaves one cell alone in the two-column phone grid; let it span the row.
              className={`group relative border-b border-r border-line ${
                clients.length % 2 === 1 ? "max-sm:last:col-span-2" : ""
              }`}
            >
              <div
                title={c.name}
                className="flex h-full items-center justify-center px-3 py-6 sm:px-4 sm:py-8"
              >
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-[5/2] w-full max-w-[220px] object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100 max-sm:group-last:w-[calc(50%-0.75rem)]"
                  />
                ) : (
                  <span className="text-center text-sm font-semibold text-paper/70">{c.name}</span>
                )}
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-volt transition-transform duration-500 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story() {
  const [lead, ...rest] = story.paragraphs;
  return (
    <section id="story" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Story</SectionTitle>
        <p className="mt-3 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Trust me, I’m an engineer.
        </p>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-14">
          <Reveal as="p" className="text-xl leading-relaxed lg:col-span-6 lg:text-2xl lg:leading-relaxed">
            {lead}
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-paper/80 lg:col-span-6">
            {rest.map((p, i) => (
              <Reveal as="p" key={i} delay={(i + 1) * 80}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Contact</SectionTitle>
        <p className="mt-3 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Every word holds value. Every story feeds the conversion loop.
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{contact.body}</p>
        <div className="mt-8">
          <Button href={MAILTO} external>
            Send a message
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">{contact.lead}</p>
        <a
          href={MAILTO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block break-words text-[1.4rem] font-semibold tracking-tight text-volt underline-offset-8 hover:underline sm:text-4xl"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  );
}
