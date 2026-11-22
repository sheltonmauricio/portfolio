interface ExpertiseCategory {
  id: string;
  name: string;
  items: string[];
}

interface ExpertiseSectionProps {
  dict: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: ExpertiseCategory[];
  };
}

const ExpertiseSection = ({ dict }: ExpertiseSectionProps) => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-shell border-b border-border-subtle"
    >
      <div className="content-wrapper grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">
        <header className="md:col-span-3">
          <p className="section-eyebrow">{dict.eyebrow}</p>
          <h2 id="expertise-heading" className="section-heading mt-2">
            {dict.title}
          </h2>
          <p className="mt-2 max-w-sm font-sans text-small leading-relaxed text-text-secondary">
            {dict.subtitle}
          </p>
        </header>

        <div className="md:col-span-8 md:col-start-5">
          {dict.categories.map((category) => (
            <div
              role="group"
              key={category.id}
              aria-labelledby={`expertise-${category.id}`}
              className="expertise-row border-t border-border-subtle py-3"
            >
              <h3
                id={`expertise-${category.id}`}
                className="font-sans text-small font-medium text-text-primary"
              >
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="ui-badge rounded-full px-2.5 py-1 font-mono text-caption"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
