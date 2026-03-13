"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { ShinyButton } from "@/components/ui/shiny-button";

export function FinalCTA() {
  const AFFILIATE_LINK = "https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD";

  const handleRedirect = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <NeonGradientCard 
            neonColors={{ firstColor: "#3b82f6", secondColor: "#6366f1" }}
            borderRadius={48}
            borderSize={2}
          >
            <div className="bg-zinc-950/80 backdrop-blur-xl rounded-[46px] p-8 md:p-16 text-center relative overflow-hidden h-full flex flex-col items-center justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
              
              <div className="inline-flex items-center gap-2 mb-8 bg-blue-600/10 px-4 py-2 rounded-full border border-blue-600/20 text-blue-500 font-black text-xs uppercase tracking-[3px]">
                <Clock size={16} /> Enrollment Closing Soon
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter text-white">
                Ready To Earn Your First Digital Commission?
              </h2>
              
              <CountdownTimer />
              
              <p className="mt-10 text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                Get the full blueprint and start promoting digital products today.
              </p>
              
              <ShinyButton 
                onClick={handleRedirect}
                className="w-full md:w-auto px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-zinc-200 shadow-2xl"
              >
                GET ACCESS NOW
              </ShinyButton>
            </div>
          </NeonGradientCard>
        </div>
      </div>
    </section>
  );
}

