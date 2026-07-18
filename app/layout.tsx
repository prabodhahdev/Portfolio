import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P.Harshani",
  description: "Portfolio of Prabodha Harshani — Software Engineer",
  icons: {
    icon: [{ url: "/logo-2.png", type: "image/png" }],
    apple: [{ url: "/logo-2.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#02102a]`}>
      <body className="text-[var(--foreground)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
