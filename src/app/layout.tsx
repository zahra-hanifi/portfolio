import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Zahra Hanifi — Frontend Engineer";
const description =
    "Frontend engineer with 6+ years building real-time trading interfaces. Vue and Nuxt in depth, React and Next.js in production.";


export const metadata: Metadata = {
  metadataBase: new URL("https://zahrahanifi.ir"),
  title,
  description,
  authors: [{ name: 'Zahra Hanifi', url: 'https://github.com/zahra-hanifi' }],
  creator: 'Zahra Hanifi',
  alternates: { canonical: "/" },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Zahra Hanifi',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-full lg:max-w-248 lg:mx-auto px-4 sm:px-8 lg:px-0 py-5">
        <Header />

        {children}
      </body>
    </html>
  );
}
