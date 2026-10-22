import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
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
  testimonials,
} from "@/lib/site";

export default function Home() {
  return (
    <>
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
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-28">
      <Reveal>
        <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-volt">{site.name}</h2>
        <h1 className="mt-4 max-w-4xl text-[2.15rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {hero.headlineBefore}
          <span className="text-volt">{hero.highlight}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90 md:text-xl">{hero.tagline}</p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{hero.body}</p>

        <div className="mt-8">
          <Button href={HIRE_MAILTO} external>
            {hero.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-6 pb-16 md:pb-28">
      <SectionTitle>Results at a glance</SectionTitle>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r, i) => (
          <Reveal key={r.label} delay={i * 80} className="bg-card p-6 sm:p-8">
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
          Your customers are shopping online. I make finding you effortless.
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
        <p className="mt-3 max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Custom-built for what your brand needs.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Hire me for a standalone sprint, a specific phase, or the complete end-to-end strategy.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="bg-card p-6 sm:p-8">
              <p className="text-sm text-volt">0{i + 1}</p>
              <h3 className="mt-6 text-2xl font-semibold">{step.title}.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/85">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href={HIRE_MAILTO} external>
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionTitle>Clients &amp; Testimonials</SectionTitle>

        <p className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Clients include</p>

        {/* Logo row — placeholders until real logos are added in lib/site.ts */}
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-lg font-semibold text-paper/35 sm:grid-cols-3 sm:text-xl lg:grid-cols-6">
          {clients.map((c) => (
            <span key={c.name} className="flex h-9 items-center">
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.name} className="h-7 w-auto opacity-60 grayscale invert" />
              ) : (
                c.name
              )}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={i} delay={i * 80} className="flex flex-col bg-card p-7 sm:p-10">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{t.category}</p>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span aria-hidden className="h-10 w-10 shrink-0 rounded-full border border-line bg-ink" />
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted">{t.title}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
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

        <div className="mt-12 lg:mt-16">
          <SectionLabel>Before I write a single headline, I analyze</SectionLabel>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {story.inputs.map((input, i) => (
              <Reveal key={input} delay={i * 80} className="bg-card p-6 sm:p-8">
                <p className="text-sm text-volt">0{i + 1}</p>
                <p className="mt-6 text-lg font-semibold leading-snug">{input}</p>
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
