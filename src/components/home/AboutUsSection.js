import Image from 'next/image';
import styles from './AboutUsSection.module.scss';

const AboutUsSection = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.container}>
        <h2>Sobre el CECAM</h2>
        
        <div className={styles.content}>
          <div className={styles.section}>
            <p>
              CECAM es un centro cultural ubicado en el corazón de Balvanera, dedicado a promover diferentes disciplinas corporales y artísticas que tienen como denominador común el movimiento. Nuestro espacio nace de la pasión por el Parkour, nuestra actividad principal, y se expande hacia otras expresiones que enriquecen el desarrollo físico y mental de nuestra comunidad.
            </p>
          </div>
          
          <div className={styles.section}>
            <h3>Nuestra propuesta</h3>
            <p>
              En CECAM creemos en la formación integral a través del movimiento. Por eso, ofrecemos:
            </p>
            <ul>
              <li><strong>Parkour:</strong> Nuestra disciplina insignia, para todas las edades y niveles</li>
              <li><strong>Circo para niños:</strong> Desarrollando habilidades motoras, creatividad y confianza desde temprana edad</li>
              <li><strong>Artes marciales:</strong> Clases de Wushu, Taekwondo, Karate y Kobudo. Disciplinas que fomentan la concentración, el respeto y la disciplina</li>
              <li><strong>Actividades complementarias:</strong> Talleres, encuentros y eventos que conectan el movimiento con la expresión artística y cultural</li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>El espacio</h3>
            <p>
              Nuestras instalaciones están diseñadas para proporcionar un ambiente seguro y estimulante para todas nuestras actividades. Contamos con dos salas principales equipadas con todo lo necesario para la práctica de nuestras disciplinas.
            </p>
            <div className={styles.galleryContainer}>
              <div className={styles.gallery}>
                <div className={styles.galleryItem}>
                  <Image 
                    src="/pb.webp" 
                    alt="Vista amplia de la sala planta baja de CECAM" 
                    width={900} 
                    height={600} 
                    className={styles.galleryImage}
                    priority
                  />
                </div>
                <div className={styles.galleryItem}>
                  <Image 
                    src="/pa.webp" 
                    alt="Sala de entrenamiento de CECAM" 
                    width={600} 
                    height={800} 
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryItem}>
                  <Image 
                    src="/terraza.webp" 
                    alt="Sala principal de CECAM" 
                    width={600} 
                    height={400} 
                    className={styles.galleryImage}
                  />
                </div>
                <div className={styles.galleryItem}>
                  <Image 
                    src="/pa.webp" 
                    alt="Otra vista de la sala planta baja de CECAM" 
                    width={500} 
                    height={400} 
                    className={styles.galleryImage}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>Nuestro espacio</h3>
            <p>
              Ubicados en Balvanera, CECAM es más que un lugar de entrenamiento: somos un punto de encuentro para la comunidad. Nuestras instalaciones están adaptadas para la práctica segura de todas nuestras disciplinas, creando un ambiente donde conviven personas de todas las edades unidas por el interés en el movimiento, la cultura y el arte.
            </p>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3387452348897!2d-58.41244492425566!3d-34.62196817295809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0d94b7f7e1%3A0x1ca7c0fd7c8d5a1!2sChile%202958%2C%20C1227AAR%20CABA!5e0!3m2!1ses!2sar!4v1718567842123!5m2!1ses!2sar" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de CECAM - Chile 2958, Balvanera"
                className={styles.map}
              ></iframe>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>Filosofía CECAM</h3>
            <p>
              Trabajamos bajo la premisa de que el desarrollo físico no está separado del crecimiento personal. Cada clase, cada entrenamiento y cada actividad está diseñada para fortalecer tanto el cuerpo como la mente, promoviendo valores como la superación personal, el compañerismo y el respeto por las propias posibilidades y las de los demás.
            </p>
          </div>
          
          <div className={styles.section}>
            <h3>¡Sumate a nuestra comunidad!</h3>
            <p>
              Ya sea que tengas experiencia en alguna disciplina o quieras comenzar desde cero, en CECAM hay un lugar para vos. Niños, jóvenes y adultos encuentran en nuestro centro un espacio para descubrir nuevas formas de movimiento, expresión y conexión con los demás.
            </p>
            <p className={styles.tagline}>
              CECAM: donde el movimiento se convierte en arte y el arte en comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 