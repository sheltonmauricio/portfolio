import { LinkedInIcon, MailIcon, WhatsAppIcon } from '@/components/icons';
import { CONTACT_LINKS } from '@/lib/contact-links';

interface ContactSectionProps {
  dict: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta_email: string;
    cta_linkedin: string;
    whatsapp: string;
  };
}

const ContactSection = ({ dict }: ContactSectionProps) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-shell border-b border-border-subtle"
    >
      <div className="content-wrapper grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end md:gap-8">
        <div className="md:col-span-6">
          <p className="section-eyebrow">{dict.eyebrow}</p>
          <h2 id="contact-heading" className="section-heading mt-2">
            {dict.title}
          </h2>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <p className="font-sans text-body leading-relaxed text-text-secondary">
            {dict.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={CONTACT_LINKS.email.href}
              className="ui-button ui-button-primary rounded-full gap-2 px-4 py-2 text-small"
            >
              <MailIcon className="size-4" />
              {dict.cta_email}
            </a>
            <a
              href={CONTACT_LINKS.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-secondary rounded-full gap-2 px-4 py-2 text-small"
            >
              <LinkedInIcon className="size-4" />
              {dict.cta_linkedin}
            </a>
            <a
              href={CONTACT_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-secondary rounded-full gap-2 px-4 py-2 text-small"
              aria-label={`${dict.whatsapp}: ${CONTACT_LINKS.whatsapp.number}`}
            >
              <WhatsAppIcon className="size-4" />
              <span>{dict.whatsapp}</span>
              <span className="font-mono text-caption text-text-secondary">
                {CONTACT_LINKS.whatsapp.number}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
