import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

export const metadata: Metadata = {
  title: "Arman Singh — Motion & Design",
  description:
    "Motion graphics and visual design. After Effects, Premiere Pro & Photoshop.",
  openGraph: {
    title: "Arman Singh — Motion & Design",
    description: "Motion graphics and visual design.",
    url: "https://design.armansingh.me",
    siteName: "Arman Singh",
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
