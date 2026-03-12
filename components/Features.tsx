"use client";

import { SpotlightCard } from "@/components/SpotlightCard";
import { Zap, Shield, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextAnimate } from "@/components/ui/text-animate";

export function Features() {
  const features = [
    {
      title: "Instant Bank Payouts",
      desc: "Withdraw your hard-earned commissions directly to your local bank account instantly. No long waiting periods or complex processing.",
      icon: Zap,
      color: "text-yellow-500",
      beamColor: "#eab308"
    },
    {
      title: "Step-by-Step Blueprint",
      desc: "The Ultimate Affiliate Marketing Program (UAMP) breaks everything down into simple, actionable steps that anyone can follow.",
      icon: Shield,
      color: "text-green-500",
      beamColor: "#22c55e"
    },
    {
      title: "High-Ticket Marketplace",
      desc: "Get exclusive access to a marketplace of high-converting digital products that pay you massive commissions for every sale.",
      icon: TrendingUp,
      color: "text-blue-500",
      beamColor: "#3b82f6"
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <TextAnimate animation="blurInUp" by="word">
              Everything You Need To
            </TextAnimate>
            <br/>
            <span className="text-zinc-500">
              <TextAnimate animation="fadeIn" by="character">
                Scale From Zero.
              </TextAnimate>
            </span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light">
            We provide the tools and the training. You just need to follow the blueprint.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-3xl overflow-hidden h-full"
            >
              <SpotlightCard className="p-10 border-zinc-800/50 hover:border-blue-500/50 transition-colors group h-full">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8 border border-zinc-700 transition-transform group-hover:scale-110 group-hover:bg-zinc-700">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg font-light mb-8">{feature.desc}</p>
                <div className="mt-auto flex items-center text-sm font-black uppercase tracking-widest text-zinc-400 group-hover:text-blue-500 transition-colors">
                  View Module <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </SpotlightCard>
              <BorderBeam size={200} duration={12} delay={idx * 2} colorFrom={feature.beamColor} colorTo="#18181b" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

