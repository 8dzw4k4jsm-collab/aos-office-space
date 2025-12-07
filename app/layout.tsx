import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "AOS Office Suite – AI Office for Modern Businesses",
  description:
    "AOS Office Suite is your AI-powered office: one Super Agent and an entire team of AI departments that handle HR, Accounting, CRM, Support and more."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-aos-bg text-aos-text">
        <div className="relative min-h-screen flex flex-col">
          {/* Gradient glow background */}
          <div className="pointer-events-none fixed inset-0 bg-aos-gradient opacity-80 -z-10" />
          <Navbar />
          <main className="flex-1">
            <div className="aos-container py-8 sm:py-10 lg:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
