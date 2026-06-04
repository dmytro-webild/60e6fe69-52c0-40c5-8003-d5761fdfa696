import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Falmouth Home Improvements | Carpentry & Remodeling Experts',
  description: 'Over 30 years experience in professional carpentry, remodeling, and coastal property restoration designed to withstand challenging weather conditions.',
  openGraph: {
    "title": "Falmouth Home Improvements | Carpentry & Remodeling Experts",
    "description": "Over 30 years experience in professional carpentry, remodeling, and coastal property restoration designed to withstand challenging weather conditions.",
    "url": "/",
    "siteName": "Falmouth Home Improvements",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eg290iZx5OVq23vi9yjClHBh9u/uploaded-1780606081733-gf2883nh.jpg",
        "alt": "Exterior view of a beautifully renovated Falmouth home"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Falmouth Home Improvements | Carpentry & Remodeling Experts",
    "description": "Over 30 years experience in professional carpentry, remodeling, and coastal property restoration designed to withstand challenging weather conditions.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eg290iZx5OVq23vi9yjClHBh9u/uploaded-1780606081733-gf2883nh.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
