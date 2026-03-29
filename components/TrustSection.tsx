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
    <div className="bg-dark2 border-y border-[#2a2a2a] py-6 px-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-12 md:gap-[48px]">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <strong className="block font-serif text-[28px] text-gold mb-0 font-black leading-tight">
              {stat.value}
            </strong>
            <span className="text-[12px] text-muted uppercase tracking-[1px] font-medium leading-none">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

