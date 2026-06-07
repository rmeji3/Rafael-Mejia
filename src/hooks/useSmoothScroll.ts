import { useCallback } from 'react';

/**
 * Custom hook that returns a function to scroll smoothly to a DOM element by ID,
 * offset by a certain number of rem units (e.g., to account for a fixed navigation bar).
 */
// Easing function: easeInOutCubic
const easeInOutCubic = (t: number) => 
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function useSmoothScroll() {
  const scrollToSection = useCallback((id: string, offsetRem: number = 4, duration: number = 0) => {
    const element = document.getElementById(id);
    if (!element) return;

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const yOffset = -rootFontSize * offsetRem;
    const elementTop = element.getBoundingClientRect().top;
    const targetY = elementTop + window.scrollY + yOffset;

    if (duration <= 0) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    // Temporarily disable CSS smooth scrolling to prevent conflict
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        htmlEl.style.scrollBehavior = originalScrollBehavior;
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return scrollToSection;
}
