import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

const references = [
  {
    title: "Royal College of Physicians — NEWS2",
    description:
      "Used for NEWS2 scoring structure, physiological parameters, oxygen scoring, and Scale 1 / Scale 2 context.",
    url: "https://www.rcp.ac.uk/resources/national-early-warning-score-news-2/",
  },
  {
    title: "NHS England — National Early Warning Score",
    description:
      "Used as supporting context for NEWS as a standardised approach to acute deterioration recognition and response.",
    url: "https://www.england.nhs.uk/ourwork/clinical-policy/sepsis/nationalearlywarningscore/",
  },
  {
    title: "NICE — Suspected sepsis guidance",
    description:
      "Used to keep sepsis content escalation-focused and aligned with current UK guidance.",
    url: "https://www.nice.org.uk/guidance/ng253",
  },
  {
    title: "UK Sepsis Trust — Sepsis Six",
    description:
      "Used for the Sepsis 6 action structure: oxygen, antibiotics, blood cultures, IV fluids, lactate, and urine output monitoring.",
    url: "https://sepsistrust.org/healthcare-professionals/",
  },
  {
    title: "Resuscitation Council UK — Anaphylaxis guidance",
    description:
      "Used for anaphylaxis treatment principles including IM adrenaline, repeat timing, and first-line treatment emphasis.",
    url: "https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis",
  },
  {
    title: "Resuscitation Council UK — Adult Basic Life Support",
    description:
      "Used for CPR / basic life support reference structure.",
    url: "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines",
  },
  {
    title: "NHS — When to call 999",
    description:
      "Used for UK emergency number wording and public emergency escalation context.",
    url: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/",
  },
  {
    title: "NHS — When to use 111",
    description:
      "Used for non-emergency urgent medical help context.",
    url: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/",
  },
  {
  title: "NHS Medicines Management / Local Trust Policies",
  description:
    "Used for IV infusion calculations, medication dose calculations, and safe administration principles.",
  url: "https://www.england.nhs.uk/medicines/",
},
  {
  title: "NHS / Clinical reference ranges",
  description:
    "Used for normal adult vital signs and electrolyte reference values.",
  url: "https://www.nhs.uk/",
},
  {
  title: "Diabetes UK — Blood glucose targets",
  description:
    "Used for blood glucose ranges and testing context.",
  url: "https://www.diabetes.org.uk/",
},
  {
  title: "NHS Blood and Transplant",
  description:
    "Used for transfusion safety checks, monitoring, and escalation guidance.",
  url: "https://www.nhsbt.nhs.uk/",
},
  {
  title: "NHS Infection Prevention Guidance",
  description:
    "Used for aseptic non-touch technique (ANTT) and infection control principles.",
  url: "https://www.england.nhs.uk/patient-safety/infection-prevention-control/",
},
  {
  title: "NHS Clinical Procedures Guidance",
  description:
    "Used for catheter care, catheterisation, and stoma care principles.",
  url: "https://www.nhs.uk/",
},
  {
  title: "British Thoracic Society — Oxygen Guidelines",
  description:
    "Used for oxygen delivery devices, flow rates, and clinical context.",
  url: "https://www.brit-thoracic.org.uk/",
},
];

export default function ReferencesPage() {
  return (
    <PageShell activeNav="references">
      <Header
        title="References"
        subtitle="Sources used to build the app content so far"
      />

      <div className="nh-content space-y-4 pt-4">
        <section className="nh-card nh-page-card border-l-4 border-l-amber-400">
          <p className="nh-section-label">Important</p>
          <p className="mt-0">
            These references support the app content, but this app does not
            replace local policy, clinical judgement, prescribing guidance, or
            senior clinical escalation.
          </p>
        </section>

        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Clinical safety</p>
          <h2>Disclaimer</h2>
          <p>
            Review the app disclaimer before using calculation or reference
            tools.
          </p>

          <a
            href="/disclaimer"
            className="mt-4 inline-flex rounded-[16px] bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] px-4 py-3 text-sm font-bold text-white shadow-[var(--shadow-soft)]"
          >
            Open disclaimer
          </a>
        </section>

        {references.map((reference) => (
          <section key={reference.title} className="nh-card nh-page-card">
            <p className="nh-section-label">Reference</p>
            <h2>{reference.title}</h2>
            <p>{reference.description}</p>

            <a
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-[16px] bg-white px-4 py-3 text-sm font-bold text-[var(--text-strong)] shadow-[var(--shadow-card)]"
            >
              Open source
            </a>
          </section>
        ))}
      </div>
    </PageShell>
  );
}