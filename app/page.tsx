import { Header } from "@/components/Header";
import { TerminalHero } from "@/components/TerminalHero";
import { ProjetoCard } from "@/components/ProjetoCard";
import { ContatoBotoes } from "@/components/ContatoBotoes";
import { projetos } from "@/lib/projetos";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink bg-noise">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-12 px-6 pt-24 sm:px-8">
        <div className="gradient-radial-glow pointer-events-none absolute inset-0" />
        <div className="relative flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Curitiba, PR — Brasil
          </span>
          <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-bone sm:text-6xl">
            Construo sistemas que{" "}
            <span className="text-gradient italic">resolvem</span> o problema do
            cliente, não só o do código.
          </h1>
          <p className="max-w-xl text-balance text-base leading-relaxed text-mute sm:text-lg">
            Desenvolvedor full-stack com projetos reais em produção — de
            clínicas a e-commerce, passando por logística e visão
            computacional.
          </p>
        </div>
        <div className="relative">
          <TerminalHero />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-copper">
                Trabalho
              </span>
              <h2 className="mt-2 font-display text-3xl font-medium text-bone sm:text-4xl">
                Projetos selecionados
              </h2>
            </div>
            <span className="hidden font-mono text-sm text-mute sm:block">
              {projetos.length} casos
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projetos.map((projeto, i) => (
              <ProjetoCard key={projeto.slug} projeto={projeto} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-line/60 px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-wider text-copper">
            Sobre
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium text-bone sm:text-4xl">
            De loja de bairro a deploy em produção.
          </h2>
          <div className="mt-6 space-y-4 text-balance text-[15px] leading-relaxed text-bone/80 sm:text-base">
            <p>
              Sou venezuelano, moro em Curitiba e sou dono de uma loja de
              conveniência — então sei como é a rotina de quem precisa que a
              tecnologia funcione no dia a dia, sem desculpa.
            </p>
            <p>
              Estudo Tecnologia na Faculdade SENAC, com foco em UX/Interação
              Humano-Computador e Redes Neurais Convolucionais, enquanto
              construo sistemas reais para clientes: e-commerce, gestão de
              entregas, landing pages e ferramentas internas.
            </p>
            <p>
              Trabalho principalmente com Next.js, TypeScript, Tailwind CSS e
              Supabase, sempre com deploy em produção — não fico só no
              protótipo.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="border-t border-line/60 px-6 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-copper">
              Contato
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-medium text-bone sm:text-4xl">
              Tem um projeto pra construir?
            </h2>
            <p className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-mute">
              Me chama e vamos conversar sobre o que você precisa.
            </p>
          </div>
          <ContatoBotoes />
        </div>
      </section>

      <footer className="border-t border-line/60 px-6 py-8 sm:px-8">
        <p className="text-center font-mono text-xs text-mute">
          jhon.dev — {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
