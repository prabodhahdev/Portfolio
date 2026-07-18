let activeScrollFrame: number | null = null;
let navScrollActive = false;

function easeInOutSine(progress: number): number {
  return -(Math.cos(Math.PI * progress) - 1) / 2;
}

export function getNavHeight(): number {
  if (typeof document === "undefined") return 96;
  const header = document.querySelector("[data-site-header]");
  if (header) return header.getBoundingClientRect().height;
  const nav = document.querySelector("nav");
  return nav ? nav.getBoundingClientRect().height : 96;
}

export function isNavScrollingActive(): boolean {
  return navScrollActive;
}

function getScrollTop(): number {
  return (
    window.scrollY ||
    document.scrollingElement?.scrollTop ||
    document.documentElement.scrollTop ||
    0
  );
}

function setScrollTop(top: number) {
  const root = document.scrollingElement ?? document.documentElement;
  root.scrollTop = top;
}

export function getSectionScrollTarget(sectionId: string): number | null {
  const element = document.getElementById(sectionId);
  if (!element) return null;

  if (sectionId === "home") return 0;

  const navHeight = getNavHeight();
  return Math.max(
    0,
    element.getBoundingClientRect().top + getScrollTop() - navHeight
  );
}

function animateScrollTo(targetTop: number, onComplete?: () => void) {
  if (activeScrollFrame !== null) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  const startTop = getScrollTop();
  const distance = targetTop - startTop;
  const duration = Math.min(1200, Math.max(750, Math.abs(distance) * 0.5));

  if (Math.abs(distance) < 2) {
    setScrollTop(targetTop);
    onComplete?.();
    return;
  }

  navScrollActive = true;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;

    const progress = Math.min((currentTime - startTime) / duration, 1);
    setScrollTop(startTop + distance * easeInOutSine(progress));

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step);
      return;
    }

    activeScrollFrame = null;
    navScrollActive = false;
    setScrollTop(targetTop);
    onComplete?.();
  };

  activeScrollFrame = requestAnimationFrame(step);
}

export function scrollToSectionId(sectionId: string) {
  requestAnimationFrame(() => {
    const target = getSectionScrollTarget(sectionId);
    if (target === null) return;

    animateScrollTo(target, () => {
      window.history.replaceState(null, "", `#${sectionId}`);
    });
  });
}
