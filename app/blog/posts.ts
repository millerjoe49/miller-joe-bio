export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "claude-os",
    title: "How I Set Up My Claude OS",
    date: "August 2026",
    excerpt:
      "A personal system that makes Claude Code actually work like an extension of how I operate — not just a chatbot I re-explain myself to every session.",
  },
];
