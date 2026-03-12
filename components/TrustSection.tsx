"use client";

import { Lock, Award, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  const trustItems = [
    { icon: Lock, label: "Secure Data" },
    { icon: Award, label: "Top Rated" },
    { icon: ShieldCheck, label: "Privacy First" },
    { icon: Users, label: "1,200+ Students" }
  ];

  return (
    <section className="py-12 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
          {trustItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 group hover:opacity-100 transition-opacity cursor-default"
            >
              <item.icon size={20} className="text-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[2px]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
