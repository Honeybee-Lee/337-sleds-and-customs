import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Background glitch effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="relative z-10 text-center px-4">
        <div className="inline-flex justify-center items-center p-6 bg-primary/10 rounded-full mb-8 animate-pulse">
          <AlertTriangle className="w-16 h-16 text-primary" />
        </div>
        
        <h1 className="font-display font-bold text-8xl text-white mb-4 tracking-tighter">404</h1>
        <h2 className="font-mono text-xl text-primary uppercase tracking-widest mb-8">Page Not Found</h2>
        
        <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          Looks like you took a wrong turn. The page you're looking for has either been moved or doesn't exist.
        </p>

        <Link href="/">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wide">
            Return to Garage
          </Button>
        </Link>
      </div>
    </div>
  );
}
