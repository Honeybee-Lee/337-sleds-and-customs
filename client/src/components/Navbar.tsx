import { Link, useLocation } from "wouter";
import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/parts", label: "Parts" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary rounded-lg rotate-3 group-hover:rotate-12 transition-transform duration-300">
              <Wrench className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider leading-none">337 SLEDS</span>
              <span className="font-mono text-xs text-primary tracking-[0.2em] leading-none">& CUSTOMS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`
                    px-4 py-2 rounded font-display font-semibold tracking-wide uppercase text-sm
                    transition-all duration-200 cursor-pointer
                    ${location === link.href 
                      ? "text-primary bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(255,102,0,0.2)]" 
                      : "text-zinc-400 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 hover:text-primary"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-4 py-3 rounded font-display font-bold uppercase tracking-wider
                      ${location === link.href 
                        ? "text-primary bg-primary/10 border-l-4 border-primary" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"}
                    `}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
