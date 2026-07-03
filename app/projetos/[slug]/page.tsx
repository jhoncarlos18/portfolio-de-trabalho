import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { ContatoBotoes } from "@/components/ContatoBotoes";
import { projetos } from "@/lib/projetos";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = projetos.find((p) => p.slug === params.slug);

  if (!projeto) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink bg-noise">
      <Header />

      <article className="px-6 pt-32 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projetos"
            className="mb-10 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mute transition-colors hover:text-copper"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Voltar aos projetos
          </Link>

          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-mute">{projeto.ano}</span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: projeto.cor }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-mute">
              {projeto.categoria}
            </span>
          </div>

          <h1 className="mt-3 text-balance font-display text-4xl font-medium leading-tight text-bone sm:text-5xl">
            {projeto.titulo}
          </h1>
          <p className="mt-2 text-base text-mute">{projeto.cliente}</p>

          {/* Métricas */}
          <div className="mt-10 grid grid-cols-3 gap-4 rounded-lg p-6 glass">
            {projeto.metricas.map((m) => (
              <div key={m.label}>
                <p
                  className="font-display text-xl font-medium sm:text-2xl"
                  style={{ color: projeto.cor }}
                >
                  {m.valor}
                </p>
                <p className="mt-1 text-xs leading-snug text-mute">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="mt-14 space-y-12">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-copper">
                O problema
              </h2>
              <p className="mt-3 text-balance text-base leading-relaxed text-bone/85">
                {projeto.problema}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-copper">
                A solução
              </h2>
              <p className="mt-3 text-balance text-base leading-relaxed text-bone/85">
                {projeto.solucao}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-copper">
                O resultado
              </h2>
              <p className="mt-3 text-balance text-base leading-relaxed text-bone/85">
                {projeto.resultado}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-copper">
                Stack utilizada
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {projeto.stack.map((tech) => (
                  <span
                    key={tech}
                    className="glass rounded-full px-3 py-1.5 font-mono text-xs text-bone/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-line/60 pt-10">
            <p className="mb-5 text-balance text-base text-bone/80">
              Quer um sistema parecido com este para o seu negócio?
            </p>
            <ContatoBotoes />
          </div>
        </div>
      </article>
    </main>
  );
}
