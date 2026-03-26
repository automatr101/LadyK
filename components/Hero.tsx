"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center hero-gradient overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-gold/15 border border-gold/40 text-gold-light text-[11px] font-semibold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8"
        >
          Digitstem — Ultimate Money Machine
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-serif font-black leading-[1.1] max-w-4xl mx-auto mb-8"
        >
          The Beginner Course That Shows You How To <span className="text-gold-gradient">Earn Your First Commission</span> Online
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          No experience. No product. No following needed. The UMM course gives you the exact step-by-step system to start earning digital commissions from anywhere in the world.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" 
            target="_blank"
            className="inline-block bg-linear-to-br from-gold to-gold-light text-dark font-bold text-lg px-12 py-5 rounded-sm shadow-[0_8px_40px_rgba(201,168,76,0.35)] hover:transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
          >
            Get The UMM Course Now →
          </a>
          <p className="mt-6 text-sm text-zinc-500 font-light">
            One-time payment  {" · "} <span className="text-gold">Instant access</span> {" · "} Start today
          </p>
        </motion.div>
      </div>
    </section>
  );
}

