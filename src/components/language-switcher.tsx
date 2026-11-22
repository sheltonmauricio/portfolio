'use client';

import { usePathname, useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  labels: {
    group: string;
    portuguese: string;
    english: string;
  };
}

const LanguageSwitcher = ({ labels }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  // No GitHub Pages, o pathname é: /nome-do-repo/pt/about
  // Localmente é: /pt/about
  const segments = pathname.split('/').filter(Boolean);

  // Verifica se o primeiro segmento é o nome do repo (produção) ou o idioma
  const isProdPath = segments[0] && !['pt', 'en'].includes(segments[0]);
  const langIndex = isProdPath ? 1 : 0;
  
  const currentLang = segments[langIndex] || 'en';

  const switchLanguage = (newLang: 'pt' | 'en') => {
    const newSegments = [...segments];
    newSegments[langIndex] = newLang;
    
    // O router.push do Next.js já insere o basePath automaticamente, 
    // por isso removemos o nome do repo antes de empurrar a nova rota
    if (isProdPath) {
      newSegments.shift();
    }
    
    router.push('/' + newSegments.join('/'));
  };

  return (
    <div
      role="group"
      aria-label={labels.group}
      className="language-switcher w-max font-mono"
    >
      <button
        onClick={() => switchLanguage('pt')}
        aria-pressed={currentLang === 'pt'}
        aria-label={labels.portuguese}
        className="rounded-full px-2"
      >
        PT
      </button>
      <span aria-hidden="true" className="text-caption text-text-tertiary">|</span>
      <button
        onClick={() => switchLanguage('en')}
        aria-pressed={currentLang === 'en'}
        aria-label={labels.english}
        className="rounded-full px-2"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
