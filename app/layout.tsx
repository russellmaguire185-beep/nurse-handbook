import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nurse Handbook",
  description: "Mobile-first nurse tools, cheat sheets, and protocols.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}