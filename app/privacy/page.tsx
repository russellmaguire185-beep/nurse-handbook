import PageShell from '@/components/PageShell'
import Header from '@/components/Header'

export default function PrivacyPage() {
  return (
    <PageShell>
      <Header title="Privacy Policy" />

      <div className="px-4 pb-24 space-y-4 text-sm text-gray-700">
        <p>
          Nurse Handbook does not collect or store personal health data.
        </p>

        <p>
          The application may use local storage on your device to save preferences such as favourite tools.
          This data remains on your device and is not transmitted to any server.
        </p>

        <p>
          If you choose to send feedback via email, any information you provide is voluntary and will only
          be used to improve the application.
        </p>

        <p>
          No personal data is sold, shared, or used for advertising purposes.
        </p>

        <p>
          Future updates may include anonymised analytics to improve usability and performance.
        </p>

        <p>
          By using this application, you agree to this privacy policy.
        </p>

        <p className="text-xs text-gray-400 pt-4">
          Last updated: April 2026
        </p>
      </div>
    </PageShell>
  )
}