export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-8 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Joe Miller</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/millerjoe49"
            className="hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:Joe.Miller@centricconsulting.com"
            className="hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
