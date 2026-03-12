"use client";

import { AnimatedGradientText } from "@/components/AnimatedGradientText";
import { LeadForm } from "@/components/LeadForm";
import { Users, Star, Lock, Award, Globe as GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

export function Hero() {
  return (
    <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-zinc-300 mb-8 backdrop-blur-md"
            >
              <div className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              FREE TRAINING FOR BEGINNERS
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] mb-8"
            >
              <AnimatedGradientText className="block mb-2 text-3xl md:text-5xl lg:text-6xl">The Exact Beginner Blueprint To</AnimatedGradientText>
              Earning Your First <br /> 
              <span className="text-blue-500">Digital Commission</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              If you’re starting from zero, this step-by-step breakdown shows how beginners begin promoting digital products without creating their own product or having experience.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-40 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><Lock size={12} className="text-blue-500" /> 256-Bit SSL Secure</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><Award size={12} className="text-blue-500" /> Beginner Friendly</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px]"><GlobeIcon size={12} className="text-blue-500" /> Unlimited Access</div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end relative"
          >
            {/* Interactive Globe Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-20 opacity-40 pointer-events-none">
              <Globe />
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-20 -z-10 animate-pulse"></div>
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
