import PageShell from '@/components/PageShell'
import Header from '@/components/Header'

export default function TermsPage() {
  return (
    <PageShell>
      <Header
        title="Terms of Use"
        subtitle="How this app should be used"
      />

      <div className="px-4 pb-24 space-y-4 text-sm text-gray-700">
        <p>
          Nurse Handbook is provided as a reference and cross-check tool for
          informational and educational purposes only. It is intended for use by
          qualified healthcare professionals.
        </p>

        <p>
          This application must not be relied upon as a sole source of information
          and does not replace clinical judgement, local policies, prescribing
          guidance, or professional responsibility.
        </p>

        <p>
          All calculations and information provided are estimated outputs and
          should be independently verified before any clinical use. Users are
          responsible for confirming accuracy, suitability, and alignment with
          local guidance.
        </p>

        <p>
          By using this application, you agree that all clinical decisions,
          actions, and outcomes remain your sole responsibility.
        </p>

        <p>
          While reasonable care has been taken in preparing this content, no
          guarantee is provided regarding completeness, accuracy, or reliability.
        </p>

        <p>
          The creators of Nurse Handbook accept no liability for any decisions,
          actions, or outcomes arising from the use or misuse of this application.
        </p>

        <p>
          In cases of uncertainty, seek senior clinical advice and follow local
          governance procedures.
        </p>

        <p>
          This application must not be used as a substitute for emergency
          response. In an emergency, follow local emergency procedures (e.g. 999
          or your organisation’s emergency escalation process).
        </p>

        <p className="text-xs text-gray-400 pt-4">
          Last updated: April 2026
        </p>
      </div>
    </PageShell>
  )
}