import Image from "next/image";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{children}</h2>
  );
}

export default function PersonalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/20 sm:h-24 sm:w-24">
            <Image
              src="/images/joe-headshot.jpg"
              alt="Joe Miller"
              fill
              priority
              sizes="(min-width: 640px) 96px, 80px"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi, I&apos;m Joe.</h1>
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          Outside of client work, I&apos;m usually tinkering with some kind of DIY or
          AI-powered project around the house — most recently rigging up a Raspberry Pi to
          keep an eye on my latest batch of beer. I&apos;ve been an avid homebrewer since
          2021, and before that spent a few seasons on the sideline as an assistant coach
          for girls lacrosse (2015–2018).
        </p>
      </section>

      {/* Hobbies & interests */}
      <section className="mb-16">
        <SectionHeading>Hobbies &amp; Interests</SectionHeading>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>Homebrewing — avid homebrewer since 2021</li>
          <li>Coaching — former assistant coach, girls lacrosse (2015–2018)</li>
          <li>DIY home automation &amp; AI tinkering</li>
        </ul>
      </section>

      {/* Side projects */}
      <section className="mb-16">
        <SectionHeading>Side Projects</SectionHeading>
        <div className="mt-4 space-y-8">
          <div>
            <h3 className="font-semibold">TiltBridge — Raspberry Pi Brew Monitor</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              A Raspberry Pi Zero 2 W reads a Tilt hydrometer over Bluetooth LE and forwards
              fermentation readings to Brewfather every 15 minutes, with a live web
              dashboard for tracking gravity, temperature, and brew progress.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">AI Brew Assistant</h3>
              <span className="rounded-full bg-black/[.04] px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-white/[.08] dark:text-zinc-400">
                In the works
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Extending TiltBridge with an AI layer that reads gravity, temperature, and
              Brewfather history to flag a stalled fermentation and draft tasting notes
              automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">AI-Organized Second Brain</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              I run an AI agent alongside my personal Obsidian vault that keeps persistent
              memory across sessions, auto-organizes notes, and cross-links people,
              projects, and decisions — so context never gets lost between sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Fun facts */}
      <section className="mb-16">
        <SectionHeading>Fun Facts</SectionHeading>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>
            Lifelong Milwaukee Brewers fan — I&apos;ve collected over 200 bobbleheads
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <SectionHeading>Say Hello</SectionHeading>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          The best way to reach me outside of work is a{" "}
          <a
            href="https://www.linkedin.com/in/millerjoe49"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-4"
          >
            LinkedIn
          </a>{" "}
          message.
        </p>
      </section>
    </div>
  );
}
