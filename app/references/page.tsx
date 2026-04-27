import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

export default function ReferencesPage() {
  return (
    <PageShell activeNav="references">
      <Header title="References" subtitle="Clinical sources and guidance" />

      <div className="nh-content space-y-4 pt-4">
        <section id="blood-transfusion" className="nh-card nh-page-card">
          <p className="nh-section-label">Blood Transfusion</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.transfusionguidelines.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                UK Transfusion Guidelines — JPAC
              </a>
            </li>
          </ul>
        </section>

        <section id="anaphylaxis" className="nh-card nh-page-card">
          <p className="nh-section-label">Anaphylaxis</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Resuscitation Council UK — Anaphylaxis Treatment
              </a>
            </li>
          </ul>
        </section>

        <section id="news2" className="nh-card nh-page-card">
          <p className="nh-section-label">NEWS2</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Royal College of Physicians — NEWS2
              </a>
            </li>
          </ul>
        </section>

        <section id="sepsis" className="nh-card nh-page-card">
          <p className="nh-section-label">Sepsis 6</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.nice.org.uk/guidance/ng253"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                NICE NG253 — Suspected sepsis in people aged 16 or over
              </a>
            </li>
          </ul>
        </section>

        <section id="iv-fluids" className="nh-card nh-page-card">
          <p className="nh-section-label">IV Fluids / Infusion</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.nice.org.uk/guidance/cg174"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                NICE CG174 — Intravenous fluid therapy in adults
              </a>
            </li>
          </ul>
        </section>
        <section id="cannula-sizes" className="nh-card nh-page-card">
          <p className="nh-section-label">Cannula Sizes</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.gloshospitals.nhs.uk/documents/14415/Peripheral_Cannulation_Resource_Booklet_69qKor6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Gloucestershire Hospitals NHS — Adult Peripheral Cannulation Resource Booklet
              </a>
            </li>
          </ul>
        </section>
        <section id="normal-vital-signs" className="nh-card nh-page-card">
  <p className="nh-section-label">Normal Vital Signs</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://www.rcp.ac.uk/media/alxev00t/news2-chart-1_the-news-scoring-system_0_0.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Royal College of Physicians — NEWS2 scoring chart
      </a>
    </li>
  </ul>
</section>

<section id="blood-sugar-testing" className="nh-card nh-page-card">
  <p className="nh-section-label">Blood Sugar Testing</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://www.nice.org.uk/guidance/ng28"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        NICE NG28 — Type 2 diabetes in adults
      </a>
    </li>
  </ul>
</section>

<section id="cannula-sizes" className="nh-card nh-page-card">
  <p className="nh-section-label">Cannula Sizes</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://www.gloshospitals.nhs.uk/documents/14415/Peripheral_Cannulation_Resource_Booklet_69qKor6.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Gloucestershire Hospitals NHS — Adult Peripheral Cannulation Resource Booklet
      </a>
    </li>
  </ul>
</section>

<section id="catheter-care" className="nh-card nh-page-card">
  <p className="nh-section-label">Catheter Care</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://www.rcn.org.uk/-/media/Royal-College-Of-Nursing/Documents/Forums/Bladder-and-Bowel-Forum/RCN-Fundamentals-of-Catheter-Care-PPT.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Royal College of Nursing — Fundamentals of Catheter Care
      </a>
    </li>
  </ul>
</section>

<section id="catheterisation" className="nh-card nh-page-card">
  <p className="nh-section-label">Male / Female Catheterisation</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://rightdecisions.scot.nhs.uk/m/2210/urinary-catheterisation-adultsfinal.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        NHS Scotland Right Decisions — Urinary Catheterisation for Adults
      </a>
    </li>
  </ul>
</section>

<section id="stoma-care" className="nh-card nh-page-card">
  <p className="nh-section-label">Stoma Care</p>
  <ul className="nh-page-list">
    <li>
      <span className="nh-page-dot" />
      <a
        href="https://leedscommunityhealthcare.nhs.uk/our-services-a-z/neighbourhood-clinics/how-to-prepare-for-an-appointment/stoma-care/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Leeds Community Healthcare NHS — Stoma Care
      </a>
    </li>
  </ul>
</section>
        <section id="electrolytes" className="nh-card nh-page-card">
          <p className="nh-section-label">Electrolytes</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.nbt.nhs.uk/severn-pathology/requesting/test-information/electrolytes"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                North Bristol NHS Trust — Electrolytes
              </a>
            </li>
          </ul>
        </section>

        <section id="cpr" className="nh-card nh-page-card">
          <p className="nh-section-label">CPR / BLS</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Resuscitation Council UK — Adult Basic Life Support Guidelines
                2025
              </a>
            </li>
          </ul>
        </section>

        <section id="medications" className="nh-card nh-page-card">
          <p className="nh-section-label">Medication Calculations</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://bnf.nice.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                British National Formulary — BNF
              </a>
            </li>
          </ul>
        </section>

        <section id="oxygen" className="nh-card nh-page-card">
          <p className="nh-section-label">Oxygen Therapy</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.brit-thoracic.org.uk/quality-improvement/guidelines/emergency-oxygen/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                British Thoracic Society — Emergency Oxygen Guideline
              </a>
            </li>
          </ul>
        </section>

        <section id="antt" className="nh-card nh-page-card">
          <p className="nh-section-label">ANTT</p>
          <ul className="nh-page-list">
            <li>
              <span className="nh-page-dot" />
              <a
                href="https://www.antt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ANTT Clinical Practice Framework — UK aseptic technique standard
              </a>
            </li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}