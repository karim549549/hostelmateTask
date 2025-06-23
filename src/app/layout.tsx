import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positivus – Digital Marketing Agency",
  description: "Grow your business online with Positivus. We offer SEO, PPC, social media marketing, content creation, and more.",
  keywords: [
    "digital marketing",
    "SEO",
    "PPC",
    "social media",
    "content creation",
    "Positivus",
    "marketing agency"
  ],
  openGraph: {
    title: "Positivus – Digital Marketing Agency",
    description: "Grow your business online with Positivus. We offer SEO, PPC, social media marketing, content creation, and more.",
    url: "https://positivus.com",
    siteName: "Positivus",
    images: [
      {
        url: "/Icon.png",
        width: 1200,
        height: 630,
        alt: "Positivus Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Positivus – Digital Marketing Agency",
    description: "Grow your business online with Positivus.",
    images: ["/Icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={` ${spaceGrotesk.className} font-space-grotesk antialiased`}>
        {children}
      </body>
    </html>
  );
}
