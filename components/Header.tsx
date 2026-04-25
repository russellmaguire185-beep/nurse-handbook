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
      </div>
    </section>
  );
}