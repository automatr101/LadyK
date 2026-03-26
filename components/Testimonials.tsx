"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content: "I made my first commission within two weeks of going through this course. The steps are clear and anyone can follow them — even if you've never done anything online before.",
    author: "Kwaku Mensah",
    role: "Student, Ghana",
    initials: "KM"
  },
  {
    content: "I finally understand how affiliate marketing works. This course broke everything down in a way that made complete sense to me as a beginner with no experience at all.",
    author: "Abena Boateng",
    role: "Student, Nigeria",
    initials: "AB"
  },
  {
    content: "Even with my busy work schedule I was able to set this up and start earning. The system works in the background once you follow the steps inside the course.",
    author: "Kofi Asare",
    role: "Banker, Kenya",
    initials: "KA"
  }
];

export function Testimonials() {
  return (
    <section className="bg-dark2 py-24 px-6 border-t border-[#1a1a1a]">
      <div className="container mx-auto max-w-4xl">
        <p className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase mb-4 text-center">Real Results</p>
        <h2 className="text-3xl md:text-5xl font-serif font-black mb-16 text-center">What Students Are Saying</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark3 border border-[#2a2a2a] p-8 relative rounded-sm"
            >
              <div className="text-gold text-4xl font-serif opacity-30 absolute top-4 left-6 leading-none">"</div>
              <div className="text-gold text-xs tracking-tighter mb-4">★★★★★</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 relative z-10 font-light">
                {item.content}
              </p>
              
              <div className="flex items-center gap-4 border-t border-zinc-500/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold to-gold-light flex items-center justify-center font-bold text-dark text-xs">
                  {item.initials}
                </div>
                <div>
                  <strong className="block text-white text-sm font-bold">{item.author}</strong>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
