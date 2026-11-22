'use client';

interface ScrollToTopProps {
  label: string;
}

export default function ScrollToTop({ label }: ScrollToTopProps) {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="ui-button ui-button-secondary rounded-full gap-2 px-3 py-2 text-caption"
    >
      <span>{label}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-3.5">
        <path d="M10 15V5m0 0L6 9m4-4 4 4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </button>
  );
}
