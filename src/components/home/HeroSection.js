'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.scss';
import AnimatedLogo from '@/components/AnimatedLogo';

const HeroSection = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    // Simple animation for the arrow
    const arrow = arrowRef.current;
    if (!arrow) return;

    // Use a smoother animation with sine function
    let startTime = null;
    const duration = 2000; // 2 seconds for a complete cycle
    const amplitude = 6; // Maximum movement in pixels
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position using sine wave for smooth movement
      // sin() produces values between -1 and 1, so we multiply by amplitude
      // and add amplitude to keep it between 0 and 2*amplitude
      const position = amplitude * (1 - Math.cos(Math.PI * 2 * (elapsed % duration) / duration)) / 2;
      
      // Only apply transform to the SVG element, not the entire container
      const svgElement = arrow.querySelector('svg');
      if (svgElement) {
        svgElement.style.transform = `translateY(${position}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className={styles.spacer}></div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <AnimatedLogo />
          </div>
        </div>
        <div className={styles.scrollDown} ref={arrowRef}>
          <span>Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 