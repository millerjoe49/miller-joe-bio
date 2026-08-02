import Link from "next/link";

export default function ClaudeOSPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        href="/blog"
        className="text-sm font-medium text-accent underline underline-offset-4"
      >
        ← Back to Blog
      </Link>

      <header className="mt-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          August 2026
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          How I Set Up My Claude OS
        </h1>
      </header>

      <div className="space-y-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I use Claude Code every day — for client delivery, for training other consultants
          on applied AI, and for a growing pile of personal projects (this site included).
          Somewhere along the way I stopped treating it like a chatbot I re-explain myself to
          every session, and started treating it like an operating system I could actually
          configure. I call the result my &quot;Claude OS,&quot; and it&apos;s made the tool
          dramatically more useful.
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          The problem it solves
        </h2>
        <p>
          Without persistent setup, every session starts from zero: re-explaining who I am,
          what I&apos;m working on, and how I like things written. Multiply that across
          dozens of sessions a week and it&apos;s a real tax. A Claude OS front-loads that
          context once so Claude starts every session already knowing how I work.
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Three pieces, working together
        </h2>
        <p>A Claude OS is really just three things layered on top of each other:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">A folder</strong>{" "}
            Claude can read and write — your actual workspace, built on plain Markdown
            files so it&apos;s portable and future-proof.
          </li>
          <li>
            <strong className="text-foreground">Instruction files</strong> (
            <code className="rounded bg-black/[.05] px-1 py-0.5 text-sm dark:bg-white/[.08]">
              CLAUDE.md
            </code>{" "}
            and{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 text-sm dark:bg-white/[.08]">
              MEMORY.md
            </code>
            ) that teach Claude your role, your voice, and your rules — read automatically
            at the start of every session.
          </li>
          <li>
            <strong className="text-foreground">Skills</strong> — packaged routines for the
            tasks I do over and over, so I describe what I need in plain language instead of
            rebuilding the same prompt from scratch each time.
          </li>
        </ul>

        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Organized by workstation
        </h2>
        <p>
          Rather than one giant undifferentiated instruction file, I split the OS into
          &quot;workstations&quot; — one per area of work (client delivery, business
          development, requirements gathering, personal-brand content, and general
          housekeeping). Each workstation has its own instructions and its own memory. A
          routing map at the root sends a request to the right workstation automatically, so
          asking for a status report and asking for a LinkedIn post pull from entirely
          different context without me having to specify which.
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Memory that actually persists
        </h2>
        <p>
          The single highest-leverage piece is the memory system. Facts, decisions, and
          preferences get written to a standing memory file the moment they come up — so the
          next session already knows them instead of relearning them. &quot;Remember
          this&quot; is one of the most-used phrases in my day-to-day.
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          How it grows
        </h2>
        <p>
          I didn&apos;t build this in one sitting. It started as a single instructions file
          and one workstation, and grew a piece at a time — a new workstation when a new area
          of work showed up, a new skill the third time I caught myself repeating a task by
          hand. That&apos;s still how it grows: a little context added every week compounds
          into something that genuinely works the way I do.
        </p>

        <p>
          If you want to build something similar, start small: one instructions file, one
          real task you do every week, and a habit of telling Claude to remember what it
          learns. The rest accretes from there.
        </p>
      </div>
    </article>
  );
}
