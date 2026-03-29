"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setShowLeadForm(true);
    window.addEventListener("open-lead-form", handleOpenForm);
    return () => window.removeEventListener("open-lead-form", handleOpenForm);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold/30 font-sans overflow-x-hidden">
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <div 
              className="absolute inset-0 bg-dark/90 backdrop-blur-md" 
              onClick={() => setShowLeadForm(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl z-10"
            >
              <LeadForm onClose={() => setShowLeadForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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



