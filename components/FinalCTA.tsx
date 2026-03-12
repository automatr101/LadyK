"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  const AFFILIATE_LINK = "https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD";

  const handleRedirect = () => {
    window.location.href = AFFILIATE_LINK;
  };

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-[3rem] border border-zinc-800 bg-zinc-900/40 p-12 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
          <div className="inline-flex items-center gap-2 mb-8 bg-blue-600/10 px-4 py-2 rounded-full border border-blue-600/20 text-blue-500 font-black text-xs uppercase tracking-[3px]">
            <Clock size={16} /> Enrollment Closing Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter">Ready To Earn Your First Digital Commission?</h2>
          <CountdownTimer />
          <p className="mt-10 text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Get the full blueprint and start promoting digital products today.
          </p>
          <button 
            onClick={handleRedirect}
            className="mt-12 w-full md:w-auto px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-zinc-200 hover:-translate-y-1 transition-all shadow-xl shadow-white/5 active:scale-95"
          >
            GET ACCESS NOW
          </button>
        </div>
      </div>
    </section>
  );
}
