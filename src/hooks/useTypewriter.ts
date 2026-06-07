import { useState, useEffect } from 'react';

/**
 * Custom hook to type out and delete strings in sequence.
 * Respects prefers-reduced-motion media query settings.
 */
export function useTypewriter(
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 40,
  delayBeforeDelete: number = 1900,
  delayBeforeType: number = 320
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at the end of typing before starting to delete
      timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      // Pause after deleting before typing the next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, delayBeforeType);
    } else {
      // Actively typing or deleting
      const nextDelay = isDeleting ? deletingSpeed : typingSpeed + Math.random() * 50;
      
      timer = setTimeout(() => {
        const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextCharIndex);
        setCurrentText(currentWord.slice(0, nextCharIndex));
      }, nextDelay);
    }

    return () => clearTimeout(timer);
  }, [wordIndex, charIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBeforeDelete, delayBeforeType]);

  return currentText;
}
