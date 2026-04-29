import Link from "next/link";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

export default function IvDripRateFormulaPage() {
  return (
    <PageShell activeNav="home">
      <Header
        title="IV Drip Rate Formula"
        subtitle="mL/hr and drops per minute explained"
      />

      <div className="nh-content space-y-4 pt-4">
        {/* Overview */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Overview</p>
          <h2>How IV drip rates are calculated</h2>
          <p>
            IV drip rates can be expressed as mL per hour (mL/hr) or drops per
            minute (gtt/min). These calculations help estimate infusion delivery
            rates when setting pumps or running gravity infusions.
          </p>
        </section>

        {/* Formula */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Formula</p>
          <h2>Standard formulas</h2>

          <div className="mt-3 space-y-3 text-[15px]">
            <p>
              <strong>mL/hr</strong> = total volume (mL) ÷ time (hours)
            </p>
            <p>
              <strong>drops/min</strong> = (volume × drop factor) ÷ time
              (minutes)
            </p>
          </div>
        </section>

        {/* Worked example */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Worked example</p>
          <h2>Example calculation</h2>

          <div className="mt-3 space-y-2 text-[15px]">
            <p>1000 mL over 8 hours:</p>
            <p>mL/hr = 1000 ÷ 8 = 125 mL/hr</p>

            <p className="mt-3">
              Using a 20 gtt/mL giving set:
            </p>
            <p>
              drops/min = (1000 × 20) ÷ 480 = 41.6 ≈ 42 drops/min
            </p>
          </div>
        </section>

        {/* Safety */}
        <section className="nh-card nh-page-card nh-card-danger">
          <p className="nh-section-label">Clinical safety</p>
          <p>
            Reference and cross-check only. IV infusion rates must always be
            verified against the prescription, infusion pump settings, patient
            condition, and local policy before administration.
          </p>
        </section>

        {/* Reference */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Reference</p>
          <a
            href="/references#iv-fluids"
            className="text-sm font-semibold text-blue-600 underline"
          >
            View clinical reference source
          </a>
        </section>

        {/* CTA */}
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Tool</p>
          <Link
            href="/tools/iv-drip-rate-calculator"
            className="text-sm font-semibold text-blue-600 underline"
          >
            Open IV Drip Rate Calculator
          </Link>
        </section>
      </div>
    </PageShell>
  );
}