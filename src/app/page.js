import styles from './page.module.scss';
import HeroSection from '@/components/home/HeroSection';
import AboutUsSection from '@/components/home/AboutUsSection';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutUsSection />
    </main>
  );
};

export default HomePage;
