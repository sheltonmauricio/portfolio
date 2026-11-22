'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

interface NavigationLink {
  href: string;
  label: string;
}

interface MobileNavigationProps {
  links: NavigationLink[];
  navigationLabel: string;
  openLabel: string;
  closeLabel: string;
}

const MENU_ID = 'mobile-navigation-menu';

const MobileNavigation = ({
  links,
  navigationLabel,
  openLabel,
  closeLabel,
}: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div className="mobile-navigation relative md:hidden" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        type="button"
        aria-label={isOpen ? closeLabel : openLabel}
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        onClick={() => setIsOpen((open) => !open)}
        className="ui-icon-button rounded-full grid size-10 place-items-center"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </button>

      <nav
        id={MENU_ID}
        aria-label={navigationLabel}
        hidden={!isOpen}
        className="mobile-navigation-panel"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
