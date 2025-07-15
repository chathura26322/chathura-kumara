import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Professional font combinations
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
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
      <body className={`${geist.variable} ${geistMono.variable} ${ibmPlex.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
