"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Loader2 } from "lucide-react";

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
      // Still redirect for better UX in a funnel, even if something fails
      router.push("/bridge");
    } finally {
      setLoading(false);
    }
  }

  return (
    <NeonGradientCard 
      className="w-full max-w-md items-center justify-center text-center"
      neonColors={{ firstColor: "#3b82f6", secondColor: "#6366f1" }}
      borderRadius={32}
      borderSize={2}
    >
      <div className="text-left w-full h-full bg-zinc-950/50 backdrop-blur-xl rounded-[30px] p-2">
        <div className="p-6">
          <h3 className="text-2xl font-black text-white mb-2">Get Free Access</h3>
          <p className="text-zinc-400 text-sm mb-8 font-light italic">
            Enter your details to receive the AI starter guide.
          </p>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...form.register("name")}
                className="bg-zinc-900 border-zinc-800 h-12 text-white placeholder:text-zinc-600 focus:ring-blue-500 rounded-xl"
              />
              {form.formState.errors.name && (
                <p className="text-[10px] uppercase font-bold text-red-500 tracking-tighter">{form.formState.errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...form.register("email")}
                className="bg-zinc-900 border-zinc-800 h-12 text-white placeholder:text-zinc-600 focus:ring-blue-500 rounded-xl"
              />
              {form.formState.errors.email && (
                <p className="text-[10px] uppercase font-bold text-red-500 tracking-tighter">{form.formState.errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...form.register("phone")}
                className="bg-zinc-900 border-zinc-800 h-12 text-white placeholder:text-zinc-600 focus:ring-blue-500 rounded-xl"
              />
            </div>
            
            <ShinyButton 
              type="submit" 
              className="w-full h-14 text-lg font-black tracking-tighter bg-blue-600 border-none shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              disabled={loading}
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "SEND ME THE GUIDE NOW"}
            </ShinyButton>
            
            <p className="text-[9px] text-zinc-600 text-center uppercase tracking-widest font-bold">
              We respect your privacy. No spam ever.
            </p>
          </form>
        </div>
      </div>
    </NeonGradientCard>
  );
}

