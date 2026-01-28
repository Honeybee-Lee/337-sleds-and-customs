import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useServices } from "@/hooks/use-services";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star,
  Bike,
  Cog,
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import type { Service } from "@shared/schema";

export default function Home() {
  const { data: services, isLoading } = useServices();
  
  const motorcycleServices = services?.filter(s => s.category === 'motorcycle') || [];
  const smallEngineServices = services?.filter(s => s.category === 'small-engine') || [];

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-primary py-2 text-center">
        <p className="text-black font-bold text-sm uppercase tracking-wider">
          Expert Motorcycle & Small Engine Repair in Your Area
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
            alt="Motorcycle Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase mb-6">
              337 Sleds <br/>
              <span className="text-primary">& Customs</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
              Premium motorcycle service, custom builds, and small engine repair. 
              Your ride is in expert hands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto uppercase tracking-wider text-base h-14 px-10 bg-primary hover:bg-orange-600 text-black font-bold"
                  data-testid="button-book-now"
                >
                  Book Service Now
                </Button>
              </Link>
              <a href="#services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto uppercase tracking-wider text-base h-14 px-10 border-zinc-500 hover:bg-white/10 text-white"
                  data-testid="button-view-services"
                >
                  View Services
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
              The Best in the Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wrench className="w-10 h-10" />}
              title="Expert Mechanics"
              description="Certified technicians with decades of combined experience working on all makes and models."
            />
            <FeatureCard 
              icon={<Cog className="w-10 h-10" />}
              title="Quality Parts"
              description="We use only OEM and high-quality aftermarket parts to ensure your ride performs at its best."
            />
            <FeatureCard 
              icon={<Star className="w-10 h-10" />}
              title="Customer First"
              description="Transparent pricing, honest assessments, and work completed right the first time."
            />
          </div>
        </div>
      </section>

      {/* Services Section - Motorcycles */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase flex items-center gap-4">
                <Bike className="w-12 h-12 text-primary" />
                Motorcycle Services
              </h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="text-zinc-400 hover:text-primary group" data-testid="link-all-services">
                View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 bg-zinc-900 animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motorcycleServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section - Small Engines */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Also Available</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase flex items-center gap-4">
              <Settings className="w-12 h-12 text-primary" />
              Small Engine Repair
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-80 bg-zinc-800 animate-pulse rounded-lg" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {smallEngineServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}

          <div className="mt-8 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <p className="text-zinc-300">
              We service lawn mowers, generators, snow blowers, pressure washers, and other small engine equipment.
              Bring it in for a free diagnostic!
            </p>
          </div>
        </div>
      </section>

      {/* Parts Coming Soon Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591462393397-c80387405238?q=80&w=2070&auto=format')] bg-cover bg-center" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Coming Soon</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
              Parts & Accessories Shop
            </h2>
            
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10">
              We're building an online parts store so you can get quality motorcycle parts 
              and accessories shipped directly to you. Stay tuned!
            </p>

            <Link href="/parts">
              <Button 
                size="lg" 
                variant="outline" 
                className="uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-black"
                data-testid="button-parts-coming-soon"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Best shop in town! They got my Harley running like new. Fair prices and honest work."
              author="Mike R."
              rating={5}
            />
            <TestimonialCard 
              quote="Brought in my lawn mower that wouldn't start. Fixed it same day at a great price."
              author="Sarah T."
              rating={5}
            />
            <TestimonialCard 
              quote="These guys know their stuff. Custom exhaust install was perfect. Highly recommend!"
              author="James L."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-black/80 text-lg mb-8">
                Bring your bike in for service or give us a call. We're here to help 
                you get the most out of your ride.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="uppercase tracking-wider bg-black text-white hover:bg-zinc-800 h-14 px-10"
                  data-testid="button-contact-us"
                >
                  Contact Us <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactInfoCard 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                info="(337) 555-BIKE"
              />
              <ContactInfoCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                info="123 Main Street"
              />
              <ContactInfoCard 
                icon={<Clock className="w-6 h-6" />}
                title="Hours"
                info="Mon-Sat 8am-6pm"
              />
              <ContactInfoCard 
                icon={<Wrench className="w-6 h-6" />}
                title="Services"
                info="All Makes & Models"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white uppercase">337 Sleds & Customs</h3>
              <p className="text-zinc-500 mt-2">Expert motorcycle & small engine repair</p>
            </div>
            
            <div className="flex gap-8">
              <Link href="/" className="text-zinc-400 hover:text-primary transition-colors">Home</Link>
              <Link href="/services" className="text-zinc-400 hover:text-primary transition-colors">Services</Link>
              <Link href="/parts" className="text-zinc-400 hover:text-primary transition-colors">Parts</Link>
              <Link href="/contact" className="text-zinc-400 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} 337 Sleds & Customs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 bg-zinc-800/50 border-zinc-700 hover:border-primary/50 transition-colors h-full">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white uppercase mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </Card>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="overflow-hidden bg-zinc-800/50 border-zinc-700 hover:border-primary/50 transition-all group h-full"
        data-testid={`card-service-${service.id}`}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-white uppercase mb-2">{service.title}</h3>
          <p className="text-zinc-400 text-sm">{service.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, rating }: { quote: string; author: string; rating: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 bg-zinc-800/50 border-zinc-700 h-full">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-zinc-300 italic mb-6">"{quote}"</p>
        <p className="text-white font-bold">— {author}</p>
      </Card>
    </motion.div>
  );
}

function ContactInfoCard({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) {
  return (
    <div className="bg-black/20 rounded-lg p-6">
      <div className="text-black mb-2">{icon}</div>
      <p className="text-black/60 text-sm uppercase tracking-wider">{title}</p>
      <p className="text-black font-bold text-lg">{info}</p>
    </div>
  );
}
