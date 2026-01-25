import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Services() {
  const { data: services, isLoading } = useServices();
  const [filter, setFilter] = useState<'all' | 'motorcycle' | 'small-engine'>('all');
  const [search, setSearch] = useState('');

  const filteredServices = services?.filter(s => {
    const matchesCategory = filter === 'all' || s.category === filter;
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || 
                          s.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive Care"
          centered
        />

        {/* Controls */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-900/50 p-6 rounded-xl border border-white/5">
          {/* Tabs */}
          <div className="flex p-1 bg-black/40 rounded-lg border border-white/5">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'motorcycle', label: 'Motorcycles' },
              { id: 'small-engine', label: 'Small Engines' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`
                  px-6 py-2 rounded-md font-mono text-sm font-bold uppercase tracking-wide transition-all
                  ${filter === tab.id 
                    ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <Input 
              placeholder="Search services..." 
              className="pl-10 bg-black/40 border-white/10 focus:border-primary/50 text-white font-mono"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] bg-zinc-900/30 animate-pulse rounded-lg border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices?.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </AnimatePresence>
            
            {filteredServices?.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">No services found</h3>
                <p className="text-zinc-500">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
