"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
      const { error: supabaseError } = await supabase
        .from("leads")
        .insert([
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            source: "Pinterest",
          },
        ]);

      if (supabaseError) throw supabaseError;

      router.push("/bridge");
    } catch (e: any) {
      console.error(e);
      // Even if database fails, we might want to redirect the user to not lose the conversion
      // but for now let's show an error if it's critical. 
      // Actually, for a funnel, it's often better to redirect anyway and log the error.
      router.push("/bridge");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Get Free Access</CardTitle>
        <CardDescription className="text-zinc-400">
          Enter your details to receive the AI starter guide.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-300">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...form.register("name")}
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-400">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-300">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...form.register("email")}
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-400">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-zinc-300">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...form.register("phone")}
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 font-semibold text-lg"
            disabled={loading}
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Free Access"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
