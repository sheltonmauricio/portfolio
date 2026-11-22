import ProjectCarouselControls from '@/components/project-carousel-controls';
import { ExternalLinkIcon, GitHubIcon, TrophyIcon } from '@/components/icons';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  live_demo_url: string | null;
  repository_url: string | null;
  achievement: string | null;
}

interface ProjectsSectionProps {
  dict: {
    title: string;
    subtitle: string;
    technologies_label: string;
    carousel_label: string;
    previous: string;
    next: string;
    live_demo: string;
    repository: string;
    items: ProjectItem[];
  };
}

const PROJECT_TRACK_ID = 'selected-projects-track';

interface ProjectActionProps {
  href: string | null;
  label: string;
  kind: 'demo' | 'repository';
}

const ProjectAction = ({ href, label, kind }: ProjectActionProps) => {
  const Icon = kind === 'demo' ? ExternalLinkIcon : GitHubIcon;
  const className = 'ui-button ui-button-secondary project-action rounded-full gap-1.5 px-2.5 py-1 text-caption';
  const content = (
    <>
      <Icon className="size-3.5" />
      {label}
    </>
  );

  if (!href) {
    return (
      <button type="button" disabled className={className}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
};

const ProjectsSection = ({ dict }: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell scroll-mt-16 border-b border-border-subtle"
    >
      <div className="content-wrapper">
        <header className="flex items-end justify-between gap-5">
          <div className="max-w-2xl">
            <h2 id="projects-heading" className="section-heading">
              {dict.title}
            </h2>
            <p className="mt-2 font-sans text-body leading-relaxed text-text-secondary">
              {dict.subtitle}
            </p>
          </div>
          <ProjectCarouselControls
            controlsId={PROJECT_TRACK_ID}
            previousLabel={dict.previous}
            nextLabel={dict.next}
          />
        </header>

        <div
          id={PROJECT_TRACK_ID}
          role="region"
          aria-label={dict.carousel_label}
          tabIndex={0}
          className="project-track mt-6 snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-3 focus-visible:rounded-panel"
        >
          <ul className="flex items-stretch gap-4">
            {dict.items.map((project) => (
              <li key={project.id} className="project-slide">
                <article className="flex h-full flex-col rounded-panel border border-border-default bg-surface p-4 transition-colors hover:border-border-strong sm:p-5">
                  <h3 className="font-sans text-h3 font-medium tracking-tight text-text-primary">
                    {project.title}
                  </h3>
                  {project.achievement && (
                    <p className="project-award mt-2 self-start">
                      <TrophyIcon className="size-3.5" />
                      <span>{project.achievement}</span>
                    </p>
                  )}
                  <p className="mt-2 flex-1 font-sans text-small leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <ul
                    aria-label={`${dict.technologies_label}: ${project.title}`}
                    className="mt-4 flex flex-wrap gap-1.5"
                  >
                    {project.technologies.slice(0, 4).map((technology) => (
                      <li
                        key={technology}
                        className="ui-badge rounded-full px-2 py-1 font-mono text-caption"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2 border-t border-border-subtle pt-3">
                    <ProjectAction
                      href={project.live_demo_url}
                      label={dict.live_demo}
                      kind="demo"
                    />
                    <ProjectAction
                      href={project.repository_url}
                      label={dict.repository}
                      kind="repository"
                    />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
