'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './Navigation.module.scss';

// Register ScrollToPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

// Páginas con fondo claro
const lightBackgroundPages = ['/archives', '/contact', '/schedule'];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Verificar si la página actual tiene fondo claro
  const isLightPage = lightBackgroundPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = originalStyle;
      document.body.style.height = 'auto';
      document.documentElement.style.overflow = originalStyle;
      document.documentElement.style.height = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.height = 'auto';
      document.documentElement.style.overflow = originalStyle;
      document.documentElement.style.height = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle smooth scroll to sections with bounce effect
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push('/');
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      // If we're already on the home page, just scroll
      scrollToSection(sectionId);
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Function to scroll to section with smooth animation
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      
      // Use GSAP to scroll with smooth animation
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionTop - 52,
          autoKill: false
        },
        ease: "power3.inOut" // Smooth, professional easing
      });
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''} ${isLightPage ? styles.lightPage : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CECAM
        </Link>
        
        {/* Hamburger button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desktop navigation */}
        <div className={styles.desktopLinks}>
          <a 
            href="#about-us" 
            onClick={(e) => handleSectionClick(e, 'about-us')}
            className={pathname === '/' && window.location.hash === '#about-us' ? styles.active : ''}
          >
            Sobre el CECAM
          </a>
          <Link 
            href="/schedule" 
            className={pathname === '/schedule' ? styles.active : ''}
          >
            Grilla de Horarios
          </Link>
          <Link 
            href="/archives" 
            className={pathname === '/archives' ? styles.active : ''}
          >
            Archivo
          </Link>
          <Link 
            href="/contact" 
            className={pathname === '/contact' ? styles.active : ''}
          >
            Contacto
          </Link>
          <a 
            href="https://www.instagram.com/ccartesdelmovimiento/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.instagramIcon}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Mobile navigation overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileLinks}>
          <a 
            href="#about-us" 
            onClick={(e) => handleSectionClick(e, 'about-us')}
            className={pathname === '/' && window.location.hash === '#about-us' ? styles.active : ''}
          >
            Sobre Nosotros
          </a>
          <Link 
            href="/schedule" 
            className={pathname === '/schedule' ? styles.active : ''}
          >
            Grilla de Horarios
          </Link>
          <Link 
            href="/archives" 
            className={pathname === '/archives' ? styles.active : ''}
          >
            Archivo
          </Link>
          <Link 
            href="/contact" 
            className={pathname === '/contact' ? styles.active : ''}
          >
            Contacto
          </Link>
          <a 
            href="https://www.instagram.com/ccartesdelmovimiento/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.instagramIcon}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;