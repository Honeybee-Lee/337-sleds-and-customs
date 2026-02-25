"use client";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>337 Sleds & Customs | Motorcycle & Small Engine Repair</title>
        <meta name="description" content="Expert motorcycle repair, custom modifications, and small engine service in Lafayette, LA." />
        <meta property="og:title" content="337 Sleds & Customs" />
        <meta property="og:description" content="Expert motorcycle repair, custom modifications, and small engine service." />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
