'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

const ArchivesPage = () => {
  const masonryRef = useRef(null);
  const videoRefs = useRef({});
  const [playingVideos, setPlayingVideos] = useState({});
  const [loadingImages, setLoadingImages] = useState({});

  // Efecto para animar la aparición de los elementos del masonry
  useEffect(() => {
    if (!masonryRef.current) return;
    
    // Inicializar los estados
    const initialPlayingState = {};
    const initialLoadingState = {};
    
    mediaItems.forEach((item, index) => {
      const itemId = item.id || `media-${index}`;
      
      if (item.type === 'video') {
        initialPlayingState[itemId] = false;
      }
      
      // Solo marcar las imágenes como en carga inicialmente
      if (item.type === 'image') {
        initialLoadingState[itemId] = true;
      }
    });
    
    setPlayingVideos(initialPlayingState);
    setLoadingImages(initialLoadingState);
  

    // Configurar los event listeners para los videos
    Object.keys(videoRefs.current).forEach(key => {
      const video = videoRefs.current[key];
      const videoData = mediaItems.find(item => item.type === 'video' && item.id === key);
      
      if (video && videoData) {
    
        // Detectar cuando el video comienza a reproducirse
        video.addEventListener('play', () => {
          setPlayingVideos(prev => ({ ...prev, [key]: true }));
        });
        
        // Detectar cuando el video se pausa
        video.addEventListener('pause', () => {
          setPlayingVideos(prev => ({ ...prev, [key]: false }));
        });
      }
    });
    console.log('hi');
  }, []);

  // Manejar clic en el grid item de video
  const handleVideoItemClick = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  
  // Manejar la carga completa de una imagen
  const handleImageLoad = (itemId) => {
    setLoadingImages(prev => ({ ...prev, [itemId]: false }));
  };

  // Datos de las imágenes y videos para el masonry
  const mediaItems = [
    {
      type: 'text',
      id: 'intro-text',
      content: 'CECAM surgió en 2017 de la visión colectiva de un grupo de amigos apasionados por el movimiento. Es un espacio dedicado al crecimiento, intercambio y fomento del movimiento y el arte en todas sus expresiones. Lo que antes era un simple galpón, hoy se ha transformado en un punto de encuentro donde personas entusiastas confluyen para compartir conocimientos y aprendizajes.',
      size: 'large'
    },
    {
      type: 'image',
      id: 'image5',
      src: '/old1.jpg',
      alt: 'El CECAM antes del CECAM',
      caption: 'El CECAM antes del CECAM',
      size: 'regular'
    },


    {
      type: 'image',
      id: 'image2',
      src: '/OLD3.jpg',
      alt: 'La luz al final del túnel',
      caption: 'La luz',
      size: 'regular'
    },

    {
      type: 'video',
      id: 'video1',
      src: '/cecamVideo01.mp4',
      caption: 'Comienza la obra',
      size: 'large',
      thumbnailTime: 0
    },
   



    {
      type: 'video',
      id: 'video2',
      src: '/cecamVideo02.mp4',
      caption: 'Los mobos',
      size: 'large',
      thumbnailTime: 0
    },


    {
      type: 'image',
      id: 'image1',
      src: '/oldConstr.jpg',
      alt: 'Trabajando en los obstáculos',
      caption: 'Trabajando en los obstáculos',
      size: 'regular'
    },
    {
      type: 'image',
      id: 'image6',
      src: '/old4.jpg',
      alt: 'El equipo',
      caption: 'inicios',
      size: 'regular'
    },
    {
      type: 'image',
      id: 'image6',
      src: '/old2.jpg',
      alt: 'El equipo',
      caption: 'El equipo',
      size: 'large'
    }
  ];

  // Renderizar un elemento de media (imagen o video)
  const renderMediaItem = (item, index) => {
    const itemId = item.id || `media-${index}`;
    const itemClass = `${styles.masonryItem} ${item.size === 'large' ? styles.imageLarge : styles.image}`;
    
    if (item.type === 'image') {
      const isLoading = loadingImages[itemId];
      return (
        <div key={index} className={`${itemClass} ${isLoading ? styles.loading : ''}`}>
          {isLoading && (
            <div className={styles.placeholder}></div>
          )}
          <Image 
            src={item.src} 
            alt={item.alt} 
            width={item.size === 'large' ? 800 : 500} 
            height={item.size === 'large' ? 600 : 350}
            className={`${styles.masonryImage} ${isLoading ? styles.hidden : ''}`}
            onLoad={() => handleImageLoad(itemId)}
            priority={index < 4}
          />
          <div className={`${styles.imageCaption} ${isLoading ? styles.hidden : ''}`}>{item.caption}</div>
        </div>
      );
    } else if (item.type === 'video') {
      const isPlaying = playingVideos[itemId];
      return (
        <div 
          key={index} 
          className={`${itemClass} ${styles.videoContainer}`}
        >
          <video 
            ref={el => { if (el) videoRefs.current[itemId] = el; }}
            src={item.src}
            className={styles.masonryVideo}
            controls
            playsInline
            loop
            preload="metadata"
            onClick={(e) => {
              // Evitar que el clic en el video se propague al contenedor
              e.stopPropagation();
            }}
            // Atributos para SEO y accesibilidad
            title={item.caption}
            aria-label={item.caption}
          />
          {!isPlaying && (
            <div 
              className={styles.playIcon} 
              aria-hidden="true"
              onClick={() => handleVideoItemClick(itemId)}
            ></div>
          )}
          <div className={styles.imageCaption}>{item.caption}</div>
        </div>
      );
    } else if (item.type === 'text') {
      return (
        <div key={index} className={`${itemClass} ${styles.textContainer}`}>
          <div className={styles.textContent} itemProp="description">
            {item.content}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <main className={styles.main}>
        <article className={styles.archives}>
          <section 
            className={styles.photoMasonry} 
            ref={masonryRef}
            aria-label="Galería de fotos y videos históricos del CECAM"
            itemScope 
            itemType="http://schema.org/ImageGallery"
          >
            {mediaItems.map(renderMediaItem)}
          </section>
        </article>
      </main>
    </>
  );
};

export default ArchivesPage; 