import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase with service role key for server-side operations if needed, 
// or use anon key if RLS allows anonymous inserts.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, source } = body;

    // 1. Save to Supabase
    const { error: supabaseError } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          phone,
          source: source || "Affiliate Funnel",
        },
      ]);

    if (supabaseError) {
      console.error("Supabase Error:", supabaseError);
      // We continue even if DB fails to try and send the Telegram notification
    }

    // 2. Forward to Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const message = `
🚀 *New Lead Captured!*
━━━━━━━━━━━━━━━
👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || "Not provided"}
📍 *Source:* ${source || "Affiliate Funnel"}
⏰ *Time:* ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━
      `;

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });
    } else {
      console.warn("Telegram credentials not configured. Skipping notification.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
