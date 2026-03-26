"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BridgePage() {
  const AFFILIATE_LINK = "https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD";

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold/30 font-sans hero-gradient">
      <main className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase mb-4">Almost There</p>
          <h1 className="text-4xl md:text-7xl font-serif font-black mb-6 leading-tight">
            Perfect! You're <span className="text-gold-gradient">One Step</span> Away.
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Take one small final step to unlock the Ultimate Money Machine system and start your digital income journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif font-bold border-b border-gold/20 pb-4">Why This System?</h2>
            <ul className="space-y-6">
              {[
                "Instant bank payouts to 120+ countries",
                "Beginner-friendly step-by-step video training",
                "High-demand digital products to promote",
                "Works from your phone anywhere in the world"
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-zinc-300 text-lg leading-relaxed font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark2 p-10 md:p-12 relative overflow-hidden border border-[#2a2a2a] group hover:border-[#333] transition-colors rounded-sm"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gold to-gold-light opacity-80" />
            
            <h3 className="text-2xl font-serif font-bold mb-6">Immediate Access</h3>
            <p className="text-zinc-400 mb-10 leading-relaxed font-light text-lg">
              Click the button below to be redirected to the official Digitstem promo page and secure your beginner blueprint at the best price.
            </p>
            <Link href={AFFILIATE_LINK}>
              <button className="w-full h-16 bg-linear-to-br from-gold to-gold-light hover:transform hover:-translate-y-1 transition-all duration-300 text-dark font-black text-xl flex items-center justify-center gap-3 uppercase tracking-widest cursor-pointer shadow-[0_8px_30px_rgba(201,168,76,0.3)]">
                Continue to Offer
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <p className="mt-6 text-center text-zinc-600 text-[11px] font-medium tracking-tight">
              Redirecting to our secure partner platform: Digitstem
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

