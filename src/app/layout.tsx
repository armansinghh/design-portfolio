import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

export const metadata: Metadata = {
  title: "Arman Singh | Video Editing, Design & Motion Graphics",
  description:
    "Portfolio of Arman Singh: video editing, poster & graphic design, motion graphics, typography, and pixel art. Freelance since 2021.",
  keywords: [
    "video editor",
    "motion graphics",
    "graphic design",
    "poster design",
    "typeface design",
    "pixel art",
    "freelance designer",
    "Arman Singh",
  ],
  authors: [{ name: "Arman Singh" }],
  creator: "Arman Singh",
  metadataBase: new URL("https://design.armansingh.me"),
  alternates: {
    canonical: "https://design.armansingh.me",
  },
  openGraph: {
    title: "Arman Singh | Video Editing, Design & Motion Graphics",
    description:
      "Video editing, poster & graphic design, motion graphics, typography, and pixel art. Freelance since 2021.",
    url: "https://design.armansingh.me",
    siteName: "Arman Singh",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Singh | Video Editing, Design & Motion Graphics",
    description:
      "Video editing, poster & graphic design, motion graphics, typography, and pixel art.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
