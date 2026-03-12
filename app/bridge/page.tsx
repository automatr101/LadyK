"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BridgePage() {
  const AFFILIATE_LINK = "https://digitstem.com/promo/?reference=Abdulai%20KhadijaTuurosungJWBD";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      <main className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Perfect! You're Almost There.
          </h1>
          <p className="text-xl text-zinc-400">
            One small step left to unlock your digital commission blueprint.
          </p>
        </div>

        {/* Video Placeholder Section */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-12 shadow-2xl shadow-blue-500/10 group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-bold text-lg">Watch this short message from the instructor</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why This Blueprint?</h2>
            <ul className="space-y-4">
              {[
                "No need to create your own product",
                "Start with zero followers or experience",
                "Proven high-ticket digital offers",
                "Step-by-step monetization framework"
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Immediate Access</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Click the button below to be redirected to the official promo page and secure your beginner blueprint.
            </p>
            <Link href={AFFILIATE_LINK}>
              <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl group">
                Continue To Offer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center text-zinc-600 text-sm">
          <p>Redirecting to our secure partner platform: Digitstem</p>
        </div>
      </main>
    </div>
  );
}
