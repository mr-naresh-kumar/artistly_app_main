import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Artistly - Connect with Talented Performing Artists",
    template: "%s | Artistly"
  },
  description: "Your premier platform for booking performing artists. Connect with singers, dancers, speakers, DJs, and more for memorable events.",
  keywords: ["artists", "performers", "booking", "events", "singers", "dancers", "speakers", "DJs"],
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly - Connect with Talented Performing Artists",
    description: "Your premier platform for booking performing artists. Connect with singers, dancers, speakers, DJs, and more for memorable events.",
    type: "website",
    siteName: "Artistly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly - Connect with Talented Performing Artists",
    description: "Your premier platform for booking performing artists. Connect with singers, dancers, speakers, DJs, and more for memorable events.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
