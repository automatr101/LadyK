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
    <div className="bg-dark">
      {/* Price Section */}
      <section className="py-20 px-6 container mx-auto max-w-[600px] text-center">
        <p className="section-label">Investment</p>
        <div className="price-box bg-dark2 border border-[#333] p-12 md:px-12 md:py-14 relative overflow-hidden text-center">
          <p className="text-[14px] text-[#888] font-bold uppercase tracking-[2px] mb-4">One Time Payment</p>
          <div className="font-serif text-[64px] text-gold font-black leading-none mb-4 flex items-center justify-center">
             <sup className="text-[28px] font-bold mt-2">GHS</sup>29
          </div>
          <p className="text-[#888] text-[14px] mb-10 font-light max-w-sm mx-auto leading-[1.6]">
            That's less than a meal out. One payment. Lifetime access. Start earning this week.
          </p>
          
          <div className="space-y-3 mb-10 text-left max-w-xs mx-auto">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#bbb] text-[15px]">
                <span className="text-gold font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
          
          <a 
            href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" 
            target="_blank"
            className="block w-full bg-linear-to-br from-gold to-gold-light text-dark font-bold py-5 rounded-sm text-[17px] shadow-[0_8px_40px_rgba(201,168,76,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Get Instant Access Now →
          </a>
          <p className="mt-4 text-[13px] text-[#555] font-medium">Secure payment · Instant access · No recurring fees</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-gradient py-24 px-6 border-t border-[#2a2a2a] text-center">
        <div className="container mx-auto max-w-[600px]">
          <h2 className="text-[28px] md:text-[48px] font-serif font-black mb-6 leading-[1.2]">Your First Commission Could Be This Week</h2>
          <p className="text-[#888] text-[16px] mb-10 font-light max-w-lg mx-auto">
            Stop watching others earn online. The UMM course gives you everything you need to start — right now.
          </p>
          <a 
            href="https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD" 
            target="_blank"
            className="inline-block bg-linear-to-br from-gold to-gold-light text-dark font-bold px-12 py-5 rounded-sm text-[17px] shadow-[0_8px_40px_rgba(201,168,76,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Yes, I Want To Start Earning →
          </a>
        </div>
      </section>
    </div>
  );
}

