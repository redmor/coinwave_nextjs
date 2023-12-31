import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coinwave.us",
  description: "Explore Crypto Assets, Prices and News",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-y-scroll no-scrollbar">
      <body className={inter.className}>
        <main className="min-w-[350px] min-h-screen bg-gradient-to-b from-indigo-950 to-slate-900 text-white  ">
          <Navbar />
          {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}
