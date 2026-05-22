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
  title: "Ajinkya Nagarkar | ML Engineer & CS Graduate Student at USC",
  description:
    "ML Engineer and CS graduate student at USC. IEEE-published author, patent co-inventor, and builder of RAG systems and predictive ML pipelines.",
  metadataBase: new URL("https://ajinkya-nagarkar.vercel.app"),
  openGraph: {
    title: "Ajinkya Nagarkar | ML Engineer & CS Graduate Student at USC",
    description:
      "ML Engineer and CS graduate student at USC. IEEE-published author, patent co-inventor, and builder of RAG systems and predictive ML pipelines.",
    url: "https://ajinkya-nagarkar.vercel.app",
    siteName: "Ajinkya Nagarkar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajinkya Nagarkar | ML Engineer & CS Graduate Student at USC",
    description:
      "ML Engineer and CS graduate student at USC. IEEE-published author, patent co-inventor, and builder of RAG systems and predictive ML pipelines.",
  },
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