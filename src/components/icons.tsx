type IconProps = {
  className?: string;
};

export const MailIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="m3.5 5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M5.2 7.4H2.8V17h2.4V7.4ZM4 6.1a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM17.2 11.5c0-2.9-1.5-4.3-3.6-4.3-1.7 0-2.4.9-2.8 1.5V7.4H8.4V17h2.4v-4.8c0-1.3.2-2.6 1.9-2.6s1.7 1.5 1.7 2.7V17h2.4l.4-5.5Z" />
  </svg>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="10" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const ExternalLinkIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M11 4h5v5m0-5-7 7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const GitHubIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 1.7a8.3 8.3 0 0 0-2.6 16.2c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-.9-.9-1.1-.9-1.1-.8-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4.1 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.3.8a8 8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.2-1.9 3.9-3.7 4.1.3.3.6.7.6 1.4v2.1c0 .2.2.5.6.4A8.3 8.3 0 0 0 10 1.7Z" />
  </svg>
);

export const TrophyIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M6 3h8v4.5a4 4 0 0 1-8 0V3ZM6 5H3v1a3 3 0 0 0 3 3m8-4h3v1a3 3 0 0 1-3 3m-4 2.5V15m-3 2h6m-5-2h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EducationIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="m2 7 8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M5 8.5v4c2.8 2.1 7.2 2.1 10 0v-4M18 7v5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const CertificateIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M5 2.5h10a1.5 1.5 0 0 1 1.5 1.5v12l-3.5-2-3 2-3-2-3.5 2V4A1.5 1.5 0 0 1 5 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 6h6M7 9h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const LanguagesIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2.8 10h14.4M10 2.5a12 12 0 0 1 0 15M10 2.5a12 12 0 0 0 0 15" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
