"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold/30 font-sans overflow-x-hidden">
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Footer from Look.txt */}
      <footer className="bg-dark border-t border-[#1a1a1a] py-6 px-6 text-center text-[13px] text-[#444]">
        <div className="container mx-auto">
          <p>
            © 2026 Khadija — Digital Skills & Side Hustles &nbsp;·&nbsp; 
            <a href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" target="_blank" className="hover:text-[#666] transition-colors">Get The UMM Course</a>
          </p>
          <p className="mt-2">
            This page contains affiliate links. I earn a commission when you purchase through my link at no extra cost to you.
          </p>
        </div>
      </footer>
    </div>
  );
}


