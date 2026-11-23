import ScrollToTop from '@/components/scroll-to-top';
import { LinkedInIcon, MailIcon, MapPinIcon, WhatsAppIcon } from '@/components/icons';
import { CONTACT_LINKS } from '@/lib/contact-links';

interface FooterDictionary {
  name: string;
  role: string;
  location: string;
  navigation_label: string;
  linkedin: string;
  email: string;
  whatsapp: string;
  back_to_top: string;
  copyright: string;
}

interface NavigationDictionary {
  about: string;
  expertise: string;
  projects: string;
  education: string;
  contact: string;
}

interface SiteFooterProps {
  dict: FooterDictionary;
  nav: NavigationDictionary;
}

const SiteFooter = ({ dict, nav }: SiteFooterProps) => {
  const links = [
    { id: 'projects', label: nav.projects },
    { id: 'about', label: nav.about },
    { id: 'expertise', label: nav.expertise },
    { id: 'education', label: nav.education },
    { id: 'contact', label: nav.contact },
  ];

  return (
    <footer className="border-t border-border-subtle py-5 text-small">
      <div className="content-wrapper">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-12 md:items-start md:gap-6">
          <div className="md:col-span-3">
            <p className="font-sans text-small font-medium text-text-primary">
              {dict.name}
            </p>
            <p className="mt-0.5 font-sans text-caption text-text-secondary">
              {dict.role}
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-sans text-caption text-text-tertiary">
              <MapPinIcon className="size-3.5" />
              {dict.location}
            </p>
          </div>

          <nav
            aria-label={dict.navigation_label}
            className="md:col-span-5 md:col-start-5"
          >
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-caption text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:col-span-3 md:col-start-10">
            <li>
              <a
                href={CONTACT_LINKS.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-caption text-text-secondary transition-colors hover:text-text-primary"
              >
                <LinkedInIcon className="size-3.5" />
                {dict.linkedin}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKS.email.href}
                className="inline-flex items-center gap-1.5 text-caption text-text-secondary transition-colors hover:text-text-primary"
              >
                <MailIcon className="size-3.5" />
                {dict.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-caption text-text-secondary transition-colors hover:text-text-primary"
                aria-label={`${dict.whatsapp}: ${CONTACT_LINKS.whatsapp.number}`}
              >
                <WhatsAppIcon className="size-3.5" />
                <span>{dict.whatsapp}</span>
                <span className="font-mono text-text-tertiary">
                  {CONTACT_LINKS.whatsapp.number}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-border-subtle pt-3">
          <p className="font-sans text-caption text-text-tertiary">
            {dict.copyright}
          </p>
          <ScrollToTop label={dict.back_to_top} />
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
