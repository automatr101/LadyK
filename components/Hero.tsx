"use client";

import { AnimatedGradientText } from "@/components/AnimatedGradientText";
import { LeadForm } from "@/components/LeadForm";
import { Users, Star, Lock, Award, Globe as GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { Globe } from "@/components/ui/globe";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-48 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-50 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 shadow-2xl border border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 backdrop-blur-md"
          >
            <div className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
            2026 Updated Blueprint
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] mb-8"
          >
            <AnimatedGradientText className="block mb-6 text-3xl md:text-5xl lg:text-6xl">
              The Exact Beginner Blueprint To
            </AnimatedGradientText>
            
            <TextAnimate animation="blurInUp" by="word" className="inline-block">
              Earning Your First
            </TextAnimate>
            <br /> 
            <span className="text-blue-500 inline-block mt-4">
              <TextAnimate animation="slideUp" by="character">
                Digital Commission
              </TextAnimate>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-500 mb-10 max-w-3xl mx-auto leading-relaxed font-medium italic"
          >
            "If you’re starting from zero, this step-by-step breakdown shows how beginners begin promoting digital products without creating their own or having experience."
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><Lock size={12} className="text-blue-500" /> Secure Encryption</div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><Award size={12} className="text-blue-500" /> Verified Blueprint</div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><GlobeIcon size={12} className="text-blue-500" /> Global Access</div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative px-0 md:px-12"
        >
          <div className="absolute -inset-10 bg-blue-500/5 rounded-[5rem] blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
