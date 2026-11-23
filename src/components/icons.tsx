type IconProps = {
  className?: string;
};

export const MailIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="m3.5 5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 2.5a7.3 7.3 0 0 0-6.2 11.2L3 17l3.5-.8A7.3 7.3 0 1 0 10 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7.2 6.6c.2-.4.5-.4.8-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.1.2-.2.3 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.3.6c.3.1.4.2.4.4s-.1.7-.4 1c-.3.3-.8.5-1.3.5-.4 0-1-.1-1.8-.5-1-.4-2.1-1.1-3-2-.8-.8-1.5-2-1.7-2.8-.2-.8 0-1.3.3-1.6.1-.1.2-.1.4-.1Z" fill="currentColor" />
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

const technologyMarks: Record<string, string> = {
  JavaScript: 'JS',
  TypeScript: 'TS',
  Python: 'Py',
  'Next.js': 'Nx',
  Expo: 'Xp',
  'Node.js': 'Nd',
  Express: 'Ex',
  Prisma: 'Pr',
  Zod: 'Z',
  PostgreSQL: 'PG',
  MySQL: 'My',
  SQLite: 'Sq',
  CORBA: 'Co',
  Maven: 'Mv',
  Postman: 'Po',
  Insomnia: 'In',
};

const technologyDrawings: Record<string, string> = {
  Java: 'java',
  React: 'atom',
  HTML5: 'html',
  CSS3: 'css',
  'Tailwind CSS': 'tailwind',
  'React Native': 'atom',
  'REST APIs': 'api',
  'APIs REST': 'api',
  SQLite: 'database',
  SQL: 'database',
  'Relational data modelling': 'model',
  'Modela\u00e7\u00e3o de dados relacionais': 'model',
  'TCP Sockets': 'network',
  WebSocket: 'websocket',
  CORBA: 'network',
  Linux: 'linux',
  'Windows Server': 'windows',
  'Active Directory': 'directory',
  'Cisco networking': 'router',
  'Redes Cisco': 'router',
  Bash: 'terminal',
  Docker: 'docker',
  Git: 'git',
  GitHub: 'github',
};

export const TechnologyIcon = ({ name }: { name: string }) => {
  const mark = technologyMarks[name];
  if (mark) {
    return <span aria-hidden="true" className="technology-icon technology-icon-mark">{mark}</span>;
  }

  const drawing = technologyDrawings[name] ?? 'network';

  if (drawing === 'github') return <GitHubIcon className="technology-icon" />;

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="technology-icon">
      {drawing === 'java' && (
        <>
          <path d="M8 3c3 2-3 2 0 4m4-5c3 2-3 3 0 5M5 9h10l-1 5H6L5 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16h7m-9 1h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}
      {drawing === 'atom' && (
        <>
          <ellipse cx="10" cy="10" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="10" cy="10" rx="8" ry="3.5" transform="rotate(60 10 10)" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="10" cy="10" rx="8" ry="3.5" transform="rotate(120 10 10)" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="1.2" fill="currentColor" />
        </>
      )}
      {(drawing === 'html' || drawing === 'css') && (
        <>
          <path d="m4 2 1.2 14 4.8 2 4.8-2L16 2H4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <text x="10" y="13" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="700">{drawing === 'html' ? '5' : '3'}</text>
        </>
      )}
      {drawing === 'tailwind' && (
        <path d="M3 7c2.2-3 5.2-3 7.3 0 2.1 3 5.1 3 7.4 0M3 13c2.2-3 5.2-3 7.3 0 2.1 3 5.1 3 7.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
      {drawing === 'api' && (
        <>
          <path d="M3 6h11m0 0-3-3m3 3-3 3M17 14H6m0 0 3-3m-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {drawing === 'database' && (
        <>
          <ellipse cx="10" cy="4.5" rx="6.5" ry="2.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M3.5 4.5v10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-10M3.5 9.5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" stroke="currentColor" strokeWidth="1.3" />
        </>
      )}
      {(drawing === 'model' || drawing === 'network') && (
        <>
          <path d="M5 5.5 10 10l5-4.5M10 10v5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="10" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
          {drawing === 'model' && <circle cx="10" cy="10" r="1.5" fill="currentColor" />}
        </>
      )}
      {drawing === 'websocket' && (
        <>
          <path d="M3 6h13m0 0-3-3m3 3-3 3M17 14H4m0 0 3-3m-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {drawing === 'linux' && (
        <>
          <path d="M10 2.5c-2 0-3.2 1.8-3.2 4.2v4.1l-2 3.8c-.5 1 .2 2.2 1.3 2.2h7.8c1.1 0 1.8-1.2 1.3-2.2l-2-3.8V6.7c0-2.4-1.2-4.2-3.2-4.2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <circle cx="8.5" cy="7" r=".6" fill="currentColor" /><circle cx="11.5" cy="7" r=".6" fill="currentColor" />
          <path d="M8.5 9.4h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}
      {drawing === 'windows' && (
        <path d="m2.5 4 7-1v6h-7V4Zm8.5-1.2 6.5-.9v7.1H11V2.8ZM2.5 10.5h7v6l-7-1v-5Zm8.5 0h6.5v7.1l-6.5-.9v-6.2Z" fill="currentColor" />
      )}
      {drawing === 'directory' && (
        <>
          <circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="5" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M10 7v3m-5 3v-3h10v3" stroke="currentColor" strokeWidth="1.3" />
        </>
      )}
      {drawing === 'router' && (
        <>
          <rect x="3" y="9" width="14" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M6 9V6m8 3V6M6 13h.1M9 13h.1M12 13h.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {drawing === 'terminal' && (
        <>
          <rect x="2.5" y="3.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="m6 8 2 2-2 2m4 0h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {drawing === 'docker' && (
        <>
          <path d="M3 10h13c-.3 3.5-2.5 5.5-6.4 5.5H7.5C5 15.5 3.6 13.8 3 10Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M5 7h2v2H5zM8 7h2v2H8zM11 7h2v2h-2zM8 4h2v2H8zM11 4h2v2h-2z" fill="currentColor" />
          <path d="M16 9c.5-.5 1-.6 1.8-.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}
      {drawing === 'git' && (
        <>
          <path d="M6 4v10a3 3 0 0 0 3 3h1a4 4 0 0 0 4-4V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="6" cy="4" r="1.8" fill="var(--surface)" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="6" cy="14" r="1.8" fill="var(--surface)" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="14" cy="5" r="1.8" fill="var(--surface)" stroke="currentColor" strokeWidth="1.4" />
        </>
      )}
    </svg>
  );
};
