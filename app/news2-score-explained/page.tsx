import Link from "next/link";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

export default function News2ExplainedPage() {
  return (
    <PageShell activeNav="home">
      <Header
        title="NEWS2 Score Explained"
        subtitle="How the early warning score works"
      />

      <div className="nh-content space-y-4 pt-4">
        {/* Overview */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Overview</p>
          <h2>What is NEWS2?</h2>
          <p>
            NEWS2 (National Early Warning Score 2) is a clinical scoring system
            used to identify and respond to patient deterioration based on
            physiological observations.
          </p>
        </section>

        {/* Components */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Components</p>
          <h2>Parameters measured</h2>

          <ul className="mt-3 space-y-2 text-[15px]">
            <li>Respiratory rate</li>
            <li>Oxygen saturation (SpO₂)</li>
            <li>Supplemental oxygen</li>
            <li>Systolic blood pressure</li>
            <li>Pulse</li>
            <li>Temperature</li>
            <li>Level of consciousness</li>
          </ul>
        </section>

        {/* Scoring */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Scoring</p>
          <h2>How scoring works</h2>

          <p className="mt-3 text-[15px]">
            Each parameter is scored from 0–3 depending on how far it deviates
            from normal. The total score determines the level of clinical risk
            and escalation required.
          </p>
        </section>

        {/* Example */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Example</p>
          <h2>Worked example</h2>

          <p className="mt-3 text-[15px]">
            A patient with abnormal respiratory rate, low oxygen saturation, and
            elevated heart rate may accumulate a higher NEWS2 score, indicating
            the need for urgent clinical review.
          </p>
        </section>

        {/* Safety */}
        <section className="nh-card nh-page-card nh-card-danger">
          <p className="nh-section-label">Clinical safety</p>
          <p>
            Reference and cross-check only. NEWS2 must always be interpreted in
            clinical context alongside local escalation policies and senior
            clinical judgement.
          </p>
        </section>

        {/* Reference */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Reference</p>
          <a
            href="/references#news2"
            className="text-sm font-semibold text-blue-600 underline"
          >
            View clinical reference source
          </a>
        </section>

        {/* CTA */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Tool</p>
          <Link
            href="/tools/news2-score"
            className="text-sm font-semibold text-blue-600 underline"
          >
            Open NEWS2 Calculator
          </Link>
        </section>
      </div>
    </PageShell>
  );
}