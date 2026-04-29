"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";

const toolContent: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    notes: string[];
  }
  
> = {
  "iv-drip-rate-calculator": {
    title: "IV Drip Rate Calculator",
    subtitle: "IV drip rate reference calculator (mL/hr and drops per minute)",
    description:
"Use this tool to cross-check an estimated infusion rate in mL/hr and drops/min based on total volume, infusion time, and drop factor.",
    notes: [
      "Button-based calculation flow",
      "Visible disclaimer before calculation",
      "Clear results for mL/hr and drops/min",
    ],
  },
  "dosage-calculator": {
    title: "Liquid Dose Calculator",
      subtitle: "Medication dose reference calculator (mg to mL conversion)",
      description:
        "Use this tool to cross-check an estimated volume based on a required dose, stock strength, and stock volume.",
          notes: [
            "Button-based calculation flow",
            "Visible disclaimer before calculation",
            "Clear worked method for dose volume",
          ],
  },
  "normal-vital-signs": {
    title: "Normal Vital Signs",
    subtitle: "Reference ranges",
    description:
      "Quick adult bedside reference ranges for common vital signs.",
    notes: [
      "Simple card-based reference layout",
      "Mobile-friendly for quick lookup",
      "Ready for future local-policy refinement",
    ],
  },
  "electrolyte-ranges": {
    title: "Electrolyte Ranges",
    subtitle: "Quick reference guide",
    description:
      "Quick adult reference ranges for commonly reviewed electrolytes.",
    notes: [
      "Simple card-based reference layout",
      "Mobile-friendly for quick lookup",
      "Ready for future local-policy refinement",
    ],
  },
  "sepsis-6-protocol": {
    title: "Sepsis 6 Protocol",
    subtitle: "Sepsis 6 reference overview",
    description:
      "This page is being held as a structured placeholder until the protocol content is locked to current guidance and local policy.",
    notes: [
      "Consistent UI treatment across tool pages",
      "Good base for step-by-step clinical guidance",
      "Ready for validated protocol content",
    ],
  },
  "anaphylaxis-treatment": {
    title: "Anaphylaxis Treatment",
    subtitle: "Anaphylaxis emergency reference overview",
    description:
      "This page is being held as a structured placeholder until the protocol content is locked to current guidance and local policy.",
    notes: [
      "Touch-friendly mobile spacing",
      "Stable reusable page pattern",
      "Ready for validated protocol detail",
    ],
  },
  "news2-score": {
    title: "NEWS2 Score",
    subtitle: "NEWS2 score reference calculator for clinical observations",
      description:
        "Use this tool to cross-check an estimated NEWS2 score using standard physiological inputs and oxygen requirement.",

    notes: [
      "Button-based calculation flow",
      "Visible disclaimer before calculation",
      "Structured result with component scores",
    ],
  },
  "cannula-sizes-guide": {
    title: "Cannula Sizes Guide",
    subtitle: "Colour codes and uses",
    description:
      "Quick guide to common peripheral IV cannula sizes and typical uses.",
    notes: [
      "Simple scalable page design",
      "Consistent healthcare visual tone",
      "Ready for handbook content expansion",
    ],
  },
  "oxygen-delivery-devices": {
    title: "Oxygen Delivery Devices",
    subtitle: "Flow rates and masks",
    description:
      "Quick reference for common oxygen delivery devices and typical starting ranges.",
    notes: [
      "Clean content cards",
      "Consistent visual rhythm",
      "Ready for future clinical detail",
    ],
  },
  "cpr": {
  title: "CPR",
  subtitle: "Basic life support reference guide",
  description: "Adult basic life support reminder.",
  notes: [
    "Quick reference only",
    "Follow local resuscitation policy",
    "Call emergency response / 999 where required",
  ],
},
};
const sepsis6Protocol = [
  {
    title: "Sepsis 6 actions",
        items: [
          {
  label: "Note",
  value:
    "Sepsis 6 is a commonly used care bundle. Always follow current NICE guidance and local sepsis policy.",
},
      { label: "1. Give oxygen", value: "If clinically indicated" },
      { label: "2. Give IV antibiotics", value: "Follow local policy" },
      { label: "3. Take blood cultures", value: "Before antibiotics if possible" },
      { label: "4. Give IV fluids", value: "If indicated / hypotensive" },
      { label: "5. Check lactate", value: "Blood gas / local process" },
      { label: "6. Monitor urine output", value: "Consider catheter / fluid balance" },
    ],
  },
  {
    title: "Escalation reminder",
    items: [
      { label: "Suspected sepsis", value: "Escalate urgently" },
      { label: "High NEWS2 / red flags", value: "Senior review immediately" },
      { label: "Antibiotics", value: "Time-critical if high risk" },
    ],
  },
];

const anaphylaxisProtocol = [
  {
    title: "Immediate actions",
    items: [
      { label: "Call for help", value: "Emergency response / 999" },
      { label: "Lie patient flat", value: "Raise legs if tolerated" },
      { label: "Airway / breathing", value: "Assess and support" },
      { label: "High-flow oxygen", value: "If available / indicated" },
      { label: "Remove trigger", value: "If possible" },
    ],
  },
  {
    title: "Adrenaline reminder",
    items: [
      { label: "First-line treatment", value: "IM adrenaline" },
      { label: "Adult dose", value: "500 micrograms IM" },
      { label: "Concentration", value: "1:1000 adrenaline" },
      { label: "Repeat", value: "After 5 minutes if no improvement" },
      { label: "Route warning", value: "IV only by experienced specialists" },
    ],
  },
  {
    title: "Important note",
    items: [
      { label: "Antihistamines", value: "Not first-line" },
      { label: "Steroids", value: "Not first-line" },
      { label: "Observation", value: "Follow local policy after recovery" },
    ],
  },
];

const normalVitalSigns = [
  {
    title: "Adult ranges (NEWS2 aligned)",
    items: [
      {
        label: "Note",
        value:
          "Ranges reflect NEWS2 scoring (score 0) rather than full physiological normal ranges.",
      },
      { label: "Respiratory rate", value: "12–20 /min" },
      { label: "Heart rate", value: "60–100 bpm" },
      { label: "Systolic BP", value: "111–219 mmHg" },
      { label: "SpO₂", value: "≥96%" },
      { label: "Temperature", value: "36.1–38.0 °C" },
    ],
  },
];
const electrolyteRanges = [
  {
    title: "Common electrolytes",
    items: [
      { label: "Sodium (Na⁺)", value: "135–145 mmol/L" },
      { label: "Potassium (K⁺)", value: "3.5–5.0 mmol/L" },
      { label: "Calcium (Ca²⁺)", value: "2.2–2.6 mmol/L" },
      { label: "Magnesium (Mg²⁺)", value: "0.7–1.0 mmol/L" },
      { label: "Bicarbonate", value: "23–29 mmol/L" },
      { label: "Phosphate (PO₄)", value: "3.4–4.5 mg/dL" },
    ],
  },
];

const cannulaGuide = [
  {
    title: "Peripheral IV cannula",
    items: [
      { label: "14G (Orange)", value: "Major trauma / rapid fluids" },
      { label: "16G (Grey)", value: "Surgery / large volume" },
      { label: "18G (Green)", value: "Blood / fluids" },
      { label: "20G (Pink)", value: "Routine IV meds" },
      { label: "22G (Blue)", value: "Fragile veins" },
      { label: "24G (Yellow)", value: "Paediatric / elderly" },
    ],
  },
];

const oxygenDevices = [
  {
    title: "Delivery devices",
    items: [
      { label: "Nasal cannula", value: "1–6 L/min (~24–44%)" },
      { label: "Simple face mask", value: "5–10 L/min (~40–60%)" },
      { label: "Non-rebreather", value: "10–15 L/min (~60–90%)" },
      { label: "Venturi mask", value: "Controlled FiO₂ (24–60%)" },
    ],
  },
];

function formatSlugTitle(slug: string) {
  const titleOverrides: Record<string, string> = {
    "tablet-capsule-calculator": "Tablet & Capsule Calculator",
    cpr: "CPR",
  };

  if (titleOverrides[slug]) {
    return titleOverrides[slug];
  }

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatNumber(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

function scoreRespiratoryRate(value: number) {
  if (value <= 8) return 3;
  if (value <= 11) return 1;
  if (value <= 20) return 0;
  if (value <= 24) return 2;
  return 3;
}

function scoreSpo2Scale1(value: number) {
  if (value <= 91) return 3;
  if (value <= 93) return 2;
  if (value <= 95) return 1;
  return 0;
}

function scoreSystolicBp(value: number) {
  if (value <= 90) return 3;
  if (value <= 100) return 2;
  if (value <= 110) return 1;
  if (value <= 219) return 0;
  return 3;
}

function scorePulse(value: number) {
  if (value <= 40) return 3;
  if (value <= 50) return 1;
  if (value <= 90) return 0;
  if (value <= 110) return 1;
  if (value <= 130) return 2;
  return 3;
}

function scoreTemperature(value: number) {
  if (value <= 35) return 3;
  if (value <= 36) return 1;
  if (value <= 38) return 0;
  if (value <= 39) return 1;
  return 2;
}

function getNews2EscalationSummary(score: number, hasAnyRedScore: boolean) {
  if (score >= 7) {
    return "High score: urgent clinical review and escalation required per local policy.";
  }
  if (score >= 5 || hasAnyRedScore) {
    return "Medium score: urgent review and escalation should be considered in line with local policy.";
  }
  return "Low score: continue monitoring and follow local escalation policy.";
}

function IvDripCalculator() {
    const [volumeMl, setVolumeMl] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [timeUnit, setTimeUnit] = useState<"minutes" | "hours">("hours");
  const [dropFactor, setDropFactor] = useState("20");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    mlPerHour: number;
    dropsPerMin: number;
    totalMinutes: number;
  } | null>(null);
const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  function handleCalculate() {
    const volume = Number(volumeMl);
    const time = Number(timeValue);
    const factor = Number(dropFactor);

    if (!volume || volume <= 0) {
      setError("Enter a valid volume in mL.");
      setResult(null);
      return;
    }

    if (!time || time <= 0) {
      setError(`Enter a valid time in ${timeUnit}.`);
      setResult(null);
      return;
    }

    if (!factor || factor <= 0) {
      setError("Select a valid drop factor.");
      setResult(null);
      return;
    }

    const minutes = timeUnit === "hours" ? time * 60 : time;
    const mlPerHour = volume / (minutes / 60);
    const dropsPerMin = (volume * factor) / minutes;

    setResult({
      mlPerHour,
      dropsPerMin,
      totalMinutes: minutes,
    });
    setError("");
  }

  function handleClear() {
  setVolumeMl("");
  setTimeValue("");
  setTimeUnit("hours");
  setDropFactor("20");
  setError("");
  setResult(null);
  setAcceptedDisclaimer(false);
}

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Calculator</p>
        <h2>Enter infusion details</h2>
        <p>
          Fill in the total volume, infusion time, and drop factor to cross-check
an estimated infusion rate.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="volume-ml"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Volume (mL)
            </label>
            <input
              id="volume-ml"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={volumeMl}
              onChange={(e) => setVolumeMl(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label
              htmlFor="time-value"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Time
            </label>
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <input
                id="time-value"
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                placeholder="e.g. 8"
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              />

              <select
                value={timeUnit}
                onChange={(e) =>
                  setTimeUnit(e.target.value as "minutes" | "hours")
                }
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              >
                <option value="hours">Hours</option>
                <option value="minutes">Minutes</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="drop-factor"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Drop factor (gtt/mL)
            </label>
            <select
              id="drop-factor"
              value={dropFactor}
              onChange={(e) => setDropFactor(e.target.value)}
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            >
              <option value="10">10 gtt/mL</option>
              <option value="15">15 gtt/mL</option>
              <option value="20">20 gtt/mL</option>
              <option value="60">60 gtt/mL</option>
            </select>
          </div>
        </div>
      </section>

      <section className="nh-card nh-page-card nh-card-danger">
  <p className="nh-section-label">Disclaimer</p>
  <p className="mt-0 text-red-700">
    Reference and cross-check only. Infusion rates must be independently
verified against the prescription, pump settings, patient factors, and
local policy before administration. Do not rely on this tool as a sole source.
  </p>

  <label className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]">
    <input
      type="checkbox"
      checked={acceptedDisclaimer}
      onChange={(event) => setAcceptedDisclaimer(event.target.checked)}
      className="mt-1 h-4 w-4"
    />
    <span>I understand this is a reference and cross-check tool only.</span>
  </label>
</section>

      <section className="nh-card nh-page-card">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!acceptedDisclaimer}
            className={`flex-1 rounded-[16px] px-4 py-3 text-[15px] font-bold shadow-[var(--shadow-soft)] ${
              acceptedDisclaimer
                ? "bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] text-white"
                : "cursor-not-allowed bg-[#d8e1ec] text-[#70839f]"
            }`}
>
            Cross-check rate
</button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-[16px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] font-semibold text-[var(--text-muted)]"
          >
            Clear
          </button>
        </div>

        {error ? (
          <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}
      </section>

      {result ? (
        <>
          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Calculated estimate</p>
            <h2>Estimated results</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Rate
                </p>
                <p className="mt-1 text-[24px] font-extrabold text-[var(--text-strong)]">
                  {formatNumber(result.mlPerHour)} mL/hr
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Gravity rate
                </p>
                <p className="mt-1 text-[24px] font-extrabold text-[var(--text-strong)]">
                  {Math.round(result.dropsPerMin)} drops/min
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Exact calculation: {formatNumber(result.dropsPerMin)} drops/min
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4 text-sm text-[var(--text-muted)]">
                Based on {volumeMl} mL over{" "}
                {timeUnit === "hours"
                  ? `${timeValue} hour(s)`
                  : `${timeValue} minute(s)`}{" "}
                with a {dropFactor} gtt/mL set. Total infusion time:{" "}
                {formatNumber(result.totalMinutes)} minutes.
              </div>
            </div>
          </section>

          <section className="nh-card nh-page-card">
              <p className="nh-section-label">How this estimate is calculated</p>
            <h2>Calculation method</h2>

            <div className="mt-4 space-y-4 text-[15px] text-[var(--text-muted)]">
              <div>
                <p className="font-semibold text-[var(--text-strong)]">mL/hr</p>
                <p className="mt-1">
                  mL/hr = total volume (mL) ÷ time (hours)
                </p>
                <p className="mt-1">
                  = {volumeMl} ÷{" "}
                  {timeUnit === "hours"
                    ? timeValue
                    : `(${timeValue} ÷ 60)`}{" "}
                  = {formatNumber(result.mlPerHour)} mL/hr
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--text-strong)]">
                  drops/min (gtt/min)
                </p>
                <p className="mt-1">
                  drops/min = (volume × drop factor) ÷ time (minutes)
                </p>
                <p className="mt-1">
                  = ({volumeMl} × {dropFactor}) ÷{" "}
                  {formatNumber(result.totalMinutes)} ={" "}
                  {formatNumber(result.dropsPerMin)} drops/min
                </p>
              </div>

              <div className="rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm">
                In practice, gravity infusion rates are often rounded to a whole
                number of drops per minute in line with local policy.
              </div>
            </div>
          </section>
        </>
      ) : null}
      {result ? (
  <section className="nh-card nh-page-card">
    <p className="nh-section-label">Reference</p>
    <a
      href={referenceLinks["iv-drip-rate-calculator"]}
      className="text-sm font-semibold text-blue-600 underline"
    >
      View reference source
    </a>
  </section>
) : null}
    </div>
  );
}
function LiquidDoseCalculator() {
  const [requiredDose, setRequiredDose] = useState("");
  const [requiredUnit, setRequiredUnit] = useState<"mg" | "mcg">("mg");
  const [stockStrength, setStockStrength] = useState("");
  const [stockUnit, setStockUnit] = useState<"mg" | "mcg">("mg");
  const [stockVolumeMl, setStockVolumeMl] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ volumeToGiveMl: number } | null>(null);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  function convertToMicrograms(value: number, unit: "mg" | "mcg") {
    return unit === "mg" ? value * 1000 : value;
  }

  function handleCalculate() {
    const dose = Number(requiredDose);
    const strength = Number(stockStrength);
    const stockVolume = Number(stockVolumeMl);

    if (!dose || dose <= 0) {
      setError("Enter a valid required dose.");
      setResult(null);
      return;
    }

    if (!strength || strength <= 0) {
      setError("Enter a valid stock strength.");
      setResult(null);
      return;
    }

    if (!stockVolume || stockVolume <= 0) {
      setError("Enter a valid stock volume.");
      setResult(null);
      return;
    }

    const doseMcg = convertToMicrograms(dose, requiredUnit);
    const strengthMcg = convertToMicrograms(strength, stockUnit);

    const volumeToGiveMl = (doseMcg / strengthMcg) * stockVolume;

    setResult({ volumeToGiveMl });
    setError("");
  }

  function handleClear() {
    setRequiredDose("");
    setRequiredUnit("mg");
    setStockStrength("");
    setStockUnit("mg");
    setStockVolumeMl("");
    setError("");
    setResult(null);
    setAcceptedDisclaimer(false);
  }

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Calculator</p>
        <h2>Enter medication details</h2>
        <p>
          Enter the required dose, available stock strength, and stock volume to
cross-check an estimated volume.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="required-dose"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Required dose
            </label>

            <div className="grid grid-cols-[1fr_105px] gap-3">
              <input
                id="required-dose"
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={requiredDose}
                onChange={(e) => setRequiredDose(e.target.value)}
                placeholder="e.g. 500"
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              />

              <select
                value={requiredUnit}
                onChange={(e) =>
                  setRequiredUnit(e.target.value as "mg" | "mcg")
                }
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-3 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              >
                <option value="mg">mg</option>
                <option value="mcg">mcg</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="stock-strength"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Stock strength
            </label>

            <div className="grid grid-cols-[1fr_105px] gap-3">
              <input
                id="stock-strength"
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={stockStrength}
                onChange={(e) => setStockStrength(e.target.value)}
                placeholder="e.g. 250"
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              />

              <select
                value={stockUnit}
                onChange={(e) => setStockUnit(e.target.value as "mg" | "mcg")}
                className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-3 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
              >
                <option value="mg">mg</option>
                <option value="mcg">mcg</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="stock-volume"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Stock volume (mL)
            </label>
            <input
              id="stock-volume"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={stockVolumeMl}
              onChange={(e) => setStockVolumeMl(e.target.value)}
              placeholder="e.g. 5"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>
        </div>
      </section>

      <section className="nh-card nh-page-card nh-card-danger">
        <p className="nh-section-label">Disclaimer</p>
        <p className="mt-0 text-red-700">
         Reference and cross-check only. Medication calculations must be independently
verified against the prescription, formulation, concentration, route, patient
factors, and local policy before administration. Do not rely on this tool as a sole source.
        </p>

        <label className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]">
          <input
            type="checkbox"
            checked={acceptedDisclaimer}
            onChange={(event) => setAcceptedDisclaimer(event.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>I understand this is a reference and cross-check tool only.</span>
        </label>
      </section>

      <section className="nh-card nh-page-card">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!acceptedDisclaimer}
            className={`flex-1 rounded-[16px] px-4 py-3 text-[15px] font-bold shadow-[var(--shadow-soft)] ${
              acceptedDisclaimer
                ? "bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] text-white"
                : "cursor-not-allowed bg-[#d8e1ec] text-[#70839f]"
            }`}
          >
            Cross-check liquid dose
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-[16px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] font-semibold text-[var(--text-muted)]"
          >
            Clear
          </button>
        </div>

        {error ? (
          <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}
      </section>

      {result ? (
        <>
          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Calculated estimate</p>
            <h2>Estimated results</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Volume to administer
                </p>
                <p className="mt-1 text-[24px] font-extrabold text-[var(--text-strong)]">
                  {formatNumber(result.volumeToGiveMl)} mL
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4 text-sm text-[var(--text-muted)]">
                Based on {requiredDose} {requiredUnit} required dose and{" "}
                {stockStrength} {stockUnit} in {stockVolumeMl} mL stock volume.
              </div>
            </div>
          </section>

          <section className="nh-card nh-page-card">
          <p className="nh-section-label">How this estimate is calculated</p>
            <h2>Calculation method</h2>

            <div className="mt-4 space-y-4 text-[15px] text-[var(--text-muted)]">
              <div>
                <p className="font-semibold text-[var(--text-strong)]">
                  Formula
                </p>
                <p className="mt-1">
                  Volume to give = required dose ÷ stock strength × stock volume
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--text-strong)]">
                  Worked calculation
                </p>
                <p className="mt-1">
                  Units are converted internally so mg and mcg can be compared
                  safely.
                </p>
                <p className="mt-1">
                  = ({requiredDose} {requiredUnit} ÷ {stockStrength} {stockUnit})
                  × {stockVolumeMl} mL
                </p>
                <p className="mt-1">
                  = {formatNumber(result.volumeToGiveMl)} mL
                </p>
              </div>
            </div>
          </section>
          
        </>
      ) : null}
    </div>
  );
}
function News2Calculator() {
    const [respRate, setRespRate] = useState("");
  const [spo2, setSpo2] = useState("");
  const [onOxygen, setOnOxygen] = useState("no");
  const [systolicBp, setSystolicBp] = useState("");
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [pulse, setPulse] = useState("");
  const [consciousness, setConsciousness] = useState("alert");
  const [temperature, setTemperature] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{  
    totalScore: number;
    componentScores: {
      respRate: number;
      spo2: number;
      oxygen: number;
      systolicBp: number;
      pulse: number;
      consciousness: number;
      temperature: number;
    };
    hasAnyRedScore: boolean;
  } | null>(null);

  function handleCalculate() {
    const rr = Number(respRate);
    const oxygenSat = Number(spo2);
    const bp = Number(systolicBp);
    const hr = Number(pulse);
    const temp = Number(temperature);

    if (!rr || rr <= 0) {
      setError("Enter a valid respiratory rate.");
      setResult(null);
      return;
    }

    if (!oxygenSat || oxygenSat <= 0) {
      setError("Enter a valid oxygen saturation.");
      setResult(null);
      return;
    }

    if (!bp || bp <= 0) {
      setError("Enter a valid systolic blood pressure.");
      setResult(null);
      return;
    }

    if (!hr || hr <= 0) {
      setError("Enter a valid pulse.");
      setResult(null);
      return;
    }

    if (!temp || temp <= 0) {
      setError("Enter a valid temperature.");
      setResult(null);
      return;
    }

    const rrScore = scoreRespiratoryRate(rr);
    const spo2Score = scoreSpo2Scale1(oxygenSat);
    const oxygenScore = onOxygen === "yes" ? 2 : 0;
    const bpScore = scoreSystolicBp(bp);
    const pulseScore = scorePulse(hr);
    const consciousnessScore = consciousness === "alert" ? 0 : 3;
    const tempScore = scoreTemperature(temp);

    const componentScores = {
      respRate: rrScore,
      spo2: spo2Score,
      oxygen: oxygenScore,
      systolicBp: bpScore,
      pulse: pulseScore,
      consciousness: consciousnessScore,
      temperature: tempScore,
    };

    const totalScore =
      rrScore +
      spo2Score +
      oxygenScore +
      bpScore +
      pulseScore +
      consciousnessScore +
      tempScore;

    const hasAnyRedScore = Object.values(componentScores).some(
      (score) => score === 3
    );

    setResult({
      totalScore,
      componentScores,
      hasAnyRedScore,
    });
    setError("");
  }

  function handleClear() {
    setRespRate("");
    setSpo2("");
    setOnOxygen("no");
    setSystolicBp("");
    setPulse("");
    setConsciousness("alert");
    setTemperature("");
    setError("");
    setResult(null);
    setAcceptedDisclaimer(false);
  }

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Calculator</p>
        <h2>Enter physiological observations</h2>
        <p>
          Enter the patient observations to cross-check an estimated NEWS2 score using the
standard Scale 1 structure.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="resp-rate"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Respiratory rate (per min)
            </label>
            <input
              id="resp-rate"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={respRate}
              onChange={(e) => setRespRate(e.target.value)}
              placeholder="e.g. 18"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label
              htmlFor="spo2"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              SpO₂ (%)
            </label>
            <input
              id="spo2"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={spo2}
              onChange={(e) => setSpo2(e.target.value)}
              placeholder="e.g. 97"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label
              htmlFor="oxygen"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Supplemental oxygen
            </label>
            <select
              id="oxygen"
              value={onOxygen}
              onChange={(e) => setOnOxygen(e.target.value)}
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="systolic-bp"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Systolic blood pressure (mmHg)
            </label>
            <input
              id="systolic-bp"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={systolicBp}
              onChange={(e) => setSystolicBp(e.target.value)}
              placeholder="e.g. 120"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label
              htmlFor="pulse"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Pulse (per min)
            </label>
            <input
              id="pulse"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              placeholder="e.g. 88"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label
              htmlFor="consciousness"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Consciousness
            </label>
            <select
              id="consciousness"
              value={consciousness}
              onChange={(e) => setConsciousness(e.target.value)}
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            >
              <option value="alert">Alert</option>
              <option value="c-v-p-u">
                New confusion / Voice / Pain / Unresponsive
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="temperature"
              className="mb-2 block text-sm font-semibold text-[var(--text-strong)]"
            >
              Temperature (°C)
            </label>
            <input
              id="temperature"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="e.g. 37.2"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>
        </div>
      </section>

      <section className="nh-card nh-page-card nh-card-danger">
        <p className="nh-section-label">Disclaimer</p>
        <p className="mt-0 text-red-700">
          Reference and cross-check only. NEWS2 must be interpreted in clinical
context alongside local escalation policy, clinical assessment, and
senior review where required. Do not rely on this tool as a sole source.
        </p>

        <label className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]">
          <input
            type="checkbox"
            checked={acceptedDisclaimer}
            onChange={(event) => setAcceptedDisclaimer(event.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>I understand this is a reference and cross-check tool only.</span>
        </label>
      </section>

      <section className="nh-card nh-page-card">
        <div className="flex flex-col gap-3 sm:flex-row">
         <button
            type="button"
            onClick={handleCalculate}
            disabled={!acceptedDisclaimer}
            className={`flex-1 rounded-[16px] px-4 py-3 text-[15px] font-bold shadow-[var(--shadow-soft)] ${
              acceptedDisclaimer
                ? "bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] text-white"
                : "cursor-not-allowed bg-[#d8e1ec] text-[#70839f]"
            }`}
          >
          Cross-check NEWS2
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-[16px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] font-semibold text-[var(--text-muted)]"
          >
            Clear
          </button>
        </div>

        {error ? (
          <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}
      </section>

      {result ? (
        <>
          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Calculated estimate</p>
            <h2>Estimated NEWS2 result</h2>

            <div className="mt-4 grid gap-3">
              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Total score
                </p>
                <p className="mt-1 text-[28px] font-extrabold text-[var(--text-strong)]">
                  {result.totalScore}
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4 text-sm text-[var(--text-muted)]">
                {getNews2EscalationSummary(
                  result.totalScore,
                  result.hasAnyRedScore
                )}
              </div>
            </div>
          </section>

          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Component scores</p>
            <h2>Breakdown</h2>

            <div className="mt-4 grid gap-3">
              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Respiratory rate
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.respRate}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  SpO₂
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.spo2}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Supplemental oxygen
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.oxygen}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Systolic BP
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.systolicBp}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Pulse
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.pulse}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Consciousness
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.consciousness}
                </span>
              </div>

              <div className="flex items-start justify-between rounded-[14px] bg-[#f7f9fc] px-4 py-3">
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  Temperature
                </span>
                <span className="font-bold text-[var(--text-strong)]">
                  {result.componentScores.temperature}
                </span>
              </div>
            </div>
          </section>

          <section className="nh-card nh-page-card">
              <p className="nh-section-label">How this estimate is calculated</p>
            <h2>Calculation method</h2>

            <div className="mt-4 space-y-4 text-[15px] text-[var(--text-muted)]">
              <div>
                <p className="font-semibold text-[var(--text-strong)]">
                  NEWS2 total
                </p>
                <p className="mt-1">
                  Total score = respiratory rate + SpO₂ + oxygen + systolic BP +
                  pulse + consciousness + temperature
                </p>
              </div>

              <div>
                <p className="font-semibold text-[var(--text-strong)]">
                  Worked calculation
                </p>
                <p className="mt-1">
                  = {result.componentScores.respRate} +{" "}
                  {result.componentScores.spo2} +{" "}
                  {result.componentScores.oxygen} +{" "}
                  {result.componentScores.systolicBp} +{" "}
                  {result.componentScores.pulse} +{" "}
                  {result.componentScores.consciousness} +{" "}
                  {result.componentScores.temperature}
                </p>
                <p className="mt-1">= {result.totalScore}</p>
              </div>

              <div className="rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm">
                This version uses the standard NEWS2 Scale 1 structure. Scale 2
                is reserved for selected patients with a prescribed oxygen
                saturation target range.
              </div>
            </div>
                    </section>

          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Reference</p>
            <a
              href={referenceLinks["news2-score"]}
              className="text-sm font-semibold text-blue-600 underline"
            >
              View reference source
            </a>
          </section>
        </>
      ) : null}
    </div>
  );
}
function MedicationUnitConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState<"g" | "mg" | "micrograms">("mg");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    grams: number;
    milligrams: number;
    micrograms: number;
  } | null>(null);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  function handleCalculate() {
    const amount = Number(value);

    if (!amount || amount <= 0) {
      setError("Enter a valid amount.");
      setResult(null);
      return;
    }

    let milligrams = amount;

    if (unit === "g") milligrams = amount * 1000;
    if (unit === "micrograms") milligrams = amount / 1000;

    setResult({
      grams: milligrams / 1000,
      milligrams,
      micrograms: milligrams * 1000,
    });

    setError("");
  }

  function handleClear() {
    setValue("");
    setUnit("mg");
    setError("");
    setResult(null);
    setAcceptedDisclaimer(false);
  }

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Cross-check tool</p>
        <h2>Cross-check medication units</h2>
<p>Cross-check estimated equivalent values between grams, milligrams, and micrograms.</p>
        <div className="mt-5 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-strong)]">
              Amount
            </label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. 500"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-strong)]">
              Unit
            </label>
            <select
              value={unit}
              onChange={(e) =>
                setUnit(e.target.value as "g" | "mg" | "micrograms")
              }
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            >
              <option value="g">grams (g)</option>
              <option value="mg">milligrams (mg)</option>
              <option value="micrograms">micrograms (mcg)</option>
            </select>
          </div>
        </div>
      </section>

      <section className="nh-card nh-page-card nh-card-danger">
        <p className="nh-section-label">Disclaimer</p>
        <p className="mt-0 text-red-700">
          Reference and cross-check only. Medication units must be independently
verified against the prescription, formulation, patient factors, and local
policy. Do not rely on this tool as a sole source.
        </p>

        <label className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]">
          <input
            type="checkbox"
            checked={acceptedDisclaimer}
            onChange={(event) => setAcceptedDisclaimer(event.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>I understand this is a reference and cross-check tool only.</span>
        </label>
      </section>

      <section className="nh-card nh-page-card">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!acceptedDisclaimer}
            className={`flex-1 rounded-[16px] px-4 py-3 text-[15px] font-bold shadow-[var(--shadow-soft)] ${
              acceptedDisclaimer
                ? "bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] text-white"
                : "cursor-not-allowed bg-[#d8e1ec] text-[#70839f]"
            }`}
          >
          Cross-check units
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-[16px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] font-semibold text-[var(--text-muted)]"
          >
            Clear
          </button>
        </div>

        {error ? (
          <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}
      </section>

      {result ? (
        <>
          <section className="nh-card nh-page-card">
<p className="nh-section-label">Estimated equivalent values</p>
            <h2>Estimated results</h2>

            <div className="mt-4 grid gap-3">
              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Grams
                </p>
                <p className="mt-1 text-[22px] font-extrabold text-[var(--text-strong)]">
                  {formatNumber(result.grams)} g
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Milligrams
                </p>
                <p className="mt-1 text-[22px] font-extrabold text-[var(--text-strong)]">
                  {formatNumber(result.milligrams)} mg
                </p>
              </div>

              <div className="rounded-[16px] bg-[#f7f9fc] px-4 py-4">
                <p className="text-sm font-semibold text-[var(--text-muted)]">
                  Micrograms
                </p>
                <p className="mt-1 text-[22px] font-extrabold text-[var(--text-strong)]">
                  {formatNumber(result.micrograms)} micrograms
                </p>
              </div>
            </div>
          </section>

          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Reference</p>
            <a
              href={referenceLinks["medication-unit-converter"]}
              className="text-sm font-semibold text-blue-600 underline"
            >
View reference source
            </a>
          </section>
        </>
      ) : null}
    </div>
  );
}
 function TabletCapsuleCalculator() {
  const [requiredDoseMg, setRequiredDoseMg] = useState("");
  const [strengthMg, setStrengthMg] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ units: number } | null>(null);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  function handleCalculate() {
    const requiredDose = Number(requiredDoseMg);
    const strength = Number(strengthMg);

    if (!requiredDose || requiredDose <= 0) {
      setError("Enter a valid required dose.");
      setResult(null);
      return;
    }

    if (!strength || strength <= 0) {
      setError("Enter a valid tablet or capsule strength.");
      setResult(null);
      return;
    }

    setResult({ units: requiredDose / strength });
    setError("");
  }

  function handleClear() {
    setRequiredDoseMg("");
    setStrengthMg("");
    setError("");
    setResult(null);
    setAcceptedDisclaimer(false);
  }

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Calculator</p>
        <h2>Tablet & capsule dose</h2>
        <p>
          Cross-check the estimated number of tablets or capsules for a prescribed
        dose.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-strong)]">
              Required dose (mg)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={requiredDoseMg}
              onChange={(e) => setRequiredDoseMg(e.target.value)}
              placeholder="e.g. 500"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text-strong)]">
              Strength per tablet/capsule (mg)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={strengthMg}
              onChange={(e) => setStrengthMg(e.target.value)}
              placeholder="e.g. 250"
              className="w-full rounded-[14px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] text-[var(--text-strong)] outline-none focus:border-[#58a6ff]"
            />
          </div>
        </div>
      </section>

      <section className="nh-card nh-page-card nh-card-danger">
        <p className="nh-section-label">Disclaimer</p>
        <p className="mt-0 text-red-700">
           Reference and cross-check only. Tablet and capsule calculations must be
          independently verified against the prescription, formulation, available
          strength, patient factors, local policy, and whether splitting is appropriate.
          Do not rely on this tool as a sole source.       </p>

        <label className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[var(--text-strong)]">
          <input
            type="checkbox"
            checked={acceptedDisclaimer}
            onChange={(event) => setAcceptedDisclaimer(event.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>I understand this is a reference and cross-check tool only.</span>
        </label>
      </section>

      <section className="nh-card nh-page-card">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!acceptedDisclaimer}
            className={`flex-1 rounded-[16px] px-4 py-3 text-[15px] font-bold shadow-[var(--shadow-soft)] ${
              acceptedDisclaimer
                ? "bg-[linear-gradient(180deg,#58a6ff_0%,#2d7df0_100%)] text-white"
                : "cursor-not-allowed bg-[#d8e1ec] text-[#70839f]"
            }`}
          >
            Cross-check tablets/capsules
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="rounded-[16px] border border-[#d8e1ec] bg-white px-4 py-3 text-[15px] font-semibold text-[var(--text-muted)]"
          >
            Clear
          </button>
        </div>

        {error ? (
          <div className="mt-4 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}
      </section>

      {result ? (
        <>
          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Calculated estimate</p>
            <h2>Estimated results</h2>

            <div className="mt-4 rounded-[16px] bg-[#f7f9fc] px-4 py-4">
              <p className="text-sm font-semibold text-[var(--text-muted)]">
                Tablets/capsules required
              </p>
              <p className="mt-1 text-[24px] font-extrabold text-[var(--text-strong)]">
                {formatNumber(result.units)}
              </p>
            </div>
          </section>

          <section className="nh-card nh-page-card">
            <p className="nh-section-label">How this estimate is calculated</p>
            <h2>Calculation method</h2>

            <p className="mt-2">
              Tablets/capsules = desired dose ÷ available strength
            </p>

            <p className="mt-2">
              = {requiredDoseMg} ÷ {strengthMg} ={" "}
              {formatNumber(result.units)}
            </p>
          </section>

          {/* ✅ REFERENCE SECTION */}
          <section className="nh-card nh-page-card">
            <p className="nh-section-label">Reference</p>
            <a
              href={referenceLinks["tablet-capsule-calculator"]}
              className="text-sm font-semibold text-blue-600 underline"
            >
              View reference source            </a>
          </section>
        </>
      ) : null}
    </div>
  );
}
const bloodSugarTesting = [
  {
    title: "Quick reference",
    items: [
      { label: "Low blood glucose", value: "<4.0 mmol/L" },
      { label: "Typical pre-meal target", value: "4–7 mmol/L" },
      { label: "Typical post-meal target", value: "<8.5–9 mmol/L" },
      { label: "Testing", value: "Follow care plan / local policy" },
    ],
  },
];

const bloodTransfusion = [
  {
    title: "Pre-transfusion checks",
    items: [
      {
        label: "Patient ID",
        value: `• Confirm positive patient identification
• Check wristband and patient details`,
      },
      {
        label: "Consent",
        value: `• Confirm documented consent
• Check patient understanding where appropriate`,
      },
      {
        label: "Prescription",
        value: `• Check blood component against prescription
• Confirm route, rate and special requirements`,
      },
      {
        label: "Bag inspection",
        value: `• Visually inspect the bag before administration
• Check for leaks, damage, clots or discolouration`,
      },
    ],
  },
  {
    title: "Observations",
    items: [
      {
        label: "Baseline",
        value: "Record observations before starting transfusion",
      },
      {
        label: "15 minutes",
        value: "Repeat observations 15 minutes after starting each unit",
      },
      {
        label: "End of unit",
        value: "Record observations at the end of each unit",
      },
      {
        label: "Monitoring",
        value: "Continue visual monitoring throughout transfusion",
      },
    ],
  },
  {
    title: "Compatibility",
    items: [
      {
        label: "ABO/Rh",
        value: "Check ABO/Rh compatibility before administration",
      },
      {
        label: "Lab guidance",
        value: "Use local policy and transfusion lab guidance",
      },
      {
        label: "Memory warning",
        value: "Do not rely on memory for compatibility decisions",
      },
    ],
  },
  {
    title: "Reaction symptoms",
    items: [
      {
        label: "If suspected",
        value: "Stop transfusion and escalate immediately",
      },
      {
        label: "Monitor",
        value: "Check observations and patient condition",
      },
      {
        label: "Policy",
        value: "Follow local transfusion reaction policy",
      },
    ],
  },
];

const cprGuide = [
  {
    title: "Adult BLS reminder",
    items: [
      { label: "Danger", value: "Check scene safety" },
      { label: "Response", value: "Check responsiveness" },
      { label: "Airway", value: "Open airway" },
      { label: "Breathing", value: "Check breathing" },
      { label: "Call for help", value: "Emergency response / 999" },
      { label: "Compressions", value: "Start CPR if not breathing normally" },
      { label: "AED", value: "Use as soon as available" },
    ],
  },
];

const anttGuide = [
  {
    title: "ANTT principles",
    items: [
      {
        label: "Preparation",
        value: `• Gather equipment
• Check sterility and packaging
• Clean trolley or working surface
• Ensure adequate space`,
      },
      {
        label: "PPE & Hand hygiene",
        value: `• Perform hand hygiene before procedure
• Maintain hand hygiene during key steps
• Use PPE as required by policy`,
      },
      {
        label: "Aseptic field",
        value: `• Open packs carefully
• Do not touch internal field
• Maintain visibility and control
• Avoid reaching over`,
      },
      {
        label: "Key parts",
        value: `• Do not touch syringe tips
• Avoid contact with needle hubs
• Protect all critical parts`,
      },
      {
        label: "Key sites",
        value: `• Protect wounds
• Protect insertion sites
• Maintain asepsis throughout`,
      },
      {
        label: "Contamination",
        value: `• Replace contaminated equipment
• Re-establish aseptic field`,
      },
    ],
  },
];

const catheterCare = [
  {
    title: "Care reminders",
    items: [
      {
        label: "Closed system",
        value: "Maintain closed drainage system",
      },
      {
        label: "Bag position",
        value: "Keep drainage bag below bladder level",
      },
      {
        label: "Securement",
        value: "Secure catheter to prevent traction",
      },
      {
        label: "Hygiene",
        value: "Perform routine meatal hygiene",
      },
      {
        label: "Output",
        value: "Monitor and document urine output",
      },
      {
        label: "Review need",
        value: "Remove as soon as no longer required",
      },
    ],
  },
  {
    title: "Drainage bags",
    items: [
      {
        label: "Day use",
        value: "Use leg bag during the day when mobile",
      },
      {
        label: "Night use",
        value: "Use night bag on a stand overnight",
      },
      {
        label: "Floor safety",
        value: "Avoid the bag touching the floor",
      },
      {
        label: "Tubing",
        value: "Check tubing is not kinked or pulling",
      },
    ],
  },
  {
    title: "Documentation",
    items: [
      {
        label: "Nursing notes",
        value: "Document catheter care provided",
      },
      {
        label: "Urine",
        value: "Record urine output, appearance and concerns",
      },
      {
        label: "Escalate",
        value: "Pain, blockage, leakage, fever or signs of infection",
      },
    ],
  },
];

const maleCatheterisation = [
  {
    title: "Procedure overview",
    items: [
      { label: "Competency", value: "Only if trained/competent" },
      { label: "Consent", value: "Explain and obtain consent" },
      { label: "Asepsis", value: "Use sterile/ANTT approach" },
      { label: "Equipment", value: "Select correct catheter/size" },
      { label: "Escalate", value: "If resistance, pain, or bleeding" },
    ],
  },
];

const femaleCatheterisation = [
  {
    title: "Procedure overview",
    items: [
      { label: "Competency", value: "Only if trained/competent" },
      { label: "Consent", value: "Explain and obtain consent" },
      { label: "Asepsis", value: "Use sterile/ANTT approach" },
      { label: "Equipment", value: "Select correct catheter/size" },
      { label: "Escalate", value: "If difficulty, pain, or bleeding" },
    ],
  },
];

const stomaCare = [
  {
    title: "Care reminders",
    items: [
      { label: "Stoma colour", value: "Pink/red and moist expected" },
      { label: "Skin check", value: "Assess peristomal skin" },
      { label: "Output", value: "Monitor volume and consistency" },
      { label: "Appliance fit", value: "Check seal and leakage" },
      { label: "Escalate", value: "Dusky/black stoma, bleeding, severe pain" },
    ],
  },
];
const referenceLinks: Record<string, string> = {
  "iv-drip-rate-calculator": "/references#iv-fluids",
  "liquid-dose-calculator": "/references#medications",
  "medication-unit-converter": "/references#medications",
  "tablet-capsule-calculator": "/references#medications",
  "news2-score": "/references#news2",

  "blood-sugar-testing": "/references#blood-sugar-testing",
  "electrolyte-ranges": "/references#electrolytes",
  "normal-vital-signs": "/references#normal-vital-signs",

  "aseptic-non-touch-technique": "/references#antt",
  "cannula-sizes-guide": "/references#cannula-sizes",
  "catheter-care": "/references#catheter-care",
  "catheterisation-male": "/references#catheterisation",
  "catheterisation-female": "/references#catheterisation",
  "oxygen-delivery-devices": "/references#oxygen",
  "stoma-care": "/references#stoma-care",

  "anaphylaxis-treatment": "/references#anaphylaxis",
  "blood-transfusion": "/references#blood-transfusion",
  cpr: "/references#cpr",
  "sepsis-6-protocol": "/references#sepsis",
};

function ReferencePage({
  sections,
  slug,
}: {
  sections: {
    title: string;
    items: { label: string; value: string }[];
  }[];
  slug: string;
}) {

  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card nh-card-danger">
  <p className="nh-section-label">⚠ Disclaimer</p>
  <p className="mt-0 font-medium">
    Reference and cross-check only. Always follow local policy, clinical
    guidance, and patient-specific requirements. Do not rely on this as a sole
    source.
  </p>
</section>

      {sections.map((section) => (
        <section key={section.title} className="nh-card nh-page-card">
          <p className="nh-section-label">{section.title}</p>

          <div className="mt-4 space-y-3">
            {section.items?.map((item) => {
              const value = item.value ?? "";
              const isBulletList = value.includes("\n");
              const isNote = item.label === "Note";

              if (isNote) {
                return (
                  <div
                    key={item.label}
                    className="rounded-[14px] border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium leading-relaxed text-blue-900"
                  >
                    {value}
                  </div>
                );
              }

              return (
                <div
                  key={item.label}
                  className="rounded-[14px] bg-[#f7f9fc] px-4 py-4"
                >
                  <p className="text-sm font-bold text-slate-500">
                    {item.label}
                  </p>

                  <div className="mt-2 text-[15px] font-semibold leading-relaxed text-[var(--text-strong)]">
                    {isBulletList ? (
                      <ul className="list-disc space-y-1 pl-5">
                        {value.split("\n").map((line, i) => (
                          <li key={i}>{line.replace("• ", "")}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
            {referenceLinks[slug] ? (
        <section className="nh-card nh-page-card">
          <p className="nh-section-label">Reference</p>
          <a
            href={referenceLinks[slug]}
            className="text-sm font-semibold text-blue-600 underline"
          >
            View clinical reference source
          </a>
        </section>
      ) : null}
    </div>
  );
}


function PlaceholderToolPage({
  description,
  notes,
}: {
  description: string;
  notes: string[];
}) {
  return (
    <div className="nh-content space-y-4 pt-4">
      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Overview</p>
        <h2>UI foundation ready</h2>
        <p>{description}</p>
      </section>

      <section className="nh-card nh-page-card">
        <p className="nh-section-label">What this page includes</p>
        <ul className="nh-page-list">
          {notes.map((note) => (
            <li key={note}>
              <span className="nh-page-dot" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="nh-card nh-page-card">
        <p className="nh-section-label">Next phase placeholder</p>
        <h2>Ready for validated content</h2>
        <p>
          This page is ready for approved reference or protocol content without
          changing the visual system.
        </p>
      </section>
    </div>
  );
}

export default function ToolPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  const content = toolContent[slug] ?? {
    title: formatSlugTitle(slug),
    subtitle: "Tool page",
    description:
      "This page uses the shared product shell and is ready for logic and content in a later phase.",
    notes: [
      "Consistent visual system",
      "Card-based mobile layout",
      "Stable foundation for future features",
    ],
  };
return (
  <PageShell activeNav="home">
  <Header title={content.title} subtitle={content.subtitle} />

  {slug === "iv-drip-rate-calculator" ? (
    <IvDripCalculator />
  ) : slug === "liquid-dose-calculator" ? (
    <LiquidDoseCalculator />
  ) : slug === "medication-unit-converter" ? (
    <MedicationUnitConverter />
  ) : slug === "tablet-capsule-calculator" ? (
    <TabletCapsuleCalculator />
  ) : slug === "news2-score" ? (
    <News2Calculator />
  ) : slug === "normal-vital-signs" ? (
    <ReferencePage sections={normalVitalSigns} slug={slug} />
  ) : slug === "electrolyte-ranges" ? (
    <ReferencePage sections={electrolyteRanges} slug={slug} />
  ) : slug === "cannula-sizes-guide" ? (
    <ReferencePage sections={cannulaGuide} slug={slug} />
  ) : slug === "oxygen-delivery-devices" ? (
    <ReferencePage sections={oxygenDevices} slug={slug} />
  ) : slug === "sepsis-6-protocol" ? (
    <ReferencePage sections={sepsis6Protocol} slug={slug} />
  ) : slug === "anaphylaxis-treatment" ? (
    <ReferencePage sections={anaphylaxisProtocol} slug={slug} />
  ) : slug === "blood-sugar-testing" ? (
    <ReferencePage sections={bloodSugarTesting} slug={slug} />
  ) : slug === "blood-transfusion" ? (
    <ReferencePage sections={bloodTransfusion} slug={slug} />
  ) : slug === "cpr" ? (
    <ReferencePage sections={cprGuide} slug={slug} />
  ) : slug === "aseptic-non-touch-technique" ? (
    <ReferencePage sections={anttGuide} slug={slug} />
  ) : slug === "catheter-care" ? (
    <ReferencePage sections={catheterCare} slug={slug} />
  ) : slug === "catheterisation-male" ? (
    <ReferencePage sections={maleCatheterisation} slug={slug} />
  ) : slug === "catheterisation-female" ? (
    <ReferencePage sections={femaleCatheterisation} slug={slug} />
  ) : slug === "stoma-care" ? (
    <ReferencePage sections={stomaCare} slug={slug} />
  ) : (
    <PlaceholderToolPage
      description={content.description}
      notes={content.notes}
    />
  )}
</PageShell>

);
  
}