import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drones & AI Tools in Modern Warfare | Ukraine & Iran Conflict Analysis",
  description: "A research deliverable analyzing drone systems and AI tools deployed in the Ukraine-Russia and Iran conflicts — components, capabilities, and comparative analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-100">
        {children}
      </body>
    </html>
  );
}
