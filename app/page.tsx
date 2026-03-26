"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30 font-sans overflow-x-hidden">
      {/* Navigation - Minimal or None as per the look.txt */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-20 pointer-events-none">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
          Digitstem — Ultimate Money Machine
        </div>
      </nav>

      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-[#1a1a1a] bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm font-medium mb-6">
            ©️ 2026 Khadija — Digital Skills & Side Hustles &nbsp;·&nbsp; 
            <a href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" target="_blank" className="text-gold hover:text-gold-light transition-colors">Get The UMM Course</a>
          </p>
          <p className="text-zinc-600 text-[10px] font-semibold uppercase tracking-[2px] max-w-xl mx-auto leading-relaxed opacity-70">
            This page contains affiliate links. I earn a commission when you purchase through my link at no extra cost to you.
          </p>
        </div>
      </footer>
    </div>
  );
}

