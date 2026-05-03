import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold Coast Mobile Marine | 5-Star Marine Mechanic",
  description:
    "Gold Coast's premier mobile marine mechanic with 20+ years experience. Inboard, outboard, diesel & petrol engines. We come to your boat — pontoon, marina or garage.",
  keywords:
    "marine mechanic Gold Coast, mobile boat mechanic, outboard repair, inboard engine, marine service Gold Coast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
