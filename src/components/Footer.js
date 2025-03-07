import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            CECAM
          </div>
          <div className={styles.info}>
            <p>Centro Cultural de las Artes del Movimiento</p>
            <p>Chile 2958 - Balvanera, Buenos Aires, Argentina</p>
          </div>
          <div className={styles.contact}>
            <p>info@cecam.com.ar</p>
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
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@ccartesdelmovimiento</span>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} CECAM - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 