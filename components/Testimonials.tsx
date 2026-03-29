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
    <section className="bg-dark2 py-20 px-6 border-t border-[#2a2a2a]">
      <div className="container mx-auto max-w-[800px]">
        <p className="section-label">Real Results</p>
        <h2 className="text-[28px] md:text-[44px] font-serif font-black mb-12">What Students Are Saying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="testimonial-card bg-dark3 border border-[#2a2a2a] p-8 relative"
            >
              <div className="text-gold text-[13px] mb-3">★★★★★</div>
              <p className="text-[#bbb] text-[15px] leading-[1.7] mb-5 relative z-10 font-light">
                {item.content}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold to-gold-light flex items-center justify-center font-bold text-dark text-[14px] shrink-0">
                  {item.initials}
                </div>
                <div className="author-info">
                  <strong className="block text-white text-[14px] font-bold">{item.author}</strong>
                  <span className="text-[12px] text-muted">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

