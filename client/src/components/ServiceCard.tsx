import { Service } from "@shared/schema";
import { motion } from "framer-motion";
import { Wrench, Zap } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.category === "motorcycle" ? Zap : Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-primary/10 translate-x-2 translate-y-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-full bg-zinc-900 border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60" />
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          
          <div className="absolute top-4 right-4 z-20">
            <span className={`
              px-3 py-1 text-xs font-mono font-bold uppercase rounded-sm border 
              ${service.category === 'motorcycle' 
                ? 'text-primary border-primary bg-black/80' 
                : 'text-zinc-400 border-zinc-600 bg-black/80'}
            `}>
              {service.category === 'motorcycle' ? 'Moto' : 'Small Engine'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/5 rounded text-primary group-hover:text-white group-hover:bg-primary transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-primary transition-colors">
              {service.title}
            </h3>
          </div>
          
          <p className="text-zinc-400 leading-relaxed text-sm font-body flex-grow">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
