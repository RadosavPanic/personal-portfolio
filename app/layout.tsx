import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/StarBackground/StarBackground";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radosav's Portfolio",
  description: "Radosav Panic developer's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-l from-gray-700 to-black text-gray-200 overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Toaster
          duration={4000}
          richColors
          toastOptions={{
            classNames: {
              toast:
                "bg-[#0f1117]/90 text-gray-300 rounded-lg p-4 font-mono shadow-lg border border-green-900",
              description: "text-sm",
              title: "font-bold text-lg mb-1",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
