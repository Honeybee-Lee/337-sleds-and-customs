import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, x: centered ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="inline-block text-primary font-mono text-sm font-bold tracking-[0.2em] mb-2 uppercase"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-tight"
      >
        {title}
      </motion.h2>
      <div className={`mt-4 h-1 w-24 bg-primary ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
