interface AboutSectionProps {
  dict: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
  };
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell border-b border-border-subtle"
    >
      <div className="content-wrapper grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">
        <header className="md:col-span-3">
          <p className="section-eyebrow">{dict.eyebrow}</p>
          <h2 id="about-heading" className="section-heading mt-2">
            {dict.title}
          </h2>
        </header>

        <div className="space-y-3 md:col-span-8 md:col-start-5">
          <p className="max-w-3xl font-sans text-body-lg leading-relaxed text-text-primary">
            {dict.p1}
          </p>
          <p className="max-w-3xl font-sans text-body leading-relaxed text-text-secondary">
            {dict.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
