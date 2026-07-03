import { MessageCircle, Mail } from "lucide-react";

function IconeLinkedin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function IconeGithub({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.34-1.11.62-1.37-2.22-.26-4.55-1.13-4.55-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.43.2 2.49.1 2.75.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const CONTATOS = {
  whatsapp: "https://wa.me/5500000000000",
  email: "mailto:jhon@example.com",
  linkedin: "https://linkedin.com/in/jhon",
  github: "https://github.com/jhon",
};

export function ContatoBotoes({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={CONTATOS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-primary flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        Falar no WhatsApp
      </a>
      <a
        href={CONTATOS.email}
        className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:text-signal"
      >
        <Mail className="h-4 w-4" strokeWidth={2} />
        E-mail
      </a>
      <a
        href={CONTATOS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:text-signal"
      >
        <IconeLinkedin className="h-4 w-4" />
        LinkedIn
      </a>
      <a
        href={CONTATOS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:text-signal"
      >
        <IconeGithub className="h-4 w-4" />
        GitHub
      </a>
    </div>
  );
}
