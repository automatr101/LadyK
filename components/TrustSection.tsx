"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Active Students", value: "380K+" },
  { label: "One Time Only", value: "Under $27" },
  { label: "Beginner Friendly", value: "100%" },
  { label: "Instant Access", value: "Digital" },
];

export function TrustSection() {
  return (
    <div className="bg-dark2 border-y border-[#2a2a2a] py-12 px-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <strong className="block font-serif text-3xl md:text-4xl text-gold mb-1 font-black">
              {stat.value}
            </strong>
            <span className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
