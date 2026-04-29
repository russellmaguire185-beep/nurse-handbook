import type { Metadata } from "next";

const baseUrl = "https://thenurseshandbook.com";

const toolMetadata: Record<string, { title: string; description: string }> = {
  "iv-drip-rate-calculator": {
    title: "IV Drip Rate Cross-Check Tool | The Nurse’s Handbook",
    description:
      "Cross-check estimated IV infusion rates in mL/hr and drops/min. UK nursing reference support only, not a clinical decision tool.",
  },
  "liquid-dose-calculator": {
    title: "Liquid Dose Cross-Check Tool | The Nurse’s Handbook",
    description:
      "Cross-check estimated liquid medication volumes from dose, stock strength and stock volume. Reference support only.",
  },
  "tablet-capsule-calculator": {
    title: "Tablet & Capsule Dose Cross-Check Tool | The Nurse’s Handbook",
    description:
      "Cross-check estimated tablet or capsule quantities from prescribed dose and available strength. Reference support only.",
  },
  "medication-unit-converter": {
    title: "Medication Unit Converter | The Nurse’s Handbook",
    description:
      "Reference converter for grams, milligrams and micrograms. Cross-check support only for UK nursing practice.",
  },
  "news2-score": {
    title: "NEWS2 Score Cross-Check Tool | The Nurse’s Handbook",
    description:
      "Cross-check an estimated NEWS2 score using physiological observations. Reference support only, not a clinical decision tool.",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const metadata = toolMetadata[slug] ?? {
    title: "Nursing Reference Tool | The Nurse’s Handbook",
    description:
      "Mobile-first nursing reference and cross-check support. Always follow local policy and clinical guidance.",
  };

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `${baseUrl}/tools/${slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/tools/${slug}`,
      siteName: "The Nurse’s Handbook",
      type: "website",
    },
  };
}

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}