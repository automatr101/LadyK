"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Step-by-Step Video Training",
    description: "Watch and follow at your own pace. Every step is explained simply so anyone can follow along from day one."
  },
  {
    icon: "💰",
    title: "How to Find Products to Promote",
    description: "Learn exactly which digital products to promote as a beginner to earn the highest commissions possible."
  },
  {
    icon: "🔗",
    title: "Setting Up Your Affiliate Links",
    description: "Get your unique links set up correctly so every sale is tracked and every commission goes directly to you."
  },
  {
    icon: "📱",
    title: "Free Traffic Strategies",
    description: "Learn how to get people clicking your links using free methods — no paid ads, no big budget required."
  },
  {
    icon: "🏦",
    title: "Getting Paid to Your Bank",
    description: "Withdraw your commissions directly to your local bank account. Works in Nigeria, Ghana, Kenya and 120+ countries."
  },
  {
    icon: "🚀",
    title: "Your First Commission Fast",
    description: "The course is designed to get you to your first commission as fast as possible — not months from now, but this week."
  }
];

const checklist = [
  "A complete beginner who has never made a single coin online and doesn't know where to start",
  "A student or young person looking for a real way to earn extra income from your phone",
  "Someone with no budget who needs a low-cost entry point to start an online income",
  "A busy person who wants a simple system they can work on in less than an hour a day",
  "Anyone who has tried making money online before and failed — and wants a system that actually works"
];

export function Features() {
  return (
    <div className="bg-dark">
      {/* What Is This */}
      <section className="py-20 px-6 container mx-auto max-w-[800px]">
        <p className="section-label">What Is This</p>
        <h2 className="text-[28px] md:text-[44px] font-serif font-black mb-6 leading-[1.2]">The Ultimate Money Machine — Explained Simply</h2>
        <div className="space-y-5 text-[#aaa] text-[17px] leading-[1.8] font-light">
          <p>The Ultimate Money Machine (UMM) is a video course on Digitstem that teaches complete beginners how to earn digital commissions online — with zero experience, zero product creation, and zero technical skills required.</p>
          <p>You watch the videos, follow the steps, and learn exactly how to promote digital products and earn commissions every time someone buys through your link. It works from your phone. It works from anywhere.</p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-dark2 py-20 px-6">
        <div className="container mx-auto max-w-[800px]">
          <p className="section-label">What's Inside</p>
          <h2 className="text-[28px] md:text-[44px] font-serif font-black mb-12 leading-[1.2]">Everything You Need to Start Earning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#2a2a2a] border border-[#2a2a2a] overflow-hidden mt-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark3 p-8 md:px-8 md:py-9 hover:bg-[#242424] transition-colors h-full"
              >
                <div className="text-[28px] mb-4">{feature.icon}</div>
                <h3 className="text-[20px] font-serif font-bold mb-[10px] text-white">{feature.title}</h3>
                <p className="text-[#888] text-[14px] leading-[1.7]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This For You */}
      <section className="py-20 px-6 container mx-auto max-w-[800px]">
        <p className="section-label">Is This For You?</p>
        <h2 className="text-[28px] md:text-[44px] font-serif font-black mb-12 leading-[1.2]">This Course Is Perfect If You Are...</h2>
        <div className="space-y-4 mt-9">
          {checklist.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 md:px-6 md:py-5 bg-dark2 border border-[#252525] border-l-[3px] border-l-gold"
            >
              <span className="text-gold text-[18px] mt-0.5 shrink-0">✦</span>
              <p className="text-[#bbb] text-[15px] leading-[1.6]">
                {item.split(" ").map((word, index) => index < 2 ? <strong key={index} className="text-white font-bold">{word} </strong> : word + " ")}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

