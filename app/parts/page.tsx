"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Bell } from "lucide-react";
import Link from "next/link";

export default function Parts() {
  return (
    <div className="min-h-screen pt-20 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop" 
          alt="Parts Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8 ring-1 ring-primary/30 animate-pulse">
            <ShoppingBag className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 uppercase tracking-tight" data-testid="text-parts-title">
            Parts Shop <br />
            <span className="text-zinc-700">Coming Soon</span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            We're building a curated marketplace for premium motorcycle parts and custom components. 
            Gear up for something special.
          </p>

          <div className="bg-zinc-900/80 border border-white/10 p-8 rounded-2xl backdrop-blur-sm max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center text-white font-mono text-sm uppercase tracking-widest">
              <Bell className="w-4 h-4 text-primary" />
              <span>Get notified when we launch</span>
            </div>
            
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Enter your email" 
                className="bg-black/50 border-zinc-700 focus:border-primary text-white font-mono" 
                data-testid="input-notify-email"
              />
              <Button type="submit" className="bg-primary text-black font-bold uppercase hover:bg-orange-500" data-testid="button-notify">
                Notify Me
              </Button>
            </form>
          </div>
          
          <div className="mt-16">
            <Link href="/services">
              <Button variant="ghost" className="text-zinc-500 hover:text-white uppercase font-mono tracking-widest text-xs" data-testid="link-back-services">
                ← Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
