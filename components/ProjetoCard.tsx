"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Projeto } from "@/lib/projetos";

export function ProjetoCard({ projeto, index }: { projeto: Projeto; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/projetos/${projeto.slug}`}
        className="group glass relative flex flex-col gap-5 rounded-lg p-6 transition-all hover:border-signal/40 hover:bg-white/[0.06] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
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
          <ArrowUpRight
            className="h-5 w-5 text-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
            strokeWidth={1.5}
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            {projeto.titulo}
          </h3>
          <p className="mt-1 text-sm text-mute">{projeto.cliente}</p>
        </div>

        <p className="text-balance text-[15px] leading-relaxed text-bone/80">
          {projeto.problema}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {projeto.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="glass rounded-full px-3 py-1 font-mono text-[11px] text-mute"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
