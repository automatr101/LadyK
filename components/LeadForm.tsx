"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Monitor, MapPin } from "lucide-react";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

export function LeadForm() {
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
      router.push("/bridge");
    } catch (e: any) {
      console.error(e);
      router.push("/bridge");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
      {/* Browser Bar */}
      <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-md px-12 py-0.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
          <Monitor size={10} className="text-zinc-600" />
          earnblueprint.vercel.app
        </div>
        <div className="w-10" />
      </div>

      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Form Section */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 border-r border-zinc-800/50">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none">
            Let's build your <br />
            <span className="text-blue-500">financial freedom!</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-12 font-medium tracking-wide">
            Enter your details below and we'll send the blueprint to your inbox instantly.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
              <div className="space-y-1 group">
                <Label htmlFor="name" className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  Your name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  {...form.register("name")}
                  className="bg-transparent border-t-0 border-x-0 border-b-2 border-zinc-800 rounded-none px-0 h-10 text-white placeholder:text-zinc-700 focus-visible:ring-0 focus-visible:border-blue-500 transition-all text-base"
                />
                {form.formState.errors.name && (
                  <p className="text-[10px] text-red-500 uppercase font-black">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-1 group">
                <Label htmlFor="email" className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  Your email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  {...form.register("email")}
                  className="bg-transparent border-t-0 border-x-0 border-b-2 border-zinc-800 rounded-none px-0 h-10 text-white placeholder:text-zinc-700 focus-visible:ring-0 focus-visible:border-blue-500 transition-all text-base"
                />
                {form.formState.errors.email && (
                  <p className="text-[10px] text-red-500 uppercase font-black">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 group">
                <Label htmlFor="phone" className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  Phone (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...form.register("phone")}
                  className="bg-transparent border-t-0 border-x-0 border-b-2 border-zinc-800 rounded-none px-0 h-10 text-white placeholder:text-zinc-700 focus-visible:ring-0 focus-visible:border-blue-500 transition-all text-base"
                />
              </div>

              <div className="space-y-1 group">
                <Label className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  Target Income
                </Label>
                <div className="bg-transparent border-b-2 border-zinc-800 h-10 text-zinc-600 flex items-center text-base italic pointer-events-none">
                  $1k - $10k per month
                </div>
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <ShinyButton 
                type="submit" 
                className="w-full md:w-48 h-14 bg-white text-zinc-950 font-black tracking-tighter text-base rounded-full hover:bg-zinc-200 transition-all group"
                disabled={loading}
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "SEND NOW"}
              </ShinyButton>
            </div>
          </form>
        </div>

        {/* Map Illustration Area */}
        <div className="hidden lg:flex w-2/5 bg-zinc-900/30 overflow-hidden relative items-center justify-center p-12">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--blue-500)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <Globe />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="p-3 bg-blue-500 rounded-full animate-bounce shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                 <MapPin className="text-white fill-white" size={24} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl backdrop-blur-xl">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
               </div>
               <div>
                  <div className="text-[9px] uppercase font-black text-zinc-500 tracking-widest">Global Reach</div>
                  <div className="text-xs font-bold text-white">Promoting To 120+ Countries</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
