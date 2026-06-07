// components/ThreeDCarousel.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./card";
import { useIsMobile } from "../../hooks/use-mobile";

import styles from "./ThreeDCarousel.module.css";

export interface ThreeDCarouselItem {
  id: number;
  title: string;
  brand?: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link: string;
  customHeader?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

const ThreeDCarousel = ({
  items = [],
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  isMobileSwipe = true,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const lastWheelTime = useRef<number>(0);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return; // Cooldown to prevent runaway scrolling

    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      if (e.deltaX > 20 || e.deltaY > 20) {
        setActive((prev) => (prev + 1) % items.length);
        lastWheelTime.current = now;
      } else if (e.deltaX < -20 || e.deltaY < -20) {
        setActive((prev) => (prev - 1 + items.length) % items.length);
        lastWheelTime.current = now;
      }
    }
  };

  const handleCardClick = (index: number, link: string) => {
    if (index === active) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      setActive(index);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return styles.itemActive;
    if (index === (active + 1) % items.length) return styles.itemNext;
    if (index === (active - 1 + items.length) % items.length) return styles.itemPrev;
    return styles.itemHidden;
  };

  return (
    <section id="ThreeDCarousel" className={styles.carouselSection}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={handleWheel}
          ref={carouselRef}
        >
          <div className={styles.carouselInner}>
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.carouselItem} ${getCardAnimationClass(index)}`}
                onClick={() => handleCardClick(index, item.link)}
              >
                <div className={styles.card} style={{ height: cardHeight, backgroundColor: item.bgColor }}>
                  {item.customHeader ? (
                    item.customHeader
                  ) : (
                    <div className={styles.cardImageContainer}>
                      <div
                        className={styles.imageBlurBg}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <div
                        className={styles.imageForeground}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    </div>
                  )}

                  <div className={styles.cardContent} style={{ backgroundColor: item.bgColor, color: item.textColor }}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle} style={{ color: item.textColor }}>{item.title}</h3>
                      {item.brand && <p className={styles.cardBrand} style={{ color: item.textColor }}>{item.brand}</p>}
                    </div>
                    <p className={styles.cardDesc} style={{ color: item.textColor }}>{item.description}</p>

                    <div className={styles.tagsContainer}>
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag} style={{ color: item.textColor, backgroundColor: item.bgColor ? 'rgba(255,255,255,0.1)' : undefined }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()} // Prevent double trigger
                    >
                      <span className={styles.linkText}>View Project</span>
                      <ArrowRight className={styles.linkIcon} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className={`${styles.navButton} ${styles.navButtonPrev}`}
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className={styles.navIcon} />
              </button>
              <button
                className={`${styles.navButton} ${styles.navButtonNext}`}
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className={styles.navIcon} />
              </button>
            </>
          )}

          <div className={styles.dotsContainer}>
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${active === idx ? styles.dotActive : ""}`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
