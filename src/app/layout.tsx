import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HawkEye – Intelligent Surveillance for a Safer World",
  description:
    "AI-powered real-time monitoring and threat detection. Enterprise-grade surveillance with advanced object detection, license plate recognition, and night vision optimization.",
  keywords:
    "surveillance, AI, object detection, ANPR, license plate recognition, security, monitoring",
  authors: [{ name: "HawkEye" }],
  openGraph: {
    title: "HawkEye – Intelligent Surveillance for a Safer World",
    description:
      "AI-powered real-time monitoring and threat detection for enterprises.",
    url: "https://hawkeye-ai.com",
    siteName: "HawkEye",
    images: [
      {
        url: "https://hawkeye-ai.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HawkEye – Intelligent Surveillance for a Safer World",
    description:
      "AI-powered real-time monitoring and threat detection for enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
