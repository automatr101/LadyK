"use client";

import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

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
    },
    {
      name: "Emily Davis",
      role: "E-com Owner",
      text: "I was skeptical at first, but the results speak for themselves. The best investment I've made this year."
    },
    {
      name: "James Wilson",
      role: "Agency Owner",
      text: "Scaled my agency from 0 to $10k/mo using the outbound strategies taught in this blueprint."
    },
    {
      name: "Jessica Lee",
      role: "Social Media Manager",
      text: "Finally a course that actually shows the 'how' and not just the 'what'. Highly recommended!"
    }
  ];

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => (
    <div className="relative w-80 cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:bg-zinc-900/50 transition-colors mx-4">
      <div className="flex text-yellow-500 mb-6 gap-0.5">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
      </div>
      <p className="text-zinc-300 font-light italic mb-8 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 flex items-center justify-center text-xs font-bold text-zinc-400">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-black text-base tracking-tight">{name}</div>
          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-center tracking-tighter">
          <TextAnimate animation="blurInUp" by="word" once>
            Real Results From
          </TextAnimate>
          <br />
          <span className="text-zinc-500">
            <TextAnimate animation="fadeIn" by="character" once>
              Real Beginners.
            </TextAnimate>
          </span>
        </h2>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden gap-8">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
        
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
}

