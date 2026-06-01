"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@/shared/schema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Custom Build", "Restoration", "Performance", "Small Engine"];

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
  });

  const [filter, setFilter] = useState("All");

  const filtered = projects?.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Recent Projects" subtitle="Our Work" centered />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`
                px-5 py-2 rounded-full font-mono text-sm font-bold uppercase tracking-wide transition-all border
                ${filter === cat
                  ? "bg-primary text-black border-primary shadow-lg shadow-primary/20"
                  : "text-zinc-500 border-zinc-700 hover:border-zinc-500 hover:text-white bg-black/30"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-zinc-900/50 animate-pulse rounded-lg border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered?.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-white/5 hover:border-primary/40 transition-colors duration-300 cursor-pointer"
                  data-testid={`card-project-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/50 rounded-sm mb-2 bg-black/60">
                      {project.category}
                    </span>
                    <p className="font-display font-bold text-white text-sm uppercase tracking-wide leading-tight">
                      {project.title}
                    </p>
                  </div>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered?.length === 0 && !isLoading && (
          <div className="py-20 text-center">
            <p className="text-zinc-500 font-mono">No projects in this category yet.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-zinc-400 font-body text-lg mb-6">
            Have a project in mind? Let's make it happen.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-10 bg-primary text-black font-display font-bold uppercase tracking-wider hover:bg-orange-500 clip-path-button"
              data-testid="button-start-project"
            >
              Start Your Project <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
