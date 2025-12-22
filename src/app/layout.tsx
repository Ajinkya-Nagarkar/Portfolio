import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // Import fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialSidebars from "@/components/SocialSidebars";
import { Providers } from "./providers";

// Setup Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Ajinkya Nagarkar | Portfolio",
  description: "Computer Science Graduate Student at USC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <SocialSidebars />
          {children}
        </Providers>
      </body>
    </html>
  );
}