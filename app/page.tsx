"use client";

import Image from "next/image";
import { useState } from "react";

const certifications = [
  "Certified SAFe® 6 Practice Consultant",
  "Certified SAFe Agilist",
  "Advanced Certified ScrumMaster (A-CSM)",
  "Certified Scrum Product Owner (CSPO)",
  "ICAgile Certified Professional – Agility in the Enterprise",
  "ICAgile Agile Team Facilitation",
  "AWS Certified Cloud Practitioner",
  "Enterprise Design Thinking Practitioner (IBM)",
];

const skillGroups = [
  {
    label: "Delivery & Agile Leadership",
    skills: [
      "Agile & Scrum",
      "SAFe",
      "Kanban",
      "Product Ownership",
      "Program & Project Management",
      "Team Coaching & Mentoring",
      "Backlog & Roadmap Strategy",
    ],
  },
  {
    label: "ERP & Systems",
    skills: ["NetSuite", "ERP Implementations", "Business Process", "Integration", "SQL"],
  },
  {
    label: "AI & Emerging Tech",
    skills: [
      "Generative AI for Business & Leadership",
      "AI Agents",
      "Microsoft Copilot",
      "Prompt Engineering",
      "Machine Learning Foundations",
    ],
  },
  {
    label: "Tools",
    skills: ["Jira", "Confluence", "SharePoint", "Azure DevOps", "Smartsheet", "Microsoft 365"],
  },
];

const engagements = [
  {
    company: "Hilldrup",
    title: "Project Manager",
    dates: "Oct 2025 – Present",
    bullets: [
      "Lead delivery for a multi-phase NetSuite ERP implementation",
      "Drive large-scale backlog refinement and epic restructuring",
      "Advise on integration and legacy-system strategy",
      "Establish delivery reporting and sprint planning cadence",
    ],
  },
  {
    company: "Forge Biologics",
    title: "Agile Delivery Lead / Project Manager",
    dates: "Oct 2024 – Jan 2026",
    bullets: [
      "Led end-to-end delivery for large, cross-functional initiatives spanning technology, data, and business teams in a regulated environment",
      "Established delivery structure, cadences, and visibility across parallel workstreams with competing priorities",
      "Balanced Agile execution with governance, quality gates, and regulatory constraints",
    ],
  },
  {
    company: "CandyCo",
    title: "Project Manager",
    dates: "Aug 2024 – Jan 2025",
    bullets: [
      "Orchestrated sprint-based delivery for a multi-workstream transformation while managing scope, schedule, and budget constraints",
      "Coordinated business and technical teams through discovery, execution, and transition",
    ],
  },
  {
    company: "NSI Industries",
    title: "Project Manager & Account Manager",
    dates: "Sep 2023 – Jul 2024",
    bullets: [
      "Owned delivery and client engagement for a complex post-acquisition integration initiative",
      "Coordinated delivery across product, data, and integration workstreams",
    ],
  },
  {
    company: "Sunbelt Rentals",
    title: "Scrum Master & Agile Coach",
    dates: "May 2022 – Sep 2023",
    bullets: [
      "Served as Scrum Master and Agile coach for established product teams operating at scale",
      "Coached Product Owners on backlog refinement, prioritization, and roadmap clarity",
      "Delivered Agile and Scrum training for new teams and leaders",
    ],
  },
  {
    company: "Mastercard",
    title: "Product Owner",
    dates: "Feb 2022 – Apr 2022",
    bullets: [
      "Partnered with product and engineering teams to shape and prioritize feature delivery",
      "Applied Lean practices to reduce waste and accelerate value delivery",
    ],
  },
  {
    company: "TIAA",
    title: "Project Management / Product Support",
    dates: "Apr 2021 – Dec 2021",
    bullets: [
      "Supported SAFe-aligned teams through PI planning, execution, and cross-team coordination",
    ],
  },
];

const earlierCareer = [
  { company: "Synechron", role: "Associate Director – Agilist", dates: "2019 – 2021" },
  { company: "Empowered / Empowered Benefits", role: "Agile Coach, Program & Business Planning Manager", dates: "2016 – 2019" },
  { company: "Wells Fargo", role: "IT eCommerce Project Manager", dates: "2016" },
  { company: "Polypore", role: "Project Manager – data center migration", dates: "2015 – 2016" },
  { company: "Belk", role: "Project Manager – e-commerce", dates: "2013 – 2015" },
  { company: "Kohl's Department Stores", role: "Project Manager – e-commerce", dates: "2010 – 2013" },
  { company: "Jockey International", role: "Business Systems Analyst / Web Developer", dates: "2001 – 2010" },
  { company: "American Eagle.com", role: "Web Developer", dates: "2000 – 2001" },
  { company: "Wisconsin Air National Guard / U.S. Air Force", role: "Electronic Warfare Systems Specialist", dates: "1990 – 1999" },
];

const education = [
  { school: "Nova Southeastern University", degree: "Master of Science (MS)", dates: "2010 – 2015" },
  { school: "University of Wisconsin–Parkside", degree: "Bachelor of Science", dates: "2000 – 2003" },
  { school: "Gateway Technical College", degree: "Associate of Science", dates: "1997 – 1999" },
];

const TABS = ["Overview", "Experience", "Skills", "What's Next"] as const;
type Tab = (typeof TABS)[number];

function SectionHeading({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{kicker}</p>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{children}</h2>
    </div>
  );
}

function OverviewTab() {
  return (
    <>
      <section className="mb-16">
        <p className="max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          I lead NetSuite ERP implementations for mid-market companies where system accuracy
          and process discipline are non-negotiable — spanning discovery, design,
          configuration, and go-live. At Centric Consulting, I&apos;m a Senior Manager in our
          Charlotte business unit, splitting my time between client delivery, business
          development, and training consultants on applied AI: using it to document
          requirements faster, audit deliverables, and cut through repetitive work.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          Before moving into ERP, I spent 20 years in project and program management across
          Agile, Scrum, and traditional methodologies. That background shapes how I run
          implementations today: sprint-based delivery, clear scope control, and realistic
          timelines.
        </p>
      </section>

      <section>
        <SectionHeading kicker="Credentials">Certifications</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-sm text-accent dark:text-zinc-100"
            >
              {cert}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

function ExperienceTab() {
  return (
    <>
      <section className="mb-16">
        <SectionHeading kicker="Track Record">Recent Client Engagements</SectionHeading>
        <p className="-mt-2 mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          Delivered as a consultant with Centric Consulting.
        </p>
        <div className="space-y-6">
          {engagements.map((e) => (
            <div key={e.company} className="border-l-2 border-accent/30 pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold">
                  {e.title} — {e.company}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{e.dates}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading kicker="Background">Earlier Career</SectionHeading>
        <div className="divide-y divide-black/[.08] dark:divide-white/[.145]">
          {earlierCareer.map((job) => (
            <div
              key={job.company + job.role}
              className="flex flex-wrap items-baseline justify-between gap-x-4 py-2.5 text-sm"
            >
              <span className="text-zinc-700 dark:text-zinc-300">
                <span className="font-medium text-foreground">{job.company}</span> — {job.role}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">{job.dates}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SkillsTab() {
  return (
    <>
      <section className="mb-16">
        <SectionHeading kicker="Toolkit">Skills</SectionHeading>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {group.label}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-black/[.04] px-3 py-1 text-sm text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading kicker="Foundation">Education</SectionHeading>
        <div className="space-y-2">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
            >
              <span className="text-zinc-700 dark:text-zinc-300">
                <span className="font-medium text-foreground">{ed.school}</span> — {ed.degree}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">{ed.dates}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-accent-soft px-8 py-10 text-center">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          <a
            href="mailto:Joe.Miller@centricconsulting.com"
            className="font-medium text-accent underline underline-offset-4"
          >
            Joe.Miller@centricconsulting.com
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/millerjoe49"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-4"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </>
  );
}

function WhatsNextTab() {
  return (
    <section>
      <SectionHeading kicker="Growth">What&apos;s Next</SectionHeading>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
        <li>Pursuing my NetSuite SuiteFoundation certification</li>
        <li>
          Pursuing my{" "}
          <a
            href="https://anthropic-partners.skilljar.com/claude-certified-associate-foundations-certification"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-4"
          >
            Claude Certified Associate
          </a>{" "}
          certification
        </li>
        <li>
          Attending{" "}
          <a
            href="https://www.netsuitesuiteworld.com/home.shtml"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-4"
          >
            SuiteWorld
          </a>{" "}
          this year
        </li>
      </ul>
    </section>
  );
}

export default function ProfessionalPage() {
  const [tab, setTab] = useState<Tab>("Overview");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      {/* Hero */}
      <section className="mb-12">
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
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Joe Miller</h1>
            <p className="mt-1 text-base text-accent sm:text-lg">
              NetSuite ERP Implementation Lead · AI Advisor · Senior Manager at Centric
              Consulting
            </p>
          </div>
        </div>
      </section>

      {/* Tab bar */}
      <div className="mb-12 flex gap-6 border-b border-black/[.08] dark:border-white/[.145]">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative pb-3 text-sm font-medium transition-colors ${
              tab === t
                ? "text-foreground"
                : "text-zinc-500 hover:text-foreground dark:text-zinc-400"
            }`}
          >
            {t}
            {tab === t && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "Overview" && <OverviewTab />}
      {tab === "Experience" && <ExperienceTab />}
      {tab === "Skills" && <SkillsTab />}
      {tab === "What's Next" && <WhatsNextTab />}
    </div>
  );
}
