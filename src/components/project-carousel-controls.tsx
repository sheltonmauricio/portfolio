'use client';

interface ProjectCarouselControlsProps {
  controlsId: string;
  previousLabel: string;
  nextLabel: string;
}

const ProjectCarouselControls = ({
  controlsId,
  previousLabel,
  nextLabel,
}: ProjectCarouselControlsProps) => {
  const scroll = (direction: -1 | 1) => {
    const track = document.getElementById(controlsId);
    if (!track) return;

    const firstSlide = track.firstElementChild?.firstElementChild;
    const list = track.firstElementChild;
    const gap = list ? Number.parseFloat(window.getComputedStyle(list).columnGap) || 0 : 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * ((firstSlide?.getBoundingClientRect().width ?? track.clientWidth * 0.8) + gap),
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label={previousLabel}
        aria-controls={controlsId}
        onClick={() => scroll(-1)}
        className="ui-icon-button rounded-full grid size-10 place-items-center"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
          <path d="M12.5 4.5 7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        aria-controls={controlsId}
        onClick={() => scroll(1)}
        className="ui-icon-button rounded-full grid size-10 place-items-center"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
          <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
};

export default ProjectCarouselControls;
