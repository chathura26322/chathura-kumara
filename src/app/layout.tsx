import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Portfolio | Naveesha Ekanayaka - Full Stack Developer",
  description: "Portfolio website showcasing my work as a Full Stack Developer. Built with Next.js, TypeScript, Tailwind CSS, and modern web technologies.",
  keywords: ["Portfolio", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Naveesha Ekanayaka" }],
  creator: "Naveesha Ekanayaka",
  metadataBase: new URL("https://yourportfolio.com"),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio | Naveesha Ekanayaka - Full Stack Developer",
    description: "Portfolio website showcasing my work as a Full Stack Developer",
    siteName: "Naveesha Ekanayaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Naveesha Ekanayaka - Full Stack Developer",
    description: "Portfolio website showcasing my work as a Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
