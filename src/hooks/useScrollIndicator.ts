import { useState, useEffect } from 'react';

/**
 * Custom hook that returns true if a target element (by ID) is below the current viewport.
 * Useful for hiding scroll indicators (like bouncing chevrons) when a section comes into view.
 */
export function useScrollIndicator(targetId: string): boolean {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const targetTop = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the target section is in or near view, hide the indicator
      setShowIndicator(targetTop > windowHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetId]);

  return showIndicator;
}
