import { ExternalLinkIcon } from '@/components/icons';

interface HeroFocusItem {
  label: string;
  value: string;
}

interface HeroSectionProps {
  dict: {
    title: string;
    student: string;
    summary: string;
    project_cta: string;
    contact_cta: string;
    cv: string;
    focus_label: string;
    focus: HeroFocusItem[];
  };
}

const HeroSection = ({ dict }: HeroSectionProps) => {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="section-shell border-b border-border-subtle"
    >
      <div className="content-wrapper grid grid-cols-1 gap-8 md:grid-cols-8 md:items-end md:gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="md:col-span-5 lg:col-span-7">
          <p className="section-eyebrow">{dict.title}</p>
          <h1
            id="hero-heading"
            className="mt-3 font-sans text-h1 font-semibold leading-tight tracking-tight text-text-primary sm:text-display"
          >
            Shelton <span className="text-text-secondary">{'Maur\u00edcio'}</span>
          </h1>

          <p className="mt-3 max-w-2xl font-sans text-body-lg font-medium leading-snug text-text-primary">
            {dict.student}
          </p>
          <p className="mt-3 max-w-2xl font-sans text-body leading-relaxed text-text-secondary">
            {dict.summary}
          </p>

          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className="ui-button ui-button-primary rounded-full px-4 py-2 text-small"
              >
                {dict.project_cta}
              </a>
              <a
                href="#contact"
                className="ui-button ui-button-secondary rounded-full px-4 py-2 text-small"
              >
                {dict.contact_cta}
              </a>
            </div>
            <a
              href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/cv.pdf`}
              download="shelton_mauricio-cv.pdf"
              className="ui-button ui-button-ghost rounded-full mt-2 gap-2 px-3 py-1.5 text-small"
            >
              {dict.cv}
              <ExternalLinkIcon className="size-3.5" />
            </a>
          </div>
        </div>

        <aside className="border-t border-border-subtle pt-4 md:col-span-3 md:border-l md:border-t-0 md:pl-6 md:pt-0 lg:col-span-4 lg:col-start-9">
          <h2 className="font-mono text-caption font-medium uppercase tracking-wider text-text-tertiary">
            {dict.focus_label}
          </h2>
          <dl className="mt-2 divide-y divide-border-subtle">
            {dict.focus.map((item) => (
              <div key={item.label} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 py-2">
                <dt className="font-sans text-small font-medium text-text-primary">
                  {item.label}
                </dt>
                <dd className="font-sans text-small leading-snug text-text-secondary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
