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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi, I&apos;m Joe.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          [PLACEHOLDER — a casual, first-person intro: where you live, your family, what you
          do outside of work. e.g. &quot;Outside of client work, I&apos;m usually tinkering
          with something in the garage, on the sideline coaching, or brewing a batch of
          something.&quot;]
        </p>
      </section>

      {/* Hobbies & interests */}
      <section className="mb-16">
        <SectionHeading>Hobbies &amp; Interests</SectionHeading>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>[PLACEHOLDER — e.g. homebrewing]</li>
          <li>[PLACEHOLDER — e.g. coaching youth sports]</li>
          <li>[PLACEHOLDER — e.g. DIY / home automation projects]</li>
          <li>[PLACEHOLDER — add or remove as many as you like]</li>
        </ul>
      </section>

      {/* Side projects */}
      <section className="mb-16">
        <SectionHeading>Side Projects</SectionHeading>
        <div className="mt-4">
          <h3 className="font-semibold">TiltBridge — Raspberry Pi Brew Monitor</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            [PLACEHOLDER — confirm you want this featured] A Raspberry Pi Zero 2 W reads a
            Tilt hydrometer over Bluetooth LE and forwards fermentation readings to
            Brewfather every 15 minutes, with a live web dashboard for tracking gravity,
            temperature, and brew progress.
          </p>
        </div>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          [PLACEHOLDER — add other side projects here, or remove this section]
        </p>
      </section>

      {/* Fun facts */}
      <section className="mb-16">
        <SectionHeading>Fun Facts</SectionHeading>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>[PLACEHOLDER — e.g. a fact about your military service, a hobby milestone, a fun personal detail]</li>
          <li>[PLACEHOLDER]</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <SectionHeading>Say Hello</SectionHeading>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          [PLACEHOLDER — personal contact preference, e.g. LinkedIn DM or a personal email]
        </p>
      </section>
    </div>
  );
}
