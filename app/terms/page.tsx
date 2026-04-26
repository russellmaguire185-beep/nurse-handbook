import PageShell from '@/components/PageShell'
import Header from '@/components/Header'

export default function TermsPage() {
  return (
    <PageShell>
      <Header title="Terms of Use" />

      <div className="px-4 pb-24 space-y-4 text-sm text-gray-700">
        <p>
          Nurse Handbook is provided for informational and educational purposes only.
          It is designed to support qualified healthcare professionals in clinical environments.
        </p>

        <p>
          This application does not replace clinical judgement, local policies, or professional responsibility.
          Users must always verify calculations and follow their organisation’s guidelines.
        </p>

        <p>
          While every effort is made to ensure accuracy, no guarantee is provided regarding the completeness,
          reliability, or correctness of the information or calculations.
        </p>

        <p>
          The creators of Nurse Handbook accept no liability for any decisions, actions, or outcomes resulting
          from the use of this application.
        </p>

        <p>
          In all cases of uncertainty, escalate to a senior clinician.
        </p>

        <p>
          In an emergency, follow local emergency procedures (e.g. 999 / local emergency response).
        </p>

        <p className="text-xs text-gray-400 pt-4">
          Last updated: April 2026
        </p>
      </div>
    </PageShell>
  )
}