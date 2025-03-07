'use client';

import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import styles from './AnimatedLogo.module.scss';

const AnimatedLogo = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || !logoRef.current || !descriptionRef.current) {
      return;
    }

    // Split into characters
    const chars = new SplitType(logoRef.current, {
      types: 'words',
      tagName: 'span'
    });

    // Split into words
    const words = new SplitType(descriptionRef.current, {
      types: 'words',
      tagName: 'span'
    });

    // Create timeline
    const tl = gsap.timeline();

    // Make container visible
    gsap.set(containerRef.current, { visibility: 'visible', opacity: 1 });
    
    // Animate characters
    tl.from(chars.words, {
      opacity: 0,
      letterSpacing: 40,
      duration: 1,
      ease: "power2.out"
    })
    // Animate words
    .from(words.words, {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8"); // Start slightly before the previous animation ends

    return () => {
      chars.revert();
      words.revert();
      tl.kill();
    };
  }, [isMounted]);

  // Use a stable class name that won't change between server and client
  const containerClass = `${styles.logoContainer}${isMounted ? ' ' + styles.mounted : ''}`;

  return (
    <div ref={containerRef} className={containerClass}>
      <h1 ref={logoRef} className={styles.logoName}>CECAM</h1>
      <p ref={descriptionRef} className={styles.description}>Centro Cultural de las Artes del Movimiento</p>
    </div>
  );
};

export default AnimatedLogo; 