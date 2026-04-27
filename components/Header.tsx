type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <section
      className="nh-header px-5 pb-8 pt-10"
      style={{
        background:
          "linear-gradient(180deg, #8ec4ff 0%, #63adff 55%, #4b9af7 100%)",
      }}
    >
      <div className="mx-auto max-w-[360px] text-center">
        <h1 className="nh-title">{title}</h1>
        <p className="nh-subtitle">{subtitle}</p>

        <p className="mt-3 text-sm font-semibold text-white/90">
          Designed for UK clinical practice.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-white/90">
          <a href="/disclaimer" className="underline">
            Disclaimer
          </a>
          <span>•</span>

          <a href="/terms" className="underline">
            Terms
          </a>
          <span>•</span>

          <a href="/privacy" className="underline">
            Privacy
          </a>
          <span>•</span>

          <a href="/references" className="underline">
            References
          </a>
          <span>•</span>

                      <a
            href="mailto:nursehandbook@gmail.com?subject=Nurse%20Handbook%20Feedback"
            className="underline"
          >
            Feedback
          </a>
                </div>
      </div>
    </section>
  );
}