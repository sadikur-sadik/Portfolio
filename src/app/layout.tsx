import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { ContactModal } from "@/components/contact-modal";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadikur Rahman | MERN Stack Web Developer",
  description: "Portfolio of Sadikur Rahman, MERN Stack Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${manrope.variable} font-body antialiased bg-bg-main text-text-main transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Navbar />
            <ContactModal />
            <main>{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
