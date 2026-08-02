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
    company: "Forge Biologics",
    title: "Agile Delivery Lead / Project Manager",
    dates: "Oct 2024 – Present",
    bullets: [
      "Lead end-to-end delivery for large, cross-functional initiatives spanning technology, data, and business teams in a regulated environment",
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{children}</h2>
  );
}

export default function ProfessionalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Joe Miller</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          NetSuite ERP Implementation Lead · AI Advisor · Senior Manager at Centric Consulting
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
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

      {/* Certifications */}
      <section className="mb-16">
        <SectionHeading>Certifications</SectionHeading>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
            >
              {cert}
            </span>
          ))}
        </div>
      </section>

      {/* Recent engagements */}
      <section className="mb-16">
        <SectionHeading>Recent Client Engagements</SectionHeading>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Delivered as a consultant with Centric Consulting.
        </p>
        <div className="mt-6 space-y-8">
          {engagements.map((e) => (
            <div key={e.company}>
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

      {/* Earlier career */}
      <section className="mb-16">
        <SectionHeading>Earlier Career</SectionHeading>
        <div className="mt-4 divide-y divide-black/[.08] dark:divide-white/[.145]">
          {earlierCareer.map((job) => (
            <div
              key={job.company + job.role}
              className="flex flex-wrap items-baseline justify-between gap-x-4 py-2 text-sm"
            >
              <span className="text-zinc-700 dark:text-zinc-300">
                <span className="font-medium text-foreground">{job.company}</span> — {job.role}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">{job.dates}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-4 space-y-4">
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

      {/* Education */}
      <section className="mb-16">
        <SectionHeading>Education</SectionHeading>
        <div className="mt-4 space-y-2">
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

      {/* Contact */}
      <section>
        <SectionHeading>Get in Touch</SectionHeading>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          <a
            href="mailto:Joe.Miller@centricconsulting.com"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            Joe.Miller@centricconsulting.com
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/millerjoe49"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}
