"use client";

import { SpotlightCard } from "@/components/SpotlightCard";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      text: "Made my first $500 online using AI automation within 3 weeks of starting. This course is a cheat code."
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      text: "The workflow automation section alone saved me 20+ hours every single week. My productivity is insane now."
    },
    {
      name: "David Smith",
      role: "Content Creator",
      text: "The monetization frameworks are worth 10x the price. I finally have a predictable income stream."
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Real Results From <br/><span className="text-zinc-500">Real Beginners.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className="p-10 bg-zinc-900/30 border-zinc-800/50 h-full">
                <div className="flex text-yellow-500 mb-6 gap-0.5">
                   {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl text-zinc-300 font-light italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 flex items-center justify-center text-sm font-bold text-zinc-400">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-black text-lg tracking-tight">{t.name}</div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
