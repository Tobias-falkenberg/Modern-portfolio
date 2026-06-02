import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import BackToTop from "@/components/BackToTop";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Sottojit Roy | Full-Stack AI Engineer",

  description:
    "Senior Full-Stack AI Engineer specializing in AI SaaS platforms, scalable systems, LLM applications, cloud infrastructure, and modern web development.",

  keywords: [
    "Sottojit Roy",
    "AI Engineer",
    "Full Stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "OpenAI",
    "LangChain",
    "FastAPI",
    "Docker",
    "AWS",
    "PostgreSQL",
  ],

  authors: [
    {
      name: "Sottojit Roy",
    },
  ],

  creator: "Sottojit Roy",

  openGraph: {
    title: "Sottojit Roy | Full-Stack AI Engineer",

    description:
      "Senior Full-Stack AI Engineer building scalable AI SaaS systems, modern web applications, and enterprise-grade infrastructure.",

    siteName: "Sottojit Roy Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}