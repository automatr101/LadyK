"use client";

import { motion } from "framer-motion";

const includes = [
  "Complete UMM Video Course",
  "Step-by-step beginner system",
  "Your own affiliate link to earn commissions",
  "Works from your phone anywhere in the world",
  "Direct bank payout to 120+ countries",
  "Instant access after purchase"
];

export function FinalCTA() {
  return (
    <div className="bg-[#0D0D0D]">
      {/* Price Section */}
      <section className="py-24 px-6 container mx-auto max-w-2xl text-center">
        <p className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase mb-4">Investment</p>
        <div className="bg-dark2 border border-[#333] p-12 md:p-16 relative overflow-hidden group hover:border-[#444] transition-colors rounded-sm shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gold to-gold-light opacity-80" />
          
          <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">One Time Payment</p>
          <div className="font-serif text-6xl md:text-8xl text-gold font-black mb-6 flex items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-500">
             <sup className="text-3xl mt-4 font-black">GHS</sup>29
          </div>
          <p className="text-zinc-500 text-sm md:text-md mb-12 font-light max-w-md mx-auto leading-relaxed">
            That's less than a meal out. One payment. Lifetime access. Start earning this week.
          </p>
          
          <div className="space-y-4 mb-12 text-left max-w-sm mx-auto">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                <span className="text-gold font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
          
          <a 
            href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" 
            target="_blank"
            className="block w-full bg-linear-to-br from-gold to-gold-light text-dark font-black py-5 rounded-sm text-lg shadow-[0_8px_40px_rgba(201,168,76,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Get Instant Access Now →
          </a>
          <p className="mt-4 text-[11px] text-zinc-600 font-medium">Secure payment · Instant access · No recurring fees</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-gradient py-32 px-6 border-t border-[#1a1a1a] text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight">Your First Commission Could Be This Week</h2>
          <p className="text-zinc-500 text-lg mb-12 font-light max-w-xl mx-auto">
            Stop watching others earn online. The UMM course gives you everything you need to start — right now.
          </p>
          <a 
            href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" 
            target="_blank"
            className="inline-block bg-linear-to-br from-gold to-gold-light text-dark font-black px-12 py-5 rounded-sm text-lg shadow-[0_8px_40px_rgba(201,168,76,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Yes, I Want To Start Earning →
          </a>
        </div>
      </section>
    </div>
  );
}
