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
      <div className="mx-auto max-w-[360px]">
  <h1 className="nh-title">{title}</h1>
  <p className="nh-subtitle">{subtitle}</p>

  <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/90">
    <a href="/disclaimer" className="underline">Disclaimer</a>
    <a href="/terms" className="underline">Terms</a>
    <a href="/privacy" className="underline">Privacy</a>
    <a href="/references" className="underline">References</a>
  </div>
</div>
    </section>
  );
}