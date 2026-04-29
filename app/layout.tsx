import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thenurseshandbook.com"),
  title: {
    default: "The Nurse’s Handbook | UK Nursing Reference Tools",
    template: "%s | The Nurse’s Handbook",
  },
  description:
    "Mobile-first UK nursing reference tools, calculators, cheat sheets and protocols for cross-check support only. Not a clinical decision tool.",
  alternates: {
    canonical: "https://thenurseshandbook.com",
  },
  openGraph: {
    title: "The Nurse’s Handbook | UK Nursing Reference Tools",
    description:
      "Mobile-first UK nursing reference tools, calculators, cheat sheets and protocols for cross-check support only.",
    url: "https://thenurseshandbook.com",
    siteName: "The Nurse’s Handbook",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}