import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

export default function DisclaimerPage() {
  return (
    <PageShell activeNav="references">
      <Header
        title="Clinical Disclaimer"
        subtitle="Important safety information"
      />

      <div className="nh-content space-y-4 pt-4">
        <section className="nh-card nh-page-card border-l-4 border-l-amber-400">
          <p className="nh-section-label">Important</p>
          <h2>Reference and cross-check tool</h2>
          <p>
            The Nurses’ Handbook is provided as a quick reference and
            cross-check tool for qualified healthcare professionals. It is not
            intended to replace clinical judgement, local policy, prescribing
            guidance, senior advice, or professional accountability.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Calculators</p>
          <h2>Always verify independently</h2>
          <p>
            All calculator outputs are estimated results and must be independently
            verified. Do not rely on this app as a sole source. Always confirm
            prescriptions, units, concentrations, pump settings, patient factors,
            and local policy before administration or escalation.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Clinical use</p>
          <h2>Use within your scope of practice</h2>
          <p>
            This app is intended for use by trained healthcare professionals
            acting within their scope of practice, competence, and local
            governance arrangements. Where uncertainty exists, seek senior advice
            and follow local guidance.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Emergency</p>
          <h2>Follow emergency procedures</h2>
          <p>
            This app must not be used as a substitute for emergency response.
            In the UK, call 999 for life-threatening emergencies. In clinical
            settings, follow your local emergency escalation procedures.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Responsibility</p>
          <h2>Professional responsibility applies</h2>
          <p>
            All clinical decisions and actions remain the responsibility of the
            user. This app provides supporting information only and must not be
            used in isolation when making clinical decisions.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Liability</p>
          <h2>No clinical decision reliance</h2>
          <p>
            While reasonable care has been taken in preparing this content, no
            guarantee is provided regarding accuracy, completeness, or
            suitability. The creators of this app accept no liability for any
            decisions, actions, or outcomes arising from its use.
          </p>
        </section>
      </div>
    </PageShell>
  );
}