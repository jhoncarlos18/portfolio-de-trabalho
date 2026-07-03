import Link from "next/link";

export function Header() {
  return (
    <header className="glass fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg font-medium text-bone">
          jhon<span className="text-signal">.</span>dev
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-mute">
          <Link href="/#projetos" className="transition-colors hover:text-signal">
            Projetos
          </Link>
          <Link href="/#sobre" className="transition-colors hover:text-signal">
            Sobre
          </Link>
          <Link href="/#contato" className="transition-colors hover:text-signal">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
