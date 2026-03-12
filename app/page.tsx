"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">BK</div>
          BLUEPRINT
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <TrustSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900 bg-black backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[4px] mb-8">© 2024 BEGINNER BLUEPRINT. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center items-center gap-8 grayscale opacity-30">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase"><CheckCircle size={14} className="text-green-500" /> Secure Checkout</div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase"><CheckCircle size={14} className="text-green-500" /> Verified Partners</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
