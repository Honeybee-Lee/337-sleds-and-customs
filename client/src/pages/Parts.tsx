import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag, 
  Bell, 
  Disc, 
  Wind, 
  Gauge, 
  Lightbulb, 
  Settings, 
  Wrench,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const partCategories = [
  {
    id: "brakes",
    name: "Brakes",
    description: "Brake pads, rotors, calipers, and brake lines",
    icon: Disc,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "exhaust",
    name: "Exhaust Systems",
    description: "Full systems, slip-ons, headers, and mufflers",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tailpipes",
    name: "Tailpipes & Tips",
    description: "Custom tailpipes, exhaust tips, and end caps",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gauges",
    name: "Gauges & Electronics",
    description: "Speedometers, tachometers, and digital displays",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "LED headlights, turn signals, and accent lights",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "maintenance",
    name: "Maintenance Parts",
    description: "Filters, spark plugs, chains, and fluids",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Parts() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop" 
            alt="Parts Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Coming Soon</span>
          </div>
          
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 uppercase tracking-tight">
            Parts & Accessories
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
            Quality motorcycle parts and accessories, organized by category. 
            Browse what we'll have available when we launch.
          </p>
        </div>
      </section>

      {/* Part Categories Sections */}
      {partCategories.map((category, idx) => (
        <CategorySection key={category.id} category={category} index={idx} />
      ))}

      {/* Newsletter Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center gap-3 mb-6 justify-center text-white font-bold text-sm uppercase tracking-widest">
              <Bell className="w-5 h-5 text-primary" />
              <span>Get notified when we launch</span>
            </div>
            
            <p className="text-zinc-400 mb-8">
              Be the first to know when our parts shop goes live. 
              We'll send you exclusive deals and early access.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Enter your email" 
                className="bg-black/50 border-zinc-700 focus:border-primary text-white flex-1"
                data-testid="input-email-newsletter"
              />
              <Button 
                type="submit" 
                className="bg-primary text-black font-bold uppercase hover:bg-orange-500"
                data-testid="button-notify-me"
              >
                Notify Me
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-500 mb-4">Need parts now? Give us a call and we can order them for you.</p>
          <Link href="/contact">
            <Button className="bg-primary text-black font-bold uppercase" data-testid="button-contact-for-parts">
              Contact Us <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function CategorySection({ category, index }: { category: typeof partCategories[0]; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = category.icon;
  
  return (
    <section className={`py-16 ${isEven ? 'bg-background' : 'bg-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Card className="overflow-hidden border-zinc-700 bg-zinc-800/50">
              <div className="relative h-64 lg:h-80">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full">
                  <span className="text-zinc-400 text-sm">Coming Soon</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              {category.name}
            </h2>
            
            <p className="text-zinc-400 text-lg mb-6">
              {category.description}
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {getSampleProducts(category.id).map((product) => (
                <span 
                  key={product} 
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-400"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getSampleProducts(categoryId: string): string[] {
  const products: Record<string, string[]> = {
    brakes: ["Brake Pads", "Rotors", "Brake Lines", "Calipers", "Master Cylinders"],
    exhaust: ["Full Systems", "Slip-Ons", "Headers", "Baffles", "Heat Shields"],
    tailpipes: ["Chrome Tips", "Carbon Fiber", "Slash Cut", "Turn Down", "Dual Pipes"],
    gauges: ["Speedometers", "Tachometers", "Fuel Gauges", "Temp Gauges", "GPS Units"],
    lighting: ["LED Headlights", "Turn Signals", "Tail Lights", "Accent LEDs", "Light Bars"],
    maintenance: ["Oil Filters", "Air Filters", "Spark Plugs", "Chains", "Brake Fluid"],
  };
  return products[categoryId] || [];
}
