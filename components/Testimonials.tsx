"use client";

import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

export function Testimonials() {
  const testimonials = [
    {
      name: "Kwaku Mensah",
      role: "Sales Associate",
      rating: 5,
      text: "I made my first $100 in just two weeks. This blueprint is exactly what I needed to start as a beginner."
    },
    {
      name: "Abena Boateng",
      role: "Student",
      rating: 4,
      text: "The steps are very clear. I finally understand how affiliate marketing works. Highly recommended for students!"
    },
    {
      name: "Kofi Asare",
      role: "Banker",
      rating: 5,
      text: "Even with my busy schedule, I was able to set this up. The automated system is a game changer for me."
    },
    {
      name: "Ama Serwaa",
      role: "Entrepreneur",
      rating: 4,
      text: "I've tried many things online, but this is the most practical. Clear results if you put in the work."
    },
    {
      name: "Yaw Osei",
      role: "Teacher",
      rating: 5,
      text: "Finally, a way to earn extra income outside my salary. The training is very detailed and easy to follow."
    },
    {
      name: "Akosua Addo",
      role: "Virtual Assistant",
      rating: 4,
      text: "Great insights on how to promote products correctly. My conversion rates have improved significantly."
    }
  ];

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  const TestimonialCard = ({ name, role, text, rating }: { name: string, role: string, text: string, rating: number }) => (
    <div className="relative w-80 cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:bg-zinc-900/50 transition-colors mx-4">
      <div className="flex text-yellow-500 mb-6 gap-0.5">
        {[1, 2, 3, 4, 5].map(s => (
          <Star 
            key={s} 
            size={14} 
            fill={s <= rating ? "currentColor" : "none"} 
            className={s <= rating ? "" : "text-zinc-700"}
          />
        ))}
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

