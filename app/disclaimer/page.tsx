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
          <h2>Clinical support only</h2>
          <p>
            The Nurses’ Handbook is designed as a quick reference and calculation
            support tool for qualified healthcare professionals. It does not
            replace clinical judgement, local policy, senior advice, prescribing
            guidance, or professional accountability.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Calculators</p>
          <h2>Always check independently</h2>
          <p>
            All calculator outputs are estimates. Always verify prescriptions,
            units, concentrations, pump settings, patient factors, and local
            policy before administration or escalation.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Emergency</p>
          <h2>Use emergency services where required</h2>
          <p>
            In the UK, call 999 for life-threatening emergencies. In hospital,
            follow your local emergency escalation process.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Responsibility</p>
          <h2>Use within your scope</h2>
          <p>
            Use this app only within your training, competence, role, and local
            governance arrangements. If you are unsure, escalate to a senior
            clinician and follow local guidance.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Liability</p>
          <h2>No guarantee of accuracy</h2>
          <p>
            While care has been taken to ensure accuracy, no guarantee is
            provided regarding completeness or correctness. The creators of this
            app accept no liability for decisions or actions taken based on its
            use.
          </p>
        </section>
      </div>
    </PageShell>
  );
}