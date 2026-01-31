import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { useServices } from "@/hooks/use-services";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Settings, ChevronRight, Zap } from "lucide-react";

export default function Home() {
  const { data: services, isLoading } = useServices();
  const featuredServices = services?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using Unsplash image for motorcycle workshop atmosphere */}
          {/* Image of motorcycle in dark garage */}
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
            alt="Motorcycle Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/80 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-black/40 backdrop-blur-sm">
              <span className="text-primary font-mono text-xs md:text-sm font-bold tracking-widest uppercase">
                Premium Motorcycle & Engine Repair
              </span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl text-white tracking-tighter uppercase mb-6 drop-shadow-2xl">
              337 Sleds <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                & Customs
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 font-body mb-10 leading-relaxed">
              Expert service for the ride of your life. Specializing in motorcycle maintenance, 
              custom modifications, and small engine repair.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto font-display uppercase tracking-wider text-base h-14 px-8 clip-path-button bg-primary hover:bg-orange-600 text-black font-bold"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto font-display uppercase tracking-wider text-base h-14 px-8 border-zinc-700 hover:bg-white/5 text-white"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <div className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-black font-mono font-bold uppercase text-sm md:text-base tracking-widest">
            <span className="flex items-center gap-2"><Settings className="w-5 h-5" /> Expert Mechanics</span>
            <span className="hidden md:block text-black/30">///</span>
            <span className="flex items-center gap-2"><Star className="w-5 h-5" /> Custom Builds</span>
            <span className="hidden md:block text-black/30">///</span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5" /> Performance Parts</span>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900/50 to-transparent -skew-x-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeader 
              title="Expert Services" 
              subtitle="What We Do"
            />
            <Link href="/services">
              <Button variant="ghost" className="text-zinc-400 hover:text-primary mb-12 group">
                View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] bg-zinc-900/50 animate-pulse rounded-lg border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-800 to-black p-12 md:p-16 rounded-2xl relative overflow-hidden border border-white/10 group">
            {/* Abstract tech overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase mb-6">
                  Ready to upgrade your ride?
                </h2>
                <p className="text-zinc-400 text-lg">
                  Whether you need a tune-up or a complete overhaul, our team of experts is ready to help you get the most out of your machine.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="h-16 px-10 text-lg bg-white text-black hover:bg-primary hover:text-black font-display font-bold uppercase tracking-wider clip-path-button transition-all">
                  Get a Quote <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
