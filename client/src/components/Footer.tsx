import { Wrench, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary rounded-lg rotate-3">
                <Wrench className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="block font-display font-bold text-xl tracking-wider text-white">337 SLEDS</span>
                <span className="block font-mono text-xs text-primary tracking-[0.2em]">& CUSTOMS</span>
              </div>
            </div>
            <p className="text-zinc-400 max-w-md font-body leading-relaxed">
              Precision motorcycle repair and custom builds. From standard maintenance to high-performance modifications, we treat every bike like our own.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><Link href="/" className="text-zinc-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/parts" className="text-zinc-400 hover:text-primary transition-colors">Parts Shop</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 font-mono text-sm text-zinc-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Industrial Parkway<br />Unit 4B<br />Lafayette, LA 70508</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(337) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@337sleds.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm font-mono">
            © {new Date().getFullYear()} 337 Sleds and Customs. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-primary hover:bg-white/5 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-primary hover:bg-white/5 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
