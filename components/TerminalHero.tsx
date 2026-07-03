"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Linha = {
  prompt?: string;
  texto: string;
  cor?: string;
  delay: number;
};

const linhas: Linha[] = [
  { prompt: "~", texto: "whoami", delay: 300 },
  { texto: "jhon — desenvolvedor full-stack", cor: "text-bone", delay: 600 },
  { prompt: "~", texto: "cat especialidade.txt", delay: 1100 },
  {
    texto: "Next.js · TypeScript · Supabase · Visão computacional",
    cor: "text-copper",
    delay: 1400,
  },
  { prompt: "~", texto: "./rodar --projetos", delay: 1900 },
  { texto: "6 sistemas em ja feitos, todos testados e funcionando 100%.", cor: "text-signal", delay: 2300 },
];

export function TerminalHero() {
  const [visiveis, setVisiveis] = useState(0);

  useEffect(() => {
    const timers = linhas.map((linha, i) =>
      setTimeout(() => setVisiveis((v) => Math.max(v, i + 1)), linha.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass-strong w-full max-w-2xl rounded-lg shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#E8889C]/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#D9C95F]/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-signal/70" />
        <span className="ml-3 font-mono text-xs text-mute">jhon@portfolio — zsh</span>
      </div>
      <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:text-[15px]">
        {linhas.slice(0, visiveis).map((linha, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-1.5"
          >
            {linha.prompt ? (
              <span>
                <span className="text-copper">{linha.prompt}</span>
                <span className="text-mute"> $ </span>
                <span className="text-bone">{linha.texto}</span>
              </span>
            ) : (
              <span className={linha.cor ?? "text-bone"}>{linha.texto}</span>
            )}
          </motion.div>
        ))}
        {visiveis >= linhas.length && (
          <span className="inline-block h-4 w-2 bg-copper/80 cursor-blink" />
        )}
      </div>
    </div>
  );
}
