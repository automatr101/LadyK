import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Ultimate Money Machine — Start Earning Online Today",
  description: "Learn the exact step-by-step method to start promoting digital products and earning commissions online. No experience required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-[#0D0D0D] text-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}

