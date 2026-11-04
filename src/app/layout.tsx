import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://markangelombp.vercel.app"),
  title: "Mark Angelo Bautista — Media Buyer, Creative Strategist & Funnel Architect",
  description:
    "Minimalist portfolio showcasing paid media buying, programmatic Remotion video reels, high-converting direct-response sales funnels, ad library intelligence, and creator partnership systems.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFAFA] text-zinc-950 selection:bg-zinc-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
