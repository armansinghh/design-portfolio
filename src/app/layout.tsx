import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arman Singh — Motion & Design",
  description: "Motion graphics, visual design. After Effects & Photoshop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}