import Link from 'next/link';
import LanguageSwitcher from '@/components/language-switcher';
import MobileNavigation from '@/components/mobile-navigation';

interface NavbarProps {
  lang: 'pt' | 'en';
  dict: {
    about: string;
    expertise: string;
    projects: string;
    education: string;
    contact: string;
    navigation_label: string;
    open_navigation: string;
    close_navigation: string;
    language_label: string;
    language_pt: string;
    language_en: string;
  };
}

const Navbar = ({ lang, dict }: NavbarProps) => {
  const links = [
    { href: `/${lang}#projects`, label: dict.projects },
    { href: `/${lang}#about`, label: dict.about },
    { href: `/${lang}#expertise`, label: dict.expertise },
    { href: `/${lang}#education`, label: dict.education },
    { href: `/${lang}#contact`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/95 backdrop-blur-sm">
      <div className="content-wrapper flex h-14 items-center justify-between gap-4">
        <Link
          href={`/${lang}#top`}
          aria-label="Shelton Maurício"
          className="shrink-0 font-sans text-base font-semibold tracking-tight text-text-primary transition-colors hover:text-primary-hover"
        >
          <span className="sm:hidden">SM</span>
          <span className="hidden sm:inline">Shelton Maurício</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <nav aria-label={dict.navigation_label} className="hidden md:block">
            <ul className="flex items-center gap-5 lg:gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher
            labels={{
              group: dict.language_label,
              portuguese: dict.language_pt,
              english: dict.language_en,
            }}
          />

          <MobileNavigation
            links={links}
            navigationLabel={dict.navigation_label}
            openLabel={dict.open_navigation}
            closeLabel={dict.close_navigation}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
