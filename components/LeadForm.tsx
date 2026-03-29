"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Monitor, MapPin, X } from "lucide-react";
import { Globe } from "@/components/ui/globe";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

interface LeadFormProps {
  onClose?: () => void;
}

export function LeadForm({ onClose }: LeadFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source: "Pinterest",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit lead");
      
      // Track lead capture if needed here
      
      router.push("/bridge");
    } catch (e: any) {
      console.error(e);
      // Even if API fails, we often want to redirect to the offer to avoid losing the sale
      router.push("/bridge");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto rounded-sm overflow-hidden border border-[#2a2a2a] bg-dark shadow-2xl relative">
      {/* Close Button if Modal */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-[#888] hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      )}

      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Form Section */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 border-r border-[#2a2a2a]">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-4 tracking-tight leading-tight">
            Start your <br />
            <span className="text-gold-gradient">financial freedom</span> journey.
          </h2>
          <p className="text-[#888] text-sm mb-12 font-medium tracking-wide">
            Enter your details below to secure your spot and access the Ultimate Money Machine system.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-8 text-left">
              <div className="space-y-3 group">
                <Label htmlFor="name" className="text-[#888] text-xs uppercase font-bold tracking-[2px]">
                  Full Name <span className="text-gold">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...form.register("name")}
                  className="bg-dark2 border border-[#333] rounded-none px-4 h-14 text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold hover:border-[#444] transition-all text-lg"
                />
                {form.formState.errors.name && (
                  <p className="text-[10px] text-red-500 uppercase font-bold tracking-wider">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-3 group">
                <Label htmlFor="email" className="text-[#888] text-xs uppercase font-bold tracking-[2px]">
                  Email Address <span className="text-gold">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...form.register("email")}
                  className="bg-dark2 border border-[#333] rounded-none px-4 h-14 text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold hover:border-[#444] transition-all text-lg"
                />
                {form.formState.errors.email && (
                  <p className="text-[10px] text-red-500 uppercase font-bold tracking-wider">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-3 group">
                <Label htmlFor="phone" className="text-[#888] text-xs uppercase font-bold tracking-[2px]">
                  WhatsApp Phone (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+233 ..."
                  {...form.register("phone")}
                  className="bg-dark2 border border-[#333] rounded-none px-4 h-14 text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold hover:border-[#444] transition-all text-lg"
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full h-16 bg-linear-to-br from-gold to-gold-light text-dark font-black tracking-widest text-lg rounded-none hover:transform hover:-translate-y-1 transition-all group border-none shadow-[0_8px_30px_rgba(201,168,76,0.3)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.5)] cursor-pointer uppercase"
                disabled={loading}
              >
                {loading ? <Loader2 className="h-6 w-6 animate-spin mx-auto" /> : "Access The System Now →"}
              </button>
            </div>
          </form>
        </div>

        {/* Info Area */}
        <div className="hidden lg:flex w-2/5 bg-dark2/50 overflow-hidden relative items-center justify-center p-12">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--gold)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <Globe />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="p-3 bg-gold rounded-full animate-bounce shadow-[0_0_30px_rgba(201,168,76,0.6)]">
                 <MapPin className="text-dark fill-dark" size={24} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 p-6 bg-dark/80 border border-[#2a2a2a] backdrop-blur-xl">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                 <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-gold tracking-widest mb-1">Live Global Access</div>
                  <div className="text-sm font-bold text-white">Students Active In 120+ Countries</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
