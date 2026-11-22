import {
  CertificateIcon,
  EducationIcon,
  LanguagesIcon,
} from '@/components/icons';

interface LanguageItem {
  name: string;
  level: string;
}

interface EducationSectionProps {
  dict: {
    eyebrow: string;
    title: string;
    subtitle: string;
    education_label: string;
    degree: string;
    institution: string;
    period: string;
    training_label: string;
    training_title: string;
    training_provider: string;
    training_description: string;
    certifications_label: string;
    certification_group: string;
    certifications: string[];
    languages_label: string;
    languages: LanguageItem[];
  };
}

const EducationSection = ({ dict }: EducationSectionProps) => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-shell border-b border-border-subtle"
    >
      <div className="content-wrapper grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">
        <header className="md:col-span-3">
          <p className="section-eyebrow">{dict.eyebrow}</p>
          <h2 id="education-heading" className="section-heading mt-2">
            {dict.title}
          </h2>
          <p className="mt-2 max-w-sm font-sans text-small leading-relaxed text-text-secondary">
            {dict.subtitle}
          </p>
        </header>

        <div className="md:col-span-8 md:col-start-5">
          <article className="education-row border-t border-border-default py-4">
            <h3 className="inline-flex items-center gap-2 font-sans text-small font-medium text-text-primary">
              <EducationIcon className="size-4 text-text-tertiary" />
              {dict.education_label}
            </h3>
            <div>
              <h4 className="font-sans text-body-lg font-medium text-text-primary">
                {dict.degree}
              </h4>
              <p className="mt-1 font-sans text-small text-text-secondary">
                {dict.institution}
              </p>
              <p className="mt-1 font-mono text-caption text-text-tertiary">
                {dict.period}
              </p>
            </div>
          </article>

          <article className="education-row border-t border-border-subtle py-4">
            <h3 className="inline-flex items-center gap-2 font-sans text-small font-medium text-text-primary">
              <CertificateIcon className="size-4 text-text-tertiary" />
              {dict.certifications_label}
            </h3>
            <div>
              <h4 className="font-sans text-small font-medium text-text-secondary">
                {dict.certification_group}
              </h4>
              <ul className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-2">
                {dict.certifications.map((certification) => (
                  <li
                    key={certification}
                    className="border-l border-border-strong pl-2 font-sans text-small leading-relaxed text-text-secondary"
                  >
                    {certification}
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-border-subtle pt-2">
                <p className="font-mono text-caption uppercase tracking-wide text-text-tertiary">
                  {dict.training_label}
                </p>
                <h4 className="mt-1 font-sans text-small font-medium text-text-primary">
                  {dict.training_title} <span className="text-text-secondary">· {dict.training_provider}</span>
                </h4>
                <p className="mt-1 font-sans text-small leading-relaxed text-text-secondary">
                  {dict.training_description}
                </p>
              </div>
            </div>
          </article>

          <div className="education-row border-t border-border-subtle py-4">
            <h3 className="inline-flex items-center gap-2 font-sans text-small font-medium text-text-primary">
              <LanguagesIcon className="size-4 text-text-tertiary" />
              {dict.languages_label}
            </h3>
            <dl className="flex flex-wrap gap-x-5 gap-y-1">
              {dict.languages.map((language) => (
                <div key={language.name} className="flex gap-1.5">
                  <dt className="font-sans text-small font-medium text-text-primary">
                    {language.name}
                  </dt>
                  <dd className="font-sans text-small text-text-secondary">
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
