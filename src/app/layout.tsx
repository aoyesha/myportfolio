import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Aoyesha Ayen — Developer Portfolio",
  description:
    "Computer Science student with hands-on experience building production-grade mobile and cross-platform applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bebasNeue.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
